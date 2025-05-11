import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NavBarComponent } from './nav-bar.component'

describe('NavBarComponent', () => {
  let fixture: ComponentFixture<NavBarComponent>
  let component: NavBarComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarComponent],
    }).compileComponents()
    fixture = TestBed.createComponent(NavBarComponent)
    component = fixture.componentInstance
    component.logo = 'Stellar Task'
    fixture.detectChanges()
  })

  it('should display logo text', () => {
    const logo = fixture.nativeElement.querySelector('.navbar-brand')
    expect(logo.textContent).toContain('Stellar Task')
  })

  it('show display the menu items without icons', () => {
    component.items = ['Home', 'Tasks']
    fixture.detectChanges()
    const items = fixture.nativeElement.querySelectorAll('.nav-link')
    expect(items.length).toBe(2)
    expect(items[0].textContent).toBe('Home')
    expect(items[1].textContent).toBe('Tasks')
  })

  it('show display a menu item with an icon', () => {
    component.items = ['user#Profile']
    fixture.detectChanges()
    const items = fixture.nativeElement.querySelectorAll('.nav-link')
    expect(items[0].textContent).toBe('<i class="fas fa-user"></i> Profile')
  })
})
