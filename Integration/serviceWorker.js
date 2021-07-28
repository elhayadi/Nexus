const label = "NexusGroup-v1"
const assets = [
  "/",
  "/index.html",
  "/assets/css/bootstrap-grid.css",
  "/assets/css/style.css",
  "/assets/js/app.js",
  "/assets/js/sly.js",
]
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(label).then(function(cache) {
      return cache.addAll(assets);
    })
  );
});

