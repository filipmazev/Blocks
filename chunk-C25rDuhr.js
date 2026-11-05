import{n as m,t as h}from"./chunk-CB_1FVvr.js";import{n as w}from"./chunk-DGgo5410.js";import{M as s,j as a,y as Ni}from"./main-2D43OMMH.js";import{An as ae,Ar as mO,Bn as de,Br as ne,Ei as vt,Gr as p,K as K0,N as Gh,Q as L$1,Sn as _,Wi as ze,bt as P,d as B,j as Fr,jn as b,lr as iD,mt as Ne,t as $0,u as An,vi as ue,vr as k7,vt as Nt,wt as Pr,yn as Zk,yt as Oe,zi as ye}from"./chunk-EuYK8zUg.js";var L=a=>[`/release-notes`,a];function U(a,e){if(a&1&&Oe(0,`bx-alert`,1),a&2){let r=ae();ne(`message`,r.unpublishedMessage)(`dismissible`,!1)}}function $(a,e){a&1&&(P(0,`p`,13),Ne(1,`These notes are a preview and may change before this version is published.`),L$1())}function q(a,e){if(a&1&&(P(0,`a`,14),Ne(1),Oe(2,`bx-icon`,17),L$1()),a&2){let r=ae();ne(`href`,e,Zk),_(),An(` View v`,r.version,` on NPM`)}}function F(a,e){if(a&1&&(P(0,`a`,14),Ne(1,` View changes on GitHub`),Oe(2,`bx-icon`,17),L$1(),P(3,`p`,18)(4,`span`),Ne(5,`Comparison`),L$1(),P(6,`code`),Ne(7),L$1(),P(8,`span`),Ne(9,`to`),L$1(),P(10,`code`),Ne(11),L$1()()),a&2){let r=ae(),o=ae();ne(`href`,o.compareUrl(),Zk),_(7),ze(r.fromCommit.slice(0,7)),_(4),ze(e.slice(0,7))}}function j(a,e){if(a&1&&(P(0,`section`,9)(1,`div`,10)(2,`h2`,11),Ne(3),L$1(),Oe(4,`bx-tag`,12),L$1(),P(5,`p`),Ne(6),L$1(),ue(7,$,2,0,`p`,13),ue(8,q,3,2,`a`,14),ue(9,F,12,3),L$1(),P(10,`section`,15),Oe(11,`app-readme`,16),L$1()),a&2){let r,o,s=e,p=ae();_(3),An(`Blocks `,s.version),_(),ne(`text`,p.releaseLabel())(`color`,p.releaseColor())(`focusable`,!1),_(2),ze(s.summary),_(),de(s.status===`draft`?7:-1),_(),de((r=p.npmVersionUrl())?8:-1,r),_(),de((o=s.toCommit)?9:-1,o),_(2),ne(`path`,s.readme)}}function G(a,e){if(a&1&&(P(0,`section`,8),Oe(1,`bx-icon`,19),P(2,`h2`,20),Ne(3,`Release notes unavailable`),L$1(),P(4,`p`),Ne(5,` No notes are available for `),P(6,`strong`),Ne(7),L$1(),Ne(8,`. Choose an available version above or view the latest notes. `),L$1(),P(9,`a`,21),Ne(10,`View latest notes`),Oe(11,`bx-icon`,22),L$1()()),a&2){let r=ae();_(7),ze(r.requestedVersion()),_(2),ne(`routerLink`,mO(2,L,r.latestVersion))}}var A=class a$1{route=p(Pr);router=p(Fr);releases=p(h);params=k7(this.route.paramMap,{initialValue:this.route.snapshot.paramMap});currentVersion=`v${m}`;latestVersion=s;unpublishedMessage=`Playground is running a build that is not yet published to NPM (v${m}).`;channels=[{value:`latest`,label:`Release`},{value:`beta`,label:`Beta`},{value:`alpha`,label:`Alpha`}];requestedVersion=b(()=>this.params().get(`version`)??``);release=b(()=>a.find(e=>e.version===this.requestedVersion()));selectedChannel=b(()=>this.release()?.channel??`latest`);npmVersionUrl=b(()=>{let e=this.release();return e?.status===`released`?`https://www.npmjs.com/package/@filip.mazev/blocks/v/${e.version}`:null});selectedVersion=b(()=>this.release()?.version??null);releaseLabel=b(()=>{let e=this.release();return e?.status===`draft`?e.channel===`alpha`?`Alpha · Draft`:`Draft`:e?.channel===`alpha`?`Alpha`:e?.channel===`beta`?`Beta`:`Released`});releaseColor=b(()=>{let e=this.release();return e?.status===`draft`?`warn`:e?.channel===`alpha`||e?.channel===`beta`?`info`:`success`});compareUrl=b(()=>{let e=this.release();return e?.toCommit?`https://github.com/filipmazev/Blocks/compare/${e.fromCommit}...${e.toCommit}`:null});versions=b(()=>a.filter(e=>(e.channel??`latest`)===this.selectedChannel()).map(e=>({value:e.version,label:`v${e.version}${e.status===`draft`?` · Draft`:``}`})));selectChannel(e){let r=a.find(o=>(o.channel??`latest`)===e);r&&this.selectVersion(r.version)}selectVersion(e){!e||e===this.requestedVersion()||this.router.navigate([`/release-notes`,e])}static ɵfac=function(r){return new(r||a$1)};static ɵcmp=B({type:a$1,selectors:[[`app-release-notes`]],decls:18,vars:9,consts:[[1,`release-page`],[`tone`,`info`,`announcement`,`polite`,1,`unpublished-banner`,3,`message`,`dismissible`],[1,`page-heading`],[1,`eyebrow`],[1,`release-controls`],[`label`,`Channel`,1,`channel-select`,3,`selectionChange`,`options`,`value`,`clearable`],[`label`,`Version`,`placeholder`,`Choose a version`,1,`version-select`,3,`selectionChange`,`options`,`value`,`clearable`],[1,`current-version`],[`bxSurface`,``,`aria-labelledby`,`missing-release-title`,1,`release-summary`,`missing-release`],[`bxSurface`,``,`aria-labelledby`,`release-title`,1,`release-summary`],[1,`release-title`],[`id`,`release-title`],[`size`,`small`,3,`text`,`color`,`focusable`],[1,`draft-notice`],[`bx-button`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-label`,`Changes and migration notes`,1,`release-documentation`],[3,`path`],[`name`,`arrow-up-right`,`size`,`20`],[1,`comparison`],[`name`,`file-search`,`size`,`32`],[`id`,`missing-release-title`],[`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`20`]],template:function(r,o){if(r&1&&(P(0,`article`,0),ue(1,U,1,2,`bx-alert`,1),P(2,`header`,2)(3,`p`,3),Ne(4,`Blocks library`),L$1(),P(5,`h1`),Ne(6,`Release notes`),L$1(),P(7,`p`),Ne(8,`Explore additions, improvements and migration notes for each version of Blocks.`),L$1()(),P(9,`div`,4)(10,`bx-select`,5),ye(`selectionChange`,function(p){return o.selectChannel(p.value)}),L$1(),P(11,`bx-select`,6),ye(`selectionChange`,function(p){return o.selectVersion(p.value)}),L$1(),P(12,`p`,7),Ne(13,` Playground build `),P(14,`code`),Ne(15),L$1()()(),ue(16,j,12,9)(17,G,12,4,`section`,8),L$1()),r&2){let s;_(),de(o.releases.unpublished()?1:-1),_(9),ne(`options`,o.channels)(`value`,o.selectedChannel())(`clearable`,!1),_(),ne(`options`,o.versions())(`value`,o.selectedVersion())(`clearable`,!1),_(4),ze(o.currentVersion),_(),de((s=o.release())?16:17,s)}},dependencies:[iD,Nt,Gh,Ni,vt,$0,K0,w],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.release-page[_ngcontent-%COMP%] {
  max-inline-size: 70rem;
  margin-inline: auto;
  color: var(--%NS%bx-text-primary);
}
.unpublished-banner[_ngcontent-%COMP%] {
  display: block;
  margin-block-end: 1.5rem;
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
  .page-heading[_ngcontent-%COMP%] {
    margin-block-end: 1.5rem;
  }
  .channel-select[_ngcontent-%COMP%], 
   .version-select[_ngcontent-%COMP%] {
    flex-basis: 100%;
  }
  .release-summary[_ngcontent-%COMP%] {
    padding: 1rem;
  }
}`]})};export{A as ReleaseNotes};