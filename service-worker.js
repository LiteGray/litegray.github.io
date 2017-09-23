"use strict";function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}var precacheConfig=[["/index.html","48b187a705eb101ab611957e7799092b"],["/static/css/main.5974fdab.css","c907517d3dd02bec84a00d7b861bb49c"],["/static/js/main.1880c59a.js","bff4f88d317c6cde23cdad4a21391e6d"],["/static/media/BZ-3275-min.98f3f20a.jpg","98f3f20af81c2e61efa8ca561944bcea"],["/static/media/BZ-3275.1df0551d.jpg","1df0551ddc0896cf7c2b47c168a5b559"],["/static/media/BZ-4183-min.0146e3d9.jpg","0146e3d91a7db3cd1494385e5d7aa9ec"],["/static/media/BZ-4183.02ddbe85.jpg","02ddbe85c76769ee402708cb52b99e38"],["/static/media/BZ-4200-min.1a67d1b2.jpg","1a67d1b2747599cb795c0e699ab995a1"],["/static/media/BZ-4200.29ef7baa.jpg","29ef7baa96ce5bf2d5f52dfdaffaacc6"],["/static/media/BZ-52272-min.f80c7e57.jpg","f80c7e578d5afa40263ed4de8b4bc007"],["/static/media/BZ-52272.03b7bcb8.jpg","03b7bcb8fe1827c3decaa06feb767fd3"],["/static/media/BZ-62294-min.e902246f.jpg","e902246f0fb8c1fea8e45cdf550358e1"],["/static/media/BZ-62294.9e227755.jpg","9e22775508bc862f32cedfff0cb3f973"],["/static/media/BZ-CM601-min.c6aadde6.jpg","c6aadde68dca44a05ea9db6f44dbec2f"],["/static/media/BZ-CM601.c3b361b3.jpg","c3b361b3afd6c4869e5269f987b403fb"],["/static/media/BZ-HD021-min.53b6979c.jpg","53b6979c73d34e0fb55e0f1aa0d4ba5d"],["/static/media/BZ-HD021.20e29ffe.jpg","20e29ffee12baca0291c390fa0b83797"],["/static/media/BZ-HD046-min.380efb52.jpg","380efb52ed31c5d5f5abf15bdf248476"],["/static/media/BZ-HD046.c9c9974b.jpg","c9c9974bff784b79c88d11c13730b3b3"],["/static/media/BZ-HD078xiuhua-min.76273c24.jpg","76273c24a19427b6ec5d071228afb9d2"],["/static/media/BZ-HD078xiuhua.f6a223f1.jpg","f6a223f1a00da7468fbda8622ba9c17b"],["/static/media/BZ-K048-min.aa7250e4.jpg","aa7250e40df48646239aead479e1f5a5"],["/static/media/BZ-K048.b7e4d4bd.jpg","b7e4d4bd36646d237dd60750413fc191"],["/static/media/BZ-K049-min.f03b3ecb.jpg","f03b3ecbb2dc3aef9d02967caef4c9e1"],["/static/media/BZ-K049.7a8827ca.jpg","7a8827caed6a0d89605e539a78c4f1a9"],["/static/media/BZ-K058-min.16bd2ce2.jpg","16bd2ce25930f6bdaa2ee005e8c44053"],["/static/media/BZ-K058.f1a451b3.jpg","f1a451b39c880cad0579a584ece4b840"],["/static/media/BZ-L2024-min.fd1626da.jpg","fd1626da69d3701b0d3d01a4b6de1bce"],["/static/media/BZ-L2024.9462eba1.jpg","9462eba148858d6fda6e12fd5d9623ae"],["/static/media/BZ-L2027-min.a1af7b09.jpg","a1af7b0943873bd0a66b0a1d962a3da1"],["/static/media/BZ-L2027.5b8a118e.jpg","5b8a118e285236bc6f0fed3fa3c87c58"],["/static/media/BZ-L2088-min.cf1d93a3.jpg","cf1d93a3bd1ee132d997c109b3f4663d"],["/static/media/BZ-L2088.4f370c9f.jpg","4f370c9fce9c41029bdf89fdc35be7f5"],["/static/media/BZ-PB01-min.13f431ad.jpg","13f431ad9b9086ae3d5c4bfe4cab1068"],["/static/media/BZ-PB01.65e58128.jpg","65e581286e929d63b1a85c807741e70a"],["/static/media/BZ-S005-min.d452f7cc.jpg","d452f7ccb3870acd6fa4dc4b24f49680"],["/static/media/BZ-S005.16f2886d.jpg","16f2886dd69982330fd7fab21f663241"],["/static/media/BZ-S013-min.8b876cb2.jpg","8b876cb2927a08d885fb1859f7ed630c"],["/static/media/BZ-S013.a0315673.jpg","a0315673f9cf1c8bc3307176dad5b8c7"],["/static/media/BZ-S017-min.ad1a2c07.jpg","ad1a2c076bb571c4c46b16a7ba0a9bc1"],["/static/media/BZ-S017.e0b25eb3.jpg","e0b25eb349cc5fb15e83dc66f39ada44"],["/static/media/BZ-S032-min.946a9380.jpg","946a9380f3c8af45d368f9899dcd672f"],["/static/media/BZ-S032.aa971a73.jpg","aa971a7335f1f9c0042d38c2391e49a1"],["/static/media/CD-3335-min.090fa41c.jpg","090fa41c162adc2864e1bef25aea6d89"],["/static/media/CD-3335.1bc62d12.jpg","1bc62d12c35a2335e2f1d0a47d499f81"],["/static/media/CD-52838-min.dbd0f2b3.jpg","dbd0f2b31b423556f6049c5d1c9d2fdd"],["/static/media/CD-52838.ec0a5e7f.jpg","ec0a5e7f55ec3ce6f5940371d5cef6a8"],["/static/media/CD-7814-min.57e964ca.jpg","57e964caae52c8b6628439dd02497751"],["/static/media/CD-7814.f6219598.jpg","f621959825d01f1876ec412c07fe2232"],["/static/media/CD-C3869-min.ee7543e6.jpg","ee7543e655c8aa54200d21526e0b3482"],["/static/media/CD-C3869.c8e08e76.jpg","c8e08e76c4a04d9fa38453d59b9b31b8"],["/static/media/CD-CM601-min.64de42db.jpg","64de42dbda6cbacc1dcf2cf2c6b5a995"],["/static/media/CD-CM601.20f7d818.jpg","20f7d818ece939ed9d79ba92181fbfda"],["/static/media/CD-HD078xiuhua-min.2bcd8beb.jpg","2bcd8bebcb8ff87ad7c3c9af68505fdf"],["/static/media/CD-HD078xiuhua.d234e7a0.jpg","d234e7a0ed8deff9b501015d9b0e3646"],["/static/media/CD-HD118-min.d026826b.jpg","d026826bdf47903644df4d8015673e47"],["/static/media/CD-HD118.0603318b.jpg","0603318b499d08ce7a543ffacd18bca4"],["/static/media/CD-L2024-min.ed83356f.jpg","ed83356fa872dfdd67123a7befcb535f"],["/static/media/CD-L2024.8f3d17b7.jpg","8f3d17b7542fff6dac322b7af31dfd3e"],["/static/media/PD-3385-min.b6e75002.jpg","b6e750027af7641dfbc560310c7159c7"],["/static/media/PD-3385.f27f1e0c.jpg","f27f1e0ca70f1e8d250fdf786508dadb"],["/static/media/PD-L042-min.f93931df.jpg","f93931df2531925960548a7606583405"],["/static/media/PD-L042.62da6ee5.jpg","62da6ee5d3c71200ede70df418016ae6"],["/static/media/PD-S024-min.19caf7a5.jpg","19caf7a586d9de56fc1161190e78050c"],["/static/media/PD-S024.83e2b406.jpg","83e2b406b7ddbfccaba0baedb340aa0e"],["/static/media/PD-XH007-min.c63468b8.jpg","c63468b8784e3e58fe1f9032eca8acdb"],["/static/media/PD-XH007.188fc9e5.jpg","188fc9e5db77c842d76fbaa8340ab165"],["/static/media/SFJ-1201-min.f2272bdc.jpg","f2272bdce7419f8fc78bd0dfc4149df2"],["/static/media/SFJ-1201.c28cce70.jpg","c28cce70e8a163e0b0308f57fd8d6f57"],["/static/media/SFJ-3275-detail-0.bd2d05cf.jpg","bd2d05cfef11f5547ecc858dbf74b972"],["/static/media/SFJ-3275-detail-1.df1c2bbb.jpg","df1c2bbb6b813f5ddc46ac04419b595a"],["/static/media/SFJ-3275-detail-2.ecb494b8.jpg","ecb494b8c0e2fecffe373551cf6c3cc6"],["/static/media/SFJ-3275-min.1321c731.jpg","1321c73104852e41256602605a2a1b8d"],["/static/media/SFJ-3275.2ca92277.jpg","2ca922776cf95f0e31c7e73f411bea84"],["/static/media/SFJ-3335-detail-0.b2a5a5f8.jpg","b2a5a5f8c2f2ae64779ffb8fae1813c9"],["/static/media/SFJ-3335-detail-1.80eb9c12.jpg","80eb9c121f84ec412c5749c3343399dc"],["/static/media/SFJ-3335-detail-2.689f761d.jpg","689f761d0dd73ff9cd09cc6e21426725"],["/static/media/SFJ-3335-min.ebee9beb.jpg","ebee9bebca1202ee2dd70fa4d7170a5f"],["/static/media/SFJ-3335.8ed1ce1a.jpg","8ed1ce1aa86ba9c0c373f37925a69b72"],["/static/media/SFJ-3385-min.98476120.jpg","98476120d1da136b709ee0cfb79ff1df"],["/static/media/SFJ-3385.4f8d2879.jpg","4f8d28798befd53ce368908a762e5ccb"],["/static/media/SFJ-3391-min.8d230903.jpg","8d230903ae9db2bd3fda00eb9c263d39"],["/static/media/SFJ-3391.bf8a16f0.jpg","bf8a16f05019f4d12535702a08d919f8"],["/static/media/SFJ-4187-min.e7a75aeb.jpg","e7a75aebfc73da6177d0b9fb1961c1d3"],["/static/media/SFJ-4187.468b6ea2.jpg","468b6ea2830506cef79d78ba67db5ecf"],["/static/media/SFJ-4200-detail-0.3675ddca.jpg","3675ddcad1c63e0383c57f0c15bd1e1a"],["/static/media/SFJ-4200-detail-1.4cbaceb9.jpg","4cbaceb90292eb46f915b339fe292b23"],["/static/media/SFJ-4200-detail-2.ba9820eb.jpg","ba9820ebe41e5fcb813ed870001cb052"],["/static/media/SFJ-4200-min.f60b26f3.jpg","f60b26f3e9bcbd1e1394e8c5b61d0294"],["/static/media/SFJ-4200.87899d6d.jpg","87899d6dcedd612026d7c51794fc7cd9"],["/static/media/SFJ-62779-min.a8e2d510.jpg","a8e2d510a9632379baee5d1894c4390e"],["/static/media/SFJ-62779.53f3f8a3.jpg","53f3f8a33ac52ce6e6aa2a52b2b45551"],["/static/media/SFJ-C4369-min.f8585dcd.jpg","f8585dcd2430bad0c04ce8894393da19"],["/static/media/SFJ-C4369.34d29786.jpg","34d29786120413337a9754306ddb1c45"],["/static/media/SFJ-HD021-min.4bac1fa2.jpg","4bac1fa2e7161219b71b74eac53c172e"],["/static/media/SFJ-HD021.fa269311.jpg","fa2693113b28328d98a7d620b08b7431"],["/static/media/SFJ-HD078xiuhua-min.e8655770.jpg","e86557701d2877fe96dbc652d5809e79"],["/static/media/SFJ-HD078xiuhua.dd45cb8c.jpg","dd45cb8c42207fd2cd849d4c64b660c4"],["/static/media/SFJ-HD078yuandian-min.820e787e.jpg","820e787ea328b98d4e92189d09b6a5d8"],["/static/media/SFJ-HD078yuandian.2e4bde55.jpg","2e4bde555f9a0a0ee425c6d16e076d61"],["/static/media/YD-3275-min.dad317d8.jpg","dad317d85d5f503da2dfa4247c215898"],["/static/media/YD-3275.f74bf679.jpg","f74bf6796422a96075121ecfa0d930f1"],["/static/media/YD-4200-min.3011f542.jpg","3011f542fb67691db34916cd9113a8ab"],["/static/media/YD-4200.03d7e498.jpg","03d7e498c34100f1686bf2d8e238fd67"],["/static/media/YD-62779-min.b67d0c8c.jpg","b67d0c8cdcbe247fcde70146bb83959e"],["/static/media/YD-62779.37ba345b.jpg","37ba345b2ba72c5b798025762e9271ca"],["/static/media/YD-HD118-min.16cd4573.jpg","16cd4573ab2f1c064b1feda4e5517c36"],["/static/media/YD-HD118.f43fc954.jpg","f43fc954af29c828eaade707da8f70c2"],["/static/media/ZB-52838-min.1d4191b2.jpg","1d4191b24257935d813c0db40d62ca16"],["/static/media/ZB-52838.18eb1355.jpg","18eb1355986e495d17d227d5904b1714"],["/static/media/ZB-C2868-min.20027502.jpg","20027502f5199bf181b0886ab3de1fab"],["/static/media/ZB-C2868.c3650135.jpg","c365013597cc511975e82341bcd45064"],["/static/media/ZB-C3465-min.969b51f7.jpg","969b51f7dc668aafd9f44ba4e1276914"],["/static/media/ZB-C3465.7288216c.jpg","7288216ca7746138ed42b95db0ab821d"],["/static/media/ZB-CM601-min.668cab44.jpg","668cab449667d58a8f000e7ce729db93"],["/static/media/ZB-CM601.5532ddab.jpg","5532ddab392ee93a546e888262d74bfa"],["/static/media/ZB-HD021-min.cb77619a.jpg","cb77619a52109d4737f09b203ece55be"],["/static/media/ZB-HD021.d5b38964.jpg","d5b38964e35f6eabded358a4ad9355a1"],["/static/media/ZB-HD078xiuhua-min.f3d19d50.jpg","f3d19d50e468206da0171e11c6a058c7"],["/static/media/ZB-HD078xiuhua.82ee0c6f.jpg","82ee0c6f6da926fe8cb5a92a6f89eac3"],["/static/media/ZB-HD118-min.ce67cca6.jpg","ce67cca6834e972210ddfc79aa658d32"],["/static/media/ZB-HD118.21883da6.jpg","21883da613172a3c69cc5cae8aa00e60"],["/static/media/ZB-L2024-min.3cf59359.jpg","3cf59359c53b56229e2c6d6e526a0ed0"],["/static/media/ZB-L2024.fc9c3b1a.jpg","fc9c3b1ad981d750ee81892d8fa82919"],["/static/media/ZQ-7801-min.e7c226cf.jpg","e7c226cfec4cafadadf014590757b9bb"],["/static/media/ZQ-7801.8b91a0e9.jpg","8b91a0e9872544ba14330660cac45f47"],["/static/media/ZQ-HD021-min.5f9c6157.jpg","5f9c615706e3312817fe1f96a610e578"],["/static/media/ZQ-HD021.55791f65.jpg","55791f65d5c060da9ebb504d8fef50e5"],["/static/media/ZQ-L2024-min.926dcddd.jpg","926dcddd2629c0aaeb569eeff0b2cf35"],["/static/media/ZQ-L2024.faed6759.jpg","faed67592c062b2335c1bfb5065164e7"],["/static/media/ZQ-L2027-min.fde1501d.jpg","fde1501dcb5cf5f7a04f1219755bb7e6"],["/static/media/ZQ-L2027.d548a9c7.jpg","d548a9c7c69345bc088e055057934534"],["/static/media/banner-0.0eab2d06.jpg","0eab2d0646c914ed521abe743ede44c1"],["/static/media/banner-1.3e956b14.jpg","3e956b148ef0f6282a2953b960250126"],["/static/media/banner-2.3710c03c.jpg","3710c03cbef1039abc6acc873130891d"],["/static/media/banner-3.a122c29f.jpg","a122c29f109bd2ba609c159175d1e922"],["/static/media/logo-ico.8a0e7ccb.jpg","8a0e7ccba501e0fd670562f9aac3b607"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var c=new URL(a);return"/"===c.pathname.slice(-1)&&(c.pathname+=e),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(a,e,c,d){var t=new URL(a);return d&&t.pathname.match(d)||(t.search+=(t.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var c=new URL(e).pathname;return a.some(function(a){return c.match(a)})},stripIgnoredUrlParameters=function(a,e){var c=new URL(a);return c.hash="",c.search=c.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return e.every(function(e){return!e.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],c=a[1],d=new URL(e,self.location),t=createCacheKey(d,hashParamName,c,/\.\w{8}\./);return[d.toString(),t]}));self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(e){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!e.has(c)){var d=new Request(c,{credentials:"same-origin"});return fetch(d).then(function(e){if(!e.ok)throw new Error("Request for "+c+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(c,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var e=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(c){return Promise.all(c.map(function(c){if(!e.has(c.url))return a.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching);(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),e=urlsToCacheKeys.has(c));!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL("/index.html",self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(c)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});