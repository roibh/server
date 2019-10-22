import { MethodConfig, Method, Verbs, MethodError, MethodResult, Param } from '@methodus/server';
import { TokenModel, ScreenModel, PlaylistModel, SlideModel } from '../models/';
import { Query, Odm } from '@methodus/data';
import * as etag from 'etag';

@MethodConfig('PlayerController', [])
export class PlayerController {
    @Method(Verbs.Post, '/register-player/:token')
    public async registerPlayer(@Param('token') token: string): Promise<MethodResult> {
        const existing = await TokenModel.query(new Query('Token').filter({ Token: token.toString() }));
        if (!existing || existing.length === 0) {
            const result = await TokenModel.insert({ Token: token.toString(), Date: new Date(), Status: 'pending' });
            return new MethodResult(result);
        } else {
            return new MethodResult(existing[0]);
        }
    }

    @Method(Verbs.Post, '/validate-player/:token')
    public async validatePlayer(@Param('token') token: any): Promise<MethodResult> {
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

    @Method(Verbs.Post, '/run-player/:group/:screen_id')
    public async runPlayer(@Param('group') group: any, @Param('screen_id') screen_id: any): Promise<MethodResult> {

        // validate screen

        const screen = await ScreenModel.get(screen_id);
        if (!screen) {
            throw new MethodError('invalid screen request');
        }
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
                    Object.assign(item, slideDic[item._id]);
                }
            });
        });
        const Etag = etag(JSON.stringify(timePlan));
        const result = new MethodResult({ timePlan, Etag });
        result.setHeader('ETag', Etag);
        return result;
    }
}
