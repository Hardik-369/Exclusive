import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, User } from '../types';

interface AppStore {
  // Cart & Wishlist
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  clearCart: () => void;
  moveAllToCart: () => void;

  // Auth
  user: User | null;
  users: User[]; // Mock "database" in local storage
  setUser: (user: User | null) => void;
  register: (name: string, email: string, password: string) => { success: boolean; error?: string };
  login: (email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
}

export const useStore = create<AppStore>()(
  persist(
    (set, get) => ({
      cart: [
        {
          id: '3',
          name: 'LCD Monitor',
          price: 650,
          originalPrice: 400,
          image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop',
          category: 'Computers',
          rating: 5.0,
          reviews: 99,
          discount: 30,
          quantity: 1
        },
        {
          id: '1',
          name: 'H1 Gamepad',
          price: 550,
          originalPrice: 160,
          image: 'https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?q=80&w=800&auto=format&fit=crop',
          category: 'Gaming',
          rating: 4.5,
          reviews: 88,
          discount: 40,
          quantity: 2
        }
      ],
      wishlist: [],
      user: null,
      users: [],

      addToCart: (product, quantity = 1) => {
        const { cart } = get();
        const existing = cart.find((item) => item.id === product.id);
        if (existing) {
          set({
            cart: cart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            ),
          });
        } else {
          set({ cart: [...cart, { ...product, quantity }] });
        }
      },

      removeFromCart: (productId) => {
        set({ cart: get().cart.filter((item) => item.id !== productId) });
      },

      updateQuantity: (productId, quantity) => {
        set({
          cart: get().cart.map((item) =>
            item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
          ),
        });
      },

      toggleWishlist: (product) => {
        const { wishlist } = get();
        const existing = wishlist.find((item) => item.id === product.id);
        if (existing) {
          set({ wishlist: wishlist.filter((item) => item.id !== product.id) });
        } else {
          set({ wishlist: [...wishlist, product] });
        }
      },

      isInWishlist: (productId) => {
        return get().wishlist.some((item) => item.id === productId);
      },

      clearCart: () => set({ cart: [] }),
      
      moveAllToCart: () => {
        const { wishlist, cart } = get();
        if (wishlist.length === 0) return;

        const newCart = [...cart];
        wishlist.forEach((product) => {
          const existing = newCart.find((item) => item.id === product.id);
          if (existing) {
            existing.quantity += 1;
          } else {
            newCart.push({ ...product, quantity: 1 });
          }
        });

        set({ cart: newCart, wishlist: [] });
      },

      setUser: (user) => set({ user }),

      register: (name, email, password) => {
        const { users } = get();
        if (users.find(u => u.email === email)) {
          return { success: false, error: 'User already exists' };
        }
        const newUser: User = { 
          id: Math.random().toString(36).substr(2, 9), 
          name, 
          email, 
          password, 
          role: 'user' 
        };
        set({ users: [...users, newUser], user: { id: newUser.id, name: newUser.name, email: newUser.email, role: 'user' } });
        return { success: true };
      },

      login: (email, password) => {
        // Default Admin Check
        if (email === 'admin@exclusive.com' && password === 'admin123') {
          const adminUser: User = {
            id: 'admin-id',
            name: 'Admin User',
            email: 'admin@exclusive.com',
            role: 'admin'
          };
          set({ user: adminUser });
          return { success: true };
        }

        const { users } = get();
        const foundUser = users.find(u => u.email === email && u.password === password);
        if (foundUser) {
          set({ user: { id: foundUser.id, name: foundUser.name, email: foundUser.email, role: foundUser.role || 'user' } });
          return { success: true };
        }
        return { success: false, error: 'Invalid email or password' };
      },

      logout: () => set({ user: null }),
    }),
    {
      name: 'exclusive-storage',
    }
  )
);
