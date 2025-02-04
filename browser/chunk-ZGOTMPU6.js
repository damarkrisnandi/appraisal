import{g as m}from"./chunk-REFMHAKZ.js";import{b as v}from"./chunk-D2DQFAJA.js";import{a as p}from"./chunk-OQKDZ6KP.js";import{a as y,h as b,i as d}from"./chunk-CXEROHL4.js";import{a as u}from"./chunk-XYMFY6KF.js";import{ka as f,oa as h,va as g,wa as $}from"./chunk-GJCIPXRX.js";import{Xa as t,Z as l,ca as a,mc as r}from"./chunk-5OT5OU7P.js";var n=y.APPRAISAL_API_URL+"/attitude-skill-indicator",c=class s{constructor(e){this.http=e}findByCriteriaPaginated(e){return this.http.post(n+"/findByCriteriaPaginated",e)}saveIndicator(e){return this.http.post(n+"/save",e)}getCategory(){return this.http.get(n+"/category/list")}getMetric(){return this.http.get(n+"/metric-type/list")}deleteIndicator(e){return this.http.delete(n+"delete/"+e)}static \u0275fac=function(i){return new(i||s)(a(u))};static \u0275prov=l({token:s,factory:s.\u0275fac,providedIn:"root"})};var S=class s{constructor(e,i,o,R,A,I){this.spinnerService=e;this.attitudeSkillService=i;this.dialogService=o;this.messageService=R;this.router=A;this.confirmationService=I;this.init()}state={$dataList:t([]),$dataLoading:t(!1),$pagingInfo:t(new p),$totalRowCount:t(1),$selectedData:t(null),$selectedVerified:t(!0),$loading:t(!1),$disabledTable:t(!1),$selectedCategory:t(""),$searchText:t(""),$searchBtnClickEvent:t(!1),$optionsCategory:t([]),$optionsMetricType:t([]),$disabledUpdate:t(!0),$disabledSave:t(!0),$disabledCancel:t(!0),$formMode:t("idle")};$dataList=this.state.$dataList.asReadonly();$dataLoading=this.state.$dataLoading.asReadonly();$selectedData=this.state.$selectedData.asReadonly();$cols=t([{header:"No",class_td:"!text-center",type:"number"},{field:"attitudeSkillCategory",header:"Category",class_td:"!text-center"},{field:"indicator",header:"Indicators",class_td:"!text-center"},{field:"metricType",header:"Metrics",class_td:"!text-center"},{field:"action",header:"Actions",class_td:"flex justify-center items-center gap-2",type:"action"}]).asReadonly();$pagingInfo=this.state.$pagingInfo.asReadonly();$totalRowCount=this.state.$totalRowCount.asReadonly();$selectedCategory=this.state.$selectedCategory.asReadonly();$searchText=this.state.$searchText.asReadonly();$filter=r(()=>{let e=null;if(this.$selectedCategory()){e={};let i=this.$selectedCategory()??"",o;typeof e[i]=="string"?o=this.$searchText()??"":o=parseInt(this.$searchText()),e[i]=o}return e});indicatorAttitudeForm=t(new b({category:new d({value:null,disabled:!0}),indicator:new d({value:null,disabled:!0}),metricType:new d({value:null,disabled:!0})}));$optionsCategory=this.state.$optionsCategory.asReadonly();$optionsMetricType=this.state.$optionsMetricType.asReadonly();$disabledSave=r(()=>this.state.$disabledSave()&&this.state.$formMode()=="idle");$disabledCancel=r(()=>this.state.$disabledCancel()&&this.state.$formMode()=="idle");$disabledTable=r(()=>this.state.$formMode()=="edit");$formMode=this.state.$formMode.asReadonly();ref;dialogOptions={modal:!0,styleClass:"w-11/12 md:w-5/12"};init(){this.setSpinner(),this.populateList(),this.generateCategory(),this.generateMetric()}setSpinner(){$(this.state.$loading).subscribe(e=>e?this.spinnerService.show():this.spinnerService.hide())}populateList(){this.state.$dataLoading.set(!0);let e={wrapper:this.$filter(),pagingInfo:this.state.$pagingInfo(),totalRowCount:this.state.$totalRowCount()};this.attitudeSkillService.findByCriteriaPaginated(e).subscribe(i=>{i.status&&(this.state.$pagingInfo.set(i.object.pagingInfo||new p),this.state.$dataList.set(i.object.dataList||[]),this.state.$totalRowCount.set(i.object.totalRowCount||0)),this.state.$dataLoading.set(!1)})}onLazyLoad(e){this.populateList()}generateCategory(){let e=[{label:"Sikap & Perilaku",value:1},{label:"Komunikasi",value:2},{label:"Kemampuan Umum",value:3},{label:"Kemampuan Khusu",value:4},{label:"Pengembangan Diri",value:5}];this.state.$optionsCategory.set(e)}generateMetric(){let e=[{label:"Satu",value:1},{label:"Dua",value:2},{label:"Tiga",value:3}];this.state.$optionsMetricType.set(e)}resetState(){this.state.$dataList.set([]),this.state.$dataLoading.set(!1),this.state.$selectedData.set(null),this.state.$loading.set(!1),this.state.$searchText.set(""),this.state.$searchBtnClickEvent.set(!1)}onSearchBtnClicked(e){this.state.$searchText.set(e),this.populateList()}onRefreshSearchClicked(){this.state.$searchText.set(""),this.state.$searchBtnClickEvent.set(!1),this.populateList()}onAddIndicator(){this.resetState(),this.state.$formMode.set("add"),this.router.navigate(["/attitude-skill-category-reference/add-form"])}editAction(e){this.state.$selectedData.set(e),this.state.$formMode.set("edit"),this.router.navigate(["/attitude-skill-category-reference/add-form"])}deleteAction(e){this.state.$selectedData.set(e),this.confirmationService.confirm({header:"Konfirmasi",message:"Apakah Anda yakin ingin menghapus indicator ini?",accept:()=>{this.attitudeSkillService.deleteIndicator(e).subscribe(i=>{if(i.status){let o=`Hapus Role [${this.$selectedData()?.indicator}] Berhasil!`;this.messageService.add({severity:"success",summary:"Success",detail:o}),this.state.$formMode.set("idle"),this.state.$selectedData.set(null)}else this.messageService.add({severity:"error",summary:"Error",detail:i.message});this.populateList()})},reject:()=>{}})}onCloseDialogEvent(){this.ref?.onClose.subscribe(e=>{e&&this.populateList(),this.state.$formMode.set("idle")})}static \u0275fac=function(i){return new(i||s)(a(g),a(c),a(v),a(h),a(m),a(f))};static \u0275prov=l({token:s,factory:s.\u0275fac})};export{S as a};
