<template>
    <div>
        <main class="main">
            <div v-for="p in products">
                <ProductCard :product="p" />
                <!-- <NuxtLink :to="`/products/${products.id}`">{{ p.title }}</NuxtLink> -->
            </div>
        </main>
    </div>
</template>

<script setup>
import ProductCard from '~~/components/ProductCard.vue';

definePageMeta({
    layout: 'products'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped>
.main {
    padding-left: 10px;
    padding-right: 10px;
    display: grid;
    grid-template-columns: 440px 440px 440px 440px;
    gap: 20px;
    margin-top: 0;
}

a {
    text-decoration: none;
    color: black;
}
</style>