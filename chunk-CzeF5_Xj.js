import{Aa as wM,Dt as MM,Na as wr,T as DM,Ui as p,Z as Hn,Zi as q,_ as CM,dr as b,dt as K,ea as qe,fr as bM,gi as le,jn as Ve,mn as Sa,na as qn,sa as ra,t as $,vt as L,w as D,zt as Ne}from"./chunk-CwZ5dsYL.js";var N=(o,l)=>l[0];function M(o,l){if(o&1&&Ve(0,`bx-tag`,7),o&2){let a=l.$implicit,r=L();le(`text`,a[0]+` · `+a[1]+` px`)(`color`,r.windowDimensionsService.currentBreakpoint()===a[0]?`primary`:`neutral`)(`leadingIcon`,r.windowDimensionsService.currentBreakpoint()===a[0]?`check`:void 0)(`ariaLabel`,a[0]+`: `+a[1]+` pixels`+(r.windowDimensionsService.currentBreakpoint()===a[0]?`, current`:``))(`focusable`,!1)}}function E(o,l){if(o&1&&(K(0,`span`,10),Ne(1),$()),o&2){let a=l.$implicit;D(),qe(a)}}var _=class o{windowDimensionsService=p(Sa);breakpointEntries=Object.entries(this.windowDimensionsService.breakpoints);previewItems=[1,2,3,4,5,6];columns=b(()=>this.windowDimensionsService.resolveResponsiveValue({md:2,xl:3},1));static ɵfac=function(a){return new(a||o)};static ɵcmp=q({type:o,selectors:[[`app-viewport`]],decls:60,vars:16,consts:[[3,`gap`],[`minColumnWidth`,`12rem`],[`data-viewport-width`,``,1,`metric`],[1,`metric`],[`data-breakpoint`,``,1,`metric`],[`title`,`Shared breakpoint scale`],[`direction`,`horizontal`,`aria-label`,`Shared breakpoint minimums`,3,`wrap`,`gap`],[3,`text`,`color`,`leadingIcon`,`ariaLabel`,`focusable`],[`title`,`Responsive value`],[3,`columns`,`gap`],[1,`preview-cell`],[`message`,`Viewport signals describe the browser window. Use container-aware layout when a component has less available space.`]],template:function(a,r){a&1&&(K(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`)(3,`p`),Ne(4,`Viewport width`),$(),K(5,`p`,2),Ne(6),K(7,`small`),Ne(8,`px`),$()(),K(9,`p`),Ne(10,`CSS pixels`),$()(),K(11,`bx-card`)(12,`p`),Ne(13,`Viewport height`),$(),K(14,`p`,3),Ne(15),K(16,`small`),Ne(17,`px`),$()(),K(18,`p`),Ne(19,`CSS pixels`),$()(),K(20,`bx-card`)(21,`p`),Ne(22,`Current breakpoint`),$(),K(23,`p`,4),Ne(24),$(),K(25,`p`),Ne(26),$()()(),K(27,`bx-card`,5)(28,`bx-stack`,0)(29,`p`),Ne(30,`Resize the window or change browser zoom. The current breakpoint is marked with a check.`),$(),K(31,`bx-stack`,6),Hn(32,M,1,5,`bx-tag`,7,N),$(),K(34,`dl`)(35,`div`)(36,`dt`),Ne(37,`Mobile viewport (below md)`),$(),K(38,`dd`),Ne(39),$()(),K(40,`div`)(41,`dt`),Ne(42,`Between md and xl`),$(),K(43,`dd`),Ne(44),$()(),K(45,`div`)(46,`dt`),Ne(47,`At least lg`),$(),K(48,`dd`),Ne(49),$()()()()(),K(50,`bx-card`,8)(51,`bx-stack`,0)(52,`p`)(53,`code`),Ne(54),$(),Ne(55),$(),K(56,`bx-grid`,9),Hn(57,E,2,1,`span`,10,ra),$()()(),Ve(59,`bx-alert`,11),$()),a&2&&(le(`gap`,5),D(6),wr(``,r.windowDimensionsService.dimensions().width,` `),D(9),wr(``,r.windowDimensionsService.dimensions().height,` `),D(9),qe(r.windowDimensionsService.currentBreakpoint()??`SSR`),D(2),wr(`Minimum `,r.windowDimensionsService.currentBreakpointValue()??`Unavailable`,` px`),D(2),le(`gap`,4),D(3),le(`wrap`,!0)(`gap`,2),D(),qn(r.breakpointEntries),D(7),qe(r.windowDimensionsService.isMobile()?`Yes`:`No`),D(5),qe(r.windowDimensionsService.isBetween(`md`,`xl`)?`Yes`:`No`),D(5),qe(r.windowDimensionsService.isAtLeast(`lg`)?`Yes`:`No`),D(2),le(`gap`,4),D(3),wr(`resolveResponsiveValue(`,`{ md: 2, xl: 3 }`,`, 1)`),D(),wr(` selects `,r.columns(),` columns. `),D(),le(`columns`,r.columns())(`gap`,3),D(),qn(r.previewItems))},dependencies:[wM,CM,DM,MM,bM],styles:[`
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