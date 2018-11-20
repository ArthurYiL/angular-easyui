import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EasyUIModule } from 'ng-easyui/components/easyui/easyui.module';

import { AppComponent } from './app.component';
import { OfficialComponent } from './official/official.component';
import { BasicComponent } from './datagrid/basic/basic.component';
import { ColumnGroupComponent } from './datagrid/column-group/column-group.component';
import { FrozenColumnComponent } from './datagrid/frozen-column/frozen-column.component';
import { FrozenColumnAdvancedComponent } from './datagrid/frozen-column-advanced/frozen-column-advanced.component';
import { VirtualScrollComponent } from './datagrid/virtual-scroll/virtual-scroll.component';
import { VirtualScrollLazyLoadComponent } from './datagrid/virtual-scroll-lazy-load/virtual-scroll-lazy-load.component';
import { SortingComponent } from './datagrid/sorting/sorting.component';
import { MultipleSortingComponent } from './datagrid/multiple-sorting/multiple-sorting.component';
import { PaginationComponent } from './datagrid/pagination/pagination.component';
import { PaginationLazyLoadComponent } from './datagrid/pagination-lazy-load/pagination-lazy-load.component';
import { PaginationLayoutComponent } from './datagrid/pagination-layout/pagination-layout.component';
import { TemplateComponent } from './datagrid/template/template.component';
import { FilteringComponent } from './datagrid/filtering/filtering.component';
import { RowNumberComponent } from './datagrid/row-number/row-number.component';
import { RowGroupComponent } from './datagrid/row-group/row-group.component';
import { RowDetailComponent } from './datagrid/row-detail/row-detail.component';
import { RowEditingComponent } from './datagrid/row-editing/row-editing.component';
import { CellEditingComponent } from './datagrid/cell-editing/cell-editing.component';
import { DialogEditingComponent } from './datagrid/dialog-editing/dialog-editing.component';
import { FooterRowsComponent } from './datagrid/footer-rows/footer-rows.component';
import { StylingComponent } from './datagrid/styling/styling.component';
import { SelectionComponent } from './datagrid/selection/selection.component';

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
    FrozenColumnAdvancedComponent,
    VirtualScrollComponent,
    VirtualScrollLazyLoadComponent,
    SortingComponent,
    MultipleSortingComponent,
    PaginationComponent,
    PaginationLazyLoadComponent,
    PaginationLayoutComponent,
    TemplateComponent,
    FilteringComponent,
    RowNumberComponent,
    RowGroupComponent,
    RowDetailComponent,
    RowEditingComponent,
    CellEditingComponent,
    DialogEditingComponent,
    FooterRowsComponent,
    StylingComponent,
    SelectionComponent
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
