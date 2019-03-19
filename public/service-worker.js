//This is the service worker with the Cache-first network

var CACHE = 'ncraft-precache';
var precacheFiles = [
      '/',
      '/dist/build.js'
    ];

//Install stage sets up the cache-array to configure pre-cache content
self.addEventListener('install', event => {
  console.log('The service worker is being installed.');
  event.waitUntil(precache().then(function() {
    console.log('[ServiceWorker] Skip waiting on install');
    return self.skipWaiting();
  })
  );
});

//allow sw to control of current page
self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Claiming clients for current page');
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  console.log('The service worker is serving the asset.'+ event.request.url);

  event.respondWith(fromCache(event.request).catch(fromServer(event.request)));

  event.waitUntil(update(event.request));
});

function precache() {
  return caches.open(CACHE).then(cache => {
    return cache.addAll(precacheFiles);
  });
}

function fromCache(request) {
  //we pull files from the cache first thing so we can show them fast
  return caches.open(CACHE).then(cache => {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  //this is where we call the server to get the newest version of the 
  //file to use the next time we show view
  return caches.open(CACHE).then(cache => {
    return fetch(request).then(response => {
      return cache.put(request, response);
    });
  });
}

function fromServer(request){
  //this is the fallback if it is not in the cahche to go to the server and get it
  return fetch(request).then(response => { return response})
}
