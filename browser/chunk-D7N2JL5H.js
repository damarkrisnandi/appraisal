import{a as ke,b as De}from"./chunk-A7T226LS.js";import"./chunk-JE3T5B32.js";import"./chunk-36Q7J5AF.js";import{d as ge}from"./chunk-DHUBIRUE.js";import{a as Re}from"./chunk-5KMXBDCU.js";import{b as Ie}from"./chunk-MND7QEW5.js";import{A as Ae,D as Y,H as w,g as O,j as H,k as W,n as $e,o as J,p as X,u as we}from"./chunk-TWGBUOMK.js";import{m as E,n as Pe,o as Q,p as xe,s as Le}from"./chunk-XUJTQNY3.js";import"./chunk-4YRY4IP2.js";import"./chunk-QNAHFPN7.js";import"./chunk-5TPOAWEP.js";import{a as re}from"./chunk-OQKDZ6KP.js";import{b as z,c as b,e as G,f as q,g as je,h as g,j as Te,k as U,l as K,n as ye,p as be,q as Z}from"./chunk-SBW42UDC.js";import{b as he}from"./chunk-BQYB7PSU.js";import{ka as ve,oa as Ce,va as Se,wa as Ee}from"./chunk-OWQSGUGC.js";import{m as B,n as _e}from"./chunk-LDJVXUVP.js";import{Ab as F,Bb as n,Cb as o,Db as m,Fc as V,Hb as A,Kb as _,Lb as r,Ub as le,Va as I,Vb as s,Xb as S,Za as l,_ as N,a as pe,ac as ue,b as me,bc as $,cc as fe,da as T,ea as y,g as de,gb as p,ia as x,ob as h,pc as P,qb as R,rb as c,sa as v,ta as C,vb as f,wb as L,xb as k,zb as D}from"./chunk-PVR6VDV5.js";var ee=class{id;status;noTemplate;departmentId;positionId;levelId;attitudes;technicals};var te=Z.APPRAISAL_API_URL+"/template-project-assessment",Ve=Z.APPRAISAL_API_URL+"/template-project-attitude",Be=Z.APPRAISAL_API_URL+"/template-project-technical",ie=class i{constructor(t){this.http=t}list(t){return this.http.post(te+"/list",t)}getById(t){return this.http.post(te+"/"+t,{})}save(t){return this.http.post(te+"/save",t)}delete(t){return this.http.post(te+"/delete/"+t,{})}deleteAttitude(t){return this.http.post(Ve+"/delete/"+t,{})}deleteTechnical(t){return this.http.post(Be+"/delete/"+t,{})}static \u0275fac=function(e){return new(e||i)(T(he))};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})};var j=class i{constructor(t,e,a,d,u,ce,wt){this.spinnerService=t;this.dialogService=e;this.messageService=a;this.router=d;this.confirmationService=u;this.templateProjectAssessmentsService=ce;this.employeeService=wt;this.init()}fb=y(ye);state={templateProject:{$dataList:p([]),$dataListAttitude:p([]),$dataListTechnical:p([]),$dataLoading:p(!1),$pagingInfo:p(new re),$totalRowCount:p(1),$attitudeTotalRowCount:p(1),$technicalTotalRowCount:p(1),$selectedData:p(null),$selectedVerified:p(!0),$disabledTable:p(!1),$optionsCategory:p([]),$optionDepartment:p([]),$optionPosition:p([]),$optionLevel:p([]),$selectedCategory:p(null),$searchText:p(""),$searchBtnClickEvent:p(!1)},$formMode:p("idle"),$loading:p(!1)};$firstForm=p(this.fb.group({id:new g({value:null,disabled:!1}),noTemplate:new g({value:null,disabled:!0}),department:new g({value:null,disabled:!1},[b.required]),posisi:new g({value:null,disabled:!1},[b.required]),level:new g({value:null,disabled:!1},[b.required]),status:new g({value:null,disabled:!1},[b.required]),category:new g({value:null,disabled:!0},[b.required]),indicator:new g({value:null,disabled:!0},[b.required]),tools:new g({value:null,disabled:!0},[b.required])})).asReadonly();$searchIndicator=p(this.fb.group({searchText:new g({value:"",disabled:!1},[b.required])})).asReadonly();templateProject={$dataList:this.state.templateProject.$dataList.asReadonly(),$dataListAttitude:this.state.templateProject.$dataListAttitude.asReadonly(),$dataListTechnical:this.state.templateProject.$dataListTechnical.asReadonly(),$dataLoading:this.state.templateProject.$dataLoading.asReadonly(),$selectedData:this.state.templateProject.$selectedData.asReadonly(),$cols:p([{field:"no",header:"No",class_td:"!text-center !max-w-[50px]",type:"no"},{field:"noTemplate",header:"No Template",class_td:"!text-center"},{field:"department",header:"Department",class_td:"!text-center",type:"desc"},{field:"position",header:"Position",class_td:"!text-center",type:"desc"},{field:"level",header:"Level",class_td:"!text-center",type:"desc"},{field:"status",header:"Status",class_td:"!text-center",type:"status"},{field:"action",header:"Actions",class_td:"flex justify-center items-center gap-2",type:"action"}]).asReadonly(),$attitudeCols:p([{field:"no",header:"No",class_td:"!text-center !max-w-[50px]",type:"no"},{field:"category",header:"Category",class_td:"!text-center"},{field:"indicator",header:"Indicator",class_td:"!text-center"},{field:"typeAnswer",header:"Type of Answer",class_td:"!text-center"},{field:"action",header:"Actions",class_td:"flex justify-center items-center gap-2",type:"action"}]).asReadonly(),$techCols:p([{field:"no",header:"No",class_td:"!text-center !max-w-[50px]",type:"no"},{field:"category",header:"Category",class_td:"!text-center"},{field:"tools",header:"Tools",class_td:"!text-center"},{field:"typeAnswer",header:"Type of Answer",class_td:"!text-center"},{field:"action",header:"Actions",class_td:"flex justify-center items-center gap-2",type:"action"}]).asReadonly(),$pagingInfo:this.state.templateProject.$pagingInfo.asReadonly(),$totalRowCount:this.state.templateProject.$totalRowCount.asReadonly(),$attitudeTotalRowCount:this.state.templateProject.$attitudeTotalRowCount.asReadonly(),$technicalTotalRowCount:this.state.templateProject.$technicalTotalRowCount.asReadonly(),$optionsCategory:this.state.templateProject.$optionsCategory.asReadonly(),$optionDepartment:this.state.templateProject.$optionDepartment.asReadonly(),$optionPosition:this.state.templateProject.$optionPosition.asReadonly(),$optionLevel:this.state.templateProject.$optionLevel.asReadonly(),$selectedCategory:this.state.templateProject.$selectedCategory.asReadonly(),$searchText:V(()=>this.templateProject.$selectedCategory()==="id"?parseInt(this.state.templateProject.$searchText()):this.state.templateProject.$searchText()),$filter:V(()=>{let t=null;return this.state.templateProject.$selectedCategory()==="noTemplate"?t={noTemplate:this.templateProject.$searchText()}:this.state.templateProject.$selectedCategory()==="department"?t={department:this.templateProject.$searchText()}:this.state.templateProject.$selectedCategory()==="position"?t={position:this.templateProject.$searchText()}:this.state.templateProject.$selectedCategory()==="level"?t={level:this.templateProject.$searchText()}:this.state.templateProject.$selectedCategory()==="status"&&(t={status:this.templateProject.$searchText()}),t}),$disabledTable:V(()=>this.state.$formMode()=="update")};$formMode=this.state.$formMode.asReadonly();ref;init(){this.setSpinner(),this.setSearchCategory(),this.populateList(),this.setOptionDepartment(),this.setOptionPosition(),this.setOptionLevel()}setSpinner(){Ee(this.state.$loading).subscribe(t=>t?this.spinnerService.show():this.spinnerService.hide())}populateList(){this.state.templateProject.$dataLoading.set(!0);let t={wrapper:this.templateProject.$filter(),pagingInfo:this.state.templateProject.$pagingInfo(),totalRowCount:this.state.templateProject.$totalRowCount()};this.templateProjectAssessmentsService.list(t).subscribe(e=>{e.status&&(this.state.templateProject.$dataList.set(e.object.dataList||[]),this.state.templateProject.$totalRowCount.set(e.object.totalRowCount||0),this.state.templateProject.$pagingInfo.set(e.object.pagingInfo||new re)),this.state.templateProject.$dataLoading.set(!1)},e=>{console.error("Error fetching Template Projects:",e),this.state.templateProject.$dataList.set([]),this.state.templateProject.$totalRowCount.set(0),this.state.templateProject.$dataLoading.set(!1)})}onLazyLoad(t){this.state.templateProject.$pagingInfo.set(me(pe({},this.templateProject.$pagingInfo()),{currentPage:Math.floor(t.first/t.rows)+1,pageSize:t.rows})),this.populateList()}onLazyLoadAttitude(t){}onLazyLoadTechnical(t){}setSearchCategory(){this.state.templateProject.$optionsCategory.set([{label:"Semua",value:null},{label:"Template",value:"template"}])}onSearchBtnClicked(t,e){this.state.templateProject.$selectedCategory.set(t),t&&this.state.templateProject.$searchText.set(e),this.populateList()}setOptionDirektorat(){}addAction(){this.$firstForm().reset(),this.$firstForm().get("status")?.setValue(1),this.state.$formMode.set("add")}deleteAction(t){this.confirmationService.confirm({header:"Konfirmasi",message:"Apakah Anda yakin ingin menghapus data ini?",accept:()=>{this.doDelete(t.id)},reject:()=>{}})}doDelete(t){this.templateProjectAssessmentsService.delete(t).subscribe(e=>{e.status?(this.messageService.add({severity:"success",summary:"Success",detail:"Hapus data berhasil!"}),this.populateList()):this.messageService.add({severity:"error",summary:"Error",detail:e.message})},e=>{this.spinnerService.hide(),console.error("Error fetching Template Projects:",e)})}deleteActionAttitude(t){this.confirmationService.confirm({header:"Konfirmasi",message:"Apakah Anda yakin ingin menghapus attitude ini?",accept:()=>{this.doDeleteAttitude(t.id)},reject:()=>{}})}doDeleteAttitude(t){this.templateProjectAssessmentsService.deleteAttitude(t).subscribe(e=>{e.status?(this.messageService.add({severity:"success",summary:"Success",detail:"Hapus data berhasil!"}),this.getById(this.$firstForm().get("id")?.value)):this.messageService.add({severity:"error",summary:"Error",detail:e.message})},e=>{this.spinnerService.hide(),console.error("Error fetching Template Projects:",e)})}deleteActionTechnical(t){this.confirmationService.confirm({header:"Konfirmasi",message:"Apakah Anda yakin ingin menghapus technical ini?",accept:()=>{this.doDeleteTechnical(t.id)},reject:()=>{}})}doDeleteTechnical(t){this.templateProjectAssessmentsService.deleteTechnical(t).subscribe(e=>{e.status?(this.messageService.add({severity:"success",summary:"Success",detail:"Hapus data berhasil!"}),this.getById(this.$firstForm().get("id")?.value)):this.messageService.add({severity:"error",summary:"Error",detail:e.message})},e=>{this.spinnerService.hide(),console.error("Error fetching Template Projects:",e)})}editAction(t){this.getById(t?.id),this.state.$formMode.set("add")}getById(t){return de(this,null,function*(){this.spinnerService.show(),this.templateProjectAssessmentsService.getById(t).subscribe(e=>{let a=e.object;this.$firstForm().patchValue({id:a.id,noTemplate:a.noTemplate,department:a.department,posisi:a.posisi,level:a.level,status:a.status,category:a.category,indicator:a.indicator,tools:a.tools}),this.state.templateProject.$dataListAttitude.set(a.attitudes||[]),this.state.templateProject.$attitudeTotalRowCount.set(Object.keys(a.attitudes).length||0),this.state.templateProject.$dataListTechnical.set(a.technicals||[]),this.state.templateProject.$technicalTotalRowCount.set(Object.keys(a.technicals).length||0),this.spinnerService.hide()},e=>{this.spinnerService.hide(),console.error("Error fetching Template Projects:",e)})})}onClickLookupIndicator(){this.ref=this.dialogService.open(ke,{header:"Lookup Attitude Question",modal:!0}),this.ref.onClose.subscribe(t=>{let e=this.templateProject.$dataListAttitude();e.push(t),this.state.templateProject.$dataListAttitude.set(e)})}onClickLookupTools(){this.ref=this.dialogService.open(De,{header:"Lookup Skill Question",modal:!0}),this.ref.onClose.subscribe(t=>{let e=this.templateProject.$dataListTechnical();e.push(t),this.state.templateProject.$dataListTechnical.set(e)})}onClickSearch(){}onClickResetSearch(){this.$searchIndicator().patchValue({searchText:""}),this.populateList()}onRefreshSearchClicked({search:t}){this.state.templateProject.$searchText.set(t),this.populateList()}saveAction(){console.log(this.$firstForm()),this.confirmationService.confirm({header:"Konfirmasi",message:"Apakah Anda yakin ingin menyimpan data?",accept:()=>{this.doSave()},reject:()=>{}})}doSave(){this.spinnerService.show();let t=new ee;t.id=this.$firstForm().get("id")?.value,t.status=this.$firstForm().get("status")?.value,t.departmentId=this.$firstForm().get("department")?.value,t.positionId=this.$firstForm().get("posisi")?.value,t.levelId=this.$firstForm().get("level")?.value,t.attitudes=this.state.templateProject.$dataListAttitude(),t.technicals=this.state.templateProject.$dataListTechnical(),this.templateProjectAssessmentsService.save(t).subscribe(e=>{e.status?(this.state.$formMode.set("idle"),this.messageService.add({severity:"success",summary:"Success",detail:"Simpan data berhasil!"})):this.messageService.add({severity:"error",summary:"Error",detail:e.message}),this.spinnerService.hide()},e=>{this.spinnerService.hide(),console.error("Error fetching Template Projects:",e)})}cancelAction(){this.$firstForm().reset(),this.state.$formMode.set("idle")}setOptionDepartment(){this.employeeService.getDepartmentList().subscribe(t=>{if(t.status){let e=t.object.map(a=>({label:a.label,value:a.value}));this.state.templateProject.$optionDepartment.set(e)}else console.error("Failed to fetch department list:",t.message)},t=>{console.error("Error fetching department list:",t)})}setOptionPosition(){this.employeeService.getPositionList().subscribe(t=>{if(t.status){let e=t.object.map(a=>({label:a.label,value:a.value}));this.state.templateProject.$optionPosition.set(e)}else console.error("Failed to fetch position list:",t.message)},t=>{console.error("Error fetching position list:",t)})}setOptionLevel(){this.employeeService.getLevelList().subscribe(t=>{if(t.status){let e=t.object.map(a=>({label:a.label,value:a.value}));this.state.templateProject.$optionLevel.set(e)}else console.error("Failed to fetch level list:",t.message)},t=>{console.error("Error fetching level list:",t)})}static \u0275fac=function(e){return new(e||i)(T(Se),T(Ie),T(Ce),T(ge),T(ve),T(ie),T(Re))};static \u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})};var ae=class i{searchForm=new je({category:new g({value:null,disabled:!1}),search:new g({value:"",disabled:!1})});searchOptions=[{label:"Semua",value:null},{label:"No Template",value:"noTemplate"},{label:"Department",value:"department"},{label:"Position",value:"position"},{label:"Level",value:"level"},{label:"Status",value:"status"}];templateProjectStore=y(j);tempSearch="";constructor(){this.onSearchChanges()}onSearchChanges(){this.searchForm.controls.search.valueChanges.subscribe(t=>{this.tempSearch=t})}onRefreshSearch(){this.searchForm.patchValue({search:""})}onButtonClicked(){this.templateProjectStore.onSearchBtnClicked(this.searchForm.get("category")?.value,this.searchForm.get("search")?.value)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=x({type:i,selectors:[["app-template-project-search"]],standalone:!0,features:[$],decls:9,vars:2,consts:[[1,"grid","grid-cols-12","grid-flow-rows","gap-2","w-full",3,"formGroup"],[1,"col-span-3","md:col-span-3"],["formControlName","category","placeholder","Search By",1,"w-full","!h-full",3,"options"],[1,"col-span-9","md:col-span-9","w-full"],["pInputText","","formControlName","search","name","search",1,"col-span-5","md:col-span-5"],["icon","pi pi-search","label","Search",1,"w-full","!h-full",3,"click"],["icon","pi pi-refresh","label","Reset","severity","info",1,"w-full","!h-full",3,"click"]],template:function(e,a){e&1&&(n(0,"div",0)(1,"div",1),m(2,"p-select",2),o(),n(3,"p-inputgroup",3),m(4,"input",4),n(5,"p-inputgroup-addon")(6,"p-button",5),_("click",function(){return a.onButtonClicked()}),o()(),n(7,"p-inputgroup-addon")(8,"p-button",6),_("click",function(){return a.onRefreshSearch()}),o()()()()),e&2&&(c("formGroup",a.searchForm),l(2),c("options",a.searchOptions))},dependencies:[be,z,G,q,U,K,Y,xe,Q,Pe,E,w,W,Ae,Le]})};var Ke=()=>[5,10,20];function Qe(i,t){if(i&1&&(n(0,"th",10),s(1),o()),i&2){let e=t.$implicit;l(),S(" ",e.header," ")}}function We(i,t){if(i&1&&(n(0,"tr"),h(1,Qe,2,1,"th",9),o()),i&2){let e=t.$implicit;l(),c("ngForOf",e)}}function Je(i,t){if(i&1&&(n(0,"td"),m(1,"div",13),o()),i&2){let e=r().$implicit,a=r().$implicit;f(e.class_td),l(),c("outerHTML",e.template(a[e.field]),I)}}function Xe(i,t){if(i&1){let e=A();n(0,"td")(1,"p-button",14),_("click",function(){v(e);let d=r(2).$implicit,u=r();return C(u.templateProjectStore.editAction(d))}),o(),n(2,"p-button",15),_("click",function(){v(e);let d=r(2).$implicit,u=r();return C(u.templateProjectStore.deleteAction(d))}),o()()}if(i&2){let e=r().$implicit;f(e.class_td)}}function Ye(i,t){if(i&1&&(n(0,"td"),s(1),o()),i&2){let e=r().$implicit,a=r().rowIndex;f(e.class_td),l(),S(" ",a+1," ")}}function Ze(i,t){if(i&1&&(n(0,"td"),s(1),o()),i&2){let e=r().$implicit,a=r().$implicit;f(e.class_td),l(),S(" ",a[e.field].description," ")}}function et(i,t){i&1&&s(0," Inactive ")}function tt(i,t){i&1&&s(0," Active ")}function it(i,t){if(i&1&&(n(0,"td"),h(1,et,1,0)(2,tt,1,0),o()),i&2){let e=r().$implicit,a=r().$implicit;f(e.class_td),l(),L(a[e.field]==0?1:a[e.field]==0?2:-1)}}function at(i,t){if(i&1&&(n(0,"td"),s(1),o()),i&2){let e=r().$implicit,a=r().$implicit;f(e.class_td),l(),S(" ",a[e.field]," ")}}function nt(i,t){if(i&1&&h(0,Je,2,3,"td",12)(1,Xe,3,2,"td",12)(2,Ye,2,3,"td",12)(3,Ze,2,3,"td",12)(4,it,3,3,"td",12)(5,at,2,3,"td",12),i&2){let e,a=t.$implicit;L((e=a.type)==="custom"?0:e==="action"?1:e==="no"?2:e==="desc"?3:e==="status"?4:5)}}function ot(i,t){if(i&1&&(n(0,"tr",11),D(1,nt,6,1,null,null,k),o()),i&2){let e=t.$implicit,a=t.columns;c("pSelectableRow",e),l(),F(a)}}function lt(i,t){if(i&1&&(n(0,"tr")(1,"td",16),s(2,"Data Kosong"),o()()),i&2){let e=r();l(),R("colspan",e.templateProjectStore.templateProject.$cols().length)}}var ne=class i{templateProjectStore=y(j);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=x({type:i,selectors:[["app-template-project-list"]],standalone:!0,features:[$],decls:13,vars:12,consts:[["dt",""],["header",""],["body",""],["emptymessage",""],[1,"grid","gap-2"],[1,"flex","justify-end","items-center","gap-1","flex-col","md:flex-row","mb-2","w-full"],["label","+ Add Template","styleClass","w-full p-button-contrast",1,"col-start-4","col-end-5","gap-2",3,"onClick"],[3,"onLazyLoad","columns","value","loading","paginator","rows","rowsPerPageOptions","paginatorDropdownAppendTo","lazy","totalRecords"],[3,"blocked","target"],["class","!text-center",4,"ngFor","ngForOf"],[1,"!text-center"],[3,"pSelectableRow"],[3,"class"],[3,"outerHTML"],["styleClass","p-button-info","icon","pi pi-pencil","pTooltip","Edit",3,"click"],["styleClass","p-button-danger","icon","pi pi-trash","pTooltip","Delete",3,"click"],[1,"!text-center","w-full"]],template:function(e,a){if(e&1){let d=A();n(0,"div",4),m(1,"app-template-project-search"),n(2,"div",5)(3,"p-button",6),_("onClick",function(){return v(d),C(a.templateProjectStore.addAction())}),o()(),n(4,"p-table",7,0),_("onLazyLoad",function(ce){return v(d),C(a.templateProjectStore.onLazyLoad(ce))}),h(6,We,2,1,"ng-template",null,1,P)(8,ot,3,1,"ng-template",null,2,P)(10,lt,3,1,"ng-template",null,3,P),o()(),m(12,"p-blockui",8)}if(e&2){let d=le(5),u=le(9);l(4),c("columns",a.templateProjectStore.templateProject.$cols())("value",a.templateProjectStore.templateProject.$dataList())("loading",a.templateProjectStore.templateProject.$dataLoading())("paginator",!0)("rows",5)("rowsPerPageOptions",fe(11,Ke))("paginatorDropdownAppendTo",u)("lazy",!0)("totalRecords",a.templateProjectStore.templateProject.$totalRowCount()),l(8),c("blocked",a.templateProjectStore.templateProject.$disabledTable())("target",d)}},dependencies:[w,E,J,X,B,we,O,Y,ae]})};function st(i,t){if(i&1&&(n(0,"th",41),s(1),o()),i&2){let e=t.$implicit;l(),S(" ",e.header," ")}}function ct(i,t){if(i&1&&(n(0,"tr"),h(1,st,2,1,"th",40),o()),i&2){let e=t.$implicit;l(),c("ngForOf",e)}}function pt(i,t){if(i&1&&(n(0,"td"),m(1,"div",44),o()),i&2){let e=r().$implicit,a=r().$implicit;f(e.class_td),l(),c("outerHTML",e.template(a[e.field]),I)}}function mt(i,t){if(i&1){let e=A();n(0,"td")(1,"p-button",45),_("click",function(){v(e);let d=r(2).$implicit,u=r();return C(u.templateProjectStore.deleteActionAttitude(d))}),o()()}if(i&2){let e=r().$implicit;f(e.class_td)}}function dt(i,t){if(i&1&&(n(0,"td"),s(1),o()),i&2){let e=r().$implicit,a=r().rowIndex;f(e.class_td),l(),S(" ",a+1," ")}}function ut(i,t){if(i&1&&(n(0,"td"),s(1),o()),i&2){let e=r().$implicit,a=r().$implicit;f(e.class_td),l(),S(" ",a[e.field]," ")}}function ft(i,t){if(i&1&&h(0,pt,2,3,"td",43)(1,mt,2,2,"td",43)(2,dt,2,3,"td",43)(3,ut,2,3,"td",43),i&2){let e,a=t.$implicit;L((e=a.type)==="custom"?0:e==="action"?1:e==="no"?2:3)}}function _t(i,t){if(i&1&&(n(0,"tr",42),D(1,ft,4,1,null,null,k),o()),i&2){let e=t.$implicit,a=t.columns;c("pSelectableRow",e),l(),F(a)}}function ht(i,t){if(i&1&&(n(0,"tr")(1,"td",46),s(2," Data Kosong"),o()()),i&2){let e=r();l(),R("colspan",e.templateProjectStore.templateProject.$attitudeCols().length)}}function gt(i,t){if(i&1&&(n(0,"th",41),s(1),o()),i&2){let e=t.$implicit;l(),S(" ",e.header," ")}}function vt(i,t){if(i&1&&(n(0,"tr"),h(1,gt,2,1,"th",40),o()),i&2){let e=t.$implicit;l(),c("ngForOf",e)}}function Ct(i,t){if(i&1&&(n(0,"td"),m(1,"div",44),o()),i&2){let e=r().$implicit,a=r().$implicit;f(e.class_td),l(),c("outerHTML",e.template(a[e.field]),I)}}function St(i,t){if(i&1){let e=A();n(0,"td")(1,"p-button",47),_("click",function(){v(e);let d=r(2).$implicit,u=r();return C(u.templateProjectStore.deleteActionTechnical(d))}),o()()}if(i&2){let e=r().$implicit;f(e.class_td)}}function Pt(i,t){if(i&1&&(n(0,"td"),s(1),o()),i&2){let e=r().$implicit,a=r().rowIndex;f(e.class_td),l(),S(" ",a+1," ")}}function jt(i,t){if(i&1&&(n(0,"td"),s(1),o()),i&2){let e=r().$implicit,a=r().$implicit;f(e.class_td),l(),S(" ",a[e.field]," ")}}function Tt(i,t){if(i&1&&h(0,Ct,2,3,"td",43)(1,St,2,2,"td",43)(2,Pt,2,3,"td",43)(3,jt,2,3,"td",43),i&2){let e,a=t.$implicit;L((e=a.type)==="custom"?0:e==="action"?1:e==="no"?2:3)}}function yt(i,t){if(i&1&&(n(0,"tr",42),D(1,Tt,4,1,null,null,k),o()),i&2){let e=t.$implicit,a=t.columns;c("pSelectableRow",e),l(),F(a)}}function bt(i,t){if(i&1&&(n(0,"tr")(1,"td",46),s(2,"Data Kosong"),o()()),i&2){let e=r();l(),R("colspan",e.templateProjectStore.templateProject.$techCols().length)}}var oe=class i{templateProjectStore=y(j);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=x({type:i,selectors:[["app-add-template"]],standalone:!0,features:[$],decls:100,vars:14,consts:[["dt",""],["header",""],["body",""],["emptymessage",""],[3,"formGroup"],["header","Add Template"],[1,"grid","grid-cols-12","gap-12"],[1,"col-span-12","md:col-span-6","grid","gap-2"],[1,"grid","grid-cols-12","items-center","gap-2"],[1,"col-span-3"],["for","noEmployee"],[1,"col-span-1"],[1,"col-span-8"],["id","noTemplate","type","text","pInputText","","formControlName","noTemplate",1,"w-full"],["for","department"],["formControlName","department","id","department","name","department","placeholder","-- Pilih --",1,"w-full",3,"options"],["for","posisi"],["formControlName","posisi","id","posisi","name","posisi","placeholder","-- Pilih --",1,"w-full",3,"options"],["for","level"],["formControlName","level","id","level","name","level","placeholder","-- Pilih --",1,"w-full",3,"options"],["for","status"],[1,"col-span-1","flex","items-center"],["formControlName","status","id","active","name","status","value","1","label","Active",1,"w-full"],["formControlName","status","id","inactive","name","status","value","0","label","Inactive",1,"w-full"],["header","A. Attitude Skill Set",1,"mt-6","pt-6"],[1,"grid","grid-cols-12","gap-2"],[1,"col-span-1","lg:col-span-1"],["for","category"],[1,"col-span-4","lg:col-span-4"],["formControlName","category","id","category","name","category","placeholder","-- Pilih --",1,"w-full"],["for","indicator"],["formControlName","indicator","id","indicator","name","indicator","placeholder","-- Pilih --",1,"w-full",3,"disabled"],[1,"col-span-2","lg:col-span-2"],["label","Lookup Indicator","styleClass","w-full !h-full","icon","pi pi-search","severity","contrast",3,"onClick"],[3,"columns","value","loading","totalRecords"],["header","Technical Skill Set"],["label","Lookup Tools","styleClass","w-full !h-full","icon","pi pi-search","severity","contrast",3,"onClick"],[1,"flex","justify-end","items-center","gap-2"],["styleClass","p-button-success","icon","pi pi-save","label","Simpan",3,"click"],["styleClass","p-button-danger","icon","pi pi-times","label","Batal",3,"click"],["class","!text-center",4,"ngFor","ngForOf"],[1,"!text-center"],[3,"pSelectableRow"],[3,"class"],[3,"outerHTML"],["styleClass","p-button-danger","icon","pi pi-trash","pTooltip","Hapus Attitude",3,"click"],[1,"!text-center","w-full"],["styleClass","p-button-danger","icon","pi pi-trash","pTooltip","Hapus Technical",3,"click"]],template:function(e,a){if(e&1){let d=A();n(0,"form",4)(1,"p-panel",5)(2,"div",6)(3,"div",7)(4,"div",8)(5,"div",9)(6,"label",10),s(7,"No Template"),o()(),n(8,"div",11),s(9,":"),o(),n(10,"div",12),m(11,"input",13),o()(),n(12,"div",8)(13,"div",9)(14,"label",14),s(15,"Department"),o()(),n(16,"div",11),s(17,":"),o(),n(18,"div",12),m(19,"p-select",15),o()(),n(20,"div",8)(21,"div",9)(22,"label",16),s(23,"Posisi"),o()(),n(24,"div",11),s(25,":"),o(),n(26,"div",12),m(27,"p-select",17),o()(),n(28,"div",8)(29,"div",9)(30,"label",18),s(31,"Level"),o()(),n(32,"div",11),s(33,":"),o(),n(34,"div",12),m(35,"p-select",19),o()(),n(36,"div",8)(37,"div",9)(38,"label",20),s(39,"Status"),o()(),n(40,"div",11),s(41,":"),o(),n(42,"div",21),m(43,"p-radiobutton",22),s(44," \xA0\xA0 "),n(45,"label"),s(46,"Active"),o()(),m(47,"div",11),n(48,"div",21),m(49,"p-radiobutton",23),s(50," \xA0\xA0 "),n(51,"label"),s(52,"Inactive"),o()()()()()(),n(53,"p-panel",24)(54,"div",25)(55,"div",26)(56,"label",27),s(57,"Category"),o()(),n(58,"div",28),m(59,"p-select",29),o(),n(60,"div",26)(61,"label",30),s(62,"Indicator"),o()(),n(63,"div",28),m(64,"p-select",31),o(),n(65,"div",32)(66,"p-button",33),_("onClick",function(){return v(d),C(a.templateProjectStore.onClickLookupIndicator())}),o()()(),n(67,"p-table",34,0),h(69,ct,2,1,"ng-template",null,1,P)(71,_t,3,1,"ng-template",null,2,P)(73,ht,3,1,"ng-template",null,3,P),o()(),n(75,"p-panel",35)(76,"div",25)(77,"div",26)(78,"label",18),s(79,"Category"),o()(),n(80,"div",28),m(81,"p-select",29),o(),n(82,"div",26)(83,"label",18),s(84,"Tools"),o()(),n(85,"div",28),m(86,"p-select",31),o(),n(87,"div",32)(88,"p-button",36),_("onClick",function(){return v(d),C(a.templateProjectStore.onClickLookupTools())}),o()()(),n(89,"p-table",34,0),h(91,vt,2,1,"ng-template",null,1,P)(93,yt,3,1,"ng-template",null,2,P)(95,bt,3,1,"ng-template",null,3,P),o()(),n(97,"div",37)(98,"p-button",38),_("click",function(){return v(d),C(a.templateProjectStore.saveAction())}),o(),n(99,"p-button",39),_("click",function(){return v(d),C(a.templateProjectStore.cancelAction())}),o()()()}e&2&&(c("formGroup",a.templateProjectStore.$firstForm()),l(19),c("options",a.templateProjectStore.templateProject.$optionDepartment()),l(8),c("options",a.templateProjectStore.templateProject.$optionPosition()),l(8),c("options",a.templateProjectStore.templateProject.$optionLevel()),l(29),c("disabled",!0),l(3),c("columns",a.templateProjectStore.templateProject.$attitudeCols())("value",a.templateProjectStore.templateProject.$dataListAttitude())("loading",a.templateProjectStore.templateProject.$dataLoading())("totalRecords",a.templateProjectStore.templateProject.$attitudeTotalRowCount()),l(19),c("disabled",!0),l(3),c("columns",a.templateProjectStore.templateProject.$techCols())("value",a.templateProjectStore.templateProject.$dataListTechnical())("loading",a.templateProjectStore.templateProject.$dataLoading())("totalRecords",a.templateProjectStore.templateProject.$technicalTotalRowCount()))},dependencies:[w,H,Te,z,G,q,Q,W,E,J,X,B,$e,O,U,K]})};function xt(i,t){i&1&&m(0,"app-template-project-list")}function $t(i,t){i&1&&m(0,"app-add-template")}var Ne=class i{templateProjectStore=y(j);constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=x({type:i,selectors:[["app-template-project-assessments"]],standalone:!0,features:[ue([j]),$],decls:4,vars:2,consts:[["header","Template Project List",1,"blue"],[1,"mt-6"],[4,"ngIf"]],template:function(e,a){e&1&&(n(0,"p-panel",0)(1,"div",1),h(2,xt,1,0,"app-template-project-list",2)(3,$t,1,0,"app-add-template",2),o()()),e&2&&(l(2),c("ngIf",a.templateProjectStore.$formMode()==="idle"),l(),c("ngIf",a.templateProjectStore.$formMode()==="add"))},dependencies:[w,H,_e,ne,oe]})};export{Ne as TemplateProjectAssessmentsComponent};
