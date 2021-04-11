<template>
    <div v-if="user" class="bg-gray-100">
		<div class="w-full max-w-screen-xl mx-auto flex justify-end gap-8 p-4 uppercase">
			<router-link to="/">Home</router-link>
			<router-link to="/settings">Settings</router-link>
			<router-link to="/Statistics">Settings</router-link>
			<div @click="logout()" class="text-red-400 cursor-pointer">Log out</div>
		</div>
  	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: "Navigation",
	computed: {
		...mapState('user', ['user'])
	},
	methods: {
		logout() {
			this.$store.dispatch('user/logout');
		}
	}
}
</script>

<style>

</style>