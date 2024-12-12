import React from "react";
import { Ratings } from "../star-rating";
import * as Icons from "../icons";
import { ColorVariants, SizeVariants } from "./product-variants";
import { DECREMENT, INCREMENT, RESET, SET_COLOR, SET_SIZE } from "./constant";
import { Button } from "../button";
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_COLOR:
      return { ...state, color: { ...action.payload } };
    case SET_SIZE:
      return { ...state, size: { ...action.payload } };
    case INCREMENT:
      return { ...state, count: Math.min(10, state.count + 1) };
    case DECREMENT:
      return { ...state, count: Math.max(0, state.count - 1) };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export function ProductView({ product, addToCart }: any) {
  const [initialColorVariant] = product.variants.filter(
    (prod: any) => prod.default
  );
  const [initialSizeVariant] = product.sizes.filter(
    (size: any) => size.default
  );

  const initialState = {
    color: initialColorVariant,
    size: initialSizeVariant,
    count: 0,
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const nextProduct = {
    id: product.id,
    colorId: state.color.id,
    sizeId: state.size.id,
    size: state.size.variant,
    price: state.size.price,
    count: state.count,
    color: state.color.variant,
    image: state.color.image,
  };

  return (
    <>
      <div className="container md:grid gap-6 lg:gap-15 grid-cols-2">
        <div className="rounded overflow-hidden py-6 md:py-0">
          <img
            key={state.color.id}
            className="animate-fade-in block h-60 md:h-full w-full object-cover mx-auto xw-full"
            src={state.color?.image}
          />
        </div>
        <div className="flex items-center">
          <div className="space-y-4 md:space-y-5">
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
            <div className="space-y-4 md:space-y-5">
              <p className="md:text-lg text-gray-300 leading-7 line-clamp-2 md:line-clamp-none">
                {product.details}
              </p>
              <ul className="flex gap-6">
                <li className="space-y-1">
                  <h3 className="text-sm">Type</h3>
                  <div className="font-bold text-gray-500">{product.type}</div>
                </li>
                <li className="space-y-1">
                  <h3 className="text-sm">Model Number</h3>
                  <div className="font-bold text-gray-500">
                    {product.modelNumber}
                  </div>
                </li>
              </ul>
              <ColorVariants
                changeVariant={dispatch}
                currentVariant={state.color.variant}
                variants={product.variants}
              />
              <SizeVariants
                changeVariant={dispatch}
                currentVariant={state.size.variant}
                variants={product.sizes}
              />
              <div className="flex gap-3 items-center">
                <div className="border border-gray-200 rounded overflow-hidden">
                  <div className="flex -my-px">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => dispatch({ type: DECREMENT })}
                    >
                      <Icons.Minus />
                    </Button>
                    <span className="flex border-gray-200 border-r border-l items-center justify-center w-15 shrink-0 text-sm text-gray-500">
                      {state.count}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => dispatch({ type: INCREMENT })}
                    >
                      <Icons.Plus />
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    addToCart(nextProduct);
                  }}
                  disabled={state.count < 1}
                >
                  Add to cart
                </Button>
                <Icons.Love className="size-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
