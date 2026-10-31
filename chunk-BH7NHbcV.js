import{Ft as T_,Qr as se,Vn as de,Xn as f,Xt as Vx,Zt as W,_n as Yr,a as $l,at as Kr,er as g$1,ir as he,rr as gs,st as M,tn as Wl,vi as ye,xt as Q,yt as Pe,zt as U}from"./chunk-C74CBOi9.js";import{t as ht}from"./main-UM7HDCHR.js";import{n as w,t as q}from"./chunk-Du0uqn1q.js";var E=(n,t)=>t.path;function F(n,t){if(n&1&&(W(0,`pre`,3),Pe(1,`code`,4),Q()),n&2){let e=de().$implicit,o=de();ye(`aria-label`,e.title),M(),he(`highlight`,o.codeContent(e))(`language`,e.language)}}function I(n,t){if(n&1&&(W(0,`bx-tab`,1),T_(1,F,2,3,`ng-template`,2),Q()),n&2){let e=t.$implicit;he(`label`,e.title)(`value`,e.path)}}var g=class n{files=g$1.required();codeContent(t){return q[t.path.replace(/^\/+/,``)]??`This snippet is unavailable: ${t.title}`}static ɵfac=function(e){return new(e||n)};static ɵcmp=se({type:n,selectors:[[`app-code`]],inputs:{files:[1,`files`]},decls:3,vars:0,consts:[[`variant`,`underline`,`ariaLabel`,`Code files`,1,`code-viewer`],[3,`label`,`value`],[`bxTabContent`,``],[`tabindex`,`0`,1,`playground-code-block`],[3,`highlight`,`language`]],template:function(e,o){e&1&&(W(0,`bx-tabs`,0),Yr(1,I,2,2,`bx-tab`,1,E),Q()),e&2&&(M(),Kr(o.files()))},dependencies:[ht,Vx,Wl,$l],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
}
.code-viewer[_ngcontent-%COMP%] {
  --%NS%bx-tabs-max-panel-height: 45rem;
  --%NS%bx-tabs-panel-overflow: auto;
  background: var(--%NS%bx-bg-surface);
  border-radius: 0.5rem;
  border: 1px solid var(--%NS%bx-border-default);
  overflow: hidden;
}
.playground-code-block[_ngcontent-%COMP%] {
  margin: 0;
  border: 0;
  border-radius: 0;
  overflow: visible;
}`]})};function H(n,t){if(n&1&&Pe(0,`app-readme`,5),n&2){let e=de();he(`path`,e.readmePath())}}function O(n,t){if(n&1&&Pe(0,`app-code`,6),n&2){let e=de();he(`files`,e.codeFiles())}}var P=class n{element=f(U).nativeElement;matchHeight=g$1();codeFiles=g$1.required();readmePath=g$1.required();constructor(){gs(t=>{let e=this.matchHeight();if(!e)return;let o=()=>this.element.style.height=`${e.getBoundingClientRect().height}px`;o();let h=new ResizeObserver(o);h.observe(e),t(()=>{h.disconnect(),this.element.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=se({type:n,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:6,vars:0,consts:[[1,`info-container`],[`ariaLabel`,`Documentation and code examples`,1,`info-tabs`],[`label`,`Documentation`,`value`,`documentation`,`icon`,`file-braces`],[`bxTabContent`,``],[`label`,`Code Examples`,`value`,`code`,`icon`,`braces`,`color`,`accent`],[3,`path`],[3,`files`]],template:function(e,o){e&1&&(W(0,`div`,0)(1,`bx-tabs`,1)(2,`bx-tab`,2),T_(3,H,1,1,`ng-template`,3),Q(),W(4,`bx-tab`,4),T_(5,O,1,1,`ng-template`,3),Q()()())},dependencies:[w,g,Vx,Wl,$l],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
  min-height: 0;
}
.info-container[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--%NS%bx-bg-surface) 86%, transparent);
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--%NS%bx-border-default);
  min-width: 0;
  padding: 1.5rem;
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
}`]})};export{P as t};