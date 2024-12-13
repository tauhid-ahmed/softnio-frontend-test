export type ProductColor = {
  id: string;
  color: string;
  image: string;
  default: boolean;
};

export type ProductSize = {
  id: string;
  size: string;
  originalPrice: number;
  salePrice: number;
  default: boolean;
};

export type Product = {
  id: string;
  name: string;
  reviews: number;
  rating: number;
  type: string;
  modelNumber: string;
  details: string;
  colors: ProductColor[];
  sizes: ProductSize[];
};

export const products: Product[] = [
  {
    id: "HBaMPvBqLBsGZWQrSKI",
    name: "Classy Modern Smart Watch",
    reviews: 2,
    rating: 4.5,
    type: "Watch",
    modelNumber: "Forerunner 290XT",
    details:
      "I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
    colors: [
      {
        id: "HBaMPvBqLBsGZWQrSKI101",
        color: "purple",
        image: "/images/watch-purple.png",
        default: true,
      },
      {
        id: "HBaMPvBqLBsGZWQrSKI102",
        color: "cyan",
        image: "/images/watch-cyan.png",
        default: false,
      },
      {
        id: "HBaMPvBqLBsGZWQrSKI103",
        color: "blue",
        image: "/images/watch-blue.png",
        default: false,
      },
      {
        id: "HBaMPvBqLBsGZWQrSKI104",
        color: "black", // Updated from blue for better clarity
        image: "/images/watch-black.png",
        default: false,
      },
    ],
    sizes: [
      {
        id: "HBaMPvBqLBsGZWQrSKI201",
        size: "S",
        originalPrice: 89,
        salePrice: 69,
        default: false,
      },
      {
        id: "HBaMPvBqLBsGZWQrSKI202",
        size: "M",
        originalPrice: 99,
        salePrice: 79,
        default: true,
      },
      {
        id: "HBaMPvBqLBsGZWQrSKI203",
        size: "L",
        originalPrice: 109,
        salePrice: 89,
        default: false,
      },
      {
        id: "HBaMPvBqLBsGZWQrSKI204",
        size: "XL",
        originalPrice: 119,
        salePrice: 99,
        default: false,
      },
    ],
  },
];
