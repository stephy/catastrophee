export interface FormFieldType {
    id: string;
    value: any;
}
export declare class Field {
    id: string;
    value: any;
    constructor(props: FormFieldType);
    get getValue(): any;
    set: (value: any) => void;
}
