import { observable, computed, action, autorun } from "mobx";
import {
  networkStatus,
  NetworkStatus,
  NetworkStatusOptions
} from "../networkStatus/NetworkStatus";
/**
 * Offline storage allows you to handle offline app storage
 *
 * @export
 * @class OfflineStorage
 */
export class OfflineStorage {
  @observable localVersion?: string;
  @observable networkStatus: NetworkStatus;
  @observable serverVersion?: string;
  @observable snapshotFn?: () => void; // will hold a function that will run every time the network goes offline, it should return the current synced state of the app
  @observable lastSyncedTime?: number;
  @observable browserSupport: boolean;
  @observable cacheWorker: Worker;

  constructor() {
    this.localVersion = undefined;
    this.networkStatus = networkStatus;
    this.serverVersion = undefined;
    this.snapshotFn = undefined;
    this.lastSyncedTime = undefined;
    this.cacheWorker = undefined;
    //this.startLoggerWebWorker();

    autorun(() => {
      if (
        this.networkStatus.currentNetworkStatus === NetworkStatusOptions.offline
      ) {
        // Queue up events for server.
        this.saveCurrentAppState();
      }
    });

    autorun(() => {
      if (
        this.networkStatus.currentNetworkStatus === NetworkStatusOptions.online
      ) {
        // Re-sync data with server.
        this.syncLocalChangesToServer();
      }
    });

    if ("serviceWorker" in navigator) {
      this.browserSupport = true;
    } else {
      this.browserSupport = false;
    }
  }

  @computed get hasBrowserSupport() {
    return this.browserSupport;
  }

  @computed get hasConflicts() {
    if (this.localVersion !== this.serverVersion) {
      return true;
    }
    return false;
  }

  @action responseCacheWorker = message => {
    console.log("INSER", message);
  };
  @action startLoggerWebWorker = (scriptPath: string) => {
    this.registerScript(scriptPath);
    // const workerfunc = this.responseCacheWorker;
    // const blobURL = URL.createObjectURL(
    //   new Blob(["(" + workerfunc.toString() + ")"], {
    //     type: "text/javascript"
    //   })
    // );
    // console.log({ blob: blobURL });
    // this.cacheWorker = new Worker(blobURL);
    // console.log({ cacheWorker: this.cacheWorker });
    // this.cacheWorker.addEventListener("fetch", url => {
    //   console.log("url:", url);
    // });
    // this.cacheWorker.onmessage = message => {
    //   console.log("message", message);
    // };
    // this.cacheWorker.onerror = error => {
    //   console.log("error", error);
    // };
  };

  @action registerScript = (scriptPath: string) => {
    if (this.hasBrowserSupport) {
      navigator.serviceWorker
        .register(scriptPath)
        .then(registraction => {
          console.log("Registration scope", registraction.scope);
        })
        .catch(error => {
          console.log("Error", error);
        });
    }
  };

  @action setServerVersion = (serverVersion: any) => {
    // can only set server version if it has not been saved yet,
    // to save server version, you have to clear this copy first.
    // this will be cleared once it has been successfully synced
    if (serverVersion && this.serverVersion === undefined) {
      try {
        this.serverVersion = JSON.stringify(serverVersion);
        this.lastSyncedTime = new Date().getTime();
      } catch (e) {
        console.log("Error setting server version");
      }
    }
  };

  @action setLocalVersion = (localVersion: any) => {
    if (localVersion) {
      try {
        this.localVersion = JSON.stringify(localVersion);
      } catch (e) {
        console.log("Error setting local version");
      }
    }
  };

  @action setSnapshotFn = (fn: () => any) => {
    this.snapshotFn = fn;
  };

  @action saveCurrentAppState = () => {
    if (this.snapshotFn) {
      this.setServerVersion(this.snapshotFn());
      return true;
    }
    return false;
  };

  @action downloadCurrentChanges = () => {
    this.saveCurrentAppState();
    // TODO create json file and let the user save as
  };

  @action updateLocalChanges = (localChanges: any) => {
    this.setLocalVersion(localChanges);
  };

  @action resetVersions = () => {
    this.serverVersion = undefined;
    this.localVersion = undefined;
  };

  @action syncLocalChangesToServer = () => {
    try {
      // save current local changes to server
      this.resetVersions();
    } catch (e) {
      console.log("error:", e);
    }
  };
}

export const offlineStorage = new OfflineStorage();
