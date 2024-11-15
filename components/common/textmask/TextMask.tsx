import React from "react";
import texture from "@/public/texture.png";
import { cn } from "@/lib/utils";

interface TextMaskProps {
  className: string;
  text: string;
}

const TextMask: React.FC<TextMaskProps> = ({ className, text }) => {
  return (
    <div className="h-fit capitalize">
      <h1
        style={{
          background: `url(${texture.src}) 0 0 / cover no-repeat`,
          color: "transparent",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className={cn(
          "font-bold text-2xl text-transparent py-2",
          className
        )}
      >
        {text}
      </h1>
    </div>
  );
};

export default TextMask;
