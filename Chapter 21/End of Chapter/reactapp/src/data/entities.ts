export type Product = {
    id: number, 
    name: string,
    description: string,
    category: string, 
    price: number 
};

export type ProductSelection = {
    product: Product, quantity: number;
}

export class ProductSelectionHelpers {

    public static total(selections : ProductSelection[]) {
        return selections.reduce((total, line) => 
            total + (line.product.price * line.quantity), 0);
    }

    public static productCount(selections: ProductSelection[]) {
        return selections.reduce((total, line) => total + line.quantity, 0)
    }
}

export class ProductSelectionMutations {

    public static addProduct(selections : ProductSelection[], 
            product: Product, quantity: number)  {

        const index = selections
            .findIndex(line => line.product.id === product.id);
        if (index > -1) {
            selections[index].quantity += quantity;
        } else {
            selections.push({ product, quantity})
        }
    }

    public static remove(selections: ProductSelection[], id: number) {
        selections.forEach((line, index) => {
            if (line.product.id === id) {
                selections = selections.splice(index, 1);
            }
        });
    }
}
