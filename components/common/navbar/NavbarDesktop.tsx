"use client";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import type React from "react";
import { navbarLinks } from "./navbarLinks";
import NavbarDesktopDropdown from "./NavbarDesktopDropdown";
import NavbarDesktopSearch from "./NavbarDesktopSearch";
import NavbarDesktopNotifications from "./NavbarDesktopNotifications";
import NavbarDesktopProfile from "./NavbarDesktopProfile";
import AnimatedLogo from "./AnimatedLogo";

const NavbarDesktop: React.FC = () => {
  return (
    <header className="h-20 bg-background flex items-center justify-center sticky top-0 z-10">
      <NavigationMenu className="flex items-center justify-between text-foreground w-full max-w-[1650px] px-4">
        <AnimatedLogo />
        <div className="flex justify-center items-center h-full space-x-4 w-full">
          {navbarLinks.map((item: (typeof navbarLinks)[0], index: number) => (
            <NavbarDesktopDropdown key={index} item={item} />
          ))}
        </div>
        <div className="flex items-center gap-x-5">
          <NavbarDesktopSearch />
          <NavbarDesktopNotifications />
          <NavbarDesktopProfile />
        </div>
      </NavigationMenu>
    </header>
  );
};

export default NavbarDesktop;
