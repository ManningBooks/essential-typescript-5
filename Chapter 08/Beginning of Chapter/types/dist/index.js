function checkNumber(val) {
    if (typeof val != "number") {
        throw new Error("Not a number");
    }
}
function calculateTax(amount) {
    checkNumber(amount);
    return amount * 1.2;
}
let taxAmount = calculateTax(100);
console.log(`Tax value: ${taxAmount}`);
