import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'

// Application
import App from './App.vue'

// Pages
import Home from './pages/Home.vue'
import Gists from './pages/Gists.vue'
import Followers from './pages/Followers.vue'
import Repositories from './pages/Repositories.vue'

import 'font-awesome/css/font-awesome.css'


Vue.use(VueRouter)
Vue.use(VueResource)

// Define Routes
const routes = [
    { path: '/gists', component: Gists },
    { path: '/followers', component: Followers },
    { path: '/repositories', component: Repositories },
    { path: '/', component: Home }
]

// Config VueRouter
const router = new VueRouter({
    routes, // short for routes: routes
})

// Init application
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
