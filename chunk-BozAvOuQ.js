import{I as xe,t as $r}from"./chunk-0rSpyq6Z.js";import{_ as Js}from"./chunk-D2mL-a4s.js";import{Bi as ik,Cr as _N,Fa as pk,Fr as ab,J as Fr,Jr as bo,Ma as pZ,Mi as hZ,Oi as hA,Po as xZ,Qr as cb,Ro as xo,Tr as _Z,Vo as yZ,Vr as b,Wr as bZ,X as G,Xa as sX,Yr as br,Yt as QK,Zi as kZ,co as uC,ma as mZ,mo as uk,na as lA,rr as Xl,t as $,tt as Go,uo as uZ,vi as fZ,vo as vC,wi as gZ,wn as TT,xo as vZ}from"./chunk-4Vch4aoV.js";function A(b,t){if(b&1&&(bo(0,`li`),lA(1),Go()),b&2){let s=t.$implicit;Xl(),ik(s)}}var H=class b$1{bxDateTimeConfigService=b(vC);nameForm=$(`short`);displayCycle=$(24);displayPrecision=$(`second`);date=$(`2026-11-23`);time=$(`14:30`);zone=$(`Europe/Berlin`);natural=$(`next friday at 3 pm`);dotNetInput=$(`2026-11-23T14:30:00+01:00`);unixInput=$(`1763904600`);displayConvention=G(()=>{let t=this.bxDateTimeConfigService.resolve({hourCycle:this.displayCycle(),precision:this.displayPrecision()}),s=QK(`14:30:45.123`,t.timeFormat,t.locale);return`${t.timeFormat} \u2192 ${s}`});calendarNames=G(()=>{let t=this.bxDateTimeConfigService.adapter(),s=this.bxDateTimeConfigService.resolve({}).locale;return`${t.getMonthLabel(this.date(),s,this.nameForm())} \xB7 ${t.getWeekdayNames(s,this.nameForm()).join(` `)}`});conversions=G(()=>{let t=uC(this.date(),this.time(),this.zone());if(!t)return[`The local date and time do not form a valid instant in this zone.`];let s=uZ(t,this.zone()),e=sX(`week`,this.date(),1),o=gZ(t,this.zone())??`invalid`,a=xZ(o),Z=_N(o);return[`Week selection (Monday start): ${e?.start} \u2013 ${e?.end}.`,`Date-only value: ${this.date()} (never shifted to UTC midnight).`,`Offset ISO: ${o}`,`UTC ISO: ${bZ(t)}`,`.NET UTC round-trip: ${hZ(t)}`,`.NET parsed kind: ${a?.kind??Z?.kind??`unknown`}; offset ${a?.offsetMinutes??`n/a`} minutes.`,`Microsoft JSON: ${vZ(t)}`,`Unix seconds: ${pZ(t)}; milliseconds: ${mZ(t)}.`,`Zoned round-trip: ${s.date} ${s.time} (${s.timeZone}).`]});dotNetResult=G(()=>{let t=xZ(this.dotNetInput());return t?`${t.kind??`unspecified`} \xB7 ${t.date} ${t.time}${t.offsetMinutes===null?``:` (${t.offsetMinutes} min)`}`:`Not a valid ISO/.NET date-time value.`});unixResult=G(()=>{try{return fZ(Number(this.unixInput()))?.toISOString()??`Invalid Unix seconds.`}catch{return`Invalid Unix seconds.`}});naturalResult=G(()=>{let t=_Z(this.natural(),{now:this.bxDateTimeConfigService.now(),timeZone:this.zone(),locale:`en-GB`,calendar:this.bxDateTimeConfigService.adapter(),weekStartsOn:1,precision:`minute`});return t.value?`${t.value.date}${t.value.time?` at ${t.value.time}`:``}`:`${t.error}: ${t.message??`No match.`}`});duration=G(()=>{let t={date:`2026-03-29`,time:`01:30`,timeZone:`Europe/Berlin`},s={date:`2026-03-29`,time:`03:30`,timeZone:`Europe/Berlin`};return`Wall clock ${yZ(t,s)} min \xB7 elapsed ${kZ(t,s,`Europe/Berlin`)} min.`});static ɵfac=function(s){return new(s||b$1)};static ɵcmp=Fr({type:b$1,selectors:[[`app-date-time-utility`]],decls:57,vars:20,consts:[[3,`gap`],[1,`utility-form`],[`label`,`Date-only value`,`hint`,`Canonical yyyy-MM-dd; never converted to UTC midnight.`,3,`valueChange`,`value`],[`label`,`Wall-clock time`,`hint`,`HH:mm or HH:mm:ss.SSS.`,3,`valueChange`,`value`],[`label`,`IANA time zone`,`hint`,`Example: Europe/Berlin, America/New_York.`,3,`valueChange`,`value`],[1,`utility-results`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`],[`role`,`status`,1,`utility-result`],[`label`,`.NET / ISO value`,3,`valueChange`,`value`],[1,`utility-result`],[`label`,`Unix seconds`,3,`valueChange`,`value`],[`label`,`Expression`,`hint`,`Uses the injected clock, locale and time zone; ambiguity returns an explicit error.`,3,`valueChange`,`value`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(s,e){s&1&&(bo(0,`bx-stack`,0)(1,`h2`),lA(2,`Date and time conversion helpers`),Go(),bo(3,`p`),lA(4,` These helpers are independent of the pickers. Date-only values stay canonical civil dates; offset and zoned values resolve through the active zone, and legacy values are parsed explicitly rather than guessed. `),Go(),bo(5,`div`,1)(6,`bx-input-field`,2),pk(`valueChange`,function(a){return hA(e.date,a)||(e.date=a),a}),Go(),bo(7,`bx-input-field`,3),pk(`valueChange`,function(a){return hA(e.time,a)||(e.time=a),a}),Go(),bo(8,`bx-input-field`,4),pk(`valueChange`,function(a){return hA(e.zone,a)||(e.zone=a),a}),Go()(),bo(9,`ul`,5),ab(10,A,2,1,`li`,null,TT),Go(),bo(12,`h3`),lA(13,`Resolved time display`),Go(),bo(14,`div`,1)(15,`button`,6),br(`click`,function(){return e.displayCycle.set(12)}),lA(16,`12-hour`),Go(),bo(17,`button`,6),br(`click`,function(){return e.displayCycle.set(24)}),lA(18,`24-hour`),Go(),bo(19,`button`,6),br(`click`,function(){return e.displayPrecision.set(`second`)}),lA(20,` Seconds `),Go(),bo(21,`button`,6),br(`click`,function(){return e.displayPrecision.set(`millisecond`)}),lA(22,` Milliseconds `),Go()(),bo(23,`p`,7),lA(24),Go(),bo(25,`h3`),lA(26,`Localized calendar name lengths`),Go(),bo(27,`div`,1)(28,`button`,6),br(`click`,function(){return e.nameForm.set(`narrow`)}),lA(29,`Narrow initials`),Go(),bo(30,`button`,6),br(`click`,function(){return e.nameForm.set(`short`)}),lA(31,`Short names`),Go(),bo(32,`button`,6),br(`click`,function(){return e.nameForm.set(`long`)}),lA(33,`Full names`),Go()(),bo(34,`p`,7),lA(35),Go(),bo(36,`h3`),lA(37,`Parse .NET, ISO and Microsoft JSON values`),Go(),bo(38,`bx-input-field`,8),pk(`valueChange`,function(a){return hA(e.dotNetInput,a)||(e.dotNetInput=a),a}),Go(),bo(39,`p`,9),lA(40),Go(),bo(41,`h3`),lA(42,`Parse Unix seconds`),Go(),bo(43,`bx-input-field`,10),pk(`valueChange`,function(a){return hA(e.unixInput,a)||(e.unixInput=a),a}),Go(),bo(44,`p`,9),lA(45),Go(),bo(46,`h3`),lA(47,`Natural-language parsing`),Go(),bo(48,`bx-input-field`,11),pk(`valueChange`,function(a){return hA(e.natural,a)||(e.natural=a),a}),Go(),bo(49,`p`,9),lA(50),Go(),bo(51,`h3`),lA(52,`Wall-clock versus elapsed duration`),Go(),bo(53,`p`,9),lA(54),Go(),bo(55,`button`,12),br(`click`,function(){return e.date.set(`2026-11-23`),e.time.set(`14:30`)}),lA(56,`Reset sample`),Go()()),s&2&&(xo(`gap`,4),Xl(6),uk(`value`,e.date),Xl(),uk(`value`,e.time),Xl(),uk(`value`,e.zone),Xl(2),cb(e.conversions()),Xl(5),xo(`variant`,e.displayCycle()===12?`filled`:`tonal`),Xl(2),xo(`variant`,e.displayCycle()===24?`filled`:`tonal`),Xl(2),xo(`variant`,e.displayPrecision()===`second`?`filled`:`tonal`),Xl(2),xo(`variant`,e.displayPrecision()===`millisecond`?`filled`:`tonal`),Xl(3),ik(e.displayConvention()),Xl(4),xo(`variant`,e.nameForm()===`narrow`?`filled`:`tonal`),Xl(2),xo(`variant`,e.nameForm()===`short`?`filled`:`tonal`),Xl(2),xo(`variant`,e.nameForm()===`long`?`filled`:`tonal`),Xl(3),ik(e.calendarNames()),Xl(3),uk(`value`,e.dotNetInput),Xl(2),ik(e.dotNetResult()),Xl(3),uk(`value`,e.unixInput),Xl(2),ik(e.unixResult()),Xl(3),uk(`value`,e.natural),Xl(2),ik(e.naturalResult()),Xl(4),ik(e.duration()))},dependencies:[xe,$r,Js],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
bx-card[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: var(--%NS%bx-space-5, 1.25rem);
}
h3[_ngcontent-%COMP%], 
p[_ngcontent-%COMP%], 
dl[_ngcontent-%COMP%] {
  margin: 0;
}
h3[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-heading);
  font-size: 1rem;
}
p[_ngcontent-%COMP%], 
dt[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  line-height: 1.65;
}
dl[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-3, 0.75rem);
}
dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--%NS%bx-space-1, 0.25rem) var(--%NS%bx-space-4, 1rem);
}
dd[_ngcontent-%COMP%] {
  margin: 0;
  font-weight: 600;
  overflow-wrap: anywhere;
}
.metric[_ngcontent-%COMP%] {
  margin-block: var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-text-heading);
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 600;
  line-height: 1.25;
  font-variant-numeric: tabular-nums;
}
.preview-cell[_ngcontent-%COMP%] {
  display: block;
  padding: var(--%NS%bx-space-5, 1.25rem);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: var(--%NS%bx-bg-element);
  color: var(--%NS%bx-text-brand);
  text-align: center;
  font-weight: 600;
}
.identifier[_ngcontent-%COMP%] {
  display: block;
  font-family:
    ui-monospace,
    SFMono-Regular,
    monospace;
  overflow-wrap: anywhere;
}
.token-swatch[_ngcontent-%COMP%] {
  block-size: calc(var(--%NS%bx-space-8, 2rem) * 2);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  forced-color-adjust: none;
}
.utility-overlay[_ngcontent-%COMP%] {
  display: block;
  inline-size: min(22rem, 100vw - var(--%NS%bx-space-8, 2rem));
  max-inline-size: 100%;
  overflow: clip;
}
.utility-overlay-content[_ngcontent-%COMP%] {
  max-block-size: calc(100dvh - var(--%NS%bx-space-8, 2rem) - var(--%NS%bx-space-5, 1.25rem) * 2 - var(--%NS%bx-border-width, 1px) * 2);
  overflow: hidden auto;
  overscroll-behavior: contain;
}
.overlay-position-controls[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-4, 1rem);
  align-items: stretch;
}
.overlay-position-controls[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  min-block-size: var(--%NS%bx-space-10, 2.5rem);
}
@media (min-width: 640px) {
  .overlay-position-controls[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr) auto;
  }
}
.utility-form[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
}
.utility-results[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding-inline-start: 1.25rem;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.utility-result[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-accent);
  font-size: 0.875rem;
}`]})};export{H as DateTimeUtility};