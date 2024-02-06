import { Injectable } from '@nestjs/common';
import { Status, Tarea } from './tareas.entity.js';
import { TareaStatus } from './tareas.entity.js';
import { v4 } from 'uuid';
import { UpdateTareaDto } from './dto/tarea.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TareasService {

  constructor(@InjectRepository(Tarea) private tareaRepo: Repository<Tarea>) {}

  getAllTareas() {
    return this.tareaRepo.find();
  }
  createTareas(title: string, description: string) {
    const tarea = this.tareaRepo.create({
      title: title,
      description: description,
      id: v4(),
      status: TareaStatus.PENDIENTE
    })
    return this.tareaRepo.save(tarea)
  }

  async updateTareas(id: string, updateFiles: UpdateTareaDto) {

    const tareaFind = await this.tareaRepo.findOne(id);
    this.tareaRepo.merge(await tareaFind, updateFiles);
    return this.tareaRepo.save(tareaFind);
  }
  
  async deleteTareas(id: string) {
    await this.tareaRepo.delete(id)
    return true 
  }

  async getTareaById(id: string){
    return await this.tareaRepo.findOne(id);
  }
}
