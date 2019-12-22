import * as React from "react";
import { storiesOf } from "@storybook/react";
import { fromPromise } from "mobx-utils";
import { Font, Color, Paddings, Margins, Bold } from "@catastrophee/styles";
import { css } from "glamor";
import { Tag, Notification, Input } from "@catastrophee/ui";
import {
  toast,
  forms,
  urltoFile,
  networkStatus,
  offlineStorage,
  NetworkStatusOptions,
  IndexedDb
} from "@catastrophee/models";
import { observer } from "mobx-react";
import { catColors } from "./defaultStyles";

const indexedDb = new IndexedDb("storybookTryOut");
const rioLogo = require("../public-assets/favicon-96.png");
const styles = {
  container: {
    background: catColors.background,
    padding: Paddings.default,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
  fontColor: {
    color: Color.onPrimary
  },
  code: {
    fontFamily: "monospace",
    backgroundColor: "black",
    color: "white"
  },
  list: {
    listStyleType: "none",
    padding: 0
  },
  link: {
    color: Color.onPrimary
  }
};

const stories = storiesOf("@catastrophee/models", module);
stories
  // .addParameters({
  //   readme: {
  //     codeTheme: "atom-dark",
  //     content: modelsReadme
  //   }
  // })
  .add("Getting Started", () => {
    return (
      <div {...css(styles.container)}>
        <div>
          <img src={rioLogo} />
        </div>

        <div {...css(Font.body, styles.fontColor)}>
          Yay! You are ready to use mobx models, please refer to the links on
          the left for more information on how to use each model.
        </div>
      </div>
    );
  })
  .add(
    "NetworkStatus",
    () => {
      @observer
      class NetworkStatusClass extends React.Component {
        render() {
          const status = networkStatus.status;
          const isOnline = networkStatus.status === NetworkStatusOptions.online;
          return (
            <div {...css(Font.body, { color: Color.onBackground })}>
              <span>
                Network status:{" "}
                <span
                  {...css({
                    fontWeight: Bold,
                    color: isOnline ? Color.success : Color.error
                  })}
                >
                  {status}
                </span>
              </span>
              <div>
                To see your network status change, turn off your wifi or unplug
                your ethernet cable
              </div>
            </div>
          );
        }
      }
      return <NetworkStatusClass />;
    }
    // {
    //   readme: {
    //     // override docs
    //     content: "",
    //     sidebar: networkStatusReadme
    //   }
    // }
  )
  .add(
    "OfflineStorage",
    () => {
      offlineStorage.setSnapshotFn(() => {
        if (navigator.onLine) {
          return { server: true };
        }
        return { server: false };
      });
      @observer
      class OfflineStorageClass extends React.Component {
        render() {
          const networkStatus =
            offlineStorage.networkStatus.currentNetworkStatus;
          const hasConflicts = JSON.stringify(offlineStorage.hasConflicts);
          const lastSyncedTime = JSON.stringify(offlineStorage.lastSyncedTime);
          offlineStorage.registerScript("./serviceWorker.js");

          return (
            <div {...css(Font.body, { color: Color.onBackground })}>
              {networkStatus}
              <button
                onClick={() => {
                  indexedDb.storeData("casting/docs", {
                    test: 1
                  });
                }}
              >
                Put data in db
              </button>
              <button
                onClick={() => {
                  indexedDb.getData("casting/docs").then(response => {
                    console.log({ cachedResponse: response });
                  });
                }}
              >
                get data from db
              </button>
              <button
                onClick={() => {
                  indexedDb.clear();
                }}
              >
                clear data
              </button>
              <button
                onClick={() => {
                  offlineStorage.cacheWorker.postMessage("heelo!");
                }}
              >
                post message to worker
              </button>
              <button
                onClick={() => {
                  indexedDb.deleteEntry("casting/docs").then(response => {
                    console.log({ deleted: response });
                  });
                }}
              >
                delete entry
              </button>
              <span> hasConflicts?{hasConflicts}</span>
              <span> last synced time: {lastSyncedTime}</span>
            </div>
          );
        }
      }
      return <OfflineStorageClass />;
    }
    // {
    //   readme: {
    //     // override docs
    //     content: "",
    //     sidebar: offlineStorageReadme
    //   }
    // }
  )
  .add("Notifications/Toast", () => {
    @observer
    class Toaster extends React.Component {
      render() {
        const notification = toast.notificationMessage;
        const showToast = toast.currentState !== null;
        return (
          <div {...css(styles.container)}>
            {showToast && (
              <div {...css({ position: "absolute" })}>
                <Notification
                  status={notification.status}
                  message={notification.message}
                  error={""}
                  onClose={() => toast.clearNotification(0)}
                />
              </div>
            )}
            <div {...css(Font.body, styles.fontColor)}>
              <span>
                The toast model gives you the abilitiy to show toasts on the
                page
              </span>
              <div {...css({ marginTop: Margins.default })}>
                <button
                  onClick={() => {
                    const promise = fromPromise(
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          resolve({ sucess: 234 });
                        }, 1000);
                      })
                    );
                    toast.setNotificationData({
                      status: promise,
                      successMessage: `Successfully saved`,
                      failureMessage: `Failed to save`,
                      pendingMessage: `Saving...`,
                      details: promise,
                      successAction: () => {},
                      failAction: () => {}
                    });
                  }}
                >
                  Click here to see success toast
                </button>

                <button
                  onClick={() => {
                    const promise = fromPromise(
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          reject({ reject: "234" });
                        }, 1000);
                      })
                    );
                    toast.setNotificationData({
                      status: promise,
                      successMessage: `Successfully saved`,
                      failureMessage: `Failed to save`,
                      pendingMessage: `Saving...`,
                      details: promise,
                      successAction: () => {},
                      failAction: () => {}
                    });
                  }}
                >
                  Click here to see fail toast
                </button>
              </div>
              <h2>Usage</h2>

              <textarea
                {...css(styles.code)}
                value={`
import { fromPromise } from 'mobx-utils';
import { toast } from '@catastrophee/models';

Success example
----------------
const promise = fromPromise(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  })
);

toast.setNotificationData({
  status: promise,
  successMessage: 'Successfully saved',
  failureMessage: 'Failed to save',
  pendingMessage: 'Saving...',
  details: promise,
  successAction: () => {},
  failAction: () => {}
});

Fail example
-------------
const promise = fromPromise(
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 1000);
  })
);

toast.setNotificationData({
  status: promise,
  successMessage: 'Successfully saved',
  failureMessage: 'Failed to save',
  pendingMessage: 'Saving...',
  details: promise,
  successAction: () => {},
  failAction: () => {}
});


You can use this in conjuction with the Notification Component
import { Notification } from '@catastrophee/ui';

render () {
  const notification = toast.notificationMessage;
  const showToast = toast.currentState !== null;

  return (
    <div {...css({position: 'fixed', zIndex: 10000})}>
      {showToast && (
        <Notification
          status={notification.status}
          message={notification.message}
          error={''}
          onClose={() => toast.clearNotification(0)}
        />
      )}
    </div>
  );
}

`}
              />
            </div>

            <div {...css(Font.body, styles.fontColor)} />
          </div>
        );
      }
    }
    return <Toaster />;
  })
  .add("Simple Form", () => {
    forms.init({
      id: "signup",
      title: "Sign Up Form",
      fields: {
        name: "",
        email: "",
        phoneNumber: ""
      }
    });

    const MyForm = observer(() => {
      const signupForm = forms.getForm("signup");
      const { name, email, phoneNumber } = signupForm.fields;
      return (
        <div>
          <input
            value={name.getValue}
            onChange={e => name.set(e.target.value)}
          />
          <input
            value={email.getValue}
            onChange={e => email.set(e.target.value)}
          />
          <input
            value={phoneNumber.getValue}
            onChange={e => phoneNumber.set(e.target.value)}
          />
          <button
            onClick={() => {
              console.log(forms.getFormData("signup"));
            }}
          >
            Send
          </button>
        </div>
      );
    });
    return <MyForm />;
  })
  .add("Form", () => {
    forms.init({
      id: "example",
      fields: {
        name: "",
        lastName: "",
        age: "",
        email: ""
      },
      title: "My Form"
    });
    @observer
    class Form extends React.Component {
      constructor(props) {
        super(props);
      }
      render() {
        const currentForms = forms.registered;
        const exampleForm = currentForms["example"];
        const { name, lastName, age, email } = exampleForm.fields;
        return (
          <div {...css(styles.container)}>
            <div {...css(Font.body, styles.fontColor)}>
              <span>
                The form model gives you the abilitiy to create dinamic forms
                without having to worry about where you are going to
                'temporarily' store the form data
              </span>
              <div {...css({ marginTop: Margins.default })} />

              <div>
                <h2>{exampleForm.title}</h2>
                <div>
                  <Input
                    label="First Name"
                    onChange={e => name.set(e.target.value)}
                    value={name.getValue}
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <Input
                    label="Email"
                    onChange={e => email.set(e.target.value)}
                    value={email.getValue}
                    placeholder="Enter email"
                    type="email"
                  />
                </div>
                <div>
                  <Input
                    label="Last Name"
                    onChange={e => lastName.set(e.target.value)}
                    value={lastName.getValue}
                  />
                </div>
                <div>
                  <Input
                    label="Age"
                    onChange={e => age.set(e.target.value)}
                    value={age.getValue}
                    type="number"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    alert(JSON.stringify(forms.getFormData("example")));
                  }}
                >
                  Get form data
                </button>

                <button
                  onClick={() => {
                    forms.clearAllFields("example");
                  }}
                >
                  clear form
                </button>
              </div>
              <h2>Example</h2>

              <textarea
                {...css(styles.code)}
                value={`
import { fromPromise } from 'mobx-utils';
import { forms } from '@catastrophee/models';
import { observer } from 'mobx-react';

@observer
    class Form extends React.Component {
      constructor(props) {
        super(props);
        forms.init({
          id: "example",
          fields: {
            name: null,
            lastName: null,
            age: null
          },
          title: "My Form",
          required: ["name"],
          validations: {},
          options: {}
        });
      }
      render() {
        const exampleForm = forms["example"];
        const formFields = exampleForm.fields;
        return (
          <div>
            <h2>{exampleForm.title}</h2>
            <div>
              <Input
                label="First Name"
                onChange={e => formFields.name.set(e.target.value)}
                value={formFields.name.value}
              />
            </div>
            <div>
              <Input
                label="Last Name"
                onChange={e => formFields.lastName.set(e.target.value)}
                value={formFields.lastName.value}
              />
            </div>
            <div>
              <Input
                label="Age"
                onChange={e => formFields.age.set(e.target.value)}
                value={formFields.age.value}
              />
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                alert(JSON.stringify(forms.getFormData("example").fields));
              }}
            >
              Get form data
            </button>
          </div>
          );
            }
          }
`}
              />
            </div>

            <div {...css(Font.body, styles.fontColor)} />
          </div>
        );
      }
    }
    return <Form />;
  });
