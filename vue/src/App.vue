<template>
    <div class="bg-gray-800 fixed inset-0 h-screen max-h-screen">
        <Navigation/>
        <div>
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>
</template>
<script>
import Navigation from './components/Navigation'
import api from './services/api'

export default {
    name: "App",
    components: {
        Navigation
    },
    beforeCreate() {
        api.csrf();
        if(window.sessionStorage.getItem('token')) {
            api.profile().then(res => {
                this.$store.commit('user/SET_USER', res.data);
            });
        }
    },

}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>