import{n as w$1,t as q}from"./chunk-CzAq6x0S.js";import{A as ht}from"./main-R2VAD5W5.js";import{Dr as m,Gr as q0,H as H$1,Mi as xr,Pr as ne,St as P$1,T as Dr,U as Hc,Y as J_,Yt as V,ai as ta,d as B,f as Bc,it as L,ni as se,x as D$1,yt as Oe,zr as p}from"./chunk-Cmma2g1C.js";var N=(n,t)=>t.path;function P(n,t){if(n&1&&(P$1(0,`pre`,3),Oe(1,`code`,4),L()),n&2){let e=se().$implicit,i=se();B(`aria-label`,e.title),D$1(),ne(`highlight`,i.codeContent(e))(`language`,e.language)}}function w(n,t){if(n&1&&(P$1(0,`bx-tab`,1),J_(1,P,2,3,`ng-template`,2),L()),n&2){let e=t.$implicit;ne(`label`,e.title)(`value`,e.path)}}var g=class n{files=m.required();codeContent(t){return q[t.path.replace(/^\/+/,``)]??`This snippet is unavailable: ${t.title}`}static ɵfac=function(e){return new(e||n)};static ɵcmp=H$1({type:n,selectors:[[`app-code`]],inputs:{files:[1,`files`]},decls:3,vars:0,consts:[[`variant`,`underline`,`ariaLabel`,`Code files`,1,`code-viewer`],[3,`label`,`value`],[`bxTabContent`,``],[`tabindex`,`0`,1,`playground-code-block`],[3,`highlight`,`language`]],template:function(e,i){e&1&&(P$1(0,`bx-tabs`,0),xr(1,w,2,2,`bx-tab`,1,N),L()),e&2&&(D$1(),Dr(i.files()))},dependencies:[ht,q0,Hc,Bc],styles:[`
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
}`]})};function H(n,t){if(n&1&&Oe(0,`app-readme`,5),n&2){let e=se();ne(`path`,e.readmePath())}}function O(n,t){if(n&1&&Oe(0,`app-code`,6),n&2){let e=se();ne(`files`,e.codeFiles())}}var D=class n{nativeElement=p(V).nativeElement;matchHeight=m();codeFiles=m.required();readmePath=m.required();constructor(){ta(t=>{let e=this.matchHeight();if(!e)return;let i=()=>this.nativeElement.style.height=`${e.getBoundingClientRect().height}px`;i();let h=new ResizeObserver(i);h.observe(e),t(()=>{h.disconnect(),this.nativeElement.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=H$1({type:n,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:6,vars:0,consts:[[1,`info-container`],[`ariaLabel`,`Documentation and code examples`,1,`info-tabs`],[`label`,`Documentation`,`value`,`documentation`,`icon`,`file-braces`],[`bxTabContent`,``],[`label`,`Code Examples`,`value`,`code`,`icon`,`braces`,`color`,`accent`],[3,`path`],[3,`files`]],template:function(e,i){e&1&&(P$1(0,`div`,0)(1,`bx-tabs`,1)(2,`bx-tab`,2),J_(3,H,1,1,`ng-template`,3),L(),P$1(4,`bx-tab`,4),J_(5,O,1,1,`ng-template`,3),L()()())},dependencies:[w$1,g,q0,Hc,Bc],styles:[`
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
}`]})};export{D as t};