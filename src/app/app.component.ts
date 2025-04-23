import { Component } from '@angular/core'
import { Task } from './task/models/task.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'stellar-task'

  examplePendingTask: Task = {
    id: '1',
    description: 'Design the app logo',
    createdBy: 'darellanodev',
    assignedTo: 'darellanodev',
    requestedBy: 'darellanodev',
    status: 'pending',
    createdAt: new Date(),
  }
  exampleInProgressTask: Task = {
    id: '2',
    description: 'Implement the logout button',
    createdBy: 'darellanodev',
    assignedTo: 'darellanodev',
    requestedBy: 'darellanodev',
    status: 'in-progress',
    createdAt: new Date(),
  }
  exampleCompletedTask: Task = {
    id: '3',
    description: 'Design the wireframe for the about page',
    createdBy: 'darellanodev',
    assignedTo: 'darellanodev',
    requestedBy: 'darellanodev',
    status: 'completed',
    createdAt: new Date(),
  }
}
