import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { navbarLinks } from "./navbarLinks";
import { cn } from "@/lib/utils";

const renderMenuItems = (links: typeof navbarLinks, dropdown: boolean) => {
  return links?.map((link) => (
    <NavigationMenuItem
      className={cn("flex items-start justify-start px-3 group relative", {
        "w-full": dropdown,
      })}
      key={link.name}
    >
      {link.subLinks ? (
        <>
          <span className="cursor-pointer" tabIndex={0}>
            {link.name}
          </span>
          <div className="w-full absolute hidden group-hover:block group-focus:block group top-11">
            <NavigationMenuList
              className={cn(
                "flex-col absolute bg-black w-full min-w-60 pl-2 py-3",
                {
                  "left-full hidden group-hover:block": dropdown,
                  "left-0": !dropdown,
                }
              )}
            >
              {renderMenuItems(link.subLinks, true)}
            </NavigationMenuList>
          </div>
        </>
      ) : (
        <NavigationMenuLink
          className="py-3 w-full inline-block relative isolate transition-all ease-o group before:invisible group-hover:before:visible before:content-[''] before:w-full before:h-full before:absolute before:bg-gradient-to-r before:via-transparent before:from-red-700 before:to-transparent"
          href={link.href}
        >
          {link.name}
        </NavigationMenuLink>
      )}
    </NavigationMenuItem>
  ));
};

const NavbarDesktop = () => {
  return (
    <header className="h-16 bg-black flex items-center justify-center">
      <NavigationMenu className="items-center text-white h-16 w-full max-w-[1650px]">
        <NavigationMenuList className="h-16 gap-x-4">
          {renderMenuItems(navbarLinks, false)}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default NavbarDesktop;
