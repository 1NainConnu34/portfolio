import { create } from 'zustand';

interface UIState {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isLoading: true,
  setLoading: (loading) => set({ isLoading: loading }),
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}));
