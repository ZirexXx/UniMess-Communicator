<script setup lang="ts">
</script>

<template>
    <main>
        <div class="main-wrapper">
            <div class="signup-container">
                <div class="flex-row">
                    <div class="welcome">
                        <div class="text-wrapper">
                            <h1>Welcome</h1> 
                            <h1>to</h1> 
                            <h1>UniMess</h1>
                            <p>Connect with the universe.</p>
                        </div>
                    </div>
                    <div class="signup-form">
                        <h2>Sign up</h2>
                        <form>
                            <div class="input-group flex-row gap">
                                <!-- <label for="username">Username</label> -->
                                <input type="text" id="username" placeholder="First Name" required />
                                <input type="text" id="username" placeholder="Last Name" required />
                            </div>
                            <div class="input-group">
                                <input type="email" id="email" placeholder="Email" requried />
                            </div>
                            <div class="input-group">
                                <!-- <label for="password">Password</label> -->
                                <input type="password" id="password" placeholder="Password" required />
                                <input type="password" id="confirm-password" placeholder="Confirm Password" required />
                            </div>
                            <div class="button-group">
                                <button type="submit">Sign Up</button>
                            </div>
                            <a class="login-button" @click="() => $router.push('/login')">Already have an account? Log in.</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">

main {
    z-index: 1;
}

.gap {
    gap: 0.5rem;
}

.main-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    font-size: 1.5em;

    .signup-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: fit-content;
        padding-block: 40px;
        padding-inline: 60px;
        background-color: rgba(200, 200, 200, 0.2);
        border-radius: 10px;
        
        .flex-row {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .welcome {
                width: 18ch;
                text-align: right;
                border-right: 2px solid rgba(200, 200, 200, 0.3);

                .text-wrapper {
                    padding-right: 0.75rem;
                    h1 {
                        line-height: 1;
                    }

                    p {
                        margin-top: 2rem;
                    }
                }
            }

            .signup-form {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                width: 100%;
                height: 100%;
                padding-left: 0.75rem;

                .input-group {
                    width: 100%;
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

                .button-group {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    gap: 0.5rem;

                    button[type="submit"] {
                        width: 100%;
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
                }

                .login-button {
                    font-size: 0.6em;
                    color: #007bcc;

                    &:hover, &:focus {
                        background: none;
                        color: #007bee;
                        cursor: pointer;
                        text-decoration: underline;
                        transition: color 0.2s ease-in-out;
                    }
                }
            }
        }
    }
}
</style>