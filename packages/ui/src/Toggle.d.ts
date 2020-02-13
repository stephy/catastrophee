import * as React from "react";
import { CssPropertyTypes } from "@catastrophee/styles";
interface ToggleStyleType {
    container?: CssPropertyTypes;
    label?: CssPropertyTypes;
    presentation?: CssPropertyTypes;
    thumb?: CssPropertyTypes;
    wrapper?: CssPropertyTypes;
    on?: CssPropertyTypes;
    off?: CssPropertyTypes;
    disabled?: CssPropertyTypes;
}
interface ToggleType {
    on: boolean;
    onToggle: () => void;
    style?: ToggleStyleType;
    disabled?: boolean;
    label?: string;
}
export declare const Toggle: React.SFC<ToggleType>;
export {};
