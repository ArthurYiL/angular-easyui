import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { BasicComponent } from './time-spinner/basic/basic.component';
import { RangeComponent } from './time-spinner/range/range.component';
import { StyleComponent } from './time-spinner/style/style.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent },
  { path: 'time-spinner/basic', component: BasicComponent },
  { path: 'time-spinner/range', component: RangeComponent },
  { path: 'time-spinner/style', component: StyleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    BasicComponent,
    RangeComponent,
    StyleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
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
