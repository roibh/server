import { MethodConfig, Method, Verbs } from '@methodus/server';
import { LibraryModel } from '../models/library.model';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('Library', [], LibraryModel)
export class LibraryDataController extends DataController {

}
