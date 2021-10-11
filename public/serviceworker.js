addEventListener('install', function (event)
 { console.log('The service worker is installing...'); }); 
 // eslint-disable-next-line no-restricted-globals
addEventListener('activate', function (event)
 { console.log('The service worker is activated.'); });
 // eslint-disable-next-line no-restricted-globals 
addEventListener('fetch', function (event) 
{ console.log('The service worker is listening.'); });