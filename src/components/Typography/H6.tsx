import { TypographyProps } from "@app/types";

const H6 = ({ children, className }: TypographyProps) => {
  return <h6 className={`text-lg ${className}`}>{children}</h6>;
};

export { H6 };
