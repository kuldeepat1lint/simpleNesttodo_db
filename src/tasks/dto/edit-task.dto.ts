import { IsNotEmpty } from 'class-validator'
import { TaskStatus } from '../constants/taskStatus.enum'

export class EditTaskDto {
  @IsNotEmpty()
  title: string
  @IsNotEmpty()
  description: string
  status?: TaskStatus
}
