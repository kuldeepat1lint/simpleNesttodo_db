import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { TasksService } from './tasks.service'
import { Task } from './tasks.model'
import { CreateTaskDto, EditTaskDto } from './dto/create-task.dto'
import { GetTaskDto } from './dto/get-task-dto'

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAll(@Query() taskDto: GetTaskDto): Task[] {
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
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto)
  }

  @Put('/:id')
  editTaskById(
    @Param('id') id: string,
    @Body() createTaskDto: EditTaskDto,
  ): Task {
    return this.taskService.editTaskById(id, createTaskDto)
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): void {
    return this.taskService.deleteTaskById(id)
  }
}
