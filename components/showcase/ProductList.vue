<template>
    <div class="px-4 absolute top-[50px] right-2 md:static md:top-0 md:h-full lg:w-[320px] ">
        <div class="mt-10 md:mt-0 md:space-x-0 md:space-y-4">
            <template v-for="i in products"
                :key="i">
                <div>
                    <button @click="$emit('changeIndex', i.id)"
                        class="">
                        <div class="hidden md:flex items-center lg:space-x-1">
                            <div class="rounded-md overflow-hidden p-2"
                                :class="{'border border-gray-900': index == i.id}">
                                <NuxtImg :src="`${i.image}`"
                                    width="52px"
                                    height="52px"
                                    class="rounded-md w-12 h-12" />
                            </div>
                            <h3 class="hidden lg:block text-sm"
                                :class="{'font-bold': index == i.id}">{{i.name}}</h3>
                        </div>
                        <div class="md:hidden p-1"
                            :class="{'border border-gray-900 rounded-full': index == i.id}">
                            <div class="w-3 h-3 bg-gray-900 rounded-full"></div>
                        </div>
                    </button>
                </div>
            </template>
        </div>
    </div>
</template>
<script setup>
const products = useProduct()

defineProps({
    index: Number
});

</script>