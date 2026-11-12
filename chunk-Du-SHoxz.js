import{n as g,t as c}from"./chunk-PINHfDs-.js";import{rt as s,t as S,tt as a,u as Nn}from"./main-GMLCMQLH.js";import{r as Z}from"./chunk-BY4z3yad.js";import{Ai as j$1,Ao as y,At as Lc,Do as xe,E as D,Fr as cn,J as G$1,Kr as eJ,Mr as cT,Qr as f,Rn as Vt,Ti as iT,Tn as Uf,Y as GC,Ya as te,cn as R,dn as Rt,kr as bo,li as g$1,lr as _,mo as w,qn as X,ri as fe,si as fo,wo as xT,z as F$1}from"./chunk-RnMilSnn.js";var U=n=>[`/release-notes`,n];function $(n,e){if(n&1&&xe(0,`bx-alert`,1),n&2){let i=w();R(`message`,i.unpublishedMessage)(`dismissible`,!1)}}function q(n,e){n&1&&(_(0,`p`,11),X(1,`These notes are a preview and may change before this version is published.`),D())}function F(n,e){if(n&1&&(_(0,`a`,12),X(1),xe(2,`bx-icon`,15),D()),n&2){let i=w();R(`href`,e,GC),y(),cn(` View v`,i.version,` on NPM`)}}function j(n,e){if(n&1&&(_(0,`a`,12),X(1,` View changes on GitHub`),xe(2,`bx-icon`,15),D(),_(3,`p`,16)(4,`span`),X(5,`Comparison`),D(),_(6,`code`),X(7),D(),_(8,`span`),X(9,`to`),D(),_(10,`code`),X(11),D()()),n&2){let i=w(),o=w();R(`href`,o.compareUrl(),GC),y(7),fe(i.fromCommit.slice(0,7)),y(4),fe(e.slice(0,7))}}function G(n,e){if(n&1&&(_(0,`section`,7)(1,`div`,8)(2,`h2`,9),X(3),D(),xe(4,`bx-tag`,10),D(),_(5,`p`),X(6),D(),j$1(7,q,2,0,`p`,11),j$1(8,F,3,2,`a`,12),j$1(9,j,12,3),D(),_(10,`section`,13),xe(11,`app-readme`,14),D()),n&2){let i,o,s=e,p=w();y(3),cn(`Blocks `,s.version),y(),R(`text`,p.releaseLabel())(`color`,p.releaseColor())(`focusable`,!1),y(2),fe(s.summary),y(),F$1(s.status===`draft`?7:-1),y(),F$1((i=p.npmVersionUrl())?8:-1,i),y(),F$1((o=s.toCommit)?9:-1,o),y(2),R(`path`,s.readme)}}function H(n,e){if(n&1&&(_(0,`section`,6),xe(1,`bx-icon`,17),_(2,`h2`,18),X(3,`Release notes unavailable`),D(),_(4,`p`),X(5,` No notes are available for `),_(6,`strong`),X(7),D(),X(8,`. Choose an available version above or view the latest notes. `),D(),_(9,`a`,19),X(10,`View latest notes`),xe(11,`bx-icon`,20),D()()),n&2){let i=w();y(7),fe(i.requestedVersion()),y(2),R(`routerLink`,Lc(2,U,i.latestVersion))}}var L=class n{activatedRoute=f(fo);router=f(bo);packageReleaseService=f(g);params=eJ(this.activatedRoute.paramMap,{initialValue:this.activatedRoute.snapshot.paramMap});currentVersion=`v${c}`;latestVersion=s;unpublishedMessage=`Playground is running a build that is not yet published to NPM (v${c}).`;channels=[{value:`latest`,label:`Release`},{value:`beta`,label:`Beta`},{value:`alpha`,label:`Alpha`}];requestedVersion=g$1(()=>this.params().get(`version`)??``);release=g$1(()=>a.find(e=>e.version===this.requestedVersion()));selectedChannel=g$1(()=>this.release()?.channel??`latest`);npmVersionUrl=g$1(()=>{let e=this.release();return e?.status===`released`?`https://www.npmjs.com/package/@filip.mazev/blocks/v/${e.version}`:null});selectedVersion=g$1(()=>this.release()?.version??null);releaseLabel=g$1(()=>{let e=this.release();return e?.status===`draft`?e.channel===`alpha`?`Alpha · Draft`:`Draft`:e?.channel===`alpha`?`Alpha`:e?.channel===`beta`?`Beta`:`Released`});releaseColor=g$1(()=>{let e=this.release();return e?.status===`draft`?`warn`:e?.channel===`alpha`||e?.channel===`beta`?`info`:`success`});compareUrl=g$1(()=>{let e=this.release();return e?.toCommit?`https://github.com/filipmazev/Blocks/compare/${e.fromCommit}...${e.toCommit}`:null});versions=g$1(()=>a.filter(e=>(e.channel??`latest`)===this.selectedChannel()).map(e=>({value:e.version,label:`v${e.version}${e.status===`draft`?` · Draft`:``}`})));selectChannel(e){let i=a.find(o=>(o.channel??`latest`)===e);i&&this.selectVersion(i.version)}selectVersion(e){!e||e===this.requestedVersion()||this.router.navigate([`/release-notes`,e])}static ɵfac=function(i){return new(i||n)};static ɵcmp=G$1({type:n,selectors:[[`app-release-notes`]],decls:11,vars:9,consts:[[`pageDescription`,`Explore version changes, compatibility notes, and migration guidance.`],[`tone`,`info`,`announcement`,`polite`,1,`unpublished-banner`,3,`message`,`dismissible`],[1,`release-controls`],[`label`,`Channel`,1,`channel-select`,3,`selectionChange`,`options`,`value`,`clearable`],[`label`,`Version`,`placeholder`,`Choose a version`,1,`version-select`,3,`selectionChange`,`options`,`value`,`clearable`],[1,`current-version`],[`bxSurface`,``,`aria-labelledby`,`missing-release-title`,1,`release-summary`,`missing-release`],[`bxSurface`,``,`aria-labelledby`,`release-title`,1,`release-summary`],[1,`release-title`],[`id`,`release-title`],[`size`,`small`,3,`text`,`color`,`focusable`],[1,`draft-notice`],[`bx-button`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-label`,`Changes and migration notes`,1,`release-documentation`],[3,`path`],[`name`,`arrow-up-right`,`size`,`20`],[1,`comparison`],[`name`,`file-search`,`size`,`32`],[`id`,`missing-release-title`],[`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`20`]],template:function(i,o){if(i&1&&(_(0,`bx-page-container`,0),j$1(1,$,1,2,`bx-alert`,1),_(2,`div`,2)(3,`bx-select`,3),te(`selectionChange`,function(p){return o.selectChannel(p.value)}),D(),_(4,`bx-select`,4),te(`selectionChange`,function(p){return o.selectVersion(p.value)}),D(),_(5,`p`,5),X(6,` Playground build `),_(7,`code`),X(8),D()()(),j$1(9,G,12,9)(10,H,12,4,`section`,6),D()),i&2){let s;y(),F$1(o.packageReleaseService.unpublished()?1:-1),y(2),R(`options`,o.channels)(`value`,o.selectedChannel())(`clearable`,!1),y(),R(`options`,o.versions())(`value`,o.selectedVersion())(`clearable`,!1),y(4),fe(o.currentVersion),y(),F$1((s=o.release())?9:10,s)}},dependencies:[xT,Uf,Rt,Z,Nn,Vt,iT,cT,S],styles:[`
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