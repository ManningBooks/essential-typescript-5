export function serialize<T extends new (...args: any) => any>(
    originalClass: T, ctx: ClassDecoratorContext) {

    const className = String(ctx.name);

    return class extends originalClass implements Serializeable  {
        
        serialize() {
            console.log(`${className}: ${JSON.stringify(this)}`);
        }
    };    
}

export interface Serializeable {
    serialize();
}

export function isSerializeable(target): target is Serializeable {
    return typeof target.serialize === "function";
}
