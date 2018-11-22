import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { BasicComponent } from './tabs/basic/basic.component';
import { PositionComponent } from './tabs/position/position.component';
import { StyleComponent } from './tabs/style/style.component';
import { TemplateComponent } from './tabs/template/template.component';
import { ScrollableComponent } from './tabs/scrollable/scrollable.component';
import { DynamicContentComponent } from './tabs/dynamic-content/dynamic-content.component';

import { TabDetailComponent } from './tabs/dynamic-content/tab-detail.component';
import { TabDirective } from './tabs/dynamic-content/tab.directive';
import { Dy1Component } from './tabs/dynamic-content/dy1.component';
import { Dy2Component } from './tabs/dynamic-content/dy2.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent },
  { path: 'tabs/basic', component: BasicComponent },
  { path: 'tabs/dynamic-content', component: DynamicContentComponent },
  { path: 'tabs/position', component: PositionComponent },
  { path: 'tabs/scrollable', component: ScrollableComponent },
  { path: 'tabs/style', component: StyleComponent },
  { path: 'tabs/template', component: TemplateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    BasicComponent,
    PositionComponent,
    StyleComponent,
    TemplateComponent,
    ScrollableComponent,
    DynamicContentComponent,
    TabDetailComponent,
    TabDirective,
    Dy1Component,
    Dy2Component
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
  entryComponents: [Dy1Component, Dy2Component],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
