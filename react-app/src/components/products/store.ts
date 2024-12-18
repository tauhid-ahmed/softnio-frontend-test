import React from "react";
import { ADD_TO_CART, OPEN_CART, CLOSE_CART } from "./constant";
import { type Store, type CartItem, type StoreAction } from "./types";

const initialState: Store = {
  isCartOpen: false,
  cart: [],
};

export const reducer = (store: Store, action: StoreAction) => {
  switch (action.type) {
    case OPEN_CART:
      return { ...store, isCartOpen: !store.isCartOpen };
    case CLOSE_CART:
      return { ...store, isCartOpen: false };
    case ADD_TO_CART: {
      const existingProductIndex = store.cart.findIndex(
        (product: CartItem) =>
          product.id === action.payload.id &&
          product.cid === action.payload.colorId &&
          product.sid === action.payload.sizeId
      );

      if (existingProductIndex !== -1) {
        // Create a new copy of the existing product with updated count
        const updatedProduct = {
          ...store.cart[existingProductIndex],
          count: store.cart[existingProductIndex].count + action.payload.count,
        };

        // Create a new cart array with the updated product
        const updatedCart = [
          ...store.cart.slice(0, existingProductIndex),
          updatedProduct,
          ...store.cart.slice(existingProductIndex + 1),
        ];

        return { ...store, cart: updatedCart };
      }

      // If the product doesn't exist, add it to the cart
      return { ...store, cart: [...store.cart, action.payload] };
    }
    default:
      return store;
  }
};

export function useStore() {
  const [store, dispatch] = React.useReducer(reducer, initialState);
  const openCart = dispatch.bind(null, { type: OPEN_CART });
  const closeCart = dispatch.bind(null, { type: CLOSE_CART });
  const addToCart = (payload: CartItem) =>
    dispatch({ type: ADD_TO_CART, payload });
  return { store, closeCart, openCart, addToCart };
}
