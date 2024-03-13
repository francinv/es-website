import { TypographyProps } from "@app/types";

const H1 = ({ children, className }: TypographyProps) => {
  return (
    <h1 className={`text-xl md:text-2xl font-medium ${className}`}>
      {children}
    </h1>
  );
};

export { H1 };
