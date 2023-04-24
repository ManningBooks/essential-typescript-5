export function message(message) {
    console.log(`Factory function: ${message}`);
    return function (method, ctx) {
        console.log(`Get replacement: ${message}`);
        return function (...args) {
            // console.log(`Message: ${message}`);
            // return method.call(this, ...args);
            return `${message} (${method.call(this, ...args)})`;
        };
    };
}
