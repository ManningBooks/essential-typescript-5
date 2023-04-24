import React, { FunctionComponent } from "react";
import { ProductSelectionHelpers as Helpers } 
    from "./data/entities";
import { NavLink } from "react-router-dom";
import { ProductSelection } from "./data/entities";

interface Props {
    selections: ProductSelection[],
    submitCallback: () => void    
}

export const OrderDetails: FunctionComponent<Props> = (props) => {

    return <div>
        <h3 className="text-center bg-primary text-white p-2">
            Order Summary
        </h3>
        <div className="p-3">
            <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>Quantity</th><th>Product</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    { props.selections.map(selection =>
                        <tr key={ selection.product.id }>
                            <td>{ selection.quantity }</td>
                            <td>{ selection.product.name }</td>
                            <td className="text-right">
                                ${ selection.product.price.toFixed(2) }
                            </td>
                            <td className="text-right">
                                ${ Helpers.total([selection]).toFixed(2) }
                            </td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th className="text-right" colSpan={3}>Total:</th>
                        <th className="text-right">
                            ${ Helpers.total(props.selections).toFixed(2) }
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div className="text-center">
            <NavLink to="/products" className="btn btn-secondary m-1">
                Back
            </NavLink>
            <button className="btn btn-primary m-1" 
                    onClick={ props.submitCallback }>
                Submit Order
            </button>
        </div>
    </div>
}
