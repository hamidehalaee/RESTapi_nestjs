import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions ={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'hamide',
    password: '@Hamideh5',
    database: 'databasenest',
    entities: [__dirname + '/../**/*.entity.ts'],
    synchronize: true,
}