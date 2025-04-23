import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TaskComponent } from './task.component'
import { Task } from '../../models/task.model'

describe('taskComponent', () => {
  let fixture: ComponentFixture<TaskComponent>
  let component: TaskComponent
  let compiled: any

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
    compiled = fixture.nativeElement
  })

  it('should display the task description', () => {
    const textContent = compiled.querySelector('.task-description').textContent
    expect(textContent).toContain(exampleTask.description)
  })

  it('should show status with the correct class', () => {
    const badge = compiled.querySelector('.status-badge')
    expect(badge.classList).toContain('status-pending')
  })

  it('it should display the creator of the task', () => {
    const createdBy = compiled.querySelector('.task-createdBy').textContent
    expect(createdBy).toContain(exampleTask.createdBy)
  })
})
