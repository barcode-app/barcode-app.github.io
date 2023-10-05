"use strict";(globalThis["webpackChunkbarcode_store"]=globalThis["webpackChunkbarcode_store"]||[]).push([[520],{2620:(t,e,a)=>{a.d(e,{O3:()=>i,OB:()=>o,Px:()=>n,de:()=>s});class s{constructor(t){this._settings={locale:"en-US",isAdmin:!1,globalDebug:!1,homePageDebug:!1,barCodePageDebug:!1,settingsPageDebug:!1},this.DB_KEY="SETTINGS",this._local=t.localStorage,null===this._local.getItem(this.DB_KEY)&&this._local.set(this.DB_KEY,JSON.stringify(this.getState()));const e=JSON.parse(this._local.getItem(this.DB_KEY)+"");this._settings=Object.assign(Object.assign({},this._settings),e)}saveData(){this._local.set(this.DB_KEY,JSON.stringify(this.getState()))}getState(){return this._settings}get locale(){return this._settings.locale}set locale(t){this._settings.locale=t}get isAdmin(){return this._settings.isAdmin}set isAdmin(t){this._settings.isAdmin=t}get globalDebug(){return this._settings.globalDebug}set globalDebug(t){this._settings.globalDebug=t}get barCodePageDebug(){return this._settings.barCodePageDebug}set barCodePageDebug(t){this._settings.barCodePageDebug=t}get homePageDebug(){return this._settings.homePageDebug}set homePageDebug(t){this._settings.homePageDebug=t}get settingsPageDebug(){return this._settings.settingsPageDebug}set settingsPageDebug(t){this._settings.settingsPageDebug=t}}class i{constructor(t,e=!1){this._saveState="",this._stateEngine=new t(e),this._debug=e}setState(t){this._dataObject=t}get stateString(){return JSON.stringify(this._dataObject)}beginEdit(){this._saveState=this.stateString,this._stateEngine.errors=[],this._debug&&console.log("StateManager beginEdit",this._saveState)}isDirty(){return this._debug&&console.log("StateManager isDirty",this._saveState!==this.stateString,this.stateString),this._saveState!==this.stateString}validate(){return this._debug&&console.log("StateManager validate"),this._stateEngine.validate(this._dataObject)}copyState(t){this._debug&&console.log("StateManager copyState"),this._stateEngine.copyState(t,this._dataObject)}restoreState(t){this._debug&&console.log("StateManager restoreState"),this._stateEngine.restoreState(t,JSON.parse(this._saveState))}get errors(){return this._stateEngine.errors}}class o{constructor(t){this._debug=t,this._errors=[]}get errors(){return this._errors}set errors(t){this._errors=t}validate(t){this._debug&&console.log("validate");let e=!0;return this._errors=[],""===t.caption&&(e=!1,this._errors.push("barcode-error-caption")),""===t.barCode&&(e=!1,this._errors.push("barcode-error-barcode")),e}copyState(t,e){this._debug&&console.log("copyState",t),e.caption=e.caption,e.barCode=e.barCode,e.expanded=e.expanded,e.tags=e.tags,e.notes=e.notes}restoreState(t,e){this._debug&&console.log("restoreState",t),t.caption=e.caption,t.barCode=e.barCode,t.expanded=e.expanded,t.tags=e.tags,t.notes=e.notes}}class n{constructor(t){this.KEY_BARCODE_DB="barcode-db",this._state={title:"",itemCaption:"",barcodeCaption:"",barCodes:[]},this._local=t.localStorage,null===this._local.getItem(this.KEY_BARCODE_DB)&&this._local.set(this.KEY_BARCODE_DB,JSON.stringify(this.getState()));const e=JSON.parse(this._local.getItem(this.KEY_BARCODE_DB)+"");this._state=Object.assign(Object.assign({},this._state),e)}getState(){return this._state}get stateString(){return JSON.stringify(this.getState())}restoreData(t){const e=JSON.parse(t);this._state=e}resetData(){this._state.title="",this._state.itemCaption="",this._state.barcodeCaption="",this._state.barCodes=[]}saveData(){this._local.set(this.KEY_BARCODE_DB,this.stateString)}get newItem(){return{caption:"",barCode:"",expanded:!1,tags:[],notes:""}}addBarCode(t){this._state.barCodes.push(t)}deleteBarCode(t){this._state.barCodes=[...this._state.barCodes.slice(0,t),...this._state.barCodes.slice(t+1)]}get barCodes(){return this._state.barCodes}get title(){return this._state.title}set title(t){this._state.title=t}get itemCaption(){return this._state.itemCaption}set itemCaption(t){this._state.itemCaption=t}get barcodeCaption(){return this._state.barcodeCaption}set barcodeCaption(t){this._state.barcodeCaption=t}}},4520:(t,e,a)=>{a.r(e),a.d(e,{default:()=>j});var s=a(9835),i=a(6970),o=a(499);const n=(0,s.aZ)({__name:"EssentialLink",props:{title:{},caption:{default:""},link:{default:"#"},icon:{default:""}},setup(t){return(t,e)=>{const a=(0,s.up)("q-icon"),o=(0,s.up)("q-item-section"),n=(0,s.up)("q-item-label"),r=(0,s.up)("q-item");return(0,s.wg)(),(0,s.j4)(r,{clickable:"",tag:"a",target:"_blank",href:t.link},{default:(0,s.w5)((()=>[t.icon?((0,s.wg)(),(0,s.j4)(o,{key:0,avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{name:t.icon},null,8,["name"])])),_:1})):(0,s.kq)("",!0),(0,s.Wm)(o,null,{default:(0,s.w5)((()=>[(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.title),1)])),_:1}),(0,s.Wm)(n,{caption:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.caption),1)])),_:1})])),_:1})])),_:1},8,["href"])}}});var r=a(490),l=a(1233),u=a(2857),c=a(3115),g=a(9984),d=a.n(g);const h=n,_=h;d()(n,"components",{QItem:r.Z,QItemSection:l.Z,QIcon:u.Z,QItemLabel:c.Z});const b=(0,s.aZ)({__name:"MenuLink",props:{title:{},caption:{default:""},path:{default:"#"},icon:{default:""}},setup(t){return(t,e)=>{const a=(0,s.up)("q-icon"),o=(0,s.up)("q-item-section"),n=(0,s.up)("q-item-label"),r=(0,s.up)("q-item");return(0,s.wg)(),(0,s.j4)(r,{clickable:"",to:t.path},{default:(0,s.w5)((()=>[t.icon?((0,s.wg)(),(0,s.j4)(o,{key:0,avatar:""},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{name:t.icon},null,8,["name"])])),_:1})):(0,s.kq)("",!0),(0,s.Wm)(o,null,{default:(0,s.w5)((()=>[(0,s.Wm)(n,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.title),1)])),_:1}),(0,s.Wm)(n,{caption:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.caption),1)])),_:1})])),_:1})])),_:1},8,["to"])}}}),p=b,m=p;d()(b,"components",{QItem:r.Z,QItemSection:l.Z,QIcon:u.Z,QItemLabel:c.Z});var w=a(6647),S=a(2620),f=a(9302);const v=(0,s.aZ)({__name:"MainLayout",setup(t){const e=(0,f.Z)(),{t:a}=(0,w.QT)(),{locale:n}=(0,w.QT)({useScope:"global"}),r=(0,o.iH)(new S.de(e));n.value=r.value.locale;const l=(0,s.Fl)((()=>[{title:a("menu-home"),caption:a("menu-home-subTitle"),icon:"home",path:"/"},{title:a("menu-barcode"),caption:a("menu-barcode-subTitle"),icon:"barcode_reader",path:"/barcodev2"},{title:a("menu-settings"),caption:a("menu-settings-subTitle"),icon:"settings",path:"/appsettings"}])),u=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],c=(0,o.iH)(!1);function g(){c.value=!c.value}return(t,a)=>{const n=(0,s.up)("q-btn"),r=(0,s.up)("q-toolbar-title"),d=(0,s.up)("q-toolbar"),h=(0,s.up)("q-header"),b=(0,s.up)("q-item-label"),p=(0,s.up)("q-list"),w=(0,s.up)("q-drawer"),S=(0,s.up)("q-route-tab"),f=(0,s.up)("q-tabs"),v=(0,s.up)("q-footer"),D=(0,s.up)("router-view"),C=(0,s.up)("q-page-container"),k=(0,s.up)("q-layout");return(0,s.wg)(),(0,s.j4)(k,{view:"lHh Lpr lFf"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{elevated:""},{default:(0,s.w5)((()=>[(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[(0,s.Wm)(n,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:g}),(0,s.Wm)(r,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.$t("appTitle")),1)])),_:1}),(0,s._)("div",null,"Quasar v"+(0,i.zw)((0,o.SU)(e).version),1)])),_:1})])),_:1}),(0,s.Wm)(w,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=t=>c.value=t),"show-if-above":"",bordered:""},{default:(0,s.w5)((()=>[(0,s.Wm)(p,null,{default:(0,s.w5)((()=>[(0,s.Wm)(b,{header:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(t.$t("menu-caption")),1)])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.value,(t=>((0,s.wg)(),(0,s.j4)(m,(0,s.dG)({key:t.title},t),null,16)))),128)),(0,s.Wm)(b,{header:""},{default:(0,s.w5)((()=>[(0,s.Uk)(" Essential Links ")])),_:1}),((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(u,(t=>(0,s.Wm)(_,(0,s.dG)({key:t.title},t),null,16))),64))])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)(v,{bordered:"",class:"bg-blue-3 text-primary"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{align:"center"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.value,(t=>((0,s.wg)(),(0,s.j4)(S,{key:t.title,to:t,icon:t.icon,label:t.title},null,8,["to","icon","label"])))),128))])),_:1})])),_:1}),(0,s.Wm)(C,null,{default:(0,s.w5)((()=>[(0,s.Wm)(D)])),_:1})])),_:1})}}});var D=a(7605),C=a(6602),k=a(1663),q=a(4455),E=a(1973),Q=a(3655),O=a(3246),Z=a(1378),y=a(7817),W=a(4337),B=a(2133);const P=v,j=P;d()(v,"components",{QLayout:D.Z,QHeader:C.Z,QToolbar:k.Z,QBtn:q.Z,QToolbarTitle:E.Z,QDrawer:Q.Z,QList:O.Z,QItemLabel:c.Z,QFooter:Z.Z,QTabs:y.Z,QRouteTab:W.Z,QPageContainer:B.Z})}}]);