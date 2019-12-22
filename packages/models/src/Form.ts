import { observable, action, computed, toJS } from "mobx";
import { Field } from "./Field";
import { FormType } from "./forms";

interface Fields {
  [id: string]: Field;
}

interface Options {
  [id: string]: any;
}

export class Form {
  id: string;
  @observable title: string;
  @observable fields: Fields;
  @observable options?: Options;
  @observable required?: Array<string>;
  @observable validations?: object; //{ key: () => boolean}
  @observable validationStamp?: number;

  constructor(props: FormType) {
    this.id = props.id;
    this.title = props.title;
    this.fields = this.createFields(props.fields);
    this.options = props.options || {};
    this.required = props.required || []; // required fields
    this.validations = props.validations || {};
    this.validationStamp = new Date().getTime();
  }

  @computed get stamp() {
    return this.validationStamp;
  }
  @computed get currentOptions() {
    return this.options || {};
  }

  @computed get currentRequired() {
    if (this.validationStamp && this.required.length > 0) {
      return this.required || [];
    }
    return [];
  }
  @computed get getData() {
    const data = {};
    Object.keys(this.fields).forEach(key => {
      data[key] = toJS(this.fields[key].value);
      const currentData = data[key];

      if (currentData) {
        // remove typename from values;
        Object.keys(data[key]).forEach(key => {
          if (key === "__typename") {
            delete currentData.__typename;
          }
        });
      }
    });
    return data;
  }

  // @computed get pendingUploads() {
  //   const list = Object.keys(this.uploads).filter(key => {
  //     if (
  //       this.uploads[key] &&
  //       this.uploads[key].getStatus === PromiseStatusOptions.pending
  //     ) {
  //       return true;
  //     }
  //   });

  //   return list.length > 0;
  // }

  @computed get fieldsStatus() {
    const validationStamp = this.validationStamp;
    const fields = Object.keys(this.fields);
    const required = this.currentRequired.length > 0;
    const fieldsRequiringAttention = {};
    fields.forEach(field => {
      let isInvalid = false;
      let isMissing = false;
      const isRequired = required && this.currentRequired.includes(field);
      const fieldValue = this.fields[field].value;
      if (this.validations[field]) {
        isInvalid = this.validations[field](fieldValue);
      }

      isMissing =
        fieldValue === null || fieldValue === undefined || fieldValue === "";
      if (Array.isArray(fieldValue) && fieldValue.length === 0) {
        isMissing = true;
      }
      fieldsRequiringAttention[field] = {
        validationStamp,
        isMissing,
        isRequired,
        isInvalid,
        valid:
          (isRequired && !isMissing && !isInvalid) ||
          (!isRequired && !isInvalid)
      };
    });
    return fieldsRequiringAttention;
  }

  @computed get isValid() {
    const fields = this.fieldsStatus;
    let invalidFields: any = [];
    if (
      this.validationStamp !== 0 &&
      this.required.length > 0 &&
      Object.keys(fields).length > 0
    ) {
      invalidFields = Object.keys(fields).filter(
        key => !this.fieldsStatus[key].valid && this.required.includes(key)
      );
    }
    return invalidFields.length === 0;
  }

  @computed get requiredFields() {
    return this.required;
  }

  @computed get invalidFields() {
    return this.validateRules();
  }

  @action updateStamp = () => {
    this.validationStamp = new Date().getTime();
  };
  @action setRequiredFields = (requiredFields: string[]) => {
    this.required = requiredFields;
    this.updateStamp();
  };

  @action setAdditionalRequiredFields = (
    additionalFields: string[] | null,
    removeFields?: string[]
  ) => {
    if (additionalFields && additionalFields !== null) {
      this.required = [...this.required, ...additionalFields];
    }

    const lookup = {};
    // remove dups
    this.required = this.required.filter(required => {
      if (!lookup[required]) {
        lookup[required] = true;
        return true;
      }
      return false;
    });

    removeFields &&
      removeFields.forEach((field: string, i: number) => {
        const found = this.required.indexOf(field);
        if (found >= 0) {
          delete this.required[found];
        }
      });
  };

  @action createFields = fields => {
    const observableFields = {};
    Object.keys(fields).forEach(key => {
      const value = fields[key];
      observableFields[key] = new Field({ id: key, value });
    });
    return observableFields;
  };

  @action clearFields = () => {
    Object.keys(this.fields).forEach(key => {
      this.fields[key].set(null);
    });
  };

  @action autofill(fields: object) {
    Object.keys(fields).forEach(key => {
      this.fields[key].set(fields[key]);
    });
  }

  @action validate() {
    this.validationStamp = new Date().getTime();
  }

  @action validateRules() {
    const invalidFields = Object.keys(this.validations).filter(key => {
      return this.validations[key](this.fields[key].value);
    });

    return invalidFields || [];
  }
}
