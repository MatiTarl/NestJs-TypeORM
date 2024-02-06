import { Module } from '@nestjs/common';
import { TareasController } from './tareas.controller.js';
import { TareasService } from './tareas.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea, Status } from './tareas.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Tarea, Status])],
  controllers: [TareasController],
  providers: [TareasService]
})
export class TareasModule {}
