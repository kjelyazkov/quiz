<template>
    <div>
        <div>
            <router-link to="/">Home</router-link>
            <router-link to="/settings">Settings</router-link>
            <router-link to="/Statistics">Settings</router-link>
        </div>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>