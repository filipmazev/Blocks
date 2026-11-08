import{q as Z}from"./main-HW2XYL5W.js";import{Ar as gr,Bt as P,Cn as V$1,Cr as es,D as E,Et as NS,In as Xr,N as Fe,Oi as q$1,Pa as zn,Pr as iD,Si as p,Ti as pM,W as H,Zr as k,_a as xe,cr as bn,dn as Tn,et as It,hn as U$1,ii as lM,jr as hM,ka as z,na as vM,pi as mr,qr as jn,t as $,u as At,un as Te,xa as yM,yi as oe,zt as Ot}from"./chunk-Dt37D5SH.js";var q=[`lockControls`];function A(r,t){if(r&1){let e=gr();U$1(0,`button`,11),xe(`click`,function(){let v=At(e).$implicit,j=P();return Ot(j.toggleLock(v))}),Te(1),H()}if(r&2){let e=t.$implicit,n=P();$(`aria-pressed`,n.locks().includes(e)),k(),mr(` `,n.locks().includes(e)?`Release `+e+` lock`:`Acquire `+e+` lock`,` `)}}function V(r,t){if(r&1&&(U$1(0,`bx-card`,10)(1,`bx-stack`,1),Fe(2,`bx-tag`,12),U$1(3,`p`),Te(4,`Each owner keeps a stable ID and releases only its own lock.`),H()()()),r&2){let e=t.$implicit,n=P();oe(`title`,e===`first`?`First owner`:`Second owner`),k(),oe(`gap`,4),k(),oe(`text`,n.locks().includes(e)?`Lock acquired`:`Lock released`)(`leadingIcon`,n.locks().includes(e)?`lock`:`lock-open`)(`color`,n.locks().includes(e)?`warn`:`neutral`)(`focusable`,!1)}}var U=class r{scrollLockService=p(iD);lockIds={first:Xr(),second:Xr()};lockControls=bn(`lockControls`,{read:V$1});owners=[`first`,`second`];locks=E([]);constructor(){p(q$1).onDestroy(()=>this.releaseLocks())}toggleLock(t){this.locks().includes(t)?(this.scrollLockService.enableScroll(this.lockIds[t]),this.locks.update(e=>e.filter(n=>n!==t))):(this.locks().length||this.lockControls()?.nativeElement.scrollIntoView({block:`center`,inline:`nearest`,behavior:`instant`}),this.scrollLockService.disableScroll(this.lockIds[t],{handleTouchInput:!1}),this.locks.update(e=>[...e,t]))}releaseLocks(){this.scrollLockService.enableScroll(this.lockIds.first),this.scrollLockService.enableScroll(this.lockIds.second),this.locks.set([])}static ɵfac=function(e){return new(e||r)};static ɵcmp=z({type:r,selectors:[[`app-scroll-lock`]],viewQuery:function(e,n){e&1&&Tn(n.lockControls,q,5,V$1),e&2&&It()},decls:17,vars:7,consts:[[`lockControls`,``],[3,`gap`],[`title`,`Try two independent owners`,`message`,`Acquire both locks, then release one. Page scrolling stays locked until the final owner releases it. Release controls remain available below.`],[`title`,`Control the demo locks`,1,`lock-controls`],[1,`lock-controls-content`,3,`gap`],[`role`,`status`],[`direction`,`horizontal`,`role`,`group`,`aria-label`,`Demo scroll lock owners`,3,`wrap`,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`],[`minColumnWidth`,`16rem`],[3,`title`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[3,`text`,`leadingIcon`,`color`,`focusable`]],template:function(e,n){e&1&&(U$1(0,`bx-stack`,1),Fe(1,`bx-alert`,2),U$1(2,`bx-card`,3,0)(4,`bx-stack`,4)(5,`p`,5),Te(6),H(),U$1(7,`bx-stack`,6),jn(8,A,2,2,`button`,7,es),U$1(10,`button`,8),xe(`click`,function(){return n.releaseLocks()}),Te(11,` Release demo locks `),H()()()(),U$1(12,`bx-grid`,9),jn(13,V,5,6,`bx-card`,10,es),H(),U$1(15,`p`),Te(16,`Touch input stays enabled. Leaving this example releases its two locks; other overlays keep their own locks.`),H()()),e&2&&(oe(`gap`,5),k(4),oe(`gap`,4),k(2),NS(`Demo owners: `,n.locks().length,`. Page scrolling: `,n.scrollLockService.isScrollDisabled()?`locked`:`available`,`.`),k(),oe(`wrap`,!0)(`gap`,3),k(),zn(n.owners),k(2),oe(`disabled`,n.locks().length===0),k(3),zn(n.owners))},dependencies:[pM,Z,hM,vM,yM,lM],styles:[`
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
}`]})};export{U as ScrollLock};