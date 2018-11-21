import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { AlertComponent } from './messager/alert/alert.component';
import { InteractiveComponent } from './messager/interactive/interactive.component';
import { CustomComponent } from './messager/custom/custom.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent },
  { path: 'messager/alert', component: AlertComponent },
  { path: 'messager/custom', component: CustomComponent },
  { path: 'messager/interactive', component: InteractiveComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    AlertComponent,
    InteractiveComponent,
    CustomComponent
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
