import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-lg font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          "bg-(--color-foreground) text-[var(--color-accent)] rounded-xl shadow-lg dark:shadow-orange-400 hover:bg-(--hover-color)",
        icon: "rounded-full bg-[var(--color-background)] text-[var(--color-foreground)] transition-colors duration-500 hover:text-[var(--color-background)]",
      },
      size: {
        primary: "h-10 px-4 py-2 rounded-[40px]",
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 w-[40vh] rounded-md px-6 has-[>svg]:px-4",
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
      variant: "primary",
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
