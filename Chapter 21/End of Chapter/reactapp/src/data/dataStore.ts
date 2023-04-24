import { configureStore } from "@reduxjs/toolkit";
import { reducer as selectionsReducer, addToOrder, resetSelections } 
    from "./selectionSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } 
    from "react-redux";
import { ordersApi, productsApi, useGetProductsQuery, 
    useStoreOrderMutation } from "./storeApis";

export const dataStore = configureStore({
    reducer: {
        "selections": selectionsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(productsApi.middleware)    
            .concat(ordersApi.middleware)
});

export type AppDispatch = typeof dataStore.dispatch;
export type RootState = ReturnType<typeof dataStore.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const reducers = {
    addToOrder, useStoreOrderMutation, resetSelections
}

export const queries = {
    useGetProductsQuery
}
