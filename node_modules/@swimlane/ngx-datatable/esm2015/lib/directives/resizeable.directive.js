/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { MouseEvent } from '../events';
import { takeUntil } from 'rxjs/operators';
export class ResizeableDirective {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.renderer = renderer;
        this.resizeEnabled = true;
        this.resize = new EventEmitter();
        this.resizing = false;
        this.element = element.nativeElement;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const renderer2 = this.renderer;
        this.resizeHandle = renderer2.createElement('span');
        if (this.resizeEnabled) {
            renderer2.addClass(this.resizeHandle, 'resize-handle');
        }
        else {
            renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
        }
        renderer2.appendChild(this.element, this.resizeHandle);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroySubscription();
        if (this.renderer.destroyNode) {
            this.renderer.destroyNode(this.resizeHandle);
        }
        else {
            this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
        }
    }
    /**
     * @return {?}
     */
    onMouseup() {
        this.resizing = false;
        if (this.subscription && !this.subscription.closed) {
            this._destroySubscription();
            this.resize.emit(this.element.clientWidth);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMousedown(event) {
        /** @type {?} */
        const isHandle = ((/** @type {?} */ (event.target))).classList.contains('resize-handle');
        /** @type {?} */
        const initialWidth = this.element.clientWidth;
        /** @type {?} */
        const mouseDownScreenX = event.screenX;
        if (isHandle) {
            event.stopPropagation();
            this.resizing = true;
            /** @type {?} */
            const mouseup = fromEvent(document, 'mouseup');
            this.subscription = mouseup.subscribe((/**
             * @param {?} ev
             * @return {?}
             */
            (ev) => this.onMouseup()));
            /** @type {?} */
            const mouseMoveSub = fromEvent(document, 'mousemove')
                .pipe(takeUntil(mouseup))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            (e) => this.move(e, initialWidth, mouseDownScreenX)));
            this.subscription.add(mouseMoveSub);
        }
    }
    /**
     * @param {?} event
     * @param {?} initialWidth
     * @param {?} mouseDownScreenX
     * @return {?}
     */
    move(event, initialWidth, mouseDownScreenX) {
        /** @type {?} */
        const movementX = event.screenX - mouseDownScreenX;
        /** @type {?} */
        const newWidth = initialWidth + movementX;
        /** @type {?} */
        const overMinWidth = !this.minWidth || newWidth >= this.minWidth;
        /** @type {?} */
        const underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;
        if (overMinWidth && underMaxWidth) {
            this.element.style.width = `${newWidth}px`;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
ResizeableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[resizeable]',
                host: {
                    '[class.resizeable]': 'resizeEnabled'
                }
            },] }
];
/** @nocollapse */
ResizeableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
ResizeableDirective.propDecorators = {
    resizeEnabled: [{ type: Input }],
    minWidth: [{ type: Input }],
    maxWidth: [{ type: Input }],
    resize: [{ type: Output }],
    onMousedown: [{ type: HostListener, args: ['mousedown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    ResizeableDirective.prototype.resizeEnabled;
    /** @type {?} */
    ResizeableDirective.prototype.minWidth;
    /** @type {?} */
    ResizeableDirective.prototype.maxWidth;
    /** @type {?} */
    ResizeableDirective.prototype.resize;
    /** @type {?} */
    ResizeableDirective.prototype.element;
    /** @type {?} */
    ResizeableDirective.prototype.subscription;
    /** @type {?} */
    ResizeableDirective.prototype.resizing;
    /**
     * @type {?}
     * @private
     */
    ResizeableDirective.prototype.resizeHandle;
    /**
     * @type {?}
     * @private
     */
    ResizeableDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL3Jlc2l6ZWFibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBR1osU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBNEIsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUTNDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBWTlCLFlBQVksT0FBbUIsRUFBVSxRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBWG5ELGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBSTdCLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUl6RCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBSXhCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsZUFBZTs7Y0FDUCxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVE7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDeEQ7YUFBTTtZQUNMLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1NBQ3ZFO1FBQ0QsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzlDO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzNGO0lBQ0gsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV0QixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUNsRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7Ozs7SUFHRCxXQUFXLENBQUMsS0FBaUI7O2NBQ3JCLFFBQVEsR0FBRyxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDOztjQUMxRSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXOztjQUN2QyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsT0FBTztRQUV0QyxJQUFJLFFBQVEsRUFBRTtZQUNaLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs7a0JBRWYsT0FBTyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO1lBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLEVBQWMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLENBQUM7O2tCQUV0RSxZQUFZLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUM7aUJBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3hCLFNBQVM7Ozs7WUFBQyxDQUFDLENBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixDQUFDLEVBQUM7WUFFN0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7Ozs7O0lBRUQsSUFBSSxDQUFDLEtBQWlCLEVBQUUsWUFBb0IsRUFBRSxnQkFBd0I7O2NBQzlELFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLGdCQUFnQjs7Y0FDNUMsUUFBUSxHQUFHLFlBQVksR0FBRyxTQUFTOztjQUVuQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUTs7Y0FDMUQsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVE7UUFFakUsSUFBSSxZQUFZLElBQUksYUFBYSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLFFBQVEsSUFBSSxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxvQkFBb0I7UUFDMUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7WUF6RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixJQUFJLEVBQUU7b0JBQ0osb0JBQW9CLEVBQUUsZUFBZTtpQkFDdEM7YUFDRjs7OztZQWxCQyxVQUFVO1lBT1YsU0FBUzs7OzRCQWFSLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUVMLE1BQU07MEJBd0NOLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUE1Q3JDLDRDQUF1Qzs7SUFDdkMsdUNBQTBCOztJQUMxQix1Q0FBMEI7O0lBRTFCLHFDQUF5RDs7SUFFekQsc0NBQXFCOztJQUNyQiwyQ0FBMkI7O0lBQzNCLHVDQUEwQjs7Ozs7SUFDMUIsMkNBQWtDOzs7OztJQUVELHVDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tICcuLi9ldmVudHMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmVzaXplYWJsZV0nLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5yZXNpemVhYmxlXSc6ICdyZXNpemVFbmFibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFJlc2l6ZWFibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSByZXNpemVFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbWluV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgbWF4V2lkdGg6IG51bWJlcjtcblxuICBAT3V0cHV0KCkgcmVzaXplOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHJlc2l6aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgcmVzaXplSGFuZGxlOiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgcmVuZGVyZXIyID0gdGhpcy5yZW5kZXJlcjtcbiAgICB0aGlzLnJlc2l6ZUhhbmRsZSA9IHJlbmRlcmVyMi5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgaWYgKHRoaXMucmVzaXplRW5hYmxlZCkge1xuICAgICAgcmVuZGVyZXIyLmFkZENsYXNzKHRoaXMucmVzaXplSGFuZGxlLCAncmVzaXplLWhhbmRsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXJlcjIuYWRkQ2xhc3ModGhpcy5yZXNpemVIYW5kbGUsICdyZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlJyk7XG4gICAgfVxuICAgIHJlbmRlcmVyMi5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQsIHRoaXMucmVzaXplSGFuZGxlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2Rlc3Ryb3lTdWJzY3JpcHRpb24oKTtcbiAgICBpZiAodGhpcy5yZW5kZXJlci5kZXN0cm95Tm9kZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5kZXN0cm95Tm9kZSh0aGlzLnJlc2l6ZUhhbmRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMucmVzaXplSGFuZGxlKSwgdGhpcy5yZXNpemVIYW5kbGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2V1cCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2l6aW5nID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24gJiYgIXRoaXMuc3Vic2NyaXB0aW9uLmNsb3NlZCkge1xuICAgICAgdGhpcy5fZGVzdHJveVN1YnNjcmlwdGlvbigpO1xuICAgICAgdGhpcy5yZXNpemUuZW1pdCh0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gIG9uTW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgaXNIYW5kbGUgPSAoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXNpemUtaGFuZGxlJyk7XG4gICAgY29uc3QgaW5pdGlhbFdpZHRoID0gdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IG1vdXNlRG93blNjcmVlblggPSBldmVudC5zY3JlZW5YO1xuXG4gICAgaWYgKGlzSGFuZGxlKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMucmVzaXppbmcgPSB0cnVlO1xuXG4gICAgICBjb25zdCBtb3VzZXVwID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2V1cCcpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBtb3VzZXVwLnN1YnNjcmliZSgoZXY6IE1vdXNlRXZlbnQpID0+IHRoaXMub25Nb3VzZXVwKCkpO1xuXG4gICAgICBjb25zdCBtb3VzZU1vdmVTdWIgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdtb3VzZW1vdmUnKVxuICAgICAgICAucGlwZSh0YWtlVW50aWwobW91c2V1cCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKGU6IE1vdXNlRXZlbnQpID0+IHRoaXMubW92ZShlLCBpbml0aWFsV2lkdGgsIG1vdXNlRG93blNjcmVlblgpKTtcblxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKG1vdXNlTW92ZVN1Yik7XG4gICAgfVxuICB9XG5cbiAgbW92ZShldmVudDogTW91c2VFdmVudCwgaW5pdGlhbFdpZHRoOiBudW1iZXIsIG1vdXNlRG93blNjcmVlblg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IG1vdmVtZW50WCA9IGV2ZW50LnNjcmVlblggLSBtb3VzZURvd25TY3JlZW5YO1xuICAgIGNvbnN0IG5ld1dpZHRoID0gaW5pdGlhbFdpZHRoICsgbW92ZW1lbnRYO1xuXG4gICAgY29uc3Qgb3Zlck1pbldpZHRoID0gIXRoaXMubWluV2lkdGggfHwgbmV3V2lkdGggPj0gdGhpcy5taW5XaWR0aDtcbiAgICBjb25zdCB1bmRlck1heFdpZHRoID0gIXRoaXMubWF4V2lkdGggfHwgbmV3V2lkdGggPD0gdGhpcy5tYXhXaWR0aDtcblxuICAgIGlmIChvdmVyTWluV2lkdGggJiYgdW5kZXJNYXhXaWR0aCkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLndpZHRoID0gYCR7bmV3V2lkdGh9cHhgO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Rlc3Ryb3lTdWJzY3JpcHRpb24oKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG59XG4iXX0=