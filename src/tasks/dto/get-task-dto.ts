import { TaskStatus } from '../tasks.model'

export class GetTaskDto {
  search: string
  status: TaskStatus
}
