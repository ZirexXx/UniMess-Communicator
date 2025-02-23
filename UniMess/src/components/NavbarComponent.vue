<script lang="ts">
import { defineComponent } from 'vue';
import { useUiStore } from '@/stores/useUiStore';

export default defineComponent({
    setup() {
        const uiStore = useUiStore();
        return { uiStore };
    },
    // data() {
    //     return {
    //         isSidebarVisible: true
    //     };
    // },
    // methods: {
    //     toggleSidebar() {
    //         this.isSidebarVisible = !this.isSidebarVisible;
    //         this.$emit('toggle-sidebar');
    //     }
    // }
})
</script>

<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400;700" />
    <nav class="navbar">
        <span class="material-symbols-outlined" style="cursor: pointer;" @click="uiStore.toggleSidebarVisibility">
            {{ uiStore.isSidebarVisible ? 'menu_open' : 'menu' }}
        </span>
        <img id="logo" src="../../public/unimess.ico" style="border-radius: 50%;" />
        <span class="heading">UniMess</span>
    </nav>
</template>

<style scoped lang="scss">
    img {
        width: 64px;
        height: 64px;
        margin-block: 0.5rem;
        transition: box-shadow 0.1s ease-in-out;

        &:hover {
            cursor: pointer;
            box-shadow: 0 0 10px rgba(132,51,166, .5);
        }
    }

    @media (max-width: 1280px) {
        img {
            width: 48px;
            height: 48px;
        }
    }

    .heading {
        font-size: 1.1rem;
        transition: color 0.1s ease-in-out;
        
        &:hover {
            cursor: pointer;
            color: rgb(220, 220, 220);
        }
    }

    .navbar {
        display: flex;
        justify-content: flex-start;
        background-color: rgba(200, 200, 200, 0.2);
        align-items: center;
        position: relative;
        padding-left: 5px;
        height: 4.5rem;
        z-index: 1;
        box-shadow: 0 4px 7px -4px black;

        &>* {
            margin-inline: 5px;
        }

        @media (max-width: 1280px) {
            height: 4rem;
        }
    }
</style>