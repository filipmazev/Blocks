import{$r as je,Gr as iM,M as F,Mr as gr,Ri as sM,S as D$1,Ti as pM,Vr as hs,Xr as j,bn as Wa,hn as Ve,in as Te,ka as zn,on as U,qi as tM,qn as ae,ra as v,ti as jn,un as V,ur as dM,wi as p}from"./chunk-B79cUMdP.js";var M=(o,l)=>l[0];function E(o,l){if(o&1&&Ve(0,`bx-tag`,7),o&2){let a=l.$implicit,r=F();ae(`text`,a[0]+` · `+a[1]+` px`)(`color`,r.windowDimensionsService.currentBreakpoint()===a[0]?`primary`:`neutral`)(`leadingIcon`,r.windowDimensionsService.currentBreakpoint()===a[0]?`check`:void 0)(`ariaLabel`,a[0]+`: `+a[1]+` pixels`+(r.windowDimensionsService.currentBreakpoint()===a[0]?`, current`:``))(`focusable`,!1)}}function D(o,l){if(o&1&&(j(0,`span`,10),Te(1),U()),o&2){let a=l.$implicit;D$1(),je(a)}}var _=class o{windowDimensionsService=p(hs);breakpointEntries=Object.entries(this.windowDimensionsService.breakpoints);previewItems=[1,2,3,4,5,6];columns=v(()=>this.windowDimensionsService.resolveResponsiveValue({md:2,xl:3},1));static ɵfac=function(a){return new(a||o)};static ɵcmp=V({type:o,selectors:[[`app-viewport`]],decls:60,vars:16,consts:[[3,`gap`],[`minColumnWidth`,`12rem`],[`data-viewport-width`,``,1,`metric`],[1,`metric`],[`data-breakpoint`,``,1,`metric`],[`title`,`Shared breakpoint scale`],[`direction`,`horizontal`,`aria-label`,`Shared breakpoint minimums`,3,`wrap`,`gap`],[3,`text`,`color`,`leadingIcon`,`ariaLabel`,`focusable`],[`title`,`Responsive value`],[3,`columns`,`gap`],[1,`preview-cell`],[`message`,`Viewport signals describe the browser window. Use container-aware layout when a component has less available space.`]],template:function(a,r){a&1&&(j(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`)(3,`p`),Te(4,`Viewport width`),U(),j(5,`p`,2),Te(6),j(7,`small`),Te(8,`px`),U()(),j(9,`p`),Te(10,`CSS pixels`),U()(),j(11,`bx-card`)(12,`p`),Te(13,`Viewport height`),U(),j(14,`p`,3),Te(15),j(16,`small`),Te(17,`px`),U()(),j(18,`p`),Te(19,`CSS pixels`),U()(),j(20,`bx-card`)(21,`p`),Te(22,`Current breakpoint`),U(),j(23,`p`,4),Te(24),U(),j(25,`p`),Te(26),U()()(),j(27,`bx-card`,5)(28,`bx-stack`,0)(29,`p`),Te(30,`Resize the window or change browser zoom. The current breakpoint is marked with a check.`),U(),j(31,`bx-stack`,6),jn(32,E,1,5,`bx-tag`,7,M),U(),j(34,`dl`)(35,`div`)(36,`dt`),Te(37,`Mobile viewport (below md)`),U(),j(38,`dd`),Te(39),U()(),j(40,`div`)(41,`dt`),Te(42,`Between md and xl`),U(),j(43,`dd`),Te(44),U()(),j(45,`div`)(46,`dt`),Te(47,`At least lg`),U(),j(48,`dd`),Te(49),U()()()()(),j(50,`bx-card`,8)(51,`bx-stack`,0)(52,`p`)(53,`code`),Te(54),U(),Te(55),U(),j(56,`bx-grid`,9),jn(57,D,2,1,`span`,10,Wa),U()()(),Ve(59,`bx-alert`,11),U()),a&2&&(ae(`gap`,5),D$1(6),gr(``,r.windowDimensionsService.dimensions().width,` `),D$1(9),gr(``,r.windowDimensionsService.dimensions().height,` `),D$1(9),je(r.windowDimensionsService.currentBreakpoint()??`SSR`),D$1(2),gr(`Minimum `,r.windowDimensionsService.currentBreakpointValue()??`Unavailable`,` px`),D$1(2),ae(`gap`,4),D$1(3),ae(`wrap`,!0)(`gap`,2),D$1(),zn(r.breakpointEntries),D$1(7),je(r.windowDimensionsService.isMobile()?`Yes`:`No`),D$1(5),je(r.windowDimensionsService.isBetween(`md`,`xl`)?`Yes`:`No`),D$1(5),je(r.windowDimensionsService.isAtLeast(`lg`)?`Yes`:`No`),D$1(2),ae(`gap`,4),D$1(3),gr(`resolveResponsiveValue(`,`{ md: 2, xl: 3 }`,`, 1)`),D$1(),gr(` selects `,r.columns(),` columns. `),D$1(),ae(`columns`,r.columns())(`gap`,3),D$1(),zn(r.previewItems))},dependencies:[iM,sM,dM,pM,tM],styles:[`
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
}`]})};export{_ as Viewport};