import"./main-2GBJQHUZ.js";import{r as Z}from"./chunk-DUDY88j1.js";import{Ai as tt,Bt as QM,Di as te,F as G,Ft as Pi,Jt as Se,Oi as ti,Q as JM,Vi as wr,Xi as xr,ar as ee,bn as X,ci as p,ea as ye,fi as qM,hn as Wa,ia as zD,in as U$1,jr as k,ki as to,kn as ZM,lr as fn,lt as M,mr as hS,na as yr,oi as oe,or as eo,pi as qa,tt as KM,vt as Ne,wr as j,yi as rr}from"./chunk-CfQ5k3AW.js";var q=[`lockControls`];function A(r,t){if(r&1){let e=Pi();te(0,`button`,11),Ne(`click`,function(){let v=eo(e).$implicit,j=U$1();return to(j.toggleLock(v))}),Se(1),oe()}if(r&2){let e=t.$implicit,n=U$1();G(`aria-pressed`,n.locks().includes(e)),k(),rr(` `,n.locks().includes(e)?`Release `+e+` lock`:`Acquire `+e+` lock`,` `)}}function V(r,t){if(r&1&&(te(0,`bx-card`,10)(1,`bx-stack`,1),tt(2,`bx-tag`,12),te(3,`p`),Se(4,`Each owner keeps a stable ID and releases only its own lock.`),oe()()()),r&2){let e=t.$implicit,n=U$1();ye(`title`,e===`first`?`First owner`:`Second owner`),k(),ye(`gap`,4),k(),ye(`text`,n.locks().includes(e)?`Lock acquired`:`Lock released`)(`leadingIcon`,n.locks().includes(e)?`lock`:`lock-open`)(`color`,n.locks().includes(e)?`warn`:`neutral`)(`focusable`,!1)}}var U=class r{scrollLockService=p(zD);lockIds={first:ti(),second:ti()};lockControls=Wa(`lockControls`,{read:X});owners=[`first`,`second`];locks=M([]);constructor(){p(ee).onDestroy(()=>this.releaseLocks())}toggleLock(t){this.locks().includes(t)?(this.scrollLockService.enableScroll(this.lockIds[t]),this.locks.update(e=>e.filter(n=>n!==t))):(this.locks().length||this.lockControls()?.nativeElement.scrollIntoView({block:`center`,inline:`nearest`,behavior:`instant`}),this.scrollLockService.disableScroll(this.lockIds[t],{handleTouchInput:!1}),this.locks.update(e=>[...e,t]))}releaseLocks(){this.scrollLockService.enableScroll(this.lockIds.first),this.scrollLockService.enableScroll(this.lockIds.second),this.locks.set([])}static ɵfac=function(e){return new(e||r)};static ɵcmp=j({type:r,selectors:[[`app-scroll-lock`]],viewQuery:function(e,n){e&1&&wr(n.lockControls,q,5,X),e&2&&fn()},decls:17,vars:7,consts:[[`lockControls`,``],[3,`gap`],[`title`,`Try two independent owners`,`message`,`Acquire both locks, then release one. Page scrolling stays locked until the final owner releases it. Release controls remain available below.`],[`title`,`Control the demo locks`,1,`lock-controls`],[1,`lock-controls-content`,3,`gap`],[`role`,`status`],[`direction`,`horizontal`,`role`,`group`,`aria-label`,`Demo scroll lock owners`,3,`wrap`,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`],[`minColumnWidth`,`16rem`],[3,`title`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[3,`text`,`leadingIcon`,`color`,`focusable`]],template:function(e,n){e&1&&(te(0,`bx-stack`,1),tt(1,`bx-alert`,2),te(2,`bx-card`,3,0)(4,`bx-stack`,4)(5,`p`,5),Se(6),oe(),te(7,`bx-stack`,6),yr(8,A,2,2,`button`,7,qa),te(10,`button`,8),Ne(`click`,function(){return n.releaseLocks()}),Se(11,` Release demo locks `),oe()()()(),te(12,`bx-grid`,9),yr(13,V,5,6,`bx-card`,10,qa),oe(),te(15,`p`),Se(16,`Touch input stays enabled. Leaving this example releases its two locks; other overlays keep their own locks.`),oe()()),e&2&&(ye(`gap`,5),k(4),ye(`gap`,4),k(2),hS(`Demo owners: `,n.locks().length,`. Page scrolling: `,n.scrollLockService.isScrollDisabled()?`locked`:`available`,`.`),k(),ye(`wrap`,!0)(`gap`,3),k(),xr(n.owners),k(2),ye(`disabled`,n.locks().length===0),k(3),xr(n.owners))},dependencies:[KM,Z,ZM,QM,JM,qM],styles:[`
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