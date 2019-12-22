import { observable, action, computed } from "mobx";

export interface FormFieldType {
  id: string;
  value: any;
}

export class Field {
  id: string;
  @observable value: any;

  constructor(props: FormFieldType) {
    this.id = props.id;
    this.value = props.value;
  }

  @computed get getValue() {
    return this.value;
  }

  @action set = value => {
    if (value === null) {
      this.value = "";
    } else {
      this.value = value;
    }
  };
}
