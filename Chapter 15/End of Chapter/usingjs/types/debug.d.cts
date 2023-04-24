declare interface Debug {
    (namespace: string): Debugger
}
declare interface Debugger {
    (...args: string[]): void;
    enabled: boolean;
}

declare var debug: Debug & { default: Debug };
export = debug;
