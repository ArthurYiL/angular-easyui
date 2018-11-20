import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { BasicComponent } from './combobox/basic/basic.component';
import { MultipleSelectComponent } from './combobox/multiple-select/multiple-select.component';
import { AutoCompleteComponent } from './combobox/auto-complete/auto-complete.component';
import { PanelAlignComponent } from './combobox/panel-align/panel-align.component';
import { ItemTemplateComponent } from './combobox/item-template/item-template.component';
import { AddonsComponent } from './combobox/addons/addons.component';
import { LazyFilteringComponent } from './combobox/lazy-filtering/lazy-filtering.component';
import { VirtualScrollComponent } from './combobox/virtual-scroll/virtual-scroll.component';
import { VirtualScrollLazyLoadComponent } from './combobox/virtual-scroll-lazy-load/virtual-scroll-lazy-load.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    BasicComponent,
    MultipleSelectComponent,
    AutoCompleteComponent,
    PanelAlignComponent,
    ItemTemplateComponent,
    AddonsComponent,
    LazyFilteringComponent,
    VirtualScrollComponent,
    VirtualScrollLazyLoadComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
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
