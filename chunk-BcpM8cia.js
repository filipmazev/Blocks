import{n as l}from"./chunk-DS2-hL1-.js";import{q as Z,w as rr}from"./main-BD2MVIMM.js";import{Hi as qx,Mr as gM,N as E,Q as He,Ri as q,U as Fa,X as H,b as CM,ci as le,fa as v,fn as Te,gr as cs,ja as ye,ni as kM,nt as ID,pa as vM,s as $p,t as $,tt as Hx,ui as lx,v as Be,y as C,ya as we}from"./chunk-cpWQWn_p.js";var O=class p{colorTokens=l;restoredPalette=lx(`carbon-cobalt`)??`Unrecognized palette`;unknownPalette=lx(`unknown-palette`)??`Unrecognized palette`;colorToken=C(`primary`);cssVariable=v(()=>cs(this.colorToken()));complementaryToken=v(()=>ID(this.colorToken()));invertedToken=v(()=>qx(this.colorToken()));paletteToken=v(()=>Fa(this.colorToken()));themedColor=v(()=>Hx({light:this.colorToken(),dark:this.invertedToken()}));setColorToken(c){this.colorToken.set(c??`primary`)}static ɵfac=function(l){return new(l||p)};static ɵcmp=H({type:p,selectors:[[`app-color-tokens`]],decls:45,vars:13,consts:[[3,`gap`],[`minColumnWidth`,`18rem`],[`title`,`Choose a color token`],[`label`,`Color token`,3,`valueChange`,`options`,`value`],[`aria-hidden`,`true`,1,`token-swatch`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/tokens`],[`title`,`Helper results`],[`message`,`Companion and inverted mappings describe styling relationships. Check the contrast of your final foreground and background combination.`]],template:function(l,o){l&1&&($(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`bx-select`,3),ye(`valueChange`,function(E){return o.setColorToken(E)}),q(),Be(5,`div`,4),$(6,`code`),Te(7),q(),$(8,`p`),Te(9,`The swatch follows the active theme. Token mappings below remain available as text.`),q(),$(10,`a`,5),Te(11,`Explore the complete token catalog`),q()()(),$(12,`bx-card`,6)(13,`dl`)(14,`div`)(15,`dt`),Te(16,`Palette token`),q(),$(17,`dd`),Te(18),q()(),$(19,`div`)(20,`dt`),Te(21,`Complementary token`),q(),$(22,`dd`),Te(23),q()(),$(24,`div`)(25,`dt`),Te(26,`Inverted palette token`),q(),$(27,`dd`),Te(28),q()(),$(29,`div`)(30,`dt`),Te(31,`Recognizes light/dark object`),q(),$(32,`dd`),Te(33),q()(),$(34,`div`)(35,`dt`),Te(36,`Restore carbon-cobalt`),q(),$(37,`dd`),Te(38),q()(),$(39,`div`)(40,`dt`),Te(41,`Restore unknown-palette`),q(),$(42,`dd`),Te(43),q()()()()(),Be(44,`bx-alert`,7),q()),l&2&&(le(`gap`,5),E(3),le(`gap`,4),E(),le(`options`,o.colorTokens)(`value`,o.colorToken()),E(),we(`background`,o.cssVariable()),E(2),He(o.cssVariable()),E(11),He(o.paletteToken()?`Yes`:`No`),E(5),He(o.complementaryToken()),E(5),He(o.invertedToken()),E(5),He(o.themedColor()?`Yes`:`No`),E(5),He(o.restoredPalette),E(5),He(o.unknownPalette))},dependencies:[gM,Z,vM,kM,$p,rr,CM],styles:[`
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
  max-block-size: calc(100dvh - var(--%NS%bx-space-8, 2rem));
  overflow: auto;
}
.lock-controls-content[_ngcontent-%COMP%] {
  max-block-size: calc(100dvh - var(--%NS%bx-space-8, 2rem) - var(--%NS%bx-space-12, 3rem) - var(--%NS%bx-space-12, 3rem));
  padding: var(--%NS%bx-space-1, 0.25rem);
  overflow: auto;
  overscroll-behavior: contain;
}`]})};export{O as ColorTokens};