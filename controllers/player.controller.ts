import { MethodConfig, Method, Verbs, MethodError, MethodResult, Param } from '@methodus/server';
import { TokenModel, ScreenModel, PlaylistModel, SlideModel } from '../models/';
import { Query, ObjectId, Odm } from '@methodus/data';
import { ODM } from '@methodus/data/lib/odm-models';

@MethodConfig('PlayerController', [])
export class PlayerController {
    @Method(Verbs.Post, '/register-player/:token')
    public static async registerPlayer(@Param('token') token: string): Promise<MethodResult> {
        const existing = await TokenModel.query(new Query('Token').filter({ Token: token.toString() }));
        if (!existing || existing.length === 0) {
            const result = await TokenModel.insert({ Token: token.toString(), Date: new Date(), Status: 'pending' });
            return new MethodResult(result);
        } else {
            return new MethodResult(existing[0]);
        }
    }

    @Method(Verbs.Post, '/validate-player/:token')
    public static async validatePlayer(@Param('token') token: any): Promise<MethodResult> {
        const existing = await ScreenModel.query(new Query('Screen').filter({ Token: token.toString() }));
        if (existing && existing.length > 0) {
            await TokenModel.update({ Token: token }, { Date: new Date(), Status: 'active' });
            return new MethodResult(existing[0]);
        } else {
            const tokenData = await TokenModel.query(new Query('Token').filter({ Token: token.toString() }));
            if (tokenData && tokenData.length > 0) {
                return new MethodResult(tokenData[0]);
            } else {
                throw new MethodError('not found', 404);
            }
        }

    }

    @Method(Verbs.Post, '/run-player/:group')
    public static async runPlayer(@Param('group') group: any): Promise<MethodResult> {
        const timePlan = await PlaylistModel.query(new Query('Playlist')
            .filter({ 'TimeSlots.screenGroup._id': group }));
        const slides = [];
        timePlan.forEach((plan) => {
            plan.list.forEach((item) => {
                if (item.elements) {
                    slides.push(Odm.applyObjectID(item._id));
                }
            });
        });

        const slidesDb = await SlideModel.query(new Query('Slide').in('_id', slides));
        const slideDic = {};
        slidesDb.forEach((item) => {
            slideDic[item._id] = item;
        });

        timePlan.forEach((plan) => {
            plan.list.forEach((item) => {
                if (item.elements) {
                    item.elements = slideDic[item._id].elements;
                }
            });
        });

        return new MethodResult(timePlan);

        // if (existing && existing.length > 0) {
        //     const result = await TokenModel.update({ Token: token }, { Date: new Date(), Status: 'active' });
        //     return new MethodResult(result);
        // } else {
        //     return new MethodResult(existing);
        // }
    }

}
