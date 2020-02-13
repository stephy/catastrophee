import { PopupStore } from "./PopupStore";
export declare class Drawer extends PopupStore {
    visibilityWidth: number;
    constructor();
    get isOpen(): boolean;
    get width(): number;
    open: () => void;
    close: () => void;
    toggle: () => void;
}
export default Drawer;
