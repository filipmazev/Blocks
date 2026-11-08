import{n as k,t as S}from"./chunk-BpRItq3P.js";import{A as ht}from"./main-HW2XYL5W.js";import{Bt as P$1,Cn as V,Er as g$1,Ji as tr,Mr as hS,N as Fe,Pa as zn,Si as p,W as H$1,Zr as k$1,ct as Kc,er as aM,hn as U,ka as z,qr as jn,t as $,yi as oe,z as Gc}from"./chunk-Dt37D5SH.js";var N=(n,t)=>t.path;function P(n,t){if(n&1&&(U(0,`pre`,3),Fe(1,`code`,4),H$1()),n&2){let e=P$1().$implicit,i=P$1();$(`aria-label`,e.title),k$1(),oe(`highlight`,i.codeContent(e))(`language`,e.language)}}function w(n,t){if(n&1&&(U(0,`bx-tab`,1),hS(1,P,2,3,`ng-template`,2),H$1()),n&2){let e=t.$implicit;oe(`label`,e.title)(`value`,e.path)}}var g=class n{files=g$1.required();codeContent(t){return S[t.path.replace(/^\/+/,``)]??`This snippet is unavailable: ${t.title}`}static ɵfac=function(e){return new(e||n)};static ɵcmp=z({type:n,selectors:[[`app-code`]],inputs:{files:[1,`files`]},decls:3,vars:0,consts:[[`variant`,`underline`,`ariaLabel`,`Code files`,1,`code-viewer`],[3,`label`,`value`],[`bxTabContent`,``],[`tabindex`,`0`,1,`playground-code-block`],[3,`highlight`,`language`]],template:function(e,i){e&1&&(U(0,`bx-tabs`,0),jn(1,w,2,2,`bx-tab`,1,N),H$1()),e&2&&(k$1(),zn(i.files()))},dependencies:[ht,aM,Kc,Gc],styles:[`
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
}`]})};function H(n,t){if(n&1&&Fe(0,`app-readme`,5),n&2){let e=P$1();oe(`path`,e.readmePath())}}function O(n,t){if(n&1&&Fe(0,`app-code`,6),n&2){let e=P$1();oe(`files`,e.codeFiles())}}var D=class n{nativeElement=p(V).nativeElement;matchHeight=g$1();codeFiles=g$1.required();readmePath=g$1.required();constructor(){tr(t=>{let e=this.matchHeight();if(!e)return;let i=()=>this.nativeElement.style.height=`${e.getBoundingClientRect().height}px`;i();let h=new ResizeObserver(i);h.observe(e),t(()=>{h.disconnect(),this.nativeElement.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=z({type:n,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:6,vars:0,consts:[[1,`info-container`],[`ariaLabel`,`Documentation and code examples`,1,`info-tabs`],[`label`,`Documentation`,`value`,`documentation`,`icon`,`file-braces`],[`bxTabContent`,``],[`label`,`Code Examples`,`value`,`code`,`icon`,`braces`,`color`,`accent`],[3,`path`],[3,`files`]],template:function(e,i){e&1&&(U(0,`div`,0)(1,`bx-tabs`,1)(2,`bx-tab`,2),hS(3,H,1,1,`ng-template`,3),H$1(),U(4,`bx-tab`,4),hS(5,O,1,1,`ng-template`,3),H$1()()())},dependencies:[k,g,aM,Kc,Gc],styles:[`
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