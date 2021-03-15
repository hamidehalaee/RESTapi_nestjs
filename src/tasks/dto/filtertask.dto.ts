import { Taskstatus } from '../tasks.model';
import { IsString,IsNotEmpty } from 'class-validator';

export class GetTaskFilterDton{
    @IsNotEmpty()
    status: Taskstatus;

    @IsNotEmpty()
    @IsString()
    search: string;
}