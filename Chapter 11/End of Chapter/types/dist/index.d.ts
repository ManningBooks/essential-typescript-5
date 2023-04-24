interface Product {
    name: string;
    price: number;
}
declare class SportsProduct implements Product {
    name: string;
    category: string;
    price: number;
    constructor(name: string, category: string, price: number);
}
declare class ProductGroup {
    constructor(...initialProducts: [string, Product][]);
    [propertyName: string]: Product;
}
declare let group: ProductGroup;
declare let total: number;
