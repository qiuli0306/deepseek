// 极简 service worker：只为满足 PWA 可安装条件，不做任何缓存，避免更新不生效
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){ /* 直连网络 */ });
