<script setup>
    defineProps(
        { 
            id: Number,
            sku: String,
            title: String,
            description: String,
            price: Number,
            isAdded: Boolean,
        }
    );

    const emit = defineEmits(['addToCart'])
    
</script>

<template>
    <article class="product__card">
        <img class="product__image" src="https://picsum.photos/300" :alt="description" />
        <div class="product__content">
            <h2 class="product__title" >{{ title }}</h2>
            <p class="product__description" >{{ description }}</p>
            <p>$ {{ price }} USD</p>
            <p v-if="isAdded">Product is in the cart</p>
            <button @click="emit('addToCart', id)">Add to cart</button>
        </div>
    </article>
</template>

<style scoped lang="scss">
.product {
    &__card {
        padding: 40px;
        width: 100%;
        display: grid;
        grid-template-columns: 300px 2fr;
        gap: 20px;
    }
    &__image {
        width: 100%;
    }
    &__content {
        
    }
}
</style>
