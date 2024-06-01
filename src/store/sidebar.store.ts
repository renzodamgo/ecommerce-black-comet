import { create } from "zustand";

type SidebarStore = {
  isOpen: boolean;
  toggle: () => void;
};

const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  toggle: () => set((state: any) => ({ isOpen: !state.isOpen })),
}));

export default useSidebarStore;
