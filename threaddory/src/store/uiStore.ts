import { create } from 'zustand';

interface UiState {
  menuOpen: boolean;
  searchOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
}

export const useUiStore = create<UiState>((set) => ({
  menuOpen: false,
  searchOpen: false,
  setMenuOpen: (menuOpen) => set({ menuOpen }),
  setSearchOpen: (searchOpen) => set({ searchOpen }),
}));
