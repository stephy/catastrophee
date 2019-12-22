import { action, observable } from "mobx";

class Scrolltracker {
  @observable x: number;
  @observable y: number;
  @observable id: string;

  constructor() {
    this.x = 0;
    this.y = 0;
    window.document.addEventListener("mousewheel", this.onmousewheel);
  }

  @action track = id => {
    this.id = id;
  };

  @action untrack = () => {
    window.document.removeEventListener("mousewheel", this.onmousewheel);
  };

  @action onmousewheel = e => {
    const element = document.getElementById(this.id);
    if (element) {
      const pos = element.getBoundingClientRect();
      this.x = pos.left;
    }
    this.y = window.scrollY;
  };

  @action scrollToSavedPosition = () => {
    setTimeout(() => {
      window.scrollTo(this.x, this.y);
    }, 1);
  };
}

export const scrolltracker = new Scrolltracker();
