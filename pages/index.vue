<template>
    <div>
        <h1>Welcome Nuxt!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quaerat, modi laborum harum alias 
            exercitationem quidem? Distinctio eligendi molestias velit.</p>
    </div>
    <!-- <button @click="testStore.increment">{{testStore.count}}</button> -->

    <input @change="addfile" type="file">
    <button @click="sendFile">Сохранить</button>

</template>

<script setup>
const testStore = useTest()
const file = ref([])
const addfile = (e)=>{
    file.value.push(e.target.files[0])
}
const sendFile = async() => {
    const data = new FormData()
    console.log(file.value[0])
    data.append('images[0]', file.value[0])
    const resp = await $fetch('/api/files', {method:'POST', body:data})
    console.log(resp)
}

</script>

<style>

</style>