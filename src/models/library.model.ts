import { Repo, Field, Model, ObjectId, Transform } from '@methodus/data';

@Model('Library', Transform.Automatic)
export class LibraryModel extends Repo<LibraryModel> {

    @ObjectId()
    @Field('_id')
    public _id: string;
    @Field()
    public Name?: string;
    @Field()
    public Date?: Date;
    @Field()
    public user_id?: string;
    @Field()
    public thumb?: string;
    @Field()
    public resource?: string;
    @Field()
    public MediaType?: string;
    constructor(copyData?: any) {
    super(copyData, LibraryModel);
}
}
