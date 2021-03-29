import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { Messagemq } from './tasks/messages/message.module';
import { TasksModule } from './tasks/tasks.module';


@Module({
  imports: [TasksModule,
    TypeOrmModule.forRoot(typeOrmConfig),Messagemq
  ],
})
export class AppModule {
  
}
