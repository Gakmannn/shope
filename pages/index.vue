<template>
    <div>
        <h1>Welcome Nuxt!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quaerat, modi laborum harum alias 
            exercitationem quidem? Distinctio eligendi molestias velit.</p>
    </div>
    <!-- <button @click="testStore.increment">{{testStore.count}}</button> -->

    <input @change="addfile" type="file" multiple>
    <button @click="sendFile">Сохранить</button>
    <button @click="sendPost">Сохранить</button>

    <div v-for="user of users" :key="user.id">
        <!-- <p> {{ user }}</p> -->
        <p> {{ user.id }} {{ user.name }} {{ user.email }}</p>
    </div>

</template>

<script></script>

<script setup lang="ts">
const testStore = useTest()
const files = ref([]) as any
const addfile = (e:any)=>{
    files.value = e.target.files
}
const sendFile = async() => {
    const data = new FormData()
    console.log(files)
    for (let file of files.value) {
        data.append('images', file)
    }
    data.append('text', 'text')
    data.append('json', JSON.stringify(testStore))
    const resp = await useFetch('/api/files', {method:'POST', body:data})
    console.log(resp)
}

const sendPost = async() => {
    const data = { a: 10, b: [0, 2] }
    const resp = await $fetch('/api/posts', {method:'POST', body:data })
    // console.log(resp)
}

// const users = ref([])
// const {data:users} = await useFetch('/api/user',{transform:(_data)=>{_data.users}})
const {data:users}:any= await useFetch('/api/user')
// console.log(users)
// users.value = data.users
</script>

<style>

</style>