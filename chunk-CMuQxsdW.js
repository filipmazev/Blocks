import{n as k,t as S}from"./chunk-DSA8G2tO.js";import{A as ht}from"./main-WPQT73HI.js";import{$ as Hn,Hn as Yc,K as G,Lr as h,Mi as p,N as E$1,Ri as q,Vi as qn,X as H$1,Xi as rr,ci as le,t as $,ur as bC,v as Be,xn as V,yr as dM,yt as L,zn as Xc}from"./chunk-cpWQWn_p.js";var w=(n,t)=>t.path;function F(n,t){if(n&1&&($(0,`pre`,3),Be(1,`code`,4),q()),n&2){let e=L().$implicit,a=L();G(`aria-label`,e.title),E$1(),le(`highlight`,a.codeContent(e))(`language`,e.language)}}function P(n,t){if(n&1&&($(0,`bx-tab`,1),bC(1,F,2,3,`ng-template`,2),q()),n&2){let e=t.$implicit;le(`label`,e.title)(`value`,e.path)}}var f=class n{files=h.required();codeContent(t){return S[t.path.replace(/^\/+/,``)]??`This snippet is unavailable: ${t.title}`}static ɵfac=function(e){return new(e||n)};static ɵcmp=H$1({type:n,selectors:[[`app-code`]],inputs:{files:[1,`files`]},decls:3,vars:0,consts:[[`variant`,`underline`,`ariaLabel`,`Code files`,1,`code-viewer`],[3,`label`,`value`],[`bxTabContent`,``],[`tabindex`,`0`,1,`playground-code-block`],[3,`highlight`,`language`]],template:function(e,a){e&1&&($(0,`bx-tabs`,0),Hn(1,P,2,2,`bx-tab`,1,w),q()),e&2&&(E$1(),qn(a.files()))},dependencies:[ht,dM,Xc,Yc],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
}
.code-viewer[_ngcontent-%COMP%] {
  --%NS%bx-tabs-max-panel-height: 45rem;
  --%NS%bx-tabs-panel-overflow: auto;
  background: var(--%NS%bx-bg-surface);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  border: 1px solid var(--%NS%bx-border-default);
  overflow: hidden;
}
.playground-code-block[_ngcontent-%COMP%] {
  margin: 0;
  border: 0;
  border-radius: 0;
  overflow: visible;
}`]})};function H(n,t){if(n&1&&Be(0,`app-readme`,5),n&2){let e=L();le(`path`,e.readmePath())}}function O(n,t){if(n&1&&Be(0,`app-code`,6),n&2){let e=L();le(`files`,e.codeFiles())}}var E=class n{nativeElement=p(V).nativeElement;matchHeight=h();codeFiles=h.required();readmePath=h.required();constructor(){rr(t=>{let e=this.matchHeight();if(!e)return;let a=()=>this.nativeElement.style.height=`${e.getBoundingClientRect().height}px`;a();let h=new ResizeObserver(a);h.observe(e),t(()=>{h.disconnect(),this.nativeElement.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=H$1({type:n,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:6,vars:0,consts:[[1,`info-container`],[`ariaLabel`,`Documentation and code examples`,1,`info-tabs`],[`label`,`Documentation`,`value`,`documentation`,`icon`,`file-braces`],[`bxTabContent`,``],[`label`,`Code Examples`,`value`,`code`,`icon`,`braces`,`color`,`accent`],[3,`path`],[3,`files`]],template:function(e,a){e&1&&($(0,`div`,0)(1,`bx-tabs`,1)(2,`bx-tab`,2),bC(3,H,1,1,`ng-template`,3),q(),$(4,`bx-tab`,4),bC(5,O,1,1,`ng-template`,3),q()()())},dependencies:[k,f,dM,Xc,Yc],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
  min-height: 0;
}
.info-container[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--%NS%bx-bg-surface) 86%, transparent);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  box-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
  border: 1px solid var(--%NS%bx-border-default);
  min-width: 0;
  padding: var(--%NS%bx-space-6, 1.5rem);
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.info-tabs[_ngcontent-%COMP%] {
  --%NS%bx-tabs-panel-overflow: auto;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
}`]})};export{E as t};