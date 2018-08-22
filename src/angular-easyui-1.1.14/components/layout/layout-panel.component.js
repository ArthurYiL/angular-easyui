/**
 * EasyUI for Angular 1.1.14
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
var __extends=this&&this.__extends||function(){var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])};return function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}}();import{Component,Host,Inject,forwardRef,Input,ElementRef,HostListener}from"@angular/core";import{LayoutComponent}from"./layout.component";import{PanelComponent,PANEL_TEMPLATE}from"../panel/panel.component";import{domHelper}from"../base/domhelper";var LayoutPanelComponent=function(_super){function LayoutPanelComponent(layout,hostRef){var _this=_super.call(this,hostRef)||this;return _this.layout=layout,_this.hostRef=hostRef,_this.title=null,_this.region="center",_this.float=!1,_this.split=!1,_this.animate=!0,_this.collapsible=!1,_this.collapseToShrinkBody=!1,_this.isExpanding=!1,_this._collapsed=!1,_this}return __extends(LayoutPanelComponent,_super),Object.defineProperty(LayoutPanelComponent.prototype,"collapsed",{get:function(){return this._collapsed},set:function(value){var _this=this;this._collapsed=value,this.layout&&value&&this.layout.updatePaddings(),this._collapsed||(this.isExpanding=!0,setTimeout(function(){return _this.isExpanding=!1}))},enumerable:!0,configurable:!0}),Object.defineProperty(LayoutPanelComponent.prototype,"top",{get:function(){return"west"==this.region||"east"==this.region?this.layout.paddingTop:null},enumerable:!0,configurable:!0}),Object.defineProperty(LayoutPanelComponent.prototype,"bottom",{get:function(){return"west"==this.region||"east"==this.region?this.layout.paddingBottom:null},enumerable:!0,configurable:!0}),LayoutPanelComponent.prototype.ngAfterContentInit=function(){var icons={west:"left",east:"right",north:"up",south:"down"};this.expandIconCls="layout-button-"+icons[this.region],this.collapseIconCls="layout-button-"+icons[this.region]},LayoutPanelComponent.prototype.onDocumentClick=function(event){if(this.float&&!this.collapsed){if(this.isExpanding)return;domHelper.isChild(event.target,this.layout.layoutRef.nativeElement)&&(domHelper.isChild(event.target,this.hostRef.nativeElement)||(this.collapsed=!0))}},LayoutPanelComponent.prototype.onSlideEnd=function(event){this.layout.updatePaddings()},LayoutPanelComponent.prototype.onClickCollapsibleTool1=function(event){this.collapsed=!0},LayoutPanelComponent.prototype.expand=function(){this.collapsed=!1},LayoutPanelComponent.prototype.collapse=function(){this.collapsed=!0},LayoutPanelComponent.decorators=[{type:Component,args:[{selector:"eui-layout-panel",template:PANEL_TEMPLATE,host:{class:"f-column layout-panel","[class.layout-collapsed]":"collapsed","[class.layout-animate]":"animate","[class.layout-panel-east]":"region=='east'","[class.layout-panel-west]":"region=='west'","[class.layout-panel-south]":"region=='south'","[class.layout-panel-north]":"region=='north'","[class.layout-panel-center]":"region=='center'","[class.layout-split-east]":"split && region=='east'","[class.layout-split-west]":"split && region=='west'","[class.layout-split-south]":"split && region=='south'","[class.layout-split-north]":"split && region=='north'","[class.layout-split-center]":"split && region=='center'","[style.top.px]":"top","[style.bottom.px]":"bottom"}}]}],LayoutPanelComponent.ctorParameters=function(){return[{type:LayoutComponent,decorators:[{type:Host},{type:Inject,args:[forwardRef(function(){return LayoutComponent})]}]},{type:ElementRef}]},LayoutPanelComponent.propDecorators={title:[{type:Input}],region:[{type:Input}],float:[{type:Input}],split:[{type:Input}],animate:[{type:Input}],collapsible:[{type:Input}],collapsed:[{type:Input}],onDocumentClick:[{type:HostListener,args:["document:click",["$event"]]}],onSlideEnd:[{type:HostListener,args:["transitionend",["$event"]]}]},LayoutPanelComponent}(PanelComponent);export{LayoutPanelComponent};