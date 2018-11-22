import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { BasicComponent } from './tooltip/basic/basic.component';
import { ContentComponent } from './tooltip/content/content.component';
import { PositionComponent } from './tooltip/position/position.component';
import { TriggerEventComponent } from './tooltip/trigger-event/trigger-event.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent },
  { path: 'tooltip/basic', component: BasicComponent },
  { path: 'tooltip/content', component: ContentComponent },
  { path: 'tooltip/position', component: PositionComponent },
  { path: 'tooltip/trigger-event', component: TriggerEventComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    BasicComponent,
    ContentComponent,
    PositionComponent,
    TriggerEventComponent
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
