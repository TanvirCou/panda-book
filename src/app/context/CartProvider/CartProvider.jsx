"use client"

import { CartActions } from "./CartActions";
import { cartReducer, initialState } from "./CartReducer";

const { createContext, useReducer, useEffect, useState } = require("react");

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, cartDispatch] = useReducer(cartReducer, initialState);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);
        if(localStorage.getItem("cartItems")) {
            const getState = JSON.parse(localStorage.getItem("cartItems"));
            cartDispatch({type: CartActions.UPDATE_STATE, payload: getState});
        }
        setLoader(false);
    }, [])

    return (
        <CartContext.Provider value={{cart, cartDispatch, loader}}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;