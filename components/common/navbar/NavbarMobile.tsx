"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { navbarLinks } from "./navbarLinks";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedLogo from "./AnimatedLogo";
import NavbarDesktopSearch from "./NavbarDesktopSearch";
import NavbarDesktopNotifications from "./NavbarDesktopNotifications";
import NavbarDesktopProfile from "./NavbarDesktopProfile";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-16 bg-background flex items-center justify-between px-4 sticky top-0 z-10">
      <AnimatedLogo />

      <div className="flex items-center gap-2">
        <NavbarDesktopSearch />

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] sm:w-[350px] pt-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <AnimatedLogo />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-col gap-1">
                {navbarLinks.map((item, index) =>
                  item.subLinks ? (
                    <Accordion type="single" collapsible key={index}>
                      <AccordionItem value={item.name} className="border-b-0">
                        <AccordionTrigger className="py-2 hover:bg-muted/50 px-2 rounded-md">
                          {item.name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-1 pl-4">
                            {item.subLinks.map((subItem, subIndex) =>
                              subItem.subLinks ? (
                                <Accordion
                                  type="single"
                                  collapsible
                                  key={subIndex}
                                >
                                  <AccordionItem
                                    value={subItem.name}
                                    className="border-b-0"
                                  >
                                    <AccordionTrigger className="py-2 hover:bg-muted/50 px-2 rounded-md">
                                      {subItem.name}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                      <div className="flex flex-col gap-1 pl-4">
                                        {subItem.subLinks.map(
                                          (nestedItem, nestedIndex) => (
                                            <Link
                                              href={nestedItem.href || "#"}
                                              key={nestedIndex}
                                              className="py-2 hover:bg-muted/50 px-2 rounded-md"
                                              onClick={() => setOpen(false)}
                                            >
                                              {nestedItem.name}
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>
                              ) : (
                                <Link
                                  href={subItem.href || "#"}
                                  key={subIndex}
                                  className="py-2 hover:bg-muted/50 px-2 rounded-md"
                                  onClick={() => setOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              )
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      key={index}
                      className="py-2 hover:bg-muted/50 px-2 rounded-md"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>

              <div className="flex items-center justify-center gap-6 mt-4">
                <NavbarDesktopNotifications />
                <NavbarDesktopProfile />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavbarMobile;
