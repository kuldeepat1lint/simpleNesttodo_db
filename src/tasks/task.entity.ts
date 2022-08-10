import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { TaskStatus } from './constants/taskStatus.enum'

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  description: string

  @Column({
    default: TaskStatus.OPEN,
  })
  status: TaskStatus
}
