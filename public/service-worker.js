var cacheName = "v3";
var cacheFiles = [
    '/',
    '/assets/fonts/VeganSt.ttf',
    '/assets/css/style.css',
    '/index.php',
    // '/assets/js/links.js',
    '/assets/js/app.js'

    
]




self.addEventListener('install', function(e) {
    console.log("[ServiceWorker] Installed");
    console.log(cacheFiles);

    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log("[ServiceWorker] Caching cacheFiles");
            return cache.addAll(cacheFiles);
        })
    )
})

self.addEventListener('activate', function(e) {
    console.log("[ServiceWorker] Activated")


    e.waitUntil(

        caches.keys().then(function(cacheNames) {
            return Promise.all(cacheNames.map(function(thisCacheName) {

                if (thisCacheName !== cacheNames) {

                    console.log("[ServiceWorker] Removing Cached Files from", thisCacheName);
                    return caches.delete(thisCacheName);
                }
            }))
        })
    )
})
  

self.addEventListener('fetch', function(e) {
    console.log("[ServiceWorker] Fetching", e.request.url);
})
  
  
 