"use client";

import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  className?: string;
};

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
