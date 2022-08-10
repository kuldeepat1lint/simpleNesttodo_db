import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common'
import { EditTaskDto } from '../dto/edit-task.dto'
import { TaskStatus } from '../constants/taskStatus.enum'

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ]

  transform(value: EditTaskDto, meta: ArgumentMetadata) {
    if (value.status) {
      value.status = value.status.toUpperCase() as TaskStatus
      if (!this.isStatusValid(value.status)) {
        throw new BadRequestException('Invalid status')
      }
    }

    return value
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status)
    return idx !== -1
  }
}
