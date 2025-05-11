import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Input() logo = ''
  @Input() items: string[] = []

  getItem(item: string): string {
    if (item.includes('#')) {
      return (
        '<i class="fas fa-' +
        item.split('#')[0] +
        '"></i> ' +
        item.split('#')[1]
      )
    }
    return item
  }
}
