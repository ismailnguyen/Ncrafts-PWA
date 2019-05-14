import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Intro from '../views/Intro.vue'
import ScheduleOverview from '../views/ScheduleOverview.vue'
import Schedule from '../views/Schedule.vue'
import Speakers from '../views/Speakers.vue'
import MyAgenda from '../views/MyAgenda.vue'
import QrCodeReader from '../views/QrCodeReader.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'Intro',
            path: '/Intro',
            component: Intro,
        },
        {
            name: 'ScheduleOverview',
            path: '/',
            component: ScheduleOverview,
        },
        {
            name: 'Speakers',
            path: '/Speakers',
            component: Speakers,
        },
        {
            name: 'ScheduleDay',
            path: '/Schedule/:dayNumber/:roomNumber?',
            component: Schedule,
        },
        {
            name: 'MyAgenda',
            path: '/MyAgenda/:dayNumber?',
            component: MyAgenda
        },
        {
            name: 'QrCodeReader',
            path: '/QrCodeReader',
            component: QrCodeReader
        }
    ]
});

export default router;
