import { create } from "zustand";
import { persist } from "zustand/middleware";

type itemCart = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type cartStore = {
  items: itemCart[];
  addItem: (item: itemCart) => void;
  removeItem: (id: string) => void;
  removeOneItem: (id: string) => void;
};

const useCartStore = create<cartStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const itemIndex = state.items.findIndex((i) => i.id === item.id);
          if (itemIndex !== -1) {
            state.items[itemIndex].quantity += 1;
            return { items: state.items };
          }
          return { items: [...state.items, item] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      removeOneItem: (id) =>
        set((state) => {
          const itemIndex = state.items.findIndex((i) => i.id === id);
          if (itemIndex !== -1) {
            if (state.items[itemIndex].quantity > 1) {
              state.items[itemIndex].quantity -= 1;
              return { items: state.items };
            }
            return { items: state.items.filter((i) => i.id !== id) };
          }
          return { items: state.items };
        }),
    }),
    {
      name: "cart-store",
    }
  )
);

export default useCartStore;
