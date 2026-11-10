import{q as _,t as S}from"./main-CHCNDXPW.js";import{Aa as wM,Bi as p,Fr as ep,Kt as S$1,N as G,Nt as P,c as Ae,fa as td,k as Fn,ln as V,o as A,qr as h,ra as rd,t as $}from"./chunk-Cn9-98lL.js";function E(n,t){if(n&1&&Ae(0,`app-readme`,5),n&2){let e=S$1();V(`path`,e.readmePath())}}function I(n,t){if(n&1&&Ae(0,`app-code`,6),n&2){let e=S$1();V(`files`,e.codeFiles())}}var C=class n{nativeElement=p($).nativeElement;matchHeight=h();codeFiles=h.required();readmePath=h.required();constructor(){Fn(t=>{let e=this.matchHeight();if(!e)return;let a=()=>this.nativeElement.style.height=`${e.getBoundingClientRect().height}px`;a();let d=new ResizeObserver(a);d.observe(e),t(()=>{d.disconnect(),this.nativeElement.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||n)};static ɵcmp=G({type:n,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:6,vars:0,consts:[[1,`info-container`],[`ariaLabel`,`Documentation and code examples`,1,`info-tabs`],[`label`,`Documentation`,`value`,`documentation`,`icon`,`file-braces`],[`bxTabContent`,``],[`label`,`Code Examples`,`value`,`code`,`icon`,`braces`,`color`,`accent`],[3,`path`],[3,`files`]],template:function(e,a){e&1&&(A(0,`div`,0)(1,`bx-tabs`,1)(2,`bx-tab`,2),ep(3,E,1,1,`ng-template`,3),P(),A(4,`bx-tab`,4),ep(5,I,1,1,`ng-template`,3),P()()())},dependencies:[S,_,wM,rd,td],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
  min-height: 0;
}
.info-container[_ngcontent-%COMP%] {
  background: color-mix(in srgb, var(--%NS%bx-bg-surface) 86%, transparent);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  box-shadow: var(--%NS%bx-shadow-sm, 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1));
  border: 1px solid var(--%NS%bx-border-default);
  min-width: 0;
  padding: var(--%NS%bx-space-6, 1.5rem);
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
}`]})};export{C as t};