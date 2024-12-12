import React from "react";
import { ColorSelector } from "./components/products/color-selector";
import { Ratings } from "./components/star-rating";
import { products } from "./components/products/data";
import * as Icons from "./components/icons";

import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  SET_COLOR,
  SET_SIZE,
} from "./components/products/constant";
import { SizeSelector } from "./components/products/size-selector";

const [product] = products;
const initialState = {
  color: product.defaultColor,
  size: product.defaultSize,
  count: 0,
  cart: [],
};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_COLOR:
      return { ...state, color: action.payload };
    case SET_SIZE:
      return { ...state, size: action.payload };
    case INCREMENT:
      return { ...state, count: Math.min(10, state.count + 1) };
    case DECREMENT:
      return { ...state, count: Math.max(0, state.count - 1) };
    case ADD_TO_CART:
      return { ...state, cart: [...cart] };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const color = product.bandColors.find(
    (brandColor) => brandColor.color_name === state.color
  );
  const size = product.wristSizes.find((wristSize) => wristSize.size);
  return (
    <>
      <div className="h-full flex items-center text-gray-300">
        <div className="container md:grid gap-6 lg:gap-15 grid-cols-2">
          <div className="rounded overflow-hidden">
            <img
              key={state.color}
              className="animate-fade-in inline-block"
              src={color?.image}
            />
          </div>
          <div className="flex items-center">
            <div className="space-y-5">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-500">
                  {product.name}
                </h2>
                <Ratings ratings={3.5} />
              </div>
              <div className="flex gap-1 items-center">
                <span className="text-xl line-through text-gray-300">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="font-bold text-2xl text-primary-500">
                  ${product.salePrice.toFixed(2)}
                </span>
              </div>
              <div className="space-y-5">
                <p className="text-lg leading-7.5">{product.details}</p>
                <ul className="flex gap-6">
                  <li className="space-y-1">
                    <h3 className="text-sm">Type</h3>
                    <div className="font-bold text-gray-500">
                      {product.type}
                    </div>
                  </li>
                  <li className="space-y-1">
                    <h3 className="text-sm">Model Number</h3>
                    <div className="font-bold text-gray-500">
                      {product.modelNumber}
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-5">
                <div className="space-y-2.5">
                  <label className="text-lg text-gray-500 font-bold">
                    Brand Color
                  </label>

                  <div className="flex gap-3 items-center">
                    <ColorSelector
                      changeColor={dispatch}
                      currentColor={state.color}
                      colors={product.bandColors}
                    />
                  </div>
                </div>
                <div className="">
                  <SizeSelector
                    changeSize={dispatch}
                    currentSize={state.size}
                    sizes={product.wristSizes}
                  />
                </div>
                <div className="flex gap-3 items-center">
                  <div className="border rounded flex overflow-hidden">
                    <button
                      onClick={() => dispatch({ type: DECREMENT })}
                      className="bg-transparent size-9 flex items-center justify-center hover:bg-gray-100 active:bg-gray-100 transition-colors"
                    >
                      <Icons.Minus />
                    </button>
                    <span className="border-l border-r flex items-center justify-center w-15 text-sm text-gray-500">
                      {state.count}
                    </span>
                    <button
                      onClick={() => dispatch({ type: INCREMENT })}
                      className="bg-transparent size-9 flex items-center justify-center hover:bg-gray-100 active:bg-gray-100 transition-colors"
                    >
                      <Icons.Plus />
                    </button>
                  </div>
                  <button className="bg-primary-500 text-white rounded px-3.5 py-1.5">
                    Add to cart
                  </button>
                  <Icons.Love className="size-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-6 absolute bottom-0 inset-x-0 flex items-center justify-center">
        <button>Checkout {state.cart.length}</button>
      </footer>
    </>
  );
}

export default App;
