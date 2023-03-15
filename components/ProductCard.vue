<template>
    <v-card class="mx-auto card" max-width="344" variant="outlined" >
        <v-card-item>
            <v-img :src="product.image" alt="product card" height="180" contain />
            <div>
                <div class="text-overline mb-1">
                </div>
                <div class="text-h6 mb-1">
                    {{ product.title }}
                </div>
                <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
            </div>
        </v-card-item>

        <v-card-actions>
          <v-btn variant="outlined">
            <NuxtLink :to="`/products/${product.id}`">Подробнее...</NuxtLink>
          </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
 const { product } = defineProps(['product'])
</script>

<style scoped>
/* .card{
    height: 300px;
    text-align: center;
    box-shadow: 5px 5px 5px gray, -1px 0px 5px gray;
    border-radius: 10px;
}
.card-img{
    margin-left: auto;
    margin-right: auto;
    max-height: 120px;
    max-width: 70%;
    padding: 10px;
    background-color: white;
    display: block;
} */
</style>