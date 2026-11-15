import{n as l}from"./chunk-DS2-hL1-.js";import{D as fe,w as Vt}from"./chunk-BEm-ihzG.js";import{C as Vs,O as Xs,b as Us,s as Gs,x as Vi}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$a as tm,$r as fa,Do as xZ,En as W,Hn as Xm,In as XT,Lt as Os,Sr as ba,ar as Zy,b as Cy,ct as K,gi as hZ,i as $n,oi as gZ,ta as mZ,u as Ag,wr as br,xn as Ul}from"./chunk-CVY9_LoB.js";var w=class p{colorTokens=l;restoredPalette=Xm(`carbon-cobalt`)??`Unrecognized palette`;unknownPalette=Xm(`unknown-palette`)??`Unrecognized palette`;colorToken=W(`primary`);cssVariable=K(()=>gZ(this.colorToken()));complementaryToken=K(()=>hZ(this.colorToken()));invertedToken=K(()=>xZ(this.colorToken()));paletteToken=K(()=>Ag(this.colorToken()));themedColor=K(()=>mZ({light:this.colorToken(),dark:this.invertedToken()}));setColorToken(c){this.colorToken.set(c??`primary`)}static ɵfac=function(l){return new(l||p)};static ɵcmp=$n({type:p,selectors:[[`app-color-tokens`]],decls:45,vars:13,consts:[[3,`gap`],[`minColumnWidth`,`18rem`],[`title`,`Choose a color token`],[`label`,`Color token`,3,`valueChange`,`options`,`value`],[`aria-hidden`,`true`,1,`token-swatch`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/tokens`],[`title`,`Helper results`],[`message`,`Companion and inverted mappings describe styling relationships. Check the contrast of your final foreground and background combination.`]],template:function(l,o){l&1&&(Os(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`,2)(3,`bx-stack`,0)(4,`bx-select`,3),br(`valueChange`,function(E){return o.setColorToken(E)}),ba(),Cy(5,`div`,4),Os(6,`code`),XT(7),ba(),Os(8,`p`),XT(9,`The swatch follows the active theme. Token mappings below remain available as text.`),ba(),Os(10,`a`,5),XT(11,`Explore the complete token catalog`),ba()()(),Os(12,`bx-card`,6)(13,`dl`)(14,`div`)(15,`dt`),XT(16,`Palette token`),ba(),Os(17,`dd`),XT(18),ba()(),Os(19,`div`)(20,`dt`),XT(21,`Complementary token`),ba(),Os(22,`dd`),XT(23),ba()(),Os(24,`div`)(25,`dt`),XT(26,`Inverted palette token`),ba(),Os(27,`dd`),XT(28),ba()(),Os(29,`div`)(30,`dt`),XT(31,`Recognizes light/dark object`),ba(),Os(32,`dd`),XT(33),ba()(),Os(34,`div`)(35,`dt`),XT(36,`Restore carbon-cobalt`),ba(),Os(37,`dd`),XT(38),ba()(),Os(39,`div`)(40,`dt`),XT(41,`Restore unknown-palette`),ba(),Os(42,`dd`),XT(43),ba()()()()(),Cy(44,`bx-alert`,7),ba()),l&2&&(fa(`gap`,5),Ul(3),fa(`gap`,4),Ul(),fa(`options`,o.colorTokens)(`value`,o.colorToken()),Ul(),tm(`background`,o.cssVariable()),Ul(2),Zy(o.cssVariable()),Ul(11),Zy(o.paletteToken()?`Yes`:`No`),Ul(5),Zy(o.complementaryToken()),Ul(5),Zy(o.invertedToken()),Ul(5),Zy(o.themedColor()?`Yes`:`No`),Ul(5),Zy(o.restoredPalette),Ul(5),Zy(o.unknownPalette))},dependencies:[Vs,fe,Us,Gs,Vi,Vt,Xs],styles:[`
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