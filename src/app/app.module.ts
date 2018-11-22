import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { BasicComponent } from './tree-grid/basic/basic.component';
import { ColumnGroupComponent } from './tree-grid/column-group/column-group.component';
import { FrozenColumnComponent } from './tree-grid/frozen-column/frozen-column.component';
import { FooterRowsComponent } from './tree-grid/footer-rows/footer-rows.component';
import { CheckBoxComponent } from './tree-grid/check-box/check-box.component';
import { TemplateComponent } from './tree-grid/template/template.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    BasicComponent,
    ColumnGroupComponent,
    FrozenColumnComponent,
    FooterRowsComponent,
    CheckBoxComponent,
    TemplateComponent
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
