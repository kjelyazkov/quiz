import api from '../../services/api'
import router from '../../router'

export default {
    namespaced: true,
    state: {
        user: null,
        errors: null,
    },
    mutations: {
        SET_ERRORS(state, errors){
            state.errors = errors;
        },
        SET_USER(state, user){
            state.user = user;
        },
    },
    actions: {
        register({commit}, user) {
            api.csrf().then(() => {
                api.register(user).then(res => {
                    // window.sessionStorage.setItem('token', res.data.token);
                    router.push('/login');
                }).catch(err => {
                    if(err.response) {
                        commit('SET_ERRORS', err.response.data.errors);
                    }
                });
            });
        },
        login({commit}, user) {
            api.login(user).then(res => {
                window.sessionStorage.setItem('token', res.data.token);
                api.profile().then(res => {
                    commit('SET_USER', res.data);
                    router.push('/');
                });
            }).catch(err => {
                if(err.response) {
                    commit('SET_ERRORS', err.response.data.errors);
                }
            });
        },
        logout() {
            api.logout().then(() => {
                window.sessionStorage.removeItem('token');
                window.location.href="/login";
            });
        }
    },
    getters: {
        
    }
}