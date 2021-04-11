import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import Statistics from '../views/Statistics.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import store from '../store/modules/user'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		beforeEnter: (to, from, next) => {
			if(!window.sessionStorage.getItem('token')) {
				next('/login');
			} else {
				next();
			}
		}
	},
	{
		path: '/settings',
		name: 'Settings',
		component: Settings,
		beforeEnter: (to, from, next) => {
			if(!window.sessionStorage.getItem('token')) {
				next('/login');
			} else {
				next();
			}
		}
	},
	{
		path: '/statistics',
		name: 'Statistics',
		component: Statistics,
		beforeEnter: (to, from, next) => {
			if(!window.sessionStorage.getItem('token')) {
				next('/login');
			} else {
				next();
			}
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		beforeEnter: (to, from, next) => {
			if(window.sessionStorage.getItem('token')) {
				next(from.fullPath);
			} else {
				next();
			}
		}
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
		beforeEnter: (to, from, next) => {
			if(window.sessionStorage.getItem('token')) {
				next(from.fullPath);
			} else {
				next();
			}
		}
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
