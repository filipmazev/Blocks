import{q as Z}from"./main-HW2XYL5W.js";import{D as E,Gr as je,In as Xr,N as Fe,Ti as pM,W as H,Zr as k,_a as xe,hn as U,jr as hM,ka as z,un as Te,xa as yM,yi as oe}from"./chunk-Dt37D5SH.js";var y=class d{ownerId=Xr();identifier=E(Xr());generateIdentifier(){this.identifier.set(Xr())}static ɵfac=function(a){return new(a||d)};static ɵcmp=z({type:d,selectors:[[`app-identifiers`]],decls:17,vars:6,consts:[[3,`gap`],[`title`,`Generate a version-4 UUID`],[`aria-label`,`Generated UUID`,`aria-live`,`polite`,1,`identifier`],[`direction`,`horizontal`,3,`wrap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`title`,`Stable instance identifier`],[`data-owner-id`,``,1,`identifier`],[`title`,`Generate once, reuse through cleanup`,`message`,`Keep owner IDs in instance fields. Generating them in a template or a derived computation can break the connection between acquisition and cleanup.`]],template:function(a,c){a&1&&(U(0,`bx-stack`,0)(1,`bx-card`,1)(2,`bx-stack`,0)(3,`p`),Te(4,`Create identifiers for controls, overlays, or shared lock owners.`),H(),U(5,`output`,2),Te(6),H(),U(7,`bx-stack`,3)(8,`button`,4),xe(`click`,function(){return c.generateIdentifier()}),Te(9,`Generate another UUID`),H()()()(),U(10,`bx-card`,5)(11,`bx-stack`,0)(12,`code`,6),Te(13),H(),U(14,`p`),Te(15,`This ID is generated once for this demo instance. Generate another UUID above and compare: the owner ID stays the same.`),H()()(),Fe(16,`bx-alert`,7),H()),a&2&&(oe(`gap`,5),k(2),oe(`gap`,4),k(4),je(c.identifier()),k(),oe(`wrap`,!0),k(4),oe(`gap`,3),k(2),je(c.ownerId))},dependencies:[pM,Z,hM,yM],styles:[`
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