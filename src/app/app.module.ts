import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { BasicComponent } from './combogrid/basic/basic.component';
import { MultipleComponent } from './combogrid/multiple/multiple.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent },
  { path: 'combogrid/basic', component: BasicComponent },
  { path: 'combogrid/multiple', component: MultipleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    BasicComponent,
    MultipleComponent
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
