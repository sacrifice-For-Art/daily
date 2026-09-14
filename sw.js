const CACHE = "timetable-v3";
const FILES = ["./", "./index.html", "./manifest.json", "./icon.svg", "./cover.jpg"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request)));
});
