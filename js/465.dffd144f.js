"use strict";(globalThis["webpackChunkquasar_barcode"]=globalThis["webpackChunkquasar_barcode"]||[]).push([[465],{4533:(e,t,a)=>{function s(e,t,a){return e?`${t} ${a}`:t}a.d(t,{y:()=>s})},9482:(e,t,a)=>{a.d(t,{n:()=>i});var s=a(587),l=a(8993);const o="barcode-db-v1",n="barcode-db",i=(0,s.nY)(o,{state:()=>({_loaded:!1,_barcodes:new Array}),getters:{barcodes:e=>{if(!e._loaded){const t=l.A.getItem(o);if(e._barcodes=null!==t?t:new Array,e._loaded=!0,null!==l.A.getItem(n)){const t=JSON.parse(l.A.getItem(n)+"");t.barCodes.forEach((t=>{e._barcodes.push({caption:t.caption,barcode:t.barCode,expended:!1})})),l.A.removeItem(n),l.A.set(o,e._barcodes)}}return e._barcodes}},actions:{save(){l.A.set(o,this._barcodes)},add(e){this._barcodes.push(e),this.save()},update(e,t){this._barcodes[t]=Object.assign({},e),this.save()},delete(e){return e>=0&&e<this._barcodes.length?(this._barcodes.splice(e,1),this.save(),!0):(console.error("Index out of range"),!1)},restore(e){this._barcodes=e,this.save()},reset(){this._barcodes=[],this.save()}}})},7525:(e,t,a)=>{a.d(t,{C:()=>n});var s=a(587),l=a(8993);const o="settings-db-v1",n=(0,s.nY)(o,{state:()=>({_loaded:!1,_settings:{locale:"en-US",type:"barcode",systemAdmin:!1,barcodePageDebug:!1,barcodeEditPageDebug:!1,settingsPageDebug:!1}}),getters:{settings:e=>c(e),isBarcodePageDebug:e=>c(e).barcodePageDebug,isBarcodeEditPageDebug:e=>c(e).barcodeEditPageDebug,isSettingsPageDebug:e=>c(e).settingsPageDebug,locale:e=>c(e).locale,barcodeType:e=>c(e).type},actions:{save(){l.A.set(o,{_settings:this._settings})},setBarcodePageDebug(e){this._settings.barcodePageDebug=e,this.save()},setBarcodeEditPageDebug(e){this._settings.barcodeEditPageDebug=e,this.save()},setSettingsPageDebug(e){this._settings.settingsPageDebug=e,this.save()},setLocale(e){this._settings.locale=e,this.save()},setBarcodeType(e){this._settings.type=e,this.save()},restore(e){this._settings=e,this.save()},reset(){this._settings={locale:"en-US",type:"barcode",systemAdmin:!1,barcodePageDebug:!1,barcodeEditPageDebug:!1,settingsPageDebug:!1}}}}),i="SETTINGS",c=e=>{if(!e._loaded){const t=l.A.getItem(o);if(null!==t&&(e._settings=t._settings),e._loaded=!0,null!==l.A.getItem(i)){const e=JSON.parse(l.A.getItem(i)+"");if("zh-SG"===e.locale){const e=n();e.setLocale("zh-TC")}l.A.removeItem(i)}}return e._settings}},1234:(e,t,a)=>{a.d(t,{A:()=>g});var s=a(1758),l=a(8790);function o(e,t,a,o,n,i){return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("h5",null,(0,l.v_)(e.title),1),(0,s.Lk)("pre",null,(0,l.v_)(i.valueString),1)])}const n={title:{required:!0,type:String},value:{required:!0}},i={name:"raw-displayer",props:n,computed:{valueString(){return JSON.stringify(this.value,null,2)}}};var c=a(2807);const d=(0,c.A)(i,[["render",o],["__scopeId","data-v-11f63c05"]]),g=d},3465:(e,t,a)=>{a.r(t),a.d(t,{default:()=>K});var s=a(1758),l=a(8790),o=a(8734),n=a(4533),i=a(7525),c=a(3537),d=a(1234),g=a(7396),u=a(9862),r=a(4907),b=a(9482);const v=e=>((0,s.Qi)("data-v-b2307c3e"),e=e(),(0,s.jt)(),e),p=v((()=>(0,s.Lk)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"},null,-1))),_={class:"row q-pa-xs"},m={class:"q-pa-ms"},h={class:"q-pa-ms"},k={class:"q-pa-ms"},y={class:"q-pa-ms"},D={key:0,class:"row q-pa-md"},P={class:"col"},A={class:"row q-pa-md"},f={class:"col"},V={class:"row q-pa-md"},q={class:"row items-center"},S={key:1,class:"row q-pa-md"},C={class:"col x-v-align-middle"},L={class:"col text-right"},E={key:2,class:"q-pa-md"},R={class:"text-center"},F={key:3,class:"row q-pa-md"},U={class:"col x-v-align-middle"},w={key:0,class:"col text-right"},x=(0,s.pM)({__name:"settingsComponent",setup(e){const{t,locale:a}=(0,c.s9)({useScope:"global"}),v=(0,r.A)(),x=(0,b.n)(),I=(0,i.C)(),O=(0,o.KR)(Object.assign({},I.settings)),B=(0,o.KR)(!1),Q=(0,o.KR)(!1),z=(0,o.KR)(""),T=I.isSettingsPageDebug,X=[{label:"English",value:"en-US"},{label:"中文（新加坡）",value:"zh-SG"},{label:"中文（慈济）",value:"zh-TC"}],j=[{label:"settings_type_barcode",value:"barcode"},{label:"settings_type_qrcode",value:"qrcode"}],M=()=>{T&&console.log("onBackupClick");const e=Date.now(),t=u.Ay.formatDate(e,"YYYY-MM-DD-HH-mm"),a={settings:O.value,data:x.barcodes},s=(0,g.A)(`barcodeManager-${t}.txt`,JSON.stringify(a,null,4));!0===s||console.log("Error: "+s)},N=()=>{T&&console.log("onRestoreClick"),""!==z.value?v.dialog({title:t("dialog_title_confirmation"),message:t("dialog_message_restore"),cancel:{label:t("button_caption_cancel"),push:!0},ok:{label:t("button_caption_yes")},persistent:!0}).onOk((()=>{try{const e=JSON.parse(z.value);I.restore(e.settings),O.value=Object.assign({},I.settings),x.restore(e.data),H(),v.notify({type:"positive",position:"center",message:t("settings_notify_restoreSuccess")})}catch(e){v.notify({type:"negative",position:"center",message:e.message})}})).onCancel((()=>{})).onDismiss((()=>{})):v.notify({type:"negative",position:"center",message:t("settings_notify_noDataError")})},Y=()=>{T&&console.log("onResetClick"),v.dialog({title:t("dialog_title_confirmation"),message:t("dialog_message_reset"),cancel:{label:t("button_caption_cancel"),push:!0},ok:{label:t("button_caption_yes")},persistent:!0}).onOk((()=>{I.reset(),O.value=Object.assign({},I.settings),H(),v.notify({type:"positive",position:"center",message:t("settings_notify_resetSuccess")})})).onCancel((()=>{})).onDismiss((()=>{}))},G=()=>{T&&console.log("onBarcodePageUpdate"),I.settings.systemAdmin=O.value.systemAdmin,I.save()},J=()=>{T&&console.log("onBarcodePageUpdate"),I.setBarcodePageDebug(O.value.barcodePageDebug)},K=()=>{T&&console.log("onBarcodePageUpdate"),I.setBarcodeEditPageDebug(O.value.barcodeEditPageDebug)},$=()=>{T&&console.log("onSettingsPageUpdate"),I.setSettingsPageDebug(O.value.settingsPageDebug)},H=()=>{T&&console.log("onLocaleUpdate"),a.value=O.value.locale,I.setLocale(a.value)},W=()=>{I.setBarcodeType(O.value.type)};return(e,i)=>{const c=(0,s.g2)("q-toggle"),g=(0,s.g2)("q-select"),u=(0,s.g2)("q-option-group"),r=(0,s.g2)("q-btn"),b=(0,s.g2)("q-input");return(0,s.uX)(),(0,s.CE)(s.FK,null,[p,(0,s.Lk)("div",_,[(0,s.Lk)("div",{class:(0,l.C4)((0,o.R1)(n.y)(O.value.settingsPageDebug,"col text-h3 text-center text-capitalize","bg-blue-3"))},(0,l.v_)((0,o.R1)(t)("settings_title")),3)]),(0,s.Lk)("div",m,[(0,s.bF)(c,{modelValue:O.value.systemAdmin,"onUpdate:modelValue":[i[0]||(i[0]=e=>O.value.systemAdmin=e),G],label:(0,o.R1)(t)("settings_toggle_label_systemAdmin"),"checked-icon":"check","unchecked-icon":"clear"},null,8,["modelValue","label"])]),(0,s.Lk)("div",h,[(0,s.bF)(c,{modelValue:O.value.barcodePageDebug,"onUpdate:modelValue":[i[1]||(i[1]=e=>O.value.barcodePageDebug=e),J],label:(0,o.R1)(t)("settings_barcode_debugFlag"),"checked-icon":"check","unchecked-icon":"clear"},null,8,["modelValue","label"])]),(0,s.Lk)("div",k,[(0,s.bF)(c,{modelValue:O.value.barcodeEditPageDebug,"onUpdate:modelValue":[i[2]||(i[2]=e=>O.value.barcodeEditPageDebug=e),K],label:(0,o.R1)(t)("settings_barcodeEdit_debugFlag"),"checked-icon":"check","unchecked-icon":"clear"},null,8,["modelValue","label"])]),(0,s.Lk)("div",y,[(0,s.bF)(c,{modelValue:O.value.settingsPageDebug,"onUpdate:modelValue":[i[3]||(i[3]=e=>O.value.settingsPageDebug=e),$],label:(0,o.R1)(t)("settings_settings_debugFlag"),"checked-icon":"check","unchecked-icon":"clear"},null,8,["modelValue","label"])]),O.value.settingsPageDebug?((0,s.uX)(),(0,s.CE)("div",D,[(0,s.Lk)("div",P,(0,l.v_)((0,o.R1)(a))+" -- "+(0,l.v_)((0,o.R1)(t)("language"))+" -- "+(0,l.v_)(O.value.locale),1)])):(0,s.Q3)("",!0),(0,s.Lk)("div",A,[(0,s.Lk)("div",f,[(0,s.bF)(g,{outlined:"",modelValue:O.value.locale,"onUpdate:modelValue":[i[4]||(i[4]=e=>O.value.locale=e),H],options:X,"emit-value":"","map-options":"",label:(0,o.R1)(t)("settings_settings_language")},null,8,["modelValue","label"])])]),(0,s.Lk)("div",V,[(0,s.bF)(u,{inline:"",color:"primary",type:"radio",class:"q-mt-xs",options:j,modelValue:O.value.type,"onUpdate:modelValue":[i[5]||(i[5]=e=>O.value.type=e),W]},{label:(0,s.k6)((e=>[(0,s.Lk)("div",q,[(0,s.Lk)("span",null,(0,l.v_)((0,o.R1)(t)(e.label)),1)])])),_:1},8,["modelValue"])]),O.value.systemAdmin?((0,s.uX)(),(0,s.CE)("div",S,[(0,s.Lk)("div",C,[(0,s.bF)(c,{modelValue:B.value,"onUpdate:modelValue":i[6]||(i[6]=e=>B.value=e),label:(0,o.R1)(t)("settings_toggle_label_restore"),color:"green","checked-icon":"check","unchecked-icon":"clear"},null,8,["modelValue","label"])]),(0,s.Lk)("div",L,[(0,s.bF)(r,{push:"",color:"green",icon:"cloud_download",label:(0,o.R1)(t)("settings_button_label_backup"),size:"lg",onClick:M},null,8,["label"])])])):(0,s.Q3)("",!0),B.value&&O.value.systemAdmin?((0,s.uX)(),(0,s.CE)("div",E,[(0,s.bF)(b,{"lazy-rules":"",outlined:"","bottom-slots":"",dense:"",modelValue:z.value,"onUpdate:modelValue":i[7]||(i[7]=e=>z.value=e),label:(0,o.R1)(t)("settings_textarea_label_jsonData"),type:"textarea"},null,8,["modelValue","label"]),(0,s.Lk)("div",R,[(0,s.bF)(r,{push:"",color:"green",icon:"cloud_upload",label:(0,o.R1)(t)("settings_button_label_restore"),size:"lg",onClick:N},null,8,["label"])])])):(0,s.Q3)("",!0),O.value.systemAdmin?((0,s.uX)(),(0,s.CE)("div",F,[(0,s.Lk)("div",U,[(0,s.bF)(c,{modelValue:Q.value,"onUpdate:modelValue":i[8]||(i[8]=e=>Q.value=e),label:(0,o.R1)(t)("settings_toggle_label_reset"),color:"red","checked-icon":"check","unchecked-icon":"clear"},null,8,["modelValue","label"])]),Q.value?((0,s.uX)(),(0,s.CE)("div",w,[(0,s.bF)(r,{push:"",color:"red",icon:"restart_alt",label:(0,o.R1)(t)("settings_button_label_reset"),size:"lg",onClick:Y},null,8,["label"])])):(0,s.Q3)("",!0)])):(0,s.Q3)("",!0),O.value.settingsPageDebug?((0,s.uX)(),(0,s.Wv)(d.A,{key:4,class:"col-3 q-pa-md items-start q-gutter-md",value:O.value,title:"db settings"},null,8,["value"])):(0,s.Q3)("",!0)],64)}}});var I=a(2807),O=a(6908),B=a(5601),Q=a(9495),z=a(1693),T=a(9270),X=a(8582),j=a.n(X);const M=(0,I.A)(x,[["__scopeId","data-v-b2307c3e"]]),N=M;j()(x,"components",{QToggle:O.A,QSelect:B.A,QOptionGroup:Q.A,QBtn:z.A,QInput:T.A});const Y=(0,s.pM)(Object.assign({name:"SettingsPage"},{__name:"settingsPage",setup(e){return(e,t)=>{const a=(0,s.g2)("q-page");return(0,s.uX)(),(0,s.Wv)(a,null,{default:(0,s.k6)((()=>[(0,s.bF)(N)])),_:1})}}}));var G=a(7716);const J=(0,I.A)(Y,[["__scopeId","data-v-a0d54ff8"]]),K=J;j()(Y,"components",{QPage:G.A})}}]);