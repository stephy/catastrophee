import { Field } from "./Field";
import { FormType } from "./forms";
interface Fields {
    [id: string]: Field;
}
interface Options {
    [id: string]: any;
}
export declare class Form {
    id: string;
    title: string;
    fields: Fields;
    options?: Options;
    required?: Array<string>;
    validations?: object;
    validationStamp?: number;
    constructor(props: FormType);
    get stamp(): number;
    get currentOptions(): Options;
    get currentRequired(): string[];
    get getData(): {};
    get fieldsStatus(): {};
    get isValid(): boolean;
    get requiredFields(): string[];
    get invalidFields(): string[];
    updateStamp: () => void;
    setRequiredFields: (requiredFields: string[]) => void;
    setAdditionalRequiredFields: (additionalFields: string[], removeFields?: string[]) => void;
    createFields: (fields: any) => {};
    clearFields: () => void;
    autofill(fields: object): void;
    validate(): void;
    validateRules(): string[];
}
export {};
