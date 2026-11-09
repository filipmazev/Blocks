import{t as e}from"./chunk-DS2-hL1-.js";import{s as Ti,w as rr}from"./main-SBKNNIA4.js";import{n as Z}from"./chunk-BQlfz5HR.js";import{A as E,Bn as Wn,Bt as Nn,Dt as MM,Ea as ur,Ei as mp,Fa as ye,Jt as Oo,Ma as wr,Pi as no,Pn as W,Q as Hx,Sn as Tt,Ui as p,V as Ft,Wn as Y$1,Yr as hn,Zi as q,_ as CM,_t as L,a as $p,bn as Tb,cr as ar,dn as Rn,gi as le,jn as Ve,ka as wM,pn as Sa,t as $,ui as kC,ut as K,w as D,zt as Ne}from"./chunk-B8p78nSc.js";var V=[`overlayTemplate`];function Y(d,l){if(d&1&&(K(0,`bx-card`,12)(1,`div`,13)(2,`bx-stack`,1)(3,`strong`),Ne(4,`Positioned with Core utilities`),$(),K(5,`p`),Ne(6),$()()()()),d&2){let e=L();D(),le(`id`,e.overlayId),D(),le(`gap`,3),D(4),wr(`This surface follows its origin and inherits the active Blocks theme. Preferred placement: `,e.placement(),`.`)}}var Q=class d{bxOverlayPositionService=p(ar);destroyRef=p(W);overlay=p(Rn);viewContainerRef=p(Ft);windowDimensionsService=p(Sa);overlayTemplate=hn(`overlayTemplate`);placements=e;overlayId=`utilities-overlay-`+no();overlayOpen=E(!1);useTopLayer=E(!1);placement=E(`bottom`);overlayRef;disconnectOrigin;disconnectTheme;constructor(){this.destroyRef.onDestroy(()=>this.closeOverlay())}setPlacement(l){this.closeOverlay(),this.placement.set(l??`bottom`)}setTopLayer(l){this.closeOverlay(),this.useTopLayer.set(l)}toggleOverlay(l){if(this.overlayOpen()){this.closeOverlay();return}let e=l.currentTarget,n=this.overlayTemplate();if(!(e instanceof HTMLElement)||!n||!this.windowDimensionsService.isBrowser||!Hx(e))return;let o=this.overlay.create({usePopover:this.useTopLayer(),positionStrategy:this.bxOverlayPositionService.getElementStrategy(e,this.placement()),scrollStrategy:this.overlay.scrollStrategies.noop()});this.overlayRef=o,this.overlayOpen.set(!0),e.focus({preventScroll:!0}),o.attach(new Wn(n,this.viewContainerRef)).detectChanges(),this.disconnectTheme=ur(e,o.overlayElement),this.disconnectOrigin=Oo(o,e,{onOriginHidden:()=>this.closeOverlay()}),o.outsidePointerEvents().pipe(mp(this.destroyRef)).subscribe(v=>{v.target instanceof Node&&e.contains(v.target)||this.closeOverlay()}),o.keydownEvents().pipe(mp(this.destroyRef)).subscribe(v=>{v.key===`Escape`&&(v.preventDefault(),this.closeOverlay())})}closeOverlay(){this.disconnectOrigin?.(),this.disconnectTheme?.(),this.overlayRef?.dispose(),this.disconnectOrigin=void 0,this.disconnectTheme=void 0,this.overlayRef=void 0,this.overlayOpen.set(!1)}static ɵfac=function(e){return new(e||d)};static ɵcmp=q({type:d,selectors:[[`app-overlay-positioning`]],viewQuery:function(e,n){e&1&&Nn(n.overlayTemplate,V,5),e&2&&Tt()},decls:24,vars:10,consts:[[`overlayTemplate`,``],[3,`gap`],[`title`,`Connected overlay`],[`label`,`Use top layer`,3,`checkedChange`,`checked`],[1,`overlay-position-controls`],[`label`,`Preferred placement`,`subscriptSizing`,`dynamic`,3,`valueChange`,`options`,`value`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`blur`],[`title`,`Shared positioning and theme inheritance`,`message`,`The preview uses the public Core positioning, origin tracking, and theme helpers. Change the playground appearance while it is open to see theme inheritance.`],[`direction`,`horizontal`,3,`wrap`,`gap`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/popover`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/dropdown`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/tooltip-directive`],[1,`utility-overlay`],[`role`,`tooltip`,1,`utility-overlay-content`,3,`id`]],template:function(e,n){e&1&&(K(0,`bx-stack`,1)(1,`bx-card`,2)(2,`bx-stack`,1)(3,`p`),Ne(4,`Choose a preferred side, open the preview, then scroll or resize. The position strategy falls back when space is limited.`),$(),K(5,`bx-checkbox`,3),ye(`checkedChange`,function(c){return n.setTopLayer(c)}),$(),K(6,`div`,4)(7,`bx-select`,5),ye(`valueChange`,function(c){return n.setPlacement(c)}),$(),K(8,`button`,6),ye(`click`,function(c){return n.toggleOverlay(c)})(`blur`,function(){return n.closeOverlay()}),Ne(9),$()(),K(10,`p`),Ne(11,`Focus stays on the trigger. Escape, moving focus away, an outside click, or scrolling the origin out of view closes the preview.`),$(),K(12,`p`),Ne(13,`Top-layer previews use measured positioning to follow scrolling. Ordinary previews use native CSS anchors where supported.`),$()()(),Ve(14,`bx-alert`,7),K(15,`bx-stack`,8)(16,`a`,9),Ne(17,`Popover`),$(),K(18,`a`,10),Ne(19,`Dropdown`),$(),K(20,`a`,11),Ne(21,`Tooltip`),$()()(),kC(22,Y,7,3,`ng-template`,null,0,Tb)),e&2&&(le(`gap`,5),D(2),le(`gap`,4),D(3),le(`checked`,n.useTopLayer()),D(2),le(`options`,n.placements)(`value`,n.placement()),D(),Y$1(`aria-expanded`,n.overlayOpen())(`aria-describedby`,n.overlayOpen()?n.overlayId:null),D(),wr(` `,n.overlayOpen()?`Hide position preview`:`Show position preview`,` `),D(6),le(`wrap`,!0)(`gap`,2))},dependencies:[wM,Z,CM,Ti,$p,rr,MM],styles:[`
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
}`]})};export{Q as OverlayPositioning};