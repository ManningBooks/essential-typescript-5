export function log<This, ValueType extends number>(
    setter: (ValueType) => void, 
    ctx: ClassSetterDecoratorContext<This, ValueType>) 
        : ((ValueType) => void);
export function log<This, ValueType extends number>(
    getter: () => ValueType, 
    ctx: ClassGetterDecoratorContext<This, ValueType>) : () => ValueType;

export function log(accessor: any, ctx: any) {
    const name = String(ctx.name);
    return function(this: any, ...args: any[]) {
        if (ctx.kind === "getter") {
            const result = accessor.call(this, ...args);
            console.log(`${name} get returned ${result}`);
            return result;
        } else {
            console.log(`${name} set to ${args}`);
            return accessor.call(this, ...args);
        }
    }
}
