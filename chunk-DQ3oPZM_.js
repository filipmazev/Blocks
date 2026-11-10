import{n as l}from"./chunk-DS2-hL1-.js";import{O as rr}from"./main-CHCNDXPW.js";import{n as Z}from"./chunk-C_Cm-KTR.js";import{$r as hs,An as Xp,Dt as OM,Hr as g,Mn as Xx,N as G,Nt as P,R as HD,Ti as me,V as IM,Wn as Zx,Xi as qa,_t as Me,b as DM,c as Ae,g as C,ln as V,o as A,s as AM,sr as bx,v as Ce,xa as ue,y as D}from"./chunk-Cn9-98lL.js";var O=class p{colorTokens=l;restoredPalette=bx(`carbon-cobalt`)??`Unrecognized palette`;unknownPalette=bx(`unknown-palette`)??`Unrecognized palette`;colorToken=D(`primary`);cssVariable=g(()=>hs(this.colorToken()));complementaryToken=g(()=>HD(this.colorToken()));invertedToken=g(()=>Xx(this.colorToken()));paletteToken=g(()=>qa(this.colorToken()));themedColor=g(()=>Zx({light:this.colorToken(),dark:this.invertedToken()}));setColorToken(c){this.colorToken.set(c??`primary`)}static ɵfac=function(l){return new(l||p)};static ɵcmp=G({type:p,selectors:[[`app-color-tokens`]],decls:45,vars:13,consts:[[3,`gap`],[`minColumnWidth`,`18rem`],[`title`,`Choose a color token`],[`label`,`Color token`,3,`valueChange`,`options`,`value`],[`aria-hidden`,`true`,1,`token-swatch`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/tokens`],[`title`,`Helper results`],[`message`,`Companion and inverted mappings describe styling relationships. Check the contrast of your final foreground and background combination.`]],template:function(l,o){l&1&&(A(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`bx-select`,3),ue(`valueChange`,function(E){return o.setColorToken(E)}),P(),Ae(5,`div`,4),A(6,`code`),me(7),P(),A(8,`p`),me(9,`The swatch follows the active theme. Token mappings below remain available as text.`),P(),A(10,`a`,5),me(11,`Explore the complete token catalog`),P()()(),A(12,`bx-card`,6)(13,`dl`)(14,`div`)(15,`dt`),me(16,`Palette token`),P(),A(17,`dd`),me(18),P()(),A(19,`div`)(20,`dt`),me(21,`Complementary token`),P(),A(22,`dd`),me(23),P()(),A(24,`div`)(25,`dt`),me(26,`Inverted palette token`),P(),A(27,`dd`),me(28),P()(),A(29,`div`)(30,`dt`),me(31,`Recognizes light/dark object`),P(),A(32,`dd`),me(33),P()(),A(34,`div`)(35,`dt`),me(36,`Restore carbon-cobalt`),P(),A(37,`dd`),me(38),P()(),A(39,`div`)(40,`dt`),me(41,`Restore unknown-palette`),P(),A(42,`dd`),me(43),P()()()()(),Ae(44,`bx-alert`,7),P()),l&2&&(V(`gap`,5),C(3),V(`gap`,4),C(),V(`options`,o.colorTokens)(`value`,o.colorToken()),C(),Ce(`background`,o.cssVariable()),C(2),Me(o.cssVariable()),C(11),Me(o.paletteToken()?`Yes`:`No`),C(5),Me(o.complementaryToken()),C(5),Me(o.invertedToken()),C(5),Me(o.themedColor()?`Yes`:`No`),C(5),Me(o.restoredPalette),C(5),Me(o.unknownPalette))},dependencies:[DM,Z,IM,AM,Xp,rr,OM],styles:[`
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
}`]})};export{O as ColorTokens};