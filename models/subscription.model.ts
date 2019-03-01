import { Repo, Field, Model, ObjectId, Transform } from '@methodus/data';
import { DateTime } from 'aws-sdk/clients/glacier';

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
    public Date?: DateTime;

    @Field()
    public Status?: string;
    constructor(copyData?: any) {
        super(copyData, SubscriptionModel);
    }
}
