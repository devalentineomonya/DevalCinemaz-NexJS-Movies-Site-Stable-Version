import { navbarLinks } from "./navbarLinks";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavbarDesktopDropdownProps {
  item: (typeof navbarLinks)[0];
  level?: number;
}

const NavbarDesktopDropdown: React.FC<NavbarDesktopDropdownProps> = ({
  item,
  level = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const hasChildren = item.subLinks && item.subLinks.length > 0;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  const handleMouseToggle = (state: boolean) => setIsOpen(state);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => handleMouseToggle(true)}
      onMouseLeave={() => handleMouseToggle(false)}
      onFocus={() => handleMouseToggle(true)}
      onBlur={() => handleMouseToggle(false)}
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      <div
        className={cn(
          "relative isolate flex items-center justify-between px-4 py-3 text-sm",
          "cursor-pointer hover:bg-background/80 before:-z-10 before:absolute before:inset-0 before:bg-gradient-to-r",
          "before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity delay-150 duration-300",
          level > 0 ? "before:border-l-4 before:border-red-500 before:from-red-900/70 my-1" : ""
        )}>
        <Link
          href={item.href || "#"}
          className="font-medium w-full h-full inline-block"
        >
          {item.name}
        </Link>
        {hasChildren && (
          <svg
            className={`w-4 h-4 ml-2 transform transition-transform ${
              isOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </div>

      {hasChildren && isOpen && (
        <div
          className={`
            absolute bg-background shadow-lg z-50 min-w-64 py-3 px-4
            ${level === 0 ? "top-full left-0" : "left-full top-0"}
            animate-fadeIn
          `}
        >
          {item.subLinks?.map((subItem, index) => (
            <NavbarDesktopDropdown
              key={index}
              item={subItem}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarDesktopDropdown;
