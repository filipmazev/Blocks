import{n as w}from"./chunk-CzAq6x0S.js";import{A as ht,a as fn,l as xn,o as he}from"./main-R2VAD5W5.js";import{Ai as xe,Ar as mQ,B as Gr,Dr as m,En as bF,F as Fl,Ft as Re$1,Gn as ea,H,Ii as ye,In as dQ,Kt as Uc,Ln as db,M as F0,Mi as xr,Mt as Qt,Oi as x,Pr as ne,Qn as ft,Rn as de,Rt,St as P,T as Dr,Tn as b,Vi as z0,Y as J_,a as $n,an as X0,at as L0,bi as vk,d as B$1,dn as Z,fn as Z0,in as X,it as L,k as Er,lt as Ll,mi as ue,mn as Zf,mt as Mr,ni as se,nn as Wr,pr as je$1,q as J0,qt as Ue,sn as Xs,t as $0,u as An,v as Ca,wt as Pe$1,x as D,xi as vt,y as Ck,yr as kp,yt as Oe$1,z as Gn,zr as p}from"./chunk-Cmma2g1C.js";var B=class r{themingService=p(Ca);paletteClass=b(()=>[this.themingService.palettes.find(a=>a.id===this.themingService.palette())?.className,this.themingService.highContrast()?`high-contrast`:``].join(` `));mode=m.required();static ɵfac=function(e){return new(e||r)};static ɵcmp=H({type:r,selectors:[[`app-appearance-mode-preview`]],hostAttrs:[`aria-hidden`,`true`,`inert`,``,`data-bx-light-scope`,``],hostVars:3,hostBindings:function(e,n){e&2&&(B$1(`data-theme`,n.mode()),Fl(n.paletteClass()))},inputs:{mode:[1,`mode`]},decls:22,vars:5,consts:[[1,`mini-window`],[1,`mini-toolbar`],[`name`,`layers`,`size`,`16`],[1,`mini-toolbar-dot`],[1,`mini-workspace`],[1,`mini-sidebar`],[1,`mini-nav-active`],[`title`,`Workspace`,3,`headingLevel`,`opaque`],[1,`mini-card-row`],[1,`mini-avatar`],[`name`,`check`,`size`,`16`],[`label`,`Project progress`,3,`value`],[1,`mini-card-footer`],[`text`,`Ready`,`size`,`small`,`color`,`accent`,3,`opaque`,`tooltipOnTruncate`]],template:function(e,n){e&1&&(P(0,`div`,0)(1,`div`,1),Oe$1(2,`bx-icon`,2),P(3,`span`),Re$1(4,`Blocks`),L(),Oe$1(5,`span`,3),L(),P(6,`div`,4)(7,`div`,5),Oe$1(8,`span`,6)(9,`span`)(10,`span`),L(),P(11,`bx-card`,7)(12,`div`,8)(13,`span`,9),Oe$1(14,`bx-icon`,10),L(),P(15,`span`),Re$1(16,`Design system`),L()(),Oe$1(17,`bx-progress-bar`,11),P(18,`div`,12)(19,`span`),Re$1(20,`12 components`),L(),Oe$1(21,`bx-tag`,13),L()()()()),e&2&&(D(11),ne(`headingLevel`,4)(`opaque`,!0),D(6),ne(`value`,68),D(4),ne(`opaque`,!0)(`tooltipOnTruncate`,!1))},dependencies:[Z0,vt,J0,$0],styles:[`
[_nghost-%COMP%] {
  display: block;
  block-size: 10rem;
  overflow: hidden;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
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
  gap: 0.5rem;
  padding: 0.75rem;
  border-block-end: 1px solid var(--%NS%bx-border-default);
  background: var(--%NS%bx-bg-surface);
  font-weight: 600;
}
.mini-toolbar-dot[_ngcontent-%COMP%] {
  margin-inline-start: auto;
  inline-size: 0.375rem;
  block-size: 0.375rem;
  border-radius: 9999px;
  background: var(--%NS%bx-accent);
}
.mini-workspace[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr);
  gap: 0.75rem;
  padding: 0.75rem;
}
.mini-sidebar[_ngcontent-%COMP%] {
  display: grid;
  align-content: start;
  gap: 0.75rem;
  padding-block: 0.5rem;
}
.mini-sidebar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  block-size: 0.375rem;
  border-radius: 9999px;
  background: var(--%NS%bx-border-default);
}
.mini-sidebar[_ngcontent-%COMP%]   .mini-nav-active[_ngcontent-%COMP%] {
  background: var(--%NS%bx-primary);
}
bx-card[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: 0.5rem;
  --%NS%bx-card-radius: 0.5rem;
  --%NS%bx-card-title-size: 0.75rem;
}
.mini-card-row[_ngcontent-%COMP%], 
.mini-card-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
    gap: 0.25rem;
    padding: 0.5rem;
  }
  .mini-workspace[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
    gap: 0.5rem;
    padding: 0.5rem;
  }
  .mini-sidebar[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.5rem;
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
  margin-block-end: 0.5rem;
}
.mini-avatar[_ngcontent-%COMP%] {
  display: grid;
  place-items: center;
  inline-size: 1.25rem;
  block-size: 1.25rem;
  border-radius: 9999px;
  background: var(--%NS%bx-primary);
  color: var(--%NS%bx-on-primary);
}
.mini-card-footer[_ngcontent-%COMP%] {
  justify-content: space-between;
  margin-block-start: 0.5rem;
  color: var(--%NS%bx-text-secondary);
}`]})};function R(r,a,e,n){let l=`assets/images/appearance/${r}`;return{src:`${l}.webp`,srcset:`${l}-640.webp 640w, ${l}.webp ${a}w`,width:a,height:e,alt:n}}var Pe=[{id:`preview-shar-mountain`,title:`Šar Mountain`,shortTitle:`Šar`,subtitle:`High peaks, mountain pastures, and rich forests`,paragraphs:[`Šar Mountain is known for its high peaks, mountain pastures, and rich forests.`,`A variety of vegetation spreads everywhere in the areas of this mountain massif. A large number of these plants are used by the inhabitants of these regions for folk medicine.`],photo:R(`shar-mountain`,1200,730,`Snow-dusted peaks and green slopes reflected in a mountain lake on Šar Mountain`),caption:`The mountain landscapes of Šar Mountain.`,detail:{title:`Bogovinje Lake`,paragraphs:[`One of the mountain lakes that adorns Šar Mountain is Bogovinje Lake, known for its crystal-clear waters and stunning reflections of the surrounding peaks.`,`The lake is a popular destination for hikers and nature enthusiasts, offering a peaceful retreat in the heart of the mountains.`],photo:R(`bogovinje-lake`,1200,679,`Bogovinje Lake beneath snow-streaked mountain slopes`),caption:`The quiet waters of Bogovinje Lake beneath the surrounding peaks.`}},{id:`preview-mavrovo`,title:`Mavrovo National Park`,shortTitle:`Mavrovo`,subtitle:`The Korab massif`,paragraphs:[`Korab is the highest mountain in Macedonia, home to the Golem Korab peak standing at 2,764 meters.`,`The mountain is part of the Mavrovo National Park, known for its diverse landscapes and natural beauty.`],photo:R(`korab`,1200,775,`Rocky peaks and open mountain pastures in the Korab massif`),caption:`The high peaks and open pastures of Korab.`,detail:{title:`A landscape shaped by water`,paragraphs:[`Korab has abundant surface watercourses, with several permanent and glacial-fed rivers and streams.`,`The Macedonian side of Korab is home to eight permanent and many occasional glacial lakes, supporting rich ecosystems.`],photo:R(`korab-valley`,1200,715,`A black-and-white panorama of the Korab ridges with small lakes below`),caption:`A wide view across the ridges and lakes of the Korab massif.`}}];var ze=[`reader`];var K=(r,a)=>a.id;function Ne(r,a){if(r&1&&(P(0,`p`),Re$1(1),L()),r&2){let e=a.$implicit;D(),Ue(e)}}function De(r,a){if(r&1&&(P(0,`p`),Re$1(1),L()),r&2){let e=a.$implicit;D(),Ue(e)}}function Ie(r,a){if(r&1&&(P(0,`section`,10)(1,`div`,7)(2,`p`,8),Re$1(3),L(),P(4,`h3`,27),Re$1(5),L(),xr(6,Ne,2,1,`p`,null,Xs),L(),P(8,`figure`,28),Oe$1(9,`img`,29),P(10,`figcaption`),Re$1(11),L()(),P(12,`div`,7)(13,`h4`),Re$1(14),L(),xr(15,De,2,1,`p`,null,Xs),L(),P(17,`figure`,30),Oe$1(18,`img`,29),P(19,`figcaption`),Re$1(20),L()()()),r&2){let e=a.$implicit;ne(`id`,e.id),B$1(`aria-labelledby`,e.id+`-title`),D(3),Ue(e.subtitle),D(),ne(`id`,e.id+`-title`),D(),Ue(e.title),D(),Dr(e.paragraphs),D(3),ne(`src`,e.photo.src)(`alt`,e.photo.alt)(`width`,e.photo.width)(`height`,e.photo.height),B$1(`srcset`,e.photo.srcset),D(2),Ue(e.caption),D(3),Ue(e.detail.title),D(),Dr(e.detail.paragraphs),D(3),ne(`src`,e.detail.photo.src)(`alt`,e.detail.photo.alt)(`width`,e.detail.photo.width)(`height`,e.detail.photo.height),B$1(`srcset`,e.detail.photo.srcset),D(2),Ue(e.detail.caption)}}function Be(r,a){if(r&1){let e=Er();P(0,`div`,11)(1,`h3`),Re$1(2,`No places found`),L(),P(3,`p`),Re$1(4,`Try searching for Šar Mountain, Korab, or lakes.`),L(),P(5,`button`,31),ye(`click`,function(){$n(e);let l=se();return Gn(l.search.set(``))}),Re$1(6,`Clear search`),L()()}}function Re(r,a){if(r&1){let e=Er();P(0,`button`,32),ye(`click`,function(){let l=$n(e).$implicit,d=se(),u=Ll(1);return Gn(d.scrollTo(u,l.id))}),Oe$1(1,`bx-icon`,33),P(2,`span`),Re$1(3),L()()}if(r&2){let e=a.$implicit;D(3),Ue(e.shortTitle)}}function Ve(r,a){if(r&1){let e=Er();P(0,`bx-menu-item`,36),ye(`action`,function(){let l=$n(e).$implicit,d=se(2),u=Ll(1);return Gn(d.scrollTo(u,l.id))}),L()}if(r&2){let e=a.$implicit;ne(`label`,e.title)}}function He(r,a){if(r&1){let e=Er();P(0,`bx-menu`)(1,`bx-menu-item`,34),ye(`action`,function(){$n(e);let l=se(),d=Ll(1);return Gn(l.scrollTo(d))}),L(),xr(2,Ve,1,1,`bx-menu-item`,35,K),L()}if(r&2){let e=se();D(2),Dr(e.parks())}}var V=class r{bxA11yService=p(je$1);reader=ea.required(`reader`);search=x(``);saved=x(!1);parks=b(()=>{let a=n=>n.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase(),e=a(this.search().trim());return Pe.filter(n=>a([n.title,n.subtitle,...n.paragraphs,n.detail.title,...n.detail.paragraphs].join(` `)).includes(e))});scrollHintCleanup;constructor(){p(Z).onDestroy(()=>this.stopScrollHint()),xe(()=>{this.bxA11yService.isReducedMotion()&&this.stopScrollHint()}),ft(()=>{if(this.bxA11yService.isReducedMotion())return;let a=this.reader().nativeElement,e=a.ownerDocument.defaultView;if(!e)return;let n,l,d=new IntersectionObserver(u=>{u.some(A=>A.isIntersecting&&A.intersectionRatio>=.5)&&(d.disconnect(),n=e.setTimeout(()=>{if(a.scrollTop!==0||this.bxA11yService.isReducedMotion())return;let A=Math.min(280,a.scrollHeight-a.clientHeight);if(A<=0)return;let Te=e.performance.now(),U=Ee=>{let J=Math.min((Ee-Te)/2800,1);a.scrollTop=A*(1-Math.cos(J*Math.PI*2))/2,J<1?l=e.requestAnimationFrame(U):this.stopScrollHint()};l=e.requestAnimationFrame(U)},900))},{threshold:.5});this.scrollHintCleanup=()=>{d.disconnect(),e.clearTimeout(n),l!==void 0&&e.cancelAnimationFrame(l)},d.observe(a)})}stopScrollHint(){this.scrollHintCleanup?.(),this.scrollHintCleanup=void 0}scrollTo(a,e){this.stopScrollHint();let n=e?a.querySelector(`#${e}`):void 0;if(e&&!n)return;let l=n?n.getBoundingClientRect().top-a.getBoundingClientRect().top+a.scrollTop-96:0;a.scrollTo({top:Math.max(0,l),behavior:this.bxA11yService.isReducedMotion()?`auto`:`smooth`})}static ɵfac=function(e){return new(e||r)};static ɵcmp=H({type:r,selectors:[[`app-appearance-preview`]],viewQuery:function(e,n){e&1&&Mr(n.reader,ze,5),e&2&&Qt()},hostAttrs:[`data-bx-light-scope`,``],hostBindings:function(e,n){e&1&&ye(`pointerdown`,function(){return n.stopScrollHint()})(`wheel`,function(){return n.stopScrollHint()})(`keydown`,function(){return n.stopScrollHint()})(`focusin`,function(){return n.stopScrollHint()})},decls:37,vars:8,consts:[[`reader`,``],[`query`,``],[`contents`,``],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Scrollable national parks article`,1,`preview-reader`],[1,`park-article`],[`src`,`assets/images/appearance/mountains-2400.webp`,`srcset`,`
                assets/images/appearance/mountains-640.webp   640w,
                assets/images/appearance/mountains.webp      1200w,
                assets/images/appearance/mountains-2400.webp 2400w
            `,`sizes`,`(max-width: 640px) 150vw, (max-width: 1280px) 90vw, 55vw`,`alt`,`A snow-covered mountain landscape`,`width`,`2400`,`height`,`1643`,`loading`,`eager`,`fetchpriority`,`high`,`decoding`,`async`,1,`article-hero`],[1,`article-copy`,`article-heading`],[1,`article-copy`],[1,`article-eyebrow`],[1,`article-lead`],[1,`park-story`,3,`id`],[`role`,`status`,1,`article-copy`,`empty-search`],[1,`article-copy`,`article-footer`],[`name`,`leaf`,`size`,`16`],[`role`,`group`,`aria-label`,`Nature journal controls`,1,`preview-tools`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Back to the start of the article`,1,`preview-icon-button`,3,`click`],[`name`,`arrow-up`,`size`,`16`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`bxSurfaceInteractive`,``,`bxSurfaceFocusEmission`,`var(--bx-primary)`,1,`preview-search`],[`name`,`search`,`size`,`16`],[`type`,`search`,`aria-label`,`Search the national parks article`,`placeholder`,`Find a place`,3,`input`,`value`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,1,`preview-icon-button`,3,`click`,`color`],[`size`,`16`,3,`name`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Article contents`,`placement`,`bottom`,1,`preview-icon-button`,3,`bxDropdown`],[`name`,`ellipsis`,`size`,`20`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`aria-label`,`Places in this article`,1,`preview-navigation`],[`bxTruncate`,``,`role`,`status`,1,`preview-saved-status`],[`type`,`button`],[3,`id`],[1,`article-photo`],[`sizes`,`(max-width: 640px) 100vw, (max-width: 1280px) 85vw, 55vw`,`loading`,`eager`,`decoding`,`async`,3,`src`,`alt`,`width`,`height`],[1,`article-photo`,`article-detail-photo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`type`,`button`,3,`click`],[`name`,`mountain`,`size`,`16`],[`label`,`Back to the top`,`icon`,`arrow-up`,3,`action`],[`icon`,`mountain`,3,`label`],[`icon`,`mountain`,3,`action`,`label`]],template:function(e,n){if(e&1){let l=Er();P(0,`div`,3,0)(2,`article`,4),Oe$1(3,`img`,5),P(4,`header`,6)(5,`h2`),Re$1(6,`National Parks`),L()(),P(7,`div`,7)(8,`p`,8),Re$1(9,`Discover Macedonia`),L(),P(10,`p`,9),Re$1(11,`Explore the natural beauty of Macedonia through the power of photography.`),L()(),xr(12,Ie,21,18,`section`,10,K,!1,Be,7,0,`div`,11),P(15,`footer`,12),Oe$1(16,`bx-icon`,13),P(17,`span`),Re$1(18,`Leave the trails as beautiful as you found them.`),L()()()(),P(19,`div`,14)(20,`button`,15),ye(`click`,function(){$n(l);let u=Ll(1);return Gn(n.scrollTo(u))}),Oe$1(21,`bx-icon`,16),L(),P(22,`div`,17),Oe$1(23,`bx-icon`,18),P(24,`input`,19,1),ye(`input`,function(){$n(l);let u=Ll(25);return Gn(n.search.set(u.value))}),L()(),P(26,`button`,20),ye(`click`,function(){return n.saved.set(!n.saved())}),Oe$1(27,`bx-icon`,21),L(),P(28,`button`,22),Oe$1(29,`bx-icon`,23),L()(),P(30,`nav`,24)(31,`span`,25),Re$1(32),L(),xr(33,Re,4,1,`button`,26,K),L(),J_(35,He,4,0,`ng-template`,null,2,db)}if(e&2){let l=Ll(36);D(12),Dr(n.parks()),D(12),ne(`value`,n.search()),D(2),ne(`color`,n.saved()?`primary`:`grayscale`),B$1(`aria-pressed`,n.saved())(`aria-label`,n.saved()?`Remove article from saved places`:`Save article to your places`),D(),ne(`name`,n.saved()?`bookmark-check`:`bookmark`),D(),ne(`bxDropdown`,l),D(4),Ue(n.saved()?`Saved to your places`:`Explore Macedonia`),D(),Dr(n.parks())}},dependencies:[Rt,Zf,vt,z0,F0,L0,Wr],styles:[`
[_nghost-%COMP%] {
  display: block;
  position: relative;
  flex: 1;
  min-width: 0;
  min-height: 31rem;
  border-radius: 1.875rem;
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
  margin: 1.5rem auto;
  padding-inline: clamp(1.25rem, 4vw, 2.5rem);
}
.article-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
.article-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.article-copy[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-heading);
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin: 0 0 1rem;
}
.article-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: clamp(2rem, 3vw, 3rem);
  margin-bottom: 0;
}
.article-heading[_ngcontent-%COMP%] {
  box-sizing: border-box;
  min-height: 10rem;
  margin-block: 0;
  padding-block: 1.5rem 5rem;
}
.article-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.625rem;
}
.article-copy[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 1.25rem;
}
.article-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  line-height: 1.75;
}
.article-copy[_ngcontent-%COMP%]   .article-eyebrow[_ngcontent-%COMP%] {
  margin-bottom: 0.5rem;
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
  padding-top: 0.5rem;
}
.park-story[_ngcontent-%COMP%]    + .park-story[_ngcontent-%COMP%] {
  margin-top: 2rem;
  border-top: 1px solid var(--%NS%bx-border-default);
}
.article-photo[_ngcontent-%COMP%] {
  margin: 1.5rem clamp(1rem, 3vw, 2rem);
}
.article-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  height: auto;
  max-height: 24rem;
  aspect-ratio: 16/10;
  object-fit: cover;
  border-radius: 0.5rem;
}
.article-detail-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  aspect-ratio: 16/9;
  object-position: center 65%;
}
.article-photo[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.6875rem;
  line-height: 1.5;
}
.article-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-block: 1rem;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
}
.preview-tools[_ngcontent-%COMP%] {
  position: absolute;
  inset: 1rem 1rem auto;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.preview-tools[_ngcontent-%COMP%]   .preview-icon-button[_ngcontent-%COMP%] {
  flex: none;
  width: 2.75rem;
  height: 2.75rem;
  --%NS%bx-glass-radius: 9999px;
}
.preview-search[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex: 1;
  flex-basis: 8rem;
  min-width: 0;
  min-height: 2.75rem;
  gap: 0.5rem;
  padding-inline: 0.75rem;
  --%NS%bx-glass-radius: 9999px;
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
  inset: auto 1rem 1rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding: 0.5rem;
  --%NS%bx-glass-radius: 9999px;
}
.preview-saved-status[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  padding-inline: 0.5rem;
  font-size: 0.75rem;
}
.preview-navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.25rem;
  padding: 0.5rem 0.75rem;
  border: 0;
  border-radius: 9999px;
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
    inset: 0.75rem 0.75rem auto;
    gap: 0.25rem;
  }
  .preview-search[_ngcontent-%COMP%]    > bx-icon[_ngcontent-%COMP%] {
    display: none;
  }
  .preview-navigation[_ngcontent-%COMP%] {
    inset: auto 0.75rem 0.75rem;
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
}`]})};var Q=[{value:`light`,label:`Light`},{value:`dark`,label:`Dark`},{value:`auto`,label:`Auto`}];var Oe=[{value:`auto`,label:`Automatic`},{value:`enhanced`,label:`Enhanced`},{value:`baseline`,label:`Baseline`}];var ke=[{value:`auto`,label:`Automatic`},{value:`off`,label:`Off`},{value:`on`,label:`Opt in on this browser`}];var W=(r,a)=>a.value;var Le=(r,a)=>a.id;function je(r,a){r&1&&Oe$1(0,`app-appearance-mode-preview`,50)(1,`app-appearance-mode-preview`,51)}function Fe(r,a){if(r&1&&Oe$1(0,`app-appearance-mode-preview`,46),r&2){let e=se().$implicit;ne(`mode`,e.value)}}function qe(r,a){if(r&1){let e=Er();P(0,`bx-card`,43),ye(`activated`,function(){let l=$n(e).$implicit,d=se();return Gn(d.setMode(l.value))}),P(1,`span`,44)(2,`span`,45),ue(3,je,2,0)(4,Fe,1,1,`app-appearance-mode-preview`,46),L(),P(5,`span`,47)(6,`span`,48),Re$1(7),Oe$1(8,`bx-icon`,49),L()()()()}if(r&2){let e=a.$implicit,n=se();ne(`clickable`,!0)(`selected`,n.selectedMode()===e.value)(`ariaLabel`,e.label),D(2),X(`is-auto`,e.value===`auto`),D(),de(e.value===`auto`?3:4),D(4),Ue(e.label),D(),ne(`name`,n.selectedMode()===e.value?`circle-check`:`circle`)}}function $e(r,a){if(r&1){let e=Er();P(0,`bx-slide-toggle`,52),vk(),ye(`ngModelChange`,function(l){$n(e);let d=se();return Gn(d.setAutomaticMode(l))}),L()}if(r&2){let e=se();ne(`ngModel`,e.themingService.applicationTheme()===null),Ck()}}function Ge(r,a){if(r&1){let e=Er();P(0,`bx-radio`,53),vk(),ye(`ngModelChange`,function(l){$n(e);let d=se();return Gn(d.updateAppearance({quality:l}))}),L()}if(r&2){let e=a.$implicit,n=se();ne(`label`,e.label)(`value`,e.value)(`disabled`,e.value===`enhanced`&&n.themingService.preferredGlassiness()===`off`)(`ngModel`,n.appearance().quality),Ck()}}function Ke(r,a){if(r&1){let e=Er();P(0,`bx-radio`,54),vk(),ye(`ngModelChange`,function(l){$n(e);let d=se();return Gn(d.updateAppearance({glassiness:l}))}),L()}if(r&2){let e=a.$implicit,n=se();ne(`label`,e.label)(`value`,e.value)(`disabled`,n.appearance().quality===`baseline`)(`ngModel`,n.appearance().glassiness??`auto`),Ck()}}function Qe(r,a){if(r&1){let e=Er();P(0,`button`,55),ye(`click`,function(){let l=$n(e).$implicit,d=se();return Gn(d.themingService.setPalette(l.id))}),P(1,`span`,56),Oe$1(2,`span`)(3,`span`),L(),Re$1(4),L()}if(r&2){let e=a.$implicit,n=se();ne(`color`,n.themingService.palette()===e.id?`accent`:`grayscale`),B$1(`aria-pressed`,n.themingService.palette()===e.id),D(2),Pe$1(`background-color`,e.colors[0]),D(),Pe$1(`background-color`,e.colors[1]),D(),An(``,e.label,` `)}}function We(r,a){if(r&1&&(P(0,`div`,57)(1,`div`)(2,`h3`),Re$1(3,`One configuration. Every component.`),L(),P(4,`p`),Re$1(5,`Surfaces follow the existing semantic theme. Use the controls above, or configure the theming service in your application.`),L()(),P(6,`pre`,58),Oe$1(7,`code`,59),L()(),Oe$1(8,`app-readme`,60)),r&2){let e=se();D(7),ne(`highlight`,e.codeExample)}}var Ae=class r{bxA11yService=p(je$1);windowDimensionsService=p(kp);themingService=p(Ca);appearance=this.themingService.appearance;reducedMotion=this.bxA11yService.isReducedMotion;compactModes=b(()=>this.windowDimensionsService.dimensions().width<=this.windowDimensionsService.breakpoints.sm);modes=b(()=>this.compactModes()?Q.filter(a=>a.value!==`auto`):Q);selectedMode=b(()=>this.compactModes()?this.themingService.activeTheme():this.themingService.applicationTheme()??`auto`);translucencyDescription=b(()=>{let a=this.appearance().translucency;return a<.25?`Lighter tint and blur`:a<.75?`Balanced tint and blur`:`Stronger tint and blur`});qualities=Oe;glassinessModes=ke;codeExample=`const themingService = inject(ThemingService);

// Balanced glass throughout the application, including open overlays.
themingService.setAppearance({ translucency: 0.5 });

// Browser policy for explicitly selected glassy controls.
themingService.setAppearance({ glassiness: 'auto' });

// Opaque surfaces are an accessibility preference.
themingService.setAppearance({ reducedTransparency: true });

// Opt in only the controls that benefit from refraction.
<button bx-button variant="icon" glassiness="auto">\u2026</button>
<section bxSurface bxSurfaceGlassiness="auto">\u2026</section>`;updateAppearance(a){this.themingService.setAppearance(a)}setMode(a){this.compactModes()&&this.themingService.applicationTheme()===null&&a===this.themingService.activeTheme()||this.themingService.setApplicationTheme(a===`auto`?null:a)}setAutomaticMode(a){this.themingService.setApplicationTheme(a?null:this.themingService.activeTheme())}setMotion(a){this.bxA11yService.setReducedMotion(a)}reset(){this.themingService.resetAppearance()}static ɵfac=function(e){return new(e||r)};static ɵcmp=H({type:r,selectors:[[`app-appearance`]],decls:84,vars:17,consts:[[`translucency`,``],[`documentation`,``],[`aria-labelledby`,`appearance-title`,1,`appearance`],[1,`page-heading`],[1,`eyebrow`],[`id`,`appearance-title`],[`role`,`group`,`aria-label`,`Appearance mode`,1,`mode-picker`],[`highlightColor`,`accent`,1,`mode-choice`,3,`clickable`,`selected`,`ariaLabel`],[`label`,`Automatic`,`labelPosition`,`before`,`subscriptSizing`,`dynamic`,1,`mode-auto`,3,`ngModel`],[`aria-labelledby`,`surfaces-title`,1,`settings-section`,`surfaces-section`],[1,`section-heading`],[`id`,`surfaces-title`],[`size`,`full`,1,`surface-layout`],[1,`surface-introduction`],[1,`panel-heading`],[`id`,`surface-appearance-title`],[`bx-button`,``,`type`,`button`,`variant`,`text`,`color`,`grayscale`,`aria-label`,`Reset surface appearance`,3,`click`],[1,`surface-demo-column`],[1,`preview-column`],[`aria-label`,`Translucency`,`aria-describedby`,`translucency-note`,1,`translucency-controls`,3,`bxTooltip`],[1,`translucency-range`],[`name`,`circle-dashed`,`size`,`20`,`ariaLabel`,`Lighter tint`,3,`decorative`],[`id`,`appearance-translucency`,`type`,`range`,`bxSlider`,``,`min`,`0`,`max`,`1`,`step`,`0.01`,`aria-label`,`Translucency`,`aria-describedby`,`translucency-note`,3,`input`,`value`,`disabled`],[`name`,`circle`,`size`,`20`,`ariaLabel`,`Richly tinted`,1,`translucency-tinted-icon`,3,`decorative`],[`id`,`translucency-note`,1,`section-note`],[`title`,`Advanced settings`,1,`advanced-settings`,3,`headingLevel`],[1,`advanced-grid`],[1,`rendering-options`],[1,`quality-picker`],[`name`,`appearance-quality`,`subscriptSizing`,`dynamic`,3,`label`,`value`,`disabled`,`ngModel`],[1,`section-note`],[`name`,`appearance-glassiness`,`subscriptSizing`,`dynamic`,3,`label`,`value`,`disabled`,`ngModel`],[`aria-labelledby`,`theme-title`,1,`settings-section`],[`id`,`theme-title`],[1,`palette-picker`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`color`],[`aria-labelledby`,`accessibility-title`,1,`settings-section`],[`id`,`accessibility-title`],[1,`accessibility-options`],[`label`,`Reduce motion`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Reduce transparency`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`High contrast`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`title`,`Appearance API, performance, and accessibility`,1,`appearance-documentation`,3,`headingLevel`,`contentTemplate`],[`highlightColor`,`accent`,1,`mode-choice`,3,`activated`,`clickable`,`selected`,`ariaLabel`],[1,`mode-content`],[1,`mode-visual`],[3,`mode`],[1,`mode-caption`],[1,`mode-label`],[`size`,`20`,3,`name`],[`mode`,`light`],[`mode`,`dark`],[`label`,`Automatic`,`labelPosition`,`before`,`subscriptSizing`,`dynamic`,1,`mode-auto`,3,`ngModelChange`,`ngModel`],[`name`,`appearance-quality`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`label`,`value`,`disabled`,`ngModel`],[`name`,`appearance-glassiness`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`label`,`value`,`disabled`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`color`],[`aria-hidden`,`true`,1,`palette-swatches`],[1,`implementation`],[`tabindex`,`0`,`aria-label`,`TypeScript appearance configuration`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`path`,`projects/playground/src/app/components/screens/appearance/README.md`]],template:function(e,n){if(e&1){let l=Er();P(0,`section`,2)(1,`header`,3)(2,`p`,4),Re$1(3,`Make Blocks your own`),L(),P(4,`h1`,5),Re$1(5,`Appearance`),L(),P(6,`p`),Re$1(7,`Choose your preferred appearance, shape your surfaces, and find a palette that feels right.`),L()(),P(8,`div`,6),xr(9,qe,9,8,`bx-card`,7,W),ue(11,$e,1,1,`bx-slide-toggle`,8),L(),P(12,`section`,9)(13,`header`,10)(14,`div`)(15,`h2`,11),Re$1(16,`Surfaces`),L()()(),P(17,`bx-container`,12)(18,`div`,13)(19,`div`,14)(20,`h3`,15),Re$1(21,`Surface Appearance`),L(),P(22,`button`,16),ye(`click`,function(){return n.reset()}),Re$1(23,`Reset`),L()()(),P(24,`div`,17)(25,`div`,18),Oe$1(26,`app-appearance-preview`),L(),P(27,`section`,19)(28,`div`,20),Oe$1(29,`bx-icon`,21),P(30,`input`,22,0),ye(`input`,function(){$n(l);let u=Ll(31);return Gn(n.updateAppearance({translucency:+u.value}))}),L(),Oe$1(32,`bx-icon`,23),L()(),P(33,`p`,24),Re$1(34),L()()(),P(35,`bx-collapsible`,25)(36,`div`,26)(37,`div`)(38,`fieldset`,27)(39,`legend`),Re$1(40,`Rendering`),L(),P(41,`div`,28),xr(42,Ge,1,4,`bx-radio`,29,W),L()(),P(44,`p`,30),Re$1(45,` Automatic balances detail and performance. Enhanced adds reflections and bevels to selected surfaces but may reduce performance. Baseline uses blur and tint and turns glassiness off. `),L()(),P(46,`div`)(47,`fieldset`,27)(48,`legend`),Re$1(49,`Glassiness`),L(),P(50,`div`,28),xr(51,Ke,1,4,`bx-radio`,31,W),L()(),P(53,`p`,30),Re$1(54,` Refraction enhances selected controls on supported browsers. Text and icons keep their theme colors. Accessibility preferences take precedence. `),L()()()()(),P(55,`section`,32)(56,`header`,10)(57,`div`)(58,`h2`,33),Re$1(59,`Theme`),L()()(),P(60,`div`,34),xr(61,Qe,5,7,`button`,35,Le),L()(),P(63,`section`,36)(64,`header`,10)(65,`div`)(66,`h2`,37),Re$1(67,`Accessibility`),L()()(),P(68,`div`,38)(69,`div`)(70,`bx-slide-toggle`,39),vk(),ye(`ngModelChange`,function(u){return n.setMotion(u)}),L(),P(71,`p`,30),Re$1(72,`Keep transitions and decorative movement to a minimum.`),L()(),P(73,`div`)(74,`bx-slide-toggle`,40),vk(),ye(`ngModelChange`,function(u){return n.updateAppearance({reducedTransparency:u})}),L(),P(75,`p`,30),Re$1(76,`Use opaque surfaces while preserving your translucency preference.`),L()(),P(77,`div`)(78,`bx-slide-toggle`,41),vk(),ye(`ngModelChange`,function(u){return n.themingService.setHighContrast(u)}),L(),P(79,`p`,30),Re$1(80,`Strengthen the separation between content and its background.`),L()()()(),Oe$1(81,`bx-collapsible`,42),J_(82,We,9,1,`ng-template`,null,1,db),L()}if(e&2){let l=Ll(83);D(9),Dr(n.modes()),D(2),de(n.compactModes()?11:-1),D(16),X(`is-disabled`,n.appearance().reducedTransparency),ne(`bxTooltip`,n.appearance().reducedTransparency?`Turn off Reduce transparency to adjust translucency.`:``),B$1(`tabindex`,n.appearance().reducedTransparency?0:null),D(2),ne(`decorative`,!1),D(),ne(`value`,n.appearance().translucency)(`disabled`,n.appearance().reducedTransparency),B$1(`aria-valuetext`,n.translucencyDescription()),D(2),ne(`decorative`,!1),D(2),An(` `,n.appearance().reducedTransparency?`Reduced transparency keeps surfaces opaque. Turn it off to adjust translucency.`:`Slide from a lighter tint to a richer finish. Glassiness always keeps a readable backing.`,` `),D(),ne(`headingLevel`,3),D(7),Dr(n.qualities),D(9),Dr(n.glassinessModes),D(10),Dr(n.themingService.palettes),D(9),ne(`ngModel`,n.reducedMotion()),Ck(),D(4),ne(`ngModel`,n.appearance().reducedTransparency),Ck(),D(4),ne(`ngModel`,n.themingService.highContrast()),Ck(),D(3),ne(`headingLevel`,2)(`contentTemplate`,l)}},dependencies:[ht,mQ,dQ,bF,xn,fn,he,Zf,Z0,X0,vt,Uc,Gr,w,V,B],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.appearance[_ngcontent-%COMP%] {
  max-inline-size: 80rem;
  margin-inline: auto;
  overflow-wrap: anywhere;
}
.mode-picker[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
.mode-choice[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: 0.75rem;
  --%NS%bx-card-radius: 1rem;
  min-inline-size: 0;
}
.mode-content[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1rem;
  inline-size: 100%;
  min-inline-size: 0;
}
.mode-visual[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  overflow: hidden;
  border-radius: 0.75rem;
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
  gap: 0.5rem;
  padding: 0 0.25rem 0.25rem;
}
.mode-label[_ngcontent-%COMP%], 
.panel-heading[_ngcontent-%COMP%], 
.section-heading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
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
  margin-block-start: 2.5rem;
  padding-block-start: 2rem;
  border-block-start: 1px solid var(--%NS%bx-border-default);
}
.section-heading[_ngcontent-%COMP%] {
  align-items: start;
  margin-block-end: 1.25rem;
}
.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0 0 0.5rem;
  font-size: 1.5rem;
}
.surface-layout[_ngcontent-%COMP%] {
  --%NS%bx-container-padding: 1.25rem;
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 5fr);
  gap: 1.5rem;
  align-items: start;
  padding: 1.25rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 1rem;
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
  margin-block-end: 0.75rem;
}
.panel-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1.125rem;
}
.translucency-controls[_ngcontent-%COMP%] {
  margin-block: 1rem 0.75rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 9999px;
  background: var(--%NS%bx-bg-surface);
}
.translucency-range[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.75rem;
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
  margin-block-start: 1.25rem;
}
.advanced-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}
fieldset[_ngcontent-%COMP%] {
  border: 0;
  padding: 0;
  margin: 0 0 1rem;
  min-inline-size: 0;
}
legend[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  margin-block-end: 0.75rem;
}
.quality-picker[_ngcontent-%COMP%], 
.accessibility-options[_ngcontent-%COMP%] {
  --%NS%bx-field-padding-bottom: 0;
  display: grid;
  gap: 0.75rem;
  font-size: 0.875rem;
}
.palette-picker[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.palette-picker[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  padding-inline: 0.75rem;
}
.palette-choice[_ngcontent-%COMP%] {
  justify-content: start;
  gap: 0.75rem;
  max-inline-size: 100%;
  min-inline-size: 0;
  padding: 1rem;
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
  gap: 1.25rem;
}
.accessibility-options[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  min-inline-size: 0;
  padding: 1rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
}
.accessibility-options[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin-block-start: 0.75rem;
}
.appearance-documentation[_ngcontent-%COMP%] {
  margin-block: 2.5rem 1.5rem;
}
.implementation[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: 1.25rem;
  margin-block-end: 1.5rem;
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
    gap: 0.75rem;
  }
  .mode-auto[_ngcontent-%COMP%] {
    --%NS%bx-toggle-inline-size: 100%;
    --%NS%bx-toggle-justify-content: space-between;
    grid-column: 1/-1;
    margin-block-start: 0.5rem;
  }
  .mode-description[_ngcontent-%COMP%] {
    font-size: 0.8125rem;
  }
  .settings-section[_ngcontent-%COMP%] {
    padding-block-start: 1.5rem;
  }
  .surface-layout[_ngcontent-%COMP%] {
    --%NS%bx-container-padding: 1rem;
    padding: 1rem;
  }
  .translucency-controls[_ngcontent-%COMP%] {
    padding-inline: 1rem;
  }
}`]})};export{Ae as Appearance};