import { __spread } from 'tslib';
import deepEqual from 'fast-deep-equal';
import { EventEmitter, Component, ElementRef, Input, Output, NgModule } from '@angular/core';
import { Calendar } from '@fullcalendar/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * @param {?} input
 * @return {?}
 */
function deepCopy(input) {
    if (Array.isArray(input)) {
        return input.map(deepCopy);
    }
    else if (input instanceof Date) {
        return new Date(input.valueOf());
    }
    else if (typeof input === 'object' && input) { // non-null object
        // non-null object
        return mapHash(input, deepCopy);
    }
    else { // everything else (null, function, etc)
        // everything else (null, function, etc)
        return input;
    }
}
/**
 * @param {?} input
 * @param {?} func
 * @return {?}
 */
function mapHash(input, func) {
    /** @type {?} */
    var output = {};
    for (var key in input) {
        if (hasOwnProperty.call(input, key)) {
            output[key] = func(input[key], key);
        }
    }
    return output;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/*
the docs point to this file as an index of options.
when this files is moved, update the docs.
*/
/** @type {?} */
var INPUT_NAMES = [
    'header',
    'footer',
    'customButtons',
    'buttonIcons',
    'themeSystem',
    'bootstrapFontAwesome',
    'firstDay',
    'dir',
    'weekends',
    'hiddenDays',
    'fixedWeekCount',
    'weekNumbers',
    'weekNumbersWithinDays',
    'weekNumberCalculation',
    'businessHours',
    'showNonCurrentDates',
    'height',
    'contentHeight',
    'aspectRatio',
    'handleWindowResize',
    'windowResizeDelay',
    'eventLimit',
    'eventLimitClick',
    'timeZone',
    'now',
    'defaultView',
    'allDaySlot',
    'allDayText',
    'slotDuration',
    'slotLabelFormat',
    'slotLabelInterval',
    'snapDuration',
    'scrollTime',
    'minTime',
    'maxTime',
    'slotEventOverlap',
    'listDayFormat',
    'listDayAltFormat',
    'noEventsMessage',
    'defaultDate',
    'nowIndicator',
    'visibleRange',
    'validRange',
    'dateIncrement',
    'dateAlignment',
    'duration',
    'dayCount',
    'locales',
    'locale',
    'eventTimeFormat',
    'columnHeader',
    'columnHeaderFormat',
    'columnHeaderText',
    'columnHeaderHtml',
    'titleFormat',
    'weekLabel',
    'displayEventTime',
    'displayEventEnd',
    'eventLimitText',
    'dayPopoverFormat',
    'navLinks',
    'selectable',
    'selectMirror',
    'selectMinDistance',
    'unselectAuto',
    'unselectCancel',
    'defaultAllDayEventDuration',
    'defaultTimedEventDuration',
    'cmdFormatter',
    'defaultRangeSeparator',
    'selectConstraint',
    'selectOverlap',
    'selectAllow',
    'editable',
    'eventStartEditable',
    'eventDurationEditable',
    'eventConstraint',
    'eventOverlap',
    'eventAllow',
    'eventClassName',
    'eventClassNames',
    'eventBackgroundColor',
    'eventBorderColor',
    'eventTextColor',
    'eventColor',
    'events',
    'eventSources',
    'allDayDefault',
    'startParam',
    'endParam',
    'lazyFetching',
    'nextDayThreshold',
    'eventOrder',
    'rerenderDelay',
    'dragRevertDuration',
    'dragScroll',
    'longPressDelay',
    'eventLongPressDelay',
    'droppable',
    'dropAccept',
    'eventDataTransform',
    'allDayMaintainDuration',
    'eventResizableFromStart',
    'timeGridEventMinHeight',
    'allDayHtml',
    'eventDragMinDistance',
    'eventSourceFailure',
    'eventSourceSuccess',
    'forceEventDuration',
    'progressiveEventRendering',
    'selectLongPressDelay',
    'selectMinDistance',
    'timeZoneParam',
    'titleRangeSeparator',
    'buttonText',
    'views',
    'plugins',
    'schedulerLicenseKey',
    'resources',
    'resourceLabelText',
    'resourceOrder',
    'filterResourcesWithEvents',
    'resourceText',
    'resourceGroupField',
    'resourceGroupText',
    'resourceAreaWidth',
    'resourceColumns',
    'resourcesInitiallyExpanded',
    'slotWidth',
    'datesAboveResources',
    'googleCalendarApiKey',
    'refetchResourcesOnNavigate',
    'eventResourceEditable'
];
/** @type {?} */
var INPUT_IS_DEEP = {
    header: true,
    footer: true,
    events: true,
    eventSources: true,
    resources: true
};
/** @type {?} */
var OUTPUT_NAMES = [
    'windowResize',
    'dateClick',
    'eventClick',
    'navLinkDayClick',
    'navLinkWeekClick',
    'eventMouseEnter',
    'eventMouseLeave',
    'select',
    'unselect',
    'loading',
    'eventPositioned',
    'eventDragStart',
    'eventDragStop',
    'eventDrop',
    'eventResizeStart',
    'eventResizeStop',
    'eventResize',
    'drop',
    'eventReceive',
    'eventLeave',
    '_destroyed',
    'viewSkeletonRender',
    'viewSkeletonDestroy',
    'datesRender',
    'datesDestroy',
    'dayRender',
    'eventRender',
    'eventDestroy',
    'resourceRender'
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FullCalendarComponent = /** @class */ (function () {
    function FullCalendarComponent(element) {
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
    FullCalendarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.calendar = new Calendar(this.element.nativeElement, this.buildOptions());
        this.calendar.render();
    };
    /**
     * @return {?}
     */
    FullCalendarComponent.prototype.buildOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var options = {};
        OUTPUT_NAMES.forEach(function (outputName) {
            options[outputName] = function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                (_a = _this[outputName]).emit.apply(_a, __spread(args));
            };
        });
        // do after outputs, so that inputs with same name override
        INPUT_NAMES.forEach(function (inputName) {
            /** @type {?} */
            var inputVal = _this[inputName];
            if (inputVal !== undefined) { // unfortunately FC chokes when some props are set to undefined
                // unfortunately FC chokes when some props are set to undefined
                if (_this.deepChangeDetection && INPUT_IS_DEEP[inputName]) {
                    inputVal = deepCopy(inputVal);
                    _this.deepCopies[inputName] = inputVal; // side effect!
                }
                options[inputName] = inputVal;
            }
        });
        return options;
    };
    /*
    called before ngOnChanges, allows us to manually detect input changes.
    called much more often than ngOnChanges.
    */
    /**
     * @return {?}
     */
    FullCalendarComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.calendar && this.deepChangeDetection) { // not the initial render AND we do deep-mutation checks
            var deepCopies = this.deepCopies;
            for (var inputName in INPUT_IS_DEEP) {
                if (INPUT_IS_DEEP.hasOwnProperty(inputName)) {
                    /** @type {?} */
                    var inputVal = this[inputName];
                    if (inputVal !== undefined) { // unfortunately FC chokes when some props are set to undefined
                        // unfortunately FC chokes when some props are set to undefined
                        if (!deepEqual(inputVal, deepCopies[inputName])) {
                            /** @type {?} */
                            var copy = deepCopy(inputVal);
                            deepCopies[inputName] = copy;
                            this.dirtyProps[inputName] = copy;
                        }
                    }
                }
            }
        }
    };
    /*
    called with confirmed changes to input references
    */
    /**
     * @param {?} changes
     * @return {?}
     */
    FullCalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.calendar) { // not the initial render
            // not the initial render
            for (var inputName in changes) {
                if (changes.hasOwnProperty(inputName)) {
                    if (this.deepCopies[inputName] === undefined) { // not already handled in ngDoCheck
                        // not already handled in ngDoCheck
                        this.dirtyProps[inputName] = changes[inputName].currentValue;
                    }
                }
            }
        }
    };
    /**
     * @return {?}
     */
    FullCalendarComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var dirtyProps = this.dirtyProps; // hold on to reference before clearing
        if (Object.keys(dirtyProps).length > 0) {
            this.dirtyProps = {}; // clear first, in case the rerender causes new dirtiness
            this.calendar.mutateOptions(dirtyProps, [], false, deepEqual);
        }
    };
    /**
     * @return {?}
     */
    FullCalendarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.calendar) {
            this.calendar.destroy();
        }
        this.calendar = null;
    };
    /**
     * @return {?}
     */
    FullCalendarComponent.prototype.getApi = /**
     * @return {?}
     */
    function () {
        return this.calendar;
    };
    FullCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'full-calendar',
                    template: ''
                }] }
    ];
    /** @nocollapse */
    FullCalendarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return FullCalendarComponent;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FullCalendarModule = /** @class */ (function () {
    function FullCalendarModule() {
    }
    FullCalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FullCalendarComponent],
                    imports: [],
                    exports: [FullCalendarComponent]
                },] }
    ];
    return FullCalendarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { FullCalendarComponent, FullCalendarModule };
//# sourceMappingURL=fullcalendar-angular.js.map
