const CACHE_NAME = "petsafe_v1";

const urlsToCache = [
    "/",
    "/error.html",
]


self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
          .then(cache => {
            console.log("Cache abierta");
            return cache.addAll(urlsToCache);
          })
          .catch((e) => console.log(e))
      );
});

self.addEventListener('activate', e => {
    console.log("Service worker activado");

    console.log(e);

    e.waitUntil(
        caches.keys()
            .then( keys => {
                
                return Promise.all(
                    keys.filter( key => key !== CACHE_NAME )
                        .map( key => caches.delete(key) )
                )
            })
    );
});

self.addEventListener("fetch", event => {
  if (event.request.headers.get('accept')?.includes('application/json')) {
    return; // Deja que el navegador maneje esta solicitud
  }

  if (event.request.method === 'POST') {
    console.log(`Omitiendo caché para petición POST: ${event.request.url}`);
    return;
  }
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(async fetchResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          console.log(event.request);
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        });
      });
    })
    .catch(() => caches.match("/error.html"))
  );
});