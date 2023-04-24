import React, { FunctionComponent } from "react";
import { ProductSelection, ProductSelectionHelpers } from "./data/entities";
import { NavLink } from "react-router-dom";

interface Props {
    selections: ProductSelection[]
}

export const Header : FunctionComponent<Props> = (props) => {
    const count = ProductSelectionHelpers.productCount(props.selections);
    const total = ProductSelectionHelpers.total(props.selections);
    return <div className="p-1 bg-secondary text-white text-end">
        { count === 0 ? "(No Selection)" 
            : `${ count } product(s), ` + 
                `$${ total.toFixed(2)}` }
        { count > 0 ? 
            <NavLink to="/order" className="btn btn-sm btn-primary m-1">
                Submit Order
            </NavLink>
            : <button disabled className="btn btn-sm btn-primary m-1">
                Submit Order
            </button>
        }
    </div>    
}
