const CACHE_NAME = "petsafe_v1";

const urlsToCache = [
    "/",
    "/error.html",
]


self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
          .then(cache => {
            return cache.addAll(urlsToCache);
          })
          .catch((e) => console.log(e))
      );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys()
            .then( keys => {
                return Promise.all(
                    keys.filter( key => key !== CACHE_NAME )
                        .map( key => caches.delete(key) )
                )
            })
    );

    self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(fetchResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    })
    .catch(() => caches.match("/error.html"))
  );
});
