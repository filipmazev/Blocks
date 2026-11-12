import{m as Ya}from"./main-RICJTCGQ.js";import{r as Z}from"./chunk-DZ1I1_Lc.js";import{Ar as bI,Co as xse,D,Dn as Sse,F as E,Ft as La,Ki as kse,M as Dse,Mo as yse,Nr as be,Or as ase,T as Cse,Ta as p_,To as y,V as Ese,Vn as W,Vt as M,Wt as Mse,Xn as X,Yn as Wt,ai as fT,br as _se,ea as mB,ei as eb,gi as g,ho as wse,ht as Ise,ii as f,in as Ose,l as A$1,oi as f_,s as $t,si as fae,ti as ee,u as AP}from"./chunk-DzvvGvUq.js";function A(b,t){if(b&1&&(E(0,`li`),X(1),D()),b&2){let s=t.$implicit;y(),be(s)}}var H=class b{bxDateTimeConfigService=f(eb);nameForm=M(`short`);displayCycle=M(24);displayPrecision=M(`second`);date=M(`2026-11-23`);time=M(`14:30`);zone=M(`Europe/Berlin`);natural=M(`next friday at 3 pm`);dotNetInput=M(`2026-11-23T14:30:00+01:00`);unixInput=M(`1763904600`);displayConvention=g(()=>{let t=this.bxDateTimeConfigService.resolve({hourCycle:this.displayCycle(),precision:this.displayPrecision()}),s=ase(`14:30:45.123`,t.timeFormat,t.locale);return`${t.timeFormat} \u2192 ${s}`});calendarNames=g(()=>{let t=this.bxDateTimeConfigService.adapter(),s=this.bxDateTimeConfigService.resolve({}).locale;return`${t.getMonthLabel(this.date(),s,this.nameForm())} \xB7 ${t.getWeekdayNames(s,this.nameForm()).join(` `)}`});conversions=g(()=>{let t=bI(this.date(),this.time(),this.zone());if(!t)return[`The local date and time do not form a valid instant in this zone.`];let s=xse(t,this.zone()),e=fae(`week`,this.date(),1),o=_se(t,this.zone())??`invalid`,a=Dse(o),Z=mB(o);return[`Week selection (Monday start): ${e?.start} \u2013 ${e?.end}.`,`Date-only value: ${this.date()} (never shifted to UTC midnight).`,`Offset ISO: ${o}`,`UTC ISO: ${Cse(t)}`,`.NET UTC round-trip: ${Sse(t)}`,`.NET parsed kind: ${a?.kind??Z?.kind??`unknown`}; offset ${a?.offsetMinutes??`n/a`} minutes.`,`Microsoft JSON: ${Ese(t)}`,`Unix seconds: ${yse(t)}; milliseconds: ${kse(t)}.`,`Zoned round-trip: ${s.date} ${s.time} (${s.timeZone}).`]});dotNetResult=g(()=>{let t=Dse(this.dotNetInput());return t?`${t.kind??`unspecified`} \xB7 ${t.date} ${t.time}${t.offsetMinutes===null?``:` (${t.offsetMinutes} min)`}`:`Not a valid ISO/.NET date-time value.`});unixResult=g(()=>{try{return wse(Number(this.unixInput()))?.toISOString()??`Invalid Unix seconds.`}catch{return`Invalid Unix seconds.`}});naturalResult=g(()=>{let t=Ose(this.natural(),{now:this.bxDateTimeConfigService.now(),timeZone:this.zone(),locale:`en-GB`,calendar:this.bxDateTimeConfigService.adapter(),weekStartsOn:1,precision:`minute`});return t.value?`${t.value.date}${t.value.time?` at ${t.value.time}`:``}`:`${t.error}: ${t.message??`No match.`}`});duration=g(()=>{let t={date:`2026-03-29`,time:`01:30`,timeZone:`Europe/Berlin`},s={date:`2026-03-29`,time:`03:30`,timeZone:`Europe/Berlin`};return`Wall clock ${Mse(t,s)} min \xB7 elapsed ${Ise(t,s,`Europe/Berlin`)} min.`});static ɵfac=function(s){return new(s||b)};static ɵcmp=W({type:b,selectors:[[`app-date-time-utility`]],decls:57,vars:20,consts:[[3,`gap`],[1,`utility-form`],[`label`,`Date-only value`,`hint`,`Canonical yyyy-MM-dd; never converted to UTC midnight.`,3,`valueChange`,`value`],[`label`,`Wall-clock time`,`hint`,`HH:mm or HH:mm:ss.SSS.`,3,`valueChange`,`value`],[`label`,`IANA time zone`,`hint`,`Example: Europe/Berlin, America/New_York.`,3,`valueChange`,`value`],[1,`utility-results`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`],[`role`,`status`,1,`utility-result`],[`label`,`.NET / ISO value`,3,`valueChange`,`value`],[1,`utility-result`],[`label`,`Unix seconds`,3,`valueChange`,`value`],[`label`,`Expression`,`hint`,`Uses the injected clock, locale and time zone; ambiguity returns an explicit error.`,3,`valueChange`,`value`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(s,e){s&1&&(E(0,`bx-stack`,0)(1,`h2`),X(2,`Date and time conversion helpers`),D(),E(3,`p`),X(4,` These helpers are independent of the pickers. Date-only values stay canonical civil dates; offset and zoned values resolve through the active zone, and legacy values are parsed explicitly rather than guessed. `),D(),E(5,`div`,1)(6,`bx-input-field`,2),f_(`valueChange`,function(a){return AP(e.date,a)||(e.date=a),a}),D(),E(7,`bx-input-field`,3),f_(`valueChange`,function(a){return AP(e.time,a)||(e.time=a),a}),D(),E(8,`bx-input-field`,4),f_(`valueChange`,function(a){return AP(e.zone,a)||(e.zone=a),a}),D()(),E(9,`ul`,5),$t(10,A,2,1,`li`,null,La),D(),E(12,`h3`),X(13,`Resolved time display`),D(),E(14,`div`,1)(15,`button`,6),ee(`click`,function(){return e.displayCycle.set(12)}),X(16,`12-hour`),D(),E(17,`button`,6),ee(`click`,function(){return e.displayCycle.set(24)}),X(18,`24-hour`),D(),E(19,`button`,6),ee(`click`,function(){return e.displayPrecision.set(`second`)}),X(20,` Seconds `),D(),E(21,`button`,6),ee(`click`,function(){return e.displayPrecision.set(`millisecond`)}),X(22,` Milliseconds `),D()(),E(23,`p`,7),X(24),D(),E(25,`h3`),X(26,`Localized calendar name lengths`),D(),E(27,`div`,1)(28,`button`,6),ee(`click`,function(){return e.nameForm.set(`narrow`)}),X(29,`Narrow initials`),D(),E(30,`button`,6),ee(`click`,function(){return e.nameForm.set(`short`)}),X(31,`Short names`),D(),E(32,`button`,6),ee(`click`,function(){return e.nameForm.set(`long`)}),X(33,`Full names`),D()(),E(34,`p`,7),X(35),D(),E(36,`h3`),X(37,`Parse .NET, ISO and Microsoft JSON values`),D(),E(38,`bx-input-field`,8),f_(`valueChange`,function(a){return AP(e.dotNetInput,a)||(e.dotNetInput=a),a}),D(),E(39,`p`,9),X(40),D(),E(41,`h3`),X(42,`Parse Unix seconds`),D(),E(43,`bx-input-field`,10),f_(`valueChange`,function(a){return AP(e.unixInput,a)||(e.unixInput=a),a}),D(),E(44,`p`,9),X(45),D(),E(46,`h3`),X(47,`Natural-language parsing`),D(),E(48,`bx-input-field`,11),f_(`valueChange`,function(a){return AP(e.natural,a)||(e.natural=a),a}),D(),E(49,`p`,9),X(50),D(),E(51,`h3`),X(52,`Wall-clock versus elapsed duration`),D(),E(53,`p`,9),X(54),D(),E(55,`button`,12),ee(`click`,function(){return e.date.set(`2026-11-23`),e.time.set(`14:30`)}),X(56,`Reset sample`),D()()),s&2&&(A$1(`gap`,4),y(6),p_(`value`,e.date),y(),p_(`value`,e.time),y(),p_(`value`,e.zone),y(2),Wt(e.conversions()),y(5),A$1(`variant`,e.displayCycle()===12?`filled`:`tonal`),y(2),A$1(`variant`,e.displayCycle()===24?`filled`:`tonal`),y(2),A$1(`variant`,e.displayPrecision()===`second`?`filled`:`tonal`),y(2),A$1(`variant`,e.displayPrecision()===`millisecond`?`filled`:`tonal`),y(3),be(e.displayConvention()),y(4),A$1(`variant`,e.nameForm()===`narrow`?`filled`:`tonal`),y(2),A$1(`variant`,e.nameForm()===`short`?`filled`:`tonal`),y(2),A$1(`variant`,e.nameForm()===`long`?`filled`:`tonal`),y(3),be(e.calendarNames()),y(3),p_(`value`,e.dotNetInput),y(2),be(e.dotNetResult()),y(3),p_(`value`,e.unixInput),y(2),be(e.unixResult()),y(3),p_(`value`,e.natural),y(2),be(e.naturalResult()),y(4),be(e.duration()))},dependencies:[Z,Ya,fT],styles:[`
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
.lock-controls-content[_ngcontent-%COMP%] {
  max-block-size: calc(100dvh - var(--%NS%bx-space-8, 2rem) - var(--%NS%bx-space-12, 3rem) - var(--%NS%bx-space-12, 3rem));
  padding: var(--%NS%bx-space-1, 0.25rem);
  overflow: auto;
  overscroll-behavior: contain;
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