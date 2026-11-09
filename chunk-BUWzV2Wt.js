import{n as g,t as c}from"./chunk-D1Hw4tSm.js";import{A as S,N as s,j as a,w as rr}from"./main-SBKNNIA4.js";import{n as Z}from"./chunk-BQlfz5HR.js";import{$ as IM,Fa as ye,Ia as yk,It as NY,Ma as wr,Nn as Vt,Tr as de,Ui as p,Wr as gn,Zi as q$1,Zn as Zr,_t as L$1,a as $p,at as JA,dr as b,ea as qe,fr as bM,gi as le,ht as Kr,jn as Ve,ka as wM,t as $$1,ut as K,w as D,yr as ce,zt as Ne}from"./chunk-B8p78nSc.js";var U=n=>[`/release-notes`,n];function $(n,e){if(n&1&&Ve(0,`bx-alert`,1),n&2){let i=L$1();le(`message`,i.unpublishedMessage)(`dismissible`,!1)}}function q(n,e){n&1&&(K(0,`p`,11),Ne(1,`These notes are a preview and may change before this version is published.`),$$1())}function F(n,e){if(n&1&&(K(0,`a`,12),Ne(1),Ve(2,`bx-icon`,15),$$1()),n&2){let i=L$1();le(`href`,e,yk),D(),wr(` View v`,i.version,` on NPM`)}}function j(n,e){if(n&1&&(K(0,`a`,12),Ne(1,` View changes on GitHub`),Ve(2,`bx-icon`,15),$$1(),K(3,`p`,16)(4,`span`),Ne(5,`Comparison`),$$1(),K(6,`code`),Ne(7),$$1(),K(8,`span`),Ne(9,`to`),$$1(),K(10,`code`),Ne(11),$$1()()),n&2){let i=L$1(),o=L$1();le(`href`,o.compareUrl(),yk),D(7),qe(i.fromCommit.slice(0,7)),D(4),qe(e.slice(0,7))}}function G(n,e){if(n&1&&(K(0,`section`,7)(1,`div`,8)(2,`h2`,9),Ne(3),$$1(),Ve(4,`bx-tag`,10),$$1(),K(5,`p`),Ne(6),$$1(),ce(7,q,2,0,`p`,11),ce(8,F,3,2,`a`,12),ce(9,j,12,3),$$1(),K(10,`section`,13),Ve(11,`app-readme`,14),$$1()),n&2){let i,o,s=e,p=L$1();D(3),wr(`Blocks `,s.version),D(),le(`text`,p.releaseLabel())(`color`,p.releaseColor())(`focusable`,!1),D(2),qe(s.summary),D(),de(s.status===`draft`?7:-1),D(),de((i=p.npmVersionUrl())?8:-1,i),D(),de((o=s.toCommit)?9:-1,o),D(2),le(`path`,s.readme)}}function H(n,e){if(n&1&&(K(0,`section`,6),Ve(1,`bx-icon`,17),K(2,`h2`,18),Ne(3,`Release notes unavailable`),$$1(),K(4,`p`),Ne(5,` No notes are available for `),K(6,`strong`),Ne(7),$$1(),Ne(8,`. Choose an available version above or view the latest notes. `),$$1(),K(9,`a`,19),Ne(10,`View latest notes`),Ve(11,`bx-icon`,20),$$1()()),n&2){let i=L$1();D(7),qe(i.requestedVersion()),D(2),le(`routerLink`,JA(2,U,i.latestVersion))}}var L=class n{activatedRoute=p(Kr);router=p(Zr);packageReleaseService=p(g);params=NY(this.activatedRoute.paramMap,{initialValue:this.activatedRoute.snapshot.paramMap});currentVersion=`v${c}`;latestVersion=s;unpublishedMessage=`Playground is running a build that is not yet published to NPM (v${c}).`;channels=[{value:`latest`,label:`Release`},{value:`beta`,label:`Beta`},{value:`alpha`,label:`Alpha`}];requestedVersion=b(()=>this.params().get(`version`)??``);release=b(()=>a.find(e=>e.version===this.requestedVersion()));selectedChannel=b(()=>this.release()?.channel??`latest`);npmVersionUrl=b(()=>{let e=this.release();return e?.status===`released`?`https://www.npmjs.com/package/@filip.mazev/blocks/v/${e.version}`:null});selectedVersion=b(()=>this.release()?.version??null);releaseLabel=b(()=>{let e=this.release();return e?.status===`draft`?e.channel===`alpha`?`Alpha · Draft`:`Draft`:e?.channel===`alpha`?`Alpha`:e?.channel===`beta`?`Beta`:`Released`});releaseColor=b(()=>{let e=this.release();return e?.status===`draft`?`warn`:e?.channel===`alpha`||e?.channel===`beta`?`info`:`success`});compareUrl=b(()=>{let e=this.release();return e?.toCommit?`https://github.com/filipmazev/Blocks/compare/${e.fromCommit}...${e.toCommit}`:null});versions=b(()=>a.filter(e=>(e.channel??`latest`)===this.selectedChannel()).map(e=>({value:e.version,label:`v${e.version}${e.status===`draft`?` · Draft`:``}`})));selectChannel(e){let i=a.find(o=>(o.channel??`latest`)===e);i&&this.selectVersion(i.version)}selectVersion(e){!e||e===this.requestedVersion()||this.router.navigate([`/release-notes`,e])}static ɵfac=function(i){return new(i||n)};static ɵcmp=q$1({type:n,selectors:[[`app-release-notes`]],decls:11,vars:9,consts:[[`pageDescription`,`Explore version changes, compatibility notes, and migration guidance.`],[`tone`,`info`,`announcement`,`polite`,1,`unpublished-banner`,3,`message`,`dismissible`],[1,`release-controls`],[`label`,`Channel`,1,`channel-select`,3,`selectionChange`,`options`,`value`,`clearable`],[`label`,`Version`,`placeholder`,`Choose a version`,1,`version-select`,3,`selectionChange`,`options`,`value`,`clearable`],[1,`current-version`],[`bxSurface`,``,`aria-labelledby`,`missing-release-title`,1,`release-summary`,`missing-release`],[`bxSurface`,``,`aria-labelledby`,`release-title`,1,`release-summary`],[1,`release-title`],[`id`,`release-title`],[`size`,`small`,3,`text`,`color`,`focusable`],[1,`draft-notice`],[`bx-button`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-label`,`Changes and migration notes`,1,`release-documentation`],[3,`path`],[`name`,`arrow-up-right`,`size`,`20`],[1,`comparison`],[`name`,`file-search`,`size`,`32`],[`id`,`missing-release-title`],[`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`20`]],template:function(i,o){if(i&1&&(K(0,`bx-page-container`,0),ce(1,$,1,2,`bx-alert`,1),K(2,`div`,2)(3,`bx-select`,3),ye(`selectionChange`,function(p){return o.selectChannel(p.value)}),$$1(),K(4,`bx-select`,4),ye(`selectionChange`,function(p){return o.selectVersion(p.value)}),$$1(),K(5,`p`,5),Ne(6,` Playground build `),K(7,`code`),Ne(8),$$1()()(),ce(9,G,12,9)(10,H,12,4,`section`,6),$$1()),i&2){let s;D(),de(o.packageReleaseService.unpublished()?1:-1),D(2),le(`options`,o.channels)(`value`,o.selectedChannel())(`clearable`,!1),D(),le(`options`,o.versions())(`value`,o.selectedVersion())(`clearable`,!1),D(4),qe(o.currentVersion),D(),de((s=o.release())?9:10,s)}},dependencies:[IM,$p,Vt,Z,rr,gn,bM,wM,S],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.unpublished-banner[_ngcontent-%COMP%] {
  display: block;
  margin-block-end: var(--%NS%bx-space-6, 1.5rem);
}
.release-controls[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-space-4, 1rem) var(--%NS%bx-space-6, 1.5rem);
  margin-block-end: var(--%NS%bx-space-6, 1.5rem);
}
.channel-select[_ngcontent-%COMP%], 
.version-select[_ngcontent-%COMP%] {
  flex: 0 1 22rem;
  min-inline-size: 0;
  max-inline-size: 100%;
}
.current-version[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  margin: 0;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.release-summary[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-6, 1.5rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  margin-block-end: var(--%NS%bx-space-8, 2rem);
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
  gap: var(--%NS%bx-space-3, 0.75rem);
}
h2[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.5rem;
}
.draft-notice[_ngcontent-%COMP%] {
  padding-inline-start: var(--%NS%bx-space-3, 0.75rem);
  border-inline-start: 3px solid var(--%NS%bx-border-warn);
}
.comparison[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  margin-block: var(--%NS%bx-space-3, 0.75rem) 0;
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
  margin-block-end: var(--%NS%bx-space-4, 1rem);
}
@media (max-width: 640px) {
  .channel-select[_ngcontent-%COMP%], 
   .version-select[_ngcontent-%COMP%] {
    flex-basis: 100%;
  }
  .release-summary[_ngcontent-%COMP%] {
    padding: var(--%NS%bx-space-4, 1rem);
  }
}`]})};export{L as ReleaseNotes};