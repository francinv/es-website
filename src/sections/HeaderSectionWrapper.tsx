export interface WrapperProps {
  children: React.ReactNode;
}

const HeaderSectionWrapper = ({ children }: WrapperProps) => {
  return (
    <section className="py-6 flex flex-col md:flex-row items-center justify-center md:justify-between">
      {children}
    </section>
  );
};

export { HeaderSectionWrapper };
