import React from 'react'
import { ImUser } from "react-icons/im";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
const NavbarDesktopProfile = () => {
  return (
    <Popover>
    <PopoverTrigger>
      <ImUser />
    </PopoverTrigger>
    <PopoverContent sideOffset={6} className="w-76 p-6 py-8 " align="end" >
      Place content for the popover here.
    </PopoverContent>
  </Popover>
  )
}

export default NavbarDesktopProfile