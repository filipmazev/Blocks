import{n as l}from"./chunk-DS2-hL1-.js";import{S as oo,q as Z}from"./main-HW2XYL5W.js";import{$i as v,D as E$1,En as Vy,Gr as je,N as Fe,Ti as pM,W as H,Xr as jy,Zr as k,_a as xe,_t as Ls,ar as ay,hn as U,jr as hM,k as Ek,ka as z,na as vM,q as Hp,tr as aa,ua as we,un as Te,xa as yM,yi as oe}from"./chunk-Dt37D5SH.js";var E=class p{colorTokens=l;restoredPalette=ay(`carbon-cobalt`)??`Unrecognized palette`;unknownPalette=ay(`unknown-palette`)??`Unrecognized palette`;colorToken=E$1(`primary`);cssVariable=v(()=>aa(this.colorToken()));complementaryToken=v(()=>Ek(this.colorToken()));invertedToken=v(()=>jy(this.colorToken()));paletteToken=v(()=>Ls(this.colorToken()));themedColor=v(()=>Vy({light:this.colorToken(),dark:this.invertedToken()}));setColorToken(c){this.colorToken.set(c??`primary`)}static ɵfac=function(l){return new(l||p)};static ɵcmp=z({type:p,selectors:[[`app-color-tokens`]],decls:45,vars:13,consts:[[3,`gap`],[`minColumnWidth`,`18rem`],[`title`,`Choose a color token`],[`label`,`Color token`,3,`valueChange`,`options`,`value`],[`aria-hidden`,`true`,1,`token-swatch`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/tokens`],[`title`,`Helper results`],[`message`,`Companion and inverted mappings describe styling relationships. Check the contrast of your final foreground and background combination.`]],template:function(l,o){l&1&&(U(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`bx-select`,3),xe(`valueChange`,function(N){return o.setColorToken(N)}),H(),Fe(5,`div`,4),U(6,`code`),Te(7),H(),U(8,`p`),Te(9,`The swatch follows the active theme. Token mappings below remain available as text.`),H(),U(10,`a`,5),Te(11,`Explore the complete token catalog`),H()()(),U(12,`bx-card`,6)(13,`dl`)(14,`div`)(15,`dt`),Te(16,`Palette token`),H(),U(17,`dd`),Te(18),H()(),U(19,`div`)(20,`dt`),Te(21,`Complementary token`),H(),U(22,`dd`),Te(23),H()(),U(24,`div`)(25,`dt`),Te(26,`Inverted palette token`),H(),U(27,`dd`),Te(28),H()(),U(29,`div`)(30,`dt`),Te(31,`Recognizes light/dark object`),H(),U(32,`dd`),Te(33),H()(),U(34,`div`)(35,`dt`),Te(36,`Restore carbon-cobalt`),H(),U(37,`dd`),Te(38),H()(),U(39,`div`)(40,`dt`),Te(41,`Restore unknown-palette`),H(),U(42,`dd`),Te(43),H()()()()(),Fe(44,`bx-alert`,7),H()),l&2&&(oe(`gap`,5),k(3),oe(`gap`,4),k(),oe(`options`,o.colorTokens)(`value`,o.colorToken()),k(),we(`background`,o.cssVariable()),k(2),je(o.cssVariable()),k(11),je(o.paletteToken()?`Yes`:`No`),k(5),je(o.complementaryToken()),k(5),je(o.invertedToken()),k(5),je(o.themedColor()?`Yes`:`No`),k(5),je(o.restoredPalette),k(5),je(o.unknownPalette))},dependencies:[pM,Z,hM,vM,Hp,oo,yM],styles:[`
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