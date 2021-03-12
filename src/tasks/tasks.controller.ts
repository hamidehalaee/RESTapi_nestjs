import {Controller,Get, Post, Body, Header} from '@nestjs/common';
import {TaskService} from './tasks.service';
import{Task, Taskstatus} from './tasks.model';
import {CreateTaskDto} from './dto/create-task.dto'

@Controller('/tasks')
export class TasksController {
    constructor(private taskService: TaskService){}

    @Get() 
    getAllTasks(): Task[] {
        return this.taskService.getAllTasks();
    }

   @Post()
   createTask(@Body() createTaskDto: CreateTaskDto): 
   Task { //body = req.body =>@Body = req.body
       return this.taskService.createTask(createTaskDto);
   }
}