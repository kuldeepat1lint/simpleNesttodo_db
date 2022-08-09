import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { TasksService } from './tasks.service'
import { Task } from './tasks.model'
import { CreateTaskDto } from './dto/create-task.dto'
import { EditTaskDto } from './dto/edit-task.dto'
import { GetTaskDto } from './dto/get-task-dto'
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe'
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAll(@Query(ValidationPipe) taskDto: GetTaskDto): Task[] {
    if (Object.keys(taskDto).length) {
      return this.taskService.getTask(taskDto)
    }
    return this.taskService.getAllTask()
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id)
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto)
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  editTaskById(
    @Param('id') id: string,
    @Body(TaskStatusValidationPipe) editTaskDto: EditTaskDto,
  ): Task {
    return this.taskService.editTaskById(id, editTaskDto)
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): Task {
    return this.taskService.deleteTaskById(id)
  }
}
