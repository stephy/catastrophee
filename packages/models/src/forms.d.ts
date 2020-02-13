import { Form } from "./Form";
export interface FormType {
    id: string;
    title: string;
    fields: object;
    options?: object;
    required?: Array<string>;
    validations?: object;
}
export declare class Forms {
    forms: {
        [id: string]: Form;
    };
    updated: number;
    constructor();
    get registered(): {
        [id: string]: Form;
    };
    forceUpdate: () => void;
    init: (form: FormType) => void;
    getForm: (formId: string) => Form;
    clearAllFields: (formId: string) => void;
    getFormData: (formId: any) => {};
}
export declare const forms: Forms;
