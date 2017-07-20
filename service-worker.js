"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","44decb617c33499517db00cfda8911a3"],["static/css/main.929fcd1d.css","6ea291e0d7710183d22faca2a478be70"],["static/js/main.732ff3a6.js","89cd203cda7a3bd317fdd615314c519c"],["static/media/addhome.6265dee1.svg","6265dee1b927ba9e5d43041774ddae7b"],["static/media/check.ab4414b7.svg","ab4414b7592c6cb6849123b018d6b1dd"],["static/media/clear.836f44ab.svg","836f44abdeba25a20d7e0ba22aca6c44"],["static/media/detik_home.cb1a03c9.png","cb1a03c927a8f243a9bb68ae44de0303"],["static/media/dk-logo.3812a08d.png","3812a08d567774c70cfa40469490d9e3"],["static/media/download.6f265606.svg","6f26560659881de8028a1eb7a0f57cd0"],["static/media/facebook_home.713bb914.png","713bb9149a95fe10626cb3480afff0e9"],["static/media/google_home.725baa1d.png","725baa1d6312bdc53357fc5acd8ca88d"],["static/media/history.fe2f81b7.svg","fe2f81b79d32f3209db361c49ef5785d"],["static/media/kompas_home.cfbead04.png","cfbead04276ac7dbe861d60fee75b145"],["static/media/kompas_link1.503a86e1.png","503a86e1ba9dca4f89fc9b24b6c143dc"],["static/media/kompas_link2.85c712e4.png","85c712e41bd23472bb204bf1326cebea"],["static/media/kompas_update.e6eec453.png","e6eec45396b0bb74b9203455067f8203"],["static/media/kompas_update2.8bbd621d.png","8bbd621d04441091e9e309df31d32455"],["static/media/liputan6_home.eee274a8.png","eee274a8a0f3fb71b6ea20fad677130c"],["static/media/loading.4e239a30.gif","4e239a307e8d3121fff869f3314c4e02"],["static/media/menu_back.758a43c3.svg","758a43c3e7f81ca044802660ea18ea8c"],["static/media/menu_info.8b6fe623.svg","8b6fe6235b4ee3316dde82d9d16093cc"],["static/media/menu_next.326964a5.svg","326964a53e35d7482a811aef7e69262e"],["static/media/menu_refresh.c1a110e3.svg","c1a110e3d213db3ad987e09528b776c4"],["static/media/offline.ca194919.svg","ca194919e41b41dc9e6e71d9ab2eda71"],["static/media/online.78f046a1.svg","78f046a1b9c09af59d00134a929985b6"],["static/media/settings.7cc489b8.svg","7cc489b8fdcd8a76155d7b0643e456a6"],["static/media/share.1fc22bcd.svg","1fc22bcd43e5b362110d8973df2db3a8"],["static/media/subscribe.c9eab304.svg","c9eab304a02c6adb5a26647764be3b8a"],["static/media/tribunnews_home.daea76cc.png","daea76ccfdec51ccb7662eaf5bc9c1aa"],["static/media/youtube_home.36f7951a.png","36f7951a9ec00e12b3f6d09d91ac8b85"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/project-zerda/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});