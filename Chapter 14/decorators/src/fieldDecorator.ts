export function double<This, FieldType extends number>(
    notused: any, ctx: ClassFieldDecoratorContext<This, FieldType>) {
return function (initialValue: FieldType) {
    return initialValue * 2;
}
}
