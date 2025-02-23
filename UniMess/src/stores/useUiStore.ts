import { defineStore } from "pinia";

export const useUiStore = defineStore('ui', {
    state: () => ({
        isSidebarVisible: true,
    }),
    actions: {
        toggleSidebarVisibility() {
            this.isSidebarVisible = !this.isSidebarVisible
        }
    }
})