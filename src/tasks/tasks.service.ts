import { Injectable, NotFoundException } from '@nestjs/common'
import { Task, TaskStatus } from './tasks.model'
import { v1 as uuid } from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto'
import { EditTaskDto } from './dto/edit-task.dto'
import { GetTaskDto } from './dto/get-task-dto'

@Injectable()
export class TasksService {
  private tasks: Task[] = []

  getAllTask(): Task[] {
    return this.tasks
  }

  getTask(taskDto: GetTaskDto) {
    let tasks = this.getAllTask()

    if (taskDto.status) {
      tasks = tasks.filter((task) => task.status === taskDto.status)
    }

    if (taskDto.search) {
      tasks = tasks.filter((take) => {
        return (
          take.title.includes(taskDto.search) ||
          take.description.includes(taskDto.search)
        )
      })
    }

    return tasks
  }

  getTaskById(id: string): Task {
    const found = this.tasks.find((ele) => ele.id === id)

    if (!found) {
      throw new NotFoundException('Task with given Id not found')
    }

    return found
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    }

    this.tasks.push(task)
    return task
  }

  editTaskById(id: string, editTask: EditTaskDto): Task {
    // let editTaskIndex = -1
    // this.tasks.forEach((ele, index) => {
    //   if (ele.id === id) {
    //     editTaskIndex = index
    //     return
    //   }
    // })

    // if (editTaskIndex < 0) {
    //   throw new HttpException('id not found', HttpStatus.NOT_FOUND)
    // }
    // Object.assign(this.tasks[editTaskIndex], editTask)
    // return this.tasks[editTaskIndex]
    const task = this.getTaskById(id)
    Object.assign(task, editTask)
    return task
  }

  deleteTaskById(id: string): Task {
    const found = this.getTaskById(id)
    this.tasks = this.tasks.filter((ele) => {
      if (ele.id === found.id) {
        return false
      }
      return true
    })

    return found
  }
}
