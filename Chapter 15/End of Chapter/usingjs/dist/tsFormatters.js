export function sizeFormatter(thing, count) {
    writeMessage(`The ${thing} has ${count} items`);
}
export function costFormatter(thing, cost) {
    if (typeof cost === "number") {
        writeMessage(`The ${thing} costs $${cost.toFixed(2)}`);
    }
    else {
        writeMessage(`The ${thing} costs $${cost}`);
    }
}
export function writeMessage(message) {
    console.log(message);
}
