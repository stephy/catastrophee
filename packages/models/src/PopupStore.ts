import { action, computed, observable } from "mobx";
import { Popup, PopupPositions } from "./Popup";
import { PopupList } from "./PopupList";

export class PopupStore {
  @observable stack: PopupList;
  @observable length: number;

  constructor() {
    this.stack = new PopupList();
    this.length = 0;
  }

  @action clear = () => {
    this.stack = new PopupList();
    this.length = 0;
  };

  @action pop = () => {
    const length = this.length;
    // set the new to be last item to active
    if (length > 1) {
      this.stack.getList().forEach(popup => {
        if (popup.index === length - 2) {
          // set active
          this.stack[popup.id].active = true;
        }
      });

      // delete top popup
      this.stack.getList().forEach(popup => {
        if (popup.index === length - 1) {
          delete this.stack[popup.id];
          this.length = length - 1;
        }
      });
    }

    if (length === 1) {
      const id = this.stack.getList()[0].id;
      delete this.stack[id];
      this.length = 0;
    }
  };

  @action set = (
    id: string,
    title: string,
    target: EventTarget | PopupPositions,
    data: object
  ) => {
    // then add new pop up, new popups are set to active by default
    const index = this.length || 0;
    if ((this.active && this.active.id !== id) || index === 0) {
      // if popup is being stacked, set all previous popups to innactive
      this.setAllInactive();
      this.stack[id] = new Popup({
        id,
        target,
        index,
        data,
        title
      });
      this.length = index + 1;
    }
  };

  @action setAllInactive = () => {
    this.stack.getList().forEach(popup => {
      popup.setInnactive();
    });
  };

  @computed get active() {
    let active = {
      id: "",
      target: undefined,
      data: undefined,
      index: undefined
    };
    if (this.length > 0) {
      this.stack.getList().forEach(popup => {
        if (popup.active) {
          active = popup;
        }
      });
    }
    return active;
  }

  @computed get activeIds() {
    if (this.length > 0) {
      return this.stack.getList().map(popup => popup.id);
    }
    return [];
  }
}
