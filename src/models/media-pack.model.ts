import { Repo, Field, Model, ObjectId, Transform } from '@methodus/data';

@Model('MediaPack', Transform.Automatic)
export class MediaPackModel extends Repo<MediaPackModel> {

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
    public UserId?: string;

    constructor(copyData?: any) {
        super(copyData, MediaPackModel);
    }
}
