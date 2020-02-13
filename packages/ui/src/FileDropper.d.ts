import * as React from "react";
import { CssPropertyTypes } from "@catastrophee/styles";
export interface FileDropperStylesType {
    container?: CssPropertyTypes;
    wrapper?: CssPropertyTypes;
    bodyWrapper?: CssPropertyTypes;
    center?: CssPropertyTypes;
    previewWrapper?: CssPropertyTypes;
    accepting?: CssPropertyTypes;
    icon?: CssPropertyTypes;
    upload?: CssPropertyTypes;
    uploadBtn?: CssPropertyTypes;
    uploadInput?: CssPropertyTypes;
    over?: CssPropertyTypes;
    invalidFileName?: CssPropertyTypes;
    errorMessage?: CssPropertyTypes;
    messageWrapper?: CssPropertyTypes;
    acceptedMessage?: CssPropertyTypes;
}
export interface FileMetadataType {
    lastModified: number;
    lastModifiedDate: string;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
}
export interface FileDropperType {
    id: string;
    label?: string;
    onFileDrop: (file: FileList[]) => void;
    showIcon?: boolean;
    style?: FileDropperStylesType;
}
export declare class FileDropper extends React.Component<FileDropperType, any> {
    private FileDropper;
    constructor(props: FileDropperType);
    handleDrop: (e: any) => void;
    handleDragOver: (e: any) => void;
    handleDragLeave: (e: any) => void;
    render(): JSX.Element;
}
