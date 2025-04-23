import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TaskComponent } from './task.component'
import { Task } from '../../models/task.model'

describe('taskComponent', () => {
  let fixture: ComponentFixture<TaskComponent>
  let component: TaskComponent

  const exampleTask: Task = {
    id: '1',
    description: 'Create the Task component',
    createdBy: 'darellanodev',
    assignedTo: 'darellanodev',
    requestedBy: 'darellanodev',
    status: 'pending',
    createdAt: new Date(),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TaskComponent)
    component = fixture.componentInstance
    component.task = exampleTask
    fixture.detectChanges()
  })

  it('should display the task description', () => {
    const compiled = fixture.nativeElement
    const textContent = compiled.querySelector('.task-description').textContent
    expect(textContent).toContain(exampleTask.description)
  })

  it('should show status with the correct class', () => {
    const compiled = fixture.nativeElement
    const badge = compiled.querySelector('.status-badge')
    expect(badge.classList).toContain('status-pending')
  })
})
