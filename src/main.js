import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Chef from './components/Chef.vue'
import Menu from './components/Menu.vue'
// import Pricing from './components/Pricing.vue'
import Contact from './components/Contact.vue'
import Admin from './components/Admin.vue'
import Sign from './components/Signup'
import Trans from './components/Trans'
import Adminpage from './components/Adminpage.vue'
import Log from './components/Login.vue'
import Cart from './components/Cart'
import Transaction from './components/Transaction'


import VueRouter from 'vue-router'

import VueAnime from 'vue-animejs';

Vue.use(VueAnime)

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/about',
        component: About
    },

    {
        path: '/Chef',
        component: Chef
    },

    {
        path: '/Menu',
        component: Menu
    },

    // {
    //     path: '/Pricing',
    //     component: Pricing
    // },

    {
        path: '/Contact',
        component: Contact
    },

    {
        path: '/Admin',
        component: Admin
    },

    {
        path: '/Log',
        component: Log
    },

    {
        path: '/Adminpage',
        component: Adminpage,

        children: [

            { path: "Transaction", component: Transaction },
        ]
    },

    {
        path: '/Sign',
        component: Sign
    },

    {
        path: '/Trans',
        component: Trans
    },

    {
        path: '/Cart',
        component: Cart
    }

]

Vue.config.productionTip = false

const router = new VueRouter({
    routes,
    mode: "history",
})



Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')