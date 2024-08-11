(()=>{"use strict";var e={3774:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var n=a(1573),s=a(3537);const r={failed:"Action failed",success:"Action was successful",language:"English",mainLayout_title:"Event Registration App",homePage_title:"Jing Si Aphorism",homePage_button:"Change Image",homePage_jingsiyu_button:"Refresh",homePage_caption_author:"Photographer",homePage_caption_jingsiYu:"Jing Si Aphorism",dialog_title_confirmation:"Confirmation",dialog_message_restore:"Are you sure that you want to perform the restore operation? it will overwritte the current data...",dialog_message_reset:"Are you sure that you want to perform the reset operation? it will overwritte the current data...",button_caption_cancel:"Cancel",button_caption_delete:"Delete",button_caption_yes:"Yes",menu_mainMenu:"Main Menu",menu_homePage:"Home Page",menu_barcode:"Barcode",menu_qrcode:"QR Code",menu_settings:"Settings",menu_title_mainMenu:"Main Menu",menu_caption_mainMenu:"1D/2D Manager",menu_title_share:"Share",menu_caption_share:"Share App",menu_title_barcode:"Barcode",menu_caption_barcode:"1D/2D Manager",menu_title_settings:"Settings",menu_caption_settings:"System Settings",scanner_button_show:"Show Scanner",scanner_button_hide:"Hide Scanner",barcode_title:"Barcode",qrcode_title:"QR Code",barcode_showBarcode:"Show Barcode",barcode_showQrcode:"Show QR Code",barcodeEdit_add:"Add New",barcodeEdit_update:"Edit",barcodeEdit_item:"Item",barcodeEdit_phone:"Phone",barcodeEdit_barcode:"Barcode",barcodeEdit_item_validate_message:"Field cannot be empty",barcodeEdit_barcode_validate_message:"Field cannot be empty",barcodeEdit_comfirmation_title:"Confirmation",barcodeEdit_delete_confirmation:"Are you sure you want to delete this record?",barcodeEdit_save_warning_message:"Save not required, there are no changes detected!",barcodeEdit_unsave_warning_message:"You have unsaved changes. Are you sure you want to leave this page?",barcodeEdit_notify_RecordUpdated:"Record Updated!",barcodeEdit_notify_RecordDeleted:"Record Deleted!",settings_title:"Settings",settings_toggle_label_systemAdmin:"Simulate System Admin",settings_toggle_label_restore:"Restore Data and Settings?",settings_toggle_label_reset:"Reset Data and Settings?",settings_button_label_backup:"Backup",settings_button_label_restore:"Restore",settings_button_label_reset:"Reset",settings_textarea_label_jsonData:"Paste JSON Data here to restore...",settings_barcode_debugFlag:"Barcode Page Debug Flag",settings_barcodeEdit_debugFlag:"Barcode Edit Page Debug Flag",settings_settings_debugFlag:"Settings Page Debug Flag",settings_share_debugFlag:"Share Page Debug Flag",settings_settings_language:"Language",settings_type_barcode:"Barcode",settings_type_qrcode:"QR Code",settings_darkMode:"Dark Mode",settings_notify_noDataError:"No data provided, resotore failed...",settings_notify_restoreSuccess:"Data and Settings restore successfully.",settings_notify_resetSuccess:"Data and Settings reset successfully.",sharePage_title:"App Sharing",share_install_message0:"**Installation Instructions:**",share_install_message1:"1. Scan the QR code provided below.",share_install_message2:"2. Open the scanned URL to launch the PWA app.",share_install_message3:'3. From the browser menu, select "Add to Home screen."',share_install_message4:'4. Tap the "Install" option.',share_install_message5:"5. Close the browser and find the app icon on your home screen.",share_link_appName:"Event Acces App",share_link_tzuchi:"Tzu Chi Foundation (Singapore)",share_link_seen:"Seniors Engagement & Enabling Node (SEEN)",share_link_vms:"Volunteer Management System",share_link_dms:"Donation Management System",share_link_jingSiRenWen:"Jing Si Humanities",share_link_jingSiShuXuan:"Jing Si Books & Cafe",share_link_jingSiShuXuan_sg:"Jing Si Books & Cafe Singapore",share_link_magazine:"Tzu Chi Monthly",share_link_daai:"Daai TV",share_link_jsHeartland:"JS Heatland",share_link_youtube:"Daai YouTube",share_link_daaitv:"Daai TV Website",share_show:"Show",share_hide:"Hide",share_qr:"QR"},o={failed:"Action failed",success:"Action was successful",language:"中文（新加坡）",mainLayout_title:"活动通",homePage_title:"靜思語",homePage_button:"更改 图像",homePage_jingsiyu_button:"更新",homePage_caption_author:"摄影",homePage_caption_jingsiYu:"靜思語",dialog_title_confirmation:"确认",dialog_message_restore:"您确定要执行恢复操作吗？它将覆盖当前数据...",dialog_message_reset:"您确定要执行重置操作吗？它将覆盖当前数据...",button_caption_cancel:"取消",button_caption_delete:"删除",button_caption_yes:"是的",menu_mainMenu:"主菜单",menu_homePage:"主页",menu_barcode:"条码库",menu_qrcode:"二维码库",menu_settings:"设置",menu_title_mainMenu:"主菜单",menu_caption_mainMenu:"一维/二维码管理",menu_title_share:"共享",menu_caption_share:"共享应用程序",menu_title_barcode:"条码",menu_caption_barcode:"一维/二维码管理",menu_title_settings:"设置",menu_caption_settings:"系统设置",scanner_button_show:"Show Scanner",scanner_button_hide:"Hide Scanner",barcode_title:"条码 库",qrcode_title:"二维码 库",barcode_showBarcode:"显示 条码",barcode_showQrcode:"显示 二维码",barcodeEdit_add:"添加新记录",barcodeEdit_update:"编辑",barcodeEdit_item:"项目",barcodeEdit_phone:"电话",barcodeEdit_barcode:"条码",barcodeEdit_item_validate_message:"请确保输入 项目",barcodeEdit_barcode_validate_message:"请确保输入 条码",barcodeEdit_comfirmation_title:"确认",barcodeEdit_delete_confirmation:"您确定要删除此记录吗？",barcodeEdit_save_warning_message:"不需要保存，没有检测到任何更改！",barcodeEdit_unsave_warning_message:"您有未保存的更改。 您确定要离开此页面吗？",barcodeEdit_notify_RecordUpdated:"记录已更新！",barcodeEdit_notify_RecordDeleted:"记录已删除！",settings_title:"设置",settings_toggle_label_systemAdmin:"模拟系统管理员",settings_toggle_label_restore:"恢复数据和设置？",settings_toggle_label_reset:"重置数据和设置？",settings_button_label_backup:"备份",settings_button_label_restore:"恢复数据",settings_button_label_reset:"重置数据",settings_textarea_label_jsonData:"将 JSON 数据粘贴到此处以恢复...",settings_barcode_debugFlag:"条码页面 调试标志",settings_barcodeEdit_debugFlag:"条形码编辑页面 调试标志",settings_settings_debugFlag:"设置页面 调试标志",settings_share_debugFlag:"共享页面 调试标志",settings_settings_language:"语言",settings_type_barcode:"条码",settings_type_qrcode:"二维码",settings_darkMode:"暗模式背景",settings_notify_noDataError:"没有提供数据，恢复失败...",settings_notify_restoreSuccess:"数据和设置恢复成功。",settings_notify_resetSuccess:"数据和设置重置成功。",sharePage_title:"应用程序 共享",share_install_message0:"**安装说明:**",share_install_message1:"1. 扫描以下二维码。",share_install_message2:"2. 打开扫描的URL以启动PWA应用。",share_install_message3:"3. 在浏览器菜单中选择“添加到主屏幕”。",share_install_message4:"4. 点击“安装”选项。",share_install_message5:"5. 关闭浏览器并在主屏幕上找到应用图标。",share_link_appName:"慈济 活动通",share_link_tzuchi:"新加坡 慈济",share_link_seen:"慈济乐龄长青馆",share_link_vms:"慈济 志工管理系统",share_link_dms:"慈济 捐款管理系统",share_link_jingSiRenWen:"靜思人文",share_link_jingSiShuXuan:"靜思書軒",share_link_jingSiShuXuan_sg:"静思书轩电子商务网",share_link_magazine:"慈濟月刊",share_link_daai:"大愛行",share_link_jsHeartland:"靜思園地",share_link_youtube:"大愛 YouTube",share_link_daaitv:"大愛電視网站",share_show:"显示",share_hide:"隐藏",share_qr:"二维码"},i={failed:"Action failed",success:"Action was successful",language:"中文（慈济）",mainLayout_title:"慈济 活动小帮手",homePage_title:"靜思語",homePage_button:"更改 图像",homePage_jingsiyu_button:"更新 靜思語",homePage_caption_author:"摄影",homePage_caption_jingsiYu:"靜思語",dialog_title_confirmation:"确认",dialog_message_restore:"您确定要执行恢复操作吗？它将覆盖当前数据...",dialog_message_reset:"您确定要执行重置操作吗？它将覆盖当前数据...",button_caption_cancel:"取消",button_caption_delete:"删除",button_caption_yes:"是的",menu_mainMenu:"主菜单",menu_homePage:"主页",menu_barcode:"条码库",menu_qrcode:"二维码库",menu_settings:"设置",menu_title_mainMenu:"主菜单",menu_caption_mainMenu:"一维/二维码管理",menu_title_share:"共享",menu_caption_share:"共享应用程序",menu_title_barcode:"条码",menu_caption_barcode:"一维/二维码管理",menu_title_settings:"设置",menu_caption_settings:"系统设置",scanner_button_show:"Show Scanner",scanner_button_hide:"Hide Scanner",barcode_title:"慈济 志工",qrcode_title:"慈济 志工",barcode_showBarcode:"显示 条码",barcode_showQrcode:"显示 二维码",barcodeEdit_add:"添加新记录",barcodeEdit_update:"编辑",barcodeEdit_item:"志工 姓名",barcodeEdit_phone:"电话",barcodeEdit_barcode:"志工 编号",barcodeEdit_item_validate_message:"请确保输入 志工 姓名",barcodeEdit_barcode_validate_message:"请确保输入 志工 编号",barcodeEdit_comfirmation_title:"确认",barcodeEdit_delete_confirmation:"您确定要删除此记录吗？",barcodeEdit_save_warning_message:"不需要保存，没有检测到任何更改！",barcodeEdit_unsave_warning_message:"您有未保存的更改。 您确定要离开此页面吗？",barcodeEdit_notify_RecordUpdated:"记录已更新！",barcodeEdit_notify_RecordDeleted:"记录已删除！",settings_title:"设置",settings_toggle_label_systemAdmin:"模拟系统管理员",settings_toggle_label_restore:"恢复数据和设置？",settings_toggle_label_reset:"重置数据和设置？",settings_button_label_backup:"备份数据",settings_button_label_restore:"恢复数据",settings_button_label_reset:"重置数据",settings_textarea_label_jsonData:"将 JSON 数据粘贴到此处以恢复...",settings_barcode_debugFlag:"条码页面 调试标志",settings_barcodeEdit_debugFlag:"条形码编辑页面 调试标志",settings_settings_debugFlag:"设置页面 调试标志",settings_share_debugFlag:"共享页面 调试标志",settings_settings_language:"语言",settings_type_barcode:"条码",settings_type_qrcode:"二维码",settings_darkMode:"暗模式背景",settings_notify_noDataError:"没有提供数据，恢复失败...",settings_notify_restoreSuccess:"数据和设置恢复成功。",settings_notify_resetSuccess:"数据和设置重置成功。",sharePage_title:"应用程序 共享",share_install_message0:"**安装说明:**",share_install_message1:"1. 扫描以下二维码。",share_install_message2:"2. 打开扫描的URL以启动PWA应用。",share_install_message3:"3. 在浏览器菜单中选择“添加到主屏幕”。",share_install_message4:"4. 点击“安装”选项。",share_install_message5:"5. 关闭浏览器并在主屏幕上找到应用图标。",share_link_appName:"慈济 活动小帮手",share_link_tzuchi:"新加坡 慈济",share_link_seen:"慈济乐龄长青馆",share_link_vms:"慈济 志工管理系统",share_link_dms:"慈济 捐款管理系统",share_link_jingSiRenWen:"靜思人文",share_link_jingSiShuXuan:"靜思書軒",share_link_jingSiShuXuan_sg:"静思书轩电子商务网",share_link_magazine:"慈濟月刊",share_link_daai:"大愛行",share_link_jsHeartland:"靜思園地",share_link_youtube:"大愛 YouTube",share_link_daaitv:"大愛電視网站",share_show:"显示",share_hide:"隐藏",share_qr:"二维码"},_={"en-US":r,"zh-SG":o,"zh-TC":i},l=(0,n.zj)((({app:e})=>{const t=(0,s.hU)({locale:"en-US",legacy:!1,messages:_});e.use(t)}))},7183:(e,t,a)=>{var n=a(9104),s=a(6501),r=a(8734),o=a(1758);const i=(0,o.pM)(Object.assign({name:"App"},{__name:"App",setup(e){return(e,t)=>{const a=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(a)}}})),_=i,l=_;var d=a(1573),c=a(587);const u=(0,d.M_)((()=>{const e=(0,c.Ey)();return e}));var g=a(455);const h=[{path:"/",component:()=>Promise.all([a.e(121),a.e(686)]).then(a.bind(a,9686)),children:[{path:"",component:()=>Promise.all([a.e(121),a.e(386)]).then(a.bind(a,3386))},{path:"home",component:()=>Promise.all([a.e(121),a.e(386)]).then(a.bind(a,3386))},{path:"share",component:()=>Promise.all([a.e(121),a.e(60)]).then(a.bind(a,6060))},{path:"barcode",component:()=>Promise.all([a.e(121),a.e(327)]).then(a.bind(a,6327))},{path:"barcodeEdit",component:()=>Promise.all([a.e(121),a.e(41)]).then(a.bind(a,9041))},{path:"settings",component:()=>Promise.all([a.e(121),a.e(465)]).then(a.bind(a,3465))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(121),a.e(146)]).then(a.bind(a,9146))}],m=h,b=(0,d.wE)((function(){const e=g.Bt,t=(0,g.aE)({scrollBehavior:()=>({left:0,top:0}),routes:m,history:e("")});return t}));async function p(e,t){const a=e(l);a.use(s.A,t);const n="function"===typeof u?await u({}):u;a.use(n);const o=(0,r.IG)("function"===typeof b?await b({store:n}):b);return n.use((({store:e})=>{e.router=o})),{app:a,store:n,router:o}}var f=a(8993),y=a(1903),v=a(1627),S=a(9610);const E={config:{version:"v2.0.3"},plugins:{LocalStorage:f.A,SessionStorage:y.A,Notify:v.A,Dialog:S.A}};var w=a(9012);(0,w.k)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});const k="";async function P({app:e,router:t,store:a},n){let s=!1;const r=e=>{try{return t.resolve(e).href}catch(a){}return Object(e)===e?null:e},o=e=>{if(s=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=r(e);null!==t&&(window.location.href=t,window.location.reload())},i=window.location.href.replace(window.location.origin,"");for(let l=0;!1===s&&l<n.length;l++)try{await n[l]({app:e,router:t,store:a,ssrContext:null,redirect:o,urlPath:i,publicPath:k})}catch(_){return _&&_.url?void o(_.url):void console.error("[Quasar] boot error:",_)}!0!==s&&(e.use(t),e.mount("#q-app"))}p(n.Ef,E).then((e=>{const[t,n]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(a.bind(a,3774))]).then((t=>{const a=n(t).filter((e=>"function"===typeof e));P(e,a)}))}))}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,(()=>{var e=[];a.O=(t,n,s,r)=>{if(!n){var o=1/0;for(d=0;d<e.length;d++){for(var[n,s,r]=e[d],i=!0,_=0;_<n.length;_++)(!1&r||o>=r)&&Object.keys(a.O).every((e=>a.O[e](n[_])))?n.splice(_--,1):(i=!1,r<o&&(o=r));if(i){e.splice(d--,1);var l=s();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,s,r]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{41:"66a18a91",60:"1c6dbcb7",146:"7a9a404a",327:"b9893d89",386:"0236298a",465:"551669c0",686:"2d72f399"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+e+"."+{41:"4b682c1a",60:"9c745b96",327:"49ed6480",386:"9c745b96",465:"94f9004b"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasar-barcode:";a.l=(n,s,r,o)=>{if(e[n])e[n].push(s);else{var i,_;if(void 0!==r)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var c=l[d];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+r){i=c;break}}i||(_=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+r),i.src=n),e[n]=[s];var u=(t,a)=>{i.onerror=i.onload=null,clearTimeout(g);var s=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),s&&s.forEach((e=>e(a))),t)return t(a)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),_&&document.head.appendChild(i)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p=""})(),(()=>{if("undefined"!==typeof document){var e=(e,t,n,s,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",a.nc&&(o.nonce=a.nc);var i=a=>{if(o.onerror=o.onload=null,"load"===a.type)s();else{var n=a&&a.type,i=a&&a.target&&a.target.href||t,_=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+i+")");_.name="ChunkLoadError",_.code="CSS_CHUNK_LOAD_FAILED",_.type=n,_.request=i,o.parentNode&&o.parentNode.removeChild(o),r(_)}};return o.onerror=o.onload=i,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var s=a[n],r=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===e||r===t))return s}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){s=o[n],r=s.getAttribute("data-href");if(r===e||r===t)return s}},n=n=>new Promise(((s,r)=>{var o=a.miniCssF(n),i=a.p+o;if(t(o,i))return s();e(n,i,null,s,r)})),s={524:0};a.f.miniCss=(e,t)=>{var a={41:1,60:1,327:1,386:1,465:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=n(e).then((()=>{s[e]=0}),(t=>{throw delete s[e],t})))}}})(),(()=>{var e={524:0};a.f.j=(t,n)=>{var s=a.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var r=new Promise(((a,n)=>s=e[t]=[a,n]));n.push(s[2]=r);var o=a.p+a.u(t),i=new Error,_=n=>{if(a.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,s[1](i)}};a.l(o,_,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,n)=>{var s,r,[o,i,_]=n,l=0;if(o.some((t=>0!==e[t]))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(_)var d=_(a)}for(t&&t(n);l<o.length;l++)r=o[l],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},n=globalThis["webpackChunkquasar_barcode"]=globalThis["webpackChunkquasar_barcode"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=a.O(void 0,[121],(()=>a(7183)));n=a.O(n)})();