import React from "react";
import { TypographyProps } from "@app/types";

const Title = ({ children, className }: TypographyProps) => {
  return (
    <h1 className={`text-2xl md:text-4xl font-semibold ${className}`}>
      {children}
    </h1>
  );
};

export { Title };
