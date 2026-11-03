import{B as H0,Bi as xr,Cr as j,Et as P$1,Ft as Qs,Ht as S,Kt as Sr,Nn as ae,V as Hc,ei as p,m as Bc,nr as ex,p as B,st as L,wt as Oe,yi as te,z as H$1,zr as m}from"./chunk-BjKrh6Fv.js";import{t as ht}from"./main-IT46HQ5I.js";import{n as w,t as q}from"./chunk-Bf8a64Dt.js";var E=(n,t)=>t.path;function F(n,t){if(n&1&&(P$1(0,`pre`,3),Oe(1,`code`,4),L()),n&2){let e=ae().$implicit,o=ae();j(`aria-label`,e.title),S(),te(`highlight`,o.codeContent(e))(`language`,e.language)}}function I(n,t){if(n&1&&(P$1(0,`bx-tab`,1),ex(1,F,2,3,`ng-template`,2),L()),n&2){let e=t.$implicit;te(`label`,e.title)(`value`,e.path)}}var g=class n{files=m.required();codeContent(t){return q[t.path.replace(/^\/+/,``)]??`This snippet is unavailable: ${t.title}`}static ɵfac=function(e){return new(e||n)};static ɵcmp=H$1({type:n,selectors:[[`app-code`]],inputs:{files:[1,`files`]},decls:3,vars:0,consts:[[`variant`,`underline`,`ariaLabel`,`Code files`,1,`code-viewer`],[3,`label`,`value`],[`bxTabContent`,``],[`tabindex`,`0`,1,`playground-code-block`],[3,`highlight`,`language`]],template:function(e,o){e&1&&(P$1(0,`bx-tabs`,0),xr(1,I,2,2,`bx-tab`,1,E),L()),e&2&&(S(),Sr(o.files()))},dependencies:[ht,H0,Hc,Bc],styles:[`
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
}`]})};function H(n,t){if(n&1&&Oe(0,`app-readme`,5),n&2){let e=ae();te(`path`,e.readmePath())}}function O(n,t){if(n&1&&Oe(0,`app-code`,6),n&2){let e=ae();te(`files`,e.codeFiles())}}var P=class n{element=p(B).nativeElement;matchHeight=m();codeFiles=m.required();readmePath=m.required();constructor(){Qs(t=>{let e=this.matchHeight();if(!e)return;let o=()=>this.element.style.height=`${e.getBoundingClientRect().height}px`;o();let h=new ResizeObserver(o);h.observe(e),t(()=>{h.disconnect(),this.element.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=H$1({type:n,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:6,vars:0,consts:[[1,`info-container`],[`ariaLabel`,`Documentation and code examples`,1,`info-tabs`],[`label`,`Documentation`,`value`,`documentation`,`icon`,`file-braces`],[`bxTabContent`,``],[`label`,`Code Examples`,`value`,`code`,`icon`,`braces`,`color`,`accent`],[3,`path`],[3,`files`]],template:function(e,o){e&1&&(P$1(0,`div`,0)(1,`bx-tabs`,1)(2,`bx-tab`,2),ex(3,H,1,1,`ng-template`,3),L(),P$1(4,`bx-tab`,4),ex(5,O,1,1,`ng-template`,3),L()()())},dependencies:[w,g,H0,Hc,Bc],styles:[`
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