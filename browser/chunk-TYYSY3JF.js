import{q as a}from"./chunk-WWIJJSWY.js";import{a as l}from"./chunk-MQPYQJ3G.js";import{J as r,_ as i,da as m,v as n}from"./chunk-ZIXU4GN5.js";var u=a.APPRAISAL_API_URL,t=u+"/roles",p=u+"/feature",R=class s{constructor(e){this.http=e}addRole(e){return this.http.post(t+"/addRole",e)}editRole(e){return this.http.post(t+"/editRole/"+e?.id,{name:e?.name,notes:e?.notes})}deleteRole(e){return this.http.delete(t+`/delete/${e?.id??""}`)}listRoles(e){return this.http.post(t+"/listRoles",e).pipe(r(o=>(console.log("error",o),n({status:!1,message:o.message,object:null}))))}findAllFeature(){return this.http.get(p+"/findAll")}getAllFeaturePermissions(){return this.http.get(p+"/getAllFeaturePermissions")}getAllMappingFeaturePermissions(e){return this.http.get(t+`/role-feature/${e}/feature-permissions`)}mapFeatures(e){return this.http.post(t+"/map-features",e)}static \u0275fac=function(o){return new(o||s)(m(l))};static \u0275prov=i({token:s,factory:s.\u0275fac,providedIn:"root"})};export{R as a};
