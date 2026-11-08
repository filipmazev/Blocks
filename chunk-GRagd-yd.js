import{t as e}from"./chunk-DS2-hL1-.js";import{S as oo,q as Z,s as Ti}from"./main-HW2XYL5W.js";import{$r as kb,Bt as P,D as E,In as Xr,Ir as ir,Mr as hS,N as Fe,Oi as q,Ot as Nn,Si as p,Ti as pM,W as H,Zr as k,_a as xe,cr as bn,dn as Tn,et as It,fn as To,h as By,hn as U,hr as dp,jr as hM,ka as z,o as $n,pa as ws,pi as mr,q as Hp,si as lr,t as $,un as Te,vt as Lt,xa as yM,yi as oe}from"./chunk-Dt37D5SH.js";var V=[`overlayTemplate`];function Y(d,l){if(d&1&&(U(0,`bx-card`,12)(1,`div`,13)(2,`bx-stack`,1)(3,`strong`),Te(4,`Positioned with Core utilities`),H(),U(5,`p`),Te(6),H()()()()),d&2){let e=P();k(),oe(`id`,e.overlayId),k(),oe(`gap`,3),k(4),mr(`This surface follows its origin and inherits the active Blocks theme. Preferred placement: `,e.placement(),`.`)}}var Q=class d{bxOverlayPositionService=p(ir);destroyRef=p(q);overlay=p(Nn);viewContainerRef=p(Lt);windowDimensionsService=p(ws);overlayTemplate=bn(`overlayTemplate`);placements=e;overlayId=`utilities-overlay-`+Xr();overlayOpen=E(!1);useTopLayer=E(!1);placement=E(`bottom`);overlayRef;disconnectOrigin;disconnectTheme;constructor(){this.destroyRef.onDestroy(()=>this.closeOverlay())}setPlacement(l){this.closeOverlay(),this.placement.set(l??`bottom`)}setTopLayer(l){this.closeOverlay(),this.useTopLayer.set(l)}toggleOverlay(l){if(this.overlayOpen()){this.closeOverlay();return}let e=l.currentTarget,n=this.overlayTemplate();if(!(e instanceof HTMLElement)||!n||!this.windowDimensionsService.isBrowser||!By(e))return;let r=this.overlay.create({usePopover:this.useTopLayer(),positionStrategy:this.bxOverlayPositionService.getElementStrategy(e,this.placement()),scrollStrategy:this.overlay.scrollStrategies.noop()});this.overlayRef=r,this.overlayOpen.set(!0),e.focus({preventScroll:!0}),r.attach(new $n(n,this.viewContainerRef)).detectChanges(),this.disconnectTheme=lr(e,r.overlayElement),this.disconnectOrigin=To(r,e,{onOriginHidden:()=>this.closeOverlay()}),r.outsidePointerEvents().pipe(dp(this.destroyRef)).subscribe(v=>{v.target instanceof Node&&e.contains(v.target)||this.closeOverlay()}),r.keydownEvents().pipe(dp(this.destroyRef)).subscribe(v=>{v.key===`Escape`&&(v.preventDefault(),this.closeOverlay())})}closeOverlay(){this.disconnectOrigin?.(),this.disconnectTheme?.(),this.overlayRef?.dispose(),this.disconnectOrigin=void 0,this.disconnectTheme=void 0,this.overlayRef=void 0,this.overlayOpen.set(!1)}static ɵfac=function(e){return new(e||d)};static ɵcmp=z({type:d,selectors:[[`app-overlay-positioning`]],viewQuery:function(e,n){e&1&&Tn(n.overlayTemplate,V,5),e&2&&It()},decls:24,vars:11,consts:[[`overlayTemplate`,``],[3,`gap`],[`title`,`Connected overlay`],[`label`,`Use top layer`,3,`checkedChange`,`checked`],[`direction`,`responsive`,`align`,`center`,3,`gap`],[`label`,`Preferred placement`,3,`valueChange`,`options`,`value`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`blur`],[`title`,`Shared positioning and theme inheritance`,`message`,`The preview uses the public Core positioning, origin tracking, and theme helpers. Change the playground appearance while it is open to see theme inheritance.`],[`direction`,`horizontal`,3,`wrap`,`gap`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/popover`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/dropdown`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/tooltip-directive`],[1,`utility-overlay`],[`role`,`tooltip`,3,`id`]],template:function(e,n){e&1&&(U(0,`bx-stack`,1)(1,`bx-card`,2)(2,`bx-stack`,1)(3,`p`),Te(4,`Choose a preferred side, open the preview, then scroll or resize. The position strategy falls back when space is limited.`),H(),U(5,`bx-checkbox`,3),xe(`checkedChange`,function(c){return n.setTopLayer(c)}),H(),U(6,`bx-stack`,4)(7,`bx-select`,5),xe(`valueChange`,function(c){return n.setPlacement(c)}),H(),U(8,`button`,6),xe(`click`,function(c){return n.toggleOverlay(c)})(`blur`,function(){return n.closeOverlay()}),Te(9),H()(),U(10,`p`),Te(11,`Focus stays on the trigger. Escape, moving focus away, an outside click, or scrolling the origin out of view closes the preview.`),H(),U(12,`p`),Te(13,`Top-layer previews use measured positioning to follow scrolling. Ordinary previews use native CSS anchors where supported.`),H()()(),Fe(14,`bx-alert`,7),U(15,`bx-stack`,8)(16,`a`,9),Te(17,`Popover`),H(),U(18,`a`,10),Te(19,`Dropdown`),H(),U(20,`a`,11),Te(21,`Tooltip`),H()()(),hS(22,Y,7,3,`ng-template`,null,0,kb)),e&2&&(oe(`gap`,5),k(2),oe(`gap`,4),k(3),oe(`checked`,n.useTopLayer()),k(),oe(`gap`,4),k(),oe(`options`,n.placements)(`value`,n.placement()),k(),$(`aria-expanded`,n.overlayOpen())(`aria-describedby`,n.overlayOpen()?n.overlayId:null),k(),mr(` `,n.overlayOpen()?`Hide position preview`:`Show position preview`,` `),k(6),oe(`wrap`,!0)(`gap`,2))},dependencies:[pM,Z,hM,Ti,Hp,oo,yM],styles:[`
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