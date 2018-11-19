import { DataController } from './data.controller';
import { MethodConfig, Method, Verbs } from '@methodus/server';
import { ScreenModel } from '../models/screen.model';

@MethodConfig('Screen', [], ScreenModel)
export class ScreensDataController extends DataController {

}
