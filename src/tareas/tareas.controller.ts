import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TareasService } from './tareas.service.js';
import { CrearTareaDto, UpdateTareaDto } from './dto/tarea.dto.js';



@Controller('tareas')
export class TareasController {
  constructor(private TareasService: TareasService) {}

  @Get()
  helloworld() {
    return this.TareasService.getAllTareas();
  }
  @Post()
  crateTarea(@Body() nuevaTarea: CrearTareaDto) {
    return this.TareasService.createTareas(
      nuevaTarea.description,
      nuevaTarea.title,
    );
  }
  @Delete(':id')
  deleteTarea(@Param('id') id: string) {
    this.TareasService.deleteTareas(id);
  }
  @Patch(':id')
  updateTarea(@Param('id') id: string, @Body() updateFiles: UpdateTareaDto) {
    return this.TareasService.updateTareas(id, updateFiles)
  }

}
