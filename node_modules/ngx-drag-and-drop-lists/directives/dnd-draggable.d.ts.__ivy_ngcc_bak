import { OnDestroy, OnInit, ElementRef, EventEmitter } from '@angular/core';
import { DndState } from '../services';
import { DndDraggableConfig } from '../index';
export declare class DndDraggable implements OnInit, OnDestroy {
    private readonly element;
    private readonly dndState;
    option: DndDraggableConfig;
    dndType: string;
    dndObject: HTMLElement;
    set disableDrag(disable: string | boolean);
    dndDragStart: EventEmitter<any>;
    dndDragEnd: EventEmitter<any>;
    dndCopied: EventEmitter<any>;
    dndLinked: EventEmitter<any>;
    dndMoved: EventEmitter<any>;
    dndCanceled: EventEmitter<any>;
    dndSelected: EventEmitter<any>;
    private readonly dragState;
    private dropSubscription;
    private draggableString;
    constructor(element: ElementRef, dndState: DndState);
    ngOnInit(): void;
    ngOnDestroy(): void;
    handleDragStart(event: DragEvent): void;
    handleDragEnd(event: DragEvent): void;
    handleClick(event: Event): void;
    private findElementWithAttribute;
}
