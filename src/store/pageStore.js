import { create } from 'zustand';

const usePageStore = create((set) => ({
  page: 1, // Default page
  setPage: (newPage) => set({ page: newPage }),
  isDarkMode: false, // Default theme is light
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default usePageStore;
