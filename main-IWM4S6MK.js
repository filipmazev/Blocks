import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{$ as Q$1,$t as fi,A as Hm,An as ng,At as _r,B as Kp,Bn as pk,Bt as bp,C as EN,Cn as lr,Cr as zC,Ct as Ye,D as F8,Dn as n5,Dt as Zt$1,E as Eu,En as mt$1,Et as ZT,F as It$1,Fn as ol,Ft as an,G as MS,Gt as cv,H as L$1,I as J$3,In as ot,J as NT,Jn as rt$1,Jt as ed,K as Mc,Kn as r_,Kt as d0,L as JE,M as Hz,N as Ic,Nt as a_,O as G,Ot as _c,P as Ii,Pn as o_,Pt as al,Qn as st,Qt as fe$1,R as Ju,Rn as p$1,Rt as bk,S as Dr,Sr as z$1,St as YE,T as Ep,Un as qe,Ut as cl,V as Kt$1,Vn as q$2,Vt as c0,W as Le,Wt as cr,X as Oe$2,Xn as sN,Y as OT,Yn as s5,Yt as ee$2,Z as Pe,Zn as s_,_ as DE,_n as jz,_r as xt$1,_t as Vn,a as Be,an as hi,at as S$1,b as De,bn as lM,br as yo,bt as W$1,c as C,cr as vo,ct as Sn,d as Ck,er as td,et as Q9,f as Co,fn as j$2,fr as x$1,g as D0,gn as jt$1,gr as xi,h as Cw,hn as jl,hr as xe$2,ht as V5,i as Ac,in as he$1,ir as u0,it as Rc,j as Hv,jt as a0,k as GC,kt as _d,ln as i_,lr as wA,lt as Te,m as Ct$1,n as $e,nr as tn,nt as Qn,o as Br,p as Cp,pn as jC,pr as xT,pt as Uv,q as Mr,qn as re$2,qt as dg,r as $o,rn as gx,rt as R_,s as Bu,sr as ur,st as Sd,t as $,tr as tg,un as it,ur as wm,v as DN,vn as kc,vr as xw,vt as Vt$1,w as Ed,wr as zi,wt as Yt$1,xr as yx,yn as ke,yt as Vz,zn as pe$2,zt as bo}from"./chunk-DtVVo_Bz.js";var y=new C(`NAVIGATION_CONFIG`);var K$2=new C(`NAVIGATION_ACCESS_ADAPTER`);var _$1=class o{router=p$1(tn);config=p$1(y,{optional:!0});i18n=p$1(Ju,{optional:!0});accessAdapter=p$1(K$2,{optional:!0});navEnd=F8(this.router.events.pipe(Be(n=>n instanceof xt$1)));current=W$1(()=>(this.navEnd(),this.i18n?.version?.(),this.resolveCurrent(this.router.routerState.snapshot.root)));routeBase=W$1(()=>this.accessAdapter?.resolveBaseRoute());routes=W$1(()=>(this.i18n?.version?.(),this.extractRoutes(this.router.config)));baseRoute=W$1(()=>{let n=this.routes(),e=this.routeBase(),t,r=d=>{for(let s of d){if(s.data?.root&&(t||(t=s.route),e&&s.route.startsWith(e)))return s.route;if(s.children?.length){let a=r(s.children);if(a)return a}}};return r(n)??t??e});menu=W$1(()=>this.buildMenu(this.routes()));menuGroups=W$1(()=>{let n=[...this.config?.sections??[]].sort((t,r)=>(t.order??Number.POSITIVE_INFINITY)-(r.order??Number.POSITIVE_INFINITY)),e=new Map(n.map(t=>[t.id,{id:t.id,title:t.title??t.id,items:[]}]));for(let t of this.flattenRoutes(this.menu())){if(!t.visible||t.data?.menu===!1)continue;let r$2=t.section??``,i=e.get(r$2);i||(i={id:r$2,title:r$2,items:[]},e.set(r$2,i)),i.items.push(s(r({},t),{children:void 0}))}return[...e.values()].filter(t=>t.items.length>0)});navigateBack(){let n=this.current().breadcrumbs;if(n.length>1){let e=n[n.length-2];this.router.navigateByUrl(e.route)}else this.router.navigateByUrl(this.routeBase()??`/`)}extractRoutes(n,e=[]){let t=[];for(let r of n){if(r.redirectTo||this.accessAdapter&&!this.accessAdapter.canAccessMenu(r.data??{}))continue;let i=r.path??``,d=i?[...e,i]:[...e],s=`/`+d.filter(Boolean).join(`/`),a=r.children?.length?this.extractRoutes(r.children,d):[],c=r.data?.nav;if(!c){t.push(...a);continue}let I={id:s,route:s,label:this.resolveNavText(c.label,{snapshot:void 0})??``,icon:c.icon,section:c.section,visible:c.visible?c.visible():!0,data:c,children:a};t.push(I)}return this.sortNavigationItems(t)}resolveCurrent(n){let e=n,t;for(;e;){let f=e.children.find(m=>m.outlet===`primary`)??null;if(!f){t=e;break}e=f}if(!t)return{breadcrumbs:[]};let r=t.pathFromRoot.flatMap(f=>f.url.map(m=>m.path)).filter(Boolean),i=[],d=this.flattenRoutes(this.routes()),s=``;for(let f of r){s+=`/`+f;let m=this.matchRouteToUrl(d,s);if(m&&m.data&&!m.data.hidden){let O={snapshot:t},C=this.resolveNavText(m.data.breadcrumb,O)??this.resolveNavText(m.data.label,O);C&&i[i.length-1]?.label!==C&&i.push({label:C,route:s})}}let a=t.routeConfig?.data?.nav,c=`/`+r.join(`/`),I;return a&&!a.hidden&&(I={id:c,route:c,label:this.resolveNavText(a.label,{snapshot:t})??``,icon:a.icon,section:a.section,visible:a.visible?a.visible():!0,data:a}),{current:I,breadcrumbs:i}}buildMenu(n){return n.map(e=>{let t=this.buildMenu(e.children??[]);return!(e.visible&&e.data?.menu!==!1)&&!t.length?null:s(r({},e),{children:t})}).filter(e=>e!==null)}sortNavigationItems(n){let e=this.config?.sortItems;return[...n].sort((t,r)=>{if(e)return e(t,r);let i=t.data?.order??Number.POSITIVE_INFINITY,d=r.data?.order??Number.POSITIVE_INFINITY;return i!==d?i-d:t.label.localeCompare(r.label)})}matchRouteToUrl(n,e){return n.find(r=>r.route===e)||n.find(r=>r.route.includes(`:`)?new RegExp(`^`+r.route.replace(/:[^\s/]+/g,`([^/]+)`)+`$`).test(e):!1)}flattenRoutes(n){return n.reduce((e,t)=>(e.push(t),t.children&&e.push(...this.flattenRoutes(t.children)),e),[])}resolveNavText(n,e){if(!n)return;let t=typeof n==`function`?n(e):n;return ed(t)?this.i18n?.translate(t.key,{route:e.snapshot}):t}static ɵfac=function(e){return new(e||o)};static ɵprov=x$1({token:o,factory:o.ɵfac,providedIn:`root`})};var H$2=(o,n)=>n.route;function J$2(o,n){if(o&1&&(It$1(0,`span`,1),Co(1),jt$1()),o&2){let e=ur().$implicit;Vt$1(),Rc(e.label)}}function Q(o,n){if(o&1&&(It$1(0,`a`,2),Co(1),jt$1(),fi(2,`bx-icon`,3)),o&2){let e=ur().$implicit,t=ur(2);vo(`routerLink`,e.route),Vt$1(),Rc(e.label),Vt$1(),vo(`name`,t.divider())}}function Z$2(o,n){if(o&1&&lr(0,J$2,2,1,`span`,1)(1,Q,3,3),o&2){let e=n.$index,t=n.$count;cr(e===t-1?0:1)}}function ee$1(o,n){if(o&1&&(It$1(0,`nav`,0),bp(1,Z$2,2,1,null,null,H$2),jt$1()),o&2){let e=ur();Zt$1(`aria-label`,e.ariaLabel()),Vt$1(),Cp(e.current().breadcrumbs)}}var X=class o{navigationService=p$1(_$1);a11y=p$1(ke);isAnimated=W$1(()=>!this.a11y.isReducedMotion());minimumBreadcrumbs=L$1(2);divider=L$1(`chevron-right`);showBreadcumbs=W$1(()=>{let n=Math.max(1,this.minimumBreadcrumbs());return this.current().breadcrumbs.length>=n});ariaLabel=W$1(()=>`Breadcrumbs: ${this.current().breadcrumbs.map(e=>e.label).join(` > `)}`);current=this.navigationService.current;static ɵfac=function(e){return new(e||o)};static ɵcmp=mt$1({type:o,selectors:[[`bx-breadcrumbs`]],inputs:{minimumBreadcrumbs:[1,`minimumBreadcrumbs`],divider:[1,`divider`]},decls:1,vars:1,consts:[[1,`breadcrumbs`],[`aria-current`,`page`,1,`crumb`,`last`],[1,`crumb`,3,`routerLink`],[`size`,`16`,1,`breadcrumb-separator`,3,`name`]],template:function(e,t){e&1&&lr(0,ee$1,3,1,`nav`,0),e&2&&cr(t.showBreadcumbs()?0:-1)},dependencies:[Eu,td],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
}
.breadcrumbs[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.crumb[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font: inherit;
  text-decoration: none;
  overflow-wrap: anywhere;
  min-width: 0;
}
a.crumb[_ngcontent-%COMP%]:hover {
  color: var(--%NS%bx-text-brand);
  text-decoration: underline;
}
a.crumb[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0.25rem;
  border-radius: 0.25rem;
}
.last[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-primary);
  font-weight: 600;
}
.breadcrumb-separator[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  color: var(--%NS%bx-text-secondary);
}`]})};function Oe$1(o){return{config:o,withNav(n,e){return te$2(n,e)}}}function we(o){return[{provide:y,useValue:o}]}function te$2(o,n){let e=o.data?.nav??{};return s(r({},o),{data:s(r({},o.data??{}),{nav:r(r({},e),n)})})}var ie$1=[`*`];var h$1=class r{static ɵfac=function(e){return new(e||r)};static ɵcmp=mt$1({type:r,selectors:[[`bx-error`]],ngContentSelectors:ie$1,decls:1,vars:0,template:function(e,n){e&1&&(yo(),bo(0))},encapsulation:2})};var oe=[`errorText`];var ae$1=[`*`,[[`bx-error`]]];var le$2=[`*`,`bx-error`];function de(r,t){r&1&&(It$1(0,`span`,8),Co(1,`*`),jt$1())}function se$1(r,t){if(r&1&&(It$1(0,`button`,9),fi(1,`bx-icon`,11),jt$1()),r&2){let e=ur(2);vo(`bxTooltip`,e.tooltip())}}function ce$1(r,t){r&1&&fi(0,`bx-icon`,10)}function be$1(r,t){if(r&1&&(It$1(0,`div`,2)(1,`label`,7),Co(2),lr(3,de,2,0,`span`,8),jt$1(),lr(4,se$1,2,1,`button`,9),lr(5,ce$1,1,0,`bx-icon`,10),jt$1()),r&2){let e=ur();Vt$1(),Zt$1(`for`,e.forId()),Vt$1(),hi(` `,e.resolvedLabel(),` `),Vt$1(),cr(e.required()?3:-1),Vt$1(),cr(e.tooltip()?4:-1),Vt$1(),cr(e.loading()?5:-1)}}function pe$1(r,t){if(r&1&&(It$1(0,`button`,4),fi(1,`bx-icon`,11),jt$1()),r&2){let e=ur();vo(`bxTooltip`,e.tooltip()),Zt$1(`aria-label`,`More information`)}}function ue$1(r,t){if(r&1&&(It$1(0,`div`,12),fi(1,`bx-icon`,13),It$1(2,`span`,14,0),Co(4),jt$1()()),r&2){let e=ur();st(`bx-animated`,e.isAnimated()),Vt$1(4),Rc(e.resolvedError())}}var O=class r{i18n=p$1(Ju,{optional:!0});a11y=p$1(ke);element=p$1(re$2).nativeElement;lighting=p$1(r_);projectedError=jz(h$1,{read:re$2});errorElement=Vz(`errorText`);resolvedLabel=W$1(()=>this.resolveText(this.label()));resolvedError=W$1(()=>this.resolveText(this.error()));inline=L$1(!1);label=L$1(void 0);tooltip=L$1(void 0);error=L$1(void 0);required=L$1(!1);loading=L$1(!1);forId=L$1(``);isAnimated=W$1(()=>!this.a11y.isReducedMotion());constructor(){Hz(t=>{let e=this.projectedError()?.nativeElement,n=this.resolvedError()?this.errorElement()?.nativeElement:e;if(!n)return;let l=this.element.parentElement,_=this.element.closest(`form, fieldset`)??(l?.tagName.startsWith(`BX-`)?l.parentElement:l);if(!_)return;let T=this.element.querySelector(`.bx-field-control > [data-bx-surface]`),re=this.lighting.register(_,{element:T??n,edge:T?`bottom`:void 0,offsetX:.5,offsetY:T?1:0,z:32,color:`var(--bx-text-danger)`,intensity:.9,radius:240});t(()=>re.destroy())})}resolveText(t){if(this.i18n?.version?.(),!!t)return ed(t)?this.i18n?.translate(t.key)??t.key:t}static ɵfac=function(e){return new(e||r)};static ɵcmp=mt$1({type:r,selectors:[[`bx-form-field`]],contentQueries:function(e,n,l){e&1&&zC(l,n.projectedError,h$1,5,re$2),e&2&&NT()},viewQuery:function(e,n){e&1&&GC(n.errorElement,oe,5),e&2&&NT()},inputs:{inline:[1,`inline`],label:[1,`label`],tooltip:[1,`tooltip`],error:[1,`error`],required:[1,`required`],loading:[1,`loading`],forId:[1,`forId`]},ngContentSelectors:le$2,decls:8,vars:8,consts:[[`errorText`,``],[1,`bx-field-wrapper`],[1,`bx-field-header`],[1,`bx-field-control`],[`type`,`button`,`placement`,`top`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[1,`bx-field-error-projected`],[1,`bx-field-error`,3,`bx-animated`],[1,`bx-field-label`],[1,`bx-field-required`],[`type`,`button`,`placement`,`top`,`aria-label`,`More information`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[`name`,`loader`,`size`,`16`,1,`bx-spin`],[`name`,`help-circle`,`size`,`16`],[1,`bx-field-error`],[`name`,`alert-circle`,`size`,`16`],[1,`bx-field-error-text`]],template:function(e,n){e&1&&(yo(ae$1),It$1(0,`div`,1),lr(1,be$1,6,5,`div`,2),It$1(2,`div`,3),bo(3),lr(4,pe$1,2,2,`button`,4),jt$1(),It$1(5,`div`,5),bo(6,1),jt$1(),lr(7,ue$1,5,3,`div`,6),jt$1()),e&2&&(st(`is-invalid`,!!n.resolvedError()||!!n.projectedError()),Zt$1(`data-bx-field-invalid`,!!n.resolvedError()||!!n.projectedError()),Vt$1(),cr(n.resolvedLabel()||n.tooltip()&&!n.inline()?1:-1),Vt$1(),st(`bx-field-control-inline`,n.inline()),Vt$1(2),cr(n.inline()&&n.tooltip()?4:-1),Vt$1(3),cr(n.resolvedError()?7:-1))},dependencies:[xw,td,s_],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
.bx-field-wrapper[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;
  padding-bottom: 1.5rem;
}
.bx-field-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  min-height: 1.25rem;
}
.bx-field-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--%NS%bx-text-primary);
  -webkit-user-select: none;
  user-select: none;
}
.bx-field-required[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
  margin-left: 0.125rem;
}
.bx-field-tooltip-trigger[_ngcontent-%COMP%] {
  position: relative;
  display: inline-flex;
  color: var(--%NS%bx-text-secondary);
  cursor: help;
  outline: none;
}
.bx-field-tooltip-trigger[_ngcontent-%COMP%]:hover, 
.bx-field-tooltip-trigger[_ngcontent-%COMP%]:focus-visible {
  color: var(--%NS%bx-text-brand);
}
.bx-field-tooltip-trigger[_ngcontent-%COMP%]   bx-tooltip[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
}
.bx-spin[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_bx-spin 1s linear infinite;
  color: var(--%NS%bx-text-secondary);
}
.bx-field-error[_ngcontent-%COMP%], 
.bx-field-error-projected[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--%NS%bx-text-danger);
  position: relative;
  margin: 0;
  min-width: 0;
  overflow-wrap: anywhere;
}
.bx-field-error.bx-animated[_ngcontent-%COMP%], 
.bx-field-error-projected.bx-animated[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_bx-slide-down 0.2s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
}
.bx-field-error[_ngcontent-%COMP%]   .bx-field-error-text[_ngcontent-%COMP%], 
.bx-field-error-projected[_ngcontent-%COMP%]   .bx-field-error-text[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
@keyframes _ngcontent-%COMP%_bx-spin {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes _ngcontent-%COMP%_bx-slide-down {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.bx-field-tooltip-trigger[_ngcontent-%COMP%], 
.bx-inline-tooltip-trigger[_ngcontent-%COMP%] {
  border: 0;
  padding: 0.25rem;
  background: transparent;
  color: var(--%NS%bx-text-secondary);
  cursor: help;
}
.bx-field-error-projected[_ngcontent-%COMP%]:empty {
  display: none;
}
.bx-field-control[_ngcontent-%COMP%] {
  min-width: 0;
}
.bx-field-control-inline[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.bx-field-control-inline[_ngcontent-%COMP%]   .bx-field-tooltip-trigger[_ngcontent-%COMP%] {
  flex: 0 0 auto;
}
.bx-field-tooltip-trigger[_ngcontent-%COMP%] {
  border-radius: 0.25rem;
  padding: 0.25rem;
}
.bx-field-tooltip-trigger[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0;
}
.bx-field-error[_ngcontent-%COMP%] {
  align-items: flex-start;
}`]})};var me$1=[`inputElement`];function xe$1(r,t){if(r&1){let e=xT();It$1(0,`button`,6),it(`click`,function(){Hv(e);let l=ur();return Uv(l.clear())}),fi(1,`bx-icon`,7),jt$1()}if(r&2){let e=ur();vo(`disabled`,e.isDisabled())}}var te$1=class r extends YE{i18n=p$1(Ju,{optional:!0});inputId=W$1(()=>`bx-search-${Math.random().toString(36).substr(2,9)}`);resolvedPlaceholder=W$1(()=>{this.i18n?.version?.();let t=this.placeholder();return t?ed(t)?this.i18n?.translate(t.key)??t.key:t:``});search=Cw();inputElement;clear(){this.isDisabled()||(this.updateValue(``),this.search.emit(``),this.focus())}focus(){this.inputElement?.nativeElement.focus()}onInput(t){let e=t.target;this.updateValue(e.value),this.search.emit(e.value)}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Vn(r)))(n||r)}})();static ɵcmp=mt$1({type:r,selectors:[[`bx-search-input`]],viewQuery:function(e,n){if(e&1&&Ep(me$1,5),e&2){let l;kc(l=Ac())&&(n.inputElement=l.first)}},outputs:{search:`search`},features:[rt$1],decls:6,vars:17,consts:[[`inputElement`,``],[3,`label`,`tooltip`,`error`,`loading`,`required`,`forId`],[`bxSurface`,``,1,`bx-search-input-wrapper`],[`name`,`search`,`size`,`16`,1,`bx-search-icon-left`],[`type`,`text`,1,`bx-native-search-input`,3,`input`,`blur`,`disabled`,`value`],[`type`,`button`,`aria-label`,`Clear search`,1,`bx-search-clear-btn`,3,`disabled`],[`type`,`button`,`aria-label`,`Clear search`,1,`bx-search-clear-btn`,3,`click`,`disabled`],[`name`,`x`,`size`,`16`]],template:function(e,n){e&1&&(It$1(0,`bx-form-field`,1)(1,`div`,2),fi(2,`bx-icon`,3),It$1(3,`input`,4,0),it(`input`,function(_){return n.onInput(_)})(`blur`,function(){return n.onBlur()}),jt$1(),lr(5,xe$1,2,1,`button`,5),jt$1()()),e&2&&(vo(`label`,n.label())(`tooltip`,n.tooltip())(`error`,n.errorMessage)(`loading`,n.loading())(`required`,n.required())(`forId`,n.inputId()),Vt$1(),st(`is-invalid`,!!n.errorMessage)(`is-disabled`,n.isDisabled()),Vt$1(2),vo(`disabled`,n.isDisabled())(`value`,n.internalValue()||``),Zt$1(`id`,n.inputId())(`placeholder`,n.resolvedPlaceholder())(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()),Vt$1(2),cr(n.internalValue()?5:-1))},dependencies:[Mr,xw,O,td],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
.bx-search-input-wrapper[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--%NS%bx-bg-surface);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.25rem;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  min-height: 2.5rem;
  padding: 0.25rem 0.5rem 0.25rem 0.75rem;
  gap: 0.5rem;
}
.bx-search-input-wrapper[_ngcontent-%COMP%]:hover:not(.is-disabled) {
  border-color: var(--%NS%bx-border-strong);
}
.bx-search-input-wrapper[_ngcontent-%COMP%]:focus-within:not(.is-disabled) {
  border-color: var(--%NS%bx-border-brand);
  box-shadow: 0 0 0 3px var(--%NS%bx-primary-subtle);
}
.bx-search-input-wrapper.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
}
.bx-search-input-wrapper.is-invalid[_ngcontent-%COMP%]:focus-within {
  box-shadow: 0 0 0 3px var(--%NS%bx-bg-danger-subtle);
}
.bx-search-input-wrapper.is-disabled[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-element);
  opacity: 0.7;
  cursor: not-allowed;
}
.bx-search-icon-left[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  flex-shrink: 0;
}
.bx-native-search-input[_ngcontent-%COMP%] {
  flex: 1 1 0;
  min-width: 0;
  width: 0;
  text-overflow: ellipsis;
  box-sizing: border-box;
  padding: 0.5rem 0;
  background: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 0.875rem;
  color: var(--%NS%bx-text-heading);
}
.bx-native-search-input[_ngcontent-%COMP%]::placeholder {
  color: var(--%NS%bx-text-secondary);
}
.bx-native-search-input[_ngcontent-%COMP%]:disabled {
  color: var(--%NS%bx-text-secondary);
  cursor: not-allowed;
}
.bx-search-clear-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0.25rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  color: var(--%NS%bx-text-secondary);
  cursor: pointer;
  flex-shrink: 0;
}
.bx-search-clear-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0;
}
.bx-search-clear-btn[_ngcontent-%COMP%] {
  transition: color 0.15s ease;
}
.bx-search-clear-btn[_ngcontent-%COMP%]:hover {
  color: var(--%NS%bx-text-primary);
  background: var(--%NS%bx-bg-element-hover);
}
.bx-search-clear-btn.hidden[_ngcontent-%COMP%] {
  opacity: 0;
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
}
.bx-search-input-wrapper[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-shadow: none;
}
.bx-search-input-wrapper[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
}
.bx-search-input-wrapper[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: none;
  border: 1px solid var(--%NS%bx-glass-edge);
  border-radius: 0.75rem;
}
.bx-search-input-wrapper[data-bx-surface][_ngcontent-%COMP%]::after {
  display: none;
}
.bx-search-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:focus-within:not(.is-disabled, :disabled), 
.bx-search-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:focus-visible:not(:disabled), 
.bx-search-input-wrapper[data-bx-surface].is-open[_ngcontent-%COMP%]:not(:disabled) {
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
  --%NS%bx-glass-shadow: none;
}
.bx-search-input-wrapper[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: color-mix(in srgb, var(--%NS%bx-text-danger) 40%, var(--%NS%bx-border-default));
  border-block-end-color: var(--%NS%bx-glass-edge);
  --%NS%bx-glass-shadow: 0 8px 18px -10px color-mix(in srgb, var(--%NS%bx-text-danger) 65%, transparent);
  outline-color: var(--%NS%bx-border-danger);
}`],changeDetection:1})};function ee(r,n){r&1&&(It$1(0,`span`,6),Co(1,`*`),jt$1())}function ne(r,n){if(r&1&&(It$1(0,`span`,5),Co(1),lr(2,ee,2,0,`span`,6),jt$1()),r&2){let t=ur();Vt$1(),hi(` `,t.resolvedLabel(),` `),Vt$1(),cr(t.required()?2:-1)}}var H$1=class r{radios=new Set;select(n){for(let t of this.radios)t!==n&&t.sharesGroup(n)&&t.writeValue(n.value())}static ɵfac=function(t){return new(t||r)};static ɵprov=x$1({token:r,factory:r.ɵfac,providedIn:`root`})};var K$1=class r extends YE{registry=p$1(H$1);element=p$1(re$2).nativeElement;i18n=p$1(Ju,{optional:!0});inputId=W$1(()=>`bx-radio-${JE()}`);resolvedLabel=W$1(()=>{this.i18n?.version?.();let n=this.label();if(n)return ed(n)?this.i18n?.translate(n.key)??n.key:n});value=L$1.required();name=L$1(``);showTooltip=!1;constructor(){super(),this.registry.radios.add(this),p$1(J$3).onDestroy(()=>this.registry.radios.delete(this))}sharesGroup(n){let t=this.ngControl?.control;return t&&t===n.ngControl?.control?!0:!!this.name()&&this.name()===n.name()&&this.element.closest(`form`)===n.element.closest(`form`)&&t?.parent===n.ngControl?.control?.parent}onSelect(){this.isDisabled()||(this.updateValue(this.value()),this.registry.select(this))}onBlur(){this.markAsTouched()}static ɵfac=function(t){return new(t||r)};static ɵcmp=mt$1({type:r,selectors:[[`bx-radio`]],inputs:{value:[1,`value`],name:[1,`name`]},features:[rt$1],decls:6,vars:18,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[1,`bx-inline-wrapper`],[`type`,`radio`,1,`bx-visually-hidden`,3,`change`,`blur`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-radio-circle`],[1,`bx-radio-inner`],[1,`bx-inline-label`],[1,`bx-inline-required`]],template:function(t,e){t&1&&(It$1(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),it(`change`,function(){return e.onSelect()})(`blur`,function(){return e.onBlur()}),jt$1(),It$1(3,`div`,3),fi(4,`div`,4),jt$1(),lr(5,ne,3,2,`span`,5),jt$1()()),t&2&&(vo(`inline`,!0)(`tooltip`,e.tooltip())(`error`,e.errorMessage)(`loading`,e.loading())(`forId`,e.inputId()),Vt$1(),st(`is-disabled`,e.isDisabled()),Vt$1(),vo(`disabled`,e.isDisabled())(`checked`,e.internalValue()===e.value()),Zt$1(`id`,e.inputId())(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel()),Vt$1(),st(`is-checked`,e.internalValue()===e.value())(`is-invalid`,!!e.errorMessage),Vt$1(2),cr(e.resolvedLabel()?5:-1))},dependencies:[Mr,xw,O],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.bx-visually-hidden[_ngcontent-%COMP%] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
.bx-inline-wrapper[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  min-height: 1.5rem;
  vertical-align: middle;
}
.bx-inline-wrapper.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.5;
  cursor: not-allowed;
}
.bx-inline-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-primary);
  line-height: 1.5;
}
.bx-inline-required[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
  margin-left: 0.125rem;
}
.bx-radio-circle[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  background-color: var(--%NS%bx-bg-surface);
  border: 1px solid var(--%NS%bx-border-strong);
  border-radius: 9999px;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}
