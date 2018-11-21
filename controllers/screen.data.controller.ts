import { MethodConfig, Method, Verbs } from '@methodus/server';
import { ScreenModel } from '../models/screen.model';

import { DataController } from './data.controller';
@MethodConfig('Screen', [], ScreenModel)
export class ScreensDataController extends DataController {

}
