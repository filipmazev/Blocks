import{t as Be}from"./chunk-DEEAAw8e.js";import{a as n,c as r,i as l,l as s,n as a,o,r as i,s as p,t as S,u as t}from"./chunk-DQ57v1lq.js";import{a as ut$1,i as _t,n as X,r as Y,t as L}from"./chunk-Db1YHXDQ.js";import{a as Bn,c as Gn,f as gt$1,g as vt,h as ut$2,l as Pn,m as ot$1,o as En,p as jn,s as Fn,t as S$1,u as at$1,w as e}from"./main-UXQC7EJC.js";import{a as gn,i as fn,o as he,r as bn,t as P}from"./chunk-DZFUfKeL.js";import{n as ht}from"./chunk-CgMwNfxR.js";import{C as ka$1,D as me,F as zn,N as xo$1,O as mp,P as yo$1,T as ko$1,_ as bp,b as fo$1,c as No$1,f as U,i as Ft,m as _n,o as Hr,p as Vo$1,t as At,u as Ro$1,w as kn}from"./chunk-g_MLkDaC.js";import{$r as fE,$t as PT,Ar as bb,B as El,Ba as te,Br as dT,Bt as MT,Ca as rT,Cn as Se,Cr as ae,D as Cn,Di as jc,Dr as b,E as Cl,Fr as cB,Ft as Le,Ga as uB,Gi as mT,Hn as Vt,Ii as kr$1,Io as zd,Ir as ce,Ji as mf,K as Fa$1,Ka as uE,L as ET,Mt as Ko$1,N as DT,Na as sT,Nn as Um,Oi as jie,Or as bE,P as Dl,Po as zA,Pt as LP,Q as G,Qa as un,Qn as Xd,Ro as zie,Rt as M,Sa as rI,Si as j,Sn as ST,T as CT,Ta as rb,Ti as ja$1,To as y,Tt as K0,U as F,Ui as mE,W as FM,Wr as eJ,X as Fl,Xi as mo$1,Xn as Wt,Xr as eu,Yi as ml,Yn as Wo$1,Yt as Nt,Zn as X$1,Zr as f,_o as xT,ai as gT,bi as ie$1,br as aB,bt as Jd,cr as Ze$1,da as pb,di as hb,dt as Hie,ea as nf,ei as fb,en as Pa$1,er as Xt,f as AT,fn as Qt,fr as _,g as B,ga as qA,go as xR,gr as _o$1,hn as RT,hr as _l,ht as Ie,i as $f,ii as g,io as ve,ir as Yo$1,j as D,ji as kT,kn as Tt,kr as bT,kt as Kd,l as $t,la as pE,li as hE,lo as w,lt as HP,mn as R,mr as _e,nt as Gd,po as wt,ri as ft,sn as Q,sr as Zd,ti as fe,to as vT,ua as pT,ui as hT,un as Qd,ur as Zo$1,va as qi$1,xn as Rt,xo as xe,xr as aT,y as Be$1,yi as iT,yo as xb,yt as J,zn as Ve}from"./chunk-CpeWzSSw.js";import{n as s$1,t as r$1}from"./chunk-DFgPOoGa.js";function Ci(r,a){if(r&1&&(_(0,`div`,9),X$1(1),D()),r&2){let t=a.$implicit;y(),un(`Row `,t,` — semantic surface material, focusable content and safe-area padding.`)}}var Ge=class r{open=M(!1);busy=M(!1);dismissible=M(!0);size=M(`md`);status=M(`No drawer interaction yet.`);items=Array.from({length:24},(a,t)=>t+1);openDrawer(a){this.size.set(a),this.open.set(!0),this.status.set(`Opened the ${a} drawer.`)}onClosed(a){this.status.set(`Closed with reason: ${a}.`)}onCancelled(a){this.status.set(`Close cancelled: ${a}.`)}toggleDismissible(){this.dismissible.update(a=>!a)}simulateBusy(){this.busy.set(!0),setTimeout(()=>{this.busy.set(!1),this.status.set(`Busy state finished; dismissal is available again.`)},1500)}static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-bottom-drawer-examples`]],decls:31,vars:6,consts:[[`aria-labelledby`,`drawer-demo-title`,1,`drawer-demo`],[`id`,`drawer-demo-title`],[1,`drawer-actions`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,3,`click`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`role`,`status`,`aria-live`,`polite`,1,`drawer-status`],[`routerLink`,`/components/modal`],[`title`,`Filter results`,`subtitle`,`The reusable surface used by Modal and by mobile date pickers.`,`icon`,`sliders-horizontal`,`maxHeight`,`88dvh`,3,`openChange`,`closed`,`closeCancelled`,`size`,`busy`,`dismissible`,`open`],[1,`drawer-content`],[1,`drawer-row`],[`bxDrawerFooter`,``,1,`drawer-footer`],[`bx-button`,``,`type`,`button`,`variant`,`text`,3,`click`]],template:function(t,e){t&1&&(_(0,`section`,0)(1,`h3`,1),X$1(2,`Standalone reusable drawer`),D(),_(3,`p`),X$1(4,` Drag the handle down, tap it, press Escape, or use the backdrop. The body keeps native scrolling while the sticky footer stays reachable. Enable the busy state to see dismissal guards and pending feedback. `),D(),_(5,`div`,2)(6,`button`,3),te(`click`,function(){return e.openDrawer(`sm`)}),X$1(7,`Small`),D(),_(8,`button`,4),te(`click`,function(){return e.openDrawer(`md`)}),X$1(9,`Medium`),D(),_(10,`button`,4),te(`click`,function(){return e.openDrawer(`lg`)}),X$1(11,`Large`),D(),_(12,`button`,4),te(`click`,function(){return e.openDrawer(`full`)}),X$1(13,`Full height`),D()(),_(14,`p`,5),X$1(15),D(),_(16,`a`,6),X$1(17,`Review the Modal bottom-drawer regression demo`),D(),_(18,`bx-bottom-drawer`,7),hE(`openChange`,function(c){return LP(e.open,c)||(e.open=c),c}),te(`closed`,function(c){return e.onClosed(c)})(`closeCancelled`,function(c){return e.onCancelled(c)}),_(19,`div`,8)(20,`p`),X$1(21,`Content scrolls independently of the handle and footer.`),D(),$t(22,Ci,2,1,`div`,9,Fa$1),D(),_(24,`div`,10)(25,`button`,11),te(`click`,function(){return e.simulateBusy()}),X$1(26,`Simulate busy`),D(),_(27,`button`,11),te(`click`,function(){return e.toggleDismissible()}),X$1(28),D(),_(29,`button`,3),te(`click`,function(){return e.open.set(!1)}),X$1(30,`Apply`),D()()()()),t&2&&(y(15),fe(e.status()),y(3),R(`size`,e.size())(`busy`,e.busy())(`dismissible`,e.dismissible()),bE(`open`,e.open),y(4),Wt(e.items),y(6),un(``,e.dismissible()?`Disable`:`Enable`,` dismissal`))},dependencies:[AT,me,$f],styles:[`
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
}`]})};var ei=[{label:`Home`,route:`/home`},{label:`Components`,route:`/components`},{label:`Primitives`,route:`/components/category/primitives`},{label:`Layout`,route:`/components/layout`},{label:`Page container`,route:`/components/layout/page-container`}];var Ke=class r{items=ei;maxVisible=M(3);unlimited=M(!1);hover=M(!0);config=g(()=>({maxVisibleItems:this.unlimited()?null:Number(this.maxVisible())||3,openOnHover:this.hover()}));static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-breadcrumb-examples`]],decls:13,vars:13,consts:[[3,`gap`],[`direction`,`responsive`,`align`,`center`,3,`gap`],[`type`,`number`,`label`,`Visible breadcrumb entries`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`max`,`disabled`,`value`],[`label`,`Show the complete trail`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Open hidden ancestors on hover`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[3,`items`,`minimumBreadcrumbs`,`breadcrumbConfig`],[3,`minimumBreadcrumbs`,`breadcrumbConfig`]],template:function(t,e){t&1&&(_(0,`bx-stack`,0)(1,`bx-stack`,1)(2,`bx-input-field`,2),hE(`valueChange`,function(c){return LP(e.maxVisible,c)||(e.maxVisible=c),c}),D(),_(3,`bx-checkbox`,3),hE(`checkedChange`,function(c){return LP(e.unlimited,c)||(e.unlimited=c),c}),D(),_(4,`bx-checkbox`,4),hE(`checkedChange`,function(c){return LP(e.hover,c)||(e.hover=c),c}),D()(),xe(5,`bx-breadcrumbs`,5),_(6,`p`),X$1(7,`Hover over or activate the ellipsis to open hidden ancestors. Every ancestor link navigates to a real playground page.`),D(),_(8,`p`),X$1(9,`Use Tab to reach the ellipsis, Enter or Down to open it, arrow keys to choose an ancestor, and Escape to return to the trigger.`),D(),xe(10,`bx-breadcrumbs`,6),_(11,`p`),X$1(12,`The second trail follows the current route metadata.`),D()()),t&2&&(R(`gap`,4),y(),R(`gap`,4),y(),R(`min`,2)(`max`,10)(`disabled`,e.unlimited()),bE(`value`,e.maxVisible),y(),bE(`checked`,e.unlimited),y(),bE(`checked`,e.hover),y(),R(`items`,e.items)(`minimumBreadcrumbs`,1)(`breadcrumbConfig`,e.config()),y(5),R(`minimumBreadcrumbs`,1)(`breadcrumbConfig`,e.config()))},dependencies:[En,Hr,fo$1,xT],encapsulation:2})};var wi=[`dayCell`];var ki=()=>[];var ut=(r,a)=>a.value;function Ei(r,a){if(r&1){let t=wt();_(0,`button`,21),te(`click`,function(){let o=Be$1(t).$implicit,c=w();return Ve(c.setMode(o.value))}),X$1(1),D()}if(r&2){let t=a.$implicit,e=w();R(`variant`,e.mode()===t.value?`filled`:`tonal`),y(),un(` `,t.label,` `)}}function Ti(r,a){if(r&1){let t=wt();_(0,`button`,21),te(`click`,function(){let o=Be$1(t).$implicit,c=w();return Ve(c.calendarId.set(o.value))}),X$1(1),D()}if(r&2){let t=a.$implicit,e=w();R(`variant`,e.calendarId()===t.value?`filled`:`tonal`),y(),un(` `,t.label,` `)}}function Mi(r,a){if(r&1){let t=wt();_(0,`button`,21),te(`click`,function(){let o=Be$1(t).$implicit,c=w();return Ve(c.locale.set(o.value))}),X$1(1),D()}if(r&2){let t=a.$implicit,e=w();R(`variant`,e.locale()===t.value?`filled`:`tonal`),y(),un(` `,t.label,` `)}}function Di(r,a){if(r&1){let t=wt();_(0,`button`,21),te(`click`,function(){let o=Be$1(t).$implicit,c=w();return Ve(c.months.set(o))}),X$1(1),D()}if(r&2){let t=a.$implicit,e=w();R(`variant`,e.months()===t?`filled`:`tonal`),y(),uE(` `,t,` month`,t>1?`s`:``,` `)}}function Pi(r,a){if(r&1){let t=wt();_(0,`button`,22),te(`click`,function(){let o=Be$1(t).retry;return Ve(o())}),xe(1,`bx-icon`,23),X$1(2),D()}if(r&2){let t=a.label;y(),R(`decorative`,!0),y(),un(``,t,` `)}}function Ni(r,a){if(r&1&&(_(0,`span`,26),X$1(1),D()),r&2){let t=w().$implicit;y(),fe(t.cell.metadata.badge)}}function Ii(r,a){if(r&1&&(_(0,`span`,27),X$1(1),D()),r&2){let t=w().$implicit;y(),un(``,t.cell.metadata.price,` €`)}}function Vi(r,a){if(r&1&&(_(0,`span`,24)(1,`span`,25),X$1(2),D(),j(3,Ni,2,1,`span`,26),j(4,Ii,2,1,`span`,27),D()),r&2){let t=a.$implicit;y(2),fe(t.cell.day),y(),F(t.cell.metadata.badge?3:-1),y(),F(t.cell.metadata.price?4:-1)}}var Qe=class r{mode=M(`range`);months=M(2);locale=M(`en-GB`);calendarId=M(`gregory`);longNames=M(!1);highlightToday=M(!0);showToday=M(!1);showWeekNumbers=M(!0);restrict=M(!0);customCells=M(!1);asyncMode=M(!1);failNext=M(!1);value=M(null);availability=M(void 0);visible=M(`Navigate to request availability.`);outcome=M(`No selection yet.`);modes=[{value:`single`,label:`Single`},{value:`multiple`,label:`Multiple`},{value:`range`,label:`Range`},{value:`week`,label:`Week`},{value:`month`,label:`Month`},{value:`quarter`,label:`Quarter`},{value:`year`,label:`Year`}];locales=[{value:`en-GB`,label:`English`},{value:`es-ES`,label:`Español`},{value:`fr-FR`,label:`Français`},{value:`de-DE`,label:`Deutsch`}];calendars=[{value:`gregory`,label:`Gregorian`},{value:`islamic-umalqura`,label:`Umm al-Qura`},{value:`hebrew`,label:`Hebrew`},{value:`persian`,label:`Persian`}];monthCounts=[1,2,3];disabledIntervals=[{start:`2026-11-23`,end:`2026-12-03`},{start:`2026-12-07`,end:`2026-12-15`}];metadata=g(()=>this.customCells()?Array.from({length:21},(a,t)=>({date:`2026-11-${String(t+2).padStart(2,`0`)}`,tone:t%4===0?`success`:t%3===0?`warn`:`neutral`,badge:t%3===0?`3 left`:void 0,price:120+t*15,description:t%2===0?`Late checkout available`:`Standard rate`})):[]);dayTemplate=Nt(`dayCell`);revision=0;onVisible(a){this.visible.set(`Visible ${a.start} \u2013 ${a.end} (${a.monthKeys.length} month(s)).`),this.asyncMode()&&this.load(a.start,a.end,++this.revision)}onRetry(a){this.load(a.start,a.end,++this.revision)}toggleAsync(){let a=!this.asyncMode();this.asyncMode.set(a),this.availability.set(a?{loading:!0}:void 0)}setMode(a){this.mode.set(a),this.value.set(null),this.outcome.set(`Mode set to ${a}.`)}describeValue(){let a=this.value();return a===null?`empty`:typeof a==`string`?`single date ${a}`:Array.isArray(a)?`${a.length} dates`:`start`in a?`${`kind`in a?a.kind+` period`:`range`} ${a.start} \u2013 ${a.end}`:`unknown value`}load(a,t,e){this.availability.set({loading:!0,revision:e});let o=this.failNext();this.failNext.set(!1),setTimeout(()=>{if(o){this.availability.set({loading:!1,revision:e,error:`Availability could not be loaded. Retry keeps the same range.`});return}this.availability.set({loading:!1,revision:e,dates:this.mockMetadata(a,t)})},650)}mockMetadata(a,t){let e=[],o=/* @__PURE__ */ new Date(`${a}T00:00:00Z`),c=/* @__PURE__ */ new Date(`${t}T00:00:00Z`),s=0;for(;o<=c;){let H=o.toISOString().slice(0,10),A=s%5!==0;e.push({date:H,status:A?s%4===0?`limited`:`available`:`unavailable`,tone:A?s%4===0?`warn`:`success`:`danger`,badge:A?`${s%4+1} slots`:`Full`,description:A?`Availability loaded from the demo API.`:`No remaining capacity.`}),o.setUTCDate(o.getUTCDate()+1),s+=1}return e}static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-calendar-examples`]],viewQuery:function(t,e){t&1&&Xt(e.dayTemplate,wi,5),t&2&&ft()},decls:36,vars:28,consts:[[`retryAction`,``],[`dayCell`,``],[`aria-labelledby`,`calendar-demo-title`,1,`calendar-demo`],[`id`,`calendar-demo-title`],[`role`,`group`,`aria-label`,`Selection mode`,1,`demo-group`],[`bx-button`,``,`type`,`button`,3,`variant`],[`role`,`group`,`aria-label`,`Calendar system`,1,`demo-group`],[`role`,`group`,`aria-label`,`Language`,1,`demo-group`],[`role`,`group`,`aria-label`,`Month count`,1,`demo-group`],[1,`demo-toggles`],[`label`,`Full weekday and month names`,3,`checkedChange`,`checked`],[`label`,`Highlight today`,3,`checkedChange`,`checked`],[`label`,`Today shortcut`,3,`checkedChange`,`checked`],[`label`,`Week numbers`,3,`checkedChange`,`checked`],[`label`,`Disjoint disabled intervals`,3,`checkedChange`,`checked`],[`label`,`Custom day metadata and template`,3,`checkedChange`,`checked`],[`label`,`Async availability`,3,`checkedChange`,`checked`],[`label`,`Fail the next request`,3,`checkedChange`,`checked`],[1,`calendar-panel`],[3,`valueChange`,`visibleRangeChange`,`retryAvailability`,`selectionRejected`,`todayLabel`,`weekdayNameFormat`,`monthNameFormat`,`retryTemplate`,`mode`,`months`,`locale`,`calendarId`,`showToday`,`showWeekNumbers`,`disabledIntervals`,`metadata`,`dayTemplate`,`availability`,`blockUnverifiedAvailability`,`value`],[`role`,`status`,`aria-live`,`polite`,1,`demo-status`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`accent`,3,`click`],[`name`,`rotate-cw`,`size`,`16`,3,`decorative`],[1,`custom-day`],[1,`custom-day-number`],[1,`custom-day-badge`],[1,`custom-day-price`]],template:function(t,e){if(t&1){let o=wt();_(0,`section`,2)(1,`h3`,3),X$1(2,`Inline calendar primitive`),D(),_(3,`p`),X$1(4,` Selection, availability and period arithmetic are adapter-owned, so the non-Gregorian examples render real calendar grids rather than translated labels. `),D(),_(5,`div`,4),$t(6,Ei,2,2,`button`,5,ut),D(),_(8,`div`,6),$t(9,Ti,2,2,`button`,5,ut),D(),_(11,`div`,7),$t(12,Mi,2,2,`button`,5,ut),D(),_(14,`div`,8),$t(15,Di,2,3,`button`,5,Fa$1),D(),_(17,`div`,9)(18,`bx-slide-toggle`,10),hE(`checkedChange`,function(s){return Be$1(o),LP(e.longNames,s)||(e.longNames=s),Ve(s)}),D(),_(19,`bx-slide-toggle`,11),hE(`checkedChange`,function(s){return Be$1(o),LP(e.highlightToday,s)||(e.highlightToday=s),Ve(s)}),D(),_(20,`bx-slide-toggle`,12),hE(`checkedChange`,function(s){return Be$1(o),LP(e.showToday,s)||(e.showToday=s),Ve(s)}),D(),_(21,`bx-slide-toggle`,13),hE(`checkedChange`,function(s){return Be$1(o),LP(e.showWeekNumbers,s)||(e.showWeekNumbers=s),Ve(s)}),D(),_(22,`bx-slide-toggle`,14),hE(`checkedChange`,function(s){return Be$1(o),LP(e.restrict,s)||(e.restrict=s),Ve(s)}),D(),_(23,`bx-slide-toggle`,15),hE(`checkedChange`,function(s){return Be$1(o),LP(e.customCells,s)||(e.customCells=s),Ve(s)}),D(),_(24,`bx-slide-toggle`,16),te(`checkedChange`,function(){return e.toggleAsync()}),D(),_(25,`bx-slide-toggle`,17),hE(`checkedChange`,function(s){return Be$1(o),LP(e.failNext,s)||(e.failNext=s),Ve(s)}),D()(),_(26,`div`,18)(27,`bx-calendar`,19),hE(`valueChange`,function(s){return Be$1(o),LP(e.value,s)||(e.value=s),Ve(s)}),te(`visibleRangeChange`,function(s){return e.onVisible(s)})(`retryAvailability`,function(s){return e.onRetry(s)})(`selectionRejected`,function(s){return e.outcome.set(`Rejected: `+s)}),D()(),_(28,`p`,20),X$1(29),D(),_(30,`p`,20),X$1(31),D(),Pa$1(32,Pi,3,2,`ng-template`,null,0,kr$1)(34,Vi,5,3,`ng-template`,null,1,kr$1),D()}if(t&2){let o=Tt(33);y(6),Wt(e.modes),y(3),Wt(e.calendars),y(3),Wt(e.locales),y(3),Wt(e.monthCounts),y(3),bE(`checked`,e.longNames),y(),bE(`checked`,e.highlightToday),y(),bE(`checked`,e.showToday),y(),bE(`checked`,e.showWeekNumbers),y(),bE(`checked`,e.restrict),y(),bE(`checked`,e.customCells),y(),R(`checked`,e.asyncMode()),y(),bE(`checked`,e.failNext),y(2),R(`todayLabel`,e.showToday()?`Select today`:void 0)(`weekdayNameFormat`,e.longNames()?`long`:`narrow`)(`monthNameFormat`,e.longNames()?`long`:`short`)(`retryTemplate`,o)(`mode`,e.mode())(`months`,e.months())(`locale`,e.locale())(`calendarId`,e.calendarId())(`showToday`,e.highlightToday())(`showWeekNumbers`,e.showWeekNumbers())(`disabledIntervals`,e.restrict()?e.disabledIntervals:HP(27,ki))(`metadata`,e.metadata())(`dayTemplate`,e.customCells()?e.dayTemplate():void 0)(`availability`,e.availability())(`blockUnverifiedAvailability`,e.asyncMode()),bE(`value`,e.value),y(2),fe(e.visible()),y(2),uE(`Committed value: `,e.describeValue(),`. `,e.outcome())}},dependencies:[me,PT,Vt,yo$1],styles:[`
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
}`]})};var Wi=()=>[0];var Oi=()=>[];var ti=(r,a)=>a.value;function zi(r,a){if(r&1){let t=wt();_(0,`button`,21),te(`click`,function(){let o=Be$1(t).$implicit,c=w();return Ve(c.locale.set(o.value))}),X$1(1),D()}if(r&2){let t=a.$implicit,e=w();R(`variant`,e.locale()===t.value?`filled`:`tonal`),y(),un(` `,t.label,` `)}}function Li(r,a){if(r&1){let t=wt();_(0,`button`,21),te(`click`,function(){let o=Be$1(t).$implicit,c=w();return c.mode.set(o.value),Ve(c.value.set(null))}),X$1(1),D()}if(r&2){let t=a.$implicit,e=w();R(`variant`,e.mode()===t.value?`filled`:`tonal`),y(),un(` `,t.label,` `)}}function Ri(r,a){if(r&1){let t=wt();_(0,`bx-slide-toggle`,34),hE(`checkedChange`,function(o){Be$1(t);let c=w();return LP(c.disableLongPresets,o)||(c.disableLongPresets=o),Ve(o)}),D()}if(r&2){let t=w();bE(`checked`,t.disableLongPresets)}}var Xe=class r{destroyRef=f(Q);mode=M(`single`);locale=M(`en-GB`);value=M(null);readonlyState=M(!1);disabledState=M(!1);separateFields=M(!1);dropdownIcon=M(!1);longPresets=M(!1);editable=M(!0);naturalLanguage=M(!0);disableLongPresets=M(!1);highlightToday=M(!0);disableSundays=M(!1);showToday=M(!1);showPresets=M(!1);initialView=M(void 0);viewResult=M(`Default calendar view.`);months=M(1);minDate=M(null);maxDate=M(null);visibleTags=M(2);selectionLimit=M(12);minLength=M(1);asyncEnabled=M(!1);availabilityLoading=M(!1);failNext=M(!1);committed=M(`Nothing committed yet.`);parseError=M(``);labels=g(()=>{let a={"en-GB":{field:`Enter date range`,placeholder:`Enter a date`,apply:`Apply`,presets:`Quick select`,hint:`Try 'next friday', 'in 3 days', or a strict dd/MM/yyyy value.`,start:`Start date`,end:`End date`,today:`Select today`,invalid:`Enter a valid selection. The start date must not follow the end date.`,clear:`Clear selection`,selected:`Selected dates`,seven:`Last 7 days`,thirty:`Last 30 days`,month:`This month`,ten:`Next 10 days`,rolling:`Rolling`,calendar:`Calendar`,custom:`Custom`},"es-ES":{field:`Introduce un intervalo de fechas`,placeholder:`Introduce una fecha`,apply:`Aplicar`,presets:`Selección rápida`,hint:`Prueba 'próximo viernes', 'en 3 días' o una fecha estricta dd/MM/yyyy.`,start:`Fecha inicial`,end:`Fecha final`,today:`Seleccionar hoy`,invalid:`Introduce una selección válida. La fecha inicial no puede ser posterior a la final.`,clear:`Borrar selección`,selected:`Fechas seleccionadas`,seven:`Últimos 7 días`,thirty:`Últimos 30 días`,month:`Este mes`,ten:`Próximos 10 días`,rolling:`Relativo`,calendar:`Calendario`,custom:`Personalizado`},"fr-FR":{field:`Saisir une plage de dates`,placeholder:`Saisir une date`,apply:`Appliquer`,presets:`Sélection rapide`,hint:`Essayez 'vendredi prochain', 'dans 3 jours' ou une date stricte dd/MM/yyyy.`,start:`Date de début`,end:`Date de fin`,today:`Aujourd’hui`,invalid:`Saisissez une sélection valide. La date de début ne peut pas suivre la date de fin.`,clear:`Effacer la sélection`,selected:`Dates sélectionnées`,seven:`7 derniers jours`,thirty:`30 derniers jours`,month:`Ce mois-ci`,ten:`10 prochains jours`,rolling:`Relatif`,calendar:`Calendrier`,custom:`Personnalisé`},"de-DE":{field:`Datumsbereich eingeben`,placeholder:`Datum eingeben`,apply:`Anwenden`,presets:`Schnellauswahl`,hint:`Versuchen Sie 'nächsten Freitag', 'in 3 Tagen' oder ein Datum im strikten Format dd/MM/yyyy.`,start:`Startdatum`,end:`Enddatum`,today:`Heute auswählen`,invalid:`Geben Sie eine gültige Auswahl ein. Das Startdatum darf nicht nach dem Enddatum liegen.`,clear:`Auswahl löschen`,selected:`Ausgewählte Daten`,seven:`Letzte 7 Tage`,thirty:`Letzte 30 Tage`,month:`Dieser Monat`,ten:`Nächste 10 Tage`,rolling:`Relativ`,calendar:`Kalender`,custom:`Benutzerdefiniert`}};return a[this.locale()]??a[`en-GB`]});validationMessages=g(()=>{let a={"en-GB":{dateParse:({params:t})=>`Enter a date in the ${t.format} format.`,dateMin:({params:t})=>`The date cannot be before ${t.minFormatted}.`,dateMax:({params:t})=>`The date cannot be after ${t.maxFormatted}.`,dateOrder:({params:t})=>`The end date cannot be before the start date (${t.startFormatted}).`},"es-ES":{dateParse:({params:t})=>`Introduce una fecha con el formato ${t.format}.`,dateMin:({params:t})=>`La fecha no puede ser anterior al ${t.minFormatted}.`,dateMax:({params:t})=>`La fecha no puede ser posterior al ${t.maxFormatted}.`,dateOrder:({params:t})=>`La fecha final no puede ser anterior a la inicial (${t.startFormatted}).`},"fr-FR":{dateParse:({params:t})=>`Saisissez une date au format ${t.format}.`,dateMin:({params:t})=>`La date ne peut pas pr\xE9c\xE9der le ${t.minFormatted}.`,dateMax:({params:t})=>`La date ne peut pas suivre le ${t.maxFormatted}.`,dateOrder:({params:t})=>`La date de fin ne peut pas pr\xE9c\xE9der la date de d\xE9but (${t.startFormatted}).`},"de-DE":{dateParse:({params:t})=>`Geben Sie ein Datum im Format ${t.format} ein.`,dateMin:({params:t})=>`Das Datum darf nicht vor dem ${t.minFormatted} liegen.`,dateMax:({params:t})=>`Das Datum darf nicht nach dem ${t.maxFormatted} liegen.`,dateOrder:({params:t})=>`Das Enddatum darf nicht vor dem Startdatum (${t.startFormatted}) liegen.`}};return a[this.locale()]??a[`en-GB`]});locales=[{value:`en-GB`,label:`English`},{value:`es-ES`,label:`Español`},{value:`fr-FR`,label:`Français`},{value:`de-DE`,label:`Deutsch`}];modes=[{value:`single`,label:`Single`},{value:`range`,label:`Range`},{value:`multiple`,label:`Multiple`},{value:`month`,label:`Month and year`},{value:`quarter`,label:`Quarter`},{value:`year`,label:`Year only`},{value:`week`,label:`Week`},{value:`week-range`,label:`Week range`},{value:`month-range`,label:`Month range`},{value:`quarter-range`,label:`Quarter range`},{value:`year-range`,label:`Year range`}];presets=g(()=>{let a=zd(this.mode()),t=a.period??`day`,e=new Intl.RelativeTimeFormat(this.locale(),{numeric:`auto`}),o=(H,A)=>t===`year`?H.calendar.addYears(H.today,A,H.locale):t===`month`||t===`quarter`?H.calendar.addMonths(H.today,A*(t===`quarter`?3:1),H.locale):ve(H.today,A*(t===`week`?7:1)),c=a.isRange?this.builtInPresets():[0,-1,1].map(H=>({id:`relative-${H}`,label:e.format(H,t),resolve:A=>o(A,H)})),s=this.longPresets()?Array.from({length:16},(H,A)=>({id:`previous-period-${A+2}`,label:e.format(-(A+2),t),group:this.labels().rolling,disabled:this.disableLongPresets()&&A%3===2,resolve:yt=>{let dt=o(yt,-(A+2));return a.isRange?{start:dt,end:t===`day`?dt:o(yt,-(A+1))}:dt}})):[];return[...c,...s]});resolver=async a=>{let t=this.failNext(),e=++this.requestRevision;if(this.failNext.set(!1),this.availabilityLoading.set(!0),await new Promise(o=>setTimeout(o,550)),this.destroyRef.destroyed)return{dates:[]};if(e===this.requestRevision&&this.availabilityLoading.set(!1),t)throw new Error(`The mock request failed. Retry to load these dates.`);return{dates:this.mockMetadata(a.start,a.end)}};requestRevision=0;failRequest(a){this.failNext.set(!0),a.reloadAvailability()}setVisibleTags(a){this.visibleTags.set(Math.max(1,Number(a)||1))}setSelectionLimit(a){this.selectionLimit.set(a===null||a===``?null:Math.max(1,Number(a)||1))}onCommit(a){this.committed.set(this.describe(a))}onParseFailed(a){this.parseError.set(a)}describe(a){return a===null?`Cleared.`:typeof a==`string`?`Committed single date ${a}.`:Array.isArray(a)?`Committed ${a.length} dates: ${a.join(`, `)}.`:`start`in a?`Committed ${`kind`in a?a.kind+` `:``}range ${a.start} \u2013 ${a.end}.`:`Committed value.`}mockMetadata(a,t){let e=[],o=/* @__PURE__ */ new Date(`${a}T00:00:00Z`),c=/* @__PURE__ */ new Date(`${t}T00:00:00Z`),s=0;for(;o<=c;){let H=o.toISOString().slice(0,10),A=s%4!==0;e.push({date:H,status:A?`available`:`unavailable`,badge:A?`${s%3+1} left`:`Full`,tone:A?`success`:`danger`}),o.setUTCDate(o.getUTCDate()+1),s+=1}return e}builtInPresets(){return[{id:`last-seven-days`,label:this.labels().seven,group:this.labels().rolling,resolve:a=>({start:ve(a.today,-6),end:a.today})},{id:`last-thirty-days`,label:this.labels().thirty,group:this.labels().rolling,resolve:a=>({start:ve(a.today,-29),end:a.today})},{id:`this-month`,label:this.labels().month,group:this.labels().calendar,resolve:a=>{let[t,e]=a.today.split(`-`).map(Number);return{start:`${t}-${String(e).padStart(2,`0`)}-01`,end:a.today}}}]}static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-date-picker-examples`]],decls:57,vars:69,consts:[[`picker`,``],[`aria-labelledby`,`date-picker-demo-title`,1,`picker-demo`],[`id`,`date-picker-demo-title`],[`role`,`group`,`aria-label`,`Language`,1,`demo-group`],[`bx-button`,``,`type`,`button`,3,`variant`],[`role`,`group`,`aria-label`,`Selection mode`,1,`demo-group`],[1,`demo-toggles`],[`label`,`Separate start/end fields`,3,`checkedChange`,`checked`],[`label`,`Typed input`,3,`checkedChange`,`checked`],[`label`,`Natural language`,3,`checkedChange`,`checked`],[`label`,`Highlight today`,3,`checkedChange`,`checked`],[`label`,`Disable Sundays`,3,`checkedChange`,`checked`],[`label`,`Today shortcut`,3,`checkedChange`,`checked`],[`label`,`Long quick-select list`,3,`checkedChange`,`checked`],[`label`,`Dropdown icon`,3,`checkedChange`,`checked`],[`label`,`Quick select`,3,`checkedChange`,`checked`],[`label`,`Disable every third extra preset`,3,`checked`],[`label`,`Async availability`,3,`checkedChange`,`checked`],[`label`,`Read only`,3,`checkedChange`,`checked`],[`label`,`Disabled`,3,`checkedChange`,`checked`],[`role`,`group`,`aria-label`,`Range length`,1,`demo-group`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`],[`role`,`group`,`aria-label`,`Initial calendar view`,1,`demo-group`],[1,`demo-settings`],[`label`,`Earliest date`,`mode`,`single`,`dateFormat`,`dd/MM/yyyy`,`subscriptSizing`,`dynamic`,`hint`,`Cannot be later than the latest date.`,`presetsPlacement`,`hidden`,3,`valueChange`,`locale`,`showToday`,`max`,`value`],[`label`,`Latest date`,`mode`,`single`,`dateFormat`,`dd/MM/yyyy`,`subscriptSizing`,`dynamic`,`hint`,`Cannot be earlier than the earliest date.`,`presetsPlacement`,`hidden`,3,`valueChange`,`locale`,`showToday`,`min`,`value`],[`label`,`Visible tags`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`value`],[`label`,`Selection limit`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`value`],[`role`,`group`,`aria-label`,`Availability requests`,1,`demo-group`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[`loadErrorMessage`,`The mock request failed. Retry to load these dates.`,`dateFormat`,`dd/MM/yyyy`,3,`valueChange`,`viewChange`,`monthSelected`,`yearSelected`,`valueCommit`,`parseFailed`,`startView`,`showToday`,`disabledWeekdays`,`min`,`max`,`visibleTagCount`,`selectionLimit`,`hint`,`pickerIcon`,`mode`,`separateFields`,`editable`,`allowNaturalLanguage`,`months`,`locale`,`minRangeLength`,`presets`,`presetsPlacement`,`resolver`,`readOnly`,`disabled`,`label`,`applyLabel`,`startLabel`,`endLabel`,`todayLabel`,`errorMessages`,`clearLabel`,`selectedDatesLabel`,`presetsLabel`,`value`],[`role`,`status`,`aria-live`,`polite`,1,`demo-status`],[`role`,`status`,1,`demo-status`],[`label`,`Disable every third extra preset`,3,`checkedChange`,`checked`]],template:function(t,e){if(t&1){let o=wt();_(0,`section`,1)(1,`h3`,2),X$1(2,`Date picker with typed ranges and presets`),D(),_(3,`p`),X$1(4,` Single and multiple dates update the field on selection; ranges commit on their second date. Resize below the Blocks mobile breakpoint to see the same state move into the reusable bottom drawer without losing the draft. `),D(),_(5,`div`,3),$t(6,zi,2,2,`button`,4,ti),D(),_(8,`div`,5),$t(9,Li,2,2,`button`,4,ti),D(),_(11,`div`,6)(12,`bx-slide-toggle`,7),hE(`checkedChange`,function(s){return Be$1(o),LP(e.separateFields,s)||(e.separateFields=s),Ve(s)}),D(),_(13,`bx-slide-toggle`,8),hE(`checkedChange`,function(s){return Be$1(o),LP(e.editable,s)||(e.editable=s),Ve(s)}),D(),_(14,`bx-slide-toggle`,9),hE(`checkedChange`,function(s){return Be$1(o),LP(e.naturalLanguage,s)||(e.naturalLanguage=s),Ve(s)}),D(),_(15,`bx-slide-toggle`,10),hE(`checkedChange`,function(s){return Be$1(o),LP(e.highlightToday,s)||(e.highlightToday=s),Ve(s)}),D(),_(16,`bx-slide-toggle`,11),hE(`checkedChange`,function(s){return Be$1(o),LP(e.disableSundays,s)||(e.disableSundays=s),Ve(s)}),D(),_(17,`bx-slide-toggle`,12),hE(`checkedChange`,function(s){return Be$1(o),LP(e.showToday,s)||(e.showToday=s),Ve(s)}),D(),_(18,`bx-slide-toggle`,13),hE(`checkedChange`,function(s){return Be$1(o),LP(e.longPresets,s)||(e.longPresets=s),Ve(s)}),D(),_(19,`bx-slide-toggle`,14),hE(`checkedChange`,function(s){return Be$1(o),LP(e.dropdownIcon,s)||(e.dropdownIcon=s),Ve(s)}),D(),_(20,`bx-slide-toggle`,15),hE(`checkedChange`,function(s){return Be$1(o),LP(e.showPresets,s)||(e.showPresets=s),Ve(s)}),D(),j(21,Ri,1,1,`bx-slide-toggle`,16),_(22,`bx-slide-toggle`,17),te(`checkedChange`,function(s){return e.asyncEnabled.set(s)}),D(),_(23,`bx-slide-toggle`,18),hE(`checkedChange`,function(s){return Be$1(o),LP(e.readonlyState,s)||(e.readonlyState=s),Ve(s)}),D(),_(24,`bx-slide-toggle`,19),hE(`checkedChange`,function(s){return Be$1(o),LP(e.disabledState,s)||(e.disabledState=s),Ve(s)}),D()(),_(25,`div`,20)(26,`button`,21),te(`click`,function(){return e.minLength.set(1)}),X$1(27,`Any length`),D(),_(28,`button`,21),te(`click`,function(){return e.minLength.set(3)}),X$1(29,`Minimum 3 days`),D(),_(30,`button`,21),te(`click`,function(){return e.months.set(1)}),X$1(31,`One month`),D(),_(32,`button`,21),te(`click`,function(){return e.months.set(2)}),X$1(33,`Two months`),D()(),_(34,`div`,22)(35,`button`,21),te(`click`,function(){return e.initialView.set(void 0)}),X$1(36,`Default view`),D(),_(37,`button`,21),te(`click`,function(){return e.initialView.set(`months`)}),X$1(38,` Start with months `),D(),_(39,`button`,21),te(`click`,function(){return e.initialView.set(`years`)}),X$1(40,`Start with years`),D()(),_(41,`div`,23)(42,`bx-date-picker`,24),hE(`valueChange`,function(s){return Be$1(o),LP(e.minDate,s)||(e.minDate=s),Ve(s)}),D(),_(43,`bx-date-picker`,25),hE(`valueChange`,function(s){return Be$1(o),LP(e.maxDate,s)||(e.maxDate=s),Ve(s)}),D(),_(44,`bx-input-field`,26),te(`valueChange`,function(s){return e.setVisibleTags(s)}),D(),_(45,`bx-input-field`,27),te(`valueChange`,function(s){return e.setSelectionLimit(s)}),D()(),_(46,`div`,28)(47,`button`,29),te(`click`,function(){Be$1(o);let s=Tt(52);return Ve(e.failRequest(s))}),X$1(48,` Fail next request now `),D(),_(49,`button`,30),te(`click`,function(){Be$1(o);let s=Tt(52);return Ve(s.reloadAvailability())}),X$1(50,`Reload dates`),D()(),_(51,`bx-date-picker`,31,0),hE(`valueChange`,function(s){return Be$1(o),LP(e.value,s)||(e.value=s),Ve(s)}),te(`viewChange`,function(s){return e.viewResult.set(`Calendar view: `+s)})(`monthSelected`,function(s){return e.viewResult.set(`Month selected: `+s)})(`yearSelected`,function(s){return e.viewResult.set(`Year selected: `+s)})(`valueCommit`,function(s){return e.onCommit(s)})(`parseFailed`,function(s){return e.onParseFailed(s)}),D(),_(53,`p`,32),X$1(54),D(),_(55,`p`,33),X$1(56),D()()}t&2&&(y(6),Wt(e.locales),y(3),Wt(e.modes),y(3),bE(`checked`,e.separateFields),y(),bE(`checked`,e.editable),y(),bE(`checked`,e.naturalLanguage),y(),bE(`checked`,e.highlightToday),y(),bE(`checked`,e.disableSundays),y(),bE(`checked`,e.showToday),y(),bE(`checked`,e.longPresets),y(),bE(`checked`,e.dropdownIcon),y(),bE(`checked`,e.showPresets),y(),F(e.longPresets()?21:-1),y(),R(`checked`,e.asyncEnabled()),y(),bE(`checked`,e.readonlyState),y(),bE(`checked`,e.disabledState),y(2),R(`variant`,e.minLength()===1?`filled`:`tonal`),y(2),R(`variant`,e.minLength()===3?`filled`:`tonal`),y(2),R(`variant`,e.months()===1?`filled`:`tonal`),y(2),R(`variant`,e.months()===2?`filled`:`tonal`),y(3),R(`variant`,e.initialView()===void 0?`filled`:`tonal`),y(2),R(`variant`,e.initialView()===`months`?`filled`:`tonal`),y(2),R(`variant`,e.initialView()===`years`?`filled`:`tonal`),y(3),R(`locale`,e.locale())(`showToday`,e.highlightToday())(`max`,e.maxDate()),bE(`value`,e.minDate),y(),R(`locale`,e.locale())(`showToday`,e.highlightToday())(`min`,e.minDate()),bE(`value`,e.maxDate),y(),R(`min`,1)(`value`,e.visibleTags()),y(),R(`min`,1)(`value`,e.selectionLimit()),y(2),R(`disabled`,!e.asyncEnabled()||e.availabilityLoading()),y(2),R(`disabled`,!e.asyncEnabled()||e.availabilityLoading()),y(2),R(`startView`,e.initialView())(`showToday`,e.highlightToday())(`disabledWeekdays`,e.disableSundays()?HP(67,Wi):HP(68,Oi))(`min`,e.minDate())(`max`,e.maxDate())(`visibleTagCount`,e.visibleTags())(`selectionLimit`,e.selectionLimit())(`hint`,e.labels().hint)(`pickerIcon`,e.dropdownIcon()?`chevron-down`:`calendar`)(`mode`,e.mode())(`separateFields`,e.separateFields())(`editable`,e.editable())(`allowNaturalLanguage`,e.naturalLanguage())(`months`,e.months())(`locale`,e.locale())(`minRangeLength`,e.minLength())(`presets`,e.presets())(`presetsPlacement`,e.showPresets()?`start`:`hidden`)(`resolver`,e.asyncEnabled()?e.resolver:void 0)(`readOnly`,e.readonlyState())(`disabled`,e.disabledState())(`label`,e.mode()===`range`?e.labels().field:e.labels().placeholder)(`applyLabel`,e.labels().apply)(`startLabel`,e.labels().start)(`endLabel`,e.labels().end)(`todayLabel`,e.showToday()?e.labels().today:void 0)(`errorMessages`,e.validationMessages())(`clearLabel`,e.labels().clear)(`selectedDatesLabel`,e.labels().selected)(`presetsLabel`,e.labels().presets),bE(`value`,e.value),y(3),fe(e.committed()),y(2),fe(e.viewResult()))},dependencies:[me,Ro$1,fo$1,yo$1],styles:[`
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
}`]})};var ni=[`Skopje`,`Ohrid`,`Bitola`,`Prilep`,`Tetovo`,`Struga`,`Veles`,`Shtip`,`Kumanovo`,`Gevgelija`,`Kavadarci`,`Resen`,`Krusevo`,`Berovo`,`Debar`,`Strumica`,`Gostivar`,`Kicevo`,`Kratovo`,`Kocani`,`Radovish`,`Negotino`,`Delchevo`,`Vinica`].map(r=>({value:r}));var ii=[{label:`1 suggestion`,value:1},{label:`3 suggestions`,value:3},{label:`12 suggestions`,value:12},{label:`All 24 suggestions`,value:24}];var ai=[{label:`Primary`,value:`primary`},{label:`Accent`,value:`accent`},{label:`Success`,value:`text-success`},{label:`Info`,value:`text-info`}];var Te=class r{destroyRef=f(Q);query=M(``);matches=g(()=>ni.filter(a=>a.value.toLowerCase().includes(this.query().toLowerCase())));options=M([]);loading=M(!1);searching=M(!1);error=M(void 0);hasMore=g(()=>this.options().length<this.matches().length);pageSize=M(3);failNext=M(!1);status=M(`Ready`);loadMoreConfig={text:`Load more suggestions`,loadingText:`Loading suggestions`,retryText:`Retry request`,variant:`tonal`,color:`accent`};timer;constructor(){this.destroyRef.onDestroy(()=>clearTimeout(this.timer))}search(a){clearTimeout(this.timer),this.query.set(a),this.error.set(void 0),this.loading.set(!0),this.searching.set(!0),this.status.set(`Replacing suggestions…`),this.timer=setTimeout(()=>{this.options.set(this.matches().slice(0,this.pageSize())),this.loading.set(!1),this.searching.set(!1),this.status.set(`First page ready`)},650)}loadMore(a){if(this.loading())return;this.loading.set(!0),this.error.set(void 0),this.status.set(`Request source: `+a.source);let t=this.failNext()&&a.source!==`retry`;this.failNext.set(!1),this.timer=setTimeout(()=>{t?(this.error.set(`The next page failed. Your results are kept.`),this.status.set(`Failed page retained. Choose Retry request.`)):(this.options.set(this.matches().slice(0,this.options().length+this.pageSize())),this.status.set(a.source===`retry`?`Retry succeeded`:`Page appended`)),this.loading.set(!1)},900)}setPageSize(a){let t=Number(a);this.pageSize.set(Number.isFinite(t)?Math.max(1,Math.min(24,Math.floor(t))):3),this.search(this.query())}static ɵfac=function(t){return new(t||r)};static ɵprov=ie$1({token:r,factory:r.ɵfac})};var Bi=()=>({ariaLabel:`Project details`});function Ai(r,a){r&1&&(_(0,`p`),X$1(1,`Full width separator`),D(),xe(2,`bx-divider`)(3,`bx-divider`,7)(4,`bx-divider`,8),_(5,`bx-stack`,9)(6,`span`),X$1(7,`Start`),D(),xe(8,`bx-divider`,10),_(9,`span`),X$1(10,`End`),D()())}function Fi(r,a){if(r&1){let t=wt();_(0,`bx-popover`)(1,`bx-stack`)(2,`strong`),X$1(3,`Project details`),D(),_(4,`p`),X$1(5,`Your changes are saved in this workspace.`),D(),xe(6,`bx-input-field`,13),_(7,`button`,14),te(`click`,function(){Be$1(t),w();let o=Tt(2);return Ve(o.close())}),X$1(8,`Done`),D()()()}}function qi(r,a){if(r&1&&(_(0,`bx-stack`,11)(1,`button`,12,0),X$1(3,` Open details `),D(),Pa$1(4,Fi,9,0,`ng-template`,null,1,kr$1),D(),_(6,`p`),X$1(7,`Internal actions stay open. Escape, outside click and tabbing out dismiss the panel.`),D()),r&2){let t=Tt(5);R(`wrap`,!0),y(),R(`bxPopover`,t)(`popoverConfig`,HP(3,Bi))}}function ji(r,a){r&1&&(_(0,`bx-stack`),xe(1,`bx-skeleton`,16)(2,`bx-skeleton`,17)(3,`bx-skeleton`,18),D()),r&2&&(y(2),R(`lines`,3)(`decorative`,!1))}function Hi(r,a){r&1&&(_(0,`p`),X$1(1,`Loaded content replaces the placeholders without moving the surrounding actions.`),D())}function Ui(r,a){if(r&1){let t=wt();_(0,`button`,14),te(`click`,function(){Be$1(t);let o=w();return Ve(o.skeletonVisible.set(!o.skeletonVisible()))}),X$1(1,`Toggle loaded content`),D(),_(2,`bx-card`,15),j(3,ji,4,2,`bx-stack`)(4,Hi,2,0,`p`),D()}if(r&2){let t=w();y(3),F(t.skeletonVisible()?3:4)}}function Gi(r,a){if(r&1){let t=wt();_(0,`bx-autocomplete`,19),zA(),te(`queryChange`,function(o){Be$1(t);let c=w();return Ve(c.autocompleteDemoService.search(o))})(`loadMore`,function(o){Be$1(t);let c=w();return Ve(c.autocompleteDemoService.loadMore(o))})(`optionSelected`,function(o){Be$1(t);let c=w();return Ve(c.status.set(`Chose `+o.value))}),D(),_(1,`bx-stack`,20)(2,`button`,21),te(`click`,function(){Be$1(t);let o=w();return Ve(o.autocompleteDemoService.failNext.set(!0))}),X$1(3,` Fail next page `),D(),_(4,`button`,22),te(`click`,function(){Be$1(t);let o=w();return Ve(o.autocompleteDemoService.search(``))}),X$1(5,` Reload suggestions `),D(),_(6,`bx-checkbox`,23),hE(`checkedChange`,function(o){Be$1(t);let c=w();return LP(c.readOnly,o)||(c.readOnly=o),Ve(o)}),D(),_(7,`bx-select`,24),te(`selectionChange`,function(o){Be$1(t);let c=w();return Ve(c.autocompleteDemoService.setPageSize(o.value))}),D()(),_(8,`output`),X$1(9),D(),_(10,`p`),X$1(11,` Choose Fail next page, load another page, then Retry request. Existing suggestions remain visible. Small pages show the load-more action; larger pages enable scrolling. Search for an unknown city to see the empty state and keep free text. `),D()}if(r&2){let t=w();R(`formControl`,t.destination)(`options`,t.autocompleteDemoService.options())(`externalFiltering`,!0)(`searching`,t.autocompleteDemoService.searching())(`loading`,t.autocompleteDemoService.loading())(`hasMore`,t.autocompleteDemoService.hasMore())(`loadError`,t.autocompleteDemoService.error())(`readOnly`,t.readOnly())(`loadMoreConfig`,t.autocompleteDemoService.loadMoreConfig),qA(),y(),R(`wrap`,!0)(`gap`,2),y(),R(`disabled`,t.autocompleteDemoService.loading()||!t.autocompleteDemoService.hasMore()),y(2),R(`disabled`,t.autocompleteDemoService.loading()),y(2),bE(`checked`,t.readOnly),y(),R(`clearable`,!1)(`options`,t.pageSizes)(`value`,t.autocompleteDemoService.pageSize()),y(2),fE(`Value: `,t.destination.value||`(empty)`,` · `,t.autocompleteDemoService.options().length,` suggestions loaded · `,t.autocompleteDemoService.status(),``,t.autocompleteDemoService.failNext()?` · Next page will fail`:``)}}function Ki(r,a){if(r&1){let t=wt();_(0,`bx-chip`,30),te(`removed`,function(){let o=Be$1(t).$implicit,c=w(2);return Ve(c.removeChip(o))})(`activated`,function(){let o=Be$1(t).$implicit,c=w(2);return Ve(c.status.set(`Activated `+o))}),D()}if(r&2){let t=a.$implicit,e=w(2);R(`label`,t)(`selectable`,!1)(`removable`,!0)(`config`,e.chipConfig)}}function Qi(r,a){if(r&1){let t=wt();_(0,`bx-stack`,25)(1,`bx-chip`,26),hE(`selectedChange`,function(o){Be$1(t);let c=w();return LP(c.selected,o)||(c.selected=o),Ve(o)}),D(),$t(2,Ki,1,4,`bx-chip`,27,Fa$1),xe(4,`bx-chip`,28)(5,`bx-chip`,29),D(),_(6,`button`,14),te(`click`,function(){Be$1(t);let o=w();return Ve(o.resetChips())}),X$1(7,`Restore chips`),D(),_(8,`output`),X$1(9),D()}if(r&2){let t=w();R(`wrap`,!0)(`gap`,2),y(),R(`config`,t.chipConfig),bE(`selected`,t.selected),y(),Wt(t.removableChips()),y(2),R(`selected`,!0)(`readOnly`,!0)(`removable`,!0),y(),R(`disabled`,!0),y(4),un(`Design selected: `,t.selected())}}function Xi(r,a){r&1&&xe(0,`bx-tag`,38),r&2&&R(`focusable`,!1)}function Zi(r,a){if(r&1&&(X$1(0),xe(1,`bx-tag`,39)),r&2){let t=a.$implicit;un(``,t,` `),y(),R(`leadingNumber`,2)(`focusable`,!1)}}function Yi(r,a){r&1&&xe(0,`bx-input-field`,40)}function Ji(r,a){if(r&1){let t=wt();_(0,`bx-checkbox`,31),hE(`checkedChange`,function(o){Be$1(t);let c=w();return LP(c.multiple,o)||(c.multiple=o),Ve(o)}),D(),_(1,`bx-accordion`,32)(2,`bx-accordion-item`,33)(3,`p`),X$1(4,`Your changes are saved in this workspace.`),D(),xe(5,`bx-input-field`,34),D(),_(6,`bx-accordion-item`,35)(7,`p`),X$1(8,`Use arrows, Home and End between headings; Enter or Space toggles a section.`),D()(),xe(9,`bx-accordion-item`,36)(10,`bx-accordion-item`,37),D(),Pa$1(11,Xi,1,1,`ng-template`,null,2,kr$1)(13,Zi,2,3,`ng-template`,null,3,kr$1)(15,Yi,1,0,`ng-template`,null,4,kr$1)}if(r&2){let t=Tt(12),e=Tt(14),o=Tt(16),c=w();bE(`checked`,c.multiple),y(),R(`multiple`,c.multiple()),y(),R(`expanded`,!0)(`titleTemplate`,e)(`trailingTemplate`,t),y(7),R(`contentTemplate`,o),y(),R(`disabled`,!0)}}function $i(r,a){if(r&1){let t=wt();_(0,`bx-collapsible`,41),hE(`expandedChange`,function(o){Be$1(t);let c=w();return LP(c.expanded,o)||(c.expanded=o),Ve(o)}),_(1,`p`),X$1(2,`Your changes are saved in this workspace.`),D(),xe(3,`bx-input-field`,34),D(),_(4,`button`,14),te(`click`,function(){Be$1(t);let o=w();return Ve(o.expanded.set(!o.expanded()))}),X$1(5,`Toggle from application`),D(),_(6,`bx-collapsible`,42)(7,`p`),X$1(8,`This content remains accessible while user toggling is prevented.`),D()(),_(9,`output`),X$1(10),D()}if(r&2){let t=w();R(`region`,!0),bE(`expanded`,t.expanded),y(6),R(`expanded`,!0)(`readOnly`,!0),y(4),un(`Expanded: `,t.expanded())}}function ea(r,a){if(r&1&&xe(0,`bx-alert`,43),r&2){let t=a.$implicit;R(`tone`,t)(`title`,t)}}function ta(r,a){if(r&1){let t=wt();_(0,`button`,47),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.alertVisible.set(!0))}),X$1(1,`Restore dismissible banner`),D()}}function na(r,a){if(r&1){let t=wt();$t(0,ea,1,2,`bx-alert`,43,Fa$1),_(2,`bx-alert`,44),hE(`visibleChange`,function(o){Be$1(t);let c=w();return LP(c.alertVisible,o)||(c.alertVisible=o),Ve(o)}),te(`dismissed`,function(){Be$1(t);let o=w();return Ve(o.status.set(`Banner dismissed`))}),X$1(3,` Long content and actions wrap inside the available width. `),_(4,`button`,45),te(`click`,function(){Be$1(t);let o=w();return Ve(o.status.set(`Banner action`))}),X$1(5,`Review changes`),D()(),j(6,ta,2,0,`button`,46)}if(r&2){let t=w();Wt(t.tones),y(2),R(`dismissible`,!0),bE(`visible`,t.alertVisible),y(4),F(t.alertVisible()?-1:6)}}function ia(r,a){if(r&1){let t=wt();_(0,`bx-stack`,48)(1,`bx-checkbox`,49),hE(`checkedChange`,function(o){Be$1(t);let c=w();return LP(c.cardClickable,o)||(c.cardClickable=o),Ve(o)}),D(),_(2,`bx-checkbox`,50),hE(`checkedChange`,function(o){Be$1(t);let c=w();return LP(c.cardDisabled,o)||(c.cardDisabled=o),Ve(o)}),D(),_(3,`bx-checkbox`,51),hE(`checkedChange`,function(o){Be$1(t);let c=w();return LP(c.cardReadOnly,o)||(c.cardReadOnly=o),Ve(o)}),D(),_(4,`bx-select`,52),te(`selectionChange`,function(o){Be$1(t);let c=w();return Ve(c.cardHighlight.set(o.value??`accent`))}),D()(),_(5,`bx-grid`,53)(6,`bx-card`,54),hE(`selectedChange`,function(o){Be$1(t);let c=w();return LP(c.cardSelected,o)||(c.cardSelected=o),Ve(o)}),te(`activated`,function(){Be$1(t);let o=w();return Ve(o.status.set(`Workspace activated`))}),_(7,`p`),X$1(8,`Press anywhere, or use Enter and Space. Selection emits the chosen token through the shared surface lighting.`),D()(),_(9,`button`,55),te(`activated`,function(){Be$1(t);let o=w();return Ve(o.status.set(`Reports opened`))}),_(10,`p`),X$1(11,`A native button card provides a single action without a selected state.`),D()(),_(12,`bx-card`,56)(13,`p`),X$1(14,`A disabled card retains its content and selection but cannot be activated or focused.`),D()(),_(15,`bx-card`,57)(16,`p`),X$1(17,`Read-only selection remains focusable and keeps its appearance.`),D()(),_(18,`bx-card`,58)(19,`p`),X$1(20,`Ordinary cards remain containers for independent actions.`),D(),_(21,`button`,59),te(`click`,function(){Be$1(t);let o=w();return Ve(o.status.set(`Project opened`))}),X$1(22,`Open project`),D()()(),_(23,`output`),X$1(24),D()}if(r&2){let t=w();R(`wrap`,!0),y(),bE(`checked`,t.cardClickable),y(),bE(`checked`,t.cardDisabled),y(),bE(`checked`,t.cardReadOnly),y(),R(`options`,t.cardHighlightOptions)(`clearable`,!1)(`value`,t.cardHighlight()),y(2),R(`clickable`,t.cardClickable())(`disabled`,t.cardDisabled())(`readOnly`,t.cardReadOnly())(`highlightColor`,t.cardHighlight()),bE(`selected`,t.cardSelected),y(3),R(`highlightColor`,t.cardHighlight()),y(3),R(`clickable`,!0)(`disabled`,!0)(`selected`,!0),y(3),R(`clickable`,!0)(`readOnly`,!0)(`selected`,!0)(`highlightColor`,t.cardHighlight()),y(9),uE(`Workspace selected: `,t.cardSelected(),` · Highlight: `,t.cardHighlight())}}function aa(r,a){if(r&1){let t=wt();_(0,`bx-container`,5)(1,`bx-stack`)(2,`bx-stack`,60)(3,`h3`),X$1(4,`Workspace overview`),D(),_(5,`button`,14),te(`click`,function(){Be$1(t);let o=w();return Ve(o.status.set(`New project requested`))}),X$1(6,`New project`),D()(),_(7,`bx-grid`,61)(8,`bx-card`,62)(9,`p`),X$1(10,`Your changes are saved in this workspace.`),D(),_(11,`button`,59),te(`click`,function(){Be$1(t);let o=w();return Ve(o.status.set(`Opened project`))}),X$1(12,`Open project`),D()(),_(13,`bx-card`,63)(14,`bx-stack`,64),xe(15,`bx-chip`,65),_(16,`p`),X$1(17,`Cards and layout share the global material and semantic palette.`),D()()(),_(18,`bx-card`,66)(19,`p`),X$1(20,`Resize this page or increase browser zoom to see the grid adapt.`),D()()()()()}r&2&&(y(14),R(`gap`,2),y(),R(`selectable`,!1))}var Ze=class r{injector=f(Ie);autocompleteDemoService=f(Te);chips=nf(mT);pageSizes=ii;selected=M(!1);removableChips=M([`Angular`,`Design`,`Accessibility`]);tones=[`default`,`info`,`danger`,`warning`,`success`];skeletonVisible=M(!0);expanded=M(!1);multiple=M(!1);readOnly=M(!1);alertVisible=M(!0);status=M(`Ready`);destination=new rI(``);chipConfig={color:`accent`};cardHighlightOptions=ai;cardHighlight=M(`accent`);cardClickable=M(!0);cardDisabled=M(!1);cardReadOnly=M(!1);cardSelected=M(!1);example=b.required();constructor(){ce(()=>{this.example()===`autocomplete`&&this.autocompleteDemoService.search(``)})}removeChip(a){let t=this.removableChips().indexOf(a);this.removableChips.update(e=>e.filter(o=>o!==a)),this.status.set(`Removed `+a),Ze$1(()=>{let e=this.chips().slice(1);e[Math.min(t,e.length-1)]?.focus()},{injector:this.injector})}resetChips(){this.removableChips.set([`Angular`,`Design`,`Accessibility`])}static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-essentials-examples`]],viewQuery:function(t,e){t&1&&Xt(e.chips,mT,5),t&2&&ft()},hostAttrs:[`data-bx-light-scope`,``],inputs:{example:[1,`example`]},features:[Qt([Te])],decls:15,vars:2,consts:[[`popover`,`bxPopover`],[`details`,``],[`projectStatus`,``],[`projectHeading`,``],[`lazyContent`,``],[`size`,`full`,`landmark`,`region`,`ariaLabel`,`Workspace content`,1,`container-demo`],[`role`,`status`],[`label`,`Continue`],[`lineStyle`,`dashed`],[`direction`,`horizontal`,`align`,`stretch`],[`orientation`,`vertical`],[`direction`,`horizontal`,3,`wrap`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`bxPopover`,`popoverConfig`],[`label`,`Project note`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`title`,`Project details`],[`shape`,`circle`,`height`,`3rem`],[`label`,`Loading content`,3,`lines`,`decorative`],[`shape`,`rectangle`,`height`,`5rem`],[`label`,`Destination`,`placeholder`,`Type a city or a custom destination`,`loadingText`,`Loading suggestions`,`emptyText`,`No suggestions. Enter your own destination.`,3,`queryChange`,`loadMore`,`optionSelected`,`formControl`,`options`,`externalFiltering`,`searching`,`loading`,`hasMore`,`loadError`,`readOnly`,`loadMoreConfig`],[`direction`,`horizontal`,`align`,`center`,3,`wrap`,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`bx-button`,``,`type`,`button`,`variant`,`text`,3,`click`,`disabled`],[`label`,`Read only`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Page size`,`subscriptSizing`,`dynamic`,1,`autocomplete-page-size`,3,`selectionChange`,`clearable`,`options`,`value`],[`direction`,`horizontal`,3,`wrap`,`gap`],[`label`,`Design`,3,`selectedChange`,`config`,`selected`],[3,`label`,`selectable`,`removable`,`config`],[`label`,`Read only`,3,`selected`,`readOnly`,`removable`],[`label`,`Disabled`,3,`disabled`],[3,`removed`,`activated`,`label`,`selectable`,`removable`,`config`],[`label`,`Allow multiple open panels`,3,`checkedChange`,`checked`],[3,`multiple`],[`title`,`Project details`,3,`expanded`,`titleTemplate`,`trailingTemplate`],[`label`,`Project name`],[`title`,`Keyboard and focus`],[`title`,`Lazy content`,3,`contentTemplate`],[`title`,`Unavailable section`,3,`disabled`],[`text`,`Saved`,`size`,`small`,3,`focusable`],[`size`,`small`,3,`leadingNumber`,`focusable`],[`label`,`Created when opened`],[`title`,`Project details`,3,`expandedChange`,`region`,`expanded`],[`title`,`Read-only open section`,3,`expanded`,`readOnly`],[`message`,`Your changes are saved in this workspace.`,3,`tone`,`title`],[`tone`,`info`,`title`,`Project details`,`dismissLabel`,`Dismiss notification`,`dismissFocusTarget`,`restore-banner`,3,`visibleChange`,`dismissed`,`dismissible`,`visible`],[`type`,`button`,`bx-button`,``,`bxAlertActions`,``,`variant`,`tonal`,3,`click`],[`type`,`button`,`id`,`restore-banner`,`bx-button`,``,`variant`,`tonal`],[`type`,`button`,`id`,`restore-banner`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`direction`,`horizontal`,`align`,`center`,3,`wrap`],[`label`,`Clickable`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Disable selectable card`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Read-only selectable card`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Highlight token`,`subscriptSizing`,`dynamic`,3,`selectionChange`,`options`,`clearable`,`value`],[`minColumnWidth`,`14rem`],[`title`,`Selectable workspace`,`ariaLabel`,`Select workspace`,3,`selectedChange`,`activated`,`clickable`,`disabled`,`readOnly`,`highlightColor`,`selected`],[`type`,`button`,`bx-card`,``,`title`,`Open reports`,`ariaLabel`,`Open reports`,3,`activated`,`highlightColor`],[`title`,`Unavailable workspace`,`ariaLabel`,`Unavailable workspace`,3,`clickable`,`disabled`,`selected`],[`title`,`Fixed workspace`,`ariaLabel`,`Fixed workspace`,3,`clickable`,`readOnly`,`selected`,`highlightColor`],[`title`,`Project details`,`subtitle`,`Content container`],[`type`,`button`,`bx-button`,``,`bxCardFooter`,``,`variant`,`tonal`,3,`click`],[`direction`,`responsive`,`justify`,`between`,`align`,`center`],[`minColumnWidth`,`12rem`],[`title`,`Project details`,`subtitle`,`Outlined surface`],[`title`,`Team activity`,`variant`,`elevated`],[3,`gap`],[`label`,`Ready`,3,`selectable`],[`title`,`Notes`,`variant`,`filled`]],template:function(t,e){if(t&1&&(_(0,`bx-stack`)(1,`p`),X$1(2,`Use Appearance to try themes, materials and reduced motion.`),D(),j(3,Ai,11,0)(4,qi,8,4)(5,Ui,5,1)(6,Gi,12,21)(7,Qi,10,9)(8,Ji,17,7)(9,$i,11,5)(10,na,7,3)(11,ia,25,22)(12,aa,21,2,`bx-container`,5),_(13,`output`,6),X$1(14),D()()),t&2){let o;y(3),F((o=e.example())===`divider`?3:o===`popover`?4:o===`skeleton`?5:o===`autocomplete`?6:o===`chip`?7:o===`accordion`?8:o===`collapsible`?9:o===`alert`?10:o===`card`?11:12),y(11),fe(e.status())}},dependencies:[Hie,jie,uB,ko$1,me,Hr,fo$1,At,aT,dT,pT,mT,Zd,xb,bT,hT,gT,RT,vT,xT,sT],styles:[`
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
}`]})};var oi=[`mod`,`shift`,`k`];var ri=[`mod`,`k`];var li=[`mod`,`shift`,`v`];var si={mac:[`command`,`shift`,`d`],windows:[`ctrl`,`shift`,`d`],linux:[`alt`,`shift`,`d`],ios:[`command`,`shift`,`d`],android:[`ctrl`,`shift`,`d`],default:[`mod`,`alt`,`d`]};var ci=[`mac`,`windows`,`linux`,`ios`,`android`,`default`];var oa=()=>[`command`,`ctrl`,`option`,`shift`];function ra(r,a){if(r&1){let t=wt();_(0,`bx-menu`,8)(1,`bx-menu-item`,9),te(`action`,function(){Be$1(t);let o=w();return Ve(o.activate(`View opened`))}),D(),_(2,`bx-menu-item`,10),te(`action`,function(){Be$1(t);let o=w();return Ve(o.activate(`Project duplicated`))}),D(),_(3,`bx-menu-item`,11),te(`action`,function(){Be$1(t);let o=w();return Ve(o.activate(`Delete requested`))}),D()()}if(r&2){let t=w();y(),R(`shortcut`,t.viewShortcut)(`disabled`,t.viewDisabled.value),y(),R(`shortcut`,t.duplicateShortcut),y(),R(`danger`,!0)}}function la(r,a){if(r&1&&(_(0,`section`,7)(1,`h4`),X$1(2),D(),_(3,`p`),X$1(4,` Portable: `),_(5,`kbd`),X$1(6),D()(),_(7,`p`),X$1(8,` OS override: `),_(9,`kbd`),X$1(10),D()(),_(11,`p`),X$1(12,` Modifiers: `),_(13,`kbd`),X$1(14),D()()()),r&2){let t=a.$implicit,e=w();y(2),fe(t==="default"?`Unknown / server`:t),y(4),fe(e.bxShortcutService.resolve(e.openShortcut,t)?.join(` + `)),y(4),fe(e.bxShortcutService.resolve(e.duplicateShortcut,t)?.join(` + `)),y(4),fe(e.bxShortcutService.resolve(HP(4,oa),t)?.join(` + `))}}var Ye=class r{bxShortcutService=f(rb);menu=Nt(_l);openShortcut=oi;sequencePrefix=ri;viewShortcut=li;duplicateShortcut=si;platforms=ci;viewDisabled=new rI(!1,{nonNullable:!0});typing=new rI(``,{nonNullable:!0});waitingForView=M(!1);status=M(`Ready. Open the menu with its button or keyboard shortcut.`);sequenceTimer;actionCount=0;constructor(){f(Q).onDestroy(()=>this.resetSequence())}onKeydown(a){if(this.bxShortcutService.matches(a,this.openShortcut)){a.preventDefault(),this.resetSequence(),this.menu()?.open(!0),this.status.set(`Menu opened by shortcut. Use arrow keys, Enter or Escape.`);return}if(this.bxShortcutService.matches(a,this.sequencePrefix)){a.preventDefault(),this.resetSequence(),this.waitingForView.set(!0),this.sequenceTimer=setTimeout(()=>this.resetSequence(),2e3);return}if(this.waitingForView()){if([`Meta`,`Control`,`Alt`,`Shift`].includes(a.key)||a.repeat)return;let t=this.bxShortcutService.matches(a,`v`);if(this.resetSequence(),t){a.preventDefault(),this.menu()?.open(!0),this.status.set(`Menu opened by sequence.`);return}}!this.viewDisabled.value&&this.bxShortcutService.matches(a,this.viewShortcut)?(a.preventDefault(),this.activate(`View opened`)):this.bxShortcutService.matches(a,this.duplicateShortcut)&&(a.preventDefault(),this.activate(`Project duplicated`))}activate(a){a===`View opened`&&this.viewDisabled.value||(this.resetSequence(),this.status.set(`${a} \xB7 action ${++this.actionCount}`),this.menu()?.close(!0))}resetSequence(){clearTimeout(this.sequenceTimer),this.sequenceTimer=void 0,this.waitingForView.set(!1)}static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-menu-shortcut-examples`]],viewQuery:function(t,e){t&1&&Xt(e.menu,_l,5),t&2&&ft()},hostBindings:function(t,e){t&1&&te(`keydown`,function(c){return e.onKeydown(c)},Yo$1)(`pointerdown`,function(){return e.resetSequence()},Yo$1)(`blur`,function(){return e.resetSequence()},xR)},decls:38,vars:11,consts:[[`actions`,``],[1,`shortcut-demo`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`menuPlacement`,`bottom`,`menuLabel`,`Project actions`,3,`bxMenuTrigger`,`menuHover`],[`role`,`status`],[`label`,`Disable Open view (click and shortcut)`,3,`formControl`],[`label`,`Type here to try the editable-control guard`,3,`formControl`],[1,`platform-previews`],[1,`platform-preview`],[1,`shortcut-menu`],[`label`,`Open view`,`icon`,`external-link`,3,`action`,`shortcut`,`disabled`],[`label`,`Duplicate project`,`icon`,`copy`,3,`action`,`shortcut`],[`label`,`Delete project`,`icon`,`trash-2`,3,`action`,`danger`]],template:function(t,e){if(t&1&&(_(0,`div`,1)(1,`p`)(2,`code`),X$1(3,`shortcut`),D(),X$1(4,` displays a hint. This example also handles keyboard events using `),_(5,`code`),X$1(6,`BxShortcutService.matches()`),D(),X$1(7,`.`),D(),_(8,`p`),X$1(9,`One lit surface follows enabled rows with pointer or keyboard focus. Navigate quickly to inspect retargeting, including the danger item.`),D(),_(10,`p`),X$1(11,`On this device, `),_(12,`code`),X$1(13,`mod`),D(),X$1(14),D(),_(15,`div`)(16,`button`,2),X$1(17),D()(),_(18,`p`),X$1(19),D(),_(20,`p`,3),X$1(21),D(),Pa$1(22,ra,4,4,`ng-template`,null,0,kr$1),_(24,`bx-checkbox`,4),zA(),D(),_(25,`bx-input-field`,5),zA(),D(),_(26,`p`),X$1(27,` The Open view shortcut works while this demo is mounted, including when the menu is closed. Shortcuts ignore typing fields, held-key repeats and composition. `),D(),_(28,`h3`),X$1(29,`Defaults across platforms`),D(),_(30,`p`),X$1(31,` These previews use the same service and definitions. `),_(32,`code`),X$1(33,`mod`),D(),X$1(34,` avoids repeating OS mappings; explicit overrides are available when bindings differ. `),D(),_(35,`div`,6),$t(36,la,15,5,`section`,7,Fa$1),D()()),t&2){let o=Tt(23);y(14),uE(` uses `,e.bxShortcutService.resolve(`mod`)?.join(``),` (detected platform: `,e.bxShortcutService.platform(),`).`),y(2),R(`bxMenuTrigger`,o)(`menuHover`,!1),B(`aria-keyshortcuts`,e.bxShortcutService.toAriaKeyshortcuts(e.openShortcut)),y(),un(` Project actions · `,e.bxShortcutService.resolve(e.openShortcut)?.join(` + `),` `),y(2),uE(` Press `,e.bxShortcutService.resolve(e.openShortcut)?.join(` + `),` together to open the menu. Or press `,e.bxShortcutService.resolve(e.sequencePrefix)?.join(` + `),`, release the keys, then press V within two seconds. Escape, another key, a pointer press or leaving the window cancels the sequence. `),y(2),fe(e.waitingForView()?`Waiting for V…`:e.status()),y(3),R(`formControl`,e.viewDisabled),qA(),y(),R(`formControl`,e.typing),qA(),y(11),Wt(e.platforms)}},dependencies:[me,Hr,fo$1,Hie,jie,uB,hb,bb,_l],styles:[`
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
}`]})};var sa=r=>({maxVisibleItems:r});function ca(r,a){if(r&1){let t=wt();_(0,`bx-page-footer`)(1,`bx-stack`,12)(2,`button`,13),te(`click`,function(){Be$1(t);let o=w();return Ve(o.result.set(`Footer action completed.`))}),X$1(3,`Try footer action`),D(),_(4,`span`,14),X$1(5),D()()()}if(r&2){let t=w();y(),R(`gap`,3),y(4),fe(t.result())}}var Je=class r{title=M(`Workspace overview`);description=M(`A shared heading and consistent gutters for every page.`);breadcrumbsAfterControl=new rI(1,{nonNullable:!0});breadcrumbsAfter=eJ(this.breadcrumbsAfterControl.valueChanges,{initialValue:this.breadcrumbsAfterControl.value});nesting=M(1);automatic=M(!1);breadcrumbLimit=M(3);showFooter=M(!0);result=M(`No action yet.`);nestingOptions=[{label:`Root page`,value:0},{label:`One nesting`,value:1},{label:`Two nestings`,value:2},{label:`Three nestings`,value:3}];previewBreadcrumbs=g(()=>[...this.nesting()>=3?[{label:`Home`,route:`/home`}]:[],{label:`Components`,route:`/components`},...this.nesting()>=1?[{label:`Layout`,route:`/components/layout`}]:[],...this.nesting()>=2?[{label:`Page container`,route:`/components/layout/page-container`}]:[]]);constructor(){this.breadcrumbsAfterControl.valueChanges.pipe(Fl(K0),mf()).subscribe(()=>{let a=this.breadcrumbsAfterControl.value,t=Math.max(0,Math.trunc(Number(a))||0);t!==a&&this.breadcrumbsAfterControl.setValue(t)})}static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-page-examples`]],decls:16,vars:25,consts:[[3,`gap`],[`direction`,`responsive`,3,`gap`],[`label`,`Preview title`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Description`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Preview nesting`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Show breadcrumbs after nesting`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`min`,`formControl`],[`label`,`Visible breadcrumb entries`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`min`,`ngModel`],[`label`,`Use current route breadcrumbs`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Show footer`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`size`,`full`,1,`page-preview`,3,`breadcrumbs`,`breadcrumbsAfter`,`breadcrumbConfig`],[`sectionTitle`,`Primitives`,3,`pageTitle`,`pageDescription`,`autoResolveTitlesFromNavigation`,`headingLevel`],[`title`,`Page content`,`message`,`This section grows naturally with its content. The page keeps one scroll surface and the same responsive gutters.`],[`direction`,`responsive`,`align`,`center`,3,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`role`,`status`]],template:function(t,e){t&1&&(_(0,`bx-stack`,0)(1,`bx-stack`,1)(2,`bx-input-field`,2),zA(),hE(`ngModelChange`,function(c){return LP(e.title,c)||(e.title=c),c}),D(),_(3,`bx-input-field`,3),zA(),hE(`ngModelChange`,function(c){return LP(e.description,c)||(e.description=c),c}),D()(),_(4,`bx-stack`,1)(5,`bx-select`,4),zA(),hE(`ngModelChange`,function(c){return LP(e.nesting,c)||(e.nesting=c),c}),D(),_(6,`bx-input-field`,5),zA(),D(),_(7,`bx-input-field`,6),zA(),hE(`ngModelChange`,function(c){return LP(e.breadcrumbLimit,c)||(e.breadcrumbLimit=c),c}),D()(),_(8,`bx-stack`,1)(9,`bx-slide-toggle`,7),zA(),hE(`ngModelChange`,function(c){return LP(e.automatic,c)||(e.automatic=c),c}),D(),_(10,`bx-slide-toggle`,8),zA(),hE(`ngModelChange`,function(c){return LP(e.showFooter,c)||(e.showFooter=c),c}),D()(),_(11,`bx-page-container`,9),xe(12,`bx-page-header`,10),_(13,`bx-page-content`),xe(14,`bx-alert`,11),D(),j(15,ca,6,2,`bx-page-footer`),D()()),t&2&&(R(`gap`,5),y(),R(`gap`,4),y(),bE(`ngModel`,e.title),qA(),y(),bE(`ngModel`,e.description),qA(),y(),R(`gap`,4),y(),R(`clearable`,!1)(`options`,e.nestingOptions),bE(`ngModel`,e.nesting),qA(),y(),R(`min`,0)(`formControl`,e.breadcrumbsAfterControl),qA(),y(),R(`min`,2),bE(`ngModel`,e.breadcrumbLimit),qA(),y(),R(`gap`,4),y(),bE(`ngModel`,e.automatic),qA(),y(),bE(`ngModel`,e.showFooter),qA(),y(),R(`breadcrumbs`,e.automatic()?void 0:e.previewBreadcrumbs())(`breadcrumbsAfter`,e.breadcrumbsAfter())(`breadcrumbConfig`,jc(23,sa,e.breadcrumbLimit())),y(),R(`pageTitle`,e.title())(`pageDescription`,e.description())(`autoResolveTitlesFromNavigation`,!1)(`headingLevel`,2),y(3),F(e.showFooter()?15:-1))},dependencies:[zie,jie,aB,Hie,uB,dT,me,fo$1,At,yo$1,kT,CT,ST,El,xT],styles:[`
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
}`]})};function da(r,a){if(r&1){let t=wt();_(0,`bx-input-field`,13),zA(),te(`ngModelChange`,function(o){Be$1(t);let c=w();return Ve(c.minimum.set(o))}),D(),_(1,`bx-input-field`,14),zA(),te(`ngModelChange`,function(o){Be$1(t);let c=w();return Ve(c.maximum.set(o))}),D()}if(r&2){let t=w();R(`min`,0)(`ngModel`,t.minimum()),qA(),y(),R(`min`,0)(`ngModel`,t.maximum()),qA()}}var $e=class r{edges=[{label:`Right edge (width)`,value:`right`},{label:`Left edge (width)`,value:`left`},{label:`Bottom edge (height)`,value:`bottom`},{label:`Top edge (height)`,value:`top`}];edge=M(`right`);size=M(180);minimum=M(60);maximum=M(280);disableShrink=M(!0);customBounds=M(!1);status=M(`Drag the inner edge, or focus it and use the arrow keys.`);horizontal=g(()=>this.edge()===`left`||this.edge()===`right`);changeEdge(a){this.edge.set(a),this.size.set(180)}record(a,t){this.status.set(`${a.source} resize ${t===`start`?`started`:a.canceled?`canceled`:`completed`} at ${Math.round(a.value)} px.`)}static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-resize-handle-examples`]],decls:22,vars:40,consts:[[`container`,``],[`target`,``],[`handle`,`bxResizeHandle`],[1,`resize-demo-controls`],[`label`,`Resize edge`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`resize-demo-actions`],[`label`,`Prevent shrinking below initial size`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Use explicit pixel limits`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`role`,`status`],[1,`resize-demo-container`],[`aria-label`,`Resizable example surface`,1,`resize-demo-target`],[`bxResizeHandle`,``,1,`resize-demo-handle`,3,`resizeValueChange`,`resizeStart`,`resizeEnd`,`resizeEdge`,`resizeTarget`,`resizeContainer`,`resizeInitialSize`,`resizeMinSize`,`resizeMaxSize`,`resizeDisableShrink`,`resizeLabel`,`resizeValue`],[`type`,`number`,`label`,`Minimum size (px)`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`min`,`ngModel`],[`type`,`number`,`label`,`Maximum size (px)`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`min`,`ngModel`]],template:function(t,e){if(t&1){let o=wt();_(0,`div`,3)(1,`bx-select`,4),zA(),te(`ngModelChange`,function(s){return e.changeEdge(s)}),D(),j(2,da,2,4),D(),_(3,`div`,5)(4,`bx-slide-toggle`,6),zA(),te(`ngModelChange`,function(s){return e.disableShrink.set(s)}),D(),_(5,`bx-slide-toggle`,7),zA(),te(`ngModelChange`,function(s){return e.customBounds.set(s)}),D(),_(6,`button`,8),te(`click`,function(){return e.size.set(180)}),X$1(7,`Reset to 180 px`),D()(),_(8,`p`,9),X$1(9),D(),_(10,`p`),X$1(11),D(),_(12,`div`,10,0)(14,`section`,11,1)(16,`p`),X$1(17),D(),_(18,`div`,12,2),hE(`resizeValueChange`,function(s){return Be$1(o),LP(e.size,s)||(e.size=s),Ve(s)}),te(`resizeStart`,function(s){return e.record(s,`start`)})(`resizeEnd`,function(s){return e.record(s,`end`)}),D()()(),_(20,`p`),X$1(21,` Arrow keys move the edge by 10 px; Shift moves by 50 px. Home and End use the bounds. Double-click the handle or press Enter to restore its original size. Escape cancels an active gesture.
`),D()}if(t&2){let o=Tt(13),c=Tt(15),s=Tt(19);y(),R(`clearable`,!1)(`options`,e.edges)(`ngModel`,e.edge()),qA(),y(),F(e.customBounds()?2:-1),y(2),R(`ngModel`,e.disableShrink()),qA(),y(),R(`ngModel`,e.customBounds()),qA(),y(4),fe(e.status()),y(2),pE(``,e.size(),` px · effective minimum `,s.minSize(),` px · effective maximum `,s.maxSize(),` px`),y(3),_e(`width`,e.horizontal()?e.size()+`px`:`100%`)(`height`,e.horizontal()?`100%`:e.size()+`px`),ae(`is-horizontal`,e.horizontal())(`is-vertical`,!e.horizontal())(`edge-left`,e.edge()===`left`)(`edge-top`,e.edge()===`top`),y(3),un(`Resize from the `,e.edge(),` edge.`),y(),ae(`handle-left`,e.edge()===`left`)(`handle-right`,e.edge()===`right`)(`handle-top`,e.edge()===`top`)(`handle-bottom`,e.edge()===`bottom`),R(`resizeEdge`,e.edge())(`resizeTarget`,c)(`resizeContainer`,o)(`resizeInitialSize`,180)(`resizeMinSize`,e.customBounds()?e.minimum():void 0)(`resizeMaxSize`,e.customBounds()?e.maximum():void 0)(`resizeDisableShrink`,e.disableShrink())(`resizeLabel`,e.horizontal()?`Resize example width`:`Resize example height`),bE(`resizeValue`,e.size)}},dependencies:[zie,jie,aB,me,fo$1,At,yo$1,Dl],styles:[`
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
}`]})};var Me=class r{query=M(``);completedQuery=M(``);results=M([]);loading=M(!1);error=M(void 0);requests=M([]);controller;constructor(){f(Q).onDestroy(()=>this.controller?.abort()),this.search(``)}async search(a,t=!1){this.controller?.abort();let e$1=new AbortController;this.controller=e$1,this.query.set(a),this.loading.set(!0),this.error.set(void 0);try{if(await X(250,e$1.signal),this.record(`Request: ${a||`(all components)`}`),await X(800,e$1.signal),e$1.signal.aborted)return;if(t)throw new Error(`Simulated request failure`);let o=a.trim().toLocaleLowerCase(),c=e.map(s=>s.title).filter(s=>s.toLocaleLowerCase().includes(o));this.results.set(c),this.completedQuery.set(a),this.record(`Success: ${c.length} results`)}catch{if(e$1.signal.aborted)return;this.error.set({key:`searchError`}),this.record(`Failed: previous results retained; retry the same query`)}finally{this.controller===e$1&&this.loading.set(!1)}}record(a){this.requests.update(t=>[a,...t].slice(0,8))}static ɵfac=function(t){return new(t||r)};static ɵprov=ie$1({token:r,factory:r.ɵfac})};var ma=()=>({key:`searchLabel`});var pa=()=>({key:`searchPlaceholder`});var di=()=>({key:`searchLoading`});var ua=()=>({key:`searchClear`});var ga=()=>({key:`retry`});function ba(r,a){if(r&1&&(_(0,`li`),X$1(1),D()),r&2){let t=a.$implicit;y(),fe(t)}}function ya(r,a){if(r&1&&(_(0,`li`,11),X$1(1),D()),r&2){let t=w(2);y(),fe(t.emptyText())}}function _a(r,a){if(r&1&&j(0,ya,2,1,`li`,11),r&2){let t=w();F(!t.mockSearchStore.loading()&&!t.mockSearchStore.error()?0:-1)}}function ha(r,a){if(r&1&&(_(0,`li`),X$1(1),D()),r&2){let t=a.$implicit;y(),fe(t)}}var et=class r{demoI18nService=f(L);mockSearchStore=f(Me);showLoadingText=M(!1);showLabel=M(!0);compact=M(!1);readOnly=M(!1);disabled=M(!1);emptyText=g(()=>(this.demoI18nService.version(),this.demoI18nService.translate(`searchEmpty`)));retryConfig={variant:`tonal`,color:`accent`};changeLoadingText(a){this.showLoadingText.set(a),a&&!this.mockSearchStore.loading()&&!this.readOnly()&&!this.disabled()&&this.mockSearchStore.search(this.mockSearchStore.query())}static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-search-examples`]],features:[Qt([Me,L,{provide:Se,useExisting:L}])],decls:22,vars:29,consts:[[1,`search-demo`],[`subscriptSizing`,`dynamic`,3,`search`,`retry`,`label`,`placeholder`,`compact`,`value`,`loading`,`loadError`,`loadingLabel`,`loadingAriaLabel`,`clearLabel`,`retryLabel`,`retryConfig`,`readOnly`,`disabled`],[1,`search-actions`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`label`,`Show label`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Compact`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Show loading text`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Readonly`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Disabled`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`aria-label`,`Search results`,1,`search-results`],[`aria-label`,`Request events`,1,`search-events`],[`role`,`status`]],template:function(t,e){t&1&&(_(0,`div`,0)(1,`bx-search-input`,1),te(`search`,function(c){return e.mockSearchStore.search(c)})(`retry`,function(c){return e.mockSearchStore.search(c)}),D(),_(2,`div`,2)(3,`button`,3),te(`click`,function(){return e.mockSearchStore.search(e.mockSearchStore.query(),!0)}),X$1(4,` Fail this search `),D(),_(5,`bx-checkbox`,4),hE(`checkedChange`,function(c){return LP(e.showLabel,c)||(e.showLabel=c),c}),D(),_(6,`bx-checkbox`,5),hE(`checkedChange`,function(c){return LP(e.compact,c)||(e.compact=c),c}),D(),_(7,`bx-checkbox`,6),te(`checkedChange`,function(c){return e.changeLoadingText(c)}),D(),_(8,`bx-checkbox`,7),hE(`checkedChange`,function(c){return LP(e.readOnly,c)||(e.readOnly=c),c}),D(),_(9,`bx-checkbox`,8),hE(`checkedChange`,function(c){return LP(e.disabled,c)||(e.disabled=c),c}),D()(),_(10,`p`),X$1(11,` Requests debounce for 250ms and take 800ms. Type quickly to cancel older requests, or enter an unmatched term for empty results. Failure keeps the last successful results. Use Retry request to try the same query again. Enabling Show loading text previews another request. When a label is displayed, compact mode is automatically enabled regardless of the Compact setting. `),D(),_(12,`section`,9)(13,`p`),X$1(14),D(),_(15,`ul`),$t(16,ba,2,1,`li`,null,Fa$1,!1,_a,1,1),D()(),_(19,`ul`,10),$t(20,ha,2,1,`li`,null,ja$1),D()()),t&2&&(y(),R(`label`,e.showLabel()?HP(23,ma):void 0)(`placeholder`,HP(24,pa))(`compact`,e.compact())(`value`,e.mockSearchStore.query())(`loading`,e.mockSearchStore.loading())(`loadError`,e.mockSearchStore.error())(`loadingLabel`,e.showLoadingText()?HP(25,di):void 0)(`loadingAriaLabel`,HP(26,di))(`clearLabel`,HP(27,ua))(`retryLabel`,HP(28,ga))(`retryConfig`,e.retryConfig)(`readOnly`,e.readOnly())(`disabled`,e.disabled()),y(2),R(`disabled`,e.mockSearchStore.loading()||e.disabled()||e.readOnly()),y(2),bE(`checked`,e.showLabel),y(),bE(`checked`,e.compact),y(),R(`checked`,e.showLoadingText()),y(),bE(`checked`,e.readOnly),y(),bE(`checked`,e.disabled),y(3),B(`aria-busy`,e.mockSearchStore.loading()),y(2),uE(`Last completed search: `,e.mockSearchStore.completedQuery()||`all components`,` · `,e.mockSearchStore.results().length,` results`),y(2),Wt(e.mockSearchStore.results()),y(4),Wt(e.mockSearchStore.requests()))},dependencies:[me,Hr,kn],styles:[`
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
// In your shell: <bx-side-nav />`;var ie=class r{languages=ut$1;version=M(0);language=M(`en`);translate(a){return this.version(),bt[this.language()]?.[a]??a}setLanguage(a){a===null||a===this.language()||(this.language.set(a),this.version.update(t=>t+1))}static ɵfac=function(t){return new(t||r)};static ɵprov=ie$1({token:r,factory:r.ɵfac})};function va(r,a){if(r&1&&(_(0,`strong`),X$1(1),D()),r&2){let t=w(2);y(),fe(t.text().studio)}}function xa(r,a){if(r&1&&(xe(0,`bx-icon`,19),j(1,va,2,1,`strong`)),r&2){let t=a.$implicit,e=a.mobile;y(),F(!t&&!e?1:-1)}}function fa(r,a){if(r&1&&(_(0,`span`),X$1(1),D()),r&2){let t=w(2);y(),fe(t.text().admin)}}function Sa(r,a){if(r&1&&(xe(0,`bx-icon`,20),j(1,fa,2,1,`span`)),r&2){let t=a.$implicit;y(),F(t?-1:1)}}function Ca(r,a){if(r&1){let t=wt();_(0,`button`,21),te(`click`,function(o){Be$1(t),w();let c=Tt(19);return Ve(c.open(o))}),X$1(1),D()}if(r&2){let t=w();y(),fe(t.text().open)}}function wa(r,a){if(r&1&&xe(0,`bx-icon`,22),r&2){let t=w().$implicit;R(`name`,t.icon?.name??`circle`)}}function ka(r,a){if(r&1&&(_(0,`span`),X$1(1),D(),_(2,`small`,23),X$1(3,`↗`),D()),r&2){let t=w().$implicit;y(),fe(t.label)}}function Ea(r,a){if(r&1&&(j(0,wa,1,1,`bx-icon`,22),j(1,ka,4,1)),r&2){let t=a.collapsed,e=w();F(t||e.icons()?0:-1),y(),F(t?-1:1)}}var nt=class r{navigationDemoI18nService=f(ie);groups=g(()=>{let a=tt(`/components/side-nav`,this.navigationDemoI18nService);if(!this.longLabels())return a;let t=this.navigationDemoI18nService.translate(`demo.longSuffix`);return a.map(e=>s$1(r$1({},e),{title:`${e.title} ${t}`,items:this.extendLabels(e.items,t)}))});text=g(()=>({right:this.navigationDemoI18nService.translate(`demo.right`),rail:this.navigationDemoI18nService.translate(`demo.rail`),mobile:this.navigationDemoI18nService.translate(`demo.mobile`),inlineMode:this.navigationDemoI18nService.translate(`demo.inlineMode`),search:this.navigationDemoI18nService.translate(`demo.search`),icons:this.navigationDemoI18nService.translate(`demo.icons`),breadcrumbLimit:this.navigationDemoI18nService.translate(`demo.breadcrumbLimit`),longLabels:this.navigationDemoI18nService.translate(`demo.longLabels`),rtl:this.navigationDemoI18nService.translate(`demo.rtl`),custom:this.navigationDemoI18nService.translate(`demo.custom`),height:this.navigationDemoI18nService.translate(`demo.height`),language:this.navigationDemoI18nService.translate(`demo.language`),instructions:this.navigationDemoI18nService.translate(`demo.instructions`),studio:this.navigationDemoI18nService.translate(`demo.studio`),admin:this.navigationDemoI18nService.translate(`demo.admin`),title:this.navigationDemoI18nService.translate(`demo.title`),description:this.navigationDemoI18nService.translate(`demo.description`),open:this.navigationDemoI18nService.translate(`demo.open`),keyboard:this.navigationDemoI18nService.translate(`demo.keyboard`),routes:this.navigationDemoI18nService.translate(`demo.routes`)}));routeExample=pi;right=M(!1);collapsed=M(!1);mobile=M(!1);searchable=M(!0);icons=M(!0);longLabels=M(!1);rtl=M(!1);custom=M(!1);height=M(860);breadcrumbLimit=M(3);selected=M(void 0);selection=g(()=>{let a=this.selected();return a?`${this.navigationDemoI18nService.translate(`nav.${a.id}`)} \xB7 ${a.id}`:this.navigationDemoI18nService.translate(`demo.select`)});config=g(()=>({position:`inline`,showMobileTrigger:!1,side:this.right()?`right`:`left`,mobile:this.mobile(),searchable:this.searchable(),showItemIcons:this.icons(),breadcrumbConfig:{maxVisibleItems:Number(this.breadcrumbLimit())||3,overflowLabel:{key:`nav.hiddenPath`}},persistenceKey:`blocks.side-nav.demo.v1`,ariaLabel:{key:`nav.name`},searchLabel:{key:`nav.search`},searchPlaceholder:{key:`nav.placeholder`},clearSearchLabel:{key:`nav.clear`},emptyText:{key:`nav.empty`},openLabel:{key:`nav.open`},closeLabel:{key:`nav.close`},collapseLabel:{key:`nav.collapse`},expandLabel:{key:`nav.expand`},submenuLabel:{key:`nav.submenu`},resultLabel:{key:`nav.result`},backLabel:{key:`nav.back`},pathLabel:{key:`nav.path`}}));select(a){this.selected.set(a)}extendLabels(a,t){return a.map(e=>{let o=`${e.label} ${t}`;return s$1(r$1({},e),{label:o,data:s$1(r$1({},e.data),{label:o}),children:this.extendLabels(e.children??[],t)})})}static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-side-nav-examples`]],features:[Qt([ie,{provide:Se,useExisting:ie}])],decls:41,vars:46,consts:[[`nav`,``],[`customItem`,``],[1,`nav-demo-top-row`],[`subscriptSizing`,`dynamic`,3,`selectionChange`,`label`,`clearable`,`options`,`value`],[1,`nav-demo-fields`],[`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`label`,`min`,`max`,`value`],[1,`nav-demo-controls`],[1,`nav-demo-checkboxes`],[`subscriptSizing`,`dynamic`,3,`checkedChange`,`label`,`checked`],[1,`nav-demo-frame`],[3,`collapsedChange`,`itemSelected`,`config`,`groups`,`itemTemplate`,`collapsed`],[`bxSideNavHeader`,``],[`bxSideNavFooter`,``],[1,`nav-demo-content`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`],[`aria-live`,`polite`],[1,`nav-route-example`],[`tabindex`,`0`,`aria-label`,`TypeScript navigation configuration`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`name`,`blocks`],[`name`,`circle-user-round`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`size`,`20`,3,`name`],[`aria-hidden`,`true`]],template:function(t,e){if(t&1){let o=wt();_(0,`div`,2)(1,`bx-select`,3),te(`selectionChange`,function(s){return e.navigationDemoI18nService.setLanguage(s.value)}),D(),_(2,`div`,4)(3,`bx-input-field`,5),hE(`valueChange`,function(s){return Be$1(o),LP(e.height,s)||(e.height=s),Ve(s)}),D(),_(4,`bx-input-field`,5),hE(`valueChange`,function(s){return Be$1(o),LP(e.breadcrumbLimit,s)||(e.breadcrumbLimit=s),Ve(s)}),D()()(),_(5,`div`,6)(6,`div`,7)(7,`bx-checkbox`,8),hE(`checkedChange`,function(s){return Be$1(o),LP(e.right,s)||(e.right=s),Ve(s)}),D(),_(8,`bx-checkbox`,8),te(`checkedChange`,function(){Be$1(o);let s=Tt(19);return Ve(s.toggleCollapsed())}),D(),_(9,`bx-checkbox`,8),hE(`checkedChange`,function(s){return Be$1(o),LP(e.mobile,s)||(e.mobile=s),Ve(s)}),D(),_(10,`bx-checkbox`,8),hE(`checkedChange`,function(s){return Be$1(o),LP(e.searchable,s)||(e.searchable=s),Ve(s)}),D(),_(11,`bx-checkbox`,8),hE(`checkedChange`,function(s){return Be$1(o),LP(e.icons,s)||(e.icons=s),Ve(s)}),D(),_(12,`bx-checkbox`,8),hE(`checkedChange`,function(s){return Be$1(o),LP(e.longLabels,s)||(e.longLabels=s),Ve(s)}),D(),_(13,`bx-checkbox`,8),hE(`checkedChange`,function(s){return Be$1(o),LP(e.rtl,s)||(e.rtl=s),Ve(s)}),D(),_(14,`bx-checkbox`,8),hE(`checkedChange`,function(s){return Be$1(o),LP(e.custom,s)||(e.custom=s),Ve(s)}),D()()(),_(15,`p`),X$1(16),D(),_(17,`div`,9)(18,`bx-side-nav`,10,0),hE(`collapsedChange`,function(s){return Be$1(o),LP(e.collapsed,s)||(e.collapsed=s),Ve(s)}),te(`itemSelected`,function(s){return e.select(s)}),Pa$1(20,xa,2,1,`ng-template`,11)(21,Sa,2,1,`ng-template`,12),D(),_(22,`div`,13)(23,`h3`),X$1(24),D(),_(25,`p`),X$1(26),D(),j(27,Ca,2,1,`button`,14),_(28,`output`,15),X$1(29),D(),_(30,`p`),X$1(31),D(),_(32,`p`),X$1(33),D()()(),Pa$1(34,Ea,2,2,`ng-template`,null,1,kr$1),_(36,`details`,16)(37,`summary`),X$1(38),D(),_(39,`pre`,17),xe(40,`code`,18),D()()}if(t&2){let o=Tt(19),c=Tt(35);y(),R(`label`,e.text().language)(`clearable`,!1)(`options`,e.navigationDemoI18nService.languages)(`value`,e.navigationDemoI18nService.language()),y(2),R(`label`,e.text().height)(`min`,200)(`max`,700),bE(`value`,e.height),y(),R(`label`,e.text().breadcrumbLimit)(`min`,2)(`max`,10),bE(`value`,e.breadcrumbLimit),y(3),R(`label`,e.text().right),bE(`checked`,e.right),y(),R(`label`,e.text().rail)(`checked`,o.isCollapsed()),y(),R(`label`,e.text().mobile),bE(`checked`,e.mobile),y(),R(`label`,e.text().search),bE(`checked`,e.searchable),y(),R(`label`,e.text().icons),bE(`checked`,e.icons),y(),R(`label`,e.text().longLabels),bE(`checked`,e.longLabels),y(),R(`label`,e.text().rtl),bE(`checked`,e.rtl),y(),R(`label`,e.text().custom),bE(`checked`,e.custom),y(2),fe(e.text().instructions),y(),_e(`--%NS%bx-side-nav-height`,e.height()+`px`),ae(`right`,e.right()),B(`dir`,e.rtl()?`rtl`:`ltr`),y(),R(`config`,e.config())(`groups`,e.groups())(`itemTemplate`,e.custom()?c:void 0),bE(`collapsed`,e.collapsed),y(6),fe(e.text().title),y(2),fe(e.text().description),y(),F(o.isMobile()?27:-1),y(2),fe(e.selection()),y(2),fe(e.text().keyboard),y(2),fe(e.text().inlineMode),y(5),fe(e.text().routes),y(2),R(`highlight`,e.routeExample)}},dependencies:[ht,at$1,Bn,Fn,me,Hr,fo$1,At,Vt],styles:[`
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
}`]})};var Ta=()=>({name:`info`,color:`text-info`,bgColor:`auto`});var it=class r{panelBreakpoints={"2xl":`push`};placements=[{label:`Left`,value:`left`},{label:`Right`,value:`right`}];opened=M(!1);contained=M(!0);backdrop=M(!1);placement=M(`right`);panelWidth=M(320);note=M(`This content survives closing the panel.`);clicks=M(0);width=g(()=>Math.max(240,Math.min(640,Number(this.panelWidth())||320)));resizeWidth(a){let t=Number(a);Number.isFinite(t)&&this.panelWidth.set(t)}pageAction(){this.clicks.update(a=>a+1)}static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-side-panel-examples`]],decls:27,vars:24,consts:[[1,`panel-demo-controls`],[`label`,`Placement`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Panel width (px)`,`type`,`number`,3,`ngModelChange`,`min`,`max`,`ngModel`],[1,`panel-demo-toggles`],[`label`,`Bound to preview container`,3,`ngModelChange`,`ngModel`],[`label`,`Blocking backdrop inside bounds`,3,`ngModelChange`,`ngModel`],[1,`panel-demo-boundary`],[`ariaLabel`,`Side panel example`,3,`widthChange`,`openChange`,`headerIcon`,`open`,`placement`,`container`,`width`,`resizable`,`resizeDisableShrink`,`resizeMinWidth`,`resizeMaxWidth`,`breakpoints`,`backdrop`],[`bxSidePanelBanner`,``,1,`demo-banner`],[`bxSidePanelHeader`,``,1,`demo-heading`],[`label`,`Persistent note`,3,`ngModelChange`,`ngModel`],[`bxSidePanelFooter`,``],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[1,`panel-demo-content`],[`role`,`status`]],template:function(t,e){t&1&&(_(0,`div`,0)(1,`bx-select`,1),zA(),te(`ngModelChange`,function(c){return e.placement.set(c)}),D(),_(2,`bx-input-field`,2),zA(),te(`ngModelChange`,function(c){return e.panelWidth.set(c)}),D()(),_(3,`div`,3)(4,`bx-slide-toggle`,4),zA(),te(`ngModelChange`,function(c){return e.contained.set(c)}),D(),_(5,`bx-slide-toggle`,5),zA(),te(`ngModelChange`,function(c){return e.backdrop.set(c)}),D()(),_(6,`bx-side-panel-layout`,6)(7,`bx-side-panel`,7),te(`widthChange`,function(c){return e.resizeWidth(c)})(`openChange`,function(c){return e.opened.set(c)}),_(8,`p`,8),X$1(9,`Optional projected top banner`),D(),_(10,`h3`,9),X$1(11,`Declarative panel`),D(),_(12,`bx-input-field`,10),zA(),te(`ngModelChange`,function(c){return e.note.set(c)}),D(),_(13,`p`),X$1(14,`Closing keeps projected content mounted. Escape dismisses the focused panel without a modal focus trap or page scroll lock.`),D(),_(15,`div`,11)(16,`button`,12),te(`click`,function(){return e.opened.set(!1)}),X$1(17,`Done`),D()()(),_(18,`div`,13)(19,`button`,12),te(`click`,function(){return e.opened.set(!e.opened())}),X$1(20),D(),_(21,`button`,12),te(`click`,function(){return e.pageAction()}),X$1(22,`Surrounding page action`),D(),_(23,`p`,14),X$1(24),D(),_(25,`p`),X$1(26,`The panel has ordinary keyboard navigation. Change its placement, bounds, or width while it is open.`),D()()()),t&2&&(y(),R(`clearable`,!1)(`options`,e.placements)(`ngModel`,e.placement()),qA(),y(),R(`min`,240)(`max`,640)(`ngModel`,e.panelWidth()),qA(),y(2),R(`ngModel`,e.contained()),qA(),y(),R(`ngModel`,e.backdrop()),qA(),y(2),R(`headerIcon`,HP(23,Ta))(`open`,e.opened())(`placement`,e.placement())(`container`,e.contained()?void 0:`viewport`)(`width`,e.width())(`resizable`,!0)(`resizeDisableShrink`,!1)(`resizeMinWidth`,240)(`resizeMaxWidth`,640)(`breakpoints`,e.panelBreakpoints)(`backdrop`,e.backdrop()),y(5),R(`ngModel`,e.note()),qA(),y(8),un(``,e.opened()?`Close`:`Open`,` panel`),y(4),uE(`Page actions: `,e.clicks(),` · Panel `,e.opened()?`open`:`closed`))},dependencies:[zie,jie,aB,me,fo$1,At,yo$1,ET,DT,Qd,Xd,Jd],styles:[`
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
}`]})};function ui(r,a){return new Promise((t,e)=>{let o=()=>{clearTimeout(c),t(!1)},c=setTimeout(()=>{r.signal.removeEventListener(`abort`,o),a===`fail`?e(/* @__PURE__ */ new Error(`The simulated server could not save this step. Try again.`)):t(a===`allow`)},800);r.signal.addEventListener(`abort`,o,{once:!0}),r.signal.aborted&&o()})}var gi={en:{label:`Workflow`,back:`Back`,next:`Next`,finish:`Finish`,skip:`Skip`,pending:`Pending`,awaitingConfirmation:`Awaiting confirmation`,active:`Current step`,completed:`Completed`,skipped:`Skipped`,error:`Error`,loading:`Loading`,disabled:`Disabled`,optional:`Optional`,invalid:`Check this step before continuing`,rejected:`Navigation was not accepted`,position:`Step {index} of {count}: {label}`,plan:`Plan`,build:`Build`,ship:`Ship`,archived:`Archived`,buildDescription:`Prepare the workspace`,details:`Details`,preferences:`Preferences`,review:`Review`},es:{label:`Flujo de trabajo`,back:`Atrás`,next:`Siguiente`,finish:`Finalizar`,skip:`Omitir`,pending:`Pendiente`,awaitingConfirmation:`Esperando confirmación`,active:`Paso actual`,completed:`Completado`,skipped:`Omitido`,error:`Error`,loading:`Cargando`,disabled:`Deshabilitado`,optional:`Opcional`,invalid:`Comprueba este paso antes de continuar`,rejected:`No se aceptó la navegación`,position:`Paso {index} de {count}: {label}`,plan:`Planificar`,build:`Crear`,ship:`Publicar`,archived:`Archivado`,buildDescription:`Prepara el espacio de trabajo`,details:`Detalles`,preferences:`Preferencias`,review:`Revisión`},fr:{label:`Parcours`,back:`Retour`,next:`Suivant`,finish:`Terminer`,skip:`Ignorer`,pending:`En attente`,awaitingConfirmation:`En attente de confirmation`,active:`Étape actuelle`,completed:`Terminé`,skipped:`Ignoré`,error:`Erreur`,loading:`Chargement`,disabled:`Désactivé`,optional:`Facultatif`,invalid:`Vérifiez cette étape avant de continuer`,rejected:`La navigation a été refusée`,position:`Étape {index} sur {count} : {label}`,plan:`Planifier`,build:`Créer`,ship:`Publier`,archived:`Archivé`,buildDescription:`Préparez l’espace de travail`,details:`Détails`,preferences:`Préférences`,review:`Vérification`},de:{label:`Ablauf`,back:`Zurück`,next:`Weiter`,finish:`Abschließen`,skip:`Überspringen`,pending:`Ausstehend`,awaitingConfirmation:`Bestätigung ausstehend`,active:`Aktueller Schritt`,completed:`Abgeschlossen`,skipped:`Übersprungen`,error:`Fehler`,loading:`Wird geladen`,disabled:`Deaktiviert`,optional:`Optional`,invalid:`Prüfen Sie diesen Schritt vor dem Fortfahren`,rejected:`Die Navigation wurde abgelehnt`,position:`Schritt {index} von {count}: {label}`,plan:`Planen`,build:`Erstellen`,ship:`Veröffentlichen`,archived:`Archiviert`,buildDescription:`Arbeitsbereich vorbereiten`,details:`Details`,preferences:`Einstellungen`,review:`Überprüfung`}};var Ce=class r{language=M(`en`);version=M(0);translate(a,t){let e=gi[this.language()][a]??a;for(let[o,c]of Object.entries(t??{}))e=e.replaceAll(`{${o}}`,String(c));return e}setLanguage(a){a&&(this.language.set(a),this.version.update(t=>t+1))}static ɵfac=function(t){return new(t||r)};static ɵprov=ie$1({token:r,factory:r.ɵfac})};var Ma=[`sectionsWrapper`];var Da=[`dynamicContent`];var Pa=[`section`];var Na=()=>({key:`details`});var Ia=()=>({key:`preferences`});var Va=()=>({key:`review`});var Wa=(r,a)=>a.id;function Oa(r,a){if(r&1){let t=wt();_(0,`bx-select`,68),zA(),hE(`ngModelChange`,function(o){Be$1(t);let c=w();return LP(c.progressFormat,o)||(c.progressFormat=o),Ve(o)}),D()}if(r&2){let t=w();R(`clearable`,!1)(`options`,t.progressFormats),bE(`ngModel`,t.progressFormat),qA()}}function za(r,a){if(r&1){let t=wt();_(0,`section`,39,8)(2,`h4`),X$1(3),D(),_(4,`p`),X$1(5),D(),_(6,`p`),X$1(7,`The section selection follows this scroll container. No scroll observer or router is owned by the stepper.`),D(),_(8,`button`,31),te(`click`,function(){let o=Be$1(t).$implicit,c=w();return Ve(c.sectionStatus.set(`Reviewed `+o.id))}),X$1(9,`Mark section reviewed`),D()()}if(r&2){let t=a.$implicit;B(`data-section`,t.id)(`aria-label`,t.label),y(3),fe(t.label),y(2),fe(t.description)}}function La(r,a){if(r&1){let t=wt();_(0,`button`,31),te(`click`,function(){let o=Be$1(t).$implicit,c=w();return Ve(c.policy.set(o))}),X$1(1),D()}if(r&2){let t=a.$implicit,e=w();B(`aria-pressed`,e.policy()===t),y(),un(``,t,` content`)}}function Ra(r,a){if(r&1&&(_(0,`bx-input-field`,69),zA(),D(),_(1,`p`),X$1(2,`This required field becomes touched only after an invalid forward attempt.`),D()),r&2){let t=w();R(`formControl`,t.details.controls.name),qA()}}function Ba(r,a){if(r&1&&(_(0,`span`),X$1(1),D()),r&2){let t=w();y(),fe(t.stepperDemoI18nService.translate(`preferences`))}}function Aa(r,a){if(r&1&&(_(0,`bx-input-field`,70),zA(),D(),_(1,`p`),X$1(2,`Skip leaves this step incomplete. With retained content, edits and child state survive revisiting.`),D()),r&2){let t=w();R(`formControl`,t.note),qA()}}function Fa(r,a){if(r&1&&(_(0,`h4`),X$1(1,`Review workspace`),D(),_(2,`p`),X$1(3),D(),_(4,`p`),X$1(5),D(),_(6,`p`),X$1(7,`Finish performs the same asynchronous save as Next. A failed save keeps this content and its form values.`),D()),r&2){let t=w();y(3),un(`Workspace: `,t.details.controls.name.value),y(2),un(`Note: `,t.note.value||`No delivery note`)}}function qa(r,a){if(r&1){let t=wt();_(0,`h4`),X$1(1,`Workspace ready`),D(),_(2,`p`),X$1(3,`Your workflow is complete. Reset to start again.`),D(),_(4,`button`,31),te(`click`,function(){Be$1(t),w();let o=Tt(61);return Ve(o.reset())}),X$1(5,`Restart with existing values`),D()}}function ja(r,a){if(r&1&&(_(0,`bx-input-field`,71),zA(),D()),r&2){let t=w();R(`formField`,t.signalForm.name),qA()}}function Ha(r,a){if(r&1&&(_(0,`p`),X$1(1),D()),r&2){let t=w();y(),un(`Ready to create `,t.signalModel().name,`.`)}}function Ua(r,a){if(r&1&&(_(0,`p`),X$1(1),D()),r&2){w();let t=Tt(90);y(),un(`Active step: `,t.selectedStep()?.label,`. Component state follows stable IDs when definitions change.`)}}function Ga(r,a){if(r&1){let t=wt();_(0,`button`,72),te(`click`,function(){Be$1(t);let o=w();return Ve(o.confirmSelection())}),X$1(1),D()}r&2&&(y(),un(`Open `,a))}function Ka(r,a){if(r&1&&(_(0,`div`,73)(1,`span`),X$1(2),D(),xe(3,`bx-stepper`,74),D()),r&2){let t=a.$implicit,e=w().$implicit,o=w();y(2),fe(t),y(),R(`steps`,o.gallerySteps)(`variant`,e)(`size`,t)(`orientation`,o.orientation())(`responsive`,o.responsive())(`glassiness`,o.glass()?`on`:`off`)(`surfaceEffects`,o.lighting())(`showLabels`,e!==`dots`)(`labels`,o.labels)}}function Qa(r,a){if(r&1&&(_(0,`div`,67)(1,`h4`),X$1(2),D(),$t(3,Ka,4,10,`div`,73,Fa$1),D()),r&2){let t=a.$implicit,e=w();y(2),fe(t),y(),Wt(e.gallerySizes)}}var at=class r$2{bxA11yService=f(Le);stepperDemoI18nService=f(Ce);sectionsWrapper=Nt(`sectionsWrapper`);dynamicContent=Nt(`dynamicContent`);sections=nf(`section`);modes=o;variants=i;progressFormats=s;sizes=r;orientations=a;responsiveOptions=p;galleryVariants=t;gallerySizes=l;gallerySteps=S;sectionSteps=n;languages=ut$1;policies=[`eager`,`retained`,`active`];mode=M(`navigation`);variant=M(`steps`);progressFormat=M(`percentage`);size=M(`md`);orientation=M(`horizontal`);responsive=M(`compact`);active=M(`build`);sectionActive=M(`overview`);wizardActive=M(`details`);controlledActive=M(`plan`);status=M(`Use the controls to explore presentation and behavior.`);sectionStatus=M(`Choose a section or scroll the content. The application confirms the active ID.`);wizardStatus=M(`Enter a workspace name, then continue.`);nextOutcome=M(`allow`);policy=M(`retained`);pendingConfirmation=M(null);showLabels=M(!0);errorState=M(!1);loadingState=M(!1);allowIndicatorRequests=M(!1);readOnly=M(!1);glass=M(!0);lighting=M(!0);linear=M(!0);editable=M(!0);extra=M(!1);previewSteps=g(()=>[{id:`plan`,label:{key:`plan`},completed:!0,icon:`clipboard-check`},{id:`build`,label:{key:`build`},description:{key:`buildDescription`},icon:`wrench`},{id:`ship`,label:{key:`ship`},optional:!0,icon:`send`},{id:`archived`,label:{key:`archived`},disabled:!0,icon:`archive`}].map(t=>s$1(r$1({},t),{error:t.id===this.active()&&this.errorState(),loading:t.id===this.active()&&this.loadingState()})));currentStepOptions=g(()=>this.previewSteps().map(a=>({value:a.id,label:`${J(a.label,this.stepperDemoI18nService)} (${a.id})`,disabled:a.disabled})));confirmationLabel=g(()=>{let a=this.pendingConfirmation(),t=this.gallerySteps.find(e=>e.id===a?.toId);return a?.outcome===`accepted`&&t&&t.id!==this.controlledActive()?J(t.label,this.stepperDemoI18nService):null});controlledMessage=g(()=>{let a=this.pendingConfirmation(),t=this.confirmationLabel(),e=J(this.gallerySteps.find(o=>o.id===this.controlledActive())?.label,this.stepperDemoI18nService);return t?`Request accepted. ${e} is still current. Select \u201COpen ${t}\u201D to let the application confirm the new activeStep.`:a?.outcome===`accepted`?a.toId?`The application opened ${e}. Request another step to repeat the two-stage flow.`:`The workflow is complete. Reset to try requesting and confirming steps again.`:a?`The request was ${a.outcome}. ${e} remains current; no destination is waiting for confirmation.`:`Current step: ${e}. \u201CRequest next step\u201D checks the transition. Then select \u201COpen\u201D to confirm it. This demo deliberately waits for that second action.`});dynamicSteps=g(()=>[{id:`first`,label:`Start`,content:this.dynamicContent()},...this.extra()?[{id:`extra`,label:`Added step`,optional:!0,content:this.dynamicContent()}]:[],{id:`last`,label:`Review`,content:this.dynamicContent()}]);labels=Object.fromEntries([`label`,`back`,`next`,`finish`,`skip`,`pending`,`awaitingConfirmation`,`active`,`completed`,`skipped`,`error`,`loading`,`disabled`,`optional`,`invalid`,`rejected`,`position`].map(a=>[a,{key:a}]));controlledLabels=s$1(r$1({},this.labels),{next:`Request next step`,back:`Request previous step`});details=new Um({name:new rI(``,{nonNullable:!0,validators:ml.required})});note=new rI(``,{nonNullable:!0});signalModel=M({name:``});signalForm=ka$1(this.signalModel,a=>bp(a.name));save=a=>{if(a.request.action===`previous`)return!0;let t=this.nextOutcome();return this.nextOutcome.set(`allow`),ui(a,t)};confirmPreview(a){this.status.set(`${a.source} request: ${a.id} (index ${a.index}). Application confirmed selection.`),this.active.set(a.id)}navigateSection(a){let t=this.sectionsWrapper()?.nativeElement,e=this.sections().find(c=>c.nativeElement.dataset.section===a.id)?.nativeElement,o=this.sections()[0]?.nativeElement;!t||!e||!o||(this.sectionStatus.set(`Application handled ${a.source} request for section ${a.id}.`),t.scrollTo({top:e.offsetTop-o.offsetTop,behavior:this.bxA11yService.isReducedMotion()?`instant`:`smooth`}))}observeSections(){let a=this.sectionsWrapper()?.nativeElement;if(!a)return;let t=a.getBoundingClientRect().top,e=this.sections().filter(o=>o.nativeElement.getBoundingClientRect().top<=t+32).at(-1);e&&this.sectionActive.set(e.nativeElement.dataset.section??`overview`)}resetWizard(a){a.reset(),this.details.reset(),this.note.reset(),this.nextOutcome.set(`allow`),this.wizardStatus.set(`Enter a workspace name, then continue.`)}recordWizard(a){switch(a.outcome){case`accepted`:this.wizardStatus.set(a.toId?`Saved and advanced to ${a.toId}.`:`Workspace saved. The workflow is complete.`);break;case`invalid`:this.wizardStatus.set(`Enter a workspace name before continuing. No save has started.`);break;case`error`:this.wizardStatus.set(`The simulated save failed. Your values are retained. Select Next or Finish once to retry.`);break;case`rejected`:this.wizardStatus.set(`The guard refused navigation. Your values are retained. Select Next or Finish once to try again.`);break;case`cancelled`:this.wizardStatus.set(`The save was cancelled because the workflow changed. Your values are retained.`)}}confirmSelection(){let a=this.pendingConfirmation();a?.outcome===`accepted`&&a.toId&&this.confirmationLabel()&&this.controlledActive.set(a.toId)}static ɵfac=function(t){return new(t||r$2)};static ɵcmp=G({type:r$2,selectors:[[`app-stepper-examples`]],viewQuery:function(t,e){t&1&&Xt(e.sectionsWrapper,Ma,5)(e.dynamicContent,Da,5)(e.sections,Pa,5),t&2&&ft(3)},features:[Qt([Ce,{provide:Se,useExisting:Ce}])],decls:121,vars:88,consts:[[`preview`,``],[`sectionsWrapper`,``],[`wizard`,``],[`finished`,``],[`signalWizard`,``],[`custom`,``],[`dynamicContent`,``],[`controlled`,``],[`section`,``],[1,`stepper-examples`],[`aria-labelledby`,`stepper-config-title`],[`id`,`stepper-config-title`],[3,`activeStepChange`,`stepRequested`,`mode`,`steps`,`variant`,`size`,`orientation`,`responsive`,`showLabels`,`indicatorInteractive`,`readOnly`,`glassiness`,`surfaceEffects`,`labels`,`showPercentage`,`progressFormat`,`activeStep`],[1,`config-grid`],[`label`,`Current step (activeStep ID)`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Behavior`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Variant`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Progress display`,3,`clearable`,`options`,`ngModel`],[`label`,`Size`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Orientation`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Narrow screens`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Language`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[1,`toggles`],[`label`,`Labels`,3,`ngModelChange`,`ngModel`],[`label`,`Current step error`,3,`ngModelChange`,`ngModel`],[`label`,`Current step loading`,3,`ngModelChange`,`ngModel`],[`label`,`Indicator interaction`,3,`ngModelChange`,`ngModel`],[`label`,`Read only`,3,`ngModelChange`,`ngModel`],[`label`,`Glass surfaces`,3,`ngModelChange`,`ngModel`],[`label`,`Interaction lighting`,3,`ngModelChange`,`ngModel`],[1,`actions`],[`bx-button`,``,`type`,`button`,3,`click`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[`announcement`,`polite`,3,`message`],[`aria-labelledby`,`stepper-section-title`],[`id`,`stepper-section-title`],[1,`section-layout`],[`mode`,`navigation`,`orientation`,`vertical`,3,`activeStepChange`,`stepRequested`,`steps`,`activeStep`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Release sections`,1,`section-scroll`,3,`scroll`],[1,`document-section`],[`aria-labelledby`,`stepper-wizard-title`],[`id`,`stepper-wizard-title`],[`label`,`Linear workflow`,3,`ngModelChange`,`ngModel`],[`label`,`Completed steps editable`,3,`ngModelChange`,`ngModel`],[`bx-button`,``,`type`,`button`],[`mode`,`wizard`,3,`activeStepChange`,`transitionFinished`,`variant`,`size`,`orientation`,`responsive`,`linear`,`contentPolicy`,`labels`,`beforeTransition`,`completionContent`,`activeStep`],[`id`,`details`,`icon`,`file-text`,3,`label`,`validation`,`editable`],[`bxStepContent`,``],[`id`,`preferences`,`icon`,`settings`,3,`label`,`optional`],[`bxStepLabel`,``],[`id`,`managed`,`label`,`Managed by your organization`,3,`disabled`],[`id`,`review`,`icon`,`clipboard-check`,3,`label`],[`aria-labelledby`,`stepper-signal-title`],[`id`,`stepper-signal-title`],[`mode`,`wizard`,`variant`,`segments`,3,`labels`],[`id`,`name`,`label`,`Name`,3,`validation`],[`id`,`ready`,`label`,`Ready`],[`aria-labelledby`,`stepper-custom-title`],[`id`,`stepper-custom-title`],[`mode`,`wizard`,`variant`,`cards`,3,`steps`,`linear`,`controls`,`labels`],[`aria-labelledby`,`stepper-controlled-title`],[`id`,`stepper-controlled-title`],[`mode`,`wizard`,`selectionMode`,`controlled`,3,`activeStepChange`,`transitionFinished`,`steps`,`linear`,`labels`,`activeStep`],[`announcement`,`polite`,3,`title`,`message`],[`bx-button`,``,`bxAlertActions`,``,`type`,`button`,`variant`,`filled`],[`aria-labelledby`,`stepper-gallery-title`],[`id`,`stepper-gallery-title`],[1,`gallery-group`],[`label`,`Progress display`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Workspace name`,`placeholder`,`Enter a workspace name`,3,`formControl`],[`label`,`Delivery note`,3,`formControl`],[`label`,`Required workspace name`,3,`formField`],[`bx-button`,``,`bxAlertActions`,``,`type`,`button`,`variant`,`filled`,3,`click`],[1,`gallery-row`],[`activeStep`,`build`,3,`steps`,`variant`,`size`,`orientation`,`responsive`,`glassiness`,`surfaceEffects`,`showLabels`,`labels`]],template:function(t,e){if(t&1){let o=wt();_(0,`div`,9)(1,`section`,10)(2,`h3`,11),X$1(3,`Presentation and behavior`),D(),_(4,`p`),X$1(5,` Pilot material and motion: select steps rapidly, press a marker, and compare sizes and orientations. Appearance settings control the theme, reduced motion, and opaque surfaces independently. `),D(),_(6,`bx-stepper`,12,0),hE(`activeStepChange`,function(s){return Be$1(o),LP(e.active,s)||(e.active=s),Ve(s)}),te(`stepRequested`,function(s){return e.mode()!==`wizard`&&e.confirmPreview(s)}),D(),_(8,`div`,13)(9,`bx-select`,14),zA(),hE(`ngModelChange`,function(s){return Be$1(o),LP(e.active,s)||(e.active=s),Ve(s)}),D(),_(10,`bx-select`,15),zA(),hE(`ngModelChange`,function(s){return Be$1(o),LP(e.mode,s)||(e.mode=s),Ve(s)}),D(),_(11,`bx-select`,16),zA(),hE(`ngModelChange`,function(s){return Be$1(o),LP(e.variant,s)||(e.variant=s),Ve(s)}),D(),j(12,Oa,1,3,`bx-select`,17),_(13,`bx-select`,18),zA(),hE(`ngModelChange`,function(s){return Be$1(o),LP(e.size,s)||(e.size=s),Ve(s)}),D(),_(14,`bx-select`,19),zA(),hE(`ngModelChange`,function(s){return Be$1(o),LP(e.orientation,s)||(e.orientation=s),Ve(s)}),D(),_(15,`bx-select`,20),zA(),hE(`ngModelChange`,function(s){return Be$1(o),LP(e.responsive,s)||(e.responsive=s),Ve(s)}),D(),_(16,`bx-select`,21),zA(),te(`ngModelChange`,function(s){return e.stepperDemoI18nService.setLanguage(s)}),D()(),_(17,`div`,22)(18,`bx-slide-toggle`,23),zA(),hE(`ngModelChange`,function(s){return Be$1(o),LP(e.showLabels,s)||(e.showLabels=s),Ve(s)}),D(),_(19,`bx-slide-toggle`,24),zA(),hE(`ngModelChange`,function(s){return Be$1(o),LP(e.errorState,s)||(e.errorState=s),Ve(s)}),D(),_(20,`bx-slide-toggle`,25),zA(),hE(`ngModelChange`,function(s){return Be$1(o),LP(e.loadingState,s)||(e.loadingState=s),Ve(s)}),D(),_(21,`bx-slide-toggle`,26),zA(),hE(`ngModelChange`,function(s){return Be$1(o),LP(e.allowIndicatorRequests,s)||(e.allowIndicatorRequests=s),Ve(s)}),D(),_(22,`bx-slide-toggle`,27),zA(),hE(`ngModelChange`,function(s){return Be$1(o),LP(e.readOnly,s)||(e.readOnly=s),Ve(s)}),D(),_(23,`bx-slide-toggle`,28),zA(),hE(`ngModelChange`,function(s){return Be$1(o),LP(e.glass,s)||(e.glass=s),Ve(s)}),D(),_(24,`bx-slide-toggle`,29),zA(),hE(`ngModelChange`,function(s){return Be$1(o),LP(e.lighting,s)||(e.lighting=s),Ve(s)}),D()(),_(25,`div`,30)(26,`button`,31),te(`click`,function(){Be$1(o);let s=Tt(7);return Ve(s.reset())}),X$1(27,`Reset`),D(),_(28,`button`,32),te(`click`,function(){return e.active.set(`plan`)}),X$1(29,`Select Plan`),D(),_(30,`button`,32),te(`click`,function(){return e.active.set(`ship`)}),X$1(31,`Select Ship`),D()(),xe(32,`bx-banner`,33),D(),_(33,`section`,34)(34,`h3`,35),X$1(35,`Application-owned section navigation`),D(),xe(36,`bx-banner`,33),_(37,`div`,36)(38,`bx-stepper`,37),hE(`activeStepChange`,function(s){return Be$1(o),LP(e.sectionActive,s)||(e.sectionActive=s),Ve(s)}),te(`stepRequested`,function(s){return e.navigateSection(s)}),D(),_(39,`div`,38,1),te(`scroll`,function(){return e.observeSections()}),$t(41,za,10,4,`section`,39,Wa),D()()(),_(43,`section`,40)(44,`h3`,41),X$1(45,`Workspace wizard`),D(),_(46,`p`),X$1(47,`Required Reactive Forms validation, optional content, disabled steps, guarded saves, retained input and explicit completion.`),D(),_(48,`div`,22)(49,`bx-slide-toggle`,42),zA(),hE(`ngModelChange`,function(s){return Be$1(o),LP(e.linear,s)||(e.linear=s),Ve(s)}),D(),_(50,`bx-slide-toggle`,43),zA(),hE(`ngModelChange`,function(s){return Be$1(o),LP(e.editable,s)||(e.editable=s),Ve(s)}),D()(),_(51,`div`,30),$t(52,La,2,2,`button`,44,Fa$1),_(54,`button`,31),te(`click`,function(){return e.nextOutcome.set(`fail`)}),X$1(55,`Fail next save`),D(),_(56,`button`,31),te(`click`,function(){return e.nextOutcome.set(`reject`)}),X$1(57,`Reject next guard`),D(),_(58,`button`,31),te(`click`,function(){Be$1(o);let s=Tt(61);return Ve(e.resetWizard(s))}),X$1(59,`Reset workflow and forms`),D()(),_(60,`bx-stepper`,45,2),hE(`activeStepChange`,function(s){return Be$1(o),LP(e.wizardActive,s)||(e.wizardActive=s),Ve(s)}),te(`transitionFinished`,function(s){return e.recordWizard(s)}),_(62,`bx-step`,46),Pa$1(63,Ra,3,1,`ng-template`,47),D(),_(64,`bx-step`,48),Pa$1(65,Ba,2,1,`ng-template`,49)(66,Aa,3,1,`ng-template`,47),D(),xe(67,`bx-step`,50),_(68,`bx-step`,51),Pa$1(69,Fa,8,2,`ng-template`,47),D()(),Pa$1(70,qa,6,0,`ng-template`,null,3,kr$1),xe(72,`bx-banner`,33),D(),_(73,`section`,52)(74,`h3`,53),X$1(75,`Signal Forms`),D(),_(76,`bx-stepper`,54,4)(78,`bx-step`,55),Pa$1(79,ja,1,1,`ng-template`,47),D(),_(80,`bx-step`,56),Pa$1(81,Ha,2,1,`ng-template`,47),D()(),_(82,`button`,31),te(`click`,function(){Be$1(o);let s=Tt(77);return Ve(s.reset())}),X$1(83,`Restart Signal Forms example`),D()(),_(84,`section`,57)(85,`h3`,58),X$1(86,`Non-linear workflow and custom controls`),D(),_(87,`p`),X$1(88,`Add or remove an optional step. Every control invokes the same guarded methods as the built-in buttons.`),D(),xe(89,`bx-stepper`,59,5),Pa$1(91,Ua,2,1,`ng-template`,null,6,kr$1),_(93,`div`,30)(94,`button`,31),te(`click`,function(){Be$1(o);let s=Tt(90);return Ve(s.previous())}),X$1(95,`Back`),D(),_(96,`button`,31),te(`click`,function(){Be$1(o);let s=Tt(90);return Ve(s.next())}),X$1(97,`Next`),D(),_(98,`button`,31),te(`click`,function(){Be$1(o);let s=Tt(90);return Ve(s.finish())}),X$1(99,`Finish`),D(),_(100,`button`,31),te(`click`,function(){return e.extra.set(!e.extra())}),X$1(101),D(),_(102,`button`,31),te(`click`,function(){Be$1(o);let s=Tt(90);return Ve(s.reset())}),X$1(103,`Reset`),D()(),xe(104,`bx-banner`,33),D(),_(105,`section`,60)(106,`h3`,61),X$1(107,`Controlled wizard selection`),D(),_(108,`bx-stepper`,62,7),hE(`activeStepChange`,function(s){return Be$1(o),LP(e.controlledActive,s)||(e.controlledActive=s),Ve(s)}),te(`transitionFinished`,function(s){return e.pendingConfirmation.set(s)}),D(),_(110,`bx-banner`,63),j(111,Ga,2,1,`button`,64),D(),_(112,`button`,31),te(`click`,function(){return Be$1(o),Tt(109).reset(),Ve(e.pendingConfirmation.set(null))}),X$1(113,`Reset controlled wizard`),D()(),_(114,`section`,65)(115,`h3`,66),X$1(116,`Variant and size reference`),D(),_(117,`p`),X$1(118,`All presentations use the same completion data. Segment thickness changes with size. Orientation follows the configurator above.`),D(),$t(119,Qa,5,1,`div`,67,Fa$1),D()()}if(t&2){let o,c=Tt(61),s=Tt(71),H=Tt(90),A=Tt(109);y(6),R(`mode`,e.mode())(`steps`,e.previewSteps())(`variant`,e.variant())(`size`,e.size())(`orientation`,e.orientation())(`responsive`,e.responsive())(`showLabels`,e.showLabels())(`indicatorInteractive`,e.allowIndicatorRequests())(`readOnly`,e.readOnly())(`glassiness`,e.glass()?`on`:`off`)(`surfaceEffects`,e.lighting())(`labels`,e.labels)(`showPercentage`,!0)(`progressFormat`,e.progressFormat()),bE(`activeStep`,e.active),y(3),R(`clearable`,!1)(`options`,e.currentStepOptions()),bE(`ngModel`,e.active),qA(),y(),R(`clearable`,!1)(`options`,e.modes),bE(`ngModel`,e.mode),qA(),y(),R(`clearable`,!1)(`options`,e.variants),bE(`ngModel`,e.variant),qA(),y(),F(e.variant()===`progress`?12:-1),y(),R(`clearable`,!1)(`options`,e.sizes),bE(`ngModel`,e.size),qA(),y(),R(`clearable`,!1)(`options`,e.orientations),bE(`ngModel`,e.orientation),qA(),y(),R(`clearable`,!1)(`options`,e.responsiveOptions),bE(`ngModel`,e.responsive),qA(),y(),R(`clearable`,!1)(`options`,e.languages)(`ngModel`,e.stepperDemoI18nService.language()),qA(),y(2),bE(`ngModel`,e.showLabels),qA(),y(),bE(`ngModel`,e.errorState),qA(),y(),bE(`ngModel`,e.loadingState),qA(),y(),bE(`ngModel`,e.allowIndicatorRequests),qA(),y(),bE(`ngModel`,e.readOnly),qA(),y(),bE(`ngModel`,e.glass),qA(),y(),bE(`ngModel`,e.lighting),qA(),y(4),R(`disabled`,e.mode()===`wizard`||e.readOnly()),y(2),R(`disabled`,e.mode()===`wizard`||e.readOnly()),y(2),R(`message`,e.status()),y(4),R(`message`,e.sectionStatus()),y(2),R(`steps`,e.sectionSteps),bE(`activeStep`,e.sectionActive),y(3),Wt(e.sectionSteps),y(8),bE(`ngModel`,e.linear),qA(),y(),bE(`ngModel`,e.editable),qA(),y(2),Wt(e.policies),y(8),R(`variant`,e.variant())(`size`,e.size())(`orientation`,e.orientation())(`responsive`,e.responsive())(`linear`,e.linear())(`contentPolicy`,e.policy())(`labels`,e.labels)(`beforeTransition`,e.save)(`completionContent`,s),bE(`activeStep`,e.wizardActive),y(2),R(`label`,HP(85,Na))(`validation`,e.details)(`editable`,e.editable()),y(2),R(`label`,HP(86,Ia))(`optional`,!0),y(3),R(`disabled`,!0),y(),R(`label`,HP(87,Va)),y(4),R(`message`,c.pending()?`Saving workspace… The next step opens automatically after a successful save.`:e.wizardStatus()+` Next server outcome: `+e.nextOutcome()+`.`),y(4),R(`labels`,e.labels),y(2),R(`validation`,e.signalForm()),y(11),R(`steps`,e.dynamicSteps())(`linear`,!1)(`controls`,!1)(`labels`,e.labels),y(12),un(``,e.extra()?`Remove`:`Add`,` optional step`),y(3),R(`message`,H.isComplete()?`Completed`:H.lastTransition()?.outcome||`Ready`),y(4),R(`steps`,e.gallerySteps)(`linear`,!1)(`labels`,e.controlledLabels),bE(`activeStep`,e.controlledActive),y(2),R(`title`,e.confirmationLabel()?`Waiting for application confirmation`:A.isComplete()?`Workflow complete`:`Application-owned selection`)(`message`,e.controlledMessage()),y(),F((o=e.confirmationLabel())?111:-1,o),y(8),Wt(e.galleryVariants)}},dependencies:[zie,jie,aB,Hie,uB,mp,dT,me,fo$1,At,yo$1,Pn,gt$1,ut$2,vt],styles:[`
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
formSettings.update({ tooltipOnTruncate: false });`;var Xa=()=>[0];var we=class r{text=M(`A long location name that can be truncated`);width=M(14);enabled=M(!0);largeText=M(!1);automaticTooltips=M(!0);customTooltip=M(!1);menuActions=M(0);label=g(()=>String(this.text()??``));options=g(()=>[{label:this.label(),value:0}]);pipeExample=_i;customExample=hi;logicExample=vi;previewWidth=g(()=>{let a=Number(this.width());return Number.isFinite(a)?Math.max(4,Math.min(64,a)):14});static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-truncation-examples`]],decls:96,vars:55,consts:[[`overflow`,`bxTruncate`],[`aria-label`,`Conditional truncation tooltips`,1,`truncation-demo`],[1,`truncation-controls`],[`label`,`Text`,`subscriptSizing`,`dynamic`,3,`valueChange`,`value`],[`label`,`Available width (rem)`,`type`,`number`,`subscriptSizing`,`dynamic`,3,`valueChange`,`min`,`max`,`value`],[`role`,`group`,`aria-label`,`Preview options`,1,`truncation-switches`],[`label`,`Enable text truncation`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Larger text preview`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Automatic tooltips`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[`label`,`Custom tooltip`,`subscriptSizing`,`dynamic`,3,`checkedChange`,`checked`],[1,`component-examples`],[1,`preview-card`,`text-preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Text preview`,1,`preview-stage`],[1,`text-example`,`example-width`],[`bxTooltipTouch`,`longpress`,`placement`,`top`,3,`bxTruncate`,`bxTooltip`],[1,`preview-caption`],[1,`preview-card`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Tag preview`,1,`preview-stage`],[1,`example-width`],[`leadingIcon`,`map-pin`,3,`text`,`tooltipOnTruncate`,`tooltip`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Input field preview`,1,`preview-stage`],[`placeholder`,`Editable value`,`subscriptSizing`,`dynamic`,3,`label`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Search value preview`,1,`preview-stage`],[`ariaLabel`,`Search value`,`subscriptSizing`,`dynamic`,3,`search`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Select preview`,1,`preview-stage`],[`subscriptSizing`,`dynamic`,3,`label`,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Multiselect preview`,1,`preview-stage`],[`label`,`Selected tag`,`selectionDisplay`,`tags`,`subscriptSizing`,`dynamic`,3,`options`,`value`,`tooltipOnTruncate`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Menu item preview`,1,`preview-stage`],[3,`action`,`label`,`wrapLabel`,`tooltipOnTruncate`],[`tabindex`,`0`,`aria-label`,`HTML truncation example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`tabindex`,`0`,`aria-label`,`TypeScript truncation example`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`]],template:function(t,e){if(t&1){let o=wt();_(0,`section`,1)(1,`h3`),X$1(2,`Shared truncation, optional tooltips`),D(),_(3,`p`)(4,`code`),X$1(5,`TruncateDirective`),D(),X$1(6,` owns ellipsis and rendered measurement. The pure `),_(7,`code`),X$1(8,`bxTruncatedText`),D(),X$1(9,` pipe selects text for a conditional tooltip. Use the exported directive signals or `),_(10,`code`),X$1(11,`truncatedText()`),D(),X$1(12,` helper in your own logic. `),D(),_(13,`div`,2)(14,`bx-input-field`,3),hE(`valueChange`,function(s){return Be$1(o),LP(e.text,s)||(e.text=s),Ve(s)}),D(),_(15,`bx-input-field`,4),hE(`valueChange`,function(s){return Be$1(o),LP(e.width,s)||(e.width=s),Ve(s)}),D()(),_(16,`div`,5)(17,`bx-checkbox`,6),hE(`checkedChange`,function(s){return Be$1(o),LP(e.enabled,s)||(e.enabled=s),Ve(s)}),D(),_(18,`bx-checkbox`,7),hE(`checkedChange`,function(s){return Be$1(o),LP(e.largeText,s)||(e.largeText=s),Ve(s)}),D(),_(19,`bx-checkbox`,8),hE(`checkedChange`,function(s){return Be$1(o),LP(e.automaticTooltips,s)||(e.automaticTooltips=s),Ve(s)}),D(),_(20,`bx-checkbox`,9),hE(`checkedChange`,function(s){return Be$1(o),LP(e.customTooltip,s)||(e.customTooltip=s),Ve(s)}),D()(),_(21,`div`,10)(22,`section`,11)(23,`h4`),X$1(24,`Text preview`),D(),_(25,`div`,12)(26,`div`,13)(27,`span`,14,0),Ko$1(29,`bxTruncatedText`),X$1(30),D()()(),_(31,`output`,15),X$1(32),D()(),_(33,`section`,16)(34,`h4`),X$1(35,`Tag`),D(),_(36,`div`,17)(37,`div`,18),xe(38,`bx-tag`,19),D()(),_(39,`p`,15),X$1(40,`Clipped labels use an automatic or application-owned tooltip.`),D()(),_(41,`section`,16)(42,`h4`),X$1(43,`Input field`),D(),_(44,`div`,20)(45,`div`,18),xe(46,`bx-input-field`,21),D()(),_(47,`p`,15),X$1(48,`The floating label shares the truncation measurement.`),D()(),_(49,`section`,16)(50,`h4`),X$1(51,`Search value`),D(),_(52,`div`,22)(53,`div`,18)(54,`bx-search-input`,23),te(`search`,function(s){return e.text.set(s)}),D()()(),_(55,`p`,15),X$1(56,`Editing the search updates the shared example text.`),D()(),_(57,`section`,16)(58,`h4`),X$1(59,`Select`),D(),_(60,`div`,24)(61,`div`,18),xe(62,`bx-select`,25),D()(),_(63,`p`,15),X$1(64,`Selected values and captions share the same available width.`),D()(),_(65,`section`,16)(66,`h4`),X$1(67,`Multiselect`),D(),_(68,`div`,26)(69,`div`,18),xe(70,`bx-multi-select`,27),D()(),_(71,`p`,15),X$1(72,`The selected tag follows the owning control's tooltip setting.`),D()(),_(73,`section`,16)(74,`h4`),X$1(75,`Menu item`),D(),_(76,`div`,28)(77,`div`,18)(78,`bx-menu`)(79,`bx-menu-item`,29),te(`action`,function(){return e.menuActions.set(e.menuActions()+1)}),D()()()(),_(80,`output`,15),X$1(81),D()()(),_(82,`p`),X$1(83,` Change the text or width to switch between clipped and fitting labels. Turn automatic tooltips off to retain ellipsis and measurement for custom feedback. Hover, keyboard focus, and touch-and-hold use the existing tooltip mechanism. Explicit tag descriptions still take precedence. Custom tooltip applies to the text and tag examples. Preview panels keep their size; long wrapped content scrolls inside them. Example widths are capped by the available space in each card. `),D(),_(84,`h3`),X$1(85,`Short conditional tooltip`),D(),_(86,`pre`,30),xe(87,`code`,31),D(),_(88,`h3`),X$1(89,`Disable automatic tooltips`),D(),_(90,`pre`,30),xe(91,`code`,31),D(),_(92,`h3`),X$1(93,`Use the public API in your application`),D(),_(94,`pre`,32),xe(95,`code`,33),D()()}if(t&2){let o=Tt(28);y(14),bE(`value`,e.text),y(),R(`min`,4)(`max`,64),bE(`value`,e.width),y(2),bE(`checked`,e.enabled),y(),bE(`checked`,e.largeText),y(),bE(`checked`,e.automaticTooltips),y(),bE(`checked`,e.customTooltip),y(6),_e(`inline-size`,e.previewWidth(),`rem`),ae(`large-text`,e.largeText()),y(),R(`bxTruncate`,e.enabled())(`bxTooltip`,e.customTooltip()?`My application tooltip`:Zo$1(29,50,e.label(),o.truncated(),e.automaticTooltips())),B(`tabindex`,e.customTooltip()||e.automaticTooltips()&&o.truncated()?0:null),y(3),fe(e.label()),y(2),un(`Text `,o.truncated()?`is truncated`:`fits without truncation`,`.`),y(5),_e(`inline-size`,e.previewWidth(),`rem`),y(),R(`text`,e.label())(`tooltipOnTruncate`,e.automaticTooltips())(`tooltip`,e.customTooltip()?`My application tooltip`:void 0),y(7),_e(`inline-size`,e.previewWidth(),`rem`),y(),R(`label`,e.label())(`tooltipOnTruncate`,e.automaticTooltips()),y(7),_e(`inline-size`,e.previewWidth(),`rem`),y(),R(`value`,e.label())(`tooltipOnTruncate`,e.automaticTooltips()),y(7),_e(`inline-size`,e.previewWidth(),`rem`),y(),R(`label`,e.label())(`options`,e.options())(`value`,0)(`tooltipOnTruncate`,e.automaticTooltips()),y(7),_e(`inline-size`,e.previewWidth(),`rem`),y(),R(`options`,e.options())(`value`,HP(54,Xa))(`tooltipOnTruncate`,e.automaticTooltips()),y(7),_e(`inline-size`,e.previewWidth(),`rem`),y(2),R(`label`,e.label())(`wrapLabel`,!e.enabled())(`tooltipOnTruncate`,e.automaticTooltips()),y(2),un(`Menu activations: `,e.menuActions()),y(6),R(`highlight`,e.pipeExample),y(4),R(`highlight`,e.customExample),y(4),R(`highlight`,e.logicExample)}},dependencies:[ht,Hr,fo$1,No$1,kn,At,hb,bb,sT,qi$1,_o$1,Cl],styles:[`
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
}`]})};var Za=()=>({key:`tagLabel`});var ot=class r{demoI18nService=f(L);label=M(`Skopje`);text=g(()=>String(this.label()??``));color=M(`accent`);variant=M(`tonal`);disabled=M(!1);leadingIcon=M(!0);trailingIcon=M(!0);leadingCount=M(!1);trailingCount=M(!0);leftNumber=M(3);rightNumber=M(12);colors=bi;variants=yi;static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-tag-examples`]],features:[Qt([L,{provide:Se,useExisting:L}])],decls:23,vars:26,consts:[[1,`tag-demo`],[`aria-label`,`Tag previews`,1,`tag-previews`],[`tooltip`,`A location tag tooltip`,3,`text`,`color`,`variant`,`disabled`,`leadingIcon`,`trailingIcon`,`leadingNumber`,`trailingNumber`],[`color`,`info`,`variant`,`filled`,`ariaLabel`,`42 locations`,`tooltip`,`Number-only tag`,3,`leadingNumber`],[`leadingIcon`,`map-pin`,`color`,`success`,3,`text`],[`text`,`Unavailable`,`color`,`neutral`,3,`disabled`],[`text`,`Skopje`],[`text`,`+2`,`tooltip`,`Ohrid, Bitola`],[1,`tag-controls`],[`label`,`Tag text`,3,`valueChange`,`value`],[`label`,`Color`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Appearance`,3,`valueChange`,`clearable`,`options`,`value`],[`label`,`Leading number`,`type`,`number`,3,`valueChange`,`value`],[`label`,`Trailing number`,`type`,`number`,3,`valueChange`,`value`],[1,`tag-controls-checkboxes`],[`label`,`Leading icon`,3,`checkedChange`,`checked`],[`label`,`Trailing icon`,3,`checkedChange`,`checked`],[`label`,`Leading number`,3,`checkedChange`,`checked`],[`label`,`Trailing number`,3,`checkedChange`,`checked`],[`label`,`Disabled appearance`,3,`checkedChange`,`checked`]],template:function(t,e){t&1&&(_(0,`div`,0)(1,`div`,1),xe(2,`bx-tag`,2)(3,`bx-tag`,3)(4,`bx-tag`,4)(5,`bx-tag`,5)(6,`bx-tag`,6)(7,`bx-tag`,7),D(),_(8,`div`,8)(9,`bx-input-field`,9),hE(`valueChange`,function(c){return LP(e.label,c)||(e.label=c),c}),D(),_(10,`bx-select`,10),hE(`valueChange`,function(c){return LP(e.color,c)||(e.color=c),c}),D(),_(11,`bx-select`,11),hE(`valueChange`,function(c){return LP(e.variant,c)||(e.variant=c),c}),D(),_(12,`bx-input-field`,12),hE(`valueChange`,function(c){return LP(e.leftNumber,c)||(e.leftNumber=c),c}),D(),_(13,`bx-input-field`,13),hE(`valueChange`,function(c){return LP(e.rightNumber,c)||(e.rightNumber=c),c}),D()(),_(14,`div`,14)(15,`bx-checkbox`,15),hE(`checkedChange`,function(c){return LP(e.leadingIcon,c)||(e.leadingIcon=c),c}),D(),_(16,`bx-checkbox`,16),hE(`checkedChange`,function(c){return LP(e.trailingIcon,c)||(e.trailingIcon=c),c}),D(),_(17,`bx-checkbox`,17),hE(`checkedChange`,function(c){return LP(e.leadingCount,c)||(e.leadingCount=c),c}),D(),_(18,`bx-checkbox`,18),hE(`checkedChange`,function(c){return LP(e.trailingCount,c)||(e.trailingCount=c),c}),D(),_(19,`bx-checkbox`,19),hE(`checkedChange`,function(c){return LP(e.disabled,c)||(e.disabled=c),c}),D()(),_(20,`p`),X$1(21,` Hover or keyboard-focus a tooltip tag. In a select trigger, the parent control exposes the complete selection while overflow tags show the remaining names on hover. `),D(),xe(22,`app-truncation-examples`),D()),t&2&&(y(2),R(`text`,e.text())(`color`,e.color()??`accent`)(`variant`,e.variant()??`tonal`)(`disabled`,e.disabled())(`leadingIcon`,e.leadingIcon()?`map-pin`:void 0)(`trailingIcon`,e.trailingIcon()?`chevron-right`:void 0)(`leadingNumber`,e.leadingCount()?e.leftNumber():null)(`trailingNumber`,e.trailingCount()?e.rightNumber():null),y(),R(`leadingNumber`,42),y(),R(`text`,HP(25,Za)),y(),R(`disabled`,!0),y(4),bE(`value`,e.label),y(),R(`clearable`,!1)(`options`,e.colors),bE(`value`,e.color),y(),R(`clearable`,!1)(`options`,e.variants),bE(`value`,e.variant),y(),bE(`value`,e.leftNumber),y(),bE(`value`,e.rightNumber),y(2),bE(`checked`,e.leadingIcon),y(),bE(`checked`,e.trailingIcon),y(),bE(`checked`,e.leadingCount),y(),bE(`checked`,e.trailingCount),y(),bE(`checked`,e.disabled))},dependencies:[sT,Hr,fo$1,At,we],styles:[`
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
}`]})};var Ya=()=>[];var xi=(r,a)=>a.value;function Ja(r,a){if(r&1){let t=wt();_(0,`button`,6),te(`click`,function(){let o=Be$1(t).$implicit,c=w();return Ve(c.presentation.set(o.value))}),X$1(1),D()}if(r&2){let t=a.$implicit,e=w();R(`variant`,e.presentation()===t.value?`filled`:`tonal`),y(),un(` `,t.label,` `)}}function $a(r,a){if(r&1){let t=wt();_(0,`button`,6),te(`click`,function(){let o=Be$1(t).$implicit,c=w();return Ve(c.precision.set(o.value))}),X$1(1),D()}if(r&2){let t=a.$implicit,e=w();R(`variant`,e.precision()===t.value?`filled`:`tonal`),y(),un(` `,t.label,` `)}}function eo(r,a){if(r&1){let t=wt();_(0,`button`,6),te(`click`,function(){let o=Be$1(t).$implicit,c=w();return Ve(c.minuteStep.set(o))}),X$1(1),D()}if(r&2){let t=a.$implicit,e=w();R(`variant`,e.minuteStep()===t?`filled`:`tonal`),y(),un(``,t,` min`)}}var rt=class r{destroyRef=f(Q);presentation=M(`wheel`);hourCycle=M(12);precision=M(`minute`);minuteStep=M(5);customChoices=M(!1);dropdownIcon=M(!1);interval=M(void 0);timeOptions=[{value:`09:00`,label:`Morning`},{value:`14:00`,label:`Afternoon`},{value:`12:30`,label:`Lunch (unavailable)`,disabled:!0},{value:`18:00`,label:`Evening`}];loop=M(!0);businessHours=M(!1);blockLunch=M(!0);showTimeZone=M(!1);showNow=M(!1);asyncEnabled=M(!1);availabilityLoading=M(!1);failNext=M(!1);value=M(null);committed=M(`Nothing committed yet.`);presentations=[{value:`wheel`,label:`Wheel`},{value:`list`,label:`List`}];precisions=[{value:`minute`,label:`Minutes`},{value:`second`,label:`Seconds`},{value:`millisecond`,label:`Milliseconds`}];steps=[1,5,15,30];disabledIntervals=[{start:`12:00`,end:`13:00`}];resolver=async()=>{let a=this.failNext(),t=++this.requestRevision;if(this.failNext.set(!1),this.availabilityLoading.set(!0),await new Promise(o=>setTimeout(o,500)),this.destroyRef.destroyed)return{times:[]};if(t===this.requestRevision&&this.availabilityLoading.set(!1),a)throw new Error(`The mock request failed. Retry to load these times.`);let e=[];for(let o=540;o<=1020;o+=30)e.push(`${String(Math.floor(o/60)).padStart(2,`0`)}:${String(o%60).padStart(2,`0`)}`);return{times:e}};requestRevision=0;onCommit(a){this.committed.set(a===null?`Cleared.`:`Committed ${a}.`)}setSemanticChoices(a){this.customChoices.set(a),this.value.set(null),a&&this.presentation.set(`list`)}failRequest(a){this.failNext.set(!0),a.reloadSlots()}static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-time-picker-examples`]],decls:44,vars:32,consts:[[`picker`,``],[`aria-labelledby`,`time-picker-demo-title`,1,`time-demo`],[`id`,`time-picker-demo-title`],[`role`,`group`,`aria-label`,`Presentation`,1,`demo-group`],[`bx-button`,``,`type`,`button`,3,`variant`],[`role`,`group`,`aria-label`,`Selection mode`,1,`demo-group`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`],[`role`,`group`,`aria-label`,`Precision`,1,`demo-group`],[`role`,`group`,`aria-label`,`Minute step`,1,`demo-group`],[1,`demo-toggles`],[`label`,`Now shortcut`,3,`checkedChange`,`checked`],[`label`,`Looping columns`,3,`checkedChange`,`checked`],[`label`,`Limit to 09:00–17:00`,3,`checkedChange`,`checked`],[`label`,`Block 12:00–13:00`,3,`checkedChange`,`checked`],[`label`,`Time-zone selector`,3,`checkedChange`,`checked`],[`label`,`Semantic time choices`,3,`checkedChange`,`checked`],[`label`,`Dropdown icon`,3,`checkedChange`,`checked`],[`label`,`Async slot availability`,3,`checkedChange`,`checked`],[`role`,`group`,`aria-label`,`List interval`,1,`demo-group`],[`role`,`group`,`aria-label`,`Availability requests`,1,`demo-group`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`danger`,3,`click`,`disabled`],[`label`,`Meeting time`,`loadErrorMessage`,`The mock request failed. Retry to load these times.`,`hint`,`Type a time, use the wheel, or choose an option in the list. Enable async availability to exercise loading and retry.`,3,`valueChange`,`valueCommit`,`pickerIcon`,`options`,`interval`,`min`,`max`,`timePresentation`,`hourCycle`,`precision`,`minuteStep`,`loopColumns`,`disabledIntervals`,`showTimeZone`,`nowLabel`,`resolver`,`value`],[`role`,`status`,`aria-live`,`polite`,1,`demo-status`]],template:function(t,e){if(t&1){let o=wt();_(0,`section`,1)(1,`h3`,2),X$1(2,`Time picker: wheel and list`),D(),_(3,`p`),X$1(4,` Type into the field while its dropdown is open, or use the wheel or list below. The wheel tracks real pointer velocity and settles with the shared spring. Every wheel action has keyboard equivalents, and disabled options are skipped instead of being committed. `),D(),_(5,`div`,3),$t(6,Ja,2,2,`button`,4,xi),D(),_(8,`div`,5)(9,`button`,6),te(`click`,function(){return e.hourCycle.set(12)}),X$1(10,`12-hour`),D(),_(11,`button`,6),te(`click`,function(){return e.hourCycle.set(24)}),X$1(12,`24-hour`),D()(),_(13,`div`,7),$t(14,$a,2,2,`button`,4,xi),D(),_(16,`div`,8),$t(17,eo,2,2,`button`,4,Fa$1),D(),_(19,`div`,9)(20,`bx-slide-toggle`,10),hE(`checkedChange`,function(s){return Be$1(o),LP(e.showNow,s)||(e.showNow=s),Ve(s)}),D(),_(21,`bx-slide-toggle`,11),hE(`checkedChange`,function(s){return Be$1(o),LP(e.loop,s)||(e.loop=s),Ve(s)}),D(),_(22,`bx-slide-toggle`,12),hE(`checkedChange`,function(s){return Be$1(o),LP(e.businessHours,s)||(e.businessHours=s),Ve(s)}),D(),_(23,`bx-slide-toggle`,13),hE(`checkedChange`,function(s){return Be$1(o),LP(e.blockLunch,s)||(e.blockLunch=s),Ve(s)}),D(),_(24,`bx-slide-toggle`,14),hE(`checkedChange`,function(s){return Be$1(o),LP(e.showTimeZone,s)||(e.showTimeZone=s),Ve(s)}),D(),_(25,`bx-slide-toggle`,15),te(`checkedChange`,function(s){return e.setSemanticChoices(s)}),D(),_(26,`bx-slide-toggle`,16),hE(`checkedChange`,function(s){return Be$1(o),LP(e.dropdownIcon,s)||(e.dropdownIcon=s),Ve(s)}),D(),_(27,`bx-slide-toggle`,17),hE(`checkedChange`,function(s){return Be$1(o),LP(e.asyncEnabled,s)||(e.asyncEnabled=s),Ve(s)}),D()(),_(28,`div`,18)(29,`button`,6),te(`click`,function(){return e.interval.set(void 0)}),X$1(30,`Use minute step`),D(),_(31,`button`,6),te(`click`,function(){return Be$1(o),e.interval.set(`30m`),Ve(e.presentation.set(`list`))}),X$1(32,` 30-minute list `),D(),_(33,`button`,6),te(`click`,function(){return Be$1(o),e.interval.set(`1.5 hours`),Ve(e.presentation.set(`list`))}),X$1(34,` 90-minute list `),D()(),_(35,`div`,19)(36,`button`,20),te(`click`,function(){Be$1(o);let s=Tt(41);return Ve(s.reloadSlots())}),X$1(37,`Reload times`),D(),_(38,`button`,21),te(`click`,function(){Be$1(o);let s=Tt(41);return Ve(e.failRequest(s))}),X$1(39,` Fail next request now `),D()(),_(40,`bx-time-picker`,22,0),hE(`valueChange`,function(s){return Be$1(o),LP(e.value,s)||(e.value=s),Ve(s)}),te(`valueCommit`,function(s){return e.onCommit(s)}),D(),_(42,`p`,23),X$1(43),D()()}t&2&&(y(6),Wt(e.presentations),y(3),R(`variant`,e.hourCycle()===12?`filled`:`tonal`),y(2),R(`variant`,e.hourCycle()===24?`filled`:`tonal`),y(3),Wt(e.precisions),y(3),Wt(e.steps),y(3),bE(`checked`,e.showNow),y(),bE(`checked`,e.loop),y(),bE(`checked`,e.businessHours),y(),bE(`checked`,e.blockLunch),y(),bE(`checked`,e.showTimeZone),y(),R(`checked`,e.customChoices()),y(),bE(`checked`,e.dropdownIcon),y(),bE(`checked`,e.asyncEnabled),y(2),R(`variant`,e.interval()===void 0?`filled`:`tonal`),y(2),R(`variant`,e.interval()===`30m`?`filled`:`tonal`),y(2),R(`variant`,e.interval()===`1.5 hours`?`filled`:`tonal`),y(3),R(`disabled`,!e.asyncEnabled()||e.availabilityLoading()),y(2),R(`disabled`,!e.asyncEnabled()||e.availabilityLoading()),y(2),R(`pickerIcon`,e.dropdownIcon()?`chevron-down`:`clock`)(`options`,e.customChoices()?e.timeOptions:void 0)(`interval`,e.interval())(`min`,e.businessHours()?`09:00`:null)(`max`,e.businessHours()?`17:00`:null)(`timePresentation`,e.presentation())(`hourCycle`,e.hourCycle())(`precision`,e.precision())(`minuteStep`,e.minuteStep())(`loopColumns`,e.loop())(`disabledIntervals`,e.blockLunch()?e.disabledIntervals:HP(31,Ya))(`showTimeZone`,e.showTimeZone())(`nowLabel`,e.showNow()?`Select now`:void 0)(`resolver`,e.asyncEnabled()?e.resolver:void 0),bE(`value`,e.value),y(3),fe(e.committed()))},dependencies:[me,yo$1,Vo$1],styles:[`
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
}`]})};function to(r,a){if(r&1&&(_(0,`strong`),X$1(1),D()),r&2){let t=w(2);y(),fe(t.text().brand)}}function no(r,a){if(r&1&&(_(0,`a`,13),xe(1,`bx-icon`,14),j(2,to,2,1,`strong`),D()),r&2){let t=a.$implicit,e=w();B(`aria-label`,e.text().brand),y(2),F(t?-1:2)}}function io(r,a){if(r&1){let t=wt();_(0,`button`,15),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.action.set(`top.actionDone`))}),xe(1,`bx-icon`,16),X$1(2),D(),_(3,`button`,15),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.action.set(`top.helpDone`))}),xe(4,`bx-icon`,17),X$1(5),D()}if(r&2){let t=w(2);y(2),un(``,t.text().settings,` `),y(3),un(``,t.text().help,` `)}}function ao(r,a){if(r&1&&j(0,io,6,2),r&2){let t=w();F(t.actions()?0:-1)}}function oo(r,a){if(r&1&&(xe(0,`bx-icon`,18),_(1,`span`),X$1(2),D(),_(3,`small`,19),X$1(4,`↗`),D()),r&2){let t=a.$implicit;R(`name`,t.icon?.name??`circle`),y(2),fe(t.label)}}var lt=class r{navigationDemoI18nService=f(ie);groups=g(()=>tt(`/components/top-nav`,this.navigationDemoI18nService).map(t=>t.id!==`workspace`?t:s$1(r$1({},t),{items:t.items.filter(e=>e.id===`overview`||e.id===`projects`).map(e=>e.id!==`projects`?e:s$1(r$1({},e),{children:[...e.children??[],...t.items.filter(o=>o.id===`reports`||o.id===`disabled`)]}))})));compact=M(!1);searchable=M(!0);icons=M(!1);sticky=M(!1);rtl=M(!1);custom=M(!1);actions=M(!1);width=M(1100);selected=M(void 0);action=M(void 0);text=g(()=>({compact:this.navigationDemoI18nService.translate(`top.compact`),width:this.navigationDemoI18nService.translate(`top.width`),icons:this.navigationDemoI18nService.translate(`top.icons`),sticky:this.navigationDemoI18nService.translate(`top.sticky`),custom:this.navigationDemoI18nService.translate(`top.custom`),actions:this.navigationDemoI18nService.translate(`top.actions`),search:this.navigationDemoI18nService.translate(`demo.search`),rtl:this.navigationDemoI18nService.translate(`demo.rtl`),language:this.navigationDemoI18nService.translate(`demo.language`),brand:this.navigationDemoI18nService.translate(`demo.studio`),title:this.navigationDemoI18nService.translate(`top.title`),description:this.navigationDemoI18nService.translate(`top.description`),compactMode:this.navigationDemoI18nService.translate(`top.modeCompact`),expandedMode:this.navigationDemoI18nService.translate(`top.modeExpanded`),settings:this.navigationDemoI18nService.translate(`top.settings`),help:this.navigationDemoI18nService.translate(`top.help`)}));selection=g(()=>{let a=this.selected(),t=this.action();return t?this.navigationDemoI18nService.translate(t):a?`${this.navigationDemoI18nService.translate(`nav.${a.id}`)} \xB7 ${a.id}`:this.navigationDemoI18nService.translate(`demo.select`)});config=g(()=>({position:this.sticky()?`sticky`:`inline`,compactBreakpoint:`sm`,compact:this.compact()?!0:void 0,searchable:this.searchable(),showItemIcons:this.icons(),showSectionIcons:this.icons(),ariaLabel:{key:`top.name`},searchLabel:{key:`nav.search`},searchPlaceholder:{key:`top.searchPlaceholder`},clearSearchLabel:{key:`nav.clear`},emptyText:{key:`nav.empty`},openLabel:{key:`nav.open`},closeLabel:{key:`nav.close`},submenuLabel:{key:`nav.submenu`},resultLabel:{key:`nav.result`},backLabel:{key:`nav.back`},pathLabel:{key:`nav.path`},breadcrumbConfig:{overflowLabel:{key:`nav.hiddenPath`}}}));select(a){this.action.set(void 0),this.selected.set(a)}static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-top-nav-examples`]],features:[Qt([ie,{provide:Se,useExisting:ie}])],decls:27,vars:32,consts:[[`nav`,``],[`customItem`,``],[1,`demo-language-row`],[`subscriptSizing`,`dynamic`,3,`selectionChange`,`label`,`clearable`,`options`,`value`],[1,`top-nav-demo-controls`],[3,`checkedChange`,`label`,`checked`],[`type`,`number`,3,`valueChange`,`label`,`min`,`max`,`value`],[1,`top-nav-demo-frame`],[3,`itemSelected`,`config`,`groups`,`itemTemplate`],[`bxTopNavBrand`,``],[`bxTopNavActions`,``],[1,`top-nav-demo-content`],[`aria-live`,`polite`],[`routerLink`,`/components/top-nav/overview`,1,`top-nav-demo-brand`],[`name`,`blocks`,`size`,`24`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`type`,`button`,3,`click`],[`name`,`settings`,`size`,`20`],[`name`,`circle-help`,`size`,`20`],[`size`,`20`,3,`name`],[`aria-hidden`,`true`]],template:function(t,e){if(t&1){let o=wt();_(0,`div`,2)(1,`bx-select`,3),te(`selectionChange`,function(s){return e.navigationDemoI18nService.setLanguage(s.value)}),D()(),_(2,`div`,4)(3,`bx-checkbox`,5),hE(`checkedChange`,function(s){return Be$1(o),LP(e.compact,s)||(e.compact=s),Ve(s)}),D(),_(4,`bx-checkbox`,5),hE(`checkedChange`,function(s){return Be$1(o),LP(e.searchable,s)||(e.searchable=s),Ve(s)}),D(),_(5,`bx-checkbox`,5),hE(`checkedChange`,function(s){return Be$1(o),LP(e.icons,s)||(e.icons=s),Ve(s)}),D(),_(6,`bx-checkbox`,5),hE(`checkedChange`,function(s){return Be$1(o),LP(e.sticky,s)||(e.sticky=s),Ve(s)}),D(),_(7,`bx-checkbox`,5),hE(`checkedChange`,function(s){return Be$1(o),LP(e.rtl,s)||(e.rtl=s),Ve(s)}),D(),_(8,`bx-checkbox`,5),hE(`checkedChange`,function(s){return Be$1(o),LP(e.custom,s)||(e.custom=s),Ve(s)}),D(),_(9,`bx-checkbox`,5),hE(`checkedChange`,function(s){return Be$1(o),LP(e.actions,s)||(e.actions=s),Ve(s)}),D(),_(10,`bx-input-field`,6),hE(`valueChange`,function(s){return Be$1(o),LP(e.width,s)||(e.width=s),Ve(s)}),D()(),_(11,`div`,7)(12,`bx-top-nav`,8,0),te(`itemSelected`,function(s){return e.select(s)}),Pa$1(14,no,3,2,`ng-template`,9)(15,ao,1,1,`ng-template`,10),D(),_(16,`div`,11)(17,`h3`),X$1(18),D(),_(19,`p`),X$1(20),D(),_(21,`p`),X$1(22),D(),_(23,`output`,12),X$1(24),D()()(),Pa$1(25,oo,5,2,`ng-template`,null,1,kr$1)}if(t&2){let o=Tt(13),c=Tt(26);y(),R(`label`,e.text().language)(`clearable`,!1)(`options`,e.navigationDemoI18nService.languages)(`value`,e.navigationDemoI18nService.language()),y(2),R(`label`,e.text().compact),bE(`checked`,e.compact),y(),R(`label`,e.text().search),bE(`checked`,e.searchable),y(),R(`label`,e.text().icons),bE(`checked`,e.icons),y(),R(`label`,e.text().sticky),bE(`checked`,e.sticky),y(),R(`label`,e.text().rtl),bE(`checked`,e.rtl),y(),R(`label`,e.text().custom),bE(`checked`,e.custom),y(),R(`label`,e.text().actions),bE(`checked`,e.actions),y(),R(`label`,e.text().width)(`min`,280)(`max`,1600),bE(`value`,e.width),y(),_e(`width`,e.width()+`px`),B(`dir`,e.rtl()?`rtl`:`ltr`),y(),R(`config`,e.config())(`groups`,e.groups())(`itemTemplate`,e.custom()?c:void 0),y(6),fe(e.text().title),y(2),fe(e.text().description),y(2),fe(o.isCompact()?e.text().compactMode:e.text().expandedMode),y(2),fe(e.selection())}},dependencies:[$f,ot$1,jn,Gn,me,Hr,fo$1,At,Vt],styles:[`
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
}`]})};var fi=Array.from({length:3e3},(r,a)=>({id:a,title:`Item ${a+1}`,description:`Variable-height content wraps when the grid changes width. `.repeat(1+a%5)}));function ro(r,a){if(r&1&&(_(0,`p`),X$1(1),D()),r&2){let t=w().$implicit;y(),uE(``,t.description,` `,t.description)}}function lo(r,a){if(r&1){let t=wt();_(0,`bx-card`,12)(1,`p`),X$1(2),D(),j(3,ro,2,2,`p`),_(4,`button`,5),te(`click`,function(){let o=Be$1(t).$implicit,c=w();return Ve(c.toggle(o.id))}),X$1(5),D()()}if(r&2){let t=a.$implicit,e=w();R(`title`,t.title)(`headingLevel`,3)(`surfaceEffects`,!1)(`opaque`,!0),y(2),fe(t.description),y(),F(e.expanded().has(t.id)?3:-1),y(),B(`aria-expanded`,e.expanded().has(t.id)),y(),un(` `,e.expanded().has(t.id)?`Less content`:`More content`,` `)}}var st=class r{items=fi;itemKey=a=>a.id;layouts=[{label:`Responsive grid`,value:`grid`},{label:`Vertical list`,value:`list`}];layout=M(`grid`);width=M(100);index=M(1500);expanded=M(/* @__PURE__ */ new Set);config=g(()=>({layout:this.layout(),minColumnWidth:`12rem`,estimatedRowHeight:200,overscan:800}));toggle(a){this.expanded.update(t=>{let e=new Set(t);return e.has(a)?e.delete(a):e.add(a),e})}static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-virtual-collection-examples`]],decls:15,vars:20,consts:[[`viewport`,``],[`collection`,``],[1,`virtual-demo-controls`],[`label`,`Layout`,3,`ngModelChange`,`clearable`,`options`,`ngModel`],[`label`,`Scroll to index`,`type`,`number`,3,`ngModelChange`,`min`,`max`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`for`,`virtual-demo-width`],[`id`,`virtual-demo-width`,`bxSlider`,``,`type`,`range`,`min`,`40`,`max`,`100`,3,`ngModelChange`,`ngModel`],[`role`,`status`],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Virtual collection example`,1,`virtual-demo-viewport`],[3,`items`,`trackBy`,`config`,`scrollContainer`],[3,`bxVirtualItem`],[3,`title`,`headingLevel`,`surfaceEffects`,`opaque`]],template:function(t,e){if(t&1){let o=wt();_(0,`div`,2)(1,`bx-select`,3),zA(),te(`ngModelChange`,function(s){return e.layout.set(s)}),D(),_(2,`bx-input-field`,4),zA(),te(`ngModelChange`,function(s){return e.index.set(s)}),D(),_(3,`button`,5),te(`click`,function(){Be$1(o);let s=Tt(13);return Ve(s.scrollToIndex(e.index()))}),X$1(4,`Scroll to item`),D()(),_(5,`label`,6),X$1(6),D(),_(7,`input`,7),zA(),te(`ngModelChange`,function(s){return e.width.set(s)}),D(),_(8,`p`,8),X$1(9),D(),_(10,`div`,9,0)(12,`bx-virtual-collection`,10,1),Pa$1(14,lo,6,8,`ng-template`,11),D()()}if(t&2){let o=Tt(11),c=Tt(13);y(),R(`clearable`,!1)(`options`,e.layouts)(`ngModel`,e.layout()),qA(),y(),R(`min`,0)(`max`,e.items.length-1)(`ngModel`,e.index()),qA(),y(4),un(`Container width `,e.width(),`%`),y(),R(`ngModel`,e.width()),qA(),y(2),mE(` `,c.renderedItems().length,` mounted of `,e.items.length,` · `,c.renderedRange().columns,` columns · range `,c.renderedRange().start,`–`,c.renderedRange().end,`
`),y(),_e(`inline-size`,e.width(),`%`),y(2),R(`items`,e.items)(`trackBy`,e.itemKey)(`config`,e.config())(`scrollContainer`,o),y(2),R(`bxVirtualItem`,c)}},dependencies:[zie,FM,cB,jie,aB,me,fo$1,At,Ft,pT,MT,eu],styles:[`
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
}`]})};function so(r,a){if(r&1&&(_(0,`div`)(1,`strong`),X$1(2),D()()),r&2){let t=w();y(2),fe(t.data.title)}}function co(r,a){if(r&1){let t=wt();_(0,`div`,4)(1,`button`,5),te(`click`,function(){Be$1(t);let o=w();return Ve(o.close())}),X$1(2,`Cancel`),D(),_(3,`button`,6),te(`click`,function(){Be$1(t);let o=w();return Ve(o.confirm())}),X$1(4,`Save changes`),D()()}}var ct=class r extends bn{name=new rI(`Blocks workspace`,{nonNullable:!0});confirm(){this.modal.close(`confirm`,this.name.value)}static ɵfac=(()=>{let a;return function(e){return(a||(a=Wo$1(r)))(e||r)}})();static ɵcmp=G({type:r,selectors:[[`app-component-dialog`]],features:[Cn],decls:6,vars:2,consts:[[4,`appModalHeader`],[1,`dialog-body`],[`label`,`Project name`,3,`formControl`],[`class`,`dialog-actions`,4,`appModalFooter`],[1,`dialog-actions`],[`type`,`button`,`bx-button`,``,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(t,e){t&1&&(Pa$1(0,so,3,1,`div`,0),_(1,`div`,1)(2,`p`),X$1(3),D(),_(4,`bx-input-field`,2),zA(),D()(),Pa$1(5,co,5,0,`div`,3)),t&2&&(y(3),fe(e.data.description),y(),R(`formControl`,e.name),qA())},dependencies:[me,fo$1,Hie,jie,uB,gn,fn],styles:[`
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
}`]})};var mo=()=>({required:`Enter a project name.`});var po=()=>({email:`Enter a valid email address.`});var uo=()=>({name:`settings`});var go=r=>({text:`Project settings`,icon:r});function bo(r,a){r&1&&(_(0,`div`,10),xe(1,`app-side-nav-examples`),D())}function yo(r,a){r&1&&(_(0,`div`,10),xe(1,`app-top-nav-examples`),D())}function _o(r,a){r&1&&(_(0,`div`,10),xe(1,`app-stepper-examples`),D())}function ho(r,a){r&1&&xe(0,`app-bottom-drawer-examples`)}function vo(r,a){r&1&&xe(0,`app-calendar-examples`)}function xo(r,a){r&1&&xe(0,`app-date-picker-examples`)}function fo(r,a){r&1&&xe(0,`app-time-picker-examples`)}function So(r,a){r&1&&xe(0,`app-virtual-collection-examples`)}function Co(r,a){r&1&&xe(0,`app-resize-handle-examples`)}function wo(r,a){r&1&&xe(0,`app-side-panel-examples`)}function ko(r,a){r&1&&xe(0,`app-infinite-scroll-examples`)}function Eo(r,a){r&1&&xe(0,`app-essentials-examples`,21)}function To(r,a){r&1&&xe(0,`app-essentials-examples`,22)}function Mo(r,a){r&1&&xe(0,`app-essentials-examples`,23)}function Do(r,a){r&1&&xe(0,`app-essentials-examples`,24)}function Po(r,a){r&1&&xe(0,`app-essentials-examples`,25)}function No(r,a){r&1&&xe(0,`app-essentials-examples`,26)}function Io(r,a){r&1&&xe(0,`app-essentials-examples`,27)}function Vo(r,a){r&1&&xe(0,`app-essentials-examples`,28)}function Wo(r,a){r&1&&xe(0,`app-essentials-examples`,29)}function Oo(r,a){r&1&&xe(0,`app-page-examples`)}function zo(r,a){r&1&&xe(0,`app-essentials-examples`,30)}function Lo(r,a){r&1&&xe(0,`app-essentials-examples`,31)}function Ro(r,a){r&1&&xe(0,`app-essentials-examples`,32)}function Bo(r,a){r&1&&xe(0,`app-tag-examples`)}function Ao(r,a){r&1&&xe(0,`app-truncation-examples`)}function Fo(r,a){r&1&&xe(0,`app-form-examples`,33)}function qo(r,a){r&1&&xe(0,`app-form-examples`,34)}function jo(r,a){r&1&&xe(0,`app-form-examples`,35)}function Ho(r,a){r&1&&xe(0,`app-form-examples`,36)}function Uo(r,a){r&1&&xe(0,`app-form-examples`,37)}function Go(r,a){r&1&&xe(0,`app-form-examples`,38)}function Ko(r,a){r&1&&xe(0,`app-form-examples`,39)}function Qo(r,a){r&1&&xe(0,`app-form-examples`,40)}function Xo(r,a){r&1&&xe(0,`app-form-examples`,41)}function Zo(r,a){r&1&&xe(0,`app-form-examples`,42)}function Yo(r,a){r&1&&xe(0,`app-form-examples`,43)}function Jo(r,a){r&1&&xe(0,`app-form-examples`,44)}function $o(r,a){r&1&&xe(0,`app-form-examples`,45)}function er(r,a){if(r&1){let t=wt();_(0,`div`,46)(1,`div`,51)(2,`button`,52),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.activate(`Primary action`))}),X$1(3,`Primary action`),D(),_(4,`button`,53),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.activate(`Tonal action`))}),X$1(5,`Tonal`),D(),_(6,`button`,54),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.activate(`Text action`))}),X$1(7,`Text`),D(),_(8,`button`,55),X$1(9,`Disabled`),D()(),_(10,`div`,51)(11,`button`,56),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.activate(`Success`))}),X$1(12,`Success`),D(),_(13,`button`,57),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.activate(`Warning`))}),X$1(14,`Warning`),D(),_(15,`button`,58),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.activate(`Delete`))}),X$1(16,`Delete`),D(),_(17,`button`,59),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.activate(`Add item`))}),xe(18,`bx-icon`,60),D()(),_(19,`div`,51)(20,`button`,61),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.activate(`Close example`))}),xe(21,`bx-icon`,62),D(),_(22,`button`,63),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.activate(`Outlined action`))}),X$1(23,`Outlined`),D(),_(24,`button`,64),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.activate(`Action without runtime effects`))}),X$1(25,` Without runtime effects `),D()()()}r&2&&(y(8),R(`disabled`,!0),y(14),R(`outlined`,!0),y(2),R(`surfaceEffects`,!1))}function tr(r,a){if(r&1&&(_(0,`div`,46)(1,`bx-checkbox`,65),zA(),D(),_(2,`bx-checkbox`,66),zA(),D(),_(3,`div`,51),xe(4,`bx-checkbox-indicator`,67),_(5,`span`),X$1(6),D()(),_(7,`div`,51),xe(8,`bx-checkbox-indicator`),_(9,`span`),X$1(10,`Unchecked`),D(),xe(11,`bx-checkbox-indicator`,68),_(12,`span`),X$1(13,`Checked`),D(),xe(14,`bx-checkbox-indicator`,69),_(15,`span`),X$1(16,`Partial`),D()()()),r&2){let t=w(2);y(),R(`formControl`,t.checked),qA(),y(),R(`formControl`,t.secondChecked),qA(),y(2),R(`checked`,t.checked.value)(`indeterminate`,t.secondChecked.value),y(2),un(`Selection: `,t.secondChecked.value?`partial`:t.checked.value?`checked`:`unchecked`),y(5),R(`checked`,!0),y(3),R(`indeterminate`,!0)}}function nr(r,a){if(r&1&&(_(0,`div`,46)(1,`bx-checkbox`,70),zA(),D(),_(2,`bx-checkbox`,71),zA(),D(),xe(3,`bx-checkbox`,72)(4,`bx-checkbox`,73)(5,`bx-checkbox`,74),_(6,`bx-checkbox`,75),zA(),D(),_(7,`output`),X$1(8),D()()),r&2){let t=w(2);y(),R(`formControl`,t.checked),qA(),y(),R(`formControl`,t.secondChecked),qA(),y(),R(`indeterminate`,!0),y(),R(`checked`,!0)(`emissive`,!1),y(),R(`checked`,!0)(`readOnly`,!0),y(),R(`formControl`,t.disabledCheck),qA(),y(2),uE(`Updates: `,t.checked.value?`on`:`off`,` · Previews: `,t.secondChecked.value?`on`:`off`)}}function ir(r,a){if(r&1){let t=wt();_(0,`div`,47)(1,`bx-form-field`,76)(2,`span`,77)(3,`input`,78),te(`input`,function(o){Be$1(t);let c=w(2);return Ve(c.updateField(o))})(`blur`,function(){Be$1(t);let o=w(2);return Ve(o.showError.set(!0))}),D()()(),_(4,`button`,79),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.showError.set(!0))}),X$1(5,`Validate name`),D(),_(6,`output`),X$1(7),D()()}if(r&2){let t=w(2);y(),R(`required`,!0)(`error`,t.fieldError()),y(2),R(`value`,t.fieldValue()),B(`aria-invalid`,!!t.fieldError()),y(4),un(`Value: `,t.fieldValue()||`empty`)}}function ar(r,a){if(r&1&&(_(0,`div`,47)(1,`bx-input-field`,80),zA(),D(),_(2,`bx-input-field`,81),zA(),D(),_(3,`bx-input-field`,82),zA(),D(),_(4,`output`),X$1(5),D()()),r&2){let t=w(2);y(),R(`errorMessages`,HP(9,mo))(`formControl`,t.name),qA(),y(),R(`errorMessages`,HP(10,po))(`formControl`,t.email),qA(),y(),R(`min`,1)(`max`,20)(`formControl`,t.quantity),qA(),y(2),uE(``,t.name.value,` · `,t.quantity.value,` members`)}}function or(r,a){if(r&1){let t=wt();_(0,`fieldset`,46)(1,`legend`),X$1(2,`Notification frequency`),D(),_(3,`bx-radio`,83),zA(),D(),_(4,`bx-radio`,84),zA(),D(),_(5,`bx-radio`,85),zA(),D(),_(6,`output`),X$1(7),D(),_(8,`button`,54),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.frequency.reset())}),X$1(9,`Reset frequency`),D()()}if(r&2){let t=w(2);y(3),R(`formControl`,t.frequency),qA(),y(),R(`formControl`,t.frequency),qA(),y(),R(`formControl`,t.frequency),qA(),y(2),un(`Selected: `,t.frequency.value)}}function rr(r,a){r&1&&xe(0,`app-search-examples`)}function lr(r,a){r&1&&xe(0,`app-form-examples`,48)}function sr(r,a){if(r&1){let t=wt();_(0,`div`,47)(1,`p`),X$1(2,`Drag quickly to compare immediate native precision with the thumb's bounded stretch and release settling.`),D(),_(3,`label`,86),X$1(4,`Volume`),D(),_(5,`input`,87),zA(),D(),_(6,`output`),X$1(7),D(),_(8,`button`,54),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.volume.setValue(50))}),X$1(9,`Reset volume`),D(),_(10,`label`,88),X$1(11,`Unavailable range`),D(),xe(12,`input`,89),_(13,`div`,51)(14,`button`,90),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.volume.setValue(20))}),X$1(15,`20%`),D(),_(16,`button`,90),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.volume.setValue(80))}),X$1(17,`80%`),D()()()}if(r&2){let t=w(2);y(5),R(`formControl`,t.volume),qA(),y(2),un(``,t.volume.value,`%`)}}function cr(r,a){if(r&1){let t=wt();_(0,`div`,46)(1,`p`),X$1(2,` Toggle repeatedly or use the programmatic action while the thumb is moving. Appearance settings control reduced motion independently of opacity. `),D(),_(3,`bx-slide-toggle`,91),zA(),D(),_(4,`bx-slide-toggle`,75),zA(),D(),_(5,`output`),X$1(6),D(),_(7,`button`,90),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.enabled.setValue(!o.enabled.value))}),X$1(8,`Toggle programmatically`),D()()}if(r&2){let t=w(2);y(3),R(`formControl`,t.enabled),qA(),y(),R(`formControl`,t.disabledCheck),qA(),y(2),un(`Notifications are `,t.enabled.value?`enabled`:`disabled`,`.`)}}function dr(r,a){if(r&1&&(_(0,`bx-error`,94),X$1(1),D()),r&2){let t=w(3);y(),fe(t.fieldError())}}function mr(r,a){if(r&1){let t=wt();_(0,`div`,47)(1,`bx-form-field`,92)(2,`span`,77)(3,`input`,93),te(`input`,function(o){Be$1(t);let c=w(2);return Ve(c.updateField(o))})(`blur`,function(){Be$1(t);let o=w(2);return Ve(o.showError.set(!0))}),D()(),j(4,dr,2,1,`bx-error`,94),D(),_(5,`button`,79),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.showError.set(!0))}),X$1(6,`Validate reference`),D()()}if(r&2){let t=w(2);y(3),R(`value`,t.fieldValue()),B(`aria-invalid`,!!t.fieldError())(`aria-describedby`,t.fieldError()?`custom-error`:null),y(),F(t.fieldError()?4:-1)}}function pr(r,a){if(r&1&&(_(0,`p`),X$1(1,`Keep related information together while showing one panel at a time.`),D(),_(2,`bx-input-field`,102),zA(),D()),r&2){let t=w(3);y(2),R(`formControl`,t.tabNote),qA()}}function ur(r,a){r&1&&(_(0,`p`),X$1(1,`Headers support arrow keys, Home and End. Panel content is created only when selected.`),D())}function gr(r,a){r&1&&(_(0,`bx-tab`,99)(1,`p`),X$1(2,`No recent project activity.`),D()())}function br(r,a){if(r&1&&(_(0,`bx-tab`,103)(1,`p`),X$1(2),D()()),r&2){let t=a.$implicit;R(`label`,`Additional panel `+t)(`value`,`extra-`+t),y(2),un(`Panel `,t,` keeps navigation reachable through the scrolling header.`)}}function yr(r,a){if(r&1&&$t(0,br,3,3,`bx-tab`,103,Fa$1),r&2){let t=w(3);Wt(t.extraTabs)}}function _r(r,a){if(r&1){let t=wt();_(0,`div`,46)(1,`p`),X$1(2,` Swipe to scroll on touch, or hold a tab briefly before dragging to select. Compare a short flick with a slow drag and pause before release. Enable Overflow tabs and hold near an edge to keep scrolling. Use Appearance to compare reduced motion and opaque surfaces. With Reduce transparency enabled, the active tab keeps its filled selection shape in both appearances. `),D(),_(3,`bx-tabs`,95,0),hE(`selectedValueChange`,function(o){Be$1(t);let c=w(2);return LP(c.selectedTab,o)||(c.selectedTab=o),Ve(o)}),_(5,`bx-tab`,96),Pa$1(6,pr,3,1,`ng-template`,97),D(),_(7,`bx-tab`,98),Pa$1(8,ur,2,0,`ng-template`,97),D(),j(9,gr,3,0,`bx-tab`,99),xe(10,`bx-tab`,100),j(11,yr,2,0),D(),_(12,`div`,51)(13,`button`,79),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.tabsVariant.set(o.tabsVariant()===`segmented`?`underline`:`segmented`))}),X$1(14,` Underline appearance `),D(),_(15,`button`,79),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.detailsDisabled.set(!o.detailsDisabled()))}),X$1(16,` Disable details `),D(),_(17,`button`,79),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.showActivity.set(!o.showActivity()))}),X$1(18,` Show activity `),D()(),_(19,`output`),X$1(20),D(),_(21,`div`,51)(22,`button`,90),te(`click`,function(){Be$1(t);let o=Tt(4);return Ve(o.select(`overview`))}),X$1(23,`Select overview`),D(),_(24,`button`,101),te(`click`,function(){Be$1(t);let o=Tt(4);return Ve(o.select(`activity`))}),X$1(25,`Select activity`),D(),_(26,`button`,90),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.overflowTabs.set(!o.overflowTabs()))}),X$1(27,` Overflow tabs `),D()()()}if(r&2){let t=w(2);y(3),R(`variant`,t.tabsVariant()),bE(`selectedValue`,t.selectedTab),y(4),R(`disabled`,t.detailsDisabled()),y(2),F(t.showActivity()?9:-1),y(),R(`disabled`,!0),y(),F(t.overflowTabs()?11:-1),y(2),B(`aria-pressed`,t.tabsVariant()===`underline`),y(2),B(`aria-pressed`,t.detailsDisabled()),y(2),B(`aria-pressed`,t.showActivity()),y(3),un(`Selected: `,t.selectedTab()),y(4),R(`disabled`,!t.showActivity()),y(2),B(`aria-pressed`,t.overflowTabs())}}function hr(r,a){r&1&&xe(0,`app-menu-shortcut-examples`)}function vr(r,a){r&1&&xe(0,`app-menu-shortcut-examples`)}function xr(r,a){r&1&&(_(0,`div`,46),xe(1,`bx-tooltip`,104),_(2,`p`),X$1(3,`Standalone tooltip content. Use the trigger directive for positioned help.`),D(),_(4,`a`,105),X$1(5,`Try the tooltip trigger`),D()())}function fr(r,a){if(r&1){let t=wt();_(0,`div`,46)(1,`div`,51)(2,`button`,106),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.activate(`Saved`))}),X$1(3,` Save project`),D(),_(4,`button`,107),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.activate(`Normal tap activated`))}),X$1(5,` Hold for a hint`),D(),_(6,`button`,108),xe(7,`bx-icon`,109),D()(),_(8,`p`),X$1(9,` Hover with a mouse or use keyboard focus for hints. On touch screens, Save project activates immediately, Hold for a hint supports a long press, and the information button opens help on tap. `),D()()}}function Sr(r,a){if(r&1){let t=wt();_(0,`bx-menu`)(1,`bx-menu-item`,112),te(`action`,function(){Be$1(t),w();let o=Tt(2);return w(2).activate(`Project duplicated`),Ve(o.close())}),D(),_(2,`bx-menu-item`,113),te(`action`,function(){Be$1(t),w();let o=Tt(2);return w(2).activate(`Project archived`),Ve(o.close())}),D(),_(3,`bx-menu-item`,114),te(`action`,function(){Be$1(t),w();let o=Tt(2);return w(2).activate(`Delete requested`),Ve(o.close())}),D()()}r&2&&(y(3),R(`danger`,!0))}function Cr(r,a){if(r&1&&(_(0,`div`,46)(1,`button`,110,1),X$1(3,` Project actions `),xe(4,`bx-icon`,111),D(),Pa$1(5,Sr,4,1,`ng-template`,null,2,kr$1),_(7,`output`),X$1(8),D(),_(9,`p`),X$1(10,`Open, close, or reopen while the menu fades. Its contents keep their full size throughout.`),D()()),r&2){let t=Tt(2),e=Tt(6);y(),R(`bxDropdown`,e),y(7),un(`Transition: `,t.state())}}function wr(r,a){if(r&1){let t=wt();_(0,`bx-menu`)(1,`bx-menu-item`,116),te(`action`,function(){Be$1(t);let o=w(3);return Ve(o.activate(`Selection copied`))}),D(),_(2,`bx-menu-item`,117),te(`action`,function(){Be$1(t);let o=w(3);return Ve(o.activate(`Selection archived`))}),D()()}}function kr(r,a){if(r&1){let t=wt();_(0,`div`,46)(1,`div`,115),X$1(2,` Right-click, touch and hold, or focus here and press Shift + F10. `),D(),_(3,`button`,79),te(`click`,function(o){Be$1(t);let c=w(2);return Ve(c.openContextMenu(o))}),X$1(4,`Open actions`),D(),Pa$1(5,wr,3,0,`ng-template`,null,3,kr$1),_(7,`p`),X$1(8,`Menu rows keep their hover and focus feedback inside the opaque panel.`),D()()}if(r&2){let t=Tt(6);y(),R(`bxContextMenu`,t)}}function Er(r,a){r&1&&xe(0,`app-breadcrumb-examples`)}function Tr(r,a){r&1&&(_(0,`div`,46)(1,`div`,118),xe(2,`bx-icon`,119)(3,`bx-icon`,120)(4,`bx-icon`,121)(5,`bx-icon`,122)(6,`bx-icon`,123),D(),_(7,`a`,124),X$1(8,`Browse the searchable icon catalog`),D()()),r&2&&(y(2),R(`decorative`,!1))}function Mr(r,a){if(r&1){let t=wt();_(0,`bx-modal-banner`,127),te(`close`,function(){Be$1(t);let o=w(3);return o.bannerVisible.set(!1),Ve(o.activate(`Banner dismissed`))}),D()}r&2&&R(`header`,jc(3,go,HP(2,uo)))(`showCloseButton`,!0)}function Dr(r,a){if(r&1){let t=wt();_(0,`button`,79),te(`click`,function(){Be$1(t);let o=w(3);return Ve(o.bannerVisible.set(!0))}),X$1(1,`Restore banner`),D()}}function Pr(r,a){if(r&1){let t=wt();_(0,`div`,49),j(1,Mr,1,5,`bx-modal-banner`,125)(2,Dr,2,0,`button`,126),_(3,`button`,52),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.openModal())}),X$1(4,`See banner in a dialog`),D()()}if(r&2){let t=w(2);y(),F(t.bannerVisible()?1:2)}}function Nr(r,a){if(r&1){let t=wt();_(0,`div`,46)(1,`div`,51)(2,`button`,56),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.notify(`success`))}),X$1(3,`Success`),D(),_(4,`button`,128),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.notify(`info`))}),X$1(5,`Information`),D(),_(6,`button`,57),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.notify(`warn`))}),X$1(7,`Warning`),D(),_(8,`button`,58),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.notify(`danger`))}),X$1(9,`Error`),D()(),_(10,`p`),X$1(11,`The toast host manages the progress indicator, dismiss action, pause and cleanup.`),D(),_(12,`a`,129),X$1(13,`Open the full toast configurator`),D()()}}function Ir(r,a){if(r&1){let t=wt();_(0,`div`,46)(1,`div`,51)(2,`button`,56),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.notify(`success`))}),X$1(3,`Show success`),D(),_(4,`button`,128),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.notify(`info`))}),X$1(5,`Show information`),D(),_(6,`button`,57),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.notify(`warn`))}),X$1(7,`Show warning`),D(),_(8,`button`,58),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.notify(`danger`))}),X$1(9,`Show error`),D()(),_(10,`p`),X$1(11,`Semantic colors remain tied to the active Blocks palette.`),D()()}}function Vr(r,a){if(r&1){let t=wt();_(0,`section`,50),xe(1,`bx-icon`,130),_(2,`h3`),X$1(3,`A custom Blocks surface`),D(),_(4,`p`),X$1(5,`Material, blur, tint, lighting and motion follow the same global configuration as the controls around it.`),D(),_(6,`bx-checkbox`,131),hE(`checkedChange`,function(o){Be$1(t);let c=w(2);return LP(c.surfaceEmission,o)||(c.surfaceEmission=o),Ve(o)}),D(),_(7,`button`,132),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.activate(`Custom surface action`))}),X$1(8,` Try an action `),D(),_(9,`p`),X$1(10,`Hover, keyboard focus and press retain local feedback. Enable emission to add the themed light source.`),D()()}if(r&2){let t=w(2);y(6),bE(`checked`,t.surfaceEmission),y(),R(`surfaceEffects`,!1)(`bxSurfaceEmission`,t.surfaceEmission()?void 0:!1)}}function Wr(r,a){if(r&1){let t=wt();_(0,`button`,79),te(`click`,function(){Be$1(t);let o=w(3);return Ve(o.openModal(`left`))}),X$1(1,`Open on the left`),D()}}function Or(r,a){if(r&1){let t=wt();_(0,`div`,46)(1,`div`,51)(2,`button`,52),te(`click`,function(){Be$1(t);let o=w(2);return Ve(o.openModal())}),X$1(3),D(),j(4,Wr,2,0,`button`,126),D(),_(5,`p`),X$1(6,`Try editing, saving, pressing Escape, and dismissing through the backdrop. This is the actual service-created component.`),D(),_(7,`a`,133),X$1(8,`Open the full modal configurator`),D()()}if(r&2){let t=w(2);y(3),un(`Open `,t.entry().title.toLowerCase()),y(),F(t.entry().id===`modal-side`?4:-1)}}function zr(r,a){if(r&1&&(_(0,`div`,11),j(1,ho,1,0,`app-bottom-drawer-examples`)(2,vo,1,0,`app-calendar-examples`)(3,xo,1,0,`app-date-picker-examples`)(4,fo,1,0,`app-time-picker-examples`)(5,So,1,0,`app-virtual-collection-examples`)(6,Co,1,0,`app-resize-handle-examples`)(7,wo,1,0,`app-side-panel-examples`)(8,ko,1,0,`app-infinite-scroll-examples`)(9,Eo,1,0,`app-essentials-examples`,21)(10,To,1,0,`app-essentials-examples`,22)(11,Mo,1,0,`app-essentials-examples`,23)(12,Do,1,0,`app-essentials-examples`,24)(13,Po,1,0,`app-essentials-examples`,25)(14,No,1,0,`app-essentials-examples`,26)(15,Io,1,0,`app-essentials-examples`,27)(16,Vo,1,0,`app-essentials-examples`,28)(17,Wo,1,0,`app-essentials-examples`,29)(18,Oo,1,0,`app-page-examples`)(19,zo,1,0,`app-essentials-examples`,30)(20,Lo,1,0,`app-essentials-examples`,31)(21,Ro,1,0,`app-essentials-examples`,32)(22,Bo,1,0,`app-tag-examples`)(23,Ao,1,0,`app-truncation-examples`)(24,Fo,1,0,`app-form-examples`,33)(25,qo,1,0,`app-form-examples`,34)(26,jo,1,0,`app-form-examples`,35)(27,Ho,1,0,`app-form-examples`,36)(28,Uo,1,0,`app-form-examples`,37)(29,Go,1,0,`app-form-examples`,38)(30,Ko,1,0,`app-form-examples`,39)(31,Qo,1,0,`app-form-examples`,40)(32,Xo,1,0,`app-form-examples`,41)(33,Zo,1,0,`app-form-examples`,42)(34,Yo,1,0,`app-form-examples`,43)(35,Jo,1,0,`app-form-examples`,44)(36,$o,1,0,`app-form-examples`,45)(37,er,26,3,`div`,46)(38,tr,17,7,`div`,46)(39,nr,9,10,`div`,46)(40,ir,8,5,`div`,47)(41,ar,6,11,`div`,47)(42,or,10,4,`fieldset`,46)(43,rr,1,0,`app-search-examples`)(44,lr,1,0,`app-form-examples`,48)(45,sr,18,2,`div`,47)(46,cr,9,3,`div`,46)(47,mr,7,4,`div`,47)(48,_r,28,12,`div`,46)(49,hr,1,0,`app-menu-shortcut-examples`)(50,vr,1,0,`app-menu-shortcut-examples`)(51,xr,6,0,`div`,46)(52,fr,10,0,`div`,46)(53,Cr,11,2,`div`,46)(54,kr,9,1,`div`,46)(55,Er,1,0,`app-breadcrumb-examples`)(56,Tr,9,1,`div`,46)(57,Pr,5,1,`div`,49)(58,Nr,14,0,`div`,46)(59,Ir,12,0,`div`,46)(60,Vr,11,3,`section`,50)(61,Or,9,2,`div`,46),D()),r&2){let t,e=w();y(),F((t=e.entry().id)===`bottom-drawer`?1:t===`calendar`?2:t===`date-picker`?3:t===`time-picker`?4:t===`virtual-collection`?5:t===`resize-handle`?6:t===`side-panel`?7:t===`infinite-scroll`?8:t===`divider`?9:t===`popover`?10:t===`skeleton`?11:t===`autocomplete`?12:t===`chip`?13:t===`accordion`?14:t===`collapsible`?15:t===`alert`?16:t===`card`?17:t===`page-container`?18:t===`container`?19:t===`stack`?20:t===`grid`?21:t===`tag`?22:t===`truncate`?23:t===`signal-forms`?24:t===`radio-group`?25:t===`multi-select`?26:t===`load-more`?27:t===`loading-spinner`?28:t===`loading-indicator`?29:t===`progress-bar`?30:t===`button-loading`?31:t===`range-slider`?32:t===`hint`?33:t===`prefix`?34:t===`suffix`?35:t===`native-control`?36:t===`button`?37:t===`checkbox-indicator`?38:t===`checkbox`?39:t===`form-field`?40:t===`input-field`?41:t===`radio`?42:t===`search-input`?43:t===`select`?44:t===`slider`?45:t===`slide-toggle`?46:t===`error`?47:t===`tabs`?48:t===`menu`?49:t===`menu-item`?50:t===`tooltip`?51:t===`tooltip-directive`?52:t===`dropdown`?53:t===`context-menu`?54:t===`breadcrumbs`?55:t===`icon`?56:t===`modal-banner`?57:t===`toast-core`?58:t===`simple-toast`?59:t===`surface`?60:61)}}var Si=class r{activatedRoute=f(mo$1);modalService=f(he);toastrService=f(Be);routeData=eJ(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});contextMenu=Nt(fb);entry=g(()=>e.find(a=>a.id===this.routeData().componentId)??e[0]);count=M(0);status=M(`Ready to try.`);fieldValue=M(``);showError=M(!1);surfaceEmission=M(!1);fieldError=g(()=>this.showError()&&this.fieldValue().trim().length<3?`Enter at least three characters.`:void 0);name=new rI(`Blocks workspace`,{nonNullable:!0,validators:ml.required});email=new rI(``,{nonNullable:!0,validators:ml.email});volume=new rI(50,{nonNullable:!0});quantity=new rI(3,{nonNullable:!0});checked=new rI(!0,{nonNullable:!0});secondChecked=new rI(!1,{nonNullable:!0});disabledCheck=new rI({value:!1,disabled:!0},{nonNullable:!0});frequency=new rI(`weekly`,{nonNullable:!0});destination=new rI(`skopje`,{nonNullable:!0});enabled=new rI(!0,{nonNullable:!0});bannerVisible=M(!0);selectedTab=M(`overview`);tabsVariant=M(`segmented`);detailsDisabled=M(!1);showActivity=M(!0);overflowTabs=M(!1);extraTabs=[1,2,3,4,5,6,7,8];tabNote=new rI(``,{nonNullable:!0});options=[{label:`Skopje`,value:`skopje`},{label:`Ohrid`,value:`ohrid`},{label:`Bitola`,value:`bitola`},{label:`Unavailable destination`,value:`unavailable`,disabled:!0}];activate(a){this.count.update(t=>t+1),this.status.set(`${a} \xB7 action ${this.count()}`)}updateField(a){this.fieldValue.set(a.target.value)}openContextMenu(a){a.preventDefault();let t=a.currentTarget.getBoundingClientRect();this.contextMenu()?.open(new MouseEvent(`contextmenu`,{clientX:t.left+16,clientY:t.bottom+4}))}openModal(a){let t=a??(this.entry().id===`modal-side`?`right`:this.entry().id===`modal-bottom-sheet`?`bottom-sheet`:`center`);this.modalService.open(ct,{data:{title:this.entry().title,description:`Edit the project name. The header, content, footer, backdrop and close behavior use the existing Blocks modal composition.`},header:{text:this.entry().title},style:{layout:t,hasBackdrop:!0,animate:!0,showCloseButton:!0}}).afterClosed().subscribe(o=>this.status.set(o.state===`confirm`?`Saved: ${o.data}`:`Dialog dismissed.`))}notify(a){let t={title:a===`success`?`Settings saved`:a===`warn`?`Review needed`:a===`danger`?`Action failed`:`Workspace update`,message:`This notification follows the application theme and appearance settings.`,durationInMs:4500};switch(a){case`success`:this.toastrService.queueSuccess(t);break;case`info`:this.toastrService.queueInfo(t);break;case`warn`:this.toastrService.queueWarning(t);break;case`danger`:this.toastrService.queueDanger(t)}this.status.set(`${a} notification queued.`)}static ɵfac=function(t){return new(t||r)};static ɵcmp=G({type:r,selectors:[[`app-component-demo`]],viewQuery:function(t,e){t&1&&Xt(e.contextMenu,fb,5),t&2&&ft()},decls:28,vars:7,consts:[[`pilotTabs`,``],[`dropdown`,`bxDropdown`],[`dropdownActions`,``],[`contextActions`,``],[3,`pageDescription`],[1,`component-meta`],[`routerLink`,`/appearance`],[`aria-labelledby`,`preview-heading`,1,`demo-section`],[1,`section-heading`],[`id`,`preview-heading`],[1,`demo-stage`],[`bxSurface`,``,1,`demo-stage`],[`role`,`status`,`aria-live`,`polite`,1,`action-status`],[`aria-labelledby`,`usage-heading`,1,`usage-section`],[`id`,`usage-heading`],[`tabindex`,`0`,`aria-label`,`TypeScript import example`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`tabindex`,`0`,`aria-label`,`HTML usage example`,1,`playground-code-block`],[`language`,`xml`,3,`highlight`],[`aria-label`,`Component documentation`,1,`documentation-section`],[3,`path`],[`example`,`divider`],[`example`,`popover`],[`example`,`skeleton`],[`example`,`autocomplete`],[`example`,`chip`],[`example`,`accordion`],[`example`,`collapsible`],[`example`,`alert`],[`example`,`card`],[`example`,`container`],[`example`,`stack`],[`example`,`grid`],[`example`,`signal-forms`],[`example`,`radio-group`],[`example`,`multi-select`],[`example`,`load-more`],[`example`,`loading-spinner`],[`example`,`loading-indicator`],[`example`,`progress-bar`],[`example`,`button-loading`],[`example`,`range-slider`],[`example`,`hint`],[`example`,`prefix`],[`example`,`suffix`],[`example`,`native-control`],[1,`demo-stack`],[1,`demo-stack`,`control-width`],[`example`,`select`],[1,`demo-stack`,`banner-preview`],[`bxSurface`,``,1,`custom-surface`],[1,`demo-row`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`accent`,3,`click`],[`type`,`button`,`bx-button`,``,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,3,`disabled`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`fab`,`aria-label`,`Add item`,3,`click`],[`name`,`plus`],[`type`,`button`,`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Close example`,3,`click`],[`name`,`x`,`size`,`20`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`outlined`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`,`surfaceEffects`],[`label`,`Checked state`,3,`formControl`],[`label`,`Partial state`,3,`formControl`],[3,`checked`,`indeterminate`],[3,`checked`],[3,`indeterminate`],[`label`,`Receive product updates`,3,`formControl`],[`label`,`Include preview features`,3,`formControl`],[`label`,`Partial selection`,3,`indeterminate`],[`label`,`Without emission`,3,`checked`,`emissive`],[`label`,`Read-only selection`,3,`checked`,`readOnly`],[`label`,`Unavailable setting`,3,`formControl`],[`label`,`Project name`,`forId`,`field-preview`,3,`required`,`error`],[`bxSurface`,``,1,`native-control-surface`],[`id`,`field-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,3,`click`],[`label`,`Project name`,3,`errorMessages`,`formControl`],[`label`,`Email address`,`type`,`email`,3,`errorMessages`,`formControl`],[`label`,`Team members`,`type`,`number`,3,`min`,`max`,`formControl`],[`label`,`Daily summary`,`name`,`frequency-demo`,`value`,`daily`,3,`formControl`],[`label`,`Weekly summary`,`name`,`frequency-demo`,`value`,`weekly`,3,`formControl`],[`label`,`Only important updates`,`name`,`frequency-demo`,`value`,`important`,3,`formControl`],[`for`,`volume-demo`],[`bxSlider`,``,`id`,`volume-demo`,`type`,`range`,`min`,`0`,`max`,`100`,3,`formControl`],[`for`,`disabled-volume`],[`bxSlider`,``,`id`,`disabled-volume`,`type`,`range`,`value`,`30`,`disabled`,``],[`bx-button`,``,`type`,`button`,3,`click`],[`label`,`Enable notifications`,`hint`,`Receive updates for important activity.`,3,`formControl`],[`label`,`Reference`,`forId`,`error-preview`],[`id`,`error-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`id`,`custom-error`],[`ariaLabel`,`Project information`,3,`selectedValueChange`,`variant`,`selectedValue`],[`label`,`Overview`,`value`,`overview`,`icon`,`book-open`],[`bxTabContent`,``],[`label`,`Details`,`value`,`details`,`color`,`accent`,`icon`,`badge-check`,`endIcon`,`chevron-right`,3,`disabled`],[`label`,`Recent project activity`,`value`,`activity`,`color`,`info`,`textColor`,`text-warn`,`highlightColor`,`text-warn`,`contentColor`,`text-info`,`icon`,`activity`],[`label`,`Unavailable`,`value`,`unavailable`,3,`disabled`],[`bx-button`,``,`type`,`button`,3,`click`,`disabled`],[`label`,`Project note`,3,`formControl`],[3,`label`,`value`],[`text`,`Your changes are saved automatically.`],[`routerLink`,`/components/tooltip-directive`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`Saves the current project`,`placement`,`top`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`An optional hint revealed by touching and holding`,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`tooltip-hold-target`,3,`click`],[`type`,`button`,`bx-button`,``,`variant`,`icon`,`aria-label`,`More information`,`bxTooltip`,`Appearance settings apply to all components`,`bxTooltipTouch`,`tap`,`placement`,`bottom`],[`name`,`info`],[`type`,`button`,`bx-button`,``,`variant`,`filled`,`bxTransition`,`fade`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[`tabindex`,`0`,1,`context-target`,3,`bxContextMenu`],[`label`,`Copy selection`,`icon`,`copy`,3,`action`],[`label`,`Archive selection`,`icon`,`archive`,3,`action`],[1,`demo-row`,`icon-row`],[`name`,`sparkles`,`size`,`32`,`color`,`text-accent`,`ariaLabel`,`Highlights`,3,`decorative`],[`name`,`check-circle`,`size`,`32`,`color`,`text-success`],[`name`,`info`,`size`,`32`,`color`,`text-info`,`bgColor`,`auto`],[`name`,`triangle-alert`,`size`,`32`,`color`,`text-warn`],[`name`,`heart`,`size`,`40`,`color`,`text-danger`],[`routerLink`,`/icon-catalog`],[3,`header`,`showCloseButton`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`],[3,`close`,`header`,`showCloseButton`],[`type`,`button`,`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`routerLink`,`/toastr`],[`name`,`layers`,`size`,`28`],[`label`,`Emit interaction light`,3,`checkedChange`,`checked`],[`type`,`button`,`bx-button`,``,`bxSurface`,``,`variant`,`tonal`,3,`click`,`surfaceEffects`,`bxSurfaceEmission`],[`routerLink`,`/modal`]],template:function(t,e){t&1&&(_(0,`bx-page-container`)(1,`bx-page-header`,4)(2,`div`,5)(3,`code`),X$1(4),D(),_(5,`a`,6),X$1(6,`Configure appearance globally`),D()()(),_(7,`section`,7)(8,`div`,8)(9,`h2`,9),X$1(10,`Interactive example`),D(),_(11,`span`),X$1(12,`Uses your active palette`),D()(),j(13,bo,2,0,`div`,10)(14,yo,2,0,`div`,10)(15,_o,2,0,`div`,10)(16,zr,62,1,`div`,11),_(17,`p`,12),X$1(18),D()(),_(19,`section`,13)(20,`h2`,14),X$1(21,`Quick usage`),D(),_(22,`pre`,15),xe(23,`code`,16),D(),_(24,`pre`,17),xe(25,`code`,18),D()(),_(26,`section`,19),xe(27,`app-readme`,20),D()()),t&2&&(y(),R(`pageDescription`,e.entry().description),y(3),fe(e.entry().selector),y(9),F(e.entry().id===`side-nav`?13:e.entry().id===`top-nav`?14:e.entry().id===`stepper`?15:16),y(5),fe(e.status()),y(5),R(`highlight`,`import { `+e.entry().symbol+` } from '`+e.entry().package+`';`),y(2),R(`highlight`,e.entry().example),y(2),R(`path`,e.entry().readme))},dependencies:[Je,Ge,Qe,Xe,rt,it,$e,st,_t,kT,El,ht,$f,Y,et,Ze,Ye,ot,at,nt,lt,we,Hie,FM,cB,jie,uB,me,Hr,_n,U,fo$1,xo$1,Ft,yo$1,zn,hb,bb,pb,iT,fb,qi$1,rT,Kd,Gd,Ke,Vt,Rt,P,S$1],styles:[`
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