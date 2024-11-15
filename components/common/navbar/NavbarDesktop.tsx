"use client";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import React from "react";
import { navbarLinks } from "./navbarLinks";
import NavbarDesktopDropdown from "./NavbarDesktopDropdown";
import NavbarDesktopSearch from "./NavbarDesktopSearch";
import NavbarDesktopNotifications from "./NavbarDesktopNotifications";
import NavbarDesktopProfile from "./NavbarDesktopProfile";

const NavbarDesktop: React.FC = () => {
  return (
    <header className="h-20 bg-background flex items-center justify-center sticky top-0 z-10">
      <NavigationMenu className="flex items-center justify-between text-foreground w-full max-w-[1650px]">
        <div>Helloc</div>
        <div className="flex justify-center items-center h-full space-x-4 w-full">
          {navbarLinks.map((item, index) => (
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
