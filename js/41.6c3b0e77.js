"use strict";(globalThis["webpackChunkquasar_barcode"]=globalThis["webpackChunkquasar_barcode"]||[]).push([[41],{4533:(e,t,a)=>{function s(e,t,a){return e?`${t} ${a}`:t}a.d(t,{y:()=>s})},9482:(e,t,a)=>{a.d(t,{n:()=>d});var s=a(587),o=a(8993);const l="barcode-db-v1",n="barcode-db",d=(0,s.nY)(l,{state:()=>({_loaded:!1,_barcodes:new Array}),getters:{barcodes:e=>{if(!e._loaded){const t=o.A.getItem(l);if(e._barcodes=null!==t?t:new Array,e._loaded=!0,null!==o.A.getItem(n)){const t=JSON.parse(o.A.getItem(n)+"");t.barCodes.forEach((t=>{e._barcodes.push({caption:t.caption,barcode:t.barCode,expended:!1})})),o.A.removeItem(n),o.A.set(l,e._barcodes)}}return e._barcodes}},actions:{save(){o.A.set(l,this._barcodes)},add(e){this._barcodes.push(e),this.save()},update(e,t){this._barcodes[t]=Object.assign({},e),this.save()},delete(e){return e>=0&&e<this._barcodes.length?(this._barcodes.splice(e,1),this.save(),!0):(console.error("Index out of range"),!1)},restore(e){this._barcodes=e,this.save()},reset(){this._barcodes=[],this.save()}}})},7525:(e,t,a)=>{a.d(t,{C:()=>n});var s=a(587),o=a(8993);const l="settings-db-v1",n=(0,s.nY)(l,{state:()=>({_loaded:!1,_settings:{locale:"en-US",type:"barcode",systemAdmin:!1,barcodePageDebug:!1,barcodeEditPageDebug:!1,settingsPageDebug:!1}}),getters:{settings:e=>i(e),isBarcodePageDebug:e=>i(e).barcodePageDebug,isBarcodeEditPageDebug:e=>i(e).barcodeEditPageDebug,isSettingsPageDebug:e=>i(e).settingsPageDebug,locale:e=>i(e).locale,barcodeType:e=>i(e).type},actions:{save(){o.A.set(l,{_settings:this._settings})},setBarcodePageDebug(e){this._settings.barcodePageDebug=e,this.save()},setBarcodeEditPageDebug(e){this._settings.barcodeEditPageDebug=e,this.save()},setSettingsPageDebug(e){this._settings.settingsPageDebug=e,this.save()},setLocale(e){this._settings.locale=e,this.save()},setBarcodeType(e){this._settings.type=e,this.save()},restore(e){this._settings=e,this.save()},reset(){this._settings={locale:"en-US",type:"barcode",systemAdmin:!1,barcodePageDebug:!1,barcodeEditPageDebug:!1,settingsPageDebug:!1}}}}),d="SETTINGS",i=e=>{if(!e._loaded){const t=o.A.getItem(l);if(null!==t&&(e._settings=t._settings),e._loaded=!0,null!==o.A.getItem(d)){const e=JSON.parse(o.A.getItem(d)+"");if("zh-SG"===e.locale){const e=n();e.setLocale("zh-TC")}o.A.removeItem(d)}}return e._settings}},9041:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var s=a(1758),o=a(8790),l=a(8734),n=a(455),d=a(4533),i=a(9482),c=a(4907),r=a(3537),u=a(7525);const b=e=>((0,s.Qi)("data-v-ddee6654"),e=e(),(0,s.jt)(),e),g=b((()=>(0,s.Lk)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"},null,-1))),p={class:"row q-pa-xs"},m={class:"q-pa-md"},_=b((()=>(0,s.Lk)("span",{class:"material-symbols-outlined"}," id_card ",-1))),v=b((()=>(0,s.Lk)("span",{class:"material-symbols-outlined"}," phone ",-1))),h=b((()=>(0,s.Lk)("span",{class:"material-symbols-outlined"}," barcode ",-1))),y=b((()=>(0,s.Lk)("span",{class:"material-symbols-outlined"}," tag ",-1))),k=b((()=>(0,s.Lk)("span",{class:"material-symbols-outlined"}," notes ",-1))),f=(0,s.pM)({__name:"codeEditComponent",setup(e){const{t}=(0,r.s9)(),a=(0,c.A)(),b=(0,n.rd)(),f=(0,n.lq)(),D=(0,i.n)(),E=(0,u.C)(),A=E.isBarcodePageDebug;let P=!1;const C=f.query.id?parseInt(f.query.id.toString(),10):-1;let R={caption:"",barcode:"",expended:!1};-1===C?P=!0:R=Object.assign({},D.barcodes[C]);const q=(0,l.KR)(R);let S=JSON.stringify(q.value);const L=()=>{A&&console.log("onSaveButtonClick"),S===JSON.stringify(q.value)?a.notify({type:"warning",position:"center",message:t("barcodeEdit_save_warning_message")}):(P?D.add(q.value):D.update(q.value,C),a.notify({type:"positive",position:"center",message:t("barcodeEdit_notify_RecordUpdated")}),S=JSON.stringify(q.value),b.push("/barcode"))},I=()=>{A&&console.log("onDeleteButtonClick"),a.dialog({title:t("barcodeEdit_comfirmation_title"),message:t("barcodeEdit_delete_confirmation"),cancel:{label:t("button_caption_cancel"),push:!0},ok:{label:t("button_caption_delete")},persistent:!0}).onOk((()=>{D.delete(C),a.notify({type:"positive",position:"center",message:t("barcodeEdit_notify_RecordDeleted")}),b.push("/barcode")})).onCancel((()=>{})).onDismiss((()=>{}))},V=()=>{A&&console.log("onCloseButtonClick"),b.push("/barcode")};function w(){return new Promise(((e,s)=>{a.dialog({title:t("barcodeEdit_comfirmation_title"),message:t("barcodeEdit_unsave_warning_message"),cancel:{label:t("button_caption_cancel")},ok:{label:t("button_caption_yes")}}).onOk((()=>{e(!0)})).onCancel((()=>{s()})).onDismiss((()=>{}))}))}return(0,n.JZ)(((e,t,a)=>{S!==JSON.stringify(q.value)?w().then((()=>a())).catch((()=>!1)):a()})),(e,a)=>{const n=(0,s.g2)("q-btn"),i=(0,s.g2)("q-input"),c=(0,s.g2)("q-select");return(0,s.uX)(),(0,s.CE)(s.FK,null,[g,(0,s.Lk)("div",p,[(0,s.Lk)("div",{class:(0,o.C4)((0,l.R1)(d.y)((0,l.R1)(A),"col-md-auto q-pa-sm x-v-align-middle","bg-red-3"))},[(0,l.R1)(P)?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(n,{key:0,color:"red",icon:"delete",round:"",onClick:I,class:"q-mr-xs"}))],2),(0,s.Lk)("div",{class:(0,o.C4)((0,l.R1)(d.y)((0,l.R1)(A),"col text-h3 text-center text-capitalize","bg-blue-3"))},(0,o.v_)((0,l.R1)(P)?(0,l.R1)(t)("barcodeEdit_add"):(0,l.R1)(t)("barcodeEdit_update")),3),(0,s.Lk)("div",{class:(0,o.C4)((0,l.R1)(d.y)((0,l.R1)(A),"col-md-auto q-pa-sm x-v-align-middle","bg-red-3"))},[(0,l.R1)(P)?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.Wv)(n,{key:0,color:"green",icon:"save_as",round:"",onClick:L,class:"q-mr-xs"})),(0,l.R1)(P)?((0,s.uX)(),(0,s.Wv)(n,{key:1,color:"green",icon:"save",round:"",onClick:L,class:"q-mr-xs"})):(0,s.Q3)("",!0),(0,s.bF)(n,{color:"green",icon:"close",round:"",onClick:V})],2)]),(0,s.Lk)("div",m,[(0,s.bF)(i,{outlined:"","bottom-slots":"",clearable:"",modelValue:q.value.caption,"onUpdate:modelValue":a[0]||(a[0]=e=>q.value.caption=e),label:(0,l.R1)(t)("barcodeEdit_item")},{prepend:(0,s.k6)((()=>[_])),_:1},8,["modelValue","label"]),(0,s.bF)(i,{outlined:"","bottom-slots":"",clearable:"",modelValue:q.value.phone,"onUpdate:modelValue":a[1]||(a[1]=e=>q.value.phone=e),label:(0,l.R1)(t)("barcodeEdit_phone")},{prepend:(0,s.k6)((()=>[v])),_:1},8,["modelValue","label"]),(0,s.bF)(i,{outlined:"","bottom-slots":"",clearable:"",modelValue:q.value.barcode,"onUpdate:modelValue":a[2]||(a[2]=e=>q.value.barcode=e),label:(0,l.R1)(t)("barcodeEdit_barcode")},{prepend:(0,s.k6)((()=>[h])),_:1},8,["modelValue","label"]),(0,s.bF)(c,{outlined:"","bottom-slots":"",clearable:"","emit-value":"","map-options":"",dense:"","label-slot":"","use-input":"","use-chips":"",multiple:"","hide-dropdown-icon":"","input-debounce":"0","new-value-mode":"add-unique",modelValue:q.value.tags,"onUpdate:modelValue":a[3]||(a[3]=e=>q.value.tags=e),label:"Tags",hint:"Enter tag here and press enter...","hide-hint":""},{prepend:(0,s.k6)((()=>[y])),_:1},8,["modelValue"]),(0,s.bF)(i,{"lazy-rules":"",outlined:"","bottom-slots":"",dense:"",clearable:"",modelValue:q.value.notes,"onUpdate:modelValue":a[4]||(a[4]=e=>q.value.notes=e),label:"Notes",type:"textarea"},{prepend:(0,s.k6)((()=>[k])),_:1},8,["modelValue"])])],64)}}});var D=a(2807),E=a(1693),A=a(9270),P=a(5601),C=a(8582),R=a.n(C);const q=(0,D.A)(f,[["__scopeId","data-v-ddee6654"]]),S=q;R()(f,"components",{QBtn:E.A,QInput:A.A,QSelect:P.A});const L={class:"item"},I=(0,s.pM)(Object.assign({name:"BarcodePage"},{__name:"barcodeEditPage",setup(e){return(e,t)=>{const a=(0,s.g2)("q-page");return(0,s.uX)(),(0,s.Wv)(a,{class:"row content-container"},{default:(0,s.k6)((()=>[(0,s.Lk)("div",L,[(0,s.bF)(S)])])),_:1})}}}));var V=a(7716);const w=(0,D.A)(I,[["__scopeId","data-v-5a5385d4"]]),x=w;R()(I,"components",{QPage:V.A})}}]);