const version = 'V0.09';
const staticCacheName = version + 'staticfiles';

addEventListener('install', function (event)
 { 
    skipWaiting();
    
    event.waitUntil(
        caches.open(staticCacheName)
        .then( staticCache => {
          return staticCache.addAll([
            '../src/index.css',
            '../src/index.js',
            '../src/logo.svg',
            '../src/offline.html'
          ]); // end return addAll
        }) // end open then
      ); // end waitUntil
    console.log('The service worker is installing...');
 }); 

addEventListener('activate', function (event)
 { 
    caches.keys()
    .then( cacheNames => {
        console.log(cacheNames,'+++++++++++++')

      return Promise.all(
        cacheNames.map( cacheName => {
            if (cacheName != staticCacheName) {
                console.log('deleted.............')
              return caches.delete(cacheName);
            } // end if
          }) // end map
        ); // end return Promise.all
      }) // end keys then
      .then( () => {
        return clients.claim();
      }) // end then
     
     console.log('The service worker is activated.'); 
});

addEventListener('fetch', fetchEvent => {
    const request = fetchEvent.request;
    // if (request.headers.get('Accept').includes('text/html')) {
    fetchEvent.respondWith(
        caches.match(request)
        .then( responseFromCache => {
          if (responseFromCache) {
            return responseFromCache;
          } // end if
          console.log('-------------in server mode')
          return fetch(request)
          .catch( error => {
              staticCacheName
             return caches.match('/src/index.js')
          });
        }) 
    ); // end respondWith
    // }
    
  });
