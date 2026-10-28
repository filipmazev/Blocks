import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{$ as Pe,$n as uM,$t as fe$1,At as _d,Bn as qe,Bt as c0,C as De,Cn as lr,Ct as Ye,D as Dr,Dn as nd,Dt as _0,Et as Zt,F as Id,Fn as p$1,H as L$1,I as Ii,It as a_,J as Mt$1,Jn as sl,Jt as ed,K as Mc,Kt as eZ,L as It$1,Ln as pe$3,Lt as an,M as GC,Mn as o_,Mt as _r,N as Hu,Nn as ot,Nt as _u,O as EA,On as ng,Ot as _N,P as Hz,Q as PT,R as J$4,Rt as at,S as Cx,Sn as ll,Sr as z$1,St as Xp,T as Dm,U as LT,Un as rg,Ut as cr,V as Kt$1,W as Le,Wn as rt$1,Wt as d0,X as O_,Xn as td,Xt as ey,Y as Nc,Yt as ee$2,Z as Oe$2,Zn as tn$1,Zt as f0,_ as Bz,_n as kT,_r as xi,a as $o,an as gt$1,at as SN,b as Co,bn as lN,br as yo,bt as WC,c as $z,cn as hi,ct as Sn,d as BC,dn as ie$1,dr as wp,dt as Te,en as fg,f as Be,fn as it,fr as wt$1,ft as Tt$1,g as Bt$1,gn as jt$1,gr as xe$2,h as Br,hr as xc,ht as Uv,in as gk,ir as uv,it as S$1,j as G,jt as _p,k as EE,l as Ac,ln as i5,lt as TS,m as Bl,mn as j8,mr as x,mt as Um,nr as ul,nt as Qn,o as $s,on as h0,or as vo,ot as Sc,pn as j$2,pr as ww,pt as Tw,q as Mr,qn as s_,qt as e_,r as $e,rr as ur,rt as Rc,s as $v,sn as he$2,st as Sd,t as $,tn as fi,tr as u_,tt as Q$2,u as B5,un as i_,ur as wk,v as C$1,vn as ke,vt as Vn,w as Dk,wr as zi,wt as ZE,x as Cp,xn as l_,xr as yx,xt as XT,yn as l5,yt as W$1,zn as q$1,zt as bo}from"./chunk-CNPhXHsc.js";var y=new C$1(`NAVIGATION_CONFIG`);var K$2=new C$1(`NAVIGATION_ACCESS_ADAPTER`);var _$1=class o{router=p$1(tn$1);config=p$1(y,{optional:!0});i18n=p$1(ed,{optional:!0});accessAdapter=p$1(K$2,{optional:!0});navEnd=j8(this.router.events.pipe(Be(n=>n instanceof Tt$1)));current=W$1(()=>(this.navEnd(),this.i18n?.version?.(),this.resolveCurrent(this.router.routerState.snapshot.root)));routeBase=W$1(()=>this.accessAdapter?.resolveBaseRoute());routes=W$1(()=>(this.i18n?.version?.(),this.extractRoutes(this.router.config)));baseRoute=W$1(()=>{let n=this.routes(),e=this.routeBase(),t,r=d=>{for(let s of d){if(s.data?.root&&(t||(t=s.route),e&&s.route.startsWith(e)))return s.route;if(s.children?.length){let a=r(s.children);if(a)return a}}};return r(n)??t??e});menu=W$1(()=>this.buildMenu(this.routes()));menuGroups=W$1(()=>{let n=[...this.config?.sections??[]].sort((t,r)=>(t.order??Number.POSITIVE_INFINITY)-(r.order??Number.POSITIVE_INFINITY)),e=new Map(n.map(t=>[t.id,{id:t.id,title:t.title??t.id,items:[]}]));for(let t of this.flattenRoutes(this.menu())){if(!t.visible||t.data?.menu===!1)continue;let r$2=t.section??``,i=e.get(r$2);i||(i={id:r$2,title:r$2,items:[]},e.set(r$2,i)),i.items.push(s(r({},t),{children:void 0}))}return[...e.values()].filter(t=>t.items.length>0)});navigateBack(){let n=this.current().breadcrumbs;if(n.length>1){let e=n[n.length-2];this.router.navigateByUrl(e.route)}else this.router.navigateByUrl(this.routeBase()??`/`)}extractRoutes(n,e=[]){let t=[];for(let r of n){if(r.redirectTo||this.accessAdapter&&!this.accessAdapter.canAccessMenu(r.data??{}))continue;let i=r.path??``,d=i?[...e,i]:[...e],s=`/`+d.filter(Boolean).join(`/`),a=r.children?.length?this.extractRoutes(r.children,d):[],c=r.data?.nav;if(!c){t.push(...a);continue}let I={id:s,route:s,label:this.resolveNavText(c.label,{snapshot:void 0})??``,icon:c.icon,section:c.section,visible:c.visible?c.visible():!0,data:c,children:a};t.push(I)}return this.sortNavigationItems(t)}resolveCurrent(n){let e=n,t;for(;e;){let f=e.children.find(m=>m.outlet===`primary`)??null;if(!f){t=e;break}e=f}if(!t)return{breadcrumbs:[]};let r=t.pathFromRoot.flatMap(f=>f.url.map(m=>m.path)).filter(Boolean),i=[],d=this.flattenRoutes(this.routes()),s=``;for(let f of r){s+=`/`+f;let m=this.matchRouteToUrl(d,s);if(m&&m.data&&!m.data.hidden){let O={snapshot:t},C=this.resolveNavText(m.data.breadcrumb,O)??this.resolveNavText(m.data.label,O);C&&i[i.length-1]?.label!==C&&i.push({label:C,route:s})}}let a=t.routeConfig?.data?.nav,c=`/`+r.join(`/`),I;return a&&!a.hidden&&(I={id:c,route:c,label:this.resolveNavText(a.label,{snapshot:t})??``,icon:a.icon,section:a.section,visible:a.visible?a.visible():!0,data:a}),{current:I,breadcrumbs:i}}buildMenu(n){return n.map(e=>{let t=this.buildMenu(e.children??[]);return!(e.visible&&e.data?.menu!==!1)&&!t.length?null:s(r({},e),{children:t})}).filter(e=>e!==null)}sortNavigationItems(n){let e=this.config?.sortItems;return[...n].sort((t,r)=>{if(e)return e(t,r);let i=t.data?.order??Number.POSITIVE_INFINITY,d=r.data?.order??Number.POSITIVE_INFINITY;return i!==d?i-d:t.label.localeCompare(r.label)})}matchRouteToUrl(n,e){return n.find(r=>r.route===e)||n.find(r=>r.route.includes(`:`)?new RegExp(`^`+r.route.replace(/:[^\s/]+/g,`([^/]+)`)+`$`).test(e):!1)}flattenRoutes(n){return n.reduce((e,t)=>(e.push(t),t.children&&e.push(...this.flattenRoutes(t.children)),e),[])}resolveNavText(n,e){if(!n)return;let t=typeof n==`function`?n(e):n;return td(t)?this.i18n?.translate(t.key,{route:e.snapshot}):t}static ɵfac=function(e){return new(e||o)};static ɵprov=x({token:o,factory:o.ɵfac,providedIn:`root`})};var H$2=(o,n)=>n.route;function J$3(o,n){if(o&1&&(It$1(0,`span`,1),Co(1),Bt$1()),o&2){let e=ur().$implicit;jt$1(),Nc(e.label)}}function Q$1(o,n){if(o&1&&(It$1(0,`a`,2),Co(1),Bt$1(),fi(2,`bx-icon`,3)),o&2){let e=ur().$implicit,t=ur(2);vo(`routerLink`,e.route),jt$1(),Nc(e.label),jt$1(),vo(`name`,t.divider())}}function Z$1(o,n){if(o&1&&lr(0,J$3,2,1,`span`,1)(1,Q$1,3,3),o&2){let e=n.$index,t=n.$count;cr(e===t-1?0:1)}}function ee$1(o,n){if(o&1&&(It$1(0,`nav`,0),Cp(1,Z$1,2,1,null,null,H$2),Bt$1()),o&2){let e=ur();Kt$1(`aria-label`,e.ariaLabel()),jt$1(),wp(e.current().breadcrumbs)}}var X$1=class o{navigationService=p$1(_$1);a11y=p$1(ke);isAnimated=W$1(()=>!this.a11y.isReducedMotion());minimumBreadcrumbs=L$1(2);divider=L$1(`chevron-right`);showBreadcumbs=W$1(()=>{let n=Math.max(1,this.minimumBreadcrumbs());return this.current().breadcrumbs.length>=n});ariaLabel=W$1(()=>`Breadcrumbs: ${this.current().breadcrumbs.map(e=>e.label).join(` > `)}`);current=this.navigationService.current;static ɵfac=function(e){return new(e||o)};static ɵcmp=gt$1({type:o,selectors:[[`bx-breadcrumbs`]],inputs:{minimumBreadcrumbs:[1,`minimumBreadcrumbs`],divider:[1,`divider`]},decls:1,vars:1,consts:[[1,`breadcrumbs`],[`aria-current`,`page`,1,`crumb`,`last`],[1,`crumb`,3,`routerLink`],[`size`,`16`,1,`breadcrumb-separator`,3,`name`]],template:function(e,t){e&1&&lr(0,ee$1,3,1,`nav`,0),e&2&&cr(t.showBreadcumbs()?0:-1)},dependencies:[_u,nd],styles:[`
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
}`]})};function Oe$1(o){return{config:o,withNav(n,e){return te$2(n,e)}}}function we(o){return[{provide:y,useValue:o}]}function te$2(o,n){let e=o.data?.nav??{};return s(r({},o),{data:s(r({},o.data??{}),{nav:r(r({},e),n)})})}var ie=[`*`];var h$1=class r{static ɵfac=function(e){return new(e||r)};static ɵcmp=gt$1({type:r,selectors:[[`bx-error`]],ngContentSelectors:ie,decls:1,vars:0,template:function(e,n){e&1&&(yo(),bo(0))},encapsulation:2})};var oe=[`errorText`];var ae=[`*`,[[`bx-error`]]];var le$2=[`*`,`bx-error`];function de(r,t){r&1&&(It$1(0,`span`,8),Co(1,`*`),Bt$1())}function se(r,t){if(r&1&&(It$1(0,`button`,9),fi(1,`bx-icon`,11),Bt$1()),r&2){let e=ur(2);vo(`bxTooltip`,e.tooltip())}}function ce$1(r,t){r&1&&fi(0,`bx-icon`,10)}function be$1(r,t){if(r&1&&(It$1(0,`div`,2)(1,`label`,7),Co(2),lr(3,de,2,0,`span`,8),Bt$1(),lr(4,se,2,1,`button`,9),lr(5,ce$1,1,0,`bx-icon`,10),Bt$1()),r&2){let e=ur();jt$1(),Kt$1(`for`,e.forId()),jt$1(),hi(` `,e.resolvedLabel(),` `),jt$1(),cr(e.required()?3:-1),jt$1(),cr(e.tooltip()?4:-1),jt$1(),cr(e.loading()?5:-1)}}function pe$2(r,t){if(r&1&&(It$1(0,`button`,4),fi(1,`bx-icon`,11),Bt$1()),r&2){let e=ur();vo(`bxTooltip`,e.tooltip()),Kt$1(`aria-label`,`More information`)}}function ue$2(r,t){if(r&1&&(It$1(0,`div`,12),fi(1,`bx-icon`,13),It$1(2,`span`,14,0),Co(4),Bt$1()()),r&2){let e=ur();at(`bx-animated`,e.isAnimated()),jt$1(4),Nc(e.resolvedError())}}var O$1=class r{i18n=p$1(ed,{optional:!0});a11y=p$1(ke);element=p$1(ie$1).nativeElement;lighting=p$1(i_);projectedError=Hz(h$1,{read:ie$1});errorElement=Bz(`errorText`);resolvedLabel=W$1(()=>this.resolveText(this.label()));resolvedError=W$1(()=>this.resolveText(this.error()));inline=L$1(!1);label=L$1(void 0);tooltip=L$1(void 0);error=L$1(void 0);required=L$1(!1);loading=L$1(!1);forId=L$1(``);isAnimated=W$1(()=>!this.a11y.isReducedMotion());constructor(){$z(t=>{let e=this.projectedError()?.nativeElement,n=this.resolvedError()?this.errorElement()?.nativeElement:e;if(!n)return;let l=this.element.parentElement,_=this.element.closest(`form, fieldset`)??(l?.tagName.startsWith(`BX-`)?l.parentElement:l);if(!_)return;let T=this.element.querySelector(`.bx-field-control > [data-bx-surface]`),re=this.lighting.register(_,{element:T??n,edge:T?`bottom`:void 0,offsetX:.5,offsetY:T?1:0,z:32,color:`var(--bx-text-danger)`,intensity:.9,radius:240});t(()=>re.destroy())})}resolveText(t){if(this.i18n?.version?.(),!!t)return td(t)?this.i18n?.translate(t.key)??t.key:t}static ɵfac=function(e){return new(e||r)};static ɵcmp=gt$1({type:r,selectors:[[`bx-form-field`]],contentQueries:function(e,n,l){e&1&&GC(l,n.projectedError,h$1,5,ie$1),e&2&&PT()},viewQuery:function(e,n){e&1&&WC(n.errorElement,oe,5),e&2&&PT()},inputs:{inline:[1,`inline`],label:[1,`label`],tooltip:[1,`tooltip`],error:[1,`error`],required:[1,`required`],loading:[1,`loading`],forId:[1,`forId`]},ngContentSelectors:le$2,decls:8,vars:8,consts:[[`errorText`,``],[1,`bx-field-wrapper`],[1,`bx-field-header`],[1,`bx-field-control`],[`type`,`button`,`placement`,`top`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[1,`bx-field-error-projected`],[1,`bx-field-error`,3,`bx-animated`],[1,`bx-field-label`],[1,`bx-field-required`],[`type`,`button`,`placement`,`top`,`aria-label`,`More information`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[`name`,`loader`,`size`,`16`,1,`bx-spin`],[`name`,`help-circle`,`size`,`16`],[1,`bx-field-error`],[`name`,`alert-circle`,`size`,`16`],[1,`bx-field-error-text`]],template:function(e,n){e&1&&(yo(ae),It$1(0,`div`,1),lr(1,be$1,6,5,`div`,2),It$1(2,`div`,3),bo(3),lr(4,pe$2,2,2,`button`,4),Bt$1(),It$1(5,`div`,5),bo(6,1),Bt$1(),lr(7,ue$2,5,3,`div`,6),Bt$1()),e&2&&(at(`is-invalid`,!!n.resolvedError()||!!n.projectedError()),Kt$1(`data-bx-field-invalid`,!!n.resolvedError()||!!n.projectedError()),jt$1(),cr(n.resolvedLabel()||n.tooltip()&&!n.inline()?1:-1),jt$1(),at(`bx-field-control-inline`,n.inline()),jt$1(2),cr(n.inline()&&n.tooltip()?4:-1),jt$1(3),cr(n.resolvedError()?7:-1))},dependencies:[Tw,nd,a_],styles:[`
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
}`]})};var me$2=[`inputElement`];function xe$1(r,t){if(r&1){let e=kT();It$1(0,`button`,6),it(`click`,function(){Uv(e);let l=ur();return $v(l.clear())}),fi(1,`bx-icon`,7),Bt$1()}if(r&2){let e=ur();vo(`disabled`,e.isDisabled())}}var te$1=class r extends ZE{i18n=p$1(ed,{optional:!0});inputId=W$1(()=>`bx-search-${Math.random().toString(36).substr(2,9)}`);resolvedPlaceholder=W$1(()=>{this.i18n?.version?.();let t=this.placeholder();return t?td(t)?this.i18n?.translate(t.key)??t.key:t:``});search=ww();inputElement;clear(){this.isDisabled()||(this.updateValue(``),this.search.emit(``),this.focus())}focus(){this.inputElement?.nativeElement.focus()}onInput(t){let e=t.target;this.updateValue(e.value),this.search.emit(e.value)}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Vn(r)))(n||r)}})();static ɵcmp=gt$1({type:r,selectors:[[`bx-search-input`]],viewQuery:function(e,n){if(e&1&&_p(me$2,5),e&2){let l;Ac(l=Rc())&&(n.inputElement=l.first)}},outputs:{search:`search`},features:[rt$1],decls:6,vars:17,consts:[[`inputElement`,``],[3,`label`,`tooltip`,`error`,`loading`,`required`,`forId`],[`bxSurface`,``,1,`bx-search-input-wrapper`],[`name`,`search`,`size`,`16`,1,`bx-search-icon-left`],[`type`,`text`,1,`bx-native-search-input`,3,`input`,`blur`,`disabled`,`value`],[`type`,`button`,`aria-label`,`Clear search`,1,`bx-search-clear-btn`,3,`disabled`],[`type`,`button`,`aria-label`,`Clear search`,1,`bx-search-clear-btn`,3,`click`,`disabled`],[`name`,`x`,`size`,`16`]],template:function(e,n){e&1&&(It$1(0,`bx-form-field`,1)(1,`div`,2),fi(2,`bx-icon`,3),It$1(3,`input`,4,0),it(`input`,function(_){return n.onInput(_)})(`blur`,function(){return n.onBlur()}),Bt$1(),lr(5,xe$1,2,1,`button`,5),Bt$1()()),e&2&&(vo(`label`,n.label())(`tooltip`,n.tooltip())(`error`,n.errorMessage)(`loading`,n.loading())(`required`,n.required())(`forId`,n.inputId()),jt$1(),at(`is-invalid`,!!n.errorMessage)(`is-disabled`,n.isDisabled()),jt$1(2),vo(`disabled`,n.isDisabled())(`value`,n.internalValue()||``),Kt$1(`id`,n.inputId())(`placeholder`,n.resolvedPlaceholder())(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()),jt$1(2),cr(n.internalValue()?5:-1))},dependencies:[Mr,Tw,O$1,nd],styles:[`
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
}`],changeDetection:1})};function ee(r,n){r&1&&(It$1(0,`span`,6),Co(1,`*`),Bt$1())}function ne(r,n){if(r&1&&(It$1(0,`span`,5),Co(1),lr(2,ee,2,0,`span`,6),Bt$1()),r&2){let t=ur();jt$1(),hi(` `,t.resolvedLabel(),` `),jt$1(),cr(t.required()?2:-1)}}var H$1=class r{radios=new Set;select(n){for(let t of this.radios)t!==n&&t.sharesGroup(n)&&t.writeValue(n.value())}static ɵfac=function(t){return new(t||r)};static ɵprov=x({token:r,factory:r.ɵfac,providedIn:`root`})};var K$1=class r extends ZE{registry=p$1(H$1);element=p$1(ie$1).nativeElement;i18n=p$1(ed,{optional:!0});inputId=W$1(()=>`bx-radio-${e_()}`);resolvedLabel=W$1(()=>{this.i18n?.version?.();let n=this.label();if(n)return td(n)?this.i18n?.translate(n.key)??n.key:n});value=L$1.required();name=L$1(``);showTooltip=!1;constructor(){super(),this.registry.radios.add(this),p$1(J$4).onDestroy(()=>this.registry.radios.delete(this))}sharesGroup(n){let t=this.ngControl?.control;return t&&t===n.ngControl?.control?!0:!!this.name()&&this.name()===n.name()&&this.element.closest(`form`)===n.element.closest(`form`)&&t?.parent===n.ngControl?.control?.parent}onSelect(){this.isDisabled()||(this.updateValue(this.value()),this.registry.select(this))}onBlur(){this.markAsTouched()}static ɵfac=function(t){return new(t||r)};static ɵcmp=gt$1({type:r,selectors:[[`bx-radio`]],inputs:{value:[1,`value`],name:[1,`name`]},features:[rt$1],decls:6,vars:18,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[1,`bx-inline-wrapper`],[`type`,`radio`,1,`bx-visually-hidden`,3,`change`,`blur`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-radio-circle`],[1,`bx-radio-inner`],[1,`bx-inline-label`],[1,`bx-inline-required`]],template:function(t,e){t&1&&(It$1(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),it(`change`,function(){return e.onSelect()})(`blur`,function(){return e.onBlur()}),Bt$1(),It$1(3,`div`,3),fi(4,`div`,4),Bt$1(),lr(5,ne,3,2,`span`,5),Bt$1()()),t&2&&(vo(`inline`,!0)(`tooltip`,e.tooltip())(`error`,e.errorMessage)(`loading`,e.loading())(`forId`,e.inputId()),jt$1(),at(`is-disabled`,e.isDisabled()),jt$1(),vo(`disabled`,e.isDisabled())(`checked`,e.internalValue()===e.value()),Kt$1(`id`,e.inputId())(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel()),jt$1(),at(`is-checked`,e.internalValue()===e.value())(`is-invalid`,!!e.errorMessage),jt$1(2),cr(e.resolvedLabel()?5:-1))},dependencies:[Mr,Tw,O$1],styles:[`
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
}`],changeDetection:1})};function te(r,n){r&1&&(It$1(0,`span`,6),Co(1,`*`),Bt$1())}function re(r,n){if(r&1&&(It$1(0,`span`,5),Co(1),lr(2,te,2,0,`span`,6),Bt$1()),r&2){let t=ur();jt$1(),hi(` `,t.resolvedLabel(),` `),jt$1(),cr(t.required()?2:-1)}}var Z=class r extends ZE{i18n=p$1(ed,{optional:!0});inputId=W$1(()=>`bx-slide-toggle-${e_()}`);resolvedLabel=W$1(()=>{this.i18n?.version?.();let n=this.label();if(n)return td(n)?this.i18n?.translate(n.key)??n.key:n});onToggle(n){let t=n.target;this.updateValue(t.checked)}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let n;return function(e){return(n||(n=Vn(r)))(e||r)}})();static ɵcmp=gt$1({type:r,selectors:[[`bx-slide-toggle`]],features:[rt$1],decls:6,vars:17,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,1,`bx-visually-hidden`,3,`change`,`blur`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-slide-toggle-track`],[1,`bx-slide-toggle-thumb`],[1,`bx-inline-label`],[1,`bx-inline-required`]],template:function(t,e){t&1&&(It$1(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),it(`change`,function(o){return e.onToggle(o)})(`blur`,function(){return e.onBlur()}),Bt$1(),It$1(3,`div`,3),fi(4,`div`,4),Bt$1(),lr(5,re,3,2,`span`,5),Bt$1()()),t&2&&(vo(`inline`,!0)(`tooltip`,e.tooltip())(`error`,e.errorMessage)(`loading`,e.loading())(`forId`,e.inputId()),jt$1(),at(`is-disabled`,e.isDisabled()),jt$1(),vo(`disabled`,e.isDisabled())(`checked`,e.internalValue()===!0),Kt$1(`id`,e.inputId())(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel()),jt$1(),at(`is-checked`,e.internalValue()===!0)(`is-invalid`,!!e.errorMessage),jt$1(2),cr(e.resolvedLabel()||e.tooltip()?5:-1))},dependencies:[Mr,Tw,O$1],styles:[`
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
}`],changeDetection:1})};var J$2=class r{element=p$1(ie$1);theme=p$1(Dr);shell;thumb;constructor(){uM(()=>this.sync());let n=p$1(G),t=p$1(J$4);Zt(()=>{let e=this.element.nativeElement,i=e.ownerDocument.createElement(`span`);i.className=`bx-slider-shell`;let o=e.ownerDocument.createElement(`span`);o.className=`bx-slider-thumb`,o.setAttribute(`aria-hidden`,`true`),e.before(i),i.append(e,o),this.shell=i,this.thumb=o,this.sync();let v=()=>{i.style.setProperty(`--bx-slider-center-y`,`${e.offsetTop+e.offsetHeight/2}px`),i.style.setProperty(`--bx-slider-track-start`,`${e.offsetLeft}px`),i.style.setProperty(`--bx-slider-track-width`,`${e.offsetWidth}px`),Um(o)},R=new ResizeObserver(v);n.runOutsideAngular(()=>{R.observe(e),R.observe(i),v()});let Q=n.runOutsideAngular(()=>_0(o,d=>{let h=d.reflectionStrength>d.strength,z=h?d.reflectionStrength:d.strength;z<=.04?(o.style.removeProperty(`--bx-slider-light-color`),o.style.removeProperty(`--bx-slider-light-strength`)):(o.style.setProperty(`--bx-slider-light-color`,h?d.reflection:d.color),o.style.setProperty(`--bx-slider-light-strength`,String(z))),o.style.setProperty(`--bx-slider-light-x`,`${h?d.reflectionX:d.x}%`),o.style.setProperty(`--bx-slider-light-y`,`${h?d.reflectionY:d.y}%`)},e));t.onDestroy(()=>{R.disconnect(),Q(),i.replaceWith(e),this.shell=this.thumb=void 0})})}sync(){let n=this.element.nativeElement,t=n.min===``?0:Number(n.min),e=n.max===``?100:Number(n.max),i=e>t?Math.max(0,Math.min(100,(n.valueAsNumber-t)/(e-t)*100)):0,o=`${Number.isFinite(i)?i:0}%`;if(n.style.getPropertyValue(`--bx-slider-progress`)!==o&&n.style.setProperty(`--bx-slider-progress`,o),this.shell){let v=String((n.matches(`:dir(rtl)`)?100-(Number.isFinite(i)?i:0):Number.isFinite(i)?i:0)/100);this.shell.style.getPropertyValue(`--bx-slider-position`)!==v&&(this.shell.style.setProperty(`--bx-slider-position`,v),this.thumb&&Um(this.thumb))}}static ɵfac=function(t){return new(t||r)};static ɵdir=q$1({type:r,selectors:[[`input`,`type`,`range`,`bxSlider`,``]],hostAttrs:[1,`bx-slider`],hostBindings:function(t,e){t&1&&it(`input`,function(){return e.sync()})}})};var e=[{id:`button`,title:`Button`,group:`Forms`,readme:`projects/blocks/forms/components/button/README.md`,symbol:`Button`,package:`@filip.mazev/blocks/forms`,selector:`button[bx-button]`,description:`An action control with Blocks intent colors, familiar variants and visible focus.`,example:`<button bx-button variant="filled" (click)="save()">Save changes</button>`},{id:`checkbox`,title:`Checkbox`,group:`Forms`,readme:`projects/blocks/forms/components/checkbox/README.md`,symbol:`Checkbox`,package:`@filip.mazev/blocks/forms`,selector:`bx-checkbox`,description:`A boolean choice integrated with Angular forms.`,example:`<bx-checkbox label="Receive updates" [formControl]="updates" />`},{id:`form-field`,title:`Form field`,group:`Forms`,readme:`projects/blocks/forms/components/form-field/README.md`,symbol:`FormField`,package:`@filip.mazev/blocks/forms`,selector:`bx-form-field`,description:`A shared label, help text, validation and loading frame for controls.`,example:`<bx-form-field label="Project name" forId="project" [required]="true" [error]="error">
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
<button bx-button (click)="openModal()">Open modal backdrop</button>`},{id:`modal-banner`,title:`Modal banner`,group:`Modals`,readme:`projects/blocks/modal/components/shared/ui/banner/README.md`,symbol:`ModalBanner`,package:`@filip.mazev/blocks/modal`,selector:`bx-modal-banner`,description:`The shared modal heading, semantic icon and close action.`,example:`<bx-modal-banner [header]="{ text: 'Project settings' }" [showCloseButton]="true" (close)="handleClose($event)" />`},{id:`toast-core`,title:`Toast core`,group:`Notifications`,readme:`projects/blocks/toastr/components/README.md`,symbol:`ToastCore, ToastrService`,package:`@filip.mazev/blocks/toastr`,selector:`service-owned view`,description:`The toast lifecycle host with progress, dismissal and content composition.`,example:`<button bx-button (click)="notify()">Show notification</button>`},{id:`simple-toast`,title:`Simple toast`,group:`Notifications`,readme:`projects/blocks/toastr/components/views/simple-toast/README.md`,symbol:`SimpleToast, ToastrService`,package:`@filip.mazev/blocks/toastr`,selector:`service-owned view`,description:`A notification with a semantic icon, optional title and message.`,example:`<button bx-button (click)="notify()">Show success</button>`},{id:`surface`,title:`Surface effects`,group:`Primitives`,readme:`projects/blocks/effects/README.md`,symbol:`BxSurfaceDirective`,package:`@filip.mazev/blocks/effects`,selector:`[bxSurface]`,description:`Apply the shared glass material to a custom surface while inheriting application settings.`,example:`<section bxSurface>Custom content follows the global appearance settings.</section>`},{id:`modal-header`,title:`Modal header`,group:`Modals`,readme:`projects/blocks/modal/directives/header/README.md`,symbol:`ModalHeaderDirective`,package:`@filip.mazev/blocks/modal`,selector:`[appModalHeader]`,description:`Projects custom header content into the active Blocks modal layout.`,example:`<div *appModalHeader>Custom header content</div>`},{id:`modal-footer`,title:`Modal footer`,group:`Modals`,readme:`projects/blocks/modal/directives/footer/README.md`,symbol:`ModalFooterDirective`,package:`@filip.mazev/blocks/modal`,selector:`[appModalFooter]`,description:`Projects custom footer content into the active Blocks modal layout.`,example:`<div *appModalFooter>Custom footer content</div>`}];var I=new C$1(`HIGHLIGHT_OPTIONS`);function rt(e){return an([{provide:I,useValue:e}])}var h=(function(e){return e.FULL_WITH_CORE_LIBRARY_IMPORTS=`The full library and the core library were imported, only one of them should be imported!`,e.FULL_WITH_LANGUAGE_IMPORTS=`The highlighting languages were imported they are not needed!`,e.CORE_WITHOUT_LANGUAGE_IMPORTS=`The highlighting languages were not imported!`,e.LANGUAGE_WITHOUT_CORE_IMPORTS=`The core library was not imported!`,e.NO_FULL_AND_NO_CORE_IMPORTS=`Highlight.js library was not imported!`,e})(h||{});var V=(()=>{class e{constructor(){this.document=p$1(z$1),this.isPlatformBrowser=Le(p$1(De)),this.options=p$1(I,{optional:!0}),this._ready=new $e(null),this.ready=O_(this._ready.asObservable().pipe(Be(t=>!!t))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(ot(t=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=t,this.loadLineNumbers().pipe(wt$1(i=>{i.activateLineNumbers(),this._ready.next(t)}))):(this._ready.next(t),qe)),Br(t=>(console.error(`[HLJS] `,t),this._ready.error(t),qe))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return _d(()=>h.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return _d(()=>h.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return _d(()=>h.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return _d(()=>h.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(ot(t=>this._loadLanguages(t)))}return _d(()=>h.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(t){let i=Object.entries(this.options.languages).map(([s,G])=>_(G()).pipe(wt$1(W=>t.registerLanguage(s,W))));return Sd(i).pipe(fe$1(()=>t))}loadCoreLibrary(){return _(this.options.coreLibraryLoader())}loadFullLibrary(){return _(this.options.fullLibraryLoader())}loadLineNumbers(){return he$2(this.options.lineNumbersLoader())}setTheme(t){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=t:this.loadTheme(t))}loadTheme(t){this._themeLinkElement=this.document.createElement(`link`),this._themeLinkElement.href=t,this._themeLinkElement.type=`text/css`,this._themeLinkElement.rel=`stylesheet`,this._themeLinkElement.media=`screen,print`,this.document.head.appendChild(this._themeLinkElement)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵprov=x({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();var _=e=>he$2(e).pipe(Be(o=>!!o?.default),fe$1(o=>o.default));var z=(()=>{class e{constructor(){this.loader=p$1(V),this.options=p$1(I,{optional:!0}),this.hljsSignal=S$1(null),this.hljs=W$1(()=>this.hljsSignal()),this.loader.ready.then(t=>{this.hljsSignal.set(t),this.options?.highlightOptions&&t.configure(this.options.highlightOptions)})}async highlight(t,i){return(await this.loader.ready).highlight(t,i)}async highlightAuto(t,i){return(await this.loader.ready).highlightAuto(t,i)}async highlightElement(t){(await this.loader.ready).highlightElement(t)}async highlightAll(){(await this.loader.ready).highlightAll()}async configure(t){(await this.loader.ready).configure(t)}async registerLanguage(t,i){(await this.loader.ready).registerLanguage(t,i)}async unregisterLanguage(t){(await this.loader.ready).unregisterLanguage(t)}async registerAliases(t,{languageName:i}){(await this.loader.ready).registerAliases(t,{languageName:i})}async listLanguages(){return(await this.loader.ready).listLanguages()}async getLanguage(t){return(await this.loader.ready).getLanguage(t)}async safeMode(){(await this.loader.ready).safeMode()}async debugMode(){(await this.loader.ready).debugMode()}async lineNumbersBlock(t,i){let s=await this.loader.ready;s.lineNumbersBlock&&s.lineNumbersBlock(t,i)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵprov=x({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();var j$1;function q(){if(!j$1)try{j$1=window?.trustedTypes?.createPolicy(`ngx-highlightjs`,{createHTML:e=>e})}catch{}return j$1}function J$1(e){return q()?.createHTML(e)||e}var U$1=(()=>{class e{constructor(){this._hljs=p$1(z),this._nativeElement=p$1(ie$1).nativeElement,this._sanitizer=p$1(Xp),$z({write:()=>{let t=this.code();this.setTextContent(t||``),t&&this.highlightElement(t)}}),$z({write:()=>{let t=this.highlightResult();this.setInnerHTML(t?.value),this.highlighted.emit(t)}})}setTextContent(t){requestAnimationFrame(()=>this._nativeElement.textContent=t)}setInnerHTML(t){requestAnimationFrame(()=>this._nativeElement.innerHTML=J$1(this._sanitizer.sanitize(pe$3.HTML,t)||``))}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵdir=q$1({type:e})}}return e})();var ht=(()=>{class e extends U$1{constructor(){super(...arguments),this.code=L$1(null,{alias:`highlight`}),this.highlightResult=S$1(null),this.language=L$1.required(),this.ignoreIllegals=L$1(void 0,{transform:Pe}),this.highlighted=ww()}async highlightElement(t){let i=await this._hljs.highlight(t,{language:this.language(),ignoreIllegals:this.ignoreIllegals()});this.highlightResult.set(i)}static{this.ɵfac=(()=>{let t;return function(s){return(t||(t=Vn(e)))(s||e)}})()}static{this.ɵdir=q$1({type:e,selectors:[[``,`highlight`,``]],hostVars:2,hostBindings:function(i,s){i&2&&at(`hljs`,!0)},inputs:{code:[1,`highlight`,`code`],language:[1,`language`],ignoreIllegals:[1,`ignoreIllegals`]},outputs:{highlighted:`highlighted`},features:[Mt$1([{provide:U$1,useExisting:e}]),rt$1]})}}return e})();function R(r,e){r&1&&fi(0,`bx-icon`,4)}function A$1(r,e){r&1&&(It$1(0,`span`,6),Co(1,`*`),Bt$1())}function U(r,e){if(r&1&&(It$1(0,`span`,5),Co(1),lr(2,A$1,2,0,`span`,6),Bt$1()),r&2){let t=ur();jt$1(),hi(` `,t.resolvedLabel(),` `),jt$1(),cr(t.required()?2:-1)}}var L=class r extends ZE{i18n=p$1(ed,{optional:!0});inputId=W$1(()=>`bx-checkbox-${e_()}`);resolvedLabel=W$1(()=>{this.i18n?.version?.();let e=this.label();if(e)return td(e)?this.i18n?.translate(e.key)??e.key:e});showTooltip=!1;onToggle(e){let t=e.target;this.updateValue(t.checked)}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let e;return function(n){return(e||(e=Vn(r)))(n||r)}})();static ɵcmp=gt$1({type:r,selectors:[[`bx-checkbox`]],features:[rt$1],decls:6,vars:18,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,1,`bx-visually-hidden`,3,`change`,`blur`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-checkbox-box`],[`name`,`check`,`size`,`16`],[1,`bx-inline-label`],[1,`bx-inline-required`]],template:function(t,n){t&1&&(It$1(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),it(`change`,function(a){return n.onToggle(a)})(`blur`,function(){return n.onBlur()}),Bt$1(),It$1(3,`div`,3),lr(4,R,1,0,`bx-icon`,4),Bt$1(),lr(5,U,3,2,`span`,5),Bt$1()()),t&2&&(vo(`inline`,!0)(`tooltip`,n.tooltip())(`error`,n.errorMessage)(`loading`,n.loading())(`forId`,n.inputId()),jt$1(),at(`is-disabled`,n.isDisabled()),jt$1(),vo(`disabled`,n.isDisabled())(`checked`,n.internalValue()===!0),Kt$1(`id`,n.inputId())(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()),jt$1(),at(`is-checked`,n.internalValue()===!0)(`is-invalid`,!!n.errorMessage),jt$1(),cr(n.internalValue()===!0?4:-1),jt$1(),cr(n.resolvedLabel()?5:-1))},dependencies:[Mr,Tw,O$1,nd],styles:[`
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
}`],changeDetection:1})};function H(r,e){r&1&&(It$1(0,`span`,6),Co(1,`*`),Bt$1())}function K(r,e){if(r&1&&(It$1(0,`label`,3),Co(1),lr(2,H,2,0,`span`,6),Bt$1()),r&2){let t=ur();Kt$1(`for`,t.inputId()),jt$1(),hi(` `,t.resolvedLabel(),` `),jt$1(),cr(t.isFieldRequired()?2:-1)}}function W(r,e){if(r&1){let t=kT();It$1(0,`div`,5)(1,`button`,7),it(`mousedown`,function(i){Uv(t);let a=ur();return $v(a.startSpin(-1,i))})(`touchstart`,function(i){Uv(t);let a=ur();return $v(a.startSpin(-1,i))})(`mouseup`,function(){Uv(t);let i=ur();return $v(i.stopSpin())})(`mouseleave`,function(){Uv(t);let i=ur();return $v(i.stopSpin())})(`touchend`,function(){Uv(t);let i=ur();return $v(i.stopSpin())}),fi(2,`bx-icon`,8),Bt$1(),It$1(3,`button`,7),it(`mousedown`,function(i){Uv(t);let a=ur();return $v(a.startSpin(1,i))})(`touchstart`,function(i){Uv(t);let a=ur();return $v(a.startSpin(1,i))})(`mouseup`,function(){Uv(t);let i=ur();return $v(i.stopSpin())})(`mouseleave`,function(){Uv(t);let i=ur();return $v(i.stopSpin())})(`touchend`,function(){Uv(t);let i=ur();return $v(i.stopSpin())}),fi(4,`bx-icon`,9),Bt$1()()}if(r&2){let t=ur();jt$1(),vo(`disabled`,t.isSpinDownDisabled()),jt$1(2),vo(`disabled`,t.isSpinUpDisabled())}}var j=class r extends ZE{i18n=p$1(ed,{optional:!0});inputId=W$1(()=>`bx-input-${e_()}`);isFocused=S$1(!1);isSpinDownDisabled=W$1(()=>{let e=this.min();return this.isDisabled()||e!==void 0&&(Number(this.internalValue())||0)<=e});isSpinUpDisabled=W$1(()=>{let e=this.max();return this.isDisabled()||e!==void 0&&(Number(this.internalValue())||0)>=e});isFloating=W$1(()=>{let e=this.internalValue(),t=e!=null&&e!==``,n=[`date`,`time`,`datetime-local`].includes(this.type());return this.isFocused()||t||n});resolvedPlaceholder=W$1(()=>{this.i18n?.version?.();let e=this.placeholder();return e?td(e)?this.i18n?.translate(e.key)??e.key:e:``});resolvedLabel=W$1(()=>{this.i18n?.version?.();let e=this.label();return e?td(e)?this.i18n?.translate(e.key)??e.key:e:``});type=L$1(`text`);min=L$1(void 0);max=L$1(void 0);step=L$1(1);spinTimeout;spinInterval;constructor(){super(),p$1(J$4).onDestroy(()=>this.stopSpin())}startSpin(e,t){t.preventDefault(),!this.isDisabled()&&(this.applyStep(e),this.spinTimeout=setTimeout(()=>{this.spinInterval=setInterval(()=>{this.applyStep(e)},50)},400))}stopSpin(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)}onInput(e){let t=e.target,n=this.type()===`number`?t.value===``?null:Number(t.value):t.value;this.updateValue(n)}onFocus(){this.isFocused.set(!0)}onBlur(){this.isFocused.set(!1),this.markAsTouched()}applyStep(e){let n=(Number(this.internalValue())||0)+e*this.step(),i=this.min(),a=this.max();i!==void 0&&n<i&&(n=i),a!==void 0&&n>a&&(n=a),this.updateValue(n),this.markAsTouched()}static ɵfac=function(t){return new(t||r)};static ɵcmp=gt$1({type:r,selectors:[[`bx-input-field`]],inputs:{type:[1,`type`],min:[1,`min`],max:[1,`max`],step:[1,`step`]},features:[rt$1],decls:6,vars:25,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[`bxSurface`,``,1,`bx-input-wrapper`],[1,`bx-input-container`],[1,`bx-floating-label`],[1,`bx-native-input`,3,`input`,`focus`,`blur`,`disabled`,`value`],[1,`bx-spinners-group`],[1,`bx-field-required`],[`type`,`button`,`tabindex`,`-1`,1,`bx-spin-btn`,3,`mousedown`,`touchstart`,`mouseup`,`mouseleave`,`touchend`,`disabled`],[`name`,`minus`,`size`,`16`],[`name`,`plus`,`size`,`16`]],template:function(t,n){t&1&&(It$1(0,`bx-form-field`,0)(1,`div`,1)(2,`div`,2),lr(3,K,3,3,`label`,3),It$1(4,`input`,4),it(`input`,function(a){return n.onInput(a)})(`focus`,function(){return n.onFocus()})(`blur`,function(){return n.onBlur()}),Bt$1()(),lr(5,W,5,2,`div`,5),Bt$1()()),t&2&&(vo(`inline`,!0)(`tooltip`,n.tooltip())(`error`,n.errorMessage)(`loading`,n.loading())(`forId`,n.inputId()),jt$1(),at(`is-invalid`,!!n.errorMessage)(`is-disabled`,n.isDisabled())(`has-spinners`,n.type()===`number`)(`is-floating`,n.isFloating()),jt$1(2),cr(n.label()?3:-1),jt$1(),vo(`disabled`,n.isDisabled())(`value`,n.internalValue()??``),Kt$1(`id`,n.inputId())(`type`,n.type())(`placeholder`,n.isFloating()?n.resolvedPlaceholder():``)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`min`,n.min())(`max`,n.max())(`step`,n.step()),jt$1(),cr(n.type()===`number`?5:-1))},dependencies:[Mr,Tw,O$1,nd],styles:[`
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
}`],changeDetection:1})};var be=[`searchInput`];var pe$1=[`origin`];var ge=(r,e)=>e.value;function ue$1(r,e){r&1&&(It$1(0,`span`,9),Co(1,`*`),Bt$1())}function he$1(r,e){if(r&1&&(It$1(0,`span`,5),Co(1),lr(2,ue$1,2,0,`span`,9),Bt$1()),r&2){let n=ur();jt$1(),hi(` `,n.resolvedLabel(),` `),jt$1(),cr(n.isFieldRequired()?2:-1)}}function me$1(r,e){if(r&1&&Co(0),r&2){let n=ur();hi(` `,n.resolvedPlaceholder(),` `)}}function fe(r,e){if(r&1&&Co(0),r&2){let n=ur();hi(` `,n.selectedOptionLabel(),` `)}}function xe(r,e){if(r&1){let n=kT();It$1(0,`div`,11)(1,`bx-search-input`,15,1),it(`search`,function(i){Uv(n);let a=ur(2);return $v(a.onSearchChange(i))})(`keydown.enter`,function(i){return i.preventDefault()}),Bt$1()()}if(r&2){let n=ur(2);jt$1(),vo(`placeholder`,n.resolvedSearchPlaceholder())}}function ve(r,e){r&1&&fi(0,`bx-icon`,19)}function ye(r,e){if(r&1){let n=kT();It$1(0,`bx-menu-item`,16),it(`action`,function(){let i=Uv(n).$implicit,a=ur(2);return $v(a.selectOption(i))}),It$1(1,`div`,17)(2,`div`,18),lr(3,ve,1,0,`bx-icon`,19),Bt$1(),It$1(4,`span`,20),Co(5),Bt$1()()()}if(r&2){let n=e.$implicit,t=ur(2);vo(`disabled`,n.disabled??!1)(`wrapLabel`,!0),Kt$1(`aria-selected`,t.internalValue()===n.value),jt$1(3),cr(t.internalValue()===n.value?3:-1),jt$1(),vo(`title`,n.resolvedStr),jt$1(),Nc(n.resolvedStr)}}function _e(r,e){if(r&1&&(It$1(0,`div`,14)(1,`span`,21),Co(2),Bt$1()()),r&2){let n=ur(2);jt$1(2),Nc(n.resolvedEmptyMessage())}}function Oe(r,e){if(r&1){let n=kT();It$1(0,`div`,10),it(`keydown`,function(i){Uv(n);let a=ur();return $v(a.onPanelKey(i))}),lr(1,xe,3,1,`div`,11),It$1(2,`div`,12),Cp(3,ye,6,6,`bx-menu-item`,13,ge,!1,_e,3,1,`div`,14),Bt$1()()}if(r&2){let n=ur();vo(`id`,n.inputId()+`-options`),Kt$1(`aria-label`,n.resolvedLabel()),jt$1(),cr(n.isSearchable()?1:-1),jt$1(2),wp(n.filteredOptions())}}var le$1=class r$1 extends ZE{a11y=p$1(ke);zone=p$1(G);isPanelAttached=S$1(!1);i18n=p$1(ed,{optional:!0});searchTerm=S$1(``);inputId=W$1(()=>`bx-select-${e_()}`);overlayPositions=[new _r({originX:`start`,originY:`bottom`},{overlayX:`start`,overlayY:`top`},0,4),new _r({originX:`start`,originY:`top`},{overlayX:`start`,overlayY:`bottom`},0,-4)];isFloating=W$1(()=>{let e=this.internalValue(),n=e!=null&&e!==``;return this.isOpen()||n});resolvedLabel=W$1(()=>{this.i18n?.version?.();let e=this.label();return e?td(e)?this.i18n?.translate(e.key)??e.key:e:``});resolvedPlaceholder=W$1(()=>{this.i18n?.version?.();let e=this.placeholder();return e?td(e)?this.i18n?.translate(e.key)??e.key:e:``});resolvedOptions=W$1(()=>(this.i18n?.version?.(),this.options().map(e=>s(r({},e),{resolvedStr:this.resolveText(e.label)}))));filteredOptions=W$1(()=>{let e=this.searchTerm().trim(),n=this.resolvedOptions();if(this.externalFiltering()||!e)return n;let t=e.toLocaleLowerCase();return n.filter(i=>{let a=0;for(let ce of i.resolvedStr.toLocaleLowerCase())if(ce===t[a]&&a++,a===t.length)return!0;return!1})});selectedOptionLabel=W$1(()=>{let e=this.internalValue(),n=this.resolvedOptions().find(t=>t.value===e);return n?n.resolvedStr:``});resolvedSearchPlaceholder=W$1(()=>this.resolveText(this.searchPlaceholder()));resolvedEmptyMessage=W$1(()=>this.resolveText(this.emptyMessage()));options=L$1.required();isSearchable=L$1(!1);externalFiltering=L$1(!1);searchPlaceholder=L$1(`Search...`);emptyMessage=L$1(`No results found.`);search=ww();isOpen=S$1(!1);transition;disconnectTheme;transitionRevision=0;focusOnOpen=null;connectedOverlay;searchInputRef;originRef;searchSubject=new ee$2;sub;ngOnInit(){super.ngOnInit(),this.sub=this.searchSubject.pipe(Id(300),ll()).subscribe(e=>{this.searchTerm.set(e),this.externalFiltering()&&this.search.emit(e)})}ngOnDestroy(){++this.transitionRevision,this.onPanelDetach(),this.sub?.unsubscribe()}toggleOpen(){this.isDisabled()||this.loading()||(this.isOpen()?this.close():this.open())}open(){if(this.isDisabled()||this.loading())return;++this.transitionRevision,this.isOpen.set(!0),this.isPanelAttached.set(!0);let e=this.connectedOverlay?.overlayRef?.overlayElement;e&&(e.inert=!1);let n=this.transition;n&&this.zone.runOutsideAngular(()=>n.enter())}close(){this.isOpen.set(!1),this.markAsTouched();let e=++this.transitionRevision,n=this.connectedOverlay?.overlayRef?.overlayElement;n?.contains(n.ownerDocument.activeElement)&&this.originRef?.nativeElement.focus({preventScroll:!0}),n&&(n.inert=!0);let t=this.transition;t&&!this.a11y.isReducedMotion()?this.zone.runOutsideAngular(()=>t.exit()).then(()=>{e===this.transitionRevision&&!this.isOpen()&&this.isPanelAttached.set(!1)}).catch(()=>{e===this.transitionRevision&&this.isPanelAttached.set(!1)}):this.isPanelAttached.set(!1)}onPanelAttach(){let e=this.transitionRevision;queueMicrotask(()=>{let n=this.connectedOverlay?.overlayRef,t=this.originRef?.nativeElement;if(!(!n?.hasAttached()||!t||!this.isOpen()||e!==this.transitionRevision)){if(this.disconnectTheme?.(),this.disconnectTheme=this.zone.runOutsideAngular(()=>$o(t,n.overlayElement)),n.updatePosition(),!this.a11y.isReducedMotion()){this.transition?.destroy(),this.transition=this.zone.runOutsideAngular(()=>Ii(t,n.overlayElement));let i=this.transition;this.zone.runOutsideAngular(()=>i.enter()).catch(()=>{e===this.transitionRevision&&(this.transition?.destroy(),this.transition=void 0)})}if(this.isSearchable())this.searchInputRef?.focus();else if(this.focusOnOpen){let i=this.panelItems();(this.focusOnOpen===`last`?i[i.length-1]:i[0])?.focus()}this.focusOnOpen=null}})}onPanelDetach(){this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0}refreshPanel(){this.transition?.refresh()}onTriggerKey(e){if([`ArrowDown`,`ArrowUp`,`Escape`].includes(e.key)){if(e.preventDefault(),e.key===`Escape`){this.close();return}if(this.focusOnOpen=e.key===`ArrowUp`?`last`:`first`,this.isOpen()){let n=this.panelItems();(this.focusOnOpen===`last`?n[n.length-1]:n[0])?.focus(),this.focusOnOpen=null}else this.open()}}onPanelKey(e){if(e.key===`Escape`){e.preventDefault(),e.stopPropagation(),this.close();return}if(e.key===`Tab`){this.close();return}if(e.target?.matches(`input,textarea`)||![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key))return;let n=this.panelItems();if(!n.length)return;let t=n.indexOf(n[0].ownerDocument.activeElement),i=e.key===`Home`?0:e.key===`End`?n.length-1:e.key===`ArrowDown`?(t+1)%n.length:t<0?n.length-1:(t-1+n.length)%n.length;e.preventDefault(),n[i].focus()}onOutsideClick(e){let n=e.target;this.originRef?.nativeElement.contains(n)||this.close()}selectOption(e){e.disabled||(this.updateValue(e.value),this.close())}onSearchChange(e){this.searchSubject.next(e)}panelItems(){return Array.from(this.connectedOverlay?.overlayRef?.overlayElement.querySelectorAll(`.bx-select-menu-container button:not(:disabled)`)??[])}resolveText(e){return e?td(e)?this.i18n?.translate(e.key)??e.key:e:``}static ɵfac=(()=>{let e;return function(t){return(e||(e=Vn(r$1)))(t||r$1)}})();static ɵcmp=gt$1({type:r$1,selectors:[[`bx-select`]],viewQuery:function(n,t){if(n&1&&_p(_N,5)(be,5)(pe$1,5,ie$1),n&2){let i;Ac(i=Rc())&&(t.connectedOverlay=i.first),Ac(i=Rc())&&(t.searchInputRef=i.first),Ac(i=Rc())&&(t.originRef=i.first)}},inputs:{options:[1,`options`],isSearchable:[1,`isSearchable`],externalFiltering:[1,`externalFiltering`],searchPlaceholder:[1,`searchPlaceholder`],emptyMessage:[1,`emptyMessage`]},outputs:{search:`search`},features:[rt$1],decls:10,vars:27,consts:[[`origin`,`cdkOverlayOrigin`],[`searchInput`,``],[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[`type`,`button`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`],[`name`,`chevron-down`,`size`,`16`,1,`bx-select-caret`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayWidth`],[1,`bx-field-required`],[`bxSurface`,``,`role`,`listbox`,`tabindex`,`0`,1,`bx-select-panel`,3,`keydown`,`id`],[1,`bx-select-search-container`],[1,`bx-select-menu-container`],[`role`,`option`,3,`disabled`,`wrapLabel`],[1,`bx-select-empty`],[3,`search`,`keydown.enter`,`placeholder`],[`role`,`option`,3,`action`,`disabled`,`wrapLabel`],[1,`bx-select-item-inner`],[1,`bx-select-check-placeholder`],[`name`,`check`,`size`,`16`],[3,`title`],[1,`bx-empty-text`]],template:function(n,t){if(n&1&&(It$1(0,`bx-form-field`,2)(1,`button`,3,0),it(`click`,function(){return t.toggleOpen()})(`keydown`,function(a){return t.onTriggerKey(a)}),It$1(3,`div`,4),lr(4,he$1,3,2,`span`,5),It$1(5,`span`,6),lr(6,me$1,1,1)(7,fe,1,1),Bt$1()(),fi(8,`bx-icon`,7),Bt$1(),BC(9,Oe,6,4,`ng-template`,8),it(`overlayOutsideClick`,function(a){return t.onOutsideClick(a)})(`attach`,function(){return t.onPanelAttach()})(`detach`,function(){return t.onPanelDetach()})(`positionChange`,function(){return t.refreshPanel()}),Bt$1()),n&2){let i=LT(2);vo(`inline`,!0)(`tooltip`,t.tooltip())(`error`,t.errorMessage)(`loading`,t.loading())(`forId`,t.inputId()),jt$1(),at(`is-invalid`,!!t.errorMessage)(`is-open`,t.isOpen())(`is-floating`,t.isFloating()),vo(`disabled`,t.isDisabled()||t.loading()),Kt$1(`id`,t.inputId())(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel()||t.resolvedLabel())(`aria-expanded`,t.isOpen())(`aria-controls`,t.isPanelAttached()?t.inputId()+`-options`:null),jt$1(3),cr(t.label()?4:-1),jt$1(),at(`is-placeholder`,t.internalValue()===null),Kt$1(`title`,t.selectedOptionLabel()||t.resolvedPlaceholder()),jt$1(),cr(t.internalValue()===null&&t.isFloating()?6:7),jt$1(3),vo(`cdkConnectedOverlayOrigin`,i)(`cdkConnectedOverlayOpen`,t.isPanelAttached())(`cdkConnectedOverlayPositions`,t.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayWidth`,i.elementRef.nativeElement.offsetWidth)}},dependencies:[Mr,Tw,SN,_N,fg,O$1,nd,s_,te$1],styles:[`
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
}`],changeDetection:1})};var p=[`*`];var S=class r{appearance=eZ(()=>({interactive:this.variant()===`text`||!this.interactive()||this.disabled()?!1:void 0,emission:this.variant()!==`text`&&this.interactive()&&!this.disabled()?this.color()===`primary`||this.color()===`grayscale`?`var(--bx-primary)`:`var(--bx-text-${this.color()})`:void 0}));a11y=p$1(ke);isAnimated=W$1(()=>!this.a11y.isReducedMotion());variant=L$1(`text`);color=L$1(`primary`);outlined=L$1(!1);elevated=L$1(!1);disabled=L$1(!1,{transform:Pe});interactive=L$1(!0,{transform:Pe});onClick(a){this.disabled()&&(a.preventDefault(),a.stopImmediatePropagation())}static ɵfac=function(e){return new(e||r)};static ɵcmp=gt$1({type:r,selectors:[[`bx-button`],[`button`,`bx-button`,``],[`a`,`bx-button`,``]],hostVars:13,hostBindings:function(e,n){e&1&&it(`click`,function(f){return n.onClick(f)}),e&2&&(Kt$1(`disabled`,n.disabled()?!0:null)(`aria-disabled`,n.disabled())(`tabindex`,n.disabled()?`-1`:null),XT(`bx-btn bx-btn-`+n.variant()+` bx-btn-color-`+n.color()),at(`bx-btn-is-outlined`,n.outlined())(`bx-btn-is-elevated`,n.elevated())(`bx-btn-animated`,n.isAnimated())(`bx-btn-non-interactive`,!n.interactive()))},inputs:{variant:[1,`variant`],color:[1,`color`],outlined:[1,`outlined`],elevated:[1,`elevated`],disabled:[1,`disabled`],interactive:[1,`interactive`]},ngContentSelectors:p,decls:2,vars:0,consts:[[1,`bx-btn-content-wrapper`]],template:function(e,n){e&1&&(yo(),Mc(0,`span`,0),bo(1),xc())},styles:[`
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
}`]})};var Y=Oe$1({sections:[{id:`Start`},{id:`Forms`},{id:`Primitives`},{id:`Navigation`},{id:`Icons`},{id:`Modals`},{id:`Notifications`},{id:`Tools`}]}),{withNav:O}=Y,Tt=e.map((e,n)=>O({path:e.id,loadComponent:()=>import(`./chunk-DhhTqzuW.js`).then(t=>t.ComponentDemo),title:`${e.title} \xB7 Blocks`,data:{componentId:e.id}},{label:e.title,breadcrumb:e.title,section:e.group,menu:!0,order:n})),ce=[{path:``,pathMatch:`full`,redirectTo:`home`},O({path:`home`,loadComponent:()=>import(`./chunk-DS7Jv8JF.js`).then(e=>e.Home),title:`Blocks`},{label:`Overview`,breadcrumb:`Home`,section:`Start`,menu:!0,root:!0,order:1}),O({path:`appearance`,loadComponent:()=>import(`./chunk-Bn5uQ5B6.js`).then(e=>e.Appearance),title:`Appearance · Blocks`},{label:`Appearance`,breadcrumb:`Appearance`,section:`Start`,menu:!0,order:2}),O({path:`components`,title:`Components · Blocks`,children:[{path:``,pathMatch:`full`,loadComponent:()=>import(`./chunk-DTpfMQDm.js`).then(e=>e.ComponentIndex)},...Tt]},{label:`All components`,breadcrumb:`Components`,section:`Start`,menu:!0,order:3}),O({path:`icon-catalog`,loadComponent:()=>import(`./chunk-Cd40teHu.js`).then(e=>e.IconCatalog),title:`Icon catalog · Blocks`},{label:`Icon catalog`,breadcrumb:`Icon catalog`,section:`Tools`,menu:!0,order:4}),O({path:`modal`,loadComponent:()=>import(`./chunk-Ch2Celg4.js`).then(e=>e.Modal),title:`Modal configurator · Blocks`},{label:`Modal configurator`,breadcrumb:`Modal configurator`,section:`Tools`,menu:!0,order:5}),O({path:`toastr`,loadComponent:()=>import(`./chunk-B4RNVTvV.js`).then(e=>e.Toastr),title:`Toast configurator · Blocks`},{label:`Toast configurator`,breadcrumb:`Toast configurator`,section:`Tools`,menu:!0,order:6}),{path:`glass`,pathMatch:`full`,redirectTo:`appearance`},{path:`**`,redirectTo:`components`}];(class e{static ɵfac=function(t){return new(t||e)};static ɵmod=Oe$2({type:e});static ɵinj=xe$2({imports:[h0.forRoot(ce),h0]})});var le={providers:[TS(),Dk(),Sc(()=>{let e=p$1(z$1),n=null;try{n=e.defaultView?.localStorage.getItem(`theme-palette`)??null}catch{}let t=p$1(Dr);t.palettes.some(i=>i.id===n)||t.setPalette(`orange`)}),d0(ce,f0({scrollPositionRestoration:`enabled`,anchorScrolling:`enabled`})),we(Y.config),rt({coreLibraryLoader:()=>import(`./chunk-CNLY_5RV.js`),languages:{typescript:()=>import(`./chunk-Da6TFjtL.js`),scss:()=>import(`./chunk--Sjxt33j.js`),xml:()=>import(`./chunk-Bs3bRvME.js`)}})]};var ft=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵcmp=gt$1({type:e,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return e})();var bt=new Set;var A;var At=(()=>{class e{_platform=p$1(xi);_nonce=p$1(Bl,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Nt}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&wt(t,this._nonce),this._matchMedia(t)}static ɵfac=function(i){return new(i||e)};static ɵprov=$({token:e,factory:e.ɵfac})}return e})();function wt(e,n){if(!bt.has(e))try{A||(A=document.createElement(`style`),n&&A.setAttribute(`nonce`,n),A.setAttribute(`type`,`text/css`),document.head.appendChild(A)),A.sheet&&(A.sheet.insertRule(`@media ${e.replace(/[{}]/g,``)} {body{ }}`,0),bt.add(e))}catch(t){console.error(t)}}function Nt(e){return{matches:e===`all`||e===``,media:e,addListener:()=>{},removeListener:()=>{}}}var _t=(()=>{class e{_mediaMatcher=p$1(At);_zone=p$1(G);_queries=new Map;_destroySubject=new ee$2;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return gt(rg(t)).some(r=>this._registerQuery(r).mql.matches)}observe(t){let r=gt(rg(t)).map(g=>this._registerQuery(g).observable),u=sl(r);return u=zi(u.pipe(Sn(1)),u.pipe(uv(1),Id(0))),u.pipe(fe$1(g=>{let M={matches:!1,breakpoints:{}};return g.forEach(({matches:U,query:Ot})=>{M.matches=M.matches||U,M.breakpoints[Ot]=U}),M}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),u={observable:new j$2(g=>{let M=U=>this._zone.run(()=>g.next(U));return i.addListener(M),()=>{i.removeListener(M)}}).pipe(ul(i),fe$1(({matches:g})=>({query:t,matches:g})),Qn(this._destroySubject)),mql:i};return this._queries.set(t,u),u}static ɵfac=function(i){return new(i||e)};static ɵprov=$({token:e,factory:e.ɵfac})}return e})();function gt(e){return e.map(n=>n.split(`,`)).reduce((n,t)=>n.concat(t)).map(n=>n.trim())}var Lt=(()=>{class e{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(i){return new(i||e)};static ɵprov=$({token:e,factory:e.ɵfac})}return e})();var vt=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵmod=Oe$2({type:e});static ɵinj=xe$2({providers:[Lt]})}return e})();var Dt=(()=>{class e{_platform=p$1(xi);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return Pt(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let i=It(Gt(t));if(i&&(yt(i)===-1||!this.isVisible(i)))return!1;let r=t.nodeName.toLowerCase(),u=yt(t);return t.hasAttribute(`contenteditable`)?u!==-1:r===`iframe`||r===`object`||this._platform.WEBKIT&&this._platform.IOS&&!Vt(t)?!1:r===`audio`?t.hasAttribute(`controls`)?u!==-1:!1:r===`video`?u===-1?!1:u!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,i){return jt(t)&&!this.isDisabled(t)&&(i?.ignoreInert||!t.closest?.(`[inert]`))&&(i?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(i){return new(i||e)};static ɵprov=$({token:e,factory:e.ɵfac})}return e})();function It(e){try{return e.frameElement}catch{return null}}function Pt(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects==`function`&&e.getClientRects().length)}function Ft(e){let n=e.nodeName.toLowerCase();return n===`input`||n===`select`||n===`button`||n===`textarea`}function Rt(e){return Ht(e)&&e.type==`hidden`}function Bt(e){return Ut(e)&&e.hasAttribute(`href`)}function Ht(e){return e.nodeName.toLowerCase()==`input`}function Ut(e){return e.nodeName.toLowerCase()==`a`}function xt(e){if(!e.hasAttribute(`tabindex`)||e.tabIndex===void 0)return!1;let n=e.getAttribute(`tabindex`);return!!(n&&!isNaN(parseInt(n,10)))}function yt(e){if(!xt(e))return null;let n=parseInt(e.getAttribute(`tabindex`)||``,10);return isNaN(n)?-1:n}function Vt(e){let n=e.nodeName.toLowerCase(),t=n===`input`&&e.type;return t===`text`||t===`password`||n===`select`||n===`textarea`}function jt(e){return Rt(e)?!1:Ft(e)||Bt(e)||e.hasAttribute(`contenteditable`)||xt(e)}function Gt(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var pe=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,t,i,r,u=!1,g){this._element=n,this._checker=t,this._ngZone=i,this._document=r,this._injector=g,u||this.attachAnchors()}destroy(){let n=this._startAnchor,t=this._endAnchor;n&&(n.removeEventListener(`focus`,this.startAnchorListener),n.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let t=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let i=this._getFirstTabbableElement(t);return i?.focus(n),!!i}return t.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let t=this._getRegionBoundary(`start`);return t&&t.focus(n),!!t}focusLastTabbableElement(n){let t=this._getRegionBoundary(`end`);return t&&t.focus(n),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let i=0;i<t.length;i++){let r=t[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let i=t.length-1;i>=0;i--){let r=t[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add(`cdk-visually-hidden`),n.classList.add(`cdk-focus-trap-anchor`),n.setAttribute(`aria-hidden`,`true`),n}_toggleAnchorTabIndex(n,t){n?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){Zt(n,{injector:this._injector})}};var Et=(()=>{class e{_checker=p$1(Dt);_ngZone=p$1(G);_document=p$1(z$1);_injector=p$1(Q$2);constructor(){p$1(ng).load(ft)}create(t,i=!1){return new pe(t,this._checker,this._ngZone,this._document,i,this._injector)}static ɵfac=function(i){return new(i||e)};static ɵprov=$({token:e,factory:e.ɵfac})}return e})();var me=(()=>{class e{_elementRef=p$1(ie$1);_focusTrapFactory=p$1(Et);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(t){this.focusTrap&&(this.focusTrap.enabled=t)}autoCapture=!1;constructor(){p$1(xi).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(t){let i=t.autoCapture;i&&!i.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=B5(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function(i){return new(i||e)};static ɵdir=q$1({type:e,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,Pe],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,Pe]},exportAs:[`cdkTrapFocus`],features:[Ye]})}return e})();var C=(function(e){return e[e.NONE=0]=`NONE`,e[e.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,e[e.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,e})(C||{});var Ct=`cdk-high-contrast-black-on-white`;var Mt=`cdk-high-contrast-white-on-black`;var ue=`cdk-high-contrast-active`;var kt=(()=>{class e{_platform=p$1(xi);_hasCheckedHighContrastMode=!1;_document=p$1(z$1);_breakpointSubscription;constructor(){this._breakpointSubscription=p$1(_t).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return C.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(t):null,u=(r&&r.backgroundColor||``).replace(/ /g,``);switch(t.remove(),u){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return C.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return C.BLACK_ON_WHITE}return C.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(ue,Ct,Mt),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===C.BLACK_ON_WHITE?t.add(ue,Ct):i===C.WHITE_ON_BLACK&&t.add(ue,Mt)}}static ɵfac=function(i){return new(i||e)};static ɵprov=$({token:e,factory:e.ɵfac})}return e})();var he=(()=>{class e{constructor(){p$1(kt)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(i){return new(i||e)};static ɵmod=Oe$2({type:e});static ɵinj=xe$2({imports:[vt]})}return e})();var Q=class e{static ɵfac=function(t){return new(t||e)};static ɵcmp=gt$1({type:e,selectors:[[`app-blocks-logo`]],hostAttrs:[`aria-hidden`,`true`],decls:98,vars:0,consts:[[`width`,`805`,`height`,`776`,`viewBox`,`0 0 805 776`,`fill`,`none`,`xmlns`,`http://www.w3.org/2000/svg`],[`d`,`M27.0656 12.8256H776.066V761.826H27.0656V12.8256Z`,`fill`,`url(#paint0_radial_2_133)`],[`filter`,`url(#filter0_f_2_133)`],[`d`,`M647.919 48.2668L90.9866 106.803C64.6221 109.574 45.4959 133.193 48.2669 159.557L103.458 684.665C106.229 711.029 129.848 730.155 156.212 727.384L713.145 668.848C739.509 666.077 758.635 642.459 755.864 616.094L700.673 90.9865C697.902 64.6221 674.283 45.4958 647.919 48.2668Z`,`fill`,`black`,`fill-opacity`,`0.48`],[`d`,`M647.919 48.2668L90.9866 106.803C64.6221 109.574 45.4959 133.193 48.2669 159.557L103.458 684.665C106.229 711.029 129.848 730.155 156.212 727.384L713.145 668.848C739.509 666.077 758.635 642.459 755.864 616.094L700.673 90.9865C697.902 64.6221 674.283 45.4958 647.919 48.2668Z`,`fill`,`url(#paint1_linear_2_133)`,`stroke-width`,`3`,`stroke`,`url(#paint2_linear_2_133)`],[`id`,`mask0_2_133`,`maskUnits`,`userSpaceOnUse`,`x`,`48`,`y`,`48`,`width`,`709`,`height`,`680`,2,`mask-type`,`luminance`],[`d`,`M647.919 48.2668L90.9866 106.803C64.6221 109.574 45.4959 133.193 48.2669 159.557L103.458 684.665C106.229 711.029 129.848 730.155 156.212 727.384L713.145 668.848C739.509 666.077 758.635 642.459 755.864 616.094L700.673 90.9865C697.902 64.6221 674.283 45.4958 647.919 48.2668Z`,`fill`,`white`],[`mask`,`url(#mask0_2_133)`],[`d`,`M695.656 43.2495L43.2495 111.82L108.475 732.402L760.882 663.831L695.656 43.2495Z`,`fill`,`url(#paint3_radial_2_133)`],[`filter`,`url(#filter1_f_2_133)`],[`d`,`M393.862 300.203C430.447 313.452 484.256 308.802 528.698 282.009`,`stroke-width`,`64`,`stroke-linecap`,`round`,`stroke`,`var(--bx-primary)`,`stroke-opacity`,`0.1`],[`d`,`M393.862 300.203C430.447 313.452 484.256 308.802 528.698 282.009`,`stroke-width`,`13`,`stroke-linecap`,`round`,`stroke`,`url(#paint4_linear_2_133)`],[`d`,`M401.191 293.4C436.572 304.764 483.21 298.856 521.895 274.68`,`stroke-width`,`2.5`,`stroke-linecap`,`round`,`stroke`,`color-mix(in srgb, var(--bx-primary) 8%, white)`,`stroke-opacity`,`0.72`],[`d`,`M87.6744 199.658C245.29 120.75 465.028 87.5996 647.647 112.648`,`stroke-width`,`2.5`,`stroke`,`url(#paint5_linear_2_133)`],[`d`,`M100.968 211.332C241.622 143.257 430.531 113.347 582.74 126.508`,`stroke-width`,`1.2`,`stroke`,`white`,`stroke-opacity`,`0.12`],[`d`,`M186.583 652.801C342.403 671.617 549.526 642.809 691.594 578.607`,`stroke-width`,`1.4`,`stroke`,`white`,`stroke-opacity`,`0.1`],[`d`,`M92.7128 113.66L647.656 55.333C670.725 52.9084 691.391 69.6439 693.816 92.7128L748.798 615.831C751.223 638.9 734.487 659.567 711.418 661.991L156.475 720.318C133.406 722.743 112.74 706.007 110.315 682.939L55.3331 159.82C52.9084 136.751 69.6439 116.085 92.7128 113.66Z`,`stroke-width`,`1.2`,`stroke`,`white`,`stroke-opacity`,`0.18`],[`id`,`mask1_2_133`,`maskUnits`,`userSpaceOnUse`,`x`,`55`,`y`,`55`,`width`,`695`,`height`,`666`,2,`mask-type`,`alpha`],[`d`,`M647.656 55.3331L92.7128 113.66C69.6439 116.085 52.9084 136.751 55.3331 159.82L110.315 682.939C112.74 706.008 133.406 722.743 156.475 720.318L711.418 661.991C734.487 659.567 751.223 638.9 748.798 615.831L693.816 92.7128C691.391 69.6439 670.725 52.9085 647.656 55.3331Z`,`fill`,`#D9D9D9`],[`mask`,`url(#mask1_2_133)`],[`filter`,`url(#filter2_f_2_133)`],[`d`,`M532.066 324.826C616.013 324.826 684.066 256.773 684.066 172.826C684.066 88.8783 616.013 20.8256 532.066 20.8256C448.118 20.8256 380.066 88.8783 380.066 172.826C380.066 256.773 448.118 324.826 532.066 324.826Z`,`fill`,`var(--bx-primary)`,`fill-opacity`,`0.1`],[`d`,`M532.066 291.826C597.787 291.826 651.066 238.548 651.066 172.826C651.066 107.104 597.787 53.8256 532.066 53.8256C466.344 53.8256 413.066 107.104 413.066 172.826C413.066 238.548 466.344 291.826 532.066 291.826Z`,`fill`,`url(#paint6_radial_2_133)`,`stroke-width`,`3.5`,`stroke`,`url(#paint7_linear_2_133)`],[`d`,`M640.066 172.826C640.066 232.472 591.712 280.826 532.066 280.826C472.419 280.826 424.066 232.472 424.066 172.826C424.066 113.179 472.419 64.8256 532.066 64.8256C591.712 64.8256 640.066 113.179 640.066 172.826Z`,`stroke-width`,`1.2`,`stroke`,`white`,`stroke-opacity`,`0.22`],[`d`,`M522.066 255.826C567.905 255.826 605.066 222.247 605.066 180.826C605.066 139.404 567.905 105.826 522.066 105.826C476.226 105.826 439.066 139.404 439.066 180.826C439.066 222.247 476.226 255.826 522.066 255.826Z`,`fill`,`url(#paint8_radial_2_133)`],[`filter`,`url(#filter3_f_2_133)`],[`d`,`M447.066 188.826C471.066 140.826 506.066 117.826 538.066 134.826C565.066 149.826 580.066 184.826 616.066 168.826`,`stroke-width`,`34`,`stroke-linecap`,`round`,`stroke`,`var(--bx-primary)`,`stroke-opacity`,`0.74`],[`d`,`M447.066 188.826C471.066 140.826 506.066 117.826 538.066 134.826C565.066 149.826 580.066 184.826 616.066 168.826`,`stroke-width`,`12`,`stroke-linecap`,`round`,`stroke`,`url(#paint9_linear_2_133)`],[`d`,`M456.066 183.826C477.066 146.826 507.066 129.826 532.066 143.826C556.066 156.826 571.066 184.826 600.066 172.826`,`stroke-width`,`2.4`,`stroke-linecap`,`round`,`stroke`,`white`,`stroke-opacity`,`0.86`],[`d`,`M460.066 123.826C478.066 101.826 505.066 88.8256 532.066 85.8256`,`stroke-width`,`5`,`stroke-linecap`,`round`,`stroke`,`white`,`stroke-opacity`,`0.7`],[`d`,`M465.066 130.826C478.066 117.826 493.066 108.826 508.066 103.826`,`stroke-width`,`2`,`stroke-linecap`,`round`,`stroke`,`white`,`stroke-opacity`,`0.52`],[`d`,`M482.066 111.326C484.551 111.326 486.566 109.311 486.566 106.826C486.566 104.34 484.551 102.326 482.066 102.326C479.58 102.326 477.566 104.34 477.566 106.826C477.566 109.311 479.58 111.326 482.066 111.326Z`,`fill`,`white`,`fill-opacity`,`0.86`],[`id`,`filter0_f_2_133`,`x`,`0`,`y`,`0`,`width`,`804.131`,`height`,`775.651`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`flood-opacity`,`0`,`result`,`BackgroundImageFix`],[`mode`,`normal`,`in`,`SourceGraphic`,`in2`,`BackgroundImageFix`,`result`,`shape`],[`stdDeviation`,`24`,`result`,`effect1_foregroundBlur_2_133`],[`id`,`filter1_f_2_133`,`x`,`281.853`,`y`,`170.004`,`width`,`358.85`,`height`,`249.357`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`stdDeviation`,`40`,`result`,`effect1_foregroundBlur_2_133`],[`id`,`filter2_f_2_133`,`x`,`300.066`,`y`,`-59.1744`,`width`,`464`,`height`,`464`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`id`,`filter3_f_2_133`,`x`,`406.062`,`y`,`88.2501`,`width`,`251.008`,`height`,`141.579`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`stdDeviation`,`12`,`result`,`effect1_foregroundBlur_2_133`],[`id`,`paint0_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(401.566 349.876) scale(434.42)`],[`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.105`],[`offset`,`0.56`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.025`],[`offset`,`1`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0`],[`id`,`paint1_linear_2_133`,`x1`,`98.0511`,`y1`,`131.158`,`x2`,`667.589`,`y2`,`698.833`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`white`,`stop-opacity`,`0.2`],[`offset`,`0.42`,`stop-color`,`white`,`stop-opacity`,`0.075`],[`offset`,`1`,`stop-color`,`white`,`stop-opacity`,`0.035`],[`id`,`paint2_linear_2_133`,`x1`,`43.2495`,`y1`,`111.82`,`x2`,`731.541`,`y2`,`698.267`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`white`,`stop-opacity`,`0.82`],[`offset`,`0.25`,`stop-color`,`white`,`stop-opacity`,`0.3`],[`offset`,`0.55`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.52`],[`offset`,`0.8`,`stop-color`,`white`,`stop-opacity`,`0.18`],[`offset`,`1`,`stop-color`,`white`,`stop-opacity`,`0.58`],[`id`,`paint3_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(537.769 235.526) rotate(-6) scale(439.52 418.08)`],[`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.4`],[`offset`,`0.3`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.2`],[`offset`,`0.7`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.055`],[`id`,`paint4_linear_2_133`,`x1`,`393.443`,`y1`,`296.225`,`x2`,`438.356`,`y2`,`354.826`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0`],[`offset`,`0.4`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.44`],[`offset`,`0.68`,`stop-color`,`color-mix(in srgb, var(--bx-primary) 44%, white)`,`stop-opacity`,`0.8`],[`id`,`paint5_linear_2_133`,`x1`,`81.9226`,`y1`,`144.933`,`x2`,`218.003`,`y2`,`363.352`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`white`,`stop-opacity`,`0.78`],[`offset`,`0.48`,`stop-color`,`white`,`stop-opacity`,`0.2`],[`offset`,`1`,`stop-color`,`white`,`stop-opacity`,`0`],[`id`,`paint6_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(486.846 113.326) scale(195.16)`],[`stop-color`,`white`,`stop-opacity`,`0.54`],[`offset`,`0.28`,`stop-color`,`white`,`stop-opacity`,`0.24`],[`offset`,`0.7`,`stop-color`,`white`,`stop-opacity`,`0.075`],[`offset`,`1`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.16`],[`id`,`paint7_linear_2_133`,`x1`,`429.726`,`y1`,`63.3456`,`x2`,`639.166`,`y2`,`291.826`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`white`,`stop-opacity`,`0.94`],[`offset`,`0.3`,`stop-color`,`white`,`stop-opacity`,`0.36`],[`offset`,`0.66`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.56`],[`offset`,`1`,`stop-color`,`white`,`stop-opacity`,`0.82`],[`id`,`paint8_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(508.786 165.826) scale(112.88 102)`],[`stop-color`,`color-mix(in srgb, var(--bx-primary) 10%, white)`,`stop-opacity`,`0.96`],[`offset`,`0.18`,`stop-color`,`color-mix(in srgb, var(--bx-primary) 52%, white)`,`stop-opacity`,`0.9`],[`offset`,`0.48`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.66`],[`id`,`paint9_linear_2_133`,`x1`,`447.066`,`y1`,`135.211`,`x2`,`498.003`,`y2`,`236.364`,`gradientUnits`,`userSpaceOnUse`],[`offset`,`0.34`,`stop-color`,`color-mix(in srgb, var(--bx-primary) 68%, white)`,`stop-opacity`,`0.88`],[`offset`,`0.58`,`stop-color`,`white`,`stop-opacity`,`0.98`],[`offset`,`0.84`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.86`]],template:function(t,i){t&1&&(ey(),Mc(0,`svg`,0),$s(1,`path`,1),Mc(2,`g`,2),$s(3,`path`,3),xc(),$s(4,`path`,4),Mc(5,`mask`,5),$s(6,`path`,6),xc(),Mc(7,`g`,7),$s(8,`path`,8),Mc(9,`g`,9),$s(10,`path`,10),xc(),$s(11,`path`,11)(12,`path`,12)(13,`path`,13)(14,`path`,14)(15,`path`,15),xc(),$s(16,`path`,16),Mc(17,`mask`,17),$s(18,`path`,18),xc(),Mc(19,`g`,19)(20,`g`,20),$s(21,`path`,21),xc()(),$s(22,`path`,22)(23,`path`,23)(24,`path`,24),Mc(25,`g`,25),$s(26,`path`,26),xc(),$s(27,`path`,27)(28,`path`,28)(29,`path`,29)(30,`path`,30)(31,`path`,31),Mc(32,`defs`)(33,`filter`,32),$s(34,`feFlood`,33)(35,`feBlend`,34)(36,`feGaussianBlur`,35),xc(),Mc(37,`filter`,36),$s(38,`feFlood`,33)(39,`feBlend`,34)(40,`feGaussianBlur`,37),xc(),Mc(41,`filter`,38),$s(42,`feFlood`,33)(43,`feBlend`,34)(44,`feGaussianBlur`,37),xc(),Mc(45,`filter`,39),$s(46,`feFlood`,33)(47,`feBlend`,34)(48,`feGaussianBlur`,40),xc(),Mc(49,`radialGradient`,41),$s(50,`stop`,42)(51,`stop`,43)(52,`stop`,44),xc(),Mc(53,`linearGradient`,45),$s(54,`stop`,46)(55,`stop`,47)(56,`stop`,48),xc(),Mc(57,`linearGradient`,49),$s(58,`stop`,50)(59,`stop`,51)(60,`stop`,52)(61,`stop`,53)(62,`stop`,54),xc(),Mc(63,`radialGradient`,55),$s(64,`stop`,56)(65,`stop`,57)(66,`stop`,58)(67,`stop`,44),xc(),Mc(68,`linearGradient`,59),$s(69,`stop`,60)(70,`stop`,61)(71,`stop`,62)(72,`stop`,44),xc(),Mc(73,`linearGradient`,63),$s(74,`stop`,64)(75,`stop`,65)(76,`stop`,66),xc(),Mc(77,`radialGradient`,67),$s(78,`stop`,68)(79,`stop`,69)(80,`stop`,70)(81,`stop`,71),xc(),Mc(82,`linearGradient`,72),$s(83,`stop`,73)(84,`stop`,74)(85,`stop`,75)(86,`stop`,76),xc(),Mc(87,`radialGradient`,77),$s(88,`stop`,78)(89,`stop`,79)(90,`stop`,80)(91,`stop`,44),xc(),Mc(92,`linearGradient`,81),$s(93,`stop`,60)(94,`stop`,82)(95,`stop`,83)(96,`stop`,84)(97,`stop`,44),xc()()())},styles:[`
[_nghost-%COMP%] {
  display: block;
  flex: none;
}
svg[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  height: 100%;
}`]})};var zt=[`menuToggle`];var $t=()=>({exact:!0});var Wt=(e,n)=>n.id;var Kt=(e,n)=>n.route;function qt(e,n){if(e&1){let t=kT();It$1(0,`header`,8)(1,`a`,9),it(`click`,function(){Uv(t);let r=ur();return $v(r.closeMobileMenu())}),fi(2,`app-blocks-logo`,10),It$1(3,`span`),Co(4),Bt$1()(),It$1(5,`button`,11,0),it(`click`,function(){Uv(t);let r=ur();return $v(r.toggleMobileMenu())}),It$1(7,`span`,12),fi(8,`span`,13)(9,`span`,13)(10,`span`,13),Bt$1()()(),It$1(11,`button`,14),it(`click`,function(){Uv(t);let r=ur();return $v(r.closeMobileMenu())}),Bt$1()}if(e&2){let t=ur();jt$1(4),Nc(t.title()),jt$1(),at(`is-open`,t.isHamburgerMenuOpen()),Kt$1(`aria-expanded`,t.isHamburgerMenuOpen())(`aria-label`,t.isHamburgerMenuOpen()?`Close navigation`:`Open navigation`),jt$1(6),at(`navigation-scrim-open`,t.isHamburgerMenuOpen()),Kt$1(`aria-hidden`,t.isHamburgerMenuOpen()?null:`true`)(`inert`,t.isHamburgerMenuOpen()?null:``)}}function Yt(e,n){if(e&1&&(It$1(0,`div`,2)(1,`a`,15),fi(2,`app-blocks-logo`,10),It$1(3,`span`),Co(4),Bt$1()(),It$1(5,`span`),Co(6,`Component library`),Bt$1()()),e&2){let t=ur();jt$1(4),Nc(t.title())}}function Qt(e,n){if(e&1){let t=kT();It$1(0,`a`,17),it(`click`,function(){Uv(t);let r=ur(2);return $v(r.closeMobileMenu())}),Co(1),Bt$1()}if(e&2){let t=n.$implicit;vo(`routerLink`,t.route)(`routerLinkActiveOptions`,gk(3,$t)),jt$1(),hi(` `,t.label,` `)}}function Xt(e,n){if(e&1&&(It$1(0,`section`,6)(1,`h2`),Co(2),Bt$1(),Cp(3,Qt,2,4,`a`,16,Kt),Bt$1()),e&2){let t=n.$implicit;Kt$1(`aria-label`,t.title),jt$1(2),Nc(t.title),jt$1(),wp(t.items)}}function Jt(e,n){e&1&&(It$1(0,`p`,7),Co(1,`No matching pages.`),Bt$1())}var X=class e{dimensions=p$1(Hu);navigation=p$1(_$1);isHamburgerMenuOpen=S$1(!1);isHamburgerMenu=W$1(()=>this.dimensions.dimensions().width<=this.dimensions.breakpoints.lg);query=S$1(``);groups=W$1(()=>{let n=this.query().trim().toLowerCase();return this.navigation.menuGroups().map(t=>s(r({},t),{items:t.items.filter(i=>!n||`${i.label} ${t.title}`.toLowerCase().includes(n))})).filter(t=>t.items.length>0)});title=L$1.required();scrollLock=p$1(EE);scrollLockId=e_();menuToggle=Bz(`menuToggle`,{read:ie$1});constructor(){Te(()=>{this.isHamburgerMenuOpen()?this.scrollLock.disableScroll(this.scrollLockId,{handleTouchInput:!1}):this.scrollLock.enableScroll(this.scrollLockId)}),p$1(J$4).onDestroy(()=>this.scrollLock.enableScroll(this.scrollLockId)),Te(()=>{this.isHamburgerMenu()||this.isHamburgerMenuOpen.set(!1)})}toggleMobileMenu(){this.menuToggle()?.nativeElement.focus({preventScroll:!0}),this.isHamburgerMenuOpen.update(n=>!n)}closeMobileMenu(){this.isHamburgerMenuOpen.set(!1)}static ɵfac=function(t){return new(t||e)};static ɵcmp=gt$1({type:e,selectors:[[`app-sidenav`]],viewQuery:function(t,i){t&1&&WC(i.menuToggle,zt,5,ie$1),t&2&&PT()},inputs:{title:[1,`title`]},decls:9,vars:12,consts:[[`menuToggle`,``],[`bxSurface`,``,`id`,`component-navigation`,`tabindex`,`-1`,1,`sidebar`,3,`keydown.escape`,`cdkTrapFocus`,`cdkTrapFocusAutoCapture`],[1,`sidebar-header`],[`placeholder`,`Search pages...`,1,`navigation-search`,3,`ngModelChange`,`ngModel`],[1,`sidebar-scroll`],[`aria-label`,`Component documentation`],[1,`navigation-group`],[1,`empty-navigation`],[`bxSurface`,``,1,`mobile-header`],[`routerLink`,`/home`,1,`brand`,3,`click`],[1,`brand-logo`],[`type`,`button`,`aria-controls`,`component-navigation`,1,`menu-toggle`,3,`click`],[`aria-hidden`,`true`,1,`hamburger-icon`],[1,`hamburger-line`],[`type`,`button`,`aria-label`,`Close navigation`,`tabindex`,`-1`,1,`navigation-scrim`,3,`click`],[`routerLink`,`/home`,1,`brand`],[`bxSurface`,``,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,3,`routerLink`,`routerLinkActiveOptions`],[`bxSurface`,``,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,3,`click`,`routerLink`,`routerLinkActiveOptions`]],template:function(t,i){t&1&&(lr(0,qt,12,9),It$1(1,`aside`,1),it(`keydown.escape`,function(){return i.closeMobileMenu()}),lr(2,Yt,7,1,`div`,2),It$1(3,`bx-search-input`,3),yx(),it(`ngModelChange`,function(u){return i.query.set(u)}),Bt$1(),It$1(4,`div`,4)(5,`nav`,5),Cp(6,Xt,5,2,`section`,6,Wt,!1,Jt,2,0,`p`,7),Bt$1()()()),t&2&&(cr(i.isHamburgerMenu()?0:-1),jt$1(),at(`mobile-sidebar`,i.isHamburgerMenu())(`mobile-sidebar-open`,!i.isHamburgerMenu()||i.isHamburgerMenuOpen()),vo(`cdkTrapFocus`,i.isHamburgerMenu()&&i.isHamburgerMenuOpen())(`cdkTrapFocusAutoCapture`,i.isHamburgerMenu()&&i.isHamburgerMenuOpen()),Kt$1(`aria-hidden`,i.isHamburgerMenu()&&!i.isHamburgerMenuOpen()?`true`:null)(`inert`,i.isHamburgerMenu()&&!i.isHamburgerMenuOpen()?``:null),jt$1(),cr(i.isHamburgerMenu()?-1:2),jt$1(),vo(`ngModel`,i.query()),Cx(),jt$1(3),wp(i.groups()))},dependencies:[he,me,l5,i5,lN,te$1,_u,c0,Mr,Q],styles:[`
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
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--%NS%bx-text-primary);
  text-decoration: none;
}
.brand-logo[_ngcontent-%COMP%] {
  flex: none;
  width: 2.25rem;
  height: 2.25rem;
}
.sidebar-header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {
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
}`]})};var en=()=>({useTopLayer:!0});var tn=(e,n)=>n.id;function nn(e,n){if(e&1){let t=kT();It$1(0,`bx-menu-item`,16),it(`action`,function(){let r=Uv(t).$implicit,u=ur(2);return $v(u.theme.setPalette(r.id))}),Bt$1()}if(e&2){let t=n.$implicit,i=ur(2);vo(`label`,t.label)(`icon`,i.selectedThemeId()===t.id?`check`:void 0)}}function rn(e,n){if(e&1&&(It$1(0,`bx-menu`),Cp(1,nn,1,2,`bx-menu-item`,15,tn),Bt$1()),e&2){let t=ur();jt$1(),wp(t.availableThemes)}}var J=class e{document=p$1(z$1);highlight=p$1(V);theme=p$1(Dr);availableThemes=this.theme.palettes;selectedThemeId=this.theme.palette;selectedThemeLabel=this.theme.paletteLabel;isDarkMode=W$1(()=>this.theme.activeTheme()===`dark`);constructor(){Te(()=>{let n=this.isDarkMode();this.document.documentElement.setAttribute(`data-theme`,n?`dark`:`light`),this.document.defaultView&&this.highlight.setTheme(n?`assets/styles/vs2015.css`:`assets/styles/github.css`)})}toggleTheme(){this.theme.setApplicationTheme(this.isDarkMode()?`light`:`dark`)}static ɵfac=function(t){return new(t||e)};static ɵcmp=gt$1({type:e,selectors:[[`app-root`]],decls:22,vars:6,consts:[[`themeMenu`,``],[`href`,`#main-content`,1,`skip-link`],[1,`app-container`],[`title`,`Blocks`],[1,`app-main`],[`data-bx-light-scope`,``,`bxSurface`,``,`aria-label`,`Playground appearance`,1,`app-toolbar`,3,`bxOverlayContext`],[1,`toolbar-label`],[1,`toolbar-actions`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`routerLink`,`/appearance`,`aria-label`,`Configure appearance for the whole playground`,1,`appearance-button`],[`name`,`sliders-horizontal`,`size`,`20`],[`bx-button`,``,`type`,`button`,`bxTransition`,`fade`,`placement`,`bottom`,`variant`,`tonal`,`color`,`grayscale`,`aria-label`,`Choose theme palette`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`theme-mode-toggle`,3,`click`],[`size`,`20`,3,`name`],[`id`,`main-content`,`tabindex`,`-1`,1,`app-content-container`],[3,`label`,`icon`],[3,`action`,`label`,`icon`]],template:function(t,i){if(t&1&&(It$1(0,`a`,1),Co(1,`Skip to content`),Bt$1(),It$1(2,`div`,2),fi(3,`app-sidenav`,3),It$1(4,`div`,4)(5,`header`,5)(6,`span`,6),Co(7,`Component playground`),Bt$1(),It$1(8,`div`,7)(9,`a`,8),fi(10,`bx-icon`,9),It$1(11,`span`),Co(12,`Appearance`),Bt$1()(),It$1(13,`button`,10),Co(14),fi(15,`bx-icon`,11),Bt$1(),It$1(16,`button`,12),it(`click`,function(){return i.toggleTheme()}),fi(17,`bx-icon`,13),Bt$1()()(),It$1(18,`main`,14),fi(19,`router-outlet`),Bt$1()()(),BC(20,rn,3,0,`ng-template`,null,0,wk)),t&2){let r=LT(21);jt$1(5),vo(`bxOverlayContext`,gk(5,en)),jt$1(8),vo(`bxDropdown`,r),jt$1(),Nc(i.selectedThemeLabel()),jt$1(2),Kt$1(`aria-label`,i.isDarkMode()?`Switch to light theme`:`Switch to dark theme`),jt$1(),vo(`name`,i.isDarkMode()?`sun`:`moon`)}},dependencies:[Dm,_u,X,S,nd,o_,s_,l_,u_,Mr],styles:[`
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
}`]})};EA(J,s(r({},le),{providers:[Dk(),...le.providers]})).catch(e=>console.error(e));export{ht as a,K$1 as c,h$1 as d,te$1 as f,j as i,Z as l,le$1 as n,e as o,X$1 as p,L as r,J$2 as s,S as t,O$1 as u};