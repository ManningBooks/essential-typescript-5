export function log(accessor, ctx) {
    const name = String(ctx.name);
    return function (...args) {
        if (ctx.kind === "getter") {
            const result = accessor.call(this, ...args);
            console.log(`${name} get returned ${result}`);
            return result;
        }
        else {
            console.log(`${name} set to ${args}`);
            return accessor.call(this, ...args);
        }
    };
}
