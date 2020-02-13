export declare enum NetworkStatusOptions {
    offline = "offline",
    online = "online"
}
export declare class NetworkStatus {
    status: string;
    constructor();
    get currentNetworkStatus(): string;
    checkNetworkStatus: () => void;
}
export declare const networkStatus: NetworkStatus;
