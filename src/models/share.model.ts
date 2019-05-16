import { Repo, Field, Model, ObjectId, Transform } from '@methodus/data';

@Model('Share', Transform.Automatic)
export class ShareModel extends Repo<ShareModel> {

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
        super(copyData, ShareModel);
    }
}
