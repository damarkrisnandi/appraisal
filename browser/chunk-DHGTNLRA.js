import{a as d}from"./chunk-CH6NKNWW.js";import{b as a}from"./chunk-NXN4P4DR.js";import{Z as o,ca as i}from"./chunk-QSF35MWG.js";var p=class{id;projectName;projectManagerId;projectManager;teamLeadId;teamLeader;totalMember;startDate;endDate;employeeList=[];levelDescription};var n=d.APPRAISAL_API_URL+"/project",l=class r{constructor(e){this.http=e}findByCriteriaPaginated(e,t){let s={wrapper:e,pagingInfo:t};return this.http.post(n+"/findByCriteriaPaginated",s)}findProjectAndEmployees(e){let t={id:e};return this.http.post(n+"/findProjectAndEmployees",t)}findProjectById(e){return this.http.get(n+`/findProjectById/${e}`)}save(e){return this.http.post(n+"/save",e)}deleteMapping(e){return this.http.post(n+"/deleteMapping",e)}findProjectAndEmployeesPaginated(e){return this.http.post(n+"/findProjectAndEmployeesPaginated",e)}static \u0275fac=function(t){return new(t||r)(i(a))};static \u0275prov=o({token:r,factory:r.\u0275fac,providedIn:"root"})};export{p as a,l as b};
