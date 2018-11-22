
import { Body, Method, MethodConfig, Param, Query, Verbs, MethodError, MethodResult, MethodMock, MethodResultStatus } from '@methodus/server';
import { Query as DataQuery, ReturnType } from '@methodus/data';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import { UserModel } from '..';

// PAYLOAD
const payload = {
    data1: 'Data 1',
    data2: 'Data 2',
    data3: 'Data 3',
    data4: 'Data 4',
};
// PRIVATE and PUBLIC key

const i = 'Mysoft corp';          // Issuer
const s = 'some@user.com';        // Subject
const a = 'http://mysoftcorp.in'; // Audience
// SIGNING OPTIONS
const signOptions = {
    algorithm: 'RS256',
    audience: a,
    expiresIn: '12h',
    issuer: i,
    subject: s,
};

const privateKEY = fs.readFileSync('./certs/private.key', 'utf8');
const publicKEY = fs.readFileSync('./certs/public.key', 'utf8');

@MethodConfig('AuthController')
export class Auth {
    @Method(Verbs.Post, '/api/auth/signup')
    public static async signup(@Body('userOptions') userOptions: any): Promise<MethodResult<any>> {
        try {
            const query = new DataQuery(UserModel);
            const logedInUser = await query.filter({
                Email: userOptions.userName,

            }).run(ReturnType.Single);
            if (logedInUser) {
                throw new MethodError(`user exists`, 403);
            } else {
                // insert into user collection
                const result = await UserModel.insert(userOptions);
                return new MethodResult(result);
            }
        } catch (error) {
            throw new MethodError(error, 500);
        }
    }

    @Method(Verbs.Post, '/api/auth/token')
    public static async token(@Body('userOptions') userOptions: any): Promise<MethodResult<any>> {
        try {
            const query = new DataQuery(UserModel);
            const logedInUser = await query.filter({
                Email: userOptions.userName,
                Password: userOptions.password,
            }).run(ReturnType.Single);
            if (logedInUser) {
                const token = jwt.sign(payload, privateKEY, signOptions);
                return new MethodResult({ token });
            } else {
                return new MethodResultStatus({ message: 'user not found' }, 404) as MethodResult;
            }

        } catch (error) {
            throw new MethodError(error, 500);
        }
    }

    @Method(Verbs.Get, '/auth/verify')
    public static async verify(): Promise<MethodResult<any>> {
        try {
            const token = jwt.verify(payload, privateKEY, signOptions);

            return new MethodResult(token);
        } catch (error) {
            throw new MethodError(error, 500);
        }
    }

    @Method(Verbs.Get, '/api/auth/verify')
    public static async decode(@Body('token') token: string): Promise<MethodResult<any>> {
        try {
            return new MethodResult(jwt.decode(token, { complete: true }));
        } catch (error) {
            throw new MethodError(error, 500);
        }
    }
}

