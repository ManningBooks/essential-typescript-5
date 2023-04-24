import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product, ProductSelection } from './entities';

//const protocol = "http";
//const hostname = "localhost";
//const port = 4600;

const baseUrl = "/api";

export const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => "products"
        })
    })
})

export const ordersApi = createApi({
    reducerPath: "orders",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (build) => ({
        storeOrder: build.mutation<number, ProductSelection[]>({
            query(selections) {
                let orderData = {
                    lines: selections.map(ol => ({
                        productId: ol.product.id,
                        productName: ol.product.name, 
                        quantity: ol.quantity
                    }))
                }        
                return {
                    url: "orders",
                    method: "POST",
                    body: {orderData}
                }
            },
            transformResponse: ((response: {id : number}) => response.id)
        })      
    })
})

export const { useGetProductsQuery } = productsApi;
export const { useStoreOrderMutation } = ordersApi;
