import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-gray-700 text-white hover:bg-black",
        secondary:
          "border-transparent bg-gradient-to-br via-gray-700 from-gray-500 to-black text-white hover:bg-black rounded-l-none text-sm",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
      size: {
        default: "text-xs px-2.5 py-0.5",
        sm: "text-base px-3 py-2",
        lg: "text-lg",
      },
      type: {
        default: "",
        square: "rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      type: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, type, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, type }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
