/**
 * EasyUI for Angular 1.1.14
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{NgModule}from"@angular/core";import{CommonModule}from"@angular/common";import{FormsModule}from"@angular/forms";import{ComboTreeComponent}from"./combotree.component";import{TreeModule}from"../tree/tree.module";var ComboTreeModule=function(){function ComboTreeModule(){}return ComboTreeModule.decorators=[{type:NgModule,args:[{declarations:[ComboTreeComponent],imports:[CommonModule,FormsModule,TreeModule],exports:[ComboTreeComponent]}]}],ComboTreeModule}();export{ComboTreeModule};