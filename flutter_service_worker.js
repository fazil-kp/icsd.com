'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3532d11855ca175f717185077d3ca4ca",
".git/config": "06c2c9600573cf2529858a43295e7068",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8a9a1568fa6db111eeed80eed05521b3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c30e5c94da0d2d6c102a5f757e5433d3",
".git/logs/refs/heads/main": "cdc1534b248c3e5c8cebb6e5d7b8a993",
".git/logs/refs/remotes/origin/main": "b00c908f2efee6872fea18528825a473",
".git/objects/03/42763af8c83c241aff9c5cd2dcb2b6c4b819ad": "f8c2d5faf7507a0c26da7f5bb9321126",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/741f1e12fb51ae8c024250bae1e8b0bace6b4a": "690aa2a47b18f26141fe4558738e89b6",
".git/objects/17/40a3232fc57443063eeb3f3ed3cf5f021ccd4f": "427e45c22cbfe36bb90c03e3e4275702",
".git/objects/19/3e24a97aa2c52d80a5ef8a0eb5042caa09aea8": "3f1c9c0192e1dc29ac6b3482796266b5",
".git/objects/19/cfc065578346d44fcf4cb54f9a77ca7c9df46d": "a147c379e906a5b0683044737c0ff134",
".git/objects/1d/bc97492d741a25a0ba6da5736a37a3cad83ce7": "1280a0167e5696d6c54d408f57d4fc14",
".git/objects/20/223d00a78a0d5e47f8709e08d6d682e86c46ab": "794bceb2aa7ada115eaf2f441d0a457e",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2d/bcc499c947b25649656a2988afc97f986e148a": "97c36e098bdfe128b9219a0965c07cc8",
".git/objects/2f/0ed40526089a340f0a02d23e3087dbd391048f": "2ebd698450fd0987b72a3889fe97ad6b",
".git/objects/3a/0380f2c69c5900bddafc584b385f1daa576a79": "cc5d2dc983cf0ee5922daa13be371862",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/f0fce039a197865670b82000cc9e4808938810": "2a1d6b3d30e2d3cef01b0345bc61115e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/6d5d8be284a9869b3ef3ee59b000224a332cbc": "83ebd959562cddbd4bc12f08e2f48aa1",
".git/objects/4a/96fb913ca29c0c3c7eb6ab27596cc32ac56bdb": "1d001c4158efcb1a01e1e87f7c6028e3",
".git/objects/55/a68a587e73f0a3b52239ae8a2fefa4fa910bd7": "25071238cfc81bf39aff039dbfb56a68",
".git/objects/57/2cac80e0d6ee80aa82eb93deb5c2bd8f1913da": "f826bb7d9f013a6675763b9c75b23e38",
".git/objects/58/65796dd51c3920350791295ce673c60c4e94bc": "2d7ca2151403c51ff466af5ec91301d4",
".git/objects/59/140db3fea3c49562fd1f2d2f44da29f184f0f2": "c34c2bf1762e4f4304a862470b044e02",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/85/ac9bd828ed98e443c05ff31e3a2d6c60931864": "d2f35e6428ca8c371a988c83ac9ed595",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/493abb30a471182f1673871b74633c39f9c7f4": "5d5e7fed76989e1b1eae29d5d1de5fcb",
".git/objects/91/f8c956b33c91d839e423d15cc94772c66eb7f5": "708678b13026aaa3d5854356c156438e",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/93/e1f34cca92ecea85287605bf7f9a7bf12f1a5e": "51ef45c1e3435f5b8c810e6477ea847f",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/e4f367027065e947d59eabd71e1d1765ccfd2d": "d69d2d794a6fbe14282b1c2976e39bb1",
".git/objects/9a/08681d7947413f7824cf371c2bc6a588744581": "cdeb8a0cae4e1c78ff0c262edda392d0",
".git/objects/9e/3aae595103e28485c18d47777ec0d6a559f485": "cbcac253169d90c7428bce4c6338eff3",
".git/objects/9e/a49de4d2480c2eb5492ea46c117fde9a47ea88": "04ee963a213b621d09f8f990a2f86255",
".git/objects/a6/aa6eec2e39459a845fefe6571116d583a01ced": "5ee477670d2cf82a77278c9836efbe33",
".git/objects/a6/fc3496720ac298cc06ff14e9c370d9433a40f2": "95f7b2e06b53c26413f6caf3828c6dc5",
".git/objects/a7/63b41125c245f92fc4a1ed2b72df3e31c616ae": "ffc9460afb8514c716898240afe65ad0",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/793468e849e1c58e7f4e50eb387a544c660898": "b0aa7bb9d25cf599b011548e7498f2e8",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/f694d5ca348bbe29d65bf77166de8e33483b6a": "de62a6feee3aacaaa59cfd2aa91e277d",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ce/7346f19eeca13a4219f7cefaf96ad08b383800": "d1dc397310aee4633cff0bd609d1b9e1",
".git/objects/ce/a23b60adae308cb85017c9f524cba35cd54153": "4db58532accbefff1eca110f5f89d1a5",
".git/objects/d0/9a940dab3af58a63a44670a58b4b7341131d59": "b9ecc3a238a4b6b88b4b12481a8ca4a9",
".git/objects/d3/8efde2e9454be06369188ace54c2b078a55493": "7284646c1ee2f5cc36ed7e58d0ed14eb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/de/4cc9c423750fca34033493314d118a7a37b2e3": "d903bc7802a631f0a1b804b8cab0579b",
".git/objects/de/6df95c04addbccea450ed6b2681bd3e09f770e": "f2dcedb2e96f1403708940195fdc38cc",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/b1dcab3038c83980942423aee020a27daad5e9": "9cd1a2c907f9e8e7883dfce0b820698e",
".git/objects/f1/2606e5d47fd1387726dd3233621367e6072234": "9da5d3eaa842402625d99fe30c6113a3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "02eb150fd8633aaf40e2e4de974df0c9",
".git/refs/remotes/origin/main": "02eb150fd8633aaf40e2e4de974df0c9",
"assets/AssetManifest.bin": "3c6ed34b845973f4976d3c0dfd3f6e22",
"assets/AssetManifest.bin.json": "051fe0e5fa1b895fc94c7018511ea550",
"assets/AssetManifest.json": "041453530cd45cff70bf25fe3a9af332",
"assets/assets/images/ban1.jpg": "1faf5386ce4ca53d6d2b3b228869500c",
"assets/assets/images/ban2.jpg": "4bc776560bbb08d04d3ea36b7cc0117c",
"assets/assets/images/ban3.jpg": "cf239cb215e813b194cf6440a9230a8f",
"assets/assets/images/day1_ban1.jpg": "89d09de9e4142306aedfe493e4d401c1",
"assets/assets/images/day1_ban2.jpg": "7e71b03edc5b63178bd32ff4a11c27da",
"assets/assets/images/dyuthi.jpg": "e2bc847a7ed6021908a17c2486e43328",
"assets/assets/images/rcss.png": "830fc2e12cd92e5b98f020db2ba100a2",
"assets/assets/images/splash.png": "8f6952980ff6ca2ca51bddd8ed12da14",
"assets/assets/images/splash1.png": "9fce8c683aa46961cd204c20f97e1c72",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "cc8fd01ba8dbed0b92117497f9356f09",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "967aeece198b88f2d1dc49ea33f12a36",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "ee50d41b7b89ee2b7401c64ed29a9f73",
"icons/Icon-192.png": "e45eaa6463944886ae286e64332240df",
"icons/Icon-512.png": "934c44107ea1e134fc5301bb32b33d90",
"icons/Icon-maskable-192.png": "e45eaa6463944886ae286e64332240df",
"icons/Icon-maskable-512.png": "934c44107ea1e134fc5301bb32b33d90",
"index.html": "ca1b470bdc90f08848893e5f134dd1c1",
"/": "ca1b470bdc90f08848893e5f134dd1c1",
"main.dart.js": "de27e03ebe34a8a8fc66c6da6085357c",
"manifest.json": "a8682153409db51e37c5e4fd665ab652",
"splash/img/dark-1x.png": "b2ae98f714f716d338e4a83d025ad5b6",
"splash/img/dark-2x.png": "693dc732c6731a40c8df8cf8621aaa55",
"splash/img/dark-3x.png": "b8c083b1c3afab7b50470864fcbaddcc",
"splash/img/dark-4x.png": "b79c5157e1d568824ad4b546d519240e",
"splash/img/light-1x.png": "b2ae98f714f716d338e4a83d025ad5b6",
"splash/img/light-2x.png": "693dc732c6731a40c8df8cf8621aaa55",
"splash/img/light-3x.png": "b8c083b1c3afab7b50470864fcbaddcc",
"splash/img/light-4x.png": "b79c5157e1d568824ad4b546d519240e",
"version.json": "75214bf91a784c50bf5caf421507dff6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
