import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Dashboard from '../components/Dashboard.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'Dashboard',
            path: '/',
            component: Dashboard 
        }
    ]
});

export default router;