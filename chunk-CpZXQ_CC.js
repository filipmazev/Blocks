import{J as Z}from"./main-UHMB555Q.js";import{$r as je,En as Wr,Gr as iM,Ri as sM,S as D,Ti as pM,Xr as j,aa as ve,hn as Ve,in as Te,on as U,qn as ae,un as V,zn as _}from"./chunk-B79cUMdP.js";var y=class d{ownerId=Wr();identifier=_(Wr());generateIdentifier(){this.identifier.set(Wr())}static ɵfac=function(a){return new(a||d)};static ɵcmp=V({type:d,selectors:[[`app-identifiers`]],decls:17,vars:6,consts:[[3,`gap`],[`title`,`Generate a version-4 UUID`],[`aria-label`,`Generated UUID`,`aria-live`,`polite`,1,`identifier`],[`direction`,`horizontal`,3,`wrap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`title`,`Stable instance identifier`],[`data-owner-id`,``,1,`identifier`],[`title`,`Generate once, reuse through cleanup`,`message`,`Keep owner IDs in instance fields. Generating them in a template or a derived computation can break the connection between acquisition and cleanup.`]],template:function(a,c){a&1&&(j(0,`bx-stack`,0)(1,`bx-card`,1)(2,`bx-stack`,0)(3,`p`),Te(4,`Create identifiers for controls, overlays, or shared lock owners.`),U(),j(5,`output`,2),Te(6),U(),j(7,`bx-stack`,3)(8,`button`,4),ve(`click`,function(){return c.generateIdentifier()}),Te(9,`Generate another UUID`),U()()()(),j(10,`bx-card`,5)(11,`bx-stack`,0)(12,`code`,6),Te(13),U(),j(14,`p`),Te(15,`This ID is generated once for this demo instance. Generate another UUID above and compare: the owner ID stays the same.`),U()()(),Ve(16,`bx-alert`,7),U()),a&2&&(ae(`gap`,5),D(2),ae(`gap`,4),D(4),je(c.identifier()),D(),ae(`wrap`,!0),D(4),ae(`gap`,3),D(2),je(c.ownerId))},dependencies:[iM,Z,sM,pM],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
bx-card[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: 1.25rem;
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
  gap: 0.75rem;
}
dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.25rem 1rem;
}
dd[_ngcontent-%COMP%] {
  margin: 0;
  font-weight: 600;
  overflow-wrap: anywhere;
}
.metric[_ngcontent-%COMP%] {
  margin-block: 0.5rem;
  color: var(--%NS%bx-text-heading);
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 600;
  line-height: 1.25;
  font-variant-numeric: tabular-nums;
}
.preview-cell[_ngcontent-%COMP%] {
  display: block;
  padding: 1.25rem;
  border-radius: 0.5rem;
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
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
  forced-color-adjust: none;
}
.utility-overlay[_ngcontent-%COMP%] {
  display: block;
  inline-size: min(22rem, 100vw - 2rem);
  max-block-size: calc(100dvh - 2rem);
  overflow: auto;
}
.lock-controls-content[_ngcontent-%COMP%] {
  max-block-size: calc(100dvh - 2rem - 3rem - 3rem);
  padding: 0.25rem;
  overflow: auto;
  overscroll-behavior: contain;
}`]})};export{y as Identifiers};