import { Repo, Field, Model, ObjectId, Transform } from '@methodus/data';
import { ScreenGroupModel } from './screen-group.model';

@Model('Screen', Transform.Automatic)
export class ScreenModel extends Repo<ScreenModel> {

    @ObjectId()
    @Field('_id')
    public _id: string;
    @Field()
    public Name?: string;
    @Field()
    public Date?: Date;
    @Field()
    public Status?: string;
    @Field()
    public Group?: ScreenGroupModel;

    constructor(copyData?: any) {
        super(copyData, ScreenModel);
    }
}
