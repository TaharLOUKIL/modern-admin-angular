/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import deepEqual from 'fast-deep-equal';
import { deepCopy } from './utils';
import { Component, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { INPUT_NAMES, INPUT_IS_DEEP, OUTPUT_NAMES } from './fullcalendar-options';
export class FullCalendarComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.dirtyProps = {};
        this.deepCopies = {};
        this.windowResize = new EventEmitter();
        this.dateClick = new EventEmitter();
        this.eventClick = new EventEmitter();
        this.eventMouseEnter = new EventEmitter();
        this.eventMouseLeave = new EventEmitter();
        this.select = new EventEmitter();
        this.unselect = new EventEmitter();
        this.loading = new EventEmitter();
        this.eventPositioned = new EventEmitter();
        this.eventDragStart = new EventEmitter();
        this.eventDragStop = new EventEmitter();
        this.eventDrop = new EventEmitter();
        this.eventResizeStart = new EventEmitter();
        this.eventResizeStop = new EventEmitter();
        this.eventResize = new EventEmitter();
        this.drop = new EventEmitter();
        this.eventReceive = new EventEmitter();
        this.eventLeave = new EventEmitter();
        this._destroyed = new EventEmitter();
        this.navLinkDayClick = new EventEmitter();
        this.navLinkWeekClick = new EventEmitter();
        // TODO: make these inputs...
        this.viewSkeletonRender = new EventEmitter();
        this.viewSkeletonDestroy = new EventEmitter();
        this.datesRender = new EventEmitter();
        this.datesDestroy = new EventEmitter();
        this.dayRender = new EventEmitter();
        this.eventRender = new EventEmitter();
        this.eventDestroy = new EventEmitter();
        this.resourceRender = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.calendar = new Calendar(this.element.nativeElement, this.buildOptions());
        this.calendar.render();
    }
    /**
     * @return {?}
     */
    buildOptions() {
        /** @type {?} */
        const options = {};
        OUTPUT_NAMES.forEach(outputName => {
            options[outputName] = (...args) => {
                this[outputName].emit(...args);
            };
        });
        // do after outputs, so that inputs with same name override
        INPUT_NAMES.forEach(inputName => {
            /** @type {?} */
            let inputVal = this[inputName];
            if (inputVal !== undefined) { // unfortunately FC chokes when some props are set to undefined
                // unfortunately FC chokes when some props are set to undefined
                if (this.deepChangeDetection && INPUT_IS_DEEP[inputName]) {
                    inputVal = deepCopy(inputVal);
                    this.deepCopies[inputName] = inputVal; // side effect!
                }
                options[inputName] = inputVal;
            }
        });
        return options;
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.calendar && this.deepChangeDetection) { // not the initial render AND we do deep-mutation checks
            const { deepCopies } = this;
            for (const inputName in INPUT_IS_DEEP) {
                if (INPUT_IS_DEEP.hasOwnProperty(inputName)) {
                    /** @type {?} */
                    const inputVal = this[inputName];
                    if (inputVal !== undefined) { // unfortunately FC chokes when some props are set to undefined
                        // unfortunately FC chokes when some props are set to undefined
                        if (!deepEqual(inputVal, deepCopies[inputName])) {
                            /** @type {?} */
                            const copy = deepCopy(inputVal);
                            deepCopies[inputName] = copy;
                            this.dirtyProps[inputName] = copy;
                        }
                    }
                }
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.calendar) { // not the initial render
            // not the initial render
            for (const inputName in changes) {
                if (changes.hasOwnProperty(inputName)) {
                    if (this.deepCopies[inputName] === undefined) { // not already handled in ngDoCheck
                        // not already handled in ngDoCheck
                        this.dirtyProps[inputName] = changes[inputName].currentValue;
                    }
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        const { dirtyProps } = this; // hold on to reference before clearing
        if (Object.keys(dirtyProps).length > 0) {
            this.dirtyProps = {}; // clear first, in case the rerender causes new dirtiness
            this.calendar.mutateOptions(dirtyProps, [], false, deepEqual);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.calendar) {
            this.calendar.destroy();
        }
        this.calendar = null;
    }
    /**
     * @return {?}
     */
    getApi() {
        return this.calendar;
    }
}
FullCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'full-calendar',
                template: ''
            }] }
];
/** @nocollapse */
FullCalendarComponent.ctorParameters = () => [
    { type: ElementRef }
];
FullCalendarComponent.propDecorators = {
    deepChangeDetection: [{ type: Input }],
    header: [{ type: Input }],
    footer: [{ type: Input }],
    customButtons: [{ type: Input }],
    buttonIcons: [{ type: Input }],
    themeSystem: [{ type: Input }],
    bootstrapFontAwesome: [{ type: Input }],
    firstDay: [{ type: Input }],
    dir: [{ type: Input }],
    weekends: [{ type: Input }],
    hiddenDays: [{ type: Input }],
    fixedWeekCount: [{ type: Input }],
    weekNumbers: [{ type: Input }],
    weekNumbersWithinDays: [{ type: Input }],
    weekNumberCalculation: [{ type: Input }],
    businessHours: [{ type: Input }],
    showNonCurrentDates: [{ type: Input }],
    height: [{ type: Input }],
    contentHeight: [{ type: Input }],
    aspectRatio: [{ type: Input }],
    handleWindowResize: [{ type: Input }],
    windowResizeDelay: [{ type: Input }],
    eventLimit: [{ type: Input }],
    eventLimitClick: [{ type: Input }],
    timeZone: [{ type: Input }],
    now: [{ type: Input }],
    defaultView: [{ type: Input }],
    allDaySlot: [{ type: Input }],
    allDayText: [{ type: Input }],
    slotDuration: [{ type: Input }],
    slotLabelFormat: [{ type: Input }],
    slotLabelInterval: [{ type: Input }],
    snapDuration: [{ type: Input }],
    scrollTime: [{ type: Input }],
    minTime: [{ type: Input }],
    maxTime: [{ type: Input }],
    slotEventOverlap: [{ type: Input }],
    listDayFormat: [{ type: Input }],
    listDayAltFormat: [{ type: Input }],
    noEventsMessage: [{ type: Input }],
    defaultDate: [{ type: Input }],
    nowIndicator: [{ type: Input }],
    visibleRange: [{ type: Input }],
    validRange: [{ type: Input }],
    dateIncrement: [{ type: Input }],
    dateAlignment: [{ type: Input }],
    duration: [{ type: Input }],
    dayCount: [{ type: Input }],
    locales: [{ type: Input }],
    locale: [{ type: Input }],
    eventTimeFormat: [{ type: Input }],
    columnHeader: [{ type: Input }],
    columnHeaderFormat: [{ type: Input }],
    columnHeaderText: [{ type: Input }],
    columnHeaderHtml: [{ type: Input }],
    titleFormat: [{ type: Input }],
    weekLabel: [{ type: Input }],
    displayEventTime: [{ type: Input }],
    displayEventEnd: [{ type: Input }],
    eventLimitText: [{ type: Input }],
    dayPopoverFormat: [{ type: Input }],
    navLinks: [{ type: Input }],
    selectable: [{ type: Input }],
    selectMirror: [{ type: Input }],
    unselectAuto: [{ type: Input }],
    unselectCancel: [{ type: Input }],
    defaultAllDayEventDuration: [{ type: Input }],
    defaultTimedEventDuration: [{ type: Input }],
    cmdFormatter: [{ type: Input }],
    defaultRangeSeparator: [{ type: Input }],
    selectConstraint: [{ type: Input }],
    selectOverlap: [{ type: Input }],
    selectAllow: [{ type: Input }],
    selectMinDistance: [{ type: Input }],
    editable: [{ type: Input }],
    eventStartEditable: [{ type: Input }],
    eventDurationEditable: [{ type: Input }],
    eventConstraint: [{ type: Input }],
    eventOverlap: [{ type: Input }],
    eventAllow: [{ type: Input }],
    eventClassName: [{ type: Input }],
    eventClassNames: [{ type: Input }],
    eventBackgroundColor: [{ type: Input }],
    eventBorderColor: [{ type: Input }],
    eventTextColor: [{ type: Input }],
    eventColor: [{ type: Input }],
    events: [{ type: Input }],
    eventSources: [{ type: Input }],
    allDayDefault: [{ type: Input }],
    startParam: [{ type: Input }],
    endParam: [{ type: Input }],
    lazyFetching: [{ type: Input }],
    nextDayThreshold: [{ type: Input }],
    eventOrder: [{ type: Input }],
    rerenderDelay: [{ type: Input }],
    dragRevertDuration: [{ type: Input }],
    dragScroll: [{ type: Input }],
    longPressDelay: [{ type: Input }],
    eventLongPressDelay: [{ type: Input }],
    droppable: [{ type: Input }],
    dropAccept: [{ type: Input }],
    eventDataTransform: [{ type: Input }],
    allDayMaintainDuration: [{ type: Input }],
    eventResizableFromStart: [{ type: Input }],
    timeGridEventMinHeight: [{ type: Input }],
    allDayHtml: [{ type: Input }],
    eventDragMinDistance: [{ type: Input }],
    eventSourceFailure: [{ type: Input }],
    eventSourceSuccess: [{ type: Input }],
    forceEventDuration: [{ type: Input }],
    progressiveEventRendering: [{ type: Input }],
    selectLongPressDelay: [{ type: Input }],
    timeZoneParam: [{ type: Input }],
    titleRangeSeparator: [{ type: Input }],
    buttonText: [{ type: Input }],
    views: [{ type: Input }],
    plugins: [{ type: Input }],
    schedulerLicenseKey: [{ type: Input }],
    resources: [{ type: Input }],
    resourceLabelText: [{ type: Input }],
    resourceOrder: [{ type: Input }],
    filterResourcesWithEvents: [{ type: Input }],
    resourceText: [{ type: Input }],
    resourceGroupField: [{ type: Input }],
    resourceGroupText: [{ type: Input }],
    resourceAreaWidth: [{ type: Input }],
    resourceColumns: [{ type: Input }],
    resourcesInitiallyExpanded: [{ type: Input }],
    slotWidth: [{ type: Input }],
    datesAboveResources: [{ type: Input }],
    googleCalendarApiKey: [{ type: Input }],
    refetchResourcesOnNavigate: [{ type: Input }],
    eventResourceEditable: [{ type: Input }],
    windowResize: [{ type: Output }],
    dateClick: [{ type: Output }],
    eventClick: [{ type: Output }],
    eventMouseEnter: [{ type: Output }],
    eventMouseLeave: [{ type: Output }],
    select: [{ type: Output }],
    unselect: [{ type: Output }],
    loading: [{ type: Output }],
    eventPositioned: [{ type: Output }],
    eventDragStart: [{ type: Output }],
    eventDragStop: [{ type: Output }],
    eventDrop: [{ type: Output }],
    eventResizeStart: [{ type: Output }],
    eventResizeStop: [{ type: Output }],
    eventResize: [{ type: Output }],
    drop: [{ type: Output }],
    eventReceive: [{ type: Output }],
    eventLeave: [{ type: Output }],
    _destroyed: [{ type: Output }],
    navLinkDayClick: [{ type: Output }],
    navLinkWeekClick: [{ type: Output }],
    viewSkeletonRender: [{ type: Output }],
    viewSkeletonDestroy: [{ type: Output }],
    datesRender: [{ type: Output }],
    datesDestroy: [{ type: Output }],
    dayRender: [{ type: Output }],
    eventRender: [{ type: Output }],
    eventDestroy: [{ type: Output }],
    resourceRender: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    FullCalendarComponent.prototype.deepChangeDetection;
    /** @type {?} */
    FullCalendarComponent.prototype.calendar;
    /** @type {?} */
    FullCalendarComponent.prototype.dirtyProps;
    /** @type {?} */
    FullCalendarComponent.prototype.deepCopies;
    /** @type {?} */
    FullCalendarComponent.prototype.header;
    /** @type {?} */
    FullCalendarComponent.prototype.footer;
    /** @type {?} */
    FullCalendarComponent.prototype.customButtons;
    /** @type {?} */
    FullCalendarComponent.prototype.buttonIcons;
    /** @type {?} */
    FullCalendarComponent.prototype.themeSystem;
    /** @type {?} */
    FullCalendarComponent.prototype.bootstrapFontAwesome;
    /** @type {?} */
    FullCalendarComponent.prototype.firstDay;
    /** @type {?} */
    FullCalendarComponent.prototype.dir;
    /** @type {?} */
    FullCalendarComponent.prototype.weekends;
    /** @type {?} */
    FullCalendarComponent.prototype.hiddenDays;
    /** @type {?} */
    FullCalendarComponent.prototype.fixedWeekCount;
    /** @type {?} */
    FullCalendarComponent.prototype.weekNumbers;
    /** @type {?} */
    FullCalendarComponent.prototype.weekNumbersWithinDays;
    /** @type {?} */
    FullCalendarComponent.prototype.weekNumberCalculation;
    /** @type {?} */
    FullCalendarComponent.prototype.businessHours;
    /** @type {?} */
    FullCalendarComponent.prototype.showNonCurrentDates;
    /** @type {?} */
    FullCalendarComponent.prototype.height;
    /** @type {?} */
    FullCalendarComponent.prototype.contentHeight;
    /** @type {?} */
    FullCalendarComponent.prototype.aspectRatio;
    /** @type {?} */
    FullCalendarComponent.prototype.handleWindowResize;
    /** @type {?} */
    FullCalendarComponent.prototype.windowResizeDelay;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLimit;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLimitClick;
    /** @type {?} */
    FullCalendarComponent.prototype.timeZone;
    /** @type {?} */
    FullCalendarComponent.prototype.now;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultView;
    /** @type {?} */
    FullCalendarComponent.prototype.allDaySlot;
    /** @type {?} */
    FullCalendarComponent.prototype.allDayText;
    /** @type {?} */
    FullCalendarComponent.prototype.slotDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.slotLabelFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.slotLabelInterval;
    /** @type {?} */
    FullCalendarComponent.prototype.snapDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.scrollTime;
    /** @type {?} */
    FullCalendarComponent.prototype.minTime;
    /** @type {?} */
    FullCalendarComponent.prototype.maxTime;
    /** @type {?} */
    FullCalendarComponent.prototype.slotEventOverlap;
    /** @type {?} */
    FullCalendarComponent.prototype.listDayFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.listDayAltFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.noEventsMessage;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultDate;
    /** @type {?} */
    FullCalendarComponent.prototype.nowIndicator;
    /** @type {?} */
    FullCalendarComponent.prototype.visibleRange;
    /** @type {?} */
    FullCalendarComponent.prototype.validRange;
    /** @type {?} */
    FullCalendarComponent.prototype.dateIncrement;
    /** @type {?} */
    FullCalendarComponent.prototype.dateAlignment;
    /** @type {?} */
    FullCalendarComponent.prototype.duration;
    /** @type {?} */
    FullCalendarComponent.prototype.dayCount;
    /** @type {?} */
    FullCalendarComponent.prototype.locales;
    /** @type {?} */
    FullCalendarComponent.prototype.locale;
    /** @type {?} */
    FullCalendarComponent.prototype.eventTimeFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.columnHeader;
    /** @type {?} */
    FullCalendarComponent.prototype.columnHeaderFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.columnHeaderText;
    /** @type {?} */
    FullCalendarComponent.prototype.columnHeaderHtml;
    /** @type {?} */
    FullCalendarComponent.prototype.titleFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.weekLabel;
    /** @type {?} */
    FullCalendarComponent.prototype.displayEventTime;
    /** @type {?} */
    FullCalendarComponent.prototype.displayEventEnd;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLimitText;
    /** @type {?} */
    FullCalendarComponent.prototype.dayPopoverFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.navLinks;
    /** @type {?} */
    FullCalendarComponent.prototype.selectable;
    /** @type {?} */
    FullCalendarComponent.prototype.selectMirror;
    /** @type {?} */
    FullCalendarComponent.prototype.unselectAuto;
    /** @type {?} */
    FullCalendarComponent.prototype.unselectCancel;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultAllDayEventDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultTimedEventDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.cmdFormatter;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultRangeSeparator;
    /** @type {?} */
    FullCalendarComponent.prototype.selectConstraint;
    /** @type {?} */
    FullCalendarComponent.prototype.selectOverlap;
    /** @type {?} */
    FullCalendarComponent.prototype.selectAllow;
    /** @type {?} */
    FullCalendarComponent.prototype.selectMinDistance;
    /** @type {?} */
    FullCalendarComponent.prototype.editable;
    /** @type {?} */
    FullCalendarComponent.prototype.eventStartEditable;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDurationEditable;
    /** @type {?} */
    FullCalendarComponent.prototype.eventConstraint;
    /** @type {?} */
    FullCalendarComponent.prototype.eventOverlap;
    /** @type {?} */
    FullCalendarComponent.prototype.eventAllow;
    /** @type {?} */
    FullCalendarComponent.prototype.eventClassName;
    /** @type {?} */
    FullCalendarComponent.prototype.eventClassNames;
    /** @type {?} */
    FullCalendarComponent.prototype.eventBackgroundColor;
    /** @type {?} */
    FullCalendarComponent.prototype.eventBorderColor;
    /** @type {?} */
    FullCalendarComponent.prototype.eventTextColor;
    /** @type {?} */
    FullCalendarComponent.prototype.eventColor;
    /** @type {?} */
    FullCalendarComponent.prototype.events;
    /** @type {?} */
    FullCalendarComponent.prototype.eventSources;
    /** @type {?} */
    FullCalendarComponent.prototype.allDayDefault;
    /** @type {?} */
    FullCalendarComponent.prototype.startParam;
    /** @type {?} */
    FullCalendarComponent.prototype.endParam;
    /** @type {?} */
    FullCalendarComponent.prototype.lazyFetching;
    /** @type {?} */
    FullCalendarComponent.prototype.nextDayThreshold;
    /** @type {?} */
    FullCalendarComponent.prototype.eventOrder;
    /** @type {?} */
    FullCalendarComponent.prototype.rerenderDelay;
    /** @type {?} */
    FullCalendarComponent.prototype.dragRevertDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.dragScroll;
    /** @type {?} */
    FullCalendarComponent.prototype.longPressDelay;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLongPressDelay;
    /** @type {?} */
    FullCalendarComponent.prototype.droppable;
    /** @type {?} */
    FullCalendarComponent.prototype.dropAccept;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDataTransform;
    /** @type {?} */
    FullCalendarComponent.prototype.allDayMaintainDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.eventResizableFromStart;
    /** @type {?} */
    FullCalendarComponent.prototype.timeGridEventMinHeight;
    /** @type {?} */
    FullCalendarComponent.prototype.allDayHtml;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDragMinDistance;
    /** @type {?} */
    FullCalendarComponent.prototype.eventSourceFailure;
    /** @type {?} */
    FullCalendarComponent.prototype.eventSourceSuccess;
    /** @type {?} */
    FullCalendarComponent.prototype.forceEventDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.progressiveEventRendering;
    /** @type {?} */
    FullCalendarComponent.prototype.selectLongPressDelay;
    /** @type {?} */
    FullCalendarComponent.prototype.timeZoneParam;
    /** @type {?} */
    FullCalendarComponent.prototype.titleRangeSeparator;
    /** @type {?} */
    FullCalendarComponent.prototype.buttonText;
    /** @type {?} */
    FullCalendarComponent.prototype.views;
    /** @type {?} */
    FullCalendarComponent.prototype.plugins;
    /** @type {?} */
    FullCalendarComponent.prototype.schedulerLicenseKey;
    /** @type {?} */
    FullCalendarComponent.prototype.resources;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceLabelText;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceOrder;
    /** @type {?} */
    FullCalendarComponent.prototype.filterResourcesWithEvents;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceText;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceGroupField;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceGroupText;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceAreaWidth;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceColumns;
    /** @type {?} */
    FullCalendarComponent.prototype.resourcesInitiallyExpanded;
    /** @type {?} */
    FullCalendarComponent.prototype.slotWidth;
    /** @type {?} */
    FullCalendarComponent.prototype.datesAboveResources;
    /** @type {?} */
    FullCalendarComponent.prototype.googleCalendarApiKey;
    /** @type {?} */
    FullCalendarComponent.prototype.refetchResourcesOnNavigate;
    /** @type {?} */
    FullCalendarComponent.prototype.eventResourceEditable;
    /** @type {?} */
    FullCalendarComponent.prototype.windowResize;
    /** @type {?} */
    FullCalendarComponent.prototype.dateClick;
    /** @type {?} */
    FullCalendarComponent.prototype.eventClick;
    /** @type {?} */
    FullCalendarComponent.prototype.eventMouseEnter;
    /** @type {?} */
    FullCalendarComponent.prototype.eventMouseLeave;
    /** @type {?} */
    FullCalendarComponent.prototype.select;
    /** @type {?} */
    FullCalendarComponent.prototype.unselect;
    /** @type {?} */
    FullCalendarComponent.prototype.loading;
    /** @type {?} */
    FullCalendarComponent.prototype.eventPositioned;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDragStart;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDragStop;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDrop;
    /** @type {?} */
    FullCalendarComponent.prototype.eventResizeStart;
    /** @type {?} */
    FullCalendarComponent.prototype.eventResizeStop;
    /** @type {?} */
    FullCalendarComponent.prototype.eventResize;
    /** @type {?} */
    FullCalendarComponent.prototype.drop;
    /** @type {?} */
    FullCalendarComponent.prototype.eventReceive;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLeave;
    /** @type {?} */
    FullCalendarComponent.prototype._destroyed;
    /** @type {?} */
    FullCalendarComponent.prototype.navLinkDayClick;
    /** @type {?} */
    FullCalendarComponent.prototype.navLinkWeekClick;
    /** @type {?} */
    FullCalendarComponent.prototype.viewSkeletonRender;
    /** @type {?} */
    FullCalendarComponent.prototype.viewSkeletonDestroy;
    /** @type {?} */
    FullCalendarComponent.prototype.datesRender;
    /** @type {?} */
    FullCalendarComponent.prototype.datesDestroy;
    /** @type {?} */
    FullCalendarComponent.prototype.dayRender;
    /** @type {?} */
    FullCalendarComponent.prototype.eventRender;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDestroy;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceRender;
    /** @type {?} */
    FullCalendarComponent.prototype.element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BmdWxsY2FsZW5kYXIvYW5ndWxhci8iLCJzb3VyY2VzIjpbImxpYi9mdWxsY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ25DLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQU9iLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQTRELE1BQU0sb0JBQW9CLENBQUM7QUFvQnhHLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTWxGLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFRaEMsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTswQkFIYixFQUFFOzBCQUNGLEVBQUU7UUErTzVCLG9CQUF5QixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pELGlCQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzlDLGtCQUF1QixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9DLHVCQUE0QixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELHVCQUE0QixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELGNBQW1CLElBQUksWUFBWSxFQUFPLENBQUM7UUFDM0MsZ0JBQXFCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDN0MsZUFBb0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM1Qyx1QkFBNEIsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRCxzQkFBMkIsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuRCxxQkFBMEIsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNsRCxpQkFBc0IsSUFBSSxZQUFZ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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlZXBFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBBZnRlclZpZXdJbml0LFxuICBEb0NoZWNrLFxuICBPbkNoYW5nZXMsXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyLCBCdXNpbmVzc0hvdXJzSW5wdXQsIENvbnN0cmFpbnRJbnB1dCwgRXZlbnRBcGksIFBsdWdpbkRlZiB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZSc7XG5pbXBvcnQge1xuICBUb29sYmFySW5wdXQsXG4gIEN1c3RvbUJ1dHRvbklucHV0LFxuICBCdXR0b25JY29uc0lucHV0LCBDZWxsSW5mbyxcbiAgQnV0dG9uVGV4dENvbXBvdW5kSW5wdXQsXG4gIFZpZXdPcHRpb25zSW5wdXRcbn0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL3R5cGVzL2lucHV0LXR5cGVzJztcbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJ0BmdWxsY2FsZW5kYXIvY29yZS9kYXRlbGliL2Vudic7XG5pbXBvcnQgeyBEdXJhdGlvbklucHV0IH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2RhdGVsaWIvZHVyYXRpb24nO1xuaW1wb3J0IHsgRm9ybWF0dGVySW5wdXQgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvZGF0ZWxpYi9mb3JtYXR0aW5nJztcbmltcG9ydCB7IERhdGVSYW5nZUlucHV0IH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2RhdGVsaWIvZGF0ZS1yYW5nZSc7XG5pbXBvcnQgeyBSYXdMb2NhbGUsIExvY2FsZVNpbmd1bGFyQXJnIH0gZnJvbSAnQGZ1bGxjYWxlbmRhci9jb3JlL2RhdGVsaWIvbG9jYWxlJztcbmltcG9ydCB7IE92ZXJsYXBGdW5jLCBBbGxvd0Z1bmMgfSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvdmFsaWRhdGlvbic7XG5pbXBvcnQge1xuICBFdmVudFNvdXJjZUlucHV0LFxuICBFdmVudElucHV0VHJhbnNmb3JtZXIsXG4gIEV2ZW50U291cmNlRXJyb3JSZXNwb25zZUhhbmRsZXIsXG4gIEV2ZW50U291cmNlU3VjY2Vzc1Jlc3BvbnNlSGFuZGxlclxufSBmcm9tICdAZnVsbGNhbGVuZGFyL2NvcmUvc3RydWN0cy9ldmVudC1zb3VyY2UnO1xuaW1wb3J0IHsgSU5QVVRfTkFNRVMsIElOUFVUX0lTX0RFRVAsIE9VVFBVVF9OQU1FUyB9IGZyb20gJy4vZnVsbGNhbGVuZGFyLW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmdWxsLWNhbGVuZGFyJyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIERvQ2hlY2ssIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBkZWVwQ2hhbmdlRGV0ZWN0aW9uPzogYm9vbGVhbjtcblxuICBwcml2YXRlIGNhbGVuZGFyOiBDYWxlbmRhcjtcbiAgcHJpdmF0ZSBkaXJ0eVByb3BzOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBkZWVwQ29waWVzOiBhbnkgPSB7fTsgLy8gaG9sZHMgZnJvemVuIHN0YXRlc1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY2FsZW5kYXIgPSBuZXcgQ2FsZW5kYXIodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuYnVpbGRPcHRpb25zKCkpO1xuICAgIHRoaXMuY2FsZW5kYXIucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkT3B0aW9ucygpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge307XG5cbiAgICBPVVRQVVRfTkFNRVMuZm9yRWFjaChvdXRwdXROYW1lID0+IHtcbiAgICAgIG9wdGlvbnNbb3V0cHV0TmFtZV0gPSAoLi4uYXJncykgPT4ge1xuICAgICAgICB0aGlzW291dHB1dE5hbWVdLmVtaXQoLi4uYXJncyk7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgLy8gZG8gYWZ0ZXIgb3V0cHV0cywgc28gdGhhdCBpbnB1dHMgd2l0aCBzYW1lIG5hbWUgb3ZlcnJpZGVcbiAgICBJTlBVVF9OQU1FUy5mb3JFYWNoKGlucHV0TmFtZSA9PiB7XG4gICAgICBsZXQgaW5wdXRWYWwgPSB0aGlzW2lucHV0TmFtZV07XG5cbiAgICAgIGlmIChpbnB1dFZhbCAhPT0gdW5kZWZpbmVkKSB7IC8vIHVuZm9ydHVuYXRlbHkgRkMgY2hva2VzIHdoZW4gc29tZSBwcm9wcyBhcmUgc2V0IHRvIHVuZGVmaW5lZFxuXG4gICAgICAgIGlmICh0aGlzLmRlZXBDaGFuZ2VEZXRlY3Rpb24gJiYgSU5QVVRfSVNfREVFUFtpbnB1dE5hbWVdKSB7XG4gICAgICAgICAgaW5wdXRWYWwgPSBkZWVwQ29weShpbnB1dFZhbCk7XG4gICAgICAgICAgdGhpcy5kZWVwQ29waWVzW2lucHV0TmFtZV0gPSBpbnB1dFZhbDsgLy8gc2lkZSBlZmZlY3QhXG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zW2lucHV0TmFtZV0gPSBpbnB1dFZhbDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLypcbiAgY2FsbGVkIGJlZm9yZSBuZ09uQ2hhbmdlcywgYWxsb3dzIHVzIHRvIG1hbnVhbGx5IGRldGVjdCBpbnB1dCBjaGFuZ2VzLlxuICBjYWxsZWQgbXVjaCBtb3JlIG9mdGVuIHRoYW4gbmdPbkNoYW5nZXMuXG4gICovXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAodGhpcy5jYWxlbmRhciAmJiB0aGlzLmRlZXBDaGFuZ2VEZXRlY3Rpb24pIHsgLy8gbm90IHRoZSBpbml0aWFsIHJlbmRlciBBTkQgd2UgZG8gZGVlcC1tdXRhdGlvbiBjaGVja3NcbiAgICAgIGNvbnN0IHsgZGVlcENvcGllcyB9ID0gdGhpcztcblxuICAgICAgZm9yIChjb25zdCBpbnB1dE5hbWUgaW4gSU5QVVRfSVNfREVFUCkge1xuICAgICAgICBpZiAoSU5QVVRfSVNfREVFUC5oYXNPd25Qcm9wZXJ0eShpbnB1dE5hbWUpKSB7XG4gICAgICAgICAgY29uc3QgaW5wdXRWYWwgPSB0aGlzW2lucHV0TmFtZV07XG5cbiAgICAgICAgICBpZiAoaW5wdXRWYWwgIT09IHVuZGVmaW5lZCkgeyAvLyB1bmZvcnR1bmF0ZWx5IEZDIGNob2tlcyB3aGVuIHNvbWUgcHJvcHMgYXJlIHNldCB0byB1bmRlZmluZWRcbiAgICAgICAgICAgIGlmICghZGVlcEVxdWFsKGlucHV0VmFsLCBkZWVwQ29waWVzW2lucHV0TmFtZV0pKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSBkZWVwQ29weShpbnB1dFZhbCk7XG4gICAgICAgICAgICAgIGRlZXBDb3BpZXNbaW5wdXROYW1lXSA9IGNvcHk7XG4gICAgICAgICAgICAgIHRoaXMuZGlydHlQcm9wc1tpbnB1dE5hbWVdID0gY29weTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICBjYWxsZWQgd2l0aCBjb25maXJtZWQgY2hhbmdlcyB0byBpbnB1dCByZWZlcmVuY2VzXG4gICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5jYWxlbmRhcikgeyAvLyBub3QgdGhlIGluaXRpYWwgcmVuZGVyXG5cbiAgICAgIGZvciAoY29uc3QgaW5wdXROYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoaW5wdXROYW1lKSkge1xuICAgICAgICAgIGlmICh0aGlzLmRlZXBDb3BpZXNbaW5wdXROYW1lXSA9PT0gdW5kZWZpbmVkKSB7IC8vIG5vdCBhbHJlYWR5IGhhbmRsZWQgaW4gbmdEb0NoZWNrXG4gICAgICAgICAgICB0aGlzLmRpcnR5UHJvcHNbaW5wdXROYW1lXSA9IGNoYW5nZXNbaW5wdXROYW1lXS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIGNvbnN0IHsgZGlydHlQcm9wcyB9ID0gdGhpczsgLy8gaG9sZCBvbiB0byByZWZlcmVuY2UgYmVmb3JlIGNsZWFyaW5nXG5cbiAgICBpZiAoT2JqZWN0LmtleXMoZGlydHlQcm9wcykubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5kaXJ0eVByb3BzID0ge307IC8vIGNsZWFyIGZpcnN0LCBpbiBjYXNlIHRoZSByZXJlbmRlciBjYXVzZXMgbmV3IGRpcnRpbmVzc1xuICAgICAgdGhpcy5jYWxlbmRhci5tdXRhdGVPcHRpb25zKGRpcnR5UHJvcHMsIFtdLCBmYWxzZSwgZGVlcEVxdWFsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5jYWxlbmRhcikge1xuICAgICAgdGhpcy5jYWxlbmRhci5kZXN0cm95KCk7XG4gICAgfVxuICAgIHRoaXMuY2FsZW5kYXIgPSBudWxsO1xuICB9XG5cbiAgcHVibGljIGdldEFwaSgpOiBDYWxlbmRhciB7XG4gICAgcmV0dXJuIHRoaXMuY2FsZW5kYXI7XG4gIH1cblxuICAvKlxuICBUT0RPOiB0aGUgZm9sbG93aW5nIElucHV0cy9PdXRwdXRzIHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IHJld3JpdHRlbiBmb3IgZWFjaCB2ZXJzaW9uIGJ1bXBcbiAgb2YgdGhlIGNvcmUgcHJvamVjdC4gQSBzY3JpcHQgd2lsbCBiZSB3cml0dGVuIHRvIG92ZXJ3cml0ZSB0aGUgYWN0dWFseSBzb3VyY2UgY29kZSBoZXJlLlxuICBJdCBpcyB1c3VhbGx5IGdvb2QgdG8gcHV0IGEgY2xhc3MncyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgQkVGT1JFIHRoZSBtZXRob2RzLCBidXQgaW4gdGhpcyBjYXNlLFxuICBzaW5jZSB0aGUgcHJvcGVydGllcyB3aWxsIGJlIHByb2dyYW1tYXRpY2FsbHkgZ2VuZXJhdGVkLCBiZXR0ZXIgdG8gcHV0IHRoZW0gYWZ0ZXIuXG4gICovXG5cbiAgQElucHV0KCkgaGVhZGVyPzogYm9vbGVhbiB8IFRvb2xiYXJJbnB1dDtcbiAgQElucHV0KCkgZm9vdGVyPzogYm9vbGVhbiB8IFRvb2xiYXJJbnB1dDtcbiAgQElucHV0KCkgY3VzdG9tQnV0dG9ucz86IHsgW25hbWU6IHN0cmluZ106IEN1c3RvbUJ1dHRvbklucHV0IH07XG4gIEBJbnB1dCgpIGJ1dHRvbkljb25zPzogYm9vbGVhbiB8IEJ1dHRvbkljb25zSW5wdXQ7XG4gIEBJbnB1dCgpIHRoZW1lU3lzdGVtPzogJ3N0YW5kYXJkJyB8IHN0cmluZztcbiAgQElucHV0KCkgYm9vdHN0cmFwRm9udEF3ZXNvbWU/OiBib29sZWFuIHwgQnV0dG9uSWNvbnNJbnB1dDtcbiAgQElucHV0KCkgZmlyc3REYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRpcj86ICdsdHInIHwgJ3J0bCcgfCAnYXV0byc7XG4gIEBJbnB1dCgpIHdlZWtlbmRzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaGlkZGVuRGF5cz86IG51bWJlcltdO1xuICBASW5wdXQoKSBmaXhlZFdlZWtDb3VudD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHdlZWtOdW1iZXJzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgd2Vla051bWJlcnNXaXRoaW5EYXlzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgd2Vla051bWJlckNhbGN1bGF0aW9uPzogJ2xvY2FsJyB8ICdJU08nIHwgKChtOiBEYXRlKSA9PiBudW1iZXIpO1xuICBASW5wdXQoKSBidXNpbmVzc0hvdXJzPzogQnVzaW5lc3NIb3Vyc0lucHV0O1xuICBASW5wdXQoKSBzaG93Tm9uQ3VycmVudERhdGVzPzogYm9vbGVhbjtcbiAgQElucHV0KCkgaGVpZ2h0PzogbnVtYmVyIHwgJ2F1dG8nIHwgJ3BhcmVudCcgfCAoKCkgPT4gbnVtYmVyKTtcbiAgQElucHV0KCkgY29udGVudEhlaWdodD86IG51bWJlciB8ICdhdXRvJyB8ICgoKSA9PiBudW1iZXIpO1xuICBASW5wdXQoKSBhc3BlY3RSYXRpbz86IG51bWJlcjtcbiAgQElucHV0KCkgaGFuZGxlV2luZG93UmVzaXplPzogYm9vbGVhbjtcbiAgQElucHV0KCkgd2luZG93UmVzaXplRGVsYXk/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGV2ZW50TGltaXQ/OiBib29sZWFuIHwgbnVtYmVyO1xuICBASW5wdXQoKSBldmVudExpbWl0Q2xpY2s/OiAncG9wb3ZlcicgfCAnd2VlaycgfCAnZGF5JyB8IHN0cmluZyB8ICgoY2VsbGluZm86IENlbGxJbmZvLCBqc2V2ZW50OiBFdmVudCkgPT4gdm9pZCk7XG4gIEBJbnB1dCgpIHRpbWVab25lPzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgQElucHV0KCkgbm93PzogRGF0ZUlucHV0IHwgKCgpID0+IERhdGVJbnB1dCk7XG4gIEBJbnB1dCgpIGRlZmF1bHRWaWV3Pzogc3RyaW5nO1xuICBASW5wdXQoKSBhbGxEYXlTbG90PzogYm9vbGVhbjtcbiAgQElucHV0KCkgYWxsRGF5VGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgc2xvdER1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc2xvdExhYmVsRm9ybWF0PzogRm9ybWF0dGVySW5wdXQ7XG4gIEBJbnB1dCgpIHNsb3RMYWJlbEludGVydmFsPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc25hcER1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc2Nyb2xsVGltZT86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIG1pblRpbWU/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBtYXhUaW1lPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgc2xvdEV2ZW50T3ZlcmxhcD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxpc3REYXlGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dCB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxpc3REYXlBbHRGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dCB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5vRXZlbnRzTWVzc2FnZT86IHN0cmluZztcbiAgQElucHV0KCkgZGVmYXVsdERhdGU/OiBEYXRlSW5wdXQ7XG4gIEBJbnB1dCgpIG5vd0luZGljYXRvcj86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHZpc2libGVSYW5nZT86ICgoY3VycmVudERhdGU6IERhdGUpID0+IERhdGVSYW5nZUlucHV0KSB8IERhdGVSYW5nZUlucHV0O1xuICBASW5wdXQoKSB2YWxpZFJhbmdlPzogRGF0ZVJhbmdlSW5wdXQ7XG4gIEBJbnB1dCgpIGRhdGVJbmNyZW1lbnQ/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBkYXRlQWxpZ25tZW50Pzogc3RyaW5nO1xuICBASW5wdXQoKSBkdXJhdGlvbj86IER1cmF0aW9uSW5wdXQ7XG4gIEBJbnB1dCgpIGRheUNvdW50PzogbnVtYmVyO1xuICBASW5wdXQoKSBsb2NhbGVzPzogUmF3TG9jYWxlW107XG4gIEBJbnB1dCgpIGxvY2FsZT86IExvY2FsZVNpbmd1bGFyQXJnO1xuICBASW5wdXQoKSBldmVudFRpbWVGb3JtYXQ/OiBGb3JtYXR0ZXJJbnB1dDtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVyPzogYm9vbGVhbjtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVyRm9ybWF0PzogRm9ybWF0dGVySW5wdXQ7XG4gIEBJbnB1dCgpIGNvbHVtbkhlYWRlclRleHQ/OiBzdHJpbmcgfCAoKGRhdGU6IERhdGVJbnB1dCkgPT4gc3RyaW5nKTtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVySHRtbD86IHN0cmluZyB8ICgoZGF0ZTogRGF0ZUlucHV0KSA9PiBzdHJpbmcpO1xuICBASW5wdXQoKSB0aXRsZUZvcm1hdD86IEZvcm1hdHRlcklucHV0O1xuICBASW5wdXQoKSB3ZWVrTGFiZWw/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc3BsYXlFdmVudFRpbWU/OiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNwbGF5RXZlbnRFbmQ/OiBib29sZWFuO1xuICBASW5wdXQoKSBldmVudExpbWl0VGV4dD86IHN0cmluZyB8ICgoZXZlbnRDbnQ6IG51bWJlcikgPT4gc3RyaW5nKTtcbiAgQElucHV0KCkgZGF5UG9wb3ZlckZvcm1hdD86IEZvcm1hdHRlcklucHV0O1xuICBASW5wdXQoKSBuYXZMaW5rcz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RNaXJyb3I/OiBib29sZWFuO1xuICBASW5wdXQoKSB1bnNlbGVjdEF1dG8/OiBib29sZWFuO1xuICBASW5wdXQoKSB1bnNlbGVjdENhbmNlbD86IHN0cmluZztcbiAgQElucHV0KCkgZGVmYXVsdEFsbERheUV2ZW50RHVyYXRpb24/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBkZWZhdWx0VGltZWRFdmVudER1cmF0aW9uPzogRHVyYXRpb25JbnB1dDtcbiAgQElucHV0KCkgY21kRm9ybWF0dGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSBkZWZhdWx0UmFuZ2VTZXBhcmF0b3I/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlbGVjdENvbnN0cmFpbnQ/OiBDb25zdHJhaW50SW5wdXQ7XG4gIEBJbnB1dCgpIHNlbGVjdE92ZXJsYXA/OiBib29sZWFuIHwgT3ZlcmxhcEZ1bmM7XG4gIEBJbnB1dCgpIHNlbGVjdEFsbG93PzogQWxsb3dGdW5jO1xuICBASW5wdXQoKSBzZWxlY3RNaW5EaXN0YW5jZT86IG51bWJlcjtcbiAgQElucHV0KCkgZWRpdGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBldmVudFN0YXJ0RWRpdGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBldmVudER1cmF0aW9uRWRpdGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBldmVudENvbnN0cmFpbnQ/OiBDb25zdHJhaW50SW5wdXQ7XG4gIEBJbnB1dCgpIGV2ZW50T3ZlcmxhcD86IGJvb2xlYW4gfCBPdmVybGFwRnVuYztcbiAgQElucHV0KCkgZXZlbnRBbGxvdz86IEFsbG93RnVuYztcbiAgQElucHV0KCkgZXZlbnRDbGFzc05hbWU/OiBzdHJpbmdbXSB8IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRDbGFzc05hbWVzPzogc3RyaW5nW10gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGV2ZW50QmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBldmVudEJvcmRlckNvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBldmVudFRleHRDb2xvcj86IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRDb2xvcj86IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnRzPzogRXZlbnRTb3VyY2VJbnB1dDtcbiAgQElucHV0KCkgZXZlbnRTb3VyY2VzPzogRXZlbnRTb3VyY2VJbnB1dFtdO1xuICBASW5wdXQoKSBhbGxEYXlEZWZhdWx0PzogYm9vbGVhbjtcbiAgQElucHV0KCkgc3RhcnRQYXJhbT86IHN0cmluZztcbiAgQElucHV0KCkgZW5kUGFyYW0/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhenlGZXRjaGluZz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5leHREYXlUaHJlc2hvbGQ/OiBEdXJhdGlvbklucHV0O1xuICBASW5wdXQoKSBldmVudE9yZGVyPzogc3RyaW5nIHwgQXJyYXk8KChhOiBFdmVudEFwaSwgYjogRXZlbnRBcGkpID0+IG51bWJlcikgfCAoc3RyaW5nIHwgKChhOiBFdmVudEFwaSwgYjogRXZlbnRBcGkpID0+IG51bWJlcikpPjtcbiAgQElucHV0KCkgcmVyZW5kZXJEZWxheT86IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgpIGRyYWdSZXZlcnREdXJhdGlvbj86IG51bWJlcjtcbiAgQElucHV0KCkgZHJhZ1Njcm9sbD86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvbmdQcmVzc0RlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoKSBldmVudExvbmdQcmVzc0RlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoKSBkcm9wcGFibGU/OiBib29sZWFuO1xuICBASW5wdXQoKSBkcm9wQWNjZXB0Pzogc3RyaW5nIHwgKChkcmFnZ2FibGU6IGFueSkgPT4gYm9vbGVhbik7XG4gIEBJbnB1dCgpIGV2ZW50RGF0YVRyYW5zZm9ybT86IEV2ZW50SW5wdXRUcmFuc2Zvcm1lcjtcbiAgQElucHV0KCkgYWxsRGF5TWFpbnRhaW5EdXJhdGlvbj86IEJvb2xlYW47XG4gIEBJbnB1dCgpIGV2ZW50UmVzaXphYmxlRnJvbVN0YXJ0PzogQm9vbGVhbjtcbiAgQElucHV0KCkgdGltZUdyaWRFdmVudE1pbkhlaWdodD86IG51bWJlcjtcbiAgQElucHV0KCkgYWxsRGF5SHRtbD86IHN0cmluZztcbiAgQElucHV0KCkgZXZlbnREcmFnTWluRGlzdGFuY2U/OiBudW1iZXI7XG4gIEBJbnB1dCgpIGV2ZW50U291cmNlRmFpbHVyZT86IEV2ZW50U291cmNlRXJyb3JSZXNwb25zZUhhbmRsZXI7XG4gIEBJbnB1dCgpIGV2ZW50U291cmNlU3VjY2Vzcz86IEV2ZW50U291cmNlU3VjY2Vzc1Jlc3BvbnNlSGFuZGxlcjtcbiAgQElucHV0KCkgZm9yY2VFdmVudER1cmF0aW9uPzogYm9vbGVhbjtcbiAgQElucHV0KCkgcHJvZ3Jlc3NpdmVFdmVudFJlbmRlcmluZz86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdExvbmdQcmVzc0RlbGF5PzogbnVtYmVyO1xuICBASW5wdXQoKSB0aW1lWm9uZVBhcmFtPzogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZVJhbmdlU2VwYXJhdG9yPzogc3RyaW5nO1xuICAvLyBjb21wb3VuZCBPcHRpb25zSW5wdXQuLi5cbiAgQElucHV0KCkgYnV0dG9uVGV4dD86IEJ1dHRvblRleHRDb21wb3VuZElucHV0O1xuICBASW5wdXQoKSB2aWV3cz86IHsgW3ZpZXdJZDogc3RyaW5nXTogVmlld09wdGlvbnNJbnB1dCB9O1xuICBASW5wdXQoKSBwbHVnaW5zPzogKFBsdWdpbkRlZiB8IHN0cmluZylbXTtcbiAgLy8gc2NoZWR1bGVyLi4uXG4gIEBJbnB1dCgpIHNjaGVkdWxlckxpY2Vuc2VLZXk/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlc291cmNlcz86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VMYWJlbFRleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlc291cmNlT3JkZXI/OiBhbnk7XG4gIEBJbnB1dCgpIGZpbHRlclJlc291cmNlc1dpdGhFdmVudHM/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlVGV4dD86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VHcm91cEZpZWxkPzogYW55O1xuICBASW5wdXQoKSByZXNvdXJjZUdyb3VwVGV4dD86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VBcmVhV2lkdGg/OiBhbnk7XG4gIEBJbnB1dCgpIHJlc291cmNlQ29sdW1ucz86IGFueTtcbiAgQElucHV0KCkgcmVzb3VyY2VzSW5pdGlhbGx5RXhwYW5kZWQ/OiBhbnk7XG4gIEBJbnB1dCgpIHNsb3RXaWR0aD86IGFueTtcbiAgQElucHV0KCkgZGF0ZXNBYm92ZVJlc291cmNlcz86IGFueTtcbiAgQElucHV0KCkgZ29vZ2xlQ2FsZW5kYXJBcGlLZXk/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlZmV0Y2hSZXNvdXJjZXNPbk5hdmlnYXRlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnRSZXNvdXJjZUVkaXRhYmxlPzogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgd2luZG93UmVzaXplID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkYXRlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50TW91c2VFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRNb3VzZUxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHVuc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBsb2FkaW5nID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudFBvc2l0aW9uZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50RHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudERyYWdTdG9wID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBldmVudERyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UmVzaXplU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UmVzaXplU3RvcCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRSZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50UmVjZWl2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgX2Rlc3Ryb3llZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgbmF2TGlua0RheUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBuYXZMaW5rV2Vla0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8vIFRPRE86IG1ha2UgdGhlc2UgaW5wdXRzLi4uXG4gIEBPdXRwdXQoKSB2aWV3U2tlbGV0b25SZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHZpZXdTa2VsZXRvbkRlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRhdGVzUmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkYXRlc0Rlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRheVJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZXZlbnRSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGV2ZW50RGVzdHJveSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcmVzb3VyY2VSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbn1cbiJdfQ==