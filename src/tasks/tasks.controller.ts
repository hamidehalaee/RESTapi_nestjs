import {Controller,Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {TaskService} from './tasks.service';
import {CreateTaskDto} from './dto/createtask.dto';
import { GetTaskFilterDton } from './dto/filtertask.dto';

//we inject user service into UserController’s constructor and modify the methods.
@Controller('/tasks')
export class TasksController {
    constructor(private taskService: TaskService){}

    // @Get() 
    // getTasks(@Query() filterDto: GetTaskFilterDton): Task[] {
        
    //     if(Object.keys(filterDto).length){
    //         return this.taskService.GetTasksWithFilters(filterDto);
    //     }else{
    //         return this.taskService.getAllTasks();
    //     }
    // }
    // @Get('/:id')
    // getTaskById(@Param('id') id: string): Task {
    //     return this.taskService.getTaskById(id);
    // }
    
    // //declare nestjs pipes validator
    // @Post()
    // @UsePipes(ValidationPipe)
    // createTask(@Body() createTaskDto: CreateTaskDto): 
    // Task { //body = req.body =>@Body = req.body
    //     return this.taskService.createTask(createTaskDto);
    // }

    // @Patch('/:id/status')
    // updateTaskStatus(
    //     @Param('id') id:string,
    //     @Body('status') status: Taskstatus): Task{
    //     return this.taskService.updateTaskStatus(id , status);//return cuz of Task
    // }

    // @Delete('/:id')
    // deleteTaskById(@Param('id') id: string): void{
    //     this.taskService.deleteTaskById(id);
    // }
}