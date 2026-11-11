import{t as Be}from"./chunk-CRgmX9dC.js";import{a as dt,i as bt,n as X,r as Z,t as P}from"./chunk-D_GEQZc2.js";import{A as tr,F as Be$1,G as vn,H as pn,I as Fe,K as xn,L as Ke$1,O as rr,R as Ue$1,T as nr,U as qe$1,V as nn,W as un,_ as ar,a as $r,d as Ti$1,f as Us,h as Ys,k as sr,l as Qn$1,t as S,tt as e,w as mr,x as je,z as dn}from"./main-KDO6NRGB.js";import{a as Tn,i as On$1,n as G,r as Ne,s as kn}from"./chunk-DfiujzSG.js";import{n as ht}from"./chunk-DrtfzimJ.js";import{a as ne,n as Z$1,s as qe$2,t as V}from"./chunk-Crf--m4R.js";import{Aa as wM,Ai as nn$1,An as Xp,At as Og,B as Hne,Bi as p,Bn as ZC,Ca as un$1,Ci as lt$1,Cn as Wne,D as Et,Da as vi$1,Di as nR,Dn as XC,Dt as OM,F as Ga$1,Fi as oR,Fr as ep,Gi as pm,Gn as _F,Ha as yp,Hr as g,I as Gne,Ia as xe$1,Ii as od,In as Yf,Jt as SM,K as In$1,Ka as ze,Kt as S$1,Lt as QA,N as G$1,Ni as oO,Nn as YC,Nr as ee$1,Nt as P$1,O as FM,Oi as nc,On as XM,Ot as ON,Pa as wn,Pn as YM,Qn as ad,Ra as yD,Ri as on,Rt as QC,Sa as um,Si as lm,Sn as Wa$1,Ti as me,Un as Zr,Ut as RM,V as IM,Va as yn,Wi as pe,Y as It,Ya as zt,Yi as qM,Yt as Se,Z as Jf,Zr as hm,_ as CM,_t as Me,aa as rl,at as Ka$1,b as DM,bt as N0,c as Ae,ci as jM,d as BD,da as so$1,f as BM,fa as td,g as C,gn as Vt,ha as tn,hi as ke,ht as MF,ir as be,it as KM,ki as ne$1,kt as Oe,ln as V$1,mr as cp,nr as at,nt as KC,o as A,oi as id,p as Ba$1,pa as te,pi as kM,pr as cm,q as Io$1,qr as h,qt as SF,ra as rd,rn as Ua$1,s as AM,ta as qr,tn as To$1,tt as K,ua as sd,un as VM,ur as ca$1,v as Ce,vi as ld,wt as No$1,x as Do$1,xa as ue,xr as dZ,xt as NM,y as D,yn as WC,yt as Mn,z as HM,zn as Z$2}from"./chunk-zW9dIJoT.js";import{n as s,t as r}from"./chunk-DFgPOoGa.js";var In=[{label:`Home`,route:`/home`},{label:`Components`,route:`/components`},{label:`Primitives`,route:`/components/category/primitives`},{label:`Layout`,route:`/components/layout`},{label:`Page container`,route:`/components/layout/page-container`}];var qe=class a{items=In;maxVisible=D(3);unlimited=D(!1);hover=D(!0);config=g(()=>({maxVisibleItems:this.unlimited()?null:Number(this.maxVisible())||3,openOnHover:this.hover()}));static ɵfac=function(t){return new(t||a)};static ɵcmp=G$1({type:a,selectors:[[`app-breadcrumb-examples`]],decls:13,vars:13,consts:[[3,`gap`],[`direction`,`responsive`,`align`,`center`,3,`gap`],[`type`,`number`,`label`,`Visible breadcrumb entries`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`max`,`disabled`,`value`],[`label`,`Show the complete trail`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Open hidden ancestors on hover`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[3,`items`,`minimumBreadcrumbs`,`breadcrumbConfig`],[3,`minimumBreadcrumbs`,`breadcrumbConfig`]],template:function(t,e){t&1&&(A(0,`bx-stack`,0)(1,`bx-stack`,1)(2,`bx-input-field`,2),QC(`valueChange`,function(s){return QA(e.maxVisible,s)||(e.maxVisible=s),s}),P$1(),A(3,`bx-checkbox`,3),QC(`checkedChange`,function(s){return QA(e.unlimited,s)||(e.unlimited=s),s}),P$1(),A(4,`bx-checkbox`,4),QC(`checkedChange`,function(s){return QA(e.hover,s)||(e.hover=s),s}),P$1()(),Ae(5,`bx-breadcrumbs`,5),A(6,`p`),me(7,`Hover over or activate the ellipsis to open hidden ancestors. Every ancestor link navigates to a real playground page.`),P$1(),A(8,`p`),me(9,`Use Tab to reach the ellipsis, Enter or Down to open it, arrow keys to choose an ancestor, and Escape to return to the trigger.`),P$1(),Ae(10,`bx-breadcrumbs`,6),A(11,`p`),me(12,`The second trail follows the current route metadata.`),P$1()()),t&2&&(V$1(`gap`,4),C(),V$1(`gap`,4),C(),V$1(`min`,2)(`max`,10)(`disabled`,e.unlimited()),XC(`value`,e.maxVisible),C(),XC(`checked`,e.unlimited),C(),XC(`checked`,e.hover),C(),V$1(`items`,e.items)(`minimumBreadcrumbs`,1)(`breadcrumbConfig`,e.config()),C(5),V$1(`minimumBreadcrumbs`,1)(`breadcrumbConfig`,e.config()))},dependencies:[nn,Ti$1,nr,OM],encapsulation:2})};var On=[`Skopje`,`Ohrid`,`Bitola`,`Prilep`,`Tetovo`,`Struga`,`Veles`,`Shtip`,`Kumanovo`,`Gevgelija`,`Kavadarci`,`Resen`,`Krusevo`,`Berovo`,`Debar`,`Strumica`,`Gostivar`,`Kicevo`,`Kratovo`,`Kocani`,`Radovish`,`Negotino`,`Delchevo`,`Vinica`].map(a=>({value:a}));var Vn=[{label:`1 suggestion`,value:1},{label:`3 suggestions`,value:3},{label:`12 suggestions`,value:12},{label:`All 24 suggestions`,value:24}];var zn=[{label:`Primary`,value:`primary`},{label:`Accent`,value:`accent`},{label:`Success`,value:`text-success`},{label:`Info`,value:`text-info`}];var we=class a{destroyRef=p(Z$2);query=D(``);matches=g(()=>On.filter(r=>r.value.toLowerCase().includes(this.query().toLowerCase())));options=D([]);loading=D(!1);searching=D(!1);error=D(void 0);hasMore=g(()=>this.options().length<this.matches().length);pageSize=D(3);failNext=D(!1);status=D(`Ready`);loadMoreConfig={text:`Load more suggestions`,loadingText:`Loading suggestions`,retryText:`Retry request`,variant:`tonal`,color:`accent`};timer;constructor(){this.destroyRef.onDestroy(()=>clearTimeout(this.timer))}search(r){clearTimeout(this.timer),this.query.set(r),this.error.set(void 0),this.loading.set(!0),this.searching.set(!0),this.status.set(`Replacing suggestions…`),this.timer=setTimeout(()=>{this.options.set(this.matches().slice(0,this.pageSize())),this.loading.set(!1),this.searching.set(!1),this.status.set(`First page ready`)},650)}loadMore(r){if(this.loading())return;this.loading.set(!0),this.error.set(void 0),this.status.set(`Request source: `+r.source);let t=this.failNext()&&r.source!==`retry`;this.failNext.set(!1),this.timer=setTimeout(()=>{t?(this.error.set(`The next page failed. Your results are kept.`),this.status.set(`Failed page retained. Choose Retry request.`)):(this.options.set(this.matches().slice(0,this.options().length+this.pageSize())),this.status.set(r.source===`retry`?`Retry succeeded`:`Page appended`)),this.loading.set(!1)},900)}setPageSize(r){let t=Number(r);this.pageSize.set(Number.isFinite(t)?Math.max(1,Math.min(24,Math.floor(t))):3),this.search(this.query())}static ɵfac=function(t){return new(t||a)};static ɵprov=ee$1({token:a,factory:a.ɵfac})};var si=()=>({ariaLabel:`Project details`});function ci(a,r){a&1&&(A(0,`p`),me(1,`Full width separator`),P$1(),Ae(2,`bx-divider`)(3,`bx-divider`,7)(4,`bx-divider`,8),A(5,`bx-stack`,9)(6,`span`),me(7,`Start`),P$1(),Ae(8,`bx-divider`,10),A(9,`span`),me(10,`End`),P$1()())}function di(a,r){if(a&1){let t=tn();A(0,`bx-popover`)(1,`bx-stack`)(2,`strong`),me(3,`Project details`),P$1(),A(4,`p`),me(5,`Your changes are saved in this workspace.`),P$1(),Ae(6,`bx-input-field`,13),A(7,`button`,14),ue(`click`,function(){at(t),S$1();let o=It(2);return lt$1(o.close())}),me(8,`Done`),P$1()()()}}function pi(a,r){if(a&1&&(A(0,`bx-stack`,11)(1,`button`,12,0),me(3,` Open details `),P$1(),ep(4,di,9,0,`ng-template`,null,1,qr),P$1(),A(6,`p`),me(7,`Internal actions stay open. Escape, outside click and tabbing out dismiss the panel.`),P$1()),a&2){let t=It(5);V$1(`wrap`,!0),C(),V$1(`bxPopover`,t)(`popoverConfig`,oO(3,si))}}function mi(a,r){a&1&&(A(0,`bx-stack`),Ae(1,`bx-skeleton`,16)(2,`bx-skeleton`,17)(3,`bx-skeleton`,18),P$1()),a&2&&(C(2),V$1(`lines`,3)(`decorative`,!1))}function ui(a,r){a&1&&(A(0,`p`),me(1,`Loaded content replaces the placeholders without moving the surrounding actions.`),P$1())}function gi(a,r){if(a&1){let t=tn();A(0,`button`,14),ue(`click`,function(){at(t);let o=S$1();return lt$1(o.skeletonVisible.set(!o.skeletonVisible()))}),me(1,`Toggle loaded content`),P$1(),A(2,`bx-card`,15),te(3,mi,4,2,`bx-stack`)(4,ui,2,0,`p`),P$1()}if(a&2){let t=S$1();C(3),ne$1(t.skeletonVisible()?3:4)}}function bi(a,r){if(a&1){let t=tn();A(0,`bx-autocomplete`,19),nR(),ue(`queryChange`,function(o){at(t);let s=S$1();return lt$1(s.autocompleteDemoService.search(o))})(`loadMore`,function(o){at(t);let s=S$1();return lt$1(s.autocompleteDemoService.loadMore(o))})(`optionSelected`,function(o){at(t);let s=S$1();return lt$1(s.status.set(`Chose `+o.value))}),P$1(),A(1,`bx-stack`,20)(2,`button`,21),ue(`click`,function(){at(t);let o=S$1();return lt$1(o.autocompleteDemoService.failNext.set(!0))}),me(3,` Fail next page `),P$1(),A(4,`button`,22),ue(`click`,function(){at(t);let o=S$1();return lt$1(o.autocompleteDemoService.search(``))}),me(5,` Reload suggestions `),P$1(),A(6,`bx-checkbox`,23),QC(`checkedChange`,function(o){at(t);let s=S$1();return QA(s.readOnly,o)||(s.readOnly=o),lt$1(o)}),P$1(),A(7,`bx-select`,24),ue(`selectionChange`,function(o){at(t);let s=S$1();return lt$1(s.autocompleteDemoService.setPageSize(o.value))}),P$1()(),A(8,`output`),me(9),P$1(),A(10,`p`),me(11,` Choose Fail next page, load another page, then Retry request. Existing suggestions remain visible. Small pages show the load-more action; larger pages enable scrolling. Search for an unknown city to see the empty state and keep free text. `),P$1()}if(a&2){let t=S$1();V$1(`formControl`,t.destination)(`options`,t.autocompleteDemoService.options())(`externalFiltering`,!0)(`searching`,t.autocompleteDemoService.searching())(`loading`,t.autocompleteDemoService.loading())(`hasMore`,t.autocompleteDemoService.hasMore())(`loadError`,t.autocompleteDemoService.error())(`readOnly`,t.readOnly())(`loadMoreConfig`,t.autocompleteDemoService.loadMoreConfig),oR(),C(),V$1(`wrap`,!0)(`gap`,2),C(),V$1(`disabled`,t.autocompleteDemoService.loading()||!t.autocompleteDemoService.hasMore()),C(2),V$1(`disabled`,t.autocompleteDemoService.loading()),C(2),XC(`checked`,t.readOnly),C(),V$1(`clearable`,!1)(`options`,t.pageSizes)(`value`,t.autocompleteDemoService.pageSize()),C(2),YC(`Value: `,t.destination.value||`(empty)`,` · `,t.autocompleteDemoService.options().length,` suggestions loaded · `,t.autocompleteDemoService.status(),``,t.autocompleteDemoService.failNext()?` · Next page will fail`:``)}}function _i(a,r){if(a&1){let t=tn();A(0,`bx-chip`,30),ue(`removed`,function(){let o=at(t).$implicit,s=S$1(2);return lt$1(s.removeChip(o))})(`activated`,function(){let o=at(t).$implicit,s=S$1(2);return lt$1(s.status.set(`Activated `+o))}),P$1()}if(a&2){let t=r.$implicit,e=S$1(2);V$1(`label`,t)(`selectable`,!1)(`removable`,!0)(`config`,e.chipConfig)}}function yi(a,r){if(a&1){let t=tn();A(0,`bx-stack`,25)(1,`bx-chip`,26),QC(`selectedChange`,function(o){at(t);let s=S$1();return QA(s.selected,o)||(s.selected=o),lt$1(o)}),P$1(),Mn(2,_i,1,4,`bx-chip`,27,ca$1),Ae(4,`bx-chip`,28)(5,`bx-chip`,29),P$1(),A(6,`button`,14),ue(`click`,function(){at(t);let o=S$1();return lt$1(o.resetChips())}),me(7,`Restore chips`),P$1(),A(8,`output`),me(9),P$1()}if(a&2){let t=S$1();V$1(`wrap`,!0)(`gap`,2),C(),V$1(`config`,t.chipConfig),XC(`selected`,t.selected),C(),In$1(t.removableChips()),C(2),V$1(`selected`,!0)(`readOnly`,!0)(`removable`,!0),C(),V$1(`disabled`,!0),C(4),wn(`Design selected: `,t.selected())}}function vi(a,r){a&1&&Ae(0,`bx-tag`,38),a&2&&V$1(`focusable`,!1)}function hi(a,r){if(a&1&&(me(0),Ae(1,`bx-tag`,39)),a&2){let t=r.$implicit;wn(``,t,` `),C(),V$1(`leadingNumber`,2)(`focusable`,!1)}}function xi(a,r){a&1&&Ae(0,`bx-input-field`,40)}function fi(a,r){if(a&1){let t=tn();A(0,`bx-checkbox`,31),QC(`checkedChange`,function(o){at(t);let s=S$1();return QA(s.multiple,o)||(s.multiple=o),lt$1(o)}),P$1(),A(1,`bx-accordion`,32)(2,`bx-accordion-item`,33)(3,`p`),me(4,`Your changes are saved in this workspace.`),P$1(),Ae(5,`bx-input-field`,34),P$1(),A(6,`bx-accordion-item`,35)(7,`p`),me(8,`Use arrows, Home and End between headings; Enter or Space toggles a section.`),P$1()(),Ae(9,`bx-accordion-item`,36)(10,`bx-accordion-item`,37),P$1(),ep(11,vi,1,1,`ng-template`,null,2,qr)(13,hi,2,3,`ng-template`,null,3,qr)(15,xi,1,0,`ng-template`,null,4,qr)}if(a&2){let t=It(12),e=It(14),o=It(16),s=S$1();XC(`checked`,s.multiple),C(),V$1(`multiple`,s.multiple()),C(),V$1(`expanded`,!0)(`titleTemplate`,e)(`trailingTemplate`,t),C(7),V$1(`contentTemplate`,o),C(),V$1(`disabled`,!0)}}function Si(a,r){if(a&1){let t=tn();A(0,`bx-collapsible`,41),QC(`expandedChange`,function(o){at(t);let s=S$1();return QA(s.expanded,o)||(s.expanded=o),lt$1(o)}),A(1,`p`),me(2,`Your changes are saved in this workspace.`),P$1(),Ae(3,`bx-input-field`,34),P$1(),A(4,`button`,14),ue(`click`,function(){at(t);let o=S$1();return lt$1(o.expanded.set(!o.expanded()))}),me(5,`Toggle from application`),P$1(),A(6,`bx-collapsible`,42)(7,`p`),me(8,`This content remains accessible while user toggling is prevented.`),P$1()(),A(9,`output`),me(10),P$1()}if(a&2){let t=S$1();V$1(`region`,!0),XC(`expanded`,t.expanded),C(6),V$1(`expanded`,!0)(`readOnly`,!0),C(4),wn(`Expanded: `,t.expanded())}}function Ci(a,r){if(a&1&&Ae(0,`bx-alert`,43),a&2){let t=r.$implicit;V$1(`tone`,t)(`title`,t)}}function wi(a,r){if(a&1){let t=tn();A(0,`button`,47),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.alertVisible.set(!0))}),me(1,`Restore dismissible banner`),P$1()}}function Ei(a,r){if(a&1){let t=tn();Mn(0,Ci,1,2,`bx-alert`,43,ca$1),A(2,`bx-alert`,44),QC(`visibleChange`,function(o){at(t);let s=S$1();return QA(s.alertVisible,o)||(s.alertVisible=o),lt$1(o)}),ue(`dismissed`,function(){at(t);let o=S$1();return lt$1(o.status.set(`Banner dismissed`))}),me(3,` Long content and actions wrap inside the available width. `),A(4,`button`,45),ue(`click`,function(){at(t);let o=S$1();return lt$1(o.status.set(`Banner action`))}),me(5,`Review changes`),P$1()(),te(6,wi,2,0,`button`,46)}if(a&2){let t=S$1();In$1(t.tones),C(2),V$1(`dismissible`,!0),XC(`visible`,t.alertVisible),C(4),ne$1(t.alertVisible()?-1:6)}}function ki(a,r){if(a&1){let t=tn();A(0,`bx-stack`,48)(1,`bx-checkbox`,49),QC(`checkedChange`,function(o){at(t);let s=S$1();return QA(s.cardClickable,o)||(s.cardClickable=o),lt$1(o)}),P$1(),A(2,`bx-checkbox`,50),QC(`checkedChange`,function(o){at(t);let s=S$1();return QA(s.cardDisabled,o)||(s.cardDisabled=o),lt$1(o)}),P$1(),A(3,`bx-checkbox`,51),QC(`checkedChange`,function(o){at(t);let s=S$1();return QA(s.cardReadOnly,o)||(s.cardReadOnly=o),lt$1(o)}),P$1(),A(4,`bx-select`,52),ue(`selectionChange`,function(o){at(t);let s=S$1();return lt$1(s.cardHighlight.set(o.value??`accent`))}),P$1()(),A(5,`bx-grid`,53)(6,`bx-card`,54),QC(`selectedChange`,function(o){at(t);let s=S$1();return QA(s.cardSelected,o)||(s.cardSelected=o),lt$1(o)}),ue(`activated`,function(){at(t);let o=S$1();return lt$1(o.status.set(`Workspace activated`))}),A(7,`p`),me(8,`Press anywhere, or use Enter and Space. Selection emits the chosen token through the shared surface lighting.`),P$1()(),A(9,`button`,55),ue(`activated`,function(){at(t);let o=S$1();return lt$1(o.status.set(`Reports opened`))}),A(10,`p`),me(11,`A native button card provides a single action without a selected state.`),P$1()(),A(12,`bx-card`,56)(13,`p`),me(14,`A disabled card retains its content and selection but cannot be activated or focused.`),P$1()(),A(15,`bx-card`,57)(16,`p`),me(17,`Read-only selection remains focusable and keeps its appearance.`),P$1()(),A(18,`bx-card`,58)(19,`p`),me(20,`Ordinary cards remain containers for independent actions.`),P$1(),A(21,`button`,59),ue(`click`,function(){at(t);let o=S$1();return lt$1(o.status.set(`Project opened`))}),me(22,`Open project`),P$1()()(),A(23,`output`),me(24),P$1()}if(a&2){let t=S$1();V$1(`wrap`,!0),C(),XC(`checked`,t.cardClickable),C(),XC(`checked`,t.cardDisabled),C(),XC(`checked`,t.cardReadOnly),C(),V$1(`options`,t.cardHighlightOptions)(`clearable`,!1)(`value`,t.cardHighlight()),C(2),V$1(`clickable`,t.cardClickable())(`disabled`,t.cardDisabled())(`readOnly`,t.cardReadOnly())(`highlightColor`,t.cardHighlight()),XC(`selected`,t.cardSelected),C(3),V$1(`highlightColor`,t.cardHighlight()),C(3),V$1(`clickable`,!0)(`disabled`,!0)(`selected`,!0),C(3),V$1(`clickable`,!0)(`readOnly`,!0)(`selected`,!0)(`highlightColor`,t.cardHighlight()),C(9),WC(`Workspace selected: `,t.cardSelected(),` · Highlight: `,t.cardHighlight())}}function Ti(a,r){if(a&1){let t=tn();A(0,`bx-container`,5)(1,`bx-stack`)(2,`bx-stack`,60)(3,`h3`),me(4,`Workspace overview`),P$1(),A(5,`button`,14),ue(`click`,function(){at(t);let o=S$1();return lt$1(o.status.set(`New project requested`))}),me(6,`New project`),P$1()(),A(7,`bx-grid`,61)(8,`bx-card`,62)(9,`p`),me(10,`Your changes are saved in this workspace.`),P$1(),A(11,`button`,59),ue(`click`,function(){at(t);let o=S$1();return lt$1(o.status.set(`Opened project`))}),me(12,`Open project`),P$1()(),A(13,`bx-card`,63)(14,`bx-stack`,64),Ae(15,`bx-chip`,65),A(16,`p`),me(17,`Cards and layout share the global material and semantic palette.`),P$1()()(),A(18,`bx-card`,66)(19,`p`),me(20,`Resize this page or increase browser zoom to see the grid adapt.`),P$1()()()()()}a&2&&(C(14),V$1(`gap`,2),C(),V$1(`selectable`,!1))}var He=class a{injector=p(ke);autocompleteDemoService=p(we);chips=cp(NM);pageSizes=Vn;selected=D(!1);removableChips=D([`Angular`,`Design`,`Accessibility`]);tones=[`default`,`info`,`danger`,`warning`,`success`];skeletonVisible=D(!0);expanded=D(!1);multiple=D(!1);readOnly=D(!1);alertVisible=D(!0);status=D(`Ready`);destination=new BD(``);chipConfig={color:`accent`};cardHighlightOptions=zn;cardHighlight=D(`accent`);cardClickable=D(!0);cardDisabled=D(!1);cardReadOnly=D(!1);cardSelected=D(!1);example=h.required();constructor(){xe$1(()=>{this.example()===`autocomplete`&&this.autocompleteDemoService.search(``)})}removeChip(r){let t=this.removableChips().indexOf(r);this.removableChips.update(e=>e.filter(o=>o!==r)),this.status.set(`Removed `+r),ze(()=>{let e=this.chips().slice(1);e[Math.min(t,e.length-1)]?.focus()},{injector:this.injector})}resetChips(){this.removableChips.set([`Angular`,`Design`,`Accessibility`])}static ɵfac=function(t){return new(t||a)};static ɵcmp=G$1({type:a,selectors:[[`app-essentials-examples`]],viewQuery:function(t,e){t&1&&yn(e.chips,NM,5),t&2&&Et()},hostAttrs:[`data-bx-light-scope`,``],inputs:{example:[1,`example`]},features:[Vt([we])],decls:15,vars:2,consts:[[`popover`,`bxPopover`],[`details`,``],[`projectStatus`,``],[`projectHeading`,``],[`lazyContent`,``],[`size`,`full`,`landmark`,`region`,`ariaLabel`,`Workspace content`,1,`container-demo`],[`role`,`status`],[`label`,`Continue`],[`lineStyle`,`dashed`],[`direction`,`horizontal`,`align`,`stretch`],[`orientation`,`vertical`],[`direction`,`horizontal`,3,`wrap`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`bxPopover`,`popoverConfig`],[`label`,`Project note`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`title`,`Project details`],[`shape`,`circle`,`height`,`3rem`],[`label`,`Loading content`,3,`lines`,`decorative`],[`shape`,`rectangle`,`height`,`5rem`],[`label`,`Destination`,`placeholder`,`Type a city or a custom destination`,`loadingText`,`Loading suggestions`,`emptyText`,`No suggestions. Enter your own destination.`,3,`queryChange`,`loadMore`,`optionSelected`,`formControl`,`options`,`externalFiltering`,`searching`,`loading`,`hasMore`,`loadError`,`readOnly`,`loadMoreConfig`],[`direction`,`horizontal`,`align`,`center`,3,`wrap`,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`bx-button`,``,`type`,`button`,`variant`,`text`,3,`click`,`disabled`],[`label`,`Read only`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Page size`,`subscriptSizing`,`dynamic`,1,`autocomplete-page-size`,3,`selectionChange`,`clearable`,`options`,`value`],[`direction`,`horizontal`,3,`wrap`,`gap`],[`label`,`Design`,3,`selectedChange`,`config`,`selected`],[3,`label`,`selectable`,`removable`,`config`],[`label`,`Read only`,3,`selected`,`readOnly`,`removable`],[`label`,`Disabled`,3,`disabled`],[3,`removed`,`activated`,`label`,`selectable`,`removable`,`config`],[`label`,`Allow multiple open panels`,3,`checkedChange`,`checked`],[3,`multiple`],[`title`,`Project details`,3,`expanded`,`titleTemplate`,`trailingTemplate`],[`label`,`Project name`],[`title`,`Keyboard and focus`],[`title`,`Lazy content`,3,`contentTemplate`],[`title`,`Unavailable section`,3,`disabled`],[`text`,`Saved`,`size`,`small`,3,`focusable`],[`size`,`small`,3,`leadingNumber`,`focusable`],[`label`,`Created when opened`],[`title`,`Project details`,3,`expandedChange`,`region`,`expanded`],[`title`,`Read-only open section`,3,`expanded`,`readOnly`],[`message`,`Your changes are saved in this workspace.`,3,`tone`,`title`],[`tone`,`info`,`title`,`Project details`,`dismissLabel`,`Dismiss notification`,`dismissFocusTarget`,`restore-banner`,3,`visibleChange`,`dismissed`,`dismissible`,`visible`],[`type`,`button`,`bx-button`,``,`bxAlertActions`,``,`variant`,`tonal`,3,`click`],[`type`,`button`,`id`,`restore-banner`,`bx-button`,``,`variant`,`tonal`],[`type`,`button`,`id`,`restore-banner`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`direction`,`horizontal`,`align`,`center`,3,`wrap`],[`label`,`Clickable`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Disable selectable card`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Read-only selectable card`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Highlight token`,`subscriptSizing`,`dynamic`,3,`selectionChange`,`options`,`clearable`,`value`],[`minColumnWidth`,`14rem`],[`title`,`Selectable workspace`,`ariaLabel`,`Select workspace`,3,`selectedChange`,`activated`,`clickable`,`disabled`,`readOnly`,`highlightColor`,`selected`],[`type`,`button`,`bx-card`,``,`title`,`Open reports`,`ariaLabel`,`Open reports`,3,`activated`,`highlightColor`],[`title`,`Unavailable workspace`,`ariaLabel`,`Unavailable workspace`,3,`clickable`,`disabled`,`selected`],[`title`,`Fixed workspace`,`ariaLabel`,`Fixed workspace`,3,`clickable`,`readOnly`,`selected`,`highlightColor`],[`title`,`Project details`,`subtitle`,`Content container`],[`type`,`button`,`bx-button`,``,`bxCardFooter`,``,`variant`,`tonal`,3,`click`],[`direction`,`responsive`,`justify`,`between`,`align`,`center`],[`minColumnWidth`,`12rem`],[`title`,`Project details`,`subtitle`,`Outlined surface`],[`title`,`Team activity`,`variant`,`elevated`],[3,`gap`],[`label`,`Ready`,3,`selectable`],[`title`,`Notes`,`variant`,`filled`]],template:function(t,e){if(t&1&&(A(0,`bx-stack`)(1,`p`),me(2,`Use Appearance to try themes, materials and reduced motion.`),P$1(),te(3,ci,11,0)(4,pi,8,4)(5,gi,5,1)(6,bi,12,21)(7,yi,10,9)(8,fi,17,7)(9,Si,11,5)(10,Ei,7,3)(11,ki,25,22)(12,Ti,21,2,`bx-container`,5),A(13,`output`,6),me(14),P$1()()),t&2){let o;C(3),ne$1((o=e.example())===`divider`?3:o===`popover`?4:o===`skeleton`?5:o===`autocomplete`?6:o===`chip`?7:o===`accordion`?8:o===`collapsible`?9:o===`alert`?10:o===`card`?11:12),C(11),Me(e.status())}},dependencies:[Wne,Hne,MF,mr,Z$1,Ti$1,nr,rr,SM,DM,IM,NM,od,hm,RM,AM,KM,XM,YM,OM,CM],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  inline-size: 100%;
}
p[_ngcontent-%COMP%], 
h3[_ngcontent-%COMP%] {
  margin: 0;
}
output[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  overflow-wrap: anywhere;
}
.container-demo[_ngcontent-%COMP%] {
  --%NS%bx-container-padding: 0;
}
.autocomplete-page-size[_ngcontent-%COMP%] {
  flex: 0 0 10rem;
  inline-size: 10rem;
  max-inline-size: 100%;
  margin-inline-start: auto;
}
@media (max-width: 640px) {
  .autocomplete-page-size[_ngcontent-%COMP%] {
    flex-basis: 100%;
    inline-size: 100%;
    margin-inline-start: 0;
  }
}`]})};var Wn=[`mod`,`shift`,`k`];var Ln=[`mod`,`k`];var Rn=[`mod`,`shift`,`v`];var An={mac:[`command`,`shift`,`d`],windows:[`ctrl`,`shift`,`d`],linux:[`alt`,`shift`,`d`],ios:[`command`,`shift`,`d`],android:[`ctrl`,`shift`,`d`],default:[`mod`,`alt`,`d`]};var Bn=[`mac`,`windows`,`linux`,`ios`,`android`,`default`];var Mi=()=>[`command`,`ctrl`,`option`,`shift`];function Pi(a,r){if(a&1){let t=tn();A(0,`bx-menu`,8)(1,`bx-menu-item`,9),ue(`action`,function(){at(t);let o=S$1();return lt$1(o.activate(`View opened`))}),P$1(),A(2,`bx-menu-item`,10),ue(`action`,function(){at(t);let o=S$1();return lt$1(o.activate(`Project duplicated`))}),P$1(),A(3,`bx-menu-item`,11),ue(`action`,function(){at(t);let o=S$1();return lt$1(o.activate(`Delete requested`))}),P$1()()}if(a&2){let t=S$1();C(),V$1(`shortcut`,t.viewShortcut)(`disabled`,t.viewDisabled.value),C(),V$1(`shortcut`,t.duplicateShortcut),C(),V$1(`danger`,!0)}}function Ni(a,r){if(a&1&&(A(0,`section`,7)(1,`h4`),me(2),P$1(),A(3,`p`),me(4,` Portable: `),A(5,`kbd`),me(6),P$1()(),A(7,`p`),me(8,` OS override: `),A(9,`kbd`),me(10),P$1()(),A(11,`p`),me(12,` Modifiers: `),A(13,`kbd`),me(14),P$1()()()),a&2){let t=r.$implicit,e=S$1();C(2),Me(t==="default"?`Unknown / server`:t),C(4),Me(e.bxShortcutService.resolve(e.openShortcut,t)?.join(` + `)),C(4),Me(e.bxShortcutService.resolve(e.duplicateShortcut,t)?.join(` + `)),C(4),Me(e.bxShortcutService.resolve(oO(4,Mi),t)?.join(` + `))}}var Ue=class a{bxShortcutService=p(Jf);menu=nn$1(Wa$1);openShortcut=Wn;sequencePrefix=Ln;viewShortcut=Rn;duplicateShortcut=An;platforms=Bn;viewDisabled=new BD(!1,{nonNullable:!0});typing=new BD(``,{nonNullable:!0});waitingForView=D(!1);status=D(`Ready. Open the menu with its button or keyboard shortcut.`);sequenceTimer;actionCount=0;constructor(){p(Z$2).onDestroy(()=>this.resetSequence())}onKeydown(r){if(this.bxShortcutService.matches(r,this.openShortcut)){r.preventDefault(),this.resetSequence(),this.menu()?.open(!0),this.status.set(`Menu opened by shortcut. Use arrow keys, Enter or Escape.`);return}if(this.bxShortcutService.matches(r,this.sequencePrefix)){r.preventDefault(),this.resetSequence(),this.waitingForView.set(!0),this.sequenceTimer=setTimeout(()=>this.resetSequence(),2e3);return}if(this.waitingForView()){if([`Meta`,`Control`,`Alt`,`Shift`].includes(r.key)||r.repeat)return;let t=this.bxShortcutService.matches(r,`v`);if(this.resetSequence(),t){r.preventDefault(),this.menu()?.open(!0),this.status.set(`Menu opened by sequence.`);return}}!this.viewDisabled.value&&this.bxShortcutService.matches(r,this.viewShortcut)?(r.preventDefault(),this.activate(`View opened`)):this.bxShortcutService.matches(r,this.duplicateShortcut)&&(r.preventDefault(),this.activate(`Project duplicated`))}activate(r){r===`View opened`&&this.viewDisabled.value||(this.resetSequence(),this.status.set(`${r} \xB7 action ${++this.actionCount}`),this.menu()?.close(!0))}resetSequence(){clearTimeout(this.sequenceTimer),this.sequenceTimer=void 0,this.waitingForView.set(!1)}static ɵfac=function(t){return new(t||a)};static ɵcmp=G$1({type:a,selectors:[[`app-menu-shortcut-examples`]],viewQuery:function(t,e){t&1&&yn(e.menu,Wa$1,5),t&2&&Et()},hostBindings:function(t,e){t&1&&ue(`keydown`,function(s){return e.onKeydown(s)},Io$1)(`pointerdown`,function(){return e.resetSequence()},Io$1)(`blur`,function(){return e.resetSequence()},ON)},decls:38,vars:11,consts:[[`actions`,``],[1,`shortcut-demo`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`menuPlacement`,`bottom`,`menuLabel`,`Project actions`,3,`bxMenuTrigger`,`menuHover`],[`role`,`status`],[`label`,`Disable Open view (click and shortcut)`,3,`formControl`],[`label`,`Type here to try the editable-control guard`,3,`formControl`],[1,`platform-previews`],[1,`platform-preview`],[1,`shortcut-menu`],[`label`,`Open view`,`icon`,`external-link`,3,`action`,`shortcut`,`disabled`],[`label`,`Duplicate project`,`icon`,`copy`,3,`action`,`shortcut`],[`label`,`Delete project`,`icon`,`trash-2`,3,`action`,`danger`]],template:function(t,e){if(t&1&&(A(0,`div`,1)(1,`p`)(2,`code`),me(3,`shortcut`),P$1(),me(4,` displays a hint. This example also handles keyboard events using `),A(5,`code`),me(6,`BxShortcutService.matches()`),P$1(),me(7,`.`),P$1(),A(8,`p`),me(9,`One lit surface follows enabled rows with pointer or keyboard focus. Navigate quickly to inspect retargeting, including the danger item.`),P$1(),A(10,`p`),me(11,`On this device, `),A(12,`code`),me(13,`mod`),P$1(),me(14),P$1(),A(15,`div`)(16,`button`,2),me(17),P$1()(),A(18,`p`),me(19),P$1(),A(20,`p`,3),me(21),P$1(),ep(22,Pi,4,4,`ng-template`,null,0,qr),A(24,`bx-checkbox`,4),nR(),P$1(),A(25,`bx-input-field`,5),nR(),P$1(),A(26,`p`),me(27,` The Open view shortcut works while this demo is mounted, including when the menu is closed. Shortcuts ignore typing fields, held-key repeats and composition. `),P$1(),A(28,`h3`),me(29,`Defaults across platforms`),P$1(),A(30,`p`),me(31,` These previews use the same service and definitions. `),A(32,`code`),me(33,`mod`),P$1(),me(34,` avoids repeating OS mappings; explicit overrides are available when bindings differ. `),P$1(),A(35,`div`,6),Mn(36,Ni,15,5,`section`,7,ca$1),P$1()()),t&2){let o=It(23);C(14),WC(` uses `,e.bxShortcutService.resolve(`mod`)?.join(``),` (detected platform: `,e.bxShortcutService.platform(),`).`),C(2),V$1(`bxMenuTrigger`,o)(`menuHover`,!1),K(`aria-keyshortcuts`,e.bxShortcutService.toAriaKeyshortcuts(e.openShortcut)),C(),wn(` Project actions · `,e.bxShortcutService.resolve(e.openShortcut)?.join(` + `),` `),C(2),WC(` Press `,e.bxShortcutService.resolve(e.openShortcut)?.join(` + `),` together to open the menu. Or press `,e.bxShortcutService.resolve(e.sequencePrefix)?.join(` + `),`, release the keys, then press V within two seconds. Escape, another key, a pointer press or leaving the window cancels the sequence. `),C(2),Me(e.waitingForView()?`Waiting for V…`:e.status()),C(3),V$1(`formControl`,e.viewDisabled),oR(),C(),V$1(`formControl`,e.typing),oR(),C(11),In$1(e.platforms)}},dependencies:[Z$1,Ti$1,nr,Wne,Hne,MF,pm,um,Wa$1],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
}
.shortcut-demo[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-3, 0.75rem);
  min-inline-size: 0;
}
.shortcut-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], 
.shortcut-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.shortcut-demo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  margin: 0;
  overflow-wrap: anywhere;
}
.shortcut-demo[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  max-inline-size: 100%;
  white-space: normal;
}
.shortcut-demo[_ngcontent-%COMP%]   [role=status][_ngcontent-%COMP%] {
  min-block-size: 3lh;
}
.shortcut-menu[_ngcontent-%COMP%] {
  display: block;
  inline-size: min(22rem, 100dvw - var(--%NS%bx-space-8, 2rem));
  max-block-size: 70dvh;
  overflow: auto;
  --%NS%bx-menu-min-width: 0;
}
.platform-previews[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--%NS%bx-space-3, 0.75rem);
}
@media (min-width: 768px) {
  .platform-previews[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.platform-preview[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-2, 0.5rem);
  min-inline-size: 0;
  padding: var(--%NS%bx-space-3, 0.75rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
}`]})};var Di=a=>({maxVisibleItems:a});function Ii(a,r){if(a&1){let t=tn();A(0,`bx-page-footer`)(1,`bx-stack`,12)(2,`button`,13),ue(`click`,function(){at(t);let o=S$1();return lt$1(o.result.set(`Footer action completed.`))}),me(3,`Try footer action`),P$1(),A(4,`span`,14),me(5),P$1()()()}if(a&2){let t=S$1();C(),V$1(`gap`,3),C(4),Me(t.result())}}var Ge=class a{title=D(`Workspace overview`);description=D(`A shared heading and consistent gutters for every page.`);breadcrumbsAfterControl=new BD(1,{nonNullable:!0});breadcrumbsAfter=dZ(this.breadcrumbsAfterControl.valueChanges,{initialValue:this.breadcrumbsAfterControl.value});nesting=D(1);automatic=D(!1);breadcrumbLimit=D(3);showFooter=D(!0);result=D(`No action yet.`);nestingOptions=[{label:`Root page`,value:0},{label:`One nesting`,value:1},{label:`Two nestings`,value:2},{label:`Three nestings`,value:3}];previewBreadcrumbs=g(()=>[...this.nesting()>=3?[{label:`Home`,route:`/home`}]:[],{label:`Components`,route:`/components`},...this.nesting()>=1?[{label:`Layout`,route:`/components/layout`}]:[],...this.nesting()>=2?[{label:`Page container`,route:`/components/layout/page-container`}]:[]]);constructor(){this.breadcrumbsAfterControl.valueChanges.pipe(rl(N0),yp()).subscribe(()=>{let r=this.breadcrumbsAfterControl.value,t=Math.max(0,Math.trunc(Number(r))||0);t!==r&&this.breadcrumbsAfterControl.setValue(t)})}static ɵfac=function(t){return new(t||a)};static ɵcmp=G$1({type:a,selectors:[[`app-page-examples`]],decls:16,vars:25,consts:[[3,`gap`],[`direction`,`responsive`,3,`gap`],[`label`,`Preview title`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Description`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Preview nesting`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Show breadcrumbs after nesting`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`min`,`formControl`],[`label`,`Visible breadcrumb entries`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`min`,`ngModel`],[`label`,`Use current route breadcrumbs`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Show footer`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`size`,`full`,1,`page-preview`,3,`breadcrumbs`,`breadcrumbsAfter`,`breadcrumbConfig`],[`sectionTitle`,`Primitives`,3,`pageTitle`,`pageDescription`,`autoResolveTitlesFromNavigation`,`headingLevel`],[`title`,`Page content`,`message`,`This section grows naturally with its content. The page keeps one scroll surface and the same responsive gutters.`],[`direction`,`responsive`,`align`,`center`,3,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`role`,`status`]],template:function(t,e){t&1&&(A(0,`bx-stack`,0)(1,`bx-stack`,1)(2,`bx-input-field`,2),nR(),QC(`ngModelChange`,function(s){return QA(e.title,s)||(e.title=s),s}),P$1(),A(3,`bx-input-field`,3),nR(),QC(`ngModelChange`,function(s){return QA(e.description,s)||(e.description=s),s}),P$1()(),A(4,`bx-stack`,1)(5,`bx-select`,4),nR(),QC(`ngModelChange`,function(s){return QA(e.nesting,s)||(e.nesting=s),s}),P$1(),A(6,`bx-input-field`,5),nR(),P$1(),A(7,`bx-input-field`,6),nR(),QC(`ngModelChange`,function(s){return QA(e.breadcrumbLimit,s)||(e.breadcrumbLimit=s),s}),P$1()(),A(8,`bx-stack`,1)(9,`bx-slide-toggle`,7),nR(),QC(`ngModelChange`,function(s){return QA(e.automatic,s)||(e.automatic=s),s}),P$1(),A(10,`bx-slide-toggle`,8),nR(),QC(`ngModelChange`,function(s){return QA(e.showFooter,s)||(e.showFooter=s),s}),P$1()(),A(11,`bx-page-container`,9),Ae(12,`bx-page-header`,10),A(13,`bx-page-content`),Ae(14,`bx-alert`,11),P$1(),te(15,Ii,6,2,`bx-page-footer`),P$1()()),t&2&&(V$1(`gap`,5),C(),V$1(`gap`,4),C(),XC(`ngModel`,e.title),oR(),C(),XC(`ngModel`,e.description),oR(),C(),V$1(`gap`,4),C(),V$1(`clearable`,!1)(`options`,e.nestingOptions),XC(`ngModel`,e.nesting),oR(),C(),V$1(`min`,0)(`formControl`,e.breadcrumbsAfterControl),oR(),C(),V$1(`min`,2),XC(`ngModel`,e.breadcrumbLimit),oR(),C(),V$1(`gap`,4),C(),XC(`ngModel`,e.automatic),oR(),C(),XC(`ngModel`,e.showFooter),oR(),C(),V$1(`breadcrumbs`,e.automatic()?void 0:e.previewBreadcrumbs())(`breadcrumbsAfter`,e.breadcrumbsAfter())(`breadcrumbConfig`,nc(23,Di,e.breadcrumbLimit())),C(),V$1(`pageTitle`,e.title())(`pageDescription`,e.description())(`autoResolveTitlesFromNavigation`,!1)(`headingLevel`,2),C(3),ne$1(e.showFooter()?15:-1))},dependencies:[Gne,Hne,SF,Wne,MF,DM,Z$1,nr,rr,ar,jM,FM,BM,Ga$1,OM],styles:[`
[_nghost-%COMP%], 
bx-stack[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
}
bx-stack[direction=responsive][_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  flex: 1 1 0;
}
.page-preview[_ngcontent-%COMP%] {
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  background: var(--%NS%bx-bg-canvas);
}`]})};function Oi(a,r){if(a&1){let t=tn();A(0,`bx-input-field`,13),nR(),ue(`ngModelChange`,function(o){at(t);let s=S$1();return lt$1(s.minimum.set(o))}),P$1(),A(1,`bx-input-field`,14),nR(),ue(`ngModelChange`,function(o){at(t);let s=S$1();return lt$1(s.maximum.set(o))}),P$1()}if(a&2){let t=S$1();V$1(`min`,0)(`ngModel`,t.minimum()),oR(),C(),V$1(`min`,0)(`ngModel`,t.maximum()),oR()}}var Ke=class a{edges=[{label:`Right edge (width)`,value:`right`},{label:`Left edge (width)`,value:`left`},{label:`Bottom edge (height)`,value:`bottom`},{label:`Top edge (height)`,value:`top`}];edge=D(`right`);size=D(180);minimum=D(60);maximum=D(280);disableShrink=D(!0);customBounds=D(!1);status=D(`Drag the inner edge, or focus it and use the arrow keys.`);horizontal=g(()=>this.edge()===`left`||this.edge()===`right`);changeEdge(r){this.edge.set(r),this.size.set(180)}record(r,t){this.status.set(`${r.source} resize ${t===`start`?`started`:r.canceled?`canceled`:`completed`} at ${Math.round(r.value)} px.`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=G$1({type:a,selectors:[[`app-resize-handle-examples`]],decls:22,vars:40,consts:[[`container`,``],[`target`,``],[`handle`,`bxResizeHandle`],[1,`resize-demo-controls`],[`label`,`Resize edge`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`resize-demo-actions`],[`label`,`Prevent shrinking below initial size`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Use explicit pixel limits`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`role`,`status`],[1,`resize-demo-container`],[`aria-label`,`Resizable example surface`,1,`resize-demo-target`],[`bxResizeHandle`,``,1,`resize-demo-handle`,3,`resizeValueChange`,`resizeStart`,`resizeEnd`,`resizeEdge`,`resizeTarget`,`resizeContainer`,`resizeInitialSize`,`resizeMinSize`,`resizeMaxSize`,`resizeDisableShrink`,`resizeLabel`,`resizeValue`],[`type`,`number`,`label`,`Minimum size (px)`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`min`,`ngModel`],[`type`,`number`,`label`,`Maximum size (px)`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`min`,`ngModel`]],template:function(t,e){if(t&1){let o=tn();A(0,`div`,3)(1,`bx-select`,4),nR(),ue(`ngModelChange`,function(d){return e.changeEdge(d)}),P$1(),te(2,Oi,2,4),P$1(),A(3,`div`,5)(4,`bx-slide-toggle`,6),nR(),ue(`ngModelChange`,function(d){return e.disableShrink.set(d)}),P$1(),A(5,`bx-slide-toggle`,7),nR(),ue(`ngModelChange`,function(d){return e.customBounds.set(d)}),P$1(),A(6,`button`,8),ue(`click`,function(){return e.size.set(180)}),me(7,`Reset to 180 px`),P$1()(),A(8,`p`,9),me(9),P$1(),A(10,`p`),me(11),P$1(),A(12,`div`,10,0)(14,`section`,11,1)(16,`p`),me(17),P$1(),A(18,`div`,12,2),QC(`resizeValueChange`,function(d){return at(o),QA(e.size,d)||(e.size=d),lt$1(d)}),ue(`resizeStart`,function(d){return e.record(d,`start`)})(`resizeEnd`,function(d){return e.record(d,`end`)}),P$1()()(),A(20,`p`),me(21,` Arrow keys move the edge by 10 px; Shift moves by 50 px. Home and End use the bounds. Double-click the handle or press Enter to restore its original size. Escape cancels an active gesture.
`),P$1()}if(t&2){let o=It(13),s=It(15),d=It(19);C(),V$1(`clearable`,!1)(`options`,e.edges)(`ngModel`,e.edge()),oR(),C(),ne$1(e.customBounds()?2:-1),C(2),V$1(`ngModel`,e.disableShrink()),oR(),C(),V$1(`ngModel`,e.customBounds()),oR(),C(4),Me(e.status()),C(2),KC(``,e.size(),` px · effective minimum `,d.minSize(),` px · effective maximum `,d.maxSize(),` px`),C(3),Ce(`width`,e.horizontal()?e.size()+`px`:`100%`)(`height`,e.horizontal()?`100%`:e.size()+`px`),pe(`is-horizontal`,e.horizontal())(`is-vertical`,!e.horizontal())(`edge-left`,e.edge()===`left`)(`edge-top`,e.edge()===`top`),C(3),wn(`Resize from the `,e.edge(),` edge.`),C(),pe(`handle-left`,e.edge()===`left`)(`handle-right`,e.edge()===`right`)(`handle-top`,e.edge()===`top`)(`handle-bottom`,e.edge()===`bottom`),V$1(`resizeEdge`,e.edge())(`resizeTarget`,s)(`resizeContainer`,o)(`resizeInitialSize`,180)(`resizeMinSize`,e.customBounds()?e.minimum():void 0)(`resizeMaxSize`,e.customBounds()?e.maximum():void 0)(`resizeDisableShrink`,e.disableShrink())(`resizeLabel`,e.horizontal()?`Resize example width`:`Resize example height`),XC(`resizeValue`,e.size)}},dependencies:[Gne,Hne,SF,Z$1,nr,rr,ar,Ka$1],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.resize-demo-controls[_ngcontent-%COMP%], 
.resize-demo-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-space-4, 1rem);
}
.resize-demo-actions[_ngcontent-%COMP%] {
  margin-block-start: var(--%NS%bx-space-4, 1rem);
}
.resize-demo-container[_ngcontent-%COMP%] {
  position: relative;
  block-size: 24rem;
  min-inline-size: 0;
  overflow: hidden;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: var(--%NS%bx-bg-canvas);
}
.resize-demo-target[_ngcontent-%COMP%] {
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  place-items: center;
  box-sizing: border-box;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: var(--%NS%bx-bg-surface-alt);
  color: var(--%NS%bx-text-primary);
}
.resize-demo-target.is-horizontal[_ngcontent-%COMP%] {
  max-width: 100%;
}
.resize-demo-target.is-vertical[_ngcontent-%COMP%] {
  max-height: 100%;
}
.resize-demo-target.edge-left[_ngcontent-%COMP%] {
  left: auto;
  right: 0;
}
.resize-demo-target.edge-top[_ngcontent-%COMP%] {
  top: auto;
  bottom: 0;
}
.resize-demo-target[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-3, 0.75rem);
  text-align: center;
  overflow-wrap: anywhere;
}
.resize-demo-handle[_ngcontent-%COMP%] {
  outline: none;
}
.resize-demo-handle[_ngcontent-%COMP%]::before, 
.resize-demo-handle[_ngcontent-%COMP%]::after {
  transition-property:
    opacity,
    background-color,
    color;
  transition-duration: calc(var(--%NS%bx-resize-grip-duration, 150ms) * (1 - var(--%NS%bx-reduced-motion, 0)));
  transition-timing-function: ease;
  content: "";
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
}
.resize-demo-handle[_ngcontent-%COMP%]::before {
  background: var(--%NS%bx-resize-rail-color, var(--%NS%bx-resize-grip-background, var(--%NS%bx-bg-element)));
}
.resize-demo-handle[_ngcontent-%COMP%]::after {
  left: 50%;
  top: 50%;
  inline-size: var(--%NS%bx-space-2, 0.5rem);
  block-size: var(--%NS%bx-space-6, 1.5rem);
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-resize-grip-border, var(--%NS%bx-border-default));
  color: var(--%NS%bx-resize-grip-color, var(--%NS%bx-text-secondary));
  background-color: var(--%NS%bx-resize-grip-background, var(--%NS%bx-bg-element));
  background-image:
    radial-gradient(
      circle,
      currentcolor 1px,
      transparent 1.25px),
    radial-gradient(
      circle,
      currentcolor 1px,
      transparent 1.25px),
    radial-gradient(
      circle,
      currentcolor 1px,
      transparent 1.25px);
  background-size: 3px 3px;
  background-position:
    center calc(50% - 4px),
    center,
    center calc(50% + 4px);
  background-repeat: no-repeat;
}
.resize-demo-handle[data-bx-resize-axis=horizontal][_ngcontent-%COMP%]::before {
  inset-block: var(--%NS%bx-space-2, 0.5rem);
  left: 50%;
  inline-size: var(--%NS%bx-space-1, 0.25rem);
  transform: translateX(-50%);
}
.resize-demo-handle[data-bx-resize-axis=vertical][_ngcontent-%COMP%]::before {
  inset-inline: var(--%NS%bx-space-2, 0.5rem);
  top: 50%;
  block-size: var(--%NS%bx-space-1, 0.25rem);
  transform: translateY(-50%);
}
.resize-demo-handle[data-bx-resize-axis=vertical][_ngcontent-%COMP%]::after {
  transform: translate(-50%, -50%) rotate(90deg);
}
.resize-demo-handle.bx-resize-visible[_ngcontent-%COMP%]::after, 
.resize-demo-handle[_ngcontent-%COMP%]:focus-visible::before, 
.resize-demo-handle[_ngcontent-%COMP%]:focus-visible::after {
  opacity: 1;
}
.resize-demo-handle[_ngcontent-%COMP%]:hover::before, 
.resize-demo-handle.bx-resizing[_ngcontent-%COMP%]::before {
  opacity: 1;
}
.resize-demo-handle[_ngcontent-%COMP%]:hover::after, 
.resize-demo-handle.bx-resizing[_ngcontent-%COMP%]::after {
  opacity: 0;
}
.resize-demo-handle[_ngcontent-%COMP%]:focus-visible::before {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: var(--%NS%bx-space-1, 0.25rem);
}
.resize-demo-handle.bx-resize-reduced-motion[_ngcontent-%COMP%]::before, 
.resize-demo-handle.bx-resize-reduced-motion[_ngcontent-%COMP%]::after {
  transition-duration: 0s;
}
@media (hover: none), (pointer: coarse), (forced-colors: active) {
  .resize-demo-handle[_ngcontent-%COMP%]::after {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .resize-demo-handle[_ngcontent-%COMP%]::before, 
   .resize-demo-handle[_ngcontent-%COMP%]::after {
    transition-duration: 0s;
  }
}
@media (forced-colors: active) {
  .resize-demo-handle[_ngcontent-%COMP%]::before {
    background: CanvasText;
  }
  .resize-demo-handle[_ngcontent-%COMP%]::after {
    forced-color-adjust: none;
    background-color: Canvas;
    border-color: CanvasText;
    color: CanvasText;
  }
  .resize-demo-handle[_ngcontent-%COMP%]:focus-visible::before {
    outline-color: Highlight;
  }
}
.resize-demo-handle[_ngcontent-%COMP%] {
  position: absolute;
}
.resize-demo-handle.handle-left[_ngcontent-%COMP%], 
.resize-demo-handle.handle-right[_ngcontent-%COMP%] {
  inset-block: 0;
  inline-size: var(--%NS%bx-space-6, 1.5rem);
}
.resize-demo-handle.handle-top[_ngcontent-%COMP%], 
.resize-demo-handle.handle-bottom[_ngcontent-%COMP%] {
  inset-inline: 0;
  block-size: var(--%NS%bx-space-6, 1.5rem);
}
.resize-demo-handle.handle-left[_ngcontent-%COMP%] {
  right: 100%;
}
.resize-demo-handle.handle-right[_ngcontent-%COMP%] {
  left: 100%;
}
.resize-demo-handle.handle-top[_ngcontent-%COMP%] {
  bottom: 100%;
}
.resize-demo-handle.handle-bottom[_ngcontent-%COMP%] {
  top: 100%;
}`]})};var Ee=class a{query=D(``);completedQuery=D(``);results=D([]);loading=D(!1);error=D(void 0);requests=D([]);controller;constructor(){p(Z$2).onDestroy(()=>this.controller?.abort()),this.search(``)}async search(r,t=!1){this.controller?.abort();let e$1=new AbortController;this.controller=e$1,this.query.set(r),this.loading.set(!0),this.error.set(void 0);try{if(await Z(250,e$1.signal),this.record(`Request: ${r||`(all components)`}`),await Z(800,e$1.signal),e$1.signal.aborted)return;if(t)throw new Error(`Simulated request failure`);let o=r.trim().toLocaleLowerCase(),s=e.map(d=>d.title).filter(d=>d.toLocaleLowerCase().includes(o));this.results.set(s),this.completedQuery.set(r),this.record(`Success: ${s.length} results`)}catch{if(e$1.signal.aborted)return;this.error.set({key:`searchError`}),this.record(`Failed: previous results retained; retry the same query`)}finally{this.controller===e$1&&this.loading.set(!1)}}record(r){this.requests.update(t=>[r,...t].slice(0,8))}static ɵfac=function(t){return new(t||a)};static ɵprov=ee$1({token:a,factory:a.ɵfac})};var Vi=()=>({key:`searchLabel`});var zi=()=>({key:`searchPlaceholder`});var Fn=()=>({key:`searchLoading`});var Wi=()=>({key:`searchClear`});var Li=()=>({key:`retry`});function Ri(a,r){if(a&1&&(A(0,`li`),me(1),P$1()),a&2){let t=r.$implicit;C(),Me(t)}}function Ai(a,r){if(a&1&&(A(0,`li`,11),me(1),P$1()),a&2){let t=S$1(2);C(),Me(t.emptyText())}}function Bi(a,r){if(a&1&&te(0,Ai,2,1,`li`,11),a&2){let t=S$1();ne$1(!t.mockSearchStore.loading()&&!t.mockSearchStore.error()?0:-1)}}function Fi(a,r){if(a&1&&(A(0,`li`),me(1),P$1()),a&2){let t=r.$implicit;C(),Me(t)}}var Xe=class a{demoI18nService=p(P);mockSearchStore=p(Ee);showLoadingText=D(!1);showLabel=D(!0);compact=D(!1);readOnly=D(!1);disabled=D(!1);emptyText=g(()=>(this.demoI18nService.version(),this.demoI18nService.translate(`searchEmpty`)));retryConfig={variant:`tonal`,color:`accent`};changeLoadingText(r){this.showLoadingText.set(r),r&&!this.mockSearchStore.loading()&&!this.readOnly()&&!this.disabled()&&this.mockSearchStore.search(this.mockSearchStore.query())}static ɵfac=function(t){return new(t||a)};static ɵcmp=G$1({type:a,selectors:[[`app-search-examples`]],features:[Vt([Ee,P,{provide:Se,useExisting:P}])],decls:22,vars:29,consts:[[1,`search-demo`],[`subscriptSizing`,`dynamic`,3,`search`,`retry`,`label`,`placeholder`,`compact`,`value`,`loading`,`loadError`,`loadingLabel`,`loadingAriaLabel`,`clearLabel`,`retryLabel`,`retryConfig`,`readOnly`,`disabled`],[1,`search-actions`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`label`,`Show label`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Compact`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Show loading text`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Readonly`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Disabled`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`aria-label`,`Search results`,1,`search-results`],[`aria-label`,`Request events`,1,`search-events`],[`role`,`status`]],template:function(t,e){t&1&&(A(0,`div`,0)(1,`bx-search-input`,1),ue(`search`,function(s){return e.mockSearchStore.search(s)})(`retry`,function(s){return e.mockSearchStore.search(s)}),P$1(),A(2,`div`,2)(3,`button`,3),ue(`click`,function(){return e.mockSearchStore.search(e.mockSearchStore.query(),!0)}),me(4,` Fail this search `),P$1(),A(5,`bx-checkbox`,4),QC(`checkedChange`,function(s){return QA(e.showLabel,s)||(e.showLabel=s),s}),P$1(),A(6,`bx-checkbox`,5),QC(`checkedChange`,function(s){return QA(e.compact,s)||(e.compact=s),s}),P$1(),A(7,`bx-checkbox`,6),ue(`checkedChange`,function(s){return e.changeLoadingText(s)}),P$1(),A(8,`bx-checkbox`,7),QC(`checkedChange`,function(s){return QA(e.readOnly,s)||(e.readOnly=s),s}),P$1(),A(9,`bx-checkbox`,8),QC(`checkedChange`,function(s){return QA(e.disabled,s)||(e.disabled=s),s}),P$1()(),A(10,`p`),me(11,` Requests debounce for 250ms and take 800ms. Type quickly to cancel older requests, or enter an unmatched term for empty results. Failure keeps the last successful results. Use Retry request to try the same query again. Enabling Show loading text previews another request. When a label is displayed, compact mode is automatically enabled regardless of the Compact setting. `),P$1(),A(12,`section`,9)(13,`p`),me(14),P$1(),A(15,`ul`),Mn(16,Ri,2,1,`li`,null,ca$1,!1,Bi,1,1),P$1()(),A(19,`ul`,10),Mn(20,Fi,2,1,`li`,null,Og),P$1()()),t&2&&(C(),V$1(`label`,e.showLabel()?oO(23,Vi):void 0)(`placeholder`,oO(24,zi))(`compact`,e.compact())(`value`,e.mockSearchStore.query())(`loading`,e.mockSearchStore.loading())(`loadError`,e.mockSearchStore.error())(`loadingLabel`,e.showLoadingText()?oO(25,Fn):void 0)(`loadingAriaLabel`,oO(26,Fn))(`clearLabel`,oO(27,Wi))(`retryLabel`,oO(28,Li))(`retryConfig`,e.retryConfig)(`readOnly`,e.readOnly())(`disabled`,e.disabled()),C(2),V$1(`disabled`,e.mockSearchStore.loading()||e.disabled()||e.readOnly()),C(2),XC(`checked`,e.showLabel),C(),XC(`checked`,e.compact),C(),V$1(`checked`,e.showLoadingText()),C(),XC(`checked`,e.readOnly),C(),XC(`checked`,e.disabled),C(3),K(`aria-busy`,e.mockSearchStore.loading()),C(2),WC(`Last completed search: `,e.mockSearchStore.completedQuery()||`all components`,` · `,e.mockSearchStore.results().length,` results`),C(2),In$1(e.mockSearchStore.results()),C(4),In$1(e.mockSearchStore.requests()))},dependencies:[Z$1,Ti$1,qe$2],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
}
.search-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-4, 1rem);
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
.search-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
}
.search-results[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-3, 0.75rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
}
.search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  columns: 2;
  padding-inline-start: var(--%NS%bx-space-4, 1rem);
}
.search-events[_ngcontent-%COMP%] {
  padding-inline-start: var(--%NS%bx-space-4, 1rem);
  font-size: 0.75rem;
  color: var(--%NS%bx-text-secondary);
}
@media (max-width: 640px) {
  .search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
    columns: 1;
  }
}`]})};var ot=[{id:`workspace`,title:`Workspace`,icon:{name:`building-2`},collapsible:!0,items:[{id:`overview`,route:`/components/side-nav/overview`,label:`Overview`,icon:{name:`house`},visible:!0},{id:`projects`,route:`/components/side-nav/projects`,label:`Projects`,icon:{name:`folder`},visible:!0,data:{tags:[{text:`12`,config:{color:`info`}}]},children:[{id:`design`,route:`/components/side-nav/design`,label:`Design system`,icon:{name:`palette`},visible:!0,children:[{id:`library`,route:`/components/side-nav/library`,label:`Component library`,icon:{name:`blocks`},visible:!0,children:[...Array.from({length:14},(a,r)=>({id:`pattern-${r}`,route:`/components/side-nav/pattern-${r}`,label:`Pattern ${r+1}`,icon:{name:`component`},visible:!0})),{id:`tokens`,route:`/components/side-nav/tokens`,label:`Design tokens`,icon:{name:`swatch-book`},visible:!0,data:{label:{key:`nav.tokens`},keywords:[{key:`nav.palette`},{key:`nav.variables`}],endIcon:{name:`sparkles`},tags:[{text:{key:`nav.new`},config:{color:`success`}}]}},{id:`accessibility`,route:`/components/side-nav/accessibility`,label:`Accessibility`,icon:{name:`accessibility`},visible:!0}]},{id:`research`,route:`/components/side-nav/research`,label:`Research`,icon:{name:`flask-conical`},visible:!0}]},{id:`releases`,route:`/components/side-nav/releases`,label:`Releases`,icon:{name:`rocket`},visible:!0}]},{id:`reports`,route:`/components/side-nav/reports`,label:`Reports`,icon:{name:`chart-column`},visible:!0},{id:`disabled`,route:`/components/side-nav/disabled`,label:`Restricted area`,icon:{name:`lock`},visible:!0,data:{disabled:!0}}]},{id:`settings`,title:`Settings`,icon:{name:`settings`},collapsible:!0,items:[{id:`members`,route:`/components/side-nav/members`,label:`Team members`,icon:{name:`users`},visible:!0},{id:`billing`,route:`/components/side-nav/billing`,label:`Billing`,icon:{name:`credit-card`},visible:!0}]}];var rt={en:{"top.name":`Demo top navigation`,"top.compact":`Force compact menu`,"top.width":`Preview width (px)`,"top.icons":`Leading icons`,"top.sticky":`Sticky bar`,"top.custom":`Custom item template`,"top.actions":`Extra action controls`,"top.title":`Workspace overview`,"top.description":`Labels navigate directly. Separate chevrons browse children in one panel. Search shows flat results with their parent paths. Select a result and clear search to reveal it in its submenu. Click a path ancestor to return to its panel. Shrink this preview or add actions to exercise the compact menu.`,"top.modeCompact":`Compact navigation: all pages remain reachable in the menu.`,"top.modeExpanded":`Horizontal navigation: use Left/Right, Home/End, or the separate disclosure controls.`,"top.settings":`Settings`,"top.actionDone":`Settings action selected.`,"top.help":`Help`,"top.helpDone":`Help action selected.`,"top.searchPlaceholder":`Search top navigation…`,"nav.workspace":`Workspace`,"nav.settings":`Settings`,"nav.overview":`Overview`,"nav.projects":`Projects`,"nav.design":`Design system`,"nav.library":`Component library`,"nav.tokens":`Design tokens`,"nav.accessibility":`Accessibility`,"nav.research":`Research`,"nav.releases":`Releases`,"nav.reports":`Reports`,"nav.disabled":`Restricted area`,"nav.members":`Team members`,"nav.billing":`Billing`,"nav.new":`New`,"nav.search":`Search demo navigation`,"nav.placeholder":`Try “dsgn tkns” or “palette”`,"nav.name":`Demo workspace`,"nav.clear":`Clear search`,"nav.empty":`No matching pages.`,"nav.open":`Open navigation`,"nav.close":`Close navigation`,"nav.collapse":`Collapse navigation`,"nav.expand":`Expand navigation`,"nav.submenu":`Open submenu`,"nav.result":`Search result`,"nav.back":`Back`,"nav.path":`Navigation path`,"nav.hiddenPath":`Show hidden ancestors`,"demo.inlineMode":`Submenus replace the list inside this navigation. Back restores the previous level.`,"demo.right":`Right side`,"demo.rail":`Icon rail`,"demo.mobile":`Force mobile drawer`,"demo.search":`Search`,"demo.icons":`Item icons`,"demo.breadcrumbLimit":`Visible path entries`,"demo.longLabels":`Long labels`,"demo.longSuffix":`— shared workspace navigation, design resources and configuration`,"demo.rtl":`RTL`,"demo.custom":`Custom item template`,"demo.height":`Panel height (px)`,"demo.language":`Language`,"demo.instructions":`Select a label to visit its page, or its chevron to browse children. Search “dsgn tkns” or “palette” for flat results with parent paths. After selecting a result, clear search to reveal it in its submenu. Click an ancestor in the path to return to its panel.`,"demo.studio":`Studio`,"demo.admin":`Alex · Workspace admin`,"demo.title":`A calmer workspace`,"demo.description":`The header, footer, item presentation, side and panel size are configurable. The mobile drawer stays inside this preview.`,"demo.open":`Open demo drawer`,"demo.select":`Select a page to see its stable ID here.`,"demo.keyboard":`Use arrow keys and Home/End within a list. Enter or Space activates a disclosure. Back, Escape, or the opposite arrow returns one level; Escape at the root closes the mobile drawer.`,"demo.routes":`Configure real routes with withInAppNavigation`,"nav.palette":`palette`,"nav.variables":`color variables`,"nav.pattern-0":`Pattern 1`,"nav.pattern-1":`Pattern 2`,"nav.pattern-2":`Pattern 3`,"nav.pattern-3":`Pattern 4`,"nav.pattern-4":`Pattern 5`,"nav.pattern-5":`Pattern 6`,"nav.pattern-6":`Pattern 7`,"nav.pattern-7":`Pattern 8`,"nav.pattern-8":`Pattern 9`,"nav.pattern-9":`Pattern 10`,"nav.pattern-10":`Pattern 11`,"nav.pattern-11":`Pattern 12`,"nav.pattern-12":`Pattern 13`,"nav.pattern-13":`Pattern 14`},es:{"top.name":`Navegación superior de demostración`,"top.compact":`Forzar menú compacto`,"top.width":`Ancho de la vista previa (px)`,"top.icons":`Iconos iniciales`,"top.sticky":`Barra fija`,"top.custom":`Plantilla de elemento personalizada`,"top.actions":`Controles de acción adicionales`,"top.title":`Resumen del espacio de trabajo`,"top.description":`Las etiquetas abren las páginas. Las flechas muestran las subpáginas en un panel. La búsqueda muestra resultados con sus rutas superiores. Selecciona un resultado y borra la búsqueda para verlo en su submenú. Selecciona un antecesor de la ruta para volver a su panel. Reduce esta vista previa o añade acciones para probar el menú compacto.`,"top.modeCompact":`Navegación compacta: todas las páginas siguen disponibles en el menú.`,"top.modeExpanded":`Navegación horizontal: usa Izquierda/Derecha, Inicio/Fin o los controles de expansión.`,"top.settings":`Configuración`,"top.actionDone":`Acción de configuración seleccionada.`,"top.help":`Ayuda`,"top.helpDone":`Acción de ayuda seleccionada.`,"top.searchPlaceholder":`Buscar en la navegación superior…`,"nav.workspace":`Espacio de trabajo`,"nav.settings":`Configuración`,"nav.overview":`Resumen`,"nav.projects":`Proyectos`,"nav.design":`Sistema de diseño`,"nav.library":`Biblioteca de componentes`,"nav.tokens":`Tokens de diseño`,"nav.accessibility":`Accesibilidad`,"nav.research":`Investigación`,"nav.releases":`Versiones`,"nav.reports":`Informes`,"nav.disabled":`Área restringida`,"nav.members":`Miembros del equipo`,"nav.billing":`Facturación`,"nav.new":`Nuevo`,"nav.search":`Buscar en la navegación de demostración`,"nav.placeholder":`Prueba «tokens» o «paleta»`,"nav.name":`Espacio de trabajo de demostración`,"nav.clear":`Borrar búsqueda`,"nav.empty":`No hay páginas coincidentes.`,"nav.open":`Abrir navegación`,"nav.close":`Cerrar navegación`,"nav.collapse":`Contraer navegación`,"nav.expand":`Expandir navegación`,"nav.submenu":`Abrir submenú`,"nav.result":`Resultado de búsqueda`,"nav.back":`Atrás`,"nav.path":`Ruta de navegación`,"nav.hiddenPath":`Mostrar antecesores ocultos`,"demo.inlineMode":`Los submenús reemplazan la lista de esta navegación. Atrás restaura el nivel anterior.`,"demo.right":`Lado derecho`,"demo.rail":`Barra de iconos`,"demo.mobile":`Forzar panel móvil`,"demo.search":`Búsqueda`,"demo.icons":`Iconos de elementos`,"demo.breadcrumbLimit":`Elementos visibles de la ruta`,"demo.longLabels":`Etiquetas largas`,"demo.longSuffix":`— navegación compartida, recursos de diseño y configuración del espacio de trabajo`,"demo.rtl":`De derecha a izquierda`,"demo.custom":`Plantilla de elemento personalizada`,"demo.height":`Altura del panel (px)`,"demo.language":`Idioma`,"demo.instructions":`Selecciona una etiqueta para visitar su página o su flecha para ver las subpáginas. Busca «tokens» o «paleta» para ver resultados con rutas superiores. Tras seleccionar un resultado, borra la búsqueda para verlo en su submenú. Selecciona un antecesor de la ruta para volver a su panel.`,"demo.studio":`Estudio`,"demo.admin":`Alex · Administrador del espacio de trabajo`,"demo.title":`Un espacio de trabajo más tranquilo`,"demo.description":`La cabecera, el pie, la presentación de los elementos, el lado y el tamaño del panel son configurables. El panel móvil permanece dentro de esta vista previa.`,"demo.open":`Abrir panel de demostración`,"demo.select":`Selecciona una página para ver aquí su identificador estable.`,"demo.keyboard":`Usa las flechas e Inicio/Fin en una lista. Intro o Espacio activa la expansión. Atrás, Escape o la flecha opuesta retrocede un nivel; Escape en la raíz cierra el panel móvil.`,"demo.routes":`Configura rutas reales con withInAppNavigation`,"nav.palette":`paleta`,"nav.variables":`variables de color`,"nav.pattern-0":`Patrón 1`,"nav.pattern-1":`Patrón 2`,"nav.pattern-2":`Patrón 3`,"nav.pattern-3":`Patrón 4`,"nav.pattern-4":`Patrón 5`,"nav.pattern-5":`Patrón 6`,"nav.pattern-6":`Patrón 7`,"nav.pattern-7":`Patrón 8`,"nav.pattern-8":`Patrón 9`,"nav.pattern-9":`Patrón 10`,"nav.pattern-10":`Patrón 11`,"nav.pattern-11":`Patrón 12`,"nav.pattern-12":`Patrón 13`,"nav.pattern-13":`Patrón 14`},fr:{"top.name":`Navigation supérieure de démonstration`,"top.compact":`Forcer le menu compact`,"top.width":`Largeur de l’aperçu (px)`,"top.icons":`Icônes de début`,"top.sticky":`Barre fixe`,"top.custom":`Modèle d’élément personnalisé`,"top.actions":`Commandes supplémentaires`,"top.title":`Vue d’ensemble de l’espace de travail`,"top.description":`Les libellés ouvrent les pages. Les flèches affichent les sous-pages dans un panneau. La recherche affiche des résultats avec leurs chemins parents. Sélectionnez un résultat et effacez la recherche pour le voir dans son sous-menu. Sélectionnez un ancêtre du chemin pour revenir à son panneau. Réduisez cet aperçu ou ajoutez des actions pour essayer le menu compact.`,"top.modeCompact":`Navigation compacte : toutes les pages restent accessibles dans le menu.`,"top.modeExpanded":`Navigation horizontale : utilisez Gauche/Droite, Début/Fin ou les commandes de déploiement.`,"top.settings":`Paramètres`,"top.actionDone":`Action des paramètres sélectionnée.`,"top.help":`Aide`,"top.helpDone":`Action d’aide sélectionnée.`,"top.searchPlaceholder":`Rechercher dans la navigation supérieure…`,"nav.workspace":`Espace de travail`,"nav.settings":`Paramètres`,"nav.overview":`Vue d’ensemble`,"nav.projects":`Projets`,"nav.design":`Système de design`,"nav.library":`Bibliothèque de composants`,"nav.tokens":`Tokens de design`,"nav.accessibility":`Accessibilité`,"nav.research":`Recherche`,"nav.releases":`Versions`,"nav.reports":`Rapports`,"nav.disabled":`Zone restreinte`,"nav.members":`Membres de l’équipe`,"nav.billing":`Facturation`,"nav.new":`Nouveau`,"nav.search":`Rechercher dans la navigation de démonstration`,"nav.placeholder":`Essayez « tokens » ou « palette »`,"nav.name":`Espace de travail de démonstration`,"nav.clear":`Effacer la recherche`,"nav.empty":`Aucune page correspondante.`,"nav.open":`Ouvrir la navigation`,"nav.close":`Fermer la navigation`,"nav.collapse":`Réduire la navigation`,"nav.expand":`Déployer la navigation`,"nav.submenu":`Ouvrir le sous-menu`,"nav.result":`Résultat de recherche`,"nav.back":`Retour`,"nav.path":`Chemin de navigation`,"nav.hiddenPath":`Afficher les ancêtres masqués`,"demo.inlineMode":`Les sous-menus remplacent la liste de cette navigation. Retour restaure le niveau précédent.`,"demo.right":`Côté droit`,"demo.rail":`Barre d’icônes`,"demo.mobile":`Forcer le panneau mobile`,"demo.search":`Recherche`,"demo.icons":`Icônes des éléments`,"demo.breadcrumbLimit":`Éléments visibles du chemin`,"demo.longLabels":`Libellés longs`,"demo.longSuffix":`— navigation partagée, ressources de conception et configuration de l’espace de travail`,"demo.rtl":`De droite à gauche`,"demo.custom":`Modèle d’élément personnalisé`,"demo.height":`Hauteur du panneau (px)`,"demo.language":`Langue`,"demo.instructions":`Sélectionnez un libellé pour visiter sa page ou sa flèche pour afficher les sous-pages. Recherchez « tokens » ou « palette » pour voir des résultats avec leurs chemins parents. Après avoir sélectionné un résultat, effacez la recherche pour le voir dans son sous-menu. Sélectionnez un ancêtre du chemin pour revenir à son panneau.`,"demo.studio":`Studio`,"demo.admin":`Alex · Administrateur de l’espace de travail`,"demo.title":`Un espace de travail plus calme`,"demo.description":`L’en-tête, le pied de page, la présentation des éléments, le côté et la taille du panneau sont configurables. Le panneau mobile reste dans cet aperçu.`,"demo.open":`Ouvrir le panneau de démonstration`,"demo.select":`Sélectionnez une page pour voir ici son identifiant stable.`,"demo.keyboard":`Utilisez les flèches et Début/Fin dans une liste. Entrée ou Espace active le déploiement. Retour, Échap ou la flèche opposée remonte d’un niveau ; Échap à la racine ferme le panneau mobile.`,"demo.routes":`Configurer des routes réelles avec withInAppNavigation`,"nav.palette":`palette`,"nav.variables":`variables de couleur`,"nav.pattern-0":`Motif 1`,"nav.pattern-1":`Motif 2`,"nav.pattern-2":`Motif 3`,"nav.pattern-3":`Motif 4`,"nav.pattern-4":`Motif 5`,"nav.pattern-5":`Motif 6`,"nav.pattern-6":`Motif 7`,"nav.pattern-7":`Motif 8`,"nav.pattern-8":`Motif 9`,"nav.pattern-9":`Motif 10`,"nav.pattern-10":`Motif 11`,"nav.pattern-11":`Motif 12`,"nav.pattern-12":`Motif 13`,"nav.pattern-13":`Motif 14`},de:{"top.name":`Demo-Kopfnavigation`,"top.compact":`Kompaktes Menü erzwingen`,"top.width":`Vorschaubreite (px)`,"top.icons":`Führende Symbole`,"top.sticky":`Fixierte Leiste`,"top.custom":`Eigene Elementvorlage`,"top.actions":`Zusätzliche Aktionen`,"top.title":`Arbeitsbereich im Überblick`,"top.description":`Beschriftungen öffnen Seiten. Separate Pfeile zeigen Unterseiten in einem Bereich. Die Suche zeigt Ergebnisse mit ihren übergeordneten Pfaden. Wähle ein Ergebnis und lösche die Suche, um es im Untermenü zu sehen. Wähle einen übergeordneten Pfadeintrag, um zu dessen Bereich zurückzukehren. Verkleinere die Vorschau oder füge Aktionen hinzu, um das kompakte Menü zu testen.`,"top.modeCompact":`Kompakte Navigation: Alle Seiten bleiben über das Menü erreichbar.`,"top.modeExpanded":`Horizontale Navigation: Verwende Links/Rechts, Pos1/Ende oder die separaten Aufklappschaltflächen.`,"top.settings":`Einstellungen`,"top.actionDone":`Einstellungsaktion ausgewählt.`,"top.help":`Hilfe`,"top.helpDone":`Hilfeaktion ausgewählt.`,"top.searchPlaceholder":`Kopfnavigation durchsuchen…`,"nav.workspace":`Arbeitsbereich`,"nav.settings":`Einstellungen`,"nav.overview":`Übersicht`,"nav.projects":`Projekte`,"nav.design":`Designsystem`,"nav.library":`Komponentenbibliothek`,"nav.tokens":`Design-Tokens`,"nav.accessibility":`Barrierefreiheit`,"nav.research":`Forschung`,"nav.releases":`Versionen`,"nav.reports":`Berichte`,"nav.disabled":`Geschützter Bereich`,"nav.members":`Teammitglieder`,"nav.billing":`Abrechnung`,"nav.new":`Neu`,"nav.search":`Demo-Navigation durchsuchen`,"nav.placeholder":`Versuche „Tokens“ oder „Palette“`,"nav.name":`Demo-Arbeitsbereich`,"nav.clear":`Suche löschen`,"nav.empty":`Keine passenden Seiten.`,"nav.open":`Navigation öffnen`,"nav.close":`Navigation schließen`,"nav.collapse":`Navigation einklappen`,"nav.expand":`Navigation ausklappen`,"nav.submenu":`Untermenü öffnen`,"nav.result":`Suchergebnis`,"nav.back":`Zurück`,"nav.path":`Navigationspfad`,"nav.hiddenPath":`Verborgene Vorgänger anzeigen`,"demo.inlineMode":`Untermenüs ersetzen die Liste in dieser Navigation. Zurück stellt die vorherige Ebene wieder her.`,"demo.right":`Rechte Seite`,"demo.rail":`Symbolleiste`,"demo.mobile":`Mobile Seitenleiste erzwingen`,"demo.search":`Suche`,"demo.icons":`Eintragssymbole`,"demo.breadcrumbLimit":`Sichtbare Pfadeinträge`,"demo.longLabels":`Lange Beschriftungen`,"demo.longSuffix":`— gemeinsame Arbeitsbereichsnavigation, Designressourcen und Konfiguration`,"demo.rtl":`Von rechts nach links`,"demo.custom":`Eigene Elementvorlage`,"demo.height":`Bereichshöhe (px)`,"demo.language":`Sprache`,"demo.instructions":`Wähle eine Beschriftung, um ihre Seite zu öffnen, oder den Pfeil, um Unterseiten anzuzeigen. Suche nach „Tokens“ oder „Palette“ für Ergebnisse mit übergeordneten Pfaden. Lösche nach der Auswahl eines Ergebnisses die Suche, um es im Untermenü zu sehen. Wähle einen übergeordneten Pfadeintrag, um zu dessen Bereich zurückzukehren.`,"demo.studio":`Studio`,"demo.admin":`Alex · Arbeitsbereichsadministrator`,"demo.title":`Ein ruhigerer Arbeitsbereich`,"demo.description":`Kopfzeile, Fußzeile, Elementdarstellung, Seite und Bereichsgröße sind konfigurierbar. Die mobile Seitenleiste bleibt innerhalb dieser Vorschau.`,"demo.open":`Demo-Seitenleiste öffnen`,"demo.select":`Wähle eine Seite, um hier ihre stabile ID zu sehen.`,"demo.keyboard":`Verwende Pfeiltasten und Pos1/Ende innerhalb einer Liste. Eingabe oder Leertaste klappt Unterseiten auf. Zurück, Escape oder der entgegengesetzte Pfeil führt eine Ebene zurück; Escape auf der obersten Ebene schließt die mobile Seitenleiste.`,"demo.routes":`Echte Routen mit withInAppNavigation konfigurieren`,"nav.palette":`Palette`,"nav.variables":`Farbvariablen`,"nav.pattern-0":`Muster 1`,"nav.pattern-1":`Muster 2`,"nav.pattern-2":`Muster 3`,"nav.pattern-3":`Muster 4`,"nav.pattern-4":`Muster 5`,"nav.pattern-5":`Muster 6`,"nav.pattern-6":`Muster 7`,"nav.pattern-7":`Muster 8`,"nav.pattern-8":`Muster 9`,"nav.pattern-9":`Muster 10`,"nav.pattern-10":`Muster 11`,"nav.pattern-11":`Muster 12`,"nav.pattern-12":`Muster 13`,"nav.pattern-13":`Muster 14`}};function Qe(a,r$1){return r$1.version?.(),ot.map(t=>s(r({},t),{title:r$1.translate(`nav.${t.id}`),items:jn(t.items,a,r$1)}))}function jn(a,r$2,t){return a.map(e=>s(r({},e),{route:`${r$2}/${e.id}`,label:t.translate(`nav.${e.id}`),data:s(r({},e.data),{label:{key:`nav.${e.id}`},keywords:[...e.data?.keywords??[],e.label]}),children:jn(e.children??[],r$2,t)}))}var qn=`const navigation = defineNavigation({
  sections: [{ id: 'workspace', title: 'Workspace', icon: { name: 'building-2' },
    collapsible: true, showInBreadcrumbs: true }],
  sideNav: { side: 'left', persistenceKey: 'my-app.navigation' }
});
const { withInAppNavigation } = navigation;
export const routes: Routes = [withInAppNavigation({ path: 'projects', children: [
  withInAppNavigation({ path: 'tokens', loadComponent: () => import('./tokens').then(m => m.Tokens) },
    { label: { key: 'nav.tokens' }, icon: { name: 'swatch-book' },
      keywords: ['palette'], tags: [{ text: 'New' }], showInBreadcrumbs: false })
]}, { label: 'Projects', section: 'workspace', icon: { name: 'folder' } })];
// In application providers:
provideRouter(routes), provideNavigation(navigation.config)
// In your shell: <bx-side-nav />`;var ee=class a{languages=dt;version=D(0);language=D(`en`);translate(r){return this.version(),rt[this.language()]?.[r]??r}setLanguage(r){r===null||r===this.language()||(this.language.set(r),this.version.update(t=>t+1))}static ɵfac=function(t){return new(t||a)};static ɵprov=ee$1({token:a,factory:a.ɵfac})};function ji(a,r){if(a&1&&(A(0,`strong`),me(1),P$1()),a&2){let t=S$1(2);C(),Me(t.text().studio)}}function qi(a,r){if(a&1&&(Ae(0,`bx-icon`,19),te(1,ji,2,1,`strong`)),a&2){let t=r.$implicit,e=r.mobile;C(),ne$1(!t&&!e?1:-1)}}function Hi(a,r){if(a&1&&(A(0,`span`),me(1),P$1()),a&2){let t=S$1(2);C(),Me(t.text().admin)}}function Ui(a,r){if(a&1&&(Ae(0,`bx-icon`,20),te(1,Hi,2,1,`span`)),a&2){let t=r.$implicit;C(),ne$1(t?-1:1)}}function Gi(a,r){if(a&1){let t=tn();A(0,`button`,21),ue(`click`,function(o){at(t),S$1();let s=It(19);return lt$1(s.open(o))}),me(1),P$1()}if(a&2){let t=S$1();C(),Me(t.text().open)}}function Ki(a,r){if(a&1&&Ae(0,`bx-icon`,22),a&2){let t=S$1().$implicit;V$1(`name`,t.icon?.name??`circle`)}}function Xi(a,r){if(a&1&&(A(0,`span`),me(1),P$1(),A(2,`small`,23),me(3,`↗`),P$1()),a&2){let t=S$1().$implicit;C(),Me(t.label)}}function Qi(a,r){if(a&1&&(te(0,Ki,1,1,`bx-icon`,22),te(1,Xi,4,1)),a&2){let t=r.collapsed,e=S$1();ne$1(t||e.icons()?0:-1),C(),ne$1(t?-1:1)}}var Ye=class a{navigationDemoI18nService=p(ee);groups=g(()=>{let r$3=Qe(`/components/side-nav`,this.navigationDemoI18nService);if(!this.longLabels())return r$3;let t=this.navigationDemoI18nService.translate(`demo.longSuffix`);return r$3.map(e=>s(r({},e),{title:`${e.title} ${t}`,items:this.extendLabels(e.items,t)}))});text=g(()=>({right:this.navigationDemoI18nService.translate(`demo.right`),rail:this.navigationDemoI18nService.translate(`demo.rail`),mobile:this.navigationDemoI18nService.translate(`demo.mobile`),inlineMode:this.navigationDemoI18nService.translate(`demo.inlineMode`),search:this.navigationDemoI18nService.translate(`demo.search`),icons:this.navigationDemoI18nService.translate(`demo.icons`),breadcrumbLimit:this.navigationDemoI18nService.translate(`demo.breadcrumbLimit`),longLabels:this.navigationDemoI18nService.translate(`demo.longLabels`),rtl:this.navigationDemoI18nService.translate(`demo.rtl`),custom:this.navigationDemoI18nService.translate(`demo.custom`),height:this.navigationDemoI18nService.translate(`demo.height`),language:this.navigationDemoI18nService.translate(`demo.language`),instructions:this.navigationDemoI18nService.translate(`demo.instructions`),studio:this.navigationDemoI18nService.translate(`demo.studio`),admin:this.navigationDemoI18nService.translate(`demo.admin`),title:this.navigationDemoI18nService.translate(`demo.title`),description:this.navigationDemoI18nService.translate(`demo.description`),open:this.navigationDemoI18nService.translate(`demo.open`),keyboard:this.navigationDemoI18nService.translate(`demo.keyboard`),routes:this.navigationDemoI18nService.translate(`demo.routes`)}));routeExample=qn;right=D(!1);collapsed=D(!1);mobile=D(!1);searchable=D(!0);icons=D(!0);longLabels=D(!1);rtl=D(!1);custom=D(!1);height=D(860);breadcrumbLimit=D(3);selected=D(void 0);selection=g(()=>{let r=this.selected();return r?`${this.navigationDemoI18nService.translate(`nav.${r.id}`)} \xB7 ${r.id}`:this.navigationDemoI18nService.translate(`demo.select`)});config=g(()=>({position:`inline`,showMobileTrigger:!1,side:this.right()?`right`:`left`,mobile:this.mobile(),searchable:this.searchable(),showItemIcons:this.icons(),breadcrumbConfig:{maxVisibleItems:Number(this.breadcrumbLimit())||3,overflowLabel:{key:`nav.hiddenPath`}},persistenceKey:`blocks.side-nav.demo.v1`,ariaLabel:{key:`nav.name`},searchLabel:{key:`nav.search`},searchPlaceholder:{key:`nav.placeholder`},clearSearchLabel:{key:`nav.clear`},emptyText:{key:`nav.empty`},openLabel:{key:`nav.open`},closeLabel:{key:`nav.close`},collapseLabel:{key:`nav.collapse`},expandLabel:{key:`nav.expand`},submenuLabel:{key:`nav.submenu`},resultLabel:{key:`nav.result`},backLabel:{key:`nav.back`},pathLabel:{key:`nav.path`}}));select(r){this.selected.set(r)}extendLabels(r$4,t){return r$4.map(e=>{let o=`${e.label} ${t}`;return s(r({},e),{label:o,data:s(r({},e.data),{label:o}),children:this.extendLabels(e.children??[],t)})})}static ɵfac=function(t){return new(t||a)};static ɵcmp=G$1({type:a,selectors:[[`app-side-nav-examples`]],features:[Vt([ee,{provide:Se,useExisting:ee}])],decls:41,vars:46,consts:[[`nav`,``],[`customItem`,``],[1,`nav-demo-top-row`],[`subscriptSizing`,`dynamic`,3,`selectionChange`,`label`,`clearable`,`options`,`value`],[1,`nav-demo-fields`],[`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`label`,`min`,`max`,`value`],[1,`nav-demo-controls`],[1,`nav-demo-checkboxes`],[`subscriptSizing`,`dynamic`,3,`checkedChange`,`label`,`checked`],[1,`nav-demo-frame`],[3,`collapsedChange`,`itemSelected`,`config`,`groups`,`itemTemplate`,`collapsed`],[`bxSideNavHeader`,``],[`bxSideNavFooter`,``],[1,`nav-demo-content`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`],[`aria-live`,`polite`],[1,`nav-route-example`],[`tabindex`,`0`,`aria-label`,`TypeScript navigation configuration`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`name`,`blocks`],[`name`,`circle-user-round`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`size`,`20`,3,`name`],[`aria-hidden`,`true`]],template:function(t,e){if(t&1){let o=tn();A(0,`div`,2)(1,`bx-select`,3),ue(`selectionChange`,function(d){return e.navigationDemoI18nService.setLanguage(d.value)}),P$1(),A(2,`div`,4)(3,`bx-input-field`,5),QC(`valueChange`,function(d){return at(o),QA(e.height,d)||(e.height=d),lt$1(d)}),P$1(),A(4,`bx-input-field`,5),QC(`valueChange`,function(d){return at(o),QA(e.breadcrumbLimit,d)||(e.breadcrumbLimit=d),lt$1(d)}),P$1()()(),A(5,`div`,6)(6,`div`,7)(7,`bx-checkbox`,8),QC(`checkedChange`,function(d){return at(o),QA(e.right,d)||(e.right=d),lt$1(d)}),P$1(),A(8,`bx-checkbox`,8),ue(`checkedChange`,function(){at(o);let d=It(19);return lt$1(d.toggleCollapsed())}),P$1(),A(9,`bx-checkbox`,8),QC(`checkedChange`,function(d){return at(o),QA(e.mobile,d)||(e.mobile=d),lt$1(d)}),P$1(),A(10,`bx-checkbox`,8),QC(`checkedChange`,function(d){return at(o),QA(e.searchable,d)||(e.searchable=d),lt$1(d)}),P$1(),A(11,`bx-checkbox`,8),QC(`checkedChange`,function(d){return at(o),QA(e.icons,d)||(e.icons=d),lt$1(d)}),P$1(),A(12,`bx-checkbox`,8),QC(`checkedChange`,function(d){return at(o),QA(e.longLabels,d)||(e.longLabels=d),lt$1(d)}),P$1(),A(13,`bx-checkbox`,8),QC(`checkedChange`,function(d){return at(o),QA(e.rtl,d)||(e.rtl=d),lt$1(d)}),P$1(),A(14,`bx-checkbox`,8),QC(`checkedChange`,function(d){return at(o),QA(e.custom,d)||(e.custom=d),lt$1(d)}),P$1()()(),A(15,`p`),me(16),P$1(),A(17,`div`,9)(18,`bx-side-nav`,10,0),QC(`collapsedChange`,function(d){return at(o),QA(e.collapsed,d)||(e.collapsed=d),lt$1(d)}),ue(`itemSelected`,function(d){return e.select(d)}),ep(20,qi,2,1,`ng-template`,11)(21,Ui,2,1,`ng-template`,12),P$1(),A(22,`div`,13)(23,`h3`),me(24),P$1(),A(25,`p`),me(26),P$1(),te(27,Gi,2,1,`button`,14),A(28,`output`,15),me(29),P$1(),A(30,`p`),me(31),P$1(),A(32,`p`),me(33),P$1()()(),ep(34,Qi,2,2,`ng-template`,null,1,qr),A(36,`details`,16)(37,`summary`),me(38),P$1(),A(39,`pre`,17),Ae(40,`code`,18),P$1()()}if(t&2){let o=It(19),s=It(35);C(),V$1(`label`,e.text().language)(`clearable`,!1)(`options`,e.navigationDemoI18nService.languages)(`value`,e.navigationDemoI18nService.language()),C(2),V$1(`label`,e.text().height)(`min`,200)(`max`,700),XC(`value`,e.height),C(),V$1(`label`,e.text().breadcrumbLimit)(`min`,2)(`max`,10),XC(`value`,e.breadcrumbLimit),C(3),V$1(`label`,e.text().right),XC(`checked`,e.right),C(),V$1(`label`,e.text().rail)(`checked`,o.isCollapsed()),C(),V$1(`label`,e.text().mobile),XC(`checked`,e.mobile),C(),V$1(`label`,e.text().search),XC(`checked`,e.searchable),C(),V$1(`label`,e.text().icons),XC(`checked`,e.icons),C(),V$1(`label`,e.text().longLabels),XC(`checked`,e.longLabels),C(),V$1(`label`,e.text().rtl),XC(`checked`,e.rtl),C(),V$1(`label`,e.text().custom),XC(`checked`,e.custom),C(2),Me(e.text().instructions),C(),Ce(`--%NS%bx-side-nav-height`,e.height()+`px`),pe(`right`,e.right()),K(`dir`,e.rtl()?`rtl`:`ltr`),C(),V$1(`config`,e.config())(`groups`,e.groups())(`itemTemplate`,e.custom()?s:void 0),XC(`collapsed`,e.collapsed),C(6),Me(e.text().title),C(2),Me(e.text().description),C(),ne$1(o.isMobile()?27:-1),C(2),Me(e.selection()),C(2),Me(e.text().keyboard),C(2),Me(e.text().inlineMode),C(5),Me(e.text().routes),C(2),V$1(`highlight`,e.routeExample)}},dependencies:[ht,Fe,pn,dn,Z$1,Ti$1,nr,rr,on],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
  width: 100%;
  container-type: inline-size;
}
.nav-demo-top-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  inline-size: 100%;
  min-inline-size: 0;
  margin-block-end: var(--%NS%bx-space-4, 1rem);
}
.nav-demo-top-row[_ngcontent-%COMP%]   bx-select[_ngcontent-%COMP%] {
  grid-row: 1;
  justify-self: end;
  inline-size: 12rem;
  max-inline-size: 100%;
}
.nav-demo-controls[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-3, 0.75rem);
  margin-block-end: var(--%NS%bx-space-4, 1rem);
}
.nav-demo-checkboxes[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
}
.nav-demo-fields[_ngcontent-%COMP%] {
  display: grid;
  grid-row: 2;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--%NS%bx-space-3, 0.75rem);
  min-inline-size: 0;
}
.nav-demo-fields[_ngcontent-%COMP%]   bx-input-field[_ngcontent-%COMP%] {
  min-inline-size: 0;
  inline-size: 100%;
}
@container (min-width: 640px) {
  .nav-demo-top-row[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr) 12rem;
  }
  .nav-demo-top-row[_ngcontent-%COMP%]   bx-select[_ngcontent-%COMP%] {
    grid-column: 2;
  }
  .nav-demo-fields[_ngcontent-%COMP%] {
    grid-row: 1;
    grid-column: 1;
    max-inline-size: calc(24rem + var(--%NS%bx-space-3, 0.75rem));
  }
}
@container (max-width: 360px) {
  .nav-demo-fields[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
}
.nav-demo-frame[_ngcontent-%COMP%] {
  position: relative;
  isolation: isolate;
  display: flex;
  min-width: 0;
  width: 100%;
  min-height: var(--%NS%bx-side-nav-height, 860px);
  overflow: hidden;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  background: var(--%NS%bx-bg-canvas);
}
.nav-demo-content[_ngcontent-%COMP%] {
  min-width: 0;
  flex: 1;
  padding: var(--%NS%bx-space-4, 1rem);
  overflow-wrap: anywhere;
}
.nav-demo-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin-top: 0;
}
.nav-demo-content[_ngcontent-%COMP%]   output[_ngcontent-%COMP%] {
  display: block;
  padding-block: var(--%NS%bx-space-4, 1rem);
  color: var(--%NS%bx-text-brand);
}
.nav-route-example[_ngcontent-%COMP%] {
  margin-top: var(--%NS%bx-space-4, 1rem);
}
@media (max-width: 640px) {
  .nav-demo-frame[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .nav-demo-frame[_ngcontent-%COMP%]   bx-side-nav[_ngcontent-%COMP%] {
    max-width: 100%;
  }
}`]})};var Yi=()=>({name:`info`,color:`text-info`,bgColor:`auto`});var Ze=class a{panelBreakpoints={"2xl":`push`};placements=[{label:`Left`,value:`left`},{label:`Right`,value:`right`}];opened=D(!1);contained=D(!0);backdrop=D(!1);placement=D(`right`);panelWidth=D(320);note=D(`This content survives closing the panel.`);clicks=D(0);width=g(()=>Math.max(240,Math.min(640,Number(this.panelWidth())||320)));resizeWidth(r){let t=Number(r);Number.isFinite(t)&&this.panelWidth.set(t)}pageAction(){this.clicks.update(r=>r+1)}static ɵfac=function(t){return new(t||a)};static ɵcmp=G$1({type:a,selectors:[[`app-side-panel-examples`]],decls:27,vars:24,consts:[[1,`panel-demo-controls`],[`label`,`Placement`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Panel width (px)`,`type`,`number`,3,`ngModelChange`,`min`,`max`,`ngModel`],[1,`panel-demo-toggles`],[`label`,`Bound to preview container`,3,`ngModelChange`,`ngModel`],[`label`,`Blocking backdrop inside bounds`,3,`ngModelChange`,`ngModel`],[1,`panel-demo-boundary`],[`ariaLabel`,`Side panel example`,3,`widthChange`,`openChange`,`headerIcon`,`open`,`placement`,`container`,`width`,`resizable`,`resizeDisableShrink`,`resizeMinWidth`,`resizeMaxWidth`,`breakpoints`,`backdrop`],[`bxSidePanelBanner`,``,1,`demo-banner`],[`bxSidePanelHeader`,``,1,`demo-heading`],[`label`,`Persistent note`,3,`ngModelChange`,`ngModel`],[`bxSidePanelFooter`,``],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[1,`panel-demo-content`],[`role`,`status`]],template:function(t,e){t&1&&(A(0,`div`,0)(1,`bx-select`,1),nR(),ue(`ngModelChange`,function(s){return e.placement.set(s)}),P$1(),A(2,`bx-input-field`,2),nR(),ue(`ngModelChange`,function(s){return e.panelWidth.set(s)}),P$1()(),A(3,`div`,3)(4,`bx-slide-toggle`,4),nR(),ue(`ngModelChange`,function(s){return e.contained.set(s)}),P$1(),A(5,`bx-slide-toggle`,5),nR(),ue(`ngModelChange`,function(s){return e.backdrop.set(s)}),P$1()(),A(6,`bx-side-panel-layout`,6)(7,`bx-side-panel`,7),ue(`widthChange`,function(s){return e.resizeWidth(s)})(`openChange`,function(s){return e.opened.set(s)}),A(8,`p`,8),me(9,`Optional projected top banner`),P$1(),A(10,`h3`,9),me(11,`Declarative panel`),P$1(),A(12,`bx-input-field`,10),nR(),ue(`ngModelChange`,function(s){return e.note.set(s)}),P$1(),A(13,`p`),me(14,`Closing keeps projected content mounted. Escape dismisses the focused panel without a modal focus trap or page scroll lock.`),P$1(),A(15,`div`,11)(16,`button`,12),ue(`click`,function(){return e.opened.set(!1)}),me(17,`Done`),P$1()()(),A(18,`div`,13)(19,`button`,12),ue(`click`,function(){return e.opened.set(!e.opened())}),me(20),P$1(),A(21,`button`,12),ue(`click`,function(){return e.pageAction()}),me(22,`Surrounding page action`),P$1(),A(23,`p`,14),me(24),P$1(),A(25,`p`),me(26,`The panel has ordinary keyboard navigation. Change its placement, bounds, or width while it is open.`),P$1()()()),t&2&&(C(),V$1(`clearable`,!1)(`options`,e.placements)(`ngModel`,e.placement()),oR(),C(),V$1(`min`,240)(`max`,640)(`ngModel`,e.panelWidth()),oR(),C(2),V$1(`ngModel`,e.contained()),oR(),C(),V$1(`ngModel`,e.backdrop()),oR(),C(2),V$1(`headerIcon`,oO(23,Yi))(`open`,e.opened())(`placement`,e.placement())(`container`,e.contained()?void 0:`viewport`)(`width`,e.width())(`resizable`,!0)(`resizeDisableShrink`,!1)(`resizeMinWidth`,240)(`resizeMaxWidth`,640)(`breakpoints`,e.panelBreakpoints)(`backdrop`,e.backdrop()),C(5),V$1(`ngModel`,e.note()),oR(),C(8),wn(``,e.opened()?`Close`:`Open`,` panel`),C(4),WC(`Page actions: `,e.clicks(),` · Panel `,e.opened()?`open`:`closed`))},dependencies:[Gne,Hne,SF,Z$1,nr,rr,ar,VM,HM,sd,id,ad],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.panel-demo-controls[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--%NS%bx-space-4, 1rem);
}
.panel-demo-boundary[_ngcontent-%COMP%] {
  block-size: 28rem;
  padding: var(--%NS%bx-space-4, 1rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: var(--%NS%bx-bg-surface-alt);
  margin-block-start: var(--%NS%bx-space-4, 1rem);
}
.panel-demo-boundary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  margin-inline-end: var(--%NS%bx-space-2, 0.5rem);
  margin-block-end: var(--%NS%bx-space-2, 0.5rem);
}
.demo-heading[_ngcontent-%COMP%], 
.demo-banner[_ngcontent-%COMP%] {
  margin: 0;
}
.demo-heading[_ngcontent-%COMP%] {
  font: inherit;
}
.panel-demo-toggles[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-space-4, 1rem);
  margin-block-start: var(--%NS%bx-space-3, 0.75rem);
}
.panel-demo-content[_ngcontent-%COMP%] {
  min-inline-size: 0;
  padding: var(--%NS%bx-space-3, 0.75rem);
}
@media (max-width: 640px) {
  .panel-demo-controls[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}`]})};var Hn=[{label:`Indicator`,value:`indicator`},{label:`Navigation`,value:`navigation`},{label:`Wizard`,value:`wizard`}];var lt=[`steps`,`segments`,`dots`,`progress`,`cards`];var Un=lt.map(a=>({label:a,value:a}));var st=[`sm`,`md`,`lg`];var Gn=st.map(a=>({label:a,value:a}));var Kn=[{label:`Horizontal`,value:`horizontal`},{label:`Vertical`,value:`vertical`}];var Xn=[{label:`Scroll`,value:`scroll`},{label:`Vertical`,value:`vertical`},{label:`Compact`,value:`compact`}];var Qn=[{id:`overview`,label:`Overview`,description:`What will ship`,icon:`file-text`},{id:`access`,label:`Access`,description:`Who can use it`,icon:`users`},{id:`delivery`,label:`Delivery`,description:`How it rolls out`,icon:`send`}];var Yn=[{id:`plan`,label:`Plan`,completed:!0},{id:`build`,label:`Build`},{id:`ship`,label:`Ship`,optional:!0}];var Zn=[{label:`Percentage (33%)`,value:`percentage`},{label:`Completed steps (1/3)`,value:`fraction`}];function Jn(a,r){return new Promise((t,e)=>{let o=()=>{clearTimeout(s),t(!1)},s=setTimeout(()=>{a.signal.removeEventListener(`abort`,o),r===`fail`?e(/* @__PURE__ */ new Error(`The simulated server could not save this step. Try again.`)):t(r===`allow`)},800);a.signal.addEventListener(`abort`,o,{once:!0}),a.signal.aborted&&o()})}var $n={en:{label:`Workflow`,back:`Back`,next:`Next`,finish:`Finish`,skip:`Skip`,pending:`Pending`,awaitingConfirmation:`Awaiting confirmation`,active:`Current step`,completed:`Completed`,skipped:`Skipped`,error:`Error`,loading:`Loading`,disabled:`Disabled`,optional:`Optional`,invalid:`Check this step before continuing`,rejected:`Navigation was not accepted`,position:`Step {index} of {count}: {label}`,plan:`Plan`,build:`Build`,ship:`Ship`,archived:`Archived`,buildDescription:`Prepare the workspace`,details:`Details`,preferences:`Preferences`,review:`Review`},es:{label:`Flujo de trabajo`,back:`Atrás`,next:`Siguiente`,finish:`Finalizar`,skip:`Omitir`,pending:`Pendiente`,awaitingConfirmation:`Esperando confirmación`,active:`Paso actual`,completed:`Completado`,skipped:`Omitido`,error:`Error`,loading:`Cargando`,disabled:`Deshabilitado`,optional:`Opcional`,invalid:`Comprueba este paso antes de continuar`,rejected:`No se aceptó la navegación`,position:`Paso {index} de {count}: {label}`,plan:`Planificar`,build:`Crear`,ship:`Publicar`,archived:`Archivado`,buildDescription:`Prepara el espacio de trabajo`,details:`Detalles`,preferences:`Preferencias`,review:`Revisión`},fr:{label:`Parcours`,back:`Retour`,next:`Suivant`,finish:`Terminer`,skip:`Ignorer`,pending:`En attente`,awaitingConfirmation:`En attente de confirmation`,active:`Étape actuelle`,completed:`Terminé`,skipped:`Ignoré`,error:`Erreur`,loading:`Chargement`,disabled:`Désactivé`,optional:`Facultatif`,invalid:`Vérifiez cette étape avant de continuer`,rejected:`La navigation a été refusée`,position:`Étape {index} sur {count} : {label}`,plan:`Planifier`,build:`Créer`,ship:`Publier`,archived:`Archivé`,buildDescription:`Préparez l’espace de travail`,details:`Détails`,preferences:`Préférences`,review:`Vérification`},de:{label:`Ablauf`,back:`Zurück`,next:`Weiter`,finish:`Abschließen`,skip:`Überspringen`,pending:`Ausstehend`,awaitingConfirmation:`Bestätigung ausstehend`,active:`Aktueller Schritt`,completed:`Abgeschlossen`,skipped:`Übersprungen`,error:`Fehler`,loading:`Wird geladen`,disabled:`Deaktiviert`,optional:`Optional`,invalid:`Prüfen Sie diesen Schritt vor dem Fortfahren`,rejected:`Die Navigation wurde abgelehnt`,position:`Schritt {index} von {count}: {label}`,plan:`Planen`,build:`Erstellen`,ship:`Veröffentlichen`,archived:`Archiviert`,buildDescription:`Arbeitsbereich vorbereiten`,details:`Details`,preferences:`Einstellungen`,review:`Überprüfung`}};var xe=class a{language=D(`en`);version=D(0);translate(r,t){let e=$n[this.language()][r]??r;for(let[o,s]of Object.entries(t??{}))e=e.replaceAll(`{${o}}`,String(s));return e}setLanguage(r){r&&(this.language.set(r),this.version.update(t=>t+1))}static ɵfac=function(t){return new(t||a)};static ɵprov=ee$1({token:a,factory:a.ɵfac})};var Zi=[`sectionsWrapper`];var Ji=[`dynamicContent`];var $i=[`section`];var ea=()=>({key:`details`});var ta=()=>({key:`preferences`});var na=()=>({key:`review`});var ia=(a,r)=>r.id;function aa(a,r){if(a&1){let t=tn();A(0,`bx-select`,68),nR(),QC(`ngModelChange`,function(o){at(t);let s=S$1();return QA(s.progressFormat,o)||(s.progressFormat=o),lt$1(o)}),P$1()}if(a&2){let t=S$1();V$1(`clearable`,!1)(`options`,t.progressFormats),XC(`ngModel`,t.progressFormat),oR()}}function oa(a,r){if(a&1){let t=tn();A(0,`section`,39,8)(2,`h4`),me(3),P$1(),A(4,`p`),me(5),P$1(),A(6,`p`),me(7,`The section selection follows this scroll container. No scroll observer or router is owned by the stepper.`),P$1(),A(8,`button`,31),ue(`click`,function(){let o=at(t).$implicit,s=S$1();return lt$1(s.sectionStatus.set(`Reviewed `+o.id))}),me(9,`Mark section reviewed`),P$1()()}if(a&2){let t=r.$implicit;K(`data-section`,t.id)(`aria-label`,t.label),C(3),Me(t.label),C(2),Me(t.description)}}function ra(a,r){if(a&1){let t=tn();A(0,`button`,31),ue(`click`,function(){let o=at(t).$implicit,s=S$1();return lt$1(s.policy.set(o))}),me(1),P$1()}if(a&2){let t=r.$implicit,e=S$1();K(`aria-pressed`,e.policy()===t),C(),wn(``,t,` content`)}}function la(a,r){if(a&1&&(A(0,`bx-input-field`,69),nR(),P$1(),A(1,`p`),me(2,`This required field becomes touched only after an invalid forward attempt.`),P$1()),a&2){let t=S$1();V$1(`formControl`,t.details.controls.name),oR()}}function sa(a,r){if(a&1&&(A(0,`span`),me(1),P$1()),a&2){let t=S$1();C(),Me(t.stepperDemoI18nService.translate(`preferences`))}}function ca(a,r){if(a&1&&(A(0,`bx-input-field`,70),nR(),P$1(),A(1,`p`),me(2,`Skip leaves this step incomplete. With retained content, edits and child state survive revisiting.`),P$1()),a&2){let t=S$1();V$1(`formControl`,t.note),oR()}}function da(a,r){if(a&1&&(A(0,`h4`),me(1,`Review workspace`),P$1(),A(2,`p`),me(3),P$1(),A(4,`p`),me(5),P$1(),A(6,`p`),me(7,`Finish performs the same asynchronous save as Next. A failed save keeps this content and its form values.`),P$1()),a&2){let t=S$1();C(3),wn(`Workspace: `,t.details.controls.name.value),C(2),wn(`Note: `,t.note.value||`No delivery note`)}}function pa(a,r){if(a&1){let t=tn();A(0,`h4`),me(1,`Workspace ready`),P$1(),A(2,`p`),me(3,`Your workflow is complete. Reset to start again.`),P$1(),A(4,`button`,31),ue(`click`,function(){at(t),S$1();let o=It(61);return lt$1(o.reset())}),me(5,`Restart with existing values`),P$1()}}function ma(a,r){if(a&1&&(A(0,`bx-input-field`,71),nR(),P$1()),a&2){let t=S$1();V$1(`formField`,t.signalForm.name),oR()}}function ua(a,r){if(a&1&&(A(0,`p`),me(1),P$1()),a&2){let t=S$1();C(),wn(`Ready to create `,t.signalModel().name,`.`)}}function ga(a,r){if(a&1&&(A(0,`p`),me(1),P$1()),a&2){S$1();let t=It(90);C(),wn(`Active step: `,t.selectedStep()?.label,`. Component state follows stable IDs when definitions change.`)}}function ba(a,r){if(a&1){let t=tn();A(0,`button`,72),ue(`click`,function(){at(t);let o=S$1();return lt$1(o.confirmSelection())}),me(1),P$1()}a&2&&(C(),wn(`Open `,r))}function _a(a,r){if(a&1&&(A(0,`div`,73)(1,`span`),me(2),P$1(),Ae(3,`bx-stepper`,74),P$1()),a&2){let t=r.$implicit,e=S$1().$implicit,o=S$1();C(2),Me(t),C(),V$1(`steps`,o.gallerySteps)(`variant`,e)(`size`,t)(`orientation`,o.orientation())(`responsive`,o.responsive())(`glassiness`,o.glass()?`on`:`off`)(`surfaceEffects`,o.lighting())(`showLabels`,e!==`dots`)(`labels`,o.labels)}}function ya(a,r){if(a&1&&(A(0,`div`,67)(1,`h4`),me(2),P$1(),Mn(3,_a,4,10,`div`,73,ca$1),P$1()),a&2){let t=r.$implicit,e=S$1();C(2),Me(t),C(),In$1(e.gallerySizes)}}var Je=class a{bxA11yService=p(Oe);stepperDemoI18nService=p(xe);sectionsWrapper=nn$1(`sectionsWrapper`);dynamicContent=nn$1(`dynamicContent`);sections=cp(`section`);modes=Hn;variants=Un;progressFormats=Zn;sizes=Gn;orientations=Kn;responsiveOptions=Xn;galleryVariants=lt;gallerySizes=st;gallerySteps=Yn;sectionSteps=Qn;languages=dt;policies=[`eager`,`retained`,`active`];mode=D(`navigation`);variant=D(`steps`);progressFormat=D(`percentage`);size=D(`md`);orientation=D(`horizontal`);responsive=D(`compact`);active=D(`build`);sectionActive=D(`overview`);wizardActive=D(`details`);controlledActive=D(`plan`);status=D(`Use the controls to explore presentation and behavior.`);sectionStatus=D(`Choose a section or scroll the content. The application confirms the active ID.`);wizardStatus=D(`Enter a workspace name, then continue.`);nextOutcome=D(`allow`);policy=D(`retained`);pendingConfirmation=D(null);showLabels=D(!0);errorState=D(!1);loadingState=D(!1);allowIndicatorRequests=D(!1);readOnly=D(!1);glass=D(!0);lighting=D(!0);linear=D(!0);editable=D(!0);extra=D(!1);previewSteps=g(()=>[{id:`plan`,label:{key:`plan`},completed:!0,icon:`clipboard-check`},{id:`build`,label:{key:`build`},description:{key:`buildDescription`},icon:`wrench`},{id:`ship`,label:{key:`ship`},optional:!0,icon:`send`},{id:`archived`,label:{key:`archived`},disabled:!0,icon:`archive`}].map(t=>s(r({},t),{error:t.id===this.active()&&this.errorState(),loading:t.id===this.active()&&this.loadingState()})));currentStepOptions=g(()=>this.previewSteps().map(r=>({value:r.id,label:`${be(r.label,this.stepperDemoI18nService)} (${r.id})`,disabled:r.disabled})));confirmationLabel=g(()=>{let r=this.pendingConfirmation(),t=this.gallerySteps.find(e=>e.id===r?.toId);return r?.outcome===`accepted`&&t&&t.id!==this.controlledActive()?be(t.label,this.stepperDemoI18nService):null});controlledMessage=g(()=>{let r=this.pendingConfirmation(),t=this.confirmationLabel(),e=be(this.gallerySteps.find(o=>o.id===this.controlledActive())?.label,this.stepperDemoI18nService);return t?`Request accepted. ${e} is still current. Select \u201COpen ${t}\u201D to let the application confirm the new activeStep.`:r?.outcome===`accepted`?r.toId?`The application opened ${e}. Request another step to repeat the two-stage flow.`:`The workflow is complete. Reset to try requesting and confirming steps again.`:r?`The request was ${r.outcome}. ${e} remains current; no destination is waiting for confirmation.`:`Current step: ${e}. \u201CRequest next step\u201D checks the transition. Then select \u201COpen\u201D to confirm it. This demo deliberately waits for that second action.`});dynamicSteps=g(()=>[{id:`first`,label:`Start`,content:this.dynamicContent()},...this.extra()?[{id:`extra`,label:`Added step`,optional:!0,content:this.dynamicContent()}]:[],{id:`last`,label:`Review`,content:this.dynamicContent()}]);labels=Object.fromEntries([`label`,`back`,`next`,`finish`,`skip`,`pending`,`awaitingConfirmation`,`active`,`completed`,`skipped`,`error`,`loading`,`disabled`,`optional`,`invalid`,`rejected`,`position`].map(r=>[r,{key:r}]));controlledLabels=s(r({},this.labels),{next:`Request next step`,back:`Request previous step`});details=new Yf({name:new BD(``,{nonNullable:!0,validators:Ba$1.required})});note=new BD(``,{nonNullable:!0});signalModel=D({name:``});signalForm=$r(this.signalModel,r=>Us(r.name));save=r=>{if(r.request.action===`previous`)return!0;let t=this.nextOutcome();return this.nextOutcome.set(`allow`),Jn(r,t)};confirmPreview(r){this.status.set(`${r.source} request: ${r.id} (index ${r.index}). Application confirmed selection.`),this.active.set(r.id)}navigateSection(r){let t=this.sectionsWrapper()?.nativeElement,e=this.sections().find(s=>s.nativeElement.dataset.section===r.id)?.nativeElement,o=this.sections()[0]?.nativeElement;!t||!e||!o||(this.sectionStatus.set(`Application handled ${r.source} request for section ${r.id}.`),t.scrollTo({top:e.offsetTop-o.offsetTop,behavior:this.bxA11yService.isReducedMotion()?`instant`:`smooth`}))}observeSections(){let r=this.sectionsWrapper()?.nativeElement;if(!r)return;let t=r.getBoundingClientRect().top,e=this.sections().filter(o=>o.nativeElement.getBoundingClientRect().top<=t+32).at(-1);e&&this.sectionActive.set(e.nativeElement.dataset.section??`overview`)}resetWizard(r){r.reset(),this.details.reset(),this.note.reset(),this.nextOutcome.set(`allow`),this.wizardStatus.set(`Enter a workspace name, then continue.`)}recordWizard(r){switch(r.outcome){case`accepted`:this.wizardStatus.set(r.toId?`Saved and advanced to ${r.toId}.`:`Workspace saved. The workflow is complete.`);break;case`invalid`:this.wizardStatus.set(`Enter a workspace name before continuing. No save has started.`);break;case`error`:this.wizardStatus.set(`The simulated save failed. Your values are retained. Select Next or Finish once to retry.`);break;case`rejected`:this.wizardStatus.set(`The guard refused navigation. Your values are retained. Select Next or Finish once to try again.`);break;case`cancelled`:this.wizardStatus.set(`The save was cancelled because the workflow changed. Your values are retained.`)}}confirmSelection(){let r=this.pendingConfirmation();r?.outcome===`accepted`&&r.toId&&this.confirmationLabel()&&this.controlledActive.set(r.toId)}static ɵfac=function(t){return new(t||a)};static ɵcmp=G$1({type:a,selectors:[[`app-stepper-examples`]],viewQuery:function(t,e){t&1&&yn(e.sectionsWrapper,Zi,5)(e.dynamicContent,Ji,5)(e.sections,$i,5),t&2&&Et(3)},features:[Vt([xe,{provide:Se,useExisting:xe}])],decls:121,vars:88,consts:[[`preview`,``],[`sectionsWrapper`,``],[`wizard`,``],[`finished`,``],[`signalWizard`,``],[`custom`,``],[`dynamicContent`,``],[`controlled`,``],[`section`,``],[1,`stepper-examples`],[`aria-labelledby`,`stepper-config-title`],[`id`,`stepper-config-title`],[3,`activeStepChange`,`stepRequested`,`mode`,`steps`,`variant`,`size`,`orientation`,`responsive`,`showLabels`,`indicatorInteractive`,`readOnly`,`glassiness`,`surfaceEffects`,`labels`,`showPercentage`,`progressFormat`,`activeStep`],[1,`config-grid`],[`label`,`Current step (activeStep ID)`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Behavior`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Variant`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Progress display`,3,`clearable`,`options`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Orientation`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Narrow screens`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Language`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`toggles`],[`label`,`Labels`,3,`ngModelChange`,`ngModel`],[`label`,`Current step error`,3,`ngModelChange`,`ngModel`],[`label`,`Current step loading`,3,`ngModelChange`,`ngModel`],[`label`,`Indicator interaction`,3,`ngModelChange`,`ngModel`],[`label`,`Read only`,3,`ngModelChange`,`ngModel`],[`label`,`Glass surfaces`,3,`ngModelChange`,`ngModel`],[`label`,`Interaction lighting`,3,`ngModelChange`,`ngModel`],[1,`actions`],[`bx-button`,``,`type`,`button`,3,`click`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[`announcement`,`polite`,3,`message`],[`aria-labelledby`,`stepper-section-title`],[`id`,`stepper-section-title`],[1,`section-layout`],[`mode`,`navigation`,`orientation`,`vertical`,3,`activeStepChange`,`stepRequested`,`steps`,`activeStep`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Release sections`,1,`section-scroll`,3,`scroll`],[1,`document-section`],[`aria-labelledby`,`stepper-wizard-title`],[`id`,`stepper-wizard-title`],[`label`,`Linear workflow`,3,`ngModelChange`,`ngModel`],[`label`,`Completed steps editable`,3,`ngModelChange`,`ngModel`],[`bx-button`,``,`type`,`button`],[`mode`,`wizard`,3,`activeStepChange`,`transitionFinished`,`variant`,`size`,`orientation`,`responsive`,`linear`,`contentPolicy`,`labels`,`beforeTransition`,`completionContent`,`activeStep`],[`id`,`details`,`icon`,`file-text`,3,`label`,`validation`,`editable`],[`bxStepContent`,``],[`id`,`preferences`,`icon`,`settings`,3,`label`,`optional`],[`bxStepLabel`,``],[`id`,`managed`,`label`,`Managed by your organization`,3,`disabled`],[`id`,`review`,`icon`,`clipboard-check`,3,`label`],[`aria-labelledby`,`stepper-signal-title`],[`id`,`stepper-signal-title`],[`mode`,`wizard`,`variant`,`segments`,3,`labels`],[`id`,`name`,`label`,`Name`,3,`validation`],[`id`,`ready`,`label`,`Ready`],[`aria-labelledby`,`stepper-custom-title`],[`id`,`stepper-custom-title`],[`mode`,`wizard`,`variant`,`cards`,3,`steps`,`linear`,`controls`,`labels`],[`aria-labelledby`,`stepper-controlled-title`],[`id`,`stepper-controlled-title`],[`mode`,`wizard`,`selectionMode`,`controlled`,3,`activeStepChange`,`transitionFinished`,`steps`,`linear`,`labels`,`activeStep`],[`announcement`,`polite`,3,`title`,`message`],[`bx-button`,``,`bxAlertActions`,``,`type`,`button`,`variant`,`filled`],[`aria-labelledby`,`stepper-gallery-title`],[`id`,`stepper-gallery-title`],[1,`gallery-group`],[`label`,`Progress display`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Workspace name`,`placeholder`,`Enter a workspace name`,3,`formControl`],[`label`,`Delivery note`,3,`formControl`],[`label`,`Required workspace name`,3,`formField`],[`bx-button`,``,`bxAlertActions`,``,`type`,`button`,`variant`,`filled`,3,`click`],[1,`gallery-row`],[`activeStep`,`build`,3,`steps`,`variant`,`size`,`orientation`,`responsive`,`glassiness`,`surfaceEffects`,`showLabels`,`labels`]],template:function(t,e){if(t&1){let o=tn();A(0,`div`,9)(1,`section`,10)(2,`h3`,11),me(3,`Presentation and behavior`),P$1(),A(4,`p`),me(5,` Pilot material and motion: select steps rapidly, press a marker, and compare sizes and orientations. Appearance settings control the theme, reduced motion, and opaque surfaces independently. `),P$1(),A(6,`bx-stepper`,12,0),QC(`activeStepChange`,function(d){return at(o),QA(e.active,d)||(e.active=d),lt$1(d)}),ue(`stepRequested`,function(d){return e.mode()!==`wizard`&&e.confirmPreview(d)}),P$1(),A(8,`div`,13)(9,`bx-select`,14),nR(),QC(`ngModelChange`,function(d){return at(o),QA(e.active,d)||(e.active=d),lt$1(d)}),P$1(),A(10,`bx-select`,15),nR(),QC(`ngModelChange`,function(d){return at(o),QA(e.mode,d)||(e.mode=d),lt$1(d)}),P$1(),A(11,`bx-select`,16),nR(),QC(`ngModelChange`,function(d){return at(o),QA(e.variant,d)||(e.variant=d),lt$1(d)}),P$1(),te(12,aa,1,3,`bx-select`,17),A(13,`bx-select`,18),nR(),QC(`ngModelChange`,function(d){return at(o),QA(e.size,d)||(e.size=d),lt$1(d)}),P$1(),A(14,`bx-select`,19),nR(),QC(`ngModelChange`,function(d){return at(o),QA(e.orientation,d)||(e.orientation=d),lt$1(d)}),P$1(),A(15,`bx-select`,20),nR(),QC(`ngModelChange`,function(d){return at(o),QA(e.responsive,d)||(e.responsive=d),lt$1(d)}),P$1(),A(16,`bx-select`,21),nR(),ue(`ngModelChange`,function(d){return e.stepperDemoI18nService.setLanguage(d)}),P$1()(),A(17,`div`,22)(18,`bx-slide-toggle`,23),nR(),QC(`ngModelChange`,function(d){return at(o),QA(e.showLabels,d)||(e.showLabels=d),lt$1(d)}),P$1(),A(19,`bx-slide-toggle`,24),nR(),QC(`ngModelChange`,function(d){return at(o),QA(e.errorState,d)||(e.errorState=d),lt$1(d)}),P$1(),A(20,`bx-slide-toggle`,25),nR(),QC(`ngModelChange`,function(d){return at(o),QA(e.loadingState,d)||(e.loadingState=d),lt$1(d)}),P$1(),A(21,`bx-slide-toggle`,26),nR(),QC(`ngModelChange`,function(d){return at(o),QA(e.allowIndicatorRequests,d)||(e.allowIndicatorRequests=d),lt$1(d)}),P$1(),A(22,`bx-slide-toggle`,27),nR(),QC(`ngModelChange`,function(d){return at(o),QA(e.readOnly,d)||(e.readOnly=d),lt$1(d)}),P$1(),A(23,`bx-slide-toggle`,28),nR(),QC(`ngModelChange`,function(d){return at(o),QA(e.glass,d)||(e.glass=d),lt$1(d)}),P$1(),A(24,`bx-slide-toggle`,29),nR(),QC(`ngModelChange`,function(d){return at(o),QA(e.lighting,d)||(e.lighting=d),lt$1(d)}),P$1()(),A(25,`div`,30)(26,`button`,31),ue(`click`,function(){at(o);let d=It(7);return lt$1(d.reset())}),me(27,`Reset`),P$1(),A(28,`button`,32),ue(`click`,function(){return e.active.set(`plan`)}),me(29,`Select Plan`),P$1(),A(30,`button`,32),ue(`click`,function(){return e.active.set(`ship`)}),me(31,`Select Ship`),P$1()(),Ae(32,`bx-banner`,33),P$1(),A(33,`section`,34)(34,`h3`,35),me(35,`Application-owned section navigation`),P$1(),Ae(36,`bx-banner`,33),A(37,`div`,36)(38,`bx-stepper`,37),QC(`activeStepChange`,function(d){return at(o),QA(e.sectionActive,d)||(e.sectionActive=d),lt$1(d)}),ue(`stepRequested`,function(d){return e.navigateSection(d)}),P$1(),A(39,`div`,38,1),ue(`scroll`,function(){return e.observeSections()}),Mn(41,oa,10,4,`section`,39,ia),P$1()()(),A(43,`section`,40)(44,`h3`,41),me(45,`Workspace wizard`),P$1(),A(46,`p`),me(47,`Required Reactive Forms validation, optional content, disabled steps, guarded saves, retained input and explicit completion.`),P$1(),A(48,`div`,22)(49,`bx-slide-toggle`,42),nR(),QC(`ngModelChange`,function(d){return at(o),QA(e.linear,d)||(e.linear=d),lt$1(d)}),P$1(),A(50,`bx-slide-toggle`,43),nR(),QC(`ngModelChange`,function(d){return at(o),QA(e.editable,d)||(e.editable=d),lt$1(d)}),P$1()(),A(51,`div`,30),Mn(52,ra,2,2,`button`,44,ca$1),A(54,`button`,31),ue(`click`,function(){return e.nextOutcome.set(`fail`)}),me(55,`Fail next save`),P$1(),A(56,`button`,31),ue(`click`,function(){return e.nextOutcome.set(`reject`)}),me(57,`Reject next guard`),P$1(),A(58,`button`,31),ue(`click`,function(){at(o);let d=It(61);return lt$1(e.resetWizard(d))}),me(59,`Reset workflow and forms`),P$1()(),A(60,`bx-stepper`,45,2),QC(`activeStepChange`,function(d){return at(o),QA(e.wizardActive,d)||(e.wizardActive=d),lt$1(d)}),ue(`transitionFinished`,function(d){return e.recordWizard(d)}),A(62,`bx-step`,46),ep(63,la,3,1,`ng-template`,47),P$1(),A(64,`bx-step`,48),ep(65,sa,2,1,`ng-template`,49)(66,ca,3,1,`ng-template`,47),P$1(),Ae(67,`bx-step`,50),A(68,`bx-step`,51),ep(69,da,8,2,`ng-template`,47),P$1()(),ep(70,pa,6,0,`ng-template`,null,3,qr),Ae(72,`bx-banner`,33),P$1(),A(73,`section`,52)(74,`h3`,53),me(75,`Signal Forms`),P$1(),A(76,`bx-stepper`,54,4)(78,`bx-step`,55),ep(79,ma,1,1,`ng-template`,47),P$1(),A(80,`bx-step`,56),ep(81,ua,2,1,`ng-template`,47),P$1()(),A(82,`button`,31),ue(`click`,function(){at(o);let d=It(77);return lt$1(d.reset())}),me(83,`Restart Signal Forms example`),P$1()(),A(84,`section`,57)(85,`h3`,58),me(86,`Non-linear workflow and custom controls`),P$1(),A(87,`p`),me(88,`Add or remove an optional step. Every control invokes the same guarded methods as the built-in buttons.`),P$1(),Ae(89,`bx-stepper`,59,5),ep(91,ga,2,1,`ng-template`,null,6,qr),A(93,`div`,30)(94,`button`,31),ue(`click`,function(){at(o);let d=It(90);return lt$1(d.previous())}),me(95,`Back`),P$1(),A(96,`button`,31),ue(`click`,function(){at(o);let d=It(90);return lt$1(d.next())}),me(97,`Next`),P$1(),A(98,`button`,31),ue(`click`,function(){at(o);let d=It(90);return lt$1(d.finish())}),me(99,`Finish`),P$1(),A(100,`button`,31),ue(`click`,function(){return e.extra.set(!e.extra())}),me(101),P$1(),A(102,`button`,31),ue(`click`,function(){at(o);let d=It(90);return lt$1(d.reset())}),me(103,`Reset`),P$1()(),Ae(104,`bx-banner`,33),P$1(),A(105,`section`,60)(106,`h3`,61),me(107,`Controlled wizard selection`),P$1(),A(108,`bx-stepper`,62,7),QC(`activeStepChange`,function(d){return at(o),QA(e.controlledActive,d)||(e.controlledActive=d),lt$1(d)}),ue(`transitionFinished`,function(d){return e.pendingConfirmation.set(d)}),P$1(),A(110,`bx-banner`,63),te(111,ba,2,1,`button`,64),P$1(),A(112,`button`,31),ue(`click`,function(){return at(o),It(109).reset(),lt$1(e.pendingConfirmation.set(null))}),me(113,`Reset controlled wizard`),P$1()(),A(114,`section`,65)(115,`h3`,66),me(116,`Variant and size reference`),P$1(),A(117,`p`),me(118,`All presentations use the same completion data. Segment thickness changes with size. Orientation follows the configurator above.`),P$1(),Mn(119,ya,5,1,`div`,67,ca$1),P$1()()}if(t&2){let o,s=It(61),d=It(71),ct=It(90),li=It(109);C(6),V$1(`mode`,e.mode())(`steps`,e.previewSteps())(`variant`,e.variant())(`size`,e.size())(`orientation`,e.orientation())(`responsive`,e.responsive())(`showLabels`,e.showLabels())(`indicatorInteractive`,e.allowIndicatorRequests())(`readOnly`,e.readOnly())(`glassiness`,e.glass()?`on`:`off`)(`surfaceEffects`,e.lighting())(`labels`,e.labels)(`showPercentage`,!0)(`progressFormat`,e.progressFormat()),XC(`activeStep`,e.active),C(3),V$1(`clearable`,!1)(`options`,e.currentStepOptions()),XC(`ngModel`,e.active),oR(),C(),V$1(`clearable`,!1)(`options`,e.modes),XC(`ngModel`,e.mode),oR(),C(),V$1(`clearable`,!1)(`options`,e.variants),XC(`ngModel`,e.variant),oR(),C(),ne$1(e.variant()===`progress`?12:-1),C(),V$1(`clearable`,!1)(`options`,e.sizes),XC(`ngModel`,e.size),oR(),C(),V$1(`clearable`,!1)(`options`,e.orientations),XC(`ngModel`,e.orientation),oR(),C(),V$1(`clearable`,!1)(`options`,e.responsiveOptions),XC(`ngModel`,e.responsive),oR(),C(),V$1(`clearable`,!1)(`options`,e.languages)(`ngModel`,e.stepperDemoI18nService.language()),oR(),C(2),XC(`ngModel`,e.showLabels),oR(),C(),XC(`ngModel`,e.errorState),oR(),C(),XC(`ngModel`,e.loadingState),oR(),C(),XC(`ngModel`,e.allowIndicatorRequests),oR(),C(),XC(`ngModel`,e.readOnly),oR(),C(),XC(`ngModel`,e.glass),oR(),C(),XC(`ngModel`,e.lighting),oR(),C(4),V$1(`disabled`,e.mode()===`wizard`||e.readOnly()),C(2),V$1(`disabled`,e.mode()===`wizard`||e.readOnly()),C(2),V$1(`message`,e.status()),C(4),V$1(`message`,e.sectionStatus()),C(2),V$1(`steps`,e.sectionSteps),XC(`activeStep`,e.sectionActive),C(3),In$1(e.sectionSteps),C(8),XC(`ngModel`,e.linear),oR(),C(),XC(`ngModel`,e.editable),oR(),C(2),In$1(e.policies),C(8),V$1(`variant`,e.variant())(`size`,e.size())(`orientation`,e.orientation())(`responsive`,e.responsive())(`linear`,e.linear())(`contentPolicy`,e.policy())(`labels`,e.labels)(`beforeTransition`,e.save)(`completionContent`,d),XC(`activeStep`,e.wizardActive),C(2),V$1(`label`,oO(85,ea))(`validation`,e.details)(`editable`,e.editable()),C(2),V$1(`label`,oO(86,ta))(`optional`,!0),C(3),V$1(`disabled`,!0),C(),V$1(`label`,oO(87,na)),C(4),V$1(`message`,s.pending()?`Saving workspace… The next step opens automatically after a successful save.`:e.wizardStatus()+` Next server outcome: `+e.nextOutcome()+`.`),C(4),V$1(`labels`,e.labels),C(2),V$1(`validation`,e.signalForm()),C(11),V$1(`steps`,e.dynamicSteps())(`linear`,!1)(`controls`,!1)(`labels`,e.labels),C(12),wn(``,e.extra()?`Remove`:`Add`,` optional step`),C(3),V$1(`message`,ct.isComplete()?`Completed`:ct.lastTransition()?.outcome||`Ready`),C(4),V$1(`steps`,e.gallerySteps)(`linear`,!1)(`labels`,e.controlledLabels),XC(`activeStep`,e.controlledActive),C(2),V$1(`title`,e.confirmationLabel()?`Waiting for application confirmation`:li.isComplete()?`Workflow complete`:`Application-owned selection`)(`message`,e.controlledMessage()),C(),ne$1((o=e.confirmationLabel())?111:-1,o),C(8),In$1(e.galleryVariants)}},dependencies:[Gne,Hne,SF,Wne,MF,Ys,DM,Z$1,nr,rr,ar,xn,Ue$1,qe$1,Ke$1],styles:[`
[_nghost-%COMP%], 
.stepper-examples[_ngcontent-%COMP%], 
section[_ngcontent-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.stepper-examples[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-8, 2rem);
}
h3[_ngcontent-%COMP%], 
h4[_ngcontent-%COMP%] {
  margin-block: 0 var(--%NS%bx-space-3, 0.75rem);
}
p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  line-height: 1.6;
}
.config-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--%NS%bx-space-3, 0.75rem);
  margin-block: var(--%NS%bx-space-4, 1rem);
}
@media (min-width: 640px) {
  .config-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 1024px) {
  .config-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.toggles[_ngcontent-%COMP%], 
.actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  margin-block: var(--%NS%bx-space-4, 1rem);
}
.section-layout[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-4, 1rem);
}
@media (min-width: 768px) {
  .section-layout[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  }
}
.section-scroll[_ngcontent-%COMP%] {
  position: relative;
  max-block-size: 22rem;
  overflow: auto;
  padding: var(--%NS%bx-space-4, 1rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  overscroll-behavior: contain;
}
.section-scroll[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
}
.document-section[_ngcontent-%COMP%] {
  min-block-size: 20rem;
  padding-block: var(--%NS%bx-space-4, 1rem);
  overflow-wrap: anywhere;
}
.gallery-group[_ngcontent-%COMP%] {
  padding-block: var(--%NS%bx-space-4, 1rem);
  border-block-start: 1px solid var(--%NS%bx-border-default);
}
.gallery-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  margin-block: var(--%NS%bx-space-4, 1rem);
}
bx-banner[_ngcontent-%COMP%] {
  display: block;
  margin-block: var(--%NS%bx-space-3, 0.75rem);
}`]})};var ei=[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Success`,value:`success`},{label:`Danger`,value:`danger`},{label:`Info`,value:`info`},{label:`Warning`,value:`warn`},{label:`Neutral`,value:`neutral`}];var ti=[{label:`Tonal`,value:`tonal`},{label:`Filled`,value:`filled`},{label:`Outlined`,value:`outlined`}];var ni=`<span bxTruncate #overflow="bxTruncate"
    [bxTooltip]="label() | bxTruncatedText: overflow.truncated()"
    [attr.tabindex]="overflow.truncated() ? 0 : null"
    bxTooltipTouch="longpress">{{ label() }}</span>`;var ii=`<bx-tag [text]="label()" [tooltipOnTruncate]="false" tooltip="My application tooltip" />
<bx-input-field [label]="label()" [tooltipOnTruncate]="false" />
<bx-select label="Location" [options]="options()" [tooltipOnTruncate]="false" />`;var ai=`import { TruncateDirective, TruncatedTextPipe, TooltipDirective, truncatedText } from '@filip.mazev/blocks/primitives';

// Read the exported directive's truncated() and text() signals in your own logic.
const tooltip = truncatedText(label(), overflow.truncated(), automaticTooltips());

// Application-wide form default; individual controls can override it.
formSettings.update({ tooltipOnTruncate: false });`;var va=()=>[0];var fe=class a{text=D(`A long location name that can be truncated`);width=D(14);enabled=D(!0);largeText=D(!1);automaticTooltips=D(!0);customTooltip=D(!1);menuActions=D(0);label=g(()=>String(this.text()??``));options=g(()=>[{label:this.label(),value:0}]);pipeExample=ni;customExample=ii;logicExample=ai;previewWidth=g(()=>{let r=Number(this.width());return Number.isFinite(r)?Math.max(4,Math.min(64,r)):14});static ɵfac=function(t){return new(t||a)};static ɵcmp=G$1({type:a,selectors:[[`app-truncation-examples`]],decls:96,vars:55,consts:[[`overflow`,`bxTruncate`],[`aria-label`,`Conditional truncation tooltips`,1,`truncation-demo`],[1,`truncation-controls`],[`label`,`Text`,`subscriptSizing`,`dynamic`,3,`valueChange`,`value`],[`label`,`Available width (rem)`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`max`,`value`],[`role`,`group`,`aria-label`,`Preview options`,1,`truncation-switches`],[`label`,`Enable text truncation`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Larger text preview`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Automatic tooltips`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Custom tooltip`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[1,`component-examples`],[1,`preview-card`,`text-preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Text preview`,1,`preview-stage`],[1,`text-example`,`example-width`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,3,`bxTruncate`,`bxTooltip`],[1,`preview-caption`],[1,`preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Tag preview`,1,`preview-stage`],[1,`example-width`],[`leadingIcon`,`map-pin`,3,`text`,`tooltipOnTruncate`,`tooltip`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Input field preview`,1,`preview-stage`],[`placeholder`,`Editable value`,`subscriptSizing`,`dynamic`,3,`label`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Search value preview`,1,`preview-stage`],[`ariaLabel`,`Search value`,`subscriptSizing`,`dynamic`,3,`search`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Select preview`,1,`preview-stage`],[`subscriptSizing`,`dynamic`,3,`label`,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Multiselect preview`,1,`preview-stage`],[`label`,`Selected tag`,`selectionDisplay`,`tags`,`subscriptSizing`,`dynamic`,3,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Menu item preview`,1,`preview-stage`],[3,`action`,`label`,`wrapLabel`,`tooltipOnTruncate`],[`tabindex`,`0`,`aria-label`,`HTML truncation example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`tabindex`,`0`,`aria-label`,`TypeScript truncation example`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`]],template:function(t,e){if(t&1){let o=tn();A(0,`section`,1)(1,`h3`),me(2,`Shared truncation, optional tooltips`),P$1(),A(3,`p`)(4,`code`),me(5,`TruncateDirective`),P$1(),me(6,` owns ellipsis and rendered measurement. The pure `),A(7,`code`),me(8,`bxTruncatedText`),P$1(),me(9,` pipe selects text for a conditional tooltip. Use the exported directive signals or `),A(10,`code`),me(11,`truncatedText()`),P$1(),me(12,` helper in your own logic. `),P$1(),A(13,`div`,2)(14,`bx-input-field`,3),QC(`valueChange`,function(d){return at(o),QA(e.text,d)||(e.text=d),lt$1(d)}),P$1(),A(15,`bx-input-field`,4),QC(`valueChange`,function(d){return at(o),QA(e.width,d)||(e.width=d),lt$1(d)}),P$1()(),A(16,`div`,5)(17,`bx-checkbox`,6),QC(`checkedChange`,function(d){return at(o),QA(e.enabled,d)||(e.enabled=d),lt$1(d)}),P$1(),A(18,`bx-checkbox`,7),QC(`checkedChange`,function(d){return at(o),QA(e.largeText,d)||(e.largeText=d),lt$1(d)}),P$1(),A(19,`bx-checkbox`,8),QC(`checkedChange`,function(d){return at(o),QA(e.automaticTooltips,d)||(e.automaticTooltips=d),lt$1(d)}),P$1(),A(20,`bx-checkbox`,9),QC(`checkedChange`,function(d){return at(o),QA(e.customTooltip,d)||(e.customTooltip=d),lt$1(d)}),P$1()(),A(21,`div`,10)(22,`section`,11)(23,`h4`),me(24,`Text preview`),P$1(),A(25,`div`,12)(26,`div`,13)(27,`span`,14,0),To$1(29,`bxTruncatedText`),me(30),P$1()()(),A(31,`output`,15),me(32),P$1()(),A(33,`section`,16)(34,`h4`),me(35,`Tag`),P$1(),A(36,`div`,17)(37,`div`,18),Ae(38,`bx-tag`,19),P$1()(),A(39,`p`,15),me(40,`Clipped labels use an automatic or application-owned tooltip.`),P$1()(),A(41,`section`,16)(42,`h4`),me(43,`Input field`),P$1(),A(44,`div`,20)(45,`div`,18),Ae(46,`bx-input-field`,21),P$1()(),A(47,`p`,15),me(48,`The floating label shares the truncation measurement.`),P$1()(),A(49,`section`,16)(50,`h4`),me(51,`Search value`),P$1(),A(52,`div`,22)(53,`div`,18)(54,`bx-search-input`,23),ue(`search`,function(d){return e.text.set(d)}),P$1()()(),A(55,`p`,15),me(56,`Editing the search updates the shared example text.`),P$1()(),A(57,`section`,16)(58,`h4`),me(59,`Select`),P$1(),A(60,`div`,24)(61,`div`,18),Ae(62,`bx-select`,25),P$1()(),A(63,`p`,15),me(64,`Selected values and captions share the same available width.`),P$1()(),A(65,`section`,16)(66,`h4`),me(67,`Multiselect`),P$1(),A(68,`div`,26)(69,`div`,18),Ae(70,`bx-multi-select`,27),P$1()(),A(71,`p`,15),me(72,`The selected tag follows the owning control's tooltip setting.`),P$1()(),A(73,`section`,16)(74,`h4`),me(75,`Menu item`),P$1(),A(76,`div`,28)(77,`div`,18)(78,`bx-menu`)(79,`bx-menu-item`,29),ue(`action`,function(){return e.menuActions.set(e.menuActions()+1)}),P$1()()()(),A(80,`output`,15),me(81),P$1()()(),A(82,`p`),me(83,` Change the text or width to switch between clipped and fitting labels. Turn automatic tooltips off to retain ellipsis and measurement for custom feedback. Hover, keyboard focus, and touch-and-hold use the existing tooltip mechanism. Explicit tag descriptions still take precedence. Custom tooltip applies to the text and tag examples. Preview panels keep their size; long wrapped content scrolls inside them. Example widths are capped by the available space in each card. `),P$1(),A(84,`h3`),me(85,`Short conditional tooltip`),P$1(),A(86,`pre`,30),Ae(87,`code`,31),P$1(),A(88,`h3`),me(89,`Disable automatic tooltips`),P$1(),A(90,`pre`,30),Ae(91,`code`,31),P$1(),A(92,`h3`),me(93,`Use the public API in your application`),P$1(),A(94,`pre`,32),Ae(95,`code`,33),P$1()()}if(t&2){let o=It(28);C(14),XC(`value`,e.text),C(),V$1(`min`,4)(`max`,64),XC(`value`,e.width),C(2),XC(`checked`,e.enabled),C(),XC(`checked`,e.largeText),C(),XC(`checked`,e.automaticTooltips),C(),XC(`checked`,e.customTooltip),C(6),Ce(`inline-size`,e.previewWidth(),`rem`),pe(`large-text`,e.largeText()),C(),V$1(`bxTruncate`,e.enabled())(`bxTooltip`,e.customTooltip()?`My application tooltip`:No$1(29,50,e.label(),o.truncated(),e.automaticTooltips())),K(`tabindex`,e.customTooltip()||e.automaticTooltips()&&o.truncated()?0:null),C(3),Me(e.label()),C(2),wn(`Text `,o.truncated()?`is truncated`:`fits without truncation`,`.`),C(5),Ce(`inline-size`,e.previewWidth(),`rem`),C(),V$1(`text`,e.label())(`tooltipOnTruncate`,e.automaticTooltips())(`tooltip`,e.customTooltip()?`My application tooltip`:void 0),C(7),Ce(`inline-size`,e.previewWidth(),`rem`),C(),V$1(`label`,e.label())(`tooltipOnTruncate`,e.automaticTooltips()),C(7),Ce(`inline-size`,e.previewWidth(),`rem`),C(),V$1(`value`,e.label())(`tooltipOnTruncate`,e.automaticTooltips()),C(7),Ce(`inline-size`,e.previewWidth(),`rem`),C(),V$1(`label`,e.label())(`options`,e.options())(`value`,0)(`tooltipOnTruncate`,e.automaticTooltips()),C(7),Ce(`inline-size`,e.previewWidth(),`rem`),C(),V$1(`options`,e.options())(`value`,oO(54,va))(`tooltipOnTruncate`,e.automaticTooltips()),C(7),Ce(`inline-size`,e.previewWidth(),`rem`),C(2),V$1(`label`,e.label())(`wrapLabel`,!e.enabled())(`tooltipOnTruncate`,e.automaticTooltips()),C(2),wn(`Menu activations: `,e.menuActions()),C(6),V$1(`highlight`,e.pipeExample),C(4),V$1(`highlight`,e.customExample),C(4),V$1(`highlight`,e.logicExample)}},dependencies:[ht,Ti$1,nr,sr,qe$2,rr,pm,um,CM,vi$1,so$1,Ua$1],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
}
.truncation-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-3, 0.75rem);
  inline-size: 100%;
  min-inline-size: 0;
}
.truncation-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.truncation-demo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.truncation-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
}
.truncation-controls[_ngcontent-%COMP%], 
.truncation-switches[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--%NS%bx-space-3, 0.75rem);
  inline-size: 100%;
}
@media (min-width: 768px) {
  .truncation-controls[_ngcontent-%COMP%], 
   .truncation-switches[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.text-example[_ngcontent-%COMP%], 
.example-width[_ngcontent-%COMP%] {
  min-inline-size: 0;
  max-inline-size: 100%;
}
.text-example[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-2, 0.5rem);
  box-sizing: border-box;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
}
.text-example[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.large-text[_ngcontent-%COMP%] {
  font-size: 1.5em;
}
.component-examples[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: stretch;
  gap: var(--%NS%bx-space-4, 1rem);
  inline-size: 100%;
  min-inline-size: 0;
}
@media (min-width: 768px) {
  .component-examples[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.preview-card[_ngcontent-%COMP%] {
  display: grid;
  grid-template-rows: max-content 12rem 1fr;
  gap: var(--%NS%bx-space-3, 0.75rem);
  min-inline-size: 0;
  padding: var(--%NS%bx-space-3, 0.75rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
}
.preview-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  line-height: 1.5;
}
.text-preview-card[_ngcontent-%COMP%] {
  grid-column: 1/-1;
}
.preview-stage[_ngcontent-%COMP%] {
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  place-items: safe center start;
  min-inline-size: 0;
  min-block-size: 0;
  overflow: auto;
  padding: var(--%NS%bx-space-2, 0.5rem);
}
.preview-stage[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
}
.preview-caption[_ngcontent-%COMP%] {
  min-inline-size: 0;
  min-block-size: 3lh;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--%NS%bx-text-secondary);
  overflow-wrap: anywhere;
}`]})};var ha=()=>({key:`tagLabel`});var $e=class a{demoI18nService=p(P);label=D(`Skopje`);text=g(()=>String(this.label()??``));color=D(`accent`);variant=D(`tonal`);disabled=D(!1);leadingIcon=D(!0);trailingIcon=D(!0);leadingCount=D(!1);trailingCount=D(!0);leftNumber=D(3);rightNumber=D(12);colors=ei;variants=ti;static ɵfac=function(t){return new(t||a)};static ɵcmp=G$1({type:a,selectors:[[`app-tag-examples`]],features:[Vt([P,{provide:Se,useExisting:P}])],decls:23,vars:26,consts:[[1,`tag-demo`],[`aria-label`,`Tag previews`,1,`tag-previews`],[`tooltip`,`A location tag tooltip`,3,`text`,`color`,`variant`,`disabled`,`leadingIcon`,`trailingIcon`,`leadingNumber`,`trailingNumber`],[`color`,`info`,`variant`,`filled`,`ariaLabel`,`42 locations`,`tooltip`,`Number-only tag`,3,`leadingNumber`],[`leadingIcon`,`map-pin`,`color`,`success`,3,`text`],[`text`,`Unavailable`,`color`,`neutral`,3,`disabled`],[`text`,`Skopje`],[`text`,`+2`,`tooltip`,`Ohrid, Bitola`],[1,`tag-controls`],[`label`,`Tag text`,3,`valueChange`,`value`],[`label`,`Color`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Appearance`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Leading number`,`type`,`number`,3,`valueChange`,`value`],[`label`,`Trailing number`,`type`,`number`,3,`valueChange`,`value`],[1,`tag-controls-checkboxes`],[`label`,`Leading icon`,3,`checkedChange`,`checked`],[`label`,`Trailing icon`,3,`checkedChange`,`checked`],[`label`,`Leading number`,3,`checkedChange`,`checked`],[`label`,`Trailing number`,3,`checkedChange`,`checked`],[`label`,`Disabled appearance`,3,`checkedChange`,`checked`]],template:function(t,e){t&1&&(A(0,`div`,0)(1,`div`,1),Ae(2,`bx-tag`,2)(3,`bx-tag`,3)(4,`bx-tag`,4)(5,`bx-tag`,5)(6,`bx-tag`,6)(7,`bx-tag`,7),P$1(),A(8,`div`,8)(9,`bx-input-field`,9),QC(`valueChange`,function(s){return QA(e.label,s)||(e.label=s),s}),P$1(),A(10,`bx-select`,10),QC(`valueChange`,function(s){return QA(e.color,s)||(e.color=s),s}),P$1(),A(11,`bx-select`,11),QC(`valueChange`,function(s){return QA(e.variant,s)||(e.variant=s),s}),P$1(),A(12,`bx-input-field`,12),QC(`valueChange`,function(s){return QA(e.leftNumber,s)||(e.leftNumber=s),s}),P$1(),A(13,`bx-input-field`,13),QC(`valueChange`,function(s){return QA(e.rightNumber,s)||(e.rightNumber=s),s}),P$1()(),A(14,`div`,14)(15,`bx-checkbox`,15),QC(`checkedChange`,function(s){return QA(e.leadingIcon,s)||(e.leadingIcon=s),s}),P$1(),A(16,`bx-checkbox`,16),QC(`checkedChange`,function(s){return QA(e.trailingIcon,s)||(e.trailingIcon=s),s}),P$1(),A(17,`bx-checkbox`,17),QC(`checkedChange`,function(s){return QA(e.leadingCount,s)||(e.leadingCount=s),s}),P$1(),A(18,`bx-checkbox`,18),QC(`checkedChange`,function(s){return QA(e.trailingCount,s)||(e.trailingCount=s),s}),P$1(),A(19,`bx-checkbox`,19),QC(`checkedChange`,function(s){return QA(e.disabled,s)||(e.disabled=s),s}),P$1()(),A(20,`p`),me(21,` Hover or keyboard-focus a tooltip tag. In a select trigger, the parent control exposes the complete selection while overflow tags show the remaining names on hover. `),P$1(),Ae(22,`app-truncation-examples`),P$1()),t&2&&(C(2),V$1(`text`,e.text())(`color`,e.color()??`accent`)(`variant`,e.variant()??`tonal`)(`disabled`,e.disabled())(`leadingIcon`,e.leadingIcon()?`map-pin`:void 0)(`trailingIcon`,e.trailingIcon()?`chevron-right`:void 0)(`leadingNumber`,e.leadingCount()?e.leftNumber():null)(`trailingNumber`,e.trailingCount()?e.rightNumber():null),C(),V$1(`leadingNumber`,42),C(),V$1(`text`,oO(25,ha)),C(),V$1(`disabled`,!0),C(4),XC(`value`,e.label),C(),V$1(`clearable`,!1)(`options`,e.colors),XC(`value`,e.color),C(),V$1(`clearable`,!1)(`options`,e.variants),XC(`value`,e.variant),C(),XC(`value`,e.leftNumber),C(),XC(`value`,e.rightNumber),C(2),XC(`checked`,e.leadingIcon),C(),XC(`checked`,e.trailingIcon),C(),XC(`checked`,e.leadingCount),C(),XC(`checked`,e.trailingCount),C(),XC(`checked`,e.disabled))},dependencies:[CM,Ti$1,nr,rr,fe],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
}
.tag-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--%NS%bx-space-4, 1rem);
  inline-size: 100%;
}
.tag-previews[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-2, 0.5rem);
  min-block-size: 3rem;
}
.tag-controls[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--%NS%bx-space-3, 0.75rem);
  inline-size: 100%;
}
.tag-controls-checkboxes[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  inline-size: 100%;
}
@media (max-width: 640px) {
  .tag-controls[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
  .tag-controls-checkboxes[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}`]})};function xa(a,r){if(a&1&&(A(0,`strong`),me(1),P$1()),a&2){let t=S$1(2);C(),Me(t.text().brand)}}function fa(a,r){if(a&1&&(A(0,`a`,13),Ae(1,`bx-icon`,14),te(2,xa,2,1,`strong`),P$1()),a&2){let t=r.$implicit,e=S$1();K(`aria-label`,e.text().brand),C(2),ne$1(t?-1:2)}}function Sa(a,r){if(a&1){let t=tn();A(0,`button`,15),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.action.set(`top.actionDone`))}),Ae(1,`bx-icon`,16),me(2),P$1(),A(3,`button`,15),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.action.set(`top.helpDone`))}),Ae(4,`bx-icon`,17),me(5),P$1()}if(a&2){let t=S$1(2);C(2),wn(``,t.text().settings,` `),C(3),wn(``,t.text().help,` `)}}function Ca(a,r){if(a&1&&te(0,Sa,6,2),a&2){let t=S$1();ne$1(t.actions()?0:-1)}}function wa(a,r){if(a&1&&(Ae(0,`bx-icon`,18),A(1,`span`),me(2),P$1(),A(3,`small`,19),me(4,`↗`),P$1()),a&2){let t=r.$implicit;V$1(`name`,t.icon?.name??`circle`),C(2),Me(t.label)}}var et=class a{navigationDemoI18nService=p(ee);groups=g(()=>Qe(`/components/top-nav`,this.navigationDemoI18nService).map(t=>t.id!==`workspace`?t:s(r({},t),{items:t.items.filter(e=>e.id===`overview`||e.id===`projects`).map(e=>e.id!==`projects`?e:s(r({},e),{children:[...e.children??[],...t.items.filter(o=>o.id===`reports`||o.id===`disabled`)]}))})));compact=D(!1);searchable=D(!0);icons=D(!1);sticky=D(!1);rtl=D(!1);custom=D(!1);actions=D(!1);width=D(1100);selected=D(void 0);action=D(void 0);text=g(()=>({compact:this.navigationDemoI18nService.translate(`top.compact`),width:this.navigationDemoI18nService.translate(`top.width`),icons:this.navigationDemoI18nService.translate(`top.icons`),sticky:this.navigationDemoI18nService.translate(`top.sticky`),custom:this.navigationDemoI18nService.translate(`top.custom`),actions:this.navigationDemoI18nService.translate(`top.actions`),search:this.navigationDemoI18nService.translate(`demo.search`),rtl:this.navigationDemoI18nService.translate(`demo.rtl`),language:this.navigationDemoI18nService.translate(`demo.language`),brand:this.navigationDemoI18nService.translate(`demo.studio`),title:this.navigationDemoI18nService.translate(`top.title`),description:this.navigationDemoI18nService.translate(`top.description`),compactMode:this.navigationDemoI18nService.translate(`top.modeCompact`),expandedMode:this.navigationDemoI18nService.translate(`top.modeExpanded`),settings:this.navigationDemoI18nService.translate(`top.settings`),help:this.navigationDemoI18nService.translate(`top.help`)}));selection=g(()=>{let r=this.selected(),t=this.action();return t?this.navigationDemoI18nService.translate(t):r?`${this.navigationDemoI18nService.translate(`nav.${r.id}`)} \xB7 ${r.id}`:this.navigationDemoI18nService.translate(`demo.select`)});config=g(()=>({position:this.sticky()?`sticky`:`inline`,compactBreakpoint:`sm`,compact:this.compact()?!0:void 0,searchable:this.searchable(),showItemIcons:this.icons(),showSectionIcons:this.icons(),ariaLabel:{key:`top.name`},searchLabel:{key:`nav.search`},searchPlaceholder:{key:`top.searchPlaceholder`},clearSearchLabel:{key:`nav.clear`},emptyText:{key:`nav.empty`},openLabel:{key:`nav.open`},closeLabel:{key:`nav.close`},submenuLabel:{key:`nav.submenu`},resultLabel:{key:`nav.result`},backLabel:{key:`nav.back`},pathLabel:{key:`nav.path`},breadcrumbConfig:{overflowLabel:{key:`nav.hiddenPath`}}}));select(r){this.action.set(void 0),this.selected.set(r)}static ɵfac=function(t){return new(t||a)};static ɵcmp=G$1({type:a,selectors:[[`app-top-nav-examples`]],features:[Vt([ee,{provide:Se,useExisting:ee}])],decls:27,vars:32,consts:[[`nav`,``],[`customItem`,``],[1,`demo-language-row`],[`subscriptSizing`,`dynamic`,3,`selectionChange`,`label`,`clearable`,`options`,`value`],[1,`top-nav-demo-controls`],[3,`checkedChange`,`label`,`checked`],[`type`,`number`,3,`valueChange`,`label`,`min`,`max`,`value`],[1,`top-nav-demo-frame`],[3,`itemSelected`,`config`,`groups`,`itemTemplate`],[`bxTopNavBrand`,``],[`bxTopNavActions`,``],[1,`top-nav-demo-content`],[`aria-live`,`polite`],[`routerLink`,`/components/top-nav/overview`,1,`top-nav-demo-brand`],[`name`,`blocks`,`size`,`24`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`type`,`button`,3,`click`],[`name`,`settings`,`size`,`20`],[`name`,`circle-help`,`size`,`20`],[`size`,`20`,3,`name`],[`aria-hidden`,`true`]],template:function(t,e){if(t&1){let o=tn();A(0,`div`,2)(1,`bx-select`,3),ue(`selectionChange`,function(d){return e.navigationDemoI18nService.setLanguage(d.value)}),P$1()(),A(2,`div`,4)(3,`bx-checkbox`,5),QC(`checkedChange`,function(d){return at(o),QA(e.compact,d)||(e.compact=d),lt$1(d)}),P$1(),A(4,`bx-checkbox`,5),QC(`checkedChange`,function(d){return at(o),QA(e.searchable,d)||(e.searchable=d),lt$1(d)}),P$1(),A(5,`bx-checkbox`,5),QC(`checkedChange`,function(d){return at(o),QA(e.icons,d)||(e.icons=d),lt$1(d)}),P$1(),A(6,`bx-checkbox`,5),QC(`checkedChange`,function(d){return at(o),QA(e.sticky,d)||(e.sticky=d),lt$1(d)}),P$1(),A(7,`bx-checkbox`,5),QC(`checkedChange`,function(d){return at(o),QA(e.rtl,d)||(e.rtl=d),lt$1(d)}),P$1(),A(8,`bx-checkbox`,5),QC(`checkedChange`,function(d){return at(o),QA(e.custom,d)||(e.custom=d),lt$1(d)}),P$1(),A(9,`bx-checkbox`,5),QC(`checkedChange`,function(d){return at(o),QA(e.actions,d)||(e.actions=d),lt$1(d)}),P$1(),A(10,`bx-input-field`,6),QC(`valueChange`,function(d){return at(o),QA(e.width,d)||(e.width=d),lt$1(d)}),P$1()(),A(11,`div`,7)(12,`bx-top-nav`,8,0),ue(`itemSelected`,function(d){return e.select(d)}),ep(14,fa,3,2,`ng-template`,9)(15,Ca,1,1,`ng-template`,10),P$1(),A(16,`div`,11)(17,`h3`),me(18),P$1(),A(19,`p`),me(20),P$1(),A(21,`p`),me(22),P$1(),A(23,`output`,12),me(24),P$1()()(),ep(25,wa,5,2,`ng-template`,null,1,qr)}if(t&2){let o=It(13),s=It(26);C(),V$1(`label`,e.text().language)(`clearable`,!1)(`options`,e.navigationDemoI18nService.languages)(`value`,e.navigationDemoI18nService.language()),C(2),V$1(`label`,e.text().compact),XC(`checked`,e.compact),C(),V$1(`label`,e.text().search),XC(`checked`,e.searchable),C(),V$1(`label`,e.text().icons),XC(`checked`,e.icons),C(),V$1(`label`,e.text().sticky),XC(`checked`,e.sticky),C(),V$1(`label`,e.text().rtl),XC(`checked`,e.rtl),C(),V$1(`label`,e.text().custom),XC(`checked`,e.custom),C(),V$1(`label`,e.text().actions),XC(`checked`,e.actions),C(),V$1(`label`,e.text().width)(`min`,280)(`max`,1600),XC(`value`,e.width),C(),Ce(`width`,e.width()+`px`),K(`dir`,e.rtl()?`rtl`:`ltr`),C(),V$1(`config`,e.config())(`groups`,e.groups())(`itemTemplate`,e.custom()?s:void 0),C(6),Me(e.text().title),C(2),Me(e.text().description),C(2),Me(o.isCompact()?e.text().compactMode:e.text().expandedMode),C(2),Me(e.selection())}},dependencies:[Xp,Be$1,vn,un,Z$1,Ti$1,nr,rr,on],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
  width: 100%;
}
.demo-language-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: flex-end;
  inline-size: 100%;
  min-inline-size: 0;
  margin-block-end: var(--%NS%bx-space-4, 1rem);
}
.demo-language-row[_ngcontent-%COMP%]   bx-select[_ngcontent-%COMP%] {
  inline-size: 12rem;
  max-inline-size: 100%;
}
.top-nav-demo-controls[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  margin-block-end: var(--%NS%bx-space-4, 1rem);
}
.top-nav-demo-controls[_ngcontent-%COMP%]   bx-input-field[_ngcontent-%COMP%] {
  inline-size: 12rem;
  max-inline-size: 100%;
}
.top-nav-demo-frame[_ngcontent-%COMP%] {
  position: relative;
  isolation: isolate;
  max-height: 28rem;
  overflow: auto;
  max-width: 100%;
  min-width: 0;
  min-height: 20rem;
  background: var(--%NS%bx-bg-canvas);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.top-nav-demo-brand[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-text-primary);
  text-decoration: none;
}
.top-nav-demo-brand[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.top-nav-demo-content[_ngcontent-%COMP%] {
  min-height: 28rem;
  padding: var(--%NS%bx-space-4, 1rem);
  overflow-wrap: anywhere;
}
.top-nav-demo-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin-block-start: 0;
}
.top-nav-demo-content[_ngcontent-%COMP%]   output[_ngcontent-%COMP%] {
  display: block;
  padding-block: var(--%NS%bx-space-3, 0.75rem);
  color: var(--%NS%bx-text-secondary);
}`]})};var oi=Array.from({length:3e3},(a,r)=>({id:r,title:`Item ${r+1}`,description:`Variable-height content wraps when the grid changes width. `.repeat(1+r%5)}));function Ea(a,r){if(a&1&&(A(0,`p`),me(1),P$1()),a&2){let t=S$1().$implicit;C(),WC(``,t.description,` `,t.description)}}function ka(a,r){if(a&1){let t=tn();A(0,`bx-card`,12)(1,`p`),me(2),P$1(),te(3,Ea,2,2,`p`),A(4,`button`,5),ue(`click`,function(){let o=at(t).$implicit,s=S$1();return lt$1(s.toggle(o.id))}),me(5),P$1()()}if(a&2){let t=r.$implicit,e=S$1();V$1(`title`,t.title)(`headingLevel`,3)(`surfaceEffects`,!1)(`opaque`,!0),C(2),Me(t.description),C(),ne$1(e.expanded().has(t.id)?3:-1),C(),K(`aria-expanded`,e.expanded().has(t.id)),C(),wn(` `,e.expanded().has(t.id)?`Less content`:`More content`,` `)}}var tt=class a{items=oi;itemKey=r=>r.id;layouts=[{label:`Responsive grid`,value:`grid`},{label:`Vertical list`,value:`list`}];layout=D(`grid`);width=D(100);index=D(1500);expanded=D(/* @__PURE__ */ new Set);config=g(()=>({layout:this.layout(),minColumnWidth:`12rem`,estimatedRowHeight:200,overscan:800}));toggle(r){this.expanded.update(t=>{let e=new Set(t);return e.has(r)?e.delete(r):e.add(r),e})}static ɵfac=function(t){return new(t||a)};static ɵcmp=G$1({type:a,selectors:[[`app-virtual-collection-examples`]],decls:15,vars:20,consts:[[`viewport`,``],[`collection`,``],[1,`virtual-demo-controls`],[`label`,`Layout`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Scroll to index`,`type`,`number`,3,`ngModelChange`,`min`,`max`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`for`,`virtual-demo-width`],[`id`,`virtual-demo-width`,`bxSlider`,``,`type`,`range`,`min`,`40`,`max`,`100`,3,`ngModelChange`,`ngModel`],[`role`,`status`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Virtual collection example`,1,`virtual-demo-viewport`],[3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[3,`title`,`headingLevel`,`surfaceEffects`,`opaque`]],template:function(t,e){if(t&1){let o=tn();A(0,`div`,2)(1,`bx-select`,3),nR(),ue(`ngModelChange`,function(d){return e.layout.set(d)}),P$1(),A(2,`bx-input-field`,4),nR(),ue(`ngModelChange`,function(d){return e.index.set(d)}),P$1(),A(3,`button`,5),ue(`click`,function(){at(o);let d=It(13);return lt$1(d.scrollToIndex(e.index()))}),me(4,`Scroll to item`),P$1()(),A(5,`label`,6),me(6),P$1(),A(7,`input`,7),nR(),ue(`ngModelChange`,function(d){return e.width.set(d)}),P$1(),A(8,`p`,8),me(9),P$1(),A(10,`div`,9,0)(12,`bx-virtual-collection`,10,1),ep(14,ka,6,8,`ng-template`,11),P$1()()}if(t&2){let o=It(11),s=It(13);C(),V$1(`clearable`,!1)(`options`,e.layouts)(`ngModel`,e.layout()),oR(),C(),V$1(`min`,0)(`max`,e.items.length-1)(`ngModel`,e.index()),oR(),C(4),wn(`Container width `,e.width(),`%`),C(),V$1(`ngModel`,e.width()),oR(),C(2),ZC(` `,s.renderedItems().length,` mounted of `,e.items.length,` · `,s.renderedRange().columns,` columns · range `,s.renderedRange().start,`–`,s.renderedRange().end,`
`),C(),Ce(`inline-size`,e.width(),`%`),C(2),V$1(`items`,e.items)(`trackBy`,e.itemKey)(`config`,e.config())(`scrollContainer`,o),C(2),V$1(`bxVirtualItem`,s)}},dependencies:[Gne,yD,_F,Hne,SF,Z$1,nr,rr,Qn$1,IM,qM,ld],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.virtual-demo-controls[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  margin-block-end: var(--%NS%bx-space-4, 1rem);
}
.virtual-demo-viewport[_ngcontent-%COMP%] {
  block-size: 32rem;
  max-inline-size: 100%;
  overflow: auto;
  overflow-anchor: none;
  overscroll-behavior: contain;
  padding: var(--%NS%bx-space-3, 0.75rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
}
.virtual-demo-viewport[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}`]})};function Ta(a,r){if(a&1&&(A(0,`div`)(1,`strong`),me(2),P$1()()),a&2){let t=S$1();C(2),Me(t.data.title)}}function Ma(a,r){if(a&1){let t=tn();A(0,`div`,4)(1,`button`,5),ue(`click`,function(){at(t);let o=S$1();return lt$1(o.close())}),me(2,`Cancel`),P$1(),A(3,`button`,6),ue(`click`,function(){at(t);let o=S$1();return lt$1(o.confirm())}),me(4,`Save changes`),P$1()()}}var nt=class a extends kn{name=new BD(`Blocks workspace`,{nonNullable:!0});confirm(){this.modal.close(`confirm`,this.name.value)}static ɵfac=(()=>{let r;return function(e){return(r||(r=Do$1(a)))(e||a)}})();static ɵcmp=G$1({type:a,selectors:[[`app-component-dialog`]],features:[un$1],decls:6,vars:2,consts:[[4,`appModalHeader`],[1,`dialog-body`],[`label`,`Project name`,3,`formControl`],[`class`,`dialog-actions`,4,`appModalFooter`],[1,`dialog-actions`],[`type`,`button`,`bx-button`,``,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(t,e){t&1&&(ep(0,Ta,3,1,`div`,0),A(1,`div`,1)(2,`p`),me(3),P$1(),A(4,`bx-input-field`,2),nR(),P$1()(),ep(5,Ma,5,0,`div`,3)),t&2&&(C(3),Me(e.data.description),C(),V$1(`formControl`,e.name),oR())},dependencies:[Z$1,nr,Wne,Hne,MF,Tn,On$1],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
}
.dialog-body[_ngcontent-%COMP%] {
  width: 28rem;
  max-width: 100%;
  min-width: 0;
}
p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  line-height: 1.6;
}
.dialog-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--%NS%bx-space-4, 1rem);
}`]})};var Pa=()=>({required:`Enter a project name.`});var Na=()=>({email:`Enter a valid email address.`});var Da=()=>({name:`settings`});var Ia=a=>({text:`Project settings`,icon:a});function Oa(a,r){a&1&&(A(0,`div`,10),Ae(1,`app-side-nav-examples`),P$1())}function Va(a,r){a&1&&(A(0,`div`,10),Ae(1,`app-top-nav-examples`),P$1())}function za(a,r){a&1&&(A(0,`div`,10),Ae(1,`app-stepper-examples`),P$1())}function Wa(a,r){a&1&&Ae(0,`app-virtual-collection-examples`)}function La(a,r){a&1&&Ae(0,`app-resize-handle-examples`)}function Ra(a,r){a&1&&Ae(0,`app-side-panel-examples`)}function Aa(a,r){a&1&&Ae(0,`app-infinite-scroll-examples`)}function Ba(a,r){a&1&&Ae(0,`app-essentials-examples`,21)}function Fa(a,r){a&1&&Ae(0,`app-essentials-examples`,22)}function ja(a,r){a&1&&Ae(0,`app-essentials-examples`,23)}function qa(a,r){a&1&&Ae(0,`app-essentials-examples`,24)}function Ha(a,r){a&1&&Ae(0,`app-essentials-examples`,25)}function Ua(a,r){a&1&&Ae(0,`app-essentials-examples`,26)}function Ga(a,r){a&1&&Ae(0,`app-essentials-examples`,27)}function Ka(a,r){a&1&&Ae(0,`app-essentials-examples`,28)}function Xa(a,r){a&1&&Ae(0,`app-essentials-examples`,29)}function Qa(a,r){a&1&&Ae(0,`app-page-examples`)}function Ya(a,r){a&1&&Ae(0,`app-essentials-examples`,30)}function Za(a,r){a&1&&Ae(0,`app-essentials-examples`,31)}function Ja(a,r){a&1&&Ae(0,`app-essentials-examples`,32)}function $a(a,r){a&1&&Ae(0,`app-tag-examples`)}function eo(a,r){a&1&&Ae(0,`app-truncation-examples`)}function to(a,r){a&1&&Ae(0,`app-form-examples`,33)}function no(a,r){a&1&&Ae(0,`app-form-examples`,34)}function io(a,r){a&1&&Ae(0,`app-form-examples`,35)}function ao(a,r){a&1&&Ae(0,`app-form-examples`,36)}function oo(a,r){a&1&&Ae(0,`app-form-examples`,37)}function ro(a,r){a&1&&Ae(0,`app-form-examples`,38)}function lo(a,r){a&1&&Ae(0,`app-form-examples`,39)}function so(a,r){a&1&&Ae(0,`app-form-examples`,40)}function co(a,r){a&1&&Ae(0,`app-form-examples`,41)}function po(a,r){a&1&&Ae(0,`app-form-examples`,42)}function mo(a,r){a&1&&Ae(0,`app-form-examples`,43)}function uo(a,r){a&1&&Ae(0,`app-form-examples`,44)}function go(a,r){a&1&&Ae(0,`app-form-examples`,45)}function bo(a,r){if(a&1){let t=tn();A(0,`div`,46)(1,`div`,51)(2,`button`,52),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.activate(`Primary action`))}),me(3,`Primary action`),P$1(),A(4,`button`,53),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.activate(`Tonal action`))}),me(5,`Tonal`),P$1(),A(6,`button`,54),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.activate(`Text action`))}),me(7,`Text`),P$1(),A(8,`button`,55),me(9,`Disabled`),P$1()(),A(10,`div`,51)(11,`button`,56),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.activate(`Success`))}),me(12,`Success`),P$1(),A(13,`button`,57),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.activate(`Warning`))}),me(14,`Warning`),P$1(),A(15,`button`,58),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.activate(`Delete`))}),me(16,`Delete`),P$1(),A(17,`button`,59),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.activate(`Add item`))}),Ae(18,`bx-icon`,60),P$1()(),A(19,`div`,51)(20,`button`,61),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.activate(`Close example`))}),Ae(21,`bx-icon`,62),P$1(),A(22,`button`,63),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.activate(`Outlined action`))}),me(23,`Outlined`),P$1(),A(24,`button`,64),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.activate(`Action without runtime effects`))}),me(25,` Without runtime effects `),P$1()()()}a&2&&(C(8),V$1(`disabled`,!0),C(14),V$1(`outlined`,!0),C(2),V$1(`surfaceEffects`,!1))}function _o(a,r){if(a&1&&(A(0,`div`,46)(1,`bx-checkbox`,65),nR(),P$1(),A(2,`bx-checkbox`,66),nR(),P$1(),A(3,`div`,51),Ae(4,`bx-checkbox-indicator`,67),A(5,`span`),me(6),P$1()(),A(7,`div`,51),Ae(8,`bx-checkbox-indicator`),A(9,`span`),me(10,`Unchecked`),P$1(),Ae(11,`bx-checkbox-indicator`,68),A(12,`span`),me(13,`Checked`),P$1(),Ae(14,`bx-checkbox-indicator`,69),A(15,`span`),me(16,`Partial`),P$1()()()),a&2){let t=S$1(2);C(),V$1(`formControl`,t.checked),oR(),C(),V$1(`formControl`,t.secondChecked),oR(),C(2),V$1(`checked`,t.checked.value)(`indeterminate`,t.secondChecked.value),C(2),wn(`Selection: `,t.secondChecked.value?`partial`:t.checked.value?`checked`:`unchecked`),C(5),V$1(`checked`,!0),C(3),V$1(`indeterminate`,!0)}}function yo(a,r){if(a&1&&(A(0,`div`,46)(1,`bx-checkbox`,70),nR(),P$1(),A(2,`bx-checkbox`,71),nR(),P$1(),Ae(3,`bx-checkbox`,72)(4,`bx-checkbox`,73)(5,`bx-checkbox`,74),A(6,`bx-checkbox`,75),nR(),P$1(),A(7,`output`),me(8),P$1()()),a&2){let t=S$1(2);C(),V$1(`formControl`,t.checked),oR(),C(),V$1(`formControl`,t.secondChecked),oR(),C(),V$1(`indeterminate`,!0),C(),V$1(`checked`,!0)(`emissive`,!1),C(),V$1(`checked`,!0)(`readOnly`,!0),C(),V$1(`formControl`,t.disabledCheck),oR(),C(2),WC(`Updates: `,t.checked.value?`on`:`off`,` · Previews: `,t.secondChecked.value?`on`:`off`)}}function vo(a,r){if(a&1){let t=tn();A(0,`div`,47)(1,`bx-form-field`,76)(2,`span`,77)(3,`input`,78),ue(`input`,function(o){at(t);let s=S$1(2);return lt$1(s.updateField(o))})(`blur`,function(){at(t);let o=S$1(2);return lt$1(o.showError.set(!0))}),P$1()()(),A(4,`button`,79),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.showError.set(!0))}),me(5,`Validate name`),P$1(),A(6,`output`),me(7),P$1()()}if(a&2){let t=S$1(2);C(),V$1(`required`,!0)(`error`,t.fieldError()),C(2),V$1(`value`,t.fieldValue()),K(`aria-invalid`,!!t.fieldError()),C(4),wn(`Value: `,t.fieldValue()||`empty`)}}function ho(a,r){if(a&1&&(A(0,`div`,47)(1,`bx-input-field`,80),nR(),P$1(),A(2,`bx-input-field`,81),nR(),P$1(),A(3,`bx-input-field`,82),nR(),P$1(),A(4,`output`),me(5),P$1()()),a&2){let t=S$1(2);C(),V$1(`errorMessages`,oO(9,Pa))(`formControl`,t.name),oR(),C(),V$1(`errorMessages`,oO(10,Na))(`formControl`,t.email),oR(),C(),V$1(`min`,1)(`max`,20)(`formControl`,t.quantity),oR(),C(2),WC(``,t.name.value,` · `,t.quantity.value,` members`)}}function xo(a,r){if(a&1){let t=tn();A(0,`fieldset`,46)(1,`legend`),me(2,`Notification frequency`),P$1(),A(3,`bx-radio`,83),nR(),P$1(),A(4,`bx-radio`,84),nR(),P$1(),A(5,`bx-radio`,85),nR(),P$1(),A(6,`output`),me(7),P$1(),A(8,`button`,54),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.frequency.reset())}),me(9,`Reset frequency`),P$1()()}if(a&2){let t=S$1(2);C(3),V$1(`formControl`,t.frequency),oR(),C(),V$1(`formControl`,t.frequency),oR(),C(),V$1(`formControl`,t.frequency),oR(),C(2),wn(`Selected: `,t.frequency.value)}}function fo(a,r){a&1&&Ae(0,`app-search-examples`)}function So(a,r){a&1&&Ae(0,`app-form-examples`,48)}function Co(a,r){if(a&1){let t=tn();A(0,`div`,47)(1,`p`),me(2,`Drag quickly to compare immediate native precision with the thumb's bounded stretch and release settling.`),P$1(),A(3,`label`,86),me(4,`Volume`),P$1(),A(5,`input`,87),nR(),P$1(),A(6,`output`),me(7),P$1(),A(8,`button`,54),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.volume.setValue(50))}),me(9,`Reset volume`),P$1(),A(10,`label`,88),me(11,`Unavailable range`),P$1(),Ae(12,`input`,89),A(13,`div`,51)(14,`button`,90),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.volume.setValue(20))}),me(15,`20%`),P$1(),A(16,`button`,90),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.volume.setValue(80))}),me(17,`80%`),P$1()()()}if(a&2){let t=S$1(2);C(5),V$1(`formControl`,t.volume),oR(),C(2),wn(``,t.volume.value,`%`)}}function wo(a,r){if(a&1){let t=tn();A(0,`div`,46)(1,`p`),me(2,` Toggle repeatedly or use the programmatic action while the thumb is moving. Appearance settings control reduced motion independently of opacity. `),P$1(),A(3,`bx-slide-toggle`,91),nR(),P$1(),A(4,`bx-slide-toggle`,75),nR(),P$1(),A(5,`output`),me(6),P$1(),A(7,`button`,90),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.enabled.setValue(!o.enabled.value))}),me(8,`Toggle programmatically`),P$1()()}if(a&2){let t=S$1(2);C(3),V$1(`formControl`,t.enabled),oR(),C(),V$1(`formControl`,t.disabledCheck),oR(),C(2),wn(`Notifications are `,t.enabled.value?`enabled`:`disabled`,`.`)}}function Eo(a,r){if(a&1&&(A(0,`bx-error`,94),me(1),P$1()),a&2){let t=S$1(3);C(),Me(t.fieldError())}}function ko(a,r){if(a&1){let t=tn();A(0,`div`,47)(1,`bx-form-field`,92)(2,`span`,77)(3,`input`,93),ue(`input`,function(o){at(t);let s=S$1(2);return lt$1(s.updateField(o))})(`blur`,function(){at(t);let o=S$1(2);return lt$1(o.showError.set(!0))}),P$1()(),te(4,Eo,2,1,`bx-error`,94),P$1(),A(5,`button`,79),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.showError.set(!0))}),me(6,`Validate reference`),P$1()()}if(a&2){let t=S$1(2);C(3),V$1(`value`,t.fieldValue()),K(`aria-invalid`,!!t.fieldError())(`aria-describedby`,t.fieldError()?`custom-error`:null),C(),ne$1(t.fieldError()?4:-1)}}function To(a,r){if(a&1&&(A(0,`p`),me(1,`Keep related information together while showing one panel at a time.`),P$1(),A(2,`bx-input-field`,102),nR(),P$1()),a&2){let t=S$1(3);C(2),V$1(`formControl`,t.tabNote),oR()}}function Mo(a,r){a&1&&(A(0,`p`),me(1,`Headers support arrow keys, Home and End. Panel content is created only when selected.`),P$1())}function Po(a,r){a&1&&(A(0,`bx-tab`,99)(1,`p`),me(2,`No recent project activity.`),P$1()())}function No(a,r){if(a&1&&(A(0,`bx-tab`,103)(1,`p`),me(2),P$1()()),a&2){let t=r.$implicit;V$1(`label`,`Additional panel `+t)(`value`,`extra-`+t),C(2),wn(`Panel `,t,` keeps navigation reachable through the scrolling header.`)}}function Do(a,r){if(a&1&&Mn(0,No,3,3,`bx-tab`,103,ca$1),a&2){let t=S$1(3);In$1(t.extraTabs)}}function Io(a,r){if(a&1){let t=tn();A(0,`div`,46)(1,`p`),me(2,` Swipe to scroll on touch, or hold a tab briefly before dragging to select. Compare a short flick with a slow drag and pause before release. Enable Overflow tabs and hold near an edge to keep scrolling. Use Appearance to compare reduced motion and opaque surfaces. With Reduce transparency enabled, the active tab keeps its filled selection shape in both appearances. `),P$1(),A(3,`bx-tabs`,95,0),QC(`selectedValueChange`,function(o){at(t);let s=S$1(2);return QA(s.selectedTab,o)||(s.selectedTab=o),lt$1(o)}),A(5,`bx-tab`,96),ep(6,To,3,1,`ng-template`,97),P$1(),A(7,`bx-tab`,98),ep(8,Mo,2,0,`ng-template`,97),P$1(),te(9,Po,3,0,`bx-tab`,99),Ae(10,`bx-tab`,100),te(11,Do,2,0),P$1(),A(12,`div`,51)(13,`button`,79),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.tabsVariant.set(o.tabsVariant()===`segmented`?`underline`:`segmented`))}),me(14,` Underline appearance `),P$1(),A(15,`button`,79),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.detailsDisabled.set(!o.detailsDisabled()))}),me(16,` Disable details `),P$1(),A(17,`button`,79),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.showActivity.set(!o.showActivity()))}),me(18,` Show activity `),P$1()(),A(19,`output`),me(20),P$1(),A(21,`div`,51)(22,`button`,90),ue(`click`,function(){at(t);let o=It(4);return lt$1(o.select(`overview`))}),me(23,`Select overview`),P$1(),A(24,`button`,101),ue(`click`,function(){at(t);let o=It(4);return lt$1(o.select(`activity`))}),me(25,`Select activity`),P$1(),A(26,`button`,90),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.overflowTabs.set(!o.overflowTabs()))}),me(27,` Overflow tabs `),P$1()()()}if(a&2){let t=S$1(2);C(3),V$1(`variant`,t.tabsVariant()),XC(`selectedValue`,t.selectedTab),C(4),V$1(`disabled`,t.detailsDisabled()),C(2),ne$1(t.showActivity()?9:-1),C(),V$1(`disabled`,!0),C(),ne$1(t.overflowTabs()?11:-1),C(2),K(`aria-pressed`,t.tabsVariant()===`underline`),C(2),K(`aria-pressed`,t.detailsDisabled()),C(2),K(`aria-pressed`,t.showActivity()),C(3),wn(`Selected: `,t.selectedTab()),C(4),V$1(`disabled`,!t.showActivity()),C(2),K(`aria-pressed`,t.overflowTabs())}}function Oo(a,r){a&1&&Ae(0,`app-menu-shortcut-examples`)}function Vo(a,r){a&1&&Ae(0,`app-menu-shortcut-examples`)}function zo(a,r){a&1&&(A(0,`div`,46),Ae(1,`bx-tooltip`,104),A(2,`p`),me(3,`Standalone tooltip content. Use the trigger directive for positioned help.`),P$1(),A(4,`a`,105),me(5,`Try the tooltip trigger`),P$1()())}function Wo(a,r){if(a&1){let t=tn();A(0,`div`,46)(1,`div`,51)(2,`button`,106),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.activate(`Saved`))}),me(3,` Save project`),P$1(),A(4,`button`,107),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.activate(`Normal tap activated`))}),me(5,` Hold for a hint`),P$1(),A(6,`button`,108),Ae(7,`bx-icon`,109),P$1()(),A(8,`p`),me(9,` Hover with a mouse or use keyboard focus for hints. On touch screens, Save project activates immediately, Hold for a hint supports a long press, and the information button opens help on tap. `),P$1()()}}function Lo(a,r){if(a&1){let t=tn();A(0,`bx-menu`)(1,`bx-menu-item`,112),ue(`action`,function(){at(t),S$1();let o=It(2);return S$1(2).activate(`Project duplicated`),lt$1(o.close())}),P$1(),A(2,`bx-menu-item`,113),ue(`action`,function(){at(t),S$1();let o=It(2);return S$1(2).activate(`Project archived`),lt$1(o.close())}),P$1(),A(3,`bx-menu-item`,114),ue(`action`,function(){at(t),S$1();let o=It(2);return S$1(2).activate(`Delete requested`),lt$1(o.close())}),P$1()()}a&2&&(C(3),V$1(`danger`,!0))}function Ro(a,r){if(a&1&&(A(0,`div`,46)(1,`button`,110,1),me(3,` Project actions `),Ae(4,`bx-icon`,111),P$1(),ep(5,Lo,4,1,`ng-template`,null,2,qr),A(7,`output`),me(8),P$1(),A(9,`p`),me(10,`Open, close, or reopen while the menu fades. Its contents keep their full size throughout.`),P$1()()),a&2){let t=It(2),e=It(6);C(),V$1(`bxDropdown`,e),C(7),wn(`Transition: `,t.state())}}function Ao(a,r){if(a&1){let t=tn();A(0,`bx-menu`)(1,`bx-menu-item`,116),ue(`action`,function(){at(t);let o=S$1(3);return lt$1(o.activate(`Selection copied`))}),P$1(),A(2,`bx-menu-item`,117),ue(`action`,function(){at(t);let o=S$1(3);return lt$1(o.activate(`Selection archived`))}),P$1()()}}function Bo(a,r){if(a&1){let t=tn();A(0,`div`,46)(1,`div`,115),me(2,` Right-click, touch and hold, or focus here and press Shift + F10. `),P$1(),A(3,`button`,79),ue(`click`,function(o){at(t);let s=S$1(2);return lt$1(s.openContextMenu(o))}),me(4,`Open actions`),P$1(),ep(5,Ao,3,0,`ng-template`,null,3,qr),A(7,`p`),me(8,`Menu rows keep their hover and focus feedback inside the opaque panel.`),P$1()()}if(a&2){let t=It(6);C(),V$1(`bxContextMenu`,t)}}function Fo(a,r){a&1&&Ae(0,`app-breadcrumb-examples`)}function jo(a,r){a&1&&(A(0,`div`,46)(1,`div`,118),Ae(2,`bx-icon`,119)(3,`bx-icon`,120)(4,`bx-icon`,121)(5,`bx-icon`,122)(6,`bx-icon`,123),P$1(),A(7,`a`,124),me(8,`Browse the searchable icon catalog`),P$1()()),a&2&&(C(2),V$1(`decorative`,!1))}function qo(a,r){if(a&1){let t=tn();A(0,`bx-modal-banner`,127),ue(`close`,function(){at(t);let o=S$1(3);return o.bannerVisible.set(!1),lt$1(o.activate(`Banner dismissed`))}),P$1()}a&2&&V$1(`header`,nc(3,Ia,oO(2,Da)))(`showCloseButton`,!0)}function Ho(a,r){if(a&1){let t=tn();A(0,`button`,79),ue(`click`,function(){at(t);let o=S$1(3);return lt$1(o.bannerVisible.set(!0))}),me(1,`Restore banner`),P$1()}}function Uo(a,r){if(a&1){let t=tn();A(0,`div`,49),te(1,qo,1,5,`bx-modal-banner`,125)(2,Ho,2,0,`button`,126),A(3,`button`,52),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.openModal())}),me(4,`See banner in a dialog`),P$1()()}if(a&2){let t=S$1(2);C(),ne$1(t.bannerVisible()?1:2)}}function Go(a,r){if(a&1){let t=tn();A(0,`div`,46)(1,`div`,51)(2,`button`,56),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.notify(`success`))}),me(3,`Success`),P$1(),A(4,`button`,128),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.notify(`info`))}),me(5,`Information`),P$1(),A(6,`button`,57),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.notify(`warn`))}),me(7,`Warning`),P$1(),A(8,`button`,58),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.notify(`danger`))}),me(9,`Error`),P$1()(),A(10,`p`),me(11,`The toast host manages the progress indicator, dismiss action, pause and cleanup.`),P$1(),A(12,`a`,129),me(13,`Open the full toast configurator`),P$1()()}}function Ko(a,r){if(a&1){let t=tn();A(0,`div`,46)(1,`div`,51)(2,`button`,56),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.notify(`success`))}),me(3,`Show success`),P$1(),A(4,`button`,128),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.notify(`info`))}),me(5,`Show information`),P$1(),A(6,`button`,57),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.notify(`warn`))}),me(7,`Show warning`),P$1(),A(8,`button`,58),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.notify(`danger`))}),me(9,`Show error`),P$1()(),A(10,`p`),me(11,`Semantic colors remain tied to the active Blocks palette.`),P$1()()}}function Xo(a,r){if(a&1){let t=tn();A(0,`section`,50),Ae(1,`bx-icon`,130),A(2,`h3`),me(3,`A custom Blocks surface`),P$1(),A(4,`p`),me(5,`Material, blur, tint, lighting and motion follow the same global configuration as the controls around it.`),P$1(),A(6,`bx-checkbox`,131),QC(`checkedChange`,function(o){at(t);let s=S$1(2);return QA(s.surfaceEmission,o)||(s.surfaceEmission=o),lt$1(o)}),P$1(),A(7,`button`,132),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.activate(`Custom surface action`))}),me(8,` Try an action `),P$1(),A(9,`p`),me(10,`Hover, keyboard focus and press retain local feedback. Enable emission to add the themed light source.`),P$1()()}if(a&2){let t=S$1(2);C(6),XC(`checked`,t.surfaceEmission),C(),V$1(`surfaceEffects`,!1)(`bxSurfaceEmission`,t.surfaceEmission()?void 0:!1)}}function Qo(a,r){if(a&1){let t=tn();A(0,`button`,79),ue(`click`,function(){at(t);let o=S$1(3);return lt$1(o.openModal(`left`))}),me(1,`Open on the left`),P$1()}}function Yo(a,r){if(a&1){let t=tn();A(0,`div`,46)(1,`div`,51)(2,`button`,52),ue(`click`,function(){at(t);let o=S$1(2);return lt$1(o.openModal())}),me(3),P$1(),te(4,Qo,2,0,`button`,126),P$1(),A(5,`p`),me(6,`Try editing, saving, pressing Escape, and dismissing through the backdrop. This is the actual service-created component.`),P$1(),A(7,`a`,133),me(8,`Open the full modal configurator`),P$1()()}if(a&2){let t=S$1(2);C(3),wn(`Open `,t.entry().title.toLowerCase()),C(),ne$1(t.entry().id===`modal-side`?4:-1)}}function Zo(a,r){if(a&1&&(A(0,`div`,11),te(1,Wa,1,0,`app-virtual-collection-examples`)(2,La,1,0,`app-resize-handle-examples`)(3,Ra,1,0,`app-side-panel-examples`)(4,Aa,1,0,`app-infinite-scroll-examples`)(5,Ba,1,0,`app-essentials-examples`,21)(6,Fa,1,0,`app-essentials-examples`,22)(7,ja,1,0,`app-essentials-examples`,23)(8,qa,1,0,`app-essentials-examples`,24)(9,Ha,1,0,`app-essentials-examples`,25)(10,Ua,1,0,`app-essentials-examples`,26)(11,Ga,1,0,`app-essentials-examples`,27)(12,Ka,1,0,`app-essentials-examples`,28)(13,Xa,1,0,`app-essentials-examples`,29)(14,Qa,1,0,`app-page-examples`)(15,Ya,1,0,`app-essentials-examples`,30)(16,Za,1,0,`app-essentials-examples`,31)(17,Ja,1,0,`app-essentials-examples`,32)(18,$a,1,0,`app-tag-examples`)(19,eo,1,0,`app-truncation-examples`)(20,to,1,0,`app-form-examples`,33)(21,no,1,0,`app-form-examples`,34)(22,io,1,0,`app-form-examples`,35)(23,ao,1,0,`app-form-examples`,36)(24,oo,1,0,`app-form-examples`,37)(25,ro,1,0,`app-form-examples`,38)(26,lo,1,0,`app-form-examples`,39)(27,so,1,0,`app-form-examples`,40)(28,co,1,0,`app-form-examples`,41)(29,po,1,0,`app-form-examples`,42)(30,mo,1,0,`app-form-examples`,43)(31,uo,1,0,`app-form-examples`,44)(32,go,1,0,`app-form-examples`,45)(33,bo,26,3,`div`,46)(34,_o,17,7,`div`,46)(35,yo,9,10,`div`,46)(36,vo,8,5,`div`,47)(37,ho,6,11,`div`,47)(38,xo,10,4,`fieldset`,46)(39,fo,1,0,`app-search-examples`)(40,So,1,0,`app-form-examples`,48)(41,Co,18,2,`div`,47)(42,wo,9,3,`div`,46)(43,ko,7,4,`div`,47)(44,Io,28,12,`div`,46)(45,Oo,1,0,`app-menu-shortcut-examples`)(46,Vo,1,0,`app-menu-shortcut-examples`)(47,zo,6,0,`div`,46)(48,Wo,10,0,`div`,46)(49,Ro,11,2,`div`,46)(50,Bo,9,1,`div`,46)(51,Fo,1,0,`app-breadcrumb-examples`)(52,jo,9,1,`div`,46)(53,Uo,5,1,`div`,49)(54,Go,14,0,`div`,46)(55,Ko,12,0,`div`,46)(56,Xo,11,3,`section`,50)(57,Yo,9,2,`div`,46),P$1()),a&2){let t,e=S$1();C(),ne$1((t=e.entry().id)===`virtual-collection`?1:t===`resize-handle`?2:t===`side-panel`?3:t===`infinite-scroll`?4:t===`divider`?5:t===`popover`?6:t===`skeleton`?7:t===`autocomplete`?8:t===`chip`?9:t===`accordion`?10:t===`collapsible`?11:t===`alert`?12:t===`card`?13:t===`page-container`?14:t===`container`?15:t===`stack`?16:t===`grid`?17:t===`tag`?18:t===`truncate`?19:t===`signal-forms`?20:t===`radio-group`?21:t===`multi-select`?22:t===`load-more`?23:t===`loading-spinner`?24:t===`loading-indicator`?25:t===`progress-bar`?26:t===`button-loading`?27:t===`range-slider`?28:t===`hint`?29:t===`prefix`?30:t===`suffix`?31:t===`native-control`?32:t===`button`?33:t===`checkbox-indicator`?34:t===`checkbox`?35:t===`form-field`?36:t===`input-field`?37:t===`radio`?38:t===`search-input`?39:t===`select`?40:t===`slider`?41:t===`slide-toggle`?42:t===`error`?43:t===`tabs`?44:t===`menu`?45:t===`menu-item`?46:t===`tooltip`?47:t===`tooltip-directive`?48:t===`dropdown`?49:t===`context-menu`?50:t===`breadcrumbs`?51:t===`icon`?52:t===`modal-banner`?53:t===`toast-core`?54:t===`simple-toast`?55:t===`surface`?56:57)}}var ri=class a{activatedRoute=p(Zr);modalService=p(Ne);toastrService=p(Be);routeData=dZ(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});contextMenu=nn$1(cm);entry=g(()=>e.find(r=>r.id===this.routeData().componentId)??e[0]);count=D(0);status=D(`Ready to try.`);fieldValue=D(``);showError=D(!1);surfaceEmission=D(!1);fieldError=g(()=>this.showError()&&this.fieldValue().trim().length<3?`Enter at least three characters.`:void 0);name=new BD(`Blocks workspace`,{nonNullable:!0,validators:Ba$1.required});email=new BD(``,{nonNullable:!0,validators:Ba$1.email});volume=new BD(50,{nonNullable:!0});quantity=new BD(3,{nonNullable:!0});checked=new BD(!0,{nonNullable:!0});secondChecked=new BD(!1,{nonNullable:!0});disabledCheck=new BD({value:!1,disabled:!0},{nonNullable:!0});frequency=new BD(`weekly`,{nonNullable:!0});destination=new BD(`skopje`,{nonNullable:!0});enabled=new BD(!0,{nonNullable:!0});bannerVisible=D(!0);selectedTab=D(`overview`);tabsVariant=D(`segmented`);detailsDisabled=D(!1);showActivity=D(!0);overflowTabs=D(!1);extraTabs=[1,2,3,4,5,6,7,8];tabNote=new BD(``,{nonNullable:!0});options=[{label:`Skopje`,value:`skopje`},{label:`Ohrid`,value:`ohrid`},{label:`Bitola`,value:`bitola`},{label:`Unavailable destination`,value:`unavailable`,disabled:!0}];activate(r){this.count.update(t=>t+1),this.status.set(`${r} \xB7 action ${this.count()}`)}updateField(r){this.fieldValue.set(r.target.value)}openContextMenu(r){r.preventDefault();let t=r.currentTarget.getBoundingClientRect();this.contextMenu()?.open(new MouseEvent(`contextmenu`,{clientX:t.left+16,clientY:t.bottom+4}))}openModal(r){let t=r??(this.entry().id===`modal-side`?`right`:this.entry().id===`modal-bottom-sheet`?`bottom-sheet`:`center`);this.modalService.open(nt,{data:{title:this.entry().title,description:`Edit the project name. The header, content, footer, backdrop and close behavior use the existing Blocks modal composition.`},header:{text:this.entry().title},style:{layout:t,hasBackdrop:!0,animate:!0,showCloseButton:!0}}).afterClosed().subscribe(o=>this.status.set(o.state===`confirm`?`Saved: ${o.data}`:`Dialog dismissed.`))}notify(r){let t={title:r===`success`?`Settings saved`:r===`warn`?`Review needed`:r===`danger`?`Action failed`:`Workspace update`,message:`This notification follows the application theme and appearance settings.`,durationInMs:4500};switch(r){case`success`:this.toastrService.queueSuccess(t);break;case`info`:this.toastrService.queueInfo(t);break;case`warn`:this.toastrService.queueWarning(t);break;case`danger`:this.toastrService.queueDanger(t)}this.status.set(`${r} notification queued.`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=G$1({type:a,selectors:[[`app-component-demo`]],viewQuery:function(t,e){t&1&&yn(e.contextMenu,cm,5),t&2&&Et()},decls:28,vars:7,consts:[[`pilotTabs`,``],[`dropdown`,`bxDropdown`],[`dropdownActions`,``],[`contextActions`,``],[3,`pageDescription`],[1,`component-meta`],[`routerLink`,`/appearance`],[`aria-labelledby`,`preview-heading`,1,`demo-section`],[1,`section-heading`],[`id`,`preview-heading`],[1,`demo-stage`],[`bxSurface`,``,1,`demo-stage`],[`role`,`status`,`aria-live`,`polite`,1,`action-status`],[`aria-labelledby`,`usage-heading`,1,`usage-section`],[`id`,`usage-heading`],[`tabindex`,`0`,`aria-label`,`TypeScript import example`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`tabindex`,`0`,`aria-label`,`HTML usage example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`aria-label`,`Component documentation`,1,`documentation-section`],[3,`path`],[`example`,`divider`],[`example`,`popover`],[`example`,`skeleton`],[`example`,`autocomplete`],[`example`,`chip`],[`example`,`accordion`],[`example`,`collapsible`],[`example`,`alert`],[`example`,`card`],[`example`,`container`],[`example`,`stack`],[`example`,`grid`],[`example`,`signal-forms`],[`example`,`radio-group`],[`example`,`multi-select`],[`example`,`load-more`],[`example`,`loading-spinner`],[`example`,`loading-indicator`],[`example`,`progress-bar`],[`example`,`button-loading`],[`example`,`range-slider`],[`example`,`hint`],[`example`,`prefix`],[`example`,`suffix`],[`example`,`native-control`],[1,`demo-stack`],[1,`demo-stack`,`control-width`],[`example`,`select`],[1,`demo-stack`,`banner-preview`],[`bxSurface`,``,1,`custom-surface`],[1,`demo-row`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`accent`,3,`click`],[`type`,`button`,`bx-button`,``,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`disabled`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`fab`,`aria-label`,`Add item`,3,`click`],[`name`,`plus`],[`type`,`button`,`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Close example`,3,`click`],[`name`,`x`,`size`,`20`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`outlined`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`surfaceEffects`],[`label`,`Checked state`,3,`formControl`],[`label`,`Partial state`,3,`formControl`],[3,`checked`,`indeterminate`],[3,`checked`],[3,`indeterminate`],[`label`,`Receive product updates`,3,`formControl`],[`label`,`Include preview features`,3,`formControl`],[`label`,`Partial selection`,3,`indeterminate`],[`label`,`Without emission`,3,`checked`,`emissive`],[`label`,`Read-only selection`,3,`checked`,`readOnly`],[`label`,`Unavailable setting`,3,`formControl`],[`label`,`Project name`,`forId`,`field-preview`,3,`required`,`error`],[`bxSurface`,``,1,`native-control-surface`],[`id`,`field-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`label`,`Project name`,3,`errorMessages`,`formControl`],[`label`,`Email address`,`type`,`email`,3,`errorMessages`,`formControl`],[`label`,`Team members`,`type`,`number`,3,`min`,`max`,`formControl`],[`label`,`Daily summary`,`name`,`frequency-demo`,`value`,`daily`,3,`formControl`],[`label`,`Weekly summary`,`name`,`frequency-demo`,`value`,`weekly`,3,`formControl`],[`label`,`Only important updates`,`name`,`frequency-demo`,`value`,`important`,3,`formControl`],[`for`,`volume-demo`],[`bxSlider`,``,`id`,`volume-demo`,`type`,`range`,`min`,`0`,`max`,`100`,3,`formControl`],[`for`,`disabled-volume`],[`bxSlider`,``,`id`,`disabled-volume`,`type`,`range`,`value`,`30`,`disabled`,``],[`bx-button`,``,`type`,`button`,3,`click`],[`label`,`Enable notifications`,`hint`,`Receive updates for important activity.`,3,`formControl`],[`label`,`Reference`,`forId`,`error-preview`],[`id`,`error-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`id`,`custom-error`],[`ariaLabel`,`Project information`,3,`selectedValueChange`,`variant`,`selectedValue`],[`label`,`Overview`,`value`,`overview`,`icon`,`book-open`],[`bxTabContent`,``],[`label`,`Details`,`value`,`details`,`color`,`accent`,`icon`,`badge-check`,`endIcon`,`chevron-right`,3,`disabled`],[`label`,`Recent project activity`,`value`,`activity`,`color`,`info`,`textColor`,`text-warn`,`highlightColor`,`text-warn`,`contentColor`,`text-info`,`icon`,`activity`],[`label`,`Unavailable`,`value`,`unavailable`,3,`disabled`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[`label`,`Project note`,3,`formControl`],[3,`label`,`value`],[`text`,`Your changes are saved automatically.`],[`routerLink`,`/components/tooltip-directive`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`Saves the current project`,`placement`,`top`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`An optional hint revealed by touching and holding`,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`tooltip-hold-target`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`icon`,`aria-label`,`More information`,`bxTooltip`,`Appearance settings apply to all components`,`bxTooltipTouch`,`tap`,`placement`,`bottom`],[`name`,`info`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`bxTransition`,`fade`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[`tabindex`,`0`,1,`context-target`,3,`bxContextMenu`],[`label`,`Copy selection`,`icon`,`copy`,3,`action`],[`label`,`Archive selection`,`icon`,`archive`,3,`action`],[1,`demo-row`,`icon-row`],[`name`,`sparkles`,`size`,`32`,`color`,`text-accent`,`ariaLabel`,`Highlights`,3,`decorative`],[`name`,`check-circle`,`size`,`32`,`color`,`text-success`],[`name`,`info`,`size`,`32`,`color`,`text-info`,`bgColor`,`auto`],[`name`,`triangle-alert`,`size`,`32`,`color`,`text-warn`],[`name`,`heart`,`size`,`40`,`color`,`text-danger`],[`routerLink`,`/icon-catalog`],[3,`header`,`showCloseButton`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`],[3,`close`,`header`,`showCloseButton`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`routerLink`,`/toastr`],[`name`,`layers`,`size`,`28`],[`label`,`Emit interaction light`,3,`checkedChange`,`checked`],[`type`,`button`,`bx-button`,``,`bxSurface`,``,`variant`,`tonal`,3,`click`,`surfaceEffects`,`bxSurfaceEmission`],[`routerLink`,`/modal`]],template:function(t,e){t&1&&(A(0,`bx-page-container`)(1,`bx-page-header`,4)(2,`div`,5)(3,`code`),me(4),P$1(),A(5,`a`,6),me(6,`Configure appearance globally`),P$1()()(),A(7,`section`,7)(8,`div`,8)(9,`h2`,9),me(10,`Interactive example`),P$1(),A(11,`span`),me(12,`Uses your active palette`),P$1()(),te(13,Oa,2,0,`div`,10)(14,Va,2,0,`div`,10)(15,za,2,0,`div`,10)(16,Zo,58,1,`div`,11),A(17,`p`,12),me(18),P$1()(),A(19,`section`,13)(20,`h2`,14),me(21,`Quick usage`),P$1(),A(22,`pre`,15),Ae(23,`code`,16),P$1(),A(24,`pre`,17),Ae(25,`code`,18),P$1()(),A(26,`section`,19),Ae(27,`app-readme`,20),P$1()()),t&2&&(C(),V$1(`pageDescription`,e.entry().description),C(3),Me(e.entry().selector),C(9),ne$1(e.entry().id===`side-nav`?13:e.entry().id===`top-nav`?14:e.entry().id===`stepper`?15:16),C(5),Me(e.status()),C(5),V$1(`highlight`,`import { `+e.entry().symbol+` } from '`+e.entry().package+`';`),C(2),V$1(`highlight`,e.entry().example),C(2),V$1(`path`,e.entry().readme))},dependencies:[Ge,Ze,Ke,tt,bt,jM,Ga$1,ht,Xp,X,Xe,He,Ue,$e,Je,Ye,et,fe,Wne,yD,_F,Hne,MF,Z$1,Ti$1,je,ne,nr,tr,Qn$1,ar,V,pm,um,lm,kM,cm,vi$1,wM,rd,td,qe,on,zt,G,S],styles:[`
[_nghost-%COMP%] {
  display: block;
}
h2[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  margin: 0;
}
h3[_ngcontent-%COMP%] {
  margin: 0;
}
.component-meta[_ngcontent-%COMP%], 
.demo-row[_ngcontent-%COMP%], 
.section-heading[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-space-4, 1rem);
}
.component-meta[_ngcontent-%COMP%] {
  font-size: 0.875rem;
}
code[_ngcontent-%COMP%] {
  font-family:
    ui-monospace,
    SFMono-Regular,
    monospace;
}
.demo-section[_ngcontent-%COMP%], 
.usage-section[_ngcontent-%COMP%] {
  margin-bottom: var(--%NS%bx-space-8, 2rem);
}
.section-heading[_ngcontent-%COMP%] {
  justify-content: space-between;
  margin-bottom: var(--%NS%bx-space-4, 1rem);
}
.section-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.8125rem;
}
.demo-stage[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-8, 2rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  background:
    linear-gradient(
      135deg,
      var(--%NS%bx-bg-surface),
      var(--%NS%bx-bg-surface-alt));
  min-height: 12rem;
  display: flex;
  align-items: center;
}
.demo-stack[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--%NS%bx-space-4, 1rem);
  max-width: 100%;
  min-width: 0;
}
.control-width[_ngcontent-%COMP%] {
  width: min(100%, 26rem);
}
.control-width[_ngcontent-%COMP%]    > bx-input-field[_ngcontent-%COMP%], 
.control-width[_ngcontent-%COMP%]    > bx-select[_ngcontent-%COMP%], 
.control-width[_ngcontent-%COMP%]    > bx-search-input[_ngcontent-%COMP%], 
.control-width[_ngcontent-%COMP%]    > bx-form-field[_ngcontent-%COMP%] {
  width: 100%;
}
fieldset[_ngcontent-%COMP%] {
  border: 0;
  padding: 0;
  margin: 0;
}
legend[_ngcontent-%COMP%] {
  margin-bottom: var(--%NS%bx-space-4, 1rem);
  font-weight: 600;
}
output[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.native-control[_ngcontent-%COMP%] {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: var(--%NS%bx-bg-surface);
  color: var(--%NS%bx-text-primary);
  padding: var(--%NS%bx-space-3, 0.75rem);
  font: inherit;
}
.native-control[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.menu-preview[_ngcontent-%COMP%] {
  min-width: 15rem;
}
.context-target[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-8, 2rem);
  border: 1px dashed var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.context-target[_ngcontent-%COMP%], 
.tooltip-hold-target[_ngcontent-%COMP%] {
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}
.banner-preview[_ngcontent-%COMP%] {
  width: 100%;
}
.banner-preview[_ngcontent-%COMP%]    > bx-modal-banner[_ngcontent-%COMP%] {
  width: 100%;
}
.custom-surface[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--%NS%bx-space-4, 1rem);
  padding: var(--%NS%bx-space-6, 1.5rem);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  max-width: 28rem;
}
.demo-stage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  line-height: 1.6;
  color: var(--%NS%bx-text-secondary);
}
.action-status[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  min-height: 1.5em;
  margin: var(--%NS%bx-space-3, 0.75rem) 0 0;
}
.usage-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin-bottom: var(--%NS%bx-space-4, 1rem);
}
.search-results[_ngcontent-%COMP%] {
  margin: 0;
  padding-left: var(--%NS%bx-space-5, 1.25rem);
  line-height: 1.8;
}
a[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-brand);
  text-underline-offset: 3px;
}
@media (max-width: 640px) {
  .demo-stage[_ngcontent-%COMP%] {
    padding: var(--%NS%bx-space-4, 1rem);
  }
  .component-meta[_ngcontent-%COMP%] {
    align-items: flex-start;
    flex-direction: column;
  }
}
.native-control-surface[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
}
.native-control-surface[_ngcontent-%COMP%]   .native-control[_ngcontent-%COMP%] {
  background: transparent;
  border: 0;
}
.native-control-surface[_ngcontent-%COMP%]    > .native-control[_ngcontent-%COMP%] {
  border: 0;
  outline: none;
}`]})};export{ri as ComponentDemo};