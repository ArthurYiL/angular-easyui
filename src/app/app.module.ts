import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { BasicComponent } from './calender/basic/basic.component';
import { DisableDateComponent } from './calender/disable-date/disable-date.component';
import { FirstDayOfWeekComponent } from './calender/first-day-of-week/first-day-of-week.component';
import { WeekNumberComponent } from './calender/week-number/week-number.component';
import { TemplateComponent } from './calender/template/template.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    BasicComponent,
    DisableDateComponent,
    FirstDayOfWeekComponent,
    WeekNumberComponent,
    TemplateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    EasyUIModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
