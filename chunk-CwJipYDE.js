import{Bi as p,Dt as OM,H as Ia,Hr as g,K as In,Kt as S,N as G,Nt as P,Pa as wn,Ti as me,V as IM,_ as CM,_t as Me,b as DM,c as Ae,g as C,ln as V,o as A,s as AM,ur as ca,yt as Mn}from"./chunk-zW9dIJoT.js";var N=(o,l)=>l[0];function M(o,l){if(o&1&&Ae(0,`bx-tag`,7),o&2){let a=l.$implicit,r=S();V(`text`,a[0]+` · `+a[1]+` px`)(`color`,r.windowDimensionsService.currentBreakpoint()===a[0]?`primary`:`neutral`)(`leadingIcon`,r.windowDimensionsService.currentBreakpoint()===a[0]?`check`:void 0)(`ariaLabel`,a[0]+`: `+a[1]+` pixels`+(r.windowDimensionsService.currentBreakpoint()===a[0]?`, current`:``))(`focusable`,!1)}}function E(o,l){if(o&1&&(A(0,`span`,10),me(1),P()),o&2){let a=l.$implicit;C(),Me(a)}}var _=class o{windowDimensionsService=p(Ia);breakpointEntries=Object.entries(this.windowDimensionsService.breakpoints);previewItems=[1,2,3,4,5,6];columns=g(()=>this.windowDimensionsService.resolveResponsiveValue({md:2,xl:3},1));static ɵfac=function(a){return new(a||o)};static ɵcmp=G({type:o,selectors:[[`app-viewport`]],decls:60,vars:16,consts:[[3,`gap`],[`minColumnWidth`,`12rem`],[`data-viewport-width`,``,1,`metric`],[1,`metric`],[`data-breakpoint`,``,1,`metric`],[`title`,`Shared breakpoint scale`],[`direction`,`horizontal`,`aria-label`,`Shared breakpoint minimums`,3,`wrap`,`gap`],[3,`text`,`color`,`leadingIcon`,`ariaLabel`,`focusable`],[`title`,`Responsive value`],[3,`columns`,`gap`],[1,`preview-cell`],[`message`,`Viewport signals describe the browser window. Use container-aware layout when a component has less available space.`]],template:function(a,r){a&1&&(A(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`)(3,`p`),me(4,`Viewport width`),P(),A(5,`p`,2),me(6),A(7,`small`),me(8,`px`),P()(),A(9,`p`),me(10,`CSS pixels`),P()(),A(11,`bx-card`)(12,`p`),me(13,`Viewport height`),P(),A(14,`p`,3),me(15),A(16,`small`),me(17,`px`),P()(),A(18,`p`),me(19,`CSS pixels`),P()(),A(20,`bx-card`)(21,`p`),me(22,`Current breakpoint`),P(),A(23,`p`,4),me(24),P(),A(25,`p`),me(26),P()()(),A(27,`bx-card`,5)(28,`bx-stack`,0)(29,`p`),me(30,`Resize the window or change browser zoom. The current breakpoint is marked with a check.`),P(),A(31,`bx-stack`,6),Mn(32,M,1,5,`bx-tag`,7,N),P(),A(34,`dl`)(35,`div`)(36,`dt`),me(37,`Mobile viewport (below md)`),P(),A(38,`dd`),me(39),P()(),A(40,`div`)(41,`dt`),me(42,`Between md and xl`),P(),A(43,`dd`),me(44),P()(),A(45,`div`)(46,`dt`),me(47,`At least lg`),P(),A(48,`dd`),me(49),P()()()()(),A(50,`bx-card`,8)(51,`bx-stack`,0)(52,`p`)(53,`code`),me(54),P(),me(55),P(),A(56,`bx-grid`,9),Mn(57,E,2,1,`span`,10,ca),P()()(),Ae(59,`bx-alert`,11),P()),a&2&&(V(`gap`,5),C(6),wn(``,r.windowDimensionsService.dimensions().width,` `),C(9),wn(``,r.windowDimensionsService.dimensions().height,` `),C(9),Me(r.windowDimensionsService.currentBreakpoint()??`SSR`),C(2),wn(`Minimum `,r.windowDimensionsService.currentBreakpointValue()??`Unavailable`,` px`),C(2),V(`gap`,4),C(3),V(`wrap`,!0)(`gap`,2),C(),In(r.breakpointEntries),C(7),Me(r.windowDimensionsService.isMobile()?`Yes`:`No`),C(5),Me(r.windowDimensionsService.isBetween(`md`,`xl`)?`Yes`:`No`),C(5),Me(r.windowDimensionsService.isAtLeast(`lg`)?`Yes`:`No`),C(2),V(`gap`,4),C(3),wn(`resolveResponsiveValue(`,`{ md: 2, xl: 3 }`,`, 1)`),C(),wn(` selects `,r.columns(),` columns. `),C(),V(`columns`,r.columns())(`gap`,3),C(),In(r.previewItems))},dependencies:[DM,IM,AM,OM,CM],styles:[`
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
}`]})};export{_ as Viewport};