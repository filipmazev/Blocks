import{A as tr,N as Oe$1,_ as ar,l as Qn,t as S}from"./main-EL5HAC26.js";import{n as ht}from"./chunk-BH16pVAk.js";import{n as Z}from"./chunk-41uhicSi.js";import{Ai as nn,B as Hne,Bi as p,Ci as lt,D as Et,Da as vi,Di as nR,Fi as oR,Fr as ep,Gi as pm,H as Ia,Hr as g,I as Gne,Ia as xe,Ii as od,K as In,Ka as ze,Kt as S$1,N as G,Nt as P,P as GM,Pa as wn,Ri as on,Sa as um,Ti as me,V as IM,Va as yn,Wi as pe,Y as It,Ya as zt,Zr as hm,_ as CM,_t as Me,c as Ae$1,ci as jM,ct as LA,da as so,g as C,ha as tn,ki as ne,kt as Oe$2,ln as V$1,lt as La,nr as at,o as A,pa as te,pi as kM,qr as h,qt as SF,ta as qr,tt as K,ur as ca,v as Ce,xa as ue,y as D,yt as Mn,zn as Z$1}from"./chunk-BWickaUR.js";var R=class r{themingService=p(La);paletteClass=g(()=>[this.themingService.palettes.find(t=>t.id===this.themingService.palette())?.className,this.themingService.highContrast()?`high-contrast`:``].join(` `));mode=h.required();static ɵfac=function(e){return new(e||r)};static ɵcmp=G({type:r,selectors:[[`app-appearance-mode-preview`]],hostAttrs:[`aria-hidden`,`true`,`inert`,``,`data-bx-light-scope`,``],hostVars:3,hostBindings:function(e,n){e&2&&(K(`data-theme`,n.mode()),LA(n.paletteClass()))},inputs:{mode:[1,`mode`]},decls:22,vars:5,consts:[[1,`mini-window`],[1,`mini-toolbar`],[`name`,`layers`,`size`,`16`],[1,`mini-toolbar-dot`],[1,`mini-workspace`],[1,`mini-sidebar`],[1,`mini-nav-active`],[`title`,`Workspace`,3,`headingLevel`,`opaque`],[1,`mini-card-row`],[1,`mini-avatar`],[`name`,`check`,`size`,`16`],[`label`,`Project progress`,3,`value`],[1,`mini-card-footer`],[`text`,`Ready`,`size`,`small`,`color`,`accent`,3,`opaque`,`tooltipOnTruncate`]],template:function(e,n){e&1&&(A(0,`div`,0)(1,`div`,1),Ae$1(2,`bx-icon`,2),A(3,`span`),me(4,`Blocks`),P(),Ae$1(5,`span`,3),P(),A(6,`div`,4)(7,`div`,5),Ae$1(8,`span`,6)(9,`span`)(10,`span`),P(),A(11,`bx-card`,7)(12,`div`,8)(13,`span`,9),Ae$1(14,`bx-icon`,10),P(),A(15,`span`),me(16,`Design system`),P()(),Ae$1(17,`bx-progress-bar`,11),A(18,`div`,12)(19,`span`),me(20,`12 components`),P(),Ae$1(21,`bx-tag`,13),P()()()()),e&2&&(C(11),V$1(`headingLevel`,4)(`opaque`,!0),C(6),V$1(`value`,68),C(4),V$1(`opaque`,!0)(`tooltipOnTruncate`,!1))},dependencies:[IM,on,GM,CM],styles:[`
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
}`]})};function V(r,t,e,n){let c=`assets/images/appearance/${r}`;return{src:`${c}.webp`,srcset:`${c}-640.webp 640w, ${c}.webp ${t}w`,width:t,height:e,alt:n}}var ke=[{id:`preview-shar-mountain`,title:`Šar Mountain`,shortTitle:`Šar`,subtitle:`High peaks, mountain pastures, and rich forests`,paragraphs:[`Šar Mountain is known for its high peaks, mountain pastures, and rich forests.`,`A variety of vegetation spreads everywhere in the areas of this mountain massif. A large number of these plants are used by the inhabitants of these regions for folk medicine.`],photo:V(`shar-mountain`,1200,730,`Snow-dusted peaks and green slopes reflected in a mountain lake on Šar Mountain`),caption:`The mountain landscapes of Šar Mountain.`,detail:{title:`Bogovinje Lake`,paragraphs:[`One of the mountain lakes that adorns Šar Mountain is Bogovinje Lake, known for its crystal-clear waters and stunning reflections of the surrounding peaks.`,`The lake is a popular destination for hikers and nature enthusiasts, offering a peaceful retreat in the heart of the mountains.`],photo:V(`bogovinje-lake`,1200,679,`Bogovinje Lake beneath snow-streaked mountain slopes`),caption:`The quiet waters of Bogovinje Lake beneath the surrounding peaks.`}},{id:`preview-mavrovo`,title:`Mavrovo National Park`,shortTitle:`Mavrovo`,subtitle:`The Korab massif`,paragraphs:[`Korab is the highest mountain in Macedonia, home to the Golem Korab peak standing at 2,764 meters.`,`The mountain is part of the Mavrovo National Park, known for its diverse landscapes and natural beauty.`],photo:V(`korab`,1200,775,`Rocky peaks and open mountain pastures in the Korab massif`),caption:`The high peaks and open pastures of Korab.`,detail:{title:`A landscape shaped by water`,paragraphs:[`Korab has abundant surface watercourses, with several permanent and glacial-fed rivers and streams.`,`The Macedonian side of Korab is home to eight permanent and many occasional glacial lakes, supporting rich ecosystems.`],photo:V(`korab-valley`,1200,715,`A black-and-white panorama of the Korab ridges with small lakes below`),caption:`A wide view across the ridges and lakes of the Korab massif.`}}];var De=[`reader`];var Q=(r,t)=>t.id;function Ie(r,t){if(r&1&&(A(0,`p`),me(1),P()),r&2){let e=t.$implicit;C(),Me(e)}}function Be(r,t){if(r&1&&(A(0,`p`),me(1),P()),r&2){let e=t.$implicit;C(),Me(e)}}function Re(r,t){if(r&1&&(A(0,`section`,10)(1,`div`,7)(2,`p`,8),me(3),P(),A(4,`h3`,27),me(5),P(),Mn(6,Ie,2,1,`p`,null,ca),P(),A(8,`figure`,28),Ae$1(9,`img`,29),A(10,`figcaption`),me(11),P()(),A(12,`div`,7)(13,`h4`),me(14),P(),Mn(15,Be,2,1,`p`,null,ca),P(),A(17,`figure`,30),Ae$1(18,`img`,29),A(19,`figcaption`),me(20),P()()()),r&2){let e=t.$implicit;V$1(`id`,e.id),K(`aria-labelledby`,e.id+`-title`),C(3),Me(e.subtitle),C(),V$1(`id`,e.id+`-title`),C(),Me(e.title),C(),In(e.paragraphs),C(3),V$1(`src`,e.photo.src)(`alt`,e.photo.alt)(`width`,e.photo.width)(`height`,e.photo.height),K(`srcset`,e.photo.srcset),C(2),Me(e.caption),C(3),Me(e.detail.title),C(),In(e.detail.paragraphs),C(3),V$1(`src`,e.detail.photo.src)(`alt`,e.detail.photo.alt)(`width`,e.detail.photo.width)(`height`,e.detail.photo.height),K(`srcset`,e.detail.photo.srcset),C(2),Me(e.detail.caption)}}function Ve(r,t){if(r&1){let e=tn();A(0,`div`,11)(1,`h3`),me(2,`No places found`),P(),A(3,`p`),me(4,`Try searching for Šar Mountain, Korab, or lakes.`),P(),A(5,`button`,31),ue(`click`,function(){at(e);let c=S$1();return lt(c.search.set(``))}),me(6,`Clear search`),P()()}}function He(r,t){if(r&1){let e=tn();A(0,`button`,32),ue(`click`,function(){let c=at(e).$implicit,d=S$1(),u=It(1);return lt(d.scrollTo(u,c.id))}),Ae$1(1,`bx-icon`,33),A(2,`span`),me(3),P()()}if(r&2){let e=t.$implicit;C(3),Me(e.shortTitle)}}function Le(r,t){if(r&1){let e=tn();A(0,`bx-menu-item`,36),ue(`action`,function(){let c=at(e).$implicit,d=S$1(2),u=It(1);return lt(d.scrollTo(u,c.id))}),P()}if(r&2){let e=t.$implicit;V$1(`label`,e.title)}}function je(r,t){if(r&1){let e=tn();A(0,`bx-menu`)(1,`bx-menu-item`,34),ue(`action`,function(){at(e);let c=S$1(),d=It(1);return lt(c.scrollTo(d))}),P(),Mn(2,Le,1,1,`bx-menu-item`,35,Q),P()}if(r&2){let e=S$1();C(2),In(e.parks())}}var H=class r{bxA11yService=p(Oe$2);reader=nn.required(`reader`);search=D(``);saved=D(!1);parks=g(()=>{let t=n=>n.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase(),e=t(this.search().trim());return ke.filter(n=>t([n.title,n.subtitle,...n.paragraphs,n.detail.title,...n.detail.paragraphs].join(` `)).includes(e))});scrollHintCleanup;constructor(){p(Z$1).onDestroy(()=>this.stopScrollHint()),xe(()=>{this.bxA11yService.isReducedMotion()&&this.stopScrollHint()}),ze(()=>{if(this.bxA11yService.isReducedMotion())return;let t=this.reader().nativeElement,e=t.ownerDocument.defaultView;if(!e)return;let n,c,d=new IntersectionObserver(u=>{u.some(O=>O.isIntersecting&&O.intersectionRatio>=.5)&&(d.disconnect(),n=e.setTimeout(()=>{if(t.scrollTop!==0||this.bxA11yService.isReducedMotion())return;let O=Math.min(280,t.scrollHeight-t.clientHeight);if(O<=0)return;let Ee=e.performance.now(),J=ze=>{let X=Math.min((ze-Ee)/2800,1);t.scrollTop=O*(1-Math.cos(X*Math.PI*2))/2,X<1?c=e.requestAnimationFrame(J):this.stopScrollHint()};c=e.requestAnimationFrame(J)},900))},{threshold:.5});this.scrollHintCleanup=()=>{d.disconnect(),e.clearTimeout(n),c!==void 0&&e.cancelAnimationFrame(c)},d.observe(t)})}stopScrollHint(){this.scrollHintCleanup?.(),this.scrollHintCleanup=void 0}scrollTo(t,e){this.stopScrollHint();let n=e?t.querySelector(`#${e}`):void 0;if(e&&!n)return;let c=n?n.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop-96:0;t.scrollTo({top:Math.max(0,c),behavior:this.bxA11yService.isReducedMotion()?`auto`:`smooth`})}static ɵfac=function(e){return new(e||r)};static ɵcmp=G({type:r,selectors:[[`app-appearance-preview`]],viewQuery:function(e,n){e&1&&yn(n.reader,De,5),e&2&&Et()},hostAttrs:[`data-bx-light-scope`,``],hostBindings:function(e,n){e&1&&ue(`pointerdown`,function(){return n.stopScrollHint()})(`wheel`,function(){return n.stopScrollHint()})(`keydown`,function(){return n.stopScrollHint()})(`focusin`,function(){return n.stopScrollHint()})},decls:37,vars:8,consts:[[`reader`,``],[`query`,``],[`contents`,``],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Scrollable national parks article`,1,`preview-reader`],[1,`park-article`],[`src`,`assets/images/appearance/mountains-2400.webp`,`srcset`,`
                assets/images/appearance/mountains-640.webp   640w,
                assets/images/appearance/mountains.webp      1200w,
                assets/images/appearance/mountains-2400.webp 2400w
            `,`sizes`,`(max-width: 640px) 150vw, (max-width: 1280px) 90vw, 55vw`,`alt`,`A snow-covered mountain landscape`,`width`,`2400`,`height`,`1643`,`loading`,`eager`,`fetchpriority`,`high`,`decoding`,`async`,1,`article-hero`],[1,`article-copy`,`article-heading`],[1,`article-copy`],[1,`article-eyebrow`],[1,`article-lead`],[1,`park-story`,3,`id`],[`role`,`status`,1,`article-copy`,`empty-search`],[1,`article-copy`,`article-footer`],[`name`,`leaf`,`size`,`16`],[`role`,`group`,`aria-label`,`Nature journal controls`,1,`preview-tools`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Back to the start of the article`,1,`preview-icon-button`,3,`click`],[`name`,`arrow-up`,`size`,`16`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`bxSurfaceInteractive`,``,`bxSurfaceFocusEmission`,`var(--bx-primary)`,1,`preview-search`],[`name`,`search`,`size`,`16`],[`type`,`search`,`aria-label`,`Search the national parks article`,`placeholder`,`Find a place`,3,`input`,`value`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,1,`preview-icon-button`,3,`click`,`color`],[`size`,`16`,3,`name`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Article contents`,`placement`,`bottom`,1,`preview-icon-button`,3,`bxDropdown`],[`name`,`ellipsis`,`size`,`20`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`aria-label`,`Places in this article`,1,`preview-navigation`],[`bxTruncate`,``,`role`,`status`,1,`preview-saved-status`],[`type`,`button`],[3,`id`],[1,`article-photo`],[`sizes`,`(max-width: 640px) 100vw, (max-width: 1280px) 85vw, 55vw`,`loading`,`eager`,`decoding`,`async`,3,`src`,`alt`,`width`,`height`],[1,`article-photo`,`article-detail-photo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`type`,`button`,3,`click`],[`name`,`mountain`,`size`,`16`],[`label`,`Back to the top`,`icon`,`arrow-up`,3,`action`],[`icon`,`mountain`,3,`label`],[`icon`,`mountain`,3,`action`,`label`]],template:function(e,n){if(e&1){let c=tn();A(0,`div`,3,0)(2,`article`,4),Ae$1(3,`img`,5),A(4,`header`,6)(5,`h2`),me(6,`National Parks`),P()(),A(7,`div`,7)(8,`p`,8),me(9,`Discover Macedonia`),P(),A(10,`p`,9),me(11,`Explore the natural beauty of Macedonia through the power of photography.`),P()(),Mn(12,Re,21,18,`section`,10,Q,!1,Ve,7,0,`div`,11),A(15,`footer`,12),Ae$1(16,`bx-icon`,13),A(17,`span`),me(18,`Leave the trails as beautiful as you found them.`),P()()()(),A(19,`div`,14)(20,`button`,15),ue(`click`,function(){at(c);let u=It(1);return lt(n.scrollTo(u))}),Ae$1(21,`bx-icon`,16),P(),A(22,`div`,17),Ae$1(23,`bx-icon`,18),A(24,`input`,19,1),ue(`input`,function(){at(c);let u=It(25);return lt(n.search.set(u.value))}),P()(),A(26,`button`,20),ue(`click`,function(){return n.saved.set(!n.saved())}),Ae$1(27,`bx-icon`,21),P(),A(28,`button`,22),Ae$1(29,`bx-icon`,23),P()(),A(30,`nav`,24)(31,`span`,25),me(32),P(),Mn(33,He,4,1,`button`,26,Q),P(),ep(35,je,4,0,`ng-template`,null,2,qr)}if(e&2){let c=It(36);C(12),In(n.parks()),C(12),V$1(`value`,n.search()),C(2),V$1(`color`,n.saved()?`primary`:`grayscale`),K(`aria-pressed`,n.saved())(`aria-label`,n.saved()?`Remove article from saved places`:`Save article to your places`),C(),V$1(`name`,n.saved()?`bookmark-check`:`bookmark`),C(),V$1(`bxDropdown`,c),C(4),Me(n.saved()?`Saved to your places`:`Explore Macedonia`),C(),In(n.parks())}},dependencies:[zt,Z,on,kM,pm,um,so],styles:[`
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
}`]})};var W=[{value:`light`,label:`Light`},{value:`dark`,label:`Dark`},{value:`auto`,label:`Auto`}];var Oe=[{value:`auto`,label:`Automatic`},{value:`baseline`,label:`Baseline`}];var Ae=[{value:`auto`,label:`Automatic`},{value:`off`,label:`Off`},{value:`on`,label:`Opt in on this browser`}];var U=(r,t)=>t.value;var qe=(r,t)=>t.id;function Fe(r,t){r&1&&Ae$1(0,`app-appearance-mode-preview`,49)(1,`app-appearance-mode-preview`,50)}function $e(r,t){if(r&1&&Ae$1(0,`app-appearance-mode-preview`,45),r&2){let e=S$1().$implicit;V$1(`mode`,e.value)}}function Ge(r,t){if(r&1){let e=tn();A(0,`bx-card`,42),ue(`activated`,function(){let c=at(e).$implicit,d=S$1();return lt(d.setMode(c.value))}),A(1,`span`,43)(2,`span`,44),te(3,Fe,2,0)(4,$e,1,1,`app-appearance-mode-preview`,45),P(),A(5,`span`,46)(6,`span`,47),me(7),Ae$1(8,`bx-icon`,48),P()()()()}if(r&2){let e=t.$implicit,n=S$1();V$1(`clickable`,!0)(`selected`,n.selectedMode()===e.value)(`ariaLabel`,e.label),C(2),pe(`is-auto`,e.value===`auto`),C(),ne(e.value===`auto`?3:4),C(4),Me(e.label),C(),V$1(`name`,n.selectedMode()===e.value?`circle-check`:`circle`)}}function Ke(r,t){if(r&1){let e=tn();A(0,`bx-slide-toggle`,51),nR(),ue(`ngModelChange`,function(c){at(e);let d=S$1();return lt(d.setAutomaticMode(c))}),P()}if(r&2){let e=S$1();V$1(`ngModel`,e.themingService.applicationTheme()===null),oR()}}function Qe(r,t){if(r&1){let e=tn();A(0,`bx-radio`,52),nR(),ue(`ngModelChange`,function(c){at(e);let d=S$1();return lt(d.updateAppearance({quality:c}))}),P()}if(r&2){let e=t.$implicit,n=S$1();V$1(`label`,e.label)(`value`,e.value)(`ngModel`,n.appearance().quality),oR()}}function We(r,t){if(r&1){let e=tn();A(0,`bx-radio`,53),nR(),ue(`ngModelChange`,function(c){at(e);let d=S$1();return lt(d.updateAppearance({glassiness:c}))}),P()}if(r&2){let e=t.$implicit,n=S$1();V$1(`label`,e.label)(`value`,e.value)(`disabled`,n.appearance().quality===`baseline`)(`ngModel`,n.appearance().glassiness??`auto`),oR()}}function Ue(r,t){if(r&1){let e=tn();A(0,`button`,54),ue(`click`,function(){let c=at(e).$implicit,d=S$1();return lt(d.themingService.setPalette(c.id))}),A(1,`span`,55),Ae$1(2,`span`)(3,`span`),P(),me(4),P()}if(r&2){let e=t.$implicit,n=S$1();V$1(`color`,n.themingService.palette()===e.id?`accent`:`grayscale`),K(`aria-pressed`,n.themingService.palette()===e.id),C(2),Ce(`background-color`,e.colors[0]),C(),Ce(`background-color`,e.colors[1]),C(),wn(``,e.label,` `)}}function Je(r,t){if(r&1&&(A(0,`div`,56)(1,`div`)(2,`h3`),me(3,`One configuration. Every component.`),P(),A(4,`p`),me(5,`Surfaces follow the existing semantic theme. Use the controls above, or configure the theming service in your application.`),P()(),A(6,`pre`,57),Ae$1(7,`code`,58),P()(),Ae$1(8,`app-readme`,59)),r&2){let e=S$1();C(7),V$1(`highlight`,e.codeExample)}}var Te=class r{bxA11yService=p(Oe$2);windowDimensionsService=p(Ia);themingService=p(La);themeStudioService=p(Oe$1);appearance=this.themingService.appearance;reducedMotion=this.bxA11yService.isReducedMotion;compactModes=g(()=>this.windowDimensionsService.dimensions().width<=this.windowDimensionsService.breakpoints.sm);modes=g(()=>this.compactModes()?W.filter(t=>t.value!==`auto`):W);selectedMode=g(()=>this.compactModes()?this.themingService.activeTheme():this.themingService.applicationTheme()??`auto`);translucencyDescription=g(()=>{let t=this.appearance().translucency;return t<.25?`Lighter tint and blur`:t<.75?`Balanced tint and blur`:`Stronger tint and blur`});qualities=Oe;glassinessModes=Ae;codeExample=`const themingService = inject(ThemingService);

// Balanced glass throughout the application, including open overlays.
themingService.setAppearance({ translucency: 0.5 });

// Browser policy for explicitly selected glassy controls.
themingService.setAppearance({ glassiness: 'auto' });

// Opaque surfaces are an accessibility preference.
themingService.setAppearance({ reducedTransparency: true });

// Opt in only the controls that benefit from refraction.
<button bx-button variant="icon" glassiness="auto">\u2026</button>
<section bxSurface bxSurfaceGlassiness="auto">\u2026</section>`;constructor(){xe(()=>{this.qualities.some(t=>t.value===this.appearance().quality)||this.themingService.setAppearance({quality:`auto`})})}updateAppearance(t){this.themingService.setAppearance(t)}setMode(t){this.compactModes()&&this.themingService.applicationTheme()===null&&t===this.themingService.activeTheme()||this.themingService.setApplicationTheme(t===`auto`?null:t)}setAutomaticMode(t){this.themingService.setApplicationTheme(t?null:this.themingService.activeTheme())}setMotion(t){this.bxA11yService.setReducedMotion(t)}reset(){this.themingService.resetAppearance()}static ɵfac=function(e){return new(e||r)};static ɵcmp=G({type:r,selectors:[[`app-appearance`]],decls:82,vars:18,consts:[[`translucency`,``],[`documentation`,``],[`pageDescription`,`Configure the shared theme, palette, surfaces, and effects used throughout the playground.`],[`role`,`group`,`aria-label`,`Appearance mode`,1,`mode-picker`],[`highlightColor`,`accent`,1,`mode-choice`,3,`clickable`,`selected`,`ariaLabel`],[`label`,`Automatic`,`labelPosition`,`before`,`subscriptSizing`,`dynamic`,1,`mode-auto`,3,`ngModel`],[`aria-labelledby`,`surfaces-title`,1,`settings-section`,`surfaces-section`],[1,`section-heading`],[`id`,`surfaces-title`],[`size`,`full`,1,`surface-layout`],[1,`surface-introduction`],[1,`panel-heading`],[`id`,`surface-appearance-title`],[`bx-button`,``,`type`,`button`,`variant`,`text`,`color`,`grayscale`,`aria-label`,`Reset surface appearance`,3,`click`],[1,`surface-demo-column`],[1,`preview-column`],[`aria-label`,`Translucency`,`aria-describedby`,`translucency-note`,1,`translucency-controls`,3,`bxTooltip`],[1,`translucency-range`],[`name`,`circle-dashed`,`size`,`20`,`ariaLabel`,`Lighter tint`,3,`decorative`],[`id`,`appearance-translucency`,`type`,`range`,`bxSlider`,``,`min`,`0`,`max`,`1`,`step`,`0.01`,`aria-label`,`Translucency`,`aria-describedby`,`translucency-note`,3,`input`,`value`,`disabled`],[`name`,`circle`,`size`,`20`,`ariaLabel`,`Richly tinted`,1,`translucency-tinted-icon`,3,`decorative`],[`id`,`translucency-note`,1,`section-note`],[`title`,`Advanced settings`,1,`advanced-settings`,3,`headingLevel`],[1,`advanced-grid`],[1,`rendering-options`],[1,`quality-picker`],[`name`,`appearance-quality`,`subscriptSizing`,`dynamic`,3,`label`,`value`,`ngModel`],[1,`section-note`],[`name`,`appearance-glassiness`,`subscriptSizing`,`dynamic`,3,`label`,`value`,`disabled`,`ngModel`],[`aria-labelledby`,`theme-title`,1,`settings-section`],[`id`,`theme-title`],[1,`palette-picker`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`color`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`primary`,`aria-controls`,`theme-studio-panel`,3,`click`],[`name`,`plus`,`size`,`18`],[`aria-labelledby`,`accessibility-title`,1,`settings-section`],[`id`,`accessibility-title`],[1,`accessibility-options`],[`label`,`Reduce motion`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Reduce transparency`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`High contrast`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`title`,`Appearance API, performance, and accessibility`,1,`appearance-documentation`,3,`headingLevel`,`contentTemplate`],[`highlightColor`,`accent`,1,`mode-choice`,3,`activated`,`clickable`,`selected`,`ariaLabel`],[1,`mode-content`],[1,`mode-visual`],[3,`mode`],[1,`mode-caption`],[1,`mode-label`],[`size`,`20`,3,`name`],[`mode`,`light`],[`mode`,`dark`],[`label`,`Automatic`,`labelPosition`,`before`,`subscriptSizing`,`dynamic`,1,`mode-auto`,3,`ngModelChange`,`ngModel`],[`name`,`appearance-quality`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`label`,`value`,`ngModel`],[`name`,`appearance-glassiness`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`label`,`value`,`disabled`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`color`],[`aria-hidden`,`true`,1,`palette-swatches`],[1,`implementation`],[`tabindex`,`0`,`aria-label`,`TypeScript appearance configuration`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`path`,`projects/playground/src/app/components/screens/appearance/README.md`]],template:function(e,n){if(e&1){let c=tn();A(0,`bx-page-container`,2)(1,`div`,3),Mn(2,Ge,9,8,`bx-card`,4,U),te(4,Ke,1,1,`bx-slide-toggle`,5),P(),A(5,`section`,6)(6,`header`,7)(7,`div`)(8,`h2`,8),me(9,`Surfaces`),P()()(),A(10,`bx-container`,9)(11,`div`,10)(12,`div`,11)(13,`h3`,12),me(14,`Surface Appearance`),P(),A(15,`button`,13),ue(`click`,function(){return n.reset()}),me(16,`Reset`),P()()(),A(17,`div`,14)(18,`div`,15),Ae$1(19,`app-appearance-preview`),P(),A(20,`section`,16)(21,`div`,17),Ae$1(22,`bx-icon`,18),A(23,`input`,19,0),ue(`input`,function(){at(c);let u=It(24);return lt(n.updateAppearance({translucency:+u.value}))}),P(),Ae$1(25,`bx-icon`,20),P()(),A(26,`p`,21),me(27),P()()(),A(28,`bx-collapsible`,22)(29,`div`,23)(30,`div`)(31,`fieldset`,24)(32,`legend`),me(33,`Rendering`),P(),A(34,`div`,25),Mn(35,Qe,1,3,`bx-radio`,26,U),P()(),A(37,`p`,27),me(38,`Automatic balances detail and performance. Baseline uses blur and tint and turns glassiness off.`),P()(),A(39,`div`)(40,`fieldset`,24)(41,`legend`),me(42,`Glassiness`),P(),A(43,`div`,25),Mn(44,We,1,4,`bx-radio`,28,U),P()(),A(46,`p`,27),me(47,` Refraction enhances selected controls on supported browsers. Text and icons keep their theme colors. Accessibility preferences take precedence. `),P()()()()(),A(48,`section`,29)(49,`header`,7)(50,`div`)(51,`h2`,30),me(52,`Theme`),P()()(),A(53,`div`,31),Mn(54,Ue,5,7,`button`,32,qe),A(56,`button`,33),ue(`click`,function(){return n.themeStudioService.open.set(!0)}),Ae$1(57,`bx-icon`,34),me(58,`Create a theme `),P()(),A(59,`p`,27),me(60,`Customize the current palette in Theme Studio, preview your changes here, then export it for your application.`),P()(),A(61,`section`,35)(62,`header`,7)(63,`div`)(64,`h2`,36),me(65,`Accessibility`),P()()(),A(66,`div`,37)(67,`div`)(68,`bx-slide-toggle`,38),nR(),ue(`ngModelChange`,function(u){return n.setMotion(u)}),P(),A(69,`p`,27),me(70,`Keep transitions and decorative movement to a minimum.`),P()(),A(71,`div`)(72,`bx-slide-toggle`,39),nR(),ue(`ngModelChange`,function(u){return n.updateAppearance({reducedTransparency:u})}),P(),A(73,`p`,27),me(74,`Use opaque surfaces while preserving your translucency preference.`),P()(),A(75,`div`)(76,`bx-slide-toggle`,40),nR(),ue(`ngModelChange`,function(u){return n.themingService.setHighContrast(u)}),P(),A(77,`p`,27),me(78,`Strengthen the separation between content and its background.`),P()()()(),Ae$1(79,`bx-collapsible`,41),ep(80,Je,9,1,`ng-template`,null,1,qr),P()}if(e&2){let c=It(81);C(2),In(n.modes()),C(2),ne(n.compactModes()?4:-1),C(16),pe(`is-disabled`,n.appearance().reducedTransparency),V$1(`bxTooltip`,n.appearance().reducedTransparency?`Turn off Reduce transparency to adjust translucency.`:``),K(`tabindex`,n.appearance().reducedTransparency?0:null),C(2),V$1(`decorative`,!1),C(),V$1(`value`,n.appearance().translucency)(`disabled`,n.appearance().reducedTransparency),K(`aria-valuetext`,n.translucencyDescription()),C(2),V$1(`decorative`,!1),C(2),wn(` `,n.appearance().reducedTransparency?`Reduced transparency keeps surfaces opaque. Turn it off to adjust translucency.`:`Slide from a lighter tint to a richer finish. Glassiness always keeps a readable backing.`,` `),C(),V$1(`headingLevel`,3),C(7),In(n.qualities),C(9),In(n.glassinessModes),C(10),In(n.themingService.palettes),C(2),K(`aria-expanded`,n.themeStudioService.open()),C(12),V$1(`ngModel`,n.reducedMotion()),oR(),C(4),V$1(`ngModel`,n.appearance().reducedTransparency),oR(),C(4),V$1(`ngModel`,n.themingService.highContrast()),oR(),C(3),V$1(`headingLevel`,2)(`contentTemplate`,c)}},dependencies:[jM,ht,Gne,Hne,SF,tr,ar,Qn,Z,IM,hm,on,od,vi,S,H,R],styles:[`
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