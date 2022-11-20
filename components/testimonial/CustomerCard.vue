<template>
    <section class="bg-white ">
        <div class="container px-6 py-10 mx-auto">
            <h1 class="text-3xl font-semibold text-center text-gray-900 capitalize xl:text-5xl lg:text-4xl "
                ref="heading">
                What clients saying
            </h1>

            <div class="flex justify-center mx-auto mt-6">
                <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>

            <div class="flex items-start max-w-6xl mx-auto mt-16">
                <button
                    class="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full lg:block hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div>
                    <p class="flex items-center text-center text-gray-500 lg:mx-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem
                        officiis
                        eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias.
                        Possimus
                        minima dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                        voluptates
                        fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis
                        quisquam nemo, accusamus animi explicabo? Architecto, unde laboriosam?
                    </p>

                    <div class="flex flex-col items-center justify-center mt-8">
                        <img class="object-cover rounded-full w-14 h-14"
                            src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            alt="">

                        <div class="mt-4 text-center">
                            <h1 class="font-semibold text-gray-800 ">Mia Brown</h1>
                            <span class="text-sm text-gray-500">Marketer</span>
                        </div>
                    </div>
                </div>

                <button
                    class="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full lg:block hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>
<script setup>
import { animate, inView } from 'motion';

const heading = ref(null)

onMounted(() => {
    inView(heading.value, (e) => {
        animate(heading.value, { y: [20, 0], opacity: 1 }, { delay: 0.2, duration: 0.9 })
    }, { treshold: 1.0 })
})
</script>