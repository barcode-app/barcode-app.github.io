(()=>{"use strict";var e={8213:(e,t,r)=>{var o=r(1957),a=r(1947),n=r(499),s=r(9835);function i(e,t){const r=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(r)}var c=r(1639);const d={},l=(0,c.Z)(d,[["render",i]]),u=l;var g=r(3340),p=r(1809);const b=(0,g.h)((()=>{const e=(0,p.WB)();return e}));var m=r(8339);const f=[{path:"/",component:()=>Promise.all([r.e(736),r.e(301)]).then(r.bind(r,5301)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(442)]).then(r.bind(r,442))},{path:"barcodev2",component:()=>Promise.all([r.e(736),r.e(119)]).then(r.bind(r,119))},{path:"appsettings",component:()=>Promise.all([r.e(736),r.e(174)]).then(r.bind(r,3174))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(590)]).then(r.bind(r,2590))}],h=f,v=(0,g.BC)((function(){const e=m.r5,t=(0,m.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("")});return t}));async function y(e,t){const r=e(u);r.use(a.Z,t);const o="function"===typeof b?await b({}):b;r.use(o);const s=(0,n.Xl)("function"===typeof v?await v({store:o}):v);return o.use((({store:e})=>{e.router=s})),{app:r,store:o,router:s}}var w=r(3703),C=r(5657),S=r(4328);const k={config:{},plugins:{LocalStorage:w.Z,Dialog:C.Z,Notify:S.Z}},N="";async function P({app:e,router:t,store:r},o){let a=!1;const n=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},s=e=>{if(a=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=n(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let d=0;!1===a&&d<o.length;d++)try{await o[d]({app:e,router:t,store:r,ssrContext:null,redirect:s,urlPath:i,publicPath:N})}catch(c){return c&&c.url?void s(c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&(e.use(t),e.mount("#q-app"))}y(o.ri,k).then((e=>{const[t,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,1094))]).then((t=>{const r=o(t).filter((e=>"function"===typeof e));P(e,r)}))}))},1094:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var o=r(3340),a=r(6647);const n={appTitle:"BarCode Manager","menu-caption":"Menu","home-button-caption":"Change Image","menu-home":"Home Page","menu-home-subTitle":"BarCode Manager","menu-settings":"Settings","menu-settings-subTitle":"System Settings","menu-barcode":"BarCode","menu-barcode-subTitle":"BarCode Manager",barcode:"BarCodes",confirm:"Confirm","barcode-on-before-route-leave-warning":"You have unsaved changes. Are you sure you want to leave this page?","barcode-yes":"Yes","barcode-cancel":"Cancel","barcode-no-changes-warning":"Update not require, no changes detected!","barcode-validation-error":"Validation Error",deleleConfirm:"Are you sure you want to delete record?",deleteNotify:"Record deleted",updateNotify:"Record updated",saveNotify:"Record saved","barcode-no-record":"No Record","barcode-error-field-empty":"Field cannot be empty","barcode-error-caption":"Item cannot be empty","barcode-error-barcode":"BarCode cannot be empty","barcode-tags-caption":"Tags","barcode-new-tag-caption":"Enter tag here and press enter...","barcode-notes-caption":"Notes",itemCaption:"Item",barCodeCaption:"BarCode",edit:"Edit",addNew:"Add New",hide:"Hide",show:"Show",language:"Language","settings-yes":"Yes","settings-cancel":"Cancel","settings-system_admin":"Simulate System Admin","settings-global-debug-flag":"Global Debug Flag","settings-barcode-debug-flag":"BarCode Page Debug Flag","settings-settings-debug-flag":"Settings Page Debug Flag","settings-barcode-section-title":"BarCode Page Settings","settings-barcode-pageTitle":"Page Title","settings-barcode-item-caption":"Item Caption","settings-barcode-barcode-caption":"BarCode Caption","settings-backup":"Backup","settings-backup-success-message":"Backup Successful!!!","settings-backup-failed-message":"Backup failed...","settings-restore-data":"Restore Data?","settings-restore":"Restore","settings-restore-message":"Paste JSON Data here to restore...","settings-restore-confirm-message":"Are you sure that you want to perform the restore operation? it will overwritte the current data...","settings-restore-success-message":"Restore successful!!!","settings-restore-failed-no-data":"No data provided, resotore failed...","settings-restore-failed-message":"Invalid data, resotore failed...","settings-reset-data":"Reset Data?","settings-reset":"Reset","settings-reset-confirm-message":"Are you sure that you want to perform the reset operation? it will overwritte the current data...","settings-reset-success-message":"Reset successful!!!"},s={appTitle:"条码 管理员","menu-caption":"菜单","home-button-caption":"更改图像","menu-home":"主页","menu-home-subTitle":"条码 管理员","menu-settings":"配置","menu-settings-subTitle":"系统配置","menu-barcode":"条码库","menu-barcode-subTitle":"条码",barcode:"条码 库",confirm:"确认","barcode-on-before-route-leave-warning":"您有未保存的更改。您确定要离开此页面吗？","barcode-yes":"是的","barcode-cancel":"取消","barcode-no-changes-warning":"不需要更新，未检测到任何更改！","barcode-validation-error":"验证错误",deleleConfirm:"您确定要删除记录吗",deleteNotify:"记录已删除",updateNotify:"记录已更新",saveNotify:"记录已保存","barcode-no-record":"无记录","barcode-error-field-empty":"必须填写","barcode-error-caption":"项目 不能留空","barcode-error-barcode":"条码 不能留空","barcode-tags-caption":"标签","barcode-new-tag-caption":"在此处输入标签并按 Enter 键...","barcode-notes-caption":"笔记",itemCaption:"项目",barCodeCaption:"条码",edit:"编辑",addNew:"添加新记录",hide:"隐藏",show:"展示",language:"语言","settings-yes":"是的","settings-cancel":"取消","settings-system_admin":"模拟系统管理员","settings-global-debug-flag":"全系统范围 调试标志","settings-barcode-debug-flag":"条码页面 调试标志","settings-settings-debug-flag":"设置页面 调试标志","settings-barcode-section-title":"条码 页面设置","settings-barcode-pageTitle":"页面 标题","settings-barcode-item-caption":"项目 标题","settings-barcode-barcode-caption":"条码 标题","settings-backup":"备份","settings-backup-success-message":"备份成功！！！","settings-backup-failed-message":"备份失败...","settings-restore-data":"恢复数据？","settings-restore":"恢复","settings-restore-message":"将 JSON 数据粘贴到此处以恢复...","settings-restore-confirm-message":"您确定要执行恢复操作吗？它将覆盖当前数据...","settings-restore-success-message":"恢复成功！！！","settings-restore-failed-no-data":"没有提供数据，恢复失败...","settings-restore-failed-message":"数据无效，恢复失败...","settings-reset-data":"重置数据？","settings-reset":"重置","settings-reset-confirm-message":"您确定要执行重置操作吗？它将覆盖当前数据...","settings-reset-success-message":"重置成功！！！"},i={"en-US":n,"zh-SG":s},c=(0,o.xr)((({app:e})=>{const t=(0,a.o)({locale:"en-US",legacy:!1,messages:i});e.use(t)}))}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}r.m=e,(()=>{var e=[];r.O=(t,o,a,n)=>{if(!o){var s=1/0;for(l=0;l<e.length;l++){for(var[o,a,n]=e[l],i=!0,c=0;c<o.length;c++)(!1&n||s>=n)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(i=!1,n<s&&(s=n));if(i){e.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[o,a,n]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{119:"999435bc",174:"73d839dc",301:"41329503",442:"be3fd4e1",590:"afefd191"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+".e6bdd1c1.css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="barcode-store:";r.l=(o,a,n,s)=>{if(e[o])e[o].push(a);else{var i,c;if(void 0!==n)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+n){i=u;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+n),i.src=o),e[o]=[a];var g=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(r))),t)return t(r)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=g.bind(null,i.onerror),i.onload=g.bind(null,i.onload),c&&document.head.appendChild(i)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,o,a)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var s=r=>{if(n.onerror=n.onload=null,"load"===r.type)o();else{var s=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=i,n.parentNode.removeChild(n),a(c)}};return n.onerror=n.onload=s,n.href=t,r?r.parentNode.insertBefore(n,r.nextSibling):document.head.appendChild(n),n},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var a=r[o],n=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===t))return a}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){a=s[o],n=a.getAttribute("data-href");if(n===e||n===t)return a}},o=o=>new Promise(((a,n)=>{var s=r.miniCssF(o),i=r.p+s;if(t(s,i))return a();e(o,i,null,a,n)})),a={143:0};r.f.miniCss=(e,t)=>{var r={119:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var n=new Promise(((r,o)=>a=e[t]=[r,o]));o.push(a[2]=n);var s=r.p+r.u(t),i=new Error,c=o=>{if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,a[1](i)}};r.l(s,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var a,n,[s,i,c]=o,d=0;if(s.some((t=>0!==e[t]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var l=c(r)}for(t&&t(o);d<s.length;d++)n=s[d],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(l)},o=globalThis["webpackChunkbarcode_store"]=globalThis["webpackChunkbarcode_store"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(8213)));o=r.O(o)})();