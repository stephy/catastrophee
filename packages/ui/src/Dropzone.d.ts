import * as React from "react";
import { CssPropertyTypes } from "@catastrophee/styles";
export declare enum SupportedPreviewTypes {
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    DOCUMENT = "DOCUMENT",
    AUDIO = "AUDIO"
}
export interface FileDataType {
    width?: number;
    height?: number;
    content?: any;
    file: any;
}
export interface DropzoneStylesType {
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
export interface DropzoneType {
    id: string;
    onFileDrop: (fileData: FileDataType, previewUrl?: string) => void;
    onError?: () => void;
    acceptedFileTypes: Array<string>;
    height?: string;
    width?: string;
    showIcon?: boolean;
    previewUrl?: string;
    previewType?: SupportedPreviewTypes;
    acceptedFileLabel?: string;
    style?: DropzoneStylesType;
}
export declare class Dropzone extends React.Component<DropzoneType, any> {
    private dropzone;
    constructor(props: DropzoneType);
    loadPDFPreview: (files: any) => void;
    loadAudioPreview: (files: any) => void;
    loadImagePreview: (files: any) => void;
    loadVideoPreview: (files: any) => void;
    handleDrop: (e: any) => void;
    handleDragOver: (e: any) => void;
    handleDragLeave: (e: any) => void;
    render(): JSX.Element;
}
