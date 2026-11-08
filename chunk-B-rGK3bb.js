import{q as Z}from"./main-BD2MVIMM.js";import{$ as Hn,K as G,Ma as yr,Mi as p,Mr as gM,Mt as Nn,N as E,Pi as pM,Pt as OC,Ri as q$1,Si as no,Ta as xr,Vi as qn,X as H,_i as na,at as It,b as CM,ci as le,fn as Te,fr as c_,gn as U$1,ja as ye,ni as kM,p as At,pa as vM,pi as mn,t as $,v as Be,xn as V$1,y as C,yt as L,zt as Ot}from"./chunk-cpWQWn_p.js";var q=[`lockControls`];function A(l,t){if(l&1){let e=xr();$(0,`button`,11),ye(`click`,function(){let v=At(e).$implicit,j=L();return Ot(j.toggleLock(v))}),Te(1),q$1()}if(l&2){let e=t.$implicit,n=L();G(`aria-pressed`,n.locks().includes(e)),E(),yr(` `,n.locks().includes(e)?`Release `+e+` lock`:`Acquire `+e+` lock`,` `)}}function V(l,t){if(l&1&&($(0,`bx-card`,10)(1,`bx-stack`,1),Be(2,`bx-tag`,12),$(3,`p`),Te(4,`Each owner keeps a stable ID and releases only its own lock.`),q$1()()()),l&2){let e=t.$implicit,n=L();le(`title`,e===`first`?`First owner`:`Second owner`),E(),le(`gap`,4),E(),le(`text`,n.locks().includes(e)?`Lock acquired`:`Lock released`)(`leadingIcon`,n.locks().includes(e)?`lock`:`lock-open`)(`color`,n.locks().includes(e)?`warn`:`neutral`)(`focusable`,!1)}}var U=class l{scrollLockService=p(c_);lockIds={first:no(),second:no()};lockControls=mn(`lockControls`,{read:V$1});owners=[`first`,`second`];locks=C([]);constructor(){p(U$1).onDestroy(()=>this.releaseLocks())}toggleLock(t){this.locks().includes(t)?(this.scrollLockService.enableScroll(this.lockIds[t]),this.locks.update(e=>e.filter(n=>n!==t))):(this.locks().length||this.lockControls()?.nativeElement.scrollIntoView({block:`center`,inline:`nearest`,behavior:`instant`}),this.scrollLockService.disableScroll(this.lockIds[t],{handleTouchInput:!1}),this.locks.update(e=>[...e,t]))}releaseLocks(){this.scrollLockService.enableScroll(this.lockIds.first),this.scrollLockService.enableScroll(this.lockIds.second),this.locks.set([])}static ɵfac=function(e){return new(e||l)};static ɵcmp=H({type:l,selectors:[[`app-scroll-lock`]],viewQuery:function(e,n){e&1&&Nn(n.lockControls,q,5,V$1),e&2&&It()},decls:17,vars:7,consts:[[`lockControls`,``],[3,`gap`],[`title`,`Try two independent owners`,`message`,`Acquire both locks, then release one. Page scrolling stays locked until the final owner releases it. Release controls remain available below.`],[`title`,`Control the demo locks`,1,`lock-controls`],[1,`lock-controls-content`,3,`gap`],[`role`,`status`],[`direction`,`horizontal`,`role`,`group`,`aria-label`,`Demo scroll lock owners`,3,`wrap`,`gap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`],[`minColumnWidth`,`16rem`],[3,`title`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[3,`text`,`leadingIcon`,`color`,`focusable`]],template:function(e,n){e&1&&($(0,`bx-stack`,1),Be(1,`bx-alert`,2),$(2,`bx-card`,3,0)(4,`bx-stack`,4)(5,`p`,5),Te(6),q$1(),$(7,`bx-stack`,6),Hn(8,A,2,2,`button`,7,na),$(10,`button`,8),ye(`click`,function(){return n.releaseLocks()}),Te(11,` Release demo locks `),q$1()()()(),$(12,`bx-grid`,9),Hn(13,V,5,6,`bx-card`,10,na),q$1(),$(15,`p`),Te(16,`Touch input stays enabled. Leaving this example releases its two locks; other overlays keep their own locks.`),q$1()()),e&2&&(le(`gap`,5),E(4),le(`gap`,4),E(2),OC(`Demo owners: `,n.locks().length,`. Page scrolling: `,n.scrollLockService.isScrollDisabled()?`locked`:`available`,`.`),E(),le(`wrap`,!0)(`gap`,3),E(),qn(n.owners),E(2),le(`disabled`,n.locks().length===0),E(3),qn(n.owners))},dependencies:[gM,Z,vM,kM,CM,pM],styles:[`
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
}`]})};export{U as ScrollLock};