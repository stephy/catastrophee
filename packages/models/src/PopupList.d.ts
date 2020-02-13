import { Popup } from "./Popup";
export declare class PopupList {
    idToEvent: {
        [id: string]: Popup;
    };
    static fromValue(value: any): PopupList;
    getList(): any[];
}
