class CartItem {
    product;
    quantity;
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
        // no statements required
    }
    get totalPrice() {
        return this.quantity * this.product.price;
    }
}
export class Cart {
    customerName;
    items = new Map();
    constructor(customerName) {
        this.customerName = customerName;
        // no statements required
    }
    addProduct(product, quantity) {
        if (this.items.has(product.id)) {
            let item = this.items.get(product.id);
            item.quantity += quantity;
            return item.quantity;
        }
        else {
            this.items.set(product.id, new CartItem(product, quantity));
            return quantity;
        }
    }
    get totalPrice() {
        return [...this.items.values()].reduce((total, item) => total += item.totalPrice, 0);
    }
    get itemCount() {
        return [...this.items.values()].reduce((total, item) => total += item.quantity, 0);
    }
}
