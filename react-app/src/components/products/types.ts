export type Store = {
  isCartOpen: boolean;
  cart: CartItem[];
};

export type StoreAction = {
  payload?: any;
  type: any;
};

export type CartActions = {
  increment: () => void;
  decrement: () => void;
  updateCart: () => void;
  value: number;
};

export type ColorVariant = {
  id: string;
  color: string;
  image: string;
  default: boolean;
};

export type SizeVariant = {
  id: string;
  size: string;
  originalPrice: number;
  salePrice: number;
  default: boolean;
};

export type CartItem = {
  id: string;
  cid: string;
  sid: string;
  name: string;
  image: string;
  colors: ColorVariant[];
  sizes: SizeVariant[];
  type: string;
  details: string;
  originalPrice: number;
  salePrice: number;
  count: number;
  size: string;
  color: string;
  model: string;
};

export type VariantPayload = {
  size?: string;
  image?: string;
  color?: string;
  salePrice?: number;
  originalPrice?: number;
};
