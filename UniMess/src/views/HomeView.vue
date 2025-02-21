<script setup lang="ts">
import ChatComponent from '@/components/ChatComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';
import { ref } from 'vue';

const isSidebarVisible = ref(true);

const handleToggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<template>
  <main>
    <NavbarComponent @toggle-sidebar="handleToggleSidebar"/>
    <div class="main-sidebar-wrapper">
      <SidebarComponent :isVisible="isSidebarVisible" />
      <ChatComponent :isSidebarVisible="isSidebarVisible"/>
    </div>
  </main>
</template>

<style scoped>
  main {
    height: calc(100vh - 4.5rem);
    z-index: 1;
    @media (max-width: 1280px) {
      height: calc(100vh - 4rem);
    }
  }
  .main-sidebar-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    overflow: hidden;
  }
</style>
