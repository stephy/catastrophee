import { action, observable, computed } from "mobx";
import { Form } from "./Form";

export interface FormType {
  id: string;
  title: string;
  fields: object;
  options?: object;
  required?: Array<string>;
  validations?: object;
}

export class Forms {
  @observable forms: { [id: string]: Form };
  @observable updated: number;

  constructor() {
    this.forms = {};
    this.updated = new Date().getTime();
  }

  @computed get registered() {
    if (this.updated > 0) {
      return this.forms;
    }
    return this.forms;
  }

  @action forceUpdate = () => {
    this.updated = new Date().getTime();
  };

  @action init = (form: FormType) => {
    this.forms[form.id] = new Form(form);
  };

  @action getForm = (formId: string): Form => {
    return this.registered[formId] || undefined;
  };

  @action clearAllFields = (formId: string) => {
    const form: Form = this.getForm(formId);
    if (form) {
      form.clearFields();
    }
  };

  @action getFormData = formId => {
    const fields = this.getForm(formId).fields;
    const formdata = {};
    Object.keys(fields).forEach(key => {
      formdata[key] = fields[key].value;
    });
    return formdata;
  };
}

export const forms = new Forms();
