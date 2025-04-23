import { Component } from '@angular/core'
import { Task } from './task/models/task.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'stellar-task'

  exampleTask: Task = {
    id: '1',
    description: 'Implement TDD approach',
    createdBy: 'darellanodev',
    assignedTo: 'darellanodev',
    requestedBy: 'darellanodev',
    status: 'pending',
    createdAt: new Date(),
  }
}
