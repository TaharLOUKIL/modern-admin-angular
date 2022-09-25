/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, HostBinding, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { columnsByPin, columnGroupWidths, columnsByPinArr } from '../../utils/column';
import { SortType } from '../../types/sort.type';
import { SelectionType } from '../../types/selection.type';
import { translateXY } from '../../utils/translate';
export class DataTableHeaderComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
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
    /**
     * @param {?} val
     * @return {?}
     */
    set innerWidth(val) {
        this._innerWidth = val;
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this._columns) {
                /** @type {?} */
                const colByPin = columnsByPin(this._columns);
                this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
                this.setStylesByGroup();
            }
        }));
    }
    /**
     * @return {?}
     */
    get innerWidth() {
        return this._innerWidth;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set headerHeight(val) {
        if (val !== 'auto') {
            this._headerHeight = `${val}px`;
        }
        else {
            this._headerHeight = val;
        }
    }
    /**
     * @return {?}
     */
    get headerHeight() {
        return this._headerHeight;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set columns(val) {
        this._columns = val;
        /** @type {?} */
        const colsByPin = columnsByPin(val);
        this._columnsByPin = columnsByPinArr(val);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._columnGroupWidths = columnGroupWidths(colsByPin, val);
            this.setStylesByGroup();
        }));
    }
    /**
     * @return {?}
     */
    get columns() {
        return this._columns;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set offsetX(val) {
        this._offsetX = val;
        this.setStylesByGroup();
    }
    /**
     * @return {?}
     */
    get offsetX() {
        return this._offsetX;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed = true;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onLongPressStart({ event, model }) {
        model.dragging = true;
        this.dragEventTarget = event;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onLongPressEnd({ event, model }) {
        this.dragEventTarget = event;
        // delay resetting so sort can be
        // prevented if we were dragging
        setTimeout((/**
         * @return {?}
         */
        () => {
            // datatable component creates copies from columns on reorder
            // set dragging to false on new objects
            /** @type {?} */
            const column = this._columns.find((/**
             * @param {?} c
             * @return {?}
             */
            c => c.$$id === model.$$id));
            if (column) {
                column.dragging = false;
            }
        }), 5);
    }
    /**
     * @return {?}
     */
    get headerWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        return '100%';
    }
    /**
     * @param {?} index
     * @param {?} colGroup
     * @return {?}
     */
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    /**
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    /**
     * @param {?} width
     * @param {?} column
     * @return {?}
     */
    onColumnResized(width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        this.resize.emit({
            column,
            prevValue: column.width,
            newValue: width
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onColumnReordered({ prevIndex, newIndex, model }) {
        /** @type {?} */
        const column = this.getColumn(newIndex);
        column.isTarget = false;
        column.targetMarkerContext = undefined;
        this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
        });
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onTargetChanged({ prevIndex, newIndex, initialIndex }) {
        if (prevIndex || prevIndex === 0) {
            /** @type {?} */
            const oldColumn = this.getColumn(prevIndex);
            oldColumn.isTarget = false;
            oldColumn.targetMarkerContext = undefined;
        }
        if (newIndex || newIndex === 0) {
            /** @type {?} */
            const newColumn = this.getColumn(newIndex);
            newColumn.isTarget = true;
            if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = {
                    class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                };
            }
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getColumn(index) {
        /** @type {?} */
        const leftColumnCount = this._columnsByPin[0].columns.length;
        if (index < leftColumnCount) {
            return this._columnsByPin[0].columns[index];
        }
        /** @type {?} */
        const centerColumnCount = this._columnsByPin[1].columns.length;
        if (index < leftColumnCount + centerColumnCount) {
            return this._columnsByPin[1].columns[index - leftColumnCount];
        }
        return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    onSort({ column, prevValue, newValue }) {
        // if we are dragging don't sort!
        if (column.dragging) {
            return;
        }
        /** @type {?} */
        const sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts,
            column,
            prevValue,
            newValue
        });
    }
    /**
     * @param {?} column
     * @param {?} prevValue
     * @param {?} newValue
     * @return {?}
     */
    calcNewSorts(column, prevValue, newValue) {
        /** @type {?} */
        let idx = 0;
        if (!this.sorts) {
            this.sorts = [];
        }
        /** @type {?} */
        const sorts = this.sorts.map((/**
         * @param {?} s
         * @param {?} i
         * @return {?}
         */
        (s, i) => {
            s = Object.assign({}, s);
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
    }
    /**
     * @return {?}
     */
    setStylesByGroup() {
        this._styleByGroup.left = this.calcStylesByGroup('left');
        this._styleByGroup.center = this.calcStylesByGroup('center');
        this._styleByGroup.right = this.calcStylesByGroup('right');
        if (!this.destroyed) {
            this.cd.detectChanges();
        }
    }
    /**
     * @param {?} group
     * @return {?}
     */
    calcStylesByGroup(group) {
        /** @type {?} */
        const widths = this._columnGroupWidths;
        /** @type {?} */
        const offsetX = this.offsetX;
        /** @type {?} */
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'center') {
            translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            /** @type {?} */
            const totalDiff = widths.total - this.innerWidth;
            /** @type {?} */
            const offset = totalDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
}
DataTableHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'datatable-header',
                template: `
    <div
      orderable
      (reorder)="onColumnReordered($event)"
      (targetChanged)="onTargetChanged($event)"
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-header-inner"
    >
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]"
      >
        <datatable-header-cell
          *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          long-press
          [pressModel]="column"
          [pressEnabled]="reorderable && column.draggable"
          (longPressStart)="onLongPressStart($event)"
          (longPressEnd)="onLongPressEnd($event)"
          draggable
          [dragX]="reorderable && column.draggable && column.dragging"
          [dragY]="false"
          [dragModel]="column"
          [dragEventTarget]="dragEventTarget"
          [headerHeight]="headerHeight"
          [isTarget]="column.isTarget"
          [targetMarkerTemplate]="targetMarkerTemplate"
          [targetMarkerContext]="column.targetMarkerContext"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [selectionType]="selectionType"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          [allRowsSelected]="allRowsSelected"
          (sort)="onSort($event)"
          (select)="select.emit($event)"
          (columnContextmenu)="columnContextmenu.emit($event)"
        >
        </datatable-header-cell>
      </div>
    </div>
  `,
                host: {
                    class: 'datatable-header'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DataTableHeaderComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWixLQUFLLEVBQ0wsV0FBVyxFQUNYLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDeEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTNELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQXdEcEQsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQTRGbkMsWUFBb0IsRUFBcUI7UUFBckIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUF0Qi9CLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksQ0FBcUMsS0FBSyxDQUFDLENBQUM7UUFHMUYsdUJBQWtCLEdBQVE7WUFDeEIsS0FBSyxFQUFFLEdBQUc7U0FDWCxDQUFDO1FBS0Ysa0JBQWEsR0FBMkI7WUFDdEMsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtZQUNWLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQztRQUVNLGNBQVMsR0FBRyxLQUFLLENB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OztJQUN0QixpREFJRTs7Ozs7SUFFRiw2Q0FBMEI7Ozs7O0lBRWQsc0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tICcuLi8uLi9ldmVudHMnO1xuaW1wb3J0IHsgY29sdW1uc0J5UGluLCBjb2x1bW5Hcm91cFdpZHRocywgY29sdW1uc0J5UGluQXJyIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29sdW1uJztcbmltcG9ydCB7IFNvcnRUeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvc29ydC50eXBlJztcbmltcG9ydCB7IFNlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi90eXBlcy9zZWxlY3Rpb24udHlwZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5EaXJlY3RpdmUgfSBmcm9tICcuLi9jb2x1bW5zL2NvbHVtbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgdHJhbnNsYXRlWFkgfSBmcm9tICcuLi8uLi91dGlscy90cmFuc2xhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhdGFibGUtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBvcmRlcmFibGVcbiAgICAgIChyZW9yZGVyKT1cIm9uQ29sdW1uUmVvcmRlcmVkKCRldmVudClcIlxuICAgICAgKHRhcmdldENoYW5nZWQpPVwib25UYXJnZXRDaGFuZ2VkKCRldmVudClcIlxuICAgICAgW3N0eWxlLndpZHRoLnB4XT1cIl9jb2x1bW5Hcm91cFdpZHRocy50b3RhbFwiXG4gICAgICBjbGFzcz1cImRhdGF0YWJsZS1oZWFkZXItaW5uZXJcIlxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nRm9yPVwibGV0IGNvbEdyb3VwIG9mIF9jb2x1bW5zQnlQaW47IHRyYWNrQnk6IHRyYWNrQnlHcm91cHNcIlxuICAgICAgICBbY2xhc3NdPVwiJ2RhdGF0YWJsZS1yb3ctJyArIGNvbEdyb3VwLnR5cGVcIlxuICAgICAgICBbbmdTdHlsZV09XCJfc3R5bGVCeUdyb3VwW2NvbEdyb3VwLnR5cGVdXCJcbiAgICAgID5cbiAgICAgICAgPGRhdGF0YWJsZS1oZWFkZXItY2VsbFxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sR3JvdXAuY29sdW1uczsgdHJhY2tCeTogY29sdW1uVHJhY2tpbmdGblwiXG4gICAgICAgICAgcmVzaXplYWJsZVxuICAgICAgICAgIFtyZXNpemVFbmFibGVkXT1cImNvbHVtbi5yZXNpemVhYmxlXCJcbiAgICAgICAgICAocmVzaXplKT1cIm9uQ29sdW1uUmVzaXplZCgkZXZlbnQsIGNvbHVtbilcIlxuICAgICAgICAgIGxvbmctcHJlc3NcbiAgICAgICAgICBbcHJlc3NNb2RlbF09XCJjb2x1bW5cIlxuICAgICAgICAgIFtwcmVzc0VuYWJsZWRdPVwicmVvcmRlcmFibGUgJiYgY29sdW1uLmRyYWdnYWJsZVwiXG4gICAgICAgICAgKGxvbmdQcmVzc1N0YXJ0KT1cIm9uTG9uZ1ByZXNzU3RhcnQoJGV2ZW50KVwiXG4gICAgICAgICAgKGxvbmdQcmVzc0VuZCk9XCJvbkxvbmdQcmVzc0VuZCgkZXZlbnQpXCJcbiAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICBbZHJhZ1hdPVwicmVvcmRlcmFibGUgJiYgY29sdW1uLmRyYWdnYWJsZSAmJiBjb2x1bW4uZHJhZ2dpbmdcIlxuICAgICAgICAgIFtkcmFnWV09XCJmYWxzZVwiXG4gICAgICAgICAgW2RyYWdNb2RlbF09XCJjb2x1bW5cIlxuICAgICAgICAgIFtkcmFnRXZlbnRUYXJnZXRdPVwiZHJhZ0V2ZW50VGFyZ2V0XCJcbiAgICAgICAgICBbaGVhZGVySGVpZ2h0XT1cImhlYWRlckhlaWdodFwiXG4gICAgICAgICAgW2lzVGFyZ2V0XT1cImNvbHVtbi5pc1RhcmdldFwiXG4gICAgICAgICAgW3RhcmdldE1hcmtlclRlbXBsYXRlXT1cInRhcmdldE1hcmtlclRlbXBsYXRlXCJcbiAgICAgICAgICBbdGFyZ2V0TWFya2VyQ29udGV4dF09XCJjb2x1bW4udGFyZ2V0TWFya2VyQ29udGV4dFwiXG4gICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgIFtzb3J0VHlwZV09XCJzb3J0VHlwZVwiXG4gICAgICAgICAgW3NvcnRzXT1cInNvcnRzXCJcbiAgICAgICAgICBbc2VsZWN0aW9uVHlwZV09XCJzZWxlY3Rpb25UeXBlXCJcbiAgICAgICAgICBbc29ydEFzY2VuZGluZ0ljb25dPVwic29ydEFzY2VuZGluZ0ljb25cIlxuICAgICAgICAgIFtzb3J0RGVzY2VuZGluZ0ljb25dPVwic29ydERlc2NlbmRpbmdJY29uXCJcbiAgICAgICAgICBbYWxsUm93c1NlbGVjdGVkXT1cImFsbFJvd3NTZWxlY3RlZFwiXG4gICAgICAgICAgKHNvcnQpPVwib25Tb3J0KCRldmVudClcIlxuICAgICAgICAgIChzZWxlY3QpPVwic2VsZWN0LmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgKGNvbHVtbkNvbnRleHRtZW51KT1cImNvbHVtbkNvbnRleHRtZW51LmVtaXQoJGV2ZW50KVwiXG4gICAgICAgID5cbiAgICAgICAgPC9kYXRhdGFibGUtaGVhZGVyLWNlbGw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZGF0YXRhYmxlLWhlYWRlcidcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCkgc29ydEFzY2VuZGluZ0ljb246IGFueTtcbiAgQElucHV0KCkgc29ydERlc2NlbmRpbmdJY29uOiBhbnk7XG4gIEBJbnB1dCgpIHNjcm9sbGJhckg6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRlYWxzV2l0aEdyb3VwOiBib29sZWFuO1xuICBASW5wdXQoKSB0YXJnZXRNYXJrZXJUZW1wbGF0ZTogYW55O1xuXG4gIHRhcmdldE1hcmtlckNvbnRleHQ6IGFueTtcblxuICBASW5wdXQoKSBzZXQgaW5uZXJXaWR0aCh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX2lubmVyV2lkdGggPSB2YWw7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29sdW1ucykge1xuICAgICAgICBjb25zdCBjb2xCeVBpbiA9IGNvbHVtbnNCeVBpbih0aGlzLl9jb2x1bW5zKTtcbiAgICAgICAgdGhpcy5fY29sdW1uR3JvdXBXaWR0aHMgPSBjb2x1bW5Hcm91cFdpZHRocyhjb2xCeVBpbiwgdGhpcy5fY29sdW1ucyk7XG4gICAgICAgIHRoaXMuc2V0U3R5bGVzQnlHcm91cCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGlubmVyV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faW5uZXJXaWR0aDtcbiAgfVxuXG4gIEBJbnB1dCgpIHNvcnRzOiBhbnlbXTtcbiAgQElucHV0KCkgc29ydFR5cGU6IFNvcnRUeXBlO1xuICBASW5wdXQoKSBhbGxSb3dzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGU7XG4gIEBJbnB1dCgpIHJlb3JkZXJhYmxlOiBib29sZWFuO1xuXG4gIGRyYWdFdmVudFRhcmdldDogYW55O1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0JylcbiAgQElucHV0KClcbiAgc2V0IGhlYWRlckhlaWdodCh2YWw6IGFueSkge1xuICAgIGlmICh2YWwgIT09ICdhdXRvJykge1xuICAgICAgdGhpcy5faGVhZGVySGVpZ2h0ID0gYCR7dmFsfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGVhZGVySGVpZ2h0ID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGdldCBoZWFkZXJIZWlnaHQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5faGVhZGVySGVpZ2h0O1xuICB9XG5cbiAgQElucHV0KCkgc2V0IGNvbHVtbnModmFsOiBhbnlbXSkge1xuICAgIHRoaXMuX2NvbHVtbnMgPSB2YWw7XG5cbiAgICBjb25zdCBjb2xzQnlQaW4gPSBjb2x1bW5zQnlQaW4odmFsKTtcbiAgICB0aGlzLl9jb2x1bW5zQnlQaW4gPSBjb2x1bW5zQnlQaW5BcnIodmFsKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2NvbHVtbkdyb3VwV2lkdGhzID0gY29sdW1uR3JvdXBXaWR0aHMoY29sc0J5UGluLCB2YWwpO1xuICAgICAgdGhpcy5zZXRTdHlsZXNCeUdyb3VwKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgY29sdW1ucygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgb2Zmc2V0WCh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX29mZnNldFggPSB2YWw7XG4gICAgdGhpcy5zZXRTdHlsZXNCeUdyb3VwKCk7XG4gIH1cbiAgZ2V0IG9mZnNldFgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFg7XG4gIH1cblxuICBAT3V0cHV0KCkgc29ydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZW9yZGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlc2l6ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgY29sdW1uQ29udGV4dG1lbnUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZXZlbnQ6IE1vdXNlRXZlbnQ7IGNvbHVtbjogYW55IH0+KGZhbHNlKTtcblxuICBfY29sdW1uc0J5UGluOiBhbnk7XG4gIF9jb2x1bW5Hcm91cFdpZHRoczogYW55ID0ge1xuICAgIHRvdGFsOiAxMDBcbiAgfTtcbiAgX2lubmVyV2lkdGg6IG51bWJlcjtcbiAgX29mZnNldFg6IG51bWJlcjtcbiAgX2NvbHVtbnM6IGFueVtdO1xuICBfaGVhZGVySGVpZ2h0OiBzdHJpbmc7XG4gIF9zdHlsZUJ5R3JvdXA6IHsgW3Byb3A6IHN0cmluZ106IHt9IH0gPSB7XG4gICAgbGVmdDoge30sXG4gICAgY2VudGVyOiB7fSxcbiAgICByaWdodDoge31cbiAgfTtcblxuICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIG9uTG9uZ1ByZXNzU3RhcnQoeyBldmVudCwgbW9kZWwgfTogeyBldmVudDogYW55OyBtb2RlbDogYW55IH0pIHtcbiAgICBtb2RlbC5kcmFnZ2luZyA9IHRydWU7XG4gICAgdGhpcy5kcmFnRXZlbnRUYXJnZXQgPSBldmVudDtcbiAgfVxuXG4gIG9uTG9uZ1ByZXNzRW5kKHsgZXZlbnQsIG1vZGVsIH06IHsgZXZlbnQ6IGFueTsgbW9kZWw6IGFueSB9KSB7XG4gICAgdGhpcy5kcmFnRXZlbnRUYXJnZXQgPSBldmVudDtcblxuICAgIC8vIGRlbGF5IHJlc2V0dGluZyBzbyBzb3J0IGNhbiBiZVxuICAgIC8vIHByZXZlbnRlZCBpZiB3ZSB3ZXJlIGRyYWdnaW5nXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBkYXRhdGFibGUgY29tcG9uZW50IGNyZWF0ZXMgY29waWVzIGZyb20gY29sdW1ucyBvbiByZW9yZGVyXG4gICAgICAvLyBzZXQgZHJhZ2dpbmcgdG8gZmFsc2Ugb24gbmV3IG9iamVjdHNcbiAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuX2NvbHVtbnMuZmluZChjID0+IGMuJCRpZCA9PT0gbW9kZWwuJCRpZCk7XG4gICAgICBpZiAoY29sdW1uKSB7XG4gICAgICAgIGNvbHVtbi5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIDUpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXG4gIGdldCBoZWFkZXJXaWR0aCgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNjcm9sbGJhckgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlubmVyV2lkdGggKyAncHgnO1xuICAgIH1cblxuICAgIHJldHVybiAnMTAwJSc7XG4gIH1cblxuICB0cmFja0J5R3JvdXBzKGluZGV4OiBudW1iZXIsIGNvbEdyb3VwOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBjb2xHcm91cC50eXBlO1xuICB9XG5cbiAgY29sdW1uVHJhY2tpbmdGbihpbmRleDogbnVtYmVyLCBjb2x1bW46IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGNvbHVtbi4kJGlkO1xuICB9XG5cbiAgb25Db2x1bW5SZXNpemVkKHdpZHRoOiBudW1iZXIsIGNvbHVtbjogRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgaWYgKHdpZHRoIDw9IGNvbHVtbi5taW5XaWR0aCkge1xuICAgICAgd2lkdGggPSBjb2x1bW4ubWluV2lkdGg7XG4gICAgfSBlbHNlIGlmICh3aWR0aCA+PSBjb2x1bW4ubWF4V2lkdGgpIHtcbiAgICAgIHdpZHRoID0gY29sdW1uLm1heFdpZHRoO1xuICAgIH1cblxuICAgIHRoaXMucmVzaXplLmVtaXQoe1xuICAgICAgY29sdW1uLFxuICAgICAgcHJldlZhbHVlOiBjb2x1bW4ud2lkdGgsXG4gICAgICBuZXdWYWx1ZTogd2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ29sdW1uUmVvcmRlcmVkKHsgcHJldkluZGV4LCBuZXdJbmRleCwgbW9kZWwgfTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgY29sdW1uID0gdGhpcy5nZXRDb2x1bW4obmV3SW5kZXgpO1xuICAgIGNvbHVtbi5pc1RhcmdldCA9IGZhbHNlO1xuICAgIGNvbHVtbi50YXJnZXRNYXJrZXJDb250ZXh0ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVvcmRlci5lbWl0KHtcbiAgICAgIGNvbHVtbjogbW9kZWwsXG4gICAgICBwcmV2VmFsdWU6IHByZXZJbmRleCxcbiAgICAgIG5ld1ZhbHVlOiBuZXdJbmRleFxuICAgIH0pO1xuICB9XG5cbiAgb25UYXJnZXRDaGFuZ2VkKHsgcHJldkluZGV4LCBuZXdJbmRleCwgaW5pdGlhbEluZGV4IH06IGFueSk6IHZvaWQge1xuICAgIGlmIChwcmV2SW5kZXggfHwgcHJldkluZGV4ID09PSAwKSB7XG4gICAgICBjb25zdCBvbGRDb2x1bW4gPSB0aGlzLmdldENvbHVtbihwcmV2SW5kZXgpO1xuICAgICAgb2xkQ29sdW1uLmlzVGFyZ2V0ID0gZmFsc2U7XG4gICAgICBvbGRDb2x1bW4udGFyZ2V0TWFya2VyQ29udGV4dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKG5ld0luZGV4IHx8IG5ld0luZGV4ID09PSAwKSB7XG4gICAgICBjb25zdCBuZXdDb2x1bW4gPSB0aGlzLmdldENvbHVtbihuZXdJbmRleCk7XG4gICAgICBuZXdDb2x1bW4uaXNUYXJnZXQgPSB0cnVlO1xuXG4gICAgICBpZiAoaW5pdGlhbEluZGV4ICE9PSBuZXdJbmRleCkge1xuICAgICAgICBuZXdDb2x1bW4udGFyZ2V0TWFya2VyQ29udGV4dCA9IHtcbiAgICAgICAgICBjbGFzczogJ3RhcmdldE1hcmtlciAnLmNvbmNhdChpbml0aWFsSW5kZXggPiBuZXdJbmRleCA/ICdkcmFnRnJvbVJpZ2h0JyA6ICdkcmFnRnJvbUxlZnQnKVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldENvbHVtbihpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICBjb25zdCBsZWZ0Q29sdW1uQ291bnQgPSB0aGlzLl9jb2x1bW5zQnlQaW5bMF0uY29sdW1ucy5sZW5ndGg7XG4gICAgaWYgKGluZGV4IDwgbGVmdENvbHVtbkNvdW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sdW1uc0J5UGluWzBdLmNvbHVtbnNbaW5kZXhdO1xuICAgIH1cblxuICAgIGNvbnN0IGNlbnRlckNvbHVtbkNvdW50ID0gdGhpcy5fY29sdW1uc0J5UGluWzFdLmNvbHVtbnMubGVuZ3RoO1xuICAgIGlmIChpbmRleCA8IGxlZnRDb2x1bW5Db3VudCArIGNlbnRlckNvbHVtbkNvdW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29sdW1uc0J5UGluWzFdLmNvbHVtbnNbaW5kZXggLSBsZWZ0Q29sdW1uQ291bnRdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zQnlQaW5bMl0uY29sdW1uc1tpbmRleCAtIGxlZnRDb2x1bW5Db3VudCAtIGNlbnRlckNvbHVtbkNvdW50XTtcbiAgfVxuXG4gIG9uU29ydCh7IGNvbHVtbiwgcHJldlZhbHVlLCBuZXdWYWx1ZSB9OiBhbnkpOiB2b2lkIHtcbiAgICAvLyBpZiB3ZSBhcmUgZHJhZ2dpbmcgZG9uJ3Qgc29ydCFcbiAgICBpZiAoY29sdW1uLmRyYWdnaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc29ydHMgPSB0aGlzLmNhbGNOZXdTb3J0cyhjb2x1bW4sIHByZXZWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIHRoaXMuc29ydC5lbWl0KHtcbiAgICAgIHNvcnRzLFxuICAgICAgY29sdW1uLFxuICAgICAgcHJldlZhbHVlLFxuICAgICAgbmV3VmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGNOZXdTb3J0cyhjb2x1bW46IGFueSwgcHJldlZhbHVlOiBudW1iZXIsIG5ld1ZhbHVlOiBudW1iZXIpOiBhbnlbXSB7XG4gICAgbGV0IGlkeCA9IDA7XG5cbiAgICBpZiAoIXRoaXMuc29ydHMpIHtcbiAgICAgIHRoaXMuc29ydHMgPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBzb3J0cyA9IHRoaXMuc29ydHMubWFwKChzLCBpKSA9PiB7XG4gICAgICBzID0geyAuLi5zIH07XG4gICAgICBpZiAocy5wcm9wID09PSBjb2x1bW4ucHJvcCkge1xuICAgICAgICBpZHggPSBpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHM7XG4gICAgfSk7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc29ydHMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfSBlbHNlIGlmIChwcmV2VmFsdWUpIHtcbiAgICAgIHNvcnRzW2lkeF0uZGlyID0gbmV3VmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNvcnRUeXBlID09PSBTb3J0VHlwZS5zaW5nbGUpIHtcbiAgICAgICAgc29ydHMuc3BsaWNlKDAsIHRoaXMuc29ydHMubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgc29ydHMucHVzaCh7IGRpcjogbmV3VmFsdWUsIHByb3A6IGNvbHVtbi5wcm9wIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzb3J0cztcbiAgfVxuXG4gIHNldFN0eWxlc0J5R3JvdXAoKSB7XG4gICAgdGhpcy5fc3R5bGVCeUdyb3VwLmxlZnQgPSB0aGlzLmNhbGNTdHlsZXNCeUdyb3VwKCdsZWZ0Jyk7XG4gICAgdGhpcy5fc3R5bGVCeUdyb3VwLmNlbnRlciA9IHRoaXMuY2FsY1N0eWxlc0J5R3JvdXAoJ2NlbnRlcicpO1xuICAgIHRoaXMuX3N0eWxlQnlHcm91cC5yaWdodCA9IHRoaXMuY2FsY1N0eWxlc0J5R3JvdXAoJ3JpZ2h0Jyk7XG4gICAgaWYgKCF0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgY2FsY1N0eWxlc0J5R3JvdXAoZ3JvdXA6IHN0cmluZyk6IGFueSB7XG4gICAgY29uc3Qgd2lkdGhzID0gdGhpcy5fY29sdW1uR3JvdXBXaWR0aHM7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IHRoaXMub2Zmc2V0WDtcblxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIHdpZHRoOiBgJHt3aWR0aHNbZ3JvdXBdfXB4YFxuICAgIH07XG5cbiAgICBpZiAoZ3JvdXAgPT09ICdjZW50ZXInKSB7XG4gICAgICB0cmFuc2xhdGVYWShzdHlsZXMsIG9mZnNldFggKiAtMSwgMCk7XG4gICAgfSBlbHNlIGlmIChncm91cCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgY29uc3QgdG90YWxEaWZmID0gd2lkdGhzLnRvdGFsIC0gdGhpcy5pbm5lcldpZHRoO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gdG90YWxEaWZmICogLTE7XG4gICAgICB0cmFuc2xhdGVYWShzdHlsZXMsIG9mZnNldCwgMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxufVxuIl19