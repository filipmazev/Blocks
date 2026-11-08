import{$i as v,Bt as P,Cr as es,Gr as je,N as Fe,Pa as zn,Si as p,Ti as pM,W as H,Zr as k,hn as U,ii as lM,jr as hM,ka as z,na as vM,pa as ws,pi as mr,qr as jn,un as Te,xa as yM,yi as oe}from"./chunk-Dt37D5SH.js";var M=(o,l)=>l[0];function E(o,l){if(o&1&&Fe(0,`bx-tag`,7),o&2){let a=l.$implicit,r=P();oe(`text`,a[0]+` · `+a[1]+` px`)(`color`,r.windowDimensionsService.currentBreakpoint()===a[0]?`primary`:`neutral`)(`leadingIcon`,r.windowDimensionsService.currentBreakpoint()===a[0]?`check`:void 0)(`ariaLabel`,a[0]+`: `+a[1]+` pixels`+(r.windowDimensionsService.currentBreakpoint()===a[0]?`, current`:``))(`focusable`,!1)}}function D(o,l){if(o&1&&(U(0,`span`,10),Te(1),H()),o&2){let a=l.$implicit;k(),je(a)}}var _=class o{windowDimensionsService=p(ws);breakpointEntries=Object.entries(this.windowDimensionsService.breakpoints);previewItems=[1,2,3,4,5,6];columns=v(()=>this.windowDimensionsService.resolveResponsiveValue({md:2,xl:3},1));static ɵfac=function(a){return new(a||o)};static ɵcmp=z({type:o,selectors:[[`app-viewport`]],decls:60,vars:16,consts:[[3,`gap`],[`minColumnWidth`,`12rem`],[`data-viewport-width`,``,1,`metric`],[1,`metric`],[`data-breakpoint`,``,1,`metric`],[`title`,`Shared breakpoint scale`],[`direction`,`horizontal`,`aria-label`,`Shared breakpoint minimums`,3,`wrap`,`gap`],[3,`text`,`color`,`leadingIcon`,`ariaLabel`,`focusable`],[`title`,`Responsive value`],[3,`columns`,`gap`],[1,`preview-cell`],[`message`,`Viewport signals describe the browser window. Use container-aware layout when a component has less available space.`]],template:function(a,r){a&1&&(U(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`)(3,`p`),Te(4,`Viewport width`),H(),U(5,`p`,2),Te(6),U(7,`small`),Te(8,`px`),H()(),U(9,`p`),Te(10,`CSS pixels`),H()(),U(11,`bx-card`)(12,`p`),Te(13,`Viewport height`),H(),U(14,`p`,3),Te(15),U(16,`small`),Te(17,`px`),H()(),U(18,`p`),Te(19,`CSS pixels`),H()(),U(20,`bx-card`)(21,`p`),Te(22,`Current breakpoint`),H(),U(23,`p`,4),Te(24),H(),U(25,`p`),Te(26),H()()(),U(27,`bx-card`,5)(28,`bx-stack`,0)(29,`p`),Te(30,`Resize the window or change browser zoom. The current breakpoint is marked with a check.`),H(),U(31,`bx-stack`,6),jn(32,E,1,5,`bx-tag`,7,M),H(),U(34,`dl`)(35,`div`)(36,`dt`),Te(37,`Mobile viewport (below md)`),H(),U(38,`dd`),Te(39),H()(),U(40,`div`)(41,`dt`),Te(42,`Between md and xl`),H(),U(43,`dd`),Te(44),H()(),U(45,`div`)(46,`dt`),Te(47,`At least lg`),H(),U(48,`dd`),Te(49),H()()()()(),U(50,`bx-card`,8)(51,`bx-stack`,0)(52,`p`)(53,`code`),Te(54),H(),Te(55),H(),U(56,`bx-grid`,9),jn(57,D,2,1,`span`,10,es),H()()(),Fe(59,`bx-alert`,11),H()),a&2&&(oe(`gap`,5),k(6),mr(``,r.windowDimensionsService.dimensions().width,` `),k(9),mr(``,r.windowDimensionsService.dimensions().height,` `),k(9),je(r.windowDimensionsService.currentBreakpoint()??`SSR`),k(2),mr(`Minimum `,r.windowDimensionsService.currentBreakpointValue()??`Unavailable`,` px`),k(2),oe(`gap`,4),k(3),oe(`wrap`,!0)(`gap`,2),k(),zn(r.breakpointEntries),k(7),je(r.windowDimensionsService.isMobile()?`Yes`:`No`),k(5),je(r.windowDimensionsService.isBetween(`md`,`xl`)?`Yes`:`No`),k(5),je(r.windowDimensionsService.isAtLeast(`lg`)?`Yes`:`No`),k(2),oe(`gap`,4),k(3),mr(`resolveResponsiveValue(`,`{ md: 2, xl: 3 }`,`, 1)`),k(),mr(` selects `,r.columns(),` columns. `),k(),oe(`columns`,r.columns())(`gap`,3),k(),zn(r.previewItems))},dependencies:[pM,hM,vM,yM,lM],styles:[`
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