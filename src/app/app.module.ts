import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { BasicComponent } from './link-button/basic/basic.component';
import { PlainComponent } from './link-button/plain/plain.component';
import { SizeComponent } from './link-button/size/size.component';
import { IconAlignComponent } from './link-button/icon-align/icon-align.component';
import { ToggleComponent } from './link-button/toggle/toggle.component';
import { GroupComponent } from './link-button/group/group.component';
import { StyleComponent } from './link-button/style/style.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent },
  { path: 'link-button/basic', component: BasicComponent },
  { path: 'link-button/group', component: GroupComponent },
  { path: 'link-button/icon-align', component: IconAlignComponent },
  { path: 'link-button/plain', component: PlainComponent },
  { path: 'link-button/size', component: SizeComponent },
  { path: 'link-button/style', component: StyleComponent },
  { path: 'link-button/toggle', component: ToggleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    BasicComponent,
    PlainComponent,
    SizeComponent,
    IconAlignComponent,
    ToggleComponent,
    GroupComponent,
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
