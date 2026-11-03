import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{$n as er$1,A as Fl,Ai as ve$1,Ar as ks,At as Pe,Bi as xr$1,Bn as ba,Br as m1,Bt as Re,C as E$1,Cn as Zn$2,Cr as j$1,Ct as Ob,D as Et$3,Di as uv,Dn as _F,Dr as jt$3,E as Er$1,Ei as ut$3,En as Zt$2,Er as jr$1,Et as P$1,F as Gi$1,Fi as vx,Fn as ar$1,Fr as ln$1,Ft as Qs,G as Ht$3,Gi as yy,H as He,Hi as yr$1,Hr as mk,Ht as S,I as Gl,Ii as we$2,In as at$2,Ir as lr$1,It as Qt$2,J as II,Ji as zr$1,Jn as cv,Jt as T7,K as Hy,Ki as z$2,Kr as ne$1,Kt as Sr$1,L as Gn$2,Li as wn$2,Ln as av,Lr as lt$2,Lt as R$1,M as G,Mi as vk,Mt as Pn$1,Ni as vt$2,Nn as ae$2,Nr as l6,O as Fd,Oi as v,On as _a,Or as kF,P as Gf,Pi as vv,Pn as an$2,Pt as Q1,Q as Jn$3,Qn as dn$1,R as Gr$1,Ri as x,Rr as lv,Sn as Z0,St as OT,T as EP,Ti as uo$1,Tn as Zs,U as Hf,Un as bt$2,Ur as mt$2,Ut as Sa,Vi as yO,Vn as be$1,Vt as Rt$3,W as Hr$1,Wr as nE,Wt as Se$2,Xt as Tr$1,Y as J$1,Yi as zt$3,Yr as oF,Yt as Ta,Z as J9,Zt as U$2,_ as Bt$3,_n as Yb,_r as hn$2,_t as Ne$3,ai as pe,an as Vl,ar as fh,at as Kf,b as De$1,bn as Ys,c as AM,cn as Wf,ct as Ll,d as Ap,di as qf,dn as X0,dr as h1,dt as Mc,ei as p,er as es,et as Jx,f as Ax,fi as qn$2,fn as XF,ft as Mn$2,g as Bi$1,gn as YF,gt as N7,hn as Y1,hr as hh,i as $r$1,ii as pb,in as V$2,ir as fO,j as Fo,ji as vi$1,jn as _u,jr as kt$3,jt as Pl,k as Fe,kn as _i$1,kr as kl,l as Ag,ln as Wn$2,lr as g_,lt as Lr$1,mi as rs,mr as hT,mt as N,n as $f,nn as Ur$1,nr as ex,nt as K0,oi as pf,on as W0,or as fn$2,ot as Ks,p as B$1,pi as qr$1,pn as Xs,pr as hO,pt as Mr$1,q as I7,qi as z0,qn as ce,qt as St$2,r as $n$2,rn as Uv,rr as f1,rt as K1,s as AF,si as pt$3,sr as ft$2,st as L$1,ti as pF,tr as et$2,tt as K,u as Al,ui as qe,un as Wt$3,ur as gr$1,vn as Yf,w as E0,wi as ue,wn as Zo,wr as je,wt as Oe$1,x as Dn$2,xi as uO,xn as Z,xr as ie$1,xt as O7,y as D1,yi as te$1,yn as Yo,yt as Nt$2,z as H,zi as xe,zr as m}from"./chunk-BjKrh6Fv.js";var ae$1=new E$1(`NAVIGATION_CONFIG`);var dt$2=new E$1(`NAVIGATION_ACCESS_ADAPTER`);var oe=class i{router=p(Lr$1);config=p(ae$1,{optional:!0});i18n=p(Se$2,{optional:!0});accessAdapter=p(dt$2,{optional:!0});navEnd=J9(this.router.events.pipe(Bt$3(t=>t instanceof Zn$2)));current=v(()=>(this.navEnd(),this.i18n?.version?.(),this.resolveCurrent(this.router.routerState.snapshot.root)));routeBase=v(()=>this.accessAdapter?.resolveBaseRoute());routes=v(()=>(this.navEnd(),this.i18n?.version?.(),this.extractRoutes(this.router.config)));baseRoute=v(()=>{let t=this.routes(),e=this.routeBase(),n,a=c=>{for(let v of c){if(v.data?.root&&(n||(n=v.route),e&&v.route.startsWith(e)))return v.route;if(v.children?.length){let p=a(v.children);if(p)return p}}};return a(t)??n??e});menu=v(()=>this.buildMenu(this.routes()));menuGroups=v(()=>{let t=[...this.config?.sections??[]].sort((n,a)=>(n.order??Number.POSITIVE_INFINITY)-(a.order??Number.POSITIVE_INFINITY)),e=new Map(t.map(n=>[n.id,{id:n.id,title:ne$1(n.title??n.id,this.i18n),items:[]}]));for(let n of this.flattenRoutes(this.menu())){if(!n.visible||n.data?.menu===!1)continue;let a=n.section??``,o=e.get(a);o||(o={id:a,title:a,items:[]},e.set(a,o)),o.items.push(s(r({},n),{children:void 0}))}return[...e.values()].filter(n=>n.items.length>0)});menuTreeGroups=v(()=>{this.i18n?.version?.();let t=[...this.config?.sections??[]].sort((n,a)=>(n.order??1/0)-(a.order??1/0)),e=new Map(t.map(n=>[n.id,s(r({},n),{title:ne$1(n.title??n.id,this.i18n),items:[]})]));return this.groupTree(this.menu(),e),[...e.values()].filter(n=>n.items.length>0)});navigateBack(){let t=this.current().breadcrumbs;if(t.length>1){let e=t[t.length-2];this.router.navigateByUrl(e.route)}else this.router.navigateByUrl(this.routeBase()??`/`)}groupTree(t,e,n=``,a){for(let o of t){let c=o.section??n,v=e.get(c);if(v||(v={id:c,title:c,items:[]},e.set(c,v)),!o.visible||o.data?.hidden)continue;if(o.data?.menu===!1){this.groupTree(o.children??[],e,c,c===n?a:void 0);continue}let p=s(r({},o),{section:c,children:[]});(a&&c===n?a.children??=[]:v.items).push(p),this.groupTree(o.children??[],e,c,p)}}includeBreadcrumb(t){if(t.data?.hidden&&!this.config?.includeHiddenInBreadcrumbs)return!1;let e=this.config?.sections?.find(n=>n.id===t.section);return t.showInBreadcrumbs??t.data?.showInBreadcrumbs??e?.showInBreadcrumbs??!0}extractRoutes(t,e=[],n){let a=[];for(let o of t){if(o.redirectTo||this.accessAdapter&&!this.accessAdapter.canAccessMenu(o.data??{}))continue;let c=o.path??``,v=c?[...e,c]:[...e],p=`/`+v.filter(Boolean).join(`/`),N=o.data?.nav,O=o.children?.length?this.extractRoutes(o.children,v,N?.section??n):[];if(!N){a.push(...O);continue}let P={id:p,route:p,label:this.resolveNavText(N.label,{snapshot:void 0})??``,icon:N.icon,showInBreadcrumbs:N.showInBreadcrumbs,section:N.section??n,visible:N.visible?N.visible():!0,data:N,children:O};a.push(P)}return this.sortNavigationItems(a)}resolveCurrent(t){let e=t,n;for(;e;){let P=e.children.find(F=>F.outlet===`primary`)??null;if(!P){n=e;break}e=P}if(!n)return{breadcrumbs:[]};let a=n.pathFromRoot.flatMap(P=>P.url.map(F=>F.path)).filter(Boolean),o=[],c=this.flattenRoutes(this.routes()),v=``;for(let P of a){v+=`/`+P;let F=this.matchRouteToUrl(c,v);if(F?.data&&this.includeBreadcrumb(F)){let J={snapshot:n},Y=this.resolveNavText(F.data.breadcrumb,J)??this.resolveNavText(F.data.label,J);Y&&o[o.length-1]?.label!==Y&&o.push({label:Y,route:v})}}let p=n.routeConfig?.data?.nav,N=`/`+a.join(`/`),O;return p&&!p.hidden&&(O={id:N,route:N,label:this.resolveNavText(p.label,{snapshot:n})??``,icon:p.icon,showInBreadcrumbs:p.showInBreadcrumbs,section:p.section,visible:p.visible?p.visible():!0,data:p}),{current:O,breadcrumbs:o}}buildMenu(t){return t.map(e=>{if(!e.visible||e.data?.hidden)return null;let n=this.buildMenu(e.children??[]);return!(e.visible&&e.data?.menu!==!1)&&!n.length?null:s(r({},e),{children:n})}).filter(e=>e!==null)}sortNavigationItems(t){let e=this.config?.sortItems;return[...t].sort((n,a)=>{if(e)return e(n,a);let o=n.data?.order??Number.POSITIVE_INFINITY,c=a.data?.order??Number.POSITIVE_INFINITY;return o!==c?o-c:n.label.localeCompare(a.label)})}matchRouteToUrl(t,e){return t.find(a=>a.route===e)||t.find(a=>a.route.includes(`:`)?new RegExp(`^`+a.route.replace(/:[^\s/]+/g,`([^/]+)`)+`$`).test(e):!1)}flattenRoutes(t){return t.reduce((e,n)=>(e.push(n),n.children&&e.push(...this.flattenRoutes(n.children)),e),[])}resolveNavText(t,e){if(!t)return;let n=typeof t==`function`?t(e):t;return Hr$1(n)?this.i18n?.translate(n.key,{route:e.snapshot})??n.key:n}static ɵfac=function(e){return new(e||i)};static ɵprov=V$2({token:i,factory:i.ɵfac,providedIn:`root`})};var Ct$1=(i,t)=>t.route;function Nt$1(i,t){if(i&1&&(P$1(0,`span`,1),Re(1),L$1()),i&2){let e=ae$2().$implicit;S(),je(e.label)}}function St$1(i,t){if(i&1&&(P$1(0,`a`,2),Re(1),L$1(),Oe$1(2,`bx-icon`,3)),i&2){let e=ae$2().$implicit,n=ae$2(2);te$1(`routerLink`,e.route),S(),je(e.label),S(),te$1(`name`,n.divider())}}function Tt$1(i,t){if(i&1&&ce(0,Nt$1,2,1,`span`,1)(1,St$1,3,3),i&2){let e=t.$index,n=t.$count;ue(e===n-1?0:1)}}function It$2(i,t){if(i&1&&(P$1(0,`nav`,0),xr$1(1,Tt$1,2,1,null,null,Ct$1),L$1()),i&2){let e=ae$2();j$1(`aria-label`,e.ariaLabel()),S(),Sr$1(e.current().breadcrumbs)}}var mt$1=class i{navigationService=p(oe);a11y=p(He);isAnimated=v(()=>!this.a11y.isReducedMotion());minimumBreadcrumbs=m(2);divider=m(`chevron-right`);showBreadcumbs=v(()=>{let t=Math.max(1,this.minimumBreadcrumbs());return this.current().breadcrumbs.length>=t});ariaLabel=v(()=>`Breadcrumbs: ${this.current().breadcrumbs.map(e=>e.label).join(` > `)}`);current=this.navigationService.current;static ɵfac=function(e){return new(e||i)};static ɵcmp=H({type:i,selectors:[[`bx-breadcrumbs`]],inputs:{minimumBreadcrumbs:[1,`minimumBreadcrumbs`],divider:[1,`divider`]},decls:1,vars:1,consts:[[1,`breadcrumbs`],[`aria-current`,`page`,1,`crumb`,`last`],[1,`crumb`,3,`routerLink`],[`size`,`16`,1,`breadcrumb-separator`,3,`name`]],template:function(e,n){e&1&&ce(0,It$2,3,1,`nav`,0),e&2&&ue(n.showBreadcumbs()?0:-1)},dependencies:[nE,bt$2],styles:[`
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
}`]})};function Oi$1(i){return{config:i,withNav(t,e){return Mt$1(t,e)}}}function ki$1(i){return[{provide:ae$1,useValue:i}]}function Mt$1(i,t){let e=i.data?.nav??{};return s(r({},i),{data:s(r({},i.data??{}),{nav:r(r({},e),t)})})}var D={side:`left`,searchable:!0,showItemIcons:!0,showSectionIcons:!0,backLabel:`Back`,pathLabel:`Navigation path`,ariaLabel:`Main navigation`,searchPlaceholder:`Search navigation…`,searchLabel:`Search navigation`,clearSearchLabel:`Clear search`,emptyText:`No matching pages.`,openLabel:`Open navigation`,closeLabel:`Close navigation`,collapseLabel:`Collapse navigation`,expandLabel:`Expand navigation`,submenuLabel:`Open submenu`,resultLabel:`Search result`};var Je$1={paths:`subset`,queryParams:`ignored`,matrixParams:`ignored`,fragment:`ignored`};var pt$2=s(r({},Je$1),{paths:`exact`});function ut$2(i){return i.normalize(`NFD`).replace(new RegExp(`\\p{M}`,`gu`),``).toLocaleLowerCase().trim()}function Ye$1(i,t){let e=ut$2(i),n=ut$2(t);if(!n)return 0;if(e===n)return 1e3;if(e.includes(n))return Math.max(600,800-e.indexOf(n)-(e.length-n.length));let a=0,o=0;for(let c of e)c===n[a]?a++:a&&o++;if(a===n.length)return Math.max(1,500-o-e.length);if(n.length<4)return-1;for(let c of e.split(/\s+/)){if(Math.abs(c.length-n.length)>1)continue;let v=Array.from({length:n.length+1},(p,N)=>N);for(let p=1;p<=c.length;p++){let N=v[0];v[0]=p;for(let O=1;O<=n.length;O++){let P=v[O];v[O]=Math.min(v[O]+1,v[O-1]+1,N+(c[p-1]===n[O-1]?0:1)),N=P}}if(v[n.length]<=1)return 250}return-1}function vt$1(i,t){if(!t.trim())return{entries:[]};let e=[],n=(o,c,v)=>{for(let p of o){let N=p.data?.keywords?.filter(P=>typeof P==`string`)??[],O=Math.max(Ye$1(p.label,t),...N.map(P=>Ye$1(P,t)),Ye$1(v,t)-100);O>=0&&e.push({item:p,path:[...c.map(P=>P.id),p.id],context:[v,...c.map(P=>P.label)].filter(Boolean).join(` › `),score:O}),p.data?.disabled||n(p.children??[],[...c,p],v)}};for(let o of i)n(o.items,[],o.title);e.sort((o,c)=>c.score-o.score);return{entries:e,label:e.find(o=>!o.item.data?.disabled)?.item.label}}function Xe(i,t){let e=(n,a)=>{for(let o of n){let c=[...a,o.id];if(o.id===t)return c;let v=e(o.children??[],c);if(v)return v}};for(let n of i){let a=e(n.items,[]);if(a)return a}return[]}var z$1=class i{router=p(Lr$1);activeRoute=J9(this.router.events.pipe(Bt$3(t=>t instanceof Zn$2)));i18n=p(Se$2,{optional:!0});levelId=`bx-navigation-level-${er$1()}`;path=x([]);section=x(void 0);backward=x(!1);inlineLevels=x(!0);submenuVisible=x(!1);expansionRequested=new De$1;config=x({});sourceGroups=x([]);query=x(``);itemTemplate=x(void 0);activated=new De$1;revealItemId=x(void 0);groups=v(()=>{this.i18n?.version?.();let t=e=>e.filter(n=>n.visible&&!n.data?.hidden).map(n=>s(r({},n),{label:n.data?.label===void 0?n.label:this.resolveNav(n.data.label),data:s(r({},n.data),{keywords:n.data?.keywords?.map(a=>this.resolveNav(a))}),children:t(n.children??[])}));return this.sourceGroups().map(e=>s(r({},e),{items:t(e.items)}))});activeItem=v(()=>(this.activeRoute(),this.findActiveItem(this.groups().flatMap(t=>t.items))));activeIds=v(()=>{let t=this.activeItem();return new Set(t?Xe(this.groups(),t.id):[])});searchResult=v(()=>vt$1(this.groups(),this.query()));currentGroup=v(()=>{let t=this.path()[0];return this.groups().find(e=>e.id===this.section()||e.items.some(n=>n.id===t))});trail=v(()=>{let t=[],e=this.currentGroup()?.items??[];for(let n of this.path()){let a=e.find(o=>o.id===n&&!o.data?.disabled);if(!a)break;t.push(a),e=a.children??[]}return t});parent=v(()=>this.trail().at(-1));hasLevel=v(()=>!!this.parent()||!!(this.section()&&this.currentGroup()));levelItems=v(()=>this.parent()?.children??(this.section()?this.currentGroup()?.items:[])??[]);levelKey=v(()=>JSON.stringify([this.section(),this.trail().map(t=>t.id)]));breadcrumbs=v(()=>{if(!this.parent())return[];let t=this.currentGroup(),e=this.trail(),n=this.section(),a=e.slice(0,-1).map((o,c)=>({label:o.label,path:e.slice(0,c+1).map(v=>v.id),section:n}));return t?.title?[{label:t.title,path:[],section:t.id},...a]:a});text=v(()=>{this.i18n?.version?.();let t=this.config();return{ariaLabel:ne$1(t.ariaLabel??D.ariaLabel,this.i18n),searchPlaceholder:ne$1(t.searchPlaceholder??D.searchPlaceholder,this.i18n),searchLabel:ne$1(t.searchLabel??D.searchLabel,this.i18n),clearSearchLabel:ne$1(t.clearSearchLabel??D.clearSearchLabel,this.i18n),emptyText:ne$1(t.emptyText??D.emptyText,this.i18n),openLabel:ne$1(t.openLabel??D.openLabel,this.i18n),closeLabel:ne$1(t.closeLabel??D.closeLabel,this.i18n),collapseLabel:ne$1(t.collapseLabel??D.collapseLabel,this.i18n),expandLabel:ne$1(t.expandLabel??D.expandLabel,this.i18n),submenuLabel:ne$1(t.submenuLabel??D.submenuLabel,this.i18n),backLabel:ne$1(t.backLabel??D.backLabel,this.i18n),pathLabel:ne$1(t.pathLabel??D.pathLabel,this.i18n),resultLabel:ne$1(t.resultLabel??D.resultLabel,this.i18n)}});searchSelectionId;constructor(){p(J$1).onDestroy(()=>{this.activated.complete(),this.expansionRequested.complete()})}isCurrent(t){return this.activeRoute(),!t.data?.disabled&&this.router.isActive(t.route,pt$2)}search(t){let e=!!this.query().trim(),n=!!t.trim();e&&!n&&this.revealSearchSelection(),(!e||!n)&&(this.searchSelectionId=void 0),n&&this.revealItemId.set(void 0),this.query.set(t)}enter(t){if(t.data?.disabled||!t.children?.length)return;this.backward.set(!1),this.revealItemId.set(void 0),this.searchSelectionId=void 0,this.query.set(``);let e=Xe(this.groups(),t.id);this.groups().find(a=>a.items.some(o=>o.id===e[0]))?.id!==this.section()&&this.section.set(void 0),this.path.set(e)}enterSection(t){this.backward.set(!1),this.revealItemId.set(void 0),this.section.set(t.id),this.path.set([])}back(){this.backward.set(!0),this.revealItemId.set(void 0);let t=this.trail().map(e=>e.id);t.length?this.path.set(t.slice(0,-1)):this.section.set(void 0)}navigateLevel(t){this.backward.set(!0),this.revealItemId.set(void 0),this.section.set(t.section),this.path.set(t.path)}select(t){t.data?.disabled||(this.query().trim()&&(this.searchSelectionId=t.id),this.activated.next(t))}revealSearchSelection(){let t=this.searchSelectionId;if(!t||!this.activeIds().has(t))return;let e=Xe(this.groups(),t);e.length&&(this.backward.set(!1),this.section.set(void 0),this.path.set(e.slice(0,-1)),this.revealItemId.set(t))}findActiveItem(t){let e;for(let n of t){let a=this.findActiveItem(n.children??[]),o=!n.data?.disabled&&this.router.isActive(n.route,Je$1)?n:void 0,c=a&&(!o||this.routeSpecificity(a)>=this.routeSpecificity(o))?a:o;c&&(!e||this.routeSpecificity(c)>this.routeSpecificity(e))&&(e=c)}return e}routeSpecificity(t){return t.route.split(/[?#]/)[0].length}resolveNav(t){return ne$1(typeof t==`function`?t({snapshot:void 0}):t,this.i18n)}static ɵfac=function(e){return new(e||i)};static ɵprov=V$2({token:i,factory:i.ɵfac})};var wt$1=(i,t,e)=>({$implicit:i,active:t,collapsed:e});var Ot$2=()=>({});function kt$2(i,t){if(i&1&&Ys(0,6),i&2){let e=ae$2(2);te$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,fO(2,wt$1,e.item(),e.active(),e.compact()))}}function Pt$2(i,t){if(i&1&&Ys(0,7),i&2){ae$2(2);let e=Pl(4);te$1(`ngTemplateOutlet`,e)}}function Lt$2(i,t){if(i&1&&(P$1(0,`small`,8),Re(1),L$1()),i&2){let e=ae$2(2);S(),je(e.context())}}function Et$2(i,t){if(i&1){let e=Er$1();P$1(0,`a`,4),be$1(`click`,function(a){$n$2(e);let o=ae$2();return qn$2(o.select(a))})(`keydown`,function(a){$n$2(e);let o=ae$2();return qn$2(o.openOnArrow(a))}),P$1(1,`span`,5),ce(2,kt$2,1,6,`ng-container`,6)(3,Pt$2,1,1,`ng-container`,7),L$1(),ce(4,Lt$2,2,1,`small`,8),L$1()}if(i&2){let e,n=ae$2();Z(`is-active`,n.active())(`is-ancestor`,n.ancestor())(`has-context`,!!n.context()),te$1(`routerLink`,n.item().data?.disabled?null:n.item().route)(`bxTooltip`,n.compact()?n.item().label:``)(`placement`,n.side()),j$1(`aria-current`,n.current()?`page`:null)(`aria-disabled`,n.item().data?.disabled||null)(`tabindex`,n.item().data?.disabled?-1:0)(`aria-label`,n.compact()?n.item().label:null),S(2),ue((e=n.state.itemTemplate())?2:3,e),S(2),ue(n.context()?4:-1)}}function Rt$2(i,t){if(i&1&&Ys(0,7),i&2){ae$2(2);let e=Pl(4);te$1(`ngTemplateOutlet`,e)}}function Dt$2(i,t){if(i&1&&Oe$1(0,`bx-icon`,10),i&2){let e=ae$2(2);te$1(`name`,e.horizontal()?e.expanded()?`chevron-up`:`chevron-down`:e.side()===`right`?`chevron-right`:`chevron-left`)}}function Vt$2(i,t){if(i&1){let e=Er$1();P$1(0,`button`,9),be$1(`click`,function(a){$n$2(e);let o=ae$2();return qn$2(o.expand(a))})(`keydown`,function(a){$n$2(e);let o=ae$2();return qn$2(o.openOnArrow(a))}),ce(1,Rt$2,1,1,`ng-container`,7)(2,Dt$2,1,1,`bx-icon`,10),L$1()}if(i&2){let e=ae$2();Z(`bx-nav-link`,e.compact())(`is-active`,e.compact()&&e.active()),te$1(`disabled`,e.item().data?.disabled),j$1(`aria-label`,e.state.text().submenuLabel+`: `+e.item().label)(`aria-expanded`,e.expanded())(`aria-haspopup`,e.horizontal()?`dialog`:null)(`aria-controls`,e.expanded()?e.state.levelId:null),S(),ue(e.compact()?1:2)}}function At$2(i,t){if(i&1&&Oe$1(0,`bx-icon`,11),i&2){let e=ae$2(2);te$1(`name`,e.item().icon?.name??e.item().data?.icon?.name??`circle`)(`size`,e.item().icon?.size??e.item().data?.icon?.size??`20`)(`color`,e.item().icon?.color??e.item().data?.icon?.color)(`bgColor`,e.item().icon?.bgColor??e.item().data?.icon?.bgColor)(`strokeWidth`,e.item().icon?.strokeWidth??e.item().data?.icon?.strokeWidth)}}function Ft$2(i,t){if(i&1&&Oe$1(0,`bx-tag`,13),i&2){let e=t.$implicit;te$1(`opaque`,!0)(`text`,e.text)(`config`,e.config??uO(4,Ot$2))(`focusable`,!1)}}function Bt$2(i,t){if(i&1&&Oe$1(0,`bx-icon`,14),i&2){let e=t;te$1(`name`,e.name)(`size`,e.size??`16`)(`color`,e.color)(`bgColor`,e.bgColor)(`strokeWidth`,e.strokeWidth)}}function Ht$2(i,t){if(i&1&&(P$1(0,`span`,12),Re(1),L$1(),xr$1(2,Ft$2,1,5,`bx-tag`,13,Al),ce(4,Bt$2,1,5,`bx-icon`,14)),i&2){let e,n=ae$2(2);S(),je(n.item().label),S(),Sr$1(n.item().data?.tags),S(2),ue((e=n.item().data?.endIcon)?4:-1,e)}}function Gt$1(i,t){if(i&1&&(ce(0,At$2,1,5,`bx-icon`,11),ce(1,Ht$2,5,2)),i&2){let e=ae$2();ue(e.compact()||e.state.config().showItemIcons!==!1?0:-1),S(),ue(e.compact()?-1:1)}}var re=class i{state=p(z$1);active=v(()=>this.state.activeItem()?.id===this.item().id);ancestor=v(()=>this.horizontal()&&!this.active()&&this.state.activeIds().has(this.item().id));current=v(()=>this.state.isCurrent(this.item()));side=v(()=>this.state.config().side===`right`?`left`:`right`);expanded=v(()=>(this.state.inlineLevels()||this.state.submenuVisible())&&this.state.trail().some(t=>t.id===this.item().id));item=m.required();compact=m(!1);horizontal=m(!1);inLevel=m(!1);context=m(``);select(t){t.button!==0||t.ctrlKey||t.metaKey||t.shiftKey||t.altKey||this.state.select(this.item())}expand(t){t.preventDefault(),t.stopPropagation(),!this.item().data?.disabled&&this.state.expansionRequested.next({item:this.item(),origin:t.currentTarget,keyboard:t instanceof KeyboardEvent||t.detail===0,inLevel:this.inLevel()})}openOnArrow(t){t.key===(this.horizontal()?`ArrowDown`:this.side()===`right`?`ArrowRight`:`ArrowLeft`)&&this.item().children?.length&&this.expand(t)}static ɵfac=function(e){return new(e||i)};static ɵcmp=H({type:i,selectors:[[`bx-navigation-item`]],hostAttrs:[`role`,`none`],inputs:{item:[1,`item`],compact:[1,`compact`],horizontal:[1,`horizontal`],inLevel:[1,`inLevel`],context:[1,`context`]},decls:5,vars:9,consts:[[`label`,``],[`role`,`none`,1,`bx-nav-row`],[`role`,`menuitem`,1,`bx-nav-link`,3,`is-active`,`is-ancestor`,`has-context`,`routerLink`,`bxTooltip`,`placement`],[`type`,`button`,`role`,`menuitem`,1,`bx-nav-disclosure`,3,`bx-nav-link`,`is-active`,`disabled`],[`role`,`menuitem`,1,`bx-nav-link`,3,`click`,`keydown`,`routerLink`,`bxTooltip`,`placement`],[1,`bx-nav-presentation`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`ngTemplateOutlet`],[1,`bx-nav-result-path`],[`type`,`button`,`role`,`menuitem`,1,`bx-nav-disclosure`,3,`click`,`keydown`,`disabled`],[`size`,`16`,3,`name`],[1,`bx-nav-icon`,3,`name`,`size`,`color`,`bgColor`,`strokeWidth`],[1,`bx-nav-label`],[`size`,`small`,3,`opaque`,`text`,`config`,`focusable`],[3,`name`,`size`,`color`,`bgColor`,`strokeWidth`]],template:function(e,n){e&1&&(P$1(0,`div`,1),ce(1,Et$2,5,15,`a`,2),ce(2,Vt$2,3,10,`button`,3),L$1(),ex(3,Gt$1,2,2,`ng-template`,null,0,uv)),e&2&&(Z(`is-compact`,n.compact())(`is-horizontal`,n.horizontal())(`is-disabled`,n.item().data?.disabled),j$1(`data-nav-id`,n.item().id),S(),ue(n.compact()&&n.item().children?.length?-1:1),S(),ue(n.item().children?.length?2:-1))},dependencies:[Gl,nE,bt$2,z0,$r$1],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
}
.bx-nav-row[_ngcontent-%COMP%] {
  display: flex;
  position: relative;
  align-items: stretch;
  gap: 0.25rem;
  color: var(--%NS%bx-text-primary);
}
.bx-nav-row.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.5;
}
.bx-nav-link[_ngcontent-%COMP%], 
.bx-nav-disclosure[_ngcontent-%COMP%] {
  border: 1px solid transparent;
  border-radius: var(--%NS%bx-nav-item-radius, var(--%NS%bx-side-nav-item-radius, 0.5rem));
  background: var(--%NS%bx-nav-item-background, var(--%NS%bx-side-nav-item-background, transparent));
  color: var(--%NS%bx-text-primary);
}
.bx-nav-link[_ngcontent-%COMP%]:not(.is-disabled, :disabled, [aria-disabled=true]):is(:hover, :focus-within), 
.bx-nav-disclosure[_ngcontent-%COMP%]:not(.is-disabled, :disabled, [aria-disabled=true]):is(:hover, :focus-within) {
  background: var(--%NS%bx-nav-item-hover-background, var(--%NS%bx-side-nav-item-hover-background, var(--%NS%bx-accent-subtle)));
  color: var(--%NS%bx-text-accent);
}
.bx-nav-link.is-active[_ngcontent-%COMP%]:not(.is-disabled), 
.bx-nav-disclosure.is-active[_ngcontent-%COMP%]:not(.is-disabled) {
  background: var(--%NS%bx-nav-item-active-background, var(--%NS%bx-side-nav-item-active-background, var(--%NS%bx-accent-subtle)));
  border-color: var(--%NS%bx-border-accent);
  color: var(--%NS%bx-text-accent);
}
.bx-nav-link[_ngcontent-%COMP%]:has(:focus-visible), 
.bx-nav-link[_ngcontent-%COMP%]:focus-visible, 
.bx-nav-disclosure[_ngcontent-%COMP%]:has(:focus-visible), 
.bx-nav-disclosure[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
}
@media (forced-colors: active) {
  .bx-nav-link.is-active[_ngcontent-%COMP%], 
   .bx-nav-disclosure.is-active[_ngcontent-%COMP%] {
    border-color: Highlight;
  }
}
.bx-nav-link[_ngcontent-%COMP%], 
.bx-nav-disclosure[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0.5rem 0.75rem;
  font: inherit;
  font-size: 0.875rem;
  text-align: start;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;
}
.bx-nav-link[aria-disabled=true][_ngcontent-%COMP%], 
.bx-nav-link[_ngcontent-%COMP%]:disabled, 
.bx-nav-disclosure[aria-disabled=true][_ngcontent-%COMP%], 
.bx-nav-disclosure[_ngcontent-%COMP%]:disabled {
  cursor: default;
}
.bx-nav-link[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
}
.bx-nav-link.is-ancestor[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-accent);
}
.bx-nav-presentation[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  min-width: 0;
}
.bx-nav-link.has-context[_ngcontent-%COMP%] {
  flex-direction: column;
  align-items: stretch;
  gap: 0.25rem;
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
  min-width: 2.75rem;
  justify-content: center;
  padding-inline: 0.5rem;
}
.is-compact[_ngcontent-%COMP%] {
  justify-content: center;
}
.is-compact[_ngcontent-%COMP%]   .bx-nav-presentation[_ngcontent-%COMP%] {
  justify-content: center;
}
.is-compact[_ngcontent-%COMP%]   .bx-nav-link[_ngcontent-%COMP%] {
  flex: 1;
  justify-content: center;
  min-width: 0;
  padding-inline: 0;
}
.bx-nav-result-path[_ngcontent-%COMP%] {
  display: block;
  margin-block-start: 0.25rem;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
  line-height: 1.4;
  font-weight: normal;
}
@media (forced-colors: active) {
  .bx-nav-link.is-active[_ngcontent-%COMP%] {
    text-decoration: underline;
  }
}
.is-horizontal[_ngcontent-%COMP%]   .bx-nav-link[_ngcontent-%COMP%], 
.is-horizontal[_ngcontent-%COMP%]   .bx-nav-disclosure[_ngcontent-%COMP%] {
  min-height: 2.5rem;
}
.is-horizontal[_ngcontent-%COMP%]   .bx-nav-label[_ngcontent-%COMP%] {
  white-space: nowrap;
}`]})};function Ce(i){return Object.fromEntries(Object.entries(i??{}).filter(([,t])=>t!==void 0))}var se$1=class i{document=p(ie$1);monitor=p(es);state=p(z$1);positions=new Map;rootScrollId=`bx-navigation-root-${er$1()}`;remember(t){let e=t?.closest(`[data-bx-nav-scroll]`)??this.activeScroller();if(!e)return;let n=t??this.document.activeElement,a=n?.closest(`[data-nav-id]`),o=n?.closest(`[data-section-id]`);this.positions.set(this.positionKey(e),{scrollTop:e.scrollTop,itemId:a?.getAttribute(`data-nav-id`)??void 0,sectionId:o?.getAttribute(`data-section-id`)??void 0,disclosure:!!n?.closest(`.bx-nav-disclosure`)||!!a&&!n?.closest(`.bx-nav-link`)})}restore(t,e,n){let a=this.activeScroller();if(!a)return;let o=t?this.positions.get(this.positionKey(a)):void 0;a.scrollTop=o?.scrollTop??0;let c=this.state.query().trim()?void 0:this.state.revealItemId(),v=Array.from(a.querySelectorAll(`[data-nav-id]`)),p=c?v.find(F=>F.getAttribute(`data-nav-id`)===c):void 0;if(p){let F=a.getBoundingClientRect(),J=p.getBoundingClientRect(),Y=F.top+a.clientTop,et=Y+a.clientHeight;J.top<Y?a.scrollTop+=J.top-Y:J.bottom>et&&(a.scrollTop+=Math.min(J.top-Y,J.bottom-et)),a.clientHeight>0&&(this.positions.set(this.positionKey(a),{scrollTop:a.scrollTop,itemId:c,disclosure:!1}),this.state.revealItemId.set(void 0))}if(!n)return;let N=p??v.find(F=>F.getAttribute(`data-nav-id`)===o?.itemId),O=Array.from(a.querySelectorAll(`[data-section-id]`)).find(F=>F.getAttribute(`data-section-id`)===o?.sectionId),P=N?.querySelector(!p&&o?.disclosure?`.bx-nav-disclosure`:`.bx-nav-link`)??O??a.querySelector(`[role="menuitem"]:not(:disabled, [aria-disabled="true"])`)??a.closest(`.bx-nav-level`)?.querySelector(`.bx-nav-back`);P&&this.monitor.focusVia(P,e?`keyboard`:`program`,{preventScroll:!0})}activeScroller(){return(!this.state.query().trim()&&this.state.hasLevel()?this.document.getElementById(`${this.state.levelId}-scroll`):null)??this.document.getElementById(this.rootScrollId)??void 0}positionKey(t){return this.state.query().trim()?`search:${this.state.query()}`:t.id===this.rootScrollId?JSON.stringify([void 0,[]]):t.querySelector(`[data-nav-level-key]`)?.getAttribute(`data-nav-level-key`)??this.state.levelKey()}static ɵfac=function(e){return new(e||i)};static ɵprov=V$2({token:i,factory:i.ɵfac})};var zt$2=(i,t)=>t.id;function jt$2(i,t){i&1&&Oe$1(0,`bx-icon`,10)}function Kt$1(i,t){if(i&1){let e=Er$1();P$1(0,`li`)(1,`button`,9),be$1(`click`,function(a){let o=$n$2(e).$implicit,c=ae$2(2);return qn$2(c.requestLevel(o,a))}),Re(2),L$1(),ce(3,jt$2,1,0,`bx-icon`,10),L$1()}if(i&2){let e=t.$implicit,n=t.$index,a=t.$count;S(2),je(e.label),S(),ue(n!==a-1?3:-1)}}function $t$2(i,t){if(i&1&&(P$1(0,`nav`,5)(1,`ol`),xr$1(2,Kt$1,4,2,`li`,null,Al),L$1()()),i&2){let e=ae$2();j$1(`aria-label`,e.state.text().pathLabel),S(2),Sr$1(e.state.breadcrumbs())}}function qt$2(i,t){if(i&1){let e=Er$1();P$1(0,`a`,11),be$1(`click`,function(){let a=$n$2(e),o=ae$2();return qn$2(o.state.select(a))}),Re(1),L$1()}if(i&2){let e=t,n=ae$2();te$1(`routerLink`,e.route),j$1(`aria-current`,n.state.isCurrent(e)?`page`:null),S(),je(e.label)}}function Wt$2(i,t){if(i&1&&(P$1(0,`strong`),Re(1),L$1()),i&2){let e=ae$2();S(),je(e.state.currentGroup()?.title)}}function Ut$1(i,t){if(i&1&&Oe$1(0,`bx-navigation-item`,13),i&2){let e=t.$implicit;te$1(`item`,e)(`inLevel`,!0)}}function Xt$1(i,t){if(i&1&&(P$1(0,`p`,14),Re(1),L$1()),i&2){let e=ae$2(2);S(),je(e.state.text().emptyText)}}function Qt$1(i,t){if(i&1){let e=Er$1();P$1(0,`div`,12),be$1(`keydown`,function(a){$n$2(e);let o=ae$2();return qn$2(o.menuKey(a))}),xr$1(1,Ut$1,1,2,`bx-navigation-item`,13,zt$2,!1,Xt$1,2,1,`p`,14),L$1()}if(i&2){let e=t.$implicit,n=ae$2();Z(`is-animated`,n.animated())(`is-backward`,n.state.backward()),te$1(`id`,n.state.levelId),j$1(`aria-label`,n.state.parent()?.label??n.state.currentGroup()?.title)(`data-nav-level-key`,e),S(),Sr$1(n.state.levelItems())}}var Ne$2=class i{a11y=p(He);state=p(z$1);frames=v(()=>[this.state.levelKey()]);animated=v(()=>!this.a11y.isReducedMotion());back=vt$2();navigate=vt$2();requestBack(t){this.back.emit(t)}requestLevel(t,e){this.navigate.emit({breadcrumb:t,keyboard:e.detail===0})}levelKey(t){if(t.defaultPrevented)return;let e=this.state.config().side===`right`?`ArrowRight`:`ArrowLeft`;(t.key===`Escape`||t.key===e)&&this.back.emit(t)}menuKey(t){let e=t.target?.closest(`[role="menu"]`);e&&X0(t,e)}static ɵfac=function(e){return new(e||i)};static ɵcmp=H({type:i,selectors:[[`bx-navigation-level`]],outputs:{back:`back`,navigate:`navigate`},decls:11,vars:5,consts:[[`tabindex`,`-1`,1,`bx-nav-level`,3,`keydown`],[1,`bx-nav-level-header`],[`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`type`,`button`,1,`bx-nav-back`,3,`click`],[`size`,`16`,3,`name`],[1,`bx-nav-level-heading`],[1,`bx-nav-path`],[1,`bx-nav-parent-link`,3,`routerLink`],[`data-bx-nav-scroll`,``,1,`bx-nav-scroll`,3,`id`],[`role`,`menu`,`tabindex`,`-1`,1,`bx-nav-items`,`bx-nav-level-items`,3,`id`,`is-animated`,`is-backward`],[`bx-button`,``,`variant`,`text`,`color`,`grayscale`,`type`,`button`,1,`bx-nav-path-action`,3,`click`],[`name`,`chevron-right`,`size`,`16`,`aria-hidden`,`true`,1,`bx-nav-path-divider`],[1,`bx-nav-parent-link`,3,`click`,`routerLink`],[`role`,`menu`,`tabindex`,`-1`,1,`bx-nav-items`,`bx-nav-level-items`,3,`keydown`,`id`],[3,`item`,`inLevel`],[`role`,`status`,1,`bx-nav-empty`]],template:function(e,n){if(e&1&&(P$1(0,`div`,0),be$1(`keydown`,function(o){return n.levelKey(o)}),P$1(1,`div`,1)(2,`button`,2),be$1(`click`,function(o){return n.requestBack(o)}),Oe$1(3,`bx-icon`,3),L$1(),P$1(4,`div`,4),ce(5,$t$2,4,1,`nav`,5),ce(6,qt$2,2,3,`a`,6)(7,Wt$2,2,1,`strong`),L$1()(),P$1(8,`div`,7),xr$1(9,Qt$1,4,8,`div`,8,Ks),L$1()()),e&2){let a;S(2),j$1(`aria-label`,n.state.text().backLabel),S(),te$1(`name`,n.state.config().side===`right`?`arrow-right`:`arrow-left`),S(2),ue(n.state.breadcrumbs().length?5:-1),S(),ue((a=n.state.parent())?6:7,a),S(2),te$1(`id`,n.state.levelId+`-scroll`),S(),Sr$1(n.frames())}},dependencies:[nE,qf,bt$2,re],styles:[`
[_nghost-%COMP%] {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  max-height: inherit;
}
.bx-nav-scroll[_ngcontent-%COMP%] {
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
  gap: var(--%NS%bx-nav-item-gap, var(--%NS%bx-side-nav-item-gap, 0.5rem));
}
.bx-nav-empty[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  padding: 0.75rem;
}
.bx-nav-level[_ngcontent-%COMP%] {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
  max-height: inherit;
}
.bx-nav-level-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex: none;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  max-height: min(12rem, 40dvh);
  overflow: auto;
  border-block-end: 1px solid var(--%NS%bx-border-default);
}
.bx-nav-level-heading[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  overflow-wrap: anywhere;
}
.bx-nav-path[_ngcontent-%COMP%] {
  margin: 0 0 0.25rem;
  max-height: 5rem;
  overflow: auto;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
  line-height: 1.4;
}
.bx-nav-path[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], 
.bx-nav-path[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
  min-width: 0;
}
.bx-nav-path[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {
  flex-wrap: wrap;
}
.bx-nav-path[_ngcontent-%COMP%]   .bx-nav-path-action[_ngcontent-%COMP%] {
  min-width: 0;
  padding: 0.25rem 0;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  text-align: start;
  overflow-wrap: anywhere;
}
.bx-nav-path[_ngcontent-%COMP%]   .bx-nav-path-action[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
.bx-nav-path-divider[_ngcontent-%COMP%] {
  flex: none;
}
.bx-nav-path-divider[_ngcontent-%COMP%]:dir(rtl) {
  transform: scaleX(-1);
}
.bx-nav-parent-link[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-primary);
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
}
.bx-nav-parent-link[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
.bx-nav-parent-link[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.bx-nav-back[_ngcontent-%COMP%] {
  --%NS%bx-glass-radius: 9999px;
  flex: none;
}
.bx-nav-level-items.is-animated[_ngcontent-%COMP%] {
  --%NS%bx-nav-level-offset: 1rem;
  animation: _ngcontent-%COMP%_bx-nav-level-enter 160ms ease-out;
}
.bx-nav-level-items.is-animated.is-backward[_ngcontent-%COMP%] {
  --%NS%bx-nav-level-offset: -1rem;
}
.bx-nav-level-items.is-animated[_ngcontent-%COMP%]:dir(rtl) {
  --%NS%bx-nav-level-offset: -1rem;
}
.bx-nav-level-items.is-animated[_ngcontent-%COMP%]:dir(rtl).is-backward {
  --%NS%bx-nav-level-offset: 1rem;
}
@keyframes _ngcontent-%COMP%_bx-nav-level-enter {
  from {
    transform: translateX(var(--%NS%bx-nav-level-offset));
  }
  to {
    transform: translateX(0);
  }
}`]})};var bt$1=s(r({},D),{position:`fixed`,width:`17rem`,collapsedWidth:`4.5rem`,collapsible:!0,collapsed:!1,mobileBreakpoint:`lg`,submenuBreakpoint:`xl`,submenuMode:`auto`,showMobileTrigger:!0});var Yt$1=[`mobileToggle`];var Zt$1=[`submenuTrigger`];var en$1=[`panel`];var tn$1=(i,t)=>t.item.id;var gt$1=(i,t)=>t.id;function nn$1(i,t){if(i&1){let e=Er$1();P$1(0,`button`,12,2),be$1(`click`,function(a){$n$2(e);let o=ae$2();return qn$2(o.toggle(a))}),Oe$1(2,`bx-icon`,13),L$1()}if(i&2){let e=ae$2();Z(`is-open`,e.mobileOpen()),j$1(`aria-label`,e.state.text().openLabel)(`aria-hidden`,e.mobileOpen()?!0:null)(`inert`,e.mobileOpen()?``:null)(`aria-expanded`,e.mobileOpen())(`aria-controls`,e.id)}}function an$1(i,t){if(i&1){let e=Er$1();P$1(0,`button`,14),be$1(`click`,function(a){$n$2(e);let o=ae$2();return qn$2(o.closeFromControl(a))}),L$1()}if(i&2){let e=ae$2();j$1(`aria-label`,e.state.text().closeLabel)}}function on$1(i,t){if(i&1&&Ys(0,7),i&2){let e=ae$2();te$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.slotContext())}}function rn$1(i,t){if(i&1&&(P$1(0,`strong`),Re(1),L$1()),i&2){let e=ae$2();S(),je(e.state.text().ariaLabel)}}function sn(i,t){if(i&1){let e=Er$1();P$1(0,`button`,15),be$1(`click`,function(a){$n$2(e);let o=ae$2();return qn$2(o.closeFromControl(a))}),Oe$1(1,`bx-icon`,16),L$1()}if(i&2){let e=ae$2();j$1(`aria-label`,e.state.text().closeLabel)}}function ln(i,t){if(i&1){let e=Er$1();P$1(0,`button`,15),be$1(`click`,function(){$n$2(e);let a=ae$2();return qn$2(a.toggleCollapsed())}),Oe$1(1,`bx-icon`,17),L$1()}if(i&2){let e=ae$2();j$1(`aria-label`,e.isCollapsed()?e.state.text().expandLabel:e.state.text().collapseLabel)(`aria-expanded`,!e.isCollapsed()),S(),te$1(`name`,e.resolvedConfig().side===`left`!==e.isCollapsed()?`panel-left-close`:`panel-right-close`)}}function cn(i,t){if(i&1){let e=Er$1();P$1(0,`button`,20),be$1(`click`,function(){$n$2(e);let a=ae$2(2);return qn$2(a.expandSearch())}),Oe$1(1,`bx-icon`,21),L$1()}if(i&2){let e=ae$2(2);j$1(`aria-label`,e.state.text().searchLabel)}}function dn(i,t){if(i&1){let e=Er$1();P$1(0,`bx-search-input`,22),mk(),be$1(`ngModelChange`,function(a){$n$2(e);let o=ae$2(2);return qn$2(o.search(a))}),L$1()}if(i&2){let e=ae$2(2);te$1(`placeholder`,e.state.text().searchPlaceholder)(`ariaLabel`,e.state.text().searchLabel)(`clearLabel`,e.state.text().clearSearchLabel)(`ngModel`,e.query()),vk()}}function mn(i,t){if(i&1&&ce(0,cn,2,1,`button`,18)(1,dn,1,4,`bx-search-input`,19),i&2){let e=ae$2();ue(e.isCollapsed()?0:1)}}function pn(i,t){if(i&1){let e=Er$1();P$1(0,`bx-navigation-level`,23),be$1(`back`,function(a){$n$2(e);let o=ae$2();return qn$2(o.back(a))})(`navigate`,function(a){$n$2(e);let o=ae$2();return qn$2(o.navigateLevel(a))}),L$1()}}function un(i,t){if(i&1&&Oe$1(0,`bx-navigation-item`,26),i&2){let e=t.$implicit;te$1(`item`,e.item)(`context`,e.context)}}function vn$1(i,t){if(i&1&&(P$1(0,`p`,27),Re(1),L$1()),i&2){let e=ae$2(3);S(),je(e.state.text().emptyText)}}function bn(i,t){if(i&1){let e=Er$1();P$1(0,`div`,25),be$1(`keydown`,function(a){$n$2(e);let o=ae$2(2);return qn$2(o.menuKey(a))}),xr$1(1,un,1,2,`bx-navigation-item`,26,tn$1,!1,vn$1,2,1,`p`,27),L$1()}if(i&2){let e=ae$2(2);j$1(`aria-label`,e.state.text().resultLabel),S(),Sr$1(e.state.searchResult().entries)}}function gn(i,t){if(i&1){let e=Er$1();P$1(0,`button`,34),be$1(`click`,function(a){$n$2(e);let o=ae$2(2).$implicit,c=ae$2(3);return qn$2(c.openSection(o,a))}),Oe$1(1,`bx-icon`,17),L$1()}if(i&2){let e=ae$2(2).$implicit,n=ae$2(3);Z(`is-active`,n.sectionActive(e)),j$1(`aria-label`,e.title)(`data-section-id`,e.id)(`aria-expanded`,n.state.submenuVisible()&&n.state.currentGroup()?.id===e.id)(`aria-controls`,n.state.submenuVisible()?n.state.levelId:null),S(),te$1(`name`,e.icon?.name??`folder`)}}function hn$1(i,t){if(i&1&&Oe$1(0,`bx-icon`,17),i&2){let e=ae$2(3).$implicit;te$1(`name`,e.icon?.name??`folder`)}}function fn$1(i,t){if(i&1){let e=Er$1();P$1(0,`button`,35),be$1(`click`,function(){$n$2(e);let a=ae$2(2).$implicit,o=ae$2(3);return qn$2(o.toggleSection(a))}),ce(1,hn$1,1,1,`bx-icon`,17),P$1(2,`span`),Re(3),L$1(),Oe$1(4,`bx-icon`,36),L$1()}if(i&2){let e=ae$2(2),n=e.$implicit,a=e.$index,o=ae$2(3);Z(`is-active`,o.sectionActive(n)),j$1(`aria-expanded`,!o.sectionCollapsed(n))(`aria-controls`,o.id+`-section-`+a),S(),ue(o.resolvedConfig().showSectionIcons?1:-1),S(2),je(n.title),S(),te$1(`name`,o.sectionCollapsed(n)?`chevron-down`:`chevron-up`)}}function xn$1(i,t){if(i&1&&Oe$1(0,`bx-icon`,17),i&2){let e=ae$2(3).$implicit;te$1(`name`,e.icon?.name??`folder`)}}function _n$1(i,t){if(i&1&&(P$1(0,`h2`,37),ce(1,xn$1,1,1,`bx-icon`,17),P$1(2,`span`),Re(3),L$1()()),i&2){let e=ae$2(2).$implicit,n=ae$2(3);Z(`is-active`,n.sectionActive(e)),S(),ue(n.resolvedConfig().showSectionIcons?1:-1),S(2),je(e.title)}}function yn$1(i,t){if(i&1&&ce(0,gn,2,7,`button`,31)(1,fn$1,5,7,`button`,32)(2,_n$1,4,4,`h2`,33),i&2){let e=ae$2().$implicit,n=ae$2(3);ue(n.isCollapsed()?0:e.collapsible?1:2)}}function Cn$1(i,t){if(i&1&&Oe$1(0,`bx-navigation-item`,30),i&2){let e=t.$implicit,n=ae$2(4);te$1(`item`,e)(`compact`,n.isCollapsed())}}function Nn$1(i,t){if(i&1){let e=Er$1();P$1(0,`section`,28),ce(1,yn$1,3,1),P$1(2,`div`,29),be$1(`keydown`,function(a){$n$2(e);let o=ae$2(3);return qn$2(o.menuKey(a))}),xr$1(3,Cn$1,1,2,`bx-navigation-item`,30,gt$1),L$1()()}if(i&2){let e=t.$implicit,n=t.$index,a=ae$2(3);j$1(`aria-label`,e.title||a.state.text().ariaLabel),S(),ue(e.title?1:-1),S(),te$1(`id`,a.id+`-section-`+n)(`hidden`,a.sectionCollapsed(e)),j$1(`aria-label`,e.title||a.state.text().ariaLabel),S(),Sr$1(e.items)}}function Sn$1(i,t){if(i&1&&(P$1(0,`p`,27),Re(1),L$1()),i&2){let e=ae$2(3);S(),je(e.state.text().emptyText)}}function Tn$1(i,t){if(i&1&&xr$1(0,Nn$1,5,5,`section`,28,gt$1,!1,Sn$1,2,1,`p`,27),i&2){let e=ae$2(2);Sr$1(e.visibleGroups())}}function In$1(i,t){if(i&1&&(P$1(0,`div`,9)(1,`nav`),ce(2,bn,4,2,`div`,24)(3,Tn$1,3,1),L$1()()),i&2){let e=ae$2();te$1(`id`,e.focusState.rootScrollId),S(),j$1(`aria-label`,e.state.text().ariaLabel),S(),ue(e.query().trim()?2:3)}}function Mn$1(i,t){if(i&1&&(P$1(0,`footer`,10),Ys(1,7),L$1()),i&2){let e=ae$2();S(),te$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.slotContext())}}function wn$1(i,t){if(i&1&&Re(0),i&2){let e=ae$2();vx(` `,e.state.text().resultLabel,`: `,e.state.searchResult().label,` `)}}function On$1(i,t){if(i&1){let e=Er$1();P$1(0,`div`,38)(1,`bx-navigation-level`,23),be$1(`back`,function(a){$n$2(e);let o=ae$2();return qn$2(o.back(a))})(`navigate`,function(a){$n$2(e);let o=ae$2();return qn$2(o.navigateLevel(a))}),L$1()()}}var Se$1=class i{host=p(B$1).nativeElement;document=p(ie$1);router=p(Lr$1);destroyRef=p(J$1);dimensions=p(Ap);navigation=p(oe);defaults=p(ae$1,{optional:!0});scrollLock=p(AM);cascade=p($f);a11y=p(He);injector=p(ve$1);focusMonitor=p(es);toggleElement=Zs(`mobileToggle`,{read:B$1});submenu=Zs(`submenuTrigger`);panel=Zs(`panel`);searchInput=Zs(hT);focusTrap=Zs(YF);availableWidth=x(void 0);flyoutOrigin=x(void 0);saved=x({sections:{}});loadedKey=x(void 0);lockId=er$1();presentation=v(()=>`${this.isMobile()}:${this.resolvedConfig().position}:${this.resolvedConfig().side}`);drawerAnimated=x(!1);state=p(z$1);id=`bx-side-nav-${this.lockId}`;headerTemplate=x(null);footerTemplate=x(null);reducedMotion=this.a11y.isReducedMotion;visibleGroups=this.state.groups;focusState=p(se$1);slotContext=v(()=>({$implicit:this.isCollapsed(),collapsed:this.isCollapsed(),mobile:this.isMobile()}));panelId=this.id;config=m({});groups=m(void 0);itemTemplate=m(void 0);collapsed=m(void 0);collapsedChange=vt$2();mobileOpen=Tr$1(!1);itemSelected=vt$2();layoutChange=vt$2();resolvedConfig=v(()=>r(r(r({},bt$1),Ce(this.defaults?.sideNav)),Ce(this.config())));isMobile=v(()=>this.resolvedConfig().mobile??this.dimensions.dimensions().width<=this.dimensions.breakpoints[this.resolvedConfig().mobileBreakpoint]);isCollapsed=v(()=>!this.isMobile()&&!this.state.query().trim()&&!(this.isInlineSubmenus()&&this.state.hasLevel())&&(this.collapsed()??this.saved().collapsed??this.resolvedConfig().collapsed));isInlineSubmenus=v(()=>{let t=this.resolvedConfig();if(this.isMobile()||t.submenuMode===`inline`)return!0;if(t.submenuMode===`flyout`)return!1;let e=this.dimensions.dimensions().width;return(t.position===`inline`?Math.min(e,this.availableWidth()??e):e)<=this.dimensions.breakpoints[t.submenuBreakpoint]});query=this.state.query.asReadonly();layout=v(()=>({side:this.resolvedConfig().side,offset:this.isMobile()?`0px`:this.isCollapsed()?this.resolvedConfig().collapsedWidth:this.resolvedConfig().width,collapsed:this.isCollapsed(),mobile:this.isMobile(),open:!this.isMobile()||this.mobileOpen()}));restoreFocus;focusReturnOrigin=`program`;focusRevision=0;renderRevision=0;constructor(){xe(()=>{this.state.config.set(this.resolvedConfig()),this.state.sourceGroups.set(this.groups()??this.navigation.menuTreeGroups()),this.state.itemTemplate.set(this.itemTemplate())}),xe(()=>{let t=this.resolvedConfig().persistenceKey;z$2(()=>{this.saved.set(this.readSavedState(t)),this.loadedKey.set(t)})}),xe(()=>{let t=this.resolvedConfig().persistenceKey,e=this.loadedKey(),n=this.saved(),a=this.collapsed()??n.collapsed??this.resolvedConfig().collapsed;if(!(!t||e!==t||!this.document.defaultView))try{this.document.defaultView.localStorage.setItem(t,JSON.stringify({collapsed:a,sections:n.sections}))}catch{}}),xe(()=>{this.isMobile()&&this.mobileOpen()&&this.resolvedConfig().position!==`inline`?this.scrollLock.disableScroll(this.lockId,{handleTouchInput:!1}):this.scrollLock.enableScroll(this.lockId)}),xe(t=>{if(!this.isMobile()||!this.mobileOpen())return;let e=ft$2(()=>{this.destroyRef.destroyed||!this.isMobile()||!this.mobileOpen()||(this.state.revealItemId()&&this.focusState.restore(!0,!1,!1),this.focusTrap()?.focusTrap.focusInitialElement({preventScroll:!0}))},{injector:this.injector});t(()=>e.destroy())}),xe(()=>{this.presentation(),z$2(()=>{this.drawerAnimated.set(!1),this.cascade.closeAll(),this.mobileOpen()&&this.close()})}),xe(()=>{let t=this.isInlineSubmenus();z$2(()=>{let n=!!(this.dimensions.isBrowser?this.document.activeElement:null)?.closest(`.bx-nav-level`);this.focusState.remember(),this.state.inlineLevels.set(t),this.submenu()?.close(),this.state.hasLevel()&&this.renderLevel(!0,!1,n)})}),xe(()=>{this.state.hasLevel()||z$2(()=>this.submenu()?.close())}),xe(()=>this.layoutChange.emit(this.layout())),this.state.expansionRequested.pipe(Gi$1()).subscribe(t=>this.openChildren(t)),ft$2(()=>{let t=this.document.defaultView,e=this.host.parentElement;if(!t?.ResizeObserver||!e)return;this.availableWidth.set(e.getBoundingClientRect().width);let n=new t.ResizeObserver(([a])=>this.availableWidth.set(a.contentRect.width));n.observe(e),this.destroyRef.onDestroy(()=>n.disconnect())}),this.state.activated.pipe(Gi$1()).subscribe(t=>{++this.renderRevision,this.itemSelected.emit(t),this.cascade.closeAll(),this.isMobile()&&this.close()}),this.router.events.pipe(Gi$1()).subscribe(t=>{t instanceof Zn$2&&(++this.renderRevision,this.cascade.closeAll(),this.mobileOpen()&&this.close())}),this.destroyRef.onDestroy(()=>{this.scrollLock.enableScroll(this.lockId)})}setHeaderTemplate(t){this.headerTemplate.set(t)}setFooterTemplate(t){this.footerTemplate.set(t)}toggle(t){this.mobileOpen()?this.close():this.open(t)}open(t){let e=this.document.defaultView;if(!e||!this.isMobile()||this.mobileOpen())return;let n=t&&`currentTarget`in t?t.currentTarget:t,a=n instanceof e.HTMLElement?n:void 0,o=this.document.activeElement,c=o&&o!==this.document.body&&o!==this.document.documentElement?o:void 0;this.restoreFocus=a??c??this.toggleElement()?.nativeElement,this.focusReturnOrigin=this.restoreFocus?.matches(`:focus-visible`)?`keyboard`:`program`,++this.focusRevision,this.restoreFocus&&this.focusMonitor.focusVia(this.restoreFocus,this.focusReturnOrigin,{preventScroll:!0}),this.drawerAnimated.set(!0),this.mobileOpen.set(!0)}close(){if(!this.mobileOpen())return;this.cascade.closeAll();let t=this.restoreFocus?.isConnected?this.restoreFocus:this.toggleElement()?.nativeElement,e=this.focusReturnOrigin,n=++this.focusRevision;this.restoreFocus=void 0,this.mobileOpen.set(!1),ft$2(()=>{!this.destroyRef.destroyed&&n===this.focusRevision&&!this.mobileOpen()&&t?.isConnected&&this.focusMonitor.focusVia(t,e,{preventScroll:!0})},{injector:this.injector})}toggleCollapsed(){let t=!this.isCollapsed();t&&(++this.renderRevision,this.submenu()?.close(),this.state.search(``),this.state.path.set([]),this.state.section.set(void 0)),this.saved.update(e=>s(r({},e),{collapsed:t})),this.collapsedChange.emit(t)}search(t){let e=!!this.query().trim();e||this.focusState.remember(),this.submenu()?.close(),this.state.search(t);let n=this.state.revealItemId();if(n){this.flyoutOrigin.set(void 0);let a=this.state.currentGroup()??this.visibleGroups().find(o=>o.items.some(c=>c.id===n));a&&this.sectionCollapsed(a)&&this.saved.update(o=>s(r({},o),{sections:s(r({},o.sections),{[a.id]:!1})}))}this.renderLevel(e&&!t.trim(),!1,!1)}expandSearch(){this.toggleCollapsed(),ft$2(()=>{this.destroyRef.destroyed||this.isCollapsed()||!this.resolvedConfig().searchable||this.searchInput()?.focus({preventScroll:!0})},{injector:this.injector})}back(t){t.preventDefault(),t.stopPropagation(),this.focusState.remember(),this.state.back(),this.renderLevel(!0,t instanceof KeyboardEvent||t.detail===0,!0)}navigateLevel(t){this.focusState.remember(),this.state.navigateLevel(t.breadcrumb),this.renderLevel(!0,t.keyboard,!0)}openSection(t,e){let n=e.currentTarget;if(this.submenu()?.isOpen()&&this.state.section()===t.id){this.submenu()?.close(),this.focusMonitor.focusVia(n,e.detail===0?`keyboard`:`program`,{preventScroll:!0});return}this.focusState.remember(n),this.submenu()?.close(),this.flyoutOrigin.set(n),this.state.enterSection(t),this.renderLevel(!1,e.detail===0,!0)}closeFromControl(t){this.focusReturnOrigin=t.detail===0?`keyboard`:`program`,this.close()}sectionActive(t){return t.items.some(e=>this.state.activeIds().has(e.id))}sectionCollapsed(t){return!this.isCollapsed()&&!!t.collapsible&&(this.saved().sections[t.id]??t.collapsed??!1)}toggleSection(t){if(!t.collapsible)return;let e=!this.sectionCollapsed(t);this.saved.update(n=>s(r({},n),{sections:s(r({},n.sections),{[t.id]:e})}))}menuKey(t){let e=t.target?.closest(`[role="menu"]`);e&&X0(t,e)}panelKey(t){t.defaultPrevented||t.key!==`Escape`||!this.mobileOpen()||this.cascade.hasOpenMenus()||(t.preventDefault(),t.stopPropagation(),this.focusReturnOrigin=`keyboard`,this.close())}openChildren(t){if(!t.inLevel&&!this.query().trim()&&this.submenu()?.isOpen()&&this.state.path()[0]===t.item.id){this.submenu()?.close(),this.focusMonitor.focusVia(t.origin,t.keyboard?`keyboard`:`program`,{preventScroll:!0});return}this.focusState.remember(t.origin),t.inLevel||(this.submenu()?.close(),this.flyoutOrigin.set(t.origin.closest(`.bx-nav-row`)??t.origin)),this.state.enter(t.item),this.renderLevel(!1,t.keyboard,!0)}renderLevel(t,e,n){let a=++this.renderRevision;ft$2(()=>{if(this.destroyRef.destroyed||a!==this.renderRevision)return;let o=this.submenu();if(!this.query().trim()&&this.state.hasLevel()&&!this.isInlineSubmenus()){let c=this.panel()?.nativeElement,v=Array.from(c?.querySelectorAll(`[data-nav-id]`)??[]).find(N=>N.getAttribute(`data-nav-id`)===this.state.path()[0]),p=this.flyoutOrigin()?.isConnected?this.flyoutOrigin():v??c;o?.open(!1,p)}else o?.close();this.focusState.restore(t,e,n),o?.reposition()},{injector:this.injector})}readSavedState(t){if(!t||!this.document.defaultView)return{sections:{}};try{let e=JSON.parse(this.document.defaultView.localStorage.getItem(t)??`null`);if(!e||typeof e!=`object`)return{sections:{}};let n=`collapsed`in e&&typeof e.collapsed==`boolean`?e.collapsed:void 0,a=`sections`in e&&e.sections&&typeof e.sections==`object`?e.sections:{};return{collapsed:n,sections:Object.fromEntries(Object.entries(a).filter(c=>typeof c[1]==`boolean`))}}catch{return{sections:{}}}}static ɵfac=function(e){return new(e||i)};static ɵcmp=H({type:i,selectors:[[`bx-side-nav`]],viewQuery:function(e,n){e&1&&Mr$1(n.toggleElement,Yt$1,5,B$1)(n.submenu,Zt$1,5)(n.panel,en$1,5)(n.searchInput,hT,5)(n.focusTrap,YF,5),e&2&&Qt$2(5)},hostVars:16,hostBindings:function(e,n){e&2&&(Pe(`--%NS%bx-side-nav-width`,n.resolvedConfig().width)(`--%NS%bx-side-nav-collapsed-width`,n.resolvedConfig().collapsedWidth),Z(`is-mobile`,n.isMobile())(`is-collapsed`,n.isCollapsed())(`is-right`,n.resolvedConfig().side===`right`)(`is-inline`,n.resolvedConfig().position===`inline`)(`is-animated`,!n.reducedMotion())(`is-drawer-animated`,n.drawerAnimated()&&!n.reducedMotion()))},inputs:{config:[1,`config`],groups:[1,`groups`],itemTemplate:[1,`itemTemplate`],collapsed:[1,`collapsed`],mobileOpen:[1,`mobileOpen`]},outputs:{collapsedChange:`collapsedChange`,mobileOpen:`mobileOpenChange`,itemSelected:`itemSelected`,layoutChange:`layoutChange`},exportAs:[`bxSideNav`],features:[ln$1([z$1,se$1])],decls:18,vars:24,consts:[[`panel`,``,`submenuTrigger`,`bxMenuTrigger`],[`submenuPanel`,``],[`mobileToggle`,``],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`type`,`button`,1,`bx-nav-hamburger`,3,`is-open`],[`type`,`button`,`tabindex`,`-1`,1,`bx-nav-backdrop`],[`tabindex`,`-1`,`bxSurface`,``,1,`bx-nav-panel`,3,`menuOpened`,`menuClosed`,`keydown`,`bxMenuTrigger`,`menuManual`,`menuHover`,`menuPinned`,`menuSide`,`menuLabel`,`bxSurfaceInteractive`,`id`,`cdkTrapFocus`],[1,`bx-nav-header`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`type`,`button`,1,`bx-nav-panel-toggle`],[`data-bx-nav-scroll`,``,1,`bx-side-nav-scroll`,3,`id`],[1,`bx-nav-footer`],[`role`,`status`,`aria-live`,`polite`,1,`cdk-visually-hidden`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`type`,`button`,1,`bx-nav-hamburger`,3,`click`],[`name`,`menu`,`size`,`16`],[`type`,`button`,`tabindex`,`-1`,1,`bx-nav-backdrop`,3,`click`],[`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`type`,`button`,1,`bx-nav-panel-toggle`,3,`click`],[`name`,`x`,`size`,`20`],[`size`,`20`,3,`name`],[`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`type`,`button`,1,`bx-nav-search-toggle`],[`subscriptSizing`,`dynamic`,1,`bx-nav-search`,3,`placeholder`,`ariaLabel`,`clearLabel`,`ngModel`],[`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`type`,`button`,1,`bx-nav-search-toggle`,3,`click`],[`name`,`search`,`size`,`20`],[`subscriptSizing`,`dynamic`,1,`bx-nav-search`,3,`ngModelChange`,`placeholder`,`ariaLabel`,`clearLabel`,`ngModel`],[3,`back`,`navigate`],[`role`,`menu`,`tabindex`,`-1`,1,`bx-nav-items`],[`role`,`menu`,`tabindex`,`-1`,1,`bx-nav-items`,3,`keydown`],[3,`item`,`context`],[`role`,`status`,1,`bx-nav-empty`],[1,`bx-nav-section`],[`role`,`menu`,`tabindex`,`-1`,1,`bx-nav-items`,3,`keydown`,`id`,`hidden`],[3,`item`,`compact`],[`type`,`button`,1,`bx-nav-section-toggle`,`is-compact`,3,`is-active`],[`type`,`button`,1,`bx-nav-section-toggle`,3,`is-active`],[1,`bx-nav-section-heading`,3,`is-active`],[`type`,`button`,1,`bx-nav-section-toggle`,`is-compact`,3,`click`],[`type`,`button`,1,`bx-nav-section-toggle`,3,`click`],[`size`,`16`,3,`name`],[1,`bx-nav-section-heading`],[1,`bx-nav-flyout`]],template:function(e,n){if(e&1&&(ce(0,nn$1,3,7,`button`,3),ce(1,an$1,1,1,`button`,4),P$1(2,`aside`,5,0),be$1(`menuOpened`,function(){return n.state.submenuVisible.set(!0)})(`menuClosed`,function(){return n.state.submenuVisible.set(!1)})(`keydown`,function(o){return n.panelKey(o)}),P$1(5,`div`,6),ce(6,on$1,1,2,`ng-container`,7)(7,rn$1,2,1,`strong`),ce(8,sn,2,1,`button`,8)(9,ln,2,3,`button`,8),L$1(),ce(10,mn,2,1),ce(11,pn,1,0,`bx-navigation-level`)(12,In$1,4,3,`div`,9),ce(13,Mn$1,2,2,`footer`,10),P$1(14,`span`,11),ce(15,wn$1,1,2),L$1()(),ex(16,On$1,2,0,`ng-template`,null,1,uv)),e&2){let a,o,c=Pl(17);ue(n.isMobile()&&n.resolvedConfig().showMobileTrigger?0:-1),S(),ue(n.isMobile()&&n.mobileOpen()?1:-1),S(),Z(`is-open`,!n.isMobile()||n.mobileOpen()),te$1(`bxMenuTrigger`,c)(`menuManual`,!0)(`menuHover`,!1)(`menuPinned`,!0)(`menuSide`,n.resolvedConfig().side===`right`?`left`:`right`)(`menuLabel`,n.state.parent()?.label??n.state.currentGroup()?.title??n.state.text().ariaLabel)(`bxSurfaceInteractive`,!1)(`id`,n.id)(`cdkTrapFocus`,n.isMobile()&&n.mobileOpen()),j$1(`role`,n.isMobile()?`dialog`:null)(`aria-modal`,n.isMobile()&&n.mobileOpen()?!0:null)(`aria-label`,n.state.text().ariaLabel)(`inert`,n.isMobile()&&!n.mobileOpen()?``:null)(`aria-hidden`,n.isMobile()&&!n.mobileOpen()?!0:null),S(4),ue((a=n.headerTemplate())?6:n.isCollapsed()?-1:7,a),S(2),ue(n.isMobile()?8:n.resolvedConfig().collapsible?9:-1),S(2),ue(n.resolvedConfig().searchable?10:-1),S(),ue(!n.query().trim()&&n.isInlineSubmenus()&&n.state.hasLevel()?11:12),S(2),ue((o=n.footerTemplate())?13:-1,o),S(2),ue(n.state.searchResult().label?15:-1)}},dependencies:[Gl,XF,YF,O7,N7,pF,hT,qf,Rt$3,bt$2,re,Ne$2,Z0],styles:[`
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
  padding-block-end: 0.25rem;
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
.bx-nav-section-toggle.is-active[_ngcontent-%COMP%] {
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
.bx-nav-flyout[_ngcontent-%COMP%] {
  display: flex;
  box-sizing: border-box;
  width: var(--%NS%bx-side-nav-menu-width, 17rem);
  max-width: calc(100dvw - 1rem);
  max-height: min(var(--%NS%bx-side-nav-menu-max-height, 32rem), 100dvh - 1rem);
  min-height: 0;
  overflow: hidden;
  background: var(--%NS%bx-bg-surface);
  color: var(--%NS%bx-text-primary);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  box-shadow: 0 12px 20px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
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
  min-height: 100dvh;
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
  overflow: clip;
  pointer-events: none;
}
.is-inline.is-mobile[_nghost-%COMP%]   .bx-nav-panel[_ngcontent-%COMP%] {
  position: absolute;
  inset-block: 0;
  height: 100%;
  min-height: 0;
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
}`]})};var ht$2=class i{template=p(Gn$2);nav=p(Se$1);constructor(){this.nav.setHeaderTemplate(this.template),p(J$1).onDestroy(()=>this.nav.setHeaderTemplate(null))}static ngTemplateContextGuard(t,e){return!0}static ɵfac=function(e){return new(e||i)};static ɵdir=U$2({type:i,selectors:[[``,`bxSideNavHeader`,``]]})};var ft$1=class i{template=p(Gn$2);nav=p(Se$1);constructor(){this.nav.setFooterTemplate(this.template),p(J$1).onDestroy(()=>this.nav.setFooterTemplate(null))}static ngTemplateContextGuard(t,e){return!0}static ɵfac=function(e){return new(e||i)};static ɵdir=U$2({type:i,selectors:[[``,`bxSideNavFooter`,``]]})};var xt$1=s(r({},D),{position:`sticky`,top:`0px`,compactBreakpoint:`lg`,panelWidth:`24rem`,panelMaxHeight:`32rem`,showItemIcons:!1,showSectionIcons:!1});var kn$1=[`bar`];var Pn=[`primary`];var Ln$1=[`space`];var En$1=[`menuButton`];var Rn$1=[`panelTrigger`];var Dn$1=()=>({useTopLayer:!0});var Ze$1=(i,t)=>t.id;var Vn$1=(i,t)=>t.item.id;function An$1(i,t){if(i&1&&(P$1(0,`div`,6),Ys(1,14),L$1()),i&2){let e=ae$2();S(),te$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.slotContext())}}function Fn$1(i,t){if(i&1&&Oe$1(0,`bx-navigation-item`,11),i&2){let e=t.$implicit;te$1(`item`,e)(`horizontal`,!0)}}function Bn$1(i,t){if(i&1){let e=Er$1();P$1(0,`button`,15),be$1(`click`,function(a){$n$2(e);let o=ae$2();return qn$2(o.open(a,!0))}),Oe$1(1,`bx-icon`,16),L$1()}if(i&2){let e=ae$2();te$1(`bxTooltip`,e.state.text().searchLabel),j$1(`aria-label`,e.state.text().searchLabel)(`aria-expanded`,e.opened())(`aria-controls`,e.opened()?e.panelId:null)}}function Hn$1(i,t){if(i&1&&(P$1(0,`div`,13),Ys(1,14),L$1()),i&2){let e=ae$2();S(),te$1(`ngTemplateOutlet`,t)(`ngTemplateOutletContext`,e.slotContext())}}function Gn$1(i,t){if(i&1){let e=Er$1();P$1(0,`bx-search-input`,24),mk(),be$1(`ngModelChange`,function(a){$n$2(e);let o=ae$2(2);return qn$2(o.search(a))}),L$1()}if(i&2){let e=ae$2(2);te$1(`placeholder`,e.state.text().searchPlaceholder)(`ariaLabel`,e.state.text().searchLabel)(`clearLabel`,e.state.text().clearSearchLabel)(`ngModel`,e.query()),vk()}}function zn$1(i,t){if(i&1){let e=Er$1();P$1(0,`bx-navigation-level`,25),be$1(`back`,function(a){$n$2(e);let o=ae$2(2);return qn$2(o.back(a))})(`navigate`,function(a){$n$2(e);let o=ae$2(2);return qn$2(o.navigateLevel(a))}),L$1()}}function jn$1(i,t){if(i&1&&Oe$1(0,`bx-navigation-item`,28),i&2){let e=t.$implicit;te$1(`item`,e.item)(`context`,e.context)}}function Kn$1(i,t){if(i&1&&(P$1(0,`p`,29),Re(1),L$1()),i&2){let e=ae$2(4);S(),je(e.state.text().emptyText)}}function $n$1(i,t){if(i&1){let e=Er$1();P$1(0,`div`,27),be$1(`keydown`,function(a){$n$2(e);let o=ae$2(3);return qn$2(o.menuKey(a))}),xr$1(1,jn$1,1,2,`bx-navigation-item`,28,Vn$1,!1,Kn$1,2,1,`p`,29),L$1()}if(i&2){let e=ae$2(3);j$1(`aria-label`,e.state.text().resultLabel),S(),Sr$1(e.state.searchResult().entries)}}function qn$1(i,t){if(i&1&&Oe$1(0,`bx-icon`,34),i&2){let e=ae$2(2).$implicit;te$1(`name`,e.icon?.name??`folder`)}}function Wn$1(i,t){if(i&1&&(P$1(0,`h2`,33),ce(1,qn$1,1,1,`bx-icon`,34),P$1(2,`span`),Re(3),L$1()()),i&2){let e=ae$2().$implicit,n=ae$2(4);Z(`is-active`,n.sectionActive(e)),S(),ue(n.resolvedConfig().showSectionIcons?1:-1),S(2),je(e.title)}}function Un$1(i,t){if(i&1&&Oe$1(0,`bx-navigation-item`,32),i&2){let e=t.$implicit;te$1(`item`,e)}}function Xn$1(i,t){if(i&1){let e=Er$1();P$1(0,`section`,30),ce(1,Wn$1,4,4,`h2`,31),P$1(2,`div`,27),be$1(`keydown`,function(a){$n$2(e);let o=ae$2(4);return qn$2(o.menuKey(a))}),xr$1(3,Un$1,1,1,`bx-navigation-item`,32,Ze$1),L$1()()}if(i&2){let e=t.$implicit,n=ae$2(4);j$1(`aria-label`,e.title||n.state.text().ariaLabel),S(),ue(e.title?1:-1),S(),j$1(`aria-label`,e.title||n.state.text().ariaLabel),S(),Sr$1(e.items)}}function Qn$2(i,t){if(i&1&&(P$1(0,`p`,29),Re(1),L$1()),i&2){let e=ae$2(4);S(),je(e.state.text().emptyText)}}function Jn$2(i,t){if(i&1&&xr$1(0,Xn$1,5,3,`section`,30,Ze$1,!1,Qn$2,2,1,`p`,29),i&2){let e=ae$2(3);Sr$1(e.state.groups())}}function Yn$1(i,t){if(i&1&&(P$1(0,`div`,22),ce(1,$n$1,4,2,`div`,26)(2,Jn$2,3,1),L$1()),i&2){let e=ae$2(2);te$1(`id`,e.focusState.rootScrollId),S(),ue(e.query().trim()?1:2)}}function Zn$1(i,t){if(i&1&&Re(0),i&2){let e=ae$2(2);vx(` `,e.state.text().resultLabel,`: `,e.state.searchResult().label,` `)}}function ei$1(i,t){if(i&1){let e=Er$1();P$1(0,`section`,17),be$1(`keydown`,function(a){$n$2(e);let o=ae$2();return qn$2(o.panelKey(a))}),P$1(1,`div`,18)(2,`strong`),Re(3),L$1(),P$1(4,`button`,19),be$1(`click`,function(a){$n$2(e);let o=ae$2();return qn$2(o.closeFromControl(a))}),Oe$1(5,`bx-icon`,20),L$1()(),ce(6,Gn$1,1,4,`bx-search-input`,21),ce(7,zn$1,1,0,`bx-navigation-level`)(8,Yn$1,3,2,`div`,22),P$1(9,`span`,23),ce(10,Zn$1,1,2),L$1()()}if(i&2){let e=ae$2();Pe(`--%NS%bx-top-nav-available-height`,e.availablePanelHeight()),te$1(`id`,e.panelId),j$1(`aria-label`,e.state.text().ariaLabel),S(3),je(e.state.text().ariaLabel),S(),j$1(`aria-label`,e.state.text().closeLabel),S(2),ue(e.resolvedConfig().searchable?6:-1),S(),ue(!e.query().trim()&&e.state.hasLevel()?7:8),S(3),ue(e.state.searchResult().label?10:-1)}}var Te$1=class i{host=p(B$1).nativeElement;document=p(ie$1);destroyRef=p(J$1);injector=p(ve$1);dimensions=p(Ap);navigation=p(oe);router=p(Lr$1);defaults=p(ae$1,{optional:!0});monitor=p(es);bar=Zs(`bar`,{read:B$1});primary=Zs(`primary`,{read:B$1});space=Zs(`space`,{read:B$1});menuButton=Zs(`menuButton`,{read:B$1});trigger=Zs(`panelTrigger`);measuredWidth=x(void 0);overflowing=x(!1);rtl=x(!1);viewportHeight=v(()=>this.dimensions.dimensions().height);availablePanelHeight=x(`calc(100dvh - 1rem)`);state=p(z$1);focusState=p(se$1);brandTemplate=x(null);actionsTemplate=x(null);rootItems=v(()=>this.state.groups().flatMap(t=>t.items));slotContext=v(()=>({$implicit:this.isCompact(),compact:this.isCompact(),open:this.opened()}));config=m({});groups=m(void 0);itemTemplate=m(void 0);opened=Tr$1(!1);itemSelected=vt$2();panelId=`bx-top-nav-panel-${this.state.levelId}`;query=this.state.query.asReadonly();resolvedConfig=v(()=>r(r(r({},xt$1),Ce(this.defaults?.topNav)),Ce(this.config())));isCompact=v(()=>{let t=this.resolvedConfig(),e=this.dimensions.dimensions().width,n=Math.min(e,this.measuredWidth()??e);return this.overflowing()||(t.compact??n<=this.dimensions.breakpoints[t.compactBreakpoint])});returnOrigin;keyboardOrigin=!1;focusSearchNext=!1;restoreNext=!0;relocating=!1;renderRevision=0;expandedChrome=0;compactAdjustment=0;previousCompactLayout=!1;constructor(){xe(()=>{this.state.config.set(s(r({},this.resolvedConfig()),{side:this.rtl()?`right`:`left`})),this.state.sourceGroups.set(this.groups()??this.navigation.menuTreeGroups()),this.state.itemTemplate.set(this.itemTemplate()),this.state.inlineLevels.set(!1)}),xe(()=>{let t=this.opened();z$2(()=>{t?this.renderPanel(this.restoreNext,this.keyboardOrigin,!0):(++this.renderRevision,this.trigger()?.close())})}),xe(()=>{let t=this.isCompact();z$2(()=>{this.opened()&&(this.focusSearchNext=this.document.getElementById(this.panelId)?.querySelector(`input`)===this.document.activeElement,this.focusState.remember(),this.relocate(),this.returnOrigin=t&&this.rootItems().length?this.menuButton()?.nativeElement:this.bar()?.nativeElement,this.renderPanel(!0,!1,!0))})}),xe(()=>{this.viewportHeight(),z$2(()=>{this.opened()&&(this.focusState.remember(),this.renderPanel(!0,!1,!1))})}),xe(()=>{this.resolvedConfig().searchable||z$2(()=>{this.focusSearchNext=!1,this.state.search(``),this.opened()&&this.renderPanel(!0,!1,!0)})}),Qs(()=>{this.rootItems(),this.state.activeItem(),this.isCompact(),z$2(()=>this.syncTabStops())}),ft$2(()=>this.observeLayout()),this.state.expansionRequested.pipe(Gi$1()).subscribe(t=>this.openChildren(t)),this.state.activated.pipe(Gi$1()).subscribe(t=>{this.itemSelected.emit(t),this.close(!1)}),this.router.events.pipe(Gi$1()).subscribe(t=>{t instanceof Zn$2&&this.close(!1)})}setBrandTemplate(t){this.brandTemplate.set(t)}setActionsTemplate(t){this.actionsTemplate.set(t)}open(t,e=!1){this.show(this.resolveOrigin(t),e,!0,this.isKeyboard(t))}close(t=!0){++this.renderRevision,this.opened.set(!1),this.trigger()?.close(),t&&this.restoreOrigin()}toggle(t){this.opened()?this.close():this.open(t)}search(t){let e=!!this.query().trim();e||this.focusState.remember(),this.state.search(t),this.focusSearchNext=!0,this.restoreNext=e&&!t.trim(),this.opened()?this.renderPanel(this.restoreNext,!1,!1):this.open(void 0,!0)}back(t){t.preventDefault(),t.stopPropagation(),this.focusState.remember(),this.state.back(),this.focusSearchNext=!1,this.renderPanel(!0,t instanceof KeyboardEvent||t.detail===0,!0)}navigateLevel(t){this.focusState.remember(),this.state.navigateLevel(t.breadcrumb),this.focusSearchNext=!1,this.renderPanel(!0,t.keyboard,!0)}panelOpened(){this.state.submenuVisible.set(!0)}panelClosed(){this.state.submenuVisible.set(!1),!this.relocating&&(++this.renderRevision,this.opened.set(!1),this.document.activeElement===this.bar()?.nativeElement&&this.restoreOrigin())}closeFromControl(t){this.keyboardOrigin=t.detail===0,this.close()}panelKey(t){t.defaultPrevented||t.key!==`Escape`||(t.preventDefault(),t.stopPropagation(),this.keyboardOrigin=!0,this.close())}menuKey(t){let e=t.target?.closest(`[role="menu"]`);e&&X0(t,e)}rootKey(t){let e=this.primary()?.nativeElement,n=this.document.defaultView?.getComputedStyle(this.host).direction===`rtl`;e&&X0(t,e,{orientation:`horizontal`,rtl:n})}rootFocus(t){let e=this.primary()?.nativeElement,n=t.target;if(!(!e||!n.matches(`[role="menuitem"]`)))for(let a of Array.from(e.querySelectorAll(`[role="menuitem"]`)))a.tabIndex=a===n?0:-1}sectionActive(t){return t.items.some(e=>this.state.activeIds().has(e.id))}openChildren(t){if(!t.inLevel&&!this.query().trim()&&this.opened()&&this.state.path()[0]===t.item.id){this.keyboardOrigin=t.keyboard,this.close();return}this.focusState.remember(t.origin);let e=t.inLevel?this.returnOrigin:t.origin;this.state.enter(t.item),this.show(e,!1,!1,t.keyboard)}show(t,e,n,a){this.dimensions.isBrowser&&(t&&t!==this.returnOrigin&&this.trigger()?.isOpen()&&this.relocate(),this.returnOrigin=t??this.returnOrigin??this.menuButton()?.nativeElement??this.bar()?.nativeElement,this.keyboardOrigin=a,this.focusSearchNext=e&&this.resolvedConfig().searchable,this.restoreNext=n,this.opened()?this.renderPanel(n,a,!0):this.opened.set(!0))}relocate(){this.relocating=!0,this.trigger()?.close(),this.relocating=!1}renderPanel(t,e,n){let a=++this.renderRevision;ft$2(()=>{if(this.destroyRef.destroyed||a!==this.renderRevision||!this.opened())return;let o=this.isCompact()&&this.rootItems().length?this.menuButton()?.nativeElement:this.bar()?.nativeElement,v=this.returnOrigin?.isConnected&&this.returnOrigin.getClientRects().length&&this.document.defaultView?.getComputedStyle(this.returnOrigin).visibility!==`hidden`?this.returnOrigin:o;if(v){let p=v.getBoundingClientRect(),N=this.document.defaultView?.innerHeight??this.viewportHeight();this.availablePanelHeight.set(`${Math.max(120,p.top-8,N-p.bottom-8)}px`)}if(this.trigger()?.open(!1,v),this.focusState.restore(t,e,n&&!this.focusSearchNext),n&&this.focusSearchNext){let p=this.document.getElementById(this.panelId)?.querySelector(`input`);p&&this.monitor.focusVia(p,e?`keyboard`:`program`,{preventScroll:!0})}this.trigger()?.reposition()},{injector:this.injector})}restoreOrigin(){let t=this.isCompact()&&this.rootItems().length?this.menuButton()?.nativeElement:this.bar()?.nativeElement,n=this.returnOrigin?.isConnected&&this.returnOrigin.getClientRects().length&&this.document.defaultView?.getComputedStyle(this.returnOrigin).visibility!==`hidden`?this.returnOrigin:t;n&&this.monitor.focusVia(n,this.keyboardOrigin?`keyboard`:`program`,{preventScroll:!0})}resolveOrigin(t){let e=t&&`currentTarget`in t?t.currentTarget:t,n=this.document.defaultView;return n&&e instanceof n.HTMLElement?e:this.isCompact()&&this.rootItems().length?this.menuButton()?.nativeElement:this.bar()?.nativeElement}isKeyboard(t){return!!t&&(`detail`in t?t.detail===0:`matches`in t&&t.matches(`:focus-visible`))}syncTabStops(){let t=this.primary()?.nativeElement;if(!t)return;let e=Array.from(t.querySelectorAll(`[role="menuitem"]`)).filter(o=>!o.matches(`:disabled, [aria-disabled="true"]`)),a=e.find(o=>o===this.document.activeElement)??e.find(o=>o.getAttribute(`aria-current`)===`page`)??e[0];for(let o of e)o.tabIndex=!this.isCompact()&&o===a?0:-1}observeLayout(){let t=this.document.defaultView,e=this.bar()?.nativeElement,n=this.primary()?.nativeElement,a=this.space()?.nativeElement;if(!t?.ResizeObserver||!e||!n||!a)return;let o=()=>{let p=e.getBoundingClientRect().width,N=p-a.clientWidth,O=n.classList.contains(`is-hidden`);O&&!this.previousCompactLayout&&(this.compactAdjustment=Math.max(0,this.expandedChrome-N)),O||(this.expandedChrome=N),this.previousCompactLayout=O,this.measuredWidth.set(p),this.overflowing.set(n.scrollWidth+N+(O?this.compactAdjustment:0)>p+1),this.rtl.set(t.getComputedStyle(this.host).direction===`rtl`)},c=new t.ResizeObserver(o);c.observe(e),c.observe(n),c.observe(a);let v=new t.MutationObserver(o);for(let p=this.host;p;p=p.parentElement)v.observe(p,{attributes:!0,attributeFilter:[`dir`]});o(),this.destroyRef.onDestroy(()=>{c.disconnect(),v.disconnect()})}static ɵfac=function(e){return new(e||i)};static ɵcmp=H({type:i,selectors:[[`bx-top-nav`]],viewQuery:function(e,n){e&1&&Mr$1(n.bar,kn$1,5,B$1)(n.primary,Pn,5,B$1)(n.space,Ln$1,5,B$1)(n.menuButton,En$1,5,B$1)(n.trigger,Rn$1,5),e&2&&Qt$2(5)},hostVars:8,hostBindings:function(e,n){e&2&&(Pe(`--%NS%bx-top-nav-top`,n.resolvedConfig().top)(`--%NS%bx-top-nav-panel-width`,n.resolvedConfig().panelWidth)(`--%NS%bx-top-nav-panel-max-height`,n.resolvedConfig().panelMaxHeight),Z(`is-sticky`,n.resolvedConfig().position===`sticky`))},inputs:{config:[1,`config`],groups:[1,`groups`],itemTemplate:[1,`itemTemplate`],opened:[1,`opened`]},outputs:{opened:`openedChange`,itemSelected:`itemSelected`},exportAs:[`bxTopNav`],features:[ln$1([z$1,se$1])],decls:17,vars:26,consts:[[`bar`,``,`panelTrigger`,`bxMenuTrigger`],[`space`,``],[`menuButton`,``],[`primary`,``],[`panel`,``],[`tabindex`,`-1`,`bxSurface`,``,`menuPlacement`,`bottom`,1,`bx-top-nav-bar`,3,`menuOpened`,`menuClosing`,`menuClosed`,`bxSurfaceInteractive`,`bxOverlayContext`,`bxMenuTrigger`,`menuManual`,`menuHover`,`menuPinned`,`menuSide`,`menuLabel`],[1,`bx-top-nav-brand`],[1,`bx-top-nav-links`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`type`,`button`,`aria-haspopup`,`dialog`,1,`bx-top-nav-toggle`,3,`click`],[`name`,`menu`,`size`,`16`],[`tabindex`,`-1`,1,`bx-top-nav-primary`,3,`keydown`,`focusin`],[3,`item`,`horizontal`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-haspopup`,`dialog`,1,`bx-top-nav-search-toggle`,3,`bxTooltip`],[1,`bx-top-nav-actions`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-haspopup`,`dialog`,1,`bx-top-nav-search-toggle`,3,`click`,`bxTooltip`],[`name`,`search`,`size`,`20`],[`data-bx-navigation-surface`,``,`role`,`dialog`,`tabindex`,`-1`,1,`bx-top-nav-panel`,3,`keydown`,`id`],[1,`bx-top-nav-panel-header`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,1,`bx-top-nav-close`,3,`click`],[`name`,`x`,`size`,`20`],[`subscriptSizing`,`dynamic`,1,`bx-top-nav-search`,3,`placeholder`,`ariaLabel`,`clearLabel`,`ngModel`],[`data-bx-nav-scroll`,``,1,`bx-top-nav-scroll`,3,`id`],[`role`,`status`,`aria-live`,`polite`,1,`cdk-visually-hidden`],[`subscriptSizing`,`dynamic`,1,`bx-top-nav-search`,3,`ngModelChange`,`placeholder`,`ariaLabel`,`clearLabel`,`ngModel`],[3,`back`,`navigate`],[`role`,`menu`,`tabindex`,`-1`,1,`bx-top-nav-items`],[`role`,`menu`,`tabindex`,`-1`,1,`bx-top-nav-items`,3,`keydown`],[3,`item`,`context`],[`role`,`status`,1,`bx-top-nav-empty`],[1,`bx-top-nav-section`],[1,`bx-top-nav-heading`,3,`is-active`],[3,`item`],[1,`bx-top-nav-heading`],[`size`,`20`,3,`name`]],template:function(e,n){if(e&1&&(P$1(0,`nav`,5,0),be$1(`menuOpened`,function(){return n.panelOpened()})(`menuClosing`,function(){return n.focusState.remember()})(`menuClosed`,function(){return n.panelClosed()}),ce(3,An$1,2,2,`div`,6),P$1(4,`div`,7,1)(6,`button`,8,2),be$1(`click`,function(o){return n.toggle(o)}),Oe$1(8,`bx-icon`,9),L$1(),P$1(9,`div`,10,3),be$1(`keydown`,function(o){return n.rootKey(o)})(`focusin`,function(o){return n.rootFocus(o)}),xr$1(11,Fn$1,1,2,`bx-navigation-item`,11,Ze$1),L$1()(),ce(13,Bn$1,2,4,`button`,12),ce(14,Hn$1,2,2,`div`,13),L$1(),ex(15,ei$1,11,9,`ng-template`,null,4,uv)),e&2){let a,o,c=Pl(16);te$1(`bxSurfaceInteractive`,!1)(`bxOverlayContext`,uO(25,Dn$1))(`bxMenuTrigger`,c)(`menuManual`,!0)(`menuHover`,!1)(`menuPinned`,!0)(`menuSide`,n.state.config().side===`right`?`left`:`right`)(`menuLabel`,n.state.parent()?.label??n.state.text().ariaLabel),j$1(`aria-label`,n.state.text().ariaLabel),S(3),ue((a=n.brandTemplate())?3:-1,a),S(),Z(`is-empty`,!n.rootItems().length),S(2),Pe(`display`,n.isCompact()&&n.rootItems().length?null:`none`),j$1(`aria-label`,n.state.text().openLabel)(`aria-expanded`,n.opened())(`aria-controls`,n.opened()?n.panelId:null),S(3),Z(`is-hidden`,n.isCompact()),j$1(`role`,n.rootItems().length?`menubar`:null)(`aria-label`,n.state.text().ariaLabel)(`aria-hidden`,n.isCompact()?!0:null)(`inert`,n.isCompact()?``:null),S(2),Sr$1(n.rootItems()),S(2),ue(n.resolvedConfig().searchable?13:-1),S(),ue((o=n.actionsTemplate())?14:-1,o)}},dependencies:[Gl,O7,N7,pF,qf,hT,Rt$3,bt$2,W0,Z0,$r$1,re,Ne$2],styles:[`
[_nghost-%COMP%] {
  --%NS%bx-nav-item-radius: var(--%NS%bx-top-nav-item-radius, 0.5rem);
  --%NS%bx-nav-item-gap: var(--%NS%bx-top-nav-item-gap, 0.5rem);
  --%NS%bx-nav-item-background: var(--%NS%bx-top-nav-item-background, transparent);
  --%NS%bx-nav-item-hover-background: var( --%NS%bx-top-nav-item-hover-background, var(--%NS%bx-accent-subtle) );
  --%NS%bx-nav-item-active-background: var( --%NS%bx-top-nav-item-active-background, var(--%NS%bx-accent-subtle) );
  display: block;
  min-width: 0;
  width: 100%;
  font-family: inherit;
  color: var(--%NS%bx-text-primary);
}
.is-sticky[_nghost-%COMP%] {
  position: sticky;
  inset-block-start: var(--%NS%bx-top-nav-top, 0);
  z-index: 200;
}
.bx-top-nav-bar[_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: 0.72;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-top-nav-gap, 0.5rem);
  box-sizing: border-box;
  min-height: var(--%NS%bx-top-nav-height, 3.75rem);
  padding-block: var(--%NS%bx-top-nav-padding-block, 0.5rem);
  padding-inline: var(--%NS%bx-top-nav-padding-inline, 0.75rem);
  border-radius: var(--%NS%bx-top-nav-radius, 0.5rem);
}
.bx-top-nav-brand[_ngcontent-%COMP%], 
.bx-top-nav-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  max-width: 100%;
  overflow-wrap: anywhere;
}
.bx-top-nav-brand[_ngcontent-%COMP%] {
  flex: 0 1 auto;
}
.bx-top-nav-actions[_ngcontent-%COMP%] {
  flex: 0 1 auto;
  justify-content: flex-end;
}
.bx-top-nav-links[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
  min-width: 2.5rem;
  min-height: 2.5rem;
  overflow: hidden;
}
.bx-top-nav-links.is-empty[_ngcontent-%COMP%] {
  min-width: 0;
  min-height: 0;
}
.bx-top-nav-primary[_ngcontent-%COMP%] {
  display: flex;
  flex: none;
  align-items: center;
  gap: var(--%NS%bx-nav-item-gap);
  width: max-content;
}
.bx-top-nav-primary.is-hidden[_ngcontent-%COMP%] {
  position: absolute;
  visibility: hidden;
  pointer-events: none;
}
.bx-top-nav-toggle[_ngcontent-%COMP%], 
.bx-top-nav-search-toggle[_ngcontent-%COMP%], 
.bx-top-nav-close[_ngcontent-%COMP%] {
  flex: none;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
}
.bx-top-nav-search-toggle[_ngcontent-%COMP%], 
.bx-top-nav-close[_ngcontent-%COMP%] {
  --%NS%bx-glass-radius: 9999px;
}
.bx-top-nav-panel[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 0;
  width: var(--%NS%bx-top-nav-panel-width, 24rem);
  max-width: calc(100dvw - 1rem);
  max-height: min(var(--%NS%bx-top-nav-panel-max-height, 32rem), var(--%NS%bx-top-nav-available-height, calc(100dvh - 1rem)));
  overflow: hidden;
  background: var(--%NS%bx-bg-surface);
  color: var(--%NS%bx-text-primary);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-top-nav-radius, 0.5rem);
  box-shadow: 0 12px 20px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
}
.bx-top-nav-panel-header[_ngcontent-%COMP%] {
  display: flex;
  flex: none;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
}
.bx-top-nav-panel-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  overflow-wrap: anywhere;
}
.bx-top-nav-search[_ngcontent-%COMP%] {
  display: block;
  flex: none;
  padding-inline: 0.5rem;
  padding-block-end: 0.25rem;
}
.bx-top-nav-scroll[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  min-height: 0;
  padding: 0.5rem;
  overflow: hidden auto;
  scrollbar-gutter: stable;
  overscroll-behavior: contain;
  scroll-behavior: auto;
}
.bx-top-nav-items[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-nav-item-gap);
}
.bx-top-nav-section[_ngcontent-%COMP%]    + .bx-top-nav-section[_ngcontent-%COMP%] {
  margin-block-start: 1rem;
}
.bx-top-nav-heading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 0.25rem;
  padding: 0.5rem;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
  font-weight: 600;
  overflow-wrap: anywhere;
}
.bx-top-nav-heading.is-active[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-accent);
}
.bx-top-nav-empty[_ngcontent-%COMP%] {
  padding: 0.75rem;
  color: var(--%NS%bx-text-secondary);
}
@media (forced-colors: active) {
  .bx-top-nav-panel[_ngcontent-%COMP%] {
    border-color: CanvasText;
  }
}`]})};var _t$1=class i{template=p(Gn$2);navigation=p(Te$1);constructor(){this.navigation.setBrandTemplate(this.template),p(J$1).onDestroy(()=>this.navigation.setBrandTemplate(null))}static ngTemplateContextGuard(t,e){return!0}static ɵfac=function(e){return new(e||i)};static ɵdir=U$2({type:i,selectors:[[``,`bxTopNavBrand`,``]]})};var yt$1=class i{template=p(Gn$2);navigation=p(Te$1);constructor(){this.navigation.setActionsTemplate(this.template),p(J$1).onDestroy(()=>this.navigation.setActionsTemplate(null))}static ngTemplateContextGuard(t,e){return!0}static ɵfac=function(e){return new(e||i)};static ɵdir=U$2({type:i,selectors:[[``,`bxTopNavActions`,``]]})};var e$1=[{id:`divider`,title:`Divider`,group:`Primitives`,readme:`projects/blocks/primitives/components/divider/README.md`,symbol:`Divider`,package:`@filip.mazev/blocks/primitives`,selector:`bx-divider`,description:`Horizontal, vertical and labelled separators using shared border tokens.`,example:`<bx-divider label="Continue" />`},{id:`popover`,title:`Popover`,group:`Primitives`,readme:`projects/blocks/primitives/components/popover/README.md`,symbol:`Popover, PopoverDirective`,package:`@filip.mazev/blocks/primitives`,selector:`[bxPopover]`,description:`General interactive overlays with positioning, focus handling and theme inheritance.`,example:`<button [bxPopover]="details">Details</button>
<ng-template #details><bx-popover>Project information</bx-popover></ng-template>`},{id:`skeleton`,title:`Skeleton`,group:`Primitives`,readme:`projects/blocks/primitives/components/skeleton/README.md`,symbol:`Skeleton`,package:`@filip.mazev/blocks/primitives`,selector:`bx-skeleton`,description:`Text, rectangular and circular placeholders with reduced-motion support.`,example:`<bx-skeleton [lines]="3" />`},{id:`chip`,title:`Interactive chip`,group:`Primitives`,readme:`projects/blocks/primitives/components/chip/README.md`,symbol:`Chip`,package:`@filip.mazev/blocks/primitives`,selector:`bx-chip`,description:`Selectable actions and removable tokens with native keyboard interaction.`,example:`<bx-chip label="Design" [(selected)]="designSelected" [removable]="true" (removed)="removeDesign()" />`},{id:`accordion`,title:`Accordion`,group:`Primitives`,readme:`projects/blocks/primitives/components/accordion/README.md`,symbol:`Accordion, Collapsible`,package:`@filip.mazev/blocks/primitives`,selector:`bx-accordion`,description:`Single or multiple expanded sections with keyboard heading navigation.`,example:`<bx-accordion><bx-accordion-item title="Details">Project content</bx-accordion-item></bx-accordion>`},{id:`collapsible`,title:`Collapsible`,group:`Primitives`,readme:`projects/blocks/primitives/components/collapsible/README.md`,symbol:`Collapsible`,package:`@filip.mazev/blocks/primitives`,selector:`bx-collapsible`,description:`An independently controlled disclosure with persistent or lazy content.`,example:`<bx-collapsible title="Details" [(expanded)]="expanded">Project content</bx-collapsible>`},{id:`alert`,title:`Inline alert / banner`,group:`Primitives`,readme:`projects/blocks/primitives/components/alert/README.md`,symbol:`Alert`,package:`@filip.mazev/blocks/primitives`,selector:`bx-alert`,description:`Semantic informational, danger, warning, success and neutral banners.`,example:`<bx-alert tone="success" title="Saved" message="Your changes are ready." />`},{id:`card`,title:`Card`,group:`Primitives`,readme:`projects/blocks/primitives/components/card/README.md`,symbol:`Card`,package:`@filip.mazev/blocks/primitives`,selector:`bx-card`,description:`Themed content surfaces and clickable cards with selected, disabled and read-only states.`,example:`<bx-card title="Project" [clickable]="true" [selected]="true" highlightColor="accent"><p>Selected workspace</p></bx-card>`},{id:`container`,title:`Content container`,group:`Primitives`,readme:`projects/blocks/primitives/components/container/README.md`,symbol:`Container`,package:`@filip.mazev/blocks/primitives`,selector:`bx-container`,description:`Centered page content, shared width presets and optional named landmarks.`,example:`<bx-container size="lg" landmark="main">Page content</bx-container>`},{id:`stack`,title:`Stack layout`,group:`Primitives`,readme:`projects/blocks/primitives/components/stack/README.md`,symbol:`Stack`,package:`@filip.mazev/blocks/primitives`,selector:`bx-stack`,description:`Responsive horizontal or vertical layout using the shared spacing scale.`,example:`<bx-stack direction="responsive" [gap]="4">Related content</bx-stack>`},{id:`grid`,title:`Grid layout`,group:`Primitives`,readme:`projects/blocks/primitives/components/grid/README.md`,symbol:`Grid`,package:`@filip.mazev/blocks/primitives`,selector:`bx-grid`,description:`Responsive auto-fit or fixed-column layout for content and cards.`,example:`<bx-grid minColumnWidth="16rem"><bx-card title="Project" /></bx-grid>`},{id:`side-nav`,title:`Side navigation`,group:`Navigation`,readme:`projects/blocks/navigation/components/side-nav/README.md`,symbol:`SideNav, SideNavHeaderDirective, SideNavFooterDirective`,package:`@filip.mazev/blocks/navigation`,selector:`bx-side-nav`,description:`Route-driven sections, nested flyouts, fuzzy search and responsive icon rails.`,example:`<bx-side-nav />`},{id:`top-nav`,title:`Top navigation`,group:`Navigation`,readme:`projects/blocks/navigation/components/top-nav/README.md`,symbol:`TopNav, TopNavBrandDirective, TopNavActionsDirective`,package:`@filip.mazev/blocks/navigation`,selector:`bx-top-nav`,description:`Responsive horizontal navigation with one dropdown panel, contextual search, and shared nested browsing.`,example:`<bx-top-nav><ng-template bxTopNavBrand>Studio</ng-template><ng-template bxTopNavActions><!-- application actions --></ng-template></bx-top-nav>`},{id:`truncate`,title:`Truncated text`,group:`Primitives`,readme:`projects/blocks/primitives/directives/truncate/README.md`,symbol:`TruncateDirective, TruncatedTextPipe, TooltipDirective`,package:`@filip.mazev/blocks/primitives`,selector:`[bxTruncate]`,description:`Shared ellipsis and measurement, a public conditional-text pipe, and optional automatic tooltips.`,example:`<span bxTruncate #overflow="bxTruncate" [bxTooltip]="label() | bxTruncatedText: overflow.truncated()">{{ label() }}</span>`},{id:`tag`,title:`Tag`,group:`Primitives`,readme:`projects/blocks/primitives/components/tag/README.md`,symbol:`Tag`,package:`@filip.mazev/blocks/primitives`,selector:`bx-tag`,description:`Themed translated tags with icons, counters, tooltips and selected-value summaries.`,example:`<bx-tag text="Skopje" leadingIcon="map-pin" color="accent" variant="tonal" [trailingNumber]="2" />`},{id:`signal-forms`,title:`Signal Forms`,group:`Forms`,readme:`projects/blocks/forms/README.md`,symbol:`InputField, Checkbox`,package:`@filip.mazev/blocks/forms`,selector:`[formField]`,description:`A complete form with async validation, cross-field rules, submission and reset.`,example:`<bx-input-field label="Email" [formField]="registration.email" />`},{id:`radio-group`,title:`Radio group`,group:`Forms`,readme:`projects/blocks/forms/components/radio-group/README.md`,symbol:`RadioGroup, Radio`,package:`@filip.mazev/blocks/forms`,selector:`bx-radio-group`,description:`Typed grouped selection with one form value and accessible validation.`,example:`<bx-radio-group label="Plan" [formField]="registration.plan"><bx-radio label="Team" value="team" /></bx-radio-group>`},{id:`select`,title:`Select`,group:`Forms`,readme:`projects/blocks/forms/components/select/README.md`,symbol:`Select`,package:`@filip.mazev/blocks/forms`,selector:`bx-select`,description:`A single-value selection control with a positioned options panel and optional search.`,example:`<bx-select label="Destination" [options]="options" [isSearchable]="true" [formControl]="destination" />`},{id:`multi-select`,title:`Multiselect`,group:`Forms`,readme:`projects/blocks/forms/components/multi-select/README.md`,symbol:`MultiSelect`,package:`@filip.mazev/blocks/forms`,selector:`bx-multi-select`,description:`Paginated checkbox selection with select-all intent and async requests.`,example:`<bx-multi-select label="Workspaces" [options]="options()" [hasMore]="hasMore()" [loading]="loading()" (loadMore)="loadNext($event)" />`},{id:`load-more`,title:`Load more`,group:`Forms`,readme:`projects/blocks/forms/directives/load-more/README.md`,symbol:`LoadMoreDirective`,package:`@filip.mazev/blocks/forms`,selector:`[bxLoadMore]`,description:`Shared pagination with overflow detection, a loading button, and failure/retry states.`,example:`<div bxLoadMore [loadMoreHasMore]="hasMore()" [loadMoreLoading]="loading()" [loadMoreError]="error()" (loadMore)="loadNext($event)"></div>`},{id:`loading-spinner`,title:`Loading spinner`,group:`Primitives`,readme:`projects/blocks/primitives/components/loading-spinner/README.md`,symbol:`LoadingSpinner`,package:`@filip.mazev/blocks/primitives`,selector:`bx-loading-spinner`,description:`A themed spinner with accessible naming and reduced-motion support.`,example:`<bx-loading-spinner label="Fetching results" [size]="24" />`},{id:`loading-indicator`,title:`Loading indicator`,group:`Primitives`,readme:`projects/blocks/primitives/components/loading-indicator/README.md`,symbol:`LoadingIndicator`,package:`@filip.mazev/blocks/primitives`,selector:`bx-loading-indicator`,description:`A spinner and translated status text for asynchronous content.`,example:`<bx-loading-indicator label="Fetching results" />`},{id:`progress-bar`,title:`Progress bar`,group:`Primitives`,readme:`projects/blocks/primitives/components/progress-bar/README.md`,symbol:`ProgressBar`,package:`@filip.mazev/blocks/primitives`,selector:`bx-progress-bar`,description:`Determinate, buffered and indeterminate asynchronous progress.`,example:`<bx-progress-bar [value]="progress()" label="Upload progress" />`},{id:`button-loading`,title:`Loading button`,group:`Forms`,readme:`projects/blocks/forms/components/button/README.md`,symbol:`Button`,package:`@filip.mazev/blocks/forms`,selector:`button[bx-button]`,description:`Async actions with icon replacement, busy semantics, and disabled activation.`,example:`<button bx-button [loading]="saving()">Save changes</button>`},{id:`hint`,title:`Field hints`,group:`Forms`,readme:`projects/blocks/forms/directives/hint/README.md`,symbol:`BxHint`,package:`@filip.mazev/blocks/forms`,selector:`bx-hint`,description:`Visible supporting text with automatic control associations.`,example:`<bx-input-field label="Reference" hint="Your public reference" hintEnd="Optional" />`},{id:`prefix`,title:`Field prefix`,group:`Forms`,readme:`projects/blocks/forms/directives/prefix/README.md`,symbol:`PrefixDirective`,package:`@filip.mazev/blocks/forms`,selector:`[bxPrefix]`,description:`Custom content before the editable input.`,example:`<bx-input-field label="Amount"><span bxPrefix>$</span></bx-input-field>`},{id:`suffix`,title:`Field suffix`,group:`Forms`,readme:`projects/blocks/forms/directives/suffix/README.md`,symbol:`SuffixDirective`,package:`@filip.mazev/blocks/forms`,selector:`[bxSuffix]`,description:`Custom content after the editable input.`,example:`<bx-input-field label="Weight"><span bxSuffix>kg</span></bx-input-field>`},{id:`native-control`,title:`Native form control`,group:`Forms`,readme:`projects/blocks/forms/directives/native-control/README.md`,symbol:`NativeControlDirective`,package:`@filip.mazev/blocks/forms`,selector:`[bxInput]`,description:`Connect native inputs and textareas to the shared accessible frame.`,example:`<bx-form-field label="Notes"><textarea bxInput label="Notes"></textarea></bx-form-field>`},{id:`button`,title:`Button`,group:`Forms`,readme:`projects/blocks/forms/components/button/README.md`,symbol:`Button`,package:`@filip.mazev/blocks/forms`,selector:`button[bx-button]`,description:`An action control with Blocks intent colors, familiar variants and visible focus.`,example:`<button bx-button variant="filled" (click)="save()">Save changes</button>`},{id:`checkbox-indicator`,title:`Checkbox indicator`,group:`Forms`,readme:`projects/blocks/forms/components/checkbox-indicator/README.md`,symbol:`CheckboxIndicator`,package:`@filip.mazev/blocks/forms`,selector:`bx-checkbox-indicator`,description:`A shared decorative checkbox face for checked, unchecked and partial selection.`,example:`<bx-checkbox-indicator [checked]="selected()" [indeterminate]="partial()" />`},{id:`checkbox`,title:`Checkbox`,group:`Forms`,readme:`projects/blocks/forms/components/checkbox/README.md`,symbol:`Checkbox`,package:`@filip.mazev/blocks/forms`,selector:`bx-checkbox`,description:`A boolean choice integrated with Angular forms.`,example:`<bx-checkbox label="Receive updates" [formControl]="updates" />`},{id:`form-field`,title:`Form field`,group:`Forms`,readme:`projects/blocks/forms/components/form-field/README.md`,symbol:`FormField`,package:`@filip.mazev/blocks/forms`,selector:`bx-form-field`,description:`A shared label, help text, validation and loading frame for controls.`,example:`<bx-form-field label="Project name" forId="project" [required]="true" [error]="error">
  <input id="project" (input)="update($event)" />
</bx-form-field>`},{id:`input-field`,title:`Input field`,group:`Forms`,readme:`projects/blocks/forms/components/input-field/README.md`,symbol:`InputField`,package:`@filip.mazev/blocks/forms`,selector:`bx-input-field`,description:`A text, date or numeric input with a floating label and validation feedback.`,example:`<bx-input-field label="Project name" [formControl]="name" />`},{id:`radio`,title:`Radio`,group:`Forms`,readme:`projects/blocks/forms/components/radio-button/README.md`,symbol:`Radio`,package:`@filip.mazev/blocks/forms`,selector:`bx-radio`,description:`A single choice within a named group.`,example:`<bx-radio label="Daily" name="frequency" value="daily" [formControl]="frequency" />
<bx-radio label="Weekly" name="frequency" value="weekly" [formControl]="frequency" />`},{id:`search-input`,title:`Search input`,group:`Forms`,readme:`projects/blocks/forms/components/search-input/README.md`,symbol:`SearchInput`,package:`@filip.mazev/blocks/forms`,selector:`bx-search-input`,description:`A search control with a clear action, request loading, and explicit retry.`,example:`<bx-search-input label="Find a component" [(value)]="query" [loading]="loading()" [loadError]="loadError()" (search)="search($event)" (retry)="search($event)" />`},{id:`slider`,title:`Slider`,group:`Forms`,readme:`projects/blocks/forms/directives/slider/README.md`,symbol:`SliderDirective`,package:`@filip.mazev/blocks/forms`,selector:`input[type=range][bxSlider]`,description:`A native range input with an opaque circular thumb and theme-aware value fill.`,example:`<label for="volume">Volume</label>
<input id="volume" type="range" bxSlider min="0" max="100" [formControl]="volume" />`},{id:`range-slider`,title:`Range slider`,group:`Forms`,readme:`projects/blocks/forms/components/range-slider/README.md`,symbol:`RangeSlider`,package:`@filip.mazev/blocks/forms`,selector:`bx-range-slider`,description:`A constrained pair of range values with labels and tick marks.`,example:`<bx-range-slider label="Budget" [(value)]="range" [discrete]="true" />`},{id:`slide-toggle`,title:`Slide toggle`,group:`Forms`,readme:`projects/blocks/forms/components/slide-toggle/README.md`,symbol:`SlideToggle`,package:`@filip.mazev/blocks/forms`,selector:`bx-slide-toggle`,description:`A boolean preference that takes effect immediately.`,example:`<bx-slide-toggle label="Enable notifications" [formControl]="notifications" />`},{id:`error`,title:`Error message`,group:`Forms`,readme:`projects/blocks/forms/directives/error/README.md`,symbol:`BxError, FormField`,package:`@filip.mazev/blocks/forms`,selector:`bx-error`,description:`A projected custom error message inside a form-field.`,example:`<bx-form-field label="Reference" forId="reference">
  <input id="reference" aria-describedby="reference-error" />
  <bx-error id="reference-error">Enter at least three characters.</bx-error>
</bx-form-field>`},{id:`autocomplete`,title:`Editable autocomplete`,group:`Forms`,readme:`projects/blocks/forms/components/autocomplete/README.md`,symbol:`Autocomplete`,package:`@filip.mazev/blocks/forms`,selector:`bx-autocomplete`,description:`Free text and application-owned suggestions with keyboard navigation, async search and pagination.`,example:`<bx-autocomplete label="Destination" [options]="suggestions()" [(value)]="destination" />`},{id:`tabs`,title:`Tabs`,group:`Primitives`,readme:`projects/blocks/primitives/components/tabs/README.md`,symbol:`Tabs, Tab, TabContentDirective`,package:`@filip.mazev/blocks/primitives`,selector:`bx-tabs`,description:`Related panels with segmented or underline headers, keyboard navigation and optional lazy content.`,example:`<bx-tabs ariaLabel="Project information">
  <bx-tab label="Documentation" value="docs">
    <ng-template bxTabContent><app-documentation /></ng-template>
  </bx-tab>
  <bx-tab label="Code Examples" value="code">
    <ng-template bxTabContent><app-examples /></ng-template>
  </bx-tab>
</bx-tabs>`},{id:`menu`,title:`Menu`,group:`Primitives`,readme:`projects/blocks/primitives/components/menu/README.md`,symbol:`Menu, MenuItem`,package:`@filip.mazev/blocks/primitives`,selector:`bx-menu`,description:`A shared surface for related menu actions.`,example:`<bx-menu>
  <bx-menu-item label="Duplicate" icon="copy" (action)="duplicate()" />
  <bx-menu-item label="Archive" icon="archive" (action)="archive()" />
</bx-menu>`},{id:`menu-item`,title:`Menu item`,group:`Primitives`,readme:`projects/blocks/primitives/components/menu-item/README.md`,symbol:`MenuItem`,package:`@filip.mazev/blocks/primitives`,selector:`bx-menu-item`,description:`A menu action with optional icons, a shortcut hint, and destructive intent.`,example:`<bx-menu-item label="Open view" icon="external-link" [shortcut]="['mod', 'shift', 'v']" (action)="openView()" />`},{id:`tooltip`,title:`Tooltip`,group:`Primitives`,readme:`projects/blocks/primitives/components/tooltip/README.md`,symbol:`Tooltip`,package:`@filip.mazev/blocks/primitives`,selector:`bx-tooltip`,description:`A short descriptive surface for supplementary help.`,example:`<bx-tooltip text="Changes are saved automatically." />`},{id:`dropdown`,title:`Dropdown`,group:`Primitives`,readme:`projects/blocks/primitives/directives/dropdown/README.md`,symbol:`DropdownDirective, Menu, MenuItem`,package:`@filip.mazev/blocks/primitives`,selector:`[bxDropdown]`,description:`A positioned menu that fades in and out without resizing its contents.`,example:`<button bx-button [bxDropdown]="actions" bxTransition="fade">Actions</button>
<ng-template #actions>
  <bx-menu><bx-menu-item label="Save" (action)="save()" /></bx-menu>
</ng-template>`},{id:`context-menu`,title:`Context menu`,group:`Primitives`,readme:`projects/blocks/primitives/directives/context-menu/README.md`,symbol:`ContextMenuDirective, Menu, MenuItem`,package:`@filip.mazev/blocks/primitives`,selector:`[bxContextMenu]`,description:`A menu positioned at a context action’s coordinates.`,example:`<div [bxContextMenu]="actions" tabindex="0">Right-click or touch and hold here</div>
<ng-template #actions><bx-menu><bx-menu-item label="Copy" (action)="copy()" /></bx-menu></ng-template>`},{id:`tooltip-directive`,title:`Tooltip trigger`,group:`Primitives`,readme:`projects/blocks/primitives/directives/tooltip/README.md`,symbol:`TooltipDirective`,package:`@filip.mazev/blocks/primitives`,selector:`[bxTooltip]`,description:`Connects a help surface to a trigger using the overlay positioning system.`,example:`<button bx-button bxTooltip="Saves this project" placement="top">Save</button>`},{id:`breadcrumbs`,title:`Breadcrumbs`,group:`Navigation`,readme:`projects/blocks/navigation/components/breadcrumbs/README.md`,symbol:`Breadcrumbs`,package:`@filip.mazev/blocks/navigation`,selector:`bx-breadcrumbs`,description:`A route-aware trail derived from Blocks navigation metadata.`,example:`<bx-breadcrumbs [minimumBreadcrumbs]="1" divider="chevron-right" />`},{id:`icon`,title:`Icon`,group:`Icons`,readme:`projects/blocks/icons/components/README.md`,symbol:`Icon`,package:`@filip.mazev/blocks/icons`,selector:`bx-icon`,description:`An asynchronously loaded SVG icon using semantic foreground and background tokens.`,example:`<bx-icon name="sparkles" size="32" color="text-accent" [decorative]="false" ariaLabel="Highlights" />`},{id:`modal-core`,title:`Modal core`,group:`Modals`,readme:`projects/blocks/modal/components/README.md`,symbol:`ModalCore`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`The service-owned host that composes modal content and chooses the active layout.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open modal core</button>`},{id:`modal-centered`,title:`Centered modal`,group:`Modals`,readme:`projects/blocks/modal/components/views/centered/README.md`,symbol:`ModalCentered`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`A focused dialog centered in the available viewport.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open centered modal</button>`},{id:`modal-side`,title:`Side modal`,group:`Modals`,readme:`projects/blocks/modal/components/views/side/README.md`,symbol:`ModalSide`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`A left or right panel for editing alongside the page context.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open side modal</button>`},{id:`modal-bottom-sheet`,title:`Bottom sheet`,group:`Modals`,readme:`projects/blocks/modal/components/views/bottom-sheet/README.md`,symbol:`ModalBottomSheet`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`A bottom-aligned modal surface suitable for compact actions and mobile layouts.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open bottom sheet</button>`},{id:`modal-backdrop`,title:`Modal backdrop`,group:`Modals`,readme:`projects/blocks/modal/components/shared/ui/backdrop/README.md`,symbol:`ModalBackdrop`,package:`@filip.mazev/blocks/modal`,selector:`service-owned view`,description:`The background scrim that separates an open modal from page content.`,example:`<!-- Open from an action in your template -->
<button bx-button (click)="openModal()">Open modal backdrop</button>`},{id:`modal-banner`,title:`Modal banner`,group:`Modals`,readme:`projects/blocks/modal/components/shared/ui/banner/README.md`,symbol:`ModalBanner`,package:`@filip.mazev/blocks/modal`,selector:`bx-modal-banner`,description:`The shared modal heading, semantic icon and close action.`,example:`<bx-modal-banner [header]="{ text: 'Project settings' }" [showCloseButton]="true" (close)="handleClose($event)" />`},{id:`toast-core`,title:`Toast core`,group:`Notifications`,readme:`projects/blocks/toastr/components/README.md`,symbol:`ToastCore, ToastrService`,package:`@filip.mazev/blocks/toastr`,selector:`service-owned view`,description:`The toast lifecycle host with progress, dismissal and content composition.`,example:`<button bx-button (click)="notify()">Show notification</button>`},{id:`simple-toast`,title:`Simple toast`,group:`Notifications`,readme:`projects/blocks/toastr/components/views/simple-toast/README.md`,symbol:`SimpleToast, ToastrService`,package:`@filip.mazev/blocks/toastr`,selector:`service-owned view`,description:`A notification with a semantic icon, optional title and message.`,example:`<button bx-button (click)="notify()">Show success</button>`},{id:`surface`,title:`Surface effects`,group:`Primitives`,readme:`projects/blocks/effects/README.md`,symbol:`BxSurfaceDirective`,package:`@filip.mazev/blocks/effects`,selector:`[bxSurface]`,description:`Apply the shared glass material to a custom surface while inheriting application settings.`,example:`<section bxSurface>Custom content follows the global appearance settings.</section>`},{id:`modal-header`,title:`Modal header`,group:`Modals`,readme:`projects/blocks/modal/directives/header/README.md`,symbol:`ModalHeaderDirective`,package:`@filip.mazev/blocks/modal`,selector:`[appModalHeader]`,description:`Projects custom header content into the active Blocks modal layout.`,example:`<div *appModalHeader>Custom header content</div>`},{id:`modal-footer`,title:`Modal footer`,group:`Modals`,readme:`projects/blocks/modal/directives/footer/README.md`,symbol:`ModalFooterDirective`,package:`@filip.mazev/blocks/modal`,selector:`[appModalFooter]`,description:`Projects custom footer content into the active Blocks modal layout.`,example:`<div *appModalFooter>Custom footer content</div>`}];var e=[{version:`1.5.2`,summary:`Opt-in glassiness, remembered rendering preferences, selectable cards and stable lighting, with refined disclosure headers and a responsive appearance page.`,status:`released`,channel:`alpha`,readme:`documentation/releases/1.5.2/README.md`,fromCommit:`521c8221cb065e41c79a86af0aaf94aff04b731b`},{version:`1.5.0`,summary:`One Angular library with shared semantic themes, glass effects, forms, navigation, notifications and accessible interactions.`,status:`released`,channel:`beta`,readme:`documentation/releases/1.5.0/README.md`,fromCommit:`f9bf13b2bb6914c26d11639076006bd1dcc5a851`,toCommit:`55b915c819525cfa365d4b59389a765233b2cd35`}];var E=`alpha`;var L=`v1.5.2 (alpha)`;function Ii(i,e){i&1&&Oe$1(0,`bx-icon`,1)}function Ai(i,e){i&1&&Oe$1(0,`bx-icon`,2)}var We=class i{checked=m(!1);indeterminate=m(!1);invalid=m(!1);disabled=m(!1);emissive=m(!1);static ɵfac=function(t){return new(t||i)};static ɵcmp=H({type:i,selectors:[[`bx-checkbox-indicator`]],hostAttrs:[`aria-hidden`,`true`],hostVars:2,hostBindings:function(t,n){t&2&&Z(`is-emissive`,n.emissive())},inputs:{checked:[1,`checked`],indeterminate:[1,`indeterminate`],invalid:[1,`invalid`],disabled:[1,`disabled`],emissive:[1,`emissive`]},decls:3,vars:9,consts:[[`bxSurface`,``,1,`bx-checkbox-box`,3,`bxSurfaceInteractive`,`bxSurfaceEmission`],[`name`,`minus`,`size`,`16`],[`name`,`check`,`size`,`16`]],template:function(t,n){t&1&&(P$1(0,`span`,0),ce(1,Ii,1,0,`bx-icon`,1)(2,Ai,1,0,`bx-icon`,2),L$1()),t&2&&(Z(`is-checked`,n.checked()||n.indeterminate())(`is-invalid`,n.invalid())(`is-disabled`,n.disabled()),te$1(`bxSurfaceInteractive`,n.emissive())(`bxSurfaceEmission`,n.invalid()?`var(--bx-text-danger)`:`var(--bx-accent)`),S(),ue(n.indeterminate()?1:n.checked()?2:-1))},dependencies:[Rt$3,bt$2],styles:[`
[_nghost-%COMP%] {
  display: inline-flex;
  flex: 0 0 auto;
  vertical-align: middle;
  pointer-events: none;
  border-radius: var(--%NS%bx-rounded-sm);
}
.is-emissive[_nghost-%COMP%] {
  pointer-events: auto;
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
}`]})};var Ye=class i extends Kf{draft=x(void 0);displayedChecked=v(()=>this.draft()??this.checked());checked=Tr$1(!1);labelPosition=m(`after`);reset(){super.reset(),this.draft.set(void 0)}clearPendingEdit(){this.draft.set(void 0)}commitPendingValue(e){let t=this.draft();t===void 0||e===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.checked.set(t),this.draft.set(void 0))}onToggle(e){let t=e.target;if(this.disabled()||this.isReadonly()){t.checked=this.checked();return}let n=this.ngControl?.control?.updateOn;n===`blur`||n===`submit`?this.draft.set(t.checked):this.checked.set(t.checked)}onReadonlyClick(e){this.isReadonly()&&e.preventDefault()}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let e;return function(n){return(e||(e=ar$1(i)))(n||i)}})();static ɵdir=U$2({type:i,inputs:{checked:[1,`checked`],labelPosition:[1,`labelPosition`]},outputs:{checked:`checkedChange`},features:[St$2]})};var Li=[`*`,[[`bx-error`]],[[`bx-hint`]]];var Fi=[`*`,`bx-error`,`bx-hint`];var Vi=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var zi=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Hi(i,e){i&1&&(P$1(0,`span`,5),Re(1,`*`),L$1())}var Qn$1=class i extends Ye{indeterminate=Tr$1(!1);clickAction=m(`check-indeterminate`);emissive=m(!0);onToggle(e){if(this.clickAction()===`noop`){e.target.checked=this.displayedChecked(),e.target.indeterminate=this.indeterminate();return}super.onToggle(e),this.clickAction()===`check`&&(e.target.indeterminate=this.indeterminate()),!this.disabled()&&!this.isReadonly()&&this.clickAction()===`check-indeterminate`&&this.indeterminate.set(!1)}static ɵfac=(()=>{let e;return function(n){return(e||(e=ar$1(i)))(n||i)}})();static ɵcmp=H({type:i,selectors:[[`bx-checkbox`]],inputs:{indeterminate:[1,`indeterminate`],clickAction:[1,`clickAction`],emissive:[1,`emissive`]},outputs:{indeterminate:`indeterminateChange`},features:[St$2],ngContentSelectors:Fi,decls:10,vars:35,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`id`,`disabled`,`required`,`checked`,`indeterminate`],[3,`checked`,`indeterminate`,`invalid`,`disabled`,`emissive`],[1,`bx-inline-label`],[`aria-hidden`,`true`,1,`bx-inline-required`]],template:function(t,n){t&1&&(Ne$3(Li),P$1(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),be$1(`click`,function(o){return n.onReadonlyClick(o)})(`change`,function(o){return n.onToggle(o)})(`blur`,function(){return n.onBlur()}),L$1(),Oe$1(3,`bx-checkbox-indicator`,3),P$1(4,`span`,4),pe(5),Re(6),ce(7,Hi,2,0,`span`,5),L$1()(),pe(8,1,Vi),pe(9,2,zi),L$1()),t&2&&(te$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`loading`,n.loading())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),S(),Z(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`label-before`,n.labelPosition()===`before`),S(),te$1(`id`,n.controlId())(`disabled`,n.disabled())(`required`,n.effectiveRequired())(`checked`,n.displayedChecked())(`indeterminate`,n.indeterminate()),j$1(`name`,n.name()||null)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-readonly`,n.isReadonly()),S(),te$1(`checked`,n.displayedChecked())(`indeterminate`,n.indeterminate())(`invalid`,n.showError())(`disabled`,n.disabled())(`emissive`,n.emissive()),S(3),lr$1(``,n.resolvedLabel(),` `),S(),ue(n.effectiveRequired()&&!n.resolvedHideRequiredMarker()?7:-1))},dependencies:[Gf,We],styles:[`
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
}`]})};var Jn$1=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵcmp=H({type:i,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
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
`],encapsulation:2})}return i})();var Bi={passive:!0};var qi=(()=>{class i{_platform=p(zt$3);_ngZone=p(K);_renderer=p(an$2).createRenderer(null,null);_styleLoader=p(Zo);_monitoredElements=new Map;monitor(t){if(!this._platform.isBrowser)return Wt$3;this._styleLoader.load(Jn$1);let n=Sa(t),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new De$1,a=`cdk-text-field-autofilled`,u=y=>{y.animationName===`cdk-text-field-autofill-start`&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:y.target,isAutofilled:!0}))):y.animationName===`cdk-text-field-autofill-end`&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:y.target,isAutofilled:!1})))},g=this._ngZone.runOutsideAngular(()=>(n.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(n,`animationstart`,u,Bi)));return this._monitoredElements.set(n,{subject:o,unlisten:g}),o}stopMonitoring(t){let n=Sa(t),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove(`cdk-text-field-autofill-monitored`),n.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((t,n)=>this.stopMonitoring(n))}static ɵfac=function(n){return new(n||i)};static ɵprov=G({token:i,factory:i.ɵfac})}return i})();var ei=(()=>{class i{_elementRef=p(B$1);_autofillMonitor=p(qi);cdkAutofill=new Fe;ngOnInit(){this._autofillMonitor.monitor(this._elementRef).subscribe(t=>this.cdkAutofill.emit(t))}ngOnDestroy(){this._autofillMonitor.stopMonitoring(this._elementRef)}static ɵfac=function(n){return new(n||i)};static ɵdir=U$2({type:i,selectors:[[``,`cdkAutofill`,``]],outputs:{cdkAutofill:`cdkAutofill`}})}return i})();var ti=(()=>{class i{_elementRef=p(B$1);_platform=p(zt$3);_ngZone=p(K);_renderer=p(Zt$2);_resizeEvents=new De$1;_previousValue;_initialHeight;_destroyed=new De$1;_listenerCleanups;_minRows;_maxRows;_enabled=!0;_previousMinRows=-1;_textareaElement;get minRows(){return this._minRows}set minRows(t){this._minRows=_F(t),this._setMinHeight()}get maxRows(){return this._maxRows}set maxRows(t){this._maxRows=_F(t),this._setMaxHeight()}get enabled(){return this._enabled}set enabled(t){this._enabled!==t&&((this._enabled=t)?this.resizeToFitContent(!0):this.reset())}get placeholder(){return this._textareaElement.placeholder}set placeholder(t){this._cachedPlaceholderHeight=void 0,t?this._textareaElement.setAttribute(`placeholder`,t):this._textareaElement.removeAttribute(`placeholder`),this._cacheTextareaPlaceholderHeight()}_cachedLineHeight;_cachedPlaceholderHeight;_document=p(ie$1);_hasFocus=!1;_isViewInited=!1;constructor(){p(Zo).load(Jn$1),this._textareaElement=this._elementRef.nativeElement}_setMinHeight(){let t=this.minRows&&this._cachedLineHeight?`${this.minRows*this._cachedLineHeight}px`:null;t&&(this._textareaElement.style.minHeight=t)}_setMaxHeight(){let t=this.maxRows&&this._cachedLineHeight?`${this.maxRows*this._cachedLineHeight}px`:null;t&&(this._textareaElement.style.maxHeight=t)}ngAfterViewInit(){this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(()=>{this._listenerCleanups=[this._renderer.listen(`window`,`resize`,()=>this._resizeEvents.next()),this._renderer.listen(this._textareaElement,`focus`,this._handleFocusEvent),this._renderer.listen(this._textareaElement,`blur`,this._handleFocusEvent)],this._resizeEvents.pipe(_u(16)).subscribe(()=>{this._cachedLineHeight=this._cachedPlaceholderHeight=void 0,this.resizeToFitContent(!0)})}),this._isViewInited=!0,this.resizeToFitContent(!0))}ngOnDestroy(){this._listenerCleanups?.forEach(t=>t()),this._resizeEvents.complete(),this._destroyed.next(),this._destroyed.complete()}_cacheTextareaLineHeight(){if(this._cachedLineHeight)return;let t=this._textareaElement.cloneNode(!1),n=t.style;t.rows=1,n.position=`absolute`,n.visibility=`hidden`,n.border=`none`,n.padding=`0`,n.height=``,n.minHeight=``,n.maxHeight=``,n.top=n.bottom=n.left=n.right=`auto`,n.overflow=`hidden`,this._textareaElement.parentNode.appendChild(t),this._cachedLineHeight=t.clientHeight,t.remove(),this._setMinHeight(),this._setMaxHeight()}_measureScrollHeight(){let t=this._textareaElement,n=t.style.marginBottom||``,r=this._platform.FIREFOX,o=this._hasFocus,a=r?`cdk-textarea-autosize-measuring-firefox`:`cdk-textarea-autosize-measuring`;o&&(t.style.marginBottom=`${t.clientHeight}px`),t.classList.add(a);let u=t.scrollHeight-4;return t.classList.remove(a),o&&(t.style.marginBottom=n),u}_cacheTextareaPlaceholderHeight(){if(!this._isViewInited||this._cachedPlaceholderHeight!=null)return;if(!this.placeholder){this._cachedPlaceholderHeight=0;return}let t=this._textareaElement.value;this._textareaElement.value=this._textareaElement.placeholder,this._cachedPlaceholderHeight=this._measureScrollHeight(),this._textareaElement.value=t}_handleFocusEvent=t=>{this._hasFocus=t.type===`focus`};ngDoCheck(){this._platform.isBrowser&&this.resizeToFitContent()}resizeToFitContent(t=!1){if(!this._enabled||(this._cacheTextareaLineHeight(),this._cacheTextareaPlaceholderHeight(),!this._cachedLineHeight))return;let n=this._elementRef.nativeElement,r=n.value;if(!t&&this._minRows===this._previousMinRows&&r===this._previousValue)return;let o=this._measureScrollHeight(),a=Math.max(o,this._cachedPlaceholderHeight||0);n.style.height=`${a}px`,this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame<`u`?requestAnimationFrame(()=>this._scrollToCaretPosition(n)):setTimeout(()=>this._scrollToCaretPosition(n))}),this._previousValue=r,this._previousMinRows=this._minRows}reset(){this._initialHeight!==void 0&&(this._textareaElement.style.height=this._initialHeight)}_noopInputHandler(){}_scrollToCaretPosition(t){let{selectionStart:n,selectionEnd:r}=t;!this._destroyed.isStopped&&this._hasFocus&&t.setSelectionRange(n,r)}static ɵfac=function(n){return new(n||i)};static ɵdir=U$2({type:i,selectors:[[`textarea`,`cdkTextareaAutosize`,``]],hostAttrs:[`rows`,`1`,1,`cdk-textarea-autosize`],hostBindings:function(n,r){n&1&&be$1(`input`,function(){return r._noopInputHandler()})},inputs:{minRows:[0,`cdkAutosizeMinRows`,`minRows`],maxRows:[0,`cdkAutosizeMaxRows`,`maxRows`],enabled:[2,`cdkTextareaAutosize`,`enabled`,R$1],placeholder:`placeholder`},exportAs:[`cdkTextareaAutosize`]})}return i})();var ai=Symbol(`FIELD_TREE`);var Ot$1=0;function Ki(){return Ot$1}function te(i,e){return(...t)=>{try{return Ot$1=e,i(...t)}finally{Ot$1=0}}}function Ui(i){return!i}function ni(i){return i}function U$1(i){return Array.isArray(i)}function Qe(i){return(typeof i==`object`||typeof i==`function`)&&i!=null}var ae=Symbol();var at$1=Symbol();var Ne$1=class{predicates;fns=[];constructor(e){this.predicates=e}push(e){this.fns.push(ii(this.predicates,e))}mergeIn(e){let t=this.predicates?e.fns.map(n=>ii(this.predicates,n)):e.fns;this.fns.push(...t)}hasRules(){return this.fns.length>0}};var Je=class extends Ne$1{get defaultValue(){return!1}compute(e){return this.fns.some(t=>{let n=t(e);return n&&n!==at$1})}};var be=class i extends Ne$1{ignore;static ignoreNull(e){return new i(e,t=>t===null)}constructor(e,t){super(e),this.ignore=t}get defaultValue(){return[]}compute(e){return this.fns.reduce((t,n)=>{let r=n(e);return r===void 0||r===at$1?t:U$1(r)?[...t,...this.ignore?r.filter(o=>!this.ignore(o)):r]:this.ignore&&this.ignore(r)?t:[...t,r]},[])}};var kt$1=class extends be{constructor(e){super(e,void 0)}};var Et$1=class extends Ne$1{key;get defaultValue(){return this.key.reducer.getInitial()}constructor(e,t){super(e),this.key=t}compute(e){if(this.fns.length===0)return this.key.reducer.getInitial();let t=this.key.reducer.getInitial();for(let n=0;n<this.fns.length;n++){let r=this.fns[n](e);r!==at$1&&(t=this.key.reducer.reduce(t,r))}return t}};function ii(i,e){return i.length===0?e:t=>{for(let n of i){let r=t.stateOf(n.path),o=z$2(r.structure.pathKeys).length-n.depth;for(let a=0;a<o;a++)r=r.structure.parent;if(!n.fn(r.context))return at$1}return e(t)}}var me=class{predicates;hidden;disabledReasons;readonly;syncErrors;syncTreeErrors;asyncErrors;metadata=new Map;constructor(e){this.predicates=e,this.hidden=new Je(e),this.disabledReasons=new kt$1(e),this.readonly=new Je(e),this.syncErrors=be.ignoreNull(e),this.syncTreeErrors=be.ignoreNull(e),this.asyncErrors=be.ignoreNull(e)}hasAnyLogic(){return this.hidden.hasRules()||this.disabledReasons.hasRules()||this.readonly.hasRules()||this.syncErrors.hasRules()||this.syncTreeErrors.hasRules()||this.asyncErrors.hasRules()||this.metadata.size>0}hasMetadata(e){return this.metadata.has(e)}hasMetadataKeys(){return this.metadata.size>0}getMetadataKeys(){return this.metadata.keys()}getMetadata(e){return this.metadata.has(e)||this.metadata.set(e,new Et$1(this.predicates,e)),this.metadata.get(e)}mergeIn(e){this.hidden.mergeIn(e.hidden),this.disabledReasons.mergeIn(e.disabledReasons),this.readonly.mergeIn(e.readonly),this.syncErrors.mergeIn(e.syncErrors),this.syncTreeErrors.mergeIn(e.syncTreeErrors),this.asyncErrors.mergeIn(e.asyncErrors);for(let t of e.getMetadataKeys()){let n=e.metadata.get(t);this.getMetadata(t).mergeIn(n)}}};var et$1=class{depth;constructor(e){this.depth=e}build(){return new tt$1(this,[],0)}};var ye$1=class i extends et$1{constructor(e){super(e)}current;all=[];addHiddenRule(e){this.getCurrent().addHiddenRule(e)}addDisabledReasonRule(e){this.getCurrent().addDisabledReasonRule(e)}addReadonlyRule(e){this.getCurrent().addReadonlyRule(e)}addSyncErrorRule(e){this.getCurrent().addSyncErrorRule(e)}addSyncTreeErrorRule(e){this.getCurrent().addSyncTreeErrorRule(e)}addAsyncErrorRule(e){this.getCurrent().addAsyncErrorRule(e)}addMetadataRule(e,t){this.getCurrent().addMetadataRule(e,t)}getChild(e){if(e===ae){let t=this.getCurrent().children;t.size>(t.has(ae)?1:0)&&(this.current=void 0)}return this.getCurrent().getChild(e)}hasLogic(e){return this===e?!0:this.all.some(({builder:t})=>t.hasLogic(e))}hasRules(){return this.all.length>0}anyChildHasLogic(){return this.all.some(({builder:e})=>e.anyChildHasLogic())}mergeIn(e,t){t?this.all.push({builder:e,predicate:{fn:te(t.fn,this.depth),path:t.path}}):this.all.push({builder:e}),this.current=void 0}getCurrent(){return this.current===void 0&&(this.current=new Te(this.depth),this.all.push({builder:this.current})),this.current}static newRoot(){return new i(0)}};var Te=class extends et$1{logic=new me([]);children=new Map;constructor(e){super(e)}addHiddenRule(e){this.logic.hidden.push(te(e,this.depth))}addDisabledReasonRule(e){this.logic.disabledReasons.push(te(e,this.depth))}addReadonlyRule(e){this.logic.readonly.push(te(e,this.depth))}addSyncErrorRule(e){this.logic.syncErrors.push(te(e,this.depth))}addSyncTreeErrorRule(e){this.logic.syncTreeErrors.push(te(e,this.depth))}addAsyncErrorRule(e){this.logic.asyncErrors.push(te(e,this.depth))}addMetadataRule(e,t){this.logic.getMetadata(e).push(te(t,this.depth))}getChild(e){return this.children.has(e)||this.children.set(e,new ye$1(this.depth+1)),this.children.get(e)}hasLogic(e){return this===e}hasRules(){return this.logic.hasAnyLogic()||this.children.size>0}anyChildHasLogic(){for(let e of this.children.values())if(e.hasRules())return!0;return!1}};var tt$1=class i{builder;predicates;depth;logic;constructor(e,t,n){this.builder=e,this.predicates=t,this.depth=n,this.logic=e?$i(e,t,n):new me([])}getChild(e){let t=this.builder?si(this.builder,e):[];if(t.length===0)return new i(void 0,[],this.depth+1);if(t.length===1){let{builder:n,predicates:r}=t[0];return new i(n,[...this.predicates,...r.map(o=>Pt$1(o,this.depth))],this.depth+1)}else return new Dt$1(t.map(({builder:r,predicates:o})=>new i(r,[...this.predicates,...o.map(a=>Pt$1(a,this.depth))],this.depth+1)))}hasLogic(e){return this.builder?this.builder.hasLogic(e):!1}hasRules(){return this.builder?this.builder.hasRules():!1}anyChildHasLogic(){return this.builder?this.builder.anyChildHasLogic():!1}};var Dt$1=class i{all;logic;constructor(e){this.all=e,this.logic=new me([]);for(let t of e)this.logic.mergeIn(t.logic)}getChild(e){return new i(this.all.flatMap(t=>t.getChild(e)))}hasLogic(e){return this.all.some(t=>t.hasLogic(e))}hasRules(){return this.all.some(e=>e.hasRules())}anyChildHasLogic(){return this.all.some(e=>e.anyChildHasLogic())}};function si(i,e){if(i instanceof ye$1)return i.all.flatMap(({builder:t,predicate:n})=>{let r=si(t,e);return n?r.map(({builder:o,predicates:a})=>({builder:o,predicates:[...a,n]})):r});if(i instanceof Te)return[...e!==ae&&i.children.has(ae)?[{builder:i.getChild(ae),predicates:[]}]:[],...i.children.has(e)?[{builder:i.getChild(e),predicates:[]}]:[]];throw new N(1909,!1)}function $i(i,e,t){let n=new me(e);if(i instanceof ye$1){let r=i.all.map(({builder:o,predicate:a})=>new tt$1(o,a?[...e,Pt$1(a,t)]:e,t));for(let o of r)n.mergeIn(o.logic)}else if(i instanceof Te)n.mergeIn(i.logic);else throw new N(1909,!1);return n}function Pt$1(i,e){return s(r({},i),{depth:e})}var li=Symbol(`PATH`);var I$1=class i{keys;parent;keyInParent;root;children=new Map;fieldPathProxy=new Proxy(this,Gi);logicBuilder;constructor(e,t,n,r){this.keys=e,this.parent=n,this.keyInParent=r,this.root=t??this,n||(this.logicBuilder=ye$1.newRoot())}get builder(){return this.logicBuilder?this.logicBuilder:this.parent.builder.getChild(this.keyInParent)}getChild(e){return this.children.has(e)||this.children.set(e,new i([...this.keys,e],this.root,this,e)),this.children.get(e)}mergeIn(e,t){let n=e.compile();this.builder.mergeIn(n.builder,t)}static unwrapFieldPath(e){return e[li]}static newRoot(){return new i([],void 0,void 0,void 0)}};var Gi={get(i,e){return e===li?i:i.getChild(e).fieldPathProxy}};var Ze;var we$1=new Map;var nt$1=class i{schemaFn;constructor(e){this.schemaFn=e}compile(){if(we$1.has(this))return we$1.get(this);let e=I$1.newRoot();we$1.set(this,e);let t=Ze;try{Ze=e,this.schemaFn(e.fieldPathProxy)}finally{Ze=t}return e}static create(e){return e instanceof i?e:new i(e)}static rootCompile(e){try{return we$1.clear(),e===void 0?I$1.newRoot():e instanceof i?e.compile():new i(e).compile()}finally{we$1.clear()}}};function Wi(i){return i instanceof nt$1||typeof i==`function`}function se(i){if(Ze!==I$1.unwrapFieldPath(i).root)throw new N(1908,!1)}function V$1(i,e,t){return se(i),I$1.unwrapFieldPath(i).builder.addMetadataRule(e,t),e}var X={list(){return{reduce:(i,e)=>e===void 0?i:[...i,e],getInitial:()=>[]}},min(){return{reduce:(i,e)=>i===void 0||e===void 0?i??e:e<i?e:i,getInitial:()=>{}}},max(){return{reduce:(i,e)=>i===void 0||e===void 0?i??e:e>i?e:i,getInitial:()=>{}}},or(){return{reduce:(i,e)=>i||e,getInitial:()=>!1}},and(){return{reduce:(i,e)=>i&&e,getInitial:()=>!0}},override:Xi};function Xi(i){return{reduce:(e,t)=>t,getInitial:()=>i?.()}}var st$1=Symbol(`IS_ASYNC_VALIDATION_RESOURCE`);var Oe=class{reducer;create;brand;[st$1];constructor(e,t){this.reducer=e,this.create=t}};function A$1(i){return new Oe(i??X.override())}function di(i,e){return new Oe(e??X.override(),i)}function Bt$1(){return A$1()}var qt$1=A$1(X.or());var Kt=Bt$1();var Ut=A$1(X.max());var $t$1=Bt$1();var Gt=A$1(X.min());var Wt$1=A$1(X.max());var ci=A$1(X.min());var ui=A$1(X.list());function R(i,e){if(i===e)return!0;if(!i||!e||i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(!Object.is(i[t],e[t]))return!1;return!0}function Yi(i){return i.errors().length>0?`invalid`:i.pending()?`unknown`:`valid`}var Rt$1=class{node;constructor(e){this.node=e}rawSyncTreeErrors=v(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncTreeErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawSyncTreeErrors()??[]],{equal:R});syncErrors=v(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.syncErrors.compute(this.node.context),...this.syncTreeErrors(),...Zi(this.node.submitState.submissionErrors())],{equal:R});syncValid=v(()=>this.shouldSkipValidation()?!0:this.node.structure.reduceChildren(this.syncErrors().length===0,(e,t)=>t&&e.validationState.syncValid(),Ui));syncTreeErrors=v(()=>this.rawSyncTreeErrors().filter(e=>e.fieldTree===this.node.fieldTree),{equal:R});rawAsyncErrors=v(()=>this.shouldSkipValidation()?[]:[...this.node.logicNode.logic.asyncErrors.compute(this.node.context),...this.node.structure.parent?.validationState.rawAsyncErrors()??[]],{equal:R});asyncErrors=v(()=>this.shouldSkipValidation()?[]:this.rawAsyncErrors().filter(e=>e===`pending`||e.fieldTree===this.node.fieldTree),{equal:R});parseErrors=v(()=>this.node.formFieldBindings().flatMap(e=>e.parseErrors()),{equal:R});errors=v(()=>[...this.parseErrors(),...this.syncErrors(),...this.asyncErrors().filter(e=>e!==`pending`)],{equal:R});errorSummary=v(()=>{let e=this.node.structure.reduceChildren(this.errors(),(t,n)=>[...n,...t.errorSummary()]);return z$2(()=>e.sort(Qi)),e},{equal:R});pending=v(()=>this.node.structure.reduceChildren(this.asyncErrors().includes(`pending`),(e,t)=>t||e.validationState.pending()));status=v(()=>{if(this.shouldSkipValidation())return`valid`;let e=Yi(this);return this.node.structure.reduceChildren(e,(t,n)=>n===`invalid`||t.validationState.status()===`invalid`?`invalid`:n===`unknown`||t.validationState.status()===`unknown`?`unknown`:`valid`,t=>t===`invalid`)});valid=v(()=>this.status()===`valid`);invalid=v(()=>this.status()===`invalid`);shouldSkipValidation=v(()=>this.node.hidden()||this.node.disabled()||this.node.readonly()||this.node.structure.isOrphaned())};function Zi(i){return i===void 0?[]:U$1(i)?i:[i]}function Ee$1(i,e){if(U$1(i))for(let t of i)t.fieldTree??=e;else i&&(i.fieldTree??=e);return i}function ri(i){return i.formField?i.formField.element:i.fieldTree().formFieldBindings().reduce((e,t)=>!e||!t.element?e??t.element:e.compareDocumentPosition(t.element)&Node.DOCUMENT_POSITION_PRECEDING?t.element:e,void 0)}function Qi(i,e){let t=ri(i),n=ri(e);return t===n?0:t===void 0||n===void 0?t===void 0?1:-1:t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING?1:-1}var it$1=A$1();var It$1=class{node;cache=new WeakMap;constructor(e){this.node=e,this.fieldTreeOf=this.fieldTreeOf.bind(this),this.stateOf=this.stateOf.bind(this)}resolve(e){if(!this.cache.has(e)){let t=v(()=>{let n=I$1.unwrapFieldPath(e),r=this.node,o=Ki();for(;o>0||!r.structure.logic.hasLogic(n.root.builder);)if(o--,r=r.structure.parent,r===void 0)throw new N(1900,!1);for(let a of n.keys)if(r=r.structure.getChild(a),r===void 0)throw new N(1901,!1);return r.fieldTree});this.cache.set(e,t)}return this.cache.get(e)()}get fieldTree(){return this.node.fieldProxy}get state(){return this.node}get value(){return this.node.structure.value}get key(){return this.node.structure.keyInParent}get pathKeys(){return this.node.structure.pathKeys}index=v(()=>{let e=this.key();if(!U$1(z$2(this.node.structure.parent.value)))throw new N(1906,!1);return Number(e)});fieldTreeOf(e){return this.resolve(e)}stateOf(e){return this.resolve(e)()}valueOf=e=>{let t=this.resolve(e)().value();if(t instanceof pf)throw new N(1907,!1);return t}};var At$1=class{node;metadata=new Map;constructor(e){this.node=e}runMetadataCreateLifecycle(){if(!this.node.logicNode.logic.hasMetadataKeys())return;let e=vv();e&&Fo(!1);try{z$2(()=>Ht$3(this.node.structure.injector,()=>{for(let t of this.node.logicNode.logic.getMetadataKeys())if(t.create){let n=this.node.logicNode.logic.getMetadata(t),r=t.create(this.node,v(()=>n.compute(this.node.context)));this.metadata.set(t,r)}}))}finally{e&&Fo(!0)}}get(e){if(this.has(e)&&!this.metadata.has(e)){if(e.create)throw new N(1912,!1);let t=this.node.logicNode.logic.getMetadata(e);this.metadata.set(e,v(()=>t.compute(this.node.context)))}return this.metadata.get(e)}has(e){return this.node.logicNode.logic.hasMetadata(e)}};var Ji={get(i,e,t){if(e===ai)return!0;let n=i(),r=n.structure.getChild(e);if(r!==void 0)return r.fieldTree;let o=z$2(n.value);if(U$1(o)){if(e===`length`)return n.value().length;if(e===Symbol.iterator)return()=>(n.value(),Array.prototype[Symbol.iterator].apply(n.fieldTree))}if(Qe(o)&&e===Symbol.iterator)return function*(){for(let a in t)yield[a,t[a]]}},getOwnPropertyDescriptor(i,e){let t=z$2(i().value),n=Reflect.getOwnPropertyDescriptor(t,e);return n&&!n.configurable&&(n.configurable=!0),n},ownKeys(i){let e=z$2(i().value);return typeof e==`object`&&e!==null?Reflect.ownKeys(e):[]}};function er(i,e){let t=v(()=>i()[e()]);return t[ut$3]=i[ut$3],t.set=n=>{Object.is(z$2(t),n)||i.update(r=>tr(r,n,e()))},t.update=n=>{t.set(n(z$2(t)))},t.asReadonly=()=>t,t}function tr(i,e,t){if(U$1(i)){let n=[...i];return n[t]=e,n}else return s(r({},i),{[t]:e})}var ge=Symbol(``);var pi=v(()=>!1);var rt$2=class{logic;node;createChildNode;identitySymbol=Symbol();_injector=void 0;_anyChildHasLogic;get injector(){return this._injector??=ve$1.create({providers:[],parent:this.fieldManager.injector}),this._injector}constructor(e,t,n){this.logic=e,this.node=t,this.createChildNode=n}children(){this.ensureChildrenMap();let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>z$2(t.reader))}materializedChildren(){let e=this.childrenMap();return e===void 0?[]:Array.from(e.byPropertyKey.values()).map(t=>t.node)}_areChildrenMaterialized(){return z$2(this.childrenMap)!==void 0}ensureChildrenMap(){this._areChildrenMaterialized()||z$2(()=>{this.childrenMap.update(e=>this.computeChildrenMap(this.value(),e,!0))})}getChild(e){this.ensureChildrenMap();let t=e.toString(),n=z$2(this.childrenMap)?.byPropertyKey.get(t)?.reader;return n||(n=this.createReader(t)),n()}reduceChildren(e,t,n){let r=this.childrenMap();if(!r)return e;let o=e;for(let a of r.byPropertyKey.values()){if(n?.(o))break;o=t(z$2(a.reader),o)}return o}destroy(){this.injector.destroy()}createKeyOrOrphanSignals(e,t,n){if(e===`root`)return{keyInParent:hi,isOrphaned:pi};let r=this.parent,o=n,a=v(()=>{if(r.structure.isOrphaned())return ge;let y=r.structure.childrenMap();if(!y)return ge;let D=y.byPropertyKey.get(o);if(D&&D.node===this.node)return o;if(t===void 0)return ge;for(let[B,Pe]of y.byPropertyKey)if(Pe.node===this.node)return o=B;return ge}),u=v(()=>a()===ge);return{keyInParent:v(()=>{let y=a();if(y===ge)throw t===void 0?new N(-1902,!1):new N(1904,!1);return y}),isOrphaned:u}}createChildrenMap(){return Xs({source:this.value,computation:(e,t)=>this.computeChildrenMap(e,t?.value,!1)})}computeChildrenMap(e,t,n){if(!Qe(e)||!n&&t===void 0&&!(this._anyChildHasLogic??=this.logic.anyChildHasLogic()))return;t??={byPropertyKey:new Map};let r$1,o=U$1(e);t!==void 0&&(o?r$1=ir(t,e,this.identitySymbol):r$1=rr(t,e));for(let a of Object.keys(e)){let u,g=e[a];if(g===void 0){t.byPropertyKey.has(a)&&(r$1??=r({},t),r$1.byPropertyKey.delete(a));continue}o&&Qe(g)&&!U$1(g)&&(u=g[this.identitySymbol]??=Symbol(``));let y;u&&(t.byTrackingKey?.has(u)||(r$1??=r({},t),r$1.byTrackingKey??=new Map,r$1.byTrackingKey.set(u,this.createChildNode(a,u,o))),y=(r$1??t).byTrackingKey.get(u));let D=t.byPropertyKey.get(a);D===void 0?(r$1??=r({},t),r$1.byPropertyKey.set(a,{reader:this.createReader(a),node:y??this.createChildNode(a,u,o)})):y&&y!==D.node&&(r$1??=r({},t),D.node=y)}return r$1??t}createReader(e){return v(()=>this.childrenMap()?.byPropertyKey.get(e)?.node)}};var Lt$1=class extends rt$2{fieldManager;value;get parent(){}get root(){return this.node}get pathKeys(){return nr}get keyInParent(){return hi}isOrphaned=pi;childrenMap;constructor(e,t,n,r,o){super(t,e,o),this.fieldManager=n,this.value=r,this.childrenMap=this.createChildrenMap()}};var Ft$1=class extends rt$2{logic;parent;root;pathKeys;keyInParent;value;childrenMap;isOrphaned;get fieldManager(){return this.root.structure.fieldManager}constructor(e,t,n,r,o,a){super(t,e,a),this.logic=t,this.parent=n,this.root=this.parent.structure.root;let u=this.createKeyOrOrphanSignals(`child`,r,o);this.isOrphaned=u.isOrphaned,this.keyInParent=u.keyInParent,this.pathKeys=v(()=>[...n.structure.pathKeys(),this.keyInParent()]),this.value=er(this.parent.structure.value,this.keyInParent),this.childrenMap=this.createChildrenMap(),this.fieldManager.structures.add(this)}};var nr=v(()=>[]);var hi=v(()=>{throw new N(1905,!1)});function ir(i,e,t){let n,r$2=new Set(i.byPropertyKey.keys()),o=i.byTrackingKey&&new Set(i.byTrackingKey.keys());for(let a=0;a<e.length;a++){let u=e[a];r$2.delete(a.toString()),o&&Qe(u)&&Object.hasOwn(u,t)&&o.delete(u[t])}if(r$2.size>0){n??=r({},i);for(let a of r$2)n.byPropertyKey.delete(a)}if(o&&o.size>0){n??=r({},i);for(let a of o)n.byTrackingKey.delete(a)}return n}function rr(i,e){let t;for(let n of i.byPropertyKey.keys())Object.hasOwn(e,n)||(t??=r({},i),t.byPropertyKey.delete(n));return t}var Vt$1=class{node;selfSubmitting=x(!1);submissionErrors;constructor(e){this.node=e,this.submissionErrors=Xs({source:this.node.structure.value,computation:()=>[]})}submitting=v(()=>this.selfSubmitting()||(this.node.structure.parent?.submitting()??!1))};var ke$1=class{structure;validationState;metadataState;nodeState;submitState;fieldAdapter;controlValue;_context=void 0;get context(){return this._context??=new It$1(this)}fieldProxy=new Proxy(()=>this,Ji);pathNode;constructor(e){this.pathNode=e.pathNode,this.fieldAdapter=e.fieldAdapter,this.structure=this.fieldAdapter.createStructure(this,e),this.validationState=this.fieldAdapter.createValidationState(this,e),this.nodeState=this.fieldAdapter.createNodeState(this,e),this.metadataState=new At$1(this),this.submitState=new Vt$1(this),this.controlValue=this.controlValueSignal(),this.metadataState.runMetadataCreateLifecycle()}focusBoundControl(e){this.getBindingForFocus()?.focus(e)}getBindingForFocus(){return this.formFieldBindings().filter(t=>t.focus!==void 0).reduce(oi,void 0)||this.structure.children().map(t=>t.getBindingForFocus()).reduce(oi,void 0)}pendingSync=Xs({source:()=>this.value(),computation:(e,t)=>{t?.value?.abort()}});get fieldTree(){return this.fieldProxy}get logicNode(){return this.structure.logic}get value(){return this.structure.value}get keyInParent(){return this.structure.keyInParent}get errors(){return this.validationState.errors}get parseErrors(){return this.validationState.parseErrors}get errorSummary(){return this.validationState.errorSummary}get pending(){return this.validationState.pending}get valid(){return this.validationState.valid}get invalid(){return this.validationState.invalid}get dirty(){return this.nodeState.dirty}get touched(){return this.nodeState.touched}get disabled(){return this.nodeState.disabled}get disabledReasons(){return this.nodeState.disabledReasons}get hidden(){return this.nodeState.hidden}get readonly(){return this.nodeState.readonly}get formFieldBindings(){return this.nodeState.formFieldBindings}get submitting(){return this.submitState.submitting}get name(){return this.nodeState.name}get max(){let e=this.metadata($t$1)?.();return e?this.metadata(e):void 0}get maxLength(){return this.metadata(ci)}get min(){let e=this.metadata(Kt)?.();return e?this.metadata(e):void 0}get minLength(){return this.metadata(Wt$1)}get pattern(){return this.metadata(ui)??or}get required(){return this.metadata(qt$1)??ar}metadata(e){return this.metadataState.get(e)}getError(e){return this.errors().find(t=>t.kind===e)}hasMetadata(e){return this.metadataState.has(e)}markAsTouched(e){this.structure.isOrphaned()||z$2(()=>{this.markAsTouchedInternal(e),this.flushSync()})}markAsTouchedInternal(e){if(!this.structure.isOrphaned()&&!this.validationState.shouldSkipValidation()&&(this.nodeState.markAsTouched(),!e?.skipDescendants))for(let t of this.structure.children())t.markAsTouchedInternal()}markAsDirty(){this.nodeState.markAsDirty()}markAsPristine(){this.nodeState.markAsPristine()}markAsUntouched(){this.nodeState.markAsUntouched()}reset(e){z$2(()=>this._reset(e))}_reset(e){this.pendingSync()?.abort(),e!==void 0&&this.value.set(e),this.controlValue.rawSet(this.value()),this.nodeState.markAsUntouched(),this.nodeState.markAsPristine();for(let t of this.formFieldBindings())t.reset();for(let t of this.structure.materializedChildren())t._reset()}reloadValidation(){z$2(()=>this._reloadValidation())}_reloadValidation(){let e=this.logicNode.logic.getMetadataKeys();for(let t of e)t[st$1]&&this.metadata(t).reload?.();for(let t of this.structure.children())t._reloadValidation()}controlValueSignal(){let e=Xs(this.value);e.rawSet=e.set,e.set=n=>{e.rawSet(n),this.markAsDirty(),this.debounceSync()};let t=e.update;return e.update=n=>{t(n),this.markAsDirty(),this.debounceSync()},e}sync(){this.value.set(this.controlValue())}flushSync(){let e=this.pendingSync();e&&!e.signal.aborted&&(e.abort(),this.sync())}async debounceSync(){let e=z$2(()=>(this.pendingSync()?.abort(),this.nodeState.debouncer()));if(e){let t=new AbortController,n=e(t.signal);if(n&&(this.pendingSync.set(t),await n,t.signal.aborted))return}this.structure.isOrphaned()||this.sync()}static newRoot(e,t,n,r){return r.newRoot(e,t,n,r)}createStructure(e){return e.kind===`root`?new Lt$1(this,e.logic,e.fieldManager,e.value,this.newChild.bind(this)):new Ft$1(this,e.logic,e.parent,e.identityInParent,e.initialKeyInParent,this.newChild.bind(this))}newChild(e,t,n){let r,o;return n?(r=this.pathNode.getChild(ae),o=this.structure.logic.getChild(ae)):(r=this.pathNode.getChild(e),o=this.structure.logic.getChild(e)),this.fieldAdapter.newChild({kind:`child`,parent:this,pathNode:r,logic:o,initialKeyInParent:e,identityInParent:t,fieldAdapter:this.fieldAdapter})}};var or=v(()=>[]);var ar=v(()=>!1);function oi(i,e){return i?e&&i.element.compareDocumentPosition(e.element)&Node.DOCUMENT_POSITION_PRECEDING?e:i:e}var zt$1=class{node;selfTouched=x(!1);selfDirty=x(!1);markAsTouched(){this.selfTouched.set(!0)}markAsDirty(){this.selfDirty.set(!0)}markAsPristine(){this.selfDirty.set(!1)}markAsUntouched(){this.selfTouched.set(!1)}formFieldBindings=x([]);constructor(e){this.node=e}dirty=v(()=>{let e=this.selfDirty()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,n)=>n||t.nodeState.dirty(),ni)});touched=v(()=>{let e=this.selfTouched()&&!this.isNonInteractive();return this.node.structure.reduceChildren(e,(t,n)=>n||t.nodeState.touched(),ni)});disabledReasons=v(()=>[...this.node.structure.parent?.nodeState.disabledReasons()??[],...this.node.logicNode.logic.disabledReasons.compute(this.node.context)],{equal:R});disabled=v(()=>!!this.disabledReasons().length);readonly=v(()=>(this.node.structure.parent?.nodeState.readonly()||this.node.logicNode.logic.readonly.compute(this.node.context))??!1);hidden=v(()=>(this.node.structure.parent?.nodeState.hidden()||this.node.logicNode.logic.hidden.compute(this.node.context))??!1);name=v(()=>{let e=this.node.structure.parent;return e?`${e.name()}.${this.node.structure.keyInParent()}`:this.node.structure.fieldManager.rootName});debouncer=v(()=>{if(this.node.logicNode.logic.hasMetadata(it$1)){let t=this.node.logicNode.logic.getMetadata(it$1).compute(this.node.context);if(t)return n=>t(this.node.context,n)}return this.node.structure.parent?.nodeState.debouncer?.()});isNonInteractive=v(()=>this.hidden()||this.disabled()||this.readonly())};var Ht$1=class{newRoot(e,t,n,r){return new ke$1({kind:`root`,fieldManager:e,value:t,pathNode:n,logic:n.builder.build(),fieldAdapter:r})}newChild(e){return new ke$1(e)}createNodeState(e){return new zt$1(e)}createValidationState(e){return new Rt$1(e)}createStructure(e,t){return e.createStructure(t)}};var jt$1=class{injector;rootName;submitOptions;constructor(e,t,n){this.injector=e,this.rootName=t??`${this.injector.get(yr$1)}.form${sr++}`,this.submitOptions=n}structures=new Set;createFieldManagementEffect(e){xe(()=>{let t=new Set;this.markStructuresLive(e,t);for(let n of this.structures)t.has(n)||(this.structures.delete(n),z$2(()=>n.destroy()))},{injector:this.injector})}markStructuresLive(e,t){t.add(e);for(let n of e.children())this.markStructuresLive(n.structure,t)}};var sr=0;var fi=new E$1(``);function lr(i){let e,t,n;return i.length===3?[e,t,n]=i:i.length===2?Wi(i[1])?[e,t]=i:[e,n]=i:[e]=i,[e,t,n]}function dr(...i){let[e,t,n]=lr(i),r=n?.injector??p(ve$1),o=Ht$3(r,()=>nt$1.rootCompile(t)),a=new jt$1(r,n?.name,n?.submission),u=n?.adapter??new Ht$1,g=ke$1.newRoot(a,e,o,u);a.createFieldManagementEffect(g.structure);let{experimentalWebMcpTool:y}=n??{};if(y){let D=Ht$3(r,()=>p(fi,{optional:!0}));D&&Ht$3(r,()=>D(g.fieldTree,{name:y.name,description:y.description,annotations:y.annotations}))}return g.fieldTree}async function gi(i,e){let t=z$2(i);if(z$2(t.submitState.submitting))return!1;let n=e===void 0?t.structure.root.fieldProxy:i,r={root:t.structure.root.fieldProxy,submitted:i};e=typeof e==`function`?{action:e}:e??t.structure.fieldManager.submitOptions;let o=e?.action;if(!o)throw new N(1915,!1);t.markAsTouched();let a=e?.onInvalid,u=cr(t,e?.ignoreValidators);try{if(u){t.submitState.selfSubmitting.set(!0);let g=await z$2(()=>o?.(n,r));return g&&ur(t,g),!g||U$1(g)&&g.length===0}else z$2(()=>a?.(n,r));return!1}finally{t.submitState.selfSubmitting.set(!1)}}function cr(i,e){switch(e){case`all`:return!0;case`none`:return z$2(i.valid);default:return!z$2(i.invalid)}}function ur(i,e){U$1(e)||(e=[e]);let t=new Map;for(let n of e){let r=Ee$1(n,i.fieldTree),o=r.fieldTree(),a=t.get(o);a||(a=[],t.set(o,a)),a.push(r)}for(let[n,r]of t)n.submitState.submissionErrors.set(r)}var ot$1=class{kind=`compat`;control;fieldTree;context;message;constructor({context:e,kind:t,control:n}){this.context=e,this.kind=t,this.control=n}};function bi(i){if(i.length===0)return null;let e={};for(let t of i)e[t.kind]=t instanceof ot$1?t.context:t;return e}function mi(i,e){return i===null?[]:Object.entries(i).map(([t,n])=>new ot$1({context:n,kind:t,control:e}))}var pr=new E$1(``);function Fa(i,e){se(i);let t=I$1.unwrapFieldPath(i),n;typeof e==`function`||typeof e==`string`?n=e:n=e?.when,t.builder.addDisabledReasonRule(r=>{let o=!0;return typeof n==`string`?o=n:n&&(o=n(r)),typeof o==`string`?{fieldTree:r.fieldTree,message:o}:o?{fieldTree:r.fieldTree}:void 0})}function Va(i,e){se(i);let t=I$1.unwrapFieldPath(i),n=typeof e==`function`?e:e?.when??(()=>!0);t.builder.addReadonlyRule(n)}function hr(i){let e=i;return typeof e.length==`number`?e.length:e.size}function $(i,e){return i instanceof Function?i(e):i}function nn(i){return typeof i==`number`?isNaN(i):i===``||i===!1||i==null}function yi(i){return i===void 0?[]:Array.isArray(i)?i:[i]}function De(i,e){se(i),I$1.unwrapFieldPath(i).builder.addSyncErrorRule(n=>Ee$1(e(n),n.fieldTree))}function fr(i){return new Xt(i)}function gr(i,e){return new Yt(i,e)}function br(i,e){return new Zt(i,e)}function mr(i,e){return new Qt(i,e)}function yr(i){return new Jt(i)}var ie=class{__brand=void 0;kind=``;fieldTree;message;constructor(e){e&&Object.assign(this,e)}};var Xt=class extends ie{kind=`required`};var Yt=class extends ie{min;kind=`min`;constructor(e,t){super(t),this.min=e}};var Zt=class extends ie{max;kind=`max`;constructor(e,t){super(t),this.max=e}};var Qt=class extends ie{minLength;kind=`minLength`;constructor(e,t){super(t),this.minLength=e}};var Jt=class extends ie{kind=`email`};var lt$1=class extends ie{kind=`parse`};var vr=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function za(i,e){De(i,t=>{if(!(e?.when&&!e.when(t))&&!nn(t.value())&&!vr.test(t.value()))return e?.error?$(e.error,t):yr({message:$(e?.message,t)})})}function Ha(i,e,t){let n=A$1();V$1(i,n,r=>{if(!(t?.when&&!t.when(r)))return typeof e==`function`?e(r):e}),V$1(i,Gt,({state:r})=>r.metadata(n)()),V$1(i,$t$1,()=>Gt),De(i,r=>{let o=r.value();if(o===null||Number.isNaN(o))return;let a=r.state.metadata(n)();if(!(a===void 0||Number.isNaN(a))&&o>a)return t?.error?$(t.error,r):br(a,{message:$(t?.message,r)})})}function ja(i,e,t){let n=A$1();V$1(i,n,r=>{if(!(t?.when&&!t.when(r)))return typeof e==`function`?e(r):e}),V$1(i,Ut,({state:r})=>r.metadata(n)()),V$1(i,Kt,()=>Ut),De(i,r=>{let o=r.value();if(o===null||Number.isNaN(o))return;let a=r.state.metadata(n)();if(!(a===void 0||Number.isNaN(a))&&o<a)return t?.error?$(t.error,r):gr(a,{message:$(t?.message,r)})})}function Ba(i,e,t){let n=V$1(i,A$1(),r=>{if(!(t?.when&&!t.when(r)))return typeof e==`number`?e:e(r)});V$1(i,Wt$1,({state:r})=>r.metadata(n)()),De(i,r=>{if(nn(r.value()))return;let o=r.state.metadata(n)();if(o!==void 0&&hr(r.value())<o)return t?.error?$(t.error,r):mr(o,{message:$(t?.message,r)})})}function qa(i,e){let t=V$1(i,A$1(),n=>e?.when?e.when(n):!0);V$1(i,qt$1,({state:n})=>n.metadata(t)()),De(i,n=>{if(n.state.metadata(t)()&&nn(n.value()))return e?.error?$(e.error,n):fr({message:$(e?.message,n)})})}function Ka(i,e){se(i);let t=I$1.unwrapFieldPath(i),n=di((r,o)=>{if(e.debounce!==void 0){let a=l6(()=>o(),e.debounce),u=v(()=>Ax(a));return e.factory(u)}return e.factory(o)});n[st$1]=!0,V$1(i,n,r=>{let a=r.stateOf(i).validationState;if(!(a.shouldSkipValidation()||!a.syncValid())&&!(e.when&&!e.when(r)))return e.params(r)}),t.builder.addAsyncErrorRule(r=>{let o=r.state.metadata(n),a;switch(o.status()){case`idle`:return;case`loading`:case`reloading`:return`pending`;case`resolved`:case`local`:return o.hasValue()?(a=e.onSuccess(o.value(),r),Ee$1(a,r.fieldTree)):void 0;case`error`:return a=e.onError(o.error(),r),Ee$1(a,r.fieldTree)}})}function Ua(i,e){se(i);let t=I$1.unwrapFieldPath(i),n=xr(e);t.builder.addMetadataRule(it$1,()=>n)}function xr(i){return typeof i==`function`?i:i===`blur`?Mr():i>0?_r(i):Cr}function _r(i){return(e,t)=>new Promise(n=>{let r,o=()=>{clearTimeout(r),n()};r=setTimeout(()=>{t.removeEventListener(`abort`,o),n()},i),t.addEventListener(`abort`,o,{once:!0})})}function Mr(){return(i,e)=>new Promise(t=>{e.addEventListener(`abort`,()=>t(),{once:!0})})}function Cr(){}function Mi(i,e,t){let n=Xs({source:i,computation:()=>[],equal:R}),r=a=>{let u=t(a);n.set(yi(u.error)),u.value!==void 0&&e(u.value),n.set(yi(u.error))},o=()=>{n.set([])};return{errors:n.asReadonly(),setRawValue:r,reset:o}}function Ci(i,e){let{parse:t,format:n}=e,r=Mi(i,i.set,t),o=Xs(()=>n(i())),a=o;a.parseErrors=r.errors;let u=a.set.bind(a),g=p(Q1,{self:!0,optional:!0});return g&&(g.setParseErrors(r.errors),g.onReset=y=>{r.reset();let D=y!==void 0?y:i();u(n(D))}),a.set=y=>{r.setRawValue(y),u(y)},a.update=y=>{a.set(y(o()))},a}var en=class{field;constructor(e){this.field=e}control=this;get value(){return this.field().controlValue()}get valid(){return this.field().valid()}get invalid(){return this.field().invalid()}get pending(){return this.field().pending()}get disabled(){return this.field().disabled()}get enabled(){return!this.field().disabled()}get errors(){return bi(this.field().errors())}get pristine(){return!this.field().dirty()}get dirty(){return this.field().dirty()}get touched(){return this.field().touched()}get untouched(){return!this.field().touched()}get status(){if(this.field().disabled())return`DISABLED`;if(this.field().valid())return`VALID`;if(this.field().invalid())return`INVALID`;if(this.field().pending())return`PENDING`;throw new N(1910,!1)}valueAccessor=null;hasValidator(e){return e===_i$1.required?this.field().required():!1}updateValueAndValidity(){}};var tn={disabled:`disabled`,disabledReasons:`disabledReasons`,dirty:`dirty`,errors:`errors`,hidden:`hidden`,invalid:`invalid`,max:`max`,maxLength:`maxLength`,min:`min`,minLength:`minLength`,name:`name`,pattern:`pattern`,pending:`pending`,readonly:`readonly`,required:`required`,touched:`touched`};var Sr=(()=>{let i={};for(let e of Object.keys(tn))i[tn[e]]=e;return i})();function rn(i,e){return i[Sr[e]]?.()}var on=Object.values(tn);function dt$1(){return{}}function ne(i,e,t){return Object.is(i[e],t)?!1:(i[e]=t,!0)}function wr(i,e,t){let n;if(Si(i)&&t.isBadInput(i))return{error:new lt$1};switch(i.type){case`checkbox`:return{value:i.checked};case`number`:case`range`:case`datetime-local`:if(n=z$2(e),typeof n==`number`||n===null)return{value:i.value===``?null:i.valueAsNumber};break;case`date`:case`month`:case`time`:case`week`:if(n=z$2(e),n===null||n instanceof Date)return{value:i.valueAsDate};if(typeof n==`number`)return{value:i.valueAsNumber}}if(i.tagName===`INPUT`&&i.type===`text`&&(n??=z$2(e),typeof n==`number`||n===null)){if(i.value===``)return{value:null};let r=Number(i.value);return Number.isNaN(r)?{error:new lt$1}:{value:r}}return{value:i.value}}function vi(i,e){switch(i.type){case`checkbox`:i.checked=e;return;case`radio`:i.checked=e===i.value;return;case`number`:case`range`:case`datetime-local`:if(typeof e==`number`){xi(i,e);return}else if(e===null){i.value=``;return}break;case`date`:case`month`:case`time`:case`week`:if(e===null||e instanceof Date){i.valueAsDate=e;return}else if(typeof e==`number`){xi(i,e);return}}if(i.tagName===`INPUT`&&i.type===`text`){if(typeof e==`number`){i.value=isNaN(e)?``:String(e);return}if(e===null){i.value=``;return}}i.value=e}function xi(i,e){isNaN(e)?i.value=``:i.valueAsNumber=e}function Si(i){return i.tagName===`INPUT`}function Nr(i){return i.type===`date`||i.type===`datetime-local`||i.type===`month`||i.type===`time`||i.type===`week`}function Tr(i,e){let t=i.getUTCFullYear(),n=String(i.getUTCMonth()+1).padStart(2,`0`);if(e===`month`)return`${t}-${n}`;return`${t}-${n}-${String(i.getUTCDate()).padStart(2,`0`)}`}function wi(i,e,t){return e instanceof Date&&(i===`min`||i===`max`)&&(t===`date`||t===`month`)?Tr(e,t):e}function Or(i,e){i.listenToCustomControlModel(n=>e.state().controlValue.set(n)),i.listenToCustomControlOutput(`touch`,()=>e.state().markAsTouched()),e.registerAsBinding(i.customControl);let t=dt$1();return()=>{let n=e.state(),r=n.controlValue();ne(t,`controlValue`,r)&&i.setCustomControlModelInput(r);for(let o of on){let a;if(o===`errors`?a=e.errors():a=rn(n,o),ne(t,o,a)&&(i.setInputOnDirectives(o,a),e.elementAcceptsNativeProperty(o)&&!i.customControlHasInput(o))){let u=wi(o,a,e.nativeFormElement.type);Y1(e.renderer,e.nativeFormElement,o,u)}}}}function kr(i){return typeof i==`object`&&i!==null}function Er(i,e){let t=dt$1();e.controlValueAccessor.registerOnChange(r=>{t.controlValue=r,e.state().controlValue.set(r)}),e.controlValueAccessor.registerOnTouched(()=>e.state().markAsTouched());let n=e.injector.get(_a,null,{optional:!0,self:!0});if(n){let r;for(let g of n)kr(g)&&g.registerOnValidatorChange&&(r??=x(0),g.registerOnValidatorChange(()=>{r.update(y=>y+1)}));let o=n.map(g=>typeof g==`function`?g:g.validate.bind(g)),a=_i$1.compose(o),u=v(()=>{r?.();return mi(a?a(e.interopNgControl.control):null,e.interopNgControl.control)});e.parseErrorsSource.set(u)}return e.registerAsBinding({reset:()=>{let r=e.state().value();t.controlValue=r,z$2(()=>e.controlValueAccessor.writeValue(r))}}),()=>{let r=e.state(),o=r.controlValue();ne(t,`controlValue`,o)&&z$2(()=>e.controlValueAccessor.writeValue(o));for(let a of on){let u=rn(r,a);if(ne(t,a,u)){let g=i.setInputOnDirectives(a,u,a===`name`?Dr:void 0);a===`disabled`&&e.controlValueAccessor.setDisabledState?z$2(()=>e.controlValueAccessor.setDisabledState(u)):!g&&e.elementAcceptsNativeProperty(a)&&Y1(e.renderer,e.nativeFormElement,a,u)}}}}function Dr(i){return i==null}function Pr(i,e,t){if(typeof MutationObserver!=`function`)return;let n=new MutationObserver(r=>{r.some(o=>Rr(o))&&e()});n.observe(i,{attributes:!0,attributeFilter:[`value`],characterData:!0,childList:!0,subtree:!0}),t.onDestroy(()=>n.disconnect())}function Rr(i){if(i.type===`childList`||i.type===`characterData`){if(i.target instanceof Comment)return!1;for(let e of i.addedNodes)if(!(e instanceof Comment))return!0;for(let e of i.removedNodes)if(!(e instanceof Comment))return!0;return!1}return i.type===`attributes`&&i.target instanceof HTMLOptionElement}function Ir(i,e,t,n){let r=!1,o=e.nativeFormElement,a=Mi(()=>e.state().value(),B=>e.state().controlValue.set(B),B=>wr(o,e.state().value,n));t.set(a.errors),e.onReset=()=>{a.reset();let B=e.state().value();D.controlValue=B,vi(o,B)};let u=i.nativeElement,g=()=>a.setRawValue(void 0);u.addEventListener(`input`,g);let y=()=>e.state().markAsTouched();u.addEventListener(`blur`,y),e.destroyRef.onDestroy(()=>{u.removeEventListener(`input`,g),u.removeEventListener(`blur`,y)}),Si(o)&&Nr(o)&&n.watchValidity(e.destroyRef,o,()=>a.setRawValue(void 0)),e.registerAsBinding(),o.tagName===`SELECT`&&Pr(o,()=>{r&&(o.value=e.state().controlValue())},e.destroyRef);let D=dt$1();return()=>{let B=e.state();for(let le of on){let ht=rn(B,le);if(ne(D,le,ht)&&(i.setInputOnDirectives(le,ht),e.elementAcceptsNativeProperty(le))){let Ri=wi(le,ht,o.type);Y1(e.renderer,o,le,Ri)}}let Pe=B.controlValue(),Di=ne(D,`controlValue`,Pe),Pi=o.type===`radio`&&ne(D,`radioValue`,o.value);(Di||Pi)&&vi(o,Pe),r=!0}}var Ni=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵprov=V$2({token:i,factory:t=>Ar.ɵfac(t),providedIn:`root`})}return i})();var Ar=(()=>{class i extends Ni{document=p(ie$1);cspNonce=p(ks,{optional:!0});injectedStyles=new WeakMap;watchValidity(t,n,r){let o=n.getRootNode();this.injectedStyles.has(o)||this.injectedStyles.set(o,this.createTransitionStyle(o));let a=u=>{let g=u;(g.animationName===`ng-valid`||g.animationName===`ng-invalid`)&&r()};n.addEventListener(`animationstart`,a),t.onDestroy(()=>{n.removeEventListener(`animationstart`,a)})}isBadInput(t){return t.validity?.badInput??!1}createTransitionStyle(t){let n=this.document.createElement(`style`);return this.cspNonce&&(n.nonce=this.cspNonce),n.textContent=`
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `,t.nodeType===9?t.head?.appendChild(n):t.appendChild(n),n}ngOnDestroy(){this.injectedStyles.get(this.document)?.remove()}static ɵfac=(()=>{let t;return function(r){return(t||(t=ar$1(i)))(r||i)}})();static ɵprov=V$2({token:i,factory:i.ɵfac})}return i})();var Lr=Symbol();var _i=new E$1(``);var $a=(()=>{class i{field=m.required({alias:`formField`});state=v(()=>this.field()());renderer=p(Zt$2);destroyRef=p(J$1);injector=p(ve$1);element=p(B$1).nativeElement;elementIsNativeFormElement=K1(this.element);elementAcceptsTextualValues=I7(this.element);_elementAcceptsMinMax;nativeFormElement=this.elementIsNativeFormElement?this.element:void 0;focuser=t=>this.element.focus(t);controlValueAccessors=p(Mc,{optional:!0,self:!0});config=p(pr,{optional:!0});validityMonitor=p(Ni);parseErrorsSource=x(void 0);_interopNgControl;get interopNgControl(){return this._interopNgControl??=new en(this.state)}parseErrors=v(()=>this.parseErrorsSource()?.().map(t=>s(r({},t),{fieldTree:z$2(this.state).fieldTree,formField:this}))??[],{equal:R});errors=v(()=>this.state().errors().filter(t=>!t.formField||t.formField===this),{equal:R});isFieldBinding=!1;resetter=()=>{};parseErrorsResetCallback;setParseErrors(t){this.parseErrorsSource.set(t)}set onReset(t){this.parseErrorsResetCallback=t}get onReset(){return this.parseErrorsResetCallback}get controlValueAccessor(){return!this.controlValueAccessors||this.controlValueAccessors.length===0?this.interopNgControl?.valueAccessor??void 0:oF(this.interopNgControl,this.controlValueAccessors)??void 0}installClassBindingEffect(){let t=Object.entries(this.config?.classes??{}).map(([r,o])=>[r,v(()=>o(this))]);if(t.length===0)return;let n=dt$1();Qs({write:()=>{if(!this.state().structure.isOrphaned())for(let[r,o]of t){let a=o();ne(n,r,a)&&(a?this.renderer.addClass(this.element,r):this.renderer.removeClass(this.element,r))}}},{injector:this.injector})}focus(t){this.focuser(t)}reset(){this.resetter(),this.parseErrorsResetCallback?.(this.state().value())}registerAsBinding(t){if(this.isFieldBinding)throw new N(1913,!1);this.isFieldBinding=!0,this.installClassBindingEffect(),t?.focus&&(this.focuser=n=>t.focus(n)),t?.reset&&(this.resetter=()=>t.reset()),xe(n=>{let r=this.state();r.nodeState.formFieldBindings.update(o=>[...o,this]),n(()=>{let o=r.nodeState.formFieldBindings().filter(a=>a!==this);r.nodeState.formFieldBindings.set(o),o.length===0&&!r.structure.isOrphaned()&&r.flushSync()})},{injector:this.injector})}[Lr];ɵngControlCreate(t){if(!t.hasPassThrough)if(this.controlValueAccessor)this.ɵngControlUpdate=Er(t,this);else if(t.customControl)this.ɵngControlUpdate=Or(t,this);else if(this.elementIsNativeFormElement)this.ɵngControlUpdate=Ir(t,this,this.parseErrorsSource,this.validityMonitor);else throw new N(1914,!1)}ɵngControlUpdate;elementAcceptsNativeProperty(t){if(!this.elementIsNativeFormElement)return!1;switch(t){case`min`:case`max`:return this._elementAcceptsMinMax??=T7(this.element);case`minLength`:case`maxLength`:return this.elementAcceptsTextualValues;case`disabled`:case`required`:case`readonly`:case`name`:return!0;default:return!1}}static ɵfac=function(n){return new(n||i)};static ɵdir=U$2({type:i,selectors:[[``,`formField`,``]],inputs:{field:[1,`formField`,`field`]},exportAs:[`formField`],features:[ln$1([{provide:_i,useExisting:i},{provide:wn$2,useFactory:()=>p(i).interopNgControl},{provide:Q1,useFactory:()=>p(_i,{self:!0})}]),kl(`formField`)]})}return i})();var Ga=(()=>{class i{fieldTree=m.required({alias:`formRoot`});onSubmit(t){t.preventDefault(),z$2(()=>{let n=this.fieldTree();n().structure.fieldManager.submitOptions&&gi(n)})}static ɵfac=function(n){return new(n||i)};static ɵdir=U$2({type:i,selectors:[[`form`,`formRoot`,``]],hostAttrs:[`novalidate`,``],hostBindings:function(n,r){n&1&&be$1(`submit`,function(a){return r.onSubmit(a)})},inputs:{fieldTree:[1,`formRoot`,`fieldTree`]}})}return i})();function an(i){if(i===void 0||i===``)return;let e=Number(i);return Number.isFinite(e)?e:void 0}var Fr=[[[``,`bxPrefix`,``]],[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var Vr=[`[bxPrefix]`,`[bxSuffix]`,`bx-error`,`bx-hint`];var zr=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Hr=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function jr(i,e){i&1&&(P$1(0,`span`,9),Re(1,`*`),L$1())}function Br(i,e){if(i&1&&(P$1(0,`label`,3)(1,`span`,8),Re(2),L$1(),ce(3,jr,2,0,`span`,9),L$1()),i&2){let t=ae$2();j$1(`for`,t.controlId()),S(2),je(t.resolvedLabel()),S(),ue(t.effectiveRequired()&&!t.resolvedHideRequiredMarker()?3:-1)}}function qr(i,e){if(i&1){let t=Er$1();P$1(0,`textarea`,10),be$1(`input`,function(r){$n$2(t);let o=ae$2();return qn$2(o.onInput(r))})(`focus`,function(){$n$2(t);let r=ae$2();return qn$2(r.onFocus())})(`blur`,function(){$n$2(t);let r=ae$2();return qn$2(r.onBlur())})(`compositionstart`,function(){$n$2(t);let r=ae$2();return qn$2(r.onCompositionStart())})(`compositionend`,function(r){$n$2(t);let o=ae$2();return qn$2(o.onCompositionEnd(r))})(`cdkAutofill`,function(r){$n$2(t);let o=ae$2();return qn$2(o.autofilled.set(r.isAutofilled))}),L$1()}if(i&2){let t=ae$2();te$1(`required`,t.effectiveRequired())(`disabled`,t.disabled())(`readOnly`,t.isReadonly())(`value`,t.displayedValue())(`spellcheck`,t.spellcheck())(`rows`,t.rows())(`cdkTextareaAutosize`,t.autosize())(`cdkAutosizeMinRows`,t.minRows())(`cdkAutosizeMaxRows`,t.maxRows()),j$1(`id`,t.controlId())(`name`,t.name()||null)(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-busy`,t.pending()||t.loading())(`autocomplete`,t.autocomplete())(`inputmode`,t.inputmode())(`minlength`,t.minLength())(`maxlength`,t.maxLength())(`placeholder`,t.isFloating()||!t.label()?t.resolvedPlaceholder():``)}}function Kr(i,e){if(i&1){let t=Er$1();P$1(0,`input`,11),be$1(`input`,function(r){$n$2(t);let o=ae$2();return qn$2(o.onInput(r))})(`focus`,function(){$n$2(t);let r=ae$2();return qn$2(r.onFocus())})(`blur`,function(){$n$2(t);let r=ae$2();return qn$2(r.onBlur())})(`compositionstart`,function(){$n$2(t);let r=ae$2();return qn$2(r.onCompositionStart())})(`compositionend`,function(r){$n$2(t);let o=ae$2();return qn$2(o.onCompositionEnd(r))})(`cdkAutofill`,function(r){$n$2(t);let o=ae$2();return qn$2(o.autofilled.set(r.isAutofilled))}),L$1()}if(i&2){let t=ae$2();te$1(`required`,t.effectiveRequired())(`disabled`,t.disabled())(`readOnly`,t.isReadonly())(`value`,t.displayedValue())(`spellcheck`,t.spellcheck())(`type`,t.type()),j$1(`id`,t.controlId())(`name`,t.name()||null)(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel())(`aria-labelledby`,t.ariaLabelledBy())(`aria-describedby`,t.describedBy())(`aria-invalid`,t.showError())(`aria-busy`,t.pending()||t.loading())(`autocomplete`,t.autocomplete())(`inputmode`,t.inputmode())(`minlength`,t.minLength())(`maxlength`,t.maxLength())(`placeholder`,t.isFloating()||!t.label()?t.resolvedPlaceholder():``)(`min`,t.min())(`max`,t.max())(`step`,t.step())(`pattern`,t.pattern()[0]?.source)}}function Ur(i,e){if(i&1){let t=Er$1();P$1(0,`div`,7)(1,`button`,12),be$1(`pointerdown`,function(r){$n$2(t);let o=ae$2();return qn$2(o.startSpin(-1,r))})(`pointerup`,function(){$n$2(t);let r=ae$2();return qn$2(r.stopSpin())})(`pointercancel`,function(){$n$2(t);let r=ae$2();return qn$2(r.stopSpin())})(`pointerleave`,function(){$n$2(t);let r=ae$2();return qn$2(r.stopSpin())})(`click`,function(r){$n$2(t);let o=ae$2();return r.detail===0&&o.startSpin(-1,r),qn$2(o.stopSpin())}),Oe$1(2,`bx-icon`,13),L$1(),P$1(3,`button`,12),be$1(`pointerdown`,function(r){$n$2(t);let o=ae$2();return qn$2(o.startSpin(1,r))})(`pointerup`,function(){$n$2(t);let r=ae$2();return qn$2(r.stopSpin())})(`pointercancel`,function(){$n$2(t);let r=ae$2();return qn$2(r.stopSpin())})(`pointerleave`,function(){$n$2(t);let r=ae$2();return qn$2(r.stopSpin())})(`click`,function(r){$n$2(t);let o=ae$2();return r.detail===0&&o.startSpin(1,r),qn$2(o.stopSpin())}),Oe$1(4,`bx-icon`,14),L$1()()}if(i&2){let t=ae$2();S(),te$1(`disabled`,t.isSpinDownDisabled()),j$1(`aria-label`,t.resolvedDecreaseLabel()),S(2),te$1(`disabled`,t.isSpinUpDisabled()),j$1(`aria-label`,t.resolvedIncreaseLabel())}}var Ti=class i extends Yf{i18n=p(Se$2,{optional:!0});editingRaw=x(void 0);badInput=x(!1);labelText=Zs(qr$1);labelTruncated=v(()=>this.labelText()?.truncated()??!1);isFocused=x(!1);autofilled=x(!1);rawValue=Ci(this.value,{parse:e=>{if(this.type()!==`number`)return{value:e};let t=e===``?null:Number(e);return this.badInput()||t!==null&&!Number.isFinite(t)?{error:{kind:`parse`}}:{value:t}},format:e=>e?.toString()??``});displayedValue=v(()=>this.editingRaw()??this.rawValue());isSpinDownDisabled=v(()=>this.disabled()||this.isReadonly()||Number(this.value()??0)<=(this.min()??-1/0));isSpinUpDisabled=v(()=>this.disabled()||this.isReadonly()||Number(this.value()??0)>=(this.max()??1/0));isFloating=v(()=>this.resolvedFloatLabel()===`always`||this.isFocused()||this.autofilled()||!!this.displayedValue()||this.multiline()||[`date`,`time`,`datetime-local`].includes(this.type()));resolvedDecreaseLabel=v(()=>ne$1(this.decreaseLabel(),this.i18n));resolvedIncreaseLabel=v(()=>ne$1(this.increaseLabel(),this.i18n));type=m(`text`);min=m(void 0,{transform:an});max=m(void 0,{transform:an});minLength=m(void 0);maxLength=m(void 0);pattern=m([]);step=m(1);autocomplete=m(void 0);inputmode=m(void 0);spellcheck=m(!0);multiline=m(!1);rows=m(3);autosize=m(!0);minRows=m(2);maxRows=m(8);decreaseLabel=m(`Decrease value`);increaseLabel=m(`Increase value`);composing=!1;spinTimeout;spinInterval;constructor(){super(),p(J$1).onDestroy(()=>this.stopSpin())}reset(){super.reset(),this.editingRaw.set(void 0),this.badInput.set(!1),this.stopSpin()}startSpin(e,t){t.preventDefault(),!(this.disabled()||this.isReadonly())&&(this.applyStep(e),this.spinTimeout=setTimeout(()=>{this.spinInterval=setInterval(()=>this.applyStep(e),80)},400))}stopSpin(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)}clearPendingEdit(){super.clearPendingEdit(),this.editingRaw.set(void 0),this.badInput.set(!1)}onInput(e){if(this.composing||this.disabled()||this.isReadonly())return;let t=e.target;this.badInput.set(t.validity.badInput);let n=this.ngControl?.control?.updateOn;n===`blur`||n===`submit`?this.editingRaw.set(t.value):this.rawValue.set(t.value)}onCompositionStart(){this.composing=!0}onCompositionEnd(e){this.composing=!1,this.onInput(e)}onFocus(){this.isFocused.set(!0)}onBlur(){this.isFocused.set(!1),this.stopSpin(),this.markAsTouched()}commitPendingValue(e){let t=this.editingRaw();t===void 0||e===`blur`&&this.ngControl?.control?.updateOn===`submit`||(this.rawValue.set(t),this.editingRaw.set(void 0))}applyStep(e){let t=Number(this.displayedValue())||0,n=this.step()===`any`?1:Number(this.step()),r=Math.min(this.max()??1/0,Math.max(this.min()??-1/0,Number((t+e*n).toPrecision(12))));this.disabled()||this.isReadonly()||(this.badInput.set(!1),this.rawValue.set(String(r)))}static ɵfac=function(t){return new(t||i)};static ɵcmp=H({type:i,selectors:[[`bx-input-field`]],viewQuery:function(t,n){t&1&&Mr$1(n.labelText,qr$1,5),t&2&&Qt$2()},inputs:{type:[1,`type`],min:[1,`min`],max:[1,`max`],minLength:[1,`minLength`],maxLength:[1,`maxLength`],pattern:[1,`pattern`],step:[1,`step`],autocomplete:[1,`autocomplete`],inputmode:[1,`inputmode`],spellcheck:[1,`spellcheck`],multiline:[1,`multiline`],rows:[1,`rows`],autosize:[1,`autosize`],minRows:[1,`minRows`],maxRows:[1,`maxRows`],decreaseLabel:[1,`decreaseLabel`],increaseLabel:[1,`increaseLabel`]},features:[St$2],ngContentSelectors:Vr,decls:13,vars:30,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[`bxSurface`,``,1,`bx-input-wrapper`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-input-container`,3,`bxTooltip`],[1,`bx-floating-label`],[`cdkAutofill`,``,1,`bx-native-input`,3,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`rows`,`cdkTextareaAutosize`,`cdkAutosizeMinRows`,`cdkAutosizeMaxRows`],[`cdkAutofill`,``,1,`bx-native-input`,3,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`type`],[1,`bx-input-actions`],[1,`bx-spinners-group`],[`bxTruncate`,``,1,`bx-input-label-text`],[`aria-hidden`,`true`,1,`bx-field-required`],[`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`blur`,`compositionstart`,`compositionend`,`cdkAutofill`,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`rows`,`cdkTextareaAutosize`,`cdkAutosizeMinRows`,`cdkAutosizeMaxRows`],[`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`blur`,`compositionstart`,`compositionend`,`cdkAutofill`,`required`,`disabled`,`readOnly`,`value`,`spellcheck`,`type`],[`type`,`button`,1,`bx-spin-btn`,3,`pointerdown`,`pointerup`,`pointercancel`,`pointerleave`,`click`,`disabled`],[`name`,`minus`,`size`,`16`],[`name`,`plus`,`size`,`16`]],template:function(t,n){t&1&&(Ne$3(Fr),P$1(0,`bx-form-field`,0)(1,`div`,1),pe(2),P$1(3,`div`,2),Fl(4,`bxTruncatedText`),ce(5,Br,4,3,`label`,3),ce(6,qr,1,22,`textarea`,4)(7,Kr,1,23,`input`,5),L$1(),P$1(8,`div`,6),pe(9,1),ce(10,Ur,5,4,`div`,7),L$1()(),pe(11,2,zr),pe(12,3,Hr),L$1()),t&2&&(te$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`loading`,n.loading())(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),S(),Z(`is-invalid`,n.showError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-disabled`,n.disabled())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused())(`has-spinners`,n.type()===`number`&&!n.multiline())(`is-floating`,n.isFloating()),S(2),te$1(`bxTooltip`,Vl(4,26,n.resolvedLabel(),n.labelTruncated(),n.resolvedTooltipOnTruncate())),S(2),ue(n.label()?5:-1),S(),ue(n.multiline()?6:7),S(4),ue(n.type()===`number`&&!n.multiline()?10:-1))},dependencies:[Rt$3,Gf,bt$2,ei,ti,$r$1,qr$1,Ta],styles:[`
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
}`]})};function $r(i,e){if(i&1&&(P$1(0,`span`,1),Re(1),L$1()),i&2){let t=ae$2();S(),je(t.errorText())}}function Gr(i,e){if(i&1&&Ys(0,2),i&2){let t=ae$2();te$1(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,t.context())}}function Wr(i,e){i&1&&Oe$1(0,`bx-icon`,5)}function Xr(i,e){if(i&1){let t=Er$1();P$1(0,`button`,4),be$1(`click`,function(){$n$2(t);let r=ae$2();return qn$2(r.request.emit())}),ce(1,Wr,1,0,`bx-icon`,5),Re(2),L$1()}if(i&2){let t=ae$2();Ll(t.config().buttonClass??``),te$1(`variant`,t.config().variant??`text`)(`color`,t.config().color??`primary`)(`outlined`,t.config().outlined??!1)(`disabled`,t.disabled())(`loading`,t.loading()),j$1(`aria-label`,t.accessibleLabel()),S(),ue(t.retry()?1:-1),S(),je(t.text())}}var ct$1=class i{i18n=p(Se$2,{optional:!0});text=v(()=>{let e=this.config(),t=ne$1(e.text??`Load more`,this.i18n),n=e.retryText,r=ne$1(n,this.i18n),o=!!n&&(!Hr$1(n)||r!==n.key);return this.loading()?ne$1(e.loadingText??`Loading`,this.i18n):this.retry()&&o?r:t});accessibleLabel=v(()=>ne$1(this.config().ariaLabel,this.i18n)||this.text());errorText=v(()=>ne$1(this.error(),this.i18n));context=v(()=>({$implicit:this.text(),loading:this.loading(),disabled:this.disabled()||this.loading(),request:()=>this.request.emit()}));retry=m(!1);visible=m(!1);loading=m(!1);disabled=m(!1);error=m(void 0);config=m({});buttonTemplate=m(void 0);request=vt$2();static ɵfac=function(t){return new(t||i)};static ɵcmp=H({type:i,selectors:[[`bx-load-more-footer`]],hostVars:2,hostBindings:function(t,n){t&2&&(Bi$1(`hidden`,!n.visible()),j$1(`aria-busy`,n.loading()?`true`:null))},inputs:{retry:[1,`retry`],visible:[1,`visible`],loading:[1,`loading`],disabled:[1,`disabled`],error:[1,`error`],config:[1,`config`],buttonTemplate:[1,`buttonTemplate`]},outputs:{request:`request`},decls:4,vars:4,consts:[[1,`bx-load-more-footer`],[`role`,`status`,1,`bx-load-more-error`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`bx-button`,``,`type`,`button`,3,`variant`,`color`,`outlined`,`class`,`disabled`,`loading`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`,`color`,`outlined`,`disabled`,`loading`],[`name`,`rotate-cw`,`size`,`16`]],template:function(t,n){if(t&1&&(P$1(0,`div`,0),ce(1,$r,2,1,`span`,1),ce(2,Gr,1,2,`ng-container`,2)(3,Xr,3,10,`button`,3),L$1()),t&2){let r;Ll(n.config().footerClass??``),S(),ue(n.errorText()?1:-1),S(),ue((r=n.buttonTemplate())?2:3,r)}},dependencies:[qf,Gl,bt$2],styles:[`
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
}`]})};var ut$1=class i{host=p(B$1).nativeElement;views=p(Nt$2);zone=p(K);destroy=p(J$1);overflowing=x(!1);requested=x(!1);retrying=x(!1);keepVisible=x(!1);loadMoreHasMore=m(!1);loadMoreLoading=m(!1);loadMoreSuppressed=m(!1);loadMoreDisabled=m(!1);loadMoreError=m(void 0);loadMoreConfig=m({});loadMoreTemplate=m(void 0);loadMoreRevision=m(void 0);loadMore=vt$2();actionVisible=v(()=>!this.loadMoreSuppressed()&&(this.loadMoreHasMore()||!!this.loadMoreError()||this.keepVisible()&&this.loadMoreLoading())&&(this.loadMoreConfig().buttonMode===`always`||!this.overflowing()||this.keepVisible()||!!this.loadMoreError()));footer;wasLoading=!1;previousRevision;constructor(){ft$2(()=>this.mount()),Qs(()=>{let e=this.loadMoreLoading(),t=this.loadMoreRevision();(this.wasLoading&&!e||!e&&this.previousRevision!==t)&&this.complete(),this.wasLoading=e,this.previousRevision=t,this.updateFooter()})}complete(){this.requested.set(!1),this.retrying.set(!1),this.keepVisible.set(!1)}request(e=`button`){this.loadMoreSuppressed()||!this.loadMoreHasMore()&&!this.loadMoreError()||this.loadMoreDisabled()||this.loadMoreLoading()||this.requested()||e===`scroll`&&this.loadMoreError()||(this.requested.set(!0),this.retrying.set(!!this.loadMoreError()),this.keepVisible.set(e!==`scroll`),this.loadMore.emit({source:this.loadMoreError()?`retry`:e}))}mount(){this.footer=this.views.createComponent(ct$1),this.host.append(this.footer.location.nativeElement),this.footer.instance.request.subscribe(()=>this.request());let e=()=>this.measure(),t=()=>{let n=this.footer?.location.nativeElement?.offsetHeight??0,r=this.host.scrollHeight-n;this.host.scrollTop+this.host.clientHeight>=r-(this.loadMoreConfig().threshold??32)&&this.zone.run(()=>this.request(`scroll`))};this.zone.runOutsideAngular(()=>{let n=new ResizeObserver(e),r=()=>{for(let a of Array.from(this.host.children))a!==this.footer?.location.nativeElement&&n.observe(a);this.measure()},o=new MutationObserver(r);n.observe(this.host),r(),o.observe(this.host,{childList:!0,subtree:!0,characterData:!0}),this.host.addEventListener(`scroll`,t,{passive:!0}),this.host.ownerDocument.defaultView?.addEventListener(`resize`,e),this.host.ownerDocument.defaultView?.visualViewport?.addEventListener(`resize`,e),this.destroy.onDestroy(()=>{n.disconnect(),o.disconnect(),this.host.removeEventListener(`scroll`,t),this.host.ownerDocument.defaultView?.removeEventListener(`resize`,e),this.host.ownerDocument.defaultView?.visualViewport?.removeEventListener(`resize`,e),this.footer?.destroy()})}),this.measure(),this.updateFooter()}measure(){let e=this.footer?.location.nativeElement?.offsetHeight??0,t=this.host.scrollHeight-e>this.host.clientHeight+1;t!==this.overflowing()&&this.zone.run(()=>this.overflowing.set(t))}updateFooter(){if(!this.footer)return;let e=this.actionVisible(),t=this.footer.location.nativeElement;!e&&t.contains(this.host.ownerDocument.activeElement)&&(this.host.hasAttribute(`tabindex`)||this.host.setAttribute(`tabindex`,`-1`),this.host.focus({preventScroll:!0})),this.footer.setInput(`visible`,e),this.footer.setInput(`loading`,this.loadMoreLoading()),this.footer.setInput(`disabled`,this.loadMoreDisabled()||this.requested()&&!this.loadMoreLoading()),this.footer.setInput(`retry`,!!this.loadMoreError()||this.retrying()),this.footer.setInput(`error`,this.loadMoreError()),this.footer.setInput(`config`,this.loadMoreConfig()),this.footer.setInput(`buttonTemplate`,this.loadMoreTemplate())}static ɵfac=function(t){return new(t||i)};static ɵdir=U$2({type:i,selectors:[[``,`bxLoadMore`,``]],inputs:{loadMoreHasMore:[1,`loadMoreHasMore`],loadMoreLoading:[1,`loadMoreLoading`],loadMoreSuppressed:[1,`loadMoreSuppressed`],loadMoreDisabled:[1,`loadMoreDisabled`],loadMoreError:[1,`loadMoreError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],loadMoreRevision:[1,`loadMoreRevision`]},outputs:{loadMore:`loadMore`},exportAs:[`bxLoadMore`]})};function Oi(i){let e=Number(i);return Number.isFinite(e)?Math.max(1,Math.floor(e)):1}var Zr=[`valueOverflow`];var Qr=[`labelOverflow`];var Jr=[`searchInput`];var eo=[`origin`];var pt$1=class i extends Yf{a11y=p(He);zone=p(K);overlay=p(Dn$2);overlayContext=p(zr$1,{optional:!0});i18n=p(Se$2,{optional:!0});debouncing=x(!1);searchRequest=x(!1);knownOptions=x([]);hasSelection=v(()=>this.internalValue()!==null&&this.internalValue()!==void 0);showClear=v(()=>this.clearable()&&this.hasSelection()&&!this.isReadonly());resolvedClearLabel=v(()=>ne$1(this.clearLabel(),this.i18n));resolvedClearTooltip=v(()=>ne$1(this.clearTooltip()??this.clearLabel(),this.i18n));panelScrollStrategy=this.overlay.scrollStrategies.noop();isPanelAttached=x(!1);searchTerm=v(()=>this.searchValue());valueOverflow=Zs(`valueOverflow`);labelOverflow=Zs(`labelOverflow`);truncatedSelectionTooltip=v(()=>!this.resolvedTooltipOnTruncate()||this.isOpen()?``:Hf(this.selectedOptionLabel()||this.resolvedPlaceholder(),this.valueOverflow()?.truncated()??!1)||Hf(this.resolvedLabel(),this.labelOverflow()?.truncated()??!1));overlayPositions=[new jr$1({originX:`start`,originY:`bottom`},{overlayX:`start`,overlayY:`top`},0,4),new jr$1({originX:`start`,originY:`top`},{overlayX:`start`,overlayY:`bottom`},0,-4)];resolvedOptions=v(()=>this.options().map(e=>s(r({},e),{resolvedStr:ne$1(e.label,this.i18n),resolvedGroup:ne$1(e.group,this.i18n)})));filteredOptions=v(()=>{let e=this.searchTerm().trim().toLocaleLowerCase();return this.externalFiltering()||!e?this.resolvedOptions():this.resolvedOptions().filter(t=>t.resolvedStr.toLocaleLowerCase().includes(e))});selectedOptions=v(()=>this.knownOptions().filter(e=>this.isSelected(e.value)));selectedOptionLabel=v(()=>this.selectedOptions().map(e=>ne$1(e.label,this.i18n)).join(`, `));isFloating=v(()=>this.isOpen()||this.value()!==null&&(!Array.isArray(this.value())||this.value().length>0)||this.resolvedFloatLabel()===`always`);resolvedSearchPlaceholder=v(()=>ne$1(this.searchPlaceholder(),this.i18n));resolvedEmptyMessage=v(()=>ne$1(this.emptyMessage(),this.i18n));triggerContext=v(()=>({$implicit:this.value(),labels:this.selectedOptions().map(e=>ne$1(e.label,this.i18n))}));visibleTags=v(()=>this.selectedOptions().slice(0,this.visibleTagCount()));overflowTagLabel=v(()=>{let e=Math.max(0,this.selectedOptions().length-this.visibleTagCount());return ne$1(this.tagOverflowText(),this.i18n,{count:e}).replaceAll(`{count}`,String(e))});overflowTagTooltip=v(()=>this.selectedOptions().slice(this.visibleTagCount()).map(e=>ne$1(e.label,this.i18n)).join(`, `));resolvedLoadingAriaLabel=v(()=>ne$1(this.loadingAriaLabel(),this.i18n));resolvedLoadingLabel=v(()=>ne$1(this.loadingLabel(),this.i18n));clearable=m(!0);clearLabel=m(`Clear selection`);clearTooltip=m(void 0);selectionDisplay=m(`text`);tagConfig=m({});overflowTagConfig=m({});visibleTagCount=m(1,{transform:Oi});tagOverflowText=m(`+{count}`);options=m.required();compareWith=m(Object.is);isSearchable=m(!1);externalFiltering=m(!1);searchValue=Tr$1(``);searchDebounce=m(300);searchPlaceholder=m(`Search...`);emptyMessage=m(`No results found.`);loadingLabel=m(void 0);loadingAriaLabel=m(`Loading`);isSearching=v(()=>this.debouncing()||this.searchRequest());hasMore=m(!1);loadError=m(void 0);loadMoreConfig=m({});loadMoreTemplate=m(void 0);panelClass=m(``);optionTemplate=m(void 0);triggerTemplate=m(void 0);isOpen=x(!1);search=vt$2();loadMore=vt$2();openedChange=vt$2();transition;disconnectTheme;disconnectLighting;disconnectOrigin;transitionRevision=0;focusOnOpen=null;searchTimeout;typeaheadTimeout;typeaheadText=``;connectedOverlay;searchInputRef;originRef;constructor(){super(),xe(()=>{this.searchRequest()&&!this.loading()&&!this.debouncing()&&this.searchRequest.set(!1)}),xe(()=>{let e=this.resolvedOptions(),t=z$2(this.knownOptions).filter(n=>this.isSelected(n.value)&&!e.some(r=>this.compareWith()(r.value,n.value)));this.knownOptions.set([...t,...e])}),xe(()=>{(this.disabled()||this.isReadonly())&&this.isOpen()&&this.close()}),p(J$1).onDestroy(()=>{clearTimeout(this.searchTimeout),clearTimeout(this.typeaheadTimeout)})}ngOnDestroy(){++this.transitionRevision,this.onPanelDetach()}toggleOpen(){this.disabled()||this.isReadonly()||(this.isOpen()?this.close():this.open())}open(){if(this.disabled()||this.isReadonly()||this.isOpen())return;++this.transitionRevision,this.isOpen.set(!0),this.openedChange.emit(!0),this.isPanelAttached.set(!0);let e=this.connectedOverlay?.overlayRef?.overlayElement;e&&(e.inert=!1);let t=this.transition;t&&this.zone.runOutsideAngular(()=>t.enter()),this.connectedOverlay?.overlayRef?.hasAttached()&&this.isSearchable()&&queueMicrotask(()=>this.searchInputRef?.focus())}close(){let e=this.isOpen();this.isOpen.set(!1),e&&(this.openedChange.emit(!1),this.markAsTouched());let t=++this.transitionRevision,n=this.connectedOverlay?.overlayRef?.overlayElement;n?.contains(n.ownerDocument.activeElement)&&this.originRef?.nativeElement.focus({preventScroll:!0}),n&&(n.inert=!0);let r=this.transition;r&&!this.a11y.isReducedMotion()?this.zone.runOutsideAngular(()=>r.exit()).then(()=>{t===this.transitionRevision&&!this.isOpen()&&this.isPanelAttached.set(!1)}).catch(()=>{t===this.transitionRevision&&this.isPanelAttached.set(!1)}):this.isPanelAttached.set(!1)}onPanelAttach(){let e=this.transitionRevision,t=this.originRef?.nativeElement,n=this.connectedOverlay?.overlayRef;t&&n?.hasAttached()&&(this.disconnectLighting?.(),this.disconnectLighting=vi$1(n.overlayElement,t),this.disconnectOrigin?.(),this.disconnectOrigin=this.zone.runOutsideAngular(()=>rs(n,t))),queueMicrotask(()=>{let r=this.connectedOverlay?.overlayRef,o=this.originRef?.nativeElement;if(!(!r?.hasAttached()||!o||!this.isOpen()||e!==this.transitionRevision)){if(this.disconnectTheme?.(),this.disconnectTheme=this.zone.runOutsideAngular(()=>Ur$1(o,r.overlayElement)),r.updatePosition(),!this.a11y.isReducedMotion()){this.transition?.destroy(),this.transition=this.zone.runOutsideAngular(()=>Yo(o,r.overlayElement));let a=this.transition;this.zone.runOutsideAngular(()=>a.enter()).catch(()=>{e===this.transitionRevision&&(this.transition?.destroy(),this.transition=void 0)})}if(this.isSearchable())this.searchInputRef?.focus();else{let a=this.panelItems();(a.find(u=>u.getAttribute(`aria-selected`)===`true`)??(this.focusOnOpen===`last`?a[a.length-1]:a[0]))?.focus()}this.focusOnOpen=null}})}onPanelDetach(){this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.disconnectOrigin?.(),this.disconnectOrigin=void 0}overlayPopoverLocation(e){return!!this.overlayContext?.useTopLayer||!!e.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)?`global`:null}refreshPanel(){this.transition?.refresh()}onTriggerKey(e){if(!(this.disabled()||this.isReadonly())){if(e.key===`Escape`||e.altKey&&e.key===`ArrowUp`){e.preventDefault(),this.close();return}[`ArrowDown`,`ArrowUp`,`Enter`,` `].includes(e.key)?(e.preventDefault(),this.focusOnOpen=e.key===`ArrowUp`?`last`:`first`,this.open()):e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&(this.open(),this.typeahead(e.key))}}onPanelKey(e){if(e.key===`Escape`||e.key===`Tab`||e.altKey&&e.key===`ArrowUp`){e.key!==`Tab`&&e.preventDefault(),e.stopPropagation(),this.close();return}let n=e.target.matches(`input,textarea`);if(n&&![`ArrowDown`,`ArrowUp`].includes(e.key))return;if(![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){!n&&e.key.length===1&&e.key!==` `&&this.typeahead(e.key);return}let r=this.panelItems();if(!r.length)return;let o=r.indexOf(r[0].ownerDocument.activeElement),a=e.key===`Home`?0:e.key===`End`?r.length-1:e.key===`ArrowDown`?(o+1)%r.length:o<0?r.length-1:(o-1+r.length)%r.length;e.preventDefault(),r[a].focus()}onTriggerBlur(){this.isOpen()||this.markAsTouched()}onOutsideClick(e){let t=e.target;this.originRef?.nativeElement.contains(t)||this.close()}clearSelectedValue(e){return this.disabled()||this.isReadonly()?!1:(this.updateValue(e),this.close(),this.markAsTouched(),this.focus({preventScroll:!0}),!0)}onSearchChange(e){clearTimeout(this.searchTimeout),this.debouncing.set(!0),this.searchTimeout=setTimeout(()=>{this.debouncing.set(!1),this.searchRequest.set(this.externalFiltering()),this.searchValue.set(e),this.search.emit(e)},this.searchDebounce())}selectionTagConfig(e){return r(r({},this.tagConfig()),e.tagConfig)}requestMore(e){this.loadMore.emit(r({},e))}typeahead(e){clearTimeout(this.typeaheadTimeout),this.typeaheadText+=e.toLocaleLowerCase(),this.typeaheadTimeout=setTimeout(()=>{this.typeaheadText=``},700),queueMicrotask(()=>this.panelItems().find(t=>t.textContent?.trim().toLocaleLowerCase().startsWith(this.typeaheadText))?.focus())}panelItems(){return Array.from(this.connectedOverlay?.overlayRef?.overlayElement.querySelectorAll(`.bx-select-option:not(:disabled)`)??[])}static ɵfac=function(t){return new(t||i)};static ɵdir=U$2({type:i,viewQuery:function(t,n){if(t&1&&(Mr$1(n.valueOverflow,Zr,5)(n.labelOverflow,Qr,5),av(kF,5)(Jr,5)(eo,5,B$1)),t&2){Qt$2(2);let r;lv(r=cv())&&(n.connectedOverlay=r.first),lv(r=cv())&&(n.searchInputRef=r.first),lv(r=cv())&&(n.originRef=r.first)}},inputs:{clearable:[1,`clearable`],clearLabel:[1,`clearLabel`],clearTooltip:[1,`clearTooltip`],selectionDisplay:[1,`selectionDisplay`],tagConfig:[1,`tagConfig`],overflowTagConfig:[1,`overflowTagConfig`],visibleTagCount:[1,`visibleTagCount`],tagOverflowText:[1,`tagOverflowText`],options:[1,`options`],compareWith:[1,`compareWith`],isSearchable:[1,`isSearchable`],externalFiltering:[1,`externalFiltering`],searchValue:[1,`searchValue`],searchDebounce:[1,`searchDebounce`],searchPlaceholder:[1,`searchPlaceholder`],emptyMessage:[1,`emptyMessage`],loadingLabel:[1,`loadingLabel`],loadingAriaLabel:[1,`loadingAriaLabel`],hasMore:[1,`hasMore`],loadError:[1,`loadError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],panelClass:[1,`panelClass`],optionTemplate:[1,`optionTemplate`],triggerTemplate:[1,`triggerTemplate`]},outputs:{searchValue:`searchValueChange`,search:`search`,loadMore:`loadMore`,openedChange:`openedChange`},features:[St$2]})};var to=[[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var no=[`[bxSuffix]`,`bx-error`,`bx-hint`];var io=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var ro=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var oo=(i,e,t)=>({$implicit:i,selected:e,index:t});var Ei=(i,e)=>e.value;function ao(i,e){i&1&&(P$1(0,`span`,19),Re(1,`*`),L$1())}function so(i,e){if(i&1&&(P$1(0,`span`,9)(1,`span`,18,2),Re(3),L$1(),ce(4,ao,2,0,`span`,19),L$1()),i&2){let t=ae$2();S(),te$1(`bxTruncate`,!t.isFloating()),S(2),je(t.resolvedLabel()),S(),ue(t.required()&&!t.resolvedHideRequiredMarker()?4:-1)}}function lo(i,e){if(i&1&&Ys(0,11),i&2){let t=ae$2();te$1(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,t.triggerContext())}}function co(i,e){if(i&1&&Oe$1(0,`bx-tag`,20),i&2){let t=e.$implicit,n=ae$2(2);te$1(`text`,t.label)(`config`,n.selectionTagConfig(t))(`disabled`,n.disabled()||!!t.disabled)(`focusable`,!1)(`tooltipOnTruncate`,n.resolvedTooltipOnTruncate()?void 0:!1)}}function uo(i,e){if(i&1&&Oe$1(0,`bx-tag`,21),i&2){let t=ae$2(2);te$1(`text`,t.overflowTagLabel())(`config`,t.overflowTagConfig())(`tooltip`,t.overflowTagTooltip())(`focusable`,!1)(`tooltipOnTruncate`,t.resolvedTooltipOnTruncate()?void 0:!1)}}function po(i,e){if(i&1&&(P$1(0,`span`,12),xr$1(1,co,1,5,`bx-tag`,20,Ei),ce(3,uo,1,5,`bx-tag`,21),L$1()),i&2){let t=ae$2();S(),Sr$1(t.visibleTags()),S(2),ue(t.selectedOptions().length>t.visibleTagCount()?3:-1)}}function ho(i,e){if(i&1&&Re(0),i&2){let t=ae$2();lr$1(` `,t.selectedOptionLabel()||(t.isFloating()||!t.label()?t.resolvedPlaceholder():``),` `)}}function fo(i,e){i&1&&Oe$1(0,`bx-loading-spinner`,14),i&2&&te$1(`size`,16)(`decorative`,!0)}function go(i,e){i&1&&Oe$1(0,`bx-icon`,15)}function bo(i,e){if(i&1){let t=Er$1();P$1(0,`button`,22),be$1(`click`,function(){$n$2(t);let r=ae$2();return qn$2(r.clearSelection())}),Oe$1(1,`bx-icon`,23),L$1()}if(i&2){let t=ae$2();te$1(`surfaceEffects`,!1)(`disabled`,t.disabled())(`bxTooltip`,t.resolvedClearTooltip()),j$1(`aria-label`,t.resolvedClearLabel())}}function mo(i,e){if(i&1){let t=Er$1();P$1(0,`div`,25)(1,`bx-search-input`,30,4),be$1(`search`,function(r){$n$2(t);let o=ae$2(2);return qn$2(o.onSearchChange(r))})(`keydown.enter`,function(r){return r.preventDefault()}),L$1()()}if(i&2){let t=ae$2(2);S(),te$1(`value`,t.searchValue())(`placeholder`,t.resolvedSearchPlaceholder())(`ariaLabel`,t.resolvedSearchPlaceholder())}}function yo(i,e){if(i&1&&(P$1(0,`div`,31),Re(1),L$1()),i&2){let t=ae$2(),n=t.$implicit,r=t.$index,o=ae$2(2);te$1(`id`,o.controlId()+`-group-`+r),S(),je(n.resolvedGroup)}}function vo(i,e){i&1&&Oe$1(0,`bx-icon`,34)}function xo(i,e){if(i&1&&Oe$1(0,`bx-icon`,35),i&2){let t=ae$2().$implicit;te$1(`name`,t.icon)}}function _o(i,e){if(i&1&&Ys(0,11),i&2){let t=ae$2(),n=t.$implicit,r=t.$index,o=ae$2(2);te$1(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,fO(2,oo,n,o.isSelected(n.value),r))}}function Mo(i,e){if(i&1&&(P$1(0,`span`),Re(1),L$1()),i&2){let t=ae$2().$implicit;S(),je(t.resolvedStr)}}function Co(i,e){if(i&1){let t=Er$1();ce(0,yo,2,2,`div`,31),P$1(1,`button`,32),be$1(`click`,function(){let r=$n$2(t).$implicit,o=ae$2(2);return qn$2(o.selectOption(r))}),P$1(2,`span`,33),ce(3,vo,1,0,`bx-icon`,34),L$1(),ce(4,xo,1,1,`bx-icon`,35),ce(5,_o,1,6,`ng-container`,11)(6,Mo,2,1,`span`),L$1()}if(i&2){let t,n=e.$implicit,r=e.$index,o=ae$2(2);ue(n.resolvedGroup&&(r===0||o.filteredOptions()[r-1].resolvedGroup!==n.resolvedGroup)?0:-1),S(),te$1(`disabled`,n.disabled||n.groupDisabled||!1),j$1(`aria-selected`,o.isSelected(n.value)),S(2),ue(o.isSelected(n.value)?3:-1),S(),ue(n.icon?4:-1),S(),ue((t=o.optionTemplate())?5:6,t)}}function So(i,e){if(i&1&&(P$1(0,`div`,36),Re(1),L$1()),i&2){let t=ae$2(3);S(),je(t.resolvedEmptyMessage())}}function wo(i,e){if(i&1&&ce(0,So,2,1,`div`,36),i&2){let t=ae$2(2);ue(t.loading()?-1:0)}}function No(i,e){if(i&1&&(P$1(0,`span`),Re(1),L$1()),i&2){let t=ae$2(3);S(),je(t.resolvedLoadingLabel())}}function To(i,e){i&1&&Oe$1(0,`bx-loading-spinner`,14),i&2&&te$1(`size`,20)(`decorative`,!0)}function Oo(i,e){if(i&1&&(P$1(0,`div`,28),ce(1,No,2,1,`span`)(2,To,1,2,`bx-loading-spinner`,14),L$1()),i&2){let t=ae$2(2);j$1(`aria-label`,t.resolvedLoadingLabel()||t.resolvedLoadingAriaLabel()),S(),ue(t.resolvedLoadingLabel()?1:2)}}function ko(i,e){if(i&1&&(P$1(0,`div`,29),Oe$1(1,`bx-loading-indicator`,37),L$1()),i&2){let t=ae$2(2);S(),te$1(`size`,16)(`label`,t.loadingLabel()??t.loadingAriaLabel())}}function Eo(i,e){if(i&1){let t=Er$1();P$1(0,`div`,24),be$1(`keydown`,function(r){$n$2(t);let o=ae$2();return qn$2(o.onPanelKey(r))}),ce(1,mo,3,3,`div`,25),P$1(2,`div`,26,3),be$1(`loadMore`,function(r){$n$2(t);let o=ae$2();return qn$2(o.requestMore(r))}),P$1(4,`div`,27),xr$1(5,Co,7,6,null,null,Ei,!1,wo,1,1),L$1(),ce(8,Oo,3,2,`div`,28)(9,ko,2,2,`div`,29),L$1()()}if(i&2){let t=Pl(3),n=ae$2();Ll(n.panelClass()),S(),ue(n.isSearchable()?1:-1),S(),te$1(`loadMoreHasMore`,n.hasMore())(`loadMoreSuppressed`,n.isSearching())(`loadMoreLoading`,n.loading())(`loadMoreDisabled`,n.disabled()||n.isReadonly())(`loadMoreError`,n.loadError())(`loadMoreConfig`,n.loadMoreConfig())(`loadMoreTemplate`,n.loadMoreTemplate())(`loadMoreRevision`,n.options()),S(2),te$1(`hidden`,n.isSearching())(`id`,n.controlId()+`-options`),j$1(`aria-label`,n.ariaLabel()||n.resolvedLabel()),S(),Sr$1(n.filteredOptions()),S(3),ue(n.isSearching()?8:n.loading()&&!t.actionVisible()?9:-1)}}var ki=class i extends pt$1{selectionChange=vt$2();clearSelection(){this.clearSelectedValue(null)&&this.selectionChange.emit({value:null,source:`clear`})}isSelected(e){let t=this.internalValue();return t!==null&&this.compareWith()(t,e)}selectOption(e){e.disabled||e.groupDisabled||this.disabled()||this.isReadonly()||(this.updateValue(e.value),this.selectionChange.emit({value:e.value,source:`user`}),this.close())}static ɵfac=(()=>{let e;return function(n){return(e||(e=ar$1(i)))(n||i)}})();static ɵcmp=H({type:i,selectors:[[`bx-select`]],outputs:{selectionChange:`selectionChange`},features:[St$2],ngContentSelectors:no,decls:19,vars:51,consts:[[`origin`,`cdkOverlayOrigin`],[`valueOverflow`,`bxTruncate`],[`labelOverflow`,`bxTruncate`],[`pagination`,`bxLoadMore`],[`searchInput`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-select-control`],[`type`,`button`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`blur`,`bxTooltip`,`bxTooltipHover`,`bxTooltipTouch`,`id`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`,3,`bxTruncate`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`bx-selected-tags`],[`aria-hidden`,`true`,1,`bx-select-caret`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[3,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-field-required`],[3,`text`,`config`,`disabled`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`data-bx-surface`,`solid`,`tabindex`,`-1`,1,`bx-select-panel`,3,`keydown`],[1,`bx-select-search-container`],[`bxLoadMore`,``,1,`bx-select-menu-container`,3,`loadMore`,`loadMoreHasMore`,`loadMoreSuppressed`,`loadMoreLoading`,`loadMoreDisabled`,`loadMoreError`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`hidden`,`id`],[`role`,`status`,1,`bx-select-search-state`],[1,`bx-select-loading`],[3,`search`,`keydown.enter`,`value`,`placeholder`,`ariaLabel`],[1,`bx-select-group`,3,`id`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-select-option`,3,`click`,`disabled`],[`aria-hidden`,`true`,1,`bx-select-check-placeholder`],[`name`,`check`,`size`,`16`],[`size`,`16`,3,`name`],[`role`,`status`,1,`bx-select-empty`],[3,`size`,`label`]],template:function(t,n){if(t&1&&(Ne$3(to),P$1(0,`bx-form-field`,5)(1,`div`,6)(2,`button`,7,0),be$1(`click`,function(){return n.toggleOpen()})(`keydown`,function(o){return n.onTriggerKey(o)})(`blur`,function(){return n.onTriggerBlur()}),P$1(4,`div`,8),ce(5,so,5,3,`span`,9),P$1(6,`span`,10,1),ce(8,lo,1,2,`ng-container`,11)(9,po,4,1,`span`,12)(10,ho,1,1),L$1()(),pe(11),P$1(12,`span`,13),ce(13,fo,1,2,`bx-loading-spinner`,14)(14,go,1,0,`bx-icon`,15),L$1()(),ce(15,bo,2,4,`button`,16),L$1(),ex(16,Eo,10,16,`ng-template`,17),be$1(`overlayOutsideClick`,function(o){return n.onOutsideClick(o)})(`attach`,function(){return n.onPanelAttach()})(`detach`,function(){return n.onPanelDetach()})(`positionChange`,function(){return n.refreshPanel()}),pe(17,1,io),pe(18,2,ro),L$1()),t&2){let r,o=Pl(3);te$1(`control`,n.fieldControl)(`inline`,!0)(`tooltip`,n.tooltip())(`showLoadingIndicator`,!1)(`hint`,n.hint())(`hintEnd`,n.hintEnd())(`subscriptSizing`,n.resolvedSubscriptSizing())(`forId`,n.controlId()),S(),Z(`has-clear`,n.showClear()),S(),Z(`is-invalid`,n.showError())(`is-outline`,n.resolvedAppearance()===`outline`)(`is-open`,n.isOpen())(`is-floating`,n.isFloating())(`is-readonly`,n.isReadonly())(`is-keyboard-focused`,n.keyboardFocused()),te$1(`bxTooltip`,n.resolvedTooltipOnTruncate()?n.selectionDisplay()===`tags`?n.selectedOptionLabel():n.truncatedSelectionTooltip():``)(`bxTooltipHover`,n.selectionDisplay()!==`tags`)(`bxTooltipTouch`,n.selectionDisplay()===`tags`?`none`:`longpress`)(`id`,n.controlId())(`disabled`,n.disabled()),j$1(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()||n.resolvedLabel())(`aria-labelledby`,n.ariaLabelledBy())(`aria-describedby`,n.describedBy())(`aria-invalid`,n.showError())(`aria-required`,n.required())(`aria-readonly`,n.isReadonly())(`aria-busy`,n.loading()||n.pending()||n.isSearching())(`aria-expanded`,n.isOpen())(`aria-controls`,n.isPanelAttached()?n.controlId()+`-options`:null),S(3),ue(n.label()?5:-1),S(),Z(`is-placeholder`,!n.selectedOptionLabel()),te$1(`bxTruncate`,!(n.selectionDisplay()===`tags`&&n.selectedOptions().length)&&!n.triggerTemplate()),S(2),ue((r=n.triggerTemplate())?8:n.selectionDisplay()===`tags`&&n.selectedOptions().length?9:10,r),S(5),ue(n.loading()||n.pending()||n.isSearching()?13:14),S(2),ue(n.showClear()?15:-1),S(),te$1(`cdkConnectedOverlayOrigin`,o)(`cdkConnectedOverlayOpen`,n.isPanelAttached())(`cdkConnectedOverlayPositions`,n.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayScrollStrategy`,n.panelScrollStrategy)(`cdkConnectedOverlayUsePopover`,n.overlayPopoverLocation(o.elementRef.nativeElement))(`cdkConnectedOverlayWidth`,o.elementRef.nativeElement.offsetWidth)}},dependencies:[Rt$3,AF,kF,yy,Gf,qf,bt$2,hT,ut$1,Gl,K0,Gr$1,z0,$r$1,qr$1],styles:[`
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  inline-size: 1rem;
  block-size: 1rem;
  margin-inline-start: 0.5rem;
  color: var(--%NS%bx-text-secondary);
  transition: transform 0.2s ease;
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
  background: var(--%NS%bx-glass-surface, var(--%NS%bx-bg-surface)) !important;
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
}`]})};var he=class i{radios=new Set;select(n){for(let t of this.radios)t!==n&&t.sharesGroup(n)&&t.writeValue(n.value())}static ɵfac=function(t){return new(t||i)};static ɵprov=V$2({token:i,factory:i.ɵfac,providedIn:`root`})};var ve=new E$1(`BX_RADIO_GROUP`);var kn=[`*`];function Tn(i,n){i&1&&(P$1(0,`span`,6),Re(1,`*`),L$1())}function wn(i,n){if(i&1&&(P$1(0,`span`,5),pe(1),Re(2),ce(3,Tn,2,0,`span`,6),L$1()),i&2){let t=ae$2();S(2),lr$1(``,t.resolvedLabel(),` `),S(),ue(t.isFieldRequired()||t.group?.required()?3:-1)}}var xn=class i extends E0{group=p(ve,{optional:!0});registry=p(he);defaults=p(Wf);element=p(B$1).nativeElement;i18n=p(Se$2,{optional:!0});inputId=v(()=>`bx-radio-${er$1()}`);resolvedLabel=v(()=>{this.i18n?.version?.();let n=this.label();if(n)return Hr$1(n)?this.i18n?.translate(n.key)??n.key:n});effectiveDisabled=v(()=>this.isDisabled()||!!this.group?.disabled());effectiveName=v(()=>this.group?.groupName()??this.name());selected=v(()=>(this.group?this.group.value():this.internalValue())===this.value());labelPosition=m(`after`);subscriptSizing=m(void 0);resolvedSubscriptSizing=v(()=>this.subscriptSizing()??this.defaults.settings().subscriptSizing);value=m.required();name=m(``);showTooltip=!1;constructor(){super(),this.registry.radios.add(this),p(J$1).onDestroy(()=>this.registry.radios.delete(this))}sharesGroup(n){let t=this.ngControl?.control;return t&&t===n.ngControl?.control?!0:!!this.name()&&this.name()===n.name()&&this.element.closest(`form`)===n.element.closest(`form`)&&t?.parent===n.ngControl?.control?.parent}onSelect(){this.effectiveDisabled()||this.isReadonly()||this.group?.isReadonly()||(this.group?this.group.select(this.value()):(this.updateValue(this.value()),this.registry.select(this)))}onReadonlyClick(n){(this.isReadonly()||this.group?.isReadonly())&&n.preventDefault()}onControlPointerDown(){(this.isReadonly()||this.group?.isReadonly())&&this.keyboardFocused.set(!1)}onBlur(){this.group?this.group.markTouched():this.markAsTouched()}static ɵfac=function(t){return new(t||i)};static ɵcmp=H({type:i,selectors:[[`bx-radio`]],inputs:{labelPosition:[1,`labelPosition`],subscriptSizing:[1,`subscriptSizing`],value:[1,`value`],name:[1,`name`]},features:[St$2],ngContentSelectors:kn,decls:6,vars:29,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`,`subscriptSizing`],[1,`bx-inline-wrapper`],[`type`,`radio`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`required`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-radio-circle`,3,`bxSurfaceEmission`],[1,`bx-radio-inner`],[1,`bx-inline-label`],[1,`bx-inline-required`]],template:function(t,e){t&1&&(Ne$3(),P$1(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),be$1(`click`,function(r){return e.onReadonlyClick(r)})(`change`,function(){return e.onSelect()})(`blur`,function(){return e.onBlur()}),L$1(),P$1(3,`div`,3),Oe$1(4,`div`,4),L$1(),ce(5,wn,4,2,`span`,5),L$1()()),t&2&&(te$1(`inline`,!0)(`tooltip`,e.tooltip())(`error`,e.errorMessage)(`loading`,e.loading())(`forId`,e.inputId())(`subscriptSizing`,e.resolvedSubscriptSizing()),S(),Z(`is-disabled`,e.effectiveDisabled())(`is-readonly`,e.isReadonly()||!!e.group?.isReadonly())(`is-keyboard-focused`,e.keyboardFocused())(`label-before`,e.labelPosition()===`before`),S(),te$1(`required`,e.required()||!!e.group?.required())(`disabled`,e.effectiveDisabled())(`checked`,e.selected()),j$1(`id`,e.inputId())(`name`,e.effectiveName()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel())(`aria-readonly`,e.isReadonly()||!!e.group?.isReadonly())(`aria-describedby`,e.group?.describedBy()),S(),Z(`is-checked`,e.selected())(`is-invalid`,!!e.errorMessage),te$1(`bxSurfaceEmission`,e.errorMessage?`var(--bx-text-danger)`:`var(--bx-accent)`),S(2),ue(e.resolvedLabel()?5:-1))},dependencies:[Rt$3,Jx,Gf],styles:[`
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
}`],changeDetection:1})};var Dn=[`*`,[[`bx-error`]],[[`bx-hint`]]];var En=[`*`,`bx-error`,`bx-hint`];var In=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Ln=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Rn(i,n){i&1&&(P$1(0,`span`,6),Re(1,`*`),L$1())}var fn=class i extends Ye{static ɵfac=(()=>{let n;return function(e){return(n||(n=ar$1(i)))(e||i)}})();static ɵcmp=H({type:i,selectors:[[`bx-slide-toggle`]],features:[St$2],ngContentSelectors:En,decls:11,vars:35,consts:[[3,`control`,`inline`,`tooltip`,`loading`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,`role`,`switch`,1,`bx-visually-hidden`,3,`click`,`change`,`blur`,`id`,`disabled`,`required`,`checked`],[`bxSurface`,``,1,`bx-slide-toggle-track`,3,`bxSurfaceEmission`],[1,`bx-slide-toggle-thumb`],[1,`bx-inline-label`],[`aria-hidden`,`true`,1,`bx-inline-required`]],template:function(t,e){t&1&&(Ne$3(Dn),P$1(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),be$1(`click`,function(r){return e.onReadonlyClick(r)})(`change`,function(r){return e.onToggle(r)})(`blur`,function(){return e.onBlur()}),L$1(),P$1(3,`div`,3),Oe$1(4,`div`,4),L$1(),P$1(5,`span`,5),pe(6),Re(7),ce(8,Rn,2,0,`span`,6),L$1()(),pe(9,1,In),pe(10,2,Ln),L$1()),t&2&&(te$1(`control`,e.fieldControl)(`inline`,!0)(`tooltip`,e.tooltip())(`loading`,e.loading())(`hint`,e.hint())(`hintEnd`,e.hintEnd())(`subscriptSizing`,e.resolvedSubscriptSizing())(`forId`,e.controlId()),S(),Z(`is-disabled`,e.disabled())(`is-readonly`,e.isReadonly())(`is-keyboard-focused`,e.keyboardFocused())(`label-before`,e.labelPosition()===`before`),S(),te$1(`id`,e.controlId())(`disabled`,e.disabled())(`required`,e.effectiveRequired())(`checked`,e.displayedChecked()),j$1(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-readonly`,e.isReadonly())(`aria-checked`,e.displayedChecked()),S(),Z(`is-checked`,e.displayedChecked())(`is-invalid`,e.showError()),te$1(`bxSurfaceEmission`,e.showError()?`var(--bx-text-danger)`:`var(--bx-accent)`),S(4),lr$1(``,e.resolvedLabel(),` `),S(),ue(e.effectiveRequired()&&!e.resolvedHideRequiredMarker()?8:-1))},dependencies:[Rt$3,Gf],styles:[`
[_nghost-%COMP%] {
  --%NS%bx-field-support-padding: 0;
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
  inline-size: var(--%NS%bx-toggle-inline-size, auto);
  align-items: center;
  justify-content: var(--%NS%bx-toggle-justify-content, start);
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
  min-inline-size: 0;
  font-size: 0.875rem;
  color: var(--%NS%bx-text-primary);
  overflow-wrap: anywhere;
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
  flex-shrink: 0;
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
}`]})};var ye=class i{element=p(B$1);theme=p(ba);discrete=m(!1);displayWith=m(String);showTickMarks=m(!1);shell;valueLabel;tickList;thumb;constructor(){Ag(()=>this.sync());let n=p(K),t=p(J$1);ft$2(()=>{let e=this.element.nativeElement,o=e.ownerDocument.createElement(`span`);o.className=`bx-slider-shell`;let r=e.ownerDocument.createElement(`span`);r.className=`bx-slider-thumb`,r.setAttribute(`aria-hidden`,`true`);let u=e.ownerDocument.createElement(`span`);u.className=`bx-slider-lens`,r.append(u),e.before(o),o.append(e,r),this.shell=o,this.thumb=r;let N=e.ownerDocument.createElement(`span`);N.className=`bx-slider-value-label`,N.setAttribute(`aria-hidden`,`true`),o.append(N),this.valueLabel=N;let R=e.ownerDocument.createElement(`datalist`);R.id=`bx-slider-ticks-${e.id||Math.random().toString(36).slice(2)}`,o.append(R),this.tickList=R,this.sync();let A=()=>{o.style.setProperty(`--bx-slider-center-y`,`${e.offsetTop+e.offsetHeight/2}px`),o.style.setProperty(`--bx-slider-track-start`,`${e.offsetLeft}px`),o.style.setProperty(`--bx-slider-track-width`,`${e.offsetWidth}px`),Ob(r)},Q=new ResizeObserver(A);n.runOutsideAngular(()=>{Q.observe(e),Q.observe(o),A()});let Pn=n.runOutsideAngular(()=>D1(r,I=>{let ie=I.reflectionStrength>I.strength,Se=ie?I.reflectionStrength:I.strength;Se<=.04?(r.style.removeProperty(`--bx-slider-light-color`),r.style.removeProperty(`--bx-slider-light-strength`)):(r.style.setProperty(`--bx-slider-light-color`,ie?I.reflection:I.color),r.style.setProperty(`--bx-slider-light-strength`,String(Se))),r.style.setProperty(`--bx-slider-light-x`,`${ie?I.reflectionX:I.x}%`),r.style.setProperty(`--bx-slider-light-y`,`${ie?I.reflectionY:I.y}%`)},e));t.onDestroy(()=>{Q.disconnect(),Pn(),o.replaceWith(e),this.shell=this.thumb=void 0})})}sync(){let n=this.element.nativeElement,t=n.min===``?0:Number(n.min),e=n.max===``?100:Number(n.max),o=e>t?Math.max(0,Math.min(100,(n.valueAsNumber-t)/(e-t)*100)):0;if(this.valueLabel&&(this.valueLabel.hidden=!this.discrete(),this.valueLabel.textContent=this.displayWith()(n.valueAsNumber)),this.tickList){let u=Math.min(1e3,Math.floor((e-t)/(Number(n.step)||1))),N=`${t}:${e}:${n.step}:${this.showTickMarks()}`;if(this.tickList.dataset.range!==N&&(this.tickList.replaceChildren(),this.tickList.dataset.range=N,this.showTickMarks()&&u>0))for(let R=0;R<=u;R++){let A=n.ownerDocument.createElement(`option`);A.value=String(t+R*(Number(n.step)||1)),this.tickList.append(A)}this.showTickMarks()?n.setAttribute(`list`,this.tickList.id):n.getAttribute(`list`)===this.tickList.id&&n.removeAttribute(`list`)}let r=`${Number.isFinite(o)?o:0}%`;if(n.style.getPropertyValue(`--bx-slider-progress`)!==r&&n.style.setProperty(`--bx-slider-progress`,r),this.shell){let u=String((Number.isFinite(o)?o:0)/100);this.shell.style.getPropertyValue(`--bx-slider-position`)!==u&&(this.shell.style.setProperty(`--bx-slider-position`,u),this.thumb&&Ob(this.thumb))}}static ɵfac=function(t){return new(t||i)};static ɵdir=U$2({type:i,selectors:[[`input`,`type`,`range`,`bxSlider`,``]],hostAttrs:[1,`bx-slider`],hostBindings:function(t,e){t&1&&be$1(`input`,function(){return e.sync()})},inputs:{discrete:[1,`discrete`],displayWith:[1,`displayWith`],showTickMarks:[1,`showTickMarks`]}})};var An=[`*`,[[`bx-error`]],[[`bx-hint`]]];var zn=[`*`,`bx-error`,`bx-hint`];var Fn=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var Bn=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var hn=class i extends Yf{groupName=v(()=>this.name()||this.controlId());focus(n){let t=this.hostElement.querySelector(`input:checked:not(:disabled)`);t?t.focus(n):super.focus(n)}select(n){this.updateValue(n)}markTouched(){this.markAsTouched()}static ɵfac=(()=>{let n;return function(e){return(n||(n=ar$1(i)))(e||i)}})();static ɵcmp=H({type:i,selectors:[[`bx-radio-group`]],features:[ln$1([{provide:ve,useExisting:jt$3(()=>i)}]),St$2],ngContentSelectors:zn,decls:5,vars:14,consts:[[3,`control`,`label`,`hint`,`hintEnd`,`tooltip`,`hideRequiredMarker`,`subscriptSizing`,`forId`],[`role`,`radiogroup`,3,`id`]],template:function(t,e){t&1&&(Ne$3(An),P$1(0,`bx-form-field`,0)(1,`div`,1),pe(2),L$1(),pe(3,1,Fn),pe(4,2,Bn),L$1()),t&2&&(te$1(`control`,e.fieldControl)(`label`,e.label())(`hint`,e.hint())(`hintEnd`,e.hintEnd())(`tooltip`,e.tooltip())(`hideRequiredMarker`,e.resolvedHideRequiredMarker())(`subscriptSizing`,e.resolvedSubscriptSizing())(`forId`,e.controlId()),S(),te$1(`id`,e.controlId()),j$1(`aria-label`,e.ariaLabel()||e.resolvedLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-required`,e.effectiveRequired()))},dependencies:[Gf],styles:[`
[_nghost-%COMP%] {
  display: block;
}
[role=radiogroup][_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-radio-group-gap, 0.5rem);
  --%NS%bx-field-subscript-height: 0;
}`]})};var vn=class i{static ɵfac=function(t){return new(t||i)};static ɵdir=U$2({type:i,selectors:[[``,`bxPrefix`,``]],hostAttrs:[1,`bx-field-prefix`]})};var yn=class i{static ɵfac=function(t){return new(t||i)};static ɵdir=U$2({type:i,selectors:[[``,`bxSuffix`,``]],hostAttrs:[1,`bx-field-suffix`]})};function _n(i){let n=Number(i);return Number.isFinite(n)?Math.max(2,Math.floor(n)):2}var Vn=[`summaryOverflow`];var qn=[[[``,`bxSuffix`,``]],[[`bx-error`]],[[`bx-hint`]]];var jn=[`[bxSuffix]`,`bx-error`,`bx-hint`];var Hn=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var $n=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var Wn=(i,n,t)=>({$implicit:i,selected:n,index:t});var Sn=(i,n)=>n.value;function Kn(i,n){i&1&&(P$1(0,`span`,21),Re(1,`*`),L$1())}function Xn(i,n){if(i&1&&(P$1(0,`span`,10)(1,`span`,20,3),Re(3),L$1(),ce(4,Kn,2,0,`span`,21),L$1()),i&2){let t=ae$2();S(),te$1(`bxTruncate`,!t.isFloating()),S(2),je(t.resolvedLabel()),S(),ue(t.required()&&!t.resolvedHideRequiredMarker()?4:-1)}}function Gn(i,n){if(i&1&&Ys(0,12),i&2){let t=ae$2();te$1(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,t.triggerContext())}}function Yn(i,n){if(i&1&&Oe$1(0,`bx-tag`,22),i&2){let t=ae$2(2);te$1(`text`,t.allSelectedText())(`config`,t.tagConfig())(`focusable`,!1)(`tooltip`,``)(`tooltipOnTruncate`,!1)}}function Un(i,n){if(i&1&&Oe$1(0,`bx-tag`,23),i&2){let t=n.$implicit,e=ae$2(3);te$1(`text`,t.label)(`config`,e.selectionTagConfig(t))(`disabled`,e.disabled()||!!t.disabled)(`focusable`,!1)(`tooltipOnTruncate`,e.resolvedTooltipOnTruncate()?void 0:!1)}}function Qn(i,n){if(i&1&&Oe$1(0,`bx-tag`,24),i&2){let t=ae$2(3);te$1(`text`,t.overflowTagLabel())(`config`,t.overflowTagConfig())(`tooltip`,t.overflowTagTooltip())(`focusable`,!1)(`tooltipOnTruncate`,t.resolvedTooltipOnTruncate()?void 0:!1)}}function Zn(i,n){if(i&1&&(xr$1(0,Un,1,5,`bx-tag`,23,Sn),ce(2,Qn,1,5,`bx-tag`,24)),i&2){let t=ae$2(2);Sr$1(t.visibleTags()),S(2),ue(t.selectedOptions().length>t.visibleTagCount()?2:-1)}}function Jn(i,n){if(i&1&&(P$1(0,`span`,13),ce(1,Yn,1,5,`bx-tag`,22)(2,Zn,3,1),L$1()),i&2){let t=ae$2();S(),ue(t.selectAll()&&t.allSelectedText()?1:2)}}function et(i,n){if(i&1&&Re(0),i&2){let t=ae$2();lr$1(` `,t.displayedSelection()||(t.isFloating()||!t.label()?t.resolvedPlaceholder():``),` `)}}function nt(i,n){i&1&&Oe$1(0,`bx-loading-spinner`,16),i&2&&te$1(`size`,16)(`decorative`,!0)}function tt(i,n){i&1&&Oe$1(0,`bx-icon`,17)}function it(i,n){if(i&1){let t=Er$1();P$1(0,`button`,25),be$1(`click`,function(){$n$2(t);let o=ae$2();return qn$2(o.clearSelection())}),Oe$1(1,`bx-icon`,26),L$1()}if(i&2){let t=ae$2();te$1(`surfaceEffects`,!1)(`disabled`,t.disabled())(`bxTooltip`,t.resolvedClearTooltip()),j$1(`aria-label`,t.resolvedClearLabel())}}function ot(i,n){if(i&1){let t=Er$1();P$1(0,`div`,28)(1,`bx-search-input`,34,5),be$1(`search`,function(o){$n$2(t);let r=ae$2(2);return qn$2(r.onSearchChange(o))})(`keydown.enter`,function(o){return o.preventDefault()}),L$1()()}if(i&2){let t=ae$2(2);S(),te$1(`value`,t.searchValue())(`placeholder`,t.resolvedSearchPlaceholder())(`ariaLabel`,t.resolvedSearchPlaceholder())}}function rt$1(i,n){if(i&1){let t=Er$1();P$1(0,`button`,35),be$1(`click`,function(){$n$2(t);let o=ae$2(2);return qn$2(o.toggleSelectAll())}),Oe$1(1,`bx-checkbox-indicator`,36),Re(2),L$1()}if(i&2){let t=ae$2(2);te$1(`disabled`,t.disabled()||t.isReadonly()),j$1(`aria-checked`,t.selectAllChecked()?`true`:t.someSelected()?`mixed`:`false`),S(),te$1(`checked`,t.selectAllChecked())(`indeterminate`,!t.selectAllChecked()&&t.someSelected())(`disabled`,t.disabled()),S(),lr$1(` `,t.resolvedSelectAllLabel(),` `)}}function at(i,n){if(i&1&&(P$1(0,`div`,37),Re(1),L$1()),i&2){let t=ae$2(),e=t.$implicit,o=t.$index,r=ae$2(2);te$1(`id`,r.controlId()+`-group-`+o),S(),je(e.resolvedGroup)}}function lt(i,n){if(i&1&&Oe$1(0,`bx-icon`,40),i&2){let t=ae$2().$implicit;te$1(`name`,t.icon)}}function st(i,n){if(i&1&&Ys(0,12),i&2){let t=ae$2(),e=t.$implicit,o=t.$index,r=ae$2(2);te$1(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,fO(2,Wn,e,r.isSelected(e.value),o))}}function dt(i,n){if(i&1&&(P$1(0,`span`),Re(1),L$1()),i&2){let t=ae$2().$implicit;S(),je(t.resolvedStr)}}function ct(i,n){if(i&1){let t=Er$1();ce(0,at,2,2,`div`,37),P$1(1,`button`,38),be$1(`click`,function(){let o=$n$2(t).$implicit,r=ae$2(2);return qn$2(r.selectOption(o))}),Oe$1(2,`bx-checkbox-indicator`,39),ce(3,lt,1,1,`bx-icon`,40),ce(4,st,1,6,`ng-container`,12)(5,dt,2,1,`span`),L$1()}if(i&2){let t,e=n.$implicit,o=n.$index,r=ae$2(2);ue(e.resolvedGroup&&(o===0||r.filteredOptions()[o-1].resolvedGroup!==e.resolvedGroup)?0:-1),S(),te$1(`disabled`,e.disabled||e.groupDisabled||!1),j$1(`aria-selected`,r.isSelected(e.value)),S(),te$1(`checked`,r.isSelected(e.value))(`disabled`,r.disabled()||!!e.disabled||!!e.groupDisabled),S(),ue(e.icon?3:-1),S(),ue((t=r.optionTemplate())?4:5,t)}}function bt(i,n){if(i&1&&(P$1(0,`div`,41),Re(1),L$1()),i&2){let t=ae$2(3);S(),je(t.resolvedEmptyMessage())}}function pt(i,n){if(i&1&&ce(0,bt,2,1,`div`,41),i&2){let t=ae$2(2);ue(t.loading()?-1:0)}}function ut(i,n){if(i&1&&(P$1(0,`span`),Re(1),L$1()),i&2){let t=ae$2(3);S(),je(t.resolvedLoadingLabel())}}function gt(i,n){i&1&&Oe$1(0,`bx-loading-spinner`,16),i&2&&te$1(`size`,20)(`decorative`,!0)}function mt(i,n){if(i&1&&(P$1(0,`div`,32),ce(1,ut,2,1,`span`)(2,gt,1,2,`bx-loading-spinner`,16),L$1()),i&2){let t=ae$2(2);j$1(`aria-label`,t.resolvedLoadingLabel()||t.resolvedLoadingAriaLabel()),S(),ue(t.resolvedLoadingLabel()?1:2)}}function xt(i,n){if(i&1&&(P$1(0,`div`,33),Oe$1(1,`bx-loading-indicator`,42),L$1()),i&2){let t=ae$2(2);S(),te$1(`size`,16)(`label`,t.loadingLabel()??t.loadingAriaLabel())}}function ft(i,n){if(i&1){let t=Er$1();P$1(0,`div`,27),be$1(`keydown`,function(o){$n$2(t);let r=ae$2();return qn$2(r.onPanelKey(o))}),ce(1,ot,3,3,`div`,28),ce(2,rt$1,3,6,`button`,29),P$1(3,`div`,30,4),be$1(`loadMore`,function(o){$n$2(t);let r=ae$2();return qn$2(r.requestMore(o))}),P$1(5,`div`,31),xr$1(6,ct,6,7,null,null,Sn,!1,pt,1,1),L$1(),ce(9,mt,3,2,`div`,32)(10,xt,2,2,`div`,33),L$1()()}if(i&2){let t=Pl(4),e=ae$2();Ll(e.panelClass()),S(),ue(e.isSearchable()?1:-1),S(),ue(e.showSelectAll()?2:-1),S(),te$1(`loadMoreHasMore`,e.hasMore())(`loadMoreSuppressed`,e.isSearching())(`loadMoreLoading`,e.loading())(`loadMoreDisabled`,e.disabled()||e.isReadonly())(`loadMoreError`,e.loadError())(`loadMoreConfig`,e.loadMoreConfig())(`loadMoreTemplate`,e.loadMoreTemplate())(`loadMoreRevision`,e.options()),S(2),te$1(`hidden`,e.isSearching())(`id`,e.controlId()+`-options`),j$1(`aria-multiselectable`,!0)(`aria-label`,e.ariaLabel()||e.resolvedLabel()),S(),Sr$1(e.filteredOptions()),S(3),ue(e.isSearching()?9:e.loading()&&!t.actionVisible()?10:-1)}}var Cn=class i extends pt$1{summaryOverflow=Zs(`summaryOverflow`);labelsAdapter=p(Se$2,{optional:!0});hasSelection=v(()=>!!this.internalValue()?.length||this.selectAll());resolvedSelectAllLabel=v(()=>ne$1(this.selectAllLabel(),this.labelsAdapter));selectableOptions=v(()=>this.filteredOptions().filter(n=>!n.disabled&&!n.groupDisabled));allLoadedSelected=v(()=>{let n=this.selectableOptions();return n.length>0&&n.every(t=>this.isSelected(t.value))});selectAllChecked=v(()=>this.selectAll()||this.allLoadedSelected());someSelected=v(()=>this.selectableOptions().some(n=>this.isSelected(n.value)));usesSummary=v(()=>{let n=this.internalValue()?.length??0;return this.selectionDisplay()===`tags`&&this.selectedOptions().length>this.visibleTagCount()||!!(this.selectAll()&&this.allSelectedText())||n>this.summaryThreshold()||n>=2&&(this.summaryOverflow()?.truncated()??!1)});displayedSelection=v(()=>{if(this.selectAll()&&this.allSelectedText())return ne$1(this.allSelectedText(),this.labelsAdapter);if(!this.usesSummary())return this.selectedOptionLabel();let n=this.internalValue()?.length??0;return ne$1(this.selectedCountText(),this.labelsAdapter,{count:n}).replaceAll(`{count}`,String(n))});resolvedAllSelectedTooltip=v(()=>{let n=this.allSelectedTooltip();return n===!1?``:n===void 0?this.resolvedTooltipOnTruncate()?this.selectedOptionLabel():``:ne$1(n,this.labelsAdapter)});selectionTooltip=v(()=>this.isOpen()?``:this.selectAll()?this.resolvedAllSelectedTooltip():this.resolvedTooltipOnTruncate()?this.selectionDisplay()===`tags`||this.usesSummary()?this.selectedOptionLabel():this.truncatedSelectionTooltip():``);allSelectedTooltip=m(void 0);allSelectedText=m(void 0);selectedCountText=m(`{count} selected`);summaryThreshold=m(2,{transform:_n});showSelectAll=m(!0);selectAllLabel=m(`Select all`);selectionScope=m(void 0);selectAll=Tr$1(!1);selectionChange=vt$2();selectAllIntentChange=vt$2();scope;constructor(){super(),xe(()=>{let n=this.selectionScope()??this.searchTerm(),t=this.filteredOptions(),e=this.selectAll(),o=z$2(this.internalValue)??[];if(this.scope!==void 0&&n!==this.scope&&e)this.selectAll.set(!1),this.emitIntent(!1,`scope-change`,n);else if(e&&!this.disabled()&&!this.isReadonly()){let r=t.filter(u=>!u.disabled&&!u.groupDisabled&&!o.some(N=>this.compareWith()(N,u.value))).map(u=>u.value);if(r.length){let u=[...o,...r];this.updateValue(u),this.selectionChange.emit({value:u,source:`page`})}}this.scope=n})}clearSelection(){if(this.disabled()||this.isReadonly())return;let n=this.selectAll();this.selectAll.set(!1),this.clearSelectedValue([]),this.selectionChange.emit({value:[],source:`clear`}),n&&this.emitIntent(!1,`clear`)}isSelected(n){return(this.internalValue()??[]).some(t=>this.compareWith()(t,n))}toggleSelectAll(){if(this.disabled()||this.isReadonly())return;let n=!this.selectAllChecked(),t=this.selectableOptions(),e=this.internalValue()??[],o=n?[...e,...t.filter(r=>!this.isSelected(r.value)).map(r=>r.value)]:e.filter(r=>!t.some(u=>this.compareWith()(r,u.value)));this.selectAll.set(n),this.updateValue(o),this.selectionChange.emit({value:o,source:`select-all`}),this.emitIntent(n,`toggle`)}reset(){super.reset(),this.selectAll()&&(this.selectAll.set(!1),this.emitIntent(!1,`reset`))}selectOption(n){if(n.disabled||n.groupDisabled||this.disabled()||this.isReadonly())return;let t=this.isSelected(n.value),e=t?(this.internalValue()??[]).filter(o=>!this.compareWith()(o,n.value)):[...this.internalValue()??[],n.value];this.updateValue(e),this.selectionChange.emit({value:e,source:`user`}),t&&this.selectAll()&&(this.selectAll.set(!1),this.emitIntent(!1,`item-deselected`))}emitIntent(n,t,e=this.selectionScope()??this.searchTerm()){this.selectAllIntentChange.emit({selected:n,scope:e,values:this.internalValue()??[],reason:t})}static ɵfac=function(t){return new(t||i)};static ɵcmp=H({type:i,selectors:[[`bx-multi-select`]],viewQuery:function(t,e){t&1&&Mr$1(e.summaryOverflow,Vn,5),t&2&&Qt$2()},inputs:{allSelectedTooltip:[1,`allSelectedTooltip`],allSelectedText:[1,`allSelectedText`],selectedCountText:[1,`selectedCountText`],summaryThreshold:[1,`summaryThreshold`],showSelectAll:[1,`showSelectAll`],selectAllLabel:[1,`selectAllLabel`],selectionScope:[1,`selectionScope`],selectAll:[1,`selectAll`]},outputs:{selectAll:`selectAllChange`,selectionChange:`selectionChange`,selectAllIntentChange:`selectAllIntentChange`},features:[St$2],ngContentSelectors:jn,decls:22,vars:52,consts:[[`origin`,`cdkOverlayOrigin`],[`valueOverflow`,`bxTruncate`],[`summaryOverflow`,`bxTruncate`],[`labelOverflow`,`bxTruncate`],[`pagination`,`bxLoadMore`],[`searchInput`,``],[3,`control`,`inline`,`tooltip`,`showLoadingIndicator`,`hint`,`hintEnd`,`subscriptSizing`,`forId`],[1,`bx-select-control`],[`type`,`button`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`blur`,`bxTooltip`,`bxTooltipHover`,`bxTooltipTouch`,`id`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`,3,`bxTruncate`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`bx-selected-tags`],[`bxTruncate`,``,`aria-hidden`,`true`,1,`bx-select-measure`],[`aria-hidden`,`true`,1,`bx-select-caret`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayUsePopover`,`cdkConnectedOverlayWidth`],[3,`bxTruncate`],[`aria-hidden`,`true`,1,`bx-field-required`],[3,`text`,`config`,`focusable`,`tooltip`,`tooltipOnTruncate`],[3,`text`,`config`,`disabled`,`focusable`,`tooltipOnTruncate`],[1,`bx-overflow-tag`,3,`text`,`config`,`tooltip`,`focusable`,`tooltipOnTruncate`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-select-clear`,3,`click`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`data-bx-surface`,`solid`,`tabindex`,`-1`,1,`bx-select-panel`,3,`keydown`],[1,`bx-select-search-container`],[`type`,`button`,`role`,`checkbox`,1,`bx-select-all`,3,`disabled`],[`bxLoadMore`,``,1,`bx-select-menu-container`,3,`loadMore`,`loadMoreHasMore`,`loadMoreSuppressed`,`loadMoreLoading`,`loadMoreDisabled`,`loadMoreError`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`hidden`,`id`],[`role`,`status`,1,`bx-select-search-state`],[1,`bx-select-loading`],[3,`search`,`keydown.enter`,`value`,`placeholder`,`ariaLabel`],[`type`,`button`,`role`,`checkbox`,1,`bx-select-all`,3,`click`,`disabled`],[3,`checked`,`indeterminate`,`disabled`],[1,`bx-select-group`,3,`id`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-select-option`,3,`click`,`disabled`],[3,`checked`,`disabled`],[`size`,`16`,3,`name`],[`role`,`status`,1,`bx-select-empty`],[3,`size`,`label`]],template:function(t,e){if(t&1&&(Ne$3(qn),P$1(0,`bx-form-field`,6)(1,`div`,7)(2,`button`,8,0),be$1(`click`,function(){return e.toggleOpen()})(`keydown`,function(r){return e.onTriggerKey(r)})(`blur`,function(){return e.onTriggerBlur()}),P$1(4,`div`,9),ce(5,Xn,5,3,`span`,10),P$1(6,`span`,11,1),ce(8,Gn,1,2,`ng-container`,12)(9,Jn,3,1,`span`,13)(10,et,1,1),L$1(),P$1(11,`span`,14,2),Re(13),L$1()(),pe(14),P$1(15,`span`,15),ce(16,nt,1,2,`bx-loading-spinner`,16)(17,tt,1,0,`bx-icon`,17),L$1()(),ce(18,it,2,4,`button`,18),L$1(),ex(19,ft,11,18,`ng-template`,19),be$1(`overlayOutsideClick`,function(r){return e.onOutsideClick(r)})(`attach`,function(){return e.onPanelAttach()})(`detach`,function(){return e.onPanelDetach()})(`positionChange`,function(){return e.refreshPanel()}),pe(20,1,Hn),pe(21,2,$n),L$1()),t&2){let o,r=Pl(3);te$1(`control`,e.fieldControl)(`inline`,!0)(`tooltip`,e.tooltip())(`showLoadingIndicator`,!1)(`hint`,e.hint())(`hintEnd`,e.hintEnd())(`subscriptSizing`,e.resolvedSubscriptSizing())(`forId`,e.controlId()),S(),Z(`has-clear`,e.showClear()),S(),Z(`is-invalid`,e.showError())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-open`,e.isOpen())(`is-floating`,e.isFloating())(`is-readonly`,e.isReadonly())(`is-keyboard-focused`,e.keyboardFocused()),te$1(`bxTooltip`,e.selectionTooltip())(`bxTooltipHover`,e.selectionDisplay()!==`tags`||e.selectAll()&&!!e.allSelectedText())(`bxTooltipTouch`,e.selectionDisplay()===`tags`&&!(e.selectAll()&&e.allSelectedText())?`none`:`longpress`)(`id`,e.controlId())(`disabled`,e.disabled()),j$1(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel()||e.resolvedLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-required`,e.required())(`aria-readonly`,e.isReadonly())(`aria-busy`,e.loading()||e.pending()||e.isSearching())(`aria-expanded`,e.isOpen())(`aria-controls`,e.isPanelAttached()?e.controlId()+`-options`:null),S(3),ue(e.label()?5:-1),S(),Z(`is-placeholder`,!e.selectedOptionLabel()),te$1(`bxTruncate`,!(e.selectionDisplay()===`tags`&&e.selectedOptions().length)&&!e.triggerTemplate()),S(2),ue((o=e.triggerTemplate())?8:e.selectionDisplay()===`tags`&&e.selectedOptions().length?9:10,o),S(5),je(e.selectedOptionLabel()),S(3),ue(e.loading()||e.pending()||e.isSearching()?16:17),S(2),ue(e.showClear()?18:-1),S(),te$1(`cdkConnectedOverlayOrigin`,r)(`cdkConnectedOverlayOpen`,e.isPanelAttached())(`cdkConnectedOverlayPositions`,e.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayScrollStrategy`,e.panelScrollStrategy)(`cdkConnectedOverlayUsePopover`,e.overlayPopoverLocation(r.elementRef.nativeElement))(`cdkConnectedOverlayWidth`,r.elementRef.nativeElement.offsetWidth)}},dependencies:[Rt$3,AF,kF,yy,Gf,qf,We,bt$2,hT,ut$1,Gl,K0,Gr$1,$r$1,qr$1,z0],styles:[`
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  inline-size: 1rem;
  block-size: 1rem;
  margin-inline-start: 0.5rem;
  color: var(--%NS%bx-text-secondary);
  transition: transform 0.2s ease;
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
  background: var(--%NS%bx-glass-surface, var(--%NS%bx-bg-surface)) !important;
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
}`]})};var Mn=class i extends Kf{focus(n){this.hostElement.focus(n)}onReadonlyInteraction(n){!this.isReadonly()||this.hostElement.tagName!==`SELECT`||`key`in n&&n.key===`Tab`||n.preventDefault()}static ɵfac=(()=>{let n;return function(e){return(n||(n=ar$1(i)))(e||i)}})();static ɵdir=U$2({type:i,selectors:[[`input`,`bxInput`,``],[`textarea`,`bxInput`,``],[`select`,`bxInput`,``]],hostAttrs:[1,`bx-native-control`],hostVars:12,hostBindings:function(t,e){t&1&&be$1(`blur`,function(){return e.markAsTouched()})(`pointerdown`,function(r){return e.onReadonlyInteraction(r)})(`click`,function(r){return e.onReadonlyInteraction(r)})(`keydown`,function(r){return e.onReadonlyInteraction(r)}),t&2&&(Bi$1(`id`,e.controlId())(`disabled`,e.effectiveDisabled())(`required`,e.effectiveRequired()),j$1(`readonly`,e.isReadonly()?``:null)(`aria-readonly`,e.isReadonly())(`placeholder`,e.resolvedPlaceholder())(`name`,e.name()||null)(`aria-invalid`,e.showError())(`aria-required`,e.effectiveRequired())(`aria-describedby`,e.describedBy())(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy()))},exportAs:[`bxInput`],features:[ln$1([{provide:Hy,useExisting:jt$3(()=>i)}]),St$2]})};var ht$1=[[[`bx-error`]],[[`bx-hint`]]];var vt=[`bx-error`,`bx-hint`];var yt=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var _t=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];function Ct(i,n){if(i&1&&Oe$1(0,`span`),i&2){let t=n.$implicit;Pe(`inset-inline-start`,t,`%`)}}function St(i,n){if(i&1&&(P$1(0,`output`,8),Re(1),L$1()),i&2){let t=ae$2();S(),vx(``,t.displayWith()(t.start()),` – `,t.displayWith()(t.end()))}}var On=class i extends Yf{labelsAdapter=p(Se$2,{optional:!0});start=v(()=>Math.max(this.min(),Math.min(this.max(),this.value()?.[0]??this.min())));end=v(()=>Math.max(this.start(),Math.min(this.max(),this.value()?.[1]??this.max())));startPercent=v(()=>this.max()>this.min()?(this.start()-this.min())/(this.max()-this.min())*100:0);endPercent=v(()=>this.max()>this.min()?(this.end()-this.min())/(this.max()-this.min())*100:100);resolvedStartLabel=v(()=>ne$1(this.startLabel(),this.labelsAdapter));resolvedEndLabel=v(()=>ne$1(this.endLabel(),this.labelsAdapter));ticks=v(()=>{let n=this.max()-this.min(),t=this.step();if(!this.showTickMarks()||!Number.isFinite(n)||!Number.isFinite(t)||n<=0||t<=0)return[];let e=Math.floor(n/t),o=Math.min(1e3,e);return o>0?Array.from({length:o+1},(r,u)=>Math.round(u*e/o)*t/n*100):[]});min=m(0);max=m(100);step=m(1);discrete=m(!1);showTickMarks=m(!1);displayWith=m(String);startLabel=m(`Minimum value`);endLabel=m(`Maximum value`);onRangeInput(n,t){if(this.disabled()||this.isReadonly())return;let e=n.target,o=e.valueAsNumber,r=t===`start`?[Math.min(this.end(),o),this.end()]:[this.start(),Math.max(this.start(),o)];e.value=String(t===`start`?r[0]:r[1]),this.updateValue(r)}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let n;return function(e){return(n||(n=ar$1(i)))(e||i)}})();static ɵcmp=H({type:i,selectors:[[`bx-range-slider`]],inputs:{min:[1,`min`],max:[1,`max`],step:[1,`step`],discrete:[1,`discrete`],showTickMarks:[1,`showTickMarks`],displayWith:[1,`displayWith`],startLabel:[1,`startLabel`],endLabel:[1,`endLabel`]},features:[St$2],ngContentSelectors:vt,decls:13,vars:33,consts:[[3,`control`,`label`,`hint`,`hintEnd`,`tooltip`,`forId`],[`role`,`group`,1,`bx-range-slider`],[`aria-hidden`,`true`,1,`bx-range-track`],[1,`bx-range-input`],[`bxSlider`,``,`type`,`range`,3,`input`,`blur`,`id`,`min`,`max`,`step`,`value`,`disabled`],[`bxSlider`,``,`type`,`range`,3,`input`,`blur`,`min`,`max`,`step`,`value`,`disabled`],[`aria-hidden`,`true`,1,`bx-range-ticks`],[3,`inset-inline-start`],[1,`bx-range-values`]],template:function(t,e){t&1&&(Ne$3(ht$1),P$1(0,`bx-form-field`,0)(1,`div`,1),Oe$1(2,`div`,2),P$1(3,`div`,3)(4,`input`,4),be$1(`input`,function(r){return e.onRangeInput(r,`start`)})(`blur`,function(){return e.onBlur()}),L$1()(),P$1(5,`div`,3)(6,`input`,5),be$1(`input`,function(r){return e.onRangeInput(r,`end`)})(`blur`,function(){return e.onBlur()}),L$1()(),P$1(7,`div`,6),xr$1(8,Ct,1,2,`span`,7,Ks),L$1()(),ce(10,St,2,2,`output`,8),pe(11,0,yt),pe(12,1,_t),L$1()),t&2&&(te$1(`control`,e.fieldControl)(`label`,e.label())(`hint`,e.hint())(`hintEnd`,e.hintEnd())(`tooltip`,e.tooltip())(`forId`,e.controlId()),S(),Pe(`--%NS%bx-range-start`,e.startPercent()/100)(`--%NS%bx-range-end`,e.endPercent()/100),Z(`is-readonly`,e.isReadonly()&&!e.disabled()),j$1(`aria-label`,e.ariaLabel()||e.resolvedLabel()),S(3),te$1(`id`,e.controlId())(`min`,e.min())(`max`,e.max())(`step`,e.step())(`value`,e.start())(`disabled`,e.disabled()||e.isReadonly()),j$1(`aria-valuemax`,e.end())(`aria-label`,e.resolvedStartLabel())(`aria-valuetext`,e.displayWith()(e.start()))(`aria-describedby`,e.describedBy()),S(2),te$1(`min`,e.min())(`max`,e.max())(`step`,e.step())(`value`,e.end())(`disabled`,e.disabled()||e.isReadonly()),j$1(`aria-valuemin`,e.start())(`aria-label`,e.resolvedEndLabel())(`aria-valuetext`,e.displayWith()(e.end()))(`aria-describedby`,e.describedBy()),S(2),Sr$1(e.ticks()),S(2),ue(e.discrete()?10:-1))},dependencies:[Gf,ye],styles:[`
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
}`]})};var Mt=[`panelTemplate`];var Ot=[`anchor`];var Nt=[`nativeInput`];var Pt=[[[`bx-error`]],[[`bx-hint`]]];var kt=[`bx-error`,`bx-hint`];var Tt=[`ngProjectAs`,`bx-error`,5,[`bx-error`]];var wt=[`ngProjectAs`,`bx-hint`,5,[`bx-hint`]];var Dt=(i,n,t,e)=>({$implicit:i,label:n,active:t,index:e});var Et=(i,n)=>n.value;function It(i,n){i&1&&(P$1(0,`span`,16),Re(1,`*`),L$1())}function Lt(i,n){if(i&1&&(P$1(0,`label`,7)(1,`span`,15),Re(2),L$1(),ce(3,It,2,0,`span`,16),L$1()),i&2){let t=ae$2();j$1(`for`,t.controlId()),S(2),je(t.resolvedLabel()),S(),ue(t.effectiveRequired()&&!t.resolvedHideRequiredMarker()?3:-1)}}function Rt(i,n){if(i&1&&(P$1(0,`span`,17)(1,`span`,18),Re(2),L$1(),P$1(3,`span`),Re(4),L$1()()),i&2){let t=ae$2();Pe(`transform`,`translateX(`+-t.inputScroll()+`px)`),S(2),je(t.internalValue()),S(2),je(t.completionSuffix())}}function At(i,n){if(i&1){let t=Er$1();P$1(0,`button`,19),be$1(`click`,function(){$n$2(t);let o=ae$2();return qn$2(o.clear())})(`keydown`,function(o){$n$2(t);let r=ae$2();return qn$2(r.onClearKey(o))})(`blur`,function(o){$n$2(t);let r=ae$2();return qn$2(r.onBlur(o))}),Oe$1(1,`bx-icon`,20),L$1()}if(i&2){let t=ae$2();te$1(`surfaceEffects`,!1)(`disabled`,t.effectiveDisabled())(`bxTooltip`,t.resolvedClearTooltip()),j$1(`aria-label`,t.resolvedClearLabel())}}function zt(i,n){i&1&&Oe$1(0,`bx-loading-spinner`,13),i&2&&te$1(`size`,16)(`decorative`,!0)}function Ft(i,n){i&1&&Oe$1(0,`bx-icon`,14)}function Bt(i,n){if(i&1&&Ys(0,28),i&2){let t=ae$2(),e=t.$implicit,o=t.$index,r=ae$2(3);te$1(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,hO(2,Dt,e,e.labelText,r.activeIndex()===o,o))}}function Vt(i,n){if(i&1&&Re(0),i&2){let t=ae$2().$implicit;lr$1(` `,t.labelText,` `)}}function qt(i,n){if(i&1){let t=Er$1();P$1(0,`button`,27),be$1(`mousedown`,function(o){return o.preventDefault()})(`click`,function(){let o=$n$2(t).$implicit,r=ae$2(3);return qn$2(r.selectOption(o))}),ce(1,Bt,1,7,`ng-container`,28)(2,Vt,1,1),L$1()}if(i&2){let t,e=n.$implicit,o=n.$index,r=ae$2(3);Z(`is-active`,r.activeIndex()===o),te$1(`id`,r.controlId()+`-option-`+o)(`disabled`,e.disabled??!1),j$1(`aria-selected`,r.activeIndex()===o),S(),ue((t=r.optionTemplate())?1:2,t)}}function jt(i,n){if(i&1&&xr$1(0,qt,3,6,`button`,26,Et),i&2){let t=ae$2(2);Sr$1(t.filteredOptions())}}function Ht(i,n){if(i&1&&(P$1(0,`div`,24),Oe$1(1,`bx-loading-indicator`,29),L$1()),i&2){let t=ae$2(2);S(),te$1(`size`,16)(`label`,t.loadingText())}}function $t(i,n){if(i&1&&(P$1(0,`div`,25),Re(1),L$1()),i&2){let t=ae$2(2);S(),je(t.resolvedEmptyText())}}function Wt(i,n){if(i&1){let t=Er$1();P$1(0,`div`,21)(1,`div`,22,3),be$1(`focusout`,function(o){$n$2(t);let r=ae$2();return qn$2(r.onBlur(o))})(`loadMore`,function(o){$n$2(t);let r=ae$2();return qn$2(r.requestMore(o))}),P$1(3,`div`,23),ce(4,jt,2,0),L$1(),ce(5,Ht,2,2,`div`,24)(6,$t,2,1,`div`,25),L$1()()}if(i&2){let t=Pl(2),e=ae$2();S(),te$1(`loadMoreHasMore`,e.hasMore())(`loadMoreLoading`,e.loading())(`loadMoreError`,e.loadError())(`loadMoreSuppressed`,e.searching())(`loadMoreDisabled`,e.effectiveDisabled()||e.isReadonly())(`loadMoreConfig`,e.loadMoreConfig())(`loadMoreTemplate`,e.loadMoreTemplate())(`loadMoreRevision`,e.loadMoreRevision()??e.options()),S(2),te$1(`id`,e.controlId()+`-listbox`),j$1(`aria-label`,e.ariaLabel()||e.resolvedLabel()||e.resolvedPlaceholder())(`aria-busy`,e.searching()||e.loading()),S(),ue(e.searching()?-1:4),S(),ue(e.searching()||e.loading()&&!t.actionVisible()?5:!e.loading()&&!e.loadError()&&!e.filteredOptions().length?6:-1)}}var Nn=class i extends Yf{i18n=p(Se$2,{optional:!0});overlay=p(Dn$2);positions=p(Jn$3);vcr=p(Nt$2);zone=p(K);browser=Et$3(p(lt$2));context=p(zr$1,{optional:!0});destroy=p(J$1);panelTemplate=Zs.required(`panelTemplate`);anchor=Zs.required(`anchor`);nativeInput=Zs.required(`nativeInput`);pagination=Zs(ut$1);labelText=Zs(qr$1);opened=x(!1);inputFocused=x(!1);composing=x(!1);caretAtEnd=x(!1);activeIndex=x(-1);autofilled=x(!1);labelTruncated=v(()=>this.labelText()?.truncated()??!1);isBusy=v(()=>this.searching()||this.loading()||this.pending());showClear=v(()=>this.clearable()&&!!this.internalValue()&&!this.isReadonly());resolvedClearLabel=v(()=>ne$1(this.clearLabel(),this.i18n));resolvedClearTooltip=v(()=>ne$1(this.clearTooltip()??this.clearLabel(),this.i18n));isFloating=v(()=>this.resolvedFloatLabel()===`always`||this.inputFocused()||this.isOpen()||this.autofilled()||!!this.internalValue());inputScroll=x(0);resolvedEmptyText=v(()=>ne$1(this.emptyText(),this.i18n));resolvedOptions=v(()=>this.options().map(n=>s(r({},n),{labelText:ne$1(n.label??n.value,this.i18n)})));filteredOptions=v(()=>{let n=(this.internalValue()??``).toLocaleLowerCase();return this.externalFiltering()||!n?this.resolvedOptions():this.resolvedOptions().filter(t=>t.labelText.toLocaleLowerCase().includes(n)||t.value.toLocaleLowerCase().includes(n))});activeId=v(()=>this.isOpen()&&!this.searching()&&this.filteredOptions()[this.activeIndex()]&&!this.filteredOptions()[this.activeIndex()].disabled?this.controlId()+`-option-`+this.activeIndex():null);completionOption=v(()=>{let n=this.internalValue()??``;if(!this.inlineCompletion()||!this.isOpen()||!this.inputFocused()||!this.caretAtEnd()||this.composing()||this.searching()||this.effectiveDisabled()||this.isReadonly()||!n)return;let t=this.filteredOptions(),e=this.activeIndex()>=0?t[this.activeIndex()]:t.find(o=>!o.disabled&&o.value.length>n.length&&o.value.toLocaleLowerCase().startsWith(n.toLocaleLowerCase()));return e&&!e.disabled&&e.value.length>n.length&&e.value.toLocaleLowerCase().startsWith(n.toLocaleLowerCase())?e:void 0});completionSuffix=v(()=>this.completionOption()?.value.slice((this.internalValue()??``).length)??``);options=m([]);inlineCompletion=m(!0);clearable=m(!0);clearLabel=m(`Clear selection`);clearTooltip=m(void 0);externalFiltering=m(!1);searching=m(!1);hasMore=m(!1);loadError=m(void 0);loadMoreConfig=m({});loadMoreTemplate=m(void 0);loadMoreRevision=m(void 0);optionTemplate=m(void 0);emptyText=m(`No suggestions. You can enter your own value.`);loadingText=m(`Loading suggestions`);autocomplete=m(`off`);isOpen=this.opened.asReadonly();queryChange=vt$2();optionSelected=vt$2();loadMore=vt$2();openedChange=vt$2();overlayRef;subscriptions=new we$2;disconnectTheme;disconnectLighting;constructor(){super(),this.destroy.onDestroy(()=>this.dispose()),xe(()=>{(this.effectiveDisabled()||this.isReadonly())&&this.isOpen()&&this.close()}),xe(()=>{this.options(),this.searching(),z$2(()=>this.activeIndex.set(-1))})}open(){if(!this.browser||this.isOpen()||this.effectiveDisabled()||this.isReadonly())return;let n=this.anchor().nativeElement,t=this.overlay.create({width:n.getBoundingClientRect().width,maxWidth:`calc(100vw - 16px)`,positionStrategy:this.positions.getElementStrategy(n,`bottom`,4),scrollStrategy:this.overlay.scrollStrategies.noop(),usePopover:!!this.context?.useTopLayer||!!n.closest(`dialog, [role="dialog"], [role="alertdialog"], bx-modal, bx-modal-core, [popover]`)});this.overlayRef=t,this.opened.set(!0),this.disconnectTheme=this.zone.runOutsideAngular(()=>Ur$1(n,t.overlayElement)),this.disconnectLighting=vi$1(t.overlayElement,n),this.subscriptions.add(this.zone.runOutsideAngular(()=>rs(t,n,{onOriginHidden:()=>this.zone.run(()=>this.close()),onPosition:()=>{let o=n.getBoundingClientRect().width;t.getConfig().width!==o&&t.updateSize({width:o})}}))),this.subscriptions.add(t.outsidePointerEvents().subscribe(o=>{n.contains(o.target)||this.close()})),this.subscriptions.add(t.keydownEvents().subscribe(o=>this.onPanelKey(o))),t.attach(new Pn$1(this.panelTemplate(),this.vcr)).detectChanges(),t.updatePosition(),this.openedChange.emit(!0)}close(){if(!this.isOpen())return;let n=this.overlayRef?.overlayElement;n?.contains(n.ownerDocument.activeElement)&&this.focus({preventScroll:!0}),this.dispose(),this.openedChange.emit(!1)}completeLoadMore(){this.pagination()?.complete()}clear(){this.effectiveDisabled()||this.isReadonly()||(this.composing.set(!1),this.updateValue(``),this.activeIndex.set(-1),this.markAsTouched(),this.focus({preventScroll:!0}),this.queryChange.emit(``))}onInput(n){if(this.composing()||this.effectiveDisabled()||this.isReadonly())return;let t=n.target.value;this.updateValue(t),this.activeIndex.set(-1),this.updateCompletionPosition(),this.open(),this.queryChange.emit(t)}onCompositionStart(){this.composing.set(!0)}onCompositionEnd(n){this.composing.set(!1),this.onInput(n)}onFocus(){this.inputFocused.set(!0),this.updateCompletionPosition(),this.open()}updateCompletionPosition(){let n=this.nativeInput().nativeElement;this.caretAtEnd.set(n.selectionStart===n.value.length&&n.selectionEnd===n.value.length),this.inputScroll.set(n.scrollLeft)}onBlur(n){n.target===this.nativeInput().nativeElement&&this.inputFocused.set(!1);let t=n.relatedTarget;t&&(this.hostElement.contains(t)||this.overlayRef?.overlayElement.contains(t))||queueMicrotask(()=>{if(this.destroy.destroyed)return;let e=this.hostElement.ownerDocument.activeElement;this.hostElement.contains(e)||this.overlayRef?.overlayElement.contains(e)||(this.close(),this.markAsTouched())})}onInputKey(n){if(this.composing()||n.isComposing||this.effectiveDisabled()||this.isReadonly())return;this.updateCompletionPosition();let t=this.completionOption(),o=this.nativeInput().nativeElement.ownerDocument.defaultView?.getComputedStyle(this.nativeInput().nativeElement).direction===`rtl`?`ArrowLeft`:`ArrowRight`;if(t&&!n.altKey&&!n.ctrlKey&&!n.metaKey&&!n.shiftKey&&(n.key===o||n.key===`End`||n.key===`Enter`&&!this.activeId()))n.preventDefault(),this.selectOption(t);else if(n.key===`Escape`&&this.isOpen())n.preventDefault(),n.stopPropagation(),this.close();else if(n.key===`ArrowDown`||n.key===`ArrowUp`){if(n.preventDefault(),this.open(),this.searching())return;let u=this.filteredOptions().map((A,Q)=>A.disabled?-1:Q).filter(A=>A>=0),N=u.indexOf(this.activeIndex()),R=n.key===`ArrowDown`?(N+1)%u.length:N<0?u.length-1:(N-1+u.length)%u.length;this.activeIndex.set(u[R]??-1),this.overlayRef?.overlayElement.querySelector(`#`+this.activeId())?.scrollIntoView({block:`nearest`})}else if(n.key===`Enter`&&this.isOpen()&&this.activeId())n.preventDefault(),this.selectOption(this.filteredOptions()[this.activeIndex()]);else if(n.key===`Tab`&&this.isOpen()){if(!n.shiftKey&&this.showClear())return;this.tabToPanel(n)}}onClearKey(n){n.key===`Tab`&&!n.shiftKey&&this.isOpen()&&this.tabToPanel(n)}selectOption(n){n.disabled||this.searching()||this.effectiveDisabled()||this.isReadonly()||(this.updateValue(n.value),this.optionSelected.emit(n),this.close(),this.focus({preventScroll:!0}))}requestMore(n){let t=this.overlayRef?.overlayElement;t?.contains(t.ownerDocument.activeElement)&&this.focus({preventScroll:!0}),this.loadMore.emit(n)}onPanelKey(n){let t=n.target;n.defaultPrevented||!t||!this.overlayRef?.overlayElement.contains(t)||(n.key===`Escape`?(n.preventDefault(),n.stopPropagation(),this.close()):n.key===`Tab`&&(n.shiftKey?(n.preventDefault(),this.focus({preventScroll:!0})):this.close()))}panelAction(){return Array.from(this.overlayRef?.overlayElement.querySelectorAll(`button:not(:disabled)`)??[]).find(n=>n.tabIndex>=0&&n.getClientRects().length>0)}tabToPanel(n){let t=this.panelAction();!n.shiftKey&&t?(n.preventDefault(),t.focus()):this.close()}dispose(){this.opened.set(!1),this.activeIndex.set(-1),this.subscriptions.unsubscribe(),this.subscriptions=new we$2,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.disconnectLighting?.(),this.disconnectLighting=void 0,this.overlayRef?.dispose(),this.overlayRef=void 0}static ɵfac=function(t){return new(t||i)};static ɵcmp=H({type:i,selectors:[[`bx-autocomplete`]],viewQuery:function(t,e){t&1&&Mr$1(e.panelTemplate,Mt,5)(e.anchor,Ot,5)(e.nativeInput,Nt,5)(e.pagination,ut$1,5)(e.labelText,qr$1,5),t&2&&Qt$2(5)},inputs:{options:[1,`options`],inlineCompletion:[1,`inlineCompletion`],clearable:[1,`clearable`],clearLabel:[1,`clearLabel`],clearTooltip:[1,`clearTooltip`],externalFiltering:[1,`externalFiltering`],searching:[1,`searching`],hasMore:[1,`hasMore`],loadError:[1,`loadError`],loadMoreConfig:[1,`loadMoreConfig`],loadMoreTemplate:[1,`loadMoreTemplate`],loadMoreRevision:[1,`loadMoreRevision`],optionTemplate:[1,`optionTemplate`],emptyText:[1,`emptyText`],loadingText:[1,`loadingText`],autocomplete:[1,`autocomplete`]},outputs:{queryChange:`queryChange`,optionSelected:`optionSelected`,loadMore:`loadMore`,openedChange:`openedChange`},features:[St$2],ngContentSelectors:kt,decls:18,vars:52,consts:[[`anchor`,``],[`nativeInput`,``],[`panelTemplate`,``],[`pagination`,`bxLoadMore`],[3,`control`,`inline`,`tooltip`,`hint`,`hintEnd`,`hideRequiredMarker`,`subscriptSizing`,`forId`,`showLoadingIndicator`],[`bxSurface`,``,1,`bx-input-wrapper`,`bx-autocomplete-control`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`bx-input-container`,`bx-autocomplete-text`,3,`bxTooltip`],[1,`bx-floating-label`],[`aria-hidden`,`true`,1,`bx-native-input`,`bx-autocomplete-completion`,3,`transform`],[`type`,`text`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkAutofill`,``,1,`bx-native-input`,3,`input`,`focus`,`click`,`blur`,`select`,`scroll`,`keyup`,`cdkAutofill`,`keydown`,`compositionstart`,`compositionend`,`id`,`placeholder`,`value`,`disabled`,`readOnly`,`required`],[1,`bx-input-actions`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-autocomplete-clear`,3,`surfaceEffects`,`disabled`,`bxTooltip`],[`aria-hidden`,`true`,1,`bx-autocomplete-caret`],[3,`size`,`decorative`],[`name`,`chevron-down`,`size`,`16`],[`bxTruncate`,``,1,`bx-input-label-text`],[`aria-hidden`,`true`,1,`bx-field-required`],[`aria-hidden`,`true`,1,`bx-native-input`,`bx-autocomplete-completion`],[1,`bx-autocomplete-prefix`],[`bx-button`,``,`type`,`button`,`variant`,`text`,1,`bx-autocomplete-clear`,3,`click`,`keydown`,`blur`,`surfaceEffects`,`disabled`,`bxTooltip`],[`name`,`x`,`size`,`16`],[`data-bx-surface`,`solid`,1,`bx-autocomplete-panel`],[`bxLoadMore`,``,`tabindex`,`-1`,1,`bx-autocomplete-scroll`,3,`focusout`,`loadMore`,`loadMoreHasMore`,`loadMoreLoading`,`loadMoreError`,`loadMoreSuppressed`,`loadMoreDisabled`,`loadMoreConfig`,`loadMoreTemplate`,`loadMoreRevision`],[`role`,`listbox`,3,`id`],[1,`bx-autocomplete-feedback`],[`role`,`status`,1,`bx-autocomplete-feedback`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-autocomplete-option`,3,`id`,`is-active`,`disabled`],[`type`,`button`,`role`,`option`,`tabindex`,`-1`,1,`bx-autocomplete-option`,3,`mousedown`,`click`,`id`,`disabled`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`size`,`label`]],template:function(t,e){if(t&1){let o=Er$1();Ne$3(Pt),P$1(0,`bx-form-field`,4)(1,`div`,5,0)(3,`div`,6),Fl(4,`bxTruncatedText`),ce(5,Lt,4,3,`label`,7),ce(6,Rt,5,4,`span`,8),P$1(7,`input`,9,1),be$1(`input`,function(u){return e.onInput(u)})(`focus`,function(){return e.onFocus()})(`click`,function(){return $n$2(o),e.open(),qn$2(e.updateCompletionPosition())})(`blur`,function(u){return e.onBlur(u)})(`select`,function(){return e.updateCompletionPosition()})(`scroll`,function(){return e.updateCompletionPosition()})(`keyup`,function(){return e.updateCompletionPosition()})(`cdkAutofill`,function(u){return e.autofilled.set(u.isAutofilled)})(`keydown`,function(u){return e.onInputKey(u)})(`compositionstart`,function(){return e.onCompositionStart()})(`compositionend`,function(u){return e.onCompositionEnd(u)}),L$1()(),P$1(9,`div`,10),ce(10,At,2,4,`button`,11),P$1(11,`span`,12),ce(12,zt,1,2,`bx-loading-spinner`,13)(13,Ft,1,0,`bx-icon`,14),L$1()()(),pe(14,0,Tt),pe(15,1,wt),L$1(),ex(16,Wt,7,13,`ng-template`,null,2,uv)}t&2&&(te$1(`control`,e.fieldControl)(`inline`,!0)(`tooltip`,e.tooltip())(`hint`,e.hint())(`hintEnd`,e.hintEnd())(`hideRequiredMarker`,e.resolvedHideRequiredMarker())(`subscriptSizing`,e.resolvedSubscriptSizing())(`forId`,e.controlId())(`showLoadingIndicator`,!1),S(),Z(`is-invalid`,e.showError())(`is-disabled`,e.effectiveDisabled())(`is-readonly`,e.isReadonly())(`is-outline`,e.resolvedAppearance()===`outline`)(`is-floating`,e.isFloating())(`is-keyboard-focused`,e.keyboardFocused())(`is-open`,e.isOpen())(`has-clear`,e.showClear()),S(2),te$1(`bxTooltip`,Vl(4,48,e.resolvedLabel(),e.labelTruncated(),e.resolvedTooltipOnTruncate())),S(2),ue(e.label()?5:-1),S(),ue(e.completionSuffix()?6:-1),S(),te$1(`id`,e.controlId())(`placeholder`,e.isFloating()||!e.label()?e.resolvedPlaceholder():``)(`value`,e.internalValue()??``)(`disabled`,e.effectiveDisabled())(`readOnly`,e.isReadonly())(`required`,e.effectiveRequired()),j$1(`aria-autocomplete`,e.inlineCompletion()?`both`:`list`)(`name`,e.name()||null)(`autocomplete`,e.autocomplete())(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel())(`aria-labelledby`,e.ariaLabelledBy())(`aria-describedby`,e.describedBy())(`aria-invalid`,e.showError())(`aria-expanded`,e.isOpen())(`aria-controls`,e.isOpen()?e.controlId()+`-listbox`:null)(`aria-activedescendant`,e.activeId())(`aria-busy`,e.isBusy()),S(3),ue(e.showClear()?10:-1),S(2),ue(e.isBusy()?12:13))},dependencies:[Gf,Rt$3,bt$2,K0,Gr$1,qf,ut$1,Gl,ei,$r$1,qr$1,Ta],styles:[`
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
}
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  inline-size: 100%;
}
.bx-autocomplete-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  position: relative;
  letter-spacing: inherit;
}
.bx-autocomplete-control[_ngcontent-%COMP%]   .bx-native-input[_ngcontent-%COMP%] {
  padding-inline-end: 0;
}
.bx-autocomplete-control.has-clear[_ngcontent-%COMP%]   .bx-native-input[_ngcontent-%COMP%] {
  padding-inline-end: 0.5rem;
}
.bx-autocomplete-control[_ngcontent-%COMP%]   .bx-input-actions[_ngcontent-%COMP%] {
  padding-inline-end: 0.75rem;
}
.bx-autocomplete-caret[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  inline-size: 1rem;
  block-size: 1rem;
  margin-inline-start: 0.5rem;
  color: var(--%NS%bx-text-secondary);
  flex: 0 0 auto;
}
.bx-autocomplete-caret[_ngcontent-%COMP%]   bx-icon[_ngcontent-%COMP%] {
  transition-property: transform;
  transition-duration: calc(0.2s * (1 - var(--%NS%bx-reduced-motion, 0)));
  transition-timing-function: ease;
}
.is-open[_ngcontent-%COMP%]   .bx-autocomplete-caret[_ngcontent-%COMP%]   bx-icon[_ngcontent-%COMP%] {
  transform: rotate(180deg);
}
.bx-autocomplete-clear.bx-btn[_ngcontent-%COMP%] {
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
.bx-autocomplete-clear.bx-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 0;
}
.bx-autocomplete-clear.bx-btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  color: var(--%NS%bx-text-primary);
  background: var(--%NS%bx-bg-element-hover);
}
.bx-autocomplete-clear.bx-btn[_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.bx-autocomplete-text[_ngcontent-%COMP%] {
  position: relative;
  flex: 1 1 0;
  min-inline-size: 0;
  overflow: hidden;
}
.bx-autocomplete-completion[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  color: var(--%NS%bx-autocomplete-completion-color, var(--%NS%bx-text-secondary));
  letter-spacing: inherit;
  white-space: pre;
  pointer-events: none;
}
.bx-autocomplete-prefix[_ngcontent-%COMP%] {
  visibility: hidden;
}
.bx-autocomplete-panel[_ngcontent-%COMP%] {
  --%NS%bx-glass-surface: var(--%NS%bx-autocomplete-background, var(--%NS%bx-bg-surface));
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
  --%NS%bx-glass-edge: var(--%NS%bx-border-default);
  --%NS%bx-glass-radius: var(--%NS%bx-autocomplete-radius, var(--%NS%bx-rounded-lg, 0.75rem));
  --%NS%bx-glass-shadow: 0 12px 20px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
  inline-size: 100%;
  min-inline-size: 0;
  border: 1px solid var(--%NS%bx-glass-edge);
  border-radius: var(--%NS%bx-glass-radius);
  background: var(--%NS%bx-glass-surface);
  color: var(--%NS%bx-glass-text);
  box-shadow: var(--%NS%bx-glass-shadow);
  overflow: hidden;
}
.bx-autocomplete-panel[data-bx-surface][_ngcontent-%COMP%] {
  background: var(--%NS%bx-glass-surface, var(--%NS%bx-bg-surface)) !important;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
}
.bx-autocomplete-scroll[_ngcontent-%COMP%] {
  --%NS%bx-load-more-padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  max-block-size: min(var(--%NS%bx-autocomplete-panel-height, 18rem), 50dvh);
  padding: var(--%NS%bx-autocomplete-panel-padding, 0.25rem);
  overflow: auto;
  overscroll-behavior: contain;
}
.bx-autocomplete-option[_ngcontent-%COMP%] {
  display: block;
  box-sizing: border-box;
  inline-size: 100%;
  min-block-size: 2.5rem;
  padding: 0.5rem 0.75rem;
  border: 0;
  border-radius: 0.25rem;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: start;
  overflow-wrap: anywhere;
  cursor: pointer;
}
.bx-autocomplete-option[_ngcontent-%COMP%]:hover:not(:disabled), 
.bx-autocomplete-option.is-active[_ngcontent-%COMP%] {
  background: var(--%NS%bx-bg-element-hover);
  outline: 1px solid var(--%NS%bx-border-strong);
  outline-offset: -1px;
}
.bx-autocomplete-option[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.bx-autocomplete-feedback[_ngcontent-%COMP%] {
  min-block-size: 2.5rem;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  overflow-wrap: anywhere;
}
@media (forced-colors: active) {
  .bx-autocomplete-control[_ngcontent-%COMP%]:focus-within, 
   .bx-autocomplete-option.is-active[_ngcontent-%COMP%] {
    outline: 2px solid Highlight;
  }
  .bx-autocomplete-option[_ngcontent-%COMP%]:disabled {
    color: GrayText;
    opacity: 1;
  }
}`]})};var I=new E$1(`HIGHLIGHT_OPTIONS`);function rt(e){return gr$1([{provide:I,useValue:e}])}var h=(function(e){return e.FULL_WITH_CORE_LIBRARY_IMPORTS=`The full library and the core library were imported, only one of them should be imported!`,e.FULL_WITH_LANGUAGE_IMPORTS=`The highlighting languages were imported they are not needed!`,e.CORE_WITHOUT_LANGUAGE_IMPORTS=`The highlighting languages were not imported!`,e.LANGUAGE_WITHOUT_CORE_IMPORTS=`The core library was not imported!`,e.NO_FULL_AND_NO_CORE_IMPORTS=`Highlight.js library was not imported!`,e})(h||{});var V=(()=>{class e{constructor(){this.document=p(ie$1),this.isPlatformBrowser=Et$3(p(lt$2)),this.options=p(I,{optional:!0}),this._ready=new kt$3(null),this.ready=OT(this._ready.asObservable().pipe(Bt$3(t=>!!t))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(dn$1(t=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=t,this.loadLineNumbers().pipe(Mn$2(i=>{i.activateLineNumbers(),this._ready.next(t)}))):(this._ready.next(t),Wt$3)),uo$1(t=>(console.error(`[HLJS] `,t),this._ready.error(t),Wt$3))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return fh(()=>h.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return fh(()=>h.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return fh(()=>h.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return fh(()=>h.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(dn$1(t=>this._loadLanguages(t)))}return fh(()=>h.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(t){let i=Object.entries(this.options.languages).map(([s,G])=>_(G()).pipe(Mn$2(W=>t.registerLanguage(s,W))));return hh(i).pipe(qe(()=>t))}loadCoreLibrary(){return _(this.options.coreLibraryLoader())}loadFullLibrary(){return _(this.options.fullLibraryLoader())}loadLineNumbers(){return at$2(this.options.lineNumbersLoader())}setTheme(t){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=t:this.loadTheme(t))}loadTheme(t){this._themeLinkElement=this.document.createElement(`link`),this._themeLinkElement.href=t,this._themeLinkElement.type=`text/css`,this._themeLinkElement.rel=`stylesheet`,this._themeLinkElement.media=`screen,print`,this.document.head.appendChild(this._themeLinkElement)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵprov=V$2({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();var _=e=>at$2(e).pipe(Bt$3(o=>!!o?.default),qe(o=>o.default));var z=(()=>{class e{constructor(){this.loader=p(V),this.options=p(I,{optional:!0}),this.hljsSignal=x(null),this.hljs=v(()=>this.hljsSignal()),this.loader.ready.then(t=>{this.hljsSignal.set(t),this.options?.highlightOptions&&t.configure(this.options.highlightOptions)})}async highlight(t,i){return(await this.loader.ready).highlight(t,i)}async highlightAuto(t,i){return(await this.loader.ready).highlightAuto(t,i)}async highlightElement(t){(await this.loader.ready).highlightElement(t)}async highlightAll(){(await this.loader.ready).highlightAll()}async configure(t){(await this.loader.ready).configure(t)}async registerLanguage(t,i){(await this.loader.ready).registerLanguage(t,i)}async unregisterLanguage(t){(await this.loader.ready).unregisterLanguage(t)}async registerAliases(t,{languageName:i}){(await this.loader.ready).registerAliases(t,{languageName:i})}async listLanguages(){return(await this.loader.ready).listLanguages()}async getLanguage(t){return(await this.loader.ready).getLanguage(t)}async safeMode(){(await this.loader.ready).safeMode()}async debugMode(){(await this.loader.ready).debugMode()}async lineNumbersBlock(t,i){let s=await this.loader.ready;s.lineNumbersBlock&&s.lineNumbersBlock(t,i)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵprov=V$2({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();var j;function q(){if(!j)try{j=window?.trustedTypes?.createPolicy(`ngx-highlightjs`,{createHTML:e=>e})}catch{}return j}function J(e){return q()?.createHTML(e)||e}var U=(()=>{class e{constructor(){this._hljs=p(z),this._nativeElement=p(B$1).nativeElement,this._sanitizer=p(Uv),Qs({write:()=>{let t=this.code();this.setTextContent(t||``),t&&this.highlightElement(t)}}),Qs({write:()=>{let t=this.highlightResult();this.setInnerHTML(t?.value),this.highlighted.emit(t)}})}setTextContent(t){requestAnimationFrame(()=>this._nativeElement.textContent=t)}setInnerHTML(t){requestAnimationFrame(()=>this._nativeElement.innerHTML=J(this._sanitizer.sanitize(et$2.HTML,t)||``))}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵdir=U$2({type:e})}}return e})();var ht=(()=>{class e extends U{constructor(){super(...arguments),this.code=m(null,{alias:`highlight`}),this.highlightResult=x(null),this.language=m.required(),this.ignoreIllegals=m(void 0,{transform:R$1}),this.highlighted=vt$2()}async highlightElement(t){let i=await this._hljs.highlight(t,{language:this.language(),ignoreIllegals:this.ignoreIllegals()});this.highlightResult.set(i)}static{this.ɵfac=(()=>{let t;return function(s){return(t||(t=ar$1(e)))(s||e)}})()}static{this.ɵdir=U$2({type:e,selectors:[[``,`highlight`,``]],hostVars:2,hostBindings:function(i,s){i&2&&Z(`hljs`,!0)},inputs:{code:[1,`highlight`,`code`],language:[1,`language`],ignoreIllegals:[1,`ignoreIllegals`]},outputs:{highlighted:`highlighted`},features:[ln$1([{provide:U,useExisting:e}]),St$2]})}}return e})();var w=Oi$1({sections:[{id:`Start`,icon:{name:`house`},collapsible:!0},{id:`Forms`,icon:{name:`text-cursor-input`},collapsible:!0},{id:`Primitives`,icon:{name:`shapes`},collapsible:!0},{id:`Navigation`,icon:{name:`panel-left`},collapsible:!0},{id:`Icons`,icon:{name:`sparkles`},collapsible:!0},{id:`Modals`,icon:{name:`panels-top-left`},collapsible:!0},{id:`Notifications`,icon:{name:`bell`},collapsible:!0},{id:`Tools`,icon:{name:`wrench`},collapsible:!0}]}),{withNav:c}=w,ke=e$1.map((e,a)=>c({path:e.id,loadComponent:e.id===`side-nav`||e.id===`top-nav`?void 0:()=>import(`./chunk-DKUE1j7u.js`).then(t=>t.ComponentDemo),children:e.id===`side-nav`||e.id===`top-nav`?[{path:``,pathMatch:`full`,redirectTo:`overview`},{path:`:navId`,loadComponent:()=>import(`./chunk-DKUE1j7u.js`).then(t=>t.ComponentDemo),data:{componentId:e.id}}]:void 0,title:`${e.title} \xB7 Blocks`,data:{componentId:e.id}},{label:e.title,breadcrumb:e.title,section:e.group,menu:!0,order:a,icon:{name:`box`}})),A=[{path:``,pathMatch:`full`,redirectTo:`home`},c({path:`home`,loadComponent:()=>import(`./chunk-DwGzPqiI.js`).then(e=>e.Home),title:`Blocks`},{label:`Overview`,breadcrumb:`Home`,section:`Start`,icon:{name:`house`},menu:!0,root:!0,order:1}),c({path:`appearance`,loadComponent:()=>import(`./chunk-BTGoctZ6.js`).then(e=>e.Appearance),title:`Appearance · Blocks`},{label:`Appearance`,breadcrumb:`Appearance`,section:`Start`,menu:!0,order:2}),c({path:`components`,title:`Components · Blocks`,children:[{path:``,pathMatch:`full`,loadComponent:()=>import(`./chunk-BrHjNccC.js`).then(e=>e.ComponentIndex)},...ke]},{label:`All components`,breadcrumb:`Components`,section:`Start`,menu:!0,order:3}),c({path:`release-notes`,title:`Release notes · Blocks`,children:[{path:``,pathMatch:`full`,redirectTo:e[0].version},{path:`:version`,loadComponent:()=>import(`./chunk-hjtEZu64.js`).then(e=>e.ReleaseNotes)}]},{label:`Release notes`,breadcrumb:`Release notes`,section:`Start`,icon:{name:`history`},menu:!0,order:4}),c({path:`icon-catalog`,loadComponent:()=>import(`./chunk-BAvKLeYG.js`).then(e=>e.IconCatalog),title:`Icon catalog · Blocks`},{label:`Icon catalog`,breadcrumb:`Icon catalog`,section:`Tools`,menu:!0,order:4}),c({path:`modal`,loadComponent:()=>import(`./chunk-BdL9wMYV.js`).then(e=>e.Modal),title:`Modal configurator · Blocks`},{label:`Modal configurator`,breadcrumb:`Modal configurator`,section:`Tools`,menu:!0,order:5}),c({path:`toastr`,loadComponent:()=>import(`./chunk-BpEAjn_C.js`).then(e=>e.Toastr),title:`Toast configurator · Blocks`},{label:`Toast configurator`,breadcrumb:`Toast configurator`,section:`Tools`,menu:!0,order:6}),{path:`glass`,pathMatch:`full`,redirectTo:`appearance`},{path:`**`,redirectTo:`components`}];(class e{static ɵfac=function(t){return new(t||e)};static ɵmod=mt$2({type:e});static ɵinj=pt$3({imports:[m1.forRoot(A),m1]})});var B={providers:[II(),yO(),Fd(()=>{let e=p(ie$1),a=null;try{a=e.defaultView?.localStorage.getItem(`theme-palette`)??null}catch{}let t=p(ba);Yb(a)||t.setPalette(`carbon-cobalt`)}),f1(A,h1({scrollPositionRestoration:`enabled`,anchorScrolling:`enabled`})),ki$1(w.config),rt({coreLibraryLoader:()=>import(`./chunk-CNLY_5RV.js`),languages:{typescript:()=>import(`./chunk-Da6TFjtL.js`),json:()=>import(`./chunk-BGC2jwKU.js`),scss:()=>import(`./chunk--Sjxt33j.js`),xml:()=>import(`./chunk-Bs3bRvME.js`)}})]};var O=class e{static ɵfac=function(t){return new(t||e)};static ɵcmp=H({type:e,selectors:[[`app-blocks-logo`]],hostAttrs:[`aria-hidden`,`true`],decls:98,vars:0,consts:[[`width`,`805`,`height`,`776`,`viewBox`,`0 0 805 776`,`fill`,`none`,`xmlns`,`http://www.w3.org/2000/svg`],[`d`,`M27.0656 12.8256H776.066V761.826H27.0656V12.8256Z`,`fill`,`url(#paint0_radial_2_133)`],[`filter`,`url(#filter0_f_2_133)`],[`d`,`M647.919 48.2668L90.9866 106.803C64.6221 109.574 45.4959 133.193 48.2669 159.557L103.458 684.665C106.229 711.029 129.848 730.155 156.212 727.384L713.145 668.848C739.509 666.077 758.635 642.459 755.864 616.094L700.673 90.9865C697.902 64.6221 674.283 45.4958 647.919 48.2668Z`,`fill`,`var(--blocks-logo-shadow)`,`fill-opacity`,`0.48`],[`d`,`M647.919 48.2668L90.9866 106.803C64.6221 109.574 45.4959 133.193 48.2669 159.557L103.458 684.665C106.229 711.029 129.848 730.155 156.212 727.384L713.145 668.848C739.509 666.077 758.635 642.459 755.864 616.094L700.673 90.9865C697.902 64.6221 674.283 45.4958 647.919 48.2668Z`,`fill`,`url(#paint1_linear_2_133)`,`stroke-width`,`3`,`stroke`,`url(#paint2_linear_2_133)`],[`id`,`mask0_2_133`,`maskUnits`,`userSpaceOnUse`,`x`,`48`,`y`,`48`,`width`,`709`,`height`,`680`,2,`mask-type`,`luminance`],[`d`,`M647.919 48.2668L90.9866 106.803C64.6221 109.574 45.4959 133.193 48.2669 159.557L103.458 684.665C106.229 711.029 129.848 730.155 156.212 727.384L713.145 668.848C739.509 666.077 758.635 642.459 755.864 616.094L700.673 90.9865C697.902 64.6221 674.283 45.4958 647.919 48.2668Z`,`fill`,`white`],[`mask`,`url(#mask0_2_133)`],[`d`,`M695.656 43.2495L43.2495 111.82L108.475 732.402L760.882 663.831L695.656 43.2495Z`,`fill`,`url(#paint3_radial_2_133)`],[`filter`,`url(#filter1_f_2_133)`],[`d`,`M393.862 300.203C430.447 313.452 484.256 308.802 528.698 282.009`,`stroke-width`,`64`,`stroke-linecap`,`round`,`stroke`,`var(--bx-primary)`,`stroke-opacity`,`0.1`],[`d`,`M393.862 300.203C430.447 313.452 484.256 308.802 528.698 282.009`,`stroke-width`,`13`,`stroke-linecap`,`round`,`stroke`,`url(#paint4_linear_2_133)`],[`d`,`M401.191 293.4C436.572 304.764 483.21 298.856 521.895 274.68`,`stroke-width`,`2.5`,`stroke-linecap`,`round`,`stroke`,`color-mix(in srgb, var(--bx-primary) 8%, var(--blocks-logo-specular))`,`stroke-opacity`,`0.72`],[`d`,`M87.6744 199.658C245.29 120.75 465.028 87.5996 647.647 112.648`,`stroke-width`,`2.5`,`stroke`,`url(#paint5_linear_2_133)`],[`d`,`M100.968 211.332C241.622 143.257 430.531 113.347 582.74 126.508`,`stroke-width`,`1.2`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.12`],[`d`,`M186.583 652.801C342.403 671.617 549.526 642.809 691.594 578.607`,`stroke-width`,`1.4`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.1`],[`d`,`M92.7128 113.66L647.656 55.333C670.725 52.9084 691.391 69.6439 693.816 92.7128L748.798 615.831C751.223 638.9 734.487 659.567 711.418 661.991L156.475 720.318C133.406 722.743 112.74 706.007 110.315 682.939L55.3331 159.82C52.9084 136.751 69.6439 116.085 92.7128 113.66Z`,`stroke-width`,`1.2`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.18`],[`id`,`mask1_2_133`,`maskUnits`,`userSpaceOnUse`,`x`,`55`,`y`,`55`,`width`,`695`,`height`,`666`,2,`mask-type`,`alpha`],[`d`,`M647.656 55.3331L92.7128 113.66C69.6439 116.085 52.9084 136.751 55.3331 159.82L110.315 682.939C112.74 706.008 133.406 722.743 156.475 720.318L711.418 661.991C734.487 659.567 751.223 638.9 748.798 615.831L693.816 92.7128C691.391 69.6439 670.725 52.9085 647.656 55.3331Z`,`fill`,`#D9D9D9`],[`mask`,`url(#mask1_2_133)`],[`filter`,`url(#filter2_f_2_133)`],[`d`,`M532.066 324.826C616.013 324.826 684.066 256.773 684.066 172.826C684.066 88.8783 616.013 20.8256 532.066 20.8256C448.118 20.8256 380.066 88.8783 380.066 172.826C380.066 256.773 448.118 324.826 532.066 324.826Z`,`fill`,`var(--bx-primary)`,`fill-opacity`,`0.1`],[`d`,`M532.066 291.826C597.787 291.826 651.066 238.548 651.066 172.826C651.066 107.104 597.787 53.8256 532.066 53.8256C466.344 53.8256 413.066 107.104 413.066 172.826C413.066 238.548 466.344 291.826 532.066 291.826Z`,`fill`,`url(#paint6_radial_2_133)`,`stroke-width`,`3.5`,`stroke`,`url(#paint7_linear_2_133)`],[`d`,`M640.066 172.826C640.066 232.472 591.712 280.826 532.066 280.826C472.419 280.826 424.066 232.472 424.066 172.826C424.066 113.179 472.419 64.8256 532.066 64.8256C591.712 64.8256 640.066 113.179 640.066 172.826Z`,`stroke-width`,`1.2`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.22`],[`d`,`M522.066 255.826C567.905 255.826 605.066 222.247 605.066 180.826C605.066 139.404 567.905 105.826 522.066 105.826C476.226 105.826 439.066 139.404 439.066 180.826C439.066 222.247 476.226 255.826 522.066 255.826Z`,`fill`,`url(#paint8_radial_2_133)`],[`filter`,`url(#filter3_f_2_133)`],[`d`,`M447.066 188.826C471.066 140.826 506.066 117.826 538.066 134.826C565.066 149.826 580.066 184.826 616.066 168.826`,`stroke-width`,`34`,`stroke-linecap`,`round`,`stroke`,`var(--bx-primary)`,`stroke-opacity`,`0.74`],[`d`,`M447.066 188.826C471.066 140.826 506.066 117.826 538.066 134.826C565.066 149.826 580.066 184.826 616.066 168.826`,`stroke-width`,`12`,`stroke-linecap`,`round`,`stroke`,`url(#paint9_linear_2_133)`],[`d`,`M456.066 183.826C477.066 146.826 507.066 129.826 532.066 143.826C556.066 156.826 571.066 184.826 600.066 172.826`,`stroke-width`,`2.4`,`stroke-linecap`,`round`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.86`],[`d`,`M460.066 123.826C478.066 101.826 505.066 88.8256 532.066 85.8256`,`stroke-width`,`5`,`stroke-linecap`,`round`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.7`],[`d`,`M465.066 130.826C478.066 117.826 493.066 108.826 508.066 103.826`,`stroke-width`,`2`,`stroke-linecap`,`round`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.52`],[`d`,`M482.066 111.326C484.551 111.326 486.566 109.311 486.566 106.826C486.566 104.34 484.551 102.326 482.066 102.326C479.58 102.326 477.566 104.34 477.566 106.826C477.566 109.311 479.58 111.326 482.066 111.326Z`,`fill`,`var(--blocks-logo-specular)`,`fill-opacity`,`0.86`],[`id`,`filter0_f_2_133`,`x`,`0`,`y`,`0`,`width`,`804.131`,`height`,`775.651`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`flood-opacity`,`0`,`result`,`BackgroundImageFix`],[`mode`,`normal`,`in`,`SourceGraphic`,`in2`,`BackgroundImageFix`,`result`,`shape`],[`stdDeviation`,`24`,`result`,`effect1_foregroundBlur_2_133`],[`id`,`filter1_f_2_133`,`x`,`281.853`,`y`,`170.004`,`width`,`358.85`,`height`,`249.357`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`stdDeviation`,`40`,`result`,`effect1_foregroundBlur_2_133`],[`id`,`filter2_f_2_133`,`x`,`300.066`,`y`,`-59.1744`,`width`,`464`,`height`,`464`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`id`,`filter3_f_2_133`,`x`,`406.062`,`y`,`88.2501`,`width`,`251.008`,`height`,`141.579`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`stdDeviation`,`12`,`result`,`effect1_foregroundBlur_2_133`],[`id`,`paint0_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(401.566 349.876) scale(434.42)`],[`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.105`],[`offset`,`0.56`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.025`],[`offset`,`1`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0`],[`id`,`paint1_linear_2_133`,`x1`,`98.0511`,`y1`,`131.158`,`x2`,`667.589`,`y2`,`698.833`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-surface)`,`stop-opacity`,`0.34`],[`offset`,`0.42`,`stop-color`,`var(--blocks-logo-surface)`,`stop-opacity`,`0.15`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-surface)`,`stop-opacity`,`0.07`],[`id`,`paint2_linear_2_133`,`x1`,`43.2495`,`y1`,`111.82`,`x2`,`731.541`,`y2`,`698.267`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.82`],[`offset`,`0.25`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.3`],[`offset`,`0.55`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.52`],[`offset`,`0.8`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.18`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.58`],[`id`,`paint3_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(537.769 235.526) rotate(-6) scale(439.52 418.08)`],[`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.4`],[`offset`,`0.3`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.2`],[`offset`,`0.7`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.055`],[`id`,`paint4_linear_2_133`,`x1`,`393.443`,`y1`,`296.225`,`x2`,`438.356`,`y2`,`354.826`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0`],[`offset`,`0.4`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.44`],[`offset`,`0.68`,`stop-color`,`color-mix(in srgb, var(--bx-primary) 44%, var(--blocks-logo-specular))`,`stop-opacity`,`0.8`],[`id`,`paint5_linear_2_133`,`x1`,`81.9226`,`y1`,`144.933`,`x2`,`218.003`,`y2`,`363.352`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.78`],[`offset`,`0.48`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.2`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0`],[`id`,`paint6_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(486.846 113.326) scale(195.16)`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.54`],[`offset`,`0.28`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.24`],[`offset`,`0.7`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.075`],[`offset`,`1`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.16`],[`id`,`paint7_linear_2_133`,`x1`,`429.726`,`y1`,`63.3456`,`x2`,`639.166`,`y2`,`291.826`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.94`],[`offset`,`0.3`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.36`],[`offset`,`0.66`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.56`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.82`],[`id`,`paint8_radial_2_133`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(508.786 165.826) scale(112.88 102)`],[`stop-color`,`color-mix(in srgb, var(--bx-primary) 10%, var(--blocks-logo-specular))`,`stop-opacity`,`0.96`],[`offset`,`0.18`,`stop-color`,`color-mix(in srgb, var(--bx-primary) 52%, var(--blocks-logo-specular))`,`stop-opacity`,`0.9`],[`offset`,`0.48`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.66`],[`id`,`paint9_linear_2_133`,`x1`,`447.066`,`y1`,`135.211`,`x2`,`498.003`,`y2`,`236.364`,`gradientUnits`,`userSpaceOnUse`],[`offset`,`0.34`,`stop-color`,`color-mix(in srgb, var(--bx-primary) 68%, var(--blocks-logo-specular))`,`stop-opacity`,`0.88`],[`offset`,`0.58`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.98`],[`offset`,`0.84`,`stop-color`,`var(--bx-primary)`,`stop-opacity`,`0.86`]],template:function(t,s){t&1&&(g_(),fn$2(0,`svg`,0),Wn$2(1,`path`,1),fn$2(2,`g`,2),Wn$2(3,`path`,3),hn$2(),Wn$2(4,`path`,4),fn$2(5,`mask`,5),Wn$2(6,`path`,6),hn$2(),fn$2(7,`g`,7),Wn$2(8,`path`,8),fn$2(9,`g`,9),Wn$2(10,`path`,10),hn$2(),Wn$2(11,`path`,11)(12,`path`,12)(13,`path`,13)(14,`path`,14)(15,`path`,15),hn$2(),Wn$2(16,`path`,16),fn$2(17,`mask`,17),Wn$2(18,`path`,18),hn$2(),fn$2(19,`g`,19)(20,`g`,20),Wn$2(21,`path`,21),hn$2()(),Wn$2(22,`path`,22)(23,`path`,23)(24,`path`,24),fn$2(25,`g`,25),Wn$2(26,`path`,26),hn$2(),Wn$2(27,`path`,27)(28,`path`,28)(29,`path`,29)(30,`path`,30)(31,`path`,31),fn$2(32,`defs`)(33,`filter`,32),Wn$2(34,`feFlood`,33)(35,`feBlend`,34)(36,`feGaussianBlur`,35),hn$2(),fn$2(37,`filter`,36),Wn$2(38,`feFlood`,33)(39,`feBlend`,34)(40,`feGaussianBlur`,37),hn$2(),fn$2(41,`filter`,38),Wn$2(42,`feFlood`,33)(43,`feBlend`,34)(44,`feGaussianBlur`,37),hn$2(),fn$2(45,`filter`,39),Wn$2(46,`feFlood`,33)(47,`feBlend`,34)(48,`feGaussianBlur`,40),hn$2(),fn$2(49,`radialGradient`,41),Wn$2(50,`stop`,42)(51,`stop`,43)(52,`stop`,44),hn$2(),fn$2(53,`linearGradient`,45),Wn$2(54,`stop`,46)(55,`stop`,47)(56,`stop`,48),hn$2(),fn$2(57,`linearGradient`,49),Wn$2(58,`stop`,50)(59,`stop`,51)(60,`stop`,52)(61,`stop`,53)(62,`stop`,54),hn$2(),fn$2(63,`radialGradient`,55),Wn$2(64,`stop`,56)(65,`stop`,57)(66,`stop`,58)(67,`stop`,44),hn$2(),fn$2(68,`linearGradient`,59),Wn$2(69,`stop`,60)(70,`stop`,61)(71,`stop`,62)(72,`stop`,44),hn$2(),fn$2(73,`linearGradient`,63),Wn$2(74,`stop`,64)(75,`stop`,65)(76,`stop`,66),hn$2(),fn$2(77,`radialGradient`,67),Wn$2(78,`stop`,68)(79,`stop`,69)(80,`stop`,70)(81,`stop`,71),hn$2(),fn$2(82,`linearGradient`,72),Wn$2(83,`stop`,73)(84,`stop`,74)(85,`stop`,75)(86,`stop`,76),hn$2(),fn$2(87,`radialGradient`,77),Wn$2(88,`stop`,78)(89,`stop`,79)(90,`stop`,80)(91,`stop`,44),hn$2(),fn$2(92,`linearGradient`,81),Wn$2(93,`stop`,60)(94,`stop`,82)(95,`stop`,83)(96,`stop`,84)(97,`stop`,44),hn$2()()())},styles:[`
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
}`]})};function Ee(e,a){if(e&1&&Oe$1(0,`bx-tag`,4),e&2){let t=ae$2(2);te$1(`text`,t.releaseLabel)(`opaque`,!0)(`focusable`,!1)}}function Se(e,a){if(e&1&&(P$1(0,`a`,2),Oe$1(1,`app-blocks-logo`),P$1(2,`span`,3)(3,`span`),Re(4),L$1(),ce(5,Ee,1,3,`bx-tag`,4),L$1()()),e&2){let t=ae$2();j$1(`aria-label`,t.brandLabel()),S(4),je(t.title()),S(),ue(t.releaseLabel?5:-1)}}var P=class e{sideNav=Zs(Se$1);releaseChannel=E;releaseLabel=this.releaseChannel===`alpha`?`Alpha`:this.releaseChannel===`beta`?`Beta`:``;brandLabel=v(()=>`${this.title()}${this.releaseLabel?` ${this.releaseChannel}`:``}`);config={persistenceKey:`blocks.playground.navigation.v1`,ariaLabel:`Component documentation`,collapsible:!1,showMobileTrigger:!1,showItemIcons:!1,showSectionIcons:!1};mobile=v(()=>this.sideNav()?.isMobile()??!1);open=v(()=>this.sideNav()?.mobileOpen()??!1);panelId=v(()=>this.sideNav()?.panelId);title=m.required();toggle(a){this.sideNav()?.toggle(a)}static ɵfac=function(t){return new(t||e)};static ɵcmp=H({type:e,selectors:[[`app-sidenav`]],viewQuery:function(t,s){t&1&&Mr$1(s.sideNav,Se$1,5),t&2&&Qt$2()},inputs:{title:[1,`title`]},decls:2,vars:2,consts:[[3,`config`,`collapsed`],[`bxSideNavHeader`,``],[`routerLink`,`/home`,1,`brand`],[1,`brand-name`],[`size`,`small`,`color`,`neutral`,1,`brand-release`,3,`text`,`opaque`,`focusable`]],template:function(t,s){t&1&&(P$1(0,`bx-side-nav`,0),ex(1,Se,6,3,`ng-template`,1),L$1()),t&2&&te$1(`config`,s.config)(`collapsed`,!1)},dependencies:[Se$1,ht$2,nE,O,z0],styles:[`
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
}
.brand-name[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.brand-release[_ngcontent-%COMP%] {
  --%NS%bx-tag-font-size: 0.5625rem;
  --%NS%bx-tag-padding: 0 0.375em;
  --%NS%bx-glass-decoration-opacity: 0;
  --%NS%bx-glass-rim-visibility: 0;
  flex: none;
}`]})};function Me(e,a){if(e&1){let t=Er$1();P$1(0,`button`,11),be$1(`click`,function(xe){$n$2(t),ae$2(2);let Ce=Pl(4);return qn$2(Ce.toggle(xe))}),Oe$1(1,`bx-icon`,12),L$1()}if(e&2){ae$2(2);let t=Pl(4);Z(`is-open`,t.open()),j$1(`aria-expanded`,t.open())(`aria-controls`,t.panelId())(`aria-hidden`,t.open()?!0:null)(`inert`,t.open()?``:null)}}function Ne(e,a){if(e&1&&(ce(0,Me,2,6,`button`,9),P$1(1,`span`,10),Re(2,`Component playground`),L$1()),e&2){ae$2();let t=Pl(4);ue(t.mobile()?0:-1)}}function we(e,a){e&1&&(P$1(0,`div`,13)(1,`a`,14),Oe$1(2,`bx-icon`,15),P$1(3,`span`),Re(4,`Appearance`),L$1()()())}var T=class e{document=p(ie$1);highlight=p(V);theme=p(ba);toolbarConfig={position:`sticky`,searchable:!1,ariaLabel:`Playground controls`};toolbarGroups=[];isDarkMode=v(()=>this.theme.activeTheme()===`dark`);constructor(){xe(()=>{let a=this.isDarkMode();this.document.documentElement.setAttribute(`data-theme`,a?`dark`:`light`),this.document.defaultView&&this.highlight.setTheme(a?`assets/styles/vs2015.css`:`assets/styles/github.css`)})}static ɵfac=function(t){return new(t||e)};static ɵcmp=H({type:e,selectors:[[`app-root`]],decls:11,vars:2,consts:[[`navigation`,``],[`href`,`#main-content`,1,`skip-link`],[1,`app-container`],[`title`,`Blocks`],[1,`app-main`],[`data-bx-light-scope`,``,1,`app-toolbar`,3,`config`,`groups`],[`bxTopNavBrand`,``],[`bxTopNavActions`,``],[`id`,`main-content`,`tabindex`,`-1`,1,`app-content-container`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,`aria-label`,`Open navigation`,1,`navigation-toggle`,3,`is-open`],[1,`toolbar-label`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,`aria-label`,`Open navigation`,1,`navigation-toggle`,3,`click`],[`name`,`menu`,`size`,`16`],[1,`toolbar-actions`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`routerLink`,`/appearance`,`aria-label`,`Configure appearance for the whole playground`,1,`appearance-button`],[`name`,`sliders-horizontal`,`size`,`20`]],template:function(t,s){t&1&&(P$1(0,`a`,1),Re(1,`Skip to content`),L$1(),P$1(2,`div`,2),Oe$1(3,`app-sidenav`,3,0),P$1(5,`div`,4)(6,`bx-top-nav`,5),ex(7,Ne,3,1,`ng-template`,6)(8,we,5,0,`ng-template`,7),L$1(),P$1(9,`main`,8),Oe$1(10,`router-outlet`),L$1()()()),t&2&&(S(6),te$1(`config`,s.toolbarConfig)(`groups`,s.toolbarGroups))},dependencies:[pb,nE,P,qf,bt$2,Te$1,_t$1,yt$1],styles:[`
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
  --%NS%bx-top-nav-radius: 0;
  --%NS%bx-top-nav-height: 4rem;
  --%NS%bx-top-nav-padding-inline: 1.5rem;
  --%NS%bx-top-nav-gap: 1rem;
  border-block-end: 1px solid var(--%NS%bx-border-default);
}
.navigation-toggle[_ngcontent-%COMP%] {
  flex: none;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
}
.navigation-toggle.is-open[_ngcontent-%COMP%] {
  visibility: hidden;
  pointer-events: none;
}
.toolbar-label[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-secondary);
}
.toolbar-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-width: 0;
  gap: 0.5rem;
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
    --%NS%bx-top-nav-height: 3.75rem;
    --%NS%bx-top-nav-padding-inline: 1rem;
    --%NS%bx-top-nav-gap: 0.5rem;
  }
  .toolbar-label[_ngcontent-%COMP%] {
    display: none;
  }
  .toolbar-actions[_ngcontent-%COMP%] {
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
}`]})};EP(T,s(r({},B),{providers:[yO(),...B.providers]})).catch(e=>console.error(e));export{E as A,yt$1 as B,We as C,qa as D,ki as E,Te$1 as F,_t$1 as I,ft$1 as L,e as M,e$1 as N,ut$1 as O,Se$1 as P,ht$2 as R,Va as S,ja as T,Ha as _,On as a,Ti as b,vn as c,yn as d,$a as f,Ga as g,Fa as h,Nn as i,L as j,za as k,xn as l,De as m,Cn as n,fn as o,Ba as p,Mn as r,hn as s,ht as t,ye as u,Ka as v,dr as w,Ua as x,Qn$1 as y,mt$1 as z};