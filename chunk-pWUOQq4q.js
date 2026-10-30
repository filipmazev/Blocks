import{At as Q,Er as ms,In as de,Jn as g$1,M as Gl,Oi as zl,P as Gr,Qt as U,S as E_,Un as f,Wn as fe,Zt as Tx,an as W,at as Le,ct as M,ln as Wr,yr as le}from"./chunk-o3QKG9oV.js";import{t as ht}from"./main-KPQZDH5I.js";import{n as q,t as T}from"./chunk-LfAdKiUj.js";var S=(n,t)=>t.path;function E(n,t){if(n&1&&(W(0,`pre`),Le(1,`code`,3),Q()),n&2){let e=de().$implicit,i=de();M(),fe(`highlight`,i.codeContent(e))(`language`,e.language)}}function F(n,t){if(n&1&&(W(0,`bx-tab`,1),E_(1,E,2,2,`ng-template`,2),Q()),n&2){let e=t.$implicit;fe(`label`,e.title)(`value`,e.path)}}var g=class n{files=g$1.required();codeContent(t){return T[t.path.replace(/^\/+/,``)]??`This snippet is unavailable: ${t.title}`}static ɵfac=function(e){return new(e||n)};static ɵcmp=le({type:n,selectors:[[`app-code`]],inputs:{files:[1,`files`]},decls:3,vars:0,consts:[[`variant`,`underline`,`ariaLabel`,`Code files`,1,`code-viewer`],[3,`label`,`value`],[`bxTabContent`,``],[3,`highlight`,`language`]],template:function(e,i){e&1&&(W(0,`bx-tabs`,0),Gr(1,F,2,2,`bx-tab`,1,S),Q()),e&2&&(M(),Wr(i.files()))},dependencies:[ht,Tx,Gl,zl],styles:[`
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
[_nghost-%COMP%]     pre {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.7;
}
[_nghost-%COMP%]     pre code.hljs {
  padding: 1rem;
  min-width: 100%;
  overflow: visible;
}`]})};function I(n,t){if(n&1&&Le(0,`app-readme`,5),n&2){let e=de();fe(`path`,e.readmePath())}}function O(n,t){if(n&1&&Le(0,`app-code`,6),n&2){let e=de();fe(`files`,e.codeFiles())}}var P=class n{element=f(U).nativeElement;matchHeight=g$1();codeFiles=g$1.required();readmePath=g$1.required();constructor(){ms(t=>{let e=this.matchHeight();if(!e)return;let i=()=>this.element.style.height=`${e.getBoundingClientRect().height}px`;i();let u=new ResizeObserver(i);u.observe(e),t(()=>{u.disconnect(),this.element.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=le({type:n,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:6,vars:0,consts:[[1,`info-container`],[`ariaLabel`,`Documentation and code examples`,1,`info-tabs`],[`label`,`Documentation`,`value`,`documentation`,`icon`,`file-braces`],[`bxTabContent`,``],[`label`,`Code Examples`,`value`,`code`,`icon`,`braces`,`color`,`accent`],[3,`path`],[3,`files`]],template:function(e,i){e&1&&(W(0,`div`,0)(1,`bx-tabs`,1)(2,`bx-tab`,2),E_(3,I,1,1,`ng-template`,3),Q(),W(4,`bx-tab`,4),E_(5,O,1,1,`ng-template`,3),Q()()())},dependencies:[q,g,Tx,Gl,zl],styles:[`
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