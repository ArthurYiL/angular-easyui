/**
 * EasyUI for Angular 1.1.14
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Component,Input}from"@angular/core";var GridFilterRowComponent=function(){function GridFilterRowComponent(){this.grid=null}return GridFilterRowComponent.prototype.isOnLeft=function(col){return!(!col.filterOperators||!col.filterOperators.length||"left"!=this.grid.filterBtnPosition)},GridFilterRowComponent.prototype.isOnRight=function(col){return!(!col.filterOperators||!col.filterOperators.length||"right"!=this.grid.filterBtnPosition)},GridFilterRowComponent.decorators=[{type:Component,args:[{selector:"[euiGridFilterRow]",template:'\n\t\t<td *ngFor="let col of columns">\n\t\t\t<div *ngIf="col.filterable" class="datagrid-filter-c f-row">\n\t\t\t\t<eui-grid-filter-button *ngIf="isOnLeft(col)" class="datagrid-filter-btn datagrid-filter-btn-left"\n\t\t\t\t\t\t[column]="col" \n\t\t\t\t\t\t[(ngModel)]="col.filterOperator">\n\t\t\t\t</eui-grid-filter-button>\n\t\t\t\t<input *ngIf="!col.filterTemplate" [(ngModel)]="col.filterValue" class="datagrid-editable-input datagrid-filter f-full">\n\t\t\t\t<ng-template *ngIf="col.filterTemplate" [euiGridFilterTemplate]="col.filterTemplate.template" [column]="col"></ng-template>\n\t\t\t\t<eui-grid-filter-button *ngIf="isOnRight(col)" class="datagrid-filter-btn datagrid-filter-btn-right"\n\t\t\t\t\t\t[column]="col" \n\t\t\t\t\t\t[(ngModel)]="col.filterOperator">\n\t\t\t\t</eui-grid-filter-button>\n\t\t\t</div>\n\t\t</td>\n\t'}]}],GridFilterRowComponent.propDecorators={columns:[{type:Input}],grid:[{type:Input}]},GridFilterRowComponent}();export{GridFilterRowComponent};