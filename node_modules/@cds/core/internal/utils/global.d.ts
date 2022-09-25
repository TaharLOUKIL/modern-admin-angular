import { FeatureSupportMatrix } from './supports.js';
export interface CDSGlobal {
    _version: string[];
    _loadedElements: string[];
    _react: {
        version: string;
    };
    _supports: FeatureSupportMatrix;
    getVersion: () => CDSLog;
    logVersion: () => void;
    environment: {
        /** Set to true for production env to disable dev time logging and tooling */
        production: boolean;
    };
}
export interface CDSLog {
    versions: string[];
    loadedElements: string[];
    userAgent: string;
    supports: {};
    angularVersion?: string | undefined;
    angularJSVersion?: string | undefined;
    reactVersion?: string | undefined;
    vueVersion?: string | undefined;
    environment: {
        production: boolean;
    };
}
declare global {
    interface Window {
        CDS: CDSGlobal;
    }
}
export declare function setupCDSGlobal(): void;
