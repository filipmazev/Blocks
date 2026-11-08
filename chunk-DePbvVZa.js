import"./main-5HCVZCER.js";import{n as Z}from"./chunk-BbcioGCK.js";import{A as E,Da as wM,Dt as MM,G as H,La as ye,Ni as no,X as He,Xi as q,_ as CM,bn as Te,g as C,h as Be,mi as le,t as $}from"./chunk-7QWHf5Iu.js";var u=class d{ownerId=no();identifier=C(no());generateIdentifier(){this.identifier.set(no())}static ɵfac=function(i){return new(i||d)};static ɵcmp=H({type:d,selectors:[[`app-identifiers`]],decls:17,vars:6,consts:[[3,`gap`],[`title`,`Generate a version-4 UUID`],[`aria-label`,`Generated UUID`,`aria-live`,`polite`,1,`identifier`],[`direction`,`horizontal`,3,`wrap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`title`,`Stable instance identifier`],[`data-owner-id`,``,1,`identifier`],[`title`,`Generate once, reuse through cleanup`,`message`,`Keep owner IDs in instance fields. Generating them in a template or a derived computation can break the connection between acquisition and cleanup.`]],template:function(i,c){i&1&&($(0,`bx-stack`,0)(1,`bx-card`,1)(2,`bx-stack`,0)(3,`p`),Te(4,`Create identifiers for controls, overlays, or shared lock owners.`),q(),$(5,`output`,2),Te(6),q(),$(7,`bx-stack`,3)(8,`button`,4),ye(`click`,function(){return c.generateIdentifier()}),Te(9,`Generate another UUID`),q()()()(),$(10,`bx-card`,5)(11,`bx-stack`,0)(12,`code`,6),Te(13),q(),$(14,`p`),Te(15,`This ID is generated once for this demo instance. Generate another UUID above and compare: the owner ID stays the same.`),q()()(),Be(16,`bx-alert`,7),q()),i&2&&(le(`gap`,5),E(2),le(`gap`,4),E(4),He(c.identifier()),E(),le(`wrap`,!0),E(4),le(`gap`,3),E(2),He(c.ownerId))},dependencies:[wM,Z,CM,MM],styles:[`
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
  max-block-size: calc(100dvh - var(--%NS%bx-space-8, 2rem));
  overflow: auto;
}
.lock-controls-content[_ngcontent-%COMP%] {
  max-block-size: calc(100dvh - var(--%NS%bx-space-8, 2rem) - var(--%NS%bx-space-12, 3rem) - var(--%NS%bx-space-12, 3rem));
  padding: var(--%NS%bx-space-1, 0.25rem);
  overflow: auto;
  overscroll-behavior: contain;
}`]})};export{u as Identifiers};