import{D as fe}from"./chunk-BEm-ihzG.js";import{C as Vs,O as Xs,b as Us,it as zs,s as Gs}from"./chunk-DE1qZ0OS.js";import"./chunk-1rrlZ2Ss.js";import{$r as fa,Ba as rm,En as W,Eo as xT,Gr as el,In as XT,Kr as em,Li as kE,Lt as Os,Mo as yZ,Nr as d4,Po as ye,Sr as ba,St as Ly,Xt as Ql,_t as Ky,b as Cy,i as $n,ia as me,it as Jc,nn as Ro,nr as Zb,qi as m,qn as Yb,rt as Jb,wr as br,xn as Ul}from"./chunk-CVY9_LoB.js";var q=[`lockControls`];function A(l,t){if(l&1){let e=Jb();Os(0,`button`,10),br(`click`,function(){let v=Jc(e).$implicit,j=Ql();return el(j.toggleLock(v))}),XT(1),ba()}if(l&2){let e=t.$implicit,n=Ql();Ro(`aria-pressed`,n.locks().includes(e)),Ul(),rm(` `,n.locks().includes(e)?`Release `+e+` lock`:`Acquire `+e+` lock`,` `)}}function V(l,t){if(l&1&&(Os(0,`bx-card`,9)(1,`bx-stack`,1),Cy(2,`bx-tag`,11),Os(3,`p`),XT(4,`Each owner keeps a stable ID and releases only its own lock.`),ba()()()),l&2){let e=t.$implicit,n=Ql();fa(`title`,e===`first`?`First owner`:`Second owner`),Ul(),fa(`gap`,4),Ul(),fa(`text`,n.locks().includes(e)?`Lock acquired`:`Lock released`)(`leadingIcon`,n.locks().includes(e)?`lock`:`lock-open`)(`color`,n.locks().includes(e)?`warn`:`neutral`)(`focusable`,!1)}}var U=class l{scrollLockService=m(kE);lockIds={first:yZ(),second:yZ()};lockControls=d4(`lockControls`,{read:ye});owners=[`first`,`second`];locks=W([]);constructor(){m(me).onDestroy(()=>this.releaseLocks())}toggleLock(t){this.locks().includes(t)?(this.scrollLockService.enableScroll(this.lockIds[t]),this.locks.update(e=>e.filter(n=>n!==t))):(this.locks().length||this.lockControls()?.nativeElement.scrollIntoView({block:`center`,inline:`nearest`,behavior:`instant`}),this.scrollLockService.disableScroll(this.lockIds[t],{handleTouchInput:!0}),this.locks.update(e=>[...e,t]))}releaseLocks(){this.scrollLockService.enableScroll(this.lockIds.first),this.scrollLockService.enableScroll(this.lockIds.second),this.locks.set([])}static ɵfac=function(e){return new(e||l)};static ɵcmp=$n({type:l,selectors:[[`app-scroll-lock`]],viewQuery:function(e,n){e&1&&Ly(n.lockControls,q,5,ye),e&2&&em()},decls:17,vars:7,consts:[[`lockControls`,``],[3,`gap`],[`title`,`Try two independent owners`,`message`,`Acquire both locks, then release one. Page scrolling stays locked until the final owner releases it. Release controls remain available below.`],[`title`,`Control the demo locks`],[`role`,`status`],[`direction`,`horizontal`,`role`,`group`,`aria-label`,`Demo scroll lock owners`,3,`wrap`,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`],[`minColumnWidth`,`16rem`],[3,`title`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[3,`text`,`leadingIcon`,`color`,`focusable`]],template:function(e,n){e&1&&(Os(0,`bx-stack`,1),Cy(1,`bx-alert`,2),Os(2,`bx-card`,3,0)(4,`bx-stack`,1)(5,`p`,4),XT(6),ba(),Os(7,`bx-stack`,5),Yb(8,A,2,2,`button`,6,xT),Os(10,`button`,7),br(`click`,function(){return n.releaseLocks()}),XT(11,` Release demo locks `),ba()()()(),Os(12,`bx-grid`,8),Yb(13,V,5,6,`bx-card`,9,xT),ba(),Os(15,`p`),XT(16,` Wheel and touch scrolling are blocked while a lock is held, and the page keeps its native scrollbar. Leaving this example releases its two locks; other overlays keep their own locks. `),ba()()),e&2&&(fa(`gap`,5),Ul(4),fa(`gap`,4),Ul(2),Ky(`Demo owners: `,n.locks().length,`. Page scrolling: `,n.scrollLockService.isScrollDisabled()?`locked`:`available`,`.`),Ul(),fa(`wrap`,!0)(`gap`,3),Ul(),Zb(n.owners),Ul(2),fa(`disabled`,n.locks().length===0),Ul(3),Zb(n.owners))},dependencies:[Vs,fe,Us,Gs,Xs,zs],styles:[`
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