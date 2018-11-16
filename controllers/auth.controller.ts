
import { Body, Method, MethodConfig, Param, Query, Verbs, MethodError, MethodResult, MethodMock } from '@methodus/server';
import { Query as DataQuery } from '@methodus/data';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import { User } from './user.controller';
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
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: '12h',
    algorithm: 'RS256'
};

const privateKEY = fs.readFileSync('./certs/private.key', 'utf8');
const publicKEY = fs.readFileSync('./certs/public.key', 'utf8');

@MethodConfig('AuthController')
export class Auth {

    @Method(Verbs.Post, '/auth/token')
    public static async token(@Body('userOptions') userOptions: any): Promise<MethodResult<any>> {
        try {
            const query = new DataQuery(UserModel);
            query.filter({ Email: userOptions.email, Password: userOptions.password });
            const token = jwt.sign(payload, privateKEY, signOptions);
            return new MethodResult(token);
        } catch (error) {

        }
    }

    @Method(Verbs.Get, '/auth/verify')
    public static async verify(): Promise<MethodResult<any>> {
        try {
            const token = jwt.verify(payload, privateKEY, signOptions);

            return new MethodResult(token);
        } catch (error) {

        }
    }

    @Method(Verbs.Get, '/api/auth/verify')
    public static async decode(@Body('token') token: string): Promise<MethodResult<any>> {
        try {
            return new MethodResult(jwt.decode(token, { complete: true }));
        } catch (error) {

        }
    }



}
