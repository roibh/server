import { MethodConfig, Method, Verbs, MethodError, MethodResult, Param } from '@methodus/server';
import { TokenModel, ScreenModel, PlaylistModel } from '../models/';
import { Query } from '@methodus/data';

@MethodConfig('PlayerController', [])
export class PlayerController {
    @Method(Verbs.Post, '/register-player/:token')
    public static async registerPlayer(@Param('token') token: any): Promise<MethodResult> {
        const existing = await TokenModel.query(new Query('Token').filter({ Token: token }));
        if (!existing || existing.length === 0) {
            const result = await TokenModel.insert({ Token: token, Date: new Date(), Status: 'pending' });
            return new MethodResult(result);
        } else {
            return new MethodResult(existing[0]);
        }
    }

    @Method(Verbs.Post, '/validate-player/:token')
    public static async validatePlayer(@Param('token') token: any): Promise<MethodResult> {
        const existing = await ScreenModel.query(new Query('Screen').filter({ Token: token }));
        if (existing && existing.length > 0) {
            const result = await TokenModel.update({ Token: token }, { Date: new Date(), Status: 'active' });
            return new MethodResult(existing[0]);
        }
        return new MethodResult(existing);
    }

    @Method(Verbs.Post, '/run-player/:group')
    public static async runPlayer(@Param('group') group: any): Promise<MethodResult> {
        const timePlan = await PlaylistModel.query(new Query('Playlist')
            .filter({ "TimeSlots.screenGroup._id": group }));

        return new MethodResult(timePlan);

        // if (existing && existing.length > 0) {
        //     const result = await TokenModel.update({ Token: token }, { Date: new Date(), Status: 'active' });
        //     return new MethodResult(result);
        // } else {
        //     return new MethodResult(existing);
        // }
    }

}
