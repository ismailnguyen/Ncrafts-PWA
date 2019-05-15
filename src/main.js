import Vue from 'vue'
import App from './views/App.vue'

import router from './router'
import registerServiceWorker from './service-worker'

registerServiceWorker();

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});