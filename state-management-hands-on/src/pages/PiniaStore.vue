<template>
    <CartList :list="cart" />
    <button @click="store.search">Update</button>
    <div v-if="loading">Cargando...</div>
    <section v-if="!loading && products?.length" v-for="product in products">
        <ProductCard @addToCart="addToCart" v-bind="product" />
    </section>
</template>

<script setup>
import CartList from '../components/CartList.vue';
import ProductCard from '../components/ProductCard.vue';
import { useStore } from '../pinia-store/store';
import { computed, onMounted } from 'vue';

const store = useStore();

const products = computed(() => {
    return store.getProducts;
});

const loading = computed(() => {
    return store.loading;
});

const cart = computed(() => {
    return store.getCart;
});

function addToCart(id) {
    const product = products.value.find(product => product.id == id);
    store.add(product);
}

onMounted(() => {
  store.search();
})
</script>
