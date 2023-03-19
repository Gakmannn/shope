<template>
    <div>
        <h1>Welcome Nuxt!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quaerat, modi laborum harum alias 
            exercitationem quidem? Distinctio eligendi molestias velit.</p>
    </div>
    <button @click="testStore.increment">{{testStore.count}}</button>
</template>

<script setup>
const testStore = useTest()

</script>

<style>

</style>