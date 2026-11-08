import{t as e}from"./chunk-DS2-hL1-.js";import{s as Ti,w as rr}from"./main-5HCVZCER.js";import{n as Z}from"./chunk-BbcioGCK.js";import{$ as Hx,A as E,Ci as mp,Da as wM,Dt as MM,G as H,Hi as p,Kt as Oo,La as ye,Ni as no,Sa as ur,V as G,Vn as Wn,Xi as q,_ as CM,a as $p,bn as Te,cr as ar,g as C,h as Be,it as It,ka as wr,li as kC,mi as le,t as $,un as Rn,vt as L,wn as U,wt as Lt,xi as mn,y as Ca,yn as Tb,zt as Nn}from"./chunk-7QWHf5Iu.js";var V=[`overlayTemplate`];function Y(d,l){if(d&1&&($(0,`bx-card`,12)(1,`div`,13)(2,`bx-stack`,1)(3,`strong`),Te(4,`Positioned with Core utilities`),q(),$(5,`p`),Te(6),q()()()()),d&2){let e=L();E(),le(`id`,e.overlayId),E(),le(`gap`,3),E(4),wr(`This surface follows its origin and inherits the active Blocks theme. Preferred placement: `,e.placement(),`.`)}}var Q=class d{bxOverlayPositionService=p(ar);destroyRef=p(U);overlay=p(Rn);viewContainerRef=p(Lt);windowDimensionsService=p(Ca);overlayTemplate=mn(`overlayTemplate`);placements=e;overlayId=`utilities-overlay-`+no();overlayOpen=C(!1);useTopLayer=C(!1);placement=C(`bottom`);overlayRef;disconnectOrigin;disconnectTheme;constructor(){this.destroyRef.onDestroy(()=>this.closeOverlay())}setPlacement(l){this.closeOverlay(),this.placement.set(l??`bottom`)}setTopLayer(l){this.closeOverlay(),this.useTopLayer.set(l)}toggleOverlay(l){if(this.overlayOpen()){this.closeOverlay();return}let e=l.currentTarget,n=this.overlayTemplate();if(!(e instanceof HTMLElement)||!n||!this.windowDimensionsService.isBrowser||!Hx(e))return;let o=this.overlay.create({usePopover:this.useTopLayer(),positionStrategy:this.bxOverlayPositionService.getElementStrategy(e,this.placement()),scrollStrategy:this.overlay.scrollStrategies.noop()});this.overlayRef=o,this.overlayOpen.set(!0),e.focus({preventScroll:!0}),o.attach(new Wn(n,this.viewContainerRef)).detectChanges(),this.disconnectTheme=ur(e,o.overlayElement),this.disconnectOrigin=Oo(o,e,{onOriginHidden:()=>this.closeOverlay()}),o.outsidePointerEvents().pipe(mp(this.destroyRef)).subscribe(v=>{v.target instanceof Node&&e.contains(v.target)||this.closeOverlay()}),o.keydownEvents().pipe(mp(this.destroyRef)).subscribe(v=>{v.key===`Escape`&&(v.preventDefault(),this.closeOverlay())})}closeOverlay(){this.disconnectOrigin?.(),this.disconnectTheme?.(),this.overlayRef?.dispose(),this.disconnectOrigin=void 0,this.disconnectTheme=void 0,this.overlayRef=void 0,this.overlayOpen.set(!1)}static ɵfac=function(e){return new(e||d)};static ɵcmp=H({type:d,selectors:[[`app-overlay-positioning`]],viewQuery:function(e,n){e&1&&Nn(n.overlayTemplate,V,5),e&2&&It()},decls:24,vars:11,consts:[[`overlayTemplate`,``],[3,`gap`],[`title`,`Connected overlay`],[`label`,`Use top layer`,3,`checkedChange`,`checked`],[`direction`,`responsive`,`align`,`center`,3,`gap`],[`label`,`Preferred placement`,3,`valueChange`,`options`,`value`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`blur`],[`title`,`Shared positioning and theme inheritance`,`message`,`The preview uses the public Core positioning, origin tracking, and theme helpers. Change the playground appearance while it is open to see theme inheritance.`],[`direction`,`horizontal`,3,`wrap`,`gap`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/popover`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/dropdown`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/components/tooltip-directive`],[1,`utility-overlay`],[`role`,`tooltip`,3,`id`]],template:function(e,n){e&1&&($(0,`bx-stack`,1)(1,`bx-card`,2)(2,`bx-stack`,1)(3,`p`),Te(4,`Choose a preferred side, open the preview, then scroll or resize. The position strategy falls back when space is limited.`),q(),$(5,`bx-checkbox`,3),ye(`checkedChange`,function(c){return n.setTopLayer(c)}),q(),$(6,`bx-stack`,4)(7,`bx-select`,5),ye(`valueChange`,function(c){return n.setPlacement(c)}),q(),$(8,`button`,6),ye(`click`,function(c){return n.toggleOverlay(c)})(`blur`,function(){return n.closeOverlay()}),Te(9),q()(),$(10,`p`),Te(11,`Focus stays on the trigger. Escape, moving focus away, an outside click, or scrolling the origin out of view closes the preview.`),q(),$(12,`p`),Te(13,`Top-layer previews use measured positioning to follow scrolling. Ordinary previews use native CSS anchors where supported.`),q()()(),Be(14,`bx-alert`,7),$(15,`bx-stack`,8)(16,`a`,9),Te(17,`Popover`),q(),$(18,`a`,10),Te(19,`Dropdown`),q(),$(20,`a`,11),Te(21,`Tooltip`),q()()(),kC(22,Y,7,3,`ng-template`,null,0,Tb)),e&2&&(le(`gap`,5),E(2),le(`gap`,4),E(3),le(`checked`,n.useTopLayer()),E(),le(`gap`,4),E(),le(`options`,n.placements)(`value`,n.placement()),E(),G(`aria-expanded`,n.overlayOpen())(`aria-describedby`,n.overlayOpen()?n.overlayId:null),E(),wr(` `,n.overlayOpen()?`Hide position preview`:`Show position preview`,` `),E(6),le(`wrap`,!0)(`gap`,2))},dependencies:[wM,Z,CM,Ti,$p,rr,MM],styles:[`
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
  max-block-size: calc(100dvh - var(--%NS%bx-space-8, 2rem));
  overflow: auto;
}
.lock-controls-content[_ngcontent-%COMP%] {
  max-block-size: calc(100dvh - var(--%NS%bx-space-8, 2rem) - var(--%NS%bx-space-12, 3rem) - var(--%NS%bx-space-12, 3rem));
  padding: var(--%NS%bx-space-1, 0.25rem);
  overflow: auto;
  overscroll-behavior: contain;
}`]})};export{Q as OverlayPositioning};