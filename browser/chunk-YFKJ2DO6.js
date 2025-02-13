import{a as vt}from"./chunk-D2MTGNJS.js";import{A as yt,C as Ct,D as V,O as k,g as ut,j as R,o as gt,p as _t,u as bt}from"./chunk-TS4LB2JZ.js";import{o as $,p as St,q as G,u as kt}from"./chunk-NDG5SCMG.js";import"./chunk-4YRY4IP2.js";import"./chunk-ATB2IEIN.js";import"./chunk-VP2SXEXU.js";import{a as W}from"./chunk-OQKDZ6KP.js";import"./chunk-CH6NKNWW.js";import{b as E,e as N,f as P,g as w,h as S,k as j,l as B,p as ht}from"./chunk-FLY6AGIF.js";import{m as pt}from"./chunk-NXN4P4DR.js";import{a as O}from"./chunk-QASMVVIP.js";import{ma as Q,qa as mt,xa as ft}from"./chunk-UHXCHP4M.js";import{$b as y,Ab as at,Bb as n,Cb as a,Db as c,Hb as q,Ib as u,Jb as p,Qc as D,Sb as J,Tb as m,Ua as Z,Vb as F,Vc as dt,Wb as nt,Xc as ct,Ya as r,Z as Y,Za as tt,_b as rt,ac as I,ca as v,da as g,fb as l,ha as _,kc as lt,lc as st,nc as L,ob as b,qb as et,ra as A,rb as d,sa as x,vb as T,wb as M,xb as it,zb as ot,zc as C}from"./chunk-QSF35MWG.js";var f=class i{constructor(e,t,o,s,h){this.spinnerService=e;this.attitudeSkillService=t;this.messageService=o;this.confirmationService=s;this.confirmDialog=h;this.init()}state={$dataList:l([]),$dataLoading:l(!1),$pagingInfo:l(new W),$totalRowCount:l(1),$selectedData:l(null),$selectedVerified:l(!0),$loading:l(!1),$disabledTable:l(!1),$searchText:l(""),$searchBtnClickEvent:l(!1),$optionsCategory:l([]),$optionsMetricType:l([]),$metricList:l([]),$disabledUpdate:l(!0),$disabledSave:l(!0),$disabledCancel:l(!0),$formMode:l("idle")};$dataList=this.state.$dataList.asReadonly();$dataLoading=this.state.$dataLoading.asReadonly();$selectedData=this.state.$selectedData.asReadonly();$cols=l([{header:"No",class_td:"!text-center",type:"number"},{field:"attitudeSkillCategory",header:"Category",class_td:"!text-center"},{field:"indicator",header:"Indicators",class_td:"!text-center"},{field:"metricType",header:"Metrics",class_td:"!text-center"},{field:"action",header:"Actions",class_td:"flex justify-center items-center gap-2",type:"action"}]).asReadonly();$pagingInfo=this.state.$pagingInfo.asReadonly();$totalRowCount=this.state.$totalRowCount.asReadonly();$searchText=this.state.$searchText.asReadonly();$filter=C(()=>{let e=null;e={};let t;return t=this.$searchText()??"",e.indicator=t,e});indicatorAttitudeForm=l(new w({category:new S({value:null,disabled:!0}),indicator:new S({value:null,disabled:!0}),metricType:new S({value:null,disabled:!0})}));$optionsCategory=this.state.$optionsCategory.asReadonly();$optionsMetricType=this.state.$optionsMetricType.asReadonly();$metricList=this.state.$metricList.asReadonly();$disabledSave=C(()=>this.state.$disabledSave()&&this.state.$formMode()=="idle");$disabledCancel=C(()=>this.state.$disabledCancel()&&this.state.$formMode()=="idle");$disabledTable=C(()=>this.state.$formMode()=="edit");$formMode=this.state.$formMode.asReadonly();ref;dialogOptions={modal:!0,styleClass:"w-11/12 md:w-5/12"};init(){this.setSpinner(),this.populateList(),this.generateCategory(),this.generateMetric()}setSpinner(){O(this.state.$loading).subscribe(e=>e?this.spinnerService.show():this.spinnerService.hide())}populateList(){this.state.$dataLoading.set(!0);let e={wrapper:this.$filter(),pagingInfo:this.state.$pagingInfo(),totalRowCount:this.state.$totalRowCount()};this.attitudeSkillService.findByCriteriaPaginated(e).subscribe(t=>{t.status&&(this.state.$pagingInfo.set(t.object.pagingInfo||new W),this.state.$dataList.set(t.object.dataList||[]),this.state.$totalRowCount.set(t.object.totalRowCount||0)),this.state.$dataLoading.set(!1)})}onLazyLoad(e){this.populateList()}generateCategory(){let e=[];this.attitudeSkillService.getCategory().subscribe(t=>{t.status&&t.object.map(o=>{e.push({value:o.id,label:o.name})})}),this.state.$optionsCategory.set(e)}generateMetric(){let e=[],t=[];this.attitudeSkillService.getMetric().subscribe(o=>{o.status&&o.object.map(s=>{e.push({value:s.id,label:s.name}),t.push(s)})}),this.state.$optionsMetricType.set(e),this.state.$metricList.set(t)}resetState(){this.state.$dataList.set([]),this.state.$dataLoading.set(!1),this.state.$selectedData.set(null),this.state.$loading.set(!1),this.state.$searchText.set(""),this.state.$searchBtnClickEvent.set(!1)}onSearchBtnClicked(e){this.state.$searchText.set(e),this.populateList()}onRefreshSearchClicked(){this.state.$searchText.set(""),this.state.$searchBtnClickEvent.set(!1),this.populateList()}onAddIndicator(){this.resetState(),this.state.$formMode.set("add")}editAction(e){this.state.$selectedData.set(e),this.state.$formMode.set("edit")}onSaveFormAdd(e){this.attitudeSkillService.saveIndicator(e).subscribe(t=>{t.status?(this.confirmDialog.confirm({message:`Berhasil ${this.state.$formMode()=="add"?"menambahkan":"update"} data indicator!`,header:"Success",key:"ok",icon:"pi pi-check-circle",accept:()=>this.state.$formMode.set("idle")}),this.populateList()):this.messageService.add({severity:"error",summary:"Error",detail:`Failed to ${this.state.$formMode()=="add"?"save":"update"} data.`})},t=>{this.messageService.add({severity:"warn",summary:"Perhatian",detail:`Error ${this.state.$formMode()=="add"?"save":"update"} data.`})})}onCancelFormAdd(){this.resetState(),this.state.$formMode.set("idle")}deleteAction(e){this.state.$selectedData.set(e),this.confirmationService.confirm({header:"Konfirmasi",message:"Apakah Anda yakin ingin menghapus indicator ini?",accept:()=>{this.attitudeSkillService.deleteIndicator(e.id).subscribe(t=>{if(t.status){let o=`Hapus data ${this.$selectedData()?.indicator} berhasil!`;this.messageService.add({severity:"success",summary:"Success",detail:o}),this.state.$formMode.set("idle"),this.state.$selectedData.set(null),this.populateList()}else this.messageService.add({severity:"error",summary:"Error",detail:t.message});this.populateList()})},reject:()=>{}})}static \u0275fac=function(t){return new(t||i)(v(ft),v(vt),v(mt),v(Q),v(Q))};static \u0275prov=Y({token:i,factory:i.\u0275fac})};var H=class i{attitudeSkillStore=g(f);search=this.attitudeSkillStore.$searchText();searchForm=new w({search:new S({value:"",disabled:!1})});tempSearch="";constructor(){this.onSearchChanges()}onSearchChanges(){this.searchForm.controls.search.valueChanges.subscribe(e=>{this.tempSearch=e})}onRefreshSearch(){this.searchForm.controls.search.setValue(""),this.attitudeSkillStore.onRefreshSearchClicked()}onButtonClicked(){this.attitudeSkillStore.onSearchBtnClicked(this.tempSearch)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["app-attitude-skill-search"]],standalone:!0,features:[y],decls:10,vars:1,consts:[[1,"mb-2"],[1,"grid","grid-cols-8","grid-flow-rows","gap-2",2,"align-items","center",3,"formGroup"],[1,"col-span-1","md:col-span-1"],[1,"col-span-8","md:col-span-7"],["pInputText","","formControlName","search","name","search"],["icon","pi pi-search",1,"w-full","!h-full",3,"click"],["icon","pi pi-refresh","severity","info",1,"w-full","!h-full",3,"click"]],template:function(t,o){t&1&&(n(0,"div",0)(1,"div",1)(2,"span",2),m(3,"Search Indicator: "),a(),n(4,"p-inputgroup",3),c(5,"input",4),n(6,"p-inputgroup-addon")(7,"p-button",5),u("click",function(){return o.onButtonClicked()}),a()(),n(8,"p-inputgroup-addon")(9,"p-button",6),u("click",function(){return o.onRefreshSearch()}),a()()()()()),t&2&&(r(),d("formGroup",o.searchForm))},dependencies:[k,E,N,P,G,$,yt,kt,j,B]})};var Ft=()=>[5,10,20];function It(i,e){if(i&1&&(n(0,"th",10),m(1),a()),i&2){let t=e.$implicit;r(),F(" ",t.header," ")}}function Lt(i,e){if(i&1&&(n(0,"tr"),b(1,It,2,1,"th",9),a()),i&2){let t=e.$implicit;r(),d("ngForOf",t)}}function Dt(i,e){if(i&1&&(n(0,"td"),m(1),a()),i&2){let t=p().$implicit,o=p().rowIndex;T(t.class_td),r(),F(" ",o+1," ")}}function Rt(i,e){if(i&1&&(n(0,"td"),c(1,"div",13),a()),i&2){let t=p().$implicit,o=p().$implicit;T(t.class_td),r(),d("outerHTML",t.template(o[t.field]),Z)}}function Et(i,e){if(i&1){let t=q();n(0,"td")(1,"p-button",14),u("click",function(){A(t);let s=p(2).$implicit,h=p();return x(h.attitudeSkillStore.editAction(s))}),a(),n(2,"p-button",15),u("click",function(){A(t);let s=p(2).$implicit,h=p();return x(h.attitudeSkillStore.deleteAction(s))}),a()()}if(i&2){let t=p().$implicit;T(t.class_td)}}function Nt(i,e){if(i&1&&(n(0,"td"),m(1),a()),i&2){let t=p().$implicit,o=p().$implicit;T(t.class_td),r(),F(" ",o[t.field].name?o[t.field].name:o[t.field]," ")}}function Pt(i,e){if(i&1&&b(0,Dt,2,3,"td",12)(1,Rt,2,3,"td",12)(2,Et,3,2,"td",12)(3,Nt,2,3,"td",12),i&2){let t,o=e.$implicit;M((t=o.type)==="number"?0:t==="custom"?1:t==="action"?2:3)}}function jt(i,e){if(i&1&&(n(0,"tr",11),ot(1,Pt,4,1,null,null,it),a()),i&2){let t=e.$implicit,o=e.columns;d("pSelectableRow",t),r(),at(o)}}function Bt(i,e){if(i&1&&(n(0,"tr")(1,"td",16),m(2,"Data Kosong"),a()()),i&2){let t=p();r(),et("colspan",t.attitudeSkillStore.$cols().length)}}var K=class i{attitudeSkillStore=g(f);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["app-attitude-skill-list"]],standalone:!0,features:[y],decls:13,vars:12,consts:[["dt",""],["header",""],["body",""],["emptymessage",""],[1,"card","grid","gap-2"],[1,"grid","grid-cols-4","grid-flow-rows","gap-2"],["icon","pi pi-plus","label","Add Indicator","styleClass","p-button-contrast w-full !h-full",1,"col-start-4","col-end-5",3,"click"],["showGridlines","",3,"onLazyLoad","columns","value","loading","paginator","rows","rowsPerPageOptions","paginatorDropdownAppendTo","lazy","totalRecords"],[3,"blocked","target"],["class","!text-center",4,"ngFor","ngForOf"],[1,"!text-center"],[3,"pSelectableRow"],[3,"class"],[3,"outerHTML"],["styleClass","p-button-info","icon","pi pi-pencil","pTooltip","Edit Data","tooltipPosition","bottom",3,"click"],["styleClass","p-button-danger","icon","pi pi-trash","pTooltip","Hapus Data","tooltipPosition","bottom",3,"click"],[1,"!text-center","w-full"]],template:function(t,o){if(t&1){let s=q();n(0,"div",4),c(1,"app-attitude-skill-search"),n(2,"div",5)(3,"p-button",6),u("click",function(){return A(s),x(o.attitudeSkillStore.onAddIndicator())}),a()(),n(4,"p-table",7,0),u("onLazyLoad",function(At){return A(s),x(o.attitudeSkillStore.onLazyLoad(At))}),b(6,Lt,2,1,"ng-template",null,1,L)(8,jt,3,1,"ng-template",null,2,L)(10,Bt,3,1,"ng-template",null,3,L),a()(),c(12,"p-blockui",8)}if(t&2){let s=J(5),h=J(9);r(4),d("columns",o.attitudeSkillStore.$cols())("value",o.attitudeSkillStore.$dataList())("loading",o.attitudeSkillStore.$dataLoading())("paginator",!0)("rows",5)("rowsPerPageOptions",I(11,Ft))("paginatorDropdownAppendTo",h)("lazy",!0)("totalRecords",o.attitudeSkillStore.$totalRowCount()),r(8),d("blocked",o.attitudeSkillStore.$disabledTable())("target",s)}},dependencies:[k,$,gt,_t,D,bt,ut,V,H]})};function Vt(i,e){if(i&1&&(n(0,"span",4),m(1),a()),i&2){let t=e.$implicit;r(),nt(" ",t.name," = ",t.description," ")}}var U=class i{constructor(e){this.router=e;this.selectedDataSubscription=O(this.attitudeSkillStore.$selectedData).subscribe(t=>{this.indicatorForm.patchValue({category:this.attitudeSkillStore.$selectedData()?.attitudeSkillCategory?.id,indicator:this.attitudeSkillStore.$selectedData()?.indicator,metricType:this.attitudeSkillStore.$selectedData()?.metricType?.id})})}attitudeSkillStore=g(f);$header=C(()=>`Form ${this.attitudeSkillStore.$formMode()} Indicator`);indicatorForm=new w({category:new S({value:null,disabled:!1}),indicator:new S({value:"",disabled:!1}),metricType:new S({value:null,disabled:!1})});selectedDataSubscription;onSave(){let e={attitudeSkillCategoryId:this.indicatorForm.get("category")?.value,metricTypeId:this.indicatorForm.get("metricType")?.value,indicator:this.indicatorForm.get("indicator")?.value};this.attitudeSkillStore.onSaveFormAdd(e)}ngOnDestroy(){this.indicatorForm.reset(),this.selectedDataSubscription.unsubscribe()}static \u0275fac=function(t){return new(t||i)(tt(pt))};static \u0275cmp=_({type:i,selectors:[["app-add-indicator"]],standalone:!0,features:[y],decls:25,vars:8,consts:[[1,"blue",3,"header"],[1,"mt-6","w-full","flex","flex-col","space-y-2"],[1,"flex","flex-col","space-y-1","mb-2",3,"formGroup"],[1,"grid","grid-cols-12","gap-2","items-center","pb-4"],[1,"col-span-12","md:col-span-2"],["formControlName","category","name","category","styleClass","col-span-12 md:col-span-7","appendTo","body",3,"options"],["pInputText","","formControlName","indicator","name","indicator",1,"col-span-8","md:col-span-7","bg-gray-50","border","border-gray-300","text-gray-900","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["formControlName","metricType","name","metricType","styleClass","col-span-12 md:col-span-7","appendTo","body",3,"options"],[1,"pt-10","grid","grid-flow-row"],[1,"col-span-12","md:col-span-1"],["class","col-span-12 md:col-span-2",4,"ngFor","ngForOf"],[1,"mt-4"],[1,"flex","justify-end","space-x-1","mt-6"],["label","Save","icon","pi pi-check","severity","success",3,"click","disabled"],["label","Cancel","icon","pi pi-sign-out","severity","danger",3,"click"]],template:function(t,o){t&1&&(n(0,"p-panel",0),lt(1,"titlecase"),n(2,"div",1)(3,"div",2)(4,"div",3)(5,"label",4),m(6,"Category:"),a(),c(7,"p-dropdown",5),a(),n(8,"div",3)(9,"label",4),m(10,"Indicators:"),a(),c(11,"input",6),a(),n(12,"div",3)(13,"label",4),m(14,"Type of Metrics:"),a(),c(15,"p-dropdown",7),a(),n(16,"div",8)(17,"label",9)(18,"b"),m(19,"*Notes:"),a()(),b(20,Vt,2,2,"span",10),a()(),n(21,"div",11)(22,"div",12)(23,"p-button",13),u("click",function(){return o.onSave()}),a(),n(24,"p-button",14),u("click",function(){return o.attitudeSkillStore.onCancelFormAdd()}),a()()()()()),t&2&&(d("header",st(1,6,o.$header())),r(3),d("formGroup",o.indicatorForm),r(4),d("options",o.attitudeSkillStore.$optionsCategory()),r(8),d("options",o.attitudeSkillStore.$optionsMetricType()),r(5),d("ngForOf",o.attitudeSkillStore.$metricList()),r(3),d("disabled",o.attitudeSkillStore.$disabledSave()))},dependencies:[ct,D,dt,k,R,E,N,P,G,$,Ct,j,B,V,ht,St]})};var Ot=()=>["idle"];function zt(i,e){i&1&&(n(0,"p-panel",1)(1,"div",2),c(2,"app-attitude-skill-list"),a()())}function Ht(i,e){i&1&&c(0,"app-add-indicator")}var wt=class i{attitudeSkillStore=g(f);static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["app-attitude-skill-reference"]],standalone:!0,features:[rt([f]),y],decls:3,vars:2,consts:[[1,"w-full"],["header","Attitude Reference",1,"blue"],[1,"mt-6"]],template:function(t,o){t&1&&(n(0,"div",0),b(1,zt,3,0,"p-panel",1)(2,Ht,1,0,"app-add-indicator"),a()),t&2&&(r(),M(I(1,Ot).includes(o.attitudeSkillStore.$formMode())?1:2))},dependencies:[k,R,K,U]})};export{wt as AttitudeSkillReferenceComponent};
