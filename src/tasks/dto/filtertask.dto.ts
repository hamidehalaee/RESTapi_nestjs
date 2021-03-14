import { Taskstatus } from '../tasks.model';

export class GetTaskFilterDton{
    status: Taskstatus;
    search: string;
}