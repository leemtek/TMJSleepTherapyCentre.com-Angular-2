var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/assets/styles/site.css',
  '/assets/js/leemtek.js',
  '/assets/js/snapengage.js'
];
//console.log('Im here 1-!!!!!!!!!!!!!!!!');
self.addEventListener('install', function(event) {
  // Perform install steps
  console.log('Im here 2-!!!!!!!!!!!!!!!!');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache!!!!!!!!!!!!!!!!!!!!!!');
        return cache.addAll(urlsToCache);
      }).catch((e)=>{
          console.log(e);
      })
  );
});