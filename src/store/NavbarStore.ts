import { create } from "zustand";
import { UserIcon, HouseIcon } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface TabProps {
  title: string;
  link: string;
  icon?: LucideIcon;
  current: boolean;
}

interface NavbarStore {
  tabs: TabProps[];
  setTabs: (tabs: TabProps[]) => void;
  setCurrentTab: (title: string) => void;
  getCurrentTab: () => TabProps | undefined;
}

const predefinedTabs: TabProps[] = [
  { title: "Home", link: "/", icon: HouseIcon, current: true },
  { title: "Contact", link: "/contact", icon: UserIcon, current: false },
  {
    title: "Discord",
    link: "https://discord.com/invite/coding",
    current: false,
  },
];

export const NavbarStore = create<NavbarStore>((set, get) => ({
  tabs: predefinedTabs,
  setTabs: (tabs) => set({ tabs }),
  setCurrentTab: (title) =>
    set((state) => ({
      tabs: state.tabs.map((tab) => ({
        ...tab,
        current: tab.title === title,
      })),
    })),
  getCurrentTab: () => get().tabs.find((tab) => tab.current),
}));
