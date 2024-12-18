import React from "react";
import { Ratings } from "../star-rating";
import { ColorVariants, SizeVariants } from "./product-variants";
import { DECREMENT, INCREMENT, RESET, SET_COLOR, SET_SIZE } from "./constant";
import { type Product } from "../../data";
import { ProductImage } from "./product-image";
import { Button } from "../button";
import * as Icons from "../icons";
import { type CartActions, type CartItem } from "./types";

type ProductViewProps = {
  product: Product;
  addToCart: (product: CartItem) => void;
};

type Actions = {
  type: string;
  payload?: Partial<CartItem>;
};

const reducer = (state: CartItem, action: Actions): CartItem => {
  switch (action.type) {
    case SET_COLOR:
      return { ...state, ...action.payload };
    case SET_SIZE:
      return { ...state, ...action.payload };
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

export function ProductView({ product, addToCart }: ProductViewProps) {
  const initialColors = product.colors.find((color: any) =>
    Boolean(color.default)
  )!;
  const initialSizes = product.sizes.find((size: any) => size.default)!;

  const initialState: CartItem = {
    id: product.id,
    cid: initialColors.id,
    sid: initialSizes.id,
    name: product.name,
    type: product.type,
    model: product.modelNumber,
    count: 0,
    details: product.details,
    image: initialColors.image,
    originalPrice: initialSizes.originalPrice,
    salePrice: initialSizes.salePrice,
    sizes: product.sizes,
    size: initialSizes.size,
    colors: product.colors,
    color: initialColors.color,
  };

  const [currentProduct, dispatch] = React.useReducer(reducer, initialState);

  const increment = dispatch.bind(null, { type: INCREMENT });
  const decrement = dispatch.bind(null, { type: DECREMENT });
  const updateCart = () => {
    addToCart(currentProduct);
    dispatch({ type: RESET });
  };

  return (
    <div className="container md:grid gap-8 lg:gap-15 grid-cols-2">
      <ProductImage image={currentProduct.image} />
      <div className="flex flex-col justify-center">
        {/* <div className="space-y-4 md:space-y-5"> */}
        <CartHeader product={currentProduct} />
        <CartDetails product={currentProduct} />
        <ColorVariants
          changeColor={dispatch}
          currentColor={currentProduct.color}
          colors={currentProduct.colors}
        />
        <SizeVariants
          changeSize={dispatch}
          currentSize={currentProduct.size}
          sizes={currentProduct.sizes}
        />
        <CartActions
          increment={increment}
          decrement={decrement}
          updateCart={updateCart}
          value={currentProduct.count}
        />
        {/* </div> */}
      </div>
    </div>
  );
}

function CartHeader({ product }: { product: CartItem }) {
  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl lg:text-3xl xl:text-10 font-semibold text-gray-500 lg:tracking-tightest">
          {product.name}
        </h2>
        <Ratings ratings={3.5} />
      </div>
      <div className="flex gap-1 items-center mt-5">
        <span className="text-xl line-through text-gray-300">
          ${product.originalPrice?.toFixed(2)}
        </span>
        <span className="font-bold text-2xl text-primary-500">
          ${product.salePrice?.toFixed(2)}
        </span>
      </div>
    </>
  );
}

function CartDetails({ product }: { product: CartItem }) {
  return (
    <>
      <p className="md:text-lg text-gray-300 leading-7 md:leading-7.5 mt-5">
        {product.details}
      </p>
      <ul className="flex gap-11 mt-5">
        <li className="space-y-1">
          <h3 className="text-sm text-gray-300">Type</h3>
          <div className="font-bold text-gray-500">{product.type}</div>
        </li>
        <li className="space-y-1">
          <h3 className="text-sm text-gray-300">Model Number</h3>
          <div className="font-bold text-gray-500">{product.model}</div>
        </li>
      </ul>
    </>
  );
}

function CartActions({ increment, decrement, updateCart, value }: CartActions) {
  return (
    <div className="flex gap-3 items-center mt-5">
      <div className="border border-gray-200 rounded overflow-hidden">
        <div className="flex -my-px">
          <Button variant="ghost" size="icon" onClick={decrement}>
            <Icons.Minus />
          </Button>
          <span className="flex border-gray-200 border-r border-l items-center justify-center w-15 shrink-0 text-sm text-gray-500">
            {value}
          </span>
          <Button variant="ghost" size="icon" onClick={increment}>
            <Icons.Plus />
          </Button>
        </div>
      </div>
      <Button onClick={updateCart} disabled={value < 1}>
        Add to cart
      </Button>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6576ff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hover:fill-primary-500 h-5"
        >
          <path d="M20.8 4.6c-1.8-1.8-4.7-1.8-6.5 0l-1.3 1.3-1.3-1.3c-1.8-1.8-4.7-1.8-6.5 0s-1.8 4.7 0 6.5l7.8 7.8 7.8-7.8c1.8-1.8 1.8-4.7 0-6.5z"></path>
        </svg>
      </button>
    </div>
  );
}
