import { Repo, Field, Model, ObjectId, Transform } from '@methodus/data';

@Model('Subscription', Transform.Automatic)
export class SubscriptionModel extends Repo<SubscriptionModel> {

    @ObjectId()
    @Field('_id')
    public _id?: string;

    @ObjectId()
    @Field()
    public UserId?: string;

    @Field()
    public Plan?: string;

    @Field()
    public Date?: Date;

    @Field()
    public Status?: string;
    constructor(copyData?: any) {
        super(copyData, SubscriptionModel);
    }
}
