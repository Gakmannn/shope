<template>
    <div>
        <p>{{ product?.title }}</p>
        <p>{{ product?.price }}</p>
        <p>{{ product?.id }}</p>
    </div>
</template>

<script setup lang="ts">
    const { id } = useRoute().params
    const url = 'https://fakestoreapi.com/products/' + id

    // @ts-ignore
    const { data:product }: any = await useFetch(url, { key: id })

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>