import { EntityRepository , Repository } from 'typeorm';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TaskReposetory extends Repository<Task>{

}