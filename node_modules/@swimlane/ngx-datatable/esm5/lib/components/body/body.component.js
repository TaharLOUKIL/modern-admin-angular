/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter, Input, HostBinding, ChangeDetectorRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ScrollerComponent } from './scroller.component';
import { SelectionType } from '../../types/selection.type';
import { columnsByPin, columnGroupWidths } from '../../utils/column';
import { RowHeightCache } from '../../utils/row-height-cache';
import { translateXY } from '../../utils/translate';
var DataTableBodyComponent = /** @class */ (function () {
    /**
     * Creates an instance of DataTableBodyComponent.
     */
    function DataTableBodyComponent(cd) {
        var _this = this;
        this.cd = cd;
        this.selected = [];
        this.scroll = new EventEmitter();
        this.page = new EventEmitter();
        this.activate = new EventEmitter();
        this.select = new EventEmitter();
        this.detailToggle = new EventEmitter();
        this.rowContextmenu = new EventEmitter(false);
        this.treeAction = new EventEmitter();
        this.rowHeightsCache = new RowHeightCache();
        this.temp = [];
        this.offsetY = 0;
        this.indexes = {};
        this.rowIndexes = new Map();
        this.rowExpansions = [];
        /**
         * Get the height of the detail row.
         */
        this.getDetailRowHeight = (/**
         * @param {?=} row
         * @param {?=} index
         * @return {?}
         */
        function (row, index) {
            if (!_this.rowDetail) {
                return 0;
            }
            /** @type {?} */
            var rowHeight = _this.rowDetail.rowHeight;
            return typeof rowHeight === 'function' ? rowHeight(row, index) : ((/** @type {?} */ (rowHeight)));
        });
        // declare fn here so we can get access to the `this` property
        this.rowTrackingFn = (/**
         * @param {?} index
         * @param {?} row
         * @return {?}
         */
        function (index, row) {
            /** @type {?} */
            var idx = _this.getRowIndex(row);
            if (_this.trackByProp) {
                return row[_this.trackByProp];
            }
            else {
                return idx;
            }
        });
    }
    Object.defineProperty(DataTableBodyComponent.prototype, "pageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSize;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._pageSize = val;
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "rows", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rows;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._rows = val;
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "columns", {
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
            this._columns = val;
            /** @type {?} */
            var colsByPin = columnsByPin(val);
            this.columnGroupWidths = columnGroupWidths(colsByPin, val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "offset", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offset;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._offset = val;
            if (!this.scrollbarV || (this.scrollbarV && !this.virtualization))
                this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "rowCount", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rowCount;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._rowCount = val;
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "bodyWidth", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.scrollbarH) {
                return this.innerWidth + 'px';
            }
            else {
                return '100%';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "bodyHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bodyHeight;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.scrollbarV) {
                this._bodyHeight = val + 'px';
            }
            else {
                this._bodyHeight = 'auto';
            }
            this.recalcLayout();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "selectEnabled", {
        /**
         * Returns if selection is enabled.
         */
        get: /**
         * Returns if selection is enabled.
         * @return {?}
         */
        function () {
            return !!this.selectionType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyComponent.prototype, "scrollHeight", {
        /**
         * Property that would calculate the height of scroll bar
         * based on the row heights cache for virtual scroll and virtualization. Other scenarios
         * calculate scroll height automatically (as height will be undefined).
         */
        get: /**
         * Property that would calculate the height of scroll bar
         * based on the row heights cache for virtual scroll and virtualization. Other scenarios
         * calculate scroll height automatically (as height will be undefined).
         * @return {?}
         */
        function () {
            if (this.scrollbarV && this.virtualization && this.rowCount) {
                return this.rowHeightsCache.query(this.rowCount - 1);
            }
            // avoid TS7030: Not all code paths return a value.
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Called after the constructor, initializing input properties
     */
    /**
     * Called after the constructor, initializing input properties
     * @return {?}
     */
    DataTableBodyComponent.prototype.ngOnInit = /**
     * Called after the constructor, initializing input properties
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.rowDetail) {
            this.listener = this.rowDetail.toggle.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var type = _a.type, value = _a.value;
                if (type === 'row') {
                    _this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    _this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                _this.updateIndexes();
                _this.updateRows();
                _this.cd.markForCheck();
            }));
        }
        if (this.groupHeader) {
            this.listener = this.groupHeader.toggle.subscribe((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var type = _a.type, value = _a.value;
                if (type === 'group') {
                    _this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    _this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                _this.updateIndexes();
                _this.updateRows();
                _this.cd.markForCheck();
            }));
        }
    };
    /**
     * Called once, before the instance is destroyed.
     */
    /**
     * Called once, before the instance is destroyed.
     * @return {?}
     */
    DataTableBodyComponent.prototype.ngOnDestroy = /**
     * Called once, before the instance is destroyed.
     * @return {?}
     */
    function () {
        if (this.rowDetail || this.groupHeader) {
            this.listener.unsubscribe();
        }
    };
    /**
     * Updates the Y offset given a new offset.
     */
    /**
     * Updates the Y offset given a new offset.
     * @param {?=} offset
     * @return {?}
     */
    DataTableBodyComponent.prototype.updateOffsetY = /**
     * Updates the Y offset given a new offset.
     * @param {?=} offset
     * @return {?}
     */
    function (offset) {
        // scroller is missing on empty table
        if (!this.scroller) {
            return;
        }
        if (this.scrollbarV && this.virtualization && offset) {
            // First get the row Index that we need to move to.
            /** @type {?} */
            var rowIndex = this.pageSize * offset;
            offset = this.rowHeightsCache.query(rowIndex - 1);
        }
        else if (this.scrollbarV && !this.virtualization) {
            offset = 0;
        }
        this.scroller.setOffset(offset || 0);
    };
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     */
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     * @param {?} event
     * @return {?}
     */
    DataTableBodyComponent.prototype.onBodyScroll = /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var scrollYPos = event.scrollYPos;
        /** @type {?} */
        var scrollXPos = event.scrollXPos;
        // if scroll change, trigger update
        // this is mainly used for header cell positions
        if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
            this.scroll.emit({
                offsetY: scrollYPos,
                offsetX: scrollXPos
            });
        }
        this.offsetY = scrollYPos;
        this.offsetX = scrollXPos;
        this.updateIndexes();
        this.updatePage(event.direction);
        this.updateRows();
    };
    /**
     * Updates the page given a direction.
     */
    /**
     * Updates the page given a direction.
     * @param {?} direction
     * @return {?}
     */
    DataTableBodyComponent.prototype.updatePage = /**
     * Updates the page given a direction.
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        /** @type {?} */
        var offset = this.indexes.first / this.pageSize;
        if (direction === 'up') {
            offset = Math.ceil(offset);
        }
        else if (direction === 'down') {
            offset = Math.floor(offset);
        }
        if (direction !== undefined && !isNaN(offset)) {
            this.page.emit({ offset: offset });
        }
    };
    /**
     * Updates the rows in the view port
     */
    /**
     * Updates the rows in the view port
     * @return {?}
     */
    DataTableBodyComponent.prototype.updateRows = /**
     * Updates the rows in the view port
     * @return {?}
     */
    function () {
        var _a = this.indexes, first = _a.first, last = _a.last;
        /** @type {?} */
        var rowIndex = first;
        /** @type {?} */
        var idx = 0;
        /** @type {?} */
        var temp = [];
        this.rowIndexes.clear();
        // if grouprowsby has been specified treat row paging
        // parameters as group paging parameters ie if limit 10 has been
        // specified treat it as 10 groups rather than 10 rows
        if (this.groupedRows) {
            /** @type {?} */
            var maxRowsPerGroup = 3;
            // if there is only one group set the maximum number of
            // rows per group the same as the total number of rows
            if (this.groupedRows.length === 1) {
                maxRowsPerGroup = this.groupedRows[0].value.length;
            }
            while (rowIndex < last && rowIndex < this.groupedRows.length) {
                // Add the groups into this page
                /** @type {?} */
                var group = this.groupedRows[rowIndex];
                temp[idx] = group;
                idx++;
                // Group index in this context
                rowIndex++;
            }
        }
        else {
            while (rowIndex < last && rowIndex < this.rowCount) {
                /** @type {?} */
                var row = this.rows[rowIndex];
                if (row) {
                    this.rowIndexes.set(row, rowIndex);
                    temp[idx] = row;
                }
                idx++;
                rowIndex++;
            }
        }
        this.temp = temp;
    };
    /**
     * Get the row height
     */
    /**
     * Get the row height
     * @param {?} row
     * @return {?}
     */
    DataTableBodyComponent.prototype.getRowHeight = /**
     * Get the row height
     * @param {?} row
     * @return {?}
     */
    function (row) {
        // if its a function return it
        if (typeof this.rowHeight === 'function') {
            return this.rowHeight(row);
        }
        return (/** @type {?} */ (this.rowHeight));
    };
    /**
     * @param group the group with all rows
     */
    /**
     * @param {?} group the group with all rows
     * @return {?}
     */
    DataTableBodyComponent.prototype.getGroupHeight = /**
     * @param {?} group the group with all rows
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var rowHeight = 0;
        if (group.value) {
            for (var index = 0; index < group.value.length; index++) {
                rowHeight += this.getRowAndDetailHeight(group.value[index]);
            }
        }
        return rowHeight;
    };
    /**
     * Calculate row height based on the expanded state of the row.
     */
    /**
     * Calculate row height based on the expanded state of the row.
     * @param {?} row
     * @return {?}
     */
    DataTableBodyComponent.prototype.getRowAndDetailHeight = /**
     * Calculate row height based on the expanded state of the row.
     * @param {?} row
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var rowHeight = this.getRowHeight(row);
        /** @type {?} */
        var expanded = this.getRowExpanded(row);
        // Adding detail row height if its expanded.
        if (expanded) {
            rowHeight += this.getDetailRowHeight(row);
        }
        return rowHeight;
    };
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * @param rows the row that needs to be placed in the 2D space.
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * \@memberOf DataTableBodyComponent
     * @param {?} rows the row that needs to be placed in the 2D space.
     * @return {?} the CSS3 style to be applied
     *
     */
    DataTableBodyComponent.prototype.getRowsStyles = /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * \@memberOf DataTableBodyComponent
     * @param {?} rows the row that needs to be placed in the 2D space.
     * @return {?} the CSS3 style to be applied
     *
     */
    function (rows) {
        /** @type {?} */
        var styles = {};
        // only add styles for the group if there is a group
        if (this.groupedRows) {
            styles.width = this.columnGroupWidths.total;
        }
        if (this.scrollbarV && this.virtualization) {
            /** @type {?} */
            var idx = 0;
            if (this.groupedRows) {
                // Get the latest row rowindex in a group
                /** @type {?} */
                var row = rows[rows.length - 1];
                idx = row ? this.getRowIndex(row) : 0;
            }
            else {
                idx = this.getRowIndex(rows);
            }
            // const pos = idx * rowHeight;
            // The position of this row would be the sum of all row heights
            // until the previous row position.
            /** @type {?} */
            var pos = this.rowHeightsCache.query(idx - 1);
            translateXY(styles, 0, pos);
        }
        return styles;
    };
    /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * \@memberOf DataTableBodyComponent
     * @return {?} the CSS3 style to be applied
     *
     */
    DataTableBodyComponent.prototype.getBottomSummaryRowStyles = /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * \@memberOf DataTableBodyComponent
     * @return {?} the CSS3 style to be applied
     *
     */
    function () {
        if (!this.scrollbarV || !this.rows || !this.rows.length) {
            return null;
        }
        /** @type {?} */
        var styles = { position: 'absolute' };
        /** @type {?} */
        var pos = this.rowHeightsCache.query(this.rows.length - 1);
        translateXY(styles, 0, pos);
        return styles;
    };
    /**
     * Hides the loading indicator
     */
    /**
     * Hides the loading indicator
     * @return {?}
     */
    DataTableBodyComponent.prototype.hideIndicator = /**
     * Hides the loading indicator
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return (_this.loadingIndicator = false); }), 500);
    };
    /**
     * Updates the index of the rows in the viewport
     */
    /**
     * Updates the index of the rows in the viewport
     * @return {?}
     */
    DataTableBodyComponent.prototype.updateIndexes = /**
     * Updates the index of the rows in the viewport
     * @return {?}
     */
    function () {
        /** @type {?} */
        var first = 0;
        /** @type {?} */
        var last = 0;
        if (this.scrollbarV) {
            if (this.virtualization) {
                // Calculation of the first and last indexes will be based on where the
                // scrollY position would be at.  The last index would be the one
                // that shows up inside the view port the last.
                /** @type {?} */
                var height = parseInt(this.bodyHeight, 0);
                first = this.rowHeightsCache.getRowIndex(this.offsetY);
                last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
            }
            else {
                // If virtual rows are not needed
                // We render all in one go
                first = 0;
                last = this.rowCount;
            }
        }
        else {
            // The server is handling paging and will pass an array that begins with the
            // element at a specified offset.  first should always be 0 with external paging.
            if (!this.externalPaging) {
                first = Math.max(this.offset * this.pageSize, 0);
            }
            last = Math.min(first + this.pageSize, this.rowCount);
        }
        this.indexes = { first: first, last: last };
    };
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     */
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     * @return {?}
     */
    DataTableBodyComponent.prototype.refreshRowHeightCache = /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization)) {
            return;
        }
        // clear the previous row height cache if already present.
        // this is useful during sorts, filters where the state of the
        // rows array is changed.
        this.rowHeightsCache.clearCache();
        // Initialize the tree only if there are rows inside the tree.
        if (this.rows && this.rows.length) {
            /** @type {?} */
            var rowExpansions = new Set();
            try {
                for (var _b = tslib_1.__values(this.rows), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var row = _c.value;
                    if (this.getRowExpanded(row)) {
                        rowExpansions.add(row);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.rowHeightsCache.initCache({
                rows: this.rows,
                rowHeight: this.rowHeight,
                detailRowHeight: this.getDetailRowHeight,
                externalVirtual: this.scrollbarV && this.externalPaging,
                rowCount: this.rowCount,
                rowIndexes: this.rowIndexes,
                rowExpansions: rowExpansions
            });
        }
    };
    /**
     * Gets the index for the view port
     */
    /**
     * Gets the index for the view port
     * @return {?}
     */
    DataTableBodyComponent.prototype.getAdjustedViewPortIndex = /**
     * Gets the index for the view port
     * @return {?}
     */
    function () {
        // Capture the row index of the first row that is visible on the viewport.
        // If the scroll bar is just below the row which is highlighted then make that as the
        // first index.
        /** @type {?} */
        var viewPortFirstRowIndex = this.indexes.first;
        if (this.scrollbarV && this.virtualization) {
            /** @type {?} */
            var offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
            return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
        }
        return viewPortFirstRowIndex;
    };
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     */
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     * @param {?} row
     * @return {?}
     */
    DataTableBodyComponent.prototype.toggleRowExpansion = /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     * @param {?} row
     * @return {?}
     */
    function (row) {
        // Capture the row index of the first row that is visible on the viewport.
        /** @type {?} */
        var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        /** @type {?} */
        var rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
        /** @type {?} */
        var expanded = rowExpandedIdx > -1;
        // If the detailRowHeight is auto --> only in case of non-virtualized scroll
        if (this.scrollbarV && this.virtualization) {
            /** @type {?} */
            var detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1);
            // const idx = this.rowIndexes.get(row) || 0;
            /** @type {?} */
            var idx = this.getRowIndex(row);
            this.rowHeightsCache.update(idx, detailRowHeight);
        }
        // Update the toggled row and update thive nevere heights in the cache.
        if (expanded) {
            this.rowExpansions.splice(rowExpandedIdx, 1);
        }
        else {
            this.rowExpansions.push(row);
        }
        this.detailToggle.emit({
            rows: [row],
            currentIndex: viewPortFirstRowIndex
        });
    };
    /**
     * Expand/Collapse all the rows no matter what their state is.
     */
    /**
     * Expand/Collapse all the rows no matter what their state is.
     * @param {?} expanded
     * @return {?}
     */
    DataTableBodyComponent.prototype.toggleAllRows = /**
     * Expand/Collapse all the rows no matter what their state is.
     * @param {?} expanded
     * @return {?}
     */
    function (expanded) {
        var e_2, _a;
        // clear prev expansions
        this.rowExpansions = [];
        // Capture the row index of the first row that is visible on the viewport.
        /** @type {?} */
        var viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        if (expanded) {
            try {
                for (var _b = tslib_1.__values(this.rows), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var row = _c.value;
                    this.rowExpansions.push(row);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        if (this.scrollbarV) {
            // Refresh the full row heights cache since every row was affected.
            this.recalcLayout();
        }
        // Emit all rows that have been expanded.
        this.detailToggle.emit({
            rows: this.rows,
            currentIndex: viewPortFirstRowIndex
        });
    };
    /**
     * Recalculates the table
     */
    /**
     * Recalculates the table
     * @return {?}
     */
    DataTableBodyComponent.prototype.recalcLayout = /**
     * Recalculates the table
     * @return {?}
     */
    function () {
        this.refreshRowHeightCache();
        this.updateIndexes();
        this.updateRows();
    };
    /**
     * Tracks the column
     */
    /**
     * Tracks the column
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    DataTableBodyComponent.prototype.columnTrackingFn = /**
     * Tracks the column
     * @param {?} index
     * @param {?} column
     * @return {?}
     */
    function (index, column) {
        return column.$$id;
    };
    /**
     * Gets the row pinning group styles
     */
    /**
     * Gets the row pinning group styles
     * @param {?} group
     * @return {?}
     */
    DataTableBodyComponent.prototype.stylesByGroup = /**
     * Gets the row pinning group styles
     * @param {?} group
     * @return {?}
     */
    function (group) {
        /** @type {?} */
        var widths = this.columnGroupWidths;
        /** @type {?} */
        var offsetX = this.offsetX;
        /** @type {?} */
        var styles = {
            width: widths[group] + "px"
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            /** @type {?} */
            var bodyWidth = parseInt(this.innerWidth + '', 0);
            /** @type {?} */
            var totalDiff = widths.total - bodyWidth;
            /** @type {?} */
            var offsetDiff = totalDiff - offsetX;
            /** @type {?} */
            var offset = offsetDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    };
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     */
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     * @param {?} row
     * @return {?}
     */
    DataTableBodyComponent.prototype.getRowExpanded = /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var e_3, _a;
        if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
            try {
                for (var _b = tslib_1.__values(this.groupedRows), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var group = _c.value;
                    this.rowExpansions.push(group);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
    };
    /**
     * @param {?} row
     * @param {?} expanded
     * @return {?}
     */
    DataTableBodyComponent.prototype.getRowExpandedIdx = /**
     * @param {?} row
     * @param {?} expanded
     * @return {?}
     */
    function (row, expanded) {
        var _this = this;
        if (!expanded || !expanded.length)
            return -1;
        /** @type {?} */
        var rowId = this.rowIdentity(row);
        return expanded.findIndex((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            /** @type {?} */
            var id = _this.rowIdentity(r);
            return id === rowId;
        }));
    };
    /**
     * Gets the row index given a row
     */
    /**
     * Gets the row index given a row
     * @param {?} row
     * @return {?}
     */
    DataTableBodyComponent.prototype.getRowIndex = /**
     * Gets the row index given a row
     * @param {?} row
     * @return {?}
     */
    function (row) {
        return this.rowIndexes.get(row) || 0;
    };
    /**
     * @param {?} row
     * @return {?}
     */
    DataTableBodyComponent.prototype.onTreeAction = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.treeAction.emit({ row: row });
    };
    DataTableBodyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'datatable-body',
                    template: "\n    <datatable-selection\n      #selector\n      [selected]=\"selected\"\n      [rows]=\"rows\"\n      [selectCheck]=\"selectCheck\"\n      [selectEnabled]=\"selectEnabled\"\n      [selectionType]=\"selectionType\"\n      [rowIdentity]=\"rowIdentity\"\n      (select)=\"select.emit($event)\"\n      (activate)=\"activate.emit($event)\"\n    >\n      <datatable-progress *ngIf=\"loadingIndicator\"> </datatable-progress>\n      <datatable-scroller\n        *ngIf=\"rows?.length\"\n        [scrollbarV]=\"scrollbarV\"\n        [scrollbarH]=\"scrollbarH\"\n        [scrollHeight]=\"scrollHeight\"\n        [scrollWidth]=\"columnGroupWidths?.total\"\n        (scroll)=\"onBodyScroll($event)\"\n      >\n        <datatable-summary-row\n          *ngIf=\"summaryRow && summaryPosition === 'top'\"\n          [rowHeight]=\"summaryHeight\"\n          [offsetX]=\"offsetX\"\n          [innerWidth]=\"innerWidth\"\n          [rows]=\"rows\"\n          [columns]=\"columns\"\n        >\n        </datatable-summary-row>\n        <datatable-row-wrapper\n          [groupedRows]=\"groupedRows\"\n          *ngFor=\"let group of temp; let i = index; trackBy: rowTrackingFn\"\n          [innerWidth]=\"innerWidth\"\n          [ngStyle]=\"getRowsStyles(group)\"\n          [rowDetail]=\"rowDetail\"\n          [groupHeader]=\"groupHeader\"\n          [offsetX]=\"offsetX\"\n          [detailRowHeight]=\"getDetailRowHeight(group[i], i)\"\n          [row]=\"group\"\n          [expanded]=\"getRowExpanded(group)\"\n          [rowIndex]=\"getRowIndex(group[i])\"\n          (rowContextmenu)=\"rowContextmenu.emit($event)\"\n        >\n          <datatable-body-row\n            *ngIf=\"!groupedRows; else groupedRowsTemplate\"\n            tabindex=\"-1\"\n            [isSelected]=\"selector.getRowSelected(group)\"\n            [innerWidth]=\"innerWidth\"\n            [offsetX]=\"offsetX\"\n            [columns]=\"columns\"\n            [rowHeight]=\"getRowHeight(group)\"\n            [row]=\"group\"\n            [rowIndex]=\"getRowIndex(group)\"\n            [expanded]=\"getRowExpanded(group)\"\n            [rowClass]=\"rowClass\"\n            [displayCheck]=\"displayCheck\"\n            [treeStatus]=\"group.treeStatus\"\n            (treeAction)=\"onTreeAction(group)\"\n            (activate)=\"selector.onActivate($event, indexes.first + i)\"\n          >\n          </datatable-body-row>\n          <ng-template #groupedRowsTemplate>\n            <datatable-body-row\n              *ngFor=\"let row of group.value; let i = index; trackBy: rowTrackingFn\"\n              tabindex=\"-1\"\n              [isSelected]=\"selector.getRowSelected(row)\"\n              [innerWidth]=\"innerWidth\"\n              [offsetX]=\"offsetX\"\n              [columns]=\"columns\"\n              [rowHeight]=\"getRowHeight(row)\"\n              [row]=\"row\"\n              [group]=\"group.value\"\n              [rowIndex]=\"getRowIndex(row)\"\n              [expanded]=\"getRowExpanded(row)\"\n              [rowClass]=\"rowClass\"\n              (activate)=\"selector.onActivate($event, i)\"\n            >\n            </datatable-body-row>\n          </ng-template>\n        </datatable-row-wrapper>\n        <datatable-summary-row\n          *ngIf=\"summaryRow && summaryPosition === 'bottom'\"\n          [ngStyle]=\"getBottomSummaryRowStyles()\"\n          [rowHeight]=\"summaryHeight\"\n          [offsetX]=\"offsetX\"\n          [innerWidth]=\"innerWidth\"\n          [rows]=\"rows\"\n          [columns]=\"columns\"\n        >\n        </datatable-summary-row>\n      </datatable-scroller>\n      <div class=\"empty-row\" *ngIf=\"!rows?.length && !loadingIndicator\" [innerHTML]=\"emptyMessage\"></div>\n    </datatable-selection>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        class: 'datatable-body'
                    }
                }] }
    ];
    /** @nocollapse */
    DataTableBodyComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    DataTableBodyComponent.propDecorators = {
        scrollbarV: [{ type: Input }],
        scrollbarH: [{ type: Input }],
        loadingIndicator: [{ type: Input }],
        externalPaging: [{ type: Input }],
        rowHeight: [{ type: Input }],
        offsetX: [{ type: Input }],
        emptyMessage: [{ type: Input }],
        selectionType: [{ type: Input }],
        selected: [{ type: Input }],
        rowIdentity: [{ type: Input }],
        rowDetail: [{ type: Input }],
        groupHeader: [{ type: Input }],
        selectCheck: [{ type: Input }],
        displayCheck: [{ type: Input }],
        trackByProp: [{ type: Input }],
        rowClass: [{ type: Input }],
        groupedRows: [{ type: Input }],
        groupExpansionDefault: [{ type: Input }],
        innerWidth: [{ type: Input }],
        groupRowsBy: [{ type: Input }],
        virtualization: [{ type: Input }],
        summaryRow: [{ type: Input }],
        summaryPosition: [{ type: Input }],
        summaryHeight: [{ type: Input }],
        pageSize: [{ type: Input }],
        rows: [{ type: Input }],
        columns: [{ type: Input }],
        offset: [{ type: Input }],
        rowCount: [{ type: Input }],
        bodyWidth: [{ type: HostBinding, args: ['style.width',] }],
        bodyHeight: [{ type: Input }, { type: HostBinding, args: ['style.height',] }],
        scroll: [{ type: Output }],
        page: [{ type: Output }],
        activate: [{ type: Output }],
        select: [{ type: Output }],
        detailToggle: [{ type: Output }],
        rowContextmenu: [{ type: Output }],
        treeAction: [{ type: Output }],
        scroller: [{ type: ViewChild, args: [ScrollerComponent, { static: false },] }]
    };
    return DataTableBodyComponent;
}());
export { DataTableBodyComponent };
if (false) {
    /** @type {?} */
    DataTableBodyComponent.prototype.scrollbarV;
    /** @type {?} */
    DataTableBodyComponent.prototype.scrollbarH;
    /** @type {?} */
    DataTableBodyComponent.prototype.loadingIndicator;
    /** @type {?} */
    DataTableBodyComponent.prototype.externalPaging;
    /** @type {?} */
    DataTableBodyComponent.prototype.rowHeight;
    /** @type {?} */
    DataTableBodyComponent.prototype.offsetX;
    /** @type {?} */
    DataTableBodyComponent.prototype.emptyMessage;
    /** @type {?} */
    DataTableBodyComponent.prototype.selectionType;
    /** @type {?} */
    DataTableBodyComponent.prototype.selected;
    /** @type {?} */
    DataTableBodyComponent.prototype.rowIdentity;
    /** @type {?} */
    DataTableBodyComponent.prototype.rowDetail;
    /** @type {?} */
    DataTableBodyComponent.prototype.groupHeader;
    /** @type {?} */
    DataTableBodyComponent.prototype.selectCheck;
    /** @type {?} */
    DataTableBodyComponent.prototype.displayCheck;
    /** @type {?} */
    DataTableBodyComponent.prototype.trackByProp;
    /** @type {?} */
    DataTableBodyComponent.prototype.rowClass;
    /** @type {?} */
    DataTableBodyComponent.prototype.groupedRows;
    /** @type {?} */
    DataTableBodyComponent.prototype.groupExpansionDefault;
    /** @type {?} */
    DataTableBodyComponent.prototype.innerWidth;
    /** @type {?} */
    DataTableBodyComponent.prototype.groupRowsBy;
    /** @type {?} */
    DataTableBodyComponent.prototype.virtualization;
    /** @type {?} */
    DataTableBodyComponent.prototype.summaryRow;
    /** @type {?} */
    DataTableBodyComponent.prototype.summaryPosition;
    /** @type {?} */
    DataTableBodyComponent.prototype.summaryHeight;
    /** @type {?} */
    DataTableBodyComponent.prototype.scroll;
    /** @type {?} */
    DataTableBodyComponent.prototype.page;
    /** @type {?} */
    DataTableBodyComponent.prototype.activate;
    /** @type {?} */
    DataTableBodyComponent.prototype.select;
    /** @type {?} */
    DataTableBodyComponent.prototype.detailToggle;
    /** @type {?} */
    DataTableBodyComponent.prototype.rowContextmenu;
    /** @type {?} */
    DataTableBodyComponent.prototype.treeAction;
    /** @type {?} */
    DataTableBodyComponent.prototype.scroller;
    /** @type {?} */
    DataTableBodyComponent.prototype.rowHeightsCache;
    /** @type {?} */
    DataTableBodyComponent.prototype.temp;
    /** @type {?} */
    DataTableBodyComponent.prototype.offsetY;
    /** @type {?} */
    DataTableBodyComponent.prototype.indexes;
    /** @type {?} */
    DataTableBodyComponent.prototype.columnGroupWidths;
    /** @type {?} */
    DataTableBodyComponent.prototype.columnGroupWidthsWithoutGroup;
    /** @type {?} */
    DataTableBodyComponent.prototype.rowTrackingFn;
    /** @type {?} */
    DataTableBodyComponent.prototype.listener;
    /** @type {?} */
    DataTableBodyComponent.prototype.rowIndexes;
    /** @type {?} */
    DataTableBodyComponent.prototype.rowExpansions;
    /** @type {?} */
    DataTableBodyComponent.prototype._rows;
    /** @type {?} */
    DataTableBodyComponent.prototype._bodyHeight;
    /** @type {?} */
    DataTableBodyComponent.prototype._columns;
    /** @type {?} */
    DataTableBodyComponent.prototype._rowCount;
    /** @type {?} */
    DataTableBodyComponent.prototype._offset;
    /** @type {?} */
    DataTableBodyComponent.prototype._pageSize;
    /**
     * Get the height of the detail row.
     * @type {?}
     */
    DataTableBodyComponent.prototype.getDetailRowHeight;
    /**
     * @type {?}
     * @private
     */
    DataTableBodyComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2JvZHkvYm9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ1osS0FBSyxFQUNMLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsU0FBUyxFQUdULHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFcEQ7SUF3UEU7O09BRUc7SUFDSCxnQ0FBb0IsRUFBcUI7UUFBekMsaUJBVUM7UUFWbUIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUE1SWhDLGFBQVEsR0FBVSxFQUFFLENBQUM7UUF5RnBCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JELG1CQUFjLEdBQUcsSUFBSSxZQUFZLENBQWtDLEtBQUssQ0FBQyxDQUFDO1FBQzFFLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQXdCN0Qsb0JBQWUsR0FB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RTs7Ozs7SUE3TlUsb0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JvbGxlckNvbXBvbmVudCB9IGZyb20gJy4vc2Nyb2xsZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tICcuLi8uLi9ldmVudHMnO1xuaW1wb3J0IHsgU2VsZWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3R5cGVzL3NlbGVjdGlvbi50eXBlJztcbmltcG9ydCB7IGNvbHVtbnNCeVBpbiwgY29sdW1uR3JvdXBXaWR0aHMgfSBmcm9tICcuLi8uLi91dGlscy9jb2x1bW4nO1xuaW1wb3J0IHsgUm93SGVpZ2h0Q2FjaGUgfSBmcm9tICcuLi8uLi91dGlscy9yb3ctaGVpZ2h0LWNhY2hlJztcbmltcG9ydCB7IHRyYW5zbGF0ZVhZIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHJhbnNsYXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YXRhYmxlLWJvZHknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkYXRhdGFibGUtc2VsZWN0aW9uXG4gICAgICAjc2VsZWN0b3JcbiAgICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZFwiXG4gICAgICBbcm93c109XCJyb3dzXCJcbiAgICAgIFtzZWxlY3RDaGVja109XCJzZWxlY3RDaGVja1wiXG4gICAgICBbc2VsZWN0RW5hYmxlZF09XCJzZWxlY3RFbmFibGVkXCJcbiAgICAgIFtzZWxlY3Rpb25UeXBlXT1cInNlbGVjdGlvblR5cGVcIlxuICAgICAgW3Jvd0lkZW50aXR5XT1cInJvd0lkZW50aXR5XCJcbiAgICAgIChzZWxlY3QpPVwic2VsZWN0LmVtaXQoJGV2ZW50KVwiXG4gICAgICAoYWN0aXZhdGUpPVwiYWN0aXZhdGUuZW1pdCgkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8ZGF0YXRhYmxlLXByb2dyZXNzICpuZ0lmPVwibG9hZGluZ0luZGljYXRvclwiPiA8L2RhdGF0YWJsZS1wcm9ncmVzcz5cbiAgICAgIDxkYXRhdGFibGUtc2Nyb2xsZXJcbiAgICAgICAgKm5nSWY9XCJyb3dzPy5sZW5ndGhcIlxuICAgICAgICBbc2Nyb2xsYmFyVl09XCJzY3JvbGxiYXJWXCJcbiAgICAgICAgW3Njcm9sbGJhckhdPVwic2Nyb2xsYmFySFwiXG4gICAgICAgIFtzY3JvbGxIZWlnaHRdPVwic2Nyb2xsSGVpZ2h0XCJcbiAgICAgICAgW3Njcm9sbFdpZHRoXT1cImNvbHVtbkdyb3VwV2lkdGhzPy50b3RhbFwiXG4gICAgICAgIChzY3JvbGwpPVwib25Cb2R5U2Nyb2xsKCRldmVudClcIlxuICAgICAgPlxuICAgICAgICA8ZGF0YXRhYmxlLXN1bW1hcnktcm93XG4gICAgICAgICAgKm5nSWY9XCJzdW1tYXJ5Um93ICYmIHN1bW1hcnlQb3NpdGlvbiA9PT0gJ3RvcCdcIlxuICAgICAgICAgIFtyb3dIZWlnaHRdPVwic3VtbWFyeUhlaWdodFwiXG4gICAgICAgICAgW29mZnNldFhdPVwib2Zmc2V0WFwiXG4gICAgICAgICAgW2lubmVyV2lkdGhdPVwiaW5uZXJXaWR0aFwiXG4gICAgICAgICAgW3Jvd3NdPVwicm93c1wiXG4gICAgICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc1wiXG4gICAgICAgID5cbiAgICAgICAgPC9kYXRhdGFibGUtc3VtbWFyeS1yb3c+XG4gICAgICAgIDxkYXRhdGFibGUtcm93LXdyYXBwZXJcbiAgICAgICAgICBbZ3JvdXBlZFJvd3NdPVwiZ3JvdXBlZFJvd3NcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBncm91cCBvZiB0ZW1wOyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiByb3dUcmFja2luZ0ZuXCJcbiAgICAgICAgICBbaW5uZXJXaWR0aF09XCJpbm5lcldpZHRoXCJcbiAgICAgICAgICBbbmdTdHlsZV09XCJnZXRSb3dzU3R5bGVzKGdyb3VwKVwiXG4gICAgICAgICAgW3Jvd0RldGFpbF09XCJyb3dEZXRhaWxcIlxuICAgICAgICAgIFtncm91cEhlYWRlcl09XCJncm91cEhlYWRlclwiXG4gICAgICAgICAgW29mZnNldFhdPVwib2Zmc2V0WFwiXG4gICAgICAgICAgW2RldGFpbFJvd0hlaWdodF09XCJnZXREZXRhaWxSb3dIZWlnaHQoZ3JvdXBbaV0sIGkpXCJcbiAgICAgICAgICBbcm93XT1cImdyb3VwXCJcbiAgICAgICAgICBbZXhwYW5kZWRdPVwiZ2V0Um93RXhwYW5kZWQoZ3JvdXApXCJcbiAgICAgICAgICBbcm93SW5kZXhdPVwiZ2V0Um93SW5kZXgoZ3JvdXBbaV0pXCJcbiAgICAgICAgICAocm93Q29udGV4dG1lbnUpPVwicm93Q29udGV4dG1lbnUuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkYXRhdGFibGUtYm9keS1yb3dcbiAgICAgICAgICAgICpuZ0lmPVwiIWdyb3VwZWRSb3dzOyBlbHNlIGdyb3VwZWRSb3dzVGVtcGxhdGVcIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICBbaXNTZWxlY3RlZF09XCJzZWxlY3Rvci5nZXRSb3dTZWxlY3RlZChncm91cClcIlxuICAgICAgICAgICAgW2lubmVyV2lkdGhdPVwiaW5uZXJXaWR0aFwiXG4gICAgICAgICAgICBbb2Zmc2V0WF09XCJvZmZzZXRYXCJcbiAgICAgICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICAgICAgW3Jvd0hlaWdodF09XCJnZXRSb3dIZWlnaHQoZ3JvdXApXCJcbiAgICAgICAgICAgIFtyb3ddPVwiZ3JvdXBcIlxuICAgICAgICAgICAgW3Jvd0luZGV4XT1cImdldFJvd0luZGV4KGdyb3VwKVwiXG4gICAgICAgICAgICBbZXhwYW5kZWRdPVwiZ2V0Um93RXhwYW5kZWQoZ3JvdXApXCJcbiAgICAgICAgICAgIFtyb3dDbGFzc109XCJyb3dDbGFzc1wiXG4gICAgICAgICAgICBbZGlzcGxheUNoZWNrXT1cImRpc3BsYXlDaGVja1wiXG4gICAgICAgICAgICBbdHJlZVN0YXR1c109XCJncm91cC50cmVlU3RhdHVzXCJcbiAgICAgICAgICAgICh0cmVlQWN0aW9uKT1cIm9uVHJlZUFjdGlvbihncm91cClcIlxuICAgICAgICAgICAgKGFjdGl2YXRlKT1cInNlbGVjdG9yLm9uQWN0aXZhdGUoJGV2ZW50LCBpbmRleGVzLmZpcnN0ICsgaSlcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L2RhdGF0YWJsZS1ib2R5LXJvdz5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2dyb3VwZWRSb3dzVGVtcGxhdGU+XG4gICAgICAgICAgICA8ZGF0YXRhYmxlLWJvZHktcm93XG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCByb3cgb2YgZ3JvdXAudmFsdWU7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHJvd1RyYWNraW5nRm5cIlxuICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgW2lzU2VsZWN0ZWRdPVwic2VsZWN0b3IuZ2V0Um93U2VsZWN0ZWQocm93KVwiXG4gICAgICAgICAgICAgIFtpbm5lcldpZHRoXT1cImlubmVyV2lkdGhcIlxuICAgICAgICAgICAgICBbb2Zmc2V0WF09XCJvZmZzZXRYXCJcbiAgICAgICAgICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc1wiXG4gICAgICAgICAgICAgIFtyb3dIZWlnaHRdPVwiZ2V0Um93SGVpZ2h0KHJvdylcIlxuICAgICAgICAgICAgICBbcm93XT1cInJvd1wiXG4gICAgICAgICAgICAgIFtncm91cF09XCJncm91cC52YWx1ZVwiXG4gICAgICAgICAgICAgIFtyb3dJbmRleF09XCJnZXRSb3dJbmRleChyb3cpXCJcbiAgICAgICAgICAgICAgW2V4cGFuZGVkXT1cImdldFJvd0V4cGFuZGVkKHJvdylcIlxuICAgICAgICAgICAgICBbcm93Q2xhc3NdPVwicm93Q2xhc3NcIlxuICAgICAgICAgICAgICAoYWN0aXZhdGUpPVwic2VsZWN0b3Iub25BY3RpdmF0ZSgkZXZlbnQsIGkpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGF0YXRhYmxlLWJvZHktcm93PlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvZGF0YXRhYmxlLXJvdy13cmFwcGVyPlxuICAgICAgICA8ZGF0YXRhYmxlLXN1bW1hcnktcm93XG4gICAgICAgICAgKm5nSWY9XCJzdW1tYXJ5Um93ICYmIHN1bW1hcnlQb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIlxuICAgICAgICAgIFtuZ1N0eWxlXT1cImdldEJvdHRvbVN1bW1hcnlSb3dTdHlsZXMoKVwiXG4gICAgICAgICAgW3Jvd0hlaWdodF09XCJzdW1tYXJ5SGVpZ2h0XCJcbiAgICAgICAgICBbb2Zmc2V0WF09XCJvZmZzZXRYXCJcbiAgICAgICAgICBbaW5uZXJXaWR0aF09XCJpbm5lcldpZHRoXCJcbiAgICAgICAgICBbcm93c109XCJyb3dzXCJcbiAgICAgICAgICBbY29sdW1uc109XCJjb2x1bW5zXCJcbiAgICAgICAgPlxuICAgICAgICA8L2RhdGF0YWJsZS1zdW1tYXJ5LXJvdz5cbiAgICAgIDwvZGF0YXRhYmxlLXNjcm9sbGVyPlxuICAgICAgPGRpdiBjbGFzcz1cImVtcHR5LXJvd1wiICpuZ0lmPVwiIXJvd3M/Lmxlbmd0aCAmJiAhbG9hZGluZ0luZGljYXRvclwiIFtpbm5lckhUTUxdPVwiZW1wdHlNZXNzYWdlXCI+PC9kaXY+XG4gICAgPC9kYXRhdGFibGUtc2VsZWN0aW9uPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnZGF0YXRhYmxlLWJvZHknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgc2Nyb2xsYmFyVjogYm9vbGVhbjtcbiAgQElucHV0KCkgc2Nyb2xsYmFySDogYm9vbGVhbjtcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogYm9vbGVhbjtcbiAgQElucHV0KCkgZXh0ZXJuYWxQYWdpbmc6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJvd0hlaWdodDogbnVtYmVyIHwgJ2F1dG8nIHwgKChyb3c/OiBhbnkpID0+IG51bWJlcik7XG4gIEBJbnB1dCgpIG9mZnNldFg6IG51bWJlcjtcbiAgQElucHV0KCkgZW1wdHlNZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNlbGVjdGlvblR5cGU6IFNlbGVjdGlvblR5cGU7XG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSByb3dJZGVudGl0eTogYW55O1xuICBASW5wdXQoKSByb3dEZXRhaWw6IGFueTtcbiAgQElucHV0KCkgZ3JvdXBIZWFkZXI6IGFueTtcbiAgQElucHV0KCkgc2VsZWN0Q2hlY2s6IGFueTtcbiAgQElucHV0KCkgZGlzcGxheUNoZWNrOiBhbnk7XG4gIEBJbnB1dCgpIHRyYWNrQnlQcm9wOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvd0NsYXNzOiBhbnk7XG4gIEBJbnB1dCgpIGdyb3VwZWRSb3dzOiBhbnk7XG4gIEBJbnB1dCgpIGdyb3VwRXhwYW5zaW9uRGVmYXVsdDogYm9vbGVhbjtcbiAgQElucHV0KCkgaW5uZXJXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBncm91cFJvd3NCeTogc3RyaW5nO1xuICBASW5wdXQoKSB2aXJ0dWFsaXphdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgc3VtbWFyeVJvdzogYm9vbGVhbjtcbiAgQElucHV0KCkgc3VtbWFyeVBvc2l0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1bW1hcnlIZWlnaHQ6IG51bWJlcjtcblxuICBASW5wdXQoKSBzZXQgcGFnZVNpemUodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlU2l6ZSA9IHZhbDtcbiAgICB0aGlzLnJlY2FsY0xheW91dCgpO1xuICB9XG5cbiAgZ2V0IHBhZ2VTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplO1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHJvd3ModmFsOiBhbnlbXSkge1xuICAgIHRoaXMuX3Jvd3MgPSB2YWw7XG4gICAgdGhpcy5yZWNhbGNMYXlvdXQoKTtcbiAgfVxuXG4gIGdldCByb3dzKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fcm93cztcbiAgfVxuXG4gIEBJbnB1dCgpIHNldCBjb2x1bW5zKHZhbDogYW55W10pIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gdmFsO1xuICAgIGNvbnN0IGNvbHNCeVBpbiA9IGNvbHVtbnNCeVBpbih2YWwpO1xuICAgIHRoaXMuY29sdW1uR3JvdXBXaWR0aHMgPSBjb2x1bW5Hcm91cFdpZHRocyhjb2xzQnlQaW4sIHZhbCk7XG4gIH1cblxuICBnZXQgY29sdW1ucygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gIH1cblxuICBASW5wdXQoKSBzZXQgb2Zmc2V0KHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2Zmc2V0ID0gdmFsO1xuICAgIGlmICghdGhpcy5zY3JvbGxiYXJWIHx8ICh0aGlzLnNjcm9sbGJhclYgJiYgIXRoaXMudmlydHVhbGl6YXRpb24pKVxuICAgICAgdGhpcy5yZWNhbGNMYXlvdXQoKTtcbiAgfVxuXG4gIGdldCBvZmZzZXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0O1xuICB9XG5cbiAgQElucHV0KCkgc2V0IHJvd0NvdW50KHZhbDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcm93Q291bnQgPSB2YWw7XG4gICAgdGhpcy5yZWNhbGNMYXlvdXQoKTtcbiAgfVxuXG4gIGdldCByb3dDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yb3dDb3VudDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICBnZXQgYm9keVdpZHRoKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFySCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5uZXJXaWR0aCArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnMTAwJSc7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKVxuICBzZXQgYm9keUhlaWdodCh2YWwpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxiYXJWKSB7XG4gICAgICB0aGlzLl9ib2R5SGVpZ2h0ID0gdmFsICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fYm9keUhlaWdodCA9ICdhdXRvJztcbiAgICB9XG5cbiAgICB0aGlzLnJlY2FsY0xheW91dCgpO1xuICB9XG5cbiAgZ2V0IGJvZHlIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JvZHlIZWlnaHQ7XG4gIH1cblxuICBAT3V0cHV0KCkgc2Nyb2xsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHBhZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgYWN0aXZhdGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRldGFpbFRvZ2dsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByb3dDb250ZXh0bWVudSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBldmVudDogTW91c2VFdmVudDsgcm93OiBhbnkgfT4oZmFsc2UpO1xuICBAT3V0cHV0KCkgdHJlZUFjdGlvbjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZChTY3JvbGxlckNvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHNjcm9sbGVyOiBTY3JvbGxlckNvbXBvbmVudDtcblxuICAvKipcbiAgICogUmV0dXJucyBpZiBzZWxlY3Rpb24gaXMgZW5hYmxlZC5cbiAgICovXG4gIGdldCBzZWxlY3RFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuc2VsZWN0aW9uVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB0aGF0IHdvdWxkIGNhbGN1bGF0ZSB0aGUgaGVpZ2h0IG9mIHNjcm9sbCBiYXJcbiAgICogYmFzZWQgb24gdGhlIHJvdyBoZWlnaHRzIGNhY2hlIGZvciB2aXJ0dWFsIHNjcm9sbCBhbmQgdmlydHVhbGl6YXRpb24uIE90aGVyIHNjZW5hcmlvc1xuICAgKiBjYWxjdWxhdGUgc2Nyb2xsIGhlaWdodCBhdXRvbWF0aWNhbGx5IChhcyBoZWlnaHQgd2lsbCBiZSB1bmRlZmluZWQpLlxuICAgKi9cbiAgZ2V0IHNjcm9sbEhlaWdodCgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIGlmICh0aGlzLnNjcm9sbGJhclYgJiYgdGhpcy52aXJ0dWFsaXphdGlvbiAmJiB0aGlzLnJvd0NvdW50KSB7XG4gICAgICByZXR1cm4gdGhpcy5yb3dIZWlnaHRzQ2FjaGUucXVlcnkodGhpcy5yb3dDb3VudCAtIDEpO1xuICAgIH1cbiAgICAvLyBhdm9pZCBUUzcwMzA6IE5vdCBhbGwgY29kZSBwYXRocyByZXR1cm4gYSB2YWx1ZS5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcm93SGVpZ2h0c0NhY2hlOiBSb3dIZWlnaHRDYWNoZSA9IG5ldyBSb3dIZWlnaHRDYWNoZSgpO1xuICB0ZW1wOiBhbnlbXSA9IFtdO1xuICBvZmZzZXRZID0gMDtcbiAgaW5kZXhlczogYW55ID0ge307XG4gIGNvbHVtbkdyb3VwV2lkdGhzOiBhbnk7XG4gIGNvbHVtbkdyb3VwV2lkdGhzV2l0aG91dEdyb3VwOiBhbnk7XG4gIHJvd1RyYWNraW5nRm46IGFueTtcbiAgbGlzdGVuZXI6IGFueTtcbiAgcm93SW5kZXhlczogYW55ID0gbmV3IE1hcCgpO1xuICByb3dFeHBhbnNpb25zOiBhbnlbXSA9IFtdO1xuXG4gIF9yb3dzOiBhbnlbXTtcbiAgX2JvZHlIZWlnaHQ6IGFueTtcbiAgX2NvbHVtbnM6IGFueVtdO1xuICBfcm93Q291bnQ6IG51bWJlcjtcbiAgX29mZnNldDogbnVtYmVyO1xuICBfcGFnZVNpemU6IG51bWJlcjtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBEYXRhVGFibGVCb2R5Q29tcG9uZW50LlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAvLyBkZWNsYXJlIGZuIGhlcmUgc28gd2UgY2FuIGdldCBhY2Nlc3MgdG8gdGhlIGB0aGlzYCBwcm9wZXJ0eVxuICAgIHRoaXMucm93VHJhY2tpbmdGbiA9IChpbmRleDogbnVtYmVyLCByb3c6IGFueSk6IGFueSA9PiB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmdldFJvd0luZGV4KHJvdyk7XG4gICAgICBpZiAodGhpcy50cmFja0J5UHJvcCkge1xuICAgICAgICByZXR1cm4gcm93W3RoaXMudHJhY2tCeVByb3BdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBhZnRlciB0aGUgY29uc3RydWN0b3IsIGluaXRpYWxpemluZyBpbnB1dCBwcm9wZXJ0aWVzXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3dEZXRhaWwpIHtcbiAgICAgIHRoaXMubGlzdGVuZXIgPSB0aGlzLnJvd0RldGFpbC50b2dnbGUuc3Vic2NyaWJlKCh7IHR5cGUsIHZhbHVlIH06IHsgdHlwZTogc3RyaW5nOyB2YWx1ZTogYW55IH0pID0+IHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdyb3cnKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVSb3dFeHBhbnNpb24odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnYWxsJykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlQWxsUm93cyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZWZyZXNoIHJvd3MgYWZ0ZXIgdG9nZ2xlXG4gICAgICAgIC8vIEZpeGVzICM4ODNcbiAgICAgICAgdGhpcy51cGRhdGVJbmRleGVzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUm93cygpO1xuICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ3JvdXBIZWFkZXIpIHtcbiAgICAgIHRoaXMubGlzdGVuZXIgPSB0aGlzLmdyb3VwSGVhZGVyLnRvZ2dsZS5zdWJzY3JpYmUoKHsgdHlwZSwgdmFsdWUgfTogeyB0eXBlOiBzdHJpbmc7IHZhbHVlOiBhbnkgfSkgPT4ge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICAgIHRoaXMudG9nZ2xlUm93RXhwYW5zaW9uKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZUFsbFJvd3ModmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVmcmVzaCByb3dzIGFmdGVyIHRvZ2dsZVxuICAgICAgICAvLyBGaXhlcyAjODgzXG4gICAgICAgIHRoaXMudXBkYXRlSW5kZXhlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJvd3MoKTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb25jZSwgYmVmb3JlIHRoZSBpbnN0YW5jZSBpcyBkZXN0cm95ZWQuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3dEZXRhaWwgfHwgdGhpcy5ncm91cEhlYWRlcikge1xuICAgICAgdGhpcy5saXN0ZW5lci51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBZIG9mZnNldCBnaXZlbiBhIG5ldyBvZmZzZXQuXG4gICAqL1xuICB1cGRhdGVPZmZzZXRZKG9mZnNldD86IG51bWJlcik6IHZvaWQge1xuICAgIC8vIHNjcm9sbGVyIGlzIG1pc3Npbmcgb24gZW1wdHkgdGFibGVcbiAgICBpZiAoIXRoaXMuc2Nyb2xsZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY3JvbGxiYXJWICYmIHRoaXMudmlydHVhbGl6YXRpb24gJiYgb2Zmc2V0KSB7XG4gICAgICAvLyBGaXJzdCBnZXQgdGhlIHJvdyBJbmRleCB0aGF0IHdlIG5lZWQgdG8gbW92ZSB0by5cbiAgICAgIGNvbnN0IHJvd0luZGV4ID0gdGhpcy5wYWdlU2l6ZSAqIG9mZnNldDtcbiAgICAgIG9mZnNldCA9IHRoaXMucm93SGVpZ2h0c0NhY2hlLnF1ZXJ5KHJvd0luZGV4IC0gMSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbGJhclYgJiYgIXRoaXMudmlydHVhbGl6YXRpb24pIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGxlci5zZXRPZmZzZXQob2Zmc2V0IHx8IDApO1xuICB9XG5cbiAgLyoqXG4gICAqIEJvZHkgd2FzIHNjcm9sbGVkLCB0aGlzIGlzIG1haW5seSB1c2VmdWwgZm9yXG4gICAqIHdoZW4gYSB1c2VyIGlzIHNlcnZlci1zaWRlIHBhZ2luYXRpb24gdmlhIHZpcnR1YWwgc2Nyb2xsLlxuICAgKi9cbiAgb25Cb2R5U2Nyb2xsKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBzY3JvbGxZUG9zOiBudW1iZXIgPSBldmVudC5zY3JvbGxZUG9zO1xuICAgIGNvbnN0IHNjcm9sbFhQb3M6IG51bWJlciA9IGV2ZW50LnNjcm9sbFhQb3M7XG5cbiAgICAvLyBpZiBzY3JvbGwgY2hhbmdlLCB0cmlnZ2VyIHVwZGF0ZVxuICAgIC8vIHRoaXMgaXMgbWFpbmx5IHVzZWQgZm9yIGhlYWRlciBjZWxsIHBvc2l0aW9uc1xuICAgIGlmICh0aGlzLm9mZnNldFkgIT09IHNjcm9sbFlQb3MgfHwgdGhpcy5vZmZzZXRYICE9PSBzY3JvbGxYUG9zKSB7XG4gICAgICB0aGlzLnNjcm9sbC5lbWl0KHtcbiAgICAgICAgb2Zmc2V0WTogc2Nyb2xsWVBvcyxcbiAgICAgICAgb2Zmc2V0WDogc2Nyb2xsWFBvc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5vZmZzZXRZID0gc2Nyb2xsWVBvcztcbiAgICB0aGlzLm9mZnNldFggPSBzY3JvbGxYUG9zO1xuXG4gICAgdGhpcy51cGRhdGVJbmRleGVzKCk7XG4gICAgdGhpcy51cGRhdGVQYWdlKGV2ZW50LmRpcmVjdGlvbik7XG4gICAgdGhpcy51cGRhdGVSb3dzKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcGFnZSBnaXZlbiBhIGRpcmVjdGlvbi5cbiAgICovXG4gIHVwZGF0ZVBhZ2UoZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5pbmRleGVzLmZpcnN0IC8gdGhpcy5wYWdlU2l6ZTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICd1cCcpIHtcbiAgICAgIG9mZnNldCA9IE1hdGguY2VpbChvZmZzZXQpO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIG9mZnNldCA9IE1hdGguZmxvb3Iob2Zmc2V0KTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uICE9PSB1bmRlZmluZWQgJiYgIWlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHRoaXMucGFnZS5lbWl0KHsgb2Zmc2V0IH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSByb3dzIGluIHRoZSB2aWV3IHBvcnRcbiAgICovXG4gIHVwZGF0ZVJvd3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gdGhpcy5pbmRleGVzO1xuICAgIGxldCByb3dJbmRleCA9IGZpcnN0O1xuICAgIGxldCBpZHggPSAwO1xuICAgIGNvbnN0IHRlbXA6IGFueVtdID0gW107XG5cbiAgICB0aGlzLnJvd0luZGV4ZXMuY2xlYXIoKTtcblxuICAgIC8vIGlmIGdyb3Vwcm93c2J5IGhhcyBiZWVuIHNwZWNpZmllZCB0cmVhdCByb3cgcGFnaW5nXG4gICAgLy8gcGFyYW1ldGVycyBhcyBncm91cCBwYWdpbmcgcGFyYW1ldGVycyBpZSBpZiBsaW1pdCAxMCBoYXMgYmVlblxuICAgIC8vIHNwZWNpZmllZCB0cmVhdCBpdCBhcyAxMCBncm91cHMgcmF0aGVyIHRoYW4gMTAgcm93c1xuICAgIGlmICh0aGlzLmdyb3VwZWRSb3dzKSB7XG4gICAgICBsZXQgbWF4Um93c1Blckdyb3VwID0gMztcbiAgICAgIC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lIGdyb3VwIHNldCB0aGUgbWF4aW11bSBudW1iZXIgb2ZcbiAgICAgIC8vIHJvd3MgcGVyIGdyb3VwIHRoZSBzYW1lIGFzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93c1xuICAgICAgaWYgKHRoaXMuZ3JvdXBlZFJvd3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG1heFJvd3NQZXJHcm91cCA9IHRoaXMuZ3JvdXBlZFJvd3NbMF0udmFsdWUubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAocm93SW5kZXggPCBsYXN0ICYmIHJvd0luZGV4IDwgdGhpcy5ncm91cGVkUm93cy5sZW5ndGgpIHtcbiAgICAgICAgLy8gQWRkIHRoZSBncm91cHMgaW50byB0aGlzIHBhZ2VcbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLmdyb3VwZWRSb3dzW3Jvd0luZGV4XTtcbiAgICAgICAgdGVtcFtpZHhdID0gZ3JvdXA7XG4gICAgICAgIGlkeCsrO1xuXG4gICAgICAgIC8vIEdyb3VwIGluZGV4IGluIHRoaXMgY29udGV4dFxuICAgICAgICByb3dJbmRleCsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAocm93SW5kZXggPCBsYXN0ICYmIHJvd0luZGV4IDwgdGhpcy5yb3dDb3VudCkge1xuICAgICAgICBjb25zdCByb3cgPSB0aGlzLnJvd3Nbcm93SW5kZXhdO1xuXG4gICAgICAgIGlmIChyb3cpIHtcbiAgICAgICAgICB0aGlzLnJvd0luZGV4ZXMuc2V0KHJvdywgcm93SW5kZXgpO1xuICAgICAgICAgIHRlbXBbaWR4XSA9IHJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIGlkeCsrO1xuICAgICAgICByb3dJbmRleCsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGVtcCA9IHRlbXA7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSByb3cgaGVpZ2h0XG4gICAqL1xuICBnZXRSb3dIZWlnaHQocm93OiBhbnkpOiBudW1iZXIge1xuICAgIC8vIGlmIGl0cyBhIGZ1bmN0aW9uIHJldHVybiBpdFxuICAgIGlmICh0eXBlb2YgdGhpcy5yb3dIZWlnaHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvd0hlaWdodChyb3cpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJvd0hlaWdodCBhcyBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGdyb3VwIHRoZSBncm91cCB3aXRoIGFsbCByb3dzXG4gICAqL1xuICBnZXRHcm91cEhlaWdodChncm91cDogYW55KTogbnVtYmVyIHtcbiAgICBsZXQgcm93SGVpZ2h0ID0gMDtcblxuICAgIGlmIChncm91cC52YWx1ZSkge1xuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGdyb3VwLnZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICByb3dIZWlnaHQgKz0gdGhpcy5nZXRSb3dBbmREZXRhaWxIZWlnaHQoZ3JvdXAudmFsdWVbaW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcm93SGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSByb3cgaGVpZ2h0IGJhc2VkIG9uIHRoZSBleHBhbmRlZCBzdGF0ZSBvZiB0aGUgcm93LlxuICAgKi9cbiAgZ2V0Um93QW5kRGV0YWlsSGVpZ2h0KHJvdzogYW55KTogbnVtYmVyIHtcbiAgICBsZXQgcm93SGVpZ2h0ID0gdGhpcy5nZXRSb3dIZWlnaHQocm93KTtcbiAgICBjb25zdCBleHBhbmRlZCA9IHRoaXMuZ2V0Um93RXhwYW5kZWQocm93KTtcblxuICAgIC8vIEFkZGluZyBkZXRhaWwgcm93IGhlaWdodCBpZiBpdHMgZXhwYW5kZWQuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICByb3dIZWlnaHQgKz0gdGhpcy5nZXREZXRhaWxSb3dIZWlnaHQocm93KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm93SGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgaGVpZ2h0IG9mIHRoZSBkZXRhaWwgcm93LlxuICAgKi9cbiAgZ2V0RGV0YWlsUm93SGVpZ2h0ID0gKHJvdz86IGFueSwgaW5kZXg/OiBhbnkpOiBudW1iZXIgPT4ge1xuICAgIGlmICghdGhpcy5yb3dEZXRhaWwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCByb3dIZWlnaHQgPSB0aGlzLnJvd0RldGFpbC5yb3dIZWlnaHQ7XG4gICAgcmV0dXJuIHR5cGVvZiByb3dIZWlnaHQgPT09ICdmdW5jdGlvbicgPyByb3dIZWlnaHQocm93LCBpbmRleCkgOiAocm93SGVpZ2h0IGFzIG51bWJlcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIHN0eWxlcyBmb3IgdGhlIHJvdyBzbyB0aGF0IHRoZSByb3dzIGNhbiBiZSBtb3ZlZCBpbiAyRCBzcGFjZVxuICAgKiBkdXJpbmcgdmlydHVhbCBzY3JvbGwgaW5zaWRlIHRoZSBET00uICAgSW4gdGhlIGJlbG93IGNhc2UgdGhlIFkgcG9zaXRpb24gaXNcbiAgICogbWFuaXB1bGF0ZWQuICAgQXMgYW4gZXhhbXBsZSwgaWYgdGhlIGhlaWdodCBvZiByb3cgMCBpcyAzMCBweCBhbmQgcm93IDEgaXNcbiAgICogMTAwIHB4IHRoZW4gZm9sbG93aW5nIHN0eWxlcyBhcmUgZ2VuZXJhdGVkOlxuICAgKlxuICAgKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpOyAgICAtPiAgcm93MFxuICAgKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMzBweCwgMHB4KTsgICAtPiAgcm93MVxuICAgKiB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMTMwcHgsIDBweCk7ICAtPiAgcm93MlxuICAgKlxuICAgKiBSb3cgaGVpZ2h0cyBoYXZlIHRvIGJlIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIHJvdyBoZWlnaHRzIGNhY2hlIGFzIHdlIHdvbnRcbiAgICogYmUgYWJsZSB0byBkZXRlcm1pbmUgd2hpY2ggcm93IGlzIG9mIHdoYXQgaGVpZ2h0IGJlZm9yZSBoYW5kLiAgSW4gdGhlIGFib3ZlXG4gICAqIGNhc2UgdGhlIHBvc2l0aW9uWSBvZiB0aGUgdHJhbnNsYXRlM2QgZm9yIHJvdzIgd291bGQgYmUgdGhlIHN1bSBvZiBhbGwgdGhlXG4gICAqIGhlaWdodHMgb2YgdGhlIHJvd3MgYmVmb3JlIGl0IChpLmUuIHJvdzAgYW5kIHJvdzEpLlxuICAgKlxuICAgKiBAcGFyYW0gcm93cyB0aGUgcm93IHRoYXQgbmVlZHMgdG8gYmUgcGxhY2VkIGluIHRoZSAyRCBzcGFjZS5cbiAgICogQHJldHVybnMgdGhlIENTUzMgc3R5bGUgdG8gYmUgYXBwbGllZFxuICAgKlxuICAgKiBAbWVtYmVyT2YgRGF0YVRhYmxlQm9keUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0Um93c1N0eWxlcyhyb3dzOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHN0eWxlczogYW55ID0ge307XG5cbiAgICAvLyBvbmx5IGFkZCBzdHlsZXMgZm9yIHRoZSBncm91cCBpZiB0aGVyZSBpcyBhIGdyb3VwXG4gICAgaWYgKHRoaXMuZ3JvdXBlZFJvd3MpIHtcbiAgICAgIHN0eWxlcy53aWR0aCA9IHRoaXMuY29sdW1uR3JvdXBXaWR0aHMudG90YWw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyViAmJiB0aGlzLnZpcnR1YWxpemF0aW9uKSB7XG4gICAgICBsZXQgaWR4ID0gMDtcblxuICAgICAgaWYgKHRoaXMuZ3JvdXBlZFJvd3MpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBsYXRlc3Qgcm93IHJvd2luZGV4IGluIGEgZ3JvdXBcbiAgICAgICAgY29uc3Qgcm93ID0gcm93c1tyb3dzLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZHggPSByb3cgPyB0aGlzLmdldFJvd0luZGV4KHJvdykgOiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWR4ID0gdGhpcy5nZXRSb3dJbmRleChyb3dzKTtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc3QgcG9zID0gaWR4ICogcm93SGVpZ2h0O1xuICAgICAgLy8gVGhlIHBvc2l0aW9uIG9mIHRoaXMgcm93IHdvdWxkIGJlIHRoZSBzdW0gb2YgYWxsIHJvdyBoZWlnaHRzXG4gICAgICAvLyB1bnRpbCB0aGUgcHJldmlvdXMgcm93IHBvc2l0aW9uLlxuICAgICAgY29uc3QgcG9zID0gdGhpcy5yb3dIZWlnaHRzQ2FjaGUucXVlcnkoaWR4IC0gMSk7XG5cbiAgICAgIHRyYW5zbGF0ZVhZKHN0eWxlcywgMCwgcG9zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBib3R0b20gc3VtbWFyeSByb3cgb2Zmc2V0IGZvciBzY3JvbGxiYXIgbW9kZS5cbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgY2FjaGUgYW5kIG9mZnNldCBjYWxjdWxhdGlvblxuICAgKiBzZWUgZGVzY3JpcHRpb24gZm9yIGBnZXRSb3dzU3R5bGVzYCBtZXRob2RcbiAgICpcbiAgICogQHJldHVybnMgdGhlIENTUzMgc3R5bGUgdG8gYmUgYXBwbGllZFxuICAgKlxuICAgKiBAbWVtYmVyT2YgRGF0YVRhYmxlQm9keUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0Qm90dG9tU3VtbWFyeVJvd1N0eWxlcygpOiBhbnkge1xuICAgIGlmICghdGhpcy5zY3JvbGxiYXJWIHx8ICF0aGlzLnJvd3MgfHwgIXRoaXMucm93cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlcyA9IHsgcG9zaXRpb246ICdhYnNvbHV0ZScgfTtcbiAgICBjb25zdCBwb3MgPSB0aGlzLnJvd0hlaWdodHNDYWNoZS5xdWVyeSh0aGlzLnJvd3MubGVuZ3RoIC0gMSk7XG5cbiAgICB0cmFuc2xhdGVYWShzdHlsZXMsIDAsIHBvcyk7XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBsb2FkaW5nIGluZGljYXRvclxuICAgKi9cbiAgaGlkZUluZGljYXRvcigpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZSksIDUwMCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgaW5kZXggb2YgdGhlIHJvd3MgaW4gdGhlIHZpZXdwb3J0XG4gICAqL1xuICB1cGRhdGVJbmRleGVzKCk6IHZvaWQge1xuICAgIGxldCBmaXJzdCA9IDA7XG4gICAgbGV0IGxhc3QgPSAwO1xuXG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyVikge1xuICAgICAgaWYgKHRoaXMudmlydHVhbGl6YXRpb24pIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRpb24gb2YgdGhlIGZpcnN0IGFuZCBsYXN0IGluZGV4ZXMgd2lsbCBiZSBiYXNlZCBvbiB3aGVyZSB0aGVcbiAgICAgICAgLy8gc2Nyb2xsWSBwb3NpdGlvbiB3b3VsZCBiZSBhdC4gIFRoZSBsYXN0IGluZGV4IHdvdWxkIGJlIHRoZSBvbmVcbiAgICAgICAgLy8gdGhhdCBzaG93cyB1cCBpbnNpZGUgdGhlIHZpZXcgcG9ydCB0aGUgbGFzdC5cbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5ib2R5SGVpZ2h0LCAwKTtcbiAgICAgICAgZmlyc3QgPSB0aGlzLnJvd0hlaWdodHNDYWNoZS5nZXRSb3dJbmRleCh0aGlzLm9mZnNldFkpO1xuICAgICAgICBsYXN0ID0gdGhpcy5yb3dIZWlnaHRzQ2FjaGUuZ2V0Um93SW5kZXgoaGVpZ2h0ICsgdGhpcy5vZmZzZXRZKSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB2aXJ0dWFsIHJvd3MgYXJlIG5vdCBuZWVkZWRcbiAgICAgICAgLy8gV2UgcmVuZGVyIGFsbCBpbiBvbmUgZ29cbiAgICAgICAgZmlyc3QgPSAwO1xuICAgICAgICBsYXN0ID0gdGhpcy5yb3dDb3VudDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIHNlcnZlciBpcyBoYW5kbGluZyBwYWdpbmcgYW5kIHdpbGwgcGFzcyBhbiBhcnJheSB0aGF0IGJlZ2lucyB3aXRoIHRoZVxuICAgICAgLy8gZWxlbWVudCBhdCBhIHNwZWNpZmllZCBvZmZzZXQuICBmaXJzdCBzaG91bGQgYWx3YXlzIGJlIDAgd2l0aCBleHRlcm5hbCBwYWdpbmcuXG4gICAgICBpZiAoIXRoaXMuZXh0ZXJuYWxQYWdpbmcpIHtcbiAgICAgICAgZmlyc3QgPSBNYXRoLm1heCh0aGlzLm9mZnNldCAqIHRoaXMucGFnZVNpemUsIDApO1xuICAgICAgfVxuICAgICAgbGFzdCA9IE1hdGgubWluKGZpcnN0ICsgdGhpcy5wYWdlU2l6ZSwgdGhpcy5yb3dDb3VudCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbmRleGVzID0geyBmaXJzdCwgbGFzdCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2hlcyB0aGUgZnVsbCBSb3cgSGVpZ2h0IGNhY2hlLiAgU2hvdWxkIGJlIHVzZWRcbiAgICogd2hlbiB0aGUgZW50aXJlIHJvdyBhcnJheSBzdGF0ZSBoYXMgY2hhbmdlZC5cbiAgICovXG4gIHJlZnJlc2hSb3dIZWlnaHRDYWNoZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2Nyb2xsYmFyViB8fCAodGhpcy5zY3JvbGxiYXJWICYmICF0aGlzLnZpcnR1YWxpemF0aW9uKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNsZWFyIHRoZSBwcmV2aW91cyByb3cgaGVpZ2h0IGNhY2hlIGlmIGFscmVhZHkgcHJlc2VudC5cbiAgICAvLyB0aGlzIGlzIHVzZWZ1bCBkdXJpbmcgc29ydHMsIGZpbHRlcnMgd2hlcmUgdGhlIHN0YXRlIG9mIHRoZVxuICAgIC8vIHJvd3MgYXJyYXkgaXMgY2hhbmdlZC5cbiAgICB0aGlzLnJvd0hlaWdodHNDYWNoZS5jbGVhckNhY2hlKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSB0cmVlIG9ubHkgaWYgdGhlcmUgYXJlIHJvd3MgaW5zaWRlIHRoZSB0cmVlLlxuICAgIGlmICh0aGlzLnJvd3MgJiYgdGhpcy5yb3dzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgcm93RXhwYW5zaW9ucyA9IG5ldyBTZXQoKTtcbiAgICAgIGZvciAoY29uc3Qgcm93IG9mIHRoaXMucm93cykge1xuICAgICAgICBpZiAodGhpcy5nZXRSb3dFeHBhbmRlZChyb3cpKSB7XG4gICAgICAgICAgcm93RXhwYW5zaW9ucy5hZGQocm93KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnJvd0hlaWdodHNDYWNoZS5pbml0Q2FjaGUoe1xuICAgICAgICByb3dzOiB0aGlzLnJvd3MsXG4gICAgICAgIHJvd0hlaWdodDogdGhpcy5yb3dIZWlnaHQsXG4gICAgICAgIGRldGFpbFJvd0hlaWdodDogdGhpcy5nZXREZXRhaWxSb3dIZWlnaHQsXG4gICAgICAgIGV4dGVybmFsVmlydHVhbDogdGhpcy5zY3JvbGxiYXJWICYmIHRoaXMuZXh0ZXJuYWxQYWdpbmcsXG4gICAgICAgIHJvd0NvdW50OiB0aGlzLnJvd0NvdW50LFxuICAgICAgICByb3dJbmRleGVzOiB0aGlzLnJvd0luZGV4ZXMsXG4gICAgICAgIHJvd0V4cGFuc2lvbnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBpbmRleCBmb3IgdGhlIHZpZXcgcG9ydFxuICAgKi9cbiAgZ2V0QWRqdXN0ZWRWaWV3UG9ydEluZGV4KCk6IG51bWJlciB7XG4gICAgLy8gQ2FwdHVyZSB0aGUgcm93IGluZGV4IG9mIHRoZSBmaXJzdCByb3cgdGhhdCBpcyB2aXNpYmxlIG9uIHRoZSB2aWV3cG9ydC5cbiAgICAvLyBJZiB0aGUgc2Nyb2xsIGJhciBpcyBqdXN0IGJlbG93IHRoZSByb3cgd2hpY2ggaXMgaGlnaGxpZ2h0ZWQgdGhlbiBtYWtlIHRoYXQgYXMgdGhlXG4gICAgLy8gZmlyc3QgaW5kZXguXG4gICAgY29uc3Qgdmlld1BvcnRGaXJzdFJvd0luZGV4ID0gdGhpcy5pbmRleGVzLmZpcnN0O1xuXG4gICAgaWYgKHRoaXMuc2Nyb2xsYmFyViAmJiB0aGlzLnZpcnR1YWxpemF0aW9uKSB7XG4gICAgICBjb25zdCBvZmZzZXRTY3JvbGwgPSB0aGlzLnJvd0hlaWdodHNDYWNoZS5xdWVyeSh2aWV3UG9ydEZpcnN0Um93SW5kZXggLSAxKTtcbiAgICAgIHJldHVybiBvZmZzZXRTY3JvbGwgPD0gdGhpcy5vZmZzZXRZID8gdmlld1BvcnRGaXJzdFJvd0luZGV4IC0gMSA6IHZpZXdQb3J0Rmlyc3RSb3dJbmRleDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlld1BvcnRGaXJzdFJvd0luZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgRXhwYW5zaW9uIG9mIHRoZSByb3cgaS5lLiBpZiB0aGUgcm93IGlzIGV4cGFuZGVkIHRoZW4gaXQgd2lsbFxuICAgKiBjb2xsYXBzZSBhbmQgdmljZSB2ZXJzYS4gICBOb3RlIHRoYXQgdGhlIGV4cGFuZGVkIHN0YXR1cyBpcyBzdG9yZWQgYXNcbiAgICogYSBwYXJ0IG9mIHRoZSByb3cgb2JqZWN0IGl0c2VsZiBhcyB3ZSBoYXZlIHRvIHByZXNlcnZlIHRoZSBleHBhbmRlZCByb3dcbiAgICogc3RhdHVzIGluIGNhc2Ugb2Ygc29ydGluZyBhbmQgZmlsdGVyaW5nIG9mIHRoZSByb3cgc2V0LlxuICAgKi9cbiAgdG9nZ2xlUm93RXhwYW5zaW9uKHJvdzogYW55KTogdm9pZCB7XG4gICAgLy8gQ2FwdHVyZSB0aGUgcm93IGluZGV4IG9mIHRoZSBmaXJzdCByb3cgdGhhdCBpcyB2aXNpYmxlIG9uIHRoZSB2aWV3cG9ydC5cbiAgICBjb25zdCB2aWV3UG9ydEZpcnN0Um93SW5kZXggPSB0aGlzLmdldEFkanVzdGVkVmlld1BvcnRJbmRleCgpO1xuICAgIGNvbnN0IHJvd0V4cGFuZGVkSWR4ID0gdGhpcy5nZXRSb3dFeHBhbmRlZElkeChyb3csIHRoaXMucm93RXhwYW5zaW9ucyk7XG4gICAgY29uc3QgZXhwYW5kZWQgPSByb3dFeHBhbmRlZElkeCA+IC0xO1xuXG4gICAgLy8gSWYgdGhlIGRldGFpbFJvd0hlaWdodCBpcyBhdXRvIC0tPiBvbmx5IGluIGNhc2Ugb2Ygbm9uLXZpcnR1YWxpemVkIHNjcm9sbFxuICAgIGlmICh0aGlzLnNjcm9sbGJhclYgJiYgdGhpcy52aXJ0dWFsaXphdGlvbikge1xuICAgICAgY29uc3QgZGV0YWlsUm93SGVpZ2h0ID0gdGhpcy5nZXREZXRhaWxSb3dIZWlnaHQocm93KSAqIChleHBhbmRlZCA/IC0xIDogMSk7XG4gICAgICAvLyBjb25zdCBpZHggPSB0aGlzLnJvd0luZGV4ZXMuZ2V0KHJvdykgfHwgMDtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuZ2V0Um93SW5kZXgocm93KTtcbiAgICAgIHRoaXMucm93SGVpZ2h0c0NhY2hlLnVwZGF0ZShpZHgsIGRldGFpbFJvd0hlaWdodCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSB0b2dnbGVkIHJvdyBhbmQgdXBkYXRlIHRoaXZlIG5ldmVyZSBoZWlnaHRzIGluIHRoZSBjYWNoZS5cbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIHRoaXMucm93RXhwYW5zaW9ucy5zcGxpY2Uocm93RXhwYW5kZWRJZHgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvd0V4cGFuc2lvbnMucHVzaChyb3cpO1xuICAgIH1cblxuICAgIHRoaXMuZGV0YWlsVG9nZ2xlLmVtaXQoe1xuICAgICAgcm93czogW3Jvd10sXG4gICAgICBjdXJyZW50SW5kZXg6IHZpZXdQb3J0Rmlyc3RSb3dJbmRleFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cGFuZC9Db2xsYXBzZSBhbGwgdGhlIHJvd3Mgbm8gbWF0dGVyIHdoYXQgdGhlaXIgc3RhdGUgaXMuXG4gICAqL1xuICB0b2dnbGVBbGxSb3dzKGV4cGFuZGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgLy8gY2xlYXIgcHJldiBleHBhbnNpb25zXG4gICAgdGhpcy5yb3dFeHBhbnNpb25zID0gW107XG5cbiAgICAvLyBDYXB0dXJlIHRoZSByb3cgaW5kZXggb2YgdGhlIGZpcnN0IHJvdyB0aGF0IGlzIHZpc2libGUgb24gdGhlIHZpZXdwb3J0LlxuICAgIGNvbnN0IHZpZXdQb3J0Rmlyc3RSb3dJbmRleCA9IHRoaXMuZ2V0QWRqdXN0ZWRWaWV3UG9ydEluZGV4KCk7XG5cbiAgICBpZiAoZXhwYW5kZWQpIHtcbiAgICAgIGZvciAoY29uc3Qgcm93IG9mIHRoaXMucm93cykge1xuICAgICAgICB0aGlzLnJvd0V4cGFuc2lvbnMucHVzaChyb3cpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNjcm9sbGJhclYpIHtcbiAgICAgIC8vIFJlZnJlc2ggdGhlIGZ1bGwgcm93IGhlaWdodHMgY2FjaGUgc2luY2UgZXZlcnkgcm93IHdhcyBhZmZlY3RlZC5cbiAgICAgIHRoaXMucmVjYWxjTGF5b3V0KCk7XG4gICAgfVxuXG4gICAgLy8gRW1pdCBhbGwgcm93cyB0aGF0IGhhdmUgYmVlbiBleHBhbmRlZC5cbiAgICB0aGlzLmRldGFpbFRvZ2dsZS5lbWl0KHtcbiAgICAgIHJvd3M6IHRoaXMucm93cyxcbiAgICAgIGN1cnJlbnRJbmRleDogdmlld1BvcnRGaXJzdFJvd0luZGV4XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVjYWxjdWxhdGVzIHRoZSB0YWJsZVxuICAgKi9cbiAgcmVjYWxjTGF5b3V0KCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaFJvd0hlaWdodENhY2hlKCk7XG4gICAgdGhpcy51cGRhdGVJbmRleGVzKCk7XG4gICAgdGhpcy51cGRhdGVSb3dzKCk7XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIHRoZSBjb2x1bW5cbiAgICovXG4gIGNvbHVtblRyYWNraW5nRm4oaW5kZXg6IG51bWJlciwgY29sdW1uOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBjb2x1bW4uJCRpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSByb3cgcGlubmluZyBncm91cCBzdHlsZXNcbiAgICovXG4gIHN0eWxlc0J5R3JvdXAoZ3JvdXA6IHN0cmluZykge1xuICAgIGNvbnN0IHdpZHRocyA9IHRoaXMuY29sdW1uR3JvdXBXaWR0aHM7XG4gICAgY29uc3Qgb2Zmc2V0WCA9IHRoaXMub2Zmc2V0WDtcblxuICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgIHdpZHRoOiBgJHt3aWR0aHNbZ3JvdXBdfXB4YFxuICAgIH07XG5cbiAgICBpZiAoZ3JvdXAgPT09ICdsZWZ0Jykge1xuICAgICAgdHJhbnNsYXRlWFkoc3R5bGVzLCBvZmZzZXRYLCAwKTtcbiAgICB9IGVsc2UgaWYgKGdyb3VwID09PSAncmlnaHQnKSB7XG4gICAgICBjb25zdCBib2R5V2lkdGggPSBwYXJzZUludCh0aGlzLmlubmVyV2lkdGggKyAnJywgMCk7XG4gICAgICBjb25zdCB0b3RhbERpZmYgPSB3aWR0aHMudG90YWwgLSBib2R5V2lkdGg7XG4gICAgICBjb25zdCBvZmZzZXREaWZmID0gdG90YWxEaWZmIC0gb2Zmc2V0WDtcbiAgICAgIGNvbnN0IG9mZnNldCA9IG9mZnNldERpZmYgKiAtMTtcbiAgICAgIHRyYW5zbGF0ZVhZKHN0eWxlcywgb2Zmc2V0LCAwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgdGhlIHJvdyB3YXMgZXhwYW5kZWQgYW5kIHNldCBkZWZhdWx0IHJvdyBleHBhbnNpb24gd2hlbiByb3cgZXhwYW5zaW9uIGlzIGVtcHR5XG4gICAqL1xuICBnZXRSb3dFeHBhbmRlZChyb3c6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnJvd0V4cGFuc2lvbnMubGVuZ3RoID09PSAwICYmIHRoaXMuZ3JvdXBFeHBhbnNpb25EZWZhdWx0KSB7XG4gICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIHRoaXMuZ3JvdXBlZFJvd3MpIHtcbiAgICAgICAgdGhpcy5yb3dFeHBhbnNpb25zLnB1c2goZ3JvdXApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldFJvd0V4cGFuZGVkSWR4KHJvdywgdGhpcy5yb3dFeHBhbnNpb25zKSA+IC0xO1xuICB9XG5cbiAgZ2V0Um93RXhwYW5kZWRJZHgocm93OiBhbnksIGV4cGFuZGVkOiBhbnlbXSk6IG51bWJlciB7XG4gICAgaWYgKCFleHBhbmRlZCB8fCAhZXhwYW5kZWQubGVuZ3RoKSByZXR1cm4gLTE7XG5cbiAgICBjb25zdCByb3dJZCA9IHRoaXMucm93SWRlbnRpdHkocm93KTtcbiAgICByZXR1cm4gZXhwYW5kZWQuZmluZEluZGV4KChyKSA9PiB7XG4gICAgICBjb25zdCBpZCA9IHRoaXMucm93SWRlbnRpdHkocik7XG4gICAgICByZXR1cm4gaWQgPT09IHJvd0lkO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHJvdyBpbmRleCBnaXZlbiBhIHJvd1xuICAgKi9cbiAgZ2V0Um93SW5kZXgocm93OiBhbnkpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnJvd0luZGV4ZXMuZ2V0KHJvdykgfHwgMDtcbiAgfVxuXG4gIG9uVHJlZUFjdGlvbihyb3c6IGFueSkge1xuICAgIHRoaXMudHJlZUFjdGlvbi5lbWl0KHsgcm93IH0pO1xuICB9XG59XG4iXX0=