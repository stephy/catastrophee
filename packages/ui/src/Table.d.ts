import * as React from "react";
interface TableType {
    id?: string;
    data: {
        header: Array<any>;
        items: Array<any>;
    };
    width?: Number;
    height?: Number;
    onRowClick?: (item: any) => void;
}
export declare const Table: React.SFC<TableType>;
export {};
