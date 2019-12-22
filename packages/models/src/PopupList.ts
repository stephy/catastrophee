import { action, observable } from "mobx";
import { Popup } from "./Popup";

export class PopupList {
  @observable idToEvent: { [id: string]: Popup } = {};

  @action
  static fromValue(value: any) {
    const result = new PopupList();

    if (!value) {
      return result;
    }

    Object.keys(value).forEach(id => {
      result.idToEvent[id] = Popup.fromValue(value[id]);
    });

    return result;
  }

  @action getList() {
    const listKeys = Object.keys(this).filter(key => {
      return key !== "idToEvent";
    });
    if (listKeys.length > 0) {
      return listKeys.map(key => this[key]);
    }

    return [];
  }
}
