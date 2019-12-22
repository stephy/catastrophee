# Network Status Model

The network status model allows you to know when your app is online or offline.

## Example

Detecting if your app is online or offline

```js
import { networkStatus } from "@catastrophee/models";

console.log(networkStatus.status); // will display 'online' or 'offline'
```

_If you want to use this on a component, don't forget to make your component an observer_

### Using it on a class based component

```js
import React from "react";
import { networkStatus } from "@catastrophee/models";
import { observer } from "mobx-react";

@observer
class NetworkStatusClass extends React.Component {
  render() {
    const status = networkStatus.status;
    return <div>Network status: {status}</div>;
  }
}
return <NetworkStatusClass />;
```

### Using it on a function based component

```js
import React from "react";
import { networkStatus } from "@catastrophee/models";
import { observer } from "mobx-react";

const NetworkStatusComponent = observer(() => {
  const status = networkStatus.status;
  return <div>Network status: {status}</div>;
});
```

## Comparing

The network status is typed (string enum), so if you want to explicitly check if you are online or offline, you can do so by

```js
import { networkStatus, NetworkStatusOptions } from "@catastrophee/models";

if (networkStatus.status === NetworkStatusOptions.online) {
  console.log("You are online");
} else if (networkStatus.status === NetworkStatusOptions.offline) {
  console.log("You are offline");
}
```
