/**
 * EasyUI for Angular 1.1.14
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{NgModule}from"@angular/core";import{CommonModule}from"@angular/common";import{BaseModule}from"../base/base.module";import{LayoutComponent}from"./layout.component";import{LayoutPanelComponent}from"./layout-panel.component";var LayoutModule=function(){function LayoutModule(){}return LayoutModule.decorators=[{type:NgModule,args:[{declarations:[LayoutComponent,LayoutPanelComponent],imports:[CommonModule,BaseModule],exports:[LayoutComponent,LayoutPanelComponent]}]}],LayoutModule}();export{LayoutModule};