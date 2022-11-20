<template>
    <header ref="nav">
        <div class="container mx-auto py-4 px-2 lg:px-0 flex items-center justify-between">
            <div>Logo</div>
            <nav class="hidden md:block space-x-2.5">
                <NuxtLink to="/">About Us</NuxtLink>
                <NuxtLink to="/">Mission</NuxtLink>
                <NuxtLink to="/">Contact Us</NuxtLink>
            </nav>
            <div>
                <button class="px-4 py-2 rounded-md bg-black text-white">Shop Now</button>
            </div>
        </div>
    </header>
</template>
<script setup>
import { scroll } from 'motion';

const nav = ref(null)

onMounted(() => {
    scroll((scroll) => {
        // console.log(scroll.y)
        if (scroll.y.progress >= 0.25) {
            nav.value.classList.add('bg-white')
            console.log("Reached 0.25");
        } else {
            nav.value.classList.remove('bg-white')
            console.log("less than 0.25");
        }
    })
})
</script>