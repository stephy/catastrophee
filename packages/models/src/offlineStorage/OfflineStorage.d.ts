import { NetworkStatus } from "../networkStatus/NetworkStatus";
export declare class OfflineStorage {
    localVersion?: string;
    networkStatus: NetworkStatus;
    serverVersion?: string;
    snapshotFn?: () => void;
    lastSyncedTime?: number;
    browserSupport: boolean;
    cacheWorker: Worker;
    constructor();
    get hasBrowserSupport(): boolean;
    get hasConflicts(): boolean;
    responseCacheWorker: (message: any) => void;
    startLoggerWebWorker: (scriptPath: string) => void;
    registerScript: (scriptPath: string) => void;
    setServerVersion: (serverVersion: any) => void;
    setLocalVersion: (localVersion: any) => void;
    setSnapshotFn: (fn: () => any) => void;
    saveCurrentAppState: () => boolean;
    downloadCurrentChanges: () => void;
    updateLocalChanges: (localChanges: any) => void;
    resetVersions: () => void;
    syncLocalChangesToServer: () => void;
}
export declare const offlineStorage: OfflineStorage;
