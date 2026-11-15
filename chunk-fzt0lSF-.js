import{A as va,D as fe}from"./chunk-BEm-ihzG.js";import{O as Xs}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,B as GZ,En as W,Eo as xT,Ha as sD,In as XT,Kn as YZ,Lt as Os,Qa as tk,Sr as ba,Wr as ek,Yt as QZ,Zt as Qw,_a as oK,ar as Zy,ct as K,ea as mR,ha as o1,i as $n,ka as qZ,kn as WZ,nr as Zb,nt as JZ,pn as TZ,qi as m,qn as Yb,tr as ZZ,ut as KZ,vt as LK,wr as br,xn as Ul,yn as UZ,zn as XZ,zo as zZ}from"./chunk-CVY9_LoB.js";function A(b,t){if(b&1&&(Os(0,`li`),XT(1),ba()),b&2){let s=t.$implicit;Ul(),Zy(s)}}var H=class b{bxDateTimeConfigService=m(sD);nameForm=W(`short`);displayCycle=W(24);displayPrecision=W(`second`);date=W(`2026-11-23`);time=W(`14:30`);zone=W(`Europe/Berlin`);natural=W(`next friday at 3 pm`);dotNetInput=W(`2026-11-23T14:30:00+01:00`);unixInput=W(`1763904600`);displayConvention=K(()=>{let t=this.bxDateTimeConfigService.resolve({hourCycle:this.displayCycle(),precision:this.displayPrecision()}),s=TZ(`14:30:45.123`,t.timeFormat,t.locale);return`${t.timeFormat} \u2192 ${s}`});calendarNames=K(()=>{let t=this.bxDateTimeConfigService.adapter(),s=this.bxDateTimeConfigService.resolve({}).locale;return`${t.getMonthLabel(this.date(),s,this.nameForm())} \xB7 ${t.getWeekdayNames(s,this.nameForm()).join(` `)}`});conversions=K(()=>{let t=Qw(this.date(),this.time(),this.zone());if(!t)return[`The local date and time do not form a valid instant in this zone.`];let s=UZ(t,this.zone()),e=LK(`week`,this.date(),1),o=ZZ(t,this.zone())??`invalid`,a=XZ(o),Z=mR(o);return[`Week selection (Monday start): ${e?.start} \u2013 ${e?.end}.`,`Date-only value: ${this.date()} (never shifted to UTC midnight).`,`Offset ISO: ${o}`,`UTC ISO: ${qZ(t)}`,`.NET UTC round-trip: ${YZ(t)}`,`.NET parsed kind: ${a?.kind??Z?.kind??`unknown`}; offset ${a?.offsetMinutes??`n/a`} minutes.`,`Microsoft JSON: ${KZ(t)}`,`Unix seconds: ${zZ(t)}; milliseconds: ${WZ(t)}.`,`Zoned round-trip: ${s.date} ${s.time} (${s.timeZone}).`]});dotNetResult=K(()=>{let t=XZ(this.dotNetInput());return t?`${t.kind??`unspecified`} \xB7 ${t.date} ${t.time}${t.offsetMinutes===null?``:` (${t.offsetMinutes} min)`}`:`Not a valid ISO/.NET date-time value.`});unixResult=K(()=>{try{return GZ(Number(this.unixInput()))?.toISOString()??`Invalid Unix seconds.`}catch{return`Invalid Unix seconds.`}});naturalResult=K(()=>{let t=oK(this.natural(),{now:this.bxDateTimeConfigService.now(),timeZone:this.zone(),locale:`en-GB`,calendar:this.bxDateTimeConfigService.adapter(),weekStartsOn:1,precision:`minute`});return t.value?`${t.value.date}${t.value.time?` at ${t.value.time}`:``}`:`${t.error}: ${t.message??`No match.`}`});duration=K(()=>{let t={date:`2026-03-29`,time:`01:30`,timeZone:`Europe/Berlin`},s={date:`2026-03-29`,time:`03:30`,timeZone:`Europe/Berlin`};return`Wall clock ${QZ(t,s)} min \xB7 elapsed ${JZ(t,s,`Europe/Berlin`)} min.`});static ɵfac=function(s){return new(s||b)};static ɵcmp=$n({type:b,selectors:[[`app-date-time-utility`]],decls:57,vars:20,consts:[[3,`gap`],[1,`utility-form`],[`label`,`Date-only value`,`hint`,`Canonical yyyy-MM-dd; never converted to UTC midnight.`,3,`valueChange`,`value`],[`label`,`Wall-clock time`,`hint`,`HH:mm or HH:mm:ss.SSS.`,3,`valueChange`,`value`],[`label`,`IANA time zone`,`hint`,`Example: Europe/Berlin, America/New_York.`,3,`valueChange`,`value`],[1,`utility-results`],[`bx-button`,``,`type`,`button`,3,`click`,`variant`],[`role`,`status`,1,`utility-result`],[`label`,`.NET / ISO value`,3,`valueChange`,`value`],[1,`utility-result`],[`label`,`Unix seconds`,3,`valueChange`,`value`],[`label`,`Expression`,`hint`,`Uses the injected clock, locale and time zone; ambiguity returns an explicit error.`,3,`valueChange`,`value`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(s,e){s&1&&(Os(0,`bx-stack`,0)(1,`h2`),XT(2,`Date and time conversion helpers`),ba(),Os(3,`p`),XT(4,` These helpers are independent of the pickers. Date-only values stay canonical civil dates; offset and zoned values resolve through the active zone, and legacy values are parsed explicitly rather than guessed. `),ba(),Os(5,`div`,1)(6,`bx-input-field`,2),tk(`valueChange`,function(a){return o1(e.date,a)||(e.date=a),a}),ba(),Os(7,`bx-input-field`,3),tk(`valueChange`,function(a){return o1(e.time,a)||(e.time=a),a}),ba(),Os(8,`bx-input-field`,4),tk(`valueChange`,function(a){return o1(e.zone,a)||(e.zone=a),a}),ba()(),Os(9,`ul`,5),Yb(10,A,2,1,`li`,null,xT),ba(),Os(12,`h3`),XT(13,`Resolved time display`),ba(),Os(14,`div`,1)(15,`button`,6),br(`click`,function(){return e.displayCycle.set(12)}),XT(16,`12-hour`),ba(),Os(17,`button`,6),br(`click`,function(){return e.displayCycle.set(24)}),XT(18,`24-hour`),ba(),Os(19,`button`,6),br(`click`,function(){return e.displayPrecision.set(`second`)}),XT(20,` Seconds `),ba(),Os(21,`button`,6),br(`click`,function(){return e.displayPrecision.set(`millisecond`)}),XT(22,` Milliseconds `),ba()(),Os(23,`p`,7),XT(24),ba(),Os(25,`h3`),XT(26,`Localized calendar name lengths`),ba(),Os(27,`div`,1)(28,`button`,6),br(`click`,function(){return e.nameForm.set(`narrow`)}),XT(29,`Narrow initials`),ba(),Os(30,`button`,6),br(`click`,function(){return e.nameForm.set(`short`)}),XT(31,`Short names`),ba(),Os(32,`button`,6),br(`click`,function(){return e.nameForm.set(`long`)}),XT(33,`Full names`),ba()(),Os(34,`p`,7),XT(35),ba(),Os(36,`h3`),XT(37,`Parse .NET, ISO and Microsoft JSON values`),ba(),Os(38,`bx-input-field`,8),tk(`valueChange`,function(a){return o1(e.dotNetInput,a)||(e.dotNetInput=a),a}),ba(),Os(39,`p`,9),XT(40),ba(),Os(41,`h3`),XT(42,`Parse Unix seconds`),ba(),Os(43,`bx-input-field`,10),tk(`valueChange`,function(a){return o1(e.unixInput,a)||(e.unixInput=a),a}),ba(),Os(44,`p`,9),XT(45),ba(),Os(46,`h3`),XT(47,`Natural-language parsing`),ba(),Os(48,`bx-input-field`,11),tk(`valueChange`,function(a){return o1(e.natural,a)||(e.natural=a),a}),ba(),Os(49,`p`,9),XT(50),ba(),Os(51,`h3`),XT(52,`Wall-clock versus elapsed duration`),ba(),Os(53,`p`,9),XT(54),ba(),Os(55,`button`,12),br(`click`,function(){return e.date.set(`2026-11-23`),e.time.set(`14:30`)}),XT(56,`Reset sample`),ba()()),s&2&&(fa(`gap`,4),Ul(6),ek(`value`,e.date),Ul(),ek(`value`,e.time),Ul(),ek(`value`,e.zone),Ul(2),Zb(e.conversions()),Ul(5),fa(`variant`,e.displayCycle()===12?`filled`:`tonal`),Ul(2),fa(`variant`,e.displayCycle()===24?`filled`:`tonal`),Ul(2),fa(`variant`,e.displayPrecision()===`second`?`filled`:`tonal`),Ul(2),fa(`variant`,e.displayPrecision()===`millisecond`?`filled`:`tonal`),Ul(3),Zy(e.displayConvention()),Ul(4),fa(`variant`,e.nameForm()===`narrow`?`filled`:`tonal`),Ul(2),fa(`variant`,e.nameForm()===`short`?`filled`:`tonal`),Ul(2),fa(`variant`,e.nameForm()===`long`?`filled`:`tonal`),Ul(3),Zy(e.calendarNames()),Ul(3),ek(`value`,e.dotNetInput),Ul(2),Zy(e.dotNetResult()),Ul(3),ek(`value`,e.unixInput),Ul(2),Zy(e.unixResult()),Ul(3),ek(`value`,e.natural),Ul(2),Zy(e.naturalResult()),Ul(4),Zy(e.duration()))},dependencies:[fe,va,Xs],styles:[`
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