import { TypographyProps } from "@app/types";

const H3 = ({ children, className }: TypographyProps) => (
  <h3 className={`text-2xl ${className}`}>{children}</h3>
);

export { H3 };
