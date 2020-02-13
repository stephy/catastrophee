export declare enum FeedbackOptions {
    error = "error",
    loading = "loading",
    success = "success",
    warning = "warning"
}
export declare class Feedback {
    message?: string;
    show: boolean;
    details?: string;
    onCancel: () => void;
    type?: FeedbackOptions;
    constructor();
    get currentMessage(): string;
    get currentDetails(): string;
    get display(): boolean;
    get currentType(): FeedbackOptions;
    setType: (type: FeedbackOptions) => void;
    setOnCancel: (cb: () => void) => void;
    cancel: () => void;
    setDetails: (details: string) => void;
    setMessage: (message: string) => void;
    showFeedback: (timeout?: number) => void;
    fadeOut: (message: string, details?: string) => void;
}
export declare const feedback: Feedback;
