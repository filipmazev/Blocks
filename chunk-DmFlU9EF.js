import{t as e}from"./chunk-DS2-hL1-.js";import{v as Qn,w as ki}from"./main-U2OBHRR6.js";import{r as Z}from"./chunk-Ugx93LBR.js";import{$t as Te,An as Z$1,Bn as aS,C as Do,Dr as gr,Fi as rp,Hn as ae,Nn as _,Oi as qn,Pr as hs,Q as In,Ri as sM,Rr as iM,St as Mt,Ui as sr,Ur as j,Ut as Rt,W as H,an as V$1,b as D,bn as Wr,ga as yb,hi as or,j as F,jt as Op,ln as Ve,mr as er,nn as U,ra as ve,tn as Ty,vi as p,yi as pM,yt as Mn}from"./chunk-DBDMpaTC.js";var V=[`overlayTemplate`];function Y(d,l){if(d&1&&(j(0,`bx-card`,12)(1,`div`,13)(2,`bx-stack`,1)(3,`strong`),Te(4,`Positioned with Core utilities`),U(),j(5,`p`),Te(6),U()()()()),d&2){let e=F();D(),ae(`id`,e.overlayId),D(),ae(`gap`,3),D(4),gr(`This surface follows its origin and inherits the active Blocks theme. Preferred placement: `,e.placement(),`.`)}}var Q=class d{bxOverlayPositionService=p(or);destroyRef=p(Z$1);overlay=p(In);viewContainerRef=p(Rt);windowDimensionsService=p(hs);overlayTemplate=er(`overlayTemplate`);placements=e;overlayId=`utilities-overlay-`+Wr();overlayOpen=_(!1);useTopLayer=_(!1);placement=_(`bottom`);overlayRef;disconnectOrigin;disconnectTheme;constructor(){this.destroyRef.onDestroy(()=>this.closeOverlay())}setPlacement(l){this.closeOverlay(),this.placement.set(l??`bottom`)}setTopLayer(l){this.closeOverlay(),this.useTopLayer.set(l)}toggleOverlay(l){if(this.overlayOpen()){this.closeOverlay();return}let e=l.currentTarget,n=this.overlayTemplate();if(!(e instanceof HTMLElement)||!n||!this.windowDimensionsService.isBrowser||!Ty(e))return;let r=this.overlay.create({usePopover:this.useTopLayer(),positionStrategy:this.bxOverlayPositionService.getElementStrategy(e,this.placement()),scrollStrategy:this.overlay.scrollStrategies.noop()});this.overlayRef=r,this.overlayOpen.set(!0),e.focus({preventScroll:!0}),r.attach(new qn(n,this.viewContainerRef)).detectChanges(),this.disconnectTheme=sr(e,r.overlayElement),this.disconnectOrigin=Do(r,e,{onOriginHidden:()=>this.closeOverlay()}),r.outsidePointerEvents().pipe(rp(this.destroyRef)).subscribe(v=>{v.target instanceof Node&&e.contains(v.target)||this.closeOverlay()}),r.keydownEvents().pipe(rp(this.destroyRef)).subscribe(v=>{v.key===`Escape`&&(v.preventDefault(),this.closeOverlay())})}closeOverlay(){this.disconnectOrigin?.(),this.disconnectTheme?.(),this.overlayRef?.dispose(),this.disconnectOrigin=void 0,this.disconnectTheme=void 0,this.overlayRef=void 0,this.overlayOpen.set(!1)}static ɵfac=function(e){return new(e||d)};static ɵcmp=V$1({type:d,selectors:[[`app-overlay-positioning`]],viewQuery:function(e,n){e&1&&Mn(n.overlayTemplate,V,5),e&2&&Mt()},decls:24,vars:11,consts:[[`overlayTemplate`,``],[3,`gap`],[`title`,`Connected overlay`],[`label`,`Use top layer`,3,`checkedChange`,`checked`],[`direction`,`responsive`,`align`,`center`,3,`gap`],[`label`,`Preferred placement`,3,`valueChange`,`options`,`value`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`blur`],[`title`,`Shared positioning and theme inheritance`,`message`,`The preview uses the public Core positioning, origin tracking, and theme helpers. Change the playground appearance while it is open to see theme inheritance.`],[`direction`,`horizontal`,3,`wrap`,`gap`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/popover`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/dropdown`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/tooltip-directive`],[1,`utility-overlay`],[`role`,`tooltip`,3,`id`]],template:function(e,n){e&1&&(j(0,`bx-stack`,1)(1,`bx-card`,2)(2,`bx-stack`,1)(3,`p`),Te(4,`Choose a preferred side, open the preview, then scroll or resize. The position strategy falls back when space is limited.`),U(),j(5,`bx-checkbox`,3),ve(`checkedChange`,function(c){return n.setTopLayer(c)}),U(),j(6,`bx-stack`,4)(7,`bx-select`,5),ve(`valueChange`,function(c){return n.setPlacement(c)}),U(),j(8,`button`,6),ve(`click`,function(c){return n.toggleOverlay(c)})(`blur`,function(){return n.closeOverlay()}),Te(9),U()(),j(10,`p`),Te(11,`Focus stays on the trigger. Escape, moving focus away, an outside click, or scrolling the origin out of view closes the preview.`),U(),j(12,`p`),Te(13,`Top-layer previews use measured positioning to follow scrolling. Ordinary previews use native CSS anchors where supported.`),U()()(),Ve(14,`bx-alert`,7),j(15,`bx-stack`,8)(16,`a`,9),Te(17,`Popover`),U(),j(18,`a`,10),Te(19,`Dropdown`),U(),j(20,`a`,11),Te(21,`Tooltip`),U()()(),aS(22,Y,7,3,`ng-template`,null,0,yb)),e&2&&(ae(`gap`,5),D(2),ae(`gap`,4),D(3),ae(`checked`,n.useTopLayer()),D(),ae(`gap`,4),D(),ae(`options`,n.placements)(`value`,n.placement()),D(),H(`aria-expanded`,n.overlayOpen())(`aria-describedby`,n.overlayOpen()?n.overlayId:null),D(),gr(` `,n.overlayOpen()?`Hide position preview`:`Show position preview`,` `),D(6),ae(`wrap`,!0)(`gap`,2))},dependencies:[iM,Z,sM,Qn,Op,ki,pM],styles:[`
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