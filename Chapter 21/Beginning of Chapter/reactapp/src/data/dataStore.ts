import { configureStore } from "@reduxjs/toolkit";
import { reducer as selectionsReducer, addToOrder } from "./selectionSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } 
    from "react-redux";
import { productsApi, useGetProductsQuery } from "./storeApis";

export const dataStore = configureStore({
    reducer: {
        "selections": selectionsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(productsApi.middleware)    
});

export type AppDispatch = typeof dataStore.dispatch;
export type RootState = ReturnType<typeof dataStore.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const reducers = {
    addToOrder
}

export const queries = {
    useGetProductsQuery
}
