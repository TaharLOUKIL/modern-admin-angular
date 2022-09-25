import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Sidebar } from './sidebar.component';
export declare class SidebarContainer implements AfterContentInit, OnChanges, OnDestroy {
    private _ref;
    animate: boolean;
    allowSidebarBackdropControl: boolean;
    showBackdrop: boolean;
    showBackdropChange: EventEmitter<boolean>;
    onBackdropClicked: EventEmitter<null>;
    contentClass: string;
    backdropClass: string;
    private _sidebars;
    private _isBrowser;
    constructor(_ref: ChangeDetectorRef, platformId: Object);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    /**
     * @internal
     *
     * Adds a sidebar to the container's list of sidebars.
     *
     * @param sidebar {Sidebar} A sidebar within the container to register.
     */
    _addSidebar(sidebar: Sidebar): void;
    /**
     * @internal
     *
     * Removes a sidebar from the container's list of sidebars.
     *
     * @param sidebar {Sidebar} The sidebar to remove.
     */
    _removeSidebar(sidebar: Sidebar): void;
    /**
     * @internal
     *
     * Computes `margin` value to push page contents to accommodate open sidebars as needed.
     *
     * @return {CSSStyleDeclaration} margin styles for the page content.
     */
    _getContentStyle(): CSSStyleDeclaration;
    /**
     * @internal
     *
     * Closes sidebars when the backdrop is clicked, if they have the
     * `closeOnClickBackdrop` option set.
     */
    _onBackdropClicked(): void;
    /**
     * Subscribes from a sidebar events to react properly.
     */
    private _subscribe;
    /**
     * Unsubscribes from all sidebars.
     */
    private _unsubscribe;
    /**
     * Check if we should show the backdrop when a sidebar is toggled.
     */
    private _onToggle;
    /**
     * Triggers change detection to recompute styles.
     */
    private _markForCheck;
}
