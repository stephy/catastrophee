export declare class IndexedDb {
    indexedDb: any;
    dbVersion: number;
    dbname: string;
    request: any;
    db: any;
    objectStore: any;
    storeId: string;
    constructor(dbname: string, storeId?: string);
    open: (dbname: string, version: number) => void;
    createObjectStore: (db: any) => any;
    clear: () => void;
    deleteEntry: (id: any) => Promise<unknown>;
    storeData: (id: any, data: any) => void;
    getData: (id: any) => Promise<unknown>;
    resetObjectStore: () => void;
    putImageInDb: (id: any, blob: any) => void;
    getImageFile: (filename: any) => void;
}
