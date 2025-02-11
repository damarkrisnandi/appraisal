import{a as h}from"./chunk-JTAFHJ4I.js";import"./chunk-7U4M7FLE.js";import"./chunk-IHUH3JDV.js";import{E,i as B,l as M,m as j,q as H}from"./chunk-3P5LAZ2G.js";import{l as P,m as w,o as W}from"./chunk-IR44L2GU.js";import"./chunk-4YRY4IP2.js";import"./chunk-6EZYCW4Y.js";import"./chunk-MUG45JXB.js";import"./chunk-OQKDZ6KP.js";import"./chunk-CH6NKNWW.js";import{b as O,e as z,f as A,k as G,l as U}from"./chunk-PT3WFG3U.js";import"./chunk-MQPYQJ3G.js";import"./chunk-6SLXRUYG.js";import{sa as R}from"./chunk-RKZRWIXU.js";import{m as N,n as V}from"./chunk-O2IJJLQI.js";import{Ab as d,Bb as c,Kb as D,Lb as a,Nb as b,Pa as r,Tb as C,Ub as k,ea as _,eb as g,ec as y,hb as p,ia as S,rb as o,sa as u,sb as n,ta as f,tb as s,ub as $,vb as I,xb as x}from"./chunk-ZIXU4GN5.js";var L=class e{employeeStore=_(h);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=S({type:e,selectors:[["app-employee-search"]],standalone:!0,features:[C],decls:42,vars:8,consts:[[1,"grid","gap-4",3,"formGroup"],[1,"grid","grid-cols-12","gap-4"],[1,"col-span-2","lg:col-span-2"],["placeholder","Search by","formControlName","category","name","searchBy",1,"w-full",3,"options"],[1,"col-span-8","md:col-span-10","lg:col-span-8"],["type","text","pInputText","","formControlName","searchInput",1,"w-full"],[1,"col-span-2","md:col-span-10","lg:col-span-2","text-center"],["icon","pi pi-search","label","Search","severity","info",3,"onClick"],["icon","pi pi-refresh","styleClass","w-[40px] h-[40px]","severity","danger",3,"onClick"],[1,"col-span-2","sm:col-span-2","md:col-span-2","lg:col-span-2","flex","items-center"],[1,"col-span-2","sm:col-span-10","md:col-span-10","lg:col-span-2"],["formControlName","directorate","name","directorate","placeholder","-- pilih --",1,"w-full",3,"options"],[1,"col-span-1","sm:col-span-2","md:col-span-2","lg:col-span-1","flex","items-center"],["formControlName","division","name","division","placeholder","-- pilih --",1,"w-full",3,"options"],["formControlName","department","name","department","placeholder","-- pilih --",1,"w-full",3,"options"],[1,"col-span-2","sm:col-span-2","md:col-span-2","lg:cols-span-2","flex","items-center"],["formControlName","position","name","position","placeholder","-- pilih --",1,"w-full",3,"options"],["formControlName","unit","name","unit","placeholder","-- pilih --",1,"w-full",3,"options"],["formControlName","level","name","level","placeholder","-- pilih --",1,"w-full",3,"options"]],template:function(t,i){t&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),s(3,"p-select",3),n(),o(4,"div",4),s(5,"input",5),n(),o(6,"div",6)(7,"p-button",7),d("onClick",function(){return i.employeeStore.onSearchBy()}),n(),a(8," \xA0 "),o(9,"p-button",8),d("onClick",function(){return i.employeeStore.resetSearchForm(["category","searchInput","directorate","division","department","position","unit","level"])}),n()()(),o(10,"div",1)(11,"div",9)(12,"p"),a(13,"Directorate"),n()(),o(14,"div",10),s(15,"p-select",11),n(),o(16,"div",12)(17,"p"),a(18,"Division"),n()(),o(19,"div",10),s(20,"p-select",13),n(),o(21,"div",12)(22,"p"),a(23,"Department"),n()(),o(24,"div",10),s(25,"p-select",14),n()(),o(26,"div",1)(27,"div",15)(28,"p"),a(29,"Position"),n()(),o(30,"div",10),s(31,"p-select",16),n(),o(32,"div",12)(33,"p"),a(34,"Unit"),n()(),o(35,"div",10),s(36,"p-select",17),n(),o(37,"div",12)(38,"p"),a(39,"Level"),n()(),o(40,"div",10),s(41,"p-select",18),n()()()),t&2&&(p("formGroup",i.employeeStore.$searchForm()),r(3),p("options",i.employeeStore.$optionsCategory()),r(12),p("options",i.employeeStore.$optionDirektorat()),r(5),p("options",i.employeeStore.$optionDivision()),r(5),p("options",i.employeeStore.$optionDepartment()),r(6),p("options",i.employeeStore.$optionPosition()),r(5),p("options",i.employeeStore.$optionUnit()),r(5),p("options",i.employeeStore.$optionLevel()))},dependencies:[E,O,z,A,W,j,w,G,U]})};var X=()=>({"min-width":"50rem"}),Y=()=>[5,10,20];function Z(e,l){e&1&&(o(0,"tr")(1,"td",9)(2,"div"),a(3,"Loading data..."),n()()())}function ee(e,l){if(e&1&&(o(0,"th",11),a(1),n()),e&2){let t=l.$implicit;r(),b(" ",t.header," ")}}function te(e,l){if(e&1&&(o(0,"tr"),g(1,ee,2,1,"th",10),o(2,"th",11),a(3,"Actions"),n()()),e&2){let t=l.$implicit;r(),p("ngForOf",t)}}function oe(e,l){if(e&1&&($(0),a(1),I()),e&2){let t=c().$implicit,i=c().$implicit;r(),b(" ",i[t.field]===1?"Active":"Inactive"," ")}}function ne(e,l){if(e&1&&a(0),e&2){let t=c().$implicit,i=c().$implicit;b(" ",i[t.field]," ")}}function ie(e,l){if(e&1&&(o(0,"td",11),g(1,oe,2,1,"ng-container",14)(2,ne,1,1,"ng-template",null,5,y),n()),e&2){let t=l.$implicit,i=D(3);r(),p("ngIf",t.field==="status")("ngIfElse",i)}}function le(e,l){if(e&1){let t=x();o(0,"tr"),g(1,ie,4,2,"td",10),o(2,"td",11)(3,"button",12),d("click",function(){let m=u(t).$implicit,v=c();return f(v.onUbahForm(m))}),n(),a(4,"\xA0 "),o(5,"button",13),d("click",function(){let m=u(t).$implicit,v=c();return f(v.onLihatData(m))}),n()()()}if(e&2){let t=l.columns;r(),p("ngForOf",t)}}function re(e,l){}function pe(e,l){}function ae(e,l){if(e&1){let t=x();o(0,"div",15)(1,"p-button",16),d("onClick",function(){u(t);let m=c();return f(m.onRekamForm())}),n(),o(2,"p-button",17),d("onClick",function(){u(t);let m=c();return f(m.onBatalForm())}),n()()}if(e&2){let t=c();r(),p("disabled",t.employeeStore.$isRekamDisabled())}}var F=class e{employeeStore=_(h);dataList=this.employeeStore.$dataList();dataLoading=this.employeeStore.$dataLoading();cols=this.employeeStore.$cols();ngOnInit(){}onRekamForm(){this.employeeStore.onRekamForm()}onUbahForm(l){this.employeeStore.onSetSelected(l),this.employeeStore.onUbahForm(),console.log("rowData ",l)}onLihatData(l){this.employeeStore.onSetSelected(l),this.employeeStore.onViewForm(),console.log("rowData ",l)}onHapusForm(l){this.employeeStore.onSetSelected(l),this.employeeStore.onDeleteEmployee(l.noEmployee)}onBatalForm(){this.employeeStore.onCancelForm()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=S({type:e,selectors:[["app-employee-list"]],standalone:!0,features:[C],decls:15,vars:13,consts:[["header",""],["body",""],["start",""],["center",""],["end",""],["defaultField",""],[1,"grid","gap-4"],["stripedRows","","showGridlines","","selectionMode","single",3,"selectionChange","onLazyLoad","value","tableStyle","columns","loading","lazy","paginator","rows","rowsPerPageOptions","paginatorDropdownAppendTo","selection","totalRecords"],["pTemplate","loadingbody"],["colspan","5",1,"text-center"],["class","!text-center",4,"ngFor","ngForOf"],[1,"!text-center"],["pButton","","icon","pi pi-pencil",1,"p-button","p-button-info",3,"click"],["pButton","","icon","pi pi-eye",1,"p-button","p-button-contrast",3,"click"],[4,"ngIf","ngIfElse"],[1,"flex","space-x-4"],["label","Add","severity","contrast","styleClass","w-[100px]",3,"onClick","disabled"],["label","Back","severity","danger","styleClass","w-[100px]",3,"onClick"]],template:function(t,i){if(t&1){let m=x();o(0,"div",6),s(1,"app-employee-search"),o(2,"p-table",7),d("selectionChange",function(T){return u(m),f(i.employeeStore.onSetSelected(T))})("onLazyLoad",function(T){return u(m),f(i.employeeStore.onLazyLoad(T))}),g(3,Z,4,0,"ng-template",8)(4,te,4,1,"ng-template",null,0,y)(6,le,6,1,"ng-template",null,1,y),n()(),o(8,"p-toolbar"),g(9,re,0,0,"ng-template",null,2,y)(11,pe,0,0,"ng-template",null,3,y)(13,ae,3,1,"ng-template",null,4,y),n()}if(t&2){let m=D(7);r(2),p("value",i.employeeStore.$dataList())("tableStyle",k(11,X))("columns",i.cols)("loading",i.employeeStore.$dataLoading())("lazy",!0)("paginator",!0)("rows",5)("rowsPerPageOptions",k(12,Y))("paginatorDropdownAppendTo",m)("selection",i.employeeStore.$selectData())("totalRecords",i.employeeStore.$totalRowCount())}},dependencies:[E,R,P,w,H,B,N,V,L]})};var K=class e{employeeStore=_(h);constructor(){}ngOnInit(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=S({type:e,selectors:[["app-employee"]],standalone:!0,features:[C],decls:3,vars:0,consts:[["header","Employee List",1,"blue"],[1,"mt-6"]],template:function(t,i){t&1&&(o(0,"p-panel",0)(1,"div",1),s(2,"app-employee-list"),n()())},dependencies:[E,M,F],styles:[".blue[_ngcontent-%COMP%]{background-color:#0ff!important}"]})};export{K as EmployeeComponent};
