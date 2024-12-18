import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode, ComponentPropsWithoutRef } from "react";

// Define types for the variant and size options
type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "icon" | "pill";

// Define props for the Button component
interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  asChild?: boolean; // Use `Slot` component if `asChild` is true
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 text-white px-5 py-2 text-xsm leading-5 font-bold",
  secondary: "bg-secondary-500 text-gray-500 h-[42px] px-7 shadow-xl font-bold",
  ghost: "bg-transparent hover:bg-gray-200",
  outline: "border border-gray-200 text-xsm text-gray-500 font-bold px-4",
};

const sizeClasses: Record<ButtonSize, string> = {
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
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={classNames(
        baseClasses,
        variantClasses[variant],
        size && sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
