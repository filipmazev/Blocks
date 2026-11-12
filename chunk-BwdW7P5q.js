import{D,F as E,Ft as La,Ha as sT,Nr as be,To as y,Tr as an,Vn as W,Xn as X,Yi as lT,Yn as Wt,_a as nl,ai as fT,do as w,gi as g,ii as f,l as A,pa as nT,po as we,s as $t,wa as pT}from"./chunk-DzvvGvUq.js";var N=(o,l)=>l[0];function M(o,l){if(o&1&&we(0,`bx-tag`,7),o&2){let a=l.$implicit,r=w();A(`text`,a[0]+` · `+a[1]+` px`)(`color`,r.windowDimensionsService.currentBreakpoint()===a[0]?`primary`:`neutral`)(`leadingIcon`,r.windowDimensionsService.currentBreakpoint()===a[0]?`check`:void 0)(`ariaLabel`,a[0]+`: `+a[1]+` pixels`+(r.windowDimensionsService.currentBreakpoint()===a[0]?`, current`:``))(`focusable`,!1)}}function O(o,l){if(o&1&&(E(0,`span`,10),X(1),D()),o&2){let a=l.$implicit;y(),be(a)}}var k=class o{windowDimensionsService=f(nl);breakpointEntries=Object.entries(this.windowDimensionsService.breakpoints);previewItems=[1,2,3,4,5,6];columns=g(()=>this.windowDimensionsService.resolveResponsiveValue({md:2,xl:3},1));static ɵfac=function(a){return new(a||o)};static ɵcmp=W({type:o,selectors:[[`app-viewport`]],decls:60,vars:16,consts:[[3,`gap`],[`minColumnWidth`,`12rem`],[`data-viewport-width`,``,1,`metric`],[1,`metric`],[`data-breakpoint`,``,1,`metric`],[`title`,`Shared breakpoint scale`],[`direction`,`horizontal`,`aria-label`,`Shared breakpoint minimums`,3,`wrap`,`gap`],[3,`text`,`color`,`leadingIcon`,`ariaLabel`,`focusable`],[`title`,`Responsive value`],[3,`columns`,`gap`],[1,`preview-cell`],[`message`,`Viewport signals describe the browser window. Use container-aware layout when a component has less available space.`]],template:function(a,r){a&1&&(E(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`)(3,`p`),X(4,`Viewport width`),D(),E(5,`p`,2),X(6),E(7,`small`),X(8,`px`),D()(),E(9,`p`),X(10,`CSS pixels`),D()(),E(11,`bx-card`)(12,`p`),X(13,`Viewport height`),D(),E(14,`p`,3),X(15),E(16,`small`),X(17,`px`),D()(),E(18,`p`),X(19,`CSS pixels`),D()(),E(20,`bx-card`)(21,`p`),X(22,`Current breakpoint`),D(),E(23,`p`,4),X(24),D(),E(25,`p`),X(26),D()()(),E(27,`bx-card`,5)(28,`bx-stack`,0)(29,`p`),X(30,`Resize the window or change browser zoom. The current breakpoint is marked with a check.`),D(),E(31,`bx-stack`,6),$t(32,M,1,5,`bx-tag`,7,N),D(),E(34,`dl`)(35,`div`)(36,`dt`),X(37,`Mobile viewport (below md)`),D(),E(38,`dd`),X(39),D()(),E(40,`div`)(41,`dt`),X(42,`Between md and xl`),D(),E(43,`dd`),X(44),D()(),E(45,`div`)(46,`dt`),X(47,`At least lg`),D(),E(48,`dd`),X(49),D()()()()(),E(50,`bx-card`,8)(51,`bx-stack`,0)(52,`p`)(53,`code`),X(54),D(),X(55),D(),E(56,`bx-grid`,9),$t(57,O,2,1,`span`,10,La),D()()(),we(59,`bx-alert`,11),D()),a&2&&(A(`gap`,5),y(6),an(``,r.windowDimensionsService.dimensions().width,` `),y(9),an(``,r.windowDimensionsService.dimensions().height,` `),y(9),be(r.windowDimensionsService.currentBreakpoint()??`SSR`),y(2),an(`Minimum `,r.windowDimensionsService.currentBreakpointValue()??`Unavailable`,` px`),y(2),A(`gap`,4),y(3),A(`wrap`,!0)(`gap`,2),y(),Wt(r.breakpointEntries),y(7),be(r.windowDimensionsService.isMobile()?`Yes`:`No`),y(5),be(r.windowDimensionsService.isBetween(`md`,`xl`)?`Yes`:`No`),y(5),be(r.windowDimensionsService.isAtLeast(`lg`)?`Yes`:`No`),y(2),A(`gap`,4),y(3),an(`resolveResponsiveValue(`,`{ md: 2, xl: 3 }`,`, 1)`),y(),an(` selects `,r.columns(),` columns. `),y(),A(`columns`,r.columns())(`gap`,3),y(),Wt(r.previewItems))},dependencies:[sT,lT,pT,fT,nT],styles:[`
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
}`]})};export{k as Viewport};