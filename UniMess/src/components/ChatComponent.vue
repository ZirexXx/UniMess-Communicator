<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ChatComponent',
    props: {
        isSidebarVisible: {
            type: Boolean,
            required: true
        }
    }
})
</script>

<template>
        <div class="chat-wrapper">
            <div class="chat-window">
                <div class="chat-header">
                    <img id="avatar" src="../assets/avatar.png" width="40" height="40" />
                    <span>Your Friend</span>
                </div>
                <div class="chat-content">content!</div>
                <div class="chat-tools">
                    <input type="text" placeholder="Type a message..." />
                </div>
            </div>
        </div>
</template>

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

.chat-tools {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-top: auto;
    margin-bottom: none;

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
}
</style>