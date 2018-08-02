const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS =  [ 
'/',
'/index.php',
'/myportfolio/public/manifest.json',
'/myportfolio/public/assets/fonts/VeganSt.ttf',
'/myportfolio/public/assets/css/style.css',
'/myportfolio/public/assets/js/links.js',
'/myportfolio/public/app.js',
'/myportfolio/public/assets/js/ajax.js']
;

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
// self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
//   if (event.request.url.startsWith(self.location.origin)) {
//     event.respondWith(
//       caches.match(event.request).then(cachedResponse => {
//         if (cachedResponse) {
//           return cachedResponse;
//         }

//         return caches.open(RUNTIME).then(cache => {
//           return fetch(event.request).then(response => {
//             // Put a copy of the response in the runtime cache.
//             return cache.put(event.request, response.clone()).then(() => {
//               return response;
//             }).catch(function() {
//               return networkResponse;
//               });
//           });
//         });
//       })
//     );
//   }
// });
           
self.addEventListener('fetch', function(event) {
  event.respondWith(caches.open(RUNTIME).then(function(cache) {
      return cache.match(event.request).then(function(response) {
          //console.log("cache request: " + event.request.url);
          var fetchPromise = fetch(event.request).then(function(networkResponse) {
              // if we got a response from the cache, update the cache
              //console.log("fetch completed: " + event.request.url, networkResponse);
              if (networkResponse) {
                  //console.debug("updated cached page: " + event.request.url, networkResponse);
                  cache.put(event.request, networkResponse.clone());
              }
              return networkResponse;
          }, function (e) {
              // rejected promise - just ignore it, we're offline
              //console.log("Error in fetch()", e);
              ;
          });

          // respond from the cache, or the network
          return response || fetchPromise;
      });
  }));
});