"use client";

import React, { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils";
import { motion, type MotionProps } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";

const baseVariants = tv({
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
});

const buttonVariants = tv({
  extend: baseVariants,
  variants: {
    color: {
      primary: "bg-primary text-white hover:bg-primary/80",
      secondary: "bg-secondary text-white hover:bg-secondary/80",
      success: "bg-success text-white hover:bg-success/80",
      danger: "bg-danger text-white hover:bg-danger/80",
      warning: "bg-warning text-white hover:bg-warning/80",
      info: "bg-info text-white hover:bg-info/80",
    },
  },
});

const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> &
    MotionProps
>(({ className, children, color, noneStyle, ...props }) => {
  return (
    <motion.button
      whileTap={{
        scale: 0.95,
      }}
      className={cn(buttonVariants({ color }), className)}
      {...props}>
      {children}
    </motion.button>
  );
});
Button.displayName = "Button";

export default Button;
export { buttonVariants };
