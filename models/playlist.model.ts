import { Repo, Field, Model, ObjectId, Transform } from '@methodus/data';
import { ScheduleModel } from './schedule.model';

@Model('Playlist', Transform.Automatic)
export class PlaylistModel extends Repo<PlaylistModel> {

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
    public TimeSlots?: ScheduleModel[];

    constructor(copyData?: any) {
        super(copyData, PlaylistModel);
    }
}
