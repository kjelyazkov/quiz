import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import Statistics from '../views/Statistics.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/settings',
		name: 'Settings',
		component: Settings
	},
	{
		path: '/statistics',
		name: 'Statistics',
		component: Statistics
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
