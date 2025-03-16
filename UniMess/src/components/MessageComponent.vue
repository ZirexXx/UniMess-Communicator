<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MessageComponent',
    props: {
        sender: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    mounted() {
        console.log('MessageComponent mounted');
    }
})
</script>

<template>
    <div class="message" :class="{ 'you': sender === 'you', 'they': sender === 'they' }">{{ message }}</div>
</template>

<style>
.message {
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    width: fit-content;
    max-width: 60ch;
    background-color: rgba(200, 200, 200, 0.5);
    box-shadow: -2px 3px 5px rgba(30, 30, 30, 0.5);
    transition: background-color 0.1s ease-in-out;

    @media (max-width: 800px) {
        max-width: 40ch;
    }
}

.message.you {
    margin-left: auto;
    background-color: rgba(132, 51, 166, 0.8);
    box-shadow: 2px 3px 5px rgba(30, 30, 30, 0.5);
}
</style>