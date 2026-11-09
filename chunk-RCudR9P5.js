import{A as S,E as tr,I as se,a as Qn,p as ar}from"./main-SBKNNIA4.js";import{n as ht}from"./chunk-CFQtZ7ay.js";import{n as Z}from"./chunk-BQlfz5HR.js";import{$ as IM,$t as Pt,A as E,Bt as Nn,Ct as Lt,Da as vF,Fa as ye,Hr as gM,Ir as fe,Ki as pi,Kr as h,Lt as Na,Ma as wr,Nn as Vt,Pn as W$1,Ra as yr,Rr as fne,Sn as Tt,Tr as de,Ui as p,Wn as Y,Wr as gn,X as Hn,Yn as ZR,Yr as hn,Zi as q,Zr as ia,_ as CM,_i as lm,_n as TA,_r as cM,_t as L,bn as Tb,dr as b,ea as qe$1,fr as bM,gi as le,h as Be$1,hi as lM,ja as we,jn as Ve$1,l as Ae$1,m as Ba,na as qn,oa as ra,pn as Sa,pr as be,rn as QR,st as Jc,t as $,ui as kC,ut as K,vt as LM,w as D,xr as cne,yr as ce,zt as Ne}from"./chunk-B8p78nSc.js";var R=class r{themingService=p(Na);paletteClass=b(()=>[this.themingService.palettes.find(t=>t.id===this.themingService.palette())?.className,this.themingService.highContrast()?`high-contrast`:``].join(` `));mode=h.required();static ɵfac=function(e){return new(e||r)};static ɵcmp=q({type:r,selectors:[[`app-appearance-mode-preview`]],hostAttrs:[`aria-hidden`,`true`,`inert`,``,`data-bx-light-scope`,``],hostVars:3,hostBindings:function(e,n){e&2&&(Y(`data-theme`,n.mode()),TA(n.paletteClass()))},inputs:{mode:[1,`mode`]},decls:22,vars:5,consts:[[1,`mini-window`],[1,`mini-toolbar`],[`name`,`layers`,`size`,`16`],[1,`mini-toolbar-dot`],[1,`mini-workspace`],[1,`mini-sidebar`],[1,`mini-nav-active`],[`title`,`Workspace`,3,`headingLevel`,`opaque`],[1,`mini-card-row`],[1,`mini-avatar`],[`name`,`check`,`size`,`16`],[`label`,`Project progress`,3,`value`],[1,`mini-card-footer`],[`text`,`Ready`,`size`,`small`,`color`,`accent`,3,`opaque`,`tooltipOnTruncate`]],template:function(e,n){e&1&&(K(0,`div`,0)(1,`div`,1),Ve$1(2,`bx-icon`,2),K(3,`span`),Ne(4,`Blocks`),$(),Ve$1(5,`span`,3),$(),K(6,`div`,4)(7,`div`,5),Ve$1(8,`span`,6)(9,`span`)(10,`span`),$(),K(11,`bx-card`,7)(12,`div`,8)(13,`span`,9),Ve$1(14,`bx-icon`,10),$(),K(15,`span`),Ne(16,`Design system`),$()(),Ve$1(17,`bx-progress-bar`,11),K(18,`div`,12)(19,`span`),Ne(20,`12 components`),$(),Ve$1(21,`bx-tag`,13),$()()()()),e&2&&(D(11),le(`headingLevel`,4)(`opaque`,!0),D(6),le(`value`,68),D(4),le(`opaque`,!0)(`tooltipOnTruncate`,!1))},dependencies:[CM,gn,LM,bM],styles:[`
[_nghost-%COMP%] {
  display: block;
  block-size: 10rem;
  overflow: hidden;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  background: var(--%NS%bx-bg-neutral);
  color: var(--%NS%bx-text-primary);
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
}
[data-theme=light][_nghost-%COMP%] {
  color-scheme: light;
}
.mini-window[_ngcontent-%COMP%] {
  min-inline-size: 15rem;
  font-size: 0.625rem;
  text-align: start;
}
.mini-toolbar[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  padding: var(--%NS%bx-space-3, 0.75rem);
  border-block-end: 1px solid var(--%NS%bx-border-default);
  background: var(--%NS%bx-bg-surface);
  font-weight: 600;
}
.mini-toolbar-dot[_ngcontent-%COMP%] {
  margin-inline-start: auto;
  inline-size: 0.375rem;
  block-size: 0.375rem;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  background: var(--%NS%bx-accent);
}
.mini-workspace[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr);
  gap: var(--%NS%bx-space-3, 0.75rem);
  padding: var(--%NS%bx-space-3, 0.75rem);
}
.mini-sidebar[_ngcontent-%COMP%] {
  display: grid;
  align-content: start;
  gap: var(--%NS%bx-space-3, 0.75rem);
  padding-block: var(--%NS%bx-space-2, 0.5rem);
}
.mini-sidebar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  block-size: 0.375rem;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  background: var(--%NS%bx-border-default);
}
.mini-sidebar[_ngcontent-%COMP%]   .mini-nav-active[_ngcontent-%COMP%] {
  background: var(--%NS%bx-primary);
}
bx-card[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: var(--%NS%bx-space-2, 0.5rem);
  --%NS%bx-card-radius: var(--%NS%bx-rounded-md, 0.5rem);
  --%NS%bx-card-title-size: 0.75rem;
}
.mini-card-row[_ngcontent-%COMP%], 
.mini-card-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
}
@media (max-width: 640px) {
  [_nghost-%COMP%] {
    block-size: auto;
    min-block-size: 13rem;
    aspect-ratio: 3/4;
  }
  .mini-window[_ngcontent-%COMP%] {
    min-inline-size: 0;
  }
  .mini-toolbar[_ngcontent-%COMP%] {
    gap: var(--%NS%bx-space-1, 0.25rem);
    padding: var(--%NS%bx-space-2, 0.5rem);
  }
  .mini-workspace[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--%NS%bx-space-2, 0.5rem);
    padding: var(--%NS%bx-space-2, 0.5rem);
  }
  .mini-sidebar[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--%NS%bx-space-2, 0.5rem);
    padding-block: 0;
  }
  .mini-card-row[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: start;
  }
  .mini-card-footer[_ngcontent-%COMP%] {
    flex-wrap: wrap;
  }
}
.mini-card-row[_ngcontent-%COMP%] {
  margin-block-end: var(--%NS%bx-space-2, 0.5rem);
}
.mini-avatar[_ngcontent-%COMP%] {
  display: grid;
  place-items: center;
  inline-size: 1.25rem;
  block-size: 1.25rem;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  background: var(--%NS%bx-primary);
  color: var(--%NS%bx-on-primary);
}
.mini-card-footer[_ngcontent-%COMP%] {
  justify-content: space-between;
  margin-block-start: var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-text-secondary);
}`]})};function V(r,t,e,n){let c=`assets/images/appearance/${r}`;return{src:`${c}.webp`,srcset:`${c}-640.webp 640w, ${c}.webp ${t}w`,width:t,height:e,alt:n}}var ke=[{id:`preview-shar-mountain`,title:`Šar Mountain`,shortTitle:`Šar`,subtitle:`High peaks, mountain pastures, and rich forests`,paragraphs:[`Šar Mountain is known for its high peaks, mountain pastures, and rich forests.`,`A variety of vegetation spreads everywhere in the areas of this mountain massif. A large number of these plants are used by the inhabitants of these regions for folk medicine.`],photo:V(`shar-mountain`,1200,730,`Snow-dusted peaks and green slopes reflected in a mountain lake on Šar Mountain`),caption:`The mountain landscapes of Šar Mountain.`,detail:{title:`Bogovinje Lake`,paragraphs:[`One of the mountain lakes that adorns Šar Mountain is Bogovinje Lake, known for its crystal-clear waters and stunning reflections of the surrounding peaks.`,`The lake is a popular destination for hikers and nature enthusiasts, offering a peaceful retreat in the heart of the mountains.`],photo:V(`bogovinje-lake`,1200,679,`Bogovinje Lake beneath snow-streaked mountain slopes`),caption:`The quiet waters of Bogovinje Lake beneath the surrounding peaks.`}},{id:`preview-mavrovo`,title:`Mavrovo National Park`,shortTitle:`Mavrovo`,subtitle:`The Korab massif`,paragraphs:[`Korab is the highest mountain in Macedonia, home to the Golem Korab peak standing at 2,764 meters.`,`The mountain is part of the Mavrovo National Park, known for its diverse landscapes and natural beauty.`],photo:V(`korab`,1200,775,`Rocky peaks and open mountain pastures in the Korab massif`),caption:`The high peaks and open pastures of Korab.`,detail:{title:`A landscape shaped by water`,paragraphs:[`Korab has abundant surface watercourses, with several permanent and glacial-fed rivers and streams.`,`The Macedonian side of Korab is home to eight permanent and many occasional glacial lakes, supporting rich ecosystems.`],photo:V(`korab-valley`,1200,715,`A black-and-white panorama of the Korab ridges with small lakes below`),caption:`A wide view across the ridges and lakes of the Korab massif.`}}];var De=[`reader`];var Q=(r,t)=>t.id;function Ie(r,t){if(r&1&&(K(0,`p`),Ne(1),$()),r&2){let e=t.$implicit;D(),qe$1(e)}}function Be(r,t){if(r&1&&(K(0,`p`),Ne(1),$()),r&2){let e=t.$implicit;D(),qe$1(e)}}function Re(r,t){if(r&1&&(K(0,`section`,10)(1,`div`,7)(2,`p`,8),Ne(3),$(),K(4,`h3`,27),Ne(5),$(),Hn(6,Ie,2,1,`p`,null,ra),$(),K(8,`figure`,28),Ve$1(9,`img`,29),K(10,`figcaption`),Ne(11),$()(),K(12,`div`,7)(13,`h4`),Ne(14),$(),Hn(15,Be,2,1,`p`,null,ra),$(),K(17,`figure`,30),Ve$1(18,`img`,29),K(19,`figcaption`),Ne(20),$()()()),r&2){let e=t.$implicit;le(`id`,e.id),Y(`aria-labelledby`,e.id+`-title`),D(3),qe$1(e.subtitle),D(),le(`id`,e.id+`-title`),D(),qe$1(e.title),D(),qn(e.paragraphs),D(3),le(`src`,e.photo.src)(`alt`,e.photo.alt)(`width`,e.photo.width)(`height`,e.photo.height),Y(`srcset`,e.photo.srcset),D(2),qe$1(e.caption),D(3),qe$1(e.detail.title),D(),qn(e.detail.paragraphs),D(3),le(`src`,e.detail.photo.src)(`alt`,e.detail.photo.alt)(`width`,e.detail.photo.width)(`height`,e.detail.photo.height),Y(`srcset`,e.detail.photo.srcset),D(2),qe$1(e.detail.caption)}}function Ve(r,t){if(r&1){let e=yr();K(0,`div`,11)(1,`h3`),Ne(2,`No places found`),$(),K(3,`p`),Ne(4,`Try searching for Šar Mountain, Korab, or lakes.`),$(),K(5,`button`,31),ye(`click`,function(){Pt(e);let c=L();return Lt(c.search.set(``))}),Ne(6,`Clear search`),$()()}}function He(r,t){if(r&1){let e=yr();K(0,`button`,32),ye(`click`,function(){let c=Pt(e).$implicit,d=L(),u=ia(1);return Lt(d.scrollTo(u,c.id))}),Ve$1(1,`bx-icon`,33),K(2,`span`),Ne(3),$()()}if(r&2){let e=t.$implicit;D(3),qe$1(e.shortTitle)}}function Le(r,t){if(r&1){let e=yr();K(0,`bx-menu-item`,36),ye(`action`,function(){let c=Pt(e).$implicit,d=L(2),u=ia(1);return Lt(d.scrollTo(u,c.id))}),$()}if(r&2){let e=t.$implicit;le(`label`,e.title)}}function je(r,t){if(r&1){let e=yr();K(0,`bx-menu`)(1,`bx-menu-item`,34),ye(`action`,function(){Pt(e);let c=L(),d=ia(1);return Lt(c.scrollTo(d))}),$(),Hn(2,Le,1,1,`bx-menu-item`,35,Q),$()}if(r&2){let e=L();D(2),qn(e.parks())}}var H=class r{bxA11yService=p(Ae$1);reader=hn.required(`reader`);search=E(``);saved=E(!1);parks=b(()=>{let t=n=>n.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase(),e=t(this.search().trim());return ke.filter(n=>t([n.title,n.subtitle,...n.paragraphs,n.detail.title,...n.detail.paragraphs].join(` `)).includes(e))});scrollHintCleanup;constructor(){p(W$1).onDestroy(()=>this.stopScrollHint()),be(()=>{this.bxA11yService.isReducedMotion()&&this.stopScrollHint()}),Be$1(()=>{if(this.bxA11yService.isReducedMotion())return;let t=this.reader().nativeElement,e=t.ownerDocument.defaultView;if(!e)return;let n,c,d=new IntersectionObserver(u=>{u.some(O=>O.isIntersecting&&O.intersectionRatio>=.5)&&(d.disconnect(),n=e.setTimeout(()=>{if(t.scrollTop!==0||this.bxA11yService.isReducedMotion())return;let O=Math.min(280,t.scrollHeight-t.clientHeight);if(O<=0)return;let Ee=e.performance.now(),J=ze=>{let X=Math.min((ze-Ee)/2800,1);t.scrollTop=O*(1-Math.cos(X*Math.PI*2))/2,X<1?c=e.requestAnimationFrame(J):this.stopScrollHint()};c=e.requestAnimationFrame(J)},900))},{threshold:.5});this.scrollHintCleanup=()=>{d.disconnect(),e.clearTimeout(n),c!==void 0&&e.cancelAnimationFrame(c)},d.observe(t)})}stopScrollHint(){this.scrollHintCleanup?.(),this.scrollHintCleanup=void 0}scrollTo(t,e){this.stopScrollHint();let n=e?t.querySelector(`#${e}`):void 0;if(e&&!n)return;let c=n?n.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop-96:0;t.scrollTo({top:Math.max(0,c),behavior:this.bxA11yService.isReducedMotion()?`auto`:`smooth`})}static ɵfac=function(e){return new(e||r)};static ɵcmp=q({type:r,selectors:[[`app-appearance-preview`]],viewQuery:function(e,n){e&1&&Nn(n.reader,De,5),e&2&&Tt()},hostAttrs:[`data-bx-light-scope`,``],hostBindings:function(e,n){e&1&&ye(`pointerdown`,function(){return n.stopScrollHint()})(`wheel`,function(){return n.stopScrollHint()})(`keydown`,function(){return n.stopScrollHint()})(`focusin`,function(){return n.stopScrollHint()})},decls:37,vars:8,consts:[[`reader`,``],[`query`,``],[`contents`,``],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Scrollable national parks article`,1,`preview-reader`],[1,`park-article`],[`src`,`assets/images/appearance/mountains-2400.webp`,`srcset`,`
                assets/images/appearance/mountains-640.webp   640w,
                assets/images/appearance/mountains.webp      1200w,
                assets/images/appearance/mountains-2400.webp 2400w
            `,`sizes`,`(max-width: 640px) 150vw, (max-width: 1280px) 90vw, 55vw`,`alt`,`A snow-covered mountain landscape`,`width`,`2400`,`height`,`1643`,`loading`,`eager`,`fetchpriority`,`high`,`decoding`,`async`,1,`article-hero`],[1,`article-copy`,`article-heading`],[1,`article-copy`],[1,`article-eyebrow`],[1,`article-lead`],[1,`park-story`,3,`id`],[`role`,`status`,1,`article-copy`,`empty-search`],[1,`article-copy`,`article-footer`],[`name`,`leaf`,`size`,`16`],[`role`,`group`,`aria-label`,`Nature journal controls`,1,`preview-tools`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Back to the start of the article`,1,`preview-icon-button`,3,`click`],[`name`,`arrow-up`,`size`,`16`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`bxSurfaceInteractive`,``,`bxSurfaceFocusEmission`,`var(--bx-primary)`,1,`preview-search`],[`name`,`search`,`size`,`16`],[`type`,`search`,`aria-label`,`Search the national parks article`,`placeholder`,`Find a place`,3,`input`,`value`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,1,`preview-icon-button`,3,`click`,`color`],[`size`,`16`,3,`name`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Article contents`,`placement`,`bottom`,1,`preview-icon-button`,3,`bxDropdown`],[`name`,`ellipsis`,`size`,`20`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`aria-label`,`Places in this article`,1,`preview-navigation`],[`bxTruncate`,``,`role`,`status`,1,`preview-saved-status`],[`type`,`button`],[3,`id`],[1,`article-photo`],[`sizes`,`(max-width: 640px) 100vw, (max-width: 1280px) 85vw, 55vw`,`loading`,`eager`,`decoding`,`async`,3,`src`,`alt`,`width`,`height`],[1,`article-photo`,`article-detail-photo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`type`,`button`,3,`click`],[`name`,`mountain`,`size`,`16`],[`label`,`Back to the top`,`icon`,`arrow-up`,3,`action`],[`icon`,`mountain`,3,`label`],[`icon`,`mountain`,3,`action`,`label`]],template:function(e,n){if(e&1){let c=yr();K(0,`div`,3,0)(2,`article`,4),Ve$1(3,`img`,5),K(4,`header`,6)(5,`h2`),Ne(6,`National Parks`),$()(),K(7,`div`,7)(8,`p`,8),Ne(9,`Discover Macedonia`),$(),K(10,`p`,9),Ne(11,`Explore the natural beauty of Macedonia through the power of photography.`),$()(),Hn(12,Re,21,18,`section`,10,Q,!1,Ve,7,0,`div`,11),K(15,`footer`,12),Ve$1(16,`bx-icon`,13),K(17,`span`),Ne(18,`Leave the trails as beautiful as you found them.`),$()()()(),K(19,`div`,14)(20,`button`,15),ye(`click`,function(){Pt(c);let u=ia(1);return Lt(n.scrollTo(u))}),Ve$1(21,`bx-icon`,16),$(),K(22,`div`,17),Ve$1(23,`bx-icon`,18),K(24,`input`,19,1),ye(`input`,function(){Pt(c);let u=ia(25);return Lt(n.search.set(u.value))}),$()(),K(26,`button`,20),ye(`click`,function(){return n.saved.set(!n.saved())}),Ve$1(27,`bx-icon`,21),$(),K(28,`button`,22),Ve$1(29,`bx-icon`,23),$()(),K(30,`nav`,24)(31,`span`,25),Ne(32),$(),Hn(33,He,4,1,`button`,26,Q),$(),kC(35,je,4,0,`ng-template`,null,2,Tb)}if(e&2){let c=ia(36);D(12),qn(n.parks()),D(12),le(`value`,n.search()),D(2),le(`color`,n.saved()?`primary`:`grayscale`),Y(`aria-pressed`,n.saved())(`aria-label`,n.saved()?`Remove article from saved places`:`Save article to your places`),D(),le(`name`,n.saved()?`bookmark-check`:`bookmark`),D(),le(`bxDropdown`,c),D(4),qe$1(n.saved()?`Saved to your places`:`Explore Macedonia`),D(),qn(n.parks())}},dependencies:[Vt,Z,gn,gM,cM,lM,pi],styles:[`
[_nghost-%COMP%] {
  display: block;
  position: relative;
  flex: 1;
  min-width: 0;
  min-height: 31rem;
  border-radius: var(--%NS%bx-rounded-3xl, 1.875rem);
  overflow: clip;
  background: var(--%NS%bx-bg-neutral);
}
.preview-reader[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  scroll-padding-block: 6rem;
  color: var(--%NS%bx-text-primary);
  container-type: size;
}
.preview-reader[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: -3px;
}
.park-article[_ngcontent-%COMP%] {
  padding-bottom: 5rem;
}
.article-hero[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  height: 25rem;
  height: calc(100cqh - 8rem);
  object-fit: cover;
  object-position: center;
}
.article-copy[_ngcontent-%COMP%] {
  max-width: 42rem;
  margin: var(--%NS%bx-space-6, 1.5rem) auto;
  padding-inline: clamp(1.25rem, 4vw, 2.5rem);
}
.article-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
.article-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.article-copy[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-heading);
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin: 0 0 var(--%NS%bx-space-4, 1rem);
}
.article-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: clamp(2rem, 3vw, 3rem);
  margin-bottom: 0;
}
.article-heading[_ngcontent-%COMP%] {
  box-sizing: border-box;
  min-height: 10rem;
  margin-block: 0;
  padding-block: var(--%NS%bx-space-6, 1.5rem) 5rem;
}
.article-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.625rem;
}
.article-copy[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 1.25rem;
}
.article-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0 0 var(--%NS%bx-space-3, 0.75rem);
  font-size: 0.875rem;
  line-height: 1.75;
}
.article-copy[_ngcontent-%COMP%]   .article-eyebrow[_ngcontent-%COMP%] {
  margin-bottom: var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-text-secondary);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.article-copy[_ngcontent-%COMP%]   .article-lead[_ngcontent-%COMP%] {
  font-size: 1rem;
  color: var(--%NS%bx-text-secondary);
}
.park-story[_ngcontent-%COMP%] {
  padding-top: var(--%NS%bx-space-2, 0.5rem);
}
.park-story[_ngcontent-%COMP%]    + .park-story[_ngcontent-%COMP%] {
  margin-top: var(--%NS%bx-space-8, 2rem);
  border-top: 1px solid var(--%NS%bx-border-default);
}
.article-photo[_ngcontent-%COMP%] {
  margin: var(--%NS%bx-space-6, 1.5rem) clamp(1rem, 3vw, 2rem);
}
.article-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  height: auto;
  max-height: 24rem;
  aspect-ratio: 16/10;
  object-fit: cover;
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
}
.article-detail-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  aspect-ratio: 16/9;
  object-position: center 65%;
}
.article-photo[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {
  margin-top: var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-text-secondary);
  font-size: 0.6875rem;
  line-height: 1.5;
}
.article-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  padding-block: var(--%NS%bx-space-4, 1rem);
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
}
.preview-tools[_ngcontent-%COMP%] {
  position: absolute;
  inset: var(--%NS%bx-space-4, 1rem) var(--%NS%bx-space-4, 1rem) auto;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  flex-wrap: wrap;
}
.preview-tools[_ngcontent-%COMP%]   .preview-icon-button[_ngcontent-%COMP%] {
  flex: none;
  width: 2.75rem;
  height: 2.75rem;
  --%NS%bx-glass-radius: var(--%NS%bx-rounded-pill, 9999px);
}
.preview-search[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex: 1;
  flex-basis: 8rem;
  min-width: 0;
  min-height: 2.75rem;
  gap: var(--%NS%bx-space-2, 0.5rem);
  padding-inline: var(--%NS%bx-space-3, 0.75rem);
  --%NS%bx-glass-radius: var(--%NS%bx-rounded-pill, 9999px);
}
.preview-search[_ngcontent-%COMP%]:focus-within {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.preview-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  width: 100%;
  min-width: 0;
  border: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 0.8125rem;
  outline: none;
}
.preview-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {
  color: inherit;
  opacity: 1;
}
.preview-navigation[_ngcontent-%COMP%] {
  position: absolute;
  inset: auto var(--%NS%bx-space-4, 1rem) var(--%NS%bx-space-4, 1rem);
  z-index: 2;
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  flex-wrap: wrap;
  padding: var(--%NS%bx-space-2, 0.5rem);
  --%NS%bx-glass-radius: var(--%NS%bx-rounded-pill, 9999px);
}
.preview-saved-status[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  padding-inline: var(--%NS%bx-space-2, 0.5rem);
  font-size: 0.75rem;
}
.preview-navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  min-height: 2.25rem;
  padding: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-3, 0.75rem);
  border: 0;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 0.75rem;
  cursor: pointer;
}
.preview-navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {
  background: var(--%NS%bx-bg-neutral-hover);
  color: var(--%NS%bx-text-primary);
}
.preview-navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
@media (max-width: 640px) {
  [_nghost-%COMP%] {
    min-height: 28rem;
  }
  .preview-tools[_ngcontent-%COMP%] {
    inset: var(--%NS%bx-space-3, 0.75rem) var(--%NS%bx-space-3, 0.75rem) auto;
    gap: var(--%NS%bx-space-1, 0.25rem);
  }
  .preview-search[_ngcontent-%COMP%]    > bx-icon[_ngcontent-%COMP%] {
    display: none;
  }
  .preview-navigation[_ngcontent-%COMP%] {
    inset: auto var(--%NS%bx-space-3, 0.75rem) var(--%NS%bx-space-3, 0.75rem);
  }
  .preview-navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
    flex: 1;
  }
  .preview-saved-status[_ngcontent-%COMP%] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
  }
}`]})};var W=[{value:`light`,label:`Light`},{value:`dark`,label:`Dark`},{value:`auto`,label:`Auto`}];var Oe=[{value:`auto`,label:`Automatic`},{value:`baseline`,label:`Baseline`}];var Ae=[{value:`auto`,label:`Automatic`},{value:`off`,label:`Off`},{value:`on`,label:`Opt in on this browser`}];var U=(r,t)=>t.value;var qe=(r,t)=>t.id;function Fe(r,t){r&1&&Ve$1(0,`app-appearance-mode-preview`,49)(1,`app-appearance-mode-preview`,50)}function $e(r,t){if(r&1&&Ve$1(0,`app-appearance-mode-preview`,45),r&2){let e=L().$implicit;le(`mode`,e.value)}}function Ge(r,t){if(r&1){let e=yr();K(0,`bx-card`,42),ye(`activated`,function(){let c=Pt(e).$implicit,d=L();return Lt(d.setMode(c.value))}),K(1,`span`,43)(2,`span`,44),ce(3,Fe,2,0)(4,$e,1,1,`app-appearance-mode-preview`,45),$(),K(5,`span`,46)(6,`span`,47),Ne(7),Ve$1(8,`bx-icon`,48),$()()()()}if(r&2){let e=t.$implicit,n=L();le(`clickable`,!0)(`selected`,n.selectedMode()===e.value)(`ariaLabel`,e.label),D(2),fe(`is-auto`,e.value===`auto`),D(),de(e.value===`auto`?3:4),D(4),qe$1(e.label),D(),le(`name`,n.selectedMode()===e.value?`circle-check`:`circle`)}}function Ke(r,t){if(r&1){let e=yr();K(0,`bx-slide-toggle`,51),ZR(),ye(`ngModelChange`,function(c){Pt(e);let d=L();return Lt(d.setAutomaticMode(c))}),$()}if(r&2){let e=L();le(`ngModel`,e.themingService.applicationTheme()===null),QR()}}function Qe(r,t){if(r&1){let e=yr();K(0,`bx-radio`,52),ZR(),ye(`ngModelChange`,function(c){Pt(e);let d=L();return Lt(d.updateAppearance({quality:c}))}),$()}if(r&2){let e=t.$implicit,n=L();le(`label`,e.label)(`value`,e.value)(`ngModel`,n.appearance().quality),QR()}}function We(r,t){if(r&1){let e=yr();K(0,`bx-radio`,53),ZR(),ye(`ngModelChange`,function(c){Pt(e);let d=L();return Lt(d.updateAppearance({glassiness:c}))}),$()}if(r&2){let e=t.$implicit,n=L();le(`label`,e.label)(`value`,e.value)(`disabled`,n.appearance().quality===`baseline`)(`ngModel`,n.appearance().glassiness??`auto`),QR()}}function Ue(r,t){if(r&1){let e=yr();K(0,`button`,54),ye(`click`,function(){let c=Pt(e).$implicit,d=L();return Lt(d.themingService.setPalette(c.id))}),K(1,`span`,55),Ve$1(2,`span`)(3,`span`),$(),Ne(4),$()}if(r&2){let e=t.$implicit,n=L();le(`color`,n.themingService.palette()===e.id?`accent`:`grayscale`),Y(`aria-pressed`,n.themingService.palette()===e.id),D(2),we(`background-color`,e.colors[0]),D(),we(`background-color`,e.colors[1]),D(),wr(``,e.label,` `)}}function Je(r,t){if(r&1&&(K(0,`div`,56)(1,`div`)(2,`h3`),Ne(3,`One configuration. Every component.`),$(),K(4,`p`),Ne(5,`Surfaces follow the existing semantic theme. Use the controls above, or configure the theming service in your application.`),$()(),K(6,`pre`,57),Ve$1(7,`code`,58),$()(),Ve$1(8,`app-readme`,59)),r&2){let e=L();D(7),le(`highlight`,e.codeExample)}}var Te=class r{bxA11yService=p(Ae$1);windowDimensionsService=p(Sa);themingService=p(Na);themeStudioService=p(se);appearance=this.themingService.appearance;reducedMotion=this.bxA11yService.isReducedMotion;compactModes=b(()=>this.windowDimensionsService.dimensions().width<=this.windowDimensionsService.breakpoints.sm);modes=b(()=>this.compactModes()?W.filter(t=>t.value!==`auto`):W);selectedMode=b(()=>this.compactModes()?this.themingService.activeTheme():this.themingService.applicationTheme()??`auto`);translucencyDescription=b(()=>{let t=this.appearance().translucency;return t<.25?`Lighter tint and blur`:t<.75?`Balanced tint and blur`:`Stronger tint and blur`});qualities=Oe;glassinessModes=Ae;codeExample=`const themingService = inject(ThemingService);

// Balanced glass throughout the application, including open overlays.
themingService.setAppearance({ translucency: 0.5 });

// Browser policy for explicitly selected glassy controls.
themingService.setAppearance({ glassiness: 'auto' });

// Opaque surfaces are an accessibility preference.
themingService.setAppearance({ reducedTransparency: true });

// Opt in only the controls that benefit from refraction.
<button bx-button variant="icon" glassiness="auto">\u2026</button>
<section bxSurface bxSurfaceGlassiness="auto">\u2026</section>`;constructor(){be(()=>{this.qualities.some(t=>t.value===this.appearance().quality)||this.themingService.setAppearance({quality:`auto`})})}updateAppearance(t){this.themingService.setAppearance(t)}setMode(t){this.compactModes()&&this.themingService.applicationTheme()===null&&t===this.themingService.activeTheme()||this.themingService.setApplicationTheme(t===`auto`?null:t)}setAutomaticMode(t){this.themingService.setApplicationTheme(t?null:this.themingService.activeTheme())}setMotion(t){this.bxA11yService.setReducedMotion(t)}reset(){this.themingService.resetAppearance()}static ɵfac=function(e){return new(e||r)};static ɵcmp=q({type:r,selectors:[[`app-appearance`]],decls:82,vars:18,consts:[[`translucency`,``],[`documentation`,``],[`pageDescription`,`Configure the shared theme, palette, surfaces, and effects used throughout the playground.`],[`role`,`group`,`aria-label`,`Appearance mode`,1,`mode-picker`],[`highlightColor`,`accent`,1,`mode-choice`,3,`clickable`,`selected`,`ariaLabel`],[`label`,`Automatic`,`labelPosition`,`before`,`subscriptSizing`,`dynamic`,1,`mode-auto`,3,`ngModel`],[`aria-labelledby`,`surfaces-title`,1,`settings-section`,`surfaces-section`],[1,`section-heading`],[`id`,`surfaces-title`],[`size`,`full`,1,`surface-layout`],[1,`surface-introduction`],[1,`panel-heading`],[`id`,`surface-appearance-title`],[`bx-button`,``,`type`,`button`,`variant`,`text`,`color`,`grayscale`,`aria-label`,`Reset surface appearance`,3,`click`],[1,`surface-demo-column`],[1,`preview-column`],[`aria-label`,`Translucency`,`aria-describedby`,`translucency-note`,1,`translucency-controls`,3,`bxTooltip`],[1,`translucency-range`],[`name`,`circle-dashed`,`size`,`20`,`ariaLabel`,`Lighter tint`,3,`decorative`],[`id`,`appearance-translucency`,`type`,`range`,`bxSlider`,``,`min`,`0`,`max`,`1`,`step`,`0.01`,`aria-label`,`Translucency`,`aria-describedby`,`translucency-note`,3,`input`,`value`,`disabled`],[`name`,`circle`,`size`,`20`,`ariaLabel`,`Richly tinted`,1,`translucency-tinted-icon`,3,`decorative`],[`id`,`translucency-note`,1,`section-note`],[`title`,`Advanced settings`,1,`advanced-settings`,3,`headingLevel`],[1,`advanced-grid`],[1,`rendering-options`],[1,`quality-picker`],[`name`,`appearance-quality`,`subscriptSizing`,`dynamic`,3,`label`,`value`,`ngModel`],[1,`section-note`],[`name`,`appearance-glassiness`,`subscriptSizing`,`dynamic`,3,`label`,`value`,`disabled`,`ngModel`],[`aria-labelledby`,`theme-title`,1,`settings-section`],[`id`,`theme-title`],[1,`palette-picker`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`color`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`aria-controls`,`theme-studio-panel`,3,`click`],[`name`,`plus`,`size`,`18`],[`aria-labelledby`,`accessibility-title`,1,`settings-section`],[`id`,`accessibility-title`],[1,`accessibility-options`],[`label`,`Reduce motion`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Reduce transparency`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`High contrast`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`title`,`Appearance API, performance, and accessibility`,1,`appearance-documentation`,3,`headingLevel`,`contentTemplate`],[`highlightColor`,`accent`,1,`mode-choice`,3,`activated`,`clickable`,`selected`,`ariaLabel`],[1,`mode-content`],[1,`mode-visual`],[3,`mode`],[1,`mode-caption`],[1,`mode-label`],[`size`,`20`,3,`name`],[`mode`,`light`],[`mode`,`dark`],[`label`,`Automatic`,`labelPosition`,`before`,`subscriptSizing`,`dynamic`,1,`mode-auto`,3,`ngModelChange`,`ngModel`],[`name`,`appearance-quality`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`label`,`value`,`ngModel`],[`name`,`appearance-glassiness`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`label`,`value`,`disabled`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`color`],[`aria-hidden`,`true`,1,`palette-swatches`],[1,`implementation`],[`tabindex`,`0`,`aria-label`,`TypeScript appearance configuration`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`path`,`projects/playground/src/app/components/screens/appearance/README.md`]],template:function(e,n){if(e&1){let c=yr();K(0,`bx-page-container`,2)(1,`div`,3),Hn(2,Ge,9,8,`bx-card`,4,U),ce(4,Ke,1,1,`bx-slide-toggle`,5),$(),K(5,`section`,6)(6,`header`,7)(7,`div`)(8,`h2`,8),Ne(9,`Surfaces`),$()()(),K(10,`bx-container`,9)(11,`div`,10)(12,`div`,11)(13,`h3`,12),Ne(14,`Surface Appearance`),$(),K(15,`button`,13),ye(`click`,function(){return n.reset()}),Ne(16,`Reset`),$()()(),K(17,`div`,14)(18,`div`,15),Ve$1(19,`app-appearance-preview`),$(),K(20,`section`,16)(21,`div`,17),Ve$1(22,`bx-icon`,18),K(23,`input`,19,0),ye(`input`,function(){Pt(c);let u=ia(24);return Lt(n.updateAppearance({translucency:+u.value}))}),$(),Ve$1(25,`bx-icon`,20),$()(),K(26,`p`,21),Ne(27),$()()(),K(28,`bx-collapsible`,22)(29,`div`,23)(30,`div`)(31,`fieldset`,24)(32,`legend`),Ne(33,`Rendering`),$(),K(34,`div`,25),Hn(35,Qe,1,3,`bx-radio`,26,U),$()(),K(37,`p`,27),Ne(38,`Automatic balances detail and performance. Baseline uses blur and tint and turns glassiness off.`),$()(),K(39,`div`)(40,`fieldset`,24)(41,`legend`),Ne(42,`Glassiness`),$(),K(43,`div`,25),Hn(44,We,1,4,`bx-radio`,28,U),$()(),K(46,`p`,27),Ne(47,` Refraction enhances selected controls on supported browsers. Text and icons keep their theme colors. Accessibility preferences take precedence. `),$()()()()(),K(48,`section`,29)(49,`header`,7)(50,`div`)(51,`h2`,30),Ne(52,`Theme`),$()()(),K(53,`div`,31),Hn(54,Ue,5,7,`button`,32,qe),K(56,`button`,33),ye(`click`,function(){return n.themeStudioService.open.set(!0)}),Ve$1(57,`bx-icon`,34),Ne(58,`Create a theme `),$()(),K(59,`p`,27),Ne(60,`Customize the current palette in Theme Studio, preview your changes here, then export it for your application.`),$()(),K(61,`section`,35)(62,`header`,7)(63,`div`)(64,`h2`,36),Ne(65,`Accessibility`),$()()(),K(66,`div`,37)(67,`div`)(68,`bx-slide-toggle`,38),ZR(),ye(`ngModelChange`,function(u){return n.setMotion(u)}),$(),K(69,`p`,27),Ne(70,`Keep transitions and decorative movement to a minimum.`),$()(),K(71,`div`)(72,`bx-slide-toggle`,39),ZR(),ye(`ngModelChange`,function(u){return n.updateAppearance({reducedTransparency:u})}),$(),K(73,`p`,27),Ne(74,`Use opaque surfaces while preserving your translucency preference.`),$()(),K(75,`div`)(76,`bx-slide-toggle`,40),ZR(),ye(`ngModelChange`,function(u){return n.themingService.setHighContrast(u)}),$(),K(77,`p`,27),Ne(78,`Strengthen the separation between content and its background.`),$()()()(),Ve$1(79,`bx-collapsible`,41),kC(80,Je,9,1,`ng-template`,null,1,Tb),$()}if(e&2){let c=ia(81);D(2),qn(n.modes()),D(2),de(n.compactModes()?4:-1),D(16),fe(`is-disabled`,n.appearance().reducedTransparency),le(`bxTooltip`,n.appearance().reducedTransparency?`Turn off Reduce transparency to adjust translucency.`:``),Y(`tabindex`,n.appearance().reducedTransparency?0:null),D(2),le(`decorative`,!1),D(),le(`value`,n.appearance().translucency)(`disabled`,n.appearance().reducedTransparency),Y(`aria-valuetext`,n.translucencyDescription()),D(2),le(`decorative`,!1),D(2),wr(` `,n.appearance().reducedTransparency?`Reduced transparency keeps surfaces opaque. Turn it off to adjust translucency.`:`Slide from a lighter tint to a richer finish. Glassiness always keeps a readable backing.`,` `),D(),le(`headingLevel`,3),D(7),qn(n.qualities),D(9),qn(n.glassinessModes),D(10),qn(n.themingService.palettes),D(2),Y(`aria-expanded`,n.themeStudioService.open()),D(12),le(`ngModel`,n.reducedMotion()),QR(),D(4),le(`ngModel`,n.appearance().reducedTransparency),QR(),D(4),le(`ngModel`,n.themingService.highContrast()),QR(),D(3),le(`headingLevel`,2)(`contentTemplate`,c)}},dependencies:[IM,ht,fne,cne,vF,tr,ar,Qn,Z,CM,lm,gn,Jc,Ba,S,H,R],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.mode-picker[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--%NS%bx-space-4, 1rem);
}
.mode-choice[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: var(--%NS%bx-space-3, 0.75rem);
  --%NS%bx-card-radius: var(--%NS%bx-rounded-xl, 1rem);
  min-inline-size: 0;
}
.mode-content[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--%NS%bx-space-4, 1rem);
  inline-size: 100%;
  min-inline-size: 0;
}
.mode-visual[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  overflow: hidden;
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  pointer-events: none;
}
.mode-visual.is-auto[_ngcontent-%COMP%] {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.mode-visual.is-auto[_ngcontent-%COMP%]   app-appearance-mode-preview[_ngcontent-%COMP%]:first-child {
  border-start-end-radius: 0;
  border-end-end-radius: 0;
  border-inline-end-width: 0;
}
.mode-visual.is-auto[_ngcontent-%COMP%]   app-appearance-mode-preview[_ngcontent-%COMP%]:last-child {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}
.mode-visual[_ngcontent-%COMP%]   app-appearance-mode-preview[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
.mode-caption[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-2, 0.5rem);
  padding: 0 var(--%NS%bx-space-1, 0.25rem) var(--%NS%bx-space-1, 0.25rem);
}
.mode-label[_ngcontent-%COMP%], 
.panel-heading[_ngcontent-%COMP%], 
.section-heading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--%NS%bx-space-3, 0.75rem);
}
.mode-label[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
}
.mode-label[_ngcontent-%COMP%]   bx-icon[_ngcontent-%COMP%] {
  flex: none;
  color: var(--%NS%bx-text-secondary);
}
.mode-choice[data-selected=true][_ngcontent-%COMP%]   .mode-label[_ngcontent-%COMP%]   bx-icon[_ngcontent-%COMP%] {
  color: var(--%NS%bx-card-highlight, var(--%NS%bx-accent));
}
.mode-description[_ngcontent-%COMP%], 
.section-note[_ngcontent-%COMP%], 
.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.6;
  margin: 0;
}
.settings-section[_ngcontent-%COMP%] {
  margin-block-start: var(--%NS%bx-space-10, 2.5rem);
  padding-block-start: var(--%NS%bx-space-8, 2rem);
  border-block-start: 1px solid var(--%NS%bx-border-default);
}
.section-heading[_ngcontent-%COMP%] {
  align-items: start;
  margin-block-end: var(--%NS%bx-space-5, 1.25rem);
}
.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0 0 var(--%NS%bx-space-2, 0.5rem);
  font-size: 1.5rem;
}
.surface-layout[_ngcontent-%COMP%] {
  --%NS%bx-container-padding: var(--%NS%bx-space-5, 1.25rem);
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 5fr);
  gap: var(--%NS%bx-space-6, 1.5rem);
  align-items: start;
  padding: var(--%NS%bx-space-5, 1.25rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-xl, 1rem);
}
.surface-introduction[_ngcontent-%COMP%], 
.surface-demo-column[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
.preview-column[_ngcontent-%COMP%] {
  display: flex;
  min-inline-size: 0;
  block-size: 32rem;
}
.panel-heading[_ngcontent-%COMP%] {
  flex-wrap: wrap;
  margin-block-end: var(--%NS%bx-space-3, 0.75rem);
}
.panel-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.125rem;
}
.translucency-controls[_ngcontent-%COMP%] {
  margin-block: var(--%NS%bx-space-4, 1rem) var(--%NS%bx-space-3, 0.75rem);
  padding: var(--%NS%bx-space-3, 0.75rem) var(--%NS%bx-space-5, 1.25rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  background: var(--%NS%bx-bg-surface);
}
.translucency-range[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  color: var(--%NS%bx-text-secondary);
}
.translucency-tinted-icon[_ngcontent-%COMP%] {
  background:
    radial-gradient(
      circle,
      currentcolor 48%,
      transparent 52%);
  opacity: 0.8;
}
input[type=range][_ngcontent-%COMP%] {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
  margin: 0;
  min-block-size: 1.5rem;
  cursor: pointer;
}
.translucency-controls.is-disabled[_ngcontent-%COMP%], 
input[type=range][_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
}
input[type=range][_ngcontent-%COMP%]:disabled {
  pointer-events: none;
}
.advanced-settings[_ngcontent-%COMP%] {
  margin-block-start: var(--%NS%bx-space-5, 1.25rem);
}
.advanced-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--%NS%bx-space-6, 1.5rem);
}
fieldset[_ngcontent-%COMP%] {
  border: 0;
  padding: 0;
  margin: 0 0 var(--%NS%bx-space-4, 1rem);
  min-inline-size: 0;
}
legend[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  margin-block-end: var(--%NS%bx-space-3, 0.75rem);
}
.quality-picker[_ngcontent-%COMP%], 
.accessibility-options[_ngcontent-%COMP%] {
  --%NS%bx-field-padding-bottom: 0;
  display: grid;
  gap: var(--%NS%bx-space-3, 0.75rem);
  font-size: 0.875rem;
}
.palette-picker[_ngcontent-%COMP%] {
  display: flex;
  gap: var(--%NS%bx-space-2, 0.5rem);
  margin-bottom: var(--%NS%bx-space-2, 0.5rem);
  flex-wrap: wrap;
}
.palette-picker[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  padding-inline: var(--%NS%bx-space-3, 0.75rem);
}
.palette-choice[_ngcontent-%COMP%] {
  justify-content: start;
  gap: var(--%NS%bx-space-3, 0.75rem);
  max-inline-size: 100%;
  min-inline-size: 0;
  padding: var(--%NS%bx-space-4, 1rem);
  text-align: start;
  white-space: normal;
}
.palette-choice[_ngcontent-%COMP%]    > bx-icon[_ngcontent-%COMP%] {
  margin-inline-start: auto;
}
.palette-swatches[_ngcontent-%COMP%] {
  display: inline-flex;
  flex: none;
  align-items: center;
}
.palette-swatches[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {
  width: 0.875rem;
  height: 0.875rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 50%;
}
.palette-swatches[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {
  margin-inline-start: -0.25rem;
}
.accessibility-options[_ngcontent-%COMP%] {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--%NS%bx-space-5, 1.25rem);
}
.accessibility-options[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  min-inline-size: 0;
  padding: var(--%NS%bx-space-4, 1rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.accessibility-options[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin-block-start: var(--%NS%bx-space-3, 0.75rem);
}
.appearance-documentation[_ngcontent-%COMP%] {
  margin-block: var(--%NS%bx-space-10, 2.5rem) var(--%NS%bx-space-6, 1.5rem);
}
.implementation[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: var(--%NS%bx-space-5, 1.25rem);
  margin-block-end: var(--%NS%bx-space-6, 1.5rem);
}
.implementation[_ngcontent-%COMP%]   .playground-code-block[_ngcontent-%COMP%] {
  margin: 0;
}
@media (max-width: 1536px) {
  .surface-layout[_ngcontent-%COMP%], 
   .implementation[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
  .preview-column[_ngcontent-%COMP%] {
    block-size: 30rem;
  }
}
@media (max-width: 640px) {
  .advanced-grid[_ngcontent-%COMP%], 
   .accessibility-options[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
  .mode-picker[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--%NS%bx-space-3, 0.75rem);
  }
  .mode-auto[_ngcontent-%COMP%] {
    --%NS%bx-toggle-inline-size: 100%;
    --%NS%bx-toggle-justify-content: space-between;
    grid-column: 1/-1;
    margin-block-start: var(--%NS%bx-space-2, 0.5rem);
  }
  .mode-description[_ngcontent-%COMP%] {
    font-size: 0.8125rem;
  }
  .settings-section[_ngcontent-%COMP%] {
    margin-block-start: calc(var(--%NS%bx-space-6, 1.5rem) + var(--%NS%bx-space-1, 0.25rem));
    padding-block-start: var(--%NS%bx-space-6, 1.5rem);
  }
  .surface-layout[_ngcontent-%COMP%] {
    --%NS%bx-container-padding: var(--%NS%bx-space-4, 1rem);
    padding: var(--%NS%bx-space-4, 1rem);
  }
  .translucency-controls[_ngcontent-%COMP%] {
    padding-inline: var(--%NS%bx-space-4, 1rem);
  }
}`]})};export{Te as Appearance};