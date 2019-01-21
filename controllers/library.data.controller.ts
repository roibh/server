import { MethodConfig, MethodConfigExtend } from '@methodus/server';
import { LibraryModel } from '../models';
import * as aws from 'aws-sdk';
import { AuthMiddleware } from './auth.middleware';
/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/

@MethodConfig('LibraryDataController', [AuthMiddleware], LibraryModel)
@MethodConfigExtend(DataController, 'LibraryDataController')
export class LibraryDataController extends DataController {

}
