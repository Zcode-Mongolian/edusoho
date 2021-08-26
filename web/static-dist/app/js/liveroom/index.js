/*! For license information please see index.js.LICENSE.txt */
!function(i){function e(e){for(var t,o,a=e[0],l=e[1],u=e[2],c=0,h=[];c<a.length;c++)o=a[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(i[t]=l[t]);for(d&&d(e);h.length;)h.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var i,e=0;e<r.length;e++){for(var s=r[e],t=!0,a=1;a<s.length;a++){var l=s[a];0!==n[l]&&(t=!1)}t&&(r.splice(e--,1),i=o(o.s=s[0]))}return i}var t={},n={251:0},r=[];function o(e){if(t[e])return t[e].exports;var s=t[e]={i:e,l:!1,exports:{}};return i[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=i,o.c=t,o.d=function(i,e,s){o.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:s})},o.r=function(i){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},o.t=function(i,e){if(1&e&&(i=o(i)),8&e)return i;if(4&e&&"object"==typeof i&&i&&i.__esModule)return i;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var t in i)o.d(s,t,function(e){return i[e]}.bind(null,t));return s},o.n=function(i){var e=i&&i.__esModule?function(){return i.default}:function(){return i};return o.d(e,"a",e),e},o.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},o.p="/static-dist/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var d=l;r.push([889,0]),s()}({325:function(i,e,s){var t;!function(n,r){"use strict";var o="function",a="undefined",l="object",u="model",d="name",c="type",h="vendor",w="version",v="architecture",m="console",f="mobile",p="tablet",b="smarttv",g="wearable",k={extend:function(i,e){var s={};for(var t in i)e[t]&&e[t].length%2==0?s[t]=e[t].concat(i[t]):s[t]=i[t];return s},has:function(i,e){return"string"==typeof i&&-1!==e.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"==typeof i?i.replace(/[^\d\.]/g,"").split(".")[0]:r},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},y={rgx:function(i,e){for(var s,t,n,a,u,d,c=0;c<e.length&&!u;){var h=e[c],w=e[c+1];for(s=t=0;s<h.length&&!u;)if(u=h[s++].exec(i))for(n=0;n<w.length;n++)d=u[++t],typeof(a=w[n])===l&&a.length>0?2==a.length?typeof a[1]==o?this[a[0]]=a[1].call(this,d):this[a[0]]=a[1]:3==a.length?typeof a[1]!==o||a[1].exec&&a[1].test?this[a[0]]=d?d.replace(a[1],a[2]):r:this[a[0]]=d?a[1].call(this,d,a[2]):r:4==a.length&&(this[a[0]]=d?a[3].call(this,d.replace(a[1],a[2])):r):this[a]=d||r;c+=2}},str:function(i,e){for(var s in e)if(typeof e[s]===l&&e[s].length>0){for(var t=0;t<e[s].length;t++)if(k.has(e[s][t],i))return"?"===s?r:s}else if(k.has(e[s],i))return"?"===s?r:s;return i}},T={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},_={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[d,w],[/(opios)[\/\s]+([\w\.]+)/i],[[d,"Opera Mini"],w],[/\s(opr)\/([\w\.]+)/i],[[d,"Opera"],w],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[d,w],[/(konqueror)\/([\w\.]+)/i],[[d,"Konqueror"],w],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[d,"IE"],w],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[d,"Edge"],w],[/(yabrowser)\/([\w\.]+)/i],[[d,"Yandex"],w],[/(Avast)\/([\w\.]+)/i],[[d,"Avast Secure Browser"],w],[/(AVG)\/([\w\.]+)/i],[[d,"AVG Secure Browser"],w],[/(puffin)\/([\w\.]+)/i],[[d,"Puffin"],w],[/(focus)\/([\w\.]+)/i],[[d,"Firefox Focus"],w],[/(opt)\/([\w\.]+)/i],[[d,"Opera Touch"],w],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[d,"UCBrowser"],w],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],w],[/(windowswechat qbcore)\/([\w\.]+)/i],[[d,"WeChat(Win) Desktop"],w],[/(micromessenger)\/([\w\.]+)/i],[[d,"WeChat"],w],[/(brave)\/([\w\.]+)/i],[[d,"Brave"],w],[/(qqbrowserlite)\/([\w\.]+)/i],[d,w],[/(QQ)\/([\d\.]+)/i],[d,w],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[d,w],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[d,w],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[d,w],[/(MetaSr)[\/\s]?([\w\.]+)/i],[d],[/(LBBROWSER)/i],[d],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[w,[d,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[w,[d,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[d,w],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[w,[d,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[d,/(.+)/,"$1 WebView"],w],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[d,/(.+(?:g|us))(.+)/,"$1 $2"],w],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[w,[d,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[d,"Sailfish Browser"],w],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[d,w],[/(dolfin)\/([\w\.]+)/i],[[d,"Dolphin"],w],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[d,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[d,"Chrome"],w],[/(coast)\/([\w\.]+)/i],[[d,"Opera Coast"],w],[/fxios\/([\w\.-]+)/i],[w,[d,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[w,[d,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[w,d],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[d,"GSA"],w],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[d,[w,y.str,T.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[d,w],[/(navigator|netscape)\/([\w\.-]+)/i],[[d,"Netscape"],w],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[d,w]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[v,"amd64"]],[/(ia32(?=;))/i],[[v,k.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[v,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[v,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[v,/ower/,"",k.lowerize]],[/(sun4\w)[;\)]/i],[[v,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[v,k.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[u,h,[c,p]],[/applecoremedia\/[\w\.]+ \((ipad)/],[u,[h,"Apple"],[c,p]],[/(apple\s{0,1}tv)/i],[[u,"Apple TV"],[h,"Apple"],[c,b]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[h,u,[c,p]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[u,[h,"Amazon"],[c,p]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[u,y.str,T.device.amazon.model],[h,"Amazon"],[c,f]],[/android.+aft([bms])\sbuild/i],[u,[h,"Amazon"],[c,b]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[u,h,[c,f]],[/\((ip[honed|\s\w*]+);/i],[u,[h,"Apple"],[c,f]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[h,u,[c,f]],[/\(bb10;\s(\w+)/i],[u,[h,"BlackBerry"],[c,f]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[u,[h,"Asus"],[c,p]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[h,"Sony"],[u,"Xperia Tablet"],[c,p]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[h,"Sony"],[c,f]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[h,u,[c,m]],[/android.+;\s(shield)\sbuild/i],[u,[h,"Nvidia"],[c,m]],[/(playstation\s[34portablevi]+)/i],[u,[h,"Sony"],[c,m]],[/(sprint\s(\w+))/i],[[h,y.str,T.device.sprint.vendor],[u,y.str,T.device.sprint.model],[c,f]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[h,[u,/_/g," "],[c,f]],[/(nexus\s9)/i],[u,[h,"HTC"],[c,p]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[u,[h,"Huawei"],[c,f]],[/android.+(bah2?-a?[lw]\d{2})/i],[u,[h,"Huawei"],[c,p]],[/(microsoft);\s(lumia[\s\w]+)/i],[h,u,[c,f]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[u,[h,"Microsoft"],[c,m]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[h,"Microsoft"],[c,f]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[u,[h,"Motorola"],[c,f]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[u,[h,"Motorola"],[c,p]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[h,k.trim],[u,k.trim],[c,b]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[h,"Samsung"],[c,b]],[/\(dtv[\);].+(aquos)/i],[u,[h,"Sharp"],[c,b]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[h,"Samsung"],u,[c,p]],[/smart-tv.+(samsung)/i],[h,[c,b],u],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[h,"Samsung"],u,[c,f]],[/sie-(\w*)/i],[u,[h,"Siemens"],[c,f]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[h,"Nokia"],u,[c,f]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[u,[h,"Acer"],[c,p]],[/android.+([vl]k\-?\d{3})\s+build/i],[u,[h,"LG"],[c,p]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[h,"LG"],u,[c,p]],[/(lg) netcast\.tv/i],[h,u,[c,b]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[u,[h,"LG"],[c,f]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[h,u,[c,p]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[u,[h,"Lenovo"],[c,p]],[/(lenovo)[_\s-]?([\w-]+)/i],[h,u,[c,f]],[/linux;.+((jolla));/i],[h,u,[c,f]],[/((pebble))app\/[\d\.]+\s/i],[h,u,[c,g]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[h,u,[c,f]],[/crkey/i],[[u,"Chromecast"],[h,"Google"],[c,b]],[/android.+;\s(glass)\s\d/i],[u,[h,"Google"],[c,g]],[/android.+;\s(pixel c)[\s)]/i],[u,[h,"Google"],[c,p]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[u,[h,"Google"],[c,f]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[u,/_/g," "],[h,"Xiaomi"],[c,f]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[u,/_/g," "],[h,"Xiaomi"],[c,p]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[u,[h,"Meizu"],[c,f]],[/(mz)-([\w-]{2,})/i],[[h,"Meizu"],u,[c,f]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[u,[h,"OnePlus"],[c,f]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[u,[h,"RCA"],[c,p]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[u,[h,"Dell"],[c,p]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[u,[h,"Verizon"],[c,p]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[h,"Barnes & Noble"],u,[c,p]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[u,[h,"NuVision"],[c,p]],[/android.+;\s(k88)\sbuild/i],[u,[h,"ZTE"],[c,p]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[u,[h,"Swiss"],[c,f]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[u,[h,"Swiss"],[c,p]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[u,[h,"Zeki"],[c,p]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[h,"Dragon Touch"],u,[c,p]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[u,[h,"Insignia"],[c,p]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[u,[h,"NextBook"],[c,p]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[h,"Voice"],u,[c,f]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[h,"LvTel"],u,[c,f]],[/android.+;\s(PH-1)\s/i],[u,[h,"Essential"],[c,f]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[u,[h,"Envizen"],[c,p]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[h,u,[c,p]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[u,[h,"MachSpeed"],[c,p]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[h,u,[c,p]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[u,[h,"Rotor"],[c,p]],[/android.+(KS(.+))\s+build/i],[u,[h,"Amazon"],[c,p]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[h,u,[c,p]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[c,k.lowerize],h,u],[/[\s\/\(](smart-?tv)[;\)]/i],[[c,b]],[/(android[\w\.\s\-]{0,9});.+build/i],[u,[h,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[w,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[w,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[d,w],[/rv\:([\w\.]{1,9}).+(gecko)/i],[w,d]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[d,w],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[d,[w,y.str,T.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[d,"Windows"],[w,y.str,T.os.windows.version]],[/\((bb)(10);/i],[[d,"BlackBerry"],w],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[d,w],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[d,"Symbian"],w],[/\((series40);/i],[d],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[d,"Firefox OS"],w],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[d,w],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[d,"Chromium OS"],w],[/(sunos)\s?([\w\.\d]*)/i],[[d,"Solaris"],w],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[d,w],[/(haiku)\s(\w+)/i],[d,w],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[w,/_/g,"."],[d,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[d,"Mac OS"],[w,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[d,w]]},E=function(i,e){if("object"==typeof i&&(e=i,i=r),!(this instanceof E))return new E(i,e).getResult();var s=i||(n&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:""),t=e?k.extend(_,e):_;return this.getBrowser=function(){var i={name:r,version:r};return y.rgx.call(i,s,t.browser),i.major=k.major(i.version),i},this.getCPU=function(){var i={architecture:r};return y.rgx.call(i,s,t.cpu),i},this.getDevice=function(){var i={vendor:r,model:r,type:r};return y.rgx.call(i,s,t.device),i},this.getEngine=function(){var i={name:r,version:r};return y.rgx.call(i,s,t.engine),i},this.getOS=function(){var i={name:r,version:r};return y.rgx.call(i,s,t.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(i){return s=i,this},this};E.VERSION="0.7.21",E.BROWSER={NAME:d,MAJOR:"major",VERSION:w},E.CPU={ARCHITECTURE:v},E.DEVICE={MODEL:u,VENDOR:h,TYPE:c,CONSOLE:m,MOBILE:f,SMARTTV:b,TABLET:p,WEARABLE:g,EMBEDDED:"embedded"},E.ENGINE={NAME:d,VERSION:w},E.OS={NAME:d,VERSION:w},typeof e!==a?(typeof i!==a&&i.exports&&(e=i.exports=E),e.UAParser=E):(t=function(){return E}.call(e,s,e,i))===r||(i.exports=t);var S=n&&(n.jQuery||n.Zepto);if(S&&!S.ua){var x=new E;S.ua=x.getResult(),S.ua.get=function(){return x.getUA()},S.ua.set=function(i){x.setUA(i);var e=x.getResult();for(var s in e)S.ua[s]=e[s]}}}("object"==typeof window?window:this)},327:function(i,e,s){"use strict";s.d(e,"a",(function(){return w}));var t=s(2),n=s.n(t),r=s(3),o=s.n(r),a=s(41),l=s.n(a),u=(s(350),s(351),function(){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;n()(this,i),this.$element=null===e?$(".all-wrapper"):e,this.mask='\n            <div class="out-focus-mask">\n                <div class="content">\n                    <div class="tips"></div>\n                    <div class="continue-studying">\n                        <button class="btn btn-primary js-continue-studying">'.concat(Translator.trans("course.task.out_focus_mask.continue_studying"),"</button>\n                    </div>\n                </div>\n            </div>"),this.mask1='\n            <div class="out-focus-mask">\n                <div class="content">\n                    <div class="tips"></div>\n                </div>\n            </div>',this.initEvent()}return o()(i,[{key:"initEvent",value:function(){this._registerChannel()}},{key:"validateMask",value:function(){return this.$element.find(".out-focus-mask").length>0}},{key:"initLearStopTips",value:function(){this.validateMask()||(this.$element.append(this.mask),this.$element.find(".out-focus-mask .content .tips").html(Translator.trans("course.task.out_focus_mask.stop.tips")),this.popAfter())}},{key:"initAntiBrushTips",value:function(){this.validateMask()&&this.destroyMask(),this.$element.append(this.mask),this.$element.find(".out-focus-mask .content .tips").html(Translator.trans("course.task.out_focus_mask.anti_brush.tips")),this.popAfter()}},{key:"initBanTips",value:function(){this.validateMask()&&this.destroyMask(),this.$element.append(this.mask1),this.$element.find(".out-focus-mask .content .tips").html(Translator.trans("course.task.out_focus_mask.anti_brush.tips")),this.popAfter()}},{key:"continueStudying",value:function(){this.destroyMask(),this._publishResponse("play")}},{key:"destroyMask",value:function(){this.$element.find(".out-focus-mask").remove()}},{key:"popAfter",value:function(){this._publishResponse("pause")}},{key:"_registerChannel",value:function(){return l.a.instanceId("task"),l.a.fedx.addFilter([{channel:"task-events",topic:"monitoringEvent",direction:"out"}]),this}},{key:"_publishResponse",value:function(i){l.a.publish({channel:"task-events",topic:"monitoringEvent",data:i})}}]),i}()),d=s(20),c=s(77),h=s.n(c),w=function(){function i(e){n()(this,i),this.maskElement=e.maskElement||null,this.OutFocusMask=new u(this.maskElement),this.activityTimer=null,this.ACTIVITY_TIME=1200,this.eventMaskElement=null,this.eventMaskTimer=null,this.EVENT_MASK_TIME=30,this.videoPlayRule=e.videoPlayRule,this.taskType=e.taskType,this.taskPipe=e.taskPipe,this.lastFullScreenState=h.a.isFullscreen,this.fullScreenTimer=null,this.initEvent()}return o()(i,[{key:"initEvent",value:function(){var i=this;$("body").off("click",".js-continue-studying"),$("body").on("click",".js-continue-studying",(function(){i.OutFocusMask.continueStudying(),i.taskPipe._flush({reActive:1}),i.taskPipe.absorbedChange(0)})),Object(d.f)()||"auto_pause"===this.videoPlayRule&&"video"===this.taskType&&(d.a.safari&&this.safariResetFullScreenState(),this.initMaskElement(),this.initVisibilitychange(),this.initActivity())}},{key:"initMaskElement",value:function(){$("body").append('\n      <div class="monitor-event-mask" style="position: fixed; left: 0; right: 0; top: 0; bottom: 0; opacity: 0; display: none;"></div>\n    '),this.eventMaskElement=$(".monitor-event-mask"),this.maskElementShow()}},{key:"ineffectiveEvent",value:function(){this.OutFocusMask.initLearStopTips(),this.taskPipe.absorbedChange(1),this.taskPipe._flush()}},{key:"triggerEvent",value:function(i){this.taskPipe.absorbedChange(1),"reject_current"!==i?"kick_previous"!==i||this.OutFocusMask.initAntiBrushTips():this.OutFocusMask.initBanTips()}},{key:"initVisibilitychange",value:function(){var i=this;document.addEventListener("visibilitychange",(function(){if("hidden"===document.visibilityState){if(d.a.safari&&!i.lastFullScreenState&&h.a.isFullscreen)return void(i.lastFullScreenState=h.a.isFullscreen);i.ineffectiveEvent()}}))}},{key:"safariResetFullScreenState",value:function(){var i=this;window.addEventListener("resize",(function(){!i.fullScreenTimer&&i.lastFullScreenState&&(i.fullScreenTimer=setTimeout((function(){i.lastFullScreenState=h.a.isFullscreen,clearTimeout(i.fullScreenTimer),i.fullScreenTimer=null}),66))}))}},{key:"initActivity",value:function(){this.afterActivity(),document.onmousedown=this.afterActivity.bind(this),document.onscroll=this.afterActivity.bind(this),document.onkeypress=this.afterActivity.bind(this),document.onmousemove=this.afterActivity.bind(this)}},{key:"afterActivity",value:function(){var i=this;this.maskElementHide(),clearTimeout(this.activityTimer),this.activityTimer=null,this.activityTimer=setTimeout((function(){i.ineffectiveEvent()}),1e3*this.ACTIVITY_TIME)}},{key:"maskElementShow",value:function(){var i=this;clearTimeout(this.eventMaskTimer),this.eventMaskTimer=null,this.eventMaskTimer=setTimeout((function(){i.eventMaskElement.show()}),1e3*this.EVENT_MASK_TIME)}},{key:"maskElementHide",value:function(){this.eventMaskElement.hide(),this.maskElementShow()}}]),i}()},84:function(i,e,s){"use strict";var t=s(17),n=s.n(t),r=s(2),o=s.n(r),a=s(3),l=s.n(a),u=(s(107),function(){function i(){o()(this,i)}return l()(i,null,[{key:"set",value:function(i,e,s){var t=store.get("durations",{});t&&t instanceof Array||(t=new Array);var n=i+"-"+e+":"+s;t.length>0&&t.slice(t.length-1,t.length)[0].indexOf(i+"-"+e)>-1&&t.splice(t.length-1,t.length),t.length>=20&&t.shift(),t.push(n),store.set("durations",t)}},{key:"get",value:function(i,e){var s=store.get("durations",{});if(s)for(var t=0;t<s.length;t++){if(s[t].indexOf(i+"-"+e)>-1){var r=s[t];return n()(r.split(":")[1])}}return 0}},{key:"del",value:function(i,e){var s=store.get("durations");if(s){for(var t=0;t<s.length;t++){s[t].indexOf(i+"-"+e)>-1&&s.splice(t,1)}store.set("durations",s)}}}]),i}());e.a=u},889:function(i,e,s){"use strict";s.r(e);var t=s(16),n=s.n(t),r=s(2),o=s.n(r),a=s(3),l=s.n(a),u=s(325),d=s.n(u),c=s(42),h=s(84),w=s(327),v=s(20);new(function(){function i(){o()(this,i),this.taskId=$("#entry").data("taskId"),this.courseId=$("#entry").data("courseId"),this.taskPipeCounter=0,this.pushing=!1,this.sign="",this.absorbed=0,this.TASK_PIPE_INTERNAL=60,this.intervalId=null,this.lastTimestamp=0,this.init()}return l()(i,[{key:"init",value:function(){var i=this;this.isLiveRoomOpened=!1;var e=$("#entry").data("role"),s=0,t=1,n=$("#entry").data("directUrl");n?this.entryRoom(n):s=setInterval((function(){if(t>10)return clearInterval(s),void $("#entry").html(Translator.trans("course_set.live_room.entry_error_hint"));$.ajax({url:$("#entry").data("url"),success:function(e){if(e.error)return clearInterval(s),void $("#entry").html(Translator.trans("course_set.live_room.entry_error_with_message",{message:e.error}));e.roomUrl&&(i.entryRoom(e.roomUrl),clearInterval(s)),t++},error:function(){$("#entry").html(Translator.trans("course_set.live_room.entry_error_hint"))}})}),3e3),"student"===e&&0!=this.taskId&&this.triggerLiveEvent()}},{key:"entryRoom",value:function(i){var e=$("#entry").data("provider"),s=$("#entry").data("role"),t=new d.a(navigator.userAgent),n=t.getBrowser(),r=t.getOS();"http:"===document.location.protocol&&"student"===s&&(8===e||9===e)&&"Android"!==r.name&&"Chrome"===n.name&&n.major>=60&&(window.location.href=i),this.isLiveRoomOpened=!0;var o='<iframe name="classroom" src="'+i+'" style="position:absolute; left:0; top:0; height:100%; width:100%; border:0px;" scrolling="no" allowfullscreen="true" allow="microphone; camera; screen-wake-lock"></iframe>';$("body").html(o)}},{key:"triggerLiveEvent",value:function(){var i=Date.parse(new Date).toString();i=i.substr(0,10),this._initInterval(),v.a.safari&&!Object(v.f)()&&this.safariVisibilitychange()}},{key:"_clearInterval",value:function(){clearInterval(this.intervalId)}},{key:"_initInterval",value:function(){var i=this;this._flush(),window.onbeforeunload=function(){i._clearInterval(),i._flush(),i.sign.length>0&&localStorage.setItem("flowSign",i.sign)},this._clearInterval(),this.intervalId=setInterval((function(){return i._addPipeCounter()}),1e3)}},{key:"_flush",value:function(){var i=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.pushing)if(""===this.sign){var s={},t=localStorage.getItem("flowSign");t&&(this.lastSign=t,s.lastSign=t,localStorage.removeItem("flowSign")),c.a.courseTaskEvent.pushEvent({params:{courseId:this.courseId,taskId:this.taskId,eventName:"start"},data:n()({client:"pc"},s)}).then((function(s){if(i.MonitoringEvents=new w.a({videoPlayRule:i.videoPlayRule,taskType:"live",taskPipe:i,maskElement:$("body")}),s.learnControl.allowLearn||"kick_previous"!==s.learnControl.denyReason){if(!s.learnControl.allowLearn&&"reject_current"===s.learnControl.denyReason)return i.MonitoringEvents.triggerEvent("reject_current"),i._clearInterval(),void $("[name=classroom]").attr("src","");i.sign=s.record.flowSign,i.record=s.record,i._doing(e)}else i.MonitoringEvents.triggerEvent("kick_previous")}))}else this._doing(e)}},{key:"_doing",value:function(){var i=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(0!==this.sign.length){var s={client:"pc",sign:this.sign,duration:this.taskPipeCounter,status:this.absorbed,lastLearnTime:h.a.get(this.userId,this.fileId)};if(e.watchTime){var t={watchData:{duration:e.watchTime}};s=n()(s,t)}e.reActive&&(s.reActive=e.reActive),this.pushing=!0,c.a.courseTaskEvent.pushEvent({params:{courseId:this.courseId,taskId:this.taskId,eventName:"doing"},data:s}).then((function(e){i.pushing=!1,i.record=e.record,i.taskPipeCounter=0,i.lastTimestamp=(new Date).getTime(),e.learnControl.allowLearn||"kick_previous"!==e.learnControl.denyReason?e.learnControl.allowLearn||"reject_current"!==e.learnControl.denyReason||i.MonitoringEvents.triggerEvent("reject_current"):i.MonitoringEvents.triggerEvent("kick_previous")})).catch((function(e){i.pushing=!1,i._clearInterval(),cd.message({type:"danger",message:Translator.trans("task_show.user_login_protect_tip")})}))}}},{key:"absorbedChange",value:function(i){this.absorbed=i}},{key:"_addPipeCounter",value:function(){this.taskPipeCounter++,this.taskPipeCounter>=this.TASK_PIPE_INTERNAL&&this._flush()}},{key:"safariVisibilitychange",value:function(){var i=this;document.addEventListener("visibilitychange",(function(){var e=document.visibilityState;"hidden"===e?i._clearInterval():"visible"===e&&(i.taskPipeCounter=Math.round(((new Date).getTime()-i.lastTimestamp)/1e3),i.intervalId=setInterval((function(){return i._addPipeCounter()}),1e3))}))}}]),i}())}});