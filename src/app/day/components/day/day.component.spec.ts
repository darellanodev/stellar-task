import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DayComponent } from './day.component'
import { Day } from '../../models/day.model'
import { TaskComponent } from 'src/app/task/components/task/task.component'

describe('DayComponent', () => {
  let component: DayComponent
  let fixture: ComponentFixture<DayComponent>
  let compiled: any

  const exampleDay: Day = {
    date: new Date('2025-05-15'),
    tasks: [
      {
        id: '1',
        description: 'Design the app logo',
        createdBy: 'darellanodev',
        assignedTo: 'darellanodev',
        requestedBy: 'darellanodev',
        status: 'pending',
        createdAt: new Date(),
      },
    ],
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayComponent, TaskComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DayComponent)
    component = fixture.componentInstance
    component.day = exampleDay
    fixture.detectChanges()
    compiled = fixture.nativeElement
  })

  it('should display the date', () => {
    const date = compiled.querySelector('.day-date')?.textContent
    expect(date).toContain('2025-05-15')
  })

  it('should render a list of tasks', () => {
    const totalTasks = compiled.querySelectorAll('app-task').length
    expect(totalTasks).toBe(1)
  })
})
