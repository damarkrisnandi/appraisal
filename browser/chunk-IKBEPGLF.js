import{a as se,b as xe}from"./chunk-DHGTNLRA.js";import{a as oe}from"./chunk-RDKT7UU7.js";import{a as Fe}from"./chunk-CRDDT6HZ.js";import{a as O,b as pe}from"./chunk-YDBF4JCQ.js";import{A as ae,O as C,g as De,j as k,k as z,l as X,o as Y,p as Z}from"./chunk-TS4LB2JZ.js";import{o as L,q as I,u as le}from"./chunk-NDG5SCMG.js";import"./chunk-4YRY4IP2.js";import"./chunk-ATB2IEIN.js";import"./chunk-VP2SXEXU.js";import{a as te}from"./chunk-OQKDZ6KP.js";import"./chunk-CH6NKNWW.js";import{b as P,e as F,f as $,h as d,k as D,l as x,n as ke}from"./chunk-FLY6AGIF.js";import"./chunk-NXN4P4DR.js";import{a as Pe}from"./chunk-QASMVVIP.js";import{ua as Q,xa as we}from"./chunk-UHXCHP4M.js";import{$b as y,Ab as G,Bb as i,Cb as r,Db as l,Hb as T,Ib as m,Jb as g,Qc as K,Sb as U,Tb as p,Ub as w,Vb as S,Wc as H,Ya as s,Z as Ee,_b as $e,ac as M,ca as ee,da as j,fb as c,ha as v,kc as W,mc as q,nc as N,ob as E,ra as _,rb as f,sa as h,wb as V,yb as Le,zb as A}from"./chunk-QSF35MWG.js";function Re(n,t){if(n&1&&(i(0,"div",7)(1,"div",9),p(2),r(),i(3,"div",10),p(4," - "),r(),i(5,"div",3),p(6),r()()),n&2){let e=t.$implicit;s(2),S(" ",e.fullName," "),s(4),S(" ",e.directorateDescription," ")}}var me=class n{projectStore=j(b);ref=j(O);onClickClose(){this.ref.close()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-project-view-lookup"]],standalone:!0,features:[y],decls:57,vars:13,consts:[[1,"grid","grid-cols-12","gap-2",3,"formGroup"],[1,"col-span-2","flex","items-center"],[1,"break-words"],[1,"col-span-6"],[1,"p-2","border","rounded-md","bg-gray-300"],[1,"col-span-4"],[1,"col-span-2","flex","mt-2"],[1,"grid","grid-cols-12","gap-2"],["label","OK",3,"onClick"],[1,"col-span-5"],[1,"col-span-1","text-center"]],template:function(e,o){if(e&1&&(i(0,"div",0)(1,"div",1)(2,"p",2),p(3,"Project Name"),r()(),i(4,"div",3)(5,"p",4),p(6),r()(),l(7,"div",5),i(8,"div",1)(9,"p",2),p(10,"Project Manager"),l(11,"br"),p(12,"/ Penanggung Jawab"),r()(),i(13,"div",3)(14,"p",4),p(15),r()(),l(16,"div",5),i(17,"div",1)(18,"p",2),p(19,"Team Leader"),r()(),i(20,"div",3)(21,"p",4),p(22),r()(),l(23,"div",5),i(24,"div",1)(25,"p",2),p(26,"Start Date"),r()(),i(27,"div",3)(28,"p",4),p(29),W(30,"date"),r()(),l(31,"div",5),i(32,"div",1)(33,"p",2),p(34,"End Date"),r()(),i(35,"div",3)(36,"p",4),p(37),W(38,"date"),r()(),l(39,"div",5),i(40,"div",1)(41,"p",2),p(42,"Total of Member"),r()(),i(43,"div",3)(44,"p",4),p(45),r()(),l(46,"div",5),i(47,"div",6)(48,"p",2),p(49,"Name of Member"),r()(),i(50,"div",3)(51,"p",4),A(52,Re,7,2,"div",7,Le),r()(),l(54,"div",5),i(55,"div")(56,"p-button",8),m("onClick",function(){return o.onClickClose()}),r()()()),e&2){let a,u,R,ve,ye,Ce,Se;f("formGroup",o.projectStore.$viewForm()),s(6),S(" ",(a=o.projectStore.$viewForm().get("projectName"))==null?null:a.value," "),s(9),S(" ",(u=o.projectStore.$viewForm().get("projectManager"))==null?null:u.value," "),s(7),S(" ",(R=o.projectStore.$viewForm().get("teamLeader"))==null?null:R.value," "),s(7),S(" ",q(30,7,(ve=o.projectStore.$viewForm().get("startDate"))==null?null:ve.value,"dd/MM/yyyy")," "),s(8),S(" ",q(38,10,(ye=o.projectStore.$viewForm().get("endDate"))==null?null:ye.value,"dd/MM/yyyy")," "),s(8),S(" ",(Ce=o.projectStore.$viewForm().get("totalMember"))==null?null:Ce.value," "),s(7),G((Se=o.projectStore.$viewForm().get("employeeList"))==null?null:Se.value)}},dependencies:[C,$,L,D,H]})};var Ve=(n,t)=>t.field,Ae=()=>({"min-width":"50rem"}),Ge=()=>[5,10,20];function ze(n,t){n&1&&(i(0,"tr")(1,"td",14)(2,"div"),p(3,"Loading data..."),r()()())}function Oe(n,t){if(n&1&&(i(0,"th",16),p(1),r()),n&2){let e=t.$implicit;s(),S(" ",e.header," ")}}function Be(n,t){if(n&1&&(i(0,"tr"),E(1,Oe,2,1,"th",15),i(2,"th"),p(3," Action "),r()()),n&2){let e=t.$implicit;s(),f("ngForOf",e)}}function We(n,t){if(n&1&&(i(0,"td",19),p(1),r()),n&2){let e=g().$implicit,o=g().$implicit;s(),w(o[e.field])}}function qe(n,t){if(n&1&&(i(0,"td"),p(1),r()),n&2){let e=g().$implicit,o=g().$implicit;s(),w(o[e.field])}}function Je(n,t){if(n&1&&E(0,We,2,1,"td",19)(1,qe,2,1,"td"),n&2){let e=t.$implicit;V(e.format==="center"?0:1)}}function Ue(n,t){if(n&1){let e=T();i(0,"tr",17),A(1,Je,2,1,null,null,Ve),i(3,"td")(4,"p-button",18),m("onClick",function(){let a=_(e).$implicit,u=g();return h(u.pilih(a))}),r()()()}if(n&2){let e=t.$implicit,o=t.columns;f("pSelectableRow",e),s(),G(o)}}var ce=class n{projectStore=j(b);ref=j(O);visibleViewLookup=!1;batal(){this.ref.close()}pilih(t){this.ref.close(t)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-employee-lookup"]],standalone:!0,features:[y],decls:18,vars:14,consts:[["header",""],["body",""],["header","Project List"],[1,"grid","grid-cols-12","gap-4",3,"formGroup"],[1,"col-span-2"],["formControlName","category","placeholder","Search By",1,"w-full",3,"options"],[1,"col-span-7"],["type","text","pInputText","","formControlName","searchText",1,"w-full"],[1,"col-span-1"],["label","Search",3,"onClick"],["label","Reset",3,"onClick"],["stripedRows","","showGridlines","",3,"onLazyLoad","value","tableStyle","columns","loading","lazy","paginator","rows","rowsPerPageOptions","paginatorDropdownAppendTo","totalRecords"],["pTemplate","loadingbody"],["label","Batal",3,"onClick"],["colspan","9",1,"text-center"],["class","!text-center",4,"ngFor","ngForOf"],[1,"!text-center"],[3,"pSelectableRow"],["label","Pilih",3,"onClick"],[2,"text-align","center"]],template:function(e,o){if(e&1){let a=T();i(0,"p-panel",2)(1,"div",3)(2,"div",4),l(3,"p-select",5),r(),i(4,"div",6),l(5,"input",7),r(),i(6,"div",8)(7,"p-button",9),m("onClick",function(){return _(a),h(o.projectStore.onClickSearch())}),r()(),i(8,"div",8)(9,"p-button",10),m("onClick",function(){return _(a),h(o.projectStore.onClickResetSearch())}),r()()(),l(10,"br"),i(11,"p-table",11),m("onLazyLoad",function(R){return _(a),h(o.projectStore.onLazyLoadEmployee(R))}),E(12,ze,4,0,"ng-template",12)(13,Be,4,1,"ng-template",null,0,N)(15,Ue,5,1,"ng-template",null,1,N),r(),i(17,"p-button",13),m("onClick",function(){return _(a),h(o.batal())}),r()()}if(e&2){let a=U(16);s(),f("formGroup",o.projectStore.$searchForm()),s(2),f("options",o.projectStore.$optionsCategoryEmployeeList()),s(8),f("value",o.projectStore.$dataListEmployee())("tableStyle",M(12,Ae))("columns",o.projectStore.$colsEmployee())("loading",o.projectStore.$dataLoading())("lazy",!0)("paginator",!0)("rows",5)("rowsPerPageOptions",M(13,Ge))("paginatorDropdownAppendTo",a)("totalRecords",o.projectStore.$totalRowCount())}},dependencies:[C,k,Q,P,F,$,I,z,L,Y,Z,K,D,x]})};var re=class n{projectStore=j(b);ref=j(O);onClickSave(){this.ref.close(!0)}onClickCancel(){this.projectStore.$projectEditDetailAddLookupForm().reset(),this.ref.close()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-project-edit-detail-add-lookup"]],standalone:!0,features:[y],decls:42,vars:4,consts:[[1,"grid","grid-cols-12","gap-2",3,"formGroup"],[1,"col-span-2","flex"],[1,"break-words"],[1,"col-span-6"],["type","text","pInputText","","formControlName","memberName",1,"w-full","p-2","border","rounded-md"],[1,"col-span-1"],["icon","pi pi-search",3,"onClick"],[1,"col-span-3"],["formControlName","department","id","position","name","position","placeholder","-- pilih --","appendTo","body",1,"w-full",3,"options"],[1,"col-span-4"],["formControlName","position","id","position","name","position","placeholder","-- pilih --","appendTo","body",1,"w-full",3,"options"],["formControlName","level","id","level","name","level","placeholder","-- pilih --","appendTo","body",1,"w-full",3,"options"],["formControlName","startDate","appendTo","body"],["formControlName","endDate","appendTo","body"],["label","save",3,"onClick"],["label","cancel",3,"onClick"]],template:function(e,o){e&1&&(i(0,"div",0)(1,"div",1)(2,"p",2),p(3,"Member Name"),r()(),i(4,"div",3),l(5,"input",4),r(),i(6,"div",5)(7,"p-button",6),m("onClick",function(){return o.projectStore.onClickLookupTeamLeader("member")}),r()(),l(8,"div",7),i(9,"div",1)(10,"p",2),p(11,"Department"),r()(),i(12,"div",3),l(13,"p-select",8),r(),l(14,"div",9),i(15,"div",1)(16,"p",2),p(17,"Position"),r()(),i(18,"div",3),l(19,"p-select",10),r(),l(20,"div",9),i(21,"div",1)(22,"p",2),p(23,"Level"),r()(),i(24,"div",3),l(25,"p-select",11),r(),l(26,"div",9),i(27,"div",1)(28,"p",2),p(29,"Start Date"),r()(),i(30,"div",3),l(31,"p-datepicker",12),r(),l(32,"div",9),i(33,"div",1)(34,"p",2),p(35,"End Date"),r()(),i(36,"div",3),l(37,"p-datepicker",13),r(),l(38,"div",9)(39,"br"),i(40,"p-button",14),m("onClick",function(){return o.onClickSave()}),r(),i(41,"p-button",15),m("onClick",function(){return o.onClickCancel()}),r()()),e&2&&(f("formGroup",o.projectStore.$projectEditDetailAddLookupForm()),s(13),f("options",o.projectStore.$optionDepartment()),s(6),f("options",o.projectStore.$optionPosition()),s(6),f("options",o.projectStore.$optionLevel()))},dependencies:[C,P,F,$,I,z,L,X,D,x]})};var b=class n{constructor(t,e,o,a){this.spinnerService=t;this.projectService=e;this.dialogService=o;this.employeeService=a;this.setSpinner(),this.setSearchCategory()}fb=j(ke);state={$dataList:c([]),$dataLoading:c(!1),$selectedData:c(null),$loading:c(!1),$pagingInfo:c(new te),$projectWrapper:c(null),$totalRowCount:c(0),$searchOptions:c([]),$searchOptionsEmployee:c([]),$disabledAdd:c(!1),$disabledEdit:c(!0),$disabledSave:c(!0),$disabledDelete:c(!0),$formMode:c("home"),$employeeWrapper:c(null),$dataListEmployee:c([]),$selectDataEmployee:c(null),$optionDepartment:c([]),$optionPosition:c([]),$optionLevel:c([])};$dataList=this.state.$dataList.asReadonly();$dataLoading=this.state.$dataLoading.asReadonly();$pagingInfo=this.state.$pagingInfo.asReadonly();$totalRowCount=this.state.$totalRowCount.asReadonly();$cols=c([{field:"projectName",header:"Project Name"},{field:"projectManager",header:"Project Manager"},{field:"teamLeadId",header:"Team Leader"},{field:"startDate",header:"Start Date",format:"date"},{field:"endDate",header:"End Date",format:"date"},{field:"totalMember",header:"Total Member",format:"center"}]).asReadonly();$projectWrapper=this.state.$projectWrapper.asReadonly();$selectData=this.state.$selectedData.asReadonly();$optionsCategory=this.state.$searchOptions.asReadonly();$optionsCategoryEmployeeList=this.state.$searchOptionsEmployee.asReadonly();$searchForm=c(this.fb.group({category:new d({value:null,disabled:!1}),searchText:new d({value:"",disabled:!1}),startDate:new d({value:null,disabled:!1}),endDate:new d({value:null,disabled:!1})}));$viewForm=c(this.fb.group({projectName:new d({value:"",disabled:!0}),projectManager:new d({value:"",disabled:!0}),teamLeader:new d({value:"",disabled:!0}),totalMember:new d({value:0,disabled:!0}),employeeList:new d({value:[],disabled:!0})}));$projectEditDetailForm=c(this.fb.group({projectName:new d({value:"",disabled:!1}),projectId:new d({value:null,disabled:!0}),projectManager:new d({value:"",disabled:!0}),projectManagerId:new d({value:"",disabled:!0}),teamLeader:new d({value:"",disabled:!0}),teamLeaderId:new d({value:"",disabled:!0}),totalMember:new d({value:0,disabled:!0}),startDate:new d({value:null,disabled:!1}),endDate:new d({value:null,disabled:!1})})).asReadonly();$projectEditDetailAddLookupForm=c(this.fb.group({noEmployee:new d({value:"",disabled:!0}),memberName:new d({value:"",disabled:!0}),department:new d({value:"",disabled:!1}),position:new d({value:"",disabled:!1}),level:new d({value:"",disabled:!1}),startDate:new d({value:null,disabled:!1}),endDate:new d({value:null,disabled:!1})})).asReadonly();$projectEditListForm=c(this.fb.group({startDate:new d({value:null,disabled:!1}),endDate:new d({value:null,disabled:!1})})).asReadonly();$colsEditList=c([{field:"noEmployee",header:"Employee ID"},{field:"fullName",header:"Name"},{field:"departmentDescription",header:"Department"},{field:"positionDescription",header:"Position"},{field:"levelDescription",header:"Level"},{field:"startDate",header:"Start Date",format:"date"},{field:"endDate",header:"End Date",format:"date"}]).asReadonly();$disabledAdd=this.state.$disabledAdd.asReadonly();$disabledEdit=this.state.$disabledEdit.asReadonly();$disabledSave=this.state.$disabledSave.asReadonly();$disabledDelete=this.state.$disabledDelete.asReadonly();$formMode=this.state.$formMode.asReadonly();$dataListEmployee=this.state.$dataListEmployee.asReadonly();$colsEmployee=c([{field:"noEmployee",header:"No Employee"},{field:"fullName",header:"Name"},{field:"directorateDescription",header:"Directorate"},{field:"divisionDescription",header:"Division"},{field:"departmentDescription",header:"Department"},{field:"positionDescription",header:"Position"},{field:"unitDescription",header:"Unit"},{field:"levelDescription",header:"Level"}]).asReadonly();$selectedDataEmployee=this.state.$selectDataEmployee.asReadonly();$optionDepartment=this.state.$optionDepartment.asReadonly();$optionPosition=this.state.$optionPosition.asReadonly();$optionLevel=this.state.$optionLevel.asReadonly();ref;setSpinner(){Pe(this.state.$loading).subscribe(t=>t?this.spinnerService.show():this.spinnerService.hide())}onLazyLoad(t){let e=this.state.$pagingInfo();e.currentPage=Math.floor(t.first/t.rows)+1,e.pageSize=t.rows,this.state.$pagingInfo.set(e),this.populateList()}populateList(t){this.state.$dataLoading.set(!0);let e=t||new se;this.state.$dataList.set([]),this.state.$formMode()==="home"?this.findByCriteriaPaginated(e):this.state.$formMode()==="edit"?(this.state.$selectedData()&&this.state.$selectedData()?.id&&this.findEmployeeByProjectId(this.state.$selectedData()?.id),this.state.$dataLoading.set(!1)):this.state.$formMode()==="new"&&(this.state.$dataLoading.set(!1),this.state.$pagingInfo.set(new te),this.state.$totalRowCount.set(0),this.state.$dataList.set([]))}findProjectById(t){this.projectService.findProjectById(t).subscribe(e=>{if(e.status){this.$viewForm().patchValue({projectName:e.object.projectName});let o=new Date(e.object.startDate),a=new Date(e.object.endDate);this.$projectEditDetailForm().patchValue({projectName:e.object.projectName,projectManager:e.object.projectManager,totalMember:e.object.totalMember,teamLeader:e.object.teamLeadId,projectId:e.object.id,startDate:e.object.startDate?o:null,endDate:e.object.endDate?a:null})}this.setFormMode("edit")})}findEmployeeByProjectId(t){let o={wrapper:{projectId:t},pagingInfo:this.state.$pagingInfo(),totalRowCount:this.state.$totalRowCount()};this.employeeService.findEmployeeByProjectId(o).subscribe(a=>{a.status&&(this.state.$pagingInfo.set(a.object.pagingInfo),this.state.$totalRowCount.set(a.object.totalRowCount),this.state.$dataList.set(a.object.dataList))})}findByCriteriaPaginated(t){this.projectService.findByCriteriaPaginated(t,this.state.$pagingInfo()).subscribe(e=>{e.status?(this.state.$pagingInfo.set(e.object.pagingInfo),this.state.$totalRowCount.set(e.object.totalRowCount),this.state.$dataList.set(e.object.dataList)):console.error("Failed to fetch project dataList."),this.state.$dataLoading.set(!1)},e=>{this.state.$dataLoading.set(!1),console.error("Error fetching project dataList:",e)})}setSearchCategory(){this.state.$searchOptions.set([{label:"Semua",value:null},{label:"Project Name",value:"projectName"},{label:"Project Manager",value:"projectManager"}])}setSearchCategoryEmployee(){this.state.$searchOptionsEmployee.set([{label:"Semua",value:null},{label:"Employee ID",value:"noEmployee"},{label:"Name",value:"fullName"},{label:"Position",value:"positionDescription"}])}onClickSearch(){let t=new se;this.$searchForm()?.value?.category==="projectName"?t.projectName=this.$searchForm().value.searchText:this.$searchForm()?.value?.category==="projectManager"&&(t.projectManager=this.$searchForm().value.searchText),this.$searchForm()?.value?.startDate&&(t.startDate=this.$searchForm()?.value?.startDate),this.$searchForm()?.value?.endDate&&(t.endDate=this.$searchForm()?.value?.endDate),this.populateList(t)}onClickResetSearch(){this.$searchForm().reset()}onClickAddProject(){this.state.$formMode.set("new")}resetForm(t){let e=this.$projectEditDetailForm();t.forEach(o=>{e.get(o)?.reset(),e.get(o)?.disable()})}resetAllForm(){this.$projectEditDetailForm().reset({projectName:"",projectManager:"",teamLeader:null,totalMember:0})}setFormMode(t){this.state.$formMode.set(t)}onClickEdit(t){this.state.$selectedData.set(t),this.state.$pagingInfo.set(new te),this.findProjectById(t.id)}onClickView(t){this.findProjectAndEmployees(t.id,"view")}openViewLookup(){this.ref=this.dialogService.open(me,{modal:!0}),this.ref.onClose.subscribe(t=>{})}findProjectAndEmployees(t,e){if(e==="view"){let o=this.state.$pagingInfo();o.retrieveAll=!0,this.state.$pagingInfo.set(o)}this.projectService.findProjectAndEmployees(t).subscribe(o=>{if(o.status){let a=o.object;if(e==="view"){this.$viewForm().patchValue({projectName:a.projectName,projectManager:a.projectManager,teamLeader:a.teamLeadName,totalMember:a.totalMember,employeeList:a.employeePaginatedListResponse.dataList});let u=this.state.$pagingInfo();u.retrieveAll=!1,this.state.$pagingInfo.set(u),this.openViewLookup()}else e==="edit"&&(this.$projectEditDetailForm().patchValue({projectName:a.projectName,projectManager:a.projectManager,teamLeader:a.teamLeadName,totalMember:a.totalMember}),this.state.$dataList.set(o.object.employeePaginatedListResponse.dataList),this.state.$pagingInfo.set(o.object.pagingInfo),this.state.$totalRowCount.set(o.object.totalRowCount),this.setFormMode("edit"))}else console.error("Failed to fetch project detail project.");this.state.$dataLoading.set(!1)},o=>{this.state.$dataLoading.set(!1),console.error("Error fetching project  detail project:",o)})}findProjectAndEmployeesPaginated(t){let e=this.state.$pagingInfo();e.retrieveAll=!0,this.state.$pagingInfo.set(e),t.pagingInfo=e,this.projectService.findProjectAndEmployeesPaginated(t).subscribe(o=>{if(o.status){let a=o.object;this.$projectEditDetailForm().patchValue({projectName:a.projectName,projectManager:a.projectManager,teamLeader:a.teamLeadName,totalMember:a.totalMember}),this.state.$dataList.set(o.object.employeePaginatedListResponse.dataList),this.state.$pagingInfo.set(o.object.pagingInfo),this.state.$totalRowCount.set(o.object.totalRowCount),this.setFormMode("edit")}else console.error("Failed to fetch project detail project.");this.state.$dataLoading.set(!1)},o=>{this.state.$dataLoading.set(!1),console.error("Error fetching project  detail project:",o)})}onClickLookupTeamLeader(t){this.getEmployeeList(),this.ref=this.dialogService.open(ce,{header:"Employee List",modal:!0}),this.ref.onClose.subscribe(e=>{this.$searchForm().reset(),e&&(t==="projectManager"?this.$projectEditDetailForm().patchValue({projectManager:e.fullName,projectManagerId:e.noEmployee}):t==="teamLeader"?this.$projectEditDetailForm().patchValue({teamLeader:e.fullName,teamLeaderId:e.noEmployee}):this.$projectEditDetailAddLookupForm().patchValue({memberName:e.fullName,noEmployee:e.noEmployee}))})}getEmployeeByProjectId(){}getEmployeeList(){this.state.$dataListEmployee.set([]),this.state.$dataLoading.set(!0);let t={wrapper:this.state.$employeeWrapper(),pagingInfo:this.state.$pagingInfo(),totalRowCount:this.state.$totalRowCount()};this.employeeService.getEmployeeList(t).subscribe(e=>{if(e.status){let o=e.object.dataList;this.state.$dataListEmployee.set(o),this.state.$pagingInfo.set(e.object.pagingInfo),this.state.$totalRowCount.set(e.object.totalRowCount||0)}else console.error("Failed to fetch employee list.");this.state.$dataLoading.set(!1)},e=>{console.error("Error fetching employee list:",e)})}populateListEmployee(t){this.state.$dataLoading.set(!0);let e=t||new oe;this.state.$employeeWrapper.set(e),this.getEmployeeList()}onLazyLoadEmployee(t){let e=this.state.$pagingInfo();e.currentPage=Math.floor(t.first/t.rows)+1,e.pageSize=t.rows,this.state.$pagingInfo.set(e),this.populateListEmployee()}onClickAddMember(){this.$projectEditDetailAddLookupForm().reset(),this.ref=this.dialogService.open(re,{header:"Add Member",modal:!0}),this.ref.onClose.subscribe(t=>{if(t){let e=new oe;e.employeeId=this.$projectEditDetailAddLookupForm().get("noEmployee")?.value,e.projectId=this.$projectEditDetailForm().get("projectId")?.value,e.departmentId=this.$projectEditDetailAddLookupForm().get("department")?.value,e.positionId=this.$projectEditDetailAddLookupForm().get("position")?.value,e.levelId=this.$projectEditDetailAddLookupForm().get("level")?.value,e.startEmpDate=this.$projectEditDetailAddLookupForm().get("startDate")?.value,e.endEmpDate=this.$projectEditDetailAddLookupForm().get("endDate")?.value,this.employeeService.updateProject(e).subscribe(o=>{o.status?this.populateList():console.error("Failed to fetch ")},o=>{console.error("Error fetching ")})}})}onClickSaveProject(){let t=new se;t.id=this.$projectEditDetailForm().get("projectId")?.value,t.projectName=this.$projectEditDetailForm().get("projectName")?.value,t.projectManager=this.$projectEditDetailForm().get("projectManagerId")?.value,t.teamLeadId=this.$projectEditDetailForm().get("teamLeaderId")?.value,t.startDate=this.$projectEditDetailForm().get("startDate")?.value,t.endDate=this.$projectEditDetailForm().get("endDate")?.value,this.projectService.save(t).subscribe(e=>{e.status?(this.$projectEditDetailForm().patchValue({projectId:e.object.id,projectName:e.object.projectName,projectManagerId:e.object.projectManagerId,teamLeaderId:e.object.teamLeaderId,startDate:e.object.startDate,endDate:e.object.endDate}),this.populateList()):console.error("Failed to fetch ")},e=>{console.error("Error fetching position list:",e)})}onClickBack(){this.setFormMode("home"),this.state.$pagingInfo.set(new te),this.$projectEditDetailForm().reset()}setOptionDepartment(){this.employeeService.getDepartmentList().subscribe(t=>{if(t.status){let e=t.object.map(o=>({label:o.label,value:o.value}));this.state.$optionDepartment.set(e)}else console.error("Failed to fetch department list:",t.message)},t=>{console.error("Error fetching department list:",t)})}setOptionPosition(){this.employeeService.getPositionList().subscribe(t=>{if(t.status){let e=t.object.map(o=>({label:o.label,value:o.value}));this.state.$optionPosition.set(e)}else console.error("Failed to fetch position list:",t.message)},t=>{console.error("Error fetching position list:",t)})}setOptionLevel(){this.employeeService.getLevelList().subscribe(t=>{if(t.status){let e=t.object.map(o=>({label:o.label,value:o.value}));this.state.$optionLevel.set(e)}else console.error("Failed to fetch level list:",t.message)},t=>{console.error("Error fetching level list:",t)})}onClickEditMember(t){this.$projectEditDetailAddLookupForm().reset(),this.$projectEditDetailAddLookupForm().patchValue({noEmployee:t.noEmployee,memberName:t.fullName,position:t.position,level:t.level,startDate:t.startDate,endDate:t.endDate}),this.ref=this.dialogService.open(re,{header:"Add Member",modal:!0}),this.ref.onClose.subscribe(e=>{if(e){let o=new oe;o.employeeId=this.$projectEditDetailAddLookupForm().get("noEmployee")?.value,o.projectId=this.$projectEditDetailForm().get("projectId")?.value,o.positionId=this.$projectEditDetailAddLookupForm().get("position")?.value,o.levelId=this.$projectEditDetailAddLookupForm().get("level")?.value,o.startEmpDate=this.$projectEditDetailAddLookupForm().get("startDate")?.value,o.endEmpDate=this.$projectEditDetailAddLookupForm().get("endDate")?.value,this.employeeService.updateProject(o).subscribe(a=>{a.status?this.populateList():console.error("Failed to fetch ")},a=>{console.error("Error fetching ")})}})}onClickDeleteMember(t){let e=new oe;e.employeeId=t.noEmployee,e.projectId=this.$projectEditDetailForm().get("projectId")?.value,this.projectService.deleteMapping(e).subscribe(o=>{o.status?this.populateList():console.error("Failed to fetch ")},o=>{console.error("Error fetching position list:",o)})}static \u0275fac=function(e){return new(e||n)(ee(we),ee(xe),ee(pe),ee(Fe))};static \u0275prov=Ee({token:n,factory:n.\u0275fac})};var Qe=(n,t)=>t.field,Xe=()=>({"min-width":"50rem"}),Ye=()=>[5,10,20];function Ze(n,t){n&1&&(i(0,"tr")(1,"td",16)(2,"div"),p(3,"Loading data..."),r()()())}function et(n,t){if(n&1&&(i(0,"th",18),p(1),r()),n&2){let e=t.$implicit;s(),S(" ",e.header," ")}}function tt(n,t){if(n&1&&(i(0,"tr"),E(1,et,2,1,"th",17),i(2,"th"),p(3," Action "),r()()),n&2){let e=t.$implicit;s(),f("ngForOf",e)}}function ot(n,t){if(n&1&&(i(0,"td",23),p(1),r()),n&2){let e=g().$implicit,o=g().$implicit;s(),w(o[e.field])}}function it(n,t){if(n&1&&(i(0,"td"),p(1),W(2,"date"),r()),n&2){let e=g().$implicit,o=g().$implicit;s(),w(q(2,1,o[e.field],"dd/MM/yyyy"))}}function nt(n,t){if(n&1&&(i(0,"td"),p(1),r()),n&2){let e=g().$implicit,o=g().$implicit;s(),w(o[e.field])}}function rt(n,t){if(n&1&&E(0,ot,2,1,"td",23)(1,it,3,4,"td")(2,nt,2,1,"td"),n&2){let e=t.$implicit;V(e.format==="center"?0:e.format==="date"?1:2)}}function at(n,t){if(n&1){let e=T();i(0,"tr",19),A(1,rt,3,1,null,null,Qe),i(3,"td",20)(4,"p-button",21),m("onClick",function(){let a=_(e).$implicit,u=g();return h(u.projectStore.onClickEdit(a))}),r(),i(5,"p-button",22),m("onClick",function(){let a=_(e).$implicit,u=g();return h(u.projectStore.onClickView(a))}),r()()()}if(n&2){let e=t.$implicit,o=t.columns;f("pSelectableRow",e),s(),G(o)}}var fe=class n{projectStore=j(b);visibleViewLookup=!1;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-project-list"]],standalone:!0,features:[y],decls:22,vars:14,consts:[["header",""],["body",""],["header","Project List"],[1,"appraisal-search","grid","grid-cols-12","gap-4",3,"formGroup"],[1,"col-span-3"],["formControlName","category","placeholder","Search By",1,"w-full",3,"options"],[1,"col-span-9","md:col-span-9"],["pInputText","","formControlName","searchText","name","search"],["label","Search","icon","pi pi-search",3,"onClick"],["label","Reset","icon","pi pi-refresh","severity","info",3,"onClick"],[1,"grid","grid-cols-12","gap-4"],[1,"col-span-10"],[1,"col-span-2","flex","justify-end","space-x-1"],["label","Add Project","icon","pi pi-plus","severity","contrast",3,"onClick"],["stripedRows","","showGridlines","",3,"onLazyLoad","value","tableStyle","columns","loading","lazy","paginator","rows","rowsPerPageOptions","paginatorDropdownAppendTo","totalRecords"],["pTemplate","loadingbody"],["colspan","7",1,"text-center"],["class","!text-center",4,"ngFor","ngForOf"],[1,"!text-center"],[3,"pSelectableRow"],[1,"gap-2","flex","justify-center"],["styleClass","p-button-info","icon","pi pi-pencil","pTooltip","Edit",3,"onClick"],["styleClass","p-button-contrast","icon","pi pi-eye","pTooltip","View",3,"onClick"],[2,"text-align","center"]],template:function(e,o){if(e&1){let a=T();i(0,"p-panel",2)(1,"div",3)(2,"div",4),l(3,"p-select",5),r(),i(4,"p-inputgroup",6),l(5,"input",7),i(6,"p-inputgroup-addon")(7,"p-button",8),m("onClick",function(){return _(a),h(o.projectStore.onClickSearch())}),r()(),i(8,"p-inputgroup-addon")(9,"p-button",9),m("onClick",function(){return _(a),h(o.projectStore.onClickResetSearch())}),r()()()(),l(10,"br"),i(11,"div",10),l(12,"div",11),i(13,"div",12)(14,"p-button",13),m("onClick",function(){return _(a),h(o.projectStore.onClickAddProject())}),r()()(),l(15,"br"),i(16,"p-table",14),m("onLazyLoad",function(R){return _(a),h(o.projectStore.onLazyLoad(R))}),E(17,Ze,4,0,"ng-template",15)(18,tt,4,1,"ng-template",null,0,N)(20,at,6,1,"ng-template",null,1,N),r()()}if(e&2){let a=U(21);s(),f("formGroup",o.projectStore.$searchForm()),s(2),f("options",o.projectStore.$optionsCategory()),s(13),f("value",o.projectStore.$dataList())("tableStyle",M(12,Xe))("columns",o.projectStore.$cols())("loading",o.projectStore.$dataLoading())("lazy",!0)("paginator",!0)("rows",5)("rowsPerPageOptions",M(13,Ye))("paginatorDropdownAppendTo",a)("totalRecords",o.projectStore.$totalRowCount())}},dependencies:[C,k,Q,P,F,$,I,z,L,Y,Z,K,De,ae,le,D,x,H]})};var ge=class n{projectStore=j(b);onResetClick(){this.projectStore.resetAllForm()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-project-edit-detail"]],standalone:!0,features:[y],decls:45,vars:1,consts:[["header","Project Detail"],[1,"grid","grid-cols-12","gap-2",3,"formGroup"],[1,"col-span-2","flex"],[1,"break-words"],[1,"col-span-6"],["type","text","pInputText","","formControlName","projectName",1,"w-full","p-2","border","rounded-md"],[1,"col-span-4"],["type","text","pInputText","","formControlName","projectManager",1,"w-full","p-2","border","rounded-md"],[1,"col-span-1"],["icon","pi pi-search",3,"onClick"],[1,"col-span-3"],["type","text","pInputText","","formControlName","teamLeader",1,"w-full","p-2","border","rounded-md"],["type","text","pInputText","","formControlName","totalMember",1,"w-full","p-2","border","rounded-md"],["formControlName","startDate","appendTo","body"],["formControlName","endDate","appendTo","body"],[1,"flex","justify-end","space-x-1"],["label","Save","icon","pi pi-check","severity","success",3,"onClick"],["label","Back","icon","pi pi-sign-out","severity","danger",3,"onClick"]],template:function(e,o){e&1&&(i(0,"p-panel",0)(1,"div",1)(2,"div",2)(3,"p",3),p(4,"Project Name"),r()(),i(5,"div",4),l(6,"input",5),r(),l(7,"div",6),i(8,"div",2)(9,"p",3),p(10,"Project Manager /"),l(11,"br"),p(12,"Penanggung Jawab"),r()(),i(13,"div",4),l(14,"input",7),r(),i(15,"div",8)(16,"p-button",9),m("onClick",function(){return o.projectStore.onClickLookupTeamLeader("projectManager")}),r()(),l(17,"div",10),i(18,"div",2)(19,"p",3),p(20,"Team Leader"),r()(),i(21,"div",4),l(22,"input",11),r(),i(23,"div",8)(24,"p-button",9),m("onClick",function(){return o.projectStore.onClickLookupTeamLeader("teamLeader")}),r()(),l(25,"div",10),i(26,"div",2)(27,"p",3),p(28,"Total of Member"),r()(),i(29,"div",4),l(30,"input",12),r(),l(31,"div",6),i(32,"div",2)(33,"p",3),p(34,"Start Date"),r()(),i(35,"div",10),l(36,"p-datepicker",13),r(),i(37,"div",8)(38,"p",3),p(39,"End Date"),r()(),i(40,"div",10),l(41,"p-datepicker",14),r()(),i(42,"div",15)(43,"p-button",16),m("onClick",function(){return o.projectStore.onClickSaveProject()}),r(),i(44,"p-button",17),m("onClick",function(){return o.projectStore.onClickBack()}),r()()()),e&2&&(s(),f("formGroup",o.projectStore.$projectEditDetailForm()))},dependencies:[C,k,P,F,$,I,L,X,D,x]})};var lt=(n,t)=>t.field,pt=()=>({"min-width":"50rem"}),st=()=>[5,10,20];function mt(n,t){n&1&&(i(0,"tr")(1,"td",20)(2,"div"),p(3,"Loading data..."),r()()())}function ct(n,t){if(n&1&&(i(0,"th",22),p(1),r()),n&2){let e=t.$implicit;s(),S(" ",e.header," ")}}function dt(n,t){if(n&1&&(i(0,"tr"),E(1,ct,2,1,"th",21),i(2,"th"),p(3," Action "),r()()),n&2){let e=t.$implicit;s(),f("ngForOf",e)}}function ut(n,t){if(n&1&&(i(0,"td",26),p(1),r()),n&2){let e=g().$implicit,o=g().$implicit;s(),w(o[e.field])}}function ft(n,t){if(n&1&&(i(0,"td"),p(1),W(2,"date"),r()),n&2){let e=g().$implicit,o=g().$implicit;s(),w(q(2,1,o[e.field],"dd/MM/yyyy"))}}function gt(n,t){if(n&1&&(i(0,"td"),p(1),r()),n&2){let e=g().$implicit,o=g().$implicit;s(),w(o[e.field])}}function jt(n,t){if(n&1&&E(0,ut,2,1,"td",26)(1,ft,3,4,"td")(2,gt,2,1,"td"),n&2){let e=t.$implicit;V(e.format==="center"?0:e.format==="date"?1:2)}}function _t(n,t){if(n&1){let e=T();i(0,"tr",23),A(1,jt,3,1,null,null,lt),i(3,"td")(4,"p-button",24),m("onClick",function(){let a=_(e).$implicit,u=g();return h(u.projectStore.onClickEditMember(a))}),r(),p(5," \xA0 "),i(6,"p-button",25),m("onClick",function(){let a=_(e).$implicit,u=g();return h(u.projectStore.onClickDeleteMember(a))}),r()()()}if(n&2){let e=t.$implicit,o=t.columns;f("pSelectableRow",e),s(),G(o)}}var je=class n{projectStore=j(b);visibleViewLookup=!1;static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-project-edit-list"]],standalone:!0,features:[y],decls:32,vars:15,consts:[["header",""],["body",""],["header","Project List"],[1,"appraisal-search","grid","grid-cols-12","gap-4",3,"formGroup"],[1,"col-span-3"],["formControlName","category","placeholder","Search By",1,"w-full",3,"options"],[1,"col-span-9","md:col-span-9"],["pInputText","","formControlName","searchText","name","search"],["label","Search","icon","pi pi-search",3,"onClick"],["label","Reset","icon","pi pi-refresh","severity","info",3,"onClick"],[1,"col-span-1"],[1,"break-words"],["formControlName","startDate","appendTo","body"],["formControlName","endDate","appendTo","body"],[1,"grid","grid-cols-12","gap-4"],[1,"col-span-10"],[1,"col-span-2","flex","justify-end","space-x-1"],["icon","pi pi-plus","label","Add Member","severity","contrast",3,"onClick"],["stripedRows","","showGridlines","","selectionMode","single",3,"onLazyLoad","value","tableStyle","columns","loading","lazy","paginator","selection","rows","rowsPerPageOptions","paginatorDropdownAppendTo","totalRecords"],["pTemplate","loadingbody"],["colspan","11",1,"text-center"],["class","!text-center",4,"ngFor","ngForOf"],[1,"!text-center"],[3,"pSelectableRow"],["label","Edit",3,"onClick"],["label","Delete",3,"onClick"],[2,"text-align","center"]],template:function(e,o){if(e&1){let a=T();i(0,"p-panel",2)(1,"div",3)(2,"div",4),l(3,"p-select",5),r(),i(4,"p-inputgroup",6),l(5,"input",7),i(6,"p-inputgroup-addon")(7,"p-button",8),m("onClick",function(){return _(a),h(o.projectStore.onClickSearch())}),r()(),i(8,"p-inputgroup-addon")(9,"p-button",9),m("onClick",function(){return _(a),h(o.projectStore.onClickResetSearch())}),r()()(),i(10,"div",10)(11,"p",11),p(12,"Start Date"),r()(),i(13,"div",4),l(14,"p-datepicker",12),r(),i(15,"div",10)(16,"p",11),p(17,"End Date"),r()(),i(18,"div",4),l(19,"p-datepicker",13),r()(),l(20,"br"),i(21,"div",14),l(22,"div",15),i(23,"div",16)(24,"p-button",17),m("onClick",function(){return _(a),h(o.projectStore.onClickAddMember())}),r()()(),l(25,"br"),i(26,"p-table",18),m("onLazyLoad",function(R){return _(a),h(o.projectStore.onLazyLoad(R))}),E(27,mt,4,0,"ng-template",19)(28,dt,4,1,"ng-template",null,0,N)(30,_t,7,1,"ng-template",null,1,N),r()()}if(e&2){let a=U(31);s(),f("formGroup",o.projectStore.$searchForm()),s(2),f("options",o.projectStore.$optionsCategoryEmployeeList()),s(23),f("value",o.projectStore.$dataList())("tableStyle",M(13,pt))("columns",o.projectStore.$colsEditList())("loading",o.projectStore.$dataLoading())("lazy",!0)("paginator",!0)("selection",o.projectStore.$selectedDataEmployee())("rows",5)("rowsPerPageOptions",M(14,st))("paginatorDropdownAppendTo",a)("totalRecords",o.projectStore.$totalRowCount())}},dependencies:[C,k,Q,P,F,$,I,z,L,Y,Z,K,ae,le,X,D,x,H]})};var _e=class n{projectStore=j(b);ngOnInit(){this.projectStore.setSearchCategoryEmployee(),this.projectStore.setOptionLevel(),this.projectStore.setOptionPosition()}onResetClick(){this.projectStore.resetAllForm()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-project-edit"]],standalone:!0,features:[y],decls:3,vars:0,template:function(e,o){e&1&&l(0,"app-project-edit-detail")(1,"br")(2,"app-project-edit-list")},dependencies:[C,ge,je]})};function ht(n,t){n&1&&l(0,"app-project-list")}function bt(n,t){n&1&&l(0,"app-project-edit")}var Ne=class n{projectStore=j(b);constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-employee"]],standalone:!0,features:[$e([b,pe,O]),y],decls:4,vars:1,consts:[["header","Project Mapping"],[1,"mt-6"]],template:function(e,o){e&1&&(i(0,"p-panel",0)(1,"div",1),E(2,ht,1,0,"app-project-list")(3,bt,1,0,"app-project-edit"),r()()),e&2&&(s(2),V(o.projectStore.$formMode()==="home"?2:3))},dependencies:[C,k,fe,_e]})};export{Ne as ProjectComponent};
