import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { AppComponent as Layout_AppComponent } from './layout/app/app.component';
import { BasicComponent } from './layout/basic/basic.component';
import { SidePanelComponent } from './layout/side-panel/side-panel.component';
import { SplitPanelComponent } from './layout/split-panel/split-panel.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent },
  { path: 'layout/app', component: Layout_AppComponent },
  { path: 'layout/basic', component: BasicComponent },
  { path: 'layout/side-panel', component: SidePanelComponent },
  { path: 'layout/split-panel', component: SplitPanelComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    Layout_AppComponent,
    BasicComponent,
    SidePanelComponent,
    SplitPanelComponent,
    AppLayoutComponent
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
