var CACHE = 'ncrafts-precache';
var precacheFiles = [
      '/',
  '/index.html',
  '/assets/css/material-icons.css',
  '/assets/css/materialize.min.css',
  '/dist/build.js',
  '/assets/js/jquery-3.3.1.min.js',
  '/assets/assets/js/materialize.min.js',
  '/assets/js/smallchat.min.js'
];

//Install stage sets up the cache-array to configure pre-cache content
self.addEventListener('install', event => {
      console.log('The service worker is being installed.');
      
      // IMPORTANT: Clone the request. A request is a stream and
      // can only be consumed once. Since we are consuming this
      // once by cache and once by the browser for fetch, we need
      // to clone the response.
      var fetchRequest = event.request.clone();
      
      if (fetchRequest.cache === 'only-if-cached' && fetchRequest.mode !== 'same-origin') 
      {
            return;
      }
      
      event.waitUntil(precache()
                      .then(() => {
            console.log('[ServiceWorker] Skip waiting on install');
            return self.skipWaiting();
      }));
});

//allow sw to control of current page
self.addEventListener('activate', event => {
      console.log('[ServiceWorker] Claiming clients for current page');
      return self.clients.claim();
});

self.addEventListener('fetch', event => {
      console.log('The service worker is serving the asset.'+ event.request.url);
      
      // IMPORTANT: Clone the request. A request is a stream and
      // can only be consumed once. Since we are consuming this
      // once by cache and once by the browser for fetch, we need
      // to clone the response.
      var fetchRequest = event.request.clone();
      
      if (fetchRequest.method !== 'GET'
            && fetchRequest.cache === 'only-if-cached'
            && fetchRequest.mode !== 'same-origin')
      {
            return;
      }

		event
			  .respondWith(fromServer(fetchRequest)
			  .catch(fromCache(fetchRequest)));

      event.waitUntil(update(fetchRequest));
});

function precache() {
      return caches.open(CACHE)
                  .then(cache => cache.addAll(precacheFiles));
}

function fromCache(request) {
      //we pull files from the cache first thing so we can show them fast
      return caches.open(CACHE)
                  .then(cache => cache.match(request)
                                    .then(matching => matching || Promise.reject('no-match'))
                       );
}

function update(request) {
      //this is where we call the server to get the newest version of the 
      //file to use the next time we show view
      return caches.open(CACHE)
                        .then(cache => fetch(request.clone())
                              .then(response => {
                                    // IMPORTANT: Clone the response. A response is a stream
                                    // and because we want the browser to consume the response
                                    // as well as the cache consuming the response, we need
                                    // to clone it so we have two streams.
                                    var responseToCache = response.clone();

                                    cache.put(request, responseToCache)
      }));
}

function fromServer(request){
      //this is the fallback if it is not in the cahche to go to the server and get it
      return fetch(request.clone()).then(response => response.clone())
}
