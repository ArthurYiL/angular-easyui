/**
 * EasyUI for Angular 1.1.14
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Component,forwardRef,ViewChild,ContentChildren,QueryList,Input,ElementRef}from"@angular/core";import{LayoutPanelComponent}from"./layout-panel.component";import{domHelper}from"../base/domhelper";export var LAYOUT_TEMPLATE='\n\t<div #layout class="layout" \n\t\t\t[style.padding]="paddings"\n\t\t\t[ngClass]="layoutCls"\n\t\t\t[ngStyle]="layoutStyle">\n\t\t<ng-content></ng-content>\n\t</div>\n';var LayoutComponent=function(){function LayoutComponent(){this.layoutCls=null,this.layoutStyle=null,this.paddings=null,this.paddingLeft=0,this.paddingRight=0,this.paddingTop=0,this.paddingBottom=0}return LayoutComponent.prototype.ngAfterContentInit=function(){this.updatePaddings()},LayoutComponent.prototype.getPanel=function(region){if(!this.panels)return null;var pp=this.panels.filter(function(p){return p.region==region});return pp.length?pp[0]:null},LayoutComponent.prototype.getPaddingValue=function(region){var panel=this.getPanel(region),val=0;return!panel||panel.collapsed||panel.float||(val="west"==region||"east"==region?domHelper.outerWidth(panel.hostRef.nativeElement):domHelper.outerHeight(panel.hostRef.nativeElement),!panel.split&&panel.border&&(val-=1)),val},LayoutComponent.prototype.updatePaddings=function(){this.paddingLeft=this.getPaddingValue("west"),this.paddingRight=this.getPaddingValue("east"),this.paddingTop=this.getPaddingValue("north"),this.paddingBottom=this.getPaddingValue("south"),this.paddings=[this.paddingTop,this.paddingRight,this.paddingBottom,this.paddingLeft].map(function(v){return v+"px"}).join(" ")},LayoutComponent.prototype.resize=function(){this.updatePaddings()},LayoutComponent.decorators=[{type:Component,args:[{selector:"eui-layout",template:LAYOUT_TEMPLATE}]}],LayoutComponent.propDecorators={layoutRef:[{type:ViewChild,args:["layout"]}],panels:[{type:ContentChildren,args:[forwardRef(function(){return LayoutPanelComponent})]}],layoutCls:[{type:Input}],layoutStyle:[{type:Input}]},LayoutComponent}();export{LayoutComponent};