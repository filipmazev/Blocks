import{n as l}from"./chunk-DS2-hL1-.js";import{l as Nn}from"./main-RICJTCGQ.js";import{r as Z}from"./chunk-DZ1I1_Lc.js";import{D,F as E,Ha as sT,La as r0,Nr as be,Ti as hl,To as y,Vi as js,Vn as W,Vt as M,Xn as X,Yi as lT,_o as wy,ai as fT,at as Hf,da as n0,fa as nI,gi as g,k as De,l as A,po as we,ti as ee,wa as pT}from"./chunk-DzvvGvUq.js";var w=class p{colorTokens=l;restoredPalette=wy(`carbon-cobalt`)??`Unrecognized palette`;unknownPalette=wy(`unknown-palette`)??`Unrecognized palette`;colorToken=M(`primary`);cssVariable=g(()=>js(this.colorToken()));complementaryToken=g(()=>nI(this.colorToken()));invertedToken=g(()=>r0(this.colorToken()));paletteToken=g(()=>hl(this.colorToken()));themedColor=g(()=>n0({light:this.colorToken(),dark:this.invertedToken()}));setColorToken(c){this.colorToken.set(c??`primary`)}static ɵfac=function(l){return new(l||p)};static ɵcmp=W({type:p,selectors:[[`app-color-tokens`]],decls:45,vars:13,consts:[[3,`gap`],[`minColumnWidth`,`18rem`],[`title`,`Choose a color token`],[`label`,`Color token`,3,`valueChange`,`options`,`value`],[`aria-hidden`,`true`,1,`token-swatch`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/tokens`],[`title`,`Helper results`],[`message`,`Companion and inverted mappings describe styling relationships. Check the contrast of your final foreground and background combination.`]],template:function(l,o){l&1&&(E(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`bx-select`,3),ee(`valueChange`,function(E){return o.setColorToken(E)}),D(),we(5,`div`,4),E(6,`code`),X(7),D(),E(8,`p`),X(9,`The swatch follows the active theme. Token mappings below remain available as text.`),D(),E(10,`a`,5),X(11,`Explore the complete token catalog`),D()()(),E(12,`bx-card`,6)(13,`dl`)(14,`div`)(15,`dt`),X(16,`Palette token`),D(),E(17,`dd`),X(18),D()(),E(19,`div`)(20,`dt`),X(21,`Complementary token`),D(),E(22,`dd`),X(23),D()(),E(24,`div`)(25,`dt`),X(26,`Inverted palette token`),D(),E(27,`dd`),X(28),D()(),E(29,`div`)(30,`dt`),X(31,`Recognizes light/dark object`),D(),E(32,`dd`),X(33),D()(),E(34,`div`)(35,`dt`),X(36,`Restore carbon-cobalt`),D(),E(37,`dd`),X(38),D()(),E(39,`div`)(40,`dt`),X(41,`Restore unknown-palette`),D(),E(42,`dd`),X(43),D()()()()(),we(44,`bx-alert`,7),D()),l&2&&(A(`gap`,5),y(3),A(`gap`,4),y(),A(`options`,o.colorTokens)(`value`,o.colorToken()),y(),De(`background`,o.cssVariable()),y(2),be(o.cssVariable()),y(11),be(o.paletteToken()?`Yes`:`No`),y(5),be(o.complementaryToken()),y(5),be(o.invertedToken()),y(5),be(o.themedColor()?`Yes`:`No`),y(5),be(o.restoredPalette),y(5),be(o.unknownPalette))},dependencies:[sT,Z,lT,pT,Hf,Nn,fT],styles:[`
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
}`]})};export{w as ColorTokens};