import{a as P,c as R}from"./chunk-VP5IOBEZ.js";import{ta as s}from"./chunk-GJCIPXRX.js";import{Bc as k,Ec as H,Gb as d,Hb as L,Ib as j,Kc as J,La as C,Oa as g,Ob as N,Pb as V,Z as x,Za as w,_,ac as h,bb as l,da as y,db as v,eb as n,gb as E,ha as b,hb as D,ia as z,ib as m,ob as f,pb as u,qb as A,ra as I,sa as $,ua as c,ub as B,vb as S,wb as i,xb as T,yb as F,za as M}from"./chunk-5OT5OU7P.js";var O=({dt:a})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${a("avatar.width")};
    height: ${a("avatar.height")};
    font-size: ${a("avatar.font.size")};
    color: ${a("avatar.color")};
    background: ${a("avatar.background")};
    border-radius: ${a("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${a("avatar.icon.size")};
    width: ${a("avatar.icon.size")};
    height: ${a("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${a("avatar.lg.width")};
    height: ${a("avatar.lg.width")};
    font-size: ${a("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${a("avatar.lg.icon.size")};
    width: ${a("avatar.lg.icon.size")};
    height: ${a("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${a("avatar.xl.width")};
    height: ${a("avatar.xl.width")};
    font-size: ${a("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${a("avatar.xl.font.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${a("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${a("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${a("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${a("avatar.xl.group.offset")};
}
`,U={root:({props:a})=>["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},q=(()=>{class a extends P{name="avatar";theme=O;classes=U;static \u0275fac=(()=>{let e;return function(t){return(e||(e=c(a)))(t||a)}})();static \u0275prov=x({token:a,factory:a.\u0275fac})}return a})();var G=["*"];function K(a,o){if(a&1&&(f(0,"span",3),L(1),u()),a&2){let e=i();g(),j(e.label)}}function Q(a,o){if(a&1&&A(0,"span",5),a&2){let e=i(2);m(e.icon),n("ngClass","p-avatar-icon")}}function W(a,o){if(a&1&&l(0,Q,1,3,"span",4),a&2){let e=i(),r=d(5);n("ngIf",e.icon)("ngIfElse",r)}}function X(a,o){if(a&1){let e=B();f(0,"img",7),S("error",function(t){I(e);let p=i(2);return $(p.imageError(t))}),u()}if(a&2){let e=i(2);n("src",e.image,C),v("aria-label",e.ariaLabel)}}function Y(a,o){if(a&1&&l(0,X,1,2,"img",6),a&2){let e=i();n("ngIf",e.image)}}var Z=(()=>{class a extends R{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new M;_componentStyle=y(q);imageError(e){this.onImageError.emit(e)}get hostClass(){return this.styleClass}static \u0275fac=(()=>{let e;return function(t){return(e||(e=c(a)))(t||a)}})();static \u0275cmp=b({type:a,selectors:[["p-avatar"]],hostVars:19,hostBindings:function(r,t){r&2&&(v("data-pc-name","avatar")("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy),D(t.style),m(t.hostClass),E("p-avatar",!0)("p-component",!0)("p-avatar-circle",t.shape==="circle")("p-avatar-lg",t.size==="large")("p-avatar-xl",t.size==="xlarge")("p-avatar-image",t.image!=null))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},standalone:!0,features:[N([q]),w,V],ngContentSelectors:G,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(r,t){if(r&1&&(T(),F(0),l(1,K,2,1,"span",2)(2,W,1,2,"ng-template",null,0,h)(4,Y,1,1,"ng-template",null,1,h)),r&2){let p=d(3);g(),n("ngIf",t.label)("ngIfElse",p)}},dependencies:[J,k,H,s],encapsulation:2,changeDetection:0})}return a})(),da=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=z({type:a});static \u0275inj=_({imports:[Z,s,s]})}return a})();export{Z as a,da as b};
