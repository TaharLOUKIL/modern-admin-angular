/**
 * FocusTrapTracker is a static class that keeps track of the active element with focus trap,
 * in case there are multiple in a given page.
 */
export declare const CDS_FOCUS_TRAP_ID_ATTR = "focus-trap-id";
export declare const CDS_FOCUS_TRAP_DOCUMENT_ATTR = "cds-focus-trap-ids";
export declare class FocusTrapTracker {
    static getDocroot(): HTMLElement;
    static getTrapIds(): string[];
    static setTrapIds(trapIds: string[]): void;
    static setCurrent(myTrapId: string): void;
    static activatePreviousCurrent(): void;
    static getCurrentTrapId(): string;
    static getCurrent(): HTMLElement | null;
}
