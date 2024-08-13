<script setup lang="ts">
import { userStore } from '~/store/piniastore';


const inputText = ref('');

const store = userStore();

const outputText = computed(() => {
    return inputText.value.split('').reverse().join('');
})

</script>

<template>
    <ItemContainer class="container">
        {{ store.userName }}
        <h2>Text reverser</h2>
        <input type="text" placeholder="Enter the text that need to reversed" v-model.trim="inputText" name="text-input"
            id="text-input">
        <input type="text" placeholder="Result" :value="outputText" name="text-output" id="text-output" readonly>
    </ItemContainer>
</template>

<style lang="css" scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 2ch;
    padding: 1ch 4ch 3ch 4ch;
}

h2 {
    text-align: center;
}

input {
    font-size: 16px;
    padding: 0.2ch 1ch;
    width: 40ch;
    border-radius: 6px;
    border: 1px solid lightgray;
    background-color: rgba(239, 239, 239, 0.821);
}

@media (max-width: 576px) {
    input {
        font-size: 8px;
    }
}
</style>