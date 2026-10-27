import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{A as Ht$1,An as n5,B as Kn,C as G,Cn as le$1,Ct as Xl,D as HN,Dn as mb,Dt as Y6,E as Gu,En as lz,Et as Y,F as Jl,Fn as ob,G as M_,Gn as qN,Gt as dA,H as Le$1,Ht as cr,I as KE,In as oc,It as _t$1,J as Nm,Jn as r0,Jt as dl,K as Mb,Kn as qk,L as KT,Ln as oe$1,Lt as _u,M as In,Mt as Zc,N as JA,Nt as Zn,P as JT,Pn as oA,Pt as _$2,Q as Pe$1,Qn as se$1,Qt as ei,R as KY,Rn as or,Rt as ab,S as Fl,Sn as lA,St as Xb,T as Gt$1,Tn as ly,U as Lt,Un as q$1,Ut as cy,V as L$1,Vn as pb,Vt as ce,W as MA,Wn as qM,Wt as cz,Xn as re$2,Xt as du,Y as OI,Yn as r6,Yt as dt$1,Z as Pa,Zt as ec,_ as E,_n as jn,_r as yI,an as gm,at as Qs,b as FA,bn as ke,br as zu,bt as WT,c as Be$2,cn as hb,ct as Rg,d as C,dn as ic,dr as x8,dt as Te$1,en as fA,et as Pt$1,f as CC,fn as it,fr as xa,ft as Tn,g as Dm,gr as y8,h as De$1,hn as jh,ht as Uh,i as $h,in as g_,ir as tx,it as QY,j as Im,jn as nE,jt as ZT,k as Hp,kn as n0,kt as Ye$1,ln as hn,lr as v_,m as Cr,mr as xe$1,mt as UM,n as $N,nn as fz,nr as tc,nt as QA,o as Ae$1,on as gp,or as ue$1,p as C_,pn as j$2,qn as qu,r as $e$1,rr as te$2,rt as QT,s as B,sn as h8,sr as uz,st as R_,tn as fb,tr as t6,tt as Q$1,ur as wm,v as E_,vr as yi,vt as W$1,w as Gk,wn as lr,wt as Xn,xn as kk,xr as zw,y as Ee$1,yn as ka,yr as zN,yt as WA,z as Ke$1,zn as p$1}from"./chunk-BTQvnuSt.js";var y$1=new C(`NAVIGATION_CONFIG`);var K$3=new C(`NAVIGATION_ACCESS_ADAPTER`);var _$1=class r$2{router=p$1(Ht$1);config=p$1(y$1,{optional:!0});i18n=p$1(KY,{optional:!0});accessAdapter=p$1(K$3,{optional:!0});navEnd=x8(this.router.events.pipe(xe$1(t=>t instanceof dt$1)));current=Q$1(()=>(this.navEnd(),this.i18n?.version?.(),this.resolveCurrent(this.router.routerState.snapshot.root)));routeBase=Q$1(()=>this.accessAdapter?.resolveBaseRoute());routes=Q$1(()=>(this.i18n?.version?.(),this.extractRoutes(this.router.config)));baseRoute=Q$1(()=>{let t=this.routes(),e=this.routeBase(),n,o=d=>{for(let a of d){if(a.data?.root&&(n||(n=a.route),e&&a.route.startsWith(e)))return a.route;if(a.children?.length){let i=o(a.children);if(i)return i}}};return o(t)??n??e});menu=Q$1(()=>this.buildMenu(this.routes()));navigateBack(){let t=this.current().breadcrumbs;if(t.length>1){let e=t[t.length-2];this.router.navigateByUrl(e.route)}else this.router.navigateByUrl(this.routeBase()??`/`)}extractRoutes(t,e=[]){let n=[];for(let o of t){if(o.redirectTo||this.accessAdapter&&!this.accessAdapter.canAccessMenu(o.data??{}))continue;let s=o.path??``,d=s?[...e,s]:[...e],a=`/`+d.filter(Boolean).join(`/`),i=o.children?.length?this.extractRoutes(o.children,d):[],u=o.data?.nav;if(!u){n.push(...i);continue}let h={id:a,route:a,label:this.resolveNavText(u.label,{snapshot:void 0})??``,icon:u.icon,section:u.section,visible:u.visible?u.visible():!0,data:u,children:i};n.push(h)}return this.sortNavigationItems(n)}resolveCurrent(t){let e=t,n;for(;e;){let f=e.children.find(l=>l.outlet===`primary`)??null;if(!f){n=e;break}e=f}if(!n)return{breadcrumbs:[]};let o=n.pathFromRoot.flatMap(f=>f.url.map(l=>l.path)).filter(Boolean),s=[],d=this.flattenRoutes(this.routes()),a=``;for(let f of o){a+=`/`+f;let l=this.matchRouteToUrl(d,a);if(l&&l.data&&!l.data.hidden){let w={snapshot:n},C=this.resolveNavText(l.data.breadcrumb,w)??this.resolveNavText(l.data.label,w);C&&s[s.length-1]?.label!==C&&s.push({label:C,route:a})}}let i=n.routeConfig?.data?.nav,u=`/`+o.join(`/`),h;return i&&!i.hidden&&(h={id:u,route:u,label:this.resolveNavText(i.label,{snapshot:n})??``,icon:i.icon,section:i.section,visible:i.visible?i.visible():!0,data:i}),{current:h,breadcrumbs:s}}buildMenu(t){return t.map(e=>{let n=this.buildMenu(e.children??[]);return!(e.visible&&e.data?.menu!==!1)&&!n.length?null:s(r({},e),{children:n})}).filter(e=>e!==null)}sortNavigationItems(t){let e=this.config?.sortItems;return[...t].sort((n,o)=>{if(e)return e(n,o);let s=n.data?.order??Number.POSITIVE_INFINITY,d=o.data?.order??Number.POSITIVE_INFINITY;return s!==d?s-d:n.label.localeCompare(o.label)})}matchRouteToUrl(t,e){return t.find(o=>o.route===e)||t.find(o=>o.route.includes(`:`)?new RegExp(`^`+o.route.replace(/:[^\s/]+/g,`([^/]+)`)+`$`).test(e):!1)}flattenRoutes(t){return t.reduce((e,n)=>(e.push(n),n.children&&e.push(...this.flattenRoutes(n.children)),e),[])}resolveNavText(t,e){if(!t)return;let n=typeof t==`function`?t(e):t;return QY(n)?this.i18n?.translate(n.key,{route:e.snapshot}):n}static ɵfac=function(e){return new(e||r$2)};static ɵprov=_$2({token:r$2,factory:r$2.ɵfac,providedIn:`root`})};var H$2=(r,t)=>t.route;function J$3(r,t){if(r&1&&(Fl(0,`span`,1),FA(1),jh()),r&2){let e=lA().$implicit;CC(),Mb(e.label)}}function Q(r,t){if(r&1&&(Fl(0,`a`,2),FA(1),jh(),Jl(2,`bx-icon`,3)),r&2){let e=lA().$implicit,n=lA(2);ab(`routerLink`,e.route),CC(),Mb(e.label),CC(),ab(`name`,n.divider())}}function Z$3(r,t){if(r&1&&WT(0,J$3,2,1,`span`,1)(1,Q,3,3),r&2){let e=t.$index,n=t.$count;ZT(e===n-1?0:1)}}function ee$3(r,t){if(r&1&&(Fl(0,`nav`,0),QT(1,Z$3,2,1,null,null,H$2),jh()),r&2){let e=lA();Tn(`aria-label`,e.ariaLabel()),CC(),JT(e.current().breadcrumbs)}}var X=class r{navigationService=p$1(_$1);a11y=p$1(or);isAnimated=Q$1(()=>!this.a11y.isReducedMotion());minimumBreadcrumbs=re$2(2);divider=re$2(`chevron-right`);showBreadcumbs=Q$1(()=>{let t=Math.max(1,this.minimumBreadcrumbs());return this.current().breadcrumbs.length>=t});ariaLabel=Q$1(()=>`Breadcrumbs: ${this.current().breadcrumbs.map(e=>e.label).join(` > `)}`);current=this.navigationService.current;static ɵfac=function(e){return new(e||r)};static ɵcmp=Zn({type:r,selectors:[[`bx-breadcrumbs`]],inputs:{minimumBreadcrumbs:[1,`minimumBreadcrumbs`],divider:[1,`divider`]},decls:1,vars:1,consts:[[1,`breadcrumbs`],[`aria-current`,`page`,1,`crumb`,`last`],[1,`crumb`,3,`routerLink`],[`size`,`16`,1,`breadcrumb-separator`,3,`name`]],template:function(e,n){e&1&&WT(0,ee$3,3,1,`nav`,0),e&2&&ZT(n.showBreadcumbs()?0:-1)},dependencies:[Zc,R_],styles:[`
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
}`]})};function Be$1(r){return[{provide:y$1,useValue:r}]}function we(r$3,t){let e=r$3.data?.nav??{};return s(r({},r$3),{data:s(r({},r$3.data??{}),{nav:r(r({},e),t)})})}var Je=[`a-arrow-down`,`a-arrow-up`,`a-large-small`,`accessibility`,`activity-square`,`activity`,`ad`,`air-vent`,`airplay`,`alarm-check`,`alarm-clock-check`,`alarm-clock-minus`,`alarm-clock-off`,`alarm-clock-plus`,`alarm-clock`,`alarm-minus`,`alarm-plus`,`alarm-smoke`,`album`,`alert-circle`,`alert-octagon`,`alert-triangle`,`align-center-horizontal`,`align-center-vertical`,`align-center`,`align-end-horizontal`,`align-end-vertical`,`align-horizontal-distribute-center`,`align-horizontal-distribute-end`,`align-horizontal-distribute-start`,`align-horizontal-justify-center`,`align-horizontal-justify-end`,`align-horizontal-justify-start`,`align-horizontal-space-around`,`align-horizontal-space-between`,`align-justify`,`align-left`,`align-right`,`align-start-horizontal`,`align-start-vertical`,`align-vertical-distribute-center`,`align-vertical-distribute-end`,`align-vertical-distribute-start`,`align-vertical-justify-center`,`align-vertical-justify-end`,`align-vertical-justify-start`,`align-vertical-space-around`,`align-vertical-space-between`,`ambulance`,`ampersand`,`ampersands`,`amphora`,`anchor`,`angle`,`angry`,`annoyed`,`antenna`,`anvil`,`aperture`,`app-window-mac`,`app-window`,`apple`,`archive-restore`,`archive-x`,`archive`,`area-chart`,`armchair`,`armenian-dram`,`arrow-big-down-dash`,`arrow-big-down`,`arrow-big-left-dash`,`arrow-big-left`,`arrow-big-right-dash`,`arrow-big-right`,`arrow-big-up-dash`,`arrow-big-up`,`arrow-down-0-1`,`arrow-down-01`,`arrow-down-1-0`,`arrow-down-10`,`arrow-down-a-z`,`arrow-down-az`,`arrow-down-circle`,`arrow-down-from-line`,`arrow-down-left-from-circle`,`arrow-down-left-from-square`,`arrow-down-left-square`,`arrow-down-left`,`arrow-down-narrow-wide`,`arrow-down-right-from-circle`,`arrow-down-right-from-square`,`arrow-down-right-square`,`arrow-down-right`,`arrow-down-square`,`arrow-down-to-dot`,`arrow-down-to-line`,`arrow-down-up`,`arrow-down-wide-narrow`,`arrow-down-z-a`,`arrow-down-za`,`arrow-down`,`arrow-left-circle`,`arrow-left-from-line`,`arrow-left-right`,`arrow-left-square`,`arrow-left-to-line`,`arrow-left`,`arrow-right-circle`,`arrow-right-from-line`,`arrow-right-left`,`arrow-right-square`,`arrow-right-to-line`,`arrow-right`,`arrow-up-0-1`,`arrow-up-01`,`arrow-up-1-0`,`arrow-up-10`,`arrow-up-a-z`,`arrow-up-az`,`arrow-up-circle`,`arrow-up-down`,`arrow-up-from-dot`,`arrow-up-from-line`,`arrow-up-left-from-circle`,`arrow-up-left-from-square`,`arrow-up-left-square`,`arrow-up-left`,`arrow-up-narrow-wide`,`arrow-up-right-from-circle`,`arrow-up-right-from-square`,`arrow-up-right-square`,`arrow-up-right`,`arrow-up-square`,`arrow-up-to-line`,`arrow-up-wide-narrow`,`arrow-up-z-a`,`arrow-up-za`,`arrow-up`,`arrows-up-from-line`,`asterisk-square`,`asterisk`,`astroid`,`at-sign`,`atom`,`audio-lines-off`,`audio-lines-x`,`audio-lines`,`audio-waveform`,`avocado`,`award`,`axe`,`axis-3-d`,`axis-3d`,`azerbaijani-manat`,`baby`,`backpack`,`bacon`,`badge-alert`,`badge-cent`,`badge-check`,`badge-dollar-sign`,`badge-euro`,`badge-help`,`badge-indian-rupee`,`badge-info`,`badge-japanese-yen`,`badge-minus`,`badge-percent`,`badge-plus`,`badge-pound-sterling`,`badge-question-mark`,`badge-russian-ruble`,`badge-swiss-franc`,`badge-turkish-lira`,`badge-x`,`badge`,`baggage-claim`,`ball-wave`,`balloon`,`ban`,`banana`,`bandage`,`bangladeshi-taka`,`banknote-arrow-down`,`banknote-arrow-up`,`banknote-check`,`banknote-x`,`banknote`,`bar-chart-2`,`bar-chart-3`,`bar-chart-4`,`bar-chart-big`,`bar-chart-horizontal-big`,`bar-chart-horizontal`,`bar-chart`,`barcode`,`barrel`,`baseline`,`bath`,`battery-charging`,`battery-full`,`battery-low`,`battery-medium`,`battery-plus`,`battery-warning`,`battery`,`beaker`,`bean-off`,`bean`,`bed-double`,`bed-single`,`bed`,`beef-off`,`beef`,`beer-off`,`beer`,`belarusian-ruble`,`bell-check`,`bell-dot`,`bell-electric`,`bell-minus`,`bell-off`,`bell-plus`,`bell-ring`,`bell`,`between-horizonal-end`,`between-horizonal-start`,`between-horizontal-end`,`between-horizontal-start`,`between-vertical-end`,`between-vertical-start`,`biceps-flexed`,`bike`,`binary`,`binoculars`,`biohazard`,`bird`,`birdhouse`,`bitcoin`,`blend`,`blender`,`blinds`,`blocks`,`bluetooth-connected`,`bluetooth-off`,`bluetooth-searching`,`bluetooth`,`bold`,`bolt`,`bomb`,`bone-fracture`,`bone`,`book-a`,`book-alert`,`book-audio`,`book-bookmark`,`book-check`,`book-copy`,`book-dashed`,`book-down`,`book-headphones`,`book-heart`,`book-image`,`book-key`,`book-lock`,`book-marked`,`book-minus`,`book-open-check`,`book-open-text`,`book-open`,`book-plus`,`book-search`,`book-template`,`book-text`,`book-type`,`book-up-2`,`book-up`,`book-user`,`book-x`,`book`,`bookmark-check`,`bookmark-minus`,`bookmark-off`,`bookmark-plus`,`bookmark-x`,`bookmark`,`boom-box`,`bot-message-square`,`bot-off`,`bot`,`bottle-wine`,`bow-arrow`,`box-select`,`box`,`boxes`,`braces`,`brackets`,`brain-circuit`,`brain-cog`,`brain-off`,`brain`,`brick-wall-fire`,`brick-wall-shield`,`brick-wall`,`bridge`,`briefcase-business`,`briefcase-conveyor-belt`,`briefcase-medical`,`briefcase-plus`,`briefcase`,`bring-to-front`,`broccoli`,`broom-sparkles`,`broom`,`brush-cleaning`,`brush`,`bubbles`,`bug-off`,`bug-play`,`bug`,`building-2`,`building-complex-plus`,`building-complex`,`building`,`bus-front`,`bus`,`cable-car`,`cable`,`cake-slice`,`cake`,`calculator`,`calendar-1`,`calendar-arrow-down`,`calendar-arrow-up`,`calendar-check-2`,`calendar-check`,`calendar-chevrons-left`,`calendar-chevrons-right`,`calendar-clock`,`calendar-cog`,`calendar-days`,`calendar-fold`,`calendar-heart`,`calendar-minus-2`,`calendar-minus`,`calendar-off`,`calendar-plus-2`,`calendar-plus`,`calendar-range`,`calendar-search`,`calendar-sync`,`calendar-x-2`,`calendar-x`,`calendar`,`calendars`,`camera-off`,`camera`,`can-soda`,`can`,`candlestick-chart`,`candy-cane`,`candy-off`,`candy`,`cannabis-off`,`cannabis`,`captions-off`,`captions`,`car-battery`,`car-front`,`car-taxi-front`,`car`,`caravan`,`card-sim`,`carrot`,`carton-off`,`carton`,`case-lower`,`case-sensitive`,`case-upper`,`cassette-tape`,`cast`,`castle`,`cat`,`cctv-off`,`cctv`,`certificate`,`chart-area`,`chart-bar-big`,`chart-bar-decreasing`,`chart-bar-increasing`,`chart-bar-stacked`,`chart-bar`,`chart-candlestick`,`chart-column-big`,`chart-column-decreasing`,`chart-column-increasing`,`chart-column-stacked`,`chart-column`,`chart-gantt`,`chart-line`,`chart-network`,`chart-no-axes-column-decreasing`,`chart-no-axes-column-increasing`,`chart-no-axes-column`,`chart-no-axes-combined`,`chart-no-axes-gantt`,`chart-pie`,`chart-scatter`,`chart-spline`,`check-check`,`check-circle-2`,`check-circle`,`check-line`,`check-square-2`,`check-square`,`check`,`chef-hat`,`cherry`,`chess-bishop`,`chess-king`,`chess-knight`,`chess-pawn`,`chess-queen`,`chess-rook`,`chevron-down-circle`,`chevron-down-square`,`chevron-down`,`chevron-first`,`chevron-last`,`chevron-left-circle`,`chevron-left-square`,`chevron-left`,`chevron-right-circle`,`chevron-right-square`,`chevron-right`,`chevron-up-circle`,`chevron-up-square`,`chevron-up`,`chevrons-down-up`,`chevrons-down`,`chevrons-left-right-ellipsis`,`chevrons-left-right`,`chevrons-left`,`chevrons-right-left`,`chevrons-right`,`chevrons-up-down`,`chevrons-up`,`church`,`cigarette-off`,`cigarette`,`circle-alert`,`circle-arrow-down`,`circle-arrow-left`,`circle-arrow-out-down-left`,`circle-arrow-out-down-right`,`circle-arrow-out-up-left`,`circle-arrow-out-up-right`,`circle-arrow-right`,`circle-arrow-up`,`circle-check-big`,`circle-check`,`circle-chevron-down`,`circle-chevron-left`,`circle-chevron-right`,`circle-chevron-up`,`circle-chevrons-down`,`circle-chevrons-left`,`circle-chevrons-right`,`circle-chevrons-up`,`circle-dashed-check`,`circle-dashed`,`circle-divide`,`circle-dollar-sign`,`circle-dot-dashed`,`circle-dot`,`circle-ellipsis`,`circle-equal`,`circle-euro`,`circle-fading-arrow-up`,`circle-fading-play`,`circle-fading-plus`,`circle-gauge`,`circle-help`,`circle-minus`,`circle-off`,`circle-parking-off`,`circle-parking`,`circle-pause`,`circle-percent`,`circle-pile`,`circle-play`,`circle-plus`,`circle-pound-sterling`,`circle-power`,`circle-question-mark`,`circle-slash-2`,`circle-slash`,`circle-slashed`,`circle-small`,`circle-star`,`circle-stop`,`circle-user-round`,`circle-user`,`circle-x`,`circle`,`circuit-board`,`citrus`,`clapperboard`,`clef-alto`,`clef-bass`,`clef-treble`,`clipboard-check`,`clipboard-clock`,`clipboard-copy`,`clipboard-edit`,`clipboard-list`,`clipboard-minus`,`clipboard-paste`,`clipboard-pen-line`,`clipboard-pen`,`clipboard-plus`,`clipboard-signature`,`clipboard-type`,`clipboard-x`,`clipboard`,`clock-1`,`clock-10`,`clock-11`,`clock-12`,`clock-2`,`clock-3`,`clock-4`,`clock-5`,`clock-6`,`clock-7`,`clock-8`,`clock-9`,`clock-alert`,`clock-arrow-down`,`clock-arrow-left`,`clock-arrow-right`,`clock-arrow-up`,`clock-check`,`clock-fading`,`clock-plus`,`clock`,`closed-caption`,`cloud-alert`,`cloud-backup`,`cloud-check`,`cloud-cog`,`cloud-download`,`cloud-drizzle`,`cloud-fog`,`cloud-hail`,`cloud-lightning`,`cloud-moon-rain`,`cloud-moon`,`cloud-off`,`cloud-rain-wind`,`cloud-rain`,`cloud-snow`,`cloud-sun-rain`,`cloud-sun`,`cloud-sync`,`cloud-upload`,`cloud`,`cloudy`,`clover`,`club`,`code-2`,`code-square`,`code-xml`,`code`,`coffee`,`cog`,`coins`,`columns-2`,`columns-3-cog`,`columns-3`,`columns-4`,`columns-settings`,`columns`,`combine`,`command`,`compass`,`component`,`computer`,`concierge-bell`,`cone`,`construction`,`contact-2`,`contact-round`,`contact`,`container`,`contrast`,`cookie`,`cooking-pot`,`copy-check`,`copy-minus`,`copy-plus`,`copy-slash`,`copy-x`,`copy`,`copyleft`,`copyright`,`corner-down-left`,`corner-down-right`,`corner-left-down`,`corner-left-up`,`corner-right-down`,`corner-right-up`,`corner-up-left`,`corner-up-right`,`cpu-ai`,`cpu`,`creative-commons`,`credit-card-check`,`credit-card-minus`,`credit-card-plus`,`credit-card-reader`,`credit-card-x`,`credit-card`,`croissant`,`crop`,`cross`,`crosshair`,`crown`,`cuboid`,`cup-soda`,`cupcake`,`curly-braces`,`currency`,`cylinder`,`dam`,`database-arrow-down`,`database-arrow-up`,`database-backup`,`database-check`,`database-minus`,`database-plus`,`database-search`,`database-x`,`database-zap`,`database`,`decimals-arrow-left`,`decimals-arrow-right`,`delete`,`dessert`,`diameter`,`diamond-minus`,`diamond-percent`,`diamond-plus`,`diamond`,`dice-1`,`dice-2`,`dice-3`,`dice-4`,`dice-5`,`dice-6`,`dices`,`diff`,`disc-2`,`disc-3`,`disc-album`,`disc`,`divide-circle`,`divide-square`,`divide`,`dna-off`,`dna`,`dock`,`dog`,`dollar-sign`,`dome`,`donut`,`door-closed-cog`,`door-closed-locked`,`door-closed-package`,`door-closed`,`door-open`,`door-stairwell`,`dot-square`,`dot`,`download-cloud`,`download`,`drafting-compass`,`drama`,`drill`,`drone`,`droplet-off`,`droplet`,`droplets`,`drum`,`drumstick`,`dumbbell`,`ear-off`,`ear`,`earth-lock`,`earth`,`eclipse`,`edit-2`,`edit-3`,`edit`,`egg-fried`,`egg-off`,`egg`,`eighth-note`,`eighth-notes`,`eject`,`ellipse`,`ellipsis-vertical`,`ellipsis`,`emirati-dirham`,`engine`,`equal-approximately-not`,`equal-approximately`,`equal-not`,`equal-square`,`equal`,`eraser`,`ethernet-port`,`euro`,`ev-charger`,`expand`,`external-link`,`eye-closed`,`eye-dashed`,`eye-off`,`eye`,`face-angry`,`face-expressionless`,`face-grinning`,`face-neutral`,`face-slightly-frowning`,`face-slightly-smiling-plus`,`face-slightly-smiling`,`factory`,`fan`,`fast-forward`,`faucet`,`feather`,`fence`,`ferris-wheel`,`file-archive`,`file-audio-2`,`file-audio`,`file-axis-3-d`,`file-axis-3d`,`file-badge-2`,`file-badge`,`file-bar-chart-2`,`file-bar-chart`,`file-box`,`file-braces-corner`,`file-braces`,`file-chart-column-increasing`,`file-chart-column`,`file-chart-line`,`file-chart-pie`,`file-check-2`,`file-check-corner`,`file-check`,`file-clock`,`file-code-2`,`file-code-corner`,`file-code`,`file-cog-2`,`file-cog`,`file-diff`,`file-digit`,`file-down`,`file-edit`,`file-exclamation-point`,`file-headphone`,`file-heart`,`file-image`,`file-input`,`file-json-2`,`file-json`,`file-key-2`,`file-key`,`file-line-chart`,`file-lock-2`,`file-lock`,`file-minus-2`,`file-minus-corner`,`file-minus`,`file-music`,`file-output`,`file-pen-line`,`file-pen`,`file-pie-chart`,`file-play`,`file-plus-2`,`file-plus-corner`,`file-plus`,`file-question-mark`,`file-question`,`file-scan`,`file-search-2`,`file-search-corner`,`file-search`,`file-signal`,`file-signature`,`file-sliders`,`file-spreadsheet`,`file-stack`,`file-symlink`,`file-terminal`,`file-text`,`file-type-2`,`file-type-corner`,`file-type`,`file-up`,`file-user`,`file-video-2`,`file-video-camera`,`file-video`,`file-volume-2`,`file-volume`,`file-warning`,`file-x-2`,`file-x-corner`,`file-x`,`file`,`files`,`film`,`filter-x`,`filter`,`fingerprint-pattern`,`fingerprint`,`fire-extinguisher`,`fish-off`,`fish-symbol`,`fish`,`fishing-hook`,`fishing-rod`,`flag-off`,`flag-triangle-left`,`flag-triangle-right`,`flag`,`flame-kindling`,`flame`,`flashlight-off`,`flashlight`,`flask-conical-off`,`flask-conical`,`flask-round`,`flip-horizontal-2`,`flip-horizontal`,`flip-vertical-2`,`flip-vertical`,`flower-2`,`flower`,`focus`,`fold-horizontal`,`fold-vertical`,`folder-archive`,`folder-bookmark`,`folder-check`,`folder-clock`,`folder-closed`,`folder-code`,`folder-cog-2`,`folder-cog`,`folder-dot`,`folder-down`,`folder-edit`,`folder-git-2`,`folder-git`,`folder-heart`,`folder-input`,`folder-kanban`,`folder-key`,`folder-lock`,`folder-minus`,`folder-open-dot`,`folder-open`,`folder-output`,`folder-pen`,`folder-plus`,`folder-root`,`folder-search-2`,`folder-search`,`folder-symlink`,`folder-sync`,`folder-tree`,`folder-up`,`folder-user`,`folder-users`,`folder-x`,`folder`,`folders`,`footprints`,`fork-knife-crossed`,`fork-knife`,`forklift`,`form-input`,`form`,`forward`,`frame`,`frown`,`fuel`,`fullscreen`,`function-square`,`funnel-plus`,`funnel-x`,`funnel`,`galaxy`,`gallery-horizontal-end`,`gallery-horizontal`,`gallery-thumbnails`,`gallery-vertical-end`,`gallery-vertical`,`gamepad-2`,`gamepad-directional`,`gamepad`,`gantt-chart-square`,`gantt-chart`,`gap-horizontal`,`gap-vertical`,`gauge-circle`,`gauge`,`gavel`,`gem`,`georgian-lari`,`germ-off`,`germ`,`ghost`,`gift`,`git-branch-minus`,`git-branch-plus`,`git-branch`,`git-commit-horizontal`,`git-commit-vertical`,`git-commit`,`git-compare-arrows`,`git-compare`,`git-fork`,`git-graph`,`git-merge-conflict`,`git-merge`,`git-pull-request-arrow`,`git-pull-request-closed`,`git-pull-request-create-arrow`,`git-pull-request-create`,`git-pull-request-draft`,`git-pull-request`,`glass-water`,`glasses`,`globe-2`,`globe-check`,`globe-code`,`globe-lock`,`globe-off`,`globe-x`,`globe`,`goal`,`gpu`,`grab`,`graduation-cap`,`grape`,`graph-hub`,`graph-star`,`grid-2-x-2-check`,`grid-2-x-2-plus`,`grid-2-x-2-x`,`grid-2-x-2`,`grid-2x2-check`,`grid-2x2-plus`,`grid-2x2-x`,`grid-2x2`,`grid-3-x-3`,`grid-3x2`,`grid-3x3`,`grid`,`grip-horizontal`,`grip-vertical`,`grip`,`groceries`,`group`,`guitar-electric`,`guitar`,`half-note`,`ham`,`hamburger`,`hammer`,`hand-coins`,`hand-fist`,`hand-grab`,`hand-heart`,`hand-helping`,`hand-metal`,`hand-platter`,`hand`,`handbag`,`handle-bottom-right`,`handshake`,`hard-drive-download`,`hard-drive-upload`,`hard-drive`,`hard-hat`,`hash`,`hat-glasses`,`haze`,`hd`,`hdmi-port`,`heading-1`,`heading-2`,`heading-3`,`heading-4`,`heading-5`,`heading-6`,`heading`,`headphone-off`,`headphones`,`headset`,`heart-crack`,`heart-handshake`,`heart-minus`,`heart-off`,`heart-plus`,`heart-pulse`,`heart-x`,`heart`,`heater`,`helicopter`,`help-circle`,`helping-hand`,`hexagon`,`highlighter`,`hiking-stick`,`history`,`hockey-stick`,`home`,`hop-off`,`hop`,`hospital`,`hot-air-balloon`,`hotel`,`hourglass-cog`,`hourglass`,`house-cog`,`house-heart`,`house-plug`,`house-plus`,`house-wifi`,`house`,`houses`,`ice-cream-2`,`ice-cream-bowl`,`ice-cream-cone`,`ice-cream`,`id-card-lanyard`,`id-card`,`image-down`,`image-minus`,`image-off`,`image-play`,`image-plus`,`image-up`,`image-upscale`,`image`,`images`,`import`,`inbox`,`indent-decrease`,`indent-increase`,`indent`,`indian-rupee`,`infinity`,`info`,`inspect`,`inspection-panel`,`italic`,`iteration-ccw`,`iteration-cw`,`iv-bag`,`japanese-yen`,`joystick`,`kanban-square-dashed`,`kanban-square`,`kanban`,`kayak`,`kazakh-tenge`,`key-round`,`key-square`,`key`,`keyboard-music`,`keyboard-off`,`keyboard`,`lambda`,`lamp-ceiling`,`lamp-desk`,`lamp-floor`,`lamp-wall-down`,`lamp-wall-up`,`lamp`,`land-plot`,`landmark`,`languages`,`laptop-2`,`laptop-minimal-check`,`laptop-minimal`,`laptop`,`lasso-select`,`lasso`,`laugh`,`layer-arrow-down`,`layer-arrow-up`,`layers-2`,`layers-3`,`layers-arrow-down`,`layers-arrow-up`,`layers-minus`,`layers-plus`,`layers`,`layout-arrow-down`,`layout-arrow-right`,`layout-dashboard`,`layout-freeform`,`layout-grid-circles`,`layout-grid`,`layout-list`,`layout-panel-left`,`layout-panel-top`,`layout-template`,`layout`,`leaf`,`leafy-green`,`lectern`,`lens-concave`,`lens-convex`,`lens`,`letter-spacing`,`letter-text`,`letters`,`library-big`,`library-square`,`library`,`life-buoy`,`ligature`,`lightbulb-off`,`lightbulb`,`lighthouse`,`line-chart`,`line-dot-bottom-vertical`,`line-dot-left-horizontal`,`line-dot-right-horizontal`,`line-dot-top-vertical`,`line-height`,`line-squiggle`,`line-style`,`link-2-off`,`link-2`,`link`,`list-check`,`list-checks`,`list-chevrons-down-up`,`list-chevrons-up-down`,`list-clock`,`list-collapse`,`list-end`,`list-filter-plus`,`list-filter`,`list-indent-decrease`,`list-indent-increase`,`list-minus`,`list-music`,`list-ordered`,`list-plus`,`list-restart`,`list-sort-ascending`,`list-sort-descending`,`list-start`,`list-todo`,`list-tree`,`list-video`,`list-x`,`list`,`loader-2`,`loader-circle`,`loader-pinwheel`,`loader`,`locate-fixed`,`locate-off`,`locate`,`location-edit`,`lock-keyhole-open`,`lock-keyhole`,`lock-open`,`lock`,`log-in`,`log-out`,`logs`,`lollipop`,`luggage`,`m-square`,`magnet`,`mail-badge`,`mail-check`,`mail-clock`,`mail-dot`,`mail-minus`,`mail-open`,`mail-pen`,`mail-plus`,`mail-question-mark`,`mail-question`,`mail-search`,`mail-warning`,`mail-x`,`mail`,`mailbox`,`mails`,`map-minus`,`map-pin-check-inside`,`map-pin-check`,`map-pin-house`,`map-pin-minus-inside`,`map-pin-minus`,`map-pin-off`,`map-pin-pen`,`map-pin-plus-inside`,`map-pin-plus`,`map-pin-search`,`map-pin-x-inside`,`map-pin-x`,`map-pin`,`map-pinned`,`map-plus`,`map`,`mars-stroke`,`mars`,`martini`,`maximize-2`,`maximize`,`medal`,`megaphone-off`,`megaphone`,`meh`,`memory-stick`,`menu-square`,`menu`,`merge`,`message-circle-check`,`message-circle-code`,`message-circle-dashed-check`,`message-circle-dashed`,`message-circle-heart`,`message-circle-more`,`message-circle-off`,`message-circle-plus`,`message-circle-question-mark`,`message-circle-question`,`message-circle-reply`,`message-circle-text`,`message-circle-warning`,`message-circle-x`,`message-circle`,`message-square-check`,`message-square-code`,`message-square-dashed`,`message-square-diff`,`message-square-dot`,`message-square-heart`,`message-square-lock`,`message-square-more`,`message-square-off`,`message-square-plus`,`message-square-quote`,`message-square-reply`,`message-square-share`,`message-square-text`,`message-square-warning`,`message-square-x`,`message-square`,`messages-circle`,`messages-square`,`metronome`,`mic-2`,`mic-audio-lines`,`mic-off`,`mic-signal`,`mic-vocal`,`mic`,`microchip`,`microscope`,`microwave`,`midi-port`,`milestone`,`milk-off`,`milk`,`minimize-2`,`minimize`,`minus-circle`,`minus-square`,`minus`,`mirror-rectangular`,`mirror-round`,`monitor-check`,`monitor-cloud`,`monitor-cog`,`monitor-dot`,`monitor-down`,`monitor-off`,`monitor-pause`,`monitor-pc`,`monitor-play`,`monitor-smartphone`,`monitor-speaker`,`monitor-stop`,`monitor-up`,`monitor-x`,`monitor`,`moon-star`,`moon`,`mop-sparkles`,`mop`,`more-horizontal`,`more-vertical`,`mosque`,`motorbike`,`mountain-snow`,`mountain`,`mouse-left`,`mouse-off`,`mouse-pointer-2-off`,`mouse-pointer-2`,`mouse-pointer-ban`,`mouse-pointer-click`,`mouse-pointer-square-dashed`,`mouse-pointer`,`mouse-right`,`mouse`,`mouth-off`,`mouth`,`move-3-d`,`move-3d`,`move-diagonal-2`,`move-diagonal`,`move-down-left`,`move-down-right`,`move-down`,`move-horizontal`,`move-left`,`move-right`,`move-up-left`,`move-up-right`,`move-up`,`move-vertical`,`move`,`music-2`,`music-3`,`music-4`,`music`,`navigation-2-off`,`navigation-2`,`navigation-off`,`navigation`,`nepali-rupee`,`network`,`newspaper`,`nfc`,`non-binary`,`notebook-dot`,`notebook-pen`,`notebook-tabs`,`notebook-text`,`notebook`,`notepad-text-dashed`,`notepad-text`,`nut-off`,`nut`,`octagon-alert`,`octagon-minus`,`octagon-pause`,`octagon-x`,`octagon`,`omega`,`option`,`orbit`,`origami`,`outdent`,`package-2`,`package-check`,`package-minus`,`package-open`,`package-plus`,`package-search`,`package-x`,`package`,`paint-bucket`,`paint-roller`,`paintbrush-2`,`paintbrush-vertical`,`paintbrush`,`palette`,`palmtree`,`panda`,`panel-bottom-close`,`panel-bottom-dashed`,`panel-bottom-inactive`,`panel-bottom-open`,`panel-bottom`,`panel-left-close`,`panel-left-dashed`,`panel-left-inactive`,`panel-left-open`,`panel-left-right-dashed`,`panel-left`,`panel-right-close`,`panel-right-dashed`,`panel-right-inactive`,`panel-right-open`,`panel-right`,`panel-top-bottom-dashed`,`panel-top-close`,`panel-top-dashed`,`panel-top-inactive`,`panel-top-open`,`panel-top`,`panels-left-bottom`,`panels-left-right`,`panels-right-bottom`,`panels-top-bottom`,`panels-top-left`,`paper-bag`,`paperclip`,`parasol`,`parentheses`,`park`,`parking-circle-off`,`parking-circle`,`parking-meter`,`parking-square-off`,`parking-square`,`party-popper`,`pause-circle`,`pause-octagon`,`pause`,`paw-print`,`pc-case`,`pen-box`,`pen-line`,`pen-off`,`pen-square`,`pen-tool`,`pen`,`pencil-line`,`pencil-off`,`pencil-ruler`,`pencil-sparkles`,`pencil`,`pentagon`,`percent-circle`,`percent-diamond`,`percent-square`,`percent`,`perfume-bottle`,`person-standing`,`phi`,`philippine-peso`,`phone-call`,`phone-forwarded`,`phone-incoming`,`phone-log`,`phone-missed`,`phone-off`,`phone-outgoing`,`phone`,`pi-square`,`pi`,`piano`,`pickaxe`,`picture-in-picture-2`,`picture-in-picture`,`pie-chart`,`piggy-bank`,`pilcrow-left`,`pilcrow-right`,`pilcrow-square`,`pilcrow`,`pill-bottle`,`pill`,`pin-off`,`pin`,`pipette`,`pizza`,`plane-landing`,`plane-takeoff`,`plane`,`plant-pot`,`play-circle`,`play-off`,`play-square`,`play`,`playing-card`,`playing-cards-fan`,`playing-cards`,`plug-2`,`plug-zap-2`,`plug-zap`,`plug`,`plus-circle`,`plus-square`,`plus`,`pocket-knife`,`podcast`,`podium`,`pointer-off`,`pointer`,`popcorn`,`popsicle`,`pound-sterling`,`power-circle`,`power-off`,`power-square`,`power`,`presentation`,`printer-3d`,`printer-check`,`printer-x`,`printer`,`projector`,`proportions`,`puzzle`,`pyramid`,`qr-code`,`quote`,`rabbit`,`radar`,`radiation`,`radical`,`radio-off`,`radio-receiver`,`radio-tower`,`radio`,`radius`,`rainbow`,`rat`,`ratio`,`receipt-cent`,`receipt-euro`,`receipt-indian-rupee`,`receipt-japanese-yen`,`receipt-pound-sterling`,`receipt-russian-ruble`,`receipt-swiss-franc`,`receipt-text`,`receipt-turkish-lira`,`receipt`,`rectangle-circle`,`rectangle-ellipsis`,`rectangle-goggles`,`rectangle-horizontal`,`rectangle-vertical`,`recycle`,`redo-2`,`redo-dot`,`redo`,`refresh-ccw-dot`,`refresh-ccw`,`refresh-cw-off`,`refresh-cw`,`refrigerator`,`regex`,`remove-formatting`,`repeat-1`,`repeat-2`,`repeat-off`,`repeat`,`replace-all`,`replace`,`reply-all`,`reply`,`rewind`,`ribbon`,`road`,`robot-arm`,`robot-vacuum`,`rocket`,`rocking-chair`,`roller-coaster`,`rose`,`rotate-3-d`,`rotate-3d`,`rotate-ccw-clock`,`rotate-ccw-key`,`rotate-ccw-square`,`rotate-ccw`,`rotate-cw-clock`,`rotate-cw-fading-clock`,`rotate-cw-square`,`rotate-cw`,`route-off`,`route`,`router`,`rows-2`,`rows-3`,`rows-4`,`rows`,`rss`,`rugby-ball`,`ruler-dimension-line`,`ruler`,`russian-ruble`,`sailboat`,`salad`,`sandwich`,`satellite-dish`,`satellite`,`saudi-riyal`,`save-all`,`save-check`,`save-off`,`save-pen`,`save-plus`,`save`,`scale-3-d`,`scale-3d`,`scale`,`scaling`,`scan-barcode`,`scan-box`,`scan-eye`,`scan-face`,`scan-heart`,`scan-line`,`scan-qr-code`,`scan-search`,`scan-square`,`scan-text`,`scan`,`scatter-chart`,`school-2`,`school`,`scissors-line-dashed`,`scissors-square-dashed-bottom`,`scissors-square`,`scissors`,`scooter`,`scratch-blocks`,`screen-share-off`,`screen-share`,`screw`,`scroll-text`,`scroll`,`search-alert`,`search-check`,`search-code`,`search-slash`,`search-x`,`search`,`section`,`send-horizonal`,`send-horizontal`,`send-to-back`,`send`,`separator-horizontal`,`separator-vertical`,`server-cog`,`server-crash`,`server-nas`,`server-off`,`server-plus`,`server`,`settings-2`,`settings`,`shapes`,`share-2`,`share`,`sheet`,`shell`,`shelving-unit`,`shield-alert`,`shield-ban`,`shield-check`,`shield-close`,`shield-cog-corner`,`shield-cog`,`shield-ellipsis`,`shield-half`,`shield-house`,`shield-keyhole`,`shield-lock`,`shield-minus`,`shield-off`,`shield-plus`,`shield-question-mark`,`shield-question`,`shield-user`,`shield-x`,`shield`,`ship-cargo`,`ship-wheel`,`ship`,`shirt`,`shopping-bag`,`shopping-basket`,`shopping-cart-minus`,`shopping-cart-plus`,`shopping-cart`,`shovel`,`shower-head`,`shredder`,`shrimp-off`,`shrimp`,`shrink`,`shrub`,`shuffle`,`sidebar-close`,`sidebar-open`,`sidebar`,`sigma-square`,`sigma`,`signal-high`,`signal-low`,`signal-medium`,`signal-zero`,`signal`,`signature`,`signpost-big`,`signpost`,`siren`,`sixteenth-notes`,`skip-back`,`skip-forward`,`skull`,`slash-square`,`slash`,`slice`,`sliders-horizontal`,`sliders-vertical`,`sliders`,`smartphone-charging`,`smartphone-nfc`,`smartphone-user-round`,`smartphone`,`smile-plus`,`smile`,`snail`,`snowflake`,`soap-dispenser-droplet`,`sofa`,`solar-panel`,`sort-asc`,`sort-desc`,`soup`,`space`,`spade`,`sparkle`,`sparkles`,`speaker`,`speech`,`spell-check-2`,`spell-check`,`spline-pointer`,`spline`,`split-square-horizontal`,`split-square-vertical`,`split`,`spool`,`sport-shoe`,`spotlight`,`spray-can`,`sprout`,`square-activity`,`square-arrow-down-left`,`square-arrow-down-right`,`square-arrow-down`,`square-arrow-left`,`square-arrow-out-down-left`,`square-arrow-out-down-right`,`square-arrow-out-up-left`,`square-arrow-out-up-right`,`square-arrow-right-enter`,`square-arrow-right-exit`,`square-arrow-right`,`square-arrow-up-left`,`square-arrow-up-right`,`square-arrow-up`,`square-asterisk`,`square-bookmark`,`square-bottom-dashed-scissors`,`square-centerline-dashed-horizontal`,`square-centerline-dashed-vertical`,`square-chart-gantt`,`square-check-big`,`square-check`,`square-chevron-down`,`square-chevron-left`,`square-chevron-right`,`square-chevron-up`,`square-code`,`square-dashed-bottom-code`,`square-dashed-bottom`,`square-dashed-kanban`,`square-dashed-mouse-pointer`,`square-dashed-plus`,`square-dashed-text`,`square-dashed-top-solid`,`square-dashed-x-corner`,`square-dashed-x`,`square-dashed`,`square-dimensions`,`square-divide`,`square-dot`,`square-equal`,`square-exclamation-point`,`square-function`,`square-gantt-chart`,`square-kanban`,`square-library`,`square-m`,`square-menu`,`square-minus`,`square-mouse-pointer`,`square-off`,`square-parking-off`,`square-parking`,`square-pause`,`square-pen`,`square-percent`,`square-pi`,`square-pilcrow`,`square-play`,`square-plus`,`square-power`,`square-radical`,`square-round-corner`,`square-scissors`,`square-sigma`,`square-slash`,`square-sparkles`,`square-split-horizontal`,`square-split-vertical`,`square-square`,`square-stack`,`square-star`,`square-stop`,`square-terminal`,`square-text`,`square-user-round`,`square-user`,`square-x`,`square`,`squares-exclude`,`squares-intersect`,`squares-subtract`,`squares-unite`,`squircle-dashed`,`squircle`,`squirrel`,`stamp`,`star-check`,`star-half`,`star-minus`,`star-off`,`star-plus`,`star-x`,`star`,`stars`,`step-back`,`step-forward`,`stethoscope`,`sticker`,`sticky-note-check`,`sticky-note-minus`,`sticky-note-off`,`sticky-note-plus`,`sticky-note-x`,`sticky-note`,`sticky-notes`,`stone`,`stop-circle`,`store`,`stretch-horizontal`,`stretch-vertical`,`strikethrough`,`subscript`,`subtitles`,`summary`,`sun-dim`,`sun-medium`,`sun-moon`,`sun-snow`,`sun`,`sunrise`,`sunset`,`superscript`,`swatch-book`,`swiss-franc`,`switch-camera`,`sword`,`swords`,`syringe`,`table-2`,`table-cells-merge`,`table-cells-split`,`table-columns-split`,`table-config`,`table-of-contents`,`table-properties`,`table-rows-split`,`table`,`tablet-smartphone`,`tablet`,`tablets`,`tag-plus`,`tag-x`,`tag`,`tags`,`tally-1`,`tally-2`,`tally-3`,`tally-4`,`tally-5`,`tangent`,`target`,`telescope`,`tent-tree`,`tent`,`terminal-square`,`terminal`,`test-tube-2`,`test-tube-diagonal`,`test-tube`,`test-tubes`,`text-align-center`,`text-align-end`,`text-align-justify-center`,`text-align-justify-end`,`text-align-justify-start`,`text-align-justify`,`text-align-start`,`text-cursor-input`,`text-cursor`,`text-initial`,`text-quote`,`text-search`,`text-select`,`text-selection`,`text-wrap`,`text`,`theater`,`thermometer-snowflake`,`thermometer-sun`,`thermometer`,`thumbs-down`,`thumbs-up`,`tic-tac-toe`,`ticket-check`,`ticket-minus`,`ticket-percent`,`ticket-plus`,`ticket-slash`,`ticket-x`,`ticket`,`tickets-plane`,`tickets`,`timeline`,`timer-off`,`timer-reset`,`timer`,`toggle-left`,`toggle-right`,`toilet`,`tombstone`,`tool-case`,`toolbox`,`toothbrush-sparkles`,`toothbrush`,`tornado`,`torus`,`touchpad-off`,`touchpad`,`towel-rack`,`tower-control`,`toy-brick`,`tractor`,`traffic-cone`,`trailer`,`train-front-tunnel`,`train-front`,`train-track`,`train`,`tram-front`,`transgender`,`trash-2`,`trash-off`,`trash`,`tree-deciduous`,`tree-palm`,`tree-pine`,`trees`,`trending-down`,`trending-up-down`,`trending-up`,`triangle-alert`,`triangle-dashed`,`triangle-right`,`triangle`,`triangles-centerline-dashed-horizontal`,`triangles-centerline-dashed-vertical`,`trophy`,`truck-electric`,`truck`,`tube-lotion`,`turkish-lira`,`turntable`,`turtle`,`tv-2`,`tv-minimal-play`,`tv-minimal`,`tv`,`type-outline`,`type`,`umbrella-off`,`umbrella`,`underline`,`undo-2`,`undo-dot`,`undo`,`unfold-horizontal`,`unfold-vertical`,`ungroup`,`university`,`unlink-2`,`unlink`,`unlock-keyhole`,`unlock`,`unplug`,`upload-cloud`,`upload`,`usb-c-port`,`usb`,`user-2`,`user-check-2`,`user-check`,`user-circle-2`,`user-circle`,`user-cog-2`,`user-cog`,`user-group`,`user-key`,`user-lock`,`user-minus-2`,`user-minus`,`user-pen`,`user-plus-2`,`user-plus`,`user-round-arrow-left`,`user-round-check`,`user-round-cog`,`user-round-group`,`user-round-key`,`user-round-minus`,`user-round-pen`,`user-round-plus`,`user-round-search`,`user-round-star`,`user-round-x`,`user-round`,`user-search`,`user-shield`,`user-square-2`,`user-square`,`user-star`,`user-x-2`,`user-x`,`user`,`users-2`,`users-collaboration`,`users-round-collaboration`,`users-round`,`users`,`utensils-crossed`,`utensils`,`utility-pole`,`van`,`variable`,`vault`,`vector-polygon`,`vector-square`,`vegan`,`venetian-mask`,`venus-and-mars`,`venus`,`verified`,`vibrate-off`,`vibrate`,`video-off`,`video`,`videotape`,`view`,`virus-off`,`virus`,`voicemail`,`volleyball`,`volume-1`,`volume-2`,`volume-off`,`volume-x`,`volume`,`vote`,`wallet-2`,`wallet-cards`,`wallet-minimal`,`wallet`,`wallpaper`,`wand-2`,`wand-sparkles`,`wand`,`warehouse`,`washing-machine`,`watch`,`waves-arrow-down`,`waves-arrow-up`,`waves-horizontal`,`waves-ladder`,`waves-vertical`,`waves`,`waypoints`,`webcam-off`,`webcam`,`webhook-off`,`webhook`,`weight-tilde`,`weight`,`wheat-off`,`wheat`,`whistle`,`whole-word`,`wifi-cog`,`wifi-high`,`wifi-lock`,`wifi-low`,`wifi-off`,`wifi-pen`,`wifi-sync`,`wifi-zero`,`wifi`,`wind-arrow-down`,`wind-arrow-up`,`wind`,`wine-off`,`wine`,`workflow`,`worm`,`wrap-text`,`wrench-off`,`wrench`,`x-circle`,`x-line-top`,`x-octagon`,`x-square`,`x`,`zap-off`,`zap`,`zodiac-aquarius`,`zodiac-aries`,`zodiac-cancer`,`zodiac-capricorn`,`zodiac-gemini`,`zodiac-leo`,`zodiac-libra`,`zodiac-ophiuchus`,`zodiac-pisces`,`zodiac-sagittarius`,`zodiac-scorpio`,`zodiac-taurus`,`zodiac-virgo`,`zoom-in`,`zoom-out`];var Ne=[`*`];var K$2=class r{static ɵfac=function(e){return new(e||r)};static ɵcmp=Zn({type:r,selectors:[[`bx-error`]],ngContentSelectors:Ne,decls:1,vars:0,template:function(e,n){e&1&&(fb(),hb(0))},encapsulation:2})};function Te(r,t){if(r&1&&FA(0),r&2){let e=lA();$h(` `,e.resolvedText(),` `)}}var Z$2=class r{i18n=p$1(KY,{optional:!0});a11y=p$1(or);resolvedText=Q$1(()=>{this.i18n?.version?.();let t=this.text();if(t)return QY(t)?this.i18n?.translate(t.key)??t.key:t});isAnimated=Q$1(()=>!this.a11y.isReducedMotion());text=re$2.required();static ɵfac=function(e){return new(e||r)};static ɵcmp=Zn({type:r,selectors:[[`bx-tooltip`]],inputs:{text:[1,`text`]},decls:2,vars:3,consts:[[`bxSurface`,``,1,`bx-tooltip-surface`]],template:function(e,n){e&1&&(Fl(0,`div`,0),WT(1,Te,1,1),jh()),e&2&&(Xn(`bx-tooltip-animated`,n.isAnimated()),CC(),ZT(n.resolvedText()?1:-1))},dependencies:[E_],styles:[`
[_nghost-%COMP%] {
  display: block;
  pointer-events: none;
  z-index: 600;
}
.bx-tooltip-surface[data-bx-surface][_ngcontent-%COMP%] {
  position: relative;
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-family: inherit;
  max-width: min(22rem, 100vw - 1.5rem);
  white-space: normal;
  overflow-wrap: anywhere;
  --%NS%bx-glass-surface: var(--%NS%bx-bg-surface);
  --%NS%bx-glass-text: var(--%NS%bx-text-primary);
  --%NS%bx-glass-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --%NS%bx-glass-min-opacity: 1;
  --%NS%bx-glass-decoration-opacity: 0;
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
}
.bx-tooltip-surface[data-bx-surface][_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  z-index: 2;
  width: 0.5rem;
  height: 0.5rem;
  box-sizing: border-box;
  border-radius: 0;
  background: var(--%NS%bx-glass-surface);
  border: 0 solid var(--%NS%bx-border-default);
  transform: translate(-50%, -50%) rotate(45deg);
  pointer-events: none;
}
.bx-overlay-pos-bottom[_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after, .bx-overlay-pos-bottom   [_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after {
  top: -1px;
  left: clamp(0.75rem, var(--%NS%bx-tooltip-arrow-x, 50%), 100% - 0.75rem);
  border-top-width: 1px;
  border-left-width: 1px;
}
.bx-overlay-pos-top[_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after, .bx-overlay-pos-top   [_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after {
  top: calc(100% + 1px);
  left: clamp(0.75rem, var(--%NS%bx-tooltip-arrow-x, 50%), 100% - 0.75rem);
  border-right-width: 1px;
  border-bottom-width: 1px;
}
.bx-overlay-pos-left[_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after, .bx-overlay-pos-left   [_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after {
  left: calc(100% + 1px);
  top: clamp(0.5rem, var(--%NS%bx-tooltip-arrow-y, 50%), 100% - 0.5rem);
  border-top-width: 1px;
  border-right-width: 1px;
}
.bx-overlay-pos-right[_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after, .bx-overlay-pos-right   [_nghost-%COMP%]   .bx-tooltip-surface[_ngcontent-%COMP%]::after {
  left: -1px;
  top: clamp(0.5rem, var(--%NS%bx-tooltip-arrow-y, 50%), 100% - 0.5rem);
  border-bottom-width: 1px;
  border-left-width: 1px;
}
@media (forced-colors: active) {
  .bx-tooltip-surface[data-bx-surface][_ngcontent-%COMP%]::after {
    background: Canvas;
    border-color: CanvasText;
  }
}`]})};var Re=[`*`];var Se=class r{a11y=p$1(or);isAnimated=Q$1(()=>!this.a11y.isReducedMotion());static ɵfac=function(e){return new(e||r)};static ɵcmp=Zn({type:r,selectors:[[`bx-menu`]],ngContentSelectors:Re,decls:2,vars:2,consts:[[`bxSurface`,``,1,`bx-menu-wrapper`]],template:function(e,n){e&1&&(fb(),Fl(0,`div`,0),hb(1),jh()),e&2&&Xn(`bx-menu-animated`,n.isAnimated())},dependencies:[E_],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.bx-menu-wrapper[_ngcontent-%COMP%] {
  background-color: var(--%NS%bx-bg-surface);
  border: 1px solid var(--%NS%bx-border-subtle);
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  min-width: 12rem;
}
.bx-menu-wrapper.bx-menu-animated[_ngcontent-%COMP%] {
  transition: opacity 0.2s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.bx-menu-wrapper[_ngcontent-%COMP%] {
  transform-origin: top;
}
.bx-menu-wrapper.is-hidden[_ngcontent-%COMP%] {
  opacity: 0;
  transform: scaleY(0.95);
  pointer-events: none;
}
[data-bx-surface][_nghost-%COMP%] {
  border-radius: var(--%NS%bx-glass-radius, 0.25rem);
  --%NS%bx-glass-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  color: var(--%NS%bx-glass-text, var(--%NS%bx-text-primary));
}
[data-bx-surface][_nghost-%COMP%]   .bx-menu-wrapper[_ngcontent-%COMP%] {
  background: transparent;
  border-color: transparent;
  border-radius: inherit;
  box-shadow: none;
}
[data-bx-surface][_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: 0.8;
}`]})};var ze=[`*`];function Ie(r,t){if(r&1&&Jl(0,`bx-icon`,1),r&2){let e=lA();ab(`name`,e.icon())}}function Be(r,t){if(r&1&&FA(0),r&2){let e=lA();$h(` `,e.resolvedLabel(),` `)}}function Ae(r,t){r&1&&hb(0)}function je(r,t){if(r&1&&(Fl(0,`kbd`),FA(1),jh()),r&2){let e=t.$implicit;CC(),Mb(e)}}function He(r,t){if(r&1&&(Fl(0,`span`,3),QT(1,je,2,1,`kbd`,null,KT),jh()),r&2){let e=lA();CC(),JT(e.resolvedShortcut())}}function Fe(r,t){if(r&1&&Jl(0,`bx-icon`,4),r&2){let e=lA();ab(`name`,e.endIcon())}}var Ee=class r{i18n=p$1(KY,{optional:!0});a11y=p$1(or);bxShortcutService=p$1(v_);resolvedLabel=Q$1(()=>{this.i18n?.version?.();let t=this.label();if(t)return QY(t)?this.i18n?.translate(t.key)??t.key:t});resolvedShortcut=Q$1(()=>this.bxShortcutService.resolve(this.shortcut()));isAnimated=Q$1(()=>!this.a11y.isReducedMotion());icon=re$2(void 0);endIcon=re$2(void 0);label=re$2(void 0);wrapLabel=re$2(!1);disabled=re$2(!1);danger=re$2(!1);shortcut=re$2(void 0);action=lz();onClick(t){if(this.disabled()){t.preventDefault(),t.stopPropagation();return}this.action.emit(t)}static ɵfac=function(e){return new(e||r)};static ɵcmp=Zn({type:r,selectors:[[`bx-menu-item`]],inputs:{icon:[1,`icon`],endIcon:[1,`endIcon`],label:[1,`label`],wrapLabel:[1,`wrapLabel`],disabled:[1,`disabled`],danger:[1,`danger`],shortcut:[1,`shortcut`]},outputs:{action:`action`},ngContentSelectors:ze,decls:7,vars:13,consts:[[`type`,`button`,1,`bx-menu-item-btn`,3,`click`,`disabled`],[`size`,`20`,1,`bx-icon-pos-start`,3,`name`],[1,`bx-menu-item-content`],[1,`bx-menu-item-shortcut`],[`size`,`20`,1,`bx-icon-pos-end`,3,`name`]],template:function(e,n){e&1&&(fb(),Fl(0,`button`,0),Kn(`click`,function(a){return n.onClick(a)}),WT(1,Ie,1,1,`bx-icon`,1),Fl(2,`span`,2),WT(3,Be,1,1)(4,Ae,1,0),jh(),WT(5,He,3,0,`span`,3),WT(6,Fe,1,1,`bx-icon`,4),jh()),e&2&&(Xn(`is-disabled`,n.disabled())(`is-danger`,n.danger())(`bx-menu-item-animated`,n.isAnimated()),ab(`disabled`,n.disabled()),CC(),ZT(n.icon()?1:-1),CC(),Xn(`bx-menu-item-content-wrapped`,n.wrapLabel()),CC(),ZT(n.resolvedLabel()?3:4),CC(2),ZT(n.resolvedShortcut()?5:-1),CC(),ZT(n.endIcon()?6:-1))},dependencies:[R_],styles:[`
[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
.bx-menu-item-btn[_ngcontent-%COMP%] {
  width: 100%;
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.875rem;
  text-align: left;
  border-radius: 0.25rem;
  color: var(--%NS%bx-text-primary);
}
.bx-menu-item-btn[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
}
.bx-menu-item-btn.bx-menu-item-animated[_ngcontent-%COMP%] {
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
}
.bx-menu-item-btn.bx-menu-item-animated[_ngcontent-%COMP%]   .bx-menu-item-shortcut[_ngcontent-%COMP%] {
  transition: color 0.1s ease-in-out;
}
.bx-menu-item-btn[_ngcontent-%COMP%]:hover:not(.is-disabled) {
  background-color: var(--%NS%bx-bg-element-hover);
}
.bx-menu-item-btn[_ngcontent-%COMP%]:hover:not(.is-disabled)   .bx-menu-item-shortcut[_ngcontent-%COMP%] {
  color: inherit;
  opacity: 1;
}
.bx-menu-item-btn[_ngcontent-%COMP%]:active:not(.is-disabled) {
  background-color: var(--%NS%bx-bg-element-active);
}
.bx-menu-item-btn[_ngcontent-%COMP%]:active:not(.is-disabled)   .bx-menu-item-shortcut[_ngcontent-%COMP%] {
  color: inherit;
  opacity: 1;
}
.bx-menu-item-btn.is-danger[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
}
.bx-menu-item-btn.is-danger[_ngcontent-%COMP%]   .bx-menu-item-shortcut[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-danger);
  opacity: 0.7;
}
.bx-menu-item-btn.is-danger[_ngcontent-%COMP%]:hover:not(.is-disabled) {
  background-color: var(--%NS%bx-bg-danger-hover);
}
.bx-menu-item-btn.is-danger[_ngcontent-%COMP%]:active:not(.is-disabled) {
  background-color: var(--%NS%bx-bg-danger-active);
}
.bx-menu-item-btn.is-disabled[_ngcontent-%COMP%] {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
.bx-menu-item-content[_ngcontent-%COMP%] {
  flex: 1 1 auto;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
  text-align: left;
}
.bx-menu-item-content-wrapped[_ngcontent-%COMP%] {
  white-space: normal;
  overflow: visible;
  text-overflow: clip;
  overflow-wrap: anywhere;
}
.bx-menu-item-shortcut[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.15rem;
  margin-left: 1.5rem;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.bx-menu-item-shortcut[_ngcontent-%COMP%]   kbd[_ngcontent-%COMP%] {
  font-family: inherit;
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
  color: inherit;
}`]})};var J$2=class r{elementRef=p$1(se$1);overlay=p$1(_u);positionBuilder=p$1(g_);a11y=p$1(or);zone=p$1(W$1);id=`bx-tooltip-${t6()}`;bxTooltip=re$2.required();placement=re$2(`bottom`);overlayRef=null;transition;disconnectTheme;positionSubscription;keyboardSubscription;revision=0;hovered=!1;focused=!1;constructor(){p$1(te$2).onDestroy(()=>this.dispose())}show(){if(!this.bxTooltip())return;let t=++this.revision;if(!this.overlayRef){let i=this.positionBuilder.getElementStrategy(this.elementRef.nativeElement,this.placement()).withFlexibleDimensions(!1);this.overlayRef=this.overlay.create({positionStrategy:i,scrollStrategy:this.overlay.scrollStrategies.reposition(),hasBackdrop:!1,panelClass:`bx-tooltip-pane`});let a=this.overlayRef.overlayElement;a.id=this.id,a.setAttribute(`role`,`tooltip`),this.disconnectTheme=this.zone.runOutsideAngular(()=>r6(this.elementRef.nativeElement,a));let h=this.overlayRef.attach(new Im(Z$2));a.style.pointerEvents=`none`,this.keyboardSubscription=this.overlayRef.keydownEvents().subscribe(D=>this.onEscape(D)),h.setInput(`text`,this.bxTooltip()),h.changeDetectorRef.detectChanges();let P=()=>{let D=this.elementRef.nativeElement.getBoundingClientRect(),ne=a.getBoundingClientRect();a.style.setProperty(`--bx-tooltip-arrow-x`,`${D.left+D.width/2-ne.left}px`),a.style.setProperty(`--bx-tooltip-arrow-y`,`${D.top+D.height/2-ne.top}px`),this.transition?.refresh()};this.positionSubscription=i.positionChanges.subscribe(P),this.overlayRef.updatePosition(),P(),this.a11y.isReducedMotion()||(this.transition=this.zone.runOutsideAngular(()=>Gk(this.elementRef.nativeElement,a)))}let e=this.elementRef.nativeElement,n=new Set((e.getAttribute(`aria-describedby`)??``).split(/\s+/).filter(Boolean));n.add(this.id),e.setAttribute(`aria-describedby`,[...n].join(` `)),Promise.resolve(this.zone.runOutsideAngular(()=>this.transition?.enter())).catch(()=>{t===this.revision&&(this.transition?.destroy(),this.transition=void 0)})}hide(){let t=++this.revision;if(this.removeDescription(),!this.overlayRef)return;let e=this.transition;e&&!this.a11y.isReducedMotion()?this.zone.runOutsideAngular(()=>e.exit()).then(()=>{t===this.revision&&this.dispose()}).catch(()=>{t===this.revision&&this.dispose()}):this.dispose()}onEnter(){this.hovered=!0,this.show()}onLeave(){this.hovered=!1,this.focused||this.hide()}onFocus(){this.focused=!0,this.show()}onBlur(t){t.relatedTarget instanceof Node&&this.elementRef.nativeElement.contains(t.relatedTarget)||(this.focused=!1,this.hovered||this.hide())}onEscape(t){t.key===`Escape`&&this.overlayRef&&(t.stopPropagation(),this.hovered=!1,this.focused=!1,this.hide())}removeDescription(){let t=this.elementRef.nativeElement,e=(t.getAttribute(`aria-describedby`)??``).split(/\s+/).filter(n=>n&&n!==this.id);e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}dispose(){this.removeDescription(),this.keyboardSubscription?.unsubscribe(),this.keyboardSubscription=void 0,this.positionSubscription?.unsubscribe(),this.positionSubscription=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0,this.transition?.destroy(),this.transition=void 0,this.overlayRef?.dispose(),this.overlayRef=null}static ɵfac=function(e){return new(e||r)};static ɵdir=Y({type:r,selectors:[[``,`bxTooltip`,``]],hostBindings:function(e,n){e&1&&Kn(`mouseenter`,function(){return n.onEnter()})(`mouseleave`,function(){return n.onLeave()})(`focusin`,function(){return n.onFocus()})(`focusout`,function(a){return n.onBlur(a)})},inputs:{bxTooltip:[1,`bxTooltip`],placement:[1,`placement`]}})};var Oe$1=class r{elementRef=p$1(se$1);overlay=p$1(_u);positionBuilder=p$1(g_);a11y=p$1(or);zone=p$1(W$1);vcr=p$1(_t$1);isBrowser=$e$1(p$1(De$1));_isOpen=E(!1);overlayId=E(null);isOpen=this._isOpen.asReadonly();_state=E(`closed`);state=this._state.asReadonly();bxDropdown=re$2.required();placement=re$2(`bottom`);bxTransition=re$2(`fade`);overlayRef=null;transition=null;subscriptions=new oe$1;revision=0;disconnectTheme;constructor(){p$1(te$2).onDestroy(()=>{++this.revision,this.dispose()}),ke(()=>{this.a11y.isReducedMotion()&&this.transition&&(++this.revision,this.transition.destroy(),this.transition=null,this.isOpen()?this._state.set(`open`):this.dispose())})}toggle(t){this.isDisabled()||(t?.stopPropagation(),this.isOpen()?this.close():this.open())}onTriggerKeydown(t){if(this.bxTransition()===`none`||this.isDisabled()||this.isEditing(t.target)||t.key!==`ArrowDown`&&t.key!==`ArrowUp`)return;t.preventDefault(),t.stopPropagation(),this.open();let e=this.menuItems();(t.key===`ArrowUp`?e[e.length-1]:e[0])?.focus({preventScroll:!0})}open(){if(!this.isBrowser||this.isOpen()||this.isDisabled())return;let t=++this.revision;this._isOpen.set(!0),this._state.set(`opening`),this.overlayRef||this.attachOverlay();let e=this.overlayRef;if(e)if(e.overlayElement.inert=!1,e.overlayElement.style.removeProperty(`pointer-events`),this.bxTransition()!==`none`&&!this.a11y.isReducedMotion()){let n=this.transition??=this.zone.runOutsideAngular(()=>Gk(this.elementRef.nativeElement,e.overlayElement));this.zone.runOutsideAngular(()=>n.enter()).then(()=>{t===this.revision&&this.isOpen()&&this.zone.run(()=>this._state.set(`open`))}).catch(()=>{t===this.revision&&this.isOpen()&&(this.transition?.destroy(),this.transition=null,this._state.set(`open`))})}else this._state.set(`open`)}close(t=!1){if(!this.overlayRef||!this.isOpen())return;let e=++this.revision,n=this.overlayRef;this._isOpen.set(!1),this._state.set(`closing`);let i=this.elementRef.nativeElement;(t||n.overlayElement.contains(i.ownerDocument.activeElement))&&i.focus({preventScroll:!0}),n.overlayElement.inert=!0,n.overlayElement.style.pointerEvents=`none`;let a=this.transition;a&&!this.a11y.isReducedMotion()?this.zone.runOutsideAngular(()=>a.exit()).then(()=>{e===this.revision&&!this.isOpen()&&this.zone.run(()=>this.dispose())}).catch(()=>{e===this.revision&&!this.isOpen()&&this.dispose()}):this.dispose()}onDocumentClick(t){if(!this.overlayRef?.hasAttached()||!this.isOpen())return;let e=t.target;if(!e||this.elementRef.nativeElement.contains(e))return;(!this.overlayRef.overlayElement.contains(e)||this.bxTransition()===`none`||e instanceof Element&&e.closest(`button, a, [role="menuitem"]`))&&this.close()}attachOverlay(){let t=this.positionBuilder.getElementStrategy(this.elementRef.nativeElement,this.placement(),4),e=this.overlay.create({positionStrategy:t,scrollStrategy:this.overlay.scrollStrategies.reposition(),hasBackdrop:this.bxTransition()===`none`,backdropClass:`cdk-overlay-transparent-backdrop`});this.overlayRef=e,this.overlayId.set(e.overlayElement.id||null),this.disconnectTheme=this.zone.runOutsideAngular(()=>r6(this.elementRef.nativeElement,e.overlayElement)),this.subscriptions=new oe$1,this.subscriptions.add(e.backdropClick().subscribe(()=>this.close())),this.subscriptions.add(e.outsidePointerEvents().subscribe(i=>{this.elementRef.nativeElement.contains(i.target)||this.close()})),this.subscriptions.add(e.keydownEvents().subscribe(i=>{i.key===`Escape`&&this.isOpen()?(i.preventDefault(),i.stopPropagation(),this.close(!0)):!i.defaultPrevented&&this.bxTransition()!==`none`&&this.isOpen()&&this.navigateMenu(i)})),this.subscriptions.add(t.positionChanges.subscribe(()=>{this.zone.runOutsideAngular(()=>this.transition?.refresh())})),e.attach(new Qs(this.bxDropdown(),this.vcr)).detectChanges(),e.updatePosition()}isDisabled(){let t=this.elementRef.nativeElement;return t.hasAttribute(`disabled`)||t.getAttribute(`aria-disabled`)===`true`}menuItems(){let t=this.overlayRef?.overlayElement;return t?Array.from(t.querySelectorAll(`button, a[href], [role="menuitem"]`)).filter(e=>{if(e.matches(`:disabled, [disabled], [aria-disabled="true"], .is-disabled`)||e.closest(`[hidden], [inert], [aria-hidden="true"]`))return!1;let n=e.ownerDocument.defaultView?.getComputedStyle(e);return n?.display!==`none`&&n?.visibility!==`hidden`&&e.getClientRects().length>0}):[]}navigateMenu(t){if(this.isEditing(t.target)||!(t.target instanceof Node)||!this.overlayRef?.overlayElement.contains(t.target)||![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(t.key))return;let e=this.menuItems();if(!e.length)return;let n=e.indexOf(this.elementRef.nativeElement.ownerDocument.activeElement),i;t.key===`Home`?i=0:t.key===`End`?i=e.length-1:t.key===`ArrowDown`?i=n<0?0:(n+1)%e.length:i=n<0?e.length-1:(n-1+e.length)%e.length,t.preventDefault(),t.stopPropagation(),e[i].focus({preventScroll:!0})}isEditing(t){return t instanceof Element&&!!t.closest(`input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="textbox"]`)}dispose(){this.disconnectTheme?.(),this.disconnectTheme=void 0,this.transition?.destroy(),this.transition=null,this.subscriptions.unsubscribe(),this.overlayRef?.dispose(),this.overlayRef=null,this.overlayId.set(null),this._isOpen.set(!1),this._state.set(`closed`)}static ɵfac=function(e){return new(e||r)};static ɵdir=Y({type:r,selectors:[[``,`bxDropdown`,``]],hostVars:3,hostBindings:function(e,n){e&1&&Kn(`click`,function(a){return n.toggle(a)})(`keydown`,function(a){return n.onTriggerKeydown(a)})(`click`,function(a){return n.onDocumentClick(a)},yI),e&2&&Tn(`aria-expanded`,n.isOpen())(`aria-haspopup`,`menu`)(`aria-controls`,n.overlayId())},inputs:{bxDropdown:[1,`bxDropdown`],placement:[1,`placement`],bxTransition:[1,`bxTransition`]},exportAs:[`bxDropdown`]})};var Pe=class r{overlay=p$1(_u);positionBuilder=p$1(g_);elementRef=p$1(se$1);a11y=p$1(or);zone=p$1(W$1);vcr=p$1(_t$1);bxContextMenu=re$2.required();overlayRef=null;transition;point;disconnectTheme;subscriptions=new oe$1;revision=0;constructor(){p$1(te$2).onDestroy(()=>{++this.revision,this.dispose()})}open(t){t.preventDefault(),this.openAt(t.clientX,t.clientY)}close(t=!1){if(!this.overlayRef)return;let e=++this.revision;(t||this.overlayRef.overlayElement.contains(this.elementRef.nativeElement.ownerDocument.activeElement))&&this.elementRef.nativeElement.focus({preventScroll:!0}),this.overlayRef.overlayElement.inert=!0;let n=this.transition;n&&!this.a11y.isReducedMotion()?this.zone.runOutsideAngular(()=>n.exit()).then(()=>{e===this.revision&&this.dispose()}).catch(()=>{e===this.revision&&this.dispose()}):this.dispose()}onKey(t){if(t.key!==`ContextMenu`&&!(t.shiftKey&&t.key===`F10`))return;t.preventDefault();let e=this.elementRef.nativeElement.getBoundingClientRect();this.openAt(e.left+Math.min(24,e.width/2),e.bottom),this.items()[0]?.focus()}onDocumentClick(t){let e=t.target;e&&this.overlayRef?.overlayElement.contains(e)&&e.closest(`button, a, [role="menuitem"]`)&&this.close()}openAt(t,e){this.dispose(),++this.revision;let n=this.elementRef.nativeElement;this.overlayRef=this.overlay.create({positionStrategy:this.positionBuilder.getCoordinateStrategy(t,e),scrollStrategy:this.overlay.scrollStrategies.close(),hasBackdrop:!0,backdropClass:`cdk-overlay-transparent-backdrop`}),this.subscriptions=new oe$1,this.subscriptions.add(this.overlayRef.backdropClick().subscribe(()=>this.close())),this.subscriptions.add(this.overlayRef.detachments().subscribe(()=>this.dispose())),this.subscriptions.add(this.overlayRef.keydownEvents().subscribe(h=>this.onMenuKey(h)));let i=this.overlayRef.overlayElement;if(this.disconnectTheme=this.zone.runOutsideAngular(()=>r6(n,i)),this.overlayRef.attach(new Qs(this.bxContextMenu(),this.vcr)).detectChanges(),this.overlayRef.updatePosition(),!this.a11y.isReducedMotion()){let h=n.ownerDocument.createElement(`span`);h.setAttribute(`aria-hidden`,`true`),Object.assign(h.style,{position:`fixed`,left:`${t}px`,top:`${e}px`,width:`1px`,height:`1px`,pointerEvents:`none`}),n.ownerDocument.body.append(h),this.point=h;let P=this.zone.runOutsideAngular(()=>Gk(h,i));this.transition=P,this.zone.runOutsideAngular(()=>P.enter()).catch(()=>{this.transition?.destroy(),this.transition=void 0})}}items(){return Array.from(this.overlayRef?.overlayElement.querySelectorAll(`button:not(:disabled), a[href], [role="menuitem"]`)??[]).filter(t=>!t.matches(`[disabled], [aria-disabled="true"]`)&&!t.closest(`[hidden], [inert]`))}onMenuKey(t){if(t.key===`Escape`){t.preventDefault(),t.stopPropagation(),this.close(!0);return}if(t.target?.closest(`input,textarea,[contenteditable="true"]`)||![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(t.key))return;let e=this.items();if(!e.length)return;t.preventDefault();let n=e.indexOf(this.elementRef.nativeElement.ownerDocument.activeElement);e[t.key===`Home`?0:t.key===`End`?e.length-1:t.key===`ArrowDown`?(n+1)%e.length:n<0?e.length-1:(n-1+e.length)%e.length].focus()}dispose(){this.subscriptions.unsubscribe(),this.disconnectTheme?.(),this.disconnectTheme=void 0,this.transition?.destroy(),this.transition=void 0,this.point?.remove(),this.point=void 0;let t=this.overlayRef;this.overlayRef=null,t?.dispose()}static ɵfac=function(e){return new(e||r)};static ɵdir=Y({type:r,selectors:[[``,`bxContextMenu`,``]],hostBindings:function(e,n){e&1&&Kn(`contextmenu`,function(a){return n.open(a)})(`keydown`,function(a){return n.onKey(a)})(`click`,function(a){return n.onDocumentClick(a)},yI)},inputs:{bxContextMenu:[1,`bxContextMenu`]}})};var Le=[`errorText`];var Ke=[`*`,[[`bx-error`]]];var Ve=[`*`,`bx-error`];function Qe(r,t){r&1&&(Fl(0,`span`,8),FA(1,`*`),jh())}function Xe(r,t){if(r&1&&(Fl(0,`button`,9),Jl(1,`bx-icon`,11),jh()),r&2){let e=lA(2);ab(`bxTooltip`,e.tooltip())}}function Ge(r,t){r&1&&Jl(0,`bx-icon`,10)}function $e(r,t){if(r&1&&(Fl(0,`div`,2)(1,`label`,7),FA(2),WT(3,Qe,2,0,`span`,8),jh(),WT(4,Xe,2,1,`button`,9),WT(5,Ge,1,0,`bx-icon`,10),jh()),r&2){let e=lA();CC(),Tn(`for`,e.forId()),CC(),$h(` `,e.resolvedLabel(),` `),CC(),ZT(e.required()?3:-1),CC(),ZT(e.tooltip()?4:-1),CC(),ZT(e.loading()?5:-1)}}function We(r,t){if(r&1&&(Fl(0,`button`,4),Jl(1,`bx-icon`,11),jh()),r&2){let e=lA();ab(`bxTooltip`,e.tooltip()),Tn(`aria-label`,`More information`)}}function Ye(r,t){if(r&1&&(Fl(0,`div`,12),Jl(1,`bx-icon`,13),Fl(2,`span`,14,0),FA(4),jh()()),r&2){let e=lA();Xn(`bx-animated`,e.isAnimated()),CC(4),Mb(e.resolvedError())}}var ee$2=class r{i18n=p$1(KY,{optional:!0});a11y=p$1(or);element=p$1(se$1).nativeElement;lighting=p$1(M_);projectedError=uz(K$2,{read:se$1});errorElement=cz(`errorText`);resolvedLabel=Q$1(()=>this.resolveText(this.label()));resolvedError=Q$1(()=>this.resolveText(this.error()));inline=re$2(!1);label=re$2(void 0);tooltip=re$2(void 0);error=re$2(void 0);required=re$2(!1);loading=re$2(!1);forId=re$2(``);isAnimated=Q$1(()=>!this.a11y.isReducedMotion());constructor(){fz(t=>{let e=this.projectedError()?.nativeElement,n=this.resolvedError()?this.errorElement()?.nativeElement:e;if(!n)return;let i=this.element.parentElement,a=this.element.closest(`form, fieldset`)??(i?.tagName.startsWith(`BX-`)?i.parentElement:i);if(!a)return;let h=this.element.querySelector(`.bx-field-control > [data-bx-surface]`),P=this.lighting.register(a,{element:h??n,edge:h?`bottom`:void 0,offsetX:.5,offsetY:h?1:0,z:32,color:`var(--bx-text-danger)`,intensity:.9,radius:240});t(()=>P.destroy())})}resolveText(t){if(this.i18n?.version?.(),!!t)return QY(t)?this.i18n?.translate(t.key)??t.key:t}static ɵfac=function(e){return new(e||r)};static ɵcmp=Zn({type:r,selectors:[[`bx-form-field`]],contentQueries:function(e,n,i){e&1&&pb(i,n.projectedError,K$2,5,se$1),e&2&&dA()},viewQuery:function(e,n){e&1&&mb(n.errorElement,Le,5),e&2&&dA()},inputs:{inline:[1,`inline`],label:[1,`label`],tooltip:[1,`tooltip`],error:[1,`error`],required:[1,`required`],loading:[1,`loading`],forId:[1,`forId`]},ngContentSelectors:Ve,decls:8,vars:8,consts:[[`errorText`,``],[1,`bx-field-wrapper`],[1,`bx-field-header`],[1,`bx-field-control`],[`type`,`button`,`placement`,`top`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[1,`bx-field-error-projected`],[1,`bx-field-error`,3,`bx-animated`],[1,`bx-field-label`],[1,`bx-field-required`],[`type`,`button`,`placement`,`top`,`aria-label`,`More information`,1,`bx-field-tooltip-trigger`,3,`bxTooltip`],[`name`,`loader`,`size`,`16`,1,`bx-spin`],[`name`,`help-circle`,`size`,`16`],[1,`bx-field-error`],[`name`,`alert-circle`,`size`,`16`],[1,`bx-field-error-text`]],template:function(e,n){e&1&&(fb(Ke),Fl(0,`div`,1),WT(1,$e,6,5,`div`,2),Fl(2,`div`,3),hb(3),WT(4,We,2,2,`button`,4),jh(),Fl(5,`div`,5),hb(6,1),jh(),WT(7,Ye,5,3,`div`,6),jh()),e&2&&(Xn(`is-invalid`,!!n.resolvedError()||!!n.projectedError()),Tn(`data-bx-field-invalid`,!!n.resolvedError()||!!n.projectedError()),CC(),ZT(n.resolvedLabel()||n.tooltip()&&!n.inline()?1:-1),CC(),Xn(`bx-field-control-inline`,n.inline()),CC(2),ZT(n.inline()&&n.tooltip()?4:-1),CC(3),ZT(n.resolvedError()?7:-1))},dependencies:[Xb,R_,J$2],styles:[`
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
}`]})};var Ue=[`inputElement`];function Ze(r,t){if(r&1){let e=oA();Fl(0,`button`,6),Kn(`click`,function(){ly(e);let i=lA();return cy(i.clear())}),Jl(1,`bx-icon`,7),jh()}if(r&2){let e=lA();ab(`disabled`,e.isDisabled())}}var De=class r extends C_{i18n=p$1(KY,{optional:!0});inputId=Q$1(()=>`bx-search-${Math.random().toString(36).substr(2,9)}`);resolvedPlaceholder=Q$1(()=>{this.i18n?.version?.();let t=this.placeholder();return t?QY(t)?this.i18n?.translate(t.key)??t.key:t:``});search=lz();inputElement;clear(){this.isDisabled()||(this.updateValue(``),this.search.emit(``),this.focus())}focus(){this.inputElement?.nativeElement.focus()}onInput(t){let e=t.target;this.updateValue(e.value),this.search.emit(e.value)}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let t;return function(n){return(t||(t=In(r)))(n||r)}})();static ɵcmp=Zn({type:r,selectors:[[`bx-search-input`]],viewQuery:function(e,n){if(e&1&&Uh(Ue,5),e&2){let i;ic(i=oc())&&(n.inputElement=i.first)}},outputs:{search:`search`},features:[Ye$1],decls:6,vars:17,consts:[[`inputElement`,``],[3,`label`,`tooltip`,`error`,`loading`,`required`,`forId`],[`bxSurface`,``,1,`bx-search-input-wrapper`],[`name`,`search`,`size`,`16`,1,`bx-search-icon-left`],[`type`,`text`,1,`bx-native-search-input`,3,`input`,`blur`,`disabled`,`value`],[`type`,`button`,`aria-label`,`Clear search`,1,`bx-search-clear-btn`,3,`disabled`],[`type`,`button`,`aria-label`,`Clear search`,1,`bx-search-clear-btn`,3,`click`,`disabled`],[`name`,`x`,`size`,`16`]],template:function(e,n){e&1&&(Fl(0,`bx-form-field`,1)(1,`div`,2),Jl(2,`bx-icon`,3),Fl(3,`input`,4,0),Kn(`input`,function(a){return n.onInput(a)})(`blur`,function(){return n.onBlur()}),jh(),WT(5,Ze,2,1,`button`,5),jh()()),e&2&&(ab(`label`,n.label())(`tooltip`,n.tooltip())(`error`,n.errorMessage)(`loading`,n.loading())(`required`,n.required())(`forId`,n.inputId()),CC(),Xn(`is-invalid`,!!n.errorMessage)(`is-disabled`,n.isDisabled()),CC(2),ab(`disabled`,n.isDisabled())(`value`,n.internalValue()||``),Tn(`id`,n.inputId())(`placeholder`,n.resolvedPlaceholder())(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()),CC(2),ZT(n.internalValue()?5:-1))},dependencies:[E_,Xb,ee$2,R_],styles:[`
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
}`],changeDetection:1})};function ee$1(r,n){r&1&&(Fl(0,`span`,6),FA(1,`*`),jh())}function ne(r,n){if(r&1&&(Fl(0,`span`,5),FA(1),WT(2,ee$1,2,0,`span`,6),jh()),r&2){let t=lA();CC(),$h(` `,t.resolvedLabel(),` `),CC(),ZT(t.required()?2:-1)}}var H$1=class r{radios=new Set;select(n){for(let t of this.radios)t!==n&&t.sharesGroup(n)&&t.writeValue(n.value())}static ɵfac=function(t){return new(t||r)};static ɵprov=_$2({token:r,factory:r.ɵfac,providedIn:`root`})};var K$1=class r extends C_{registry=p$1(H$1);element=p$1(se$1).nativeElement;i18n=p$1(KY,{optional:!0});inputId=Q$1(()=>`bx-radio-${t6()}`);resolvedLabel=Q$1(()=>{this.i18n?.version?.();let n=this.label();if(n)return QY(n)?this.i18n?.translate(n.key)??n.key:n});value=re$2.required();name=re$2(``);showTooltip=!1;constructor(){super(),this.registry.radios.add(this),p$1(te$2).onDestroy(()=>this.registry.radios.delete(this))}sharesGroup(n){let t=this.ngControl?.control;return t&&t===n.ngControl?.control?!0:!!this.name()&&this.name()===n.name()&&this.element.closest(`form`)===n.element.closest(`form`)&&t?.parent===n.ngControl?.control?.parent}onSelect(){this.isDisabled()||(this.updateValue(this.value()),this.registry.select(this))}onBlur(){this.markAsTouched()}static ɵfac=function(t){return new(t||r)};static ɵcmp=Zn({type:r,selectors:[[`bx-radio`]],inputs:{value:[1,`value`],name:[1,`name`]},features:[Ye$1],decls:6,vars:18,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[1,`bx-inline-wrapper`],[`type`,`radio`,1,`bx-visually-hidden`,3,`change`,`blur`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-radio-circle`],[1,`bx-radio-inner`],[1,`bx-inline-label`],[1,`bx-inline-required`]],template:function(t,e){t&1&&(Fl(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),Kn(`change`,function(){return e.onSelect()})(`blur`,function(){return e.onBlur()}),jh(),Fl(3,`div`,3),Jl(4,`div`,4),jh(),WT(5,ne,3,2,`span`,5),jh()()),t&2&&(ab(`inline`,!0)(`tooltip`,e.tooltip())(`error`,e.errorMessage)(`loading`,e.loading())(`forId`,e.inputId()),CC(),Xn(`is-disabled`,e.isDisabled()),CC(),ab(`disabled`,e.isDisabled())(`checked`,e.internalValue()===e.value()),Tn(`id`,e.inputId())(`name`,e.name()||null)(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel()),CC(),Xn(`is-checked`,e.internalValue()===e.value())(`is-invalid`,!!e.errorMessage),CC(2),ZT(e.resolvedLabel()?5:-1))},dependencies:[E_,Xb,ee$2],styles:[`
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
  transition: border-color 0.15s ease;
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
}`],changeDetection:1})};function te$1(r,n){r&1&&(Fl(0,`span`,6),FA(1,`*`),jh())}function re$1(r,n){if(r&1&&(Fl(0,`span`,5),FA(1),WT(2,te$1,2,0,`span`,6),jh()),r&2){let t=lA();CC(),$h(` `,t.resolvedLabel(),` `),CC(),ZT(t.required()?2:-1)}}var Z$1=class r extends C_{i18n=p$1(KY,{optional:!0});inputId=Q$1(()=>`bx-slide-toggle-${t6()}`);resolvedLabel=Q$1(()=>{this.i18n?.version?.();let n=this.label();if(n)return QY(n)?this.i18n?.translate(n.key)??n.key:n});onToggle(n){let t=n.target;this.updateValue(t.checked)}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let n;return function(e){return(n||(n=In(r)))(e||r)}})();static ɵcmp=Zn({type:r,selectors:[[`bx-slide-toggle`]],features:[Ye$1],decls:6,vars:17,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,1,`bx-visually-hidden`,3,`change`,`blur`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-slide-toggle-track`],[1,`bx-slide-toggle-thumb`],[1,`bx-inline-label`],[1,`bx-inline-required`]],template:function(t,e){t&1&&(Fl(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),Kn(`change`,function(o){return e.onToggle(o)})(`blur`,function(){return e.onBlur()}),jh(),Fl(3,`div`,3),Jl(4,`div`,4),jh(),WT(5,re$1,3,2,`span`,5),jh()()),t&2&&(ab(`inline`,!0)(`tooltip`,e.tooltip())(`error`,e.errorMessage)(`loading`,e.loading())(`forId`,e.inputId()),CC(),Xn(`is-disabled`,e.isDisabled()),CC(),ab(`disabled`,e.isDisabled())(`checked`,e.internalValue()===!0),Tn(`id`,e.inputId())(`data-testid`,e.dataTestId())(`aria-label`,e.ariaLabel()),CC(),Xn(`is-checked`,e.internalValue()===!0)(`is-invalid`,!!e.errorMessage),CC(2),ZT(e.resolvedLabel()||e.tooltip()?5:-1))},dependencies:[E_,Xb,ee$2],styles:[`
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
}`],changeDetection:1})};var J$1=class r{element=p$1(se$1);theme=p$1(lr);shell;thumb;constructor(){OI(()=>this.sync());let n=p$1(W$1),t=p$1(te$2);Pt$1(()=>{let e=this.element.nativeElement,i=e.ownerDocument.createElement(`span`);i.className=`bx-slider-shell`;let o=e.ownerDocument.createElement(`span`);o.className=`bx-slider-thumb`,o.setAttribute(`aria-hidden`,`true`),e.before(i),i.append(e,o),this.shell=i,this.thumb=o,this.sync();let h=()=>{i.style.setProperty(`--bx-slider-center-y`,`${e.offsetTop+e.offsetHeight/2}px`),i.style.setProperty(`--bx-slider-track-start`,`${e.offsetLeft}px`),i.style.setProperty(`--bx-slider-track-width`,`${e.offsetWidth}px`),gm(o)},R=new ResizeObserver(h);n.runOutsideAngular(()=>{R.observe(e),R.observe(i),h()});let Q=n.runOutsideAngular(()=>qk(o,d=>{let v=d.reflectionStrength>d.strength,z=v?d.reflectionStrength:d.strength;z<=.04?(o.style.removeProperty(`--bx-slider-light-color`),o.style.removeProperty(`--bx-slider-light-strength`)):(o.style.setProperty(`--bx-slider-light-color`,v?d.reflection:d.color),o.style.setProperty(`--bx-slider-light-strength`,String(z))),o.style.setProperty(`--bx-slider-light-x`,`${v?d.reflectionX:d.x}%`),o.style.setProperty(`--bx-slider-light-y`,`${v?d.reflectionY:d.y}%`)},e));t.onDestroy(()=>{R.disconnect(),Q(),i.replaceWith(e),this.shell=this.thumb=void 0})})}sync(){let n=this.element.nativeElement,t=n.min===``?0:Number(n.min),e=n.max===``?100:Number(n.max),i=e>t?Math.max(0,Math.min(100,(n.valueAsNumber-t)/(e-t)*100)):0,o=`${Number.isFinite(i)?i:0}%`;if(n.style.getPropertyValue(`--bx-slider-progress`)!==o&&n.style.setProperty(`--bx-slider-progress`,o),this.shell){let h=String((n.matches(`:dir(rtl)`)?100-(Number.isFinite(i)?i:0):Number.isFinite(i)?i:0)/100);this.shell.style.getPropertyValue(`--bx-slider-position`)!==h&&(this.shell.style.setProperty(`--bx-slider-position`,h),this.thumb&&gm(this.thumb))}}static ɵfac=function(t){return new(t||r)};static ɵdir=Y({type:r,selectors:[[`input`,`type`,`range`,`bxSlider`,``]],hostAttrs:[1,`bx-slider`],hostBindings:function(t,e){t&1&&Kn(`input`,function(){return e.sync()})}})};var e=[{id:`button`,title:`Button`,group:`Forms`,readme:`projects/blocks/forms/components/button/README.md`,symbol:`Button`,package:`@filip.mazev/blocks/forms`,selector:`button[bx-button]`,description:`An action control with Blocks intent colors, familiar variants and visible focus.`,example:`<button bx-button variant="filled" (click)="save()">Save changes</button>`},{id:`checkbox`,title:`Checkbox`,group:`Forms`,readme:`projects/blocks/forms/components/checkbox/README.md`,symbol:`Checkbox`,package:`@filip.mazev/blocks/forms`,selector:`bx-checkbox`,description:`A boolean choice integrated with Angular forms.`,example:`<bx-checkbox label="Receive updates" [formControl]="updates" />`},{id:`form-field`,title:`Form field`,group:`Forms`,readme:`projects/blocks/forms/components/form-field/README.md`,symbol:`FormField`,package:`@filip.mazev/blocks/forms`,selector:`bx-form-field`,description:`A shared label, help text, validation and loading frame for controls.`,example:`<bx-form-field label="Project name" forId="project" [required]="true" [error]="error">
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
<button bx-button (click)="openModal()">Open modal backdrop</button>`},{id:`modal-banner`,title:`Modal banner`,group:`Modals`,readme:`projects/blocks/modal/components/shared/ui/banner/README.md`,symbol:`ModalBanner`,package:`@filip.mazev/blocks/modal`,selector:`bx-modal-banner`,description:`The shared modal heading, semantic icon and close action.`,example:`<bx-modal-banner [header]="{ text: 'Project settings' }" [showCloseButton]="true" (close)="handleClose($event)" />`},{id:`toast-core`,title:`Toast core`,group:`Notifications`,readme:`projects/blocks/toastr/components/README.md`,symbol:`ToastCore, ToastrService`,package:`@filip.mazev/blocks/toastr`,selector:`service-owned view`,description:`The toast lifecycle host with progress, dismissal and content composition.`,example:`<button bx-button (click)="notify()">Show notification</button>`},{id:`simple-toast`,title:`Simple toast`,group:`Notifications`,readme:`projects/blocks/toastr/components/views/simple-toast/README.md`,symbol:`SimpleToast, ToastrService`,package:`@filip.mazev/blocks/toastr`,selector:`service-owned view`,description:`A notification with a semantic icon, optional title and message.`,example:`<button bx-button (click)="notify()">Show success</button>`},{id:`surface`,title:`Surface effects`,group:`Primitives`,readme:`projects/blocks/effects/README.md`,symbol:`BxSurfaceDirective`,package:`@filip.mazev/blocks/effects`,selector:`[bxSurface]`,description:`Apply the shared glass material to a custom surface while inheriting application settings.`,example:`<section bxSurface>Custom content follows the global appearance settings.</section>`},{id:`modal-header`,title:`Modal header`,group:`Modals`,readme:`projects/blocks/modal/directives/header/README.md`,symbol:`ModalHeaderDirective`,package:`@filip.mazev/blocks/modal`,selector:`[appModalHeader]`,description:`Projects custom header content into the active Blocks modal layout.`,example:`<div *appModalHeader>Custom header content</div>`},{id:`modal-footer`,title:`Modal footer`,group:`Modals`,readme:`projects/blocks/modal/directives/footer/README.md`,symbol:`ModalFooterDirective`,package:`@filip.mazev/blocks/modal`,selector:`[appModalFooter]`,description:`Projects custom footer content into the active Blocks modal layout.`,example:`<div *appModalFooter>Custom footer content</div>`}];var I=new C(`HIGHLIGHT_OPTIONS`);function rt(e){return Gt$1([{provide:I,useValue:e}])}var h=(function(e){return e.FULL_WITH_CORE_LIBRARY_IMPORTS=`The full library and the core library were imported, only one of them should be imported!`,e.FULL_WITH_LANGUAGE_IMPORTS=`The highlighting languages were imported they are not needed!`,e.CORE_WITHOUT_LANGUAGE_IMPORTS=`The highlighting languages were not imported!`,e.LANGUAGE_WITHOUT_CORE_IMPORTS=`The core library was not imported!`,e.NO_FULL_AND_NO_CORE_IMPORTS=`Highlight.js library was not imported!`,e})(h||{});var V=(()=>{class e{constructor(){this.document=p$1(B),this.isPlatformBrowser=$e$1(p$1(De$1)),this.options=p$1(I,{optional:!0}),this._ready=new Pe$1(null),this.ready=nE(this._ready.asObservable().pipe(xe$1(t=>!!t))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(Ke$1(t=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=t,this.loadLineNumbers().pipe(it(i=>{i.activateLineNumbers(),this._ready.next(t)}))):(this._ready.next(t),Le$1)),Cr(t=>(console.error(`[HLJS] `,t),this._ready.error(t),Le$1))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return qu(()=>h.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return qu(()=>h.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return qu(()=>h.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return qu(()=>h.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(Ke$1(t=>this._loadLanguages(t)))}return qu(()=>h.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(t){let i=Object.entries(this.options.languages).map(([s,G])=>_(G()).pipe(it(W=>t.registerLanguage(s,W))));return zu(i).pipe(le$1(()=>t))}loadCoreLibrary(){return _(this.options.coreLibraryLoader())}loadFullLibrary(){return _(this.options.fullLibraryLoader())}loadLineNumbers(){return ce(this.options.lineNumbersLoader())}setTheme(t){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=t:this.loadTheme(t))}loadTheme(t){this._themeLinkElement=this.document.createElement(`link`),this._themeLinkElement.href=t,this._themeLinkElement.type=`text/css`,this._themeLinkElement.rel=`stylesheet`,this._themeLinkElement.media=`screen,print`,this.document.head.appendChild(this._themeLinkElement)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵprov=_$2({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();var _=e=>ce(e).pipe(xe$1(o=>!!o?.default),le$1(o=>o.default));var z=(()=>{class e{constructor(){this.loader=p$1(V),this.options=p$1(I,{optional:!0}),this.hljsSignal=E(null),this.hljs=Q$1(()=>this.hljsSignal()),this.loader.ready.then(t=>{this.hljsSignal.set(t),this.options?.highlightOptions&&t.configure(this.options.highlightOptions)})}async highlight(t,i){return(await this.loader.ready).highlight(t,i)}async highlightAuto(t,i){return(await this.loader.ready).highlightAuto(t,i)}async highlightElement(t){(await this.loader.ready).highlightElement(t)}async highlightAll(){(await this.loader.ready).highlightAll()}async configure(t){(await this.loader.ready).configure(t)}async registerLanguage(t,i){(await this.loader.ready).registerLanguage(t,i)}async unregisterLanguage(t){(await this.loader.ready).unregisterLanguage(t)}async registerAliases(t,{languageName:i}){(await this.loader.ready).registerAliases(t,{languageName:i})}async listLanguages(){return(await this.loader.ready).listLanguages()}async getLanguage(t){return(await this.loader.ready).getLanguage(t)}async safeMode(){(await this.loader.ready).safeMode()}async debugMode(){(await this.loader.ready).debugMode()}async lineNumbersBlock(t,i){let s=await this.loader.ready;s.lineNumbersBlock&&s.lineNumbersBlock(t,i)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵprov=_$2({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();var j$1;function q(){if(!j$1)try{j$1=window?.trustedTypes?.createPolicy(`ngx-highlightjs`,{createHTML:e=>e})}catch{}return j$1}function J(e){return q()?.createHTML(e)||e}var U$2=(()=>{class e{constructor(){this._hljs=p$1(z),this._nativeElement=p$1(se$1).nativeElement,this._sanitizer=p$1(gp),fz({write:()=>{let t=this.code();this.setTextContent(t||``),t&&this.highlightElement(t)}}),fz({write:()=>{let t=this.highlightResult();this.setInnerHTML(t?.value),this.highlighted.emit(t)}})}setTextContent(t){requestAnimationFrame(()=>this._nativeElement.textContent=t)}setInnerHTML(t){requestAnimationFrame(()=>this._nativeElement.innerHTML=J(this._sanitizer.sanitize(ue$1.HTML,t)||``))}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵdir=Y({type:e})}}return e})();var ht$1=(()=>{class e extends U$2{constructor(){super(...arguments),this.code=re$2(null,{alias:`highlight`}),this.highlightResult=E(null),this.language=re$2.required(),this.ignoreIllegals=re$2(void 0,{transform:Ae$1}),this.highlighted=lz()}async highlightElement(t){let i=await this._hljs.highlight(t,{language:this.language(),ignoreIllegals:this.ignoreIllegals()});this.highlightResult.set(i)}static{this.ɵfac=(()=>{let t;return function(s){return(t||(t=In(e)))(s||e)}})()}static{this.ɵdir=Y({type:e,selectors:[[``,`highlight`,``]],hostVars:2,hostBindings:function(i,s){i&2&&Xn(`hljs`,!0)},inputs:{code:[1,`highlight`,`code`],language:[1,`language`],ignoreIllegals:[1,`ignoreIllegals`]},outputs:{highlighted:`highlighted`},features:[Lt([{provide:U$2,useExisting:e}]),Ye$1]})}}return e})();function R(r,e){r&1&&Jl(0,`bx-icon`,4)}function A(r,e){r&1&&(Fl(0,`span`,6),FA(1,`*`),jh())}function U$1(r,e){if(r&1&&(Fl(0,`span`,5),FA(1),WT(2,A,2,0,`span`,6),jh()),r&2){let t=lA();CC(),$h(` `,t.resolvedLabel(),` `),CC(),ZT(t.required()?2:-1)}}var L=class r extends C_{i18n=p$1(KY,{optional:!0});inputId=Q$1(()=>`bx-checkbox-${t6()}`);resolvedLabel=Q$1(()=>{this.i18n?.version?.();let e=this.label();if(e)return QY(e)?this.i18n?.translate(e.key)??e.key:e});showTooltip=!1;onToggle(e){let t=e.target;this.updateValue(t.checked)}onBlur(){this.markAsTouched()}static ɵfac=(()=>{let e;return function(n){return(e||(e=In(r)))(n||r)}})();static ɵcmp=Zn({type:r,selectors:[[`bx-checkbox`]],features:[Ye$1],decls:6,vars:18,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[1,`bx-inline-wrapper`],[`type`,`checkbox`,1,`bx-visually-hidden`,3,`change`,`blur`,`disabled`,`checked`],[`bxSurface`,``,1,`bx-checkbox-box`],[`name`,`check`,`size`,`16`],[1,`bx-inline-label`],[1,`bx-inline-required`]],template:function(t,n){t&1&&(Fl(0,`bx-form-field`,0)(1,`label`,1)(2,`input`,2),Kn(`change`,function(a){return n.onToggle(a)})(`blur`,function(){return n.onBlur()}),jh(),Fl(3,`div`,3),WT(4,R,1,0,`bx-icon`,4),jh(),WT(5,U$1,3,2,`span`,5),jh()()),t&2&&(ab(`inline`,!0)(`tooltip`,n.tooltip())(`error`,n.errorMessage)(`loading`,n.loading())(`forId`,n.inputId()),CC(),Xn(`is-disabled`,n.isDisabled()),CC(),ab(`disabled`,n.isDisabled())(`checked`,n.internalValue()===!0),Tn(`id`,n.inputId())(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel()),CC(),Xn(`is-checked`,n.internalValue()===!0)(`is-invalid`,!!n.errorMessage),CC(),ZT(n.internalValue()===!0?4:-1),CC(),ZT(n.resolvedLabel()?5:-1))},dependencies:[E_,Xb,ee$2,R_],styles:[`
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
}`],changeDetection:1})};function H(r,e){r&1&&(Fl(0,`span`,6),FA(1,`*`),jh())}function K(r,e){if(r&1&&(Fl(0,`label`,3),FA(1),WT(2,H,2,0,`span`,6),jh()),r&2){let t=lA();Tn(`for`,t.inputId()),CC(),$h(` `,t.resolvedLabel(),` `),CC(),ZT(t.isFieldRequired()?2:-1)}}function W(r,e){if(r&1){let t=oA();Fl(0,`div`,5)(1,`button`,7),Kn(`mousedown`,function(i){ly(t);let a=lA();return cy(a.startSpin(-1,i))})(`touchstart`,function(i){ly(t);let a=lA();return cy(a.startSpin(-1,i))})(`mouseup`,function(){ly(t);let i=lA();return cy(i.stopSpin())})(`mouseleave`,function(){ly(t);let i=lA();return cy(i.stopSpin())})(`touchend`,function(){ly(t);let i=lA();return cy(i.stopSpin())}),Jl(2,`bx-icon`,8),jh(),Fl(3,`button`,7),Kn(`mousedown`,function(i){ly(t);let a=lA();return cy(a.startSpin(1,i))})(`touchstart`,function(i){ly(t);let a=lA();return cy(a.startSpin(1,i))})(`mouseup`,function(){ly(t);let i=lA();return cy(i.stopSpin())})(`mouseleave`,function(){ly(t);let i=lA();return cy(i.stopSpin())})(`touchend`,function(){ly(t);let i=lA();return cy(i.stopSpin())}),Jl(4,`bx-icon`,9),jh()()}if(r&2){let t=lA();CC(),ab(`disabled`,t.isSpinDownDisabled()),CC(2),ab(`disabled`,t.isSpinUpDisabled())}}var j=class r extends C_{i18n=p$1(KY,{optional:!0});inputId=Q$1(()=>`bx-input-${t6()}`);isFocused=E(!1);isSpinDownDisabled=Q$1(()=>{let e=this.min();return this.isDisabled()||e!==void 0&&(Number(this.internalValue())||0)<=e});isSpinUpDisabled=Q$1(()=>{let e=this.max();return this.isDisabled()||e!==void 0&&(Number(this.internalValue())||0)>=e});isFloating=Q$1(()=>{let e=this.internalValue(),t=e!=null&&e!==``,n=[`date`,`time`,`datetime-local`].includes(this.type());return this.isFocused()||t||n});resolvedPlaceholder=Q$1(()=>{this.i18n?.version?.();let e=this.placeholder();return e?QY(e)?this.i18n?.translate(e.key)??e.key:e:``});resolvedLabel=Q$1(()=>{this.i18n?.version?.();let e=this.label();return e?QY(e)?this.i18n?.translate(e.key)??e.key:e:``});type=re$2(`text`);min=re$2(void 0);max=re$2(void 0);step=re$2(1);spinTimeout;spinInterval;constructor(){super(),p$1(te$2).onDestroy(()=>this.stopSpin())}startSpin(e,t){t.preventDefault(),!this.isDisabled()&&(this.applyStep(e),this.spinTimeout=setTimeout(()=>{this.spinInterval=setInterval(()=>{this.applyStep(e)},50)},400))}stopSpin(){clearTimeout(this.spinTimeout),clearInterval(this.spinInterval)}onInput(e){let t=e.target,n=this.type()===`number`?t.value===``?null:Number(t.value):t.value;this.updateValue(n)}onFocus(){this.isFocused.set(!0)}onBlur(){this.isFocused.set(!1),this.markAsTouched()}applyStep(e){let n=(Number(this.internalValue())||0)+e*this.step(),i=this.min(),a=this.max();i!==void 0&&n<i&&(n=i),a!==void 0&&n>a&&(n=a),this.updateValue(n),this.markAsTouched()}static ɵfac=function(t){return new(t||r)};static ɵcmp=Zn({type:r,selectors:[[`bx-input-field`]],inputs:{type:[1,`type`],min:[1,`min`],max:[1,`max`],step:[1,`step`]},features:[Ye$1],decls:6,vars:25,consts:[[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[`bxSurface`,``,1,`bx-input-wrapper`],[1,`bx-input-container`],[1,`bx-floating-label`],[1,`bx-native-input`,3,`input`,`focus`,`blur`,`disabled`,`value`],[1,`bx-spinners-group`],[1,`bx-field-required`],[`type`,`button`,`tabindex`,`-1`,1,`bx-spin-btn`,3,`mousedown`,`touchstart`,`mouseup`,`mouseleave`,`touchend`,`disabled`],[`name`,`minus`,`size`,`16`],[`name`,`plus`,`size`,`16`]],template:function(t,n){t&1&&(Fl(0,`bx-form-field`,0)(1,`div`,1)(2,`div`,2),WT(3,K,3,3,`label`,3),Fl(4,`input`,4),Kn(`input`,function(a){return n.onInput(a)})(`focus`,function(){return n.onFocus()})(`blur`,function(){return n.onBlur()}),jh()(),WT(5,W,5,2,`div`,5),jh()()),t&2&&(ab(`inline`,!0)(`tooltip`,n.tooltip())(`error`,n.errorMessage)(`loading`,n.loading())(`forId`,n.inputId()),CC(),Xn(`is-invalid`,!!n.errorMessage)(`is-disabled`,n.isDisabled())(`has-spinners`,n.type()===`number`)(`is-floating`,n.isFloating()),CC(2),ZT(n.label()?3:-1),CC(),ab(`disabled`,n.isDisabled())(`value`,n.internalValue()??``),Tn(`id`,n.inputId())(`type`,n.type())(`placeholder`,n.isFloating()?n.resolvedPlaceholder():``)(`data-testid`,n.dataTestId())(`aria-label`,n.ariaLabel())(`min`,n.min())(`max`,n.max())(`step`,n.step()),CC(),ZT(n.type()===`number`?5:-1))},dependencies:[E_,Xb,ee$2,R_],styles:[`
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
}`],changeDetection:1})};var be=[`searchInput`];var pe=[`origin`];var ge=(r,e)=>e.value;function ue(r,e){r&1&&(Fl(0,`span`,9),FA(1,`*`),jh())}function he(r,e){if(r&1&&(Fl(0,`span`,5),FA(1),WT(2,ue,2,0,`span`,9),jh()),r&2){let n=lA();CC(),$h(` `,n.resolvedLabel(),` `),CC(),ZT(n.isFieldRequired()?2:-1)}}function me(r,e){if(r&1&&FA(0),r&2){let n=lA();$h(` `,n.resolvedPlaceholder(),` `)}}function fe(r,e){if(r&1&&FA(0),r&2){let n=lA();$h(` `,n.selectedOptionLabel(),` `)}}function xe(r,e){if(r&1){let n=oA();Fl(0,`div`,11)(1,`bx-search-input`,15,1),Kn(`search`,function(i){ly(n);let a=lA(2);return cy(a.onSearchChange(i))})(`keydown.enter`,function(i){return i.preventDefault()}),jh()()}if(r&2){let n=lA(2);CC(),ab(`placeholder`,n.resolvedSearchPlaceholder())}}function ve(r,e){r&1&&Jl(0,`bx-icon`,19)}function ye(r,e){if(r&1){let n=oA();Fl(0,`bx-menu-item`,16),Kn(`action`,function(){let i=ly(n).$implicit,a=lA(2);return cy(a.selectOption(i))}),Fl(1,`div`,17)(2,`div`,18),WT(3,ve,1,0,`bx-icon`,19),jh(),Fl(4,`span`,20),FA(5),jh()()()}if(r&2){let n=e.$implicit,t=lA(2);ab(`disabled`,n.disabled??!1)(`wrapLabel`,!0),Tn(`aria-selected`,t.internalValue()===n.value),CC(3),ZT(t.internalValue()===n.value?3:-1),CC(),ab(`title`,n.resolvedStr),CC(),Mb(n.resolvedStr)}}function _e(r,e){if(r&1&&(Fl(0,`div`,14)(1,`span`,21),FA(2),jh()()),r&2){let n=lA(2);CC(2),Mb(n.resolvedEmptyMessage())}}function Oe(r,e){if(r&1){let n=oA();Fl(0,`div`,10),Kn(`keydown`,function(i){ly(n);let a=lA();return cy(a.onPanelKey(i))}),WT(1,xe,3,1,`div`,11),Fl(2,`div`,12),QT(3,ye,6,6,`bx-menu-item`,13,ge,!1,_e,3,1,`div`,14),jh()()}if(r&2){let n=lA();ab(`id`,n.inputId()+`-options`),Tn(`aria-label`,n.resolvedLabel()),CC(),ZT(n.isSearchable()?1:-1),CC(2),JT(n.filteredOptions())}}var le=class r$1 extends C_{a11y=p$1(or);zone=p$1(W$1);isPanelAttached=E(!1);i18n=p$1(KY,{optional:!0});searchTerm=E(``);inputId=Q$1(()=>`bx-select-${t6()}`);overlayPositions=[new cr({originX:`start`,originY:`bottom`},{overlayX:`start`,overlayY:`top`},0,4),new cr({originX:`start`,originY:`top`},{overlayX:`start`,overlayY:`bottom`},0,-4)];isFloating=Q$1(()=>{let e=this.internalValue(),n=e!=null&&e!==``;return this.isOpen()||n});resolvedLabel=Q$1(()=>{this.i18n?.version?.();let e=this.label();return e?QY(e)?this.i18n?.translate(e.key)??e.key:e:``});resolvedPlaceholder=Q$1(()=>{this.i18n?.version?.();let e=this.placeholder();return e?QY(e)?this.i18n?.translate(e.key)??e.key:e:``});resolvedOptions=Q$1(()=>(this.i18n?.version?.(),this.options().map(e=>s(r({},e),{resolvedStr:this.resolveText(e.label)}))));filteredOptions=Q$1(()=>{let e=this.searchTerm().trim(),n=this.resolvedOptions();if(this.externalFiltering()||!e)return n;let t=e.toLocaleLowerCase();return n.filter(i=>{let a=0;for(let ce of i.resolvedStr.toLocaleLowerCase())if(ce===t[a]&&a++,a===t.length)return!0;return!1})});selectedOptionLabel=Q$1(()=>{let e=this.internalValue(),n=this.resolvedOptions().find(t=>t.value===e);return n?n.resolvedStr:``});resolvedSearchPlaceholder=Q$1(()=>this.resolveText(this.searchPlaceholder()));resolvedEmptyMessage=Q$1(()=>this.resolveText(this.emptyMessage()));options=re$2.required();isSearchable=re$2(!1);externalFiltering=re$2(!1);searchPlaceholder=re$2(`Search...`);emptyMessage=re$2(`No results found.`);search=lz();isOpen=E(!1);transition;disconnectTheme;transitionRevision=0;focusOnOpen=null;connectedOverlay;searchInputRef;originRef;searchSubject=new G;sub;ngOnInit(){super.ngOnInit(),this.sub=this.searchSubject.pipe(Gu(300),ka()).subscribe(e=>{this.searchTerm.set(e),this.externalFiltering()&&this.search.emit(e)})}ngOnDestroy(){++this.transitionRevision,this.onPanelDetach(),this.sub?.unsubscribe()}toggleOpen(){this.isDisabled()||this.loading()||(this.isOpen()?this.close():this.open())}open(){if(this.isDisabled()||this.loading())return;++this.transitionRevision,this.isOpen.set(!0),this.isPanelAttached.set(!0);let e=this.connectedOverlay?.overlayRef?.overlayElement;e&&(e.inert=!1);let n=this.transition;n&&this.zone.runOutsideAngular(()=>n.enter())}close(){this.isOpen.set(!1),this.markAsTouched();let e=++this.transitionRevision,n=this.connectedOverlay?.overlayRef?.overlayElement;n?.contains(n.ownerDocument.activeElement)&&this.originRef?.nativeElement.focus({preventScroll:!0}),n&&(n.inert=!0);let t=this.transition;t&&!this.a11y.isReducedMotion()?this.zone.runOutsideAngular(()=>t.exit()).then(()=>{e===this.transitionRevision&&!this.isOpen()&&this.isPanelAttached.set(!1)}).catch(()=>{e===this.transitionRevision&&this.isPanelAttached.set(!1)}):this.isPanelAttached.set(!1)}onPanelAttach(){let e=this.transitionRevision;queueMicrotask(()=>{let n=this.connectedOverlay?.overlayRef,t=this.originRef?.nativeElement;if(!(!n?.hasAttached()||!t||!this.isOpen()||e!==this.transitionRevision)){if(this.disconnectTheme?.(),this.disconnectTheme=this.zone.runOutsideAngular(()=>r6(t,n.overlayElement)),n.updatePosition(),!this.a11y.isReducedMotion()){this.transition?.destroy(),this.transition=this.zone.runOutsideAngular(()=>Gk(t,n.overlayElement));let i=this.transition;this.zone.runOutsideAngular(()=>i.enter()).catch(()=>{e===this.transitionRevision&&(this.transition?.destroy(),this.transition=void 0)})}if(this.isSearchable())this.searchInputRef?.focus();else if(this.focusOnOpen){let i=this.panelItems();(this.focusOnOpen===`last`?i[i.length-1]:i[0])?.focus()}this.focusOnOpen=null}})}onPanelDetach(){this.transition?.destroy(),this.transition=void 0,this.disconnectTheme?.(),this.disconnectTheme=void 0}refreshPanel(){this.transition?.refresh()}onTriggerKey(e){if([`ArrowDown`,`ArrowUp`,`Escape`].includes(e.key)){if(e.preventDefault(),e.key===`Escape`){this.close();return}if(this.focusOnOpen=e.key===`ArrowUp`?`last`:`first`,this.isOpen()){let n=this.panelItems();(this.focusOnOpen===`last`?n[n.length-1]:n[0])?.focus(),this.focusOnOpen=null}else this.open()}}onPanelKey(e){if(e.key===`Escape`){e.preventDefault(),e.stopPropagation(),this.close();return}if(e.key===`Tab`){this.close();return}if(e.target?.matches(`input,textarea`)||![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key))return;let n=this.panelItems();if(!n.length)return;let t=n.indexOf(n[0].ownerDocument.activeElement),i=e.key===`Home`?0:e.key===`End`?n.length-1:e.key===`ArrowDown`?(t+1)%n.length:t<0?n.length-1:(t-1+n.length)%n.length;e.preventDefault(),n[i].focus()}onOutsideClick(e){let n=e.target;this.originRef?.nativeElement.contains(n)||this.close()}selectOption(e){e.disabled||(this.updateValue(e.value),this.close())}onSearchChange(e){this.searchSubject.next(e)}panelItems(){return Array.from(this.connectedOverlay?.overlayRef?.overlayElement.querySelectorAll(`.bx-select-menu-container button:not(:disabled)`)??[])}resolveText(e){return e?QY(e)?this.i18n?.translate(e.key)??e.key:e:``}static ɵfac=(()=>{let e;return function(t){return(e||(e=In(r$1)))(t||r$1)}})();static ɵcmp=Zn({type:r$1,selectors:[[`bx-select`]],viewQuery:function(n,t){if(n&1&&Uh(n0,5)(be,5)(pe,5,se$1),n&2){let i;ic(i=oc())&&(t.connectedOverlay=i.first),ic(i=oc())&&(t.searchInputRef=i.first),ic(i=oc())&&(t.originRef=i.first)}},inputs:{options:[1,`options`],isSearchable:[1,`isSearchable`],externalFiltering:[1,`externalFiltering`],searchPlaceholder:[1,`searchPlaceholder`],emptyMessage:[1,`emptyMessage`]},outputs:{search:`search`},features:[Ye$1],decls:10,vars:27,consts:[[`origin`,`cdkOverlayOrigin`],[`searchInput`,``],[3,`inline`,`tooltip`,`error`,`loading`,`forId`],[`type`,`button`,`role`,`combobox`,`aria-haspopup`,`listbox`,`cdkOverlayOrigin`,``,`bxSurface`,``,1,`bx-select-trigger`,3,`click`,`keydown`,`disabled`],[1,`bx-select-container`],[1,`bx-floating-label`],[1,`bx-select-value`],[`name`,`chevron-down`,`size`,`16`,1,`bx-select-caret`],[`cdkConnectedOverlay`,``,3,`overlayOutsideClick`,`attach`,`detach`,`positionChange`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayOpen`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayHasBackdrop`,`cdkConnectedOverlayWidth`],[1,`bx-field-required`],[`bxSurface`,``,`role`,`listbox`,`tabindex`,`0`,1,`bx-select-panel`,3,`keydown`,`id`],[1,`bx-select-search-container`],[1,`bx-select-menu-container`],[`role`,`option`,3,`disabled`,`wrapLabel`],[1,`bx-select-empty`],[3,`search`,`keydown.enter`,`placeholder`],[`role`,`option`,3,`action`,`disabled`,`wrapLabel`],[1,`bx-select-item-inner`],[1,`bx-select-check-placeholder`],[`name`,`check`,`size`,`16`],[3,`title`],[1,`bx-empty-text`]],template:function(n,t){if(n&1&&(Fl(0,`bx-form-field`,2)(1,`button`,3,0),Kn(`click`,function(){return t.toggleOpen()})(`keydown`,function(a){return t.onTriggerKey(a)}),Fl(3,`div`,4),WT(4,he,3,2,`span`,5),Fl(5,`span`,6),WT(6,me,1,1)(7,fe,1,1),jh()(),Jl(8,`bx-icon`,7),jh(),ob(9,Oe,6,4,`ng-template`,8),Kn(`overlayOutsideClick`,function(a){return t.onOutsideClick(a)})(`attach`,function(){return t.onPanelAttach()})(`detach`,function(){return t.onPanelDetach()})(`positionChange`,function(){return t.refreshPanel()}),jh()),n&2){let i=fA(2);ab(`inline`,!0)(`tooltip`,t.tooltip())(`error`,t.errorMessage)(`loading`,t.loading())(`forId`,t.inputId()),CC(),Xn(`is-invalid`,!!t.errorMessage)(`is-open`,t.isOpen())(`is-floating`,t.isFloating()),ab(`disabled`,t.isDisabled()||t.loading()),Tn(`id`,t.inputId())(`data-testid`,t.dataTestId())(`aria-label`,t.ariaLabel()||t.resolvedLabel())(`aria-expanded`,t.isOpen())(`aria-controls`,t.isPanelAttached()?t.inputId()+`-options`:null),CC(3),ZT(t.label()?4:-1),CC(),Xn(`is-placeholder`,t.internalValue()===null),Tn(`title`,t.selectedOptionLabel()||t.resolvedPlaceholder()),CC(),ZT(t.internalValue()===null&&t.isFloating()?6:7),CC(3),ab(`cdkConnectedOverlayOrigin`,i)(`cdkConnectedOverlayOpen`,t.isPanelAttached())(`cdkConnectedOverlayPositions`,t.overlayPositions)(`cdkConnectedOverlayHasBackdrop`,!1)(`cdkConnectedOverlayWidth`,i.elementRef.nativeElement.offsetWidth)}},dependencies:[E_,Xb,r0,n0,Nm,ee$2,R_,Ee,De],styles:[`
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
}`],changeDetection:1})};var p=[`*`];var S$1=class r{appearance=Y6(()=>({interactive:this.variant()===`text`||!this.interactive()||this.disabled()?!1:void 0,emission:this.variant()!==`text`&&this.interactive()&&!this.disabled()?this.color()===`primary`||this.color()===`grayscale`?`var(--bx-primary)`:`var(--bx-text-${this.color()})`:void 0}));a11y=p$1(or);isAnimated=Q$1(()=>!this.a11y.isReducedMotion());variant=re$2(`text`);color=re$2(`primary`);outlined=re$2(!1);elevated=re$2(!1);disabled=re$2(!1,{transform:Ae$1});interactive=re$2(!0,{transform:Ae$1});onClick(a){this.disabled()&&(a.preventDefault(),a.stopImmediatePropagation())}static ɵfac=function(e){return new(e||r)};static ɵcmp=Zn({type:r,selectors:[[`bx-button`],[`button`,`bx-button`,``],[`a`,`bx-button`,``]],hostVars:13,hostBindings:function(e,n){e&1&&Kn(`click`,function(f){return n.onClick(f)}),e&2&&(Tn(`disabled`,n.disabled()?!0:null)(`aria-disabled`,n.disabled())(`tabindex`,n.disabled()?`-1`:null),MA(`bx-btn bx-btn-`+n.variant()+` bx-btn-color-`+n.color()),Xn(`bx-btn-is-outlined`,n.outlined())(`bx-btn-is-elevated`,n.elevated())(`bx-btn-animated`,n.isAnimated())(`bx-btn-non-interactive`,!n.interactive()))},inputs:{variant:[1,`variant`],color:[1,`color`],outlined:[1,`outlined`],elevated:[1,`elevated`],disabled:[1,`disabled`],interactive:[1,`interactive`]},ngContentSelectors:p,decls:2,vars:0,consts:[[1,`bx-btn-content-wrapper`]],template:function(e,n){e&1&&(fb(),ec(0,`span`,0),hb(1),tc())},styles:[`
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
[_nghost-%COMP%]:is(.bx-btn-filled, .bx-btn-fab, .bx-btn-mini-fab, .bx-btn-extended-fab):not(.bx-btn-is-outlined)[data-bx-surface=frosted] {
  --%NS%bx-glass-min-opacity: 0.94;
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
}`]})};var _t=e.map((e,n)=>we({path:e.id,loadComponent:()=>import(`./chunk-DhAOFXBy.js`).then(t=>t.ComponentDemo),title:`${e.title} \xB7 Blocks`,data:{componentId:e.id}},{label:e.title,breadcrumb:e.title,section:e.group,menu:!0,order:n}));var ee=[{path:``,pathMatch:`full`,redirectTo:`home`},we({path:`home`,loadComponent:()=>import(`./chunk-B8KubEVl.js`).then(e=>e.Home),title:`Blocks`},{label:`Overview`,breadcrumb:`Home`,section:`Start`,menu:!0,root:!0,order:1}),we({path:`appearance`,loadComponent:()=>import(`./chunk-4SXXq78W.js`).then(e=>e.Appearance),title:`Appearance · Blocks`},{label:`Appearance`,breadcrumb:`Appearance`,section:`Start`,menu:!0,order:2}),we({path:`components`,title:`Components · Blocks`,children:[{path:``,pathMatch:`full`,loadComponent:()=>import(`./chunk-CGOZV5Mp.js`).then(e=>e.ComponentIndex)},..._t]},{label:`All components`,breadcrumb:`Components`,section:`Start`,menu:!0,order:3}),we({path:`icon-catalog`,loadComponent:()=>import(`./chunk-BLsvR1wZ.js`).then(e=>e.IconCatalog),title:`Icon catalog · Blocks`},{label:`Icon catalog`,breadcrumb:`Icon catalog`,section:`Tools`,menu:!0,order:4}),we({path:`modal`,loadComponent:()=>import(`./chunk-BsrNWZRG.js`).then(e=>e.Modal),title:`Modal configurator · Blocks`},{label:`Modal configurator`,breadcrumb:`Modal configurator`,section:`Tools`,menu:!0,order:5}),we({path:`toastr`,loadComponent:()=>import(`./chunk-XkI5gldf.js`).then(e=>e.Toastr),title:`Toast configurator · Blocks`},{label:`Toast configurator`,breadcrumb:`Toast configurator`,section:`Tools`,menu:!0,order:6}),{path:`glass`,pathMatch:`full`,redirectTo:`appearance`},{path:`**`,redirectTo:`components`}];(class e{static ɵfac=function(t){return new(t||e)};static ɵmod=Te$1({type:e});static ɵinj=Ee$1({imports:[zN.forRoot(ee),zN]})});var te={providers:[KE(),JA(),Xl(()=>{let e=p$1(B),n=null;try{n=e.defaultView?.localStorage.getItem(`theme-palette`)??null}catch{}let t=p$1(lr);t.palettes.some(i=>i.id===n)||t.setPalette(`orange`)}),$N(ee,qN({scrollPositionRestoration:`enabled`,anchorScrolling:`enabled`})),Be$1({sections:[{id:`base`,title:``,order:1}]}),rt({coreLibraryLoader:()=>import(`./chunk-CNLY_5RV.js`),languages:{typescript:()=>import(`./chunk-Da6TFjtL.js`),scss:()=>import(`./chunk--Sjxt33j.js`),xml:()=>import(`./chunk-Bs3bRvME.js`)}})]};var st=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵcmp=Zn({type:e,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2})}return e})();var at=new Set;var S;var vt=(()=>{class e{_platform=p$1(ei);_nonce=p$1(dl,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ct}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&yt(t,this._nonce),this._matchMedia(t)}static ɵfac=function(i){return new(i||e)};static ɵprov=j$2({token:e,factory:e.ɵfac})}return e})();function yt(e,n){if(!at.has(e))try{S||(S=document.createElement(`style`),n&&S.setAttribute(`nonce`,n),S.setAttribute(`type`,`text/css`),document.head.appendChild(S)),S.sheet&&(S.sheet.insertRule(`@media ${e.replace(/[{}]/g,``)} {body{ }}`,0),at.add(e))}catch(t){console.error(t)}}function Ct(e){return{matches:e===`all`||e===``,media:e,addListener:()=>{},removeListener:()=>{}}}var lt=(()=>{class e{_mediaMatcher=p$1(vt);_zone=p$1(W$1);_queries=new Map;_destroySubject=new G;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return ct(wm(t)).some(r=>this._registerQuery(r).mql.matches)}observe(t){let r=ct(wm(t)).map(d=>this._registerQuery(d).observable),s=xa(r);return s=yi(s.pipe(hn(1)),s.pipe(Rg(1),Gu(0))),s.pipe(le$1(d=>{let C={matches:!1,breakpoints:{}};return d.forEach(({matches:B,query:gt})=>{C.matches=C.matches||B,C.breakpoints[gt]=B}),C}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),s={observable:new L$1(d=>{let C=B=>this._zone.run(()=>d.next(B));return i.addListener(C),()=>{i.removeListener(C)}}).pipe(Pa(i),le$1(({matches:d})=>({query:t,matches:d})),jn(this._destroySubject)),mql:i};return this._queries.set(t,s),s}static ɵfac=function(i){return new(i||e)};static ɵprov=j$2({token:e,factory:e.ɵfac})}return e})();function ct(e){return e.map(n=>n.split(`,`)).reduce((n,t)=>n.concat(t)).map(n=>n.trim())}var Mt=(()=>{class e{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(i){return new(i||e)};static ɵprov=j$2({token:e,factory:e.ɵfac})}return e})();var dt=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵmod=Te$1({type:e});static ɵinj=Ee$1({providers:[Mt]})}return e})();var xt=(()=>{class e{_platform=p$1(ei);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return kt(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let i=St(Dt(t));if(i&&(ut(i)===-1||!this.isVisible(i)))return!1;let r=t.nodeName.toLowerCase(),s=ut(t);return t.hasAttribute(`contenteditable`)?s!==-1:r===`iframe`||r===`object`||this._platform.WEBKIT&&this._platform.IOS&&!wt(t)?!1:r===`audio`?t.hasAttribute(`controls`)?s!==-1:!1:r===`video`?s===-1?!1:s!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,i){return It(t)&&!this.isDisabled(t)&&(i?.ignoreInert||!t.closest?.(`[inert]`))&&(i?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(i){return new(i||e)};static ɵprov=j$2({token:e,factory:e.ɵfac})}return e})();function St(e){try{return e.frameElement}catch{return null}}function kt(e){return!!(e.offsetWidth||e.offsetHeight||typeof e.getClientRects==`function`&&e.getClientRects().length)}function Tt(e){let n=e.nodeName.toLowerCase();return n===`input`||n===`select`||n===`button`||n===`textarea`}function Et(e){return Ot(e)&&e.type==`hidden`}function At(e){return Nt(e)&&e.hasAttribute(`href`)}function Ot(e){return e.nodeName.toLowerCase()==`input`}function Nt(e){return e.nodeName.toLowerCase()==`a`}function ht(e){if(!e.hasAttribute(`tabindex`)||e.tabIndex===void 0)return!1;let n=e.getAttribute(`tabindex`);return!!(n&&!isNaN(parseInt(n,10)))}function ut(e){if(!ht(e))return null;let n=parseInt(e.getAttribute(`tabindex`)||``,10);return isNaN(n)?-1:n}function wt(e){let n=e.nodeName.toLowerCase(),t=n===`input`&&e.type;return t===`text`||t===`password`||n===`select`||n===`textarea`}function It(e){return Et(e)?!1:Tt(e)||At(e)||e.hasAttribute(`contenteditable`)||ht(e)}function Dt(e){return e.ownerDocument&&e.ownerDocument.defaultView||window}var re=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,t,i,r,s=!1,d){this._element=n,this._checker=t,this._ngZone=i,this._document=r,this._injector=d,s||this.attachAnchors()}destroy(){let n=this._startAnchor,t=this._endAnchor;n&&(n.removeEventListener(`focus`,this.startAnchorListener),n.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let t=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let i=this._getFirstTabbableElement(t);return i?.focus(n),!!i}return t.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let t=this._getRegionBoundary(`start`);return t&&t.focus(n),!!t}focusLastTabbableElement(n){let t=this._getRegionBoundary(`end`);return t&&t.focus(n),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let i=0;i<t.length;i++){let r=t[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let t=n.children;for(let i=t.length-1;i>=0;i--){let r=t[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add(`cdk-visually-hidden`),n.classList.add(`cdk-focus-trap-anchor`),n.setAttribute(`aria-hidden`,`true`),n}_toggleAnchorTabIndex(n,t){n?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){Pt$1(n,{injector:this._injector})}};var bt=(()=>{class e{_checker=p$1(xt);_ngZone=p$1(W$1);_document=p$1(B);_injector=p$1(q$1);constructor(){p$1(Dm).load(st)}create(t,i=!1){return new re(t,this._checker,this._ngZone,this._document,i,this._injector)}static ɵfac=function(i){return new(i||e)};static ɵprov=j$2({token:e,factory:e.ɵfac})}return e})();var oe=(()=>{class e{_elementRef=p$1(se$1);_focusTrapFactory=p$1(bt);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(t){this.focusTrap&&(this.focusTrap.enabled=t)}autoCapture=!1;constructor(){p$1(ei).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(t){let i=t.autoCapture;i&&!i.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=n5(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function(i){return new(i||e)};static ɵdir=Y({type:e,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,Ae$1],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,Ae$1]},exportAs:[`cdkTrapFocus`],features:[Be$2]})}return e})();var y=(function(e){return e[e.NONE=0]=`NONE`,e[e.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,e[e.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,e})(y||{});var mt=`cdk-high-contrast-black-on-white`;var pt=`cdk-high-contrast-white-on-black`;var ie=`cdk-high-contrast-active`;var ft=(()=>{class e{_platform=p$1(ei);_hasCheckedHighContrastMode=!1;_document=p$1(B);_breakpointSubscription;constructor(){this._breakpointSubscription=p$1(lt).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return y.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(t):null,s=(r&&r.backgroundColor||``).replace(/ /g,``);switch(t.remove(),s){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return y.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return y.BLACK_ON_WHITE}return y.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(ie,mt,pt),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===y.BLACK_ON_WHITE?t.add(ie,mt):i===y.WHITE_ON_BLACK&&t.add(ie,pt)}}static ɵfac=function(i){return new(i||e)};static ɵprov=j$2({token:e,factory:e.ɵfac})}return e})();var se=(()=>{class e{constructor(){p$1(ft)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(i){return new(i||e)};static ɵmod=Te$1({type:e});static ɵinj=Ee$1({imports:[dt]})}return e})();var Pt=[`menuToggle`];var Rt=()=>({exact:!0});var Ht=(e,n)=>n.title;var Bt=(e,n)=>n.route;function Vt(e,n){if(e&1){let t=oA();Fl(0,`header`,1)(1,`a`,2),Kn(`click`,function(){ly(t);let r=lA();return cy(r.closeMobileMenu())}),FA(2),jh(),Fl(3,`button`,3,0),Kn(`click`,function(){ly(t);let r=lA();return cy(r.toggleMobileMenu())}),FA(5),jh()()}if(e&2){let t=lA();CC(2),Mb(t.title()),CC(),Tn(`aria-expanded`,t.isHamburgerMenuOpen()),CC(2),Mb(t.isHamburgerMenuOpen()?`Close menu`:`Menu`)}}function jt(e,n){if(e&1){let t=oA();Fl(0,`button`,12),Kn(`click`,function(){ly(t);let r=lA(2);return cy(r.closeMobileMenu())}),jh()}}function zt(e,n){if(e&1&&(Fl(0,`div`,6)(1,`a`,13),FA(2),jh(),Fl(3,`span`),FA(4,`Component library`),jh()()),e&2){let t=lA(2);CC(2),Mb(t.title())}}function $t(e,n){if(e&1){let t=oA();Fl(0,`a`,15),Kn(`click`,function(){ly(t);let r=lA(3);return cy(r.closeMobileMenu())}),FA(1),jh()}if(e&2){let t=n.$implicit;ab(`routerLink`,t.route)(`routerLinkActiveOptions`,WA(3,Rt)),CC(),Mb(t.label)}}function Wt(e,n){if(e&1&&(Fl(0,`section`,10)(1,`h2`),FA(2),jh(),QT(3,$t,2,4,`a`,14,Bt),jh()),e&2){let t=n.$implicit;Tn(`aria-label`,t.title),CC(2),Mb(t.title),CC(),JT(t.items)}}function Kt(e,n){e&1&&(Fl(0,`p`,11),FA(1,`No matching pages.`),jh())}function Ut(e,n){if(e&1){let t=oA();WT(0,jt,1,0,`button`,4),Fl(1,`aside`,5),Kn(`keydown.escape`,function(){ly(t);let r=lA();return cy(r.closeMobileMenu())}),WT(2,zt,5,1,`div`,6),Fl(3,`div`,7)(4,`bx-search-input`,8),UM(),Kn(`ngModelChange`,function(r){ly(t);let s=lA();return cy(s.query.set(r))}),jh(),Fl(5,`nav`,9),QT(6,Wt,5,2,`section`,10,Ht,!1,Kt,2,0,`p`,11),jh()()()}if(e&2){let t=lA();ZT(t.isHamburgerMenu()?0:-1),CC(),Xn(`mobile-sidebar`,t.isHamburgerMenu()),ab(`cdkTrapFocus`,t.isHamburgerMenu())(`cdkTrapFocusAutoCapture`,t.isHamburgerMenu()),CC(),ZT(t.isHamburgerMenu()?-1:2),CC(2),ab(`ngModel`,t.query()),qM(),CC(2),JT(t.groups())}}var U=class e{dimensions=p$1(du);navigation=p$1(_$1);isHamburgerMenuOpen=E(!1);isHamburgerMenu=Q$1(()=>this.dimensions.dimensions().width<=this.dimensions.breakpoints.lg);query=E(``);groups=Q$1(()=>{let n=s=>s.flatMap(d=>[d,...n(d.children??[])]),t=this.query().trim().toLowerCase(),i=n(this.navigation.menu()).filter(s=>!t||`${s.label} ${s.section??``}`.toLowerCase().includes(t));return[`Start`,`Forms`,`Primitives`,`Navigation`,`Icons`,`Modals`,`Notifications`,`Tools`].map(s=>({title:s,items:i.filter(d=>d.section===s)})).filter(s=>s.items.length)});title=re$2.required();scrollLock=p$1(zw);scrollLockId=t6();menuToggle=cz(`menuToggle`,{read:se$1});constructor(){ke(()=>{this.isHamburgerMenuOpen()?this.scrollLock.disableScroll(this.scrollLockId,{handleTouchInput:!1}):this.scrollLock.enableScroll(this.scrollLockId)}),p$1(te$2).onDestroy(()=>this.scrollLock.enableScroll(this.scrollLockId)),ke(()=>{this.isHamburgerMenu()||this.isHamburgerMenuOpen.set(!1)})}toggleMobileMenu(){this.menuToggle()?.nativeElement.focus({preventScroll:!0}),this.isHamburgerMenuOpen.update(n=>!n)}closeMobileMenu(){this.isHamburgerMenuOpen.set(!1)}static ɵfac=function(t){return new(t||e)};static ɵcmp=Zn({type:e,selectors:[[`app-sidenav`]],viewQuery:function(t,i){t&1&&mb(i.menuToggle,Pt,5,se$1),t&2&&dA()},inputs:{title:[1,`title`]},decls:2,vars:2,consts:[[`menuToggle`,``],[`bxSurface`,``,1,`mobile-header`],[`routerLink`,`/home`,1,`brand`,3,`click`],[`bx-button`,``,`color`,`grayscale`,`type`,`button`,`aria-controls`,`component-navigation`,1,`menu-toggle`,3,`click`],[`type`,`button`,`aria-label`,`Close navigation`,`tabindex`,`-1`,1,`navigation-scrim`],[`bxSurface`,``,`id`,`component-navigation`,`tabindex`,`-1`,1,`sidebar`,3,`keydown.escape`,`cdkTrapFocus`,`cdkTrapFocusAutoCapture`],[1,`sidebar-header`],[1,`sidebar-scroll`],[`label`,`Find a page`,`placeholder`,`Search components…`,1,`navigation-search`,3,`ngModelChange`,`ngModel`],[`aria-label`,`Component documentation`],[1,`navigation-group`],[1,`empty-navigation`],[`type`,`button`,`aria-label`,`Close navigation`,`tabindex`,`-1`,1,`navigation-scrim`,3,`click`],[`routerLink`,`/home`,1,`brand`],[`bxSurface`,``,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,3,`routerLink`,`routerLinkActiveOptions`],[`bxSurface`,``,`routerLinkActive`,`active`,`ariaCurrentWhenActive`,`page`,3,`click`,`routerLink`,`routerLinkActiveOptions`]],template:function(t,i){t&1&&(WT(0,Vt,6,3,`header`,1),WT(1,Ut,9,8)),t&2&&(ZT(i.isHamburgerMenu()?0:-1),CC(),ZT(!i.isHamburgerMenu()||i.isHamburgerMenuOpen()?1:-1))},dependencies:[se,oe,y8,h8,kk,De,S$1,Zc,HN,E_],styles:[`
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
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
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
  padding: 0.5rem 0.75rem;
  font: inherit;
  font-size: 0.875rem;
  border: 1px solid var(--%NS%bx-border-default);
  background: var(--%NS%bx-bg-canvas);
  color: var(--%NS%bx-text-primary);
  border-radius: 0.5rem;
  cursor: pointer;
}
.navigation-scrim[_ngcontent-%COMP%] {
  position: fixed;
  inset: var(--%NS%mobile-header-height) 0 0;
  border: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 211;
}
.mobile-sidebar[_ngcontent-%COMP%] {
  top: var(--%NS%mobile-header-height);
  height: calc(100vh - var(--%NS%mobile-header-height));
  height: calc(100dvh - var(--%NS%mobile-header-height));
  z-index: 212;
  width: min(320px, 85vw);
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
  padding: 3px;
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
nav[_ngcontent-%COMP%]   a[data-bx-surface].active[data-bx-surface=frosted][_ngcontent-%COMP%] {
  --%NS%bx-glass-min-opacity: 0.94;
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
}`]})};var Zt=(e,n)=>n.id;function qt(e,n){if(e&1){let t=oA();Fl(0,`bx-menu-item`,16),Kn(`action`,function(){let r=ly(t).$implicit,s=lA(2);return cy(s.theme.setPalette(r.id))}),jh()}if(e&2){let t=n.$implicit,i=lA(2);ab(`label`,t.label)(`icon`,i.selectedThemeId()===t.id?`check`:void 0)}}function Gt(e,n){if(e&1&&(Fl(0,`bx-menu`),QT(1,qt,1,2,`bx-menu-item`,15,Zt),jh()),e&2){let t=lA();CC(),JT(t.availableThemes)}}var Z=class e{document=p$1(B);highlight=p$1(V);theme=p$1(lr);availableThemes=this.theme.palettes;selectedThemeId=this.theme.palette;selectedThemeLabel=this.theme.paletteLabel;isDarkMode=Q$1(()=>this.theme.activeTheme()===`dark`);constructor(){ke(()=>{let n=this.isDarkMode();this.document.documentElement.setAttribute(`data-theme`,n?`dark`:`light`),this.document.defaultView&&this.highlight.setTheme(n?`assets/styles/vs2015.css`:`assets/styles/github.css`)})}toggleTheme(){this.theme.setApplicationTheme(this.isDarkMode()?`light`:`dark`)}static ɵfac=function(t){return new(t||e)};static ɵcmp=Zn({type:e,selectors:[[`app-root`]],decls:22,vars:4,consts:[[`themeMenu`,``],[`href`,`#main-content`,1,`skip-link`],[1,`app-container`],[`title`,`Blocks`],[1,`app-main`],[`data-bx-light-scope`,``,`bxSurface`,``,`aria-label`,`Playground appearance`,1,`app-toolbar`],[1,`toolbar-label`],[1,`toolbar-actions`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`routerLink`,`/appearance`,`aria-label`,`Configure appearance for the whole playground`],[`name`,`sliders-horizontal`,`size`,`16`],[`bx-button`,``,`type`,`button`,`bxTransition`,`fade`,`placement`,`bottom`,`variant`,`tonal`,`color`,`grayscale`,`aria-label`,`Choose theme palette`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,1,`theme-mode-toggle`,3,`click`],[`size`,`20`,3,`name`],[`id`,`main-content`,`tabindex`,`-1`,1,`app-content-container`],[3,`label`,`icon`],[3,`action`,`label`,`icon`]],template:function(t,i){if(t&1&&(Fl(0,`a`,1),FA(1,`Skip to content`),jh(),Fl(2,`div`,2),Jl(3,`app-sidenav`,3),Fl(4,`div`,4)(5,`header`,5)(6,`span`,6),FA(7,`Component playground`),jh(),Fl(8,`div`,7)(9,`a`,8),Jl(10,`bx-icon`,9),Fl(11,`span`),FA(12,`Appearance`),jh()(),Fl(13,`button`,10),FA(14),Jl(15,`bx-icon`,11),jh(),Fl(16,`button`,12),Kn(`click`,function(){return i.toggleTheme()}),Jl(17,`bx-icon`,13),jh()()(),Fl(18,`main`,14),Jl(19,`router-outlet`),jh()()(),ob(20,Gt,3,0,`ng-template`,null,0,QA)),t&2){let r=fA(21);CC(13),ab(`bxDropdown`,r),CC(),Mb(i.selectedThemeLabel()),CC(2),Tn(`aria-label`,i.isDarkMode()?`Switch to light theme`:`Switch to dark theme`),CC(),ab(`name`,i.isDarkMode()?`sun`:`moon`)}},dependencies:[Hp,Zc,U,S$1,R_,Se,Ee,Oe$1,E_],styles:[`
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
  .toolbar-actions[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
    display: none;
  }
}`]})};tx(Z,s(r({},te),{providers:[JA(),...te.providers]})).catch(e=>console.error(e));export{Se as _,ht$1 as a,X as b,K$1 as c,Ee as d,J$2 as f,Pe as g,Oe$1 as h,j as i,Z$1 as l,K$2 as m,le as n,e as o,Je as p,L as r,J$1 as s,S$1 as t,De as u,Z$2 as v,ee$2 as y};