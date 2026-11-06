import{t as e}from"./chunk-DS2-hL1-.js";import{v as Ni}from"./main-2GBJQHUZ.js";import{r as Z}from"./chunk-DUDY88j1.js";import{Ai as tt,Cn as Xw,Di as te,Dn as Yi,F as G,Fn as _p,It as Pp,Jn as cb,Jt as Se,Lt as Pr,Oi as ti,Ot as On,Q as JM,Rr as kt,Vi as wr,ar as ee,ci as p,ea as ye,g as Cn,hn as Wa,in as U$1,jr as k,kn as ZM,kt as Op,lr as fn,lt as M,oi as oe,p as C0,rt as Kn,tt as KM,vt as Ne,wr as j,yi as rr}from"./chunk-CfQ5k3AW.js";var U=[`overlayTemplate`];function V(p,s){if(p&1&&(te(0,`bx-card`,11)(1,`div`,12)(2,`bx-stack`,1)(3,`strong`),Se(4,`Positioned with Core utilities`),oe(),te(5,`p`),Se(6),oe()()()()),p&2){let e=U$1();k(),ye(`id`,e.overlayId),k(),ye(`gap`,3),k(4),rr(`This surface follows its origin and inherits the active Blocks theme. Preferred placement: `,e.placement(),`.`)}}var Q=class p$1{bxOverlayPositionService=p(Kn);destroyRef=p(ee);overlay=p(Cn);viewContainerRef=p(kt);windowDimensionsService=p(Pp);overlayTemplate=Wa(`overlayTemplate`);placements=e;overlayId=`utilities-overlay-`+ti();overlayOpen=M(!1);placement=M(`bottom`);overlayRef;disconnectOrigin;disconnectTheme;constructor(){this.destroyRef.onDestroy(()=>this.closeOverlay())}setPlacement(s){this.closeOverlay(),this.placement.set(s??`bottom`)}toggleOverlay(s){if(this.overlayOpen()){this.closeOverlay();return}let e=s.currentTarget,n=this.overlayTemplate();if(!(e instanceof HTMLElement)||!n||!this.windowDimensionsService.isBrowser||!C0(e))return;let r=this.overlay.create({positionStrategy:this.bxOverlayPositionService.getElementStrategy(e,this.placement()),scrollStrategy:this.overlay.scrollStrategies.noop()});this.overlayRef=r,this.overlayOpen.set(!0),e.focus({preventScroll:!0}),r.attach(new On(n,this.viewContainerRef)).detectChanges(),this.disconnectTheme=Pr(e,r.overlayElement),this.disconnectOrigin=Yi(r,e,{onOriginHidden:()=>this.closeOverlay()}),r.outsidePointerEvents().pipe(Op(this.destroyRef)).subscribe(d=>{d.target instanceof Node&&e.contains(d.target)||this.closeOverlay()}),r.keydownEvents().pipe(Op(this.destroyRef)).subscribe(d=>{d.key===`Escape`&&(d.preventDefault(),this.closeOverlay())})}closeOverlay(){this.disconnectOrigin?.(),this.disconnectTheme?.(),this.overlayRef?.dispose(),this.disconnectOrigin=void 0,this.disconnectTheme=void 0,this.overlayRef=void 0,this.overlayOpen.set(!1)}static ɵfac=function(e){return new(e||p$1)};static ɵcmp=j({type:p$1,selectors:[[`app-overlay-positioning`]],viewQuery:function(e,n){e&1&&wr(n.overlayTemplate,U,5),e&2&&fn()},decls:21,vars:10,consts:[[`overlayTemplate`,``],[3,`gap`],[`title`,`Connected overlay`],[`direction`,`responsive`,`align`,`center`,3,`gap`],[`label`,`Preferred placement`,3,`valueChange`,`options`,`value`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`blur`],[`title`,`Shared positioning and theme inheritance`,`message`,`The preview uses the public Core positioning, origin tracking, and theme helpers. Change the playground appearance while it is open to see theme inheritance.`],[`direction`,`horizontal`,3,`wrap`,`gap`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/popover`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/dropdown`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/tooltip-directive`],[1,`utility-overlay`],[`role`,`tooltip`,3,`id`]],template:function(e,n){e&1&&(te(0,`bx-stack`,1)(1,`bx-card`,2)(2,`bx-stack`,1)(3,`p`),Se(4,`Choose a preferred side, open the preview, then scroll or resize. The position strategy falls back when space is limited.`),oe(),te(5,`bx-stack`,3)(6,`bx-select`,4),Ne(`valueChange`,function(m){return n.setPlacement(m)}),oe(),te(7,`button`,5),Ne(`click`,function(m){return n.toggleOverlay(m)})(`blur`,function(){return n.closeOverlay()}),Se(8),oe()(),te(9,`p`),Se(10,`Focus stays on the trigger. Escape, moving focus away, an outside click, or scrolling the origin out of view closes the preview.`),oe()()(),tt(11,`bx-alert`,6),te(12,`bx-stack`,7)(13,`a`,8),Se(14,`Popover`),oe(),te(15,`a`,9),Se(16,`Dropdown`),oe(),te(17,`a`,10),Se(18,`Tooltip`),oe()()(),Xw(19,V,7,3,`ng-template`,null,0,cb)),e&2&&(ye(`gap`,5),k(2),ye(`gap`,4),k(3),ye(`gap`,4),k(),ye(`options`,n.placements)(`value`,n.placement()),k(),G(`aria-expanded`,n.overlayOpen())(`aria-describedby`,n.overlayOpen()?n.overlayId:null),k(),rr(` `,n.overlayOpen()?`Hide position preview`:`Show position preview`,` `),k(4),ye(`wrap`,!0)(`gap`,2))},dependencies:[KM,Z,ZM,_p,Ni,JM],styles:[`
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
}`]})};export{Q as OverlayPositioning};