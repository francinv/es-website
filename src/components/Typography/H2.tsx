import { TypographyProps } from "@app/types";

const H2 = ({ children, className }: TypographyProps) => {
  return <h2 className={`text-2xl font-normal ${className}`}>{children}</h2>;
};

export { H2 };
