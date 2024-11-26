'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d51ae695e6233fe5555d2a31be810540",
".git/config": "df752ba8e8caa00f11ff657649159309",
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
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3b036d201666e03f42b15f8724e64d57",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1a7ffed66496c0e4a7b8fca94b3fdf3",
".git/logs/refs/heads/main": "54d1df4d9dc88f09bcd90935a5a3d265",
".git/logs/refs/remotes/origin/main": "b1a8ecd23f50210d98ea175b1a64f203",
".git/objects/02/6f9b686ebf7ff5dfff25bddf41afa5491bf8fb": "e1e978efebe82ba28c2a30ac4959083a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/adac7594ff3b05761a39654cbcc64d3d0f3f04": "69c6386f5565d37141f8dc981a4cf709",
".git/objects/11/e6df66422efb28605b12a58d3db311f197767d": "af8a26cdd07836d3db2162155f7cb91c",
".git/objects/13/7123b9ce2e3ee89552c530e4e70b00010213c7": "64fe758ee99cdc82cc1f26b752284f6f",
".git/objects/15/97b76e87289a106dcfdd765e96282a6c158c97": "aa04fb7eb297a2da24819b06438d4d61",
".git/objects/1d/56fe84fda95fb3b6a680d651910b79c92fcbf8": "967da9e5be8810d64dcbf81001e85ac0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/a3c518fe712c60abf7db16361a1f4e945a4d37": "38d1d08c63b2c92ed12175e3c02fdfc1",
".git/objects/22/5bf540f69b0acde1ef92b51a7b32546a795271": "e556ce5c1cfad1ba639d555bd04cd8fe",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "f908bdfa8095577d8144105dd9ea79ee",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/d088526b196d06872782642b6a2921631649b4": "a9b394e407b9718b673e199628519e41",
".git/objects/27/367e85884c33b00dfaa82cff8d36c739c6571e": "aacb9245523262b22fb5e1eca23f0a78",
".git/objects/2c/0932740b2181ed0c4ee347e89616acd45f6dff": "ad5b9f28a78861a8b68c88dfc134c64e",
".git/objects/2c/f256ee377afa9b938ecdce657780a93449fed1": "d4dadda75c116062146a550a1265a902",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/37/111cc48639c2ce171acd572b3c8fbe2da96a67": "8a74858fe1c1fe178996319d48025348",
".git/objects/37/99e2cfb3f581672fa37d97f4339070fd8f84f9": "1f19ffdcc25061a6c88fb51433226f8a",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/49ad057ed117719ec791455c41f8d505e9ec72": "67ffcf9ecbd35cfae625b10a16287271",
".git/objects/3b/5ecb82810ecf324286e4e397431990be96f023": "114298c499d5c1a9c37eaaee625eab9a",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/889b21556981528e0d87f868dbe6962708bc03": "c8e7174e2424bd3eda09394c843b796a",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/74/7a13a4f2ad4d41a873d430178ff0329c1f04e5": "f203ac13ddd44c736b07deb6eb56a9ae",
".git/objects/77/3b68ad29d097d49004d6cb06be66df3faf82c3": "cce76dff271690c7a972007711b46630",
".git/objects/78/9a84b659e1c5487991717af08b9ff7037ed3e5": "eb34e007acfa9c7336706b60f9992842",
".git/objects/79/21d34ec86a6b023f07df8bbf0bd55983042f38": "ca04c199e1b838e98249d866efedf7b2",
".git/objects/7b/6e9cd656bda1c1ffee029222e6fb01f99318a4": "bcc9ce17a00e6ce6c6aa5c562db10bff",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/8951c3f1c76215b9d3e20d8ab30bb682869a59": "11a6ecad0522828522d1668cb5cbd6fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/45a466b6d64716c4c0a24a288a377f7f170d1f": "07cc27b20211cba0fc8c76f2551c17b2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a54b918cd5cbbab47925834b8d892e7b242bee": "00c55038de9cd08dc4befc81c3bab793",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a8/80173e1cadb0d79fcb32034fcc4727441dc11c": "8541a9d318bec76016da09a2a21eeafd",
".git/objects/a9/8253ce14a42cd1c3caabda38ec4dc2a3a2cb24": "d702001b0f84d99e596f30f3240a2032",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/7cd76d0184aebf5aedbd089565422e3fc5974d": "4c24234f4385119f708fc6062aab1047",
".git/objects/b3/852408a50b6301ca86395c9892aead22342034": "7515890b3c7be1987423021b62bc38a0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e683f9edd7119dc78df36fd0684ee2117f1de8": "0c11c2ca9afa5b23afbe893e173aeccd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/b3098e17ce70424c5e6185e49316a80c475e05": "37ef7b47575f84424b94d6ac66c3439c",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/8c6cc3c7a711241255fadef2aa143028039f1f": "2faf925c724c246d8aec3a1e13c2545d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c2cf71d9afc1d2d42dfa2a67455d66e4c6af01": "4814f91a66716670d65cdd83c8b36793",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/028d0c657bc4ca911fcf8b956f4544e344b6bf": "6a8d33efb5b2935d4a8b1422807e4274",
".git/objects/da/66b9b9edc837fd09f33e794216597c34e8dfb0": "c0441e83b3b41a4ab7d3bb28735d8635",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/2c211debb2e51c9da420bb93ef50f26d121a76": "b1483a53473155c8f940505229a1e1d5",
".git/objects/e7/510d177e3eab728791c3c66648d1be7bed5612": "dda65a56a423e6aa483d718e0a0f93e3",
".git/objects/e9/34051a7987ac9d620c70106d4f6c46e709a7c6": "721fdbd0f9756ed8c28de814100578a8",
".git/objects/ea/9e767440a4ff133ecaea86df38462e8d1d34e8": "2f0191906f34133291557e8d7574991a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/4be33bc74696ccb911aff9fadd98b13f703c73": "ebd8ca7159949071cfaebc887a5bc220",
".git/objects/f0/6dacf080ade24d5709cdfb7fb488c1576873de": "b21107cc545cfb2c3064240ca69bf2cb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/499147f7d2eaf3a62f0c9b9ae547e7c808fc74": "48f3af450eef542b7506caaf4b49e083",
".git/objects/f5/6c4198c274d30a0364b63c326e48b4248f867a": "3b2dbcc6c8b2c55e7fd484c0285c4618",
".git/objects/f8/a112afd3d67efb2e0b2a5e0ec8ba48be48065f": "1829f0fb0d48245c54ed4041d6b5021e",
".git/objects/f9/88bb84405518ff26d9af4102ef7a2ca8790499": "8747e2aec16780089013918a08330f64",
".git/refs/heads/main": "fe31684505d67878f26d0fd541c9df9c",
".git/refs/remotes/origin/main": "fe31684505d67878f26d0fd541c9df9c",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "3da89c0d5063b35274aef9c5cd9e0435",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a876f3c928932cabd62349233198aa5b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "82a6ed5dee7afa8cc15752e013c20788",
"/": "82a6ed5dee7afa8cc15752e013c20788",
"main.dart.js": "2a05e8b4dffa20708ee5b33305409f5a",
"manifest.json": "3f9f46d43b9a25da68f5dd4800d5ed6d",
"version.json": "c2a08cda2a1e690bfed5ce9fc4d9e5b1"};
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
