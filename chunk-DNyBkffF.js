import{n as g,t as c}from"./chunk-DWO1hiqS.js";import{E as a,O as s,a as S}from"./main-B5BGPZDX.js";import{E as jn,L as xe}from"./chunk-HfEiycvf.js";import{G as js,J as nl,R as dt,U as ji,nt as st,o as Bs}from"./chunk-DyZGtlM9.js";import{$n as YC,Cr as b,Dn as U$1,K as Fr,On as UC,Or as bo,Sa as pb,Ua as sk,Xa as td,Ya as tb,ao as ub,c as $o,et as Go,ho as vU,ja as qs,jt as M0,kr as br,mr as aA,pa as ob,u as $s}from"./chunk-DflWScik.js";var U=n=>[`/release-notes`,n];function $(n,e){if(n&1&&td(0,`bx-alert`,1),n&2){let i=$s();$o(`message`,i.unpublishedMessage)(`dismissible`,!1)}}function q(n,e){n&1&&(bo(0,`p`,11),aA(1,`These notes are a preview and may change before this version is published.`),Go())}function F(n,e){if(n&1&&(bo(0,`a`,12),aA(1),td(2,`bx-icon`,15),Go()),n&2){let i=$s();$o(`href`,e,M0),qs(),ub(` View v`,i.version,` on NPM`)}}function j(n,e){if(n&1&&(bo(0,`a`,12),aA(1,` View changes on GitHub`),td(2,`bx-icon`,15),Go(),bo(3,`p`,16)(4,`span`),aA(5,`Comparison`),Go(),bo(6,`code`),aA(7),Go(),bo(8,`span`),aA(9,`to`),Go(),bo(10,`code`),aA(11),Go()()),n&2){let i=$s(),o=$s();$o(`href`,o.compareUrl(),M0),qs(7),sk(i.fromCommit.slice(0,7)),qs(4),sk(e.slice(0,7))}}function G(n,e){if(n&1&&(bo(0,`section`,7)(1,`div`,8)(2,`h2`,9),aA(3),Go(),td(4,`bx-tag`,10),Go(),bo(5,`p`),aA(6),Go(),tb(7,q,2,0,`p`,11),tb(8,F,3,2,`a`,12),tb(9,j,12,3),Go(),bo(10,`section`,13),td(11,`app-readme`,14),Go()),n&2){let i,o,s=e,p=$s();qs(3),ub(`Blocks `,s.version),qs(),$o(`text`,p.releaseLabel())(`color`,p.releaseColor())(`focusable`,!1),qs(2),sk(s.summary),qs(),ob(s.status===`draft`?7:-1),qs(),ob((i=p.npmVersionUrl())?8:-1,i),qs(),ob((o=s.toCommit)?9:-1,o),qs(2),$o(`path`,s.readme)}}function H(n,e){if(n&1&&(bo(0,`section`,6),td(1,`bx-icon`,17),bo(2,`h2`,18),aA(3,`Release notes unavailable`),Go(),bo(4,`p`),aA(5,` No notes are available for `),bo(6,`strong`),aA(7),Go(),aA(8,`. Choose an available version above or view the latest notes. `),Go(),bo(9,`a`,19),aA(10,`View latest notes`),td(11,`bx-icon`,20),Go()()),n&2){let i=$s();qs(7),sk(i.requestedVersion()),qs(2),$o(`routerLink`,pb(2,U,i.latestVersion))}}var L=class n{activatedRoute=b(st);router=b(dt);packageReleaseService=b(g);params=vU(this.activatedRoute.paramMap,{initialValue:this.activatedRoute.snapshot.paramMap});currentVersion=`v${c}`;latestVersion=s;unpublishedMessage=`Playground is running a build that is not yet published to NPM (v${c}).`;channels=[{value:`latest`,label:`Release`},{value:`beta`,label:`Beta`},{value:`alpha`,label:`Alpha`}];requestedVersion=U$1(()=>this.params().get(`version`)??``);release=U$1(()=>a.find(e=>e.version===this.requestedVersion()));selectedChannel=U$1(()=>this.release()?.channel??`latest`);npmVersionUrl=U$1(()=>{let e=this.release();return e?.status===`released`?`https://www.npmjs.com/package/@filip.mazev/blocks/v/${e.version}`:null});selectedVersion=U$1(()=>this.release()?.version??null);releaseLabel=U$1(()=>{let e=this.release();return e?.status===`draft`?e.channel===`alpha`?`Alpha · Draft`:`Draft`:e?.channel===`alpha`?`Alpha`:e?.channel===`beta`?`Beta`:`Released`});releaseColor=U$1(()=>{let e=this.release();return e?.status===`draft`?`warn`:e?.channel===`alpha`||e?.channel===`beta`?`info`:`success`});compareUrl=U$1(()=>{let e=this.release();return e?.toCommit?`https://github.com/filipmazev/Blocks/compare/${e.fromCommit}...${e.toCommit}`:null});versions=U$1(()=>a.filter(e=>(e.channel??`latest`)===this.selectedChannel()).map(e=>({value:e.version,label:`v${e.version}${e.status===`draft`?` · Draft`:``}`})));selectChannel(e){let i=a.find(o=>(o.channel??`latest`)===e);i&&this.selectVersion(i.version)}selectVersion(e){!e||e===this.requestedVersion()||this.router.navigate([`/release-notes`,e])}static ɵfac=function(i){return new(i||n)};static ɵcmp=Fr({type:n,selectors:[[`app-release-notes`]],decls:11,vars:9,consts:[[`pageDescription`,`Explore version changes, compatibility notes, and migration guidance.`],[`tone`,`info`,`announcement`,`polite`,1,`unpublished-banner`,3,`message`,`dismissible`],[1,`release-controls`],[`label`,`Channel`,1,`channel-select`,3,`selectionChange`,`options`,`value`,`clearable`],[`label`,`Version`,`placeholder`,`Choose a version`,1,`version-select`,3,`selectionChange`,`options`,`value`,`clearable`],[1,`current-version`],[`bxSurface`,``,`aria-labelledby`,`missing-release-title`,1,`release-summary`,`missing-release`],[`bxSurface`,``,`aria-labelledby`,`release-title`,1,`release-summary`],[1,`release-title`],[`id`,`release-title`],[`size`,`small`,3,`text`,`color`,`focusable`],[1,`draft-notice`],[`bx-button`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-label`,`Changes and migration notes`,1,`release-documentation`],[3,`path`],[`name`,`arrow-up-right`,`size`,`20`],[1,`comparison`],[`name`,`file-search`,`size`,`32`],[`id`,`missing-release-title`],[`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`20`]],template:function(i,o){if(i&1&&(bo(0,`bx-page-container`,0),tb(1,$,1,2,`bx-alert`,1),bo(2,`div`,2)(3,`bx-select`,3),br(`selectionChange`,function(p){return o.selectChannel(p.value)}),Go(),bo(4,`bx-select`,4),br(`selectionChange`,function(p){return o.selectVersion(p.value)}),Go(),bo(5,`p`,5),aA(6,` Playground build `),bo(7,`code`),aA(8),Go()()(),tb(9,G,12,9)(10,H,12,4,`section`,6),Go()),i&2){let s;qs(),ob(o.packageReleaseService.unpublished()?1:-1),qs(2),$o(`options`,o.channels)(`value`,o.selectedChannel())(`clearable`,!1),qs(),$o(`options`,o.versions())(`value`,o.selectedVersion())(`clearable`,!1),qs(4),sk(o.currentVersion),qs(),ob((s=o.release())?9:10,s)}},dependencies:[nl,ji,UC,xe,jn,YC,Bs,js,S],styles:[`
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