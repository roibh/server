import { MethodConfig, Files, Method, Verbs, MethodError, MethodResult, Param } from '@methodus/server';
import { TokenModel } from '../models/';
import { Query, ReturnType } from '@methodus/data';

@MethodConfig('PlayerController', [])
export class PlayerController {
    @Method(Verbs.Post, '/register-player/:token')
    public static async registerPlayer(@Param('token') token: any): Promise<MethodResult> {
        const existing = await TokenModel.query(new Query('Token').filter({ Token: token }));
        if (!existing || existing.length === 0) {
            const result = await TokenModel.insert({ Token: token, Date: new Date(), Status: 'pending' });
            return new MethodResult(result);
        } else {
            return new MethodResult(existing);
        }
    }
}
