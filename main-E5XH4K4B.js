import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{$ as Ka$1,$n as ho$1,An as bS,Ar as og,At as QA,B as Hr$1,Bn as et$3,Br as qu,Bt as Re,C as Ec,Ci as za$1,Cn as Za,Cr as mn$2,D as Fn$2,Di as zu,Dr as nf,E as F,En as _$1,Er as ne$1,Et as Ps,F as HO,Fn as de,Fr as ps,Ft as Qm,Gn as fs,Gr as tY,Gt as Si$1,H as Ht$1,Hn as fe,Hr as rr$1,I as H_,In as di$1,Ir as pt$1,It as Qt$1,Jn as go$1,Jr as tr$1,Jt as T9,K as Ir$1,Kn as g,Kt as Sr$1,L as Hb,Ln as ds,Mn as bf,Mr as pP,Mt as QP,Nn as bg,Nr as pe,Nt as Qe$2,O as Fx,Or as nr$1,Ot as Px,P as Gr$1,Pn as cn$2,Pr as pn$2,Pt as Qf,Q as K$1,Qn as hn$2,Qr as uM,R as He,Rn as dt$1,Rr as qe,Rt as R$1,S as E_,Sn as ZO,Sr as me$1,T as Ev,Tn as Zu,Tr as nD,U as Hx,Un as fi$1,Ur as si$1,Ut as SP,V as Hs,Vn as f,Vr as re,W as I9,Wn as fo$1,Wt as Sf,X as Ji$1,Xn as he,Xr as tv,Y as Je$2,Yn as gt,Yr as tt$2,Yt as Tf,Z as Jn$3,Zn as hi$1,Zr as u8,Zt as U$2,_ as Df,_i as yP,_n as Ym,_r as le,_t as O9,a as $t$1,an as Wa,ar as j$1,at as Le,b as Dx,bi as z$1,bn as Yv,br as mP,c as Al,cn as Wr$1,cr as je,ct as M$1,d as Be,di as wv,dn as Xf,dt as Mt,en as Un$2,er as hs,fi as x,fn as Xn$2,fr as ju,ft as N9,g as DD,gi as y,gr as kx,gt as O$2,h as Ct,hi as xf,hn as Ya,hr as kt$1,ht as Nx,ii as ut$1,in as W,ir as ir$1,j as Ge,jn as be$1,jr as ot$2,k as G0,kn as _x,kr as oI,kt as Q$1,l as Ax,li as we$1,lt as Me$2,mi as xe$1,mr as kg,mt as Nt,n as $e,ni as uo$1,nr as hx,o as AP,oi as ve,on as Wd,or as jO,p as Bs,pi as xE,pn as Xu,pt as Nf,qn as gL,qr as ti$1,qt as T,r as $k,ri as us,rn as Vk,rr as ie$1,sn as Wm,sr as jP,st as Lx,t as $a$1,ti as un$2,tn as Ut$1,tr as ht$1,tt as Km,u as BO,un as XP,ur as jr$1,ut as Mf,v as Dn$2,vi as ym,vn as Yo,vr as lt$1,w as Ee$2,wi as ze,wn as Ze$2,wr as ms,x as E,xi as z0,xn as Z,xt as On$2,y as Dt$1,yn as Yr,yr as mL,yt as Oe$2,z as Hk,zn as dy}from"./chunk-tIcWR06h.js";var Y=new E(`NAVIGATION_CONFIG`);var rn$2=new E(`NAVIGATION_ACCESS_ADAPTER`);var J$2=class i{router=f(Xn$2);config=f(Y,{optional:!0});i18n=f(ze,{optional:!0});accessAdapter=f(rn$2,{optional:!0});navEnd=tY(this.router.events.pipe(ut$1(t=>t instanceof hn$2)));current=y(()=>(this.navEnd(),this.i18n?.version?.(),this.resolveCurrent(this.router.routerState.snapshot.root)));routeBase=y(()=>this.accessAdapter?.resolveBaseRoute());routes=y(()=>(this.navEnd(),this.i18n?.version?.(),this.extractRoutes(this.router.config)));baseRoute=y(()=>{let t=this.routes(),e=this.routeBase(),n,o=l=>{for(let c of l){if(c.data?.root&&(n||(n=c.route),e&&c.route.startsWith(e)))return c.route;if(c.children?.length){let g=o(c.children);if(g)return g}}};return o(t)??n??e});menu=y(()=>this.buildMenu(this.routes()));menuGroups=y(()=>{let t=[...this.config?.sections??[]].sort((n,o)=>(n.order??Number.POSITIVE_INFINITY)-(o.order??Number.POSITIVE_INFINITY)),e=new Map(t.map(n=>[n.id,{id:n.id,title:Me$2(n.title??n.id,this.i18n),items:[]}]));for(let n of this.flattenRoutes(this.menu())){if(!n.visible||n.data?.menu===!1)continue;let o=n.section??``,a=e.get(o);a||(a={id:o,title:o,items:[]},e.set(o,a)),a.items.push(s(r({},n),{children:void 0}))}return[...e.values()].filter(n=>n.items.length>0)});menuTreeGroups=y(()=>{this.i18n?.version?.();let t=[...this.config?.sections??[]].sort((n,o)=>(n.order??1/0)-(o.order??1/0)),e=new Map(t.map(n=>[n.id,s(r({},n),{title:Me$2(n.title??n.id,this.i18n),items:[]})]));return this.groupTree(this.menu(),e),[...e.values()].filter(n=>n.items.length>0)});navigateBack(){let t=this.current().breadcrumbs;if(t.length>1){let e=t[t.length-2];this.router.navigateByUrl(e.route)}else this.router.navigateByUrl(this.routeBase()??`/`)}groupTree(t,e,n=``,o){for(let a of t){let l=a.section??n,c=e.get(l);if(c||(c={id:l,title:l,items:[]},e.set(l,c)),!a.visible||a.data?.hidden)continue;if(a.data?.menu===!1){this.groupTree(a.children??[],e,l,l===n?o:void 0);continue}let g=s(r({},a),{section:l,children:[]});(o&&l===n?o.children??=[]:c.items).push(g),this.groupTree(a.children??[],e,l,g)}}includeBreadcrumb(t){if(t.data?.hidden&&!this.config?.includeHiddenInBreadcrumbs)return!1;let e=this.config?.sections?.find(n=>n.id===t.section);return t.showInBreadcrumbs??t.data?.showInBreadcrumbs??e?.showInBreadcrumbs??!0}extractRoutes(t,e=[],n){let o=[];for(let a of t){if(a.redirectTo||this.accessAdapter&&!this.accessAdapter.canAccessMenu(a.data??{}))continue;let l=a.path??``,c=l?[...e,l]:[...e],g=`/`+c.filter(Boolean).join(`/`),_=a.data?.nav,x=a.children?.length?this.extractRoutes(a.children,c,_?.section??n):[];if(!_){o.push(...x);continue}let T={id:g,route:g,label:this.resolveNavText(_.label,{snapshot:void 0})??``,icon:_.icon,showInBreadcrumbs:_.showInBreadcrumbs,section:_.section??n,visible:_.visible?_.visible():!0,data:_,children:x};o.push(T)}return this.sortNavigationItems(o)}resolveCurrent(t){let e=t,n;for(;e;){let T=e.children.find(k=>k.outlet===`primary`)??null;if(!T){n=e;break}e=T}if(!n)return{breadcrumbs:[]};let o=n.pathFromRoot.flatMap(T=>T.url.map(k=>k.path)).filter(Boolean),a=[],l=this.flattenRoutes(this.routes()),c=``;for(let T of o){c+=`/`+T;let k=this.matchRouteToUrl(l,c);if(k?.data&&this.includeBreadcrumb(k)){let ae={snapshot:n},G=this.resolveNavText(k.data.breadcrumb,ae)??this.resolveNavText(k.data.label,ae);G&&a[a.length-1]?.label!==G&&a.push({label:G,route:c})}}let g=n.routeConfig?.data?.nav,_=`/`+o.join(`/`),x;return g&&!g.hidden&&(x={id:_,route:_,label:this.resolveNavText(g.label,{snapshot:n})??``,icon:g.icon,showInBreadcrumbs:g.showInBreadcrumbs,section:g.section,visible:g.visible?g.visible():!0,data:g}),{current:x,breadcrumbs:a}}buildMenu(t){return t.map(e=>{if(!e.visible||e.data?.hidden)return null;let n=this.buildMenu(e.children??[]);return!(e.visible&&e.data?.menu!==!1)&&!n.length?null:s(r({},e),{children:n})}).filter(e=>e!==null)}sortNavigationItems(t){let e=this.config?.sortItems;return[...t].sort((n,o)=>{if(e)return e(n,o);let a=n.data?.order??Number.POSITIVE_INFINITY,l=o.data?.order??Number.POSITIVE_INFINITY;return a!==l?a-l:n.label.localeCompare(o.label)})}matchRouteToUrl(t,e){return t.find(o=>o.route===e)||t.find(o=>o.route.includes(`:`)?new RegExp(`^`+o.route.replace(/:[^\s/]+/g,`([^/]+)`)+`$`).test(e):!1)}flattenRoutes(t){return t.reduce((e,n)=>(e.push(n),n.children&&e.push(...this.flattenRoutes(n.children)),e),[])}resolveNavText(t,e){if(!t)return;let n=typeof t==`function`?t(e):t;return tr$1(n)?this.i18n?.translate(n.key,{route:e.snapshot})??n.key:n}static ɵfac=function(e){return new(e||i)};static ɵprov=T({token:i,factory:i.ɵfac,providedIn:`root`})};var bn$1=(i,t)=>t.route;function gn$1(i,t){if(i&1&&(W(0,`span`,1),je(1),Q$1()),i&2){let e=de().$implicit;M$1(),tt$2(e.label)}}function vn$1(i,t){if(i&1&&(W(0,`a`,2),je(1),Q$1(),Le(2,`bx-icon`,3)),i&2){let e=de().$implicit,n=de(2);fe(`routerLink`,e.route),M$1(),tt$2(e.label),M$1(),fe(`name`,n.divider())}}function hn$1(i,t){if(i&1&&pe(0,gn$1,2,1,`span`,1)(1,vn$1,3,3),i&2){let e=t.$index,n=t.$count;me$1(e===n-1?0:1)}}function fn$1(i,t){if(i&1&&(W(0,`nav`,0),Gr$1(1,hn$1,2,1,null,null,bn$1),Q$1()),i&2){let e=de();ve(`aria-label`,e.ariaLabel()),M$1(),Wr$1(e.current().breadcrumbs)}}var sn$1=class i{navigationService=f(J$2);a11y=f(xe$1);isAnimated=y(()=>!this.a11y.isReducedMotion());minimumBreadcrumbs=g(2);divider=g(`chevron-right`);showBreadcumbs=y(()=>{let t=Math.max(1,this.minimumBreadcrumbs());return this.current().breadcrumbs.length>=t});ariaLabel=y(()=>`Breadcrumbs: ${this.current().breadcrumbs.map(e=>e.label).join(` > `)}`);current=this.navigationService.current;static ɵfac=function(e){return new(e||i)};static ɵcmp=le({type:i,selectors:[[`bx-breadcrumbs`]],inputs:{minimumBreadcrumbs:[1,`minimumBreadcrumbs`],divider:[1,`divider`]},decls:1,vars:1,consts:[[1,`breadcrumbs`],[`aria-current`,`page`,1,`crumb`,`last`],[1,`crumb`,3,`routerLink`],[`size`,`16`,1,`breadcrumb-separator`,3,`name`]],template:function(e,n){e&1&&pe(0,fn$1,3,1,`nav`,0),e&2&&me$1(n.showBreadcumbs()?0:-1)},dependencies:[xE,Dt$1],styles:[`
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
}`]})};function Lt$1(i){return{config:i,withNav(t,e){return xn$1(t,e)}}}function At$1(i){return[{provide:Y,useValue:i}]}function xn$1(i,t){let e=i.data?.nav??{};return s(r({},i),{data:s(r({},i.data??{}),{nav:r(r({},e),t)})})}var O$1={side:`left`,position:`fixed`,width:`17rem`,collapsedWidth:`4.5rem`,searchable:!0,showItemIcons:!0,showSectionIcons:!0,collapsible:!0,collapsed:!1,mobileBreakpoint:`lg`,showMobileTrigger:!0,ariaLabel:`Main navigation`,searchPlaceholder:`Search navigation…`,searchLabel:`Search navigation`,clearSearchLabel:`Clear search`,emptyText:`No matching pages.`,openLabel:`Open navigation`,closeLabel:`Close navigation`,collapseLabel:`Collapse navigation`,expandLabel:`Expand navigation`,submenuLabel:`Open submenu`,resultLabel:`Search result`};var Ne$1={paths:`subset`,queryParams:`ignored`,matrixParams:`ignored`,fragment:`ignored`};var cn$1=s(r({},Ne$1),{paths:`exact`});function dn$1(i){return i.normalize(`NFD`).replace(new RegExp(`\\p{M}`,`gu`),``).toLocaleLowerCase().trim()}function Se$1(i,t){let e=dn$1(i),n=dn$1(t);if(!n)return 0;if(e===n)return 1e3;if(e.includes(n))return Math.max(600,800-e.indexOf(n)-(e.length-n.length));let o=0,a=0;for(let l of e)l===n[o]?o++:o&&a++;if(o===n.length)return Math.max(1,500-a-e.length);if(n.length<4)return-1;for(let l of e.split(/\s+/)){if(Math.abs(l.length-n.length)>1)continue;let c=Array.from({length:n.length+1},(g,_)=>_);for(let g=1;g<=l.length;g++){let _=c[0];c[0]=g;for(let x=1;x<=n.length;x++){let T=c[x];c[x]=Math.min(c[x]+1,c[x-1]+1,_+(l[g-1]===n[x-1]?0:1)),_=T}}if(c[n.length]<=1)return 250}return-1}function mn$1(i,t){if(!t.trim())return{groups:i,path:[]};let e=-1,n=[],o,a=(c,g,_)=>c.flatMap(x=>{let T=[...g,x.id],k=x.data?.disabled?[]:a(x.children??[],T,_),ae=x.data?.keywords?.filter(ye=>typeof ye==`string`)??[],G=Math.max(Se$1(x.label,t),...ae.map(ye=>Se$1(ye,t)),Se$1(_,t)-100);return G>e&&!x.data?.disabled&&(e=G,n=T,o=x.label),G>=0||k.length?[s(r({},x),{children:G>=0&&!k.length?x.children:k})]:[]});return{groups:i.map(c=>s(r({},c),{items:a(c.items,[],c.title)})).filter(c=>c.items.length),path:n,target:n.at(-1),label:o}}function Me$1(i,t){let e=(n,o)=>{for(let a of n){let l=[...o,a.id];if(a.id===t)return l;let c=e(a.children??[],l);if(c)return c}};for(let n of i){let o=e(n.items,[]);if(o)return o}return[]}var H=class i{router=f(Xn$2);activeRoute=tY(this.router.events.pipe(ut$1(t=>t instanceof hn$2)));i18n=f(ze,{optional:!0});lastSelected=_$1(void 0);rememberedPath=_$1([]);searchSelected=_$1(!1);config=_$1({});sourceGroups=_$1([]);query=_$1(``);itemTemplate=_$1(void 0);activated=new ie$1;groups=y(()=>{this.i18n?.version?.();let t=e=>e.filter(n=>n.visible&&!n.data?.hidden).map(n=>s(r({},n),{label:n.data?.label===void 0?n.label:this.resolveNav(n.data.label),data:s(r({},n.data),{keywords:n.data?.keywords?.map(o=>this.resolveNav(o))}),children:t(n.children??[])}));return this.sourceGroups().map(e=>s(r({},e),{items:t(e.items)}))});activeItem=y(()=>(this.activeRoute(),this.findActiveItem(this.groups().flatMap(t=>t.items))));activeIds=y(()=>{let t=this.activeItem();return new Set(t?Me$1(this.groups(),t.id):[])});searchResult=y(()=>mn$1(this.groups(),this.query()));revealPath=y(()=>this.query().trim()?this.searchSelected()?[]:this.searchResult().path:this.rememberedPath());target=y(()=>this.query().trim()&&!this.searchSelected()?this.searchResult().target:void 0);text=y(()=>{this.i18n?.version?.();let t=this.config();return{ariaLabel:Me$2(t.ariaLabel??O$1.ariaLabel,this.i18n),searchPlaceholder:Me$2(t.searchPlaceholder??O$1.searchPlaceholder,this.i18n),searchLabel:Me$2(t.searchLabel??O$1.searchLabel,this.i18n),clearSearchLabel:Me$2(t.clearSearchLabel??O$1.clearSearchLabel,this.i18n),emptyText:Me$2(t.emptyText??O$1.emptyText,this.i18n),openLabel:Me$2(t.openLabel??O$1.openLabel,this.i18n),closeLabel:Me$2(t.closeLabel??O$1.closeLabel,this.i18n),collapseLabel:Me$2(t.collapseLabel??O$1.collapseLabel,this.i18n),expandLabel:Me$2(t.expandLabel??O$1.expandLabel,this.i18n),submenuLabel:Me$2(t.submenuLabel??O$1.submenuLabel,this.i18n),resultLabel:Me$2(t.resultLabel??O$1.resultLabel,this.i18n)}});constructor(){f(K$1).onDestroy(()=>this.activated.complete())}isCurrent(t){return this.activeRoute(),!t.data?.disabled&&this.router.isActive(t.route,cn$1)}search(t){let e=!!this.query().trim();if(this.searchSelected.set(!1),this.query.set(t),e&&!t.trim()){let n=this.lastSelected();this.rememberedPath.set(n?Me$1(this.groups(),n):[])}else this.rememberedPath.set([])}select(t){t.data?.disabled||(this.lastSelected.set(t.id),this.searchSelected.set(!0),this.rememberedPath.set([]),this.activated.next(t))}findActiveItem(t){let e;for(let n of t){let o=this.findActiveItem(n.children??[]),a=!n.data?.disabled&&this.router.isActive(n.route,Ne$1)?n:void 0,l=o&&(!a||this.routeSpecificity(o)>=this.routeSpecificity(a))?o:a;l&&(!e||this.routeSpecificity(l)>this.routeSpecificity(e))&&(e=l)}return e}routeSpecificity(t){return t.route.split(/[?#]/)[0].length}resolveNav(t){return Me$2(typeof t==`function`?t({snapshot:void 0}):t,this.i18n)}static ɵfac=function(e){return new(e||i)};static ɵprov=T({token:i,factory:i.ɵfac})};var _n$1=(i,t,e)=>({$implicit:i,active:t,collapsed:e});var yn$1=()=>({});var Cn$1=(i,t)=>t.id;function Nn$1(i,t){if(i&1&&zu(0,8),i&2){let e=de(2);fe(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,Hk(2,_n$1,e.item(),e.active(),e.compact()))}}function Sn$1(i,t){if(i&1&&zu(0,9),i&2){de(2);let e=Wa(6);fe(`ngTemplateOutlet`,e)}}function Mn$1(i,t){if(i&1){let e=fs();W(0,`a`,7),be$1(`click`,function(){jr$1(e);let o=de();return Hr$1(o.select())})(`keydown`,function(o){jr$1(e);let a=de();return Hr$1(a.openOnArrow(o))}),pe(1,Nn$1,1,6,`ng-container`,8)(2,Sn$1,1,1,`ng-container`,9),Q$1()}if(i&2){let e,n=de();fe(`routerLink`,n.item().data?.disabled?null:n.item().route)(`bxTooltip`,n.compact()?n.item().label:``)(`placement`,n.side()),ve(`aria-current`,n.current()?`page`:null)(`aria-disabled`,n.item().data?.disabled||null)(`tabindex`,n.item().data?.disabled?-1:0)(`aria-label`,n.compact()?n.item().label:null),M$1(),me$1((e=n.state.itemTemplate())?1:2,e)}}function In$1(i,t){if(i&1&&zu(0,9),i&2){de(2);let e=Wa(6);fe(`ngTemplateOutlet`,e)}}function On$1(i,t){if(i&1&&Le(0,`bx-icon`,11),i&2){let e=de(2);fe(`name`,e.side()===`right`?`chevron-right`:`chevron-left`)}}function Tn$1(i,t){if(i&1){let e=fs();W(0,`a`,15),be$1(`click`,function(){jr$1(e);let o=de(3);return Hr$1(o.select())}),je(1),Q$1()}if(i&2){let e=de(3);re(`is-active`,e.active()),fe(`routerLink`,e.item().route),ve(`aria-current`,e.current()?`page`:null),M$1(),tt$2(e.item().label)}}function wn$1(i,t){if(i&1&&Le(0,`bx-side-nav-branch`,14),i&2){let e=t.$implicit;de(2);let n=Wa(1);fe(`item`,e)(`parentTrigger`,n)}}function Pn$1(i,t){if(i&1&&(W(0,`div`,12)(1,`bx-menu`),pe(2,Tn$1,2,5,`a`,13),Gr$1(3,wn$1,1,2,`bx-side-nav-branch`,14,Cn$1),Q$1()()),i&2){let e=de(2);re(`is-right`,e.state.config().side===`right`),M$1(2),me$1(e.compact()?2:-1),M$1(),Wr$1(e.item().children)}}function kn$1(i,t){if(i&1&&(W(0,`button`,10,2),pe(2,In$1,1,1,`ng-container`,9)(3,On$1,1,1,`bx-icon`,11),Q$1(),E_(4,Pn$1,5,3,`ng-template`,null,3,Qm)),i&2){let e=Wa(5),n=de(),o=Wa(1);re(`bx-nav-link`,n.compact()),fe(`disabled`,n.item().data?.disabled)(`bxMenuTrigger`,e)(`menuOrigin`,o)(`menuParent`,n.parentTrigger())(`menuSide`,n.side())(`menuLabel`,n.item().label)(`menuHover`,!0)(`menuPinned`,n.state.revealPath().includes(n.item().id)),ve(`aria-label`,n.state.text().submenuLabel+`: `+n.item().label),M$1(2),me$1(n.compact()?2:3)}}function Rn$1(i,t){if(i&1&&(W(0,`span`,6),Le(1,`bx-icon`,16),Q$1()),i&2){let e=de();M$1(),fe(`name`,e.side()===`right`?`arrow-left`:`arrow-right`)}}function Dn$1(i,t){if(i&1&&Le(0,`bx-icon`,17),i&2){let e=de(2);fe(`name`,e.item().icon?.name??e.item().data?.icon?.name??`circle`)(`size`,e.item().icon?.size??e.item().data?.icon?.size??`20`)(`color`,e.item().icon?.color??e.item().data?.icon?.color)(`bgColor`,e.item().icon?.bgColor??e.item().data?.icon?.bgColor)(`strokeWidth`,e.item().icon?.strokeWidth??e.item().data?.icon?.strokeWidth)}}function En$1(i,t){if(i&1&&Le(0,`bx-tag`,19),i&2){let e=t.$implicit;fe(`opaque`,!0)(`text`,e.text)(`config`,e.config??Vk(4,yn$1))(`focusable`,!1)}}function Ln$1(i,t){if(i&1&&Le(0,`bx-icon`,20),i&2){let e=t;fe(`name`,e.name)(`size`,e.size??`16`)(`color`,e.color)(`bgColor`,e.bgColor)(`strokeWidth`,e.strokeWidth)}}function An$1(i,t){if(i&1&&(W(0,`span`,18),je(1),Q$1(),Gr$1(2,En$1,1,5,`bx-tag`,19,$a$1),pe(4,Ln$1,1,5,`bx-icon`,20)),i&2){let e,n=de(2);M$1(),tt$2(n.item().label),M$1(),Wr$1(n.item().data?.tags),M$1(2),me$1((e=n.item().data?.endIcon)?4:-1,e)}}function Bn$1(i,t){if(i&1&&(pe(0,Dn$1,1,5,`bx-icon`,17),pe(1,An$1,5,2)),i&2){let e=de();me$1(e.compact()||e.state.config().showItemIcons!==!1?0:-1),M$1(),me$1(e.compact()?-1:1)}}var _e=class i{element=f(U$2).nativeElement;a11y=f(xe$1);trigger=Xu(Fx);state=f(H);active=y(()=>this.state.activeItem()?.id===this.item().id);ancestor=y(()=>!this.active()&&this.state.activeIds().has(this.item().id));current=y(()=>this.state.isCurrent(this.item()));side=y(()=>this.state.config().side===`right`?`left`:`right`);submenuOpen=y(()=>this.trigger()?.isOpen()??!1);highlighted=y(()=>this.state.target()===this.item().id);animated=y(()=>!this.a11y.isReducedMotion());item=g.required();compact=g(!1);parentTrigger=g(void 0);constructor(){ms(()=>{let t=this.item(),e=this.state.revealPath().includes(t.id),n=this.trigger();e&&O$2(()=>{this.scrollIntoPanel(),t.children?.length&&n?.open()})})}select(){this.state.select(this.item())}hover(t){t.pointerType!==`touch`&&!this.item().data?.disabled&&this.trigger()?.open()}leave(){this.trigger()?.scheduleClose()}openOnArrow(t){t.key!==(this.side()===`right`?`ArrowRight`:`ArrowLeft`)||!this.item().children?.length||(t.preventDefault(),t.stopPropagation(),this.trigger()?.open(!0))}scrollIntoPanel(){let t=this.element.closest(`.bx-side-nav-scroll, .bx-nav-flyout`);if(!t)return;let e=this.element.getBoundingClientRect(),n=t.getBoundingClientRect();e.top<n.top?t.scrollTop+=e.top-n.top:e.bottom>n.bottom&&(t.scrollTop+=e.bottom-n.bottom)}static ɵfac=function(e){return new(e||i)};static ɵcmp=le({type:i,selectors:[[`bx-side-nav-branch`]],viewQuery:function(e,n){e&1&&Yr(n.trigger,Fx,5),e&2&&Qt$1()},hostAttrs:[`role`,`none`],inputs:{item:[1,`item`],compact:[1,`compact`],parentTrigger:[1,`parentTrigger`]},decls:7,vars:20,consts:[[`row`,``],[`label`,``],[`trigger`,`bxMenuTrigger`],[`flyout`,``],[`role`,`none`,1,`bx-nav-row`,3,`pointerenter`,`pointerleave`],[`role`,`menuitem`,1,`bx-nav-link`,3,`routerLink`,`bxTooltip`,`placement`],[`aria-hidden`,`true`,1,`bx-nav-target`],[`role`,`menuitem`,1,`bx-nav-link`,3,`click`,`keydown`,`routerLink`,`bxTooltip`,`placement`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`ngTemplateOutlet`],[`type`,`button`,`role`,`menuitem`,1,`bx-nav-disclosure`,3,`disabled`,`bxMenuTrigger`,`menuOrigin`,`menuParent`,`menuSide`,`menuLabel`,`menuHover`,`menuPinned`],[`size`,`16`,3,`name`],[1,`bx-nav-flyout`],[`role`,`menuitem`,1,`bx-nav-parent-link`,3,`is-active`,`routerLink`],[3,`item`,`parentTrigger`],[`role`,`menuitem`,1,`bx-nav-parent-link`,3,`click`,`routerLink`],[`size`,`20`,3,`name`],[1,`bx-nav-icon`,3,`name`,`size`,`color`,`bgColor`,`strokeWidth`],[1,`bx-nav-label`],[`size`,`small`,3,`opaque`,`text`,`config`,`focusable`],[3,`name`,`size`,`color`,`bgColor`,`strokeWidth`]],template:function(e,n){e&1&&(W(0,`div`,4,0),be$1(`pointerenter`,function(a){return n.hover(a)})(`pointerleave`,function(){return n.leave()}),pe(2,Mn$1,3,8,`a`,5),pe(3,kn$1,6,12),pe(4,Rn$1,2,1,`span`,6),Q$1(),E_(5,Bn$1,2,2,`ng-template`,null,1,Qm)),e&2&&(re(`is-active`,n.active())(`is-ancestor`,n.ancestor())(`is-open`,n.submenuOpen())(`is-compact`,n.compact())(`is-highlighted`,n.highlighted())(`is-animated`,n.animated())(`is-right`,n.state.config().side===`right`)(`is-disabled`,n.item().data?.disabled),ve(`data-nav-id`,n.item().id),M$1(2),me$1(n.compact()&&n.item().children?.length?-1:2),M$1(),me$1(n.item().children?.length?3:-1),M$1(),me$1(n.highlighted()?4:-1))},dependencies:[i,bg,xE,Dt$1,_x,Px,nr$1,Fx],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
}
.bx-nav-row[_ngcontent-%COMP%] {
  display: flex;
  position: relative;
  align-items: stretch;
  gap: 0.25rem;
  border: 1px solid transparent;
  border-radius: var(--%NS%bx-side-nav-item-radius, 0.5rem);
  background: var(--%NS%bx-side-nav-item-background, transparent);
  color: var(--%NS%bx-text-primary);
}
.bx-nav-row[_ngcontent-%COMP%]:not(.is-disabled):is(:hover, :focus-within, .is-open) {
  background: var(--%NS%bx-side-nav-item-hover-background, var(--%NS%bx-accent-subtle));
  color: var(--%NS%bx-text-accent);
}
.bx-nav-row.is-active[_ngcontent-%COMP%]:not(.is-disabled) {
  background: var(--%NS%bx-side-nav-item-active-background, var(--%NS%bx-accent-subtle));
  border-color: var(--%NS%bx-border-accent);
  color: var(--%NS%bx-text-accent);
}
.bx-nav-row.is-highlighted[_ngcontent-%COMP%]:not(.is-disabled) {
  background: var(--%NS%bx-side-nav-item-highlight-background, var(--%NS%bx-accent-subtle));
  color: var(--%NS%bx-text-accent);
  outline: 2px dashed var(--%NS%bx-border-accent);
  outline-offset: -2px;
}
.bx-nav-row[_ngcontent-%COMP%]:has(:focus-visible), 
.bx-nav-row[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
}
@media (forced-colors: active) {
  .bx-nav-row.is-active[_ngcontent-%COMP%] {
    border-color: Highlight;
  }
  .bx-nav-row.is-highlighted[_ngcontent-%COMP%] {
    outline-color: Highlight;
  }
}
.bx-nav-row.is-ancestor[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-accent);
}
.bx-nav-row.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.5;
}
.bx-nav-link[_ngcontent-%COMP%], 
.bx-nav-disclosure[_ngcontent-%COMP%], 
.bx-nav-parent-link[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  border: 0;
  border-radius: inherit;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 0.875rem;
  text-align: start;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;
}
.bx-nav-link[_ngcontent-%COMP%]:focus-visible, 
.bx-nav-disclosure[_ngcontent-%COMP%]:focus-visible, 
.bx-nav-parent-link[_ngcontent-%COMP%]:focus-visible {
  outline: none;
}
.bx-nav-link[aria-disabled=true][_ngcontent-%COMP%], 
.bx-nav-link[_ngcontent-%COMP%]:disabled, 
.bx-nav-disclosure[aria-disabled=true][_ngcontent-%COMP%], 
.bx-nav-disclosure[_ngcontent-%COMP%]:disabled, 
.bx-nav-parent-link[aria-disabled=true][_ngcontent-%COMP%], 
.bx-nav-parent-link[_ngcontent-%COMP%]:disabled {
  cursor: default;
}
.bx-nav-link[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.bx-nav-label[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  overflow-wrap: anywhere;
}
.bx-nav-icon[_ngcontent-%COMP%] {
  flex: none;
}
.bx-nav-disclosure[_ngcontent-%COMP%] {
  flex: none;
  padding-inline: 0.5rem;
}
.bx-nav-parent-link[_ngcontent-%COMP%] {
  border: 1px solid transparent;
  border-radius: var(--%NS%bx-side-nav-item-radius, 0.5rem);
  background: var(--%NS%bx-side-nav-item-background, transparent);
  color: var(--%NS%bx-text-primary);
}
.bx-nav-parent-link[_ngcontent-%COMP%]:not(.is-disabled):is(:hover, :focus-within, .is-open) {
  background: var(--%NS%bx-side-nav-item-hover-background, var(--%NS%bx-accent-subtle));
  color: var(--%NS%bx-text-accent);
}
.bx-nav-parent-link.is-active[_ngcontent-%COMP%]:not(.is-disabled) {
  background: var(--%NS%bx-side-nav-item-active-background, var(--%NS%bx-accent-subtle));
  border-color: var(--%NS%bx-border-accent);
  color: var(--%NS%bx-text-accent);
}
.bx-nav-parent-link.is-highlighted[_ngcontent-%COMP%]:not(.is-disabled) {
  background: var(--%NS%bx-side-nav-item-highlight-background, var(--%NS%bx-accent-subtle));
  color: var(--%NS%bx-text-accent);
  outline: 2px dashed var(--%NS%bx-border-accent);
  outline-offset: -2px;
}
.bx-nav-parent-link[_ngcontent-%COMP%]:has(:focus-visible), 
.bx-nav-parent-link[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
}
@media (forced-colors: active) {
  .bx-nav-parent-link.is-active[_ngcontent-%COMP%] {
    border-color: Highlight;
  }
  .bx-nav-parent-link.is-highlighted[_ngcontent-%COMP%] {
    outline-color: Highlight;
  }
}
.bx-nav-parent-link[_ngcontent-%COMP%] {
  font-weight: 600;
}
.is-compact[_ngcontent-%COMP%] {
  justify-content: center;
}
.is-compact[_ngcontent-%COMP%]   .bx-nav-link[_ngcontent-%COMP%] {
  flex: 1;
  justify-content: center;
  min-width: 0;
  padding-inline: 0;
}
.is-compact.is-right[_ngcontent-%COMP%] {
  justify-content: center;
}
.bx-nav-flyout[_ngcontent-%COMP%] {
  --%NS%bx-menu-min-width: 0;
  --%NS%bx-menu-item-gap: var(--%NS%bx-side-nav-item-gap, 0.5rem);
  box-sizing: border-box;
  width: var(--%NS%bx-side-nav-menu-width, 17rem);
  max-width: calc(100dvw - 1rem);
  max-height: min(var(--%NS%bx-side-nav-menu-max-height, 32rem), 100dvh - 1rem);
  overflow: hidden auto;
  scrollbar-gutter: stable;
  overscroll-behavior: contain;
  border-radius: 0.75rem;
  color: var(--%NS%bx-text-primary);
  box-shadow: 0 12px 20px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
}
.bx-nav-target[_ngcontent-%COMP%] {
  display: flex;
  position: absolute;
  inset-inline-end: 0.25rem;
  top: 50%;
  translate: 0 -50%;
  pointer-events: none;
  color: var(--%NS%bx-text-accent);
  background: var(--%NS%bx-accent-subtle);
  border: 1px solid var(--%NS%bx-border-accent);
  border-radius: 9999px;
  padding: 0.25rem;
}
.is-highlighted[_ngcontent-%COMP%]   .bx-nav-link[_ngcontent-%COMP%] {
  padding-inline-end: 2.5rem;
}
.is-animated[_ngcontent-%COMP%]   .bx-nav-target[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_bx-nav-point 900ms ease-in-out infinite alternate;
}
@keyframes _ngcontent-%COMP%_bx-nav-point {
  to {
    transform: translateX(-0.25rem);
  }
}
@media (forced-colors: active) {
  .bx-nav-row.is-highlighted[_ngcontent-%COMP%], 
   .bx-nav-target[_ngcontent-%COMP%] {
    outline: 2px solid Highlight;
  }
  .bx-nav-row.is-active[_ngcontent-%COMP%]   .bx-nav-link[_ngcontent-%COMP%] {
    text-decoration: underline;
  }
}`]})};function Ie(i){return Object.fromEntries(Object.entries(i??{}).filter(([,t])=>t!==void 0))}var Fn$1=[`mobileToggle`];var Oe$1=(i,t)=>t.id;function Vn$1(i,t){if(i&1){let e=fs();W(0,`button`,14,0),be$1(`click`,function(o){jr$1(e);let a=de();return Hr$1(a.toggle(o))}),Le(2,`bx-icon`,15),Q$1()}if(i&2){let e=de();re(`is-open`,e.mobileOpen()),ve(`aria-label`,e.state.text().openLabel)(`aria-hidden`,e.mobileOpen()?!0:null)(`inert`,e.mobileOpen()?``:null)(`aria-expanded`,e.mobileOpen())(`aria-controls`,e.id)}}function Gn$1(i,t){if(i&1){let e=fs();W(0,`button`,16),be$1(`click`,function(o){jr$1(e);let a=de();return Hr$1(a.closeFromControl(o))}),Q$1()}if(i&2){let e=de();ve(`aria-label`,e.state.text().closeLabel)}}function jn$1(i,t){if(i&1&&zu(0,7),i&2){let e=de();fe(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.slotContext())}}function $n$1(i,t){if(i&1&&(W(0,`strong`),je(1),Q$1()),i&2){let e=de();M$1(),tt$2(e.state.text().ariaLabel)}}function zn$1(i,t){if(i&1){let e=fs();W(0,`button`,17),be$1(`click`,function(o){jr$1(e);let a=de();return Hr$1(a.closeFromControl(o))}),Le(1,`bx-icon`,18),Q$1()}if(i&2){let e=de();ve(`aria-label`,e.state.text().closeLabel)}}function Hn$1(i,t){if(i&1){let e=fs();W(0,`button`,17),be$1(`click`,function(){jr$1(e);let o=de();return Hr$1(o.toggleCollapsed())}),Le(1,`bx-icon`,19),Q$1()}if(i&2){let e=de();ve(`aria-label`,e.isCollapsed()?e.state.text().expandLabel:e.state.text().collapseLabel)(`aria-expanded`,!e.isCollapsed()),M$1(),fe(`name`,e.resolvedConfig().side===`left`!==e.isCollapsed()?`panel-left-close`:`panel-right-close`)}}function Kn$1(i,t){if(i&1){let e=fs();W(0,`button`,22),be$1(`click`,function(){jr$1(e);let o=de(2);return Hr$1(o.toggleCollapsed())}),Le(1,`bx-icon`,23),Q$1()}if(i&2){let e=de(2);ve(`aria-label`,e.state.text().searchLabel)}}function qn$1(i,t){if(i&1){let e=fs();W(0,`bx-search-input`,24),z0(),be$1(`ngModelChange`,function(o){jr$1(e);let a=de(2);return Hr$1(a.search(o))}),Q$1()}if(i&2){let e=de(2);fe(`placeholder`,e.state.text().searchPlaceholder)(`ariaLabel`,e.state.text().searchLabel)(`clearLabel`,e.state.text().clearSearchLabel)(`ngModel`,e.query()),G0()}}function Un$1(i,t){if(i&1&&pe(0,Kn$1,2,1,`button`,20)(1,qn$1,1,4,`bx-search-input`,21),i&2){let e=de();me$1(e.isCollapsed()?0:1)}}function Wn$1(i,t){if(i&1&&Le(0,`bx-side-nav-branch`,31),i&2){let e=t.$implicit;de(2);let n=Wa(1);fe(`item`,e)(`parentTrigger`,n)}}function Xn$1(i,t){if(i&1&&(W(0,`div`,30)(1,`bx-menu`),Gr$1(2,Wn$1,1,2,`bx-side-nav-branch`,31,Oe$1),Q$1()()),i&2){let e=de(3).$implicit;M$1(2),Wr$1(e.items)}}function Qn$2(i,t){if(i&1&&(W(0,`button`,29,1),Le(2,`bx-icon`,19),Q$1(),E_(3,Xn$1,4,0,`ng-template`,null,2,Qm)),i&2){let e=Wa(1),n=Wa(4),o=de(2).$implicit,a=de();re(`is-active`,a.sectionActive(o))(`is-highlighted`,a.sectionHighlighted(o))(`is-open`,e.isOpen()),fe(`bxMenuTrigger`,n)(`menuSide`,a.resolvedConfig().side===`left`?`right`:`left`)(`menuLabel`,o.title),ve(`aria-label`,o.title),M$1(2),fe(`name`,o.icon?.name??`folder`)}}function Yn$1(i,t){if(i&1&&Le(0,`bx-icon`,19),i&2){let e=de(3).$implicit;fe(`name`,e.icon?.name??`folder`)}}function Jn$2(i,t){if(i&1){let e=fs();W(0,`button`,32),be$1(`click`,function(){jr$1(e);let o=de(2).$implicit,a=de();return Hr$1(a.toggleSection(o))}),pe(1,Yn$1,1,1,`bx-icon`,19),W(2,`span`),je(3),Q$1(),Le(4,`bx-icon`,33),Q$1()}if(i&2){let e=de(2),n=e.$implicit,o=e.$index,a=de();re(`is-active`,a.sectionActive(n))(`is-highlighted`,a.sectionHighlighted(n)),ve(`aria-expanded`,!a.sectionCollapsed(n))(`aria-controls`,a.id+`-section-`+o),M$1(),me$1(a.resolvedConfig().showSectionIcons?1:-1),M$1(2),tt$2(n.title),M$1(),fe(`name`,a.sectionCollapsed(n)?`chevron-right`:`chevron-down`)}}function Zn$1(i,t){if(i&1&&Le(0,`bx-icon`,19),i&2){let e=de(3).$implicit;fe(`name`,e.icon?.name??`folder`)}}function et$2(i,t){if(i&1&&(W(0,`h2`,34),pe(1,Zn$1,1,1,`bx-icon`,19),W(2,`span`),je(3),Q$1()()),i&2){let e=de(2).$implicit,n=de();re(`is-active`,n.sectionActive(e))(`is-highlighted`,n.sectionHighlighted(e)),M$1(),me$1(n.resolvedConfig().showSectionIcons?1:-1),M$1(2),tt$2(e.title)}}function nt$2(i,t){if(i&1&&pe(0,Qn$2,5,11)(1,Jn$2,5,9,`button`,27)(2,et$2,4,6,`h2`,28),i&2){let e=de().$implicit,n=de();me$1(n.isCollapsed()?0:e.collapsible?1:2)}}function tt$1(i,t){if(i&1&&Le(0,`bx-side-nav-branch`,26),i&2){let e=t.$implicit,n=de(2);fe(`item`,e)(`compact`,n.isCollapsed())}}function it$1(i,t){if(i&1){let e=fs();W(0,`section`,10),pe(1,nt$2,3,1),W(2,`div`,25),be$1(`keydown`,function(o){jr$1(e);let a=de();return Hr$1(a.menuKey(o))}),Gr$1(3,tt$1,1,2,`bx-side-nav-branch`,26,Oe$1),Q$1()()}if(i&2){let e=t.$implicit,n=t.$index,o=de();ve(`aria-label`,e.title||o.state.text().ariaLabel),M$1(),me$1(e.title?1:-1),M$1(),fe(`id`,o.id+`-section-`+n)(`hidden`,o.sectionCollapsed(e)),ve(`aria-label`,e.title||o.state.text().ariaLabel),M$1(),Wr$1(e.items)}}function ot$1(i,t){if(i&1&&(W(0,`p`,11),je(1),Q$1()),i&2){let e=de();M$1(),tt$2(e.state.text().emptyText)}}function at$1(i,t){if(i&1&&(W(0,`footer`,12),zu(1,7),Q$1()),i&2){let e=de();M$1(),fe(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.slotContext())}}function rt$2(i,t){if(i&1&&je(0),i&2){let e=de();H_(` `,e.state.text().resultLabel,`: `,e.state.searchResult().label,` `)}}var ee=class i{document=f(z$1);router=f(Xn$2);destroyRef=f(K$1);dimensions=f(nf);navigation=f(J$2);defaults=f(Y,{optional:!0});scrollLock=f(bS);cascade=f(Sf);a11y=f(xe$1);injector=f(ne$1);focusMonitor=f(go$1);toggleElement=Xu(`mobileToggle`,{read:U$2});saved=_$1({sections:{}});loadedKey=_$1(void 0);lockId=di$1();presentation=y(()=>`${this.isMobile()}:${this.resolvedConfig().position}:${this.resolvedConfig().side}`);drawerAnimated=_$1(!1);state=f(H);id=`bx-side-nav-${this.lockId}`;headerTemplate=_$1(null);footerTemplate=_$1(null);reducedMotion=this.a11y.isReducedMotion;visibleGroups=y(()=>this.state.searchResult().groups);slotContext=y(()=>({$implicit:this.isCollapsed(),collapsed:this.isCollapsed(),mobile:this.isMobile()}));config=g({});groups=g(void 0);itemTemplate=g(void 0);collapsed=g(void 0);collapsedChange=un$2();mobileOpen=Zu(!1);itemSelected=un$2();layoutChange=un$2();resolvedConfig=y(()=>r(r(r({},O$1),Ie(this.defaults?.sideNav)),Ie(this.config())));isMobile=y(()=>this.resolvedConfig().mobile??this.dimensions.dimensions().width<=this.dimensions.breakpoints[this.resolvedConfig().mobileBreakpoint]);isCollapsed=y(()=>!this.isMobile()&&!this.state.query().trim()&&(this.collapsed()??this.saved().collapsed??this.resolvedConfig().collapsed));query=this.state.query.asReadonly();layout=y(()=>({side:this.resolvedConfig().side,offset:this.isMobile()?`0px`:this.isCollapsed()?this.resolvedConfig().collapsedWidth:this.resolvedConfig().width,collapsed:this.isCollapsed(),mobile:this.isMobile(),open:!this.isMobile()||this.mobileOpen()}));restoreFocus;focusReturnOrigin=`program`;focusRevision=0;constructor(){Ee$2(()=>{this.state.config.set(this.resolvedConfig()),this.state.sourceGroups.set(this.groups()??this.navigation.menuTreeGroups()),this.state.itemTemplate.set(this.itemTemplate())}),Ee$2(()=>{let t=this.resolvedConfig().persistenceKey;O$2(()=>{this.saved.set(this.readSavedState(t)),this.loadedKey.set(t)})}),Ee$2(()=>{let t=this.resolvedConfig().persistenceKey,e=this.loadedKey(),n=this.saved(),o=this.collapsed()??n.collapsed??this.resolvedConfig().collapsed;if(!(!t||e!==t||!this.document.defaultView))try{this.document.defaultView.localStorage.setItem(t,JSON.stringify({collapsed:o,sections:n.sections}))}catch{}}),Ee$2(()=>{this.isMobile()&&this.mobileOpen()&&this.resolvedConfig().position!==`inline`?this.scrollLock.disableScroll(this.lockId,{handleTouchInput:!1}):this.scrollLock.enableScroll(this.lockId)}),Ee$2(()=>{this.presentation(),O$2(()=>{this.drawerAnimated.set(!1),this.cascade.closeAll(),this.mobileOpen()&&this.close()})}),Ee$2(()=>this.layoutChange.emit(this.layout())),this.state.activated.pipe(ti$1()).subscribe(t=>{this.itemSelected.emit(t),this.cascade.closeAll(),this.isMobile()&&this.close()}),this.router.events.pipe(ti$1()).subscribe(t=>{t instanceof hn$2&&(this.cascade.closeAll(),this.mobileOpen()&&this.close())}),this.destroyRef.onDestroy(()=>{this.scrollLock.enableScroll(this.lockId)})}setHeaderTemplate(t){this.headerTemplate.set(t)}setFooterTemplate(t){this.footerTemplate.set(t)}toggle(t){this.mobileOpen()?this.close():this.open(t)}open(t){let e=this.document.defaultView;if(!e||!this.isMobile()||this.mobileOpen())return;let n=t&&`currentTarget`in t?t.currentTarget:t,o=n instanceof e.HTMLElement?n:void 0,a=this.document.activeElement,l=a&&a!==this.document.body&&a!==this.document.documentElement?a:void 0;this.restoreFocus=o??l??this.toggleElement()?.nativeElement,this.focusReturnOrigin=this.restoreFocus?.matches(`:focus-visible`)?`keyboard`:`program`,++this.focusRevision,this.restoreFocus&&this.focusMonitor.focusVia(this.restoreFocus,this.focusReturnOrigin,{preventScroll:!0}),this.drawerAnimated.set(!0),this.mobileOpen.set(!0)}close(){if(!this.mobileOpen())return;this.cascade.closeAll();let t=this.restoreFocus?.isConnected?this.restoreFocus:this.toggleElement()?.nativeElement,e=this.focusReturnOrigin,n=++this.focusRevision;this.restoreFocus=void 0,this.mobileOpen.set(!1),Qe$2(()=>{!this.destroyRef.destroyed&&n===this.focusRevision&&!this.mobileOpen()&&t?.isConnected&&this.focusMonitor.focusVia(t,e,{preventScroll:!0})},{injector:this.injector})}toggleCollapsed(){let t=!(this.collapsed()??this.saved().collapsed??this.resolvedConfig().collapsed);this.saved.update(e=>s(r({},e),{collapsed:t})),this.collapsedChange.emit(t)}search(t){this.cascade.closeAll(),this.state.search(t)}closeFromControl(t){this.focusReturnOrigin=t.detail===0?`keyboard`:`program`,this.close()}sectionActive(t){return t.items.some(e=>this.state.activeIds().has(e.id))}sectionHighlighted(t){return t.items.some(e=>this.state.revealPath().includes(e.id))}sectionCollapsed(t){let e=this.state.revealPath();return this.query().trim()||t.items.some(n=>e.includes(n.id))?!1:!this.isCollapsed()&&!!t.collapsible&&(this.saved().sections[t.id]??t.collapsed??!1)}toggleSection(t){if(!t.collapsible)return;let e=!this.sectionCollapsed(t);this.saved.update(n=>s(r({},n),{sections:s(r({},n.sections),{[t.id]:e})}))}menuKey(t){let e=t.target?.closest(`[role="menu"]`);e&&Lx(t,e)}panelKey(t){t.defaultPrevented||t.key!==`Escape`||!this.mobileOpen()||this.cascade.hasOpenMenus()||(t.preventDefault(),t.stopPropagation(),this.focusReturnOrigin=`keyboard`,this.close())}readSavedState(t){if(!t||!this.document.defaultView)return{sections:{}};try{let e=JSON.parse(this.document.defaultView.localStorage.getItem(t)??`null`);if(!e||typeof e!=`object`)return{sections:{}};let n=`collapsed`in e&&typeof e.collapsed==`boolean`?e.collapsed:void 0,o=`sections`in e&&e.sections&&typeof e.sections==`object`?e.sections:{};return{collapsed:n,sections:Object.fromEntries(Object.entries(o).filter(l=>typeof l[1]==`boolean`))}}catch{return{sections:{}}}}static ɵfac=function(e){return new(e||i)};static ɵcmp=le({type:i,selectors:[[`bx-side-nav`]],viewQuery:function(e,n){e&1&&Yr(n.toggleElement,Fn$1,5,U$2),e&2&&Qt$1()},hostVars:16,hostBindings:function(e,n){e&2&&(et$3(`--%NS%bx-side-nav-width`,n.resolvedConfig().width)(`--%NS%bx-side-nav-collapsed-width`,n.resolvedConfig().collapsedWidth),re(`is-mobile`,n.isMobile())(`is-collapsed`,n.isCollapsed())(`is-right`,n.resolvedConfig().side===`right`)(`is-inline`,n.resolvedConfig().position===`inline`)(`is-animated`,!n.reducedMotion())(`is-drawer-animated`,n.drawerAnimated()&&!n.reducedMotion()))},inputs:{config:[1,`config`],groups:[1,`groups`],itemTemplate:[1,`itemTemplate`],collapsed:[1,`collapsed`],mobileOpen:[1,`mobileOpen`]},outputs:{collapsedChange:`collapsedChange`,mobileOpen:`mobileOpenChange`,itemSelected:`itemSelected`,layoutChange:`layoutChange`},exportAs:[`bxSideNav`],features:[Ht$1([H])],decls:17,vars:20,consts:[[`mobileToggle`,``],[`sectionTrigger`,`bxMenuTrigger`],[`sectionMenu`,``],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`type`,`button`,1,`bx-nav-hamburger`,3,`is-open`],[`type`,`button`,`tabindex`,`-1`,1,`bx-nav-backdrop`],[`tabindex`,`-1`,`bxSurface`,``,1,`bx-nav-panel`,3,`keydown`,`bxSurfaceInteractive`,`id`,`cdkTrapFocus`,`cdkTrapFocusAutoCapture`],[1,`bx-nav-header`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`type`,`button`,1,`bx-nav-panel-toggle`],[1,`bx-side-nav-scroll`],[1,`bx-nav-section`],[`role`,`status`,1,`bx-nav-empty`],[1,`bx-nav-footer`],[`role`,`status`,`aria-live`,`polite`,1,`cdk-visually-hidden`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`type`,`button`,1,`bx-nav-hamburger`,3,`click`],[`name`,`menu`,`size`,`20`],[`type`,`button`,`tabindex`,`-1`,1,`bx-nav-backdrop`,3,`click`],[`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`type`,`button`,1,`bx-nav-panel-toggle`,3,`click`],[`name`,`x`,`size`,`20`],[`size`,`20`,3,`name`],[`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`type`,`button`,1,`bx-nav-search-toggle`],[1,`bx-nav-search`,3,`placeholder`,`ariaLabel`,`clearLabel`,`ngModel`],[`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`type`,`button`,1,`bx-nav-search-toggle`,3,`click`],[`name`,`search`,`size`,`20`],[1,`bx-nav-search`,3,`ngModelChange`,`placeholder`,`ariaLabel`,`clearLabel`,`ngModel`],[`role`,`menu`,`tabindex`,`-1`,1,`bx-nav-items`,3,`keydown`,`id`,`hidden`],[3,`item`,`compact`],[`type`,`button`,1,`bx-nav-section-toggle`,3,`is-active`,`is-highlighted`],[1,`bx-nav-section-heading`,3,`is-active`,`is-highlighted`],[`type`,`button`,1,`bx-nav-section-toggle`,`is-compact`,3,`bxMenuTrigger`,`menuSide`,`menuLabel`],[1,`bx-nav-section-flyout`],[3,`item`,`parentTrigger`],[`type`,`button`,1,`bx-nav-section-toggle`,3,`click`],[`size`,`16`,3,`name`],[1,`bx-nav-section-heading`]],template:function(e,n){if(e&1&&(pe(0,Vn$1,3,7,`button`,3),pe(1,Gn$1,1,1,`button`,4),W(2,`aside`,5),be$1(`keydown`,function(a){return n.panelKey(a)}),W(3,`div`,6),pe(4,jn$1,1,2,`ng-container`,7)(5,$n$1,2,1,`strong`),pe(6,zn$1,2,1,`button`,8)(7,Hn$1,2,3,`button`,8),Q$1(),pe(8,Un$1,2,1),W(9,`div`,9)(10,`nav`),Gr$1(11,it$1,5,5,`section`,10,Oe$1,!1,ot$1,2,1,`p`,11),Q$1()(),pe(14,at$1,2,2,`footer`,12),W(15,`span`,13),pe(16,rt$2,1,2),Q$1()()),e&2){let o,a;me$1(n.isMobile()&&n.resolvedConfig().showMobileTrigger?0:-1),M$1(),me$1(n.isMobile()&&n.mobileOpen()?1:-1),M$1(),re(`is-open`,!n.isMobile()||n.mobileOpen()),fe(`bxSurfaceInteractive`,!1)(`id`,n.id)(`cdkTrapFocus`,n.isMobile()&&n.mobileOpen())(`cdkTrapFocusAutoCapture`,n.isMobile()&&n.mobileOpen()),ve(`role`,n.isMobile()?`dialog`:null)(`aria-modal`,n.isMobile()&&n.mobileOpen()?!0:null)(`aria-label`,n.state.text().ariaLabel)(`inert`,n.isMobile()&&!n.mobileOpen()?``:null)(`aria-hidden`,n.isMobile()&&!n.mobileOpen()?!0:null),M$1(2),me$1((o=n.headerTemplate())?4:n.isCollapsed()?-1:5,o),M$1(2),me$1(n.isMobile()?6:n.resolvedConfig().collapsible?7:-1),M$1(2),me$1(n.resolvedConfig().searchable?8:-1),M$1(2),ve(`aria-label`,n.state.text().ariaLabel),M$1(),Wr$1(n.visibleGroups()),M$1(3),me$1((a=n.footerTemplate())?14:-1,a),M$1(2),me$1(n.state.target()?16:-1)}},dependencies:[bg,gL,mL,O9,N9,AP,Hx,xf,mn$2,Dt$1,_e,Fx,_x],styles:[`
[_nghost-%COMP%] {
  display: block;
  order: 0;
  flex: 0 0 var(--%NS%bx-side-nav-width, 17rem);
  width: var(--%NS%bx-side-nav-width, 17rem);
  color: var(--%NS%bx-text-primary);
  font-family: inherit;
}
.bx-nav-panel[_ngcontent-%COMP%] {
  --%NS%bx-glass-radius: 0;
  --%NS%bx-glass-min-opacity: 0.8;
  position: fixed;
  inset-block: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: var(--%NS%bx-side-nav-width, 17rem);
  max-width: 100dvw;
  height: 100dvh;
  min-height: 0;
  overflow: hidden;
  border-inline-end: 1px solid var(--%NS%bx-border-default);
  z-index: 300;
}
.bx-nav-header[_ngcontent-%COMP%], 
.bx-nav-footer[_ngcontent-%COMP%] {
  display: flex;
  flex: none;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0.75rem;
  min-width: 0;
  overflow-wrap: anywhere;
}
.bx-nav-header[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {
  min-width: 0;
}
.bx-nav-footer[_ngcontent-%COMP%] {
  border-block-start: 1px solid var(--%NS%bx-border-default);
}
.bx-nav-panel-toggle[_ngcontent-%COMP%], 
.bx-nav-search-toggle[_ngcontent-%COMP%] {
  --%NS%bx-glass-radius: 9999px;
  flex: none;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
}
.bx-nav-panel-toggle[_ngcontent-%COMP%] {
  margin-inline-start: auto;
}
.bx-nav-search[_ngcontent-%COMP%] {
  display: block;
  flex: none;
  padding-inline: 0.75rem;
}
.bx-nav-search-toggle[_ngcontent-%COMP%] {
  margin-inline: auto;
}
.bx-side-nav-scroll[_ngcontent-%COMP%] {
  flex: 1;
  min-height: 0;
  min-width: 0;
  overflow: hidden auto;
  scrollbar-gutter: stable;
  overscroll-behavior: contain;
  padding: 0.5rem;
  scroll-behavior: auto;
}
.bx-nav-items[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-side-nav-item-gap, 0.5rem);
}
.bx-nav-items[hidden][_ngcontent-%COMP%] {
  display: none;
}
.bx-nav-section[_ngcontent-%COMP%]    + .bx-nav-section[_ngcontent-%COMP%] {
  margin-block-start: 1rem;
}
.bx-nav-section-heading[_ngcontent-%COMP%], 
.bx-nav-section-toggle[_ngcontent-%COMP%] {
  border: 1px solid transparent;
  border-radius: var(--%NS%bx-side-nav-item-radius, 0.5rem);
  background: transparent;
  color: var(--%NS%bx-text-secondary);
}
.bx-nav-section-heading.is-active[_ngcontent-%COMP%], 
.bx-nav-section-heading.is-highlighted[_ngcontent-%COMP%], 
.bx-nav-section-toggle.is-active[_ngcontent-%COMP%], 
.bx-nav-section-toggle.is-highlighted[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-accent);
}
.bx-nav-section-heading[_ngcontent-%COMP%]:focus-visible, 
.bx-nav-section-toggle[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
}
.bx-nav-section-heading[_ngcontent-%COMP%], 
.bx-nav-section-toggle[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 0.25rem;
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: start;
  overflow-wrap: anywhere;
}
.bx-nav-section-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], 
.bx-nav-section-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.bx-nav-section-heading[_ngcontent-%COMP%]   bx-icon[_ngcontent-%COMP%], 
.bx-nav-section-toggle[_ngcontent-%COMP%]   bx-icon[_ngcontent-%COMP%] {
  flex: none;
}
.bx-nav-section-toggle[_ngcontent-%COMP%] {
  min-height: 2.75rem;
  cursor: pointer;
  font-family: inherit;
}
.bx-nav-section-toggle[_ngcontent-%COMP%]:hover, 
.bx-nav-section-toggle.is-open[_ngcontent-%COMP%] {
  background: var(--%NS%bx-primary-subtle);
  color: var(--%NS%bx-text-brand);
}
.bx-nav-section-toggle.is-compact[_ngcontent-%COMP%] {
  width: 100%;
  min-width: 0;
  justify-content: center;
  padding-inline: 0;
}
.bx-nav-empty[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  padding: 0.75rem;
}
.bx-nav-section-flyout[_ngcontent-%COMP%] {
  --%NS%bx-menu-min-width: 0;
  --%NS%bx-menu-item-gap: var(--%NS%bx-side-nav-item-gap, 0.5rem);
  box-sizing: border-box;
  width: var(--%NS%bx-side-nav-menu-width, 17rem);
  max-width: calc(100dvw - 1rem);
  max-height: calc(100dvh - 1rem);
  overflow: hidden auto;
  scrollbar-gutter: stable;
  overscroll-behavior: contain;
  background: var(--%NS%bx-bg-surface);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  box-shadow: 0 12px 20px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
  padding: 0.25rem;
}
.bx-nav-backdrop[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  z-index: 300;
  border: 0;
  background: var(--%NS%bx-side-nav-backdrop, var(--%NS%bx-backdrop-color, rgba(0, 0, 0, 0.4)));
  cursor: pointer;
}
.bx-nav-hamburger[_ngcontent-%COMP%] {
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 302;
  --%NS%bx-glass-radius: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
}
.bx-nav-hamburger.is-open[_ngcontent-%COMP%] {
  visibility: hidden;
  pointer-events: none;
}
.is-animated[_nghost-%COMP%]:not(.is-mobile)   .bx-nav-panel[_ngcontent-%COMP%] {
  transition-property: width;
  transition-duration: calc(var(--%NS%bx-side-nav-duration, 250ms) * (1 - var(--%NS%bx-reduced-motion, 0)));
  transition-timing-function: var(--%NS%bx-side-nav-easing, ease);
}
.is-collapsed[_nghost-%COMP%]   .bx-side-nav-scroll[_ngcontent-%COMP%] {
  scrollbar-gutter: stable both-edges;
  padding-inline: 0.25rem;
}
.is-collapsed[_nghost-%COMP%] {
  width: var(--%NS%bx-side-nav-collapsed-width, 4.5rem);
  flex-basis: var(--%NS%bx-side-nav-collapsed-width, 4.5rem);
}
.is-collapsed[_nghost-%COMP%]   .bx-nav-panel[_ngcontent-%COMP%] {
  width: var(--%NS%bx-side-nav-collapsed-width, 4.5rem);
}
.is-collapsed[_nghost-%COMP%]   .bx-nav-header[_ngcontent-%COMP%] {
  align-items: center;
  flex-direction: column;
  padding-inline: 0.25rem;
}
.is-collapsed[_nghost-%COMP%]   .bx-nav-panel-toggle[_ngcontent-%COMP%] {
  margin-inline: auto;
}
.is-collapsed[_nghost-%COMP%]   .bx-nav-footer[_ngcontent-%COMP%] {
  justify-content: center;
  padding-inline: 0.25rem;
}
.is-inline[_nghost-%COMP%]   .bx-nav-panel[_ngcontent-%COMP%] {
  position: relative;
  height: var(--%NS%bx-side-nav-height, 38rem);
  max-height: 100dvh;
}
.is-inline[_nghost-%COMP%]   .bx-nav-hamburger[_ngcontent-%COMP%] {
  position: relative;
  inset: auto;
}
.is-right[_nghost-%COMP%]   .bx-nav-panel[_ngcontent-%COMP%] {
  left: auto;
  right: 0;
  border-inline-end: 0;
  border-inline-start: 1px solid var(--%NS%bx-border-default);
}
.is-right[_nghost-%COMP%]   .bx-nav-hamburger[_ngcontent-%COMP%] {
  left: auto;
  right: 0.5rem;
}
.is-mobile[_nghost-%COMP%] {
  width: 0;
  flex-basis: 0;
}
.is-mobile[_nghost-%COMP%]   .bx-nav-panel[_ngcontent-%COMP%] {
  position: fixed;
  height: 100dvh;
  width: min(var(--%NS%bx-side-nav-width, 17rem), 100dvw - 3rem);
  transform: translateX(-100%);
  visibility: hidden;
}
.is-mobile[_nghost-%COMP%]   .bx-nav-panel.is-open[_ngcontent-%COMP%] {
  transform: translateX(0);
  visibility: visible;
  z-index: 301;
}
.is-mobile[_nghost-%COMP%]   .bx-nav-header[_ngcontent-%COMP%] {
  padding-top: 0.75rem;
}
.is-mobile.is-right[_nghost-%COMP%]   .bx-nav-panel[_ngcontent-%COMP%] {
  transform: translateX(100%);
}
.is-mobile.is-right[_nghost-%COMP%]   .bx-nav-panel.is-open[_ngcontent-%COMP%] {
  transform: translateX(0);
}
.is-inline.is-mobile[_nghost-%COMP%] {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.is-inline.is-mobile[_nghost-%COMP%]   .bx-nav-panel[_ngcontent-%COMP%] {
  position: absolute;
  inset-block: 0;
  height: 100%;
  max-height: 100%;
  width: min(var(--%NS%bx-side-nav-width, 17rem), 100% - 3rem);
  pointer-events: auto;
}
.is-inline.is-mobile[_nghost-%COMP%]   .bx-nav-backdrop[_ngcontent-%COMP%] {
  position: absolute;
  pointer-events: auto;
}
.is-inline.is-mobile[_nghost-%COMP%]   .bx-nav-hamburger[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-start: 0.5rem;
  inset-inline-start: 0.5rem;
  pointer-events: auto;
}
@media (forced-colors: active) {
  .bx-nav-panel[_ngcontent-%COMP%], 
   .bx-nav-hamburger[_ngcontent-%COMP%] {
    border: 1px solid CanvasText;
  }
  .bx-nav-backdrop[_ngcontent-%COMP%] {
    background: Canvas;
    opacity: 0.7;
  }
}
.is-mobile.is-drawer-animated[_nghost-%COMP%]   .bx-nav-panel[_ngcontent-%COMP%] {
  transition: transform var(--%NS%bx-side-nav-duration, 250ms) var(--%NS%bx-side-nav-easing, ease), visibility 0s var(--%NS%bx-side-nav-duration, 250ms);
}
.is-mobile.is-drawer-animated[_nghost-%COMP%]   .bx-nav-panel.is-open[_ngcontent-%COMP%] {
  transition-delay: 0s;
}
.is-right[_nghost-%COMP%] {
  order: 1;
}
[_nghost-%COMP%]:dir(rtl) {
  order: 1;
}
.is-right[_nghost-%COMP%]:dir(rtl) {
  order: 0;
}`]})};var un$1=class i{template=f(cn$2);nav=f(ee);constructor(){this.nav.setHeaderTemplate(this.template),f(K$1).onDestroy(()=>this.nav.setHeaderTemplate(null))}static ngTemplateContextGuard(t,e){return!0}static ɵfac=function(e){return new(e||i)};static ɵdir=R$1({type:i,selectors:[[``,`bxSideNavHeader`,``]]})};var pn$1=class i{template=f(cn$2);nav=f(ee);constructor(){this.nav.setFooterTemplate(this.template),f(K$1).onDestroy(()=>this.nav.setFooterTemplate(null))}static ngTemplateContextGuard(t,e){return!0}static ɵfac=function(e){return new(e||i)};static ɵdir=R$1({type:i,selectors:[[``,`bxSideNavFooter`,``]]})};var e=[{id:`side-nav`,title:`Side navigation`,group:`Navigation`,readme:`projects/blocks/navigation/components/side-nav/README.md`,symbol:`SideNav, SideNavHeaderDirective, SideNavFooterDirective`,package:`@filip.mazev/blocks/navigation`,selector:`bx-side-nav`,description:`Route-driven sections, nested flyouts, fuzzy search and responsive icon rails.`,example:`<bx-side-nav />`},{id:`truncate`,title:`Truncated text`,group:`Primitives`,readme:`projects/blocks/primitives/directives/truncate/README.md`,symbol:`TruncateDirective, TruncatedTextPipe, TooltipDirective`,package:`@filip.mazev/blocks/primitives`,selector:`[bxTruncate]`,description:`Shared ellipsis and measurement, a public conditional-text pipe, and optional automatic tooltips.`,example:`<span bxTruncate #overflow="bxTruncate" [bxTooltip]="label() | bxTruncatedText: overflow.truncated()">{{ label() }}</span>`},{id:`tag`,title:`Tag`,group:`Primitives`,readme:`projects/blocks/primitives/components/tag/README.md`,symbol:`Tag`,package:`@filip.mazev/blocks/primitives`,selector:`bx-tag`,description:`Themed translated tags with icons, counters, tooltips and selected-value summaries.`,example:`<bx-tag text="Skopje" leadingIcon="map-pin" color="accent" variant="tonal" [trailingNumber]="2" />`},{id:`signal-forms`,title:`Signal Forms`,group:`Forms`,readme:`projects/blocks/forms/README.md`,symbol:`InputField, Checkbox`,package:`@filip.mazev/blocks/forms`,selector:`[formField]`,description:`A complete form with async validation, cross-field rules, submission and reset.`,example:`<bx-input-field label="Email" [formField]="registration.email" />`},{id:`radio-group`,title:`Radio group`,group:`Forms`,readme:`projects/blocks/forms/components/radio-group/README.md`,symbol:`RadioGroup, Radio`,package:`@filip.mazev/blocks/forms`,selector:`bx-radio-group`,description:`Typed grouped selection with one form value and accessible validation.`,example:`<bx-radio-group label="Plan" [formField]="registration.plan"><bx-radio label="Team" value="team" /></bx-radio-group>`},{id:`select`,title:`Select`,group:`Forms`,readme:`projects/blocks/forms/components/select/README.md`,symbol:`Select`,package:`@filip.mazev/blocks/forms`,selector:`bx-select`,description:`A single-value selection control with a positioned options panel and optional search.`,example:`<bx-select label="Destination" [options]="options" [isSearchable]="true" [formControl]="destination" />`},{id:`multi-select`,title:`Multiselect`,group:`Forms`,readme:`projects/blocks/forms/components/multi-select/README.md`,symbol:`MultiSelect`,package:`@filip.mazev/blocks/forms`,selector:`bx-multi-select`,description:`Paginated checkbox selection with select-all intent and async requests.`,example:`<bx-multi-select label="Workspaces" [options]="options()" [hasMore]="hasMore()" [loading]="loading()" (loadMore)="loadNext($event)" />`},{id:`load-more`,title:`Load more`,group:`Forms`,readme:`projects/blocks/forms/directives/load-more/README.md`,symbol:`LoadMoreDirective`,package:`@filip.mazev/blocks/forms`,selector:`[bxLoadMore]`,description:`Shared pagination with overflow detection, a loading button, and failure/retry states.`,example:`<div bxLoadMore [loadMoreHasMore]="hasMore()" [loadMoreLoading]="loading()" [loadMoreError]="error()" (loadMore)="loadNext($event)"></div>`},{id:`loading-spinner`,title:`Loading spinner`,group:`Primitives`,readme:`projects/blocks/primitives/components/loading-spinner/README.md`,symbol:`LoadingSpinner`,package:`@filip.mazev/blocks/primitives`,selector:`bx-loading-spinner`,description:`A themed spinner with accessible naming and reduced-motion support.`,example:`<bx-loading-spinner label="Fetching results" [size]="24" />`},{id:`loading-indicator`,title:`Loading indicator`,group:`Primitives`,readme:`projects/blocks/primitives/components/loading-indicator/README.md`,symbol:`LoadingIndicator`,package:`@filip.mazev/blocks/primitives`,selector:`bx-loading-indicator`,description:`A spinner and translated status text for asynchronous content.`,example:`<bx-loading-indicator label="Fetching results" />`},{id:`progress-bar`,title:`Progress bar`,group:`Primitives`,readme:`projects/blocks/primitives/components/progress-bar/README.md`,symbol:`ProgressBar`,package:`@filip.mazev/blocks/primitives`,selector:`bx-progress-bar`,description:`Determinate, buffered and indeterminate asynchronous progress.`,example:`<bx-progress-bar [value]="progress()" label="Upload progress" />`},{id:`button-loading`,title:`Loading button`,group:`Forms`,readme:`projects/blocks/forms/components/button/README.md`,symbol:`Button`,package:`@filip.mazev/blocks/forms`,selector:`button[bx-button]`,description:`Async actions with icon replacement, busy semantics, and disabled activation.`,example:`<button bx-button [loading]="saving()">Save changes</button>`},{id:`hint`,title:`Field hints`,group:`Forms`,readme:`projects/blocks/forms/directives/hint/README.md`,symbol:`BxHint`,package:`@filip.mazev/blocks/forms`,selector:`bx-hint`,description:`Visible supporting text with automatic control associations.`,example:`<bx-input-field label="Reference" hint="Your public reference" hintEnd="Optional" />`},{id:`prefix`,title:`Field prefix`,group:`Forms`,readme:`projects/blocks/forms/directives/prefix/README.md`,symbol:`PrefixDirective`,package:`@filip.mazev/blocks/forms`,selector:`[bxPrefix]`,description:`Custom content before the editable input.`,example:`<bx-input-field label="Amount"><span bxPrefix>$</span></bx-input-field>`},{id:`suffix`,title:`Field suffix`,group:`Forms`,readme:`projects/blocks/forms/directives/suffix/README.md`,symbol:`SuffixDirective`,package:`@filip.mazev/blocks/forms`,selector:`[bxSuffix]`,description:`Custom content after the editable input.`,example:`<bx-input-field label="Weight"><span bxSuffix>kg</span></bx-input-field>`},{id:`native-control`,title:`Native form control`,group:`Forms`,readme:`projects/blocks/forms/directives/native-control/README.md`,symbol:`NativeControlDirective`,package:`@filip.mazev/blocks/forms`,selector:`[bxInput]`,description:`Connect native inputs and textareas to the shared accessible frame.`,example:`<bx-form-field label="Notes"><textarea bxInput label="Notes"></textarea></bx-form-field>`},{id:`button`,title:`Button`,group:`Forms`,readme:`projects/blocks/forms/components/button/README.md`,symbol:`Button`,package:`@filip.mazev/blocks/forms`,selector:`button[bx-button]`,description:`An action control with Blocks intent colors, familiar variants and visible focus.`,example:`<button bx-button variant="filled" (click)="save()">Save changes</button>`},{id:`checkbox-indicator`,title:`Checkbox indicator`,group:`Forms`,readme:`projects/blocks/forms/components/checkbox-indicator/README.md`,symbol:`CheckboxIndicator`,package:`@filip.mazev/blocks/forms`,selector:`bx-checkbox-indicator`,description:`A shared decorative checkbox face for checked, unchecked and partial selection.`,example:`<bx-checkbox-indicator [checked]="selected()" [indeterminate]="partial()" />`},{id:`checkbox`,title:`Checkbox`,group:`Forms`,readme:`projects/blocks/forms/components/checkbox/README.md`,symbol:`Checkbox`,package:`@filip.mazev/blocks/forms`,selector:`bx-checkbox`,description:`A boolean choice integrated with Angular forms.`,example:`<bx-checkbox label="Receive updates" [formControl]="updates" />`},{id:`form-field`,title:`Form field`,group:`Forms`,readme:`projects/blocks/forms/components/form-field/README.md`,symbol:`FormField`,package:`@filip.mazev/blocks/forms`,selector:`bx-form-field`,description:`A shared label, help text, validation and loading frame for controls.`,example:`<bx-form-field label="Project name" forId="project" [required]="true" [error]="error">
  <input id="project" (input)="update($event)" />
</bx-form-field>`},{id:`input-field`,title:`Input field`,group:`Forms`,readme:`projects/blocks/forms/components/input-field/README.md`,symbol:`InputField`,package:`@filip.mazev/blocks/forms`,selector:`bx-input-field`,description:`A text, date or numeric input with a floating label and validation feedback.`,example:`<bx-input-field label="Project name" [formControl]="name" />`},{id:`radio`,title:`Radio`,group:`Forms`,readme:`projects/blocks/forms/components/radio-button/README.md`,symbol:`Radio`,package:`@filip.mazev/blocks/forms`,selector:`bx-radio`,description:`A single choice within a named group.`,example:`<bx-radio label="Daily" name="frequency" value="daily" [formControl]="frequency" />
<bx-radio label="Weekly" name="frequency" value="weekly" [formControl]="frequency" />`},{id:`search-input`,title:`Search input`,group:`Forms`,readme:`projects/blocks/forms/components/search-input/README.md`,symbol:`SearchInput`,package:`@filip.mazev/blocks/forms`,selector:`bx-search-input`,description:`A search control with a clear action, request loading, and explicit retry.`,example:`<bx-search-input label="Find a component" [(value)]="query" [loading]="loading()" [loadError]="loadError()" (search)="search($event)" (retry)="search($event)" />`},{id:`slider`,title:`Slider`,group:`Forms`,readme:`projects/blocks/forms/directives/slider/README.md`,symbol:`SliderDirective`,package:`@filip.mazev/blocks/forms`,selector:`input[type=range][bxSlider]`,description:`A native range input with an opaque circular thumb and theme-aware value fill.`,example:`<label for="volume">Volume</label>
<input id="volume" type="range" bxSlider min="0" max="100" [formControl]="volume" />`},{id:`range-slider`,title:`Range slider`,group:`Forms`,readme:`projects/blocks/forms/components/range-slider/README.md`,symbol:`RangeSlider`,package:`@filip.mazev/blocks/forms`,selector:`bx-range-slider`,description:`A constrained pair of range values with labels and tick marks.`,example:`<bx-range-slider label="Budget" [(value)]="range" [discrete]="true" />`},{id:`slide-toggle`,title:`Slide toggle`,group:`Forms`,readme:`projects/blocks/forms/components/slide-toggle/README.md`,symbol:`SlideToggle`,package:`@filip.mazev/blocks/forms`,selector:`bx-slide-toggle`,description:`A boolean preference that takes effect immediately.`,example:`<bx-slide-toggle label="Enable notifications" [formControl]="notifications" />`},{id:`error`,title:`Error message`,group:`Forms`,readme:`projects/blocks/forms/directives/error/README.md`,symbol:`BxError, FormField`,package:`@filip.mazev/blocks/forms`,selector:`bx-error`,description:`A projected custom error message inside a form-field.`,example:`<bx-form-field label="Reference" forId="reference">
  <input id="reference" aria-describedby="reference-error" />
  <bx-error id="reference-error">Enter at least three characters.</bx-error>
</bx-form-field>`},{id:`tabs`,title:`Tabs`,group:`Primitives`,readme:`projects/blocks/primitives/components/tabs/README.md`,symbol:`Tabs, Tab, TabContentDirective`,package:`@filip.mazev/blocks/primitives`,selector:`bx-tabs`,description:`Related panels with segmented or underline headers, keyboard navigation and optional lazy content.`,example:`<bx-tabs ariaLabel="Project information">
  <bx-tab label="Documentation" value="docs">
    <ng-template bxTabContent><app-documentation /></ng-template>
  </bx-tab>
  <bx-tab label="Code Examples" value="code">
    <ng-template bxTabContent><app-examples /></ng-template>
  </bx-tab>
</bx-tabs>`},{id:`menu`,title:`Menu`,group:`Primitives`,readme:`projects/blocks/primitives/components/menu/README.md`,symbol:`Menu, MenuItem`,package:`@filip.mazev/blocks/primitives`,selector:`bx-menu`,description:`A shared surface for related menu actions.`,example:`<bx-menu>
  <bx-menu-item label="Duplicate" icon="copy" (action)="duplicate()" />
  <bx-menu-item label="Archive" icon="archive" (action)="archive()" />
</bx-menu>`},{id:`menu-item`,title:`Menu item`,group:`Primitives`,readme:`projects/blocks/primitives/components/menu-item/README.md`,symbol:`MenuItem`,package:`@filip.mazev/blocks/primitives`,selector:`bx-menu-item`,description:`A menu action with optional icons, a shortcut hint, and destructive intent.`,example:`<bx-menu-item label="Delete" icon="trash-2" [danger]="true" (action)="remove()" />`},{id:`tooltip`,title:`Tooltip`,group:`Primitives`,readme:`projects/blocks/primitives/components/tooltip/README.md`,symbol:`Tooltip`,package:`@filip.mazev/blocks/primitives`,selector:`bx-tooltip`,description:`A short descriptive surface for supplementary help.`,example:`<bx-tooltip text="Changes are saved automatically." />`},{id:`dropdown`,title:`Dropdown`,group:`Primitives`,readme:`projects/blocks/primitives/directives/dropdown/README.md`,symbol:`DropdownDirective, Menu, MenuItem`,package:`@filip.mazev/blocks/primitives`,selector:`[bxDropdown]`,description:`A positioned menu that fades in and out without resizing its contents.`,example:`<button bx-button [bxDropdown]="actions" bxTransition="fade">Actions</button>
<ng-template #actions>
  <bx-menu><bx-menu-item label="Save" (action)="save()" /></bx-menu>
</ng-template>`},{id:`context-menu`,title:`Context menu`,group:`Primitives`,readme:`projects/blocks/primitives/directives/context-menu/README.md`,symbol:`ContextMenuDirective, Menu, MenuItem`,package:`@filip.mazev/blocks/primitives`,selector:`[bxContextMenu]`,description:`A menu positioned at a context action’s coordinates.`,example:`<div [bxContextMenu]="actions" tabindex="0">Right-click or touch and hold here</div>
<ng-template #actions><bx-menu><bx-menu-item label="Copy" (action)="copy()" /></bx-menu></ng-template>`},{id:`tooltip-directive`,title:`Tooltip trigger`,group:`Primitives`,readme:`projects/blocks/primitives/directives/tooltip/README.md`,symbol:`TooltipDirective`,package:`@filip.mazev/blocks/primitives`,selector:`[bxTooltip]`,description:`Connects a help surface to a trigger using the overlay positioning system.`,example:`<button bx-button bxTooltip="Saves this project" placement="top">Save</button>`},{id:`breadcrumbs`,title:`Breadcrumbs`,group:`Navigation`,readme:`projects/blocks/navigation/components/breadcrumbs/README.md`,symbol:`Breadcrumbs`,package:`@filip.mazev/blocks/navigation`,selector:`bx-breadcrumbs`,description:`A route-aware trail derived from Blocks navigation metadata.`,example:`<bx-breadcrumbs [minimumBreadcrumbs]="1" divider="chevron-right" />`},{id:`icon`,title:`Icon`,group:`Icons`,readme:`projects/blocks/icons/components/README.md`,symbol:`Icon`,package:`@filip.mazev/blocks/icons`,selector:`bx-icon`,description:`An asynchronously loaded SVG icon using semantic foreground and background tokens.`,example:`<bx-icon name="sparkles" size="32" color="text-accent" [decorative]="false" ariaLabel="Highlights" />`},{id:`modal-core`,title:`Modal core`,group:`Modals`,readme:`projects/blocks/modal/components/README.md`,symbol:`ModalCore`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`The service-owned host that composes modal content and chooses the active layout.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open modal core</button>`},{id:`modal-centered`,title:`Centered modal`,group:`Modals`,readme:`projects/blocks/modal/components/views/centered/README.md`,symbol:`ModalCentered`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`A focused dialog centered in the available viewport.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open centered modal</button>`},{id:`modal-side`,title:`Side modal`,group:`Modals`,readme:`projects/blocks/modal/components/views/side/README.md`,symbol:`ModalSide`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`A left or right panel for editing alongside the page context.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open side modal</button>`},{id:`modal-bottom-sheet`,title:`Bottom sheet`,group:`Modals`,readme:`projects/blocks/modal/components/views/bottom-sheet/README.md`,symbol:`ModalBottomSheet`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`A bottom-aligned modal surface suitable for compact actions and mobile layouts.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open bottom sheet</button>`},{id:`modal-backdrop`,title:`Modal backdrop`,group:`Modals`,readme:`projects/blocks/modal/components/shared/ui/backdrop/README.md`,symbol:`ModalBackdrop`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`The background scrim that separates an open modal from page content.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open modal backdrop</button>`},{id:`modal-banner`,title:`Modal banner`,group:`Modals`,readme:`projects/blocks/modal/components/shared/ui/banner/README.md`,symbol:`ModalBanner`,package:`@filip.mazev/blocks/modal`,selector:`bx-modal-banner`,description:`The shared modal heading, semantic icon and close action.`,example:`<bx-modal-banner [header]="{ text: 'Project settings' }" [showCloseButton]="true" (close)="handleClose($event)" />`},{id:`toast-core`,title:`Toast core`,group:`Notifications`,readme:`projects/blocks/toastr/components/README.md`,symbol:`ToastCore, ToastrService`,package:`@filip.mazev/blocks/toastr`,selector:`service-owned view`,description:`The toast lifecycle host with progress, dismissal and content composition.`,example:`<button bx-button (click)="notify()">Show notification</button>`},{id:`simple-toast`,title:`Simple toast`,group:`Notifications`,readme:`projects/blocks/toastr/components/views/simple-toast/README.md`,symbol:`SimpleToast, ToastrService`,package:`@filip.mazev/blocks/toastr`,selector:`service-owned view`,description:`A notification with a semantic icon, optional title and message.`,example:`<button bx-button (click)="notify()">Show success</button>`},{id:`surface`,title:`Surface effects`,group:`Primitives`,readme:`projects/blocks/effects/README.md`,symbol:`BxSurfaceDirective`,package:`@filip.mazev/blocks/effects`,selector:`[bxSurface]`,description:`Apply the shared glass material to a custom surface while inheriting application settings.`,example:`<section bxSurface>Custom content follows the global appearance settings.</section>`},{id:`modal-header`,title:`Modal header`,group:`Modals`,readme:`projects/blocks/modal/directives/header/README.md`,symbol:`ModalHeaderDirective`,package:`@filip.mazev/blocks/modal`,selector:`[appModalHeader]`,description:`Projects custom header content into the active Blocks modal layout.`,example:`<div *appModalHeader>Custom header content</div>`},{id:`modal-footer`,title:`Modal footer`,group:`Modals`,readme:`projects/blocks/modal/directives/footer/README.md`,symbol:`ModalFooterDirective`,package:`@filip.mazev/blocks/modal`,selector:`[appModalFooter]`,description:`Projects custom footer content into the active Blocks modal layout.`,example:`<div *appModalFooter>Custom footer content</div>`}];function Ii(i,e){i&1&&Le(0,`bx-icon`,1)}function Ai(i,e){i&1&&Le(0,`bx-icon`,2)}var We=class i{checked=g(!1);indeterminate=g(!1);invalid=g(!1);disabled=g(!1);static ɵfac=function(t){return new(t||i)};static ɵcmp=le({type:i,selectors:[[`bx-checkbox-indicator`]],hostAttrs:[`aria-hidden`,`true`],inputs:{checked:[1,`checked`],indeterminate:[1,`indeterminate`],invalid:[1,`invalid`],disabled:[1,`disabled`]},decls:3,vars:8,consts:[[`bxSurface`,``,1,`bx-checkbox-box`,3,`bxSurfaceEmission`],[`name`,`minus`,`size`,`16`],[`name`,`check`,`size`,`16`]],template:function(t,n){t&1&&(W(0,`span`,0),pe(1,Ii,1,0,`bx-icon`,1)(2,Ai,1,0,`bx-icon`,2),Q$1()),t&2&&(re(`is-checked`,n.checked()||n.indeterminate())(`is-invalid`,n.invalid())(`is-disabled`,n.disabled()),fe(`bxSurfaceEmission`,n.invalid()?`var(--bx-text-danger)`:`var(--bx-accent)`),M$1(),me$1(n.indeterminate()?1:n.checked()?2:-1))},dependencies:[mn$2,Dt$1],styles:[`
[_nghost-%COMP%] {
  display: inline-flex;
  flex: 0 0 auto;
  vertical-align: middle;
  pointer-events: none;
  border-radius: var(--%NS%bx-rounded-sm);
}
.bx-checkbox-box[_ngcontent-%COMP%] {
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  inline-size: var(--%NS%bx-checkbox-size, 1.125rem);
  block-size: var(--%NS%bx-checkbox-size, 1.125rem);
  line-height: 0;
  background-color: var(--%NS%bx-bg-surface);
  border: 1px solid var(--%NS%bx-border-strong);
  border-radius: var(--%NS%bx-rounded-sm);
  color: var(--%NS%bx-text-primary);
  transition-property: border-color;
  transition-duration: calc(0.15s * (1 - var(--%NS%bx-reduced-motion, 0)));
  transition-timing-function: ease;
}
.bx-checkbox-box.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
  background-color: var(--%NS%bx-bg-danger-subtle);
}
.bx-checkbox-box.is-checked[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-accent);
  border-color: var(--%NS%bx-accent);
  color: var(--%NS%bx-on-accent);
}
.bx-checkbox-box.is-checked.is-invalid[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-danger);
  border-color: var(--%NS%bx-border-danger);
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
  --%NS%bx-glass-surface: var(--%NS%bx-accent);
  --%NS%bx-glass-min-opacity: 1;
  --%NS%bx-glass-edge: var(--%NS%bx-border-accent);
  --%NS%bx-glass-text: var(--%NS%bx-on-accent);
}
.bx-checkbox-box[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-danger-subtle);
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
  --%NS%bx-glass-text: var(--%NS%bx-text-danger);
}
.bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%]:not(.is-disabled, .is-invalid) {
  background-image:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--%NS%bx-border-strong) 24%, var(--%NS%bx-glass-surface)),
      var(--%NS%bx-glass-surface) 55%,
      color-mix(in srgb, var(--%NS%bx-border-strong) 10%, var(--%NS%bx-glass-surface))) !important;
  border-top-color: var(--%NS%bx-border-strong);
  border-bottom-color: var(--%NS%bx-border-default);
}
.bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%]:not(.is-disabled, .is-invalid).is-checked {
  background-image:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--%NS%bx-color-accent-50) 24%, var(--%NS%bx-accent)),
      var(--%NS%bx-accent) 42%,
      var(--%NS%bx-accent) 65%,
      color-mix(in srgb, var(--%NS%bx-border-accent) 18%, var(--%NS%bx-accent))) !important;
  border-top-color: color-mix(in srgb, var(--%NS%bx-color-accent-100) 60%, var(--%NS%bx-accent));
  border-inline-color: var(--%NS%bx-accent);
  border-bottom-color: var(--%NS%bx-border-accent);
}
.high-contrast[_nghost-%COMP%]   .bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%]:not(.is-disabled, .is-invalid), .high-contrast   [_nghost-%COMP%]   .bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%]:not(.is-disabled, .is-invalid), 
.bx-high-contrast-scope[_nghost-%COMP%]   .bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%]:not(.is-disabled, .is-invalid), .bx-high-contrast-scope   [_nghost-%COMP%]   .bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%]:not(.is-disabled, .is-invalid) {
  background-image: none !important;
  border-color: var(--%NS%bx-glass-edge);
}
@media (forced-colors: active) {
  .bx-checkbox-box[data-bx-surface][_ngcontent-%COMP%]:not(.is-disabled, .is-invalid) {
    background-image: none !important;
    border-color: ButtonText;
  }
}`]})};var Ye$1=class i extends Tf{draft=_$1(void 0);displayedChecked=y(()=>this.draft()??this.checked());checked=Zu(!1);labelPosition=g(`after`);reset(){super.reset(),this.draft.set(void 0)}clearPendingEdit(){this.draft.set(void 0)}commitPendingValue(e){let t=this.draft();t===void 0||e===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.checked.set(t),this.draft.set(void 0))}onToggle(e){let t=e.target;if(this.disabled()||this.isReadonly()){t.checked=this.checked();return}let n=this.ngControl?.control?.updateOn;n===`blur`||n===`submit`?this.draft.set(t.checked):this.checked.set(t.checked)}onReadonlyClick(e){this.isReadonly()&&e.preventDefault()}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let e;return function(n){return(e||(e=Dn$2(i)))(n||i)}})();static ɵdir=R$1({type:i,inputs:{checked:[1,`checked`],labelPosition:[1,`labelPosition`]},outputs:{checked:`checkedChange`},features:[Je$2]})};var Li=[`*`,[[`bx-error`]],[[`bx-hint`]]];var Fi=[`*`,`bx-error`,`bx-hint`];var Vi=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var zi=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Hi(i,e){i&1&&(W(0,`span`,5),je(1,`*`),Q$1())}var Qn$1=class i extends Ye$1{indeterminate=Zu(!1);clickAction=g(`check-indeterminate`);onToggle(e){if(this.clickAction()===`noop`){e.target.checked=this.displayedChecked(),e.target.indeterminate=this.indeterminate();return}super.onToggle(e),this.clickAction()===`check`&&(e.target.indeterminate=this.indeterminate()),!this.disabled()&&!this.isReadonly()&&this.clickAction()===`check-indeterminate`&&this.indeterminate.set(!1)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Dn$2(i)))(n||i)}})();static ɵcmp=le({type:i,selectors:[[`bx-checkbox`]],inputs:{indeterminate:[1,`indeterminate`],clickAction:[1,`clickAction`]},outputs:{indeterminate:`indeterminateChange`},features:[Je$2],ngContentSelectors:Fi,decls:10,vars:34,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`id`,`disabled`,`required`,`checked`,`indeterminate`],[3,`checked`,`indeterminate`,`invalid`,`disabled`],[1,`bx-inline-label`],[`aria-hidden`,`true`,1,`bx-inline-required`]],template:function(t,n){t&1&&(Ze$2(Li),W(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),be$1(`click`,function(o){return n.onReadonlyClick(o)})(`change`,function(o){return n.onToggle(o)})(`blur`,function(){return n.onBlur()}),Q$1(),Le(3,`bx-checkbox-indicator`,3),W(4,`span`,4),Re(5),je(6),pe(7,Hi,2,0,`span`,5),Q$1()(),Re(8,1,Vi),Re(9,2,zi),Q$1()),t&2&&(fe(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`loading`,n.loading())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),M$1(),re(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`label-before`,n.labelPosition()===`before`),M$1(),fe(`id`,n.controlId())(`disabled`,n.disabled())(`required`,n.effectiveRequired())(`checked`,n.displayedChecked())(`indeterminate`,n.indeterminate()),ve(`name`,n.name()||null)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-readonly`,n.isReadonly()),M$1(),fe(`checked`,n.displayedChecked())(`indeterminate`,n.indeterminate())(`invalid`,n.showError())(`disabled`,n.disabled()),M$1(3),Sr$1(``,n.resolvedLabel(),` `),M$1(),me$1(n.effectiveRequired()&&!n.resolvedHideRequiredMarker()?7:-1))},dependencies:[Mf,We],styles:[`
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
.bx-inline-wrapper.is-readonly[_ngcontent-%COMP%]:not(.is-disabled) {
  cursor: default;
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
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-readonly)   input[_ngcontent-%COMP%]:focus-visible    ~ bx-checkbox-indicator[_ngcontent-%COMP%], 
.bx-inline-wrapper.is-readonly.is-keyboard-focused[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible    ~ bx-checkbox-indicator[_ngcontent-%COMP%] {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: 2px;
}
.bx-inline-wrapper.label-before[_ngcontent-%COMP%]   .bx-inline-label[_ngcontent-%COMP%] {
  order: -1;
}`]})};var Jn$1=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=le({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return i})();var Bi={passive:!0};var qi=(()=>{class i{_platform=f(pt$1);_ngZone=f(j$1);_renderer=f(Nt).createRenderer(null,null);_styleLoader=f(ho$1);_monitoredElements=new Map;monitor(t){if(!this._platform.isBrowser)return gt;this._styleLoader.load(Jn$1);let n=Bs(t),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new ie$1,a=`cdk-text-field-autofilled`,u=y=>{y.animationName===`cdk-text-field-autofill-start`&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:y.target,isAutofilled:!0}))):y.animationName===`cdk-text-field-autofill-end`&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:y.target,isAutofilled:!1})))},g=this._ngZone.runOutsideAngular(()=>(n.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(n,`animationstart`,u,Bi)));return this._monitoredElements.set(n,{subject:o,unlisten:g}),o}stopMonitoring(t){let n=Bs(t),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove(`cdk-text-field-autofill-monitored`),n.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((t,n)=>this.stopMonitoring(n))}static ɵfac=function(n){return new(n||i)};static ɵprov=F({token:i,factory:i.ɵfac})}return i})();var ei=(()=>{class i{_elementRef=f(U$2);_autofillMonitor=f(qi);cdkAutofill=new he;ngOnInit(){this._autofillMonitor.monitor(this._elementRef).subscribe(t=>this.cdkAutofill.emit(t))}ngOnDestroy(){this._autofillMonitor.stopMonitoring(this._elementRef)}static ɵfac=function(n){return new(n||i)};static ɵdir=R$1({type:i,selectors:[[``,`cdkAutofill`,``]],outputs:{cdkAutofill:`cdkAutofill`}})}return i})();var ti=(()=>{class i{_elementRef=f(U$2);_platform=f(pt$1);_ngZone=f(j$1);_renderer=f(Ct);_resizeEvents=new ie$1;_previousValue;_initialHeight;_destroyed=new ie$1;_listenerCleanups;_minRows;_maxRows;_enabled=!0;_previousMinRows=-1;_textareaElement;get minRows(){return this._minRows}set minRows(t){this._minRows=jP(t),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(t){this._maxRows=jP(t),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(t){this._enabled!==t&&((this._enabled=t)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(t){this._cachedPlaceholderHeight=void 0,t?this._textareaElement.setAttribute(`placeholder`,t):this._textareaElement.removeAttribute(`placeholder`),this._cacheTextareaPlaceholderHeight()}_cachedLineHeight;_cachedPlaceholderHeight;_document=f(z$1);_hasFocus=!1;_isViewInited=!1;constructor(){f(ho$1).load(Jn$1),this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let t=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;t&&(this._textareaElement.style.minHeight=t)}_setMaxHeight(){let t=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;t&&(this._textareaElement.style.maxHeight=t)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(`window`,`resize`,()=>this._resizeEvents.next()),this._renderer.listen(this._textareaElement,`focus`,this._handleFocusEvent),this._renderer.listen(this._textareaElement,`blur`,this._handleFocusEvent)],this._resizeEvents.pipe(Ec(16)).subscribe(()=>{this._cachedLineHeight=this._cachedPlaceholderHeight=void 0,this.resizeToFitContent(!0)})}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._listenerCleanups?.forEach(t=>t()),this._resizeEvents.complete(),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let t=this._textareaElement.cloneNode(!1),n=t.style;t.rows=1,n.position=`absolute`,n.visibility=`hidden`,n.border=`none`,n.padding=`0`,n.height=``,n.minHeight=``,n.maxHeight=``,n.top=n.bottom=n.left=n.right=`auto`,n.overflow=`hidden`,this._textareaElement.parentNode.appendChild(t),this._cachedLineHeight=t.clientHeight,t.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let t=this._textareaElement,n=t.style.marginBottom||``,r=this._platform.FIREFOX,o=this._hasFocus,a=r?`cdk-textarea-autosize-measuring-firefox`:`cdk-textarea-autosize-measuring`;o&&(t.style.marginBottom=`${t.clientHeight}px`),t.classList.add(a);let u=t.scrollHeight-4;return t.classList.remove(a),o&&(t.style.marginBottom=n),u}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let t=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=t}_handleFocusEvent=t=>{this._hasFocus=t.type===`focus`};ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(t=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let n=this._elementRef.nativeElement,r=n.value;if(!t&&this._minRows===this._previousMinRows&&r===this._previousValue)return;let o=this._measureScrollHeight(),a=Math.max(o,this._cachedPlaceholderHeight||0);n.style.height=`${a}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<`u`?requestAnimationFrame(()=>this._scrollToCaretPosition(n)):setTimeout(()=>this._scrollToCaretPosition(n))}),this._previousValue=r,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_scrollToCaretPosition(t){let{selectionStart:n,selectionEnd:r}=t;!this._destroyed.isStopped&&this._hasFocus&&t.setSelectionRange(n,r)}static ɵfac=function(n){return new(n||i)};static ɵdir=R$1({type:i,selectors:[[`textarea`,`cdkTextareaAutosize`,``]],hostAttrs:[`rows`,`1`,1,`cdk-textarea-autosize`],hostBindings:function(n,r){n&1&&be$1(`input`,function(){return r._noopInputHandler()})},inputs:{minRows:[0,`cdkAutosizeMinRows`,`minRows`],maxRows:[0,`cdkAutosizeMaxRows`,`maxRows`],enabled:[2,`cdkTextareaAutosize`,`enabled`,Z],placeholder:`placeholder`},exportAs:[`cdkTextareaAutosize`]})}return i})();var ai=Symbol(`FIELD_TREE`);var Ot=0;function Ki(){return Ot}function te(i,e){return(...t)=>{try{return Ot=e,i(...t)}finally{Ot=0}}}function Ui(i){return!i}function ni(i){return i}function U$1(i){return Array.isArray(i)}function Qe$1(i){return(typeof i==`object`||typeof i==`function`)&&i!=null}var ae=Symbol();var at=Symbol();var Ne=class{predicates;fns=[];constructor(e){this.predicates=e}push(e){this.fns.push(ii(this.predicates,e))}mergeIn(e){let t=this.predicates?e.fns.map(n=>ii(this.predicates,n)):e.fns;this.fns.push(...t)}hasRules(){return this.fns.length>0}};var Je$1=class extends Ne{get defaultValue(){return!1}compute(e){return this.fns.some(t=>{let n=t(e);return n&&n!==at})}};var be=class i extends Ne{ignore;static ignoreNull(e){return new i(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t}get defaultValue(){return[]}compute(e){return this.fns.reduce((t,n)=>{let r=n(e);return r===void 0||r===at?t:U$1(r)?[...t,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?t:[...t,r]},[])}};var kt=class extends be{constructor(e){super(e,void 0)}};var Et=class extends Ne{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let n=0;n<this.fns.length;n++){let r=this.fns[n](e);r!==at&&(t=this.key.reducer.reduce(t,r))}return t}};function ii(i,e){return i.length===0?e:t=>{for(let n of i){let r=t.stateOf(n.path),o=O$2(r.structure.pathKeys).length-n.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!n.fn(r.context))return at}return e(t)}}var me=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(e){this.predicates=e,this.hidden=new Je$1(e),this.disabledReasons=new kt(e),this.readonly=new Je$1(e),this.syncErrors=be.ignoreNull(e),this.syncTreeErrors=be.ignoreNull(e),this.asyncErrors=be.ignoreNull(e)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(e){return this.metadata.has(e)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new Et(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let n=e.metadata.get(t);this.getMetadata(t).mergeIn(n)}}};var et$1=class{depth;constructor(e){this.depth=e}build(){return new tt(this,[],0)}};var ye=class i extends et$1{constructor(e){super(e)}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e)}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e)}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e)}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e)}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e)}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e)}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t)}getChild(e){if(e===ae){let t=this.getCurrent().children;t.size>(t.has(ae)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?!0:this.all.some(({builder:t})=>t.hasLogic(e))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:e})=>e.anyChildHasLogic())}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:te(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new Te(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new i(0)}};var Te=class extends et$1{logic=new me([]);children=new Map;constructor(e){super(e)}addHiddenRule(e){this.logic.hidden.push(te(e,this.depth))}addDisabledReasonRule(e){this.logic.disabledReasons.push(te(e,this.depth))}addReadonlyRule(e){this.logic.readonly.push(te(e,this.depth))}addSyncErrorRule(e){this.logic.syncErrors.push(te(e,this.depth))}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(te(e,this.depth))}addAsyncErrorRule(e){this.logic.asyncErrors.push(te(e,this.depth))}addMetadataRule(e,t){this.logic.getMetadata(e).push(te(t,this.depth))}getChild(e){return this.children.has(e)||this.children.set(e,new ye(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let e of this.children.values())if(e.hasRules())return!0;return!1}};var tt=class i{builder;predicates;depth;logic;constructor(e,t,n){this.builder=e,this.predicates=t,this.depth=n,this.logic=e?$i(e,t,n):new me([])}getChild(e){let t=this.builder?si(this.builder,e):[];if(t.length===0)return new i(void 0,[],this.depth+1);if(t.length===1){let{builder:n,predicates:r}=t[0];return new i(n,[...this.predicates,...r.map(o=>Pt(o,this.depth))],this.depth+1)}else return new Dt(t.map(({builder:r,predicates:o})=>new i(r,[...this.predicates,...o.map(a=>Pt(a,this.depth))],this.depth+1)))}hasLogic(e){return this.builder?this.builder.hasLogic(e):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var Dt=class i{all;logic;constructor(e){this.all=e,this.logic=new me([]);for(let t of e)this.logic.mergeIn(t.logic)}getChild(e){return new i(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}hasRules(){return this.all.some(e=>e.hasRules())}anyChildHasLogic(){return this.all.some(e=>e.anyChildHasLogic())}};function si(i,e){if(i instanceof ye)return i.all.flatMap(({builder:t,predicate:n})=>{let r=si(t,e);return n?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,n]})):r});if(i instanceof Te)return[...e!==ae&&i.children.has(ae)?[{builder:i.getChild(ae),predicates:[]}]:[],...i.children.has(e)?[{builder:i.getChild(e),predicates:[]}]:[]];throw new x(1909,!1)}function $i(i,e,t){let n=new me(e);if(i instanceof ye){let r=i.all.map(({builder:o,predicate:a})=>new tt(o,a?[...e,Pt(a,t)]:e,t));for(let o of r)n.mergeIn(o.logic)}else if(i instanceof Te)n.mergeIn(i.logic);else throw new x(1909,!1);return n}function Pt(i,e){return s(r({},i),{depth:e})}var li=Symbol(`PATH`);var I$1=class i{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Gi);logicBuilder;constructor(e,t,n,r){this.keys=e,this.parent=n,this.keyInParent=r,this.root=t??this,n||(this.logicBuilder=ye.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new i([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let n=e.compile();this.builder.mergeIn(n.builder,t)}static unwrapFieldPath(e){return e[li]}static newRoot(){return new i([],void 0,void 0,void 0)}};var Gi={get(i,e){return e===li?i:i.getChild(e).fieldPathProxy}};var Ze$1;var we=new Map;var nt$1=class i{schemaFn;constructor(e){this.schemaFn=e}compile(){if(we.has(this))return we.get(this);let e=I$1.newRoot();we.set(this,e);let t=Ze$1;try{Ze$1=e,this.schemaFn(e.fieldPathProxy)}finally{Ze$1=t}return e}static create(e){return e instanceof i?e:new i(e)}static rootCompile(e){try{return we.clear(),e===void 0?I$1.newRoot():e instanceof i?e.compile():new i(e).compile()}finally{we.clear()}}};function Wi(i){return i instanceof nt$1||typeof i==`function`}function se(i){if(Ze$1!==I$1.unwrapFieldPath(i).root)throw new x(1908,!1)}function V$1(i,e,t){return se(i),I$1.unwrapFieldPath(i).builder.addMetadataRule(e,t),e}var X={list(){return{reduce:(i,e)=>e===void 0?i:[...i,e],getInitial:()=>[]}},min(){return{reduce:(i,e)=>i===void 0||e===void 0?i??e:e<i?e:i,getInitial:()=>{}}},max(){return{reduce:(i,e)=>i===void 0||e===void 0?i??e:e>i?e:i,getInitial:()=>{}}},or(){return{reduce:(i,e)=>i||e,getInitial:()=>!1}},and(){return{reduce:(i,e)=>i&&e,getInitial:()=>!0}},override:Xi};function Xi(i){return{reduce:(e,t)=>t,getInitial:()=>i?.()}}var st=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var Oe=class{reducer;create;brand;[st];constructor(e,t){this.reducer=e,this.create=t}};function A$1(i){return new Oe(i??X.override())}function di(i,e){return new Oe(e??X.override(),i)}function Bt(){return A$1()}var qt=A$1(X.or());var Kt=Bt();var Ut=A$1(X.max());var $t=Bt();var Gt=A$1(X.min());var Wt=A$1(X.max());var ci=A$1(X.min());var ui=A$1(X.list());function R(i,e){if(i===e)return!0;if(!i||!e||i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(!Object.is(i[t],e[t]))return!1;return!0}function Yi(i){return i.errors().length>0?`invalid`:i.pending()?`unknown`:`valid`}var Rt=class{node;constructor(e){this.node=e}rawSyncTreeErrors=y(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:R});syncErrors=y(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Zi(this.node.submitState.submissionErrors())],{equal:R});syncValid=y(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),Ui));syncTreeErrors=y(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree),{equal:R});rawAsyncErrors=y(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:R});asyncErrors=y(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e===`pending`||e.fieldTree===this.node.fieldTree),{equal:R});parseErrors=y(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()),{equal:R});errors=y(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!==`pending`)],{equal:R});errorSummary=y(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,n)=>[...n,...t.errorSummary()]);return O$2(()=>e.sort(Qi)),e},{equal:R});pending=y(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(e,t)=>t||e.validationState.pending()));status=y(()=>{if(this.shouldSkipValidation())return`valid`;let e=Yi(this);return this.node.structure.reduceChildren(e,(t,n)=>n===`invalid`||t.validationState.status()===`invalid`?`invalid`:n===`unknown`||t.validationState.status()===`unknown`?`unknown`:`valid`,t=>t===`invalid`)});valid=y(()=>this.status()===`valid`);invalid=y(()=>this.status()===`invalid`);shouldSkipValidation=y(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function Zi(i){return i===void 0?[]:U$1(i)?i:[i]}function Ee$1(i,e){if(U$1(i))for(let t of i)t.fieldTree??=e;else i&&(i.fieldTree??=e);return i}function ri(i){return i.formField?i.formField.element:i.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function Qi(i,e){let t=ri(i),n=ri(e);return t===n?0:t===void 0||n===void 0?t===void 0?1:-1:t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var it=A$1();var It=class{node;cache=new WeakMap;constructor(e){this.node=e,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(e){if(!this.cache.has(e)){let t=y(()=>{let n=I$1.unwrapFieldPath(e),r=this.node,o=Ki();for(;o>0||!r.structure.logic.hasLogic(n.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new x(1900,!1);for(let a of n.keys)if(r=r.structure.getChild(a),r===void 0)throw new x(1901,!1);return r.fieldTree});this.cache.set(e,t)}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=y(()=>{let e=this.key();if(!U$1(O$2(this.node.structure.parent.value)))throw new x(1906,!1);return Number(e)});fieldTreeOf(e){return this.resolve(e)}stateOf(e){return this.resolve(e)()}valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof Wd)throw new x(1907,!1);return t}};var At=class{node;metadata=new Map;constructor(e){this.node=e}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let e=og();e&&Ji$1(!1);try{O$2(()=>dt$1(this.node.structure.injector,()=>{for(let t of this.node.logicNode.logic.getMetadataKeys())if(t.create){let n=this.node.logicNode.logic.getMetadata(t),r=t.create(this.node,y(()=>n.compute(this.node.context)));this.metadata.set(t,r)}}))}finally{e&&Ji$1(!0)}}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new x(1912,!1);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,y(()=>t.compute(this.node.context)))}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}};var Ji={get(i,e,t){if(e===ai)return!0;let n=i(),r=n.structure.getChild(e);if(r!==void 0)return r.fieldTree;let o=O$2(n.value);if(U$1(o)){if(e===`length`)return n.value().length;if(e===Symbol.iterator)return()=>(n.value(),Array.prototype[Symbol.iterator].apply(n.fieldTree))}if(Qe$1(o)&&e===Symbol.iterator)return function*(){for(let a in t)yield[a,t[a]]}},getOwnPropertyDescriptor(i,e){let t=O$2(i().value),n=Reflect.getOwnPropertyDescriptor(t,e);return n&&!n.configurable&&(n.configurable=!0),n},ownKeys(i){let e=O$2(i().value);return typeof e==`object`&&e!==null?Reflect.ownKeys(e):[]}};function er(i,e){let t=y(()=>i()[e()]);return t[He]=i[He],t.set=n=>{Object.is(O$2(t),n)||i.update(r=>tr(r,n,e()))},t.update=n=>{t.set(n(O$2(t)))},t.asReadonly=()=>t,t}function tr(i,e,t){if(U$1(i)){let n=[...i];return n[t]=e,n}else return s(r({},i),{[t]:e})}var ge=Symbol(``);var pi=y(()=>!1);var rt$1=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=ne$1.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(e,t,n){this.logic=e,this.node=t,this.createChildNode=n}children(){this.ensureChildrenMap();let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>O$2(t.reader))}materializedChildren(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>t.node)}_areChildrenMaterialized(){return O$2(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||O$2(()=>{this.childrenMap.update(e=>this.computeChildrenMap(this.value(),e,!0))})}getChild(e){this.ensureChildrenMap();let t=e.toString(),n=O$2(this.childrenMap)?.byPropertyKey.get(t)?.reader;return n||(n=this.createReader(t)),n()}reduceChildren(e,t,n){let r=this.childrenMap();if(!r)return e;let o=e;for(let a of r.byPropertyKey.values()){if(n?.(o))break;o=t(O$2(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(e,t,n){if(e===`root`)return{keyInParent:hi,isOrphaned:pi};let r=this.parent,o=n,a=y(()=>{if(r.structure.isOrphaned())return ge;let y=r.structure.childrenMap();if(!y)return ge;let D=y.byPropertyKey.get(o);if(D&&D.node===this.node)return o;if(t===void 0)return ge;for(let[j,Pe]of y.byPropertyKey)if(Pe.node===this.node)return o=j;return ge}),u=y(()=>a()===ge);return{keyInParent:y(()=>{let y=a();if(y===ge)throw t===void 0?new x(-1902,!1):new x(1904,!1);return y}),isOrphaned:u}}createChildrenMap(){return ps({source:this.value,computation:(e,t)=>this.computeChildrenMap(e,t?.value,!1)})}computeChildrenMap(e,t,n){if(!Qe$1(e)||!n&&t===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;t??={byPropertyKey:new Map};let r$1,o=U$1(e);t!==void 0&&(o?r$1=ir(t,e,this.identitySymbol):r$1=rr(t,e));for(let a of Object.keys(e)){let u,g=e[a];if(g===void 0){t.byPropertyKey.has(a)&&(r$1??=r({},t),r$1.byPropertyKey.delete(a));continue}o&&Qe$1(g)&&!U$1(g)&&(u=g[this.identitySymbol]??=Symbol(``));let y;u&&(t.byTrackingKey?.has(u)||(r$1??=r({},t),r$1.byTrackingKey??=new Map,r$1.byTrackingKey.set(u,this.createChildNode(a,u,o))),y=(r$1??t).byTrackingKey.get(u));let D=t.byPropertyKey.get(a);D===void 0?(r$1??=r({},t),r$1.byPropertyKey.set(a,{reader:this.createReader(a),node:y??this.createChildNode(a,u,o)})):y&&y!==D.node&&(r$1??=r({},t),D.node=y)}return r$1??t}createReader(e){return y(()=>this.childrenMap()?.byPropertyKey.get(e)?.node)}};var Lt=class extends rt$1{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return nr}get keyInParent(){return hi}isOrphaned=pi;childrenMap;constructor(e,t,n,r,o){super(t,e,o),this.fieldManager=n,this.value=r,this.childrenMap=this.createChildrenMap()}};var Ft=class extends rt$1{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,n,r,o,a){super(t,e,a),this.logic=t,this.parent=n,this.root=this.parent.structure.root;let u=this.createKeyOrOrphanSignals(`child`,r,o);this.isOrphaned=u.isOrphaned,this.keyInParent=u.keyInParent,this.pathKeys=y(()=>[...n.structure.pathKeys(),this.keyInParent()]),this.value=er(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var nr=y(()=>[]);var hi=y(()=>{throw new x(1905,!1)});function ir(i,e,t){let n,r$2=new Set(i.byPropertyKey.keys()),o=i.byTrackingKey&&new Set(i.byTrackingKey.keys());for(let a=0;a<e.length;a++){let u=e[a];r$2.delete(a.toString()),o&&Qe$1(u)&&Object.hasOwn(u,t)&&o.delete(u[t])}if(r$2.size>0){n??=r({},i);for(let a of r$2)n.byPropertyKey.delete(a)}if(o&&o.size>0){n??=r({},i);for(let a of o)n.byTrackingKey.delete(a)}return n}function rr(i,e){let t;for(let n of i.byPropertyKey.keys())Object.hasOwn(e,n)||(t??=r({},i),t.byPropertyKey.delete(n));return t}var Vt=class{node;selfSubmitting=_$1(!1);submissionErrors;constructor(e){this.node=e,this.submissionErrors=ps({source:this.node.structure.value,computation:()=>[]})}submitting=y(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var ke$1=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new It(this)}fieldProxy=new Proxy(()=>this,Ji);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new At(this),this.submitState=new Vt(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(e){this.getBindingForFocus()?.focus(e)}getBindingForFocus(){return this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(oi,void 0)||this.structure.children().map(t=>t.getBindingForFocus()).reduce(oi,void 0)}pendingSync=ps({source:()=>this.value(),computation:(e,t)=>{t?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let e=this.metadata($t)?.();return e?this.metadata(e):void 0}get maxLength(){return this.metadata(ci)}get min(){let e=this.metadata(Kt)?.();return e?this.metadata(e):void 0}get minLength(){return this.metadata(Wt)}get pattern(){return this.metadata(ui)??or}get required(){return this.metadata(qt)??ar}metadata(e){return this.metadataState.get(e)}getError(e){return this.errors().find(t=>t.kind===e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(e){this.structure.isOrphaned()||O$2(()=>{this.markAsTouchedInternal(e),this.flushSync()})}markAsTouchedInternal(e){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!e?.skipDescendants))for(let t of this.structure.children())t.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(e){O$2(()=>this._reset(e))}_reset(e){this.pendingSync()?.abort(),e!==void 0&&this.value.set(e),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.formFieldBindings())t.reset();for(let t of this.structure.materializedChildren())t._reset()}reloadValidation(){O$2(()=>this._reloadValidation())}_reloadValidation(){let e=this.logicNode.logic.getMetadataKeys();for(let t of e)t[st]&&this.metadata(t).reload?.();for(let t of this.structure.children())t._reloadValidation()}controlValueSignal(){let e=ps(this.value);e.rawSet=e.set,e.set=n=>{e.rawSet(n),this.markAsDirty(),this.debounceSync()};let t=e.update;return e.update=n=>{t(n),this.markAsDirty(),this.debounceSync()},e}sync(){this.value.set(this.controlValue())}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync())}async debounceSync(){let e=O$2(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(e){let t=new AbortController,n=e(t.signal);if(n&&(this.pendingSync.set(t),await n,t.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(e,t,n,r){return r.newRoot(e,t,n,r)}createStructure(e){return e.kind===`root`?new Lt(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new Ft(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,n){let r,o;return n?(r=this.pathNode.getChild(ae),o=this.structure.logic.getChild(ae)):(r=this.pathNode.getChild(e),o=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:o,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}};var or=y(()=>[]);var ar=y(()=>!1);function oi(i,e){return i?e&&i.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:i:e}var zt=class{node;selfTouched=_$1(!1);selfDirty=_$1(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=_$1([]);constructor(e){this.node=e}dirty=y(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,n)=>n||t.nodeState.dirty(),ni)});touched=y(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,n)=>n||t.nodeState.touched(),ni)});disabledReasons=y(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:R});disabled=y(()=>!!this.disabledReasons().length);readonly=y(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=y(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=y(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=y(()=>{if(this.node.logicNode.logic.hasMetadata(it)){let t=this.node.logicNode.logic.getMetadata(it).compute(this.node.context);if(t)return n=>t(this.node.context,n)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=y(()=>this.hidden()||this.disabled()||this.readonly())};var Ht=class{newRoot(e,t,n,r){return new ke$1({kind:`root`,fieldManager:e,value:t,pathNode:n,logic:n.builder.build(),fieldAdapter:r})}newChild(e){return new ke$1(e)}createNodeState(e){return new zt(e)}createValidationState(e){return new Rt(e)}createStructure(e,t){return e.createStructure(t)}};var jt=class{injector;rootName;submitOptions;constructor(e,t,n){this.injector=e,this.rootName=t??`${this.injector.get(Fn$2)}.form${sr++}`,this.submitOptions=n}structures=new Set;createFieldManagementEffect(e){Ee$2(()=>{let t=new Set;this.markStructuresLive(e,t);for(let n of this.structures)t.has(n)||(this.structures.delete(n),O$2(()=>n.destroy()))},{injector:this.injector})}markStructuresLive(e,t){t.add(e);for(let n of e.children())this.markStructuresLive(n.structure,t)}};var sr=0;var fi=new E(``);function lr(i){let e,t,n;return i.length===3?[e,t,n]=i:i.length===2?Wi(i[1])?[e,t]=i:[e,n]=i:[e]=i,[e,t,n]}function dr(...i){let[e,t,n]=lr(i),r=n?.injector??f(ne$1),o=dt$1(r,()=>nt$1.rootCompile(t)),a=new jt(r,n?.name,n?.submission),u=n?.adapter??new Ht,g=ke$1.newRoot(a,e,o,u);a.createFieldManagementEffect(g.structure);let{experimentalWebMcpTool:y}=n??{};if(y){let D=dt$1(r,()=>f(fi,{optional:!0}));D&&dt$1(r,()=>D(g.fieldTree,{name:y.name,description:y.description,annotations:y.annotations}))}return g.fieldTree}async function gi(i,e){let t=O$2(i);if(O$2(t.submitState.submitting))return!1;let n=e===void 0?t.structure.root.fieldProxy:i,r={root:t.structure.root.fieldProxy,submitted:i};e=typeof e==`function`?{action:e}:e??t.structure.fieldManager.submitOptions;let o=e?.action;if(!o)throw new x(1915,!1);t.markAsTouched();let a=e?.onInvalid,u=cr(t,e?.ignoreValidators);try{if(u){t.submitState.selfSubmitting.set(!0);let g=await O$2(()=>o?.(n,r));return g&&ur(t,g),!g||U$1(g)&&g.length===0}else O$2(()=>a?.(n,r));return!1}finally{t.submitState.selfSubmitting.set(!1)}}function cr(i,e){switch(e){case`all`:return!0;case`none`:return O$2(i.valid);default:return!O$2(i.invalid)}}function ur(i,e){U$1(e)||(e=[e]);let t=new Map;for(let n of e){let r=Ee$1(n,i.fieldTree),o=r.fieldTree(),a=t.get(o);a||(a=[],t.set(o,a)),a.push(r)}for(let[n,r]of t)n.submitState.submissionErrors.set(r)}var ot=class{kind=`compat`;control;fieldTree;context;message;constructor({context:e,kind:t,control:n}){this.context=e,this.kind=t,this.control=n}};function bi(i){if(i.length===0)return null;let e={};for(let t of i)e[t.kind]=t instanceof ot?t.context:t;return e}function mi(i,e){return i===null?[]:Object.entries(i).map(([t,n])=>new ot({context:n,kind:t,control:e}))}var pr=new E(``);function Fa(i,e){se(i);let t=I$1.unwrapFieldPath(i),n;typeof e==`function`||typeof e==`string`?n=e:n=e?.when,t.builder.addDisabledReasonRule(r=>{let o=!0;return typeof n==`string`?o=n:n&&(o=n(r)),typeof o==`string`?{fieldTree:r.fieldTree,message:o}:o?{fieldTree:r.fieldTree}:void 0})}function Va(i,e){se(i);let t=I$1.unwrapFieldPath(i),n=typeof e==`function`?e:e?.when??(()=>!0);t.builder.addReadonlyRule(n)}function hr(i){let e=i;return typeof e.length==`number`?e.length:e.size}function $(i,e){return i instanceof Function?i(e):i}function nn$1(i){return typeof i==`number`?isNaN(i):i===``||i===!1||i==null}function yi(i){return i===void 0?[]:Array.isArray(i)?i:[i]}function De(i,e){se(i),I$1.unwrapFieldPath(i).builder.addSyncErrorRule(n=>Ee$1(e(n),n.fieldTree))}function fr(i){return new Xt(i)}function gr(i,e){return new Yt(i,e)}function br(i,e){return new Zt(i,e)}function mr(i,e){return new Qt(i,e)}function yr(i){return new Jt(i)}var ie=class{__brand=void 0;kind=``;fieldTree;message;constructor(e){e&&Object.assign(this,e)}};var Xt=class extends ie{kind=`required`};var Yt=class extends ie{min;kind=`min`;constructor(e,t){super(t),this.min=e}};var Zt=class extends ie{max;kind=`max`;constructor(e,t){super(t),this.max=e}};var Qt=class extends ie{minLength;kind=`minLength`;constructor(e,t){super(t),this.minLength=e}};var Jt=class extends ie{kind=`email`};var lt=class extends ie{kind=`parse`};var vr=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function za(i,e){De(i,t=>{if(!(e?.when&&!e.when(t))&&!nn$1(t.value())&&!vr.test(t.value()))return e?.error?$(e.error,t):yr({message:$(e?.message,t)})})}function Ha(i,e,t){let n=A$1();V$1(i,n,r=>{if(!(t?.when&&!t.when(r)))return typeof e==`function`?e(r):e}),V$1(i,Gt,({state:r})=>r.metadata(n)()),V$1(i,$t,()=>Gt),De(i,r=>{let o=r.value();if(o===null||Number.isNaN(o))return;let a=r.state.metadata(n)();if(!(a===void 0||Number.isNaN(a))&&o>a)return t?.error?$(t.error,r):br(a,{message:$(t?.message,r)})})}function ja(i,e,t){let n=A$1();V$1(i,n,r=>{if(!(t?.when&&!t.when(r)))return typeof e==`function`?e(r):e}),V$1(i,Ut,({state:r})=>r.metadata(n)()),V$1(i,Kt,()=>Ut),De(i,r=>{let o=r.value();if(o===null||Number.isNaN(o))return;let a=r.state.metadata(n)();if(!(a===void 0||Number.isNaN(a))&&o<a)return t?.error?$(t.error,r):gr(a,{message:$(t?.message,r)})})}function Ba(i,e,t){let n=V$1(i,A$1(),r=>{if(!(t?.when&&!t.when(r)))return typeof e==`number`?e:e(r)});V$1(i,Wt,({state:r})=>r.metadata(n)()),De(i,r=>{if(nn$1(r.value()))return;let o=r.state.metadata(n)();if(o!==void 0&&hr(r.value())<o)return t?.error?$(t.error,r):mr(o,{message:$(t?.message,r)})})}function qa(i,e){let t=V$1(i,A$1(),n=>e?.when?e.when(n):!0);V$1(i,qt,({state:n})=>n.metadata(t)()),De(i,n=>{if(n.state.metadata(t)()&&nn$1(n.value()))return e?.error?$(e.error,n):fr({message:$(e?.message,n)})})}function Ka(i,e){se(i);let t=I$1.unwrapFieldPath(i),n=di((r,o)=>{if(e.debounce!==void 0){let a=u8(()=>o(),e.debounce),u=y(()=>nD(a));return e.factory(u)}return e.factory(o)});n[st]=!0,V$1(i,n,r=>{let a=r.stateOf(i).validationState;if(!(a.shouldSkipValidation()||!a.syncValid())&&!(e.when&&!e.when(r)))return e.params(r)}),t.builder.addAsyncErrorRule(r=>{let o=r.state.metadata(n),a;switch(o.status()){case`idle`:return;case`loading`:case`reloading`:return`pending`;case`resolved`:case`local`:return o.hasValue()?(a=e.onSuccess(o.value(),r),Ee$1(a,r.fieldTree)):void 0;case`error`:return a=e.onError(o.error(),r),Ee$1(a,r.fieldTree)}})}function Ua(i,e){se(i);let t=I$1.unwrapFieldPath(i),n=xr(e);t.builder.addMetadataRule(it,()=>n)}function xr(i){return typeof i==`function`?i:i===`blur`?Mr():i>0?_r(i):Cr}function _r(i){return(e,t)=>new Promise(n=>{let r,o=()=>{clearTimeout(r),n()};r=setTimeout(()=>{t.removeEventListener(`abort`,o),n()},i),t.addEventListener(`abort`,o,{once:!0})})}function Mr(){return(i,e)=>new Promise(t=>{e.addEventListener(`abort`,()=>t(),{once:!0})})}function Cr(){}function Mi(i,e,t){let n=ps({source:i,computation:()=>[],equal:R}),r=a=>{let u=t(a);n.set(yi(u.error)),u.value!==void 0&&e(u.value),n.set(yi(u.error))},o=()=>{n.set([])};return{errors:n.asReadonly(),setRawValue:r,reset:o}}function Ci(i,e){let{parse:t,format:n}=e,r=Mi(i,i.set,t),o=ps(()=>n(i())),a=o;a.parseErrors=r.errors;let u=a.set.bind(a),g=f(yP,{self:!0,optional:!0});return g&&(g.setParseErrors(r.errors),g.onReset=y=>{r.reset();let D=y!==void 0?y:i();u(n(D))}),a.set=y=>{r.setRawValue(y),u(y)},a.update=y=>{a.set(y(o()))},a}var en$1=class{field;constructor(e){this.field=e}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return bi(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new x(1910,!1)}valueAccessor=null;hasValidator(e){return e===Ir$1.required?this.field().required():!1}updateValueAndValidity(){}};var tn$1={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var Sr=(()=>{let i={};for(let e of Object.keys(tn$1))i[tn$1[e]]=e;return i})();function rn$1(i,e){return i[Sr[e]]?.()}var on=Object.values(tn$1);function dt(){return{}}function ne(i,e,t){return Object.is(i[e],t)?!1:(i[e]=t,!0)}function wr(i,e,t){let n;if(Si(i)&&t.isBadInput(i))return{error:new lt};switch(i.type){case`checkbox`:return{value:i.checked};case`number`:case`range`:case`datetime-local`:if(n=O$2(e),typeof n==`number`||n===null)return{value:i.value===``?null:i.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(n=O$2(e),n===null||n instanceof Date)return{value:i.valueAsDate};if(typeof n==`number`)return{value:i.valueAsNumber}}if(i.tagName===`INPUT`&&i.type===`text`&&(n??=O$2(e),typeof n==`number`||n===null)){if(i.value===``)return{value:null};let r=Number(i.value);return Number.isNaN(r)?{error:new lt}:{value:r}}return{value:i.value}}function vi(i,e){switch(i.type){case`checkbox`:i.checked=e;return;case`radio`:i.checked=e===i.value;return;case`number`:case`range`:case`datetime-local`:if(typeof e==`number`){xi(i,e);return}else if(e===null){i.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(e===null||e instanceof Date){i.valueAsDate=e;return}else if(typeof e==`number`){xi(i,e);return}}if(i.tagName===`INPUT`&&i.type===`text`){if(typeof e==`number`){i.value=isNaN(e)?``:String(e);return}if(e===null){i.value=``;return}}i.value=e}function xi(i,e){isNaN(e)?i.value=``:i.valueAsNumber=e}function Si(i){return i.tagName===`INPUT`}function Nr(i){return i.type===`date`||i.type===`datetime-local`||i.type===`month`||i.type===`time`||i.type===`week`}function Tr(i,e){let t=i.getUTCFullYear(),n=String(i.getUTCMonth()+1).padStart(2,`0`);if(e===`month`)return`${t}-${n}`;return`${t}-${n}-${String(i.getUTCDate()).padStart(2,`0`)}`}function wi(i,e,t){return e instanceof Date&&(i===`min`||i===`max`)&&(t===`date`||t===`month`)?Tr(e,t):e}function Or(i,e){i.listenToCustomControlModel(n=>e.state().controlValue.set(n)),i.listenToCustomControlOutput(`touch`,()=>e.state().markAsTouched()),e.registerAsBinding(i.customControl);let t=dt();return()=>{let n=e.state(),r=n.controlValue();ne(t,`controlValue`,r)&&i.setCustomControlModelInput(r);for(let o of on){let a;if(o===`errors`?a=e.errors():a=rn$1(n,o),ne(t,o,a)&&(i.setInputOnDirectives(o,a),e.elementAcceptsNativeProperty(o)&&!i.customControlHasInput(o))){let u=wi(o,a,e.nativeFormElement.type);mP(e.renderer,e.nativeFormElement,o,u)}}}}function kr(i){return typeof i==`object`&&i!==null}function Er(i,e){let t=dt();e.controlValueAccessor.registerOnChange(r=>{t.controlValue=r,e.state().controlValue.set(r)}),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched());let n=e.injector.get(Ps,null,{optional:!0,self:!0});if(n){let r;for(let g of n)kr(g)&&g.registerOnValidatorChange&&(r??=_$1(0),g.registerOnValidatorChange(()=>{r.update(y=>y+1)}));let o=n.map(g=>typeof g==`function`?g:g.validate.bind(g)),a=Ir$1.compose(o),u=y(()=>{r?.();return mi(a?a(e.interopNgControl.control):null,e.interopNgControl.control)});e.parseErrorsSource.set(u)}return e.registerAsBinding({reset:()=>{let r=e.state().value();t.controlValue=r,O$2(()=>e.controlValueAccessor.writeValue(r))}}),()=>{let r=e.state(),o=r.controlValue();ne(t,`controlValue`,o)&&O$2(()=>e.controlValueAccessor.writeValue(o));for(let a of on){let u=rn$1(r,a);if(ne(t,a,u)){let g=i.setInputOnDirectives(a,u,a===`name`?Dr:void 0);a===`disabled`&&e.controlValueAccessor.setDisabledState?O$2(()=>e.controlValueAccessor.setDisabledState(u)):!g&&e.elementAcceptsNativeProperty(a)&&mP(e.renderer,e.nativeFormElement,a,u)}}}}function Dr(i){return i==null}function Pr(i,e,t){if(typeof MutationObserver!=`function`)return;let n=new MutationObserver(r=>{r.some(o=>Rr(o))&&e()});n.observe(i,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>n.disconnect())}function Rr(i){if(i.type===`childList`||i.type===`characterData`){if(i.target instanceof Comment)return!1;for(let e of i.addedNodes)if(!(e instanceof Comment))return!0;for(let e of i.removedNodes)if(!(e instanceof Comment))return!0;return!1}return i.type===`attributes`&&i.target instanceof HTMLOptionElement}function Ir(i,e,t,n){let r=!1,o=e.nativeFormElement,a=Mi(()=>e.state().value(),j=>e.state().controlValue.set(j),j=>wr(o,e.state().value,n));t.set(a.errors),e.onReset=()=>{a.reset();let j=e.state().value();D.controlValue=j,vi(o,j)};let u=i.nativeElement,g=()=>a.setRawValue(void 0);u.addEventListener(`input`,g);let y=()=>e.state().markAsTouched();u.addEventListener(`blur`,y),e.destroyRef.onDestroy(()=>{u.removeEventListener(`input`,g),u.removeEventListener(`blur`,y)}),Si(o)&&Nr(o)&&n.watchValidity(e.destroyRef,o,()=>a.setRawValue(void 0)),e.registerAsBinding(),o.tagName===`SELECT`&&Pr(o,()=>{r&&(o.value=e.state().controlValue())},e.destroyRef);let D=dt();return()=>{let j=e.state();for(let le of on){let ht=rn$1(j,le);if(ne(D,le,ht)&&(i.setInputOnDirectives(le,ht),e.elementAcceptsNativeProperty(le))){let Ri=wi(le,ht,o.type);mP(e.renderer,o,le,Ri)}}let Pe=j.controlValue(),Di=ne(D,`controlValue`,Pe),Pi=o.type===`radio`&&ne(D,`radioValue`,o.value);(Di||Pi)&&vi(o,Pe),r=!0}}var Ni=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵprov=T({token:i,factory:t=>Ar.ɵfac(t),providedIn:`root`})}return i})();var Ar=(()=>{class i extends Ni{document=f(z$1);cspNonce=f(Yo,{optional:!0});injectedStyles=new WeakMap;watchValidity(t,n,r){let o=n.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let a=u=>{let g=u;(g.animationName===`ng-valid`||g.animationName===`ng-invalid`)&&r()};n.addEventListener(`animationstart`,a),t.onDestroy(()=>{n.removeEventListener(`animationstart`,a)})}isBadInput(t){return t.validity?.badInput??!1}createTransitionStyle(t){let n=this.document.createElement(`style`);return this.cspNonce&&(n.nonce=this.cspNonce),n.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,t.nodeType===9?t.head?.appendChild(n):t.appendChild(n),n}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let t;return function(r){return(t||(t=Dn$2(i)))(r||i)}})();static ɵprov=T({token:i,factory:i.ɵfac})}return i})();var Lr=Symbol();var _i=new E(``);var $a=(()=>{class i{field=g.required({alias:`formField`});state=y(()=>this.field()());renderer=f(Ct);destroyRef=f(K$1);injector=f(ne$1);element=f(U$2).nativeElement;elementIsNativeFormElement=pP(this.element);elementAcceptsTextualValues=T9(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=f(Al,{optional:!0,self:!0});config=f(pr,{optional:!0});validityMonitor=f(Ni);parseErrorsSource=_$1(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new en$1(this.state)}parseErrors=y(()=>this.parseErrorsSource()?.().map(t=>s(r({},t),{fieldTree:O$2(this.state).fieldTree,formField:this}))??[],{equal:R});errors=y(()=>this.state().errors().filter(t=>!t.formField||t.formField===this),{equal:R});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(t){this.parseErrorsSource.set(t)}set onReset(t){this.parseErrorsResetCallback=t}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:SP(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,y(()=>o(this))]);if(t.length===0)return;let n=dt();ms({write:()=>{if(!this.state().structure.isOrphaned())for(let[r,o]of t){let a=o();ne(n,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(t){this.focuser(t)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(t){if(this.isFieldBinding)throw new x(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t?.focus&&(this.focuser=n=>t.focus(n)),t?.reset&&(this.resetter=()=>t.reset()),Ee$2(n=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),n(()=>{let o=r.nodeState.formFieldBindings().filter(a=>a!==this);r.nodeState.formFieldBindings.set(o),o.length===0&&!r.structure.isOrphaned()&&r.flushSync()})},{injector:this.injector})}[Lr];ɵngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=Er(t,this);else if(t.customControl)this.ɵngControlUpdate=Or(t,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=Ir(t,this,this.parseErrorsSource,this.validityMonitor);else throw new x(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case`min`:case`max`:return this._elementAcceptsMinMax??=I9(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(n){return new(n||i)};static ɵdir=R$1({type:i,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[Ht$1([{provide:_i,useExisting:i},{provide:Ut$1,useFactory:()=>f(i).interopNgControl},{provide:yP,useFactory:()=>f(_i,{self:!0})}]),za$1(`formField`)]})}return i})();var Ga=(()=>{class i{fieldTree=g.required({alias:`formRoot`});onSubmit(t){t.preventDefault(),O$2(()=>{let n=this.fieldTree();n().structure.fieldManager.submitOptions&&gi(n)})}static ɵfac=function(n){return new(n||i)};static ɵdir=R$1({type:i,selectors:[[`form`,`formRoot`,``]],hostAttrs:[`novalidate`,``],hostBindings:function(n,r){n&1&&be$1(`submit`,function(a){return r.onSubmit(a)})},inputs:{fieldTree:[1,`formRoot`,`fieldTree`]}})}return i})();function an$1(i){if(i===void 0||i===``)return;let e=Number(i);return Number.isFinite(e)?e:void 0}var Fr=[[[``,`bxPrefix`,``]],[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var Vr=[`[bxPrefix]`,`[bxSuffix]`,`bx-error`,`bx-hint`];var zr=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Hr=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function jr(i,e){i&1&&(W(0,`span`,9),je(1,`*`),Q$1())}function Br(i,e){if(i&1&&(W(0,`label`,3)(1,`span`,8),je(2),Q$1(),pe(3,jr,2,0,`span`,9),Q$1()),i&2){let t=de();ve(`for`,t.controlId()),M$1(2),tt$2(t.resolvedLabel()),M$1(),me$1(t.effectiveRequired()&&!t.resolvedHideRequiredMarker()?3:-1)}}function qr(i,e){if(i&1){let t=fs();W(0,`textarea`,10),be$1(`input`,function(r){jr$1(t);let o=de();return Hr$1(o.onInput(r))})(`focus`,function(){jr$1(t);let r=de();return Hr$1(r.onFocus())})(`blur`,function(){jr$1(t);let r=de();return Hr$1(r.onBlur())})(`compositionstart`,function(){jr$1(t);let r=de();return Hr$1(r.onCompositionStart())})(`compositionend`,function(r){jr$1(t);let o=de();return Hr$1(o.onCompositionEnd(r))})(`cdkAutofill`,function(r){jr$1(t);let o=de();return Hr$1(o.autofilled.set(r.isAutofilled))}),Q$1()}if(i&2){let t=de();fe(`required`,t.effectiveRequired())(`disabled`,t.disabled())(`readOnly`,t.isReadonly())(`value`,t.displayedValue())(`spellcheck`,t.spellcheck())(`rows`,t.rows())(`cdkTextareaAutosize`,t.autosize())(`cdkAutosizeMinRows`,t.minRows())(`cdkAutosizeMaxRows`,t.maxRows()),ve(`id`,t.controlId())(`name`,t.name()||null)(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-busy`,t.pending()||t.loading())(`autocomplete`,t.autocomplete())(`inputmode`,t.inputmode())(`minlength`,t.minLength())(`maxlength`,t.maxLength())(`placeholder`,t.isFloating()||!t.label()?t.resolvedPlaceholder():``)}}function Kr(i,e){if(i&1){let t=fs();W(0,`input`,11),be$1(`input`,function(r){jr$1(t);let o=de();return Hr$1(o.onInput(r))})(`focus`,function(){jr$1(t);let r=de();return Hr$1(r.onFocus())})(`blur`,function(){jr$1(t);let r=de();return Hr$1(r.onBlur())})(`compositionstart`,function(){jr$1(t);let r=de();return Hr$1(r.onCompositionStart())})(`compositionend`,function(r){jr$1(t);let o=de();return Hr$1(o.onCompositionEnd(r))})(`cdkAutofill`,function(r){jr$1(t);let o=de();return Hr$1(o.autofilled.set(r.isAutofilled))}),Q$1()}if(i&2){let t=de();fe(`required`,t.effectiveRequired())(`disabled`,t.disabled())(`readOnly`,t.isReadonly())(`value`,t.displayedValue())(`spellcheck`,t.spellcheck())(`type`,t.type()),ve(`id`,t.controlId())(`name`,t.name()||null)(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-busy`,t.pending()||t.loading())(`autocomplete`,t.autocomplete())(`inputmode`,t.inputmode())(`minlength`,t.minLength())(`maxlength`,t.maxLength())(`placeholder`,t.isFloating()||!t.label()?t.resolvedPlaceholder():``)(`min`,t.min())(`max`,t.max())(`step`,t.step())(`pattern`,t.pattern()[0]?.source)}}function Ur(i,e){if(i&1){let t=fs();W(0,`div`,7)(1,`button`,12),be$1(`pointerdown`,function(r){jr$1(t);let o=de();return Hr$1(o.startSpin(-1,r))})(`pointerup`,function(){jr$1(t);let r=de();return Hr$1(r.stopSpin())})(`pointercancel`,function(){jr$1(t);let r=de();return Hr$1(r.stopSpin())})(`pointerleave`,function(){jr$1(t);let r=de();return Hr$1(r.stopSpin())})(`click`,function(r){jr$1(t);let o=de();return r.detail===0&&o.startSpin(-1,r),Hr$1(o.stopSpin())}),Le(2,`bx-icon`,13),Q$1(),W(3,`button`,12),be$1(`pointerdown`,function(r){jr$1(t);let o=de();return Hr$1(o.startSpin(1,r))})(`pointerup`,function(){jr$1(t);let r=de();return Hr$1(r.stopSpin())})(`pointercancel`,function(){jr$1(t);let r=de();return Hr$1(r.stopSpin())})(`pointerleave`,function(){jr$1(t);let r=de();return Hr$1(r.stopSpin())})(`click`,function(r){jr$1(t);let o=de();return r.detail===0&&o.startSpin(1,r),Hr$1(o.stopSpin())}),Le(4,`bx-icon`,14),Q$1()()}if(i&2){let t=de();M$1(),fe(`disabled`,t.isSpinDownDisabled()),ve(`aria-label`,t.resolvedDecreaseLabel()),M$1(2),fe(`disabled`,t.isSpinUpDisabled()),ve(`aria-label`,t.resolvedIncreaseLabel())}}var Ti=class i extends Nf{i18n=f(ze,{optional:!0});editingRaw=_$1(void 0);badInput=_$1(!1);labelText=Xu(rr$1);labelTruncated=y(()=>this.labelText()?.truncated()??!1);isFocused=_$1(!1);autofilled=_$1(!1);rawValue=Ci(this.value,{parse:e=>{if(this.type()!==`number`)return{value:e};let t=e===``?null:Number(e);return this.badInput()||t!==null&&!Number.isFinite(t)?{error:{kind:`parse`}}:{value:t}},format:e=>e?.toString()??``});displayedValue=y(()=>this.editingRaw()??this.rawValue());isSpinDownDisabled=y(()=>this.disabled()||this.isReadonly()||Number(this.value()??0)<=(this.min()??-1/0));isSpinUpDisabled=y(()=>this.disabled()||this.isReadonly()||Number(this.value()??0)>=(this.max()??1/0));isFloating=y(()=>this.resolvedFloatLabel()===`always`||this.isFocused()||this.autofilled()||!!this.displayedValue()||this.multiline()||[`date`,`time`,`datetime-local`].includes(this.type()));resolvedDecreaseLabel=y(()=>Me$2(this.decreaseLabel(),this.i18n));resolvedIncreaseLabel=y(()=>Me$2(this.increaseLabel(),this.i18n));type=g(`text`);min=g(void 0,{transform:an$1});max=g(void 0,{transform:an$1});minLength=g(void 0);maxLength=g(void 0);pattern=g([]);step=g(1);autocomplete=g(void 0);inputmode=g(void 0);spellcheck=g(!0);multiline=g(!1);rows=g(3);autosize=g(!0);minRows=g(2);maxRows=g(8);decreaseLabel=g(`Decrease value`);increaseLabel=g(`Increase value`);composing=!1;spinTimeout;spinInterval;constructor(){super(),f(K$1).onDestroy(()=>this.stopSpin())}reset(){super.reset(),this.editingRaw.set(void 0),this.badInput.set(!1),this.stopSpin()}startSpin(e,t){t.preventDefault(),!(this.disabled()||this.isReadonly())&&(this.applyStep(e),this.spinTimeout=setTimeout(()=>{this.spinInterval=setInterval(()=>this.applyStep(e),80)},400))}stopSpin(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)}clearPendingEdit(){super.clearPendingEdit(),this.editingRaw.set(void 0),this.badInput.set(!1)}onInput(e){if(this.composing||this.disabled()||this.isReadonly())return;let t=e.target;this.badInput.set(t.validity.badInput);let n=this.ngControl?.control?.updateOn;n===`blur`||n===`submit`?this.editingRaw.set(t.value):this.rawValue.set(t.value)}onCompositionStart(){this.composing=!0}onCompositionEnd(e){this.composing=!1,this.onInput(e)}onFocus(){this.isFocused.set(!0)}onBlur(){this.isFocused.set(!1),this.stopSpin(),this.markAsTouched()}commitPendingValue(e){let t=this.editingRaw();t===void 0||e===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.rawValue.set(t),this.editingRaw.set(void 0))}applyStep(e){let t=Number(this.displayedValue())||0,n=this.step()===`any`?1:Number(this.step()),r=Math.min(this.max()??1/0,Math.max(this.min()??-1/0,Number((t+e*n).toPrecision(12))));this.disabled()||this.isReadonly()||(this.badInput.set(!1),this.rawValue.set(String(r)))}static ɵfac=function(t){return new(t||i)};static ɵcmp=le({type:i,selectors:[[`bx-input-field`]],viewQuery:function(t,n){t&1&&Yr(n.labelText,rr$1,5),t&2&&Qt$1()},inputs:{type:[1,`type`],min:[1,`min`],max:[1,`max`],minLength:[1,`minLength`],maxLength:[1,`maxLength`],pattern:[1,`pattern`],step:[1,`step`],autocomplete:[1,`autocomplete`],inputmode:[1,`inputmode`],spellcheck:[1,`spellcheck`],multiline:[1,`multiline`],rows:[1,`rows`],autosize:[1,`autosize`],minRows:[1,`minRows`],maxRows:[1,`maxRows`],decreaseLabel:[1,`decreaseLabel`],increaseLabel:[1,`increaseLabel`]},features:[Je$2],ngContentSelectors:Vr,decls:13,vars:30,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[`bxSurface`,``,1,`bx-input-wrapper`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-input-container`,3,`bxTooltip`],[1,`bx-floating-label`],[`cdkAutofill`,``,1,`bx-native-input`,3,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`rows`,`cdkTextareaAutosize`,`cdkAutosizeMinRows`,`cdkAutosizeMaxRows`],[`cdkAutofill`,``,1,`bx-native-input`,3,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`type`],[1,`bx-input-actions`],[1,`bx-spinners-group`],[`bxTruncate`,``,1,`bx-input-label-text`],[`aria-hidden`,`true`,1,`bx-field-required`],[`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`blur`,`compositionstart`,`compositionend`,`cdkAutofill`,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`rows`,`cdkTextareaAutosize`,`cdkAutosizeMinRows`,`cdkAutosizeMaxRows`],[`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`blur`,`compositionstart`,`compositionend`,`cdkAutofill`,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`type`],[`type`,`button`,1,`bx-spin-btn`,3,`pointerdown`,`pointerup`,`pointercancel`,`pointerleave`,`click`,`disabled`],[`name`,`minus`,`size`,`16`],[`name`,`plus`,`size`,`16`]],template:function(t,n){t&1&&(Ze$2(Fr),W(0,`bx-form-field`,0)(1,`div`,1),Re(2),W(3,`div`,2),Ka$1(4,`bxTruncatedText`),pe(5,Br,4,3,`label`,3),pe(6,qr,1,22,`textarea`,4)(7,Kr,1,23,`input`,5),Q$1(),W(8,`div`,6),Re(9,1),pe(10,Ur,5,4,`div`,7),Q$1()(),Re(11,2,zr),Re(12,3,Hr),Q$1()),t&2&&(fe(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`loading`,n.loading())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),M$1(),re(`is-invalid`,n.showError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`has-spinners`,n.type()===`number`&&!n.multiline())(`is-floating`,n.isFloating()),M$1(2),fe(`bxTooltip`,Za(4,26,n.resolvedLabel(),n.labelTruncated(),n.resolvedTooltipOnTruncate())),M$1(2),me$1(n.label()?5:-1),M$1(),me$1(n.multiline()?6:7),M$1(4),me$1(n.type()===`number`&&!n.multiline()?10:-1))},dependencies:[mn$2,Mf,Dt$1,ei,ti,nr$1,rr$1,Hs],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
  min-inline-size: 0;
}
.bx-input-wrapper[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  flex: 1;
  min-inline-size: 0;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--%NS%bx-bg-neutral);
  border-radius: 0.25rem 0.25rem 0 0;
  border-bottom: 1px solid var(--%NS%bx-border-strong);
}
.bx-input-wrapper[_ngcontent-%COMP%]:hover:not(.is-disabled, .is-readonly) {
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
.bx-input-wrapper[_ngcontent-%COMP%]:focus-within:not(.is-disabled, .is-readonly)::after {
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
  min-inline-size: 0;
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
.bx-native-input[readonly][_ngcontent-%COMP%]:not(:disabled) {
  cursor: default;
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
  inset-inline: 0.75rem;
  display: flex;
  align-items: baseline;
  min-inline-size: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  color: var(--%NS%bx-text-secondary);
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
.bx-input-wrapper.is-floating[_ngcontent-%COMP%]:focus-within:not(.is-readonly)   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-primary);
}
.bx-input-wrapper.is-invalid[_ngcontent-%COMP%]   .bx-floating-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
.bx-field-required[_ngcontent-%COMP%] {
  flex: none;
  color: var(--%NS%bx-text-secondary);
  margin-inline-start: 0.125rem;
}
.bx-input-actions[_ngcontent-%COMP%] {
  display: flex;
  flex: 0 0 auto;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  margin-inline-start: auto;
  border-radius: inherit;
}
.bx-input-actions[_ngcontent-%COMP%]:empty {
  display: none;
}
.bx-spinners-group[_ngcontent-%COMP%] {
  display: flex;
  flex: 0 0 auto;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  z-index: 1;
}
.bx-spin-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  flex: 0 0 2.25rem;
  align-self: stretch;
  background: transparent;
  border: none;
  border-inline-start: 1px solid var(--%NS%bx-border-subtle);
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
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:focus-within:not(.is-disabled, :disabled, .is-readonly, [readonly], [aria-readonly=true], :has([readonly], [aria-readonly=true])), 
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:focus-visible:not(:disabled, [readonly], [aria-readonly=true]), 
.bx-input-wrapper[data-bx-surface].is-open[_ngcontent-%COMP%]:not(:disabled), 
.bx-input-wrapper[data-bx-surface].is-readonly.is-keyboard-focused[_ngcontent-%COMP%]:focus-within, 
.bx-input-wrapper[data-bx-surface][_ngcontent-%COMP%]:has(.bx-readonly.is-keyboard-focused):focus-within {
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
}
textarea.bx-native-input[_ngcontent-%COMP%] {
  height: auto;
  min-block-size: 5rem;
  resize: vertical;
}
.bx-spin-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
}
.bx-input-wrapper.is-readonly[_ngcontent-%COMP%]:not(.is-disabled)   .bx-spin-btn[_ngcontent-%COMP%]:disabled {
  cursor: default;
}
.bx-native-input[_ngcontent-%COMP%]:-webkit-autofill    + .bx-floating-label[_ngcontent-%COMP%] {
  top: 0.5rem;
}
.bx-input-wrapper.is-outline[_ngcontent-%COMP%] {
  border: 1px solid var(--%NS%bx-border-strong);
  border-radius: var(--%NS%bx-field-radius, 0.5rem);
}
.bx-input-wrapper.is-outline.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
}`]})};function $r(i,e){if(i&1&&(W(0,`span`,1),je(1),Q$1()),i&2){let t=de();M$1(),tt$2(t.errorText())}}function Gr(i,e){if(i&1&&zu(0,2),i&2){let t=de();fe(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,t.context())}}function Wr(i,e){i&1&&Le(0,`bx-icon`,5)}function Xr(i,e){if(i&1){let t=fs();W(0,`button`,4),be$1(`click`,function(){jr$1(t);let r=de();return Hr$1(r.request.emit())}),pe(1,Wr,1,0,`bx-icon`,5),je(2),Q$1()}if(i&2){let t=de();Ya(t.config().buttonClass??``),fe(`variant`,t.config().variant??`text`)(`color`,t.config().color??`primary`)(`outlined`,t.config().outlined??!1)(`disabled`,t.disabled())(`loading`,t.loading()),ve(`aria-label`,t.accessibleLabel()),M$1(),me$1(t.retry()?1:-1),M$1(),tt$2(t.text())}}var ct=class i{i18n=f(ze,{optional:!0});text=y(()=>{let e=this.config(),t=Me$2(e.text??`Load more`,this.i18n),n=e.retryText,r=Me$2(n,this.i18n),o=!!n&&(!tr$1(n)||r!==n.key);return this.loading()?Me$2(e.loadingText??`Loading`,this.i18n):this.retry()&&o?r:t});accessibleLabel=y(()=>Me$2(this.config().ariaLabel,this.i18n)||this.text());errorText=y(()=>Me$2(this.error(),this.i18n));context=y(()=>({$implicit:this.text(),loading:this.loading(),disabled:this.disabled()||this.loading(),request:()=>this.request.emit()}));retry=g(!1);visible=g(!1);loading=g(!1);disabled=g(!1);error=g(void 0);config=g({});buttonTemplate=g(void 0);request=un$2();static ɵfac=function(t){return new(t||i)};static ɵcmp=le({type:i,selectors:[[`bx-load-more-footer`]],hostVars:2,hostBindings:function(t,n){t&2&&(hs(`hidden`,!n.visible()),ve(`aria-busy`,n.loading()?`true`:null))},inputs:{retry:[1,`retry`],visible:[1,`visible`],loading:[1,`loading`],disabled:[1,`disabled`],error:[1,`error`],config:[1,`config`],buttonTemplate:[1,`buttonTemplate`]},outputs:{request:`request`},decls:4,vars:4,consts:[[1,`bx-load-more-footer`],[`role`,`status`,1,`bx-load-more-error`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`bx-button`,``,`type`,`button`,3,`variant`,`color`,`outlined`,`class`,`disabled`,`loading`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`,`color`,`outlined`,`disabled`,`loading`],[`name`,`rotate-cw`,`size`,`16`]],template:function(t,n){if(t&1&&(W(0,`div`,0),pe(1,$r,2,1,`span`,1),pe(2,Gr,1,2,`ng-container`,2)(3,Xr,3,10,`button`,3),Q$1()),t&2){let r;Ya(n.config().footerClass??``),M$1(),me$1(n.errorText()?1:-1),M$1(),me$1((r=n.buttonTemplate())?2:3,r)}},dependencies:[xf,bg,Dt$1],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  box-sizing: border-box;
}
[hidden][_nghost-%COMP%] {
  display: none;
}
.bx-load-more-footer[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  gap: 0.5rem;
  padding: var(--%NS%bx-load-more-padding, 0.5rem 0);
}
.bx-load-more-error[_ngcontent-%COMP%] {
  flex-basis: 100%;
  color: var(--%NS%bx-text-danger);
  font-size: 0.875rem;
  overflow-wrap: anywhere;
}`]})};var ut=class i{host=f(U$2).nativeElement;views=f(ht$1);zone=f(j$1);destroy=f(K$1);overflowing=_$1(!1);requested=_$1(!1);retrying=_$1(!1);keepVisible=_$1(!1);loadMoreHasMore=g(!1);loadMoreLoading=g(!1);loadMoreSuppressed=g(!1);loadMoreDisabled=g(!1);loadMoreError=g(void 0);loadMoreConfig=g({});loadMoreTemplate=g(void 0);loadMoreRevision=g(void 0);loadMore=un$2();actionVisible=y(()=>!this.loadMoreSuppressed()&&(this.loadMoreHasMore()||!!this.loadMoreError()||this.keepVisible()&&this.loadMoreLoading())&&(this.loadMoreConfig().buttonMode===`always`||!this.overflowing()||this.keepVisible()||!!this.loadMoreError()));footer;wasLoading=!1;previousRevision;constructor(){Qe$2(()=>this.mount()),ms(()=>{let e=this.loadMoreLoading(),t=this.loadMoreRevision();(this.wasLoading&&!e||!e&&this.previousRevision!==t)&&this.complete(),this.wasLoading=e,this.previousRevision=t,this.updateFooter()})}complete(){this.requested.set(!1),this.retrying.set(!1),this.keepVisible.set(!1)}request(e=`button`){this.loadMoreSuppressed()||!this.loadMoreHasMore()&&!this.loadMoreError()||this.loadMoreDisabled()||this.loadMoreLoading()||this.requested()||e===`scroll`&&this.loadMoreError()||(this.requested.set(!0),this.retrying.set(!!this.loadMoreError()),this.keepVisible.set(e!==`scroll`),this.loadMore.emit({source:this.loadMoreError()?`retry`:e}))}mount(){this.footer=this.views.createComponent(ct),this.host.append(this.footer.location.nativeElement),this.footer.instance.request.subscribe(()=>this.request());let e=()=>this.measure(),t=()=>{let n=this.footer?.location.nativeElement?.offsetHeight??0,r=this.host.scrollHeight-n;this.host.scrollTop+this.host.clientHeight>=r-(this.loadMoreConfig().threshold??32)&&this.zone.run(()=>this.request(`scroll`))};this.zone.runOutsideAngular(()=>{let n=new ResizeObserver(e),r=()=>{for(let a of Array.from(this.host.children))a!==this.footer?.location.nativeElement&&n.observe(a);this.measure()},o=new MutationObserver(r);n.observe(this.host),r(),o.observe(this.host,{childList:!0,subtree:!0,characterData:!0}),this.host.addEventListener(`scroll`,t,{passive:!0}),this.host.ownerDocument.defaultView?.addEventListener(`resize`,e),this.host.ownerDocument.defaultView?.visualViewport?.addEventListener(`resize`,e),this.destroy.onDestroy(()=>{n.disconnect(),o.disconnect(),this.host.removeEventListener(`scroll`,t),this.host.ownerDocument.defaultView?.removeEventListener(`resize`,e),this.host.ownerDocument.defaultView?.visualViewport?.removeEventListener(`resize`,e),this.footer?.destroy()})}),this.measure(),this.updateFooter()}measure(){let e=this.footer?.location.nativeElement?.offsetHeight??0,t=this.host.scrollHeight-e>this.host.clientHeight+1;t!==this.overflowing()&&this.zone.run(()=>this.overflowing.set(t))}updateFooter(){if(!this.footer)return;let e=this.actionVisible(),t=this.footer.location.nativeElement;!e&&t.contains(this.host.ownerDocument.activeElement)&&(this.host.hasAttribute(`tabindex`)||this.host.setAttribute(`tabindex`,`-1`),this.host.focus({preventScroll:!0})),this.footer.setInput(`visible`,e),this.footer.setInput(`loading`,this.loadMoreLoading()),this.footer.setInput(`disabled`,this.loadMoreDisabled()||this.requested()&&!this.loadMoreLoading()),this.footer.setInput(`retry`,!!this.loadMoreError()||this.retrying()),this.footer.setInput(`error`,this.loadMoreError()),this.footer.setInput(`config`,this.loadMoreConfig()),this.footer.setInput(`buttonTemplate`,this.loadMoreTemplate())}static ɵfac=function(t){return new(t||i)};static ɵdir=R$1({type:i,selectors:[[``,`bxLoadMore`,``]],inputs:{loadMoreHasMore:[1,`loadMoreHasMore`],loadMoreLoading:[1,`loadMoreLoading`],loadMoreSuppressed:[1,`loadMoreSuppressed`],loadMoreDisabled:[1,`loadMoreDisabled`],loadMoreError:[1,`loadMoreError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],loadMoreRevision:[1,`loadMoreRevision`]},outputs:{loadMore:`loadMore`},exportAs:[`bxLoadMore`]})};function Oi(i){let e=Number(i);return Number.isFinite(e)?Math.max(1,Math.floor(e)):1}var Zr=[`valueOverflow`];var Qr=[`labelOverflow`];var Jr=[`searchInput`];var eo=[`origin`];var pt=class i extends Nf{a11y=f(xe$1);zone=f(j$1);overlay=f(pn$2);overlayContext=f(hi$1,{optional:!0});i18n=f(ze,{optional:!0});debouncing=_$1(!1);searchRequest=_$1(!1);knownOptions=_$1([]);hasSelection=y(()=>this.internalValue()!==null&&this.internalValue()!==void 0);showClear=y(()=>this.clearable()&&this.hasSelection()&&!this.isReadonly());resolvedClearLabel=y(()=>Me$2(this.clearLabel(),this.i18n));resolvedClearTooltip=y(()=>Me$2(this.clearTooltip()??this.clearLabel(),this.i18n));panelScrollStrategy=this.overlay.scrollStrategies.noop();isPanelAttached=_$1(!1);searchTerm=y(()=>this.searchValue());valueOverflow=Xu(`valueOverflow`);labelOverflow=Xu(`labelOverflow`);truncatedSelectionTooltip=y(()=>!this.resolvedTooltipOnTruncate()||this.isOpen()?``:Df(this.selectedOptionLabel()||this.resolvedPlaceholder(),this.valueOverflow()?.truncated()??!1)||Df(this.resolvedLabel(),this.labelOverflow()?.truncated()??!1));overlayPositions=[new Jn$3({originX:`start`,originY:`bottom`},{overlayX:`start`,overlayY:`top`},0,4),new Jn$3({originX:`start`,originY:`top`},{overlayX:`start`,overlayY:`bottom`},0,-4)];resolvedOptions=y(()=>this.options().map(e=>s(r({},e),{resolvedStr:Me$2(e.label,this.i18n),resolvedGroup:Me$2(e.group,this.i18n)})));filteredOptions=y(()=>{let e=this.searchTerm().trim().toLocaleLowerCase();return this.externalFiltering()||!e?this.resolvedOptions():this.resolvedOptions().filter(t=>t.resolvedStr.toLocaleLowerCase().includes(e))});selectedOptions=y(()=>this.knownOptions().filter(e=>this.isSelected(e.value)));selectedOptionLabel=y(()=>this.selectedOptions().map(e=>Me$2(e.label,this.i18n)).join(`, `));isFloating=y(()=>this.isOpen()||this.value()!==null&&(!Array.isArray(this.value())||this.value().length>0)||this.resolvedFloatLabel()===`always`);resolvedSearchPlaceholder=y(()=>Me$2(this.searchPlaceholder(),this.i18n));resolvedEmptyMessage=y(()=>Me$2(this.emptyMessage(),this.i18n));triggerContext=y(()=>({$implicit:this.value(),labels:this.selectedOptions().map(e=>Me$2(e.label,this.i18n))}));visibleTags=y(()=>this.selectedOptions().slice(0,this.visibleTagCount()));overflowTagLabel=y(()=>{let e=Math.max(0,this.selectedOptions().length-this.visibleTagCount());return Me$2(this.tagOverflowText(),this.i18n,{count:e}).replaceAll(`{count}`,String(e))});overflowTagTooltip=y(()=>this.selectedOptions().slice(this.visibleTagCount()).map(e=>Me$2(e.label,this.i18n)).join(`, `));resolvedLoadingAriaLabel=y(()=>Me$2(this.loadingAriaLabel(),this.i18n));resolvedLoadingLabel=y(()=>Me$2(this.loadingLabel(),this.i18n));clearable=g(!0);clearLabel=g(`Clear selection`);clearTooltip=g(void 0);selectionDisplay=g(`text`);tagConfig=g({});overflowTagConfig=g({});visibleTagCount=g(1,{transform:Oi});tagOverflowText=g(`+{count}`);options=g.required();compareWith=g(Object.is);isSearchable=g(!1);externalFiltering=g(!1);searchValue=Zu(``);searchDebounce=g(300);searchPlaceholder=g(`Search...`);emptyMessage=g(`No results found.`);loadingLabel=g(void 0);loadingAriaLabel=g(`Loading`);isSearching=y(()=>this.debouncing()||this.searchRequest());hasMore=g(!1);loadError=g(void 0);loadMoreConfig=g({});loadMoreTemplate=g(void 0);panelClass=g(``);optionTemplate=g(void 0);triggerTemplate=g(void 0);isOpen=_$1(!1);search=un$2();loadMore=un$2();openedChange=un$2();transition;disconnectTheme;disconnectLighting;disconnectOrigin;transitionRevision=0;focusOnOpen=null;searchTimeout;typeaheadTimeout;typeaheadText=``;connectedOverlay;searchInputRef;originRef;constructor(){super(),Ee$2(()=>{this.searchRequest()&&!this.loading()&&!this.debouncing()&&this.searchRequest.set(!1)}),Ee$2(()=>{let e=this.resolvedOptions(),t=O$2(this.knownOptions).filter(n=>this.isSelected(n.value)&&!e.some(r=>this.compareWith()(r.value,n.value)));this.knownOptions.set([...t,...e])}),Ee$2(()=>{(this.disabled()||this.isReadonly())&&this.isOpen()&&this.close()}),f(K$1).onDestroy(()=>{clearTimeout(this.searchTimeout),clearTimeout(this.typeaheadTimeout)})}ngOnDestroy(){++this.transitionRevision,this.onPanelDetach()}toggleOpen(){this.disabled()||this.isReadonly()||(this.isOpen()?this.close():this.open())}open(){if(this.disabled()||this.isReadonly()||this.isOpen())return;++this.transitionRevision,this.isOpen.set(!0),this.openedChange.emit(!0),this.isPanelAttached.set(!0);let e=this.connectedOverlay?.overlayRef?.overlayElement;e&&(e.inert=!1);let t=this.transition;t&&this.zone.runOutsideAngular(()=>t.enter()),this.connectedOverlay?.overlayRef?.hasAttached()&&this.isSearchable()&&queueMicrotask(()=>this.searchInputRef?.focus())}close(){let e=this.isOpen();this.isOpen.set(!1),e&&(this.openedChange.emit(!1),this.markAsTouched());let t=++this.transitionRevision,n=this.connectedOverlay?.overlayRef?.overlayElement;n?.contains(n.ownerDocument.activeElement)&&this.originRef?.nativeElement.focus({preventScroll:!0}),n&&(n.inert=!0);let r=this.transition;r&&!this.a11y.isReducedMotion()?this.zone.runOutsideAngular(()=>r.exit()).then(()=>{t===this.transitionRevision&&!this.isOpen()&&this.isPanelAttached.set(!1)}).catch(()=>{t===this.transitionRevision&&this.isPanelAttached.set(!1)}):this.isPanelAttached.set(!1)}onPanelAttach(){let e=this.transitionRevision,t=this.originRef?.nativeElement,n=this.connectedOverlay?.overlayRef;t&&n?.hasAttached()&&(this.disconnectLighting?.(),this.disconnectLighting=uo$1(n.overlayElement,t),this.disconnectOrigin?.(),this.disconnectOrigin=this.zone.runOutsideAngular(()=>bf(n,t))),queueMicrotask(()=>{let r=this.connectedOverlay?.overlayRef,o=this.originRef?.nativeElement;if(!(!r?.hasAttached()||!o||!this.isOpen()||e!==this.transitionRevision)){if(this.disconnectTheme?.(),this.disconnectTheme=this.zone.runOutsideAngular(()=>fi$1(o,r.overlayElement)),r.updatePosition(),!this.a11y.isReducedMotion()){this.transition?.destroy(),this.transition=this.zone.runOutsideAngular(()=>fo$1(o,r.overlayElement));let a=this.transition;this.zone.runOutsideAngular(()=>a.enter()).catch(()=>{e===this.transitionRevision&&(this.transition?.destroy(),this.transition=void 0)})}if(this.isSearchable())this.searchInputRef?.focus();else{let a=this.panelItems();(a.find(u=>u.getAttribute(`aria-selected`)===`true`)??(this.focusOnOpen===`last`?a[a.length-1]:a[0]))?.focus()}this.focusOnOpen=null}})}onPanelDetach(){this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.disconnectOrigin?.(),this.disconnectOrigin=void 0}overlayPopoverLocation(e){return!!this.overlayContext?.useTopLayer||!!e.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)?`global`:null}refreshPanel(){this.transition?.refresh()}onTriggerKey(e){if(!(this.disabled()||this.isReadonly())){if(e.key===`Escape`||e.altKey&&e.key===`ArrowUp`){e.preventDefault(),this.close();return}[`ArrowDown`,`ArrowUp`,`Enter`,` `].includes(e.key)?(e.preventDefault(),this.focusOnOpen=e.key===`ArrowUp`?`last`:`first`,this.open()):e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&(this.open(),this.typeahead(e.key))}}onPanelKey(e){if(e.key===`Escape`||e.key===`Tab`||e.altKey&&e.key===`ArrowUp`){e.key!==`Tab`&&e.preventDefault(),e.stopPropagation(),this.close();return}let n=e.target.matches(`input,textarea`);if(n&&![`ArrowDown`,`ArrowUp`].includes(e.key))return;if(![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){!n&&e.key.length===1&&e.key!==` `&&this.typeahead(e.key);return}let r=this.panelItems();if(!r.length)return;let o=r.indexOf(r[0].ownerDocument.activeElement),a=e.key===`Home`?0:e.key===`End`?r.length-1:e.key===`ArrowDown`?(o+1)%r.length:o<0?r.length-1:(o-1+r.length)%r.length;e.preventDefault(),r[a].focus()}onTriggerBlur(){this.isOpen()||this.markAsTouched()}onOutsideClick(e){let t=e.target;this.originRef?.nativeElement.contains(t)||this.close()}clearSelectedValue(e){return this.disabled()||this.isReadonly()?!1:(this.updateValue(e),this.close(),this.markAsTouched(),this.focus({preventScroll:!0}),!0)}onSearchChange(e){clearTimeout(this.searchTimeout),this.debouncing.set(!0),this.searchTimeout=setTimeout(()=>{this.debouncing.set(!1),this.searchRequest.set(this.externalFiltering()),this.searchValue.set(e),this.search.emit(e)},this.searchDebounce())}selectionTagConfig(e){return r(r({},this.tagConfig()),e.tagConfig)}requestMore(e){this.loadMore.emit(r({},e))}typeahead(e){clearTimeout(this.typeaheadTimeout),this.typeaheadText+=e.toLocaleLowerCase(),this.typeaheadTimeout=setTimeout(()=>{this.typeaheadText=``},700),queueMicrotask(()=>this.panelItems().find(t=>t.textContent?.trim().toLocaleLowerCase().startsWith(this.typeaheadText))?.focus())}panelItems(){return Array.from(this.connectedOverlay?.overlayRef?.overlayElement.querySelectorAll(`.bx-select-option:not(:disabled)`)??[])}static ɵfac=function(t){return new(t||i)};static ɵdir=R$1({type:i,viewQuery:function(t,n){if(t&1&&(Yr(n.valueOverflow,Zr,5)(n.labelOverflow,Qr,5),Wm(XP,5)(Jr,5)(eo,5,U$2)),t&2){Qt$1(2);let r;Ym(r=Km())&&(n.connectedOverlay=r.first),Ym(r=Km())&&(n.searchInputRef=r.first),Ym(r=Km())&&(n.originRef=r.first)}},inputs:{clearable:[1,`clearable`],clearLabel:[1,`clearLabel`],clearTooltip:[1,`clearTooltip`],selectionDisplay:[1,`selectionDisplay`],tagConfig:[1,`tagConfig`],overflowTagConfig:[1,`overflowTagConfig`],visibleTagCount:[1,`visibleTagCount`],tagOverflowText:[1,`tagOverflowText`],options:[1,`options`],compareWith:[1,`compareWith`],isSearchable:[1,`isSearchable`],externalFiltering:[1,`externalFiltering`],searchValue:[1,`searchValue`],searchDebounce:[1,`searchDebounce`],searchPlaceholder:[1,`searchPlaceholder`],emptyMessage:[1,`emptyMessage`],loadingLabel:[1,`loadingLabel`],loadingAriaLabel:[1,`loadingAriaLabel`],hasMore:[1,`hasMore`],loadError:[1,`loadError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],panelClass:[1,`panelClass`],optionTemplate:[1,`optionTemplate`],triggerTemplate:[1,`triggerTemplate`]},outputs:{searchValue:`searchValueChange`,search:`search`,loadMore:`loadMore`,openedChange:`openedChange`},features:[Je$2]})};var to=[[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var no=[`[bxSuffix]`,`bx-error`,`bx-hint`];var io=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var ro=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var oo=(i,e,t)=>({$implicit:i,selected:e,index:t});var Ei=(i,e)=>e.value;function ao(i,e){i&1&&(W(0,`span`,19),je(1,`*`),Q$1())}function so(i,e){if(i&1&&(W(0,`span`,9)(1,`span`,18,2),je(3),Q$1(),pe(4,ao,2,0,`span`,19),Q$1()),i&2){let t=de();M$1(),fe(`bxTruncate`,!t.isFloating()),M$1(2),tt$2(t.resolvedLabel()),M$1(),me$1(t.required()&&!t.resolvedHideRequiredMarker()?4:-1)}}function lo(i,e){if(i&1&&zu(0,11),i&2){let t=de();fe(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,t.triggerContext())}}function co(i,e){if(i&1&&Le(0,`bx-tag`,20),i&2){let t=e.$implicit,n=de(2);fe(`text`,t.label)(`config`,n.selectionTagConfig(t))(`disabled`,n.disabled()||!!t.disabled)(`focusable`,!1)(`tooltipOnTruncate`,n.resolvedTooltipOnTruncate()?void 0:!1)}}function uo(i,e){if(i&1&&Le(0,`bx-tag`,21),i&2){let t=de(2);fe(`text`,t.overflowTagLabel())(`config`,t.overflowTagConfig())(`tooltip`,t.overflowTagTooltip())(`focusable`,!1)(`tooltipOnTruncate`,t.resolvedTooltipOnTruncate()?void 0:!1)}}function po(i,e){if(i&1&&(W(0,`span`,12),Gr$1(1,co,1,5,`bx-tag`,20,Ei),pe(3,uo,1,5,`bx-tag`,21),Q$1()),i&2){let t=de();M$1(),Wr$1(t.visibleTags()),M$1(2),me$1(t.selectedOptions().length>t.visibleTagCount()?3:-1)}}function ho(i,e){if(i&1&&je(0),i&2){let t=de();Sr$1(` `,t.selectedOptionLabel()||(t.isFloating()||!t.label()?t.resolvedPlaceholder():``),` `)}}function fo(i,e){i&1&&Le(0,`bx-loading-spinner`,14),i&2&&fe(`size`,16)(`decorative`,!0)}function go(i,e){i&1&&Le(0,`bx-icon`,15)}function bo(i,e){if(i&1){let t=fs();W(0,`button`,22),be$1(`click`,function(){jr$1(t);let r=de();return Hr$1(r.clearSelection())}),Le(1,`bx-icon`,23),Q$1()}if(i&2){let t=de();fe(`surfaceEffects`,!1)(`disabled`,t.disabled())(`bxTooltip`,t.resolvedClearTooltip()),ve(`aria-label`,t.resolvedClearLabel())}}function mo(i,e){if(i&1){let t=fs();W(0,`div`,25)(1,`bx-search-input`,30,4),be$1(`search`,function(r){jr$1(t);let o=de(2);return Hr$1(o.onSearchChange(r))})(`keydown.enter`,function(r){return r.preventDefault()}),Q$1()()}if(i&2){let t=de(2);M$1(),fe(`value`,t.searchValue())(`placeholder`,t.resolvedSearchPlaceholder())(`ariaLabel`,t.resolvedSearchPlaceholder())}}function yo(i,e){if(i&1&&(W(0,`div`,31),je(1),Q$1()),i&2){let t=de(),n=t.$implicit,r=t.$index,o=de(2);fe(`id`,o.controlId()+`-group-`+r),M$1(),tt$2(n.resolvedGroup)}}function vo(i,e){i&1&&Le(0,`bx-icon`,34)}function xo(i,e){if(i&1&&Le(0,`bx-icon`,35),i&2){let t=de().$implicit;fe(`name`,t.icon)}}function _o(i,e){if(i&1&&zu(0,11),i&2){let t=de(),n=t.$implicit,r=t.$index,o=de(2);fe(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,Hk(2,oo,n,o.isSelected(n.value),r))}}function Mo(i,e){if(i&1&&(W(0,`span`),je(1),Q$1()),i&2){let t=de().$implicit;M$1(),tt$2(t.resolvedStr)}}function Co(i,e){if(i&1){let t=fs();pe(0,yo,2,2,`div`,31),W(1,`button`,32),be$1(`click`,function(){let r=jr$1(t).$implicit,o=de(2);return Hr$1(o.selectOption(r))}),W(2,`span`,33),pe(3,vo,1,0,`bx-icon`,34),Q$1(),pe(4,xo,1,1,`bx-icon`,35),pe(5,_o,1,6,`ng-container`,11)(6,Mo,2,1,`span`),Q$1()}if(i&2){let t,n=e.$implicit,r=e.$index,o=de(2);me$1(n.resolvedGroup&&(r===0||o.filteredOptions()[r-1].resolvedGroup!==n.resolvedGroup)?0:-1),M$1(),fe(`disabled`,n.disabled||n.groupDisabled||!1),ve(`aria-selected`,o.isSelected(n.value)),M$1(2),me$1(o.isSelected(n.value)?3:-1),M$1(),me$1(n.icon?4:-1),M$1(),me$1((t=o.optionTemplate())?5:6,t)}}function So(i,e){if(i&1&&(W(0,`div`,36),je(1),Q$1()),i&2){let t=de(3);M$1(),tt$2(t.resolvedEmptyMessage())}}function wo(i,e){if(i&1&&pe(0,So,2,1,`div`,36),i&2){let t=de(2);me$1(t.loading()?-1:0)}}function No(i,e){if(i&1&&(W(0,`span`),je(1),Q$1()),i&2){let t=de(3);M$1(),tt$2(t.resolvedLoadingLabel())}}function To(i,e){i&1&&Le(0,`bx-loading-spinner`,14),i&2&&fe(`size`,20)(`decorative`,!0)}function Oo(i,e){if(i&1&&(W(0,`div`,28),pe(1,No,2,1,`span`)(2,To,1,2,`bx-loading-spinner`,14),Q$1()),i&2){let t=de(2);ve(`aria-label`,t.resolvedLoadingLabel()||t.resolvedLoadingAriaLabel()),M$1(),me$1(t.resolvedLoadingLabel()?1:2)}}function ko(i,e){if(i&1&&(W(0,`div`,29),Le(1,`bx-loading-indicator`,37),Q$1()),i&2){let t=de(2);M$1(),fe(`size`,16)(`label`,t.loadingLabel()??t.loadingAriaLabel())}}function Eo(i,e){if(i&1){let t=fs();W(0,`div`,24),be$1(`keydown`,function(r){jr$1(t);let o=de();return Hr$1(o.onPanelKey(r))}),pe(1,mo,3,3,`div`,25),W(2,`div`,26,3),be$1(`loadMore`,function(r){jr$1(t);let o=de();return Hr$1(o.requestMore(r))}),W(4,`div`,27),Gr$1(5,Co,7,6,null,null,Ei,!1,wo,1,1),Q$1(),pe(8,Oo,3,2,`div`,28)(9,ko,2,2,`div`,29),Q$1()()}if(i&2){let t=Wa(3),n=de();Ya(n.panelClass()),M$1(),me$1(n.isSearchable()?1:-1),M$1(),fe(`loadMoreHasMore`,n.hasMore())(`loadMoreSuppressed`,n.isSearching())(`loadMoreLoading`,n.loading())(`loadMoreDisabled`,n.disabled()||n.isReadonly())(`loadMoreError`,n.loadError())(`loadMoreConfig`,n.loadMoreConfig())(`loadMoreTemplate`,n.loadMoreTemplate())(`loadMoreRevision`,n.options()),M$1(2),fe(`hidden`,n.isSearching())(`id`,n.controlId()+`-options`),ve(`aria-label`,n.ariaLabel()||n.resolvedLabel()),M$1(),Wr$1(n.filteredOptions()),M$1(3),me$1(n.isSearching()?8:n.loading()&&!t.actionVisible()?9:-1)}}var ki=class i extends pt{selectionChange=un$2();clearSelection(){this.clearSelectedValue(null)&&this.selectionChange.emit({value:null,source:`clear`})}isSelected(e){let t=this.internalValue();return t!==null&&this.compareWith()(t,e)}selectOption(e){e.disabled||e.groupDisabled||this.disabled()||this.isReadonly()||(this.updateValue(e.value),this.selectionChange.emit({value:e.value,source:`user`}),this.close())}static ɵfac=(()=>{let e;return function(n){return(e||(e=Dn$2(i)))(n||i)}})();static ɵcmp=le({type:i,selectors:[[`bx-select`]],outputs:{selectionChange:`selectionChange`},features:[Je$2],ngContentSelectors:no,decls:19,vars:51,consts:[[`origin`,`cdkOverlayOrigin`],[`valueOverflow`,`bxTruncate`],[`labelOverflow`,`bxTruncate`],[`pagination`,`bxLoadMore`],[`searchInput`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-select-control`],[`type`,`button`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`blur`,`bxTooltip`,`bxTooltipHover`,`bxTooltipTouch`,`id`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`,3,`bxTruncate`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`bx-selected-tags`],[`aria-hidden`,`true`,1,`bx-select-caret`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[3,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-field-required`],[3,`text`,`config`,`disabled`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`data-bx-surface`,`solid`,`tabindex`,`-1`,1,`bx-select-panel`,3,`keydown`],[1,`bx-select-search-container`],[`bxLoadMore`,``,1,`bx-select-menu-container`,3,`loadMore`,`loadMoreHasMore`,`loadMoreSuppressed`,`loadMoreLoading`,`loadMoreDisabled`,`loadMoreError`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`hidden`,`id`],[`role`,`status`,1,`bx-select-search-state`],[1,`bx-select-loading`],[3,`search`,`keydown.enter`,`value`,`placeholder`,`ariaLabel`],[1,`bx-select-group`,3,`id`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-select-option`,3,`click`,`disabled`],[`aria-hidden`,`true`,1,`bx-select-check-placeholder`],[`name`,`check`,`size`,`16`],[`size`,`16`,3,`name`],[`role`,`status`,1,`bx-select-empty`],[3,`size`,`label`]],template:function(t,n){if(t&1&&(Ze$2(to),W(0,`bx-form-field`,5)(1,`div`,6)(2,`button`,7,0),be$1(`click`,function(){return n.toggleOpen()})(`keydown`,function(o){return n.onTriggerKey(o)})(`blur`,function(){return n.onTriggerBlur()}),W(4,`div`,8),pe(5,so,5,3,`span`,9),W(6,`span`,10,1),pe(8,lo,1,2,`ng-container`,11)(9,po,4,1,`span`,12)(10,ho,1,1),Q$1()(),Re(11),W(12,`span`,13),pe(13,fo,1,2,`bx-loading-spinner`,14)(14,go,1,0,`bx-icon`,15),Q$1()(),pe(15,bo,2,4,`button`,16),Q$1(),E_(16,Eo,10,16,`ng-template`,17),be$1(`overlayOutsideClick`,function(o){return n.onOutsideClick(o)})(`attach`,function(){return n.onPanelAttach()})(`detach`,function(){return n.onPanelDetach()})(`positionChange`,function(){return n.refreshPanel()}),Re(17,1,io),Re(18,2,ro),Q$1()),t&2){let r,o=Wa(3);fe(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),M$1(),re(`has-clear`,n.showClear()),M$1(),re(`is-invalid`,n.showError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-open`,n.isOpen())(`is-floating`,n.isFloating())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()),fe(`bxTooltip`,n.resolvedTooltipOnTruncate()?n.selectionDisplay()===`tags`?n.selectedOptionLabel():n.truncatedSelectionTooltip():``)(`bxTooltipHover`,n.selectionDisplay()!==`tags`)(`bxTooltipTouch`,n.selectionDisplay()===`tags`?`none`:`longpress`)(`id`,n.controlId())(`disabled`,n.disabled()),ve(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()||n.resolvedLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-required`,n.required())(`aria-readonly`,n.isReadonly())(`aria-busy`,n.loading()||n.pending()||n.isSearching())(`aria-expanded`,n.isOpen())(`aria-controls`,n.isPanelAttached()?n.controlId()+`-options`:null),M$1(3),me$1(n.label()?5:-1),M$1(),re(`is-placeholder`,!n.selectedOptionLabel()),fe(`bxTruncate`,!(n.selectionDisplay()===`tags`&&n.selectedOptions().length)&&!n.triggerTemplate()),M$1(2),me$1((r=n.triggerTemplate())?8:n.selectionDisplay()===`tags`&&n.selectedOptions().length?9:10,r),M$1(5),me$1(n.loading()||n.pending()||n.isSearching()?13:14),M$1(2),me$1(n.showClear()?15:-1),M$1(),fe(`cdkConnectedOverlayOrigin`,o)(`cdkConnectedOverlayOpen`,n.isPanelAttached())(`cdkConnectedOverlayPositions`,n.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayScrollStrategy`,n.panelScrollStrategy)(`cdkConnectedOverlayUsePopover`,n.overlayPopoverLocation(o.elementRef.nativeElement))(`cdkConnectedOverlayWidth`,o.elementRef.nativeElement.offsetWidth)}},dependencies:[mn$2,QP,XP,Yv,Mf,xf,Dt$1,Hx,ut,bg,Ax,ir$1,Px,nr$1,rr$1],styles:[`
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
  padding: 0;
  padding-inline-end: 0.75rem;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  outline: none;
}
.bx-select-trigger[_ngcontent-%COMP%]:hover:not(:disabled, .is-readonly) {
  background-color: var(--%NS%bx-bg-neutral-hover);
}
.bx-select-trigger[_ngcontent-%COMP%]:disabled {
  background-color: var(--%NS%bx-bg-element);
  opacity: 0.7;
  border-bottom-style: dotted;
  cursor: not-allowed;
}
.bx-select-trigger.is-readonly[_ngcontent-%COMP%] {
  cursor: default;
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
  line-height: 1.4;
  z-index: 1;
}
.bx-select-value.is-placeholder[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
}
.bx-floating-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: baseline;
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
.bx-select-trigger.is-floating[_ngcontent-%COMP%]:focus-visible:not(.is-readonly)   .bx-floating-label[_ngcontent-%COMP%] {
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
  margin-inline-start: 0.5rem;
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
  min-height: 0;
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
.bx-select-option[_ngcontent-%COMP%] {
  display: flex;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 0;
  border-radius: 0.25rem;
  background: transparent;
  color: var(--%NS%bx-text-primary);
  font: inherit;
  font-size: 0.875rem;
  line-height: 1.4;
  text-align: start;
  cursor: pointer;
}
.bx-select-option[aria-selected=true][_ngcontent-%COMP%] {
  background: var(--%NS%bx-accent-subtle);
  color: var(--%NS%bx-text-accent);
}
.bx-select-option[_ngcontent-%COMP%]:hover:not(:disabled), 
.bx-select-option[_ngcontent-%COMP%]:active:not(:disabled) {
  background: var(--%NS%bx-bg-element-hover);
}
.bx-select-option[aria-selected=true][_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--%NS%bx-accent-subtle);
}
.bx-select-option[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: -2px;
}
.bx-select-option[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
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
  color: var(--%NS%bx-text-accent);
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
  --%NS%bx-glass-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  --%NS%bx-glass-surface: var(--%NS%bx-bg-surface);
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  background: var(--%NS%bx-glass-surface) !important;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
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
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]:focus-within:not(.is-disabled, :disabled, .is-readonly, [readonly], [aria-readonly=true], :has([readonly], [aria-readonly=true])), 
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]:focus-visible:not(:disabled, [readonly], [aria-readonly=true]), 
.bx-select-trigger[data-bx-surface].is-open[_ngcontent-%COMP%]:not(:disabled), 
.bx-select-trigger[data-bx-surface].is-readonly.is-keyboard-focused[_ngcontent-%COMP%]:focus-within, 
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]:has(.bx-readonly.is-keyboard-focused):focus-within {
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
}
.bx-select-item-inner[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {
  flex: 1 1 auto;
  min-width: 0;
  white-space: normal;
  overflow-wrap: anywhere;
}
.bx-select-group[_ngcontent-%COMP%] {
  padding: 0.5rem 0.75rem;
  font-weight: 600;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
}
.bx-select-option[_ngcontent-%COMP%] {
  align-items: center;
  gap: 0.5rem;
}
.bx-select-panel[_ngcontent-%COMP%] {
  max-block-size: min(var(--%NS%bx-select-panel-height, 22rem), 70dvh);
}
.bx-select-menu-container[_ngcontent-%COMP%] {
  flex: 1 1 auto;
}
.bx-select-trigger.is-outline[_ngcontent-%COMP%] {
  border: 1px solid var(--%NS%bx-border-strong);
  border-radius: var(--%NS%bx-field-radius, 0.5rem);
}
.bx-select-trigger.is-outline.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
}
.bx-select-panel[_ngcontent-%COMP%] {
  background: var(--%NS%bx-select-panel-background, var(--%NS%bx-bg-surface-alt));
  border-color: var(--%NS%bx-select-panel-border, var(--%NS%bx-border-strong));
  box-shadow: var(--%NS%bx-select-panel-shadow, 0 12px 20px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1));
  isolation: isolate;
}
.bx-select-measure[_ngcontent-%COMP%] {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
  inset-inline: 0;
  box-sizing: border-box;
  padding-inline-start: 0.75rem;
  font: inherit;
  font-size: 1rem;
}
.bx-select-caret[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 1rem;
  block-size: 1rem;
}
.bx-select-loading[_ngcontent-%COMP%] {
  padding: 0.5rem 0.75rem;
}
.bx-select-menu-container[_ngcontent-%COMP%] {
  --%NS%bx-load-more-padding: 0.5rem 0.75rem;
}
.bx-select-search-state[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  min-block-size: 4rem;
  padding: 0.75rem;
  color: var(--%NS%bx-text-secondary);
}
[role=listbox][hidden][_ngcontent-%COMP%] {
  display: none;
}
.bx-selected-tags[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-select-tag-gap, 0.25rem);
  min-inline-size: 0;
  max-inline-size: 100%;
  overflow: hidden;
}
.bx-selected-tags[_ngcontent-%COMP%]    > bx-tag[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
.bx-selected-tags[_ngcontent-%COMP%]    > .bx-overflow-tag[_ngcontent-%COMP%] {
  flex: 0 0 auto;
}
[role=listbox][_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-select-option-gap, 0.25rem);
}
.bx-select-option[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
.bx-select-control[_ngcontent-%COMP%] {
  position: relative;
  inline-size: 100%;
  min-inline-size: 0;
}
.bx-select-control.has-clear[_ngcontent-%COMP%]   .bx-select-container[_ngcontent-%COMP%] {
  padding-inline-end: 2rem;
}
.bx-select-control.has-clear[_ngcontent-%COMP%]   .bx-select-measure[_ngcontent-%COMP%] {
  inset-inline-end: 2rem;
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%] {
  transition-property: color;
  transition-duration: calc(0.15s * (1 - var(--%NS%bx-reduced-motion, 0)));
  transition-timing-function: ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: transparent;
  border: none;
  padding: 0.25rem;
  inline-size: 1.5rem;
  block-size: 1.5rem;
  border-radius: 0.25rem;
  color: var(--%NS%bx-text-secondary);
  cursor: pointer;
  flex-shrink: 0;
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0;
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  color: var(--%NS%bx-text-primary);
  background: var(--%NS%bx-bg-element-hover);
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: calc(1px + 0.75rem + 1rem + 0.5rem);
  transform: translateY(-50%);
  z-index: 3;
}`]})};var K=class i{radios=new Set;select(t){for(let n of this.radios)n!==t&&n.sharesGroup(t)&&n.writeValue(t.value())}static ɵfac=function(n){return new(n||i)};static ɵprov=T({token:i,factory:i.ɵfac,providedIn:`root`})};var Q=new E(`BX_RADIO_GROUP`);var an=[`*`];function ln(i,t){i&1&&(W(0,`span`,6),je(1,`*`),Q$1())}function sn(i,t){if(i&1&&(W(0,`span`,5),Re(1),je(2),pe(3,ln,2,0,`span`,6),Q$1()),i&2){let n=de();M$1(2),Sr$1(``,n.resolvedLabel(),` `),M$1(),me$1(n.isFieldRequired()||n.group?.required()?3:-1)}}var Ue=class i extends hx{group=f(Q,{optional:!0});registry=f(K);element=f(U$2).nativeElement;i18n=f(ze,{optional:!0});inputId=y(()=>`bx-radio-${di$1()}`);resolvedLabel=y(()=>{this.i18n?.version?.();let t=this.label();if(t)return tr$1(t)?this.i18n?.translate(t.key)??t.key:t});effectiveDisabled=y(()=>this.isDisabled()||!!this.group?.disabled());effectiveName=y(()=>this.group?.groupName()??this.name());selected=y(()=>(this.group?this.group.value():this.internalValue())===this.value());labelPosition=g(`after`);value=g.required();name=g(``);showTooltip=!1;constructor(){super(),this.registry.radios.add(this),f(K$1).onDestroy(()=>this.registry.radios.delete(this))}sharesGroup(t){let n=this.ngControl?.control;return n&&n===t.ngControl?.control?!0:!!this.name()&&this.name()===t.name()&&this.element.closest(`form`)===t.element.closest(`form`)&&n?.parent===t.ngControl?.control?.parent}onSelect(){this.effectiveDisabled()||this.isReadonly()||this.group?.isReadonly()||(this.group?this.group.select(this.value()):(this.updateValue(this.value()),this.registry.select(this)))}onReadonlyClick(t){(this.isReadonly()||this.group?.isReadonly())&&t.preventDefault()}onControlPointerDown(){(this.isReadonly()||this.group?.isReadonly())&&this.keyboardFocused.set(!1)}onBlur(){this.group?this.group.markTouched():this.markAsTouched()}static ɵfac=function(n){return new(n||i)};static ɵcmp=le({type:i,selectors:[[`bx-radio`]],inputs:{labelPosition:[1,`labelPosition`],value:[1,`value`],name:[1,`name`]},features:[Je$2],ngContentSelectors:an,decls:6,vars:28,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[1,`bx-inline-wrapper`],[`type`,`radio`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`required`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-radio-circle`,3,`bxSurfaceEmission`],[1,`bx-radio-inner`],[1,`bx-inline-label`],[1,`bx-inline-required`]],template:function(n,e){n&1&&(Ze$2(),W(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),be$1(`click`,function(o){return e.onReadonlyClick(o)})(`change`,function(){return e.onSelect()})(`blur`,function(){return e.onBlur()}),Q$1(),W(3,`div`,3),Le(4,`div`,4),Q$1(),pe(5,sn,4,2,`span`,5),Q$1()()),n&2&&(fe(`inline`,!0)(`tooltip`,e.tooltip())(`error`,e.errorMessage)(`loading`,e.loading())(`forId`,e.inputId()),M$1(),re(`is-disabled`,e.effectiveDisabled())(`is-readonly`,e.isReadonly()||!!e.group?.isReadonly())(`is-keyboard-focused`,e.keyboardFocused())(`label-before`,e.labelPosition()===`before`),M$1(),fe(`required`,e.required()||!!e.group?.required())(`disabled`,e.effectiveDisabled())(`checked`,e.selected()),ve(`id`,e.inputId())(`name`,e.effectiveName()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel())(`aria-readonly`,e.isReadonly()||!!e.group?.isReadonly())(`aria-describedby`,e.group?.describedBy()),M$1(),re(`is-checked`,e.selected())(`is-invalid`,!!e.errorMessage),fe(`bxSurfaceEmission`,e.errorMessage?`var(--bx-text-danger)`:`var(--bx-accent)`),M$1(2),me$1(e.resolvedLabel()?5:-1))},dependencies:[mn$2,DD,Mf],styles:[`
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
.bx-inline-wrapper.is-readonly[_ngcontent-%COMP%]:not(.is-disabled) {
  cursor: default;
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
  transition: border-color 0.15s ease;
}
.bx-radio-circle.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
  background-color: var(--%NS%bx-bg-danger-subtle);
}
.bx-radio-circle.is-checked[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-accent);
}
.bx-radio-circle.is-checked.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
}
.bx-radio-circle.is-checked[_ngcontent-%COMP%]   .bx-radio-inner[_ngcontent-%COMP%] {
  transform: scale(1);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-readonly)   input[_ngcontent-%COMP%]:focus-visible    ~ .bx-radio-circle[_ngcontent-%COMP%], 
.bx-inline-wrapper.is-readonly.is-keyboard-focused[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible    ~ .bx-radio-circle[_ngcontent-%COMP%] {
  box-shadow: 0 0 0 3px var(--%NS%bx-accent-subtle);
}
.bx-radio-inner[_ngcontent-%COMP%] {
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--%NS%bx-on-accent);
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
  --%NS%bx-glass-surface: var(--%NS%bx-accent);
  --%NS%bx-glass-min-opacity: 1;
  --%NS%bx-glass-edge: var(--%NS%bx-border-accent);
  --%NS%bx-glass-text: var(--%NS%bx-text-accent);
}
.bx-radio-circle[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-danger-subtle);
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
  --%NS%bx-glass-text: var(--%NS%bx-text-danger);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled, .is-readonly):hover   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral-hover);
  --%NS%bx-glass-edge: var(--%NS%bx-border-accent);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled, .is-readonly):hover   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked {
  --%NS%bx-glass-surface: var(--%NS%bx-accent-hover);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled, .is-readonly):hover   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked   .bx-radio-inner[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-accent-hover);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
  background-image:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--%NS%bx-border-strong) 24%, var(--%NS%bx-glass-surface)),
      var(--%NS%bx-glass-surface) 55%,
      color-mix(in srgb, var(--%NS%bx-border-strong) 10%, var(--%NS%bx-glass-surface))) !important;
  border-top-color: var(--%NS%bx-border-strong);
  border-bottom-color: var(--%NS%bx-border-default);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked {
  --%NS%bx-glass-surface: var(--%NS%bx-accent-subtle);
  border-top-color: var(--%NS%bx-accent);
  border-inline-color: var(--%NS%bx-border-accent);
  border-bottom-color: var(--%NS%bx-border-accent);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked   .bx-radio-inner[_ngcontent-%COMP%] {
  background-image:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--%NS%bx-color-accent-50) 24%, var(--%NS%bx-accent)),
      var(--%NS%bx-accent) 42%,
      var(--%NS%bx-accent) 65%,
      color-mix(in srgb, var(--%NS%bx-border-accent) 18%, var(--%NS%bx-accent))) !important;
  border-top-color: color-mix(in srgb, var(--%NS%bx-color-accent-100) 60%, var(--%NS%bx-accent));
  border-inline-color: var(--%NS%bx-accent);
  border-bottom-color: var(--%NS%bx-border-accent);
  background-color: var(--%NS%bx-accent);
}
.high-contrast[_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked   .bx-radio-inner[_ngcontent-%COMP%], .high-contrast   [_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked   .bx-radio-inner[_ngcontent-%COMP%], 
.bx-high-contrast-scope[_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked   .bx-radio-inner[_ngcontent-%COMP%], .bx-high-contrast-scope   [_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked   .bx-radio-inner[_ngcontent-%COMP%] {
  background-image: none !important;
  border-color: var(--%NS%bx-glass-edge);
}
@media (forced-colors: active) {
  .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked   .bx-radio-inner[_ngcontent-%COMP%] {
    background-image: none !important;
    border-color: ButtonText;
  }
}
.high-contrast[_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid), .high-contrast   [_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid), 
.bx-high-contrast-scope[_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid), .bx-high-contrast-scope   [_nghost-%COMP%]   .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
  background-image: none !important;
  border-color: var(--%NS%bx-glass-edge);
}
@media (forced-colors: active) {
  .bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled)   .bx-radio-circle[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
    background-image: none !important;
    border-color: ButtonText;
  }
}
.bx-inline-wrapper.label-before[_ngcontent-%COMP%]   .bx-inline-label[_ngcontent-%COMP%] {
  order: -1;
}`],changeDetection:1})};var cn=[`*`,[[`bx-error`]],[[`bx-hint`]]];var dn=[`*`,`bx-error`,`bx-hint`];var bn=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var gn=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function pn(i,t){i&1&&(W(0,`span`,6),je(1,`*`),Q$1())}var Ye=class i extends Ye$1{static ɵfac=(()=>{let t;return function(e){return(t||(t=Dn$2(i)))(e||i)}})();static ɵcmp=le({type:i,selectors:[[`bx-slide-toggle`]],features:[Je$2],ngContentSelectors:dn,decls:11,vars:35,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,`role`,`switch`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`id`,`disabled`,`required`,`checked`],[`bxSurface`,``,1,`bx-slide-toggle-track`,3,`bxSurfaceEmission`],[1,`bx-slide-toggle-thumb`],[1,`bx-inline-label`],[`aria-hidden`,`true`,1,`bx-inline-required`]],template:function(n,e){n&1&&(Ze$2(cn),W(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),be$1(`click`,function(o){return e.onReadonlyClick(o)})(`change`,function(o){return e.onToggle(o)})(`blur`,function(){return e.onBlur()}),Q$1(),W(3,`div`,3),Le(4,`div`,4),Q$1(),W(5,`span`,5),Re(6),je(7),pe(8,pn,2,0,`span`,6),Q$1()(),Re(9,1,bn),Re(10,2,gn),Q$1()),n&2&&(fe(`control`,e.fieldControl)(`inline`,!0)(`tooltip`,e.tooltip())(`loading`,e.loading())(`hint`,e.hint())(`hintEnd`,e.hintEnd())(`subscriptSizing`,e.resolvedSubscriptSizing())(`forId`,e.controlId()),M$1(),re(`is-disabled`,e.disabled())(`is-readonly`,e.isReadonly())(`is-keyboard-focused`,e.keyboardFocused())(`label-before`,e.labelPosition()===`before`),M$1(),fe(`id`,e.controlId())(`disabled`,e.disabled())(`required`,e.effectiveRequired())(`checked`,e.displayedChecked()),ve(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-readonly`,e.isReadonly())(`aria-checked`,e.displayedChecked()),M$1(),re(`is-checked`,e.displayedChecked())(`is-invalid`,e.showError()),fe(`bxSurfaceEmission`,e.showError()?`var(--bx-text-danger)`:`var(--bx-accent)`),M$1(4),Sr$1(``,e.resolvedLabel(),` `),M$1(),me$1(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?8:-1))},dependencies:[mn$2,Mf],styles:[`
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
.bx-inline-wrapper.is-readonly[_ngcontent-%COMP%]:not(.is-disabled) {
  cursor: default;
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
  color: var(--%NS%bx-text-accent);
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
  transition: border-color 0.2s ease;
}
.bx-slide-toggle-track.is-invalid[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-danger-subtle);
  box-shadow: inset 0 0 0 2px var(--%NS%bx-border-danger);
}
.bx-slide-toggle-track.is-checked[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-accent);
}
.bx-slide-toggle-track.is-checked.is-invalid[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-danger);
}
.bx-slide-toggle-track.is-checked[_ngcontent-%COMP%]   .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
  transform: translateX(18px);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-readonly)   input[_ngcontent-%COMP%]:focus-visible    ~ .bx-slide-toggle-track[_ngcontent-%COMP%], 
.bx-inline-wrapper.is-readonly.is-keyboard-focused[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible    ~ .bx-slide-toggle-track[_ngcontent-%COMP%] {
  box-shadow: 0 0 0 3px var(--%NS%bx-accent-subtle);
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
  background: var(--%NS%bx-on-accent);
  border-color: var(--%NS%bx-on-accent);
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
  --%NS%bx-glass-surface: var(--%NS%bx-accent);
  --%NS%bx-glass-min-opacity: 1;
  --%NS%bx-glass-edge: var(--%NS%bx-border-accent);
  --%NS%bx-glass-text: var(--%NS%bx-text-accent);
}
.bx-slide-toggle-track[data-bx-surface].is-invalid[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-danger-subtle);
  --%NS%bx-glass-edge: var(--%NS%bx-border-danger);
  --%NS%bx-glass-text: var(--%NS%bx-text-danger);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled, .is-readonly):hover   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
  --%NS%bx-glass-surface: var(--%NS%bx-bg-neutral-hover);
  --%NS%bx-glass-edge: var(--%NS%bx-border-accent);
}
.bx-inline-wrapper[_ngcontent-%COMP%]:not(.is-disabled, .is-readonly):hover   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked {
  --%NS%bx-glass-surface: var(--%NS%bx-accent-hover);
}
.bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
  --%NS%bx-glass-rim-visibility: 0.25;
  --%NS%bx-toggle-thumb-surface: var(--%NS%bx-color-neutral-200);
  --%NS%bx-toggle-thumb-edge: color-mix(in srgb, var(--%NS%bx-accent) 18%, var(--%NS%bx-border-strong));
  background-image:
    linear-gradient(
      180deg,
      color-mix(in srgb, var(--%NS%bx-color-accent-50) 6%, var(--%NS%bx-glass-surface)),
      var(--%NS%bx-glass-surface) 55%,
      color-mix(in srgb, var(--%NS%bx-border-strong) 6%, var(--%NS%bx-glass-surface))) !important;
  border-color: var(--%NS%bx-glass-edge);
}
.bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid)   .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
  background:
    radial-gradient(
      circle at 35% 0%,
      color-mix(in srgb, var(--%NS%bx-color-neutral-50) 24%, transparent),
      transparent 65%),
    var(--%NS%bx-toggle-thumb-surface);
  border-color: var(--%NS%bx-toggle-thumb-edge);
}
.high-contrast[_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid)   .bx-slide-toggle-thumb[_ngcontent-%COMP%], .high-contrast   [_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid)   .bx-slide-toggle-thumb[_ngcontent-%COMP%], 
.bx-high-contrast-scope[_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid)   .bx-slide-toggle-thumb[_ngcontent-%COMP%], .bx-high-contrast-scope   [_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid)   .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
  background-image: none !important;
  border-color: var(--%NS%bx-glass-edge);
}
@media (forced-colors: active) {
  .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid)   .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
    background-image: none !important;
    border-color: ButtonText;
  }
}
.bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid).is-checked {
  --%NS%bx-toggle-thumb-surface: var(--%NS%bx-color-accent-100);
  --%NS%bx-toggle-thumb-edge: var(--%NS%bx-color-accent-200);
}
.high-contrast[_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid), .high-contrast   [_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid), 
.bx-high-contrast-scope[_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid), .bx-high-contrast-scope   [_nghost-%COMP%]   .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
  background-image: none !important;
  border-color: var(--%NS%bx-glass-edge);
}
@media (forced-colors: active) {
  .bx-slide-toggle-track[data-bx-surface][_ngcontent-%COMP%]:not(.is-invalid) {
    background-image: none !important;
    border-color: ButtonText;
  }
}
.high-contrast[_nghost-%COMP%]   .bx-slide-toggle-track.is-checked[_ngcontent-%COMP%]   .bx-slide-toggle-thumb[_ngcontent-%COMP%], .high-contrast   [_nghost-%COMP%]   .bx-slide-toggle-track.is-checked[_ngcontent-%COMP%]   .bx-slide-toggle-thumb[_ngcontent-%COMP%], 
.bx-high-contrast-scope[_nghost-%COMP%]   .bx-slide-toggle-track.is-checked[_ngcontent-%COMP%]   .bx-slide-toggle-thumb[_ngcontent-%COMP%], .bx-high-contrast-scope   [_nghost-%COMP%]   .bx-slide-toggle-track.is-checked[_ngcontent-%COMP%]   .bx-slide-toggle-thumb[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-on-accent);
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
}
.bx-inline-wrapper.label-before[_ngcontent-%COMP%]   .bx-inline-label[_ngcontent-%COMP%] {
  order: -1;
}`]})};var J$1=class i{element=f(U$2);theme=f(si$1);discrete=g(!1);displayWith=g(String);showTickMarks=g(!1);shell;valueLabel;tickList;thumb;constructor(){ym(()=>this.sync());let t=f(j$1),n=f(K$1);Qe$2(()=>{let e=this.element.nativeElement,r=e.ownerDocument.createElement(`span`);r.className=`bx-slider-shell`;let o=e.ownerDocument.createElement(`span`);o.className=`bx-slider-thumb`,o.setAttribute(`aria-hidden`,`true`);let x=e.ownerDocument.createElement(`span`);x.className=`bx-slider-lens`,o.append(x),e.before(r),r.append(e,o),this.shell=r,this.thumb=o;let k=e.ownerDocument.createElement(`span`);k.className=`bx-slider-value-label`,k.setAttribute(`aria-hidden`,`true`),r.append(k),this.valueLabel=k;let R=e.ownerDocument.createElement(`datalist`);R.id=`bx-slider-ticks-${e.id||Math.random().toString(36).slice(2)}`,r.append(R),this.tickList=R,this.sync();let V=()=>{r.style.setProperty(`--bx-slider-center-y`,`${e.offsetTop+e.offsetHeight/2}px`),r.style.setProperty(`--bx-slider-track-start`,`${e.offsetLeft}px`),r.style.setProperty(`--bx-slider-track-width`,`${e.offsetWidth}px`),wv(o)},ee=new ResizeObserver(V);t.runOutsideAngular(()=>{ee.observe(e),ee.observe(r),V()});let on=t.runOutsideAngular(()=>ZO(o,M=>{let $=M.reflectionStrength>M.strength,ae=$?M.reflectionStrength:M.strength;ae<=.04?(o.style.removeProperty(`--bx-slider-light-color`),o.style.removeProperty(`--bx-slider-light-strength`)):(o.style.setProperty(`--bx-slider-light-color`,$?M.reflection:M.color),o.style.setProperty(`--bx-slider-light-strength`,String(ae))),o.style.setProperty(`--bx-slider-light-x`,`${$?M.reflectionX:M.x}%`),o.style.setProperty(`--bx-slider-light-y`,`${$?M.reflectionY:M.y}%`)},e));n.onDestroy(()=>{ee.disconnect(),on(),r.replaceWith(e),this.shell=this.thumb=void 0})})}sync(){let t=this.element.nativeElement,n=t.min===``?0:Number(t.min),e=t.max===``?100:Number(t.max),r=e>n?Math.max(0,Math.min(100,(t.valueAsNumber-n)/(e-n)*100)):0;if(this.valueLabel&&(this.valueLabel.hidden=!this.discrete(),this.valueLabel.textContent=this.displayWith()(t.valueAsNumber)),this.tickList){let x=Math.min(1e3,Math.floor((e-n)/(Number(t.step)||1))),k=`${n}:${e}:${t.step}:${this.showTickMarks()}`;if(this.tickList.dataset.range!==k&&(this.tickList.replaceChildren(),this.tickList.dataset.range=k,this.showTickMarks()&&x>0))for(let R=0;R<=x;R++){let V=t.ownerDocument.createElement(`option`);V.value=String(n+R*(Number(t.step)||1)),this.tickList.append(V)}this.showTickMarks()?t.setAttribute(`list`,this.tickList.id):t.getAttribute(`list`)===this.tickList.id&&t.removeAttribute(`list`)}let o=`${Number.isFinite(r)?r:0}%`;if(t.style.getPropertyValue(`--bx-slider-progress`)!==o&&t.style.setProperty(`--bx-slider-progress`,o),this.shell){let x=String((Number.isFinite(r)?r:0)/100);this.shell.style.getPropertyValue(`--bx-slider-position`)!==x&&(this.shell.style.setProperty(`--bx-slider-position`,x),this.thumb&&wv(this.thumb))}}static ɵfac=function(n){return new(n||i)};static ɵdir=R$1({type:i,selectors:[[`input`,`type`,`range`,`bxSlider`,``]],hostAttrs:[1,`bx-slider`],hostBindings:function(n,e){n&1&&be$1(`input`,function(){return e.sync()})},inputs:{discrete:[1,`discrete`],displayWith:[1,`displayWith`],showTickMarks:[1,`showTickMarks`]}})};var un=[`*`,[[`bx-error`]],[[`bx-hint`]]];var xn=[`*`,`bx-error`,`bx-hint`];var mn=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var fn=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var Ke=class i extends Nf{groupName=y(()=>this.name()||this.controlId());focus(t){let n=this.hostElement.querySelector(`input:checked:not(:disabled)`);n?n.focus(t):super.focus(t)}select(t){this.updateValue(t)}markTouched(){this.markAsTouched()}static ɵfac=(()=>{let t;return function(e){return(t||(t=Dn$2(i)))(e||i)}})();static ɵcmp=le({type:i,selectors:[[`bx-radio-group`]],features:[Ht$1([{provide:Q,useExisting:Mt(()=>i)}]),Je$2],ngContentSelectors:xn,decls:5,vars:14,consts:[[3,`control`,`label`,`hint`,`hintEnd`,`tooltip`,`hideRequiredMarker`,`subscriptSizing`,`forId`],[`role`,`radiogroup`,3,`id`]],template:function(n,e){n&1&&(Ze$2(un),W(0,`bx-form-field`,0)(1,`div`,1),Re(2),Q$1(),Re(3,1,mn),Re(4,2,fn),Q$1()),n&2&&(fe(`control`,e.fieldControl)(`label`,e.label())(`hint`,e.hint())(`hintEnd`,e.hintEnd())(`tooltip`,e.tooltip())(`hideRequiredMarker`,e.resolvedHideRequiredMarker())(`subscriptSizing`,e.resolvedSubscriptSizing())(`forId`,e.controlId()),M$1(),fe(`id`,e.controlId()),ve(`aria-label`,e.ariaLabel()||e.resolvedLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-required`,e.effectiveRequired()))},dependencies:[Mf],styles:[`
[_nghost-%COMP%] {
  display: block;
}
[role=radiogroup][_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-radio-group-gap, 0.5rem);
  --%NS%bx-field-subscript-height: 0;
}`]})};var Qe=class i{static ɵfac=function(n){return new(n||i)};static ɵdir=R$1({type:i,selectors:[[``,`bxPrefix`,``]],hostAttrs:[1,`bx-field-prefix`]})};var Ze=class i{static ɵfac=function(n){return new(n||i)};static ɵdir=R$1({type:i,selectors:[[``,`bxSuffix`,``]],hostAttrs:[1,`bx-field-suffix`]})};function Je(i){let t=Number(i);return Number.isFinite(t)?Math.max(2,Math.floor(t)):2}var hn=[`summaryOverflow`];var vn=[[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var _n=[`[bxSuffix]`,`bx-error`,`bx-hint`];var yn=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Cn=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var Sn=(i,t,n)=>({$implicit:i,selected:t,index:n});var nn=(i,t)=>t.value;function Mn(i,t){i&1&&(W(0,`span`,21),je(1,`*`),Q$1())}function On(i,t){if(i&1&&(W(0,`span`,10)(1,`span`,20,3),je(3),Q$1(),pe(4,Mn,2,0,`span`,21),Q$1()),i&2){let n=de();M$1(),fe(`bxTruncate`,!n.isFloating()),M$1(2),tt$2(n.resolvedLabel()),M$1(),me$1(n.required()&&!n.resolvedHideRequiredMarker()?4:-1)}}function Pn(i,t){if(i&1&&zu(0,12),i&2){let n=de();fe(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,n.triggerContext())}}function Nn(i,t){if(i&1&&Le(0,`bx-tag`,22),i&2){let n=de(2);fe(`text`,n.allSelectedText())(`config`,n.tagConfig())(`focusable`,!1)(`tooltip`,``)(`tooltipOnTruncate`,!1)}}function kn(i,t){if(i&1&&Le(0,`bx-tag`,23),i&2){let n=t.$implicit,e=de(3);fe(`text`,n.label)(`config`,e.selectionTagConfig(n))(`disabled`,e.disabled()||!!n.disabled)(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function Tn(i,t){if(i&1&&Le(0,`bx-tag`,24),i&2){let n=de(3);fe(`text`,n.overflowTagLabel())(`config`,n.overflowTagConfig())(`tooltip`,n.overflowTagTooltip())(`focusable`,!1)(`tooltipOnTruncate`,n.resolvedTooltipOnTruncate()?void 0:!1)}}function wn(i,t){if(i&1&&(Gr$1(0,kn,1,5,`bx-tag`,23,nn),pe(2,Tn,1,5,`bx-tag`,24)),i&2){let n=de(2);Wr$1(n.visibleTags()),M$1(2),me$1(n.selectedOptions().length>n.visibleTagCount()?2:-1)}}function Dn(i,t){if(i&1&&(W(0,`span`,13),pe(1,Nn,1,5,`bx-tag`,22)(2,wn,3,1),Q$1()),i&2){let n=de();M$1(),me$1(n.selectAll()&&n.allSelectedText()?1:2)}}function Ln(i,t){if(i&1&&je(0),i&2){let n=de();Sr$1(` `,n.displayedSelection()||(n.isFloating()||!n.label()?n.resolvedPlaceholder():``),` `)}}function Rn(i,t){i&1&&Le(0,`bx-loading-spinner`,16),i&2&&fe(`size`,16)(`decorative`,!0)}function In(i,t){i&1&&Le(0,`bx-icon`,17)}function En(i,t){if(i&1){let n=fs();W(0,`button`,25),be$1(`click`,function(){jr$1(n);let r=de();return Hr$1(r.clearSelection())}),Le(1,`bx-icon`,26),Q$1()}if(i&2){let n=de();fe(`surfaceEffects`,!1)(`disabled`,n.disabled())(`bxTooltip`,n.resolvedClearTooltip()),ve(`aria-label`,n.resolvedClearLabel())}}function An(i,t){if(i&1){let n=fs();W(0,`div`,28)(1,`bx-search-input`,34,5),be$1(`search`,function(r){jr$1(n);let o=de(2);return Hr$1(o.onSearchChange(r))})(`keydown.enter`,function(r){return r.preventDefault()}),Q$1()()}if(i&2){let n=de(2);M$1(),fe(`value`,n.searchValue())(`placeholder`,n.resolvedSearchPlaceholder())(`ariaLabel`,n.resolvedSearchPlaceholder())}}function zn(i,t){if(i&1){let n=fs();W(0,`button`,35),be$1(`click`,function(){jr$1(n);let r=de(2);return Hr$1(r.toggleSelectAll())}),Le(1,`bx-checkbox-indicator`,36),je(2),Q$1()}if(i&2){let n=de(2);fe(`disabled`,n.disabled()||n.isReadonly()),ve(`aria-checked`,n.selectAllChecked()?`true`:n.someSelected()?`mixed`:`false`),M$1(),fe(`checked`,n.selectAllChecked())(`indeterminate`,!n.selectAllChecked()&&n.someSelected())(`disabled`,n.disabled()),M$1(),Sr$1(` `,n.resolvedSelectAllLabel(),` `)}}function Fn(i,t){if(i&1&&(W(0,`div`,37),je(1),Q$1()),i&2){let n=de(),e=n.$implicit,r=n.$index,o=de(2);fe(`id`,o.controlId()+`-group-`+r),M$1(),tt$2(e.resolvedGroup)}}function Bn(i,t){if(i&1&&Le(0,`bx-icon`,40),i&2){let n=de().$implicit;fe(`name`,n.icon)}}function jn(i,t){if(i&1&&zu(0,12),i&2){let n=de(),e=n.$implicit,r=n.$index,o=de(2);fe(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,Hk(2,Sn,e,o.isSelected(e.value),r))}}function Vn(i,t){if(i&1&&(W(0,`span`),je(1),Q$1()),i&2){let n=de().$implicit;M$1(),tt$2(n.resolvedStr)}}function qn(i,t){if(i&1){let n=fs();pe(0,Fn,2,2,`div`,37),W(1,`button`,38),be$1(`click`,function(){let r=jr$1(n).$implicit,o=de(2);return Hr$1(o.selectOption(r))}),Le(2,`bx-checkbox-indicator`,39),pe(3,Bn,1,1,`bx-icon`,40),pe(4,jn,1,6,`ng-container`,12)(5,Vn,2,1,`span`),Q$1()}if(i&2){let n,e=t.$implicit,r=t.$index,o=de(2);me$1(e.resolvedGroup&&(r===0||o.filteredOptions()[r-1].resolvedGroup!==e.resolvedGroup)?0:-1),M$1(),fe(`disabled`,e.disabled||e.groupDisabled||!1),ve(`aria-selected`,o.isSelected(e.value)),M$1(),fe(`checked`,o.isSelected(e.value))(`disabled`,o.disabled()||!!e.disabled||!!e.groupDisabled),M$1(),me$1(e.icon?3:-1),M$1(),me$1((n=o.optionTemplate())?4:5,n)}}function Hn(i,t){if(i&1&&(W(0,`div`,41),je(1),Q$1()),i&2){let n=de(3);M$1(),tt$2(n.resolvedEmptyMessage())}}function $n(i,t){if(i&1&&pe(0,Hn,2,1,`div`,41),i&2){let n=de(2);me$1(n.loading()?-1:0)}}function Wn(i,t){if(i&1&&(W(0,`span`),je(1),Q$1()),i&2){let n=de(3);M$1(),tt$2(n.resolvedLoadingLabel())}}function Gn(i,t){i&1&&Le(0,`bx-loading-spinner`,16),i&2&&fe(`size`,20)(`decorative`,!0)}function Xn(i,t){if(i&1&&(W(0,`div`,32),pe(1,Wn,2,1,`span`)(2,Gn,1,2,`bx-loading-spinner`,16),Q$1()),i&2){let n=de(2);ve(`aria-label`,n.resolvedLoadingLabel()||n.resolvedLoadingAriaLabel()),M$1(),me$1(n.resolvedLoadingLabel()?1:2)}}function Un(i,t){if(i&1&&(W(0,`div`,33),Le(1,`bx-loading-indicator`,42),Q$1()),i&2){let n=de(2);M$1(),fe(`size`,16)(`label`,n.loadingLabel()??n.loadingAriaLabel())}}function Yn(i,t){if(i&1){let n=fs();W(0,`div`,27),be$1(`keydown`,function(r){jr$1(n);let o=de();return Hr$1(o.onPanelKey(r))}),pe(1,An,3,3,`div`,28),pe(2,zn,3,6,`button`,29),W(3,`div`,30,4),be$1(`loadMore`,function(r){jr$1(n);let o=de();return Hr$1(o.requestMore(r))}),W(5,`div`,31),Gr$1(6,qn,6,7,null,null,nn,!1,$n,1,1),Q$1(),pe(9,Xn,3,2,`div`,32)(10,Un,2,2,`div`,33),Q$1()()}if(i&2){let n=Wa(4),e=de();Ya(e.panelClass()),M$1(),me$1(e.isSearchable()?1:-1),M$1(),me$1(e.showSelectAll()?2:-1),M$1(),fe(`loadMoreHasMore`,e.hasMore())(`loadMoreSuppressed`,e.isSearching())(`loadMoreLoading`,e.loading())(`loadMoreDisabled`,e.disabled()||e.isReadonly())(`loadMoreError`,e.loadError())(`loadMoreConfig`,e.loadMoreConfig())(`loadMoreTemplate`,e.loadMoreTemplate())(`loadMoreRevision`,e.options()),M$1(2),fe(`hidden`,e.isSearching())(`id`,e.controlId()+`-options`),ve(`aria-multiselectable`,!0)(`aria-label`,e.ariaLabel()||e.resolvedLabel()),M$1(),Wr$1(e.filteredOptions()),M$1(3),me$1(e.isSearching()?9:e.loading()&&!n.actionVisible()?10:-1)}}var en=class i extends pt{summaryOverflow=Xu(`summaryOverflow`);labelsAdapter=f(ze,{optional:!0});hasSelection=y(()=>!!this.internalValue()?.length||this.selectAll());resolvedSelectAllLabel=y(()=>Me$2(this.selectAllLabel(),this.labelsAdapter));selectableOptions=y(()=>this.filteredOptions().filter(t=>!t.disabled&&!t.groupDisabled));allLoadedSelected=y(()=>{let t=this.selectableOptions();return t.length>0&&t.every(n=>this.isSelected(n.value))});selectAllChecked=y(()=>this.selectAll()||this.allLoadedSelected());someSelected=y(()=>this.selectableOptions().some(t=>this.isSelected(t.value)));usesSummary=y(()=>{let t=this.internalValue()?.length??0;return this.selectionDisplay()===`tags`&&this.selectedOptions().length>this.visibleTagCount()||!!(this.selectAll()&&this.allSelectedText())||t>this.summaryThreshold()||t>=2&&(this.summaryOverflow()?.truncated()??!1)});displayedSelection=y(()=>{if(this.selectAll()&&this.allSelectedText())return Me$2(this.allSelectedText(),this.labelsAdapter);if(!this.usesSummary())return this.selectedOptionLabel();let t=this.internalValue()?.length??0;return Me$2(this.selectedCountText(),this.labelsAdapter,{count:t}).replaceAll(`{count}`,String(t))});resolvedAllSelectedTooltip=y(()=>{let t=this.allSelectedTooltip();return t===!1?``:t===void 0?this.resolvedTooltipOnTruncate()?this.selectedOptionLabel():``:Me$2(t,this.labelsAdapter)});selectionTooltip=y(()=>this.isOpen()?``:this.selectAll()?this.resolvedAllSelectedTooltip():this.resolvedTooltipOnTruncate()?this.selectionDisplay()===`tags`||this.usesSummary()?this.selectedOptionLabel():this.truncatedSelectionTooltip():``);allSelectedTooltip=g(void 0);allSelectedText=g(void 0);selectedCountText=g(`{count} selected`);summaryThreshold=g(2,{transform:Je});showSelectAll=g(!0);selectAllLabel=g(`Select all`);selectionScope=g(void 0);selectAll=Zu(!1);selectionChange=un$2();selectAllIntentChange=un$2();scope;constructor(){super(),Ee$2(()=>{let t=this.selectionScope()??this.searchTerm(),n=this.filteredOptions(),e=this.selectAll(),r=O$2(this.internalValue)??[];if(this.scope!==void 0&&t!==this.scope&&e)this.selectAll.set(!1),this.emitIntent(!1,`scope-change`,t);else if(e&&!this.disabled()&&!this.isReadonly()){let o=n.filter(x=>!x.disabled&&!x.groupDisabled&&!r.some(k=>this.compareWith()(k,x.value))).map(x=>x.value);if(o.length){let x=[...r,...o];this.updateValue(x),this.selectionChange.emit({value:x,source:`page`})}}this.scope=t})}clearSelection(){if(this.disabled()||this.isReadonly())return;let t=this.selectAll();this.selectAll.set(!1),this.clearSelectedValue([]),this.selectionChange.emit({value:[],source:`clear`}),t&&this.emitIntent(!1,`clear`)}isSelected(t){return(this.internalValue()??[]).some(n=>this.compareWith()(n,t))}toggleSelectAll(){if(this.disabled()||this.isReadonly())return;let t=!this.selectAllChecked(),n=this.selectableOptions(),e=this.internalValue()??[],r=t?[...e,...n.filter(o=>!this.isSelected(o.value)).map(o=>o.value)]:e.filter(o=>!n.some(x=>this.compareWith()(o,x.value)));this.selectAll.set(t),this.updateValue(r),this.selectionChange.emit({value:r,source:`select-all`}),this.emitIntent(t,`toggle`)}reset(){super.reset(),this.selectAll()&&(this.selectAll.set(!1),this.emitIntent(!1,`reset`))}selectOption(t){if(t.disabled||t.groupDisabled||this.disabled()||this.isReadonly())return;let n=this.isSelected(t.value),e=n?(this.internalValue()??[]).filter(r=>!this.compareWith()(r,t.value)):[...this.internalValue()??[],t.value];this.updateValue(e),this.selectionChange.emit({value:e,source:`user`}),n&&this.selectAll()&&(this.selectAll.set(!1),this.emitIntent(!1,`item-deselected`))}emitIntent(t,n,e=this.selectionScope()??this.searchTerm()){this.selectAllIntentChange.emit({selected:t,scope:e,values:this.internalValue()??[],reason:n})}static ɵfac=function(n){return new(n||i)};static ɵcmp=le({type:i,selectors:[[`bx-multi-select`]],viewQuery:function(n,e){n&1&&Yr(e.summaryOverflow,hn,5),n&2&&Qt$1()},inputs:{allSelectedTooltip:[1,`allSelectedTooltip`],allSelectedText:[1,`allSelectedText`],selectedCountText:[1,`selectedCountText`],summaryThreshold:[1,`summaryThreshold`],showSelectAll:[1,`showSelectAll`],selectAllLabel:[1,`selectAllLabel`],selectionScope:[1,`selectionScope`],selectAll:[1,`selectAll`]},outputs:{selectAll:`selectAllChange`,selectionChange:`selectionChange`,selectAllIntentChange:`selectAllIntentChange`},features:[Je$2],ngContentSelectors:_n,decls:22,vars:52,consts:[[`origin`,`cdkOverlayOrigin`],[`valueOverflow`,`bxTruncate`],[`summaryOverflow`,`bxTruncate`],[`labelOverflow`,`bxTruncate`],[`pagination`,`bxLoadMore`],[`searchInput`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-select-control`],[`type`,`button`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`blur`,`bxTooltip`,`bxTooltipHover`,`bxTooltipTouch`,`id`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`,3,`bxTruncate`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`bx-selected-tags`],[`bxTruncate`,``,`aria-hidden`,`true`,1,`bx-select-measure`],[`aria-hidden`,`true`,1,`bx-select-caret`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[3,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-field-required`],[3,`text`,`config`,`focusable`,`tooltip`,`tooltipOnTruncate`],[3,`text`,`config`,`disabled`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`data-bx-surface`,`solid`,`tabindex`,`-1`,1,`bx-select-panel`,3,`keydown`],[1,`bx-select-search-container`],[`type`,`button`,`role`,`checkbox`,1,`bx-select-all`,3,`disabled`],[`bxLoadMore`,``,1,`bx-select-menu-container`,3,`loadMore`,`loadMoreHasMore`,`loadMoreSuppressed`,`loadMoreLoading`,`loadMoreDisabled`,`loadMoreError`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`hidden`,`id`],[`role`,`status`,1,`bx-select-search-state`],[1,`bx-select-loading`],[3,`search`,`keydown.enter`,`value`,`placeholder`,`ariaLabel`],[`type`,`button`,`role`,`checkbox`,1,`bx-select-all`,3,`click`,`disabled`],[3,`checked`,`indeterminate`,`disabled`],[1,`bx-select-group`,3,`id`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-select-option`,3,`click`,`disabled`],[3,`checked`,`disabled`],[`size`,`16`,3,`name`],[`role`,`status`,1,`bx-select-empty`],[3,`size`,`label`]],template:function(n,e){if(n&1&&(Ze$2(vn),W(0,`bx-form-field`,6)(1,`div`,7)(2,`button`,8,0),be$1(`click`,function(){return e.toggleOpen()})(`keydown`,function(o){return e.onTriggerKey(o)})(`blur`,function(){return e.onTriggerBlur()}),W(4,`div`,9),pe(5,On,5,3,`span`,10),W(6,`span`,11,1),pe(8,Pn,1,2,`ng-container`,12)(9,Dn,3,1,`span`,13)(10,Ln,1,1),Q$1(),W(11,`span`,14,2),je(13),Q$1()(),Re(14),W(15,`span`,15),pe(16,Rn,1,2,`bx-loading-spinner`,16)(17,In,1,0,`bx-icon`,17),Q$1()(),pe(18,En,2,4,`button`,18),Q$1(),E_(19,Yn,11,18,`ng-template`,19),be$1(`overlayOutsideClick`,function(o){return e.onOutsideClick(o)})(`attach`,function(){return e.onPanelAttach()})(`detach`,function(){return e.onPanelDetach()})(`positionChange`,function(){return e.refreshPanel()}),Re(20,1,yn),Re(21,2,Cn),Q$1()),n&2){let r,o=Wa(3);fe(`control`,e.fieldControl)(`inline`,!0)(`tooltip`,e.tooltip())(`showLoadingIndicator`,!1)(`hint`,e.hint())(`hintEnd`,e.hintEnd())(`subscriptSizing`,e.resolvedSubscriptSizing())(`forId`,e.controlId()),M$1(),re(`has-clear`,e.showClear()),M$1(),re(`is-invalid`,e.showError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-readonly`,e.isReadonly())(`is-keyboard-focused`,e.keyboardFocused()),fe(`bxTooltip`,e.selectionTooltip())(`bxTooltipHover`,e.selectionDisplay()!==`tags`||e.selectAll()&&!!e.allSelectedText())(`bxTooltipTouch`,e.selectionDisplay()===`tags`&&!(e.selectAll()&&e.allSelectedText())?`none`:`longpress`)(`id`,e.controlId())(`disabled`,e.disabled()),ve(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel()||e.resolvedLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-required`,e.required())(`aria-readonly`,e.isReadonly())(`aria-busy`,e.loading()||e.pending()||e.isSearching())(`aria-expanded`,e.isOpen())(`aria-controls`,e.isPanelAttached()?e.controlId()+`-options`:null),M$1(3),me$1(e.label()?5:-1),M$1(),re(`is-placeholder`,!e.selectedOptionLabel()),fe(`bxTruncate`,!(e.selectionDisplay()===`tags`&&e.selectedOptions().length)&&!e.triggerTemplate()),M$1(2),me$1((r=e.triggerTemplate())?8:e.selectionDisplay()===`tags`&&e.selectedOptions().length?9:10,r),M$1(5),tt$2(e.selectedOptionLabel()),M$1(3),me$1(e.loading()||e.pending()||e.isSearching()?16:17),M$1(2),me$1(e.showClear()?18:-1),M$1(),fe(`cdkConnectedOverlayOrigin`,o)(`cdkConnectedOverlayOpen`,e.isPanelAttached())(`cdkConnectedOverlayPositions`,e.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayScrollStrategy`,e.panelScrollStrategy)(`cdkConnectedOverlayUsePopover`,e.overlayPopoverLocation(o.elementRef.nativeElement))(`cdkConnectedOverlayWidth`,o.elementRef.nativeElement.offsetWidth)}},dependencies:[mn$2,QP,XP,Yv,Mf,xf,We,Dt$1,Hx,ut,bg,Ax,ir$1,nr$1,rr$1,Px],styles:[`
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
  padding: 0;
  padding-inline-end: 0.75rem;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  outline: none;
}
.bx-select-trigger[_ngcontent-%COMP%]:hover:not(:disabled, .is-readonly) {
  background-color: var(--%NS%bx-bg-neutral-hover);
}
.bx-select-trigger[_ngcontent-%COMP%]:disabled {
  background-color: var(--%NS%bx-bg-element);
  opacity: 0.7;
  border-bottom-style: dotted;
  cursor: not-allowed;
}
.bx-select-trigger.is-readonly[_ngcontent-%COMP%] {
  cursor: default;
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
  line-height: 1.4;
  z-index: 1;
}
.bx-select-value.is-placeholder[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
}
.bx-floating-label[_ngcontent-%COMP%] {
  display: flex;
  align-items: baseline;
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
.bx-select-trigger.is-floating[_ngcontent-%COMP%]:focus-visible:not(.is-readonly)   .bx-floating-label[_ngcontent-%COMP%] {
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
  margin-inline-start: 0.5rem;
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
  min-height: 0;
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
.bx-select-option[_ngcontent-%COMP%] {
  display: flex;
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 0;
  border-radius: 0.25rem;
  background: transparent;
  color: var(--%NS%bx-text-primary);
  font: inherit;
  font-size: 0.875rem;
  line-height: 1.4;
  text-align: start;
  cursor: pointer;
}
.bx-select-option[aria-selected=true][_ngcontent-%COMP%] {
  background: var(--%NS%bx-accent-subtle);
  color: var(--%NS%bx-text-accent);
}
.bx-select-option[_ngcontent-%COMP%]:hover:not(:disabled), 
.bx-select-option[_ngcontent-%COMP%]:active:not(:disabled) {
  background: var(--%NS%bx-bg-element-hover);
}
.bx-select-option[aria-selected=true][_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--%NS%bx-accent-subtle);
}
.bx-select-option[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-accent);
  outline-offset: -2px;
}
.bx-select-option[_ngcontent-%COMP%]:disabled {
  opacity: 0.4;
  cursor: not-allowed;
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
  color: var(--%NS%bx-text-accent);
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
  --%NS%bx-glass-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  --%NS%bx-glass-surface: var(--%NS%bx-bg-surface);
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  background: var(--%NS%bx-glass-surface) !important;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
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
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]:focus-within:not(.is-disabled, :disabled, .is-readonly, [readonly], [aria-readonly=true], :has([readonly], [aria-readonly=true])), 
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]:focus-visible:not(:disabled, [readonly], [aria-readonly=true]), 
.bx-select-trigger[data-bx-surface].is-open[_ngcontent-%COMP%]:not(:disabled), 
.bx-select-trigger[data-bx-surface].is-readonly.is-keyboard-focused[_ngcontent-%COMP%]:focus-within, 
.bx-select-trigger[data-bx-surface][_ngcontent-%COMP%]:has(.bx-readonly.is-keyboard-focused):focus-within {
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
}
.bx-select-item-inner[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {
  flex: 1 1 auto;
  min-width: 0;
  white-space: normal;
  overflow-wrap: anywhere;
}
.bx-select-group[_ngcontent-%COMP%] {
  padding: 0.5rem 0.75rem;
  font-weight: 600;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
}
.bx-select-option[_ngcontent-%COMP%] {
  align-items: center;
  gap: 0.5rem;
}
.bx-select-panel[_ngcontent-%COMP%] {
  max-block-size: min(var(--%NS%bx-select-panel-height, 22rem), 70dvh);
}
.bx-select-menu-container[_ngcontent-%COMP%] {
  flex: 1 1 auto;
}
.bx-select-trigger.is-outline[_ngcontent-%COMP%] {
  border: 1px solid var(--%NS%bx-border-strong);
  border-radius: var(--%NS%bx-field-radius, 0.5rem);
}
.bx-select-trigger.is-outline.is-invalid[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-danger);
}
.bx-select-panel[_ngcontent-%COMP%] {
  background: var(--%NS%bx-select-panel-background, var(--%NS%bx-bg-surface-alt));
  border-color: var(--%NS%bx-select-panel-border, var(--%NS%bx-border-strong));
  box-shadow: var(--%NS%bx-select-panel-shadow, 0 12px 20px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1));
  isolation: isolate;
}
.bx-select-measure[_ngcontent-%COMP%] {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
  inset-inline: 0;
  box-sizing: border-box;
  padding-inline-start: 0.75rem;
  font: inherit;
  font-size: 1rem;
}
.bx-select-caret[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  inline-size: 1rem;
  block-size: 1rem;
}
.bx-select-loading[_ngcontent-%COMP%] {
  padding: 0.5rem 0.75rem;
}
.bx-select-menu-container[_ngcontent-%COMP%] {
  --%NS%bx-load-more-padding: 0.5rem 0.75rem;
}
.bx-select-search-state[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
  min-block-size: 4rem;
  padding: 0.75rem;
  color: var(--%NS%bx-text-secondary);
}
[role=listbox][hidden][_ngcontent-%COMP%] {
  display: none;
}
.bx-selected-tags[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-select-tag-gap, 0.25rem);
  min-inline-size: 0;
  max-inline-size: 100%;
  overflow: hidden;
}
.bx-selected-tags[_ngcontent-%COMP%]    > bx-tag[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
.bx-selected-tags[_ngcontent-%COMP%]    > .bx-overflow-tag[_ngcontent-%COMP%] {
  flex: 0 0 auto;
}
[role=listbox][_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-select-option-gap, 0.25rem);
}
.bx-select-option[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
.bx-select-control[_ngcontent-%COMP%] {
  position: relative;
  inline-size: 100%;
  min-inline-size: 0;
}
.bx-select-control.has-clear[_ngcontent-%COMP%]   .bx-select-container[_ngcontent-%COMP%] {
  padding-inline-end: 2rem;
}
.bx-select-control.has-clear[_ngcontent-%COMP%]   .bx-select-measure[_ngcontent-%COMP%] {
  inset-inline-end: 2rem;
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%] {
  transition-property: color;
  transition-duration: calc(0.15s * (1 - var(--%NS%bx-reduced-motion, 0)));
  transition-timing-function: ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: transparent;
  border: none;
  padding: 0.25rem;
  inline-size: 1.5rem;
  block-size: 1.5rem;
  border-radius: 0.25rem;
  color: var(--%NS%bx-text-secondary);
  cursor: pointer;
  flex-shrink: 0;
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0;
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  color: var(--%NS%bx-text-primary);
  background: var(--%NS%bx-bg-element-hover);
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.bx-select-clear.bx-btn[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: calc(1px + 0.75rem + 1rem + 0.5rem);
  transform: translateY(-50%);
  z-index: 3;
}
.bx-select-all[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border: 0;
  border-bottom: 1px solid var(--%NS%bx-border-subtle);
  background: transparent;
  color: var(--%NS%bx-text-primary);
  font: inherit;
  text-align: start;
  cursor: pointer;
}
.bx-select-all[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
}`]})};var tn=class i extends Tf{focus(t){this.hostElement.focus(t)}onReadonlyInteraction(t){!this.isReadonly()||this.hostElement.tagName!==`SELECT`||`key`in t&&t.key===`Tab`||t.preventDefault()}static ɵfac=(()=>{let t;return function(e){return(t||(t=Dn$2(i)))(e||i)}})();static ɵdir=R$1({type:i,selectors:[[`input`,`bxInput`,``],[`textarea`,`bxInput`,``],[`select`,`bxInput`,``]],hostAttrs:[1,`bx-native-control`],hostVars:12,hostBindings:function(n,e){n&1&&be$1(`blur`,function(){return e.markAsTouched()})(`pointerdown`,function(o){return e.onReadonlyInteraction(o)})(`click`,function(o){return e.onReadonlyInteraction(o)})(`keydown`,function(o){return e.onReadonlyInteraction(o)}),n&2&&(hs(`id`,e.controlId())(`disabled`,e.effectiveDisabled())(`required`,e.effectiveRequired()),ve(`readonly`,e.isReadonly()?``:null)(`aria-readonly`,e.isReadonly())(`placeholder`,e.resolvedPlaceholder())(`name`,e.name()||null)(`aria-invalid`,e.showError())(`aria-required`,e.effectiveRequired())(`aria-describedby`,e.describedBy())(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy()))},exportAs:[`bxInput`],features:[Ht$1([{provide:dy,useExisting:Mt(()=>i)}]),Je$2]})};var Kn=[[[`bx-error`]],[[`bx-hint`]]];var Qn=[`bx-error`,`bx-hint`];var Zn=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Jn=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function et(i,t){if(i&1&&Le(0,`span`),i&2){let n=t.$implicit;et$3(`inset-inline-start`,n,`%`)}}function nt(i,t){if(i&1&&(W(0,`output`,8),je(1),Q$1()),i&2){let n=de();M$1(),H_(``,n.displayWith()(n.start()),` – `,n.displayWith()(n.end()))}}var rn=class i extends Nf{labelsAdapter=f(ze,{optional:!0});start=y(()=>Math.max(this.min(),Math.min(this.max(),this.value()?.[0]??this.min())));end=y(()=>Math.max(this.start(),Math.min(this.max(),this.value()?.[1]??this.max())));startPercent=y(()=>this.max()>this.min()?(this.start()-this.min())/(this.max()-this.min())*100:0);endPercent=y(()=>this.max()>this.min()?(this.end()-this.min())/(this.max()-this.min())*100:100);resolvedStartLabel=y(()=>Me$2(this.startLabel(),this.labelsAdapter));resolvedEndLabel=y(()=>Me$2(this.endLabel(),this.labelsAdapter));ticks=y(()=>{let t=this.max()-this.min(),n=this.step();if(!this.showTickMarks()||!Number.isFinite(t)||!Number.isFinite(n)||t<=0||n<=0)return[];let e=Math.floor(t/n),r=Math.min(1e3,e);return r>0?Array.from({length:r+1},(o,x)=>Math.round(x*e/r)*n/t*100):[]});min=g(0);max=g(100);step=g(1);discrete=g(!1);showTickMarks=g(!1);displayWith=g(String);startLabel=g(`Minimum value`);endLabel=g(`Maximum value`);onRangeInput(t,n){if(this.disabled()||this.isReadonly())return;let e=t.target,r=e.valueAsNumber,o=n===`start`?[Math.min(this.end(),r),this.end()]:[this.start(),Math.max(this.start(),r)];e.value=String(n===`start`?o[0]:o[1]),this.updateValue(o)}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let t;return function(e){return(t||(t=Dn$2(i)))(e||i)}})();static ɵcmp=le({type:i,selectors:[[`bx-range-slider`]],inputs:{min:[1,`min`],max:[1,`max`],step:[1,`step`],discrete:[1,`discrete`],showTickMarks:[1,`showTickMarks`],displayWith:[1,`displayWith`],startLabel:[1,`startLabel`],endLabel:[1,`endLabel`]},features:[Je$2],ngContentSelectors:Qn,decls:13,vars:33,consts:[[3,`control`,`label`,`hint`,`hintEnd`,`tooltip`,`forId`],[`role`,`group`,1,`bx-range-slider`],[`aria-hidden`,`true`,1,`bx-range-track`],[1,`bx-range-input`],[`bxSlider`,``,`type`,`range`,3,`input`,`blur`,`id`,`min`,`max`,`step`,`value`,`disabled`],[`bxSlider`,``,`type`,`range`,3,`input`,`blur`,`min`,`max`,`step`,`value`,`disabled`],[`aria-hidden`,`true`,1,`bx-range-ticks`],[3,`inset-inline-start`],[1,`bx-range-values`]],template:function(n,e){n&1&&(Ze$2(Kn),W(0,`bx-form-field`,0)(1,`div`,1),Le(2,`div`,2),W(3,`div`,3)(4,`input`,4),be$1(`input`,function(o){return e.onRangeInput(o,`start`)})(`blur`,function(){return e.onBlur()}),Q$1()(),W(5,`div`,3)(6,`input`,5),be$1(`input`,function(o){return e.onRangeInput(o,`end`)})(`blur`,function(){return e.onBlur()}),Q$1()(),W(7,`div`,6),Gr$1(8,et,1,2,`span`,7,qu),Q$1()(),pe(10,nt,2,2,`output`,8),Re(11,0,Zn),Re(12,1,Jn),Q$1()),n&2&&(fe(`control`,e.fieldControl)(`label`,e.label())(`hint`,e.hint())(`hintEnd`,e.hintEnd())(`tooltip`,e.tooltip())(`forId`,e.controlId()),M$1(),et$3(`--%NS%bx-range-start`,e.startPercent()/100)(`--%NS%bx-range-end`,e.endPercent()/100),re(`is-readonly`,e.isReadonly()&&!e.disabled()),ve(`aria-label`,e.ariaLabel()||e.resolvedLabel()),M$1(3),fe(`id`,e.controlId())(`min`,e.min())(`max`,e.max())(`step`,e.step())(`value`,e.start())(`disabled`,e.disabled()||e.isReadonly()),ve(`aria-valuemax`,e.end())(`aria-label`,e.resolvedStartLabel())(`aria-valuetext`,e.displayWith()(e.start()))(`aria-describedby`,e.describedBy()),M$1(2),fe(`min`,e.min())(`max`,e.max())(`step`,e.step())(`value`,e.end())(`disabled`,e.disabled()||e.isReadonly()),ve(`aria-valuemin`,e.start())(`aria-label`,e.resolvedEndLabel())(`aria-valuetext`,e.displayWith()(e.end()))(`aria-describedby`,e.describedBy()),M$1(2),Wr$1(e.ticks()),M$1(2),me$1(e.discrete()?10:-1))},dependencies:[Mf,J$1],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.bx-range-slider[_ngcontent-%COMP%] {
  --%NS%bx-slider-lens-start: var(--%NS%bx-range-start);
  --%NS%bx-slider-lens-end: var(--%NS%bx-range-end);
  --%NS%bx-slider-lens-track-color: var(--%NS%bx-bg-neutral);
  --%NS%bx-slider-fill-display: none;
  position: relative;
  block-size: 2.5rem;
  inline-size: 100%;
}
.bx-range-track[_ngcontent-%COMP%] {
  box-sizing: border-box;
  height: 0.5rem;
  border: 1px solid var(--%NS%bx-border-strong);
  border-radius: 9999px;
  background: var(--%NS%bx-bg-neutral);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.16);
  position: absolute;
  inset-block-start: 50%;
  inset-inline: 0;
  transform: translateY(-50%);
}
.bx-range-track[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  inset-block: 0;
  inset-inline: calc(var(--%NS%bx-slider-thumb-size, 1.5rem) / 2 - 1px + var(--%NS%bx-range-start) * (100% + 2px - var(--%NS%bx-slider-thumb-size, 1.5rem))) calc(var(--%NS%bx-slider-thumb-size, 1.5rem) / 2 - 1px + (1 - var(--%NS%bx-range-end)) * (100% + 2px - var(--%NS%bx-slider-thumb-size, 1.5rem)));
  background: var(--%NS%bx-accent);
  border-radius: inherit;
}
.bx-range-input[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.bx-range-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  pointer-events: none;
}
.bx-range-slider.is-readonly[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {
  cursor: default;
}
.bx-range-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-slider-runnable-track {
  background: transparent;
  border-color: transparent;
  box-shadow: none;
}
.bx-range-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-range-track {
  background: transparent;
  border-color: transparent;
  box-shadow: none;
}
.bx-range-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-slider-thumb {
  pointer-events: auto;
}
.bx-range-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-range-thumb {
  pointer-events: auto;
}
.bx-range-ticks[_ngcontent-%COMP%] {
  position: absolute;
  inset-inline: calc(var(--%NS%bx-slider-thumb-size, 1.5rem) / 2);
  inset-block-start: 50%;
  pointer-events: none;
  z-index: 3;
}
.bx-range-ticks[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  position: absolute;
  inline-size: 2px;
  block-size: 4px;
  background: var(--%NS%bx-text-primary);
  transform: translate(-50%, -50%);
}
.bx-range-ticks[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:dir(rtl) {
  transform: translate(50%, -50%);
}
.bx-range-values[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}`]})};var I=new E(`HIGHLIGHT_OPTIONS`);function rt(e){return On$2([{provide:I,useValue:e}])}var h=(function(e){return e.FULL_WITH_CORE_LIBRARY_IMPORTS=`The full library and the core library were imported, only one of them should be imported!`,e.FULL_WITH_LANGUAGE_IMPORTS=`The highlighting languages were imported they are not needed!`,e.CORE_WITHOUT_LANGUAGE_IMPORTS=`The highlighting languages were not imported!`,e.LANGUAGE_WITHOUT_CORE_IMPORTS=`The core library was not imported!`,e.NO_FULL_AND_NO_CORE_IMPORTS=`Highlight.js library was not imported!`,e})(h||{});var V=(()=>{class e{constructor(){this.document=f(z$1),this.isPlatformBrowser=lt$1(f($e)),this.options=f(I,{optional:!0}),this._ready=new ot$2(null),this.ready=uM(this._ready.asObservable().pipe(ut$1(t=>!!t))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(kt$1(t=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=t,this.loadLineNumbers().pipe($t$1(i=>{i.activateLineNumbers(),this._ready.next(t)}))):(this._ready.next(t),gt)),Si$1(t=>(console.error(`[HLJS] `,t),this._ready.error(t),gt))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return Xf(()=>h.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return Xf(()=>h.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return Xf(()=>h.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return Xf(()=>h.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(kt$1(t=>this._loadLanguages(t)))}return Xf(()=>h.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(t){let i=Object.entries(this.options.languages).map(([s,G])=>_(G()).pipe($t$1(W=>t.registerLanguage(s,W))));return Qf(i).pipe(we$1(()=>t))}loadCoreLibrary(){return _(this.options.coreLibraryLoader())}loadFullLibrary(){return _(this.options.fullLibraryLoader())}loadLineNumbers(){return Be(this.options.lineNumbersLoader())}setTheme(t){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=t:this.loadTheme(t))}loadTheme(t){this._themeLinkElement=this.document.createElement(`link`),this._themeLinkElement.href=t,this._themeLinkElement.type=`text/css`,this._themeLinkElement.rel=`stylesheet`,this._themeLinkElement.media=`screen,print`,this.document.head.appendChild(this._themeLinkElement)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵprov=T({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();var _=e=>Be(e).pipe(ut$1(o=>!!o?.default),we$1(o=>o.default));var z=(()=>{class e{constructor(){this.loader=f(V),this.options=f(I,{optional:!0}),this.hljsSignal=_$1(null),this.hljs=y(()=>this.hljsSignal()),this.loader.ready.then(t=>{this.hljsSignal.set(t),this.options?.highlightOptions&&t.configure(this.options.highlightOptions)})}async highlight(t,i){return(await this.loader.ready).highlight(t,i)}async highlightAuto(t,i){return(await this.loader.ready).highlightAuto(t,i)}async highlightElement(t){(await this.loader.ready).highlightElement(t)}async highlightAll(){(await this.loader.ready).highlightAll()}async configure(t){(await this.loader.ready).configure(t)}async registerLanguage(t,i){(await this.loader.ready).registerLanguage(t,i)}async unregisterLanguage(t){(await this.loader.ready).unregisterLanguage(t)}async registerAliases(t,{languageName:i}){(await this.loader.ready).registerAliases(t,{languageName:i})}async listLanguages(){return(await this.loader.ready).listLanguages()}async getLanguage(t){return(await this.loader.ready).getLanguage(t)}async safeMode(){(await this.loader.ready).safeMode()}async debugMode(){(await this.loader.ready).debugMode()}async lineNumbersBlock(t,i){let s=await this.loader.ready;s.lineNumbersBlock&&s.lineNumbersBlock(t,i)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵprov=T({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();var j;function q(){if(!j)try{j=window?.trustedTypes?.createPolicy(`ngx-highlightjs`,{createHTML:e=>e})}catch{}return j}function J(e){return q()?.createHTML(e)||e}var U=(()=>{class e{constructor(){this._hljs=f(z),this._nativeElement=f(U$2).nativeElement,this._sanitizer=f(kg),ms({write:()=>{let t=this.code();this.setTextContent(t||``),t&&this.highlightElement(t)}}),ms({write:()=>{let t=this.highlightResult();this.setInnerHTML(t?.value),this.highlighted.emit(t)}})}setTextContent(t){requestAnimationFrame(()=>this._nativeElement.textContent=t)}setInnerHTML(t){requestAnimationFrame(()=>this._nativeElement.innerHTML=J(this._sanitizer.sanitize(Oe$2.HTML,t)||``))}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵdir=R$1({type:e})}}return e})();var ht=(()=>{class e extends U{constructor(){super(...arguments),this.code=g(null,{alias:`highlight`}),this.highlightResult=_$1(null),this.language=g.required(),this.ignoreIllegals=g(void 0,{transform:Z}),this.highlighted=un$2()}async highlightElement(t){let i=await this._hljs.highlight(t,{language:this.language(),ignoreIllegals:this.ignoreIllegals()});this.highlightResult.set(i)}static{this.ɵfac=(()=>{let t;return function(s){return(t||(t=Dn$2(e)))(s||e)}})()}static{this.ɵdir=R$1({type:e,selectors:[[``,`highlight`,``]],hostVars:2,hostBindings:function(i,s){i&2&&re(`hljs`,!0)},inputs:{code:[1,`highlight`,`code`],language:[1,`language`],ignoreIllegals:[1,`ignoreIllegals`]},outputs:{highlighted:`highlighted`},features:[Ht$1([{provide:U,useExisting:e}]),Je$2]})}}return e})();var S=Lt$1({sections:[{id:`Start`,icon:{name:`house`},collapsible:!0},{id:`Forms`,icon:{name:`text-cursor-input`},collapsible:!0},{id:`Primitives`,icon:{name:`shapes`},collapsible:!0},{id:`Navigation`,icon:{name:`panel-left`},collapsible:!0},{id:`Icons`,icon:{name:`sparkles`},collapsible:!0},{id:`Modals`,icon:{name:`panels-top-left`},collapsible:!0},{id:`Notifications`,icon:{name:`bell`},collapsible:!0},{id:`Tools`,icon:{name:`wrench`},collapsible:!0}]}),{withNav:u}=S,xe=e.map((e,a)=>u({path:e.id,loadComponent:e.id===`side-nav`?void 0:()=>import(`./chunk-C3zru8lv.js`).then(t=>t.ComponentDemo),children:e.id===`side-nav`?[{path:``,pathMatch:`full`,redirectTo:`overview`},{path:`:navId`,loadComponent:()=>import(`./chunk-C3zru8lv.js`).then(t=>t.ComponentDemo),data:{componentId:`side-nav`}}]:void 0,title:`${e.title} \xB7 Blocks`,data:{componentId:e.id}},{label:e.title,breadcrumb:e.title,section:e.group,menu:!0,order:a,icon:{name:`box`}})),D=[{path:``,pathMatch:`full`,redirectTo:`home`},u({path:`home`,loadComponent:()=>import(`./chunk-DoQkYjVZ.js`).then(e=>e.Home),title:`Blocks`},{label:`Overview`,breadcrumb:`Home`,section:`Start`,icon:{name:`house`},menu:!0,root:!0,order:1}),u({path:`appearance`,loadComponent:()=>import(`./chunk-qtuXZdtT.js`).then(e=>e.Appearance),title:`Appearance · Blocks`},{label:`Appearance`,breadcrumb:`Appearance`,section:`Start`,menu:!0,order:2}),u({path:`components`,title:`Components · Blocks`,children:[{path:``,pathMatch:`full`,loadComponent:()=>import(`./chunk-CW_k70Sh.js`).then(e=>e.ComponentIndex)},...xe]},{label:`All components`,breadcrumb:`Components`,section:`Start`,menu:!0,order:3}),u({path:`icon-catalog`,loadComponent:()=>import(`./chunk-B1YVs-HG.js`).then(e=>e.IconCatalog),title:`Icon catalog · Blocks`},{label:`Icon catalog`,breadcrumb:`Icon catalog`,section:`Tools`,menu:!0,order:4}),u({path:`modal`,loadComponent:()=>import(`./chunk-5zwZ1tGW.js`).then(e=>e.Modal),title:`Modal configurator · Blocks`},{label:`Modal configurator`,breadcrumb:`Modal configurator`,section:`Tools`,menu:!0,order:5}),u({path:`toastr`,loadComponent:()=>import(`./chunk-B9QlxB-B.js`).then(e=>e.Toastr),title:`Toast configurator · Blocks`},{label:`Toast configurator`,breadcrumb:`Toast configurator`,section:`Tools`,menu:!0,order:6}),{path:`glass`,pathMatch:`full`,redirectTo:`appearance`},{path:`**`,redirectTo:`components`}];(class e{static ɵfac=function(t){return new(t||e)};static ɵmod=Ge({type:e});static ɵinj=qe({imports:[HO.forRoot(D),HO]})});var A={providers:[oI(),$k(),ju(()=>{let e=f(z$1),a=null;try{a=e.defaultView?.localStorage.getItem(`theme-palette`)??null}catch{}let t=f(si$1);Ev(a)||t.setPalette(`carbon-cobalt`),t.appearance().quality===`enhanced`&&t.setAppearance({quality:`auto`})}),BO(D,jO({scrollPositionRestoration:`enabled`,anchorScrolling:`enabled`})),At$1(S.config),rt({coreLibraryLoader:()=>import(`./chunk-CNLY_5RV.js`),languages:{typescript:()=>import(`./chunk-Da6TFjtL.js`),scss:()=>import(`./chunk--Sjxt33j.js`),xml:()=>import(`./chunk-Bs3bRvME.js`)}})]};var M=class e{static ɵfac=function(t){return new(t||e)};static ɵcmp=le({type:e,selectors:[[`app-blocks-logo`]],hostAttrs:[`aria-hidden`,`true`],decls:98,vars:0,consts:[[`width`,`805`,`height`,`776`,`viewBox`,`0 0 805 776`,`fill`,`none`,`xmlns`,`http://www.w3.org/2000/svg`],[`d`,`M27.0656 12.8256H776.066V761.826H27.0656V12.8256Z`,`fill`,`url(#paint0_radial_2_133)`],[`filter`,`url(#filter0_f_2_133)`],[`d`,`M647.919 48.2668L90.9866 106.803C64.6221 109.574 45.4959 133.193 48.2669 159.557L103.458 684.665C106.229 711.029 129.848 730.155 156.212 727.384L713.145 668.848C739.509 666.077 758.635 642.459 755.864 616.094L700.673 90.9865C697.902 64.6221 674.283 45.4958 647.919 48.2668Z`,`fill`,`var(--blocks-logo-shadow)`,`fill-opacity`,`0.48`],[`d`,`M647.919 48.2668L90.9866 106.803C64.6221 109.574 45.4959 133.193 48.2669 159.557L103.458 684.665C106.229 711.029 129.848 730.155 156.212 727.384L713.145 668.848C739.509 666.077 758.635 642.459 755.864 616.094L700.673 90.9865C697.902 64.6221 674.283 45.4958 647.919 48.2668Z`,`fill`,`url(#paint1_linear_2_133)`,`stroke-width`,`3`,`stroke`,`url(#paint2_linear_2_133)`],[`id`,`mask0_2_133`,`maskUnits`,`userSpaceOnUse`,`x`,`48`,`y`,`48`,`width`,`709`,`height`,`680`,2,`mask-type`,`luminance`],[`d`,`M647.919 48.2668L90.9866 106.803C64.6221 109.574 45.4959 133.193 48.2669 159.557L103.458 684.665C106.229 711.029 129.848 730.155 156.212 727.384L713.145 668.848C739.509 666.077 758.635 642.459 755.864 616.094L700.673 90.9865C697.902 64.6221 674.283 45.4958 647.919 48.2668Z`,`fill`,`white`],[`mask`,`url(#mask0_2_133)`],[`d`,`M695.656 43.2495L43.2495 111.82L108.475 732.402L760.882 663.831L695.656 43.2495Z`,`fill`,`url(#paint3_radial_2_133)`],[`filter`,`url(#filter1_f_2_133)`],[`d`,`M393.862 300.203C430.447 313.452 484.256 308.802 528.698 282.009`,`stroke-width`,`64`,`stroke-linecap`,`round`,`stroke`,`var(--bx-primary)`,`stroke-opacity`,`0.1`],[`d`,`M393.862 300.203C430.447 313.452 484.256 308.802 528.698 282.009`,`stroke-width`,`13`,`stroke-linecap`,`round`,`stroke`,`url(#paint4_linear_2_133)`],[`d`,`M401.191 293.4C436.572 304.764 483.21 298.856 521.895 274.68`,`stroke-width`,`2.5`,`stroke-linecap`,`round`,`stroke`,`color-mix(in srgb, var(--bx-primary) 8%, var(--blocks-logo-specular))`,`stroke-opacity`,`0.72`],[`d`,`M87.6744 199.658C245.29 120.75 465.028 87.5996 647.647 112.648`,`stroke-width`,`2.5`,`stroke`,`url(#paint5_linear_2_133)`],[`d`,`M100.968 211.332C241.622 143.257 430.531 113.347 582.74 126.508`,`stroke-width`,`1.2`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.12`],[`d`,`M186.583 652.801C342.403 671.617 549.526 642.809 691.594 578.607`,`stroke-width`,`1.4`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.1`],[`d`,`M92.7128 113.66L647.656 55.333C670.725 52.9084 691.391 69.6439 693.816 92.7128L748.798 615.831C751.223 638.9 734.487 659.567 711.418 661.991L156.475 720.318C133.406 722.743 112.74 706.007 110.315 682.939L55.3331 159.82C52.9084 136.751 69.6439 116.085 92.7128 113.66Z`,`stroke-width`,`1.2`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.18`],[`id`,`mask1_2_133`,`maskUnits`,`userSpaceOnUse`,`x`,`55`,`y`,`55`,`width`,`695`,`height`,`666`,2,`mask-type`,`alpha`],[`d`,`M647.656 55.3331L92.7128 113.66C69.6439 116.085 52.9084 136.751 55.3331 159.82L110.315 682.939C112.74 706.008 133.406 722.743 156.475 720.318L711.418 661.991C734.487 659.567 751.223 638.9 748.798 615.831L693.816 92.7128C691.391 69.6439 670.725 52.9085 647.656 55.3331Z`,`fill`,`#D9D9D9`],[`mask`,`url(#mask1_2_133)`],[`filter`,`url(#filter2_f_2_133)`],[`d`,`M532.066 324.826C616.013 324.826 684.066 256.773 684.066 172.826C684.066 88.8783 616.013 20.8256 532.066 20.8256C448.118 20.8256 380.066 88.8783 380.066 172.826C380.066 256.773 448.118 324.826 532.066 324.826Z`,`fill`,`var(--bx-primary)`,`fill-opacity`,`0.1`],[`d`,`M532.066 291.826C597.787 291.826 651.066 238.548 651.066 172.826C651.066 107.104 597.787 53.8256 532.066 53.8256C466.344 53.8256 413.066 107.104 413.066 172.826C413.066 238.548 466.344 291.826 532.066 291.826Z`,`fill`,`url(#paint6_radial_2_133)`,`stroke-width`,`3.5`,`stroke`,`url(#paint7_linear_2_133)`],[`d`,`M640.066 172.826C640.066 232.472 591.712 280.826 532.066 280.826C472.419 280.826 424.066 232.472 424.066 172.826C424.066 113.179 472.419 64.8256 532.066 64.8256C591.712 64.8256 640.066 113.179 640.066 172.826Z`,`stroke-width`,`1.2`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.22`],[`d`,`M522.066 255.826C567.905 255.826 605.066 222.247 605.066 180.826C605.066 139.404 567.905 105.826 522.066 105.826C476.226 105.826 439.066 139.404 439.066 180.826C439.066 222.247 476.226 255.826 522.066 255.826Z`,`fill`,`url(#paint8_radial_2_133)`],[`filter`,`url(#filter3_f_2_133)`],[`d`,`M447.066 188.826C471.066 140.826 506.066 117.826 538.066 134.826C565.066 149.826 580.066 184.826 616.066 168.826`,`stroke-width`,`34`,`stroke-linecap`,`round`,`stroke`,`var(--bx-primary)`,`stroke-opacity`,`0.74`],[`d`,`M447.066 188.826C471.066 140.826 506.066 117.826 538.066 134.826C565.066 149.826 580.066 184.826 616.066 168.826`,`stroke-width`,`12`,`stroke-linecap`,`round`,`stroke`,`url(#paint9_linear_2_133)`],[`d`,`M456.066 183.826C477.066 146.826 507.066 129.826 532.066 143.826C556.066 156.826 571.066 184.826 600.066 172.826`,`stroke-width`,`2.4`,`stroke-linecap`,`round`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.86`],[`d`,`M460.066 123.826C478.066 101.826 505.066 88.8256 532.066 85.8256`,`stroke-width`,`5`,`stroke-linecap`,`round`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.7`],[`d`,`M465.066 130.826C478.066 117.826 493.066 108.826 508.066 103.826`,`stroke-width`,`2`,`stroke-linecap`,`round`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.52`],[`d`,`M482.066 111.326C484.551 111.326 486.566 109.311 486.566 106.826C486.566 104.34 484.551 102.326 482.066 102.326C479.58 102.326 477.566 104.34 477.566 106.826C477.566 109.311 479.58 111.326 482.066 111.326Z`,`fill`,`var(--blocks-logo-specular)`,`fill-opacity`,`0.86`],[`id`,`filter0_f_2_133`,`x`,`0`,`y`,`0`,`width`,`804.131`,`height`,`775.651`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`flood-opacity`,`0`,`result`,`BackgroundImageFix`],[`mode`,`normal`,`in`,`SourceGraphic`,`in2`,`BackgroundImageFix`,`result`,`shape`],[`stdDeviation`,`24`,`result`,`effect1_foregroundBlur_2_133`],[`id`,`filter1_f_2_133`,`x`,`281.853`,`y`,`170.004`,`width`,`358.85`,`height`,`249.357`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`stdDeviation`,`40`,`result`,`effect1_foregroundBlur_2_133`],[`id`,`filter2_f_2_133`,`x`,`300.066`,`y`,`-59.1744`,`width`,`464`,`height`,`464`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`id`,`filter3_f_2_133`,`x`,`406.062`,`y`,`88.2501`,`width`,`251.008`,`height`,`141.579`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`stdDeviation`,`12`,`result`,`effect1_foregroundBlur_2_133`],[`id`,`paint0_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(401.566 349.876) scale(434.42)`],[`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.105`],[`offset`,`0.56`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.025`],[`offset`,`1`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0`],[`id`,`paint1_linear_2_133`,`x1`,`98.0511`,`y1`,`131.158`,`x2`,`667.589`,`y2`,`698.833`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-surface)`,`stop-opacity`,`0.34`],[`offset`,`0.42`,`stop-color`,`var(--blocks-logo-surface)`,`stop-opacity`,`0.15`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-surface)`,`stop-opacity`,`0.07`],[`id`,`paint2_linear_2_133`,`x1`,`43.2495`,`y1`,`111.82`,`x2`,`731.541`,`y2`,`698.267`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.82`],[`offset`,`0.25`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.3`],[`offset`,`0.55`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.52`],[`offset`,`0.8`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.18`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.58`],[`id`,`paint3_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(537.769 235.526) rotate(-6) scale(439.52 418.08)`],[`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.4`],[`offset`,`0.3`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.2`],[`offset`,`0.7`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.055`],[`id`,`paint4_linear_2_133`,`x1`,`393.443`,`y1`,`296.225`,`x2`,`438.356`,`y2`,`354.826`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0`],[`offset`,`0.4`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.44`],[`offset`,`0.68`,`stop-color`,`color-mix(in srgb, var(--bx-primary) 44%, var(--blocks-logo-specular))`,`stop-opacity`,`0.8`],[`id`,`paint5_linear_2_133`,`x1`,`81.9226`,`y1`,`144.933`,`x2`,`218.003`,`y2`,`363.352`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.78`],[`offset`,`0.48`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.2`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0`],[`id`,`paint6_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(486.846 113.326) scale(195.16)`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.54`],[`offset`,`0.28`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.24`],[`offset`,`0.7`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.075`],[`offset`,`1`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.16`],[`id`,`paint7_linear_2_133`,`x1`,`429.726`,`y1`,`63.3456`,`x2`,`639.166`,`y2`,`291.826`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.94`],[`offset`,`0.3`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.36`],[`offset`,`0.66`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.56`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.82`],[`id`,`paint8_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(508.786 165.826) scale(112.88 102)`],[`stop-color`,`color-mix(in srgb, var(--bx-primary) 10%, var(--blocks-logo-specular))`,`stop-opacity`,`0.96`],[`offset`,`0.18`,`stop-color`,`color-mix(in srgb, var(--bx-primary) 52%, var(--blocks-logo-specular))`,`stop-opacity`,`0.9`],[`offset`,`0.48`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.66`],[`id`,`paint9_linear_2_133`,`x1`,`447.066`,`y1`,`135.211`,`x2`,`498.003`,`y2`,`236.364`,`gradientUnits`,`userSpaceOnUse`],[`offset`,`0.34`,`stop-color`,`color-mix(in srgb, var(--bx-primary) 68%, var(--blocks-logo-specular))`,`stop-opacity`,`0.88`],[`offset`,`0.58`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.98`],[`offset`,`0.84`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.86`]],template:function(t,s){t&1&&(Hb(),us(0,`svg`,0),Un$2(1,`path`,1),us(2,`g`,2),Un$2(3,`path`,3),ds(),Un$2(4,`path`,4),us(5,`mask`,5),Un$2(6,`path`,6),ds(),us(7,`g`,7),Un$2(8,`path`,8),us(9,`g`,9),Un$2(10,`path`,10),ds(),Un$2(11,`path`,11)(12,`path`,12)(13,`path`,13)(14,`path`,14)(15,`path`,15),ds(),Un$2(16,`path`,16),us(17,`mask`,17),Un$2(18,`path`,18),ds(),us(19,`g`,19)(20,`g`,20),Un$2(21,`path`,21),ds()(),Un$2(22,`path`,22)(23,`path`,23)(24,`path`,24),us(25,`g`,25),Un$2(26,`path`,26),ds(),Un$2(27,`path`,27)(28,`path`,28)(29,`path`,29)(30,`path`,30)(31,`path`,31),us(32,`defs`)(33,`filter`,32),Un$2(34,`feFlood`,33)(35,`feBlend`,34)(36,`feGaussianBlur`,35),ds(),us(37,`filter`,36),Un$2(38,`feFlood`,33)(39,`feBlend`,34)(40,`feGaussianBlur`,37),ds(),us(41,`filter`,38),Un$2(42,`feFlood`,33)(43,`feBlend`,34)(44,`feGaussianBlur`,37),ds(),us(45,`filter`,39),Un$2(46,`feFlood`,33)(47,`feBlend`,34)(48,`feGaussianBlur`,40),ds(),us(49,`radialGradient`,41),Un$2(50,`stop`,42)(51,`stop`,43)(52,`stop`,44),ds(),us(53,`linearGradient`,45),Un$2(54,`stop`,46)(55,`stop`,47)(56,`stop`,48),ds(),us(57,`linearGradient`,49),Un$2(58,`stop`,50)(59,`stop`,51)(60,`stop`,52)(61,`stop`,53)(62,`stop`,54),ds(),us(63,`radialGradient`,55),Un$2(64,`stop`,56)(65,`stop`,57)(66,`stop`,58)(67,`stop`,44),ds(),us(68,`linearGradient`,59),Un$2(69,`stop`,60)(70,`stop`,61)(71,`stop`,62)(72,`stop`,44),ds(),us(73,`linearGradient`,63),Un$2(74,`stop`,64)(75,`stop`,65)(76,`stop`,66),ds(),us(77,`radialGradient`,67),Un$2(78,`stop`,68)(79,`stop`,69)(80,`stop`,70)(81,`stop`,71),ds(),us(82,`linearGradient`,72),Un$2(83,`stop`,73)(84,`stop`,74)(85,`stop`,75)(86,`stop`,76),ds(),us(87,`radialGradient`,77),Un$2(88,`stop`,78)(89,`stop`,79)(90,`stop`,80)(91,`stop`,44),ds(),us(92,`linearGradient`,81),Un$2(93,`stop`,60)(94,`stop`,82)(95,`stop`,83)(96,`stop`,84)(97,`stop`,44),ds()()())},styles:[`
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
}`]})};function ke(e,a){if(e&1&&(W(0,`a`,2),Le(1,`app-blocks-logo`),W(2,`span`),je(3),Q$1()()),e&2){let t=de();ve(`aria-label`,t.title()),M$1(3),tt$2(t.title())}}var w=class e{config={persistenceKey:`blocks.playground.navigation.v1`,ariaLabel:`Component documentation`,collapsible:!1,showItemIcons:!1,showSectionIcons:!1};title=g.required();static ɵfac=function(t){return new(t||e)};static ɵcmp=le({type:e,selectors:[[`app-sidenav`]],inputs:{title:[1,`title`]},decls:2,vars:2,consts:[[3,`config`,`collapsed`],[`bxSideNavHeader`,``],[`routerLink`,`/home`,1,`brand`]],template:function(t,s){t&1&&(W(0,`bx-side-nav`,0),E_(1,ke,4,2,`ng-template`,1),Q$1()),t&2&&fe(`config`,s.config)(`collapsed`,!1)},dependencies:[ee,un$1,xE,M],styles:[`
[_nghost-%COMP%] {
  display: contents;
}
.brand[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  color: var(--%NS%bx-text-primary);
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 600;
}
app-blocks-logo[_ngcontent-%COMP%] {
  display: block;
  flex: none;
  width: 2rem;
  height: 2rem;
}
.brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  min-width: 0;
  overflow-wrap: anywhere;
}`]})};var Ce=()=>({useTopLayer:!0});var Ee=(e,a)=>a.id;function Se(e,a){if(e&1){let t=fs();W(0,`bx-menu-item`,17),be$1(`action`,function(){let h=jr$1(t).$implicit,ve=de(2);return Hr$1(ve.theme.setPalette(h.id))}),Q$1()}if(e&2){let t=a.$implicit,s=de(2);fe(`label`,t.label)(`icon`,s.selectedThemeId()===t.id?`check`:void 0)}}function Me(e,a){if(e&1&&(W(0,`bx-menu`),Gr$1(1,Se,1,2,`bx-menu-item`,16,Ee),Q$1()),e&2){let t=de();M$1(),Wr$1(t.availableThemes)}}var O=class e{document=f(z$1);highlight=f(V);theme=f(si$1);availableThemes=this.theme.palettes;selectedThemeId=this.theme.palette;selectedThemeLabel=this.theme.paletteLabel;selectedPalette=y(()=>this.availableThemes.find(a=>a.id===this.selectedThemeId())??this.availableThemes[0]);isDarkMode=y(()=>this.theme.activeTheme()===`dark`);constructor(){Ee$2(()=>{let a=this.isDarkMode();this.document.documentElement.setAttribute(`data-theme`,a?`dark`:`light`),this.document.defaultView&&this.highlight.setTheme(a?`assets/styles/vs2015.css`:`assets/styles/github.css`)})}toggleTheme(){this.theme.setApplicationTheme(this.isDarkMode()?`light`:`dark`)}static ɵfac=function(t){return new(t||e)};static ɵcmp=le({type:e,selectors:[[`app-root`]],decls:25,vars:10,consts:[[`themeMenu`,``],[`href`,`#main-content`,1,`skip-link`],[1,`app-container`],[`title`,`Blocks`],[1,`app-main`],[`data-bx-light-scope`,``,`bxSurface`,``,`aria-label`,`Playground appearance`,1,`app-toolbar`,3,`bxOverlayContext`],[1,`toolbar-label`],[1,`toolbar-actions`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`routerLink`,`/appearance`,`aria-label`,`Configure appearance for the whole playground`,1,`appearance-button`],[`name`,`sliders-horizontal`,`size`,`20`],[`bx-button`,``,`type`,`button`,`bxTransition`,`fade`,`placement`,`bottom`,`variant`,`tonal`,`color`,`grayscale`,`aria-label`,`Choose theme palette`,3,`bxDropdown`],[`aria-hidden`,`true`,1,`toolbar-palette-swatches`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`theme-mode-toggle`,3,`click`],[`size`,`20`,3,`name`],[`id`,`main-content`,`tabindex`,`-1`,1,`app-content-container`],[3,`label`,`icon`],[3,`action`,`label`,`icon`]],template:function(t,s){if(t&1&&(W(0,`a`,1),je(1,`Skip to content`),Q$1(),W(2,`div`,2),Le(3,`app-sidenav`,3),W(4,`div`,4)(5,`header`,5)(6,`span`,6),je(7,`Component playground`),Q$1(),W(8,`div`,7)(9,`a`,8),Le(10,`bx-icon`,9),W(11,`span`),je(12,`Appearance`),Q$1()(),W(13,`button`,10)(14,`span`,11),Le(15,`span`)(16,`span`),Q$1(),je(17),Le(18,`bx-icon`,12),Q$1(),W(19,`button`,13),be$1(`click`,function(){return s.toggleTheme()}),Le(20,`bx-icon`,14),Q$1()()(),W(21,`main`,15),Le(22,`router-outlet`),Q$1()()(),E_(23,Me,3,0,`ng-template`,null,0,Qm)),t&2){let h=Wa(24);M$1(5),fe(`bxOverlayContext`,Vk(9,Ce)),M$1(8),fe(`bxDropdown`,h),M$1(2),et$3(`background-color`,s.selectedPalette().colors[0]),M$1(),et$3(`background-color`,s.selectedPalette().colors[1]),M$1(),tt$2(s.selectedThemeLabel()),M$1(2),ve(`aria-label`,s.isDarkMode()?`Switch to light theme`:`Switch to dark theme`),M$1(),fe(`name`,s.isDarkMode()?`sun`:`moon`)}},dependencies:[tv,xE,w,xf,Dt$1,_x,Dx,Nx,kx,mn$2],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-height: 100dvh;
}
.app-container[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  min-height: 100dvh;
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
.toolbar-palette-swatches[_ngcontent-%COMP%] {
  display: inline-flex;
  flex: none;
  align-items: center;
  margin-inline-end: 0.5rem;
}
.toolbar-palette-swatches[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {
  width: 0.7rem;
  height: 0.7rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 50%;
}
.toolbar-palette-swatches[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {
  margin-inline-start: -0.2rem;
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
  .app-main[_ngcontent-%COMP%] {
    width: 100%;
  }
  .app-toolbar[_ngcontent-%COMP%] {
    min-height: 3.75rem;
    padding-inline: 1rem;
    padding-inline-start: 3rem;
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
}`]})};QA(O,s(r({},A),{providers:[$k(),...A.providers]})).catch(e=>console.error(e));export{ee as A,dr as C,ut as D,qa as E,sn$1 as M,un$1 as N,za as O,We as S,ki as T,Ka as _,Ue as a,Ua as b,en as c,$a as d,Ba as f,Ha as g,Ga as h,Qe as i,pn$1 as j,e as k,rn as l,Fa as m,J$1 as n,Ye as o,De as p,Ke as r,Ze as s,ht as t,tn as u,Qn$1 as v,ja as w,Va as x,Ti as y};