import{n as l}from"./chunk-DS2-hL1-.js";import{w as ki}from"./main-GAA3IH53.js";import{r as Z}from"./chunk-CjIjxXph.js";import{$t as Te,Bt as Qv,Hn as ae,Kr as je,Nn as _,Ri as sM,Rr as iM,Tt as Ny,Ur as j,Wt as Ry,Yn as bk,_a as ye,an as V,b as D,jt as Op,ln as Ve,nn as U,or as dM,pr as ea,ra as ve,ta as v,xt as Ms,yi as pM}from"./chunk-DhMqzCIY.js";var E=class p{colorTokens=l;restoredPalette=Qv(`carbon-cobalt`)??`Unrecognized palette`;unknownPalette=Qv(`unknown-palette`)??`Unrecognized palette`;colorToken=_(`primary`);cssVariable=v(()=>ea(this.colorToken()));complementaryToken=v(()=>bk(this.colorToken()));invertedToken=v(()=>Ry(this.colorToken()));paletteToken=v(()=>Ms(this.colorToken()));themedColor=v(()=>Ny({light:this.colorToken(),dark:this.invertedToken()}));setColorToken(c){this.colorToken.set(c??`primary`)}static ɵfac=function(l){return new(l||p)};static ɵcmp=V({type:p,selectors:[[`app-color-tokens`]],decls:45,vars:13,consts:[[3,`gap`],[`minColumnWidth`,`18rem`],[`title`,`Choose a color token`],[`label`,`Color token`,3,`valueChange`,`options`,`value`],[`aria-hidden`,`true`,1,`token-swatch`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/tokens`],[`title`,`Helper results`],[`message`,`Companion and inverted mappings describe styling relationships. Check the contrast of your final foreground and background combination.`]],template:function(l,o){l&1&&(j(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`bx-select`,3),ve(`valueChange`,function(N){return o.setColorToken(N)}),U(),Ve(5,`div`,4),j(6,`code`),Te(7),U(),j(8,`p`),Te(9,`The swatch follows the active theme. Token mappings below remain available as text.`),U(),j(10,`a`,5),Te(11,`Explore the complete token catalog`),U()()(),j(12,`bx-card`,6)(13,`dl`)(14,`div`)(15,`dt`),Te(16,`Palette token`),U(),j(17,`dd`),Te(18),U()(),j(19,`div`)(20,`dt`),Te(21,`Complementary token`),U(),j(22,`dd`),Te(23),U()(),j(24,`div`)(25,`dt`),Te(26,`Inverted palette token`),U(),j(27,`dd`),Te(28),U()(),j(29,`div`)(30,`dt`),Te(31,`Recognizes light/dark object`),U(),j(32,`dd`),Te(33),U()(),j(34,`div`)(35,`dt`),Te(36,`Restore carbon-cobalt`),U(),j(37,`dd`),Te(38),U()(),j(39,`div`)(40,`dt`),Te(41,`Restore unknown-palette`),U(),j(42,`dd`),Te(43),U()()()()(),Ve(44,`bx-alert`,7),U()),l&2&&(ae(`gap`,5),D(3),ae(`gap`,4),D(),ae(`options`,o.colorTokens)(`value`,o.colorToken()),D(),ye(`background`,o.cssVariable()),D(2),je(o.cssVariable()),D(11),je(o.paletteToken()?`Yes`:`No`),D(5),je(o.complementaryToken()),D(5),je(o.invertedToken()),D(5),je(o.themedColor()?`Yes`:`No`),D(5),je(o.restoredPalette),D(5),je(o.unknownPalette))},dependencies:[iM,Z,sM,dM,Op,ki,pM],styles:[`
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
}`]})};export{E as ColorTokens};