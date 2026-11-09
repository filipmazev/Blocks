import{n as l}from"./chunk-DS2-hL1-.js";import{w as rr}from"./main-SBKNNIA4.js";import{n as Z}from"./chunk-BQlfz5HR.js";import{A as E,Dt as MM,Fa as ye,On as Ux,Or as ds,R as Fa,T as DM,Wt as OD,Zi as q,_ as CM,a as $p,dr as b,ea as qe,gi as le,ia as qx,ja as we,jn as Ve,ka as wM,t as $,ut as K,w as D,wr as cx,zt as Ne}from"./chunk-B8p78nSc.js";var O=class p{colorTokens=l;restoredPalette=cx(`carbon-cobalt`)??`Unrecognized palette`;unknownPalette=cx(`unknown-palette`)??`Unrecognized palette`;colorToken=E(`primary`);cssVariable=b(()=>ds(this.colorToken()));complementaryToken=b(()=>OD(this.colorToken()));invertedToken=b(()=>Ux(this.colorToken()));paletteToken=b(()=>Fa(this.colorToken()));themedColor=b(()=>qx({light:this.colorToken(),dark:this.invertedToken()}));setColorToken(c){this.colorToken.set(c??`primary`)}static ɵfac=function(l){return new(l||p)};static ɵcmp=q({type:p,selectors:[[`app-color-tokens`]],decls:45,vars:13,consts:[[3,`gap`],[`minColumnWidth`,`18rem`],[`title`,`Choose a color token`],[`label`,`Color token`,3,`valueChange`,`options`,`value`],[`aria-hidden`,`true`,1,`token-swatch`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/tokens`],[`title`,`Helper results`],[`message`,`Companion and inverted mappings describe styling relationships. Check the contrast of your final foreground and background combination.`]],template:function(l,o){l&1&&(K(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`bx-select`,3),ye(`valueChange`,function(E){return o.setColorToken(E)}),$(),Ve(5,`div`,4),K(6,`code`),Ne(7),$(),K(8,`p`),Ne(9,`The swatch follows the active theme. Token mappings below remain available as text.`),$(),K(10,`a`,5),Ne(11,`Explore the complete token catalog`),$()()(),K(12,`bx-card`,6)(13,`dl`)(14,`div`)(15,`dt`),Ne(16,`Palette token`),$(),K(17,`dd`),Ne(18),$()(),K(19,`div`)(20,`dt`),Ne(21,`Complementary token`),$(),K(22,`dd`),Ne(23),$()(),K(24,`div`)(25,`dt`),Ne(26,`Inverted palette token`),$(),K(27,`dd`),Ne(28),$()(),K(29,`div`)(30,`dt`),Ne(31,`Recognizes light/dark object`),$(),K(32,`dd`),Ne(33),$()(),K(34,`div`)(35,`dt`),Ne(36,`Restore carbon-cobalt`),$(),K(37,`dd`),Ne(38),$()(),K(39,`div`)(40,`dt`),Ne(41,`Restore unknown-palette`),$(),K(42,`dd`),Ne(43),$()()()()(),Ve(44,`bx-alert`,7),$()),l&2&&(le(`gap`,5),D(3),le(`gap`,4),D(),le(`options`,o.colorTokens)(`value`,o.colorToken()),D(),we(`background`,o.cssVariable()),D(2),qe(o.cssVariable()),D(11),qe(o.paletteToken()?`Yes`:`No`),D(5),qe(o.complementaryToken()),D(5),qe(o.invertedToken()),D(5),qe(o.themedColor()?`Yes`:`No`),D(5),qe(o.restoredPalette),D(5),qe(o.unknownPalette))},dependencies:[wM,Z,CM,DM,$p,rr,MM],styles:[`
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