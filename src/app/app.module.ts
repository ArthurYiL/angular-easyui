import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { DialogEditingComponent } from './datagrid/dialog-editing/dialog-editing.component';
import { EditFormComponent } from './datagrid/edit-form/edit-form.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent },
  { path: 'datagrid/dialog-editing', component: DialogEditingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    DialogEditingComponent,
    EditFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
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
