import{n as g,t as c}from"./chunk-8yFv8GXj.js";import{n as k}from"./chunk-Cmi_v6t9.js";import{J as Z,N as s,h as eo,j as a}from"./main-VEYCVDKS.js";import{$r as je,Ft as Ot,Gr as iM,M as F$1,Mr as gr,Ot as O1,S as D,Sr as fn,Ur as iC,Xr as j$1,Y as Hr,aa as ve,br as fM,hn as Ve,in as Te,ni as jr,on as U$1,qi as tM,qn as ae,qr as ie,ra as v,sr as cY,un as V,wi as p,yi as oe,zt as Pp}from"./chunk-B79cUMdP.js";var U=n=>[`/release-notes`,n];function $(n,e){if(n&1&&Ve(0,`bx-alert`,1),n&2){let i=F$1();ae(`message`,i.unpublishedMessage)(`dismissible`,!1)}}function q(n,e){n&1&&(j$1(0,`p`,11),Te(1,`These notes are a preview and may change before this version is published.`),U$1())}function F(n,e){if(n&1&&(j$1(0,`a`,12),Te(1),Ve(2,`bx-icon`,15),U$1()),n&2){let i=F$1();ae(`href`,e,iC),D(),gr(` View v`,i.version,` on NPM`)}}function j(n,e){if(n&1&&(j$1(0,`a`,12),Te(1,` View changes on GitHub`),Ve(2,`bx-icon`,15),U$1(),j$1(3,`p`,16)(4,`span`),Te(5,`Comparison`),U$1(),j$1(6,`code`),Te(7),U$1(),j$1(8,`span`),Te(9,`to`),U$1(),j$1(10,`code`),Te(11),U$1()()),n&2){let i=F$1(),o=F$1();ae(`href`,o.compareUrl(),iC),D(7),je(i.fromCommit.slice(0,7)),D(4),je(e.slice(0,7))}}function G(n,e){if(n&1&&(j$1(0,`section`,7)(1,`div`,8)(2,`h2`,9),Te(3),U$1(),Ve(4,`bx-tag`,10),U$1(),j$1(5,`p`),Te(6),U$1(),oe(7,q,2,0,`p`,11),oe(8,F,3,2,`a`,12),oe(9,j,12,3),U$1(),j$1(10,`section`,13),Ve(11,`app-readme`,14),U$1()),n&2){let i,o,s=e,p=F$1();D(3),gr(`Blocks `,s.version),D(),ae(`text`,p.releaseLabel())(`color`,p.releaseColor())(`focusable`,!1),D(2),je(s.summary),D(),ie(s.status===`draft`?7:-1),D(),ie((i=p.npmVersionUrl())?8:-1,i),D(),ie((o=s.toCommit)?9:-1,o),D(2),ae(`path`,s.readme)}}function H(n,e){if(n&1&&(j$1(0,`section`,6),Ve(1,`bx-icon`,17),j$1(2,`h2`,18),Te(3,`Release notes unavailable`),U$1(),j$1(4,`p`),Te(5,` No notes are available for `),j$1(6,`strong`),Te(7),U$1(),Te(8,`. Choose an available version above or view the latest notes. `),U$1(),j$1(9,`a`,19),Te(10,`View latest notes`),Ve(11,`bx-icon`,20),U$1()()),n&2){let i=F$1();D(7),je(i.requestedVersion()),D(2),ae(`routerLink`,O1(2,U,i.latestVersion))}}var L=class n{activatedRoute=p(jr);router=p(Hr);packageReleaseService=p(g);params=cY(this.activatedRoute.paramMap,{initialValue:this.activatedRoute.snapshot.paramMap});currentVersion=`v${c}`;latestVersion=s;unpublishedMessage=`Playground is running a build that is not yet published to NPM (v${c}).`;channels=[{value:`latest`,label:`Release`},{value:`beta`,label:`Beta`},{value:`alpha`,label:`Alpha`}];requestedVersion=v(()=>this.params().get(`version`)??``);release=v(()=>a.find(e=>e.version===this.requestedVersion()));selectedChannel=v(()=>this.release()?.channel??`latest`);npmVersionUrl=v(()=>{let e=this.release();return e?.status===`released`?`https://www.npmjs.com/package/@filip.mazev/blocks/v/${e.version}`:null});selectedVersion=v(()=>this.release()?.version??null);releaseLabel=v(()=>{let e=this.release();return e?.status===`draft`?e.channel===`alpha`?`Alpha · Draft`:`Draft`:e?.channel===`alpha`?`Alpha`:e?.channel===`beta`?`Beta`:`Released`});releaseColor=v(()=>{let e=this.release();return e?.status===`draft`?`warn`:e?.channel===`alpha`||e?.channel===`beta`?`info`:`success`});compareUrl=v(()=>{let e=this.release();return e?.toCommit?`https://github.com/filipmazev/Blocks/compare/${e.fromCommit}...${e.toCommit}`:null});versions=v(()=>a.filter(e=>(e.channel??`latest`)===this.selectedChannel()).map(e=>({value:e.version,label:`v${e.version}${e.status===`draft`?` · Draft`:``}`})));selectChannel(e){let i=a.find(o=>(o.channel??`latest`)===e);i&&this.selectVersion(i.version)}selectVersion(e){!e||e===this.requestedVersion()||this.router.navigate([`/release-notes`,e])}static ɵfac=function(i){return new(i||n)};static ɵcmp=V({type:n,selectors:[[`app-release-notes`]],decls:11,vars:9,consts:[[`pageDescription`,`Explore version changes, compatibility notes, and migration guidance.`],[`tone`,`info`,`announcement`,`polite`,1,`unpublished-banner`,3,`message`,`dismissible`],[1,`release-controls`],[`label`,`Channel`,1,`channel-select`,3,`selectionChange`,`options`,`value`,`clearable`],[`label`,`Version`,`placeholder`,`Choose a version`,1,`version-select`,3,`selectionChange`,`options`,`value`,`clearable`],[1,`current-version`],[`bxSurface`,``,`aria-labelledby`,`missing-release-title`,1,`release-summary`,`missing-release`],[`bxSurface`,``,`aria-labelledby`,`release-title`,1,`release-summary`],[1,`release-title`],[`id`,`release-title`],[`size`,`small`,3,`text`,`color`,`focusable`],[1,`draft-notice`],[`bx-button`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-label`,`Changes and migration notes`,1,`release-documentation`],[3,`path`],[`name`,`arrow-up-right`,`size`,`20`],[1,`comparison`],[`name`,`file-search`,`size`,`32`],[`id`,`missing-release-title`],[`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`20`]],template:function(i,o){if(i&1&&(j$1(0,`bx-page-container`,0),oe(1,$,1,2,`bx-alert`,1),j$1(2,`div`,2)(3,`bx-select`,3),ve(`selectionChange`,function(p){return o.selectChannel(p.value)}),U$1(),j$1(4,`bx-select`,4),ve(`selectionChange`,function(p){return o.selectVersion(p.value)}),U$1(),j$1(5,`p`,5),Te(6,` Playground build `),j$1(7,`code`),Te(8),U$1()()(),oe(9,G,12,9)(10,H,12,4,`section`,6),U$1()),i&2){let s;D(),ie(o.packageReleaseService.unpublished()?1:-1),D(2),ae(`options`,o.channels)(`value`,o.selectedChannel())(`clearable`,!1),D(),ae(`options`,o.versions())(`value`,o.selectedVersion())(`clearable`,!1),D(4),je(o.currentVersion),D(),ie((s=o.release())?9:10,s)}},dependencies:[fM,Pp,Ot,Z,eo,fn,tM,iM,k],styles:[`
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