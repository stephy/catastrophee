import * as React from "react";
interface DocumentPreviewType {
    url: string;
    filename: string;
    type: "PDF" | "DOC";
}
export declare class DocumentPreview extends React.Component<DocumentPreviewType, {}> {
    render(): JSX.Element;
}
export {};
