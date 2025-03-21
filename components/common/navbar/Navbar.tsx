"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const isMobile = useIsMobile();

  return <>{!isMobile ? <NavbarDesktop /> : <NavbarMobile />}</>;
};

export default Navbar;
