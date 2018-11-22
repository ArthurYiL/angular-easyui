import { Component, ViewChild, Type, Input, ComponentFactoryResolver } from '@angular/core';
import { TabDirective } from './tab.directive';

@Component({
    selector: 'tab-detail',
    template: '<ng-template tab-host></ng-template>'
})
export class TabDetailComponent {
    @Input() component: Type<any>;
    @ViewChild(TabDirective) tabHost: TabDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngAfterViewInit() {
        this.loadComponent();
    }

    loadComponent() {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
        let viewContainerRef = this.tabHost.viewContainerRef;
        viewContainerRef.clear();
        viewContainerRef.createComponent(componentFactory);
    }
}