import React from "react";
import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  SET_COLOR,
  SET_SIZE,
} from "./constant";

type ProductContextProps = {
  children: React.ReactNode;
};

type ActionType = {
  type: string;
  payload: string | any;
};

type ProductState = {
  color: string;
  size: string;
  count: number;
  cart: any[];
};

const ProductContext = React.createContext<{
  state: ProductState;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: {
    color: "",
    size: "",
    count: 0,
    cart: [],
  },
  dispatch: () => {},
});

const initialState: ProductState = {
  color: "",
  size: "",
  count: 0,
  cart: [],
};

const reducer = (state: ProductState, action: ActionType): ProductState => {
  switch (action.type) {
    case SET_COLOR:
      return { ...state, color: action.payload };
    case SET_SIZE:
      return { ...state, size: action.payload };
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            name: action.payload.name,
            count: action.payload.count,
            color: action.payload.color,
            size: action.payload.size,
          },
        ],
      };
    default:
      return state;
  }
};

export function ProductsProvider({ children }: ProductContextProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => React.useContext(ProductContext);
