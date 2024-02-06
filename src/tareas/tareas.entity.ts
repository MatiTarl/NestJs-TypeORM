import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


export enum TareaStatus {
  PENDIENTE = 'PENDIENTE',
  EN_PROCESO = 'EN_PROCESO',
  TERMINADA = 'TERMINADA',
}


@Entity()
export class Status {

  @PrimaryGeneratedColumn()
  id: string
  
  @Column({
    type: 'enum',
    enum: TareaStatus,
    default: TareaStatus.PENDIENTE,
  })
  status: TareaStatus
}


@Entity()
export class Tarea {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  status: TareaStatus;
}


