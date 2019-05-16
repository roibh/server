import { Repo, Field, Model, ObjectId, Transform } from '@methodus/data';

@Model('ScreenGroup', Transform.Automatic)
export class ScreenGroupModel extends Repo<ScreenGroupModel> {

    @ObjectId()
    @Field('_id')
    public _id: string;
    @Field()
    public Name?: string;
    @Field()
    public Date?: Date;
    @Field()
    public Status?: string;

    constructor(copyData?: any) {
        super(copyData, ScreenGroupModel);
    }
}
