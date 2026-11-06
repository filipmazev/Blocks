import{n as w$1,t as S}from"./chunk-DTPx3lgi.js";import{A as ht}from"./main-2GBJQHUZ.js";import{Ai as tt,Cn as Xw,Di as te,Et as Oc,F as G,I as GS,Ut as Rc,Xi as xr,bn as X,ci as p,ea as ye,fr as g$1,in as U,jr as k,na as yr,oi as oe,on as UM,wr as j}from"./chunk-CfQ5k3AW.js";var N=(n,t)=>t.path;function P(n,t){if(n&1&&(te(0,`pre`,3),tt(1,`code`,4),oe()),n&2){let e=U().$implicit,i=U();G(`aria-label`,e.title),k(),ye(`highlight`,i.codeContent(e))(`language`,e.language)}}function w(n,t){if(n&1&&(te(0,`bx-tab`,1),Xw(1,P,2,3,`ng-template`,2),oe()),n&2){let e=t.$implicit;ye(`label`,e.title)(`value`,e.path)}}var g=class n{files=g$1.required();codeContent(t){return S[t.path.replace(/^\/+/,``)]??`This snippet is unavailable: ${t.title}`}static ɵfac=function(e){return new(e||n)};static ɵcmp=j({type:n,selectors:[[`app-code`]],inputs:{files:[1,`files`]},decls:3,vars:0,consts:[[`variant`,`underline`,`ariaLabel`,`Code files`,1,`code-viewer`],[3,`label`,`value`],[`bxTabContent`,``],[`tabindex`,`0`,1,`playground-code-block`],[3,`highlight`,`language`]],template:function(e,i){e&1&&(te(0,`bx-tabs`,0),yr(1,w,2,2,`bx-tab`,1,N),oe()),e&2&&(k(),xr(i.files()))},dependencies:[ht,UM,Oc,Rc],styles:[`
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
}`]})};function H(n,t){if(n&1&&tt(0,`app-readme`,5),n&2){let e=U();ye(`path`,e.readmePath())}}function O(n,t){if(n&1&&tt(0,`app-code`,6),n&2){let e=U();ye(`files`,e.codeFiles())}}var D=class n{nativeElement=p(X).nativeElement;matchHeight=g$1();codeFiles=g$1.required();readmePath=g$1.required();constructor(){GS(t=>{let e=this.matchHeight();if(!e)return;let i=()=>this.nativeElement.style.height=`${e.getBoundingClientRect().height}px`;i();let h=new ResizeObserver(i);h.observe(e),t(()=>{h.disconnect(),this.nativeElement.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=j({type:n,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:6,vars:0,consts:[[1,`info-container`],[`ariaLabel`,`Documentation and code examples`,1,`info-tabs`],[`label`,`Documentation`,`value`,`documentation`,`icon`,`file-braces`],[`bxTabContent`,``],[`label`,`Code Examples`,`value`,`code`,`icon`,`braces`,`color`,`accent`],[3,`path`],[3,`files`]],template:function(e,i){e&1&&(te(0,`div`,0)(1,`bx-tabs`,1)(2,`bx-tab`,2),Xw(3,H,1,1,`ng-template`,3),oe(),te(4,`bx-tab`,4),Xw(5,O,1,1,`ng-template`,3),oe()()())},dependencies:[w$1,g,UM,Oc,Rc],styles:[`
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