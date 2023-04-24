import React, { FunctionComponent, useMemo } from 'react';
import { Product } from './data/entities';
import { ProductList } from './productList';
import { useAppDispatch, useAppSelector, reducers, queries  } 
    from "./data/dataStore";

// let testData: Product[] = [1, 2, 3, 4, 5].map(num => 
//     ({ id: num, name: `Prod${num}`, category: `Cat${num % 2}`, 
//         description: `Product ${num}`, price: 100}))

export const App: FunctionComponent = () => {

    const selections = useAppSelector(state => state.selections);
    const dispatch = useAppDispatch();

    const { data } = queries.useGetProductsQuery();

    const addToOrder = (p: Product, q: number) => 
        dispatch(reducers.addToOrder([p, q]));

    const categories = useMemo<string[]>(() => {
        return [...new Set(data?.map(p => p.category))]
    }, [data]);

    return  <div className="App">
                <ProductList products={ data ?? [] } 
                    categories={categories } 
                    selections={ selections }
                    addToOrder= { addToOrder } />
            </div>
}

export default App;
