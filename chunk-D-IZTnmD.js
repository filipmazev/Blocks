import{n as l}from"./chunk-DS2-hL1-.js";import{E as jn,L as xe}from"./chunk-HfEiycvf.js";import{G as js,O as Ys,U as ji,h as Ks,n as $s}from"./chunk-DyZGtlM9.js";import{Aa as qh,Dn as U,Go as zh,K as Fr,Kn as XE,Li as ka,Or as bo,Ua as sk,Vo as z,Xa as td,at as Hh,c as $o,et as Go,ja as qs,kr as br,mr as aA,so as ui,yr as ah}from"./chunk-DflWScik.js";var w=class p{colorTokens=l;restoredPalette=ah(`carbon-cobalt`)??`Unrecognized palette`;unknownPalette=ah(`unknown-palette`)??`Unrecognized palette`;colorToken=z(`primary`);cssVariable=U(()=>qh(this.colorToken()));complementaryToken=U(()=>XE(this.colorToken()));invertedToken=U(()=>zh(this.colorToken()));paletteToken=U(()=>ui(this.colorToken()));themedColor=U(()=>Hh({light:this.colorToken(),dark:this.invertedToken()}));setColorToken(c){this.colorToken.set(c??`primary`)}static ɵfac=function(l){return new(l||p)};static ɵcmp=Fr({type:p,selectors:[[`app-color-tokens`]],decls:45,vars:13,consts:[[3,`gap`],[`minColumnWidth`,`18rem`],[`title`,`Choose a color token`],[`label`,`Color token`,3,`valueChange`,`options`,`value`],[`aria-hidden`,`true`,1,`token-swatch`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/tokens`],[`title`,`Helper results`],[`message`,`Companion and inverted mappings describe styling relationships. Check the contrast of your final foreground and background combination.`]],template:function(l,o){l&1&&(bo(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`bx-select`,3),br(`valueChange`,function(E){return o.setColorToken(E)}),Go(),td(5,`div`,4),bo(6,`code`),aA(7),Go(),bo(8,`p`),aA(9,`The swatch follows the active theme. Token mappings below remain available as text.`),Go(),bo(10,`a`,5),aA(11,`Explore the complete token catalog`),Go()()(),bo(12,`bx-card`,6)(13,`dl`)(14,`div`)(15,`dt`),aA(16,`Palette token`),Go(),bo(17,`dd`),aA(18),Go()(),bo(19,`div`)(20,`dt`),aA(21,`Complementary token`),Go(),bo(22,`dd`),aA(23),Go()(),bo(24,`div`)(25,`dt`),aA(26,`Inverted palette token`),Go(),bo(27,`dd`),aA(28),Go()(),bo(29,`div`)(30,`dt`),aA(31,`Recognizes light/dark object`),Go(),bo(32,`dd`),aA(33),Go()(),bo(34,`div`)(35,`dt`),aA(36,`Restore carbon-cobalt`),Go(),bo(37,`dd`),aA(38),Go()(),bo(39,`div`)(40,`dt`),aA(41,`Restore unknown-palette`),Go(),bo(42,`dd`),aA(43),Go()()()()(),td(44,`bx-alert`,7),Go()),l&2&&($o(`gap`,5),qs(3),$o(`gap`,4),qs(),$o(`options`,o.colorTokens)(`value`,o.colorToken()),qs(),ka(`background`,o.cssVariable()),qs(2),sk(o.cssVariable()),qs(11),sk(o.paletteToken()?`Yes`:`No`),qs(5),sk(o.complementaryToken()),qs(5),sk(o.invertedToken()),qs(5),sk(o.themedColor()?`Yes`:`No`),qs(5),sk(o.restoredPalette),qs(5),sk(o.unknownPalette))},dependencies:[js,xe,$s,Ks,ji,jn,Ys],styles:[`
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
}`]})};export{w as ColorTokens};