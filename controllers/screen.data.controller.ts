import { MethodConfig, Method, Verbs } from '@methodus/server';
import { ScreenModel } from '../models/screen.model';

/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
@MethodConfig('Screen', [], ScreenModel)
export class ScreensDataController extends DataController {

}
