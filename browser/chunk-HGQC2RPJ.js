import{a as h}from"./chunk-EVAKYP5G.js";import"./chunk-RDKT7UU7.js";import"./chunk-CRDDT6HZ.js";import{A as q,O as E,j as B,k as W,o as j,q as H}from"./chunk-TS4LB2JZ.js";import{n as P,o as w,q as U,u as J}from"./chunk-NDG5SCMG.js";import"./chunk-4YRY4IP2.js";import"./chunk-ATB2IEIN.js";import"./chunk-VP2SXEXU.js";import"./chunk-OQKDZ6KP.js";import"./chunk-CH6NKNWW.js";import{b as M,e as O,f as z,k as G,l as A}from"./chunk-FLY6AGIF.js";import"./chunk-NXN4P4DR.js";import"./chunk-QASMVVIP.js";import{ua as R}from"./chunk-UHXCHP4M.js";import{$b as C,Bb as o,Cb as i,Db as s,Eb as $,Fb as I,Hb as x,Ib as d,Jb as c,Qc as N,Rc as V,Sb as D,Tb as m,Vb as b,Ya as r,ac as k,da as _,ha as g,nc as y,ob as S,ra as u,rb as p,sa as f}from"./chunk-QSF35MWG.js";var L=class e{employeeStore=_(h);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-employee-search"]],standalone:!0,features:[C],decls:42,vars:8,consts:[[1,"appraisal-search","grid","gap-4",3,"formGroup"],[1,"grid","grid-cols-12","gap-4"],[1,"col-span-2","lg:col-span-2"],["placeholder","Search by","formControlName","category","name","searchBy",1,"w-full",3,"options"],[1,"col-span-10","md:col-span-10"],["type","text","pInputText","","formControlName","searchInput",1,"w-full"],["icon","pi pi-search","label","Search",3,"onClick"],["icon","pi pi-refresh","label","Reset","severity","info",1,"h-full",3,"onClick"],[1,"col-span-2","sm:col-span-2","md:col-span-2","lg:col-span-2","flex","items-center"],[1,"col-span-2","sm:col-span-10","md:col-span-10","lg:col-span-2"],["formControlName","directorate","name","directorate","placeholder","-- pilih --",1,"w-full",3,"options"],[1,"col-span-1","sm:col-span-2","md:col-span-2","lg:col-span-1","flex","items-center"],["formControlName","division","name","division","placeholder","-- pilih --",1,"w-full",3,"options"],["formControlName","department","name","department","placeholder","-- pilih --",1,"w-full",3,"options"],[1,"col-span-2","sm:col-span-2","md:col-span-2","lg:cols-span-2","flex","items-center"],["formControlName","position","name","position","placeholder","-- pilih --",1,"w-full",3,"options"],["formControlName","unit","name","unit","placeholder","-- pilih --",1,"w-full",3,"options"],["formControlName","level","name","level","placeholder","-- pilih --",1,"w-full",3,"options"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),s(3,"p-select",3),i(),o(4,"p-inputgroup",4),s(5,"input",5),o(6,"p-inputgroup-addon")(7,"p-button",6),d("onClick",function(){return n.employeeStore.onSearchBy()}),i()(),o(8,"p-inputgroup-addon")(9,"p-button",7),d("onClick",function(){return n.employeeStore.resetSearchForm(["category","searchInput","directorate","division","department","position","unit","level"])}),i()()()(),o(10,"div",1)(11,"div",8)(12,"p"),m(13,"Directorate"),i()(),o(14,"div",9),s(15,"p-select",10),i(),o(16,"div",11)(17,"p"),m(18,"Division"),i()(),o(19,"div",9),s(20,"p-select",12),i(),o(21,"div",11)(22,"p"),m(23,"Department"),i()(),o(24,"div",9),s(25,"p-select",13),i()(),o(26,"div",1)(27,"div",14)(28,"p"),m(29,"Position"),i()(),o(30,"div",9),s(31,"p-select",15),i(),o(32,"div",11)(33,"p"),m(34,"Unit"),i()(),o(35,"div",9),s(36,"p-select",16),i(),o(37,"div",11)(38,"p"),m(39,"Level"),i()(),o(40,"div",9),s(41,"p-select",17),i()()()),t&2&&(p("formGroup",n.employeeStore.$searchForm()),r(3),p("options",n.employeeStore.$optionsCategory()),r(12),p("options",n.employeeStore.$optionDirektorat()),r(5),p("options",n.employeeStore.$optionDivision()),r(5),p("options",n.employeeStore.$optionDepartment()),r(6),p("options",n.employeeStore.$optionPosition()),r(5),p("options",n.employeeStore.$optionUnit()),r(5),p("options",n.employeeStore.$optionLevel()))},dependencies:[E,M,O,z,U,W,w,q,J,G,A]})};var Z=()=>({"min-width":"50rem"}),ee=()=>[5,10,20];function te(e,l){e&1&&(o(0,"tr")(1,"td",9)(2,"div"),m(3,"Loading data..."),i()()())}function oe(e,l){if(e&1&&(o(0,"th",11),m(1),i()),e&2){let t=l.$implicit;r(),b(" ",t.header," ")}}function ne(e,l){if(e&1&&(o(0,"tr"),S(1,oe,2,1,"th",10),o(2,"th",11),m(3,"Actions"),i()()),e&2){let t=l.$implicit;r(),p("ngForOf",t)}}function ie(e,l){if(e&1&&($(0),m(1),I()),e&2){let t=c().$implicit,n=c().$implicit;r(),b(" ",n[t.field]===1?"Active":"Inactive"," ")}}function le(e,l){if(e&1&&m(0),e&2){let t=c().$implicit,n=c().$implicit;b(" ",n[t.field]," ")}}function re(e,l){if(e&1&&(o(0,"td",11),S(1,ie,2,1,"ng-container",14)(2,le,1,1,"ng-template",null,5,y),i()),e&2){let t=l.$implicit,n=D(3);r(),p("ngIf",t.field==="status")("ngIfElse",n)}}function pe(e,l){if(e&1){let t=x();o(0,"tr"),S(1,re,4,2,"td",10),o(2,"td",11)(3,"button",12),d("click",function(){let a=u(t).$implicit,v=c();return f(v.onUbahForm(a))}),i(),m(4,"\xA0 "),o(5,"button",13),d("click",function(){let a=u(t).$implicit,v=c();return f(v.onLihatData(a))}),i()()()}if(e&2){let t=l.columns;r(),p("ngForOf",t)}}function ae(e,l){}function me(e,l){}function se(e,l){if(e&1){let t=x();o(0,"div",15)(1,"p-button",16),d("onClick",function(){u(t);let a=c();return f(a.onRekamForm())}),i(),o(2,"p-button",17),d("onClick",function(){u(t);let a=c();return f(a.onBatalForm())}),i()()}if(e&2){let t=c();r(),p("disabled",t.employeeStore.$isRekamDisabled())}}var F=class e{employeeStore=_(h);dataList=this.employeeStore.$dataList();dataLoading=this.employeeStore.$dataLoading();cols=this.employeeStore.$cols();ngOnInit(){}onRekamForm(){this.employeeStore.onRekamForm()}onUbahForm(l){this.employeeStore.onSetSelected(l),this.employeeStore.onUbahForm(),console.log("rowData ",l)}onLihatData(l){this.employeeStore.onSetSelected(l),this.employeeStore.onViewForm(),console.log("rowData ",l)}onHapusForm(l){this.employeeStore.onSetSelected(l),this.employeeStore.onDeleteEmployee(l.noEmployee)}onBatalForm(){this.employeeStore.onCancelForm()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-employee-list"]],standalone:!0,features:[C],decls:15,vars:13,consts:[["header",""],["body",""],["start",""],["center",""],["end",""],["defaultField",""],[1,"grid","gap-4"],["stripedRows","","showGridlines","","selectionMode","single",3,"selectionChange","onLazyLoad","value","tableStyle","columns","loading","lazy","paginator","rows","rowsPerPageOptions","paginatorDropdownAppendTo","selection","totalRecords"],["pTemplate","loadingbody"],["colspan","5",1,"text-center"],["class","!text-center",4,"ngFor","ngForOf"],[1,"!text-center"],["pButton","","icon","pi pi-pencil",1,"p-button","p-button-info",3,"click"],["pButton","","icon","pi pi-eye",1,"p-button","p-button-contrast",3,"click"],[4,"ngIf","ngIfElse"],[1,"flex","space-x-4"],["label","Add","icon","pi pi-plus","severity","contrast","styleClass","w-[100px]",3,"onClick","disabled"],["label","Back","icon","pi pi-sign-out","severity","danger","styleClass","w-[100px]",3,"onClick"]],template:function(t,n){if(t&1){let a=x();o(0,"div",6),s(1,"app-employee-search"),o(2,"p-table",7),d("selectionChange",function(T){return u(a),f(n.employeeStore.onSetSelected(T))})("onLazyLoad",function(T){return u(a),f(n.employeeStore.onLazyLoad(T))}),S(3,te,4,0,"ng-template",8)(4,ne,4,1,"ng-template",null,0,y)(6,pe,6,1,"ng-template",null,1,y),i()(),o(8,"p-toolbar"),S(9,ae,0,0,"ng-template",null,2,y)(11,me,0,0,"ng-template",null,3,y)(13,se,3,1,"ng-template",null,4,y),i()}if(t&2){let a=D(7);r(2),p("value",n.employeeStore.$dataList())("tableStyle",k(11,Z))("columns",n.cols)("loading",n.employeeStore.$dataLoading())("lazy",!0)("paginator",!0)("rows",5)("rowsPerPageOptions",k(12,ee))("paginatorDropdownAppendTo",a)("selection",n.employeeStore.$selectData())("totalRecords",n.employeeStore.$totalRowCount())}},dependencies:[E,R,P,w,j,H,N,V,L]})};var X=class e{employeeStore=_(h);constructor(){}ngOnInit(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=g({type:e,selectors:[["app-employee"]],standalone:!0,features:[C],decls:3,vars:0,consts:[["header","Employee List",1,"blue"],[1,"mt-6"]],template:function(t,n){t&1&&(o(0,"p-panel",0)(1,"div",1),s(2,"app-employee-list"),i()())},dependencies:[E,B,F],styles:[".blue[_ngcontent-%COMP%]{background-color:#0ff!important}"]})};export{X as EmployeeComponent};
