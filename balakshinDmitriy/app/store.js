import { create } from 'zustand';
import axios from 'axios';
import { URL, API_KEY, API_SECRET } from '@env';

const apiClient = axios.create({
  baseURL: `https://${URL}/wp-json/wc/v3/`,
  auth: {
    username: API_KEY,
    password: API_SECRET,
  },
});

export const useStore = create((set) => ({
  products: [],
  cart: [],

  fetchProducts: async (productIds) => {
    try {
      const products = await Promise.all(
        productIds.map((id) => apiClient.get(`products/${id}`).then((res) => res.data))
      );
      set({ products });
    } catch (error) {
      console.error('Ошибка при запросе продуктов:', error);
    }
  },

  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
}));
