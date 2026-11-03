import{Ci as v,Cn as ar,Fr as ne,Gr as p,In as ct,J as JE,Ji as zw,Lt as T$1,Mi as we,P as GS,Rr as oK,Sr as k,Ut as V,Wr as or,X as Je,an as Z,c as Bp,f as D$1,fr as ie,ii as re,k as Fr,p as DA,pn as _e,ut as Me,zn as de}from"./chunk-zHe8pzQe.js";import{A as E,E as ki,j as e}from"./main-5RV6DQBL.js";import{n as w}from"./chunk-cyGuHfQv.js";var I=o=>[`/release-notes`,o];function L(o,e){o&1&&(T$1(0,`p`,11),we(1,`These notes are a preview and may change before this version is published.`),k())}function T(o,e){if(o&1&&(T$1(0,`section`,7)(1,`div`,8)(2,`h2`,9),we(3),k(),_e(4,`bx-tag`,10),k(),T$1(5,`p`),we(6),k(),re(7,L,2,0,`p`,11),T$1(8,`a`,12),we(9,` View changes on GitHub`),_e(10,`bx-icon`,13),k(),T$1(11,`p`,14)(12,`span`),we(13,`Comparison`),k(),T$1(14,`code`),we(15),k(),T$1(16,`span`),we(17,`to`),k(),T$1(18,`code`),we(19),k()()(),T$1(20,`section`,15),_e(21,`app-readme`,16),k()),o&2){let r=e,l=ne();D$1(3),Fr(`Blocks `,r.version),D$1(),Z(`text`,l.releaseLabel())(`color`,l.releaseColor())(`focusable`,!1),D$1(2),Me(r.summary),D$1(),ie(r.status===`draft`?7:-1),D$1(),Z(`href`,l.compareUrl(),zw),D$1(7),Me(r.fromCommit.slice(0,7)),D$1(4),Me(r.toCommit.slice(0,7)),D$1(2),Z(`path`,r.readme)}}function q(o,e){if(o&1&&(T$1(0,`section`,6),_e(1,`bx-icon`,17),T$1(2,`h2`,18),we(3,`Release notes unavailable`),k(),T$1(4,`p`),we(5,`No notes are available for `),T$1(6,`strong`),we(7),k(),we(8,`. Choose an available version above or view the latest notes.`),k(),T$1(9,`a`,19),we(10,`View latest notes`),_e(11,`bx-icon`,20),k()()),o&2){let r=ne();D$1(7),Me(r.requestedVersion()),D$1(2),Z(`routerLink`,DA(2,I,r.latestVersion))}}var D=class o{route=p(or);router=p(ar);params=oK(this.route.paramMap,{initialValue:this.route.snapshot.paramMap});currentVersion=E;latestVersion=e[0].version;requestedVersion=v(()=>this.params().get(`version`)??``);release=v(()=>e.find(e=>e.version===this.requestedVersion()));selectedVersion=v(()=>this.release()?.version??null);releaseLabel=v(()=>{let e=this.release();return e?.status===`draft`?`Draft`:e?.channel===`beta`?`Beta`:`Released`});releaseColor=v(()=>{let e=this.release();return e?.status===`draft`?`warn`:e?.channel===`beta`?`info`:`success`});compareUrl=v(()=>{let e=this.release();return e?`https://github.com/filipmazev/Blocks/compare/${e.fromCommit}...${e.toCommit}`:null});versions=e.map(e=>({value:e.version,label:`v${e.version}${e.status===`draft`?` · Draft`:e.channel===`beta`?` · Beta`:``}`}));selectVersion(e){!e||e===this.requestedVersion()||this.router.navigate([`/release-notes`,e])}static ɵfac=function(r){return new(r||o)};static ɵcmp=V({type:o,selectors:[[`app-release-notes`]],decls:16,vars:5,consts:[[1,`release-page`],[1,`page-heading`],[1,`eyebrow`],[1,`release-controls`],[`label`,`Version`,`placeholder`,`Choose a version`,1,`version-select`,3,`selectionChange`,`options`,`value`,`clearable`],[1,`current-version`],[`bxSurface`,``,`aria-labelledby`,`missing-release-title`,1,`release-summary`,`missing-release`],[`bxSurface`,``,`aria-labelledby`,`release-title`,1,`release-summary`],[1,`release-title`],[`id`,`release-title`],[`size`,`small`,3,`text`,`color`,`focusable`],[1,`draft-notice`],[`bx-button`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`name`,`arrow-up-right`,`size`,`20`],[1,`comparison`],[`aria-label`,`Changes and migration notes`,1,`release-documentation`],[3,`path`],[`name`,`file-search`,`size`,`32`],[`id`,`missing-release-title`],[`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`20`]],template:function(r,l){if(r&1&&(T$1(0,`article`,0)(1,`header`,1)(2,`p`,2),we(3,`Blocks library`),k(),T$1(4,`h1`),we(5,`Release notes`),k(),T$1(6,`p`),we(7,`Explore additions, improvements and migration notes for each version of Blocks.`),k()(),T$1(8,`div`,3)(9,`bx-select`,4),de(`selectionChange`,function(B){return l.selectVersion(B.value)}),k(),T$1(10,`p`,5),we(11,`Current package `),T$1(12,`code`),we(13),k()()(),re(14,T,22,10)(15,q,12,4,`section`,6),k()),r&2){let g;D$1(9),Z(`options`,l.versions)(`value`,l.selectedVersion())(`clearable`,!1),D$1(4),Me(l.currentVersion),D$1(),ie((g=l.release())?14:15,g)}},dependencies:[GS,ct,Bp,ki,Je,JE,w],styles:[`
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