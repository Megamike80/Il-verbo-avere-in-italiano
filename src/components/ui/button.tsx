import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium select-none transition-[transform,background-color,color,border-color,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-fg hover:bg-accent/90",
        secondary: "bg-surface-2 text-ink hover:bg-border",
        ghost: "bg-transparent text-ink hover:bg-surface-2",
        outline: "border border-border bg-surface text-ink hover:bg-surface-2",
        option:
          "border border-border bg-surface text-ink text-left justify-start hover:border-accent/50 hover:bg-accent-soft",
      },
      size: {
        sm: "h-10 px-3 text-sm rounded-sm",
        md: "h-12 px-5 text-base rounded-md",
        lg: "min-h-14 px-6 text-lg rounded-md",
        option: "min-h-14 w-full px-4 py-3 rounded-md",
        icon: "size-11 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
