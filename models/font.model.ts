import { Repo, Field, Model, ObjectId, Transform } from '@methodus/data';

@Model('Font', Transform.Automatic)
export class FontModel extends Repo<FontModel> {

    @ObjectId()
    @Field('_id')
    public _id: string;
    @Field()
    public Name?: string;
    @Field()
    public Style?: string;
    @Field()
    public Weight?: string;
    @Field()
    public Date?: Date;
    @Field()
    public Path?: string;
    constructor(copyData?: any) {
        super(copyData, FontModel);
    }
}
