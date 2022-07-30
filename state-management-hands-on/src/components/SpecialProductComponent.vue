<template>
    <div>
        <ProductCard @addToCart="addToCart" v-bind="product" />
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import useCart from '../composables/useCart';
import ProductCard from './ProductCard.vue';

const { add } = useCart();

const product = reactive({
    id: 1,
    title: 'CUSTOM PRODUCT',
    price: 12.00,
    description: 'Decription',
    isAdded: false,
});

function addToCart(_) {
    product.isAdded = true;
    add(product)
}

</script>

<style lang="scss" scoped>

</style>