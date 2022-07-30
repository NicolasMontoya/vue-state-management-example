import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want, but it's best to use the name of the store and surround it with `use` and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
    state: () => ({
      loading: false,
      products: [],
      cart: []
    }),
    getters: {
      getProducts(state) {
        return state.products;
      },
      getCart(state) {
        return state.cart;
      }
    },
    actions: {
      async search() {
        this.loading = true;
        const response = await fetch('http://localhost:8000/products')
        const prod = await response.json();
        this.products = prod.map((item) => ({
          id: item['Order ID'],
          title: item['Product'],
          description: item['Purchase Address'],
          price: item['Price Each'],
          isAdded: false,
        })).slice(0, 20);
        this.loading = false;
      },
      add(product) {
        product.isAdded = true;
        this.cart.push(product);
      }
    },
})