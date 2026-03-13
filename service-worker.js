const cacheName = "fitness-cache";

const filesToCache = [
"index.html"
];

self.addEventListener("install", function(event){

event.waitUntil(
caches.open(cacheName)
.then(function(cache){
return cache.addAll(filesToCache);
})
);

});

self.addEventListener("fetch", function(event){

event.respondWith(
caches.match(event.request)
.then(function(response){
return response || fetch(event.request);
})
);

});