import{n as g,t as c}from"./chunk-BilvVQQ3.js";import{n as k}from"./chunk-BpRItq3P.js";import{N as s,S as oo,j as a,q as Z}from"./main-HW2XYL5W.js";import{$i as v,Aa as z1,Bi as se,Bt as P,Gr as je,N as Fe,Si as p,Ti as pM,W as H$1,Zr as k$1,_a as xe,aa as vn,ga as xY,hn as U$1,ii as lM,ji as qr,ka as z,ma as xM,nr as ae,p as Bt,pi as mr,q as Hp,s as $r,un as Te,wr as fC,yi as oe}from"./chunk-Dt37D5SH.js";var U=n=>[`/release-notes`,n];function $(n,e){if(n&1&&Fe(0,`bx-alert`,1),n&2){let i=P();oe(`message`,i.unpublishedMessage)(`dismissible`,!1)}}function q(n,e){n&1&&(U$1(0,`p`,11),Te(1,`These notes are a preview and may change before this version is published.`),H$1())}function F(n,e){if(n&1&&(U$1(0,`a`,12),Te(1),Fe(2,`bx-icon`,15),H$1()),n&2){let i=P();oe(`href`,e,fC),k$1(),mr(` View v`,i.version,` on NPM`)}}function j(n,e){if(n&1&&(U$1(0,`a`,12),Te(1,` View changes on GitHub`),Fe(2,`bx-icon`,15),H$1(),U$1(3,`p`,16)(4,`span`),Te(5,`Comparison`),H$1(),U$1(6,`code`),Te(7),H$1(),U$1(8,`span`),Te(9,`to`),H$1(),U$1(10,`code`),Te(11),H$1()()),n&2){let i=P(),o=P();oe(`href`,o.compareUrl(),fC),k$1(7),je(i.fromCommit.slice(0,7)),k$1(4),je(e.slice(0,7))}}function G(n,e){if(n&1&&(U$1(0,`section`,7)(1,`div`,8)(2,`h2`,9),Te(3),H$1(),Fe(4,`bx-tag`,10),H$1(),U$1(5,`p`),Te(6),H$1(),ae(7,q,2,0,`p`,11),ae(8,F,3,2,`a`,12),ae(9,j,12,3),H$1(),U$1(10,`section`,13),Fe(11,`app-readme`,14),H$1()),n&2){let i,o,s=e,p=P();k$1(3),mr(`Blocks `,s.version),k$1(),oe(`text`,p.releaseLabel())(`color`,p.releaseColor())(`focusable`,!1),k$1(2),je(s.summary),k$1(),se(s.status===`draft`?7:-1),k$1(),se((i=p.npmVersionUrl())?8:-1,i),k$1(),se((o=s.toCommit)?9:-1,o),k$1(2),oe(`path`,s.readme)}}function H(n,e){if(n&1&&(U$1(0,`section`,6),Fe(1,`bx-icon`,17),U$1(2,`h2`,18),Te(3,`Release notes unavailable`),H$1(),U$1(4,`p`),Te(5,` No notes are available for `),U$1(6,`strong`),Te(7),H$1(),Te(8,`. Choose an available version above or view the latest notes. `),H$1(),U$1(9,`a`,19),Te(10,`View latest notes`),Fe(11,`bx-icon`,20),H$1()()),n&2){let i=P();k$1(7),je(i.requestedVersion()),k$1(2),oe(`routerLink`,z1(2,U,i.latestVersion))}}var L=class n{activatedRoute=p(qr);router=p($r);packageReleaseService=p(g);params=xY(this.activatedRoute.paramMap,{initialValue:this.activatedRoute.snapshot.paramMap});currentVersion=`v${c}`;latestVersion=s;unpublishedMessage=`Playground is running a build that is not yet published to NPM (v${c}).`;channels=[{value:`latest`,label:`Release`},{value:`beta`,label:`Beta`},{value:`alpha`,label:`Alpha`}];requestedVersion=v(()=>this.params().get(`version`)??``);release=v(()=>a.find(e=>e.version===this.requestedVersion()));selectedChannel=v(()=>this.release()?.channel??`latest`);npmVersionUrl=v(()=>{let e=this.release();return e?.status===`released`?`https://www.npmjs.com/package/@filip.mazev/blocks/v/${e.version}`:null});selectedVersion=v(()=>this.release()?.version??null);releaseLabel=v(()=>{let e=this.release();return e?.status===`draft`?e.channel===`alpha`?`Alpha · Draft`:`Draft`:e?.channel===`alpha`?`Alpha`:e?.channel===`beta`?`Beta`:`Released`});releaseColor=v(()=>{let e=this.release();return e?.status===`draft`?`warn`:e?.channel===`alpha`||e?.channel===`beta`?`info`:`success`});compareUrl=v(()=>{let e=this.release();return e?.toCommit?`https://github.com/filipmazev/Blocks/compare/${e.fromCommit}...${e.toCommit}`:null});versions=v(()=>a.filter(e=>(e.channel??`latest`)===this.selectedChannel()).map(e=>({value:e.version,label:`v${e.version}${e.status===`draft`?` · Draft`:``}`})));selectChannel(e){let i=a.find(o=>(o.channel??`latest`)===e);i&&this.selectVersion(i.version)}selectVersion(e){!e||e===this.requestedVersion()||this.router.navigate([`/release-notes`,e])}static ɵfac=function(i){return new(i||n)};static ɵcmp=z({type:n,selectors:[[`app-release-notes`]],decls:11,vars:9,consts:[[`pageDescription`,`Explore version changes, compatibility notes, and migration guidance.`],[`tone`,`info`,`announcement`,`polite`,1,`unpublished-banner`,3,`message`,`dismissible`],[1,`release-controls`],[`label`,`Channel`,1,`channel-select`,3,`selectionChange`,`options`,`value`,`clearable`],[`label`,`Version`,`placeholder`,`Choose a version`,1,`version-select`,3,`selectionChange`,`options`,`value`,`clearable`],[1,`current-version`],[`bxSurface`,``,`aria-labelledby`,`missing-release-title`,1,`release-summary`,`missing-release`],[`bxSurface`,``,`aria-labelledby`,`release-title`,1,`release-summary`],[1,`release-title`],[`id`,`release-title`],[`size`,`small`,3,`text`,`color`,`focusable`],[1,`draft-notice`],[`bx-button`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`aria-label`,`Changes and migration notes`,1,`release-documentation`],[3,`path`],[`name`,`arrow-up-right`,`size`,`20`],[1,`comparison`],[`name`,`file-search`,`size`,`32`],[`id`,`missing-release-title`],[`bx-button`,``,`variant`,`tonal`,3,`routerLink`],[`name`,`arrow-right`,`size`,`20`]],template:function(i,o){if(i&1&&(U$1(0,`bx-page-container`,0),ae(1,$,1,2,`bx-alert`,1),U$1(2,`div`,2)(3,`bx-select`,3),xe(`selectionChange`,function(p){return o.selectChannel(p.value)}),H$1(),U$1(4,`bx-select`,4),xe(`selectionChange`,function(p){return o.selectVersion(p.value)}),H$1(),U$1(5,`p`,5),Te(6,` Playground build `),U$1(7,`code`),Te(8),H$1()()(),ae(9,G,12,9)(10,H,12,4,`section`,6),H$1()),i&2){let s;k$1(),se(o.packageReleaseService.unpublished()?1:-1),k$1(2),oe(`options`,o.channels)(`value`,o.selectedChannel())(`clearable`,!1),k$1(),oe(`options`,o.versions())(`value`,o.selectedVersion())(`clearable`,!1),k$1(4),je(o.currentVersion),k$1(),se((s=o.release())?9:10,s)}},dependencies:[xM,Hp,Bt,Z,oo,vn,lM,pM,k],styles:[`
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