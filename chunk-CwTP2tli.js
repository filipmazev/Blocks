import{a as n,c as r,i as l,l as s,n as a,o,r as i,s as p,t as S,u as t}from"./chunk-DQ57v1lq.js";import{t as Fe}from"./chunk-DA2G-894.js";import{i as ft,n as X,r as Y,t as L}from"./chunk-DRdjY1Lj.js";import{_ as gt$1,c as Dn,d as Vn,f as Wn,g as ft$1,h as bt$1,j as e$1,l as Rn,p as at$1,s as An,t as S$1,u as Tn,v as it$1,w as e}from"./main-AKVTKJWF.js";import{c as gn,d as yn,l as j,r as Me$1,s as fn}from"./chunk-B9KWZ97F.js";import{n as ht}from"./chunk-DlJTjSOR.js";import{A as kn,E as Y$1,O as fe,P as ya$1,T as Vt,_ as Op,a as Bn,b as Sa$1,g as Np,i as Ba$1,j as va$1,k as ka$1,l as Eo$1,m as Ma$1,n as Aa$1,t as $r,u as Ft,x as Sn}from"./chunk-BHj6x81D.js";import{$a as sb,$i as kT,$r as bT,Ai as gb,An as Sl,Ba as qP,Bo as zT,Bt as Ml,Ci as fT,Cn as Rt,Ct as Kd,Dn as ST,Dt as Ko$1,E as D,En as SE,Er as ZO,F as ET,Fo as yb,Ft as Lt,Ga as qt,Gi as j$1,Gn as UT,Hi as ie$1,Hn as Tt,Ho as zd,Ia as pn,It as M,J as Gd,Ji as je,Kn as Ui$1,Ma as pI,Mo as yE,Na as pT,Nn as T,No as yT,Nr as _,Oi as g,On as Sb,Oo as xe,Or as Zd,P as EE,Pn as TT,Pt as Le,Qi as kE,Rn as Ti$1,Rr as _e,Rt as MR,So as wr$1,St as KP,Tt as Kie,V as FT,Vt as Mo$1,Wt as NT,X as Gm,Xr as b,Yt as Nt,Z as Go$1,Zi as jt,Zn as Va$1,Zr as bB,Zt as OT,_i as ee,_t as Jie,an as Q,bi as ew,bo as wE,br as Yf,c as Ae,ca as lJ,cn as Qd,dr as Xo$1,eo as se,f as B,fa as lt$1,fo as vT,h as Bl,hn as Qt,ho as ve,ht as Jd,j as Dl,ji as gf,jn as Sn$1,jo as y,jr as Zo$1,jt as L$1,ki as gB,kn as Se,kr as Ze$1,la as le,lr as Xd,lt as Ie,m as Ba$2,nt as HT,p as BT,pa as mT,po as vb,pr as Xt,pt as J,q as GM,s as AT,sn as QO,sr as X$1,st as IT,t as $,ti as bl,to as sf,uo as ut$1,vi as ese,vo as w,w as Cs,wi as fe$1,wo as xB,x as CT,xi as f,xo as wb,y as CE,yi as eu,zi as ho$1,zr as _l,zt as MT}from"./chunk-2VndCPnC.js";import{n as s$1,t as r$1}from"./chunk-DFgPOoGa.js";function Ci(r,a){if(r&1&&(_(0,`div`,9),Q(1),D()),r&2){let t=a.$implicit;y(),pn(`Row `,t,` — semantic surface material, focusable content and safe-area padding.`)}}var Ge=class r{open=M(!1);busy=M(!1);dismissible=M(!0);size=M(`md`);status=M(`No drawer interaction yet.`);items=Array.from({length:24},(a,t)=>t+1);openDrawer(a){this.size.set(a),this.open.set(!0),this.status.set(`Opened the ${a} drawer.`)}onClosed(a){this.status.set(`Closed with reason: ${a}.`)}onCancelled(a){this.status.set(`Close cancelled: ${a}.`)}toggleDismissible(){this.dismissible.update(a=>!a)}simulateBusy(){this.busy.set(!0),setTimeout(()=>{this.busy.set(!1),this.status.set(`Busy state finished; dismissal is available again.`)},1500)}static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-bottom-drawer-examples`]],decls:31,vars:6,consts:[[`aria-labelledby`,`drawer-demo-title`,1,`drawer-demo`],[`id`,`drawer-demo-title`],[1,`drawer-actions`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,3,`click`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`role`,`status`,`aria-live`,`polite`,1,`drawer-status`],[`routerLink`,`/components/modal`],[`title`,`Filter results`,`subtitle`,`The reusable surface used by Modal and by mobile date pickers.`,`icon`,`sliders-horizontal`,`maxHeight`,`88dvh`,3,`openChange`,`closed`,`closeCancelled`,`size`,`busy`,`dismissible`,`open`],[1,`drawer-content`],[1,`drawer-row`],[`bxDrawerFooter`,``,1,`drawer-footer`],[`bx-button`,``,`type`,`button`,`variant`,`text`,3,`click`]],template:function(t,e){t&1&&(_(0,`section`,0)(1,`h3`,1),Q(2,`Standalone reusable drawer`),D(),_(3,`p`),Q(4,` Drag the handle down, tap it, press Escape, or use the backdrop. The body keeps native scrolling while the sticky footer stays reachable. Enable the busy state to see dismissal guards and pending feedback. `),D(),_(5,`div`,2)(6,`button`,3),J(`click`,function(){return e.openDrawer(`sm`)}),Q(7,`Small`),D(),_(8,`button`,4),J(`click`,function(){return e.openDrawer(`md`)}),Q(9,`Medium`),D(),_(10,`button`,4),J(`click`,function(){return e.openDrawer(`lg`)}),Q(11,`Large`),D(),_(12,`button`,4),J(`click`,function(){return e.openDrawer(`full`)}),Q(13,`Full height`),D()(),_(14,`p`,5),Q(15),D(),_(16,`a`,6),Q(17,`Review the Modal bottom-drawer regression demo`),D(),_(18,`bx-bottom-drawer`,7),EE(`openChange`,function(c){return qP(e.open,c)||(e.open=c),c}),J(`closed`,function(c){return e.onClosed(c)})(`closeCancelled`,function(c){return e.onCancelled(c)}),_(19,`div`,8)(20,`p`),Q(21,`Content scrolls independently of the handle and footer.`),D(),Lt(22,Ci,2,1,`div`,9,Va$1),D(),_(24,`div`,10)(25,`button`,11),J(`click`,function(){return e.simulateBusy()}),Q(26,`Simulate busy`),D(),_(27,`button`,11),J(`click`,function(){return e.toggleDismissible()}),Q(28),D(),_(29,`button`,3),J(`click`,function(){return e.open.set(!1)}),Q(30,`Apply`),D()()()()),t&2&&(y(15),fe$1(e.status()),y(3),T(`size`,e.size())(`busy`,e.busy())(`dismissible`,e.dismissible()),SE(`open`,e.open),y(4),jt(e.items),y(6),pn(``,e.dismissible()?`Disable`:`Enable`,` dismissal`))},dependencies:[HT,fe,Yf],styles:[`
.drawer-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-3, 0.75rem);
}
.drawer-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
}
.drawer-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--%NS%bx-text-secondary);
  max-inline-size: 60ch;
}
.drawer-actions[_ngcontent-%COMP%], 
.drawer-footer[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-2, 0.5rem);
  align-items: center;
}
.drawer-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-2, 0.5rem);
}
.drawer-row[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-3, 0.75rem);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: var(--%NS%bx-bg-element);
  color: var(--%NS%bx-text-secondary);
}
.drawer-status[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-accent);
}`]})};var ei=[{label:`Home`,route:`/home`},{label:`Components`,route:`/components`},{label:`Primitives`,route:`/components/category/primitives`},{label:`Layout`,route:`/components/layout`},{label:`Page container`,route:`/components/layout/page-container`}];var Ke=class r{items=ei;maxVisible=M(3);unlimited=M(!1);hover=M(!0);config=g(()=>({maxVisibleItems:this.unlimited()?null:Number(this.maxVisible())||3,openOnHover:this.hover()}));static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-breadcrumb-examples`]],decls:13,vars:13,consts:[[3,`gap`],[`direction`,`responsive`,`align`,`center`,3,`gap`],[`type`,`number`,`label`,`Visible breadcrumb entries`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`max`,`disabled`,`value`],[`label`,`Show the complete trail`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Open hidden ancestors on hover`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[3,`items`,`minimumBreadcrumbs`,`breadcrumbConfig`],[3,`minimumBreadcrumbs`,`breadcrumbConfig`]],template:function(t,e){t&1&&(_(0,`bx-stack`,0)(1,`bx-stack`,1)(2,`bx-input-field`,2),EE(`valueChange`,function(c){return qP(e.maxVisible,c)||(e.maxVisible=c),c}),D(),_(3,`bx-checkbox`,3),EE(`checkedChange`,function(c){return qP(e.unlimited,c)||(e.unlimited=c),c}),D(),_(4,`bx-checkbox`,4),EE(`checkedChange`,function(c){return qP(e.hover,c)||(e.hover=c),c}),D()(),ve(5,`bx-breadcrumbs`,5),_(6,`p`),Q(7,`Hover over or activate the ellipsis to open hidden ancestors. Every ancestor link navigates to a real playground page.`),D(),_(8,`p`),Q(9,`Use Tab to reach the ellipsis, Enter or Down to open it, arrow keys to choose an ancestor, and Escape to return to the trigger.`),D(),ve(10,`bx-breadcrumbs`,6),_(11,`p`),Q(12,`The second trail follows the current route metadata.`),D()()),t&2&&(T(`gap`,4),y(),T(`gap`,4),y(),T(`min`,2)(`max`,10)(`disabled`,e.unlimited()),SE(`value`,e.maxVisible),y(),SE(`checked`,e.unlimited),y(),SE(`checked`,e.hover),y(),T(`items`,e.items)(`minimumBreadcrumbs`,1)(`breadcrumbConfig`,e.config()),y(5),T(`minimumBreadcrumbs`,1)(`breadcrumbConfig`,e.config()))},dependencies:[Tn,$r,va$1,ET],encapsulation:2})};var wi=[`dayCell`];var ki=()=>[];var ut=(r,a)=>a.value;function Ei(r,a){if(r&1){let t=ut$1();_(0,`button`,21),J(`click`,function(){let o=Le(t).$implicit,c=w();return je(c.setMode(o.value))}),Q(1),D()}if(r&2){let t=a.$implicit,e=w();T(`variant`,e.mode()===t.value?`filled`:`tonal`),y(),pn(` `,t.label,` `)}}function Ti(r,a){if(r&1){let t=ut$1();_(0,`button`,21),J(`click`,function(){let o=Le(t).$implicit,c=w();return je(c.calendarId.set(o.value))}),Q(1),D()}if(r&2){let t=a.$implicit,e=w();T(`variant`,e.calendarId()===t.value?`filled`:`tonal`),y(),pn(` `,t.label,` `)}}function Mi(r,a){if(r&1){let t=ut$1();_(0,`button`,21),J(`click`,function(){let o=Le(t).$implicit,c=w();return je(c.locale.set(o.value))}),Q(1),D()}if(r&2){let t=a.$implicit,e=w();T(`variant`,e.locale()===t.value?`filled`:`tonal`),y(),pn(` `,t.label,` `)}}function Di(r,a){if(r&1){let t=ut$1();_(0,`button`,21),J(`click`,function(){let o=Le(t).$implicit,c=w();return je(c.months.set(o))}),Q(1),D()}if(r&2){let t=a.$implicit,e=w();T(`variant`,e.months()===t?`filled`:`tonal`),y(),yE(` `,t,` month`,t>1?`s`:``,` `)}}function Pi(r,a){if(r&1){let t=ut$1();_(0,`button`,22),J(`click`,function(){let o=Le(t).retry;return je(o())}),ve(1,`bx-icon`,23),Q(2),D()}if(r&2){let t=a.label;y(),T(`decorative`,!0),y(),pn(``,t,` `)}}function Ni(r,a){if(r&1&&(_(0,`span`,26),Q(1),D()),r&2){let t=w().$implicit;y(),fe$1(t.cell.metadata.badge)}}function Ii(r,a){if(r&1&&(_(0,`span`,27),Q(1),D()),r&2){let t=w().$implicit;y(),pn(``,t.cell.metadata.price,` €`)}}function Vi(r,a){if(r&1&&(_(0,`span`,24)(1,`span`,25),Q(2),D(),L$1(3,Ni,2,1,`span`,26),L$1(4,Ii,2,1,`span`,27),D()),r&2){let t=a.$implicit;y(2),fe$1(t.cell.day),y(),j$1(t.cell.metadata.badge?3:-1),y(),j$1(t.cell.metadata.price?4:-1)}}var Qe=class r{mode=M(`range`);months=M(2);locale=M(`en-GB`);calendarId=M(`gregory`);longNames=M(!1);highlightToday=M(!0);showToday=M(!1);showWeekNumbers=M(!0);restrict=M(!0);customCells=M(!1);asyncMode=M(!1);failNext=M(!1);value=M(null);availability=M(void 0);visible=M(`Navigate to request availability.`);outcome=M(`No selection yet.`);modes=[{value:`single`,label:`Single`},{value:`multiple`,label:`Multiple`},{value:`range`,label:`Range`},{value:`week`,label:`Week`},{value:`month`,label:`Month`},{value:`quarter`,label:`Quarter`},{value:`year`,label:`Year`}];locales=[{value:`en-GB`,label:`English`},{value:`es-ES`,label:`Español`},{value:`fr-FR`,label:`Français`},{value:`de-DE`,label:`Deutsch`}];calendars=[{value:`gregory`,label:`Gregorian`},{value:`islamic-umalqura`,label:`Umm al-Qura`},{value:`hebrew`,label:`Hebrew`},{value:`persian`,label:`Persian`}];monthCounts=[1,2,3];disabledIntervals=[{start:`2026-11-23`,end:`2026-12-03`},{start:`2026-12-07`,end:`2026-12-15`}];metadata=g(()=>this.customCells()?Array.from({length:21},(a,t)=>({date:`2026-11-${String(t+2).padStart(2,`0`)}`,tone:t%4===0?`success`:t%3===0?`warn`:`neutral`,badge:t%3===0?`3 left`:void 0,price:120+t*15,description:t%2===0?`Late checkout available`:`Standard rate`})):[]);dayTemplate=Nt(`dayCell`);revision=0;onVisible(a){this.visible.set(`Visible ${a.start} \u2013 ${a.end} (${a.monthKeys.length} month(s)).`),this.asyncMode()&&this.load(a.start,a.end,++this.revision)}onRetry(a){this.load(a.start,a.end,++this.revision)}toggleAsync(){let a=!this.asyncMode();this.asyncMode.set(a),this.availability.set(a?{loading:!0}:void 0)}setMode(a){this.mode.set(a),this.value.set(null),this.outcome.set(`Mode set to ${a}.`)}describeValue(){let a=this.value();return a===null?`empty`:typeof a==`string`?`single date ${a}`:Array.isArray(a)?`${a.length} dates`:`start`in a?`${`kind`in a?a.kind+` period`:`range`} ${a.start} \u2013 ${a.end}`:`unknown value`}load(a,t,e){this.availability.set({loading:!0,revision:e});let o=this.failNext();this.failNext.set(!1),setTimeout(()=>{if(o){this.availability.set({loading:!1,revision:e,error:`Availability could not be loaded. Retry keeps the same range.`});return}this.availability.set({loading:!1,revision:e,dates:this.mockMetadata(a,t)})},650)}mockMetadata(a,t){let e=[],o=/* @__PURE__ */ new Date(`${a}T00:00:00Z`),c=/* @__PURE__ */ new Date(`${t}T00:00:00Z`),s=0;for(;o<=c;){let U=o.toISOString().slice(0,10),A=s%5!==0;e.push({date:U,status:A?s%4===0?`limited`:`available`:`unavailable`,tone:A?s%4===0?`warn`:`success`:`danger`,badge:A?`${s%4+1} slots`:`Full`,description:A?`Availability loaded from the demo API.`:`No remaining capacity.`}),o.setUTCDate(o.getUTCDate()+1),s+=1}return e}static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-calendar-examples`]],viewQuery:function(t,e){t&1&&Xt(e.dayTemplate,wi,5),t&2&&lt$1()},decls:36,vars:28,consts:[[`retryAction`,``],[`dayCell`,``],[`aria-labelledby`,`calendar-demo-title`,1,`calendar-demo`],[`id`,`calendar-demo-title`],[`role`,`group`,`aria-label`,`Selection mode`,1,`demo-group`],[`bx-button`,``,`type`,`button`,3,`variant`],[`role`,`group`,`aria-label`,`Calendar system`,1,`demo-group`],[`role`,`group`,`aria-label`,`Language`,1,`demo-group`],[`role`,`group`,`aria-label`,`Month count`,1,`demo-group`],[1,`demo-toggles`],[`label`,`Full weekday and month names`,3,`checkedChange`,`checked`],[`label`,`Highlight today`,3,`checkedChange`,`checked`],[`label`,`Today shortcut`,3,`checkedChange`,`checked`],[`label`,`Week numbers`,3,`checkedChange`,`checked`],[`label`,`Disjoint disabled intervals`,3,`checkedChange`,`checked`],[`label`,`Custom day metadata and template`,3,`checkedChange`,`checked`],[`label`,`Async availability`,3,`checkedChange`,`checked`],[`label`,`Fail the next request`,3,`checkedChange`,`checked`],[1,`calendar-panel`],[3,`valueChange`,`visibleRangeChange`,`retryAvailability`,`selectionRejected`,`todayLabel`,`weekdayNameFormat`,`monthNameFormat`,`retryTemplate`,`mode`,`months`,`locale`,`calendarId`,`showToday`,`showWeekNumbers`,`disabledIntervals`,`metadata`,`dayTemplate`,`availability`,`blockUnverifiedAvailability`,`value`],[`role`,`status`,`aria-live`,`polite`,1,`demo-status`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`rotate-cw`,`size`,`16`,3,`decorative`],[1,`custom-day`],[1,`custom-day-number`],[1,`custom-day-badge`],[1,`custom-day-price`]],template:function(t,e){if(t&1){let o=ut$1();_(0,`section`,2)(1,`h3`,3),Q(2,`Inline calendar primitive`),D(),_(3,`p`),Q(4,` Selection, availability and period arithmetic are adapter-owned, so the non-Gregorian examples render real calendar grids rather than translated labels. `),D(),_(5,`div`,4),Lt(6,Ei,2,2,`button`,5,ut),D(),_(8,`div`,6),Lt(9,Ti,2,2,`button`,5,ut),D(),_(11,`div`,7),Lt(12,Mi,2,2,`button`,5,ut),D(),_(14,`div`,8),Lt(15,Di,2,3,`button`,5,Va$1),D(),_(17,`div`,9)(18,`bx-slide-toggle`,10),EE(`checkedChange`,function(s){return Le(o),qP(e.longNames,s)||(e.longNames=s),je(s)}),D(),_(19,`bx-slide-toggle`,11),EE(`checkedChange`,function(s){return Le(o),qP(e.highlightToday,s)||(e.highlightToday=s),je(s)}),D(),_(20,`bx-slide-toggle`,12),EE(`checkedChange`,function(s){return Le(o),qP(e.showToday,s)||(e.showToday=s),je(s)}),D(),_(21,`bx-slide-toggle`,13),EE(`checkedChange`,function(s){return Le(o),qP(e.showWeekNumbers,s)||(e.showWeekNumbers=s),je(s)}),D(),_(22,`bx-slide-toggle`,14),EE(`checkedChange`,function(s){return Le(o),qP(e.restrict,s)||(e.restrict=s),je(s)}),D(),_(23,`bx-slide-toggle`,15),EE(`checkedChange`,function(s){return Le(o),qP(e.customCells,s)||(e.customCells=s),je(s)}),D(),_(24,`bx-slide-toggle`,16),J(`checkedChange`,function(){return e.toggleAsync()}),D(),_(25,`bx-slide-toggle`,17),EE(`checkedChange`,function(s){return Le(o),qP(e.failNext,s)||(e.failNext=s),je(s)}),D()(),_(26,`div`,18)(27,`bx-calendar`,19),EE(`valueChange`,function(s){return Le(o),qP(e.value,s)||(e.value=s),je(s)}),J(`visibleRangeChange`,function(s){return e.onVisible(s)})(`retryAvailability`,function(s){return e.onRetry(s)})(`selectionRejected`,function(s){return e.outcome.set(`Rejected: `+s)}),D()(),_(28,`p`,20),Q(29),D(),_(30,`p`,20),Q(31),D(),Ti$1(32,Pi,3,2,`ng-template`,null,0,wr$1)(34,Vi,5,3,`ng-template`,null,1,wr$1),D()}if(t&2){let o=Tt(33);y(6),jt(e.modes),y(3),jt(e.calendars),y(3),jt(e.locales),y(3),jt(e.monthCounts),y(3),SE(`checked`,e.longNames),y(),SE(`checked`,e.highlightToday),y(),SE(`checked`,e.showToday),y(),SE(`checked`,e.showWeekNumbers),y(),SE(`checked`,e.restrict),y(),SE(`checked`,e.customCells),y(),T(`checked`,e.asyncMode()),y(),SE(`checked`,e.failNext),y(2),T(`todayLabel`,e.showToday()?`Select today`:void 0)(`weekdayNameFormat`,e.longNames()?`long`:`narrow`)(`monthNameFormat`,e.longNames()?`long`:`short`)(`retryTemplate`,o)(`mode`,e.mode())(`months`,e.months())(`locale`,e.locale())(`calendarId`,e.calendarId())(`showToday`,e.highlightToday())(`showWeekNumbers`,e.showWeekNumbers())(`disabledIntervals`,e.restrict()?e.disabledIntervals:KP(27,ki))(`metadata`,e.metadata())(`dayTemplate`,e.customCells()?e.dayTemplate():void 0)(`availability`,e.availability())(`blockUnverifiedAvailability`,e.asyncMode()),SE(`value`,e.value),y(2),fe$1(e.visible()),y(2),yE(`Committed value: `,e.describeValue(),`. `,e.outcome())}},dependencies:[fe,UT,qt,Sa$1],styles:[`
.calendar-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-3, 0.75rem);
}
.calendar-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.calendar-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
}
.calendar-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  max-inline-size: 68ch;
}
.demo-group[_ngcontent-%COMP%], 
.demo-toggles[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-2, 0.5rem);
}
.calendar-panel[_ngcontent-%COMP%] {
  inline-size: fit-content;
  padding: var(--%NS%bx-space-3, 0.75rem);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  background: var(--%NS%bx-bg-surface);
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-border-subtle, var(--%NS%bx-border-default));
  box-shadow: var(--%NS%bx-shadow-sm);
}
.custom-day[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.1;
}
.custom-day-badge[_ngcontent-%COMP%], 
.custom-day-price[_ngcontent-%COMP%] {
  font-size: 0.625rem;
  color: var(--%NS%bx-text-secondary);
}
.demo-status[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-accent);
}`]})};var Wi=()=>[0];var Oi=()=>[];var ti=(r,a)=>a.value;function zi(r,a){if(r&1){let t=ut$1();_(0,`button`,21),J(`click`,function(){let o=Le(t).$implicit,c=w();return je(c.locale.set(o.value))}),Q(1),D()}if(r&2){let t=a.$implicit,e=w();T(`variant`,e.locale()===t.value?`filled`:`tonal`),y(),pn(` `,t.label,` `)}}function Li(r,a){if(r&1){let t=ut$1();_(0,`button`,21),J(`click`,function(){let o=Le(t).$implicit,c=w();return c.mode.set(o.value),je(c.value.set(null))}),Q(1),D()}if(r&2){let t=a.$implicit,e=w();T(`variant`,e.mode()===t.value?`filled`:`tonal`),y(),pn(` `,t.label,` `)}}function Ri(r,a){if(r&1){let t=ut$1();_(0,`bx-slide-toggle`,34),EE(`checkedChange`,function(o){Le(t);let c=w();return qP(c.disableLongPresets,o)||(c.disableLongPresets=o),je(o)}),D()}if(r&2){let t=w();SE(`checked`,t.disableLongPresets)}}var Xe=class r{destroyRef=f(X$1);mode=M(`single`);locale=M(`en-GB`);value=M(null);readonlyState=M(!1);disabledState=M(!1);separateFields=M(!1);dropdownIcon=M(!1);longPresets=M(!1);editable=M(!0);naturalLanguage=M(!0);disableLongPresets=M(!1);highlightToday=M(!0);disableSundays=M(!1);showToday=M(!1);showPresets=M(!1);initialView=M(void 0);viewResult=M(`Default calendar view.`);months=M(1);minDate=M(null);maxDate=M(null);visibleTags=M(2);selectionLimit=M(12);minLength=M(1);asyncEnabled=M(!1);availabilityLoading=M(!1);failNext=M(!1);committed=M(`Nothing committed yet.`);parseError=M(``);labels=g(()=>{let a={"en-GB":{field:`Enter date range`,placeholder:`Enter a date`,apply:`Apply`,presets:`Quick select`,hint:`Try 'next friday', 'in 3 days', or a strict dd/MM/yyyy value.`,start:`Start date`,end:`End date`,today:`Select today`,invalid:`Enter a valid selection. The start date must not follow the end date.`,clear:`Clear selection`,selected:`Selected dates`,seven:`Last 7 days`,thirty:`Last 30 days`,month:`This month`,ten:`Next 10 days`,rolling:`Rolling`,calendar:`Calendar`,custom:`Custom`},"es-ES":{field:`Introduce un intervalo de fechas`,placeholder:`Introduce una fecha`,apply:`Aplicar`,presets:`Selección rápida`,hint:`Prueba 'próximo viernes', 'en 3 días' o una fecha estricta dd/MM/yyyy.`,start:`Fecha inicial`,end:`Fecha final`,today:`Seleccionar hoy`,invalid:`Introduce una selección válida. La fecha inicial no puede ser posterior a la final.`,clear:`Borrar selección`,selected:`Fechas seleccionadas`,seven:`Últimos 7 días`,thirty:`Últimos 30 días`,month:`Este mes`,ten:`Próximos 10 días`,rolling:`Relativo`,calendar:`Calendario`,custom:`Personalizado`},"fr-FR":{field:`Saisir une plage de dates`,placeholder:`Saisir une date`,apply:`Appliquer`,presets:`Sélection rapide`,hint:`Essayez 'vendredi prochain', 'dans 3 jours' ou une date stricte dd/MM/yyyy.`,start:`Date de début`,end:`Date de fin`,today:`Aujourd’hui`,invalid:`Saisissez une sélection valide. La date de début ne peut pas suivre la date de fin.`,clear:`Effacer la sélection`,selected:`Dates sélectionnées`,seven:`7 derniers jours`,thirty:`30 derniers jours`,month:`Ce mois-ci`,ten:`10 prochains jours`,rolling:`Relatif`,calendar:`Calendrier`,custom:`Personnalisé`},"de-DE":{field:`Datumsbereich eingeben`,placeholder:`Datum eingeben`,apply:`Anwenden`,presets:`Schnellauswahl`,hint:`Versuchen Sie 'nächsten Freitag', 'in 3 Tagen' oder ein Datum im strikten Format dd/MM/yyyy.`,start:`Startdatum`,end:`Enddatum`,today:`Heute auswählen`,invalid:`Geben Sie eine gültige Auswahl ein. Das Startdatum darf nicht nach dem Enddatum liegen.`,clear:`Auswahl löschen`,selected:`Ausgewählte Daten`,seven:`Letzte 7 Tage`,thirty:`Letzte 30 Tage`,month:`Dieser Monat`,ten:`Nächste 10 Tage`,rolling:`Relativ`,calendar:`Kalender`,custom:`Benutzerdefiniert`}};return a[this.locale()]??a[`en-GB`]});validationMessages=g(()=>{let a={"en-GB":{dateParse:({params:t})=>`Enter a date in the ${t.format} format.`,dateMin:({params:t})=>`The date cannot be before ${t.minFormatted}.`,dateMax:({params:t})=>`The date cannot be after ${t.maxFormatted}.`,dateOrder:({params:t})=>`The end date cannot be before the start date (${t.startFormatted}).`},"es-ES":{dateParse:({params:t})=>`Introduce una fecha con el formato ${t.format}.`,dateMin:({params:t})=>`La fecha no puede ser anterior al ${t.minFormatted}.`,dateMax:({params:t})=>`La fecha no puede ser posterior al ${t.maxFormatted}.`,dateOrder:({params:t})=>`La fecha final no puede ser anterior a la inicial (${t.startFormatted}).`},"fr-FR":{dateParse:({params:t})=>`Saisissez une date au format ${t.format}.`,dateMin:({params:t})=>`La date ne peut pas pr\xE9c\xE9der le ${t.minFormatted}.`,dateMax:({params:t})=>`La date ne peut pas suivre le ${t.maxFormatted}.`,dateOrder:({params:t})=>`La date de fin ne peut pas pr\xE9c\xE9der la date de d\xE9but (${t.startFormatted}).`},"de-DE":{dateParse:({params:t})=>`Geben Sie ein Datum im Format ${t.format} ein.`,dateMin:({params:t})=>`Das Datum darf nicht vor dem ${t.minFormatted} liegen.`,dateMax:({params:t})=>`Das Datum darf nicht nach dem ${t.maxFormatted} liegen.`,dateOrder:({params:t})=>`Das Enddatum darf nicht vor dem Startdatum (${t.startFormatted}) liegen.`}};return a[this.locale()]??a[`en-GB`]});locales=[{value:`en-GB`,label:`English`},{value:`es-ES`,label:`Español`},{value:`fr-FR`,label:`Français`},{value:`de-DE`,label:`Deutsch`}];modes=[{value:`single`,label:`Single`},{value:`range`,label:`Range`},{value:`multiple`,label:`Multiple`},{value:`month`,label:`Month and year`},{value:`quarter`,label:`Quarter`},{value:`year`,label:`Year only`},{value:`week`,label:`Week`},{value:`week-range`,label:`Week range`},{value:`month-range`,label:`Month range`},{value:`quarter-range`,label:`Quarter range`},{value:`year-range`,label:`Year range`}];presets=g(()=>{let a=zd(this.mode()),t=a.period??`day`,e=new Intl.RelativeTimeFormat(this.locale(),{numeric:`auto`}),o=(U,A)=>t===`year`?U.calendar.addYears(U.today,A,U.locale):t===`month`||t===`quarter`?U.calendar.addMonths(U.today,A*(t===`quarter`?3:1),U.locale):xe(U.today,A*(t===`week`?7:1)),c=a.isRange?this.builtInPresets():[0,-1,1].map(U=>({id:`relative-${U}`,label:e.format(U,t),resolve:A=>o(A,U)})),s=this.longPresets()?Array.from({length:16},(U,A)=>({id:`previous-period-${A+2}`,label:e.format(-(A+2),t),group:this.labels().rolling,disabled:this.disableLongPresets()&&A%3===2,resolve:yt=>{let dt=o(yt,-(A+2));return a.isRange?{start:dt,end:t===`day`?dt:o(yt,-(A+1))}:dt}})):[];return[...c,...s]});resolver=async a=>{let t=this.failNext(),e=++this.requestRevision;if(this.failNext.set(!1),this.availabilityLoading.set(!0),await new Promise(o=>setTimeout(o,550)),this.destroyRef.destroyed)return{dates:[]};if(e===this.requestRevision&&this.availabilityLoading.set(!1),t)throw new Error(`The mock request failed. Retry to load these dates.`);return{dates:this.mockMetadata(a.start,a.end)}};requestRevision=0;failRequest(a){this.failNext.set(!0),a.reloadAvailability()}setVisibleTags(a){this.visibleTags.set(Math.max(1,Number(a)||1))}setSelectionLimit(a){this.selectionLimit.set(a===null||a===``?null:Math.max(1,Number(a)||1))}onCommit(a){this.committed.set(this.describe(a))}onParseFailed(a){this.parseError.set(a)}describe(a){return a===null?`Cleared.`:typeof a==`string`?`Committed single date ${a}.`:Array.isArray(a)?`Committed ${a.length} dates: ${a.join(`, `)}.`:`start`in a?`Committed ${`kind`in a?a.kind+` `:``}range ${a.start} \u2013 ${a.end}.`:`Committed value.`}mockMetadata(a,t){let e=[],o=/* @__PURE__ */ new Date(`${a}T00:00:00Z`),c=/* @__PURE__ */ new Date(`${t}T00:00:00Z`),s=0;for(;o<=c;){let U=o.toISOString().slice(0,10),A=s%4!==0;e.push({date:U,status:A?`available`:`unavailable`,badge:A?`${s%3+1} left`:`Full`,tone:A?`success`:`danger`}),o.setUTCDate(o.getUTCDate()+1),s+=1}return e}builtInPresets(){return[{id:`last-seven-days`,label:this.labels().seven,group:this.labels().rolling,resolve:a=>({start:xe(a.today,-6),end:a.today})},{id:`last-thirty-days`,label:this.labels().thirty,group:this.labels().rolling,resolve:a=>({start:xe(a.today,-29),end:a.today})},{id:`this-month`,label:this.labels().month,group:this.labels().calendar,resolve:a=>{let[t,e]=a.today.split(`-`).map(Number);return{start:`${t}-${String(e).padStart(2,`0`)}-01`,end:a.today}}}]}static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-date-picker-examples`]],decls:57,vars:69,consts:[[`picker`,``],[`aria-labelledby`,`date-picker-demo-title`,1,`picker-demo`],[`id`,`date-picker-demo-title`],[`role`,`group`,`aria-label`,`Language`,1,`demo-group`],[`bx-button`,``,`type`,`button`,3,`variant`],[`role`,`group`,`aria-label`,`Selection mode`,1,`demo-group`],[1,`demo-toggles`],[`label`,`Separate start/end fields`,3,`checkedChange`,`checked`],[`label`,`Typed input`,3,`checkedChange`,`checked`],[`label`,`Natural language`,3,`checkedChange`,`checked`],[`label`,`Highlight today`,3,`checkedChange`,`checked`],[`label`,`Disable Sundays`,3,`checkedChange`,`checked`],[`label`,`Today shortcut`,3,`checkedChange`,`checked`],[`label`,`Long quick-select list`,3,`checkedChange`,`checked`],[`label`,`Dropdown icon`,3,`checkedChange`,`checked`],[`label`,`Quick select`,3,`checkedChange`,`checked`],[`label`,`Disable every third extra preset`,3,`checked`],[`label`,`Async availability`,3,`checkedChange`,`checked`],[`label`,`Read only`,3,`checkedChange`,`checked`],[`label`,`Disabled`,3,`checkedChange`,`checked`],[`role`,`group`,`aria-label`,`Range length`,1,`demo-group`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`],[`role`,`group`,`aria-label`,`Initial calendar view`,1,`demo-group`],[1,`demo-settings`],[`label`,`Earliest date`,`mode`,`single`,`dateFormat`,`dd/MM/yyyy`,`subscriptSizing`,`dynamic`,`hint`,`Cannot be later than the latest date.`,`presetsPlacement`,`hidden`,3,`valueChange`,`locale`,`showToday`,`max`,`value`],[`label`,`Latest date`,`mode`,`single`,`dateFormat`,`dd/MM/yyyy`,`subscriptSizing`,`dynamic`,`hint`,`Cannot be earlier than the earliest date.`,`presetsPlacement`,`hidden`,3,`valueChange`,`locale`,`showToday`,`min`,`value`],[`label`,`Visible tags`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`value`],[`label`,`Selection limit`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`value`],[`role`,`group`,`aria-label`,`Availability requests`,1,`demo-group`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[`loadErrorMessage`,`The mock request failed. Retry to load these dates.`,`dateFormat`,`dd/MM/yyyy`,3,`valueChange`,`viewChange`,`monthSelected`,`yearSelected`,`valueCommit`,`parseFailed`,`startView`,`showToday`,`disabledWeekdays`,`min`,`max`,`visibleTagCount`,`selectionLimit`,`hint`,`pickerIcon`,`mode`,`separateFields`,`editable`,`allowNaturalLanguage`,`months`,`locale`,`minRangeLength`,`presets`,`presetsPlacement`,`resolver`,`readOnly`,`disabled`,`label`,`applyLabel`,`startLabel`,`endLabel`,`todayLabel`,`errorMessages`,`clearLabel`,`selectedDatesLabel`,`presetsLabel`,`value`],[`role`,`status`,`aria-live`,`polite`,1,`demo-status`],[`role`,`status`,1,`demo-status`],[`label`,`Disable every third extra preset`,3,`checkedChange`,`checked`]],template:function(t,e){if(t&1){let o=ut$1();_(0,`section`,1)(1,`h3`,2),Q(2,`Date picker with typed ranges and presets`),D(),_(3,`p`),Q(4,` Single and multiple dates update the field on selection; ranges commit on their second date. Resize below the Blocks mobile breakpoint to see the same state move into the reusable bottom drawer without losing the draft. `),D(),_(5,`div`,3),Lt(6,zi,2,2,`button`,4,ti),D(),_(8,`div`,5),Lt(9,Li,2,2,`button`,4,ti),D(),_(11,`div`,6)(12,`bx-slide-toggle`,7),EE(`checkedChange`,function(s){return Le(o),qP(e.separateFields,s)||(e.separateFields=s),je(s)}),D(),_(13,`bx-slide-toggle`,8),EE(`checkedChange`,function(s){return Le(o),qP(e.editable,s)||(e.editable=s),je(s)}),D(),_(14,`bx-slide-toggle`,9),EE(`checkedChange`,function(s){return Le(o),qP(e.naturalLanguage,s)||(e.naturalLanguage=s),je(s)}),D(),_(15,`bx-slide-toggle`,10),EE(`checkedChange`,function(s){return Le(o),qP(e.highlightToday,s)||(e.highlightToday=s),je(s)}),D(),_(16,`bx-slide-toggle`,11),EE(`checkedChange`,function(s){return Le(o),qP(e.disableSundays,s)||(e.disableSundays=s),je(s)}),D(),_(17,`bx-slide-toggle`,12),EE(`checkedChange`,function(s){return Le(o),qP(e.showToday,s)||(e.showToday=s),je(s)}),D(),_(18,`bx-slide-toggle`,13),EE(`checkedChange`,function(s){return Le(o),qP(e.longPresets,s)||(e.longPresets=s),je(s)}),D(),_(19,`bx-slide-toggle`,14),EE(`checkedChange`,function(s){return Le(o),qP(e.dropdownIcon,s)||(e.dropdownIcon=s),je(s)}),D(),_(20,`bx-slide-toggle`,15),EE(`checkedChange`,function(s){return Le(o),qP(e.showPresets,s)||(e.showPresets=s),je(s)}),D(),L$1(21,Ri,1,1,`bx-slide-toggle`,16),_(22,`bx-slide-toggle`,17),J(`checkedChange`,function(s){return e.asyncEnabled.set(s)}),D(),_(23,`bx-slide-toggle`,18),EE(`checkedChange`,function(s){return Le(o),qP(e.readonlyState,s)||(e.readonlyState=s),je(s)}),D(),_(24,`bx-slide-toggle`,19),EE(`checkedChange`,function(s){return Le(o),qP(e.disabledState,s)||(e.disabledState=s),je(s)}),D()(),_(25,`div`,20)(26,`button`,21),J(`click`,function(){return e.minLength.set(1)}),Q(27,`Any length`),D(),_(28,`button`,21),J(`click`,function(){return e.minLength.set(3)}),Q(29,`Minimum 3 days`),D(),_(30,`button`,21),J(`click`,function(){return e.months.set(1)}),Q(31,`One month`),D(),_(32,`button`,21),J(`click`,function(){return e.months.set(2)}),Q(33,`Two months`),D()(),_(34,`div`,22)(35,`button`,21),J(`click`,function(){return e.initialView.set(void 0)}),Q(36,`Default view`),D(),_(37,`button`,21),J(`click`,function(){return e.initialView.set(`months`)}),Q(38,` Start with months `),D(),_(39,`button`,21),J(`click`,function(){return e.initialView.set(`years`)}),Q(40,`Start with years`),D()(),_(41,`div`,23)(42,`bx-date-picker`,24),EE(`valueChange`,function(s){return Le(o),qP(e.minDate,s)||(e.minDate=s),je(s)}),D(),_(43,`bx-date-picker`,25),EE(`valueChange`,function(s){return Le(o),qP(e.maxDate,s)||(e.maxDate=s),je(s)}),D(),_(44,`bx-input-field`,26),J(`valueChange`,function(s){return e.setVisibleTags(s)}),D(),_(45,`bx-input-field`,27),J(`valueChange`,function(s){return e.setSelectionLimit(s)}),D()(),_(46,`div`,28)(47,`button`,29),J(`click`,function(){Le(o);let s=Tt(52);return je(e.failRequest(s))}),Q(48,` Fail next request now `),D(),_(49,`button`,30),J(`click`,function(){Le(o);let s=Tt(52);return je(s.reloadAvailability())}),Q(50,`Reload dates`),D()(),_(51,`bx-date-picker`,31,0),EE(`valueChange`,function(s){return Le(o),qP(e.value,s)||(e.value=s),je(s)}),J(`viewChange`,function(s){return e.viewResult.set(`Calendar view: `+s)})(`monthSelected`,function(s){return e.viewResult.set(`Month selected: `+s)})(`yearSelected`,function(s){return e.viewResult.set(`Year selected: `+s)})(`valueCommit`,function(s){return e.onCommit(s)})(`parseFailed`,function(s){return e.onParseFailed(s)}),D(),_(53,`p`,32),Q(54),D(),_(55,`p`,33),Q(56),D()()}t&2&&(y(6),jt(e.locales),y(3),jt(e.modes),y(3),SE(`checked`,e.separateFields),y(),SE(`checked`,e.editable),y(),SE(`checked`,e.naturalLanguage),y(),SE(`checked`,e.highlightToday),y(),SE(`checked`,e.disableSundays),y(),SE(`checked`,e.showToday),y(),SE(`checked`,e.longPresets),y(),SE(`checked`,e.dropdownIcon),y(),SE(`checked`,e.showPresets),y(),j$1(e.longPresets()?21:-1),y(),T(`checked`,e.asyncEnabled()),y(),SE(`checked`,e.readonlyState),y(),SE(`checked`,e.disabledState),y(2),T(`variant`,e.minLength()===1?`filled`:`tonal`),y(2),T(`variant`,e.minLength()===3?`filled`:`tonal`),y(2),T(`variant`,e.months()===1?`filled`:`tonal`),y(2),T(`variant`,e.months()===2?`filled`:`tonal`),y(3),T(`variant`,e.initialView()===void 0?`filled`:`tonal`),y(2),T(`variant`,e.initialView()===`months`?`filled`:`tonal`),y(2),T(`variant`,e.initialView()===`years`?`filled`:`tonal`),y(3),T(`locale`,e.locale())(`showToday`,e.highlightToday())(`max`,e.maxDate()),SE(`value`,e.minDate),y(),T(`locale`,e.locale())(`showToday`,e.highlightToday())(`min`,e.minDate()),SE(`value`,e.maxDate),y(),T(`min`,1)(`value`,e.visibleTags()),y(),T(`min`,1)(`value`,e.selectionLimit()),y(2),T(`disabled`,!e.asyncEnabled()||e.availabilityLoading()),y(2),T(`disabled`,!e.asyncEnabled()||e.availabilityLoading()),y(2),T(`startView`,e.initialView())(`showToday`,e.highlightToday())(`disabledWeekdays`,e.disableSundays()?KP(67,Wi):KP(68,Oi))(`min`,e.minDate())(`max`,e.maxDate())(`visibleTagCount`,e.visibleTags())(`selectionLimit`,e.selectionLimit())(`hint`,e.labels().hint)(`pickerIcon`,e.dropdownIcon()?`chevron-down`:`calendar`)(`mode`,e.mode())(`separateFields`,e.separateFields())(`editable`,e.editable())(`allowNaturalLanguage`,e.naturalLanguage())(`months`,e.months())(`locale`,e.locale())(`minRangeLength`,e.minLength())(`presets`,e.presets())(`presetsPlacement`,e.showPresets()?`start`:`hidden`)(`resolver`,e.asyncEnabled()?e.resolver:void 0)(`readOnly`,e.readonlyState())(`disabled`,e.disabledState())(`label`,e.mode()===`range`?e.labels().field:e.labels().placeholder)(`applyLabel`,e.labels().apply)(`startLabel`,e.labels().start)(`endLabel`,e.labels().end)(`todayLabel`,e.showToday()?e.labels().today:void 0)(`errorMessages`,e.validationMessages())(`clearLabel`,e.labels().clear)(`selectedDatesLabel`,e.labels().selected)(`presetsLabel`,e.labels().presets),SE(`value`,e.value),y(3),fe$1(e.committed()),y(2),fe$1(e.viewResult()))},dependencies:[fe,Ba$1,va$1,Sa$1],styles:[`
.picker-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-3, 0.75rem);
  max-inline-size: 60rem;
}
.picker-demo[_ngcontent-%COMP%]    > bx-date-picker[_ngcontent-%COMP%] {
  max-inline-size: 32rem;
}
.picker-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.picker-demo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.picker-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
}
.picker-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  max-inline-size: 68ch;
}
.demo-group[_ngcontent-%COMP%], 
.demo-toggles[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-2, 0.5rem);
  align-items: center;
}
.demo-status[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-accent);
}
.demo-settings[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 12rem), 1fr));
  gap: var(--%NS%bx-space-3, 0.75rem);
}`]})};var ni=[`Skopje`,`Ohrid`,`Bitola`,`Prilep`,`Tetovo`,`Struga`,`Veles`,`Shtip`,`Kumanovo`,`Gevgelija`,`Kavadarci`,`Resen`,`Krusevo`,`Berovo`,`Debar`,`Strumica`,`Gostivar`,`Kicevo`,`Kratovo`,`Kocani`,`Radovish`,`Negotino`,`Delchevo`,`Vinica`].map(r=>({value:r}));var ii=[{label:`1 suggestion`,value:1},{label:`3 suggestions`,value:3},{label:`12 suggestions`,value:12},{label:`All 24 suggestions`,value:24}];var ai=[{label:`Primary`,value:`primary`},{label:`Accent`,value:`accent`},{label:`Success`,value:`text-success`},{label:`Info`,value:`text-info`}];var Te=class r{destroyRef=f(X$1);query=M(``);matches=g(()=>ni.filter(a=>a.value.toLowerCase().includes(this.query().toLowerCase())));options=M([]);loading=M(!1);searching=M(!1);error=M(void 0);hasMore=g(()=>this.options().length<this.matches().length);pageSize=M(3);failNext=M(!1);status=M(`Ready`);loadMoreConfig={text:`Load more suggestions`,loadingText:`Loading suggestions`,retryText:`Retry request`,variant:`tonal`,color:`accent`};timer;constructor(){this.destroyRef.onDestroy(()=>clearTimeout(this.timer))}search(a){clearTimeout(this.timer),this.query.set(a),this.error.set(void 0),this.loading.set(!0),this.searching.set(!0),this.status.set(`Replacing suggestions…`),this.timer=setTimeout(()=>{this.options.set(this.matches().slice(0,this.pageSize())),this.loading.set(!1),this.searching.set(!1),this.status.set(`First page ready`)},650)}loadMore(a){if(this.loading())return;this.loading.set(!0),this.error.set(void 0),this.status.set(`Request source: `+a.source);let t=this.failNext()&&a.source!==`retry`;this.failNext.set(!1),this.timer=setTimeout(()=>{t?(this.error.set(`The next page failed. Your results are kept.`),this.status.set(`Failed page retained. Choose Retry request.`)):(this.options.set(this.matches().slice(0,this.options().length+this.pageSize())),this.status.set(a.source===`retry`?`Retry succeeded`:`Page appended`)),this.loading.set(!1)},900)}setPageSize(a){let t=Number(a);this.pageSize.set(Number.isFinite(t)?Math.max(1,Math.min(24,Math.floor(t))):3),this.search(this.query())}static ɵfac=function(t){return new(t||r)};static ɵprov=ie$1({token:r,factory:r.ɵfac})};var Bi=()=>({ariaLabel:`Project details`});function Ai(r,a){r&1&&(_(0,`p`),Q(1,`Full width separator`),D(),ve(2,`bx-divider`)(3,`bx-divider`,7)(4,`bx-divider`,8),_(5,`bx-stack`,9)(6,`span`),Q(7,`Start`),D(),ve(8,`bx-divider`,10),_(9,`span`),Q(10,`End`),D()())}function Fi(r,a){if(r&1){let t=ut$1();_(0,`bx-popover`)(1,`bx-stack`)(2,`strong`),Q(3,`Project details`),D(),_(4,`p`),Q(5,`Your changes are saved in this workspace.`),D(),ve(6,`bx-input-field`,13),_(7,`button`,14),J(`click`,function(){Le(t),w();let o=Tt(2);return je(o.close())}),Q(8,`Done`),D()()()}}function qi(r,a){if(r&1&&(_(0,`bx-stack`,11)(1,`button`,12,0),Q(3,` Open details `),D(),Ti$1(4,Fi,9,0,`ng-template`,null,1,wr$1),D(),_(6,`p`),Q(7,`Internal actions stay open. Escape, outside click and tabbing out dismiss the panel.`),D()),r&2){let t=Tt(5);T(`wrap`,!0),y(),T(`bxPopover`,t)(`popoverConfig`,KP(3,Bi))}}function ji(r,a){r&1&&(_(0,`bx-stack`),ve(1,`bx-skeleton`,16)(2,`bx-skeleton`,17)(3,`bx-skeleton`,18),D()),r&2&&(y(2),T(`lines`,3)(`decorative`,!1))}function Hi(r,a){r&1&&(_(0,`p`),Q(1,`Loaded content replaces the placeholders without moving the surrounding actions.`),D())}function Ui(r,a){if(r&1){let t=ut$1();_(0,`button`,14),J(`click`,function(){Le(t);let o=w();return je(o.skeletonVisible.set(!o.skeletonVisible()))}),Q(1,`Toggle loaded content`),D(),_(2,`bx-card`,15),L$1(3,ji,4,2,`bx-stack`)(4,Hi,2,0,`p`),D()}if(r&2){let t=w();y(3),j$1(t.skeletonVisible()?3:4)}}function Gi(r,a){if(r&1){let t=ut$1();_(0,`bx-autocomplete`,19),ZO(),J(`queryChange`,function(o){Le(t);let c=w();return je(c.autocompleteDemoService.search(o))})(`loadMore`,function(o){Le(t);let c=w();return je(c.autocompleteDemoService.loadMore(o))})(`optionSelected`,function(o){Le(t);let c=w();return je(c.status.set(`Chose `+o.value))}),D(),_(1,`bx-stack`,20)(2,`button`,21),J(`click`,function(){Le(t);let o=w();return je(o.autocompleteDemoService.failNext.set(!0))}),Q(3,` Fail next page `),D(),_(4,`button`,22),J(`click`,function(){Le(t);let o=w();return je(o.autocompleteDemoService.search(``))}),Q(5,` Reload suggestions `),D(),_(6,`bx-checkbox`,23),EE(`checkedChange`,function(o){Le(t);let c=w();return qP(c.readOnly,o)||(c.readOnly=o),je(o)}),D(),_(7,`bx-select`,24),J(`selectionChange`,function(o){Le(t);let c=w();return je(c.autocompleteDemoService.setPageSize(o.value))}),D()(),_(8,`output`),Q(9),D(),_(10,`p`),Q(11,` Choose Fail next page, load another page, then Retry request. Existing suggestions remain visible. Small pages show the load-more action; larger pages enable scrolling. Search for an unknown city to see the empty state and keep free text. `),D()}if(r&2){let t=w();T(`formControl`,t.destination)(`options`,t.autocompleteDemoService.options())(`externalFiltering`,!0)(`searching`,t.autocompleteDemoService.searching())(`loading`,t.autocompleteDemoService.loading())(`hasMore`,t.autocompleteDemoService.hasMore())(`loadError`,t.autocompleteDemoService.error())(`readOnly`,t.readOnly())(`loadMoreConfig`,t.autocompleteDemoService.loadMoreConfig),QO(),y(),T(`wrap`,!0)(`gap`,2),y(),T(`disabled`,t.autocompleteDemoService.loading()||!t.autocompleteDemoService.hasMore()),y(2),T(`disabled`,t.autocompleteDemoService.loading()),y(2),SE(`checked`,t.readOnly),y(),T(`clearable`,!1)(`options`,t.pageSizes)(`value`,t.autocompleteDemoService.pageSize()),y(2),kE(`Value: `,t.destination.value||`(empty)`,` · `,t.autocompleteDemoService.options().length,` suggestions loaded · `,t.autocompleteDemoService.status(),``,t.autocompleteDemoService.failNext()?` · Next page will fail`:``)}}function Ki(r,a){if(r&1){let t=ut$1();_(0,`bx-chip`,30),J(`removed`,function(){let o=Le(t).$implicit,c=w(2);return je(c.removeChip(o))})(`activated`,function(){let o=Le(t).$implicit,c=w(2);return je(c.status.set(`Activated `+o))}),D()}if(r&2){let t=a.$implicit,e=w(2);T(`label`,t)(`selectable`,!1)(`removable`,!0)(`config`,e.chipConfig)}}function Qi(r,a){if(r&1){let t=ut$1();_(0,`bx-stack`,25)(1,`bx-chip`,26),EE(`selectedChange`,function(o){Le(t);let c=w();return qP(c.selected,o)||(c.selected=o),je(o)}),D(),Lt(2,Ki,1,4,`bx-chip`,27,Va$1),ve(4,`bx-chip`,28)(5,`bx-chip`,29),D(),_(6,`button`,14),J(`click`,function(){Le(t);let o=w();return je(o.resetChips())}),Q(7,`Restore chips`),D(),_(8,`output`),Q(9),D()}if(r&2){let t=w();T(`wrap`,!0)(`gap`,2),y(),T(`config`,t.chipConfig),SE(`selected`,t.selected),y(),jt(t.removableChips()),y(2),T(`selected`,!0)(`readOnly`,!0)(`removable`,!0),y(),T(`disabled`,!0),y(4),pn(`Design selected: `,t.selected())}}function Xi(r,a){r&1&&ve(0,`bx-tag`,38),r&2&&T(`focusable`,!1)}function Zi(r,a){if(r&1&&(Q(0),ve(1,`bx-tag`,39)),r&2){let t=a.$implicit;pn(``,t,` `),y(),T(`leadingNumber`,2)(`focusable`,!1)}}function Yi(r,a){r&1&&ve(0,`bx-input-field`,40)}function Ji(r,a){if(r&1){let t=ut$1();_(0,`bx-checkbox`,31),EE(`checkedChange`,function(o){Le(t);let c=w();return qP(c.multiple,o)||(c.multiple=o),je(o)}),D(),_(1,`bx-accordion`,32)(2,`bx-accordion-item`,33)(3,`p`),Q(4,`Your changes are saved in this workspace.`),D(),ve(5,`bx-input-field`,34),D(),_(6,`bx-accordion-item`,35)(7,`p`),Q(8,`Use arrows, Home and End between headings; Enter or Space toggles a section.`),D()(),ve(9,`bx-accordion-item`,36)(10,`bx-accordion-item`,37),D(),Ti$1(11,Xi,1,1,`ng-template`,null,2,wr$1)(13,Zi,2,3,`ng-template`,null,3,wr$1)(15,Yi,1,0,`ng-template`,null,4,wr$1)}if(r&2){let t=Tt(12),e=Tt(14),o=Tt(16),c=w();SE(`checked`,c.multiple),y(),T(`multiple`,c.multiple()),y(),T(`expanded`,!0)(`titleTemplate`,e)(`trailingTemplate`,t),y(7),T(`contentTemplate`,o),y(),T(`disabled`,!0)}}function $i(r,a){if(r&1){let t=ut$1();_(0,`bx-collapsible`,41),EE(`expandedChange`,function(o){Le(t);let c=w();return qP(c.expanded,o)||(c.expanded=o),je(o)}),_(1,`p`),Q(2,`Your changes are saved in this workspace.`),D(),ve(3,`bx-input-field`,34),D(),_(4,`button`,14),J(`click`,function(){Le(t);let o=w();return je(o.expanded.set(!o.expanded()))}),Q(5,`Toggle from application`),D(),_(6,`bx-collapsible`,42)(7,`p`),Q(8,`This content remains accessible while user toggling is prevented.`),D()(),_(9,`output`),Q(10),D()}if(r&2){let t=w();T(`region`,!0),SE(`expanded`,t.expanded),y(6),T(`expanded`,!0)(`readOnly`,!0),y(4),pn(`Expanded: `,t.expanded())}}function ea(r,a){if(r&1&&ve(0,`bx-alert`,43),r&2){let t=a.$implicit;T(`tone`,t)(`title`,t)}}function ta(r,a){if(r&1){let t=ut$1();_(0,`button`,47),J(`click`,function(){Le(t);let o=w(2);return je(o.alertVisible.set(!0))}),Q(1,`Restore dismissible banner`),D()}}function na(r,a){if(r&1){let t=ut$1();Lt(0,ea,1,2,`bx-alert`,43,Va$1),_(2,`bx-alert`,44),EE(`visibleChange`,function(o){Le(t);let c=w();return qP(c.alertVisible,o)||(c.alertVisible=o),je(o)}),J(`dismissed`,function(){Le(t);let o=w();return je(o.status.set(`Banner dismissed`))}),Q(3,` Long content and actions wrap inside the available width. `),_(4,`button`,45),J(`click`,function(){Le(t);let o=w();return je(o.status.set(`Banner action`))}),Q(5,`Review changes`),D()(),L$1(6,ta,2,0,`button`,46)}if(r&2){let t=w();jt(t.tones),y(2),T(`dismissible`,!0),SE(`visible`,t.alertVisible),y(4),j$1(t.alertVisible()?-1:6)}}function ia(r,a){if(r&1){let t=ut$1();_(0,`bx-stack`,48)(1,`bx-checkbox`,49),EE(`checkedChange`,function(o){Le(t);let c=w();return qP(c.cardClickable,o)||(c.cardClickable=o),je(o)}),D(),_(2,`bx-checkbox`,50),EE(`checkedChange`,function(o){Le(t);let c=w();return qP(c.cardDisabled,o)||(c.cardDisabled=o),je(o)}),D(),_(3,`bx-checkbox`,51),EE(`checkedChange`,function(o){Le(t);let c=w();return qP(c.cardReadOnly,o)||(c.cardReadOnly=o),je(o)}),D(),_(4,`bx-select`,52),J(`selectionChange`,function(o){Le(t);let c=w();return je(c.cardHighlight.set(o.value??`accent`))}),D()(),_(5,`bx-grid`,53)(6,`bx-card`,54),EE(`selectedChange`,function(o){Le(t);let c=w();return qP(c.cardSelected,o)||(c.cardSelected=o),je(o)}),J(`activated`,function(){Le(t);let o=w();return je(o.status.set(`Workspace activated`))}),_(7,`p`),Q(8,`Press anywhere, or use Enter and Space. Selection emits the chosen token through the shared surface lighting.`),D()(),_(9,`button`,55),J(`activated`,function(){Le(t);let o=w();return je(o.status.set(`Reports opened`))}),_(10,`p`),Q(11,`A native button card provides a single action without a selected state.`),D()(),_(12,`bx-card`,56)(13,`p`),Q(14,`A disabled card retains its content and selection but cannot be activated or focused.`),D()(),_(15,`bx-card`,57)(16,`p`),Q(17,`Read-only selection remains focusable and keeps its appearance.`),D()(),_(18,`bx-card`,58)(19,`p`),Q(20,`Ordinary cards remain containers for independent actions.`),D(),_(21,`button`,59),J(`click`,function(){Le(t);let o=w();return je(o.status.set(`Project opened`))}),Q(22,`Open project`),D()()(),_(23,`output`),Q(24),D()}if(r&2){let t=w();T(`wrap`,!0),y(),SE(`checked`,t.cardClickable),y(),SE(`checked`,t.cardDisabled),y(),SE(`checked`,t.cardReadOnly),y(),T(`options`,t.cardHighlightOptions)(`clearable`,!1)(`value`,t.cardHighlight()),y(2),T(`clickable`,t.cardClickable())(`disabled`,t.cardDisabled())(`readOnly`,t.cardReadOnly())(`highlightColor`,t.cardHighlight()),SE(`selected`,t.cardSelected),y(3),T(`highlightColor`,t.cardHighlight()),y(3),T(`clickable`,!0)(`disabled`,!0)(`selected`,!0),y(3),T(`clickable`,!0)(`readOnly`,!0)(`selected`,!0)(`highlightColor`,t.cardHighlight()),y(9),yE(`Workspace selected: `,t.cardSelected(),` · Highlight: `,t.cardHighlight())}}function aa(r,a){if(r&1){let t=ut$1();_(0,`bx-container`,5)(1,`bx-stack`)(2,`bx-stack`,60)(3,`h3`),Q(4,`Workspace overview`),D(),_(5,`button`,14),J(`click`,function(){Le(t);let o=w();return je(o.status.set(`New project requested`))}),Q(6,`New project`),D()(),_(7,`bx-grid`,61)(8,`bx-card`,62)(9,`p`),Q(10,`Your changes are saved in this workspace.`),D(),_(11,`button`,59),J(`click`,function(){Le(t);let o=w();return je(o.status.set(`Opened project`))}),Q(12,`Open project`),D()(),_(13,`bx-card`,63)(14,`bx-stack`,64),ve(15,`bx-chip`,65),_(16,`p`),Q(17,`Cards and layout share the global material and semantic palette.`),D()()(),_(18,`bx-card`,66)(19,`p`),Q(20,`Resize this page or increase browser zoom to see the grid adapt.`),D()()()()()}r&2&&(y(14),T(`gap`,2),y(),T(`selectable`,!1))}var Ze=class r{injector=f(Ie);autocompleteDemoService=f(Te);chips=sf(kT);pageSizes=ii;selected=M(!1);removableChips=M([`Angular`,`Design`,`Accessibility`]);tones=[`default`,`info`,`danger`,`warning`,`success`];skeletonVisible=M(!0);expanded=M(!1);multiple=M(!1);readOnly=M(!1);alertVisible=M(!0);status=M(`Ready`);destination=new pI(``);chipConfig={color:`accent`};cardHighlightOptions=ai;cardHighlight=M(`accent`);cardClickable=M(!0);cardDisabled=M(!1);cardReadOnly=M(!1);cardSelected=M(!1);example=b.required();constructor(){le(()=>{this.example()===`autocomplete`&&this.autocompleteDemoService.search(``)})}removeChip(a){let t=this.removableChips().indexOf(a);this.removableChips.update(e=>e.filter(o=>o!==a)),this.status.set(`Removed `+a),Ze$1(()=>{let e=this.chips().slice(1);e[Math.min(t,e.length-1)]?.focus()},{injector:this.injector})}resetChips(){this.removableChips.set([`Angular`,`Design`,`Accessibility`])}static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-essentials-examples`]],viewQuery:function(t,e){t&1&&Xt(e.chips,kT,5),t&2&&lt$1()},hostAttrs:[`data-bx-light-scope`,``],inputs:{example:[1,`example`]},features:[Qt([Te])],decls:15,vars:2,consts:[[`popover`,`bxPopover`],[`details`,``],[`projectStatus`,``],[`projectHeading`,``],[`lazyContent`,``],[`size`,`full`,`landmark`,`region`,`ariaLabel`,`Workspace content`,1,`container-demo`],[`role`,`status`],[`label`,`Continue`],[`lineStyle`,`dashed`],[`direction`,`horizontal`,`align`,`stretch`],[`orientation`,`vertical`],[`direction`,`horizontal`,3,`wrap`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`bxPopover`,`popoverConfig`],[`label`,`Project note`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`title`,`Project details`],[`shape`,`circle`,`height`,`3rem`],[`label`,`Loading content`,3,`lines`,`decorative`],[`shape`,`rectangle`,`height`,`5rem`],[`label`,`Destination`,`placeholder`,`Type a city or a custom destination`,`loadingText`,`Loading suggestions`,`emptyText`,`No suggestions. Enter your own destination.`,3,`queryChange`,`loadMore`,`optionSelected`,`formControl`,`options`,`externalFiltering`,`searching`,`loading`,`hasMore`,`loadError`,`readOnly`,`loadMoreConfig`],[`direction`,`horizontal`,`align`,`center`,3,`wrap`,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`bx-button`,``,`type`,`button`,`variant`,`text`,3,`click`,`disabled`],[`label`,`Read only`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Page size`,`subscriptSizing`,`dynamic`,1,`autocomplete-page-size`,3,`selectionChange`,`clearable`,`options`,`value`],[`direction`,`horizontal`,3,`wrap`,`gap`],[`label`,`Design`,3,`selectedChange`,`config`,`selected`],[3,`label`,`selectable`,`removable`,`config`],[`label`,`Read only`,3,`selected`,`readOnly`,`removable`],[`label`,`Disabled`,3,`disabled`],[3,`removed`,`activated`,`label`,`selectable`,`removable`,`config`],[`label`,`Allow multiple open panels`,3,`checkedChange`,`checked`],[3,`multiple`],[`title`,`Project details`,3,`expanded`,`titleTemplate`,`trailingTemplate`],[`label`,`Project name`],[`title`,`Keyboard and focus`],[`title`,`Lazy content`,3,`contentTemplate`],[`title`,`Unavailable section`,3,`disabled`],[`text`,`Saved`,`size`,`small`,3,`focusable`],[`size`,`small`,3,`leadingNumber`,`focusable`],[`label`,`Created when opened`],[`title`,`Project details`,3,`expandedChange`,`region`,`expanded`],[`title`,`Read-only open section`,3,`expanded`,`readOnly`],[`message`,`Your changes are saved in this workspace.`,3,`tone`,`title`],[`tone`,`info`,`title`,`Project details`,`dismissLabel`,`Dismiss notification`,`dismissFocusTarget`,`restore-banner`,3,`visibleChange`,`dismissed`,`dismissible`,`visible`],[`type`,`button`,`bx-button`,``,`bxAlertActions`,``,`variant`,`tonal`,3,`click`],[`type`,`button`,`id`,`restore-banner`,`bx-button`,``,`variant`,`tonal`],[`type`,`button`,`id`,`restore-banner`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`direction`,`horizontal`,`align`,`center`,3,`wrap`],[`label`,`Clickable`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Disable selectable card`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Read-only selectable card`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Highlight token`,`subscriptSizing`,`dynamic`,3,`selectionChange`,`options`,`clearable`,`value`],[`minColumnWidth`,`14rem`],[`title`,`Selectable workspace`,`ariaLabel`,`Selectable workspace`,3,`selectedChange`,`activated`,`clickable`,`disabled`,`readOnly`,`highlightColor`,`selected`],[`type`,`button`,`bx-card`,``,`title`,`Open reports`,`ariaLabel`,`Open reports`,3,`activated`,`highlightColor`],[`title`,`Unavailable workspace`,`ariaLabel`,`Unavailable workspace`,3,`clickable`,`disabled`,`selected`],[`title`,`Fixed workspace`,`ariaLabel`,`Fixed workspace`,3,`clickable`,`readOnly`,`selected`,`highlightColor`],[`title`,`Project details`,`subtitle`,`Content container`],[`type`,`button`,`bx-button`,``,`bxCardFooter`,``,`variant`,`tonal`,3,`click`],[`direction`,`responsive`,`justify`,`between`,`align`,`center`],[`minColumnWidth`,`12rem`],[`title`,`Project details`,`subtitle`,`Outlined surface`],[`title`,`Team activity`,`variant`,`elevated`],[3,`gap`],[`label`,`Ready`,3,`selectable`],[`title`,`Notes`,`variant`,`filled`]],template:function(t,e){if(t&1&&(_(0,`bx-stack`)(1,`p`),Q(2,`Use Appearance to try themes, materials and reduced motion.`),D(),L$1(3,Ai,11,0)(4,qi,8,4)(5,Ui,5,1)(6,Gi,12,21)(7,Qi,10,9)(8,Ji,17,7)(9,$i,11,5)(10,na,7,3)(11,ia,25,22)(12,aa,21,2,`bx-container`,5),_(13,`output`,6),Q(14),D()()),t&2){let o;y(3),j$1((o=e.example())===`divider`?3:o===`popover`?4:o===`skeleton`?5:o===`autocomplete`?6:o===`chip`?7:o===`accordion`?8:o===`collapsible`?9:o===`alert`?10:o===`card`?11:12),y(11),fe$1(e.status())}},dependencies:[ese,Kie,xB,Aa$1,fe,$r,va$1,Vt,bT,vT,yT,kT,Zd,Sb,CT,ST,FT,zT,BT,ET,mT],styles:[`
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
}`]})};var oi=[`mod`,`shift`,`k`];var ri=[`mod`,`k`];var li=[`mod`,`shift`,`v`];var si={mac:[`command`,`shift`,`d`],windows:[`ctrl`,`shift`,`d`],linux:[`alt`,`shift`,`d`],ios:[`command`,`shift`,`d`],android:[`ctrl`,`shift`,`d`],default:[`mod`,`alt`,`d`]};var ci=[`mac`,`windows`,`linux`,`ios`,`android`,`default`];var oa=()=>[`command`,`ctrl`,`option`,`shift`];function ra(r,a){if(r&1){let t=ut$1();_(0,`bx-menu`,8)(1,`bx-menu-item`,9),J(`action`,function(){Le(t);let o=w();return je(o.activate(`View opened`))}),D(),_(2,`bx-menu-item`,10),J(`action`,function(){Le(t);let o=w();return je(o.activate(`Project duplicated`))}),D(),_(3,`bx-menu-item`,11),J(`action`,function(){Le(t);let o=w();return je(o.activate(`Delete requested`))}),D()()}if(r&2){let t=w();y(),T(`shortcut`,t.viewShortcut)(`disabled`,t.viewDisabled.value),y(),T(`shortcut`,t.duplicateShortcut),y(),T(`danger`,!0)}}function la(r,a){if(r&1&&(_(0,`section`,7)(1,`h4`),Q(2),D(),_(3,`p`),Q(4,` Portable: `),_(5,`kbd`),Q(6),D()(),_(7,`p`),Q(8,` OS override: `),_(9,`kbd`),Q(10),D()(),_(11,`p`),Q(12,` Modifiers: `),_(13,`kbd`),Q(14),D()()()),r&2){let t=a.$implicit,e=w();y(2),fe$1(t==="default"?`Unknown / server`:t),y(4),fe$1(e.bxShortcutService.resolve(e.openShortcut,t)?.join(` + `)),y(4),fe$1(e.bxShortcutService.resolve(e.duplicateShortcut,t)?.join(` + `)),y(4),fe$1(e.bxShortcutService.resolve(KP(4,oa),t)?.join(` + `))}}var Ye=class r{bxShortcutService=f(sb);menu=Nt(Dl);openShortcut=oi;sequencePrefix=ri;viewShortcut=li;duplicateShortcut=si;platforms=ci;viewDisabled=new pI(!1,{nonNullable:!0});typing=new pI(``,{nonNullable:!0});waitingForView=M(!1);status=M(`Ready. Open the menu with its button or keyboard shortcut.`);sequenceTimer;actionCount=0;constructor(){f(X$1).onDestroy(()=>this.resetSequence())}onKeydown(a){if(this.bxShortcutService.matches(a,this.openShortcut)){a.preventDefault(),this.resetSequence(),this.menu()?.open(!0),this.status.set(`Menu opened by shortcut. Use arrow keys, Enter or Escape.`);return}if(this.bxShortcutService.matches(a,this.sequencePrefix)){a.preventDefault(),this.resetSequence(),this.waitingForView.set(!0),this.sequenceTimer=setTimeout(()=>this.resetSequence(),2e3);return}if(this.waitingForView()){if([`Meta`,`Control`,`Alt`,`Shift`].includes(a.key)||a.repeat)return;let t=this.bxShortcutService.matches(a,`v`);if(this.resetSequence(),t){a.preventDefault(),this.menu()?.open(!0),this.status.set(`Menu opened by sequence.`);return}}!this.viewDisabled.value&&this.bxShortcutService.matches(a,this.viewShortcut)?(a.preventDefault(),this.activate(`View opened`)):this.bxShortcutService.matches(a,this.duplicateShortcut)&&(a.preventDefault(),this.activate(`Project duplicated`))}activate(a){a===`View opened`&&this.viewDisabled.value||(this.resetSequence(),this.status.set(`${a} \xB7 action ${++this.actionCount}`),this.menu()?.close(!0))}resetSequence(){clearTimeout(this.sequenceTimer),this.sequenceTimer=void 0,this.waitingForView.set(!1)}static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-menu-shortcut-examples`]],viewQuery:function(t,e){t&1&&Xt(e.menu,Dl,5),t&2&&lt$1()},hostBindings:function(t,e){t&1&&J(`keydown`,function(c){return e.onKeydown(c)},Ko$1)(`pointerdown`,function(){return e.resetSequence()},Ko$1)(`blur`,function(){return e.resetSequence()},MR)},decls:38,vars:11,consts:[[`actions`,``],[1,`shortcut-demo`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`menuPlacement`,`bottom`,`menuLabel`,`Project actions`,3,`bxMenuTrigger`,`menuHover`],[`role`,`status`],[`label`,`Disable Open view (click and shortcut)`,3,`formControl`],[`label`,`Type here to try the editable-control guard`,3,`formControl`],[1,`platform-previews`],[1,`platform-preview`],[1,`shortcut-menu`],[`label`,`Open view`,`icon`,`external-link`,3,`action`,`shortcut`,`disabled`],[`label`,`Duplicate project`,`icon`,`copy`,3,`action`,`shortcut`],[`label`,`Delete project`,`icon`,`trash-2`,3,`action`,`danger`]],template:function(t,e){if(t&1&&(_(0,`div`,1)(1,`p`)(2,`code`),Q(3,`shortcut`),D(),Q(4,` displays a hint. This example also handles keyboard events using `),_(5,`code`),Q(6,`BxShortcutService.matches()`),D(),Q(7,`.`),D(),_(8,`p`),Q(9,`One lit surface follows enabled rows with pointer or keyboard focus. Navigate quickly to inspect retargeting, including the danger item.`),D(),_(10,`p`),Q(11,`On this device, `),_(12,`code`),Q(13,`mod`),D(),Q(14),D(),_(15,`div`)(16,`button`,2),Q(17),D()(),_(18,`p`),Q(19),D(),_(20,`p`,3),Q(21),D(),Ti$1(22,ra,4,4,`ng-template`,null,0,wr$1),_(24,`bx-checkbox`,4),ZO(),D(),_(25,`bx-input-field`,5),ZO(),D(),_(26,`p`),Q(27,` The Open view shortcut works while this demo is mounted, including when the menu is closed. Shortcuts ignore typing fields, held-key repeats and composition. `),D(),_(28,`h3`),Q(29,`Defaults across platforms`),D(),_(30,`p`),Q(31,` These previews use the same service and definitions. `),_(32,`code`),Q(33,`mod`),D(),Q(34,` avoids repeating OS mappings; explicit overrides are available when bindings differ. `),D(),_(35,`div`,6),Lt(36,la,15,5,`section`,7,Va$1),D()()),t&2){let o=Tt(23);y(14),yE(` uses `,e.bxShortcutService.resolve(`mod`)?.join(``),` (detected platform: `,e.bxShortcutService.platform(),`).`),y(2),T(`bxMenuTrigger`,o)(`menuHover`,!1),B(`aria-keyshortcuts`,e.bxShortcutService.toAriaKeyshortcuts(e.openShortcut)),y(),pn(` Project actions · `,e.bxShortcutService.resolve(e.openShortcut)?.join(` + `),` `),y(2),yE(` Press `,e.bxShortcutService.resolve(e.openShortcut)?.join(` + `),` together to open the menu. Or press `,e.bxShortcutService.resolve(e.sequencePrefix)?.join(` + `),`, release the keys, then press V within two seconds. Escape, another key, a pointer press or leaving the window cancels the sequence. `),y(2),fe$1(e.waitingForView()?`Waiting for V…`:e.status()),y(3),T(`formControl`,e.viewDisabled),QO(),y(),T(`formControl`,e.typing),QO(),y(11),jt(e.platforms)}},dependencies:[fe,$r,va$1,ese,Kie,xB,wb,yb,Dl],styles:[`
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
}`]})};var sa=r=>({maxVisibleItems:r});function ca(r,a){if(r&1){let t=ut$1();_(0,`bx-page-footer`)(1,`bx-stack`,12)(2,`button`,13),J(`click`,function(){Le(t);let o=w();return je(o.result.set(`Footer action completed.`))}),Q(3,`Try footer action`),D(),_(4,`span`,14),Q(5),D()()()}if(r&2){let t=w();y(),T(`gap`,3),y(4),fe$1(t.result())}}var Je=class r{title=M(`Workspace overview`);description=M(`A shared heading and consistent gutters for every page.`);breadcrumbsAfterControl=new pI(1,{nonNullable:!0});breadcrumbsAfter=lJ(this.breadcrumbsAfterControl.valueChanges,{initialValue:this.breadcrumbsAfterControl.value});nesting=M(1);automatic=M(!1);breadcrumbLimit=M(3);showFooter=M(!0);result=M(`No action yet.`);nestingOptions=[{label:`Root page`,value:0},{label:`One nesting`,value:1},{label:`Two nestings`,value:2},{label:`Three nestings`,value:3}];previewBreadcrumbs=g(()=>[...this.nesting()>=3?[{label:`Home`,route:`/home`}]:[],{label:`Components`,route:`/components`},...this.nesting()>=1?[{label:`Layout`,route:`/components/layout`}]:[],...this.nesting()>=2?[{label:`Page container`,route:`/components/layout/page-container`}]:[]]);constructor(){this.breadcrumbsAfterControl.valueChanges.pipe(Bl(ew),gf()).subscribe(()=>{let a=this.breadcrumbsAfterControl.value,t=Math.max(0,Math.trunc(Number(a))||0);t!==a&&this.breadcrumbsAfterControl.setValue(t)})}static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-page-examples`]],decls:16,vars:25,consts:[[3,`gap`],[`direction`,`responsive`,3,`gap`],[`label`,`Preview title`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Description`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Preview nesting`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Show breadcrumbs after nesting`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`min`,`formControl`],[`label`,`Visible breadcrumb entries`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`min`,`ngModel`],[`label`,`Use current route breadcrumbs`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Show footer`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`size`,`full`,1,`page-preview`,3,`breadcrumbs`,`breadcrumbsAfter`,`breadcrumbConfig`],[`sectionTitle`,`Primitives`,3,`pageTitle`,`pageDescription`,`autoResolveTitlesFromNavigation`,`headingLevel`],[`title`,`Page content`,`message`,`This section grows naturally with its content. The page keeps one scroll surface and the same responsive gutters.`],[`direction`,`responsive`,`align`,`center`,3,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`role`,`status`]],template:function(t,e){t&1&&(_(0,`bx-stack`,0)(1,`bx-stack`,1)(2,`bx-input-field`,2),ZO(),EE(`ngModelChange`,function(c){return qP(e.title,c)||(e.title=c),c}),D(),_(3,`bx-input-field`,3),ZO(),EE(`ngModelChange`,function(c){return qP(e.description,c)||(e.description=c),c}),D()(),_(4,`bx-stack`,1)(5,`bx-select`,4),ZO(),EE(`ngModelChange`,function(c){return qP(e.nesting,c)||(e.nesting=c),c}),D(),_(6,`bx-input-field`,5),ZO(),D(),_(7,`bx-input-field`,6),ZO(),EE(`ngModelChange`,function(c){return qP(e.breadcrumbLimit,c)||(e.breadcrumbLimit=c),c}),D()(),_(8,`bx-stack`,1)(9,`bx-slide-toggle`,7),ZO(),EE(`ngModelChange`,function(c){return qP(e.automatic,c)||(e.automatic=c),c}),D(),_(10,`bx-slide-toggle`,8),ZO(),EE(`ngModelChange`,function(c){return qP(e.showFooter,c)||(e.showFooter=c),c}),D()(),_(11,`bx-page-container`,9),ve(12,`bx-page-header`,10),_(13,`bx-page-content`),ve(14,`bx-alert`,11),D(),L$1(15,ca,6,2,`bx-page-footer`),D()()),t&2&&(T(`gap`,5),y(),T(`gap`,4),y(),SE(`ngModel`,e.title),QO(),y(),SE(`ngModel`,e.description),QO(),y(),T(`gap`,4),y(),T(`clearable`,!1)(`options`,e.nestingOptions),SE(`ngModel`,e.nesting),QO(),y(),T(`min`,0)(`formControl`,e.breadcrumbsAfterControl),QO(),y(),T(`min`,2),SE(`ngModel`,e.breadcrumbLimit),QO(),y(),T(`gap`,4),y(),SE(`ngModel`,e.automatic),QO(),y(),SE(`ngModel`,e.showFooter),QO(),y(),T(`breadcrumbs`,e.automatic()?void 0:e.previewBreadcrumbs())(`breadcrumbsAfter`,e.breadcrumbsAfter())(`breadcrumbConfig`,Cs(23,sa,e.breadcrumbLimit())),y(),T(`pageTitle`,e.title())(`pageDescription`,e.description())(`autoResolveTitlesFromNavigation`,!1)(`headingLevel`,2),y(3),j$1(e.showFooter()?15:-1))},dependencies:[Jie,Kie,bB,ese,xB,vT,fe,va$1,Vt,Sa$1,MT,IT,TT,_l,ET],styles:[`
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
}`]})};function da(r,a){if(r&1){let t=ut$1();_(0,`bx-input-field`,13),ZO(),J(`ngModelChange`,function(o){Le(t);let c=w();return je(c.minimum.set(o))}),D(),_(1,`bx-input-field`,14),ZO(),J(`ngModelChange`,function(o){Le(t);let c=w();return je(c.maximum.set(o))}),D()}if(r&2){let t=w();T(`min`,0)(`ngModel`,t.minimum()),QO(),y(),T(`min`,0)(`ngModel`,t.maximum()),QO()}}var $e=class r{edges=[{label:`Right edge (width)`,value:`right`},{label:`Left edge (width)`,value:`left`},{label:`Bottom edge (height)`,value:`bottom`},{label:`Top edge (height)`,value:`top`}];edge=M(`right`);size=M(180);minimum=M(60);maximum=M(280);disableShrink=M(!0);customBounds=M(!1);status=M(`Drag the inner edge, or focus it and use the arrow keys.`);horizontal=g(()=>this.edge()===`left`||this.edge()===`right`);changeEdge(a){this.edge.set(a),this.size.set(180)}record(a,t){this.status.set(`${a.source} resize ${t===`start`?`started`:a.canceled?`canceled`:`completed`} at ${Math.round(a.value)} px.`)}static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-resize-handle-examples`]],decls:22,vars:40,consts:[[`container`,``],[`target`,``],[`handle`,`bxResizeHandle`],[1,`resize-demo-controls`],[`label`,`Resize edge`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`resize-demo-actions`],[`label`,`Prevent shrinking below initial size`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Use explicit pixel limits`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`role`,`status`],[1,`resize-demo-container`],[`aria-label`,`Resizable example surface`,1,`resize-demo-target`],[`bxResizeHandle`,``,1,`resize-demo-handle`,3,`resizeValueChange`,`resizeStart`,`resizeEnd`,`resizeEdge`,`resizeTarget`,`resizeContainer`,`resizeInitialSize`,`resizeMinSize`,`resizeMaxSize`,`resizeDisableShrink`,`resizeLabel`,`resizeValue`],[`type`,`number`,`label`,`Minimum size (px)`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`min`,`ngModel`],[`type`,`number`,`label`,`Maximum size (px)`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`min`,`ngModel`]],template:function(t,e){if(t&1){let o=ut$1();_(0,`div`,3)(1,`bx-select`,4),ZO(),J(`ngModelChange`,function(s){return e.changeEdge(s)}),D(),L$1(2,da,2,4),D(),_(3,`div`,5)(4,`bx-slide-toggle`,6),ZO(),J(`ngModelChange`,function(s){return e.disableShrink.set(s)}),D(),_(5,`bx-slide-toggle`,7),ZO(),J(`ngModelChange`,function(s){return e.customBounds.set(s)}),D(),_(6,`button`,8),J(`click`,function(){return e.size.set(180)}),Q(7,`Reset to 180 px`),D()(),_(8,`p`,9),Q(9),D(),_(10,`p`),Q(11),D(),_(12,`div`,10,0)(14,`section`,11,1)(16,`p`),Q(17),D(),_(18,`div`,12,2),EE(`resizeValueChange`,function(s){return Le(o),qP(e.size,s)||(e.size=s),je(s)}),J(`resizeStart`,function(s){return e.record(s,`start`)})(`resizeEnd`,function(s){return e.record(s,`end`)}),D()()(),_(20,`p`),Q(21,` Arrow keys move the edge by 10 px; Shift moves by 50 px. Home and End use the bounds. Double-click the handle or press Enter to restore its original size. Escape cancels an active gesture.
`),D()}if(t&2){let o=Tt(13),c=Tt(15),s=Tt(19);y(),T(`clearable`,!1)(`options`,e.edges)(`ngModel`,e.edge()),QO(),y(),j$1(e.customBounds()?2:-1),y(2),T(`ngModel`,e.disableShrink()),QO(),y(),T(`ngModel`,e.customBounds()),QO(),y(4),fe$1(e.status()),y(2),wE(``,e.size(),` px · effective minimum `,s.minSize(),` px · effective maximum `,s.maxSize(),` px`),y(3),_e(`width`,e.horizontal()?e.size()+`px`:`100%`)(`height`,e.horizontal()?`100%`:e.size()+`px`),se(`is-horizontal`,e.horizontal())(`is-vertical`,!e.horizontal())(`edge-left`,e.edge()===`left`)(`edge-top`,e.edge()===`top`),y(3),pn(`Resize from the `,e.edge(),` edge.`),y(),se(`handle-left`,e.edge()===`left`)(`handle-right`,e.edge()===`right`)(`handle-top`,e.edge()===`top`)(`handle-bottom`,e.edge()===`bottom`),T(`resizeEdge`,e.edge())(`resizeTarget`,c)(`resizeContainer`,o)(`resizeInitialSize`,180)(`resizeMinSize`,e.customBounds()?e.minimum():void 0)(`resizeMaxSize`,e.customBounds()?e.maximum():void 0)(`resizeDisableShrink`,e.disableShrink())(`resizeLabel`,e.horizontal()?`Resize example width`:`Resize example height`),SE(`resizeValue`,e.size)}},dependencies:[Jie,Kie,bB,fe,va$1,Vt,Sa$1,Ml],styles:[`
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
}`]})};var Me=class r{query=M(``);completedQuery=M(``);results=M([]);loading=M(!1);error=M(void 0);requests=M([]);controller;constructor(){f(X$1).onDestroy(()=>this.controller?.abort()),this.search(``)}async search(a,t=!1){this.controller?.abort();let e$2=new AbortController;this.controller=e$2,this.query.set(a),this.loading.set(!0),this.error.set(void 0);try{if(await X(250,e$2.signal),this.record(`Request: ${a||`(all components)`}`),await X(800,e$2.signal),e$2.signal.aborted)return;if(t)throw new Error(`Simulated request failure`);let o=a.trim().toLocaleLowerCase(),c=e.map(s=>s.title).filter(s=>s.toLocaleLowerCase().includes(o));this.results.set(c),this.completedQuery.set(a),this.record(`Success: ${c.length} results`)}catch{if(e$2.signal.aborted)return;this.error.set({key:`searchError`}),this.record(`Failed: previous results retained; retry the same query`)}finally{this.controller===e$2&&this.loading.set(!1)}}record(a){this.requests.update(t=>[a,...t].slice(0,8))}static ɵfac=function(t){return new(t||r)};static ɵprov=ie$1({token:r,factory:r.ɵfac})};var ma=()=>({key:`searchLabel`});var pa=()=>({key:`searchPlaceholder`});var di=()=>({key:`searchLoading`});var ua=()=>({key:`searchClear`});var ga=()=>({key:`retry`});function ba(r,a){if(r&1&&(_(0,`li`),Q(1),D()),r&2){let t=a.$implicit;y(),fe$1(t)}}function ya(r,a){if(r&1&&(_(0,`li`,11),Q(1),D()),r&2){let t=w(2);y(),fe$1(t.emptyText())}}function _a(r,a){if(r&1&&L$1(0,ya,2,1,`li`,11),r&2){let t=w();j$1(!t.mockSearchStore.loading()&&!t.mockSearchStore.error()?0:-1)}}function ha(r,a){if(r&1&&(_(0,`li`),Q(1),D()),r&2){let t=a.$implicit;y(),fe$1(t)}}var et=class r{demoI18nService=f(L);mockSearchStore=f(Me);showLoadingText=M(!1);showLabel=M(!0);compact=M(!1);readOnly=M(!1);disabled=M(!1);emptyText=g(()=>(this.demoI18nService.version(),this.demoI18nService.translate(`searchEmpty`)));retryConfig={variant:`tonal`,color:`accent`};changeLoadingText(a){this.showLoadingText.set(a),a&&!this.mockSearchStore.loading()&&!this.readOnly()&&!this.disabled()&&this.mockSearchStore.search(this.mockSearchStore.query())}static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-search-examples`]],features:[Qt([Me,L,{provide:Se,useExisting:L}])],decls:22,vars:29,consts:[[1,`search-demo`],[`subscriptSizing`,`dynamic`,3,`search`,`retry`,`label`,`placeholder`,`compact`,`value`,`loading`,`loadError`,`loadingLabel`,`loadingAriaLabel`,`clearLabel`,`retryLabel`,`retryConfig`,`readOnly`,`disabled`],[1,`search-actions`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`label`,`Show label`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Compact`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Show loading text`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Readonly`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Disabled`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`aria-label`,`Search results`,1,`search-results`],[`aria-label`,`Request events`,1,`search-events`],[`role`,`status`]],template:function(t,e){t&1&&(_(0,`div`,0)(1,`bx-search-input`,1),J(`search`,function(c){return e.mockSearchStore.search(c)})(`retry`,function(c){return e.mockSearchStore.search(c)}),D(),_(2,`div`,2)(3,`button`,3),J(`click`,function(){return e.mockSearchStore.search(e.mockSearchStore.query(),!0)}),Q(4,` Fail this search `),D(),_(5,`bx-checkbox`,4),EE(`checkedChange`,function(c){return qP(e.showLabel,c)||(e.showLabel=c),c}),D(),_(6,`bx-checkbox`,5),EE(`checkedChange`,function(c){return qP(e.compact,c)||(e.compact=c),c}),D(),_(7,`bx-checkbox`,6),J(`checkedChange`,function(c){return e.changeLoadingText(c)}),D(),_(8,`bx-checkbox`,7),EE(`checkedChange`,function(c){return qP(e.readOnly,c)||(e.readOnly=c),c}),D(),_(9,`bx-checkbox`,8),EE(`checkedChange`,function(c){return qP(e.disabled,c)||(e.disabled=c),c}),D()(),_(10,`p`),Q(11,` Requests debounce for 250ms and take 800ms. Type quickly to cancel older requests, or enter an unmatched term for empty results. Failure keeps the last successful results. Use Retry request to try the same query again. Enabling Show loading text previews another request. When a label is displayed, compact mode is automatically enabled regardless of the Compact setting. `),D(),_(12,`section`,9)(13,`p`),Q(14),D(),_(15,`ul`),Lt(16,ba,2,1,`li`,null,Va$1,!1,_a,1,1),D()(),_(19,`ul`,10),Lt(20,ha,2,1,`li`,null,Ba$2),D()()),t&2&&(y(),T(`label`,e.showLabel()?KP(23,ma):void 0)(`placeholder`,KP(24,pa))(`compact`,e.compact())(`value`,e.mockSearchStore.query())(`loading`,e.mockSearchStore.loading())(`loadError`,e.mockSearchStore.error())(`loadingLabel`,e.showLoadingText()?KP(25,di):void 0)(`loadingAriaLabel`,KP(26,di))(`clearLabel`,KP(27,ua))(`retryLabel`,KP(28,ga))(`retryConfig`,e.retryConfig)(`readOnly`,e.readOnly())(`disabled`,e.disabled()),y(2),T(`disabled`,e.mockSearchStore.loading()||e.disabled()||e.readOnly()),y(2),SE(`checked`,e.showLabel),y(),SE(`checked`,e.compact),y(),T(`checked`,e.showLoadingText()),y(),SE(`checked`,e.readOnly),y(),SE(`checked`,e.disabled),y(3),B(`aria-busy`,e.mockSearchStore.loading()),y(2),yE(`Last completed search: `,e.mockSearchStore.completedQuery()||`all components`,` · `,e.mockSearchStore.results().length,` results`),y(2),jt(e.mockSearchStore.results()),y(4),jt(e.mockSearchStore.requests()))},dependencies:[fe,$r,kn],styles:[`
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
}`]})};var gt=[{id:`workspace`,title:`Workspace`,icon:{name:`building-2`},collapsible:!0,items:[{id:`overview`,route:`/components/side-nav/overview`,label:`Overview`,icon:{name:`house`},visible:!0},{id:`projects`,route:`/components/side-nav/projects`,label:`Projects`,icon:{name:`folder`},visible:!0,data:{tags:[{text:`12`,config:{color:`info`}}]},children:[{id:`design`,route:`/components/side-nav/design`,label:`Design system`,icon:{name:`palette`},visible:!0,children:[{id:`library`,route:`/components/side-nav/library`,label:`Component library`,icon:{name:`blocks`},visible:!0,children:[...Array.from({length:14},(r,a)=>({id:`pattern-${a}`,route:`/components/side-nav/pattern-${a}`,label:`Pattern ${a+1}`,icon:{name:`component`},visible:!0})),{id:`tokens`,route:`/components/side-nav/tokens`,label:`Design tokens`,icon:{name:`swatch-book`},visible:!0,data:{label:{key:`nav.tokens`},keywords:[{key:`nav.palette`},{key:`nav.variables`}],endIcon:{name:`sparkles`},tags:[{text:{key:`nav.new`},config:{color:`success`}}]}},{id:`accessibility`,route:`/components/side-nav/accessibility`,label:`Accessibility`,icon:{name:`accessibility`},visible:!0}]},{id:`research`,route:`/components/side-nav/research`,label:`Research`,icon:{name:`flask-conical`},visible:!0}]},{id:`releases`,route:`/components/side-nav/releases`,label:`Releases`,icon:{name:`rocket`},visible:!0}]},{id:`reports`,route:`/components/side-nav/reports`,label:`Reports`,icon:{name:`chart-column`},visible:!0},{id:`disabled`,route:`/components/side-nav/disabled`,label:`Restricted area`,icon:{name:`lock`},visible:!0,data:{disabled:!0}}]},{id:`settings`,title:`Settings`,icon:{name:`settings`},collapsible:!0,items:[{id:`members`,route:`/components/side-nav/members`,label:`Team members`,icon:{name:`users`},visible:!0},{id:`billing`,route:`/components/side-nav/billing`,label:`Billing`,icon:{name:`credit-card`},visible:!0}]}];var bt={en:{"top.name":`Demo top navigation`,"top.compact":`Force compact menu`,"top.width":`Preview width (px)`,"top.icons":`Leading icons`,"top.sticky":`Sticky bar`,"top.custom":`Custom item template`,"top.actions":`Extra action controls`,"top.title":`Workspace overview`,"top.description":`Labels navigate directly. Separate chevrons browse children in one panel. Search shows flat results with their parent paths. Select a result and clear search to reveal it in its submenu. Click a path ancestor to return to its panel. Shrink this preview or add actions to exercise the compact menu.`,"top.modeCompact":`Compact navigation: all pages remain reachable in the menu.`,"top.modeExpanded":`Horizontal navigation: use Left/Right, Home/End, or the separate disclosure controls.`,"top.settings":`Settings`,"top.actionDone":`Settings action selected.`,"top.help":`Help`,"top.helpDone":`Help action selected.`,"top.searchPlaceholder":`Search top navigation…`,"nav.workspace":`Workspace`,"nav.settings":`Settings`,"nav.overview":`Overview`,"nav.projects":`Projects`,"nav.design":`Design system`,"nav.library":`Component library`,"nav.tokens":`Design tokens`,"nav.accessibility":`Accessibility`,"nav.research":`Research`,"nav.releases":`Releases`,"nav.reports":`Reports`,"nav.disabled":`Restricted area`,"nav.members":`Team members`,"nav.billing":`Billing`,"nav.new":`New`,"nav.search":`Search demo navigation`,"nav.placeholder":`Try “dsgn tkns” or “palette”`,"nav.name":`Demo workspace`,"nav.clear":`Clear search`,"nav.empty":`No matching pages.`,"nav.open":`Open navigation`,"nav.close":`Close navigation`,"nav.collapse":`Collapse navigation`,"nav.expand":`Expand navigation`,"nav.submenu":`Open submenu`,"nav.result":`Search result`,"nav.back":`Back`,"nav.path":`Navigation path`,"nav.hiddenPath":`Show hidden ancestors`,"demo.inlineMode":`Submenus replace the list inside this navigation. Back restores the previous level.`,"demo.right":`Right side`,"demo.rail":`Icon rail`,"demo.mobile":`Force mobile drawer`,"demo.search":`Search`,"demo.icons":`Item icons`,"demo.breadcrumbLimit":`Visible path entries`,"demo.longLabels":`Long labels`,"demo.longSuffix":`— shared workspace navigation, design resources and configuration`,"demo.rtl":`RTL`,"demo.custom":`Custom item template`,"demo.height":`Panel height (px)`,"demo.language":`Language`,"demo.instructions":`Select a label to visit its page, or its chevron to browse children. Search “dsgn tkns” or “palette” for flat results with parent paths. After selecting a result, clear search to reveal it in its submenu. Click an ancestor in the path to return to its panel.`,"demo.studio":`Studio`,"demo.admin":`Alex · Workspace admin`,"demo.title":`A calmer workspace`,"demo.description":`The header, footer, item presentation, side and panel size are configurable. The mobile drawer stays inside this preview.`,"demo.open":`Open demo drawer`,"demo.select":`Select a page to see its stable ID here.`,"demo.keyboard":`Use arrow keys and Home/End within a list. Enter or Space activates a disclosure. Back, Escape, or the opposite arrow returns one level; Escape at the root closes the mobile drawer.`,"demo.routes":`Configure real routes with withInAppNavigation`,"nav.palette":`palette`,"nav.variables":`color variables`,"nav.pattern-0":`Pattern 1`,"nav.pattern-1":`Pattern 2`,"nav.pattern-2":`Pattern 3`,"nav.pattern-3":`Pattern 4`,"nav.pattern-4":`Pattern 5`,"nav.pattern-5":`Pattern 6`,"nav.pattern-6":`Pattern 7`,"nav.pattern-7":`Pattern 8`,"nav.pattern-8":`Pattern 9`,"nav.pattern-9":`Pattern 10`,"nav.pattern-10":`Pattern 11`,"nav.pattern-11":`Pattern 12`,"nav.pattern-12":`Pattern 13`,"nav.pattern-13":`Pattern 14`},es:{"top.name":`Navegación superior de demostración`,"top.compact":`Forzar menú compacto`,"top.width":`Ancho de la vista previa (px)`,"top.icons":`Iconos iniciales`,"top.sticky":`Barra fija`,"top.custom":`Plantilla de elemento personalizada`,"top.actions":`Controles de acción adicionales`,"top.title":`Resumen del espacio de trabajo`,"top.description":`Las etiquetas abren las páginas. Las flechas muestran las subpáginas en un panel. La búsqueda muestra resultados con sus rutas superiores. Selecciona un resultado y borra la búsqueda para verlo en su submenú. Selecciona un antecesor de la ruta para volver a su panel. Reduce esta vista previa o añade acciones para probar el menú compacto.`,"top.modeCompact":`Navegación compacta: todas las páginas siguen disponibles en el menú.`,"top.modeExpanded":`Navegación horizontal: usa Izquierda/Derecha, Inicio/Fin o los controles de expansión.`,"top.settings":`Configuración`,"top.actionDone":`Acción de configuración seleccionada.`,"top.help":`Ayuda`,"top.helpDone":`Acción de ayuda seleccionada.`,"top.searchPlaceholder":`Buscar en la navegación superior…`,"nav.workspace":`Espacio de trabajo`,"nav.settings":`Configuración`,"nav.overview":`Resumen`,"nav.projects":`Proyectos`,"nav.design":`Sistema de diseño`,"nav.library":`Biblioteca de componentes`,"nav.tokens":`Tokens de diseño`,"nav.accessibility":`Accesibilidad`,"nav.research":`Investigación`,"nav.releases":`Versiones`,"nav.reports":`Informes`,"nav.disabled":`Área restringida`,"nav.members":`Miembros del equipo`,"nav.billing":`Facturación`,"nav.new":`Nuevo`,"nav.search":`Buscar en la navegación de demostración`,"nav.placeholder":`Prueba «tokens» o «paleta»`,"nav.name":`Espacio de trabajo de demostración`,"nav.clear":`Borrar búsqueda`,"nav.empty":`No hay páginas coincidentes.`,"nav.open":`Abrir navegación`,"nav.close":`Cerrar navegación`,"nav.collapse":`Contraer navegación`,"nav.expand":`Expandir navegación`,"nav.submenu":`Abrir submenú`,"nav.result":`Resultado de búsqueda`,"nav.back":`Atrás`,"nav.path":`Ruta de navegación`,"nav.hiddenPath":`Mostrar antecesores ocultos`,"demo.inlineMode":`Los submenús reemplazan la lista de esta navegación. Atrás restaura el nivel anterior.`,"demo.right":`Lado derecho`,"demo.rail":`Barra de iconos`,"demo.mobile":`Forzar panel móvil`,"demo.search":`Búsqueda`,"demo.icons":`Iconos de elementos`,"demo.breadcrumbLimit":`Elementos visibles de la ruta`,"demo.longLabels":`Etiquetas largas`,"demo.longSuffix":`— navegación compartida, recursos de diseño y configuración del espacio de trabajo`,"demo.rtl":`De derecha a izquierda`,"demo.custom":`Plantilla de elemento personalizada`,"demo.height":`Altura del panel (px)`,"demo.language":`Idioma`,"demo.instructions":`Selecciona una etiqueta para visitar su página o su flecha para ver las subpáginas. Busca «tokens» o «paleta» para ver resultados con rutas superiores. Tras seleccionar un resultado, borra la búsqueda para verlo en su submenú. Selecciona un antecesor de la ruta para volver a su panel.`,"demo.studio":`Estudio`,"demo.admin":`Alex · Administrador del espacio de trabajo`,"demo.title":`Un espacio de trabajo más tranquilo`,"demo.description":`La cabecera, el pie, la presentación de los elementos, el lado y el tamaño del panel son configurables. El panel móvil permanece dentro de esta vista previa.`,"demo.open":`Abrir panel de demostración`,"demo.select":`Selecciona una página para ver aquí su identificador estable.`,"demo.keyboard":`Usa las flechas e Inicio/Fin en una lista. Intro o Espacio activa la expansión. Atrás, Escape o la flecha opuesta retrocede un nivel; Escape en la raíz cierra el panel móvil.`,"demo.routes":`Configura rutas reales con withInAppNavigation`,"nav.palette":`paleta`,"nav.variables":`variables de color`,"nav.pattern-0":`Patrón 1`,"nav.pattern-1":`Patrón 2`,"nav.pattern-2":`Patrón 3`,"nav.pattern-3":`Patrón 4`,"nav.pattern-4":`Patrón 5`,"nav.pattern-5":`Patrón 6`,"nav.pattern-6":`Patrón 7`,"nav.pattern-7":`Patrón 8`,"nav.pattern-8":`Patrón 9`,"nav.pattern-9":`Patrón 10`,"nav.pattern-10":`Patrón 11`,"nav.pattern-11":`Patrón 12`,"nav.pattern-12":`Patrón 13`,"nav.pattern-13":`Patrón 14`},fr:{"top.name":`Navigation supérieure de démonstration`,"top.compact":`Forcer le menu compact`,"top.width":`Largeur de l’aperçu (px)`,"top.icons":`Icônes de début`,"top.sticky":`Barre fixe`,"top.custom":`Modèle d’élément personnalisé`,"top.actions":`Commandes supplémentaires`,"top.title":`Vue d’ensemble de l’espace de travail`,"top.description":`Les libellés ouvrent les pages. Les flèches affichent les sous-pages dans un panneau. La recherche affiche des résultats avec leurs chemins parents. Sélectionnez un résultat et effacez la recherche pour le voir dans son sous-menu. Sélectionnez un ancêtre du chemin pour revenir à son panneau. Réduisez cet aperçu ou ajoutez des actions pour essayer le menu compact.`,"top.modeCompact":`Navigation compacte : toutes les pages restent accessibles dans le menu.`,"top.modeExpanded":`Navigation horizontale : utilisez Gauche/Droite, Début/Fin ou les commandes de déploiement.`,"top.settings":`Paramètres`,"top.actionDone":`Action des paramètres sélectionnée.`,"top.help":`Aide`,"top.helpDone":`Action d’aide sélectionnée.`,"top.searchPlaceholder":`Rechercher dans la navigation supérieure…`,"nav.workspace":`Espace de travail`,"nav.settings":`Paramètres`,"nav.overview":`Vue d’ensemble`,"nav.projects":`Projets`,"nav.design":`Système de design`,"nav.library":`Bibliothèque de composants`,"nav.tokens":`Tokens de design`,"nav.accessibility":`Accessibilité`,"nav.research":`Recherche`,"nav.releases":`Versions`,"nav.reports":`Rapports`,"nav.disabled":`Zone restreinte`,"nav.members":`Membres de l’équipe`,"nav.billing":`Facturation`,"nav.new":`Nouveau`,"nav.search":`Rechercher dans la navigation de démonstration`,"nav.placeholder":`Essayez « tokens » ou « palette »`,"nav.name":`Espace de travail de démonstration`,"nav.clear":`Effacer la recherche`,"nav.empty":`Aucune page correspondante.`,"nav.open":`Ouvrir la navigation`,"nav.close":`Fermer la navigation`,"nav.collapse":`Réduire la navigation`,"nav.expand":`Déployer la navigation`,"nav.submenu":`Ouvrir le sous-menu`,"nav.result":`Résultat de recherche`,"nav.back":`Retour`,"nav.path":`Chemin de navigation`,"nav.hiddenPath":`Afficher les ancêtres masqués`,"demo.inlineMode":`Les sous-menus remplacent la liste de cette navigation. Retour restaure le niveau précédent.`,"demo.right":`Côté droit`,"demo.rail":`Barre d’icônes`,"demo.mobile":`Forcer le panneau mobile`,"demo.search":`Recherche`,"demo.icons":`Icônes des éléments`,"demo.breadcrumbLimit":`Éléments visibles du chemin`,"demo.longLabels":`Libellés longs`,"demo.longSuffix":`— navigation partagée, ressources de conception et configuration de l’espace de travail`,"demo.rtl":`De droite à gauche`,"demo.custom":`Modèle d’élément personnalisé`,"demo.height":`Hauteur du panneau (px)`,"demo.language":`Langue`,"demo.instructions":`Sélectionnez un libellé pour visiter sa page ou sa flèche pour afficher les sous-pages. Recherchez « tokens » ou « palette » pour voir des résultats avec leurs chemins parents. Après avoir sélectionné un résultat, effacez la recherche pour le voir dans son sous-menu. Sélectionnez un ancêtre du chemin pour revenir à son panneau.`,"demo.studio":`Studio`,"demo.admin":`Alex · Administrateur de l’espace de travail`,"demo.title":`Un espace de travail plus calme`,"demo.description":`L’en-tête, le pied de page, la présentation des éléments, le côté et la taille du panneau sont configurables. Le panneau mobile reste dans cet aperçu.`,"demo.open":`Ouvrir le panneau de démonstration`,"demo.select":`Sélectionnez une page pour voir ici son identifiant stable.`,"demo.keyboard":`Utilisez les flèches et Début/Fin dans une liste. Entrée ou Espace active le déploiement. Retour, Échap ou la flèche opposée remonte d’un niveau ; Échap à la racine ferme le panneau mobile.`,"demo.routes":`Configurer des routes réelles avec withInAppNavigation`,"nav.palette":`palette`,"nav.variables":`variables de couleur`,"nav.pattern-0":`Motif 1`,"nav.pattern-1":`Motif 2`,"nav.pattern-2":`Motif 3`,"nav.pattern-3":`Motif 4`,"nav.pattern-4":`Motif 5`,"nav.pattern-5":`Motif 6`,"nav.pattern-6":`Motif 7`,"nav.pattern-7":`Motif 8`,"nav.pattern-8":`Motif 9`,"nav.pattern-9":`Motif 10`,"nav.pattern-10":`Motif 11`,"nav.pattern-11":`Motif 12`,"nav.pattern-12":`Motif 13`,"nav.pattern-13":`Motif 14`},de:{"top.name":`Demo-Kopfnavigation`,"top.compact":`Kompaktes Menü erzwingen`,"top.width":`Vorschaubreite (px)`,"top.icons":`Führende Symbole`,"top.sticky":`Fixierte Leiste`,"top.custom":`Eigene Elementvorlage`,"top.actions":`Zusätzliche Aktionen`,"top.title":`Arbeitsbereich im Überblick`,"top.description":`Beschriftungen öffnen Seiten. Separate Pfeile zeigen Unterseiten in einem Bereich. Die Suche zeigt Ergebnisse mit ihren übergeordneten Pfaden. Wähle ein Ergebnis und lösche die Suche, um es im Untermenü zu sehen. Wähle einen übergeordneten Pfadeintrag, um zu dessen Bereich zurückzukehren. Verkleinere die Vorschau oder füge Aktionen hinzu, um das kompakte Menü zu testen.`,"top.modeCompact":`Kompakte Navigation: Alle Seiten bleiben über das Menü erreichbar.`,"top.modeExpanded":`Horizontale Navigation: Verwende Links/Rechts, Pos1/Ende oder die separaten Aufklappschaltflächen.`,"top.settings":`Einstellungen`,"top.actionDone":`Einstellungsaktion ausgewählt.`,"top.help":`Hilfe`,"top.helpDone":`Hilfeaktion ausgewählt.`,"top.searchPlaceholder":`Kopfnavigation durchsuchen…`,"nav.workspace":`Arbeitsbereich`,"nav.settings":`Einstellungen`,"nav.overview":`Übersicht`,"nav.projects":`Projekte`,"nav.design":`Designsystem`,"nav.library":`Komponentenbibliothek`,"nav.tokens":`Design-Tokens`,"nav.accessibility":`Barrierefreiheit`,"nav.research":`Forschung`,"nav.releases":`Versionen`,"nav.reports":`Berichte`,"nav.disabled":`Geschützter Bereich`,"nav.members":`Teammitglieder`,"nav.billing":`Abrechnung`,"nav.new":`Neu`,"nav.search":`Demo-Navigation durchsuchen`,"nav.placeholder":`Versuche „Tokens“ oder „Palette“`,"nav.name":`Demo-Arbeitsbereich`,"nav.clear":`Suche löschen`,"nav.empty":`Keine passenden Seiten.`,"nav.open":`Navigation öffnen`,"nav.close":`Navigation schließen`,"nav.collapse":`Navigation einklappen`,"nav.expand":`Navigation ausklappen`,"nav.submenu":`Untermenü öffnen`,"nav.result":`Suchergebnis`,"nav.back":`Zurück`,"nav.path":`Navigationspfad`,"nav.hiddenPath":`Verborgene Vorgänger anzeigen`,"demo.inlineMode":`Untermenüs ersetzen die Liste in dieser Navigation. Zurück stellt die vorherige Ebene wieder her.`,"demo.right":`Rechte Seite`,"demo.rail":`Symbolleiste`,"demo.mobile":`Mobile Seitenleiste erzwingen`,"demo.search":`Suche`,"demo.icons":`Eintragssymbole`,"demo.breadcrumbLimit":`Sichtbare Pfadeinträge`,"demo.longLabels":`Lange Beschriftungen`,"demo.longSuffix":`— gemeinsame Arbeitsbereichsnavigation, Designressourcen und Konfiguration`,"demo.rtl":`Von rechts nach links`,"demo.custom":`Eigene Elementvorlage`,"demo.height":`Bereichshöhe (px)`,"demo.language":`Sprache`,"demo.instructions":`Wähle eine Beschriftung, um ihre Seite zu öffnen, oder den Pfeil, um Unterseiten anzuzeigen. Suche nach „Tokens“ oder „Palette“ für Ergebnisse mit übergeordneten Pfaden. Lösche nach der Auswahl eines Ergebnisses die Suche, um es im Untermenü zu sehen. Wähle einen übergeordneten Pfadeintrag, um zu dessen Bereich zurückzukehren.`,"demo.studio":`Studio`,"demo.admin":`Alex · Arbeitsbereichsadministrator`,"demo.title":`Ein ruhigerer Arbeitsbereich`,"demo.description":`Kopfzeile, Fußzeile, Elementdarstellung, Seite und Bereichsgröße sind konfigurierbar. Die mobile Seitenleiste bleibt innerhalb dieser Vorschau.`,"demo.open":`Demo-Seitenleiste öffnen`,"demo.select":`Wähle eine Seite, um hier ihre stabile ID zu sehen.`,"demo.keyboard":`Verwende Pfeiltasten und Pos1/Ende innerhalb einer Liste. Eingabe oder Leertaste klappt Unterseiten auf. Zurück, Escape oder der entgegengesetzte Pfeil führt eine Ebene zurück; Escape auf der obersten Ebene schließt die mobile Seitenleiste.`,"demo.routes":`Echte Routen mit withInAppNavigation konfigurieren`,"nav.palette":`Palette`,"nav.variables":`Farbvariablen`,"nav.pattern-0":`Muster 1`,"nav.pattern-1":`Muster 2`,"nav.pattern-2":`Muster 3`,"nav.pattern-3":`Muster 4`,"nav.pattern-4":`Muster 5`,"nav.pattern-5":`Muster 6`,"nav.pattern-6":`Muster 7`,"nav.pattern-7":`Muster 8`,"nav.pattern-8":`Muster 9`,"nav.pattern-9":`Muster 10`,"nav.pattern-10":`Muster 11`,"nav.pattern-11":`Muster 12`,"nav.pattern-12":`Muster 13`,"nav.pattern-13":`Muster 14`}};function tt(r,a){return a.version?.(),gt.map(t=>s$1(r$1({},t),{title:a.translate(`nav.${t.id}`),items:mi(t.items,r,a)}))}function mi(r,a,t){return r.map(e=>s$1(r$1({},e),{route:`${a}/${e.id}`,label:t.translate(`nav.${e.id}`),data:s$1(r$1({},e.data),{label:{key:`nav.${e.id}`},keywords:[...e.data?.keywords??[],e.label]}),children:mi(e.children??[],a,t)}))}var pi=`const navigation = defineNavigation({
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
// In your shell: <bx-side-nav />`;var ie=class r{languages=e$1;version=M(0);language=M(`en`);translate(a){return this.version(),bt[this.language()]?.[a]??a}setLanguage(a){a===null||a===this.language()||(this.language.set(a),this.version.update(t=>t+1))}static ɵfac=function(t){return new(t||r)};static ɵprov=ie$1({token:r,factory:r.ɵfac})};function va(r,a){if(r&1&&(_(0,`strong`),Q(1),D()),r&2){let t=w(2);y(),fe$1(t.text().studio)}}function xa(r,a){if(r&1&&(ve(0,`bx-icon`,19),L$1(1,va,2,1,`strong`)),r&2){let t=a.$implicit,e=a.mobile;y(),j$1(!t&&!e?1:-1)}}function fa(r,a){if(r&1&&(_(0,`span`),Q(1),D()),r&2){let t=w(2);y(),fe$1(t.text().admin)}}function Sa(r,a){if(r&1&&(ve(0,`bx-icon`,20),L$1(1,fa,2,1,`span`)),r&2){let t=a.$implicit;y(),j$1(t?-1:1)}}function Ca(r,a){if(r&1){let t=ut$1();_(0,`button`,21),J(`click`,function(o){Le(t),w();let c=Tt(19);return je(c.open(o))}),Q(1),D()}if(r&2){let t=w();y(),fe$1(t.text().open)}}function wa(r,a){if(r&1&&ve(0,`bx-icon`,22),r&2){let t=w().$implicit;T(`name`,t.icon?.name??`circle`)}}function ka(r,a){if(r&1&&(_(0,`span`),Q(1),D(),_(2,`small`,23),Q(3,`↗`),D()),r&2){let t=w().$implicit;y(),fe$1(t.label)}}function Ea(r,a){if(r&1&&(L$1(0,wa,1,1,`bx-icon`,22),L$1(1,ka,4,1)),r&2){let t=a.collapsed,e=w();j$1(t||e.icons()?0:-1),y(),j$1(t?-1:1)}}var nt=class r{navigationDemoI18nService=f(ie);groups=g(()=>{let a=tt(`/components/side-nav`,this.navigationDemoI18nService);if(!this.longLabels())return a;let t=this.navigationDemoI18nService.translate(`demo.longSuffix`);return a.map(e=>s$1(r$1({},e),{title:`${e.title} ${t}`,items:this.extendLabels(e.items,t)}))});text=g(()=>({right:this.navigationDemoI18nService.translate(`demo.right`),rail:this.navigationDemoI18nService.translate(`demo.rail`),mobile:this.navigationDemoI18nService.translate(`demo.mobile`),inlineMode:this.navigationDemoI18nService.translate(`demo.inlineMode`),search:this.navigationDemoI18nService.translate(`demo.search`),icons:this.navigationDemoI18nService.translate(`demo.icons`),breadcrumbLimit:this.navigationDemoI18nService.translate(`demo.breadcrumbLimit`),longLabels:this.navigationDemoI18nService.translate(`demo.longLabels`),rtl:this.navigationDemoI18nService.translate(`demo.rtl`),custom:this.navigationDemoI18nService.translate(`demo.custom`),height:this.navigationDemoI18nService.translate(`demo.height`),language:this.navigationDemoI18nService.translate(`demo.language`),instructions:this.navigationDemoI18nService.translate(`demo.instructions`),studio:this.navigationDemoI18nService.translate(`demo.studio`),admin:this.navigationDemoI18nService.translate(`demo.admin`),title:this.navigationDemoI18nService.translate(`demo.title`),description:this.navigationDemoI18nService.translate(`demo.description`),open:this.navigationDemoI18nService.translate(`demo.open`),keyboard:this.navigationDemoI18nService.translate(`demo.keyboard`),routes:this.navigationDemoI18nService.translate(`demo.routes`)}));routeExample=pi;right=M(!1);collapsed=M(!1);mobile=M(!1);searchable=M(!0);icons=M(!0);longLabels=M(!1);rtl=M(!1);custom=M(!1);height=M(860);breadcrumbLimit=M(3);selected=M(void 0);selection=g(()=>{let a=this.selected();return a?`${this.navigationDemoI18nService.translate(`nav.${a.id}`)} \xB7 ${a.id}`:this.navigationDemoI18nService.translate(`demo.select`)});config=g(()=>({position:`inline`,showMobileTrigger:!1,side:this.right()?`right`:`left`,mobile:this.mobile(),searchable:this.searchable(),showItemIcons:this.icons(),breadcrumbConfig:{maxVisibleItems:Number(this.breadcrumbLimit())||3,overflowLabel:{key:`nav.hiddenPath`}},persistenceKey:`blocks.side-nav.demo.v1`,ariaLabel:{key:`nav.name`},searchLabel:{key:`nav.search`},searchPlaceholder:{key:`nav.placeholder`},clearSearchLabel:{key:`nav.clear`},emptyText:{key:`nav.empty`},openLabel:{key:`nav.open`},closeLabel:{key:`nav.close`},collapseLabel:{key:`nav.collapse`},expandLabel:{key:`nav.expand`},submenuLabel:{key:`nav.submenu`},resultLabel:{key:`nav.result`},backLabel:{key:`nav.back`},pathLabel:{key:`nav.path`}}));select(a){this.selected.set(a)}extendLabels(a,t){return a.map(e=>{let o=`${e.label} ${t}`;return s$1(r$1({},e),{label:o,data:s$1(r$1({},e.data),{label:o}),children:this.extendLabels(e.children??[],t)})})}static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-side-nav-examples`]],features:[Qt([ie,{provide:Se,useExisting:ie}])],decls:41,vars:46,consts:[[`nav`,``],[`customItem`,``],[1,`nav-demo-top-row`],[`subscriptSizing`,`dynamic`,3,`selectionChange`,`label`,`clearable`,`options`,`value`],[1,`nav-demo-fields`],[`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`label`,`min`,`max`,`value`],[1,`nav-demo-controls`],[1,`nav-demo-checkboxes`],[`subscriptSizing`,`dynamic`,3,`checkedChange`,`label`,`checked`],[1,`nav-demo-frame`],[3,`collapsedChange`,`itemSelected`,`config`,`groups`,`itemTemplate`,`collapsed`],[`bxSideNavHeader`,``],[`bxSideNavFooter`,``],[1,`nav-demo-content`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`],[`aria-live`,`polite`],[1,`nav-route-example`],[`tabindex`,`0`,`aria-label`,`TypeScript navigation configuration`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`name`,`blocks`],[`name`,`circle-user-round`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`size`,`20`,3,`name`],[`aria-hidden`,`true`]],template:function(t,e){if(t&1){let o=ut$1();_(0,`div`,2)(1,`bx-select`,3),J(`selectionChange`,function(s){return e.navigationDemoI18nService.setLanguage(s.value)}),D(),_(2,`div`,4)(3,`bx-input-field`,5),EE(`valueChange`,function(s){return Le(o),qP(e.height,s)||(e.height=s),je(s)}),D(),_(4,`bx-input-field`,5),EE(`valueChange`,function(s){return Le(o),qP(e.breadcrumbLimit,s)||(e.breadcrumbLimit=s),je(s)}),D()()(),_(5,`div`,6)(6,`div`,7)(7,`bx-checkbox`,8),EE(`checkedChange`,function(s){return Le(o),qP(e.right,s)||(e.right=s),je(s)}),D(),_(8,`bx-checkbox`,8),J(`checkedChange`,function(){Le(o);let s=Tt(19);return je(s.toggleCollapsed())}),D(),_(9,`bx-checkbox`,8),EE(`checkedChange`,function(s){return Le(o),qP(e.mobile,s)||(e.mobile=s),je(s)}),D(),_(10,`bx-checkbox`,8),EE(`checkedChange`,function(s){return Le(o),qP(e.searchable,s)||(e.searchable=s),je(s)}),D(),_(11,`bx-checkbox`,8),EE(`checkedChange`,function(s){return Le(o),qP(e.icons,s)||(e.icons=s),je(s)}),D(),_(12,`bx-checkbox`,8),EE(`checkedChange`,function(s){return Le(o),qP(e.longLabels,s)||(e.longLabels=s),je(s)}),D(),_(13,`bx-checkbox`,8),EE(`checkedChange`,function(s){return Le(o),qP(e.rtl,s)||(e.rtl=s),je(s)}),D(),_(14,`bx-checkbox`,8),EE(`checkedChange`,function(s){return Le(o),qP(e.custom,s)||(e.custom=s),je(s)}),D()()(),_(15,`p`),Q(16),D(),_(17,`div`,9)(18,`bx-side-nav`,10,0),EE(`collapsedChange`,function(s){return Le(o),qP(e.collapsed,s)||(e.collapsed=s),je(s)}),J(`itemSelected`,function(s){return e.select(s)}),Ti$1(20,xa,2,1,`ng-template`,11)(21,Sa,2,1,`ng-template`,12),D(),_(22,`div`,13)(23,`h3`),Q(24),D(),_(25,`p`),Q(26),D(),L$1(27,Ca,2,1,`button`,14),_(28,`output`,15),Q(29),D(),_(30,`p`),Q(31),D(),_(32,`p`),Q(33),D()()(),Ti$1(34,Ea,2,2,`ng-template`,null,1,wr$1),_(36,`details`,16)(37,`summary`),Q(38),D(),_(39,`pre`,17),ve(40,`code`,18),D()()}if(t&2){let o=Tt(19),c=Tt(35);y(),T(`label`,e.text().language)(`clearable`,!1)(`options`,e.navigationDemoI18nService.languages)(`value`,e.navigationDemoI18nService.language()),y(2),T(`label`,e.text().height)(`min`,200)(`max`,700),SE(`value`,e.height),y(),T(`label`,e.text().breadcrumbLimit)(`min`,2)(`max`,10),SE(`value`,e.breadcrumbLimit),y(3),T(`label`,e.text().right),SE(`checked`,e.right),y(),T(`label`,e.text().rail)(`checked`,o.isCollapsed()),y(),T(`label`,e.text().mobile),SE(`checked`,e.mobile),y(),T(`label`,e.text().search),SE(`checked`,e.searchable),y(),T(`label`,e.text().icons),SE(`checked`,e.icons),y(),T(`label`,e.text().longLabels),SE(`checked`,e.longLabels),y(),T(`label`,e.text().rtl),SE(`checked`,e.rtl),y(),T(`label`,e.text().custom),SE(`checked`,e.custom),y(2),fe$1(e.text().instructions),y(),_e(`--%NS%bx-side-nav-height`,e.height()+`px`),se(`right`,e.right()),B(`dir`,e.rtl()?`rtl`:`ltr`),y(),T(`config`,e.config())(`groups`,e.groups())(`itemTemplate`,e.custom()?c:void 0),SE(`collapsed`,e.collapsed),y(6),fe$1(e.text().title),y(2),fe$1(e.text().description),y(),j$1(o.isMobile()?27:-1),y(2),fe$1(e.selection()),y(2),fe$1(e.text().keyboard),y(2),fe$1(e.text().inlineMode),y(5),fe$1(e.text().routes),y(2),T(`highlight`,e.routeExample)}},dependencies:[ht,it$1,Dn,Rn,fe,$r,va$1,Vt,qt],styles:[`
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
}`]})};var Ta=()=>({name:`info`,color:`text-info`,bgColor:`auto`});var it=class r{panelBreakpoints={"2xl":`push`};placements=[{label:`Left`,value:`left`},{label:`Right`,value:`right`}];opened=M(!1);contained=M(!0);backdrop=M(!1);placement=M(`right`);panelWidth=M(320);note=M(`This content survives closing the panel.`);clicks=M(0);width=g(()=>Math.max(240,Math.min(640,Number(this.panelWidth())||320)));resizeWidth(a){let t=Number(a);Number.isFinite(t)&&this.panelWidth.set(t)}pageAction(){this.clicks.update(a=>a+1)}static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-side-panel-examples`]],decls:27,vars:24,consts:[[1,`panel-demo-controls`],[`label`,`Placement`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Panel width (px)`,`type`,`number`,3,`ngModelChange`,`min`,`max`,`ngModel`],[1,`panel-demo-toggles`],[`label`,`Bound to preview container`,3,`ngModelChange`,`ngModel`],[`label`,`Blocking backdrop inside bounds`,3,`ngModelChange`,`ngModel`],[1,`panel-demo-boundary`],[`ariaLabel`,`Side panel example`,3,`widthChange`,`openChange`,`headerIcon`,`open`,`placement`,`container`,`width`,`resizable`,`resizeDisableShrink`,`resizeMinWidth`,`resizeMaxWidth`,`breakpoints`,`backdrop`],[`bxSidePanelBanner`,``,1,`demo-banner`],[`bxSidePanelHeader`,``,1,`demo-heading`],[`label`,`Persistent note`,3,`ngModelChange`,`ngModel`],[`bxSidePanelFooter`,``],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[1,`panel-demo-content`],[`role`,`status`]],template:function(t,e){t&1&&(_(0,`div`,0)(1,`bx-select`,1),ZO(),J(`ngModelChange`,function(c){return e.placement.set(c)}),D(),_(2,`bx-input-field`,2),ZO(),J(`ngModelChange`,function(c){return e.panelWidth.set(c)}),D()(),_(3,`div`,3)(4,`bx-slide-toggle`,4),ZO(),J(`ngModelChange`,function(c){return e.contained.set(c)}),D(),_(5,`bx-slide-toggle`,5),ZO(),J(`ngModelChange`,function(c){return e.backdrop.set(c)}),D()(),_(6,`bx-side-panel-layout`,6)(7,`bx-side-panel`,7),J(`widthChange`,function(c){return e.resizeWidth(c)})(`openChange`,function(c){return e.opened.set(c)}),_(8,`p`,8),Q(9,`Optional projected top banner`),D(),_(10,`h3`,9),Q(11,`Declarative panel`),D(),_(12,`bx-input-field`,10),ZO(),J(`ngModelChange`,function(c){return e.note.set(c)}),D(),_(13,`p`),Q(14,`Closing keeps projected content mounted. Escape dismisses the focused panel without a modal focus trap or page scroll lock.`),D(),_(15,`div`,11)(16,`button`,12),J(`click`,function(){return e.opened.set(!1)}),Q(17,`Done`),D()()(),_(18,`div`,13)(19,`button`,12),J(`click`,function(){return e.opened.set(!e.opened())}),Q(20),D(),_(21,`button`,12),J(`click`,function(){return e.pageAction()}),Q(22,`Surrounding page action`),D(),_(23,`p`,14),Q(24),D(),_(25,`p`),Q(26,`The panel has ordinary keyboard navigation. Change its placement, bounds, or width while it is open.`),D()()()),t&2&&(y(),T(`clearable`,!1)(`options`,e.placements)(`ngModel`,e.placement()),QO(),y(),T(`min`,240)(`max`,640)(`ngModel`,e.panelWidth()),QO(),y(2),T(`ngModel`,e.contained()),QO(),y(),T(`ngModel`,e.backdrop()),QO(),y(2),T(`headerIcon`,KP(23,Ta))(`open`,e.opened())(`placement`,e.placement())(`container`,e.contained()?void 0:`viewport`)(`width`,e.width())(`resizable`,!0)(`resizeDisableShrink`,!1)(`resizeMinWidth`,240)(`resizeMaxWidth`,640)(`breakpoints`,e.panelBreakpoints)(`backdrop`,e.backdrop()),y(5),T(`ngModel`,e.note()),QO(),y(8),pn(``,e.opened()?`Close`:`Open`,` panel`),y(4),yE(`Page actions: `,e.clicks(),` · Panel `,e.opened()?`open`:`closed`))},dependencies:[Jie,Kie,bB,fe,va$1,Vt,Sa$1,NT,OT,Qd,Xd,Jd],styles:[`
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
}`]})};function ui(r,a){return new Promise((t,e)=>{let o=()=>{clearTimeout(c),t(!1)},c=setTimeout(()=>{r.signal.removeEventListener(`abort`,o),a===`fail`?e(/* @__PURE__ */ new Error(`The simulated server could not save this step. Try again.`)):t(a===`allow`)},800);r.signal.addEventListener(`abort`,o,{once:!0}),r.signal.aborted&&o()})}var gi={en:{label:`Workflow`,back:`Back`,next:`Next`,finish:`Finish`,skip:`Skip`,pending:`Pending`,awaitingConfirmation:`Awaiting confirmation`,active:`Current step`,completed:`Completed`,skipped:`Skipped`,error:`Error`,loading:`Loading`,disabled:`Disabled`,optional:`Optional`,invalid:`Check this step before continuing`,rejected:`Navigation was not accepted`,position:`Step {index} of {count}: {label}`,plan:`Plan`,build:`Build`,ship:`Ship`,archived:`Archived`,buildDescription:`Prepare the workspace`,details:`Details`,preferences:`Preferences`,review:`Review`},es:{label:`Flujo de trabajo`,back:`Atrás`,next:`Siguiente`,finish:`Finalizar`,skip:`Omitir`,pending:`Pendiente`,awaitingConfirmation:`Esperando confirmación`,active:`Paso actual`,completed:`Completado`,skipped:`Omitido`,error:`Error`,loading:`Cargando`,disabled:`Deshabilitado`,optional:`Opcional`,invalid:`Comprueba este paso antes de continuar`,rejected:`No se aceptó la navegación`,position:`Paso {index} de {count}: {label}`,plan:`Planificar`,build:`Crear`,ship:`Publicar`,archived:`Archivado`,buildDescription:`Prepara el espacio de trabajo`,details:`Detalles`,preferences:`Preferencias`,review:`Revisión`},fr:{label:`Parcours`,back:`Retour`,next:`Suivant`,finish:`Terminer`,skip:`Ignorer`,pending:`En attente`,awaitingConfirmation:`En attente de confirmation`,active:`Étape actuelle`,completed:`Terminé`,skipped:`Ignoré`,error:`Erreur`,loading:`Chargement`,disabled:`Désactivé`,optional:`Facultatif`,invalid:`Vérifiez cette étape avant de continuer`,rejected:`La navigation a été refusée`,position:`Étape {index} sur {count} : {label}`,plan:`Planifier`,build:`Créer`,ship:`Publier`,archived:`Archivé`,buildDescription:`Préparez l’espace de travail`,details:`Détails`,preferences:`Préférences`,review:`Vérification`},de:{label:`Ablauf`,back:`Zurück`,next:`Weiter`,finish:`Abschließen`,skip:`Überspringen`,pending:`Ausstehend`,awaitingConfirmation:`Bestätigung ausstehend`,active:`Aktueller Schritt`,completed:`Abgeschlossen`,skipped:`Übersprungen`,error:`Fehler`,loading:`Wird geladen`,disabled:`Deaktiviert`,optional:`Optional`,invalid:`Prüfen Sie diesen Schritt vor dem Fortfahren`,rejected:`Die Navigation wurde abgelehnt`,position:`Schritt {index} von {count}: {label}`,plan:`Planen`,build:`Erstellen`,ship:`Veröffentlichen`,archived:`Archiviert`,buildDescription:`Arbeitsbereich vorbereiten`,details:`Details`,preferences:`Einstellungen`,review:`Überprüfung`}};var Ce=class r{language=M(`en`);version=M(0);translate(a,t){let e=gi[this.language()][a]??a;for(let[o,c]of Object.entries(t??{}))e=e.replaceAll(`{${o}}`,String(c));return e}setLanguage(a){a&&(this.language.set(a),this.version.update(t=>t+1))}static ɵfac=function(t){return new(t||r)};static ɵprov=ie$1({token:r,factory:r.ɵfac})};var Ma=[`sectionsWrapper`];var Da=[`dynamicContent`];var Pa=[`section`];var Na=()=>({key:`details`});var Ia=()=>({key:`preferences`});var Va=()=>({key:`review`});var Wa=(r,a)=>a.id;function Oa(r,a){if(r&1){let t=ut$1();_(0,`bx-select`,68),ZO(),EE(`ngModelChange`,function(o){Le(t);let c=w();return qP(c.progressFormat,o)||(c.progressFormat=o),je(o)}),D()}if(r&2){let t=w();T(`clearable`,!1)(`options`,t.progressFormats),SE(`ngModel`,t.progressFormat),QO()}}function za(r,a){if(r&1){let t=ut$1();_(0,`section`,39,8)(2,`h4`),Q(3),D(),_(4,`p`),Q(5),D(),_(6,`p`),Q(7,`The section selection follows this scroll container. No scroll observer or router is owned by the stepper.`),D(),_(8,`button`,31),J(`click`,function(){let o=Le(t).$implicit,c=w();return je(c.sectionStatus.set(`Reviewed `+o.id))}),Q(9,`Mark section reviewed`),D()()}if(r&2){let t=a.$implicit;B(`data-section`,t.id)(`aria-label`,t.label),y(3),fe$1(t.label),y(2),fe$1(t.description)}}function La(r,a){if(r&1){let t=ut$1();_(0,`button`,31),J(`click`,function(){let o=Le(t).$implicit,c=w();return je(c.policy.set(o))}),Q(1),D()}if(r&2){let t=a.$implicit,e=w();B(`aria-pressed`,e.policy()===t),y(),pn(``,t,` content`)}}function Ra(r,a){if(r&1&&(_(0,`bx-input-field`,69),ZO(),D(),_(1,`p`),Q(2,`This required field becomes touched only after an invalid forward attempt.`),D()),r&2){let t=w();T(`formControl`,t.details.controls.name),QO()}}function Ba(r,a){if(r&1&&(_(0,`span`),Q(1),D()),r&2){let t=w();y(),fe$1(t.stepperDemoI18nService.translate(`preferences`))}}function Aa(r,a){if(r&1&&(_(0,`bx-input-field`,70),ZO(),D(),_(1,`p`),Q(2,`Skip leaves this step incomplete. With retained content, edits and child state survive revisiting.`),D()),r&2){let t=w();T(`formControl`,t.note),QO()}}function Fa(r,a){if(r&1&&(_(0,`h4`),Q(1,`Review workspace`),D(),_(2,`p`),Q(3),D(),_(4,`p`),Q(5),D(),_(6,`p`),Q(7,`Finish performs the same asynchronous save as Next. A failed save keeps this content and its form values.`),D()),r&2){let t=w();y(3),pn(`Workspace: `,t.details.controls.name.value),y(2),pn(`Note: `,t.note.value||`No delivery note`)}}function qa(r,a){if(r&1){let t=ut$1();_(0,`h4`),Q(1,`Workspace ready`),D(),_(2,`p`),Q(3,`Your workflow is complete. Reset to start again.`),D(),_(4,`button`,31),J(`click`,function(){Le(t),w();let o=Tt(61);return je(o.reset())}),Q(5,`Restart with existing values`),D()}}function ja(r,a){if(r&1&&(_(0,`bx-input-field`,71),ZO(),D()),r&2){let t=w();T(`formField`,t.signalForm.name),QO()}}function Ha(r,a){if(r&1&&(_(0,`p`),Q(1),D()),r&2){let t=w();y(),pn(`Ready to create `,t.signalModel().name,`.`)}}function Ua(r,a){if(r&1&&(_(0,`p`),Q(1),D()),r&2){w();let t=Tt(90);y(),pn(`Active step: `,t.selectedStep()?.label,`. Component state follows stable IDs when definitions change.`)}}function Ga(r,a){if(r&1){let t=ut$1();_(0,`button`,72),J(`click`,function(){Le(t);let o=w();return je(o.confirmSelection())}),Q(1),D()}r&2&&(y(),pn(`Open `,a))}function Ka(r,a){if(r&1&&(_(0,`div`,73)(1,`span`),Q(2),D(),ve(3,`bx-stepper`,74),D()),r&2){let t=a.$implicit,e=w().$implicit,o=w();y(2),fe$1(t),y(),T(`steps`,o.gallerySteps)(`variant`,e)(`size`,t)(`orientation`,o.orientation())(`responsive`,o.responsive())(`glassiness`,o.glass()?`on`:`off`)(`surfaceEffects`,o.lighting())(`showLabels`,e!==`dots`)(`labels`,o.labels)}}function Qa(r,a){if(r&1&&(_(0,`div`,67)(1,`h4`),Q(2),D(),Lt(3,Ka,4,10,`div`,73,Va$1),D()),r&2){let t=a.$implicit,e=w();y(2),fe$1(t),y(),jt(e.gallerySizes)}}var at=class r$2{bxA11yService=f(Ae);stepperDemoI18nService=f(Ce);sectionsWrapper=Nt(`sectionsWrapper`);dynamicContent=Nt(`dynamicContent`);sections=sf(`section`);modes=o;variants=i;progressFormats=s;sizes=r;orientations=a;responsiveOptions=p;galleryVariants=t;gallerySizes=l;gallerySteps=S;sectionSteps=n;languages=e$1;policies=[`eager`,`retained`,`active`];mode=M(`navigation`);variant=M(`steps`);progressFormat=M(`percentage`);size=M(`md`);orientation=M(`horizontal`);responsive=M(`compact`);active=M(`build`);sectionActive=M(`overview`);wizardActive=M(`details`);controlledActive=M(`plan`);status=M(`Use the controls to explore presentation and behavior.`);sectionStatus=M(`Choose a section or scroll the content. The application confirms the active ID.`);wizardStatus=M(`Enter a workspace name, then continue.`);nextOutcome=M(`allow`);policy=M(`retained`);pendingConfirmation=M(null);showLabels=M(!0);errorState=M(!1);loadingState=M(!1);allowIndicatorRequests=M(!1);readOnly=M(!1);glass=M(!0);lighting=M(!0);linear=M(!0);editable=M(!0);extra=M(!1);previewSteps=g(()=>[{id:`plan`,label:{key:`plan`},completed:!0,icon:`clipboard-check`},{id:`build`,label:{key:`build`},description:{key:`buildDescription`},icon:`wrench`},{id:`ship`,label:{key:`ship`},optional:!0,icon:`send`},{id:`archived`,label:{key:`archived`},disabled:!0,icon:`archive`}].map(t=>s$1(r$1({},t),{error:t.id===this.active()&&this.errorState(),loading:t.id===this.active()&&this.loadingState()})));currentStepOptions=g(()=>this.previewSteps().map(a=>({value:a.id,label:`${ee(a.label,this.stepperDemoI18nService)} (${a.id})`,disabled:a.disabled})));confirmationLabel=g(()=>{let a=this.pendingConfirmation(),t=this.gallerySteps.find(e=>e.id===a?.toId);return a?.outcome===`accepted`&&t&&t.id!==this.controlledActive()?ee(t.label,this.stepperDemoI18nService):null});controlledMessage=g(()=>{let a=this.pendingConfirmation(),t=this.confirmationLabel(),e=ee(this.gallerySteps.find(o=>o.id===this.controlledActive())?.label,this.stepperDemoI18nService);return t?`Request accepted. ${e} is still current. Select \u201COpen ${t}\u201D to let the application confirm the new activeStep.`:a?.outcome===`accepted`?a.toId?`The application opened ${e}. Request another step to repeat the two-stage flow.`:`The workflow is complete. Reset to try requesting and confirming steps again.`:a?`The request was ${a.outcome}. ${e} remains current; no destination is waiting for confirmation.`:`Current step: ${e}. \u201CRequest next step\u201D checks the transition. Then select \u201COpen\u201D to confirm it. This demo deliberately waits for that second action.`});dynamicSteps=g(()=>[{id:`first`,label:`Start`,content:this.dynamicContent()},...this.extra()?[{id:`extra`,label:`Added step`,optional:!0,content:this.dynamicContent()}]:[],{id:`last`,label:`Review`,content:this.dynamicContent()}]);labels=Object.fromEntries([`label`,`back`,`next`,`finish`,`skip`,`pending`,`awaitingConfirmation`,`active`,`completed`,`skipped`,`error`,`loading`,`disabled`,`optional`,`invalid`,`rejected`,`position`].map(a=>[a,{key:a}]));controlledLabels=s$1(r$1({},this.labels),{next:`Request next step`,back:`Request previous step`});details=new Gm({name:new pI(``,{nonNullable:!0,validators:bl.required})});note=new pI(``,{nonNullable:!0});signalModel=M({name:``});signalForm=Eo$1(this.signalModel,a=>Np(a.name));save=a=>{if(a.request.action===`previous`)return!0;let t=this.nextOutcome();return this.nextOutcome.set(`allow`),ui(a,t)};confirmPreview(a){this.status.set(`${a.source} request: ${a.id} (index ${a.index}). Application confirmed selection.`),this.active.set(a.id)}navigateSection(a){let t=this.sectionsWrapper()?.nativeElement,e=this.sections().find(c=>c.nativeElement.dataset.section===a.id)?.nativeElement,o=this.sections()[0]?.nativeElement;!t||!e||!o||(this.sectionStatus.set(`Application handled ${a.source} request for section ${a.id}.`),t.scrollTo({top:e.offsetTop-o.offsetTop,behavior:this.bxA11yService.isReducedMotion()?`instant`:`smooth`}))}observeSections(){let a=this.sectionsWrapper()?.nativeElement;if(!a)return;let t=a.getBoundingClientRect().top,e=this.sections().filter(o=>o.nativeElement.getBoundingClientRect().top<=t+32).at(-1);e&&this.sectionActive.set(e.nativeElement.dataset.section??`overview`)}resetWizard(a){a.reset(),this.details.reset(),this.note.reset(),this.nextOutcome.set(`allow`),this.wizardStatus.set(`Enter a workspace name, then continue.`)}recordWizard(a){switch(a.outcome){case`accepted`:this.wizardStatus.set(a.toId?`Saved and advanced to ${a.toId}.`:`Workspace saved. The workflow is complete.`);break;case`invalid`:this.wizardStatus.set(`Enter a workspace name before continuing. No save has started.`);break;case`error`:this.wizardStatus.set(`The simulated save failed. Your values are retained. Select Next or Finish once to retry.`);break;case`rejected`:this.wizardStatus.set(`The guard refused navigation. Your values are retained. Select Next or Finish once to try again.`);break;case`cancelled`:this.wizardStatus.set(`The save was cancelled because the workflow changed. Your values are retained.`)}}confirmSelection(){let a=this.pendingConfirmation();a?.outcome===`accepted`&&a.toId&&this.confirmationLabel()&&this.controlledActive.set(a.toId)}static ɵfac=function(t){return new(t||r$2)};static ɵcmp=$({type:r$2,selectors:[[`app-stepper-examples`]],viewQuery:function(t,e){t&1&&Xt(e.sectionsWrapper,Ma,5)(e.dynamicContent,Da,5)(e.sections,Pa,5),t&2&&lt$1(3)},features:[Qt([Ce,{provide:Se,useExisting:Ce}])],decls:121,vars:88,consts:[[`preview`,``],[`sectionsWrapper`,``],[`wizard`,``],[`finished`,``],[`signalWizard`,``],[`custom`,``],[`dynamicContent`,``],[`controlled`,``],[`section`,``],[1,`stepper-examples`],[`aria-labelledby`,`stepper-config-title`],[`id`,`stepper-config-title`],[3,`activeStepChange`,`stepRequested`,`mode`,`steps`,`variant`,`size`,`orientation`,`responsive`,`showLabels`,`indicatorInteractive`,`readOnly`,`glassiness`,`surfaceEffects`,`labels`,`showPercentage`,`progressFormat`,`activeStep`],[1,`config-grid`],[`label`,`Current step (activeStep ID)`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Behavior`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Variant`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Progress display`,3,`clearable`,`options`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Orientation`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Narrow screens`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Language`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`toggles`],[`label`,`Labels`,3,`ngModelChange`,`ngModel`],[`label`,`Current step error`,3,`ngModelChange`,`ngModel`],[`label`,`Current step loading`,3,`ngModelChange`,`ngModel`],[`label`,`Indicator interaction`,3,`ngModelChange`,`ngModel`],[`label`,`Read only`,3,`ngModelChange`,`ngModel`],[`label`,`Glass surfaces`,3,`ngModelChange`,`ngModel`],[`label`,`Interaction lighting`,3,`ngModelChange`,`ngModel`],[1,`actions`],[`bx-button`,``,`type`,`button`,3,`click`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[`announcement`,`polite`,3,`message`],[`aria-labelledby`,`stepper-section-title`],[`id`,`stepper-section-title`],[1,`section-layout`],[`mode`,`navigation`,`orientation`,`vertical`,3,`activeStepChange`,`stepRequested`,`steps`,`activeStep`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Release sections`,1,`section-scroll`,3,`scroll`],[1,`document-section`],[`aria-labelledby`,`stepper-wizard-title`],[`id`,`stepper-wizard-title`],[`label`,`Linear workflow`,3,`ngModelChange`,`ngModel`],[`label`,`Completed steps editable`,3,`ngModelChange`,`ngModel`],[`bx-button`,``,`type`,`button`],[`mode`,`wizard`,3,`activeStepChange`,`transitionFinished`,`variant`,`size`,`orientation`,`responsive`,`linear`,`contentPolicy`,`labels`,`beforeTransition`,`completionContent`,`activeStep`],[`id`,`details`,`icon`,`file-text`,3,`label`,`validation`,`editable`],[`bxStepContent`,``],[`id`,`preferences`,`icon`,`settings`,3,`label`,`optional`],[`bxStepLabel`,``],[`id`,`managed`,`label`,`Managed by your organization`,3,`disabled`],[`id`,`review`,`icon`,`clipboard-check`,3,`label`],[`aria-labelledby`,`stepper-signal-title`],[`id`,`stepper-signal-title`],[`mode`,`wizard`,`variant`,`segments`,3,`labels`],[`id`,`name`,`label`,`Name`,3,`validation`],[`id`,`ready`,`label`,`Ready`],[`aria-labelledby`,`stepper-custom-title`],[`id`,`stepper-custom-title`],[`mode`,`wizard`,`variant`,`cards`,3,`steps`,`linear`,`controls`,`labels`],[`aria-labelledby`,`stepper-controlled-title`],[`id`,`stepper-controlled-title`],[`mode`,`wizard`,`selectionMode`,`controlled`,3,`activeStepChange`,`transitionFinished`,`steps`,`linear`,`labels`,`activeStep`],[`announcement`,`polite`,3,`title`,`message`],[`bx-button`,``,`bxAlertActions`,``,`type`,`button`,`variant`,`filled`],[`aria-labelledby`,`stepper-gallery-title`],[`id`,`stepper-gallery-title`],[1,`gallery-group`],[`label`,`Progress display`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Workspace name`,`placeholder`,`Enter a workspace name`,3,`formControl`],[`label`,`Delivery note`,3,`formControl`],[`label`,`Required workspace name`,3,`formField`],[`bx-button`,``,`bxAlertActions`,``,`type`,`button`,`variant`,`filled`,3,`click`],[1,`gallery-row`],[`activeStep`,`build`,3,`steps`,`variant`,`size`,`orientation`,`responsive`,`glassiness`,`surfaceEffects`,`showLabels`,`labels`]],template:function(t,e){if(t&1){let o=ut$1();_(0,`div`,9)(1,`section`,10)(2,`h3`,11),Q(3,`Presentation and behavior`),D(),_(4,`p`),Q(5,` Pilot material and motion: select steps rapidly, press a marker, and compare sizes and orientations. Appearance settings control the theme, reduced motion, and opaque surfaces independently. `),D(),_(6,`bx-stepper`,12,0),EE(`activeStepChange`,function(s){return Le(o),qP(e.active,s)||(e.active=s),je(s)}),J(`stepRequested`,function(s){return e.mode()!==`wizard`&&e.confirmPreview(s)}),D(),_(8,`div`,13)(9,`bx-select`,14),ZO(),EE(`ngModelChange`,function(s){return Le(o),qP(e.active,s)||(e.active=s),je(s)}),D(),_(10,`bx-select`,15),ZO(),EE(`ngModelChange`,function(s){return Le(o),qP(e.mode,s)||(e.mode=s),je(s)}),D(),_(11,`bx-select`,16),ZO(),EE(`ngModelChange`,function(s){return Le(o),qP(e.variant,s)||(e.variant=s),je(s)}),D(),L$1(12,Oa,1,3,`bx-select`,17),_(13,`bx-select`,18),ZO(),EE(`ngModelChange`,function(s){return Le(o),qP(e.size,s)||(e.size=s),je(s)}),D(),_(14,`bx-select`,19),ZO(),EE(`ngModelChange`,function(s){return Le(o),qP(e.orientation,s)||(e.orientation=s),je(s)}),D(),_(15,`bx-select`,20),ZO(),EE(`ngModelChange`,function(s){return Le(o),qP(e.responsive,s)||(e.responsive=s),je(s)}),D(),_(16,`bx-select`,21),ZO(),J(`ngModelChange`,function(s){return e.stepperDemoI18nService.setLanguage(s)}),D()(),_(17,`div`,22)(18,`bx-slide-toggle`,23),ZO(),EE(`ngModelChange`,function(s){return Le(o),qP(e.showLabels,s)||(e.showLabels=s),je(s)}),D(),_(19,`bx-slide-toggle`,24),ZO(),EE(`ngModelChange`,function(s){return Le(o),qP(e.errorState,s)||(e.errorState=s),je(s)}),D(),_(20,`bx-slide-toggle`,25),ZO(),EE(`ngModelChange`,function(s){return Le(o),qP(e.loadingState,s)||(e.loadingState=s),je(s)}),D(),_(21,`bx-slide-toggle`,26),ZO(),EE(`ngModelChange`,function(s){return Le(o),qP(e.allowIndicatorRequests,s)||(e.allowIndicatorRequests=s),je(s)}),D(),_(22,`bx-slide-toggle`,27),ZO(),EE(`ngModelChange`,function(s){return Le(o),qP(e.readOnly,s)||(e.readOnly=s),je(s)}),D(),_(23,`bx-slide-toggle`,28),ZO(),EE(`ngModelChange`,function(s){return Le(o),qP(e.glass,s)||(e.glass=s),je(s)}),D(),_(24,`bx-slide-toggle`,29),ZO(),EE(`ngModelChange`,function(s){return Le(o),qP(e.lighting,s)||(e.lighting=s),je(s)}),D()(),_(25,`div`,30)(26,`button`,31),J(`click`,function(){Le(o);let s=Tt(7);return je(s.reset())}),Q(27,`Reset`),D(),_(28,`button`,32),J(`click`,function(){return e.active.set(`plan`)}),Q(29,`Select Plan`),D(),_(30,`button`,32),J(`click`,function(){return e.active.set(`ship`)}),Q(31,`Select Ship`),D()(),ve(32,`bx-banner`,33),D(),_(33,`section`,34)(34,`h3`,35),Q(35,`Application-owned section navigation`),D(),ve(36,`bx-banner`,33),_(37,`div`,36)(38,`bx-stepper`,37),EE(`activeStepChange`,function(s){return Le(o),qP(e.sectionActive,s)||(e.sectionActive=s),je(s)}),J(`stepRequested`,function(s){return e.navigateSection(s)}),D(),_(39,`div`,38,1),J(`scroll`,function(){return e.observeSections()}),Lt(41,za,10,4,`section`,39,Wa),D()()(),_(43,`section`,40)(44,`h3`,41),Q(45,`Workspace wizard`),D(),_(46,`p`),Q(47,`Required Reactive Forms validation, optional content, disabled steps, guarded saves, retained input and explicit completion.`),D(),_(48,`div`,22)(49,`bx-slide-toggle`,42),ZO(),EE(`ngModelChange`,function(s){return Le(o),qP(e.linear,s)||(e.linear=s),je(s)}),D(),_(50,`bx-slide-toggle`,43),ZO(),EE(`ngModelChange`,function(s){return Le(o),qP(e.editable,s)||(e.editable=s),je(s)}),D()(),_(51,`div`,30),Lt(52,La,2,2,`button`,44,Va$1),_(54,`button`,31),J(`click`,function(){return e.nextOutcome.set(`fail`)}),Q(55,`Fail next save`),D(),_(56,`button`,31),J(`click`,function(){return e.nextOutcome.set(`reject`)}),Q(57,`Reject next guard`),D(),_(58,`button`,31),J(`click`,function(){Le(o);let s=Tt(61);return je(e.resetWizard(s))}),Q(59,`Reset workflow and forms`),D()(),_(60,`bx-stepper`,45,2),EE(`activeStepChange`,function(s){return Le(o),qP(e.wizardActive,s)||(e.wizardActive=s),je(s)}),J(`transitionFinished`,function(s){return e.recordWizard(s)}),_(62,`bx-step`,46),Ti$1(63,Ra,3,1,`ng-template`,47),D(),_(64,`bx-step`,48),Ti$1(65,Ba,2,1,`ng-template`,49)(66,Aa,3,1,`ng-template`,47),D(),ve(67,`bx-step`,50),_(68,`bx-step`,51),Ti$1(69,Fa,8,2,`ng-template`,47),D()(),Ti$1(70,qa,6,0,`ng-template`,null,3,wr$1),ve(72,`bx-banner`,33),D(),_(73,`section`,52)(74,`h3`,53),Q(75,`Signal Forms`),D(),_(76,`bx-stepper`,54,4)(78,`bx-step`,55),Ti$1(79,ja,1,1,`ng-template`,47),D(),_(80,`bx-step`,56),Ti$1(81,Ha,2,1,`ng-template`,47),D()(),_(82,`button`,31),J(`click`,function(){Le(o);let s=Tt(77);return je(s.reset())}),Q(83,`Restart Signal Forms example`),D()(),_(84,`section`,57)(85,`h3`,58),Q(86,`Non-linear workflow and custom controls`),D(),_(87,`p`),Q(88,`Add or remove an optional step. Every control invokes the same guarded methods as the built-in buttons.`),D(),ve(89,`bx-stepper`,59,5),Ti$1(91,Ua,2,1,`ng-template`,null,6,wr$1),_(93,`div`,30)(94,`button`,31),J(`click`,function(){Le(o);let s=Tt(90);return je(s.previous())}),Q(95,`Back`),D(),_(96,`button`,31),J(`click`,function(){Le(o);let s=Tt(90);return je(s.next())}),Q(97,`Next`),D(),_(98,`button`,31),J(`click`,function(){Le(o);let s=Tt(90);return je(s.finish())}),Q(99,`Finish`),D(),_(100,`button`,31),J(`click`,function(){return e.extra.set(!e.extra())}),Q(101),D(),_(102,`button`,31),J(`click`,function(){Le(o);let s=Tt(90);return je(s.reset())}),Q(103,`Reset`),D()(),ve(104,`bx-banner`,33),D(),_(105,`section`,60)(106,`h3`,61),Q(107,`Controlled wizard selection`),D(),_(108,`bx-stepper`,62,7),EE(`activeStepChange`,function(s){return Le(o),qP(e.controlledActive,s)||(e.controlledActive=s),je(s)}),J(`transitionFinished`,function(s){return e.pendingConfirmation.set(s)}),D(),_(110,`bx-banner`,63),L$1(111,Ga,2,1,`button`,64),D(),_(112,`button`,31),J(`click`,function(){return Le(o),Tt(109).reset(),je(e.pendingConfirmation.set(null))}),Q(113,`Reset controlled wizard`),D()(),_(114,`section`,65)(115,`h3`,66),Q(116,`Variant and size reference`),D(),_(117,`p`),Q(118,`All presentations use the same completion data. Segment thickness changes with size. Orientation follows the configurator above.`),D(),Lt(119,Qa,5,1,`div`,67,Va$1),D()()}if(t&2){let o,c=Tt(61),s=Tt(71),U=Tt(90),A=Tt(109);y(6),T(`mode`,e.mode())(`steps`,e.previewSteps())(`variant`,e.variant())(`size`,e.size())(`orientation`,e.orientation())(`responsive`,e.responsive())(`showLabels`,e.showLabels())(`indicatorInteractive`,e.allowIndicatorRequests())(`readOnly`,e.readOnly())(`glassiness`,e.glass()?`on`:`off`)(`surfaceEffects`,e.lighting())(`labels`,e.labels)(`showPercentage`,!0)(`progressFormat`,e.progressFormat()),SE(`activeStep`,e.active),y(3),T(`clearable`,!1)(`options`,e.currentStepOptions()),SE(`ngModel`,e.active),QO(),y(),T(`clearable`,!1)(`options`,e.modes),SE(`ngModel`,e.mode),QO(),y(),T(`clearable`,!1)(`options`,e.variants),SE(`ngModel`,e.variant),QO(),y(),j$1(e.variant()===`progress`?12:-1),y(),T(`clearable`,!1)(`options`,e.sizes),SE(`ngModel`,e.size),QO(),y(),T(`clearable`,!1)(`options`,e.orientations),SE(`ngModel`,e.orientation),QO(),y(),T(`clearable`,!1)(`options`,e.responsiveOptions),SE(`ngModel`,e.responsive),QO(),y(),T(`clearable`,!1)(`options`,e.languages)(`ngModel`,e.stepperDemoI18nService.language()),QO(),y(2),SE(`ngModel`,e.showLabels),QO(),y(),SE(`ngModel`,e.errorState),QO(),y(),SE(`ngModel`,e.loadingState),QO(),y(),SE(`ngModel`,e.allowIndicatorRequests),QO(),y(),SE(`ngModel`,e.readOnly),QO(),y(),SE(`ngModel`,e.glass),QO(),y(),SE(`ngModel`,e.lighting),QO(),y(4),T(`disabled`,e.mode()===`wizard`||e.readOnly()),y(2),T(`disabled`,e.mode()===`wizard`||e.readOnly()),y(2),T(`message`,e.status()),y(4),T(`message`,e.sectionStatus()),y(2),T(`steps`,e.sectionSteps),SE(`activeStep`,e.sectionActive),y(3),jt(e.sectionSteps),y(8),SE(`ngModel`,e.linear),QO(),y(),SE(`ngModel`,e.editable),QO(),y(2),jt(e.policies),y(8),T(`variant`,e.variant())(`size`,e.size())(`orientation`,e.orientation())(`responsive`,e.responsive())(`linear`,e.linear())(`contentPolicy`,e.policy())(`labels`,e.labels)(`beforeTransition`,e.save)(`completionContent`,s),SE(`activeStep`,e.wizardActive),y(2),T(`label`,KP(85,Na))(`validation`,e.details)(`editable`,e.editable()),y(2),T(`label`,KP(86,Ia))(`optional`,!0),y(3),T(`disabled`,!0),y(),T(`label`,KP(87,Va)),y(4),T(`message`,c.pending()?`Saving workspace… The next step opens automatically after a successful save.`:e.wizardStatus()+` Next server outcome: `+e.nextOutcome()+`.`),y(4),T(`labels`,e.labels),y(2),T(`validation`,e.signalForm()),y(11),T(`steps`,e.dynamicSteps())(`linear`,!1)(`controls`,!1)(`labels`,e.labels),y(12),pn(``,e.extra()?`Remove`:`Add`,` optional step`),y(3),T(`message`,U.isComplete()?`Completed`:U.lastTransition()?.outcome||`Ready`),y(4),T(`steps`,e.gallerySteps)(`linear`,!1)(`labels`,e.controlledLabels),SE(`activeStep`,e.controlledActive),y(2),T(`title`,e.confirmationLabel()?`Waiting for application confirmation`:A.isComplete()?`Workflow complete`:`Application-owned selection`)(`message`,e.controlledMessage()),y(),j$1((o=e.confirmationLabel())?111:-1,o),y(8),jt(e.galleryVariants)}},dependencies:[Jie,Kie,bB,ese,xB,Op,vT,fe,va$1,Vt,Sa$1,Wn,ft$1,gt$1,bt$1],styles:[`
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
}`]})};var bi=[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Success`,value:`success`},{label:`Danger`,value:`danger`},{label:`Info`,value:`info`},{label:`Warning`,value:`warn`},{label:`Neutral`,value:`neutral`}];var yi=[{label:`Tonal`,value:`tonal`},{label:`Filled`,value:`filled`},{label:`Outlined`,value:`outlined`}];var _i=`<span bxTruncate #overflow="bxTruncate"
    [bxTooltip]="label() | bxTruncatedText: overflow.truncated()"
    [attr.tabindex]="overflow.truncated() ? 0 : null"
    bxTooltipTouch="longpress">{{ label() }}</span>`;var hi=`<bx-tag [text]="label()" [tooltipOnTruncate]="false" tooltip="My application tooltip" />
<bx-input-field [label]="label()" [tooltipOnTruncate]="false" />
<bx-select label="Location" [options]="options()" [tooltipOnTruncate]="false" />`;var vi=`import { TruncateDirective, TruncatedTextPipe, TooltipDirective, truncatedText } from '@filip.mazev/blocks/primitives';

// Read the exported directive's truncated() and text() signals in your own logic.
const tooltip = truncatedText(label(), overflow.truncated(), automaticTooltips());

// Application-wide form default; individual controls can override it.
formSettings.update({ tooltipOnTruncate: false });`;var Xa=()=>[0];var we=class r{text=M(`A long location name that can be truncated`);width=M(14);enabled=M(!0);largeText=M(!1);automaticTooltips=M(!0);customTooltip=M(!1);menuActions=M(0);label=g(()=>String(this.text()??``));options=g(()=>[{label:this.label(),value:0}]);pipeExample=_i;customExample=hi;logicExample=vi;previewWidth=g(()=>{let a=Number(this.width());return Number.isFinite(a)?Math.max(4,Math.min(64,a)):14});static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-truncation-examples`]],decls:96,vars:55,consts:[[`overflow`,`bxTruncate`],[`aria-label`,`Conditional truncation tooltips`,1,`truncation-demo`],[1,`truncation-controls`],[`label`,`Text`,`subscriptSizing`,`dynamic`,3,`valueChange`,`value`],[`label`,`Available width (rem)`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`max`,`value`],[`role`,`group`,`aria-label`,`Preview options`,1,`truncation-switches`],[`label`,`Enable text truncation`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Larger text preview`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Automatic tooltips`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Custom tooltip`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[1,`component-examples`],[1,`preview-card`,`text-preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Text preview`,1,`preview-stage`],[1,`text-example`,`example-width`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,3,`bxTruncate`,`bxTooltip`],[1,`preview-caption`],[1,`preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Tag preview`,1,`preview-stage`],[1,`example-width`],[`leadingIcon`,`map-pin`,3,`text`,`tooltipOnTruncate`,`tooltip`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Input field preview`,1,`preview-stage`],[`placeholder`,`Editable value`,`subscriptSizing`,`dynamic`,3,`label`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Search value preview`,1,`preview-stage`],[`ariaLabel`,`Search value`,`subscriptSizing`,`dynamic`,3,`search`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Select preview`,1,`preview-stage`],[`subscriptSizing`,`dynamic`,3,`label`,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Multiselect preview`,1,`preview-stage`],[`label`,`Selected tag`,`selectionDisplay`,`tags`,`subscriptSizing`,`dynamic`,3,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Menu item preview`,1,`preview-stage`],[3,`action`,`label`,`wrapLabel`,`tooltipOnTruncate`],[`tabindex`,`0`,`aria-label`,`HTML truncation example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`tabindex`,`0`,`aria-label`,`TypeScript truncation example`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`]],template:function(t,e){if(t&1){let o=ut$1();_(0,`section`,1)(1,`h3`),Q(2,`Shared truncation, optional tooltips`),D(),_(3,`p`)(4,`code`),Q(5,`TruncateDirective`),D(),Q(6,` owns ellipsis and rendered measurement. The pure `),_(7,`code`),Q(8,`bxTruncatedText`),D(),Q(9,` pipe selects text for a conditional tooltip. Use the exported directive signals or `),_(10,`code`),Q(11,`truncatedText()`),D(),Q(12,` helper in your own logic. `),D(),_(13,`div`,2)(14,`bx-input-field`,3),EE(`valueChange`,function(s){return Le(o),qP(e.text,s)||(e.text=s),je(s)}),D(),_(15,`bx-input-field`,4),EE(`valueChange`,function(s){return Le(o),qP(e.width,s)||(e.width=s),je(s)}),D()(),_(16,`div`,5)(17,`bx-checkbox`,6),EE(`checkedChange`,function(s){return Le(o),qP(e.enabled,s)||(e.enabled=s),je(s)}),D(),_(18,`bx-checkbox`,7),EE(`checkedChange`,function(s){return Le(o),qP(e.largeText,s)||(e.largeText=s),je(s)}),D(),_(19,`bx-checkbox`,8),EE(`checkedChange`,function(s){return Le(o),qP(e.automaticTooltips,s)||(e.automaticTooltips=s),je(s)}),D(),_(20,`bx-checkbox`,9),EE(`checkedChange`,function(s){return Le(o),qP(e.customTooltip,s)||(e.customTooltip=s),je(s)}),D()(),_(21,`div`,10)(22,`section`,11)(23,`h4`),Q(24,`Text preview`),D(),_(25,`div`,12)(26,`div`,13)(27,`span`,14,0),Zo$1(29,`bxTruncatedText`),Q(30),D()()(),_(31,`output`,15),Q(32),D()(),_(33,`section`,16)(34,`h4`),Q(35,`Tag`),D(),_(36,`div`,17)(37,`div`,18),ve(38,`bx-tag`,19),D()(),_(39,`p`,15),Q(40,`Clipped labels use an automatic or application-owned tooltip.`),D()(),_(41,`section`,16)(42,`h4`),Q(43,`Input field`),D(),_(44,`div`,20)(45,`div`,18),ve(46,`bx-input-field`,21),D()(),_(47,`p`,15),Q(48,`The floating label shares the truncation measurement.`),D()(),_(49,`section`,16)(50,`h4`),Q(51,`Search value`),D(),_(52,`div`,22)(53,`div`,18)(54,`bx-search-input`,23),J(`search`,function(s){return e.text.set(s)}),D()()(),_(55,`p`,15),Q(56,`Editing the search updates the shared example text.`),D()(),_(57,`section`,16)(58,`h4`),Q(59,`Select`),D(),_(60,`div`,24)(61,`div`,18),ve(62,`bx-select`,25),D()(),_(63,`p`,15),Q(64,`Selected values and captions share the same available width.`),D()(),_(65,`section`,16)(66,`h4`),Q(67,`Multiselect`),D(),_(68,`div`,26)(69,`div`,18),ve(70,`bx-multi-select`,27),D()(),_(71,`p`,15),Q(72,`The selected tag follows the owning control's tooltip setting.`),D()(),_(73,`section`,16)(74,`h4`),Q(75,`Menu item`),D(),_(76,`div`,28)(77,`div`,18)(78,`bx-menu`)(79,`bx-menu-item`,29),J(`action`,function(){return e.menuActions.set(e.menuActions()+1)}),D()()()(),_(80,`output`,15),Q(81),D()()(),_(82,`p`),Q(83,` Change the text or width to switch between clipped and fitting labels. Turn automatic tooltips off to retain ellipsis and measurement for custom feedback. Hover, keyboard focus, and touch-and-hold use the existing tooltip mechanism. Explicit tag descriptions still take precedence. Custom tooltip applies to the text and tag examples. Preview panels keep their size; long wrapped content scrolls inside them. Example widths are capped by the available space in each card. `),D(),_(84,`h3`),Q(85,`Short conditional tooltip`),D(),_(86,`pre`,30),ve(87,`code`,31),D(),_(88,`h3`),Q(89,`Disable automatic tooltips`),D(),_(90,`pre`,30),ve(91,`code`,31),D(),_(92,`h3`),Q(93,`Use the public API in your application`),D(),_(94,`pre`,32),ve(95,`code`,33),D()()}if(t&2){let o=Tt(28);y(14),SE(`value`,e.text),y(),T(`min`,4)(`max`,64),SE(`value`,e.width),y(2),SE(`checked`,e.enabled),y(),SE(`checked`,e.largeText),y(),SE(`checked`,e.automaticTooltips),y(),SE(`checked`,e.customTooltip),y(6),_e(`inline-size`,e.previewWidth(),`rem`),se(`large-text`,e.largeText()),y(),T(`bxTruncate`,e.enabled())(`bxTooltip`,e.customTooltip()?`My application tooltip`:Xo$1(29,50,e.label(),o.truncated(),e.automaticTooltips())),B(`tabindex`,e.customTooltip()||e.automaticTooltips()&&o.truncated()?0:null),y(3),fe$1(e.label()),y(2),pn(`Text `,o.truncated()?`is truncated`:`fits without truncation`,`.`),y(5),_e(`inline-size`,e.previewWidth(),`rem`),y(),T(`text`,e.label())(`tooltipOnTruncate`,e.automaticTooltips())(`tooltip`,e.customTooltip()?`My application tooltip`:void 0),y(7),_e(`inline-size`,e.previewWidth(),`rem`),y(),T(`label`,e.label())(`tooltipOnTruncate`,e.automaticTooltips()),y(7),_e(`inline-size`,e.previewWidth(),`rem`),y(),T(`value`,e.label())(`tooltipOnTruncate`,e.automaticTooltips()),y(7),_e(`inline-size`,e.previewWidth(),`rem`),y(),T(`label`,e.label())(`options`,e.options())(`value`,0)(`tooltipOnTruncate`,e.automaticTooltips()),y(7),_e(`inline-size`,e.previewWidth(),`rem`),y(),T(`options`,e.options())(`value`,KP(54,Xa))(`tooltipOnTruncate`,e.automaticTooltips()),y(7),_e(`inline-size`,e.previewWidth(),`rem`),y(2),T(`label`,e.label())(`wrapLabel`,!e.enabled())(`tooltipOnTruncate`,e.automaticTooltips()),y(2),pn(`Menu activations: `,e.menuActions()),y(6),T(`highlight`,e.pipeExample),y(4),T(`highlight`,e.customExample),y(4),T(`highlight`,e.logicExample)}},dependencies:[ht,$r,va$1,Ma$1,kn,Vt,wb,yb,mT,Ui$1,Mo$1,Sl],styles:[`
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
}`]})};var Za=()=>({key:`tagLabel`});var ot=class r{demoI18nService=f(L);label=M(`Skopje`);text=g(()=>String(this.label()??``));color=M(`accent`);variant=M(`tonal`);disabled=M(!1);leadingIcon=M(!0);trailingIcon=M(!0);leadingCount=M(!1);trailingCount=M(!0);leftNumber=M(3);rightNumber=M(12);colors=bi;variants=yi;static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-tag-examples`]],features:[Qt([L,{provide:Se,useExisting:L}])],decls:23,vars:26,consts:[[1,`tag-demo`],[`aria-label`,`Tag previews`,1,`tag-previews`],[`tooltip`,`A location tag tooltip`,3,`text`,`color`,`variant`,`disabled`,`leadingIcon`,`trailingIcon`,`leadingNumber`,`trailingNumber`],[`color`,`info`,`variant`,`filled`,`ariaLabel`,`42 locations`,`tooltip`,`Number-only tag`,3,`leadingNumber`],[`leadingIcon`,`map-pin`,`color`,`success`,3,`text`],[`text`,`Unavailable`,`color`,`neutral`,3,`disabled`],[`text`,`Skopje`],[`text`,`+2`,`tooltip`,`Ohrid, Bitola`],[1,`tag-controls`],[`label`,`Tag text`,3,`valueChange`,`value`],[`label`,`Color`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Appearance`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Leading number`,`type`,`number`,3,`valueChange`,`value`],[`label`,`Trailing number`,`type`,`number`,3,`valueChange`,`value`],[1,`tag-controls-checkboxes`],[`label`,`Leading icon`,3,`checkedChange`,`checked`],[`label`,`Trailing icon`,3,`checkedChange`,`checked`],[`label`,`Leading number`,3,`checkedChange`,`checked`],[`label`,`Trailing number`,3,`checkedChange`,`checked`],[`label`,`Disabled appearance`,3,`checkedChange`,`checked`]],template:function(t,e){t&1&&(_(0,`div`,0)(1,`div`,1),ve(2,`bx-tag`,2)(3,`bx-tag`,3)(4,`bx-tag`,4)(5,`bx-tag`,5)(6,`bx-tag`,6)(7,`bx-tag`,7),D(),_(8,`div`,8)(9,`bx-input-field`,9),EE(`valueChange`,function(c){return qP(e.label,c)||(e.label=c),c}),D(),_(10,`bx-select`,10),EE(`valueChange`,function(c){return qP(e.color,c)||(e.color=c),c}),D(),_(11,`bx-select`,11),EE(`valueChange`,function(c){return qP(e.variant,c)||(e.variant=c),c}),D(),_(12,`bx-input-field`,12),EE(`valueChange`,function(c){return qP(e.leftNumber,c)||(e.leftNumber=c),c}),D(),_(13,`bx-input-field`,13),EE(`valueChange`,function(c){return qP(e.rightNumber,c)||(e.rightNumber=c),c}),D()(),_(14,`div`,14)(15,`bx-checkbox`,15),EE(`checkedChange`,function(c){return qP(e.leadingIcon,c)||(e.leadingIcon=c),c}),D(),_(16,`bx-checkbox`,16),EE(`checkedChange`,function(c){return qP(e.trailingIcon,c)||(e.trailingIcon=c),c}),D(),_(17,`bx-checkbox`,17),EE(`checkedChange`,function(c){return qP(e.leadingCount,c)||(e.leadingCount=c),c}),D(),_(18,`bx-checkbox`,18),EE(`checkedChange`,function(c){return qP(e.trailingCount,c)||(e.trailingCount=c),c}),D(),_(19,`bx-checkbox`,19),EE(`checkedChange`,function(c){return qP(e.disabled,c)||(e.disabled=c),c}),D()(),_(20,`p`),Q(21,` Hover or keyboard-focus a tooltip tag. In a select trigger, the parent control exposes the complete selection while overflow tags show the remaining names on hover. `),D(),ve(22,`app-truncation-examples`),D()),t&2&&(y(2),T(`text`,e.text())(`color`,e.color()??`accent`)(`variant`,e.variant()??`tonal`)(`disabled`,e.disabled())(`leadingIcon`,e.leadingIcon()?`map-pin`:void 0)(`trailingIcon`,e.trailingIcon()?`chevron-right`:void 0)(`leadingNumber`,e.leadingCount()?e.leftNumber():null)(`trailingNumber`,e.trailingCount()?e.rightNumber():null),y(),T(`leadingNumber`,42),y(),T(`text`,KP(25,Za)),y(),T(`disabled`,!0),y(4),SE(`value`,e.label),y(),T(`clearable`,!1)(`options`,e.colors),SE(`value`,e.color),y(),T(`clearable`,!1)(`options`,e.variants),SE(`value`,e.variant),y(),SE(`value`,e.leftNumber),y(),SE(`value`,e.rightNumber),y(2),SE(`checked`,e.leadingIcon),y(),SE(`checked`,e.trailingIcon),y(),SE(`checked`,e.leadingCount),y(),SE(`checked`,e.trailingCount),y(),SE(`checked`,e.disabled))},dependencies:[mT,$r,va$1,Vt,we],styles:[`
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
}`]})};var Ya=()=>[];var xi=(r,a)=>a.value;function Ja(r,a){if(r&1){let t=ut$1();_(0,`button`,6),J(`click`,function(){let o=Le(t).$implicit,c=w();return je(c.presentation.set(o.value))}),Q(1),D()}if(r&2){let t=a.$implicit,e=w();T(`variant`,e.presentation()===t.value?`filled`:`tonal`),y(),pn(` `,t.label,` `)}}function $a(r,a){if(r&1){let t=ut$1();_(0,`button`,6),J(`click`,function(){let o=Le(t).$implicit,c=w();return je(c.precision.set(o.value))}),Q(1),D()}if(r&2){let t=a.$implicit,e=w();T(`variant`,e.precision()===t.value?`filled`:`tonal`),y(),pn(` `,t.label,` `)}}function eo(r,a){if(r&1){let t=ut$1();_(0,`button`,6),J(`click`,function(){let o=Le(t).$implicit,c=w();return je(c.minuteStep.set(o))}),Q(1),D()}if(r&2){let t=a.$implicit,e=w();T(`variant`,e.minuteStep()===t?`filled`:`tonal`),y(),pn(``,t,` min`)}}var rt=class r{destroyRef=f(X$1);presentation=M(`wheel`);hourCycle=M(12);precision=M(`minute`);minuteStep=M(5);customChoices=M(!1);dropdownIcon=M(!1);interval=M(void 0);timeOptions=[{value:`09:00`,label:`Morning`},{value:`14:00`,label:`Afternoon`},{value:`12:30`,label:`Lunch (unavailable)`,disabled:!0},{value:`18:00`,label:`Evening`}];loop=M(!0);businessHours=M(!1);blockLunch=M(!0);showTimeZone=M(!1);showNow=M(!1);asyncEnabled=M(!1);availabilityLoading=M(!1);failNext=M(!1);value=M(null);committed=M(`Nothing committed yet.`);presentations=[{value:`wheel`,label:`Wheel`},{value:`list`,label:`List`}];precisions=[{value:`minute`,label:`Minutes`},{value:`second`,label:`Seconds`},{value:`millisecond`,label:`Milliseconds`}];steps=[1,5,15,30];disabledIntervals=[{start:`12:00`,end:`13:00`}];resolver=async()=>{let a=this.failNext(),t=++this.requestRevision;if(this.failNext.set(!1),this.availabilityLoading.set(!0),await new Promise(o=>setTimeout(o,500)),this.destroyRef.destroyed)return{times:[]};if(t===this.requestRevision&&this.availabilityLoading.set(!1),a)throw new Error(`The mock request failed. Retry to load these times.`);let e=[];for(let o=540;o<=1020;o+=30)e.push(`${String(Math.floor(o/60)).padStart(2,`0`)}:${String(o%60).padStart(2,`0`)}`);return{times:e}};requestRevision=0;onCommit(a){this.committed.set(a===null?`Cleared.`:`Committed ${a}.`)}setSemanticChoices(a){this.customChoices.set(a),this.value.set(null),a&&this.presentation.set(`list`)}failRequest(a){this.failNext.set(!0),a.reloadSlots()}static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-time-picker-examples`]],decls:44,vars:32,consts:[[`picker`,``],[`aria-labelledby`,`time-picker-demo-title`,1,`time-demo`],[`id`,`time-picker-demo-title`],[`role`,`group`,`aria-label`,`Presentation`,1,`demo-group`],[`bx-button`,``,`type`,`button`,3,`variant`],[`role`,`group`,`aria-label`,`Selection mode`,1,`demo-group`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`],[`role`,`group`,`aria-label`,`Precision`,1,`demo-group`],[`role`,`group`,`aria-label`,`Minute step`,1,`demo-group`],[1,`demo-toggles`],[`label`,`Now shortcut`,3,`checkedChange`,`checked`],[`label`,`Looping columns`,3,`checkedChange`,`checked`],[`label`,`Limit to 09:00–17:00`,3,`checkedChange`,`checked`],[`label`,`Block 12:00–13:00`,3,`checkedChange`,`checked`],[`label`,`Time-zone selector`,3,`checkedChange`,`checked`],[`label`,`Semantic time choices`,3,`checkedChange`,`checked`],[`label`,`Dropdown icon`,3,`checkedChange`,`checked`],[`label`,`Async slot availability`,3,`checkedChange`,`checked`],[`role`,`group`,`aria-label`,`List interval`,1,`demo-group`],[`role`,`group`,`aria-label`,`Availability requests`,1,`demo-group`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`label`,`Meeting time`,`loadErrorMessage`,`The mock request failed. Retry to load these times.`,`hint`,`Type a time, use the wheel, or choose an option in the list. Enable async availability to exercise loading and retry.`,3,`valueChange`,`valueCommit`,`pickerIcon`,`options`,`interval`,`min`,`max`,`timePresentation`,`hourCycle`,`precision`,`minuteStep`,`loopColumns`,`disabledIntervals`,`showTimeZone`,`nowLabel`,`resolver`,`value`],[`role`,`status`,`aria-live`,`polite`,1,`demo-status`]],template:function(t,e){if(t&1){let o=ut$1();_(0,`section`,1)(1,`h3`,2),Q(2,`Time picker: wheel and list`),D(),_(3,`p`),Q(4,` Type into the field while its dropdown is open, or use the wheel or list below. The wheel tracks real pointer velocity and settles with the shared spring. Every wheel action has keyboard equivalents, and disabled options are skipped instead of being committed. `),D(),_(5,`div`,3),Lt(6,Ja,2,2,`button`,4,xi),D(),_(8,`div`,5)(9,`button`,6),J(`click`,function(){return e.hourCycle.set(12)}),Q(10,`12-hour`),D(),_(11,`button`,6),J(`click`,function(){return e.hourCycle.set(24)}),Q(12,`24-hour`),D()(),_(13,`div`,7),Lt(14,$a,2,2,`button`,4,xi),D(),_(16,`div`,8),Lt(17,eo,2,2,`button`,4,Va$1),D(),_(19,`div`,9)(20,`bx-slide-toggle`,10),EE(`checkedChange`,function(s){return Le(o),qP(e.showNow,s)||(e.showNow=s),je(s)}),D(),_(21,`bx-slide-toggle`,11),EE(`checkedChange`,function(s){return Le(o),qP(e.loop,s)||(e.loop=s),je(s)}),D(),_(22,`bx-slide-toggle`,12),EE(`checkedChange`,function(s){return Le(o),qP(e.businessHours,s)||(e.businessHours=s),je(s)}),D(),_(23,`bx-slide-toggle`,13),EE(`checkedChange`,function(s){return Le(o),qP(e.blockLunch,s)||(e.blockLunch=s),je(s)}),D(),_(24,`bx-slide-toggle`,14),EE(`checkedChange`,function(s){return Le(o),qP(e.showTimeZone,s)||(e.showTimeZone=s),je(s)}),D(),_(25,`bx-slide-toggle`,15),J(`checkedChange`,function(s){return e.setSemanticChoices(s)}),D(),_(26,`bx-slide-toggle`,16),EE(`checkedChange`,function(s){return Le(o),qP(e.dropdownIcon,s)||(e.dropdownIcon=s),je(s)}),D(),_(27,`bx-slide-toggle`,17),EE(`checkedChange`,function(s){return Le(o),qP(e.asyncEnabled,s)||(e.asyncEnabled=s),je(s)}),D()(),_(28,`div`,18)(29,`button`,6),J(`click`,function(){return e.interval.set(void 0)}),Q(30,`Use minute step`),D(),_(31,`button`,6),J(`click`,function(){return Le(o),e.interval.set(`30m`),je(e.presentation.set(`list`))}),Q(32,` 30-minute list `),D(),_(33,`button`,6),J(`click`,function(){return Le(o),e.interval.set(`1.5 hours`),je(e.presentation.set(`list`))}),Q(34,` 90-minute list `),D()(),_(35,`div`,19)(36,`button`,20),J(`click`,function(){Le(o);let s=Tt(41);return je(s.reloadSlots())}),Q(37,`Reload times`),D(),_(38,`button`,21),J(`click`,function(){Le(o);let s=Tt(41);return je(e.failRequest(s))}),Q(39,` Fail next request now `),D()(),_(40,`bx-time-picker`,22,0),EE(`valueChange`,function(s){return Le(o),qP(e.value,s)||(e.value=s),je(s)}),J(`valueCommit`,function(s){return e.onCommit(s)}),D(),_(42,`p`,23),Q(43),D()()}t&2&&(y(6),jt(e.presentations),y(3),T(`variant`,e.hourCycle()===12?`filled`:`tonal`),y(2),T(`variant`,e.hourCycle()===24?`filled`:`tonal`),y(3),jt(e.precisions),y(3),jt(e.steps),y(3),SE(`checked`,e.showNow),y(),SE(`checked`,e.loop),y(),SE(`checked`,e.businessHours),y(),SE(`checked`,e.blockLunch),y(),SE(`checked`,e.showTimeZone),y(),T(`checked`,e.customChoices()),y(),SE(`checked`,e.dropdownIcon),y(),SE(`checked`,e.asyncEnabled),y(2),T(`variant`,e.interval()===void 0?`filled`:`tonal`),y(2),T(`variant`,e.interval()===`30m`?`filled`:`tonal`),y(2),T(`variant`,e.interval()===`1.5 hours`?`filled`:`tonal`),y(3),T(`disabled`,!e.asyncEnabled()||e.availabilityLoading()),y(2),T(`disabled`,!e.asyncEnabled()||e.availabilityLoading()),y(2),T(`pickerIcon`,e.dropdownIcon()?`chevron-down`:`clock`)(`options`,e.customChoices()?e.timeOptions:void 0)(`interval`,e.interval())(`min`,e.businessHours()?`09:00`:null)(`max`,e.businessHours()?`17:00`:null)(`timePresentation`,e.presentation())(`hourCycle`,e.hourCycle())(`precision`,e.precision())(`minuteStep`,e.minuteStep())(`loopColumns`,e.loop())(`disabledIntervals`,e.blockLunch()?e.disabledIntervals:KP(31,Ya))(`showTimeZone`,e.showTimeZone())(`nowLabel`,e.showNow()?`Select now`:void 0)(`resolver`,e.asyncEnabled()?e.resolver:void 0),SE(`value`,e.value),y(3),fe$1(e.committed()))},dependencies:[fe,Sa$1,ka$1],styles:[`
.time-demo[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-3, 0.75rem);
  max-inline-size: 56rem;
}
.time-demo[_ngcontent-%COMP%]    > bx-time-picker[_ngcontent-%COMP%] {
  max-inline-size: 24rem;
}
.time-demo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.time-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
}
.time-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  max-inline-size: 68ch;
}
.demo-group[_ngcontent-%COMP%], 
.demo-toggles[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-2, 0.5rem);
  align-items: center;
}
.demo-status[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: var(--%NS%bx-text-accent);
}`]})};function to(r,a){if(r&1&&(_(0,`strong`),Q(1),D()),r&2){let t=w(2);y(),fe$1(t.text().brand)}}function no(r,a){if(r&1&&(_(0,`a`,13),ve(1,`bx-icon`,14),L$1(2,to,2,1,`strong`),D()),r&2){let t=a.$implicit,e=w();B(`aria-label`,e.text().brand),y(2),j$1(t?-1:2)}}function io(r,a){if(r&1){let t=ut$1();_(0,`button`,15),J(`click`,function(){Le(t);let o=w(2);return je(o.action.set(`top.actionDone`))}),ve(1,`bx-icon`,16),Q(2),D(),_(3,`button`,15),J(`click`,function(){Le(t);let o=w(2);return je(o.action.set(`top.helpDone`))}),ve(4,`bx-icon`,17),Q(5),D()}if(r&2){let t=w(2);y(2),pn(``,t.text().settings,` `),y(3),pn(``,t.text().help,` `)}}function ao(r,a){if(r&1&&L$1(0,io,6,2),r&2){let t=w();j$1(t.actions()?0:-1)}}function oo(r,a){if(r&1&&(ve(0,`bx-icon`,18),_(1,`span`),Q(2),D(),_(3,`small`,19),Q(4,`↗`),D()),r&2){let t=a.$implicit;T(`name`,t.icon?.name??`circle`),y(2),fe$1(t.label)}}var lt=class r{navigationDemoI18nService=f(ie);groups=g(()=>tt(`/components/top-nav`,this.navigationDemoI18nService).map(t=>t.id!==`workspace`?t:s$1(r$1({},t),{items:t.items.filter(e=>e.id===`overview`||e.id===`projects`).map(e=>e.id!==`projects`?e:s$1(r$1({},e),{children:[...e.children??[],...t.items.filter(o=>o.id===`reports`||o.id===`disabled`)]}))})));compact=M(!1);searchable=M(!0);icons=M(!1);sticky=M(!1);rtl=M(!1);custom=M(!1);actions=M(!1);width=M(1100);selected=M(void 0);action=M(void 0);text=g(()=>({compact:this.navigationDemoI18nService.translate(`top.compact`),width:this.navigationDemoI18nService.translate(`top.width`),icons:this.navigationDemoI18nService.translate(`top.icons`),sticky:this.navigationDemoI18nService.translate(`top.sticky`),custom:this.navigationDemoI18nService.translate(`top.custom`),actions:this.navigationDemoI18nService.translate(`top.actions`),search:this.navigationDemoI18nService.translate(`demo.search`),rtl:this.navigationDemoI18nService.translate(`demo.rtl`),language:this.navigationDemoI18nService.translate(`demo.language`),brand:this.navigationDemoI18nService.translate(`demo.studio`),title:this.navigationDemoI18nService.translate(`top.title`),description:this.navigationDemoI18nService.translate(`top.description`),compactMode:this.navigationDemoI18nService.translate(`top.modeCompact`),expandedMode:this.navigationDemoI18nService.translate(`top.modeExpanded`),settings:this.navigationDemoI18nService.translate(`top.settings`),help:this.navigationDemoI18nService.translate(`top.help`)}));selection=g(()=>{let a=this.selected(),t=this.action();return t?this.navigationDemoI18nService.translate(t):a?`${this.navigationDemoI18nService.translate(`nav.${a.id}`)} \xB7 ${a.id}`:this.navigationDemoI18nService.translate(`demo.select`)});config=g(()=>({position:this.sticky()?`sticky`:`inline`,compactBreakpoint:`sm`,compact:this.compact()?!0:void 0,searchable:this.searchable(),showItemIcons:this.icons(),showSectionIcons:this.icons(),ariaLabel:{key:`top.name`},searchLabel:{key:`nav.search`},searchPlaceholder:{key:`top.searchPlaceholder`},clearSearchLabel:{key:`nav.clear`},emptyText:{key:`nav.empty`},openLabel:{key:`nav.open`},closeLabel:{key:`nav.close`},submenuLabel:{key:`nav.submenu`},resultLabel:{key:`nav.result`},backLabel:{key:`nav.back`},pathLabel:{key:`nav.path`},breadcrumbConfig:{overflowLabel:{key:`nav.hiddenPath`}}}));select(a){this.action.set(void 0),this.selected.set(a)}static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-top-nav-examples`]],features:[Qt([ie,{provide:Se,useExisting:ie}])],decls:27,vars:32,consts:[[`nav`,``],[`customItem`,``],[1,`demo-language-row`],[`subscriptSizing`,`dynamic`,3,`selectionChange`,`label`,`clearable`,`options`,`value`],[1,`top-nav-demo-controls`],[3,`checkedChange`,`label`,`checked`],[`type`,`number`,3,`valueChange`,`label`,`min`,`max`,`value`],[1,`top-nav-demo-frame`],[3,`itemSelected`,`config`,`groups`,`itemTemplate`],[`bxTopNavBrand`,``],[`bxTopNavActions`,``],[1,`top-nav-demo-content`],[`aria-live`,`polite`],[`routerLink`,`/components/top-nav/overview`,1,`top-nav-demo-brand`],[`name`,`blocks`,`size`,`24`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`type`,`button`,3,`click`],[`name`,`settings`,`size`,`20`],[`name`,`circle-help`,`size`,`20`],[`size`,`20`,3,`name`],[`aria-hidden`,`true`]],template:function(t,e){if(t&1){let o=ut$1();_(0,`div`,2)(1,`bx-select`,3),J(`selectionChange`,function(s){return e.navigationDemoI18nService.setLanguage(s.value)}),D()(),_(2,`div`,4)(3,`bx-checkbox`,5),EE(`checkedChange`,function(s){return Le(o),qP(e.compact,s)||(e.compact=s),je(s)}),D(),_(4,`bx-checkbox`,5),EE(`checkedChange`,function(s){return Le(o),qP(e.searchable,s)||(e.searchable=s),je(s)}),D(),_(5,`bx-checkbox`,5),EE(`checkedChange`,function(s){return Le(o),qP(e.icons,s)||(e.icons=s),je(s)}),D(),_(6,`bx-checkbox`,5),EE(`checkedChange`,function(s){return Le(o),qP(e.sticky,s)||(e.sticky=s),je(s)}),D(),_(7,`bx-checkbox`,5),EE(`checkedChange`,function(s){return Le(o),qP(e.rtl,s)||(e.rtl=s),je(s)}),D(),_(8,`bx-checkbox`,5),EE(`checkedChange`,function(s){return Le(o),qP(e.custom,s)||(e.custom=s),je(s)}),D(),_(9,`bx-checkbox`,5),EE(`checkedChange`,function(s){return Le(o),qP(e.actions,s)||(e.actions=s),je(s)}),D(),_(10,`bx-input-field`,6),EE(`valueChange`,function(s){return Le(o),qP(e.width,s)||(e.width=s),je(s)}),D()(),_(11,`div`,7)(12,`bx-top-nav`,8,0),J(`itemSelected`,function(s){return e.select(s)}),Ti$1(14,no,3,2,`ng-template`,9)(15,ao,1,1,`ng-template`,10),D(),_(16,`div`,11)(17,`h3`),Q(18),D(),_(19,`p`),Q(20),D(),_(21,`p`),Q(22),D(),_(23,`output`,12),Q(24),D()()(),Ti$1(25,oo,5,2,`ng-template`,null,1,wr$1)}if(t&2){let o=Tt(13),c=Tt(26);y(),T(`label`,e.text().language)(`clearable`,!1)(`options`,e.navigationDemoI18nService.languages)(`value`,e.navigationDemoI18nService.language()),y(2),T(`label`,e.text().compact),SE(`checked`,e.compact),y(),T(`label`,e.text().search),SE(`checked`,e.searchable),y(),T(`label`,e.text().icons),SE(`checked`,e.icons),y(),T(`label`,e.text().sticky),SE(`checked`,e.sticky),y(),T(`label`,e.text().rtl),SE(`checked`,e.rtl),y(),T(`label`,e.text().custom),SE(`checked`,e.custom),y(),T(`label`,e.text().actions),SE(`checked`,e.actions),y(),T(`label`,e.text().width)(`min`,280)(`max`,1600),SE(`value`,e.width),y(),_e(`width`,e.width()+`px`),B(`dir`,e.rtl()?`rtl`:`ltr`),y(),T(`config`,e.config())(`groups`,e.groups())(`itemTemplate`,e.custom()?c:void 0),y(6),fe$1(e.text().title),y(2),fe$1(e.text().description),y(2),fe$1(o.isCompact()?e.text().compactMode:e.text().expandedMode),y(2),fe$1(e.selection())}},dependencies:[Yf,at$1,Vn,An,fe,$r,va$1,Vt,qt],styles:[`
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
}`]})};var fi=Array.from({length:3e3},(r,a)=>({id:a,title:`Item ${a+1}`,description:`Variable-height content wraps when the grid changes width. `.repeat(1+a%5)}));function ro(r,a){if(r&1&&(_(0,`p`),Q(1),D()),r&2){let t=w().$implicit;y(),yE(``,t.description,` `,t.description)}}function lo(r,a){if(r&1){let t=ut$1();_(0,`bx-card`,12)(1,`p`),Q(2),D(),L$1(3,ro,2,2,`p`),_(4,`button`,5),J(`click`,function(){let o=Le(t).$implicit,c=w();return je(c.toggle(o.id))}),Q(5),D()()}if(r&2){let t=a.$implicit,e=w();T(`title`,t.title)(`headingLevel`,3)(`surfaceEffects`,!1)(`opaque`,!0),y(2),fe$1(t.description),y(),j$1(e.expanded().has(t.id)?3:-1),y(),B(`aria-expanded`,e.expanded().has(t.id)),y(),pn(` `,e.expanded().has(t.id)?`Less content`:`More content`,` `)}}var st=class r{items=fi;itemKey=a=>a.id;layouts=[{label:`Responsive grid`,value:`grid`},{label:`Vertical list`,value:`list`}];layout=M(`grid`);width=M(100);index=M(1500);expanded=M(/* @__PURE__ */ new Set);config=g(()=>({layout:this.layout(),minColumnWidth:`12rem`,estimatedRowHeight:200,overscan:800}));toggle(a){this.expanded.update(t=>{let e=new Set(t);return e.has(a)?e.delete(a):e.add(a),e})}static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-virtual-collection-examples`]],decls:15,vars:20,consts:[[`viewport`,``],[`collection`,``],[1,`virtual-demo-controls`],[`label`,`Layout`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Scroll to index`,`type`,`number`,3,`ngModelChange`,`min`,`max`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`for`,`virtual-demo-width`],[`id`,`virtual-demo-width`,`bxSlider`,``,`type`,`range`,`min`,`40`,`max`,`100`,3,`ngModelChange`,`ngModel`],[`role`,`status`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Virtual collection example`,1,`virtual-demo-viewport`],[3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[3,`title`,`headingLevel`,`surfaceEffects`,`opaque`]],template:function(t,e){if(t&1){let o=ut$1();_(0,`div`,2)(1,`bx-select`,3),ZO(),J(`ngModelChange`,function(s){return e.layout.set(s)}),D(),_(2,`bx-input-field`,4),ZO(),J(`ngModelChange`,function(s){return e.index.set(s)}),D(),_(3,`button`,5),J(`click`,function(){Le(o);let s=Tt(13);return je(s.scrollToIndex(e.index()))}),Q(4,`Scroll to item`),D()(),_(5,`label`,6),Q(6),D(),_(7,`input`,7),ZO(),J(`ngModelChange`,function(s){return e.width.set(s)}),D(),_(8,`p`,8),Q(9),D(),_(10,`div`,9,0)(12,`bx-virtual-collection`,10,1),Ti$1(14,lo,6,8,`ng-template`,11),D()()}if(t&2){let o=Tt(11),c=Tt(13);y(),T(`clearable`,!1)(`options`,e.layouts)(`ngModel`,e.layout()),QO(),y(),T(`min`,0)(`max`,e.items.length-1)(`ngModel`,e.index()),QO(),y(4),pn(`Container width `,e.width(),`%`),y(),T(`ngModel`,e.width()),QO(),y(2),CE(` `,c.renderedItems().length,` mounted of `,e.items.length,` · `,c.renderedRange().columns,` columns · range `,c.renderedRange().start,`–`,c.renderedRange().end,`
`),y(),_e(`inline-size`,e.width(),`%`),y(2),T(`items`,e.items)(`trackBy`,e.itemKey)(`config`,e.config())(`scrollContainer`,o),y(2),T(`bxVirtualItem`,c)}},dependencies:[Jie,GM,gB,Kie,bB,fe,va$1,Vt,Ft,yT,AT,eu],styles:[`
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
}`]})};function so(r,a){if(r&1&&(_(0,`div`)(1,`strong`),Q(2),D()()),r&2){let t=w();y(2),fe$1(t.data.title)}}function co(r,a){if(r&1){let t=ut$1();_(0,`div`,4)(1,`button`,5),J(`click`,function(){Le(t);let o=w();return je(o.close())}),Q(2,`Cancel`),D(),_(3,`button`,6),J(`click`,function(){Le(t);let o=w();return je(o.confirm())}),Q(4,`Save changes`),D()()}}var ct=class r extends fn{name=new pI(`Blocks workspace`,{nonNullable:!0});confirm(){this.modal.close(`confirm`,this.name.value)}static ɵfac=(()=>{let a;return function(e){return(a||(a=Go$1(r)))(e||r)}})();static ɵcmp=$({type:r,selectors:[[`app-component-dialog`]],features:[Sn$1],decls:6,vars:2,consts:[[4,`appModalHeader`],[1,`dialog-body`],[`label`,`Project name`,3,`formControl`],[`class`,`dialog-actions`,4,`appModalFooter`],[1,`dialog-actions`],[`type`,`button`,`bx-button`,``,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(t,e){t&1&&(Ti$1(0,so,3,1,`div`,0),_(1,`div`,1)(2,`p`),Q(3),D(),_(4,`bx-input-field`,2),ZO(),D()(),Ti$1(5,co,5,0,`div`,3)),t&2&&(y(3),fe$1(e.data.description),y(),T(`formControl`,e.name),QO())},dependencies:[fe,va$1,ese,Kie,xB,yn,gn],styles:[`
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
}`]})};var mo=()=>({required:`Enter a project name.`});var po=()=>({email:`Enter a valid email address.`});var uo=()=>({name:`settings`});var go=r=>({text:`Project settings`,icon:r});function bo(r,a){r&1&&(_(0,`div`,10),ve(1,`app-side-nav-examples`),D())}function yo(r,a){r&1&&(_(0,`div`,10),ve(1,`app-top-nav-examples`),D())}function _o(r,a){r&1&&(_(0,`div`,10),ve(1,`app-stepper-examples`),D())}function ho(r,a){r&1&&ve(0,`app-bottom-drawer-examples`)}function vo(r,a){r&1&&ve(0,`app-calendar-examples`)}function xo(r,a){r&1&&ve(0,`app-date-picker-examples`)}function fo(r,a){r&1&&ve(0,`app-time-picker-examples`)}function So(r,a){r&1&&ve(0,`app-virtual-collection-examples`)}function Co(r,a){r&1&&ve(0,`app-resize-handle-examples`)}function wo(r,a){r&1&&ve(0,`app-side-panel-examples`)}function ko(r,a){r&1&&ve(0,`app-infinite-scroll-examples`)}function Eo(r,a){r&1&&ve(0,`app-essentials-examples`,21)}function To(r,a){r&1&&ve(0,`app-essentials-examples`,22)}function Mo(r,a){r&1&&ve(0,`app-essentials-examples`,23)}function Do(r,a){r&1&&ve(0,`app-essentials-examples`,24)}function Po(r,a){r&1&&ve(0,`app-essentials-examples`,25)}function No(r,a){r&1&&ve(0,`app-essentials-examples`,26)}function Io(r,a){r&1&&ve(0,`app-essentials-examples`,27)}function Vo(r,a){r&1&&ve(0,`app-essentials-examples`,28)}function Wo(r,a){r&1&&ve(0,`app-essentials-examples`,29)}function Oo(r,a){r&1&&ve(0,`app-page-examples`)}function zo(r,a){r&1&&ve(0,`app-essentials-examples`,30)}function Lo(r,a){r&1&&ve(0,`app-essentials-examples`,31)}function Ro(r,a){r&1&&ve(0,`app-essentials-examples`,32)}function Bo(r,a){r&1&&ve(0,`app-tag-examples`)}function Ao(r,a){r&1&&ve(0,`app-truncation-examples`)}function Fo(r,a){r&1&&ve(0,`app-form-examples`,33)}function qo(r,a){r&1&&ve(0,`app-form-examples`,34)}function jo(r,a){r&1&&ve(0,`app-form-examples`,35)}function Ho(r,a){r&1&&ve(0,`app-form-examples`,36)}function Uo(r,a){r&1&&ve(0,`app-form-examples`,37)}function Go(r,a){r&1&&ve(0,`app-form-examples`,38)}function Ko(r,a){r&1&&ve(0,`app-form-examples`,39)}function Qo(r,a){r&1&&ve(0,`app-form-examples`,40)}function Xo(r,a){r&1&&ve(0,`app-form-examples`,41)}function Zo(r,a){r&1&&ve(0,`app-form-examples`,42)}function Yo(r,a){r&1&&ve(0,`app-form-examples`,43)}function Jo(r,a){r&1&&ve(0,`app-form-examples`,44)}function $o(r,a){r&1&&ve(0,`app-form-examples`,45)}function er(r,a){if(r&1){let t=ut$1();_(0,`button`,66),J(`click`,function(){let o=Le(t).$implicit,c=w(3);return je(c.activate(o+` action`))}),Q(1),D(),_(2,`button`,67),J(`click`,function(){let o=Le(t).$implicit,c=w(3);return je(c.activate(o+` action`))}),Q(3),D()}if(r&2){let t=a.$implicit;T(`color`,t),y(),pn(` `,t,` filled `),y(),T(`color`,t),y(),pn(` `,t,` tonal `)}}function tr(r,a){if(r&1){let t=ut$1();_(0,`div`,46)(1,`div`,51)(2,`button`,52),J(`click`,function(){Le(t);let o=w(2);return je(o.activate(`Primary action`))}),Q(3,`Primary action`),D(),_(4,`button`,53),J(`click`,function(){Le(t);let o=w(2);return je(o.activate(`Tonal action`))}),Q(5,`Tonal`),D(),_(6,`button`,54),J(`click`,function(){Le(t);let o=w(2);return je(o.activate(`Text action`))}),Q(7,`Text`),D(),_(8,`button`,55),Q(9,`Disabled`),D()(),_(10,`div`,51)(11,`button`,56),J(`click`,function(){Le(t);let o=w(2);return je(o.activate(`Success`))}),Q(12,`Success`),D(),_(13,`button`,57),J(`click`,function(){Le(t);let o=w(2);return je(o.activate(`Warning`))}),Q(14,`Warning`),D(),_(15,`button`,58),J(`click`,function(){Le(t);let o=w(2);return je(o.activate(`Delete`))}),Q(16,`Delete`),D(),_(17,`button`,59),J(`click`,function(){Le(t);let o=w(2);return je(o.activate(`Add item`))}),ve(18,`bx-icon`,60),D()(),_(19,`div`,51)(20,`button`,61),J(`click`,function(){Le(t);let o=w(2);return je(o.activate(`Close example`))}),ve(21,`bx-icon`,62),D(),_(22,`button`,63),J(`click`,function(){Le(t);let o=w(2);return je(o.activate(`Outlined action`))}),Q(23,`Outlined`),D(),_(24,`button`,64),J(`click`,function(){Le(t);let o=w(2);return je(o.activate(`Action without runtime effects`))}),Q(25,` Without runtime effects `),D()(),_(26,`div`,65),Lt(27,er,4,4,null,null,Va$1),D()()}if(r&2){let t=w(2);y(8),T(`disabled`,!0),y(14),T(`outlined`,!0),y(2),T(`surfaceEffects`,!1),y(3),jt(t.statusColors)}}function nr(r,a){if(r&1&&(_(0,`div`,46)(1,`bx-checkbox`,68),ZO(),D(),_(2,`bx-checkbox`,69),ZO(),D(),_(3,`div`,51),ve(4,`bx-checkbox-indicator`,70),_(5,`span`),Q(6),D()(),_(7,`div`,51),ve(8,`bx-checkbox-indicator`),_(9,`span`),Q(10,`Unchecked`),D(),ve(11,`bx-checkbox-indicator`,71),_(12,`span`),Q(13,`Checked`),D(),ve(14,`bx-checkbox-indicator`,72),_(15,`span`),Q(16,`Partial`),D()()()),r&2){let t=w(2);y(),T(`formControl`,t.checked),QO(),y(),T(`formControl`,t.secondChecked),QO(),y(2),T(`checked`,t.checked.value)(`indeterminate`,t.secondChecked.value),y(2),pn(`Selection: `,t.secondChecked.value?`partial`:t.checked.value?`checked`:`unchecked`),y(5),T(`checked`,!0),y(3),T(`indeterminate`,!0)}}function ir(r,a){if(r&1&&(_(0,`div`,46)(1,`bx-checkbox`,73),ZO(),D(),_(2,`bx-checkbox`,74),ZO(),D(),ve(3,`bx-checkbox`,75)(4,`bx-checkbox`,76)(5,`bx-checkbox`,77),_(6,`bx-checkbox`,78),ZO(),D(),_(7,`output`),Q(8),D()()),r&2){let t=w(2);y(),T(`formControl`,t.checked),QO(),y(),T(`formControl`,t.secondChecked),QO(),y(),T(`indeterminate`,!0),y(),T(`checked`,!0)(`emissive`,!1),y(),T(`checked`,!0)(`readOnly`,!0),y(),T(`formControl`,t.disabledCheck),QO(),y(2),yE(`Updates: `,t.checked.value?`on`:`off`,` · Previews: `,t.secondChecked.value?`on`:`off`)}}function ar(r,a){if(r&1){let t=ut$1();_(0,`div`,47)(1,`bx-form-field`,79)(2,`span`,80)(3,`input`,81),J(`input`,function(o){Le(t);let c=w(2);return je(c.updateField(o))})(`blur`,function(){Le(t);let o=w(2);return je(o.showError.set(!0))}),D()()(),_(4,`button`,82),J(`click`,function(){Le(t);let o=w(2);return je(o.showError.set(!0))}),Q(5,`Validate name`),D(),_(6,`output`),Q(7),D()()}if(r&2){let t=w(2);y(),T(`required`,!0)(`error`,t.fieldError()),y(2),T(`value`,t.fieldValue()),B(`aria-invalid`,!!t.fieldError()),y(4),pn(`Value: `,t.fieldValue()||`empty`)}}function or(r,a){if(r&1&&(_(0,`div`,47)(1,`bx-input-field`,83),ZO(),D(),_(2,`bx-input-field`,84),ZO(),D(),_(3,`bx-input-field`,85),ZO(),D(),_(4,`output`),Q(5),D()()),r&2){let t=w(2);y(),T(`errorMessages`,KP(9,mo))(`formControl`,t.name),QO(),y(),T(`errorMessages`,KP(10,po))(`formControl`,t.email),QO(),y(),T(`min`,1)(`max`,20)(`formControl`,t.quantity),QO(),y(2),yE(``,t.name.value,` · `,t.quantity.value,` members`)}}function rr(r,a){if(r&1){let t=ut$1();_(0,`fieldset`,46)(1,`legend`),Q(2,`Notification frequency`),D(),_(3,`button`,86),J(`click`,function(){Le(t);let o=w(2);return je(o.radioReadonly.set(!o.radioReadonly()))}),Q(4,` Toggle readonly radios `),D(),_(5,`bx-radio`,87),ZO(),D(),_(6,`bx-radio`,88),ZO(),D(),_(7,`bx-radio`,89),ZO(),D(),_(8,`output`),Q(9),D(),_(10,`button`,54),J(`click`,function(){Le(t);let o=w(2);return je(o.frequency.reset())}),Q(11,`Reset frequency`),D()()}if(r&2){let t=w(2);y(3),B(`aria-pressed`,t.radioReadonly()),y(2),T(`readOnly`,t.radioReadonly())(`formControl`,t.frequency),QO(),y(),T(`readOnly`,t.radioReadonly())(`formControl`,t.frequency),QO(),y(),T(`readOnly`,t.radioReadonly())(`formControl`,t.frequency),QO(),y(2),pn(`Selected: `,t.frequency.value)}}function lr(r,a){r&1&&ve(0,`app-search-examples`)}function sr(r,a){r&1&&ve(0,`app-form-examples`,48)}function cr(r,a){if(r&1){let t=ut$1();_(0,`div`,47)(1,`p`),Q(2,`Drag quickly to compare immediate native precision with the thumb's bounded stretch and release settling.`),D(),_(3,`label`,90),Q(4,`Volume`),D(),_(5,`input`,91),ZO(),D(),_(6,`output`),Q(7),D(),_(8,`button`,54),J(`click`,function(){Le(t);let o=w(2);return je(o.volume.setValue(50))}),Q(9,`Reset volume`),D(),_(10,`label`,92),Q(11,`Unavailable range`),D(),ve(12,`input`,93),_(13,`div`,51)(14,`button`,86),J(`click`,function(){Le(t);let o=w(2);return je(o.volume.setValue(20))}),Q(15,`20%`),D(),_(16,`button`,86),J(`click`,function(){Le(t);let o=w(2);return je(o.volume.setValue(80))}),Q(17,`80%`),D()()()}if(r&2){let t=w(2);y(5),T(`formControl`,t.volume),QO(),y(2),pn(``,t.volume.value,`%`)}}function dr(r,a){if(r&1){let t=ut$1();_(0,`div`,46)(1,`p`),Q(2,` Toggle repeatedly or use the programmatic action while the thumb is moving. Appearance settings control reduced motion independently of opacity. `),D(),_(3,`bx-slide-toggle`,94),ZO(),D(),_(4,`bx-slide-toggle`,78),ZO(),D(),_(5,`output`),Q(6),D(),_(7,`button`,86),J(`click`,function(){Le(t);let o=w(2);return je(o.enabled.setValue(!o.enabled.value))}),Q(8,`Toggle programmatically`),D()()}if(r&2){let t=w(2);y(3),T(`formControl`,t.enabled),QO(),y(),T(`formControl`,t.disabledCheck),QO(),y(2),pn(`Notifications are `,t.enabled.value?`enabled`:`disabled`,`.`)}}function mr(r,a){if(r&1&&(_(0,`bx-error`,97),Q(1),D()),r&2){let t=w(3);y(),fe$1(t.fieldError())}}function pr(r,a){if(r&1){let t=ut$1();_(0,`div`,47)(1,`bx-form-field`,95)(2,`span`,80)(3,`input`,96),J(`input`,function(o){Le(t);let c=w(2);return je(c.updateField(o))})(`blur`,function(){Le(t);let o=w(2);return je(o.showError.set(!0))}),D()(),L$1(4,mr,2,1,`bx-error`,97),D(),_(5,`button`,82),J(`click`,function(){Le(t);let o=w(2);return je(o.showError.set(!0))}),Q(6,`Validate reference`),D()()}if(r&2){let t=w(2);y(3),T(`value`,t.fieldValue()),B(`aria-invalid`,!!t.fieldError())(`aria-describedby`,t.fieldError()?`custom-error`:null),y(),j$1(t.fieldError()?4:-1)}}function ur(r,a){if(r&1&&(_(0,`p`),Q(1,`Keep related information together while showing one panel at a time.`),D(),_(2,`bx-input-field`,105),ZO(),D()),r&2){let t=w(3);y(2),T(`formControl`,t.tabNote),QO()}}function gr(r,a){r&1&&(_(0,`p`),Q(1,`Headers support arrow keys, Home and End. Panel content is created only when selected.`),D())}function br(r,a){r&1&&(_(0,`bx-tab`,102)(1,`p`),Q(2,`No recent project activity.`),D()())}function yr(r,a){if(r&1&&(_(0,`bx-tab`,106)(1,`p`),Q(2),D()()),r&2){let t=a.$implicit;T(`label`,`Additional panel `+t)(`value`,`extra-`+t),y(2),pn(`Panel `,t,` keeps navigation reachable through the scrolling header.`)}}function _r(r,a){if(r&1&&Lt(0,yr,3,3,`bx-tab`,106,Va$1),r&2){let t=w(3);jt(t.extraTabs)}}function hr(r,a){if(r&1){let t=ut$1();_(0,`div`,46)(1,`p`),Q(2,` Swipe to scroll on touch, or hold a tab briefly before dragging to select. Compare a short flick with a slow drag and pause before release. Enable Overflow tabs and hold near an edge to keep scrolling. Use Appearance to compare reduced motion and opaque surfaces. With Reduce transparency enabled, the active tab keeps its filled selection shape in both appearances. `),D(),_(3,`bx-tabs`,98,0),EE(`selectedValueChange`,function(o){Le(t);let c=w(2);return qP(c.selectedTab,o)||(c.selectedTab=o),je(o)}),_(5,`bx-tab`,99),Ti$1(6,ur,3,1,`ng-template`,100),D(),_(7,`bx-tab`,101),Ti$1(8,gr,2,0,`ng-template`,100),D(),L$1(9,br,3,0,`bx-tab`,102),ve(10,`bx-tab`,103),L$1(11,_r,2,0),D(),_(12,`div`,51)(13,`button`,82),J(`click`,function(){Le(t);let o=w(2);return je(o.tabsVariant.set(o.tabsVariant()===`segmented`?`underline`:`segmented`))}),Q(14,` Underline appearance `),D(),_(15,`button`,82),J(`click`,function(){Le(t);let o=w(2);return je(o.detailsDisabled.set(!o.detailsDisabled()))}),Q(16,` Disable details `),D(),_(17,`button`,82),J(`click`,function(){Le(t);let o=w(2);return je(o.showActivity.set(!o.showActivity()))}),Q(18,` Show activity `),D()(),_(19,`output`),Q(20),D(),_(21,`div`,51)(22,`button`,86),J(`click`,function(){Le(t);let o=Tt(4);return je(o.select(`overview`))}),Q(23,`Select overview`),D(),_(24,`button`,104),J(`click`,function(){Le(t);let o=Tt(4);return je(o.select(`activity`))}),Q(25,`Select activity`),D(),_(26,`button`,86),J(`click`,function(){Le(t);let o=w(2);return je(o.overflowTabs.set(!o.overflowTabs()))}),Q(27,` Overflow tabs `),D()()()}if(r&2){let t=w(2);y(3),T(`variant`,t.tabsVariant()),SE(`selectedValue`,t.selectedTab),y(4),T(`disabled`,t.detailsDisabled()),y(2),j$1(t.showActivity()?9:-1),y(),T(`disabled`,!0),y(),j$1(t.overflowTabs()?11:-1),y(2),B(`aria-pressed`,t.tabsVariant()===`underline`),y(2),B(`aria-pressed`,t.detailsDisabled()),y(2),B(`aria-pressed`,t.showActivity()),y(3),pn(`Selected: `,t.selectedTab()),y(4),T(`disabled`,!t.showActivity()),y(2),B(`aria-pressed`,t.overflowTabs())}}function vr(r,a){r&1&&ve(0,`app-menu-shortcut-examples`)}function xr(r,a){r&1&&ve(0,`app-menu-shortcut-examples`)}function fr(r,a){r&1&&(_(0,`div`,46),ve(1,`bx-tooltip`,107),_(2,`p`),Q(3,`Standalone tooltip content. Use the trigger directive for positioned help.`),D(),_(4,`a`,108),Q(5,`Try the tooltip trigger`),D()())}function Sr(r,a){if(r&1){let t=ut$1();_(0,`div`,46)(1,`div`,51)(2,`button`,109),J(`click`,function(){Le(t);let o=w(2);return je(o.activate(`Saved`))}),Q(3,` Save project`),D(),_(4,`button`,110),J(`click`,function(){Le(t);let o=w(2);return je(o.activate(`Normal tap activated`))}),Q(5,` Hold for a hint`),D(),_(6,`button`,111),ve(7,`bx-icon`,112),D()(),_(8,`p`),Q(9,` Hover with a mouse or use keyboard focus for hints. On touch screens, Save project activates immediately, Hold for a hint supports a long press, and the information button opens help on tap. `),D()()}}function Cr(r,a){if(r&1){let t=ut$1();_(0,`bx-menu`)(1,`bx-menu-item`,115),J(`action`,function(){Le(t),w();let o=Tt(2);return w(2).activate(`Project duplicated`),je(o.close())}),D(),_(2,`bx-menu-item`,116),J(`action`,function(){Le(t),w();let o=Tt(2);return w(2).activate(`Project archived`),je(o.close())}),D(),_(3,`bx-menu-item`,117),J(`action`,function(){Le(t),w();let o=Tt(2);return w(2).activate(`Delete requested`),je(o.close())}),D()()}r&2&&(y(3),T(`danger`,!0))}function wr(r,a){if(r&1&&(_(0,`div`,46)(1,`button`,113,1),Q(3,` Project actions `),ve(4,`bx-icon`,114),D(),Ti$1(5,Cr,4,1,`ng-template`,null,2,wr$1),_(7,`output`),Q(8),D(),_(9,`p`),Q(10,`Open, close, or reopen while the menu fades. Its contents keep their full size throughout.`),D()()),r&2){let t=Tt(2),e=Tt(6);y(),T(`bxDropdown`,e),y(7),pn(`Transition: `,t.state())}}function kr(r,a){if(r&1){let t=ut$1();_(0,`bx-menu`)(1,`bx-menu-item`,119),J(`action`,function(){Le(t);let o=w(3);return je(o.activate(`Selection copied`))}),D(),_(2,`bx-menu-item`,120),J(`action`,function(){Le(t);let o=w(3);return je(o.activate(`Selection archived`))}),D()()}}function Er(r,a){if(r&1){let t=ut$1();_(0,`div`,46)(1,`div`,118),Q(2,` Right-click, touch and hold, or focus here and press Shift + F10. `),D(),_(3,`button`,82),J(`click`,function(o){Le(t);let c=w(2);return je(c.openContextMenu(o))}),Q(4,`Open actions`),D(),Ti$1(5,kr,3,0,`ng-template`,null,3,wr$1),_(7,`p`),Q(8,`Menu rows keep their hover and focus feedback inside the opaque panel.`),D()()}if(r&2){let t=Tt(6);y(),T(`bxContextMenu`,t)}}function Tr(r,a){r&1&&ve(0,`app-breadcrumb-examples`)}function Mr(r,a){r&1&&(_(0,`div`,46)(1,`div`,121),ve(2,`bx-icon`,122)(3,`bx-icon`,123)(4,`bx-icon`,124)(5,`bx-icon`,125)(6,`bx-icon`,126),D(),_(7,`a`,127),Q(8,`Browse the searchable icon catalog`),D()()),r&2&&(y(2),T(`decorative`,!1))}function Dr(r,a){if(r&1){let t=ut$1();_(0,`bx-modal-banner`,130),J(`close`,function(){Le(t);let o=w(3);return o.bannerVisible.set(!1),je(o.activate(`Banner dismissed`))}),D()}r&2&&T(`header`,Cs(3,go,KP(2,uo)))(`showCloseButton`,!0)}function Pr(r,a){if(r&1){let t=ut$1();_(0,`button`,82),J(`click`,function(){Le(t);let o=w(3);return je(o.bannerVisible.set(!0))}),Q(1,`Restore banner`),D()}}function Nr(r,a){if(r&1){let t=ut$1();_(0,`div`,49),L$1(1,Dr,1,5,`bx-modal-banner`,128)(2,Pr,2,0,`button`,129),_(3,`button`,52),J(`click`,function(){Le(t);let o=w(2);return je(o.openModal())}),Q(4,`See banner in a dialog`),D()()}if(r&2){let t=w(2);y(),j$1(t.bannerVisible()?1:2)}}function Ir(r,a){if(r&1){let t=ut$1();_(0,`div`,46)(1,`div`,51)(2,`button`,56),J(`click`,function(){Le(t);let o=w(2);return je(o.notify(`success`))}),Q(3,`Success`),D(),_(4,`button`,131),J(`click`,function(){Le(t);let o=w(2);return je(o.notify(`info`))}),Q(5,`Information`),D(),_(6,`button`,57),J(`click`,function(){Le(t);let o=w(2);return je(o.notify(`warn`))}),Q(7,`Warning`),D(),_(8,`button`,58),J(`click`,function(){Le(t);let o=w(2);return je(o.notify(`danger`))}),Q(9,`Error`),D()(),_(10,`p`),Q(11,`The toast host manages the progress indicator, dismiss action, pause and cleanup.`),D(),_(12,`a`,132),Q(13,`Open the full toast configurator`),D()()}}function Vr(r,a){if(r&1){let t=ut$1();_(0,`div`,46)(1,`div`,51)(2,`button`,56),J(`click`,function(){Le(t);let o=w(2);return je(o.notify(`success`))}),Q(3,`Show success`),D(),_(4,`button`,131),J(`click`,function(){Le(t);let o=w(2);return je(o.notify(`info`))}),Q(5,`Show information`),D(),_(6,`button`,57),J(`click`,function(){Le(t);let o=w(2);return je(o.notify(`warn`))}),Q(7,`Show warning`),D(),_(8,`button`,58),J(`click`,function(){Le(t);let o=w(2);return je(o.notify(`danger`))}),Q(9,`Show error`),D()(),_(10,`p`),Q(11,`Semantic colors remain tied to the active Blocks palette.`),D()()}}function Wr(r,a){if(r&1){let t=ut$1();_(0,`section`,50),ve(1,`bx-icon`,133),_(2,`h3`),Q(3,`A custom Blocks surface`),D(),_(4,`p`),Q(5,`Material, blur, tint, lighting and motion follow the same global configuration as the controls around it.`),D(),_(6,`bx-checkbox`,134),EE(`checkedChange`,function(o){Le(t);let c=w(2);return qP(c.surfaceEmission,o)||(c.surfaceEmission=o),je(o)}),D(),_(7,`button`,135),J(`click`,function(){Le(t);let o=w(2);return je(o.activate(`Custom surface action`))}),Q(8,` Try an action `),D(),_(9,`p`),Q(10,`Hover, keyboard focus and press retain local feedback. Enable emission to add the themed light source.`),D()()}if(r&2){let t=w(2);y(6),SE(`checked`,t.surfaceEmission),y(),T(`surfaceEffects`,!1)(`bxSurfaceEmission`,t.surfaceEmission()?void 0:!1)}}function Or(r,a){if(r&1){let t=ut$1();_(0,`button`,82),J(`click`,function(){Le(t);let o=w(3);return je(o.openModal(`left`))}),Q(1,`Open on the left`),D()}}function zr(r,a){if(r&1){let t=ut$1();_(0,`div`,46)(1,`div`,51)(2,`button`,52),J(`click`,function(){Le(t);let o=w(2);return je(o.openModal())}),Q(3),D(),L$1(4,Or,2,0,`button`,129),D(),_(5,`p`),Q(6,`Try editing, saving, pressing Escape, and dismissing through the backdrop. This is the actual service-created component.`),D(),_(7,`a`,136),Q(8,`Open the full modal configurator`),D()()}if(r&2){let t=w(2);y(3),pn(`Open `,t.entry().title.toLowerCase()),y(),j$1(t.entry().id===`modal-side`?4:-1)}}function Lr(r,a){if(r&1&&(_(0,`div`,11),L$1(1,ho,1,0,`app-bottom-drawer-examples`)(2,vo,1,0,`app-calendar-examples`)(3,xo,1,0,`app-date-picker-examples`)(4,fo,1,0,`app-time-picker-examples`)(5,So,1,0,`app-virtual-collection-examples`)(6,Co,1,0,`app-resize-handle-examples`)(7,wo,1,0,`app-side-panel-examples`)(8,ko,1,0,`app-infinite-scroll-examples`)(9,Eo,1,0,`app-essentials-examples`,21)(10,To,1,0,`app-essentials-examples`,22)(11,Mo,1,0,`app-essentials-examples`,23)(12,Do,1,0,`app-essentials-examples`,24)(13,Po,1,0,`app-essentials-examples`,25)(14,No,1,0,`app-essentials-examples`,26)(15,Io,1,0,`app-essentials-examples`,27)(16,Vo,1,0,`app-essentials-examples`,28)(17,Wo,1,0,`app-essentials-examples`,29)(18,Oo,1,0,`app-page-examples`)(19,zo,1,0,`app-essentials-examples`,30)(20,Lo,1,0,`app-essentials-examples`,31)(21,Ro,1,0,`app-essentials-examples`,32)(22,Bo,1,0,`app-tag-examples`)(23,Ao,1,0,`app-truncation-examples`)(24,Fo,1,0,`app-form-examples`,33)(25,qo,1,0,`app-form-examples`,34)(26,jo,1,0,`app-form-examples`,35)(27,Ho,1,0,`app-form-examples`,36)(28,Uo,1,0,`app-form-examples`,37)(29,Go,1,0,`app-form-examples`,38)(30,Ko,1,0,`app-form-examples`,39)(31,Qo,1,0,`app-form-examples`,40)(32,Xo,1,0,`app-form-examples`,41)(33,Zo,1,0,`app-form-examples`,42)(34,Yo,1,0,`app-form-examples`,43)(35,Jo,1,0,`app-form-examples`,44)(36,$o,1,0,`app-form-examples`,45)(37,tr,29,3,`div`,46)(38,nr,17,7,`div`,46)(39,ir,9,10,`div`,46)(40,ar,8,5,`div`,47)(41,or,6,11,`div`,47)(42,rr,12,8,`fieldset`,46)(43,lr,1,0,`app-search-examples`)(44,sr,1,0,`app-form-examples`,48)(45,cr,18,2,`div`,47)(46,dr,9,3,`div`,46)(47,pr,7,4,`div`,47)(48,hr,28,12,`div`,46)(49,vr,1,0,`app-menu-shortcut-examples`)(50,xr,1,0,`app-menu-shortcut-examples`)(51,fr,6,0,`div`,46)(52,Sr,10,0,`div`,46)(53,wr,11,2,`div`,46)(54,Er,9,1,`div`,46)(55,Tr,1,0,`app-breadcrumb-examples`)(56,Mr,9,1,`div`,46)(57,Nr,5,1,`div`,49)(58,Ir,14,0,`div`,46)(59,Vr,12,0,`div`,46)(60,Wr,11,3,`section`,50)(61,zr,9,2,`div`,46),D()),r&2){let t,e=w();y(),j$1((t=e.entry().id)===`bottom-drawer`?1:t===`calendar`?2:t===`date-picker`?3:t===`time-picker`?4:t===`virtual-collection`?5:t===`resize-handle`?6:t===`side-panel`?7:t===`infinite-scroll`?8:t===`divider`?9:t===`popover`?10:t===`skeleton`?11:t===`autocomplete`?12:t===`chip`?13:t===`accordion`?14:t===`collapsible`?15:t===`alert`?16:t===`card`?17:t===`page-container`?18:t===`container`?19:t===`stack`?20:t===`grid`?21:t===`tag`?22:t===`truncate`?23:t===`signal-forms`?24:t===`radio-group`?25:t===`multi-select`?26:t===`load-more`?27:t===`loading-spinner`?28:t===`loading-indicator`?29:t===`progress-bar`?30:t===`button-loading`?31:t===`range-slider`?32:t===`hint`?33:t===`prefix`?34:t===`suffix`?35:t===`native-control`?36:t===`button`?37:t===`checkbox-indicator`?38:t===`checkbox`?39:t===`form-field`?40:t===`input-field`?41:t===`radio`?42:t===`search-input`?43:t===`select`?44:t===`slider`?45:t===`slide-toggle`?46:t===`error`?47:t===`tabs`?48:t===`menu`?49:t===`menu-item`?50:t===`tooltip`?51:t===`tooltip-directive`?52:t===`dropdown`?53:t===`context-menu`?54:t===`breadcrumbs`?55:t===`icon`?56:t===`modal-banner`?57:t===`toast-core`?58:t===`simple-toast`?59:t===`surface`?60:61)}}var Si=class r{activatedRoute=f(ho$1);modalService=f(Me$1);toastrService=f(Fe);routeData=lJ(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});contextMenu=Nt(vb);entry=g(()=>e.find(a=>a.id===this.routeData().componentId)??e[0]);count=M(0);status=M(`Ready to try.`);fieldValue=M(``);showError=M(!1);surfaceEmission=M(!1);fieldError=g(()=>this.showError()&&this.fieldValue().trim().length<3?`Enter at least three characters.`:void 0);name=new pI(`Blocks workspace`,{nonNullable:!0,validators:bl.required});email=new pI(``,{nonNullable:!0,validators:bl.email});volume=new pI(50,{nonNullable:!0});quantity=new pI(3,{nonNullable:!0});checked=new pI(!0,{nonNullable:!0});secondChecked=new pI(!1,{nonNullable:!0});disabledCheck=new pI({value:!1,disabled:!0},{nonNullable:!0});statusColors=[`info`,`success`,`warn`,`danger`];radioReadonly=M(!1);frequency=new pI(`weekly`,{nonNullable:!0});destination=new pI(`skopje`,{nonNullable:!0});enabled=new pI(!0,{nonNullable:!0});bannerVisible=M(!0);selectedTab=M(`overview`);tabsVariant=M(`segmented`);detailsDisabled=M(!1);showActivity=M(!0);overflowTabs=M(!1);extraTabs=[1,2,3,4,5,6,7,8];tabNote=new pI(``,{nonNullable:!0});options=[{label:`Skopje`,value:`skopje`},{label:`Ohrid`,value:`ohrid`},{label:`Bitola`,value:`bitola`},{label:`Unavailable destination`,value:`unavailable`,disabled:!0}];activate(a){this.count.update(t=>t+1),this.status.set(`${a} \xB7 action ${this.count()}`)}updateField(a){this.fieldValue.set(a.target.value)}openContextMenu(a){a.preventDefault();let t=a.currentTarget.getBoundingClientRect();this.contextMenu()?.open(new MouseEvent(`contextmenu`,{clientX:t.left+16,clientY:t.bottom+4}))}openModal(a){let t=a??(this.entry().id===`modal-side`?`right`:this.entry().id===`modal-bottom-sheet`?`bottom-sheet`:`center`);this.modalService.open(ct,{data:{title:this.entry().title,description:`Edit the project name. The header, content, footer, backdrop and close behavior use the existing Blocks modal composition.`},header:{text:this.entry().title},style:{layout:t,hasBackdrop:!0,animate:!0,showCloseButton:!0}}).afterClosed().subscribe(o=>this.status.set(o.state===`confirm`?`Saved: ${o.data}`:`Dialog dismissed.`))}notify(a){let t={title:a===`success`?`Settings saved`:a===`warn`?`Review needed`:a===`danger`?`Action failed`:`Workspace update`,message:`This notification follows the application theme and appearance settings.`,durationInMs:4500};switch(a){case`success`:this.toastrService.queueSuccess(t);break;case`info`:this.toastrService.queueInfo(t);break;case`warn`:this.toastrService.queueWarning(t);break;case`danger`:this.toastrService.queueDanger(t)}this.status.set(`${a} notification queued.`)}static ɵfac=function(t){return new(t||r)};static ɵcmp=$({type:r,selectors:[[`app-component-demo`]],viewQuery:function(t,e){t&1&&Xt(e.contextMenu,vb,5),t&2&&lt$1()},decls:28,vars:7,consts:[[`pilotTabs`,``],[`dropdown`,`bxDropdown`],[`dropdownActions`,``],[`contextActions`,``],[3,`pageDescription`],[1,`component-meta`],[`routerLink`,`/appearance`],[`aria-labelledby`,`preview-heading`,1,`demo-section`],[1,`section-heading`],[`id`,`preview-heading`],[1,`demo-stage`],[`bxSurface`,``,1,`demo-stage`],[`role`,`status`,`aria-live`,`polite`,1,`action-status`],[`aria-labelledby`,`usage-heading`,1,`usage-section`],[`id`,`usage-heading`],[`tabindex`,`0`,`aria-label`,`TypeScript import example`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`tabindex`,`0`,`aria-label`,`HTML usage example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`aria-label`,`Component documentation`,1,`documentation-section`],[3,`path`],[`example`,`divider`],[`example`,`popover`],[`example`,`skeleton`],[`example`,`autocomplete`],[`example`,`chip`],[`example`,`accordion`],[`example`,`collapsible`],[`example`,`alert`],[`example`,`card`],[`example`,`container`],[`example`,`stack`],[`example`,`grid`],[`example`,`signal-forms`],[`example`,`radio-group`],[`example`,`multi-select`],[`example`,`load-more`],[`example`,`loading-spinner`],[`example`,`loading-indicator`],[`example`,`progress-bar`],[`example`,`button-loading`],[`example`,`range-slider`],[`example`,`hint`],[`example`,`prefix`],[`example`,`suffix`],[`example`,`native-control`],[1,`demo-stack`],[1,`demo-stack`,`control-width`],[`example`,`select`],[1,`demo-stack`,`banner-preview`],[`bxSurface`,``,1,`custom-surface`],[1,`demo-row`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`accent`,3,`click`],[`type`,`button`,`bx-button`,``,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`disabled`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`fab`,`aria-label`,`Add item`,3,`click`],[`name`,`plus`],[`type`,`button`,`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Close example`,3,`click`],[`name`,`x`,`size`,`20`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`outlined`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`surfaceEffects`],[`role`,`group`,`aria-label`,`Status action contrast`,1,`demo-row`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`,`color`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`color`],[`label`,`Checked state`,3,`formControl`],[`label`,`Partial state`,3,`formControl`],[3,`checked`,`indeterminate`],[3,`checked`],[3,`indeterminate`],[`label`,`Receive product updates`,3,`formControl`],[`label`,`Include preview features`,3,`formControl`],[`label`,`Partial selection`,3,`indeterminate`],[`label`,`Without emission`,3,`checked`,`emissive`],[`label`,`Read-only selection`,3,`checked`,`readOnly`],[`label`,`Unavailable setting`,3,`formControl`],[`label`,`Project name`,`forId`,`field-preview`,3,`required`,`error`],[`bxSurface`,``,1,`native-control-surface`],[`id`,`field-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`label`,`Project name`,3,`errorMessages`,`formControl`],[`label`,`Email address`,`type`,`email`,3,`errorMessages`,`formControl`],[`label`,`Team members`,`type`,`number`,3,`min`,`max`,`formControl`],[`bx-button`,``,`type`,`button`,3,`click`],[`label`,`Daily summary`,`name`,`frequency-demo`,`value`,`daily`,3,`readOnly`,`formControl`],[`label`,`Weekly summary`,`name`,`frequency-demo`,`value`,`weekly`,3,`readOnly`,`formControl`],[`label`,`Only important updates`,`name`,`frequency-demo`,`value`,`important`,3,`readOnly`,`formControl`],[`for`,`volume-demo`],[`bxSlider`,``,`id`,`volume-demo`,`type`,`range`,`min`,`0`,`max`,`100`,3,`formControl`],[`for`,`disabled-volume`],[`bxSlider`,``,`id`,`disabled-volume`,`type`,`range`,`value`,`30`,`disabled`,``],[`label`,`Enable notifications`,`hint`,`Receive updates for important activity.`,3,`formControl`],[`label`,`Reference`,`forId`,`error-preview`],[`id`,`error-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`id`,`custom-error`],[`ariaLabel`,`Project information`,3,`selectedValueChange`,`variant`,`selectedValue`],[`label`,`Overview`,`value`,`overview`,`icon`,`book-open`],[`bxTabContent`,``],[`label`,`Details`,`value`,`details`,`color`,`accent`,`icon`,`badge-check`,`endIcon`,`chevron-right`,3,`disabled`],[`label`,`Recent project activity`,`value`,`activity`,`color`,`info`,`textColor`,`text-warn`,`highlightColor`,`text-warn`,`contentColor`,`text-info`,`icon`,`activity`],[`label`,`Unavailable`,`value`,`unavailable`,3,`disabled`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[`label`,`Project note`,3,`formControl`],[3,`label`,`value`],[`text`,`Your changes are saved automatically.`],[`routerLink`,`/components/tooltip-directive`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`Saves the current project`,`placement`,`top`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`An optional hint revealed by touching and holding`,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`tooltip-hold-target`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`icon`,`aria-label`,`More information`,`bxTooltip`,`Appearance settings apply to all components`,`bxTooltipTouch`,`tap`,`placement`,`bottom`],[`name`,`info`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`bxTransition`,`fade`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[`tabindex`,`0`,1,`context-target`,3,`bxContextMenu`],[`label`,`Copy selection`,`icon`,`copy`,3,`action`],[`label`,`Archive selection`,`icon`,`archive`,3,`action`],[1,`demo-row`,`icon-row`],[`name`,`sparkles`,`size`,`32`,`color`,`text-accent`,`ariaLabel`,`Highlights`,3,`decorative`],[`name`,`check-circle`,`size`,`32`,`color`,`text-success`],[`name`,`info`,`size`,`32`,`color`,`text-info`,`bgColor`,`auto`],[`name`,`triangle-alert`,`size`,`32`,`color`,`text-warn`],[`name`,`heart`,`size`,`40`,`color`,`text-danger`],[`routerLink`,`/icon-catalog`],[3,`header`,`showCloseButton`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`],[3,`close`,`header`,`showCloseButton`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`routerLink`,`/toastr`],[`name`,`layers`,`size`,`28`],[`label`,`Emit interaction light`,3,`checkedChange`,`checked`],[`type`,`button`,`bx-button`,``,`bxSurface`,``,`variant`,`tonal`,3,`click`,`surfaceEffects`,`bxSurfaceEmission`],[`routerLink`,`/modal`]],template:function(t,e){t&1&&(_(0,`bx-page-container`)(1,`bx-page-header`,4)(2,`div`,5)(3,`code`),Q(4),D(),_(5,`a`,6),Q(6,`Configure appearance globally`),D()()(),_(7,`section`,7)(8,`div`,8)(9,`h2`,9),Q(10,`Interactive example`),D(),_(11,`span`),Q(12,`Uses your active palette`),D()(),L$1(13,bo,2,0,`div`,10)(14,yo,2,0,`div`,10)(15,_o,2,0,`div`,10)(16,Lr,62,1,`div`,11),_(17,`p`,12),Q(18),D()(),_(19,`section`,13)(20,`h2`,14),Q(21,`Quick usage`),D(),_(22,`pre`,15),ve(23,`code`,16),D(),_(24,`pre`,17),ve(25,`code`,18),D()(),_(26,`section`,19),ve(27,`app-readme`,20),D()()),t&2&&(y(),T(`pageDescription`,e.entry().description),y(3),fe$1(e.entry().selector),y(9),j$1(e.entry().id===`side-nav`?13:e.entry().id===`top-nav`?14:e.entry().id===`stepper`?15:16),y(5),fe$1(e.status()),y(5),T(`highlight`,`import { `+e.entry().symbol+` } from '`+e.entry().package+`';`),y(2),T(`highlight`,e.entry().example),y(2),T(`path`,e.entry().readme))},dependencies:[Je,Ge,Qe,Xe,rt,it,$e,st,ft,MT,_l,ht,Yf,Y,et,Ze,Ye,ot,at,nt,lt,we,ese,GM,gB,Kie,xB,fe,$r,Sn,Y$1,va$1,ya$1,Ft,Sa$1,Bn,wb,yb,gb,fT,vb,Ui$1,pT,Kd,Gd,Ke,qt,Rt,j,S$1],styles:[`
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
}`]})};export{Si as ComponentDemo};