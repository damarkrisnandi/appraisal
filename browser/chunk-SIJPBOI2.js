import{a as o,c as L}from"./chunk-43HQCLBA.js";import{c as H,d as M,e as $,g as x}from"./chunk-REFMHAKZ.js";import{a as A}from"./chunk-CXEROHL4.js";import{a as R,b as v}from"./chunk-XYMFY6KF.js";import{oa as m}from"./chunk-GJCIPXRX.js";import{B as I,I as l,J as S,Kc as j,O as T,W as b,Xa as d,Z as a,_ as k,ca as s,da as f,ia as y,v as g,w as h,z as u}from"./chunk-5OT5OU7P.js";var p=class t{constructor(e,r,i){this.router=e;this.activatedRoute=r;this.titleService=i;this.state.$menuTree.set(o.getItem("menus")),this.setTitlePage()}state={$menuTree:d([]),$pageTitle:d("")};$menuTree=this.state.$menuTree.asReadonly();setTitlePage(){this.router.events.pipe(l(e=>e instanceof M),u(()=>this.activatedRoute),u(e=>{for(;e.firstChild;)e=e.firstChild;return e}),l(e=>e.outlet==="primary"),I(e=>e.data)).subscribe(e=>{e.pageTitle?this.titleService.setTitle(`Appraisal > ${e.pageTitle} `):this.titleService.setTitle("Appraisal")})}resetState(){this.state.$menuTree.set([]),this.state.$pageTitle.set(null)}static \u0275fac=function(r){return new(r||t)(s(x),s($),s(H))};static \u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"})};var C="tokenId",O=A.APPRAISAL_API_URL+"/auth",c=class t{constructor(e,r,i){this.userStore=e;this.menuTreeStore=r;this.http=i}isAuthenticated(){return!!this.tokenId}login(e){return this.loginService(e).pipe(b(r=>{r.status&&r.object?.jwtToken&&(this.setTokenId(r.object?.jwtToken),o.setItem("user",r.object),o.setItem("menus",this.featureToMenuItem(r.object?.role?.feature)))}))}featureToMenuItem(e){let r=[];for(let i of e){let n={};n.label=i.feature.name,n.icon=i.feature.icon,i.children&&(n.items=this.featureToMenuItem(i.children)),i.feature.accessLink&&(n.routerLink=i.feature.accessLink),r.push(n)}return r}loginService(e){return this.http.post(O+"/login",e)}forgotPassword(){}logout(){return this.logoutService().pipe(T(()=>{o.clear()}))}logoutService(){return g({})}setTokenId(e){o.setItem(C,e)}get tokenId(){return o.getItem(C)}static \u0275fac=function(r){return new(r||t)(s(L),s(p),s(R))};static \u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"})};var ie={"768px":{width:"calc(100% - 6px)",right:"3px",left:"3px"},"600px":{width:"calc(100% - 4px)",right:"2px",left:"12px"}};var E=(t,e)=>{if(o.getItem("tokenId")){let r=o.getItem("tokenId")||"";t=t.clone({headers:t.headers.set("Authorization",`Bearer ${r}`)})}return t=t.clone({headers:t.headers.set("Accept","*/*")}),e(t)};var P=(t,e)=>{let r=f(c),i=f(m);return e(t).pipe(S(n=>(console.log(n),n.status===401&&(i.add({severity:"error",summary:"Error",detail:"Session Token telah habis, silahkan login kembali!"}),r.logout()),h(n))))};var w=class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=y({type:t});static \u0275inj=k({providers:[{provide:v,useValue:E,multi:!0},{provide:v,useValue:P,multi:!0},m],imports:[j]})};export{p as a,c as b,ie as c,E as d,P as e,w as f};
