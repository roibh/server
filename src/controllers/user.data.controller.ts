import { MethodConfig } from '@methodus/server';
import { UserModel } from '../models';

import { DataController } from './datacontroller';


@MethodConfig('UserController', [], '/data/User')
export class UserController extends DataController {
    constructor() {
        super(new UserModel(),'User');
    }

}
