import{t as e}from"./chunk-DS2-hL1-.js";import{D as me,o as Hr,t as At}from"./chunk-g_MLkDaC.js";import{Ba as te,Br as dT,C as Bt,Fa as si,Ii as kr,Ji as mf,Q as G,Qa as un,Rt as M,St as Jt,To as y,Yt as Nt,Zn as X,Zr as f,_o as xT,_r,en as Pa,er as Xt,fr as _,g as B,i as $f,j as D,jt as Kn,lo as w,mn as R,ri as ft,sa as ol,sn as Q$1,ua as pT,vn as Rn,x as Bn,xa as r0,xo as xe}from"./chunk-CpeWzSSw.js";var V=[`overlayTemplate`];function Y(d,l){if(d&1&&(_(0,`bx-card`,12)(1,`div`,13)(2,`bx-stack`,1)(3,`strong`),X(4,`Positioned with Core utilities`),D(),_(5,`p`),X(6),D()()()()),d&2){let e=w();y(),R(`id`,e.overlayId),y(),R(`gap`,3),y(4),un(`This surface follows its origin and inherits the active Blocks theme. Preferred placement: `,e.placement(),`.`)}}var Q=class d{bxOverlayPositionService=f(_r);destroyRef=f(Q$1);overlay=f(Rn);viewContainerRef=f(Bt);windowDimensionsService=f(ol);overlayTemplate=Nt(`overlayTemplate`);placements=e;overlayId=`utilities-overlay-`+Jt();overlayOpen=M(!1);useTopLayer=M(!1);placement=M(`bottom`);overlayRef;disconnectOrigin;disconnectTheme;constructor(){this.destroyRef.onDestroy(()=>this.closeOverlay())}setPlacement(l){this.closeOverlay(),this.placement.set(l??`bottom`)}setTopLayer(l){this.closeOverlay(),this.useTopLayer.set(l)}toggleOverlay(l){if(this.overlayOpen()){this.closeOverlay();return}let e=l.currentTarget,n=this.overlayTemplate();if(!(e instanceof HTMLElement)||!n||!this.windowDimensionsService.isBrowser||!r0(e))return;let r=this.overlay.create({usePopover:this.useTopLayer(),positionStrategy:this.bxOverlayPositionService.getElementStrategy(e,this.placement()),scrollStrategy:this.overlay.scrollStrategies.noop()});this.overlayRef=r,this.overlayOpen.set(!0),e.focus({preventScroll:!0}),r.attach(new Bn(n,this.viewContainerRef)).detectChanges(),this.disconnectTheme=Kn(e,r.overlayElement),this.disconnectOrigin=si(r,e,{onOriginHidden:()=>this.closeOverlay()}),r.outsidePointerEvents().pipe(mf(this.destroyRef)).subscribe(m=>{m.target instanceof Node&&e.contains(m.target)||this.closeOverlay()}),r.keydownEvents().pipe(mf(this.destroyRef)).subscribe(m=>{m.key===`Escape`&&(m.preventDefault(),this.closeOverlay())})}closeOverlay(){this.disconnectOrigin?.(),this.disconnectTheme?.(),this.overlayRef?.dispose(),this.disconnectOrigin=void 0,this.disconnectTheme=void 0,this.overlayRef=void 0,this.overlayOpen.set(!1)}static ɵfac=function(e){return new(e||d)};static ɵcmp=G({type:d,selectors:[[`app-overlay-positioning`]],viewQuery:function(e,n){e&1&&Xt(n.overlayTemplate,V,5),e&2&&ft()},decls:24,vars:10,consts:[[`overlayTemplate`,``],[3,`gap`],[`title`,`Connected overlay`],[`label`,`Use top layer`,3,`checkedChange`,`checked`],[1,`overlay-position-controls`],[`label`,`Preferred placement`,`subscriptSizing`,`dynamic`,3,`valueChange`,`options`,`value`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`blur`],[`title`,`Shared positioning and theme inheritance`,`message`,`The preview uses the public Core positioning, origin tracking, and theme helpers. Change the playground appearance while it is open to see theme inheritance.`],[`direction`,`horizontal`,3,`wrap`,`gap`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/popover`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/dropdown`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/tooltip-directive`],[1,`utility-overlay`],[`role`,`tooltip`,1,`utility-overlay-content`,3,`id`]],template:function(e,n){e&1&&(_(0,`bx-stack`,1)(1,`bx-card`,2)(2,`bx-stack`,1)(3,`p`),X(4,`Choose a preferred side, open the preview, then scroll or resize. The position strategy falls back when space is limited.`),D(),_(5,`bx-checkbox`,3),te(`checkedChange`,function(c){return n.setTopLayer(c)}),D(),_(6,`div`,4)(7,`bx-select`,5),te(`valueChange`,function(c){return n.setPlacement(c)}),D(),_(8,`button`,6),te(`click`,function(c){return n.toggleOverlay(c)})(`blur`,function(){return n.closeOverlay()}),X(9),D()(),_(10,`p`),X(11,`Focus stays on the trigger. Escape, moving focus away, an outside click, or scrolling the origin out of view closes the preview.`),D(),_(12,`p`),X(13,`Top-layer previews use measured positioning to follow scrolling. Ordinary previews use native CSS anchors where supported.`),D()()(),xe(14,`bx-alert`,7),_(15,`bx-stack`,8)(16,`a`,9),X(17,`Popover`),D(),_(18,`a`,10),X(19,`Dropdown`),D(),_(20,`a`,11),X(21,`Tooltip`),D()()(),Pa(22,Y,7,3,`ng-template`,null,0,kr)),e&2&&(R(`gap`,5),y(2),R(`gap`,4),y(3),R(`checked`,n.useTopLayer()),y(2),R(`options`,n.placements)(`value`,n.placement()),y(),B(`aria-expanded`,n.overlayOpen())(`aria-describedby`,n.overlayOpen()?n.overlayId:null),y(),un(` `,n.overlayOpen()?`Hide position preview`:`Show position preview`,` `),y(6),R(`wrap`,!0)(`gap`,2))},dependencies:[dT,me,pT,Hr,$f,At,xT],styles:[`
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
}`]})};export{Q as OverlayPositioning};