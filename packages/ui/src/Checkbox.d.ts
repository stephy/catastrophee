import * as React from "react";
import { CssPropertyTypes } from "@catastrophee/styles";
interface CheckboxStyle {
    icon: CssPropertyTypes;
}
interface CheckboxType {
    id: string;
    checked: boolean;
    onToggle: () => void;
    style?: CheckboxStyle;
    disabled?: boolean;
    label?: any;
}
export declare const Checkbox: React.SFC<CheckboxType>;
export {};
