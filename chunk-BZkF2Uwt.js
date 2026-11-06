import{n as l}from"./chunk-DS2-hL1-.js";import{v as Ni}from"./main-2GBJQHUZ.js";import{r as Z}from"./chunk-DUDY88j1.js";import{Ai as tt,Bt as QM,Di as te,Fn as _p,Jt as Se,Li as w0,Or as je,Q as JM,Qi as y,Vr as lM,Yt as Ss,ea as ye,jn as Zi,jr as k,kn as ZM,l as Be,ln as Uv,lt as M,oi as oe,qt as S0,tt as KM,vt as Ne,wr as j}from"./chunk-CfQ5k3AW.js";var E=class p{colorTokens=l;restoredPalette=Uv(`carbon-cobalt`)??`Unrecognized palette`;unknownPalette=Uv(`unknown-palette`)??`Unrecognized palette`;colorToken=M(`primary`);cssVariable=y(()=>Zi(this.colorToken()));complementaryToken=y(()=>lM(this.colorToken()));invertedToken=y(()=>S0(this.colorToken()));paletteToken=y(()=>Ss(this.colorToken()));themedColor=y(()=>w0({light:this.colorToken(),dark:this.invertedToken()}));setColorToken(c){this.colorToken.set(c??`primary`)}static ɵfac=function(l){return new(l||p)};static ɵcmp=j({type:p,selectors:[[`app-color-tokens`]],decls:45,vars:13,consts:[[3,`gap`],[`minColumnWidth`,`18rem`],[`title`,`Choose a color token`],[`label`,`Color token`,3,`valueChange`,`options`,`value`],[`aria-hidden`,`true`,1,`token-swatch`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/tokens`],[`title`,`Helper results`],[`message`,`Companion and inverted mappings describe styling relationships. Check the contrast of your final foreground and background combination.`]],template:function(l,o){l&1&&(te(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`bx-select`,3),Ne(`valueChange`,function(N){return o.setColorToken(N)}),oe(),tt(5,`div`,4),te(6,`code`),Se(7),oe(),te(8,`p`),Se(9,`The swatch follows the active theme. Token mappings below remain available as text.`),oe(),te(10,`a`,5),Se(11,`Explore the complete token catalog`),oe()()(),te(12,`bx-card`,6)(13,`dl`)(14,`div`)(15,`dt`),Se(16,`Palette token`),oe(),te(17,`dd`),Se(18),oe()(),te(19,`div`)(20,`dt`),Se(21,`Complementary token`),oe(),te(22,`dd`),Se(23),oe()(),te(24,`div`)(25,`dt`),Se(26,`Inverted palette token`),oe(),te(27,`dd`),Se(28),oe()(),te(29,`div`)(30,`dt`),Se(31,`Recognizes light/dark object`),oe(),te(32,`dd`),Se(33),oe()(),te(34,`div`)(35,`dt`),Se(36,`Restore carbon-cobalt`),oe(),te(37,`dd`),Se(38),oe()(),te(39,`div`)(40,`dt`),Se(41,`Restore unknown-palette`),oe(),te(42,`dd`),Se(43),oe()()()()(),tt(44,`bx-alert`,7),oe()),l&2&&(ye(`gap`,5),k(3),ye(`gap`,4),k(),ye(`options`,o.colorTokens)(`value`,o.colorToken()),k(),je(`background`,o.cssVariable()),k(2),Be(o.cssVariable()),k(11),Be(o.paletteToken()?`Yes`:`No`),k(5),Be(o.complementaryToken()),k(5),Be(o.invertedToken()),k(5),Be(o.themedColor()?`Yes`:`No`),k(5),Be(o.restoredPalette),k(5),Be(o.unknownPalette))},dependencies:[KM,Z,ZM,QM,_p,Ni,JM],styles:[`
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