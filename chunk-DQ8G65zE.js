import{n as m,t as h}from"./chunk-BxnlY5pk.js";import{n as w}from"./chunk-DTPx3lgi.js";import{K as a,q as s,v as Ni}from"./main-2GBJQHUZ.js";import{r as Z}from"./chunk-DUDY88j1.js";import{Ai as tt,Bi as wn,Di as te,En as YC,Fn as _p,Jt as Se,Qi as y,Wn as bO,X as Ir,ci as p,di as pe,ea as ye,er as de,fi as qM,in as U$1,ir as eI,jr as k,l as Be,la as zt,oi as oe,rn as Tr,tt as KM,vt as Ne,wr as j$1,yi as rr,zi as wX}from"./chunk-CfQ5k3AW.js";var U=n=>[`/release-notes`,n];function $(n,e){if(n&1&&tt(0,`bx-alert`,1),n&2){let i=U$1();ye(`message`,i.unpublishedMessage)(`dismissible`,!1)}}function q(n,e){n&1&&(te(0,`p`,11),Se(1,`These notes are a preview and may change before this version is published.`),oe())}function F(n,e){if(n&1&&(te(0,`a`,12),Se(1),tt(2,`bx-icon`,15),oe()),n&2){let i=U$1();ye(`href`,e,YC),k(),rr(` View v`,i.version,` on NPM`)}}function j(n,e){if(n&1&&(te(0,`a`,12),Se(1,` View changes on GitHub`),tt(2,`bx-icon`,15),oe(),te(3,`p`,16)(4,`span`),Se(5,`Comparison`),oe(),te(6,`code`),Se(7),oe(),te(8,`span`),Se(9,`to`),oe(),te(10,`code`),Se(11),oe()()),n&2){let i=U$1(),o=U$1();ye(`href`,o.compareUrl(),YC),k(7),Be(i.fromCommit.slice(0,7)),k(4),Be(e.slice(0,7))}}function G(n,e){if(n&1&&(te(0,`section`,7)(1,`div`,8)(2,`h2`,9),Se(3),oe(),tt(4,`bx-tag`,10),oe(),te(5,`p`),Se(6),oe(),de(7,q,2,0,`p`,11),de(8,F,3,2,`a`,12),de(9,j,12,3),oe(),te(10,`section`,13),tt(11,`app-readme`,14),oe()),n&2){let i,o,s=e,p=U$1();k(3),rr(`Blocks `,s.version),k(),ye(`text`,p.releaseLabel())(`color`,p.releaseColor())(`focusable`,!1),k(2),Be(s.summary),k(),pe(s.status===`draft`?7:-1),k(),pe((i=p.npmVersionUrl())?8:-1,i),k(),pe((o=s.toCommit)?9:-1,o),k(2),ye(`path`,s.readme)}}function H(n,e){if(n&1&&(te(0,`section`,6),tt(1,`bx-icon`,17),te(2,`h2`,18),Se(3,`Release notes unavailable`),oe(),te(4,`p`),Se(5,` No notes are available for `),te(6,`strong`),Se(7),oe(),Se(8,`. Choose an available version above or view the latest notes. `),oe(),te(9,`a`,19),Se(10,`View latest notes`),tt(11,`bx-icon`,20),oe()()),n&2){let i=U$1();k(7),Be(i.requestedVersion()),k(2),ye(`routerLink`,bO(2,U,i.latestVersion))}}var L=class n{activatedRoute=p(Ir);router=p(Tr);packageReleaseService=p(h);params=wX(this.activatedRoute.paramMap,{initialValue:this.activatedRoute.snapshot.paramMap});currentVersion=`v${m}`;latestVersion=s;unpublishedMessage=`Playground is running a build that is not yet published to NPM (v${m}).`;channels=[{value:`latest`,label:`Release`},{value:`beta`,label:`Beta`},{value:`alpha`,label:`Alpha`}];requestedVersion=y(()=>this.params().get(`version`)??``);release=y(()=>a.find(e=>e.version===this.requestedVersion()));selectedChannel=y(()=>this.release()?.channel??`latest`);npmVersionUrl=y(()=>{let e=this.release();return e?.status===`released`?`https://www.npmjs.com/package/@filip.mazev/blocks/v/${e.version}`:null});selectedVersion=y(()=>this.release()?.version??null);releaseLabel=y(()=>{let e=this.release();return e?.status===`draft`?e.channel===`alpha`?`Alpha · Draft`:`Draft`:e?.channel===`alpha`?`Alpha`:e?.channel===`beta`?`Beta`:`Released`});releaseColor=y(()=>{let e=this.release();return e?.status===`draft`?`warn`:e?.channel===`alpha`||e?.channel===`beta`?`info`:`success`});compareUrl=y(()=>{let e=this.release();return e?.toCommit?`https://github.com/filipmazev/Blocks/compare/${e.fromCommit}...${e.toCommit}`:null});versions=y(()=>a.filter(e=>(e.channel??`latest`)===this.selectedChannel()).map(e=>({value:e.version,label:`v${e.version}${e.status===`draft`?` · Draft`:``}`})));selectChannel(e){let i=a.find(o=>(o.channel??`latest`)===e);i&&this.selectVersion(i.version)}selectVersion(e){!e||e===this.requestedVersion()||this.router.navigate([`/release-notes`,e])}static ɵfac=function(i){return new(i||n)};static ɵcmp=j$1({type:n,selectors:[[`app-release-notes`]],decls:11,vars:9,consts:[[`pageDescription`,`Explore version changes, compatibility notes, and migration guidance.`],[`tone`,`info`,`announcement`,`polite`,1,`unpublished-banner`,3,`message`,`dismissible`],[1,`release-controls`],[`label`,`Channel`,1,`channel-select`,3,`selectionChange`,`options`,`value`,`clearable`],[`label`,`Version`,`placeholder`,`Choose a version`,1,`version-select`,3,`selectionChange`,`options`,`value`,`clearable`],[1,`current-version`],[`bxSurface`,``,`aria-labelledby`,`missing-release-title`,1,`release-summary`,`missing-release`],[`bxSurface`,``,`aria-labelledby`,`release-title`,1,`release-summary`],[1,`release-title`],[`id`,`release-title`],[`size`,`small`,3,`text`,`color`,`focusable`],[1,`draft-notice`],[`bx-button`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-label`,`Changes and migration notes`,1,`release-documentation`],[3,`path`],[`name`,`arrow-up-right`,`size`,`20`],[1,`comparison`],[`name`,`file-search`,`size`,`32`],[`id`,`missing-release-title`],[`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`20`]],template:function(i,o){if(i&1&&(te(0,`bx-page-container`,0),de(1,$,1,2,`bx-alert`,1),te(2,`div`,2)(3,`bx-select`,3),Ne(`selectionChange`,function(p){return o.selectChannel(p.value)}),oe(),te(4,`bx-select`,4),Ne(`selectionChange`,function(p){return o.selectVersion(p.value)}),oe(),te(5,`p`,5),Se(6,` Playground build `),te(7,`code`),Se(8),oe()()(),de(9,G,12,9)(10,H,12,4,`section`,6),oe()),i&2){let s;k(),pe(o.packageReleaseService.unpublished()?1:-1),k(2),ye(`options`,o.channels)(`value`,o.selectedChannel())(`clearable`,!1),k(),ye(`options`,o.versions())(`value`,o.selectedVersion())(`clearable`,!1),k(4),Be(o.currentVersion),k(),pe((s=o.release())?9:10,s)}},dependencies:[eI,_p,zt,Z,Ni,wn,qM,KM,w],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.unpublished-banner[_ngcontent-%COMP%] {
  display: block;
  margin-block-end: 1.5rem;
}
.release-controls[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;
  margin-block-end: 1.5rem;
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
  .channel-select[_ngcontent-%COMP%], 
   .version-select[_ngcontent-%COMP%] {
    flex-basis: 100%;
  }
  .release-summary[_ngcontent-%COMP%] {
    padding: 1rem;
  }
}`]})};export{L as ReleaseNotes};