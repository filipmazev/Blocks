import{$ as Jw,Bt as Re,Et as P,Ht as S,Ir as lr,Nn as ae,Oi as v,Tt as Or,Un as bt,Vn as be,Vt as Rt,Wr as nE,Yn as dO,Z as J9,di as qf,ei as p,lt as Lr,qi as z0,qn as ce,st as L$1,wi as ue,wr as je,wt as Oe,yi as te,z as H}from"./chunk-BjKrh6Fv.js";import{E as ki,M as e,j as L$2}from"./main-IT46HQ5I.js";import{n as w}from"./chunk-Bf8a64Dt.js";var I=i=>[`/release-notes`,i];function L(i,e){i&1&&(P(0,`p`,11),Re(1,`These notes are a preview and may change before this version is published.`),L$1())}function T(i,e){if(i&1&&(P(0,`a`,14),Re(1,` View changes on GitHub`),Oe(2,`bx-icon`,15),L$1(),P(3,`p`,16)(4,`span`),Re(5,`Comparison`),L$1(),P(6,`code`),Re(7),L$1(),P(8,`span`),Re(9,`to`),L$1(),P(10,`code`),Re(11),L$1()()),i&2){let l=ae(),o=ae();te(`href`,o.compareUrl(),Jw),S(7),je(l.fromCommit.slice(0,7)),S(4),je(e.slice(0,7))}}function A(i,e){if(i&1&&(P(0,`section`,7)(1,`div`,8)(2,`h2`,9),Re(3),L$1(),Oe(4,`bx-tag`,10),L$1(),P(5,`p`),Re(6),L$1(),ce(7,L,2,0,`p`,11),ce(8,T,12,3),L$1(),P(9,`section`,12),Oe(10,`app-readme`,13),L$1()),i&2){let l,o=e,m=ae();S(3),lr(`Blocks `,o.version),S(),te(`text`,m.releaseLabel())(`color`,m.releaseColor())(`focusable`,!1),S(2),je(o.summary),S(),ue(o.status===`draft`?7:-1),S(),ue((l=o.toCommit)?8:-1,l),S(2),te(`path`,o.readme)}}function q(i,e){if(i&1&&(P(0,`section`,6),Oe(1,`bx-icon`,17),P(2,`h2`,18),Re(3,`Release notes unavailable`),L$1(),P(4,`p`),Re(5,`No notes are available for `),P(6,`strong`),Re(7),L$1(),Re(8,`. Choose an available version above or view the latest notes.`),L$1(),P(9,`a`,19),Re(10,`View latest notes`),Oe(11,`bx-icon`,20),L$1()()),i&2){let l=ae();S(7),je(l.requestedVersion()),S(2),te(`routerLink`,dO(2,I,l.latestVersion))}}var D=class i{route=p(Or);router=p(Lr);params=J9(this.route.paramMap,{initialValue:this.route.snapshot.paramMap});currentVersion=L$2;latestVersion=e[0].version;requestedVersion=v(()=>this.params().get(`version`)??``);release=v(()=>e.find(e=>e.version===this.requestedVersion()));selectedVersion=v(()=>this.release()?.version??null);releaseLabel=v(()=>{let e=this.release();return e?.status===`draft`?e.channel===`alpha`?`Alpha · Draft`:`Draft`:e?.channel===`alpha`?`Alpha`:e?.channel===`beta`?`Beta`:`Released`});releaseColor=v(()=>{let e=this.release();return e?.status===`draft`?`warn`:e?.channel===`alpha`||e?.channel===`beta`?`info`:`success`});compareUrl=v(()=>{let e=this.release();return e?.toCommit?`https://github.com/filipmazev/Blocks/compare/${e.fromCommit}...${e.toCommit}`:null});versions=e.map(e=>({value:e.version,label:`v${e.version}${e.channel===`alpha`?` · Alpha`:e.channel===`beta`?` · Beta`:``}${e.status===`draft`?` · Draft`:``}`}));selectVersion(e){!e||e===this.requestedVersion()||this.router.navigate([`/release-notes`,e])}static ɵfac=function(l){return new(l||i)};static ɵcmp=H({type:i,selectors:[[`app-release-notes`]],decls:16,vars:5,consts:[[1,`release-page`],[1,`page-heading`],[1,`eyebrow`],[1,`release-controls`],[`label`,`Version`,`placeholder`,`Choose a version`,1,`version-select`,3,`selectionChange`,`options`,`value`,`clearable`],[1,`current-version`],[`bxSurface`,``,`aria-labelledby`,`missing-release-title`,1,`release-summary`,`missing-release`],[`bxSurface`,``,`aria-labelledby`,`release-title`,1,`release-summary`],[1,`release-title`],[`id`,`release-title`],[`size`,`small`,3,`text`,`color`,`focusable`],[1,`draft-notice`],[`aria-label`,`Changes and migration notes`,1,`release-documentation`],[3,`path`],[`bx-button`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`name`,`arrow-up-right`,`size`,`20`],[1,`comparison`],[`name`,`file-search`,`size`,`32`],[`id`,`missing-release-title`],[`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`20`]],template:function(l,o){if(l&1&&(P(0,`article`,0)(1,`header`,1)(2,`p`,2),Re(3,`Blocks library`),L$1(),P(4,`h1`),Re(5,`Release notes`),L$1(),P(6,`p`),Re(7,`Explore additions, improvements and migration notes for each version of Blocks.`),L$1()(),P(8,`div`,3)(9,`bx-select`,4),be(`selectionChange`,function(B){return o.selectVersion(B.value)}),L$1(),P(10,`p`,5),Re(11,`Current package `),P(12,`code`),Re(13),L$1()()(),ce(14,A,11,8)(15,q,12,4,`section`,6),L$1()),l&2){let m;S(9),te(`options`,o.versions)(`value`,o.selectedVersion())(`clearable`,!1),S(4),je(o.currentVersion),S(),ue((m=o.release())?14:15,m)}},dependencies:[nE,Rt,qf,ki,bt,z0,w],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.release-page[_ngcontent-%COMP%] {
  max-inline-size: 70rem;
  margin-inline: auto;
  color: var(--%NS%bx-text-primary);
}
.page-heading[_ngcontent-%COMP%] {
  margin-block-end: 2rem;
}
h1[_ngcontent-%COMP%] {
  margin-block: 0 0.75rem;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  line-height: 1.2;
}
.release-controls[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;
  margin-block-end: 1.5rem;
}
.version-select[_ngcontent-%COMP%] {
  flex: 0 1 22rem;
  min-inline-size: 0;
  max-inline-size: 100%;
}
.current-version[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.release-summary[_ngcontent-%COMP%] {
  padding: 1.5rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  margin-block-end: 2rem;
  overflow-wrap: anywhere;
}
.release-summary[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {
  max-inline-size: 50rem;
  color: var(--%NS%bx-text-secondary);
  line-height: 1.65;
}
.release-summary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  max-inline-size: 100%;
}
.release-title[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}
h2[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.5rem;
}
.draft-notice[_ngcontent-%COMP%] {
  padding-inline-start: 0.75rem;
  border-inline-start: 3px solid var(--%NS%bx-border-warn);
}
.comparison[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-block: 0.75rem 0;
  font-size: 0.8125rem;
}
code[_ngcontent-%COMP%] {
  font-family:
    ui-monospace,
    SFMono-Regular,
    monospace;
}
.release-documentation[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
.missing-release[_ngcontent-%COMP%]    > bx-icon[_ngcontent-%COMP%] {
  margin-block-end: 1rem;
}
@media (max-width: 640px) {
  .page-heading[_ngcontent-%COMP%] {
    margin-block-end: 1.5rem;
  }
  .version-select[_ngcontent-%COMP%] {
    flex-basis: 100%;
  }
  .release-summary[_ngcontent-%COMP%] {
    padding: 1rem;
  }
}`]})};export{D as ReleaseNotes};