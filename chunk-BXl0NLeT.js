import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{An as _,At as Q,Ci as zr,Cn as Yu,E as Ex,En as Za,Er as kx,Ft as Qm,G as If,It as Qn$1,J as Jn$1,Jn as et,K as Je,Kt as Sf,Lr as ne$1,Lt as RA,Mn as _t,Mr as me,O as Fe,On as Zl,Or as le$1,P as Gr,Pr as nD,R as Hd,Si as zl,Tt as Ox,Ut as S_,Vt as Rx,W as I9,Wr as pe,Xt as Te$1,Yn as f,Zn as fe,Zt as Tf,_n as XE,_r as je,_t as Nk,a as A9,ar as gS,b as Dx,br as jx,ci as w,ct as Lv,dn as Wl,dr as hn$1,dt as M9,en as U_,et as Kl,ft as Me$1,gi as ye,gn as X$1,gt as NP,hn as Wu,ht as N9,i as $u,in as Ut,it as LP,j as Ga,jt as Q6,k as Fk,kt as Pv,li as wn$1,ln as W,lt as Lx,mt as N,n as $e,ni as tt,nn as Uk,oi as us,ot as Lk,p as Br,pn as Wn$1,qn as er,qr as q0,qt as Sr,ri as ue,rn as Us,rr as g,s as AP,t as $_,tt as Km,ui as wr,ut as M,vi as z0,vn as Xa,vr as jr,w as Ef,xn as Ya,xr as k9,xt as OP,yi as z_,yt as Nx,zr as of}from"./chunk-CjnVhMKk.js";import{A as X$2,C as dr,D as ut,E as qa,O as za,S as We,T as ki$1,_ as Ka,a as Ue,b as Ua,c as en$1,d as $a,f as Ba,g as Ha,h as Ga$1,i as Qe,k as e,l as rn$1,m as Fa,n as J,o as Ye,p as De,r as Ke,s as Ze,u as tn$1,v as Qn$2,w as ja,x as Va,y as Ti$1}from"./main-AGZXJPY2.js";import{n as q}from"./chunk-B7WWQ6j7.js";import{a as nn$1,i as fe$1,o as tn$2,r as en$2,t as V}from"./chunk-DG_CWj8H.js";import{n as ft}from"./chunk-DcGu1Xtw.js";var Qt=[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Success`,value:`success`},{label:`Danger`,value:`danger`},{label:`Info`,value:`info`},{label:`Warning`,value:`warn`},{label:`Neutral`,value:`neutral`}];var Jt=[{label:`Tonal`,value:`tonal`},{label:`Filled`,value:`filled`},{label:`Outlined`,value:`outlined`}];var Yt={en:{tagLabel:`Skopje`,tagTooltip:`A translated location tag`,loadMore:`Load more locations`,loading:`Loading locations`,retry:`Retry request`,searchLabel:`Find a component`,searchPlaceholder:`Try menu`,searchLoading:`Searching components`,searchClear:`Clear search`,searchEmpty:`No components match your search.`,searchError:`The search request failed. Retry to search again.`,project:`Project name`,clearSelection:`Clear selection`,clearSelectionTooltip:`Remove the current selection`,selectAll:`Select all locations`,allLocations:`All locations`,allLocationsTooltip:`All {total} selectable locations`,locationsSelected:`{count} locations selected`},mk:{tagLabel:`Скопје`,tagTooltip:`Преведена ознака за локација`,loadMore:`Вчитај повеќе локации`,loading:`Се вчитуваат локации`,retry:`Обиди се повторно`,searchLabel:`Најди компонента`,searchPlaceholder:`Пробај menu`,searchLoading:`Се пребаруваат компоненти`,searchClear:`Исчисти пребарување`,searchEmpty:`Нема компоненти за ова пребарување.`,searchError:`Пребарувањето не успеа. Обиди се повторно.`,project:`Име на проект`,clearSelection:`Исчисти избор`,clearSelectionTooltip:`Отстрани го тековниот избор`,selectAll:`Избери ги сите локации`,allLocations:`Сите локации`,allLocationsTooltip:`Сите {total} локации достапни за избор`,locationsSelected:`{count} избрани локации`}};var O=class o{language=_(`en`);version=_(0);translate(r,e){let i=Yt[this.language()]?.[r]??r;for(let[t,s]of Object.entries(e??{}))i=i.replaceAll(`{${t}}`,String(s));return i}toggle(){this.language.update(r=>r===`en`?`mk`:`en`),this.version.update(r=>r+1)}static ɵfac=function(e){return new(e||o)};static ɵprov=N({token:o,factory:o.ɵfac})};var Kt=`<span bxTruncate #overflow="bxTruncate"
    [bxTooltip]="label() | bxTruncatedText: overflow.truncated()"
    [attr.tabindex]="overflow.truncated() ? 0 : null"
    bxTooltipTouch="longpress">{{ label() }}</span>`;var Zt=`<bx-tag [text]="label()" [tooltipOnTruncate]="false" tooltip="My application tooltip" />
<bx-input-field [label]="label()" [tooltipOnTruncate]="false" />
<bx-select label="Location" [options]="options()" [tooltipOnTruncate]="false" />`;var $t=`import { TruncateDirective, TruncatedTextPipe, TooltipDirective, truncatedText } from '@filip.mazev/blocks/primitives';

// Read the exported directive's truncated() and text() signals in your own logic.
const tooltip = truncatedText(label(), overflow.truncated(), automaticTooltips());

// Application-wide form default; individual controls can override it.
formSettings.update({ tooltipOnTruncate: false });`;var mn=()=>[0];var te=class o{text=_(`A long location name that can be truncated`);width=_(14);enabled=_(!0);largeText=_(!1);automaticTooltips=_(!0);customTooltip=_(!1);menuActions=_(0);label=w(()=>String(this.text()??``));options=w(()=>[{label:this.label(),value:0}]);pipeExample=Kt;customExample=Zt;logicExample=$t;previewWidth=w(()=>{let r=Number(this.width());return Number.isFinite(r)?Math.max(4,Math.min(64,r)):14});static ɵfac=function(e){return new(e||o)};static ɵcmp=le$1({type:o,selectors:[[`app-truncation-examples`]],decls:96,vars:55,consts:[[`overflow`,`bxTruncate`],[`aria-label`,`Conditional truncation tooltips`,1,`truncation-demo`],[1,`truncation-controls`],[`label`,`Text`,`subscriptSizing`,`dynamic`,3,`valueChange`,`value`],[`label`,`Available width (rem)`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`max`,`value`],[`role`,`group`,`aria-label`,`Preview options`,1,`truncation-switches`],[`label`,`Enable text truncation`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Larger text preview`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Automatic tooltips`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Custom tooltip`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[1,`component-examples`],[1,`preview-card`,`text-preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Text preview`,1,`preview-stage`],[1,`text-example`,`example-width`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,3,`bxTruncate`,`bxTooltip`],[1,`preview-caption`],[1,`preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Tag preview`,1,`preview-stage`],[1,`example-width`],[`leadingIcon`,`map-pin`,3,`text`,`tooltipOnTruncate`,`tooltip`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Input field preview`,1,`preview-stage`],[`placeholder`,`Editable value`,`subscriptSizing`,`dynamic`,3,`label`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Search value preview`,1,`preview-stage`],[`ariaLabel`,`Search value`,`subscriptSizing`,`dynamic`,3,`search`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Select preview`,1,`preview-stage`],[`subscriptSizing`,`dynamic`,3,`label`,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Multiselect preview`,1,`preview-stage`],[`label`,`Selected tag`,`selectionDisplay`,`tags`,`subscriptSizing`,`dynamic`,3,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Menu item preview`,1,`preview-stage`],[3,`action`,`label`,`wrapLabel`,`tooltipOnTruncate`],[3,`textContent`]],template:function(e,i){if(e&1){let t=us();W(0,`section`,1)(1,`h3`),je(2,`Shared truncation, optional tooltips`),X$1(),W(3,`p`)(4,`code`),je(5,`TruncateDirective`),X$1(),je(6,` owns ellipsis and rendered measurement. The pure `),W(7,`code`),je(8,`bxTruncatedText`),X$1(),je(9,` pipe selects text for a conditional tooltip. Use the exported directive signals or `),W(10,`code`),je(11,`truncatedText()`),X$1(),je(12,` helper in your own logic.`),X$1(),W(13,`div`,2)(14,`bx-input-field`,3),z_(`valueChange`,function(w){return Br(t),Nk(i.text,w)||(i.text=w),jr(w)}),X$1(),W(15,`bx-input-field`,4),z_(`valueChange`,function(w){return Br(t),Nk(i.width,w)||(i.width=w),jr(w)}),X$1()(),W(16,`div`,5)(17,`bx-checkbox`,6),z_(`checkedChange`,function(w){return Br(t),Nk(i.enabled,w)||(i.enabled=w),jr(w)}),X$1(),W(18,`bx-checkbox`,7),z_(`checkedChange`,function(w){return Br(t),Nk(i.largeText,w)||(i.largeText=w),jr(w)}),X$1(),W(19,`bx-checkbox`,8),z_(`checkedChange`,function(w){return Br(t),Nk(i.automaticTooltips,w)||(i.automaticTooltips=w),jr(w)}),X$1(),W(20,`bx-checkbox`,9),z_(`checkedChange`,function(w){return Br(t),Nk(i.customTooltip,w)||(i.customTooltip=w),jr(w)}),X$1()(),W(21,`div`,10)(22,`section`,11)(23,`h4`),je(24,`Text preview`),X$1(),W(25,`div`,12)(26,`div`,13)(27,`span`,14,0),Za(29,`bxTruncatedText`),je(30),X$1()()(),W(31,`output`,15),je(32),X$1()(),W(33,`section`,16)(34,`h4`),je(35,`Tag`),X$1(),W(36,`div`,17)(37,`div`,18),Fe(38,`bx-tag`,19),X$1()(),W(39,`p`,15),je(40,`Clipped labels use an automatic or application-owned tooltip.`),X$1()(),W(41,`section`,16)(42,`h4`),je(43,`Input field`),X$1(),W(44,`div`,20)(45,`div`,18),Fe(46,`bx-input-field`,21),X$1()(),W(47,`p`,15),je(48,`The floating label shares the truncation measurement.`),X$1()(),W(49,`section`,16)(50,`h4`),je(51,`Search value`),X$1(),W(52,`div`,22)(53,`div`,18)(54,`bx-search-input`,23),Me$1(`search`,function(w){return i.text.set(w)}),X$1()()(),W(55,`p`,15),je(56,`Editing the search updates the shared example text.`),X$1()(),W(57,`section`,16)(58,`h4`),je(59,`Select`),X$1(),W(60,`div`,24)(61,`div`,18),Fe(62,`bx-select`,25),X$1()(),W(63,`p`,15),je(64,`Selected values and captions share the same available width.`),X$1()(),W(65,`section`,16)(66,`h4`),je(67,`Multiselect`),X$1(),W(68,`div`,26)(69,`div`,18),Fe(70,`bx-multi-select`,27),X$1()(),W(71,`p`,15),je(72,`The selected tag follows the owning control's tooltip setting.`),X$1()(),W(73,`section`,16)(74,`h4`),je(75,`Menu item`),X$1(),W(76,`div`,28)(77,`div`,18)(78,`bx-menu`)(79,`bx-menu-item`,29),Me$1(`action`,function(){return i.menuActions.set(i.menuActions()+1)}),X$1()()()(),W(80,`output`,15),je(81),X$1()()(),W(82,`p`),je(83,`Change the text or width to switch between clipped and fitting labels. Turn automatic tooltips off to retain ellipsis and measurement for custom feedback. Hover, keyboard focus, and touch-and-hold use the existing tooltip mechanism. Explicit tag descriptions still take precedence. Custom tooltip applies to the text and tag examples. Preview panels keep their size; long wrapped content scrolls inside them. Example widths are capped by the available space in each card.`),X$1(),W(84,`h3`),je(85,`Short conditional tooltip`),X$1(),W(86,`pre`),Fe(87,`code`,30),X$1(),W(88,`h3`),je(89,`Disable automatic tooltips`),X$1(),W(90,`pre`),Fe(91,`code`,30),X$1(),W(92,`h3`),je(93,`Use the public API in your application`),X$1(),W(94,`pre`),Fe(95,`code`,30),X$1()()}if(e&2){let t=Ya(28);M(14),$_(`value`,i.text),M(),fe(`min`,4)(`max`,64),$_(`value`,i.width),M(2),$_(`checked`,i.enabled),M(),$_(`checked`,i.largeText),M(),$_(`checked`,i.automaticTooltips),M(),$_(`checked`,i.customTooltip),M(6),et(`inline-size`,i.previewWidth(),`rem`),ne$1(`large-text`,i.largeText()),M(),fe(`bxTruncate`,i.enabled())(`bxTooltip`,i.customTooltip()?`My application tooltip`:Xa(29,50,i.label(),t.truncated(),i.automaticTooltips())),ye(`tabindex`,i.customTooltip()||i.automaticTooltips()&&t.truncated()?0:null),M(3),tt(i.label()),M(2),wr(`Text `,t.truncated()?`is truncated`:`fits without truncation`,`.`),M(5),et(`inline-size`,i.previewWidth(),`rem`),M(),fe(`text`,i.label())(`tooltipOnTruncate`,i.automaticTooltips())(`tooltip`,i.customTooltip()?`My application tooltip`:void 0),M(7),et(`inline-size`,i.previewWidth(),`rem`),M(),fe(`label`,i.label())(`tooltipOnTruncate`,i.automaticTooltips()),M(7),et(`inline-size`,i.previewWidth(),`rem`),M(),fe(`value`,i.label())(`tooltipOnTruncate`,i.automaticTooltips()),M(7),et(`inline-size`,i.previewWidth(),`rem`),M(),fe(`label`,i.label())(`options`,i.options())(`value`,0)(`tooltipOnTruncate`,i.automaticTooltips()),M(7),et(`inline-size`,i.previewWidth(),`rem`),M(),fe(`options`,i.options())(`value`,Lk(54,mn))(`tooltipOnTruncate`,i.automaticTooltips()),M(7),et(`inline-size`,i.previewWidth(),`rem`),M(2),fe(`label`,i.label())(`wrapLabel`,!i.enabled())(`tooltipOnTruncate`,i.automaticTooltips()),M(2),wr(`Menu activations: `,i.menuActions()),M(6),fe(`textContent`,i.pipeExample),M(4),fe(`textContent`,i.customExample),M(4),fe(`textContent`,i.logicExample)}},dependencies:[Qn$2,Ti$1,en$1,jx,ki$1,Dx,Ex,Lx,Qn$1,Jn$1,Us],styles:[`
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
}
pre[_ngcontent-%COMP%] {
  box-sizing: border-box;
  inline-size: 100%;
  max-inline-size: 100%;
  margin: 0;
  padding: 0.75rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.25rem;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font-size: 0.75rem;
}`]})};var pn=()=>({key:`tagTooltip`});var un=()=>({key:`tagLabel`});var Se=class o{translations=f(O);label=_(`Skopje`);text=w(()=>String(this.label()??``));color=_(`accent`);variant=_(`tonal`);disabled=_(!1);leadingIcon=_(!0);trailingIcon=_(!0);leadingCount=_(!1);trailingCount=_(!0);leftNumber=_(3);rightNumber=_(12);colors=Qt;variants=Jt;static ɵfac=function(e){return new(e||o)};static ɵcmp=le$1({type:o,selectors:[[`app-tag-examples`]],features:[Ut([O,{provide:$e,useExisting:O}])],decls:24,vars:30,consts:[[1,`tag-demo`],[`aria-label`,`Tag previews`,1,`tag-previews`],[3,`text`,`color`,`variant`,`disabled`,`leadingIcon`,`trailingIcon`,`leadingNumber`,`trailingNumber`,`locale`,`tooltip`],[`color`,`info`,`variant`,`filled`,`ariaLabel`,`42 locations`,`tooltip`,`Number-only tag`,3,`leadingNumber`],[`leadingIcon`,`map-pin`,`color`,`success`,3,`text`],[`text`,`Unavailable`,`color`,`neutral`,3,`disabled`],[`text`,`Skopje`],[`text`,`+2`,`tooltip`,`Ohrid, Bitola`],[1,`tag-controls`],[`label`,`Tag text`,3,`valueChange`,`value`],[`label`,`Color`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Appearance`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Leading number`,`type`,`number`,3,`valueChange`,`value`],[`label`,`Trailing number`,`type`,`number`,3,`valueChange`,`value`],[`label`,`Leading icon`,3,`checkedChange`,`checked`],[`label`,`Trailing icon`,3,`checkedChange`,`checked`],[`label`,`Leading number`,3,`checkedChange`,`checked`],[`label`,`Trailing number`,3,`checkedChange`,`checked`],[`label`,`Disabled appearance`,3,`checkedChange`,`checked`],[`bx-button`,``,`type`,`button`,3,`click`]],template:function(e,i){e&1&&(W(0,`div`,0)(1,`div`,1),Fe(2,`bx-tag`,2)(3,`bx-tag`,3)(4,`bx-tag`,4)(5,`bx-tag`,5)(6,`bx-tag`,6)(7,`bx-tag`,7),X$1(),W(8,`div`,8)(9,`bx-input-field`,9),z_(`valueChange`,function(s){return Nk(i.label,s)||(i.label=s),s}),X$1(),W(10,`bx-select`,10),z_(`valueChange`,function(s){return Nk(i.color,s)||(i.color=s),s}),X$1(),W(11,`bx-select`,11),z_(`valueChange`,function(s){return Nk(i.variant,s)||(i.variant=s),s}),X$1(),W(12,`bx-input-field`,12),z_(`valueChange`,function(s){return Nk(i.leftNumber,s)||(i.leftNumber=s),s}),X$1(),W(13,`bx-input-field`,13),z_(`valueChange`,function(s){return Nk(i.rightNumber,s)||(i.rightNumber=s),s}),X$1(),W(14,`bx-checkbox`,14),z_(`checkedChange`,function(s){return Nk(i.leadingIcon,s)||(i.leadingIcon=s),s}),X$1(),W(15,`bx-checkbox`,15),z_(`checkedChange`,function(s){return Nk(i.trailingIcon,s)||(i.trailingIcon=s),s}),X$1(),W(16,`bx-checkbox`,16),z_(`checkedChange`,function(s){return Nk(i.leadingCount,s)||(i.leadingCount=s),s}),X$1(),W(17,`bx-checkbox`,17),z_(`checkedChange`,function(s){return Nk(i.trailingCount,s)||(i.trailingCount=s),s}),X$1(),W(18,`bx-checkbox`,18),z_(`checkedChange`,function(s){return Nk(i.disabled,s)||(i.disabled=s),s}),X$1()(),W(19,`button`,19),Me$1(`click`,function(){return i.translations.toggle()}),je(20),X$1(),W(21,`p`),je(22,`Hover or keyboard-focus a tooltip tag. In a select trigger, the parent control exposes the complete selection while overflow tags show the remaining names on hover.`),X$1(),Fe(23,`app-truncation-examples`),X$1()),e&2&&(M(2),fe(`text`,i.text())(`color`,i.color()??`accent`)(`variant`,i.variant()??`tonal`)(`disabled`,i.disabled())(`leadingIcon`,i.leadingIcon()?`map-pin`:void 0)(`trailingIcon`,i.trailingIcon()?`chevron-right`:void 0)(`leadingNumber`,i.leadingCount()?i.leftNumber():null)(`trailingNumber`,i.trailingCount()?i.rightNumber():null)(`locale`,i.translations.language())(`tooltip`,Lk(28,pn)),M(),fe(`leadingNumber`,42),M(),fe(`text`,Lk(29,un)),M(),fe(`disabled`,!0),M(4),$_(`value`,i.label),M(),fe(`clearable`,!1)(`options`,i.colors),$_(`value`,i.color),M(),fe(`clearable`,!1)(`options`,i.variants),$_(`value`,i.variant),M(),$_(`value`,i.leftNumber),M(),$_(`value`,i.rightNumber),M(),$_(`checked`,i.leadingIcon),M(),$_(`checked`,i.trailingIcon),M(),$_(`checked`,i.leadingCount),M(),$_(`checked`,i.trailingCount),M(),$_(`checked`,i.disabled),M(2),wr(`Language: `,i.translations.language()))},dependencies:[Lx,If,Qn$2,Ti$1,ki$1,te],styles:[`
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
@media (max-width: 640px) {
  .tag-controls[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
}`]})};var Le={project:``,email:``,password:``,confirmation:``,teamSize:null,destination:``,categories:[],plan:``,terms:!1,notifications:!1,note:``,budget:50};var Te=[{label:`Skopje`,value:`skopje`,group:`North Macedonia`},{label:`Ohrid`,value:`ohrid`,group:`North Macedonia`},{label:`Bitola`,value:`bitola`,group:`North Macedonia`},{label:`London`,value:`london`,group:`Europe`},{label:`Paris`,value:`paris`,group:`Europe`},{label:`Berlin`,value:`berlin`,group:`Europe`},{label:`Amsterdam`,value:`amsterdam`,group:`Europe`},{label:`Vienna`,value:`vienna`,group:`Europe`,disabled:!0},{label:`Prague`,value:`prague`,group:`Europe`},{label:`Barcelona`,value:`barcelona`,group:`Europe`},{label:`Copenhagen`,value:`copenhagen`,group:`Europe`},{label:`Stockholm`,value:`stockholm`,group:`Europe`},{label:`Lisbon`,value:`lisbon`,group:`Europe`},{label:`Rome`,value:`rome`,group:`Europe`},{label:`Athens`,value:`athens`,group:`Europe`},{label:`New York`,value:`new-york`,group:`Americas`},{label:`San Francisco`,value:`san-francisco`,group:`Americas`},{label:`Toronto`,value:`toronto`,group:`Americas`},{label:`Vancouver`,value:`vancouver`,group:`Americas`},{label:`Buenos Aires`,value:`buenos-aires`,group:`Americas`},{label:`Tokyo`,value:`tokyo`,group:`Asia`},{label:`Singapore`,value:`singapore`,group:`Asia`},{label:`Seoul`,value:`seoul`,group:`Asia`},{label:`Sydney`,value:`sydney`,group:`Oceania`}];var en={minLength:({params:o})=>`Use at least ${o.minLength} characters for the project name.`};var tn=[{label:`1 location`,value:1},{label:`3 locations`,value:3},{label:`12 locations`,value:12},{label:`All 24 locations`,value:24}];var nn=[{label:`Remote total`,value:`total`},{label:`Custom text`,value:`custom`},{label:`Loaded selections`,value:`loaded`},{label:`Disabled`,value:`disabled`}];function X(o,r){return new Promise((e,i)=>{let t=()=>{clearTimeout(s),i(new DOMException(`Request cancelled`,`AbortError`))},s=setTimeout(()=>{r?.removeEventListener(`abort`,t),e()},o);r?.aborted?t():r?.addEventListener(`abort`,t,{once:!0})})}var ne=class o{async options(r,e,i,t,s){if(await X(800,s),t)throw new Error(`The mock request failed. Retry to load this page.`);let ce=Te.filter(se=>String(se.label).toLocaleLowerCase().includes(r.toLocaleLowerCase())),ze=ce.slice(e,e+i);return{items:ze,hasMore:e+ze.length<ce.length,total:ce.length,selectableTotal:ce.filter(se=>!se.disabled&&!se.groupDisabled).length}}async available(r,e){return await X(650,e),![`blocks`,`taken`,`admin`].includes(r.trim().toLocaleLowerCase())}async save(r){return await X(900),!r.email.includes(`server-error`)}static ɵfac=function(e){return new(e||o)};static ɵprov=N({token:o,factory:o.ɵfac,providedIn:`root`})};var re=class o{api=f(ne);options=_([]);loading=_(!1);hasMore=_(!0);total=_(void 0);selectableTotal=_(void 0);error=_(void 0);query=_(``);pageSize=_(3);failNext=_(!1);requests=_([]);config=_({buttonMode:`auto`,text:{key:`loadMore`},loadingText:{key:`loading`},retryText:{key:`retry`},variant:`tonal`,color:`accent`});requestId=0;controller;constructor(){f(Q).onDestroy(()=>this.controller?.abort()),this.load({source:`button`})}async load(r){if(this.loading()||!this.hasMore()&&!this.error())return;this.controller?.abort();let e=new AbortController,i=++this.requestId,t=this.failNext();this.controller=e,this.failNext.set(!1),this.loading.set(!0),this.error.set(void 0),this.record(`${r.source}: requesting ${this.pageSize()} items at offset ${this.options().length}`);try{let s=await this.api.options(this.query(),this.options().length,this.pageSize(),t,e.signal);if(i!==this.requestId)return;this.options.update(w=>[...w,...s.items]),this.hasMore.set(s.hasMore),this.total.set(s.total),this.selectableTotal.set(s.selectableTotal),this.record(`success: ${s.items.length} items received`)}catch(s){if(i!==this.requestId||e.signal.aborted)return;this.error.set(s instanceof Error?s.message:`Request failed.`),this.record(`failed: items retained; retry is available`)}finally{i===this.requestId&&this.loading.set(!1)}}search(r){this.controller?.abort(),++this.requestId,this.loading.set(!1),this.query.set(r),this.options.set([]),this.total.set(void 0),this.selectableTotal.set(void 0),this.hasMore.set(!0),this.error.set(void 0),this.load({source:`button`})}fail(){this.failNext.set(!0),this.load({source:`button`})}record(r){this.requests.update(e=>[r,...e].slice(0,8))}static ɵfac=function(e){return new(e||o)};static ɵprov=N({token:o,factory:o.ɵfac})};var gn=()=>({key:`project`});var on=()=>({key:`allLocations`});var rn=()=>({key:`locationsSelected`});var ln=()=>({key:`clearSelection`});var cn=()=>({key:`clearSelectionTooltip`});var Ae=()=>({key:`loading`});var bn=()=>({key:`selectAll`});var _n=(o,r)=>r.value;function xn(o,r){if(o&1&&(W(0,`li`),je(1),X$1()),o&2){let e=r.$implicit;M(),U_(``,e.kind,`: `,e.message||`Uses the field message resolver`)}}function yn(o,r){if(o&1){let e=us();W(0,`div`,1)(1,`form`,3)(2,`bx-input-field`,4),q0(),X$1(),W(3,`bx-input-field`,5),q0(),X$1(),W(4,`div`,6)(5,`bx-input-field`,7),q0(),X$1(),W(6,`bx-input-field`,8),q0(),W(7,`bx-error`),je(8),X$1()()(),W(9,`bx-input-field`,9),q0(),W(10,`span`,10),je(11,`people`),X$1()(),W(12,`bx-select`,11),q0(),X$1(),W(13,`bx-multi-select`,12),q0(),X$1(),W(14,`bx-radio-group`,13),q0(),Fe(15,`bx-radio`,14)(16,`bx-radio`,15),X$1(),W(17,`bx-checkbox`,16),q0(),X$1(),W(18,`bx-slide-toggle`,17),q0(),X$1(),W(19,`bx-input-field`,18),q0(),X$1(),W(20,`label`,19),je(21,`Budget`),X$1(),W(22,`input`,20),q0(),X$1(),W(23,`div`,21)(24,`button`,22),Fe(25,`bx-icon`,23),je(26,`Save project`),X$1(),W(27,`button`,24),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.validateAll())}),je(28,`Validate all`),X$1(),W(29,`button`,24),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.resetForm())}),je(30,`Reset form`),X$1(),W(31,`button`,24),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.populate())}),je(32,`Fill valid data`),X$1()(),W(33,`div`,21)(34,`button`,24),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.locked.set(!t.locked()))}),je(35,`Toggle disabled form`),X$1(),W(36,`button`,24),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.readOnly.set(!t.readOnly()))}),je(37,`Toggle readonly fields`),X$1(),W(38,`button`,24),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.policy.set(t.policy()===`touched`?`always`:`touched`))}),je(39),X$1()()(),W(40,`aside`,25)(41,`p`,26),je(42),X$1(),W(43,`dl`)(44,`dt`),je(45,`Valid`),X$1(),W(46,`dd`),je(47),X$1(),W(48,`dt`),je(49,`Invalid`),X$1(),W(50,`dd`),je(51),X$1(),W(52,`dt`),je(53,`Pending`),X$1(),W(54,`dd`),je(55),X$1(),W(56,`dt`),je(57,`Submitting`),X$1(),W(58,`dd`),je(59),X$1(),W(60,`dt`),je(61,`Touched`),X$1(),W(62,`dd`),je(63),X$1(),W(64,`dt`),je(65,`Dirty`),X$1(),W(66,`dd`),je(67),X$1()(),W(68,`pre`),je(69),Za(70,`json`),X$1(),W(71,`ul`),zr(72,xn,2,2,`li`,null,Ga),X$1()()()}if(o&2){let e=ue();M(),fe(`formRoot`,e.registration),M(),fe(`label`,Lk(53,gn))(`formField`,e.registration.project)(`errorMessages`,e.projectMessages)(`errorPolicy`,e.policy()),z0(),M(),fe(`formField`,e.registration.email)(`errorPolicy`,e.policy()),z0(),M(2),fe(`formField`,e.registration.password)(`errorPolicy`,e.policy()),z0(),M(),fe(`formField`,e.registration.confirmation)(`errorPolicy`,e.policy()),z0(),M(2),tt(e.registration.confirmation().errors()[0]?.message||`Please confirm your password.`),M(),fe(`formField`,e.registration.teamSize)(`errorPolicy`,e.policy()),z0(),M(3),fe(`clearable`,!1)(`readOnly`,e.readOnly())(`options`,e.options)(`isSearchable`,!0)(`formField`,e.registration.destination)(`errorPolicy`,e.policy()),z0(),M(),fe(`clearable`,!1)(`readOnly`,e.readOnly())(`isSearchable`,!0)(`allSelectedText`,Lk(54,on))(`selectedCountText`,Lk(55,rn))(`options`,e.options)(`formField`,e.registration.categories)(`errorPolicy`,e.policy()),z0(),M(),fe(`formField`,e.registration.plan)(`errorPolicy`,e.policy()),z0(),M(3),fe(`formField`,e.registration.terms)(`errorPolicy`,e.policy()),z0(),M(),fe(`formField`,e.registration.notifications),z0(),M(),fe(`multiline`,!0)(`formField`,e.registration.note)(`errorPolicy`,e.policy()),z0(),M(3),fe(`discrete`,!0)(`formField`,e.registration.budget),z0(),M(2),fe(`disabled`,!e.canSubmit())(`loading`,e.registration().submitting()),M(10),ye(`aria-pressed`,e.locked()),M(2),ye(`aria-pressed`,e.readOnly()),M(3),wr(`Errors: `,e.policy()),M(3),tt(e.status()),M(5),tt(e.registration().valid()),M(4),tt(e.registration().invalid()),M(4),tt(e.registration().pending()),M(4),tt(e.registration().submitting()),M(4),tt(e.registration().touched()),M(4),tt(e.registration().dirty()),M(2),tt(Uk(70,51,e.model())),M(3),Gr(e.registration().errorSummary())}}function fn(o,r){if(o&1){let e=us();W(0,`div`,27)(1,`bx-select`,37),z_(`valueChange`,function(t){Br(e);let s=ue(2);return Nk(s.destination,t)||(s.destination=t),jr(t)}),Me$1(`loadMore`,function(t){Br(e);let s=ue(2);return jr(s.remote.load(t))})(`search`,function(t){Br(e);let s=ue(2);return jr(s.remote.search(t))}),X$1(),W(2,`bx-checkbox`,38),z_(`checkedChange`,function(t){Br(e);let s=ue(2);return Nk(s.useTags,t)||(s.useTags=t),jr(t)}),X$1(),W(3,`bx-checkbox`,39),z_(`checkedChange`,function(t){Br(e);let s=ue(2);return Nk(s.allowClearing,t)||(s.allowClearing=t),jr(t)}),X$1()()}if(o&2){let e=ue(2);M(),fe(`clearable`,e.allowClearing())(`clearLabel`,Lk(16,ln))(`clearTooltip`,Lk(17,cn))(`selectionDisplay`,e.useTags()?`tags`:`text`)(`loadingLabel`,e.searchLoadingText()?Lk(18,Ae):void 0)(`searchValue`,e.remote.query())(`options`,e.remote.options())(`isSearchable`,!0)(`externalFiltering`,!0)(`loading`,e.remote.loading())(`hasMore`,e.remote.hasMore())(`loadError`,e.remote.error())(`loadMoreConfig`,e.remote.config()),$_(`value`,e.destination),M(),$_(`checked`,e.useTags),M(),$_(`checked`,e.allowClearing)}}function hn(o,r){if(o&1){let e=us();W(0,`div`,27)(1,`bx-multi-select`,40),z_(`valueChange`,function(t){Br(e);let s=ue(2);return Nk(s.selected,t)||(s.selected=t),jr(t)}),Me$1(`loadMore`,function(t){Br(e);let s=ue(2);return jr(s.remote.load(t))})(`search`,function(t){Br(e);let s=ue(2);return jr(s.remote.search(t))})(`selectAllIntentChange`,function(t){Br(e);let s=ue(2);return jr(s.recordIntent(t))})(`selectionChange`,function(t){Br(e);let s=ue(2);return jr(s.recordSelection(t))}),X$1(),W(2,`bx-checkbox`,41),z_(`checkedChange`,function(t){Br(e);let s=ue(2);return Nk(s.useTags,t)||(s.useTags=t),jr(t)}),X$1(),W(3,`bx-checkbox`,39),z_(`checkedChange`,function(t){Br(e);let s=ue(2);return Nk(s.allowClearing,t)||(s.allowClearing=t),jr(t)}),X$1()()}if(o&2){let e=ue(2);M(),fe(`clearable`,e.allowClearing())(`clearLabel`,Lk(23,ln))(`clearTooltip`,Lk(24,cn))(`selectionDisplay`,e.useTags()?`tags`:`text`)(`visibleTagCount`,e.visibleTagLimit())(`loadingLabel`,e.searchLoadingText()?Lk(25,Ae):void 0)(`searchValue`,e.remote.query())(`summaryThreshold`,e.summaryLimit())(`allSelectedText`,Lk(26,on))(`selectedCountText`,Lk(27,rn))(`options`,e.remote.options())(`isSearchable`,!0)(`externalFiltering`,!0)(`loading`,e.remote.loading())(`hasMore`,e.remote.hasMore())(`loadError`,e.remote.error())(`loadMoreConfig`,e.remote.config()),$_(`value`,e.selected),fe(`allSelectedTooltip`,e.allSelectedTooltip())(`selectAllLabel`,Lk(28,bn))(`selectionScope`,e.remote.query()),M(),$_(`checked`,e.useTags),M(),$_(`checked`,e.allowClearing)}}function vn(o,r){if(o&1&&(W(0,`li`),je(1),X$1()),o&2){let e=r.$implicit;M(),tt(e.label)}}function Cn(o,r){o&1&&(W(0,`div`,43),Fe(1,`bx-loading-indicator`,44),X$1()),o&2&&(M(),fe(`size`,16)(`label`,Lk(2,Ae)))}function wn(o,r){o&1&&(W(0,`p`),je(1,`No locations match.`),X$1())}function Sn(o,r){if(o&1){let e=us();W(0,`div`,42,0),Me$1(`loadMore`,function(t){Br(e);let s=ue(2);return jr(s.remote.load(t))}),W(2,`ul`),zr(3,vn,2,1,`li`,null,_n),X$1(),pe(5,Cn,2,3,`div`,43),pe(6,wn,2,0,`p`),X$1()}if(o&2){let e=Ya(1),i=ue(2);fe(`loadMoreHasMore`,i.remote.hasMore())(`loadMoreLoading`,i.remote.loading())(`loadMoreError`,i.remote.error())(`loadMoreConfig`,i.remote.config())(`loadMoreRevision`,i.remote.options()),M(3),Gr(i.remote.options()),M(2),me(i.remote.loading()&&!e.actionVisible()?5:-1),M(),me(!i.remote.loading()&&!i.remote.options().length&&!i.remote.error()?6:-1)}}function Tn(o,r){if(o&1){let e=us();W(0,`bx-input-field`,49),z_(`valueChange`,function(t){Br(e);let s=ue(3);return Nk(s.allSelectedTooltipText,t)||(s.allSelectedTooltipText=t),jr(t)}),X$1()}if(o&2){let e=ue(3);$_(`value`,e.allSelectedTooltipText)}}function En(o,r){if(o&1){let e=us();W(0,`bx-select`,45),z_(`valueChange`,function(t){Br(e);let s=ue(2);return Nk(s.allSelectedTooltipMode,t)||(s.allSelectedTooltipMode=t),jr(t)}),X$1(),pe(1,Tn,1,1,`bx-input-field`,46),W(2,`bx-input-field`,47),Me$1(`valueChange`,function(t){Br(e);let s=ue(2);return jr(s.changeVisibleTags(t))}),X$1(),W(3,`bx-input-field`,48),Me$1(`valueChange`,function(t){Br(e);let s=ue(2);return jr(s.changeSummaryLimit(t))}),X$1()}if(o&2){let e=ue(2);fe(`clearable`,!1)(`options`,e.allSelectedTooltipOptions),$_(`value`,e.allSelectedTooltipMode),M(),me(e.allSelectedTooltipMode()===`custom`?1:-1),M(),fe(`min`,1)(`value`,e.visibleTagLimit()),M(),fe(`min`,2)(`value`,e.summaryLimit())}}function kn(o,r){if(o&1&&(W(0,`li`),je(1),X$1()),o&2){let e=r.$implicit;M(),tt(e)}}function Mn(o,r){if(o&1&&(W(0,`output`),je(1),X$1()),o&2){let e=ue(2);M(),U_(`Selectable locations: `,e.remote.selectableTotal()??`…`,` of `,e.remote.total()??`…`,` results. Disabled options and groups are excluded.`)}}function Dn(o,r){if(o&1&&(W(0,`li`),je(1),X$1()),o&2){let e=r.$implicit;M(),tt(e)}}function Pn(o,r){if(o&1&&(W(0,`ul`,36),zr(1,Dn,2,1,`li`,null,Ga),X$1()),o&2){let e=ue(2);M(),Gr(e.events())}}function Vn(o,r){if(o&1){let e=us();W(0,`div`,2),pe(1,fn,4,19,`div`,27)(2,hn,4,29,`div`,27)(3,Sn,7,7,`div`,28),W(4,`div`,29)(5,`div`,30)(6,`button`,31),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.remote.fail())}),je(7,`Fail next page now`),X$1(),W(8,`button`,32),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.remote.search(``))}),je(9,`Reset pages`),X$1()(),W(10,`div`,33),pe(11,En,4,8),W(12,`bx-select`,34),Me$1(`selectionChange`,function(t){Br(e);let s=ue();return jr(s.changePageSize(t.value))}),X$1()()(),W(13,`p`,26),je(14),X$1(),W(15,`p`),je(16,`Small pages show the button without a scrollbar. More items enable scrolling. Failure retains existing items and reveals Retry request.`),X$1(),W(17,`ul`,35),zr(18,kn,2,1,`li`,null,Ga),X$1(),pe(20,Mn,2,2,`output`),pe(21,Pn,3,0,`ul`,36),X$1()}if(o&2){let e=ue();M(),me(e.example()===`select`?1:e.example()===`multi-select`?2:3),M(5),fe(`disabled`,e.remote.loading()||!e.remote.hasMore()),M(2),fe(`disabled`,e.remote.loading()),M(3),me(e.example()===`multi-select`?11:-1),M(),fe(`clearable`,!1)(`options`,e.pageSizes)(`value`,e.remote.pageSize()),M(2),tt(e.remote.loading()?`Loading: the request takes 800ms.`:e.remote.error()?`Failed: use Retry request at the bottom.`:e.remote.hasMore()?`Ready to load more.`:`All pages loaded.`),M(4),Gr(e.remote.requests()),M(2),me(e.example()===`multi-select`?20:-1),M(),me(e.example()===`multi-select`?21:-1)}}function On(o,r){o&1&&Fe(0,`bx-progress-bar`,54)}function Nn(o,r){if(o&1){let e=us();W(0,`div`,2)(1,`div`,21),Fe(2,`bx-loading-spinner`,50)(3,`bx-loading-spinner`,51)(4,`bx-loading-indicator`,52),X$1(),Fe(5,`bx-progress-bar`,53),pe(6,On,1,0,`bx-progress-bar`,54),W(7,`div`,21)(8,`button`,55),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.runAction())}),Fe(9,`bx-icon`,56),je(10,`Save with icon`),X$1(),W(11,`button`,57),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.runAction())}),je(12,`Save without icon`),X$1(),W(13,`button`,58),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.runAction())}),Fe(14,`bx-icon`,23),X$1()(),W(15,`p`,26),je(16),X$1()()}if(o&2){let e=ue();M(3),fe(`size`,32),M(2),fe(`value`,e.progress()),M(),me(e.loadingAction()?6:-1),M(2),fe(`loading`,e.loadingAction()),M(3),fe(`loading`,e.loadingAction()),M(2),fe(`loading`,e.loadingAction()),M(3),tt(e.loadingAction()?`Saving with fake API requests…`:`Ready. Buttons restore their original icons after loading.`)}}function In(o,r){if(o&1){let e=us();W(0,`div`,2)(1,`bx-range-slider`,59),z_(`valueChange`,function(t){Br(e);let s=ue();return Nk(s.range,t)||(s.range=t),jr(t)}),X$1(),W(2,`output`),je(3),Za(4,`json`),X$1()()}if(o&2){let e=ue();M(),$_(`value`,e.range),fe(`discrete`,!0)(`showTickMarks`,!0)(`step`,10),M(2),tt(Uk(4,5,e.range()))}}function Fn(o,r){if(o&1){let e=us();W(0,`div`,2)(1,`bx-input-field`,60)(2,`span`,61),je(3,`#`),X$1(),W(4,`span`,10),je(5,`ID`),X$1()(),W(6,`bx-form-field`,62)(7,`textarea`,63),q0(),z_(`ngModelChange`,function(t){Br(e);let s=ue();return Nk(s.templateValue,t)||(s.templateValue=t),jr(t)}),X$1(),W(8,`bx-hint`),je(9,`Native controls share the accessible frame.`),X$1()(),W(10,`bx-input-field`,64),q0(),X$1(),W(11,`output`),je(12),X$1(),W(13,`form`,65),Me$1(`ngSubmit`,function(){Br(e);let t=ue();return jr(t.captureSubmit())}),W(14,`bx-input-field`,66),q0(),X$1(),W(15,`button`,67),je(16,`Commit reactive form`),X$1(),W(17,`output`),je(18),X$1()(),W(19,`bx-input-field`,68),q0(),z_(`ngModelChange`,function(t){Br(e);let s=ue();return Nk(s.templateValue,t)||(s.templateValue=t),jr(t)}),X$1(),W(20,`output`),je(21),X$1()()}if(o&2){let e=ue();M(7),$_(`ngModel`,e.templateValue),z0(),M(3),fe(`formControl`,e.blurControl),z0(),M(2),wr(`Reactive model: `,e.blurControl.value),M(),fe(`formGroup`,e.submitForm),M(),z0(),M(4),wr(`Submitted: `,e.submitSnapshot()),M(),$_(`ngModel`,e.templateValue),z0(),M(2),wr(`Template model: `,e.templateValue())}}var Ee=class o{api=f(ne);translations=f(O);remote=f(re);model=_(s(r({},Le),{categories:[]}));locked=_(!1);readOnly=_(!1);policy=_(`touched`);status=_(`Complete the form to submit.`);events=_([]);selected=_([]);destination=_(null);useTags=_(!1);allowClearing=_(!0);allSelectedTooltipMode=_(`total`);allSelectedTooltipText=_(`All matching locations`);allSelectedTooltipOptions=nn;allSelectedTooltip=w(()=>{let r=this.allSelectedTooltipMode();if(r===`custom`)return this.allSelectedTooltipText();if(r!==`loaded`)return r===`disabled`||this.remote.selectableTotal()===void 0?!1:(this.translations.version(),this.translations.translate(`allLocationsTooltip`,{total:this.remote.selectableTotal()}))});visibleTagLimit=_(1);searchLoadingText=_(!1);summaryLimit=_(2);range=_([20,80]);loadingAction=_(!1);progress=_(0);blurControl=new gS(``,{nonNullable:!0,updateOn:`blur`});submitForm=new of({name:new gS(``,{nonNullable:!0,updateOn:`submit`})});submitSnapshot=_(``);templateValue=_(``);pageSizes=tn;options=Te;projectMessages=en;registration=dr(this.model,r=>{qa(r.project,{message:`Enter a project name.`}),Ba(r.project,3),Ka(r.project,{params:({value:e})=>e(),debounce:300,factory:e=>nD({params:e,loader:({params:i,abortSignal:t})=>this.api.available(i,t)}),onSuccess:e=>e?null:{kind:`taken`,message:`That project name is already used. Try another.`},onError:()=>({kind:`availability`,message:`Availability could not be checked.`})}),qa(r.email,{message:`Email is required.`}),za(r.email,{message:`Enter a valid email address.`}),qa(r.password),Ba(r.password,8,{message:`Use at least eight characters.`}),qa(r.confirmation),De(r.confirmation,({value:e,valueOf:i})=>e()===i(r.password)?null:{kind:`mismatch`,message:`Passwords must match.`}),qa(r.teamSize),ja(r.teamSize,1),Ha(r.teamSize,20),qa(r.destination),qa(r.categories),qa(r.plan),qa(r.terms,{message:`Accept the terms to continue.`}),qa(r.note,{when:({valueOf:e})=>e(r.notifications),message:`Add a notification note.`}),Ua(r.note,`blur`),Fa(r,()=>this.locked()),Va(r.email,()=>this.readOnly())},{submission:{ignoreValidators:`none`,action:async r=>await this.api.save(r().value())?(this.status.set(`Saved successfully.`),null):{kind:`server`,message:`The server rejected this email. Edit it and retry.`,fieldTree:r.email},onInvalid:r=>{this.status.set(`Review the validation messages.`),r().errorSummary()[0]?.fieldTree().focusBoundControl()}}});canSubmit=w(()=>this.registration().valid()&&!this.registration().submitting()&&!this.locked());validationStatus=w(()=>this.registration().pending()?`Checking availability`:this.registration().valid()?`Ready to submit`:`Needs attention`);example=g(`signal-forms`);constructor(){Te$1(()=>{this.status.set(this.validationStatus())})}validateAll(){this.registration().markAsTouched(),this.registration().errorSummary()[0]?.fieldTree().focusBoundControl()}resetForm(){this.registration().reset(s(r({},Le),{categories:[]}))}populate(){this.model.set({project:`My workspace`,email:`person@example.com`,password:`long-password`,confirmation:`long-password`,teamSize:3,destination:`skopje`,categories:[`ohrid`],plan:`team`,terms:!0,notifications:!1,note:``,budget:50})}recordIntent(r){this.events.update(e=>[`select-all: ${r.selected}, ${r.reason}, scope=${r.scope||`all`}, loaded=${r.values.length}`,...e].slice(0,8))}recordSelection(r){this.events.update(e=>[`selection: ${r.source}, ${r.value.length} values`,...e].slice(0,8))}changeVisibleTags(r){this.visibleTagLimit.set(Math.max(1,Number(r)||1))}changeSummaryLimit(r){this.summaryLimit.set(Math.max(2,Number(r)||2))}captureSubmit(){this.submitSnapshot.set(this.submitForm.getRawValue().name)}changePageSize(r){this.remote.pageSize.set(r??3),this.remote.search(this.remote.query())}async runAction(){this.loadingAction()||(this.loadingAction.set(!0),this.progress.set(15),await this.api.available(`demo`,new AbortController().signal),this.progress.set(70),await this.api.save(this.model()),this.progress.set(100),this.loadingAction.set(!1))}static ɵfac=function(e){return new(e||o)};static ɵcmp=le$1({type:o,selectors:[[`app-form-examples`]],inputs:{example:[1,`example`]},features:[Ut([re,O,{provide:$e,useExisting:O}])],decls:5,vars:1,consts:[[`standalonePagination`,`bxLoadMore`],[1,`form-demo-layout`],[1,`async-demo`],[1,`registration-form`,3,`formRoot`],[`hint`,`Try blocks or taken to see the async validator.`,3,`label`,`formField`,`errorMessages`,`errorPolicy`],[`label`,`Email`,`type`,`email`,`hint`,`Use server-error@example.com to simulate a rejected submission.`,3,`formField`,`errorPolicy`],[1,`form-row`],[`label`,`Password`,`type`,`password`,`autocomplete`,`new-password`,3,`formField`,`errorPolicy`],[`label`,`Confirm password`,`type`,`password`,`autocomplete`,`new-password`,3,`formField`,`errorPolicy`],[`label`,`Team size`,`type`,`number`,`hint`,`Between 1 and 20.`,3,`formField`,`errorPolicy`],[`bxSuffix`,``,`aria-hidden`,`true`],[`label`,`Destination`,3,`clearable`,`readOnly`,`options`,`isSearchable`,`formField`,`errorPolicy`],[`label`,`Related locations`,3,`clearable`,`readOnly`,`isSearchable`,`allSelectedText`,`selectedCountText`,`options`,`formField`,`errorPolicy`],[`label`,`Plan`,3,`formField`,`errorPolicy`],[`label`,`Personal`,`value`,`personal`],[`label`,`Team`,`value`,`team`],[`label`,`Accept the terms`,3,`formField`,`errorPolicy`],[`label`,`Enable notifications`,3,`formField`],[`label`,`Notification note`,`hint`,`Required with notifications. Model updates on blur.`,3,`multiline`,`formField`,`errorPolicy`],[`for`,`budget-example`],[`bxSlider`,``,`id`,`budget-example`,`type`,`range`,3,`discrete`,`formField`],[1,`actions`],[`bx-button`,``,`type`,`submit`,`variant`,`filled`,3,`disabled`,`loading`],[`name`,`save`,`size`,`20`],[`bx-button`,``,`type`,`button`,3,`click`],[`aria-label`,`Form state`,1,`state-panel`],[`role`,`status`],[1,`selection-row`],[`role`,`region`,`aria-label`,`Paginated locations`,`tabindex`,`0`,`bxLoadMore`,``,1,`paged-collection`,3,`loadMoreHasMore`,`loadMoreLoading`,`loadMoreError`,`loadMoreConfig`,`loadMoreRevision`],[1,`actions`,`pagination-actions`],[1,`pagination-buttons`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[1,`pagination-options`],[`label`,`Page size`,`subscriptSizing`,`dynamic`,1,`page-size-control`,3,`selectionChange`,`clearable`,`options`,`value`],[`aria-label`,`Request events`,1,`event-log`],[`aria-label`,`Selection events`,1,`event-log`],[`label`,`Location`,`subscriptSizing`,`dynamic`,3,`valueChange`,`loadMore`,`search`,`clearable`,`clearLabel`,`clearTooltip`,`selectionDisplay`,`loadingLabel`,`searchValue`,`options`,`isSearchable`,`externalFiltering`,`loading`,`hasMore`,`loadError`,`loadMoreConfig`,`value`],[`label`,`Show selected tag`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Allow clearing selection`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Locations`,`subscriptSizing`,`dynamic`,3,`valueChange`,`loadMore`,`search`,`selectAllIntentChange`,`selectionChange`,`clearable`,`clearLabel`,`clearTooltip`,`selectionDisplay`,`visibleTagCount`,`loadingLabel`,`searchValue`,`summaryThreshold`,`allSelectedText`,`selectedCountText`,`options`,`isSearchable`,`externalFiltering`,`loading`,`hasMore`,`loadError`,`loadMoreConfig`,`value`,`allSelectedTooltip`,`selectAllLabel`,`selectionScope`],[`label`,`Show selected tags`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`role`,`region`,`aria-label`,`Paginated locations`,`tabindex`,`0`,`bxLoadMore`,``,1,`paged-collection`,3,`loadMore`,`loadMoreHasMore`,`loadMoreLoading`,`loadMoreError`,`loadMoreConfig`,`loadMoreRevision`],[1,`collection-loading`],[3,`size`,`label`],[`label`,`Select-all tooltip`,`subscriptSizing`,`dynamic`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Select-all tooltip text`,`subscriptSizing`,`dynamic`,3,`value`],[`label`,`Visible tags`,`type`,`number`,`subscriptSizing`,`dynamic`,1,`visible-tag-control`,3,`valueChange`,`min`,`value`],[`label`,`Summary threshold`,`type`,`number`,`subscriptSizing`,`dynamic`,1,`summary-threshold-control`,3,`valueChange`,`min`,`value`],[`label`,`Select-all tooltip text`,`subscriptSizing`,`dynamic`,3,`valueChange`,`value`],[`label`,`Loading preview`],[`label`,`Larger loading preview`,3,`size`],[`label`,`Fetching workspaces`],[`label`,`Save progress`,3,`value`],[`mode`,`indeterminate`,`label`,`Saving project`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,3,`click`,`loading`],[`name`,`save`,`size`,`24`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`loading`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`aria-label`,`Save project`,3,`click`,`loading`],[`label`,`Budget range`,3,`valueChange`,`value`,`discrete`,`showTickMarks`,`step`],[`label`,`Reference`,`appearance`,`outline`,`hint`,`A visible hint`,`hintEnd`,`Optional`],[`bxPrefix`,``,`aria-hidden`,`true`],[`label`,`Native multiline field`],[`bxInput`,``,`label`,`Native multiline field`,`rows`,`3`,3,`ngModelChange`,`ngModel`],[`label`,`Reactive blur update`,`hint`,`Edit and blur repeatedly; every edit reaches the model.`,3,`formControl`],[3,`ngSubmit`,`formGroup`],[`label`,`Reactive submit update`,`formControlName`,`name`],[`bx-button`,``,`type`,`submit`],[`label`,`Template-driven field`,3,`ngModelChange`,`ngModel`]],template:function(e,i){e&1&&pe(0,yn,74,56,`div`,1)(1,Vn,22,10,`div`,2)(2,Nn,17,7,`div`,2)(3,In,5,7,`div`,2)(4,Fn,22,7,`div`,2),e&2&&me(i.example()===`signal-forms`||i.example()===`radio-group`?0:i.example()===`select`||i.example()===`multi-select`||i.example()===`load-more`?1:i.example()===`loading-spinner`||i.example()===`loading-indicator`||i.example()===`progress-bar`||i.example()===`button-loading`?2:i.example()===`range-slider`?3:4)},dependencies:[k9,N9,XE,M9,I9,NP,Pv,A9,OP,Lv,LP,$a,Ga$1,If,Kl,Zl,Qn$2,Tf,Ti$1,ut,en$1,tn$1,Qe,Ue,Ke,rn$1,ki$1,J,Ye,Ze,Rx,er,Ox,_t,RA],styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
}
.form-demo-layout[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(12rem, 0.7fr);
  gap: 1.5rem;
  inline-size: 100%;
}
.registration-form[_ngcontent-%COMP%], 
.async-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-inline-size: 0;
  inline-size: 100%;
}
.form-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}
.actions[_ngcontent-%COMP%], 
.pagination-buttons[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}
.state-panel[_ngcontent-%COMP%] {
  padding: 1rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
  background: var(--%NS%bx-bg-surface);
  min-inline-size: 0;
}
.state-panel[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem;
}
.state-panel[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {
  margin: 0;
}
pre[_ngcontent-%COMP%] {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font-size: 0.75rem;
}
.paged-collection[_ngcontent-%COMP%] {
  max-block-size: 15rem;
  overflow: auto;
  padding: 1rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
}
.paged-collection[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0;
}
.paged-collection[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding: 0.5rem;
  border-bottom: 1px solid var(--%NS%bx-border-subtle);
}
.event-log[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: var(--%NS%bx-text-secondary);
  overflow-wrap: anywhere;
  padding-inline-start: 1rem;
}
textarea[_ngcontent-%COMP%], 
select[_ngcontent-%COMP%] {
  background: var(--%NS%bx-bg-surface);
  color: var(--%NS%bx-text-primary);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.25rem;
  font: inherit;
  padding: 0.5rem;
}
@media (max-width: 768px) {
  .form-demo-layout[_ngcontent-%COMP%], 
   .form-row[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
}
.selection-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: 1rem;
}
.pagination-options[_ngcontent-%COMP%] {
  display: flex;
  flex: 1 1 28rem;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  min-inline-size: 0;
  max-inline-size: 100%;
  margin-inline-start: auto;
}
.pagination-options[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  flex: none;
  max-inline-size: 100%;
}
.pagination-actions[_ngcontent-%COMP%] {
  justify-content: flex-end;
}
.pagination-buttons[_ngcontent-%COMP%] {
  min-inline-size: 0;
  margin-inline-end: auto;
}
.visible-tag-control[_ngcontent-%COMP%] {
  inline-size: 10.5rem;
}
.summary-threshold-control[_ngcontent-%COMP%] {
  inline-size: 12.25rem;
}
.page-size-control[_ngcontent-%COMP%] {
  inline-size: 10rem;
}
@media (max-width: 768px) {
  .selection-row[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (max-width: 640px) {
  .pagination-options[_ngcontent-%COMP%] {
    inline-size: 100%;
    margin-inline-start: 0;
  }
  .pagination-options[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
    inline-size: 100%;
  }
}
.collection-loading[_ngcontent-%COMP%] {
  padding: 0.5rem;
}`]})};var le=class o{query=_(``);completedQuery=_(``);results=_([]);loading=_(!1);error=_(void 0);requests=_([]);controller;constructor(){f(Q).onDestroy(()=>this.controller?.abort()),this.search(``)}async search(r,e$1=!1){this.controller?.abort();let i=new AbortController;this.controller=i,this.query.set(r),this.loading.set(!0),this.error.set(void 0);try{if(await X(250,i.signal),this.record(`Request: ${r||`(all components)`}`),await X(800,i.signal),i.signal.aborted)return;if(e$1)throw new Error(`Simulated request failure`);let t=r.trim().toLocaleLowerCase(),s=e.map(w=>w.title).filter(w=>w.toLocaleLowerCase().includes(t));this.results.set(s),this.completedQuery.set(r),this.record(`Success: ${s.length} results`)}catch{if(i.signal.aborted)return;this.error.set({key:`searchError`}),this.record(`Failed: previous results retained; retry the same query`)}finally{this.controller===i&&this.loading.set(!1)}}record(r){this.requests.update(e=>[r,...e].slice(0,8))}static ɵfac=function(e){return new(e||o)};static ɵprov=N({token:o,factory:o.ɵfac})};var Ln=()=>({key:`searchLabel`});var An=()=>({key:`searchPlaceholder`});var sn=()=>({key:`searchLoading`});var zn=()=>({key:`searchClear`});var Wn=()=>({key:`retry`});function Rn(o,r){if(o&1&&(W(0,`li`),je(1),X$1()),o&2){let e=r.$implicit;M(),tt(e)}}function Bn(o,r){if(o&1&&(W(0,`li`,9),je(1),X$1()),o&2){let e=ue(2);M(),tt(e.emptyText())}}function qn(o,r){if(o&1&&pe(0,Bn,2,1,`li`,9),o&2){let e=ue();me(!e.remote.loading()&&!e.remote.error()?0:-1)}}function jn(o,r){if(o&1&&(W(0,`li`),je(1),X$1()),o&2){let e=r.$implicit;M(),tt(e)}}var ke=class o{i18n=f(O);remote=f(le);showLoadingText=_(!1);readOnly=_(!1);disabled=_(!1);emptyText=w(()=>(this.i18n.version(),this.i18n.translate(`searchEmpty`)));retryConfig={variant:`tonal`,color:`accent`};changeLoadingText(r){this.showLoadingText.set(r),r&&!this.remote.loading()&&!this.readOnly()&&!this.disabled()&&this.remote.search(this.remote.query())}static ɵfac=function(e){return new(e||o)};static ɵcmp=le$1({type:o,selectors:[[`app-search-examples`]],features:[Ut([le,O,{provide:$e,useExisting:O}])],decls:20,vars:26,consts:[[1,`search-demo`],[`subscriptSizing`,`dynamic`,3,`search`,`retry`,`label`,`placeholder`,`value`,`loading`,`loadError`,`loadingLabel`,`loadingAriaLabel`,`clearLabel`,`retryLabel`,`retryConfig`,`readOnly`,`disabled`],[1,`search-actions`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`label`,`Show loading text`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Readonly`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Disabled`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`aria-label`,`Search results`,1,`search-results`],[`aria-label`,`Request events`,1,`search-events`],[`role`,`status`]],template:function(e,i){e&1&&(W(0,`div`,0)(1,`bx-search-input`,1),Me$1(`search`,function(s){return i.remote.search(s)})(`retry`,function(s){return i.remote.search(s)}),X$1(),W(2,`div`,2)(3,`button`,3),Me$1(`click`,function(){return i.remote.search(i.remote.query(),!0)}),je(4,`Fail this search`),X$1(),W(5,`bx-checkbox`,4),Me$1(`checkedChange`,function(s){return i.changeLoadingText(s)}),X$1(),W(6,`bx-checkbox`,5),z_(`checkedChange`,function(s){return Nk(i.readOnly,s)||(i.readOnly=s),s}),X$1(),W(7,`bx-checkbox`,6),z_(`checkedChange`,function(s){return Nk(i.disabled,s)||(i.disabled=s),s}),X$1()(),W(8,`p`),je(9,`Requests debounce for 250ms and take 800ms. Type quickly to cancel older requests, or enter an unmatched term for empty results. Failure keeps the last successful results. Use Retry request to try the same query again. Enabling Show loading text previews another request.`),X$1(),W(10,`section`,7)(11,`p`),je(12),X$1(),W(13,`ul`),zr(14,Rn,2,1,`li`,null,$u,!1,qn,1,1),X$1()(),W(17,`ul`,8),zr(18,jn,2,1,`li`,null,Ga),X$1()()),e&2&&(M(),fe(`label`,Lk(20,Ln))(`placeholder`,Lk(21,An))(`value`,i.remote.query())(`loading`,i.remote.loading())(`loadError`,i.remote.error())(`loadingLabel`,i.showLoadingText()?Lk(22,sn):void 0)(`loadingAriaLabel`,Lk(23,sn))(`clearLabel`,Lk(24,zn))(`retryLabel`,Lk(25,Wn))(`retryConfig`,i.retryConfig)(`readOnly`,i.readOnly())(`disabled`,i.disabled()),M(2),fe(`disabled`,i.remote.loading()||i.disabled()||i.readOnly()),M(2),fe(`checked`,i.showLoadingText()),M(),$_(`checked`,i.readOnly),M(),$_(`checked`,i.disabled),M(3),ye(`aria-busy`,i.remote.loading()),M(2),U_(`Last completed search: `,i.remote.completedQuery()||`all components`,` · `,i.remote.results().length,` results`),M(2),Gr(i.remote.results()),M(4),Gr(i.remote.requests()))},dependencies:[If,Qn$2,jx],styles:[`
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
}`]})};function Un(o,r){if(o&1&&(W(0,`div`)(1,`strong`),je(2),X$1()()),o&2){let e=ue();M(2),tt(e.data.title)}}function Gn(o,r){if(o&1){let e=us();W(0,`div`,4)(1,`button`,5),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.close())}),je(2,`Cancel`),X$1(),W(3,`button`,6),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.confirm())}),je(4,`Save changes`),X$1()()}}var Me=class o extends en$2{name=new gS(`Blocks workspace`,{nonNullable:!0});confirm(){this.modal.close(`confirm`,this.name.value)}static ɵfac=(()=>{let r;return function(i){return(r||(r=wn$1(o)))(i||o)}})();static ɵcmp=le$1({type:o,selectors:[[`app-component-dialog`]],features:[Je],decls:6,vars:2,consts:[[4,`appModalHeader`],[1,`dialog-body`],[`label`,`Project name`,3,`formControl`],[`class`,`dialog-actions`,4,`appModalFooter`],[1,`dialog-actions`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(e,i){e&1&&(S_(0,Un,3,1,`div`,0),W(1,`div`,1)(2,`p`),je(3),X$1(),W(4,`bx-input-field`,2),q0(),X$1()(),S_(5,Gn,5,0,`div`,3)),e&2&&(M(3),tt(i.data.description),M(),fe(`formControl`,i.name),z0())},dependencies:[If,Ti$1,A9,M9,OP,nn$1,tn$2],styles:[`
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
}`]})};var Hn=()=>({required:`Enter a project name.`});var Xn=()=>({email:`Enter a valid email address.`});var Qn=()=>({name:`settings`});var Jn=o=>({text:`Project settings`,icon:o});function Yn(o,r){o&1&&Fe(0,`app-tag-examples`)}function Kn(o,r){o&1&&Fe(0,`app-truncation-examples`)}function Zn(o,r){o&1&&Fe(0,`app-form-examples`,14)}function $n(o,r){o&1&&Fe(0,`app-form-examples`,15)}function ei(o,r){o&1&&Fe(0,`app-form-examples`,16)}function ti(o,r){o&1&&Fe(0,`app-form-examples`,17)}function ni(o,r){o&1&&Fe(0,`app-form-examples`,18)}function ii(o,r){o&1&&Fe(0,`app-form-examples`,19)}function ai(o,r){o&1&&Fe(0,`app-form-examples`,20)}function oi(o,r){o&1&&Fe(0,`app-form-examples`,21)}function ri(o,r){o&1&&Fe(0,`app-form-examples`,22)}function li(o,r){o&1&&Fe(0,`app-form-examples`,23)}function ci(o,r){o&1&&Fe(0,`app-form-examples`,24)}function si(o,r){o&1&&Fe(0,`app-form-examples`,25)}function di(o,r){o&1&&Fe(0,`app-form-examples`,26)}function mi(o,r){if(o&1){let e=us();W(0,`div`,27)(1,`div`,39)(2,`button`,40),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.activate(`Primary action`))}),je(3,`Primary action`),X$1(),W(4,`button`,41),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.activate(`Tonal action`))}),je(5,`Tonal`),X$1(),W(6,`button`,42),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.activate(`Text action`))}),je(7,`Text`),X$1(),W(8,`button`,43),je(9,`Disabled`),X$1()(),W(10,`div`,39)(11,`button`,44),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.activate(`Success`))}),je(12,`Success`),X$1(),W(13,`button`,45),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.activate(`Warning`))}),je(14,`Warning`),X$1(),W(15,`button`,46),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.activate(`Delete`))}),je(16,`Delete`),X$1(),W(17,`button`,47),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.activate(`Add item`))}),Fe(18,`bx-icon`,48),X$1()()()}o&2&&(M(8),fe(`disabled`,!0))}function pi(o,r){if(o&1&&(W(0,`div`,27)(1,`bx-checkbox`,49),q0(),X$1(),W(2,`bx-checkbox`,50),q0(),X$1(),W(3,`div`,39),Fe(4,`bx-checkbox-indicator`,51),W(5,`span`),je(6),X$1()(),W(7,`div`,39),Fe(8,`bx-checkbox-indicator`),W(9,`span`),je(10,`Unchecked`),X$1(),Fe(11,`bx-checkbox-indicator`,52),W(12,`span`),je(13,`Checked`),X$1(),Fe(14,`bx-checkbox-indicator`,53),W(15,`span`),je(16,`Partial`),X$1()()()),o&2){let e=ue();M(),fe(`formControl`,e.checked),z0(),M(),fe(`formControl`,e.secondChecked),z0(),M(2),fe(`checked`,e.checked.value)(`indeterminate`,e.secondChecked.value),M(2),wr(`Selection: `,e.secondChecked.value?`partial`:e.checked.value?`checked`:`unchecked`),M(5),fe(`checked`,!0),M(3),fe(`indeterminate`,!0)}}function ui(o,r){if(o&1&&(W(0,`div`,27)(1,`bx-checkbox`,54),q0(),X$1(),W(2,`bx-checkbox`,55),q0(),X$1(),W(3,`bx-checkbox`,56),q0(),X$1(),W(4,`output`),je(5),X$1()()),o&2){let e=ue();M(),fe(`formControl`,e.checked),z0(),M(),fe(`formControl`,e.secondChecked),z0(),M(),fe(`formControl`,e.disabledCheck),z0(),M(2),U_(`Updates: `,e.checked.value?`on`:`off`,` · Previews: `,e.secondChecked.value?`on`:`off`)}}function gi(o,r){if(o&1){let e=us();W(0,`div`,28)(1,`bx-form-field`,57)(2,`span`,58)(3,`input`,59),Me$1(`input`,function(t){Br(e);let s=ue();return jr(s.updateField(t))})(`blur`,function(){Br(e);let t=ue();return jr(t.showError.set(!0))}),X$1()()(),W(4,`button`,60),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.showError.set(!0))}),je(5,`Validate name`),X$1(),W(6,`output`),je(7),X$1()()}if(o&2){let e=ue();M(),fe(`required`,!0)(`error`,e.fieldError()),M(2),fe(`value`,e.fieldValue()),ye(`aria-invalid`,!!e.fieldError()),M(4),wr(`Value: `,e.fieldValue()||`empty`)}}function bi(o,r){if(o&1&&(W(0,`div`,28)(1,`bx-input-field`,61),q0(),X$1(),W(2,`bx-input-field`,62),q0(),X$1(),W(3,`bx-input-field`,63),q0(),X$1(),W(4,`output`),je(5),X$1()()),o&2){let e=ue();M(),fe(`errorMessages`,Lk(9,Hn))(`formControl`,e.name),z0(),M(),fe(`errorMessages`,Lk(10,Xn))(`formControl`,e.email),z0(),M(),fe(`min`,1)(`max`,20)(`formControl`,e.quantity),z0(),M(2),U_(``,e.name.value,` · `,e.quantity.value,` members`)}}function _i(o,r){if(o&1){let e=us();W(0,`fieldset`,27)(1,`legend`),je(2,`Notification frequency`),X$1(),W(3,`bx-radio`,64),q0(),X$1(),W(4,`bx-radio`,65),q0(),X$1(),W(5,`bx-radio`,66),q0(),X$1(),W(6,`output`),je(7),X$1(),W(8,`button`,42),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.frequency.reset())}),je(9,`Reset frequency`),X$1()()}if(o&2){let e=ue();M(3),fe(`formControl`,e.frequency),z0(),M(),fe(`formControl`,e.frequency),z0(),M(),fe(`formControl`,e.frequency),z0(),M(2),wr(`Selected: `,e.frequency.value)}}function xi(o,r){o&1&&Fe(0,`app-search-examples`)}function yi(o,r){o&1&&Fe(0,`app-form-examples`,29)}function fi(o,r){if(o&1){let e=us();W(0,`div`,28)(1,`label`,67),je(2,`Volume`),X$1(),W(3,`input`,68),q0(),X$1(),W(4,`output`),je(5),X$1(),W(6,`button`,42),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.volume.setValue(50))}),je(7,`Reset volume`),X$1(),W(8,`label`,69),je(9,`Unavailable range`),X$1(),Fe(10,`input`,70),X$1()}if(o&2){let e=ue();M(3),fe(`formControl`,e.volume),z0(),M(2),wr(``,e.volume.value,`%`)}}function hi(o,r){if(o&1&&(W(0,`div`,27)(1,`bx-slide-toggle`,71),q0(),X$1(),W(2,`bx-slide-toggle`,56),q0(),X$1(),W(3,`output`),je(4),X$1()()),o&2){let e=ue();M(),fe(`formControl`,e.enabled),z0(),M(),fe(`formControl`,e.disabledCheck),z0(),M(2),wr(`Notifications are `,e.enabled.value?`enabled`:`disabled`,`.`)}}function vi(o,r){if(o&1&&(W(0,`bx-error`,74),je(1),X$1()),o&2){let e=ue(2);M(),tt(e.fieldError())}}function Ci(o,r){if(o&1){let e=us();W(0,`div`,28)(1,`bx-form-field`,72)(2,`span`,58)(3,`input`,73),Me$1(`input`,function(t){Br(e);let s=ue();return jr(s.updateField(t))})(`blur`,function(){Br(e);let t=ue();return jr(t.showError.set(!0))}),X$1()(),pe(4,vi,2,1,`bx-error`,74),X$1(),W(5,`button`,60),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.showError.set(!0))}),je(6,`Validate reference`),X$1()()}if(o&2){let e=ue();M(3),fe(`value`,e.fieldValue()),ye(`aria-invalid`,!!e.fieldError())(`aria-describedby`,e.fieldError()?`custom-error`:null),M(),me(e.fieldError()?4:-1)}}function wi(o,r){if(o&1&&(W(0,`p`),je(1,`Keep related information together while showing one panel at a time.`),X$1(),W(2,`bx-input-field`,81),q0(),X$1()),o&2){let e=ue(2);M(2),fe(`formControl`,e.tabNote),z0()}}function Si(o,r){o&1&&(W(0,`p`),je(1,`Headers support arrow keys, Home and End. Panel content is created only when selected.`),X$1())}function Ti(o,r){o&1&&(W(0,`bx-tab`,79)(1,`p`),je(2,`No recent project activity.`),X$1()())}function Ei(o,r){if(o&1){let e=us();W(0,`div`,27)(1,`bx-tabs`,75),z_(`selectedValueChange`,function(t){Br(e);let s=ue();return Nk(s.selectedTab,t)||(s.selectedTab=t),jr(t)}),W(2,`bx-tab`,76),S_(3,wi,3,1,`ng-template`,77),X$1(),W(4,`bx-tab`,78),S_(5,Si,2,0,`ng-template`,77),X$1(),pe(6,Ti,3,0,`bx-tab`,79),Fe(7,`bx-tab`,80),X$1(),W(8,`div`,39)(9,`button`,60),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.tabsVariant.set(t.tabsVariant()===`segmented`?`underline`:`segmented`))}),je(10,`Underline appearance`),X$1(),W(11,`button`,60),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.detailsDisabled.set(!t.detailsDisabled()))}),je(12,`Disable details`),X$1(),W(13,`button`,60),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.showActivity.set(!t.showActivity()))}),je(14,`Show activity`),X$1()(),W(15,`output`),je(16),X$1()()}if(o&2){let e=ue();M(),fe(`variant`,e.tabsVariant()),$_(`selectedValue`,e.selectedTab),M(3),fe(`disabled`,e.detailsDisabled()),M(2),me(e.showActivity()?6:-1),M(),fe(`disabled`,!0),M(2),ye(`aria-pressed`,e.tabsVariant()===`underline`),M(2),ye(`aria-pressed`,e.detailsDisabled()),M(2),ye(`aria-pressed`,e.showActivity()),M(3),wr(`Selected: `,e.selectedTab())}}function ki(o,r){if(o&1){let e=us();W(0,`bx-menu`,30)(1,`bx-menu-item`,82),Me$1(`action`,function(){Br(e);let t=ue();return jr(t.activate(`Project duplicated`))}),X$1(),W(2,`bx-menu-item`,83),Me$1(`action`,function(){Br(e);let t=ue();return jr(t.activate(`Project archived`))}),X$1(),Fe(3,`bx-menu-item`,84),X$1()}o&2&&(M(3),fe(`disabled`,!0))}function Mi(o,r){if(o&1){let e=us();W(0,`bx-menu`,30)(1,`bx-menu-item`,85),Me$1(`action`,function(){Br(e);let t=ue();return jr(t.activate(`Copy link`))}),X$1(),W(2,`bx-menu-item`,86),Me$1(`action`,function(){Br(e);let t=ue();return jr(t.activate(`Open settings`))}),X$1(),W(3,`bx-menu-item`,87),Me$1(`action`,function(){Br(e);let t=ue();return jr(t.activate(`Delete requested`))}),X$1(),Fe(4,`bx-menu-item`,84),X$1()}o&2&&(M(3),fe(`danger`,!0),M(),fe(`disabled`,!0))}function Di(o,r){o&1&&(W(0,`div`,27),Fe(1,`bx-tooltip`,88),W(2,`p`),je(3,`Standalone tooltip content. Use the trigger directive for positioned help.`),X$1(),W(4,`a`,89),je(5,`Try the tooltip trigger`),X$1()())}function Pi(o,r){if(o&1){let e=us();W(0,`div`,27)(1,`div`,39)(2,`button`,90),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.activate(`Saved`))}),je(3,`Save project`),X$1(),W(4,`button`,91),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.activate(`Normal tap activated`))}),je(5,`Hold for a hint`),X$1(),W(6,`button`,92),Fe(7,`bx-icon`,93),X$1()(),W(8,`p`),je(9,`Hover with a mouse or use keyboard focus for hints. On touch screens, Save project activates immediately, Hold for a hint supports a long press, and the information button opens help on tap.`),X$1()()}}function Vi(o,r){if(o&1){let e=us();W(0,`bx-menu`)(1,`bx-menu-item`,96),Me$1(`action`,function(){Br(e),ue();let t=Ya(2);return ue().activate(`Project duplicated`),jr(t.close())}),X$1(),W(2,`bx-menu-item`,97),Me$1(`action`,function(){Br(e),ue();let t=Ya(2);return ue().activate(`Project archived`),jr(t.close())}),X$1(),W(3,`bx-menu-item`,98),Me$1(`action`,function(){Br(e),ue();let t=Ya(2);return ue().activate(`Delete requested`),jr(t.close())}),X$1()()}o&2&&(M(3),fe(`danger`,!0))}function Oi(o,r){if(o&1&&(W(0,`div`,27)(1,`button`,94,0),je(3,`Project actions `),Fe(4,`bx-icon`,95),X$1(),S_(5,Vi,4,1,`ng-template`,null,1,Qm),W(7,`output`),je(8),X$1(),W(9,`p`),je(10,`Open, close, or reopen while the menu fades. Its contents keep their full size throughout.`),X$1()()),o&2){let e=Ya(2),i=Ya(6);M(),fe(`bxDropdown`,i),M(7),wr(`Transition: `,e.state())}}function Ni(o,r){if(o&1){let e=us();W(0,`bx-menu`)(1,`bx-menu-item`,100),Me$1(`action`,function(){Br(e);let t=ue(2);return jr(t.activate(`Selection copied`))}),X$1(),W(2,`bx-menu-item`,101),Me$1(`action`,function(){Br(e);let t=ue(2);return jr(t.activate(`Selection archived`))}),X$1()()}}function Ii(o,r){if(o&1){let e=us();W(0,`div`,27)(1,`div`,99),je(2,`Right-click, touch and hold, or focus here and press Shift + F10.`),X$1(),W(3,`button`,60),Me$1(`click`,function(t){Br(e);let s=ue();return jr(s.openContextMenu(t))}),je(4,`Open actions`),X$1(),S_(5,Ni,3,0,`ng-template`,null,2,Qm),X$1()}if(o&2){let e=Ya(6);M(),fe(`bxContextMenu`,e)}}function Fi(o,r){o&1&&(W(0,`div`,27),Fe(1,`bx-breadcrumbs`,102),W(2,`p`),je(3,`This trail comes from the current route metadata. Select Components to navigate back.`),X$1(),W(4,`a`,103),je(5,`Navigate to Button`),X$1()()),o&2&&(M(),fe(`minimumBreadcrumbs`,1))}function Li(o,r){o&1&&(W(0,`div`,27)(1,`div`,104),Fe(2,`bx-icon`,105)(3,`bx-icon`,106)(4,`bx-icon`,107)(5,`bx-icon`,108)(6,`bx-icon`,109),X$1(),W(7,`a`,110),je(8,`Browse the searchable icon catalog`),X$1()()),o&2&&(M(2),fe(`decorative`,!1))}function Ai(o,r){if(o&1){let e=us();W(0,`bx-modal-banner`,113),Me$1(`close`,function(){Br(e);let t=ue(2);return t.bannerVisible.set(!1),jr(t.activate(`Banner dismissed`))}),X$1()}o&2&&fe(`header`,Fk(3,Jn,Lk(2,Qn)))(`showCloseButton`,!0)}function zi(o,r){if(o&1){let e=us();W(0,`button`,60),Me$1(`click`,function(){Br(e);let t=ue(2);return jr(t.bannerVisible.set(!0))}),je(1,`Restore banner`),X$1()}}function Wi(o,r){if(o&1){let e=us();W(0,`div`,31),pe(1,Ai,1,5,`bx-modal-banner`,111)(2,zi,2,0,`button`,112),W(3,`button`,40),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.openModal())}),je(4,`See banner in a dialog`),X$1()()}if(o&2){let e=ue();M(),me(e.bannerVisible()?1:2)}}function Ri(o,r){if(o&1){let e=us();W(0,`div`,27)(1,`div`,39)(2,`button`,44),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.notify(`success`))}),je(3,`Success`),X$1(),W(4,`button`,114),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.notify(`info`))}),je(5,`Information`),X$1(),W(6,`button`,45),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.notify(`warn`))}),je(7,`Warning`),X$1(),W(8,`button`,46),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.notify(`danger`))}),je(9,`Error`),X$1()(),W(10,`p`),je(11,`The toast host manages the progress indicator, dismiss action, pause and cleanup.`),X$1(),W(12,`a`,115),je(13,`Open the full toast configurator`),X$1()()}}function Bi(o,r){if(o&1){let e=us();W(0,`div`,27)(1,`div`,39)(2,`button`,44),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.notify(`success`))}),je(3,`Show success`),X$1(),W(4,`button`,114),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.notify(`info`))}),je(5,`Show information`),X$1(),W(6,`button`,45),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.notify(`warn`))}),je(7,`Show warning`),X$1(),W(8,`button`,46),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.notify(`danger`))}),je(9,`Show error`),X$1()(),W(10,`p`),je(11,`Semantic colors remain tied to the active Blocks palette.`),X$1()()}}function qi(o,r){if(o&1){let e=us();W(0,`section`,32),Fe(1,`bx-icon`,116),W(2,`h3`),je(3,`A custom Blocks surface`),X$1(),W(4,`p`),je(5,`Material, blur, tint, lighting and motion follow the same global configuration as the controls around it.`),X$1(),W(6,`button`,60),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.activate(`Custom surface action`))}),je(7,`Try an action`),X$1()()}}function ji(o,r){if(o&1){let e=us();W(0,`button`,60),Me$1(`click`,function(){Br(e);let t=ue(2);return jr(t.openModal(`left`))}),je(1,`Open on the left`),X$1()}}function Ui(o,r){if(o&1){let e=us();W(0,`div`,27)(1,`div`,39)(2,`button`,40),Me$1(`click`,function(){Br(e);let t=ue();return jr(t.openModal())}),je(3),X$1(),pe(4,ji,2,0,`button`,112),X$1(),W(5,`p`),je(6,`Try editing, saving, pressing Escape, and dismissing through the backdrop. This is the actual service-created component.`),X$1(),W(7,`a`,117),je(8,`Open the full modal configurator`),X$1()()}if(o&2){let e=ue();M(3),wr(`Open `,e.entry().title.toLowerCase()),M(),me(e.entry().id===`modal-side`?4:-1)}}var dn=class o{route=f(Wn$1);routeData=Q6(this.route.data,{initialValue:this.route.snapshot.data});modals=f(fe$1);toasts=f(ft);entry=w(()=>e.find(r=>r.id===this.routeData().componentId)??e[0]);count=_(0);status=_(`Ready to try.`);fieldValue=_(``);showError=_(!1);fieldError=w(()=>this.showError()&&this.fieldValue().trim().length<3?`Enter at least three characters.`:void 0);name=new gS(`Blocks workspace`,{nonNullable:!0,validators:Sr.required});email=new gS(``,{nonNullable:!0,validators:Sr.email});volume=new gS(50,{nonNullable:!0});quantity=new gS(3,{nonNullable:!0});checked=new gS(!0,{nonNullable:!0});secondChecked=new gS(!1,{nonNullable:!0});disabledCheck=new gS({value:!1,disabled:!0},{nonNullable:!0});frequency=new gS(`weekly`,{nonNullable:!0});destination=new gS(`skopje`,{nonNullable:!0});enabled=new gS(!0,{nonNullable:!0});bannerVisible=_(!0);selectedTab=_(`overview`);tabsVariant=_(`segmented`);detailsDisabled=_(!1);showActivity=_(!0);tabNote=new gS(``,{nonNullable:!0});options=[{label:`Skopje`,value:`skopje`},{label:`Ohrid`,value:`ohrid`},{label:`Bitola`,value:`bitola`},{label:`Unavailable destination`,value:`unavailable`,disabled:!0}];contextMenu;activate(r){this.count.update(e=>e+1),this.status.set(`${r} \xB7 action ${this.count()}`)}updateField(r){this.fieldValue.set(r.target.value)}openContextMenu(r){r.preventDefault();let e=r.currentTarget.getBoundingClientRect();this.contextMenu?.open(new MouseEvent(`contextmenu`,{clientX:e.left+16,clientY:e.bottom+4}))}openModal(r){let e=r??(this.entry().id===`modal-side`?`right`:this.entry().id===`modal-bottom-sheet`?`bottom-sheet`:`center`);this.modals.open(Me,{data:{title:this.entry().title,description:`Edit the project name. The header, content, footer, backdrop and close behavior use the existing Blocks modal composition.`},header:{text:this.entry().title},style:{layout:e,hasBackdrop:!0,animate:!0,showCloseButton:!0}}).afterClosed().subscribe(t=>this.status.set(t.state===`confirm`?`Saved: ${t.data}`:`Dialog dismissed.`))}notify(r){let e={title:r===`success`?`Settings saved`:r===`warn`?`Review needed`:r===`danger`?`Action failed`:`Workspace update`,message:`This notification follows the application theme and appearance settings.`,durationInMs:4500};switch(r){case`success`:this.toasts.queueSuccess(e);break;case`info`:this.toasts.queueInfo(e);break;case`warn`:this.toasts.queueWarning(e);break;case`danger`:this.toasts.queueDanger(e)}this.status.set(`${r} notification queued.`)}static ɵfac=function(e){return new(e||o)};static ɵcmp=le$1({type:o,selectors:[[`app-component-demo`]],viewQuery:function(e,i){if(e&1&&Km(Sf,5),e&2){let t;Wu(t=Yu())&&(i.contextMenu=t.first)}},decls:73,vars:9,consts:[[`dropdown`,`bxDropdown`],[`dropdownActions`,``],[`contextActions`,``],[1,`component-page`],[1,`component-header`],[`routerLink`,`/components`,1,`back-link`],[1,`eyebrow`],[1,`description`],[1,`component-meta`],[`routerLink`,`/appearance`],[`aria-labelledby`,`preview-heading`,1,`demo-section`],[1,`section-heading`],[`id`,`preview-heading`],[`bxSurface`,``,1,`demo-stage`],[`example`,`signal-forms`],[`example`,`radio-group`],[`example`,`multi-select`],[`example`,`load-more`],[`example`,`loading-spinner`],[`example`,`loading-indicator`],[`example`,`progress-bar`],[`example`,`button-loading`],[`example`,`range-slider`],[`example`,`hint`],[`example`,`prefix`],[`example`,`suffix`],[`example`,`native-control`],[1,`demo-stack`],[1,`demo-stack`,`control-width`],[`example`,`select`],[1,`menu-preview`],[1,`demo-stack`,`banner-preview`],[`bxSurface`,``,1,`custom-surface`],[`role`,`status`,`aria-live`,`polite`,1,`action-status`],[`aria-labelledby`,`usage-heading`,1,`usage-section`],[`id`,`usage-heading`],[3,`textContent`],[`aria-label`,`Component documentation`,1,`documentation-section`],[3,`path`],[1,`demo-row`],[`bx-button`,``,`variant`,`filled`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`accent`,3,`click`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`disabled`],[`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`bx-button`,``,`variant`,`fab`,`aria-label`,`Add item`,3,`click`],[`name`,`plus`],[`label`,`Checked state`,3,`formControl`],[`label`,`Partial state`,3,`formControl`],[3,`checked`,`indeterminate`],[3,`checked`],[3,`indeterminate`],[`label`,`Receive product updates`,3,`formControl`],[`label`,`Include preview features`,3,`formControl`],[`label`,`Unavailable setting`,3,`formControl`],[`label`,`Project name`,`forId`,`field-preview`,3,`required`,`error`],[`bxSurface`,``,1,`native-control-surface`],[`id`,`field-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`bx-button`,``,`variant`,`tonal`,3,`click`],[`label`,`Project name`,3,`errorMessages`,`formControl`],[`label`,`Email address`,`type`,`email`,3,`errorMessages`,`formControl`],[`label`,`Team members`,`type`,`number`,3,`min`,`max`,`formControl`],[`label`,`Daily summary`,`name`,`frequency-demo`,`value`,`daily`,3,`formControl`],[`label`,`Weekly summary`,`name`,`frequency-demo`,`value`,`weekly`,3,`formControl`],[`label`,`Only important updates`,`name`,`frequency-demo`,`value`,`important`,3,`formControl`],[`for`,`volume-demo`],[`bxSlider`,``,`id`,`volume-demo`,`type`,`range`,`min`,`0`,`max`,`100`,3,`formControl`],[`for`,`disabled-volume`],[`bxSlider`,``,`id`,`disabled-volume`,`type`,`range`,`value`,`30`,`disabled`,``],[`label`,`Enable notifications`,3,`formControl`],[`label`,`Reference`,`forId`,`error-preview`],[`id`,`error-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`id`,`custom-error`],[`ariaLabel`,`Project information`,3,`selectedValueChange`,`variant`,`selectedValue`],[`label`,`Overview`,`value`,`overview`,`icon`,`book-open`],[`bxTabContent`,``],[`label`,`Details`,`value`,`details`,`color`,`accent`,`icon`,`badge-check`,`endIcon`,`chevron-right`,3,`disabled`],[`label`,`Activity`,`value`,`activity`,`color`,`info`,`textColor`,`text-warn`,`highlightColor`,`text-warn`,`contentColor`,`text-info`,`icon`,`activity`],[`label`,`Unavailable`,`value`,`unavailable`,3,`disabled`],[`label`,`Project note`,3,`formControl`],[`label`,`Duplicate project`,`icon`,`copy`,3,`action`],[`label`,`Archive project`,`icon`,`archive`,3,`action`],[`label`,`Unavailable action`,3,`disabled`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Open settings`,`icon`,`settings`,`endIcon`,`chevron-right`,3,`action`],[`label`,`Delete project`,`icon`,`trash-2`,3,`action`,`danger`],[`text`,`Your changes are saved automatically.`],[`routerLink`,`/components/tooltip-directive`],[`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`Saves the current project`,`placement`,`top`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`An optional hint revealed by touching and holding`,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`tooltip-hold-target`,3,`click`],[`bx-button`,``,`variant`,`icon`,`aria-label`,`More information`,`bxTooltip`,`Appearance settings apply to all components`,`bxTooltipTouch`,`tap`,`placement`,`bottom`],[`name`,`info`],[`bx-button`,``,`variant`,`filled`,`bxTransition`,`fade`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[`tabindex`,`0`,1,`context-target`,3,`bxContextMenu`],[`label`,`Copy selection`,`icon`,`copy`,3,`action`],[`label`,`Archive selection`,`icon`,`archive`,3,`action`],[3,`minimumBreadcrumbs`],[`routerLink`,`/components/button`],[1,`demo-row`,`icon-row`],[`name`,`sparkles`,`size`,`32`,`color`,`text-accent`,`ariaLabel`,`Highlights`,3,`decorative`],[`name`,`check-circle`,`size`,`32`,`color`,`text-success`],[`name`,`info`,`size`,`32`,`color`,`text-info`,`bgColor`,`auto`],[`name`,`triangle-alert`,`size`,`32`,`color`,`text-warn`],[`name`,`heart`,`size`,`40`,`color`,`text-danger`],[`routerLink`,`/icon-catalog`],[3,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`],[3,`close`,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`routerLink`,`/toastr`],[`name`,`layers`,`size`,`28`],[`routerLink`,`/modal`]],template:function(e,i){if(e&1&&(W(0,`article`,3)(1,`header`,4)(2,`a`,5),je(3,`All components`),X$1(),W(4,`p`,6),je(5),X$1(),W(6,`h1`),je(7),X$1(),W(8,`p`,7),je(9),X$1(),W(10,`div`,8)(11,`code`),je(12),X$1(),W(13,`a`,9),je(14,`Configure appearance globally`),X$1()()(),W(15,`section`,10)(16,`div`,11)(17,`h2`,12),je(18,`Interactive example`),X$1(),W(19,`span`),je(20,`Uses your active palette`),X$1()(),W(21,`div`,13),pe(22,Yn,1,0,`app-tag-examples`)(23,Kn,1,0,`app-truncation-examples`)(24,Zn,1,0,`app-form-examples`,14)(25,$n,1,0,`app-form-examples`,15)(26,ei,1,0,`app-form-examples`,16)(27,ti,1,0,`app-form-examples`,17)(28,ni,1,0,`app-form-examples`,18)(29,ii,1,0,`app-form-examples`,19)(30,ai,1,0,`app-form-examples`,20)(31,oi,1,0,`app-form-examples`,21)(32,ri,1,0,`app-form-examples`,22)(33,li,1,0,`app-form-examples`,23)(34,ci,1,0,`app-form-examples`,24)(35,si,1,0,`app-form-examples`,25)(36,di,1,0,`app-form-examples`,26)(37,mi,19,1,`div`,27)(38,pi,17,7,`div`,27)(39,ui,6,5,`div`,27)(40,gi,8,5,`div`,28)(41,bi,6,11,`div`,28)(42,_i,10,4,`fieldset`,27)(43,xi,1,0,`app-search-examples`)(44,yi,1,0,`app-form-examples`,29)(45,fi,11,2,`div`,28)(46,hi,5,3,`div`,27)(47,Ci,7,4,`div`,28)(48,Ei,17,9,`div`,27)(49,ki,4,1,`bx-menu`,30)(50,Mi,5,2,`bx-menu`,30)(51,Di,6,0,`div`,27)(52,Pi,10,0,`div`,27)(53,Oi,11,2,`div`,27)(54,Ii,7,1,`div`,27)(55,Fi,6,1,`div`,27)(56,Li,9,1,`div`,27)(57,Wi,5,1,`div`,31)(58,Ri,14,0,`div`,27)(59,Bi,12,0,`div`,27)(60,qi,8,0,`section`,32)(61,Ui,9,2,`div`,27),X$1(),W(62,`p`,33),je(63),X$1()(),W(64,`section`,34)(65,`h2`,35),je(66,`Quick usage`),X$1(),W(67,`pre`),Fe(68,`code`,36),X$1(),W(69,`pre`),Fe(70,`code`,36),X$1()(),W(71,`section`,37),Fe(72,`app-readme`,38),X$1()()),e&2){let t;M(5),tt(i.entry().group),M(2),tt(i.entry().title),M(2),tt(i.entry().description),M(3),tt(i.entry().selector),M(10),me((t=i.entry().id)===`tag`?22:t===`truncate`?23:t===`signal-forms`?24:t===`radio-group`?25:t===`multi-select`?26:t===`load-more`?27:t===`loading-spinner`?28:t===`loading-indicator`?29:t===`progress-bar`?30:t===`button-loading`?31:t===`range-slider`?32:t===`hint`?33:t===`prefix`?34:t===`suffix`?35:t===`native-control`?36:t===`button`?37:t===`checkbox-indicator`?38:t===`checkbox`?39:t===`form-field`?40:t===`input-field`?41:t===`radio`?42:t===`search-input`?43:t===`select`?44:t===`slider`?45:t===`slide-toggle`?46:t===`error`?47:t===`tabs`?48:t===`menu`?49:t===`menu-item`?50:t===`tooltip`?51:t===`tooltip-directive`?52:t===`dropdown`?53:t===`context-menu`?54:t===`breadcrumbs`?55:t===`icon`?56:t===`modal-banner`?57:t===`toast-core`?58:t===`simple-toast`?59:t===`surface`?60:61),M(41),tt(i.status()),M(5),fe(`textContent`,`import { `+i.entry().symbol+` } from '`+i.entry().package+`';`),M(2),fe(`textContent`,i.entry().example),M(2),fe(`path`,i.entry().readme)}},dependencies:[Hd,Ee,ke,Se,te,A9,XE,AP,M9,OP,If,Qn$2,We,Tf,Ti$1,Ue,J,Ye,Kl,Dx,Ex,Ef,kx,Sf,Qn$1,Nx,Wl,zl,X$2,_t,hn$1,V,q],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.component-page[_ngcontent-%COMP%] {
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem;
  color: var(--%NS%bx-text-primary);
}
.component-header[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
}
.back-link[_ngcontent-%COMP%] {
  display: inline-flex;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}
.eyebrow[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  margin: 0 0 0.5rem;
}
h1[_ngcontent-%COMP%] {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin: 0 0 0.75rem;
  line-height: 1.2;
}
h2[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  margin: 0;
}
h3[_ngcontent-%COMP%] {
  margin: 0;
}
.description[_ngcontent-%COMP%] {
  max-width: 48rem;
  color: var(--%NS%bx-text-secondary);
  line-height: 1.65;
  margin: 0 0 1rem;
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
pre[_ngcontent-%COMP%] {
  padding: 1rem;
  background: var(--%NS%bx-bg-surface);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
  overflow: auto;
  white-space: pre;
  font-size: 0.8125rem;
  line-height: 1.7;
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
  .component-page[_ngcontent-%COMP%] {
    padding: 1rem;
  }
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
}`]})};export{dn as ComponentDemo};