import{a as ie,b as Fe}from"./chunk-DK3MIBYM.js";import{a as W,b as se}from"./chunk-RYH7VAD2.js";import{E as C,l as P,r as G,s as Y,u as Z,v as ee}from"./chunk-YXGHVZJN.js";import"./chunk-WBNCRVNZ.js";import{b as I}from"./chunk-FCCBRE3P.js";import{l as L}from"./chunk-OM3F3L4N.js";import"./chunk-4YRY4IP2.js";import"./chunk-MO7DRNGU.js";import"./chunk-XBXNJW3R.js";import"./chunk-I2CGAZFQ.js";import{a as oe}from"./chunk-OQKDZ6KP.js";import{a as Pe,c as k,f as x,g as D,i as u,k as $,l as F,n as xe}from"./chunk-WTO456ZX.js";import{a as $e}from"./chunk-U2IVOKOI.js";import{sa as X}from"./chunk-FC7BFYKY.js";import{a as we,b as ke}from"./chunk-3IDHMA6T.js";import{m as K,s as Q}from"./chunk-RUHRSDAR.js";import{Ab as m,Bb as g,Lb as q,Mb as a,Nb as w,Ob as S,Pa as s,Tb as De,Ub as y,Vb as M,Ya as d,_ as pe,cc as U,da as B,ea as _,eb as E,ec as H,fc as N,hb as f,ia as h,mb as A,ob as Le,pb as O,qb as z,rb as n,sa as j,sb as r,ta as v,tb as p,xb as T}from"./chunk-IVTYGJWR.js";var te=class{id;projectName;projectManagerId;projectManager;teamLeaderId;teamLeader;totalMember;startDate;endDate;employeeList=[];levelDescription};function Re(i,t){if(i&1&&(n(0,"div",7)(1,"div",9),a(2),r(),n(3,"div",10),a(4," - "),r(),n(5,"div",3),a(6),r()()),i&2){let e=t.$implicit;s(2),S(" ",e.fullName," "),s(4),S(" ",e.directorateDescription," ")}}var me=class i{projectStore=_(b);ref=_(W);onClickClose(){this.ref.close()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["app-project-view-lookup"]],standalone:!0,features:[y],decls:57,vars:13,consts:[[1,"grid","grid-cols-12","gap-2",3,"formGroup"],[1,"col-span-2","flex","items-center"],[1,"break-words"],[1,"col-span-6"],[1,"p-2","border","rounded-md","bg-gray-300"],[1,"col-span-4"],[1,"col-span-2","flex","mt-2"],[1,"grid","grid-cols-12","gap-2"],["label","OK",3,"onClick"],[1,"col-span-5"],[1,"col-span-1","text-center"]],template:function(e,o){if(e&1&&(n(0,"div",0)(1,"div",1)(2,"p",2),a(3,"Project Name"),r()(),n(4,"div",3)(5,"p",4),a(6),r()(),p(7,"div",5),n(8,"div",1)(9,"p",2),a(10,"Project Manager"),p(11,"br"),a(12,"/ Penanggung Jawab"),r()(),n(13,"div",3)(14,"p",4),a(15),r()(),p(16,"div",5),n(17,"div",1)(18,"p",2),a(19,"Team Leader"),r()(),n(20,"div",3)(21,"p",4),a(22),r()(),p(23,"div",5),n(24,"div",1)(25,"p",2),a(26,"Start Date"),r()(),n(27,"div",3)(28,"p",4),a(29),U(30,"date"),r()(),p(31,"div",5),n(32,"div",1)(33,"p",2),a(34,"End Date"),r()(),n(35,"div",3)(36,"p",4),a(37),U(38,"date"),r()(),p(39,"div",5),n(40,"div",1)(41,"p",2),a(42,"Total of Member"),r()(),n(43,"div",3)(44,"p",4),a(45),r()(),p(46,"div",5),n(47,"div",6)(48,"p",2),a(49,"Name of Member"),r()(),n(50,"div",3)(51,"p",4),O(52,Re,7,2,"div",7,Le),r()(),p(54,"div",5),n(55,"div")(56,"p-button",8),m("onClick",function(){return o.onClickClose()}),r()()()),e&2){let l,c,V,ye,Ce,Se,Ee;f("formGroup",o.projectStore.$viewForm()),s(6),S(" ",(l=o.projectStore.$viewForm().get("projectName"))==null?null:l.value," "),s(9),S(" ",(c=o.projectStore.$viewForm().get("projectManager"))==null?null:c.value," "),s(7),S(" ",(V=o.projectStore.$viewForm().get("teamLeader"))==null?null:V.value," "),s(7),S(" ",H(30,7,(ye=o.projectStore.$viewForm().get("startDate"))==null?null:ye.value,"dd/MM/yyyy")," "),s(8),S(" ",H(38,10,(Ce=o.projectStore.$viewForm().get("endDate"))==null?null:Ce.value,"dd/MM/yyyy")," "),s(8),S(" ",(Se=o.projectStore.$viewForm().get("totalMember"))==null?null:Se.value," "),s(7),z((Ee=o.projectStore.$viewForm().get("employeeList"))==null?null:Ee.value)}},dependencies:[C,D,L,$,Q]})};var Ve=(i,t)=>t.field,Ae=()=>({"min-width":"50rem"}),Oe=()=>[5,10,20];function ze(i,t){i&1&&(n(0,"tr")(1,"td",14)(2,"div"),a(3,"Loading data..."),r()()())}function Ge(i,t){if(i&1&&(n(0,"th",16),a(1),r()),i&2){let e=t.$implicit;s(),S(" ",e.header," ")}}function We(i,t){if(i&1&&(n(0,"tr"),E(1,Ge,2,1,"th",15),n(2,"th"),a(3," Action "),r()()),i&2){let e=t.$implicit;s(),f("ngForOf",e)}}function Be(i,t){if(i&1&&(n(0,"td",19),a(1),r()),i&2){let e=g().$implicit,o=g().$implicit;s(),w(o[e.field])}}function Ue(i,t){if(i&1&&(n(0,"td"),a(1),r()),i&2){let e=g().$implicit,o=g().$implicit;s(),w(o[e.field])}}function He(i,t){if(i&1&&E(0,Be,2,1,"td",19)(1,Ue,2,1,"td"),i&2){let e=t.$implicit;A(e.format==="center"?0:1)}}function Je(i,t){if(i&1){let e=T();n(0,"tr",17),O(1,He,2,1,null,null,Ve),n(3,"td")(4,"p-button",18),m("onClick",function(){let l=j(e).$implicit,c=g();return v(c.pilih(l))}),r()()()}if(i&2){let e=t.$implicit,o=t.columns;f("pSelectableRow",e),s(),z(o)}}var de=class i{projectStore=_(b);ref=_(W);visibleViewLookup=!1;batal(){this.ref.close()}pilih(t){this.ref.close(t)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["app-employee-lookup"]],standalone:!0,features:[y],decls:18,vars:14,consts:[["header",""],["body",""],["header","Project List"],[1,"grid","grid-cols-12","gap-4",3,"formGroup"],[1,"col-span-2"],["formControlName","category","placeholder","Search By",1,"w-full",3,"options"],[1,"col-span-7"],["type","text","pInputText","","formControlName","searchText",1,"w-full"],[1,"col-span-1"],["label","Search",3,"onClick"],["label","Reset",3,"onClick"],["stripedRows","","showGridlines","",3,"onLazyLoad","value","tableStyle","columns","loading","lazy","paginator","rows","rowsPerPageOptions","paginatorDropdownAppendTo","totalRecords"],["pTemplate","loadingbody"],["label","Batal",3,"onClick"],["colspan","9",1,"text-center"],["class","!text-center",4,"ngFor","ngForOf"],[1,"!text-center"],[3,"pSelectableRow"],["label","Pilih",3,"onClick"],[2,"text-align","center"]],template:function(e,o){if(e&1){let l=T();n(0,"p-panel",2)(1,"div",3)(2,"div",4),p(3,"p-select",5),r(),n(4,"div",6),p(5,"input",7),r(),n(6,"div",8)(7,"p-button",9),m("onClick",function(){return j(l),v(o.projectStore.onClickSearch())}),r()(),n(8,"div",8)(9,"p-button",10),m("onClick",function(){return j(l),v(o.projectStore.onClickResetSearch())}),r()()(),p(10,"br"),n(11,"p-table",11),m("onLazyLoad",function(V){return j(l),v(o.projectStore.onLazyLoadEmployee(V))}),E(12,ze,4,0,"ng-template",12)(13,We,4,1,"ng-template",null,0,N)(15,Je,5,1,"ng-template",null,1,N),r(),n(17,"p-button",13),m("onClick",function(){return j(l),v(o.batal())}),r()()}if(e&2){let l=q(16);s(),f("formGroup",o.projectStore.$searchForm()),s(2),f("options",o.projectStore.$optionsCategoryEmployeeList()),s(8),f("value",o.projectStore.$dataListEmployee())("tableStyle",M(12,Ae))("columns",o.projectStore.$colsEmployee())("loading",o.projectStore.$dataLoading())("lazy",!0)("paginator",!0)("rows",5)("rowsPerPageOptions",M(13,Oe))("paginatorDropdownAppendTo",l)("totalRecords",o.projectStore.$totalRowCount())}},dependencies:[C,P,X,k,x,D,I,G,L,Z,ee,K,$,F]})};var ae=class i{projectStore=_(b);ref=_(W);onClickSave(){this.ref.close(!0)}onClickCancel(){this.projectStore.$projectEditDetailAddLookupForm().reset(),this.ref.close()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["app-project-edit-detail-add-lookup"]],standalone:!0,features:[y],decls:36,vars:3,consts:[[1,"grid","grid-cols-12","gap-2",3,"formGroup"],[1,"col-span-2","flex"],[1,"break-words"],[1,"col-span-6"],["type","text","pInputText","","formControlName","memberName",1,"w-full","p-2","border","rounded-md"],[1,"col-span-1"],["icon","pi pi-search",3,"onClick"],[1,"col-span-3"],["formControlName","position","id","position","name","position","placeholder","-- pilih --","appendTo","body",1,"w-full",3,"options"],[1,"col-span-4"],["formControlName","level","id","level","name","level","placeholder","-- pilih --","appendTo","body",1,"w-full",3,"options"],["formControlName","startDate","appendTo","body"],["formControlName","endDate","appendTo","body"],["label","save",3,"onClick"],["label","cancel",3,"onClick"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"div",1)(2,"p",2),a(3,"Member Name"),r()(),n(4,"div",3),p(5,"input",4),r(),n(6,"div",5)(7,"p-button",6),m("onClick",function(){return o.projectStore.onClickLookupTeamLeader("member")}),r()(),p(8,"div",7),n(9,"div",1)(10,"p",2),a(11,"Position"),r()(),n(12,"div",3),p(13,"p-select",8),r(),p(14,"div",9),n(15,"div",1)(16,"p",2),a(17,"Level"),r()(),n(18,"div",3),p(19,"p-select",10),r(),p(20,"div",9),n(21,"div",1)(22,"p",2),a(23,"Start Date"),r()(),n(24,"div",3),p(25,"p-datepicker",11),r(),p(26,"div",9),n(27,"div",1)(28,"p",2),a(29,"End Date"),r()(),n(30,"div",3),p(31,"p-datepicker",12),r(),p(32,"div",9)(33,"br"),n(34,"p-button",13),m("onClick",function(){return o.onClickSave()}),r(),n(35,"p-button",14),m("onClick",function(){return o.onClickCancel()}),r()()),e&2&&(f("formGroup",o.projectStore.$projectEditDetailAddLookupForm()),s(13),f("options",o.projectStore.$optionPosition()),s(6),f("options",o.projectStore.$optionLevel()))},dependencies:[C,k,x,D,I,G,L,$,F,Y]})};var le=Pe.APPRAISAL_API_URL+"/project",fe=class i{constructor(t){this.http=t}findByCriteriaPaginated(t,e){let o={wrapper:t,pagingInfo:e};return this.http.post(le+"/findByCriteriaPaginated",o)}findProjectAndEmployees(t){let e={id:t};return this.http.post(le+"/findProjectAndEmployees",e)}findProjectById(t,e){let o={id:t,pagingInfo:e};return this.http.post(le+"/findProjectById",o)}save(t){return this.http.post(le+"/save",t)}deleteMapping(t){return this.http.post(le+"/deleteMapping",t)}static \u0275fac=function(e){return new(e||i)(B($e))};static \u0275prov=pe({token:i,factory:i.\u0275fac,providedIn:"root"})};var b=class i{constructor(t,e,o,l){this.spinnerService=t;this.projectService=e;this.dialogService=o;this.employeeService=l;this.setSpinner(),this.setSearchCategory()}fb=_(xe);state={$dataList:d([]),$dataLoading:d(!1),$selectedData:d(null),$loading:d(!1),$pagingInfo:d(new oe),$projectWrapper:d(null),$totalRowCount:d(0),$searchOptions:d([]),$searchOptionsEmployee:d([]),$disabledAdd:d(!1),$disabledEdit:d(!0),$disabledSave:d(!0),$disabledDelete:d(!0),$formMode:d("home"),$employeeWrapper:d(null),$dataListEmployee:d([]),$selectDataEmployee:d(null),$optionPosition:d([]),$optionLevel:d([])};$dataList=this.state.$dataList.asReadonly();$dataLoading=this.state.$dataLoading.asReadonly();$pagingInfo=this.state.$pagingInfo.asReadonly();$totalRowCount=this.state.$totalRowCount.asReadonly();$cols=d([{field:"projectName",header:"Project Name"},{field:"projectManager",header:"Project Manager"},{field:"teamLeader",header:"Team Leader"},{field:"startDate",header:"Start Date",format:"date"},{field:"endDate",header:"End Date",format:"date"},{field:"totalMember",header:"Total Member",format:"center"}]).asReadonly();$projectWrapper=this.state.$projectWrapper.asReadonly();$selectData=this.state.$selectedData.asReadonly();$optionsCategory=this.state.$searchOptions.asReadonly();$optionsCategoryEmployeeList=this.state.$searchOptionsEmployee.asReadonly();$searchForm=d(this.fb.group({category:new u({value:null,disabled:!1}),searchText:new u({value:"",disabled:!1}),startDate:new u({value:null,disabled:!1}),endDate:new u({value:null,disabled:!1})}));$viewForm=d(this.fb.group({projectName:new u({value:"",disabled:!0}),projectManager:new u({value:"",disabled:!0}),teamLeader:new u({value:"",disabled:!0}),totalMember:new u({value:0,disabled:!0}),employeeList:new u({value:[],disabled:!0})}));$projectEditDetailForm=d(this.fb.group({projectName:new u({value:"",disabled:!1}),projectId:new u({value:null,disabled:!0}),projectManager:new u({value:"",disabled:!0}),projectManagerId:new u({value:"",disabled:!0}),teamLeader:new u({value:"",disabled:!0}),teamLeaderId:new u({value:"",disabled:!0}),totalMember:new u({value:0,disabled:!0}),startDate:new u({value:null,disabled:!1}),endDate:new u({value:null,disabled:!1})})).asReadonly();$projectEditDetailAddLookupForm=d(this.fb.group({noEmployee:new u({value:"",disabled:!0}),memberName:new u({value:"",disabled:!0}),position:new u({value:"",disabled:!1}),level:new u({value:"",disabled:!1}),startDate:new u({value:null,disabled:!1}),endDate:new u({value:null,disabled:!1})})).asReadonly();$projectEditListForm=d(this.fb.group({startDate:new u({value:null,disabled:!1}),endDate:new u({value:null,disabled:!1})})).asReadonly();$colsEditList=d([{field:"noEmployee",header:"Employee ID"},{field:"fullName",header:"Name"},{field:"directorateDescription",header:"Directorate"},{field:"divisionDescription",header:"Division"},{field:"departmentDescription",header:"Department"},{field:"unitDescription",header:"Unit"},{field:"positionDescription",header:"Position"},{field:"levelDescription",header:"Level"},{field:"startDate",header:"Start Date",format:"date"},{field:"endDate",header:"End Date",format:"date"}]).asReadonly();$disabledAdd=this.state.$disabledAdd.asReadonly();$disabledEdit=this.state.$disabledEdit.asReadonly();$disabledSave=this.state.$disabledSave.asReadonly();$disabledDelete=this.state.$disabledDelete.asReadonly();$formMode=this.state.$formMode.asReadonly();$dataListEmployee=this.state.$dataListEmployee.asReadonly();$colsEmployee=d([{field:"noEmployee",header:"No Employee"},{field:"fullName",header:"Name"},{field:"directorateDescription",header:"Directorate"},{field:"divisionDescription",header:"Division"},{field:"departmentDescription",header:"Department"},{field:"positionDescription",header:"Position"},{field:"unitDescription",header:"Unit"},{field:"levelDescription",header:"Level"}]).asReadonly();$selectedDataEmployee=this.state.$selectDataEmployee.asReadonly();$optionPosition=this.state.$optionPosition.asReadonly();$optionLevel=this.state.$optionLevel.asReadonly();ref;setSpinner(){ke(this.state.$loading).subscribe(t=>t?this.spinnerService.show():this.spinnerService.hide())}onLazyLoad(t){let e=this.state.$pagingInfo();e.currentPage=Math.floor(t.first/t.rows)+1,e.pageSize=t.rows,this.state.$pagingInfo.set(e),this.populateList()}populateList(t){this.state.$dataLoading.set(!0);let e=t||new te;this.state.$dataList.set([]),this.state.$formMode()==="home"?this.findByCriteriaPaginated(e):this.state.$formMode()==="edit"?this.findProjectAndEmployees(this.$selectData()?.id,"edit"):this.state.$formMode()==="new"&&(this.state.$dataLoading.set(!1),this.state.$pagingInfo.set(new oe),this.state.$totalRowCount.set(0),this.state.$dataList.set([]))}findByCriteriaPaginated(t){this.projectService.findByCriteriaPaginated(t,this.state.$pagingInfo()).subscribe(e=>{e.status?(this.state.$pagingInfo.set(e.object.pagingInfo),this.state.$totalRowCount.set(e.object.totalRowCount),this.state.$dataList.set(e.object.dataList)):console.error("Failed to fetch project dataList."),this.state.$dataLoading.set(!1)},e=>{this.state.$dataLoading.set(!1),console.error("Error fetching project dataList:",e)})}setSearchCategory(){this.state.$searchOptions.set([{label:"Semua",value:null},{label:"Project Name",value:"projectName"},{label:"Project Manager",value:"projectManager"}])}setSearchCategoryEmployee(){this.state.$searchOptionsEmployee.set([{label:"Semua",value:null},{label:"Employee ID",value:"noEmployee"},{label:"Name",value:"fullName"},{label:"Position",value:"positionDescription"}])}onClickSearch(){let t=new te;this.$searchForm()?.value?.category==="projectName"?t.projectName=this.$searchForm().value.searchText:this.$searchForm()?.value?.category==="projectManager"&&(t.projectManager=this.$searchForm().value.searchText),this.$searchForm()?.value?.startDate&&(t.startDate=this.$searchForm()?.value?.startDate),this.$searchForm()?.value?.endDate&&(t.endDate=this.$searchForm()?.value?.endDate),this.populateList(t)}onClickResetSearch(){this.$searchForm().reset()}onClickAddProject(){this.state.$formMode.set("new")}resetForm(t){let e=this.$projectEditDetailForm();t.forEach(o=>{e.get(o)?.reset(),e.get(o)?.disable()})}resetAllForm(){this.$projectEditDetailForm().reset({projectName:"",projectManager:"",teamLeader:null,totalMember:0})}setFormMode(t){this.state.$formMode.set(t)}onClickEdit(t){this.state.$selectedData.set(t),this.state.$pagingInfo.set(new oe),this.findProjectAndEmployees(t.id,"edit")}onClickView(t){this.findProjectAndEmployees(t.id,"view")}openViewLookup(){this.ref=this.dialogService.open(me,{modal:!0}),this.ref.onClose.subscribe(t=>{})}findProjectAndEmployees(t,e){if(e==="view"){let o=this.state.$pagingInfo();o.retrieveAll=!0,this.state.$pagingInfo.set(o)}this.projectService.findProjectAndEmployees(t).subscribe(o=>{if(o.status){let l=o.object;if(e==="view"){this.$viewForm().patchValue({projectName:l.projectName,projectManager:l.projectManager,teamLeader:l.teamLeadName,totalMember:l.totalMember,employeeList:l.employeePaginatedListResponse.dataList});let c=this.state.$pagingInfo();c.retrieveAll=!1,this.state.$pagingInfo.set(c),this.openViewLookup()}else e==="edit"&&(this.$projectEditDetailForm().patchValue({projectName:l.projectName,projectManager:l.projectManager,teamLeader:l.teamLeadName,totalMember:l.totalMember}),this.state.$dataList.set(o.object.employeePaginatedListResponse.dataList),this.state.$pagingInfo.set(o.object.pagingInfo),this.state.$totalRowCount.set(o.object.totalRowCount),this.setFormMode("edit"))}else console.error("Failed to fetch project detail project.");this.state.$dataLoading.set(!1)},o=>{this.state.$dataLoading.set(!1),console.error("Error fetching project  detail project:",o)})}onClickLookupTeamLeader(t){this.getEmployeeList(),this.ref=this.dialogService.open(de,{header:"Employee List",modal:!0}),this.ref.onClose.subscribe(e=>{this.$searchForm().reset(),e&&(t==="projectManager"?this.$projectEditDetailForm().patchValue({projectManager:e.fullName,projectManagerId:e.noEmployee}):t==="teamLeader"?this.$projectEditDetailForm().patchValue({teamLeader:e.fullName,teamLeaderId:e.noEmployee}):this.$projectEditDetailAddLookupForm().patchValue({memberName:e.fullName,noEmployee:e.noEmployee}))})}getEmployeeList(){this.state.$dataListEmployee.set([]),this.state.$dataLoading.set(!0);let t={wrapper:this.state.$employeeWrapper(),pagingInfo:this.state.$pagingInfo(),totalRowCount:this.state.$totalRowCount()};this.employeeService.getEmployeeList(t).subscribe(e=>{if(e.status){let o=e.object.dataList;this.state.$dataListEmployee.set(o),this.state.$pagingInfo.set(e.object.pagingInfo),this.state.$totalRowCount.set(e.object.totalRowCount||0)}else console.error("Failed to fetch employee list.");this.state.$dataLoading.set(!1)},e=>{console.error("Error fetching employee list:",e)})}populateListEmployee(t){this.state.$dataLoading.set(!0);let e=t||new ie;this.state.$employeeWrapper.set(e),this.getEmployeeList()}onLazyLoadEmployee(t){let e=this.state.$pagingInfo();e.currentPage=Math.floor(t.first/t.rows)+1,e.pageSize=t.rows,this.state.$pagingInfo.set(e),this.populateListEmployee()}onClickAddMember(){this.$projectEditDetailAddLookupForm().reset(),this.ref=this.dialogService.open(ae,{header:"Add Member",modal:!0}),this.ref.onClose.subscribe(t=>{if(t){let e=new ie;e.noEmployee=this.$projectEditDetailAddLookupForm().get("noEmployee")?.value,e.projectId=this.$projectEditDetailForm().get("projectId")?.value,e.positionId=this.$projectEditDetailAddLookupForm().get("position")?.value,e.levelId=this.$projectEditDetailAddLookupForm().get("level")?.value,e.startEmpDate=this.$projectEditDetailAddLookupForm().get("startDate")?.value,e.endEmpDate=this.$projectEditDetailAddLookupForm().get("endDate")?.value,this.employeeService.updateProject(e).subscribe(o=>{o.status?this.populateList():console.error("Failed to fetch ")},o=>{console.error("Error fetching ")})}})}onClickSaveProject(){let t=new te;t.id=this.$projectEditDetailForm().get("projectId")?.value,t.projectName=this.$projectEditDetailForm().get("projectName")?.value,t.projectManagerId=this.$projectEditDetailForm().get("projectManagerId")?.value,t.teamLeaderId=this.$projectEditDetailForm().get("teamLeaderId")?.value,this.projectService.save(t).subscribe(e=>{e.status?(this.$projectEditDetailForm().patchValue({projectId:e.object.id,projectName:e.object.projectName,projectManagerId:e.object.projectManagerId,teamLeaderId:e.object.teamLeaderId}),this.populateList()):console.error("Failed to fetch ")},e=>{console.error("Error fetching position list:",e)})}onClickBack(){this.setFormMode("home"),this.state.$pagingInfo.set(new oe),this.$projectEditDetailForm().reset()}setOptionPosition(){this.employeeService.getPositionList().subscribe(t=>{if(t.status){let e=t.object.map(o=>({label:o.label,value:o.value}));this.state.$optionPosition.set(e)}else console.error("Failed to fetch position list:",t.message)},t=>{console.error("Error fetching position list:",t)})}setOptionLevel(){this.employeeService.getLevelList().subscribe(t=>{if(t.status){let e=t.object.map(o=>({label:o.label,value:o.value}));this.state.$optionLevel.set(e)}else console.error("Failed to fetch level list:",t.message)},t=>{console.error("Error fetching level list:",t)})}onClickEditMember(t){this.$projectEditDetailAddLookupForm().reset(),this.$projectEditDetailAddLookupForm().patchValue({noEmployee:t.noEmployee,memberName:t.fullName,position:t.position,level:t.level,startDate:t.startDate,endDate:t.endDate}),this.ref=this.dialogService.open(ae,{header:"Add Member",modal:!0}),this.ref.onClose.subscribe(e=>{if(e){let o=new ie;o.noEmployee=this.$projectEditDetailAddLookupForm().get("noEmployee")?.value,o.projectId=this.$projectEditDetailForm().get("projectId")?.value,o.positionId=this.$projectEditDetailAddLookupForm().get("position")?.value,o.levelId=this.$projectEditDetailAddLookupForm().get("level")?.value,o.startEmpDate=this.$projectEditDetailAddLookupForm().get("startDate")?.value,o.endEmpDate=this.$projectEditDetailAddLookupForm().get("endDate")?.value,this.employeeService.updateProject(o).subscribe(l=>{l.status?this.populateList():console.error("Failed to fetch ")},l=>{console.error("Error fetching ")})}})}onClickDeleteMember(t){let e=new ie;e.noEmployee=t.noEmployee,e.projectId=this.$projectEditDetailForm().get("projectId")?.value,this.projectService.deleteMapping(e).subscribe(o=>{o.status?this.populateList():console.error("Failed to fetch ")},o=>{console.error("Error fetching position list:",o)})}static \u0275fac=function(e){return new(e||i)(B(we),B(fe),B(se),B(Fe))};static \u0275prov=pe({token:i,factory:i.\u0275fac})};var Ke=(i,t)=>t.field,Qe=()=>({"min-width":"50rem"}),Xe=()=>[5,10,20];function Ye(i,t){i&1&&(n(0,"tr")(1,"td",17)(2,"div"),a(3,"Loading data..."),r()()())}function Ze(i,t){if(i&1&&(n(0,"th",19),a(1),r()),i&2){let e=t.$implicit;s(),S(" ",e.header," ")}}function et(i,t){if(i&1&&(n(0,"tr"),E(1,Ze,2,1,"th",18),n(2,"th"),a(3," Action "),r()()),i&2){let e=t.$implicit;s(),f("ngForOf",e)}}function tt(i,t){if(i&1&&(n(0,"td",23),a(1),r()),i&2){let e=g().$implicit,o=g().$implicit;s(),w(o[e.field])}}function ot(i,t){if(i&1&&(n(0,"td"),a(1),U(2,"date"),r()),i&2){let e=g().$implicit,o=g().$implicit;s(),w(H(2,1,o[e.field],"dd/MM/yyyy"))}}function it(i,t){if(i&1&&(n(0,"td"),a(1),r()),i&2){let e=g().$implicit,o=g().$implicit;s(),w(o[e.field])}}function nt(i,t){if(i&1&&E(0,tt,2,1,"td",23)(1,ot,3,4,"td")(2,it,2,1,"td"),i&2){let e=t.$implicit;A(e.format==="center"?0:e.format==="date"?1:2)}}function rt(i,t){if(i&1){let e=T();n(0,"tr",20),O(1,nt,3,1,null,null,Ke),n(3,"td")(4,"p-button",21),m("onClick",function(){let l=j(e).$implicit,c=g();return v(c.projectStore.onClickEdit(l))}),r(),a(5," \xA0 "),n(6,"p-button",22),m("onClick",function(){let l=j(e).$implicit,c=g();return v(c.projectStore.onClickView(l))}),r()()()}if(i&2){let e=t.$implicit,o=t.columns;f("pSelectableRow",e),s(),z(o)}}var ge=class i{projectStore=_(b);visibleViewLookup=!1;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["app-project-list"]],standalone:!0,features:[y],decls:22,vars:14,consts:[["header",""],["body",""],["header","Project List"],[1,"grid","grid-cols-12","gap-4",3,"formGroup"],[1,"col-span-3"],["formControlName","category","placeholder","Search By",1,"w-full",3,"options"],[1,"col-span-7"],["type","text","pInputText","","formControlName","searchText",1,"w-full"],[1,"col-span-1"],["label","Search",3,"onClick"],["label","Reset",3,"onClick"],[1,"grid","grid-cols-12","gap-4"],[1,"col-span-10"],[1,"col-span-2","flex","justify-end","space-x-1"],["label","Add Project",3,"onClick"],["stripedRows","","showGridlines","",3,"onLazyLoad","value","tableStyle","columns","loading","lazy","paginator","rows","rowsPerPageOptions","paginatorDropdownAppendTo","totalRecords"],["pTemplate","loadingbody"],["colspan","7",1,"text-center"],["class","!text-center",4,"ngFor","ngForOf"],[1,"!text-center"],[3,"pSelectableRow"],["label","Edit",3,"onClick"],["label","View",3,"onClick"],[2,"text-align","center"]],template:function(e,o){if(e&1){let l=T();n(0,"p-panel",2)(1,"div",3)(2,"div",4),p(3,"p-select",5),r(),n(4,"div",6),p(5,"input",7),r(),n(6,"div",8)(7,"p-button",9),m("onClick",function(){return j(l),v(o.projectStore.onClickSearch())}),r()(),n(8,"div",8)(9,"p-button",10),m("onClick",function(){return j(l),v(o.projectStore.onClickResetSearch())}),r()()(),p(10,"br"),n(11,"div",11),p(12,"div",12),n(13,"div",13)(14,"p-button",14),m("onClick",function(){return j(l),v(o.projectStore.onClickAddProject())}),r()()(),p(15,"br"),n(16,"p-table",15),m("onLazyLoad",function(V){return j(l),v(o.projectStore.onLazyLoad(V))}),E(17,Ye,4,0,"ng-template",16)(18,et,4,1,"ng-template",null,0,N)(20,rt,7,1,"ng-template",null,1,N),r()()}if(e&2){let l=q(21);s(),f("formGroup",o.projectStore.$searchForm()),s(2),f("options",o.projectStore.$optionsCategory()),s(13),f("value",o.projectStore.$dataList())("tableStyle",M(12,Qe))("columns",o.projectStore.$cols())("loading",o.projectStore.$dataLoading())("lazy",!0)("paginator",!0)("rows",5)("rowsPerPageOptions",M(13,Xe))("paginatorDropdownAppendTo",l)("totalRecords",o.projectStore.$totalRowCount())}},dependencies:[C,P,X,k,x,D,I,G,L,Z,ee,K,$,F,Q]})};var _e=class i{projectStore=_(b);onResetClick(){this.projectStore.resetAllForm()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["app-project-edit-detail"]],standalone:!0,features:[y],decls:45,vars:1,consts:[["header","Project Detail"],[1,"grid","grid-cols-12","gap-2",3,"formGroup"],[1,"col-span-2","flex"],[1,"break-words"],[1,"col-span-6"],["type","text","pInputText","","formControlName","projectName",1,"w-full","p-2","border","rounded-md"],[1,"col-span-4"],["type","text","pInputText","","formControlName","projectManager",1,"w-full","p-2","border","rounded-md"],[1,"col-span-1"],["icon","pi pi-search",3,"onClick"],[1,"col-span-3"],["type","text","pInputText","","formControlName","teamLeader",1,"w-full","p-2","border","rounded-md"],["type","text","pInputText","","formControlName","totalMember",1,"w-full","p-2","border","rounded-md"],["formControlName","startDate","appendTo","body"],["formControlName","endDate","appendTo","body"],[1,"flex","justify-end","space-x-1"],["label","Save",3,"onClick"],["label","Back",3,"onClick"]],template:function(e,o){e&1&&(n(0,"p-panel",0)(1,"div",1)(2,"div",2)(3,"p",3),a(4,"Project Name"),r()(),n(5,"div",4),p(6,"input",5),r(),p(7,"div",6),n(8,"div",2)(9,"p",3),a(10,"Project Manager /"),p(11,"br"),a(12,"Penanggung Jawab"),r()(),n(13,"div",4),p(14,"input",7),r(),n(15,"div",8)(16,"p-button",9),m("onClick",function(){return o.projectStore.onClickLookupTeamLeader("projectManager")}),r()(),p(17,"div",10),n(18,"div",2)(19,"p",3),a(20,"Team Leader"),r()(),n(21,"div",4),p(22,"input",11),r(),n(23,"div",8)(24,"p-button",9),m("onClick",function(){return o.projectStore.onClickLookupTeamLeader("teamLeader")}),r()(),p(25,"div",10),n(26,"div",2)(27,"p",3),a(28,"Total of Member"),r()(),n(29,"div",4),p(30,"input",12),r(),p(31,"div",6),n(32,"div",2)(33,"p",3),a(34,"Start Date"),r()(),n(35,"div",10),p(36,"p-datepicker",13),r(),n(37,"div",8)(38,"p",3),a(39,"End Date"),r()(),n(40,"div",10),p(41,"p-datepicker",14),r()(),n(42,"div",15)(43,"p-button",16),m("onClick",function(){return o.projectStore.onClickSaveProject()}),r(),n(44,"p-button",17),m("onClick",function(){return o.projectStore.onClickBack()}),r()()()),e&2&&(s(),f("formGroup",o.projectStore.$projectEditDetailForm()))},dependencies:[C,P,k,x,D,I,L,$,F,Y]})};var at=(i,t)=>t.field,lt=()=>({"min-width":"50rem"}),pt=()=>[5,10,20];function st(i,t){i&1&&(n(0,"tr")(1,"td",20)(2,"div"),a(3,"Loading data..."),r()()())}function mt(i,t){if(i&1&&(n(0,"th",22),a(1),r()),i&2){let e=t.$implicit;s(),S(" ",e.header," ")}}function dt(i,t){if(i&1&&(n(0,"tr"),E(1,mt,2,1,"th",21),n(2,"th"),a(3," Action "),r()()),i&2){let e=t.$implicit;s(),f("ngForOf",e)}}function ct(i,t){if(i&1&&(n(0,"td",26),a(1),r()),i&2){let e=g().$implicit,o=g().$implicit;s(),w(o[e.field])}}function ut(i,t){if(i&1&&(n(0,"td"),a(1),U(2,"date"),r()),i&2){let e=g().$implicit,o=g().$implicit;s(),w(H(2,1,o[e.field],"dd/MM/yyyy"))}}function ft(i,t){if(i&1&&(n(0,"td"),a(1),r()),i&2){let e=g().$implicit,o=g().$implicit;s(),w(o[e.field])}}function gt(i,t){if(i&1&&E(0,ct,2,1,"td",26)(1,ut,3,4,"td")(2,ft,2,1,"td"),i&2){let e=t.$implicit;A(e.format==="center"?0:e.format==="date"?1:2)}}function _t(i,t){if(i&1){let e=T();n(0,"tr",23),O(1,gt,3,1,null,null,at),n(3,"td")(4,"p-button",24),m("onClick",function(){let l=j(e).$implicit,c=g();return v(c.projectStore.onClickEditMember(l))}),r(),a(5," \xA0 "),n(6,"p-button",25),m("onClick",function(){let l=j(e).$implicit,c=g();return v(c.projectStore.onClickDeleteMember(l))}),r()()()}if(i&2){let e=t.$implicit,o=t.columns;f("pSelectableRow",e),s(),z(o)}}var je=class i{projectStore=_(b);visibleViewLookup=!1;static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["app-project-edit-list"]],standalone:!0,features:[y],decls:32,vars:15,consts:[["header",""],["body",""],["header","Project List"],[1,"grid","grid-cols-12","gap-4",3,"formGroup"],[1,"col-span-3"],["formControlName","category","placeholder","Search By",1,"w-full",3,"options"],[1,"col-span-7"],["type","text","pInputText","","formControlName","searchText",1,"w-full"],[1,"col-span-1"],["label","Search",3,"onClick"],["label","Reset",3,"onClick"],[1,"break-words"],["formControlName","startDate","appendTo","body"],["formControlName","endDate","appendTo","body"],[1,"grid","grid-cols-12","gap-4"],[1,"col-span-10"],[1,"col-span-2","flex","justify-end","space-x-1"],["label","Add Member",3,"onClick"],["stripedRows","","showGridlines","","selectionMode","single",3,"onLazyLoad","value","tableStyle","columns","loading","lazy","paginator","selection","rows","rowsPerPageOptions","paginatorDropdownAppendTo","totalRecords"],["pTemplate","loadingbody"],["colspan","11",1,"text-center"],["class","!text-center",4,"ngFor","ngForOf"],[1,"!text-center"],[3,"pSelectableRow"],["label","Edit",3,"onClick"],["label","Delete",3,"onClick"],[2,"text-align","center"]],template:function(e,o){if(e&1){let l=T();n(0,"p-panel",2)(1,"div",3)(2,"div",4),p(3,"p-select",5),r(),n(4,"div",6),p(5,"input",7),r(),n(6,"div",8)(7,"p-button",9),m("onClick",function(){return j(l),v(o.projectStore.onClickSearch())}),r()(),n(8,"div",8)(9,"p-button",10),m("onClick",function(){return j(l),v(o.projectStore.onClickResetSearch())}),r()(),n(10,"div",8)(11,"p",11),a(12,"Start Date"),r()(),n(13,"div",4),p(14,"p-datepicker",12),r(),n(15,"div",8)(16,"p",11),a(17,"End Date"),r()(),n(18,"div",4),p(19,"p-datepicker",13),r()(),p(20,"br"),n(21,"div",14),p(22,"div",15),n(23,"div",16)(24,"p-button",17),m("onClick",function(){return j(l),v(o.projectStore.onClickAddMember())}),r()()(),p(25,"br"),n(26,"p-table",18),m("onLazyLoad",function(V){return j(l),v(o.projectStore.onLazyLoad(V))}),E(27,st,4,0,"ng-template",19)(28,dt,4,1,"ng-template",null,0,N)(30,_t,7,1,"ng-template",null,1,N),r()()}if(e&2){let l=q(31);s(),f("formGroup",o.projectStore.$searchForm()),s(2),f("options",o.projectStore.$optionsCategoryEmployeeList()),s(23),f("value",o.projectStore.$dataList())("tableStyle",M(13,lt))("columns",o.projectStore.$colsEditList())("loading",o.projectStore.$dataLoading())("lazy",!0)("paginator",!0)("selection",o.projectStore.$selectedDataEmployee())("rows",5)("rowsPerPageOptions",M(14,pt))("paginatorDropdownAppendTo",l)("totalRecords",o.projectStore.$totalRowCount())}},dependencies:[C,P,X,k,x,D,I,G,L,Z,ee,K,$,F,Y,Q]})};var ve=class i{projectStore=_(b);ngOnInit(){this.projectStore.setSearchCategoryEmployee(),this.projectStore.setOptionLevel(),this.projectStore.setOptionPosition()}onResetClick(){this.projectStore.resetAllForm()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["app-project-edit"]],standalone:!0,features:[y],decls:3,vars:0,template:function(e,o){e&1&&p(0,"app-project-edit-detail")(1,"br")(2,"app-project-edit-list")},dependencies:[C,_e,je]})};function jt(i,t){i&1&&p(0,"app-project-list")}function vt(i,t){i&1&&p(0,"app-project-edit")}var Ne=class i{projectStore=_(b);constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=h({type:i,selectors:[["app-employee"]],standalone:!0,features:[De([b,se,W]),y],decls:4,vars:1,consts:[["header","Project Mapping"],[1,"mt-6"]],template:function(e,o){e&1&&(n(0,"p-panel",0)(1,"div",1),E(2,jt,1,0,"app-project-list")(3,vt,1,0,"app-project-edit"),r()()),e&2&&(s(2),A(o.projectStore.$formMode()==="home"?2:3))},dependencies:[C,P,ge,ve]})};export{Ne as ProjectComponent};
