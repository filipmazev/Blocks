import{An as pr,En as oy,Et as ZG,F as K,H as Mt,Hn as sy,J as P,Lt as ck,N as Jt,Nt as at,O as I,Qn as ut,Qt as hr,R as Lk,Ut as f,V as Mo,W as Np,Wn as te,Yt as fr,cn as ko,fr as yi,hn as mk,i as $t,q as Op,st as Ut,tr as vi,wn as ot}from"./chunk-D44OVyuP.js";import{a as ht}from"./main-WUOVILFZ.js";import{n as S,t as A}from"./chunk-DXG8OZ8F.js";function $(o,t){if(o&1){let e=mk();Mt(0,`button`,5),at(`click`,function(){let d=oy(e).$implicit,z=pr();return sy(z.selectFile(d))}),vi(1,`span`,6),ko(2),$t()}if(o&2){let e=t.$implicit,n=pr();ut(`active`,n.activeFile()===e),Ut(),Lk(e.language),Ut(),yi(` `,e.title,` `)}}var h=class o{selectedPath=I(null);activeFile=K(()=>this.files().find(t=>t.path===this.selectedPath())??this.files()[0]??null);codeContent=K(()=>{let t=this.activeFile();return t?S[t.path.replace(/^\/+/,``)]??`This snippet is unavailable: ${t.title}`:``});files=P.required();selectFile(t){this.selectedPath.set(t.path)}static ɵfac=function(e){return new(e||o)};static ɵcmp=ot({type:o,selectors:[[`app-code`]],inputs:{files:[1,`files`]},decls:7,vars:2,consts:[[1,`code-viewer`],[1,`tabs`],[1,`tab`,3,`active`],[1,`content`],[3,`highlight`,`language`],[1,`tab`,3,`click`],[1,`lang-dot`]],template:function(e,n){e&1&&(Mt(0,`div`,0)(1,`div`,1),Np(2,$,3,5,`button`,2,ck),$t(),Mt(4,`div`,3)(5,`pre`),vi(6,`code`,4),$t()()()),e&2&&(Ut(2),Op(n.files()),Ut(4),Mo(`highlight`,n.codeContent())(`language`,n.activeFile()?n.activeFile().language:``))},dependencies:[ht],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
}
.code-viewer[_ngcontent-%COMP%] {
  background: var(--%NS%bx-bg-surface);
  border-radius: 0.5rem;
  border: 1px solid var(--%NS%bx-border-default);
  overflow: hidden;
}
.tabs[_ngcontent-%COMP%] {
  display: flex;
  background: var(--%NS%bx-bg-surface-alt);
  border-bottom: 1px solid var(--%NS%bx-border-default);
  overflow-x: auto;
}
.tab[_ngcontent-%COMP%] {
  padding: 0.75rem 1rem;
  border: 0;
  border-right: 1px solid var(--%NS%bx-border-default);
  font-size: 0.8rem;
  color: var(--%NS%bx-text-secondary);
  background: transparent;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.tab[_ngcontent-%COMP%]:hover {
  color: var(--%NS%bx-text-primary);
}
.tab.active[_ngcontent-%COMP%] {
  background: var(--%NS%bx-bg-surface);
  color: var(--%NS%bx-text-primary);
  box-shadow: inset 0 -2px 0 var(--%NS%bx-border-brand);
}
.lang-dot[_ngcontent-%COMP%] {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 9999px;
  background: var(--%NS%bx-primary);
}
.content[_ngcontent-%COMP%] {
  overflow: auto;
  max-height: 45rem;
}
.content[_ngcontent-%COMP%]     pre {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.7;
}
.content[_ngcontent-%COMP%]     pre code.hljs {
  padding: 1rem;
  min-width: 100%;
}`]})};function q(o,t){if(o&1&&vi(0,`app-readme`,5),o&2){let e=pr();Mo(`path`,e.readmePath())}}function B(o,t){if(o&1&&vi(0,`app-code`,6),o&2){let e=pr();Mo(`files`,e.codeFiles())}}var R=class o{element=f(te).nativeElement;matchHeight=P();codeFiles=P.required();readmePath=P.required();viewMode=I(`documentation`);constructor(){ZG(t=>{let e=this.matchHeight();if(!e)return;let n=()=>this.element.style.height=`${e.getBoundingClientRect().height}px`;n();let d=new ResizeObserver(n);d.observe(e),t(()=>{d.disconnect(),this.element.style.removeProperty(`height`)})})}static ɵfac=function(e){return new(e||o)};static ɵcmp=ot({type:o,selectors:[[`app-component-info`]],inputs:{matchHeight:[1,`matchHeight`],codeFiles:[1,`codeFiles`],readmePath:[1,`readmePath`]},decls:10,vars:7,consts:[[1,`info-container`],[1,`info-header`],[1,`toggle-group`],[`type`,`button`,1,`toggle-btn`,3,`click`],[1,`info-content`],[3,`path`],[3,`files`]],template:function(e,n){e&1&&(Mt(0,`div`,0)(1,`div`,1)(2,`div`,2)(3,`button`,3),at(`click`,function(){return n.viewMode.set(`documentation`)}),ko(4,` Documentation `),$t(),Mt(5,`button`,3),at(`click`,function(){return n.viewMode.set(`code`)}),ko(6,` Code Examples `),$t()()(),Mt(7,`div`,4),hr(8,q,1,1,`app-readme`,5)(9,B,1,1,`app-code`,6),$t()()),e&2&&(Ut(3),ut(`active`,n.viewMode()===`documentation`),Jt(`aria-pressed`,n.viewMode()===`documentation`),Ut(2),ut(`active`,n.viewMode()===`code`),Jt(`aria-pressed`,n.viewMode()===`code`),Ut(3),fr(n.viewMode()===`documentation`?8:n.viewMode()===`code`?9:-1))},dependencies:[A,h],styles:[`
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
.info-header[_ngcontent-%COMP%] {
  flex: 0 0 auto;
  margin-bottom: 1.5rem;
}
.toggle-group[_ngcontent-%COMP%] {
  display: inline-flex;
  gap: 0.25rem;
  padding: 0.25rem;
  border: 1px solid var(--%NS%bx-border-default);
  background: var(--%NS%bx-bg-surface-alt);
  border-radius: 0.5rem;
}
.toggle-btn[_ngcontent-%COMP%] {
  padding: 0.5rem 0.75rem;
  border: 0;
  border-radius: 0.25rem;
  color: var(--%NS%bx-text-secondary);
  background: transparent;
  font-size: 0.875rem;
}
.toggle-btn.active[_ngcontent-%COMP%] {
  background: var(--%NS%bx-bg-surface);
  color: var(--%NS%bx-text-primary);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
}
.info-content[_ngcontent-%COMP%] {
  min-width: 0;
  min-height: 0;
  overflow: auto;
  overscroll-behavior: contain;
}`]})};export{R as t};