import * as React from "react";
interface ItemType {
    id: string;
    label: string;
    onSelect: (id: string) => void;
}
interface StylesType {
    container?: object;
    option?: object;
    label?: object;
    input?: object;
    optionLabel?: object;
    checkmark?: object;
}
interface RadioInputType {
    id: string;
    title?: string;
    options: Array<ItemType>;
    selectedId: string;
    style?: StylesType;
}
export declare const RadioInput: React.SFC<RadioInputType>;
export {};
