declare class Scrolltracker {
    x: number;
    y: number;
    id: string;
    constructor();
    track: (id: any) => void;
    untrack: () => void;
    onmousewheel: (e: any) => void;
    scrollToSavedPosition: () => void;
}
export declare const scrolltracker: Scrolltracker;
export {};
