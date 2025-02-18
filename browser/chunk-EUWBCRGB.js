import{a as se}from"./chunk-NVT6V7M6.js";import{M as L,j as W,o as X,p as Z,u as ee}from"./chunk-IRTZTEQF.js";import{o as Q}from"./chunk-25MDRJ6N.js";import"./chunk-4YRY4IP2.js";import"./chunk-ATB2IEIN.js";import"./chunk-VP2SXEXU.js";import{a as T}from"./chunk-OQKDZ6KP.js";import{a as te}from"./chunk-42AWQDX7.js";import"./chunk-6OBNDO3B.js";import{b as J}from"./chunk-NXN4P4DR.js";import"./chunk-UHXCHP4M.js";import{$b as C,Ab as B,Bb as r,Cb as o,Db as d,Hb as N,Ib as b,Jb as l,Qc as K,Sb as R,Tb as f,Ua as E,Vb as u,Wc as Y,Ya as i,Z as y,_b as O,a as w,ac as U,b as I,ca as g,da as A,fb as a,ha as $,kc as V,mc as q,nc as x,ob as h,qb as j,ra as F,rb as m,sa as M,vb as c,wb as k,xb as z,zb as H,zc as _}from"./chunk-QSF35MWG.js";var ne=te.APPRAISAL_API_URL+"/assessment",v=class t{constructor(s){this.http=s}generateAllStaffAssessment(s){return this.http.post(ne+"/generateAllStaffAssessment",{tahun:s})}monitorLogAssessment({tahun:s,status:e,pagingInfo:n}){return this.http.post(ne+"/monitorLogAssessment",{tahun:s,status:e,pagingInfo:n})}static \u0275fac=function(e){return new(e||t)(g(J))};static \u0275prov=y({token:t,factory:t.\u0275fac,providedIn:"root"})};var p=class t{constructor(s,e){this.generateSelfAssessmentService=s;this.messageService=e}state={$mode:a("idle"),$dataList:a([]),$dataLoading:a(!1),$pagingInfo:a(new T),$totalRowCount:a(1),$selectedData:a(null),$selectedVerified:a(!0),$loading:a(!1),$disabledTable:a(!1),$optionsCategory:a([]),$selectedCategory:a(""),$searchText:a(""),$searchBtnClickEvent:a(!1)};$dataList=this.state.$dataList.asReadonly();$dataLoading=this.state.$dataLoading.asReadonly();$selectedData=this.state.$selectedData.asReadonly();$cols=a([{field:"user",header:"User",class_td:"!text-center"},{field:"tahun",header:"Tahun",class_td:"!text-center"},{field:"start_time_processing",header:"Start Time Processing",class_td:"!text-center",type:"date"},{field:"end_time_processing",header:"End Time Processing",class_td:"!text-center",type:"date"},{field:"total_assessment",header:"Total Assessments",class_td:"!text-center"},{field:"status",header:"Status",class_td:"!text-center"},{field:"successfull_assessment",header:"Successfull Assessment",class_td:"!text-center"}]).asReadonly();$pagingInfo=this.state.$pagingInfo.asReadonly();$totalRowCount=this.state.$totalRowCount.asReadonly();$optionsCategory=this.state.$optionsCategory.asReadonly();$selectedCategory=this.state.$selectedCategory.asReadonly();$searchText=this.state.$searchText.asReadonly();$filter=_(()=>{let s=null;if(this.$selectedCategory()){s={};let e=this.$selectedCategory()??"",n;["tahun","status"].includes(e)?n=this.$searchText()??"":n=parseInt(this.$searchText()),s[e]=n}return s});$disabledTable=_(()=>this.state.$mode()=="generate");$mode=this.state.$mode.asReadonly();$buttonLabel=_(()=>this.$mode()=="idle"?"Generate Assessments":"Generating Assessments...");$buttonDisabled=_(()=>this.$mode()=="generate");generateAssessments(){this.state.$mode.set("generate"),this.generateSelfAssessmentService.generateAllStaffAssessment(new Date().getFullYear().toString()).subscribe(s=>{this.messageService.add({severity:"success",summary:"Success",detail:"Self Assessment telah tergenerate"}),this.state.$mode.set("idle")})}populateList(){this.state.$dataLoading.set(!0);let s=I(w({},this.$filter()),{pagingInfo:this.state.$pagingInfo()});this.generateSelfAssessmentService.monitorLogAssessment(s).subscribe(e=>{e.status&&(this.state.$pagingInfo.set(e.object.pagingInfo||new T),this.state.$dataList.set(e.object.dataList||[]),this.state.$totalRowCount.set(e.object.totalRowCount||0)),this.state.$dataLoading.set(!1)})}onLazyLoad(s){this.state.$pagingInfo.set(I(w({},this.$pagingInfo()),{currentPage:Math.floor(s.first/s.rows)+1,pageSize:s.rows})),this.populateList()}static \u0275fac=function(e){return new(e||t)(g(v),g(se))};static \u0275prov=y({token:t,factory:t.\u0275fac})};var le=()=>[5,10,20];function me(t,s){if(t&1&&(r(0,"th",8),f(1),o()),t&2){let e=s.$implicit;i(),u(" ",e.header," ")}}function pe(t,s){if(t&1&&(r(0,"tr"),h(1,me,2,1,"th",7),o()),t&2){let e=s.$implicit;i(),m("ngForOf",e)}}function ce(t,s){if(t&1&&(r(0,"td"),d(1,"div",11),o()),t&2){let e=l().$implicit,n=l().$implicit;c(e.class_td),i(),m("outerHTML",e.template(n[e.field]),E)}}function de(t,s){if(t&1&&d(0,"td"),t&2){let e=l().$implicit;c(e.class_td)}}function fe(t,s){if(t&1&&(r(0,"td"),f(1),V(2,"date"),o()),t&2){let e=l().$implicit,n=l().$implicit;c(e.class_td),i(),u(" ",q(2,3,n[e.field],"dd/MM/yyyy hh:mm a")," ")}}function ge(t,s){if(t&1&&(r(0,"td"),f(1),o()),t&2){let e=l().$implicit,n=l().rowIndex;c(e.class_td),i(),u(" ",n+1," ")}}function ue(t,s){if(t&1&&(r(0,"td"),f(1),o()),t&2){let e=l().$implicit,n=l().$implicit;c(e.class_td),i(),u(" ",n[e.field]," ")}}function _e(t,s){if(t&1&&h(0,ce,2,3,"td",10)(1,de,1,2,"td",10)(2,fe,3,6,"td",10)(3,ge,2,3,"td",10)(4,ue,2,3,"td",10),t&2){let e,n=s.$implicit;k((e=n.type)==="custom"?0:e==="action"?1:e==="date"?2:e==="no"?3:4)}}function Se(t,s){if(t&1&&(r(0,"tr",9),H(1,_e,5,1,null,null,z),o()),t&2){let e=s.$implicit,n=s.columns;m("pSelectableRow",e),i(),B(n)}}function ye(t,s){if(t&1&&(r(0,"tr")(1,"td",12),f(2,"Data Kosong"),o()()),t&2){let e=l();i(),j("colspan",e.generateSelfAssessmentStore.$cols().length)}}var G=class t{generateSelfAssessmentStore=A(p);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=$({type:t,selectors:[["app-generated-assessment-list"]],standalone:!0,features:[C],decls:10,vars:12,consts:[["dt",""],["header",""],["body",""],["emptymessage",""],[1,"card"],["showGridlines","",3,"onLazyLoad","columns","value","loading","paginator","rows","rowsPerPageOptions","paginatorDropdownAppendTo","lazy","totalRecords"],[3,"blocked","target"],["class","!text-center",4,"ngFor","ngForOf"],[1,"!text-center"],[3,"pSelectableRow"],[3,"class"],[3,"outerHTML"],[1,"!text-center","w-full"]],template:function(e,n){if(e&1){let S=N();r(0,"div",4)(1,"p-table",5,0),b("onLazyLoad",function(ie){return F(S),M(n.generateSelfAssessmentStore.onLazyLoad(ie))}),h(3,pe,2,1,"ng-template",null,1,x)(5,Se,3,1,"ng-template",null,2,x)(7,ye,3,1,"ng-template",null,3,x),o()(),d(9,"p-blockui",6)}if(e&2){let S=R(2),D=R(6);i(),m("columns",n.generateSelfAssessmentStore.$cols())("value",n.generateSelfAssessmentStore.$dataList())("loading",n.generateSelfAssessmentStore.$dataLoading())("paginator",!0)("rows",5)("rowsPerPageOptions",U(11,le))("paginatorDropdownAppendTo",D)("lazy",!0)("totalRecords",n.generateSelfAssessmentStore.$totalRowCount()),i(8),m("blocked",n.generateSelfAssessmentStore.$disabledTable())("target",S)}},dependencies:[L,X,Z,K,ee,Y]})};var ae=class t{generateSelfAssessmentStore=A(p);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=$({type:t,selectors:[["app-generate-self-assessment"]],standalone:!0,features:[O([p]),C],decls:4,vars:2,consts:[["header","Generate Self Assessment",1,"h-40"],[1,"flex","flex-col","gap-2"],["icon","pi pi-cog","severity","contrast",3,"click","label","disabled"]],template:function(e,n){e&1&&(r(0,"p-panel",0)(1,"div",1)(2,"p-button",2),b("click",function(){return n.generateSelfAssessmentStore.generateAssessments()}),o(),d(3,"app-generated-assessment-list"),o()()),e&2&&(i(2),m("label",n.generateSelfAssessmentStore.$buttonLabel())("disabled",n.generateSelfAssessmentStore.$buttonDisabled()))},dependencies:[L,W,Q,G]})};export{ae as GenerateSelfAssessmentComponent};
