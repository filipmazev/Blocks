import{Ai as tt,Bt as QM,Di as te,It as Pp,Jt as Se,Q as JM,Qi as y,Xi as xr,ci as p,ea as ye,fi as qM,in as U,jr as k,kn as ZM,l as Be,na as yr,oi as oe,pi as qa,tt as KM,wr as j,yi as rr}from"./chunk-CfQ5k3AW.js";var M=(o,l)=>l[0];function E(o,l){if(o&1&&tt(0,`bx-tag`,7),o&2){let a=l.$implicit,r=U();ye(`text`,a[0]+` · `+a[1]+` px`)(`color`,r.windowDimensionsService.currentBreakpoint()===a[0]?`primary`:`neutral`)(`leadingIcon`,r.windowDimensionsService.currentBreakpoint()===a[0]?`check`:void 0)(`ariaLabel`,a[0]+`: `+a[1]+` pixels`+(r.windowDimensionsService.currentBreakpoint()===a[0]?`, current`:``))(`focusable`,!1)}}function D(o,l){if(o&1&&(te(0,`span`,10),Se(1),oe()),o&2){let a=l.$implicit;k(),Be(a)}}var _=class o{windowDimensionsService=p(Pp);breakpointEntries=Object.entries(this.windowDimensionsService.breakpoints);previewItems=[1,2,3,4,5,6];columns=y(()=>this.windowDimensionsService.resolveResponsiveValue({md:2,xl:3},1));static ɵfac=function(a){return new(a||o)};static ɵcmp=j({type:o,selectors:[[`app-viewport`]],decls:60,vars:16,consts:[[3,`gap`],[`minColumnWidth`,`12rem`],[`data-viewport-width`,``,1,`metric`],[1,`metric`],[`data-breakpoint`,``,1,`metric`],[`title`,`Shared breakpoint scale`],[`direction`,`horizontal`,`aria-label`,`Shared breakpoint minimums`,3,`wrap`,`gap`],[3,`text`,`color`,`leadingIcon`,`ariaLabel`,`focusable`],[`title`,`Responsive value`],[3,`columns`,`gap`],[1,`preview-cell`],[`message`,`Viewport signals describe the browser window. Use container-aware layout when a component has less available space.`]],template:function(a,r){a&1&&(te(0,`bx-stack`,0)(1,`bx-grid`,1)(2,`bx-card`)(3,`p`),Se(4,`Viewport width`),oe(),te(5,`p`,2),Se(6),te(7,`small`),Se(8,`px`),oe()(),te(9,`p`),Se(10,`CSS pixels`),oe()(),te(11,`bx-card`)(12,`p`),Se(13,`Viewport height`),oe(),te(14,`p`,3),Se(15),te(16,`small`),Se(17,`px`),oe()(),te(18,`p`),Se(19,`CSS pixels`),oe()(),te(20,`bx-card`)(21,`p`),Se(22,`Current breakpoint`),oe(),te(23,`p`,4),Se(24),oe(),te(25,`p`),Se(26),oe()()(),te(27,`bx-card`,5)(28,`bx-stack`,0)(29,`p`),Se(30,`Resize the window or change browser zoom. The current breakpoint is marked with a check.`),oe(),te(31,`bx-stack`,6),yr(32,E,1,5,`bx-tag`,7,M),oe(),te(34,`dl`)(35,`div`)(36,`dt`),Se(37,`Mobile viewport (below md)`),oe(),te(38,`dd`),Se(39),oe()(),te(40,`div`)(41,`dt`),Se(42,`Between md and xl`),oe(),te(43,`dd`),Se(44),oe()(),te(45,`div`)(46,`dt`),Se(47,`At least lg`),oe(),te(48,`dd`),Se(49),oe()()()()(),te(50,`bx-card`,8)(51,`bx-stack`,0)(52,`p`)(53,`code`),Se(54),oe(),Se(55),oe(),te(56,`bx-grid`,9),yr(57,D,2,1,`span`,10,qa),oe()()(),tt(59,`bx-alert`,11),oe()),a&2&&(ye(`gap`,5),k(6),rr(``,r.windowDimensionsService.dimensions().width,` `),k(9),rr(``,r.windowDimensionsService.dimensions().height,` `),k(9),Be(r.windowDimensionsService.currentBreakpoint()??`SSR`),k(2),rr(`Minimum `,r.windowDimensionsService.currentBreakpointValue()??`Unavailable`,` px`),k(2),ye(`gap`,4),k(3),ye(`wrap`,!0)(`gap`,2),k(),xr(r.breakpointEntries),k(7),Be(r.windowDimensionsService.isMobile()?`Yes`:`No`),k(5),Be(r.windowDimensionsService.isBetween(`md`,`xl`)?`Yes`:`No`),k(5),Be(r.windowDimensionsService.isAtLeast(`lg`)?`Yes`:`No`),k(2),ye(`gap`,4),k(3),rr(`resolveResponsiveValue(`,`{ md: 2, xl: 3 }`,`, 1)`),k(),rr(` selects `,r.columns(),` columns. `),k(),ye(`columns`,r.columns())(`gap`,3),k(),xr(r.previewItems))},dependencies:[KM,ZM,QM,JM,qM],styles:[`
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