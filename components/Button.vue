<template>
    <button @click="$emits('handleClick')"
        class="px-6 py-3 rounded-md bg-black text-white">
        <slot />
    </button>
</template>
<script setup>

</script>