<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SidebarComponent',
    props: {
        isVisible: {
            type: Boolean,
            required: true
        }
    }
})
</script>

<template>
    <Transition name="sidebar">
        <div class="sidebar" v-if="isVisible">
            <div class="sidebar-header">
                <h2>Contacts</h2>
            </div>
            <div class="sidebar-content">
                <div class="contact-list">
                    <div class="contact">Contact 1</div>
                    <div class="contact">Contact 2</div>
                    <div class="contact">Contact 3</div>
                    <div class="contact">Contact 4</div>
                    <div class="contact">Contact 5</div>
                    <div class="contact">Contact 6</div>
                    <div class="contact">Contact 7</div>
                    <div class="contact">Contact 8</div>
                    <div class="contact">Contact 9</div>
                    <div class="contact">Contact 11</div>
                    <div class="contact">Contact 12</div>
                    <div class="contact">Contact 13</div>
                    <div class="contact">Contact 14</div>
                    <div class="contact">Contact 15</div>
                    <div class="contact">Contact 16</div>
                    <div class="contact">Contact 17</div>
                    <div class="contact">Contact 18</div>
                    <div class="contact">Contact 19</div>
                    <div class="contact">Contact 20</div>
                    <div class="contact">Contact 21</div>
                    <div class="contact">Contact 22</div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped lang="scss">
  .sidebar {
    position: relative;
    z-index: 1;
    min-width: 10%;
    height: 100%;
    background-color: rgba(200, 200, 200, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
    box-shadow: 4px 0 7px -4px black;
    transition: transform 0.3s ease-in-out;

    // &.hidden {
    //     transform: translateX(-100%);
    // }
    
    @media (max-width: 1280px) {
        min-width: 17%;
    }
  }

  .sidebar-header {
    margin-bottom: 10px;
  }

  .sidebar-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: auto;
    padding-right: 5px;
    overflow-x: hidden;
}
  .contact-list {
    position: relative;
    width: 100%;
    margin-block: 10px;
    display: flex;
    flex-direction: column;

    .contact {
        width: calc(100% - 10px);
        padding: 5px;
        margin-block: 4px;
        background-color: rgba(200, 200, 200, 0.3);
        border-radius: 7px;
        transition: background-color 0.1s ease-in-out;
        
        &:hover {
            cursor: pointer;
            background-color: rgba(200, 200, 200, 0.7);
        }
    }
}

.sidebar-enter-active, .sidebar-leave-active {
    transition: transform 0.3s ease-in-out;
}

.sidebar-enter-from, .sidebar-leave-to {
    transform: translateX(-100%);
}
</style>