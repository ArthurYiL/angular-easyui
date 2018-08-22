/**
 * EasyUI for Angular 1.1.14
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
function View_TooltipContentComponent_1(_l){return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,[[1,0],["tooltip",1]],null,12,"div",[["tabindex","-1"]],[[4,"left","px"],[4,"top","px"],[4,"zIndex",null]],[[null,"mouseenter"],[null,"mouseleave"]],function(_v,en,$event){var ad=!0,_co=_v.component;return"mouseenter"===en&&(ad=!1!==_co.onMouseEnter($event)&&ad),"mouseleave"===en&&(ad=!1!==_co.onMouseLeave($event)&&ad),ad},null,null)),i0.ɵdid(1,278528,null,0,i1.NgClass,[i0.IterableDiffers,i0.KeyValueDiffers,i0.ElementRef,i0.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i0.ɵdid(2,278528,null,0,i1.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,i0.Renderer2],{ngStyle:[0,"ngStyle"]},null),(_l()(),i0.ɵted(-1,null,["\n\t\t"])),(_l()(),i0.ɵeld(4,0,null,null,3,"div",[["class","tooltip-content"]],null,null,null,null,null)),(_l()(),i0.ɵted(-1,null,["\n\t\t\t"])),i0.ɵncd(null,0),(_l()(),i0.ɵted(7,null,["\n\t\t\t","\n\t\t"])),(_l()(),i0.ɵted(-1,null,["\n\t\t"])),(_l()(),i0.ɵeld(9,0,[[2,0],["arrowOuter",1]],null,0,"div",[["class","tooltip-arrow-outer"]],null,null,null,null,null)),(_l()(),i0.ɵted(-1,null,["\n\t\t"])),(_l()(),i0.ɵeld(11,0,[[3,0],["arrowInner",1]],null,0,"div",[["class","tooltip-arrow"]],null,null,null,null,null)),(_l()(),i0.ɵted(-1,null,["\n\t"]))],function(_ck,_v){var _co=_v.component;_ck(_v,1,0,i0.ɵinlineInterpolate(1,"tooltip tooltip-",_co.position,""),_co.tooltipCls),_ck(_v,2,0,_co.tooltipStyle)},function(_ck,_v){var _co=_v.component;_ck(_v,0,0,_co.left,_co.top,_co.zIndex),_ck(_v,7,0,_co.content)})}import*as i0 from"@angular/core";import*as i1 from"@angular/common";import*as i2 from"./tooltip-content.component";var styles_TooltipContentComponent=[],RenderType_TooltipContentComponent=i0.ɵcrt({encapsulation:2,styles:styles_TooltipContentComponent,data:{}});export{RenderType_TooltipContentComponent};export function View_TooltipContentComponent_0(_l){return i0.ɵvid(0,[i0.ɵqud(671088640,1,{tooltipRef:0}),i0.ɵqud(671088640,2,{arrowOuterRef:0}),i0.ɵqud(671088640,3,{arrowInnerRef:0}),(_l()(),i0.ɵted(-1,null,["\n\t"])),(_l()(),i0.ɵand(16777216,null,null,1,null,View_TooltipContentComponent_1)),i0.ɵdid(5,16384,null,0,i1.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,"ngIf"]},null),(_l()(),i0.ɵted(-1,null,["\n"]))],function(_ck,_v){_ck(_v,5,0,!_v.component.closed)},null)};export function View_TooltipContentComponent_Host_0(_l){return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,null,null,1,"eui-tooltip-content",[],null,null,null,View_TooltipContentComponent_0,RenderType_TooltipContentComponent)),i0.ɵdid(1,180224,null,0,i2.TooltipContentComponent,[i0.ElementRef,i0.ChangeDetectorRef],null,null)],null,null)};var TooltipContentComponentNgFactory=i0.ɵccf("eui-tooltip-content",i2.TooltipContentComponent,View_TooltipContentComponent_Host_0,{tooltipCls:"tooltipCls",tooltipStyle:"tooltipStyle",content:"content",position:"position",target:"target",parent:"parent",trackMouse:"trackMouse",trackMouseX:"trackMouseX",trackMouseY:"trackMouseY",deltaX:"deltaX",deltaY:"deltaY",valign:"valign",left:"left",top:"top",zIndex:"zIndex",closed:"closed"},{},["*"]);export{TooltipContentComponentNgFactory};