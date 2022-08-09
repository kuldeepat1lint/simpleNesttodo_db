import { IsIn, IsNotEmpty, IsOptional } from 'class-validator'
import { TaskStatus } from '../tasks.model'

const allowedStatuses = Object.values(TaskStatus)
export class GetTaskDto {
  @IsOptional()
  @IsNotEmpty()
  search: string

  @IsOptional()
  @IsIn([allowedStatuses])
  status: TaskStatus
}
