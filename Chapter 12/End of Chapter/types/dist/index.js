import { Person, Product } from "./dataTypes.js";
class ArrayCollection {
    items = [];
    add(...newItems) {
        this.items.push(...newItems);
    }
    get count() {
        return this.items.length;
    }
}
class ProductCollection extends ArrayCollection {
    get(searchTerm) {
        return this.items.find(item => item.name === searchTerm);
    }
}
class PersonCollection extends ArrayCollection {
    get(searchTerm) {
        return this.items.find(item => item.name === searchTerm || item.city === searchTerm);
    }
}
let peopleCollection = new PersonCollection();
peopleCollection.add(new Person("Bob Smith", "London"), new Person("Dora Peters", "New York"));
let productCollection = new ProductCollection();
productCollection.add(new Product("Running Shoes", 100), new Product("Hat", 25));
[peopleCollection, productCollection].forEach(c => console.log(`Size: ${c.count}`));
