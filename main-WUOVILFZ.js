import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{$n as uw,An as pr,At as _e$1,B as Lu,Bn as st,Cn as on,Dn as pI,Dt as ZM,En as oy,Et as ZG,F as K$3,Fn as rs,G as Oe$2,Gn as tg,H as Mt,Hn as sy,I as K0,It as cN,J as P,Jn as uY,Jt as fe$1,Kn as ts,Ln as rw,M as Ji,Mn as qc,Mt as aA,N as Jt,Nt as at,O as I$1,On as pY,P as Ju,Pn as ra,Pt as bS,Q as Q0,Qn as ut,Qt as hr,R as Lk,Rn as rx,Rt as cw,S as Fp,St as YE,T as Gw,Tn as ox,Tt as ZE,U as Ne,Un as tA,Ut as f,V as Mo,Vt as dd,W as Np,Wn as te$3,Wt as fE,X as Pm,Xn as um,Yn as ue$2,Yt as fr,Zn as un,_ as EE,a as Ai,an as jd,ar as wk,at as Tt,b as En,bn as ns,br as zr,bt as Y$1,c as B$1,cn as ko,cr as xe$2,ct as V$1,d as Bc,dn as lt,dr as yE,dt as Vw,en as is,f as C,fr as yi,ft as WE,gt as X0,h as Dt,hn as mk,hr as z4,ht as We$1,i as $t,in as jc,ir as we$1,it as Tr,k as Ir,kn as pe$1,kt as _E,l as BO,ln as lR,lr as xo,m as DE,mt as WN,n as $c,nr as vs,o as Ar,on as je$1,ot as Un,p as Ck,pt as WG,q as Op,qn as uO,r as $e$1,rn as jO,rr as vy,rt as To,s as At,sn as ki,sr as x,st as Ut,t as $,tr as vi,tt as Se$1,u as B_,un as ld,ur as xt,ut as Vd,v as Ee,vn as ne$1,vr as zc,w as GG,wn as ot,x as Fc,xn as oK,xt as Y0,y as Eg,zn as sA,zt as dO}from"./chunk-D44OVyuP.js";var y=new C(`NAVIGATION_CONFIG`);var K$2=new C(`NAVIGATION_ACCESS_ADAPTER`);var _$1=class o{router=f(on);config=f(y,{optional:!0});i18n=f(ts,{optional:!0});accessAdapter=f(K$2,{optional:!0});navEnd=z4(this.router.events.pipe($e$1(n=>n instanceof At)));current=K$3(()=>(this.navEnd(),this.i18n?.version?.(),this.resolveCurrent(this.router.routerState.snapshot.root)));routeBase=K$3(()=>this.accessAdapter?.resolveBaseRoute());routes=K$3(()=>(this.i18n?.version?.(),this.extractRoutes(this.router.config)));baseRoute=K$3(()=>{let n=this.routes(),e=this.routeBase(),t,r=d=>{for(let s of d){if(s.data?.root&&(t||(t=s.route),e&&s.route.startsWith(e)))return s.route;if(s.children?.length){let a=r(s.children);if(a)return a}}};return r(n)??t??e});menu=K$3(()=>this.buildMenu(this.routes()));menuGroups=K$3(()=>{let n=[...this.config?.sections??[]].sort((t,r)=>(t.order??Number.POSITIVE_INFINITY)-(r.order??Number.POSITIVE_INFINITY)),e=new Map(n.map(t=>[t.id,{id:t.id,title:t.title??t.id,items:[]}]));for(let t of this.flattenRoutes(this.menu())){if(!t.visible||t.data?.menu===!1)continue;let r$2=t.section??``,i=e.get(r$2);i||(i={id:r$2,title:r$2,items:[]},e.set(r$2,i)),i.items.push(s(r({},t),{children:void 0}))}return[...e.values()].filter(t=>t.items.length>0)});navigateBack(){let n=this.current().breadcrumbs;if(n.length>1){let e=n[n.length-2];this.router.navigateByUrl(e.route)}else this.router.navigateByUrl(this.routeBase()??`/`)}extractRoutes(n,e=[]){let t=[];for(let r of n){if(r.redirectTo||this.accessAdapter&&!this.accessAdapter.canAccessMenu(r.data??{}))continue;let i=r.path??``,d=i?[...e,i]:[...e],s=`/`+d.filter(Boolean).join(`/`),a=r.children?.length?this.extractRoutes(r.children,d):[],c=r.data?.nav;if(!c){t.push(...a);continue}let I={id:s,route:s,label:this.resolveNavText(c.label,{snapshot:void 0})??``,icon:c.icon,section:c.section,visible:c.visible?c.visible():!0,data:c,children:a};t.push(I)}return this.sortNavigationItems(t)}resolveCurrent(n){let e=n,t;for(;e;){let f=e.children.find(m=>m.outlet===`primary`)??null;if(!f){t=e;break}e=f}if(!t)return{breadcrumbs:[]};let r=t.pathFromRoot.flatMap(f=>f.url.map(m=>m.path)).filter(Boolean),i=[],d=this.flattenRoutes(this.routes()),s=``;for(let f of r){s+=`/`+f;let m=this.matchRouteToUrl(d,s);if(m&&m.data&&!m.data.hidden){let O={snapshot:t},C=this.resolveNavText(m.data.breadcrumb,O)??this.resolveNavText(m.data.label,O);C&&i[i.length-1]?.label!==C&&i.push({label:C,route:s})}}let a=t.routeConfig?.data?.nav,c=`/`+r.join(`/`),I;return a&&!a.hidden&&(I={id:c,route:c,label:this.resolveNavText(a.label,{snapshot:t})??``,icon:a.icon,section:a.section,visible:a.visible?a.visible():!0,data:a}),{current:I,breadcrumbs:i}}buildMenu(n){return n.map(e=>{let t=this.buildMenu(e.children??[]);return!(e.visible&&e.data?.menu!==!1)&&!t.length?null:s(r({},e),{children:t})}).filter(e=>e!==null)}sortNavigationItems(n){let e=this.config?.sortItems;return[...n].sort((t,r)=>{if(e)return e(t,r);let i=t.data?.order??Number.POSITIVE_INFINITY,d=r.data?.order??Number.POSITIVE_INFINITY;return i!==d?i-d:t.label.localeCompare(r.label)})}matchRouteToUrl(n,e){return n.find(r=>r.route===e)||n.find(r=>r.route.includes(`:`)?new RegExp(`^`+r.route.replace(/:[^\s/]+/g,`([^/]+)`)+`$`).test(e):!1)}flattenRoutes(n){return n.reduce((e,t)=>(e.push(t),t.children&&e.push(...this.flattenRoutes(t.children)),e),[])}resolveNavText(n,e){if(!n)return;let t=typeof n==`function`?n(e):n;return ns(t)?this.i18n?.translate(t.key,{route:e.snapshot}):t}static ɵfac=function(e){return new(e||o)};static ɵprov=x({token:o,factory:o.ɵfac,providedIn:`root`})};var H$3=(o,n)=>n.route;function J$2(o,n){if(o&1&&(Mt(0,`span`,1),ko(1),$t()),o&2){let e=pr().$implicit;Ut(),zc(e.label)}}function Q$1(o,n){if(o&1&&(Mt(0,`a`,2),ko(1),$t(),vi(2,`bx-icon`,3)),o&2){let e=pr().$implicit,t=pr(2);Mo(`routerLink`,e.route),Ut(),zc(e.label),Ut(),Mo(`name`,t.divider())}}function Z$1(o,n){if(o&1&&hr(0,J$2,2,1,`span`,1)(1,Q$1,3,3),o&2){let e=n.$index,t=n.$count;fr(e===t-1?0:1)}}function ee$1(o,n){if(o&1&&(Mt(0,`nav`,0),Np(1,Z$1,2,1,null,null,H$3),$t()),o&2){let e=pr();Jt(`aria-label`,e.ariaLabel()),Ut(),Op(e.current().breadcrumbs)}}var X=class o{navigationService=f(_$1);a11y=f(Ne);isAnimated=K$3(()=>!this.a11y.isReducedMotion());minimumBreadcrumbs=P(2);divider=P(`chevron-right`);showBreadcumbs=K$3(()=>{let n=Math.max(1,this.minimumBreadcrumbs());return this.current().breadcrumbs.length>=n});ariaLabel=K$3(()=>`Breadcrumbs: ${this.current().breadcrumbs.map(e=>e.label).join(` > `)}`);current=this.navigationService.current;static ɵfac=function(e){return new(e||o)};static ɵcmp=ot({type:o,selectors:[[`bx-breadcrumbs`]],inputs:{minimumBreadcrumbs:[1,`minimumBreadcrumbs`],divider:[1,`divider`]},decls:1,vars:1,consts:[[1,`breadcrumbs`],[`aria-current`,`page`,1,`crumb`,`last`],[1,`crumb`,3,`routerLink`],[`size`,`16`,1,`breadcrumb-separator`,3,`name`]],template:function(e,t){e&1&&hr(0,ee$1,3,1,`nav`,0),e&2&&fr(t.showBreadcumbs()?0:-1)},dependencies:[Lu,dd],styles:[`
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
}`]})};function Oe$1(o){return{config:o,withNav(n,e){return te$2(n,e)}}}function we(o){return[{provide:y,useValue:o}]}function te$2(o,n){let e=o.data?.nav??{};return s(r({},o),{data:s(r({},o.data??{}),{nav:r(r({},e),n)})})}var ie=[`*`];var h$1=class r{static ɵfac=function(e){return new(e||r)};static ɵcmp=ot({type:r,selectors:[[`bx-error`]],ngContentSelectors:ie,decls:1,vars:0,template:function(e,n){e&1&&(To(),xo(0))},encapsulation:2})};var oe=[`errorText`];var ae=[`*`,[[`bx-error`]]];var le=[`*`,`bx-error`];function de(r,t){r&1&&(Mt(0,`span`,8),ko(1,`*`),$t())}function se(r,t){if(r&1&&(Mt(0,`button`,9),vi(1,`bx-icon`,11),$t()),r&2){let e=pr(2);Mo(`bxTooltip`,e.tooltip())}}function ce(r,t){r&1&&vi(0,`bx-icon`,10)}function be(r,t){if(r&1&&(Mt(0,`div`,2)(1,`label`,7),ko(2),hr(3,de,2,0,`span`,8),$t(),hr(4,se,2,1,`button`,9),hr(5,ce,1,0,`bx-icon`,10),$t()),r&2){let e=pr();Ut(),Jt(`for`,e.forId()),Ut(),yi(` `,e.resolvedLabel(),` `),Ut(),fr(e.required()?3:-1),Ut(),fr(e.tooltip()?4:-1),Ut(),fr(e.loading()?5:-1)}}function pe(r,t){if(r&1&&(Mt(0,`button`,4),vi(1,`bx-icon`,11),$t()),r&2){let e=pr();Mo(`bxTooltip`,e.tooltip()),Jt(`aria-label`,`More information`)}}function ue$1(r,t){if(r&1&&(Mt(0,`div`,12),vi(1,`bx-icon`,13),Mt(2,`span`,14,0),ko(4),$t()()),r&2){let e=pr();ut(`bx-animated`,e.isAnimated()),Ut(4),zc(e.resolvedError())}}var O=class r{i18n=f(ts,{optional:!0});a11y=f(Ne);element=f(te$3).nativeElement;lighting=f(DE);projectedError=WG(h$1,{read:te$3});errorElement=GG(`errorText`);resolvedLabel=K$3(()=>this.resolveText(this.label()));resolvedError=K$3(()=>this.resolveText(this.error()));inline=P(!1);label=P(void 0);tooltip=P(void 0);error=P(void 0);required=P(!1);loading=P(!1);forId=P(``);isAnimated=K$3(()=>!this.a11y.isReducedMotion());constructor(){ZG(t=>{let e=this.projectedError()?.nativeElement,n=this.resolvedError()?this.errorElement()?.nativeElement:e;if(!n)return;let l=this.element.parentElement,_=this.element.closest(`form, fieldset`)??(l?.tagName.startsWith(`BX-`)?l.parentElement:l);if(!_)return;let T=this.element.querySelector(`.bx-field-control > [data-bx-surface]`),re=this.lighting.register(_,{element:T??n,edge:T?`bottom`:void 0,offsetX:.5,offsetY:T?1:0,z:32,color:`var(--bx-text-danger)`,intensity:.9,radius:240});t(()=>re.destroy())})}resolveText(t){if(this.i18n?.version?.(),!!t)return ns(t)?this.i18n?.translate(t.key)??t.key:t}static ɵfac=function(e){return new(e||r)};static ɵcmp=ot({type:r,selectors:[[`bx-form-field`]],contentQueries:function(e,n,l){e&1&&cw(l,n.projectedError,h$1,5,te$3),e&2&&Ck()},viewQuery:function(e,n){e&1&&uw(n.errorElement,oe,5),e&2&&Ck()},inputs:{inline:[1,`inline`],label:[1,`label`],tooltip:[1,`tooltip`],error:[1,`error`],required:[1,`required`],loading:[1,`loading`],forId:[1,`forId`]},ngContentSelectors:le,decls:8,vars:8,consts:[[`errorText`,``],[1,`bx-field-wrapper`],[1,`bx-field-header`],[1,`bx-field-control`],[`type`,`button`,`bxTooltipTouch`,`tap`,`placement`,`top`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[1,`bx-field-error-projected`],[1,`bx-field-error`,3,`bx-animated`],[1,`bx-field-label`],[1,`bx-field-required`],[`type`,`button`,`bxTooltipTouch`,`tap`,`placement`,`top`,`aria-label`,`More information`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[`name`,`loader`,`size`,`16`,1,`bx-spin`],[`name`,`help-circle`,`size`,`16`],[1,`bx-field-error`],[`name`,`alert-circle`,`size`,`16`],[1,`bx-field-error-text`]],template:function(e,n){e&1&&(To(ae),Mt(0,`div`,1),hr(1,be,6,5,`div`,2),Mt(2,`div`,3),xo(3),hr(4,pe,2,2,`button`,4),$t(),Mt(5,`div`,5),xo(6,1),$t(),hr(7,ue$1,5,3,`div`,6),$t()),e&2&&(ut(`is-invalid`,!!n.resolvedError()||!!n.projectedError()),Jt(`data-bx-field-invalid`,!!n.resolvedError()||!!n.projectedError()),Ut(),fr(n.resolvedLabel()||n.tooltip()&&!n.inline()?1:-1),Ut(),ut(`bx-field-control-inline`,n.inline()),Ut(2),fr(n.inline()&&n.tooltip()?4:-1),Ut(3),fr(n.resolvedError()?7:-1))},dependencies:[Gw,dd,WE],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
.bx-field-wrapper[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;
  padding-bottom: var(--%NS%bx-field-padding-bottom, 1.5rem);
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
}`]})};var me$1=[`inputElement`];function xe$1(r,t){if(r&1){let e=mk();Mt(0,`button`,6),at(`click`,function(){oy(e);let l=pr();return sy(l.clear())}),vi(1,`bx-icon`,7),$t()}if(r&2){let e=pr();Mo(`disabled`,e.isDisabled())}}var te$1=class r extends fE{i18n=f(ts,{optional:!0});inputId=K$3(()=>`bx-search-${Math.random().toString(36).substr(2,9)}`);resolvedPlaceholder=K$3(()=>{this.i18n?.version?.();let t=this.placeholder();return t?ns(t)?this.i18n?.translate(t.key)??t.key:t:``});search=Vw();inputElement;clear(){this.isDisabled()||(this.updateValue(``),this.search.emit(``),this.focus())}focus(){this.inputElement?.nativeElement.focus()}onInput(t){let e=t.target;this.updateValue(e.value),this.search.emit(e.value)}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let t;return function(n){return(t||(t=Un(r)))(n||r)}})();static ɵcmp=ot({type:r,selectors:[[`bx-search-input`]],viewQuery:function(e,n){if(e&1&&Fp(me$1,5),e&2){let l;$c(l=qc())&&(n.inputElement=l.first)}},outputs:{search:`search`},features:[st],decls:6,vars:17,consts:[[`inputElement`,``],[3,`label`,`tooltip`,`error`,`loading`,`required`,`forId`],[`bxSurface`,``,1,`bx-search-input-wrapper`],[`name`,`search`,`size`,`16`,1,`bx-search-icon-left`],[`type`,`text`,1,`bx-native-search-input`,3,`input`,`blur`,`disabled`,`value`],[`type`,`button`,`aria-label`,`Clear search`,1,`bx-search-clear-btn`,3,`disabled`],[`type`,`button`,`aria-label`,`Clear search`,1,`bx-search-clear-btn`,3,`click`,`disabled`],[`name`,`x`,`size`,`16`]],template:function(e,n){e&1&&(Mt(0,`bx-form-field`,1)(1,`div`,2),vi(2,`bx-icon`,3),Mt(3,`input`,4,0),at(`input`,function(_){return n.onInput(_)})(`blur`,function(){return n.onBlur()}),$t(),hr(5,xe$1,2,1,`button`,5),$t()()),e&2&&(Mo(`label`,n.label())(`tooltip`,n.tooltip())(`error`,n.errorMessage)(`loading`,n.loading())(`required`,n.required())(`forId`,n.inputId()),Ut(),ut(`is-invalid`,!!n.errorMessage)(`is-disabled`,n.isDisabled()),Ut(2),Mo(`disabled`,n.isDisabled())(`value`,n.internalValue()||``),Jt(`id`,n.inputId())(`placeholder`,n.resolvedPlaceholder())(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()),Ut(2),fr(n.internalValue()?5:-1))},dependencies:[Ar,Gw,O,dd],styles:[`
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
}`],changeDetection:1})};function ee(r,n){r&1&&(Mt(0,`span`,6),ko(1,`*`),$t())}function ne(r,n){if(r&1&&(Mt(0,`span`,5),ko(1),hr(2,ee,2,0,`span`,6),$t()),r&2){let t=pr();Ut(),yi(` `,t.resolvedLabel(),` `),Ut(),fr(t.required()?2:-1)}}var H$2=class r{radios=new Set;select(n){for(let t of this.radios)t!==n&&t.sharesGroup(n)&&t.writeValue(n.value())}static ɵfac=function(t){return new(t||r)};static ɵprov=x({token:r,factory:r.ɵfac,providedIn:`root`})};var K$1=class r extends fE{registry=f(H$2);element=f(te$3).nativeElement;i18n=f(ts,{optional:!0});inputId=K$3(()=>`bx-radio-${yE()}`);resolvedLabel=K$3(()=>{this.i18n?.version?.();let n=this.label();if(n)return ns(n)?this.i18n?.translate(n.key)??n.key:n});value=P.required();name=P(``);showTooltip=!1;constructor(){super(),this.registry.radios.add(this),f(ne$1).onDestroy(()=>this.registry.radios.delete(this))}sharesGroup(n){let t=this.ngControl?.control;return t&&t===n.ngControl?.control?!0:!!this.name()&&this.name()===n.name()&&this.element.closest(`form`)===n.element.closest(`form`)&&t?.parent===n.ngControl?.control?.parent}onSelect(){this.isDisabled()||(this.updateValue(this.value()),this.registry.select(this))}onBlur(){this.markAsTouched()}static ɵfac=function(t){return new(t||r)};static ɵcmp=ot({type:r,selectors:[[`bx-radio`]],inputs:{value:[1,`value`],name:[1,`name`]},features:[st],decls:6,vars:18,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[1,`bx-inline-wrapper`],[`type`,`radio`,1,`bx-visually-hidden`,3,`change`,`blur`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-radio-circle`],[1,`bx-radio-inner`],[1,`bx-inline-label`],[1,`bx-inline-required`]],template:function(t,e){t&1&&(Mt(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),at(`change`,function(){return e.onSelect()})(`blur`,function(){return e.onBlur()}),$t(),Mt(3,`div`,3),vi(4,`div`,4),$t(),hr(5,ne,3,2,`span`,5),$t()()),t&2&&(Mo(`inline`,!0)(`tooltip`,e.tooltip())(`error`,e.errorMessage)(`loading`,e.loading())(`forId`,e.inputId()),Ut(),ut(`is-disabled`,e.isDisabled()),Ut(),Mo(`disabled`,e.isDisabled())(`checked`,e.internalValue()===e.value()),Jt(`id`,e.inputId())(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel()),Ut(),ut(`is-checked`,e.internalValue()===e.value())(`is-invalid`,!!e.errorMessage),Ut(2),fr(e.resolvedLabel()?5:-1))},dependencies:[Ar,Gw,O],styles:[`
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
}`],changeDetection:1})};function te(r,n){r&1&&(Mt(0,`span`,6),ko(1,`*`),$t())}function re(r,n){if(r&1&&(Mt(0,`span`,5),ko(1),hr(2,te,2,0,`span`,6),$t()),r&2){let t=pr();Ut(),yi(` `,t.resolvedLabel(),` `),Ut(),fr(t.required()?2:-1)}}var Z=class r extends fE{i18n=f(ts,{optional:!0});inputId=K$3(()=>`bx-slide-toggle-${yE()}`);resolvedLabel=K$3(()=>{this.i18n?.version?.();let n=this.label();if(n)return ns(n)?this.i18n?.translate(n.key)??n.key:n});onToggle(n){let t=n.target;this.updateValue(t.checked)}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let n;return function(e){return(n||(n=Un(r)))(e||r)}})();static ɵcmp=ot({type:r,selectors:[[`bx-slide-toggle`]],features:[st],decls:6,vars:17,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,1,`bx-visually-hidden`,3,`change`,`blur`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-slide-toggle-track`],[1,`bx-slide-toggle-thumb`],[1,`bx-inline-label`],[1,`bx-inline-required`]],template:function(t,e){t&1&&(Mt(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),at(`change`,function(o){return e.onToggle(o)})(`blur`,function(){return e.onBlur()}),$t(),Mt(3,`div`,3),vi(4,`div`,4),$t(),hr(5,re,3,2,`span`,5),$t()()),t&2&&(Mo(`inline`,!0)(`tooltip`,e.tooltip())(`error`,e.errorMessage)(`loading`,e.loading())(`forId`,e.inputId()),Ut(),ut(`is-disabled`,e.isDisabled()),Ut(),Mo(`disabled`,e.isDisabled())(`checked`,e.internalValue()===!0),Jt(`id`,e.inputId())(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel()),Ut(),ut(`is-checked`,e.internalValue()===!0)(`is-invalid`,!!e.errorMessage),Ut(2),fr(e.resolvedLabel()||e.tooltip()?5:-1))},dependencies:[Ar,Gw,O],styles:[`
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
  background: var(--%NS%bx-text-secondary);
  border: 1px solid var(--%NS%bx-bg-surface);
  box-sizing: border-box;
  border-radius: 9999px;
  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: var(--%NS%bx-shadow-sm);
}
.is-checked[_ngcontent-%COMP%]   .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
  background: var(--%NS%bx-on-primary);
  border-color: var(--%NS%bx-on-primary);
}
.bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-shadow: none;
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral);
  --%NS%bx-glass-edge: var(--%NS%bx-text-secondary);
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
}`],changeDetection:1})};var J$1=class r{element=f(te$3);theme=f(Ir);shell;thumb;constructor(){ZM(()=>this.sync());let n=f(B$1),t=f(ne$1);Tt(()=>{let e=this.element.nativeElement,i=e.ownerDocument.createElement(`span`);i.className=`bx-slider-shell`;let o=e.ownerDocument.createElement(`span`);o.className=`bx-slider-thumb`,o.setAttribute(`aria-hidden`,`true`),e.before(i),i.append(e,o),this.shell=i,this.thumb=o,this.sync();let v=()=>{i.style.setProperty(`--bx-slider-center-y`,`${e.offsetTop+e.offsetHeight/2}px`),i.style.setProperty(`--bx-slider-track-start`,`${e.offsetLeft}px`),i.style.setProperty(`--bx-slider-track-width`,`${e.offsetWidth}px`),tg(o)},R=new ResizeObserver(v);n.runOutsideAngular(()=>{R.observe(e),R.observe(i),v()});let Q=n.runOutsideAngular(()=>cN(o,d=>{let h=d.reflectionStrength>d.strength,z=h?d.reflectionStrength:d.strength;z<=.04?(o.style.removeProperty(`--bx-slider-light-color`),o.style.removeProperty(`--bx-slider-light-strength`)):(o.style.setProperty(`--bx-slider-light-color`,h?d.reflection:d.color),o.style.setProperty(`--bx-slider-light-strength`,String(z))),o.style.setProperty(`--bx-slider-light-x`,`${h?d.reflectionX:d.x}%`),o.style.setProperty(`--bx-slider-light-y`,`${h?d.reflectionY:d.y}%`)},e));t.onDestroy(()=>{R.disconnect(),Q(),i.replaceWith(e),this.shell=this.thumb=void 0})})}sync(){let n=this.element.nativeElement,t=n.min===``?0:Number(n.min),e=n.max===``?100:Number(n.max),i=e>t?Math.max(0,Math.min(100,(n.valueAsNumber-t)/(e-t)*100)):0,o=`${Number.isFinite(i)?i:0}%`;if(n.style.getPropertyValue(`--bx-slider-progress`)!==o&&n.style.setProperty(`--bx-slider-progress`,o),this.shell){let v=String((n.matches(`:dir(rtl)`)?100-(Number.isFinite(i)?i:0):Number.isFinite(i)?i:0)/100);this.shell.style.getPropertyValue(`--bx-slider-position`)!==v&&(this.shell.style.setProperty(`--bx-slider-position`,v),this.thumb&&tg(this.thumb))}}static ɵfac=function(t){return new(t||r)};static ɵdir=$({type:r,selectors:[[`input`,`type`,`range`,`bxSlider`,``]],hostAttrs:[1,`bx-slider`],hostBindings:function(t,e){t&1&&at(`input`,function(){return e.sync()})}})};var e=[{id:`button`,title:`Button`,group:`Forms`,readme:`projects/blocks/forms/components/button/README.md`,symbol:`Button`,package:`@filip.mazev/blocks/forms`,selector:`button[bx-button]`,description:`An action control with Blocks intent colors, familiar variants and visible focus.`,example:`<button bx-button variant="filled" (click)="save()">Save changes</button>`},{id:`checkbox`,title:`Checkbox`,group:`Forms`,readme:`projects/blocks/forms/components/checkbox/README.md`,symbol:`Checkbox`,package:`@filip.mazev/blocks/forms`,selector:`bx-checkbox`,description:`A boolean choice integrated with Angular forms.`,example:`<bx-checkbox label="Receive updates" [formControl]="updates" />`},{id:`form-field`,title:`Form field`,group:`Forms`,readme:`projects/blocks/forms/components/form-field/README.md`,symbol:`FormField`,package:`@filip.mazev/blocks/forms`,selector:`bx-form-field`,description:`A shared label, help text, validation and loading frame for controls.`,example:`<bx-form-field label="Project name" forId="project" [required]="true" [error]="error">
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
</ng-template>`},{id:`context-menu`,title:`Context menu`,group:`Primitives`,readme:`projects/blocks/primitives/directives/context-menu/README.md`,symbol:`ContextMenuDirective, Menu, MenuItem`,package:`@filip.mazev/blocks/primitives`,selector:`[bxContextMenu]`,description:`A menu positioned at a context action’s coordinates.`,example:`<div [bxContextMenu]="actions" tabindex="0">Right-click or touch and hold here</div>
<ng-template #actions><bx-menu><bx-menu-item label="Copy" (action)="copy()" /></bx-menu></ng-template>`},{id:`tooltip-directive`,title:`Tooltip trigger`,group:`Primitives`,readme:`projects/blocks/primitives/directives/tooltip/README.md`,symbol:`TooltipDirective`,package:`@filip.mazev/blocks/primitives`,selector:`[bxTooltip]`,description:`Connects a help surface to a trigger using the overlay positioning system.`,example:`<button bx-button bxTooltip="Saves this project" placement="top">Save</button>`},{id:`breadcrumbs`,title:`Breadcrumbs`,group:`Navigation`,readme:`projects/blocks/navigation/components/breadcrumbs/README.md`,symbol:`Breadcrumbs`,package:`@filip.mazev/blocks/navigation`,selector:`bx-breadcrumbs`,description:`A route-aware trail derived from Blocks navigation metadata.`,example:`<bx-breadcrumbs [minimumBreadcrumbs]="1" divider="chevron-right" />`},{id:`icon`,title:`Icon`,group:`Icons`,readme:`projects/blocks/icons/components/README.md`,symbol:`Icon`,package:`@filip.mazev/blocks/icons`,selector:`bx-icon`,description:`An asynchronously loaded SVG icon using semantic foreground and background tokens.`,example:`<bx-icon name="sparkles" size="32" color="text-primary" [decorative]="false" ariaLabel="Highlights" />`},{id:`modal-core`,title:`Modal core`,group:`Modals`,readme:`projects/blocks/modal/components/README.md`,symbol:`ModalCore`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`The service-owned host that composes modal content and chooses the active layout.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open modal core</button>`},{id:`modal-centered`,title:`Centered modal`,group:`Modals`,readme:`projects/blocks/modal/components/views/centered/README.md`,symbol:`ModalCentered`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`A focused dialog centered in the available viewport.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open centered modal</button>`},{id:`modal-side`,title:`Side modal`,group:`Modals`,readme:`projects/blocks/modal/components/views/side/README.md`,symbol:`ModalSide`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`A left or right panel for editing alongside the page context.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open side modal</button>`},{id:`modal-bottom-sheet`,title:`Bottom sheet`,group:`Modals`,readme:`projects/blocks/modal/components/views/bottom-sheet/README.md`,symbol:`ModalBottomSheet`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`A bottom-aligned modal surface suitable for compact actions and mobile layouts.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open bottom sheet</button>`},{id:`modal-backdrop`,title:`Modal backdrop`,group:`Modals`,readme:`projects/blocks/modal/components/shared/ui/backdrop/README.md`,symbol:`ModalBackdrop`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`The background scrim that separates an open modal from page content.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open modal backdrop</button>`},{id:`modal-banner`,title:`Modal banner`,group:`Modals`,readme:`projects/blocks/modal/components/shared/ui/banner/README.md`,symbol:`ModalBanner`,package:`@filip.mazev/blocks/modal`,selector:`bx-modal-banner`,description:`The shared modal heading, semantic icon and close action.`,example:`<bx-modal-banner [header]="{ text: 'Project settings' }" [showCloseButton]="true" (close)="handleClose($event)" />`},{id:`toast-core`,title:`Toast core`,group:`Notifications`,readme:`projects/blocks/toastr/components/README.md`,symbol:`ToastCore, ToastrService`,package:`@filip.mazev/blocks/toastr`,selector:`service-owned view`,description:`The toast lifecycle host with progress, dismissal and content composition.`,example:`<button bx-button (click)="notify()">Show notification</button>`},{id:`simple-toast`,title:`Simple toast`,group:`Notifications`,readme:`projects/blocks/toastr/components/views/simple-toast/README.md`,symbol:`SimpleToast, ToastrService`,package:`@filip.mazev/blocks/toastr`,selector:`service-owned view`,description:`A notification with a semantic icon, optional title and message.`,example:`<button bx-button (click)="notify()">Show success</button>`},{id:`surface`,title:`Surface effects`,group:`Primitives`,readme:`projects/blocks/effects/README.md`,symbol:`BxSurfaceDirective`,package:`@filip.mazev/blocks/effects`,selector:`[bxSurface]`,description:`Apply the shared glass material to a custom surface while inheriting application settings.`,example:`<section bxSurface>Custom content follows the global appearance settings.</section>`},{id:`modal-header`,title:`Modal header`,group:`Modals`,readme:`projects/blocks/modal/directives/header/README.md`,symbol:`ModalHeaderDirective`,package:`@filip.mazev/blocks/modal`,selector:`[appModalHeader]`,description:`Projects custom header content into the active Blocks modal layout.`,example:`<div *appModalHeader>Custom header content</div>`},{id:`modal-footer`,title:`Modal footer`,group:`Modals`,readme:`projects/blocks/modal/directives/footer/README.md`,symbol:`ModalFooterDirective`,package:`@filip.mazev/blocks/modal`,selector:`[appModalFooter]`,description:`Projects custom footer content into the active Blocks modal layout.`,example:`<div *appModalFooter>Custom footer content</div>`}];var I=new C(`HIGHLIGHT_OPTIONS`);function rt(e){return un([{provide:I,useValue:e}])}var h=(function(e){return e.FULL_WITH_CORE_LIBRARY_IMPORTS=`The full library and the core library were imported, only one of them should be imported!`,e.FULL_WITH_LANGUAGE_IMPORTS=`The highlighting languages were imported they are not needed!`,e.CORE_WITHOUT_LANGUAGE_IMPORTS=`The highlighting languages were not imported!`,e.LANGUAGE_WITHOUT_CORE_IMPORTS=`The core library was not imported!`,e.NO_FULL_AND_NO_CORE_IMPORTS=`Highlight.js library was not imported!`,e})(h||{});var V=(()=>{class e{constructor(){this.document=f(V$1),this.isPlatformBrowser=je$1(f(Ee)),this.options=f(I,{optional:!0}),this._ready=new Oe$2(null),this.ready=bS(this._ready.asObservable().pipe($e$1(t=>!!t))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(lt(t=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=t,this.loadLineNumbers().pipe(Dt(i=>{i.activateLineNumbers(),this._ready.next(t)}))):(this._ready.next(t),We$1)),zr(t=>(console.error(`[HLJS] `,t),this._ready.error(t),We$1))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return Vd(()=>h.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return Vd(()=>h.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return Vd(()=>h.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return Vd(()=>h.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(lt(t=>this._loadLanguages(t)))}return Vd(()=>h.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(t){let i=Object.entries(this.options.languages).map(([s,G])=>_(G()).pipe(Dt(W=>t.registerLanguage(s,W))));return jd(i).pipe(ue$2(()=>t))}loadCoreLibrary(){return _(this.options.coreLibraryLoader())}loadFullLibrary(){return _(this.options.fullLibraryLoader())}loadLineNumbers(){return fe$1(this.options.lineNumbersLoader())}setTheme(t){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=t:this.loadTheme(t))}loadTheme(t){this._themeLinkElement=this.document.createElement(`link`),this._themeLinkElement.href=t,this._themeLinkElement.type=`text/css`,this._themeLinkElement.rel=`stylesheet`,this._themeLinkElement.media=`screen,print`,this.document.head.appendChild(this._themeLinkElement)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵprov=x({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();var _=e=>fe$1(e).pipe($e$1(o=>!!o?.default),ue$2(o=>o.default));var z=(()=>{class e{constructor(){this.loader=f(V),this.options=f(I,{optional:!0}),this.hljsSignal=I$1(null),this.hljs=K$3(()=>this.hljsSignal()),this.loader.ready.then(t=>{this.hljsSignal.set(t),this.options?.highlightOptions&&t.configure(this.options.highlightOptions)})}async highlight(t,i){return(await this.loader.ready).highlight(t,i)}async highlightAuto(t,i){return(await this.loader.ready).highlightAuto(t,i)}async highlightElement(t){(await this.loader.ready).highlightElement(t)}async highlightAll(){(await this.loader.ready).highlightAll()}async configure(t){(await this.loader.ready).configure(t)}async registerLanguage(t,i){(await this.loader.ready).registerLanguage(t,i)}async unregisterLanguage(t){(await this.loader.ready).unregisterLanguage(t)}async registerAliases(t,{languageName:i}){(await this.loader.ready).registerAliases(t,{languageName:i})}async listLanguages(){return(await this.loader.ready).listLanguages()}async getLanguage(t){return(await this.loader.ready).getLanguage(t)}async safeMode(){(await this.loader.ready).safeMode()}async debugMode(){(await this.loader.ready).debugMode()}async lineNumbersBlock(t,i){let s=await this.loader.ready;s.lineNumbersBlock&&s.lineNumbersBlock(t,i)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵprov=x({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();var j$1;function q(){if(!j$1)try{j$1=window?.trustedTypes?.createPolicy(`ngx-highlightjs`,{createHTML:e=>e})}catch{}return j$1}function J(e){return q()?.createHTML(e)||e}var U$1=(()=>{class e{constructor(){this._hljs=f(z),this._nativeElement=f(te$3).nativeElement,this._sanitizer=f(um),ZG({write:()=>{let t=this.code();this.setTextContent(t||``),t&&this.highlightElement(t)}}),ZG({write:()=>{let t=this.highlightResult();this.setInnerHTML(t?.value),this.highlighted.emit(t)}})}setTextContent(t){requestAnimationFrame(()=>this._nativeElement.textContent=t)}setInnerHTML(t){requestAnimationFrame(()=>this._nativeElement.innerHTML=J(this._sanitizer.sanitize(pe$1.HTML,t)||``))}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵdir=$({type:e})}}return e})();var ht=(()=>{class e extends U$1{constructor(){super(...arguments),this.code=P(null,{alias:`highlight`}),this.highlightResult=I$1(null),this.language=P.required(),this.ignoreIllegals=P(void 0,{transform:_e$1}),this.highlighted=Vw()}async highlightElement(t){let i=await this._hljs.highlight(t,{language:this.language(),ignoreIllegals:this.ignoreIllegals()});this.highlightResult.set(i)}static{this.ɵfac=(()=>{let t;return function(s){return(t||(t=Un(e)))(s||e)}})()}static{this.ɵdir=$({type:e,selectors:[[``,`highlight`,``]],hostVars:2,hostBindings:function(i,s){i&2&&ut(`hljs`,!0)},inputs:{code:[1,`highlight`,`code`],language:[1,`language`],ignoreIllegals:[1,`ignoreIllegals`]},outputs:{highlighted:`highlighted`},features:[xt([{provide:U$1,useExisting:e}]),st]})}}return e})();function R(r,e){r&1&&vi(0,`bx-icon`,4)}function A(r,e){r&1&&(Mt(0,`span`,6),ko(1,`*`),$t())}function U(r,e){if(r&1&&(Mt(0,`span`,5),ko(1),hr(2,A,2,0,`span`,6),$t()),r&2){let t=pr();Ut(),yi(` `,t.resolvedLabel(),` `),Ut(),fr(t.required()?2:-1)}}var L=class r extends fE{i18n=f(ts,{optional:!0});inputId=K$3(()=>`bx-checkbox-${yE()}`);resolvedLabel=K$3(()=>{this.i18n?.version?.();let e=this.label();if(e)return ns(e)?this.i18n?.translate(e.key)??e.key:e});showTooltip=!1;onToggle(e){let t=e.target;this.updateValue(t.checked)}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let e;return function(n){return(e||(e=Un(r)))(n||r)}})();static ɵcmp=ot({type:r,selectors:[[`bx-checkbox`]],features:[st],decls:6,vars:18,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,1,`bx-visually-hidden`,3,`change`,`blur`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-checkbox-box`],[`name`,`check`,`size`,`16`],[1,`bx-inline-label`],[1,`bx-inline-required`]],template:function(t,n){t&1&&(Mt(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),at(`change`,function(a){return n.onToggle(a)})(`blur`,function(){return n.onBlur()}),$t(),Mt(3,`div`,3),hr(4,R,1,0,`bx-icon`,4),$t(),hr(5,U,3,2,`span`,5),$t()()),t&2&&(Mo(`inline`,!0)(`tooltip`,n.tooltip())(`error`,n.errorMessage)(`loading`,n.loading())(`forId`,n.inputId()),Ut(),ut(`is-disabled`,n.isDisabled()),Ut(),Mo(`disabled`,n.isDisabled())(`checked`,n.internalValue()===!0),Jt(`id`,n.inputId())(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()),Ut(),ut(`is-checked`,n.internalValue()===!0)(`is-invalid`,!!n.errorMessage),Ut(),fr(n.internalValue()===!0?4:-1),Ut(),fr(n.resolvedLabel()?5:-1))},dependencies:[Ar,Gw,O,dd],styles:[`
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
}`],changeDetection:1})};function H$1(r,e){r&1&&(Mt(0,`span`,6),ko(1,`*`),$t())}function K(r,e){if(r&1&&(Mt(0,`label`,3),ko(1),hr(2,H$1,2,0,`span`,6),$t()),r&2){let t=pr();Jt(`for`,t.inputId()),Ut(),yi(` `,t.resolvedLabel(),` `),Ut(),fr(t.isFieldRequired()?2:-1)}}function W(r,e){if(r&1){let t=mk();Mt(0,`div`,5)(1,`button`,7),at(`mousedown`,function(i){oy(t);let a=pr();return sy(a.startSpin(-1,i))})(`touchstart`,function(i){oy(t);let a=pr();return sy(a.startSpin(-1,i))})(`mouseup`,function(){oy(t);let i=pr();return sy(i.stopSpin())})(`mouseleave`,function(){oy(t);let i=pr();return sy(i.stopSpin())})(`touchend`,function(){oy(t);let i=pr();return sy(i.stopSpin())}),vi(2,`bx-icon`,8),$t(),Mt(3,`button`,7),at(`mousedown`,function(i){oy(t);let a=pr();return sy(a.startSpin(1,i))})(`touchstart`,function(i){oy(t);let a=pr();return sy(a.startSpin(1,i))})(`mouseup`,function(){oy(t);let i=pr();return sy(i.stopSpin())})(`mouseleave`,function(){oy(t);let i=pr();return sy(i.stopSpin())})(`touchend`,function(){oy(t);let i=pr();return sy(i.stopSpin())}),vi(4,`bx-icon`,9),$t()()}if(r&2){let t=pr();Ut(),Mo(`disabled`,t.isSpinDownDisabled()),Ut(2),Mo(`disabled`,t.isSpinUpDisabled())}}var j=class r extends fE{i18n=f(ts,{optional:!0});inputId=K$3(()=>`bx-input-${yE()}`);isFocused=I$1(!1);isSpinDownDisabled=K$3(()=>{let e=this.min();return this.isDisabled()||e!==void 0&&(Number(this.internalValue())||0)<=e});isSpinUpDisabled=K$3(()=>{let e=this.max();return this.isDisabled()||e!==void 0&&(Number(this.internalValue())||0)>=e});isFloating=K$3(()=>{let e=this.internalValue(),t=e!=null&&e!==``,n=[`date`,`time`,`datetime-local`].includes(this.type());return this.isFocused()||t||n});resolvedPlaceholder=K$3(()=>{this.i18n?.version?.();let e=this.placeholder();return e?ns(e)?this.i18n?.translate(e.key)??e.key:e:``});resolvedLabel=K$3(()=>{this.i18n?.version?.();let e=this.label();return e?ns(e)?this.i18n?.translate(e.key)??e.key:e:``});type=P(`text`);min=P(void 0);max=P(void 0);step=P(1);spinTimeout;spinInterval;constructor(){super(),f(ne$1).onDestroy(()=>this.stopSpin())}startSpin(e,t){t.preventDefault(),!this.isDisabled()&&(this.applyStep(e),this.spinTimeout=setTimeout(()=>{this.spinInterval=setInterval(()=>{this.applyStep(e)},50)},400))}stopSpin(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)}onInput(e){let t=e.target,n=this.type()===`number`?t.value===``?null:Number(t.value):t.value;this.updateValue(n)}onFocus(){this.isFocused.set(!0)}onBlur(){this.isFocused.set(!1),this.markAsTouched()}applyStep(e){let n=(Number(this.internalValue())||0)+e*this.step(),i=this.min(),a=this.max();i!==void 0&&n<i&&(n=i),a!==void 0&&n>a&&(n=a),this.updateValue(n),this.markAsTouched()}static ɵfac=function(t){return new(t||r)};static ɵcmp=ot({type:r,selectors:[[`bx-input-field`]],inputs:{type:[1,`type`],min:[1,`min`],max:[1,`max`],step:[1,`step`]},features:[st],decls:6,vars:25,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[`bxSurface`,``,1,`bx-input-wrapper`],[1,`bx-input-container`],[1,`bx-floating-label`],[1,`bx-native-input`,3,`input`,`focus`,`blur`,`disabled`,`value`],[1,`bx-spinners-group`],[1,`bx-field-required`],[`type`,`button`,`tabindex`,`-1`,1,`bx-spin-btn`,3,`mousedown`,`touchstart`,`mouseup`,`mouseleave`,`touchend`,`disabled`],[`name`,`minus`,`size`,`16`],[`name`,`plus`,`size`,`16`]],template:function(t,n){t&1&&(Mt(0,`bx-form-field`,0)(1,`div`,1)(2,`div`,2),hr(3,K,3,3,`label`,3),Mt(4,`input`,4),at(`input`,function(a){return n.onInput(a)})(`focus`,function(){return n.onFocus()})(`blur`,function(){return n.onBlur()}),$t()(),hr(5,W,5,2,`div`,5),$t()()),t&2&&(Mo(`inline`,!0)(`tooltip`,n.tooltip())(`error`,n.errorMessage)(`loading`,n.loading())(`forId`,n.inputId()),Ut(),ut(`is-invalid`,!!n.errorMessage)(`is-disabled`,n.isDisabled())(`has-spinners`,n.type()===`number`)(`is-floating`,n.isFloating()),Ut(2),fr(n.label()?3:-1),Ut(),Mo(`disabled`,n.isDisabled())(`value`,n.internalValue()??``),Jt(`id`,n.inputId())(`type`,n.type())(`placeholder`,n.isFloating()?n.resolvedPlaceholder():``)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`min`,n.min())(`max`,n.max())(`step`,n.step()),Ut(),fr(n.type()===`number`?5:-1))},dependencies:[Ar,Gw,O,dd],styles:[`
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
}`],changeDetection:1})};var me=[`searchInput`];var ve=[`origin`];var fe=(r,e)=>e.value;function xe(r,e){r&1&&(Mt(0,`span`,9),ko(1,`*`),$t())}function ye(r,e){if(r&1&&(Mt(0,`span`,5),ko(1),hr(2,xe,2,0,`span`,9),$t()),r&2){let n=pr();Ut(),yi(` `,n.resolvedLabel(),` `),Ut(),fr(n.isFieldRequired()?2:-1)}}function _e(r,e){if(r&1&&ko(0),r&2){let n=pr();yi(` `,n.resolvedPlaceholder(),` `)}}function Oe(r,e){if(r&1&&ko(0),r&2){let n=pr();yi(` `,n.selectedOptionLabel(),` `)}}function Se(r,e){if(r&1){let n=mk();Mt(0,`div`,11)(1,`bx-search-input`,15,1),at(`search`,function(i){oy(n);let o=pr(2);return sy(o.onSearchChange(i))})(`keydown.enter`,function(i){return i.preventDefault()}),$t()()}if(r&2){let n=pr(2);Ut(),Mo(`placeholder`,n.resolvedSearchPlaceholder())}}function Ce(r,e){r&1&&vi(0,`bx-icon`,19)}function Pe(r,e){if(r&1){let n=mk();Mt(0,`bx-menu-item`,16),at(`action`,function(){let i=oy(n).$implicit,o=pr(2);return sy(o.selectOption(i))}),Mt(1,`div`,17)(2,`div`,18),hr(3,Ce,1,0,`bx-icon`,19),$t(),Mt(4,`span`,20),ko(5),$t()()()}if(r&2){let n=e.$implicit,t=pr(2);Mo(`disabled`,n.disabled??!1)(`wrapLabel`,!0),Jt(`aria-selected`,t.internalValue()===n.value),Ut(3),fr(t.internalValue()===n.value?3:-1),Ut(),Mo(`title`,n.resolvedStr),Ut(),zc(n.resolvedStr)}}function Me(r,e){if(r&1&&(Mt(0,`div`,14)(1,`span`,21),ko(2),$t()()),r&2){let n=pr(2);Ut(2),zc(n.resolvedEmptyMessage())}}function ke(r,e){if(r&1){let n=mk();Mt(0,`div`,10),at(`keydown`,function(i){oy(n);let o=pr();return sy(o.onPanelKey(i))}),hr(1,Se,3,1,`div`,11),Mt(2,`div`,12),Np(3,Pe,6,6,`bx-menu-item`,13,fe,!1,Me,3,1,`div`,14),$t()()}if(r&2){let n=pr();Mo(`id`,n.inputId()+`-options`),Jt(`aria-label`,n.resolvedLabel()),Ut(),fr(n.isSearchable()?1:-1),Ut(2),Op(n.filteredOptions())}}var ue=class r$1 extends fE{a11y=f(Ne);zone=f(B$1);overlay=f(En);overlayContext=f(is,{optional:!0});panelScrollStrategy=this.overlay.scrollStrategies.noop();isPanelAttached=I$1(!1);i18n=f(ts,{optional:!0});searchTerm=I$1(``);inputId=K$3(()=>`bx-select-${yE()}`);overlayPositions=[new Tr({originX:`start`,originY:`bottom`},{overlayX:`start`,overlayY:`top`},0,4),new Tr({originX:`start`,originY:`top`},{overlayX:`start`,overlayY:`bottom`},0,-4)];isFloating=K$3(()=>{let e=this.internalValue(),n=e!=null&&e!==``;return this.isOpen()||n});resolvedLabel=K$3(()=>{this.i18n?.version?.();let e=this.label();return e?ns(e)?this.i18n?.translate(e.key)??e.key:e:``});resolvedPlaceholder=K$3(()=>{this.i18n?.version?.();let e=this.placeholder();return e?ns(e)?this.i18n?.translate(e.key)??e.key:e:``});resolvedOptions=K$3(()=>(this.i18n?.version?.(),this.options().map(e=>s(r({},e),{resolvedStr:this.resolveText(e.label)}))));filteredOptions=K$3(()=>{let e=this.searchTerm().trim(),n=this.resolvedOptions();if(this.externalFiltering()||!e)return n;let t=e.toLocaleLowerCase();return n.filter(i=>{let o=0;for(let s of i.resolvedStr.toLocaleLowerCase())if(s===t[o]&&o++,o===t.length)return!0;return!1})});selectedOptionLabel=K$3(()=>{let e=this.internalValue(),n=this.resolvedOptions().find(t=>t.value===e);return n?n.resolvedStr:``});resolvedSearchPlaceholder=K$3(()=>this.resolveText(this.searchPlaceholder()));resolvedEmptyMessage=K$3(()=>this.resolveText(this.emptyMessage()));options=P.required();isSearchable=P(!1);externalFiltering=P(!1);searchPlaceholder=P(`Search...`);emptyMessage=P(`No results found.`);search=Vw();isOpen=I$1(!1);transition;disconnectTheme;disconnectLighting;disconnectScroll;transitionRevision=0;focusOnOpen=null;connectedOverlay;searchInputRef;originRef;searchSubject=new Y$1;sub;ngOnInit(){super.ngOnInit(),this.sub=this.searchSubject.pipe(vs(300),Ji()).subscribe(e=>{this.searchTerm.set(e),this.externalFiltering()&&this.search.emit(e)})}ngOnDestroy(){++this.transitionRevision,this.onPanelDetach(),this.sub?.unsubscribe()}toggleOpen(){this.isDisabled()||this.loading()||(this.isOpen()?this.close():this.open())}open(){if(this.isDisabled()||this.loading())return;++this.transitionRevision,this.isOpen.set(!0),this.isPanelAttached.set(!0);let e=this.connectedOverlay?.overlayRef?.overlayElement;e&&(e.inert=!1);let n=this.transition;n&&this.zone.runOutsideAngular(()=>n.enter())}close(){this.isOpen.set(!1),this.markAsTouched();let e=++this.transitionRevision,n=this.connectedOverlay?.overlayRef?.overlayElement;n?.contains(n.ownerDocument.activeElement)&&this.originRef?.nativeElement.focus({preventScroll:!0}),n&&(n.inert=!0);let t=this.transition;t&&!this.a11y.isReducedMotion()?this.zone.runOutsideAngular(()=>t.exit()).then(()=>{e===this.transitionRevision&&!this.isOpen()&&this.isPanelAttached.set(!1)}).catch(()=>{e===this.transitionRevision&&this.isPanelAttached.set(!1)}):this.isPanelAttached.set(!1)}onPanelAttach(){let e=this.transitionRevision,n=this.originRef?.nativeElement,t=this.connectedOverlay?.overlayRef;n&&t?.hasAttached()&&(this.disconnectLighting?.(),this.disconnectLighting=ki(t.overlayElement,n),this.trackPanelScroll(t,n)),queueMicrotask(()=>{let i=this.connectedOverlay?.overlayRef,o=this.originRef?.nativeElement;if(!(!i?.hasAttached()||!o||!this.isOpen()||e!==this.transitionRevision)){if(this.disconnectTheme?.(),this.disconnectTheme=this.zone.runOutsideAngular(()=>rs(o,i.overlayElement)),i.updatePosition(),!this.a11y.isReducedMotion()){this.transition?.destroy(),this.transition=this.zone.runOutsideAngular(()=>Ai(o,i.overlayElement));let s=this.transition;this.zone.runOutsideAngular(()=>s.enter()).catch(()=>{e===this.transitionRevision&&(this.transition?.destroy(),this.transition=void 0)})}if(this.isSearchable())this.searchInputRef?.focus();else if(this.focusOnOpen){let s=this.panelItems();(this.focusOnOpen===`last`?s[s.length-1]:s[0])?.focus()}this.focusOnOpen=null}})}onPanelDetach(){this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.disconnectScroll?.(),this.disconnectScroll=void 0}overlayPopoverLocation(e){return!!this.overlayContext?.useTopLayer||!!e.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)?`global`:null}refreshPanel(){this.transition?.refresh()}onTriggerKey(e){if([`ArrowDown`,`ArrowUp`,`Escape`].includes(e.key)){if(e.preventDefault(),e.key===`Escape`){this.close();return}if(this.focusOnOpen=e.key===`ArrowUp`?`last`:`first`,this.isOpen()){let n=this.panelItems();(this.focusOnOpen===`last`?n[n.length-1]:n[0])?.focus(),this.focusOnOpen=null}else this.open()}}onPanelKey(e){if(e.key===`Escape`){e.preventDefault(),e.stopPropagation(),this.close();return}if(e.key===`Tab`){this.close();return}if(e.target?.matches(`input,textarea`)||![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key))return;let n=this.panelItems();if(!n.length)return;let t=n.indexOf(n[0].ownerDocument.activeElement),i=e.key===`Home`?0:e.key===`End`?n.length-1:e.key===`ArrowDown`?(t+1)%n.length:t<0?n.length-1:(t-1+n.length)%n.length;e.preventDefault(),n[i].focus()}onOutsideClick(e){let n=e.target;this.originRef?.nativeElement.contains(n)||this.close()}selectOption(e){e.disabled||(this.updateValue(e.value),this.close())}onSearchChange(e){this.searchSubject.next(e)}trackPanelScroll(e,n){let t=n.ownerDocument.defaultView;t&&(this.disconnectScroll?.(),this.zone.runOutsideAngular(()=>{let i=o=>{let s=o.target;if(!e.hasAttached()||!(s===t||s instanceof Node&&s.contains(n)))return;let L=e.getConfig().positionStrategy;L instanceof ld?L.reapplyLastPosition():e.updatePosition()};t.addEventListener(`scroll`,i,{capture:!0,passive:!0}),this.disconnectScroll=()=>t.removeEventListener(`scroll`,i,!0)}))}panelItems(){return Array.from(this.connectedOverlay?.overlayRef?.overlayElement.querySelectorAll(`.bx-select-menu-container button:not(:disabled)`)??[])}resolveText(e){return e?ns(e)?this.i18n?.translate(e.key)??e.key:e:``}static ɵfac=(()=>{let e;return function(t){return(e||(e=Un(r$1)))(t||r$1)}})();static ɵcmp=ot({type:r$1,selectors:[[`bx-select`]],viewQuery:function(n,t){if(n&1&&Fp(uO,5)(me,5)(ve,5,te$3),n&2){let i;$c(i=qc())&&(t.connectedOverlay=i.first),$c(i=qc())&&(t.searchInputRef=i.first),$c(i=qc())&&(t.originRef=i.first)}},inputs:{options:[1,`options`],isSearchable:[1,`isSearchable`],externalFiltering:[1,`externalFiltering`],searchPlaceholder:[1,`searchPlaceholder`],emptyMessage:[1,`emptyMessage`]},outputs:{search:`search`},features:[st],decls:10,vars:29,consts:[[`origin`,`cdkOverlayOrigin`],[`searchInput`,``],[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[`type`,`button`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`],[`name`,`chevron-down`,`size`,`16`,1,`bx-select-caret`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[1,`bx-field-required`],[`bxSurface`,``,`role`,`listbox`,`tabindex`,`0`,1,`bx-select-panel`,3,`keydown`,`id`],[1,`bx-select-search-container`],[1,`bx-select-menu-container`],[`role`,`option`,3,`disabled`,`wrapLabel`],[1,`bx-select-empty`],[3,`search`,`keydown.enter`,`placeholder`],[`role`,`option`,3,`action`,`disabled`,`wrapLabel`],[1,`bx-select-item-inner`],[1,`bx-select-check-placeholder`],[`name`,`check`,`size`,`16`],[3,`title`],[1,`bx-empty-text`]],template:function(n,t){if(n&1&&(Mt(0,`bx-form-field`,2)(1,`button`,3,0),at(`click`,function(){return t.toggleOpen()})(`keydown`,function(o){return t.onTriggerKey(o)}),Mt(3,`div`,4),hr(4,ye,3,2,`span`,5),Mt(5,`span`,6),hr(6,_e,1,1)(7,Oe,1,1),$t()(),vi(8,`bx-icon`,7),$t(),rw(9,ke,6,4,`ng-template`,8),at(`overlayOutsideClick`,function(o){return t.onOutsideClick(o)})(`attach`,function(){return t.onPanelAttach()})(`detach`,function(){return t.onPanelDetach()})(`positionChange`,function(){return t.refreshPanel()}),$t()),n&2){let i=wk(2);Mo(`inline`,!0)(`tooltip`,t.tooltip())(`error`,t.errorMessage)(`loading`,t.loading())(`forId`,t.inputId()),Ut(),ut(`is-invalid`,!!t.errorMessage)(`is-open`,t.isOpen())(`is-floating`,t.isFloating()),Mo(`disabled`,t.isDisabled()||t.loading()),Jt(`id`,t.inputId())(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel()||t.resolvedLabel())(`aria-expanded`,t.isOpen())(`aria-controls`,t.isPanelAttached()?t.inputId()+`-options`:null),Ut(3),fr(t.label()?4:-1),Ut(),ut(`is-placeholder`,t.internalValue()===null),Jt(`title`,t.selectedOptionLabel()||t.resolvedPlaceholder()),Ut(),fr(t.internalValue()===null&&t.isFloating()?6:7),Ut(3),Mo(`cdkConnectedOverlayOrigin`,i)(`cdkConnectedOverlayOpen`,t.isPanelAttached())(`cdkConnectedOverlayPositions`,t.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayScrollStrategy`,t.panelScrollStrategy)(`cdkConnectedOverlayUsePopover`,t.overlayPopoverLocation(i.elementRef.nativeElement))(`cdkConnectedOverlayWidth`,i.elementRef.nativeElement.offsetWidth)}},dependencies:[Ar,Gw,dO,uO,Eg,O,dd,EE,te$1],styles:[`
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
  background-color: var(--%NS%bx-glass-surface, var(--%NS%bx-bg-surface));
  border: 1px solid var(--%NS%bx-glass-edge, var(--%NS%bx-border-default));
  border-radius: 0.75rem;
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
  --%NS%bx-glass-surface: var(--%NS%bx-bg-surface);
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --%NS%bx-glass-min-opacity: 0;
  --%NS%bx-glass-decoration-opacity: 1;
  --%NS%bx-glass-rim-visibility: 1;
  --%NS%bx-glass-unified-lighting: 0;
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
}`],changeDetection:1})};var p=[`*`];var S=class r{appearance=oK(()=>({interactive:this.variant()===`text`||!this.interactive()||this.disabled()?!1:void 0,emission:this.variant()!==`text`&&this.interactive()&&!this.disabled()?this.color()===`primary`||this.color()===`grayscale`?`var(--bx-primary)`:`var(--bx-text-${this.color()})`:void 0}));a11y=f(Ne);isAnimated=K$3(()=>!this.a11y.isReducedMotion());variant=P(`text`);color=P(`primary`);outlined=P(!1);elevated=P(!1);disabled=P(!1,{transform:_e$1});interactive=P(!0,{transform:_e$1});onClick(a){this.disabled()&&(a.preventDefault(),a.stopImmediatePropagation())}static ɵfac=function(e){return new(e||r)};static ɵcmp=ot({type:r,selectors:[[`bx-button`],[`button`,`bx-button`,``],[`a`,`bx-button`,``]],hostVars:13,hostBindings:function(e,n){e&1&&at(`click`,function(f){return n.onClick(f)}),e&2&&(Jt(`disabled`,n.disabled()?!0:null)(`aria-disabled`,n.disabled())(`tabindex`,n.disabled()?`-1`:null),Lk(`bx-btn bx-btn-`+n.variant()+` bx-btn-color-`+n.color()),ut(`bx-btn-is-outlined`,n.outlined())(`bx-btn-is-elevated`,n.elevated())(`bx-btn-animated`,n.isAnimated())(`bx-btn-non-interactive`,!n.interactive()))},inputs:{variant:[1,`variant`],color:[1,`color`],outlined:[1,`outlined`],elevated:[1,`elevated`],disabled:[1,`disabled`],interactive:[1,`interactive`]},ngContentSelectors:p,decls:2,vars:0,consts:[[1,`bx-btn-content-wrapper`]],template:function(e,n){e&1&&(To(),jc(0,`span`,0),xo(1),Bc())},styles:[`
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
}`]})};var B=Oe$1({sections:[{id:`Start`},{id:`Forms`},{id:`Primitives`},{id:`Navigation`},{id:`Icons`},{id:`Modals`},{id:`Notifications`},{id:`Tools`}]}),{withNav:v}=B,Ge=e.map((t,n)=>v({path:t.id,loadComponent:()=>import(`./chunk-BOlDh-HL.js`).then(e=>e.ComponentDemo),title:`${t.title} \xB7 Blocks`,data:{componentId:t.id}},{label:t.title,breadcrumb:t.title,section:t.group,menu:!0,order:n})),Y=[{path:``,pathMatch:`full`,redirectTo:`home`},v({path:`home`,loadComponent:()=>import(`./chunk-BM24XmaE.js`).then(t=>t.Home),title:`Blocks`},{label:`Overview`,breadcrumb:`Home`,section:`Start`,menu:!0,root:!0,order:1}),v({path:`appearance`,loadComponent:()=>import(`./chunk-CnPJZPdv.js`).then(t=>t.Appearance),title:`Appearance · Blocks`},{label:`Appearance`,breadcrumb:`Appearance`,section:`Start`,menu:!0,order:2}),v({path:`components`,title:`Components · Blocks`,children:[{path:``,pathMatch:`full`,loadComponent:()=>import(`./chunk-BRp99iRb.js`).then(t=>t.ComponentIndex)},...Ge]},{label:`All components`,breadcrumb:`Components`,section:`Start`,menu:!0,order:3}),v({path:`icon-catalog`,loadComponent:()=>import(`./chunk-DhoSd7CO.js`).then(t=>t.IconCatalog),title:`Icon catalog · Blocks`},{label:`Icon catalog`,breadcrumb:`Icon catalog`,section:`Tools`,menu:!0,order:4}),v({path:`modal`,loadComponent:()=>import(`./chunk-D6v_iANe.js`).then(t=>t.Modal),title:`Modal configurator · Blocks`},{label:`Modal configurator`,breadcrumb:`Modal configurator`,section:`Tools`,menu:!0,order:5}),v({path:`toastr`,loadComponent:()=>import(`./chunk-BGShWH4y.js`).then(t=>t.Toastr),title:`Toast configurator · Blocks`},{label:`Toast configurator`,breadcrumb:`Toast configurator`,section:`Tools`,menu:!0,order:6}),{path:`glass`,pathMatch:`full`,redirectTo:`appearance`},{path:`**`,redirectTo:`components`}];(class t{static ɵfac=function(e){return new(e||t)};static ɵmod=Se$1({type:t});static ɵinj=we$1({imports:[Q0.forRoot(Y),Q0]})});var Q={providers:[pI(),aA(),Fc(()=>{let t=f(V$1),n=null;try{n=t.defaultView?.localStorage.getItem(`theme-palette`)??null}catch{}let e=f(Ir);e.palettes.some(o=>o.id===n)||e.setPalette(`blue`),e.appearance().quality===`enhanced`&&e.setAppearance({quality:`auto`})}),K0(Y,X0({scrollPositionRestoration:`enabled`,anchorScrolling:`enabled`})),we(B.config),rt({coreLibraryLoader:()=>import(`./chunk-CNLY_5RV.js`),languages:{typescript:()=>import(`./chunk-Da6TFjtL.js`),scss:()=>import(`./chunk--Sjxt33j.js`),xml:()=>import(`./chunk-Bs3bRvME.js`)}})]};var H=class t{static ɵfac=function(e){return new(e||t)};static ɵcmp=ot({type:t,selectors:[[`app-blocks-logo`]],hostAttrs:[`aria-hidden`,`true`],decls:98,vars:0,consts:[[`width`,`805`,`height`,`776`,`viewBox`,`0 0 805 776`,`fill`,`none`,`xmlns`,`http://www.w3.org/2000/svg`],[`d`,`M27.0656 12.8256H776.066V761.826H27.0656V12.8256Z`,`fill`,`url(#paint0_radial_2_133)`],[`filter`,`url(#filter0_f_2_133)`],[`d`,`M647.919 48.2668L90.9866 106.803C64.6221 109.574 45.4959 133.193 48.2669 159.557L103.458 684.665C106.229 711.029 129.848 730.155 156.212 727.384L713.145 668.848C739.509 666.077 758.635 642.459 755.864 616.094L700.673 90.9865C697.902 64.6221 674.283 45.4958 647.919 48.2668Z`,`fill`,`var(--blocks-logo-shadow)`,`fill-opacity`,`0.48`],[`d`,`M647.919 48.2668L90.9866 106.803C64.6221 109.574 45.4959 133.193 48.2669 159.557L103.458 684.665C106.229 711.029 129.848 730.155 156.212 727.384L713.145 668.848C739.509 666.077 758.635 642.459 755.864 616.094L700.673 90.9865C697.902 64.6221 674.283 45.4958 647.919 48.2668Z`,`fill`,`url(#paint1_linear_2_133)`,`stroke-width`,`3`,`stroke`,`url(#paint2_linear_2_133)`],[`id`,`mask0_2_133`,`maskUnits`,`userSpaceOnUse`,`x`,`48`,`y`,`48`,`width`,`709`,`height`,`680`,2,`mask-type`,`luminance`],[`d`,`M647.919 48.2668L90.9866 106.803C64.6221 109.574 45.4959 133.193 48.2669 159.557L103.458 684.665C106.229 711.029 129.848 730.155 156.212 727.384L713.145 668.848C739.509 666.077 758.635 642.459 755.864 616.094L700.673 90.9865C697.902 64.6221 674.283 45.4958 647.919 48.2668Z`,`fill`,`white`],[`mask`,`url(#mask0_2_133)`],[`d`,`M695.656 43.2495L43.2495 111.82L108.475 732.402L760.882 663.831L695.656 43.2495Z`,`fill`,`url(#paint3_radial_2_133)`],[`filter`,`url(#filter1_f_2_133)`],[`d`,`M393.862 300.203C430.447 313.452 484.256 308.802 528.698 282.009`,`stroke-width`,`64`,`stroke-linecap`,`round`,`stroke`,`var(--bx-primary)`,`stroke-opacity`,`0.1`],[`d`,`M393.862 300.203C430.447 313.452 484.256 308.802 528.698 282.009`,`stroke-width`,`13`,`stroke-linecap`,`round`,`stroke`,`url(#paint4_linear_2_133)`],[`d`,`M401.191 293.4C436.572 304.764 483.21 298.856 521.895 274.68`,`stroke-width`,`2.5`,`stroke-linecap`,`round`,`stroke`,`color-mix(in srgb, var(--bx-primary) 8%, var(--blocks-logo-specular))`,`stroke-opacity`,`0.72`],[`d`,`M87.6744 199.658C245.29 120.75 465.028 87.5996 647.647 112.648`,`stroke-width`,`2.5`,`stroke`,`url(#paint5_linear_2_133)`],[`d`,`M100.968 211.332C241.622 143.257 430.531 113.347 582.74 126.508`,`stroke-width`,`1.2`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.12`],[`d`,`M186.583 652.801C342.403 671.617 549.526 642.809 691.594 578.607`,`stroke-width`,`1.4`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.1`],[`d`,`M92.7128 113.66L647.656 55.333C670.725 52.9084 691.391 69.6439 693.816 92.7128L748.798 615.831C751.223 638.9 734.487 659.567 711.418 661.991L156.475 720.318C133.406 722.743 112.74 706.007 110.315 682.939L55.3331 159.82C52.9084 136.751 69.6439 116.085 92.7128 113.66Z`,`stroke-width`,`1.2`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.18`],[`id`,`mask1_2_133`,`maskUnits`,`userSpaceOnUse`,`x`,`55`,`y`,`55`,`width`,`695`,`height`,`666`,2,`mask-type`,`alpha`],[`d`,`M647.656 55.3331L92.7128 113.66C69.6439 116.085 52.9084 136.751 55.3331 159.82L110.315 682.939C112.74 706.008 133.406 722.743 156.475 720.318L711.418 661.991C734.487 659.567 751.223 638.9 748.798 615.831L693.816 92.7128C691.391 69.6439 670.725 52.9085 647.656 55.3331Z`,`fill`,`#D9D9D9`],[`mask`,`url(#mask1_2_133)`],[`filter`,`url(#filter2_f_2_133)`],[`d`,`M532.066 324.826C616.013 324.826 684.066 256.773 684.066 172.826C684.066 88.8783 616.013 20.8256 532.066 20.8256C448.118 20.8256 380.066 88.8783 380.066 172.826C380.066 256.773 448.118 324.826 532.066 324.826Z`,`fill`,`var(--bx-primary)`,`fill-opacity`,`0.1`],[`d`,`M532.066 291.826C597.787 291.826 651.066 238.548 651.066 172.826C651.066 107.104 597.787 53.8256 532.066 53.8256C466.344 53.8256 413.066 107.104 413.066 172.826C413.066 238.548 466.344 291.826 532.066 291.826Z`,`fill`,`url(#paint6_radial_2_133)`,`stroke-width`,`3.5`,`stroke`,`url(#paint7_linear_2_133)`],[`d`,`M640.066 172.826C640.066 232.472 591.712 280.826 532.066 280.826C472.419 280.826 424.066 232.472 424.066 172.826C424.066 113.179 472.419 64.8256 532.066 64.8256C591.712 64.8256 640.066 113.179 640.066 172.826Z`,`stroke-width`,`1.2`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.22`],[`d`,`M522.066 255.826C567.905 255.826 605.066 222.247 605.066 180.826C605.066 139.404 567.905 105.826 522.066 105.826C476.226 105.826 439.066 139.404 439.066 180.826C439.066 222.247 476.226 255.826 522.066 255.826Z`,`fill`,`url(#paint8_radial_2_133)`],[`filter`,`url(#filter3_f_2_133)`],[`d`,`M447.066 188.826C471.066 140.826 506.066 117.826 538.066 134.826C565.066 149.826 580.066 184.826 616.066 168.826`,`stroke-width`,`34`,`stroke-linecap`,`round`,`stroke`,`var(--bx-primary)`,`stroke-opacity`,`0.74`],[`d`,`M447.066 188.826C471.066 140.826 506.066 117.826 538.066 134.826C565.066 149.826 580.066 184.826 616.066 168.826`,`stroke-width`,`12`,`stroke-linecap`,`round`,`stroke`,`url(#paint9_linear_2_133)`],[`d`,`M456.066 183.826C477.066 146.826 507.066 129.826 532.066 143.826C556.066 156.826 571.066 184.826 600.066 172.826`,`stroke-width`,`2.4`,`stroke-linecap`,`round`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.86`],[`d`,`M460.066 123.826C478.066 101.826 505.066 88.8256 532.066 85.8256`,`stroke-width`,`5`,`stroke-linecap`,`round`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.7`],[`d`,`M465.066 130.826C478.066 117.826 493.066 108.826 508.066 103.826`,`stroke-width`,`2`,`stroke-linecap`,`round`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.52`],[`d`,`M482.066 111.326C484.551 111.326 486.566 109.311 486.566 106.826C486.566 104.34 484.551 102.326 482.066 102.326C479.58 102.326 477.566 104.34 477.566 106.826C477.566 109.311 479.58 111.326 482.066 111.326Z`,`fill`,`var(--blocks-logo-specular)`,`fill-opacity`,`0.86`],[`id`,`filter0_f_2_133`,`x`,`0`,`y`,`0`,`width`,`804.131`,`height`,`775.651`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`flood-opacity`,`0`,`result`,`BackgroundImageFix`],[`mode`,`normal`,`in`,`SourceGraphic`,`in2`,`BackgroundImageFix`,`result`,`shape`],[`stdDeviation`,`24`,`result`,`effect1_foregroundBlur_2_133`],[`id`,`filter1_f_2_133`,`x`,`281.853`,`y`,`170.004`,`width`,`358.85`,`height`,`249.357`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`stdDeviation`,`40`,`result`,`effect1_foregroundBlur_2_133`],[`id`,`filter2_f_2_133`,`x`,`300.066`,`y`,`-59.1744`,`width`,`464`,`height`,`464`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`id`,`filter3_f_2_133`,`x`,`406.062`,`y`,`88.2501`,`width`,`251.008`,`height`,`141.579`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`stdDeviation`,`12`,`result`,`effect1_foregroundBlur_2_133`],[`id`,`paint0_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(401.566 349.876) scale(434.42)`],[`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.105`],[`offset`,`0.56`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.025`],[`offset`,`1`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0`],[`id`,`paint1_linear_2_133`,`x1`,`98.0511`,`y1`,`131.158`,`x2`,`667.589`,`y2`,`698.833`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-surface)`,`stop-opacity`,`0.34`],[`offset`,`0.42`,`stop-color`,`var(--blocks-logo-surface)`,`stop-opacity`,`0.15`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-surface)`,`stop-opacity`,`0.07`],[`id`,`paint2_linear_2_133`,`x1`,`43.2495`,`y1`,`111.82`,`x2`,`731.541`,`y2`,`698.267`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.82`],[`offset`,`0.25`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.3`],[`offset`,`0.55`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.52`],[`offset`,`0.8`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.18`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.58`],[`id`,`paint3_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(537.769 235.526) rotate(-6) scale(439.52 418.08)`],[`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.4`],[`offset`,`0.3`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.2`],[`offset`,`0.7`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.055`],[`id`,`paint4_linear_2_133`,`x1`,`393.443`,`y1`,`296.225`,`x2`,`438.356`,`y2`,`354.826`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0`],[`offset`,`0.4`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.44`],[`offset`,`0.68`,`stop-color`,`color-mix(in srgb, var(--bx-primary) 44%, var(--blocks-logo-specular))`,`stop-opacity`,`0.8`],[`id`,`paint5_linear_2_133`,`x1`,`81.9226`,`y1`,`144.933`,`x2`,`218.003`,`y2`,`363.352`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.78`],[`offset`,`0.48`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.2`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0`],[`id`,`paint6_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(486.846 113.326) scale(195.16)`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.54`],[`offset`,`0.28`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.24`],[`offset`,`0.7`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.075`],[`offset`,`1`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.16`],[`id`,`paint7_linear_2_133`,`x1`,`429.726`,`y1`,`63.3456`,`x2`,`639.166`,`y2`,`291.826`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.94`],[`offset`,`0.3`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.36`],[`offset`,`0.66`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.56`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.82`],[`id`,`paint8_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(508.786 165.826) scale(112.88 102)`],[`stop-color`,`color-mix(in srgb, var(--bx-primary) 10%, var(--blocks-logo-specular))`,`stop-opacity`,`0.96`],[`offset`,`0.18`,`stop-color`,`color-mix(in srgb, var(--bx-primary) 52%, var(--blocks-logo-specular))`,`stop-opacity`,`0.9`],[`offset`,`0.48`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.66`],[`id`,`paint9_linear_2_133`,`x1`,`447.066`,`y1`,`135.211`,`x2`,`498.003`,`y2`,`236.364`,`gradientUnits`,`userSpaceOnUse`],[`offset`,`0.34`,`stop-color`,`color-mix(in srgb, var(--bx-primary) 68%, var(--blocks-logo-specular))`,`stop-opacity`,`0.88`],[`offset`,`0.58`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.98`],[`offset`,`0.84`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.86`]],template:function(e,o){e&1&&(vy(),jc(0,`svg`,0),ra(1,`path`,1),jc(2,`g`,2),ra(3,`path`,3),Bc(),ra(4,`path`,4),jc(5,`mask`,5),ra(6,`path`,6),Bc(),jc(7,`g`,7),ra(8,`path`,8),jc(9,`g`,9),ra(10,`path`,10),Bc(),ra(11,`path`,11)(12,`path`,12)(13,`path`,13)(14,`path`,14)(15,`path`,15),Bc(),ra(16,`path`,16),jc(17,`mask`,17),ra(18,`path`,18),Bc(),jc(19,`g`,19)(20,`g`,20),ra(21,`path`,21),Bc()(),ra(22,`path`,22)(23,`path`,23)(24,`path`,24),jc(25,`g`,25),ra(26,`path`,26),Bc(),ra(27,`path`,27)(28,`path`,28)(29,`path`,29)(30,`path`,30)(31,`path`,31),jc(32,`defs`)(33,`filter`,32),ra(34,`feFlood`,33)(35,`feBlend`,34)(36,`feGaussianBlur`,35),Bc(),jc(37,`filter`,36),ra(38,`feFlood`,33)(39,`feBlend`,34)(40,`feGaussianBlur`,37),Bc(),jc(41,`filter`,38),ra(42,`feFlood`,33)(43,`feBlend`,34)(44,`feGaussianBlur`,37),Bc(),jc(45,`filter`,39),ra(46,`feFlood`,33)(47,`feBlend`,34)(48,`feGaussianBlur`,40),Bc(),jc(49,`radialGradient`,41),ra(50,`stop`,42)(51,`stop`,43)(52,`stop`,44),Bc(),jc(53,`linearGradient`,45),ra(54,`stop`,46)(55,`stop`,47)(56,`stop`,48),Bc(),jc(57,`linearGradient`,49),ra(58,`stop`,50)(59,`stop`,51)(60,`stop`,52)(61,`stop`,53)(62,`stop`,54),Bc(),jc(63,`radialGradient`,55),ra(64,`stop`,56)(65,`stop`,57)(66,`stop`,58)(67,`stop`,44),Bc(),jc(68,`linearGradient`,59),ra(69,`stop`,60)(70,`stop`,61)(71,`stop`,62)(72,`stop`,44),Bc(),jc(73,`linearGradient`,63),ra(74,`stop`,64)(75,`stop`,65)(76,`stop`,66),Bc(),jc(77,`radialGradient`,67),ra(78,`stop`,68)(79,`stop`,69)(80,`stop`,70)(81,`stop`,71),Bc(),jc(82,`linearGradient`,72),ra(83,`stop`,73)(84,`stop`,74)(85,`stop`,75)(86,`stop`,76),Bc(),jc(87,`radialGradient`,77),ra(88,`stop`,78)(89,`stop`,79)(90,`stop`,80)(91,`stop`,44),Bc(),jc(92,`linearGradient`,81),ra(93,`stop`,60)(94,`stop`,82)(95,`stop`,83)(96,`stop`,84)(97,`stop`,44),Bc()()())},styles:[`
[_nghost-%COMP%] {
  display: block;
  flex: none;
  --%NS%blocks-logo-surface: var(--%NS%bx-bg-element, #f5f5f5);
  --%NS%blocks-logo-specular: color-mix(in srgb, var(--%NS%bx-bg-surface, #ffffff) 88%, var(--%NS%bx-text-primary, #171717) 12%);
  --%NS%blocks-logo-shadow: color-mix(in srgb, var(--%NS%bx-bg-canvas, #ffffff) 75%, var(--%NS%bx-text-heading, #171717) 25%);
}
[data-theme=dark][_nghost-%COMP%], [data-theme=dark]   [_nghost-%COMP%] {
  --%NS%blocks-logo-specular: color-mix(in srgb, var(--%NS%bx-bg-element, #262626) 25%, var(--%NS%bx-text-primary, #e5e5e5) 75%);
}
svg[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  height: 100%;
}`]})};var ze=[`menuToggle`];var Ve=()=>({exact:!0});var Re=(t,n)=>n.id;var Ze=(t,n)=>n.route;function je(t,n){if(t&1){let e=mk();Mt(0,`header`,8)(1,`a`,9),at(`click`,function(){oy(e);let p=pr();return sy(p.closeMobileMenu())}),vi(2,`app-blocks-logo`,10),Mt(3,`span`),ko(4),$t()(),Mt(5,`button`,11,0),at(`click`,function(){oy(e);let p=pr();return sy(p.toggleMobileMenu())}),Mt(7,`span`,12),vi(8,`span`,13)(9,`span`,13)(10,`span`,13),$t()()(),Mt(11,`button`,14),at(`click`,function(){oy(e);let p=pr();return sy(p.closeMobileMenu())}),$t()}if(t&2){let e=pr();Ut(4),zc(e.title()),Ut(),ut(`is-open`,e.isHamburgerMenuOpen()),Jt(`aria-expanded`,e.isHamburgerMenuOpen())(`aria-label`,e.isHamburgerMenuOpen()?`Close navigation`:`Open navigation`),Ut(6),ut(`navigation-scrim-open`,e.isHamburgerMenuOpen()),Jt(`aria-hidden`,e.isHamburgerMenuOpen()?null:`true`)(`inert`,e.isHamburgerMenuOpen()?null:``)}}function $e(t,n){if(t&1&&(Mt(0,`div`,2)(1,`a`,15),vi(2,`app-blocks-logo`,10),Mt(3,`span`),ko(4),$t()(),Mt(5,`span`),ko(6,`Component library`),$t()()),t&2){let e=pr();Ut(4),zc(e.title())}}function qe(t,n){if(t&1){let e=mk();Mt(0,`a`,17),at(`click`,function(){oy(e);let p=pr(2);return sy(p.closeMobileMenu())}),ko(1),$t()}if(t&2){let e=n.$implicit;Mo(`routerLink`,e.route)(`routerLinkActiveOptions`,tA(3,Ve)),Ut(),yi(` `,e.label,` `)}}function Ye(t,n){if(t&1&&(Mt(0,`section`,6)(1,`h2`),ko(2),$t(),Np(3,qe,2,4,`a`,16,Ze),$t()),t&2){let e=n.$implicit;Jt(`aria-label`,e.title),Ut(2),zc(e.title),Ut(),Op(e.items)}}function Qe(t,n){t&1&&(Mt(0,`p`,7),ko(1,`No matching pages.`),$t())}var F=class t{dimensions=f(Ju);navigation=f(_$1);isHamburgerMenuOpen=I$1(!1);isHamburgerMenu=K$3(()=>this.dimensions.dimensions().width<=this.dimensions.breakpoints.lg);query=I$1(``);groups=K$3(()=>{let n=this.query().trim().toLowerCase();return this.navigation.menuGroups().map(e=>s(r({},e),{items:e.items.filter(o=>!n||`${o.label} ${e.title}`.toLowerCase().includes(n))})).filter(e=>e.items.length>0)});title=P.required();scrollLock=f(B_);scrollLockId=yE();menuToggle=GG(`menuToggle`,{read:te$3});constructor(){xe$2(()=>{this.isHamburgerMenuOpen()?this.scrollLock.disableScroll(this.scrollLockId,{handleTouchInput:!1}):this.scrollLock.enableScroll(this.scrollLockId)}),f(ne$1).onDestroy(()=>this.scrollLock.enableScroll(this.scrollLockId)),xe$2(()=>{this.isHamburgerMenu()||this.isHamburgerMenuOpen.set(!1)})}toggleMobileMenu(){this.menuToggle()?.nativeElement.focus({preventScroll:!0}),this.isHamburgerMenuOpen.update(n=>!n)}closeMobileMenu(){this.isHamburgerMenuOpen.set(!1)}static ɵfac=function(e){return new(e||t)};static ɵcmp=ot({type:t,selectors:[[`app-sidenav`]],viewQuery:function(e,o){e&1&&uw(o.menuToggle,ze,5,te$3),e&2&&Ck()},inputs:{title:[1,`title`]},decls:9,vars:12,consts:[[`menuToggle`,``],[`bxSurface`,``,`id`,`component-navigation`,`tabindex`,`-1`,1,`sidebar`,3,`keydown.escape`,`cdkTrapFocus`,`cdkTrapFocusAutoCapture`],[1,`sidebar-header`],[`placeholder`,`Search pages...`,1,`navigation-search`,3,`ngModelChange`,`ngModel`],[1,`sidebar-scroll`],[`aria-label`,`Component documentation`],[1,`navigation-group`],[1,`empty-navigation`],[`bxSurface`,``,1,`mobile-header`],[`routerLink`,`/home`,1,`brand`,3,`click`],[1,`brand-logo`],[`type`,`button`,`aria-controls`,`component-navigation`,1,`menu-toggle`,3,`click`],[`aria-hidden`,`true`,1,`hamburger-icon`],[1,`hamburger-line`],[`type`,`button`,`aria-label`,`Close navigation`,`tabindex`,`-1`,1,`navigation-scrim`,3,`click`],[`routerLink`,`/home`,1,`brand`],[`bxSurface`,``,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,3,`routerLink`,`routerLinkActiveOptions`],[`bxSurface`,``,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,3,`click`,`routerLink`,`routerLinkActiveOptions`]],template:function(e,o){e&1&&(hr(0,je,12,9),Mt(1,`aside`,1),at(`keydown.escape`,function(){return o.closeMobileMenu()}),hr(2,$e,7,1,`div`,2),Mt(3,`bx-search-input`,3),rx(),at(`ngModelChange`,function(z){return o.query.set(z)}),$t(),Mt(4,`div`,4)(5,`nav`,5),Np(6,Ye,5,2,`section`,6,Re,!1,Qe,2,0,`p`,7),$t()()()),e&2&&(fr(o.isHamburgerMenu()?0:-1),Ut(),ut(`mobile-sidebar`,o.isHamburgerMenu())(`mobile-sidebar-open`,!o.isHamburgerMenu()||o.isHamburgerMenuOpen()),Mo(`cdkTrapFocus`,o.isHamburgerMenu()&&o.isHamburgerMenuOpen())(`cdkTrapFocusAutoCapture`,o.isHamburgerMenu()&&o.isHamburgerMenuOpen()),Jt(`aria-hidden`,o.isHamburgerMenu()&&!o.isHamburgerMenuOpen()?`true`:null)(`inert`,o.isHamburgerMenu()&&!o.isHamburgerMenuOpen()?``:null),Ut(),fr(o.isHamburgerMenu()?-1:2),Ut(),Mo(`ngModel`,o.query()),ox(),Ut(3),Op(o.groups()))},dependencies:[BO,jO,pY,uY,WN,te$1,Lu,Y0,Ar,H],styles:[`
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
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
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
}`]})};var We=()=>({useTopLayer:!0});var Xe=(t,n)=>n.id;function Je(t,n){if(t&1){let e=mk();Mt(0,`bx-menu-item`,16),at(`action`,function(){let p=oy(e).$implicit,z=pr(2);return sy(z.theme.setPalette(p.id))}),$t()}if(t&2){let e=n.$implicit,o=pr(2);Mo(`label`,e.label)(`icon`,o.selectedThemeId()===e.id?`check`:void 0)}}function Ke(t,n){if(t&1&&(Mt(0,`bx-menu`),Np(1,Je,1,2,`bx-menu-item`,15,Xe),$t()),t&2){let e=pr();Ut(),Op(e.availableThemes)}}var G=class t{document=f(V$1);highlight=f(V);theme=f(Ir);availableThemes=this.theme.palettes;selectedThemeId=this.theme.palette;selectedThemeLabel=this.theme.paletteLabel;isDarkMode=K$3(()=>this.theme.activeTheme()===`dark`);constructor(){xe$2(()=>{let n=this.isDarkMode();this.document.documentElement.setAttribute(`data-theme`,n?`dark`:`light`),this.document.defaultView&&this.highlight.setTheme(n?`assets/styles/vs2015.css`:`assets/styles/github.css`)})}toggleTheme(){this.theme.setApplicationTheme(this.isDarkMode()?`light`:`dark`)}static ɵfac=function(e){return new(e||t)};static ɵcmp=ot({type:t,selectors:[[`app-root`]],decls:22,vars:6,consts:[[`themeMenu`,``],[`href`,`#main-content`,1,`skip-link`],[1,`app-container`],[`title`,`Blocks`],[1,`app-main`],[`data-bx-light-scope`,``,`bxSurface`,``,`aria-label`,`Playground appearance`,1,`app-toolbar`,3,`bxOverlayContext`],[1,`toolbar-label`],[1,`toolbar-actions`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`routerLink`,`/appearance`,`aria-label`,`Configure appearance for the whole playground`,1,`appearance-button`],[`name`,`sliders-horizontal`,`size`,`20`],[`bx-button`,``,`type`,`button`,`bxTransition`,`fade`,`placement`,`bottom`,`variant`,`tonal`,`color`,`grayscale`,`aria-label`,`Choose theme palette`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`theme-mode-toggle`,3,`click`],[`size`,`20`,3,`name`],[`id`,`main-content`,`tabindex`,`-1`,1,`app-content-container`],[3,`label`,`icon`],[3,`action`,`label`,`icon`]],template:function(e,o){if(e&1&&(Mt(0,`a`,1),ko(1,`Skip to content`),$t(),Mt(2,`div`,2),vi(3,`app-sidenav`,3),Mt(4,`div`,4)(5,`header`,5)(6,`span`,6),ko(7,`Component playground`),$t(),Mt(8,`div`,7)(9,`a`,8),vi(10,`bx-icon`,9),Mt(11,`span`),ko(12,`Appearance`),$t()(),Mt(13,`button`,10),ko(14),vi(15,`bx-icon`,11),$t(),Mt(16,`button`,12),at(`click`,function(){return o.toggleTheme()}),vi(17,`bx-icon`,13),$t()()(),Mt(18,`main`,14),vi(19,`router-outlet`),$t()()(),rw(20,Ke,3,0,`ng-template`,null,0,sA)),e&2){let p=wk(21);Ut(5),Mo(`bxOverlayContext`,tA(5,We)),Ut(8),Mo(`bxDropdown`,p),Ut(),zc(o.selectedThemeLabel()),Ut(2),Jt(`aria-label`,o.isDarkMode()?`Switch to light theme`:`Switch to dark theme`),Ut(),Mo(`name`,o.isDarkMode()?`sun`:`moon`)}},dependencies:[Pm,Lu,F,S,dd,_E,EE,YE,ZE,Ar],styles:[`
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
}`]})};lR(G,s(r({},Q),{providers:[aA(),...Q.providers]})).catch(t=>console.error(t));export{ht as a,K$1 as c,h$1 as d,te$1 as f,j as i,Z as l,ue as n,e as o,X as p,L as r,J$1 as s,S as t,O as u};