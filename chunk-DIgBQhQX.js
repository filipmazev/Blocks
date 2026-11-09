import{t as Be}from"./chunk-BXuB7hEP.js";import{a as dt,i as bt,n as X,r as Z,t as P}from"./chunk-COgPPsNX.js";import{A as S,B as Ut,E as tr,G as cn,H as We,J as tn,K as en,L as $e$1,R as Fe,T as sr,V as Ve,W as an,_ as je$1,a as Qn$1,b as mr,c as Us,d as Ys,k as e,p as ar,q as on,s as Ti$1,t as $r,w as rr,x as nr,z as He$1}from"./main-UTR3HEAF.js";import{a as Tn,i as On$1,n as G,r as Ne,s as kn}from"./chunk-SvZqUTHT.js";import{n as ht}from"./chunk-CaOOrMjs.js";import{a as ne,n as Z$1,s as qe$1,t as V}from"./chunk-C1FSODuM.js";import{$i as qf,$t as QA,A as E,Ai as nd,At as Mb,B as Ft,C as Co$1,Ci as mp,Cr as de,Da as wM,Dt as MM,Ea as vM,En as UM,Fa as yF,G as H,Gi as pi$1,Gr as hn,Hi as p,Hr as h,Ir as fne,It as NY,Jt as Ot,La as ye,Li as oa$1,Ln as Wf,M as Ee,Ma as xe$1,Mn as VM,N as Eo$1,Nr as fe,Nt as ND,Oa as we$1,Ot as MN,Qi as qM,Si as mne,T as DM,Ta as vF,Tn as UC,U as GA,Ua as zM,Ui as pD,Un as X$1,Ur as hM,V as G$1,Va as zC,Wa as za$1,Wn as Xa$1,Wt as Oa$1,X as He$2,Xi as q,Xn as ZR,Y as Ha$1,Z as Hn$1,Zi as qC,Zn as Zc,Zr as im,_ as CM,_n as TM,a as $p,bn as Te,ci as k0,ct as Jc,dr as be,ea as qn$1,er as _M,et as IM,f as BC,fi as ke,g as C,gr as ce,h as Be$1,hi as lm,ht as Kr,ia as rd,it as It,j as EM,ji as nm,jn as VC,ka as wr,ki as na$1,kr as ed,la as rp,li as kC,ln as Re,m as Ba$1,mi as le,mr as cM,n as $M,nt as Ib,oa as rm,ot as JA,p as BM,pi as lM,q as HC,qn as Yl,rn as Qc,s as AM,sa as rn,si as jt,sn as RM,t as $,tn as QR,u as At,ui as kF,ur as bM,va as td,vr as cne,vt as L,wa as v,wn as U,xi as mn,yn as Tb,z as Fe$1,za as yr,zr as gM,zt as Nn}from"./chunk-CmtaEU9W.js";import{n as s,t as r}from"./chunk-DFgPOoGa.js";var Dn=[`Skopje`,`Ohrid`,`Bitola`,`Prilep`,`Tetovo`,`Struga`,`Veles`,`Shtip`,`Kumanovo`,`Gevgelija`,`Kavadarci`,`Resen`,`Krusevo`,`Berovo`,`Debar`,`Strumica`,`Gostivar`,`Kicevo`,`Kratovo`,`Kocani`,`Radovish`,`Negotino`,`Delchevo`,`Vinica`].map(a=>({value:a}));var In=[{label:`1 suggestion`,value:1},{label:`3 suggestions`,value:3},{label:`12 suggestions`,value:12},{label:`All 24 suggestions`,value:24}];var On=[{label:`Primary`,value:`primary`},{label:`Accent`,value:`accent`},{label:`Success`,value:`text-success`},{label:`Info`,value:`text-info`}];var Ce=class a{destroyRef=p(U);query=C(``);matches=v(()=>Dn.filter(r=>r.value.toLowerCase().includes(this.query().toLowerCase())));options=C([]);loading=C(!1);searching=C(!1);error=C(void 0);hasMore=v(()=>this.options().length<this.matches().length);pageSize=C(3);failNext=C(!1);status=C(`Ready`);loadMoreConfig={text:`Load more suggestions`,loadingText:`Loading suggestions`,retryText:`Retry request`,variant:`tonal`,color:`accent`};timer;constructor(){this.destroyRef.onDestroy(()=>clearTimeout(this.timer))}search(r){clearTimeout(this.timer),this.query.set(r),this.error.set(void 0),this.loading.set(!0),this.searching.set(!0),this.status.set(`Replacing suggestions…`),this.timer=setTimeout(()=>{this.options.set(this.matches().slice(0,this.pageSize())),this.loading.set(!1),this.searching.set(!1),this.status.set(`First page ready`)},650)}loadMore(r){if(this.loading())return;this.loading.set(!0),this.error.set(void 0),this.status.set(`Request source: `+r.source);let t=this.failNext()&&r.source!==`retry`;this.failNext.set(!1),this.timer=setTimeout(()=>{t?(this.error.set(`The next page failed. Your results are kept.`),this.status.set(`Failed page retained. Choose Retry request.`)):(this.options.set(this.matches().slice(0,this.options().length+this.pageSize())),this.status.set(r.source===`retry`?`Retry succeeded`:`Page appended`)),this.loading.set(!1)},900)}setPageSize(r){let t=Number(r);this.pageSize.set(Number.isFinite(t)?Math.max(1,Math.min(24,Math.floor(t))):3),this.search(this.query())}static ɵfac=function(t){return new(t||a)};static ɵprov=X$1({token:a,factory:a.ɵfac})};var ri=()=>({ariaLabel:`Project details`});function li(a,r){a&1&&($(0,`p`),Te(1,`Full width separator`),q(),Be$1(2,`bx-divider`)(3,`bx-divider`,7)(4,`bx-divider`,8),$(5,`bx-stack`,9)(6,`span`),Te(7,`Start`),q(),Be$1(8,`bx-divider`,10),$(9,`span`),Te(10,`End`),q()())}function si(a,r){if(a&1){let t=yr();$(0,`bx-popover`)(1,`bx-stack`)(2,`strong`),Te(3,`Project details`),q(),$(4,`p`),Te(5,`Your changes are saved in this workspace.`),q(),Be$1(6,`bx-input-field`,13),$(7,`button`,14),ye(`click`,function(){At(t),L();let o=oa$1(2);return Ot(o.close())}),Te(8,`Done`),q()()()}}function ci(a,r){if(a&1&&($(0,`bx-stack`,11)(1,`button`,12,0),Te(3,` Open details `),q(),kC(4,si,9,0,`ng-template`,null,1,Tb),q(),$(6,`p`),Te(7,`Internal actions stay open. Escape, outside click and tabbing out dismiss the panel.`),q()),a&2){let t=oa$1(5);le(`wrap`,!0),E(),le(`bxPopover`,t)(`popoverConfig`,QA(3,ri))}}function di(a,r){a&1&&($(0,`bx-stack`),Be$1(1,`bx-skeleton`,16)(2,`bx-skeleton`,17)(3,`bx-skeleton`,18),q()),a&2&&(E(2),le(`lines`,3)(`decorative`,!1))}function pi(a,r){a&1&&($(0,`p`),Te(1,`Loaded content replaces the placeholders without moving the surrounding actions.`),q())}function mi(a,r){if(a&1){let t=yr();$(0,`button`,14),ye(`click`,function(){At(t);let o=L();return Ot(o.skeletonVisible.set(!o.skeletonVisible()))}),Te(1,`Toggle loaded content`),q(),$(2,`bx-card`,15),ce(3,di,4,2,`bx-stack`)(4,pi,2,0,`p`),q()}if(a&2){let t=L();E(3),de(t.skeletonVisible()?3:4)}}function ui(a,r){if(a&1){let t=yr();$(0,`bx-autocomplete`,19),ZR(),ye(`queryChange`,function(o){At(t);let c=L();return Ot(c.autocompleteDemoService.search(o))})(`loadMore`,function(o){At(t);let c=L();return Ot(c.autocompleteDemoService.loadMore(o))})(`optionSelected`,function(o){At(t);let c=L();return Ot(c.status.set(`Chose `+o.value))}),q(),$(1,`bx-stack`,20)(2,`button`,21),ye(`click`,function(){At(t);let o=L();return Ot(o.autocompleteDemoService.failNext.set(!0))}),Te(3,` Fail next page `),q(),$(4,`button`,22),ye(`click`,function(){At(t);let o=L();return Ot(o.autocompleteDemoService.search(``))}),Te(5,` Reload suggestions `),q(),$(6,`bx-checkbox`,23),UC(`checkedChange`,function(o){At(t);let c=L();return GA(c.readOnly,o)||(c.readOnly=o),Ot(o)}),q(),$(7,`bx-select`,24),ye(`selectionChange`,function(o){At(t);let c=L();return Ot(c.autocompleteDemoService.setPageSize(o.value))}),q()(),$(8,`output`),Te(9),q(),$(10,`p`),Te(11,` Choose Fail next page, load another page, then Retry request. Existing suggestions remain visible. Small pages show the load-more action; larger pages enable scrolling. Search for an unknown city to see the empty state and keep free text. `),q()}if(a&2){let t=L();le(`formControl`,t.destination)(`options`,t.autocompleteDemoService.options())(`externalFiltering`,!0)(`searching`,t.autocompleteDemoService.searching())(`loading`,t.autocompleteDemoService.loading())(`hasMore`,t.autocompleteDemoService.hasMore())(`loadError`,t.autocompleteDemoService.error())(`readOnly`,t.readOnly())(`loadMoreConfig`,t.autocompleteDemoService.loadMoreConfig),QR(),E(),le(`wrap`,!0)(`gap`,2),E(),le(`disabled`,t.autocompleteDemoService.loading()||!t.autocompleteDemoService.hasMore()),E(2),le(`disabled`,t.autocompleteDemoService.loading()),E(2),qC(`checked`,t.readOnly),E(),le(`clearable`,!1)(`options`,t.pageSizes)(`value`,t.autocompleteDemoService.pageSize()),E(2),zC(`Value: `,t.destination.value||`(empty)`,` · `,t.autocompleteDemoService.options().length,` suggestions loaded · `,t.autocompleteDemoService.status(),``,t.autocompleteDemoService.failNext()?` · Next page will fail`:``)}}function gi(a,r){if(a&1){let t=yr();$(0,`bx-chip`,30),ye(`removed`,function(){let o=At(t).$implicit,c=L(2);return Ot(c.removeChip(o))})(`activated`,function(){let o=At(t).$implicit,c=L(2);return Ot(c.status.set(`Activated `+o))}),q()}if(a&2){let t=r.$implicit,e=L(2);le(`label`,t)(`selectable`,!1)(`removable`,!0)(`config`,e.chipConfig)}}function bi(a,r){if(a&1){let t=yr();$(0,`bx-stack`,25)(1,`bx-chip`,26),UC(`selectedChange`,function(o){At(t);let c=L();return GA(c.selected,o)||(c.selected=o),Ot(o)}),q(),Hn$1(2,gi,1,4,`bx-chip`,27,na$1),Be$1(4,`bx-chip`,28)(5,`bx-chip`,29),q(),$(6,`button`,14),ye(`click`,function(){At(t);let o=L();return Ot(o.resetChips())}),Te(7,`Restore chips`),q(),$(8,`output`),Te(9),q()}if(a&2){let t=L();le(`wrap`,!0)(`gap`,2),E(),le(`config`,t.chipConfig),qC(`selected`,t.selected),E(),qn$1(t.removableChips()),E(2),le(`selected`,!0)(`readOnly`,!0)(`removable`,!0),E(),le(`disabled`,!0),E(4),wr(`Design selected: `,t.selected())}}function _i(a,r){a&1&&Be$1(0,`bx-tag`,38),a&2&&le(`focusable`,!1)}function yi(a,r){if(a&1&&(Te(0),Be$1(1,`bx-tag`,39)),a&2){let t=r.$implicit;wr(``,t,` `),E(),le(`leadingNumber`,2)(`focusable`,!1)}}function vi(a,r){a&1&&Be$1(0,`bx-input-field`,40)}function hi(a,r){if(a&1){let t=yr();$(0,`bx-checkbox`,31),UC(`checkedChange`,function(o){At(t);let c=L();return GA(c.multiple,o)||(c.multiple=o),Ot(o)}),q(),$(1,`bx-accordion`,32)(2,`bx-accordion-item`,33)(3,`p`),Te(4,`Your changes are saved in this workspace.`),q(),Be$1(5,`bx-input-field`,34),q(),$(6,`bx-accordion-item`,35)(7,`p`),Te(8,`Use arrows, Home and End between headings; Enter or Space toggles a section.`),q()(),Be$1(9,`bx-accordion-item`,36)(10,`bx-accordion-item`,37),q(),kC(11,_i,1,1,`ng-template`,null,2,Tb)(13,yi,2,3,`ng-template`,null,3,Tb)(15,vi,1,0,`ng-template`,null,4,Tb)}if(a&2){let t=oa$1(12),e=oa$1(14),o=oa$1(16),c=L();qC(`checked`,c.multiple),E(),le(`multiple`,c.multiple()),E(),le(`expanded`,!0)(`titleTemplate`,e)(`trailingTemplate`,t),E(7),le(`contentTemplate`,o),E(),le(`disabled`,!0)}}function xi(a,r){if(a&1){let t=yr();$(0,`bx-collapsible`,41),UC(`expandedChange`,function(o){At(t);let c=L();return GA(c.expanded,o)||(c.expanded=o),Ot(o)}),$(1,`p`),Te(2,`Your changes are saved in this workspace.`),q(),Be$1(3,`bx-input-field`,34),q(),$(4,`button`,14),ye(`click`,function(){At(t);let o=L();return Ot(o.expanded.set(!o.expanded()))}),Te(5,`Toggle from application`),q(),$(6,`bx-collapsible`,42)(7,`p`),Te(8,`This content remains accessible while user toggling is prevented.`),q()(),$(9,`output`),Te(10),q()}if(a&2){let t=L();le(`region`,!0),qC(`expanded`,t.expanded),E(6),le(`expanded`,!0)(`readOnly`,!0),E(4),wr(`Expanded: `,t.expanded())}}function fi(a,r){if(a&1&&Be$1(0,`bx-alert`,43),a&2){let t=r.$implicit;le(`tone`,t)(`title`,t)}}function Si(a,r){if(a&1){let t=yr();$(0,`button`,47),ye(`click`,function(){At(t);let o=L(2);return Ot(o.alertVisible.set(!0))}),Te(1,`Restore dismissible banner`),q()}}function Ci(a,r){if(a&1){let t=yr();Hn$1(0,fi,1,2,`bx-alert`,43,na$1),$(2,`bx-alert`,44),UC(`visibleChange`,function(o){At(t);let c=L();return GA(c.alertVisible,o)||(c.alertVisible=o),Ot(o)}),ye(`dismissed`,function(){At(t);let o=L();return Ot(o.status.set(`Banner dismissed`))}),Te(3,` Long content and actions wrap inside the available width. `),$(4,`button`,45),ye(`click`,function(){At(t);let o=L();return Ot(o.status.set(`Banner action`))}),Te(5,`Review changes`),q()(),ce(6,Si,2,0,`button`,46)}if(a&2){let t=L();qn$1(t.tones),E(2),le(`dismissible`,!0),qC(`visible`,t.alertVisible),E(4),de(t.alertVisible()?-1:6)}}function wi(a,r){if(a&1){let t=yr();$(0,`bx-stack`,48)(1,`bx-checkbox`,49),UC(`checkedChange`,function(o){At(t);let c=L();return GA(c.cardClickable,o)||(c.cardClickable=o),Ot(o)}),q(),$(2,`bx-checkbox`,50),UC(`checkedChange`,function(o){At(t);let c=L();return GA(c.cardDisabled,o)||(c.cardDisabled=o),Ot(o)}),q(),$(3,`bx-checkbox`,51),UC(`checkedChange`,function(o){At(t);let c=L();return GA(c.cardReadOnly,o)||(c.cardReadOnly=o),Ot(o)}),q(),$(4,`bx-select`,52),ye(`selectionChange`,function(o){At(t);let c=L();return Ot(c.cardHighlight.set(o.value??`accent`))}),q()(),$(5,`bx-grid`,53)(6,`bx-card`,54),UC(`selectedChange`,function(o){At(t);let c=L();return GA(c.cardSelected,o)||(c.cardSelected=o),Ot(o)}),ye(`activated`,function(){At(t);let o=L();return Ot(o.status.set(`Workspace activated`))}),$(7,`p`),Te(8,`Press anywhere, or use Enter and Space. Selection emits the chosen token through the shared surface lighting.`),q()(),$(9,`button`,55),ye(`activated`,function(){At(t);let o=L();return Ot(o.status.set(`Reports opened`))}),$(10,`p`),Te(11,`A native button card provides a single action without a selected state.`),q()(),$(12,`bx-card`,56)(13,`p`),Te(14,`A disabled card retains its content and selection but cannot be activated or focused.`),q()(),$(15,`bx-card`,57)(16,`p`),Te(17,`Read-only selection remains focusable and keeps its appearance.`),q()(),$(18,`bx-card`,58)(19,`p`),Te(20,`Ordinary cards remain containers for independent actions.`),q(),$(21,`button`,59),ye(`click`,function(){At(t);let o=L();return Ot(o.status.set(`Project opened`))}),Te(22,`Open project`),q()()(),$(23,`output`),Te(24),q()}if(a&2){let t=L();le(`wrap`,!0),E(),qC(`checked`,t.cardClickable),E(),qC(`checked`,t.cardDisabled),E(),qC(`checked`,t.cardReadOnly),E(),le(`options`,t.cardHighlightOptions)(`clearable`,!1)(`value`,t.cardHighlight()),E(2),le(`clickable`,t.cardClickable())(`disabled`,t.cardDisabled())(`readOnly`,t.cardReadOnly())(`highlightColor`,t.cardHighlight()),qC(`selected`,t.cardSelected),E(3),le(`highlightColor`,t.cardHighlight()),E(3),le(`clickable`,!0)(`disabled`,!0)(`selected`,!0),E(3),le(`clickable`,!0)(`readOnly`,!0)(`selected`,!0)(`highlightColor`,t.cardHighlight()),E(9),BC(`Workspace selected: `,t.cardSelected(),` · Highlight: `,t.cardHighlight())}}function Ei(a,r){if(a&1){let t=yr();$(0,`bx-container`,5)(1,`bx-stack`)(2,`bx-stack`,60)(3,`h3`),Te(4,`Workspace overview`),q(),$(5,`button`,14),ye(`click`,function(){At(t);let o=L();return Ot(o.status.set(`New project requested`))}),Te(6,`New project`),q()(),$(7,`bx-grid`,61)(8,`bx-card`,62)(9,`p`),Te(10,`Your changes are saved in this workspace.`),q(),$(11,`button`,59),ye(`click`,function(){At(t);let o=L();return Ot(o.status.set(`Opened project`))}),Te(12,`Open project`),q()(),$(13,`bx-card`,63)(14,`bx-stack`,64),Be$1(15,`bx-chip`,65),$(16,`p`),Te(17,`Cards and layout share the global material and semantic palette.`),q()()(),$(18,`bx-card`,66)(19,`p`),Te(20,`Resize this page or increase browser zoom to see the grid adapt.`),q()()()()()}a&2&&(E(14),le(`gap`,2),E(),le(`selectable`,!1))}var je=class a{injector=p(xe$1);autocompleteDemoService=p(Ce);chips=rp(EM);pageSizes=In;selected=C(!1);removableChips=C([`Angular`,`Design`,`Accessibility`]);tones=[`default`,`info`,`danger`,`warning`,`success`];skeletonVisible=C(!0);expanded=C(!1);multiple=C(!1);readOnly=C(!1);alertVisible=C(!0);status=C(`Ready`);destination=new ND(``);chipConfig={color:`accent`};cardHighlightOptions=On;cardHighlight=C(`accent`);cardClickable=C(!0);cardDisabled=C(!1);cardReadOnly=C(!1);cardSelected=C(!1);example=h.required();constructor(){be(()=>{this.example()===`autocomplete`&&this.autocompleteDemoService.search(``)})}removeChip(r){let t=this.removableChips().indexOf(r);this.removableChips.update(e=>e.filter(o=>o!==r)),this.status.set(`Removed `+r),Fe$1(()=>{let e=this.chips().slice(1);e[Math.min(t,e.length-1)]?.focus()},{injector:this.injector})}resetChips(){this.removableChips.set([`Angular`,`Design`,`Accessibility`])}static ɵfac=function(t){return new(t||a)};static ɵcmp=H({type:a,selectors:[[`app-essentials-examples`]],viewQuery:function(t,e){t&1&&Nn(e.chips,EM,5),t&2&&It()},hostAttrs:[`data-bx-light-scope`,``],inputs:{example:[1,`example`]},features:[jt([Ce])],decls:15,vars:2,consts:[[`popover`,`bxPopover`],[`details`,``],[`projectStatus`,``],[`projectHeading`,``],[`lazyContent`,``],[`size`,`full`,`landmark`,`region`,`ariaLabel`,`Workspace content`,1,`container-demo`],[`role`,`status`],[`label`,`Continue`],[`lineStyle`,`dashed`],[`direction`,`horizontal`,`align`,`stretch`],[`orientation`,`vertical`],[`direction`,`horizontal`,3,`wrap`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`bxPopover`,`popoverConfig`],[`label`,`Project note`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`title`,`Project details`],[`shape`,`circle`,`height`,`3rem`],[`label`,`Loading content`,3,`lines`,`decorative`],[`shape`,`rectangle`,`height`,`5rem`],[`label`,`Destination`,`placeholder`,`Type a city or a custom destination`,`loadingText`,`Loading suggestions`,`emptyText`,`No suggestions. Enter your own destination.`,3,`queryChange`,`loadMore`,`optionSelected`,`formControl`,`options`,`externalFiltering`,`searching`,`loading`,`hasMore`,`loadError`,`readOnly`,`loadMoreConfig`],[`direction`,`horizontal`,`align`,`center`,3,`wrap`,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`bx-button`,``,`type`,`button`,`variant`,`text`,3,`click`,`disabled`],[`label`,`Read only`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Page size`,`subscriptSizing`,`dynamic`,1,`autocomplete-page-size`,3,`selectionChange`,`clearable`,`options`,`value`],[`direction`,`horizontal`,3,`wrap`,`gap`],[`label`,`Design`,3,`selectedChange`,`config`,`selected`],[3,`label`,`selectable`,`removable`,`config`],[`label`,`Read only`,3,`selected`,`readOnly`,`removable`],[`label`,`Disabled`,3,`disabled`],[3,`removed`,`activated`,`label`,`selectable`,`removable`,`config`],[`label`,`Allow multiple open panels`,3,`checkedChange`,`checked`],[3,`multiple`],[`title`,`Project details`,3,`expanded`,`titleTemplate`,`trailingTemplate`],[`label`,`Project name`],[`title`,`Keyboard and focus`],[`title`,`Lazy content`,3,`contentTemplate`],[`title`,`Unavailable section`,3,`disabled`],[`text`,`Saved`,`size`,`small`,3,`focusable`],[`size`,`small`,3,`leadingNumber`,`focusable`],[`label`,`Created when opened`],[`title`,`Project details`,3,`expandedChange`,`region`,`expanded`],[`title`,`Read-only open section`,3,`expanded`,`readOnly`],[`message`,`Your changes are saved in this workspace.`,3,`tone`,`title`],[`tone`,`info`,`title`,`Project details`,`dismissLabel`,`Dismiss notification`,`dismissFocusTarget`,`restore-banner`,3,`visibleChange`,`dismissed`,`dismissible`,`visible`],[`type`,`button`,`bx-button`,``,`bxAlertActions`,``,`variant`,`tonal`,3,`click`],[`type`,`button`,`id`,`restore-banner`,`bx-button`,``,`variant`,`tonal`],[`type`,`button`,`id`,`restore-banner`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`direction`,`horizontal`,`align`,`center`,3,`wrap`],[`label`,`Clickable`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Disable selectable card`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Read-only selectable card`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Highlight token`,`subscriptSizing`,`dynamic`,3,`selectionChange`,`options`,`clearable`,`value`],[`minColumnWidth`,`14rem`],[`title`,`Selectable workspace`,`ariaLabel`,`Select workspace`,3,`selectedChange`,`activated`,`clickable`,`disabled`,`readOnly`,`highlightColor`,`selected`],[`type`,`button`,`bx-card`,``,`title`,`Open reports`,`ariaLabel`,`Open reports`,3,`activated`,`highlightColor`],[`title`,`Unavailable workspace`,`ariaLabel`,`Unavailable workspace`,3,`clickable`,`disabled`,`selected`],[`title`,`Fixed workspace`,`ariaLabel`,`Fixed workspace`,3,`clickable`,`readOnly`,`selected`,`highlightColor`],[`title`,`Project details`,`subtitle`,`Content container`],[`type`,`button`,`bx-button`,``,`bxCardFooter`,``,`variant`,`tonal`,3,`click`],[`direction`,`responsive`,`justify`,`between`,`align`,`center`],[`minColumnWidth`,`12rem`],[`title`,`Project details`,`subtitle`,`Outlined surface`],[`title`,`Team activity`,`variant`,`elevated`],[3,`gap`],[`label`,`Ready`,3,`selectable`],[`title`,`Notes`,`variant`,`filled`]],template:function(t,e){if(t&1&&($(0,`bx-stack`)(1,`p`),Te(2,`Use Appearance to try themes, materials and reduced motion.`),q(),ce(3,li,11,0)(4,ci,8,4)(5,mi,5,1)(6,ui,12,21)(7,bi,10,9)(8,hi,17,7)(9,xi,11,5)(10,Ci,7,3)(11,wi,25,22)(12,Ei,21,2,`bx-container`,5),$(13,`output`,6),Te(14),q()()),t&2){let o;E(3),de((o=e.example())===`divider`?3:o===`popover`?4:o===`skeleton`?5:o===`autocomplete`?6:o===`chip`?7:o===`accordion`?8:o===`collapsible`?9:o===`alert`?10:o===`card`?11:12),E(11),He$2(e.status())}},dependencies:[mne,cne,kF,mr,Z$1,Ti$1,nr,rr,vM,wM,CM,EM,Jc,lm,_M,DM,VM,qM,zM,MM,bM],styles:[`
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
}`]})};var Vn=[`mod`,`shift`,`k`];var zn=[`mod`,`k`];var Wn=[`mod`,`shift`,`v`];var Rn={mac:[`command`,`shift`,`d`],windows:[`ctrl`,`shift`,`d`],linux:[`alt`,`shift`,`d`],ios:[`command`,`shift`,`d`],android:[`ctrl`,`shift`,`d`],default:[`mod`,`alt`,`d`]};var Ln=[`mac`,`windows`,`linux`,`ios`,`android`,`default`];var ki=()=>[`command`,`ctrl`,`option`,`shift`];function Ti(a,r){if(a&1){let t=yr();$(0,`bx-menu`,8)(1,`bx-menu-item`,9),ye(`action`,function(){At(t);let o=L();return Ot(o.activate(`View opened`))}),q(),$(2,`bx-menu-item`,10),ye(`action`,function(){At(t);let o=L();return Ot(o.activate(`Project duplicated`))}),q(),$(3,`bx-menu-item`,11),ye(`action`,function(){At(t);let o=L();return Ot(o.activate(`Delete requested`))}),q()()}if(a&2){let t=L();E(),le(`shortcut`,t.viewShortcut)(`disabled`,t.viewDisabled.value),E(),le(`shortcut`,t.duplicateShortcut),E(),le(`danger`,!0)}}function Mi(a,r){if(a&1&&($(0,`section`,7)(1,`h4`),Te(2),q(),$(3,`p`),Te(4,` Portable: `),$(5,`kbd`),Te(6),q()(),$(7,`p`),Te(8,` OS override: `),$(9,`kbd`),Te(10),q()(),$(11,`p`),Te(12,` Modifiers: `),$(13,`kbd`),Te(14),q()()()),a&2){let t=r.$implicit,e=L();E(2),He$2(t==="default"?`Unknown / server`:t),E(4),He$2(e.bxShortcutService.resolve(e.openShortcut,t)?.join(` + `)),E(4),He$2(e.bxShortcutService.resolve(e.duplicateShortcut,t)?.join(` + `)),E(4),He$2(e.bxShortcutService.resolve(QA(4,ki),t)?.join(` + `))}}var qe=class a{bxShortcutService=p(Wf);menu=mn(BM);openShortcut=Vn;sequencePrefix=zn;viewShortcut=Wn;duplicateShortcut=Rn;platforms=Ln;viewDisabled=new ND(!1,{nonNullable:!0});typing=new ND(``,{nonNullable:!0});waitingForView=C(!1);status=C(`Ready. Open the menu with its button or keyboard shortcut.`);sequenceTimer;actionCount=0;constructor(){p(U).onDestroy(()=>this.resetSequence())}onKeydown(r){if(this.bxShortcutService.matches(r,this.openShortcut)){r.preventDefault(),this.resetSequence(),this.menu()?.open(!0),this.status.set(`Menu opened by shortcut. Use arrow keys, Enter or Escape.`);return}if(this.bxShortcutService.matches(r,this.sequencePrefix)){r.preventDefault(),this.resetSequence(),this.waitingForView.set(!0),this.sequenceTimer=setTimeout(()=>this.resetSequence(),2e3);return}if(this.waitingForView()){if([`Meta`,`Control`,`Alt`,`Shift`].includes(r.key)||r.repeat)return;let t=this.bxShortcutService.matches(r,`v`);if(this.resetSequence(),t){r.preventDefault(),this.menu()?.open(!0),this.status.set(`Menu opened by sequence.`);return}}!this.viewDisabled.value&&this.bxShortcutService.matches(r,this.viewShortcut)?(r.preventDefault(),this.activate(`View opened`)):this.bxShortcutService.matches(r,this.duplicateShortcut)&&(r.preventDefault(),this.activate(`Project duplicated`))}activate(r){r===`View opened`&&this.viewDisabled.value||(this.resetSequence(),this.status.set(`${r} \xB7 action ${++this.actionCount}`),this.menu()?.close(!0))}resetSequence(){clearTimeout(this.sequenceTimer),this.sequenceTimer=void 0,this.waitingForView.set(!1)}static ɵfac=function(t){return new(t||a)};static ɵcmp=H({type:a,selectors:[[`app-menu-shortcut-examples`]],viewQuery:function(t,e){t&1&&Nn(e.menu,BM,5),t&2&&It()},hostBindings:function(t,e){t&1&&ye(`keydown`,function(c){return e.onKeydown(c)},Eo$1)(`pointerdown`,function(){return e.resetSequence()},Eo$1)(`blur`,function(){return e.resetSequence()},MN)},decls:38,vars:11,consts:[[`actions`,``],[1,`shortcut-demo`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`menuPlacement`,`bottom`,`menuLabel`,`Project actions`,3,`bxMenuTrigger`,`menuHover`],[`role`,`status`],[`label`,`Disable Open view (click and shortcut)`,3,`formControl`],[`label`,`Type here to try the editable-control guard`,3,`formControl`],[1,`platform-previews`],[1,`platform-preview`],[1,`shortcut-menu`],[`label`,`Open view`,`icon`,`external-link`,3,`action`,`shortcut`,`disabled`],[`label`,`Duplicate project`,`icon`,`copy`,3,`action`,`shortcut`],[`label`,`Delete project`,`icon`,`trash-2`,3,`action`,`danger`]],template:function(t,e){if(t&1&&($(0,`div`,1)(1,`p`)(2,`code`),Te(3,`shortcut`),q(),Te(4,` displays a hint. This example also handles keyboard events using `),$(5,`code`),Te(6,`BxShortcutService.matches()`),q(),Te(7,`.`),q(),$(8,`p`),Te(9,`One lit surface follows enabled rows with pointer or keyboard focus. Navigate quickly to inspect retargeting, including the danger item.`),q(),$(10,`p`),Te(11,`On this device, `),$(12,`code`),Te(13,`mod`),q(),Te(14),q(),$(15,`div`)(16,`button`,2),Te(17),q()(),$(18,`p`),Te(19),q(),$(20,`p`,3),Te(21),q(),kC(22,Ti,4,4,`ng-template`,null,0,Tb),$(24,`bx-checkbox`,4),ZR(),q(),$(25,`bx-input-field`,5),ZR(),q(),$(26,`p`),Te(27,` The Open view shortcut works while this demo is mounted, including when the menu is closed. Shortcuts ignore typing fields, held-key repeats and composition. `),q(),$(28,`h3`),Te(29,`Defaults across platforms`),q(),$(30,`p`),Te(31,` These previews use the same service and definitions. `),$(32,`code`),Te(33,`mod`),q(),Te(34,` avoids repeating OS mappings; explicit overrides are available when bindings differ. `),q(),$(35,`div`,6),Hn$1(36,Mi,15,5,`section`,7,na$1),q()()),t&2){let o=oa$1(23);E(14),BC(` uses `,e.bxShortcutService.resolve(`mod`)?.join(``),` (detected platform: `,e.bxShortcutService.platform(),`).`),E(2),le(`bxMenuTrigger`,o)(`menuHover`,!1),G$1(`aria-keyshortcuts`,e.bxShortcutService.toAriaKeyshortcuts(e.openShortcut)),E(),wr(` Project actions · `,e.bxShortcutService.resolve(e.openShortcut)?.join(` + `),` `),E(2),BC(` Press `,e.bxShortcutService.resolve(e.openShortcut)?.join(` + `),` together to open the menu. Or press `,e.bxShortcutService.resolve(e.sequencePrefix)?.join(` + `),`, release the keys, then press V within two seconds. Escape, another key, a pointer press or leaving the window cancels the sequence. `),E(2),He$2(e.waitingForView()?`Waiting for V…`:e.status()),E(3),le(`formControl`,e.viewDisabled),QR(),E(),le(`formControl`,e.typing),QR(),E(11),qn$1(e.platforms)}},dependencies:[Z$1,Ti$1,nr,mne,cne,kF,cM,lM,BM],styles:[`
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
}`]})};function Pi(a,r){if(a&1){let t=yr();$(0,`bx-page-footer`)(1,`bx-stack`,11)(2,`button`,12),ye(`click`,function(){At(t);let o=L();return Ot(o.result.set(`Footer action completed.`))}),Te(3,`Try footer action`),q(),$(4,`span`,13),Te(5),q()()()}if(a&2){let t=L();E(),le(`gap`,3),E(4),He$2(t.result())}}var He=class a{title=C(`Workspace overview`);description=C(`A shared heading and consistent gutters for every page.`);breadcrumbsAfterControl=new ND(1,{nonNullable:!0});breadcrumbsAfter=NY(this.breadcrumbsAfterControl.valueChanges,{initialValue:this.breadcrumbsAfterControl.value});nesting=C(1);automatic=C(!1);showFooter=C(!0);result=C(`No action yet.`);nestingOptions=[{label:`Root page`,value:0},{label:`One nesting`,value:1},{label:`Two nestings`,value:2}];previewBreadcrumbs=v(()=>[{label:`Components`,route:`/components`},...this.nesting()>=1?[{label:`Layout`,route:`/components/layout`}]:[],...this.nesting()>=2?[{label:`Page container`,route:`/components/layout/page-container`}]:[]]);constructor(){this.breadcrumbsAfterControl.valueChanges.pipe(Xa$1(k0),mp()).subscribe(()=>{let r=this.breadcrumbsAfterControl.value,t=Math.max(0,Math.trunc(Number(r))||0);t!==r&&this.breadcrumbsAfterControl.setValue(t)})}static ɵfac=function(t){return new(t||a)};static ɵcmp=H({type:a,selectors:[[`app-page-examples`]],decls:15,vars:20,consts:[[3,`gap`],[`direction`,`responsive`,3,`gap`],[`label`,`Preview title`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Description`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Preview nesting`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Show breadcrumbs after nesting`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`min`,`formControl`],[`label`,`Use current route breadcrumbs`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Show footer`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`size`,`full`,1,`page-preview`,3,`breadcrumbs`,`breadcrumbsAfter`],[`sectionTitle`,`Primitives`,3,`pageTitle`,`pageDescription`,`autoResolveTitlesFromNavigation`,`headingLevel`],[`title`,`Page content`,`message`,`This section grows naturally with its content. The page keeps one scroll surface and the same responsive gutters.`],[`direction`,`responsive`,`align`,`center`,3,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`role`,`status`]],template:function(t,e){t&1&&($(0,`bx-stack`,0)(1,`bx-stack`,1)(2,`bx-input-field`,2),ZR(),UC(`ngModelChange`,function(c){return GA(e.title,c)||(e.title=c),c}),q(),$(3,`bx-input-field`,3),ZR(),UC(`ngModelChange`,function(c){return GA(e.description,c)||(e.description=c),c}),q()(),$(4,`bx-stack`,1)(5,`bx-select`,4),ZR(),UC(`ngModelChange`,function(c){return GA(e.nesting,c)||(e.nesting=c),c}),q(),$(6,`bx-input-field`,5),ZR(),q()(),$(7,`bx-stack`,1)(8,`bx-slide-toggle`,6),ZR(),UC(`ngModelChange`,function(c){return GA(e.automatic,c)||(e.automatic=c),c}),q(),$(9,`bx-slide-toggle`,7),ZR(),UC(`ngModelChange`,function(c){return GA(e.showFooter,c)||(e.showFooter=c),c}),q()(),$(10,`bx-page-container`,8),Be$1(11,`bx-page-header`,9),$(12,`bx-page-content`),Be$1(13,`bx-alert`,10),q(),ce(14,Pi,6,2,`bx-page-footer`),q()()),t&2&&(le(`gap`,5),E(),le(`gap`,4),E(),qC(`ngModel`,e.title),QR(),E(),qC(`ngModel`,e.description),QR(),E(),le(`gap`,4),E(),le(`clearable`,!1)(`options`,e.nestingOptions),qC(`ngModel`,e.nesting),QR(),E(),le(`min`,0)(`formControl`,e.breadcrumbsAfterControl),QR(),E(),le(`gap`,4),E(),qC(`ngModel`,e.automatic),QR(),E(),qC(`ngModel`,e.showFooter),QR(),E(),le(`breadcrumbs`,e.automatic()?void 0:e.previewBreadcrumbs())(`breadcrumbsAfter`,e.breadcrumbsAfter()),E(),le(`pageTitle`,e.title())(`pageDescription`,e.description())(`autoResolveTitlesFromNavigation`,!1)(`headingLevel`,2),E(3),de(e.showFooter()?14:-1))},dependencies:[fne,cne,vF,mne,kF,wM,Z$1,nr,rr,ar,IM,UM,$M,za$1,MM],styles:[`
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
}`]})};function Ni(a,r){if(a&1){let t=yr();$(0,`bx-input-field`,13),ZR(),ye(`ngModelChange`,function(o){At(t);let c=L();return Ot(c.minimum.set(o))}),q(),$(1,`bx-input-field`,14),ZR(),ye(`ngModelChange`,function(o){At(t);let c=L();return Ot(c.maximum.set(o))}),q()}if(a&2){let t=L();le(`min`,0)(`ngModel`,t.minimum()),QR(),E(),le(`min`,0)(`ngModel`,t.maximum()),QR()}}var Ue=class a{edges=[{label:`Right edge (width)`,value:`right`},{label:`Left edge (width)`,value:`left`},{label:`Bottom edge (height)`,value:`bottom`},{label:`Top edge (height)`,value:`top`}];edge=C(`right`);size=C(180);minimum=C(60);maximum=C(280);disableShrink=C(!0);customBounds=C(!1);status=C(`Drag the inner edge, or focus it and use the arrow keys.`);horizontal=v(()=>this.edge()===`left`||this.edge()===`right`);changeEdge(r){this.edge.set(r),this.size.set(180)}record(r,t){this.status.set(`${r.source} resize ${t===`start`?`started`:r.canceled?`canceled`:`completed`} at ${Math.round(r.value)} px.`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=H({type:a,selectors:[[`app-resize-handle-examples`]],decls:22,vars:40,consts:[[`container`,``],[`target`,``],[`handle`,`bxResizeHandle`],[1,`resize-demo-controls`],[`label`,`Resize edge`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`resize-demo-actions`],[`label`,`Prevent shrinking below initial size`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Use explicit pixel limits`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`role`,`status`],[1,`resize-demo-container`],[`aria-label`,`Resizable example surface`,1,`resize-demo-target`],[`bxResizeHandle`,``,1,`resize-demo-handle`,3,`resizeValueChange`,`resizeStart`,`resizeEnd`,`resizeEdge`,`resizeTarget`,`resizeContainer`,`resizeInitialSize`,`resizeMinSize`,`resizeMaxSize`,`resizeDisableShrink`,`resizeLabel`,`resizeValue`],[`type`,`number`,`label`,`Minimum size (px)`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`min`,`ngModel`],[`type`,`number`,`label`,`Maximum size (px)`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`min`,`ngModel`]],template:function(t,e){if(t&1){let o=yr();$(0,`div`,3)(1,`bx-select`,4),ZR(),ye(`ngModelChange`,function(d){return e.changeEdge(d)}),q(),ce(2,Ni,2,4),q(),$(3,`div`,5)(4,`bx-slide-toggle`,6),ZR(),ye(`ngModelChange`,function(d){return e.disableShrink.set(d)}),q(),$(5,`bx-slide-toggle`,7),ZR(),ye(`ngModelChange`,function(d){return e.customBounds.set(d)}),q(),$(6,`button`,8),ye(`click`,function(){return e.size.set(180)}),Te(7,`Reset to 180 px`),q()(),$(8,`p`,9),Te(9),q(),$(10,`p`),Te(11),q(),$(12,`div`,10,0)(14,`section`,11,1)(16,`p`),Te(17),q(),$(18,`div`,12,2),UC(`resizeValueChange`,function(d){return At(o),GA(e.size,d)||(e.size=d),Ot(d)}),ye(`resizeStart`,function(d){return e.record(d,`start`)})(`resizeEnd`,function(d){return e.record(d,`end`)}),q()()(),$(20,`p`),Te(21,` Arrow keys move the edge by 10 px; Shift moves by 50 px. Home and End use the bounds. Double-click the handle or press Enter to restore its original size. Escape cancels an active gesture.
`),q()}if(t&2){let o=oa$1(13),c=oa$1(15),d=oa$1(19);E(),le(`clearable`,!1)(`options`,e.edges)(`ngModel`,e.edge()),QR(),E(),de(e.customBounds()?2:-1),E(2),le(`ngModel`,e.disableShrink()),QR(),E(),le(`ngModel`,e.customBounds()),QR(),E(4),He$2(e.status()),E(2),VC(``,e.size(),` px · effective minimum `,d.minSize(),` px · effective maximum `,d.maxSize(),` px`),E(3),we$1(`width`,e.horizontal()?e.size()+`px`:`100%`)(`height`,e.horizontal()?`100%`:e.size()+`px`),fe(`is-horizontal`,e.horizontal())(`is-vertical`,!e.horizontal())(`edge-left`,e.edge()===`left`)(`edge-top`,e.edge()===`top`),E(3),wr(`Resize from the `,e.edge(),` edge.`),E(),fe(`handle-left`,e.edge()===`left`)(`handle-right`,e.edge()===`right`)(`handle-top`,e.edge()===`top`)(`handle-bottom`,e.edge()===`bottom`),le(`resizeEdge`,e.edge())(`resizeTarget`,c)(`resizeContainer`,o)(`resizeInitialSize`,180)(`resizeMinSize`,e.customBounds()?e.minimum():void 0)(`resizeMaxSize`,e.customBounds()?e.maximum():void 0)(`resizeDisableShrink`,e.disableShrink())(`resizeLabel`,e.horizontal()?`Resize example width`:`Resize example height`),qC(`resizeValue`,e.size)}},dependencies:[fne,cne,vF,Z$1,nr,rr,ar,Ha$1],styles:[`
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
}`]})};var we=class a{query=C(``);completedQuery=C(``);results=C([]);loading=C(!1);error=C(void 0);requests=C([]);controller;constructor(){p(U).onDestroy(()=>this.controller?.abort()),this.search(``)}async search(r,t=!1){this.controller?.abort();let e$1=new AbortController;this.controller=e$1,this.query.set(r),this.loading.set(!0),this.error.set(void 0);try{if(await Z(250,e$1.signal),this.record(`Request: ${r||`(all components)`}`),await Z(800,e$1.signal),e$1.signal.aborted)return;if(t)throw new Error(`Simulated request failure`);let o=r.trim().toLocaleLowerCase(),c=e.map(d=>d.title).filter(d=>d.toLocaleLowerCase().includes(o));this.results.set(c),this.completedQuery.set(r),this.record(`Success: ${c.length} results`)}catch{if(e$1.signal.aborted)return;this.error.set({key:`searchError`}),this.record(`Failed: previous results retained; retry the same query`)}finally{this.controller===e$1&&this.loading.set(!1)}}record(r){this.requests.update(t=>[r,...t].slice(0,8))}static ɵfac=function(t){return new(t||a)};static ɵprov=X$1({token:a,factory:a.ɵfac})};var Di=()=>({key:`searchLabel`});var Ii=()=>({key:`searchPlaceholder`});var An=()=>({key:`searchLoading`});var Oi=()=>({key:`searchClear`});var Vi=()=>({key:`retry`});function zi(a,r){if(a&1&&($(0,`li`),Te(1),q()),a&2){let t=r.$implicit;E(),He$2(t)}}function Wi(a,r){if(a&1&&($(0,`li`,11),Te(1),q()),a&2){let t=L(2);E(),He$2(t.emptyText())}}function Ri(a,r){if(a&1&&ce(0,Wi,2,1,`li`,11),a&2){let t=L();de(!t.mockSearchStore.loading()&&!t.mockSearchStore.error()?0:-1)}}function Li(a,r){if(a&1&&($(0,`li`),Te(1),q()),a&2){let t=r.$implicit;E(),He$2(t)}}var Ge=class a{demoI18nService=p(P);mockSearchStore=p(we);showLoadingText=C(!1);showLabel=C(!0);compact=C(!1);readOnly=C(!1);disabled=C(!1);emptyText=v(()=>(this.demoI18nService.version(),this.demoI18nService.translate(`searchEmpty`)));retryConfig={variant:`tonal`,color:`accent`};changeLoadingText(r){this.showLoadingText.set(r),r&&!this.mockSearchStore.loading()&&!this.readOnly()&&!this.disabled()&&this.mockSearchStore.search(this.mockSearchStore.query())}static ɵfac=function(t){return new(t||a)};static ɵcmp=H({type:a,selectors:[[`app-search-examples`]],features:[jt([we,P,{provide:Ee,useExisting:P}])],decls:22,vars:29,consts:[[1,`search-demo`],[`subscriptSizing`,`dynamic`,3,`search`,`retry`,`label`,`placeholder`,`compact`,`value`,`loading`,`loadError`,`loadingLabel`,`loadingAriaLabel`,`clearLabel`,`retryLabel`,`retryConfig`,`readOnly`,`disabled`],[1,`search-actions`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`label`,`Show label`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Compact`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Show loading text`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Readonly`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Disabled`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`aria-label`,`Search results`,1,`search-results`],[`aria-label`,`Request events`,1,`search-events`],[`role`,`status`]],template:function(t,e){t&1&&($(0,`div`,0)(1,`bx-search-input`,1),ye(`search`,function(c){return e.mockSearchStore.search(c)})(`retry`,function(c){return e.mockSearchStore.search(c)}),q(),$(2,`div`,2)(3,`button`,3),ye(`click`,function(){return e.mockSearchStore.search(e.mockSearchStore.query(),!0)}),Te(4,` Fail this search `),q(),$(5,`bx-checkbox`,4),UC(`checkedChange`,function(c){return GA(e.showLabel,c)||(e.showLabel=c),c}),q(),$(6,`bx-checkbox`,5),UC(`checkedChange`,function(c){return GA(e.compact,c)||(e.compact=c),c}),q(),$(7,`bx-checkbox`,6),ye(`checkedChange`,function(c){return e.changeLoadingText(c)}),q(),$(8,`bx-checkbox`,7),UC(`checkedChange`,function(c){return GA(e.readOnly,c)||(e.readOnly=c),c}),q(),$(9,`bx-checkbox`,8),UC(`checkedChange`,function(c){return GA(e.disabled,c)||(e.disabled=c),c}),q()(),$(10,`p`),Te(11,` Requests debounce for 250ms and take 800ms. Type quickly to cancel older requests, or enter an unmatched term for empty results. Failure keeps the last successful results. Use Retry request to try the same query again. Enabling Show loading text previews another request. When a label is displayed, compact mode is automatically enabled regardless of the Compact setting. `),q(),$(12,`section`,9)(13,`p`),Te(14),q(),$(15,`ul`),Hn$1(16,zi,2,1,`li`,null,na$1,!1,Ri,1,1),q()(),$(19,`ul`,10),Hn$1(20,Li,2,1,`li`,null,Yl),q()()),t&2&&(E(),le(`label`,e.showLabel()?QA(23,Di):void 0)(`placeholder`,QA(24,Ii))(`compact`,e.compact())(`value`,e.mockSearchStore.query())(`loading`,e.mockSearchStore.loading())(`loadError`,e.mockSearchStore.error())(`loadingLabel`,e.showLoadingText()?QA(25,An):void 0)(`loadingAriaLabel`,QA(26,An))(`clearLabel`,QA(27,Oi))(`retryLabel`,QA(28,Vi))(`retryConfig`,e.retryConfig)(`readOnly`,e.readOnly())(`disabled`,e.disabled()),E(2),le(`disabled`,e.mockSearchStore.loading()||e.disabled()||e.readOnly()),E(2),qC(`checked`,e.showLabel),E(),qC(`checked`,e.compact),E(),le(`checked`,e.showLoadingText()),E(),qC(`checked`,e.readOnly),E(),qC(`checked`,e.disabled),E(3),G$1(`aria-busy`,e.mockSearchStore.loading()),E(2),BC(`Last completed search: `,e.mockSearchStore.completedQuery()||`all components`,` · `,e.mockSearchStore.results().length,` results`),E(2),qn$1(e.mockSearchStore.results()),E(4),qn$1(e.mockSearchStore.requests()))},dependencies:[Z$1,Ti$1,qe$1],styles:[`
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
// In your shell: <bx-side-nav />`;var J=class a{languages=dt;version=C(0);language=C(`en`);translate(r){return this.version(),at[this.language()]?.[r]??r}setLanguage(r){r===null||r===this.language()||(this.language.set(r),this.version.update(t=>t+1))}static ɵfac=function(t){return new(t||a)};static ɵprov=X$1({token:a,factory:a.ɵfac})};function Ai(a,r){if(a&1&&($(0,`strong`),Te(1),q()),a&2){let t=L(2);E(),He$2(t.text().studio)}}function Bi(a,r){if(a&1&&(Be$1(0,`bx-icon`,17),ce(1,Ai,2,1,`strong`)),a&2){let t=r.$implicit,e=r.mobile;E(),de(!t&&!e?1:-1)}}function Fi(a,r){if(a&1&&($(0,`span`),Te(1),q()),a&2){let t=L(2);E(),He$2(t.text().admin)}}function ji(a,r){if(a&1&&(Be$1(0,`bx-icon`,18),ce(1,Fi,2,1,`span`)),a&2){let t=r.$implicit;E(),de(t?-1:1)}}function qi(a,r){if(a&1){let t=yr();$(0,`button`,19),ye(`click`,function(o){At(t),L();let c=oa$1(14);return Ot(c.open(o))}),Te(1),q()}if(a&2){let t=L();E(),He$2(t.text().open)}}function Hi(a,r){if(a&1&&($(0,`span`),Te(1),q(),$(2,`small`,21),Te(3,`↗`),q()),a&2){let t=L().$implicit;E(),He$2(t.label)}}function Ui(a,r){if(a&1&&(Be$1(0,`bx-icon`,20),ce(1,Hi,4,1)),a&2){let t=r.$implicit,e=r.collapsed;le(`name`,t.icon?.name??`circle`),E(),de(e?-1:1)}}var Xe=class a{navigationDemoI18nService=p(J);groups=v(()=>Ke(`/components/side-nav`,this.navigationDemoI18nService));text=v(()=>({right:this.navigationDemoI18nService.translate(`demo.right`),rail:this.navigationDemoI18nService.translate(`demo.rail`),mobile:this.navigationDemoI18nService.translate(`demo.mobile`),inlineMode:this.navigationDemoI18nService.translate(`demo.inlineMode`),search:this.navigationDemoI18nService.translate(`demo.search`),rtl:this.navigationDemoI18nService.translate(`demo.rtl`),custom:this.navigationDemoI18nService.translate(`demo.custom`),height:this.navigationDemoI18nService.translate(`demo.height`),language:this.navigationDemoI18nService.translate(`demo.language`),instructions:this.navigationDemoI18nService.translate(`demo.instructions`),studio:this.navigationDemoI18nService.translate(`demo.studio`),admin:this.navigationDemoI18nService.translate(`demo.admin`),title:this.navigationDemoI18nService.translate(`demo.title`),description:this.navigationDemoI18nService.translate(`demo.description`),open:this.navigationDemoI18nService.translate(`demo.open`),keyboard:this.navigationDemoI18nService.translate(`demo.keyboard`),routes:this.navigationDemoI18nService.translate(`demo.routes`)}));routeExample=Fn;right=C(!1);collapsed=C(!1);mobile=C(!1);searchable=C(!0);rtl=C(!1);custom=C(!1);height=C(420);selected=C(void 0);selection=v(()=>{let r=this.selected();return r?`${this.navigationDemoI18nService.translate(`nav.${r.id}`)} \xB7 ${r.id}`:this.navigationDemoI18nService.translate(`demo.select`)});config=v(()=>({position:`inline`,showMobileTrigger:!1,side:this.right()?`right`:`left`,mobile:this.mobile(),searchable:this.searchable(),persistenceKey:`blocks.side-nav.demo.v1`,ariaLabel:{key:`nav.name`},searchLabel:{key:`nav.search`},searchPlaceholder:{key:`nav.placeholder`},clearSearchLabel:{key:`nav.clear`},emptyText:{key:`nav.empty`},openLabel:{key:`nav.open`},closeLabel:{key:`nav.close`},collapseLabel:{key:`nav.collapse`},expandLabel:{key:`nav.expand`},submenuLabel:{key:`nav.submenu`},resultLabel:{key:`nav.result`},backLabel:{key:`nav.back`},pathLabel:{key:`nav.path`}}));select(r){this.selected.set(r)}static ɵfac=function(t){return new(t||a)};static ɵcmp=H({type:a,selectors:[[`app-side-nav-examples`]],features:[jt([J,{provide:Ee,useExisting:J}])],decls:36,vars:38,consts:[[`nav`,``],[`customItem`,``],[1,`demo-language-row`],[`subscriptSizing`,`dynamic`,3,`selectionChange`,`label`,`clearable`,`options`,`value`],[1,`nav-demo-controls`],[3,`checkedChange`,`label`,`checked`],[`type`,`number`,3,`valueChange`,`label`,`min`,`max`,`value`],[1,`nav-demo-frame`],[3,`collapsedChange`,`itemSelected`,`config`,`groups`,`itemTemplate`,`collapsed`],[`bxSideNavHeader`,``],[`bxSideNavFooter`,``],[1,`nav-demo-content`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`],[`aria-live`,`polite`],[1,`nav-route-example`],[`tabindex`,`0`,`aria-label`,`TypeScript navigation configuration`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`name`,`blocks`],[`name`,`circle-user-round`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`size`,`20`,3,`name`],[`aria-hidden`,`true`]],template:function(t,e){if(t&1){let o=yr();$(0,`div`,2)(1,`bx-select`,3),ye(`selectionChange`,function(d){return e.navigationDemoI18nService.setLanguage(d.value)}),q()(),$(2,`div`,4)(3,`bx-checkbox`,5),UC(`checkedChange`,function(d){return At(o),GA(e.right,d)||(e.right=d),Ot(d)}),q(),$(4,`bx-checkbox`,5),ye(`checkedChange`,function(d){return e.collapsed.set(d)}),q(),$(5,`bx-checkbox`,5),UC(`checkedChange`,function(d){return At(o),GA(e.mobile,d)||(e.mobile=d),Ot(d)}),q(),$(6,`bx-checkbox`,5),UC(`checkedChange`,function(d){return At(o),GA(e.searchable,d)||(e.searchable=d),Ot(d)}),q(),$(7,`bx-checkbox`,5),UC(`checkedChange`,function(d){return At(o),GA(e.rtl,d)||(e.rtl=d),Ot(d)}),q(),$(8,`bx-checkbox`,5),UC(`checkedChange`,function(d){return At(o),GA(e.custom,d)||(e.custom=d),Ot(d)}),q(),$(9,`bx-input-field`,6),UC(`valueChange`,function(d){return At(o),GA(e.height,d)||(e.height=d),Ot(d)}),q()(),$(10,`p`),Te(11),q(),$(12,`div`,7)(13,`bx-side-nav`,8,0),UC(`collapsedChange`,function(d){return At(o),GA(e.collapsed,d)||(e.collapsed=d),Ot(d)}),ye(`itemSelected`,function(d){return e.select(d)}),kC(15,Bi,2,1,`ng-template`,9)(16,ji,2,1,`ng-template`,10),q(),$(17,`div`,11)(18,`h3`),Te(19),q(),$(20,`p`),Te(21),q(),ce(22,qi,2,1,`button`,12),$(23,`output`,13),Te(24),q(),$(25,`p`),Te(26),q(),$(27,`p`),Te(28),q()()(),kC(29,Ui,2,2,`ng-template`,null,1,Tb),$(31,`details`,14)(32,`summary`),Te(33),q(),$(34,`pre`,15),Be$1(35,`code`,16),q()()}if(t&2){let o=oa$1(14),c=oa$1(30);E(),le(`label`,e.text().language)(`clearable`,!1)(`options`,e.navigationDemoI18nService.languages)(`value`,e.navigationDemoI18nService.language()),E(2),le(`label`,e.text().right),qC(`checked`,e.right),E(),le(`label`,e.text().rail)(`checked`,e.collapsed()),E(),le(`label`,e.text().mobile),qC(`checked`,e.mobile),E(),le(`label`,e.text().search),qC(`checked`,e.searchable),E(),le(`label`,e.text().rtl),qC(`checked`,e.rtl),E(),le(`label`,e.text().custom),qC(`checked`,e.custom),E(),le(`label`,e.text().height)(`min`,200)(`max`,700),qC(`value`,e.height),E(2),He$2(e.text().instructions),E(),we$1(`--%NS%bx-side-nav-height`,e.height()+`px`),fe(`right`,e.right()),G$1(`dir`,e.rtl()?`rtl`:`ltr`),E(),le(`config`,e.config())(`groups`,e.groups())(`itemTemplate`,e.custom()?c:void 0),qC(`collapsed`,e.collapsed),E(6),He$2(e.text().title),E(2),He$2(e.text().description),E(),de(o.isMobile()?22:-1),E(2),He$2(e.selection()),E(2),He$2(e.text().keyboard),E(2),He$2(e.text().inlineMode),E(5),He$2(e.text().routes),E(2),le(`highlight`,e.routeExample)}},dependencies:[ht,Ve,tn,en,Z$1,Ti$1,nr,rr,hn],styles:[`
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
.nav-demo-controls[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  margin-block-end: var(--%NS%bx-space-4, 1rem);
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
}`]})};var Gi=()=>({name:`info`,color:`text-info`,bgColor:`auto`});var Qe=class a{panelBreakpoints={"2xl":`push`};placements=[{label:`Left`,value:`left`},{label:`Right`,value:`right`}];opened=C(!1);contained=C(!0);backdrop=C(!1);placement=C(`right`);panelWidth=C(320);note=C(`This content survives closing the panel.`);clicks=C(0);width=v(()=>Math.max(240,Math.min(640,Number(this.panelWidth())||320)));resizeWidth(r){let t=Number(r);Number.isFinite(t)&&this.panelWidth.set(t)}pageAction(){this.clicks.update(r=>r+1)}static ɵfac=function(t){return new(t||a)};static ɵcmp=H({type:a,selectors:[[`app-side-panel-examples`]],decls:27,vars:24,consts:[[1,`panel-demo-controls`],[`label`,`Placement`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Panel width (px)`,`type`,`number`,3,`ngModelChange`,`min`,`max`,`ngModel`],[1,`panel-demo-toggles`],[`label`,`Bound to preview container`,3,`ngModelChange`,`ngModel`],[`label`,`Blocking backdrop inside bounds`,3,`ngModelChange`,`ngModel`],[1,`panel-demo-boundary`],[`ariaLabel`,`Side panel example`,3,`widthChange`,`openChange`,`headerIcon`,`open`,`placement`,`container`,`width`,`resizable`,`resizeDisableShrink`,`resizeMinWidth`,`resizeMaxWidth`,`breakpoints`,`backdrop`],[`bxSidePanelBanner`,``,1,`demo-banner`],[`bxSidePanelHeader`,``,1,`demo-heading`],[`label`,`Persistent note`,3,`ngModelChange`,`ngModel`],[`bxSidePanelFooter`,``],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[1,`panel-demo-content`],[`role`,`status`]],template:function(t,e){t&1&&($(0,`div`,0)(1,`bx-select`,1),ZR(),ye(`ngModelChange`,function(c){return e.placement.set(c)}),q(),$(2,`bx-input-field`,2),ZR(),ye(`ngModelChange`,function(c){return e.panelWidth.set(c)}),q()(),$(3,`div`,3)(4,`bx-slide-toggle`,4),ZR(),ye(`ngModelChange`,function(c){return e.contained.set(c)}),q(),$(5,`bx-slide-toggle`,5),ZR(),ye(`ngModelChange`,function(c){return e.backdrop.set(c)}),q()(),$(6,`bx-side-panel-layout`,6)(7,`bx-side-panel`,7),ye(`widthChange`,function(c){return e.resizeWidth(c)})(`openChange`,function(c){return e.opened.set(c)}),$(8,`p`,8),Te(9,`Optional projected top banner`),q(),$(10,`h3`,9),Te(11,`Declarative panel`),q(),$(12,`bx-input-field`,10),ZR(),ye(`ngModelChange`,function(c){return e.note.set(c)}),q(),$(13,`p`),Te(14,`Closing keeps projected content mounted. Escape dismisses the focused panel without a modal focus trap or page scroll lock.`),q(),$(15,`div`,11)(16,`button`,12),ye(`click`,function(){return e.opened.set(!1)}),Te(17,`Done`),q()()(),$(18,`div`,13)(19,`button`,12),ye(`click`,function(){return e.opened.set(!e.opened())}),Te(20),q(),$(21,`button`,12),ye(`click`,function(){return e.pageAction()}),Te(22,`Surrounding page action`),q(),$(23,`p`,14),Te(24),q(),$(25,`p`),Te(26,`The panel has ordinary keyboard navigation. Change its placement, bounds, or width while it is open.`),q()()()),t&2&&(E(),le(`clearable`,!1)(`options`,e.placements)(`ngModel`,e.placement()),QR(),E(),le(`min`,240)(`max`,640)(`ngModel`,e.panelWidth()),QR(),E(2),le(`ngModel`,e.contained()),QR(),E(),le(`ngModel`,e.backdrop()),QR(),E(2),le(`headerIcon`,QA(23,Gi))(`open`,e.opened())(`placement`,e.placement())(`container`,e.contained()?void 0:`viewport`)(`width`,e.width())(`resizable`,!0)(`resizeDisableShrink`,!1)(`resizeMinWidth`,240)(`resizeMaxWidth`,640)(`breakpoints`,e.panelBreakpoints)(`backdrop`,e.backdrop()),E(5),le(`ngModel`,e.note()),QR(),E(8),wr(``,e.opened()?`Close`:`Open`,` panel`),E(4),BC(`Page actions: `,e.clicks(),` · Panel `,e.opened()?`open`:`closed`))},dependencies:[fne,cne,vF,Z$1,nr,rr,ar,TM,RM,td,ed,nd],styles:[`
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
}`]})};var jn=[{label:`Indicator`,value:`indicator`},{label:`Navigation`,value:`navigation`},{label:`Wizard`,value:`wizard`}];var ot=[`steps`,`segments`,`dots`,`progress`,`cards`];var qn=ot.map(a=>({label:a,value:a}));var rt=[`sm`,`md`,`lg`];var Hn=rt.map(a=>({label:a,value:a}));var Un=[{label:`Horizontal`,value:`horizontal`},{label:`Vertical`,value:`vertical`}];var Gn=[{label:`Scroll`,value:`scroll`},{label:`Vertical`,value:`vertical`},{label:`Compact`,value:`compact`}];var Kn=[{id:`overview`,label:`Overview`,description:`What will ship`,icon:`file-text`},{id:`access`,label:`Access`,description:`Who can use it`,icon:`users`},{id:`delivery`,label:`Delivery`,description:`How it rolls out`,icon:`send`}];var Xn=[{id:`plan`,label:`Plan`,completed:!0},{id:`build`,label:`Build`},{id:`ship`,label:`Ship`,optional:!0}];var Qn=[{label:`Percentage (33%)`,value:`percentage`},{label:`Completed steps (1/3)`,value:`fraction`}];function Yn(a,r){return new Promise((t,e)=>{let o=()=>{clearTimeout(c),t(!1)},c=setTimeout(()=>{a.signal.removeEventListener(`abort`,o),r===`fail`?e(/* @__PURE__ */ new Error(`The simulated server could not save this step. Try again.`)):t(r===`allow`)},800);a.signal.addEventListener(`abort`,o,{once:!0}),a.signal.aborted&&o()})}var Zn={en:{label:`Workflow`,back:`Back`,next:`Next`,finish:`Finish`,skip:`Skip`,pending:`Pending`,awaitingConfirmation:`Awaiting confirmation`,active:`Current step`,completed:`Completed`,skipped:`Skipped`,error:`Error`,loading:`Loading`,disabled:`Disabled`,optional:`Optional`,invalid:`Check this step before continuing`,rejected:`Navigation was not accepted`,position:`Step {index} of {count}: {label}`,plan:`Plan`,build:`Build`,ship:`Ship`,archived:`Archived`,buildDescription:`Prepare the workspace`,details:`Details`,preferences:`Preferences`,review:`Review`},es:{label:`Flujo de trabajo`,back:`Atrás`,next:`Siguiente`,finish:`Finalizar`,skip:`Omitir`,pending:`Pendiente`,awaitingConfirmation:`Esperando confirmación`,active:`Paso actual`,completed:`Completado`,skipped:`Omitido`,error:`Error`,loading:`Cargando`,disabled:`Deshabilitado`,optional:`Opcional`,invalid:`Comprueba este paso antes de continuar`,rejected:`No se aceptó la navegación`,position:`Paso {index} de {count}: {label}`,plan:`Planificar`,build:`Crear`,ship:`Publicar`,archived:`Archivado`,buildDescription:`Prepara el espacio de trabajo`,details:`Detalles`,preferences:`Preferencias`,review:`Revisión`},fr:{label:`Parcours`,back:`Retour`,next:`Suivant`,finish:`Terminer`,skip:`Ignorer`,pending:`En attente`,awaitingConfirmation:`En attente de confirmation`,active:`Étape actuelle`,completed:`Terminé`,skipped:`Ignoré`,error:`Erreur`,loading:`Chargement`,disabled:`Désactivé`,optional:`Facultatif`,invalid:`Vérifiez cette étape avant de continuer`,rejected:`La navigation a été refusée`,position:`Étape {index} sur {count} : {label}`,plan:`Planifier`,build:`Créer`,ship:`Publier`,archived:`Archivé`,buildDescription:`Préparez l’espace de travail`,details:`Détails`,preferences:`Préférences`,review:`Vérification`},de:{label:`Ablauf`,back:`Zurück`,next:`Weiter`,finish:`Abschließen`,skip:`Überspringen`,pending:`Ausstehend`,awaitingConfirmation:`Bestätigung ausstehend`,active:`Aktueller Schritt`,completed:`Abgeschlossen`,skipped:`Übersprungen`,error:`Fehler`,loading:`Wird geladen`,disabled:`Deaktiviert`,optional:`Optional`,invalid:`Prüfen Sie diesen Schritt vor dem Fortfahren`,rejected:`Die Navigation wurde abgelehnt`,position:`Schritt {index} von {count}: {label}`,plan:`Planen`,build:`Erstellen`,ship:`Veröffentlichen`,archived:`Archiviert`,buildDescription:`Arbeitsbereich vorbereiten`,details:`Details`,preferences:`Einstellungen`,review:`Überprüfung`}};var he=class a{language=C(`en`);version=C(0);translate(r,t){let e=Zn[this.language()][r]??r;for(let[o,c]of Object.entries(t??{}))e=e.replaceAll(`{${o}}`,String(c));return e}setLanguage(r){r&&(this.language.set(r),this.version.update(t=>t+1))}static ɵfac=function(t){return new(t||a)};static ɵprov=X$1({token:a,factory:a.ɵfac})};var Ki=[`sectionsWrapper`];var Xi=[`dynamicContent`];var Qi=[`section`];var Yi=()=>({key:`details`});var Zi=()=>({key:`preferences`});var Ji=()=>({key:`review`});var $i=(a,r)=>r.id;function ea(a,r){if(a&1){let t=yr();$(0,`bx-select`,68),ZR(),UC(`ngModelChange`,function(o){At(t);let c=L();return GA(c.progressFormat,o)||(c.progressFormat=o),Ot(o)}),q()}if(a&2){let t=L();le(`clearable`,!1)(`options`,t.progressFormats),qC(`ngModel`,t.progressFormat),QR()}}function ta(a,r){if(a&1){let t=yr();$(0,`section`,39,8)(2,`h4`),Te(3),q(),$(4,`p`),Te(5),q(),$(6,`p`),Te(7,`The section selection follows this scroll container. No scroll observer or router is owned by the stepper.`),q(),$(8,`button`,31),ye(`click`,function(){let o=At(t).$implicit,c=L();return Ot(c.sectionStatus.set(`Reviewed `+o.id))}),Te(9,`Mark section reviewed`),q()()}if(a&2){let t=r.$implicit;G$1(`data-section`,t.id)(`aria-label`,t.label),E(3),He$2(t.label),E(2),He$2(t.description)}}function na(a,r){if(a&1){let t=yr();$(0,`button`,31),ye(`click`,function(){let o=At(t).$implicit,c=L();return Ot(c.policy.set(o))}),Te(1),q()}if(a&2){let t=r.$implicit,e=L();G$1(`aria-pressed`,e.policy()===t),E(),wr(``,t,` content`)}}function ia(a,r){if(a&1&&($(0,`bx-input-field`,69),ZR(),q(),$(1,`p`),Te(2,`This required field becomes touched only after an invalid forward attempt.`),q()),a&2){let t=L();le(`formControl`,t.details.controls.name),QR()}}function aa(a,r){if(a&1&&($(0,`span`),Te(1),q()),a&2){let t=L();E(),He$2(t.stepperDemoI18nService.translate(`preferences`))}}function oa(a,r){if(a&1&&($(0,`bx-input-field`,70),ZR(),q(),$(1,`p`),Te(2,`Skip leaves this step incomplete. With retained content, edits and child state survive revisiting.`),q()),a&2){let t=L();le(`formControl`,t.note),QR()}}function ra(a,r){if(a&1&&($(0,`h4`),Te(1,`Review workspace`),q(),$(2,`p`),Te(3),q(),$(4,`p`),Te(5),q(),$(6,`p`),Te(7,`Finish performs the same asynchronous save as Next. A failed save keeps this content and its form values.`),q()),a&2){let t=L();E(3),wr(`Workspace: `,t.details.controls.name.value),E(2),wr(`Note: `,t.note.value||`No delivery note`)}}function la(a,r){if(a&1){let t=yr();$(0,`h4`),Te(1,`Workspace ready`),q(),$(2,`p`),Te(3,`Your workflow is complete. Reset to start again.`),q(),$(4,`button`,31),ye(`click`,function(){At(t),L();let o=oa$1(61);return Ot(o.reset())}),Te(5,`Restart with existing values`),q()}}function sa(a,r){if(a&1&&($(0,`bx-input-field`,71),ZR(),q()),a&2){let t=L();le(`formField`,t.signalForm.name),QR()}}function ca(a,r){if(a&1&&($(0,`p`),Te(1),q()),a&2){let t=L();E(),wr(`Ready to create `,t.signalModel().name,`.`)}}function da(a,r){if(a&1&&($(0,`p`),Te(1),q()),a&2){L();let t=oa$1(90);E(),wr(`Active step: `,t.selectedStep()?.label,`. Component state follows stable IDs when definitions change.`)}}function pa(a,r){if(a&1){let t=yr();$(0,`button`,72),ye(`click`,function(){At(t);let o=L();return Ot(o.confirmSelection())}),Te(1),q()}a&2&&(E(),wr(`Open `,r))}function ma(a,r){if(a&1&&($(0,`div`,73)(1,`span`),Te(2),q(),Be$1(3,`bx-stepper`,74),q()),a&2){let t=r.$implicit,e=L().$implicit,o=L();E(2),He$2(t),E(),le(`steps`,o.gallerySteps)(`variant`,e)(`size`,t)(`orientation`,o.orientation())(`responsive`,o.responsive())(`glassiness`,o.glass()?`on`:`off`)(`surfaceEffects`,o.lighting())(`showLabels`,e!==`dots`)(`labels`,o.labels)}}function ua(a,r){if(a&1&&($(0,`div`,67)(1,`h4`),Te(2),q(),Hn$1(3,ma,4,10,`div`,73,na$1),q()),a&2){let t=r.$implicit,e=L();E(2),He$2(t),E(),qn$1(e.gallerySizes)}}var Ye=class a{bxA11yService=p(Re);stepperDemoI18nService=p(he);sectionsWrapper=mn(`sectionsWrapper`);dynamicContent=mn(`dynamicContent`);sections=rp(`section`);modes=jn;variants=qn;progressFormats=Qn;sizes=Hn;orientations=Un;responsiveOptions=Gn;galleryVariants=ot;gallerySizes=rt;gallerySteps=Xn;sectionSteps=Kn;languages=dt;policies=[`eager`,`retained`,`active`];mode=C(`navigation`);variant=C(`steps`);progressFormat=C(`percentage`);size=C(`md`);orientation=C(`horizontal`);responsive=C(`compact`);active=C(`build`);sectionActive=C(`overview`);wizardActive=C(`details`);controlledActive=C(`plan`);status=C(`Use the controls to explore presentation and behavior.`);sectionStatus=C(`Choose a section or scroll the content. The application confirms the active ID.`);wizardStatus=C(`Enter a workspace name, then continue.`);nextOutcome=C(`allow`);policy=C(`retained`);pendingConfirmation=C(null);showLabels=C(!0);errorState=C(!1);loadingState=C(!1);allowIndicatorRequests=C(!1);readOnly=C(!1);glass=C(!0);lighting=C(!0);linear=C(!0);editable=C(!0);extra=C(!1);previewSteps=v(()=>[{id:`plan`,label:{key:`plan`},completed:!0,icon:`clipboard-check`},{id:`build`,label:{key:`build`},description:{key:`buildDescription`},icon:`wrench`},{id:`ship`,label:{key:`ship`},optional:!0,icon:`send`},{id:`archived`,label:{key:`archived`},disabled:!0,icon:`archive`}].map(t=>s(r({},t),{error:t.id===this.active()&&this.errorState(),loading:t.id===this.active()&&this.loadingState()})));currentStepOptions=v(()=>this.previewSteps().map(r=>({value:r.id,label:`${ke(r.label,this.stepperDemoI18nService)} (${r.id})`,disabled:r.disabled})));confirmationLabel=v(()=>{let r=this.pendingConfirmation(),t=this.gallerySteps.find(e=>e.id===r?.toId);return r?.outcome===`accepted`&&t&&t.id!==this.controlledActive()?ke(t.label,this.stepperDemoI18nService):null});controlledMessage=v(()=>{let r=this.pendingConfirmation(),t=this.confirmationLabel(),e=ke(this.gallerySteps.find(o=>o.id===this.controlledActive())?.label,this.stepperDemoI18nService);return t?`Request accepted. ${e} is still current. Select \u201COpen ${t}\u201D to let the application confirm the new activeStep.`:r?.outcome===`accepted`?r.toId?`The application opened ${e}. Request another step to repeat the two-stage flow.`:`The workflow is complete. Reset to try requesting and confirming steps again.`:r?`The request was ${r.outcome}. ${e} remains current; no destination is waiting for confirmation.`:`Current step: ${e}. \u201CRequest next step\u201D checks the transition. Then select \u201COpen\u201D to confirm it. This demo deliberately waits for that second action.`});dynamicSteps=v(()=>[{id:`first`,label:`Start`,content:this.dynamicContent()},...this.extra()?[{id:`extra`,label:`Added step`,optional:!0,content:this.dynamicContent()}]:[],{id:`last`,label:`Review`,content:this.dynamicContent()}]);labels=Object.fromEntries([`label`,`back`,`next`,`finish`,`skip`,`pending`,`awaitingConfirmation`,`active`,`completed`,`skipped`,`error`,`loading`,`disabled`,`optional`,`invalid`,`rejected`,`position`].map(r=>[r,{key:r}]));controlledLabels=s(r({},this.labels),{next:`Request next step`,back:`Request previous step`});details=new qf({name:new ND(``,{nonNullable:!0,validators:Oa$1.required})});note=new ND(``,{nonNullable:!0});signalModel=C({name:``});signalForm=$r(this.signalModel,r=>Us(r.name));save=r=>{if(r.request.action===`previous`)return!0;let t=this.nextOutcome();return this.nextOutcome.set(`allow`),Yn(r,t)};confirmPreview(r){this.status.set(`${r.source} request: ${r.id} (index ${r.index}). Application confirmed selection.`),this.active.set(r.id)}navigateSection(r){let t=this.sectionsWrapper()?.nativeElement,e=this.sections().find(c=>c.nativeElement.dataset.section===r.id)?.nativeElement,o=this.sections()[0]?.nativeElement;!t||!e||!o||(this.sectionStatus.set(`Application handled ${r.source} request for section ${r.id}.`),t.scrollTo({top:e.offsetTop-o.offsetTop,behavior:this.bxA11yService.isReducedMotion()?`instant`:`smooth`}))}observeSections(){let r=this.sectionsWrapper()?.nativeElement;if(!r)return;let t=r.getBoundingClientRect().top,e=this.sections().filter(o=>o.nativeElement.getBoundingClientRect().top<=t+32).at(-1);e&&this.sectionActive.set(e.nativeElement.dataset.section??`overview`)}resetWizard(r){r.reset(),this.details.reset(),this.note.reset(),this.nextOutcome.set(`allow`),this.wizardStatus.set(`Enter a workspace name, then continue.`)}recordWizard(r){switch(r.outcome){case`accepted`:this.wizardStatus.set(r.toId?`Saved and advanced to ${r.toId}.`:`Workspace saved. The workflow is complete.`);break;case`invalid`:this.wizardStatus.set(`Enter a workspace name before continuing. No save has started.`);break;case`error`:this.wizardStatus.set(`The simulated save failed. Your values are retained. Select Next or Finish once to retry.`);break;case`rejected`:this.wizardStatus.set(`The guard refused navigation. Your values are retained. Select Next or Finish once to try again.`);break;case`cancelled`:this.wizardStatus.set(`The save was cancelled because the workflow changed. Your values are retained.`)}}confirmSelection(){let r=this.pendingConfirmation();r?.outcome===`accepted`&&r.toId&&this.confirmationLabel()&&this.controlledActive.set(r.toId)}static ɵfac=function(t){return new(t||a)};static ɵcmp=H({type:a,selectors:[[`app-stepper-examples`]],viewQuery:function(t,e){t&1&&Nn(e.sectionsWrapper,Ki,5)(e.dynamicContent,Xi,5)(e.sections,Qi,5),t&2&&It(3)},features:[jt([he,{provide:Ee,useExisting:he}])],decls:121,vars:88,consts:[[`preview`,``],[`sectionsWrapper`,``],[`wizard`,``],[`finished`,``],[`signalWizard`,``],[`custom`,``],[`dynamicContent`,``],[`controlled`,``],[`section`,``],[1,`stepper-examples`],[`aria-labelledby`,`stepper-config-title`],[`id`,`stepper-config-title`],[3,`activeStepChange`,`stepRequested`,`mode`,`steps`,`variant`,`size`,`orientation`,`responsive`,`showLabels`,`indicatorInteractive`,`readOnly`,`glassiness`,`surfaceEffects`,`labels`,`showPercentage`,`progressFormat`,`activeStep`],[1,`config-grid`],[`label`,`Current step (activeStep ID)`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Behavior`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Variant`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Progress display`,3,`clearable`,`options`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Orientation`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Narrow screens`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Language`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`toggles`],[`label`,`Labels`,3,`ngModelChange`,`ngModel`],[`label`,`Current step error`,3,`ngModelChange`,`ngModel`],[`label`,`Current step loading`,3,`ngModelChange`,`ngModel`],[`label`,`Indicator interaction`,3,`ngModelChange`,`ngModel`],[`label`,`Read only`,3,`ngModelChange`,`ngModel`],[`label`,`Glass surfaces`,3,`ngModelChange`,`ngModel`],[`label`,`Interaction lighting`,3,`ngModelChange`,`ngModel`],[1,`actions`],[`bx-button`,``,`type`,`button`,3,`click`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[`announcement`,`polite`,3,`message`],[`aria-labelledby`,`stepper-section-title`],[`id`,`stepper-section-title`],[1,`section-layout`],[`mode`,`navigation`,`orientation`,`vertical`,3,`activeStepChange`,`stepRequested`,`steps`,`activeStep`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Release sections`,1,`section-scroll`,3,`scroll`],[1,`document-section`],[`aria-labelledby`,`stepper-wizard-title`],[`id`,`stepper-wizard-title`],[`label`,`Linear workflow`,3,`ngModelChange`,`ngModel`],[`label`,`Completed steps editable`,3,`ngModelChange`,`ngModel`],[`bx-button`,``,`type`,`button`],[`mode`,`wizard`,3,`activeStepChange`,`transitionFinished`,`variant`,`size`,`orientation`,`responsive`,`linear`,`contentPolicy`,`labels`,`beforeTransition`,`completionContent`,`activeStep`],[`id`,`details`,`icon`,`file-text`,3,`label`,`validation`,`editable`],[`bxStepContent`,``],[`id`,`preferences`,`icon`,`settings`,3,`label`,`optional`],[`bxStepLabel`,``],[`id`,`managed`,`label`,`Managed by your organization`,3,`disabled`],[`id`,`review`,`icon`,`clipboard-check`,3,`label`],[`aria-labelledby`,`stepper-signal-title`],[`id`,`stepper-signal-title`],[`mode`,`wizard`,`variant`,`segments`,3,`labels`],[`id`,`name`,`label`,`Name`,3,`validation`],[`id`,`ready`,`label`,`Ready`],[`aria-labelledby`,`stepper-custom-title`],[`id`,`stepper-custom-title`],[`mode`,`wizard`,`variant`,`cards`,3,`steps`,`linear`,`controls`,`labels`],[`aria-labelledby`,`stepper-controlled-title`],[`id`,`stepper-controlled-title`],[`mode`,`wizard`,`selectionMode`,`controlled`,3,`activeStepChange`,`transitionFinished`,`steps`,`linear`,`labels`,`activeStep`],[`announcement`,`polite`,3,`title`,`message`],[`bx-button`,``,`bxAlertActions`,``,`type`,`button`,`variant`,`filled`],[`aria-labelledby`,`stepper-gallery-title`],[`id`,`stepper-gallery-title`],[1,`gallery-group`],[`label`,`Progress display`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Workspace name`,`placeholder`,`Enter a workspace name`,3,`formControl`],[`label`,`Delivery note`,3,`formControl`],[`label`,`Required workspace name`,3,`formField`],[`bx-button`,``,`bxAlertActions`,``,`type`,`button`,`variant`,`filled`,3,`click`],[1,`gallery-row`],[`activeStep`,`build`,3,`steps`,`variant`,`size`,`orientation`,`responsive`,`glassiness`,`surfaceEffects`,`showLabels`,`labels`]],template:function(t,e){if(t&1){let o=yr();$(0,`div`,9)(1,`section`,10)(2,`h3`,11),Te(3,`Presentation and behavior`),q(),$(4,`p`),Te(5,` Pilot material and motion: select steps rapidly, press a marker, and compare sizes and orientations. Appearance settings control the theme, reduced motion, and opaque surfaces independently. `),q(),$(6,`bx-stepper`,12,0),UC(`activeStepChange`,function(d){return At(o),GA(e.active,d)||(e.active=d),Ot(d)}),ye(`stepRequested`,function(d){return e.mode()!==`wizard`&&e.confirmPreview(d)}),q(),$(8,`div`,13)(9,`bx-select`,14),ZR(),UC(`ngModelChange`,function(d){return At(o),GA(e.active,d)||(e.active=d),Ot(d)}),q(),$(10,`bx-select`,15),ZR(),UC(`ngModelChange`,function(d){return At(o),GA(e.mode,d)||(e.mode=d),Ot(d)}),q(),$(11,`bx-select`,16),ZR(),UC(`ngModelChange`,function(d){return At(o),GA(e.variant,d)||(e.variant=d),Ot(d)}),q(),ce(12,ea,1,3,`bx-select`,17),$(13,`bx-select`,18),ZR(),UC(`ngModelChange`,function(d){return At(o),GA(e.size,d)||(e.size=d),Ot(d)}),q(),$(14,`bx-select`,19),ZR(),UC(`ngModelChange`,function(d){return At(o),GA(e.orientation,d)||(e.orientation=d),Ot(d)}),q(),$(15,`bx-select`,20),ZR(),UC(`ngModelChange`,function(d){return At(o),GA(e.responsive,d)||(e.responsive=d),Ot(d)}),q(),$(16,`bx-select`,21),ZR(),ye(`ngModelChange`,function(d){return e.stepperDemoI18nService.setLanguage(d)}),q()(),$(17,`div`,22)(18,`bx-slide-toggle`,23),ZR(),UC(`ngModelChange`,function(d){return At(o),GA(e.showLabels,d)||(e.showLabels=d),Ot(d)}),q(),$(19,`bx-slide-toggle`,24),ZR(),UC(`ngModelChange`,function(d){return At(o),GA(e.errorState,d)||(e.errorState=d),Ot(d)}),q(),$(20,`bx-slide-toggle`,25),ZR(),UC(`ngModelChange`,function(d){return At(o),GA(e.loadingState,d)||(e.loadingState=d),Ot(d)}),q(),$(21,`bx-slide-toggle`,26),ZR(),UC(`ngModelChange`,function(d){return At(o),GA(e.allowIndicatorRequests,d)||(e.allowIndicatorRequests=d),Ot(d)}),q(),$(22,`bx-slide-toggle`,27),ZR(),UC(`ngModelChange`,function(d){return At(o),GA(e.readOnly,d)||(e.readOnly=d),Ot(d)}),q(),$(23,`bx-slide-toggle`,28),ZR(),UC(`ngModelChange`,function(d){return At(o),GA(e.glass,d)||(e.glass=d),Ot(d)}),q(),$(24,`bx-slide-toggle`,29),ZR(),UC(`ngModelChange`,function(d){return At(o),GA(e.lighting,d)||(e.lighting=d),Ot(d)}),q()(),$(25,`div`,30)(26,`button`,31),ye(`click`,function(){At(o);let d=oa$1(7);return Ot(d.reset())}),Te(27,`Reset`),q(),$(28,`button`,32),ye(`click`,function(){return e.active.set(`plan`)}),Te(29,`Select Plan`),q(),$(30,`button`,32),ye(`click`,function(){return e.active.set(`ship`)}),Te(31,`Select Ship`),q()(),Be$1(32,`bx-banner`,33),q(),$(33,`section`,34)(34,`h3`,35),Te(35,`Application-owned section navigation`),q(),Be$1(36,`bx-banner`,33),$(37,`div`,36)(38,`bx-stepper`,37),UC(`activeStepChange`,function(d){return At(o),GA(e.sectionActive,d)||(e.sectionActive=d),Ot(d)}),ye(`stepRequested`,function(d){return e.navigateSection(d)}),q(),$(39,`div`,38,1),ye(`scroll`,function(){return e.observeSections()}),Hn$1(41,ta,10,4,`section`,39,$i),q()()(),$(43,`section`,40)(44,`h3`,41),Te(45,`Workspace wizard`),q(),$(46,`p`),Te(47,`Required Reactive Forms validation, optional content, disabled steps, guarded saves, retained input and explicit completion.`),q(),$(48,`div`,22)(49,`bx-slide-toggle`,42),ZR(),UC(`ngModelChange`,function(d){return At(o),GA(e.linear,d)||(e.linear=d),Ot(d)}),q(),$(50,`bx-slide-toggle`,43),ZR(),UC(`ngModelChange`,function(d){return At(o),GA(e.editable,d)||(e.editable=d),Ot(d)}),q()(),$(51,`div`,30),Hn$1(52,na,2,2,`button`,44,na$1),$(54,`button`,31),ye(`click`,function(){return e.nextOutcome.set(`fail`)}),Te(55,`Fail next save`),q(),$(56,`button`,31),ye(`click`,function(){return e.nextOutcome.set(`reject`)}),Te(57,`Reject next guard`),q(),$(58,`button`,31),ye(`click`,function(){At(o);let d=oa$1(61);return Ot(e.resetWizard(d))}),Te(59,`Reset workflow and forms`),q()(),$(60,`bx-stepper`,45,2),UC(`activeStepChange`,function(d){return At(o),GA(e.wizardActive,d)||(e.wizardActive=d),Ot(d)}),ye(`transitionFinished`,function(d){return e.recordWizard(d)}),$(62,`bx-step`,46),kC(63,ia,3,1,`ng-template`,47),q(),$(64,`bx-step`,48),kC(65,aa,2,1,`ng-template`,49)(66,oa,3,1,`ng-template`,47),q(),Be$1(67,`bx-step`,50),$(68,`bx-step`,51),kC(69,ra,8,2,`ng-template`,47),q()(),kC(70,la,6,0,`ng-template`,null,3,Tb),Be$1(72,`bx-banner`,33),q(),$(73,`section`,52)(74,`h3`,53),Te(75,`Signal Forms`),q(),$(76,`bx-stepper`,54,4)(78,`bx-step`,55),kC(79,sa,1,1,`ng-template`,47),q(),$(80,`bx-step`,56),kC(81,ca,2,1,`ng-template`,47),q()(),$(82,`button`,31),ye(`click`,function(){At(o);let d=oa$1(77);return Ot(d.reset())}),Te(83,`Restart Signal Forms example`),q()(),$(84,`section`,57)(85,`h3`,58),Te(86,`Non-linear workflow and custom controls`),q(),$(87,`p`),Te(88,`Add or remove an optional step. Every control invokes the same guarded methods as the built-in buttons.`),q(),Be$1(89,`bx-stepper`,59,5),kC(91,da,2,1,`ng-template`,null,6,Tb),$(93,`div`,30)(94,`button`,31),ye(`click`,function(){At(o);let d=oa$1(90);return Ot(d.previous())}),Te(95,`Back`),q(),$(96,`button`,31),ye(`click`,function(){At(o);let d=oa$1(90);return Ot(d.next())}),Te(97,`Next`),q(),$(98,`button`,31),ye(`click`,function(){At(o);let d=oa$1(90);return Ot(d.finish())}),Te(99,`Finish`),q(),$(100,`button`,31),ye(`click`,function(){return e.extra.set(!e.extra())}),Te(101),q(),$(102,`button`,31),ye(`click`,function(){At(o);let d=oa$1(90);return Ot(d.reset())}),Te(103,`Reset`),q()(),Be$1(104,`bx-banner`,33),q(),$(105,`section`,60)(106,`h3`,61),Te(107,`Controlled wizard selection`),q(),$(108,`bx-stepper`,62,7),UC(`activeStepChange`,function(d){return At(o),GA(e.controlledActive,d)||(e.controlledActive=d),Ot(d)}),ye(`transitionFinished`,function(d){return e.pendingConfirmation.set(d)}),q(),$(110,`bx-banner`,63),ce(111,pa,2,1,`button`,64),q(),$(112,`button`,31),ye(`click`,function(){return At(o),oa$1(109).reset(),Ot(e.pendingConfirmation.set(null))}),Te(113,`Reset controlled wizard`),q()(),$(114,`section`,65)(115,`h3`,66),Te(116,`Variant and size reference`),q(),$(117,`p`),Te(118,`All presentations use the same completion data. Segment thickness changes with size. Orientation follows the configurator above.`),q(),Hn$1(119,ua,5,1,`div`,67,na$1),q()()}if(t&2){let o,c=oa$1(61),d=oa$1(71),lt=oa$1(90),oi=oa$1(109);E(6),le(`mode`,e.mode())(`steps`,e.previewSteps())(`variant`,e.variant())(`size`,e.size())(`orientation`,e.orientation())(`responsive`,e.responsive())(`showLabels`,e.showLabels())(`indicatorInteractive`,e.allowIndicatorRequests())(`readOnly`,e.readOnly())(`glassiness`,e.glass()?`on`:`off`)(`surfaceEffects`,e.lighting())(`labels`,e.labels)(`showPercentage`,!0)(`progressFormat`,e.progressFormat()),qC(`activeStep`,e.active),E(3),le(`clearable`,!1)(`options`,e.currentStepOptions()),qC(`ngModel`,e.active),QR(),E(),le(`clearable`,!1)(`options`,e.modes),qC(`ngModel`,e.mode),QR(),E(),le(`clearable`,!1)(`options`,e.variants),qC(`ngModel`,e.variant),QR(),E(),de(e.variant()===`progress`?12:-1),E(),le(`clearable`,!1)(`options`,e.sizes),qC(`ngModel`,e.size),QR(),E(),le(`clearable`,!1)(`options`,e.orientations),qC(`ngModel`,e.orientation),QR(),E(),le(`clearable`,!1)(`options`,e.responsiveOptions),qC(`ngModel`,e.responsive),QR(),E(),le(`clearable`,!1)(`options`,e.languages)(`ngModel`,e.stepperDemoI18nService.language()),QR(),E(2),qC(`ngModel`,e.showLabels),QR(),E(),qC(`ngModel`,e.errorState),QR(),E(),qC(`ngModel`,e.loadingState),QR(),E(),qC(`ngModel`,e.allowIndicatorRequests),QR(),E(),qC(`ngModel`,e.readOnly),QR(),E(),qC(`ngModel`,e.glass),QR(),E(),qC(`ngModel`,e.lighting),QR(),E(4),le(`disabled`,e.mode()===`wizard`||e.readOnly()),E(2),le(`disabled`,e.mode()===`wizard`||e.readOnly()),E(2),le(`message`,e.status()),E(4),le(`message`,e.sectionStatus()),E(2),le(`steps`,e.sectionSteps),qC(`activeStep`,e.sectionActive),E(3),qn$1(e.sectionSteps),E(8),qC(`ngModel`,e.linear),QR(),E(),qC(`ngModel`,e.editable),QR(),E(2),qn$1(e.policies),E(8),le(`variant`,e.variant())(`size`,e.size())(`orientation`,e.orientation())(`responsive`,e.responsive())(`linear`,e.linear())(`contentPolicy`,e.policy())(`labels`,e.labels)(`beforeTransition`,e.save)(`completionContent`,d),qC(`activeStep`,e.wizardActive),E(2),le(`label`,QA(85,Yi))(`validation`,e.details)(`editable`,e.editable()),E(2),le(`label`,QA(86,Zi))(`optional`,!0),E(3),le(`disabled`,!0),E(),le(`label`,QA(87,Ji)),E(4),le(`message`,c.pending()?`Saving workspace… The next step opens automatically after a successful save.`:e.wizardStatus()+` Next server outcome: `+e.nextOutcome()+`.`),E(4),le(`labels`,e.labels),E(2),le(`validation`,e.signalForm()),E(11),le(`steps`,e.dynamicSteps())(`linear`,!1)(`controls`,!1)(`labels`,e.labels),E(12),wr(``,e.extra()?`Remove`:`Add`,` optional step`),E(3),le(`message`,lt.isComplete()?`Completed`:lt.lastTransition()?.outcome||`Ready`),E(4),le(`steps`,e.gallerySteps)(`linear`,!1)(`labels`,e.controlledLabels),qC(`activeStep`,e.controlledActive),E(2),le(`title`,e.confirmationLabel()?`Waiting for application confirmation`:oi.isComplete()?`Workflow complete`:`Application-owned selection`)(`message`,e.controlledMessage()),E(),de((o=e.confirmationLabel())?111:-1,o),E(8),qn$1(e.galleryVariants)}},dependencies:[fne,cne,vF,mne,kF,Ys,wM,Z$1,nr,rr,ar,cn,$e$1,He$1,We],styles:[`
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
}`]})};var Jn=[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Success`,value:`success`},{label:`Danger`,value:`danger`},{label:`Info`,value:`info`},{label:`Warning`,value:`warn`},{label:`Neutral`,value:`neutral`}];var $n=[{label:`Tonal`,value:`tonal`},{label:`Filled`,value:`filled`},{label:`Outlined`,value:`outlined`}];var ei=`<span bxTruncate #overflow="bxTruncate"
    [bxTooltip]="label() | bxTruncatedText: overflow.truncated()"
    [attr.tabindex]="overflow.truncated() ? 0 : null"
    bxTooltipTouch="longpress">{{ label() }}</span>`;var ti=`<bx-tag [text]="label()" [tooltipOnTruncate]="false" tooltip="My application tooltip" />
<bx-input-field [label]="label()" [tooltipOnTruncate]="false" />
<bx-select label="Location" [options]="options()" [tooltipOnTruncate]="false" />`;var ni=`import { TruncateDirective, TruncatedTextPipe, TooltipDirective, truncatedText } from '@filip.mazev/blocks/primitives';

// Read the exported directive's truncated() and text() signals in your own logic.
const tooltip = truncatedText(label(), overflow.truncated(), automaticTooltips());

// Application-wide form default; individual controls can override it.
formSettings.update({ tooltipOnTruncate: false });`;var ga=()=>[0];var xe=class a{text=C(`A long location name that can be truncated`);width=C(14);enabled=C(!0);largeText=C(!1);automaticTooltips=C(!0);customTooltip=C(!1);menuActions=C(0);label=v(()=>String(this.text()??``));options=v(()=>[{label:this.label(),value:0}]);pipeExample=ei;customExample=ti;logicExample=ni;previewWidth=v(()=>{let r=Number(this.width());return Number.isFinite(r)?Math.max(4,Math.min(64,r)):14});static ɵfac=function(t){return new(t||a)};static ɵcmp=H({type:a,selectors:[[`app-truncation-examples`]],decls:96,vars:55,consts:[[`overflow`,`bxTruncate`],[`aria-label`,`Conditional truncation tooltips`,1,`truncation-demo`],[1,`truncation-controls`],[`label`,`Text`,`subscriptSizing`,`dynamic`,3,`valueChange`,`value`],[`label`,`Available width (rem)`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`max`,`value`],[`role`,`group`,`aria-label`,`Preview options`,1,`truncation-switches`],[`label`,`Enable text truncation`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Larger text preview`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Automatic tooltips`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Custom tooltip`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[1,`component-examples`],[1,`preview-card`,`text-preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Text preview`,1,`preview-stage`],[1,`text-example`,`example-width`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,3,`bxTruncate`,`bxTooltip`],[1,`preview-caption`],[1,`preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Tag preview`,1,`preview-stage`],[1,`example-width`],[`leadingIcon`,`map-pin`,3,`text`,`tooltipOnTruncate`,`tooltip`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Input field preview`,1,`preview-stage`],[`placeholder`,`Editable value`,`subscriptSizing`,`dynamic`,3,`label`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Search value preview`,1,`preview-stage`],[`ariaLabel`,`Search value`,`subscriptSizing`,`dynamic`,3,`search`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Select preview`,1,`preview-stage`],[`subscriptSizing`,`dynamic`,3,`label`,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Multiselect preview`,1,`preview-stage`],[`label`,`Selected tag`,`selectionDisplay`,`tags`,`subscriptSizing`,`dynamic`,3,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Menu item preview`,1,`preview-stage`],[3,`action`,`label`,`wrapLabel`,`tooltipOnTruncate`],[`tabindex`,`0`,`aria-label`,`HTML truncation example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`tabindex`,`0`,`aria-label`,`TypeScript truncation example`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`]],template:function(t,e){if(t&1){let o=yr();$(0,`section`,1)(1,`h3`),Te(2,`Shared truncation, optional tooltips`),q(),$(3,`p`)(4,`code`),Te(5,`TruncateDirective`),q(),Te(6,` owns ellipsis and rendered measurement. The pure `),$(7,`code`),Te(8,`bxTruncatedText`),q(),Te(9,` pipe selects text for a conditional tooltip. Use the exported directive signals or `),$(10,`code`),Te(11,`truncatedText()`),q(),Te(12,` helper in your own logic. `),q(),$(13,`div`,2)(14,`bx-input-field`,3),UC(`valueChange`,function(d){return At(o),GA(e.text,d)||(e.text=d),Ot(d)}),q(),$(15,`bx-input-field`,4),UC(`valueChange`,function(d){return At(o),GA(e.width,d)||(e.width=d),Ot(d)}),q()(),$(16,`div`,5)(17,`bx-checkbox`,6),UC(`checkedChange`,function(d){return At(o),GA(e.enabled,d)||(e.enabled=d),Ot(d)}),q(),$(18,`bx-checkbox`,7),UC(`checkedChange`,function(d){return At(o),GA(e.largeText,d)||(e.largeText=d),Ot(d)}),q(),$(19,`bx-checkbox`,8),UC(`checkedChange`,function(d){return At(o),GA(e.automaticTooltips,d)||(e.automaticTooltips=d),Ot(d)}),q(),$(20,`bx-checkbox`,9),UC(`checkedChange`,function(d){return At(o),GA(e.customTooltip,d)||(e.customTooltip=d),Ot(d)}),q()(),$(21,`div`,10)(22,`section`,11)(23,`h4`),Te(24,`Text preview`),q(),$(25,`div`,12)(26,`div`,13)(27,`span`,14,0),Mb(29,`bxTruncatedText`),Te(30),q()()(),$(31,`output`,15),Te(32),q()(),$(33,`section`,16)(34,`h4`),Te(35,`Tag`),q(),$(36,`div`,17)(37,`div`,18),Be$1(38,`bx-tag`,19),q()(),$(39,`p`,15),Te(40,`Clipped labels use an automatic or application-owned tooltip.`),q()(),$(41,`section`,16)(42,`h4`),Te(43,`Input field`),q(),$(44,`div`,20)(45,`div`,18),Be$1(46,`bx-input-field`,21),q()(),$(47,`p`,15),Te(48,`The floating label shares the truncation measurement.`),q()(),$(49,`section`,16)(50,`h4`),Te(51,`Search value`),q(),$(52,`div`,22)(53,`div`,18)(54,`bx-search-input`,23),ye(`search`,function(d){return e.text.set(d)}),q()()(),$(55,`p`,15),Te(56,`Editing the search updates the shared example text.`),q()(),$(57,`section`,16)(58,`h4`),Te(59,`Select`),q(),$(60,`div`,24)(61,`div`,18),Be$1(62,`bx-select`,25),q()(),$(63,`p`,15),Te(64,`Selected values and captions share the same available width.`),q()(),$(65,`section`,16)(66,`h4`),Te(67,`Multiselect`),q(),$(68,`div`,26)(69,`div`,18),Be$1(70,`bx-multi-select`,27),q()(),$(71,`p`,15),Te(72,`The selected tag follows the owning control's tooltip setting.`),q()(),$(73,`section`,16)(74,`h4`),Te(75,`Menu item`),q(),$(76,`div`,28)(77,`div`,18)(78,`bx-menu`)(79,`bx-menu-item`,29),ye(`action`,function(){return e.menuActions.set(e.menuActions()+1)}),q()()()(),$(80,`output`,15),Te(81),q()()(),$(82,`p`),Te(83,` Change the text or width to switch between clipped and fitting labels. Turn automatic tooltips off to retain ellipsis and measurement for custom feedback. Hover, keyboard focus, and touch-and-hold use the existing tooltip mechanism. Explicit tag descriptions still take precedence. Custom tooltip applies to the text and tag examples. Preview panels keep their size; long wrapped content scrolls inside them. Example widths are capped by the available space in each card. `),q(),$(84,`h3`),Te(85,`Short conditional tooltip`),q(),$(86,`pre`,30),Be$1(87,`code`,31),q(),$(88,`h3`),Te(89,`Disable automatic tooltips`),q(),$(90,`pre`,30),Be$1(91,`code`,31),q(),$(92,`h3`),Te(93,`Use the public API in your application`),q(),$(94,`pre`,32),Be$1(95,`code`,33),q()()}if(t&2){let o=oa$1(28);E(14),qC(`value`,e.text),E(),le(`min`,4)(`max`,64),qC(`value`,e.width),E(2),qC(`checked`,e.enabled),E(),qC(`checked`,e.largeText),E(),qC(`checked`,e.automaticTooltips),E(),qC(`checked`,e.customTooltip),E(6),we$1(`inline-size`,e.previewWidth(),`rem`),fe(`large-text`,e.largeText()),E(),le(`bxTruncate`,e.enabled())(`bxTooltip`,e.customTooltip()?`My application tooltip`:Ib(29,50,e.label(),o.truncated(),e.automaticTooltips())),G$1(`tabindex`,e.customTooltip()||e.automaticTooltips()&&o.truncated()?0:null),E(3),He$2(e.label()),E(2),wr(`Text `,o.truncated()?`is truncated`:`fits without truncation`,`.`),E(5),we$1(`inline-size`,e.previewWidth(),`rem`),E(),le(`text`,e.label())(`tooltipOnTruncate`,e.automaticTooltips())(`tooltip`,e.customTooltip()?`My application tooltip`:void 0),E(7),we$1(`inline-size`,e.previewWidth(),`rem`),E(),le(`label`,e.label())(`tooltipOnTruncate`,e.automaticTooltips()),E(7),we$1(`inline-size`,e.previewWidth(),`rem`),E(),le(`value`,e.label())(`tooltipOnTruncate`,e.automaticTooltips()),E(7),we$1(`inline-size`,e.previewWidth(),`rem`),E(),le(`label`,e.label())(`options`,e.options())(`value`,0)(`tooltipOnTruncate`,e.automaticTooltips()),E(7),we$1(`inline-size`,e.previewWidth(),`rem`),E(),le(`options`,e.options())(`value`,QA(54,ga))(`tooltipOnTruncate`,e.automaticTooltips()),E(7),we$1(`inline-size`,e.previewWidth(),`rem`),E(2),le(`label`,e.label())(`wrapLabel`,!e.enabled())(`tooltipOnTruncate`,e.automaticTooltips()),E(2),wr(`Menu activations: `,e.menuActions()),E(6),le(`highlight`,e.pipeExample),E(4),le(`highlight`,e.customExample),E(4),le(`highlight`,e.logicExample)}},dependencies:[ht,Ti$1,nr,sr,qe$1,rr,cM,lM,bM,Ba$1,pi$1,im],styles:[`
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
}`]})};var ba=()=>({key:`tagLabel`});var Ze=class a{demoI18nService=p(P);label=C(`Skopje`);text=v(()=>String(this.label()??``));color=C(`accent`);variant=C(`tonal`);disabled=C(!1);leadingIcon=C(!0);trailingIcon=C(!0);leadingCount=C(!1);trailingCount=C(!0);leftNumber=C(3);rightNumber=C(12);colors=Jn;variants=$n;static ɵfac=function(t){return new(t||a)};static ɵcmp=H({type:a,selectors:[[`app-tag-examples`]],features:[jt([P,{provide:Ee,useExisting:P}])],decls:23,vars:26,consts:[[1,`tag-demo`],[`aria-label`,`Tag previews`,1,`tag-previews`],[`tooltip`,`A location tag tooltip`,3,`text`,`color`,`variant`,`disabled`,`leadingIcon`,`trailingIcon`,`leadingNumber`,`trailingNumber`],[`color`,`info`,`variant`,`filled`,`ariaLabel`,`42 locations`,`tooltip`,`Number-only tag`,3,`leadingNumber`],[`leadingIcon`,`map-pin`,`color`,`success`,3,`text`],[`text`,`Unavailable`,`color`,`neutral`,3,`disabled`],[`text`,`Skopje`],[`text`,`+2`,`tooltip`,`Ohrid, Bitola`],[1,`tag-controls`],[`label`,`Tag text`,3,`valueChange`,`value`],[`label`,`Color`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Appearance`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Leading number`,`type`,`number`,3,`valueChange`,`value`],[`label`,`Trailing number`,`type`,`number`,3,`valueChange`,`value`],[1,`tag-controls-checkboxes`],[`label`,`Leading icon`,3,`checkedChange`,`checked`],[`label`,`Trailing icon`,3,`checkedChange`,`checked`],[`label`,`Leading number`,3,`checkedChange`,`checked`],[`label`,`Trailing number`,3,`checkedChange`,`checked`],[`label`,`Disabled appearance`,3,`checkedChange`,`checked`]],template:function(t,e){t&1&&($(0,`div`,0)(1,`div`,1),Be$1(2,`bx-tag`,2)(3,`bx-tag`,3)(4,`bx-tag`,4)(5,`bx-tag`,5)(6,`bx-tag`,6)(7,`bx-tag`,7),q(),$(8,`div`,8)(9,`bx-input-field`,9),UC(`valueChange`,function(c){return GA(e.label,c)||(e.label=c),c}),q(),$(10,`bx-select`,10),UC(`valueChange`,function(c){return GA(e.color,c)||(e.color=c),c}),q(),$(11,`bx-select`,11),UC(`valueChange`,function(c){return GA(e.variant,c)||(e.variant=c),c}),q(),$(12,`bx-input-field`,12),UC(`valueChange`,function(c){return GA(e.leftNumber,c)||(e.leftNumber=c),c}),q(),$(13,`bx-input-field`,13),UC(`valueChange`,function(c){return GA(e.rightNumber,c)||(e.rightNumber=c),c}),q()(),$(14,`div`,14)(15,`bx-checkbox`,15),UC(`checkedChange`,function(c){return GA(e.leadingIcon,c)||(e.leadingIcon=c),c}),q(),$(16,`bx-checkbox`,16),UC(`checkedChange`,function(c){return GA(e.trailingIcon,c)||(e.trailingIcon=c),c}),q(),$(17,`bx-checkbox`,17),UC(`checkedChange`,function(c){return GA(e.leadingCount,c)||(e.leadingCount=c),c}),q(),$(18,`bx-checkbox`,18),UC(`checkedChange`,function(c){return GA(e.trailingCount,c)||(e.trailingCount=c),c}),q(),$(19,`bx-checkbox`,19),UC(`checkedChange`,function(c){return GA(e.disabled,c)||(e.disabled=c),c}),q()(),$(20,`p`),Te(21,` Hover or keyboard-focus a tooltip tag. In a select trigger, the parent control exposes the complete selection while overflow tags show the remaining names on hover. `),q(),Be$1(22,`app-truncation-examples`),q()),t&2&&(E(2),le(`text`,e.text())(`color`,e.color()??`accent`)(`variant`,e.variant()??`tonal`)(`disabled`,e.disabled())(`leadingIcon`,e.leadingIcon()?`map-pin`:void 0)(`trailingIcon`,e.trailingIcon()?`chevron-right`:void 0)(`leadingNumber`,e.leadingCount()?e.leftNumber():null)(`trailingNumber`,e.trailingCount()?e.rightNumber():null),E(),le(`leadingNumber`,42),E(),le(`text`,QA(25,ba)),E(),le(`disabled`,!0),E(4),qC(`value`,e.label),E(),le(`clearable`,!1)(`options`,e.colors),qC(`value`,e.color),E(),le(`clearable`,!1)(`options`,e.variants),qC(`value`,e.variant),E(),qC(`value`,e.leftNumber),E(),qC(`value`,e.rightNumber),E(2),qC(`checked`,e.leadingIcon),E(),qC(`checked`,e.trailingIcon),E(),qC(`checked`,e.leadingCount),E(),qC(`checked`,e.trailingCount),E(),qC(`checked`,e.disabled))},dependencies:[bM,Ti$1,nr,rr,xe],styles:[`
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
}`]})};function _a(a,r){if(a&1&&($(0,`strong`),Te(1),q()),a&2){let t=L(2);E(),He$2(t.text().brand)}}function ya(a,r){if(a&1&&($(0,`a`,13),Be$1(1,`bx-icon`,14),ce(2,_a,2,1,`strong`),q()),a&2){let t=r.$implicit,e=L();G$1(`aria-label`,e.text().brand),E(2),de(t?-1:2)}}function va(a,r){if(a&1){let t=yr();$(0,`button`,15),ye(`click`,function(){At(t);let o=L(2);return Ot(o.action.set(`top.actionDone`))}),Be$1(1,`bx-icon`,16),Te(2),q(),$(3,`button`,15),ye(`click`,function(){At(t);let o=L(2);return Ot(o.action.set(`top.helpDone`))}),Be$1(4,`bx-icon`,17),Te(5),q()}if(a&2){let t=L(2);E(2),wr(``,t.text().settings,` `),E(3),wr(``,t.text().help,` `)}}function ha(a,r){if(a&1&&ce(0,va,6,2),a&2){let t=L();de(t.actions()?0:-1)}}function xa(a,r){if(a&1&&(Be$1(0,`bx-icon`,18),$(1,`span`),Te(2),q(),$(3,`small`,19),Te(4,`↗`),q()),a&2){let t=r.$implicit;le(`name`,t.icon?.name??`circle`),E(2),He$2(t.label)}}var Je=class a{navigationDemoI18nService=p(J);groups=v(()=>Ke(`/components/top-nav`,this.navigationDemoI18nService).map(t=>t.id!==`workspace`?t:s(r({},t),{items:t.items.filter(e=>e.id===`overview`||e.id===`projects`).map(e=>e.id!==`projects`?e:s(r({},e),{children:[...e.children??[],...t.items.filter(o=>o.id===`reports`||o.id===`disabled`)]}))})));compact=C(!1);searchable=C(!0);icons=C(!1);sticky=C(!1);rtl=C(!1);custom=C(!1);actions=C(!1);width=C(1100);selected=C(void 0);action=C(void 0);text=v(()=>({compact:this.navigationDemoI18nService.translate(`top.compact`),width:this.navigationDemoI18nService.translate(`top.width`),icons:this.navigationDemoI18nService.translate(`top.icons`),sticky:this.navigationDemoI18nService.translate(`top.sticky`),custom:this.navigationDemoI18nService.translate(`top.custom`),actions:this.navigationDemoI18nService.translate(`top.actions`),search:this.navigationDemoI18nService.translate(`demo.search`),rtl:this.navigationDemoI18nService.translate(`demo.rtl`),language:this.navigationDemoI18nService.translate(`demo.language`),brand:this.navigationDemoI18nService.translate(`demo.studio`),title:this.navigationDemoI18nService.translate(`top.title`),description:this.navigationDemoI18nService.translate(`top.description`),compactMode:this.navigationDemoI18nService.translate(`top.modeCompact`),expandedMode:this.navigationDemoI18nService.translate(`top.modeExpanded`),settings:this.navigationDemoI18nService.translate(`top.settings`),help:this.navigationDemoI18nService.translate(`top.help`)}));selection=v(()=>{let r=this.selected(),t=this.action();return t?this.navigationDemoI18nService.translate(t):r?`${this.navigationDemoI18nService.translate(`nav.${r.id}`)} \xB7 ${r.id}`:this.navigationDemoI18nService.translate(`demo.select`)});config=v(()=>({position:this.sticky()?`sticky`:`inline`,compactBreakpoint:`sm`,compact:this.compact()?!0:void 0,searchable:this.searchable(),showItemIcons:this.icons(),showSectionIcons:this.icons(),ariaLabel:{key:`top.name`},searchLabel:{key:`nav.search`},searchPlaceholder:{key:`top.searchPlaceholder`},clearSearchLabel:{key:`nav.clear`},emptyText:{key:`nav.empty`},openLabel:{key:`nav.open`},closeLabel:{key:`nav.close`},submenuLabel:{key:`nav.submenu`},resultLabel:{key:`nav.result`},backLabel:{key:`nav.back`},pathLabel:{key:`nav.path`}}));select(r){this.action.set(void 0),this.selected.set(r)}static ɵfac=function(t){return new(t||a)};static ɵcmp=H({type:a,selectors:[[`app-top-nav-examples`]],features:[jt([J,{provide:Ee,useExisting:J}])],decls:27,vars:32,consts:[[`nav`,``],[`customItem`,``],[1,`demo-language-row`],[`subscriptSizing`,`dynamic`,3,`selectionChange`,`label`,`clearable`,`options`,`value`],[1,`top-nav-demo-controls`],[3,`checkedChange`,`label`,`checked`],[`type`,`number`,3,`valueChange`,`label`,`min`,`max`,`value`],[1,`top-nav-demo-frame`],[3,`itemSelected`,`config`,`groups`,`itemTemplate`],[`bxTopNavBrand`,``],[`bxTopNavActions`,``],[1,`top-nav-demo-content`],[`aria-live`,`polite`],[`routerLink`,`/components/top-nav/overview`,1,`top-nav-demo-brand`],[`name`,`blocks`,`size`,`24`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`type`,`button`,3,`click`],[`name`,`settings`,`size`,`20`],[`name`,`circle-help`,`size`,`20`],[`size`,`20`,3,`name`],[`aria-hidden`,`true`]],template:function(t,e){if(t&1){let o=yr();$(0,`div`,2)(1,`bx-select`,3),ye(`selectionChange`,function(d){return e.navigationDemoI18nService.setLanguage(d.value)}),q()(),$(2,`div`,4)(3,`bx-checkbox`,5),UC(`checkedChange`,function(d){return At(o),GA(e.compact,d)||(e.compact=d),Ot(d)}),q(),$(4,`bx-checkbox`,5),UC(`checkedChange`,function(d){return At(o),GA(e.searchable,d)||(e.searchable=d),Ot(d)}),q(),$(5,`bx-checkbox`,5),UC(`checkedChange`,function(d){return At(o),GA(e.icons,d)||(e.icons=d),Ot(d)}),q(),$(6,`bx-checkbox`,5),UC(`checkedChange`,function(d){return At(o),GA(e.sticky,d)||(e.sticky=d),Ot(d)}),q(),$(7,`bx-checkbox`,5),UC(`checkedChange`,function(d){return At(o),GA(e.rtl,d)||(e.rtl=d),Ot(d)}),q(),$(8,`bx-checkbox`,5),UC(`checkedChange`,function(d){return At(o),GA(e.custom,d)||(e.custom=d),Ot(d)}),q(),$(9,`bx-checkbox`,5),UC(`checkedChange`,function(d){return At(o),GA(e.actions,d)||(e.actions=d),Ot(d)}),q(),$(10,`bx-input-field`,6),UC(`valueChange`,function(d){return At(o),GA(e.width,d)||(e.width=d),Ot(d)}),q()(),$(11,`div`,7)(12,`bx-top-nav`,8,0),ye(`itemSelected`,function(d){return e.select(d)}),kC(14,ya,3,2,`ng-template`,9)(15,ha,1,1,`ng-template`,10),q(),$(16,`div`,11)(17,`h3`),Te(18),q(),$(19,`p`),Te(20),q(),$(21,`p`),Te(22),q(),$(23,`output`,12),Te(24),q()()(),kC(25,xa,5,2,`ng-template`,null,1,Tb)}if(t&2){let o=oa$1(13),c=oa$1(26);E(),le(`label`,e.text().language)(`clearable`,!1)(`options`,e.navigationDemoI18nService.languages)(`value`,e.navigationDemoI18nService.language()),E(2),le(`label`,e.text().compact),qC(`checked`,e.compact),E(),le(`label`,e.text().search),qC(`checked`,e.searchable),E(),le(`label`,e.text().icons),qC(`checked`,e.icons),E(),le(`label`,e.text().sticky),qC(`checked`,e.sticky),E(),le(`label`,e.text().rtl),qC(`checked`,e.rtl),E(),le(`label`,e.text().custom),qC(`checked`,e.custom),E(),le(`label`,e.text().actions),qC(`checked`,e.actions),E(),le(`label`,e.text().width)(`min`,280)(`max`,1600),qC(`value`,e.width),E(),we$1(`width`,e.width()+`px`),G$1(`dir`,e.rtl()?`rtl`:`ltr`),E(),le(`config`,e.config())(`groups`,e.groups())(`itemTemplate`,e.custom()?c:void 0),E(6),He$2(e.text().title),E(2),He$2(e.text().description),E(2),He$2(o.isCompact()?e.text().compactMode:e.text().expandedMode),E(2),He$2(e.selection())}},dependencies:[$p,Fe,on,an,Z$1,Ti$1,nr,rr,hn],styles:[`
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
}`]})};var ii=Array.from({length:3e3},(a,r)=>({id:r,title:`Item ${r+1}`,description:`Variable-height content wraps when the grid changes width. `.repeat(1+r%5)}));function fa(a,r){if(a&1&&($(0,`p`),Te(1),q()),a&2){let t=L().$implicit;E(),BC(``,t.description,` `,t.description)}}function Sa(a,r){if(a&1){let t=yr();$(0,`bx-card`,12)(1,`p`),Te(2),q(),ce(3,fa,2,2,`p`),$(4,`button`,5),ye(`click`,function(){let o=At(t).$implicit,c=L();return Ot(c.toggle(o.id))}),Te(5),q()()}if(a&2){let t=r.$implicit,e=L();le(`title`,t.title)(`headingLevel`,3)(`surfaceEffects`,!1)(`opaque`,!0),E(2),He$2(t.description),E(),de(e.expanded().has(t.id)?3:-1),E(),G$1(`aria-expanded`,e.expanded().has(t.id)),E(),wr(` `,e.expanded().has(t.id)?`Less content`:`More content`,` `)}}var $e=class a{items=ii;itemKey=r=>r.id;layouts=[{label:`Responsive grid`,value:`grid`},{label:`Vertical list`,value:`list`}];layout=C(`grid`);width=C(100);index=C(1500);expanded=C(/* @__PURE__ */ new Set);config=v(()=>({layout:this.layout(),minColumnWidth:`12rem`,estimatedRowHeight:200,overscan:800}));toggle(r){this.expanded.update(t=>{let e=new Set(t);return e.has(r)?e.delete(r):e.add(r),e})}static ɵfac=function(t){return new(t||a)};static ɵcmp=H({type:a,selectors:[[`app-virtual-collection-examples`]],decls:15,vars:20,consts:[[`viewport`,``],[`collection`,``],[1,`virtual-demo-controls`],[`label`,`Layout`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Scroll to index`,`type`,`number`,3,`ngModelChange`,`min`,`max`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`for`,`virtual-demo-width`],[`id`,`virtual-demo-width`,`bxSlider`,``,`type`,`range`,`min`,`40`,`max`,`100`,3,`ngModelChange`,`ngModel`],[`role`,`status`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Virtual collection example`,1,`virtual-demo-viewport`],[3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[3,`title`,`headingLevel`,`surfaceEffects`,`opaque`]],template:function(t,e){if(t&1){let o=yr();$(0,`div`,2)(1,`bx-select`,3),ZR(),ye(`ngModelChange`,function(d){return e.layout.set(d)}),q(),$(2,`bx-input-field`,4),ZR(),ye(`ngModelChange`,function(d){return e.index.set(d)}),q(),$(3,`button`,5),ye(`click`,function(){At(o);let d=oa$1(13);return Ot(d.scrollToIndex(e.index()))}),Te(4,`Scroll to item`),q()(),$(5,`label`,6),Te(6),q(),$(7,`input`,7),ZR(),ye(`ngModelChange`,function(d){return e.width.set(d)}),q(),$(8,`p`,8),Te(9),q(),$(10,`div`,9,0)(12,`bx-virtual-collection`,10,1),kC(14,Sa,6,8,`ng-template`,11),q()()}if(t&2){let o=oa$1(11),c=oa$1(13);E(),le(`clearable`,!1)(`options`,e.layouts)(`ngModel`,e.layout()),QR(),E(),le(`min`,0)(`max`,e.items.length-1)(`ngModel`,e.index()),QR(),E(4),wr(`Container width `,e.width(),`%`),E(),le(`ngModel`,e.width()),QR(),E(2),HC(` `,c.renderedItems().length,` mounted of `,e.items.length,` · `,c.renderedRange().columns,` columns · range `,c.renderedRange().start,`–`,c.renderedRange().end,`
`),E(),we$1(`inline-size`,e.width(),`%`),E(2),le(`items`,e.items)(`trackBy`,e.itemKey)(`config`,e.config())(`scrollContainer`,o),E(2),le(`bxVirtualItem`,c)}},dependencies:[fne,pD,yF,cne,vF,Z$1,nr,rr,Qn$1,CM,AM,rd],styles:[`
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
}`]})};function Ca(a,r){if(a&1&&($(0,`div`)(1,`strong`),Te(2),q()()),a&2){let t=L();E(2),He$2(t.data.title)}}function wa(a,r){if(a&1){let t=yr();$(0,`div`,4)(1,`button`,5),ye(`click`,function(){At(t);let o=L();return Ot(o.close())}),Te(2,`Cancel`),q(),$(3,`button`,6),ye(`click`,function(){At(t);let o=L();return Ot(o.confirm())}),Te(4,`Save changes`),q()()}}var et=class a extends kn{name=new ND(`Blocks workspace`,{nonNullable:!0});confirm(){this.modal.close(`confirm`,this.name.value)}static ɵfac=(()=>{let r;return function(e){return(r||(r=Co$1(a)))(e||a)}})();static ɵcmp=H({type:a,selectors:[[`app-component-dialog`]],features:[rn],decls:6,vars:2,consts:[[4,`appModalHeader`],[1,`dialog-body`],[`label`,`Project name`,3,`formControl`],[`class`,`dialog-actions`,4,`appModalFooter`],[1,`dialog-actions`],[`type`,`button`,`bx-button`,``,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(t,e){t&1&&(kC(0,Ca,3,1,`div`,0),$(1,`div`,1)(2,`p`),Te(3),q(),$(4,`bx-input-field`,2),ZR(),q()(),kC(5,wa,5,0,`div`,3)),t&2&&(E(3),He$2(e.data.description),E(),le(`formControl`,e.name),QR())},dependencies:[Z$1,nr,mne,cne,kF,Tn,On$1],styles:[`
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
}`]})};var Ea=()=>({required:`Enter a project name.`});var ka=()=>({email:`Enter a valid email address.`});var Ta=()=>({name:`settings`});var Ma=a=>({text:`Project settings`,icon:a});function Pa(a,r){a&1&&($(0,`div`,10),Be$1(1,`app-side-nav-examples`),q())}function Na(a,r){a&1&&($(0,`div`,10),Be$1(1,`app-top-nav-examples`),q())}function Da(a,r){a&1&&($(0,`div`,10),Be$1(1,`app-stepper-examples`),q())}function Ia(a,r){a&1&&Be$1(0,`app-virtual-collection-examples`)}function Oa(a,r){a&1&&Be$1(0,`app-resize-handle-examples`)}function Va(a,r){a&1&&Be$1(0,`app-side-panel-examples`)}function za(a,r){a&1&&Be$1(0,`app-infinite-scroll-examples`)}function Wa(a,r){a&1&&Be$1(0,`app-essentials-examples`,21)}function Ra(a,r){a&1&&Be$1(0,`app-essentials-examples`,22)}function La(a,r){a&1&&Be$1(0,`app-essentials-examples`,23)}function Aa(a,r){a&1&&Be$1(0,`app-essentials-examples`,24)}function Ba(a,r){a&1&&Be$1(0,`app-essentials-examples`,25)}function Fa(a,r){a&1&&Be$1(0,`app-essentials-examples`,26)}function ja(a,r){a&1&&Be$1(0,`app-essentials-examples`,27)}function qa(a,r){a&1&&Be$1(0,`app-essentials-examples`,28)}function Ha(a,r){a&1&&Be$1(0,`app-essentials-examples`,29)}function Ua(a,r){a&1&&Be$1(0,`app-page-examples`)}function Ga(a,r){a&1&&Be$1(0,`app-essentials-examples`,30)}function Ka(a,r){a&1&&Be$1(0,`app-essentials-examples`,31)}function Xa(a,r){a&1&&Be$1(0,`app-essentials-examples`,32)}function Qa(a,r){a&1&&Be$1(0,`app-tag-examples`)}function Ya(a,r){a&1&&Be$1(0,`app-truncation-examples`)}function Za(a,r){a&1&&Be$1(0,`app-form-examples`,33)}function Ja(a,r){a&1&&Be$1(0,`app-form-examples`,34)}function $a(a,r){a&1&&Be$1(0,`app-form-examples`,35)}function eo(a,r){a&1&&Be$1(0,`app-form-examples`,36)}function to(a,r){a&1&&Be$1(0,`app-form-examples`,37)}function no(a,r){a&1&&Be$1(0,`app-form-examples`,38)}function io(a,r){a&1&&Be$1(0,`app-form-examples`,39)}function ao(a,r){a&1&&Be$1(0,`app-form-examples`,40)}function oo(a,r){a&1&&Be$1(0,`app-form-examples`,41)}function ro(a,r){a&1&&Be$1(0,`app-form-examples`,42)}function lo(a,r){a&1&&Be$1(0,`app-form-examples`,43)}function so(a,r){a&1&&Be$1(0,`app-form-examples`,44)}function co(a,r){a&1&&Be$1(0,`app-form-examples`,45)}function po(a,r){if(a&1){let t=yr();$(0,`div`,46)(1,`div`,51)(2,`button`,52),ye(`click`,function(){At(t);let o=L(2);return Ot(o.activate(`Primary action`))}),Te(3,`Primary action`),q(),$(4,`button`,53),ye(`click`,function(){At(t);let o=L(2);return Ot(o.activate(`Tonal action`))}),Te(5,`Tonal`),q(),$(6,`button`,54),ye(`click`,function(){At(t);let o=L(2);return Ot(o.activate(`Text action`))}),Te(7,`Text`),q(),$(8,`button`,55),Te(9,`Disabled`),q()(),$(10,`div`,51)(11,`button`,56),ye(`click`,function(){At(t);let o=L(2);return Ot(o.activate(`Success`))}),Te(12,`Success`),q(),$(13,`button`,57),ye(`click`,function(){At(t);let o=L(2);return Ot(o.activate(`Warning`))}),Te(14,`Warning`),q(),$(15,`button`,58),ye(`click`,function(){At(t);let o=L(2);return Ot(o.activate(`Delete`))}),Te(16,`Delete`),q(),$(17,`button`,59),ye(`click`,function(){At(t);let o=L(2);return Ot(o.activate(`Add item`))}),Be$1(18,`bx-icon`,60),q()(),$(19,`div`,51)(20,`button`,61),ye(`click`,function(){At(t);let o=L(2);return Ot(o.activate(`Close example`))}),Be$1(21,`bx-icon`,62),q(),$(22,`button`,63),ye(`click`,function(){At(t);let o=L(2);return Ot(o.activate(`Outlined action`))}),Te(23,`Outlined`),q(),$(24,`button`,64),ye(`click`,function(){At(t);let o=L(2);return Ot(o.activate(`Action without runtime effects`))}),Te(25,` Without runtime effects `),q()()()}a&2&&(E(8),le(`disabled`,!0),E(14),le(`outlined`,!0),E(2),le(`surfaceEffects`,!1))}function mo(a,r){if(a&1&&($(0,`div`,46)(1,`bx-checkbox`,65),ZR(),q(),$(2,`bx-checkbox`,66),ZR(),q(),$(3,`div`,51),Be$1(4,`bx-checkbox-indicator`,67),$(5,`span`),Te(6),q()(),$(7,`div`,51),Be$1(8,`bx-checkbox-indicator`),$(9,`span`),Te(10,`Unchecked`),q(),Be$1(11,`bx-checkbox-indicator`,68),$(12,`span`),Te(13,`Checked`),q(),Be$1(14,`bx-checkbox-indicator`,69),$(15,`span`),Te(16,`Partial`),q()()()),a&2){let t=L(2);E(),le(`formControl`,t.checked),QR(),E(),le(`formControl`,t.secondChecked),QR(),E(2),le(`checked`,t.checked.value)(`indeterminate`,t.secondChecked.value),E(2),wr(`Selection: `,t.secondChecked.value?`partial`:t.checked.value?`checked`:`unchecked`),E(5),le(`checked`,!0),E(3),le(`indeterminate`,!0)}}function uo(a,r){if(a&1&&($(0,`div`,46)(1,`bx-checkbox`,70),ZR(),q(),$(2,`bx-checkbox`,71),ZR(),q(),Be$1(3,`bx-checkbox`,72)(4,`bx-checkbox`,73)(5,`bx-checkbox`,74),$(6,`bx-checkbox`,75),ZR(),q(),$(7,`output`),Te(8),q()()),a&2){let t=L(2);E(),le(`formControl`,t.checked),QR(),E(),le(`formControl`,t.secondChecked),QR(),E(),le(`indeterminate`,!0),E(),le(`checked`,!0)(`emissive`,!1),E(),le(`checked`,!0)(`readOnly`,!0),E(),le(`formControl`,t.disabledCheck),QR(),E(2),BC(`Updates: `,t.checked.value?`on`:`off`,` · Previews: `,t.secondChecked.value?`on`:`off`)}}function go(a,r){if(a&1){let t=yr();$(0,`div`,47)(1,`bx-form-field`,76)(2,`span`,77)(3,`input`,78),ye(`input`,function(o){At(t);let c=L(2);return Ot(c.updateField(o))})(`blur`,function(){At(t);let o=L(2);return Ot(o.showError.set(!0))}),q()()(),$(4,`button`,79),ye(`click`,function(){At(t);let o=L(2);return Ot(o.showError.set(!0))}),Te(5,`Validate name`),q(),$(6,`output`),Te(7),q()()}if(a&2){let t=L(2);E(),le(`required`,!0)(`error`,t.fieldError()),E(2),le(`value`,t.fieldValue()),G$1(`aria-invalid`,!!t.fieldError()),E(4),wr(`Value: `,t.fieldValue()||`empty`)}}function bo(a,r){if(a&1&&($(0,`div`,47)(1,`bx-input-field`,80),ZR(),q(),$(2,`bx-input-field`,81),ZR(),q(),$(3,`bx-input-field`,82),ZR(),q(),$(4,`output`),Te(5),q()()),a&2){let t=L(2);E(),le(`errorMessages`,QA(9,Ea))(`formControl`,t.name),QR(),E(),le(`errorMessages`,QA(10,ka))(`formControl`,t.email),QR(),E(),le(`min`,1)(`max`,20)(`formControl`,t.quantity),QR(),E(2),BC(``,t.name.value,` · `,t.quantity.value,` members`)}}function _o(a,r){if(a&1){let t=yr();$(0,`fieldset`,46)(1,`legend`),Te(2,`Notification frequency`),q(),$(3,`bx-radio`,83),ZR(),q(),$(4,`bx-radio`,84),ZR(),q(),$(5,`bx-radio`,85),ZR(),q(),$(6,`output`),Te(7),q(),$(8,`button`,54),ye(`click`,function(){At(t);let o=L(2);return Ot(o.frequency.reset())}),Te(9,`Reset frequency`),q()()}if(a&2){let t=L(2);E(3),le(`formControl`,t.frequency),QR(),E(),le(`formControl`,t.frequency),QR(),E(),le(`formControl`,t.frequency),QR(),E(2),wr(`Selected: `,t.frequency.value)}}function yo(a,r){a&1&&Be$1(0,`app-search-examples`)}function vo(a,r){a&1&&Be$1(0,`app-form-examples`,48)}function ho(a,r){if(a&1){let t=yr();$(0,`div`,47)(1,`p`),Te(2,`Drag quickly to compare immediate native precision with the thumb's bounded stretch and release settling.`),q(),$(3,`label`,86),Te(4,`Volume`),q(),$(5,`input`,87),ZR(),q(),$(6,`output`),Te(7),q(),$(8,`button`,54),ye(`click`,function(){At(t);let o=L(2);return Ot(o.volume.setValue(50))}),Te(9,`Reset volume`),q(),$(10,`label`,88),Te(11,`Unavailable range`),q(),Be$1(12,`input`,89),$(13,`div`,51)(14,`button`,90),ye(`click`,function(){At(t);let o=L(2);return Ot(o.volume.setValue(20))}),Te(15,`20%`),q(),$(16,`button`,90),ye(`click`,function(){At(t);let o=L(2);return Ot(o.volume.setValue(80))}),Te(17,`80%`),q()()()}if(a&2){let t=L(2);E(5),le(`formControl`,t.volume),QR(),E(2),wr(``,t.volume.value,`%`)}}function xo(a,r){if(a&1){let t=yr();$(0,`div`,46)(1,`p`),Te(2,` Toggle repeatedly or use the programmatic action while the thumb is moving. Appearance settings control reduced motion independently of opacity. `),q(),$(3,`bx-slide-toggle`,91),ZR(),q(),$(4,`bx-slide-toggle`,75),ZR(),q(),$(5,`output`),Te(6),q(),$(7,`button`,90),ye(`click`,function(){At(t);let o=L(2);return Ot(o.enabled.setValue(!o.enabled.value))}),Te(8,`Toggle programmatically`),q()()}if(a&2){let t=L(2);E(3),le(`formControl`,t.enabled),QR(),E(),le(`formControl`,t.disabledCheck),QR(),E(2),wr(`Notifications are `,t.enabled.value?`enabled`:`disabled`,`.`)}}function fo(a,r){if(a&1&&($(0,`bx-error`,94),Te(1),q()),a&2){let t=L(3);E(),He$2(t.fieldError())}}function So(a,r){if(a&1){let t=yr();$(0,`div`,47)(1,`bx-form-field`,92)(2,`span`,77)(3,`input`,93),ye(`input`,function(o){At(t);let c=L(2);return Ot(c.updateField(o))})(`blur`,function(){At(t);let o=L(2);return Ot(o.showError.set(!0))}),q()(),ce(4,fo,2,1,`bx-error`,94),q(),$(5,`button`,79),ye(`click`,function(){At(t);let o=L(2);return Ot(o.showError.set(!0))}),Te(6,`Validate reference`),q()()}if(a&2){let t=L(2);E(3),le(`value`,t.fieldValue()),G$1(`aria-invalid`,!!t.fieldError())(`aria-describedby`,t.fieldError()?`custom-error`:null),E(),de(t.fieldError()?4:-1)}}function Co(a,r){if(a&1&&($(0,`p`),Te(1,`Keep related information together while showing one panel at a time.`),q(),$(2,`bx-input-field`,102),ZR(),q()),a&2){let t=L(3);E(2),le(`formControl`,t.tabNote),QR()}}function wo(a,r){a&1&&($(0,`p`),Te(1,`Headers support arrow keys, Home and End. Panel content is created only when selected.`),q())}function Eo(a,r){a&1&&($(0,`bx-tab`,99)(1,`p`),Te(2,`No recent project activity.`),q()())}function ko(a,r){if(a&1&&($(0,`bx-tab`,103)(1,`p`),Te(2),q()()),a&2){let t=r.$implicit;le(`label`,`Additional panel `+t)(`value`,`extra-`+t),E(2),wr(`Panel `,t,` keeps navigation reachable through the scrolling header.`)}}function To(a,r){if(a&1&&Hn$1(0,ko,3,3,`bx-tab`,103,na$1),a&2){let t=L(3);qn$1(t.extraTabs)}}function Mo(a,r){if(a&1){let t=yr();$(0,`div`,46)(1,`p`),Te(2,` Swipe to scroll on touch, or hold a tab briefly before dragging to select. Compare a short flick with a slow drag and pause before release. Enable Overflow tabs and hold near an edge to keep scrolling. Use Appearance to compare reduced motion and opaque surfaces. With Reduce transparency enabled, the active tab keeps its filled selection shape in both appearances. `),q(),$(3,`bx-tabs`,95,0),UC(`selectedValueChange`,function(o){At(t);let c=L(2);return GA(c.selectedTab,o)||(c.selectedTab=o),Ot(o)}),$(5,`bx-tab`,96),kC(6,Co,3,1,`ng-template`,97),q(),$(7,`bx-tab`,98),kC(8,wo,2,0,`ng-template`,97),q(),ce(9,Eo,3,0,`bx-tab`,99),Be$1(10,`bx-tab`,100),ce(11,To,2,0),q(),$(12,`div`,51)(13,`button`,79),ye(`click`,function(){At(t);let o=L(2);return Ot(o.tabsVariant.set(o.tabsVariant()===`segmented`?`underline`:`segmented`))}),Te(14,` Underline appearance `),q(),$(15,`button`,79),ye(`click`,function(){At(t);let o=L(2);return Ot(o.detailsDisabled.set(!o.detailsDisabled()))}),Te(16,` Disable details `),q(),$(17,`button`,79),ye(`click`,function(){At(t);let o=L(2);return Ot(o.showActivity.set(!o.showActivity()))}),Te(18,` Show activity `),q()(),$(19,`output`),Te(20),q(),$(21,`div`,51)(22,`button`,90),ye(`click`,function(){At(t);let o=oa$1(4);return Ot(o.select(`overview`))}),Te(23,`Select overview`),q(),$(24,`button`,101),ye(`click`,function(){At(t);let o=oa$1(4);return Ot(o.select(`activity`))}),Te(25,`Select activity`),q(),$(26,`button`,90),ye(`click`,function(){At(t);let o=L(2);return Ot(o.overflowTabs.set(!o.overflowTabs()))}),Te(27,` Overflow tabs `),q()()()}if(a&2){let t=L(2);E(3),le(`variant`,t.tabsVariant()),qC(`selectedValue`,t.selectedTab),E(4),le(`disabled`,t.detailsDisabled()),E(2),de(t.showActivity()?9:-1),E(),le(`disabled`,!0),E(),de(t.overflowTabs()?11:-1),E(2),G$1(`aria-pressed`,t.tabsVariant()===`underline`),E(2),G$1(`aria-pressed`,t.detailsDisabled()),E(2),G$1(`aria-pressed`,t.showActivity()),E(3),wr(`Selected: `,t.selectedTab()),E(4),le(`disabled`,!t.showActivity()),E(2),G$1(`aria-pressed`,t.overflowTabs())}}function Po(a,r){a&1&&Be$1(0,`app-menu-shortcut-examples`)}function No(a,r){a&1&&Be$1(0,`app-menu-shortcut-examples`)}function Do(a,r){a&1&&($(0,`div`,46),Be$1(1,`bx-tooltip`,104),$(2,`p`),Te(3,`Standalone tooltip content. Use the trigger directive for positioned help.`),q(),$(4,`a`,105),Te(5,`Try the tooltip trigger`),q()())}function Io(a,r){if(a&1){let t=yr();$(0,`div`,46)(1,`div`,51)(2,`button`,106),ye(`click`,function(){At(t);let o=L(2);return Ot(o.activate(`Saved`))}),Te(3,` Save project`),q(),$(4,`button`,107),ye(`click`,function(){At(t);let o=L(2);return Ot(o.activate(`Normal tap activated`))}),Te(5,` Hold for a hint`),q(),$(6,`button`,108),Be$1(7,`bx-icon`,109),q()(),$(8,`p`),Te(9,` Hover with a mouse or use keyboard focus for hints. On touch screens, Save project activates immediately, Hold for a hint supports a long press, and the information button opens help on tap. `),q()()}}function Oo(a,r){if(a&1){let t=yr();$(0,`bx-menu`)(1,`bx-menu-item`,112),ye(`action`,function(){At(t),L();let o=oa$1(2);return L(2).activate(`Project duplicated`),Ot(o.close())}),q(),$(2,`bx-menu-item`,113),ye(`action`,function(){At(t),L();let o=oa$1(2);return L(2).activate(`Project archived`),Ot(o.close())}),q(),$(3,`bx-menu-item`,114),ye(`action`,function(){At(t),L();let o=oa$1(2);return L(2).activate(`Delete requested`),Ot(o.close())}),q()()}a&2&&(E(3),le(`danger`,!0))}function Vo(a,r){if(a&1&&($(0,`div`,46)(1,`button`,110,1),Te(3,` Project actions `),Be$1(4,`bx-icon`,111),q(),kC(5,Oo,4,1,`ng-template`,null,2,Tb),$(7,`output`),Te(8),q(),$(9,`p`),Te(10,`Open, close, or reopen while the menu fades. Its contents keep their full size throughout.`),q()()),a&2){let t=oa$1(2),e=oa$1(6);E(),le(`bxDropdown`,e),E(7),wr(`Transition: `,t.state())}}function zo(a,r){if(a&1){let t=yr();$(0,`bx-menu`)(1,`bx-menu-item`,116),ye(`action`,function(){At(t);let o=L(3);return Ot(o.activate(`Selection copied`))}),q(),$(2,`bx-menu-item`,117),ye(`action`,function(){At(t);let o=L(3);return Ot(o.activate(`Selection archived`))}),q()()}}function Wo(a,r){if(a&1){let t=yr();$(0,`div`,46)(1,`div`,115),Te(2,` Right-click, touch and hold, or focus here and press Shift + F10. `),q(),$(3,`button`,79),ye(`click`,function(o){At(t);let c=L(2);return Ot(c.openContextMenu(o))}),Te(4,`Open actions`),q(),kC(5,zo,3,0,`ng-template`,null,3,Tb),$(7,`p`),Te(8,`Menu rows keep their hover and focus feedback inside the opaque panel.`),q()()}if(a&2){let t=oa$1(6);E(),le(`bxContextMenu`,t)}}function Ro(a,r){a&1&&($(0,`div`,46),Be$1(1,`bx-breadcrumbs`,118),$(2,`p`),Te(3,`This trail comes from the current route metadata. Select Components to navigate back.`),q(),$(4,`a`,119),Te(5,`Navigate to Button`),q()()),a&2&&(E(),le(`minimumBreadcrumbs`,1))}function Lo(a,r){a&1&&($(0,`div`,46)(1,`div`,120),Be$1(2,`bx-icon`,121)(3,`bx-icon`,122)(4,`bx-icon`,123)(5,`bx-icon`,124)(6,`bx-icon`,125),q(),$(7,`a`,126),Te(8,`Browse the searchable icon catalog`),q()()),a&2&&(E(2),le(`decorative`,!1))}function Ao(a,r){if(a&1){let t=yr();$(0,`bx-modal-banner`,129),ye(`close`,function(){At(t);let o=L(3);return o.bannerVisible.set(!1),Ot(o.activate(`Banner dismissed`))}),q()}a&2&&le(`header`,JA(3,Ma,QA(2,Ta)))(`showCloseButton`,!0)}function Bo(a,r){if(a&1){let t=yr();$(0,`button`,79),ye(`click`,function(){At(t);let o=L(3);return Ot(o.bannerVisible.set(!0))}),Te(1,`Restore banner`),q()}}function Fo(a,r){if(a&1){let t=yr();$(0,`div`,49),ce(1,Ao,1,5,`bx-modal-banner`,127)(2,Bo,2,0,`button`,128),$(3,`button`,52),ye(`click`,function(){At(t);let o=L(2);return Ot(o.openModal())}),Te(4,`See banner in a dialog`),q()()}if(a&2){let t=L(2);E(),de(t.bannerVisible()?1:2)}}function jo(a,r){if(a&1){let t=yr();$(0,`div`,46)(1,`div`,51)(2,`button`,56),ye(`click`,function(){At(t);let o=L(2);return Ot(o.notify(`success`))}),Te(3,`Success`),q(),$(4,`button`,130),ye(`click`,function(){At(t);let o=L(2);return Ot(o.notify(`info`))}),Te(5,`Information`),q(),$(6,`button`,57),ye(`click`,function(){At(t);let o=L(2);return Ot(o.notify(`warn`))}),Te(7,`Warning`),q(),$(8,`button`,58),ye(`click`,function(){At(t);let o=L(2);return Ot(o.notify(`danger`))}),Te(9,`Error`),q()(),$(10,`p`),Te(11,`The toast host manages the progress indicator, dismiss action, pause and cleanup.`),q(),$(12,`a`,131),Te(13,`Open the full toast configurator`),q()()}}function qo(a,r){if(a&1){let t=yr();$(0,`div`,46)(1,`div`,51)(2,`button`,56),ye(`click`,function(){At(t);let o=L(2);return Ot(o.notify(`success`))}),Te(3,`Show success`),q(),$(4,`button`,130),ye(`click`,function(){At(t);let o=L(2);return Ot(o.notify(`info`))}),Te(5,`Show information`),q(),$(6,`button`,57),ye(`click`,function(){At(t);let o=L(2);return Ot(o.notify(`warn`))}),Te(7,`Show warning`),q(),$(8,`button`,58),ye(`click`,function(){At(t);let o=L(2);return Ot(o.notify(`danger`))}),Te(9,`Show error`),q()(),$(10,`p`),Te(11,`Semantic colors remain tied to the active Blocks palette.`),q()()}}function Ho(a,r){if(a&1){let t=yr();$(0,`section`,50),Be$1(1,`bx-icon`,132),$(2,`h3`),Te(3,`A custom Blocks surface`),q(),$(4,`p`),Te(5,`Material, blur, tint, lighting and motion follow the same global configuration as the controls around it.`),q(),$(6,`bx-checkbox`,133),UC(`checkedChange`,function(o){At(t);let c=L(2);return GA(c.surfaceEmission,o)||(c.surfaceEmission=o),Ot(o)}),q(),$(7,`button`,134),ye(`click`,function(){At(t);let o=L(2);return Ot(o.activate(`Custom surface action`))}),Te(8,` Try an action `),q(),$(9,`p`),Te(10,`Hover, keyboard focus and press retain local feedback. Enable emission to add the themed light source.`),q()()}if(a&2){let t=L(2);E(6),qC(`checked`,t.surfaceEmission),E(),le(`surfaceEffects`,!1)(`bxSurfaceEmission`,t.surfaceEmission()?void 0:!1)}}function Uo(a,r){if(a&1){let t=yr();$(0,`button`,79),ye(`click`,function(){At(t);let o=L(3);return Ot(o.openModal(`left`))}),Te(1,`Open on the left`),q()}}function Go(a,r){if(a&1){let t=yr();$(0,`div`,46)(1,`div`,51)(2,`button`,52),ye(`click`,function(){At(t);let o=L(2);return Ot(o.openModal())}),Te(3),q(),ce(4,Uo,2,0,`button`,128),q(),$(5,`p`),Te(6,`Try editing, saving, pressing Escape, and dismissing through the backdrop. This is the actual service-created component.`),q(),$(7,`a`,135),Te(8,`Open the full modal configurator`),q()()}if(a&2){let t=L(2);E(3),wr(`Open `,t.entry().title.toLowerCase()),E(),de(t.entry().id===`modal-side`?4:-1)}}function Ko(a,r){if(a&1&&($(0,`div`,11),ce(1,Ia,1,0,`app-virtual-collection-examples`)(2,Oa,1,0,`app-resize-handle-examples`)(3,Va,1,0,`app-side-panel-examples`)(4,za,1,0,`app-infinite-scroll-examples`)(5,Wa,1,0,`app-essentials-examples`,21)(6,Ra,1,0,`app-essentials-examples`,22)(7,La,1,0,`app-essentials-examples`,23)(8,Aa,1,0,`app-essentials-examples`,24)(9,Ba,1,0,`app-essentials-examples`,25)(10,Fa,1,0,`app-essentials-examples`,26)(11,ja,1,0,`app-essentials-examples`,27)(12,qa,1,0,`app-essentials-examples`,28)(13,Ha,1,0,`app-essentials-examples`,29)(14,Ua,1,0,`app-page-examples`)(15,Ga,1,0,`app-essentials-examples`,30)(16,Ka,1,0,`app-essentials-examples`,31)(17,Xa,1,0,`app-essentials-examples`,32)(18,Qa,1,0,`app-tag-examples`)(19,Ya,1,0,`app-truncation-examples`)(20,Za,1,0,`app-form-examples`,33)(21,Ja,1,0,`app-form-examples`,34)(22,$a,1,0,`app-form-examples`,35)(23,eo,1,0,`app-form-examples`,36)(24,to,1,0,`app-form-examples`,37)(25,no,1,0,`app-form-examples`,38)(26,io,1,0,`app-form-examples`,39)(27,ao,1,0,`app-form-examples`,40)(28,oo,1,0,`app-form-examples`,41)(29,ro,1,0,`app-form-examples`,42)(30,lo,1,0,`app-form-examples`,43)(31,so,1,0,`app-form-examples`,44)(32,co,1,0,`app-form-examples`,45)(33,po,26,3,`div`,46)(34,mo,17,7,`div`,46)(35,uo,9,10,`div`,46)(36,go,8,5,`div`,47)(37,bo,6,11,`div`,47)(38,_o,10,4,`fieldset`,46)(39,yo,1,0,`app-search-examples`)(40,vo,1,0,`app-form-examples`,48)(41,ho,18,2,`div`,47)(42,xo,9,3,`div`,46)(43,So,7,4,`div`,47)(44,Mo,28,12,`div`,46)(45,Po,1,0,`app-menu-shortcut-examples`)(46,No,1,0,`app-menu-shortcut-examples`)(47,Do,6,0,`div`,46)(48,Io,10,0,`div`,46)(49,Vo,11,2,`div`,46)(50,Wo,9,1,`div`,46)(51,Ro,6,1,`div`,46)(52,Lo,9,1,`div`,46)(53,Fo,5,1,`div`,49)(54,jo,14,0,`div`,46)(55,qo,12,0,`div`,46)(56,Ho,11,3,`section`,50)(57,Go,9,2,`div`,46),q()),a&2){let t,e=L();E(),de((t=e.entry().id)===`virtual-collection`?1:t===`resize-handle`?2:t===`side-panel`?3:t===`infinite-scroll`?4:t===`divider`?5:t===`popover`?6:t===`skeleton`?7:t===`autocomplete`?8:t===`chip`?9:t===`accordion`?10:t===`collapsible`?11:t===`alert`?12:t===`card`?13:t===`page-container`?14:t===`container`?15:t===`stack`?16:t===`grid`?17:t===`tag`?18:t===`truncate`?19:t===`signal-forms`?20:t===`radio-group`?21:t===`multi-select`?22:t===`load-more`?23:t===`loading-spinner`?24:t===`loading-indicator`?25:t===`progress-bar`?26:t===`button-loading`?27:t===`range-slider`?28:t===`hint`?29:t===`prefix`?30:t===`suffix`?31:t===`native-control`?32:t===`button`?33:t===`checkbox-indicator`?34:t===`checkbox`?35:t===`form-field`?36:t===`input-field`?37:t===`radio`?38:t===`search-input`?39:t===`select`?40:t===`slider`?41:t===`slide-toggle`?42:t===`error`?43:t===`tabs`?44:t===`menu`?45:t===`menu-item`?46:t===`tooltip`?47:t===`tooltip-directive`?48:t===`dropdown`?49:t===`context-menu`?50:t===`breadcrumbs`?51:t===`icon`?52:t===`modal-banner`?53:t===`toast-core`?54:t===`simple-toast`?55:t===`surface`?56:57)}}var ai=class a{activatedRoute=p(Kr);modalService=p(Ne);toastrService=p(Be);routeData=NY(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});contextMenu=mn(rm);entry=v(()=>e.find(r=>r.id===this.routeData().componentId)??e[0]);count=C(0);status=C(`Ready to try.`);fieldValue=C(``);showError=C(!1);surfaceEmission=C(!1);fieldError=v(()=>this.showError()&&this.fieldValue().trim().length<3?`Enter at least three characters.`:void 0);name=new ND(`Blocks workspace`,{nonNullable:!0,validators:Oa$1.required});email=new ND(``,{nonNullable:!0,validators:Oa$1.email});volume=new ND(50,{nonNullable:!0});quantity=new ND(3,{nonNullable:!0});checked=new ND(!0,{nonNullable:!0});secondChecked=new ND(!1,{nonNullable:!0});disabledCheck=new ND({value:!1,disabled:!0},{nonNullable:!0});frequency=new ND(`weekly`,{nonNullable:!0});destination=new ND(`skopje`,{nonNullable:!0});enabled=new ND(!0,{nonNullable:!0});bannerVisible=C(!0);selectedTab=C(`overview`);tabsVariant=C(`segmented`);detailsDisabled=C(!1);showActivity=C(!0);overflowTabs=C(!1);extraTabs=[1,2,3,4,5,6,7,8];tabNote=new ND(``,{nonNullable:!0});options=[{label:`Skopje`,value:`skopje`},{label:`Ohrid`,value:`ohrid`},{label:`Bitola`,value:`bitola`},{label:`Unavailable destination`,value:`unavailable`,disabled:!0}];activate(r){this.count.update(t=>t+1),this.status.set(`${r} \xB7 action ${this.count()}`)}updateField(r){this.fieldValue.set(r.target.value)}openContextMenu(r){r.preventDefault();let t=r.currentTarget.getBoundingClientRect();this.contextMenu()?.open(new MouseEvent(`contextmenu`,{clientX:t.left+16,clientY:t.bottom+4}))}openModal(r){let t=r??(this.entry().id===`modal-side`?`right`:this.entry().id===`modal-bottom-sheet`?`bottom-sheet`:`center`);this.modalService.open(et,{data:{title:this.entry().title,description:`Edit the project name. The header, content, footer, backdrop and close behavior use the existing Blocks modal composition.`},header:{text:this.entry().title},style:{layout:t,hasBackdrop:!0,animate:!0,showCloseButton:!0}}).afterClosed().subscribe(o=>this.status.set(o.state===`confirm`?`Saved: ${o.data}`:`Dialog dismissed.`))}notify(r){let t={title:r===`success`?`Settings saved`:r===`warn`?`Review needed`:r===`danger`?`Action failed`:`Workspace update`,message:`This notification follows the application theme and appearance settings.`,durationInMs:4500};switch(r){case`success`:this.toastrService.queueSuccess(t);break;case`info`:this.toastrService.queueInfo(t);break;case`warn`:this.toastrService.queueWarning(t);break;case`danger`:this.toastrService.queueDanger(t)}this.status.set(`${r} notification queued.`)}static ɵfac=function(t){return new(t||a)};static ɵcmp=H({type:a,selectors:[[`app-component-demo`]],viewQuery:function(t,e){t&1&&Nn(e.contextMenu,rm,5),t&2&&It()},decls:28,vars:7,consts:[[`pilotTabs`,``],[`dropdown`,`bxDropdown`],[`dropdownActions`,``],[`contextActions`,``],[3,`pageDescription`],[1,`component-meta`],[`routerLink`,`/appearance`],[`aria-labelledby`,`preview-heading`,1,`demo-section`],[1,`section-heading`],[`id`,`preview-heading`],[1,`demo-stage`],[`bxSurface`,``,1,`demo-stage`],[`role`,`status`,`aria-live`,`polite`,1,`action-status`],[`aria-labelledby`,`usage-heading`,1,`usage-section`],[`id`,`usage-heading`],[`tabindex`,`0`,`aria-label`,`TypeScript import example`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`tabindex`,`0`,`aria-label`,`HTML usage example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`aria-label`,`Component documentation`,1,`documentation-section`],[3,`path`],[`example`,`divider`],[`example`,`popover`],[`example`,`skeleton`],[`example`,`autocomplete`],[`example`,`chip`],[`example`,`accordion`],[`example`,`collapsible`],[`example`,`alert`],[`example`,`card`],[`example`,`container`],[`example`,`stack`],[`example`,`grid`],[`example`,`signal-forms`],[`example`,`radio-group`],[`example`,`multi-select`],[`example`,`load-more`],[`example`,`loading-spinner`],[`example`,`loading-indicator`],[`example`,`progress-bar`],[`example`,`button-loading`],[`example`,`range-slider`],[`example`,`hint`],[`example`,`prefix`],[`example`,`suffix`],[`example`,`native-control`],[1,`demo-stack`],[1,`demo-stack`,`control-width`],[`example`,`select`],[1,`demo-stack`,`banner-preview`],[`bxSurface`,``,1,`custom-surface`],[1,`demo-row`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`accent`,3,`click`],[`type`,`button`,`bx-button`,``,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`disabled`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`fab`,`aria-label`,`Add item`,3,`click`],[`name`,`plus`],[`type`,`button`,`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Close example`,3,`click`],[`name`,`x`,`size`,`20`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`outlined`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`surfaceEffects`],[`label`,`Checked state`,3,`formControl`],[`label`,`Partial state`,3,`formControl`],[3,`checked`,`indeterminate`],[3,`checked`],[3,`indeterminate`],[`label`,`Receive product updates`,3,`formControl`],[`label`,`Include preview features`,3,`formControl`],[`label`,`Partial selection`,3,`indeterminate`],[`label`,`Without emission`,3,`checked`,`emissive`],[`label`,`Read-only selection`,3,`checked`,`readOnly`],[`label`,`Unavailable setting`,3,`formControl`],[`label`,`Project name`,`forId`,`field-preview`,3,`required`,`error`],[`bxSurface`,``,1,`native-control-surface`],[`id`,`field-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`label`,`Project name`,3,`errorMessages`,`formControl`],[`label`,`Email address`,`type`,`email`,3,`errorMessages`,`formControl`],[`label`,`Team members`,`type`,`number`,3,`min`,`max`,`formControl`],[`label`,`Daily summary`,`name`,`frequency-demo`,`value`,`daily`,3,`formControl`],[`label`,`Weekly summary`,`name`,`frequency-demo`,`value`,`weekly`,3,`formControl`],[`label`,`Only important updates`,`name`,`frequency-demo`,`value`,`important`,3,`formControl`],[`for`,`volume-demo`],[`bxSlider`,``,`id`,`volume-demo`,`type`,`range`,`min`,`0`,`max`,`100`,3,`formControl`],[`for`,`disabled-volume`],[`bxSlider`,``,`id`,`disabled-volume`,`type`,`range`,`value`,`30`,`disabled`,``],[`bx-button`,``,`type`,`button`,3,`click`],[`label`,`Enable notifications`,`hint`,`Receive updates for important activity.`,3,`formControl`],[`label`,`Reference`,`forId`,`error-preview`],[`id`,`error-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`id`,`custom-error`],[`ariaLabel`,`Project information`,3,`selectedValueChange`,`variant`,`selectedValue`],[`label`,`Overview`,`value`,`overview`,`icon`,`book-open`],[`bxTabContent`,``],[`label`,`Details`,`value`,`details`,`color`,`accent`,`icon`,`badge-check`,`endIcon`,`chevron-right`,3,`disabled`],[`label`,`Recent project activity`,`value`,`activity`,`color`,`info`,`textColor`,`text-warn`,`highlightColor`,`text-warn`,`contentColor`,`text-info`,`icon`,`activity`],[`label`,`Unavailable`,`value`,`unavailable`,3,`disabled`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[`label`,`Project note`,3,`formControl`],[3,`label`,`value`],[`text`,`Your changes are saved automatically.`],[`routerLink`,`/components/tooltip-directive`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`Saves the current project`,`placement`,`top`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`An optional hint revealed by touching and holding`,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`tooltip-hold-target`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`icon`,`aria-label`,`More information`,`bxTooltip`,`Appearance settings apply to all components`,`bxTooltipTouch`,`tap`,`placement`,`bottom`],[`name`,`info`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`bxTransition`,`fade`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[`tabindex`,`0`,1,`context-target`,3,`bxContextMenu`],[`label`,`Copy selection`,`icon`,`copy`,3,`action`],[`label`,`Archive selection`,`icon`,`archive`,3,`action`],[3,`minimumBreadcrumbs`],[`routerLink`,`/components/button`],[1,`demo-row`,`icon-row`],[`name`,`sparkles`,`size`,`32`,`color`,`text-accent`,`ariaLabel`,`Highlights`,3,`decorative`],[`name`,`check-circle`,`size`,`32`,`color`,`text-success`],[`name`,`info`,`size`,`32`,`color`,`text-info`,`bgColor`,`auto`],[`name`,`triangle-alert`,`size`,`32`,`color`,`text-warn`],[`name`,`heart`,`size`,`40`,`color`,`text-danger`],[`routerLink`,`/icon-catalog`],[3,`header`,`showCloseButton`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`],[3,`close`,`header`,`showCloseButton`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`routerLink`,`/toastr`],[`name`,`layers`,`size`,`28`],[`label`,`Emit interaction light`,3,`checkedChange`,`checked`],[`type`,`button`,`bx-button`,``,`bxSurface`,``,`variant`,`tonal`,3,`click`,`surfaceEffects`,`bxSurfaceEmission`],[`routerLink`,`/modal`]],template:function(t,e){t&1&&($(0,`bx-page-container`)(1,`bx-page-header`,4)(2,`div`,5)(3,`code`),Te(4),q(),$(5,`a`,6),Te(6,`Configure appearance globally`),q()()(),$(7,`section`,7)(8,`div`,8)(9,`h2`,9),Te(10,`Interactive example`),q(),$(11,`span`),Te(12,`Uses your active palette`),q()(),ce(13,Pa,2,0,`div`,10)(14,Na,2,0,`div`,10)(15,Da,2,0,`div`,10)(16,Ko,58,1,`div`,11),$(17,`p`,12),Te(18),q()(),$(19,`section`,13)(20,`h2`,14),Te(21,`Quick usage`),q(),$(22,`pre`,15),Be$1(23,`code`,16),q(),$(24,`pre`,17),Be$1(25,`code`,18),q()(),$(26,`section`,19),Be$1(27,`app-readme`,20),q()()),t&2&&(E(),le(`pageDescription`,e.entry().description),E(3),He$2(e.entry().selector),E(9),de(e.entry().id===`side-nav`?13:e.entry().id===`top-nav`?14:e.entry().id===`stepper`?15:16),E(5),He$2(e.status()),E(5),le(`highlight`,`import { `+e.entry().symbol+` } from '`+e.entry().package+`';`),E(2),le(`highlight`,e.entry().example),E(2),le(`path`,e.entry().readme))},dependencies:[He,Qe,Ue,$e,bt,IM,za$1,ht,$p,X,Ge,je,qe,Ze,Ye,Xe,Je,xe,mne,pD,yF,cne,kF,Z$1,Ti$1,je$1,ne,nr,tr,Qn$1,ar,V,cM,lM,nm,gM,rm,Ba$1,hM,Qc,Zc,Ut,hn,Ft,G,S],styles:[`
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
}`]})};export{ai as ComponentDemo};