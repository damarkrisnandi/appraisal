import{g as ft}from"./chunk-7U4M7FLE.js";import{A as $t,C as wt,D as U,E as k,g as ht,l as N,q as Ct,r as kt,u as vt}from"./chunk-A37O4IKQ.js";import{m as $,n as gt,o as H,s as At}from"./chunk-3TPTQGFG.js";import"./chunk-4YRY4IP2.js";import"./chunk-42ATNSVF.js";import"./chunk-5H45J4QU.js";import{a as Z}from"./chunk-OQKDZ6KP.js";import{a as bt,c as B,f as O,g as G,h as A,i as S,l as V,m as z,q as _t}from"./chunk-DDUXGODL.js";import{a as ut}from"./chunk-MQPYQJ3G.js";import{ka as Y,oa as St,va as yt,wa as j}from"./chunk-DG77JJ4B.js";import{m as P,r as pt,t as mt}from"./chunk-O2IJJLQI.js";import{Ab as u,Bb as p,Kb as X,La as et,Lb as m,Nb as L,Ob as lt,Pa as r,Qa as it,Sb as st,Tb as C,Ub as D,Ya as l,_ as M,bc as dt,cc as ct,da as g,ea as y,eb as _,ec as E,gb as ot,hb as d,ia as b,lb as T,mb as F,nb as at,pb as nt,qb as rt,rb as n,sa as w,sb as a,ta as x,tb as c,uc as v,xb as W}from"./chunk-ZIXU4GN5.js";var I=bt.APPRAISAL_API_URL+"/attitude-skill-indicator",q=class i{constructor(e){this.http=e}findByCriteriaPaginated(e){return this.http.post(I+"/findByCriteriaPaginated",e)}saveIndicator(e){return this.http.post(I+"/save",e)}getCategory(){return this.http.get(I+"/category/list")}getMetric(){return this.http.get(I+"/metric-type/list")}deleteIndicator(e){return this.http.delete(I+"/delete/"+e)}static \u0275fac=function(t){return new(t||i)(g(ut))};static \u0275prov=M({token:i,factory:i.\u0275fac,providedIn:"root"})};var f=class i{constructor(e,t,o,s,h){this.spinnerService=e;this.attitudeSkillService=t;this.messageService=o;this.confirmationService=s;this.confirmDialog=h;this.init()}state={$dataList:l([]),$dataLoading:l(!1),$pagingInfo:l(new Z),$totalRowCount:l(1),$selectedData:l(null),$selectedVerified:l(!0),$loading:l(!1),$disabledTable:l(!1),$searchText:l(""),$searchBtnClickEvent:l(!1),$optionsCategory:l([]),$optionsMetricType:l([]),$metricList:l([]),$disabledUpdate:l(!0),$disabledSave:l(!0),$disabledCancel:l(!0),$formMode:l("idle")};$dataList=this.state.$dataList.asReadonly();$dataLoading=this.state.$dataLoading.asReadonly();$selectedData=this.state.$selectedData.asReadonly();$cols=l([{header:"No",class_td:"!text-center",type:"number"},{field:"attitudeSkillCategory",header:"Category",class_td:"!text-center"},{field:"indicator",header:"Indicators",class_td:"!text-center"},{field:"metricType",header:"Metrics",class_td:"!text-center"},{field:"action",header:"Actions",class_td:"flex justify-center items-center gap-2",type:"action"}]).asReadonly();$pagingInfo=this.state.$pagingInfo.asReadonly();$totalRowCount=this.state.$totalRowCount.asReadonly();$searchText=this.state.$searchText.asReadonly();$filter=v(()=>{let e=null;e={};let t;return t=this.$searchText()??"",e.indicator=t,e});indicatorAttitudeForm=l(new A({category:new S({value:null,disabled:!0}),indicator:new S({value:null,disabled:!0}),metricType:new S({value:null,disabled:!0})}));$optionsCategory=this.state.$optionsCategory.asReadonly();$optionsMetricType=this.state.$optionsMetricType.asReadonly();$metricList=this.state.$metricList.asReadonly();$disabledSave=v(()=>this.state.$disabledSave()&&this.state.$formMode()=="idle");$disabledCancel=v(()=>this.state.$disabledCancel()&&this.state.$formMode()=="idle");$disabledTable=v(()=>this.state.$formMode()=="edit");$formMode=this.state.$formMode.asReadonly();ref;dialogOptions={modal:!0,styleClass:"w-11/12 md:w-5/12"};init(){this.setSpinner(),this.populateList(),this.generateCategory(),this.generateMetric()}setSpinner(){j(this.state.$loading).subscribe(e=>e?this.spinnerService.show():this.spinnerService.hide())}populateList(){this.state.$dataLoading.set(!0);let e={wrapper:this.$filter(),pagingInfo:this.state.$pagingInfo(),totalRowCount:this.state.$totalRowCount()};this.attitudeSkillService.findByCriteriaPaginated(e).subscribe(t=>{t.status&&(this.state.$pagingInfo.set(t.object.pagingInfo||new Z),this.state.$dataList.set(t.object.dataList||[]),this.state.$totalRowCount.set(t.object.totalRowCount||0)),this.state.$dataLoading.set(!1)})}onLazyLoad(e){this.populateList()}generateCategory(){let e=[];this.attitudeSkillService.getCategory().subscribe(t=>{t.status&&t.object.map(o=>{e.push({value:o.id,label:o.name})})}),this.state.$optionsCategory.set(e)}generateMetric(){let e=[],t=[];this.attitudeSkillService.getMetric().subscribe(o=>{o.status&&o.object.map(s=>{e.push({value:s.id,label:s.name}),t.push(s)})}),this.state.$optionsMetricType.set(e),this.state.$metricList.set(t)}resetState(){this.state.$dataList.set([]),this.state.$dataLoading.set(!1),this.state.$selectedData.set(null),this.state.$loading.set(!1),this.state.$searchText.set(""),this.state.$searchBtnClickEvent.set(!1)}onSearchBtnClicked(e){this.state.$searchText.set(e),this.populateList()}onRefreshSearchClicked(){this.state.$searchText.set(""),this.state.$searchBtnClickEvent.set(!1),this.populateList()}onAddIndicator(){this.resetState(),this.state.$formMode.set("add")}editAction(e){this.state.$selectedData.set(e),this.state.$formMode.set("edit")}onSaveFormAdd(e){this.attitudeSkillService.saveIndicator(e).subscribe(t=>{t.status?(this.confirmDialog.confirm({message:`Berhasil ${this.state.$formMode()=="add"?"menambahkan":"update"} data indicator!`,header:"Success",key:"ok",icon:"pi pi-check-circle",accept:()=>this.state.$formMode.set("idle")}),this.populateList()):this.messageService.add({severity:"error",summary:"Error",detail:`Failed to ${this.state.$formMode()=="add"?"save":"update"} data.`})},t=>{this.messageService.add({severity:"warn",summary:"Perhatian",detail:`Error ${this.state.$formMode()=="add"?"save":"update"} data.`})})}onCancelFormAdd(){this.resetState(),this.state.$formMode.set("idle")}deleteAction(e){this.state.$selectedData.set(e),this.confirmationService.confirm({header:"Konfirmasi",message:"Apakah Anda yakin ingin menghapus indicator ini?",accept:()=>{this.attitudeSkillService.deleteIndicator(e.id).subscribe(t=>{if(t.status){let o=`Hapus data ${this.$selectedData()?.indicator} berhasil!`;this.messageService.add({severity:"success",summary:"Success",detail:o}),this.state.$formMode.set("idle"),this.state.$selectedData.set(null),this.populateList()}else this.messageService.add({severity:"error",summary:"Error",detail:t.message});this.populateList()})},reject:()=>{}})}static \u0275fac=function(t){return new(t||i)(g(yt),g(q),g(St),g(Y),g(Y))};static \u0275prov=M({token:i,factory:i.\u0275fac})};var K=class i{attitudeSkillStore=y(f);search=this.attitudeSkillStore.$searchText();searchForm=new A({search:new S({value:"",disabled:!1})});tempSearch="";constructor(){this.onSearchChanges()}onSearchChanges(){this.searchForm.controls.search.valueChanges.subscribe(e=>{this.tempSearch=e})}onRefreshSearch(){this.searchForm.controls.search.setValue(""),this.attitudeSkillStore.onRefreshSearchClicked()}onButtonClicked(){this.attitudeSkillStore.onSearchBtnClicked(this.tempSearch)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["app-attitude-skill-search"]],standalone:!0,features:[C],decls:10,vars:1,consts:[[1,"mb-2"],[1,"grid","grid-cols-8","grid-flow-rows","gap-2",2,"align-items","center",3,"formGroup"],[1,"col-span-1","md:col-span-1"],[1,"col-span-8","md:col-span-7"],["pInputText","","formControlName","search","name","search"],["icon","pi pi-search",1,"w-full","!h-full",3,"click"],["icon","pi pi-refresh","severity","info",1,"w-full","!h-full",3,"click"]],template:function(t,o){t&1&&(n(0,"div",0)(1,"div",1)(2,"span",2),m(3,"Search Indicator: "),a(),n(4,"p-inputgroup",3),c(5,"input",4),n(6,"p-inputgroup-addon")(7,"p-button",5),u("click",function(){return o.onButtonClicked()}),a()(),n(8,"p-inputgroup-addon")(9,"p-button",6),u("click",function(){return o.onRefreshSearch()}),a()()()()()),t&2&&(r(),d("formGroup",o.searchForm))},dependencies:[k,B,O,G,H,$,$t,At,V,z]})};var Dt=()=>[5,10,20];function Et(i,e){if(i&1&&(n(0,"th",10),m(1),a()),i&2){let t=e.$implicit;r(),L(" ",t.header," ")}}function Pt(i,e){if(i&1&&(n(0,"tr"),_(1,Et,2,1,"th",9),a()),i&2){let t=e.$implicit;r(),d("ngForOf",t)}}function jt(i,e){if(i&1&&(n(0,"td"),m(1),a()),i&2){let t=p().$implicit,o=p().rowIndex;T(t.class_td),r(),L(" ",o+1," ")}}function Nt(i,e){if(i&1&&(n(0,"td"),c(1,"div",13),a()),i&2){let t=p().$implicit,o=p().$implicit;T(t.class_td),r(),d("outerHTML",t.template(o[t.field]),et)}}function Bt(i,e){if(i&1){let t=W();n(0,"td")(1,"p-button",14),u("click",function(){w(t);let s=p(2).$implicit,h=p();return x(h.attitudeSkillStore.editAction(s))}),a(),n(2,"p-button",15),u("click",function(){w(t);let s=p(2).$implicit,h=p();return x(h.attitudeSkillStore.deleteAction(s))}),a()()}if(i&2){let t=p().$implicit;T(t.class_td)}}function Ot(i,e){if(i&1&&(n(0,"td"),m(1),a()),i&2){let t=p().$implicit,o=p().$implicit;T(t.class_td),r(),L(" ",o[t.field].name?o[t.field].name:o[t.field]," ")}}function Gt(i,e){if(i&1&&_(0,jt,2,3,"td",12)(1,Nt,2,3,"td",12)(2,Bt,3,2,"td",12)(3,Ot,2,3,"td",12),i&2){let t,o=e.$implicit;F((t=o.type)==="number"?0:t==="custom"?1:t==="action"?2:3)}}function Vt(i,e){if(i&1&&(n(0,"tr",11),nt(1,Gt,4,1,null,null,at),a()),i&2){let t=e.$implicit,o=e.columns;d("pSelectableRow",t),r(),rt(o)}}function zt(i,e){if(i&1&&(n(0,"tr")(1,"td",16),m(2,"Data Kosong"),a()()),i&2){let t=p();r(),ot("colspan",t.attitudeSkillStore.$cols().length)}}var J=class i{attitudeSkillStore=y(f);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["app-attitude-skill-list"]],standalone:!0,features:[C],decls:13,vars:12,consts:[["dt",""],["header",""],["body",""],["emptymessage",""],[1,"card","grid","gap-2"],[1,"grid","grid-cols-4","grid-flow-rows","gap-2"],["icon","pi pi-plus","label","Add Indicator","styleClass","p-button-contrast w-full !h-full",1,"col-start-4","col-end-5",3,"click"],["showGridlines","",3,"onLazyLoad","columns","value","loading","paginator","rows","rowsPerPageOptions","paginatorDropdownAppendTo","lazy","totalRecords"],[3,"blocked","target"],["class","!text-center",4,"ngFor","ngForOf"],[1,"!text-center"],[3,"pSelectableRow"],[3,"class"],[3,"outerHTML"],["styleClass","p-button-info","icon","pi pi-pencil","pTooltip","Edit Data","tooltipPosition","bottom",3,"click"],["styleClass","p-button-danger","icon","pi pi-trash","pTooltip","Hapus Data","tooltipPosition","bottom",3,"click"],[1,"!text-center","w-full"]],template:function(t,o){if(t&1){let s=W();n(0,"div",4),c(1,"app-attitude-skill-search"),n(2,"div",5)(3,"p-button",6),u("click",function(){return w(s),x(o.attitudeSkillStore.onAddIndicator())}),a()(),n(4,"p-table",7,0),u("onLazyLoad",function(It){return w(s),x(o.attitudeSkillStore.onLazyLoad(It))}),_(6,Pt,2,1,"ng-template",null,1,E)(8,Vt,3,1,"ng-template",null,2,E)(10,zt,3,1,"ng-template",null,3,E),a()(),c(12,"p-blockui",8)}if(t&2){let s=X(5),h=X(9);r(4),d("columns",o.attitudeSkillStore.$cols())("value",o.attitudeSkillStore.$dataList())("loading",o.attitudeSkillStore.$dataLoading())("paginator",!0)("rows",5)("rowsPerPageOptions",D(11,Dt))("paginatorDropdownAppendTo",h)("lazy",!0)("totalRecords",o.attitudeSkillStore.$totalRowCount()),r(8),d("blocked",o.attitudeSkillStore.$disabledTable())("target",s)}},dependencies:[k,$,Ct,kt,P,vt,ht,U,K]})};function Ut(i,e){if(i&1&&(n(0,"span",4),m(1),a()),i&2){let t=e.$implicit;r(),lt(" ",t.name," = ",t.description," ")}}var Q=class i{constructor(e){this.router=e;this.selectedDataSubscription=j(this.attitudeSkillStore.$selectedData).subscribe(t=>{this.indicatorForm.patchValue({category:this.attitudeSkillStore.$selectedData()?.attitudeSkillCategory?.id,indicator:this.attitudeSkillStore.$selectedData()?.indicator,metricType:this.attitudeSkillStore.$selectedData()?.metricType?.id})})}attitudeSkillStore=y(f);$header=v(()=>`Form ${this.attitudeSkillStore.$formMode()} Indicator`);indicatorForm=new A({category:new S({value:null,disabled:!1}),indicator:new S({value:"",disabled:!1}),metricType:new S({value:null,disabled:!1})});selectedDataSubscription;onSave(){let e={attitudeSkillCategoryId:this.indicatorForm.get("category")?.value,metricTypeId:this.indicatorForm.get("metricType")?.value,indicator:this.indicatorForm.get("indicator")?.value};this.attitudeSkillStore.onSaveFormAdd(e)}ngOnDestroy(){this.indicatorForm.reset(),this.selectedDataSubscription.unsubscribe()}static \u0275fac=function(t){return new(t||i)(it(ft))};static \u0275cmp=b({type:i,selectors:[["app-add-indicator"]],standalone:!0,features:[C],decls:25,vars:8,consts:[[1,"blue",3,"header"],[1,"mt-6","w-full","flex","flex-col","space-y-2"],[1,"flex","flex-col","space-y-1","mb-2",3,"formGroup"],[1,"grid","grid-cols-12","gap-2","items-center","pb-4"],[1,"col-span-12","md:col-span-2"],["formControlName","category","name","category","styleClass","col-span-12 md:col-span-7","appendTo","body",3,"options"],["pInputText","","formControlName","indicator","name","indicator",1,"col-span-8","md:col-span-7","bg-gray-50","border","border-gray-300","text-gray-900","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["formControlName","metricType","name","metricType","styleClass","col-span-12 md:col-span-7","appendTo","body",3,"options"],[1,"pt-10","grid","grid-flow-row"],[1,"col-span-12","md:col-span-1"],["class","col-span-12 md:col-span-2",4,"ngFor","ngForOf"],[1,"mt-4"],[1,"flex","justify-end","space-x-1","mt-6"],["label","Save","icon","pi pi-check","severity","success",3,"click","disabled"],["label","Cancel","icon","pi pi-sign-out","severity","danger",3,"click"]],template:function(t,o){t&1&&(n(0,"p-panel",0),dt(1,"titlecase"),n(2,"div",1)(3,"div",2)(4,"div",3)(5,"label",4),m(6,"Category:"),a(),c(7,"p-dropdown",5),a(),n(8,"div",3)(9,"label",4),m(10,"Indicators:"),a(),c(11,"input",6),a(),n(12,"div",3)(13,"label",4),m(14,"Type of Metrics:"),a(),c(15,"p-dropdown",7),a(),n(16,"div",8)(17,"label",9)(18,"b"),m(19,"*Notes:"),a()(),_(20,Ut,2,2,"span",10),a()(),n(21,"div",11)(22,"div",12)(23,"p-button",13),u("click",function(){return o.onSave()}),a(),n(24,"p-button",14),u("click",function(){return o.attitudeSkillStore.onCancelFormAdd()}),a()()()()()),t&2&&(d("header",ct(1,6,o.$header())),r(3),d("formGroup",o.indicatorForm),r(4),d("options",o.attitudeSkillStore.$optionsCategory()),r(8),d("options",o.attitudeSkillStore.$optionsMetricType()),r(5),d("ngForOf",o.attitudeSkillStore.$metricList()),r(3),d("disabled",o.attitudeSkillStore.$disabledSave()))},dependencies:[mt,P,pt,k,N,B,O,G,H,$,wt,V,z,U,_t,gt]})};var qt=()=>["idle"];function Kt(i,e){i&1&&(n(0,"p-panel",1)(1,"div",2),c(2,"app-attitude-skill-list"),a()())}function Jt(i,e){i&1&&c(0,"app-add-indicator")}var Tt=class i{attitudeSkillStore=y(f);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=b({type:i,selectors:[["app-attitude-skill-reference"]],standalone:!0,features:[st([f]),C],decls:3,vars:2,consts:[[1,"w-full"],["header","Attitude Reference",1,"blue"],[1,"mt-6"]],template:function(t,o){t&1&&(n(0,"div",0),_(1,Kt,3,0,"p-panel",1)(2,Jt,1,0,"app-add-indicator"),a()),t&2&&(r(),F(D(1,qt).includes(o.attitudeSkillStore.$formMode())?1:2))},dependencies:[k,N,J,Q]})};export{Tt as AttitudeSkillReferenceComponent};
