<template>
    <CartList :list="cart" />
    <button @click="store.dispatch('search')">Update</button>
    <div v-if="loading">Cargando...</div>
    <section v-if="!loading && products?.length" v-for="product in products">
        <ProductCard @addToCart="addToCart" v-bind="product" />
    </section>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import ProductCard from '../components/ProductCard.vue';
import CartList from '../components/CartList.vue';



const store = useStore();

const products = computed(() => {
    return store.getters.getProducts;
});

const loading = computed(() => {
    return store.state.loading;
});

const cart = computed(() => {
    return store.getters.getCart;
});

function addToCart(id) {
    const product = products.value.find(product => product.id == id);
    store.dispatch('add', product);
}

onMounted(() => {
  store.dispatch('search');
})
</script>