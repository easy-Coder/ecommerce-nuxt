<template>
    <div class="mt-[72px] container mx-auto relative w-full h-full md:py-10 flex flex-col md:flex-row items-center">
        <ShowcaseProduct :index="index"/>
        <ShowcaseProductList :index="index" @change-index="changeIndex"/>
    </div>
</template>
<script setup>

const index = ref(1);

function changeIndex(param) {
    index.value = param
}

onMounted(() => {
    setInterval(() => {
        if (index.value < 4) {
            index.value++
        } else {
            index.value = 1
        }
    }, 3000);
})

</script>