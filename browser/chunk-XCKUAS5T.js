import{q as a}from"./chunk-WWIJJSWY.js";import{a as n}from"./chunk-MQPYQJ3G.js";import{_ as o,da as r}from"./chunk-ZIXU4GN5.js";var e=a.APPRAISAL_API_URL+"/attitude-skill-indicator",s=class i{constructor(t){this.http=t}findByCriteriaPaginated(t){return this.http.post(e+"/findByCriteriaPaginated",t)}saveIndicator(t){return this.http.put(e+"/save",t)}getCategory(){return this.http.get(e+"/category/list")}getMetric(){return this.http.get(e+"/metric-type/list")}deleteIndicator(t){return this.http.delete(e+"/delete/"+t)}static \u0275fac=function(m){return new(m||i)(r(n))};static \u0275prov=o({token:i,factory:i.\u0275fac,providedIn:"root"})};export{s as a};
