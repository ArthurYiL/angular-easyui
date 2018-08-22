import { EventEmitter } from '@angular/core';
import { CellTemplateDirective } from '../base/template-base';
export declare const CALENDAR_TEMPLATE = "\n\t<div class=\"calendar f-column f-full\" [class.calendar-noborder]=\"!border\">\n\t\t<div class=\"calendar-header f-row f-noshrink\">\n\t\t\t<div class=\"calendar-title f-row f-full f-content-center\">\n\t\t\t\t<span class=\"calendar-text\" (click)=\"showMenu=!showMenu\">{{months[month-1]}} {{year}}</span>\n\t\t\t</div>\n\t\t\t<div class=\"calendar-nav calendar-prevmonth\" (click)=\"prevMonth()\"></div>\n\t\t\t<div class=\"calendar-nav calendar-nextmonth\" (click)=\"nextMonth()\"></div>\n\t\t\t<div class=\"calendar-nav calendar-prevyear\" (click)=\"prevYear()\"></div>\n\t\t\t<div class=\"calendar-nav calendar-nextyear\" (click)=\"nextYear()\"></div>\n\t\t</div>\n\t\t<div class=\"calendar-body f-full\">\n\t\t\t<div class=\"calendar-content\">\n\t\t\t<table class=\"calendar-dtable\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th *ngIf=\"showWeek\">{{weekNumberHeader}}</th>\n\t\t\t\t\t\t<th *ngFor=\"let week of headerData\">{{week}}</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr *ngFor=\"let week of bodyData\">\n\t\t\t\t\t\t<td *ngIf=\"showWeek\" class=\"calendar-week\">{{calcWeekNumber(week)}}</td>\n\t\t\t\t\t\t<td *ngFor=\"let day of week;let dayIndex=index\" class=\"calendar-day\"\n\t\t\t\t\t\t\t\t[class.calendar-other-month]=\"day[0]!=year || day[1]!=month\"\n\t\t\t\t\t\t\t\t[class.calendar-saturday]=\"dayIndex==saIndex\"\n\t\t\t\t\t\t\t\t[class.calendar-sunday]=\"dayIndex==suIndex\"\n\t\t\t\t\t\t\t\t[class.calendar-today]=\"isToday(day)\"\n\t\t\t\t\t\t\t\t[class.calendar-selected]=\"isSelected(day)\"\n\t\t\t\t\t\t\t\t[class.calendar-disabled]=\"!isValid(day)\"\n\t\t\t\t\t\t\t\t[class.calendar-nav-hover]=\"isHighlighted(day)\"\n\t\t\t\t\t\t\t\t(mouseenter)=\"isValid(day) && highlightDay=day\"\n\t\t\t\t\t\t\t\t(mouseleave)=\"highlightDay=null\"\n\t\t\t\t\t\t\t\t(click)=\"onDayClick(day, $event)\">\n\t\t\t\t\t\t\t<ng-container *ngIf=\"!cellTemplate\">{{day[2]}}</ng-container>\n\t\t\t\t\t\t\t<ng-template *ngIf=\"cellTemplate\" [euiCalendarCellTemplate]=\"cellTemplate.template\" [date]=\"toDate(day)\"></ng-template>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"showMenu\" class=\"calendar-menu f-column\">\n\t\t\t\t<div class=\"calendar-menu-year-inner\">\n\t\t\t\t\t<span class=\"calendar-nav calendar-menu-prev\" (click)=\"prevYear()\"></span>\n\t\t\t\t\t<span><input class=\"calendar-menu-year\" type=\"text\" [(ngModel)]=\"year\"></span>\n\t\t\t\t\t<span class=\"calendar-nav calendar-menu-next\" (click)=\"nextYear()\"></span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"calendar-menu-month-inner f-full\">\n\t\t\t\t\t<div class=\"calendar-content\">\n\t\t\t\t\t<table class=\"calendar-mtable\">\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let rowIndex of [0,1,2]\">\n\t\t\t\t\t\t\t\t<td *ngFor=\"let colIndex of [0,1,2,3]\" \n\t\t\t\t\t\t\t\t\t\tclass=\"calendar-nav calendar-menu-month\"\n\t\t\t\t\t\t\t\t\t\t[class.calendar-nav-hover]=\"highlightMonth==months[rowIndex*4+colIndex]\"\n\t\t\t\t\t\t\t\t\t\t[class.calendar-selected]=\"months[month-1]==months[rowIndex*4+colIndex]\"\n\t\t\t\t\t\t\t\t\t\t(mouseenter)=\"highlightMonth=months[rowIndex*4+colIndex]\"\n\t\t\t\t\t\t\t\t\t\t(mouseleave)=\"highlightMonth=null\"\n\t\t\t\t\t\t\t\t\t\t(click)=\"onMonthClick(months[rowIndex*4+colIndex], $event)\">\n\t\t\t\t\t\t\t\t\t{{months[rowIndex*4+colIndex]}}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n";
export declare class CalendarComponent {
    cellTemplate: CellTemplateDirective;
    weeks: string[];
    months: string[];
    border: boolean;
    showWeek: boolean;
    weekNumberHeader: string;
    selection: Date;
    validator: Function;
    selectionChange: EventEmitter<{}>;
    highlightDay: any;
    highlightMonth: any;
    headerData: any[];
    bodyData: any[];
    showMenu: boolean;
    private _firstDay;
    private _year;
    private _month;
    firstDay: number;
    year: number;
    month: number;
    readonly saIndex: number;
    readonly suIndex: number;
    ngOnInit(): void;
    onDayClick(day: any, $event: any): void;
    onMonthClick(monthName: any, $event: any): void;
    isHighlighted(day: any): boolean;
    isSelected(day: any): boolean;
    isToday(day: any): boolean;
    isValid(day: any): any;
    isDiff(date1: Date, date2: Date): boolean;
    toDate(day: any): Date;
    toArray(date: Date): number[];
    calcWeekNumber(week: any): number;
    getWeekNumber(date: Date): number;
    getHeaderData(): string[];
    getWeeks(): any[];
    nextYear(): void;
    prevYear(): void;
    nextMonth(): void;
    prevMonth(): void;
    moveTo(date: Date): void;
    highlightDate(date: Date): void;
    selectDate(date?: Date): void;
    navDate(step: number): void;
}
