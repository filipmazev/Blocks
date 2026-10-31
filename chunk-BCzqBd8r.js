import{Ar as m,Fr as ne,Gr as p,L as H$1,Lt as T,Qr as q_,Sr as k,Ut as V,Xt as XE,an as Z,f as D,gi as tc,it as L,mn as _s,pn as _e,ri as rc,sn as Zn,tt as Kn}from"./chunk-BAxYodTU.js";import{t as ht}from"./main-7ZEREQS6.js";import{n as w,t as q}from"./chunk-B2nwrpHF.js";var E=(n,t)=>t.path;function F(n,t){if(n&1&&(T(0,`pre`,3),_e(1,`code`,4),k()),n&2){let e=ne().$implicit,o=ne();L(`aria-label`,e.title),D(),Z(`highlight`,o.codeContent(e))(`language`,e.language)}}function I(n,t){if(n&1&&(T(0,`bx-tab`,1),q_(1,F,2,3,`ng-template`,2),k()),n&2){let e=t.$implicit;Z(`label`,e.title)(`value`,e.path)}}var g=class n{files=m.required();codeContent(t){return q[t.path.replace(/^\/+/,``)]??`This snippet is unavailable: ${t.title}`}static ɵfac=function(e){return new(e||n)};static ɵcmp=V({type:n,selectors:[[`app-code`]],inputs:{files:[1,`files`]},decls:3,vars:0,consts:[[`variant`,`underline`,`ariaLabel`,`Code files`,1,`code-viewer`],[3,`label`,`value`],[`bxTabContent`,``],[`tabindex`,`0`,1,`playground-code-block`],[3,`highlight`,`language`]],template:function(e,o){e&1&&(T(0,`bx-tabs`,0),Kn(1,I,2,2,`bx-tab`,1,E),k()),e&2&&(D(),Zn(o.files()))},dependencies:[ht,XE,rc,tc],styles:[`
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
}`]})};function H(n,t){if(n&1&&_e(0,`app-readme`,5),n&2){let e=ne();Z(`path`,e.readmePath())}}function O(n,t){if(n&1&&_e(0,`app-code`,6),n&2){let e=ne();Z(`files`,e.codeFiles())}}var P=class n{element=p(H$1).nativeElement;matchHeight=m();codeFiles=m.required();readmePath=m.required();constructor(){_s(t=>{let e=this.matchHeight();if(!e)return;let o=()=>this.element.style.height=`${e.getBoundingClientRect().height}px`;o();let h=new ResizeObserver(o);h.observe(e),t(()=>{h.disconnect(),this.element.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=V({type:n,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:6,vars:0,consts:[[1,`info-container`],[`ariaLabel`,`Documentation and code examples`,1,`info-tabs`],[`label`,`Documentation`,`value`,`documentation`,`icon`,`file-braces`],[`bxTabContent`,``],[`label`,`Code Examples`,`value`,`code`,`icon`,`braces`,`color`,`accent`],[3,`path`],[3,`files`]],template:function(e,o){e&1&&(T(0,`div`,0)(1,`bx-tabs`,1)(2,`bx-tab`,2),q_(3,H,1,1,`ng-template`,3),k(),T(4,`bx-tab`,4),q_(5,O,1,1,`ng-template`,3),k()()())},dependencies:[w,g,XE,rc,tc],styles:[`
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