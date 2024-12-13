import * as RadioGroup from "@radix-ui/react-radio-group";
import classNames from "classnames";
import { SET_COLOR, SET_SIZE } from "./constant";
import {
  type SizeVariant,
  type ColorVariant,
  type VariantPayload,
} from "./types";

type SizeVariantsProps = {
  sizes: SizeVariant[];
  changeSize: ({
    type,
    payload,
  }: {
    type: string;
    payload: VariantPayload;
  }) => void;
  currentSize: string;
};

type ColorVariantsProps = {
  colors: ColorVariant[];
  changeColor: ({
    type,
    payload,
  }: {
    type: string;
    payload: VariantPayload;
  }) => void;
  currentColor: string;
};

export function SizeVariants({
  sizes,
  changeSize,
  currentSize,
}: SizeVariantsProps) {
  const handleVariantChange = (size: string) => {
    const nextSize = sizes.find((item) => item.size === size) as SizeVariant;
    changeSize({
      type: SET_SIZE,
      payload: {
        size: size,
        salePrice: nextSize.salePrice,
        originalPrice: nextSize.originalPrice,
      },
    });
  };
  return (
    <div className="space-y-2.5">
      <h3 className="font-bold md:text-lg text-gray-500">Wrist Size</h3>
      <RadioGroup.Root
        name="size"
        value={currentSize}
        onValueChange={handleVariantChange}
        className="flex gap-3 w-80 md:w-85"
      >
        {sizes.map((item: SizeVariant) => (
          <RadioGroup.Item
            key={item.size}
            value={item.size}
            className={classNames(
              "border border-gray-200 flex items-center justify-center flex-1 h-9 data-[state=checked]:border-primary-500 rounded data-[state=unchecked]:hover:border-primary-500/80 transition-colors"
            )}
          >
            <span
              className={classNames("text-sm font-bold mr-1", {
                "text-primary-500": currentSize === item.size,
                "hover:text-primary-500/80": currentSize !== item.size,
              })}
            >
              {item.size.toUpperCase()}
            </span>
            <span className="text-xs">${item.salePrice.toFixed(2)}</span>
            <RadioGroup.Indicator />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
}

export function ColorVariants({
  colors,
  changeColor,
  currentColor,
}: ColorVariantsProps) {
  const handleVariantChange = (color: string) => {
    const nextColor = colors.find(
      (item) => item.color === color
    ) as ColorVariant;
    changeColor({
      type: SET_COLOR,
      payload: {
        color,
        image: nextColor.image,
      },
    });
  };

  return (
    <div className="space-y-2.5">
      <h3 className="font-bold md:text-lg text-gray-500">Band Color</h3>
      <RadioGroup.Root
        name="color"
        value={currentColor}
        onValueChange={handleVariantChange}
        className="flex gap-3 md:gap-5 items-center transition-all"
      >
        {colors.map((item: any) => (
          <RadioGroup.Item
            key={item.id}
            value={item.color}
            className={classNames(
              "size-4 inline-block rounded-full relative after:absolute after:inset-[2px] after:rounded-full after:border-white",
              {
                "bg-primary-500 after:bg-primary-500": item.color === "purple",
                "bg-cyan-500 after:bg-cyan-500": item.color === "cyan",
                "bg-blue-450 after:bg-blue-450": item.color === "blue",
                "bg-gray-500 after:bg-gray-500": item.color === "black",
                "size-5 md:size-6 after:border-[1.5px] animate-fade-in":
                  item.color === currentColor,
                "": item.color !== currentColor,
              }
            )}
          >
            <RadioGroup.Indicator />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
}
