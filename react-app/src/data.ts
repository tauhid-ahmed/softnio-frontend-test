export type ProductColorVariant = {
  id: string;
  variant: string;
  image: string;
  default: boolean;
};

export type ProductSizeVariant = {
  id: string;
  variant: string;
  price: number;
  default: boolean;
};

export type Product = {
  id: string;
  name: string;
  reviews: number;
  rating: number;
  originalPrice: number;
  salePrice: number;
  type: string;
  modelNumber: string;
  details: string;
  variants: ProductColorVariant[];
  sizes: ProductSizeVariant[];
};

export const products: Product[] = [
  {
    id: "HBaMPvBqLBsGZWQrSKI",
    name: "Classy Modern Smart Watch",
    reviews: 2,
    rating: 4.5,
    originalPrice: 99,
    salePrice: 79,
    type: "Watch",
    modelNumber: "Forerunner 290XT",
    details:
      "I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
    variants: [
      {
        id: "HBaMPvBqLBsGZWQrSKI101",
        variant: "purple",
        image: "/images/watch-purple.png",
        default: true,
      },
      {
        id: "HBaMPvBqLBsGZWQrSKI102",
        variant: "cyan",
        image: "/images/watch-cyan.png",
        default: false,
      },
      {
        id: "HBaMPvBqLBsGZWQrSKI103",
        variant: "blue",
        image: "/images/watch-blue.png",
        default: false,
      },
      {
        id: "HBaMPvBqLBsGZWQrSKI104",
        variant: "black", // Updated from blue for better clarity
        image: "/images/watch-black.png",
        default: false,
      },
    ],
    sizes: [
      { id: "HBaMPvBqLBsGZWQrSKI201", variant: "S", price: 69, default: false },
      { id: "HBaMPvBqLBsGZWQrSKI202", variant: "M", price: 79, default: true },
      { id: "HBaMPvBqLBsGZWQrSKI203", variant: "L", price: 89, default: false },
      {
        id: "HBaMPvBqLBsGZWQrSKI204",
        variant: "XL",
        price: 99,
        default: false,
      },
    ],
  },
];
