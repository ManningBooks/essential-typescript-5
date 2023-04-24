import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductSelection, ProductSelectionMutations } 
    from "./entities";

const productSelectionSlice = createSlice({
    name: "selections", 
    initialState: Array<ProductSelection>(),
    reducers: {
        addToOrder(selections: ProductSelection[], 
                action: PayloadAction<[Product, number]>) {
            ProductSelectionMutations.addProduct(selections, 
                action.payload[0], action.payload[1])
        }, 
        resetSelections(selections: ProductSelection[]) {
            selections.length = 0;
        }
    }
});

export const reducer = productSelectionSlice.reducer;
export const { addToOrder, resetSelections } 
    = productSelectionSlice.actions
