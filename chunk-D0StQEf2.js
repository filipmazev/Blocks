import{C as De,Cn as pe,E as E$1,Gt as ce,Sn as ot,V as K,Wt as cS,a as ht,b as Cl,f as $o,k as Eu,kn as qo,qn as yl,rn as ie,st as Ow,tn as h,un as ke,ut as Qe}from"./main-7DJU4RBM.js";import{n as q,t as T}from"./chunk-B79m0DtU.js";var S=(n,t)=>t.path;function E(n,t){if(n&1&&(ce(0,`pre`),ot(1,`code`,3),pe()),n&2){let e=ke().$implicit,i=ke();ie(),Qe(`highlight`,i.codeContent(e))(`language`,e.language)}}function F(n,t){if(n&1&&(ce(0,`bx-tab`,1),Ow(1,E,2,2,`ng-template`,2),pe()),n&2){let e=t.$implicit;Qe(`label`,e.title)(`value`,e.path)}}var g=class n{files=E$1.required();codeContent(t){return q[t.path.replace(/^\/+/,``)]??`This snippet is unavailable: ${t.title}`}static ɵfac=function(e){return new(e||n)};static ɵcmp=De({type:n,selectors:[[`app-code`]],inputs:{files:[1,`files`]},decls:3,vars:0,consts:[[`variant`,`underline`,`ariaLabel`,`Code files`,1,`code-viewer`],[3,`label`,`value`],[`bxTabContent`,``],[3,`highlight`,`language`]],template:function(e,i){e&1&&(ce(0,`bx-tabs`,0),$o(1,F,2,2,`bx-tab`,1,S),pe()),e&2&&(ie(),qo(i.files()))},dependencies:[ht,cS,Cl,yl],styles:[`
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
}`]})};function I(n,t){if(n&1&&ot(0,`app-readme`,5),n&2){let e=ke();Qe(`path`,e.readmePath())}}function O(n,t){if(n&1&&ot(0,`app-code`,6),n&2){let e=ke();Qe(`files`,e.codeFiles())}}var P=class n{element=h(K).nativeElement;matchHeight=E$1();codeFiles=E$1.required();readmePath=E$1.required();constructor(){Eu(t=>{let e=this.matchHeight();if(!e)return;let i=()=>this.element.style.height=`${e.getBoundingClientRect().height}px`;i();let u=new ResizeObserver(i);u.observe(e),t(()=>{u.disconnect(),this.element.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=De({type:n,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:6,vars:0,consts:[[1,`info-container`],[`ariaLabel`,`Documentation and code examples`,1,`info-tabs`],[`label`,`Documentation`,`value`,`documentation`,`icon`,`file-braces`],[`bxTabContent`,``],[`label`,`Code Examples`,`value`,`code`,`icon`,`braces`,`color`,`accent`],[3,`path`],[3,`files`]],template:function(e,i){e&1&&(ce(0,`div`,0)(1,`bx-tabs`,1)(2,`bx-tab`,2),Ow(3,I,1,1,`ng-template`,3),pe(),ce(4,`bx-tab`,4),Ow(5,O,1,1,`ng-template`,3),pe()()())},dependencies:[T,g,cS,Cl,yl],styles:[`
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