import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { BasicComponent } from './accordion/basic/basic.component';
import { MultipleComponent } from './accordion/multiple/multiple.component';
import { DynamicComponent } from './accordion/dynamic/dynamic.component';
import { CustomComponent } from './accordion/custom/custom.component';
import { StyleComponent } from './accordion/style/style.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent },
  { path: 'accordion/basic', component: BasicComponent },
  { path: 'accordion/custom', component: CustomComponent },
  { path: 'accordion/dynamic', component: DynamicComponent },
  { path: 'accordion/multiple', component: MultipleComponent },
  { path: 'accordion/style', component: StyleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    BasicComponent,
    MultipleComponent,
    DynamicComponent,
    CustomComponent,
    StyleComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
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