.bx-radio-circle.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
  background-color: var(--%NS%bx-bg-danger-subtle);
}
.bx-radio-circle.is-checked[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-primary);
}
.bx-radio-circle.is-checked.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
}
.bx-radio-circle.is-checked[_ngcontent-%COMP%]   .bx-radio-inner[_ngcontent-%COMP%] {
  transform: scale(1);
}
input[_ngcontent-%COMP%]:focus-visible    ~ .bx-radio-circle[_ngcontent-%COMP%] {
  box-shadow: 0 0 0 3px var(--%NS%bx-primary-subtle);
}
.bx-radio-inner[_ngcontent-%COMP%] {
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--%NS%bx-primary);
  border-radius: 9999px;
  transform: scale(0);
  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.is-invalid[_ngcontent-%COMP%]   .bx-radio-inner[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-danger);
}
.bx-radio-circle[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-shadow: none;
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-edge: var(--%NS%bx-border-strong);
  --%NS%bx-glass-min-opacity: 0.65;
  border: 1px solid var(--%NS%bx-glass-edge);
  box-sizing: border-box;
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
}
.bx-radio-circle[data-bx-surface].is-checked[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-primary);
  --%NS%bx-glass-min-opacity: 0.55;
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
  --%NS%bx-glass-text: var(--%NS%bx-text-brand);
}
.bx-radio-circle[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-danger-subtle);
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
  --%NS%bx-glass-text: var(--%NS%bx-text-danger);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled):hover   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral-hover);
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled):hover   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked {
  --%NS%bx-glass-surface: var(--%NS%bx-primary-hover);
}`],changeDetection:1})};function te(r,n){r&1&&(It$1(0,`span`,6),Co(1,`*`),jt$1())}function re$1(r,n){if(r&1&&(It$1(0,`span`,5),Co(1),lr(2,te,2,0,`span`,6),jt$1()),r&2){let t=ur();Vt$1(),hi(` `,t.resolvedLabel(),` `),Vt$1(),cr(t.required()?2:-1)}}var Z$1=class r extends YE{i18n=p$1(Ju,{optional:!0});inputId=W$1(()=>`bx-slide-toggle-${JE()}`);resolvedLabel=W$1(()=>{this.i18n?.version?.();let n=this.label();if(n)return ed(n)?this.i18n?.translate(n.key)??n.key:n});onToggle(n){let t=n.target;this.updateValue(t.checked)}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let n;return function(e){return(n||(n=Vn(r)))(e||r)}})();static ɵcmp=mt$1({type:r,selectors:[[`bx-slide-toggle`]],features:[rt$1],decls:6,vars:17,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,1,`bx-visually-hidden`,3,`change`,`blur`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-slide-toggle-track`],[1,`bx-slide-toggle-thumb`],[1,`bx-inline-label`],[1,`bx-inline-required`]],template:function(t,e){t&1&&(It$1(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),it(`change`,function(o){return e.onToggle(o)})(`blur`,function(){return e.onBlur()}),jt$1(),It$1(3,`div`,3),fi(4,`div`,4),jt$1(),lr(5,re$1,3,2,`span`,5),jt$1()()),t&2&&(vo(`inline`,!0)(`tooltip`,e.tooltip())(`error`,e.errorMessage)(`loading`,e.loading())(`forId`,e.inputId()),Vt$1(),st(`is-disabled`,e.isDisabled()),Vt$1(),vo(`disabled`,e.isDisabled())(`checked`,e.internalValue()===!0),Zt$1(`id`,e.inputId())(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel()),Vt$1(),st(`is-checked`,e.internalValue()===!0)(`is-invalid`,!!e.errorMessage),Vt$1(2),cr(e.resolvedLabel()||e.tooltip()?5:-1))},dependencies:[Mr,xw,O],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.bx-visually-hidden[_ngcontent-%COMP%] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
.bx-inline-wrapper[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
}
.bx-inline-wrapper.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.5;
  cursor: not-allowed;
}
.bx-inline-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-primary);
}
.bx-inline-required[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
.bx-inline-tooltip-trigger[_ngcontent-%COMP%] {
  position: relative;
  display: inline-flex;
  color: var(--%NS%bx-text-secondary);
  cursor: help;
  outline: none;
}
.bx-inline-tooltip-trigger[_ngcontent-%COMP%]:hover, 
.bx-inline-tooltip-trigger[_ngcontent-%COMP%]:focus-visible {
  color: var(--%NS%bx-text-brand);
}
.bx-inline-tooltip-trigger[_ngcontent-%COMP%]   bx-tooltip[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
}
.bx-slide-toggle-track[_ngcontent-%COMP%] {
  position: relative;
  width: 42px;
  height: 24px;
  background-color: var(--%NS%bx-border-strong);
  border-radius: 9999px;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}
.bx-slide-toggle-track.is-invalid[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-danger-subtle);
  box-shadow: inset 0 0 0 2px var(--%NS%bx-border-danger);
}
.bx-slide-toggle-track.is-checked[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-primary);
}
.bx-slide-toggle-track.is-checked.is-invalid[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-danger);
}
.bx-slide-toggle-track.is-checked[_ngcontent-%COMP%]   .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
  transform: translateX(18px);
}
input[_ngcontent-%COMP%]:focus-visible    ~ .bx-slide-toggle-track[_ngcontent-%COMP%] {
  box-shadow: 0 0 0 3px var(--%NS%bx-primary-subtle);
}
.bx-slide-toggle-thumb[_ngcontent-%COMP%] {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  background:
    linear-gradient(
      150deg,
      #ffffff,
      #dce1e7);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-sizing: border-box;
  border-radius: 9999px;
  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: var(--%NS%bx-shadow-sm);
}
.bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-shadow: none;
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-edge: var(--%NS%bx-border-strong);
  --%NS%bx-glass-min-opacity: 0.65;
  border: 1px solid var(--%NS%bx-glass-edge);
  box-sizing: border-box;
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
}
.bx-slide-toggle-track[data-bx-surface].is-checked[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-primary);
  --%NS%bx-glass-min-opacity: 0.55;
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
  --%NS%bx-glass-text: var(--%NS%bx-text-brand);
}
.bx-slide-toggle-track[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-danger-subtle);
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
  --%NS%bx-glass-text: var(--%NS%bx-text-danger);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled):hover   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral-hover);
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled):hover   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked {
  --%NS%bx-glass-surface: var(--%NS%bx-primary-hover);
}
@media (forced-colors: active) {
  .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
    background: ButtonText;
  }
  .is-checked[_ngcontent-%COMP%]   .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
    background: Highlight;
  }
}
.bx-field-tooltip-trigger[_ngcontent-%COMP%], 
.bx-inline-tooltip-trigger[_ngcontent-%COMP%] {
  border: 0;
  padding: 0.25rem;
  background: transparent;
  color: var(--%NS%bx-text-secondary);
  cursor: help;
}`],changeDetection:1})};var J$1=class r{element=p$1(re$2);theme=p$1(Dr);shell;thumb;constructor(){lM(()=>this.sync());let n=p$1(z$1),t=p$1(J$3);Yt$1(()=>{let e=this.element.nativeElement,i=e.ownerDocument.createElement(`span`);i.className=`bx-slider-shell`;let o=e.ownerDocument.createElement(`span`);o.className=`bx-slider-thumb`,o.setAttribute(`aria-hidden`,`true`),e.before(i),i.append(e,o),this.shell=i,this.thumb=o,this.sync();let v=()=>{i.style.setProperty(`--bx-slider-center-y`,`${e.offsetTop+e.offsetHeight/2}px`),i.style.setProperty(`--bx-slider-track-start`,`${e.offsetLeft}px`),i.style.setProperty(`--bx-slider-track-width`,`${e.offsetWidth}px`),Hm(o)},R=new ResizeObserver(v);n.runOutsideAngular(()=>{R.observe(e),R.observe(i),v()});let Q=n.runOutsideAngular(()=>D0(o,d=>{let h=d.reflectionStrength>d.strength,z=h?d.reflectionStrength:d.strength;z<=.04?(o.style.removeProperty(`--bx-slider-light-color`),o.style.removeProperty(`--bx-slider-light-strength`)):(o.style.setProperty(`--bx-slider-light-color`,h?d.reflection:d.color),o.style.setProperty(`--bx-slider-light-strength`,String(z))),o.style.setProperty(`--bx-slider-light-x`,`${h?d.reflectionX:d.x}%`),o.style.setProperty(`--bx-slider-light-y`,`${h?d.reflectionY:d.y}%`)},e));t.onDestroy(()=>{R.disconnect(),Q(),i.replaceWith(e),this.shell=this.thumb=void 0})})}sync(){let n=this.element.nativeElement,t=n.min===``?0:Number(n.min),e=n.max===``?100:Number(n.max),i=e>t?Math.max(0,Math.min(100,(n.valueAsNumber-t)/(e-t)*100)):0,o=`${Number.isFinite(i)?i:0}%`;if(n.style.getPropertyValue(`--bx-slider-progress`)!==o&&n.style.setProperty(`--bx-slider-progress`,o),this.shell){let v=String((n.matches(`:dir(rtl)`)?100-(Number.isFinite(i)?i:0):Number.isFinite(i)?i:0)/100);this.shell.style.getPropertyValue(`--bx-slider-position`)!==v&&(this.shell.style.setProperty(`--bx-slider-position`,v),this.thumb&&Hm(this.thumb))}}static ɵfac=function(t){return new(t||r)};static ɵdir=G({type:r,selectors:[[`input`,`type`,`range`,`bxSlider`,``]],hostAttrs:[1,`bx-slider`],hostBindings:function(t,e){t&1&&it(`input`,function(){return e.sync()})}})};var e=[{id:`button`,title:`Button`,group:`Forms`,readme:`projects/blocks/forms/components/button/README.md`,symbol:`Button`,package:`@filip.mazev/blocks/forms`,selector:`button[bx-button]`,description:`An action control with Blocks intent colors, familiar variants and visible focus.`,example:`<button bx-button variant="filled" (click)="save()">Save changes</button>`},{id:`checkbox`,title:`Checkbox`,group:`Forms`,readme:`projects/blocks/forms/components/checkbox/README.md`,symbol:`Checkbox`,package:`@filip.mazev/blocks/forms`,selector:`bx-checkbox`,description:`A boolean choice integrated with Angular forms.`,example:`<bx-checkbox label="Receive updates" [formControl]="updates" />`},{id:`form-field`,title:`Form field`,group:`Forms`,readme:`projects/blocks/forms/components/form-field/README.md`,symbol:`FormField`,package:`@filip.mazev/blocks/forms`,selector:`bx-form-field`,description:`A shared label, help text, validation and loading frame for controls.`,example:`<bx-form-field label="Project name" forId="project" [required]="true" [error]="error">
  <input id="project" (input)="update($event)" />
