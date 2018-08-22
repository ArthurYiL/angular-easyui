/**
 * EasyUI for Angular 1.1.14
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{NgModule}from"@angular/core";import{CommonModule}from"@angular/common";import{FormsModule}from"@angular/forms";import{ComboTreeGridComponent}from"./combotreegrid.component";import{TreeGridModule}from"../treegrid/treegrid.module";var ComboTreeGridModule=function(){function ComboTreeGridModule(){}return ComboTreeGridModule.decorators=[{type:NgModule,args:[{declarations:[ComboTreeGridComponent],imports:[CommonModule,FormsModule,TreeGridModule],exports:[ComboTreeGridComponent]}]}],ComboTreeGridModule}();export{ComboTreeGridModule};