import{a as re}from"./chunk-GLYHRW3F.js";import{g as Re}from"./chunk-7U4M7FLE.js";import{a as oe,b as se}from"./chunk-57V25YHT.js";import{A as Ve,E as C,g as Te,l as Q,m as Le,o as Me,q as Ae,r as Ee,u as Ne,y as Ie,z as je}from"./chunk-3P5LAZ2G.js";import{m as R,o as ie,s as Oe}from"./chunk-IR44L2GU.js";import"./chunk-4YRY4IP2.js";import"./chunk-6EZYCW4Y.js";import"./chunk-MUG45JXB.js";import{a as fe}from"./chunk-OQKDZ6KP.js";import"./chunk-CH6NKNWW.js";import{b as X,e as N,f as Y,g as Z,h as I,i as Fe,k as ee,l as te}from"./chunk-PT3WFG3U.js";import"./chunk-MQPYQJ3G.js";import{a as V}from"./chunk-6SLXRUYG.js";import{ka as xe,oa as we,sa as De,va as ke}from"./chunk-RKZRWIXU.js";import{m as q,t as J}from"./chunk-O2IJJLQI.js";import{A as ge,Ab as u,Bb as l,G as _e,H as be,I as Ce,Kb as ue,La as ve,Lb as g,Nb as k,O as Se,Pa as a,Qa as de,Sb as Pe,Tb as b,U as ye,Ub as K,W as pe,Ya as c,_ as $e,a as x,b as M,da as w,ea as S,eb as y,ec as W,gb as A,hb as p,ia as _,lb as D,mb as T,nb as U,pb as z,qb as H,rb as n,sa as v,sb as r,ta as P,tb as d,uc as $,v as ce,xb as E}from"./chunk-ZIXU4GN5.js";var O=class i{rolePermissionStore=S(h);ref=S(oe);roleForm=new Z({name:new I({value:null,disabled:!0}),notes:new I({value:null,disabled:!0})});selectedDataSubscription;formModeSubscribtion;constructor(){this.selectedDataSubscription=V(this.rolePermissionStore.roles.$selectedData).subscribe(t=>{this.roleForm.patchValue({name:this.rolePermissionStore.roles.$selectedData()?.name,notes:this.rolePermissionStore.roles.$selectedData()?.notes})}),this.formModeSubscribtion=V(this.rolePermissionStore.roles.$formMode).subscribe(t=>{switch(t){case"add":this.roleForm.enable();break;case"edit":this.roleForm.enable();break;case"idle":this.roleForm.disable();break;default:break}})}cancel(){this.rolePermissionStore.cancelAction(),this.ref.close()}save(){this.rolePermissionStore.saveAction(this.roleForm.value)?.subscribe(t=>{t.status&&this.ref.close(t)})}ngOnDestroy(){this.roleForm.reset(),this.selectedDataSubscription.unsubscribe(),this.formModeSubscribtion.unsubscribe()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-role-crud"]],standalone:!0,features:[b],decls:13,vars:3,consts:[[1,"w-full","flex","flex-col","space-y-2"],[1,"flex","flex-col","space-y-1","mb-2",3,"formGroup"],[1,"grid","grid-cols-12","gap-2","items-center"],["for","name",1,"col-span-12","md:col-span-2"],["pInputText","","formControlName","name","name","name",1,"col-span-8","md:col-span-10","bg-gray-50","border","border-gray-300","text-gray-900","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["for","notes",1,"col-span-12","md:col-span-2"],["pInputText","","formControlName","notes","name","notes",1,"col-span-8","md:col-span-10","bg-gray-50","border","border-gray-300","text-gray-900","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[1,"flex","justify-end","space-x-1"],["label","Save",3,"click","disabled"],["label","Cancel","styleClass","p-button-danger",3,"click","disabled"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),g(4,"Role Name"),r(),d(5,"input",4),r(),n(6,"div",2)(7,"label",5),g(8,"Note"),r(),d(9,"input",6),r()(),n(10,"div",7)(11,"p-button",8),u("click",function(){return o.save()}),r(),n(12,"p-button",9),u("click",function(){return o.cancel()}),r()()()),e&2&&(a(),p("formGroup",o.roleForm),a(10),p("disabled",o.rolePermissionStore.roles.$disabledSave()),a(),p("disabled",o.rolePermissionStore.roles.$disabledCancel()))},dependencies:[C,X,N,Y,ie,R,ee,te]})};var h=class i{constructor(t,e,o,s,m,f){this.spinnerService=t;this.rolePermissionService=e;this.dialogService=o;this.messageService=s;this.router=m;this.confirmationService=f;this.init()}state={roles:{$dataList:c([]),$dataLoading:c(!1),$pagingInfo:c(new fe),$totalRowCount:c(1),$selectedData:c(null),$selectedVerified:c(!0),$disabledTable:c(!1),$optionsCategory:c([]),$selectedCategory:c(""),$searchText:c(""),$searchBtnClickEvent:c(!1),$optionsRole:c([]),$disabledUpdate:c(!0),$disabledSave:c(!0),$disabledCancel:c(!0)},permissions:{$colsCheckbox:c([{field:"list",header:"List",viewCheckbox:"islist"},{field:"view",header:"View",viewCheckbox:"isview"},{field:"add",header:"Add",viewCheckbox:"isadd"},{field:"update",header:"Update",viewCheckbox:"isupdate"},{field:"delete",header:"Delete",viewCheckbox:"isdelete"},{field:"print",header:"Print",viewCheckbox:"isprint"}]),$permissionTypes:c(["LIST","VIEW","ADD","UPDATE","DELETE","PRINT"]),$listFilter:c([]),$dataList:c([]),$permissions:c([])},$loading:c(!1),$formMode:c("idle")};roles={$dataList:this.state.roles.$dataList.asReadonly(),$dataLoading:this.state.roles.$dataLoading.asReadonly(),$selectedData:this.state.roles.$selectedData.asReadonly(),$cols:c([{field:"no",header:"No",class_td:"!text-center !max-w-[50px]",type:"no"},{field:"name",header:"Role",class_td:"!text-center"},{field:"notes",header:"Note",class_td:"!text-center"},{field:"action",header:"Actions",class_td:"flex justify-center items-center gap-2",type:"action"}]).asReadonly(),$pagingInfo:this.state.roles.$pagingInfo.asReadonly(),$totalRowCount:this.state.roles.$totalRowCount.asReadonly(),$optionsCategory:this.state.roles.$optionsCategory.asReadonly(),$selectedCategory:this.state.roles.$selectedCategory.asReadonly(),$searchText:$(()=>this.roles.$selectedCategory()==="id"?parseInt(this.state.roles.$searchText()):this.state.roles.$searchText()),$filter:$(()=>{let t=null;return this.roles.$selectedCategory()&&(t={},t[this.roles.$selectedCategory()??""]=this.roles.$searchText()??""),t}),$disabledUpdate:$(()=>this.state.roles.$disabledUpdate()||this.state.$formMode()=="edit"),$disabledSave:$(()=>this.state.roles.$disabledSave()&&this.state.$formMode()=="idle"),$disabledCancel:$(()=>this.state.roles.$disabledCancel()&&this.state.$formMode()=="idle"),$disabledTable:$(()=>this.state.$formMode()=="edit"),$formMode:this.state.$formMode.asReadonly()};permissions={$permissionTypes:this.state.permissions.$permissionTypes.asReadonly(),$colsCheckbox:$(()=>this.state.permissions.$permissionTypes().map(t=>({field:t,header:t,viewCheckbox:`visible_${t}`}))),$dataList:this.state.permissions.$dataList.asReadonly(),$permissions:this.state.permissions.$permissions.asReadonly(),$listFilter:$(()=>this.buildTree(this.state.permissions.$dataList()))};ref;dialogOptions={modal:!0,styleClass:"w-11/12 md:w-5/12"};init(){this.setSpinner(),this.setSearchCategory(),this.populateList()}setSpinner(){V(this.state.$loading).subscribe(t=>t?this.spinnerService.show():this.spinnerService.hide())}populateList(){this.state.roles.$dataLoading.set(!0);let t={wrapper:this.roles.$filter(),pagingInfo:this.state.roles.$pagingInfo(),totalRowCount:this.state.roles.$totalRowCount()};this.rolePermissionService.listRoles(t).subscribe(e=>{e.status&&(this.state.roles.$pagingInfo.set(e.object.pagingInfo||new fe),this.state.roles.$dataList.set(e.object.dataList||[]),this.state.roles.$totalRowCount.set(e.object.totalRowCount||0)),this.state.roles.$dataLoading.set(!1)})}onLazyLoad(t){this.state.roles.$pagingInfo.set(M(x({},this.roles.$pagingInfo()),{currentPage:Math.floor(t.first/t.rows)+1,pageSize:t.rows})),this.populateList()}onSetSelected(t){this.state.roles.$selectedData.set(t)}setSearchCategory(){this.state.roles.$optionsCategory.set([{label:"Semua",value:null},{label:"Role",value:"name"},{label:"Note",value:"notes"}])}onSearchBtnClicked({category:t,search:e}){this.state.roles.$selectedCategory.set(t),t&&this.state.roles.$searchText.set(e),this.populateList()}deleteAction(t){this.state.roles.$selectedData.set(t),this.confirmationService.confirm({header:"Konfirmasi",message:"Apakah Anda yakin ingin menghapus data ini?",accept:()=>{this.rolePermissionService.deleteRole(t).subscribe(e=>{if(e.status){let o=`Hapus Role [${this.roles.$selectedData()?.name}] Berhasil!`;this.messageService.add({severity:"success",summary:"Success",detail:o}),this.state.$formMode.set("idle"),this.state.roles.$selectedData.set(null)}else this.messageService.add({severity:"error",summary:"Error",detail:e.message});this.populateList()})},reject:()=>{}})}setFormMode(t){this.state.$formMode.set(t)}addAction(){this.state.$formMode.set("add"),this.ref=this.dialogService.open(O,M(x({},this.dialogOptions),{header:"Add Role"})),this.onCloseDialogEvent()}editAction(t){this.state.roles.$selectedData.set(t),this.state.$formMode.set("edit"),this.ref=this.dialogService.open(O,M(x({},this.dialogOptions),{header:"Edit Role"})),this.onCloseDialogEvent()}onCloseDialogEvent(){this.ref?.onClose.subscribe(t=>{t&&this.populateList(),this.state.$formMode.set("idle")})}saveAction({name:t,notes:e}){if(this.spinnerService.setSpinnerStyle({"z-index":"9999"}),this.state.$loading.set(!0),!t)return this.messageService.add({severity:"error",summary:"Error",detail:"Nama Role harus diisi!"}),this.state.$loading.set(!1),ce({status:!1});if(!e)return this.messageService.add({severity:"error",summary:"Error",detail:"Note harus diisi!"}),this.state.$loading.set(!1),ce({status:!1});let o=M(x({},this.state.roles.$selectedData()),{name:t,notes:e});return be(100).pipe(Ce(()=>this.state.$formMode()!="idle"),ye(()=>_e(()=>this.state.$formMode()=="edit",this.rolePermissionService.editRole(o),this.rolePermissionService.addRole(o))),pe(s=>{if(s.status){let m=this.state.$formMode()=="edit"?"Edit Role Berhasil!":"Simpan Role Berhasil";this.messageService.add({severity:"success",summary:"Success",detail:m}),this.state.$formMode.set("idle"),this.state.roles.$selectedData.set(null)}else this.messageService.add({severity:"error",summary:"Error",detail:s.message});this.state.$loading.set(!1)}),Se(()=>{this.state.$loading.set(!1)}))}cancelAction(){this.state.$formMode.set("idle"),this.state.roles.$selectedData.set(null)}assignAction(t){this.state.roles.$selectedData.set(t),this.state.$formMode.set("assign"),console.log("assignAction",t)}backToRolePage(){this.state.roles.$selectedData.set(null),this.state.permissions.$dataList.set([]),this.state.permissions.$listFilter.set([]),this.state.permissions.$permissions.set([]),this.state.$formMode.set("idle")}loadPermissionData(){ge([this.rolePermissionService.getAllFeaturePermissions(),this.rolePermissionService.getAllMappingFeaturePermissions(this.roles.$selectedData()?.id??0)]).pipe(pe(([t,e])=>{t.status&&e.status&&(this.state.permissions.$dataList.set(t.object),this.state.permissions.$permissions.set(e.object))})).subscribe()}buildTree(t){let e=new Map;t.forEach(s=>{let m=`${s.feature.pathOrder}-${s.feature.name}`,f={};for(let L of this.permissions.$permissionTypes())f[`visible_${L}`]=s.permission.includes(L),f[L]=!1;let F={data:x({id:s.feature.id,feature:s.feature.name,featureAssign:!1},f),children:[],expanded:!0};e.set(m,F)}),this.state.permissions.$permissions().forEach(s=>{let m=Array.from(e.values()).find(f=>f.data.feature===s.featureName);m&&(m.data.featureAssign=!0,m.data[s.permissionName.split("_")[0]]=!0)});let o=[];return e.forEach((s,m)=>{let f=m.split("-")[0],F=f.substring(0,f.lastIndexOf("."));if(F){let L=Array.from(e.keys()).find(G=>G.startsWith(F));if(L){let G=e.get(L);G&&G.children?.push(s)}}else o.push(s)}),o}treeToList(t,e=[]){for(let o of t)e.push(o.data),o.children&&o.children.length>0&&this.treeToList(o.children,e);return e}setListFilterToMapFeature(){return M(x({},this.roles.$selectedData()),{featurePermissionMapping:[...this.treeToList(this.permissions.$listFilter()).filter(t=>t.featureAssign).map(t=>{let e=[],o=null;t.featureAssign&&(o=t.id);for(let s of this.permissions.$permissionTypes())t[s]&&(e=[...e,s]);return{featureId:o,permissionIds:e}})]})}assign(t,e,o){e.data[t]=o,e.children&&e.children.length>0&&e.children.forEach(s=>{s.data[t]=o,this.assign(t,s,o)})}saveAssignment(){this.confirmationService.confirm({header:"Konfirmasi",message:"Apakah Anda yakin akan menyimpan data Mapping Feature dan Permissions?",accept:()=>{this.state.$loading.set(!0),this.rolePermissionService.mapFeatures(this.setListFilterToMapFeature()).subscribe(t=>{if(t.status){let e=`Feature dan Permission Role [${this.roles.$selectedData()?.name}] Berhasil Diassign!`;this.messageService.add({severity:"success",summary:"Success",detail:e})}else this.messageService.add({severity:"error",summary:"Error",detail:t.message});this.state.$loading.set(!1),this.loadPermissionData()},t=>{console.log(t),this.state.$loading.set(!1)})},reject:()=>{}})}static \u0275fac=function(e){return new(e||i)(w(ke),w(re),w(se),w(we),w(Re),w(xe))};static \u0275prov=$e({token:i,factory:i.\u0275fac})};var ne=class i{rolePermissionStore=S(h);category=this.rolePermissionStore.roles.$optionsCategory();selectedCategory=this.rolePermissionStore.roles.$selectedCategory();search=this.rolePermissionStore.roles.$searchText();searchForm=new Z({category:new I({value:null,disabled:!1}),search:new I({value:"",disabled:!0})});tempSearch={category:null,search:""};constructor(){this.onCategoryChanges(),this.onSearchChanges()}onCategoryChanges(){this.searchForm.controls.category.valueChanges.subscribe(t=>{this.tempSearch.category=t,this.searchForm.get("search")?.reset(),t?this.searchForm.get("search")?.enable():this.searchForm.get("search")?.disable()})}onSearchChanges(){this.searchForm.controls.search.valueChanges.subscribe(t=>{this.tempSearch.search=t})}onButtonClicked(){this.rolePermissionStore.onSearchBtnClicked(this.tempSearch)}onRefresh(){this.searchForm.patchValue({category:null,search:""}),this.rolePermissionStore.onSearchBtnClicked(this.tempSearch)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-role-permission-search"]],standalone:!0,features:[b],decls:8,vars:2,consts:[[1,"grid","grid-cols-6","grid-flow-rows","gap-2",3,"formGroup"],["styleClass","col-span-6 md:col-span-1","formControlName","category","name","category","appendTo","body",3,"options"],[1,"col-span-6","md:col-span-5"],["pInputText","","formControlName","search","name","search"],["icon","pi pi-search",1,"w-full","!h-full",3,"click"],["icon","pi pi-refresh","severity","info",1,"w-full","!h-full",3,"click"]],template:function(e,o){e&1&&(n(0,"div",0),d(1,"p-select",1),n(2,"p-inputgroup",2),d(3,"input",3),n(4,"p-inputgroup-addon")(5,"p-button",4),u("click",function(){return o.onButtonClicked()}),r()(),n(6,"p-inputgroup-addon")(7,"p-button",5),u("click",function(){return o.onRefresh()}),r()()()()),e&2&&(p("formGroup",o.searchForm),a(),p("options",o.rolePermissionStore.roles.$optionsCategory()))},dependencies:[C,X,N,Y,ie,Le,R,Ve,Oe,ee,te]})};var qe=()=>[5,10,20];function Je(i,t){if(i&1&&(n(0,"th",10),g(1),r()),i&2){let e=t.$implicit;a(),k(" ",e.header," ")}}function Qe(i,t){if(i&1&&(n(0,"tr"),y(1,Je,2,1,"th",9),r()),i&2){let e=t.$implicit;a(),p("ngForOf",e)}}function Xe(i,t){if(i&1&&(n(0,"td"),d(1,"div",13),r()),i&2){let e=l().$implicit,o=l().$implicit;D(e.class_td),a(),p("outerHTML",e.template(o[e.field]),ve)}}function Ye(i,t){if(i&1){let e=E();n(0,"td")(1,"p-button",14),u("click",function(){v(e);let s=l(2).$implicit,m=l();return P(m.rolePermissionStore.deleteAction(s))}),r(),n(2,"p-button",15),u("click",function(){v(e);let s=l(2).$implicit,m=l();return P(m.rolePermissionStore.editAction(s))}),r(),n(3,"p-button",16),u("click",function(){v(e);let s=l(2).$implicit,m=l();return P(m.rolePermissionStore.assignAction(s))}),r()()}if(i&2){let e=l().$implicit;D(e.class_td)}}function Ze(i,t){if(i&1&&(n(0,"td"),g(1),r()),i&2){let e=l().$implicit,o=l().rowIndex;D(e.class_td),a(),k(" ",o+1," ")}}function et(i,t){if(i&1&&(n(0,"td"),g(1),r()),i&2){let e=l().$implicit,o=l().$implicit;D(e.class_td),a(),k(" ",o[e.field]," ")}}function tt(i,t){if(i&1&&y(0,Xe,2,3,"td",12)(1,Ye,4,2,"td",12)(2,Ze,2,3,"td",12)(3,et,2,3,"td",12),i&2){let e,o=t.$implicit;T((e=o.type)==="custom"?0:e==="action"?1:e==="no"?2:3)}}function it(i,t){if(i&1&&(n(0,"tr",11),z(1,tt,4,1,null,null,U),r()),i&2){let e=t.$implicit,o=t.columns;p("pSelectableRow",e),a(),H(o)}}function ot(i,t){if(i&1&&(n(0,"tr")(1,"td",17),g(2,"Data Kosong"),r()()),i&2){let e=l();a(),A("colspan",e.rolePermissionStore.roles.$cols().length)}}var ae=class i{rolePermissionStore=S(h);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-role-permission-list"]],standalone:!0,features:[b],decls:13,vars:12,consts:[["dt",""],["header",""],["body",""],["emptymessage",""],[1,"card"],[1,"flex","justify-end","items-center","gap-1","flex-col","md:flex-row","mb-2"],["styleClass","p-button-contrast w-full","icon","pi pi-plus","label","Tambah Role",3,"click"],["showGridlines","",3,"onLazyLoad","columns","value","loading","paginator","rows","rowsPerPageOptions","paginatorDropdownAppendTo","lazy","totalRecords"],[3,"blocked","target"],["class","!text-center",4,"ngFor","ngForOf"],[1,"!text-center"],[3,"pSelectableRow"],[3,"class"],[3,"outerHTML"],["styleClass","p-button-danger","icon","pi pi-trash","pTooltip","Hapus Role",3,"click"],["styleClass","p-button-info","icon","pi pi-pencil","pTooltip","Ubah Role",3,"click"],["styleClass","","icon","pi pi-list-check","pTooltip","Assign Permissions",3,"click"],[1,"!text-center","w-full"]],template:function(e,o){if(e&1){let s=E();n(0,"div",4)(1,"div",5)(2,"p-button",6),u("click",function(){return v(s),P(o.rolePermissionStore.addAction())}),r(),d(3,"app-role-permission-search"),r(),n(4,"p-table",7,0),u("onLazyLoad",function(f){return v(s),P(o.rolePermissionStore.onLazyLoad(f))}),y(6,Qe,2,1,"ng-template",null,1,W)(8,it,3,1,"ng-template",null,2,W)(10,ot,3,1,"ng-template",null,3,W),r()(),d(12,"p-blockui",8)}if(e&2){let s=ue(5),m=ue(9);a(4),p("columns",o.rolePermissionStore.roles.$cols())("value",o.rolePermissionStore.roles.$dataList())("loading",o.rolePermissionStore.roles.$dataLoading())("paginator",!0)("rows",5)("rowsPerPageOptions",K(11,qe))("paginatorDropdownAppendTo",m)("lazy",!0)("totalRecords",o.rolePermissionStore.roles.$totalRowCount()),a(8),p("blocked",o.rolePermissionStore.roles.$disabledTable())("target",s)}},dependencies:[J,q,C,R,Ae,Ee,Ne,Te,ne]})};function st(i,t){if(i&1&&(n(0,"th",4),g(1),r()),i&2){let e=t.$implicit;a(),k(" ",e.header," ")}}function rt(i,t){if(i&1&&(n(0,"tr")(1,"th",3),g(2,"Name"),r(),n(3,"th",4),g(4,"Feature Assign"),r(),n(5,"th",4),g(6,"Permission Assign"),r()(),n(7,"tr"),y(8,st,2,1,"th",5),r()),i&2){let e=l();a(),A("rowspan",2),a(2),A("rowspan",2),a(2),A("colspan",6),a(3),p("ngForOf",e.rolePermissionStore.permissions.$colsCheckbox())}}function nt(i,t){if(i&1&&d(0,"i"),i&2){let e=l().rowData;D(e.icon)}}function at(i,t){if(i&1){let e=E();n(0,"p-checkbox",9),u("ngModelChange",function(s){v(e);let m=l().$implicit,f=l().$implicit,F=l();return P(F.rolePermissionStore.assign(m.field,f.node,s))}),r()}if(i&2){let e=l().$implicit,o=l().rowData;p("ngModel",o[e.field])("binary",!0)}}function lt(i,t){i&1&&d(0,"span",11)}function mt(i,t){if(i&1&&(n(0,"td",4)(1,"div",8),y(2,at,1,2,"p-checkbox",10)(3,lt,1,0,"span",11),r()()),i&2){let e=t.$implicit,o=l().rowData;a(2),T(o[e.viewCheckbox]?2:3)}}function ct(i,t){if(i&1){let e=E();n(0,"tr")(1,"td"),d(2,"p-treeTableToggler",6),y(3,nt,1,3,"i",7),g(4),r(),n(5,"td")(6,"div",8)(7,"p-checkbox",9),u("ngModelChange",function(s){let m=v(e).$implicit,f=l();return P(f.rolePermissionStore.assign("featureAssign",m.node,s))}),r()()(),z(8,mt,4,1,"td",4,U),r()}if(i&2){let e=t.$implicit,o=t.rowData,s=l();a(2),p("rowNode",e),a(),T(o.icon?3:-1),a(),k(" ",o.feature," "),a(3),p("ngModel",o.featureAssign)("binary",!0),a(),H(s.rolePermissionStore.permissions.$colsCheckbox())}}var le=class i{constructor(t,e){this.rolePermissionService=t;this.rolePermissionStore=e}ngOnInit(){this.rolePermissionStore.loadPermissionData()}static \u0275fac=function(e){return new(e||i)(de(re),de(h))};static \u0275cmp=_({type:i,selectors:[["app-role-assign-permission-list"]],standalone:!0,features:[b],decls:3,vars:3,consts:[["showGridlines","",3,"value","columns","loading"],["pTemplate","header"],["pTemplate","body"],[1,"!text-center",2,"width","350px"],[1,"!text-center"],["class","!text-center",4,"ngFor","ngForOf"],[3,"rowNode"],[3,"class"],[1,"flex","justify-center","items-center"],[3,"ngModelChange","ngModel","binary"],[3,"ngModel","binary"],[1,"pi","pi-minus","!text-xl"]],template:function(e,o){e&1&&(n(0,"p-treeTable",0),y(1,rt,9,4,"ng-template",1)(2,ct,10,5,"ng-template",2),r()),e&2&&p("value",o.rolePermissionStore.permissions.$listFilter())("columns",o.rolePermissionStore.permissions.$colsCheckbox())("loading",o.rolePermissionStore.permissions.$listFilter().length==0)},dependencies:[C,De,N,Fe,q,Ie,je,Me]})};var me=class i{rolePermissionStore=S(h);$header=$(()=>`${this.rolePermissionStore.roles.$selectedData()?.name} - ${this.rolePermissionStore.roles.$selectedData()?.notes}`);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-role-assign-permission"]],standalone:!0,features:[b],decls:7,vars:1,consts:[[1,"w-full"],[3,"header"],[1,"p-2","flex","flex-col","gap-2"],[1,"flex","items-center","justify-end","gap-2"],["label","Save","icon","pi pi-check","severity","success",3,"click"],["label","Back","icon","pi pi-sign-out","severity","danger",3,"click"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"p-panel",1)(2,"div",2),d(3,"app-role-assign-permission-list"),n(4,"div",3)(5,"p-button",4),u("click",function(){return o.rolePermissionStore.saveAssignment()}),r(),n(6,"p-button",5),u("click",function(){return o.rolePermissionStore.backToRolePage()}),r()()()()()),e&2&&(a(),p("header",o.$header()||"-"))},dependencies:[J,C,Q,R,le]})};var dt=()=>["idle","add","edit"];function ut(i,t){i&1&&(n(0,"div",0)(1,"p-panel",1),d(2,"app-role-permission-list"),r()())}function ft(i,t){i&1&&d(0,"app-role-assign-permission")}var Ge=class i{rolePermissionStore=S(h);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-role-permission"]],standalone:!0,features:[Pe([h,oe,se]),b],decls:2,vars:2,consts:[[1,"w-full"],["header","Roles List"]],template:function(e,o){e&1&&y(0,ut,3,0,"div",0)(1,ft,1,0,"app-role-assign-permission"),e&2&&T(K(1,dt).includes(o.rolePermissionStore.roles.$formMode())?0:1)},dependencies:[C,Q,ae,me]})};export{Ge as RolePermissionComponent};
