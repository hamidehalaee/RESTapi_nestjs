import { Taskstatus } from '../tasks.model';
import { IsString } from 'class-validator';

export class GetTaskFilterDton{
    status: Taskstatus;

    @IsString()
    search: string;
}