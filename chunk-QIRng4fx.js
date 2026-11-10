import"./main-EL5HAC26.js";import{n as Z}from"./chunk-41uhicSi.js";import{Dt as OM,N as G,Nt as P,Ti as me,V as IM,_t as Me,b as DM,c as Ae,g as C,ln as V,o as A,xa as ue,y as D,zi as oo}from"./chunk-BWickaUR.js";var u=class s{ownerId=oo();identifier=D(oo());generateIdentifier(){this.identifier.set(oo())}static ɵfac=function(a){return new(a||s)};static ɵcmp=G({type:s,selectors:[[`app-identifiers`]],decls:17,vars:6,consts:[[3,`gap`],[`title`,`Generate a version-4 UUID`],[`aria-label`,`Generated UUID`,`aria-live`,`polite`,1,`identifier`],[`direction`,`horizontal`,3,`wrap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`title`,`Stable instance identifier`],[`data-owner-id`,``,1,`identifier`],[`title`,`Generate once, reuse through cleanup`,`message`,`Keep owner IDs in instance fields. Generating them in a template or a derived computation can break the connection between acquisition and cleanup.`]],template:function(a,c){a&1&&(A(0,`bx-stack`,0)(1,`bx-card`,1)(2,`bx-stack`,0)(3,`p`),me(4,`Create identifiers for controls, overlays, or shared lock owners.`),P(),A(5,`output`,2),me(6),P(),A(7,`bx-stack`,3)(8,`button`,4),ue(`click`,function(){return c.generateIdentifier()}),me(9,`Generate another UUID`),P()()()(),A(10,`bx-card`,5)(11,`bx-stack`,0)(12,`code`,6),me(13),P(),A(14,`p`),me(15,`This ID is generated once for this demo instance. Generate another UUID above and compare: the owner ID stays the same.`),P()()(),Ae(16,`bx-alert`,7),P()),a&2&&(V(`gap`,5),C(2),V(`gap`,4),C(4),Me(c.identifier()),C(),V(`wrap`,!0),C(4),V(`gap`,3),C(2),Me(c.ownerId))},dependencies:[DM,Z,IM,OM],styles:[`
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
}`]})};export{u as Identifiers};