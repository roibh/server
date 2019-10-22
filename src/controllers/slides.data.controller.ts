import { MethodConfig } from '@methodus/server';
import { AuthMiddleware } from './auth.middleware';
import { SlideModel } from '../models';
import { DataController } from './datacontroller';


@MethodConfig('SlidesDataController', [AuthMiddleware], '/data/Slide')
export class SlidesDataController extends DataController {
    constructor() {
        super(new SlideModel(),'Slide');
    }

}
