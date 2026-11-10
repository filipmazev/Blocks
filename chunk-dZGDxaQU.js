import"./main-SAGFAVWF.js";import{n as Z}from"./chunk-ufdcSnea.js";import{Ba as yn,Bt as P,Di as nn,E as DM,Hn as Z$1,It as Oe,Li as oo,Ma as wn,Pt as OM,Ri as p,Sn as WC,Tt as Mn,W as H,X as IM,b as CM,dr as ca,la as st,nn as St,o as A$1,pa as tn,rr as at,s as AM,si as k,t as $,tt as In,u as B,ui as k_,v as C,w as D,xi as me,xn as W,ya as ue}from"./chunk-BR06ksVJ.js";var q=[`lockControls`];function A(l,t){if(l&1){let e=tn();A$1(0,`button`,11),ue(`click`,function(){let v=st(e).$implicit,j=C();return at(j.toggleLock(v))}),me(1),P()}if(l&2){let e=t.$implicit,n=C();W(`aria-pressed`,n.locks().includes(e)),k(),wn(` `,n.locks().includes(e)?`Release `+e+` lock`:`Acquire `+e+` lock`,` `)}}function V(l,t){if(l&1&&(A$1(0,`bx-card`,10)(1,`bx-stack`,1),Oe(2,`bx-tag`,12),A$1(3,`p`),me(4,`Each owner keeps a stable ID and releases only its own lock.`),P()()()),l&2){let e=t.$implicit,n=C();B(`title`,e===`first`?`First owner`:`Second owner`),k(),B(`gap`,4),k(),B(`text`,n.locks().includes(e)?`Lock acquired`:`Lock released`)(`leadingIcon`,n.locks().includes(e)?`lock`:`lock-open`)(`color`,n.locks().includes(e)?`warn`:`neutral`)(`focusable`,!1)}}var U=class l{scrollLockService=p(k_);lockIds={first:oo(),second:oo()};lockControls=nn(`lockControls`,{read:H});owners=[`first`,`second`];locks=D([]);constructor(){p(Z$1).onDestroy(()=>this.releaseLocks())}toggleLock(t){this.locks().includes(t)?(this.scrollLockService.enableScroll(this.lockIds[t]),this.locks.update(e=>e.filter(n=>n!==t))):(this.locks().length||this.lockControls()?.nativeElement.scrollIntoView({block:`center`,inline:`nearest`,behavior:`instant`}),this.scrollLockService.disableScroll(this.lockIds[t],{handleTouchInput:!1}),this.locks.update(e=>[...e,t]))}releaseLocks(){this.scrollLockService.enableScroll(this.lockIds.first),this.scrollLockService.enableScroll(this.lockIds.second),this.locks.set([])}static ɵfac=function(e){return new(e||l)};static ɵcmp=$({type:l,selectors:[[`app-scroll-lock`]],viewQuery:function(e,n){e&1&&yn(n.lockControls,q,5,H),e&2&&St()},decls:17,vars:7,consts:[[`lockControls`,``],[3,`gap`],[`title`,`Try two independent owners`,`message`,`Acquire both locks, then release one. Page scrolling stays locked until the final owner releases it. Release controls remain available below.`],[`title`,`Control the demo locks`,1,`lock-controls`],[1,`lock-controls-content`,3,`gap`],[`role`,`status`],[`direction`,`horizontal`,`role`,`group`,`aria-label`,`Demo scroll lock owners`,3,`wrap`,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`],[`minColumnWidth`,`16rem`],[3,`title`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[3,`text`,`leadingIcon`,`color`,`focusable`]],template:function(e,n){e&1&&(A$1(0,`bx-stack`,1),Oe(1,`bx-alert`,2),A$1(2,`bx-card`,3,0)(4,`bx-stack`,4)(5,`p`,5),me(6),P(),A$1(7,`bx-stack`,6),Mn(8,A,2,2,`button`,7,ca),A$1(10,`button`,8),ue(`click`,function(){return n.releaseLocks()}),me(11,` Release demo locks `),P()()()(),A$1(12,`bx-grid`,9),Mn(13,V,5,6,`bx-card`,10,ca),P(),A$1(15,`p`),me(16,`Touch input stays enabled. Leaving this example releases its two locks; other overlays keep their own locks.`),P()()),e&2&&(B(`gap`,5),k(4),B(`gap`,4),k(2),WC(`Demo owners: `,n.locks().length,`. Page scrolling: `,n.scrollLockService.isScrollDisabled()?`locked`:`available`,`.`),k(),B(`wrap`,!0)(`gap`,3),k(),In(n.owners),k(2),B(`disabled`,n.locks().length===0),k(3),In(n.owners))},dependencies:[DM,Z,IM,AM,OM,CM],styles:[`
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
}`]})};export{U as ScrollLock};