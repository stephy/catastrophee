import * as React from "react";
import { SpinnerType } from "./DefaultSpinner";
import { CssPropertyTypes } from "@catastrophee/styles";
interface LoadingStylesType {
    container?: CssPropertyTypes;
    content?: CssPropertyTypes;
    loadingWrapper?: CssPropertyTypes;
    message?: CssPropertyTypes;
}
interface LoadingScreenType {
    id: string;
    message?: string;
    style?: LoadingStylesType;
    spinner?: SpinnerType;
}
export declare const LoadingScreen: React.SFC<LoadingScreenType>;
export {};
