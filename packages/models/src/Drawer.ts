import { PopupStore } from "./PopupStore";
import { observable, action, computed } from "mobx";

const DRAWER_FULL_VISIBLE_WIDTH = 380;
const DRAWER_HIDDEN_WIDTH = 0;
export class Drawer extends PopupStore {
  @observable visibilityWidth: number;
  constructor() {
    super();
    this.visibilityWidth = DRAWER_HIDDEN_WIDTH;
  }

  @computed
  get isOpen() {
    if (this.visibilityWidth > 0) {
      return true;
    }
    return false;
  }

  @computed
  get width() {
    return this.visibilityWidth;
  }

  @action
  open = () => {
    this.visibilityWidth = DRAWER_FULL_VISIBLE_WIDTH;
  };

  @action
  close = () => {
    this.visibilityWidth = DRAWER_HIDDEN_WIDTH;
  };

  @action
  toggle = () => {
    if (this.visibilityWidth === 0) {
      this.open();
    } else {
      this.close();
    }
  };
}

export default Drawer;
