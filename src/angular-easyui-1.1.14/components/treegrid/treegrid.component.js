/**
 * EasyUI for Angular 1.1.14
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
var __extends=this&&this.__extends||function(){var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])};return function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}}();import{Component,Input,Output,EventEmitter}from"@angular/core";import{GridBaseComponent}from"../gridbase/grid-base.component";import{treeHelper}from"../base/treehelper";export var TREEGRID_TEMPLATE='\n\t<div class="panel-body panel-body-noheader datagrid datagrid-wrap f-full f-column" \n\t\t\t[class.panel-body-noborder]="!border">\n\t\t<eui-pagination *ngIf="pagination && (pagePosition==\'both\' || pagePosition==\'top\')" class="datagrid-pager datagrid-pager-top f-noshrink" \n\t\t\t\t[total]="total" \n\t\t\t\t[pageSize]="pageSize" \n\t\t\t\t[pageNumber]="pageNumber" \n\t\t\t\t[loading]="loading"\n\t\t\t\t(pageChange)="onPageChange($event)"></eui-pagination>\n\t\t<div #view class="datagrid-view f-row f-full">\n\t\t\t<eui-treegrid-view #view1 *ngIf="leftGroup || leftColumns" \n\t\t\t\t\t[viewIndex]="1" \n\t\t\t\t\t[columnGroup]="leftGroup" \n\t\t\t\t\t[columns]="leftColumns" \n\t\t\t\t\t[rows]="rows" \n\t\t\t\t\t[footerRows]="footerRows"\n\t\t\t\t\t[style.width]="leftFrozenWidth"></eui-treegrid-view>\n\t\t\t<eui-treegrid-view #view2 \n\t\t\t\t\t[viewIndex]="2" \n\t\t\t\t\t[columnGroup]="centerGroup" \n\t\t\t\t\t[columns]="centerColumns" \n\t\t\t\t\t[rows]="rows"\n\t\t\t\t\t[footerRows]="footerRows"\n\t\t\t\t\t(bodyScroll)="onBodyScroll($event)"></eui-treegrid-view>\n\t\t\t<eui-treegrid-view #view3 *ngIf="rightGroup || rightColumns" \n\t\t\t\t\t[viewIndex]="3" \n\t\t\t\t\t[columnGroup]="rightGroup" \n\t\t\t\t\t[columns]="rightColumns" \n\t\t\t\t\t[rows]="rows" \n\t\t\t\t\t[footerRows]="footerRows"\n\t\t\t\t\t[style.width]="rightFrozenWidth"></eui-treegrid-view>\n\t\t</div>\n\t\t<eui-pagination *ngIf="pagination && (pagePosition==\'both\' || pagePosition==\'bottom\')" class="datagrid-pager f-noshrink" \n\t\t\t\t[total]="total" \n\t\t\t\t[pageSize]="pageSize" \n\t\t\t\t[pageNumber]="pageNumber" \n\t\t\t\t[loading]="loading"\n\t\t\t\t(pageChange)="onPageChange($event)"></eui-pagination>\n\t</div>\n\t<div *ngIf="loading" class="datagrid-loading f-row">\n\t\t<div class="datagrid-mask"></div>\n\t\t<div class="datagrid-mask-msg">{{loadMsg}}</div>\n\t</div>\n';var TreeGridComponent=function(_super){function TreeGridComponent(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.idField=null,_this.treeField=null,_this.selectionMode="single",_this.checkbox=!1,_this.cascadeCheck=!0,_this.rowExpand=new EventEmitter,_this.rowCollapse=new EventEmitter,_this.rowCheck=new EventEmitter,_this.rowUncheck=new EventEmitter,_this}return __extends(TreeGridComponent,_super),Object.defineProperty(TreeGridComponent.prototype,"scrollTop",{get:function(){return this.view2.body.bodyRef.nativeElement.scrollTop},set:function(value){this.view2.body.bodyRef.nativeElement.scrollTop=value},enumerable:!0,configurable:!0}),Object.defineProperty(TreeGridComponent.prototype,"checkedRows",{get:function(){return this.getCheckedRows()},enumerable:!0,configurable:!0}),TreeGridComponent.prototype.getCheckedRows=function(state){void 0===state&&(state="checked");var rows=[];return treeHelper.cascadeCheck=this.cascadeCheck,treeHelper.forNodes(this.data,function(row){row.checkState==state&&rows.push(row)}),rows},TreeGridComponent.prototype.selectRow=function(row){_super.prototype.selectRow.call(this,row)},TreeGridComponent.prototype.checkRow=function(row){var _this=this;treeHelper.cascadeCheck=this.cascadeCheck,treeHelper.checkNode(row,function(){_this.rowCheck.emit(row)})},TreeGridComponent.prototype.uncheckRow=function(row){var _this=this;treeHelper.cascadeCheck=this.cascadeCheck,treeHelper.uncheckNode(row,function(){_this.rowUncheck.emit(row)})},TreeGridComponent.prototype.uncheckAllRows=function(){treeHelper.uncheckAllNodes(this.data,function(){})},TreeGridComponent.prototype.adjustCheck=function(row){treeHelper.cascadeCheck=this.cascadeCheck,treeHelper.adjustCheck(row)},TreeGridComponent.prototype.sortData=function(){var _this=this;if(this.sorts&&this.sorts.length){for(var cc=[],i=0;i<this.sorts.length;i++)cc.push(this.findColumn(this.sorts[i].field));var sortFunc=function(a,b){return a==b?0:a>b?1:-1},_sort=function(rows){rows.sort(function(r1,r2){for(var r=0,i=0;i<_this.sorts.length;i++){var sort=_this.sorts[i];if(r=cc[i]&&cc[i].sorter?cc[i].sorter(r1,r2):sortFunc(r1[sort.field],r2[sort.field]),0!=(r*="asc"==sort.order?1:-1))return r}return r}),rows.forEach(function(row){row.children&&row.children.length&&_sort(row.children)})};_sort(this.data)}},TreeGridComponent.decorators=[{type:Component,args:[{selector:"eui-treegrid",template:TREEGRID_TEMPLATE,host:{class:"f-column"}}]}],TreeGridComponent.propDecorators={idField:[{type:Input}],treeField:[{type:Input}],selectionMode:[{type:Input}],checkbox:[{type:Input}],cascadeCheck:[{type:Input}],rowExpand:[{type:Output}],rowCollapse:[{type:Output}],rowCheck:[{type:Output}],rowUncheck:[{type:Output}]},TreeGridComponent}(GridBaseComponent);export{TreeGridComponent};