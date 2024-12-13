import * as RadioGroup from "@radix-ui/react-radio-group";
import classNames from "classnames";
import { SET_COLOR, SET_SIZE } from "./constant";
import { type ProductSizeVariant } from "../../data";

type SizeVariantsProps = {
  variants: ProductSizeVariant[];
  changeVariant: ({ type, payload }: { type: string; payload: {} }) => void;
  currentVariant: string;
};

export function SizeVariants({
  variants,
  changeVariant,
  currentVariant,
}: SizeVariantsProps) {
  const handleVariantChange = (variant: string) => {
    const [nextVariant] = variants.filter((item) => item.variant === variant);
    changeVariant({ type: SET_SIZE, payload: nextVariant });
  };
  return (
    <div className="space-y-2.5">
      <h3 className="font-bold md:text-lg text-gray-500">Wrist Size</h3>
      <RadioGroup.Root
        name="size"
        value={currentVariant}
        onValueChange={handleVariantChange}
        className="flex gap-3 w-80 md:w-85"
      >
        {variants.map((item: ProductSizeVariant) => (
          <RadioGroup.Item
            key={item.variant}
            value={item.variant}
            className={classNames(
              "border border-gray-200 flex items-center justify-center flex-1 h-9 data-[state=checked]:border-primary-500 rounded data-[state=unchecked]:hover:border-primary-500/80 transition-colors"
            )}
          >
            <span
              className={classNames("text-sm font-bold mr-1", {
                "text-primary-500": currentVariant === item.variant,
                "hover:text-primary-500/80": currentVariant !== item.variant,
              })}
            >
              {item.variant.toUpperCase()}
            </span>
            <span className="text-xs">${item.price.toFixed(2)}</span>
            <RadioGroup.Indicator />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
}

export function ColorVariants({
  variants,
  changeVariant,
  currentVariant,
}: any) {
  const handleVariantChange = (variant: string) => {
    const [nextVariant] = variants.filter(
      (item: ProductSizeVariant) => item.variant === variant
    );
    changeVariant({ type: SET_COLOR, payload: nextVariant });
  };

  return (
    <div className="space-y-2.5">
      <h3 className="font-bold md:text-lg text-gray-500">Band Color</h3>
      <RadioGroup.Root
        name="color"
        value={currentVariant}
        onValueChange={handleVariantChange}
        className="flex gap-3 md:gap-5 items-center"
      >
        {variants.map((item: any) => (
          <RadioGroup.Item
            key={item.id}
            value={item.variant}
            className={classNames(
              "size-4 inline-block rounded-full relative after:absolute after:inset-[2px] after:rounded-full after:border-white",
              {
                "bg-primary-500 after:bg-primary-500":
                  item.variant === "purple",
                "bg-cyan-500 after:bg-cyan-500": item.variant === "cyan",
                "bg-blue-500 after:bg-blue-500": item.variant === "blue",
                "bg-gray-500 after:bg-gray-500": item.variant === "black",
                "size-5 md:size-6 after:border-[1.5px]":
                  item.variant === currentVariant,
                "hover:scale-125": item.variant !== currentVariant,
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
