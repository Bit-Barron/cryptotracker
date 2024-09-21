"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Menu } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../ui/theme-toggle";
import { LanguageStore } from "@/store/LanguageStore";
import { NavbarStore } from "@/store/NavbarStore";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { languages, currentLanguage, setCurrentLanguage } = LanguageStore();
  const { tabs } = NavbarStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background shadow w-full x-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.title}
                href={tab.link}
                className="text-muted-foreground hover:text-primary hover:border-primary border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                {tab.title}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden sm:ml-6 sm:flex sm:items-center">
          <ModeToggle />
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" onClick={() => setIsOpen(!isOpen)}>
                <Globe className="h-[1.2rem] w-[1.2rem] mr-2" />
                {currentLanguage}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => {
                    setCurrentLanguage(lang);
                    setIsOpen(false);
                  }}
                >
                  {lang}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    {languages}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang}
                      onClick={() => setCurrentLanguage(lang)}
                    >
                      {lang}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
