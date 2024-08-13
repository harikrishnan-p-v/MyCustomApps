<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true
    }
})

const emit = defineEmits({
    buttonClicked: null
})
</script>

<template>
    <button @click="$emit('buttonClicked')" class="button">
        {{ props.name }}
    </button>
</template>

<style lang="css" scoped>
.button {
    max-width: max-content;
    padding: 0.1ch 2ch;
    font-size: 20px;
    font-weight: bold;
    border-radius: 8px;
    background-color: rgba(27, 26, 26, 0.814);
    color: white;
}
</style>