import { Product } from "./product.js";
import { writeTimes } from "./methodDecorator.js";
//let city = new City("London", 8_982_000);
let product = new Product("Kayak", 275);
//console.log(city.getSummary());
console.log(product.getDetails());
console.log(`Price: ${product.getPrice()}`);
writeTimes();
