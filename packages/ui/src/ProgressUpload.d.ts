import * as React from "react";
import { CssPropertyTypes } from "@catastrophee/styles";
export interface UploadStyleType {
    container?: CssPropertyTypes;
    loader?: CssPropertyTypes;
    wrapper?: CssPropertyTypes;
    bar?: CssPropertyTypes;
    label?: CssPropertyTypes;
}
export interface ProgressUploadType {
    style?: UploadStyleType;
    progress: number;
}
export declare const ProgressUpload: React.SFC<ProgressUploadType>;
