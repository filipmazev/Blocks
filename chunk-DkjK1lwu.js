import{n as g,t as c}from"./chunk-CIZofWn0.js";import{i as a,o as s,r as S}from"./main-ZZPER4U3.js";import{D as fe,w as Vt}from"./chunk-BEm-ihzG.js";import{B as dt,C as Vs,et as st,it as zs,tt as tl,x as Vi}from"./chunk-DE1qZ0OS.js";import{t as U$1}from"./chunk-1rrlZ2Ss.js";import{$r as fa,Ba as rm,In as XT,Lt as Os,Sr as ba,Xt as Ql,ai as gT,ar as Zy,b as Cy,ct as K,en as RD,fa as nm,i as $n,pr as a9,qi as m,wr as br,xi as hv,xn as Ul,xr as bT}from"./chunk-CVY9_LoB.js";var U=n=>[`/release-notes`,n];function $(n,e){if(n&1&&Cy(0,`bx-alert`,1),n&2){let i=Ql();fa(`message`,i.unpublishedMessage)(`dismissible`,!1)}}function q(n,e){n&1&&(Os(0,`p`,11),XT(1,`These notes are a preview and may change before this version is published.`),ba())}function F(n,e){if(n&1&&(Os(0,`a`,12),XT(1),Cy(2,`bx-icon`,15),ba()),n&2){let i=Ql();fa(`href`,e,hv),Ul(),rm(` View v`,i.version,` on NPM`)}}function j(n,e){if(n&1&&(Os(0,`a`,12),XT(1,` View changes on GitHub`),Cy(2,`bx-icon`,15),ba(),Os(3,`p`,16)(4,`span`),XT(5,`Comparison`),ba(),Os(6,`code`),XT(7),ba(),Os(8,`span`),XT(9,`to`),ba(),Os(10,`code`),XT(11),ba()()),n&2){let i=Ql(),o=Ql();fa(`href`,o.compareUrl(),hv),Ul(7),Zy(i.fromCommit.slice(0,7)),Ul(4),Zy(e.slice(0,7))}}function G(n,e){if(n&1&&(Os(0,`section`,7)(1,`div`,8)(2,`h2`,9),XT(3),ba(),Cy(4,`bx-tag`,10),ba(),Os(5,`p`),XT(6),ba(),bT(7,q,2,0,`p`,11),bT(8,F,3,2,`a`,12),bT(9,j,12,3),ba(),Os(10,`section`,13),Cy(11,`app-readme`,14),ba()),n&2){let i,o,s=e,p=Ql();Ul(3),rm(`Blocks `,s.version),Ul(),fa(`text`,p.releaseLabel())(`color`,p.releaseColor())(`focusable`,!1),Ul(2),Zy(s.summary),Ul(),gT(s.status===`draft`?7:-1),Ul(),gT((i=p.npmVersionUrl())?8:-1,i),Ul(),gT((o=s.toCommit)?9:-1,o),Ul(2),fa(`path`,s.readme)}}function H(n,e){if(n&1&&(Os(0,`section`,6),Cy(1,`bx-icon`,17),Os(2,`h2`,18),XT(3,`Release notes unavailable`),ba(),Os(4,`p`),XT(5,` No notes are available for `),Os(6,`strong`),XT(7),ba(),XT(8,`. Choose an available version above or view the latest notes. `),ba(),Os(9,`a`,19),XT(10,`View latest notes`),Cy(11,`bx-icon`,20),ba()()),n&2){let i=Ql();Ul(7),Zy(i.requestedVersion()),Ul(2),fa(`routerLink`,nm(2,U,i.latestVersion))}}var L=class n{activatedRoute=m(st);router=m(dt);packageReleaseService=m(g);params=a9(this.activatedRoute.paramMap,{initialValue:this.activatedRoute.snapshot.paramMap});currentVersion=`v${c}`;latestVersion=s;unpublishedMessage=`Playground is running a build that is not yet published to NPM (v${c}).`;channels=[{value:`latest`,label:`Release`},{value:`beta`,label:`Beta`},{value:`alpha`,label:`Alpha`}];requestedVersion=K(()=>this.params().get(`version`)??``);release=K(()=>a.find(e=>e.version===this.requestedVersion()));selectedChannel=K(()=>this.release()?.channel??`latest`);npmVersionUrl=K(()=>{let e=this.release();return e?.status===`released`?`https://www.npmjs.com/package/@filip.mazev/blocks/v/${e.version}`:null});selectedVersion=K(()=>this.release()?.version??null);releaseLabel=K(()=>{let e=this.release();return e?.status===`draft`?e.channel===`alpha`?`Alpha · Draft`:`Draft`:e?.channel===`alpha`?`Alpha`:e?.channel===`beta`?`Beta`:`Released`});releaseColor=K(()=>{let e=this.release();return e?.status===`draft`?`warn`:e?.channel===`alpha`||e?.channel===`beta`?`info`:`success`});compareUrl=K(()=>{let e=this.release();return e?.toCommit?`https://github.com/filipmazev/Blocks/compare/${e.fromCommit}...${e.toCommit}`:null});versions=K(()=>a.filter(e=>(e.channel??`latest`)===this.selectedChannel()).map(e=>({value:e.version,label:`v${e.version}${e.status===`draft`?` · Draft`:``}`})));selectChannel(e){let i=a.find(o=>(o.channel??`latest`)===e);i&&this.selectVersion(i.version)}selectVersion(e){!e||e===this.requestedVersion()||this.router.navigate([`/release-notes`,e])}static ɵfac=function(i){return new(i||n)};static ɵcmp=$n({type:n,selectors:[[`app-release-notes`]],decls:11,vars:9,consts:[[`pageDescription`,`Explore version changes, compatibility notes, and migration guidance.`],[`tone`,`info`,`announcement`,`polite`,1,`unpublished-banner`,3,`message`,`dismissible`],[1,`release-controls`],[`label`,`Channel`,1,`channel-select`,3,`selectionChange`,`options`,`value`,`clearable`],[`label`,`Version`,`placeholder`,`Choose a version`,1,`version-select`,3,`selectionChange`,`options`,`value`,`clearable`],[1,`current-version`],[`bxSurface`,``,`aria-labelledby`,`missing-release-title`,1,`release-summary`,`missing-release`],[`bxSurface`,``,`aria-labelledby`,`release-title`,1,`release-summary`],[1,`release-title`],[`id`,`release-title`],[`size`,`small`,3,`text`,`color`,`focusable`],[1,`draft-notice`],[`bx-button`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-label`,`Changes and migration notes`,1,`release-documentation`],[3,`path`],[`name`,`arrow-up-right`,`size`,`20`],[1,`comparison`],[`name`,`file-search`,`size`,`32`],[`id`,`missing-release-title`],[`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`20`]],template:function(i,o){if(i&1&&(Os(0,`bx-page-container`,0),bT(1,$,1,2,`bx-alert`,1),Os(2,`div`,2)(3,`bx-select`,3),br(`selectionChange`,function(p){return o.selectChannel(p.value)}),ba(),Os(4,`bx-select`,4),br(`selectionChange`,function(p){return o.selectVersion(p.value)}),ba(),Os(5,`p`,5),XT(6,` Playground build `),Os(7,`code`),XT(8),ba()()(),bT(9,G,12,9)(10,H,12,4,`section`,6),ba()),i&2){let s;Ul(),gT(o.packageReleaseService.unpublished()?1:-1),Ul(2),fa(`options`,o.channels)(`value`,o.selectedChannel())(`clearable`,!1),Ul(),fa(`options`,o.versions())(`value`,o.selectedVersion())(`clearable`,!1),Ul(4),Zy(o.currentVersion),Ul(),gT((s=o.release())?9:10,s)}},dependencies:[tl,Vi,RD,fe,Vt,U$1,zs,Vs,S],styles:[`
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