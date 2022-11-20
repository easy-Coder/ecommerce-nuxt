<template>
    <div class="grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 px-12">
        <div class="w-full space-y-3">
            <div class="max-w-3xl space-y-3">
                <h1 ref="heading"
                    class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Our Mission</h1>
                <p ref="content"
                    class="text-sm md:text-base font-semibold text-gray-700">We committed ourself to find and solve
                    problem that affect humanity throught our extensive scientific research, we aim to provide
                    tested technology to aid the comfort of human.</p>
            </div>
        </div>

        <NuxtImg src="/image/welding.jpg"
            class="rounded-lg w-[380px] h-[280px] place-self-end object-cover object-center"
            loading="lazy" ref="image"/>

    </div>
</template>
<script setup>
import { animate, inView } from 'motion';

const heading = ref(null)
const content = ref(null)
const button = ref(null)
const image = ref(null)

onMounted(() => {
    inView(heading.value, (e) => {
        animate(heading.value, { opacity: [0, 1], y: [20, 0] }, { delay: 0.4, duration: 0.9 });
        console.log("Should animate");
    }, { threshold: 1.0 });
    inView(content.value, (e) => {
        animate(content.value, { opacity: [0, 1], y: [30, 0] }, { delay: 0.2, duration: 0.9 })
        console.log("Should animate");
    }, { threshold: 1.0 });
    inView(image.value, (e) => {
        animate(image.value, { opacity: [0, 1], scale: [0.5, 1], filter: ['blur(20px)', 'blur(0px)'] }, { delay: 0.2, duration: 0.9 },)
    }, { threshold: 1.0 })

})
</script>