import{L as xe}from"./chunk-HfEiycvf.js";import{G as js,O as Ys,h as Ks,n as $s,o as Bs}from"./chunk-DyZGtlM9.js";import{Ci as ik,Cr as b,Gn as Wy,Hi as lb,It as MZ,K as Fr,Lr as db,Or as bo,Ri as ke,Sr as al,Va as sb,Vo as z,Xa as td,ao as ub,c as $o,et as Go,fi as he,g as Aw,go as vo,ia as nb,ja as qs,kr as br,mr as aA,pt as IT,u as $s$1,wi as il,zi as kz}from"./chunk-DflWScik.js";var q=[`lockControls`];function A(l,t){if(l&1){let e=lb();bo(0,`button`,10),br(`click`,function(){let v=il(e).$implicit,j=$s$1();return al(j.toggleLock(v))}),aA(1),Go()}if(l&2){let e=t.$implicit,n=$s$1();vo(`aria-pressed`,n.locks().includes(e)),qs(),ub(` `,n.locks().includes(e)?`Release `+e+` lock`:`Acquire `+e+` lock`,` `)}}function V(l,t){if(l&1&&(bo(0,`bx-card`,9)(1,`bx-stack`,1),td(2,`bx-tag`,11),bo(3,`p`),aA(4,`Each owner keeps a stable ID and releases only its own lock.`),Go()()()),l&2){let e=t.$implicit,n=$s$1();$o(`title`,e===`first`?`First owner`:`Second owner`),qs(),$o(`gap`,4),qs(),$o(`text`,n.locks().includes(e)?`Lock acquired`:`Lock released`)(`leadingIcon`,n.locks().includes(e)?`lock`:`lock-open`)(`color`,n.locks().includes(e)?`warn`:`neutral`)(`focusable`,!1)}}var U=class l{scrollLockService=b(Aw);lockIds={first:MZ(),second:MZ()};lockControls=kz(`lockControls`,{read:ke});owners=[`first`,`second`];locks=z([]);constructor(){b(he).onDestroy(()=>this.releaseLocks())}toggleLock(t){this.locks().includes(t)?(this.scrollLockService.enableScroll(this.lockIds[t]),this.locks.update(e=>e.filter(n=>n!==t))):(this.locks().length||this.lockControls()?.nativeElement.scrollIntoView({block:`center`,inline:`nearest`,behavior:`instant`}),this.scrollLockService.disableScroll(this.lockIds[t],{handleTouchInput:!0}),this.locks.update(e=>[...e,t]))}releaseLocks(){this.scrollLockService.enableScroll(this.lockIds.first),this.scrollLockService.enableScroll(this.lockIds.second),this.locks.set([])}static ɵfac=function(e){return new(e||l)};static ɵcmp=Fr({type:l,selectors:[[`app-scroll-lock`]],viewQuery:function(e,n){e&1&&Wy(n.lockControls,q,5,ke),e&2&&db()},decls:17,vars:7,consts:[[`lockControls`,``],[3,`gap`],[`title`,`Try two independent owners`,`message`,`Acquire both locks, then release one. Page scrolling stays locked until the final owner releases it. Release controls remain available below.`],[`title`,`Control the demo locks`],[`role`,`status`],[`direction`,`horizontal`,`role`,`group`,`aria-label`,`Demo scroll lock owners`,3,`wrap`,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`],[`minColumnWidth`,`16rem`],[3,`title`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[3,`text`,`leadingIcon`,`color`,`focusable`]],template:function(e,n){e&1&&(bo(0,`bx-stack`,1),td(1,`bx-alert`,2),bo(2,`bx-card`,3,0)(4,`bx-stack`,1)(5,`p`,4),aA(6),Go(),bo(7,`bx-stack`,5),nb(8,A,2,2,`button`,6,IT),bo(10,`button`,7),br(`click`,function(){return n.releaseLocks()}),aA(11,` Release demo locks `),Go()()()(),bo(12,`bx-grid`,8),nb(13,V,5,6,`bx-card`,9,IT),Go(),bo(15,`p`),aA(16,` Wheel and touch scrolling are blocked while a lock is held, and the page keeps its native scrollbar. Leaving this example releases its two locks; other overlays keep their own locks. `),Go()()),e&2&&($o(`gap`,5),qs(4),$o(`gap`,4),qs(2),ik(`Demo owners: `,n.locks().length,`. Page scrolling: `,n.scrollLockService.isScrollDisabled()?`locked`:`available`,`.`),qs(),$o(`wrap`,!0)(`gap`,3),qs(),sb(n.owners),qs(2),$o(`disabled`,n.locks().length===0),qs(3),sb(n.owners))},dependencies:[js,xe,$s,Ks,Ys,Bs],styles:[`
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
}`]})};export{U as ScrollLock};