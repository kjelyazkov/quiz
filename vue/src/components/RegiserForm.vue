<template>
    <div class="text-gray-600 bg-gray-50 w-full sm:w-96 p-4 rounded-md flex flex-col gap-8 mx-auto shadow-md">
        <div class="text-3xl text-gray-500">Register</div>

        <div>

            <form @submit.prevent="register({username, email, password, password_confirmation})" class="flex flex-col gap-4">
                <div class="flex flex-col gap-2 items-start">
                    <label for="username" class="text-sm text-gray-400">Username</label>
                    <input type="text" v-model="username" class="shadow-inner bg-gray-200 w-full py-1 rounded-md outline-none focus:ring ring-gray-500 px-2 text-md" required autofocus>
                </div>

                <div v-if="errors" class="text-red-400 text-left ml-2 text-sm -mt-2">
                    {{ errors.username[0] }}
                </div>

                <div class="flex flex-col gap-2 items-start">
                    <label for="email" class="text-sm text-gray-400">Email</label>
                    <input type="email" v-model="email" class="shadow-inner bg-gray-200 w-full py-1 rounded-md outline-none focus:ring ring-gray-500 px-2 text-md" required>
                </div>

                <div v-if="errors" class="text-red-400 text-left ml-2 text-sm -mt-2">
                    {{ errors.email[0] }}
                </div>

                <div class="flex flex-col gap-2 items-start">
                    <label for="password" class="text-sm text-gray-400">Password</label>
                    <input type="password" v-model="password" class="shadow-inner bg-gray-200 w-full py-1 rounded-md outline-none focus:ring ring-gray-500 px-2 text-md" required>
                </div>

                <div v-if="errors" class="text-red-400 text-left ml-2 text-sm -mt-2">
                    {{ errors.password[0] }}
                </div>

                <div class="flex flex-col gap-2 items-start">
                    <label for="password_confirmation" class="text-sm text-gray-400">Password again</label>
                    <input type="password" v-model="password_confirmation" class="shadow-inner bg-gray-200 w-full py-1 rounded-md outline-none focus:ring ring-gray-500 px-2 text-md" required>
                </div>

                <input type="submit" class="inline-block px-4 py-2 tracking-widest leading-5 rounded-md cursor-pointer bg-gray-600 text-white hover:bg-gray-700" value="Register"/>
            </form>

            <div class="text-center border py-4 border-dashed border-gray-300 rounded-md text-gray-400 mt-4">
            Already have an accout? <router-link to="/login" class="text-blue-500 cursor-pointer hover:underline">Sign in.</router-link>
            </div>

            <div v-if="user">
                {{ user }}
            </div>
            
        </div>
        
    </div>
</template>

<script>
import ActionButton from '../components/ActionButton'
import { mapState } from 'vuex'

export default {
    name: "RegisterForm",
    components: {
        ActionButton
    },
    data() {
        return {
            username: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    },
    computed: {
        ...mapState('user', ['errors', 'user'])
    },
    methods: {
        register(user) {
            this.$store.dispatch('user/register', user);
        }
    }
}
</script>

<style>

</style>