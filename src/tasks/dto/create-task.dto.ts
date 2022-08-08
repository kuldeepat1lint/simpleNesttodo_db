import { TaskStatus } from '../tasks.model'

export class CreateTaskDto {
  title: string
  description: string
}

export class EditTaskDto {
  title: string
  description: string
  status: TaskStatus
}
