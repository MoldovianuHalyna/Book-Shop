import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary: "bg-primary !text-white shadow-xs hover:bg-primary/90",
        default:
          "bg-(--color-brand-darkGray) hover:bg-(--color-brand-darkGray-hover) text-white shadow-xs",
        destructive:
          "bg-orange-600 text-white! shadow-xs hover:bg-orange-700 focus-visible:ring-orange-300/20 dark:focus-visible:ring-orange-400/40 dark:bg-orange-700/60",
        outline:
          "border border-input bg-background shadow-xs hover:bg-gray-100 hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-(--hover-color) hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        assistance:
          "w-full text-[20px] bg-[var(--color-brand-yellow)] rounded-lg shadow-md py-4 text-center font-medium active:text-[var(--color-brand-yellow)] active:bg-[var(--color-brand-black)]",
        text: "flex items-center gap-0 text-sm bg-transparent shadow-none hover:bg-[var(--color-bg-hover)] !text-muted-foreground px-0",
      },
      size: {
        primary: "h-10 px-4 py-2 rounded-[40px]!",
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
      color: {
        default: "text-primary",
        white: "text-white",
        orange: "text-orange-500",
        blue: "text-blue-500",
        green: "text-green-500",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  color = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    color?: "default" | "white" | "orange" | "blue" | "green";
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={buttonVariants({ variant, size, color, className })}
      {...props}
    />
  );
}

export { Button, buttonVariants };
