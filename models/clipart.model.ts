import { Repo, Field, Model, ObjectId, Transform } from '@methodus/data';

@Model('ClipArt', Transform.Automatic)
export class ClipArtModel extends Repo<ClipArtModel> {

    @ObjectId()
    @Field('_id')
    public _id: string;
    @Field()
    public Name?: string;
    @Field()
    public Date?: Date;
    @Field()
    public Path?: string;
    constructor(copyData?: any) {
        super(copyData, ClipArtModel);
    }
}
