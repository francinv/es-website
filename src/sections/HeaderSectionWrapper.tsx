export interface WrapperProps {
  children: React.ReactNode;
}

const HeaderSectionWrapper = ({ children }: WrapperProps) => {
  return (
    <section className="py-6 sm:flex sm:flex-col md:flex-row sm:items-center sm:justify-center md:justify-between">
      {children}
    </section>
  );
};

export { HeaderSectionWrapper };