</bx-form-field>`},{id:`input-field`,title:`Input field`,group:`Forms`,readme:`projects/blocks/forms/components/input-field/README.md`,symbol:`InputField`,package:`@filip.mazev/blocks/forms`,selector:`bx-input-field`,description:`A text, date or numeric input with a floating label and validation feedback.`,example:`<bx-input-field label="Project name" [formControl]="name" />`},{id:`radio`,title:`Radio`,group:`Forms`,readme:`projects/blocks/forms/components/radio-button/README.md`,symbol:`Radio`,package:`@filip.mazev/blocks/forms`,selector:`bx-radio`,description:`A single choice within a named group.`,example:`<bx-radio label="Daily" name="frequency" value="daily" [formControl]="frequency" />
<bx-radio label="Weekly" name="frequency" value="weekly" [formControl]="frequency" />`},{id:`search-input`,title:`Search input`,group:`Forms`,readme:`projects/blocks/forms/components/search-input/README.md`,symbol:`SearchInput`,package:`@filip.mazev/blocks/forms`,selector:`bx-search-input`,description:`A searchable text control with a clear action.`,example:`<bx-search-input label="Find a component" [formControl]="query" (search)="filter($event)" />`},{id:`select`,title:`Select`,group:`Forms`,readme:`projects/blocks/forms/components/select/README.md`,symbol:`Select`,package:`@filip.mazev/blocks/forms`,selector:`bx-select`,description:`A single-value selection control with a positioned options panel and optional search.`,example:`<bx-select label="Destination" [options]="options" [isSearchable]="true" [formControl]="destination" />`},{id:`slider`,title:`Slider`,group:`Forms`,readme:`projects/blocks/forms/directives/slider/README.md`,symbol:`SliderDirective`,package:`@filip.mazev/blocks/forms`,selector:`input[type=range][bxSlider]`,description:`A native range input with an opaque circular thumb and theme-aware value fill.`,example:`<label for="volume">Volume</label>
<input id="volume" type="range" bxSlider min="0" max="100" [formControl]="volume" />`},{id:`slide-toggle`,title:`Slide toggle`,group:`Forms`,readme:`projects/blocks/forms/components/slide-toggle/README.md`,symbol:`SlideToggle`,package:`@filip.mazev/blocks/forms`,selector:`bx-slide-toggle`,description:`A boolean preference that takes effect immediately.`,example:`<bx-slide-toggle label="Enable notifications" [formControl]="notifications" />`},{id:`error`,title:`Error message`,group:`Forms`,readme:`projects/blocks/forms/directives/error/README.md`,symbol:`BxError, FormField`,package:`@filip.mazev/blocks/forms`,selector:`bx-error`,description:`A projected custom error message inside a form-field.`,example:`<bx-form-field label="Reference" forId="reference">
  <input id="reference" aria-describedby="reference-error" />
  <bx-error id="reference-error">Enter at least three characters.</bx-error>
</bx-form-field>`},{id:`menu`,title:`Menu`,group:`Primitives`,readme:`projects/blocks/primitives/components/menu/README.md`,symbol:`Menu, MenuItem`,package:`@filip.mazev/blocks/primitives`,selector:`bx-menu`,description:`A shared surface for related menu actions.`,example:`<bx-menu>
  <bx-menu-item label="Duplicate" icon="copy" (action)="duplicate()" />
  <bx-menu-item label="Archive" icon="archive" (action)="archive()" />
</bx-menu>`},{id:`menu-item`,title:`Menu item`,group:`Primitives`,readme:`projects/blocks/primitives/components/menu-item/README.md`,symbol:`MenuItem`,package:`@filip.mazev/blocks/primitives`,selector:`bx-menu-item`,description:`A menu action with optional icons, a shortcut hint, and destructive intent.`,example:`<bx-menu-item label="Delete" icon="trash-2" [danger]="true" (action)="remove()" />`},{id:`tooltip`,title:`Tooltip`,group:`Primitives`,readme:`projects/blocks/primitives/components/tooltip/README.md`,symbol:`Tooltip`,package:`@filip.mazev/blocks/primitives`,selector:`bx-tooltip`,description:`A short descriptive surface for supplementary help.`,example:`<bx-tooltip text="Changes are saved automatically." />`},{id:`dropdown`,title:`Dropdown`,group:`Primitives`,readme:`projects/blocks/primitives/directives/dropdown/README.md`,symbol:`DropdownDirective, Menu, MenuItem`,package:`@filip.mazev/blocks/primitives`,selector:`[bxDropdown]`,description:`A positioned menu that fades in and out without resizing its contents.`,example:`<button bx-button [bxDropdown]="actions" bxTransition="fade">Actions</button>
<ng-template #actions>
  <bx-menu><bx-menu-item label="Save" (action)="save()" /></bx-menu>
