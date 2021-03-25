import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskReposetory } from './task.reposetory';
import { TasksController } from './tasks.controller';
import { TaskService } from './tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskReposetory])],
  providers: [TaskService],
  controllers: [TasksController]
})
export class TasksModule {}
