import{a}from"./chunk-42AWQDX7.js";import{b as n}from"./chunk-NXN4P4DR.js";import{Z as r,ca as i}from"./chunk-QSF35MWG.js";var e=a.APPRAISAL_API_URL+"/assessment-indicator",s=class o{constructor(t){this.http=t}findByCriteriaPaginated(t){return this.http.post(e+"/findByCriteriaPaginated",t)}saveIndicator(t){return this.http.put(e+"/save",t)}getCategory(){return this.http.get(e+"/category/list")}getMetric(){return this.http.get(e+"/metric-type/list")}deleteIndicator(t){return this.http.delete(e+"/delete/"+t)}static \u0275fac=function(m){return new(m||o)(i(n))};static \u0275prov=r({token:o,factory:o.\u0275fac,providedIn:"root"})};export{s as a};
