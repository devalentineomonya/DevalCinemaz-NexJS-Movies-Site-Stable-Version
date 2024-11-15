import React from "react";
import { FaBell } from "react-icons/fa6";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const NavbarDesktopNotifications = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <FaBell />
      </PopoverTrigger>
      <PopoverContent sideOffset={6} className="w-76 p-6 py-8 " align="end" >
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  );
};

export default NavbarDesktopNotifications;
