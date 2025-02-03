import{g as Fe}from"./chunk-E3XSTR4X.js";import{a as ie,b as se}from"./chunk-VGVLEVUS.js";import{A as Ve,E as Be,F as Ge,G as _,i as Me,n as J,t as Ne,v as je,w as Oe,x as Ue}from"./chunk-4PI6GKAU.js";import{l as Ae,m as L,o as oe}from"./chunk-FL6LVHCL.js";import"./chunk-4YRY4IP2.js";import"./chunk-YHFLXNOC.js";import"./chunk-XDPPSI7D.js";import{a as he}from"./chunk-OQKDZ6KP.js";import{a as Ie,c as Q,f as X,g as Y,h as Z,i as M,k as ee,l as te}from"./chunk-YCTAA2SV.js";import{a as we}from"./chunk-RKENV64N.js";import{ka as Te,oa as ke,sa as Le,va as Ee,wa as N}from"./chunk-EL7CSRMH.js";import{$b as K,A as Se,Cc as q,Fb as fe,G as Re,Gb as f,H as ye,I as Pe,Ib as $,Ic as W,Ka as xe,Nb as De,O as ve,Oa as n,Ob as b,Pa as de,Pb as H,U as $e,W as ce,Xa as l,Z as V,a as E,b as I,bb as S,ca as P,da as C,db as T,eb as p,ha as g,ib as v,jb as k,kb as B,lc as R,mb as G,nb as z,ob as r,pb as s,qb as c,ra as w,sa as F,ub as ue,v as pe,vb as h,wb as d}from"./chunk-SAC5J3G4.js";var j=class o{rolePermissionStore=C(u);ref=C(ie);roleForm=new Z({name:new M({value:null,disabled:!0}),notes:new M({value:null,disabled:!0})});selectedDataSubscription;formModeSubscribtion;constructor(){this.selectedDataSubscription=N(this.rolePermissionStore.roles.$selectedData).subscribe(e=>{this.roleForm.patchValue({name:this.rolePermissionStore.roles.$selectedData()?.name,notes:this.rolePermissionStore.roles.$selectedData()?.notes})}),this.formModeSubscribtion=N(this.rolePermissionStore.roles.$formMode).subscribe(e=>{switch(e){case"add":this.roleForm.enable();break;case"edit":this.roleForm.enable();break;case"idle":this.roleForm.disable();break;default:break}})}cancel(){this.rolePermissionStore.cancelAction(),this.ref.close()}save(){this.rolePermissionStore.saveAction(this.roleForm.value)?.subscribe(e=>{e.status&&this.ref.close(e)})}ngOnDestroy(){this.roleForm.reset(),this.selectedDataSubscription.unsubscribe(),this.formModeSubscribtion.unsubscribe()}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=g({type:o,selectors:[["app-role-crud"]],standalone:!0,features:[b],decls:13,vars:3,consts:[[1,"w-full","flex","flex-col","space-y-2"],[1,"flex","flex-col","space-y-1","mb-2",3,"formGroup"],[1,"grid","grid-cols-12","gap-2","items-center"],["for","name",1,"col-span-12","md:col-span-2"],["pInputText","","formControlName","name","name","name",1,"col-span-8","md:col-span-10","bg-gray-50","border","border-gray-300","text-gray-900","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["for","notes",1,"col-span-12","md:col-span-2"],["pInputText","","formControlName","notes","name","notes",1,"col-span-8","md:col-span-10","bg-gray-50","border","border-gray-300","text-gray-900","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[1,"flex","justify-end","space-x-1"],["label","Save",3,"click","disabled"],["label","Cancel","styleClass","p-button-danger",3,"click","disabled"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"label",3),f(4,"Role Name"),s(),c(5,"input",4),s(),r(6,"div",2)(7,"label",5),f(8,"Note"),s(),c(9,"input",6),s()(),r(10,"div",7)(11,"p-button",8),h("click",function(){return i.save()}),s(),r(12,"p-button",9),h("click",function(){return i.cancel()}),s()()()),t&2&&(n(),p("formGroup",i.roleForm),n(10),p("disabled",i.rolePermissionStore.roles.$disabledSave()),n(),p("disabled",i.rolePermissionStore.roles.$disabledCancel()))},dependencies:[_,Q,X,Y,oe,L,ee,te]})};var be=Ie.APPRAISAL_API_URL,re=be+"/roles",A=class o{constructor(e){this.http=e}addRole(e){return this.http.post(re+"/addRole",e)}editRole(e){return this.http.post(re+"/editRole/"+e?.id,{name:e?.name,notes:e?.notes})}deleteRole(e){return this.http.delete(re+`/delete/${e?.id??""}`)}listRoles(e){return this.http.post(re+"/listRoles",e)}findAllFeature(){return this.http.get(be+"/feature/findAll")}getAllFeaturePermissions(){return this.http.get(be+"/feature/getAllFeaturePermissions")}static \u0275fac=function(t){return new(t||o)(P(we))};static \u0275prov=V({token:o,factory:o.\u0275fac,providedIn:"root"})};var u=class o{constructor(e,t,i,a,m,y){this.spinnerService=e;this.rolePermissionService=t;this.dialogService=i;this.messageService=a;this.router=m;this.confirmationService=y;this.init()}state={roles:{$dataList:l([]),$dataLoading:l(!1),$pagingInfo:l(new he),$totalRowCount:l(1),$selectedData:l(null),$selectedVerified:l(!0),$loading:l(!1),$disabledTable:l(!1),$optionsCategory:l([]),$selectedCategory:l(""),$searchText:l(""),$searchBtnClickEvent:l(!1),$optionsRole:l([]),$disabledUpdate:l(!0),$disabledSave:l(!0),$disabledCancel:l(!0)},permissions:{$colsCheckbox:l([{field:"list",header:"List"},{field:"view",header:"View"},{field:"add",header:"Add"},{field:"update",header:"Update"},{field:"delete",header:"Delete"},{field:"print",header:"Print"}]),$listFilter:l([]),$dataList:l([]),$permissions:l([])},$formMode:l("idle")};roles={$dataList:this.state.roles.$dataList.asReadonly(),$dataLoading:this.state.roles.$dataLoading.asReadonly(),$selectedData:this.state.roles.$selectedData.asReadonly(),$cols:l([{field:"no",header:"No",class_td:"!text-center !max-w-[50px]",type:"no"},{field:"name",header:"Role",class_td:"!text-center"},{field:"notes",header:"Note",class_td:"!text-center"},{field:"action",header:"Actions",class_td:"flex justify-center items-center gap-2",type:"action"}]).asReadonly(),$pagingInfo:this.state.roles.$pagingInfo.asReadonly(),$totalRowCount:this.state.roles.$totalRowCount.asReadonly(),$optionsCategory:this.state.roles.$optionsCategory.asReadonly(),$selectedCategory:this.state.roles.$selectedCategory.asReadonly(),$searchText:R(()=>this.roles.$selectedCategory()==="id"?parseInt(this.state.roles.$searchText()):this.state.roles.$searchText()),$filter:R(()=>{let e=null;return this.roles.$selectedCategory()&&(e={},e[this.roles.$selectedCategory()??""]=this.roles.$searchText()??""),e}),$optionsRole:this.state.roles.$optionsRole.asReadonly(),$disabledUpdate:R(()=>this.state.roles.$disabledUpdate()||this.state.$formMode()=="edit"),$disabledSave:R(()=>this.state.roles.$disabledSave()&&this.state.$formMode()=="idle"),$disabledCancel:R(()=>this.state.roles.$disabledCancel()&&this.state.$formMode()=="idle"),$disabledTable:R(()=>this.state.$formMode()=="edit"),$formMode:this.state.$formMode.asReadonly()};permissions={$colsCheckbox:this.state.permissions.$colsCheckbox.asReadonly(),$dataList:this.state.permissions.$dataList.asReadonly(),$permissions:this.state.permissions.$permissions.asReadonly(),$listFilter:R(()=>this.buildTree(this.state.permissions.$dataList(),this.state.permissions.$permissions()))};ref;dialogOptions={modal:!0,styleClass:"w-11/12 md:w-5/12"};init(){this.setSpinner(),this.setSearchCategory(),this.populateList(),this.onGenerateRoleOptions()}setSpinner(){N(this.state.roles.$loading).subscribe(e=>e?this.spinnerService.show():this.spinnerService.hide())}populateList(){this.state.roles.$dataLoading.set(!0);let e={wrapper:this.roles.$filter(),pagingInfo:this.state.roles.$pagingInfo(),totalRowCount:this.state.roles.$totalRowCount()};this.rolePermissionService.listRoles(e).subscribe(t=>{t.status&&(this.state.roles.$pagingInfo.set(t.object.pagingInfo||new he),this.state.roles.$dataList.set(t.object.dataList||[]),this.state.roles.$totalRowCount.set(t.object.totalRowCount||0)),this.state.roles.$dataLoading.set(!1)})}onLazyLoad(e){this.state.roles.$pagingInfo.set(I(E({},this.roles.$pagingInfo()),{currentPage:Math.floor(e.first/e.rows)+1,pageSize:e.rows})),this.populateList()}onSetSelected(e){this.state.roles.$selectedData.set(e)}setSearchCategory(){this.state.roles.$optionsCategory.set([{label:"Semua",value:null},{label:"Role",value:"name"},{label:"Note",value:"notes"}])}onSearchBtnClicked({category:e,search:t}){this.state.roles.$selectedCategory.set(e),e&&this.state.roles.$searchText.set(t),this.populateList()}onGenerateRoleOptions(){let e=[{label:"HR",value:1},{label:"Manager",value:2},{label:"Supervisor",value:3},{label:"Staff",value:4}];this.state.roles.$optionsRole.set(e)}deleteAction(e){this.state.roles.$selectedData.set(e),this.confirmationService.confirm({header:"Konfirmasi",message:"Apakah Anda yakin ingin menghapus data ini?",accept:()=>{this.rolePermissionService.deleteRole(e).subscribe(t=>{if(t.status){let i=`Hapus Role [${this.roles.$selectedData()?.name}] Berhasil!`;this.messageService.add({severity:"success",summary:"Success",detail:i}),this.state.$formMode.set("idle"),this.state.roles.$selectedData.set(null)}else this.messageService.add({severity:"error",summary:"Error",detail:t.message});this.populateList()})},reject:()=>{}})}setFormMode(e){this.state.$formMode.set(e)}addAction(){this.state.$formMode.set("add"),this.ref=this.dialogService.open(j,I(E({},this.dialogOptions),{header:"Add Role"})),this.onCloseDialogEvent()}editAction(e){this.state.roles.$selectedData.set(e),this.state.$formMode.set("edit"),this.ref=this.dialogService.open(j,I(E({},this.dialogOptions),{header:"Edit Role"})),this.onCloseDialogEvent()}onCloseDialogEvent(){this.ref?.onClose.subscribe(e=>{e&&this.populateList(),this.state.$formMode.set("idle")})}saveAction({name:e,notes:t}){if(this.spinnerService.setSpinnerStyle({"z-index":"9999"}),this.state.roles.$loading.set(!0),!e)return this.messageService.add({severity:"error",summary:"Error",detail:"Nama Role harus diisi!"}),this.state.roles.$loading.set(!1),pe({status:!1});if(!t)return this.messageService.add({severity:"error",summary:"Error",detail:"Note harus diisi!"}),this.state.roles.$loading.set(!1),pe({status:!1});let i=I(E({},this.state.roles.$selectedData()),{name:e,notes:t});return ye(100).pipe(Pe(()=>this.state.$formMode()!="idle"),$e(()=>Re(()=>this.state.$formMode()=="edit",this.rolePermissionService.editRole(i),this.rolePermissionService.addRole(i))),ce(a=>{if(a.status){let m=this.state.$formMode()=="edit"?"Edit Role Berhasil!":"Simpan Role Berhasil";this.messageService.add({severity:"success",summary:"Success",detail:m}),this.state.$formMode.set("idle"),this.state.roles.$selectedData.set(null)}else this.messageService.add({severity:"error",summary:"Error",detail:a.message});this.state.roles.$loading.set(!1)}),ve(()=>{this.state.roles.$loading.set(!1)}))}cancelAction(){this.state.$formMode.set("idle"),this.state.roles.$selectedData.set(null)}assignAction(e){this.state.roles.$selectedData.set(e),this.state.$formMode.set("assign"),console.log("assignAction",e)}backToRolePage(){this.state.roles.$selectedData.set(null),this.state.$formMode.set("idle")}loadPermissionData(){Se([this.rolePermissionService.findAllFeature(),this.rolePermissionService.getAllFeaturePermissions()]).pipe(ce(([e,t])=>{e.status&&t.status&&(this.state.permissions.$dataList.set(e.object),this.state.permissions.$permissions.set(t.object))})).subscribe()}buildTree(e,t){let i=new Map;e.forEach(m=>{let y=`${m.feature.pathOrder}-${m.feature.name}`,D={data:{feature:m.feature.name,list:"-",view:"-",add:"-",update:"-",delete:"-",print:"-"},children:[],expanded:!0};i.set(y,D)}),t.forEach(m=>{let y=Array.from(i.values()).find(D=>D.data.feature===m.featureName);y&&(y.data[m.permissionTypeName.toLowerCase()]="")});let a=[];return i.forEach((m,y)=>{let D=y.split("-")[0],_e=D.substring(0,D.lastIndexOf("."));if(_e){let Ce=Array.from(i.keys()).find(U=>U.startsWith(_e));if(Ce){let U=i.get(Ce);U&&U.children?.push(m)}}else a.push(m)}),a}static \u0275fac=function(t){return new(t||o)(P(Ee),P(A),P(se),P(ke),P(Fe),P(Te))};static \u0275prov=V({token:o,factory:o.\u0275fac})};var ne=class o{rolePermissionStore=C(u);category=this.rolePermissionStore.roles.$optionsCategory();selectedCategory=this.rolePermissionStore.roles.$selectedCategory();search=this.rolePermissionStore.roles.$searchText();searchForm=new Z({category:new M({value:null,disabled:!1}),search:new M({value:"",disabled:!0})});tempSearch={category:null,search:""};constructor(){this.onCategoryChanges(),this.onSearchChanges()}onCategoryChanges(){this.searchForm.controls.category.valueChanges.subscribe(e=>{this.tempSearch.category=e,this.searchForm.get("search")?.reset(),e?this.searchForm.get("search")?.enable():this.searchForm.get("search")?.disable()})}onSearchChanges(){this.searchForm.controls.search.valueChanges.subscribe(e=>{this.tempSearch.search=e})}onButtonClicked(){this.rolePermissionStore.onSearchBtnClicked(this.tempSearch)}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=g({type:o,selectors:[["app-role-permission-search"]],standalone:!0,features:[b],decls:4,vars:2,consts:[[1,"grid","grid-cols-6","grid-flow-rows","gap-2",3,"formGroup"],["styleClass","col-span-6 md:col-span-1","formControlName","category","name","category","appendTo","body",3,"options"],["pInputText","","formControlName","search","name","search",1,"col-span-5","md:col-span-4"],["pButton","","icon","pi pi-search",1,"!h-full","p-button-primary",3,"click"]],template:function(t,i){t&1&&(r(0,"div",0),c(1,"p-select",1)(2,"input",2),r(3,"button",3),h("click",function(){return i.onButtonClicked()}),s()()),t&2&&(p("formGroup",i.searchForm),n(),p("options",i.rolePermissionStore.roles.$optionsCategory()))},dependencies:[_,Q,X,Y,oe,Ne,Ae,ee,te]})};var Xe=()=>[5,10,20];function Ye(o,e){if(o&1&&(r(0,"th",10),f(1),s()),o&2){let t=e.$implicit;n(),$(" ",t.header," ")}}function Ze(o,e){if(o&1&&(r(0,"tr"),S(1,Ye,2,1,"th",9),s()),o&2){let t=e.$implicit;n(),p("ngForOf",t)}}function et(o,e){if(o&1&&(r(0,"td"),c(1,"div",13),s()),o&2){let t=d().$implicit,i=d().$implicit;v(t.class_td),n(),p("outerHTML",t.template(i[t.field]),xe)}}function tt(o,e){if(o&1){let t=ue();r(0,"td")(1,"p-button",14),h("click",function(){w(t);let a=d(2).$implicit,m=d();return F(m.rolePermissionStore.deleteAction(a))}),s(),r(2,"p-button",15),h("click",function(){w(t);let a=d(2).$implicit,m=d();return F(m.rolePermissionStore.editAction(a))}),s(),r(3,"p-button",16),h("click",function(){w(t);let a=d(2).$implicit,m=d();return F(m.rolePermissionStore.assignAction(a))}),s()()}if(o&2){let t=d().$implicit;v(t.class_td)}}function ot(o,e){if(o&1&&(r(0,"td"),f(1),s()),o&2){let t=d().$implicit,i=d().rowIndex;v(t.class_td),n(),$(" ",i+1," ")}}function it(o,e){if(o&1&&(r(0,"td"),f(1),s()),o&2){let t=d().$implicit,i=d().$implicit;v(t.class_td),n(),$(" ",i[t.field]," ")}}function st(o,e){if(o&1&&S(0,et,2,3,"td",12)(1,tt,4,2,"td",12)(2,ot,2,3,"td",12)(3,it,2,3,"td",12),o&2){let t,i=e.$implicit;k((t=i.type)==="custom"?0:t==="action"?1:t==="no"?2:3)}}function rt(o,e){if(o&1&&(r(0,"tr",11),G(1,st,4,1,null,null,B),s()),o&2){let t=e.$implicit,i=e.columns;p("pSelectableRow",t),n(),z(i)}}function nt(o,e){if(o&1&&(r(0,"tr")(1,"td",17),f(2,"Data Kosong"),s()()),o&2){let t=d();n(),T("colspan",t.rolePermissionStore.roles.$cols().length)}}var ae=class o{rolePermissionStore=C(u);static \u0275fac=function(t){return new(t||o)};static \u0275cmp=g({type:o,selectors:[["app-role-permission-list"]],standalone:!0,features:[b],decls:13,vars:12,consts:[["dt",""],["header",""],["body",""],["emptymessage",""],[1,"card"],[1,"flex","justify-end","items-center","gap-1","flex-col","md:flex-row","mb-2"],["styleClass","p-button-contrast w-full","icon","pi pi-plus","label","Tambah Role",3,"click"],[3,"onLazyLoad","columns","value","loading","paginator","rows","rowsPerPageOptions","paginatorDropdownAppendTo","lazy","totalRecords"],[3,"blocked","target"],["class","!text-center",4,"ngFor","ngForOf"],[1,"!text-center"],[3,"pSelectableRow"],[3,"class"],[3,"outerHTML"],["styleClass","p-button-danger","icon","pi pi-trash","pTooltip","Hapus Role",3,"click"],["styleClass","p-button-info","icon","pi pi-pencil","pTooltip","Ubah Role",3,"click"],["styleClass","","icon","pi pi-list-check","pTooltip","Assign Permissions",3,"click"],[1,"!text-center","w-full"]],template:function(t,i){if(t&1){let a=ue();r(0,"div",4)(1,"div",5)(2,"p-button",6),h("click",function(){return w(a),F(i.rolePermissionStore.addAction())}),s(),c(3,"app-role-permission-search"),s(),r(4,"p-table",7,0),h("onLazyLoad",function(y){return w(a),F(i.rolePermissionStore.onLazyLoad(y))}),S(6,Ze,2,1,"ng-template",null,1,K)(8,rt,3,1,"ng-template",null,2,K)(10,nt,3,1,"ng-template",null,3,K),s()(),c(12,"p-blockui",8)}if(t&2){let a=fe(5),m=fe(9);n(4),p("columns",i.rolePermissionStore.roles.$cols())("value",i.rolePermissionStore.roles.$dataList())("loading",i.rolePermissionStore.roles.$dataLoading())("paginator",!0)("rows",5)("rowsPerPageOptions",H(11,Xe))("paginatorDropdownAppendTo",m)("lazy",!0)("totalRecords",i.rolePermissionStore.roles.$totalRowCount()),n(8),p("blocked",i.rolePermissionStore.roles.$disabledTable())("target",a)}},dependencies:[W,q,_,L,Oe,Ue,Ve,Me,ne]})};function at(o,e){if(o&1&&(r(0,"th",4),f(1),s()),o&2){let t=e.$implicit;n(),$(" ",t.header," ")}}function lt(o,e){if(o&1&&(r(0,"tr")(1,"th",3),f(2,"Name"),s(),r(3,"th",4),f(4,"Feature Assign"),s(),r(5,"th",4),f(6,"Permission Assign"),s()(),r(7,"tr"),S(8,at,2,1,"th",5),s()),o&2){let t=d();n(),T("rowspan",2),n(2),T("rowspan",2),n(2),T("colspan",6),n(3),p("ngForOf",t.rolePermissionStore.permissions.$colsCheckbox())}}function mt(o,e){if(o&1&&c(0,"i"),o&2){let t=d().rowData;v(t.icon)}}function pt(o,e){o&1&&(r(0,"td",4)(1,"div",8),c(2,"p-checkbox"),s()())}function ct(o,e){if(o&1&&(r(0,"tr")(1,"td"),c(2,"p-treeTableToggler",6),S(3,mt,1,3,"i",7),f(4),s(),r(5,"td")(6,"div",8),c(7,"p-checkbox"),s()(),G(8,pt,3,0,"td",4,B),s()),o&2){let t=e.$implicit,i=e.rowData,a=d();n(2),p("rowNode",t),n(),k(i.icon?3:-1),n(),$(" ",i.feature," "),n(4),z(a.rolePermissionStore.permissions.$colsCheckbox())}}var le=class o{constructor(e,t){this.rolePermissionService=e;this.rolePermissionStore=t}ngOnInit(){this.rolePermissionStore.loadPermissionData()}static \u0275fac=function(t){return new(t||o)(de(A),de(u))};static \u0275cmp=g({type:o,selectors:[["app-role-assign-permission-list"]],standalone:!0,features:[b],decls:3,vars:3,consts:[["showGridlines","",3,"value","columns","loading"],["pTemplate","header"],["pTemplate","body"],[1,"!text-center",2,"width","350px"],[1,"!text-center"],["class","!text-center",4,"ngFor","ngForOf"],[3,"rowNode"],[3,"class"],[1,"flex","justify-center","items-center"]],template:function(t,i){t&1&&(r(0,"p-treeTable",0),S(1,lt,9,4,"ng-template",1)(2,ct,10,3,"ng-template",2),s()),t&2&&p("value",i.rolePermissionStore.permissions.$listFilter())("columns",i.rolePermissionStore.permissions.$colsCheckbox())("loading",i.rolePermissionStore.permissions.$listFilter().length==0)},dependencies:[_,Le,q,Be,Ge,je]})};var me=class o{rolePermissionStore=C(u);$header=R(()=>`${this.rolePermissionStore.roles.$selectedData()?.name} - ${this.rolePermissionStore.roles.$selectedData()?.notes}`);static \u0275fac=function(t){return new(t||o)};static \u0275cmp=g({type:o,selectors:[["app-role-assign-permission"]],standalone:!0,features:[b],decls:5,vars:1,consts:[[1,"w-full"],[3,"header"],[1,"flex","items-center","justify-end"],["label","Kembali","icon","pi pi-sign-out","severity","danger",3,"click"]],template:function(t,i){t&1&&(r(0,"div",0)(1,"p-panel",1),c(2,"app-role-assign-permission-list"),r(3,"div",2)(4,"p-button",3),h("click",function(){return i.rolePermissionStore.backToRolePage()}),s()()()()),t&2&&(n(),p("header",i.$header()||"-"))},dependencies:[W,_,J,L,le]})};var ut=()=>["idle","add","edit"];function ft(o,e){o&1&&(r(0,"div",0)(1,"p-panel",1),c(2,"app-role-permission-list"),s()())}function ht(o,e){o&1&&c(0,"app-role-assign-permission")}var He=class o{rolePermissionStore=C(u);static \u0275fac=function(t){return new(t||o)};static \u0275cmp=g({type:o,selectors:[["app-role-permission"]],standalone:!0,features:[De([u,ie,se]),b],decls:2,vars:2,consts:[[1,"w-full"],["header","Roles List"]],template:function(t,i){t&1&&S(0,ft,3,0,"div",0)(1,ht,1,0,"app-role-assign-permission"),t&2&&k(H(1,ut).includes(i.rolePermissionStore.roles.$formMode())?0:1)},dependencies:[_,J,ae,me]})};export{He as RolePermissionComponent};
