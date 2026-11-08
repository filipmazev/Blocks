import{n as g,t as c}from"./chunk-GrnevQHK.js";import{A as S,N as s,j as a,w as rr}from"./main-5HCVZCER.js";import{n as Z}from"./chunk-BbcioGCK.js";import{A as E,B as Ft,Cr as de,Da as wM,G as H$1,Gr as hn,Hi as p,It as NY,La as ye,Qn as Zr,Ra as yk,X as He,Xi as q$1,a as $p,bn as Te,et as IM,gr as ce,h as Be,ht as Kr,ka as wr,mi as le,ot as JA,t as $$1,ur as bM,vt as L$1,wa as v}from"./chunk-7QWHf5Iu.js";var U=n=>[`/release-notes`,n];function $(n,e){if(n&1&&Be(0,`bx-alert`,1),n&2){let i=L$1();le(`message`,i.unpublishedMessage)(`dismissible`,!1)}}function q(n,e){n&1&&($$1(0,`p`,11),Te(1,`These notes are a preview and may change before this version is published.`),q$1())}function F(n,e){if(n&1&&($$1(0,`a`,12),Te(1),Be(2,`bx-icon`,15),q$1()),n&2){let i=L$1();le(`href`,e,yk),E(),wr(` View v`,i.version,` on NPM`)}}function j(n,e){if(n&1&&($$1(0,`a`,12),Te(1,` View changes on GitHub`),Be(2,`bx-icon`,15),q$1(),$$1(3,`p`,16)(4,`span`),Te(5,`Comparison`),q$1(),$$1(6,`code`),Te(7),q$1(),$$1(8,`span`),Te(9,`to`),q$1(),$$1(10,`code`),Te(11),q$1()()),n&2){let i=L$1(),o=L$1();le(`href`,o.compareUrl(),yk),E(7),He(i.fromCommit.slice(0,7)),E(4),He(e.slice(0,7))}}function G(n,e){if(n&1&&($$1(0,`section`,7)(1,`div`,8)(2,`h2`,9),Te(3),q$1(),Be(4,`bx-tag`,10),q$1(),$$1(5,`p`),Te(6),q$1(),ce(7,q,2,0,`p`,11),ce(8,F,3,2,`a`,12),ce(9,j,12,3),q$1(),$$1(10,`section`,13),Be(11,`app-readme`,14),q$1()),n&2){let i,o,s=e,p=L$1();E(3),wr(`Blocks `,s.version),E(),le(`text`,p.releaseLabel())(`color`,p.releaseColor())(`focusable`,!1),E(2),He(s.summary),E(),de(s.status===`draft`?7:-1),E(),de((i=p.npmVersionUrl())?8:-1,i),E(),de((o=s.toCommit)?9:-1,o),E(2),le(`path`,s.readme)}}function H(n,e){if(n&1&&($$1(0,`section`,6),Be(1,`bx-icon`,17),$$1(2,`h2`,18),Te(3,`Release notes unavailable`),q$1(),$$1(4,`p`),Te(5,` No notes are available for `),$$1(6,`strong`),Te(7),q$1(),Te(8,`. Choose an available version above or view the latest notes. `),q$1(),$$1(9,`a`,19),Te(10,`View latest notes`),Be(11,`bx-icon`,20),q$1()()),n&2){let i=L$1();E(7),He(i.requestedVersion()),E(2),le(`routerLink`,JA(2,U,i.latestVersion))}}var L=class n{activatedRoute=p(Kr);router=p(Zr);packageReleaseService=p(g);params=NY(this.activatedRoute.paramMap,{initialValue:this.activatedRoute.snapshot.paramMap});currentVersion=`v${c}`;latestVersion=s;unpublishedMessage=`Playground is running a build that is not yet published to NPM (v${c}).`;channels=[{value:`latest`,label:`Release`},{value:`beta`,label:`Beta`},{value:`alpha`,label:`Alpha`}];requestedVersion=v(()=>this.params().get(`version`)??``);release=v(()=>a.find(e=>e.version===this.requestedVersion()));selectedChannel=v(()=>this.release()?.channel??`latest`);npmVersionUrl=v(()=>{let e=this.release();return e?.status===`released`?`https://www.npmjs.com/package/@filip.mazev/blocks/v/${e.version}`:null});selectedVersion=v(()=>this.release()?.version??null);releaseLabel=v(()=>{let e=this.release();return e?.status===`draft`?e.channel===`alpha`?`Alpha · Draft`:`Draft`:e?.channel===`alpha`?`Alpha`:e?.channel===`beta`?`Beta`:`Released`});releaseColor=v(()=>{let e=this.release();return e?.status===`draft`?`warn`:e?.channel===`alpha`||e?.channel===`beta`?`info`:`success`});compareUrl=v(()=>{let e=this.release();return e?.toCommit?`https://github.com/filipmazev/Blocks/compare/${e.fromCommit}...${e.toCommit}`:null});versions=v(()=>a.filter(e=>(e.channel??`latest`)===this.selectedChannel()).map(e=>({value:e.version,label:`v${e.version}${e.status===`draft`?` · Draft`:``}`})));selectChannel(e){let i=a.find(o=>(o.channel??`latest`)===e);i&&this.selectVersion(i.version)}selectVersion(e){!e||e===this.requestedVersion()||this.router.navigate([`/release-notes`,e])}static ɵfac=function(i){return new(i||n)};static ɵcmp=H$1({type:n,selectors:[[`app-release-notes`]],decls:11,vars:9,consts:[[`pageDescription`,`Explore version changes, compatibility notes, and migration guidance.`],[`tone`,`info`,`announcement`,`polite`,1,`unpublished-banner`,3,`message`,`dismissible`],[1,`release-controls`],[`label`,`Channel`,1,`channel-select`,3,`selectionChange`,`options`,`value`,`clearable`],[`label`,`Version`,`placeholder`,`Choose a version`,1,`version-select`,3,`selectionChange`,`options`,`value`,`clearable`],[1,`current-version`],[`bxSurface`,``,`aria-labelledby`,`missing-release-title`,1,`release-summary`,`missing-release`],[`bxSurface`,``,`aria-labelledby`,`release-title`,1,`release-summary`],[1,`release-title`],[`id`,`release-title`],[`size`,`small`,3,`text`,`color`,`focusable`],[1,`draft-notice`],[`bx-button`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-label`,`Changes and migration notes`,1,`release-documentation`],[3,`path`],[`name`,`arrow-up-right`,`size`,`20`],[1,`comparison`],[`name`,`file-search`,`size`,`32`],[`id`,`missing-release-title`],[`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`20`]],template:function(i,o){if(i&1&&($$1(0,`bx-page-container`,0),ce(1,$,1,2,`bx-alert`,1),$$1(2,`div`,2)(3,`bx-select`,3),ye(`selectionChange`,function(p){return o.selectChannel(p.value)}),q$1(),$$1(4,`bx-select`,4),ye(`selectionChange`,function(p){return o.selectVersion(p.value)}),q$1(),$$1(5,`p`,5),Te(6,` Playground build `),$$1(7,`code`),Te(8),q$1()()(),ce(9,G,12,9)(10,H,12,4,`section`,6),q$1()),i&2){let s;E(),de(o.packageReleaseService.unpublished()?1:-1),E(2),le(`options`,o.channels)(`value`,o.selectedChannel())(`clearable`,!1),E(),le(`options`,o.versions())(`value`,o.selectedVersion())(`clearable`,!1),E(4),He(o.currentVersion),E(),de((s=o.release())?9:10,s)}},dependencies:[IM,$p,Ft,Z,rr,hn,bM,wM,S],styles:[`
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