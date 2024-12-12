import * as RadioGroup from "@radix-ui/react-radio-group";
import classNames from "classnames";
import { SET_COLOR } from "./constant";

export function ColorSelector({ colors, changeColor, currentColor }: any) {
  return (
    <div>
      <RadioGroup.Root
        name="color"
        value={currentColor}
        onValueChange={(color) =>
          changeColor({ type: SET_COLOR, payload: color })
        }
        className="flex gap-5 items-center"
      >
        {colors.map((color: any, index: number) => (
          <RadioGroup.Item
            key={color + index}
            value={color.color_name}
            className={classNames(
              "size-4 inline-block rounded-full relative after:absolute after:inset-0.5 after:rounded-full after:border-white transition-transform duration-500",
              {
                "bg-primary-500 after:bg-primary-500":
                  color.color_name === "purple",
                "bg-cyan-500 after:bg-cyan-500": color.color_name === "cyan",
                "bg-blue-500 after:bg-blue-500": color.color_name === "blue",
                "bg-gray-500 after:bg-gray-500": color.color_name === "black",
                "size-6 after:border": color.color_name === currentColor,
                "hover:scale-125": color.color_name !== currentColor,
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
