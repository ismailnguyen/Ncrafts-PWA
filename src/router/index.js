import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Dashboard from '../views/Dashboard.vue'
import Schedule from '../views/Schedule.vue'
import Speakers from '../views/Speakers.vue'
import MyAgenda from '../views/MyAgenda.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'Dashboard',
            path: '/',
            component: Dashboard,
        },
        {
            name: 'ScheduleDay',
            path: '/Schedule/:dayNumber/:roomNumber',
            component: Schedule,
        },
        {
            name: 'Speakers',
            path: '/Speakers',
            component: Speakers 
        },
        {
            name: 'MyAgenda',
            path: '/MyAgenda/:dayNumber?',
            component: MyAgenda
        }
    ]
});

export default router;