# Offline Storage Model

The offline storage model will **help** you allow users to use your app when they are offline. It will do that by using service workers. A service worker is a script that can be registered to control one or more pages of your app. Luckily you don't have to know much about web workers since we will handle that part for you. However, it is important to note that this service will only work over HTTPS. When you are developing, it will work over localhost.

## How does it work?

**TDLR**

We watch on the network status (using our Network Status model) to detect when your app goes online or offline.

When your app goes offline, we start intercepting requests and allow you to change those requests

When your app goes online, we sync your latest local changes with the server

### Intercepted Requests

You chose which requests you want to intercept and how you want to handle that intercepted request

### Syncing With Server

You define how you sync your data with the server

## Available methods and values

| Access                      | Type     | return  | Description                                                                                                                    |
| --------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| offlineStorage.hasConflicts | computed | boolean | will output true if local changes are different than server                                                                    |
| saveCurrentAppState         | method   | boolean | saves current app state by creating a snapshot of most recent loaded content, returns true if successed and false if it failed |
| resetVersions               | method   | void    | resets model's local and server version                                                                                        |
| syncLocalChangesToServer    | method   | boolean | syncs local changes to server, returns true if success, false if it fails                                                      |
| downloadCurrentChanges      | method   | void    | will generate a snapshot of current state of the app for download                                                              |

More about web workers:
