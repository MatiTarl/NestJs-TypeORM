import { Module } from '@nestjs/common';
import { TareasModule } from './tareas/tareas.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'nestdb',
      entities: [__dirname + '/**/*.entity{.ts.js}'],
      synchronize: true
    }),
    TareasModule],
  controllers: [],
  providers: [],
  exports: [],
})

export class AppModule{}
