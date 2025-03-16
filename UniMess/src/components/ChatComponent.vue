<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue';
import MessageComponent from '@/components/MessageComponent.vue';
import { useChatStore } from '@/stores/chatStore';
import { connectWebSocket, sendPrivateMessage } from '@/api/chat';

export default defineComponent({
    name: 'ChatComponent',
    props: {
        isSidebarVisible: {
            type: Boolean,
            required: true
        }
    },
    components: {
        MessageComponent
    },
    setup() {
        const chatStore = useChatStore();
        const newMessage = ref("");
        const userId = ref("");
        const recipientId = ref("");
        const recipientName = ref("Your Friend");

        onMounted(() => {
            connectWebSocket((generatedUserId: string) => {
                userId.value = generatedUserId;
                chatStore.setUserId(generatedUserId);
            }, (msg) => {
                chatStore.addMessage(msg);
            });

            selectRandomRecipient();
        });

        function sendMessage() {
            if (newMessage.value.trim() !== "" && recipientId.value) {
                sendPrivateMessage(recipientId.value, newMessage.value);
                chatStore.addMessage({ sender: userId.value, message: newMessage.value, id: Date.now() });
                newMessage.value = "";
            }
        }

        function selectRandomRecipient() {
            const testUsers = [
                { id: "user123", name: "Alice" },
                { id: "user456", name: "Bob" }
            ];

            const randomUser = testUsers[Math.floor(Math.random() * testUsers.length)];

            recipientId.value = randomUser.id;
            recipientName.value = randomUser.name;
        }

        return { chatStore, newMessage, sendMessage, userId, recipientId, recipientName };
    }
});
</script>

<template>
    <div class="chat-wrapper">
        <div class="chat-window">
            <div class="chat-header">
                <img id="avatar" src="../assets/avatar.png" width="40" height="40" />
                <span>{{ recipientName || "Your Friend" }}</span>
            </div>

            <div class="chat-content">
                <MessageComponent 
                    v-for="message in chatStore.messages" 
                    :key="message.id" 
                    :sender="message.sender" 
                    :message="message.message" 
                />
            </div>

            <div class="chat-tools">
                <input v-model="newMessage" type="text" placeholder="Type a message..." @keyup.enter="sendMessage" />
                <button class="send-button" @click="sendMessage">
                    <span class="material-symbols-outlined">send</span>
                </button>
            </div>
        </div>
    </div>
</template>

<!-- <template>
        <div class="chat-wrapper">
            <div class="chat-window">
                <div class="chat-header">
                    <img id="avatar" src="../assets/avatar.png" width="40" height="40" />
                    <span>Your Friend</span>
                </div>
                <div class="chat-content">
                    <MessageComponent v-for="message in chatStore.messages" :key="message.id" :sender="message.sender" :message="message.message" />
                    <MessageComponent sender="they" message="Hello!" />
                    <MessageComponent sender="you" message="Hi!" />
                    <MessageComponent sender="they" message="How are you?" />
                    <MessageComponent sender="you" message="I'm fine, thank you!" />
                    <MessageComponent sender="they" message="That's great!" />
                    <MessageComponent sender="they" message="How's your day going?" />
                    <MessageComponent sender="you" message="It's going well, thank you!" />
                    <MessageComponent sender="they" message="That's good to hear!" />
                    <MessageComponent sender="they" message="What are you up to?" />
                    <MessageComponent sender="you" message="Just working on a project." />
                    <MessageComponent sender="they" message="That's cool!" />
                    <MessageComponent sender="they" message="What project are you working on?" />
                    <MessageComponent sender="you" message="I'm working on a chat application." />
                    <MessageComponent sender="they" message="That's interesting!" />
                    <MessageComponent sender="they" message="What's it called?" />
                    <MessageComponent sender="you" message="It's called UniMess." />
                    <MessageComponent sender="they" message="That's a cool name!" />
                    <MessageComponent sender="they" message="What features does it have?" />
                    <MessageComponent sender="you" message="It has a sidebar, a chat window, and a message component. It has a sidebar, a chat window, and a message component. It has a sidebar, a chat window, and a message component. It has a sidebar, a chat window, and a message component." />
                    <MessageComponent sender="they" message="That's awesome!" />
                    <MessageComponent sender="they" message="I can't wait to try it out!" />
                    <MessageComponent sender="you" message="I'm glad you're excited!" />
                    <MessageComponent sender="they" message="I'll be sure to tell my friends about it!" />
                    <MessageComponent sender="you" message="That would be great!" />
                    <MessageComponent sender="they" message="I'll see you later!" />
                    <MessageComponent sender="you" message="Goodbye!" />
                </div>
                <div class="chat-tools">
                    <input type="text" placeholder="Type a message..." />
                    <button class="send-button">
                        <span class="material-symbols-outlined">send</span>
                    </button>
                </div>
            </div>
        </div>
</template> -->

<style scoped lang="scss">
.chat-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 10px;
    transition: width 0.3s ease-in-out;
}

#avatar {
    border-radius: 50%;
    margin: 0 10px 0 0;
    box-shadow: 0 0 10px rgba(132,51,166, 1);
}

.chat-window {
    position: relative;
    margin: 10px;
    height: calc(100% - 2.5rem);
    background-color: rgba(200, 200, 200, 0.2);
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    // padding: 10px;
    transition: width 0.3s ease-in-out;
}

.chat-header {
    background-color: rgba(200, 200, 200, 0.3);
    border-radius: 10px 10px 0 0;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.chat-content {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    box-sizing: border-box;
}

.chat-tools {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-top: auto;
    margin-bottom: none;
    display: flex;
    flex-direction: row;
    align-items: center;

    input {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 10px;
        background-color: rgba(200, 200, 200, 0.3);
        margin: 0;
        box-sizing: border-box;
        transition: background-color 0.1s ease-in-out;
        z-index: 2;

        color: white;

        &::placeholder {
            color: rgb(200, 200, 200);
        }

        &:focus {
            background-color: rgba(200, 200, 200, 0.5);
        }
    }

    .send-button {
        margin-inline: 5px;
        padding: 5px;
        border-radius: 50%;
        color: white;
        background-color: rgba(132,51,166, 1);
        box-shadow: 0 0 10px rgba(132,51,166, 0.5);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: box-shadow 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out;
        
        &:hover {
            background-color: white;
            color: rgba(132,51,166, 1);
            // box-shadow: 0 0 20px rgba(132,51,166, 1);
            box-shadow: 0 0 10px purple;
            cursor: pointer;
        }
    }
}  
</style>