<template>
    <div class="item-box">
        <slot />
    </div>
</template>

<style lang="css" scoped>
.item-box {
    height: max-content;
    padding: 4ch 6ch;
    border: 1px solid lightgray;
    background-color: white;
    border-radius: 14px;
}
</style>