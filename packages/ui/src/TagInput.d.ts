import * as React from "react";
import { TagWithActionType } from "./TagWithAction";
interface InputTagType {
    id: string;
    label: string;
    color?: string;
}
interface TagInputType {
    tags: InputTagType[];
    onDeleteTag: (tag: TagWithActionType) => void;
    onChange: (e: any, tags: TagWithActionType[]) => void;
}
export declare class TagInput extends React.Component<TagInputType, {
    tags: Array<InputTagType>;
    currentValue: string;
}> {
    constructor(props: any);
    componentWillUpdate(nextProps: any): void;
    removeTag: (e: any, tag: TagWithActionType) => void;
    handleKeyDown: (e: any) => void;
    render(): JSX.Element;
}
export default TagInput;
