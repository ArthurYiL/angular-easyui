import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { BasicComponent } from './number-box/basic/basic.component';
import { FormatComponent } from './number-box/format/format.component';
import { SpinnerComponent } from './number-box/spinner/spinner.component';
import { SpinAlignComponent } from './number-box/spin-align/spin-align.component';
import { AddonComponent } from './number-box/addon/addon.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent },
  { path: 'number-box/addon', component: AddonComponent },
  { path: 'number-box/basic', component: BasicComponent },
  { path: 'number-box/format', component: FormatComponent },
  { path: 'number-box/spin-align', component: SpinAlignComponent },
  { path: 'number-box/spinner', component: SpinnerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    BasicComponent,
    FormatComponent,
    SpinnerComponent,
    SpinAlignComponent,
    AddonComponent
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
