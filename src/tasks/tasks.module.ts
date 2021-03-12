import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TaskService } from './tasks.service';

@Module({
  providers: [TaskService],
  controllers: [TasksController]
})
export class TasksModule {}
