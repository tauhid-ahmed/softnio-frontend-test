import * as RadioGroup from "@radix-ui/react-radio-group";
import classNames from "classnames";
import { SET_SIZE } from "./constant";

export function SizeSelector({ sizes, changeSize, currentSize }: any) {
  console.log(currentSize);
  return (
    <div className="space-y-2.5">
      <h3 className="font-bold text-lg text-gray-500">Wrist Size</h3>
      <RadioGroup.Root
        name="size"
        value={currentSize}
        onValueChange={(size) => changeSize({ type: SET_SIZE, payload: size })}
        className="flex gap-3 w-85"
      >
        {sizes.map((wristSize: any, index: number) => (
          <RadioGroup.Item
            key={wristSize.size + index}
            value={wristSize.size}
            className={classNames(
              "border border-gray-200 flex items-center justify-center flex-1 h-9 data-[state=checked]:border-primary-500 rounded gap-1"
            )}
          >
            <span
              className={classNames("text-sm font-bold", {
                "text-primary-500": currentSize === wristSize.size,
              })}
            >
              {wristSize.size.toUpperCase()}
            </span>
            <span className="text-xs">${wristSize.price.toFixed(2)}</span>
            <RadioGroup.Indicator />
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
}
