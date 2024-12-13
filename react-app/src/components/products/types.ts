export type CartProduct = {
  id: string;
  colorId: string;
  sizeId: string;
  size: string;
  price: number;
  count: number;
  color: string;
  image: string;
};

export type Store = {
  isCartOpen: boolean;
  cart: CartProduct[];
};

export type StoreAction = {
  payload?: any;
  type: any;
};
