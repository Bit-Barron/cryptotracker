import { create } from "zustand";

interface SearchStore {
  searchTerm: string;
  setSearchTerm: (search: string) => void;
}

export const searchStore = create<SearchStore>((set) => ({
  searchTerm: "",
  setSearchTerm: (searchTerm) => set({ searchTerm }),
}));
