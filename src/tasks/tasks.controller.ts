import {Controller,Get, Post, Body, Param, Delete} from '@nestjs/common';
import {TaskService} from './tasks.service';
import{Task, Taskstatus} from './tasks.model';
import {CreateTaskDto} from './dto/create-task.dto';

@Controller('/tasks')
export class TasksController {
    constructor(private taskService: TaskService){}

    @Get() 
    getAllTasks(): Task[] {
        return this.taskService.getAllTasks();
    }
    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.taskService.getTaskById(id);
    }
    
    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): 
    Task { //body = req.body =>@Body = req.body
        return this.taskService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id: string): void{
        this.taskService.deleteTaskById(id);
    }
}