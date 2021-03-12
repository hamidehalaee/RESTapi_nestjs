import {Controller,Get, Post, Body, Header} from '@nestjs/common';
import {TaskService} from './tasks.service';
import{Task, Taskstatus} from './tasks.model'

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TaskService){}

    @Get() 
    getAllTasks(): Task[] {
        return this.taskService.getAllTasks();
    }

   @Post()
   createTask(
       @Body('title') title: string, 
       @Body('description') description: string  
   ): Task { //body = req.body =>@Body = req.body
       return this.taskService.createTask(title,description);
   }
}