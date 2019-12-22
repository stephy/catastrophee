import { action, observable } from "mobx";

export enum PopupPositions {
  fullscreen = "fullscreen",
  center = "center",
  left = "left",
  right = "right"
}

interface PopupType {
  data?: object;
  id: string | null;
  index: number;
  target?: EventTarget | PopupPositions | null;
  title: string;
}

export class Popup {
  @observable data: object;
  @observable id: string | null;
  @observable index: number;
  @observable target: EventTarget | PopupPositions | null;
  @observable active: boolean;
  @observable title: string;

  constructor(props: PopupType) {
    const { data, id, index, target, title } = props;
    this.data = data || {};
    this.id = id || null;
    this.index = index || 0;
    this.target = target || null;
    this.active = true;
    this.title = title;
  }

  @action setActive = () => {
    this.active = false;
  };

  @action setInnactive = () => {
    this.active = false;
  };

  @action
  static fromValue(popup: PopupType) {
    return new Popup(popup);
  }
}
