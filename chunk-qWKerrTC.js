import"./main-UKTQCW3K.js";import{r as Z}from"./chunk-CjIjxXph.js";import{$t as Te,An as Z$1,Dr as gr,Hn as ae,Jr as jn,Nn as _,Nr as hr,Ri as sM,Rr as iM,Sn as XD,St as Mt,Ur as j,W as H,Xn as bn,an as V$1,b as D,bn as Wr,dn as Vn,hn as Wa,ia as vn,j as F,ln as Ve,mr as er,nn as U$1,or as dM,qi as tM,qt as SS,ra as ve,vi as p,ya as z,yi as pM,yt as Mn}from"./chunk-DhMqzCIY.js";var q=[`lockControls`];function A(r,t){if(r&1){let e=hr();j(0,`button`,11),ve(`click`,function(){let v=bn(e).$implicit,j=F();return vn(j.toggleLock(v))}),Te(1),U$1()}if(r&2){let e=t.$implicit,n=F();H(`aria-pressed`,n.locks().includes(e)),D(),gr(` `,n.locks().includes(e)?`Release `+e+` lock`:`Acquire `+e+` lock`,` `)}}function V(r,t){if(r&1&&(j(0,`bx-card`,10)(1,`bx-stack`,1),Ve(2,`bx-tag`,12),j(3,`p`),Te(4,`Each owner keeps a stable ID and releases only its own lock.`),U$1()()()),r&2){let e=t.$implicit,n=F();ae(`title`,e===`first`?`First owner`:`Second owner`),D(),ae(`gap`,4),D(),ae(`text`,n.locks().includes(e)?`Lock acquired`:`Lock released`)(`leadingIcon`,n.locks().includes(e)?`lock`:`lock-open`)(`color`,n.locks().includes(e)?`warn`:`neutral`)(`focusable`,!1)}}var U=class r{scrollLockService=p(XD);lockIds={first:Wr(),second:Wr()};lockControls=er(`lockControls`,{read:z});owners=[`first`,`second`];locks=_([]);constructor(){p(Z$1).onDestroy(()=>this.releaseLocks())}toggleLock(t){this.locks().includes(t)?(this.scrollLockService.enableScroll(this.lockIds[t]),this.locks.update(e=>e.filter(n=>n!==t))):(this.locks().length||this.lockControls()?.nativeElement.scrollIntoView({block:`center`,inline:`nearest`,behavior:`instant`}),this.scrollLockService.disableScroll(this.lockIds[t],{handleTouchInput:!1}),this.locks.update(e=>[...e,t]))}releaseLocks(){this.scrollLockService.enableScroll(this.lockIds.first),this.scrollLockService.enableScroll(this.lockIds.second),this.locks.set([])}static ɵfac=function(e){return new(e||r)};static ɵcmp=V$1({type:r,selectors:[[`app-scroll-lock`]],viewQuery:function(e,n){e&1&&Mn(n.lockControls,q,5,z),e&2&&Mt()},decls:17,vars:7,consts:[[`lockControls`,``],[3,`gap`],[`title`,`Try two independent owners`,`message`,`Acquire both locks, then release one. Page scrolling stays locked until the final owner releases it. Release controls remain available below.`],[`title`,`Control the demo locks`,1,`lock-controls`],[1,`lock-controls-content`,3,`gap`],[`role`,`status`],[`direction`,`horizontal`,`role`,`group`,`aria-label`,`Demo scroll lock owners`,3,`wrap`,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`],[`minColumnWidth`,`16rem`],[3,`title`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[3,`text`,`leadingIcon`,`color`,`focusable`]],template:function(e,n){e&1&&(j(0,`bx-stack`,1),Ve(1,`bx-alert`,2),j(2,`bx-card`,3,0)(4,`bx-stack`,4)(5,`p`,5),Te(6),U$1(),j(7,`bx-stack`,6),Vn(8,A,2,2,`button`,7,Wa),j(10,`button`,8),ve(`click`,function(){return n.releaseLocks()}),Te(11,` Release demo locks `),U$1()()()(),j(12,`bx-grid`,9),Vn(13,V,5,6,`bx-card`,10,Wa),U$1(),j(15,`p`),Te(16,`Touch input stays enabled. Leaving this example releases its two locks; other overlays keep their own locks.`),U$1()()),e&2&&(ae(`gap`,5),D(4),ae(`gap`,4),D(2),SS(`Demo owners: `,n.locks().length,`. Page scrolling: `,n.scrollLockService.isScrollDisabled()?`locked`:`available`,`.`),D(),ae(`wrap`,!0)(`gap`,3),D(),jn(n.owners),D(2),ae(`disabled`,n.locks().length===0),D(3),jn(n.owners))},dependencies:[iM,Z,sM,dM,pM,tM],styles:[`
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