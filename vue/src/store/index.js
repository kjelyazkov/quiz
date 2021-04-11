import { createStore } from 'vuex'
import user from './modules/user'
import quiz from './modules/quiz'
import statistics from './modules/statistics'
import api from '../services/api'

export default createStore({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		user,
		quiz,
		statistics
	}
})
