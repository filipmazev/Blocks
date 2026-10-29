import{$ as K,Bt as bl,F as Du,Fn as vl,Ht as ce,Jn as zo,Un as xe,_n as me,a as ht,en as h,hn as lS,j as D,jn as re,kn as qo,on as it,tt as Ke,ut as Ow,zn as we}from"./main-ERZQBNJW.js";import{n as T,t as S$1}from"./chunk-DA_pRWAu.js";var N=(n,t)=>t.path;function S(n,t){if(n&1&&(ce(0,`pre`),it(1,`code`,3),me()),n&2){let e=xe().$implicit,i=xe();re(),Ke(`highlight`,i.codeContent(e))(`language`,e.language)}}function w(n,t){if(n&1&&(ce(0,`bx-tab`,1),Ow(1,S,2,2,`ng-template`,2),me()),n&2){let e=t.$implicit;Ke(`label`,e.title)(`value`,e.path)}}var g=class n{files=D.required();codeContent(t){return S$1[t.path.replace(/^\/+/,``)]??`This snippet is unavailable: ${t.title}`}static ɵfac=function(e){return new(e||n)};static ɵcmp=we({type:n,selectors:[[`app-code`]],inputs:{files:[1,`files`]},decls:3,vars:0,consts:[[`variant`,`underline`,`ariaLabel`,`Code files`,1,`code-viewer`],[3,`label`,`value`],[`bxTabContent`,``],[3,`highlight`,`language`]],template:function(e,i){e&1&&(ce(0,`bx-tabs`,0),qo(1,w,2,2,`bx-tab`,1,N),me()),e&2&&(re(),zo(i.files()))},dependencies:[ht,lS,bl,vl],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
}
.code-viewer[_ngcontent-%COMP%] {
  --%NS%bx-tabs-max-panel-height: 45rem;
  background: var(--%NS%bx-bg-surface);
  border-radius: 0.5rem;
  border: 1px solid var(--%NS%bx-border-default);
  overflow: hidden;
}
[_nghost-%COMP%]     pre {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.7;
}
[_nghost-%COMP%]     pre code.hljs {
  padding: 1rem;
  min-width: 100%;
}`]})};function I(n,t){if(n&1&&it(0,`app-readme`,5),n&2){let e=xe();Ke(`path`,e.readmePath())}}function O(n,t){if(n&1&&it(0,`app-code`,6),n&2){let e=xe();Ke(`files`,e.codeFiles())}}var P=class n{element=h(K).nativeElement;matchHeight=D();codeFiles=D.required();readmePath=D.required();constructor(){Du(t=>{let e=this.matchHeight();if(!e)return;let i=()=>this.element.style.height=`${e.getBoundingClientRect().height}px`;i();let u=new ResizeObserver(i);u.observe(e),t(()=>{u.disconnect(),this.element.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=we({type:n,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:6,vars:0,consts:[[1,`info-container`],[`ariaLabel`,`Documentation and code examples`,1,`info-tabs`],[`label`,`Documentation`,`value`,`documentation`,`icon`,`file-braces`],[`bxTabContent`,``],[`label`,`Code Examples`,`value`,`code`,`icon`,`braces`,`color`,`success`],[3,`path`],[3,`files`]],template:function(e,i){e&1&&(ce(0,`div`,0)(1,`bx-tabs`,1)(2,`bx-tab`,2),Ow(3,I,1,1,`ng-template`,3),me(),ce(4,`bx-tab`,4),Ow(5,O,1,1,`ng-template`,3),me()()())},dependencies:[T,g,lS,bl,vl],styles:[`
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
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
}`]})};export{P as t};