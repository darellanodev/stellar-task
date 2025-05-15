import { Task } from 'src/app/task/models/task.model'

export interface Day {
  date: Date
  tasks: Task[]
}
