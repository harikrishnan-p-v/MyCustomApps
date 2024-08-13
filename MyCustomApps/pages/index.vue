<template>
    <main class="main">
        <ReverseText></ReverseText>
        <CounterComponent></CounterComponent>
    </main>
</template>

<style lang="css" scoped>
.main {
    display: grid;
    gap: 4ch 2ch;
    justify-content: center;
    align-items: center;
    padding: 2ch;
}

.main>* {
    margin: auto;
}

@media(max-width: 992px) {
    .main {
        grid-template-columns: 1fr;
    }
}

@media ((min-width: 992px) and (max-width: 1500px)) {
    .main {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 1500px) {
    .main {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>