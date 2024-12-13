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
    <div className="container md:grid gap-6 lg:gap-15 grid-cols-2">
      <ProductImage image={currentProduct.image} />
      <div className="flex items-center">
        <div className="space-y-4 md:space-y-5">
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
        </div>
      </div>
    </div>
  );
}

function CartHeader({ product }: { product: CartItem }) {
  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-500">
          {product.name}
        </h2>
        <Ratings ratings={3.5} />
      </div>
      <div className="flex gap-1 items-center">
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
      <p className="md:text-lg text-gray-300 leading-7 md:leading-7.5 line-clamp-2 md:line-clamp-none">
        {product.details}
      </p>
      <ul className="flex gap-6">
        <li className="space-y-1">
          <h3 className="text-sm">Type</h3>
          <div className="font-bold text-gray-500">{product.type}</div>
        </li>
        <li className="space-y-1">
          <h3 className="text-sm">Model Number</h3>
          <div className="font-bold text-gray-500">{product.model}</div>
        </li>
      </ul>
    </>
  );
}

function CartActions({ increment, decrement, updateCart, value }: CartActions) {
  return (
    <div className="flex gap-3 items-center">
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
      <Icons.Love className="size-6" />
    </div>
  );
}
