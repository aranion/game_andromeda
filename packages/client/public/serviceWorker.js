const VERSION_CACHE = 'v0.0.1';
const CACHE_NAME = `andromeda-cache-${VERSION_CACHE}`;

const URLS = ['/', '/index.html'];

this.addEventListener('install', event => {
  console.log('SW::install');
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log('SW::Opened cache');
        return cache.addAll(URLS);
      })
      .catch(err => {
        console.log(err);
        throw err;
      })
  );
});

this.addEventListener('activate', event => {
  console.log('SW::activate');
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) {
            return key.indexOf(VERSION_CACHE) !== 0;
          })
          .map(function (key) {
            return caches.delete(key);
          })
      );
    })
  );
});

this.addEventListener('fetch', event => {
  console.log('SW::fetch');
  event.respondWith(
    caches.match(event.request).then(res => {
      if (res) {
        return res;
      }

      const fetchRequest = event.request.clone();
      const request = event.request;

      return fetch(fetchRequest).then(res => {
        if (!res || res.status !== 200 || res.type !== 'basic') {
          return res;
        }

        const responseToCache = res.clone();
        caches.open(CACHE_NAME).then(cache => {
          if (request.url.match('^(http|https)://')) {
            cache.put(request, responseToCache);
          } else {
            return;
          }
        });
        return res;
      });
    })
  );
});
