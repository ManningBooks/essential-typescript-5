import { City, Product } from "./dataTypes.js";
function makeObject(constructor, ...args) {
    return new constructor(...args);
}
let prod = makeObject(Product, "Kayak", 275);
let city = makeObject(City, "London", 8136000);
[prod, city].forEach(item => console.log(`Name: ${item.name}`));
