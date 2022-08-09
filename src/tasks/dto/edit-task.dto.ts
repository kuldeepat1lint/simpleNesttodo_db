import { IsNotEmpty } from 'class-validator'
import { TaskStatus } from '../tasks.model'

export class EditTaskDto {
  @IsNotEmpty()
  title: string
  @IsNotEmpty()
  description: string
  status?: TaskStatus
}
