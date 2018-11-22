import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { BasicComponent } from './tree/basic/basic.component';
import { CheckBoxComponent } from './tree/check-box/check-box.component';
import { NodeIconComponent } from './tree/node-icon/node-icon.component';
import { LazyLoadComponent } from './tree/lazy-load/lazy-load.component';
import { TemplateComponent } from './tree/template/template.component';
import { FilteringComponent } from './tree/filtering/filtering.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent },
  { path: 'tree/basic', component: BasicComponent },
  { path: 'tree/check-box', component: CheckBoxComponent },
  { path: 'tree/filtering', component: FilteringComponent },
  { path: 'tree/lazy-load', component: LazyLoadComponent },
  { path: 'tree/node-icon', component: NodeIconComponent },
  { path: 'tree/template', component: TemplateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    BasicComponent,
    CheckBoxComponent,
    NodeIconComponent,
    LazyLoadComponent,
    TemplateComponent,
    FilteringComponent
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
