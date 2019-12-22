import { observable, action } from "mobx";

const REQUEST_STORE_ID = "requests";
export class IndexedDb {
  @observable indexedDb: any;
  @observable dbVersion: number;
  @observable dbname: string;
  @observable request: any;
  @observable db: any;
  @observable objectStore: any;
  @observable storeId: string;

  constructor(dbname: string, storeId?: string) {
    this.indexedDb = window.indexedDB;
    this.dbVersion = 1;
    this.storeId = storeId || REQUEST_STORE_ID;
    this.dbname = dbname;
    this.open(dbname, this.dbVersion);
  }

  @action open = (dbname: string, version: number) => {
    if (this.indexedDb) {
      this.request = this.indexedDb.open(dbname, version);
    }

    if (this.request) {
      this.request.onerror = event => {
        console.log("Error creating/accessing IndexedDB database");
      };

      this.request.onsuccess = event => {
        console.log("Success creating/accessing IndexedDB database");
        this.db = this.request.result;

        this.db.onerror = function(event) {
          console.log("Error creating/accessing IndexedDB database");
        };
      };

      this.request.onerror = error => {
        console.log("Error creating/accessing IndexedDB database: ", error);
      };

      // This handler is called when a new version of the database
      // is created, either when one has not been created before
      // or when a new version number is submitted by calling
      // window.indexedDB.open().
      this.request.onupgradeneeded = event => {
        this.db = event.target.result;

        this.db.onerror = error => {
          console.log("error opening db", error);
        };

        // Create an objectStore for this database
        this.objectStore = this.db.createObjectStore(this.storeId, {
          keyPath: "id"
        });
      };
    }
  };

  @action createObjectStore = db => {
    // Create an objectStore to hold backend responses. We're
    // going to use "url" as our key path because it's guaranteed to be
    // unique
    const objectStore = db.createObjectStore(this.storeId, {
      keyPath: "id"
    });
    // Create an index to search id. don't allow duplicates
    objectStore.createIndex("id", "id", { unique: true });
    return objectStore;
  };

  @action clear = () => {
    if (this.db) {
      // Use transaction oncomplete to make sure the objectStore creation is
      // finished before adding data into it.
      const transaction = this.db.transaction(this.storeId, "readwrite");
      // report on the success of opening the transaction
      transaction.oncomplete = event => {
        console.log(
          "Transaction completed: database modification finished",
          event
        );
      };

      transaction.onerror = error => {
        console.log(
          "Transaction not opened due to error. Duplicate items not allowed",
          error
        );
      };

      transaction.objectStore(this.storeId).clear();
    }
  };

  @action deleteEntry = id => {
    return new Promise((resolve, reject) => {
      if (this.db) {
        const request = this.db
          .transaction(this.storeId, "readwrite")
          .objectStore(this.storeId)
          .delete(id);

        request.onsuccess = event => {
          resolve({ deleted: true, id });
        };

        request.onerror = error => {
          reject({ error, deleted: false, id });
        };
      } else {
        reject({ error: "Unable to delete entry, no DB found" });
      }
    });
  };

  @action storeData = (id, data) => {
    if (this.db) {
      // Use transaction oncomplete to make sure the objectStore creation is
      // finished before adding data into it.
      const transaction = this.db.transaction(this.storeId, "readwrite");
      // report on the success of opening the transaction
      transaction.oncomplete = event => {
        console.log(
          "Transaction completed: database modification finished",
          event
        );
      };

      transaction.onerror = error => {
        console.log(
          "Transaction not opened due to error. Duplicate items not allowed",
          error
        );
      };

      transaction.objectStore(this.storeId).add({ id, data });
    }
  };

  @action getData = id => {
    return new Promise((resolve, reject) => {
      if (this.db) {
        const request = this.db
          .transaction(this.storeId)
          .objectStore(this.storeId)
          .get(id);

        request.onsuccess = event => {
          resolve(event.target.result.data);
        };

        request.onerror = error => {
          reject(error);
        };
      } else {
        reject({ error: "No db" });
      }
    });
  };

  @action resetObjectStore = () => {};

  @action putImageInDb = (id, blob) => {
    console.log("Putting IMAGE in IndexedDB");

    // Open a transaction to the database
    const transaction = this.db.transaction([id], "readwrite");

    // Put the blob into the dabase
    const put = transaction.objectStore(id).put(blob, "image");

    // Retrieve the file that was just stored
    transaction.objectStore(id).get("image").onsuccess = event => {
      const imgFile = event.target.result;
      console.log("Got image!" + imgFile);

      // Get window.URL object
      const URL = window.URL;

      // Create and revoke ObjectURL
      const imgURL = URL.createObjectURL(imgFile);

      // Set img src to ObjectURL
      var imgNode = document.getElementById("elephant");
      imgNode.setAttribute("src", imgURL);

      // Revoking ObjectURL
      URL.revokeObjectURL(imgURL);
    };
  };

  @action getImageFile = filename => {
    // Create XHR
    const xhr = new XMLHttpRequest();
    let blob;

    xhr.open("GET", filename, true);
    // Set the responseType to blob
    xhr.responseType = "blob";

    xhr.addEventListener(
      "load",
      () => {
        if (xhr.status === 200) {
          console.log("Image retrieved");

          // Blob as response
          blob = xhr.response;
          console.log("Blob:" + blob);

          // Put the received blob into IndexedDB
          this.putImageInDb(filename, blob);
        }
      },
      false
    );
    // Send XHR
    xhr.send();
  };
}
