import React, { useReducer } from "react";
import { initProductState, productReducer } from "../reducers/productReducer";
import types from "../types";

const ProductApp = () => {
    const [state, dispatch] = useReducer(productReducer, initProductState);
    const { products, cart, activeProduct } = state;

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.title}
                        <button
                            onClick={() =>
                                dispatch({
                                    type: types.productShow,
                                    payload: product,
                                })
                            }
                        >
                            Show
                        </button>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: types.productAddTocart,
                                    payload: product,
                                })
                            }
                        >
                            Add To cart
                        </button>
                    </li>
                ))}
            </ul>
            <h2>cart</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        {product.title} -- quantity : {product.quantity}
                        <button
                            onClick={() =>
                                dispatch({
                                    type: types.productRemoveOneFromcart,
                                    payload: product.id,
                                })
                            }
                        >
                            Remove one
                        </button>
                        <button
                            onClick={() =>
                                dispatch({
                                    type: types.productRemoveFromcart,
                                    payload: product.id,
                                })
                            }
                        >
                            Remove all
                        </button>
                    </li>
                ))}
            </ul>

            <h2>Preview</h2>
            <p>{activeProduct.title}</p>
        </div>
    );
};

export default ProductApp;
