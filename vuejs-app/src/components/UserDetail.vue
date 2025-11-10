<script setup lang="ts">
import { watch } from 'vue'
import type { User } from '../data/user'

defineProps<{
    user: User
}>()

watch()
</script>


<template>
    <div class="card">
        <h2>{{ user.username }}</h2>
    </div>
</template>

<style scoped>
.card {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
}
</style>