<template>
    <section v-if="list?.length">
        <h2>Cart elements</h2>
        <ul>
            <li v-for="element in list">
                {{element.title}} - $ {{element.price}} USD
            </li>
        </ul>      
    </section>
</template>

<script setup>

defineProps({
    list: Array
})

</script>

<style lang="scss" scoped>
ul {
    text-decoration: none;
}
</style>