import React from "react";
import { ADD_TO_CART, OPEN_CART } from "./constant";

const initialState = {
  isCartOpen: false,
  cart: [],
};

export const reducer = (store, action) => {
  switch (action.type) {
    case OPEN_CART:
      return { ...store, isCartOpen: !store.isCartOpen };
    case ADD_TO_CART: {
      const existingProductIndex = store.cart.findIndex(
        (product) =>
          product.id === action.payload.id &&
          product.colorId === action.payload.colorId &&
          product.sizeId === action.payload.sizeId
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

const isProductExist = (cart, newProduct) => {
  const { id, colorId, sizeId } = newProduct;
  const existingProduct = cart.find((product) => {
    return (
      id === product.id &&
      colorId === product.colorId &&
      sizeId === product.sizeId
    );
  });
  return existingProduct;
};

export function useStore() {
  const [store, dispatch] = React.useReducer(reducer, initialState);
  const openCart = dispatch.bind(null, { type: OPEN_CART });
  const addToCart = (payload) => dispatch({ type: ADD_TO_CART, payload });
  return { store, openCart, addToCart };
}