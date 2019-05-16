import { Repo, Field, Model, ObjectId, Transform } from '@methodus/data';

@Model('Token', Transform.Automatic)
export class TokenModel extends Repo<TokenModel> {

    @ObjectId()
    @Field('_id')
    public _id: string;
    @Field()
    public Token?: string;
    @Field()
    public PlayerData?: Date;

    @ObjectId()
    @Field()
    public UserId?: string;

    @Field()
    public Status?: string;
    constructor(copyData?: any) {
        super(copyData, TokenModel);
    }
}
