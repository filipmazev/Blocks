import{n as l}from"./chunk-DS2-hL1-.js";import{D as me,t as At}from"./chunk-g_MLkDaC.js";import{A as Cy,Ba as te,Br as dT,Ma as sI,Q as G,Rt as M,S as Bs,To as y,Zn as X,_i as i0,_o as xT,ao as vl,fr as _,i as $f,ia as o0,ii as g,j as D,mn as R,mr as _e,ti as fe,ua as pT,ui as hT,xo as xe}from"./chunk-CpeWzSSw.js";var w=class p{colorTokens=l;restoredPalette=Cy(`carbon-cobalt`)??`Unrecognized palette`;unknownPalette=Cy(`unknown-palette`)??`Unrecognized palette`;colorToken=M(`primary`);cssVariable=g(()=>Bs(this.colorToken()));complementaryToken=g(()=>sI(this.colorToken()));invertedToken=g(()=>i0(this.colorToken()));paletteToken=g(()=>vl(this.colorToken()));themedColor=g(()=>o0({light:this.colorToken(),dark:this.invertedToken()}));setColorToken(c){this.colorToken.set(c??`primary`)}static ɵfac=function(l){return new(l||p)};static ɵcmp=G({type:p,selectors:[[`app-color-tokens`]],decls:45,vars:13,consts:[[3,`gap`],[`minColumnWidth`,`18rem`],[`title`,`Choose a color token`],[`label`,`Color token`,3,`valueChange`,`options`,`value`],[`aria-hidden`,`true`,1,`token-swatch`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/tokens`],[`title`,`Helper results`],[`message`,`Companion and inverted mappings describe styling relationships. Check the contrast of your final foreground and background combination.`]],template:function(l,o){l&1&&(_(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`bx-select`,3),te(`valueChange`,function(E){return o.setColorToken(E)}),D(),xe(5,`div`,4),_(6,`code`),X(7),D(),_(8,`p`),X(9,`The swatch follows the active theme. Token mappings below remain available as text.`),D(),_(10,`a`,5),X(11,`Explore the complete token catalog`),D()()(),_(12,`bx-card`,6)(13,`dl`)(14,`div`)(15,`dt`),X(16,`Palette token`),D(),_(17,`dd`),X(18),D()(),_(19,`div`)(20,`dt`),X(21,`Complementary token`),D(),_(22,`dd`),X(23),D()(),_(24,`div`)(25,`dt`),X(26,`Inverted palette token`),D(),_(27,`dd`),X(28),D()(),_(29,`div`)(30,`dt`),X(31,`Recognizes light/dark object`),D(),_(32,`dd`),X(33),D()(),_(34,`div`)(35,`dt`),X(36,`Restore carbon-cobalt`),D(),_(37,`dd`),X(38),D()(),_(39,`div`)(40,`dt`),X(41,`Restore unknown-palette`),D(),_(42,`dd`),X(43),D()()()()(),xe(44,`bx-alert`,7),D()),l&2&&(R(`gap`,5),y(3),R(`gap`,4),y(),R(`options`,o.colorTokens)(`value`,o.colorToken()),y(),_e(`background`,o.cssVariable()),y(2),fe(o.cssVariable()),y(11),fe(o.paletteToken()?`Yes`:`No`),y(5),fe(o.complementaryToken()),y(5),fe(o.invertedToken()),y(5),fe(o.themedColor()?`Yes`:`No`),y(5),fe(o.restoredPalette),y(5),fe(o.unknownPalette))},dependencies:[dT,me,pT,hT,$f,At,xT],styles:[`
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