

const { CartActions } = require("./CartActions");

//  export const initialState = typeof window != "undefined" && localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
export const initialState = [];

export const cartReducer = (state, action) => {
    switch(action.type) {
        case CartActions.ADD_TO_CART: {
            const newState = [...state, action.payload];
            return newState;
        }
        case CartActions.REMOVE_FROM_CART: {
            const newState = state.filter(item => item.id !== action.payload);
            return newState;
        }

        case CartActions.UPDATE_STATE: {
            state = [...action.payload];
            return state;
        }
    }
}