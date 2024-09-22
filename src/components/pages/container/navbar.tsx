"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import LocaleSwitcher from "@/components/utils/locale-switcher";
import { Link } from "@/navigation";
import { NavbarStore } from "@/store/NavbarStore";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { tabs } = NavbarStore();
  const t = useTranslations("Navbar");

  return (
    <nav className="bg-background shadow w-full x-4 sm:px-6 lg:px-8">
      <div className="md:flex md:justify-between md:h-16">
        <div className="flex">
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {tabs.map((tab) => (
              <Link
                key={tab.title}
                href={tab.link}
                className={`text-muted-foreground ${
                  tab.current ? "border-primary text-primary" : ""
                } hover:text-primary hover:border-primary border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                {t(tab.title)}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:items-center">
          <ModeToggle />
          <LocaleSwitcher />
        </div>
        <div className="-mr-2 flex items-center sm:hidden">
          <Button
            variant="ghost"
            size="sm"
            className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {tabs.map((tab) => (
              <a
                key={tab.title}
                href={tab.link}
                className="text-muted-foreground hover:text-primary hover:bg-accent hover:border-primary border-transparent block pl-3 pr-4 py-2 text-base font-medium"
              >
                {tab.title}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-accent">
            <div className="flex items-center px-4">
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
