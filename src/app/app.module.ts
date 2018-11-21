import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { BasicComponent } from './datalist/basic/basic.component';
import { CustomComponent } from './datalist/custom/custom.component';
import { PaginationComponent } from './datalist/pagination/pagination.component';
import { PaginationLazyLoadComponent } from './datalist/pagination-lazy-load/pagination-lazy-load.component';
import { VirtualScrollComponent } from './datalist/virtual-scroll/virtual-scroll.component';
import { VirtualScrollLazyLoadComponent } from './datalist/virtual-scroll-lazy-load/virtual-scroll-lazy-load.component';

const appRoutes: Routes = [
  { path: '', component: OfficialComponent },
  { path: 'official', component: OfficialComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OfficialComponent,
    BasicComponent,
    CustomComponent,
    PaginationComponent,
    PaginationLazyLoadComponent,
    VirtualScrollComponent,
    VirtualScrollLazyLoadComponent
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
