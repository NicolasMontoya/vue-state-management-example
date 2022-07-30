import { createStore } from 'vuex'
// Import axios to make HTTP requests
export default createStore({
    state: {
        loading: false,
        products: [],
        cart: []
    },
    getters: {
        getProducts(state) {
            return state.products;
          },
          getCart(state) {
            return state.cart;
          }
    },
    actions: {
        async search({ commit }) {
            commit('SET_LOADING', true);
            const response = await fetch('http://localhost:8000/products')
            const prod = await response.json();
            const products = prod.map((item) => ({
              id: item['Order ID'],
              title: item['Product'],
              description: item['Purchase Address'],
              price: item['Price Each'],
              isAdded: false,
            })).slice(0, 20);
            commit('SET_PRODUCTS', products);
            commit('SET_LOADING', false);
          },
          add({commit}, product) {
            commit('ADD_TO_CART', product);
          }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
        ADD_TO_CART(state, product) {
            product.isAdded = true;
            state.cart.push(product);
        }
    }
})