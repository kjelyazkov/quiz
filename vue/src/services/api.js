import Axios from 'axios';

const axios = Axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
    },
    withCredentials: true
});

export default {

    login(user) {
        return axios.post('/login', user);
    },

    register(user) {
        return axios.post('/register', user)
    },

    logout() {
        return axios.post('/logout');
    },

    profile() {
        return axios.get('/profile');
    },

    csrf() {
        return axios.get('/csrf-cookie');
    },

}