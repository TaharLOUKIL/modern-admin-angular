import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { SidebarContainer } from './sidebar-container.component';
export declare class Sidebar implements OnInit, OnChanges, OnDestroy {
    private _container;
    private _ref;
    opened: boolean;
    openedChange: EventEmitter<boolean>;
    mode: 'over' | 'push' | 'slide';
    dock: boolean;
    dockedSize: string;
    position: 'start' | 'end' | 'left' | 'right' | 'top' | 'bottom';
    animate: boolean;
    autoCollapseHeight: number;
    autoCollapseWidth: number;
    autoCollapseOnInit: boolean;
    sidebarClass: string;
    ariaLabel: string;
    trapFocus: boolean;
    autoFocus: boolean;
    showBackdrop: boolean;
    closeOnClickBackdrop: boolean;
    closeOnClickOutside: boolean;
    keyClose: boolean;
    keyCode: number;
    onOpenStart: EventEmitter<null>;
    onOpened: EventEmitter<null>;
    onCloseStart: EventEmitter<null>;
    onClosed: EventEmitter<null>;
    onTransitionEnd: EventEmitter<null>;
    onModeChange: EventEmitter<string>;
    onPositionChange: EventEmitter<string>;
    /** @internal */
    _onRerender: EventEmitter<null>;
    /** @internal */
    _elSidebar: ElementRef;
    private _focusableElementsString;
    private _focusableElements;
    private _focusedBeforeOpen;
    private _tabIndexAttr;
    private _tabIndexIndicatorAttr;
    private _wasCollapsed;
    private _shouldAnimate;
    private _clickEvent;
    private _onClickOutsideAttached;
    private _onKeyDownAttached;
    private _onResizeAttached;
    private _isBrowser;
    constructor(_container: SidebarContainer, _ref: ChangeDetectorRef, platformId: Object);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /**
     * Opens the sidebar and emits the appropriate events.
     */
    open(): void;
    /**
     * Closes the sidebar and emits the appropriate events.
     */
    close(): void;
    /**
     * Manually trigger a re-render of the container. Useful if the sidebar contents might change.
     */
    triggerRerender(): void;
    /**
     * @internal
     *
     * Computes the transform styles for the sidebar template.
     *
     * @return {CSSStyleDeclaration} The transform styles, with the WebKit-prefixed version as well.
     */
    _getStyle(): CSSStyleDeclaration;
    /**
     * @internal
     *
     * Handles the `transitionend` event on the sidebar to emit the onOpened/onClosed events after the transform
     * transition is completed.
     */
    _onTransitionEnd(e: TransitionEvent): void;
    /**
     * Returns whether focus should be trapped within the sidebar.
     *
     * @return {boolean} Trap focus inside sidebar.
     */
    private readonly _shouldTrapFocus;
    /**
     * Sets focus to the first focusable element inside the sidebar.
     */
    private _focusFirstItem;
    /**
     * Loops focus back to the start of the sidebar if set to do so.
     */
    private _onFocusTrap;
    /**
     * Handles the ability to focus sidebar elements when it's open/closed to ensure that the sidebar is inert when
     * appropriate.
     */
    private _setFocused;
    /**
     * Initializes event handlers for the closeOnClickOutside and keyClose options.
     */
    private _initCloseListeners;
    private _initCloseClickListener;
    private _initCloseKeyDownListener;
    /**
     * Destroys all event handlers from _initCloseListeners.
     */
    private _destroyCloseListeners;
    private _destroyCloseClickListener;
    private _destroyCloseKeyDownListener;
    /**
     * Handles `click` events on anything while the sidebar is open for the closeOnClickOutside option.
     * Programatically closes the sidebar if a click occurs outside the sidebar.
     *
     * @param e {MouseEvent} Mouse click event.
     */
    private _onClickOutside;
    /**
     * Handles the `keydown` event for the keyClose option.
     *
     * @param e {KeyboardEvent} Normalized keydown event.
     */
    private _onKeyDown;
    private _initCollapseListeners;
    private _destroyCollapseListeners;
    private _collapse;
    /**
     * @internal
     *
     * Returns the rendered height of the sidebar (or the docked size).
     * This is used in the sidebar container.
     *
     * @return {number} Height of sidebar.
     */
    readonly _height: number;
    /**
     * @internal
     *
     * Returns the rendered width of the sidebar (or the docked size).
     * This is used in the sidebar container.
     *
     * @return {number} Width of sidebar.
     */
    readonly _width: number;
    /**
     * @internal
     *
     * Returns the docked size as a number.
     *
     * @return {number} Docked size.
     */
    readonly _dockedSize: number;
    /**
     * @internal
     *
     * Returns whether the sidebar is over mode.
     *
     * @return {boolean} Sidebar's mode is "over".
     */
    readonly _isModeOver: boolean;
    /**
     * @internal
     *
     * Returns whether the sidebar is push mode.
     *
     * @return {boolean} Sidebar's mode is "push".
     */
    readonly _isModePush: boolean;
    /**
     * @internal
     *
     * Returns whether the sidebar is slide mode.
     *
     * @return {boolean} Sidebar's mode is "slide".
     */
    readonly _isModeSlide: boolean;
    /**
     * @internal
     *
     * Returns whether the sidebar is "docked" -- i.e. it is closed but in dock mode.
     *
     * @return {boolean} Sidebar is docked.
     */
    readonly _isDocked: boolean;
    /**
     * @internal
     *
     * Returns whether the sidebar is positioned at the left or top.
     *
     * @return {boolean} Sidebar is positioned at the left or top.
     */
    readonly _isLeftOrTop: boolean;
    /**
     * @internal
     *
     * Returns whether the sidebar is positioned at the left or right.
     *
     * @return {boolean} Sidebar is positioned at the left or right.
     */
    readonly _isLeftOrRight: boolean;
    /**
     * @internal
     *
     * Returns whether the sidebar is inert -- i.e. the contents cannot be focused.
     *
     * @return {boolean} Sidebar is inert.
     */
    readonly _isInert: boolean;
    /**
     * "Normalizes" position. For example, "start" would be "left" if the page is LTR.
     */
    private _normalizePosition;
}
