import{a as dt,i as bt,n as X,r as Z,t as N}from"./chunk-B0vdNpru.js";import{t as Be}from"./chunk-D7gq5vu0.js";import{n as k}from"./chunk-BpRItq3P.js";import{$ as cn,A as ht,B as an,E as to$1,F as Fe,G as nn,I as Kt,J as ne,K as V,L as Ve,P as $e$1,Q as G,R as We,S as oo$1,T as so$1,U as je$1,V as en,W as ln,X as qe$1,Z as Ce$1,_ as je$2,a as Qn$1,c as Us,d as Ys,et as mn,h as fo$1,k as e,n as Go$1,p as ao$1,q as Z$1,s as Ti$1,tt as pn,x as no$1,z as Zt}from"./main-HW2XYL5W.js";import{$i as v,$n as a2,$r as kb,Aa as z1,Ai as qR,Ar as gr,Bi as se,Bt as P,Cr as es,D as E,Da as yo$1,E as De,Er as g,Et as NS,F as Fs,Fn as Xc,Fr as ih,Ft as Oe,Gn as Zc,Gr as je$3,H as Gl,Hn as Ys$1,Ht as PM,I as Ft,Ii as rk,Jr as js,Kr as jf,Mr as hS,Mt as OM,N as Fe$1,Na as zR,Ni as qte,Nt as OS,O as Eb,Oi as q,Pa as zn$1,Sa as yN,Si as p,Sn as Ute,T as Db,Ta as ye,Ti as pM,Tn as Vte,Tt as NM,Ut as PS,Vi as sn,Vr as j1,W as H,Wn as Z$2,Xi as u2,Yn as _M,Zr as k$1,_a as xe$1,aa as vn,an as SM,b as Ck,br as eh,c as AS,ca as wM,cr as bn,ct as Kc,dn as Tn,ea as v0,en as RM,er as aM,et as It,fa as wo$1,ft as LM,ga as xY,gi as ns,hn as U,hr as dp,ii as lM,ji as qr,jr as hM,jt as O1,ka as z,kr as ge,ln as TM,ma as xM,mi as nh,mr as de,mt as Le,na as vM,nr as ae,nt as Jf,oi as li$1,or as bM,p as Bt,pi as mr,pt as LS,q as Hp,qr as jn$1,qt as Qc,ri as l2,rn as Rs,rt as Jk,sn as Se,t as $,tn as RS,tt as Jc,u as At,ua as we$1,ui as mM,un as Te,ur as cM,vn as Uf,vr as eM,wn as Vs,xa as yM,xr as ep,yi as oe,z as Gc,zi as sM,zn as Yc,zt as Ot}from"./chunk-Dt37D5SH.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var Nn=[`Skopje`,`Ohrid`,`Bitola`,`Prilep`,`Tetovo`,`Struga`,`Veles`,`Shtip`,`Kumanovo`,`Gevgelija`,`Kavadarci`,`Resen`,`Krusevo`,`Berovo`,`Debar`,`Strumica`,`Gostivar`,`Kicevo`,`Kratovo`,`Kocani`,`Radovish`,`Negotino`,`Delchevo`,`Vinica`].map(a=>({value:a}));var In=[{label:`1 suggestion`,value:1},{label:`3 suggestions`,value:3},{label:`12 suggestions`,value:12},{label:`All 24 suggestions`,value:24}];var On=[{label:`Primary`,value:`primary`},{label:`Accent`,value:`accent`},{label:`Success`,value:`text-success`},{label:`Info`,value:`text-info`}];var Ce=class a{destroyRef=p(q);query=E(``);matches=v(()=>Nn.filter(r=>r.value.toLowerCase().includes(this.query().toLowerCase())));options=E([]);loading=E(!1);searching=E(!1);error=E(void 0);hasMore=v(()=>this.options().length<this.matches().length);pageSize=E(3);failNext=E(!1);status=E(`Ready`);loadMoreConfig={text:`Load more suggestions`,loadingText:`Loading suggestions`,retryText:`Retry request`,variant:`tonal`,color:`accent`};timer;constructor(){this.destroyRef.onDestroy(()=>clearTimeout(this.timer))}search(r){clearTimeout(this.timer),this.query.set(r),this.error.set(void 0),this.loading.set(!0),this.searching.set(!0),this.status.set(`Replacing suggestions…`),this.timer=setTimeout(()=>{this.options.set(this.matches().slice(0,this.pageSize())),this.loading.set(!1),this.searching.set(!1),this.status.set(`First page ready`)},650)}loadMore(r){if(this.loading())return;this.loading.set(!0),this.error.set(void 0),this.status.set(`Request source: `+r.source);let t=this.failNext()&&r.source!==`retry`;this.failNext.set(!1),this.timer=setTimeout(()=>{t?(this.error.set(`The next page failed. Your results are kept.`),this.status.set(`Failed page retained. Choose Retry request.`)):(this.options.set(this.matches().slice(0,this.options().length+this.pageSize())),this.status.set(r.source===`retry`?`Retry succeeded`:`Page appended`)),this.loading.set(!1)},900)}setPageSize(r){let t=Number(r);this.pageSize.set(Number.isFinite(t)?Math.max(1,Math.min(24,Math.floor(t))):3),this.search(this.query())}static ɵfac=function(t){return new(t||a)};static ɵprov=Z$2({token:a,factory:a.ɵfac})};var ri=()=>({ariaLabel:`Project details`});function li(a,r){a&1&&(U(0,`p`),Te(1,`Full width separator`),H(),Fe$1(2,`bx-divider`)(3,`bx-divider`,7)(4,`bx-divider`,8),U(5,`bx-stack`,9)(6,`span`),Te(7,`Start`),H(),Fe$1(8,`bx-divider`,10),U(9,`span`),Te(10,`End`),H()())}function si(a,r){if(a&1){let t=gr();U(0,`bx-popover`)(1,`bx-stack`)(2,`strong`),Te(3,`Project details`),H(),U(4,`p`),Te(5,`Your changes are saved in this workspace.`),H(),Fe$1(6,`bx-input-field`,13),U(7,`button`,14),xe$1(`click`,function(){At(t),P();let o=ns(2);return Ot(o.close())}),Te(8,`Done`),H()()()}}function ci(a,r){if(a&1&&(U(0,`bx-stack`,11)(1,`button`,12,0),Te(3,` Open details `),H(),hS(4,si,9,0,`ng-template`,null,1,kb),H(),U(6,`p`),Te(7,`Internal actions stay open. Escape, outside click and tabbing out dismiss the panel.`),H()),a&2){let t=ns(5);oe(`wrap`,!0),k$1(),oe(`bxPopover`,t)(`popoverConfig`,j1(3,ri))}}function di(a,r){a&1&&(U(0,`bx-stack`),Fe$1(1,`bx-skeleton`,16)(2,`bx-skeleton`,17)(3,`bx-skeleton`,18),H()),a&2&&(k$1(2),oe(`lines`,3)(`decorative`,!1))}function pi(a,r){a&1&&(U(0,`p`),Te(1,`Loaded content replaces the placeholders without moving the surrounding actions.`),H())}function mi(a,r){if(a&1){let t=gr();U(0,`button`,14),xe$1(`click`,function(){At(t);let o=P();return Ot(o.skeletonVisible.set(!o.skeletonVisible()))}),Te(1,`Toggle loaded content`),H(),U(2,`bx-card`,15),ae(3,di,4,2,`bx-stack`)(4,pi,2,0,`p`),H()}if(a&2){let t=P();k$1(3),se(t.skeletonVisible()?3:4)}}function ui(a,r){if(a&1){let t=gr();U(0,`bx-autocomplete`,19),zR(),xe$1(`queryChange`,function(o){At(t);let c=P();return Ot(c.autocompleteDemoService.search(o))})(`loadMore`,function(o){At(t);let c=P();return Ot(c.autocompleteDemoService.loadMore(o))})(`optionSelected`,function(o){At(t);let c=P();return Ot(c.status.set(`Chose `+o.value))}),H(),U(1,`bx-stack`,20)(2,`button`,21),xe$1(`click`,function(){At(t);let o=P();return Ot(o.autocompleteDemoService.failNext.set(!0))}),Te(3,` Fail next page `),H(),U(4,`button`,22),xe$1(`click`,function(){At(t);let o=P();return Ot(o.autocompleteDemoService.search(``))}),Te(5,` Reload suggestions `),H(),U(6,`bx-checkbox`,23),LS(`checkedChange`,function(o){At(t);let c=P();return O1(c.readOnly,o)||(c.readOnly=o),Ot(o)}),H(),U(7,`bx-select`,24),xe$1(`selectionChange`,function(o){At(t);let c=P();return Ot(c.autocompleteDemoService.setPageSize(o.value))}),H()(),U(8,`output`),Te(9),H(),U(10,`p`),Te(11,` Choose Fail next page, load another page, then Retry request. Existing suggestions remain visible. Small pages show the load-more action; larger pages enable scrolling. Search for an unknown city to see the empty state and keep free text. `),H()}if(a&2){let t=P();oe(`formControl`,t.destination)(`options`,t.autocompleteDemoService.options())(`externalFiltering`,!0)(`searching`,t.autocompleteDemoService.searching())(`loading`,t.autocompleteDemoService.loading())(`hasMore`,t.autocompleteDemoService.hasMore())(`loadError`,t.autocompleteDemoService.error())(`readOnly`,t.readOnly())(`loadMoreConfig`,t.autocompleteDemoService.loadMoreConfig),qR(),k$1(),oe(`wrap`,!0)(`gap`,2),k$1(),oe(`disabled`,t.autocompleteDemoService.loading()||!t.autocompleteDemoService.hasMore()),k$1(2),oe(`disabled`,t.autocompleteDemoService.loading()),k$1(2),PS(`checked`,t.readOnly),k$1(),oe(`clearable`,!1)(`options`,t.pageSizes)(`value`,t.autocompleteDemoService.pageSize()),k$1(2),AS(`Value: `,t.destination.value||`(empty)`,` · `,t.autocompleteDemoService.options().length,` suggestions loaded · `,t.autocompleteDemoService.status(),``,t.autocompleteDemoService.failNext()?` · Next page will fail`:``)}}function gi(a,r){if(a&1){let t=gr();U(0,`bx-chip`,30),xe$1(`removed`,function(){let o=At(t).$implicit,c=P(2);return Ot(c.removeChip(o))})(`activated`,function(){let o=At(t).$implicit,c=P(2);return Ot(c.status.set(`Activated `+o))}),H()}if(a&2){let t=r.$implicit,e=P(2);oe(`label`,t)(`selectable`,!1)(`removable`,!0)(`config`,e.chipConfig)}}function bi(a,r){if(a&1){let t=gr();U(0,`bx-stack`,25)(1,`bx-chip`,26),LS(`selectedChange`,function(o){At(t);let c=P();return O1(c.selected,o)||(c.selected=o),Ot(o)}),H(),jn$1(2,gi,1,4,`bx-chip`,27,es),Fe$1(4,`bx-chip`,28)(5,`bx-chip`,29),H(),U(6,`button`,14),xe$1(`click`,function(){At(t);let o=P();return Ot(o.resetChips())}),Te(7,`Restore chips`),H(),U(8,`output`),Te(9),H()}if(a&2){let t=P();oe(`wrap`,!0)(`gap`,2),k$1(),oe(`config`,t.chipConfig),PS(`selected`,t.selected),k$1(),zn$1(t.removableChips()),k$1(2),oe(`selected`,!0)(`readOnly`,!0)(`removable`,!0),k$1(),oe(`disabled`,!0),k$1(4),mr(`Design selected: `,t.selected())}}function _i(a,r){a&1&&Fe$1(0,`bx-tag`,38),a&2&&oe(`focusable`,!1)}function yi(a,r){if(a&1&&(Te(0),Fe$1(1,`bx-tag`,39)),a&2){let t=r.$implicit;mr(``,t,` `),k$1(),oe(`leadingNumber`,2)(`focusable`,!1)}}function vi(a,r){a&1&&Fe$1(0,`bx-input-field`,40)}function hi(a,r){if(a&1){let t=gr();U(0,`bx-checkbox`,31),LS(`checkedChange`,function(o){At(t);let c=P();return O1(c.multiple,o)||(c.multiple=o),Ot(o)}),H(),U(1,`bx-accordion`,32)(2,`bx-accordion-item`,33)(3,`p`),Te(4,`Your changes are saved in this workspace.`),H(),Fe$1(5,`bx-input-field`,34),H(),U(6,`bx-accordion-item`,35)(7,`p`),Te(8,`Use arrows, Home and End between headings; Enter or Space toggles a section.`),H()(),Fe$1(9,`bx-accordion-item`,36)(10,`bx-accordion-item`,37),H(),hS(11,_i,1,1,`ng-template`,null,2,kb)(13,yi,2,3,`ng-template`,null,3,kb)(15,vi,1,0,`ng-template`,null,4,kb)}if(a&2){let t=ns(12),e=ns(14),o=ns(16),c=P();PS(`checked`,c.multiple),k$1(),oe(`multiple`,c.multiple()),k$1(),oe(`expanded`,!0)(`titleTemplate`,e)(`trailingTemplate`,t),k$1(7),oe(`contentTemplate`,o),k$1(),oe(`disabled`,!0)}}function xi(a,r){if(a&1){let t=gr();U(0,`bx-collapsible`,41),LS(`expandedChange`,function(o){At(t);let c=P();return O1(c.expanded,o)||(c.expanded=o),Ot(o)}),U(1,`p`),Te(2,`Your changes are saved in this workspace.`),H(),Fe$1(3,`bx-input-field`,34),H(),U(4,`button`,14),xe$1(`click`,function(){At(t);let o=P();return Ot(o.expanded.set(!o.expanded()))}),Te(5,`Toggle from application`),H(),U(6,`bx-collapsible`,42)(7,`p`),Te(8,`This content remains accessible while user toggling is prevented.`),H()(),U(9,`output`),Te(10),H()}if(a&2){let t=P();oe(`region`,!0),PS(`expanded`,t.expanded),k$1(6),oe(`expanded`,!0)(`readOnly`,!0),k$1(4),mr(`Expanded: `,t.expanded())}}function fi(a,r){if(a&1&&Fe$1(0,`bx-alert`,43),a&2){let t=r.$implicit;oe(`tone`,t)(`title`,t)}}function Si(a,r){if(a&1){let t=gr();U(0,`button`,47),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.alertVisible.set(!0))}),Te(1,`Restore dismissible banner`),H()}}function Ci(a,r){if(a&1){let t=gr();jn$1(0,fi,1,2,`bx-alert`,43,es),U(2,`bx-alert`,44),LS(`visibleChange`,function(o){At(t);let c=P();return O1(c.alertVisible,o)||(c.alertVisible=o),Ot(o)}),xe$1(`dismissed`,function(){At(t);let o=P();return Ot(o.status.set(`Banner dismissed`))}),Te(3,` Long content and actions wrap inside the available width. `),U(4,`button`,45),xe$1(`click`,function(){At(t);let o=P();return Ot(o.status.set(`Banner action`))}),Te(5,`Review changes`),H()(),ae(6,Si,2,0,`button`,46)}if(a&2){let t=P();zn$1(t.tones),k$1(2),oe(`dismissible`,!0),PS(`visible`,t.alertVisible),k$1(4),se(t.alertVisible()?-1:6)}}function wi(a,r){if(a&1){let t=gr();U(0,`bx-stack`,48)(1,`bx-checkbox`,49),LS(`checkedChange`,function(o){At(t);let c=P();return O1(c.cardClickable,o)||(c.cardClickable=o),Ot(o)}),H(),U(2,`bx-checkbox`,50),LS(`checkedChange`,function(o){At(t);let c=P();return O1(c.cardDisabled,o)||(c.cardDisabled=o),Ot(o)}),H(),U(3,`bx-checkbox`,51),LS(`checkedChange`,function(o){At(t);let c=P();return O1(c.cardReadOnly,o)||(c.cardReadOnly=o),Ot(o)}),H(),U(4,`bx-select`,52),xe$1(`selectionChange`,function(o){At(t);let c=P();return Ot(c.cardHighlight.set(o.value??`accent`))}),H()(),U(5,`bx-grid`,53)(6,`bx-card`,54),LS(`selectedChange`,function(o){At(t);let c=P();return O1(c.cardSelected,o)||(c.cardSelected=o),Ot(o)}),xe$1(`activated`,function(){At(t);let o=P();return Ot(o.status.set(`Workspace activated`))}),U(7,`p`),Te(8,`Press anywhere, or use Enter and Space. Selection emits the chosen token through the shared surface lighting.`),H()(),U(9,`button`,55),xe$1(`activated`,function(){At(t);let o=P();return Ot(o.status.set(`Reports opened`))}),U(10,`p`),Te(11,`A native button card provides a single action without a selected state.`),H()(),U(12,`bx-card`,56)(13,`p`),Te(14,`A disabled card retains its content and selection but cannot be activated or focused.`),H()(),U(15,`bx-card`,57)(16,`p`),Te(17,`Read-only selection remains focusable and keeps its appearance.`),H()(),U(18,`bx-card`,58)(19,`p`),Te(20,`Ordinary cards remain containers for independent actions.`),H(),U(21,`button`,59),xe$1(`click`,function(){At(t);let o=P();return Ot(o.status.set(`Project opened`))}),Te(22,`Open project`),H()()(),U(23,`output`),Te(24),H()}if(a&2){let t=P();oe(`wrap`,!0),k$1(),PS(`checked`,t.cardClickable),k$1(),PS(`checked`,t.cardDisabled),k$1(),PS(`checked`,t.cardReadOnly),k$1(),oe(`options`,t.cardHighlightOptions)(`clearable`,!1)(`value`,t.cardHighlight()),k$1(2),oe(`clickable`,t.cardClickable())(`disabled`,t.cardDisabled())(`readOnly`,t.cardReadOnly())(`highlightColor`,t.cardHighlight()),PS(`selected`,t.cardSelected),k$1(3),oe(`highlightColor`,t.cardHighlight()),k$1(3),oe(`clickable`,!0)(`disabled`,!0)(`selected`,!0),k$1(3),oe(`clickable`,!0)(`readOnly`,!0)(`selected`,!0)(`highlightColor`,t.cardHighlight()),k$1(9),NS(`Workspace selected: `,t.cardSelected(),` · Highlight: `,t.cardHighlight())}}function Ei(a,r){if(a&1){let t=gr();U(0,`bx-container`,5)(1,`bx-stack`)(2,`bx-stack`,60)(3,`h3`),Te(4,`Workspace overview`),H(),U(5,`button`,14),xe$1(`click`,function(){At(t);let o=P();return Ot(o.status.set(`New project requested`))}),Te(6,`New project`),H()(),U(7,`bx-grid`,61)(8,`bx-card`,62)(9,`p`),Te(10,`Your changes are saved in this workspace.`),H(),U(11,`button`,59),xe$1(`click`,function(){At(t);let o=P();return Ot(o.status.set(`Opened project`))}),Te(12,`Open project`),H()(),U(13,`bx-card`,63)(14,`bx-stack`,64),Fe$1(15,`bx-chip`,65),U(16,`p`),Te(17,`Cards and layout share the global material and semantic palette.`),H()()(),U(18,`bx-card`,66)(19,`p`),Te(20,`Resize this page or increase browser zoom to see the grid adapt.`),H()()()()()}a&2&&(k$1(14),oe(`gap`,2),k$1(),oe(`selectable`,!1))}var je=class a{injector=p(ye);autocompleteDemoService=p(Ce);chips=ep(mM);pageSizes=In;selected=E(!1);removableChips=E([`Angular`,`Design`,`Accessibility`]);tones=[`default`,`info`,`danger`,`warning`,`success`];skeletonVisible=E(!0);expanded=E(!1);multiple=E(!1);readOnly=E(!1);alertVisible=E(!0);status=E(`Ready`);destination=new Ck(``);chipConfig={color:`accent`};cardHighlightOptions=On;cardHighlight=E(`accent`);cardClickable=E(!0);cardDisabled=E(!1);cardReadOnly=E(!1);cardSelected=E(!1);example=g.required();constructor(){ge(()=>{this.example()===`autocomplete`&&this.autocompleteDemoService.search(``)})}removeChip(r){let t=this.removableChips().indexOf(r);this.removableChips.update(e=>e.filter(o=>o!==r)),this.status.set(`Removed `+r),Le(()=>{let e=this.chips().slice(1);e[Math.min(t,e.length-1)]?.focus()},{injector:this.injector})}resetChips(){this.removableChips.set([`Angular`,`Design`,`Accessibility`])}static ɵfac=function(t){return new(t||a)};static ɵcmp=z({type:a,selectors:[[`app-essentials-examples`]],viewQuery:function(t,e){t&1&&Tn(e.chips,mM,5),t&2&&It()},hostAttrs:[`data-bx-light-scope`,``],inputs:{example:[1,`example`]},features:[Ft([Ce])],decls:15,vars:2,consts:[[`popover`,`bxPopover`],[`details`,``],[`projectStatus`,``],[`projectHeading`,``],[`lazyContent`,``],[`size`,`full`,`landmark`,`region`,`ariaLabel`,`Workspace content`,1,`container-demo`],[`role`,`status`],[`label`,`Continue`],[`lineStyle`,`dashed`],[`direction`,`horizontal`,`align`,`stretch`],[`orientation`,`vertical`],[`direction`,`horizontal`,3,`wrap`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`bxPopover`,`popoverConfig`],[`label`,`Project note`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`title`,`Project details`],[`shape`,`circle`,`height`,`3rem`],[`label`,`Loading content`,3,`lines`,`decorative`],[`shape`,`rectangle`,`height`,`5rem`],[`label`,`Destination`,`placeholder`,`Type a city or a custom destination`,`loadingText`,`Loading suggestions`,`emptyText`,`No suggestions. Enter your own destination.`,3,`queryChange`,`loadMore`,`optionSelected`,`formControl`,`options`,`externalFiltering`,`searching`,`loading`,`hasMore`,`loadError`,`readOnly`,`loadMoreConfig`],[`direction`,`horizontal`,`align`,`center`,3,`wrap`,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`bx-button`,``,`type`,`button`,`variant`,`text`,3,`click`,`disabled`],[`label`,`Read only`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Page size`,`subscriptSizing`,`dynamic`,1,`autocomplete-page-size`,3,`selectionChange`,`clearable`,`options`,`value`],[`direction`,`horizontal`,3,`wrap`,`gap`],[`label`,`Design`,3,`selectedChange`,`config`,`selected`],[3,`label`,`selectable`,`removable`,`config`],[`label`,`Read only`,3,`selected`,`readOnly`,`removable`],[`label`,`Disabled`,3,`disabled`],[3,`removed`,`activated`,`label`,`selectable`,`removable`,`config`],[`label`,`Allow multiple open panels`,3,`checkedChange`,`checked`],[3,`multiple`],[`title`,`Project details`,3,`expanded`,`titleTemplate`,`trailingTemplate`],[`label`,`Project name`],[`title`,`Keyboard and focus`],[`title`,`Lazy content`,3,`contentTemplate`],[`title`,`Unavailable section`,3,`disabled`],[`text`,`Saved`,`size`,`small`,3,`focusable`],[`size`,`small`,3,`leadingNumber`,`focusable`],[`label`,`Created when opened`],[`title`,`Project details`,3,`expandedChange`,`region`,`expanded`],[`title`,`Read-only open section`,3,`expanded`,`readOnly`],[`message`,`Your changes are saved in this workspace.`,3,`tone`,`title`],[`tone`,`info`,`title`,`Project details`,`dismissLabel`,`Dismiss notification`,`dismissFocusTarget`,`restore-banner`,3,`visibleChange`,`dismissed`,`dismissible`,`visible`],[`type`,`button`,`bx-button`,``,`bxAlertActions`,``,`variant`,`tonal`,3,`click`],[`type`,`button`,`id`,`restore-banner`,`bx-button`,``,`variant`,`tonal`],[`type`,`button`,`id`,`restore-banner`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`direction`,`horizontal`,`align`,`center`,3,`wrap`],[`label`,`Clickable`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Disable selectable card`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Read-only selectable card`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Highlight token`,`subscriptSizing`,`dynamic`,3,`selectionChange`,`options`,`clearable`,`value`],[`minColumnWidth`,`14rem`],[`title`,`Selectable workspace`,`ariaLabel`,`Select workspace`,3,`selectedChange`,`activated`,`clickable`,`disabled`,`readOnly`,`highlightColor`,`selected`],[`type`,`button`,`bx-card`,``,`title`,`Open reports`,`ariaLabel`,`Open reports`,3,`activated`,`highlightColor`],[`title`,`Unavailable workspace`,`ariaLabel`,`Unavailable workspace`,3,`clickable`,`disabled`,`selected`],[`title`,`Fixed workspace`,`ariaLabel`,`Fixed workspace`,3,`clickable`,`readOnly`,`selected`,`highlightColor`],[`title`,`Project details`,`subtitle`,`Content container`],[`type`,`button`,`bx-button`,``,`bxCardFooter`,``,`variant`,`tonal`,3,`click`],[`direction`,`responsive`,`justify`,`between`,`align`,`center`],[`minColumnWidth`,`12rem`],[`title`,`Project details`,`subtitle`,`Outlined surface`],[`title`,`Team activity`,`variant`,`elevated`],[3,`gap`],[`label`,`Ready`,3,`selectable`],[`title`,`Notes`,`variant`,`filled`]],template:function(t,e){if(t&1&&(U(0,`bx-stack`)(1,`p`),Te(2,`Use Appearance to try themes, materials and reduced motion.`),H(),ae(3,li,11,0)(4,ci,8,4)(5,mi,5,1)(6,ui,12,21)(7,bi,10,9)(8,hi,17,7)(9,xi,11,5)(10,Ci,7,3)(11,wi,25,22)(12,Ei,21,2,`bx-container`,5),U(13,`output`,6),Te(14),H()()),t&2){let o;k$1(3),se((o=e.example())===`divider`?3:o===`popover`?4:o===`skeleton`?5:o===`autocomplete`?6:o===`chip`?7:o===`accordion`?8:o===`collapsible`?9:o===`alert`?10:o===`card`?11:12),k$1(11),je$3(e.status())}},dependencies:[Ute,Vte,u2,fo$1,Z$1,Ti$1,no$1,oo$1,cM,pM,hM,mM,Yc,ih,bM,vM,NM,OM,RM,yM,lM],styles:[`
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
}`]})};var Vn=[`mod`,`shift`,`k`];var zn=[`mod`,`k`];var Wn=[`mod`,`shift`,`v`];var Rn={mac:[`command`,`shift`,`d`],windows:[`ctrl`,`shift`,`d`],linux:[`alt`,`shift`,`d`],ios:[`command`,`shift`,`d`],android:[`ctrl`,`shift`,`d`],default:[`mod`,`alt`,`d`]};var Ln=[`mac`,`windows`,`linux`,`ios`,`android`,`default`];var ki=()=>[`command`,`ctrl`,`option`,`shift`];function Ti(a,r){if(a&1){let t=gr();U(0,`bx-menu`,8)(1,`bx-menu-item`,9),xe$1(`action`,function(){At(t);let o=P();return Ot(o.activate(`View opened`))}),H(),U(2,`bx-menu-item`,10),xe$1(`action`,function(){At(t);let o=P();return Ot(o.activate(`Project duplicated`))}),H(),U(3,`bx-menu-item`,11),xe$1(`action`,function(){At(t);let o=P();return Ot(o.activate(`Delete requested`))}),H()()}if(a&2){let t=P();k$1(),oe(`shortcut`,t.viewShortcut)(`disabled`,t.viewDisabled.value),k$1(),oe(`shortcut`,t.duplicateShortcut),k$1(),oe(`danger`,!0)}}function Mi(a,r){if(a&1&&(U(0,`section`,7)(1,`h4`),Te(2),H(),U(3,`p`),Te(4,` Portable: `),U(5,`kbd`),Te(6),H()(),U(7,`p`),Te(8,` OS override: `),U(9,`kbd`),Te(10),H()(),U(11,`p`),Te(12,` Modifiers: `),U(13,`kbd`),Te(14),H()()()),a&2){let t=r.$implicit,e=P();k$1(2),je$3(t==="default"?`Unknown / server`:t),k$1(4),je$3(e.bxShortcutService.resolve(e.openShortcut,t)?.join(` + `)),k$1(4),je$3(e.bxShortcutService.resolve(e.duplicateShortcut,t)?.join(` + `)),k$1(4),je$3(e.bxShortcutService.resolve(j1(4,ki),t)?.join(` + `))}}var qe=class a{bxShortcutService=p(Uf);menu=bn(TM);openShortcut=Vn;sequencePrefix=zn;viewShortcut=Wn;duplicateShortcut=Rn;platforms=Ln;viewDisabled=new Ck(!1,{nonNullable:!0});typing=new Ck(``,{nonNullable:!0});waitingForView=E(!1);status=E(`Ready. Open the menu with its button or keyboard shortcut.`);sequenceTimer;actionCount=0;constructor(){p(q).onDestroy(()=>this.resetSequence())}onKeydown(r){if(this.bxShortcutService.matches(r,this.openShortcut)){r.preventDefault(),this.resetSequence(),this.menu()?.open(!0),this.status.set(`Menu opened by shortcut. Use arrow keys, Enter or Escape.`);return}if(this.bxShortcutService.matches(r,this.sequencePrefix)){r.preventDefault(),this.resetSequence(),this.waitingForView.set(!0),this.sequenceTimer=setTimeout(()=>this.resetSequence(),2e3);return}if(this.waitingForView()){if([`Meta`,`Control`,`Alt`,`Shift`].includes(r.key)||r.repeat)return;let t=this.bxShortcutService.matches(r,`v`);if(this.resetSequence(),t){r.preventDefault(),this.menu()?.open(!0),this.status.set(`Menu opened by sequence.`);return}}!this.viewDisabled.value&&this.bxShortcutService.matches(r,this.viewShortcut)?(r.preventDefault(),this.activate(`View opened`)):this.bxShortcutService.matches(r,this.duplicateShortcut)&&(r.preventDefault(),this.activate(`Project duplicated`))}activate(r){r===`View opened`&&this.viewDisabled.value||(this.resetSequence(),this.status.set(`${r} \xB7 action ${++this.actionCount}`),this.menu()?.close(!0))}resetSequence(){clearTimeout(this.sequenceTimer),this.sequenceTimer=void 0,this.waitingForView.set(!1)}static ɵfac=function(t){return new(t||a)};static ɵcmp=z({type:a,selectors:[[`app-menu-shortcut-examples`]],viewQuery:function(t,e){t&1&&Tn(e.menu,TM,5),t&2&&It()},hostBindings:function(t,e){t&1&&xe$1(`keydown`,function(c){return e.onKeydown(c)},wo$1)(`pointerdown`,function(){return e.resetSequence()},wo$1)(`blur`,function(){return e.resetSequence()},yN)},decls:38,vars:11,consts:[[`actions`,``],[1,`shortcut-demo`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`menuPlacement`,`bottom`,`menuLabel`,`Project actions`,3,`bxMenuTrigger`,`menuHover`],[`role`,`status`],[`label`,`Disable Open view (click and shortcut)`,3,`formControl`],[`label`,`Type here to try the editable-control guard`,3,`formControl`],[1,`platform-previews`],[1,`platform-preview`],[1,`shortcut-menu`],[`label`,`Open view`,`icon`,`external-link`,3,`action`,`shortcut`,`disabled`],[`label`,`Duplicate project`,`icon`,`copy`,3,`action`,`shortcut`],[`label`,`Delete project`,`icon`,`trash-2`,3,`action`,`danger`]],template:function(t,e){if(t&1&&(U(0,`div`,1)(1,`p`)(2,`code`),Te(3,`shortcut`),H(),Te(4,` displays a hint. This example also handles keyboard events using `),U(5,`code`),Te(6,`BxShortcutService.matches()`),H(),Te(7,`.`),H(),U(8,`p`),Te(9,`One lit surface follows enabled rows with pointer or keyboard focus. Navigate quickly to inspect retargeting, including the danger item.`),H(),U(10,`p`),Te(11,`On this device, `),U(12,`code`),Te(13,`mod`),H(),Te(14),H(),U(15,`div`)(16,`button`,2),Te(17),H()(),U(18,`p`),Te(19),H(),U(20,`p`,3),Te(21),H(),hS(22,Ti,4,4,`ng-template`,null,0,kb),U(24,`bx-checkbox`,4),zR(),H(),U(25,`bx-input-field`,5),zR(),H(),U(26,`p`),Te(27,` The Open view shortcut works while this demo is mounted, including when the menu is closed. Shortcuts ignore typing fields, held-key repeats and composition. `),H(),U(28,`h3`),Te(29,`Defaults across platforms`),H(),U(30,`p`),Te(31,` These previews use the same service and definitions. `),U(32,`code`),Te(33,`mod`),H(),Te(34,` avoids repeating OS mappings; explicit overrides are available when bindings differ. `),H(),U(35,`div`,6),jn$1(36,Mi,15,5,`section`,7,es),H()()),t&2){let o=ns(23);k$1(14),NS(` uses `,e.bxShortcutService.resolve(`mod`)?.join(``),` (detected platform: `,e.bxShortcutService.platform(),`).`),k$1(2),oe(`bxMenuTrigger`,o)(`menuHover`,!1),$(`aria-keyshortcuts`,e.bxShortcutService.toAriaKeyshortcuts(e.openShortcut)),k$1(),mr(` Project actions · `,e.bxShortcutService.resolve(e.openShortcut)?.join(` + `),` `),k$1(2),NS(` Press `,e.bxShortcutService.resolve(e.openShortcut)?.join(` + `),` together to open the menu. Or press `,e.bxShortcutService.resolve(e.sequencePrefix)?.join(` + `),`, release the keys, then press V within two seconds. Escape, another key, a pointer press or leaving the window cancels the sequence. `),k$1(2),je$3(e.waitingForView()?`Waiting for V…`:e.status()),k$1(3),oe(`formControl`,e.viewDisabled),qR(),k$1(),oe(`formControl`,e.typing),qR(),k$1(11),zn$1(e.platforms)}},dependencies:[Z$1,Ti$1,no$1,Ute,Vte,u2,eM,Jk,TM],styles:[`
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
}`]})};function Pi(a,r){if(a&1){let t=gr();U(0,`bx-page-footer`)(1,`bx-stack`,11)(2,`button`,12),xe$1(`click`,function(){At(t);let o=P();return Ot(o.result.set(`Footer action completed.`))}),Te(3,`Try footer action`),H(),U(4,`span`,13),Te(5),H()()()}if(a&2){let t=P();k$1(),oe(`gap`,3),k$1(4),je$3(t.result())}}var He=class a{title=E(`Workspace overview`);description=E(`A shared heading and consistent gutters for every page.`);breadcrumbsAfterControl=new Ck(1,{nonNullable:!0});breadcrumbsAfter=xY(this.breadcrumbsAfterControl.valueChanges,{initialValue:this.breadcrumbsAfterControl.value});nesting=E(1);automatic=E(!1);showFooter=E(!0);result=E(`No action yet.`);nestingOptions=[{label:`Root page`,value:0},{label:`One nesting`,value:1},{label:`Two nestings`,value:2}];previewBreadcrumbs=v(()=>[{label:`Components`,route:`/components`},...this.nesting()>=1?[{label:`Layout`,route:`/components/layout`}]:[],...this.nesting()>=2?[{label:`Page container`,route:`/components/layout/page-container`}]:[]]);constructor(){this.breadcrumbsAfterControl.valueChanges.pipe(Ys$1(v0),dp()).subscribe(()=>{let r=this.breadcrumbsAfterControl.value,t=Math.max(0,Math.trunc(Number(r))||0);t!==r&&this.breadcrumbsAfterControl.setValue(t)})}static ɵfac=function(t){return new(t||a)};static ɵcmp=z({type:a,selectors:[[`app-page-examples`]],decls:15,vars:20,consts:[[3,`gap`],[`direction`,`responsive`,3,`gap`],[`label`,`Preview title`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Description`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Preview nesting`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Show breadcrumbs after nesting`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`min`,`formControl`],[`label`,`Use current route breadcrumbs`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Show footer`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`size`,`full`,1,`page-preview`,3,`breadcrumbs`,`breadcrumbsAfter`],[`sectionTitle`,`Primitives`,3,`pageTitle`,`pageDescription`,`autoResolveTitlesFromNavigation`,`headingLevel`],[`title`,`Page content`,`message`,`This section grows naturally with its content. The page keeps one scroll surface and the same responsive gutters.`],[`direction`,`responsive`,`align`,`center`,3,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`role`,`status`]],template:function(t,e){t&1&&(U(0,`bx-stack`,0)(1,`bx-stack`,1)(2,`bx-input-field`,2),zR(),LS(`ngModelChange`,function(c){return O1(e.title,c)||(e.title=c),c}),H(),U(3,`bx-input-field`,3),zR(),LS(`ngModelChange`,function(c){return O1(e.description,c)||(e.description=c),c}),H()(),U(4,`bx-stack`,1)(5,`bx-select`,4),zR(),LS(`ngModelChange`,function(c){return O1(e.nesting,c)||(e.nesting=c),c}),H(),U(6,`bx-input-field`,5),zR(),H()(),U(7,`bx-stack`,1)(8,`bx-slide-toggle`,6),zR(),LS(`ngModelChange`,function(c){return O1(e.automatic,c)||(e.automatic=c),c}),H(),U(9,`bx-slide-toggle`,7),zR(),LS(`ngModelChange`,function(c){return O1(e.showFooter,c)||(e.showFooter=c),c}),H()(),U(10,`bx-page-container`,8),Fe$1(11,`bx-page-header`,9),U(12,`bx-page-content`),Fe$1(13,`bx-alert`,10),H(),ae(14,Pi,6,2,`bx-page-footer`),H()()),t&2&&(oe(`gap`,5),k$1(),oe(`gap`,4),k$1(),PS(`ngModel`,e.title),qR(),k$1(),PS(`ngModel`,e.description),qR(),k$1(),oe(`gap`,4),k$1(),oe(`clearable`,!1)(`options`,e.nestingOptions),PS(`ngModel`,e.nesting),qR(),k$1(),oe(`min`,0)(`formControl`,e.breadcrumbsAfterControl),qR(),k$1(),oe(`gap`,4),k$1(),PS(`ngModel`,e.automatic),qR(),k$1(),PS(`ngModel`,e.showFooter),qR(),k$1(),oe(`breadcrumbs`,e.automatic()?void 0:e.previewBreadcrumbs())(`breadcrumbsAfter`,e.breadcrumbsAfter()),k$1(),oe(`pageTitle`,e.title())(`pageDescription`,e.description())(`autoResolveTitlesFromNavigation`,!1)(`headingLevel`,2),k$1(3),se(e.showFooter()?14:-1))},dependencies:[qte,Vte,a2,Ute,u2,pM,Z$1,no$1,oo$1,ao$1,xM,PM,LM,Vs,yM],styles:[`
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
}`]})};function Di(a,r){if(a&1){let t=gr();U(0,`bx-input-field`,13),zR(),xe$1(`ngModelChange`,function(o){At(t);let c=P();return Ot(c.minimum.set(o))}),H(),U(1,`bx-input-field`,14),zR(),xe$1(`ngModelChange`,function(o){At(t);let c=P();return Ot(c.maximum.set(o))}),H()}if(a&2){let t=P();oe(`min`,0)(`ngModel`,t.minimum()),qR(),k$1(),oe(`min`,0)(`ngModel`,t.maximum()),qR()}}var Ue=class a{edges=[{label:`Right edge (width)`,value:`right`},{label:`Left edge (width)`,value:`left`},{label:`Bottom edge (height)`,value:`bottom`},{label:`Top edge (height)`,value:`top`}];edge=E(`right`);size=E(180);minimum=E(60);maximum=E(280);disableShrink=E(!0);customBounds=E(!1);status=E(`Drag the inner edge, or focus it and use the arrow keys.`);horizontal=v(()=>this.edge()===`left`||this.edge()===`right`);changeEdge(r){this.edge.set(r),this.size.set(180)}record(r,t){this.status.set(`${r.source} resize ${t===`start`?`started`:r.canceled?`canceled`:`completed`} at ${Math.round(r.value)} px.`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=z({type:a,selectors:[[`app-resize-handle-examples`]],decls:22,vars:40,consts:[[`container`,``],[`target`,``],[`handle`,`bxResizeHandle`],[1,`resize-demo-controls`],[`label`,`Resize edge`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`resize-demo-actions`],[`label`,`Prevent shrinking below initial size`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Use explicit pixel limits`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`role`,`status`],[1,`resize-demo-container`],[`aria-label`,`Resizable example surface`,1,`resize-demo-target`],[`bxResizeHandle`,``,1,`resize-demo-handle`,3,`resizeValueChange`,`resizeStart`,`resizeEnd`,`resizeEdge`,`resizeTarget`,`resizeContainer`,`resizeInitialSize`,`resizeMinSize`,`resizeMaxSize`,`resizeDisableShrink`,`resizeLabel`,`resizeValue`],[`type`,`number`,`label`,`Minimum size (px)`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`min`,`ngModel`],[`type`,`number`,`label`,`Maximum size (px)`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`min`,`ngModel`]],template:function(t,e){if(t&1){let o=gr();U(0,`div`,3)(1,`bx-select`,4),zR(),xe$1(`ngModelChange`,function(d){return e.changeEdge(d)}),H(),ae(2,Di,2,4),H(),U(3,`div`,5)(4,`bx-slide-toggle`,6),zR(),xe$1(`ngModelChange`,function(d){return e.disableShrink.set(d)}),H(),U(5,`bx-slide-toggle`,7),zR(),xe$1(`ngModelChange`,function(d){return e.customBounds.set(d)}),H(),U(6,`button`,8),xe$1(`click`,function(){return e.size.set(180)}),Te(7,`Reset to 180 px`),H()(),U(8,`p`,9),Te(9),H(),U(10,`p`),Te(11),H(),U(12,`div`,10,0)(14,`section`,11,1)(16,`p`),Te(17),H(),U(18,`div`,12,2),LS(`resizeValueChange`,function(d){return At(o),O1(e.size,d)||(e.size=d),Ot(d)}),xe$1(`resizeStart`,function(d){return e.record(d,`start`)})(`resizeEnd`,function(d){return e.record(d,`end`)}),H()()(),U(20,`p`),Te(21,`Arrow keys move the edge by 10 px; Shift moves by 50 px. Home and End use the bounds. Escape cancels an active gesture.`),H()}if(t&2){let o=ns(13),c=ns(15),d=ns(19);k$1(),oe(`clearable`,!1)(`options`,e.edges)(`ngModel`,e.edge()),qR(),k$1(),se(e.customBounds()?2:-1),k$1(2),oe(`ngModel`,e.disableShrink()),qR(),k$1(),oe(`ngModel`,e.customBounds()),qR(),k$1(4),je$3(e.status()),k$1(2),RS(``,e.size(),` px · effective minimum `,d.minSize(),` px · effective maximum `,d.maxSize(),` px`),k$1(3),we$1(`width`,e.horizontal()?e.size()+`px`:`100%`)(`height`,e.horizontal()?`100%`:e.size()+`px`),de(`is-horizontal`,e.horizontal())(`is-vertical`,!e.horizontal())(`edge-left`,e.edge()===`left`)(`edge-top`,e.edge()===`top`),k$1(3),mr(`Resize from the `,e.edge(),` edge.`),k$1(),de(`handle-left`,e.edge()===`left`)(`handle-right`,e.edge()===`right`)(`handle-top`,e.edge()===`top`)(`handle-bottom`,e.edge()===`bottom`),oe(`resizeEdge`,e.edge())(`resizeTarget`,c)(`resizeContainer`,o)(`resizeInitialSize`,180)(`resizeMinSize`,e.customBounds()?e.minimum():void 0)(`resizeMaxSize`,e.customBounds()?e.maximum():void 0)(`resizeDisableShrink`,e.disableShrink())(`resizeLabel`,e.horizontal()?`Resize example width`:`Resize example height`),PS(`resizeValue`,e.size)}},dependencies:[qte,Vte,a2,Z$1,no$1,oo$1,ao$1,js],styles:[`
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
}`]})};var we=class a{query=E(``);completedQuery=E(``);results=E([]);loading=E(!1);error=E(void 0);requests=E([]);controller;constructor(){p(q).onDestroy(()=>this.controller?.abort()),this.search(``)}async search(r,t=!1){this.controller?.abort();let e$1=new AbortController;this.controller=e$1,this.query.set(r),this.loading.set(!0),this.error.set(void 0);try{if(await Z(250,e$1.signal),this.record(`Request: ${r||`(all components)`}`),await Z(800,e$1.signal),e$1.signal.aborted)return;if(t)throw new Error(`Simulated request failure`);let o=r.trim().toLocaleLowerCase(),c=e.map(d=>d.title).filter(d=>d.toLocaleLowerCase().includes(o));this.results.set(c),this.completedQuery.set(r),this.record(`Success: ${c.length} results`)}catch{if(e$1.signal.aborted)return;this.error.set({key:`searchError`}),this.record(`Failed: previous results retained; retry the same query`)}finally{this.controller===e$1&&this.loading.set(!1)}}record(r){this.requests.update(t=>[r,...t].slice(0,8))}static ɵfac=function(t){return new(t||a)};static ɵprov=Z$2({token:a,factory:a.ɵfac})};var Ni=()=>({key:`searchLabel`});var Ii=()=>({key:`searchPlaceholder`});var An=()=>({key:`searchLoading`});var Oi=()=>({key:`searchClear`});var Vi=()=>({key:`retry`});function zi(a,r){if(a&1&&(U(0,`li`),Te(1),H()),a&2){let t=r.$implicit;k$1(),je$3(t)}}function Wi(a,r){if(a&1&&(U(0,`li`,11),Te(1),H()),a&2){let t=P(2);k$1(),je$3(t.emptyText())}}function Ri(a,r){if(a&1&&ae(0,Wi,2,1,`li`,11),a&2){let t=P();se(!t.mockSearchStore.loading()&&!t.mockSearchStore.error()?0:-1)}}function Li(a,r){if(a&1&&(U(0,`li`),Te(1),H()),a&2){let t=r.$implicit;k$1(),je$3(t)}}var Ge=class a{demoI18nService=p(N);mockSearchStore=p(we);showLoadingText=E(!1);showLabel=E(!0);compact=E(!1);readOnly=E(!1);disabled=E(!1);emptyText=v(()=>(this.demoI18nService.version(),this.demoI18nService.translate(`searchEmpty`)));retryConfig={variant:`tonal`,color:`accent`};changeLoadingText(r){this.showLoadingText.set(r),r&&!this.mockSearchStore.loading()&&!this.readOnly()&&!this.disabled()&&this.mockSearchStore.search(this.mockSearchStore.query())}static ɵfac=function(t){return new(t||a)};static ɵcmp=z({type:a,selectors:[[`app-search-examples`]],features:[Ft([we,N,{provide:De,useExisting:N}])],decls:22,vars:29,consts:[[1,`search-demo`],[`subscriptSizing`,`dynamic`,3,`search`,`retry`,`label`,`placeholder`,`compact`,`value`,`loading`,`loadError`,`loadingLabel`,`loadingAriaLabel`,`clearLabel`,`retryLabel`,`retryConfig`,`readOnly`,`disabled`],[1,`search-actions`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`label`,`Show label`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Compact`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Show loading text`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Readonly`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Disabled`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`aria-label`,`Search results`,1,`search-results`],[`aria-label`,`Request events`,1,`search-events`],[`role`,`status`]],template:function(t,e){t&1&&(U(0,`div`,0)(1,`bx-search-input`,1),xe$1(`search`,function(c){return e.mockSearchStore.search(c)})(`retry`,function(c){return e.mockSearchStore.search(c)}),H(),U(2,`div`,2)(3,`button`,3),xe$1(`click`,function(){return e.mockSearchStore.search(e.mockSearchStore.query(),!0)}),Te(4,` Fail this search `),H(),U(5,`bx-checkbox`,4),LS(`checkedChange`,function(c){return O1(e.showLabel,c)||(e.showLabel=c),c}),H(),U(6,`bx-checkbox`,5),LS(`checkedChange`,function(c){return O1(e.compact,c)||(e.compact=c),c}),H(),U(7,`bx-checkbox`,6),xe$1(`checkedChange`,function(c){return e.changeLoadingText(c)}),H(),U(8,`bx-checkbox`,7),LS(`checkedChange`,function(c){return O1(e.readOnly,c)||(e.readOnly=c),c}),H(),U(9,`bx-checkbox`,8),LS(`checkedChange`,function(c){return O1(e.disabled,c)||(e.disabled=c),c}),H()(),U(10,`p`),Te(11,` Requests debounce for 250ms and take 800ms. Type quickly to cancel older requests, or enter an unmatched term for empty results. Failure keeps the last successful results. Use Retry request to try the same query again. Enabling Show loading text previews another request. When a label is displayed, compact mode is automatically enabled regardless of the Compact setting. `),H(),U(12,`section`,9)(13,`p`),Te(14),H(),U(15,`ul`),jn$1(16,zi,2,1,`li`,null,es,!1,Ri,1,1),H()(),U(19,`ul`,10),jn$1(20,Li,2,1,`li`,null,Gl),H()()),t&2&&(k$1(),oe(`label`,e.showLabel()?j1(23,Ni):void 0)(`placeholder`,j1(24,Ii))(`compact`,e.compact())(`value`,e.mockSearchStore.query())(`loading`,e.mockSearchStore.loading())(`loadError`,e.mockSearchStore.error())(`loadingLabel`,e.showLoadingText()?j1(25,An):void 0)(`loadingAriaLabel`,j1(26,An))(`clearLabel`,j1(27,Oi))(`retryLabel`,j1(28,Vi))(`retryConfig`,e.retryConfig)(`readOnly`,e.readOnly())(`disabled`,e.disabled()),k$1(2),oe(`disabled`,e.mockSearchStore.loading()||e.disabled()||e.readOnly()),k$1(2),PS(`checked`,e.showLabel),k$1(),PS(`checked`,e.compact),k$1(),oe(`checked`,e.showLoadingText()),k$1(),PS(`checked`,e.readOnly),k$1(),PS(`checked`,e.disabled),k$1(3),$(`aria-busy`,e.mockSearchStore.loading()),k$1(2),NS(`Last completed search: `,e.mockSearchStore.completedQuery()||`all components`,` · `,e.mockSearchStore.results().length,` results`),k$1(2),zn$1(e.mockSearchStore.results()),k$1(4),zn$1(e.mockSearchStore.requests()))},dependencies:[Z$1,Ti$1,qe$1],styles:[`
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
// In your shell: <bx-side-nav />`;var J=class a{languages=dt;version=E(0);language=E(`en`);translate(r){return this.version(),at[this.language()]?.[r]??r}setLanguage(r){r===null||r===this.language()||(this.language.set(r),this.version.update(t=>t+1))}static ɵfac=function(t){return new(t||a)};static ɵprov=Z$2({token:a,factory:a.ɵfac})};function Ai(a,r){if(a&1&&(U(0,`strong`),Te(1),H()),a&2){let t=P(2);k$1(),je$3(t.text().studio)}}function Bi(a,r){if(a&1&&(Fe$1(0,`bx-icon`,17),ae(1,Ai,2,1,`strong`)),a&2){let t=r.$implicit,e=r.mobile;k$1(),se(!t&&!e?1:-1)}}function Fi(a,r){if(a&1&&(U(0,`span`),Te(1),H()),a&2){let t=P(2);k$1(),je$3(t.text().admin)}}function ji(a,r){if(a&1&&(Fe$1(0,`bx-icon`,18),ae(1,Fi,2,1,`span`)),a&2){let t=r.$implicit;k$1(),se(t?-1:1)}}function qi(a,r){if(a&1){let t=gr();U(0,`button`,19),xe$1(`click`,function(o){At(t),P();let c=ns(14);return Ot(c.open(o))}),Te(1),H()}if(a&2){let t=P();k$1(),je$3(t.text().open)}}function Hi(a,r){if(a&1&&(U(0,`span`),Te(1),H(),U(2,`small`,21),Te(3,`↗`),H()),a&2){let t=P().$implicit;k$1(),je$3(t.label)}}function Ui(a,r){if(a&1&&(Fe$1(0,`bx-icon`,20),ae(1,Hi,4,1)),a&2){let t=r.$implicit,e=r.collapsed;oe(`name`,t.icon?.name??`circle`),k$1(),se(e?-1:1)}}var Xe=class a{navigationDemoI18nService=p(J);groups=v(()=>Ke(`/components/side-nav`,this.navigationDemoI18nService));text=v(()=>({right:this.navigationDemoI18nService.translate(`demo.right`),rail:this.navigationDemoI18nService.translate(`demo.rail`),mobile:this.navigationDemoI18nService.translate(`demo.mobile`),inlineMode:this.navigationDemoI18nService.translate(`demo.inlineMode`),search:this.navigationDemoI18nService.translate(`demo.search`),rtl:this.navigationDemoI18nService.translate(`demo.rtl`),custom:this.navigationDemoI18nService.translate(`demo.custom`),height:this.navigationDemoI18nService.translate(`demo.height`),language:this.navigationDemoI18nService.translate(`demo.language`),instructions:this.navigationDemoI18nService.translate(`demo.instructions`),studio:this.navigationDemoI18nService.translate(`demo.studio`),admin:this.navigationDemoI18nService.translate(`demo.admin`),title:this.navigationDemoI18nService.translate(`demo.title`),description:this.navigationDemoI18nService.translate(`demo.description`),open:this.navigationDemoI18nService.translate(`demo.open`),keyboard:this.navigationDemoI18nService.translate(`demo.keyboard`),routes:this.navigationDemoI18nService.translate(`demo.routes`)}));routeExample=Fn;right=E(!1);collapsed=E(!1);mobile=E(!1);searchable=E(!0);rtl=E(!1);custom=E(!1);height=E(420);selected=E(void 0);selection=v(()=>{let r=this.selected();return r?`${this.navigationDemoI18nService.translate(`nav.${r.id}`)} \xB7 ${r.id}`:this.navigationDemoI18nService.translate(`demo.select`)});config=v(()=>({position:`inline`,showMobileTrigger:!1,side:this.right()?`right`:`left`,mobile:this.mobile(),searchable:this.searchable(),persistenceKey:`blocks.side-nav.demo.v1`,ariaLabel:{key:`nav.name`},searchLabel:{key:`nav.search`},searchPlaceholder:{key:`nav.placeholder`},clearSearchLabel:{key:`nav.clear`},emptyText:{key:`nav.empty`},openLabel:{key:`nav.open`},closeLabel:{key:`nav.close`},collapseLabel:{key:`nav.collapse`},expandLabel:{key:`nav.expand`},submenuLabel:{key:`nav.submenu`},resultLabel:{key:`nav.result`},backLabel:{key:`nav.back`},pathLabel:{key:`nav.path`}}));select(r){this.selected.set(r)}static ɵfac=function(t){return new(t||a)};static ɵcmp=z({type:a,selectors:[[`app-side-nav-examples`]],features:[Ft([J,{provide:De,useExisting:J}])],decls:36,vars:38,consts:[[`nav`,``],[`customItem`,``],[1,`demo-language-row`],[`subscriptSizing`,`dynamic`,3,`selectionChange`,`label`,`clearable`,`options`,`value`],[1,`nav-demo-controls`],[3,`checkedChange`,`label`,`checked`],[`type`,`number`,3,`valueChange`,`label`,`min`,`max`,`value`],[1,`nav-demo-frame`],[3,`collapsedChange`,`itemSelected`,`config`,`groups`,`itemTemplate`,`collapsed`],[`bxSideNavHeader`,``],[`bxSideNavFooter`,``],[1,`nav-demo-content`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`],[`aria-live`,`polite`],[1,`nav-route-example`],[`tabindex`,`0`,`aria-label`,`TypeScript navigation configuration`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`name`,`blocks`],[`name`,`circle-user-round`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`size`,`20`,3,`name`],[`aria-hidden`,`true`]],template:function(t,e){if(t&1){let o=gr();U(0,`div`,2)(1,`bx-select`,3),xe$1(`selectionChange`,function(d){return e.navigationDemoI18nService.setLanguage(d.value)}),H()(),U(2,`div`,4)(3,`bx-checkbox`,5),LS(`checkedChange`,function(d){return At(o),O1(e.right,d)||(e.right=d),Ot(d)}),H(),U(4,`bx-checkbox`,5),xe$1(`checkedChange`,function(d){return e.collapsed.set(d)}),H(),U(5,`bx-checkbox`,5),LS(`checkedChange`,function(d){return At(o),O1(e.mobile,d)||(e.mobile=d),Ot(d)}),H(),U(6,`bx-checkbox`,5),LS(`checkedChange`,function(d){return At(o),O1(e.searchable,d)||(e.searchable=d),Ot(d)}),H(),U(7,`bx-checkbox`,5),LS(`checkedChange`,function(d){return At(o),O1(e.rtl,d)||(e.rtl=d),Ot(d)}),H(),U(8,`bx-checkbox`,5),LS(`checkedChange`,function(d){return At(o),O1(e.custom,d)||(e.custom=d),Ot(d)}),H(),U(9,`bx-input-field`,6),LS(`valueChange`,function(d){return At(o),O1(e.height,d)||(e.height=d),Ot(d)}),H()(),U(10,`p`),Te(11),H(),U(12,`div`,7)(13,`bx-side-nav`,8,0),LS(`collapsedChange`,function(d){return At(o),O1(e.collapsed,d)||(e.collapsed=d),Ot(d)}),xe$1(`itemSelected`,function(d){return e.select(d)}),hS(15,Bi,2,1,`ng-template`,9)(16,ji,2,1,`ng-template`,10),H(),U(17,`div`,11)(18,`h3`),Te(19),H(),U(20,`p`),Te(21),H(),ae(22,qi,2,1,`button`,12),U(23,`output`,13),Te(24),H(),U(25,`p`),Te(26),H(),U(27,`p`),Te(28),H()()(),hS(29,Ui,2,2,`ng-template`,null,1,kb),U(31,`details`,14)(32,`summary`),Te(33),H(),U(34,`pre`,15),Fe$1(35,`code`,16),H()()}if(t&2){let o=ns(14),c=ns(30);k$1(),oe(`label`,e.text().language)(`clearable`,!1)(`options`,e.navigationDemoI18nService.languages)(`value`,e.navigationDemoI18nService.language()),k$1(2),oe(`label`,e.text().right),PS(`checked`,e.right),k$1(),oe(`label`,e.text().rail)(`checked`,e.collapsed()),k$1(),oe(`label`,e.text().mobile),PS(`checked`,e.mobile),k$1(),oe(`label`,e.text().search),PS(`checked`,e.searchable),k$1(),oe(`label`,e.text().rtl),PS(`checked`,e.rtl),k$1(),oe(`label`,e.text().custom),PS(`checked`,e.custom),k$1(),oe(`label`,e.text().height)(`min`,200)(`max`,700),PS(`value`,e.height),k$1(2),je$3(e.text().instructions),k$1(),we$1(`--%NS%bx-side-nav-height`,e.height()+`px`),de(`right`,e.right()),$(`dir`,e.rtl()?`rtl`:`ltr`),k$1(),oe(`config`,e.config())(`groups`,e.groups())(`itemTemplate`,e.custom()?c:void 0),PS(`collapsed`,e.collapsed),k$1(6),je$3(e.text().title),k$1(2),je$3(e.text().description),k$1(),se(o.isMobile()?22:-1),k$1(2),je$3(e.selection()),k$1(2),je$3(e.text().keyboard),k$1(2),je$3(e.text().inlineMode),k$1(5),je$3(e.text().routes),k$1(2),oe(`highlight`,e.routeExample)}},dependencies:[ht,Ve,en,Zt,Z$1,Ti$1,no$1,oo$1,vn],styles:[`
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
}`]})};var Gi=()=>({name:`info`,color:`text-info`,bgColor:`auto`});var Qe=class a{panelBreakpoints={"2xl":`push`};placements=[{label:`Left`,value:`left`},{label:`Right`,value:`right`}];opened=E(!1);contained=E(!0);backdrop=E(!1);placement=E(`right`);panelWidth=E(320);note=E(`This content survives closing the panel.`);clicks=E(0);width=v(()=>Math.max(240,Math.min(640,Number(this.panelWidth())||320)));resizeWidth(r){let t=Number(r);Number.isFinite(t)&&this.panelWidth.set(t)}pageAction(){this.clicks.update(r=>r+1)}static ɵfac=function(t){return new(t||a)};static ɵcmp=z({type:a,selectors:[[`app-side-panel-examples`]],decls:27,vars:24,consts:[[1,`panel-demo-controls`],[`label`,`Placement`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Panel width (px)`,`type`,`number`,3,`ngModelChange`,`min`,`max`,`ngModel`],[1,`panel-demo-toggles`],[`label`,`Bound to preview container`,3,`ngModelChange`,`ngModel`],[`label`,`Blocking backdrop inside bounds`,3,`ngModelChange`,`ngModel`],[1,`panel-demo-boundary`],[`ariaLabel`,`Side panel example`,3,`widthChange`,`openChange`,`headerIcon`,`open`,`placement`,`container`,`width`,`resizable`,`resizeDisableShrink`,`resizeMinWidth`,`resizeMaxWidth`,`breakpoints`,`backdrop`],[`bxSidePanelBanner`,``,1,`demo-banner`],[`bxSidePanelHeader`,``,1,`demo-heading`],[`label`,`Persistent note`,3,`ngModelChange`,`ngModel`],[`bxSidePanelFooter`,``],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[1,`panel-demo-content`],[`role`,`status`]],template:function(t,e){t&1&&(U(0,`div`,0)(1,`bx-select`,1),zR(),xe$1(`ngModelChange`,function(c){return e.placement.set(c)}),H(),U(2,`bx-input-field`,2),zR(),xe$1(`ngModelChange`,function(c){return e.panelWidth.set(c)}),H()(),U(3,`div`,3)(4,`bx-slide-toggle`,4),zR(),xe$1(`ngModelChange`,function(c){return e.contained.set(c)}),H(),U(5,`bx-slide-toggle`,5),zR(),xe$1(`ngModelChange`,function(c){return e.backdrop.set(c)}),H()(),U(6,`bx-side-panel-layout`,6)(7,`bx-side-panel`,7),xe$1(`widthChange`,function(c){return e.resizeWidth(c)})(`openChange`,function(c){return e.opened.set(c)}),U(8,`p`,8),Te(9,`Optional projected top banner`),H(),U(10,`h3`,9),Te(11,`Declarative panel`),H(),U(12,`bx-input-field`,10),zR(),xe$1(`ngModelChange`,function(c){return e.note.set(c)}),H(),U(13,`p`),Te(14,`Closing keeps projected content mounted. Escape dismisses the focused panel without a modal focus trap or page scroll lock.`),H(),U(15,`div`,11)(16,`button`,12),xe$1(`click`,function(){return e.opened.set(!1)}),Te(17,`Done`),H()()(),U(18,`div`,13)(19,`button`,12),xe$1(`click`,function(){return e.opened.set(!e.opened())}),Te(20),H(),U(21,`button`,12),xe$1(`click`,function(){return e.pageAction()}),Te(22,`Surrounding page action`),H(),U(23,`p`,14),Te(24),H(),U(25,`p`),Te(26,`The panel has ordinary keyboard navigation. Change its placement, bounds, or width while it is open.`),H()()()),t&2&&(k$1(),oe(`clearable`,!1)(`options`,e.placements)(`ngModel`,e.placement()),qR(),k$1(),oe(`min`,240)(`max`,640)(`ngModel`,e.panelWidth()),qR(),k$1(2),oe(`ngModel`,e.contained()),qR(),k$1(),oe(`ngModel`,e.backdrop()),qR(),k$1(2),oe(`headerIcon`,j1(23,Gi))(`open`,e.opened())(`placement`,e.placement())(`container`,e.contained()?void 0:`viewport`)(`width`,e.width())(`resizable`,!0)(`resizeDisableShrink`,!1)(`resizeMinWidth`,240)(`resizeMaxWidth`,640)(`breakpoints`,e.panelBreakpoints)(`backdrop`,e.backdrop()),k$1(5),oe(`ngModel`,e.note()),qR(),k$1(8),mr(``,e.opened()?`Close`:`Open`,` panel`),k$1(4),NS(`Page actions: `,e.clicks(),` · Panel `,e.opened()?`open`:`closed`))},dependencies:[qte,Vte,a2,Z$1,no$1,oo$1,ao$1,wM,SM,Xc,Zc,Qc],styles:[`
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
}`]})};var jn=[{label:`Indicator`,value:`indicator`},{label:`Navigation`,value:`navigation`},{label:`Wizard`,value:`wizard`}];var ot=[`steps`,`segments`,`dots`,`progress`,`cards`];var qn=ot.map(a=>({label:a,value:a}));var rt=[`sm`,`md`,`lg`];var Hn=rt.map(a=>({label:a,value:a}));var Un=[{label:`Horizontal`,value:`horizontal`},{label:`Vertical`,value:`vertical`}];var Gn=[{label:`Scroll`,value:`scroll`},{label:`Vertical`,value:`vertical`},{label:`Compact`,value:`compact`}];var Kn=[{id:`overview`,label:`Overview`,description:`What will ship`,icon:`file-text`},{id:`access`,label:`Access`,description:`Who can use it`,icon:`users`},{id:`delivery`,label:`Delivery`,description:`How it rolls out`,icon:`send`}];var Xn=[{id:`plan`,label:`Plan`,completed:!0},{id:`build`,label:`Build`},{id:`ship`,label:`Ship`,optional:!0}];var Qn=[{label:`Percentage (33%)`,value:`percentage`},{label:`Completed steps (1/3)`,value:`fraction`}];function Yn(a,r){return new Promise((t,e)=>{let o=()=>{clearTimeout(c),t(!1)},c=setTimeout(()=>{a.signal.removeEventListener(`abort`,o),r===`fail`?e(/* @__PURE__ */ new Error(`The simulated server could not save this step. Try again.`)):t(r===`allow`)},800);a.signal.addEventListener(`abort`,o,{once:!0}),a.signal.aborted&&o()})}var Zn={en:{label:`Workflow`,back:`Back`,next:`Next`,finish:`Finish`,skip:`Skip`,pending:`Pending`,awaitingConfirmation:`Awaiting confirmation`,active:`Current step`,completed:`Completed`,skipped:`Skipped`,error:`Error`,loading:`Loading`,disabled:`Disabled`,optional:`Optional`,invalid:`Check this step before continuing`,rejected:`Navigation was not accepted`,position:`Step {index} of {count}: {label}`,plan:`Plan`,build:`Build`,ship:`Ship`,archived:`Archived`,buildDescription:`Prepare the workspace`,details:`Details`,preferences:`Preferences`,review:`Review`},es:{label:`Flujo de trabajo`,back:`Atrás`,next:`Siguiente`,finish:`Finalizar`,skip:`Omitir`,pending:`Pendiente`,awaitingConfirmation:`Esperando confirmación`,active:`Paso actual`,completed:`Completado`,skipped:`Omitido`,error:`Error`,loading:`Cargando`,disabled:`Deshabilitado`,optional:`Opcional`,invalid:`Comprueba este paso antes de continuar`,rejected:`No se aceptó la navegación`,position:`Paso {index} de {count}: {label}`,plan:`Planificar`,build:`Crear`,ship:`Publicar`,archived:`Archivado`,buildDescription:`Prepara el espacio de trabajo`,details:`Detalles`,preferences:`Preferencias`,review:`Revisión`},fr:{label:`Parcours`,back:`Retour`,next:`Suivant`,finish:`Terminer`,skip:`Ignorer`,pending:`En attente`,awaitingConfirmation:`En attente de confirmation`,active:`Étape actuelle`,completed:`Terminé`,skipped:`Ignoré`,error:`Erreur`,loading:`Chargement`,disabled:`Désactivé`,optional:`Facultatif`,invalid:`Vérifiez cette étape avant de continuer`,rejected:`La navigation a été refusée`,position:`Étape {index} sur {count} : {label}`,plan:`Planifier`,build:`Créer`,ship:`Publier`,archived:`Archivé`,buildDescription:`Préparez l’espace de travail`,details:`Détails`,preferences:`Préférences`,review:`Vérification`},de:{label:`Ablauf`,back:`Zurück`,next:`Weiter`,finish:`Abschließen`,skip:`Überspringen`,pending:`Ausstehend`,awaitingConfirmation:`Bestätigung ausstehend`,active:`Aktueller Schritt`,completed:`Abgeschlossen`,skipped:`Übersprungen`,error:`Fehler`,loading:`Wird geladen`,disabled:`Deaktiviert`,optional:`Optional`,invalid:`Prüfen Sie diesen Schritt vor dem Fortfahren`,rejected:`Die Navigation wurde abgelehnt`,position:`Schritt {index} von {count}: {label}`,plan:`Planen`,build:`Erstellen`,ship:`Veröffentlichen`,archived:`Archiviert`,buildDescription:`Arbeitsbereich vorbereiten`,details:`Details`,preferences:`Einstellungen`,review:`Überprüfung`}};var he=class a{language=E(`en`);version=E(0);translate(r,t){let e=Zn[this.language()][r]??r;for(let[o,c]of Object.entries(t??{}))e=e.replaceAll(`{${o}}`,String(c));return e}setLanguage(r){r&&(this.language.set(r),this.version.update(t=>t+1))}static ɵfac=function(t){return new(t||a)};static ɵprov=Z$2({token:a,factory:a.ɵfac})};var Ki=[`sectionsWrapper`];var Xi=[`dynamicContent`];var Qi=[`section`];var Yi=()=>({key:`details`});var Zi=()=>({key:`preferences`});var Ji=()=>({key:`review`});var $i=(a,r)=>r.id;function ea(a,r){if(a&1){let t=gr();U(0,`bx-select`,68),zR(),LS(`ngModelChange`,function(o){At(t);let c=P();return O1(c.progressFormat,o)||(c.progressFormat=o),Ot(o)}),H()}if(a&2){let t=P();oe(`clearable`,!1)(`options`,t.progressFormats),PS(`ngModel`,t.progressFormat),qR()}}function ta(a,r){if(a&1){let t=gr();U(0,`section`,39,8)(2,`h4`),Te(3),H(),U(4,`p`),Te(5),H(),U(6,`p`),Te(7,`The section selection follows this scroll container. No scroll observer or router is owned by the stepper.`),H(),U(8,`button`,31),xe$1(`click`,function(){let o=At(t).$implicit,c=P();return Ot(c.sectionStatus.set(`Reviewed `+o.id))}),Te(9,`Mark section reviewed`),H()()}if(a&2){let t=r.$implicit;$(`data-section`,t.id)(`aria-label`,t.label),k$1(3),je$3(t.label),k$1(2),je$3(t.description)}}function na(a,r){if(a&1){let t=gr();U(0,`button`,31),xe$1(`click`,function(){let o=At(t).$implicit,c=P();return Ot(c.policy.set(o))}),Te(1),H()}if(a&2){let t=r.$implicit,e=P();$(`aria-pressed`,e.policy()===t),k$1(),mr(``,t,` content`)}}function ia(a,r){if(a&1&&(U(0,`bx-input-field`,69),zR(),H(),U(1,`p`),Te(2,`This required field becomes touched only after an invalid forward attempt.`),H()),a&2){let t=P();oe(`formControl`,t.details.controls.name),qR()}}function aa(a,r){if(a&1&&(U(0,`span`),Te(1),H()),a&2){let t=P();k$1(),je$3(t.stepperDemoI18nService.translate(`preferences`))}}function oa(a,r){if(a&1&&(U(0,`bx-input-field`,70),zR(),H(),U(1,`p`),Te(2,`Skip leaves this step incomplete. With retained content, edits and child state survive revisiting.`),H()),a&2){let t=P();oe(`formControl`,t.note),qR()}}function ra(a,r){if(a&1&&(U(0,`h4`),Te(1,`Review workspace`),H(),U(2,`p`),Te(3),H(),U(4,`p`),Te(5),H(),U(6,`p`),Te(7,`Finish performs the same asynchronous save as Next. A failed save keeps this content and its form values.`),H()),a&2){let t=P();k$1(3),mr(`Workspace: `,t.details.controls.name.value),k$1(2),mr(`Note: `,t.note.value||`No delivery note`)}}function la(a,r){if(a&1){let t=gr();U(0,`h4`),Te(1,`Workspace ready`),H(),U(2,`p`),Te(3,`Your workflow is complete. Reset to start again.`),H(),U(4,`button`,31),xe$1(`click`,function(){At(t),P();let o=ns(61);return Ot(o.reset())}),Te(5,`Restart with existing values`),H()}}function sa(a,r){if(a&1&&(U(0,`bx-input-field`,71),zR(),H()),a&2){let t=P();oe(`formField`,t.signalForm.name),qR()}}function ca(a,r){if(a&1&&(U(0,`p`),Te(1),H()),a&2){let t=P();k$1(),mr(`Ready to create `,t.signalModel().name,`.`)}}function da(a,r){if(a&1&&(U(0,`p`),Te(1),H()),a&2){P();let t=ns(90);k$1(),mr(`Active step: `,t.selectedStep()?.label,`. Component state follows stable IDs when definitions change.`)}}function pa(a,r){if(a&1){let t=gr();U(0,`button`,72),xe$1(`click`,function(){At(t);let o=P();return Ot(o.confirmSelection())}),Te(1),H()}a&2&&(k$1(),mr(`Open `,r))}function ma(a,r){if(a&1&&(U(0,`div`,73)(1,`span`),Te(2),H(),Fe$1(3,`bx-stepper`,74),H()),a&2){let t=r.$implicit,e=P().$implicit,o=P();k$1(2),je$3(t),k$1(),oe(`steps`,o.gallerySteps)(`variant`,e)(`size`,t)(`orientation`,o.orientation())(`responsive`,o.responsive())(`glassiness`,o.glass()?`on`:`off`)(`surfaceEffects`,o.lighting())(`showLabels`,e!==`dots`)(`labels`,o.labels)}}function ua(a,r){if(a&1&&(U(0,`div`,67)(1,`h4`),Te(2),H(),jn$1(3,ma,4,10,`div`,73,es),H()),a&2){let t=r.$implicit,e=P();k$1(2),je$3(t),k$1(),zn$1(e.gallerySizes)}}var Ye=class a{bxA11yService=p(Oe);stepperDemoI18nService=p(he);sectionsWrapper=bn(`sectionsWrapper`);dynamicContent=bn(`dynamicContent`);sections=ep(`section`);modes=jn;variants=qn;progressFormats=Qn;sizes=Hn;orientations=Un;responsiveOptions=Gn;galleryVariants=ot;gallerySizes=rt;gallerySteps=Xn;sectionSteps=Kn;languages=dt;policies=[`eager`,`retained`,`active`];mode=E(`navigation`);variant=E(`steps`);progressFormat=E(`percentage`);size=E(`md`);orientation=E(`horizontal`);responsive=E(`compact`);active=E(`build`);sectionActive=E(`overview`);wizardActive=E(`details`);controlledActive=E(`plan`);status=E(`Use the controls to explore presentation and behavior.`);sectionStatus=E(`Choose a section or scroll the content. The application confirms the active ID.`);wizardStatus=E(`Enter a workspace name, then continue.`);nextOutcome=E(`allow`);policy=E(`retained`);pendingConfirmation=E(null);showLabels=E(!0);errorState=E(!1);loadingState=E(!1);allowIndicatorRequests=E(!1);readOnly=E(!1);glass=E(!0);lighting=E(!0);linear=E(!0);editable=E(!0);extra=E(!1);previewSteps=v(()=>[{id:`plan`,label:{key:`plan`},completed:!0,icon:`clipboard-check`},{id:`build`,label:{key:`build`},description:{key:`buildDescription`},icon:`wrench`},{id:`ship`,label:{key:`ship`},optional:!0,icon:`send`},{id:`archived`,label:{key:`archived`},disabled:!0,icon:`archive`}].map(t=>s(r({},t),{error:t.id===this.active()&&this.errorState(),loading:t.id===this.active()&&this.loadingState()})));currentStepOptions=v(()=>this.previewSteps().map(r=>({value:r.id,label:`${Se(r.label,this.stepperDemoI18nService)} (${r.id})`,disabled:r.disabled})));confirmationLabel=v(()=>{let r=this.pendingConfirmation(),t=this.gallerySteps.find(e=>e.id===r?.toId);return r?.outcome===`accepted`&&t&&t.id!==this.controlledActive()?Se(t.label,this.stepperDemoI18nService):null});controlledMessage=v(()=>{let r=this.pendingConfirmation(),t=this.confirmationLabel(),e=Se(this.gallerySteps.find(o=>o.id===this.controlledActive())?.label,this.stepperDemoI18nService);return t?`Request accepted. ${e} is still current. Select \u201COpen ${t}\u201D to let the application confirm the new activeStep.`:r?.outcome===`accepted`?r.toId?`The application opened ${e}. Request another step to repeat the two-stage flow.`:`The workflow is complete. Reset to try requesting and confirming steps again.`:r?`The request was ${r.outcome}. ${e} remains current; no destination is waiting for confirmation.`:`Current step: ${e}. \u201CRequest next step\u201D checks the transition. Then select \u201COpen\u201D to confirm it. This demo deliberately waits for that second action.`});dynamicSteps=v(()=>[{id:`first`,label:`Start`,content:this.dynamicContent()},...this.extra()?[{id:`extra`,label:`Added step`,optional:!0,content:this.dynamicContent()}]:[],{id:`last`,label:`Review`,content:this.dynamicContent()}]);labels=Object.fromEntries([`label`,`back`,`next`,`finish`,`skip`,`pending`,`awaitingConfirmation`,`active`,`completed`,`skipped`,`error`,`loading`,`disabled`,`optional`,`invalid`,`rejected`,`position`].map(r=>[r,{key:r}]));controlledLabels=s(r({},this.labels),{next:`Request next step`,back:`Request previous step`});details=new jf({name:new Ck(``,{nonNullable:!0,validators:Rs.required})});note=new Ck(``,{nonNullable:!0});signalModel=E({name:``});signalForm=Go$1(this.signalModel,r=>Us(r.name));save=r=>{if(r.request.action===`previous`)return!0;let t=this.nextOutcome();return this.nextOutcome.set(`allow`),Yn(r,t)};confirmPreview(r){this.status.set(`${r.source} request: ${r.id} (index ${r.index}). Application confirmed selection.`),this.active.set(r.id)}navigateSection(r){let t=this.sectionsWrapper()?.nativeElement,e=this.sections().find(c=>c.nativeElement.dataset.section===r.id)?.nativeElement,o=this.sections()[0]?.nativeElement;!t||!e||!o||(this.sectionStatus.set(`Application handled ${r.source} request for section ${r.id}.`),t.scrollTo({top:e.offsetTop-o.offsetTop,behavior:this.bxA11yService.isReducedMotion()?`instant`:`smooth`}))}observeSections(){let r=this.sectionsWrapper()?.nativeElement;if(!r)return;let t=r.getBoundingClientRect().top,e=this.sections().filter(o=>o.nativeElement.getBoundingClientRect().top<=t+32).at(-1);e&&this.sectionActive.set(e.nativeElement.dataset.section??`overview`)}resetWizard(r){r.reset(),this.details.reset(),this.note.reset(),this.nextOutcome.set(`allow`),this.wizardStatus.set(`Enter a workspace name, then continue.`)}recordWizard(r){switch(r.outcome){case`accepted`:this.wizardStatus.set(r.toId?`Saved and advanced to ${r.toId}.`:`Workspace saved. The workflow is complete.`);break;case`invalid`:this.wizardStatus.set(`Enter a workspace name before continuing. No save has started.`);break;case`error`:this.wizardStatus.set(`The simulated save failed. Your values are retained. Select Next or Finish once to retry.`);break;case`rejected`:this.wizardStatus.set(`The guard refused navigation. Your values are retained. Select Next or Finish once to try again.`);break;case`cancelled`:this.wizardStatus.set(`The save was cancelled because the workflow changed. Your values are retained.`)}}confirmSelection(){let r=this.pendingConfirmation();r?.outcome===`accepted`&&r.toId&&this.confirmationLabel()&&this.controlledActive.set(r.toId)}static ɵfac=function(t){return new(t||a)};static ɵcmp=z({type:a,selectors:[[`app-stepper-examples`]],viewQuery:function(t,e){t&1&&Tn(e.sectionsWrapper,Ki,5)(e.dynamicContent,Xi,5)(e.sections,Qi,5),t&2&&It(3)},features:[Ft([he,{provide:De,useExisting:he}])],decls:121,vars:88,consts:[[`preview`,``],[`sectionsWrapper`,``],[`wizard`,``],[`finished`,``],[`signalWizard`,``],[`custom`,``],[`dynamicContent`,``],[`controlled`,``],[`section`,``],[1,`stepper-examples`],[`aria-labelledby`,`stepper-config-title`],[`id`,`stepper-config-title`],[3,`activeStepChange`,`stepRequested`,`mode`,`steps`,`variant`,`size`,`orientation`,`responsive`,`showLabels`,`indicatorInteractive`,`readOnly`,`glassiness`,`surfaceEffects`,`labels`,`showPercentage`,`progressFormat`,`activeStep`],[1,`config-grid`],[`label`,`Current step (activeStep ID)`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Behavior`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Variant`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Progress display`,3,`clearable`,`options`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Orientation`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Narrow screens`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Language`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`toggles`],[`label`,`Labels`,3,`ngModelChange`,`ngModel`],[`label`,`Current step error`,3,`ngModelChange`,`ngModel`],[`label`,`Current step loading`,3,`ngModelChange`,`ngModel`],[`label`,`Indicator interaction`,3,`ngModelChange`,`ngModel`],[`label`,`Read only`,3,`ngModelChange`,`ngModel`],[`label`,`Glass surfaces`,3,`ngModelChange`,`ngModel`],[`label`,`Interaction lighting`,3,`ngModelChange`,`ngModel`],[1,`actions`],[`bx-button`,``,`type`,`button`,3,`click`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[`announcement`,`polite`,3,`message`],[`aria-labelledby`,`stepper-section-title`],[`id`,`stepper-section-title`],[1,`section-layout`],[`mode`,`navigation`,`orientation`,`vertical`,3,`activeStepChange`,`stepRequested`,`steps`,`activeStep`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Release sections`,1,`section-scroll`,3,`scroll`],[1,`document-section`],[`aria-labelledby`,`stepper-wizard-title`],[`id`,`stepper-wizard-title`],[`label`,`Linear workflow`,3,`ngModelChange`,`ngModel`],[`label`,`Completed steps editable`,3,`ngModelChange`,`ngModel`],[`bx-button`,``,`type`,`button`],[`mode`,`wizard`,3,`activeStepChange`,`transitionFinished`,`variant`,`size`,`orientation`,`responsive`,`linear`,`contentPolicy`,`labels`,`beforeTransition`,`completionContent`,`activeStep`],[`id`,`details`,`icon`,`file-text`,3,`label`,`validation`,`editable`],[`bxStepContent`,``],[`id`,`preferences`,`icon`,`settings`,3,`label`,`optional`],[`bxStepLabel`,``],[`id`,`managed`,`label`,`Managed by your organization`,3,`disabled`],[`id`,`review`,`icon`,`clipboard-check`,3,`label`],[`aria-labelledby`,`stepper-signal-title`],[`id`,`stepper-signal-title`],[`mode`,`wizard`,`variant`,`segments`,3,`labels`],[`id`,`name`,`label`,`Name`,3,`validation`],[`id`,`ready`,`label`,`Ready`],[`aria-labelledby`,`stepper-custom-title`],[`id`,`stepper-custom-title`],[`mode`,`wizard`,`variant`,`cards`,3,`steps`,`linear`,`controls`,`labels`],[`aria-labelledby`,`stepper-controlled-title`],[`id`,`stepper-controlled-title`],[`mode`,`wizard`,`selectionMode`,`controlled`,3,`activeStepChange`,`transitionFinished`,`steps`,`linear`,`labels`,`activeStep`],[`announcement`,`polite`,3,`title`,`message`],[`bx-button`,``,`bxAlertActions`,``,`type`,`button`,`variant`,`filled`],[`aria-labelledby`,`stepper-gallery-title`],[`id`,`stepper-gallery-title`],[1,`gallery-group`],[`label`,`Progress display`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Workspace name`,`placeholder`,`Enter a workspace name`,3,`formControl`],[`label`,`Delivery note`,3,`formControl`],[`label`,`Required workspace name`,3,`formField`],[`bx-button`,``,`bxAlertActions`,``,`type`,`button`,`variant`,`filled`,3,`click`],[1,`gallery-row`],[`activeStep`,`build`,3,`steps`,`variant`,`size`,`orientation`,`responsive`,`glassiness`,`surfaceEffects`,`showLabels`,`labels`]],template:function(t,e){if(t&1){let o=gr();U(0,`div`,9)(1,`section`,10)(2,`h3`,11),Te(3,`Presentation and behavior`),H(),U(4,`p`),Te(5,` Pilot material and motion: select steps rapidly, press a marker, and compare sizes and orientations. Appearance settings control the theme, reduced motion, and opaque surfaces independently. `),H(),U(6,`bx-stepper`,12,0),LS(`activeStepChange`,function(d){return At(o),O1(e.active,d)||(e.active=d),Ot(d)}),xe$1(`stepRequested`,function(d){return e.mode()!==`wizard`&&e.confirmPreview(d)}),H(),U(8,`div`,13)(9,`bx-select`,14),zR(),LS(`ngModelChange`,function(d){return At(o),O1(e.active,d)||(e.active=d),Ot(d)}),H(),U(10,`bx-select`,15),zR(),LS(`ngModelChange`,function(d){return At(o),O1(e.mode,d)||(e.mode=d),Ot(d)}),H(),U(11,`bx-select`,16),zR(),LS(`ngModelChange`,function(d){return At(o),O1(e.variant,d)||(e.variant=d),Ot(d)}),H(),ae(12,ea,1,3,`bx-select`,17),U(13,`bx-select`,18),zR(),LS(`ngModelChange`,function(d){return At(o),O1(e.size,d)||(e.size=d),Ot(d)}),H(),U(14,`bx-select`,19),zR(),LS(`ngModelChange`,function(d){return At(o),O1(e.orientation,d)||(e.orientation=d),Ot(d)}),H(),U(15,`bx-select`,20),zR(),LS(`ngModelChange`,function(d){return At(o),O1(e.responsive,d)||(e.responsive=d),Ot(d)}),H(),U(16,`bx-select`,21),zR(),xe$1(`ngModelChange`,function(d){return e.stepperDemoI18nService.setLanguage(d)}),H()(),U(17,`div`,22)(18,`bx-slide-toggle`,23),zR(),LS(`ngModelChange`,function(d){return At(o),O1(e.showLabels,d)||(e.showLabels=d),Ot(d)}),H(),U(19,`bx-slide-toggle`,24),zR(),LS(`ngModelChange`,function(d){return At(o),O1(e.errorState,d)||(e.errorState=d),Ot(d)}),H(),U(20,`bx-slide-toggle`,25),zR(),LS(`ngModelChange`,function(d){return At(o),O1(e.loadingState,d)||(e.loadingState=d),Ot(d)}),H(),U(21,`bx-slide-toggle`,26),zR(),LS(`ngModelChange`,function(d){return At(o),O1(e.allowIndicatorRequests,d)||(e.allowIndicatorRequests=d),Ot(d)}),H(),U(22,`bx-slide-toggle`,27),zR(),LS(`ngModelChange`,function(d){return At(o),O1(e.readOnly,d)||(e.readOnly=d),Ot(d)}),H(),U(23,`bx-slide-toggle`,28),zR(),LS(`ngModelChange`,function(d){return At(o),O1(e.glass,d)||(e.glass=d),Ot(d)}),H(),U(24,`bx-slide-toggle`,29),zR(),LS(`ngModelChange`,function(d){return At(o),O1(e.lighting,d)||(e.lighting=d),Ot(d)}),H()(),U(25,`div`,30)(26,`button`,31),xe$1(`click`,function(){At(o);let d=ns(7);return Ot(d.reset())}),Te(27,`Reset`),H(),U(28,`button`,32),xe$1(`click`,function(){return e.active.set(`plan`)}),Te(29,`Select Plan`),H(),U(30,`button`,32),xe$1(`click`,function(){return e.active.set(`ship`)}),Te(31,`Select Ship`),H()(),Fe$1(32,`bx-banner`,33),H(),U(33,`section`,34)(34,`h3`,35),Te(35,`Application-owned section navigation`),H(),Fe$1(36,`bx-banner`,33),U(37,`div`,36)(38,`bx-stepper`,37),LS(`activeStepChange`,function(d){return At(o),O1(e.sectionActive,d)||(e.sectionActive=d),Ot(d)}),xe$1(`stepRequested`,function(d){return e.navigateSection(d)}),H(),U(39,`div`,38,1),xe$1(`scroll`,function(){return e.observeSections()}),jn$1(41,ta,10,4,`section`,39,$i),H()()(),U(43,`section`,40)(44,`h3`,41),Te(45,`Workspace wizard`),H(),U(46,`p`),Te(47,`Required Reactive Forms validation, optional content, disabled steps, guarded saves, retained input and explicit completion.`),H(),U(48,`div`,22)(49,`bx-slide-toggle`,42),zR(),LS(`ngModelChange`,function(d){return At(o),O1(e.linear,d)||(e.linear=d),Ot(d)}),H(),U(50,`bx-slide-toggle`,43),zR(),LS(`ngModelChange`,function(d){return At(o),O1(e.editable,d)||(e.editable=d),Ot(d)}),H()(),U(51,`div`,30),jn$1(52,na,2,2,`button`,44,es),U(54,`button`,31),xe$1(`click`,function(){return e.nextOutcome.set(`fail`)}),Te(55,`Fail next save`),H(),U(56,`button`,31),xe$1(`click`,function(){return e.nextOutcome.set(`reject`)}),Te(57,`Reject next guard`),H(),U(58,`button`,31),xe$1(`click`,function(){At(o);let d=ns(61);return Ot(e.resetWizard(d))}),Te(59,`Reset workflow and forms`),H()(),U(60,`bx-stepper`,45,2),LS(`activeStepChange`,function(d){return At(o),O1(e.wizardActive,d)||(e.wizardActive=d),Ot(d)}),xe$1(`transitionFinished`,function(d){return e.recordWizard(d)}),U(62,`bx-step`,46),hS(63,ia,3,1,`ng-template`,47),H(),U(64,`bx-step`,48),hS(65,aa,2,1,`ng-template`,49)(66,oa,3,1,`ng-template`,47),H(),Fe$1(67,`bx-step`,50),U(68,`bx-step`,51),hS(69,ra,8,2,`ng-template`,47),H()(),hS(70,la,6,0,`ng-template`,null,3,kb),Fe$1(72,`bx-banner`,33),H(),U(73,`section`,52)(74,`h3`,53),Te(75,`Signal Forms`),H(),U(76,`bx-stepper`,54,4)(78,`bx-step`,55),hS(79,sa,1,1,`ng-template`,47),H(),U(80,`bx-step`,56),hS(81,ca,2,1,`ng-template`,47),H()(),U(82,`button`,31),xe$1(`click`,function(){At(o);let d=ns(77);return Ot(d.reset())}),Te(83,`Restart Signal Forms example`),H()(),U(84,`section`,57)(85,`h3`,58),Te(86,`Non-linear workflow and custom controls`),H(),U(87,`p`),Te(88,`Add or remove an optional step. Every control invokes the same guarded methods as the built-in buttons.`),H(),Fe$1(89,`bx-stepper`,59,5),hS(91,da,2,1,`ng-template`,null,6,kb),U(93,`div`,30)(94,`button`,31),xe$1(`click`,function(){At(o);let d=ns(90);return Ot(d.previous())}),Te(95,`Back`),H(),U(96,`button`,31),xe$1(`click`,function(){At(o);let d=ns(90);return Ot(d.next())}),Te(97,`Next`),H(),U(98,`button`,31),xe$1(`click`,function(){At(o);let d=ns(90);return Ot(d.finish())}),Te(99,`Finish`),H(),U(100,`button`,31),xe$1(`click`,function(){return e.extra.set(!e.extra())}),Te(101),H(),U(102,`button`,31),xe$1(`click`,function(){At(o);let d=ns(90);return Ot(d.reset())}),Te(103,`Reset`),H()(),Fe$1(104,`bx-banner`,33),H(),U(105,`section`,60)(106,`h3`,61),Te(107,`Controlled wizard selection`),H(),U(108,`bx-stepper`,62,7),LS(`activeStepChange`,function(d){return At(o),O1(e.controlledActive,d)||(e.controlledActive=d),Ot(d)}),xe$1(`transitionFinished`,function(d){return e.pendingConfirmation.set(d)}),H(),U(110,`bx-banner`,63),ae(111,pa,2,1,`button`,64),H(),U(112,`button`,31),xe$1(`click`,function(){return At(o),ns(109).reset(),Ot(e.pendingConfirmation.set(null))}),Te(113,`Reset controlled wizard`),H()(),U(114,`section`,65)(115,`h3`,66),Te(116,`Variant and size reference`),H(),U(117,`p`),Te(118,`All presentations use the same completion data. Segment thickness changes with size. Orientation follows the configurator above.`),H(),jn$1(119,ua,5,1,`div`,67,es),H()()}if(t&2){let o,c=ns(61),d=ns(71),lt=ns(90),oi=ns(109);k$1(6),oe(`mode`,e.mode())(`steps`,e.previewSteps())(`variant`,e.variant())(`size`,e.size())(`orientation`,e.orientation())(`responsive`,e.responsive())(`showLabels`,e.showLabels())(`indicatorInteractive`,e.allowIndicatorRequests())(`readOnly`,e.readOnly())(`glassiness`,e.glass()?`on`:`off`)(`surfaceEffects`,e.lighting())(`labels`,e.labels)(`showPercentage`,!0)(`progressFormat`,e.progressFormat()),PS(`activeStep`,e.active),k$1(3),oe(`clearable`,!1)(`options`,e.currentStepOptions()),PS(`ngModel`,e.active),qR(),k$1(),oe(`clearable`,!1)(`options`,e.modes),PS(`ngModel`,e.mode),qR(),k$1(),oe(`clearable`,!1)(`options`,e.variants),PS(`ngModel`,e.variant),qR(),k$1(),se(e.variant()===`progress`?12:-1),k$1(),oe(`clearable`,!1)(`options`,e.sizes),PS(`ngModel`,e.size),qR(),k$1(),oe(`clearable`,!1)(`options`,e.orientations),PS(`ngModel`,e.orientation),qR(),k$1(),oe(`clearable`,!1)(`options`,e.responsiveOptions),PS(`ngModel`,e.responsive),qR(),k$1(),oe(`clearable`,!1)(`options`,e.languages)(`ngModel`,e.stepperDemoI18nService.language()),qR(),k$1(2),PS(`ngModel`,e.showLabels),qR(),k$1(),PS(`ngModel`,e.errorState),qR(),k$1(),PS(`ngModel`,e.loadingState),qR(),k$1(),PS(`ngModel`,e.allowIndicatorRequests),qR(),k$1(),PS(`ngModel`,e.readOnly),qR(),k$1(),PS(`ngModel`,e.glass),qR(),k$1(),PS(`ngModel`,e.lighting),qR(),k$1(4),oe(`disabled`,e.mode()===`wizard`||e.readOnly()),k$1(2),oe(`disabled`,e.mode()===`wizard`||e.readOnly()),k$1(2),oe(`message`,e.status()),k$1(4),oe(`message`,e.sectionStatus()),k$1(2),oe(`steps`,e.sectionSteps),PS(`activeStep`,e.sectionActive),k$1(3),zn$1(e.sectionSteps),k$1(8),PS(`ngModel`,e.linear),qR(),k$1(),PS(`ngModel`,e.editable),qR(),k$1(2),zn$1(e.policies),k$1(8),oe(`variant`,e.variant())(`size`,e.size())(`orientation`,e.orientation())(`responsive`,e.responsive())(`linear`,e.linear())(`contentPolicy`,e.policy())(`labels`,e.labels)(`beforeTransition`,e.save)(`completionContent`,d),PS(`activeStep`,e.wizardActive),k$1(2),oe(`label`,j1(85,Yi))(`validation`,e.details)(`editable`,e.editable()),k$1(2),oe(`label`,j1(86,Zi))(`optional`,!0),k$1(3),oe(`disabled`,!0),k$1(),oe(`label`,j1(87,Ji)),k$1(4),oe(`message`,c.pending()?`Saving workspace… The next step opens automatically after a successful save.`:e.wizardStatus()+` Next server outcome: `+e.nextOutcome()+`.`),k$1(4),oe(`labels`,e.labels),k$1(2),oe(`validation`,e.signalForm()),k$1(11),oe(`steps`,e.dynamicSteps())(`linear`,!1)(`controls`,!1)(`labels`,e.labels),k$1(12),mr(``,e.extra()?`Remove`:`Add`,` optional step`),k$1(3),oe(`message`,lt.isComplete()?`Completed`:lt.lastTransition()?.outcome||`Ready`),k$1(4),oe(`steps`,e.gallerySteps)(`linear`,!1)(`labels`,e.controlledLabels),PS(`activeStep`,e.controlledActive),k$1(2),oe(`title`,e.confirmationLabel()?`Waiting for application confirmation`:oi.isComplete()?`Workflow complete`:`Application-owned selection`)(`message`,e.controlledMessage()),k$1(),se((o=e.confirmationLabel())?111:-1,o),k$1(8),zn$1(e.galleryVariants)}},dependencies:[qte,Vte,a2,Ute,u2,Ys,pM,Z$1,no$1,oo$1,ao$1,ln,$e$1,je$1,We],styles:[`
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
formSettings.update({ tooltipOnTruncate: false });`;var ga=()=>[0];var xe=class a{text=E(`A long location name that can be truncated`);width=E(14);enabled=E(!0);largeText=E(!1);automaticTooltips=E(!0);customTooltip=E(!1);menuActions=E(0);label=v(()=>String(this.text()??``));options=v(()=>[{label:this.label(),value:0}]);pipeExample=ei;customExample=ti;logicExample=ni;previewWidth=v(()=>{let r=Number(this.width());return Number.isFinite(r)?Math.max(4,Math.min(64,r)):14});static ɵfac=function(t){return new(t||a)};static ɵcmp=z({type:a,selectors:[[`app-truncation-examples`]],decls:96,vars:55,consts:[[`overflow`,`bxTruncate`],[`aria-label`,`Conditional truncation tooltips`,1,`truncation-demo`],[1,`truncation-controls`],[`label`,`Text`,`subscriptSizing`,`dynamic`,3,`valueChange`,`value`],[`label`,`Available width (rem)`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`max`,`value`],[`role`,`group`,`aria-label`,`Preview options`,1,`truncation-switches`],[`label`,`Enable text truncation`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Larger text preview`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Automatic tooltips`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Custom tooltip`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[1,`component-examples`],[1,`preview-card`,`text-preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Text preview`,1,`preview-stage`],[1,`text-example`,`example-width`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,3,`bxTruncate`,`bxTooltip`],[1,`preview-caption`],[1,`preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Tag preview`,1,`preview-stage`],[1,`example-width`],[`leadingIcon`,`map-pin`,3,`text`,`tooltipOnTruncate`,`tooltip`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Input field preview`,1,`preview-stage`],[`placeholder`,`Editable value`,`subscriptSizing`,`dynamic`,3,`label`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Search value preview`,1,`preview-stage`],[`ariaLabel`,`Search value`,`subscriptSizing`,`dynamic`,3,`search`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Select preview`,1,`preview-stage`],[`subscriptSizing`,`dynamic`,3,`label`,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Multiselect preview`,1,`preview-stage`],[`label`,`Selected tag`,`selectionDisplay`,`tags`,`subscriptSizing`,`dynamic`,3,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Menu item preview`,1,`preview-stage`],[3,`action`,`label`,`wrapLabel`,`tooltipOnTruncate`],[`tabindex`,`0`,`aria-label`,`HTML truncation example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`tabindex`,`0`,`aria-label`,`TypeScript truncation example`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`]],template:function(t,e){if(t&1){let o=gr();U(0,`section`,1)(1,`h3`),Te(2,`Shared truncation, optional tooltips`),H(),U(3,`p`)(4,`code`),Te(5,`TruncateDirective`),H(),Te(6,` owns ellipsis and rendered measurement. The pure `),U(7,`code`),Te(8,`bxTruncatedText`),H(),Te(9,` pipe selects text for a conditional tooltip. Use the exported directive signals or `),U(10,`code`),Te(11,`truncatedText()`),H(),Te(12,` helper in your own logic. `),H(),U(13,`div`,2)(14,`bx-input-field`,3),LS(`valueChange`,function(d){return At(o),O1(e.text,d)||(e.text=d),Ot(d)}),H(),U(15,`bx-input-field`,4),LS(`valueChange`,function(d){return At(o),O1(e.width,d)||(e.width=d),Ot(d)}),H()(),U(16,`div`,5)(17,`bx-checkbox`,6),LS(`checkedChange`,function(d){return At(o),O1(e.enabled,d)||(e.enabled=d),Ot(d)}),H(),U(18,`bx-checkbox`,7),LS(`checkedChange`,function(d){return At(o),O1(e.largeText,d)||(e.largeText=d),Ot(d)}),H(),U(19,`bx-checkbox`,8),LS(`checkedChange`,function(d){return At(o),O1(e.automaticTooltips,d)||(e.automaticTooltips=d),Ot(d)}),H(),U(20,`bx-checkbox`,9),LS(`checkedChange`,function(d){return At(o),O1(e.customTooltip,d)||(e.customTooltip=d),Ot(d)}),H()(),U(21,`div`,10)(22,`section`,11)(23,`h4`),Te(24,`Text preview`),H(),U(25,`div`,12)(26,`div`,13)(27,`span`,14,0),Eb(29,`bxTruncatedText`),Te(30),H()()(),U(31,`output`,15),Te(32),H()(),U(33,`section`,16)(34,`h4`),Te(35,`Tag`),H(),U(36,`div`,17)(37,`div`,18),Fe$1(38,`bx-tag`,19),H()(),U(39,`p`,15),Te(40,`Clipped labels use an automatic or application-owned tooltip.`),H()(),U(41,`section`,16)(42,`h4`),Te(43,`Input field`),H(),U(44,`div`,20)(45,`div`,18),Fe$1(46,`bx-input-field`,21),H()(),U(47,`p`,15),Te(48,`The floating label shares the truncation measurement.`),H()(),U(49,`section`,16)(50,`h4`),Te(51,`Search value`),H(),U(52,`div`,22)(53,`div`,18)(54,`bx-search-input`,23),xe$1(`search`,function(d){return e.text.set(d)}),H()()(),U(55,`p`,15),Te(56,`Editing the search updates the shared example text.`),H()(),U(57,`section`,16)(58,`h4`),Te(59,`Select`),H(),U(60,`div`,24)(61,`div`,18),Fe$1(62,`bx-select`,25),H()(),U(63,`p`,15),Te(64,`Selected values and captions share the same available width.`),H()(),U(65,`section`,16)(66,`h4`),Te(67,`Multiselect`),H(),U(68,`div`,26)(69,`div`,18),Fe$1(70,`bx-multi-select`,27),H()(),U(71,`p`,15),Te(72,`The selected tag follows the owning control's tooltip setting.`),H()(),U(73,`section`,16)(74,`h4`),Te(75,`Menu item`),H(),U(76,`div`,28)(77,`div`,18)(78,`bx-menu`)(79,`bx-menu-item`,29),xe$1(`action`,function(){return e.menuActions.set(e.menuActions()+1)}),H()()()(),U(80,`output`,15),Te(81),H()()(),U(82,`p`),Te(83,` Change the text or width to switch between clipped and fitting labels. Turn automatic tooltips off to retain ellipsis and measurement for custom feedback. Hover, keyboard focus, and touch-and-hold use the existing tooltip mechanism. Explicit tag descriptions still take precedence. Custom tooltip applies to the text and tag examples. Preview panels keep their size; long wrapped content scrolls inside them. Example widths are capped by the available space in each card. `),H(),U(84,`h3`),Te(85,`Short conditional tooltip`),H(),U(86,`pre`,30),Fe$1(87,`code`,31),H(),U(88,`h3`),Te(89,`Disable automatic tooltips`),H(),U(90,`pre`,30),Fe$1(91,`code`,31),H(),U(92,`h3`),Te(93,`Use the public API in your application`),H(),U(94,`pre`,32),Fe$1(95,`code`,33),H()()}if(t&2){let o=ns(28);k$1(14),PS(`value`,e.text),k$1(),oe(`min`,4)(`max`,64),PS(`value`,e.width),k$1(2),PS(`checked`,e.enabled),k$1(),PS(`checked`,e.largeText),k$1(),PS(`checked`,e.automaticTooltips),k$1(),PS(`checked`,e.customTooltip),k$1(6),we$1(`inline-size`,e.previewWidth(),`rem`),de(`large-text`,e.largeText()),k$1(),oe(`bxTruncate`,e.enabled())(`bxTooltip`,e.customTooltip()?`My application tooltip`:Db(29,50,e.label(),o.truncated(),e.automaticTooltips())),$(`tabindex`,e.customTooltip()||e.automaticTooltips()&&o.truncated()?0:null),k$1(3),je$3(e.label()),k$1(2),mr(`Text `,o.truncated()?`is truncated`:`fits without truncation`,`.`),k$1(5),we$1(`inline-size`,e.previewWidth(),`rem`),k$1(),oe(`text`,e.label())(`tooltipOnTruncate`,e.automaticTooltips())(`tooltip`,e.customTooltip()?`My application tooltip`:void 0),k$1(7),we$1(`inline-size`,e.previewWidth(),`rem`),k$1(),oe(`label`,e.label())(`tooltipOnTruncate`,e.automaticTooltips()),k$1(7),we$1(`inline-size`,e.previewWidth(),`rem`),k$1(),oe(`value`,e.label())(`tooltipOnTruncate`,e.automaticTooltips()),k$1(7),we$1(`inline-size`,e.previewWidth(),`rem`),k$1(),oe(`label`,e.label())(`options`,e.options())(`value`,0)(`tooltipOnTruncate`,e.automaticTooltips()),k$1(7),we$1(`inline-size`,e.previewWidth(),`rem`),k$1(),oe(`options`,e.options())(`value`,j1(54,ga))(`tooltipOnTruncate`,e.automaticTooltips()),k$1(7),we$1(`inline-size`,e.previewWidth(),`rem`),k$1(2),oe(`label`,e.label())(`wrapLabel`,!e.enabled())(`tooltipOnTruncate`,e.automaticTooltips()),k$1(2),mr(`Menu activations: `,e.menuActions()),k$1(6),oe(`highlight`,e.pipeExample),k$1(4),oe(`highlight`,e.customExample),k$1(4),oe(`highlight`,e.logicExample)}},dependencies:[ht,Ti$1,no$1,so$1,qe$1,oo$1,eM,Jk,lM,Fs,li$1,nh],styles:[`
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
}`]})};var ba=()=>({key:`tagLabel`});var Ze=class a{demoI18nService=p(N);label=E(`Skopje`);text=v(()=>String(this.label()??``));color=E(`accent`);variant=E(`tonal`);disabled=E(!1);leadingIcon=E(!0);trailingIcon=E(!0);leadingCount=E(!1);trailingCount=E(!0);leftNumber=E(3);rightNumber=E(12);colors=Jn;variants=$n;static ɵfac=function(t){return new(t||a)};static ɵcmp=z({type:a,selectors:[[`app-tag-examples`]],features:[Ft([N,{provide:De,useExisting:N}])],decls:23,vars:26,consts:[[1,`tag-demo`],[`aria-label`,`Tag previews`,1,`tag-previews`],[`tooltip`,`A location tag tooltip`,3,`text`,`color`,`variant`,`disabled`,`leadingIcon`,`trailingIcon`,`leadingNumber`,`trailingNumber`],[`color`,`info`,`variant`,`filled`,`ariaLabel`,`42 locations`,`tooltip`,`Number-only tag`,3,`leadingNumber`],[`leadingIcon`,`map-pin`,`color`,`success`,3,`text`],[`text`,`Unavailable`,`color`,`neutral`,3,`disabled`],[`text`,`Skopje`],[`text`,`+2`,`tooltip`,`Ohrid, Bitola`],[1,`tag-controls`],[`label`,`Tag text`,3,`valueChange`,`value`],[`label`,`Color`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Appearance`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Leading number`,`type`,`number`,3,`valueChange`,`value`],[`label`,`Trailing number`,`type`,`number`,3,`valueChange`,`value`],[1,`tag-controls-checkboxes`],[`label`,`Leading icon`,3,`checkedChange`,`checked`],[`label`,`Trailing icon`,3,`checkedChange`,`checked`],[`label`,`Leading number`,3,`checkedChange`,`checked`],[`label`,`Trailing number`,3,`checkedChange`,`checked`],[`label`,`Disabled appearance`,3,`checkedChange`,`checked`]],template:function(t,e){t&1&&(U(0,`div`,0)(1,`div`,1),Fe$1(2,`bx-tag`,2)(3,`bx-tag`,3)(4,`bx-tag`,4)(5,`bx-tag`,5)(6,`bx-tag`,6)(7,`bx-tag`,7),H(),U(8,`div`,8)(9,`bx-input-field`,9),LS(`valueChange`,function(c){return O1(e.label,c)||(e.label=c),c}),H(),U(10,`bx-select`,10),LS(`valueChange`,function(c){return O1(e.color,c)||(e.color=c),c}),H(),U(11,`bx-select`,11),LS(`valueChange`,function(c){return O1(e.variant,c)||(e.variant=c),c}),H(),U(12,`bx-input-field`,12),LS(`valueChange`,function(c){return O1(e.leftNumber,c)||(e.leftNumber=c),c}),H(),U(13,`bx-input-field`,13),LS(`valueChange`,function(c){return O1(e.rightNumber,c)||(e.rightNumber=c),c}),H()(),U(14,`div`,14)(15,`bx-checkbox`,15),LS(`checkedChange`,function(c){return O1(e.leadingIcon,c)||(e.leadingIcon=c),c}),H(),U(16,`bx-checkbox`,16),LS(`checkedChange`,function(c){return O1(e.trailingIcon,c)||(e.trailingIcon=c),c}),H(),U(17,`bx-checkbox`,17),LS(`checkedChange`,function(c){return O1(e.leadingCount,c)||(e.leadingCount=c),c}),H(),U(18,`bx-checkbox`,18),LS(`checkedChange`,function(c){return O1(e.trailingCount,c)||(e.trailingCount=c),c}),H(),U(19,`bx-checkbox`,19),LS(`checkedChange`,function(c){return O1(e.disabled,c)||(e.disabled=c),c}),H()(),U(20,`p`),Te(21,` Hover or keyboard-focus a tooltip tag. In a select trigger, the parent control exposes the complete selection while overflow tags show the remaining names on hover. `),H(),Fe$1(22,`app-truncation-examples`),H()),t&2&&(k$1(2),oe(`text`,e.text())(`color`,e.color()??`accent`)(`variant`,e.variant()??`tonal`)(`disabled`,e.disabled())(`leadingIcon`,e.leadingIcon()?`map-pin`:void 0)(`trailingIcon`,e.trailingIcon()?`chevron-right`:void 0)(`leadingNumber`,e.leadingCount()?e.leftNumber():null)(`trailingNumber`,e.trailingCount()?e.rightNumber():null),k$1(),oe(`leadingNumber`,42),k$1(),oe(`text`,j1(25,ba)),k$1(),oe(`disabled`,!0),k$1(4),PS(`value`,e.label),k$1(),oe(`clearable`,!1)(`options`,e.colors),PS(`value`,e.color),k$1(),oe(`clearable`,!1)(`options`,e.variants),PS(`value`,e.variant),k$1(),PS(`value`,e.leftNumber),k$1(),PS(`value`,e.rightNumber),k$1(2),PS(`checked`,e.leadingIcon),k$1(),PS(`checked`,e.trailingIcon),k$1(),PS(`checked`,e.leadingCount),k$1(),PS(`checked`,e.trailingCount),k$1(),PS(`checked`,e.disabled))},dependencies:[lM,Ti$1,no$1,oo$1,xe],styles:[`
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
}`]})};function _a(a,r){if(a&1&&(U(0,`strong`),Te(1),H()),a&2){let t=P(2);k$1(),je$3(t.text().brand)}}function ya(a,r){if(a&1&&(U(0,`a`,13),Fe$1(1,`bx-icon`,14),ae(2,_a,2,1,`strong`),H()),a&2){let t=r.$implicit,e=P();$(`aria-label`,e.text().brand),k$1(2),se(t?-1:2)}}function va(a,r){if(a&1){let t=gr();U(0,`button`,15),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.action.set(`top.actionDone`))}),Fe$1(1,`bx-icon`,16),Te(2),H(),U(3,`button`,15),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.action.set(`top.helpDone`))}),Fe$1(4,`bx-icon`,17),Te(5),H()}if(a&2){let t=P(2);k$1(2),mr(``,t.text().settings,` `),k$1(3),mr(``,t.text().help,` `)}}function ha(a,r){if(a&1&&ae(0,va,6,2),a&2){let t=P();se(t.actions()?0:-1)}}function xa(a,r){if(a&1&&(Fe$1(0,`bx-icon`,18),U(1,`span`),Te(2),H(),U(3,`small`,19),Te(4,`↗`),H()),a&2){let t=r.$implicit;oe(`name`,t.icon?.name??`circle`),k$1(2),je$3(t.label)}}var Je=class a{navigationDemoI18nService=p(J);groups=v(()=>Ke(`/components/top-nav`,this.navigationDemoI18nService).map(t=>t.id!==`workspace`?t:s(r({},t),{items:t.items.filter(e=>e.id===`overview`||e.id===`projects`).map(e=>e.id!==`projects`?e:s(r({},e),{children:[...e.children??[],...t.items.filter(o=>o.id===`reports`||o.id===`disabled`)]}))})));compact=E(!1);searchable=E(!0);icons=E(!1);sticky=E(!1);rtl=E(!1);custom=E(!1);actions=E(!1);width=E(1100);selected=E(void 0);action=E(void 0);text=v(()=>({compact:this.navigationDemoI18nService.translate(`top.compact`),width:this.navigationDemoI18nService.translate(`top.width`),icons:this.navigationDemoI18nService.translate(`top.icons`),sticky:this.navigationDemoI18nService.translate(`top.sticky`),custom:this.navigationDemoI18nService.translate(`top.custom`),actions:this.navigationDemoI18nService.translate(`top.actions`),search:this.navigationDemoI18nService.translate(`demo.search`),rtl:this.navigationDemoI18nService.translate(`demo.rtl`),language:this.navigationDemoI18nService.translate(`demo.language`),brand:this.navigationDemoI18nService.translate(`demo.studio`),title:this.navigationDemoI18nService.translate(`top.title`),description:this.navigationDemoI18nService.translate(`top.description`),compactMode:this.navigationDemoI18nService.translate(`top.modeCompact`),expandedMode:this.navigationDemoI18nService.translate(`top.modeExpanded`),settings:this.navigationDemoI18nService.translate(`top.settings`),help:this.navigationDemoI18nService.translate(`top.help`)}));selection=v(()=>{let r=this.selected(),t=this.action();return t?this.navigationDemoI18nService.translate(t):r?`${this.navigationDemoI18nService.translate(`nav.${r.id}`)} \xB7 ${r.id}`:this.navigationDemoI18nService.translate(`demo.select`)});config=v(()=>({position:this.sticky()?`sticky`:`inline`,compactBreakpoint:`sm`,compact:this.compact()?!0:void 0,searchable:this.searchable(),showItemIcons:this.icons(),showSectionIcons:this.icons(),ariaLabel:{key:`top.name`},searchLabel:{key:`nav.search`},searchPlaceholder:{key:`top.searchPlaceholder`},clearSearchLabel:{key:`nav.clear`},emptyText:{key:`nav.empty`},openLabel:{key:`nav.open`},closeLabel:{key:`nav.close`},submenuLabel:{key:`nav.submenu`},resultLabel:{key:`nav.result`},backLabel:{key:`nav.back`},pathLabel:{key:`nav.path`}}));select(r){this.action.set(void 0),this.selected.set(r)}static ɵfac=function(t){return new(t||a)};static ɵcmp=z({type:a,selectors:[[`app-top-nav-examples`]],features:[Ft([J,{provide:De,useExisting:J}])],decls:27,vars:32,consts:[[`nav`,``],[`customItem`,``],[1,`demo-language-row`],[`subscriptSizing`,`dynamic`,3,`selectionChange`,`label`,`clearable`,`options`,`value`],[1,`top-nav-demo-controls`],[3,`checkedChange`,`label`,`checked`],[`type`,`number`,3,`valueChange`,`label`,`min`,`max`,`value`],[1,`top-nav-demo-frame`],[3,`itemSelected`,`config`,`groups`,`itemTemplate`],[`bxTopNavBrand`,``],[`bxTopNavActions`,``],[1,`top-nav-demo-content`],[`aria-live`,`polite`],[`routerLink`,`/components/top-nav/overview`,1,`top-nav-demo-brand`],[`name`,`blocks`,`size`,`24`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`type`,`button`,3,`click`],[`name`,`settings`,`size`,`20`],[`name`,`circle-help`,`size`,`20`],[`size`,`20`,3,`name`],[`aria-hidden`,`true`]],template:function(t,e){if(t&1){let o=gr();U(0,`div`,2)(1,`bx-select`,3),xe$1(`selectionChange`,function(d){return e.navigationDemoI18nService.setLanguage(d.value)}),H()(),U(2,`div`,4)(3,`bx-checkbox`,5),LS(`checkedChange`,function(d){return At(o),O1(e.compact,d)||(e.compact=d),Ot(d)}),H(),U(4,`bx-checkbox`,5),LS(`checkedChange`,function(d){return At(o),O1(e.searchable,d)||(e.searchable=d),Ot(d)}),H(),U(5,`bx-checkbox`,5),LS(`checkedChange`,function(d){return At(o),O1(e.icons,d)||(e.icons=d),Ot(d)}),H(),U(6,`bx-checkbox`,5),LS(`checkedChange`,function(d){return At(o),O1(e.sticky,d)||(e.sticky=d),Ot(d)}),H(),U(7,`bx-checkbox`,5),LS(`checkedChange`,function(d){return At(o),O1(e.rtl,d)||(e.rtl=d),Ot(d)}),H(),U(8,`bx-checkbox`,5),LS(`checkedChange`,function(d){return At(o),O1(e.custom,d)||(e.custom=d),Ot(d)}),H(),U(9,`bx-checkbox`,5),LS(`checkedChange`,function(d){return At(o),O1(e.actions,d)||(e.actions=d),Ot(d)}),H(),U(10,`bx-input-field`,6),LS(`valueChange`,function(d){return At(o),O1(e.width,d)||(e.width=d),Ot(d)}),H()(),U(11,`div`,7)(12,`bx-top-nav`,8,0),xe$1(`itemSelected`,function(d){return e.select(d)}),hS(14,ya,3,2,`ng-template`,9)(15,ha,1,1,`ng-template`,10),H(),U(16,`div`,11)(17,`h3`),Te(18),H(),U(19,`p`),Te(20),H(),U(21,`p`),Te(22),H(),U(23,`output`,12),Te(24),H()()(),hS(25,xa,5,2,`ng-template`,null,1,kb)}if(t&2){let o=ns(13),c=ns(26);k$1(),oe(`label`,e.text().language)(`clearable`,!1)(`options`,e.navigationDemoI18nService.languages)(`value`,e.navigationDemoI18nService.language()),k$1(2),oe(`label`,e.text().compact),PS(`checked`,e.compact),k$1(),oe(`label`,e.text().search),PS(`checked`,e.searchable),k$1(),oe(`label`,e.text().icons),PS(`checked`,e.icons),k$1(),oe(`label`,e.text().sticky),PS(`checked`,e.sticky),k$1(),oe(`label`,e.text().rtl),PS(`checked`,e.rtl),k$1(),oe(`label`,e.text().custom),PS(`checked`,e.custom),k$1(),oe(`label`,e.text().actions),PS(`checked`,e.actions),k$1(),oe(`label`,e.text().width)(`min`,280)(`max`,1600),PS(`value`,e.width),k$1(),we$1(`width`,e.width()+`px`),$(`dir`,e.rtl()?`rtl`:`ltr`),k$1(),oe(`config`,e.config())(`groups`,e.groups())(`itemTemplate`,e.custom()?c:void 0),k$1(6),je$3(e.text().title),k$1(2),je$3(e.text().description),k$1(2),je$3(o.isCompact()?e.text().compactMode:e.text().expandedMode),k$1(2),je$3(e.selection())}},dependencies:[Hp,Fe,an,nn,Z$1,Ti$1,no$1,oo$1,vn],styles:[`
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
}`]})};var ii=Array.from({length:3e3},(a,r)=>({id:r,title:`Item ${r+1}`,description:`Variable-height content wraps when the grid changes width. `.repeat(1+r%5)}));function fa(a,r){if(a&1&&(U(0,`p`),Te(1),H()),a&2){let t=P().$implicit;k$1(),NS(``,t.description,` `,t.description)}}function Sa(a,r){if(a&1){let t=gr();U(0,`bx-card`,12)(1,`p`),Te(2),H(),ae(3,fa,2,2,`p`),U(4,`button`,5),xe$1(`click`,function(){let o=At(t).$implicit,c=P();return Ot(c.toggle(o.id))}),Te(5),H()()}if(a&2){let t=r.$implicit,e=P();oe(`title`,t.title)(`headingLevel`,3)(`surfaceEffects`,!1)(`opaque`,!0),k$1(2),je$3(t.description),k$1(),se(e.expanded().has(t.id)?3:-1),k$1(),$(`aria-expanded`,e.expanded().has(t.id)),k$1(),mr(` `,e.expanded().has(t.id)?`Less content`:`More content`,` `)}}var $e=class a{items=ii;itemKey=r=>r.id;layouts=[{label:`Responsive grid`,value:`grid`},{label:`Vertical list`,value:`list`}];layout=E(`grid`);width=E(100);index=E(1500);expanded=E(/* @__PURE__ */ new Set);config=v(()=>({layout:this.layout(),minColumnWidth:`12rem`,estimatedRowHeight:200,overscan:800}));toggle(r){this.expanded.update(t=>{let e=new Set(t);return e.has(r)?e.delete(r):e.add(r),e})}static ɵfac=function(t){return new(t||a)};static ɵcmp=z({type:a,selectors:[[`app-virtual-collection-examples`]],decls:15,vars:20,consts:[[`viewport`,``],[`collection`,``],[1,`virtual-demo-controls`],[`label`,`Layout`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Scroll to index`,`type`,`number`,3,`ngModelChange`,`min`,`max`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`for`,`virtual-demo-width`],[`id`,`virtual-demo-width`,`bxSlider`,``,`type`,`range`,`min`,`40`,`max`,`100`,3,`ngModelChange`,`ngModel`],[`role`,`status`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Virtual collection example`,1,`virtual-demo-viewport`],[3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[3,`title`,`headingLevel`,`surfaceEffects`,`opaque`]],template:function(t,e){if(t&1){let o=gr();U(0,`div`,2)(1,`bx-select`,3),zR(),xe$1(`ngModelChange`,function(d){return e.layout.set(d)}),H(),U(2,`bx-input-field`,4),zR(),xe$1(`ngModelChange`,function(d){return e.index.set(d)}),H(),U(3,`button`,5),xe$1(`click`,function(){At(o);let d=ns(13);return Ot(d.scrollToIndex(e.index()))}),Te(4,`Scroll to item`),H()(),U(5,`label`,6),Te(6),H(),U(7,`input`,7),zR(),xe$1(`ngModelChange`,function(d){return e.width.set(d)}),H(),U(8,`p`,8),Te(9),H(),U(10,`div`,9,0)(12,`bx-virtual-collection`,10,1),hS(14,Sa,6,8,`ng-template`,11),H()()}if(t&2){let o=ns(11),c=ns(13);k$1(),oe(`clearable`,!1)(`options`,e.layouts)(`ngModel`,e.layout()),qR(),k$1(),oe(`min`,0)(`max`,e.items.length-1)(`ngModel`,e.index()),qR(),k$1(4),mr(`Container width `,e.width(),`%`),k$1(),oe(`ngModel`,e.width()),qR(),k$1(2),OS(` `,c.renderedItems().length,` mounted of `,e.items.length,` · `,c.renderedRange().columns,` columns · range `,c.renderedRange().start,`–`,c.renderedRange().end,`
`),k$1(),we$1(`inline-size`,e.width(),`%`),k$1(2),oe(`items`,e.items)(`trackBy`,e.itemKey)(`config`,e.config())(`scrollContainer`,o),k$1(2),oe(`bxVirtualItem`,c)}},dependencies:[qte,rk,l2,Vte,a2,Z$1,no$1,oo$1,Qn$1,hM,_M,Jc],styles:[`
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
}`]})};function Ca(a,r){if(a&1&&(U(0,`div`)(1,`strong`),Te(2),H()()),a&2){let t=P();k$1(2),je$3(t.data.title)}}function wa(a,r){if(a&1){let t=gr();U(0,`div`,4)(1,`button`,5),xe$1(`click`,function(){At(t);let o=P();return Ot(o.close())}),Te(2,`Cancel`),H(),U(3,`button`,6),xe$1(`click`,function(){At(t);let o=P();return Ot(o.confirm())}),Te(4,`Save changes`),H()()}}var et=class a extends cn{name=new Ck(`Blocks workspace`,{nonNullable:!0});confirm(){this.modal.close(`confirm`,this.name.value)}static ɵfac=(()=>{let r;return function(e){return(r||(r=yo$1(a)))(e||a)}})();static ɵcmp=z({type:a,selectors:[[`app-component-dialog`]],features:[sn],decls:6,vars:2,consts:[[4,`appModalHeader`],[1,`dialog-body`],[`label`,`Project name`,3,`formControl`],[`class`,`dialog-actions`,4,`appModalFooter`],[1,`dialog-actions`],[`type`,`button`,`bx-button`,``,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(t,e){t&1&&(hS(0,Ca,3,1,`div`,0),U(1,`div`,1)(2,`p`),Te(3),H(),U(4,`bx-input-field`,2),zR(),H()(),hS(5,wa,5,0,`div`,3)),t&2&&(k$1(3),je$3(e.data.description),k$1(),oe(`formControl`,e.name),qR())},dependencies:[Z$1,no$1,Ute,Vte,u2,pn,mn],styles:[`
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
}`]})};var Ea=()=>({required:`Enter a project name.`});var ka=()=>({email:`Enter a valid email address.`});var Ta=()=>({name:`settings`});var Ma=a=>({text:`Project settings`,icon:a});function Pa(a,r){a&1&&(U(0,`div`,10),Fe$1(1,`app-side-nav-examples`),H())}function Da(a,r){a&1&&(U(0,`div`,10),Fe$1(1,`app-top-nav-examples`),H())}function Na(a,r){a&1&&(U(0,`div`,10),Fe$1(1,`app-stepper-examples`),H())}function Ia(a,r){a&1&&Fe$1(0,`app-virtual-collection-examples`)}function Oa(a,r){a&1&&Fe$1(0,`app-resize-handle-examples`)}function Va(a,r){a&1&&Fe$1(0,`app-side-panel-examples`)}function za(a,r){a&1&&Fe$1(0,`app-infinite-scroll-examples`)}function Wa(a,r){a&1&&Fe$1(0,`app-essentials-examples`,21)}function Ra(a,r){a&1&&Fe$1(0,`app-essentials-examples`,22)}function La(a,r){a&1&&Fe$1(0,`app-essentials-examples`,23)}function Aa(a,r){a&1&&Fe$1(0,`app-essentials-examples`,24)}function Ba(a,r){a&1&&Fe$1(0,`app-essentials-examples`,25)}function Fa(a,r){a&1&&Fe$1(0,`app-essentials-examples`,26)}function ja(a,r){a&1&&Fe$1(0,`app-essentials-examples`,27)}function qa(a,r){a&1&&Fe$1(0,`app-essentials-examples`,28)}function Ha(a,r){a&1&&Fe$1(0,`app-essentials-examples`,29)}function Ua(a,r){a&1&&Fe$1(0,`app-page-examples`)}function Ga(a,r){a&1&&Fe$1(0,`app-essentials-examples`,30)}function Ka(a,r){a&1&&Fe$1(0,`app-essentials-examples`,31)}function Xa(a,r){a&1&&Fe$1(0,`app-essentials-examples`,32)}function Qa(a,r){a&1&&Fe$1(0,`app-tag-examples`)}function Ya(a,r){a&1&&Fe$1(0,`app-truncation-examples`)}function Za(a,r){a&1&&Fe$1(0,`app-form-examples`,33)}function Ja(a,r){a&1&&Fe$1(0,`app-form-examples`,34)}function $a(a,r){a&1&&Fe$1(0,`app-form-examples`,35)}function eo(a,r){a&1&&Fe$1(0,`app-form-examples`,36)}function to(a,r){a&1&&Fe$1(0,`app-form-examples`,37)}function no(a,r){a&1&&Fe$1(0,`app-form-examples`,38)}function io(a,r){a&1&&Fe$1(0,`app-form-examples`,39)}function ao(a,r){a&1&&Fe$1(0,`app-form-examples`,40)}function oo(a,r){a&1&&Fe$1(0,`app-form-examples`,41)}function ro(a,r){a&1&&Fe$1(0,`app-form-examples`,42)}function lo(a,r){a&1&&Fe$1(0,`app-form-examples`,43)}function so(a,r){a&1&&Fe$1(0,`app-form-examples`,44)}function co(a,r){a&1&&Fe$1(0,`app-form-examples`,45)}function po(a,r){if(a&1){let t=gr();U(0,`div`,46)(1,`div`,51)(2,`button`,52),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.activate(`Primary action`))}),Te(3,`Primary action`),H(),U(4,`button`,53),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.activate(`Tonal action`))}),Te(5,`Tonal`),H(),U(6,`button`,54),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.activate(`Text action`))}),Te(7,`Text`),H(),U(8,`button`,55),Te(9,`Disabled`),H()(),U(10,`div`,51)(11,`button`,56),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.activate(`Success`))}),Te(12,`Success`),H(),U(13,`button`,57),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.activate(`Warning`))}),Te(14,`Warning`),H(),U(15,`button`,58),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.activate(`Delete`))}),Te(16,`Delete`),H(),U(17,`button`,59),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.activate(`Add item`))}),Fe$1(18,`bx-icon`,60),H()(),U(19,`div`,51)(20,`button`,61),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.activate(`Close example`))}),Fe$1(21,`bx-icon`,62),H(),U(22,`button`,63),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.activate(`Outlined action`))}),Te(23,`Outlined`),H(),U(24,`button`,64),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.activate(`Action without runtime effects`))}),Te(25,` Without runtime effects `),H()()()}a&2&&(k$1(8),oe(`disabled`,!0),k$1(14),oe(`outlined`,!0),k$1(2),oe(`surfaceEffects`,!1))}function mo(a,r){if(a&1&&(U(0,`div`,46)(1,`bx-checkbox`,65),zR(),H(),U(2,`bx-checkbox`,66),zR(),H(),U(3,`div`,51),Fe$1(4,`bx-checkbox-indicator`,67),U(5,`span`),Te(6),H()(),U(7,`div`,51),Fe$1(8,`bx-checkbox-indicator`),U(9,`span`),Te(10,`Unchecked`),H(),Fe$1(11,`bx-checkbox-indicator`,68),U(12,`span`),Te(13,`Checked`),H(),Fe$1(14,`bx-checkbox-indicator`,69),U(15,`span`),Te(16,`Partial`),H()()()),a&2){let t=P(2);k$1(),oe(`formControl`,t.checked),qR(),k$1(),oe(`formControl`,t.secondChecked),qR(),k$1(2),oe(`checked`,t.checked.value)(`indeterminate`,t.secondChecked.value),k$1(2),mr(`Selection: `,t.secondChecked.value?`partial`:t.checked.value?`checked`:`unchecked`),k$1(5),oe(`checked`,!0),k$1(3),oe(`indeterminate`,!0)}}function uo(a,r){if(a&1&&(U(0,`div`,46)(1,`bx-checkbox`,70),zR(),H(),U(2,`bx-checkbox`,71),zR(),H(),Fe$1(3,`bx-checkbox`,72)(4,`bx-checkbox`,73)(5,`bx-checkbox`,74),U(6,`bx-checkbox`,75),zR(),H(),U(7,`output`),Te(8),H()()),a&2){let t=P(2);k$1(),oe(`formControl`,t.checked),qR(),k$1(),oe(`formControl`,t.secondChecked),qR(),k$1(),oe(`indeterminate`,!0),k$1(),oe(`checked`,!0)(`emissive`,!1),k$1(),oe(`checked`,!0)(`readOnly`,!0),k$1(),oe(`formControl`,t.disabledCheck),qR(),k$1(2),NS(`Updates: `,t.checked.value?`on`:`off`,` · Previews: `,t.secondChecked.value?`on`:`off`)}}function go(a,r){if(a&1){let t=gr();U(0,`div`,47)(1,`bx-form-field`,76)(2,`span`,77)(3,`input`,78),xe$1(`input`,function(o){At(t);let c=P(2);return Ot(c.updateField(o))})(`blur`,function(){At(t);let o=P(2);return Ot(o.showError.set(!0))}),H()()(),U(4,`button`,79),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.showError.set(!0))}),Te(5,`Validate name`),H(),U(6,`output`),Te(7),H()()}if(a&2){let t=P(2);k$1(),oe(`required`,!0)(`error`,t.fieldError()),k$1(2),oe(`value`,t.fieldValue()),$(`aria-invalid`,!!t.fieldError()),k$1(4),mr(`Value: `,t.fieldValue()||`empty`)}}function bo(a,r){if(a&1&&(U(0,`div`,47)(1,`bx-input-field`,80),zR(),H(),U(2,`bx-input-field`,81),zR(),H(),U(3,`bx-input-field`,82),zR(),H(),U(4,`output`),Te(5),H()()),a&2){let t=P(2);k$1(),oe(`errorMessages`,j1(9,Ea))(`formControl`,t.name),qR(),k$1(),oe(`errorMessages`,j1(10,ka))(`formControl`,t.email),qR(),k$1(),oe(`min`,1)(`max`,20)(`formControl`,t.quantity),qR(),k$1(2),NS(``,t.name.value,` · `,t.quantity.value,` members`)}}function _o(a,r){if(a&1){let t=gr();U(0,`fieldset`,46)(1,`legend`),Te(2,`Notification frequency`),H(),U(3,`bx-radio`,83),zR(),H(),U(4,`bx-radio`,84),zR(),H(),U(5,`bx-radio`,85),zR(),H(),U(6,`output`),Te(7),H(),U(8,`button`,54),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.frequency.reset())}),Te(9,`Reset frequency`),H()()}if(a&2){let t=P(2);k$1(3),oe(`formControl`,t.frequency),qR(),k$1(),oe(`formControl`,t.frequency),qR(),k$1(),oe(`formControl`,t.frequency),qR(),k$1(2),mr(`Selected: `,t.frequency.value)}}function yo(a,r){a&1&&Fe$1(0,`app-search-examples`)}function vo(a,r){a&1&&Fe$1(0,`app-form-examples`,48)}function ho(a,r){if(a&1){let t=gr();U(0,`div`,47)(1,`p`),Te(2,`Drag quickly to compare immediate native precision with the thumb's bounded stretch and release settling.`),H(),U(3,`label`,86),Te(4,`Volume`),H(),U(5,`input`,87),zR(),H(),U(6,`output`),Te(7),H(),U(8,`button`,54),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.volume.setValue(50))}),Te(9,`Reset volume`),H(),U(10,`label`,88),Te(11,`Unavailable range`),H(),Fe$1(12,`input`,89),U(13,`div`,51)(14,`button`,90),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.volume.setValue(20))}),Te(15,`20%`),H(),U(16,`button`,90),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.volume.setValue(80))}),Te(17,`80%`),H()()()}if(a&2){let t=P(2);k$1(5),oe(`formControl`,t.volume),qR(),k$1(2),mr(``,t.volume.value,`%`)}}function xo(a,r){if(a&1){let t=gr();U(0,`div`,46)(1,`p`),Te(2,` Toggle repeatedly or use the programmatic action while the thumb is moving. Appearance settings control reduced motion independently of opacity. `),H(),U(3,`bx-slide-toggle`,91),zR(),H(),U(4,`bx-slide-toggle`,75),zR(),H(),U(5,`output`),Te(6),H(),U(7,`button`,90),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.enabled.setValue(!o.enabled.value))}),Te(8,`Toggle programmatically`),H()()}if(a&2){let t=P(2);k$1(3),oe(`formControl`,t.enabled),qR(),k$1(),oe(`formControl`,t.disabledCheck),qR(),k$1(2),mr(`Notifications are `,t.enabled.value?`enabled`:`disabled`,`.`)}}function fo(a,r){if(a&1&&(U(0,`bx-error`,94),Te(1),H()),a&2){let t=P(3);k$1(),je$3(t.fieldError())}}function So(a,r){if(a&1){let t=gr();U(0,`div`,47)(1,`bx-form-field`,92)(2,`span`,77)(3,`input`,93),xe$1(`input`,function(o){At(t);let c=P(2);return Ot(c.updateField(o))})(`blur`,function(){At(t);let o=P(2);return Ot(o.showError.set(!0))}),H()(),ae(4,fo,2,1,`bx-error`,94),H(),U(5,`button`,79),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.showError.set(!0))}),Te(6,`Validate reference`),H()()}if(a&2){let t=P(2);k$1(3),oe(`value`,t.fieldValue()),$(`aria-invalid`,!!t.fieldError())(`aria-describedby`,t.fieldError()?`custom-error`:null),k$1(),se(t.fieldError()?4:-1)}}function Co(a,r){if(a&1&&(U(0,`p`),Te(1,`Keep related information together while showing one panel at a time.`),H(),U(2,`bx-input-field`,102),zR(),H()),a&2){let t=P(3);k$1(2),oe(`formControl`,t.tabNote),qR()}}function wo(a,r){a&1&&(U(0,`p`),Te(1,`Headers support arrow keys, Home and End. Panel content is created only when selected.`),H())}function Eo(a,r){a&1&&(U(0,`bx-tab`,99)(1,`p`),Te(2,`No recent project activity.`),H()())}function ko(a,r){if(a&1&&(U(0,`bx-tab`,103)(1,`p`),Te(2),H()()),a&2){let t=r.$implicit;oe(`label`,`Additional panel `+t)(`value`,`extra-`+t),k$1(2),mr(`Panel `,t,` keeps navigation reachable through the scrolling header.`)}}function To(a,r){if(a&1&&jn$1(0,ko,3,3,`bx-tab`,103,es),a&2){let t=P(3);zn$1(t.extraTabs)}}function Mo(a,r){if(a&1){let t=gr();U(0,`div`,46)(1,`p`),Te(2,` Switch quickly between unequal labels, resize the viewport, and use Appearance settings to compare motion and opaque surfaces. `),H(),U(3,`bx-tabs`,95,0),LS(`selectedValueChange`,function(o){At(t);let c=P(2);return O1(c.selectedTab,o)||(c.selectedTab=o),Ot(o)}),U(5,`bx-tab`,96),hS(6,Co,3,1,`ng-template`,97),H(),U(7,`bx-tab`,98),hS(8,wo,2,0,`ng-template`,97),H(),ae(9,Eo,3,0,`bx-tab`,99),Fe$1(10,`bx-tab`,100),ae(11,To,2,0),H(),U(12,`div`,51)(13,`button`,79),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.tabsVariant.set(o.tabsVariant()===`segmented`?`underline`:`segmented`))}),Te(14,` Underline appearance `),H(),U(15,`button`,79),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.detailsDisabled.set(!o.detailsDisabled()))}),Te(16,` Disable details `),H(),U(17,`button`,79),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.showActivity.set(!o.showActivity()))}),Te(18,` Show activity `),H()(),U(19,`output`),Te(20),H(),U(21,`div`,51)(22,`button`,90),xe$1(`click`,function(){At(t);let o=ns(4);return Ot(o.select(`overview`))}),Te(23,`Select overview`),H(),U(24,`button`,101),xe$1(`click`,function(){At(t);let o=ns(4);return Ot(o.select(`activity`))}),Te(25,`Select activity`),H(),U(26,`button`,90),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.overflowTabs.set(!o.overflowTabs()))}),Te(27,` Overflow tabs `),H()()()}if(a&2){let t=P(2);k$1(3),oe(`variant`,t.tabsVariant()),PS(`selectedValue`,t.selectedTab),k$1(4),oe(`disabled`,t.detailsDisabled()),k$1(2),se(t.showActivity()?9:-1),k$1(),oe(`disabled`,!0),k$1(),se(t.overflowTabs()?11:-1),k$1(2),$(`aria-pressed`,t.tabsVariant()===`underline`),k$1(2),$(`aria-pressed`,t.detailsDisabled()),k$1(2),$(`aria-pressed`,t.showActivity()),k$1(3),mr(`Selected: `,t.selectedTab()),k$1(4),oe(`disabled`,!t.showActivity()),k$1(2),$(`aria-pressed`,t.overflowTabs())}}function Po(a,r){a&1&&Fe$1(0,`app-menu-shortcut-examples`)}function Do(a,r){a&1&&Fe$1(0,`app-menu-shortcut-examples`)}function No(a,r){a&1&&(U(0,`div`,46),Fe$1(1,`bx-tooltip`,104),U(2,`p`),Te(3,`Standalone tooltip content. Use the trigger directive for positioned help.`),H(),U(4,`a`,105),Te(5,`Try the tooltip trigger`),H()())}function Io(a,r){if(a&1){let t=gr();U(0,`div`,46)(1,`div`,51)(2,`button`,106),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.activate(`Saved`))}),Te(3,` Save project`),H(),U(4,`button`,107),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.activate(`Normal tap activated`))}),Te(5,` Hold for a hint`),H(),U(6,`button`,108),Fe$1(7,`bx-icon`,109),H()(),U(8,`p`),Te(9,` Hover with a mouse or use keyboard focus for hints. On touch screens, Save project activates immediately, Hold for a hint supports a long press, and the information button opens help on tap. `),H()()}}function Oo(a,r){if(a&1){let t=gr();U(0,`bx-menu`)(1,`bx-menu-item`,112),xe$1(`action`,function(){At(t),P();let o=ns(2);return P(2).activate(`Project duplicated`),Ot(o.close())}),H(),U(2,`bx-menu-item`,113),xe$1(`action`,function(){At(t),P();let o=ns(2);return P(2).activate(`Project archived`),Ot(o.close())}),H(),U(3,`bx-menu-item`,114),xe$1(`action`,function(){At(t),P();let o=ns(2);return P(2).activate(`Delete requested`),Ot(o.close())}),H()()}a&2&&(k$1(3),oe(`danger`,!0))}function Vo(a,r){if(a&1&&(U(0,`div`,46)(1,`button`,110,1),Te(3,` Project actions `),Fe$1(4,`bx-icon`,111),H(),hS(5,Oo,4,1,`ng-template`,null,2,kb),U(7,`output`),Te(8),H(),U(9,`p`),Te(10,`Open, close, or reopen while the menu fades. Its contents keep their full size throughout.`),H()()),a&2){let t=ns(2),e=ns(6);k$1(),oe(`bxDropdown`,e),k$1(7),mr(`Transition: `,t.state())}}function zo(a,r){if(a&1){let t=gr();U(0,`bx-menu`)(1,`bx-menu-item`,116),xe$1(`action`,function(){At(t);let o=P(3);return Ot(o.activate(`Selection copied`))}),H(),U(2,`bx-menu-item`,117),xe$1(`action`,function(){At(t);let o=P(3);return Ot(o.activate(`Selection archived`))}),H()()}}function Wo(a,r){if(a&1){let t=gr();U(0,`div`,46)(1,`div`,115),Te(2,` Right-click, touch and hold, or focus here and press Shift + F10. `),H(),U(3,`button`,79),xe$1(`click`,function(o){At(t);let c=P(2);return Ot(c.openContextMenu(o))}),Te(4,`Open actions`),H(),hS(5,zo,3,0,`ng-template`,null,3,kb),U(7,`p`),Te(8,`Menu rows keep their hover and focus feedback inside the opaque panel.`),H()()}if(a&2){let t=ns(6);k$1(),oe(`bxContextMenu`,t)}}function Ro(a,r){a&1&&(U(0,`div`,46),Fe$1(1,`bx-breadcrumbs`,118),U(2,`p`),Te(3,`This trail comes from the current route metadata. Select Components to navigate back.`),H(),U(4,`a`,119),Te(5,`Navigate to Button`),H()()),a&2&&(k$1(),oe(`minimumBreadcrumbs`,1))}function Lo(a,r){a&1&&(U(0,`div`,46)(1,`div`,120),Fe$1(2,`bx-icon`,121)(3,`bx-icon`,122)(4,`bx-icon`,123)(5,`bx-icon`,124)(6,`bx-icon`,125),H(),U(7,`a`,126),Te(8,`Browse the searchable icon catalog`),H()()),a&2&&(k$1(2),oe(`decorative`,!1))}function Ao(a,r){if(a&1){let t=gr();U(0,`bx-modal-banner`,129),xe$1(`close`,function(){At(t);let o=P(3);return o.bannerVisible.set(!1),Ot(o.activate(`Banner dismissed`))}),H()}a&2&&oe(`header`,z1(3,Ma,j1(2,Ta)))(`showCloseButton`,!0)}function Bo(a,r){if(a&1){let t=gr();U(0,`button`,79),xe$1(`click`,function(){At(t);let o=P(3);return Ot(o.bannerVisible.set(!0))}),Te(1,`Restore banner`),H()}}function Fo(a,r){if(a&1){let t=gr();U(0,`div`,49),ae(1,Ao,1,5,`bx-modal-banner`,127)(2,Bo,2,0,`button`,128),U(3,`button`,52),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.openModal())}),Te(4,`See banner in a dialog`),H()()}if(a&2){let t=P(2);k$1(),se(t.bannerVisible()?1:2)}}function jo(a,r){if(a&1){let t=gr();U(0,`div`,46)(1,`div`,51)(2,`button`,56),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.notify(`success`))}),Te(3,`Success`),H(),U(4,`button`,130),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.notify(`info`))}),Te(5,`Information`),H(),U(6,`button`,57),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.notify(`warn`))}),Te(7,`Warning`),H(),U(8,`button`,58),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.notify(`danger`))}),Te(9,`Error`),H()(),U(10,`p`),Te(11,`The toast host manages the progress indicator, dismiss action, pause and cleanup.`),H(),U(12,`a`,131),Te(13,`Open the full toast configurator`),H()()}}function qo(a,r){if(a&1){let t=gr();U(0,`div`,46)(1,`div`,51)(2,`button`,56),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.notify(`success`))}),Te(3,`Show success`),H(),U(4,`button`,130),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.notify(`info`))}),Te(5,`Show information`),H(),U(6,`button`,57),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.notify(`warn`))}),Te(7,`Show warning`),H(),U(8,`button`,58),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.notify(`danger`))}),Te(9,`Show error`),H()(),U(10,`p`),Te(11,`Semantic colors remain tied to the active Blocks palette.`),H()()}}function Ho(a,r){if(a&1){let t=gr();U(0,`section`,50),Fe$1(1,`bx-icon`,132),U(2,`h3`),Te(3,`A custom Blocks surface`),H(),U(4,`p`),Te(5,`Material, blur, tint, lighting and motion follow the same global configuration as the controls around it.`),H(),U(6,`bx-checkbox`,133),LS(`checkedChange`,function(o){At(t);let c=P(2);return O1(c.surfaceEmission,o)||(c.surfaceEmission=o),Ot(o)}),H(),U(7,`button`,134),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.activate(`Custom surface action`))}),Te(8,` Try an action `),H(),U(9,`p`),Te(10,`Hover, keyboard focus and press retain local feedback. Enable emission to add the themed light source.`),H()()}if(a&2){let t=P(2);k$1(6),PS(`checked`,t.surfaceEmission),k$1(),oe(`surfaceEffects`,!1)(`bxSurfaceEmission`,t.surfaceEmission()?void 0:!1)}}function Uo(a,r){if(a&1){let t=gr();U(0,`button`,79),xe$1(`click`,function(){At(t);let o=P(3);return Ot(o.openModal(`left`))}),Te(1,`Open on the left`),H()}}function Go(a,r){if(a&1){let t=gr();U(0,`div`,46)(1,`div`,51)(2,`button`,52),xe$1(`click`,function(){At(t);let o=P(2);return Ot(o.openModal())}),Te(3),H(),ae(4,Uo,2,0,`button`,128),H(),U(5,`p`),Te(6,`Try editing, saving, pressing Escape, and dismissing through the backdrop. This is the actual service-created component.`),H(),U(7,`a`,135),Te(8,`Open the full modal configurator`),H()()}if(a&2){let t=P(2);k$1(3),mr(`Open `,t.entry().title.toLowerCase()),k$1(),se(t.entry().id===`modal-side`?4:-1)}}function Ko(a,r){if(a&1&&(U(0,`div`,11),ae(1,Ia,1,0,`app-virtual-collection-examples`)(2,Oa,1,0,`app-resize-handle-examples`)(3,Va,1,0,`app-side-panel-examples`)(4,za,1,0,`app-infinite-scroll-examples`)(5,Wa,1,0,`app-essentials-examples`,21)(6,Ra,1,0,`app-essentials-examples`,22)(7,La,1,0,`app-essentials-examples`,23)(8,Aa,1,0,`app-essentials-examples`,24)(9,Ba,1,0,`app-essentials-examples`,25)(10,Fa,1,0,`app-essentials-examples`,26)(11,ja,1,0,`app-essentials-examples`,27)(12,qa,1,0,`app-essentials-examples`,28)(13,Ha,1,0,`app-essentials-examples`,29)(14,Ua,1,0,`app-page-examples`)(15,Ga,1,0,`app-essentials-examples`,30)(16,Ka,1,0,`app-essentials-examples`,31)(17,Xa,1,0,`app-essentials-examples`,32)(18,Qa,1,0,`app-tag-examples`)(19,Ya,1,0,`app-truncation-examples`)(20,Za,1,0,`app-form-examples`,33)(21,Ja,1,0,`app-form-examples`,34)(22,$a,1,0,`app-form-examples`,35)(23,eo,1,0,`app-form-examples`,36)(24,to,1,0,`app-form-examples`,37)(25,no,1,0,`app-form-examples`,38)(26,io,1,0,`app-form-examples`,39)(27,ao,1,0,`app-form-examples`,40)(28,oo,1,0,`app-form-examples`,41)(29,ro,1,0,`app-form-examples`,42)(30,lo,1,0,`app-form-examples`,43)(31,so,1,0,`app-form-examples`,44)(32,co,1,0,`app-form-examples`,45)(33,po,26,3,`div`,46)(34,mo,17,7,`div`,46)(35,uo,9,10,`div`,46)(36,go,8,5,`div`,47)(37,bo,6,11,`div`,47)(38,_o,10,4,`fieldset`,46)(39,yo,1,0,`app-search-examples`)(40,vo,1,0,`app-form-examples`,48)(41,ho,18,2,`div`,47)(42,xo,9,3,`div`,46)(43,So,7,4,`div`,47)(44,Mo,28,12,`div`,46)(45,Po,1,0,`app-menu-shortcut-examples`)(46,Do,1,0,`app-menu-shortcut-examples`)(47,No,6,0,`div`,46)(48,Io,10,0,`div`,46)(49,Vo,11,2,`div`,46)(50,Wo,9,1,`div`,46)(51,Ro,6,1,`div`,46)(52,Lo,9,1,`div`,46)(53,Fo,5,1,`div`,49)(54,jo,14,0,`div`,46)(55,qo,12,0,`div`,46)(56,Ho,11,3,`section`,50)(57,Go,9,2,`div`,46),H()),a&2){let t,e=P();k$1(),se((t=e.entry().id)===`virtual-collection`?1:t===`resize-handle`?2:t===`side-panel`?3:t===`infinite-scroll`?4:t===`divider`?5:t===`popover`?6:t===`skeleton`?7:t===`autocomplete`?8:t===`chip`?9:t===`accordion`?10:t===`collapsible`?11:t===`alert`?12:t===`card`?13:t===`page-container`?14:t===`container`?15:t===`stack`?16:t===`grid`?17:t===`tag`?18:t===`truncate`?19:t===`signal-forms`?20:t===`radio-group`?21:t===`multi-select`?22:t===`load-more`?23:t===`loading-spinner`?24:t===`loading-indicator`?25:t===`progress-bar`?26:t===`button-loading`?27:t===`range-slider`?28:t===`hint`?29:t===`prefix`?30:t===`suffix`?31:t===`native-control`?32:t===`button`?33:t===`checkbox-indicator`?34:t===`checkbox`?35:t===`form-field`?36:t===`input-field`?37:t===`radio`?38:t===`search-input`?39:t===`select`?40:t===`slider`?41:t===`slide-toggle`?42:t===`error`?43:t===`tabs`?44:t===`menu`?45:t===`menu-item`?46:t===`tooltip`?47:t===`tooltip-directive`?48:t===`dropdown`?49:t===`context-menu`?50:t===`breadcrumbs`?51:t===`icon`?52:t===`modal-banner`?53:t===`toast-core`?54:t===`simple-toast`?55:t===`surface`?56:57)}}var ai=class a{activatedRoute=p(qr);modalService=p(Ce$1);toastrService=p(Be);routeData=xY(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});contextMenu=bn(eh);entry=v(()=>e.find(r=>r.id===this.routeData().componentId)??e[0]);count=E(0);status=E(`Ready to try.`);fieldValue=E(``);showError=E(!1);surfaceEmission=E(!1);fieldError=v(()=>this.showError()&&this.fieldValue().trim().length<3?`Enter at least three characters.`:void 0);name=new Ck(`Blocks workspace`,{nonNullable:!0,validators:Rs.required});email=new Ck(``,{nonNullable:!0,validators:Rs.email});volume=new Ck(50,{nonNullable:!0});quantity=new Ck(3,{nonNullable:!0});checked=new Ck(!0,{nonNullable:!0});secondChecked=new Ck(!1,{nonNullable:!0});disabledCheck=new Ck({value:!1,disabled:!0},{nonNullable:!0});frequency=new Ck(`weekly`,{nonNullable:!0});destination=new Ck(`skopje`,{nonNullable:!0});enabled=new Ck(!0,{nonNullable:!0});bannerVisible=E(!0);selectedTab=E(`overview`);tabsVariant=E(`segmented`);detailsDisabled=E(!1);showActivity=E(!0);overflowTabs=E(!1);extraTabs=[1,2,3,4,5,6,7,8];tabNote=new Ck(``,{nonNullable:!0});options=[{label:`Skopje`,value:`skopje`},{label:`Ohrid`,value:`ohrid`},{label:`Bitola`,value:`bitola`},{label:`Unavailable destination`,value:`unavailable`,disabled:!0}];activate(r){this.count.update(t=>t+1),this.status.set(`${r} \xB7 action ${this.count()}`)}updateField(r){this.fieldValue.set(r.target.value)}openContextMenu(r){r.preventDefault();let t=r.currentTarget.getBoundingClientRect();this.contextMenu()?.open(new MouseEvent(`contextmenu`,{clientX:t.left+16,clientY:t.bottom+4}))}openModal(r){let t=r??(this.entry().id===`modal-side`?`right`:this.entry().id===`modal-bottom-sheet`?`bottom-sheet`:`center`);this.modalService.open(et,{data:{title:this.entry().title,description:`Edit the project name. The header, content, footer, backdrop and close behavior use the existing Blocks modal composition.`},header:{text:this.entry().title},style:{layout:t,hasBackdrop:!0,animate:!0,showCloseButton:!0}}).afterClosed().subscribe(o=>this.status.set(o.state===`confirm`?`Saved: ${o.data}`:`Dialog dismissed.`))}notify(r){let t={title:r===`success`?`Settings saved`:r===`warn`?`Review needed`:r===`danger`?`Action failed`:`Workspace update`,message:`This notification follows the application theme and appearance settings.`,durationInMs:4500};switch(r){case`success`:this.toastrService.queueSuccess(t);break;case`info`:this.toastrService.queueInfo(t);break;case`warn`:this.toastrService.queueWarning(t);break;case`danger`:this.toastrService.queueDanger(t)}this.status.set(`${r} notification queued.`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=z({type:a,selectors:[[`app-component-demo`]],viewQuery:function(t,e){t&1&&Tn(e.contextMenu,eh,5),t&2&&It()},decls:28,vars:7,consts:[[`pilotTabs`,``],[`dropdown`,`bxDropdown`],[`dropdownActions`,``],[`contextActions`,``],[3,`pageDescription`],[1,`component-meta`],[`routerLink`,`/appearance`],[`aria-labelledby`,`preview-heading`,1,`demo-section`],[1,`section-heading`],[`id`,`preview-heading`],[1,`demo-stage`],[`bxSurface`,``,1,`demo-stage`],[`role`,`status`,`aria-live`,`polite`,1,`action-status`],[`aria-labelledby`,`usage-heading`,1,`usage-section`],[`id`,`usage-heading`],[`tabindex`,`0`,`aria-label`,`TypeScript import example`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`tabindex`,`0`,`aria-label`,`HTML usage example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`aria-label`,`Component documentation`,1,`documentation-section`],[3,`path`],[`example`,`divider`],[`example`,`popover`],[`example`,`skeleton`],[`example`,`autocomplete`],[`example`,`chip`],[`example`,`accordion`],[`example`,`collapsible`],[`example`,`alert`],[`example`,`card`],[`example`,`container`],[`example`,`stack`],[`example`,`grid`],[`example`,`signal-forms`],[`example`,`radio-group`],[`example`,`multi-select`],[`example`,`load-more`],[`example`,`loading-spinner`],[`example`,`loading-indicator`],[`example`,`progress-bar`],[`example`,`button-loading`],[`example`,`range-slider`],[`example`,`hint`],[`example`,`prefix`],[`example`,`suffix`],[`example`,`native-control`],[1,`demo-stack`],[1,`demo-stack`,`control-width`],[`example`,`select`],[1,`demo-stack`,`banner-preview`],[`bxSurface`,``,1,`custom-surface`],[1,`demo-row`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`accent`,3,`click`],[`type`,`button`,`bx-button`,``,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`disabled`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`fab`,`aria-label`,`Add item`,3,`click`],[`name`,`plus`],[`type`,`button`,`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Close example`,3,`click`],[`name`,`x`,`size`,`20`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`outlined`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`surfaceEffects`],[`label`,`Checked state`,3,`formControl`],[`label`,`Partial state`,3,`formControl`],[3,`checked`,`indeterminate`],[3,`checked`],[3,`indeterminate`],[`label`,`Receive product updates`,3,`formControl`],[`label`,`Include preview features`,3,`formControl`],[`label`,`Partial selection`,3,`indeterminate`],[`label`,`Without emission`,3,`checked`,`emissive`],[`label`,`Read-only selection`,3,`checked`,`readOnly`],[`label`,`Unavailable setting`,3,`formControl`],[`label`,`Project name`,`forId`,`field-preview`,3,`required`,`error`],[`bxSurface`,``,1,`native-control-surface`],[`id`,`field-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`label`,`Project name`,3,`errorMessages`,`formControl`],[`label`,`Email address`,`type`,`email`,3,`errorMessages`,`formControl`],[`label`,`Team members`,`type`,`number`,3,`min`,`max`,`formControl`],[`label`,`Daily summary`,`name`,`frequency-demo`,`value`,`daily`,3,`formControl`],[`label`,`Weekly summary`,`name`,`frequency-demo`,`value`,`weekly`,3,`formControl`],[`label`,`Only important updates`,`name`,`frequency-demo`,`value`,`important`,3,`formControl`],[`for`,`volume-demo`],[`bxSlider`,``,`id`,`volume-demo`,`type`,`range`,`min`,`0`,`max`,`100`,3,`formControl`],[`for`,`disabled-volume`],[`bxSlider`,``,`id`,`disabled-volume`,`type`,`range`,`value`,`30`,`disabled`,``],[`bx-button`,``,`type`,`button`,3,`click`],[`label`,`Enable notifications`,`hint`,`Receive updates for important activity.`,3,`formControl`],[`label`,`Reference`,`forId`,`error-preview`],[`id`,`error-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`id`,`custom-error`],[`ariaLabel`,`Project information`,3,`selectedValueChange`,`variant`,`selectedValue`],[`label`,`Overview`,`value`,`overview`,`icon`,`book-open`],[`bxTabContent`,``],[`label`,`Details`,`value`,`details`,`color`,`accent`,`icon`,`badge-check`,`endIcon`,`chevron-right`,3,`disabled`],[`label`,`Recent project activity`,`value`,`activity`,`color`,`info`,`textColor`,`text-warn`,`highlightColor`,`text-warn`,`contentColor`,`text-info`,`icon`,`activity`],[`label`,`Unavailable`,`value`,`unavailable`,3,`disabled`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[`label`,`Project note`,3,`formControl`],[3,`label`,`value`],[`text`,`Your changes are saved automatically.`],[`routerLink`,`/components/tooltip-directive`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`Saves the current project`,`placement`,`top`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`An optional hint revealed by touching and holding`,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`tooltip-hold-target`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`icon`,`aria-label`,`More information`,`bxTooltip`,`Appearance settings apply to all components`,`bxTooltipTouch`,`tap`,`placement`,`bottom`],[`name`,`info`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`bxTransition`,`fade`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[`tabindex`,`0`,1,`context-target`,3,`bxContextMenu`],[`label`,`Copy selection`,`icon`,`copy`,3,`action`],[`label`,`Archive selection`,`icon`,`archive`,3,`action`],[3,`minimumBreadcrumbs`],[`routerLink`,`/components/button`],[1,`demo-row`,`icon-row`],[`name`,`sparkles`,`size`,`32`,`color`,`text-accent`,`ariaLabel`,`Highlights`,3,`decorative`],[`name`,`check-circle`,`size`,`32`,`color`,`text-success`],[`name`,`info`,`size`,`32`,`color`,`text-info`,`bgColor`,`auto`],[`name`,`triangle-alert`,`size`,`32`,`color`,`text-warn`],[`name`,`heart`,`size`,`40`,`color`,`text-danger`],[`routerLink`,`/icon-catalog`],[3,`header`,`showCloseButton`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`],[3,`close`,`header`,`showCloseButton`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`routerLink`,`/toastr`],[`name`,`layers`,`size`,`28`],[`label`,`Emit interaction light`,3,`checkedChange`,`checked`],[`type`,`button`,`bx-button`,``,`bxSurface`,``,`variant`,`tonal`,3,`click`,`surfaceEffects`,`bxSurfaceEmission`],[`routerLink`,`/modal`]],template:function(t,e){t&1&&(U(0,`bx-page-container`)(1,`bx-page-header`,4)(2,`div`,5)(3,`code`),Te(4),H(),U(5,`a`,6),Te(6,`Configure appearance globally`),H()()(),U(7,`section`,7)(8,`div`,8)(9,`h2`,9),Te(10,`Interactive example`),H(),U(11,`span`),Te(12,`Uses your active palette`),H()(),ae(13,Pa,2,0,`div`,10)(14,Da,2,0,`div`,10)(15,Na,2,0,`div`,10)(16,Ko,58,1,`div`,11),U(17,`p`,12),Te(18),H()(),U(19,`section`,13)(20,`h2`,14),Te(21,`Quick usage`),H(),U(22,`pre`,15),Fe$1(23,`code`,16),H(),U(24,`pre`,17),Fe$1(25,`code`,18),H()(),U(26,`section`,19),Fe$1(27,`app-readme`,20),H()()),t&2&&(k$1(),oe(`pageDescription`,e.entry().description),k$1(3),je$3(e.entry().selector),k$1(9),se(e.entry().id===`side-nav`?13:e.entry().id===`top-nav`?14:e.entry().id===`stepper`?15:16),k$1(5),je$3(e.status()),k$1(5),oe(`highlight`,`import { `+e.entry().symbol+` } from '`+e.entry().package+`';`),k$1(2),oe(`highlight`,e.entry().example),k$1(2),oe(`path`,e.entry().readme))},dependencies:[He,Qe,Ue,$e,bt,xM,Vs,ht,Hp,X,Ge,je,qe,Ze,Ye,Xe,Je,xe,Ute,rk,l2,Vte,u2,Z$1,Ti$1,je$2,ne,no$1,to$1,Qn$1,ao$1,V,eM,Jk,Jf,sM,eh,Fs,aM,Kc,Gc,Kt,vn,Bt,G,k],styles:[`
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