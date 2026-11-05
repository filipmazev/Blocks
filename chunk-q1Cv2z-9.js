import{n as w$1,t as q}from"./chunk-DGgo5410.js";import{t as ht}from"./main-2D43OMMH.js";import{An as ae,Br as ne,Gr as p,Hr as ns,Q as L,Qn as g$1,R as H0,Sn as _,U as JC,Ui as zc,Vt as Sr,Yr as q$1,Zt as V,bt as P$1,d as B,qt as Uc,wn as _r,yt as Oe}from"./chunk-EuYK8zUg.js";var P=(n,t)=>t.path;function w(n,t){if(n&1&&(P$1(0,`pre`,3),Oe(1,`code`,4),L()),n&2){let e=ae().$implicit,i=ae();V(`aria-label`,e.title),_(),ne(`highlight`,i.codeContent(e))(`language`,e.language)}}function E(n,t){if(n&1&&(P$1(0,`bx-tab`,1),JC(1,w,2,3,`ng-template`,2),L()),n&2){let e=t.$implicit;ne(`label`,e.title)(`value`,e.path)}}var g=class n{files=g$1.required();codeContent(t){return q[t.path.replace(/^\/+/,``)]??`This snippet is unavailable: ${t.title}`}static ɵfac=function(e){return new(e||n)};static ɵcmp=B({type:n,selectors:[[`app-code`]],inputs:{files:[1,`files`]},decls:3,vars:0,consts:[[`variant`,`underline`,`ariaLabel`,`Code files`,1,`code-viewer`],[3,`label`,`value`],[`bxTabContent`,``],[`tabindex`,`0`,1,`playground-code-block`],[3,`highlight`,`language`]],template:function(e,i){e&1&&(P$1(0,`bx-tabs`,0),Sr(1,E,2,2,`bx-tab`,1,P),L()),e&2&&(_(),_r(i.files()))},dependencies:[ht,H0,Uc,zc],styles:[`
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
}`]})};function H(n,t){if(n&1&&Oe(0,`app-readme`,5),n&2){let e=ae();ne(`path`,e.readmePath())}}function O(n,t){if(n&1&&Oe(0,`app-code`,6),n&2){let e=ae();ne(`files`,e.codeFiles())}}var M=class n{element=p(q$1).nativeElement;matchHeight=g$1();codeFiles=g$1.required();readmePath=g$1.required();constructor(){ns(t=>{let e=this.matchHeight();if(!e)return;let i=()=>this.element.style.height=`${e.getBoundingClientRect().height}px`;i();let h=new ResizeObserver(i);h.observe(e),t(()=>{h.disconnect(),this.element.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=B({type:n,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:6,vars:0,consts:[[1,`info-container`],[`ariaLabel`,`Documentation and code examples`,1,`info-tabs`],[`label`,`Documentation`,`value`,`documentation`,`icon`,`file-braces`],[`bxTabContent`,``],[`label`,`Code Examples`,`value`,`code`,`icon`,`braces`,`color`,`accent`],[3,`path`],[3,`files`]],template:function(e,i){e&1&&(P$1(0,`div`,0)(1,`bx-tabs`,1)(2,`bx-tab`,2),JC(3,H,1,1,`ng-template`,3),L(),P$1(4,`bx-tab`,4),JC(5,O,1,1,`ng-template`,3),L()()())},dependencies:[w$1,g,H0,Uc,zc],styles:[`
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
}`]})};export{M as t};