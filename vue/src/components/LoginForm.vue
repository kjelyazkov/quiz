<template>
    <div class="text-gray-600 bg-gray-50 w-full sm:w-96 p-4 rounded-md flex flex-col gap-8 mx-auto shadow-md">
        <div class="text-3xl text-gray-500">Login</div>

        <div>
            <form @submit.prevent="login({username, password})" class="flex flex-col gap-4">
                <div class="flex flex-col gap-2 items-start">
                    <label for="username" class="text-sm text-gray-400">Username</label>
                    <input type="username" v-model="username" class="shadow-inner bg-gray-200 w-full py-1 rounded-md outline-none focus:ring ring-gray-500 px-2 text-md" required autofocus>
                </div>

                <div class="flex flex-col gap-2 items-start">
                    <label for="password" class="text-sm text-gray-400">Password</label>
                    <input type="password" v-model="password" class="shadow-inner bg-gray-200 w-full py-1 rounded-md outline-none focus:ring ring-gray-500 px-2 text-md" required>
                </div>

                <input type="submit" class="inline-block px-4 py-2 tracking-widest leading-5 rounded-md cursor-pointer bg-gray-600 text-white hover:bg-gray-700" value="Register"/>
            </form>

            <div class="text-center border py-4 border-dashed border-gray-300 rounded-md text-gray-400 mt-4">
            Are you new to website? <router-link to="/register" class="text-blue-500 cursor-pointer hover:underline"> Create an account.</router-link>
            </div>

        </div>
        
    </div>
</template>

<script>
import ActionButton from '../components/ActionButton'

export default {
    name: "LoginForm",
    components: {
        ActionButton
    },
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        login(user) {
            this.$store.dispatch('user/login', user);
        }
    }
}
</script>

<style>

</style>