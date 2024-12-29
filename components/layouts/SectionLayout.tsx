import { cn } from "@/lib/utils";
import React from "react";
interface SectionLayoutProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  nextButton?: React.ReactNode;
  prevButton?: React.ReactNode;
}
const SectionLayout: React.FC<SectionLayoutProps> = ({
  className,
  title,
  children,
  nextButton,
  prevButton,
}) => {
  return (
    <section
      className={cn("mt-36 flex flex-col  items-center w-full", className)}
    >
      <div className="w-full max-w-[1650px] ">
        <div className="flex items-center justify-between">
          <h2 className="capitalize w-full text-start mb-5 font-semibold">
            {title}
          </h2>
          <div className="flex items-center gap-2">
            {prevButton}
            {nextButton}
          </div>
        </div>

        <div className="relative">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionLayout;
