<template>
    <div ref="container"
        class="w-full overflow-hidden">
        <div class="mt-8 md:mt-0 md:flex md:flex-row h-full ">
            <div class="pl-3 w-full md:w-1/2 md:mt-20 lg:my-auto">
                <div class="space-y-4 md:space-y-5">
                    <h1 ref="heading"
                        class="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900">{{product.name}}</h1>
                    <p ref="parag"
                        class="text-sm md:text-xl font-semibold text-gray-700">{{product.caption}}</p>
                    <div class="space-x-2 flex items-center">
                        <Button>Buy Now</Button>
                        <a href="">Learn More</a>
                    </div>
                </div>
            </div>
            <div class="w-full mt-24 md:mt-20 lg:my-auto md:w-1/2">
                <div ref="image"
                    class="w-full h-full">
                    <template v-for="p in products"
                        :key="p.id">

                        <NuxtImg v-show="product.id == p.id"
                            :src="`${p.image}`"
                            class="" />
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { animate, scroll } from "motion";

const props = defineProps({
    index: Number
})

// const index = useProductIndex()
const products = useProduct()

const product = computed(() => { return products.value.find((element) => { return element.id == props.index }) })

const heading = ref(null)
const parag = ref(null)
const image = ref(null)
const container = ref(null)

watch(() => props.index, () => {
    animate(heading.value, { x: [-100, 0], opacity: [0.9, 1], filter: ['blur(10px)', 'blur(0px)'] })
    animate(parag.value, { x: [-50, 0], opacity: [0.7, 1], filter: ['blur(20px)', 'blur(0px)'] })
})
</script>