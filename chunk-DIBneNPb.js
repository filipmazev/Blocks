import{G as js,O as Ys,h as Ks,n as $s,o as Bs}from"./chunk-DyZGtlM9.js";import{Cr as b,Dn as U,Gt as Nd,K as Fr,Or as bo,Ua as sk,Va as sb,Xa as td,ao as ub,c as $o,et as Go,ia as nb,ja as qs,mr as aA,pt as IT,u as $s$1}from"./chunk-DflWScik.js";var M=(o,l)=>l[0];function N(o,l){if(o&1&&td(0,`bx-tag`,7),o&2){let a=l.$implicit,r=$s$1();$o(`text`,a[0]+` · `+a[1]+` px`)(`color`,r.windowDimensionsService.currentBreakpoint()===a[0]?`primary`:`neutral`)(`leadingIcon`,r.windowDimensionsService.currentBreakpoint()===a[0]?`check`:void 0)(`ariaLabel`,a[0]+`: `+a[1]+` pixels`+(r.windowDimensionsService.currentBreakpoint()===a[0]?`, current`:``))(`focusable`,!1)}}function O(o,l){if(o&1&&(bo(0,`span`,10),aA(1),Go()),o&2){let a=l.$implicit;qs(),sk(a)}}var k=class o{windowDimensionsService=b(Nd);breakpointEntries=Object.entries(this.windowDimensionsService.breakpoints);previewItems=[1,2,3,4,5,6];columns=U(()=>this.windowDimensionsService.resolveResponsiveValue({md:2,xl:3},1));static ɵfac=function(a){return new(a||o)};static ɵcmp=Fr({type:o,selectors:[[`app-viewport`]],decls:60,vars:16,consts:[[3,`gap`],[`minColumnWidth`,`12rem`],[`data-viewport-width`,``,1,`metric`],[1,`metric`],[`data-breakpoint`,``,1,`metric`],[`title`,`Shared breakpoint scale`],[`direction`,`horizontal`,`aria-label`,`Shared breakpoint minimums`,3,`wrap`,`gap`],[3,`text`,`color`,`leadingIcon`,`ariaLabel`,`focusable`],[`title`,`Responsive value`],[3,`columns`,`gap`],[1,`preview-cell`],[`message`,`Viewport signals describe the browser window. Use container-aware layout when a component has less available space.`]],template:function(a,r){a&1&&(bo(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`)(3,`p`),aA(4,`Viewport width`),Go(),bo(5,`p`,2),aA(6),bo(7,`small`),aA(8,`px`),Go()(),bo(9,`p`),aA(10,`CSS pixels`),Go()(),bo(11,`bx-card`)(12,`p`),aA(13,`Viewport height`),Go(),bo(14,`p`,3),aA(15),bo(16,`small`),aA(17,`px`),Go()(),bo(18,`p`),aA(19,`CSS pixels`),Go()(),bo(20,`bx-card`)(21,`p`),aA(22,`Current breakpoint`),Go(),bo(23,`p`,4),aA(24),Go(),bo(25,`p`),aA(26),Go()()(),bo(27,`bx-card`,5)(28,`bx-stack`,0)(29,`p`),aA(30,`Resize the window or change browser zoom. The current breakpoint is marked with a check.`),Go(),bo(31,`bx-stack`,6),nb(32,N,1,5,`bx-tag`,7,M),Go(),bo(34,`dl`)(35,`div`)(36,`dt`),aA(37,`Mobile viewport (below md)`),Go(),bo(38,`dd`),aA(39),Go()(),bo(40,`div`)(41,`dt`),aA(42,`Between md and xl`),Go(),bo(43,`dd`),aA(44),Go()(),bo(45,`div`)(46,`dt`),aA(47,`At least lg`),Go(),bo(48,`dd`),aA(49),Go()()()()(),bo(50,`bx-card`,8)(51,`bx-stack`,0)(52,`p`)(53,`code`),aA(54),Go(),aA(55),Go(),bo(56,`bx-grid`,9),nb(57,O,2,1,`span`,10,IT),Go()()(),td(59,`bx-alert`,11),Go()),a&2&&($o(`gap`,5),qs(6),ub(``,r.windowDimensionsService.dimensions().width,` `),qs(9),ub(``,r.windowDimensionsService.dimensions().height,` `),qs(9),sk(r.windowDimensionsService.currentBreakpoint()??`SSR`),qs(2),ub(`Minimum `,r.windowDimensionsService.currentBreakpointValue()??`Unavailable`,` px`),qs(2),$o(`gap`,4),qs(3),$o(`wrap`,!0)(`gap`,2),qs(),sb(r.breakpointEntries),qs(7),sk(r.windowDimensionsService.isMobile()?`Yes`:`No`),qs(5),sk(r.windowDimensionsService.isBetween(`md`,`xl`)?`Yes`:`No`),qs(5),sk(r.windowDimensionsService.isAtLeast(`lg`)?`Yes`:`No`),qs(2),$o(`gap`,4),qs(3),ub(`resolveResponsiveValue(`,`{ md: 2, xl: 3 }`,`, 1)`),qs(),ub(` selects `,r.columns(),` columns. `),qs(),$o(`columns`,r.columns())(`gap`,3),qs(),sb(r.previewItems))},dependencies:[js,$s,Ks,Ys,Bs],styles:[`
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
}`]})};export{k as Viewport};