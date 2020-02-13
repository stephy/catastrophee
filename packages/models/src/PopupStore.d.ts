import { PopupPositions } from "./Popup";
import { PopupList } from "./PopupList";
export declare class PopupStore {
    stack: PopupList;
    length: number;
    constructor();
    clear: () => void;
    pop: () => void;
    set: (id: string, title: string, target: EventTarget | PopupPositions, data: object) => void;
    setAllInactive: () => void;
    get active(): {
        id: string;
        target: any;
        data: any;
        index: any;
    };
    get activeIds(): any[];
}
