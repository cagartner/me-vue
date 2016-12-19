<template>
    <div>
        <ul>
            <li><router-link to="/">Go back to Home</router-link></li>
            <li><router-link to="/gists">Go to Gists</router-link></li>
            <li><router-link to="/followers">Go to Folowers</router-link></li>
            <li><router-link to="/repositories">Go to Repositories</router-link></li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="scss">
    @import "../node_modules/bootstrap/scss/bootstrap-flex.scss";
</style>
