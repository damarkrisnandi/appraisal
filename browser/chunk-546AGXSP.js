import{A as Ye,g as Pe,h as Fe,z as Xe}from"./chunk-6XZOSR3E.js";import{c as je,d as J,h as j,m as Be}from"./chunk-VTP4LYUB.js";import{c as Re,d as W,f as O,h as N,i as H,k as Q}from"./chunk-4YRY4IP2.js";import{c as Ae}from"./chunk-LA3WXO4F.js";import{E as A,N as Me,a as Z,b as T,d as L,f as q,ia as $,k as G,m as Se,ta as Ve,ua as Oe}from"./chunk-LU7AHZRX.js";import{Aa as le,Ab as w,Ac as ze,Bb as z,Bc as Ie,Cb as I,Dc as Te,Ec as Ee,Fc as ke,Gb as X,Hb as _e,Hc as Le,Ib as fe,Jc as k,Nb as ue,Oa as r,Ob as ye,Pa as y,Pb as Ce,Qb as Y,Rb as be,Sb as ve,Ua as de,Va as ce,Z as F,Za as me,a as ie,bb as d,ca as S,da as ne,db as pe,eb as s,ec as xe,fb as ge,ha as oe,hb as he,ib as B,ja as ae,m as _,ob as p,oc as De,pb as g,qb as M,ra as f,rb as C,sa as u,sb as b,tb as V,tc as we,ua as se,ub as x,vb as D,wa as re,wb as l}from"./chunk-LGYBJQJA.js";var We=(()=>{class t{viewContainerRef;constructor(e){this.viewContainerRef=e}static \u0275fac=function(n){return new(n||t)(y(ce))};static \u0275dir=ae({type:t,selectors:[["","pDynamicDialogContent",""]],standalone:!0})}return t})(),Ne=(()=>{class t extends Ye{name="dialog";static \u0275fac=(()=>{let e;return function(i){return(e||(e=se(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var P=class{data;header;ariaLabelledBy;footer;width;height;closeOnEscape=!1;focusOnShow=!0;focusTrap=!0;baseZIndex;autoZIndex=!1;dismissableMask=!1;rtl=!1;style;contentStyle;styleClass;transitionOptions;closable=!1;showHeader=!1;modal=!1;maskStyleClass;resizable=!1;draggable=!1;keepInViewport=!1;minX;minY;maximizable=!1;maximizeIcon;minimizeIcon;position;closeAriaLabel;appendTo;duplicate=!1;breakpoints;templates},R=class{constructor(){}close(o){this._onClose.next(o),setTimeout(()=>{this._onClose.complete()},1e3)}destroy(){this._onDestroy.next(null)}dragStart(o){this._onDragStart.next(o)}dragEnd(o){this._onDragEnd.next(o)}resizeInit(o){this._onResizeInit.next(o)}resizeEnd(o){this._onResizeEnd.next(o)}maximize(o){this._onMaximize.next(o)}_onClose=new _;onClose=this._onClose.asObservable();_onDestroy=new _;onDestroy=this._onDestroy.asObservable();_onDragStart=new _;onDragStart=this._onDragStart.asObservable();_onDragEnd=new _;onDragEnd=this._onDragEnd.asObservable();_onResizeInit=new _;onResizeInit=this._onResizeInit.asObservable();_onResizeEnd=new _;onResizeEnd=this._onResizeEnd.asObservable();_onMaximize=new _;onMaximize=this._onMaximize.asObservable();onChildComponentLoaded=new _},He=["mask"],Qe=["content"],Ze=["footer"],qe=["titlebar"],Ge=(t,o,e)=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex","justify-content":t,"align-items":o,"pointer-events":e}),$e=t=>({"p-dialog p-component":!0,"p-dialog-maximized":t}),Je=()=>({display:"flex","flex-direction":"column","pointer-events":"auto"}),Ke=(t,o)=>({transform:t,transition:o}),Ue=t=>({value:"visible",params:t});function et(t,o){if(t&1){let e=x();p(0,"div",14),D("mousedown",function(i){f(e);let a=l(2);return u(a.initResize(i))}),g()}t&2&&s("ngClass","p-resizable-handle")}function tt(t,o){t&1&&V(0)}function it(t,o){t&1&&M(0,"WindowMaximizeIcon")}function nt(t,o){t&1&&M(0,"WindowMinimizeIcon")}function ot(t,o){if(t&1&&(C(0),d(1,it,1,0,"WindowMaximizeIcon",11)(2,nt,1,0,"WindowMinimizeIcon",11),b()),t&2){let e=l(5);r(),s("ngIf",!e.maximized&&!e.maximizeIconTemplate),r(),s("ngIf",e.maximized&&!e.minimizeIconTemplate)}}function at(t,o){}function st(t,o){t&1&&d(0,at,0,0,"ng-template")}function rt(t,o){if(t&1&&(C(0),d(1,st,1,0,null,21),b()),t&2){let e=l(5);r(),s("ngTemplateOutlet",e._maximizeIconTemplate)}}function lt(t,o){}function dt(t,o){t&1&&d(0,lt,0,0,"ng-template")}function ct(t,o){if(t&1&&(C(0),d(1,dt,1,0,null,21),b()),t&2){let e=l(5);r(),s("ngTemplateOutlet",e._minimizeIconTemplate)}}function mt(t,o){if(t&1){let e=x();p(0,"p-button",20),D("onClick",function(){f(e);let i=l(4);return u(i.maximize())})("keydown.enter",function(){f(e);let i=l(4);return u(i.maximize())}),d(1,ot,3,2,"ng-container",11)(2,rt,2,1,"ng-container",11)(3,ct,2,1,"ng-container",11),g()}if(t&2){let e=l(4);s("styleClass","p-dialog-maximize-button")("tabindex",e.maximizable?"0":"-1"),r(),s("ngIf",!e.maximizeIcon),r(),s("ngIf",!e.maximized),r(),s("ngIf",e.maximized)}}function pt(t,o){t&1&&(C(0),M(1,"TimesIcon"),b())}function gt(t,o){}function ht(t,o){t&1&&d(0,gt,0,0,"ng-template")}function _t(t,o){if(t&1&&(p(0,"span"),d(1,ht,1,0,null,21),g()),t&2){let e=l(5);r(),s("ngTemplateOutlet",e.closeIconTemplate)}}function ft(t,o){if(t&1){let e=x();p(0,"p-button",22),D("onClick",function(){f(e);let i=l(4);return u(i.hide())})("keydown.enter",function(){f(e);let i=l(4);return u(i.hide())}),d(1,pt,2,0,"ng-container",11)(2,_t,2,1,"span",11),g()}if(t&2){let e=l(4);s("styleClass","p-dialog-close-button")("ariaLabel",e.closeAriaLabel),r(),s("ngIf",!e.closeIconTemplate),r(),s("ngIf",e.closeIconTemplate)}}function ut(t,o){if(t&1&&(C(0),p(1,"span",16),X(2),g(),p(3,"div",17),d(4,mt,4,5,"p-button",18)(5,ft,3,4,"p-button",19),g(),b()),t&2){let e=l(3);r(),s("ngClass","p-dialog-title")("id",e.ariaLabelledBy),r(),_e(e.ddconfig.header),r(),s("ngClass","p-dialog-header-actions"),r(),s("ngIf",e.ddconfig.maximizable),r(),s("ngIf",e.closable)}}function yt(t,o){if(t&1){let e=x();p(0,"div",15,3),D("mousedown",function(i){f(e);let a=l(2);return u(a.initDrag(i))}),d(2,tt,1,0,"ng-container",12)(3,ut,6,6,"ng-container",11),g()}if(t&2){let e=l(2);s("ngClass","p-dialog-header"),r(2),s("ngComponentOutlet",e.headerTemplate),r(),s("ngIf",!e.headerTemplate)}}function Ct(t,o){}function bt(t,o){t&1&&d(0,Ct,0,0,"ng-template",23)}function vt(t,o){t&1&&V(0)}function xt(t,o){if(t&1&&(C(0),X(1),b()),t&2){let e=l(3);r(),fe(" ",e.ddconfig.footer," ")}}function Dt(t,o){t&1&&V(0)}function wt(t,o){if(t&1&&(p(0,"div",17,4),d(2,xt,2,1,"ng-container",11)(3,Dt,1,0,"ng-container",12),g()),t&2){let e=l(2);s("ngClass","p-dialog-footer"),r(2),s("ngIf",!e.footerTemplate),r(),s("ngComponentOutlet",e.footerTemplate)}}function zt(t,o){if(t&1){let e=x();p(0,"div",7,1),D("@animation.start",function(i){f(e);let a=l();return u(a.onAnimationStart(i))})("@animation.done",function(i){f(e);let a=l();return u(a.onAnimationEnd(i))}),d(2,et,1,1,"div",8)(3,yt,4,3,"div",9),p(4,"div",10,2),d(6,bt,1,0,null,11)(7,vt,1,0,"ng-container",12),g(),d(8,wt,4,3,"div",13),g()}if(t&2){let e=l();he(e.ddconfig.style),B(e.ddconfig.styleClass),ge("width",e.ddconfig.width)("height",e.ddconfig.height),s("ngClass",Y(22,$e,e.maximizable&&e.maximized))("ngStyle",Ce(24,Je))("@animation",Y(28,Ue,be(25,Ke,e.transformOptions,e.ddconfig.transitionOptions||"150ms cubic-bezier(0, 0, 0.2, 1)")))("pFocusTrapDisabled",e.ddconfig.focusTrap===!1),pe("aria-labelledby",e.ariaLabelledBy)("aria-modal",!0)("id",e.dialogId),r(2),s("ngIf",e.ddconfig.resizable),r(),s("ngIf",e.ddconfig.showHeader!==!1),r(),s("ngClass","p-dialog-content")("ngStyle",e.ddconfig.contentStyle),r(2),s("ngIf",!e.contentTemplate),r(),s("ngComponentOutlet",e.contentTemplate),r(),s("ngIf",e.ddconfig.footer||e.footerTemplate)}}var It=H([O({transform:"{{transform}}",opacity:0}),W("{{transition}}",O({transform:"none",opacity:1}))]),Tt=H([W("{{transition}}",O({transform:"{{transform}}",opacity:0}))]),Et=(()=>{class t extends Ae{renderer;ddconfig;dialogRef;zone;parentDialog;visible=!0;componentRef;mask;resizing;dragging;maximized;_style={};originalStyle;lastPageX;lastPageY;ariaLabelledBy;id=$("pn_id_");styleElement;insertionPoint;maskViewChild;contentViewChild;footerViewChild;headerViewChild;childComponentType;container;wrapper;documentKeydownListener;documentEscapeListener;maskClickListener;transformOptions="scale(0.7)";documentResizeListener;documentResizeEndListener;documentDragListener;documentDragEndListener;_componentStyle=ne(Ne);get minX(){return this.ddconfig.minX?this.ddconfig.minX:0}get minY(){return this.ddconfig.minY?this.ddconfig.minY:0}get keepInViewport(){return this.ddconfig.keepInViewport}get maximizable(){return this.ddconfig.maximizable}get maximizeIcon(){return this.ddconfig.maximizeIcon}get minimizeIcon(){return this.ddconfig.minimizeIcon}get closable(){return this.ddconfig.closable}get style(){return this._style}get position(){return this.ddconfig.position}get closeAriaLabel(){return this.config.getTranslation(Oe.ARIA).close}set style(e){e&&(this._style=ie({},e),this.originalStyle=e)}get parent(){let e=Array.from(this.document.getElementsByClassName("p-dialog"));if(e.length>1)return e.pop()}get parentContent(){let e=Array.from(this.document.getElementsByClassName("p-dialog"));if(e.length>0){let n=e[e.length-1].querySelector(".p-dialog-content");if(n)return Array.isArray(n)?n[0]:n}}get header(){return this.ddconfig.header}get data(){return this.ddconfig.data}get breakpoints(){return this.ddconfig.breakpoints}get footerTemplate(){return this.ddconfig?.templates?.footer}get headerTemplate(){return this.ddconfig?.templates?.header}get contentTemplate(){return this.ddconfig?.templates?.content}get minimizeIconTemplate(){return this.ddconfig?.templates?.minimizeicon}get maximizeIconTemplate(){return this.ddconfig?.templates?.maximizeicon}get closeIconTemplate(){return this.ddconfig?.templates?.closeicon}get maskClass(){let n=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===this.position);return{"p-dialog-mask":!0,"p-overlay-mask p-overlay-mask-enter":this.ddconfig.modal||this.ddconfig.dismissableMask,[`p-dialog-${n}`]:n}}get dialogId(){return this.attrSelector}constructor(e,n,i,a,h){super(),this.renderer=e,this.ddconfig=n,this.dialogRef=i,this.zone=a,this.parentDialog=h}ngOnInit(){super.ngOnInit(),this.breakpoints&&this.createStyle()}createStyle(){if(k(this.platformId)&&!this.styleElement){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let n in this.breakpoints)e+=`
                        @media screen and (max-width: ${n}) {
                            .p-dialog[id=${this.dialogId}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[n]} !important;
                            }
                        }
                    `;this.renderer.setProperty(this.styleElement,"innerHTML",e),Me(this.styleElement,"nonce",this.config?.csp()?.nonce)}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngAfterViewInit(){super.ngAfterViewInit(),this.loadChildComponent(this.childComponentType),this.ariaLabelledBy=this.getAriaLabelledBy(),this.cd.detectChanges()}getAriaLabelledBy(){return this.header!==null?$("pn_id_")+"_header":null}loadChildComponent(e){let n=this.insertionPoint?.viewContainerRef;n?.clear(),this.componentRef=n?.createComponent(e),this.dialogRef.onChildComponentLoaded.next(this.componentRef.instance)}moveOnTop(){this.ddconfig.autoZIndex!==!1&&(j.set("modal",this.container,(this.ddconfig.baseZIndex||0)+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1))}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.wrapper=this.container.parentElement,this.moveOnTop(),this.parent&&this.unbindGlobalListeners(),this.bindGlobalListeners(),this.container?.setAttribute(this.id,""),this.ddconfig.modal!==!1&&this.enableModality(),this.ddconfig.focusOnShow!==!1&&this.focus();break;case"void":this.wrapper&&this.ddconfig.modal!==!1&&T(this.wrapper,"p-overlay-mask-leave");break}}onAnimationEnd(e){e.toState==="void"&&(this.parentContent&&this.focus(this.parentContent),this.onContainerDestroy(),this.dialogRef.destroy())}onContainerDestroy(){this.unbindGlobalListeners(),this.container&&this.ddconfig.autoZIndex!==!1&&j.clear(this.container),this.ddconfig.modal!==!1&&this.disableModality(),this.container=null}close(){this.visible=!1,this.cd.markForCheck()}hide(){this.dialogRef&&this.dialogRef.close()}enableModality(){this.ddconfig.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",e=>{this.wrapper&&this.wrapper.isSameNode(e.target)&&this.hide()})),this.ddconfig.modal!==!1&&T(this.document.body,"p-overflow-hidden")}disableModality(){this.wrapper&&(this.ddconfig.dismissableMask&&this.unbindMaskClickListener(),this.ddconfig.modal!==!1&&L(this.document.body,"p-overflow-hidden"),this.cd.destroyed||this.cd.detectChanges())}focus(e=this.contentViewChild.nativeElement){let n=J.getFocusableElement(e,"[autofocus]");if(n){this.zone.runOutsideAngular(()=>{setTimeout(()=>n.focus(),5)});return}let i=J.getFocusableElement(e);i?this.zone.runOutsideAngular(()=>{setTimeout(()=>i.focus(),5)}):this.footerViewChild?this.focus(this.footerViewChild.nativeElement):!i&&this.headerViewChild&&this.focus(this.headerViewChild.nativeElement)}maximize(){this.maximized=!this.maximized,this.maximized?T(this.document.body,"p-overflow-hidden"):L(this.document.body,"p-overflow-hidden"),this.dialogRef.maximize({maximized:this.maximized})}initResize(e){this.ddconfig.resizable&&(this.documentResizeListener||this.bindDocumentResizeListeners(),this.resizing=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,T(this.document.body,"p-unselectable-text"),this.dialogRef.resizeInit(e))}onResize(e){if(this.resizing){let n=e.pageX-this.lastPageX,i=e.pageY-this.lastPageY,a=G(this.container),h=A(this.container),v=A(this.contentViewChild.nativeElement),c=a+n,m=h+i,E=this.container.style.minWidth,U=this.container.style.minHeight,ee=this.container.getBoundingClientRect(),te=q();(!parseInt(this.container.style.top)||!parseInt(this.container.style.left))&&(c+=n,m+=i),(!E||c>parseInt(E))&&ee.left+c<te.width&&(this._style.width=c+"px",this.container.style.width=this._style.width),(!U||m>parseInt(U))&&ee.top+m<te.height&&(this.contentViewChild.nativeElement.style.height=v+m-h+"px",this._style.height&&(this._style.height=m+"px",this.container.style.height=this._style.height)),this.lastPageX=e.pageX,this.lastPageY=e.pageY}}resizeEnd(e){this.resizing&&(this.resizing=!1,L(this.document.body,"p-unselectable-text"),this.dialogRef.resizeEnd(e))}initDrag(e){Z(e.target,"p-dialog-header-icon")||Z(e.target.parentElement,"p-dialog-header-icon")||this.ddconfig.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container.style.margin="0",T(this.document.body,"p-unselectable-text"),this.dialogRef.dragStart(e))}onDrag(e){if(this.dragging){let n=G(this.container),i=A(this.container),a=e.pageX-this.lastPageX,h=e.pageY-this.lastPageY,v=this.container.getBoundingClientRect(),c=v.left+a,m=v.top+h,E=q();this.container.style.position="fixed",this.keepInViewport?(c>=this.minX&&c+n<E.width&&(this._style.left=c+"px",this.lastPageX=e.pageX,this.container.style.left=c+"px"),m>=this.minY&&m+i<E.height&&(this._style.top=m+"px",this.lastPageY=e.pageY,this.container.style.top=m+"px")):(this.lastPageX=e.pageX,this.container.style.left=c+"px",this.lastPageY=e.pageY,this.container.style.top=m+"px")}}endDrag(e){this.dragging&&(this.dragging=!1,L(this.document.body,"p-unselectable-text"),this.dialogRef.dragEnd(e),this.cd.detectChanges())}resetPosition(){this.container.style.position="",this.container.style.left="",this.container.style.top="",this.container.style.margin=""}bindDocumentDragListener(){k(this.platformId)&&this.zone.runOutsideAngular(()=>{this.documentDragListener=this.renderer.listen(this.document,"mousemove",this.onDrag.bind(this))})}bindDocumentDragEndListener(){k(this.platformId)&&this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.renderer.listen(this.document,"mouseup",this.endDrag.bind(this))})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(this.documentDragEndListener(),this.documentDragListener=null)}unbindDocumentDragListener(){this.documentDragListener&&(this.documentDragListener(),this.documentDragListener=null)}bindDocumentResizeListeners(){k(this.platformId)&&this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.renderer.listen(this.document,"mousemove",this.onResize.bind(this)),this.documentResizeEndListener=this.renderer.listen(this.document,"mouseup",this.resizeEnd.bind(this))})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(this.documentResizeListener(),this.documentResizeEndListener(),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindGlobalListeners(){this.ddconfig.closeOnEscape!==!1&&this.bindDocumentEscapeListener(),this.ddconfig.resizable&&this.bindDocumentResizeListeners(),this.ddconfig.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener())}unbindGlobalListeners(){this.unbindDocumentEscapeListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener()}bindDocumentEscapeListener(){let e=this.maskViewChild?this.maskViewChild.nativeElement.ownerDocument:"document";this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)==j.getCurrent()&&this.hide()})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}ngOnDestroy(){this.onContainerDestroy(),this.componentRef&&this.componentRef.destroy(),this.destroyStyle(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(y(de),y(P),y(R),y(le),y(t,12))};static \u0275cmp=oe({type:t,selectors:[["p-dynamicDialog"],["p-dynamicdialog"],["p-dynamic-dialog"]],viewQuery:function(n,i){if(n&1&&(w(We,5),w(He,5),w(Qe,5),w(Ze,5),w(qe,5)),n&2){let a;z(a=I())&&(i.insertionPoint=a.first),z(a=I())&&(i.maskViewChild=a.first),z(a=I())&&(i.contentViewChild=a.first),z(a=I())&&(i.footerViewChild=a.first),z(a=I())&&(i.headerViewChild=a.first)}},standalone:!0,features:[ue([Ne]),me,ye],decls:3,vars:9,consts:[["mask",""],["container",""],["content",""],["titlebar",""],["footer",""],[3,"ngStyle","ngClass"],["role","dialog","pFocusTrap","",3,"ngClass","ngStyle","style","class","pFocusTrapDisabled","width","height",4,"ngIf"],["role","dialog","pFocusTrap","",3,"ngClass","ngStyle","pFocusTrapDisabled"],["style","z-index: 90;",3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass","mousedown",4,"ngIf"],[3,"ngClass","ngStyle"],[4,"ngIf"],[4,"ngComponentOutlet"],[3,"ngClass",4,"ngIf"],[2,"z-index","90",3,"mousedown","ngClass"],[3,"mousedown","ngClass"],[3,"ngClass","id"],[3,"ngClass"],[3,"styleClass","tabindex","onClick","keydown.enter",4,"ngIf"],["rounded","","text","","severity","secondary",3,"styleClass","ariaLabel","onClick","keydown.enter",4,"ngIf"],[3,"onClick","keydown.enter","styleClass","tabindex"],[4,"ngTemplateOutlet"],["rounded","","text","","severity","secondary",3,"onClick","keydown.enter","styleClass","ariaLabel"],["pDynamicDialogContent",""]],template:function(n,i){n&1&&(p(0,"div",5,0),d(2,zt,9,30,"div",6),g()),n&2&&(B(i.ddconfig.maskStyleClass),s("ngStyle",ve(5,Ge,i.position==="left"||i.position==="topleft"||i.position==="bottomleft"?"flex-start":i.position==="right"||i.position==="topright"||i.position==="bottomright"?"flex-end":"center",i.position==="top"||i.position==="topleft"||i.position==="topright"?"flex-start":i.position==="bottom"||i.position==="bottomleft"||i.position==="bottomright"?"flex-end":"center",i.ddconfig.modal?"auto":"none"))("ngClass",i.maskClass),r(2),s("ngIf",i.visible))},dependencies:[Le,ze,Ie,Te,ke,Ee,Ve,We,Pe,Fe,je,Be,Xe],encapsulation:2,data:{animation:[Re("animation",[N("void => visible",[Q(It)]),N("visible => void",[Q(Tt)])])]}})}return t})();var K=class{_parentInjector;_additionalTokens;constructor(o,e){this._parentInjector=o,this._additionalTokens=e}get(o,e,n){let i=this._additionalTokens.get(o);return i||this._parentInjector.get(o,e)}},oi=(()=>{class t{appRef;injector;document;dialogComponentRefMap=new Map;constructor(e,n,i){this.appRef=e,this.injector=n,this.document=i}open(e,n){if(!this.duplicationPermission(e,n))return null;let i=this.appendDialogComponentToBody(n,e);return this.dialogComponentRefMap.get(i).instance.childComponentType=e,i}getInstance(e){return this.dialogComponentRefMap.get(e).instance}appendDialogComponentToBody(e,n){let i=new WeakMap;i.set(P,e);let a=new R;i.set(R,a);let h=a.onClose.subscribe(()=>{this.dialogComponentRefMap.get(a).instance.close()}),v=a.onDestroy.subscribe(()=>{this.removeDialogComponentFromBody(a),v.unsubscribe(),h.unsubscribe()}),c=De(Et,{environmentInjector:this.appRef.injector,elementInjector:new K(this.injector,i)});this.appRef.attachView(c.hostView);let m=c.hostView.rootNodes[0];return!e.appendTo||e.appendTo==="body"?this.document.body.appendChild(m):Se(e.appendTo,m),this.dialogComponentRefMap.set(a,c),a}removeDialogComponentFromBody(e){if(!e||!this.dialogComponentRefMap.has(e))return;let n=this.dialogComponentRefMap.get(e);this.appRef.detachView(n.hostView),n.destroy(),this.dialogComponentRefMap.delete(e)}duplicationPermission(e,n){if(n.duplicate)return!0;let i=!0;for(let[a,h]of this.dialogComponentRefMap)if(h.instance.childComponentType===e){i=!1;break}return i}static \u0275fac=function(n){return new(n||t)(S(xe),S(re),S(we))};static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();export{R as a,oi as b};
