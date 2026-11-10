import{n as g,t as c}from"./chunk-CLS7XXRB.js";import{O as rr,Q as a,et as s,t as S}from"./main-EL5HAC26.js";import{n as Z}from"./chunk-41uhicSi.js";import{An as Xp,Bi as p,G as Ik,Hr as g$1,Kt as S$1,N as G$1,Nt as P,Oi as nc,Pa as wn,Ri as on,Ti as me,Un as Zr,Vt as Qr,Ya as zt,_ as CM,_t as Me,b as DM,c as Ae,ci as jM,g as C,ki as ne,ln as V,o as A,pa as te,xa as ue,xr as dZ}from"./chunk-BWickaUR.js";var U=n=>[`/release-notes`,n];function $(n,e){if(n&1&&Ae(0,`bx-alert`,1),n&2){let i=S$1();V(`message`,i.unpublishedMessage)(`dismissible`,!1)}}function q(n,e){n&1&&(A(0,`p`,11),me(1,`These notes are a preview and may change before this version is published.`),P())}function F(n,e){if(n&1&&(A(0,`a`,12),me(1),Ae(2,`bx-icon`,15),P()),n&2){let i=S$1();V(`href`,e,Ik),C(),wn(` View v`,i.version,` on NPM`)}}function j(n,e){if(n&1&&(A(0,`a`,12),me(1,` View changes on GitHub`),Ae(2,`bx-icon`,15),P(),A(3,`p`,16)(4,`span`),me(5,`Comparison`),P(),A(6,`code`),me(7),P(),A(8,`span`),me(9,`to`),P(),A(10,`code`),me(11),P()()),n&2){let i=S$1(),o=S$1();V(`href`,o.compareUrl(),Ik),C(7),Me(i.fromCommit.slice(0,7)),C(4),Me(e.slice(0,7))}}function G(n,e){if(n&1&&(A(0,`section`,7)(1,`div`,8)(2,`h2`,9),me(3),P(),Ae(4,`bx-tag`,10),P(),A(5,`p`),me(6),P(),te(7,q,2,0,`p`,11),te(8,F,3,2,`a`,12),te(9,j,12,3),P(),A(10,`section`,13),Ae(11,`app-readme`,14),P()),n&2){let i,o,s=e,p=S$1();C(3),wn(`Blocks `,s.version),C(),V(`text`,p.releaseLabel())(`color`,p.releaseColor())(`focusable`,!1),C(2),Me(s.summary),C(),ne(s.status===`draft`?7:-1),C(),ne((i=p.npmVersionUrl())?8:-1,i),C(),ne((o=s.toCommit)?9:-1,o),C(2),V(`path`,s.readme)}}function H(n,e){if(n&1&&(A(0,`section`,6),Ae(1,`bx-icon`,17),A(2,`h2`,18),me(3,`Release notes unavailable`),P(),A(4,`p`),me(5,` No notes are available for `),A(6,`strong`),me(7),P(),me(8,`. Choose an available version above or view the latest notes. `),P(),A(9,`a`,19),me(10,`View latest notes`),Ae(11,`bx-icon`,20),P()()),n&2){let i=S$1();C(7),Me(i.requestedVersion()),C(2),V(`routerLink`,nc(2,U,i.latestVersion))}}var L=class n{activatedRoute=p(Zr);router=p(Qr);packageReleaseService=p(g);params=dZ(this.activatedRoute.paramMap,{initialValue:this.activatedRoute.snapshot.paramMap});currentVersion=`v${c}`;latestVersion=s;unpublishedMessage=`Playground is running a build that is not yet published to NPM (v${c}).`;channels=[{value:`latest`,label:`Release`},{value:`beta`,label:`Beta`},{value:`alpha`,label:`Alpha`}];requestedVersion=g$1(()=>this.params().get(`version`)??``);release=g$1(()=>a.find(e=>e.version===this.requestedVersion()));selectedChannel=g$1(()=>this.release()?.channel??`latest`);npmVersionUrl=g$1(()=>{let e=this.release();return e?.status===`released`?`https://www.npmjs.com/package/@filip.mazev/blocks/v/${e.version}`:null});selectedVersion=g$1(()=>this.release()?.version??null);releaseLabel=g$1(()=>{let e=this.release();return e?.status===`draft`?e.channel===`alpha`?`Alpha · Draft`:`Draft`:e?.channel===`alpha`?`Alpha`:e?.channel===`beta`?`Beta`:`Released`});releaseColor=g$1(()=>{let e=this.release();return e?.status===`draft`?`warn`:e?.channel===`alpha`||e?.channel===`beta`?`info`:`success`});compareUrl=g$1(()=>{let e=this.release();return e?.toCommit?`https://github.com/filipmazev/Blocks/compare/${e.fromCommit}...${e.toCommit}`:null});versions=g$1(()=>a.filter(e=>(e.channel??`latest`)===this.selectedChannel()).map(e=>({value:e.version,label:`v${e.version}${e.status===`draft`?` · Draft`:``}`})));selectChannel(e){let i=a.find(o=>(o.channel??`latest`)===e);i&&this.selectVersion(i.version)}selectVersion(e){!e||e===this.requestedVersion()||this.router.navigate([`/release-notes`,e])}static ɵfac=function(i){return new(i||n)};static ɵcmp=G$1({type:n,selectors:[[`app-release-notes`]],decls:11,vars:9,consts:[[`pageDescription`,`Explore version changes, compatibility notes, and migration guidance.`],[`tone`,`info`,`announcement`,`polite`,1,`unpublished-banner`,3,`message`,`dismissible`],[1,`release-controls`],[`label`,`Channel`,1,`channel-select`,3,`selectionChange`,`options`,`value`,`clearable`],[`label`,`Version`,`placeholder`,`Choose a version`,1,`version-select`,3,`selectionChange`,`options`,`value`,`clearable`],[1,`current-version`],[`bxSurface`,``,`aria-labelledby`,`missing-release-title`,1,`release-summary`,`missing-release`],[`bxSurface`,``,`aria-labelledby`,`release-title`,1,`release-summary`],[1,`release-title`],[`id`,`release-title`],[`size`,`small`,3,`text`,`color`,`focusable`],[1,`draft-notice`],[`bx-button`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-label`,`Changes and migration notes`,1,`release-documentation`],[3,`path`],[`name`,`arrow-up-right`,`size`,`20`],[1,`comparison`],[`name`,`file-search`,`size`,`32`],[`id`,`missing-release-title`],[`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`20`]],template:function(i,o){if(i&1&&(A(0,`bx-page-container`,0),te(1,$,1,2,`bx-alert`,1),A(2,`div`,2)(3,`bx-select`,3),ue(`selectionChange`,function(p){return o.selectChannel(p.value)}),P(),A(4,`bx-select`,4),ue(`selectionChange`,function(p){return o.selectVersion(p.value)}),P(),A(5,`p`,5),me(6,` Playground build `),A(7,`code`),me(8),P()()(),te(9,G,12,9)(10,H,12,4,`section`,6),P()),i&2){let s;C(),ne(o.packageReleaseService.unpublished()?1:-1),C(2),V(`options`,o.channels)(`value`,o.selectedChannel())(`clearable`,!1),C(),V(`options`,o.versions())(`value`,o.selectedVersion())(`clearable`,!1),C(4),Me(o.currentVersion),C(),ne((s=o.release())?9:10,s)}},dependencies:[jM,Xp,zt,Z,rr,on,CM,DM,S],styles:[`
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