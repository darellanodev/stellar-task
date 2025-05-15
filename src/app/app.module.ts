import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { TaskComponent } from './task/components/task/task.component';
import { DayComponent } from './day/components/day/day.component'

@NgModule({
  declarations: [AppComponent, NavBarComponent, TaskComponent, DayComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
