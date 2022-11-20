<template>
    <div class="p-20 md:p-20 bg-neutral-200">
        <div class="container mx-auto">
            <div class="grid grid-cols-2 px-12">
                <div></div>
                <div class="bg-black rounded-lg p-4 text-white space-y-4">

                    <div>
                        <label class="block"
                            for="name">Name</label>
                        <input class="w-full p-2 rounded-lg placeholder:text-gray-700 text-gray-900 focus:outline-none"
                            name="name"
                            type="text"
                            placeholder="e.g John Doe">
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input class="w-full p-2 rounded-lg placeholder:text-gray-700 text-gray-900 focus:outline-none"
                            name="email"
                            type="email"
                            placeholder="e.g example@company.com">
                    </div>
                    <div>
                        <label for="message">Message</label>
                        <textarea
                            class="w-full p-2 rounded-lg placeholder:text-gray-700 text-gray-900 focus:outline-none"
                            name="message"
                            id=""
                            cols="30"
                            rows="10"
                            
                            placeholder="Hello, I want..."></textarea>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>