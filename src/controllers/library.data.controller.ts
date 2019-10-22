import { MethodConfig } from '@methodus/server';
import { LibraryModel } from '../models';
import { AuthMiddleware } from './auth.middleware';
/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/

@MethodConfig('LibraryDataController', [AuthMiddleware], '/data/Library')
export class LibraryDataController extends DataController {
    constructor() {
        super(new LibraryModel(), 'Library');
    }
}
