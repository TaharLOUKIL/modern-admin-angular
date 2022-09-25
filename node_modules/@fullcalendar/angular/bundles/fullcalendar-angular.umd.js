(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('fast-deep-equal'), require('@angular/core'), require('@fullcalendar/core')) :
    typeof define === 'function' && define.amd ? define('@fullcalendar/angular', ['exports', 'fast-deep-equal', '@angular/core', '@fullcalendar/core'], factory) :
    (global = global || self, factory((global.fullcalendar = global.fullcalendar || {}, global.fullcalendar.angular = {}), global.deepEqual, global.ng.core, global.FullCalendar));
}(this, (function (exports, deepEqual, core, core$1) { 'use strict';

    deepEqual = deepEqual && deepEqual.hasOwnProperty('default') ? deepEqual['default'] : deepEqual;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
            this.windowResize = new core.EventEmitter();
            this.dateClick = new core.EventEmitter();
            this.eventClick = new core.EventEmitter();
            this.eventMouseEnter = new core.EventEmitter();
            this.eventMouseLeave = new core.EventEmitter();
            this.select = new core.EventEmitter();
            this.unselect = new core.EventEmitter();
            this.loading = new core.EventEmitter();
            this.eventPositioned = new core.EventEmitter();
            this.eventDragStart = new core.EventEmitter();
            this.eventDragStop = new core.EventEmitter();
            this.eventDrop = new core.EventEmitter();
            this.eventResizeStart = new core.EventEmitter();
            this.eventResizeStop = new core.EventEmitter();
            this.eventResize = new core.EventEmitter();
            this.drop = new core.EventEmitter();
            this.eventReceive = new core.EventEmitter();
            this.eventLeave = new core.EventEmitter();
            this._destroyed = new core.EventEmitter();
            this.navLinkDayClick = new core.EventEmitter();
            this.navLinkWeekClick = new core.EventEmitter();
            // TODO: make these inputs...
            this.viewSkeletonRender = new core.EventEmitter();
            this.viewSkeletonDestroy = new core.EventEmitter();
            this.datesRender = new core.EventEmitter();
            this.datesDestroy = new core.EventEmitter();
            this.dayRender = new core.EventEmitter();
            this.eventRender = new core.EventEmitter();
            this.eventDestroy = new core.EventEmitter();
            this.resourceRender = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        FullCalendarComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.calendar = new core$1.Calendar(this.element.nativeElement, this.buildOptions());
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
            { type: core.Component, args: [{
                        selector: 'full-calendar',
                        template: ''
                    }] }
        ];
        /** @nocollapse */
        FullCalendarComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        FullCalendarComponent.propDecorators = {
            deepChangeDetection: [{ type: core.Input }],
            header: [{ type: core.Input }],
            footer: [{ type: core.Input }],
            customButtons: [{ type: core.Input }],
            buttonIcons: [{ type: core.Input }],
            themeSystem: [{ type: core.Input }],
            bootstrapFontAwesome: [{ type: core.Input }],
            firstDay: [{ type: core.Input }],
            dir: [{ type: core.Input }],
            weekends: [{ type: core.Input }],
            hiddenDays: [{ type: core.Input }],
            fixedWeekCount: [{ type: core.Input }],
            weekNumbers: [{ type: core.Input }],
            weekNumbersWithinDays: [{ type: core.Input }],
            weekNumberCalculation: [{ type: core.Input }],
            businessHours: [{ type: core.Input }],
            showNonCurrentDates: [{ type: core.Input }],
            height: [{ type: core.Input }],
            contentHeight: [{ type: core.Input }],
            aspectRatio: [{ type: core.Input }],
            handleWindowResize: [{ type: core.Input }],
            windowResizeDelay: [{ type: core.Input }],
            eventLimit: [{ type: core.Input }],
            eventLimitClick: [{ type: core.Input }],
            timeZone: [{ type: core.Input }],
            now: [{ type: core.Input }],
            defaultView: [{ type: core.Input }],
            allDaySlot: [{ type: core.Input }],
            allDayText: [{ type: core.Input }],
            slotDuration: [{ type: core.Input }],
            slotLabelFormat: [{ type: core.Input }],
            slotLabelInterval: [{ type: core.Input }],
            snapDuration: [{ type: core.Input }],
            scrollTime: [{ type: core.Input }],
            minTime: [{ type: core.Input }],
            maxTime: [{ type: core.Input }],
            slotEventOverlap: [{ type: core.Input }],
            listDayFormat: [{ type: core.Input }],
            listDayAltFormat: [{ type: core.Input }],
            noEventsMessage: [{ type: core.Input }],
            defaultDate: [{ type: core.Input }],
            nowIndicator: [{ type: core.Input }],
            visibleRange: [{ type: core.Input }],
            validRange: [{ type: core.Input }],
            dateIncrement: [{ type: core.Input }],
            dateAlignment: [{ type: core.Input }],
            duration: [{ type: core.Input }],
            dayCount: [{ type: core.Input }],
            locales: [{ type: core.Input }],
            locale: [{ type: core.Input }],
            eventTimeFormat: [{ type: core.Input }],
            columnHeader: [{ type: core.Input }],
            columnHeaderFormat: [{ type: core.Input }],
            columnHeaderText: [{ type: core.Input }],
            columnHeaderHtml: [{ type: core.Input }],
            titleFormat: [{ type: core.Input }],
            weekLabel: [{ type: core.Input }],
            displayEventTime: [{ type: core.Input }],
            displayEventEnd: [{ type: core.Input }],
            eventLimitText: [{ type: core.Input }],
            dayPopoverFormat: [{ type: core.Input }],
            navLinks: [{ type: core.Input }],
            selectable: [{ type: core.Input }],
            selectMirror: [{ type: core.Input }],
            unselectAuto: [{ type: core.Input }],
            unselectCancel: [{ type: core.Input }],
            defaultAllDayEventDuration: [{ type: core.Input }],
            defaultTimedEventDuration: [{ type: core.Input }],
            cmdFormatter: [{ type: core.Input }],
            defaultRangeSeparator: [{ type: core.Input }],
            selectConstraint: [{ type: core.Input }],
            selectOverlap: [{ type: core.Input }],
            selectAllow: [{ type: core.Input }],
            selectMinDistance: [{ type: core.Input }],
            editable: [{ type: core.Input }],
            eventStartEditable: [{ type: core.Input }],
            eventDurationEditable: [{ type: core.Input }],
            eventConstraint: [{ type: core.Input }],
            eventOverlap: [{ type: core.Input }],
            eventAllow: [{ type: core.Input }],
            eventClassName: [{ type: core.Input }],
            eventClassNames: [{ type: core.Input }],
            eventBackgroundColor: [{ type: core.Input }],
            eventBorderColor: [{ type: core.Input }],
            eventTextColor: [{ type: core.Input }],
            eventColor: [{ type: core.Input }],
            events: [{ type: core.Input }],
            eventSources: [{ type: core.Input }],
            allDayDefault: [{ type: core.Input }],
            startParam: [{ type: core.Input }],
            endParam: [{ type: core.Input }],
            lazyFetching: [{ type: core.Input }],
            nextDayThreshold: [{ type: core.Input }],
            eventOrder: [{ type: core.Input }],
            rerenderDelay: [{ type: core.Input }],
            dragRevertDuration: [{ type: core.Input }],
            dragScroll: [{ type: core.Input }],
            longPressDelay: [{ type: core.Input }],
            eventLongPressDelay: [{ type: core.Input }],
            droppable: [{ type: core.Input }],
            dropAccept: [{ type: core.Input }],
            eventDataTransform: [{ type: core.Input }],
            allDayMaintainDuration: [{ type: core.Input }],
            eventResizableFromStart: [{ type: core.Input }],
            timeGridEventMinHeight: [{ type: core.Input }],
            allDayHtml: [{ type: core.Input }],
            eventDragMinDistance: [{ type: core.Input }],
            eventSourceFailure: [{ type: core.Input }],
            eventSourceSuccess: [{ type: core.Input }],
            forceEventDuration: [{ type: core.Input }],
            progressiveEventRendering: [{ type: core.Input }],
            selectLongPressDelay: [{ type: core.Input }],
            timeZoneParam: [{ type: core.Input }],
            titleRangeSeparator: [{ type: core.Input }],
            buttonText: [{ type: core.Input }],
            views: [{ type: core.Input }],
            plugins: [{ type: core.Input }],
            schedulerLicenseKey: [{ type: core.Input }],
            resources: [{ type: core.Input }],
            resourceLabelText: [{ type: core.Input }],
            resourceOrder: [{ type: core.Input }],
            filterResourcesWithEvents: [{ type: core.Input }],
            resourceText: [{ type: core.Input }],
            resourceGroupField: [{ type: core.Input }],
            resourceGroupText: [{ type: core.Input }],
            resourceAreaWidth: [{ type: core.Input }],
            resourceColumns: [{ type: core.Input }],
            resourcesInitiallyExpanded: [{ type: core.Input }],
            slotWidth: [{ type: core.Input }],
            datesAboveResources: [{ type: core.Input }],
            googleCalendarApiKey: [{ type: core.Input }],
            refetchResourcesOnNavigate: [{ type: core.Input }],
            eventResourceEditable: [{ type: core.Input }],
            windowResize: [{ type: core.Output }],
            dateClick: [{ type: core.Output }],
            eventClick: [{ type: core.Output }],
            eventMouseEnter: [{ type: core.Output }],
            eventMouseLeave: [{ type: core.Output }],
            select: [{ type: core.Output }],
            unselect: [{ type: core.Output }],
            loading: [{ type: core.Output }],
            eventPositioned: [{ type: core.Output }],
            eventDragStart: [{ type: core.Output }],
            eventDragStop: [{ type: core.Output }],
            eventDrop: [{ type: core.Output }],
            eventResizeStart: [{ type: core.Output }],
            eventResizeStop: [{ type: core.Output }],
            eventResize: [{ type: core.Output }],
            drop: [{ type: core.Output }],
            eventReceive: [{ type: core.Output }],
            eventLeave: [{ type: core.Output }],
            _destroyed: [{ type: core.Output }],
            navLinkDayClick: [{ type: core.Output }],
            navLinkWeekClick: [{ type: core.Output }],
            viewSkeletonRender: [{ type: core.Output }],
            viewSkeletonDestroy: [{ type: core.Output }],
            datesRender: [{ type: core.Output }],
            datesDestroy: [{ type: core.Output }],
            dayRender: [{ type: core.Output }],
            eventRender: [{ type: core.Output }],
            eventDestroy: [{ type: core.Output }],
            resourceRender: [{ type: core.Output }]
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
            { type: core.NgModule, args: [{
                        declarations: [FullCalendarComponent],
                        imports: [],
                        exports: [FullCalendarComponent]
                    },] }
        ];
        return FullCalendarModule;
    }());

    exports.FullCalendarComponent = FullCalendarComponent;
    exports.FullCalendarModule = FullCalendarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fullcalendar-angular.umd.js.map
