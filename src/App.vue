<script setup lang="ts">

</script>

<template>

    <div class="relative min-h-screen bg-white">

        <RouterView />

    </div>

</template>

<style>

.transicionPagina-enter-active,
.transicionPagina-leave-active {
    transition: opacity 0.8s ease;
}

.transicionPagina-enter-from,
.transicionPagina-leave-to {
    opacity: 0;
}

</style>

