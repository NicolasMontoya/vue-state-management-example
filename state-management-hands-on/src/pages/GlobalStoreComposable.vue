<script setup>
import useCart from '../composables/useCart';
import useProduct from '../composables/useProduct';
import SpecialProductComponent from '../components/SpecialProductComponent.vue';
import ProductCard from '../components/ProductCard.vue';
import CartList from '../components/CartList.vue';


const { search, loading, products } = useProduct();
const { add, cart } = useCart();

search();

function addToCart (id) {
    const product = products.value.find(product => product.id == id);
    product.isAdded = true;
    add(product)
}

</script>

<template>
    <CartList :list="cart" />
    <button @click="search">Update</button>
    <div v-if="loading">Cargando...</div>
    <SpecialProductComponent />
    <section v-if="!loading && products?.length" v-for="product in products">
        <ProductCard @addToCart="addToCart" v-bind="product" />
    </section>
</template>
