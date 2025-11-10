<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import UserDetail from './UserDetail.vue';
const data = ref([])
const userData = ref(null);
const loading = ref(true)

defineProps({
    msg: {
        type: String,
        default: 'List Data'
    }
})
const handleGetListData = async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
        data.value = res.data
    }).finally(() => {
        loading.value = false
    })
}

const handleGetDetails = (user) => {
    console.log('Click me: ', user);
    userData.value = user;
}

onMounted(() => {
    handleGetListData()
})

</script>


<template>
    <h2>{{ msg }}</h2>
    <ul class="d-flex flex-column align-items-start ">
        <span v-if="loading">Loading...</span>
        <li v-for="(item, index) in data" :key="index" @click="handleGetDetails(item)">
            {{ item.username }}
        </li>
    </ul>
    <div v-if="userData">
        <UserDetail :user="Object.keys(userData).length" />
    </div>

</template>

<style>
ul {
    list-style-type: none;
}
</style>