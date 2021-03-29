import { Injectable, NotFoundException } from '@nestjs/common';
import {Task} from './tasks.model';
import {Taskstatus} from './tasks.model';
import { CreateTaskDto } from './dto/createtask.dto';
import { GetTaskFilterDton } from './dto/filtertask.dto';

@Injectable() 
//@Injectable() marks a class as a provider
//the main idea of a provider is that
// it can inject dependencies, this means
// that objects can create various relationships with each
// other and these instances be delegated to Nest runtime.
export class TaskService{
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    GetTasksWithFilters(filterDto: GetTaskFilterDton): Task[]{
        const {status , search} = filterDto;
        let tasks = this.getAllTasks();

        if(status){
            tasks = tasks.filter(task => task.status === status);
        }
        if(search){
            tasks = tasks.filter(task => 
                task.title.includes(search)||
                task.description.includes(search)
                );
        }

        return tasks;
    }

    getTaskById(id: string): Task{
        const found =  this.tasks.find(task => task.id === id);//return true

        //err Handeling getting a non-existing task
        if(!found){
            throw new NotFoundException(`task Id ${id} Not Found!`);
        }
        //err Handeling getting a non-existing task

        return found;
    }
    deleteTaskById(id: string): void{

        //err Handeling deleting a non-existing task
        const found = this.getTaskById(id);
        //err Handeling deleting a non-existing task

        this.tasks = this.tasks.filter(task => task.id !== found.id);//return false
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

    
    updateTaskStatus(id:string,status: Taskstatus): Task{
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }
}