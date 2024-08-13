<script setup lang="ts">
import { userStore } from '~/store/piniastore';
import { store } from '~/store/store';

// const username: string = inject('username') as string;
// const username = store.userName;

const piniaStore = userStore();
</script>

<template>
    <header class="header">
        <div class="icon">
            <img src="/img/app-icons.png" alt="app icon">
            <h3>My Custom Apps</h3>
        </div>
        <p>{{ piniaStore.userName }}</p>
    </header>
    <slot />
</template>

<style lang="css" scoped>
.header {
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 14px;
    padding: 0ch 4ch;
    min-width: 250px;
}

.icon {
    display: flex;
    gap: 2ch;
    align-items: center;
}

.header img {
    height: 3ch;
}
</style>