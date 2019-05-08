import Vue from 'vue'
import App from './views/App.vue'

import router from './router'

/*
 * This is the service worker with the combined offline experience (Offline page + Offline copy of pages)
 */
// Check compatibility for the browser we're running this in
if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("[Service worker] active service worker found, no need to register");
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("service-worker.js", {
        scope: "./"
      })
      .then(function (reg) {
        console.log("[Service worker] Service worker has been registered for scope: " + reg.scope);
      });
  }
}

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});