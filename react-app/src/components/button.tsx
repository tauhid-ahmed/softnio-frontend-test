import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";

type ButtonVariant = {};

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0";

const variantClasses = {
  primary: "bg-primary-500 text-white px-5 py-2 text-xsm leading-5",
  secondary: "bg-secondary-500 text-gray-500 py-2 px-5",
  ghost: "bg-transparent hover:bg-gray-200",
  outline: "border border-gray-200 text-xsm text-gray-500 font-bold px-4",
};

const sizeClasses = {
  icon: "size-9",
  pill: "rounded-full",
};

export function Button({
  asChild = false,
  children,
  className,
  size,
  variant = "primary",
  ...props
}: any) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={classNames(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
