import { MethodConfig, MethodConfigExtend } from '@methodus/server';
import { UserModel } from '../models';
import { UserMock } from '../mocks/';
/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/

@MethodConfig('UserController', [], UserModel)
@MethodConfigExtend(DataController)
export class UserController extends DataController {
}