</ng-template>`},{id:`context-menu`,title:`Context menu`,group:`Primitives`,readme:`projects/blocks/primitives/directives/context-menu/README.md`,symbol:`ContextMenuDirective, Menu, MenuItem`,package:`@filip.mazev/blocks/primitives`,selector:`[bxContextMenu]`,description:`A menu positioned at a context action’s coordinates.`,example:`<div [bxContextMenu]="actions">Right-click here</div>
<ng-template #actions><bx-menu><bx-menu-item label="Copy" (action)="copy()" /></bx-menu></ng-template>`},{id:`tooltip-directive`,title:`Tooltip trigger`,group:`Primitives`,readme:`projects/blocks/primitives/directives/tooltip/README.md`,symbol:`TooltipDirective`,package:`@filip.mazev/blocks/primitives`,selector:`[bxTooltip]`,description:`Connects a help surface to a trigger using the overlay positioning system.`,example:`<button bx-button bxTooltip="Saves this project" placement="top">Save</button>`},{id:`breadcrumbs`,title:`Breadcrumbs`,group:`Navigation`,readme:`projects/blocks/navigation/components/breadcrumbs/README.md`,symbol:`Breadcrumbs`,package:`@filip.mazev/blocks/navigation`,selector:`bx-breadcrumbs`,description:`A route-aware trail derived from Blocks navigation metadata.`,example:`<bx-breadcrumbs [minimumBreadcrumbs]="1" divider="chevron-right" />`},{id:`icon`,title:`Icon`,group:`Icons`,readme:`projects/blocks/icons/components/README.md`,symbol:`Icon`,package:`@filip.mazev/blocks/icons`,selector:`bx-icon`,description:`An asynchronously loaded SVG icon using semantic foreground and background tokens.`,example:`<bx-icon name="sparkles" size="32" color="text-primary" [decorative]="false" ariaLabel="Highlights" />`},{id:`modal-core`,title:`Modal core`,group:`Modals`,readme:`projects/blocks/modal/components/README.md`,symbol:`ModalCore`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`The service-owned host that composes modal content and chooses the active layout.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open modal core</button>`},{id:`modal-centered`,title:`Centered modal`,group:`Modals`,readme:`projects/blocks/modal/components/views/centered/README.md`,symbol:`ModalCentered`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`A focused dialog centered in the available viewport.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open centered modal</button>`},{id:`modal-side`,title:`Side modal`,group:`Modals`,readme:`projects/blocks/modal/components/views/side/README.md`,symbol:`ModalSide`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`A left or right panel for editing alongside the page context.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open side modal</button>`},{id:`modal-bottom-sheet`,title:`Bottom sheet`,group:`Modals`,readme:`projects/blocks/modal/components/views/bottom-sheet/README.md`,symbol:`ModalBottomSheet`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`A bottom-aligned modal surface suitable for compact actions and mobile layouts.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open bottom sheet</button>`},{id:`modal-backdrop`,title:`Modal backdrop`,group:`Modals`,readme:`projects/blocks/modal/components/shared/ui/backdrop/README.md`,symbol:`ModalBackdrop`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`The background scrim that separates an open modal from page content.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open modal backdrop</button>`},{id:`modal-banner`,title:`Modal banner`,group:`Modals`,readme:`projects/blocks/modal/components/shared/ui/banner/README.md`,symbol:`ModalBanner`,package:`@filip.mazev/blocks/modal`,selector:`bx-modal-banner`,description:`The shared modal heading, semantic icon and close action.`,example:`<bx-modal-banner [header]="{ text: 'Project settings' }" [showCloseButton]="true" (close)="handleClose($event)" />`},{id:`toast-core`,title:`Toast core`,group:`Notifications`,readme:`projects/blocks/toastr/components/README.md`,symbol:`ToastCore, ToastrService`,package:`@filip.mazev/blocks/toastr`,selector:`service-owned view`,description:`The toast lifecycle host with progress, dismissal and content composition.`,example:`<button bx-button (click)="notify()">Show notification</button>`},{id:`simple-toast`,title:`Simple toast`,group:`Notifications`,readme:`projects/blocks/toastr/components/views/simple-toast/README.md`,symbol:`SimpleToast, ToastrService`,package:`@filip.mazev/blocks/toastr`,selector:`service-owned view`,description:`A notification with a semantic icon, optional title and message.`,example:`<button bx-button (click)="notify()">Show success</button>`},{id:`surface`,title:`Surface effects`,group:`Primitives`,readme:`projects/blocks/effects/README.md`,symbol:`BxSurfaceDirective`,package:`@filip.mazev/blocks/effects`,selector:`[bxSurface]`,description:`Apply the shared glass material to a custom surface while inheriting application settings.`,example:`<section bxSurface>Custom content follows the global appearance settings.</section>`},{id:`modal-header`,title:`Modal header`,group:`Modals`,readme:`projects/blocks/modal/directives/header/README.md`,symbol:`ModalHeaderDirective`,package:`@filip.mazev/blocks/modal`,selector:`[appModalHeader]`,description:`Projects custom header content into the active Blocks modal layout.`,example:`<div *appModalHeader>Custom header content</div>`},{id:`modal-footer`,title:`Modal footer`,group:`Modals`,readme:`projects/blocks/modal/directives/footer/README.md`,symbol:`ModalFooterDirective`,package:`@filip.mazev/blocks/modal`,selector:`[appModalFooter]`,description:`Projects custom footer content into the active Blocks modal layout.`,example:`<div *appModalFooter>Custom footer content</div>`}];var I=new C(`HIGHLIGHT_OPTIONS`);function rt(e){return an([{provide:I,useValue:e}])}var h=(function(e){return e.FULL_WITH_CORE_LIBRARY_IMPORTS=`The full library and the core library were imported, only one of them should be imported!`,e.FULL_WITH_LANGUAGE_IMPORTS=`The highlighting languages were imported they are not needed!`,e.CORE_WITHOUT_LANGUAGE_IMPORTS=`The highlighting languages were not imported!`,e.LANGUAGE_WITHOUT_CORE_IMPORTS=`The core library was not imported!`,e.NO_FULL_AND_NO_CORE_IMPORTS=`Highlight.js library was not imported!`,e})(h||{});var V=(()=>{class e{constructor(){this.document=p$1(q$2),this.isPlatformBrowser=Le(p$1(De)),this.options=p$1(I,{optional:!0}),this._ready=new $e(null),this.ready=R_(this._ready.asObservable().pipe(Be(t=>!!t))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(ot(t=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=t,this.loadLineNumbers().pipe(Ct$1(i=>{i.activateLineNumbers(),this._ready.next(t)}))):(this._ready.next(t),qe)),Br(t=>(console.error(`[HLJS] `,t),this._ready.error(t),qe))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return Ed(()=>h.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return Ed(()=>h.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return Ed(()=>h.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return Ed(()=>h.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(ot(t=>this._loadLanguages(t)))}return Ed(()=>h.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(t){let i=Object.entries(this.options.languages).map(([s,G])=>_(G()).pipe(Ct$1(W=>t.registerLanguage(s,W))));return _d(i).pipe(fe$1(()=>t))}loadCoreLibrary(){return _(this.options.coreLibraryLoader())}loadFullLibrary(){return _(this.options.fullLibraryLoader())}loadLineNumbers(){return he$1(this.options.lineNumbersLoader())}setTheme(t){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=t:this.loadTheme(t))}loadTheme(t){this._themeLinkElement=this.document.createElement(`link`),this._themeLinkElement.href=t,this._themeLinkElement.type=`text/css`,this._themeLinkElement.rel=`stylesheet`,this._themeLinkElement.media=`screen,print`,this.document.head.appendChild(this._themeLinkElement)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵprov=x$1({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();var _=e=>he$1(e).pipe(Be(o=>!!o?.default),fe$1(o=>o.default));var z=(()=>{class e{constructor(){this.loader=p$1(V),this.options=p$1(I,{optional:!0}),this.hljsSignal=S$1(null),this.hljs=W$1(()=>this.hljsSignal()),this.loader.ready.then(t=>{this.hljsSignal.set(t),this.options?.highlightOptions&&t.configure(this.options.highlightOptions)})}async highlight(t,i){return(await this.loader.ready).highlight(t,i)}async highlightAuto(t,i){return(await this.loader.ready).highlightAuto(t,i)}async highlightElement(t){(await this.loader.ready).highlightElement(t)}async highlightAll(){(await this.loader.ready).highlightAll()}async configure(t){(await this.loader.ready).configure(t)}async registerLanguage(t,i){(await this.loader.ready).registerLanguage(t,i)}async unregisterLanguage(t){(await this.loader.ready).unregisterLanguage(t)}async registerAliases(t,{languageName:i}){(await this.loader.ready).registerAliases(t,{languageName:i})}async listLanguages(){return(await this.loader.ready).listLanguages()}async getLanguage(t){return(await this.loader.ready).getLanguage(t)}async safeMode(){(await this.loader.ready).safeMode()}async debugMode(){(await this.loader.ready).debugMode()}async lineNumbersBlock(t,i){let s=await this.loader.ready;s.lineNumbersBlock&&s.lineNumbersBlock(t,i)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵprov=x$1({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();var j$1;function q$1(){if(!j$1)try{j$1=window?.trustedTypes?.createPolicy(`ngx-highlightjs`,{createHTML:e=>e})}catch{}return j$1}function J(e){return q$1()?.createHTML(e)||e}var U$2=(()=>{class e{constructor(){this._hljs=p$1(z),this._nativeElement=p$1(re$2).nativeElement,this._sanitizer=p$1(Kp),Hz({write:()=>{let t=this.code();this.setTextContent(t||``),t&&this.highlightElement(t)}}),Hz({write:()=>{let t=this.highlightResult();this.setInnerHTML(t?.value),this.highlighted.emit(t)}})}setTextContent(t){requestAnimationFrame(()=>this._nativeElement.textContent=t)}setInnerHTML(t){requestAnimationFrame(()=>this._nativeElement.innerHTML=J(this._sanitizer.sanitize(pe$2.HTML,t)||``))}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵdir=G({type:e})}}return e})();var ht$1=(()=>{class e extends U$2{constructor(){super(...arguments),this.code=L$1(null,{alias:`highlight`}),this.highlightResult=S$1(null),this.language=L$1.required(),this.ignoreIllegals=L$1(void 0,{transform:Pe}),this.highlighted=Cw()}async highlightElement(t){let i=await this._hljs.highlight(t,{language:this.language(),ignoreIllegals:this.ignoreIllegals()});this.highlightResult.set(i)}static{this.ɵfac=(()=>{let t;return function(s){return(t||(t=Vn(e)))(s||e)}})()}static{this.ɵdir=G({type:e,selectors:[[``,`highlight`,``]],hostVars:2,hostBindings:function(i,s){i&2&&st(`hljs`,!0)},inputs:{code:[1,`highlight`,`code`],language:[1,`language`],ignoreIllegals:[1,`ignoreIllegals`]},outputs:{highlighted:`highlighted`},features:[Kt$1([{provide:U$2,useExisting:e}]),rt$1]})}}return e})();function R(r,e){r&1&&fi(0,`bx-icon`,4)}function A(r,e){r&1&&(It$1(0,`span`,6),Co(1,`*`),jt$1())}function U$1(r,e){if(r&1&&(It$1(0,`span`,5),Co(1),lr(2,A,2,0,`span`,6),jt$1()),r&2){let t=ur();Vt$1(),hi(` `,t.resolvedLabel(),` `),Vt$1(),cr(t.required()?2:-1)}}var L=class r extends YE{i18n=p$1(Ju,{optional:!0});inputId=W$1(()=>`bx-checkbox-${JE()}`);resolvedLabel=W$1(()=>{this.i18n?.version?.();let e=this.label();if(e)return ed(e)?this.i18n?.translate(e.key)??e.key:e});showTooltip=!1;onToggle(e){let t=e.target;this.updateValue(t.checked)}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let e;return function(n){return(e||(e=Vn(r)))(n||r)}})();static ɵcmp=mt$1({type:r,selectors:[[`bx-checkbox`]],features:[rt$1],decls:6,vars:18,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,1,`bx-visually-hidden`,3,`change`,`blur`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-checkbox-box`],[`name`,`check`,`size`,`16`],[1,`bx-inline-label`],[1,`bx-inline-required`]],template:function(t,n){t&1&&(It$1(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),it(`change`,function(a){return n.onToggle(a)})(`blur`,function(){return n.onBlur()}),jt$1(),It$1(3,`div`,3),lr(4,R,1,0,`bx-icon`,4),jt$1(),lr(5,U$1,3,2,`span`,5),jt$1()()),t&2&&(vo(`inline`,!0)(`tooltip`,n.tooltip())(`error`,n.errorMessage)(`loading`,n.loading())(`forId`,n.inputId()),Vt$1(),st(`is-disabled`,n.isDisabled()),Vt$1(),vo(`disabled`,n.isDisabled())(`checked`,n.internalValue()===!0),Zt$1(`id`,n.inputId())(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()),Vt$1(),st(`is-checked`,n.internalValue()===!0)(`is-invalid`,!!n.errorMessage),Vt$1(),cr(n.internalValue()===!0?4:-1),Vt$1(),cr(n.resolvedLabel()?5:-1))},dependencies:[Mr,xw,O,td],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.bx-visually-hidden[_ngcontent-%COMP%] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
.bx-inline-wrapper[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  min-height: 1.5rem;
  vertical-align: middle;
}
.bx-inline-wrapper.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.5;
  cursor: not-allowed;
}
.bx-inline-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-primary);
  line-height: 1.5;
}
.bx-inline-required[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
  margin-left: 0.125rem;
}
.bx-checkbox-box[_ngcontent-%COMP%] {
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  line-height: 0;
  background-color: var(--%NS%bx-bg-surface);
  border: 1px solid var(--%NS%bx-border-strong);
  border-radius: var(--%NS%bx-rounded-sm);
  color: var(--%NS%bx-text-primary);
  transition: background-color 0.15s ease, border-color 0.15s ease;
}
.bx-checkbox-box.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
  background-color: var(--%NS%bx-bg-danger-subtle);
}
.bx-checkbox-box.is-checked[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-primary);
  border-color: var(--%NS%bx-primary);
}
.bx-checkbox-box.is-checked.is-invalid[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-danger);
  border-color: var(--%NS%bx-border-danger);
}
input[_ngcontent-%COMP%]:focus-visible    ~ .bx-checkbox-box[_ngcontent-%COMP%] {
  box-shadow: 0 0 0 3px var(--%NS%bx-primary-subtle);
}
.bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-shadow: none;
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-edge: var(--%NS%bx-border-strong);
  --%NS%bx-glass-min-opacity: 0.65;
  border: 1px solid var(--%NS%bx-glass-edge);
  box-sizing: border-box;
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
}
.bx-checkbox-box[data-bx-surface].is-checked[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-primary);
  --%NS%bx-glass-min-opacity: 0.55;
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
}
.bx-checkbox-box[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-danger-subtle);
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
  --%NS%bx-glass-text: var(--%NS%bx-text-danger);
}`],changeDetection:1})};function H(r,e){r&1&&(It$1(0,`span`,6),Co(1,`*`),jt$1())}function K(r,e){if(r&1&&(It$1(0,`label`,3),Co(1),lr(2,H,2,0,`span`,6),jt$1()),r&2){let t=ur();Zt$1(`for`,t.inputId()),Vt$1(),hi(` `,t.resolvedLabel(),` `),Vt$1(),cr(t.isFieldRequired()?2:-1)}}function W(r,e){if(r&1){let t=xT();It$1(0,`div`,5)(1,`button`,7),it(`mousedown`,function(i){Hv(t);let a=ur();return Uv(a.startSpin(-1,i))})(`touchstart`,function(i){Hv(t);let a=ur();return Uv(a.startSpin(-1,i))})(`mouseup`,function(){Hv(t);let i=ur();return Uv(i.stopSpin())})(`mouseleave`,function(){Hv(t);let i=ur();return Uv(i.stopSpin())})(`touchend`,function(){Hv(t);let i=ur();return Uv(i.stopSpin())}),fi(2,`bx-icon`,8),jt$1(),It$1(3,`button`,7),it(`mousedown`,function(i){Hv(t);let a=ur();return Uv(a.startSpin(1,i))})(`touchstart`,function(i){Hv(t);let a=ur();return Uv(a.startSpin(1,i))})(`mouseup`,function(){Hv(t);let i=ur();return Uv(i.stopSpin())})(`mouseleave`,function(){Hv(t);let i=ur();return Uv(i.stopSpin())})(`touchend`,function(){Hv(t);let i=ur();return Uv(i.stopSpin())}),fi(4,`bx-icon`,9),jt$1()()}if(r&2){let t=ur();Vt$1(),vo(`disabled`,t.isSpinDownDisabled()),Vt$1(2),vo(`disabled`,t.isSpinUpDisabled())}}var j=class r extends YE{i18n=p$1(Ju,{optional:!0});inputId=W$1(()=>`bx-input-${JE()}`);isFocused=S$1(!1);isSpinDownDisabled=W$1(()=>{let e=this.min();return this.isDisabled()||e!==void 0&&(Number(this.internalValue())||0)<=e});isSpinUpDisabled=W$1(()=>{let e=this.max();return this.isDisabled()||e!==void 0&&(Number(this.internalValue())||0)>=e});isFloating=W$1(()=>{let e=this.internalValue(),t=e!=null&&e!==``,n=[`date`,`time`,`datetime-local`].includes(this.type());return this.isFocused()||t||n});resolvedPlaceholder=W$1(()=>{this.i18n?.version?.();let e=this.placeholder();return e?ed(e)?this.i18n?.translate(e.key)??e.key:e:``});resolvedLabel=W$1(()=>{this.i18n?.version?.();let e=this.label();return e?ed(e)?this.i18n?.translate(e.key)??e.key:e:``});type=L$1(`text`);min=L$1(void 0);max=L$1(void 0);step=L$1(1);spinTimeout;spinInterval;constructor(){super(),p$1(J$3).onDestroy(()=>this.stopSpin())}startSpin(e,t){t.preventDefault(),!this.isDisabled()&&(this.applyStep(e),this.spinTimeout=setTimeout(()=>{this.spinInterval=setInterval(()=>{this.applyStep(e)},50)},400))}stopSpin(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)}onInput(e){let t=e.target,n=this.type()===`number`?t.value===``?null:Number(t.value):t.value;this.updateValue(n)}onFocus(){this.isFocused.set(!0)}onBlur(){this.isFocused.set(!1),this.markAsTouched()}applyStep(e){let n=(Number(this.internalValue())||0)+e*this.step(),i=this.min(),a=this.max();i!==void 0&&n<i&&(n=i),a!==void 0&&n>a&&(n=a),this.updateValue(n),this.markAsTouched()}static ɵfac=function(t){return new(t||r)};static ɵcmp=mt$1({type:r,selectors:[[`bx-input-field`]],inputs:{type:[1,`type`],min:[1,`min`],max:[1,`max`],step:[1,`step`]},features:[rt$1],decls:6,vars:25,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[`bxSurface`,``,1,`bx-input-wrapper`],[1,`bx-input-container`],[1,`bx-floating-label`],[1,`bx-native-input`,3,`input`,`focus`,`blur`,`disabled`,`value`],[1,`bx-spinners-group`],[1,`bx-field-required`],[`type`,`button`,`tabindex`,`-1`,1,`bx-spin-btn`,3,`mousedown`,`touchstart`,`mouseup`,`mouseleave`,`touchend`,`disabled`],[`name`,`minus`,`size`,`16`],[`name`,`plus`,`size`,`16`]],template:function(t,n){t&1&&(It$1(0,`bx-form-field`,0)(1,`div`,1)(2,`div`,2),lr(3,K,3,3,`label`,3),It$1(4,`input`,4),it(`input`,function(a){return n.onInput(a)})(`focus`,function(){return n.onFocus()})(`blur`,function(){return n.onBlur()}),jt$1()(),lr(5,W,5,2,`div`,5),jt$1()()),t&2&&(vo(`inline`,!0)(`tooltip`,n.tooltip())(`error`,n.errorMessage)(`loading`,n.loading())(`forId`,n.inputId()),Vt$1(),st(`is-invalid`,!!n.errorMessage)(`is-disabled`,n.isDisabled())(`has-spinners`,n.type()===`number`)(`is-floating`,n.isFloating()),Vt$1(2),cr(n.label()?3:-1),Vt$1(),vo(`disabled`,n.isDisabled())(`value`,n.internalValue()??``),Zt$1(`id`,n.inputId())(`type`,n.type())(`placeholder`,n.isFloating()?n.resolvedPlaceholder():``)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`min`,n.min())(`max`,n.max())(`step`,n.step()),Vt$1(),cr(n.type()===`number`?5:-1))},dependencies:[Mr,xw,O,td],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
.bx-input-wrapper[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--%NS%bx-bg-neutral);
  border-radius: 0.25rem 0.25rem 0 0;
  border-bottom: 1px solid var(--%NS%bx-border-strong);
  transition: background-color 0.15s ease;
}
.bx-input-wrapper[_ngcontent-%COMP%]:hover:not(.is-disabled) {
  background-color: var(--%NS%bx-bg-neutral-hover);
}
.bx-input-wrapper.is-disabled[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-element);
  opacity: 0.7;
  border-bottom-style: dotted;
}
.bx-input-wrapper[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--%NS%bx-primary);
  transform: scaleX(0);
  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform-origin: center;
  z-index: 2;
}
.bx-input-wrapper[_ngcontent-%COMP%]:focus-within:not(.is-disabled)::after {
  transform: scaleX(1);
}
.bx-input-wrapper.is-invalid[_ngcontent-%COMP%] {
  border-bottom-color: var(--%NS%bx-border-danger);
}
.bx-input-wrapper.is-invalid[_ngcontent-%COMP%]::after {
  background-color: var(--%NS%bx-border-danger);
  transform: scaleX(1);
}
.bx-input-container[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  position: relative;
  display: flex;
  flex-direction: column;
}
.bx-native-input[_ngcontent-%COMP%] {
  width: 100%;
  box-sizing: border-box;
  padding: 1.5rem 0.75rem 0.5rem;
  height: 3.85rem;
  background: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 1rem;
  color: var(--%NS%bx-text-heading);
  z-index: 1;
}
.bx-native-input[_ngcontent-%COMP%]::placeholder {
  color: var(--%NS%bx-text-secondary);
}
.bx-native-input[_ngcontent-%COMP%]:disabled {
  color: var(--%NS%bx-text-secondary);
  cursor: not-allowed;
}
.bx-native-input[_ngcontent-%COMP%] {
  appearance: textfield;
}
.bx-native-input[_ngcontent-%COMP%]::-webkit-outer-spin-button, 
.bx-native-input[_ngcontent-%COMP%]::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}
.bx-floating-label[_ngcontent-%COMP%] {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  color: var(--%NS%bx-text-secondary);
  pointer-events: none;
  z-index: 2;
  transition:
    top 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    font-size 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    color 0.15s ease;
}
.bx-input-wrapper.is-floating[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  top: 0.5rem;
  transform: translateY(0);
  font-size: 0.75rem;
  font-weight: 500;
}
.bx-input-wrapper.is-floating[_ngcontent-%COMP%]:focus-within   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-primary);
}
.bx-input-wrapper.is-invalid[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
.bx-field-required[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  margin-left: 0.125rem;
}
.bx-spinners-group[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  align-self: stretch;
  z-index: 1;
}
.bx-spin-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  align-self: stretch;
  background: transparent;
  border: none;
  border-left: 1px solid var(--%NS%bx-border-subtle);
  color: var(--%NS%bx-text-secondary);
  cursor: pointer;
  outline: none;
  transition: background-color 0.1s ease, color 0.1s ease;
}
.bx-spin-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: var(--%NS%bx-bg-element-hover);
  color: var(--%NS%bx-text-primary);
}
.bx-spin-btn[_ngcontent-%COMP%]:active:not(:disabled) {
  background-color: var(--%NS%bx-bg-element-active);
}
.bx-spin-btn[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.3;
}
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-shadow: none;
}
.bx-input-wrapper[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
}
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: none;
  border: 1px solid var(--%NS%bx-glass-edge);
  border-radius: 0.75rem;
}
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]::after {
  display: none;
}
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:focus-within:not(.is-disabled, :disabled), 
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:focus-visible:not(:disabled), 
.bx-input-wrapper[data-bx-surface].is-open[_ngcontent-%COMP%]:not(:disabled) {
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
  --%NS%bx-glass-shadow: none;
}
.bx-input-wrapper[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: color-mix(in srgb, var(--%NS%bx-text-danger) 40%, var(--%NS%bx-border-default));
  border-block-end-color: var(--%NS%bx-glass-edge);
  --%NS%bx-glass-shadow: 0 8px 18px -10px color-mix(in srgb, var(--%NS%bx-text-danger) 65%, transparent);
  outline-color: var(--%NS%bx-border-danger);
}
.bx-spinners-group[_ngcontent-%COMP%] {
  border-radius: inherit;
  border-start-start-radius: 0;
  border-end-start-radius: 0;
  overflow: hidden;
}
.bx-spin-btn[_ngcontent-%COMP%]:last-child {
  border-start-end-radius: inherit;
  border-end-end-radius: inherit;
}`],changeDetection:1})};var be=[`searchInput`];var pe=[`origin`];var ge=(r,e)=>e.value;function ue(r,e){r&1&&(It$1(0,`span`,9),Co(1,`*`),jt$1())}function he(r,e){if(r&1&&(It$1(0,`span`,5),Co(1),lr(2,ue,2,0,`span`,9),jt$1()),r&2){let n=ur();Vt$1(),hi(` `,n.resolvedLabel(),` `),Vt$1(),cr(n.isFieldRequired()?2:-1)}}function me(r,e){if(r&1&&Co(0),r&2){let n=ur();hi(` `,n.resolvedPlaceholder(),` `)}}function fe(r,e){if(r&1&&Co(0),r&2){let n=ur();hi(` `,n.selectedOptionLabel(),` `)}}function xe(r,e){if(r&1){let n=xT();It$1(0,`div`,11)(1,`bx-search-input`,15,1),it(`search`,function(i){Hv(n);let a=ur(2);return Uv(a.onSearchChange(i))})(`keydown.enter`,function(i){return i.preventDefault()}),jt$1()()}if(r&2){let n=ur(2);Vt$1(),vo(`placeholder`,n.resolvedSearchPlaceholder())}}function ve(r,e){r&1&&fi(0,`bx-icon`,19)}function ye(r,e){if(r&1){let n=xT();It$1(0,`bx-menu-item`,16),it(`action`,function(){let i=Hv(n).$implicit,a=ur(2);return Uv(a.selectOption(i))}),It$1(1,`div`,17)(2,`div`,18),lr(3,ve,1,0,`bx-icon`,19),jt$1(),It$1(4,`span`,20),Co(5),jt$1()()()}if(r&2){let n=e.$implicit,t=ur(2);vo(`disabled`,n.disabled??!1)(`wrapLabel`,!0),Zt$1(`aria-selected`,t.internalValue()===n.value),Vt$1(3),cr(t.internalValue()===n.value?3:-1),Vt$1(),vo(`title`,n.resolvedStr),Vt$1(),Rc(n.resolvedStr)}}function _e(r,e){if(r&1&&(It$1(0,`div`,14)(1,`span`,21),Co(2),jt$1()()),r&2){let n=ur(2);Vt$1(2),Rc(n.resolvedEmptyMessage())}}function Oe(r,e){if(r&1){let n=xT();It$1(0,`div`,10),it(`keydown`,function(i){Hv(n);let a=ur();return Uv(a.onPanelKey(i))}),lr(1,xe,3,1,`div`,11),It$1(2,`div`,12),bp(3,ye,6,6,`bx-menu-item`,13,ge,!1,_e,3,1,`div`,14),jt$1()()}if(r&2){let n=ur();vo(`id`,n.inputId()+`-options`),Zt$1(`aria-label`,n.resolvedLabel()),Vt$1(),cr(n.isSearchable()?1:-1),Vt$1(2),Cp(n.filteredOptions())}}var le$1=class r$1 extends YE{a11y=p$1(ke);zone=p$1(z$1);isPanelAttached=S$1(!1);i18n=p$1(Ju,{optional:!0});searchTerm=S$1(``);inputId=W$1(()=>`bx-select-${JE()}`);overlayPositions=[new _r({originX:`start`,originY:`bottom`},{overlayX:`start`,overlayY:`top`},0,4),new _r({originX:`start`,originY:`top`},{overlayX:`start`,overlayY:`bottom`},0,-4)];isFloating=W$1(()=>{let e=this.internalValue(),n=e!=null&&e!==``;return this.isOpen()||n});resolvedLabel=W$1(()=>{this.i18n?.version?.();let e=this.label();return e?ed(e)?this.i18n?.translate(e.key)??e.key:e:``});resolvedPlaceholder=W$1(()=>{this.i18n?.version?.();let e=this.placeholder();return e?ed(e)?this.i18n?.translate(e.key)??e.key:e:``});resolvedOptions=W$1(()=>(this.i18n?.version?.(),this.options().map(e=>s(r({},e),{resolvedStr:this.resolveText(e.label)}))));filteredOptions=W$1(()=>{let e=this.searchTerm().trim(),n=this.resolvedOptions();if(this.externalFiltering()||!e)return n;let t=e.toLocaleLowerCase();return n.filter(i=>{let a=0;for(let ce of i.resolvedStr.toLocaleLowerCase())if(ce===t[a]&&a++,a===t.length)return!0;return!1})});selectedOptionLabel=W$1(()=>{let e=this.internalValue(),n=this.resolvedOptions().find(t=>t.value===e);return n?n.resolvedStr:``});resolvedSearchPlaceholder=W$1(()=>this.resolveText(this.searchPlaceholder()));resolvedEmptyMessage=W$1(()=>this.resolveText(this.emptyMessage()));options=L$1.required();isSearchable=L$1(!1);externalFiltering=L$1(!1);searchPlaceholder=L$1(`Search...`);emptyMessage=L$1(`No results found.`);search=Cw();isOpen=S$1(!1);transition;disconnectTheme;transitionRevision=0;focusOnOpen=null;connectedOverlay;searchInputRef;originRef;searchSubject=new ee$2;sub;ngOnInit(){super.ngOnInit(),this.sub=this.searchSubject.pipe(Sd(300),al()).subscribe(e=>{this.searchTerm.set(e),this.externalFiltering()&&this.search.emit(e)})}ngOnDestroy(){++this.transitionRevision,this.onPanelDetach(),this.sub?.unsubscribe()}toggleOpen(){this.isDisabled()||this.loading()||(this.isOpen()?this.close():this.open())}open(){if(this.isDisabled()||this.loading())return;++this.transitionRevision,this.isOpen.set(!0),this.isPanelAttached.set(!0);let e=this.connectedOverlay?.overlayRef?.overlayElement;e&&(e.inert=!1);let n=this.transition;n&&this.zone.runOutsideAngular(()=>n.enter())}close(){this.isOpen.set(!1),this.markAsTouched();let e=++this.transitionRevision,n=this.connectedOverlay?.overlayRef?.overlayElement;n?.contains(n.ownerDocument.activeElement)&&this.originRef?.nativeElement.focus({preventScroll:!0}),n&&(n.inert=!0);let t=this.transition;t&&!this.a11y.isReducedMotion()?this.zone.runOutsideAngular(()=>t.exit()).then(()=>{e===this.transitionRevision&&!this.isOpen()&&this.isPanelAttached.set(!1)}).catch(()=>{e===this.transitionRevision&&this.isPanelAttached.set(!1)}):this.isPanelAttached.set(!1)}onPanelAttach(){let e=this.transitionRevision;queueMicrotask(()=>{let n=this.connectedOverlay?.overlayRef,t=this.originRef?.nativeElement;if(!(!n?.hasAttached()||!t||!this.isOpen()||e!==this.transitionRevision)){if(this.disconnectTheme?.(),this.disconnectTheme=this.zone.runOutsideAngular(()=>$o(t,n.overlayElement)),n.updatePosition(),!this.a11y.isReducedMotion()){this.transition?.destroy(),this.transition=this.zone.runOutsideAngular(()=>Ii(t,n.overlayElement));let i=this.transition;this.zone.runOutsideAngular(()=>i.enter()).catch(()=>{e===this.transitionRevision&&(this.transition?.destroy(),this.transition=void 0)})}if(this.isSearchable())this.searchInputRef?.focus();else if(this.focusOnOpen){let i=this.panelItems();(this.focusOnOpen===`last`?i[i.length-1]:i[0])?.focus()}this.focusOnOpen=null}})}onPanelDetach(){this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0}refreshPanel(){this.transition?.refresh()}onTriggerKey(e){if([`ArrowDown`,`ArrowUp`,`Escape`].includes(e.key)){if(e.preventDefault(),e.key===`Escape`){this.close();return}if(this.focusOnOpen=e.key===`ArrowUp`?`last`:`first`,this.isOpen()){let n=this.panelItems();(this.focusOnOpen===`last`?n[n.length-1]:n[0])?.focus(),this.focusOnOpen=null}else this.open()}}onPanelKey(e){if(e.key===`Escape`){e.preventDefault(),e.stopPropagation(),this.close();return}if(e.key===`Tab`){this.close();return}if(e.target?.matches(`input,textarea`)||![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key))return;let n=this.panelItems();if(!n.length)return;let t=n.indexOf(n[0].ownerDocument.activeElement),i=e.key===`Home`?0:e.key===`End`?n.length-1:e.key===`ArrowDown`?(t+1)%n.length:t<0?n.length-1:(t-1+n.length)%n.length;e.preventDefault(),n[i].focus()}onOutsideClick(e){let n=e.target;this.originRef?.nativeElement.contains(n)||this.close()}selectOption(e){e.disabled||(this.updateValue(e.value),this.close())}onSearchChange(e){this.searchSubject.next(e)}panelItems(){return Array.from(this.connectedOverlay?.overlayRef?.overlayElement.querySelectorAll(`.bx-select-menu-container button:not(:disabled)`)??[])}resolveText(e){return e?ed(e)?this.i18n?.translate(e.key)??e.key:e:``}static ɵfac=(()=>{let e;return function(t){return(e||(e=Vn(r$1)))(t||r$1)}})();static ɵcmp=mt$1({type:r$1,selectors:[[`bx-select`]],viewQuery:function(n,t){if(n&1&&Ep(DN,5)(be,5)(pe,5,re$2),n&2){let i;kc(i=Ac())&&(t.connectedOverlay=i.first),kc(i=Ac())&&(t.searchInputRef=i.first),kc(i=Ac())&&(t.originRef=i.first)}},inputs:{options:[1,`options`],isSearchable:[1,`isSearchable`],externalFiltering:[1,`externalFiltering`],searchPlaceholder:[1,`searchPlaceholder`],emptyMessage:[1,`emptyMessage`]},outputs:{search:`search`},features:[rt$1],decls:10,vars:27,consts:[[`origin`,`cdkOverlayOrigin`],[`searchInput`,``],[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[`type`,`button`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`],[`name`,`chevron-down`,`size`,`16`,1,`bx-select-caret`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayWidth`],[1,`bx-field-required`],[`bxSurface`,``,`role`,`listbox`,`tabindex`,`0`,1,`bx-select-panel`,3,`keydown`,`id`],[1,`bx-select-search-container`],[1,`bx-select-menu-container`],[`role`,`option`,3,`disabled`,`wrapLabel`],[1,`bx-select-empty`],[3,`search`,`keydown.enter`,`placeholder`],[`role`,`option`,3,`action`,`disabled`,`wrapLabel`],[1,`bx-select-item-inner`],[1,`bx-select-check-placeholder`],[`name`,`check`,`size`,`16`],[3,`title`],[1,`bx-empty-text`]],template:function(n,t){if(n&1&&(It$1(0,`bx-form-field`,2)(1,`button`,3,0),it(`click`,function(){return t.toggleOpen()})(`keydown`,function(a){return t.onTriggerKey(a)}),It$1(3,`div`,4),lr(4,he,3,2,`span`,5),It$1(5,`span`,6),lr(6,me,1,1)(7,fe,1,1),jt$1()(),fi(8,`bx-icon`,7),jt$1(),jC(9,Oe,6,4,`ng-template`,8),it(`overlayOutsideClick`,function(a){return t.onOutsideClick(a)})(`attach`,function(){return t.onPanelAttach()})(`detach`,function(){return t.onPanelDetach()})(`positionChange`,function(){return t.refreshPanel()}),jt$1()),n&2){let i=OT(2);vo(`inline`,!0)(`tooltip`,t.tooltip())(`error`,t.errorMessage)(`loading`,t.loading())(`forId`,t.inputId()),Vt$1(),st(`is-invalid`,!!t.errorMessage)(`is-open`,t.isOpen())(`is-floating`,t.isFloating()),vo(`disabled`,t.isDisabled()||t.loading()),Zt$1(`id`,t.inputId())(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel()||t.resolvedLabel())(`aria-expanded`,t.isOpen())(`aria-controls`,t.isPanelAttached()?t.inputId()+`-options`:null),Vt$1(3),cr(t.label()?4:-1),Vt$1(),st(`is-placeholder`,t.internalValue()===null),Zt$1(`title`,t.selectedOptionLabel()||t.resolvedPlaceholder()),Vt$1(),cr(t.internalValue()===null&&t.isFloating()?6:7),Vt$1(3),vo(`cdkConnectedOverlayOrigin`,i)(`cdkConnectedOverlayOpen`,t.isPanelAttached())(`cdkConnectedOverlayPositions`,t.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayWidth`,i.elementRef.nativeElement.offsetWidth)}},dependencies:[Mr,xw,EN,DN,dg,O,td,o_,te$1],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
.bx-select-trigger[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--%NS%bx-bg-neutral);
  border-radius: 0.25rem 0.25rem 0 0;
  border: none;
  border-bottom: 1px solid var(--%NS%bx-border-strong);
  transition: background-color 0.15s ease;
  padding: 0 0.75rem 0 0;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  outline: none;
}
.bx-select-trigger[_ngcontent-%COMP%]:hover:not(:disabled) {
  background-color: var(--%NS%bx-bg-neutral-hover);
}
.bx-select-trigger[_ngcontent-%COMP%]:disabled {
  background-color: var(--%NS%bx-bg-element);
  opacity: 0.7;
  border-bottom-style: dotted;
  cursor: not-allowed;
}
.bx-select-trigger[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--%NS%bx-primary);
  transform: scaleX(0);
  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform-origin: center;
  z-index: 2;
}
.bx-select-trigger.is-open[_ngcontent-%COMP%]::after, 
.bx-select-trigger[_ngcontent-%COMP%]:focus-visible:not(:disabled)::after {
  transform: scaleX(1);
}
.bx-select-trigger.is-invalid[_ngcontent-%COMP%] {
  border-bottom-color: var(--%NS%bx-border-danger);
}
.bx-select-trigger.is-invalid[_ngcontent-%COMP%]::after {
  background-color: var(--%NS%bx-border-danger);
  transform: scaleX(1);
}
.bx-select-container[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.bx-select-value[_ngcontent-%COMP%] {
  width: 100%;
  box-sizing: border-box;
  padding: 1.5rem 0 0.5rem 0.75rem;
  min-height: 3rem;
  display: block;
  font-size: 1rem;
  color: var(--%NS%bx-text-heading);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
  z-index: 1;
}
.bx-select-value.is-placeholder[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
}
.bx-floating-label[_ngcontent-%COMP%] {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  color: var(--%NS%bx-text-secondary);
  pointer-events: none;
  z-index: 2;
  transition:
    top 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    font-size 0.2s cubic-bezier(0.25, 0.8, 0.25, 1),
    color 0.15s ease;
}
.bx-select-trigger.is-floating[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  top: 0.5rem;
  transform: translateY(0);
  font-size: 0.75rem;
  font-weight: 500;
}
.bx-select-trigger.is-floating.is-open[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%], 
.bx-select-trigger.is-floating[_ngcontent-%COMP%]:focus-visible   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-primary);
}
.bx-select-trigger.is-invalid[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger) !important;
}
.bx-field-required[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  margin-left: 0.125rem;
}
.bx-select-caret[_ngcontent-%COMP%] {
  flex-shrink: 0;
  color: var(--%NS%bx-text-secondary);
  transition: transform 0.2s ease;
  margin-left: 0.5rem;
  transform-origin: center;
}
.is-open[_ngcontent-%COMP%]   .bx-select-caret[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.bx-select-panel[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 100%;
  width: 100%;
  max-width: 100%;
  background-color: var(--%NS%bx-bg-surface);
  border: 1px solid var(--%NS%bx-border-subtle);
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-height: 18rem;
}
.bx-select-search-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  padding: 0.25rem;
  flex-shrink: 0;
  border-bottom: 1px solid var(--%NS%bx-border-subtle);
}
.bx-select-menu-container[_ngcontent-%COMP%] {
  overflow: hidden auto;
  padding: 0.25rem;
}
.bx-select-menu-container[_ngcontent-%COMP%]::-webkit-scrollbar {
  width: 6px;
}
.bx-select-menu-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {
  background: var(--%NS%bx-scroll-bg);
}
.bx-select-menu-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {
  background: var(--%NS%bx-scroll-thumb);
  border-radius: 9999px;
}
.bx-select-menu-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {
  background: var(--%NS%bx-scroll-thumb-hover);
}
.bx-select-item-inner[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}
.bx-select-check-placeholder[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--%NS%bx-primary);
  transition: color 0.15s ease-in-out;
}
bx-menu-item[_ngcontent-%COMP%]:hover   .bx-select-check-placeholder[_ngcontent-%COMP%] {
  color: currentcolor;
}
.bx-select-empty[_ngcontent-%COMP%] {
  padding: 0.75rem;
  text-align: center;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  font-style: italic;
}
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-shadow: none;
}
.bx-select-trigger[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
}
.bx-select-panel[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
}
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: none;
  border: 1px solid var(--%NS%bx-glass-edge);
  border-radius: 0.75rem;
}
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]::after {
  display: none;
}
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]:focus-within:not(.is-disabled, :disabled), 
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]:focus-visible:not(:disabled), 
.bx-select-trigger[data-bx-surface].is-open[_ngcontent-%COMP%]:not(:disabled) {
  --%NS%bx-glass-edge: var(--%NS%bx-border-brand);
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
  --%NS%bx-glass-shadow: none;
}
.bx-select-panel[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: 0.8;
}
.bx-select-trigger[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-min-opacity: 0.45;
  --%NS%bx-glass-edge: color-mix(in srgb, var(--%NS%bx-text-danger) 40%, var(--%NS%bx-border-default));
  border-block-end-color: var(--%NS%bx-glass-edge);
  --%NS%bx-glass-shadow: 0 8px 18px -10px color-mix(in srgb, var(--%NS%bx-text-danger) 65%, transparent);
  outline-color: var(--%NS%bx-border-danger);
}
.bx-select-trigger.is-floating[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  position: static;
  transform: none;
  padding: 0.5rem 0 0 0.75rem;
  overflow-wrap: anywhere;
}
.bx-select-trigger.is-floating[_ngcontent-%COMP%]   .bx-select-value[_ngcontent-%COMP%] {
  padding-top: 0.25rem;
  min-height: 2rem;
}
.bx-select-trigger[_ngcontent-%COMP%]:not(.is-floating)   .bx-floating-label[_ngcontent-%COMP%] {
  right: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bx-select-item-inner[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {
  flex: 1 1 auto;
  min-width: 0;
  white-space: normal;
  overflow-wrap: anywhere;
}`],changeDetection:1})};var p=[`*`];var S=class r{appearance=Q9(()=>({interactive:this.variant()===`text`||!this.interactive()||this.disabled()?!1:void 0,emission:this.variant()!==`text`&&this.interactive()&&!this.disabled()?this.color()===`primary`||this.color()===`grayscale`?`var(--bx-primary)`:`var(--bx-text-${this.color()})`:void 0}));a11y=p$1(ke);isAnimated=W$1(()=>!this.a11y.isReducedMotion());variant=L$1(`text`);color=L$1(`primary`);outlined=L$1(!1);elevated=L$1(!1);disabled=L$1(!1,{transform:Pe});interactive=L$1(!0,{transform:Pe});onClick(a){this.disabled()&&(a.preventDefault(),a.stopImmediatePropagation())}static ɵfac=function(e){return new(e||r)};static ɵcmp=mt$1({type:r,selectors:[[`bx-button`],[`button`,`bx-button`,``],[`a`,`bx-button`,``]],hostVars:13,hostBindings:function(e,n){e&1&&it(`click`,function(f){return n.onClick(f)}),e&2&&(Zt$1(`disabled`,n.disabled()?!0:null)(`aria-disabled`,n.disabled())(`tabindex`,n.disabled()?`-1`:null),ZT(`bx-btn bx-btn-`+n.variant()+` bx-btn-color-`+n.color()),st(`bx-btn-is-outlined`,n.outlined())(`bx-btn-is-elevated`,n.elevated())(`bx-btn-animated`,n.isAnimated())(`bx-btn-non-interactive`,!n.interactive()))},inputs:{variant:[1,`variant`],color:[1,`color`],outlined:[1,`outlined`],elevated:[1,`elevated`],disabled:[1,`disabled`],interactive:[1,`interactive`]},ngContentSelectors:p,decls:2,vars:0,consts:[[1,`bx-btn-content-wrapper`]],template:function(e,n){e&1&&(yo(),Ic(0,`span`,0),bo(1),Mc())},styles:[`
[_nghost-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  box-sizing: border-box;
  border: 1px solid transparent;
}
.bx-btn-animated[_nghost-%COMP%] {
  transition:
    background-color 0.1s ease-in-out,
    color 0.1s ease-in-out,
    box-shadow 0.1s ease-in-out;
}
.bx-btn-non-interactive[_nghost-%COMP%] {
  cursor: default;
}
[disabled][_nghost-%COMP%], 
[aria-disabled=true][_nghost-%COMP%] {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
  box-shadow: none !important;
}
.bx-btn-color-primary[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-primary);
  --%NS%btn-theme-hover: var(--%NS%bx-primary-hover);
  --%NS%btn-theme-active: var(--%NS%bx-primary-active);
  --%NS%btn-theme-text: var(--%NS%bx-on-primary);
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-primary-subtle);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-brand);
  --%NS%btn-theme-border: var(--%NS%bx-border-brand);
}
.bx-btn-color-danger[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-bg-danger);
  --%NS%btn-theme-hover: var(--%NS%bx-bg-danger-hover);
  --%NS%btn-theme-active: var(--%NS%bx-bg-danger-active);
  --%NS%btn-theme-text: var(--%NS%bx-text-danger);
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-bg-danger-subtle);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-danger);
  --%NS%btn-theme-border: var(--%NS%bx-border-danger);
}
.bx-btn-color-success[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-bg-success);
  --%NS%btn-theme-hover: var(--%NS%bx-bg-success-hover);
  --%NS%btn-theme-active: var(--%NS%bx-bg-success-active);
  --%NS%btn-theme-text: var(--%NS%bx-text-success);
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-bg-success-subtle);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-success);
  --%NS%btn-theme-border: var(--%NS%bx-border-success);
}
.bx-btn-color-info[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-bg-info);
  --%NS%btn-theme-hover: var(--%NS%bx-bg-info-hover);
  --%NS%btn-theme-active: var(--%NS%bx-bg-info-active);
  --%NS%btn-theme-text: var(--%NS%bx-text-info);
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-bg-info-subtle);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-info);
  --%NS%btn-theme-border: var(--%NS%bx-border-info);
}
.bx-btn-color-warn[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-bg-warn);
  --%NS%btn-theme-hover: var(--%NS%bx-bg-warn-hover);
  --%NS%btn-theme-active: var(--%NS%bx-bg-warn-active);
  --%NS%btn-theme-text: var(--%NS%bx-text-warn);
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-bg-warn-subtle);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-warn);
  --%NS%btn-theme-border: var(--%NS%bx-border-warn);
}
.bx-btn-color-grayscale[_nghost-%COMP%] {
  --%NS%btn-theme-base: var(--%NS%bx-bg-element);
  --%NS%btn-theme-hover: var(--%NS%bx-bg-element-hover);
  --%NS%btn-theme-active: var(--%NS%bx-bg-element-active);
  --%NS%btn-theme-text: var(--%NS%bx-text-primary);
  --%NS%btn-theme-tonal-bg: var(--%NS%bx-bg-surface-alt);
  --%NS%btn-theme-tonal-text: var(--%NS%bx-text-primary);
  --%NS%btn-theme-border: var(--%NS%bx-border-strong);
}
.bx-btn-text[_nghost-%COMP%], 
.bx-btn-filled[_nghost-%COMP%], 
.bx-btn-tonal[_nghost-%COMP%] {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
.bx-btn-icon[_nghost-%COMP%], 
.bx-btn-fab[_nghost-%COMP%], 
.bx-btn-mini-fab[_nghost-%COMP%] {
  padding: 0;
  border-radius: 9999px;
}
.bx-btn-icon[_nghost-%COMP%]   .bx-btn-content-wrapper[_ngcontent-%COMP%], 
.bx-btn-fab[_nghost-%COMP%]   .bx-btn-content-wrapper[_ngcontent-%COMP%], 
.bx-btn-mini-fab[_nghost-%COMP%]   .bx-btn-content-wrapper[_ngcontent-%COMP%] {
  gap: 0;
}
.bx-btn-icon[_nghost-%COMP%], 
.bx-btn-mini-fab[_nghost-%COMP%] {
  width: 2.5rem;
  height: 2.5rem;
}
.bx-btn-fab[_nghost-%COMP%] {
  width: 3.5rem;
  height: 3.5rem;
}
.bx-btn-extended-fab[_nghost-%COMP%] {
  padding: 0 1.5rem;
  height: 3.5rem;
  border-radius: 9999px;
}
.bx-btn-is-outlined[_nghost-%COMP%] {
  border-color: var(--%NS%btn-theme-border);
}
.bx-btn-is-elevated[_nghost-%COMP%] {
  box-shadow: 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12);
}
.bx-btn-is-elevated[_nghost-%COMP%]:not(.bx-btn-non-interactive):active {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
}
.bx-btn-content-wrapper[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  color: inherit;
}
[data-bx-surface][_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]) {
  border-radius: var(--%NS%bx-glass-radius, 0.5rem);
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-text: var(--%NS%btn-theme-tonal-text, var(--%NS%bx-text-primary));
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-min-opacity: 0.35;
  border-color: var(--%NS%bx-glass-edge);
  --%NS%bx-glass-shadow: 0 2px 4px rgb(0 0 0 / 8%);
  color: var(--%NS%bx-glass-text);
  background: var(--%NS%bx-glass-surface);
}
@supports (background: color-mix(in srgb, white, transparent)) {
  [data-bx-surface][_nghost-%COMP%], 
   [_nghost-%COMP%]:not([data-bx-surface]) {
    background: color-mix(in srgb, var(--%NS%bx-glass-surface) calc(max(0.35, var(--%NS%bx-glass-opacity, 0.24)) * 100%), transparent);
  }
}
[data-bx-surface].bx-btn-is-elevated[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-is-elevated {
  --%NS%bx-glass-shadow: 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12);
}
[data-bx-surface].bx-btn-icon[_nghost-%COMP%], 
[data-bx-surface].bx-btn-fab[_nghost-%COMP%], 
[data-bx-surface].bx-btn-mini-fab[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-icon, 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-fab, 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-mini-fab {
  border-radius: var(--%NS%bx-glass-radius, 9999px);
}
[data-bx-surface].bx-btn-extended-fab[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-extended-fab {
  border-radius: var(--%NS%bx-glass-radius, 9999px);
}
[data-bx-surface].bx-btn-color-danger[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-color-danger {
  --%NS%bx-glass-text: var(--%NS%bx-text-danger);
}
[data-bx-surface].bx-btn-color-success[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-color-success {
  --%NS%bx-glass-text: var(--%NS%bx-text-success);
}
[data-bx-surface].bx-btn-color-info[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-color-info {
  --%NS%bx-glass-text: var(--%NS%bx-text-info);
}
[data-bx-surface].bx-btn-color-warn[_nghost-%COMP%], 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-color-warn {
  --%NS%bx-glass-text: var(--%NS%bx-text-warn);
}
[data-bx-surface][_nghost-%COMP%]:focus-visible, 
[_nghost-%COMP%]:not([data-bx-surface]):focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand, currentColor);
  outline-offset: -2px;
}
[data-bx-surface].bx-btn-tonal[_nghost-%COMP%]:not(.bx-btn-non-interactive):hover, 
[data-bx-surface].bx-btn-tonal[_nghost-%COMP%]:not(.bx-btn-non-interactive):active, 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-tonal:not(.bx-btn-non-interactive):hover, 
[_nghost-%COMP%]:not([data-bx-surface]).bx-btn-tonal:not(.bx-btn-non-interactive):active {
  opacity: 1;
}
[data-bx-surface][_nghost-%COMP%]:hover:not(.bx-btn-non-interactive) {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral-hover);
  --%NS%bx-glass-edge: var(--%NS%bx-border-strong);
}
[data-bx-surface][_nghost-%COMP%]:active:not(.bx-btn-non-interactive) {
  --%NS%bx-glass-shadow: inset 0 1px 3px rgb(0 0 0 / 12%);
}
[_nghost-%COMP%]:is([aria-pressed=true], [aria-selected=true], [aria-expanded=true], [aria-current]:not([aria-current=false], [aria-current=""])):not(.bx-btn-non-interactive, [aria-disabled=true]) {
  --%NS%bx-glass-surface: var(--%NS%btn-selected-surface, var(--%NS%bx-bg-neutral-active));
}
.bx-btn-tonal[_nghost-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%btn-theme-tonal-bg);
  --%NS%btn-selected-surface: var(--%NS%btn-theme-tonal-bg);
}
.bx-btn-tonal[_nghost-%COMP%]:hover:not(.bx-btn-non-interactive, [aria-disabled=true]), 
.bx-btn-tonal[_nghost-%COMP%]:active:not(.bx-btn-non-interactive, [aria-disabled=true]) {
  --%NS%bx-glass-surface: var(--%NS%btn-theme-tonal-bg);
}
[_nghost-%COMP%]:is(.bx-btn-filled, .bx-btn-fab, .bx-btn-mini-fab, .bx-btn-extended-fab):not(.bx-btn-is-outlined) {
  --%NS%bx-glass-surface: var(--%NS%btn-theme-base);
  --%NS%btn-selected-surface: var(--%NS%btn-theme-base);
  --%NS%bx-glass-text: var(--%NS%btn-theme-text);
  --%NS%bx-glass-min-opacity: 0.88;
}
[_nghost-%COMP%]:is(.bx-btn-filled, .bx-btn-fab, .bx-btn-mini-fab, .bx-btn-extended-fab):not(.bx-btn-is-outlined):hover:not(.bx-btn-non-interactive, [aria-disabled=true]) {
  --%NS%bx-glass-surface: var(--%NS%btn-theme-hover);
  --%NS%btn-selected-surface: var(--%NS%btn-theme-hover);
}
[_nghost-%COMP%]:is(.bx-btn-filled, .bx-btn-fab, .bx-btn-mini-fab, .bx-btn-extended-fab):not(.bx-btn-is-outlined):active:not(.bx-btn-non-interactive, [aria-disabled=true]) {
  --%NS%bx-glass-surface: var(--%NS%btn-theme-active);
  --%NS%btn-selected-surface: var(--%NS%btn-theme-active);
}
.bx-btn-text[_nghost-%COMP%] {
  background: transparent !important;
  border: 0;
  box-shadow: none !important;
  -webkit-backdrop-filter: none !important;
  backdrop-filter: none !important;
  --%NS%bx-glass-decoration-opacity: 0;
  --%NS%bx-glass-rim-visibility: 0;
}
.bx-btn-text[_nghost-%COMP%]:hover:not(.bx-btn-non-interactive, [aria-disabled=true]) {
  text-decoration: underline;
  text-underline-offset: 0.2em;
}`]})};var U=Oe$1({sections:[{id:`Start`},{id:`Forms`},{id:`Primitives`},{id:`Navigation`},{id:`Icons`},{id:`Modals`},{id:`Notifications`},{id:`Tools`}]}),{withNav:x}=U,Ct=e.map((e,n)=>x({path:e.id,loadComponent:()=>import(`./chunk-pilb2tIE.js`).then(t=>t.ComponentDemo),title:`${e.title} \xB7 Blocks`,data:{componentId:e.id}},{label:e.title,breadcrumb:e.title,section:e.group,menu:!0,order:n})),ie=[{path:``,pathMatch:`full`,redirectTo:`home`},x({path:`home`,loadComponent:()=>import(`./chunk-o7jZWv9B.js`).then(e=>e.Home),title:`Blocks`},{label:`Overview`,breadcrumb:`Home`,section:`Start`,menu:!0,root:!0,order:1}),x({path:`appearance`,loadComponent:()=>import(`./chunk-DFkQjSWa.js`).then(e=>e.Appearance),title:`Appearance · Blocks`},{label:`Appearance`,breadcrumb:`Appearance`,section:`Start`,menu:!0,order:2}),x({path:`components`,title:`Components · Blocks`,children:[{path:``,pathMatch:`full`,loadComponent:()=>import(`./chunk-B7h7LyLb.js`).then(e=>e.ComponentIndex)},...Ct]},{label:`All components`,breadcrumb:`Components`,section:`Start`,menu:!0,order:3}),x({path:`icon-catalog`,loadComponent:()=>import(`./chunk-DfTCOnw6.js`).then(e=>e.IconCatalog),title:`Icon catalog · Blocks`},{label:`Icon catalog`,breadcrumb:`Icon catalog`,section:`Tools`,menu:!0,order:4}),x({path:`modal`,loadComponent:()=>import(`./chunk-v8ljoHwR.js`).then(e=>e.Modal),title:`Modal configurator · Blocks`},{label:`Modal configurator`,breadcrumb:`Modal configurator`,section:`Tools`,menu:!0,order:5}),x({path:`toastr`,loadComponent:()=>import(`./chunk-nzxHqShU.js`).then(e=>e.Toastr),title:`Toast configurator · Blocks`},{label:`Toast configurator`,breadcrumb:`Toast configurator`,section:`Tools`,menu:!0,order:6}),{path:`glass`,pathMatch:`full`,redirectTo:`appearance`},{path:`**`,redirectTo:`components`}];(class e{static ɵfac=function(t){return new(t||e)};static ɵmod=Oe$2({type:e});static ɵinj=xe$2({imports:[d0.forRoot(ie),d0]})});var re={providers:[MS(),Ck(),_c(()=>{let e=p$1(q$2),n=null;try{n=e.defaultView?.localStorage.getItem(`theme-palette`)??null}catch{}let t=p$1(Dr);t.palettes.some(i=>i.id===n)||t.setPalette(`orange`)}),c0(ie,u0({scrollPositionRestoration:`enabled`,anchorScrolling:`enabled`})),we(U.config),rt({coreLibraryLoader:()=>import(`./chunk-CNLY_5RV.js`),languages:{typescript:()=>import(`./chunk-Da6TFjtL.js`),scss:()=>import(`./chunk--Sjxt33j.js`),xml:()=>import(`./chunk-Bs3bRvME.js`)}})]};var lt=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵcmp=mt$1({type:e,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return e})();var dt=new Set;var k;var Mt=(()=>{class e{_platform=p$1(xi);_nonce=p$1(jl,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):kt}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&xt(t,this._nonce),this._matchMedia(t)}static ɵfac=function(i){return new(i||e)};static ɵprov=$({token:e,factory:e.ɵfac})}return e})();function xt(e,n){if(!dt.has(e))try{k||(k=document.createElement(`style`),n&&k.setAttribute(`nonce`,n),k.setAttribute(`type`,`text/css`),document.head.appendChild(k)),k.sheet&&(k.sheet.insertRule(`@media ${e.replace(/[{}]/g,``)} {body{ }}`,0),dt.add(e))}catch(t){console.error(t)}}function kt(e){return{matches:e===`all`||e===``,media:e,addListener:()=>{},removeListener:()=>{}}}var mt=(()=>{class e{_mediaMatcher=p$1(Mt);_zone=p$1(z$1);_queries=new Map;_destroySubject=new ee$2;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return ut(ng(t)).some(r=>this._registerQuery(r).mql.matches)}observe(t){let r=ut(ng(t)).map(p=>this._registerQuery(p).observable),c=ol(r);return c=zi(c.pipe(Sn(1)),c.pipe(cv(1),Sd(0))),c.pipe(fe$1(p=>{let _={matches:!1,breakpoints:{}};return p.forEach(({matches:R,query:yt})=>{_.matches=_.matches||R,_.breakpoints[yt]=R}),_}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),c={observable:new j$2(p=>{let _=R=>this._zone.run(()=>p.next(R));return i.addListener(_),()=>{i.removeListener(_)}}).pipe(cl(i),fe$1(({matches:p})=>({query:t,matches:p})),Qn(this._destroySubject)),mql:i};return this._queries.set(t,c),c}static ɵfac=function(i){return new(i||e)};static ɵprov=$({token:e,factory:e.ɵfac})}return e})();function ut(e){return e.map(n=>n.split(`,`)).reduce((n,t)=>n.concat(t)).map(n=>n.trim())}var Ot=(()=>{class e{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(i){return new(i||e)};static ɵprov=$({token:e,factory:e.ɵfac})}return e})();var pt=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵmod=Oe$2({type:e});static ɵinj=xe$2({providers:[Ot]})}return e})();var St=(()=>{class e{_platform=p$1(xi);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return At(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let i=Tt(Ft(t));if(i&&(ht(i)===-1||!this.isVisible(i)))return!1;let r=t.nodeName.toLowerCase(),c=ht(t);return t.hasAttribute(`contenteditable`)?c!==-1:r===`iframe`||r===`object`||this._platform.WEBKIT&&this._platform.IOS&&!Pt(t)?!1:r===`audio`?t.hasAttribute(`controls`)?c!==-1:!1:r===`video`?c===-1?!1:c!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,i){return Lt(t)&&!this.isDisabled(t)&&(i?.ignoreInert||!t.closest?.(`[inert]`))&&(i?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(i){return new(i||e)};static ɵprov=$({token:e,factory:e.ɵfac})}return e})();function Tt(e){try{return e.frameElement}catch{return null}}function At(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects==`function`&&e.getClientRects().length)}function Et(e){let n=e.nodeName.toLowerCase();return n===`input`||n===`select`||n===`button`||n===`textarea`}function Nt(e){return It(e)&&e.type==`hidden`}function wt(e){return Dt(e)&&e.hasAttribute(`href`)}function It(e){return e.nodeName.toLowerCase()==`input`}function Dt(e){return e.nodeName.toLowerCase()==`a`}function gt(e){if(!e.hasAttribute(`tabindex`)||e.tabIndex===void 0)return!1;let n=e.getAttribute(`tabindex`);return!!(n&&!isNaN(parseInt(n,10)))}function ht(e){if(!gt(e))return null;let n=parseInt(e.getAttribute(`tabindex`)||``,10);return isNaN(n)?-1:n}function Pt(e){let n=e.nodeName.toLowerCase(),t=n===`input`&&e.type;return t===`text`||t===`password`||n===`select`||n===`textarea`}function Lt(e){return Nt(e)?!1:Et(e)||wt(e)||e.hasAttribute(`contenteditable`)||gt(e)}function Ft(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var ae=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,t,i,r,c=!1,p){this._element=n,this._checker=t,this._ngZone=i,this._document=r,this._injector=p,c||this.attachAnchors()}destroy(){let n=this._startAnchor,t=this._endAnchor;n&&(n.removeEventListener(`focus`,this.startAnchorListener),n.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let t=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let i=this._getFirstTabbableElement(t);return i?.focus(n),!!i}return t.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let t=this._getRegionBoundary(`start`);return t&&t.focus(n),!!t}focusLastTabbableElement(n){let t=this._getRegionBoundary(`end`);return t&&t.focus(n),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let i=0;i<t.length;i++){let r=t[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let i=t.length-1;i>=0;i--){let r=t[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add(`cdk-visually-hidden`),n.classList.add(`cdk-focus-trap-anchor`),n.setAttribute(`aria-hidden`,`true`),n}_toggleAnchorTabIndex(n,t){n?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){Yt$1(n,{injector:this._injector})}};var _t=(()=>{class e{_checker=p$1(St);_ngZone=p$1(z$1);_document=p$1(q$2);_injector=p$1(Q$1);constructor(){p$1(tg).load(lt)}create(t,i=!1){return new ae(t,this._checker,this._ngZone,this._document,i,this._injector)}static ɵfac=function(i){return new(i||e)};static ɵprov=$({token:e,factory:e.ɵfac})}return e})();var ce=(()=>{class e{_elementRef=p$1(re$2);_focusTrapFactory=p$1(_t);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(t){this.focusTrap&&(this.focusTrap.enabled=t)}autoCapture=!1;constructor(){p$1(xi).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(t){let i=t.autoCapture;i&&!i.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=V5(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function(i){return new(i||e)};static ɵdir=G({type:e,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,Pe],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,Pe]},exportAs:[`cdkTrapFocus`],features:[Ye]})}return e})();var g=(function(e){return e[e.NONE=0]=`NONE`,e[e.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,e[e.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,e})(g||{});var bt=`cdk-high-contrast-black-on-white`;var ft=`cdk-high-contrast-white-on-black`;var se=`cdk-high-contrast-active`;var vt=(()=>{class e{_platform=p$1(xi);_hasCheckedHighContrastMode=!1;_document=p$1(q$2);_breakpointSubscription;constructor(){this._breakpointSubscription=p$1(mt).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return g.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(t):null,c=(r&&r.backgroundColor||``).replace(/ /g,``);switch(t.remove(),c){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return g.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return g.BLACK_ON_WHITE}return g.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(se,bt,ft),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===g.BLACK_ON_WHITE?t.add(se,bt):i===g.WHITE_ON_BLACK&&t.add(se,ft)}}static ɵfac=function(i){return new(i||e)};static ɵprov=$({token:e,factory:e.ɵfac})}return e})();var le=(()=>{class e{constructor(){p$1(vt)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(i){return new(i||e)};static ɵmod=Oe$2({type:e});static ɵinj=xe$2({imports:[pt]})}return e})();var Bt=[`menuToggle`];var Vt=()=>({exact:!0});var jt=(e,n)=>n.id;var zt=(e,n)=>n.route;function $t(e,n){if(e&1){let t=xT();It$1(0,`header`,8)(1,`a`,9),it(`click`,function(){Hv(t);let r=ur();return Uv(r.closeMobileMenu())}),Co(2),jt$1(),It$1(3,`button`,10,0),it(`click`,function(){Hv(t);let r=ur();return Uv(r.toggleMobileMenu())}),It$1(5,`span`,11),fi(6,`span`,12)(7,`span`,12)(8,`span`,12),jt$1()()(),It$1(9,`button`,13),it(`click`,function(){Hv(t);let r=ur();return Uv(r.closeMobileMenu())}),jt$1()}if(e&2){let t=ur();Vt$1(2),Rc(t.title()),Vt$1(),st(`is-open`,t.isHamburgerMenuOpen()),Zt$1(`aria-expanded`,t.isHamburgerMenuOpen())(`aria-label`,t.isHamburgerMenuOpen()?`Close navigation`:`Open navigation`),Vt$1(6),st(`navigation-scrim-open`,t.isHamburgerMenuOpen()),Zt$1(`aria-hidden`,t.isHamburgerMenuOpen()?null:`true`)(`inert`,t.isHamburgerMenuOpen()?null:``)}}function Wt(e,n){if(e&1&&(It$1(0,`div`,2)(1,`a`,14),Co(2),jt$1(),It$1(3,`span`),Co(4,`Component library`),jt$1()()),e&2){let t=ur();Vt$1(2),Rc(t.title())}}function Kt(e,n){if(e&1){let t=xT();It$1(0,`a`,16),it(`click`,function(){Hv(t);let r=ur(2);return Uv(r.closeMobileMenu())}),Co(1),jt$1()}if(e&2){let t=n.$implicit;vo(`routerLink`,t.route)(`routerLinkActiveOptions`,pk(3,Vt)),Vt$1(),hi(` `,t.label,` `)}}function Ut(e,n){if(e&1&&(It$1(0,`section`,6)(1,`h2`),Co(2),jt$1(),bp(3,Kt,2,4,`a`,15,zt),jt$1()),e&2){let t=n.$implicit;Zt$1(`aria-label`,t.title),Vt$1(2),Rc(t.title),Vt$1(),Cp(t.items)}}function Zt(e,n){e&1&&(It$1(0,`p`,7),Co(1,`No matching pages.`),jt$1())}var Z=class e{dimensions=p$1(Bu);navigation=p$1(_$1);isHamburgerMenuOpen=S$1(!1);isHamburgerMenu=W$1(()=>this.dimensions.dimensions().width<=this.dimensions.breakpoints.lg);query=S$1(``);groups=W$1(()=>{let n=this.query().trim().toLowerCase();return this.navigation.menuGroups().map(t=>s(r({},t),{items:t.items.filter(i=>!n||`${i.label} ${t.title}`.toLowerCase().includes(n))})).filter(t=>t.items.length>0)});title=L$1.required();scrollLock=p$1(DE);scrollLockId=JE();menuToggle=Vz(`menuToggle`,{read:re$2});constructor(){Te(()=>{this.isHamburgerMenuOpen()?this.scrollLock.disableScroll(this.scrollLockId,{handleTouchInput:!1}):this.scrollLock.enableScroll(this.scrollLockId)}),p$1(J$3).onDestroy(()=>this.scrollLock.enableScroll(this.scrollLockId)),Te(()=>{this.isHamburgerMenu()||this.isHamburgerMenuOpen.set(!1)})}toggleMobileMenu(){this.menuToggle()?.nativeElement.focus({preventScroll:!0}),this.isHamburgerMenuOpen.update(n=>!n)}closeMobileMenu(){this.isHamburgerMenuOpen.set(!1)}static ɵfac=function(t){return new(t||e)};static ɵcmp=mt$1({type:e,selectors:[[`app-sidenav`]],viewQuery:function(t,i){t&1&&GC(i.menuToggle,Bt,5,re$2),t&2&&NT()},inputs:{title:[1,`title`]},decls:9,vars:12,consts:[[`menuToggle`,``],[`bxSurface`,``,`id`,`component-navigation`,`tabindex`,`-1`,1,`sidebar`,3,`keydown.escape`,`cdkTrapFocus`,`cdkTrapFocusAutoCapture`],[1,`sidebar-header`],[`placeholder`,`Search pages...`,1,`navigation-search`,3,`ngModelChange`,`ngModel`],[1,`sidebar-scroll`],[`aria-label`,`Component documentation`],[1,`navigation-group`],[1,`empty-navigation`],[`bxSurface`,``,1,`mobile-header`],[`routerLink`,`/home`,1,`brand`,3,`click`],[`type`,`button`,`aria-controls`,`component-navigation`,1,`menu-toggle`,3,`click`],[`aria-hidden`,`true`,1,`hamburger-icon`],[1,`hamburger-line`],[`type`,`button`,`aria-label`,`Close navigation`,`tabindex`,`-1`,1,`navigation-scrim`,3,`click`],[`routerLink`,`/home`,1,`brand`],[`bxSurface`,``,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,3,`routerLink`,`routerLinkActiveOptions`],[`bxSurface`,``,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,3,`click`,`routerLink`,`routerLinkActiveOptions`]],template:function(t,i){t&1&&(lr(0,$t,10,9),It$1(1,`aside`,1),it(`keydown.escape`,function(){return i.closeMobileMenu()}),lr(2,Wt,5,1,`div`,2),It$1(3,`bx-search-input`,3),gx(),it(`ngModelChange`,function(c){return i.query.set(c)}),jt$1(),It$1(4,`div`,4)(5,`nav`,5),bp(6,Ut,5,2,`section`,6,jt,!1,Zt,2,0,`p`,7),jt$1()()()),t&2&&(cr(i.isHamburgerMenu()?0:-1),Vt$1(),st(`mobile-sidebar`,i.isHamburgerMenu())(`mobile-sidebar-open`,!i.isHamburgerMenu()||i.isHamburgerMenuOpen()),vo(`cdkTrapFocus`,i.isHamburgerMenu()&&i.isHamburgerMenuOpen())(`cdkTrapFocusAutoCapture`,i.isHamburgerMenu()&&i.isHamburgerMenuOpen()),Zt$1(`aria-hidden`,i.isHamburgerMenu()&&!i.isHamburgerMenuOpen()?`true`:null)(`inert`,i.isHamburgerMenu()&&!i.isHamburgerMenuOpen()?``:null),Vt$1(),cr(i.isHamburgerMenu()?-1:2),Vt$1(),vo(`ngModel`,i.query()),yx(),Vt$1(3),Cp(i.groups()))},dependencies:[le,ce,s5,n5,sN,te$1,Eu,a0,Mr],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.sidebar[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0 auto auto 0;
  width: 240px;
  height: 100vh;
  height: 100dvh;
  min-height: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  --%NS%bx-glass-min-opacity: 0.82;
  background: var(--%NS%bx-bg-surface);
  border-right: 1px solid var(--%NS%bx-border-default);
  padding: 1.25rem 1rem;
  z-index: 210;
}
.sidebar-header[_ngcontent-%COMP%] {
  display: flex;
  flex: none;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1.5rem;
}
.brand[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--%NS%bx-text-primary);
  text-decoration: none;
}
.sidebar-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
}
.navigation-search[_ngcontent-%COMP%] {
  flex: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}
.search-label[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: var(--%NS%bx-text-secondary);
}
input[_ngcontent-%COMP%] {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: 0.5rem 0.75rem;
  font: inherit;
  font-size: 0.8125rem;
  background: var(--%NS%bx-bg-canvas);
  color: var(--%NS%bx-text-primary);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
}
.navigation-group[_ngcontent-%COMP%] {
  margin-bottom: 1.25rem;
}
h2[_ngcontent-%COMP%] {
  font-size: 0.6875rem;
  letter-spacing: 0.05em;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--%NS%bx-text-secondary);
  margin: 0 0 0.5rem;
  padding: 0 0.75rem;
}
nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.8125rem;
  line-height: 1.45;
  text-decoration: none;
  margin: 2px 0;
}
nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  color: var(--%NS%bx-text-primary);
  --%NS%bx-glass-opacity: 0.5;
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral-hover);
}
a[_ngcontent-%COMP%]:focus-visible, 
button[_ngcontent-%COMP%]:focus-visible, 
input[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.empty-navigation[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-secondary);
}
.mobile-header[_ngcontent-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--%NS%mobile-header-height);
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--%NS%bx-bg-surface);
  border-bottom: 1px solid var(--%NS%bx-border-default);
  z-index: 220;
}
.menu-toggle[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 2.5rem;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 0;
  border-radius: 0.5rem;
  background: none;
  color: var(--%NS%bx-text-primary);
  cursor: pointer;
}
.hamburger-icon[_ngcontent-%COMP%] {
  position: relative;
  display: block;
  flex: 0 0 1.65rem;
  width: 1.65rem;
  height: 1rem;
}
.hamburger-line[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 0.2rem;
  border-radius: 9999px;
  background: currentcolor;
  transform: translateY(-50%);
  transition: transform 220ms ease, opacity 160ms ease;
}
.hamburger-line[_ngcontent-%COMP%]:first-child {
  transform: translateY(calc(-50% - 0.4rem));
}
.hamburger-line[_ngcontent-%COMP%]:last-child {
  transform: translateY(calc(-50% + 0.4rem));
}
.menu-toggle.is-open[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%]:first-child {
  transform: translateY(-50%) rotate(45deg);
}
.menu-toggle.is-open[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%]:nth-child(2) {
  opacity: 0;
}
.menu-toggle.is-open[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%]:last-child {
  transform: translateY(-50%) rotate(-45deg);
}
.navigation-scrim[_ngcontent-%COMP%] {
  position: fixed;
  inset: var(--%NS%mobile-header-height) 0 0;
  border: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 211;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 220ms ease, visibility 0s linear 220ms;
}
.navigation-scrim-open[_ngcontent-%COMP%] {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition-delay: 0s;
}
.mobile-sidebar[_ngcontent-%COMP%] {
  top: var(--%NS%mobile-header-height);
  height: calc(100vh - var(--%NS%mobile-header-height));
  height: calc(100dvh - var(--%NS%mobile-header-height));
  z-index: 212;
  width: min(320px, 85vw);
  transform: translateX(-100%);
  visibility: hidden;
  pointer-events: none;
  transition: transform 300ms ease, visibility 0s linear 300ms;
}
.mobile-sidebar-open[_ngcontent-%COMP%] {
  transform: translateX(0);
  visibility: visible;
  pointer-events: auto;
  transition-delay: 0s;
}
@media (prefers-reduced-motion: reduce) {
  .hamburger-line[_ngcontent-%COMP%], 
   .navigation-scrim[_ngcontent-%COMP%], 
   .mobile-sidebar[_ngcontent-%COMP%] {
    transition: none;
  }
}
.sidebar[_ngcontent-%COMP%], 
.mobile-header[_ngcontent-%COMP%] {
  border-radius: 0;
  border-color: var(--%NS%bx-border-default);
}
.sidebar-scroll[_ngcontent-%COMP%] {
  min-height: 0;
  min-width: 0;
  flex: 1 1 0;
  overflow: hidden auto;
  overscroll-behavior: contain;
  padding: 3px 0.75rem 3px 3px;
}
nav[_ngcontent-%COMP%]   a[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: 0;
  --%NS%bx-glass-opacity: 0.12;
  --%NS%bx-glass-shadow: none;
  border: 1px solid transparent;
}
nav[_ngcontent-%COMP%]   a[data-bx-surface].active[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-primary);
  --%NS%bx-glass-text: var(--%NS%bx-on-primary);
  --%NS%bx-glass-min-opacity: 0.88;
  color: var(--%NS%bx-on-primary);
  font-weight: 600;
  border-color: var(--%NS%bx-border-default);
}
nav[_ngcontent-%COMP%]   a[data-bx-surface].active[_ngcontent-%COMP%]:hover {
  --%NS%bx-glass-surface: var(--%NS%bx-primary-hover);
}
nav[_ngcontent-%COMP%]   a[data-bx-surface].active[_ngcontent-%COMP%]:active {
  --%NS%bx-glass-surface: var(--%NS%bx-primary-active);
}
.mobile-header[_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: 0.85;
}
nav[_ngcontent-%COMP%]   a[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-decoration-opacity: 0.25;
}
nav[_ngcontent-%COMP%]   a[data-bx-surface][_ngcontent-%COMP%]:hover, 
nav[_ngcontent-%COMP%]   a[data-bx-surface].active[_ngcontent-%COMP%] {
  --%NS%bx-glass-decoration-opacity: 0.8;
}`]})};var qt=(e,n)=>n.id;function Gt(e,n){if(e&1){let t=xT();It$1(0,`bx-menu-item`,16),it(`action`,function(){let r=Hv(t).$implicit,c=ur(2);return Uv(c.theme.setPalette(r.id))}),jt$1()}if(e&2){let t=n.$implicit,i=ur(2);vo(`label`,t.label)(`icon`,i.selectedThemeId()===t.id?`check`:void 0)}}function Yt(e,n){if(e&1&&(It$1(0,`bx-menu`),bp(1,Gt,1,2,`bx-menu-item`,15,qt),jt$1()),e&2){let t=ur();Vt$1(),Cp(t.availableThemes)}}var q=class e{document=p$1(q$2);highlight=p$1(V);theme=p$1(Dr);availableThemes=this.theme.palettes;selectedThemeId=this.theme.palette;selectedThemeLabel=this.theme.paletteLabel;isDarkMode=W$1(()=>this.theme.activeTheme()===`dark`);constructor(){Te(()=>{let n=this.isDarkMode();this.document.documentElement.setAttribute(`data-theme`,n?`dark`:`light`),this.document.defaultView&&this.highlight.setTheme(n?`assets/styles/vs2015.css`:`assets/styles/github.css`)})}toggleTheme(){this.theme.setApplicationTheme(this.isDarkMode()?`light`:`dark`)}static ɵfac=function(t){return new(t||e)};static ɵcmp=mt$1({type:e,selectors:[[`app-root`]],decls:22,vars:4,consts:[[`themeMenu`,``],[`href`,`#main-content`,1,`skip-link`],[1,`app-container`],[`title`,`Blocks`],[1,`app-main`],[`data-bx-light-scope`,``,`bxSurface`,``,`aria-label`,`Playground appearance`,1,`app-toolbar`],[1,`toolbar-label`],[1,`toolbar-actions`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`routerLink`,`/appearance`,`aria-label`,`Configure appearance for the whole playground`,1,`appearance-button`],[`name`,`sliders-horizontal`,`size`,`20`],[`bx-button`,``,`type`,`button`,`bxTransition`,`fade`,`placement`,`bottom`,`variant`,`tonal`,`color`,`grayscale`,`aria-label`,`Choose theme palette`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`theme-mode-toggle`,3,`click`],[`size`,`20`,3,`name`],[`id`,`main-content`,`tabindex`,`-1`,1,`app-content-container`],[3,`label`,`icon`],[3,`action`,`label`,`icon`]],template:function(t,i){if(t&1&&(It$1(0,`a`,1),Co(1,`Skip to content`),jt$1(),It$1(2,`div`,2),fi(3,`app-sidenav`,3),It$1(4,`div`,4)(5,`header`,5)(6,`span`,6),Co(7,`Component playground`),jt$1(),It$1(8,`div`,7)(9,`a`,8),fi(10,`bx-icon`,9),It$1(11,`span`),Co(12,`Appearance`),jt$1()(),It$1(13,`button`,10),Co(14),fi(15,`bx-icon`,11),jt$1(),It$1(16,`button`,12),it(`click`,function(){return i.toggleTheme()}),fi(17,`bx-icon`,13),jt$1()()(),It$1(18,`main`,14),fi(19,`router-outlet`),jt$1()()(),jC(20,Yt,3,0,`ng-template`,null,0,bk)),t&2){let r=OT(21);Vt$1(13),vo(`bxDropdown`,r),Vt$1(),Rc(i.selectedThemeLabel()),Vt$1(2),Zt$1(`aria-label`,i.isDarkMode()?`Switch to light theme`:`Switch to dark theme`),Vt$1(),vo(`name`,i.isDarkMode()?`sun`:`moon`)}},dependencies:[wm,Eu,Z,S,td,i_,o_,a_,Mr],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-height: 100dvh;
}
.app-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  min-height: 100dvh;
}
app-sidenav[_ngcontent-%COMP%] {
  flex: 0 0 15rem;
  position: sticky;
  top: 0;
  z-index: 300;
}
.app-main[_ngcontent-%COMP%] {
  min-width: 0;
  flex: 1;
}
.app-toolbar[_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: 0.72;
  min-height: 4rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 200;
  border-radius: 0;
  border-bottom: 1px solid var(--%NS%bx-border-default);
}
.toolbar-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-secondary);
}
.toolbar-actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.toolbar-actions[_ngcontent-%COMP%]    > .theme-mode-toggle[_ngcontent-%COMP%] {
  padding: 0;
  width: 2.5rem;
  height: 2.5rem;
  --%NS%bx-glass-radius: 9999px;
}
.app-content-container[_ngcontent-%COMP%] {
  padding: clamp(1rem, 3vw, 2.5rem);
  outline: none;
}
.skip-link[_ngcontent-%COMP%] {
  position: fixed;
  top: -5rem;
  left: 1rem;
  z-index: 10000;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: var(--%NS%bx-bg-surface);
  color: var(--%NS%bx-text-primary);
  box-shadow: 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12);
}
.skip-link[_ngcontent-%COMP%]:focus {
  top: 1rem;
}
@media (max-width: 1024px) {
  app-sidenav[_ngcontent-%COMP%] {
    flex-basis: 0;
    min-width: 0;
    width: 0;
  }
  .app-main[_ngcontent-%COMP%] {
    width: 100%;
    padding-top: var(--%NS%mobile-header-height);
  }
  .app-toolbar[_ngcontent-%COMP%] {
    top: var(--%NS%mobile-header-height);
    min-height: 3.75rem;
    padding-inline: 1rem;
  }
  .toolbar-label[_ngcontent-%COMP%] {
    display: none;
  }
  .toolbar-actions[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: flex-end;
  }
}
@media (max-width: 640px) {
  .toolbar-actions[_ngcontent-%COMP%] {
    gap: 0.25rem;
  }
  .toolbar-actions[_ngcontent-%COMP%]    > .appearance-button[_ngcontent-%COMP%] {
    flex: 0 0 2.5rem;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
  }
  .toolbar-actions[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
    display: none;
  }
}`]})};wA(q,s(r({},re),{providers:[Ck(),...re.providers]})).catch(e=>console.error(e));export{ht$1 as a,K$1 as c,h$1 as d,te$1 as f,j as i,Z$1 as l,le$1 as n,e as o,X as p,L as r,J$1 as s,S as t,O as u};