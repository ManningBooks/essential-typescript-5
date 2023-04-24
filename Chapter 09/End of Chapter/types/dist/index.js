function calculatePrice(quantity, price) {
    return quantity * price;
}
let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);
function getRandomValue() {
    return Math.floor(Math.random() * 4) + 1;
}
function getCityString(city) {
    return `City: ${city}`;
}
let str = getCityString("London");
console.log(str);
