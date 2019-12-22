import { observable, computed, action } from "mobx";

export enum NetworkStatusOptions {
  offline = "offline",
  online = "online"
}

export class NetworkStatus {
  @observable status: string;

  constructor() {
    this.status = NetworkStatusOptions.online;

    window.addEventListener("online", this.checkNetworkStatus, false);
    window.addEventListener("offline", this.checkNetworkStatus, false);

    this.checkNetworkStatus();
  }

  @computed get currentNetworkStatus() {
    return this.status;
  }

  @action checkNetworkStatus = () => {
    if (navigator.onLine) {
      this.status = NetworkStatusOptions.online;
    } else {
      this.status = NetworkStatusOptions.offline;
    }
  };
}

export const networkStatus = new NetworkStatus();
