/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input, HostBinding, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { columnsByPin, columnGroupWidths, columnsByPinArr } from '../../utils/column';
import { SortType } from '../../types/sort.type';
import { SelectionType } from '../../types/selection.type';
import { translateXY } from '../../utils/translate';
var DataTableHeaderComponent = /** @class */ (function () {
    function DataTableHeaderComponent(cd) {
        this.cd = cd;
        this.sort = new EventEmitter();
        this.reorder = new EventEmitter();
        this.resize = new EventEmitter();
        this.select = new EventEmitter();
        this.columnContextmenu = new EventEmitter(false);
        this._columnGroupWidths = {
            total: 100
        };
        this._styleByGroup = {
            left: {},
            center: {},
            right: {}
        };
        this.destroyed = false;
    }
    Object.defineProperty(DataTableHeaderComponent.prototype, "innerWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._innerWidth;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            this._innerWidth = val;
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this._columns) {
                    /** @type {?} */
                    var colByPin = columnsByPin(_this._columns);
                    _this._columnGroupWidths = columnGroupWidths(colByPin, _this._columns);
                    _this.setStylesByGroup();
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderComponent.prototype, "headerHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._headerHeight;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val !== 'auto') {
                this._headerHeight = val + "px";
            }
            else {
                this._headerHeight = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderComponent.prototype, "columns", {
        get: /**
         * @return {?}
         */
        function () {
            return this._columns;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            var _this = this;
            this._columns = val;
            /** @type {?} */
            var colsByPin = columnsByPin(val);
            this._columnsByPin = columnsByPinArr(val);
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this._columnGroupWidths = columnGroupWidths(colsByPin, val);
                _this.setStylesByGroup();
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableHeaderComponent.prototype, "offsetX", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offsetX;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._offsetX = val;
            this.setStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DataTableHeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed = true;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onLongPressStart = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var event = _a.event, model = _a.model;
        model.dragging = true;
        this.dragEventTarget = event;
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onLongPressEnd = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var event = _a.event, model = _a.model;
        this.dragEventTarget = event;
        // delay resetting so sort can be
        // prevented if we were dragging
        setTimeout((/**
         * @return {?}
         */
        function () {
            // datatable component creates copies from columns on reorder
            // set dragging to false on new objects
            /** @type {?} */
            var column = _this._columns.find((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c.$$id === model.$$id; }));
            if (column) {
                column.dragging = false;
            }
        }), 5);
    };
    Object.defineProperty(DataTableHeaderComponent.prototype, "headerWidth", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.scrollbarH) {
                return this.innerWidth + 'px';
            }
            return '100%';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @param {?} colGroup
     * @return {?}
     */
    DataTableHeaderComponent.prototype.trackByGroups = /**
     * @param {?} index
     * @param {?} colGroup
     * @return {?}
     */
    function (index, colGroup) {
        return colGroup.type;
    };
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    DataTableHeaderComponent.prototype.columnTrackingFn = /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    function (index, column) {
        return column.$$id;
    };
    /**
     * @param {?} width
     * @param {?} column
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onColumnResized = /**
     * @param {?} width
     * @param {?} column
     * @return {?}
     */
    function (width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        this.resize.emit({
            column: column,
            prevValue: column.width,
            newValue: width
        });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onColumnReordered = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var prevIndex = _a.prevIndex, newIndex = _a.newIndex, model = _a.model;
        /** @type {?} */
        var column = this.getColumn(newIndex);
        column.isTarget = false;
        column.targetMarkerContext = undefined;
        this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
        });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onTargetChanged = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var prevIndex = _a.prevIndex, newIndex = _a.newIndex, initialIndex = _a.initialIndex;
        if (prevIndex || prevIndex === 0) {
            /** @type {?} */
            var oldColumn = this.getColumn(prevIndex);
            oldColumn.isTarget = false;
            oldColumn.targetMarkerContext = undefined;
        }
        if (newIndex || newIndex === 0) {
            /** @type {?} */
            var newColumn = this.getColumn(newIndex);
            newColumn.isTarget = true;
            if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = {
                    class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                };
            }
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    DataTableHeaderComponent.prototype.getColumn = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var leftColumnCount = this._columnsByPin[0].columns.length;
        if (index < leftColumnCount) {
            return this._columnsByPin[0].columns[index];
        }
        /** @type {?} */
        var centerColumnCount = this._columnsByPin[1].columns.length;
        if (index < leftColumnCount + centerColumnCount) {
            return this._columnsByPin[1].columns[index - leftColumnCount];
        }
        return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    DataTableHeaderComponent.prototype.onSort = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var column = _a.column, prevValue = _a.prevValue, newValue = _a.newValue;
        // if we are dragging don't sort!
        if (column.dragging) {
            return;
        }
        /** @type {?} */
        var sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts: sorts,
            column: column,
            prevValue: prevValue,
            newValue: newValue
        });
    };
    /**
     * @param {?} column
     * @param {?} prevValue
     * @param {?} newValue
     * @return {?}
     */
    DataTableHeaderComponent.prototype.calcNewSorts = /**
     * @param {?} column
     * @param {?} prevValue
     * @param {?} newValue
     * @return {?}
     */
    function (column, prevValue, newValue) {
        /** @type {?} */
        var idx = 0;
        if (!this.sorts) {
            this.sorts = [];
        }
        /** @type {?} */
        var sorts = this.sorts.map((/**
         * @param {?} s
         * @param {?} i
         * @return {?}
         */
        function (s, i) {
            s = tslib_1.__assign({}, s);
            if (s.prop === column.prop) {
                idx = i;
            }
            return s;
        }));
        if (newValue === undefined) {
            sorts.splice(idx, 1);
        }
        else if (prevValue) {
            sorts[idx].dir = newValue;
        }
        else {
            if (this.sortType === SortType.single) {
                sorts.splice(0, this.sorts.length);
            }
            sorts.push({ dir: newValue, prop: column.prop });
        }
        return sorts;
    };
    /**
     * @return {?}
     */
    DataTableHeaderComponent.prototype.setStylesByGroup = /**
     * @return {?}
     */
    function () {
        this._styleByGroup.left = this.calcStylesByGroup('left');
        this._styleByGroup.center = this.calcStylesByGroup('center');
        this._styleByGroup.right = this.calcStylesByGroup('right');
        if (!this.destroyed) {
            this.cd.detectChanges();
        }
    };
    /**
     * @param {?} group
     * @return {?}
     */
    DataTableHeaderComponent.prototype.calcStylesByGroup = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var widths = this._columnGroupWidths;
        /** @type {?} */
        var offsetX = this.offsetX;
        /** @type {?} */
        var styles = {
            width: widths[group] + "px"
        };
        if (group === 'center') {
            translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            /** @type {?} */
            var totalDiff = widths.total - this.innerWidth;
            /** @type {?} */
            var offset = totalDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    };
    DataTableHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'datatable-header',
                    template: "\n    <div\n      orderable\n      (reorder)=\"onColumnReordered($event)\"\n      (targetChanged)=\"onTargetChanged($event)\"\n      [style.width.px]=\"_columnGroupWidths.total\"\n      class=\"datatable-header-inner\"\n    >\n      <div\n        *ngFor=\"let colGroup of _columnsByPin; trackBy: trackByGroups\"\n        [class]=\"'datatable-row-' + colGroup.type\"\n        [ngStyle]=\"_styleByGroup[colGroup.type]\"\n      >\n        <datatable-header-cell\n          *ngFor=\"let column of colGroup.columns; trackBy: columnTrackingFn\"\n          resizeable\n          [resizeEnabled]=\"column.resizeable\"\n          (resize)=\"onColumnResized($event, column)\"\n          long-press\n          [pressModel]=\"column\"\n          [pressEnabled]=\"reorderable && column.draggable\"\n          (longPressStart)=\"onLongPressStart($event)\"\n          (longPressEnd)=\"onLongPressEnd($event)\"\n          draggable\n          [dragX]=\"reorderable && column.draggable && column.dragging\"\n          [dragY]=\"false\"\n          [dragModel]=\"column\"\n          [dragEventTarget]=\"dragEventTarget\"\n          [headerHeight]=\"headerHeight\"\n          [isTarget]=\"column.isTarget\"\n          [targetMarkerTemplate]=\"targetMarkerTemplate\"\n          [targetMarkerContext]=\"column.targetMarkerContext\"\n          [column]=\"column\"\n          [sortType]=\"sortType\"\n          [sorts]=\"sorts\"\n          [selectionType]=\"selectionType\"\n          [sortAscendingIcon]=\"sortAscendingIcon\"\n          [sortDescendingIcon]=\"sortDescendingIcon\"\n          [allRowsSelected]=\"allRowsSelected\"\n          (sort)=\"onSort($event)\"\n          (select)=\"select.emit($event)\"\n          (columnContextmenu)=\"columnContextmenu.emit($event)\"\n        >\n        </datatable-header-cell>\n      </div>\n    </div>\n  ",
                    host: {
                        class: 'datatable-header'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DataTableHeaderComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    DataTableHeaderComponent.propDecorators = {
        sortAscendingIcon: [{ type: Input }],
        sortDescendingIcon: [{ type: Input }],
        scrollbarH: [{ type: Input }],
        dealsWithGroup: [{ type: Input }],
        targetMarkerTemplate: [{ type: Input }],
        innerWidth: [{ type: Input }],
        sorts: [{ type: Input }],
        sortType: [{ type: Input }],
        allRowsSelected: [{ type: Input }],
        selectionType: [{ type: Input }],
        reorderable: [{ type: Input }],
        headerHeight: [{ type: HostBinding, args: ['style.height',] }, { type: Input }],
        columns: [{ type: Input }],
        offsetX: [{ type: Input }],
        sort: [{ type: Output }],
        reorder: [{ type: Output }],
        resize: [{ type: Output }],
        select: [{ type: Output }],
        columnContextmenu: [{ type: Output }],
        headerWidth: [{ type: HostBinding, args: ['style.width',] }]
    };
    return DataTableHeaderComponent;
}());
export { DataTableHeaderComponent };
if (false) {
    /** @type {?} */
    DataTableHeaderComponent.prototype.sortAscendingIcon;
    /** @type {?} */
    DataTableHeaderComponent.prototype.sortDescendingIcon;
    /** @type {?} */
    DataTableHeaderComponent.prototype.scrollbarH;
    /** @type {?} */
    DataTableHeaderComponent.prototype.dealsWithGroup;
    /** @type {?} */
    DataTableHeaderComponent.prototype.targetMarkerTemplate;
    /** @type {?} */
    DataTableHeaderComponent.prototype.targetMarkerContext;
    /** @type {?} */
    DataTableHeaderComponent.prototype.sorts;
    /** @type {?} */
    DataTableHeaderComponent.prototype.sortType;
    /** @type {?} */
    DataTableHeaderComponent.prototype.allRowsSelected;
    /** @type {?} */
    DataTableHeaderComponent.prototype.selectionType;
    /** @type {?} */
    DataTableHeaderComponent.prototype.reorderable;
    /** @type {?} */
    DataTableHeaderComponent.prototype.dragEventTarget;
    /** @type {?} */
    DataTableHeaderComponent.prototype.sort;
    /** @type {?} */
    DataTableHeaderComponent.prototype.reorder;
    /** @type {?} */
    DataTableHeaderComponent.prototype.resize;
    /** @type {?} */
    DataTableHeaderComponent.prototype.select;
    /** @type {?} */
    DataTableHeaderComponent.prototype.columnContextmenu;
    /** @type {?} */
    DataTableHeaderComponent.prototype._columnsByPin;
    /** @type {?} */
    DataTableHeaderComponent.prototype._columnGroupWidths;
    /** @type {?} */
    DataTableHeaderComponent.prototype._innerWidth;
    /** @type {?} */
    DataTableHeaderComponent.prototype._offsetX;
    /** @type {?} */
    DataTableHeaderComponent.prototype._columns;
    /** @type {?} */
    DataTableHeaderComponent.prototype._headerHeight;
    /** @type {?} */
    DataTableHeaderComponent.prototype._styleByGroup;
    /**
     * @type {?}
     * @private
     */
    DataTableHeaderComponent.prototype.destroyed;
    /**
     * @type {?}
     * @private
     */
    DataTableHeaderComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osS0FBSyxFQUNMLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFcEQ7SUFrSkUsa0NBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBdEIvQixTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0Msc0JBQWlCLEdBQUcsSUFBSSxZQUFZLENBQXFDLEtBQUssQ0FBQyxDQUFDO1FBRzFGLHVCQUFrQixHQUFRO1lBQ3hCLEtBQUssRUFBRSxHQUFHO1NBQ1gsQ0FBQztRQUtGLGtCQUFhLEdBQTJCO1lBQ3RDLElBQUksRUFBRSxFQUFFO1lBQ1IsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7UUFFTSxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBRWtCLENBQUM7SUFuRjdD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O0lBQ2xDLGlEQUFzQzs7SUFDdEMsK0NBQThCOztJQUU5QixtREFBcUI7O0lBd0NyQix3Q0FBdUQ7O0lBQ3ZELDJDQUEwRDs7SUFDMUQsMENBQXlEOztJQUN6RCwwQ0FBeUQ7O0lBQ3pELHFEQUEwRjs7SUFFMUYsaURBQW1COztJQUNuQixzREFFRTs7SUFDRiwrQ0FBb0I7O0lBQ3BCLDRDQUFpQjs7SUFDakIsNENBQWdCOztJQUNoQixpREFBc0I7O0lBQ3RCLGlEQUlFOzs7OztJQUVGLDZDQUEwQjs7Ozs7SUFFZCxzQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW91c2VFdmVudCB9IGZyb20gJy4uLy4uL2V2ZW50cyc7XG5pbXBvcnQgeyBjb2x1bW5zQnlQaW4sIGNvbHVtbkdyb3VwV2lkdGhzLCBjb2x1bW5zQnlQaW5BcnIgfSBmcm9tICcuLi8uLi91dGlscy9jb2x1bW4nO1xuaW1wb3J0IHsgU29ydFR5cGUgfSBmcm9tICcuLi8uLi90eXBlcy9zb3J0LnR5cGUnO1xuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3NlbGVjdGlvbi50eXBlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkRpcmVjdGl2ZSB9IGZyb20gJy4uL2NvbHVtbnMvY29sdW1uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyB0cmFuc2xhdGVYWSB9IGZyb20gJy4uLy4uL3V0aWxzL3RyYW5zbGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIG9yZGVyYWJsZVxuICAgICAgKHJlb3JkZXIpPVwib25Db2x1bW5SZW9yZGVyZWQoJGV2ZW50KVwiXG4gICAgICAodGFyZ2V0Q2hhbmdlZCk9XCJvblRhcmdldENoYW5nZWQoJGV2ZW50KVwiXG4gICAgICBbc3R5bGUud2lkdGgucHhdPVwiX2NvbHVtbkdyb3VwV2lkdGhzLnRvdGFsXCJcbiAgICAgIGNsYXNzPVwiZGF0YXRhYmxlLWhlYWRlci1pbm5lclwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICAqbmdGb3I9XCJsZXQgY29sR3JvdXAgb2YgX2NvbHVtbnNCeVBpbjsgdHJhY2tCeTogdHJhY2tCeUdyb3Vwc1wiXG4gICAgICAgIFtjbGFzc109XCInZGF0YXRhYmxlLXJvdy0nICsgY29sR3JvdXAudHlwZVwiXG4gICAgICAgIFtuZ1N0eWxlXT1cIl9zdHlsZUJ5R3JvdXBbY29sR3JvdXAudHlwZV1cIlxuICAgICAgPlxuICAgICAgICA8ZGF0YXRhYmxlLWhlYWRlci1jZWxsXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2xHcm91cC5jb2x1bW5zOyB0cmFja0J5OiBjb2x1bW5UcmFja2luZ0ZuXCJcbiAgICAgICAgICByZXNpemVhYmxlXG4gICAgICAgICAgW3Jlc2l6ZUVuYWJsZWRdPVwiY29sdW1uLnJlc2l6ZWFibGVcIlxuICAgICAgICAgIChyZXNpemUpPVwib25Db2x1bW5SZXNpemVkKCRldmVudCwgY29sdW1uKVwiXG4gICAgICAgICAgbG9uZy1wcmVzc1xuICAgICAgICAgIFtwcmVzc01vZGVsXT1cImNvbHVtblwiXG4gICAgICAgICAgW3ByZXNzRW5hYmxlZF09XCJyZW9yZGVyYWJsZSAmJiBjb2x1bW4uZHJhZ2dhYmxlXCJcbiAgICAgICAgICAobG9uZ1ByZXNzU3RhcnQpPVwib25Mb25nUHJlc3NTdGFydCgkZXZlbnQpXCJcbiAgICAgICAgICAobG9uZ1ByZXNzRW5kKT1cIm9uTG9uZ1ByZXNzRW5kKCRldmVudClcIlxuICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgIFtkcmFnWF09XCJyZW9yZGVyYWJsZSAmJiBjb2x1bW4uZHJhZ2dhYmxlICYmIGNvbHVtbi5kcmFnZ2luZ1wiXG4gICAgICAgICAgW2RyYWdZXT1cImZhbHNlXCJcbiAgICAgICAgICBbZHJhZ01vZGVsXT1cImNvbHVtblwiXG4gICAgICAgICAgW2RyYWdFdmVudFRhcmdldF09XCJkcmFnRXZlbnRUYXJnZXRcIlxuICAgICAgICAgIFtoZWFkZXJIZWlnaHRdPVwiaGVhZGVySGVpZ2h0XCJcbiAgICAgICAgICBbaXNUYXJnZXRdPVwiY29sdW1uLmlzVGFyZ2V0XCJcbiAgICAgICAgICBbdGFyZ2V0TWFya2VyVGVtcGxhdGVdPVwidGFyZ2V0TWFya2VyVGVtcGxhdGVcIlxuICAgICAgICAgIFt0YXJnZXRNYXJrZXJDb250ZXh0XT1cImNvbHVtbi50YXJnZXRNYXJrZXJDb250ZXh0XCJcbiAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgW3NvcnRUeXBlXT1cInNvcnRUeXBlXCJcbiAgICAgICAgICBbc29ydHNdPVwic29ydHNcIlxuICAgICAgICAgIFtzZWxlY3Rpb25UeXBlXT1cInNlbGVjdGlvblR5cGVcIlxuICAgICAgICAgIFtzb3J0QXNjZW5kaW5nSWNvbl09XCJzb3J0QXNjZW5kaW5nSWNvblwiXG4gICAgICAgICAgW3NvcnREZXNjZW5kaW5nSWNvbl09XCJzb3J0RGVzY2VuZGluZ0ljb25cIlxuICAgICAgICAgIFthbGxSb3dzU2VsZWN0ZWRdPVwiYWxsUm93c1NlbGVjdGVkXCJcbiAgICAgICAgICAoc29ydCk9XCJvblNvcnQoJGV2ZW50KVwiXG4gICAgICAgICAgKHNlbGVjdCk9XCJzZWxlY3QuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAoY29sdW1uQ29udGV4dG1lbnUpPVwiY29sdW1uQ29udGV4dG1lbnUuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgPlxuICAgICAgICA8L2RhdGF0YWJsZS1oZWFkZXItY2VsbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdkYXRhdGFibGUtaGVhZGVyJ1xuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBzb3J0QXNjZW5kaW5nSWNvbjogYW55O1xuICBASW5wdXQoKSBzb3J0RGVzY2VuZGluZ0ljb246IGFueTtcbiAgQElucHV0KCkgc2Nyb2xsYmFySDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGVhbHNXaXRoR3JvdXA6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRhcmdldE1hcmtlclRlbXBsYXRlOiBhbnk7XG5cbiAgdGFyZ2V0TWFya2VyQ29udGV4dDogYW55O1xuXG4gIEBJbnB1dCgpIHNldCBpbm5lcldpZHRoKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5faW5uZXJXaWR0aCA9IHZhbDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jb2x1bW5zKSB7XG4gICAgICAgIGNvbnN0IGNvbEJ5UGluID0gY29sdW1uc0J5UGluKHRoaXMuX2NvbHVtbnMpO1xuICAgICAgICB0aGlzLl9jb2x1bW5Hcm91cFdpZHRocyA9IGNvbHVtbkdyb3VwV2lkdGhzKGNvbEJ5UGluLCB0aGlzLl9jb2x1bW5zKTtcbiAgICAgICAgdGhpcy5zZXRTdHlsZXNCeUdyb3VwKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXQgaW5uZXJXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9pbm5lcldpZHRoO1xuICB9XG5cbiAgQElucHV0KCkgc29ydHM6IGFueVtdO1xuICBASW5wdXQoKSBzb3J0VHlwZTogU29ydFR5cGU7XG4gIEBJbnB1dCgpIGFsbFJvd3NTZWxlY3RlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0aW9uVHlwZTogU2VsZWN0aW9uVHlwZTtcbiAgQElucHV0KCkgcmVvcmRlcmFibGU6IGJvb2xlYW47XG5cbiAgZHJhZ0V2ZW50VGFyZ2V0OiBhbnk7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKVxuICBASW5wdXQoKVxuICBzZXQgaGVhZGVySGVpZ2h0KHZhbDogYW55KSB7XG4gICAgaWYgKHZhbCAhPT0gJ2F1dG8nKSB7XG4gICAgICB0aGlzLl9oZWFkZXJIZWlnaHQgPSBgJHt2YWx9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oZWFkZXJIZWlnaHQgPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhlYWRlckhlaWdodCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJIZWlnaHQ7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgY29sdW1ucyh2YWw6IGFueVtdKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IHZhbDtcblxuICAgIGNvbnN0IGNvbHNCeVBpbiA9IGNvbHVtbnNCeVBpbih2YWwpO1xuICAgIHRoaXMuX2NvbHVtbnNCeVBpbiA9IGNvbHVtbnNCeVBpbkFycih2YWwpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fY29sdW1uR3JvdXBXaWR0aHMgPSBjb2x1bW5Hcm91cFdpZHRocyhjb2xzQnlQaW4sIHZhbCk7XG4gICAgICB0aGlzLnNldFN0eWxlc0J5R3JvdXAoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBjb2x1bW5zKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBvZmZzZXRYKHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2Zmc2V0WCA9IHZhbDtcbiAgICB0aGlzLnNldFN0eWxlc0J5R3JvdXAoKTtcbiAgfVxuICBnZXQgb2Zmc2V0WCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0WDtcbiAgfVxuXG4gIEBPdXRwdXQoKSBzb3J0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlb3JkZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVzaXplOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjb2x1bW5Db250ZXh0bWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogTW91c2VFdmVudDsgY29sdW1uOiBhbnkgfT4oZmFsc2UpO1xuXG4gIF9jb2x1bW5zQnlQaW46IGFueTtcbiAgX2NvbHVtbkdyb3VwV2lkdGhzOiBhbnkgPSB7XG4gICAgdG90YWw6IDEwMFxuICB9O1xuICBfaW5uZXJXaWR0aDogbnVtYmVyO1xuICBfb2Zmc2V0WDogbnVtYmVyO1xuICBfY29sdW1uczogYW55W107XG4gIF9oZWFkZXJIZWlnaHQ6IHN0cmluZztcbiAgX3N0eWxlQnlHcm91cDogeyBbcHJvcDogc3RyaW5nXToge30gfSA9IHtcbiAgICBsZWZ0OiB7fSxcbiAgICBjZW50ZXI6IHt9LFxuICAgIHJpZ2h0OiB7fVxuICB9O1xuXG4gIHByaXZhdGUgZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICB9XG5cbiAgb25Mb25nUHJlc3NTdGFydCh7IGV2ZW50LCBtb2RlbCB9OiB7IGV2ZW50OiBhbnk7IG1vZGVsOiBhbnkgfSkge1xuICAgIG1vZGVsLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmRyYWdFdmVudFRhcmdldCA9IGV2ZW50O1xuICB9XG5cbiAgb25Mb25nUHJlc3NFbmQoeyBldmVudCwgbW9kZWwgfTogeyBldmVudDogYW55OyBtb2RlbDogYW55IH0pIHtcbiAgICB0aGlzLmRyYWdFdmVudFRhcmdldCA9IGV2ZW50O1xuXG4gICAgLy8gZGVsYXkgcmVzZXR0aW5nIHNvIHNvcnQgY2FuIGJlXG4gICAgLy8gcHJldmVudGVkIGlmIHdlIHdlcmUgZHJhZ2dpbmdcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGRhdGF0YWJsZSBjb21wb25lbnQgY3JlYXRlcyBjb3BpZXMgZnJvbSBjb2x1bW5zIG9uIHJlb3JkZXJcbiAgICAgIC8vIHNldCBkcmFnZ2luZyB0byBmYWxzZSBvbiBuZXcgb2JqZWN0c1xuICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5fY29sdW1ucy5maW5kKGMgPT4gYy4kJGlkID09PSBtb2RlbC4kJGlkKTtcbiAgICAgIGlmIChjb2x1bW4pIHtcbiAgICAgICAgY29sdW1uLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgNSk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoJylcbiAgZ2V0IGhlYWRlcldpZHRoKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFySCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5uZXJXaWR0aCArICdweCc7XG4gICAgfVxuXG4gICAgcmV0dXJuICcxMDAlJztcbiAgfVxuXG4gIHRyYWNrQnlHcm91cHMoaW5kZXg6IG51bWJlciwgY29sR3JvdXA6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGNvbEdyb3VwLnR5cGU7XG4gIH1cblxuICBjb2x1bW5UcmFja2luZ0ZuKGluZGV4OiBudW1iZXIsIGNvbHVtbjogYW55KTogYW55IHtcbiAgICByZXR1cm4gY29sdW1uLiQkaWQ7XG4gIH1cblxuICBvbkNvbHVtblJlc2l6ZWQod2lkdGg6IG51bWJlciwgY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUpOiB2b2lkIHtcbiAgICBpZiAod2lkdGggPD0gY29sdW1uLm1pbldpZHRoKSB7XG4gICAgICB3aWR0aCA9IGNvbHVtbi5taW5XaWR0aDtcbiAgICB9IGVsc2UgaWYgKHdpZHRoID49IGNvbHVtbi5tYXhXaWR0aCkge1xuICAgICAgd2lkdGggPSBjb2x1bW4ubWF4V2lkdGg7XG4gICAgfVxuXG4gICAgdGhpcy5yZXNpemUuZW1pdCh7XG4gICAgICBjb2x1bW4sXG4gICAgICBwcmV2VmFsdWU6IGNvbHVtbi53aWR0aCxcbiAgICAgIG5ld1ZhbHVlOiB3aWR0aFxuICAgIH0pO1xuICB9XG5cbiAgb25Db2x1bW5SZW9yZGVyZWQoeyBwcmV2SW5kZXgsIG5ld0luZGV4LCBtb2RlbCB9OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihuZXdJbmRleCk7XG4gICAgY29sdW1uLmlzVGFyZ2V0ID0gZmFsc2U7XG4gICAgY29sdW1uLnRhcmdldE1hcmtlckNvbnRleHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZW9yZGVyLmVtaXQoe1xuICAgICAgY29sdW1uOiBtb2RlbCxcbiAgICAgIHByZXZWYWx1ZTogcHJldkluZGV4LFxuICAgICAgbmV3VmFsdWU6IG5ld0luZGV4XG4gICAgfSk7XG4gIH1cblxuICBvblRhcmdldENoYW5nZWQoeyBwcmV2SW5kZXgsIG5ld0luZGV4LCBpbml0aWFsSW5kZXggfTogYW55KTogdm9pZCB7XG4gICAgaWYgKHByZXZJbmRleCB8fCBwcmV2SW5kZXggPT09IDApIHtcbiAgICAgIGNvbnN0IG9sZENvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKHByZXZJbmRleCk7XG4gICAgICBvbGRDb2x1bW4uaXNUYXJnZXQgPSBmYWxzZTtcbiAgICAgIG9sZENvbHVtbi50YXJnZXRNYXJrZXJDb250ZXh0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAobmV3SW5kZXggfHwgbmV3SW5kZXggPT09IDApIHtcbiAgICAgIGNvbnN0IG5ld0NvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKG5ld0luZGV4KTtcbiAgICAgIG5ld0NvbHVtbi5pc1RhcmdldCA9IHRydWU7XG5cbiAgICAgIGlmIChpbml0aWFsSW5kZXggIT09IG5ld0luZGV4KSB7XG4gICAgICAgIG5ld0NvbHVtbi50YXJnZXRNYXJrZXJDb250ZXh0ID0ge1xuICAgICAgICAgIGNsYXNzOiAndGFyZ2V0TWFya2VyICcuY29uY2F0KGluaXRpYWxJbmRleCA+IG5ld0luZGV4ID8gJ2RyYWdGcm9tUmlnaHQnIDogJ2RyYWdGcm9tTGVmdCcpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29sdW1uKGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgIGNvbnN0IGxlZnRDb2x1bW5Db3VudCA9IHRoaXMuX2NvbHVtbnNCeVBpblswXS5jb2x1bW5zLmxlbmd0aDtcbiAgICBpZiAoaW5kZXggPCBsZWZ0Q29sdW1uQ291bnQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zQnlQaW5bMF0uY29sdW1uc1tpbmRleF07XG4gICAgfVxuXG4gICAgY29uc3QgY2VudGVyQ29sdW1uQ291bnQgPSB0aGlzLl9jb2x1bW5zQnlQaW5bMV0uY29sdW1ucy5sZW5ndGg7XG4gICAgaWYgKGluZGV4IDwgbGVmdENvbHVtbkNvdW50ICsgY2VudGVyQ29sdW1uQ291bnQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zQnlQaW5bMV0uY29sdW1uc1tpbmRleCAtIGxlZnRDb2x1bW5Db3VudF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnNCeVBpblsyXS5jb2x1bW5zW2luZGV4IC0gbGVmdENvbHVtbkNvdW50IC0gY2VudGVyQ29sdW1uQ291bnRdO1xuICB9XG5cbiAgb25Tb3J0KHsgY29sdW1uLCBwcmV2VmFsdWUsIG5ld1ZhbHVlIH06IGFueSk6IHZvaWQge1xuICAgIC8vIGlmIHdlIGFyZSBkcmFnZ2luZyBkb24ndCBzb3J0IVxuICAgIGlmIChjb2x1bW4uZHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzb3J0cyA9IHRoaXMuY2FsY05ld1NvcnRzKGNvbHVtbiwgcHJldlZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgdGhpcy5zb3J0LmVtaXQoe1xuICAgICAgc29ydHMsXG4gICAgICBjb2x1bW4sXG4gICAgICBwcmV2VmFsdWUsXG4gICAgICBuZXdWYWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgY2FsY05ld1NvcnRzKGNvbHVtbjogYW55LCBwcmV2VmFsdWU6IG51bWJlciwgbmV3VmFsdWU6IG51bWJlcik6IGFueVtdIHtcbiAgICBsZXQgaWR4ID0gMDtcblxuICAgIGlmICghdGhpcy5zb3J0cykge1xuICAgICAgdGhpcy5zb3J0cyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHNvcnRzID0gdGhpcy5zb3J0cy5tYXAoKHMsIGkpID0+IHtcbiAgICAgIHMgPSB7IC4uLnMgfTtcbiAgICAgIGlmIChzLnByb3AgPT09IGNvbHVtbi5wcm9wKSB7XG4gICAgICAgIGlkeCA9IGk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcztcbiAgICB9KTtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzb3J0cy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9IGVsc2UgaWYgKHByZXZWYWx1ZSkge1xuICAgICAgc29ydHNbaWR4XS5kaXIgPSBuZXdWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc29ydFR5cGUgPT09IFNvcnRUeXBlLnNpbmdsZSkge1xuICAgICAgICBzb3J0cy5zcGxpY2UoMCwgdGhpcy5zb3J0cy5sZW5ndGgpO1xuICAgICAgfVxuXG4gICAgICBzb3J0cy5wdXNoKHsgZGlyOiBuZXdWYWx1ZSwgcHJvcDogY29sdW1uLnByb3AgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvcnRzO1xuICB9XG5cbiAgc2V0U3R5bGVzQnlHcm91cCgpIHtcbiAgICB0aGlzLl9zdHlsZUJ5R3JvdXAubGVmdCA9IHRoaXMuY2FsY1N0eWxlc0J5R3JvdXAoJ2xlZnQnKTtcbiAgICB0aGlzLl9zdHlsZUJ5R3JvdXAuY2VudGVyID0gdGhpcy5jYWxjU3R5bGVzQnlHcm91cCgnY2VudGVyJyk7XG4gICAgdGhpcy5fc3R5bGVCeUdyb3VwLnJpZ2h0ID0gdGhpcy5jYWxjU3R5bGVzQnlHcm91cCgncmlnaHQnKTtcbiAgICBpZiAoIXRoaXMuZGVzdHJveWVkKSB7XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBjYWxjU3R5bGVzQnlHcm91cChncm91cDogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCB3aWR0aHMgPSB0aGlzLl9jb2x1bW5Hcm91cFdpZHRocztcbiAgICBjb25zdCBvZmZzZXRYID0gdGhpcy5vZmZzZXRYO1xuXG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgd2lkdGg6IGAke3dpZHRoc1tncm91cF19cHhgXG4gICAgfTtcblxuICAgIGlmIChncm91cCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHRyYW5zbGF0ZVhZKHN0eWxlcywgb2Zmc2V0WCAqIC0xLCAwKTtcbiAgICB9IGVsc2UgaWYgKGdyb3VwID09PSAncmlnaHQnKSB7XG4gICAgICBjb25zdCB0b3RhbERpZmYgPSB3aWR0aHMudG90YWwgLSB0aGlzLmlubmVyV2lkdGg7XG4gICAgICBjb25zdCBvZmZzZXQgPSB0b3RhbERpZmYgKiAtMTtcbiAgICAgIHRyYW5zbGF0ZVhZKHN0eWxlcywgb2Zmc2V0LCAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG59XG4iXX0=