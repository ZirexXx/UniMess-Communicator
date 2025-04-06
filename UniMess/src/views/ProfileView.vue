<script setup lang="ts">
</script>

<template>
    <div class="profile-container">
        <h1>General</h1>
        <div class="card">
            <div class="profile-picture-container">
                <img src="../assets/avatar.png" alt="Profile Picture" class="profile-picture"/>
                <div class="change-picture">
                    <span class="material-symbols-outlined">photo_camera</span>
                </div>
            </div>
            <p><b>Name:</b> John Doe</p>
            <p><b>Email:</b> john.doe@example.com</p>
        </div>
        <h1>Change Password</h1>
        <div class="card change-password">
            <div class="input-group">
                <input type="password" id="current-password" placeholder="Current Password" required />
                <input type="password" id="new-password" placeholder="New Password" required />
                <input type="password" id="confirm-new-password" placeholder="Confirm New Password" required />
            </div>
            <button type="submit">Change password</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.profile-container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: 100vh;
    width: 50%;
    margin-inline: auto;
    margin-block: 1rem;
    font-size: 1.5em;
    // background-color: rgba(200, 200, 200, 0.2);

    .card {
        background-color: rgba(200, 200, 200, 0.2);
        display: flex;
        width: 100%;
        height: fit-content;
        flex-direction: column;
        border-radius: 15px;
        padding: 1rem;   
    }

    .change-password {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        // margin-inline: auto;

        .input-group {
            width: 50%;
            margin-bottom: 1rem;

            input {
                width: 100%;
                height: 2.5rem;
                padding: 0.5rem;
                border-radius: 5px;
                border: 1px solid rgba(200, 200, 200, 0.3);
                background-color: rgba(225, 225, 225, 0.5);
                transition: all 0.3s ease-in-out;
                font-size: 1.25rem;
                margin-bottom: 0.2rem;
                // color: white;
                color: rgba(132,51,166, 1);

                &:focus {
                    outline: none;
                    border-color: rgba(132,51,166, 1);
                    box-shadow: 0 0 10px rgba(132,51,166, 1);
                }

                &::placeholder {
                    color: rgba(200, 200, 200, 0.5);
                    // font-size: 1.25em;
                }

                &:hover {
                    background-color: rgba(225, 225, 225, 0.6);
                }
            }
        }

        button[type="submit"] {
            width: 50%;
            height: 2.5rem;
            padding: 0.5rem;
            border-radius: 5px;
            border: none;
            background-color: rgba(132,51,166, 1);
            color: white;
            font-size: 1.25rem;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover {
                background-color: rgba(200, 200, 200, 1);
                color: rgba(132,51,166, 1);
                box-shadow: 0 0 10px rgba(132,51,166, 1);
            }
        }
    }
}

b {
    font-weight: bold;
}

button[type="button"] {
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    background: transparent;
    color: white;
    border: 2px solid rgba(200, 200, 200, 0.3);
    font-size: 1.25rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: rgba(200, 200, 200, 1);
        color: rgba(132,51,166, 1);
        box-shadow: 0 0 10px rgba(132,51,166, 1);
    }
}

.profile-picture-container {
    z-index: 2;
    position: relative;
    width: min-content;

    &:hover .change-picture {
        opacity: 1;
        backface-visibility: hidden;
    }

    .profile-picture {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        opacity: 1;
        display: block;
        transition: 0.5s ease;
        backface-visibility: hidden;
    }

    .change-picture {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.6);
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: 0.5s ease;
        text-align: center;
        cursor: pointer;
        // .change-picture-btn {
        //     color: white;
        //     font-size: 1rem;
        //     text-align: center;
        // }
    }
}
</style>
