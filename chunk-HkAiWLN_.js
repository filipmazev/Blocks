import{A as E$1,Da as wM,Dt as MM,G as H,Hi as p,T as DM,X as He,Xi as q,Z as Hn,_ as CM,bn as Te,ea as qn,h as Be,ka as wr,ki as na,mi as le,t as $,ur as bM,vt as L,wa as v,y as Ca}from"./chunk-CmtaEU9W.js";var N=(o,l)=>l[0];function M(o,l){if(o&1&&Be(0,`bx-tag`,7),o&2){let a=l.$implicit,r=L();le(`text`,a[0]+` · `+a[1]+` px`)(`color`,r.windowDimensionsService.currentBreakpoint()===a[0]?`primary`:`neutral`)(`leadingIcon`,r.windowDimensionsService.currentBreakpoint()===a[0]?`check`:void 0)(`ariaLabel`,a[0]+`: `+a[1]+` pixels`+(r.windowDimensionsService.currentBreakpoint()===a[0]?`, current`:``))(`focusable`,!1)}}function E(o,l){if(o&1&&($(0,`span`,10),Te(1),q()),o&2){let a=l.$implicit;E$1(),He(a)}}var _=class o{windowDimensionsService=p(Ca);breakpointEntries=Object.entries(this.windowDimensionsService.breakpoints);previewItems=[1,2,3,4,5,6];columns=v(()=>this.windowDimensionsService.resolveResponsiveValue({md:2,xl:3},1));static ɵfac=function(a){return new(a||o)};static ɵcmp=H({type:o,selectors:[[`app-viewport`]],decls:60,vars:16,consts:[[3,`gap`],[`minColumnWidth`,`12rem`],[`data-viewport-width`,``,1,`metric`],[1,`metric`],[`data-breakpoint`,``,1,`metric`],[`title`,`Shared breakpoint scale`],[`direction`,`horizontal`,`aria-label`,`Shared breakpoint minimums`,3,`wrap`,`gap`],[3,`text`,`color`,`leadingIcon`,`ariaLabel`,`focusable`],[`title`,`Responsive value`],[3,`columns`,`gap`],[1,`preview-cell`],[`message`,`Viewport signals describe the browser window. Use container-aware layout when a component has less available space.`]],template:function(a,r){a&1&&($(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`)(3,`p`),Te(4,`Viewport width`),q(),$(5,`p`,2),Te(6),$(7,`small`),Te(8,`px`),q()(),$(9,`p`),Te(10,`CSS pixels`),q()(),$(11,`bx-card`)(12,`p`),Te(13,`Viewport height`),q(),$(14,`p`,3),Te(15),$(16,`small`),Te(17,`px`),q()(),$(18,`p`),Te(19,`CSS pixels`),q()(),$(20,`bx-card`)(21,`p`),Te(22,`Current breakpoint`),q(),$(23,`p`,4),Te(24),q(),$(25,`p`),Te(26),q()()(),$(27,`bx-card`,5)(28,`bx-stack`,0)(29,`p`),Te(30,`Resize the window or change browser zoom. The current breakpoint is marked with a check.`),q(),$(31,`bx-stack`,6),Hn(32,M,1,5,`bx-tag`,7,N),q(),$(34,`dl`)(35,`div`)(36,`dt`),Te(37,`Mobile viewport (below md)`),q(),$(38,`dd`),Te(39),q()(),$(40,`div`)(41,`dt`),Te(42,`Between md and xl`),q(),$(43,`dd`),Te(44),q()(),$(45,`div`)(46,`dt`),Te(47,`At least lg`),q(),$(48,`dd`),Te(49),q()()()()(),$(50,`bx-card`,8)(51,`bx-stack`,0)(52,`p`)(53,`code`),Te(54),q(),Te(55),q(),$(56,`bx-grid`,9),Hn(57,E,2,1,`span`,10,na),q()()(),Be(59,`bx-alert`,11),q()),a&2&&(le(`gap`,5),E$1(6),wr(``,r.windowDimensionsService.dimensions().width,` `),E$1(9),wr(``,r.windowDimensionsService.dimensions().height,` `),E$1(9),He(r.windowDimensionsService.currentBreakpoint()??`SSR`),E$1(2),wr(`Minimum `,r.windowDimensionsService.currentBreakpointValue()??`Unavailable`,` px`),E$1(2),le(`gap`,4),E$1(3),le(`wrap`,!0)(`gap`,2),E$1(),qn(r.breakpointEntries),E$1(7),He(r.windowDimensionsService.isMobile()?`Yes`:`No`),E$1(5),He(r.windowDimensionsService.isBetween(`md`,`xl`)?`Yes`:`No`),E$1(5),He(r.windowDimensionsService.isAtLeast(`lg`)?`Yes`:`No`),E$1(2),le(`gap`,4),E$1(3),wr(`resolveResponsiveValue(`,`{ md: 2, xl: 3 }`,`, 1)`),E$1(),wr(` selects `,r.columns(),` columns. `),E$1(),le(`columns`,r.columns())(`gap`,3),E$1(),qn(r.previewItems))},dependencies:[wM,CM,DM,MM,bM],styles:[`
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