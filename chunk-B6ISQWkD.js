import{a as dt,i as bt,n as X,r as Z,t as N}from"./chunk-DpEE8IEB.js";import{t as Be}from"./chunk-BwWc81Rs.js";import{n as k}from"./chunk-Cmi_v6t9.js";import{$ as dn,A as ht,B as Ve,D as ze,F as Ae$1,G as zt,H as Yt,I as Ge$1,J as Z$1,K as Ae,L as He$1,P as $t,Q as cn,R as Qt,S as qs,T as to$1,V as We,W as qt,Y as ne,Z as F,b as po$1,c as Qi$1,f as Yi$1,h as eo$1,i as Ci$1,k as e,n as $s,nt as ve,q as V,t as $n$1,tt as sn,x as qo$1,y as oo$1,z as Ut}from"./main-VEYCVDKS.js";import{$n as be,$r as je$1,Aa as zs,Ar as go$1,B as Gc,Bn as _M,Br as hr,C as DM,Cn as Wf,Da as zc,Ei as pN,Et as Ns,F as Fe,Fi as r2,Fn as Z$2,Fr as hM,Ft as Ot,Gi as ste,Gr as iM,H as Gk,Hi as si$1,Hn as _e,Ir as he$1,K as Hc,Ki as t2,Kn as aS,Kt as Rs,M as F$1,Mn as Ya$1,Mr as gr,Mt as Of,Ot as O1,Q as IM,Qt as Se,Ri as sM,Rn as Zf,Rr as hk,S as D,Sa as ye,Sn as We$1,Sr as fn,Ti as pM,Tn as Wk,Un as _s,Vn as _S,W as H,Xi as u0,Xr as j,Xt as SM,Zi as uM,Zn as bM,Zt as SS,_t as MM,aa as ve$1,ai as kS,ar as cM,bn as Wa$1,br as fM,di as mM,et as Is,f as At,ga as xe$1,gi as nn,gr as eM,ha as xb,hi as nM,hn as Ve$1,ia as vb,ii as kM,in as Te,it as Jk,ji as qc,jn as YE,jt as OR,k as ES,ka as zn$1,ki as pte,mr as dte,mt as LR,ni as jr,nr as bn,nt as JF,oa as vn,on as U,pn as Vc,qi as tM,qn as ae,qr as ie,ra as v,ri as k1,rr as bo$1,rt as Jf,s as A1,sn as Uc,sr as cY,st as K,t as $c,ti as jn$1,un as V$1,ur as dM,ut as Kf,v as Bf,vt as MS,w as DS,wi as p,wr as g,wt as Mt,xa as yb,xi as op,xn as Wd,xt as Mn,y as Bl,yi as oe,yr as er,zn as _,zt as Pp}from"./chunk-B79cUMdP.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var Nn=[`Skopje`,`Ohrid`,`Bitola`,`Prilep`,`Tetovo`,`Struga`,`Veles`,`Shtip`,`Kumanovo`,`Gevgelija`,`Kavadarci`,`Resen`,`Krusevo`,`Berovo`,`Debar`,`Strumica`,`Gostivar`,`Kicevo`,`Kratovo`,`Kocani`,`Radovish`,`Negotino`,`Delchevo`,`Vinica`].map(a=>({value:a}));var In=[{label:`1 suggestion`,value:1},{label:`3 suggestions`,value:3},{label:`12 suggestions`,value:12},{label:`All 24 suggestions`,value:24}];var On=[{label:`Primary`,value:`primary`},{label:`Accent`,value:`accent`},{label:`Success`,value:`text-success`},{label:`Info`,value:`text-info`}];var Ce=class a{destroyRef=p(Z$2);query=_(``);matches=v(()=>Nn.filter(r=>r.value.toLowerCase().includes(this.query().toLowerCase())));options=_([]);loading=_(!1);searching=_(!1);error=_(void 0);hasMore=v(()=>this.options().length<this.matches().length);pageSize=_(3);failNext=_(!1);status=_(`Ready`);loadMoreConfig={text:`Load more suggestions`,loadingText:`Loading suggestions`,retryText:`Retry request`,variant:`tonal`,color:`accent`};timer;constructor(){this.destroyRef.onDestroy(()=>clearTimeout(this.timer))}search(r){clearTimeout(this.timer),this.query.set(r),this.error.set(void 0),this.loading.set(!0),this.searching.set(!0),this.status.set(`Replacing suggestions…`),this.timer=setTimeout(()=>{this.options.set(this.matches().slice(0,this.pageSize())),this.loading.set(!1),this.searching.set(!1),this.status.set(`First page ready`)},650)}loadMore(r){if(this.loading())return;this.loading.set(!0),this.error.set(void 0),this.status.set(`Request source: `+r.source);let t=this.failNext()&&r.source!==`retry`;this.failNext.set(!1),this.timer=setTimeout(()=>{t?(this.error.set(`The next page failed. Your results are kept.`),this.status.set(`Failed page retained. Choose Retry request.`)):(this.options.set(this.matches().slice(0,this.options().length+this.pageSize())),this.status.set(r.source===`retry`?`Retry succeeded`:`Page appended`)),this.loading.set(!1)},900)}setPageSize(r){let t=Number(r);this.pageSize.set(Number.isFinite(t)?Math.max(1,Math.min(24,Math.floor(t))):3),this.search(this.query())}static ɵfac=function(t){return new(t||a)};static ɵprov=K({token:a,factory:a.ɵfac})};var ri=()=>({ariaLabel:`Project details`});function li(a,r){a&1&&(j(0,`p`),Te(1,`Full width separator`),U(),Ve$1(2,`bx-divider`)(3,`bx-divider`,7)(4,`bx-divider`,8),j(5,`bx-stack`,9)(6,`span`),Te(7,`Start`),U(),Ve$1(8,`bx-divider`,10),j(9,`span`),Te(10,`End`),U()())}function si(a,r){if(a&1){let t=hr();j(0,`bx-popover`)(1,`bx-stack`)(2,`strong`),Te(3,`Project details`),U(),j(4,`p`),Te(5,`Your changes are saved in this workspace.`),U(),Ve$1(6,`bx-input-field`,13),j(7,`button`,14),ve$1(`click`,function(){bn(t),F$1();let o=Ya$1(2);return vn(o.close())}),Te(8,`Done`),U()()()}}function ci(a,r){if(a&1&&(j(0,`bx-stack`,11)(1,`button`,12,0),Te(3,` Open details `),U(),aS(4,si,9,0,`ng-template`,null,1,xb),U(),j(6,`p`),Te(7,`Internal actions stay open. Escape, outside click and tabbing out dismiss the panel.`),U()),a&2){let t=Ya$1(5);ae(`wrap`,!0),D(),ae(`bxPopover`,t)(`popoverConfig`,A1(3,ri))}}function di(a,r){a&1&&(j(0,`bx-stack`),Ve$1(1,`bx-skeleton`,16)(2,`bx-skeleton`,17)(3,`bx-skeleton`,18),U()),a&2&&(D(2),ae(`lines`,3)(`decorative`,!1))}function pi(a,r){a&1&&(j(0,`p`),Te(1,`Loaded content replaces the placeholders without moving the surrounding actions.`),U())}function mi(a,r){if(a&1){let t=hr();j(0,`button`,14),ve$1(`click`,function(){bn(t);let o=F$1();return vn(o.skeletonVisible.set(!o.skeletonVisible()))}),Te(1,`Toggle loaded content`),U(),j(2,`bx-card`,15),oe(3,di,4,2,`bx-stack`)(4,pi,2,0,`p`),U()}if(a&2){let t=F$1();D(3),ie(t.skeletonVisible()?3:4)}}function ui(a,r){if(a&1){let t=hr();j(0,`bx-autocomplete`,19),OR(),ve$1(`queryChange`,function(o){bn(t);let c=F$1();return vn(c.autocompleteDemoService.search(o))})(`loadMore`,function(o){bn(t);let c=F$1();return vn(c.autocompleteDemoService.loadMore(o))})(`optionSelected`,function(o){bn(t);let c=F$1();return vn(c.status.set(`Chose `+o.value))}),U(),j(1,`bx-stack`,20)(2,`button`,21),ve$1(`click`,function(){bn(t);let o=F$1();return vn(o.autocompleteDemoService.failNext.set(!0))}),Te(3,` Fail next page `),U(),j(4,`button`,22),ve$1(`click`,function(){bn(t);let o=F$1();return vn(o.autocompleteDemoService.search(``))}),Te(5,` Reload suggestions `),U(),j(6,`bx-checkbox`,23),MS(`checkedChange`,function(o){bn(t);let c=F$1();return k1(c.readOnly,o)||(c.readOnly=o),vn(o)}),U(),j(7,`bx-select`,24),ve$1(`selectionChange`,function(o){bn(t);let c=F$1();return vn(c.autocompleteDemoService.setPageSize(o.value))}),U()(),j(8,`output`),Te(9),U(),j(10,`p`),Te(11,` Choose Fail next page, load another page, then Retry request. Existing suggestions remain visible. Small pages show the load-more action; larger pages enable scrolling. Search for an unknown city to see the empty state and keep free text. `),U()}if(a&2){let t=F$1();ae(`formControl`,t.destination)(`options`,t.autocompleteDemoService.options())(`externalFiltering`,!0)(`searching`,t.autocompleteDemoService.searching())(`loading`,t.autocompleteDemoService.loading())(`hasMore`,t.autocompleteDemoService.hasMore())(`loadError`,t.autocompleteDemoService.error())(`readOnly`,t.readOnly())(`loadMoreConfig`,t.autocompleteDemoService.loadMoreConfig),LR(),D(),ae(`wrap`,!0)(`gap`,2),D(),ae(`disabled`,t.autocompleteDemoService.loading()||!t.autocompleteDemoService.hasMore()),D(2),ae(`disabled`,t.autocompleteDemoService.loading()),D(2),kS(`checked`,t.readOnly),D(),ae(`clearable`,!1)(`options`,t.pageSizes)(`value`,t.autocompleteDemoService.pageSize()),D(2),DS(`Value: `,t.destination.value||`(empty)`,` · `,t.autocompleteDemoService.options().length,` suggestions loaded · `,t.autocompleteDemoService.status(),``,t.autocompleteDemoService.failNext()?` · Next page will fail`:``)}}function gi(a,r){if(a&1){let t=hr();j(0,`bx-chip`,30),ve$1(`removed`,function(){let o=bn(t).$implicit,c=F$1(2);return vn(c.removeChip(o))})(`activated`,function(){let o=bn(t).$implicit,c=F$1(2);return vn(c.status.set(`Activated `+o))}),U()}if(a&2){let t=r.$implicit,e=F$1(2);ae(`label`,t)(`selectable`,!1)(`removable`,!0)(`config`,e.chipConfig)}}function bi(a,r){if(a&1){let t=hr();j(0,`bx-stack`,25)(1,`bx-chip`,26),MS(`selectedChange`,function(o){bn(t);let c=F$1();return k1(c.selected,o)||(c.selected=o),vn(o)}),U(),jn$1(2,gi,1,4,`bx-chip`,27,Wa$1),Ve$1(4,`bx-chip`,28)(5,`bx-chip`,29),U(),j(6,`button`,14),ve$1(`click`,function(){bn(t);let o=F$1();return vn(o.resetChips())}),Te(7,`Restore chips`),U(),j(8,`output`),Te(9),U()}if(a&2){let t=F$1();ae(`wrap`,!0)(`gap`,2),D(),ae(`config`,t.chipConfig),kS(`selected`,t.selected),D(),zn$1(t.removableChips()),D(2),ae(`selected`,!0)(`readOnly`,!0)(`removable`,!0),D(),ae(`disabled`,!0),D(4),gr(`Design selected: `,t.selected())}}function _i(a,r){a&1&&Ve$1(0,`bx-tag`,38),a&2&&ae(`focusable`,!1)}function yi(a,r){if(a&1&&(Te(0),Ve$1(1,`bx-tag`,39)),a&2){let t=r.$implicit;gr(``,t,` `),D(),ae(`leadingNumber`,2)(`focusable`,!1)}}function vi(a,r){a&1&&Ve$1(0,`bx-input-field`,40)}function hi(a,r){if(a&1){let t=hr();j(0,`bx-checkbox`,31),MS(`checkedChange`,function(o){bn(t);let c=F$1();return k1(c.multiple,o)||(c.multiple=o),vn(o)}),U(),j(1,`bx-accordion`,32)(2,`bx-accordion-item`,33)(3,`p`),Te(4,`Your changes are saved in this workspace.`),U(),Ve$1(5,`bx-input-field`,34),U(),j(6,`bx-accordion-item`,35)(7,`p`),Te(8,`Use arrows, Home and End between headings; Enter or Space toggles a section.`),U()(),Ve$1(9,`bx-accordion-item`,36)(10,`bx-accordion-item`,37),U(),aS(11,_i,1,1,`ng-template`,null,2,xb)(13,yi,2,3,`ng-template`,null,3,xb)(15,vi,1,0,`ng-template`,null,4,xb)}if(a&2){let t=Ya$1(12),e=Ya$1(14),o=Ya$1(16),c=F$1();kS(`checked`,c.multiple),D(),ae(`multiple`,c.multiple()),D(),ae(`expanded`,!0)(`titleTemplate`,e)(`trailingTemplate`,t),D(7),ae(`contentTemplate`,o),D(),ae(`disabled`,!0)}}function xi(a,r){if(a&1){let t=hr();j(0,`bx-collapsible`,41),MS(`expandedChange`,function(o){bn(t);let c=F$1();return k1(c.expanded,o)||(c.expanded=o),vn(o)}),j(1,`p`),Te(2,`Your changes are saved in this workspace.`),U(),Ve$1(3,`bx-input-field`,34),U(),j(4,`button`,14),ve$1(`click`,function(){bn(t);let o=F$1();return vn(o.expanded.set(!o.expanded()))}),Te(5,`Toggle from application`),U(),j(6,`bx-collapsible`,42)(7,`p`),Te(8,`This content remains accessible while user toggling is prevented.`),U()(),j(9,`output`),Te(10),U()}if(a&2){let t=F$1();ae(`region`,!0),kS(`expanded`,t.expanded),D(6),ae(`expanded`,!0)(`readOnly`,!0),D(4),gr(`Expanded: `,t.expanded())}}function fi(a,r){if(a&1&&Ve$1(0,`bx-alert`,43),a&2){let t=r.$implicit;ae(`tone`,t)(`title`,t)}}function Si(a,r){if(a&1){let t=hr();j(0,`button`,47),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.alertVisible.set(!0))}),Te(1,`Restore dismissible banner`),U()}}function Ci(a,r){if(a&1){let t=hr();jn$1(0,fi,1,2,`bx-alert`,43,Wa$1),j(2,`bx-alert`,44),MS(`visibleChange`,function(o){bn(t);let c=F$1();return k1(c.alertVisible,o)||(c.alertVisible=o),vn(o)}),ve$1(`dismissed`,function(){bn(t);let o=F$1();return vn(o.status.set(`Banner dismissed`))}),Te(3,` Long content and actions wrap inside the available width. `),j(4,`button`,45),ve$1(`click`,function(){bn(t);let o=F$1();return vn(o.status.set(`Banner action`))}),Te(5,`Review changes`),U()(),oe(6,Si,2,0,`button`,46)}if(a&2){let t=F$1();zn$1(t.tones),D(2),ae(`dismissible`,!0),kS(`visible`,t.alertVisible),D(4),ie(t.alertVisible()?-1:6)}}function wi(a,r){if(a&1){let t=hr();j(0,`bx-stack`,48)(1,`bx-checkbox`,49),MS(`checkedChange`,function(o){bn(t);let c=F$1();return k1(c.cardClickable,o)||(c.cardClickable=o),vn(o)}),U(),j(2,`bx-checkbox`,50),MS(`checkedChange`,function(o){bn(t);let c=F$1();return k1(c.cardDisabled,o)||(c.cardDisabled=o),vn(o)}),U(),j(3,`bx-checkbox`,51),MS(`checkedChange`,function(o){bn(t);let c=F$1();return k1(c.cardReadOnly,o)||(c.cardReadOnly=o),vn(o)}),U(),j(4,`bx-select`,52),ve$1(`selectionChange`,function(o){bn(t);let c=F$1();return vn(c.cardHighlight.set(o.value??`accent`))}),U()(),j(5,`bx-grid`,53)(6,`bx-card`,54),MS(`selectedChange`,function(o){bn(t);let c=F$1();return k1(c.cardSelected,o)||(c.cardSelected=o),vn(o)}),ve$1(`activated`,function(){bn(t);let o=F$1();return vn(o.status.set(`Workspace activated`))}),j(7,`p`),Te(8,`Press anywhere, or use Enter and Space. Selection emits the chosen token through the shared surface lighting.`),U()(),j(9,`button`,55),ve$1(`activated`,function(){bn(t);let o=F$1();return vn(o.status.set(`Reports opened`))}),j(10,`p`),Te(11,`A native button card provides a single action without a selected state.`),U()(),j(12,`bx-card`,56)(13,`p`),Te(14,`A disabled card retains its content and selection but cannot be activated or focused.`),U()(),j(15,`bx-card`,57)(16,`p`),Te(17,`Read-only selection remains focusable and keeps its appearance.`),U()(),j(18,`bx-card`,58)(19,`p`),Te(20,`Ordinary cards remain containers for independent actions.`),U(),j(21,`button`,59),ve$1(`click`,function(){bn(t);let o=F$1();return vn(o.status.set(`Project opened`))}),Te(22,`Open project`),U()()(),j(23,`output`),Te(24),U()}if(a&2){let t=F$1();ae(`wrap`,!0),D(),kS(`checked`,t.cardClickable),D(),kS(`checked`,t.cardDisabled),D(),kS(`checked`,t.cardReadOnly),D(),ae(`options`,t.cardHighlightOptions)(`clearable`,!1)(`value`,t.cardHighlight()),D(2),ae(`clickable`,t.cardClickable())(`disabled`,t.cardDisabled())(`readOnly`,t.cardReadOnly())(`highlightColor`,t.cardHighlight()),kS(`selected`,t.cardSelected),D(3),ae(`highlightColor`,t.cardHighlight()),D(3),ae(`clickable`,!0)(`disabled`,!0)(`selected`,!0),D(3),ae(`clickable`,!0)(`readOnly`,!0)(`selected`,!0)(`highlightColor`,t.cardHighlight()),D(9),SS(`Workspace selected: `,t.cardSelected(),` · Highlight: `,t.cardHighlight())}}function Ei(a,r){if(a&1){let t=hr();j(0,`bx-container`,5)(1,`bx-stack`)(2,`bx-stack`,60)(3,`h3`),Te(4,`Workspace overview`),U(),j(5,`button`,14),ve$1(`click`,function(){bn(t);let o=F$1();return vn(o.status.set(`New project requested`))}),Te(6,`New project`),U()(),j(7,`bx-grid`,61)(8,`bx-card`,62)(9,`p`),Te(10,`Your changes are saved in this workspace.`),U(),j(11,`button`,59),ve$1(`click`,function(){bn(t);let o=F$1();return vn(o.status.set(`Opened project`))}),Te(12,`Open project`),U()(),j(13,`bx-card`,63)(14,`bx-stack`,64),Ve$1(15,`bx-chip`,65),j(16,`p`),Te(17,`Cards and layout share the global material and semantic palette.`),U()()(),j(18,`bx-card`,66)(19,`p`),Te(20,`Resize this page or increase browser zoom to see the grid adapt.`),U()()()()()}a&2&&(D(14),ae(`gap`,2),D(),ae(`selectable`,!1))}var je=class a{injector=p(be);autocompleteDemoService=p(Ce);chips=Wd(cM);pageSizes=In;selected=_(!1);removableChips=_([`Angular`,`Design`,`Accessibility`]);tones=[`default`,`info`,`danger`,`warning`,`success`];skeletonVisible=_(!0);expanded=_(!1);multiple=_(!1);readOnly=_(!1);alertVisible=_(!0);status=_(`Ready`);destination=new hk(``);chipConfig={color:`accent`};cardHighlightOptions=On;cardHighlight=_(`accent`);cardClickable=_(!0);cardDisabled=_(!1);cardReadOnly=_(!1);cardSelected=_(!1);example=g.required();constructor(){Se(()=>{this.example()===`autocomplete`&&this.autocompleteDemoService.search(``)})}removeChip(r){let t=this.removableChips().indexOf(r);this.removableChips.update(e=>e.filter(o=>o!==r)),this.status.set(`Removed `+r),We$1(()=>{let e=this.chips().slice(1);e[Math.min(t,e.length-1)]?.focus()},{injector:this.injector})}resetChips(){this.removableChips.set([`Angular`,`Design`,`Accessibility`])}static ɵfac=function(t){return new(t||a)};static ɵcmp=V$1({type:a,selectors:[[`app-essentials-examples`]],viewQuery:function(t,e){t&1&&Mn(e.chips,cM,5),t&2&&Mt()},hostAttrs:[`data-bx-light-scope`,``],inputs:{example:[1,`example`]},features:[At([Ce])],decls:15,vars:2,consts:[[`popover`,`bxPopover`],[`details`,``],[`projectStatus`,``],[`projectHeading`,``],[`lazyContent`,``],[`size`,`full`,`landmark`,`region`,`ariaLabel`,`Workspace content`,1,`container-demo`],[`role`,`status`],[`label`,`Continue`],[`lineStyle`,`dashed`],[`direction`,`horizontal`,`align`,`stretch`],[`orientation`,`vertical`],[`direction`,`horizontal`,3,`wrap`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`bxPopover`,`popoverConfig`],[`label`,`Project note`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`title`,`Project details`],[`shape`,`circle`,`height`,`3rem`],[`label`,`Loading content`,3,`lines`,`decorative`],[`shape`,`rectangle`,`height`,`5rem`],[`label`,`Destination`,`placeholder`,`Type a city or a custom destination`,`loadingText`,`Loading suggestions`,`emptyText`,`No suggestions. Enter your own destination.`,3,`queryChange`,`loadMore`,`optionSelected`,`formControl`,`options`,`externalFiltering`,`searching`,`loading`,`hasMore`,`loadError`,`readOnly`,`loadMoreConfig`],[`direction`,`horizontal`,`align`,`center`,3,`wrap`,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`bx-button`,``,`type`,`button`,`variant`,`text`,3,`click`,`disabled`],[`label`,`Read only`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Page size`,`subscriptSizing`,`dynamic`,1,`autocomplete-page-size`,3,`selectionChange`,`clearable`,`options`,`value`],[`direction`,`horizontal`,3,`wrap`,`gap`],[`label`,`Design`,3,`selectedChange`,`config`,`selected`],[3,`label`,`selectable`,`removable`,`config`],[`label`,`Read only`,3,`selected`,`readOnly`,`removable`],[`label`,`Disabled`,3,`disabled`],[3,`removed`,`activated`,`label`,`selectable`,`removable`,`config`],[`label`,`Allow multiple open panels`,3,`checkedChange`,`checked`],[3,`multiple`],[`title`,`Project details`,3,`expanded`,`titleTemplate`,`trailingTemplate`],[`label`,`Project name`],[`title`,`Keyboard and focus`],[`title`,`Lazy content`,3,`contentTemplate`],[`title`,`Unavailable section`,3,`disabled`],[`text`,`Saved`,`size`,`small`,3,`focusable`],[`size`,`small`,3,`leadingNumber`,`focusable`],[`label`,`Created when opened`],[`title`,`Project details`,3,`expandedChange`,`region`,`expanded`],[`title`,`Read-only open section`,3,`expanded`,`readOnly`],[`message`,`Your changes are saved in this workspace.`,3,`tone`,`title`],[`tone`,`info`,`title`,`Project details`,`dismissLabel`,`Dismiss notification`,`dismissFocusTarget`,`restore-banner`,3,`visibleChange`,`dismissed`,`dismissible`,`visible`],[`type`,`button`,`bx-button`,``,`bxAlertActions`,``,`variant`,`tonal`,3,`click`],[`type`,`button`,`id`,`restore-banner`,`bx-button`,``,`variant`,`tonal`],[`type`,`button`,`id`,`restore-banner`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`direction`,`horizontal`,`align`,`center`,3,`wrap`],[`label`,`Clickable`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Disable selectable card`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Read-only selectable card`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Highlight token`,`subscriptSizing`,`dynamic`,3,`selectionChange`,`options`,`clearable`,`value`],[`minColumnWidth`,`14rem`],[`title`,`Selectable workspace`,`ariaLabel`,`Select workspace`,3,`selectedChange`,`activated`,`clickable`,`disabled`,`readOnly`,`highlightColor`,`selected`],[`type`,`button`,`bx-card`,``,`title`,`Open reports`,`ariaLabel`,`Open reports`,3,`activated`,`highlightColor`],[`title`,`Unavailable workspace`,`ariaLabel`,`Unavailable workspace`,3,`clickable`,`disabled`,`selected`],[`title`,`Fixed workspace`,`ariaLabel`,`Fixed workspace`,3,`clickable`,`readOnly`,`selected`,`highlightColor`],[`title`,`Project details`,`subtitle`,`Content container`],[`type`,`button`,`bx-button`,``,`bxCardFooter`,``,`variant`,`tonal`,3,`click`],[`direction`,`responsive`,`justify`,`between`,`align`,`center`],[`minColumnWidth`,`12rem`],[`title`,`Project details`,`subtitle`,`Outlined surface`],[`title`,`Team activity`,`variant`,`elevated`],[3,`gap`],[`label`,`Ready`,3,`selectable`],[`title`,`Notes`,`variant`,`filled`]],template:function(t,e){if(t&1&&(j(0,`bx-stack`)(1,`p`),Te(2,`Use Appearance to try themes, materials and reduced motion.`),U(),oe(3,li,11,0)(4,ci,8,4)(5,mi,5,1)(6,ui,12,21)(7,bi,10,9)(8,hi,17,7)(9,xi,11,5)(10,Ci,7,3)(11,wi,25,22)(12,Ei,21,2,`bx-container`,5),j(13,`output`,6),Te(14),U()()),t&2){let o;D(3),ie((o=e.example())===`divider`?3:o===`popover`?4:o===`skeleton`?5:o===`autocomplete`?6:o===`chip`?7:o===`accordion`?8:o===`collapsible`?9:o===`alert`?10:o===`card`?11:12),D(11),je$1(e.status())}},dependencies:[pte,ste,r2,po$1,Z$1,Ci$1,Yi$1,eo$1,nM,iM,sM,cM,Hc,Jf,uM,dM,_M,kM,DM,pM,tM],styles:[`
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
}`]})};var Vn=[`mod`,`shift`,`k`];var zn=[`mod`,`k`];var Wn=[`mod`,`shift`,`v`];var Rn={mac:[`command`,`shift`,`d`],windows:[`ctrl`,`shift`,`d`],linux:[`alt`,`shift`,`d`],ios:[`command`,`shift`,`d`],android:[`ctrl`,`shift`,`d`],default:[`mod`,`alt`,`d`]};var Ln=[`mac`,`windows`,`linux`,`ios`,`android`,`default`];var ki=()=>[`command`,`ctrl`,`option`,`shift`];function Ti(a,r){if(a&1){let t=hr();j(0,`bx-menu`,8)(1,`bx-menu-item`,9),ve$1(`action`,function(){bn(t);let o=F$1();return vn(o.activate(`View opened`))}),U(),j(2,`bx-menu-item`,10),ve$1(`action`,function(){bn(t);let o=F$1();return vn(o.activate(`Project duplicated`))}),U(),j(3,`bx-menu-item`,11),ve$1(`action`,function(){bn(t);let o=F$1();return vn(o.activate(`Delete requested`))}),U()()}if(a&2){let t=F$1();D(),ae(`shortcut`,t.viewShortcut)(`disabled`,t.viewDisabled.value),D(),ae(`shortcut`,t.duplicateShortcut),D(),ae(`danger`,!0)}}function Mi(a,r){if(a&1&&(j(0,`section`,7)(1,`h4`),Te(2),U(),j(3,`p`),Te(4,` Portable: `),j(5,`kbd`),Te(6),U()(),j(7,`p`),Te(8,` OS override: `),j(9,`kbd`),Te(10),U()(),j(11,`p`),Te(12,` Modifiers: `),j(13,`kbd`),Te(14),U()()()),a&2){let t=r.$implicit,e=F$1();D(2),je$1(t==="default"?`Unknown / server`:t),D(4),je$1(e.bxShortcutService.resolve(e.openShortcut,t)?.join(` + `)),D(4),je$1(e.bxShortcutService.resolve(e.duplicateShortcut,t)?.join(` + `)),D(4),je$1(e.bxShortcutService.resolve(A1(4,ki),t)?.join(` + `))}}var qe=class a{bxShortcutService=p(Bf);menu=er(SM);openShortcut=Vn;sequencePrefix=zn;viewShortcut=Wn;duplicateShortcut=Rn;platforms=Ln;viewDisabled=new hk(!1,{nonNullable:!0});typing=new hk(``,{nonNullable:!0});waitingForView=_(!1);status=_(`Ready. Open the menu with its button or keyboard shortcut.`);sequenceTimer;actionCount=0;constructor(){p(Z$2).onDestroy(()=>this.resetSequence())}onKeydown(r){if(this.bxShortcutService.matches(r,this.openShortcut)){r.preventDefault(),this.resetSequence(),this.menu()?.open(!0),this.status.set(`Menu opened by shortcut. Use arrow keys, Enter or Escape.`);return}if(this.bxShortcutService.matches(r,this.sequencePrefix)){r.preventDefault(),this.resetSequence(),this.waitingForView.set(!0),this.sequenceTimer=setTimeout(()=>this.resetSequence(),2e3);return}if(this.waitingForView()){if([`Meta`,`Control`,`Alt`,`Shift`].includes(r.key)||r.repeat)return;let t=this.bxShortcutService.matches(r,`v`);if(this.resetSequence(),t){r.preventDefault(),this.menu()?.open(!0),this.status.set(`Menu opened by sequence.`);return}}!this.viewDisabled.value&&this.bxShortcutService.matches(r,this.viewShortcut)?(r.preventDefault(),this.activate(`View opened`)):this.bxShortcutService.matches(r,this.duplicateShortcut)&&(r.preventDefault(),this.activate(`Project duplicated`))}activate(r){r===`View opened`&&this.viewDisabled.value||(this.resetSequence(),this.status.set(`${r} \xB7 action ${++this.actionCount}`),this.menu()?.close(!0))}resetSequence(){clearTimeout(this.sequenceTimer),this.sequenceTimer=void 0,this.waitingForView.set(!1)}static ɵfac=function(t){return new(t||a)};static ɵcmp=V$1({type:a,selectors:[[`app-menu-shortcut-examples`]],viewQuery:function(t,e){t&1&&Mn(e.menu,SM,5),t&2&&Mt()},hostBindings:function(t,e){t&1&&ve$1(`keydown`,function(c){return e.onKeydown(c)},bo$1)(`pointerdown`,function(){return e.resetSequence()},bo$1)(`blur`,function(){return e.resetSequence()},pN)},decls:38,vars:11,consts:[[`actions`,``],[1,`shortcut-demo`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`menuPlacement`,`bottom`,`menuLabel`,`Project actions`,3,`bxMenuTrigger`,`menuHover`],[`role`,`status`],[`label`,`Disable Open view (click and shortcut)`,3,`formControl`],[`label`,`Type here to try the editable-control guard`,3,`formControl`],[1,`platform-previews`],[1,`platform-preview`],[1,`shortcut-menu`],[`label`,`Open view`,`icon`,`external-link`,3,`action`,`shortcut`,`disabled`],[`label`,`Duplicate project`,`icon`,`copy`,3,`action`,`shortcut`],[`label`,`Delete project`,`icon`,`trash-2`,3,`action`,`danger`]],template:function(t,e){if(t&1&&(j(0,`div`,1)(1,`p`)(2,`code`),Te(3,`shortcut`),U(),Te(4,` displays a hint. This example also handles keyboard events using `),j(5,`code`),Te(6,`BxShortcutService.matches()`),U(),Te(7,`.`),U(),j(8,`p`),Te(9,`Menu rows use local hover and focus feedback without casting light onto the surrounding page.`),U(),j(10,`p`),Te(11,`On this device, `),j(12,`code`),Te(13,`mod`),U(),Te(14),U(),j(15,`div`)(16,`button`,2),Te(17),U()(),j(18,`p`),Te(19),U(),j(20,`p`,3),Te(21),U(),aS(22,Ti,4,4,`ng-template`,null,0,xb),j(24,`bx-checkbox`,4),OR(),U(),j(25,`bx-input-field`,5),OR(),U(),j(26,`p`),Te(27,` The Open view shortcut works while this demo is mounted, including when the menu is closed. Shortcuts ignore typing fields, held-key repeats and composition. `),U(),j(28,`h3`),Te(29,`Defaults across platforms`),U(),j(30,`p`),Te(31,` These previews use the same service and definitions. `),j(32,`code`),Te(33,`mod`),U(),Te(34,` avoids repeating OS mappings; explicit overrides are available when bindings differ. `),U(),j(35,`div`,6),jn$1(36,Mi,15,5,`section`,7,Wa$1),U()()),t&2){let o=Ya$1(23);D(14),SS(` uses `,e.bxShortcutService.resolve(`mod`)?.join(``),` (detected platform: `,e.bxShortcutService.platform(),`).`),D(2),ae(`bxMenuTrigger`,o)(`menuHover`,!1),H(`aria-keyshortcuts`,e.bxShortcutService.toAriaKeyshortcuts(e.openShortcut)),D(),gr(` Project actions · `,e.bxShortcutService.resolve(e.openShortcut)?.join(` + `),` `),D(2),SS(` Press `,e.bxShortcutService.resolve(e.openShortcut)?.join(` + `),` together to open the menu. Or press `,e.bxShortcutService.resolve(e.sequencePrefix)?.join(` + `),`, release the keys, then press V within two seconds. Escape, another key, a pointer press or leaving the window cancels the sequence. `),D(2),je$1(e.waitingForView()?`Waiting for V…`:e.status()),D(3),ae(`formControl`,e.viewDisabled),LR(),D(),ae(`formControl`,e.typing),LR(),D(11),zn$1(e.platforms)}},dependencies:[Z$1,Ci$1,Yi$1,pte,ste,r2,Wk,Gk,SM],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
}
.shortcut-demo[_ngcontent-%COMP%] {
  display: grid;
  gap: 0.75rem;
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
  inline-size: min(22rem, 100dvw - 2rem);
  max-block-size: 70dvh;
  overflow: auto;
  --%NS%bx-menu-min-width: 0;
}
.platform-previews[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.75rem;
}
@media (min-width: 768px) {
  .platform-previews[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.platform-preview[_ngcontent-%COMP%] {
  display: grid;
  gap: 0.5rem;
  min-inline-size: 0;
  padding: 0.75rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
}`]})};function Pi(a,r){if(a&1){let t=hr();j(0,`bx-page-footer`)(1,`bx-stack`,11)(2,`button`,12),ve$1(`click`,function(){bn(t);let o=F$1();return vn(o.result.set(`Footer action completed.`))}),Te(3,`Try footer action`),U(),j(4,`span`,13),Te(5),U()()()}if(a&2){let t=F$1();D(),ae(`gap`,3),D(4),je$1(t.result())}}var He=class a{title=_(`Workspace overview`);description=_(`A shared heading and consistent gutters for every page.`);breadcrumbsAfterControl=new hk(1,{nonNullable:!0});breadcrumbsAfter=cY(this.breadcrumbsAfterControl.valueChanges,{initialValue:this.breadcrumbsAfterControl.value});nesting=_(1);automatic=_(!1);showFooter=_(!0);result=_(`No action yet.`);nestingOptions=[{label:`Root page`,value:0},{label:`One nesting`,value:1},{label:`Two nestings`,value:2}];previewBreadcrumbs=v(()=>[{label:`Components`,route:`/components`},...this.nesting()>=1?[{label:`Layout`,route:`/components/layout`}]:[],...this.nesting()>=2?[{label:`Page container`,route:`/components/layout/page-container`}]:[]]);constructor(){this.breadcrumbsAfterControl.valueChanges.pipe(zs(u0),op()).subscribe(()=>{let r=this.breadcrumbsAfterControl.value,t=Math.max(0,Math.trunc(Number(r))||0);t!==r&&this.breadcrumbsAfterControl.setValue(t)})}static ɵfac=function(t){return new(t||a)};static ɵcmp=V$1({type:a,selectors:[[`app-page-examples`]],decls:15,vars:20,consts:[[3,`gap`],[`direction`,`responsive`,3,`gap`],[`label`,`Preview title`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Description`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Preview nesting`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Show breadcrumbs after nesting`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`min`,`formControl`],[`label`,`Use current route breadcrumbs`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Show footer`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`size`,`full`,1,`page-preview`,3,`breadcrumbs`,`breadcrumbsAfter`],[`sectionTitle`,`Primitives`,3,`pageTitle`,`pageDescription`,`autoResolveTitlesFromNavigation`,`headingLevel`],[`title`,`Page content`,`message`,`This section grows naturally with its content. The page keeps one scroll surface and the same responsive gutters.`],[`direction`,`responsive`,`align`,`center`,3,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`role`,`status`]],template:function(t,e){t&1&&(j(0,`bx-stack`,0)(1,`bx-stack`,1)(2,`bx-input-field`,2),OR(),MS(`ngModelChange`,function(c){return k1(e.title,c)||(e.title=c),c}),U(),j(3,`bx-input-field`,3),OR(),MS(`ngModelChange`,function(c){return k1(e.description,c)||(e.description=c),c}),U()(),j(4,`bx-stack`,1)(5,`bx-select`,4),OR(),MS(`ngModelChange`,function(c){return k1(e.nesting,c)||(e.nesting=c),c}),U(),j(6,`bx-input-field`,5),OR(),U()(),j(7,`bx-stack`,1)(8,`bx-slide-toggle`,6),OR(),MS(`ngModelChange`,function(c){return k1(e.automatic,c)||(e.automatic=c),c}),U(),j(9,`bx-slide-toggle`,7),OR(),MS(`ngModelChange`,function(c){return k1(e.showFooter,c)||(e.showFooter=c),c}),U()(),j(10,`bx-page-container`,8),Ve$1(11,`bx-page-header`,9),j(12,`bx-page-content`),Ve$1(13,`bx-alert`,10),U(),oe(14,Pi,6,2,`bx-page-footer`),U()()),t&2&&(ae(`gap`,5),D(),ae(`gap`,4),D(),kS(`ngModel`,e.title),LR(),D(),kS(`ngModel`,e.description),LR(),D(),ae(`gap`,4),D(),ae(`clearable`,!1)(`options`,e.nestingOptions),kS(`ngModel`,e.nesting),LR(),D(),ae(`min`,0)(`formControl`,e.breadcrumbsAfterControl),LR(),D(),ae(`gap`,4),D(),kS(`ngModel`,e.automatic),LR(),D(),kS(`ngModel`,e.showFooter),LR(),D(),ae(`breadcrumbs`,e.automatic()?void 0:e.previewBreadcrumbs())(`breadcrumbsAfter`,e.breadcrumbsAfter()),D(),ae(`pageTitle`,e.title())(`pageDescription`,e.description())(`autoResolveTitlesFromNavigation`,!1)(`headingLevel`,2),D(3),ie(e.showFooter()?14:-1))},dependencies:[dte,ste,JF,pte,r2,iM,Z$1,Yi$1,eo$1,to$1,fM,MM,IM,Ns,pM],styles:[`
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
  border-radius: 0.75rem;
  background: var(--%NS%bx-bg-canvas);
}`]})};function Di(a,r){if(a&1){let t=hr();j(0,`bx-input-field`,13),OR(),ve$1(`ngModelChange`,function(o){bn(t);let c=F$1();return vn(c.minimum.set(o))}),U(),j(1,`bx-input-field`,14),OR(),ve$1(`ngModelChange`,function(o){bn(t);let c=F$1();return vn(c.maximum.set(o))}),U()}if(a&2){let t=F$1();ae(`min`,0)(`ngModel`,t.minimum()),LR(),D(),ae(`min`,0)(`ngModel`,t.maximum()),LR()}}var Ue=class a{edges=[{label:`Right edge (width)`,value:`right`},{label:`Left edge (width)`,value:`left`},{label:`Bottom edge (height)`,value:`bottom`},{label:`Top edge (height)`,value:`top`}];edge=_(`right`);size=_(180);minimum=_(60);maximum=_(280);disableShrink=_(!0);customBounds=_(!1);status=_(`Drag the inner edge, or focus it and use the arrow keys.`);horizontal=v(()=>this.edge()===`left`||this.edge()===`right`);changeEdge(r){this.edge.set(r),this.size.set(180)}record(r,t){this.status.set(`${r.source} resize ${t===`start`?`started`:r.canceled?`canceled`:`completed`} at ${Math.round(r.value)} px.`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=V$1({type:a,selectors:[[`app-resize-handle-examples`]],decls:22,vars:40,consts:[[`container`,``],[`target`,``],[`handle`,`bxResizeHandle`],[1,`resize-demo-controls`],[`label`,`Resize edge`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`resize-demo-actions`],[`label`,`Prevent shrinking below initial size`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Use explicit pixel limits`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`role`,`status`],[1,`resize-demo-container`],[`aria-label`,`Resizable example surface`,1,`resize-demo-target`],[`bxResizeHandle`,``,1,`resize-demo-handle`,3,`resizeValueChange`,`resizeStart`,`resizeEnd`,`resizeEdge`,`resizeTarget`,`resizeContainer`,`resizeInitialSize`,`resizeMinSize`,`resizeMaxSize`,`resizeDisableShrink`,`resizeLabel`,`resizeValue`],[`type`,`number`,`label`,`Minimum size (px)`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`min`,`ngModel`],[`type`,`number`,`label`,`Maximum size (px)`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`min`,`ngModel`]],template:function(t,e){if(t&1){let o=hr();j(0,`div`,3)(1,`bx-select`,4),OR(),ve$1(`ngModelChange`,function(d){return e.changeEdge(d)}),U(),oe(2,Di,2,4),U(),j(3,`div`,5)(4,`bx-slide-toggle`,6),OR(),ve$1(`ngModelChange`,function(d){return e.disableShrink.set(d)}),U(),j(5,`bx-slide-toggle`,7),OR(),ve$1(`ngModelChange`,function(d){return e.customBounds.set(d)}),U(),j(6,`button`,8),ve$1(`click`,function(){return e.size.set(180)}),Te(7,`Reset to 180 px`),U()(),j(8,`p`,9),Te(9),U(),j(10,`p`),Te(11),U(),j(12,`div`,10,0)(14,`section`,11,1)(16,`p`),Te(17),U(),j(18,`div`,12,2),MS(`resizeValueChange`,function(d){return bn(o),k1(e.size,d)||(e.size=d),vn(d)}),ve$1(`resizeStart`,function(d){return e.record(d,`start`)})(`resizeEnd`,function(d){return e.record(d,`end`)}),U()()(),j(20,`p`),Te(21,`Arrow keys move the edge by 10 px; Shift moves by 50 px. Home and End use the bounds. Escape cancels an active gesture.`),U()}if(t&2){let o=Ya$1(13),c=Ya$1(15),d=Ya$1(19);D(),ae(`clearable`,!1)(`options`,e.edges)(`ngModel`,e.edge()),LR(),D(),ie(e.customBounds()?2:-1),D(2),ae(`ngModel`,e.disableShrink()),LR(),D(),ae(`ngModel`,e.customBounds()),LR(),D(4),je$1(e.status()),D(2),_S(``,e.size(),` px · effective minimum `,d.minSize(),` px · effective maximum `,d.maxSize(),` px`),D(3),ye(`width`,e.horizontal()?e.size()+`px`:`100%`)(`height`,e.horizontal()?`100%`:e.size()+`px`),he$1(`is-horizontal`,e.horizontal())(`is-vertical`,!e.horizontal())(`edge-left`,e.edge()===`left`)(`edge-top`,e.edge()===`top`),D(3),gr(`Resize from the `,e.edge(),` edge.`),D(),he$1(`handle-left`,e.edge()===`left`)(`handle-right`,e.edge()===`right`)(`handle-top`,e.edge()===`top`)(`handle-bottom`,e.edge()===`bottom`),ae(`resizeEdge`,e.edge())(`resizeTarget`,c)(`resizeContainer`,o)(`resizeInitialSize`,180)(`resizeMinSize`,e.customBounds()?e.minimum():void 0)(`resizeMaxSize`,e.customBounds()?e.maximum():void 0)(`resizeDisableShrink`,e.disableShrink())(`resizeLabel`,e.horizontal()?`Resize example width`:`Resize example height`),kS(`resizeValue`,e.size)}},dependencies:[dte,ste,JF,Z$1,Yi$1,eo$1,to$1,Rs],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.resize-demo-controls[_ngcontent-%COMP%], 
.resize-demo-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}
.resize-demo-actions[_ngcontent-%COMP%] {
  margin-block-start: 1rem;
}
.resize-demo-container[_ngcontent-%COMP%] {
  position: relative;
  block-size: 24rem;
  min-inline-size: 0;
  overflow: hidden;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
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
  border-radius: 0.5rem;
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
  padding: 0.75rem;
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
  border-radius: 9999px;
}
.resize-demo-handle[_ngcontent-%COMP%]::before {
  background: var(--%NS%bx-resize-rail-color, var(--%NS%bx-resize-grip-background, var(--%NS%bx-bg-element)));
}
.resize-demo-handle[_ngcontent-%COMP%]::after {
  left: 50%;
  top: 50%;
  inline-size: 0.5rem;
  block-size: 1.5rem;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  border: 1px solid var(--%NS%bx-resize-grip-border, var(--%NS%bx-border-default));
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
  inset-block: 0.5rem;
  left: 50%;
  inline-size: 0.25rem;
  transform: translateX(-50%);
}
.resize-demo-handle[data-bx-resize-axis=vertical][_ngcontent-%COMP%]::before {
  inset-inline: 0.5rem;
  top: 50%;
  block-size: 0.25rem;
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
  outline-offset: 0.25rem;
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
  inline-size: 1.5rem;
}
.resize-demo-handle.handle-top[_ngcontent-%COMP%], 
.resize-demo-handle.handle-bottom[_ngcontent-%COMP%] {
  inset-inline: 0;
  block-size: 1.5rem;
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
}`]})};var we=class a{query=_(``);completedQuery=_(``);results=_([]);loading=_(!1);error=_(void 0);requests=_([]);controller;constructor(){p(Z$2).onDestroy(()=>this.controller?.abort()),this.search(``)}async search(r,t=!1){this.controller?.abort();let e$1=new AbortController;this.controller=e$1,this.query.set(r),this.loading.set(!0),this.error.set(void 0);try{if(await Z(250,e$1.signal),this.record(`Request: ${r||`(all components)`}`),await Z(800,e$1.signal),e$1.signal.aborted)return;if(t)throw new Error(`Simulated request failure`);let o=r.trim().toLocaleLowerCase(),c=e.map(d=>d.title).filter(d=>d.toLocaleLowerCase().includes(o));this.results.set(c),this.completedQuery.set(r),this.record(`Success: ${c.length} results`)}catch{if(e$1.signal.aborted)return;this.error.set({key:`searchError`}),this.record(`Failed: previous results retained; retry the same query`)}finally{this.controller===e$1&&this.loading.set(!1)}}record(r){this.requests.update(t=>[r,...t].slice(0,8))}static ɵfac=function(t){return new(t||a)};static ɵprov=K({token:a,factory:a.ɵfac})};var Ni=()=>({key:`searchLabel`});var Ii=()=>({key:`searchPlaceholder`});var An=()=>({key:`searchLoading`});var Oi=()=>({key:`searchClear`});var Vi=()=>({key:`retry`});function zi(a,r){if(a&1&&(j(0,`li`),Te(1),U()),a&2){let t=r.$implicit;D(),je$1(t)}}function Wi(a,r){if(a&1&&(j(0,`li`,11),Te(1),U()),a&2){let t=F$1(2);D(),je$1(t.emptyText())}}function Ri(a,r){if(a&1&&oe(0,Wi,2,1,`li`,11),a&2){let t=F$1();ie(!t.mockSearchStore.loading()&&!t.mockSearchStore.error()?0:-1)}}function Li(a,r){if(a&1&&(j(0,`li`),Te(1),U()),a&2){let t=r.$implicit;D(),je$1(t)}}var Ge=class a{demoI18nService=p(N);mockSearchStore=p(we);showLoadingText=_(!1);showLabel=_(!0);compact=_(!1);readOnly=_(!1);disabled=_(!1);emptyText=v(()=>(this.demoI18nService.version(),this.demoI18nService.translate(`searchEmpty`)));retryConfig={variant:`tonal`,color:`accent`};changeLoadingText(r){this.showLoadingText.set(r),r&&!this.mockSearchStore.loading()&&!this.readOnly()&&!this.disabled()&&this.mockSearchStore.search(this.mockSearchStore.query())}static ɵfac=function(t){return new(t||a)};static ɵcmp=V$1({type:a,selectors:[[`app-search-examples`]],features:[At([we,N,{provide:_e,useExisting:N}])],decls:22,vars:29,consts:[[1,`search-demo`],[`subscriptSizing`,`dynamic`,3,`search`,`retry`,`label`,`placeholder`,`compact`,`value`,`loading`,`loadError`,`loadingLabel`,`loadingAriaLabel`,`clearLabel`,`retryLabel`,`retryConfig`,`readOnly`,`disabled`],[1,`search-actions`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`label`,`Show label`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Compact`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Show loading text`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Readonly`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Disabled`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`aria-label`,`Search results`,1,`search-results`],[`aria-label`,`Request events`,1,`search-events`],[`role`,`status`]],template:function(t,e){t&1&&(j(0,`div`,0)(1,`bx-search-input`,1),ve$1(`search`,function(c){return e.mockSearchStore.search(c)})(`retry`,function(c){return e.mockSearchStore.search(c)}),U(),j(2,`div`,2)(3,`button`,3),ve$1(`click`,function(){return e.mockSearchStore.search(e.mockSearchStore.query(),!0)}),Te(4,` Fail this search `),U(),j(5,`bx-checkbox`,4),MS(`checkedChange`,function(c){return k1(e.showLabel,c)||(e.showLabel=c),c}),U(),j(6,`bx-checkbox`,5),MS(`checkedChange`,function(c){return k1(e.compact,c)||(e.compact=c),c}),U(),j(7,`bx-checkbox`,6),ve$1(`checkedChange`,function(c){return e.changeLoadingText(c)}),U(),j(8,`bx-checkbox`,7),MS(`checkedChange`,function(c){return k1(e.readOnly,c)||(e.readOnly=c),c}),U(),j(9,`bx-checkbox`,8),MS(`checkedChange`,function(c){return k1(e.disabled,c)||(e.disabled=c),c}),U()(),j(10,`p`),Te(11,` Requests debounce for 250ms and take 800ms. Type quickly to cancel older requests, or enter an unmatched term for empty results. Failure keeps the last successful results. Use Retry request to try the same query again. Enabling Show loading text previews another request. When a label is displayed, compact mode is automatically enabled regardless of the Compact setting. `),U(),j(12,`section`,9)(13,`p`),Te(14),U(),j(15,`ul`),jn$1(16,zi,2,1,`li`,null,Wa$1,!1,Ri,1,1),U()(),j(19,`ul`,10),jn$1(20,Li,2,1,`li`,null,Bl),U()()),t&2&&(D(),ae(`label`,e.showLabel()?A1(23,Ni):void 0)(`placeholder`,A1(24,Ii))(`compact`,e.compact())(`value`,e.mockSearchStore.query())(`loading`,e.mockSearchStore.loading())(`loadError`,e.mockSearchStore.error())(`loadingLabel`,e.showLoadingText()?A1(25,An):void 0)(`loadingAriaLabel`,A1(26,An))(`clearLabel`,A1(27,Oi))(`retryLabel`,A1(28,Vi))(`retryConfig`,e.retryConfig)(`readOnly`,e.readOnly())(`disabled`,e.disabled()),D(2),ae(`disabled`,e.mockSearchStore.loading()||e.disabled()||e.readOnly()),D(2),kS(`checked`,e.showLabel),D(),kS(`checked`,e.compact),D(),ae(`checked`,e.showLoadingText()),D(),kS(`checked`,e.readOnly),D(),kS(`checked`,e.disabled),D(3),H(`aria-busy`,e.mockSearchStore.loading()),D(2),SS(`Last completed search: `,e.mockSearchStore.completedQuery()||`all components`,` · `,e.mockSearchStore.results().length,` results`),D(2),zn$1(e.mockSearchStore.results()),D(4),zn$1(e.mockSearchStore.requests()))},dependencies:[Z$1,Ci$1,Ae],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
}
.search-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-inline-size: 0;
  overflow-wrap: anywhere;
}
.search-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}
.search-results[_ngcontent-%COMP%] {
  padding: 0.75rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
}
.search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  columns: 2;
  padding-inline-start: 1rem;
}
.search-events[_ngcontent-%COMP%] {
  padding-inline-start: 1rem;
  font-size: 0.75rem;
  color: var(--%NS%bx-text-secondary);
}
@media (max-width: 640px) {
  .search-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
    columns: 1;
  }
}`]})};var it=[{id:`workspace`,title:`Workspace`,icon:{name:`building-2`},collapsible:!0,items:[{id:`overview`,route:`/components/side-nav/overview`,label:`Overview`,icon:{name:`house`},visible:!0},{id:`projects`,route:`/components/side-nav/projects`,label:`Projects`,icon:{name:`folder`},visible:!0,data:{tags:[{text:`12`,config:{color:`info`}}]},children:[{id:`design`,route:`/components/side-nav/design`,label:`Design system`,icon:{name:`palette`},visible:!0,children:[{id:`library`,route:`/components/side-nav/library`,label:`Component library`,icon:{name:`blocks`},visible:!0,children:[...Array.from({length:14},(a,r)=>({id:`pattern-${r}`,route:`/components/side-nav/pattern-${r}`,label:`Pattern ${r+1}`,icon:{name:`component`},visible:!0})),{id:`tokens`,route:`/components/side-nav/tokens`,label:`Design tokens`,icon:{name:`swatch-book`},visible:!0,data:{label:{key:`nav.tokens`},keywords:[{key:`nav.palette`},{key:`nav.variables`}],endIcon:{name:`sparkles`},tags:[{text:{key:`nav.new`},config:{color:`success`}}]}},{id:`accessibility`,route:`/components/side-nav/accessibility`,label:`Accessibility`,icon:{name:`accessibility`},visible:!0}]},{id:`research`,route:`/components/side-nav/research`,label:`Research`,icon:{name:`flask-conical`},visible:!0}]},{id:`releases`,route:`/components/side-nav/releases`,label:`Releases`,icon:{name:`rocket`},visible:!0}]},{id:`reports`,route:`/components/side-nav/reports`,label:`Reports`,icon:{name:`chart-column`},visible:!0},{id:`disabled`,route:`/components/side-nav/disabled`,label:`Restricted area`,icon:{name:`lock`},visible:!0,data:{disabled:!0}}]},{id:`settings`,title:`Settings`,icon:{name:`settings`},collapsible:!0,items:[{id:`members`,route:`/components/side-nav/members`,label:`Team members`,icon:{name:`users`},visible:!0},{id:`billing`,route:`/components/side-nav/billing`,label:`Billing`,icon:{name:`credit-card`},visible:!0}]}];var at={en:{"top.name":`Demo top navigation`,"top.compact":`Force compact menu`,"top.width":`Preview width (px)`,"top.icons":`Leading icons`,"top.sticky":`Sticky bar`,"top.custom":`Custom item template`,"top.actions":`Extra action controls`,"top.title":`Workspace overview`,"top.description":`Labels navigate directly. Separate chevrons browse children in one panel. Search shows flat results with their parent paths. Select a result and clear search to reveal it in its submenu. Click a path ancestor to return to its panel. Shrink this preview or add actions to exercise the compact menu.`,"top.modeCompact":`Compact navigation: all pages remain reachable in the menu.`,"top.modeExpanded":`Horizontal navigation: use Left/Right, Home/End, or the separate disclosure controls.`,"top.settings":`Settings`,"top.actionDone":`Settings action selected.`,"top.help":`Help`,"top.helpDone":`Help action selected.`,"top.searchPlaceholder":`Search top navigation…`,"nav.workspace":`Workspace`,"nav.settings":`Settings`,"nav.overview":`Overview`,"nav.projects":`Projects`,"nav.design":`Design system`,"nav.library":`Component library`,"nav.tokens":`Design tokens`,"nav.accessibility":`Accessibility`,"nav.research":`Research`,"nav.releases":`Releases`,"nav.reports":`Reports`,"nav.disabled":`Restricted area`,"nav.members":`Team members`,"nav.billing":`Billing`,"nav.new":`New`,"nav.search":`Search demo navigation`,"nav.placeholder":`Try “dsgn tkns” or “palette”`,"nav.name":`Demo workspace`,"nav.clear":`Clear search`,"nav.empty":`No matching pages.`,"nav.open":`Open navigation`,"nav.close":`Close navigation`,"nav.collapse":`Collapse navigation`,"nav.expand":`Expand navigation`,"nav.submenu":`Open submenu`,"nav.result":`Search result`,"nav.back":`Back`,"nav.path":`Navigation path`,"demo.inlineMode":`Submenus replace the list inside this navigation. Back restores the previous level.`,"demo.right":`Right side`,"demo.rail":`Icon rail`,"demo.mobile":`Force mobile drawer`,"demo.search":`Search`,"demo.rtl":`RTL`,"demo.custom":`Custom item template`,"demo.height":`Panel height (px)`,"demo.language":`Language`,"demo.instructions":`Select a label to visit its page, or its chevron to browse children. Search “dsgn tkns” or “palette” for flat results with parent paths. After selecting a result, clear search to reveal it in its submenu. Click an ancestor in the path to return to its panel.`,"demo.studio":`Studio`,"demo.admin":`Alex · Workspace admin`,"demo.title":`A calmer workspace`,"demo.description":`The header, footer, item presentation, side and panel size are configurable. The mobile drawer stays inside this preview.`,"demo.open":`Open demo drawer`,"demo.select":`Select a page to see its stable ID here.`,"demo.keyboard":`Use arrow keys and Home/End within a list. Enter or Space activates a disclosure. Back, Escape, or the opposite arrow returns one level; Escape at the root closes the mobile drawer.`,"demo.routes":`Configure real routes with withInAppNavigation`,"nav.palette":`palette`,"nav.variables":`color variables`,"nav.pattern-0":`Pattern 1`,"nav.pattern-1":`Pattern 2`,"nav.pattern-2":`Pattern 3`,"nav.pattern-3":`Pattern 4`,"nav.pattern-4":`Pattern 5`,"nav.pattern-5":`Pattern 6`,"nav.pattern-6":`Pattern 7`,"nav.pattern-7":`Pattern 8`,"nav.pattern-8":`Pattern 9`,"nav.pattern-9":`Pattern 10`,"nav.pattern-10":`Pattern 11`,"nav.pattern-11":`Pattern 12`,"nav.pattern-12":`Pattern 13`,"nav.pattern-13":`Pattern 14`},es:{"top.name":`Navegación superior de demostración`,"top.compact":`Forzar menú compacto`,"top.width":`Ancho de la vista previa (px)`,"top.icons":`Iconos iniciales`,"top.sticky":`Barra fija`,"top.custom":`Plantilla de elemento personalizada`,"top.actions":`Controles de acción adicionales`,"top.title":`Resumen del espacio de trabajo`,"top.description":`Las etiquetas abren las páginas. Las flechas muestran las subpáginas en un panel. La búsqueda muestra resultados con sus rutas superiores. Selecciona un resultado y borra la búsqueda para verlo en su submenú. Selecciona un antecesor de la ruta para volver a su panel. Reduce esta vista previa o añade acciones para probar el menú compacto.`,"top.modeCompact":`Navegación compacta: todas las páginas siguen disponibles en el menú.`,"top.modeExpanded":`Navegación horizontal: usa Izquierda/Derecha, Inicio/Fin o los controles de expansión.`,"top.settings":`Configuración`,"top.actionDone":`Acción de configuración seleccionada.`,"top.help":`Ayuda`,"top.helpDone":`Acción de ayuda seleccionada.`,"top.searchPlaceholder":`Buscar en la navegación superior…`,"nav.workspace":`Espacio de trabajo`,"nav.settings":`Configuración`,"nav.overview":`Resumen`,"nav.projects":`Proyectos`,"nav.design":`Sistema de diseño`,"nav.library":`Biblioteca de componentes`,"nav.tokens":`Tokens de diseño`,"nav.accessibility":`Accesibilidad`,"nav.research":`Investigación`,"nav.releases":`Versiones`,"nav.reports":`Informes`,"nav.disabled":`Área restringida`,"nav.members":`Miembros del equipo`,"nav.billing":`Facturación`,"nav.new":`Nuevo`,"nav.search":`Buscar en la navegación de demostración`,"nav.placeholder":`Prueba «tokens» o «paleta»`,"nav.name":`Espacio de trabajo de demostración`,"nav.clear":`Borrar búsqueda`,"nav.empty":`No hay páginas coincidentes.`,"nav.open":`Abrir navegación`,"nav.close":`Cerrar navegación`,"nav.collapse":`Contraer navegación`,"nav.expand":`Expandir navegación`,"nav.submenu":`Abrir submenú`,"nav.result":`Resultado de búsqueda`,"nav.back":`Atrás`,"nav.path":`Ruta de navegación`,"demo.inlineMode":`Los submenús reemplazan la lista de esta navegación. Atrás restaura el nivel anterior.`,"demo.right":`Lado derecho`,"demo.rail":`Barra de iconos`,"demo.mobile":`Forzar panel móvil`,"demo.search":`Búsqueda`,"demo.rtl":`De derecha a izquierda`,"demo.custom":`Plantilla de elemento personalizada`,"demo.height":`Altura del panel (px)`,"demo.language":`Idioma`,"demo.instructions":`Selecciona una etiqueta para visitar su página o su flecha para ver las subpáginas. Busca «tokens» o «paleta» para ver resultados con rutas superiores. Tras seleccionar un resultado, borra la búsqueda para verlo en su submenú. Selecciona un antecesor de la ruta para volver a su panel.`,"demo.studio":`Estudio`,"demo.admin":`Alex · Administrador del espacio de trabajo`,"demo.title":`Un espacio de trabajo más tranquilo`,"demo.description":`La cabecera, el pie, la presentación de los elementos, el lado y el tamaño del panel son configurables. El panel móvil permanece dentro de esta vista previa.`,"demo.open":`Abrir panel de demostración`,"demo.select":`Selecciona una página para ver aquí su identificador estable.`,"demo.keyboard":`Usa las flechas e Inicio/Fin en una lista. Intro o Espacio activa la expansión. Atrás, Escape o la flecha opuesta retrocede un nivel; Escape en la raíz cierra el panel móvil.`,"demo.routes":`Configura rutas reales con withInAppNavigation`,"nav.palette":`paleta`,"nav.variables":`variables de color`,"nav.pattern-0":`Patrón 1`,"nav.pattern-1":`Patrón 2`,"nav.pattern-2":`Patrón 3`,"nav.pattern-3":`Patrón 4`,"nav.pattern-4":`Patrón 5`,"nav.pattern-5":`Patrón 6`,"nav.pattern-6":`Patrón 7`,"nav.pattern-7":`Patrón 8`,"nav.pattern-8":`Patrón 9`,"nav.pattern-9":`Patrón 10`,"nav.pattern-10":`Patrón 11`,"nav.pattern-11":`Patrón 12`,"nav.pattern-12":`Patrón 13`,"nav.pattern-13":`Patrón 14`},fr:{"top.name":`Navigation supérieure de démonstration`,"top.compact":`Forcer le menu compact`,"top.width":`Largeur de l’aperçu (px)`,"top.icons":`Icônes de début`,"top.sticky":`Barre fixe`,"top.custom":`Modèle d’élément personnalisé`,"top.actions":`Commandes supplémentaires`,"top.title":`Vue d’ensemble de l’espace de travail`,"top.description":`Les libellés ouvrent les pages. Les flèches affichent les sous-pages dans un panneau. La recherche affiche des résultats avec leurs chemins parents. Sélectionnez un résultat et effacez la recherche pour le voir dans son sous-menu. Sélectionnez un ancêtre du chemin pour revenir à son panneau. Réduisez cet aperçu ou ajoutez des actions pour essayer le menu compact.`,"top.modeCompact":`Navigation compacte : toutes les pages restent accessibles dans le menu.`,"top.modeExpanded":`Navigation horizontale : utilisez Gauche/Droite, Début/Fin ou les commandes de déploiement.`,"top.settings":`Paramètres`,"top.actionDone":`Action des paramètres sélectionnée.`,"top.help":`Aide`,"top.helpDone":`Action d’aide sélectionnée.`,"top.searchPlaceholder":`Rechercher dans la navigation supérieure…`,"nav.workspace":`Espace de travail`,"nav.settings":`Paramètres`,"nav.overview":`Vue d’ensemble`,"nav.projects":`Projets`,"nav.design":`Système de design`,"nav.library":`Bibliothèque de composants`,"nav.tokens":`Tokens de design`,"nav.accessibility":`Accessibilité`,"nav.research":`Recherche`,"nav.releases":`Versions`,"nav.reports":`Rapports`,"nav.disabled":`Zone restreinte`,"nav.members":`Membres de l’équipe`,"nav.billing":`Facturation`,"nav.new":`Nouveau`,"nav.search":`Rechercher dans la navigation de démonstration`,"nav.placeholder":`Essayez « tokens » ou « palette »`,"nav.name":`Espace de travail de démonstration`,"nav.clear":`Effacer la recherche`,"nav.empty":`Aucune page correspondante.`,"nav.open":`Ouvrir la navigation`,"nav.close":`Fermer la navigation`,"nav.collapse":`Réduire la navigation`,"nav.expand":`Déployer la navigation`,"nav.submenu":`Ouvrir le sous-menu`,"nav.result":`Résultat de recherche`,"nav.back":`Retour`,"nav.path":`Chemin de navigation`,"demo.inlineMode":`Les sous-menus remplacent la liste de cette navigation. Retour restaure le niveau précédent.`,"demo.right":`Côté droit`,"demo.rail":`Barre d’icônes`,"demo.mobile":`Forcer le panneau mobile`,"demo.search":`Recherche`,"demo.rtl":`De droite à gauche`,"demo.custom":`Modèle d’élément personnalisé`,"demo.height":`Hauteur du panneau (px)`,"demo.language":`Langue`,"demo.instructions":`Sélectionnez un libellé pour visiter sa page ou sa flèche pour afficher les sous-pages. Recherchez « tokens » ou « palette » pour voir des résultats avec leurs chemins parents. Après avoir sélectionné un résultat, effacez la recherche pour le voir dans son sous-menu. Sélectionnez un ancêtre du chemin pour revenir à son panneau.`,"demo.studio":`Studio`,"demo.admin":`Alex · Administrateur de l’espace de travail`,"demo.title":`Un espace de travail plus calme`,"demo.description":`L’en-tête, le pied de page, la présentation des éléments, le côté et la taille du panneau sont configurables. Le panneau mobile reste dans cet aperçu.`,"demo.open":`Ouvrir le panneau de démonstration`,"demo.select":`Sélectionnez une page pour voir ici son identifiant stable.`,"demo.keyboard":`Utilisez les flèches et Début/Fin dans une liste. Entrée ou Espace active le déploiement. Retour, Échap ou la flèche opposée remonte d’un niveau ; Échap à la racine ferme le panneau mobile.`,"demo.routes":`Configurer des routes réelles avec withInAppNavigation`,"nav.palette":`palette`,"nav.variables":`variables de couleur`,"nav.pattern-0":`Motif 1`,"nav.pattern-1":`Motif 2`,"nav.pattern-2":`Motif 3`,"nav.pattern-3":`Motif 4`,"nav.pattern-4":`Motif 5`,"nav.pattern-5":`Motif 6`,"nav.pattern-6":`Motif 7`,"nav.pattern-7":`Motif 8`,"nav.pattern-8":`Motif 9`,"nav.pattern-9":`Motif 10`,"nav.pattern-10":`Motif 11`,"nav.pattern-11":`Motif 12`,"nav.pattern-12":`Motif 13`,"nav.pattern-13":`Motif 14`},de:{"top.name":`Demo-Kopfnavigation`,"top.compact":`Kompaktes Menü erzwingen`,"top.width":`Vorschaubreite (px)`,"top.icons":`Führende Symbole`,"top.sticky":`Fixierte Leiste`,"top.custom":`Eigene Elementvorlage`,"top.actions":`Zusätzliche Aktionen`,"top.title":`Arbeitsbereich im Überblick`,"top.description":`Beschriftungen öffnen Seiten. Separate Pfeile zeigen Unterseiten in einem Bereich. Die Suche zeigt Ergebnisse mit ihren übergeordneten Pfaden. Wähle ein Ergebnis und lösche die Suche, um es im Untermenü zu sehen. Wähle einen übergeordneten Pfadeintrag, um zu dessen Bereich zurückzukehren. Verkleinere die Vorschau oder füge Aktionen hinzu, um das kompakte Menü zu testen.`,"top.modeCompact":`Kompakte Navigation: Alle Seiten bleiben über das Menü erreichbar.`,"top.modeExpanded":`Horizontale Navigation: Verwende Links/Rechts, Pos1/Ende oder die separaten Aufklappschaltflächen.`,"top.settings":`Einstellungen`,"top.actionDone":`Einstellungsaktion ausgewählt.`,"top.help":`Hilfe`,"top.helpDone":`Hilfeaktion ausgewählt.`,"top.searchPlaceholder":`Kopfnavigation durchsuchen…`,"nav.workspace":`Arbeitsbereich`,"nav.settings":`Einstellungen`,"nav.overview":`Übersicht`,"nav.projects":`Projekte`,"nav.design":`Designsystem`,"nav.library":`Komponentenbibliothek`,"nav.tokens":`Design-Tokens`,"nav.accessibility":`Barrierefreiheit`,"nav.research":`Forschung`,"nav.releases":`Versionen`,"nav.reports":`Berichte`,"nav.disabled":`Geschützter Bereich`,"nav.members":`Teammitglieder`,"nav.billing":`Abrechnung`,"nav.new":`Neu`,"nav.search":`Demo-Navigation durchsuchen`,"nav.placeholder":`Versuche „Tokens“ oder „Palette“`,"nav.name":`Demo-Arbeitsbereich`,"nav.clear":`Suche löschen`,"nav.empty":`Keine passenden Seiten.`,"nav.open":`Navigation öffnen`,"nav.close":`Navigation schließen`,"nav.collapse":`Navigation einklappen`,"nav.expand":`Navigation ausklappen`,"nav.submenu":`Untermenü öffnen`,"nav.result":`Suchergebnis`,"nav.back":`Zurück`,"nav.path":`Navigationspfad`,"demo.inlineMode":`Untermenüs ersetzen die Liste in dieser Navigation. Zurück stellt die vorherige Ebene wieder her.`,"demo.right":`Rechte Seite`,"demo.rail":`Symbolleiste`,"demo.mobile":`Mobile Seitenleiste erzwingen`,"demo.search":`Suche`,"demo.rtl":`Von rechts nach links`,"demo.custom":`Eigene Elementvorlage`,"demo.height":`Bereichshöhe (px)`,"demo.language":`Sprache`,"demo.instructions":`Wähle eine Beschriftung, um ihre Seite zu öffnen, oder den Pfeil, um Unterseiten anzuzeigen. Suche nach „Tokens“ oder „Palette“ für Ergebnisse mit übergeordneten Pfaden. Lösche nach der Auswahl eines Ergebnisses die Suche, um es im Untermenü zu sehen. Wähle einen übergeordneten Pfadeintrag, um zu dessen Bereich zurückzukehren.`,"demo.studio":`Studio`,"demo.admin":`Alex · Arbeitsbereichsadministrator`,"demo.title":`Ein ruhigerer Arbeitsbereich`,"demo.description":`Kopfzeile, Fußzeile, Elementdarstellung, Seite und Bereichsgröße sind konfigurierbar. Die mobile Seitenleiste bleibt innerhalb dieser Vorschau.`,"demo.open":`Demo-Seitenleiste öffnen`,"demo.select":`Wähle eine Seite, um hier ihre stabile ID zu sehen.`,"demo.keyboard":`Verwende Pfeiltasten und Pos1/Ende innerhalb einer Liste. Eingabe oder Leertaste klappt Unterseiten auf. Zurück, Escape oder der entgegengesetzte Pfeil führt eine Ebene zurück; Escape auf der obersten Ebene schließt die mobile Seitenleiste.`,"demo.routes":`Echte Routen mit withInAppNavigation konfigurieren`,"nav.palette":`Palette`,"nav.variables":`Farbvariablen`,"nav.pattern-0":`Muster 1`,"nav.pattern-1":`Muster 2`,"nav.pattern-2":`Muster 3`,"nav.pattern-3":`Muster 4`,"nav.pattern-4":`Muster 5`,"nav.pattern-5":`Muster 6`,"nav.pattern-6":`Muster 7`,"nav.pattern-7":`Muster 8`,"nav.pattern-8":`Muster 9`,"nav.pattern-9":`Muster 10`,"nav.pattern-10":`Muster 11`,"nav.pattern-11":`Muster 12`,"nav.pattern-12":`Muster 13`,"nav.pattern-13":`Muster 14`}};function Ke(a,r$1){return r$1.version?.(),it.map(t=>s(r({},t),{title:r$1.translate(`nav.${t.id}`),items:Bn(t.items,a,r$1)}))}function Bn(a,r$2,t){return a.map(e=>s(r({},e),{route:`${r$2}/${e.id}`,label:t.translate(`nav.${e.id}`),data:s(r({},e.data),{label:{key:`nav.${e.id}`},keywords:[...e.data?.keywords??[],e.label]}),children:Bn(e.children??[],r$2,t)}))}var Fn=`const navigation = defineNavigation({
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
// In your shell: <bx-side-nav />`;var J=class a{languages=dt;version=_(0);language=_(`en`);translate(r){return this.version(),at[this.language()]?.[r]??r}setLanguage(r){r===null||r===this.language()||(this.language.set(r),this.version.update(t=>t+1))}static ɵfac=function(t){return new(t||a)};static ɵprov=K({token:a,factory:a.ɵfac})};function Ai(a,r){if(a&1&&(j(0,`strong`),Te(1),U()),a&2){let t=F$1(2);D(),je$1(t.text().studio)}}function Bi(a,r){if(a&1&&(Ve$1(0,`bx-icon`,17),oe(1,Ai,2,1,`strong`)),a&2){let t=r.$implicit,e=r.mobile;D(),ie(!t&&!e?1:-1)}}function Fi(a,r){if(a&1&&(j(0,`span`),Te(1),U()),a&2){let t=F$1(2);D(),je$1(t.text().admin)}}function ji(a,r){if(a&1&&(Ve$1(0,`bx-icon`,18),oe(1,Fi,2,1,`span`)),a&2){let t=r.$implicit;D(),ie(t?-1:1)}}function qi(a,r){if(a&1){let t=hr();j(0,`button`,19),ve$1(`click`,function(o){bn(t),F$1();let c=Ya$1(14);return vn(c.open(o))}),Te(1),U()}if(a&2){let t=F$1();D(),je$1(t.text().open)}}function Hi(a,r){if(a&1&&(j(0,`span`),Te(1),U(),j(2,`small`,21),Te(3,`↗`),U()),a&2){let t=F$1().$implicit;D(),je$1(t.label)}}function Ui(a,r){if(a&1&&(Ve$1(0,`bx-icon`,20),oe(1,Hi,4,1)),a&2){let t=r.$implicit,e=r.collapsed;ae(`name`,t.icon?.name??`circle`),D(),ie(e?-1:1)}}var Xe=class a{navigationDemoI18nService=p(J);groups=v(()=>Ke(`/components/side-nav`,this.navigationDemoI18nService));text=v(()=>({right:this.navigationDemoI18nService.translate(`demo.right`),rail:this.navigationDemoI18nService.translate(`demo.rail`),mobile:this.navigationDemoI18nService.translate(`demo.mobile`),inlineMode:this.navigationDemoI18nService.translate(`demo.inlineMode`),search:this.navigationDemoI18nService.translate(`demo.search`),rtl:this.navigationDemoI18nService.translate(`demo.rtl`),custom:this.navigationDemoI18nService.translate(`demo.custom`),height:this.navigationDemoI18nService.translate(`demo.height`),language:this.navigationDemoI18nService.translate(`demo.language`),instructions:this.navigationDemoI18nService.translate(`demo.instructions`),studio:this.navigationDemoI18nService.translate(`demo.studio`),admin:this.navigationDemoI18nService.translate(`demo.admin`),title:this.navigationDemoI18nService.translate(`demo.title`),description:this.navigationDemoI18nService.translate(`demo.description`),open:this.navigationDemoI18nService.translate(`demo.open`),keyboard:this.navigationDemoI18nService.translate(`demo.keyboard`),routes:this.navigationDemoI18nService.translate(`demo.routes`)}));routeExample=Fn;right=_(!1);collapsed=_(!1);mobile=_(!1);searchable=_(!0);rtl=_(!1);custom=_(!1);height=_(420);selected=_(void 0);selection=v(()=>{let r=this.selected();return r?`${this.navigationDemoI18nService.translate(`nav.${r.id}`)} \xB7 ${r.id}`:this.navigationDemoI18nService.translate(`demo.select`)});config=v(()=>({position:`inline`,showMobileTrigger:!1,side:this.right()?`right`:`left`,mobile:this.mobile(),searchable:this.searchable(),persistenceKey:`blocks.side-nav.demo.v1`,ariaLabel:{key:`nav.name`},searchLabel:{key:`nav.search`},searchPlaceholder:{key:`nav.placeholder`},clearSearchLabel:{key:`nav.clear`},emptyText:{key:`nav.empty`},openLabel:{key:`nav.open`},closeLabel:{key:`nav.close`},collapseLabel:{key:`nav.collapse`},expandLabel:{key:`nav.expand`},submenuLabel:{key:`nav.submenu`},resultLabel:{key:`nav.result`},backLabel:{key:`nav.back`},pathLabel:{key:`nav.path`}}));select(r){this.selected.set(r)}static ɵfac=function(t){return new(t||a)};static ɵcmp=V$1({type:a,selectors:[[`app-side-nav-examples`]],features:[At([J,{provide:_e,useExisting:J}])],decls:36,vars:38,consts:[[`nav`,``],[`customItem`,``],[1,`demo-language-row`],[`subscriptSizing`,`dynamic`,3,`selectionChange`,`label`,`clearable`,`options`,`value`],[1,`nav-demo-controls`],[3,`checkedChange`,`label`,`checked`],[`type`,`number`,3,`valueChange`,`label`,`min`,`max`,`value`],[1,`nav-demo-frame`],[3,`collapsedChange`,`itemSelected`,`config`,`groups`,`itemTemplate`,`collapsed`],[`bxSideNavHeader`,``],[`bxSideNavFooter`,``],[1,`nav-demo-content`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`],[`aria-live`,`polite`],[1,`nav-route-example`],[`tabindex`,`0`,`aria-label`,`TypeScript navigation configuration`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`name`,`blocks`],[`name`,`circle-user-round`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`size`,`20`,3,`name`],[`aria-hidden`,`true`]],template:function(t,e){if(t&1){let o=hr();j(0,`div`,2)(1,`bx-select`,3),ve$1(`selectionChange`,function(d){return e.navigationDemoI18nService.setLanguage(d.value)}),U()(),j(2,`div`,4)(3,`bx-checkbox`,5),MS(`checkedChange`,function(d){return bn(o),k1(e.right,d)||(e.right=d),vn(d)}),U(),j(4,`bx-checkbox`,5),ve$1(`checkedChange`,function(d){return e.collapsed.set(d)}),U(),j(5,`bx-checkbox`,5),MS(`checkedChange`,function(d){return bn(o),k1(e.mobile,d)||(e.mobile=d),vn(d)}),U(),j(6,`bx-checkbox`,5),MS(`checkedChange`,function(d){return bn(o),k1(e.searchable,d)||(e.searchable=d),vn(d)}),U(),j(7,`bx-checkbox`,5),MS(`checkedChange`,function(d){return bn(o),k1(e.rtl,d)||(e.rtl=d),vn(d)}),U(),j(8,`bx-checkbox`,5),MS(`checkedChange`,function(d){return bn(o),k1(e.custom,d)||(e.custom=d),vn(d)}),U(),j(9,`bx-input-field`,6),MS(`valueChange`,function(d){return bn(o),k1(e.height,d)||(e.height=d),vn(d)}),U()(),j(10,`p`),Te(11),U(),j(12,`div`,7)(13,`bx-side-nav`,8,0),MS(`collapsedChange`,function(d){return bn(o),k1(e.collapsed,d)||(e.collapsed=d),vn(d)}),ve$1(`itemSelected`,function(d){return e.select(d)}),aS(15,Bi,2,1,`ng-template`,9)(16,ji,2,1,`ng-template`,10),U(),j(17,`div`,11)(18,`h3`),Te(19),U(),j(20,`p`),Te(21),U(),oe(22,qi,2,1,`button`,12),j(23,`output`,13),Te(24),U(),j(25,`p`),Te(26),U(),j(27,`p`),Te(28),U()()(),aS(29,Ui,2,2,`ng-template`,null,1,xb),j(31,`details`,14)(32,`summary`),Te(33),U(),j(34,`pre`,15),Ve$1(35,`code`,16),U()()}if(t&2){let o=Ya$1(14),c=Ya$1(30);D(),ae(`label`,e.text().language)(`clearable`,!1)(`options`,e.navigationDemoI18nService.languages)(`value`,e.navigationDemoI18nService.language()),D(2),ae(`label`,e.text().right),kS(`checked`,e.right),D(),ae(`label`,e.text().rail)(`checked`,e.collapsed()),D(),ae(`label`,e.text().mobile),kS(`checked`,e.mobile),D(),ae(`label`,e.text().search),kS(`checked`,e.searchable),D(),ae(`label`,e.text().rtl),kS(`checked`,e.rtl),D(),ae(`label`,e.text().custom),kS(`checked`,e.custom),D(),ae(`label`,e.text().height)(`min`,200)(`max`,700),kS(`value`,e.height),D(2),je$1(e.text().instructions),D(),ye(`--%NS%bx-side-nav-height`,e.height()+`px`),he$1(`right`,e.right()),H(`dir`,e.rtl()?`rtl`:`ltr`),D(),ae(`config`,e.config())(`groups`,e.groups())(`itemTemplate`,e.custom()?c:void 0),kS(`collapsed`,e.collapsed),D(6),je$1(e.text().title),D(2),je$1(e.text().description),D(),ie(o.isMobile()?22:-1),D(2),je$1(e.selection()),D(2),je$1(e.text().keyboard),D(2),je$1(e.text().inlineMode),D(5),je$1(e.text().routes),D(2),ae(`highlight`,e.routeExample)}},dependencies:[ht,Ae$1,qt,$t,Z$1,Ci$1,Yi$1,eo$1,fn],styles:[`
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
  margin-block-end: 1rem;
}
.demo-language-row[_ngcontent-%COMP%]   bx-select[_ngcontent-%COMP%] {
  inline-size: 12rem;
  max-inline-size: 100%;
}
.nav-demo-controls[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-block-end: 1rem;
}
.nav-demo-controls[_ngcontent-%COMP%]   bx-input-field[_ngcontent-%COMP%] {
  inline-size: 12rem;
  max-inline-size: 100%;
}
.nav-demo-frame[_ngcontent-%COMP%] {
  position: relative;
  isolation: isolate;
  display: flex;
  min-width: 0;
  width: 100%;
  min-height: var(--%NS%bx-side-nav-height, 420px);
  overflow: hidden;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  background: var(--%NS%bx-bg-canvas);
}
.nav-demo-content[_ngcontent-%COMP%] {
  min-width: 0;
  flex: 1;
  padding: 1rem;
  overflow-wrap: anywhere;
}
.nav-demo-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin-top: 0;
}
.nav-demo-content[_ngcontent-%COMP%]   output[_ngcontent-%COMP%] {
  display: block;
  padding-block: 1rem;
  color: var(--%NS%bx-text-brand);
}
.nav-route-example[_ngcontent-%COMP%] {
  margin-top: 1rem;
}
@media (max-width: 640px) {
  .nav-demo-frame[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .nav-demo-frame[_ngcontent-%COMP%]   bx-side-nav[_ngcontent-%COMP%] {
    max-width: 100%;
  }
}`]})};var Gi=()=>({name:`info`,color:`text-info`,bgColor:`auto`});var Qe=class a{panelBreakpoints={"2xl":`push`};placements=[{label:`Left`,value:`left`},{label:`Right`,value:`right`}];opened=_(!1);contained=_(!0);backdrop=_(!1);placement=_(`right`);panelWidth=_(320);note=_(`This content survives closing the panel.`);clicks=_(0);width=v(()=>Math.max(240,Math.min(640,Number(this.panelWidth())||320)));resizeWidth(r){let t=Number(r);Number.isFinite(t)&&this.panelWidth.set(t)}pageAction(){this.clicks.update(r=>r+1)}static ɵfac=function(t){return new(t||a)};static ɵcmp=V$1({type:a,selectors:[[`app-side-panel-examples`]],decls:27,vars:24,consts:[[1,`panel-demo-controls`],[`label`,`Placement`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Panel width (px)`,`type`,`number`,3,`ngModelChange`,`min`,`max`,`ngModel`],[1,`panel-demo-toggles`],[`label`,`Bound to preview container`,3,`ngModelChange`,`ngModel`],[`label`,`Blocking backdrop inside bounds`,3,`ngModelChange`,`ngModel`],[1,`panel-demo-boundary`],[`ariaLabel`,`Side panel example`,3,`widthChange`,`openChange`,`headerIcon`,`open`,`placement`,`container`,`width`,`resizable`,`resizeDisableShrink`,`resizeMinWidth`,`resizeMaxWidth`,`breakpoints`,`backdrop`],[`bxSidePanelBanner`,``,1,`demo-banner`],[`bxSidePanelHeader`,``,1,`demo-heading`],[`label`,`Persistent note`,3,`ngModelChange`,`ngModel`],[`bxSidePanelFooter`,``],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[1,`panel-demo-content`],[`role`,`status`]],template:function(t,e){t&1&&(j(0,`div`,0)(1,`bx-select`,1),OR(),ve$1(`ngModelChange`,function(c){return e.placement.set(c)}),U(),j(2,`bx-input-field`,2),OR(),ve$1(`ngModelChange`,function(c){return e.panelWidth.set(c)}),U()(),j(3,`div`,3)(4,`bx-slide-toggle`,4),OR(),ve$1(`ngModelChange`,function(c){return e.contained.set(c)}),U(),j(5,`bx-slide-toggle`,5),OR(),ve$1(`ngModelChange`,function(c){return e.backdrop.set(c)}),U()(),j(6,`bx-side-panel-layout`,6)(7,`bx-side-panel`,7),ve$1(`widthChange`,function(c){return e.resizeWidth(c)})(`openChange`,function(c){return e.opened.set(c)}),j(8,`p`,8),Te(9,`Optional projected top banner`),U(),j(10,`h3`,9),Te(11,`Declarative panel`),U(),j(12,`bx-input-field`,10),OR(),ve$1(`ngModelChange`,function(c){return e.note.set(c)}),U(),j(13,`p`),Te(14,`Closing keeps projected content mounted. Escape dismisses the focused panel without a modal focus trap or page scroll lock.`),U(),j(15,`div`,11)(16,`button`,12),ve$1(`click`,function(){return e.opened.set(!1)}),Te(17,`Done`),U()()(),j(18,`div`,13)(19,`button`,12),ve$1(`click`,function(){return e.opened.set(!e.opened())}),Te(20),U(),j(21,`button`,12),ve$1(`click`,function(){return e.pageAction()}),Te(22,`Surrounding page action`),U(),j(23,`p`,14),Te(24),U(),j(25,`p`),Te(26,`The panel has ordinary keyboard navigation. Change its placement, bounds, or width while it is open.`),U()()()),t&2&&(D(),ae(`clearable`,!1)(`options`,e.placements)(`ngModel`,e.placement()),LR(),D(),ae(`min`,240)(`max`,640)(`ngModel`,e.panelWidth()),LR(),D(2),ae(`ngModel`,e.contained()),LR(),D(),ae(`ngModel`,e.backdrop()),LR(),D(2),ae(`headerIcon`,A1(23,Gi))(`open`,e.opened())(`placement`,e.placement())(`container`,e.contained()?void 0:`viewport`)(`width`,e.width())(`resizable`,!0)(`resizeDisableShrink`,!1)(`resizeMinWidth`,240)(`resizeMaxWidth`,640)(`breakpoints`,e.panelBreakpoints)(`backdrop`,e.backdrop()),D(5),ae(`ngModel`,e.note()),LR(),D(8),gr(``,e.opened()?`Close`:`Open`,` panel`),D(4),SS(`Page actions: `,e.clicks(),` · Panel `,e.opened()?`open`:`closed`))},dependencies:[dte,ste,JF,Z$1,Yi$1,eo$1,to$1,hM,mM,qc,Uc,$c],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.panel-demo-controls[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
.panel-demo-boundary[_ngcontent-%COMP%] {
  block-size: 28rem;
  padding: 1rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
  background: var(--%NS%bx-bg-surface-alt);
  margin-block-start: 1rem;
}
.panel-demo-boundary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  margin-inline-end: 0.5rem;
  margin-block-end: 0.5rem;
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
  gap: 1rem;
  margin-block-start: 0.75rem;
}
.panel-demo-content[_ngcontent-%COMP%] {
  min-inline-size: 0;
  padding: 0.75rem;
}
@media (max-width: 640px) {
  .panel-demo-controls[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}`]})};var jn=[{label:`Indicator`,value:`indicator`},{label:`Navigation`,value:`navigation`},{label:`Wizard`,value:`wizard`}];var ot=[`steps`,`segments`,`dots`,`progress`,`cards`];var qn=ot.map(a=>({label:a,value:a}));var rt=[`sm`,`md`,`lg`];var Hn=rt.map(a=>({label:a,value:a}));var Un=[{label:`Horizontal`,value:`horizontal`},{label:`Vertical`,value:`vertical`}];var Gn=[{label:`Scroll`,value:`scroll`},{label:`Vertical`,value:`vertical`},{label:`Compact`,value:`compact`}];var Kn=[{id:`overview`,label:`Overview`,description:`What will ship`,icon:`file-text`},{id:`access`,label:`Access`,description:`Who can use it`,icon:`users`},{id:`delivery`,label:`Delivery`,description:`How it rolls out`,icon:`send`}];var Xn=[{id:`plan`,label:`Plan`,completed:!0},{id:`build`,label:`Build`},{id:`ship`,label:`Ship`,optional:!0}];var Qn=[{label:`Percentage (33%)`,value:`percentage`},{label:`Completed steps (1/3)`,value:`fraction`}];function Yn(a,r){return new Promise((t,e)=>{let o=()=>{clearTimeout(c),t(!1)},c=setTimeout(()=>{a.signal.removeEventListener(`abort`,o),r===`fail`?e(/* @__PURE__ */ new Error(`The simulated server could not save this step. Try again.`)):t(r===`allow`)},800);a.signal.addEventListener(`abort`,o,{once:!0}),a.signal.aborted&&o()})}var Zn={en:{label:`Workflow`,back:`Back`,next:`Next`,finish:`Finish`,skip:`Skip`,pending:`Pending`,awaitingConfirmation:`Awaiting confirmation`,active:`Current step`,completed:`Completed`,skipped:`Skipped`,error:`Error`,loading:`Loading`,disabled:`Disabled`,optional:`Optional`,invalid:`Check this step before continuing`,rejected:`Navigation was not accepted`,position:`Step {index} of {count}: {label}`,plan:`Plan`,build:`Build`,ship:`Ship`,archived:`Archived`,buildDescription:`Prepare the workspace`,details:`Details`,preferences:`Preferences`,review:`Review`},es:{label:`Flujo de trabajo`,back:`Atrás`,next:`Siguiente`,finish:`Finalizar`,skip:`Omitir`,pending:`Pendiente`,awaitingConfirmation:`Esperando confirmación`,active:`Paso actual`,completed:`Completado`,skipped:`Omitido`,error:`Error`,loading:`Cargando`,disabled:`Deshabilitado`,optional:`Opcional`,invalid:`Comprueba este paso antes de continuar`,rejected:`No se aceptó la navegación`,position:`Paso {index} de {count}: {label}`,plan:`Planificar`,build:`Crear`,ship:`Publicar`,archived:`Archivado`,buildDescription:`Prepara el espacio de trabajo`,details:`Detalles`,preferences:`Preferencias`,review:`Revisión`},fr:{label:`Parcours`,back:`Retour`,next:`Suivant`,finish:`Terminer`,skip:`Ignorer`,pending:`En attente`,awaitingConfirmation:`En attente de confirmation`,active:`Étape actuelle`,completed:`Terminé`,skipped:`Ignoré`,error:`Erreur`,loading:`Chargement`,disabled:`Désactivé`,optional:`Facultatif`,invalid:`Vérifiez cette étape avant de continuer`,rejected:`La navigation a été refusée`,position:`Étape {index} sur {count} : {label}`,plan:`Planifier`,build:`Créer`,ship:`Publier`,archived:`Archivé`,buildDescription:`Préparez l’espace de travail`,details:`Détails`,preferences:`Préférences`,review:`Vérification`},de:{label:`Ablauf`,back:`Zurück`,next:`Weiter`,finish:`Abschließen`,skip:`Überspringen`,pending:`Ausstehend`,awaitingConfirmation:`Bestätigung ausstehend`,active:`Aktueller Schritt`,completed:`Abgeschlossen`,skipped:`Übersprungen`,error:`Fehler`,loading:`Wird geladen`,disabled:`Deaktiviert`,optional:`Optional`,invalid:`Prüfen Sie diesen Schritt vor dem Fortfahren`,rejected:`Die Navigation wurde abgelehnt`,position:`Schritt {index} von {count}: {label}`,plan:`Planen`,build:`Erstellen`,ship:`Veröffentlichen`,archived:`Archiviert`,buildDescription:`Arbeitsbereich vorbereiten`,details:`Details`,preferences:`Einstellungen`,review:`Überprüfung`}};var he=class a{language=_(`en`);version=_(0);translate(r,t){let e=Zn[this.language()][r]??r;for(let[o,c]of Object.entries(t??{}))e=e.replaceAll(`{${o}}`,String(c));return e}setLanguage(r){r&&(this.language.set(r),this.version.update(t=>t+1))}static ɵfac=function(t){return new(t||a)};static ɵprov=K({token:a,factory:a.ɵfac})};var Ki=[`sectionsWrapper`];var Xi=[`dynamicContent`];var Qi=[`section`];var Yi=()=>({key:`details`});var Zi=()=>({key:`preferences`});var Ji=()=>({key:`review`});var $i=(a,r)=>r.id;function ea(a,r){if(a&1){let t=hr();j(0,`bx-select`,67),OR(),MS(`ngModelChange`,function(o){bn(t);let c=F$1();return k1(c.progressFormat,o)||(c.progressFormat=o),vn(o)}),U()}if(a&2){let t=F$1();ae(`clearable`,!1)(`options`,t.progressFormats),kS(`ngModel`,t.progressFormat),LR()}}function ta(a,r){if(a&1){let t=hr();j(0,`section`,38,8)(2,`h4`),Te(3),U(),j(4,`p`),Te(5),U(),j(6,`p`),Te(7,`The section selection follows this scroll container. No scroll observer or router is owned by the stepper.`),U(),j(8,`button`,31),ve$1(`click`,function(){let o=bn(t).$implicit,c=F$1();return vn(c.sectionStatus.set(`Reviewed `+o.id))}),Te(9,`Mark section reviewed`),U()()}if(a&2){let t=r.$implicit;H(`data-section`,t.id)(`aria-label`,t.label),D(3),je$1(t.label),D(2),je$1(t.description)}}function na(a,r){if(a&1){let t=hr();j(0,`button`,31),ve$1(`click`,function(){let o=bn(t).$implicit,c=F$1();return vn(c.policy.set(o))}),Te(1),U()}if(a&2){let t=r.$implicit,e=F$1();H(`aria-pressed`,e.policy()===t),D(),gr(``,t,` content`)}}function ia(a,r){if(a&1&&(j(0,`bx-input-field`,68),OR(),U(),j(1,`p`),Te(2,`This required field becomes touched only after an invalid forward attempt.`),U()),a&2){let t=F$1();ae(`formControl`,t.details.controls.name),LR()}}function aa(a,r){if(a&1&&(j(0,`span`),Te(1),U()),a&2){let t=F$1();D(),je$1(t.stepperDemoI18nService.translate(`preferences`))}}function oa(a,r){if(a&1&&(j(0,`bx-input-field`,69),OR(),U(),j(1,`p`),Te(2,`Skip leaves this step incomplete. With retained content, edits and child state survive revisiting.`),U()),a&2){let t=F$1();ae(`formControl`,t.note),LR()}}function ra(a,r){if(a&1&&(j(0,`h4`),Te(1,`Review workspace`),U(),j(2,`p`),Te(3),U(),j(4,`p`),Te(5),U(),j(6,`p`),Te(7,`Finish performs the same asynchronous save as Next. A failed save keeps this content and its form values.`),U()),a&2){let t=F$1();D(3),gr(`Workspace: `,t.details.controls.name.value),D(2),gr(`Note: `,t.note.value||`No delivery note`)}}function la(a,r){if(a&1){let t=hr();j(0,`h4`),Te(1,`Workspace ready`),U(),j(2,`p`),Te(3,`Your workflow is complete. Reset to start again.`),U(),j(4,`button`,31),ve$1(`click`,function(){bn(t),F$1();let o=Ya$1(55);return vn(o.reset())}),Te(5,`Restart with existing values`),U()}}function sa(a,r){if(a&1&&(j(0,`bx-input-field`,70),OR(),U()),a&2){let t=F$1();ae(`formField`,t.signalForm.name),LR()}}function ca(a,r){if(a&1&&(j(0,`p`),Te(1),U()),a&2){let t=F$1();D(),gr(`Ready to create `,t.signalModel().name,`.`)}}function da(a,r){if(a&1&&(j(0,`p`),Te(1),U()),a&2){F$1();let t=Ya$1(84);D(),gr(`Active step: `,t.selectedStep()?.label,`. Component state follows stable IDs when definitions change.`)}}function pa(a,r){if(a&1){let t=hr();j(0,`button`,71),ve$1(`click`,function(){bn(t);let o=F$1();return vn(o.confirmSelection())}),Te(1),U()}a&2&&(D(),gr(`Open `,r))}function ma(a,r){if(a&1&&(j(0,`div`,72)(1,`span`),Te(2),U(),Ve$1(3,`bx-stepper`,73),U()),a&2){let t=r.$implicit,e=F$1().$implicit,o=F$1();D(2),je$1(t),D(),ae(`steps`,o.gallerySteps)(`variant`,e)(`size`,t)(`orientation`,o.orientation())(`responsive`,o.responsive())(`glassiness`,o.glass()?`on`:`off`)(`surfaceEffects`,o.lighting())(`showLabels`,e!==`dots`)(`labels`,o.labels)}}function ua(a,r){if(a&1&&(j(0,`div`,66)(1,`h4`),Te(2),U(),jn$1(3,ma,4,10,`div`,72,Wa$1),U()),a&2){let t=r.$implicit,e=F$1();D(2),je$1(t),D(),zn$1(e.gallerySizes)}}var Ye=class a{bxA11yService=p(Fe);stepperDemoI18nService=p(he);sectionsWrapper=er(`sectionsWrapper`);dynamicContent=er(`dynamicContent`);sections=Wd(`section`);modes=jn;variants=qn;progressFormats=Qn;sizes=Hn;orientations=Un;responsiveOptions=Gn;galleryVariants=ot;gallerySizes=rt;gallerySteps=Xn;sectionSteps=Kn;languages=dt;policies=[`eager`,`retained`,`active`];mode=_(`navigation`);variant=_(`steps`);progressFormat=_(`percentage`);size=_(`md`);orientation=_(`horizontal`);responsive=_(`compact`);active=_(`build`);sectionActive=_(`overview`);wizardActive=_(`details`);controlledActive=_(`plan`);status=_(`Use the controls to explore presentation and behavior.`);sectionStatus=_(`Choose a section or scroll the content. The application confirms the active ID.`);wizardStatus=_(`Enter a workspace name, then continue.`);nextOutcome=_(`allow`);policy=_(`retained`);pendingConfirmation=_(null);showLabels=_(!0);errorState=_(!1);loadingState=_(!1);allowIndicatorRequests=_(!1);readOnly=_(!1);glass=_(!0);lighting=_(!0);linear=_(!0);editable=_(!0);extra=_(!1);previewSteps=v(()=>[{id:`plan`,label:{key:`plan`},completed:!0,icon:`clipboard-check`},{id:`build`,label:{key:`build`},description:{key:`buildDescription`},icon:`wrench`},{id:`ship`,label:{key:`ship`},optional:!0,icon:`send`},{id:`archived`,label:{key:`archived`},disabled:!0,icon:`archive`}].map(t=>s(r({},t),{error:t.id===this.active()&&this.errorState(),loading:t.id===this.active()&&this.loadingState()})));currentStepOptions=v(()=>this.previewSteps().map(r=>({value:r.id,label:`${xe$1(r.label,this.stepperDemoI18nService)} (${r.id})`,disabled:r.disabled})));confirmationLabel=v(()=>{let r=this.pendingConfirmation(),t=this.gallerySteps.find(e=>e.id===r?.toId);return r?.outcome===`accepted`&&t&&t.id!==this.controlledActive()?xe$1(t.label,this.stepperDemoI18nService):null});controlledMessage=v(()=>{let r=this.pendingConfirmation(),t=this.confirmationLabel(),e=xe$1(this.gallerySteps.find(o=>o.id===this.controlledActive())?.label,this.stepperDemoI18nService);return t?`Request accepted. ${e} is still current. Select \u201COpen ${t}\u201D to let the application confirm the new activeStep.`:r?.outcome===`accepted`?r.toId?`The application opened ${e}. Request another step to repeat the two-stage flow.`:`The workflow is complete. Reset to try requesting and confirming steps again.`:r?`The request was ${r.outcome}. ${e} remains current; no destination is waiting for confirmation.`:`Current step: ${e}. \u201CRequest next step\u201D checks the transition. Then select \u201COpen\u201D to confirm it. This demo deliberately waits for that second action.`});dynamicSteps=v(()=>[{id:`first`,label:`Start`,content:this.dynamicContent()},...this.extra()?[{id:`extra`,label:`Added step`,optional:!0,content:this.dynamicContent()}]:[],{id:`last`,label:`Review`,content:this.dynamicContent()}]);labels=Object.fromEntries([`label`,`back`,`next`,`finish`,`skip`,`pending`,`awaitingConfirmation`,`active`,`completed`,`skipped`,`error`,`loading`,`disabled`,`optional`,`invalid`,`rejected`,`position`].map(r=>[r,{key:r}]));controlledLabels=s(r({},this.labels),{next:`Request next step`,back:`Request previous step`});details=new Of({name:new hk(``,{nonNullable:!0,validators:_s.required})});note=new hk(``,{nonNullable:!0});signalModel=_({name:``});signalForm=qo$1(this.signalModel,r=>qs(r.name));save=r=>{if(r.request.action===`previous`)return!0;let t=this.nextOutcome();return this.nextOutcome.set(`allow`),Yn(r,t)};confirmPreview(r){this.status.set(`${r.source} request: ${r.id} (index ${r.index}). Application confirmed selection.`),this.active.set(r.id)}navigateSection(r){let t=this.sectionsWrapper()?.nativeElement,e=this.sections().find(c=>c.nativeElement.dataset.section===r.id)?.nativeElement,o=this.sections()[0]?.nativeElement;!t||!e||!o||(this.sectionStatus.set(`Application handled ${r.source} request for section ${r.id}.`),t.scrollTo({top:e.offsetTop-o.offsetTop,behavior:this.bxA11yService.isReducedMotion()?`instant`:`smooth`}))}observeSections(){let r=this.sectionsWrapper()?.nativeElement;if(!r)return;let t=r.getBoundingClientRect().top,e=this.sections().filter(o=>o.nativeElement.getBoundingClientRect().top<=t+32).at(-1);e&&this.sectionActive.set(e.nativeElement.dataset.section??`overview`)}resetWizard(r){r.reset(),this.details.reset(),this.note.reset(),this.nextOutcome.set(`allow`),this.wizardStatus.set(`Enter a workspace name, then continue.`)}recordWizard(r){switch(r.outcome){case`accepted`:this.wizardStatus.set(r.toId?`Saved and advanced to ${r.toId}.`:`Workspace saved. The workflow is complete.`);break;case`invalid`:this.wizardStatus.set(`Enter a workspace name before continuing. No save has started.`);break;case`error`:this.wizardStatus.set(`The simulated save failed. Your values are retained. Select Next or Finish once to retry.`);break;case`rejected`:this.wizardStatus.set(`The guard refused navigation. Your values are retained. Select Next or Finish once to try again.`);break;case`cancelled`:this.wizardStatus.set(`The save was cancelled because the workflow changed. Your values are retained.`)}}confirmSelection(){let r=this.pendingConfirmation();r?.outcome===`accepted`&&r.toId&&this.confirmationLabel()&&this.controlledActive.set(r.toId)}static ɵfac=function(t){return new(t||a)};static ɵcmp=V$1({type:a,selectors:[[`app-stepper-examples`]],viewQuery:function(t,e){t&1&&Mn(e.sectionsWrapper,Ki,5)(e.dynamicContent,Xi,5)(e.sections,Qi,5),t&2&&Mt(3)},features:[At([he,{provide:_e,useExisting:he}])],decls:115,vars:86,consts:[[`preview`,``],[`sectionsWrapper`,``],[`wizard`,``],[`finished`,``],[`signalWizard`,``],[`custom`,``],[`dynamicContent`,``],[`controlled`,``],[`section`,``],[1,`stepper-examples`],[`aria-labelledby`,`stepper-config-title`],[`id`,`stepper-config-title`],[3,`activeStepChange`,`stepRequested`,`mode`,`steps`,`variant`,`size`,`orientation`,`responsive`,`showLabels`,`indicatorInteractive`,`readOnly`,`glassiness`,`surfaceEffects`,`labels`,`showPercentage`,`progressFormat`,`activeStep`],[1,`config-grid`],[`label`,`Current step (activeStep ID)`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Behavior`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Variant`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Progress display`,3,`clearable`,`options`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Orientation`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Narrow screens`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Language`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`toggles`],[`label`,`Labels`,3,`ngModelChange`,`ngModel`],[`label`,`Current step error`,3,`ngModelChange`,`ngModel`],[`label`,`Current step loading`,3,`ngModelChange`,`ngModel`],[`label`,`Indicator interaction`,3,`ngModelChange`,`ngModel`],[`label`,`Read only`,3,`ngModelChange`,`ngModel`],[`label`,`Glass surfaces`,3,`ngModelChange`,`ngModel`],[`label`,`Interaction lighting`,3,`ngModelChange`,`ngModel`],[1,`actions`],[`bx-button`,``,`type`,`button`,3,`click`],[`announcement`,`polite`,3,`message`],[`aria-labelledby`,`stepper-section-title`],[`id`,`stepper-section-title`],[1,`section-layout`],[`mode`,`navigation`,`orientation`,`vertical`,3,`activeStepChange`,`stepRequested`,`steps`,`activeStep`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Release sections`,1,`section-scroll`,3,`scroll`],[1,`document-section`],[`aria-labelledby`,`stepper-wizard-title`],[`id`,`stepper-wizard-title`],[`label`,`Linear workflow`,3,`ngModelChange`,`ngModel`],[`label`,`Completed steps editable`,3,`ngModelChange`,`ngModel`],[`bx-button`,``,`type`,`button`],[`mode`,`wizard`,3,`activeStepChange`,`transitionFinished`,`variant`,`size`,`orientation`,`responsive`,`linear`,`contentPolicy`,`labels`,`beforeTransition`,`completionContent`,`activeStep`],[`id`,`details`,`icon`,`file-text`,3,`label`,`validation`,`editable`],[`bxStepContent`,``],[`id`,`preferences`,`icon`,`settings`,3,`label`,`optional`],[`bxStepLabel`,``],[`id`,`managed`,`label`,`Managed by your organization`,3,`disabled`],[`id`,`review`,`icon`,`clipboard-check`,3,`label`],[`aria-labelledby`,`stepper-signal-title`],[`id`,`stepper-signal-title`],[`mode`,`wizard`,`variant`,`segments`,3,`labels`],[`id`,`name`,`label`,`Name`,3,`validation`],[`id`,`ready`,`label`,`Ready`],[`aria-labelledby`,`stepper-custom-title`],[`id`,`stepper-custom-title`],[`mode`,`wizard`,`variant`,`cards`,3,`steps`,`linear`,`controls`,`labels`],[`aria-labelledby`,`stepper-controlled-title`],[`id`,`stepper-controlled-title`],[`mode`,`wizard`,`selectionMode`,`controlled`,3,`activeStepChange`,`transitionFinished`,`steps`,`linear`,`labels`,`activeStep`],[`announcement`,`polite`,3,`title`,`message`],[`bx-button`,``,`bxAlertActions`,``,`type`,`button`,`variant`,`filled`],[`aria-labelledby`,`stepper-gallery-title`],[`id`,`stepper-gallery-title`],[1,`gallery-group`],[`label`,`Progress display`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Workspace name`,`placeholder`,`Enter a workspace name`,3,`formControl`],[`label`,`Delivery note`,3,`formControl`],[`label`,`Required workspace name`,3,`formField`],[`bx-button`,``,`bxAlertActions`,``,`type`,`button`,`variant`,`filled`,3,`click`],[1,`gallery-row`],[`activeStep`,`build`,3,`steps`,`variant`,`size`,`orientation`,`responsive`,`glassiness`,`surfaceEffects`,`showLabels`,`labels`]],template:function(t,e){if(t&1){let o=hr();j(0,`div`,9)(1,`section`,10)(2,`h3`,11),Te(3,`Presentation and behavior`),U(),j(4,`bx-stepper`,12,0),MS(`activeStepChange`,function(d){return bn(o),k1(e.active,d)||(e.active=d),vn(d)}),ve$1(`stepRequested`,function(d){return e.mode()!==`wizard`&&e.confirmPreview(d)}),U(),j(6,`div`,13)(7,`bx-select`,14),OR(),MS(`ngModelChange`,function(d){return bn(o),k1(e.active,d)||(e.active=d),vn(d)}),U(),j(8,`bx-select`,15),OR(),MS(`ngModelChange`,function(d){return bn(o),k1(e.mode,d)||(e.mode=d),vn(d)}),U(),j(9,`bx-select`,16),OR(),MS(`ngModelChange`,function(d){return bn(o),k1(e.variant,d)||(e.variant=d),vn(d)}),U(),oe(10,ea,1,3,`bx-select`,17),j(11,`bx-select`,18),OR(),MS(`ngModelChange`,function(d){return bn(o),k1(e.size,d)||(e.size=d),vn(d)}),U(),j(12,`bx-select`,19),OR(),MS(`ngModelChange`,function(d){return bn(o),k1(e.orientation,d)||(e.orientation=d),vn(d)}),U(),j(13,`bx-select`,20),OR(),MS(`ngModelChange`,function(d){return bn(o),k1(e.responsive,d)||(e.responsive=d),vn(d)}),U(),j(14,`bx-select`,21),OR(),ve$1(`ngModelChange`,function(d){return e.stepperDemoI18nService.setLanguage(d)}),U()(),j(15,`div`,22)(16,`bx-slide-toggle`,23),OR(),MS(`ngModelChange`,function(d){return bn(o),k1(e.showLabels,d)||(e.showLabels=d),vn(d)}),U(),j(17,`bx-slide-toggle`,24),OR(),MS(`ngModelChange`,function(d){return bn(o),k1(e.errorState,d)||(e.errorState=d),vn(d)}),U(),j(18,`bx-slide-toggle`,25),OR(),MS(`ngModelChange`,function(d){return bn(o),k1(e.loadingState,d)||(e.loadingState=d),vn(d)}),U(),j(19,`bx-slide-toggle`,26),OR(),MS(`ngModelChange`,function(d){return bn(o),k1(e.allowIndicatorRequests,d)||(e.allowIndicatorRequests=d),vn(d)}),U(),j(20,`bx-slide-toggle`,27),OR(),MS(`ngModelChange`,function(d){return bn(o),k1(e.readOnly,d)||(e.readOnly=d),vn(d)}),U(),j(21,`bx-slide-toggle`,28),OR(),MS(`ngModelChange`,function(d){return bn(o),k1(e.glass,d)||(e.glass=d),vn(d)}),U(),j(22,`bx-slide-toggle`,29),OR(),MS(`ngModelChange`,function(d){return bn(o),k1(e.lighting,d)||(e.lighting=d),vn(d)}),U()(),j(23,`div`,30)(24,`button`,31),ve$1(`click`,function(){bn(o);let d=Ya$1(5);return vn(d.reset())}),Te(25,`Reset`),U()(),Ve$1(26,`bx-banner`,32),U(),j(27,`section`,33)(28,`h3`,34),Te(29,`Application-owned section navigation`),U(),Ve$1(30,`bx-banner`,32),j(31,`div`,35)(32,`bx-stepper`,36),MS(`activeStepChange`,function(d){return bn(o),k1(e.sectionActive,d)||(e.sectionActive=d),vn(d)}),ve$1(`stepRequested`,function(d){return e.navigateSection(d)}),U(),j(33,`div`,37,1),ve$1(`scroll`,function(){return e.observeSections()}),jn$1(35,ta,10,4,`section`,38,$i),U()()(),j(37,`section`,39)(38,`h3`,40),Te(39,`Workspace wizard`),U(),j(40,`p`),Te(41,`Required Reactive Forms validation, optional content, disabled steps, guarded saves, retained input and explicit completion.`),U(),j(42,`div`,22)(43,`bx-slide-toggle`,41),OR(),MS(`ngModelChange`,function(d){return bn(o),k1(e.linear,d)||(e.linear=d),vn(d)}),U(),j(44,`bx-slide-toggle`,42),OR(),MS(`ngModelChange`,function(d){return bn(o),k1(e.editable,d)||(e.editable=d),vn(d)}),U()(),j(45,`div`,30),jn$1(46,na,2,2,`button`,43,Wa$1),j(48,`button`,31),ve$1(`click`,function(){return e.nextOutcome.set(`fail`)}),Te(49,`Fail next save`),U(),j(50,`button`,31),ve$1(`click`,function(){return e.nextOutcome.set(`reject`)}),Te(51,`Reject next guard`),U(),j(52,`button`,31),ve$1(`click`,function(){bn(o);let d=Ya$1(55);return vn(e.resetWizard(d))}),Te(53,`Reset workflow and forms`),U()(),j(54,`bx-stepper`,44,2),MS(`activeStepChange`,function(d){return bn(o),k1(e.wizardActive,d)||(e.wizardActive=d),vn(d)}),ve$1(`transitionFinished`,function(d){return e.recordWizard(d)}),j(56,`bx-step`,45),aS(57,ia,3,1,`ng-template`,46),U(),j(58,`bx-step`,47),aS(59,aa,2,1,`ng-template`,48)(60,oa,3,1,`ng-template`,46),U(),Ve$1(61,`bx-step`,49),j(62,`bx-step`,50),aS(63,ra,8,2,`ng-template`,46),U()(),aS(64,la,6,0,`ng-template`,null,3,xb),Ve$1(66,`bx-banner`,32),U(),j(67,`section`,51)(68,`h3`,52),Te(69,`Signal Forms`),U(),j(70,`bx-stepper`,53,4)(72,`bx-step`,54),aS(73,sa,1,1,`ng-template`,46),U(),j(74,`bx-step`,55),aS(75,ca,2,1,`ng-template`,46),U()(),j(76,`button`,31),ve$1(`click`,function(){bn(o);let d=Ya$1(71);return vn(d.reset())}),Te(77,`Restart Signal Forms example`),U()(),j(78,`section`,56)(79,`h3`,57),Te(80,`Non-linear workflow and custom controls`),U(),j(81,`p`),Te(82,`Add or remove an optional step. Every control invokes the same guarded methods as the built-in buttons.`),U(),Ve$1(83,`bx-stepper`,58,5),aS(85,da,2,1,`ng-template`,null,6,xb),j(87,`div`,30)(88,`button`,31),ve$1(`click`,function(){bn(o);let d=Ya$1(84);return vn(d.previous())}),Te(89,`Back`),U(),j(90,`button`,31),ve$1(`click`,function(){bn(o);let d=Ya$1(84);return vn(d.next())}),Te(91,`Next`),U(),j(92,`button`,31),ve$1(`click`,function(){bn(o);let d=Ya$1(84);return vn(d.finish())}),Te(93,`Finish`),U(),j(94,`button`,31),ve$1(`click`,function(){return e.extra.set(!e.extra())}),Te(95),U(),j(96,`button`,31),ve$1(`click`,function(){bn(o);let d=Ya$1(84);return vn(d.reset())}),Te(97,`Reset`),U()(),Ve$1(98,`bx-banner`,32),U(),j(99,`section`,59)(100,`h3`,60),Te(101,`Controlled wizard selection`),U(),j(102,`bx-stepper`,61,7),MS(`activeStepChange`,function(d){return bn(o),k1(e.controlledActive,d)||(e.controlledActive=d),vn(d)}),ve$1(`transitionFinished`,function(d){return e.pendingConfirmation.set(d)}),U(),j(104,`bx-banner`,62),oe(105,pa,2,1,`button`,63),U(),j(106,`button`,31),ve$1(`click`,function(){return bn(o),Ya$1(103).reset(),vn(e.pendingConfirmation.set(null))}),Te(107,`Reset controlled wizard`),U()(),j(108,`section`,64)(109,`h3`,65),Te(110,`Variant and size reference`),U(),j(111,`p`),Te(112,`All presentations use the same completion data. Segment thickness changes with size. Orientation follows the configurator above.`),U(),jn$1(113,ua,5,1,`div`,66,Wa$1),U()()}if(t&2){let o,c=Ya$1(55),d=Ya$1(65),lt=Ya$1(84),oi=Ya$1(103);D(4),ae(`mode`,e.mode())(`steps`,e.previewSteps())(`variant`,e.variant())(`size`,e.size())(`orientation`,e.orientation())(`responsive`,e.responsive())(`showLabels`,e.showLabels())(`indicatorInteractive`,e.allowIndicatorRequests())(`readOnly`,e.readOnly())(`glassiness`,e.glass()?`on`:`off`)(`surfaceEffects`,e.lighting())(`labels`,e.labels)(`showPercentage`,!0)(`progressFormat`,e.progressFormat()),kS(`activeStep`,e.active),D(3),ae(`clearable`,!1)(`options`,e.currentStepOptions()),kS(`ngModel`,e.active),LR(),D(),ae(`clearable`,!1)(`options`,e.modes),kS(`ngModel`,e.mode),LR(),D(),ae(`clearable`,!1)(`options`,e.variants),kS(`ngModel`,e.variant),LR(),D(),ie(e.variant()===`progress`?10:-1),D(),ae(`clearable`,!1)(`options`,e.sizes),kS(`ngModel`,e.size),LR(),D(),ae(`clearable`,!1)(`options`,e.orientations),kS(`ngModel`,e.orientation),LR(),D(),ae(`clearable`,!1)(`options`,e.responsiveOptions),kS(`ngModel`,e.responsive),LR(),D(),ae(`clearable`,!1)(`options`,e.languages)(`ngModel`,e.stepperDemoI18nService.language()),LR(),D(2),kS(`ngModel`,e.showLabels),LR(),D(),kS(`ngModel`,e.errorState),LR(),D(),kS(`ngModel`,e.loadingState),LR(),D(),kS(`ngModel`,e.allowIndicatorRequests),LR(),D(),kS(`ngModel`,e.readOnly),LR(),D(),kS(`ngModel`,e.glass),LR(),D(),kS(`ngModel`,e.lighting),LR(),D(4),ae(`message`,e.status()),D(4),ae(`message`,e.sectionStatus()),D(2),ae(`steps`,e.sectionSteps),kS(`activeStep`,e.sectionActive),D(3),zn$1(e.sectionSteps),D(8),kS(`ngModel`,e.linear),LR(),D(),kS(`ngModel`,e.editable),LR(),D(2),zn$1(e.policies),D(8),ae(`variant`,e.variant())(`size`,e.size())(`orientation`,e.orientation())(`responsive`,e.responsive())(`linear`,e.linear())(`contentPolicy`,e.policy())(`labels`,e.labels)(`beforeTransition`,e.save)(`completionContent`,d),kS(`activeStep`,e.wizardActive),D(2),ae(`label`,A1(83,Yi))(`validation`,e.details)(`editable`,e.editable()),D(2),ae(`label`,A1(84,Zi))(`optional`,!0),D(3),ae(`disabled`,!0),D(),ae(`label`,A1(85,Ji)),D(4),ae(`message`,c.pending()?`Saving workspace… The next step opens automatically after a successful save.`:e.wizardStatus()+` Next server outcome: `+e.nextOutcome()+`.`),D(4),ae(`labels`,e.labels),D(2),ae(`validation`,e.signalForm()),D(11),ae(`steps`,e.dynamicSteps())(`linear`,!1)(`controls`,!1)(`labels`,e.labels),D(12),gr(``,e.extra()?`Remove`:`Add`,` optional step`),D(3),ae(`message`,lt.isComplete()?`Completed`:lt.lastTransition()?.outcome||`Ready`),D(4),ae(`steps`,e.gallerySteps)(`linear`,!1)(`labels`,e.controlledLabels),kS(`activeStep`,e.controlledActive),D(2),ae(`title`,e.confirmationLabel()?`Waiting for application confirmation`:oi.isComplete()?`Workflow complete`:`Application-owned selection`)(`message`,e.controlledMessage()),D(),ie((o=e.confirmationLabel())?105:-1,o),D(8),zn$1(e.galleryVariants)}},dependencies:[dte,ste,JF,pte,r2,$s,iM,Z$1,Yi$1,eo$1,to$1,Yt,He$1,Ge$1,We],styles:[`
[_nghost-%COMP%], 
.stepper-examples[_ngcontent-%COMP%], 
section[_ngcontent-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.stepper-examples[_ngcontent-%COMP%] {
  display: grid;
  gap: 2rem;
}
h3[_ngcontent-%COMP%], 
h4[_ngcontent-%COMP%] {
  margin-block: 0 0.75rem;
}
p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  line-height: 1.6;
}
.config-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 0.75rem;
  margin-block: 1rem;
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
  gap: 0.75rem;
  margin-block: 1rem;
}
.section-layout[_ngcontent-%COMP%] {
  display: grid;
  gap: 1rem;
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
  padding: 1rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
  overscroll-behavior: contain;
}
.section-scroll[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
}
.document-section[_ngcontent-%COMP%] {
  min-block-size: 20rem;
  padding-block: 1rem;
  overflow-wrap: anywhere;
}
.gallery-group[_ngcontent-%COMP%] {
  padding-block: 1rem;
  border-block-start: 1px solid var(--%NS%bx-border-default);
}
.gallery-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);
  align-items: center;
  gap: 0.75rem;
  margin-block: 1rem;
}
bx-banner[_ngcontent-%COMP%] {
  display: block;
  margin-block: 0.75rem;
}`]})};var Jn=[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Success`,value:`success`},{label:`Danger`,value:`danger`},{label:`Info`,value:`info`},{label:`Warning`,value:`warn`},{label:`Neutral`,value:`neutral`}];var $n=[{label:`Tonal`,value:`tonal`},{label:`Filled`,value:`filled`},{label:`Outlined`,value:`outlined`}];var ei=`<span bxTruncate #overflow="bxTruncate"
    [bxTooltip]="label() | bxTruncatedText: overflow.truncated()"
    [attr.tabindex]="overflow.truncated() ? 0 : null"
    bxTooltipTouch="longpress">{{ label() }}</span>`;var ti=`<bx-tag [text]="label()" [tooltipOnTruncate]="false" tooltip="My application tooltip" />
<bx-input-field [label]="label()" [tooltipOnTruncate]="false" />
<bx-select label="Location" [options]="options()" [tooltipOnTruncate]="false" />`;var ni=`import { TruncateDirective, TruncatedTextPipe, TooltipDirective, truncatedText } from '@filip.mazev/blocks/primitives';

// Read the exported directive's truncated() and text() signals in your own logic.
const tooltip = truncatedText(label(), overflow.truncated(), automaticTooltips());

// Application-wide form default; individual controls can override it.
formSettings.update({ tooltipOnTruncate: false });`;var ga=()=>[0];var xe=class a{text=_(`A long location name that can be truncated`);width=_(14);enabled=_(!0);largeText=_(!1);automaticTooltips=_(!0);customTooltip=_(!1);menuActions=_(0);label=v(()=>String(this.text()??``));options=v(()=>[{label:this.label(),value:0}]);pipeExample=ei;customExample=ti;logicExample=ni;previewWidth=v(()=>{let r=Number(this.width());return Number.isFinite(r)?Math.max(4,Math.min(64,r)):14});static ɵfac=function(t){return new(t||a)};static ɵcmp=V$1({type:a,selectors:[[`app-truncation-examples`]],decls:96,vars:55,consts:[[`overflow`,`bxTruncate`],[`aria-label`,`Conditional truncation tooltips`,1,`truncation-demo`],[1,`truncation-controls`],[`label`,`Text`,`subscriptSizing`,`dynamic`,3,`valueChange`,`value`],[`label`,`Available width (rem)`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`max`,`value`],[`role`,`group`,`aria-label`,`Preview options`,1,`truncation-switches`],[`label`,`Enable text truncation`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Larger text preview`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Automatic tooltips`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Custom tooltip`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[1,`component-examples`],[1,`preview-card`,`text-preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Text preview`,1,`preview-stage`],[1,`text-example`,`example-width`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,3,`bxTruncate`,`bxTooltip`],[1,`preview-caption`],[1,`preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Tag preview`,1,`preview-stage`],[1,`example-width`],[`leadingIcon`,`map-pin`,3,`text`,`tooltipOnTruncate`,`tooltip`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Input field preview`,1,`preview-stage`],[`placeholder`,`Editable value`,`subscriptSizing`,`dynamic`,3,`label`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Search value preview`,1,`preview-stage`],[`ariaLabel`,`Search value`,`subscriptSizing`,`dynamic`,3,`search`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Select preview`,1,`preview-stage`],[`subscriptSizing`,`dynamic`,3,`label`,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Multiselect preview`,1,`preview-stage`],[`label`,`Selected tag`,`selectionDisplay`,`tags`,`subscriptSizing`,`dynamic`,3,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Menu item preview`,1,`preview-stage`],[3,`action`,`label`,`wrapLabel`,`tooltipOnTruncate`],[`tabindex`,`0`,`aria-label`,`HTML truncation example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`tabindex`,`0`,`aria-label`,`TypeScript truncation example`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`]],template:function(t,e){if(t&1){let o=hr();j(0,`section`,1)(1,`h3`),Te(2,`Shared truncation, optional tooltips`),U(),j(3,`p`)(4,`code`),Te(5,`TruncateDirective`),U(),Te(6,` owns ellipsis and rendered measurement. The pure `),j(7,`code`),Te(8,`bxTruncatedText`),U(),Te(9,` pipe selects text for a conditional tooltip. Use the exported directive signals or `),j(10,`code`),Te(11,`truncatedText()`),U(),Te(12,` helper in your own logic. `),U(),j(13,`div`,2)(14,`bx-input-field`,3),MS(`valueChange`,function(d){return bn(o),k1(e.text,d)||(e.text=d),vn(d)}),U(),j(15,`bx-input-field`,4),MS(`valueChange`,function(d){return bn(o),k1(e.width,d)||(e.width=d),vn(d)}),U()(),j(16,`div`,5)(17,`bx-checkbox`,6),MS(`checkedChange`,function(d){return bn(o),k1(e.enabled,d)||(e.enabled=d),vn(d)}),U(),j(18,`bx-checkbox`,7),MS(`checkedChange`,function(d){return bn(o),k1(e.largeText,d)||(e.largeText=d),vn(d)}),U(),j(19,`bx-checkbox`,8),MS(`checkedChange`,function(d){return bn(o),k1(e.automaticTooltips,d)||(e.automaticTooltips=d),vn(d)}),U(),j(20,`bx-checkbox`,9),MS(`checkedChange`,function(d){return bn(o),k1(e.customTooltip,d)||(e.customTooltip=d),vn(d)}),U()(),j(21,`div`,10)(22,`section`,11)(23,`h4`),Te(24,`Text preview`),U(),j(25,`div`,12)(26,`div`,13)(27,`span`,14,0),vb(29,`bxTruncatedText`),Te(30),U()()(),j(31,`output`,15),Te(32),U()(),j(33,`section`,16)(34,`h4`),Te(35,`Tag`),U(),j(36,`div`,17)(37,`div`,18),Ve$1(38,`bx-tag`,19),U()(),j(39,`p`,15),Te(40,`Clipped labels use an automatic or application-owned tooltip.`),U()(),j(41,`section`,16)(42,`h4`),Te(43,`Input field`),U(),j(44,`div`,20)(45,`div`,18),Ve$1(46,`bx-input-field`,21),U()(),j(47,`p`,15),Te(48,`The floating label shares the truncation measurement.`),U()(),j(49,`section`,16)(50,`h4`),Te(51,`Search value`),U(),j(52,`div`,22)(53,`div`,18)(54,`bx-search-input`,23),ve$1(`search`,function(d){return e.text.set(d)}),U()()(),j(55,`p`,15),Te(56,`Editing the search updates the shared example text.`),U()(),j(57,`section`,16)(58,`h4`),Te(59,`Select`),U(),j(60,`div`,24)(61,`div`,18),Ve$1(62,`bx-select`,25),U()(),j(63,`p`,15),Te(64,`Selected values and captions share the same available width.`),U()(),j(65,`section`,16)(66,`h4`),Te(67,`Multiselect`),U(),j(68,`div`,26)(69,`div`,18),Ve$1(70,`bx-multi-select`,27),U()(),j(71,`p`,15),Te(72,`The selected tag follows the owning control's tooltip setting.`),U()(),j(73,`section`,16)(74,`h4`),Te(75,`Menu item`),U(),j(76,`div`,28)(77,`div`,18)(78,`bx-menu`)(79,`bx-menu-item`,29),ve$1(`action`,function(){return e.menuActions.set(e.menuActions()+1)}),U()()()(),j(80,`output`,15),Te(81),U()()(),j(82,`p`),Te(83,` Change the text or width to switch between clipped and fitting labels. Turn automatic tooltips off to retain ellipsis and measurement for custom feedback. Hover, keyboard focus, and touch-and-hold use the existing tooltip mechanism. Explicit tag descriptions still take precedence. Custom tooltip applies to the text and tag examples. Preview panels keep their size; long wrapped content scrolls inside them. Example widths are capped by the available space in each card. `),U(),j(84,`h3`),Te(85,`Short conditional tooltip`),U(),j(86,`pre`,30),Ve$1(87,`code`,31),U(),j(88,`h3`),Te(89,`Disable automatic tooltips`),U(),j(90,`pre`,30),Ve$1(91,`code`,31),U(),j(92,`h3`),Te(93,`Use the public API in your application`),U(),j(94,`pre`,32),Ve$1(95,`code`,33),U()()}if(t&2){let o=Ya$1(28);D(14),kS(`value`,e.text),D(),ae(`min`,4)(`max`,64),kS(`value`,e.width),D(2),kS(`checked`,e.enabled),D(),kS(`checked`,e.largeText),D(),kS(`checked`,e.automaticTooltips),D(),kS(`checked`,e.customTooltip),D(6),ye(`inline-size`,e.previewWidth(),`rem`),he$1(`large-text`,e.largeText()),D(),ae(`bxTruncate`,e.enabled())(`bxTooltip`,e.customTooltip()?`My application tooltip`:yb(29,50,e.label(),o.truncated(),e.automaticTooltips())),H(`tabindex`,e.customTooltip()||e.automaticTooltips()&&o.truncated()?0:null),D(3),je$1(e.label()),D(2),gr(`Text `,o.truncated()?`is truncated`:`fits without truncation`,`.`),D(5),ye(`inline-size`,e.previewWidth(),`rem`),D(),ae(`text`,e.label())(`tooltipOnTruncate`,e.automaticTooltips())(`tooltip`,e.customTooltip()?`My application tooltip`:void 0),D(7),ye(`inline-size`,e.previewWidth(),`rem`),D(),ae(`label`,e.label())(`tooltipOnTruncate`,e.automaticTooltips()),D(7),ye(`inline-size`,e.previewWidth(),`rem`),D(),ae(`value`,e.label())(`tooltipOnTruncate`,e.automaticTooltips()),D(7),ye(`inline-size`,e.previewWidth(),`rem`),D(),ae(`label`,e.label())(`options`,e.options())(`value`,0)(`tooltipOnTruncate`,e.automaticTooltips()),D(7),ye(`inline-size`,e.previewWidth(),`rem`),D(),ae(`options`,e.options())(`value`,A1(54,ga))(`tooltipOnTruncate`,e.automaticTooltips()),D(7),ye(`inline-size`,e.previewWidth(),`rem`),D(2),ae(`label`,e.label())(`wrapLabel`,!e.enabled())(`tooltipOnTruncate`,e.automaticTooltips()),D(2),gr(`Menu activations: `,e.menuActions()),D(6),ae(`highlight`,e.pipeExample),D(4),ae(`highlight`,e.customExample),D(4),ae(`highlight`,e.logicExample)}},dependencies:[ht,Ci$1,Yi$1,oo$1,Ae,eo$1,Wk,Gk,tM,Is,si$1,Zf],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
}
.truncation-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
  gap: 0.75rem;
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
  padding: 0.5rem;
  box-sizing: border-box;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.25rem;
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
  gap: 1rem;
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
  gap: 0.75rem;
  min-inline-size: 0;
  padding: 0.75rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
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
  padding: 0.5rem;
}
.preview-stage[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -2px;
  border-radius: 0.25rem;
}
.preview-caption[_ngcontent-%COMP%] {
  min-inline-size: 0;
  min-block-size: 3lh;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--%NS%bx-text-secondary);
  overflow-wrap: anywhere;
}`]})};var ba=()=>({key:`tagLabel`});var Ze=class a{demoI18nService=p(N);label=_(`Skopje`);text=v(()=>String(this.label()??``));color=_(`accent`);variant=_(`tonal`);disabled=_(!1);leadingIcon=_(!0);trailingIcon=_(!0);leadingCount=_(!1);trailingCount=_(!0);leftNumber=_(3);rightNumber=_(12);colors=Jn;variants=$n;static ɵfac=function(t){return new(t||a)};static ɵcmp=V$1({type:a,selectors:[[`app-tag-examples`]],features:[At([N,{provide:_e,useExisting:N}])],decls:23,vars:26,consts:[[1,`tag-demo`],[`aria-label`,`Tag previews`,1,`tag-previews`],[`tooltip`,`A location tag tooltip`,3,`text`,`color`,`variant`,`disabled`,`leadingIcon`,`trailingIcon`,`leadingNumber`,`trailingNumber`],[`color`,`info`,`variant`,`filled`,`ariaLabel`,`42 locations`,`tooltip`,`Number-only tag`,3,`leadingNumber`],[`leadingIcon`,`map-pin`,`color`,`success`,3,`text`],[`text`,`Unavailable`,`color`,`neutral`,3,`disabled`],[`text`,`Skopje`],[`text`,`+2`,`tooltip`,`Ohrid, Bitola`],[1,`tag-controls`],[`label`,`Tag text`,3,`valueChange`,`value`],[`label`,`Color`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Appearance`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Leading number`,`type`,`number`,3,`valueChange`,`value`],[`label`,`Trailing number`,`type`,`number`,3,`valueChange`,`value`],[1,`tag-controls-checkboxes`],[`label`,`Leading icon`,3,`checkedChange`,`checked`],[`label`,`Trailing icon`,3,`checkedChange`,`checked`],[`label`,`Leading number`,3,`checkedChange`,`checked`],[`label`,`Trailing number`,3,`checkedChange`,`checked`],[`label`,`Disabled appearance`,3,`checkedChange`,`checked`]],template:function(t,e){t&1&&(j(0,`div`,0)(1,`div`,1),Ve$1(2,`bx-tag`,2)(3,`bx-tag`,3)(4,`bx-tag`,4)(5,`bx-tag`,5)(6,`bx-tag`,6)(7,`bx-tag`,7),U(),j(8,`div`,8)(9,`bx-input-field`,9),MS(`valueChange`,function(c){return k1(e.label,c)||(e.label=c),c}),U(),j(10,`bx-select`,10),MS(`valueChange`,function(c){return k1(e.color,c)||(e.color=c),c}),U(),j(11,`bx-select`,11),MS(`valueChange`,function(c){return k1(e.variant,c)||(e.variant=c),c}),U(),j(12,`bx-input-field`,12),MS(`valueChange`,function(c){return k1(e.leftNumber,c)||(e.leftNumber=c),c}),U(),j(13,`bx-input-field`,13),MS(`valueChange`,function(c){return k1(e.rightNumber,c)||(e.rightNumber=c),c}),U()(),j(14,`div`,14)(15,`bx-checkbox`,15),MS(`checkedChange`,function(c){return k1(e.leadingIcon,c)||(e.leadingIcon=c),c}),U(),j(16,`bx-checkbox`,16),MS(`checkedChange`,function(c){return k1(e.trailingIcon,c)||(e.trailingIcon=c),c}),U(),j(17,`bx-checkbox`,17),MS(`checkedChange`,function(c){return k1(e.leadingCount,c)||(e.leadingCount=c),c}),U(),j(18,`bx-checkbox`,18),MS(`checkedChange`,function(c){return k1(e.trailingCount,c)||(e.trailingCount=c),c}),U(),j(19,`bx-checkbox`,19),MS(`checkedChange`,function(c){return k1(e.disabled,c)||(e.disabled=c),c}),U()(),j(20,`p`),Te(21,` Hover or keyboard-focus a tooltip tag. In a select trigger, the parent control exposes the complete selection while overflow tags show the remaining names on hover. `),U(),Ve$1(22,`app-truncation-examples`),U()),t&2&&(D(2),ae(`text`,e.text())(`color`,e.color()??`accent`)(`variant`,e.variant()??`tonal`)(`disabled`,e.disabled())(`leadingIcon`,e.leadingIcon()?`map-pin`:void 0)(`trailingIcon`,e.trailingIcon()?`chevron-right`:void 0)(`leadingNumber`,e.leadingCount()?e.leftNumber():null)(`trailingNumber`,e.trailingCount()?e.rightNumber():null),D(),ae(`leadingNumber`,42),D(),ae(`text`,A1(25,ba)),D(),ae(`disabled`,!0),D(4),kS(`value`,e.label),D(),ae(`clearable`,!1)(`options`,e.colors),kS(`value`,e.color),D(),ae(`clearable`,!1)(`options`,e.variants),kS(`value`,e.variant),D(),kS(`value`,e.leftNumber),D(),kS(`value`,e.rightNumber),D(2),kS(`checked`,e.leadingIcon),D(),kS(`checked`,e.trailingIcon),D(),kS(`checked`,e.leadingCount),D(),kS(`checked`,e.trailingCount),D(),kS(`checked`,e.disabled))},dependencies:[tM,Ci$1,Yi$1,eo$1,xe],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
}
.tag-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  inline-size: 100%;
}
.tag-previews[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  min-block-size: 3rem;
}
.tag-controls[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
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
}`]})};function _a(a,r){if(a&1&&(j(0,`strong`),Te(1),U()),a&2){let t=F$1(2);D(),je$1(t.text().brand)}}function ya(a,r){if(a&1&&(j(0,`a`,13),Ve$1(1,`bx-icon`,14),oe(2,_a,2,1,`strong`),U()),a&2){let t=r.$implicit,e=F$1();H(`aria-label`,e.text().brand),D(2),ie(t?-1:2)}}function va(a,r){if(a&1){let t=hr();j(0,`button`,15),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.action.set(`top.actionDone`))}),Ve$1(1,`bx-icon`,16),Te(2),U(),j(3,`button`,15),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.action.set(`top.helpDone`))}),Ve$1(4,`bx-icon`,17),Te(5),U()}if(a&2){let t=F$1(2);D(2),gr(``,t.text().settings,` `),D(3),gr(``,t.text().help,` `)}}function ha(a,r){if(a&1&&oe(0,va,6,2),a&2){let t=F$1();ie(t.actions()?0:-1)}}function xa(a,r){if(a&1&&(Ve$1(0,`bx-icon`,18),j(1,`span`),Te(2),U(),j(3,`small`,19),Te(4,`↗`),U()),a&2){let t=r.$implicit;ae(`name`,t.icon?.name??`circle`),D(2),je$1(t.label)}}var Je=class a{navigationDemoI18nService=p(J);groups=v(()=>Ke(`/components/top-nav`,this.navigationDemoI18nService).map(t=>t.id!==`workspace`?t:s(r({},t),{items:t.items.filter(e=>e.id===`overview`||e.id===`projects`).map(e=>e.id!==`projects`?e:s(r({},e),{children:[...e.children??[],...t.items.filter(o=>o.id===`reports`||o.id===`disabled`)]}))})));compact=_(!1);searchable=_(!0);icons=_(!1);sticky=_(!1);rtl=_(!1);custom=_(!1);actions=_(!1);width=_(1100);selected=_(void 0);action=_(void 0);text=v(()=>({compact:this.navigationDemoI18nService.translate(`top.compact`),width:this.navigationDemoI18nService.translate(`top.width`),icons:this.navigationDemoI18nService.translate(`top.icons`),sticky:this.navigationDemoI18nService.translate(`top.sticky`),custom:this.navigationDemoI18nService.translate(`top.custom`),actions:this.navigationDemoI18nService.translate(`top.actions`),search:this.navigationDemoI18nService.translate(`demo.search`),rtl:this.navigationDemoI18nService.translate(`demo.rtl`),language:this.navigationDemoI18nService.translate(`demo.language`),brand:this.navigationDemoI18nService.translate(`demo.studio`),title:this.navigationDemoI18nService.translate(`top.title`),description:this.navigationDemoI18nService.translate(`top.description`),compactMode:this.navigationDemoI18nService.translate(`top.modeCompact`),expandedMode:this.navigationDemoI18nService.translate(`top.modeExpanded`),settings:this.navigationDemoI18nService.translate(`top.settings`),help:this.navigationDemoI18nService.translate(`top.help`)}));selection=v(()=>{let r=this.selected(),t=this.action();return t?this.navigationDemoI18nService.translate(t):r?`${this.navigationDemoI18nService.translate(`nav.${r.id}`)} \xB7 ${r.id}`:this.navigationDemoI18nService.translate(`demo.select`)});config=v(()=>({position:this.sticky()?`sticky`:`inline`,compactBreakpoint:`sm`,compact:this.compact()?!0:void 0,searchable:this.searchable(),showItemIcons:this.icons(),showSectionIcons:this.icons(),ariaLabel:{key:`top.name`},searchLabel:{key:`nav.search`},searchPlaceholder:{key:`top.searchPlaceholder`},clearSearchLabel:{key:`nav.clear`},emptyText:{key:`nav.empty`},openLabel:{key:`nav.open`},closeLabel:{key:`nav.close`},submenuLabel:{key:`nav.submenu`},resultLabel:{key:`nav.result`},backLabel:{key:`nav.back`},pathLabel:{key:`nav.path`}}));select(r){this.action.set(void 0),this.selected.set(r)}static ɵfac=function(t){return new(t||a)};static ɵcmp=V$1({type:a,selectors:[[`app-top-nav-examples`]],features:[At([J,{provide:_e,useExisting:J}])],decls:27,vars:32,consts:[[`nav`,``],[`customItem`,``],[1,`demo-language-row`],[`subscriptSizing`,`dynamic`,3,`selectionChange`,`label`,`clearable`,`options`,`value`],[1,`top-nav-demo-controls`],[3,`checkedChange`,`label`,`checked`],[`type`,`number`,3,`valueChange`,`label`,`min`,`max`,`value`],[1,`top-nav-demo-frame`],[3,`itemSelected`,`config`,`groups`,`itemTemplate`],[`bxTopNavBrand`,``],[`bxTopNavActions`,``],[1,`top-nav-demo-content`],[`aria-live`,`polite`],[`routerLink`,`/components/top-nav/overview`,1,`top-nav-demo-brand`],[`name`,`blocks`,`size`,`24`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`type`,`button`,3,`click`],[`name`,`settings`,`size`,`20`],[`name`,`circle-help`,`size`,`20`],[`size`,`20`,3,`name`],[`aria-hidden`,`true`]],template:function(t,e){if(t&1){let o=hr();j(0,`div`,2)(1,`bx-select`,3),ve$1(`selectionChange`,function(d){return e.navigationDemoI18nService.setLanguage(d.value)}),U()(),j(2,`div`,4)(3,`bx-checkbox`,5),MS(`checkedChange`,function(d){return bn(o),k1(e.compact,d)||(e.compact=d),vn(d)}),U(),j(4,`bx-checkbox`,5),MS(`checkedChange`,function(d){return bn(o),k1(e.searchable,d)||(e.searchable=d),vn(d)}),U(),j(5,`bx-checkbox`,5),MS(`checkedChange`,function(d){return bn(o),k1(e.icons,d)||(e.icons=d),vn(d)}),U(),j(6,`bx-checkbox`,5),MS(`checkedChange`,function(d){return bn(o),k1(e.sticky,d)||(e.sticky=d),vn(d)}),U(),j(7,`bx-checkbox`,5),MS(`checkedChange`,function(d){return bn(o),k1(e.rtl,d)||(e.rtl=d),vn(d)}),U(),j(8,`bx-checkbox`,5),MS(`checkedChange`,function(d){return bn(o),k1(e.custom,d)||(e.custom=d),vn(d)}),U(),j(9,`bx-checkbox`,5),MS(`checkedChange`,function(d){return bn(o),k1(e.actions,d)||(e.actions=d),vn(d)}),U(),j(10,`bx-input-field`,6),MS(`valueChange`,function(d){return bn(o),k1(e.width,d)||(e.width=d),vn(d)}),U()(),j(11,`div`,7)(12,`bx-top-nav`,8,0),ve$1(`itemSelected`,function(d){return e.select(d)}),aS(14,ya,3,2,`ng-template`,9)(15,ha,1,1,`ng-template`,10),U(),j(16,`div`,11)(17,`h3`),Te(18),U(),j(19,`p`),Te(20),U(),j(21,`p`),Te(22),U(),j(23,`output`,12),Te(24),U()()(),aS(25,xa,5,2,`ng-template`,null,1,xb)}if(t&2){let o=Ya$1(13),c=Ya$1(26);D(),ae(`label`,e.text().language)(`clearable`,!1)(`options`,e.navigationDemoI18nService.languages)(`value`,e.navigationDemoI18nService.language()),D(2),ae(`label`,e.text().compact),kS(`checked`,e.compact),D(),ae(`label`,e.text().search),kS(`checked`,e.searchable),D(),ae(`label`,e.text().icons),kS(`checked`,e.icons),D(),ae(`label`,e.text().sticky),kS(`checked`,e.sticky),D(),ae(`label`,e.text().rtl),kS(`checked`,e.rtl),D(),ae(`label`,e.text().custom),kS(`checked`,e.custom),D(),ae(`label`,e.text().actions),kS(`checked`,e.actions),D(),ae(`label`,e.text().width)(`min`,280)(`max`,1600),kS(`value`,e.width),D(),ye(`width`,e.width()+`px`),H(`dir`,e.rtl()?`rtl`:`ltr`),D(),ae(`config`,e.config())(`groups`,e.groups())(`itemTemplate`,e.custom()?c:void 0),D(6),je$1(e.text().title),D(2),je$1(e.text().description),D(2),je$1(o.isCompact()?e.text().compactMode:e.text().expandedMode),D(2),je$1(e.selection())}},dependencies:[Pp,Ve,Qt,Ut,Z$1,Ci$1,Yi$1,eo$1,fn],styles:[`
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
  margin-block-end: 1rem;
}
.demo-language-row[_ngcontent-%COMP%]   bx-select[_ngcontent-%COMP%] {
  inline-size: 12rem;
  max-inline-size: 100%;
}
.top-nav-demo-controls[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-block-end: 1rem;
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
  border-radius: 0.75rem;
}
.top-nav-demo-brand[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--%NS%bx-text-primary);
  text-decoration: none;
}
.top-nav-demo-brand[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.top-nav-demo-content[_ngcontent-%COMP%] {
  min-height: 28rem;
  padding: 1rem;
  overflow-wrap: anywhere;
}
.top-nav-demo-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin-block-start: 0;
}
.top-nav-demo-content[_ngcontent-%COMP%]   output[_ngcontent-%COMP%] {
  display: block;
  padding-block: 0.75rem;
  color: var(--%NS%bx-text-secondary);
}`]})};var ii=Array.from({length:3e3},(a,r)=>({id:r,title:`Item ${r+1}`,description:`Variable-height content wraps when the grid changes width. `.repeat(1+r%5)}));function fa(a,r){if(a&1&&(j(0,`p`),Te(1),U()),a&2){let t=F$1().$implicit;D(),SS(``,t.description,` `,t.description)}}function Sa(a,r){if(a&1){let t=hr();j(0,`bx-card`,12)(1,`p`),Te(2),U(),oe(3,fa,2,2,`p`),j(4,`button`,5),ve$1(`click`,function(){let o=bn(t).$implicit,c=F$1();return vn(c.toggle(o.id))}),Te(5),U()()}if(a&2){let t=r.$implicit,e=F$1();ae(`title`,t.title)(`headingLevel`,3)(`surfaceEffects`,!1)(`opaque`,!0),D(2),je$1(t.description),D(),ie(e.expanded().has(t.id)?3:-1),D(),H(`aria-expanded`,e.expanded().has(t.id)),D(),gr(` `,e.expanded().has(t.id)?`Less content`:`More content`,` `)}}var $e=class a{items=ii;itemKey=r=>r.id;layouts=[{label:`Responsive grid`,value:`grid`},{label:`Vertical list`,value:`list`}];layout=_(`grid`);width=_(100);index=_(1500);expanded=_(/* @__PURE__ */ new Set);config=v(()=>({layout:this.layout(),minColumnWidth:`12rem`,estimatedRowHeight:200,overscan:800}));toggle(r){this.expanded.update(t=>{let e=new Set(t);return e.has(r)?e.delete(r):e.add(r),e})}static ɵfac=function(t){return new(t||a)};static ɵcmp=V$1({type:a,selectors:[[`app-virtual-collection-examples`]],decls:15,vars:20,consts:[[`viewport`,``],[`collection`,``],[1,`virtual-demo-controls`],[`label`,`Layout`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Scroll to index`,`type`,`number`,3,`ngModelChange`,`min`,`max`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`for`,`virtual-demo-width`],[`id`,`virtual-demo-width`,`bxSlider`,``,`type`,`range`,`min`,`40`,`max`,`100`,3,`ngModelChange`,`ngModel`],[`role`,`status`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Virtual collection example`,1,`virtual-demo-viewport`],[3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[3,`title`,`headingLevel`,`surfaceEffects`,`opaque`]],template:function(t,e){if(t&1){let o=hr();j(0,`div`,2)(1,`bx-select`,3),OR(),ve$1(`ngModelChange`,function(d){return e.layout.set(d)}),U(),j(2,`bx-input-field`,4),OR(),ve$1(`ngModelChange`,function(d){return e.index.set(d)}),U(),j(3,`button`,5),ve$1(`click`,function(){bn(o);let d=Ya$1(13);return vn(d.scrollToIndex(e.index()))}),Te(4,`Scroll to item`),U()(),j(5,`label`,6),Te(6),U(),j(7,`input`,7),OR(),ve$1(`ngModelChange`,function(d){return e.width.set(d)}),U(),j(8,`p`,8),Te(9),U(),j(10,`div`,9,0)(12,`bx-virtual-collection`,10,1),aS(14,Sa,6,8,`ng-template`,11),U()()}if(t&2){let o=Ya$1(11),c=Ya$1(13);D(),ae(`clearable`,!1)(`options`,e.layouts)(`ngModel`,e.layout()),LR(),D(),ae(`min`,0)(`max`,e.items.length-1)(`ngModel`,e.index()),LR(),D(4),gr(`Container width `,e.width(),`%`),D(),ae(`ngModel`,e.width()),LR(),D(2),ES(` `,c.renderedItems().length,` mounted of `,e.items.length,` · `,c.renderedRange().columns,` columns · range `,c.renderedRange().start,`–`,c.renderedRange().end,`
`),D(),ye(`inline-size`,e.width(),`%`),D(2),ae(`items`,e.items)(`trackBy`,e.itemKey)(`config`,e.config())(`scrollContainer`,o),D(2),ae(`bxVirtualItem`,c)}},dependencies:[dte,YE,t2,ste,JF,Z$1,Yi$1,eo$1,$n$1,sM,bM,Gc],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.virtual-demo-controls[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-block-end: 1rem;
}
.virtual-demo-viewport[_ngcontent-%COMP%] {
  block-size: 32rem;
  max-inline-size: 100%;
  overflow: auto;
  overflow-anchor: none;
  overscroll-behavior: contain;
  padding: 0.75rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
}
.virtual-demo-viewport[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}`]})};function Ca(a,r){if(a&1&&(j(0,`div`)(1,`strong`),Te(2),U()()),a&2){let t=F$1();D(2),je$1(t.data.title)}}function wa(a,r){if(a&1){let t=hr();j(0,`div`,4)(1,`button`,5),ve$1(`click`,function(){bn(t);let o=F$1();return vn(o.close())}),Te(2,`Cancel`),U(),j(3,`button`,6),ve$1(`click`,function(){bn(t);let o=F$1();return vn(o.confirm())}),Te(4,`Save changes`),U()()}}var et=class a extends dn{name=new hk(`Blocks workspace`,{nonNullable:!0});confirm(){this.modal.close(`confirm`,this.name.value)}static ɵfac=(()=>{let r;return function(e){return(r||(r=go$1(a)))(e||a)}})();static ɵcmp=V$1({type:a,selectors:[[`app-component-dialog`]],features:[nn],decls:6,vars:2,consts:[[4,`appModalHeader`],[1,`dialog-body`],[`label`,`Project name`,3,`formControl`],[`class`,`dialog-actions`,4,`appModalFooter`],[1,`dialog-actions`],[`type`,`button`,`bx-button`,``,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(t,e){t&1&&(aS(0,Ca,3,1,`div`,0),j(1,`div`,1)(2,`p`),Te(3),U(),j(4,`bx-input-field`,2),OR(),U()(),aS(5,wa,5,0,`div`,3)),t&2&&(D(3),je$1(e.data.description),D(),ae(`formControl`,e.name),LR())},dependencies:[Z$1,Yi$1,pte,ste,r2,cn,sn],styles:[`
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
  gap: 1rem;
}`]})};var Ea=()=>({required:`Enter a project name.`});var ka=()=>({email:`Enter a valid email address.`});var Ta=()=>({name:`settings`});var Ma=a=>({text:`Project settings`,icon:a});function Pa(a,r){a&1&&(j(0,`div`,9),Ve$1(1,`app-side-nav-examples`),U())}function Da(a,r){a&1&&(j(0,`div`,9),Ve$1(1,`app-top-nav-examples`),U())}function Na(a,r){a&1&&(j(0,`div`,9),Ve$1(1,`app-stepper-examples`),U())}function Ia(a,r){a&1&&Ve$1(0,`app-virtual-collection-examples`)}function Oa(a,r){a&1&&Ve$1(0,`app-resize-handle-examples`)}function Va(a,r){a&1&&Ve$1(0,`app-side-panel-examples`)}function za(a,r){a&1&&Ve$1(0,`app-infinite-scroll-examples`)}function Wa(a,r){a&1&&Ve$1(0,`app-essentials-examples`,20)}function Ra(a,r){a&1&&Ve$1(0,`app-essentials-examples`,21)}function La(a,r){a&1&&Ve$1(0,`app-essentials-examples`,22)}function Aa(a,r){a&1&&Ve$1(0,`app-essentials-examples`,23)}function Ba(a,r){a&1&&Ve$1(0,`app-essentials-examples`,24)}function Fa(a,r){a&1&&Ve$1(0,`app-essentials-examples`,25)}function ja(a,r){a&1&&Ve$1(0,`app-essentials-examples`,26)}function qa(a,r){a&1&&Ve$1(0,`app-essentials-examples`,27)}function Ha(a,r){a&1&&Ve$1(0,`app-essentials-examples`,28)}function Ua(a,r){a&1&&Ve$1(0,`app-page-examples`)}function Ga(a,r){a&1&&Ve$1(0,`app-essentials-examples`,29)}function Ka(a,r){a&1&&Ve$1(0,`app-essentials-examples`,30)}function Xa(a,r){a&1&&Ve$1(0,`app-essentials-examples`,31)}function Qa(a,r){a&1&&Ve$1(0,`app-tag-examples`)}function Ya(a,r){a&1&&Ve$1(0,`app-truncation-examples`)}function Za(a,r){a&1&&Ve$1(0,`app-form-examples`,32)}function Ja(a,r){a&1&&Ve$1(0,`app-form-examples`,33)}function $a(a,r){a&1&&Ve$1(0,`app-form-examples`,34)}function eo(a,r){a&1&&Ve$1(0,`app-form-examples`,35)}function to(a,r){a&1&&Ve$1(0,`app-form-examples`,36)}function no(a,r){a&1&&Ve$1(0,`app-form-examples`,37)}function io(a,r){a&1&&Ve$1(0,`app-form-examples`,38)}function ao(a,r){a&1&&Ve$1(0,`app-form-examples`,39)}function oo(a,r){a&1&&Ve$1(0,`app-form-examples`,40)}function ro(a,r){a&1&&Ve$1(0,`app-form-examples`,41)}function lo(a,r){a&1&&Ve$1(0,`app-form-examples`,42)}function so(a,r){a&1&&Ve$1(0,`app-form-examples`,43)}function co(a,r){a&1&&Ve$1(0,`app-form-examples`,44)}function po(a,r){if(a&1){let t=hr();j(0,`div`,45)(1,`div`,50)(2,`button`,51),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.activate(`Primary action`))}),Te(3,`Primary action`),U(),j(4,`button`,52),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.activate(`Tonal action`))}),Te(5,`Tonal`),U(),j(6,`button`,53),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.activate(`Text action`))}),Te(7,`Text`),U(),j(8,`button`,54),Te(9,`Disabled`),U()(),j(10,`div`,50)(11,`button`,55),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.activate(`Success`))}),Te(12,`Success`),U(),j(13,`button`,56),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.activate(`Warning`))}),Te(14,`Warning`),U(),j(15,`button`,57),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.activate(`Delete`))}),Te(16,`Delete`),U(),j(17,`button`,58),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.activate(`Add item`))}),Ve$1(18,`bx-icon`,59),U()(),j(19,`div`,50)(20,`button`,60),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.activate(`Close example`))}),Ve$1(21,`bx-icon`,61),U(),j(22,`button`,62),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.activate(`Outlined action`))}),Te(23,`Outlined`),U(),j(24,`button`,63),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.activate(`Action without runtime effects`))}),Te(25,` Without runtime effects `),U()()()}a&2&&(D(8),ae(`disabled`,!0),D(14),ae(`outlined`,!0),D(2),ae(`surfaceEffects`,!1))}function mo(a,r){if(a&1&&(j(0,`div`,45)(1,`bx-checkbox`,64),OR(),U(),j(2,`bx-checkbox`,65),OR(),U(),j(3,`div`,50),Ve$1(4,`bx-checkbox-indicator`,66),j(5,`span`),Te(6),U()(),j(7,`div`,50),Ve$1(8,`bx-checkbox-indicator`),j(9,`span`),Te(10,`Unchecked`),U(),Ve$1(11,`bx-checkbox-indicator`,67),j(12,`span`),Te(13,`Checked`),U(),Ve$1(14,`bx-checkbox-indicator`,68),j(15,`span`),Te(16,`Partial`),U()()()),a&2){let t=F$1(2);D(),ae(`formControl`,t.checked),LR(),D(),ae(`formControl`,t.secondChecked),LR(),D(2),ae(`checked`,t.checked.value)(`indeterminate`,t.secondChecked.value),D(2),gr(`Selection: `,t.secondChecked.value?`partial`:t.checked.value?`checked`:`unchecked`),D(5),ae(`checked`,!0),D(3),ae(`indeterminate`,!0)}}function uo(a,r){if(a&1&&(j(0,`div`,45)(1,`bx-checkbox`,69),OR(),U(),j(2,`bx-checkbox`,70),OR(),U(),Ve$1(3,`bx-checkbox`,71)(4,`bx-checkbox`,72)(5,`bx-checkbox`,73),j(6,`bx-checkbox`,74),OR(),U(),j(7,`output`),Te(8),U()()),a&2){let t=F$1(2);D(),ae(`formControl`,t.checked),LR(),D(),ae(`formControl`,t.secondChecked),LR(),D(),ae(`indeterminate`,!0),D(),ae(`checked`,!0)(`emissive`,!1),D(),ae(`checked`,!0)(`readOnly`,!0),D(),ae(`formControl`,t.disabledCheck),LR(),D(2),SS(`Updates: `,t.checked.value?`on`:`off`,` · Previews: `,t.secondChecked.value?`on`:`off`)}}function go(a,r){if(a&1){let t=hr();j(0,`div`,46)(1,`bx-form-field`,75)(2,`span`,76)(3,`input`,77),ve$1(`input`,function(o){bn(t);let c=F$1(2);return vn(c.updateField(o))})(`blur`,function(){bn(t);let o=F$1(2);return vn(o.showError.set(!0))}),U()()(),j(4,`button`,78),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.showError.set(!0))}),Te(5,`Validate name`),U(),j(6,`output`),Te(7),U()()}if(a&2){let t=F$1(2);D(),ae(`required`,!0)(`error`,t.fieldError()),D(2),ae(`value`,t.fieldValue()),H(`aria-invalid`,!!t.fieldError()),D(4),gr(`Value: `,t.fieldValue()||`empty`)}}function bo(a,r){if(a&1&&(j(0,`div`,46)(1,`bx-input-field`,79),OR(),U(),j(2,`bx-input-field`,80),OR(),U(),j(3,`bx-input-field`,81),OR(),U(),j(4,`output`),Te(5),U()()),a&2){let t=F$1(2);D(),ae(`errorMessages`,A1(9,Ea))(`formControl`,t.name),LR(),D(),ae(`errorMessages`,A1(10,ka))(`formControl`,t.email),LR(),D(),ae(`min`,1)(`max`,20)(`formControl`,t.quantity),LR(),D(2),SS(``,t.name.value,` · `,t.quantity.value,` members`)}}function _o(a,r){if(a&1){let t=hr();j(0,`fieldset`,45)(1,`legend`),Te(2,`Notification frequency`),U(),j(3,`bx-radio`,82),OR(),U(),j(4,`bx-radio`,83),OR(),U(),j(5,`bx-radio`,84),OR(),U(),j(6,`output`),Te(7),U(),j(8,`button`,53),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.frequency.reset())}),Te(9,`Reset frequency`),U()()}if(a&2){let t=F$1(2);D(3),ae(`formControl`,t.frequency),LR(),D(),ae(`formControl`,t.frequency),LR(),D(),ae(`formControl`,t.frequency),LR(),D(2),gr(`Selected: `,t.frequency.value)}}function yo(a,r){a&1&&Ve$1(0,`app-search-examples`)}function vo(a,r){a&1&&Ve$1(0,`app-form-examples`,47)}function ho(a,r){if(a&1){let t=hr();j(0,`div`,46)(1,`label`,85),Te(2,`Volume`),U(),j(3,`input`,86),OR(),U(),j(4,`output`),Te(5),U(),j(6,`button`,53),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.volume.setValue(50))}),Te(7,`Reset volume`),U(),j(8,`label`,87),Te(9,`Unavailable range`),U(),Ve$1(10,`input`,88),U()}if(a&2){let t=F$1(2);D(3),ae(`formControl`,t.volume),LR(),D(2),gr(``,t.volume.value,`%`)}}function xo(a,r){if(a&1&&(j(0,`div`,45)(1,`bx-slide-toggle`,89),OR(),U(),j(2,`bx-slide-toggle`,74),OR(),U(),j(3,`output`),Te(4),U()()),a&2){let t=F$1(2);D(),ae(`formControl`,t.enabled),LR(),D(),ae(`formControl`,t.disabledCheck),LR(),D(2),gr(`Notifications are `,t.enabled.value?`enabled`:`disabled`,`.`)}}function fo(a,r){if(a&1&&(j(0,`bx-error`,92),Te(1),U()),a&2){let t=F$1(3);D(),je$1(t.fieldError())}}function So(a,r){if(a&1){let t=hr();j(0,`div`,46)(1,`bx-form-field`,90)(2,`span`,76)(3,`input`,91),ve$1(`input`,function(o){bn(t);let c=F$1(2);return vn(c.updateField(o))})(`blur`,function(){bn(t);let o=F$1(2);return vn(o.showError.set(!0))}),U()(),oe(4,fo,2,1,`bx-error`,92),U(),j(5,`button`,78),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.showError.set(!0))}),Te(6,`Validate reference`),U()()}if(a&2){let t=F$1(2);D(3),ae(`value`,t.fieldValue()),H(`aria-invalid`,!!t.fieldError())(`aria-describedby`,t.fieldError()?`custom-error`:null),D(),ie(t.fieldError()?4:-1)}}function Co(a,r){if(a&1&&(j(0,`p`),Te(1,`Keep related information together while showing one panel at a time.`),U(),j(2,`bx-input-field`,99),OR(),U()),a&2){let t=F$1(3);D(2),ae(`formControl`,t.tabNote),LR()}}function wo(a,r){a&1&&(j(0,`p`),Te(1,`Headers support arrow keys, Home and End. Panel content is created only when selected.`),U())}function Eo(a,r){a&1&&(j(0,`bx-tab`,97)(1,`p`),Te(2,`No recent project activity.`),U()())}function ko(a,r){if(a&1){let t=hr();j(0,`div`,45)(1,`bx-tabs`,93),MS(`selectedValueChange`,function(o){bn(t);let c=F$1(2);return k1(c.selectedTab,o)||(c.selectedTab=o),vn(o)}),j(2,`bx-tab`,94),aS(3,Co,3,1,`ng-template`,95),U(),j(4,`bx-tab`,96),aS(5,wo,2,0,`ng-template`,95),U(),oe(6,Eo,3,0,`bx-tab`,97),Ve$1(7,`bx-tab`,98),U(),j(8,`div`,50)(9,`button`,78),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.tabsVariant.set(o.tabsVariant()===`segmented`?`underline`:`segmented`))}),Te(10,` Underline appearance `),U(),j(11,`button`,78),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.detailsDisabled.set(!o.detailsDisabled()))}),Te(12,` Disable details `),U(),j(13,`button`,78),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.showActivity.set(!o.showActivity()))}),Te(14,` Show activity `),U()(),j(15,`output`),Te(16),U()()}if(a&2){let t=F$1(2);D(),ae(`variant`,t.tabsVariant()),kS(`selectedValue`,t.selectedTab),D(3),ae(`disabled`,t.detailsDisabled()),D(2),ie(t.showActivity()?6:-1),D(),ae(`disabled`,!0),D(2),H(`aria-pressed`,t.tabsVariant()===`underline`),D(2),H(`aria-pressed`,t.detailsDisabled()),D(2),H(`aria-pressed`,t.showActivity()),D(3),gr(`Selected: `,t.selectedTab())}}function To(a,r){a&1&&Ve$1(0,`app-menu-shortcut-examples`)}function Mo(a,r){a&1&&Ve$1(0,`app-menu-shortcut-examples`)}function Po(a,r){a&1&&(j(0,`div`,45),Ve$1(1,`bx-tooltip`,100),j(2,`p`),Te(3,`Standalone tooltip content. Use the trigger directive for positioned help.`),U(),j(4,`a`,101),Te(5,`Try the tooltip trigger`),U()())}function Do(a,r){if(a&1){let t=hr();j(0,`div`,45)(1,`div`,50)(2,`button`,102),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.activate(`Saved`))}),Te(3,` Save project`),U(),j(4,`button`,103),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.activate(`Normal tap activated`))}),Te(5,` Hold for a hint`),U(),j(6,`button`,104),Ve$1(7,`bx-icon`,105),U()(),j(8,`p`),Te(9,` Hover with a mouse or use keyboard focus for hints. On touch screens, Save project activates immediately, Hold for a hint supports a long press, and the information button opens help on tap. `),U()()}}function No(a,r){if(a&1){let t=hr();j(0,`bx-menu`)(1,`bx-menu-item`,108),ve$1(`action`,function(){bn(t),F$1();let o=Ya$1(2);return F$1(2).activate(`Project duplicated`),vn(o.close())}),U(),j(2,`bx-menu-item`,109),ve$1(`action`,function(){bn(t),F$1();let o=Ya$1(2);return F$1(2).activate(`Project archived`),vn(o.close())}),U(),j(3,`bx-menu-item`,110),ve$1(`action`,function(){bn(t),F$1();let o=Ya$1(2);return F$1(2).activate(`Delete requested`),vn(o.close())}),U()()}a&2&&(D(3),ae(`danger`,!0))}function Io(a,r){if(a&1&&(j(0,`div`,45)(1,`button`,106,0),Te(3,` Project actions `),Ve$1(4,`bx-icon`,107),U(),aS(5,No,4,1,`ng-template`,null,1,xb),j(7,`output`),Te(8),U(),j(9,`p`),Te(10,`Open, close, or reopen while the menu fades. Its contents keep their full size throughout.`),U()()),a&2){let t=Ya$1(2),e=Ya$1(6);D(),ae(`bxDropdown`,e),D(7),gr(`Transition: `,t.state())}}function Oo(a,r){if(a&1){let t=hr();j(0,`bx-menu`)(1,`bx-menu-item`,112),ve$1(`action`,function(){bn(t);let o=F$1(3);return vn(o.activate(`Selection copied`))}),U(),j(2,`bx-menu-item`,113),ve$1(`action`,function(){bn(t);let o=F$1(3);return vn(o.activate(`Selection archived`))}),U()()}}function Vo(a,r){if(a&1){let t=hr();j(0,`div`,45)(1,`div`,111),Te(2,` Right-click, touch and hold, or focus here and press Shift + F10. `),U(),j(3,`button`,78),ve$1(`click`,function(o){bn(t);let c=F$1(2);return vn(c.openContextMenu(o))}),Te(4,`Open actions`),U(),aS(5,Oo,3,0,`ng-template`,null,2,xb),j(7,`p`),Te(8,`Menu rows keep their hover and focus feedback inside the opaque panel.`),U()()}if(a&2){let t=Ya$1(6);D(),ae(`bxContextMenu`,t)}}function zo(a,r){a&1&&(j(0,`div`,45),Ve$1(1,`bx-breadcrumbs`,114),j(2,`p`),Te(3,`This trail comes from the current route metadata. Select Components to navigate back.`),U(),j(4,`a`,115),Te(5,`Navigate to Button`),U()()),a&2&&(D(),ae(`minimumBreadcrumbs`,1))}function Wo(a,r){a&1&&(j(0,`div`,45)(1,`div`,116),Ve$1(2,`bx-icon`,117)(3,`bx-icon`,118)(4,`bx-icon`,119)(5,`bx-icon`,120)(6,`bx-icon`,121),U(),j(7,`a`,122),Te(8,`Browse the searchable icon catalog`),U()()),a&2&&(D(2),ae(`decorative`,!1))}function Ro(a,r){if(a&1){let t=hr();j(0,`bx-modal-banner`,125),ve$1(`close`,function(){bn(t);let o=F$1(3);return o.bannerVisible.set(!1),vn(o.activate(`Banner dismissed`))}),U()}a&2&&ae(`header`,O1(3,Ma,A1(2,Ta)))(`showCloseButton`,!0)}function Lo(a,r){if(a&1){let t=hr();j(0,`button`,78),ve$1(`click`,function(){bn(t);let o=F$1(3);return vn(o.bannerVisible.set(!0))}),Te(1,`Restore banner`),U()}}function Ao(a,r){if(a&1){let t=hr();j(0,`div`,48),oe(1,Ro,1,5,`bx-modal-banner`,123)(2,Lo,2,0,`button`,124),j(3,`button`,51),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.openModal())}),Te(4,`See banner in a dialog`),U()()}if(a&2){let t=F$1(2);D(),ie(t.bannerVisible()?1:2)}}function Bo(a,r){if(a&1){let t=hr();j(0,`div`,45)(1,`div`,50)(2,`button`,55),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.notify(`success`))}),Te(3,`Success`),U(),j(4,`button`,126),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.notify(`info`))}),Te(5,`Information`),U(),j(6,`button`,56),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.notify(`warn`))}),Te(7,`Warning`),U(),j(8,`button`,57),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.notify(`danger`))}),Te(9,`Error`),U()(),j(10,`p`),Te(11,`The toast host manages the progress indicator, dismiss action, pause and cleanup.`),U(),j(12,`a`,127),Te(13,`Open the full toast configurator`),U()()}}function Fo(a,r){if(a&1){let t=hr();j(0,`div`,45)(1,`div`,50)(2,`button`,55),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.notify(`success`))}),Te(3,`Show success`),U(),j(4,`button`,126),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.notify(`info`))}),Te(5,`Show information`),U(),j(6,`button`,56),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.notify(`warn`))}),Te(7,`Show warning`),U(),j(8,`button`,57),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.notify(`danger`))}),Te(9,`Show error`),U()(),j(10,`p`),Te(11,`Semantic colors remain tied to the active Blocks palette.`),U()()}}function jo(a,r){if(a&1){let t=hr();j(0,`section`,49),Ve$1(1,`bx-icon`,128),j(2,`h3`),Te(3,`A custom Blocks surface`),U(),j(4,`p`),Te(5,`Material, blur, tint, lighting and motion follow the same global configuration as the controls around it.`),U(),j(6,`bx-checkbox`,129),MS(`checkedChange`,function(o){bn(t);let c=F$1(2);return k1(c.surfaceEmission,o)||(c.surfaceEmission=o),vn(o)}),U(),j(7,`button`,130),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.activate(`Custom surface action`))}),Te(8,` Try an action `),U(),j(9,`p`),Te(10,`Hover, keyboard focus and press retain local feedback. Enable emission to add the themed light source.`),U()()}if(a&2){let t=F$1(2);D(6),kS(`checked`,t.surfaceEmission),D(),ae(`surfaceEffects`,!1)(`bxSurfaceEmission`,t.surfaceEmission()?void 0:!1)}}function qo(a,r){if(a&1){let t=hr();j(0,`button`,78),ve$1(`click`,function(){bn(t);let o=F$1(3);return vn(o.openModal(`left`))}),Te(1,`Open on the left`),U()}}function Ho(a,r){if(a&1){let t=hr();j(0,`div`,45)(1,`div`,50)(2,`button`,51),ve$1(`click`,function(){bn(t);let o=F$1(2);return vn(o.openModal())}),Te(3),U(),oe(4,qo,2,0,`button`,124),U(),j(5,`p`),Te(6,`Try editing, saving, pressing Escape, and dismissing through the backdrop. This is the actual service-created component.`),U(),j(7,`a`,131),Te(8,`Open the full modal configurator`),U()()}if(a&2){let t=F$1(2);D(3),gr(`Open `,t.entry().title.toLowerCase()),D(),ie(t.entry().id===`modal-side`?4:-1)}}function Uo(a,r){if(a&1&&(j(0,`div`,10),oe(1,Ia,1,0,`app-virtual-collection-examples`)(2,Oa,1,0,`app-resize-handle-examples`)(3,Va,1,0,`app-side-panel-examples`)(4,za,1,0,`app-infinite-scroll-examples`)(5,Wa,1,0,`app-essentials-examples`,20)(6,Ra,1,0,`app-essentials-examples`,21)(7,La,1,0,`app-essentials-examples`,22)(8,Aa,1,0,`app-essentials-examples`,23)(9,Ba,1,0,`app-essentials-examples`,24)(10,Fa,1,0,`app-essentials-examples`,25)(11,ja,1,0,`app-essentials-examples`,26)(12,qa,1,0,`app-essentials-examples`,27)(13,Ha,1,0,`app-essentials-examples`,28)(14,Ua,1,0,`app-page-examples`)(15,Ga,1,0,`app-essentials-examples`,29)(16,Ka,1,0,`app-essentials-examples`,30)(17,Xa,1,0,`app-essentials-examples`,31)(18,Qa,1,0,`app-tag-examples`)(19,Ya,1,0,`app-truncation-examples`)(20,Za,1,0,`app-form-examples`,32)(21,Ja,1,0,`app-form-examples`,33)(22,$a,1,0,`app-form-examples`,34)(23,eo,1,0,`app-form-examples`,35)(24,to,1,0,`app-form-examples`,36)(25,no,1,0,`app-form-examples`,37)(26,io,1,0,`app-form-examples`,38)(27,ao,1,0,`app-form-examples`,39)(28,oo,1,0,`app-form-examples`,40)(29,ro,1,0,`app-form-examples`,41)(30,lo,1,0,`app-form-examples`,42)(31,so,1,0,`app-form-examples`,43)(32,co,1,0,`app-form-examples`,44)(33,po,26,3,`div`,45)(34,mo,17,7,`div`,45)(35,uo,9,10,`div`,45)(36,go,8,5,`div`,46)(37,bo,6,11,`div`,46)(38,_o,10,4,`fieldset`,45)(39,yo,1,0,`app-search-examples`)(40,vo,1,0,`app-form-examples`,47)(41,ho,11,2,`div`,46)(42,xo,5,3,`div`,45)(43,So,7,4,`div`,46)(44,ko,17,9,`div`,45)(45,To,1,0,`app-menu-shortcut-examples`)(46,Mo,1,0,`app-menu-shortcut-examples`)(47,Po,6,0,`div`,45)(48,Do,10,0,`div`,45)(49,Io,11,2,`div`,45)(50,Vo,9,1,`div`,45)(51,zo,6,1,`div`,45)(52,Wo,9,1,`div`,45)(53,Ao,5,1,`div`,48)(54,Bo,14,0,`div`,45)(55,Fo,12,0,`div`,45)(56,jo,11,3,`section`,49)(57,Ho,9,2,`div`,45),U()),a&2){let t,e=F$1();D(),ie((t=e.entry().id)===`virtual-collection`?1:t===`resize-handle`?2:t===`side-panel`?3:t===`infinite-scroll`?4:t===`divider`?5:t===`popover`?6:t===`skeleton`?7:t===`autocomplete`?8:t===`chip`?9:t===`accordion`?10:t===`collapsible`?11:t===`alert`?12:t===`card`?13:t===`page-container`?14:t===`container`?15:t===`stack`?16:t===`grid`?17:t===`tag`?18:t===`truncate`?19:t===`signal-forms`?20:t===`radio-group`?21:t===`multi-select`?22:t===`load-more`?23:t===`loading-spinner`?24:t===`loading-indicator`?25:t===`progress-bar`?26:t===`button-loading`?27:t===`range-slider`?28:t===`hint`?29:t===`prefix`?30:t===`suffix`?31:t===`native-control`?32:t===`button`?33:t===`checkbox-indicator`?34:t===`checkbox`?35:t===`form-field`?36:t===`input-field`?37:t===`radio`?38:t===`search-input`?39:t===`select`?40:t===`slider`?41:t===`slide-toggle`?42:t===`error`?43:t===`tabs`?44:t===`menu`?45:t===`menu-item`?46:t===`tooltip`?47:t===`tooltip-directive`?48:t===`dropdown`?49:t===`context-menu`?50:t===`breadcrumbs`?51:t===`icon`?52:t===`modal-banner`?53:t===`toast-core`?54:t===`simple-toast`?55:t===`surface`?56:57)}}var ai=class a{activatedRoute=p(jr);modalService=p(ve);toastrService=p(Be);routeData=cY(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});contextMenu=er(Kf);entry=v(()=>e.find(r=>r.id===this.routeData().componentId)??e[0]);count=_(0);status=_(`Ready to try.`);fieldValue=_(``);showError=_(!1);surfaceEmission=_(!1);fieldError=v(()=>this.showError()&&this.fieldValue().trim().length<3?`Enter at least three characters.`:void 0);name=new hk(`Blocks workspace`,{nonNullable:!0,validators:_s.required});email=new hk(``,{nonNullable:!0,validators:_s.email});volume=new hk(50,{nonNullable:!0});quantity=new hk(3,{nonNullable:!0});checked=new hk(!0,{nonNullable:!0});secondChecked=new hk(!1,{nonNullable:!0});disabledCheck=new hk({value:!1,disabled:!0},{nonNullable:!0});frequency=new hk(`weekly`,{nonNullable:!0});destination=new hk(`skopje`,{nonNullable:!0});enabled=new hk(!0,{nonNullable:!0});bannerVisible=_(!0);selectedTab=_(`overview`);tabsVariant=_(`segmented`);detailsDisabled=_(!1);showActivity=_(!0);tabNote=new hk(``,{nonNullable:!0});options=[{label:`Skopje`,value:`skopje`},{label:`Ohrid`,value:`ohrid`},{label:`Bitola`,value:`bitola`},{label:`Unavailable destination`,value:`unavailable`,disabled:!0}];activate(r){this.count.update(t=>t+1),this.status.set(`${r} \xB7 action ${this.count()}`)}updateField(r){this.fieldValue.set(r.target.value)}openContextMenu(r){r.preventDefault();let t=r.currentTarget.getBoundingClientRect();this.contextMenu()?.open(new MouseEvent(`contextmenu`,{clientX:t.left+16,clientY:t.bottom+4}))}openModal(r){let t=r??(this.entry().id===`modal-side`?`right`:this.entry().id===`modal-bottom-sheet`?`bottom-sheet`:`center`);this.modalService.open(et,{data:{title:this.entry().title,description:`Edit the project name. The header, content, footer, backdrop and close behavior use the existing Blocks modal composition.`},header:{text:this.entry().title},style:{layout:t,hasBackdrop:!0,animate:!0,showCloseButton:!0}}).afterClosed().subscribe(o=>this.status.set(o.state===`confirm`?`Saved: ${o.data}`:`Dialog dismissed.`))}notify(r){let t={title:r===`success`?`Settings saved`:r===`warn`?`Review needed`:r===`danger`?`Action failed`:`Workspace update`,message:`This notification follows the application theme and appearance settings.`,durationInMs:4500};switch(r){case`success`:this.toastrService.queueSuccess(t);break;case`info`:this.toastrService.queueInfo(t);break;case`warn`:this.toastrService.queueWarning(t);break;case`danger`:this.toastrService.queueDanger(t)}this.status.set(`${r} notification queued.`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=V$1({type:a,selectors:[[`app-component-demo`]],viewQuery:function(t,e){t&1&&Mn(e.contextMenu,Kf,5),t&2&&Mt()},decls:28,vars:7,consts:[[`dropdown`,`bxDropdown`],[`dropdownActions`,``],[`contextActions`,``],[3,`pageDescription`],[1,`component-meta`],[`routerLink`,`/appearance`],[`aria-labelledby`,`preview-heading`,1,`demo-section`],[1,`section-heading`],[`id`,`preview-heading`],[1,`demo-stage`],[`bxSurface`,``,1,`demo-stage`],[`role`,`status`,`aria-live`,`polite`,1,`action-status`],[`aria-labelledby`,`usage-heading`,1,`usage-section`],[`id`,`usage-heading`],[`tabindex`,`0`,`aria-label`,`TypeScript import example`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`tabindex`,`0`,`aria-label`,`HTML usage example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`aria-label`,`Component documentation`,1,`documentation-section`],[3,`path`],[`example`,`divider`],[`example`,`popover`],[`example`,`skeleton`],[`example`,`autocomplete`],[`example`,`chip`],[`example`,`accordion`],[`example`,`collapsible`],[`example`,`alert`],[`example`,`card`],[`example`,`container`],[`example`,`stack`],[`example`,`grid`],[`example`,`signal-forms`],[`example`,`radio-group`],[`example`,`multi-select`],[`example`,`load-more`],[`example`,`loading-spinner`],[`example`,`loading-indicator`],[`example`,`progress-bar`],[`example`,`button-loading`],[`example`,`range-slider`],[`example`,`hint`],[`example`,`prefix`],[`example`,`suffix`],[`example`,`native-control`],[1,`demo-stack`],[1,`demo-stack`,`control-width`],[`example`,`select`],[1,`demo-stack`,`banner-preview`],[`bxSurface`,``,1,`custom-surface`],[1,`demo-row`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`accent`,3,`click`],[`type`,`button`,`bx-button`,``,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`disabled`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`fab`,`aria-label`,`Add item`,3,`click`],[`name`,`plus`],[`type`,`button`,`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Close example`,3,`click`],[`name`,`x`,`size`,`20`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`outlined`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`surfaceEffects`],[`label`,`Checked state`,3,`formControl`],[`label`,`Partial state`,3,`formControl`],[3,`checked`,`indeterminate`],[3,`checked`],[3,`indeterminate`],[`label`,`Receive product updates`,3,`formControl`],[`label`,`Include preview features`,3,`formControl`],[`label`,`Partial selection`,3,`indeterminate`],[`label`,`Without emission`,3,`checked`,`emissive`],[`label`,`Read-only selection`,3,`checked`,`readOnly`],[`label`,`Unavailable setting`,3,`formControl`],[`label`,`Project name`,`forId`,`field-preview`,3,`required`,`error`],[`bxSurface`,``,1,`native-control-surface`],[`id`,`field-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`label`,`Project name`,3,`errorMessages`,`formControl`],[`label`,`Email address`,`type`,`email`,3,`errorMessages`,`formControl`],[`label`,`Team members`,`type`,`number`,3,`min`,`max`,`formControl`],[`label`,`Daily summary`,`name`,`frequency-demo`,`value`,`daily`,3,`formControl`],[`label`,`Weekly summary`,`name`,`frequency-demo`,`value`,`weekly`,3,`formControl`],[`label`,`Only important updates`,`name`,`frequency-demo`,`value`,`important`,3,`formControl`],[`for`,`volume-demo`],[`bxSlider`,``,`id`,`volume-demo`,`type`,`range`,`min`,`0`,`max`,`100`,3,`formControl`],[`for`,`disabled-volume`],[`bxSlider`,``,`id`,`disabled-volume`,`type`,`range`,`value`,`30`,`disabled`,``],[`label`,`Enable notifications`,`hint`,`Receive updates for important activity.`,3,`formControl`],[`label`,`Reference`,`forId`,`error-preview`],[`id`,`error-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`id`,`custom-error`],[`ariaLabel`,`Project information`,3,`selectedValueChange`,`variant`,`selectedValue`],[`label`,`Overview`,`value`,`overview`,`icon`,`book-open`],[`bxTabContent`,``],[`label`,`Details`,`value`,`details`,`color`,`accent`,`icon`,`badge-check`,`endIcon`,`chevron-right`,3,`disabled`],[`label`,`Activity`,`value`,`activity`,`color`,`info`,`textColor`,`text-warn`,`highlightColor`,`text-warn`,`contentColor`,`text-info`,`icon`,`activity`],[`label`,`Unavailable`,`value`,`unavailable`,3,`disabled`],[`label`,`Project note`,3,`formControl`],[`text`,`Your changes are saved automatically.`],[`routerLink`,`/components/tooltip-directive`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`Saves the current project`,`placement`,`top`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`An optional hint revealed by touching and holding`,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`tooltip-hold-target`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`icon`,`aria-label`,`More information`,`bxTooltip`,`Appearance settings apply to all components`,`bxTooltipTouch`,`tap`,`placement`,`bottom`],[`name`,`info`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`bxTransition`,`fade`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[`tabindex`,`0`,1,`context-target`,3,`bxContextMenu`],[`label`,`Copy selection`,`icon`,`copy`,3,`action`],[`label`,`Archive selection`,`icon`,`archive`,3,`action`],[3,`minimumBreadcrumbs`],[`routerLink`,`/components/button`],[1,`demo-row`,`icon-row`],[`name`,`sparkles`,`size`,`32`,`color`,`text-accent`,`ariaLabel`,`Highlights`,3,`decorative`],[`name`,`check-circle`,`size`,`32`,`color`,`text-success`],[`name`,`info`,`size`,`32`,`color`,`text-info`,`bgColor`,`auto`],[`name`,`triangle-alert`,`size`,`32`,`color`,`text-warn`],[`name`,`heart`,`size`,`40`,`color`,`text-danger`],[`routerLink`,`/icon-catalog`],[3,`header`,`showCloseButton`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`],[3,`close`,`header`,`showCloseButton`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`routerLink`,`/toastr`],[`name`,`layers`,`size`,`28`],[`label`,`Emit interaction light`,3,`checkedChange`,`checked`],[`type`,`button`,`bx-button`,``,`bxSurface`,``,`variant`,`tonal`,3,`click`,`surfaceEffects`,`bxSurfaceEmission`],[`routerLink`,`/modal`]],template:function(t,e){t&1&&(j(0,`bx-page-container`)(1,`bx-page-header`,3)(2,`div`,4)(3,`code`),Te(4),U(),j(5,`a`,5),Te(6,`Configure appearance globally`),U()()(),j(7,`section`,6)(8,`div`,7)(9,`h2`,8),Te(10,`Interactive example`),U(),j(11,`span`),Te(12,`Uses your active palette`),U()(),oe(13,Pa,2,0,`div`,9)(14,Da,2,0,`div`,9)(15,Na,2,0,`div`,9)(16,Uo,58,1,`div`,10),j(17,`p`,11),Te(18),U()(),j(19,`section`,12)(20,`h2`,13),Te(21,`Quick usage`),U(),j(22,`pre`,14),Ve$1(23,`code`,15),U(),j(24,`pre`,16),Ve$1(25,`code`,17),U()(),j(26,`section`,18),Ve$1(27,`app-readme`,19),U()()),t&2&&(D(),ae(`pageDescription`,e.entry().description),D(3),je$1(e.entry().selector),D(9),ie(e.entry().id===`side-nav`?13:e.entry().id===`top-nav`?14:e.entry().id===`stepper`?15:16),D(5),je$1(e.status()),D(5),ae(`highlight`,`import { `+e.entry().symbol+` } from '`+e.entry().package+`';`),D(2),ae(`highlight`,e.entry().example),D(2),ae(`path`,e.entry().readme))},dependencies:[He,Qe,Ue,$e,bt,fM,Ns,ht,Pp,X,Ge,je,qe,Ze,Ye,Xe,Je,xe,pte,YE,t2,ste,r2,Z$1,Ci$1,ze,ne,Yi$1,Qi$1,$n$1,to$1,V,Wk,Gk,Wf,eM,Kf,Is,Jk,zc,Vc,zt,fn,Ot,F,k],styles:[`
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
  gap: 1rem;
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
  margin-bottom: 2rem;
}
.section-heading[_ngcontent-%COMP%] {
  justify-content: space-between;
  margin-bottom: 1rem;
}
.section-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.8125rem;
}
.demo-stage[_ngcontent-%COMP%] {
  padding: 2rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
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
  gap: 1rem;
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
  margin-bottom: 1rem;
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
  border-radius: 0.5rem;
  background: var(--%NS%bx-bg-surface);
  color: var(--%NS%bx-text-primary);
  padding: 0.75rem;
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
  padding: 2rem;
  border: 1px dashed var(--%NS%bx-border-default);
  border-radius: 0.75rem;
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
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 0.75rem;
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
  margin: 0.75rem 0 0;
}
.usage-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}
.search-results[_ngcontent-%COMP%] {
  margin: 0;
  padding-left: 1.25rem;
  line-height: 1.8;
}
a[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-brand);
  text-underline-offset: 3px;
}
@media (max-width: 640px) {
  .demo-stage[_ngcontent-%COMP%] {
    padding: 1rem;
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
}`]})};export{ai as ComponentDemo};