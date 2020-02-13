export declare enum PopupPositions {
    fullscreen = "fullscreen",
    center = "center",
    left = "left",
    right = "right"
}
interface PopupType {
    data?: object;
    id: string | null;
    index: number;
    target?: EventTarget | PopupPositions | null;
    title: string;
}
export declare class Popup {
    data: object;
    id: string | null;
    index: number;
    target: EventTarget | PopupPositions | null;
    active: boolean;
    title: string;
    constructor(props: PopupType);
    setActive: () => void;
    setInnactive: () => void;
    static fromValue(popup: PopupType): Popup;
}
export {};
