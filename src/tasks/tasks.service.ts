import { Injectable } from '@nestjs/common';
import {Task} from './tasks.model';
import {Taskstatus} from './tasks.model';
import * as uuid from 'uuid';

@Injectable()
export class TaskService{
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    createTask(title: string , description: string): Task{
        const task: Task={
            id:uuid.v4(),
            title, // => title: title
            description,
            status: Taskstatus.OPEN,
        };
        this.tasks.push(task);
        return task;
    }
}