// Import necessary modules from workbox
const { offlineFallback, warmStrategyCache } = require("workbox-recipes");
const { StaleWhileRevalidate, CacheFirst } = require("workbox-strategies");
const { registerRoute } = require("workbox-routing");
const { CacheableResponsePlugin } = require("workbox-cacheable-response");
const { ExpirationPlugin } = require("workbox-expiration");
const { precacheAndRoute } = require("workbox-precaching/precacheAndRoute");

// Precache resources defined in WB_MANIFEST
precacheAndRoute(self.__WB_MANIFEST);

// Define a CacheFirst strategy for page caching with expiration settings
const pageCache = new CacheFirst({
  cacheName: "page-cache",
  plugins: [
    // Cache responses with status 0 (opaque) or 200 (successful)
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    // Set expiration for cached pages to 30 days
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

// Warm up the cache for specific URLs using the pageCache strategy
warmStrategyCache({
  urls: ["/index.html", "/"],
  strategy: pageCache,
});

// Register a route to handle navigation requests using the pageCache strategy
registerRoute(({ request }) => request.mode === "navigate", pageCache);

// Register a route to handle requests for styles, scripts, and workers using the StaleWhileRevalidate strategy
registerRoute(
  ({ request }) =>
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "worker",
  new StaleWhileRevalidate({
    cacheName: "asset-cache",
    plugins: [
      // Cache responses with status 0 (opaque) or 200 (successful)
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);

// Register a route to handle requests for images using the CacheFirst strategy
registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "image-cache",
    plugins: [
      // Cache responses with status 0 (opaque) or 200 (successful)
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);