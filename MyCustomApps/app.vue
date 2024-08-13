<script setup lang="ts">
import { userStore } from './store/piniastore';

// provide('username', 'Admin');
// store.userName = "Admin"

const val = ref("");

const store = userStore();
store.userName = "admin"

watch(val, () => {
  //piniaStore.updateUsername(val.value);
  store.userName = val.value;
  console.log(val.value);
})

</script>

<template>
  <input type="text" v-model="val" name="" id="">
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="css">
body {
  background-color: #e0e8f3;
  color: black;
}
</style>
