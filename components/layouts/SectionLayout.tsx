import { cn } from "@/lib/utils";
import React from "react";
interface SectionLayoutProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}
const SectionLayout: React.FC<SectionLayoutProps> = ({
  className,
  title,
  children,
}) => {
  return (
    <section
      className={cn("mt-36 flex flex-col  items-center w-full", className)}
    >
      <div className="w-full max-w-[1650px] ">
        <h2 className="capitalize w-full text-start mb-5 font-semibold">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
