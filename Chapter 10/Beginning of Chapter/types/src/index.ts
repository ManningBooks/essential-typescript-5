let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };

let products = [hat, gloves];

products.forEach(prod => console.log(`${prod.name}: ${prod.price}`));
