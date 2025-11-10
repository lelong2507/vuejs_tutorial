<script setup lang="ts">
import type { ToDoType } from '../data/ToDo';
import { data } from '../data/ToDo';
import { ref } from 'vue';


defineProps({
    msg: {
        type: String,
        default: 'ListData',
    }
})

const toDos = ref<ToDoType[]>(data)

const addItem = ref(false)
const itemText = ref<string>('')

const toggleShowItem = (index: number) => {
    toDos.value[index]!.show = !toDos.value[index]!.show
}

const toggleAddItem = (index: number) => {
    addItem.value = !addItem.value
    toDos.value[index]!.showAddInput = !toDos.value[index]!.showAddInput
}

const handleAddItem = (index: number) => {
    if (!itemText.value.trim()) alert('The item text is required!');

    toDos.value[index]!.toDoItem.push({
        title: itemText.value
    });

    toDos.value[index]!.show = !toDos.value[index]!.show
    toDos.value[index]!.showAddInput = !toDos.value[index]!.showAddInput
    itemText.value = '';
}
</script>


<template>

    <div class="main-content-card">
        <h2>{{ msg }}</h2>
        <ul class="todo-list">
            <li v-for="(item, index) in toDos" v-bind:key="index" class="todo-list-item">
                <div class="todo-item">
                    <div class="todo-item-header">
                        <div class="item-header-title">
                            <input type="checkbox" />
                            <p>{{ item.title }}</p>
                        </div>
                        <div class="item-header-icon">
                            <button @click="toggleAddItem(index)">+</button>
                            <button @click="toggleShowItem(index)">
                                <span> {{ item.show ? 'Show' : 'Hide' }}</span>
                            </button>
                        </div>
                    </div>
                    <ul class="todo-item-list">
                        <div v-if="addItem" class="add-item-container">
                            <input type="text" v-model="itemText" placeholder="Add new item" />
                            <button @click="handleAddItem(index)" class="item-header-icon">+</button>
                        </div>
                        <li v-for="itemList in item.toDoItem" :class="['todo-item-list-item', { active: item.show }]">
                            <input type="checkbox" />
                            <p>{{ itemList.title }}</p>
                        </li>
                        <div v-if="item.toDoItem.length === 0">
                            <span>The list is empty</span>
                        </div>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>


<style scoped>
.main-content-card {
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: start;
    border: 1px solid #929090;
    border-radius: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 5px 15px;
}

ul {
    list-style-type: none;
}

.add-item-container {
    display: flex;
    gap: 5px;
}

.add-item-container input[type='text'] {
    border: none;
    padding: 5px 5px;
    border-radius: 10px;
}

.todo-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    list-style-type: none;
    padding: 5px 5px;
}

.todo-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
}

.todo-list-item {
    width: 100%;
}

.todo-item-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.item-header-title {
    display: flex;
    gap: 5px;
}

.item-header-icon {
    display: flex;
    gap: 5px;
}

button {
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #535050;
    background-color: transparent !important;
    text-align: center;
}


.todo-item-list-item {
    display: none;
    align-items: center;
    gap: 5px;
}

.todo-item-list-item.active {
    display: flex;
}
</style>
