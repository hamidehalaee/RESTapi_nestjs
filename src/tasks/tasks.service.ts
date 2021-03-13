import { Injectable } from '@nestjs/common';
import {Task} from './tasks.model';
import {Taskstatus} from './tasks.model';
import * as uuid from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService{
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }
    getTaskById(id: string): Task{
        return this.tasks.find(task => task.id === id);//return true
    }
    createTask(createTaskDto: CreateTaskDto): Task{
        const {title , description} = createTaskDto;
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