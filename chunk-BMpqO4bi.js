import{n as s,t as r}from"./chunk-C9yOwMO6.js";import{An as _,At as Q,Ci as zr,Cn as Yu,E as Ex,En as Za,Er as kx,Ft as Qm,G as If,It as Qn$1,J as Jn$1,Jn as et,K as Je,Kt as Sf,Lr as ne$1,Lt as RA,Mn as _t,Mr as me,O as Fe$1,On as Zl,Or as le$1,P as Gr,Pr as nD,R as Hd,Si as zl,Tt as Ox,Ut as S_,Vt as Rx,W as I9,Wr as pe,Xt as Te$1,Yn as f,Zn as fe,Zt as Tf,_n as XE,_r as je,_t as Nk,a as A9,ar as gS,b as Dx,br as jx,ci as w,ct as Lv,dn as Wl,dr as hn$1,dt as M9,en as U_,et as Kl,ft as Me,gi as ye,gn as X$1,gt as NP,hn as Wu,ht as N9,i as $u,in as Ut,it as LP,j as Ga,jt as Q6,k as Fk,kt as Pv,li as wn$1,ln as W,lt as Lx,mt as N$1,n as $e,ni as tt,nn as Uk,oi as us,ot as Lk,p as Br,pn as Wn$1,qn as er,qr as q0,qt as Sr,ri as ue,rn as Us,rr as g,s as AP,t as $_,tt as Km,ui as wr,ut as M,vi as z0,vn as Xa,vr as jr,w as Ef,xn as Ya,xr as k9,xt as OP,yi as z_,yt as Nx,zr as of}from"./chunk-DQTC9SUR.js";import{C as Va,D as za,E as lt,O as e,S as Ra,T as lr,_ as Ia,a as Ue,b as Oi$1,c as Ze,d as Aa,f as Da,g as Ha,h as Fa,i as Ke,k as X$2,l as en,m as Ea,n as Ge,o as Xe,p as De,r as J,s as Ye,u as nn$1,v as La,w as Zn$1,x as Pa,y as Ni$1}from"./main-2QOMNNZQ.js";import{a as nn$2,i as fe$1,o as tn$1,r as en$1,t as V}from"./chunk-CRjzmzFF.js";import{n as q}from"./chunk-BLjMr5wS.js";import{n as ft}from"./chunk-JpJ-Qu9-.js";var Ht=[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Success`,value:`success`},{label:`Danger`,value:`danger`},{label:`Info`,value:`info`},{label:`Warning`,value:`warn`},{label:`Neutral`,value:`neutral`}];var Xt=[{label:`Tonal`,value:`tonal`},{label:`Filled`,value:`filled`},{label:`Outlined`,value:`outlined`}];var Qt={en:{tagLabel:`Skopje`,tagTooltip:`A translated location tag`,loadMore:`Load more locations`,loading:`Loading locations`,retry:`Retry request`,searchLabel:`Find a component`,searchPlaceholder:`Try menu`,searchLoading:`Searching components`,searchClear:`Clear search`,searchEmpty:`No components match your search.`,searchError:`The search request failed. Retry to search again.`,project:`Project name`,selectAll:`Select all locations`,allLocations:`All locations`,locationsSelected:`{count} locations selected`},mk:{tagLabel:`Скопје`,tagTooltip:`Преведена ознака за локација`,loadMore:`Вчитај повеќе локации`,loading:`Се вчитуваат локации`,retry:`Обиди се повторно`,searchLabel:`Најди компонента`,searchPlaceholder:`Пробај menu`,searchLoading:`Се пребаруваат компоненти`,searchClear:`Исчисти пребарување`,searchEmpty:`Нема компоненти за ова пребарување.`,searchError:`Пребарувањето не успеа. Обиди се повторно.`,project:`Име на проект`,selectAll:`Избери ги сите локации`,allLocations:`Сите локации`,locationsSelected:`{count} избрани локации`}};var N=class a{language=_(`en`);version=_(0);translate(r,e){let t=Qt[this.language()]?.[r]??r;for(let[o,s]of Object.entries(e??{}))t=t.replaceAll(`{${o}}`,String(s));return t}toggle(){this.language.update(r=>r===`en`?`mk`:`en`),this.version.update(r=>r+1)}static ɵfac=function(e){return new(e||a)};static ɵprov=N$1({token:a,factory:a.ɵfac})};var Jt=`<span bxTruncate #overflow="bxTruncate"
    [bxTooltip]="label() | bxTruncatedText: overflow.truncated()"
    [attr.tabindex]="overflow.truncated() ? 0 : null"
    bxTooltipTouch="longpress">{{ label() }}</span>`;var Yt=`<bx-tag [text]="label()" [tooltipOnTruncate]="false" tooltip="My application tooltip" />
<bx-input-field [label]="label()" [tooltipOnTruncate]="false" />
<bx-select label="Location" [options]="options()" [tooltipOnTruncate]="false" />`;var Kt=`import { TruncateDirective, TruncatedTextPipe, TooltipDirective, truncatedText } from '@filip.mazev/blocks/primitives';

// Read the exported directive's truncated() and text() signals in your own logic.
const tooltip = truncatedText(label(), overflow.truncated(), automaticTooltips());

// Application-wide form default; individual controls can override it.
formSettings.update({ tooltipOnTruncate: false });`;var ln=()=>[0];var te=class a{text=_(`A long location name that can be truncated`);width=_(14);enabled=_(!0);largeText=_(!1);automaticTooltips=_(!0);customTooltip=_(!1);menuActions=_(0);label=w(()=>String(this.text()??``));options=w(()=>[{label:this.label(),value:0}]);pipeExample=Jt;customExample=Yt;logicExample=Kt;previewWidth=w(()=>{let r=Number(this.width());return Number.isFinite(r)?Math.max(4,Math.min(64,r)):14});static ɵfac=function(e){return new(e||a)};static ɵcmp=le$1({type:a,selectors:[[`app-truncation-examples`]],decls:96,vars:55,consts:[[`overflow`,`bxTruncate`],[`aria-label`,`Conditional truncation tooltips`,1,`truncation-demo`],[1,`truncation-controls`],[`label`,`Text`,`subscriptSizing`,`dynamic`,3,`valueChange`,`value`],[`label`,`Available width (rem)`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`max`,`value`],[`role`,`group`,`aria-label`,`Preview options`,1,`truncation-switches`],[`label`,`Enable text truncation`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Larger text preview`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Automatic tooltips`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Custom tooltip`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[1,`component-examples`],[1,`preview-card`,`text-preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Text preview`,1,`preview-stage`],[1,`text-example`,`example-width`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,3,`bxTruncate`,`bxTooltip`],[1,`preview-caption`],[1,`preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Tag preview`,1,`preview-stage`],[1,`example-width`],[`leadingIcon`,`map-pin`,3,`text`,`tooltipOnTruncate`,`tooltip`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Input field preview`,1,`preview-stage`],[`placeholder`,`Editable value`,`subscriptSizing`,`dynamic`,3,`label`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Search value preview`,1,`preview-stage`],[`ariaLabel`,`Search value`,`subscriptSizing`,`dynamic`,3,`search`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Select preview`,1,`preview-stage`],[`subscriptSizing`,`dynamic`,3,`label`,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Multiselect preview`,1,`preview-stage`],[`label`,`Selected tag`,`selectionDisplay`,`tags`,`subscriptSizing`,`dynamic`,3,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Menu item preview`,1,`preview-stage`],[3,`action`,`label`,`wrapLabel`,`tooltipOnTruncate`],[3,`textContent`]],template:function(e,t){if(e&1){let o=us();W(0,`section`,1)(1,`h3`),je(2,`Shared truncation, optional tooltips`),X$1(),W(3,`p`)(4,`code`),je(5,`TruncateDirective`),X$1(),je(6,` owns ellipsis and rendered measurement. The pure `),W(7,`code`),je(8,`bxTruncatedText`),X$1(),je(9,` pipe selects text for a conditional tooltip. Use the exported directive signals or `),W(10,`code`),je(11,`truncatedText()`),X$1(),je(12,` helper in your own logic.`),X$1(),W(13,`div`,2)(14,`bx-input-field`,3),z_(`valueChange`,function(v){return Br(o),Nk(t.text,v)||(t.text=v),jr(v)}),X$1(),W(15,`bx-input-field`,4),z_(`valueChange`,function(v){return Br(o),Nk(t.width,v)||(t.width=v),jr(v)}),X$1()(),W(16,`div`,5)(17,`bx-checkbox`,6),z_(`checkedChange`,function(v){return Br(o),Nk(t.enabled,v)||(t.enabled=v),jr(v)}),X$1(),W(18,`bx-checkbox`,7),z_(`checkedChange`,function(v){return Br(o),Nk(t.largeText,v)||(t.largeText=v),jr(v)}),X$1(),W(19,`bx-checkbox`,8),z_(`checkedChange`,function(v){return Br(o),Nk(t.automaticTooltips,v)||(t.automaticTooltips=v),jr(v)}),X$1(),W(20,`bx-checkbox`,9),z_(`checkedChange`,function(v){return Br(o),Nk(t.customTooltip,v)||(t.customTooltip=v),jr(v)}),X$1()(),W(21,`div`,10)(22,`section`,11)(23,`h4`),je(24,`Text preview`),X$1(),W(25,`div`,12)(26,`div`,13)(27,`span`,14,0),Za(29,`bxTruncatedText`),je(30),X$1()()(),W(31,`output`,15),je(32),X$1()(),W(33,`section`,16)(34,`h4`),je(35,`Tag`),X$1(),W(36,`div`,17)(37,`div`,18),Fe$1(38,`bx-tag`,19),X$1()(),W(39,`p`,15),je(40,`Clipped labels use an automatic or application-owned tooltip.`),X$1()(),W(41,`section`,16)(42,`h4`),je(43,`Input field`),X$1(),W(44,`div`,20)(45,`div`,18),Fe$1(46,`bx-input-field`,21),X$1()(),W(47,`p`,15),je(48,`The floating label shares the truncation measurement.`),X$1()(),W(49,`section`,16)(50,`h4`),je(51,`Search value`),X$1(),W(52,`div`,22)(53,`div`,18)(54,`bx-search-input`,23),Me(`search`,function(v){return t.text.set(v)}),X$1()()(),W(55,`p`,15),je(56,`Editing the search updates the shared example text.`),X$1()(),W(57,`section`,16)(58,`h4`),je(59,`Select`),X$1(),W(60,`div`,24)(61,`div`,18),Fe$1(62,`bx-select`,25),X$1()(),W(63,`p`,15),je(64,`Selected values and captions share the same available width.`),X$1()(),W(65,`section`,16)(66,`h4`),je(67,`Multiselect`),X$1(),W(68,`div`,26)(69,`div`,18),Fe$1(70,`bx-multi-select`,27),X$1()(),W(71,`p`,15),je(72,`The selected tag follows the owning control's tooltip setting.`),X$1()(),W(73,`section`,16)(74,`h4`),je(75,`Menu item`),X$1(),W(76,`div`,28)(77,`div`,18)(78,`bx-menu`)(79,`bx-menu-item`,29),Me(`action`,function(){return t.menuActions.set(t.menuActions()+1)}),X$1()()()(),W(80,`output`,15),je(81),X$1()()(),W(82,`p`),je(83,`Change the text or width to switch between clipped and fitting labels. Turn automatic tooltips off to retain ellipsis and measurement for custom feedback. Hover, keyboard focus, and touch-and-hold use the existing tooltip mechanism. Explicit tag descriptions still take precedence. Custom tooltip applies to the text and tag examples. Preview panels keep their size; long wrapped content scrolls inside them. Example widths are capped by the available space in each card.`),X$1(),W(84,`h3`),je(85,`Short conditional tooltip`),X$1(),W(86,`pre`),Fe$1(87,`code`,30),X$1(),W(88,`h3`),je(89,`Disable automatic tooltips`),X$1(),W(90,`pre`),Fe$1(91,`code`,30),X$1(),W(92,`h3`),je(93,`Use the public API in your application`),X$1(),W(94,`pre`),Fe$1(95,`code`,30),X$1()()}if(e&2){let o=Ya(28);M(14),$_(`value`,t.text),M(),fe(`min`,4)(`max`,64),$_(`value`,t.width),M(2),$_(`checked`,t.enabled),M(),$_(`checked`,t.largeText),M(),$_(`checked`,t.automaticTooltips),M(),$_(`checked`,t.customTooltip),M(6),et(`inline-size`,t.previewWidth(),`rem`),ne$1(`large-text`,t.largeText()),M(),fe(`bxTruncate`,t.enabled())(`bxTooltip`,t.customTooltip()?`My application tooltip`:Xa(29,50,t.label(),o.truncated(),t.automaticTooltips())),ye(`tabindex`,t.customTooltip()||t.automaticTooltips()&&o.truncated()?0:null),M(3),tt(t.label()),M(2),wr(`Text `,o.truncated()?`is truncated`:`fits without truncation`,`.`),M(5),et(`inline-size`,t.previewWidth(),`rem`),M(),fe(`text`,t.label())(`tooltipOnTruncate`,t.automaticTooltips())(`tooltip`,t.customTooltip()?`My application tooltip`:void 0),M(7),et(`inline-size`,t.previewWidth(),`rem`),M(),fe(`label`,t.label())(`tooltipOnTruncate`,t.automaticTooltips()),M(7),et(`inline-size`,t.previewWidth(),`rem`),M(),fe(`value`,t.label())(`tooltipOnTruncate`,t.automaticTooltips()),M(7),et(`inline-size`,t.previewWidth(),`rem`),M(),fe(`label`,t.label())(`options`,t.options())(`value`,0)(`tooltipOnTruncate`,t.automaticTooltips()),M(7),et(`inline-size`,t.previewWidth(),`rem`),M(),fe(`options`,t.options())(`value`,Lk(54,ln))(`tooltipOnTruncate`,t.automaticTooltips()),M(7),et(`inline-size`,t.previewWidth(),`rem`),M(2),fe(`label`,t.label())(`wrapLabel`,!t.enabled())(`tooltipOnTruncate`,t.automaticTooltips()),M(2),wr(`Menu activations: `,t.menuActions()),M(6),fe(`textContent`,t.pipeExample),M(4),fe(`textContent`,t.customExample),M(4),fe(`textContent`,t.logicExample)}},dependencies:[Zn$1,Ni$1,Ze,jx,Oi$1,Dx,Ex,Lx,Qn$1,Jn$1,Us],styles:[`
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
}`]})};var cn=()=>({key:`tagTooltip`});var sn=()=>({key:`tagLabel`});var Ce=class a{translations=f(N);label=_(`Skopje`);text=w(()=>String(this.label()??``));color=_(`accent`);variant=_(`tonal`);disabled=_(!1);leadingIcon=_(!0);trailingIcon=_(!0);leadingCount=_(!1);trailingCount=_(!0);leftNumber=_(3);rightNumber=_(12);colors=Ht;variants=Xt;static ɵfac=function(e){return new(e||a)};static ɵcmp=le$1({type:a,selectors:[[`app-tag-examples`]],features:[Ut([N,{provide:$e,useExisting:N}])],decls:24,vars:28,consts:[[1,`tag-demo`],[`aria-label`,`Tag previews`,1,`tag-previews`],[3,`text`,`color`,`variant`,`disabled`,`leadingIcon`,`trailingIcon`,`leadingNumber`,`trailingNumber`,`locale`,`tooltip`],[`color`,`info`,`variant`,`filled`,`ariaLabel`,`42 locations`,`tooltip`,`Number-only tag`,3,`leadingNumber`],[`leadingIcon`,`map-pin`,`color`,`success`,3,`text`],[`text`,`Unavailable`,`color`,`neutral`,3,`disabled`],[`text`,`Skopje`],[`text`,`+2`,`tooltip`,`Ohrid, Bitola`],[1,`tag-controls`],[`label`,`Tag text`,3,`valueChange`,`value`],[`label`,`Color`,3,`valueChange`,`options`,`value`],[`label`,`Appearance`,3,`valueChange`,`options`,`value`],[`label`,`Leading number`,`type`,`number`,3,`valueChange`,`value`],[`label`,`Trailing number`,`type`,`number`,3,`valueChange`,`value`],[`label`,`Leading icon`,3,`checkedChange`,`checked`],[`label`,`Trailing icon`,3,`checkedChange`,`checked`],[`label`,`Leading number`,3,`checkedChange`,`checked`],[`label`,`Trailing number`,3,`checkedChange`,`checked`],[`label`,`Disabled appearance`,3,`checkedChange`,`checked`],[`bx-button`,``,`type`,`button`,3,`click`]],template:function(e,t){e&1&&(W(0,`div`,0)(1,`div`,1),Fe$1(2,`bx-tag`,2)(3,`bx-tag`,3)(4,`bx-tag`,4)(5,`bx-tag`,5)(6,`bx-tag`,6)(7,`bx-tag`,7),X$1(),W(8,`div`,8)(9,`bx-input-field`,9),z_(`valueChange`,function(s){return Nk(t.label,s)||(t.label=s),s}),X$1(),W(10,`bx-select`,10),z_(`valueChange`,function(s){return Nk(t.color,s)||(t.color=s),s}),X$1(),W(11,`bx-select`,11),z_(`valueChange`,function(s){return Nk(t.variant,s)||(t.variant=s),s}),X$1(),W(12,`bx-input-field`,12),z_(`valueChange`,function(s){return Nk(t.leftNumber,s)||(t.leftNumber=s),s}),X$1(),W(13,`bx-input-field`,13),z_(`valueChange`,function(s){return Nk(t.rightNumber,s)||(t.rightNumber=s),s}),X$1(),W(14,`bx-checkbox`,14),z_(`checkedChange`,function(s){return Nk(t.leadingIcon,s)||(t.leadingIcon=s),s}),X$1(),W(15,`bx-checkbox`,15),z_(`checkedChange`,function(s){return Nk(t.trailingIcon,s)||(t.trailingIcon=s),s}),X$1(),W(16,`bx-checkbox`,16),z_(`checkedChange`,function(s){return Nk(t.leadingCount,s)||(t.leadingCount=s),s}),X$1(),W(17,`bx-checkbox`,17),z_(`checkedChange`,function(s){return Nk(t.trailingCount,s)||(t.trailingCount=s),s}),X$1(),W(18,`bx-checkbox`,18),z_(`checkedChange`,function(s){return Nk(t.disabled,s)||(t.disabled=s),s}),X$1()(),W(19,`button`,19),Me(`click`,function(){return t.translations.toggle()}),je(20),X$1(),W(21,`p`),je(22,`Hover or keyboard-focus a tooltip tag. In a select trigger, the parent control exposes the complete selection while overflow tags show the remaining names on hover.`),X$1(),Fe$1(23,`app-truncation-examples`),X$1()),e&2&&(M(2),fe(`text`,t.text())(`color`,t.color()??`accent`)(`variant`,t.variant()??`tonal`)(`disabled`,t.disabled())(`leadingIcon`,t.leadingIcon()?`map-pin`:void 0)(`trailingIcon`,t.trailingIcon()?`chevron-right`:void 0)(`leadingNumber`,t.leadingCount()?t.leftNumber():null)(`trailingNumber`,t.trailingCount()?t.rightNumber():null)(`locale`,t.translations.language())(`tooltip`,Lk(26,cn)),M(),fe(`leadingNumber`,42),M(),fe(`text`,Lk(27,sn)),M(),fe(`disabled`,!0),M(4),$_(`value`,t.label),M(),fe(`options`,t.colors),$_(`value`,t.color),M(),fe(`options`,t.variants),$_(`value`,t.variant),M(),$_(`value`,t.leftNumber),M(),$_(`value`,t.rightNumber),M(),$_(`checked`,t.leadingIcon),M(),$_(`checked`,t.trailingIcon),M(),$_(`checked`,t.leadingCount),M(),$_(`checked`,t.trailingCount),M(),$_(`checked`,t.disabled),M(2),wr(`Language: `,t.translations.language()))},dependencies:[Lx,If,Zn$1,Ni$1,Oi$1,te],styles:[`
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
}`]})};var Fe={project:``,email:``,password:``,confirmation:``,teamSize:null,destination:``,categories:[],plan:``,terms:!1,notifications:!1,note:``,budget:50};var we=[{label:`Skopje`,value:`skopje`,group:`North Macedonia`},{label:`Ohrid`,value:`ohrid`,group:`North Macedonia`},{label:`Bitola`,value:`bitola`,group:`North Macedonia`},{label:`London`,value:`london`,group:`Europe`},{label:`Paris`,value:`paris`,group:`Europe`},{label:`Berlin`,value:`berlin`,group:`Europe`},{label:`Amsterdam`,value:`amsterdam`,group:`Europe`},{label:`Vienna`,value:`vienna`,group:`Europe`,disabled:!0},{label:`Prague`,value:`prague`,group:`Europe`},{label:`Barcelona`,value:`barcelona`,group:`Europe`},{label:`Copenhagen`,value:`copenhagen`,group:`Europe`},{label:`Stockholm`,value:`stockholm`,group:`Europe`},{label:`Lisbon`,value:`lisbon`,group:`Europe`},{label:`Rome`,value:`rome`,group:`Europe`},{label:`Athens`,value:`athens`,group:`Europe`},{label:`New York`,value:`new-york`,group:`Americas`},{label:`San Francisco`,value:`san-francisco`,group:`Americas`},{label:`Toronto`,value:`toronto`,group:`Americas`},{label:`Vancouver`,value:`vancouver`,group:`Americas`},{label:`Buenos Aires`,value:`buenos-aires`,group:`Americas`},{label:`Tokyo`,value:`tokyo`,group:`Asia`},{label:`Singapore`,value:`singapore`,group:`Asia`},{label:`Seoul`,value:`seoul`,group:`Asia`},{label:`Sydney`,value:`sydney`,group:`Oceania`}];var Zt={minLength:({params:a})=>`Use at least ${a.minLength} characters for the project name.`};var $t=[{label:`1 location`,value:1},{label:`3 locations`,value:3},{label:`12 locations`,value:12},{label:`All 24 locations`,value:24}];function X(a,r){return new Promise((e,t)=>{let o=()=>{clearTimeout(s),t(new DOMException(`Request cancelled`,`AbortError`))},s=setTimeout(()=>{r?.removeEventListener(`abort`,o),e()},a);r?.aborted?o():r?.addEventListener(`abort`,o,{once:!0})})}var ne=class a{async options(r,e,t,o,s){if(await X(800,s),o)throw new Error(`The mock request failed. Retry to load this page.`);let Me=we.filter(rn=>String(rn.label).toLocaleLowerCase().includes(r.toLocaleLowerCase())),Ae=Me.slice(e,e+t);return{items:Ae,hasMore:e+Ae.length<Me.length,total:Me.length}}async available(r,e){return await X(650,e),![`blocks`,`taken`,`admin`].includes(r.trim().toLocaleLowerCase())}async save(r){return await X(900),!r.email.includes(`server-error`)}static ɵfac=function(e){return new(e||a)};static ɵprov=N$1({token:a,factory:a.ɵfac,providedIn:`root`})};var re=class a{api=f(ne);options=_([]);loading=_(!1);hasMore=_(!0);error=_(void 0);query=_(``);pageSize=_(3);failNext=_(!1);requests=_([]);config=_({buttonMode:`auto`,text:{key:`loadMore`},loadingText:{key:`loading`},retryText:{key:`retry`},variant:`tonal`,color:`accent`});requestId=0;controller;constructor(){f(Q).onDestroy(()=>this.controller?.abort()),this.load({source:`button`})}async load(r){if(this.loading()||!this.hasMore()&&!this.error())return;this.controller?.abort();let e=new AbortController,t=++this.requestId,o=this.failNext();this.controller=e,this.failNext.set(!1),this.loading.set(!0),this.error.set(void 0),this.record(`${r.source}: requesting ${this.pageSize()} items at offset ${this.options().length}`);try{let s=await this.api.options(this.query(),this.options().length,this.pageSize(),o,e.signal);if(t!==this.requestId)return;this.options.update(v=>[...v,...s.items]),this.hasMore.set(s.hasMore),this.record(`success: ${s.items.length} items received`)}catch(s){if(t!==this.requestId||e.signal.aborted)return;this.error.set(s instanceof Error?s.message:`Request failed.`),this.record(`failed: items retained; retry is available`)}finally{t===this.requestId&&this.loading.set(!1)}}search(r){this.controller?.abort(),++this.requestId,this.loading.set(!1),this.query.set(r),this.options.set([]),this.hasMore.set(!0),this.error.set(void 0),this.load({source:`button`})}fail(){this.failNext.set(!0),this.load({source:`button`})}record(r){this.requests.update(e=>[r,...e].slice(0,8))}static ɵfac=function(e){return new(e||a)};static ɵprov=N$1({token:a,factory:a.ɵfac})};var mn=()=>({key:`project`});var tn=()=>({key:`allLocations`});var nn=()=>({key:`locationsSelected`});var Le=()=>({key:`loading`});var dn=()=>({key:`selectAll`});var pn=(a,r)=>r.value;function un(a,r){if(a&1&&(W(0,`li`),je(1),X$1()),a&2){let e=r.$implicit;M(),U_(``,e.kind,`: `,e.message||`Uses the field message resolver`)}}function gn(a,r){if(a&1){let e=us();W(0,`div`,1)(1,`form`,3)(2,`bx-input-field`,4),q0(),X$1(),W(3,`bx-input-field`,5),q0(),X$1(),W(4,`div`,6)(5,`bx-input-field`,7),q0(),X$1(),W(6,`bx-input-field`,8),q0(),W(7,`bx-error`),je(8),X$1()()(),W(9,`bx-input-field`,9),q0(),W(10,`span`,10),je(11,`people`),X$1()(),W(12,`bx-select`,11),q0(),X$1(),W(13,`bx-multi-select`,12),q0(),X$1(),W(14,`bx-radio-group`,13),q0(),Fe$1(15,`bx-radio`,14)(16,`bx-radio`,15),X$1(),W(17,`bx-checkbox`,16),q0(),X$1(),W(18,`bx-slide-toggle`,17),q0(),X$1(),W(19,`bx-input-field`,18),q0(),X$1(),W(20,`label`,19),je(21,`Budget`),X$1(),W(22,`input`,20),q0(),X$1(),W(23,`div`,21)(24,`button`,22),Fe$1(25,`bx-icon`,23),je(26,`Save project`),X$1(),W(27,`button`,24),Me(`click`,function(){Br(e);let o=ue();return jr(o.validateAll())}),je(28,`Validate all`),X$1(),W(29,`button`,24),Me(`click`,function(){Br(e);let o=ue();return jr(o.resetForm())}),je(30,`Reset form`),X$1(),W(31,`button`,24),Me(`click`,function(){Br(e);let o=ue();return jr(o.populate())}),je(32,`Fill valid data`),X$1()(),W(33,`div`,21)(34,`button`,24),Me(`click`,function(){Br(e);let o=ue();return jr(o.locked.set(!o.locked()))}),je(35,`Toggle disabled form`),X$1(),W(36,`button`,24),Me(`click`,function(){Br(e);let o=ue();return jr(o.readOnly.set(!o.readOnly()))}),je(37,`Toggle readonly fields`),X$1(),W(38,`button`,24),Me(`click`,function(){Br(e);let o=ue();return jr(o.policy.set(o.policy()===`touched`?`always`:`touched`))}),je(39),X$1()()(),W(40,`aside`,25)(41,`p`,26),je(42),X$1(),W(43,`dl`)(44,`dt`),je(45,`Valid`),X$1(),W(46,`dd`),je(47),X$1(),W(48,`dt`),je(49,`Invalid`),X$1(),W(50,`dd`),je(51),X$1(),W(52,`dt`),je(53,`Pending`),X$1(),W(54,`dd`),je(55),X$1(),W(56,`dt`),je(57,`Submitting`),X$1(),W(58,`dd`),je(59),X$1(),W(60,`dt`),je(61,`Touched`),X$1(),W(62,`dd`),je(63),X$1(),W(64,`dt`),je(65,`Dirty`),X$1(),W(66,`dd`),je(67),X$1()(),W(68,`pre`),je(69),Za(70,`json`),X$1(),W(71,`ul`),zr(72,un,2,2,`li`,null,Ga),X$1()()()}if(a&2){let e=ue();M(),fe(`formRoot`,e.registration),M(),fe(`label`,Lk(51,mn))(`formField`,e.registration.project)(`errorMessages`,e.projectMessages)(`errorPolicy`,e.policy()),z0(),M(),fe(`formField`,e.registration.email)(`errorPolicy`,e.policy()),z0(),M(2),fe(`formField`,e.registration.password)(`errorPolicy`,e.policy()),z0(),M(),fe(`formField`,e.registration.confirmation)(`errorPolicy`,e.policy()),z0(),M(2),tt(e.registration.confirmation().errors()[0]?.message||`Please confirm your password.`),M(),fe(`formField`,e.registration.teamSize)(`errorPolicy`,e.policy()),z0(),M(3),fe(`readOnly`,e.readOnly())(`options`,e.options)(`isSearchable`,!0)(`formField`,e.registration.destination)(`errorPolicy`,e.policy()),z0(),M(),fe(`readOnly`,e.readOnly())(`isSearchable`,!0)(`allSelectedText`,Lk(52,tn))(`selectedCountText`,Lk(53,nn))(`options`,e.options)(`formField`,e.registration.categories)(`errorPolicy`,e.policy()),z0(),M(),fe(`formField`,e.registration.plan)(`errorPolicy`,e.policy()),z0(),M(3),fe(`formField`,e.registration.terms)(`errorPolicy`,e.policy()),z0(),M(),fe(`formField`,e.registration.notifications),z0(),M(),fe(`multiline`,!0)(`formField`,e.registration.note)(`errorPolicy`,e.policy()),z0(),M(3),fe(`discrete`,!0)(`formField`,e.registration.budget),z0(),M(2),fe(`disabled`,!e.canSubmit())(`loading`,e.registration().submitting()),M(10),ye(`aria-pressed`,e.locked()),M(2),ye(`aria-pressed`,e.readOnly()),M(3),wr(`Errors: `,e.policy()),M(3),tt(e.status()),M(5),tt(e.registration().valid()),M(4),tt(e.registration().invalid()),M(4),tt(e.registration().pending()),M(4),tt(e.registration().submitting()),M(4),tt(e.registration().touched()),M(4),tt(e.registration().dirty()),M(2),tt(Uk(70,49,e.model())),M(3),Gr(e.registration().errorSummary())}}function _n(a,r){if(a&1){let e=us();W(0,`div`,27)(1,`bx-select`,37),z_(`valueChange`,function(o){Br(e);let s=ue(2);return Nk(s.destination,o)||(s.destination=o),jr(o)}),Me(`loadMore`,function(o){Br(e);let s=ue(2);return jr(s.remote.load(o))})(`search`,function(o){Br(e);let s=ue(2);return jr(s.remote.search(o))}),X$1(),W(2,`bx-checkbox`,38),z_(`checkedChange`,function(o){Br(e);let s=ue(2);return Nk(s.useTags,o)||(s.useTags=o),jr(o)}),X$1()()}if(a&2){let e=ue(2);M(),fe(`selectionDisplay`,e.useTags()?`tags`:`text`)(`loadingLabel`,e.searchLoadingText()?Lk(12,Le):void 0)(`searchValue`,e.remote.query())(`options`,e.remote.options())(`isSearchable`,!0)(`externalFiltering`,!0)(`loading`,e.remote.loading())(`hasMore`,e.remote.hasMore())(`loadError`,e.remote.error())(`loadMoreConfig`,e.remote.config()),$_(`value`,e.destination),M(),$_(`checked`,e.useTags)}}function bn(a,r){if(a&1){let e=us();W(0,`div`,27)(1,`bx-multi-select`,39),z_(`valueChange`,function(o){Br(e);let s=ue(2);return Nk(s.selected,o)||(s.selected=o),jr(o)}),Me(`loadMore`,function(o){Br(e);let s=ue(2);return jr(s.remote.load(o))})(`search`,function(o){Br(e);let s=ue(2);return jr(s.remote.search(o))})(`selectAllIntentChange`,function(o){Br(e);let s=ue(2);return jr(s.recordIntent(o))})(`selectionChange`,function(o){Br(e);let s=ue(2);return jr(s.recordSelection(o))}),X$1(),W(2,`bx-checkbox`,40),z_(`checkedChange`,function(o){Br(e);let s=ue(2);return Nk(s.useTags,o)||(s.useTags=o),jr(o)}),X$1()()}if(a&2){let e=ue(2);M(),fe(`selectionDisplay`,e.useTags()?`tags`:`text`)(`visibleTagCount`,e.visibleTagLimit())(`loadingLabel`,e.searchLoadingText()?Lk(18,Le):void 0)(`searchValue`,e.remote.query())(`summaryThreshold`,e.summaryLimit())(`allSelectedText`,Lk(19,tn))(`selectedCountText`,Lk(20,nn))(`options`,e.remote.options())(`isSearchable`,!0)(`externalFiltering`,!0)(`loading`,e.remote.loading())(`hasMore`,e.remote.hasMore())(`loadError`,e.remote.error())(`loadMoreConfig`,e.remote.config()),$_(`value`,e.selected),fe(`selectAllLabel`,Lk(21,dn))(`selectionScope`,e.remote.query()),M(),$_(`checked`,e.useTags)}}function xn(a,r){if(a&1&&(W(0,`li`),je(1),X$1()),a&2){let e=r.$implicit;M(),tt(e.label)}}function yn(a,r){a&1&&(W(0,`div`,42),Fe$1(1,`bx-loading-indicator`,43),X$1()),a&2&&(M(),fe(`size`,16)(`label`,Lk(2,Le)))}function fn(a,r){a&1&&(W(0,`p`),je(1,`No locations match.`),X$1())}function vn(a,r){if(a&1){let e=us();W(0,`div`,41,0),Me(`loadMore`,function(o){Br(e);let s=ue(2);return jr(s.remote.load(o))}),W(2,`ul`),zr(3,xn,2,1,`li`,null,pn),X$1(),pe(5,yn,2,3,`div`,42),pe(6,fn,2,0,`p`),X$1()}if(a&2){let e=Ya(1),t=ue(2);fe(`loadMoreHasMore`,t.remote.hasMore())(`loadMoreLoading`,t.remote.loading())(`loadMoreError`,t.remote.error())(`loadMoreConfig`,t.remote.config())(`loadMoreRevision`,t.remote.options()),M(3),Gr(t.remote.options()),M(2),me(t.remote.loading()&&!e.actionVisible()?5:-1),M(),me(!t.remote.loading()&&!t.remote.options().length&&!t.remote.error()?6:-1)}}function hn(a,r){if(a&1){let e=us();W(0,`bx-input-field`,44),Me(`valueChange`,function(o){Br(e);let s=ue(2);return jr(s.changeVisibleTags(o))}),X$1(),W(1,`bx-input-field`,45),Me(`valueChange`,function(o){Br(e);let s=ue(2);return jr(s.changeSummaryLimit(o))}),X$1()}if(a&2){let e=ue(2);fe(`min`,1)(`value`,e.visibleTagLimit()),M(),fe(`min`,2)(`value`,e.summaryLimit())}}function Cn(a,r){if(a&1&&(W(0,`li`),je(1),X$1()),a&2){let e=r.$implicit;M(),tt(e)}}function wn(a,r){if(a&1&&(W(0,`li`),je(1),X$1()),a&2){let e=r.$implicit;M(),tt(e)}}function Sn(a,r){if(a&1&&(W(0,`ul`,36),zr(1,wn,2,1,`li`,null,Ga),X$1()),a&2){let e=ue(2);M(),Gr(e.events())}}function En(a,r){if(a&1){let e=us();W(0,`div`,2),pe(1,_n,3,13,`div`,27)(2,bn,3,22,`div`,27)(3,vn,7,7,`div`,28),W(4,`div`,29)(5,`div`,30)(6,`button`,31),Me(`click`,function(){Br(e);let o=ue();return jr(o.remote.fail())}),je(7,`Fail next page now`),X$1(),W(8,`button`,32),Me(`click`,function(){Br(e);let o=ue();return jr(o.remote.search(``))}),je(9,`Reset pages`),X$1()(),W(10,`div`,33),pe(11,hn,2,4),W(12,`bx-select`,34),Me(`selectionChange`,function(o){Br(e);let s=ue();return jr(s.changePageSize(o.value))}),X$1()()(),W(13,`p`,26),je(14),X$1(),W(15,`p`),je(16,`Small pages show the button without a scrollbar. More items enable scrolling. Failure retains existing items and reveals Retry request.`),X$1(),W(17,`ul`,35),zr(18,Cn,2,1,`li`,null,Ga),X$1(),pe(20,Sn,3,0,`ul`,36),X$1()}if(a&2){let e=ue();M(),me(e.example()===`select`?1:e.example()===`multi-select`?2:3),M(5),fe(`disabled`,e.remote.loading()||!e.remote.hasMore()),M(2),fe(`disabled`,e.remote.loading()),M(3),me(e.example()===`multi-select`?11:-1),M(),fe(`options`,e.pageSizes)(`value`,e.remote.pageSize()),M(2),tt(e.remote.loading()?`Loading: the request takes 800ms.`:e.remote.error()?`Failed: use Retry request at the bottom.`:e.remote.hasMore()?`Ready to load more.`:`All pages loaded.`),M(4),Gr(e.remote.requests()),M(2),me(e.example()===`multi-select`?20:-1)}}function Tn(a,r){a&1&&Fe$1(0,`bx-progress-bar`,50)}function Mn(a,r){if(a&1){let e=us();W(0,`div`,2)(1,`div`,21),Fe$1(2,`bx-loading-spinner`,46)(3,`bx-loading-spinner`,47)(4,`bx-loading-indicator`,48),X$1(),Fe$1(5,`bx-progress-bar`,49),pe(6,Tn,1,0,`bx-progress-bar`,50),W(7,`div`,21)(8,`button`,51),Me(`click`,function(){Br(e);let o=ue();return jr(o.runAction())}),Fe$1(9,`bx-icon`,52),je(10,`Save with icon`),X$1(),W(11,`button`,53),Me(`click`,function(){Br(e);let o=ue();return jr(o.runAction())}),je(12,`Save without icon`),X$1(),W(13,`button`,54),Me(`click`,function(){Br(e);let o=ue();return jr(o.runAction())}),Fe$1(14,`bx-icon`,23),X$1()(),W(15,`p`,26),je(16),X$1()()}if(a&2){let e=ue();M(3),fe(`size`,32),M(2),fe(`value`,e.progress()),M(),me(e.loadingAction()?6:-1),M(2),fe(`loading`,e.loadingAction()),M(3),fe(`loading`,e.loadingAction()),M(2),fe(`loading`,e.loadingAction()),M(3),tt(e.loadingAction()?`Saving with fake API requests…`:`Ready. Buttons restore their original icons after loading.`)}}function kn(a,r){if(a&1){let e=us();W(0,`div`,2)(1,`bx-range-slider`,55),z_(`valueChange`,function(o){Br(e);let s=ue();return Nk(s.range,o)||(s.range=o),jr(o)}),X$1(),W(2,`output`),je(3),Za(4,`json`),X$1()()}if(a&2){let e=ue();M(),$_(`value`,e.range),fe(`discrete`,!0)(`showTickMarks`,!0)(`step`,10),M(2),tt(Uk(4,5,e.range()))}}function Dn(a,r){if(a&1){let e=us();W(0,`div`,2)(1,`bx-input-field`,56)(2,`span`,57),je(3,`#`),X$1(),W(4,`span`,10),je(5,`ID`),X$1()(),W(6,`bx-form-field`,58)(7,`textarea`,59),q0(),z_(`ngModelChange`,function(o){Br(e);let s=ue();return Nk(s.templateValue,o)||(s.templateValue=o),jr(o)}),X$1(),W(8,`bx-hint`),je(9,`Native controls share the accessible frame.`),X$1()(),W(10,`bx-input-field`,60),q0(),X$1(),W(11,`output`),je(12),X$1(),W(13,`form`,61),Me(`ngSubmit`,function(){Br(e);let o=ue();return jr(o.captureSubmit())}),W(14,`bx-input-field`,62),q0(),X$1(),W(15,`button`,63),je(16,`Commit reactive form`),X$1(),W(17,`output`),je(18),X$1()(),W(19,`bx-input-field`,64),q0(),z_(`ngModelChange`,function(o){Br(e);let s=ue();return Nk(s.templateValue,o)||(s.templateValue=o),jr(o)}),X$1(),W(20,`output`),je(21),X$1()()}if(a&2){let e=ue();M(7),$_(`ngModel`,e.templateValue),z0(),M(3),fe(`formControl`,e.blurControl),z0(),M(2),wr(`Reactive model: `,e.blurControl.value),M(),fe(`formGroup`,e.submitForm),M(),z0(),M(4),wr(`Submitted: `,e.submitSnapshot()),M(),$_(`ngModel`,e.templateValue),z0(),M(2),wr(`Template model: `,e.templateValue())}}var Se=class a{api=f(ne);remote=f(re);model=_(s(r({},Fe),{categories:[]}));locked=_(!1);readOnly=_(!1);policy=_(`touched`);status=_(`Complete the form to submit.`);events=_([]);selected=_([]);destination=_(null);useTags=_(!1);visibleTagLimit=_(1);searchLoadingText=_(!1);summaryLimit=_(2);range=_([20,80]);loadingAction=_(!1);progress=_(0);blurControl=new gS(``,{nonNullable:!0,updateOn:`blur`});submitForm=new of({name:new gS(``,{nonNullable:!0,updateOn:`submit`})});submitSnapshot=_(``);templateValue=_(``);pageSizes=$t;options=we;projectMessages=Zt;registration=lr(this.model,r=>{La(r.project,{message:`Enter a project name.`}),Aa(r.project,3),Fa(r.project,{params:({value:e})=>e(),debounce:300,factory:e=>nD({params:e,loader:({params:t,abortSignal:o})=>this.api.available(t,o)}),onSuccess:e=>e?null:{kind:`taken`,message:`That project name is already used. Try another.`},onError:()=>({kind:`availability`,message:`Availability could not be checked.`})}),La(r.email,{message:`Email is required.`}),Pa(r.email,{message:`Enter a valid email address.`}),La(r.password),Aa(r.password,8,{message:`Use at least eight characters.`}),La(r.confirmation),De(r.confirmation,({value:e,valueOf:t})=>e()===t(r.password)?null:{kind:`mismatch`,message:`Passwords must match.`}),La(r.teamSize),Ia(r.teamSize,1),Ra(r.teamSize,20),La(r.destination),La(r.categories),La(r.plan),La(r.terms,{message:`Accept the terms to continue.`}),La(r.note,{when:({valueOf:e})=>e(r.notifications),message:`Add a notification note.`}),Va(r.note,`blur`),Ea(r,()=>this.locked()),Da(r.email,()=>this.readOnly())},{submission:{ignoreValidators:`none`,action:async r=>await this.api.save(r().value())?(this.status.set(`Saved successfully.`),null):{kind:`server`,message:`The server rejected this email. Edit it and retry.`,fieldTree:r.email},onInvalid:r=>{this.status.set(`Review the validation messages.`),r().errorSummary()[0]?.fieldTree().focusBoundControl()}}});canSubmit=w(()=>this.registration().valid()&&!this.registration().submitting()&&!this.locked());validationStatus=w(()=>this.registration().pending()?`Checking availability`:this.registration().valid()?`Ready to submit`:`Needs attention`);example=g(`signal-forms`);constructor(){Te$1(()=>{this.status.set(this.validationStatus())})}validateAll(){this.registration().markAsTouched(),this.registration().errorSummary()[0]?.fieldTree().focusBoundControl()}resetForm(){this.registration().reset(s(r({},Fe),{categories:[]}))}populate(){this.model.set({project:`My workspace`,email:`person@example.com`,password:`long-password`,confirmation:`long-password`,teamSize:3,destination:`skopje`,categories:[`ohrid`],plan:`team`,terms:!0,notifications:!1,note:``,budget:50})}recordIntent(r){this.events.update(e=>[`select-all: ${r.selected}, ${r.reason}, scope=${r.scope||`all`}, loaded=${r.values.length}`,...e].slice(0,8))}recordSelection(r){this.events.update(e=>[`selection: ${r.source}, ${r.value.length} values`,...e].slice(0,8))}changeVisibleTags(r){this.visibleTagLimit.set(Math.max(1,Number(r)||1))}changeSummaryLimit(r){this.summaryLimit.set(Math.max(2,Number(r)||2))}captureSubmit(){this.submitSnapshot.set(this.submitForm.getRawValue().name)}changePageSize(r){this.remote.pageSize.set(r??3),this.remote.search(this.remote.query())}async runAction(){this.loadingAction()||(this.loadingAction.set(!0),this.progress.set(15),await this.api.available(`demo`,new AbortController().signal),this.progress.set(70),await this.api.save(this.model()),this.progress.set(100),this.loadingAction.set(!1))}static ɵfac=function(e){return new(e||a)};static ɵcmp=le$1({type:a,selectors:[[`app-form-examples`]],inputs:{example:[1,`example`]},features:[Ut([re,N,{provide:$e,useExisting:N}])],decls:5,vars:1,consts:[[`standalonePagination`,`bxLoadMore`],[1,`form-demo-layout`],[1,`async-demo`],[1,`registration-form`,3,`formRoot`],[`hint`,`Try blocks or taken to see the async validator.`,3,`label`,`formField`,`errorMessages`,`errorPolicy`],[`label`,`Email`,`type`,`email`,`hint`,`Use server-error@example.com to simulate a rejected submission.`,3,`formField`,`errorPolicy`],[1,`form-row`],[`label`,`Password`,`type`,`password`,`autocomplete`,`new-password`,3,`formField`,`errorPolicy`],[`label`,`Confirm password`,`type`,`password`,`autocomplete`,`new-password`,3,`formField`,`errorPolicy`],[`label`,`Team size`,`type`,`number`,`hint`,`Between 1 and 20.`,3,`formField`,`errorPolicy`],[`bxSuffix`,``,`aria-hidden`,`true`],[`label`,`Destination`,3,`readOnly`,`options`,`isSearchable`,`formField`,`errorPolicy`],[`label`,`Related locations`,3,`readOnly`,`isSearchable`,`allSelectedText`,`selectedCountText`,`options`,`formField`,`errorPolicy`],[`label`,`Plan`,3,`formField`,`errorPolicy`],[`label`,`Personal`,`value`,`personal`],[`label`,`Team`,`value`,`team`],[`label`,`Accept the terms`,3,`formField`,`errorPolicy`],[`label`,`Enable notifications`,3,`formField`],[`label`,`Notification note`,`hint`,`Required with notifications. Model updates on blur.`,3,`multiline`,`formField`,`errorPolicy`],[`for`,`budget-example`],[`bxSlider`,``,`id`,`budget-example`,`type`,`range`,3,`discrete`,`formField`],[1,`actions`],[`bx-button`,``,`type`,`submit`,`variant`,`filled`,3,`disabled`,`loading`],[`name`,`save`,`size`,`20`],[`bx-button`,``,`type`,`button`,3,`click`],[`aria-label`,`Form state`,1,`state-panel`],[`role`,`status`],[1,`selection-row`],[`role`,`region`,`aria-label`,`Paginated locations`,`tabindex`,`0`,`bxLoadMore`,``,1,`paged-collection`,3,`loadMoreHasMore`,`loadMoreLoading`,`loadMoreError`,`loadMoreConfig`,`loadMoreRevision`],[1,`actions`,`pagination-actions`],[1,`pagination-buttons`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[1,`pagination-options`],[`label`,`Page size`,`subscriptSizing`,`dynamic`,1,`page-size-control`,3,`selectionChange`,`options`,`value`],[`aria-label`,`Request events`,1,`event-log`],[`aria-label`,`Selection events`,1,`event-log`],[`label`,`Location`,`subscriptSizing`,`dynamic`,3,`valueChange`,`loadMore`,`search`,`selectionDisplay`,`loadingLabel`,`searchValue`,`options`,`isSearchable`,`externalFiltering`,`loading`,`hasMore`,`loadError`,`loadMoreConfig`,`value`],[`label`,`Show selected tag`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Locations`,`subscriptSizing`,`dynamic`,3,`valueChange`,`loadMore`,`search`,`selectAllIntentChange`,`selectionChange`,`selectionDisplay`,`visibleTagCount`,`loadingLabel`,`searchValue`,`summaryThreshold`,`allSelectedText`,`selectedCountText`,`options`,`isSearchable`,`externalFiltering`,`loading`,`hasMore`,`loadError`,`loadMoreConfig`,`value`,`selectAllLabel`,`selectionScope`],[`label`,`Show selected tags`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`role`,`region`,`aria-label`,`Paginated locations`,`tabindex`,`0`,`bxLoadMore`,``,1,`paged-collection`,3,`loadMore`,`loadMoreHasMore`,`loadMoreLoading`,`loadMoreError`,`loadMoreConfig`,`loadMoreRevision`],[1,`collection-loading`],[3,`size`,`label`],[`label`,`Visible tags`,`type`,`number`,`subscriptSizing`,`dynamic`,1,`visible-tag-control`,3,`valueChange`,`min`,`value`],[`label`,`Summary threshold`,`type`,`number`,`subscriptSizing`,`dynamic`,1,`summary-threshold-control`,3,`valueChange`,`min`,`value`],[`label`,`Loading preview`],[`label`,`Larger loading preview`,3,`size`],[`label`,`Fetching workspaces`],[`label`,`Save progress`,3,`value`],[`mode`,`indeterminate`,`label`,`Saving project`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,3,`click`,`loading`],[`name`,`save`,`size`,`24`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`loading`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`aria-label`,`Save project`,3,`click`,`loading`],[`label`,`Budget range`,3,`valueChange`,`value`,`discrete`,`showTickMarks`,`step`],[`label`,`Reference`,`appearance`,`outline`,`hint`,`A visible hint`,`hintEnd`,`Optional`],[`bxPrefix`,``,`aria-hidden`,`true`],[`label`,`Native multiline field`],[`bxInput`,``,`label`,`Native multiline field`,`rows`,`3`,3,`ngModelChange`,`ngModel`],[`label`,`Reactive blur update`,`hint`,`Edit and blur repeatedly; every edit reaches the model.`,3,`formControl`],[3,`ngSubmit`,`formGroup`],[`label`,`Reactive submit update`,`formControlName`,`name`],[`bx-button`,``,`type`,`submit`],[`label`,`Template-driven field`,3,`ngModelChange`,`ngModel`]],template:function(e,t){e&1&&pe(0,gn,74,54,`div`,1)(1,En,21,8,`div`,2)(2,Mn,17,7,`div`,2)(3,kn,5,7,`div`,2)(4,Dn,22,7,`div`,2),e&2&&me(t.example()===`signal-forms`||t.example()===`radio-group`?0:t.example()===`select`||t.example()===`multi-select`||t.example()===`load-more`?1:t.example()===`loading-spinner`||t.example()===`loading-indicator`||t.example()===`progress-bar`||t.example()===`button-loading`?2:t.example()===`range-slider`?3:4)},dependencies:[k9,N9,XE,M9,I9,NP,Pv,A9,OP,Lv,LP,za,Ha,If,Kl,Zl,Zn$1,Tf,Ni$1,lt,Ze,en,Ye,Ge,Ue,nn$1,Oi$1,J,Xe,Ke,Rx,er,Ox,_t,RA],styles:[`
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
}`]})};var le=class a{query=_(``);completedQuery=_(``);results=_([]);loading=_(!1);error=_(void 0);requests=_([]);controller;constructor(){f(Q).onDestroy(()=>this.controller?.abort()),this.search(``)}async search(r,e$1=!1){this.controller?.abort();let t=new AbortController;this.controller=t,this.query.set(r),this.loading.set(!0),this.error.set(void 0);try{if(await X(250,t.signal),this.record(`Request: ${r||`(all components)`}`),await X(800,t.signal),t.signal.aborted)return;if(e$1)throw new Error(`Simulated request failure`);let o=r.trim().toLocaleLowerCase(),s=e.map(v=>v.title).filter(v=>v.toLocaleLowerCase().includes(o));this.results.set(s),this.completedQuery.set(r),this.record(`Success: ${s.length} results`)}catch{if(t.signal.aborted)return;this.error.set({key:`searchError`}),this.record(`Failed: previous results retained; retry the same query`)}finally{this.controller===t&&this.loading.set(!1)}}record(r){this.requests.update(e=>[r,...e].slice(0,8))}static ɵfac=function(e){return new(e||a)};static ɵprov=N$1({token:a,factory:a.ɵfac})};var Pn=()=>({key:`searchLabel`});var Vn=()=>({key:`searchPlaceholder`});var on=()=>({key:`searchLoading`});var On=()=>({key:`searchClear`});var Nn=()=>({key:`retry`});function In(a,r){if(a&1&&(W(0,`li`),je(1),X$1()),a&2){let e=r.$implicit;M(),tt(e)}}function Fn(a,r){if(a&1&&(W(0,`li`,9),je(1),X$1()),a&2){let e=ue(2);M(),tt(e.emptyText())}}function Ln(a,r){if(a&1&&pe(0,Fn,2,1,`li`,9),a&2){let e=ue();me(!e.remote.loading()&&!e.remote.error()?0:-1)}}function An(a,r){if(a&1&&(W(0,`li`),je(1),X$1()),a&2){let e=r.$implicit;M(),tt(e)}}var Ee=class a{i18n=f(N);remote=f(le);showLoadingText=_(!1);readOnly=_(!1);disabled=_(!1);emptyText=w(()=>(this.i18n.version(),this.i18n.translate(`searchEmpty`)));retryConfig={variant:`tonal`,color:`accent`};changeLoadingText(r){this.showLoadingText.set(r),r&&!this.remote.loading()&&!this.readOnly()&&!this.disabled()&&this.remote.search(this.remote.query())}static ɵfac=function(e){return new(e||a)};static ɵcmp=le$1({type:a,selectors:[[`app-search-examples`]],features:[Ut([le,N,{provide:$e,useExisting:N}])],decls:20,vars:26,consts:[[1,`search-demo`],[`subscriptSizing`,`dynamic`,3,`search`,`retry`,`label`,`placeholder`,`value`,`loading`,`loadError`,`loadingLabel`,`loadingAriaLabel`,`clearLabel`,`retryLabel`,`retryConfig`,`readOnly`,`disabled`],[1,`search-actions`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`label`,`Show loading text`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Readonly`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Disabled`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`aria-label`,`Search results`,1,`search-results`],[`aria-label`,`Request events`,1,`search-events`],[`role`,`status`]],template:function(e,t){e&1&&(W(0,`div`,0)(1,`bx-search-input`,1),Me(`search`,function(s){return t.remote.search(s)})(`retry`,function(s){return t.remote.search(s)}),X$1(),W(2,`div`,2)(3,`button`,3),Me(`click`,function(){return t.remote.search(t.remote.query(),!0)}),je(4,`Fail this search`),X$1(),W(5,`bx-checkbox`,4),Me(`checkedChange`,function(s){return t.changeLoadingText(s)}),X$1(),W(6,`bx-checkbox`,5),z_(`checkedChange`,function(s){return Nk(t.readOnly,s)||(t.readOnly=s),s}),X$1(),W(7,`bx-checkbox`,6),z_(`checkedChange`,function(s){return Nk(t.disabled,s)||(t.disabled=s),s}),X$1()(),W(8,`p`),je(9,`Requests debounce for 250ms and take 800ms. Type quickly to cancel older requests, or enter an unmatched term for empty results. Failure keeps the last successful results. Use Retry request to try the same query again. Enabling Show loading text previews another request.`),X$1(),W(10,`section`,7)(11,`p`),je(12),X$1(),W(13,`ul`),zr(14,In,2,1,`li`,null,$u,!1,Ln,1,1),X$1()(),W(17,`ul`,8),zr(18,An,2,1,`li`,null,Ga),X$1()()),e&2&&(M(),fe(`label`,Lk(20,Pn))(`placeholder`,Lk(21,Vn))(`value`,t.remote.query())(`loading`,t.remote.loading())(`loadError`,t.remote.error())(`loadingLabel`,t.showLoadingText()?Lk(22,on):void 0)(`loadingAriaLabel`,Lk(23,on))(`clearLabel`,Lk(24,On))(`retryLabel`,Lk(25,Nn))(`retryConfig`,t.retryConfig)(`readOnly`,t.readOnly())(`disabled`,t.disabled()),M(2),fe(`disabled`,t.remote.loading()||t.disabled()||t.readOnly()),M(2),fe(`checked`,t.showLoadingText()),M(),$_(`checked`,t.readOnly),M(),$_(`checked`,t.disabled),M(3),ye(`aria-busy`,t.remote.loading()),M(2),U_(`Last completed search: `,t.remote.completedQuery()||`all components`,` · `,t.remote.results().length,` results`),M(2),Gr(t.remote.results()),M(4),Gr(t.remote.requests()))},dependencies:[If,Zn$1,jx],styles:[`
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
}`]})};function zn(a,r){if(a&1&&(W(0,`div`)(1,`strong`),je(2),X$1()()),a&2){let e=ue();M(2),tt(e.data.title)}}function Rn(a,r){if(a&1){let e=us();W(0,`div`,4)(1,`button`,5),Me(`click`,function(){Br(e);let o=ue();return jr(o.close())}),je(2,`Cancel`),X$1(),W(3,`button`,6),Me(`click`,function(){Br(e);let o=ue();return jr(o.confirm())}),je(4,`Save changes`),X$1()()}}var Te=class a extends en$1{name=new gS(`Blocks workspace`,{nonNullable:!0});confirm(){this.modal.close(`confirm`,this.name.value)}static ɵfac=(()=>{let r;return function(t){return(r||(r=wn$1(a)))(t||a)}})();static ɵcmp=le$1({type:a,selectors:[[`app-component-dialog`]],features:[Je],decls:6,vars:2,consts:[[4,`appModalHeader`],[1,`dialog-body`],[`label`,`Project name`,3,`formControl`],[`class`,`dialog-actions`,4,`appModalFooter`],[1,`dialog-actions`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(e,t){e&1&&(S_(0,zn,3,1,`div`,0),W(1,`div`,1)(2,`p`),je(3),X$1(),W(4,`bx-input-field`,2),q0(),X$1()(),S_(5,Rn,5,0,`div`,3)),e&2&&(M(3),tt(t.data.description),M(),fe(`formControl`,t.name),z0())},dependencies:[If,Ni$1,A9,M9,OP,nn$2,tn$1],styles:[`
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
}`]})};var Bn=()=>({required:`Enter a project name.`});var Wn=()=>({email:`Enter a valid email address.`});var qn=()=>({name:`settings`});var jn=a=>({text:`Project settings`,icon:a});function Un(a,r){a&1&&Fe$1(0,`app-tag-examples`)}function Gn(a,r){a&1&&Fe$1(0,`app-truncation-examples`)}function Hn(a,r){a&1&&Fe$1(0,`app-form-examples`,14)}function Xn(a,r){a&1&&Fe$1(0,`app-form-examples`,15)}function Qn(a,r){a&1&&Fe$1(0,`app-form-examples`,16)}function Jn(a,r){a&1&&Fe$1(0,`app-form-examples`,17)}function Yn(a,r){a&1&&Fe$1(0,`app-form-examples`,18)}function Kn(a,r){a&1&&Fe$1(0,`app-form-examples`,19)}function Zn(a,r){a&1&&Fe$1(0,`app-form-examples`,20)}function $n(a,r){a&1&&Fe$1(0,`app-form-examples`,21)}function ei(a,r){a&1&&Fe$1(0,`app-form-examples`,22)}function ti(a,r){a&1&&Fe$1(0,`app-form-examples`,23)}function ni(a,r){a&1&&Fe$1(0,`app-form-examples`,24)}function ii(a,r){a&1&&Fe$1(0,`app-form-examples`,25)}function oi(a,r){a&1&&Fe$1(0,`app-form-examples`,26)}function ai(a,r){if(a&1){let e=us();W(0,`div`,27)(1,`div`,39)(2,`button`,40),Me(`click`,function(){Br(e);let o=ue();return jr(o.activate(`Primary action`))}),je(3,`Primary action`),X$1(),W(4,`button`,41),Me(`click`,function(){Br(e);let o=ue();return jr(o.activate(`Tonal action`))}),je(5,`Tonal`),X$1(),W(6,`button`,42),Me(`click`,function(){Br(e);let o=ue();return jr(o.activate(`Text action`))}),je(7,`Text`),X$1(),W(8,`button`,43),je(9,`Disabled`),X$1()(),W(10,`div`,39)(11,`button`,44),Me(`click`,function(){Br(e);let o=ue();return jr(o.activate(`Success`))}),je(12,`Success`),X$1(),W(13,`button`,45),Me(`click`,function(){Br(e);let o=ue();return jr(o.activate(`Warning`))}),je(14,`Warning`),X$1(),W(15,`button`,46),Me(`click`,function(){Br(e);let o=ue();return jr(o.activate(`Delete`))}),je(16,`Delete`),X$1(),W(17,`button`,47),Me(`click`,function(){Br(e);let o=ue();return jr(o.activate(`Add item`))}),Fe$1(18,`bx-icon`,48),X$1()()()}a&2&&(M(8),fe(`disabled`,!0))}function ri(a,r){if(a&1&&(W(0,`div`,27)(1,`bx-checkbox`,49),q0(),X$1(),W(2,`bx-checkbox`,50),q0(),X$1(),W(3,`bx-checkbox`,51),q0(),X$1(),W(4,`output`),je(5),X$1()()),a&2){let e=ue();M(),fe(`formControl`,e.checked),z0(),M(),fe(`formControl`,e.secondChecked),z0(),M(),fe(`formControl`,e.disabledCheck),z0(),M(2),U_(`Updates: `,e.checked.value?`on`:`off`,` · Previews: `,e.secondChecked.value?`on`:`off`)}}function li(a,r){if(a&1){let e=us();W(0,`div`,28)(1,`bx-form-field`,52)(2,`span`,53)(3,`input`,54),Me(`input`,function(o){Br(e);let s=ue();return jr(s.updateField(o))})(`blur`,function(){Br(e);let o=ue();return jr(o.showError.set(!0))}),X$1()()(),W(4,`button`,55),Me(`click`,function(){Br(e);let o=ue();return jr(o.showError.set(!0))}),je(5,`Validate name`),X$1(),W(6,`output`),je(7),X$1()()}if(a&2){let e=ue();M(),fe(`required`,!0)(`error`,e.fieldError()),M(2),fe(`value`,e.fieldValue()),ye(`aria-invalid`,!!e.fieldError()),M(4),wr(`Value: `,e.fieldValue()||`empty`)}}function ci(a,r){if(a&1&&(W(0,`div`,28)(1,`bx-input-field`,56),q0(),X$1(),W(2,`bx-input-field`,57),q0(),X$1(),W(3,`bx-input-field`,58),q0(),X$1(),W(4,`output`),je(5),X$1()()),a&2){let e=ue();M(),fe(`errorMessages`,Lk(9,Bn))(`formControl`,e.name),z0(),M(),fe(`errorMessages`,Lk(10,Wn))(`formControl`,e.email),z0(),M(),fe(`min`,1)(`max`,20)(`formControl`,e.quantity),z0(),M(2),U_(``,e.name.value,` · `,e.quantity.value,` members`)}}function si(a,r){if(a&1){let e=us();W(0,`fieldset`,27)(1,`legend`),je(2,`Notification frequency`),X$1(),W(3,`bx-radio`,59),q0(),X$1(),W(4,`bx-radio`,60),q0(),X$1(),W(5,`bx-radio`,61),q0(),X$1(),W(6,`output`),je(7),X$1(),W(8,`button`,42),Me(`click`,function(){Br(e);let o=ue();return jr(o.frequency.reset())}),je(9,`Reset frequency`),X$1()()}if(a&2){let e=ue();M(3),fe(`formControl`,e.frequency),z0(),M(),fe(`formControl`,e.frequency),z0(),M(),fe(`formControl`,e.frequency),z0(),M(2),wr(`Selected: `,e.frequency.value)}}function mi(a,r){a&1&&Fe$1(0,`app-search-examples`)}function di(a,r){a&1&&Fe$1(0,`app-form-examples`,29)}function pi(a,r){if(a&1){let e=us();W(0,`div`,28)(1,`label`,62),je(2,`Volume`),X$1(),W(3,`input`,63),q0(),X$1(),W(4,`output`),je(5),X$1(),W(6,`button`,42),Me(`click`,function(){Br(e);let o=ue();return jr(o.volume.setValue(50))}),je(7,`Reset volume`),X$1(),W(8,`label`,64),je(9,`Unavailable range`),X$1(),Fe$1(10,`input`,65),X$1()}if(a&2){let e=ue();M(3),fe(`formControl`,e.volume),z0(),M(2),wr(``,e.volume.value,`%`)}}function ui(a,r){if(a&1&&(W(0,`div`,27)(1,`bx-slide-toggle`,66),q0(),X$1(),W(2,`bx-slide-toggle`,51),q0(),X$1(),W(3,`output`),je(4),X$1()()),a&2){let e=ue();M(),fe(`formControl`,e.enabled),z0(),M(),fe(`formControl`,e.disabledCheck),z0(),M(2),wr(`Notifications are `,e.enabled.value?`enabled`:`disabled`,`.`)}}function gi(a,r){if(a&1&&(W(0,`bx-error`,69),je(1),X$1()),a&2){let e=ue(2);M(),tt(e.fieldError())}}function _i(a,r){if(a&1){let e=us();W(0,`div`,28)(1,`bx-form-field`,67)(2,`span`,53)(3,`input`,68),Me(`input`,function(o){Br(e);let s=ue();return jr(s.updateField(o))})(`blur`,function(){Br(e);let o=ue();return jr(o.showError.set(!0))}),X$1()(),pe(4,gi,2,1,`bx-error`,69),X$1(),W(5,`button`,55),Me(`click`,function(){Br(e);let o=ue();return jr(o.showError.set(!0))}),je(6,`Validate reference`),X$1()()}if(a&2){let e=ue();M(3),fe(`value`,e.fieldValue()),ye(`aria-invalid`,!!e.fieldError())(`aria-describedby`,e.fieldError()?`custom-error`:null),M(),me(e.fieldError()?4:-1)}}function bi(a,r){if(a&1&&(W(0,`p`),je(1,`Keep related information together while showing one panel at a time.`),X$1(),W(2,`bx-input-field`,76),q0(),X$1()),a&2){let e=ue(2);M(2),fe(`formControl`,e.tabNote),z0()}}function xi(a,r){a&1&&(W(0,`p`),je(1,`Headers support arrow keys, Home and End. Panel content is created only when selected.`),X$1())}function yi(a,r){a&1&&(W(0,`bx-tab`,74)(1,`p`),je(2,`No recent project activity.`),X$1()())}function fi(a,r){if(a&1){let e=us();W(0,`div`,27)(1,`bx-tabs`,70),z_(`selectedValueChange`,function(o){Br(e);let s=ue();return Nk(s.selectedTab,o)||(s.selectedTab=o),jr(o)}),W(2,`bx-tab`,71),S_(3,bi,3,1,`ng-template`,72),X$1(),W(4,`bx-tab`,73),S_(5,xi,2,0,`ng-template`,72),X$1(),pe(6,yi,3,0,`bx-tab`,74),Fe$1(7,`bx-tab`,75),X$1(),W(8,`div`,39)(9,`button`,55),Me(`click`,function(){Br(e);let o=ue();return jr(o.tabsVariant.set(o.tabsVariant()===`segmented`?`underline`:`segmented`))}),je(10,`Underline appearance`),X$1(),W(11,`button`,55),Me(`click`,function(){Br(e);let o=ue();return jr(o.detailsDisabled.set(!o.detailsDisabled()))}),je(12,`Disable details`),X$1(),W(13,`button`,55),Me(`click`,function(){Br(e);let o=ue();return jr(o.showActivity.set(!o.showActivity()))}),je(14,`Show activity`),X$1()(),W(15,`output`),je(16),X$1()()}if(a&2){let e=ue();M(),fe(`variant`,e.tabsVariant()),$_(`selectedValue`,e.selectedTab),M(3),fe(`disabled`,e.detailsDisabled()),M(2),me(e.showActivity()?6:-1),M(),fe(`disabled`,!0),M(2),ye(`aria-pressed`,e.tabsVariant()===`underline`),M(2),ye(`aria-pressed`,e.detailsDisabled()),M(2),ye(`aria-pressed`,e.showActivity()),M(3),wr(`Selected: `,e.selectedTab())}}function vi(a,r){if(a&1){let e=us();W(0,`bx-menu`,30)(1,`bx-menu-item`,77),Me(`action`,function(){Br(e);let o=ue();return jr(o.activate(`Project duplicated`))}),X$1(),W(2,`bx-menu-item`,78),Me(`action`,function(){Br(e);let o=ue();return jr(o.activate(`Project archived`))}),X$1(),Fe$1(3,`bx-menu-item`,79),X$1()}a&2&&(M(3),fe(`disabled`,!0))}function hi(a,r){if(a&1){let e=us();W(0,`bx-menu`,30)(1,`bx-menu-item`,80),Me(`action`,function(){Br(e);let o=ue();return jr(o.activate(`Copy link`))}),X$1(),W(2,`bx-menu-item`,81),Me(`action`,function(){Br(e);let o=ue();return jr(o.activate(`Open settings`))}),X$1(),W(3,`bx-menu-item`,82),Me(`action`,function(){Br(e);let o=ue();return jr(o.activate(`Delete requested`))}),X$1(),Fe$1(4,`bx-menu-item`,79),X$1()}a&2&&(M(3),fe(`danger`,!0),M(),fe(`disabled`,!0))}function Ci(a,r){a&1&&(W(0,`div`,27),Fe$1(1,`bx-tooltip`,83),W(2,`p`),je(3,`Standalone tooltip content. Use the trigger directive for positioned help.`),X$1(),W(4,`a`,84),je(5,`Try the tooltip trigger`),X$1()())}function wi(a,r){if(a&1){let e=us();W(0,`div`,27)(1,`div`,39)(2,`button`,85),Me(`click`,function(){Br(e);let o=ue();return jr(o.activate(`Saved`))}),je(3,`Save project`),X$1(),W(4,`button`,86),Me(`click`,function(){Br(e);let o=ue();return jr(o.activate(`Normal tap activated`))}),je(5,`Hold for a hint`),X$1(),W(6,`button`,87),Fe$1(7,`bx-icon`,88),X$1()(),W(8,`p`),je(9,`Hover with a mouse or use keyboard focus for hints. On touch screens, Save project activates immediately, Hold for a hint supports a long press, and the information button opens help on tap.`),X$1()()}}function Si(a,r){if(a&1){let e=us();W(0,`bx-menu`)(1,`bx-menu-item`,91),Me(`action`,function(){Br(e),ue();let o=Ya(2);return ue().activate(`Project duplicated`),jr(o.close())}),X$1(),W(2,`bx-menu-item`,92),Me(`action`,function(){Br(e),ue();let o=Ya(2);return ue().activate(`Project archived`),jr(o.close())}),X$1(),W(3,`bx-menu-item`,93),Me(`action`,function(){Br(e),ue();let o=Ya(2);return ue().activate(`Delete requested`),jr(o.close())}),X$1()()}a&2&&(M(3),fe(`danger`,!0))}function Ei(a,r){if(a&1&&(W(0,`div`,27)(1,`button`,89,0),je(3,`Project actions `),Fe$1(4,`bx-icon`,90),X$1(),S_(5,Si,4,1,`ng-template`,null,1,Qm),W(7,`output`),je(8),X$1(),W(9,`p`),je(10,`Open, close, or reopen while the menu fades. Its contents keep their full size throughout.`),X$1()()),a&2){let e=Ya(2),t=Ya(6);M(),fe(`bxDropdown`,t),M(7),wr(`Transition: `,e.state())}}function Ti(a,r){if(a&1){let e=us();W(0,`bx-menu`)(1,`bx-menu-item`,95),Me(`action`,function(){Br(e);let o=ue(2);return jr(o.activate(`Selection copied`))}),X$1(),W(2,`bx-menu-item`,96),Me(`action`,function(){Br(e);let o=ue(2);return jr(o.activate(`Selection archived`))}),X$1()()}}function Mi(a,r){if(a&1){let e=us();W(0,`div`,27)(1,`div`,94),je(2,`Right-click, touch and hold, or focus here and press Shift + F10.`),X$1(),W(3,`button`,55),Me(`click`,function(o){Br(e);let s=ue();return jr(s.openContextMenu(o))}),je(4,`Open actions`),X$1(),S_(5,Ti,3,0,`ng-template`,null,2,Qm),X$1()}if(a&2){let e=Ya(6);M(),fe(`bxContextMenu`,e)}}function ki(a,r){a&1&&(W(0,`div`,27),Fe$1(1,`bx-breadcrumbs`,97),W(2,`p`),je(3,`This trail comes from the current route metadata. Select Components to navigate back.`),X$1(),W(4,`a`,98),je(5,`Navigate to Button`),X$1()()),a&2&&(M(),fe(`minimumBreadcrumbs`,1))}function Di(a,r){a&1&&(W(0,`div`,27)(1,`div`,99),Fe$1(2,`bx-icon`,100)(3,`bx-icon`,101)(4,`bx-icon`,102)(5,`bx-icon`,103)(6,`bx-icon`,104),X$1(),W(7,`a`,105),je(8,`Browse the searchable icon catalog`),X$1()()),a&2&&(M(2),fe(`decorative`,!1))}function Pi(a,r){if(a&1){let e=us();W(0,`bx-modal-banner`,108),Me(`close`,function(){Br(e);let o=ue(2);return o.bannerVisible.set(!1),jr(o.activate(`Banner dismissed`))}),X$1()}a&2&&fe(`header`,Fk(3,jn,Lk(2,qn)))(`showCloseButton`,!0)}function Vi(a,r){if(a&1){let e=us();W(0,`button`,55),Me(`click`,function(){Br(e);let o=ue(2);return jr(o.bannerVisible.set(!0))}),je(1,`Restore banner`),X$1()}}function Oi(a,r){if(a&1){let e=us();W(0,`div`,31),pe(1,Pi,1,5,`bx-modal-banner`,106)(2,Vi,2,0,`button`,107),W(3,`button`,40),Me(`click`,function(){Br(e);let o=ue();return jr(o.openModal())}),je(4,`See banner in a dialog`),X$1()()}if(a&2){let e=ue();M(),me(e.bannerVisible()?1:2)}}function Ni(a,r){if(a&1){let e=us();W(0,`div`,27)(1,`div`,39)(2,`button`,44),Me(`click`,function(){Br(e);let o=ue();return jr(o.notify(`success`))}),je(3,`Success`),X$1(),W(4,`button`,109),Me(`click`,function(){Br(e);let o=ue();return jr(o.notify(`info`))}),je(5,`Information`),X$1(),W(6,`button`,45),Me(`click`,function(){Br(e);let o=ue();return jr(o.notify(`warn`))}),je(7,`Warning`),X$1(),W(8,`button`,46),Me(`click`,function(){Br(e);let o=ue();return jr(o.notify(`danger`))}),je(9,`Error`),X$1()(),W(10,`p`),je(11,`The toast host manages the progress indicator, dismiss action, pause and cleanup.`),X$1(),W(12,`a`,110),je(13,`Open the full toast configurator`),X$1()()}}function Ii(a,r){if(a&1){let e=us();W(0,`div`,27)(1,`div`,39)(2,`button`,44),Me(`click`,function(){Br(e);let o=ue();return jr(o.notify(`success`))}),je(3,`Show success`),X$1(),W(4,`button`,109),Me(`click`,function(){Br(e);let o=ue();return jr(o.notify(`info`))}),je(5,`Show information`),X$1(),W(6,`button`,45),Me(`click`,function(){Br(e);let o=ue();return jr(o.notify(`warn`))}),je(7,`Show warning`),X$1(),W(8,`button`,46),Me(`click`,function(){Br(e);let o=ue();return jr(o.notify(`danger`))}),je(9,`Show error`),X$1()(),W(10,`p`),je(11,`Semantic colors remain tied to the active Blocks palette.`),X$1()()}}function Fi(a,r){if(a&1){let e=us();W(0,`section`,32),Fe$1(1,`bx-icon`,111),W(2,`h3`),je(3,`A custom Blocks surface`),X$1(),W(4,`p`),je(5,`Material, blur, tint, lighting and motion follow the same global configuration as the controls around it.`),X$1(),W(6,`button`,55),Me(`click`,function(){Br(e);let o=ue();return jr(o.activate(`Custom surface action`))}),je(7,`Try an action`),X$1()()}}function Li(a,r){if(a&1){let e=us();W(0,`button`,55),Me(`click`,function(){Br(e);let o=ue(2);return jr(o.openModal(`left`))}),je(1,`Open on the left`),X$1()}}function Ai(a,r){if(a&1){let e=us();W(0,`div`,27)(1,`div`,39)(2,`button`,40),Me(`click`,function(){Br(e);let o=ue();return jr(o.openModal())}),je(3),X$1(),pe(4,Li,2,0,`button`,107),X$1(),W(5,`p`),je(6,`Try editing, saving, pressing Escape, and dismissing through the backdrop. This is the actual service-created component.`),X$1(),W(7,`a`,112),je(8,`Open the full modal configurator`),X$1()()}if(a&2){let e=ue();M(3),wr(`Open `,e.entry().title.toLowerCase()),M(),me(e.entry().id===`modal-side`?4:-1)}}var an=class a{route=f(Wn$1);routeData=Q6(this.route.data,{initialValue:this.route.snapshot.data});modals=f(fe$1);toasts=f(ft);entry=w(()=>e.find(r=>r.id===this.routeData().componentId)??e[0]);count=_(0);status=_(`Ready to try.`);fieldValue=_(``);showError=_(!1);fieldError=w(()=>this.showError()&&this.fieldValue().trim().length<3?`Enter at least three characters.`:void 0);name=new gS(`Blocks workspace`,{nonNullable:!0,validators:Sr.required});email=new gS(``,{nonNullable:!0,validators:Sr.email});volume=new gS(50,{nonNullable:!0});quantity=new gS(3,{nonNullable:!0});checked=new gS(!0,{nonNullable:!0});secondChecked=new gS(!1,{nonNullable:!0});disabledCheck=new gS({value:!1,disabled:!0},{nonNullable:!0});frequency=new gS(`weekly`,{nonNullable:!0});destination=new gS(`skopje`,{nonNullable:!0});enabled=new gS(!0,{nonNullable:!0});bannerVisible=_(!0);selectedTab=_(`overview`);tabsVariant=_(`segmented`);detailsDisabled=_(!1);showActivity=_(!0);tabNote=new gS(``,{nonNullable:!0});options=[{label:`Skopje`,value:`skopje`},{label:`Ohrid`,value:`ohrid`},{label:`Bitola`,value:`bitola`},{label:`Unavailable destination`,value:`unavailable`,disabled:!0}];contextMenu;activate(r){this.count.update(e=>e+1),this.status.set(`${r} \xB7 action ${this.count()}`)}updateField(r){this.fieldValue.set(r.target.value)}openContextMenu(r){r.preventDefault();let e=r.currentTarget.getBoundingClientRect();this.contextMenu?.open(new MouseEvent(`contextmenu`,{clientX:e.left+16,clientY:e.bottom+4}))}openModal(r){let e=r??(this.entry().id===`modal-side`?`right`:this.entry().id===`modal-bottom-sheet`?`bottom-sheet`:`center`);this.modals.open(Te,{data:{title:this.entry().title,description:`Edit the project name. The header, content, footer, backdrop and close behavior use the existing Blocks modal composition.`},header:{text:this.entry().title},style:{layout:e,hasBackdrop:!0,animate:!0,showCloseButton:!0}}).afterClosed().subscribe(o=>this.status.set(o.state===`confirm`?`Saved: ${o.data}`:`Dialog dismissed.`))}notify(r){let e={title:r===`success`?`Settings saved`:r===`warn`?`Review needed`:r===`danger`?`Action failed`:`Workspace update`,message:`This notification follows the application theme and appearance settings.`,durationInMs:4500};switch(r){case`success`:this.toasts.queueSuccess(e);break;case`info`:this.toasts.queueInfo(e);break;case`warn`:this.toasts.queueWarning(e);break;case`danger`:this.toasts.queueDanger(e)}this.status.set(`${r} notification queued.`)}static ɵfac=function(e){return new(e||a)};static ɵcmp=le$1({type:a,selectors:[[`app-component-demo`]],viewQuery:function(e,t){if(e&1&&Km(Sf,5),e&2){let o;Wu(o=Yu())&&(t.contextMenu=o.first)}},decls:72,vars:9,consts:[[`dropdown`,`bxDropdown`],[`dropdownActions`,``],[`contextActions`,``],[1,`component-page`],[1,`component-header`],[`routerLink`,`/components`,1,`back-link`],[1,`eyebrow`],[1,`description`],[1,`component-meta`],[`routerLink`,`/appearance`],[`aria-labelledby`,`preview-heading`,1,`demo-section`],[1,`section-heading`],[`id`,`preview-heading`],[`bxSurface`,``,1,`demo-stage`],[`example`,`signal-forms`],[`example`,`radio-group`],[`example`,`multi-select`],[`example`,`load-more`],[`example`,`loading-spinner`],[`example`,`loading-indicator`],[`example`,`progress-bar`],[`example`,`button-loading`],[`example`,`range-slider`],[`example`,`hint`],[`example`,`prefix`],[`example`,`suffix`],[`example`,`native-control`],[1,`demo-stack`],[1,`demo-stack`,`control-width`],[`example`,`select`],[1,`menu-preview`],[1,`demo-stack`,`banner-preview`],[`bxSurface`,``,1,`custom-surface`],[`role`,`status`,`aria-live`,`polite`,1,`action-status`],[`aria-labelledby`,`usage-heading`,1,`usage-section`],[`id`,`usage-heading`],[3,`textContent`],[`aria-label`,`Component documentation`,1,`documentation-section`],[3,`path`],[1,`demo-row`],[`bx-button`,``,`variant`,`filled`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`accent`,3,`click`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`disabled`],[`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`bx-button`,``,`variant`,`fab`,`aria-label`,`Add item`,3,`click`],[`name`,`plus`],[`label`,`Receive product updates`,3,`formControl`],[`label`,`Include preview features`,3,`formControl`],[`label`,`Unavailable setting`,3,`formControl`],[`label`,`Project name`,`forId`,`field-preview`,3,`required`,`error`],[`bxSurface`,``,1,`native-control-surface`],[`id`,`field-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`bx-button`,``,`variant`,`tonal`,3,`click`],[`label`,`Project name`,3,`errorMessages`,`formControl`],[`label`,`Email address`,`type`,`email`,3,`errorMessages`,`formControl`],[`label`,`Team members`,`type`,`number`,3,`min`,`max`,`formControl`],[`label`,`Daily summary`,`name`,`frequency-demo`,`value`,`daily`,3,`formControl`],[`label`,`Weekly summary`,`name`,`frequency-demo`,`value`,`weekly`,3,`formControl`],[`label`,`Only important updates`,`name`,`frequency-demo`,`value`,`important`,3,`formControl`],[`for`,`volume-demo`],[`bxSlider`,``,`id`,`volume-demo`,`type`,`range`,`min`,`0`,`max`,`100`,3,`formControl`],[`for`,`disabled-volume`],[`bxSlider`,``,`id`,`disabled-volume`,`type`,`range`,`value`,`30`,`disabled`,``],[`label`,`Enable notifications`,3,`formControl`],[`label`,`Reference`,`forId`,`error-preview`],[`id`,`error-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`id`,`custom-error`],[`ariaLabel`,`Project information`,3,`selectedValueChange`,`variant`,`selectedValue`],[`label`,`Overview`,`value`,`overview`,`icon`,`book-open`],[`bxTabContent`,``],[`label`,`Details`,`value`,`details`,`color`,`accent`,`icon`,`badge-check`,`endIcon`,`chevron-right`,3,`disabled`],[`label`,`Activity`,`value`,`activity`,`color`,`info`,`textColor`,`text-warn`,`highlightColor`,`text-warn`,`contentColor`,`text-info`,`icon`,`activity`],[`label`,`Unavailable`,`value`,`unavailable`,3,`disabled`],[`label`,`Project note`,3,`formControl`],[`label`,`Duplicate project`,`icon`,`copy`,3,`action`],[`label`,`Archive project`,`icon`,`archive`,3,`action`],[`label`,`Unavailable action`,3,`disabled`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Open settings`,`icon`,`settings`,`endIcon`,`chevron-right`,3,`action`],[`label`,`Delete project`,`icon`,`trash-2`,3,`action`,`danger`],[`text`,`Your changes are saved automatically.`],[`routerLink`,`/components/tooltip-directive`],[`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`Saves the current project`,`placement`,`top`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`An optional hint revealed by touching and holding`,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`tooltip-hold-target`,3,`click`],[`bx-button`,``,`variant`,`icon`,`aria-label`,`More information`,`bxTooltip`,`Appearance settings apply to all components`,`bxTooltipTouch`,`tap`,`placement`,`bottom`],[`name`,`info`],[`bx-button`,``,`variant`,`filled`,`bxTransition`,`fade`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[`tabindex`,`0`,1,`context-target`,3,`bxContextMenu`],[`label`,`Copy selection`,`icon`,`copy`,3,`action`],[`label`,`Archive selection`,`icon`,`archive`,3,`action`],[3,`minimumBreadcrumbs`],[`routerLink`,`/components/button`],[1,`demo-row`,`icon-row`],[`name`,`sparkles`,`size`,`32`,`color`,`text-accent`,`ariaLabel`,`Highlights`,3,`decorative`],[`name`,`check-circle`,`size`,`32`,`color`,`text-success`],[`name`,`info`,`size`,`32`,`color`,`text-info`,`bgColor`,`auto`],[`name`,`triangle-alert`,`size`,`32`,`color`,`text-warn`],[`name`,`heart`,`size`,`40`,`color`,`text-danger`],[`routerLink`,`/icon-catalog`],[3,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`],[3,`close`,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`routerLink`,`/toastr`],[`name`,`layers`,`size`,`28`],[`routerLink`,`/modal`]],template:function(e,t){if(e&1&&(W(0,`article`,3)(1,`header`,4)(2,`a`,5),je(3,`All components`),X$1(),W(4,`p`,6),je(5),X$1(),W(6,`h1`),je(7),X$1(),W(8,`p`,7),je(9),X$1(),W(10,`div`,8)(11,`code`),je(12),X$1(),W(13,`a`,9),je(14,`Configure appearance globally`),X$1()()(),W(15,`section`,10)(16,`div`,11)(17,`h2`,12),je(18,`Interactive example`),X$1(),W(19,`span`),je(20,`Uses your active palette`),X$1()(),W(21,`div`,13),pe(22,Un,1,0,`app-tag-examples`)(23,Gn,1,0,`app-truncation-examples`)(24,Hn,1,0,`app-form-examples`,14)(25,Xn,1,0,`app-form-examples`,15)(26,Qn,1,0,`app-form-examples`,16)(27,Jn,1,0,`app-form-examples`,17)(28,Yn,1,0,`app-form-examples`,18)(29,Kn,1,0,`app-form-examples`,19)(30,Zn,1,0,`app-form-examples`,20)(31,$n,1,0,`app-form-examples`,21)(32,ei,1,0,`app-form-examples`,22)(33,ti,1,0,`app-form-examples`,23)(34,ni,1,0,`app-form-examples`,24)(35,ii,1,0,`app-form-examples`,25)(36,oi,1,0,`app-form-examples`,26)(37,ai,19,1,`div`,27)(38,ri,6,5,`div`,27)(39,li,8,5,`div`,28)(40,ci,6,11,`div`,28)(41,si,10,4,`fieldset`,27)(42,mi,1,0,`app-search-examples`)(43,di,1,0,`app-form-examples`,29)(44,pi,11,2,`div`,28)(45,ui,5,3,`div`,27)(46,_i,7,4,`div`,28)(47,fi,17,9,`div`,27)(48,vi,4,1,`bx-menu`,30)(49,hi,5,2,`bx-menu`,30)(50,Ci,6,0,`div`,27)(51,wi,10,0,`div`,27)(52,Ei,11,2,`div`,27)(53,Mi,7,1,`div`,27)(54,ki,6,1,`div`,27)(55,Di,9,1,`div`,27)(56,Oi,5,1,`div`,31)(57,Ni,14,0,`div`,27)(58,Ii,12,0,`div`,27)(59,Fi,8,0,`section`,32)(60,Ai,9,2,`div`,27),X$1(),W(61,`p`,33),je(62),X$1()(),W(63,`section`,34)(64,`h2`,35),je(65,`Quick usage`),X$1(),W(66,`pre`),Fe$1(67,`code`,36),X$1(),W(68,`pre`),Fe$1(69,`code`,36),X$1()(),W(70,`section`,37),Fe$1(71,`app-readme`,38),X$1()()),e&2){let o;M(5),tt(t.entry().group),M(2),tt(t.entry().title),M(2),tt(t.entry().description),M(3),tt(t.entry().selector),M(10),me((o=t.entry().id)===`tag`?22:o===`truncate`?23:o===`signal-forms`?24:o===`radio-group`?25:o===`multi-select`?26:o===`load-more`?27:o===`loading-spinner`?28:o===`loading-indicator`?29:o===`progress-bar`?30:o===`button-loading`?31:o===`range-slider`?32:o===`hint`?33:o===`prefix`?34:o===`suffix`?35:o===`native-control`?36:o===`button`?37:o===`checkbox`?38:o===`form-field`?39:o===`input-field`?40:o===`radio`?41:o===`search-input`?42:o===`select`?43:o===`slider`?44:o===`slide-toggle`?45:o===`error`?46:o===`tabs`?47:o===`menu`?48:o===`menu-item`?49:o===`tooltip`?50:o===`tooltip-directive`?51:o===`dropdown`?52:o===`context-menu`?53:o===`breadcrumbs`?54:o===`icon`?55:o===`modal-banner`?56:o===`toast-core`?57:o===`simple-toast`?58:o===`surface`?59:60),M(40),tt(t.status()),M(5),fe(`textContent`,`import { `+t.entry().symbol+` } from '`+t.entry().package+`';`),M(2),fe(`textContent`,t.entry().example),M(2),fe(`path`,t.entry().readme)}},dependencies:[Hd,Se,Ee,Ce,te,A9,XE,AP,M9,OP,If,Zn$1,Tf,Ni$1,Ge,J,Xe,Kl,Dx,Ex,Ef,kx,Sf,Qn$1,Nx,Wl,zl,X$2,_t,hn$1,V,q],styles:[`
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
}`]})};export{an as ComponentDemo};