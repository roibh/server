import { Repo, Field, Model, ObjectId, Transform } from '@methodus/data';

@Model('Schedule', Transform.Automatic)
export class ScheduleModel extends Repo<ScheduleModel> {

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
        super(copyData, ScheduleModel);
    }
}
