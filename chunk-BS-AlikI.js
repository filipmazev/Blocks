import{n as g,t as c}from"./chunk-CAJoV2IT.js";import{et as a,l as Nn,nt as s,t as S}from"./main-RICJTCGQ.js";import{r as Z}from"./chunk-DZ1I1_Lc.js";import{D,F as E,Fr as bo,Ha as sT,Ni as j$1,Nn as UC,Nr as be,Nt as L$1,To as y,Tr as an,Vn as W,Xn as X,at as Hf,cn as Pc,do as w,gi as g$1,gt as It,ii as f,l as A,mn as QQ,pa as nT,pi as fo,po as we,ti as ee,v as Bt,wi as hT}from"./chunk-DzvvGvUq.js";var U=n=>[`/release-notes`,n];function $(n,e){if(n&1&&we(0,`bx-alert`,1),n&2){let i=w();A(`message`,i.unpublishedMessage)(`dismissible`,!1)}}function q(n,e){n&1&&(E(0,`p`,11),X(1,`These notes are a preview and may change before this version is published.`),D())}function F(n,e){if(n&1&&(E(0,`a`,12),X(1),we(2,`bx-icon`,15),D()),n&2){let i=w();A(`href`,e,UC),y(),an(` View v`,i.version,` on NPM`)}}function j(n,e){if(n&1&&(E(0,`a`,12),X(1,` View changes on GitHub`),we(2,`bx-icon`,15),D(),E(3,`p`,16)(4,`span`),X(5,`Comparison`),D(),E(6,`code`),X(7),D(),E(8,`span`),X(9,`to`),D(),E(10,`code`),X(11),D()()),n&2){let i=w(),o=w();A(`href`,o.compareUrl(),UC),y(7),be(i.fromCommit.slice(0,7)),y(4),be(e.slice(0,7))}}function G(n,e){if(n&1&&(E(0,`section`,7)(1,`div`,8)(2,`h2`,9),X(3),D(),we(4,`bx-tag`,10),D(),E(5,`p`),X(6),D(),L$1(7,q,2,0,`p`,11),L$1(8,F,3,2,`a`,12),L$1(9,j,12,3),D(),E(10,`section`,13),we(11,`app-readme`,14),D()),n&2){let i,o,s=e,p=w();y(3),an(`Blocks `,s.version),y(),A(`text`,p.releaseLabel())(`color`,p.releaseColor())(`focusable`,!1),y(2),be(s.summary),y(),j$1(s.status===`draft`?7:-1),y(),j$1((i=p.npmVersionUrl())?8:-1,i),y(),j$1((o=s.toCommit)?9:-1,o),y(2),A(`path`,s.readme)}}function H(n,e){if(n&1&&(E(0,`section`,6),we(1,`bx-icon`,17),E(2,`h2`,18),X(3,`Release notes unavailable`),D(),E(4,`p`),X(5,` No notes are available for `),E(6,`strong`),X(7),D(),X(8,`. Choose an available version above or view the latest notes. `),D(),E(9,`a`,19),X(10,`View latest notes`),we(11,`bx-icon`,20),D()()),n&2){let i=w();y(7),be(i.requestedVersion()),y(2),A(`routerLink`,Pc(2,U,i.latestVersion))}}var L=class n{activatedRoute=f(fo);router=f(bo);packageReleaseService=f(g);params=QQ(this.activatedRoute.paramMap,{initialValue:this.activatedRoute.snapshot.paramMap});currentVersion=`v${c}`;latestVersion=s;unpublishedMessage=`Playground is running a build that is not yet published to NPM (v${c}).`;channels=[{value:`latest`,label:`Release`},{value:`beta`,label:`Beta`},{value:`alpha`,label:`Alpha`}];requestedVersion=g$1(()=>this.params().get(`version`)??``);release=g$1(()=>a.find(e=>e.version===this.requestedVersion()));selectedChannel=g$1(()=>this.release()?.channel??`latest`);npmVersionUrl=g$1(()=>{let e=this.release();return e?.status===`released`?`https://www.npmjs.com/package/@filip.mazev/blocks/v/${e.version}`:null});selectedVersion=g$1(()=>this.release()?.version??null);releaseLabel=g$1(()=>{let e=this.release();return e?.status===`draft`?e.channel===`alpha`?`Alpha · Draft`:`Draft`:e?.channel===`alpha`?`Alpha`:e?.channel===`beta`?`Beta`:`Released`});releaseColor=g$1(()=>{let e=this.release();return e?.status===`draft`?`warn`:e?.channel===`alpha`||e?.channel===`beta`?`info`:`success`});compareUrl=g$1(()=>{let e=this.release();return e?.toCommit?`https://github.com/filipmazev/Blocks/compare/${e.fromCommit}...${e.toCommit}`:null});versions=g$1(()=>a.filter(e=>(e.channel??`latest`)===this.selectedChannel()).map(e=>({value:e.version,label:`v${e.version}${e.status===`draft`?` · Draft`:``}`})));selectChannel(e){let i=a.find(o=>(o.channel??`latest`)===e);i&&this.selectVersion(i.version)}selectVersion(e){!e||e===this.requestedVersion()||this.router.navigate([`/release-notes`,e])}static ɵfac=function(i){return new(i||n)};static ɵcmp=W({type:n,selectors:[[`app-release-notes`]],decls:11,vars:9,consts:[[`pageDescription`,`Explore version changes, compatibility notes, and migration guidance.`],[`tone`,`info`,`announcement`,`polite`,1,`unpublished-banner`,3,`message`,`dismissible`],[1,`release-controls`],[`label`,`Channel`,1,`channel-select`,3,`selectionChange`,`options`,`value`,`clearable`],[`label`,`Version`,`placeholder`,`Choose a version`,1,`version-select`,3,`selectionChange`,`options`,`value`,`clearable`],[1,`current-version`],[`bxSurface`,``,`aria-labelledby`,`missing-release-title`,1,`release-summary`,`missing-release`],[`bxSurface`,``,`aria-labelledby`,`release-title`,1,`release-summary`],[1,`release-title`],[`id`,`release-title`],[`size`,`small`,3,`text`,`color`,`focusable`],[1,`draft-notice`],[`bx-button`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-label`,`Changes and migration notes`,1,`release-documentation`],[3,`path`],[`name`,`arrow-up-right`,`size`,`20`],[1,`comparison`],[`name`,`file-search`,`size`,`32`],[`id`,`missing-release-title`],[`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`20`]],template:function(i,o){if(i&1&&(E(0,`bx-page-container`,0),L$1(1,$,1,2,`bx-alert`,1),E(2,`div`,2)(3,`bx-select`,3),ee(`selectionChange`,function(p){return o.selectChannel(p.value)}),D(),E(4,`bx-select`,4),ee(`selectionChange`,function(p){return o.selectVersion(p.value)}),D(),E(5,`p`,5),X(6,` Playground build `),E(7,`code`),X(8),D()()(),L$1(9,G,12,9)(10,H,12,4,`section`,6),D()),i&2){let s;y(),j$1(o.packageReleaseService.unpublished()?1:-1),y(2),A(`options`,o.channels)(`value`,o.selectedChannel())(`clearable`,!1),y(),A(`options`,o.versions())(`value`,o.selectedVersion())(`clearable`,!1),y(4),be(o.currentVersion),y(),j$1((s=o.release())?9:10,s)}},dependencies:[hT,Hf,It,Z,Nn,Bt,nT,sT,S],styles:[`
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