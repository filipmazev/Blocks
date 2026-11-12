import"./main-GMLCMQLH.js";import{r as Z}from"./chunk-BY4z3yad.js";import{Ao as y,Do as xe,E as D,Fr as cn,Ft as M,In as Ve,J as G,Jt as Nt,Kn as Wt,Mr as cT,Pi as ja,Qr as f,Sr as bT,Ti as iT,Ur as dr,Ya as te,Yr as em,_i as hT,ci as ft,cn as R,h as B,lr as _,mo as w,o as $t,qn as X,rn as Q,ro as uT,sr as Zt,to as uE,vt as K,xo as wt,y as Be}from"./chunk-RnMilSnn.js";var q=[`lockControls`];function A(l,t){if(l&1){let e=wt();_(0,`button`,11),te(`click`,function(){let v=Be(e).$implicit,j=w();return Ve(j.toggleLock(v))}),X(1),D()}if(l&2){let e=t.$implicit,n=w();B(`aria-pressed`,n.locks().includes(e)),y(),cn(` `,n.locks().includes(e)?`Release `+e+` lock`:`Acquire `+e+` lock`,` `)}}function V(l,t){if(l&1&&(_(0,`bx-card`,10)(1,`bx-stack`,1),xe(2,`bx-tag`,12),_(3,`p`),X(4,`Each owner keeps a stable ID and releases only its own lock.`),D()()()),l&2){let e=t.$implicit,n=w();R(`title`,e===`first`?`First owner`:`Second owner`),y(),R(`gap`,4),y(),R(`text`,n.locks().includes(e)?`Lock acquired`:`Lock released`)(`leadingIcon`,n.locks().includes(e)?`lock`:`lock-open`)(`color`,n.locks().includes(e)?`warn`:`neutral`)(`focusable`,!1)}}var U=class l{scrollLockService=f(em);lockIds={first:dr(),second:dr()};lockControls=Nt(`lockControls`,{read:K});owners=[`first`,`second`];locks=M([]);constructor(){f(Q).onDestroy(()=>this.releaseLocks())}toggleLock(t){this.locks().includes(t)?(this.scrollLockService.enableScroll(this.lockIds[t]),this.locks.update(e=>e.filter(n=>n!==t))):(this.locks().length||this.lockControls()?.nativeElement.scrollIntoView({block:`center`,inline:`nearest`,behavior:`instant`}),this.scrollLockService.disableScroll(this.lockIds[t],{handleTouchInput:!1}),this.locks.update(e=>[...e,t]))}releaseLocks(){this.scrollLockService.enableScroll(this.lockIds.first),this.scrollLockService.enableScroll(this.lockIds.second),this.locks.set([])}static ɵfac=function(e){return new(e||l)};static ɵcmp=G({type:l,selectors:[[`app-scroll-lock`]],viewQuery:function(e,n){e&1&&Zt(n.lockControls,q,5,K),e&2&&ft()},decls:17,vars:7,consts:[[`lockControls`,``],[3,`gap`],[`title`,`Try two independent owners`,`message`,`Acquire both locks, then release one. Page scrolling stays locked until the final owner releases it. Release controls remain available below.`],[`title`,`Control the demo locks`,1,`lock-controls`],[1,`lock-controls-content`,3,`gap`],[`role`,`status`],[`direction`,`horizontal`,`role`,`group`,`aria-label`,`Demo scroll lock owners`,3,`wrap`,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`],[`minColumnWidth`,`16rem`],[3,`title`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[3,`text`,`leadingIcon`,`color`,`focusable`]],template:function(e,n){e&1&&(_(0,`bx-stack`,1),xe(1,`bx-alert`,2),_(2,`bx-card`,3,0)(4,`bx-stack`,4)(5,`p`,5),X(6),D(),_(7,`bx-stack`,6),$t(8,A,2,2,`button`,7,ja),_(10,`button`,8),te(`click`,function(){return n.releaseLocks()}),X(11,` Release demo locks `),D()()()(),_(12,`bx-grid`,9),$t(13,V,5,6,`bx-card`,10,ja),D(),_(15,`p`),X(16,`Touch input stays enabled. Leaving this example releases its two locks; other overlays keep their own locks.`),D()()),e&2&&(R(`gap`,5),y(4),R(`gap`,4),y(2),uE(`Demo owners: `,n.locks().length,`. Page scrolling: `,n.scrollLockService.isScrollDisabled()?`locked`:`available`,`.`),y(),R(`wrap`,!0)(`gap`,3),y(),Wt(n.owners),y(2),R(`disabled`,n.locks().length===0),y(3),Wt(n.owners))},dependencies:[cT,Z,uT,bT,hT,iT],styles:[`
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
}`]})};export{U as ScrollLock};