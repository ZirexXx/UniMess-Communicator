import { defineStore } from 'pinia';

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [] as any[],
    userId: '' as string,
  }),
  actions: {
    addMessage(message: any) {
      this.messages.push(message);
    },
    setUserId(id: string) {
      this.userId = id;
    }
  },
});