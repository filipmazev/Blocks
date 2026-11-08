import{n as k}from"./chunk-BpRItq3P.js";import{A as ht,E as to,a as Qn,p as ao,q as Z}from"./main-HW2XYL5W.js";import{$ as Is,$i as v,$n as a2,$r as kb,Ai as qR,Ar as gr,Bi as se,Bt as P,Cr as es,D as E,Er as g,F as Fs,Fr as ih,Ft as Oe$1,Gr as je$1,Mr as hS,N as Fe$1,Na as zR,Ni as qte,Oi as q,Pa as zn,Qr as kM,Si as p,Tn as Vte,W as H,Zr as k$1,_a as xe,aa as vn,cr as bn,dn as Tn,et as It,gi as ns,hn as U,ii as lM,jr as hM,ka as z,kr as ge,ma as xM,mr as de,mt as Le$1,nr as ae,oi as li,p as Bt,pa as ws,pi as mr,qr as jn,rt as Jk,t as $,ta as v1,u as At,ua as we,un as Te$1,vr as eM,yi as oe,zi as sM,zn as Yc,zt as Ot}from"./chunk-Dt37D5SH.js";var B=class r{themingService=p(Is);paletteClass=v(()=>[this.themingService.palettes.find(t=>t.id===this.themingService.palette())?.className,this.themingService.highContrast()?`high-contrast`:``].join(` `));mode=g.required();static ɵfac=function(e){return new(e||r)};static ɵcmp=z({type:r,selectors:[[`app-appearance-mode-preview`]],hostAttrs:[`aria-hidden`,`true`,`inert`,``,`data-bx-light-scope`,``],hostVars:3,hostBindings:function(e,n){e&2&&($(`data-theme`,n.mode()),v1(n.paletteClass()))},inputs:{mode:[1,`mode`]},decls:22,vars:5,consts:[[1,`mini-window`],[1,`mini-toolbar`],[`name`,`layers`,`size`,`16`],[1,`mini-toolbar-dot`],[1,`mini-workspace`],[1,`mini-sidebar`],[1,`mini-nav-active`],[`title`,`Workspace`,3,`headingLevel`,`opaque`],[1,`mini-card-row`],[1,`mini-avatar`],[`name`,`check`,`size`,`16`],[`label`,`Project progress`,3,`value`],[1,`mini-card-footer`],[`text`,`Ready`,`size`,`small`,`color`,`accent`,3,`opaque`,`tooltipOnTruncate`]],template:function(e,n){e&1&&(U(0,`div`,0)(1,`div`,1),Fe$1(2,`bx-icon`,2),U(3,`span`),Te$1(4,`Blocks`),H(),Fe$1(5,`span`,3),H(),U(6,`div`,4)(7,`div`,5),Fe$1(8,`span`,6)(9,`span`)(10,`span`),H(),U(11,`bx-card`,7)(12,`div`,8)(13,`span`,9),Fe$1(14,`bx-icon`,10),H(),U(15,`span`),Te$1(16,`Design system`),H()(),Fe$1(17,`bx-progress-bar`,11),U(18,`div`,12)(19,`span`),Te$1(20,`12 components`),H(),Fe$1(21,`bx-tag`,13),H()()()()),e&2&&(k$1(11),oe(`headingLevel`,4)(`opaque`,!0),k$1(6),oe(`value`,68),k$1(4),oe(`opaque`,!0)(`tooltipOnTruncate`,!1))},dependencies:[hM,vn,kM,lM],styles:[`
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
}`]})};function R(r,t,e,n){let c=`assets/images/appearance/${r}`;return{src:`${c}.webp`,srcset:`${c}-640.webp 640w, ${c}.webp ${t}w`,width:t,height:e,alt:n}}var Oe=[{id:`preview-shar-mountain`,title:`Šar Mountain`,shortTitle:`Šar`,subtitle:`High peaks, mountain pastures, and rich forests`,paragraphs:[`Šar Mountain is known for its high peaks, mountain pastures, and rich forests.`,`A variety of vegetation spreads everywhere in the areas of this mountain massif. A large number of these plants are used by the inhabitants of these regions for folk medicine.`],photo:R(`shar-mountain`,1200,730,`Snow-dusted peaks and green slopes reflected in a mountain lake on Šar Mountain`),caption:`The mountain landscapes of Šar Mountain.`,detail:{title:`Bogovinje Lake`,paragraphs:[`One of the mountain lakes that adorns Šar Mountain is Bogovinje Lake, known for its crystal-clear waters and stunning reflections of the surrounding peaks.`,`The lake is a popular destination for hikers and nature enthusiasts, offering a peaceful retreat in the heart of the mountains.`],photo:R(`bogovinje-lake`,1200,679,`Bogovinje Lake beneath snow-streaked mountain slopes`),caption:`The quiet waters of Bogovinje Lake beneath the surrounding peaks.`}},{id:`preview-mavrovo`,title:`Mavrovo National Park`,shortTitle:`Mavrovo`,subtitle:`The Korab massif`,paragraphs:[`Korab is the highest mountain in Macedonia, home to the Golem Korab peak standing at 2,764 meters.`,`The mountain is part of the Mavrovo National Park, known for its diverse landscapes and natural beauty.`],photo:R(`korab`,1200,775,`Rocky peaks and open mountain pastures in the Korab massif`),caption:`The high peaks and open pastures of Korab.`,detail:{title:`A landscape shaped by water`,paragraphs:[`Korab has abundant surface watercourses, with several permanent and glacial-fed rivers and streams.`,`The Macedonian side of Korab is home to eight permanent and many occasional glacial lakes, supporting rich ecosystems.`],photo:R(`korab-valley`,1200,715,`A black-and-white panorama of the Korab ridges with small lakes below`),caption:`A wide view across the ridges and lakes of the Korab massif.`}}];var ze=[`reader`];var K=(r,t)=>t.id;function De(r,t){if(r&1&&(U(0,`p`),Te$1(1),H()),r&2){let e=t.$implicit;k$1(),je$1(e)}}function Ie(r,t){if(r&1&&(U(0,`p`),Te$1(1),H()),r&2){let e=t.$implicit;k$1(),je$1(e)}}function Be(r,t){if(r&1&&(U(0,`section`,10)(1,`div`,7)(2,`p`,8),Te$1(3),H(),U(4,`h3`,27),Te$1(5),H(),jn(6,De,2,1,`p`,null,es),H(),U(8,`figure`,28),Fe$1(9,`img`,29),U(10,`figcaption`),Te$1(11),H()(),U(12,`div`,7)(13,`h4`),Te$1(14),H(),jn(15,Ie,2,1,`p`,null,es),H(),U(17,`figure`,30),Fe$1(18,`img`,29),U(19,`figcaption`),Te$1(20),H()()()),r&2){let e=t.$implicit;oe(`id`,e.id),$(`aria-labelledby`,e.id+`-title`),k$1(3),je$1(e.subtitle),k$1(),oe(`id`,e.id+`-title`),k$1(),je$1(e.title),k$1(),zn(e.paragraphs),k$1(3),oe(`src`,e.photo.src)(`alt`,e.photo.alt)(`width`,e.photo.width)(`height`,e.photo.height),$(`srcset`,e.photo.srcset),k$1(2),je$1(e.caption),k$1(3),je$1(e.detail.title),k$1(),zn(e.detail.paragraphs),k$1(3),oe(`src`,e.detail.photo.src)(`alt`,e.detail.photo.alt)(`width`,e.detail.photo.width)(`height`,e.detail.photo.height),$(`srcset`,e.detail.photo.srcset),k$1(2),je$1(e.detail.caption)}}function Re(r,t){if(r&1){let e=gr();U(0,`div`,11)(1,`h3`),Te$1(2,`No places found`),H(),U(3,`p`),Te$1(4,`Try searching for Šar Mountain, Korab, or lakes.`),H(),U(5,`button`,31),xe(`click`,function(){At(e);let c=P();return Ot(c.search.set(``))}),Te$1(6,`Clear search`),H()()}}function Ve(r,t){if(r&1){let e=gr();U(0,`button`,32),xe(`click`,function(){let c=At(e).$implicit,d=P(),u=ns(1);return Ot(d.scrollTo(u,c.id))}),Fe$1(1,`bx-icon`,33),U(2,`span`),Te$1(3),H()()}if(r&2){let e=t.$implicit;k$1(3),je$1(e.shortTitle)}}function He(r,t){if(r&1){let e=gr();U(0,`bx-menu-item`,36),xe(`action`,function(){let c=At(e).$implicit,d=P(2),u=ns(1);return Ot(d.scrollTo(u,c.id))}),H()}if(r&2){let e=t.$implicit;oe(`label`,e.title)}}function Le(r,t){if(r&1){let e=gr();U(0,`bx-menu`)(1,`bx-menu-item`,34),xe(`action`,function(){At(e);let c=P(),d=ns(1);return Ot(c.scrollTo(d))}),H(),jn(2,He,1,1,`bx-menu-item`,35,K),H()}if(r&2){let e=P();k$1(2),zn(e.parks())}}var V=class r{bxA11yService=p(Oe$1);reader=bn.required(`reader`);search=E(``);saved=E(!1);parks=v(()=>{let t=n=>n.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase(),e=t(this.search().trim());return Oe.filter(n=>t([n.title,n.subtitle,...n.paragraphs,n.detail.title,...n.detail.paragraphs].join(` `)).includes(e))});scrollHintCleanup;constructor(){p(q).onDestroy(()=>this.stopScrollHint()),ge(()=>{this.bxA11yService.isReducedMotion()&&this.stopScrollHint()}),Le$1(()=>{if(this.bxA11yService.isReducedMotion())return;let t=this.reader().nativeElement,e=t.ownerDocument.defaultView;if(!e)return;let n,c,d=new IntersectionObserver(u=>{u.some(A=>A.isIntersecting&&A.intersectionRatio>=.5)&&(d.disconnect(),n=e.setTimeout(()=>{if(t.scrollTop!==0||this.bxA11yService.isReducedMotion())return;let A=Math.min(280,t.scrollHeight-t.clientHeight);if(A<=0)return;let Ee=e.performance.now(),U=Ne=>{let J=Math.min((Ne-Ee)/2800,1);t.scrollTop=A*(1-Math.cos(J*Math.PI*2))/2,J<1?c=e.requestAnimationFrame(U):this.stopScrollHint()};c=e.requestAnimationFrame(U)},900))},{threshold:.5});this.scrollHintCleanup=()=>{d.disconnect(),e.clearTimeout(n),c!==void 0&&e.cancelAnimationFrame(c)},d.observe(t)})}stopScrollHint(){this.scrollHintCleanup?.(),this.scrollHintCleanup=void 0}scrollTo(t,e){this.stopScrollHint();let n=e?t.querySelector(`#${e}`):void 0;if(e&&!n)return;let c=n?n.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop-96:0;t.scrollTo({top:Math.max(0,c),behavior:this.bxA11yService.isReducedMotion()?`auto`:`smooth`})}static ɵfac=function(e){return new(e||r)};static ɵcmp=z({type:r,selectors:[[`app-appearance-preview`]],viewQuery:function(e,n){e&1&&Tn(n.reader,ze,5),e&2&&It()},hostAttrs:[`data-bx-light-scope`,``],hostBindings:function(e,n){e&1&&xe(`pointerdown`,function(){return n.stopScrollHint()})(`wheel`,function(){return n.stopScrollHint()})(`keydown`,function(){return n.stopScrollHint()})(`focusin`,function(){return n.stopScrollHint()})},decls:37,vars:8,consts:[[`reader`,``],[`query`,``],[`contents`,``],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Scrollable national parks article`,1,`preview-reader`],[1,`park-article`],[`src`,`assets/images/appearance/mountains-2400.webp`,`srcset`,`
                assets/images/appearance/mountains-640.webp   640w,
                assets/images/appearance/mountains.webp      1200w,
                assets/images/appearance/mountains-2400.webp 2400w
            `,`sizes`,`(max-width: 640px) 150vw, (max-width: 1280px) 90vw, 55vw`,`alt`,`A snow-covered mountain landscape`,`width`,`2400`,`height`,`1643`,`loading`,`eager`,`fetchpriority`,`high`,`decoding`,`async`,1,`article-hero`],[1,`article-copy`,`article-heading`],[1,`article-copy`],[1,`article-eyebrow`],[1,`article-lead`],[1,`park-story`,3,`id`],[`role`,`status`,1,`article-copy`,`empty-search`],[1,`article-copy`,`article-footer`],[`name`,`leaf`,`size`,`16`],[`role`,`group`,`aria-label`,`Nature journal controls`,1,`preview-tools`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Back to the start of the article`,1,`preview-icon-button`,3,`click`],[`name`,`arrow-up`,`size`,`16`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`bxSurfaceInteractive`,``,`bxSurfaceFocusEmission`,`var(--bx-primary)`,1,`preview-search`],[`name`,`search`,`size`,`16`],[`type`,`search`,`aria-label`,`Search the national parks article`,`placeholder`,`Find a place`,3,`input`,`value`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,1,`preview-icon-button`,3,`click`,`color`],[`size`,`16`,3,`name`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Article contents`,`placement`,`bottom`,1,`preview-icon-button`,3,`bxDropdown`],[`name`,`ellipsis`,`size`,`20`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`aria-label`,`Places in this article`,1,`preview-navigation`],[`bxTruncate`,``,`role`,`status`,1,`preview-saved-status`],[`type`,`button`],[3,`id`],[1,`article-photo`],[`sizes`,`(max-width: 640px) 100vw, (max-width: 1280px) 85vw, 55vw`,`loading`,`eager`,`decoding`,`async`,3,`src`,`alt`,`width`,`height`],[1,`article-photo`,`article-detail-photo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`type`,`button`,3,`click`],[`name`,`mountain`,`size`,`16`],[`label`,`Back to the top`,`icon`,`arrow-up`,3,`action`],[`icon`,`mountain`,3,`label`],[`icon`,`mountain`,3,`action`,`label`]],template:function(e,n){if(e&1){let c=gr();U(0,`div`,3,0)(2,`article`,4),Fe$1(3,`img`,5),U(4,`header`,6)(5,`h2`),Te$1(6,`National Parks`),H()(),U(7,`div`,7)(8,`p`,8),Te$1(9,`Discover Macedonia`),H(),U(10,`p`,9),Te$1(11,`Explore the natural beauty of Macedonia through the power of photography.`),H()(),jn(12,Be,21,18,`section`,10,K,!1,Re,7,0,`div`,11),U(15,`footer`,12),Fe$1(16,`bx-icon`,13),U(17,`span`),Te$1(18,`Leave the trails as beautiful as you found them.`),H()()()(),U(19,`div`,14)(20,`button`,15),xe(`click`,function(){At(c);let u=ns(1);return Ot(n.scrollTo(u))}),Fe$1(21,`bx-icon`,16),H(),U(22,`div`,17),Fe$1(23,`bx-icon`,18),U(24,`input`,19,1),xe(`input`,function(){At(c);let u=ns(25);return Ot(n.search.set(u.value))}),H()(),U(26,`button`,20),xe(`click`,function(){return n.saved.set(!n.saved())}),Fe$1(27,`bx-icon`,21),H(),U(28,`button`,22),Fe$1(29,`bx-icon`,23),H()(),U(30,`nav`,24)(31,`span`,25),Te$1(32),H(),jn(33,Ve,4,1,`button`,26,K),H(),hS(35,Le,4,0,`ng-template`,null,2,kb)}if(e&2){let c=ns(36);k$1(12),zn(n.parks()),k$1(12),oe(`value`,n.search()),k$1(2),oe(`color`,n.saved()?`primary`:`grayscale`),$(`aria-pressed`,n.saved())(`aria-label`,n.saved()?`Remove article from saved places`:`Save article to your places`),k$1(),oe(`name`,n.saved()?`bookmark-check`:`bookmark`),k$1(),oe(`bxDropdown`,c),k$1(4),je$1(n.saved()?`Saved to your places`:`Explore Macedonia`),k$1(),zn(n.parks())}},dependencies:[Bt,Z,vn,sM,eM,Jk,li],styles:[`
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
}`]})};var Q=[{value:`light`,label:`Light`},{value:`dark`,label:`Dark`},{value:`auto`,label:`Auto`}];var ke=[{value:`auto`,label:`Automatic`},{value:`enhanced`,label:`Enhanced`},{value:`baseline`,label:`Baseline`}];var Ae=[{value:`auto`,label:`Automatic`},{value:`off`,label:`Off`},{value:`on`,label:`Opt in on this browser`}];var W=(r,t)=>t.value;var je=(r,t)=>t.id;function Fe(r,t){r&1&&Fe$1(0,`app-appearance-mode-preview`,47)(1,`app-appearance-mode-preview`,48)}function qe(r,t){if(r&1&&Fe$1(0,`app-appearance-mode-preview`,43),r&2){let e=P().$implicit;oe(`mode`,e.value)}}function $e(r,t){if(r&1){let e=gr();U(0,`bx-card`,40),xe(`activated`,function(){let c=At(e).$implicit,d=P();return Ot(d.setMode(c.value))}),U(1,`span`,41)(2,`span`,42),ae(3,Fe,2,0)(4,qe,1,1,`app-appearance-mode-preview`,43),H(),U(5,`span`,44)(6,`span`,45),Te$1(7),Fe$1(8,`bx-icon`,46),H()()()()}if(r&2){let e=t.$implicit,n=P();oe(`clickable`,!0)(`selected`,n.selectedMode()===e.value)(`ariaLabel`,e.label),k$1(2),de(`is-auto`,e.value===`auto`),k$1(),se(e.value===`auto`?3:4),k$1(4),je$1(e.label),k$1(),oe(`name`,n.selectedMode()===e.value?`circle-check`:`circle`)}}function Ge(r,t){if(r&1){let e=gr();U(0,`bx-slide-toggle`,49),zR(),xe(`ngModelChange`,function(c){At(e);let d=P();return Ot(d.setAutomaticMode(c))}),H()}if(r&2){let e=P();oe(`ngModel`,e.themingService.applicationTheme()===null),qR()}}function Ke(r,t){if(r&1){let e=gr();U(0,`bx-radio`,50),zR(),xe(`ngModelChange`,function(c){At(e);let d=P();return Ot(d.updateAppearance({quality:c}))}),H()}if(r&2){let e=t.$implicit,n=P();oe(`label`,e.label)(`value`,e.value)(`disabled`,e.value===`enhanced`&&n.themingService.preferredGlassiness()===`off`)(`ngModel`,n.appearance().quality),qR()}}function Qe(r,t){if(r&1){let e=gr();U(0,`bx-radio`,51),zR(),xe(`ngModelChange`,function(c){At(e);let d=P();return Ot(d.updateAppearance({glassiness:c}))}),H()}if(r&2){let e=t.$implicit,n=P();oe(`label`,e.label)(`value`,e.value)(`disabled`,n.appearance().quality===`baseline`)(`ngModel`,n.appearance().glassiness??`auto`),qR()}}function We(r,t){if(r&1){let e=gr();U(0,`button`,52),xe(`click`,function(){let c=At(e).$implicit,d=P();return Ot(d.themingService.setPalette(c.id))}),U(1,`span`,53),Fe$1(2,`span`)(3,`span`),H(),Te$1(4),H()}if(r&2){let e=t.$implicit,n=P();oe(`color`,n.themingService.palette()===e.id?`accent`:`grayscale`),$(`aria-pressed`,n.themingService.palette()===e.id),k$1(2),we(`background-color`,e.colors[0]),k$1(),we(`background-color`,e.colors[1]),k$1(),mr(``,e.label,` `)}}function Ue(r,t){if(r&1&&(U(0,`div`,54)(1,`div`)(2,`h3`),Te$1(3,`One configuration. Every component.`),H(),U(4,`p`),Te$1(5,`Surfaces follow the existing semantic theme. Use the controls above, or configure the theming service in your application.`),H()(),U(6,`pre`,55),Fe$1(7,`code`,56),H()(),Fe$1(8,`app-readme`,57)),r&2){let e=P();k$1(7),oe(`highlight`,e.codeExample)}}var Te=class r{bxA11yService=p(Oe$1);windowDimensionsService=p(ws);themingService=p(Is);appearance=this.themingService.appearance;reducedMotion=this.bxA11yService.isReducedMotion;compactModes=v(()=>this.windowDimensionsService.dimensions().width<=this.windowDimensionsService.breakpoints.sm);modes=v(()=>this.compactModes()?Q.filter(t=>t.value!==`auto`):Q);selectedMode=v(()=>this.compactModes()?this.themingService.activeTheme():this.themingService.applicationTheme()??`auto`);translucencyDescription=v(()=>{let t=this.appearance().translucency;return t<.25?`Lighter tint and blur`:t<.75?`Balanced tint and blur`:`Stronger tint and blur`});qualities=ke;glassinessModes=Ae;codeExample=`const themingService = inject(ThemingService);

// Balanced glass throughout the application, including open overlays.
themingService.setAppearance({ translucency: 0.5 });

// Browser policy for explicitly selected glassy controls.
themingService.setAppearance({ glassiness: 'auto' });

// Opaque surfaces are an accessibility preference.
themingService.setAppearance({ reducedTransparency: true });

// Opt in only the controls that benefit from refraction.
<button bx-button variant="icon" glassiness="auto">\u2026</button>
<section bxSurface bxSurfaceGlassiness="auto">\u2026</section>`;updateAppearance(t){this.themingService.setAppearance(t)}setMode(t){this.compactModes()&&this.themingService.applicationTheme()===null&&t===this.themingService.activeTheme()||this.themingService.setApplicationTheme(t===`auto`?null:t)}setAutomaticMode(t){this.themingService.setApplicationTheme(t?null:this.themingService.activeTheme())}setMotion(t){this.bxA11yService.setReducedMotion(t)}reset(){this.themingService.resetAppearance()}static ɵfac=function(e){return new(e||r)};static ɵcmp=z({type:r,selectors:[[`app-appearance`]],decls:77,vars:17,consts:[[`translucency`,``],[`documentation`,``],[`pageDescription`,`Configure the shared theme, palette, surfaces, and effects used throughout the playground.`],[`role`,`group`,`aria-label`,`Appearance mode`,1,`mode-picker`],[`highlightColor`,`accent`,1,`mode-choice`,3,`clickable`,`selected`,`ariaLabel`],[`label`,`Automatic`,`labelPosition`,`before`,`subscriptSizing`,`dynamic`,1,`mode-auto`,3,`ngModel`],[`aria-labelledby`,`surfaces-title`,1,`settings-section`,`surfaces-section`],[1,`section-heading`],[`id`,`surfaces-title`],[`size`,`full`,1,`surface-layout`],[1,`surface-introduction`],[1,`panel-heading`],[`id`,`surface-appearance-title`],[`bx-button`,``,`type`,`button`,`variant`,`text`,`color`,`grayscale`,`aria-label`,`Reset surface appearance`,3,`click`],[1,`surface-demo-column`],[1,`preview-column`],[`aria-label`,`Translucency`,`aria-describedby`,`translucency-note`,1,`translucency-controls`,3,`bxTooltip`],[1,`translucency-range`],[`name`,`circle-dashed`,`size`,`20`,`ariaLabel`,`Lighter tint`,3,`decorative`],[`id`,`appearance-translucency`,`type`,`range`,`bxSlider`,``,`min`,`0`,`max`,`1`,`step`,`0.01`,`aria-label`,`Translucency`,`aria-describedby`,`translucency-note`,3,`input`,`value`,`disabled`],[`name`,`circle`,`size`,`20`,`ariaLabel`,`Richly tinted`,1,`translucency-tinted-icon`,3,`decorative`],[`id`,`translucency-note`,1,`section-note`],[`title`,`Advanced settings`,1,`advanced-settings`,3,`headingLevel`],[1,`advanced-grid`],[1,`rendering-options`],[1,`quality-picker`],[`name`,`appearance-quality`,`subscriptSizing`,`dynamic`,3,`label`,`value`,`disabled`,`ngModel`],[1,`section-note`],[`name`,`appearance-glassiness`,`subscriptSizing`,`dynamic`,3,`label`,`value`,`disabled`,`ngModel`],[`aria-labelledby`,`theme-title`,1,`settings-section`],[`id`,`theme-title`],[1,`palette-picker`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`color`],[`aria-labelledby`,`accessibility-title`,1,`settings-section`],[`id`,`accessibility-title`],[1,`accessibility-options`],[`label`,`Reduce motion`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Reduce transparency`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`High contrast`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`title`,`Appearance API, performance, and accessibility`,1,`appearance-documentation`,3,`headingLevel`,`contentTemplate`],[`highlightColor`,`accent`,1,`mode-choice`,3,`activated`,`clickable`,`selected`,`ariaLabel`],[1,`mode-content`],[1,`mode-visual`],[3,`mode`],[1,`mode-caption`],[1,`mode-label`],[`size`,`20`,3,`name`],[`mode`,`light`],[`mode`,`dark`],[`label`,`Automatic`,`labelPosition`,`before`,`subscriptSizing`,`dynamic`,1,`mode-auto`,3,`ngModelChange`,`ngModel`],[`name`,`appearance-quality`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`label`,`value`,`disabled`,`ngModel`],[`name`,`appearance-glassiness`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`label`,`value`,`disabled`,`ngModel`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`color`],[`aria-hidden`,`true`,1,`palette-swatches`],[1,`implementation`],[`tabindex`,`0`,`aria-label`,`TypeScript appearance configuration`,1,`playground-code-block`],[`language`,`typescript`,3,`highlight`],[`path`,`projects/playground/src/app/components/screens/appearance/README.md`]],template:function(e,n){if(e&1){let c=gr();U(0,`bx-page-container`,2)(1,`div`,3),jn(2,$e,9,8,`bx-card`,4,W),ae(4,Ge,1,1,`bx-slide-toggle`,5),H(),U(5,`section`,6)(6,`header`,7)(7,`div`)(8,`h2`,8),Te$1(9,`Surfaces`),H()()(),U(10,`bx-container`,9)(11,`div`,10)(12,`div`,11)(13,`h3`,12),Te$1(14,`Surface Appearance`),H(),U(15,`button`,13),xe(`click`,function(){return n.reset()}),Te$1(16,`Reset`),H()()(),U(17,`div`,14)(18,`div`,15),Fe$1(19,`app-appearance-preview`),H(),U(20,`section`,16)(21,`div`,17),Fe$1(22,`bx-icon`,18),U(23,`input`,19,0),xe(`input`,function(){At(c);let u=ns(24);return Ot(n.updateAppearance({translucency:+u.value}))}),H(),Fe$1(25,`bx-icon`,20),H()(),U(26,`p`,21),Te$1(27),H()()(),U(28,`bx-collapsible`,22)(29,`div`,23)(30,`div`)(31,`fieldset`,24)(32,`legend`),Te$1(33,`Rendering`),H(),U(34,`div`,25),jn(35,Ke,1,4,`bx-radio`,26,W),H()(),U(37,`p`,27),Te$1(38,` Automatic balances detail and performance. Enhanced adds reflections and bevels to selected surfaces but may reduce performance. Baseline uses blur and tint and turns glassiness off. `),H()(),U(39,`div`)(40,`fieldset`,24)(41,`legend`),Te$1(42,`Glassiness`),H(),U(43,`div`,25),jn(44,Qe,1,4,`bx-radio`,28,W),H()(),U(46,`p`,27),Te$1(47,` Refraction enhances selected controls on supported browsers. Text and icons keep their theme colors. Accessibility preferences take precedence. `),H()()()()(),U(48,`section`,29)(49,`header`,7)(50,`div`)(51,`h2`,30),Te$1(52,`Theme`),H()()(),U(53,`div`,31),jn(54,We,5,7,`button`,32,je),H()(),U(56,`section`,33)(57,`header`,7)(58,`div`)(59,`h2`,34),Te$1(60,`Accessibility`),H()()(),U(61,`div`,35)(62,`div`)(63,`bx-slide-toggle`,36),zR(),xe(`ngModelChange`,function(u){return n.setMotion(u)}),H(),U(64,`p`,27),Te$1(65,`Keep transitions and decorative movement to a minimum.`),H()(),U(66,`div`)(67,`bx-slide-toggle`,37),zR(),xe(`ngModelChange`,function(u){return n.updateAppearance({reducedTransparency:u})}),H(),U(68,`p`,27),Te$1(69,`Use opaque surfaces while preserving your translucency preference.`),H()(),U(70,`div`)(71,`bx-slide-toggle`,38),zR(),xe(`ngModelChange`,function(u){return n.themingService.setHighContrast(u)}),H(),U(72,`p`,27),Te$1(73,`Strengthen the separation between content and its background.`),H()()()(),Fe$1(74,`bx-collapsible`,39),hS(75,Ue,9,1,`ng-template`,null,1,kb),H()}if(e&2){let c=ns(76);k$1(2),zn(n.modes()),k$1(2),se(n.compactModes()?4:-1),k$1(16),de(`is-disabled`,n.appearance().reducedTransparency),oe(`bxTooltip`,n.appearance().reducedTransparency?`Turn off Reduce transparency to adjust translucency.`:``),$(`tabindex`,n.appearance().reducedTransparency?0:null),k$1(2),oe(`decorative`,!1),k$1(),oe(`value`,n.appearance().translucency)(`disabled`,n.appearance().reducedTransparency),$(`aria-valuetext`,n.translucencyDescription()),k$1(2),oe(`decorative`,!1),k$1(2),mr(` `,n.appearance().reducedTransparency?`Reduced transparency keeps surfaces opaque. Turn it off to adjust translucency.`:`Slide from a lighter tint to a richer finish. Glassiness always keeps a readable backing.`,` `),k$1(),oe(`headingLevel`,3),k$1(7),zn(n.qualities),k$1(9),zn(n.glassinessModes),k$1(10),zn(n.themingService.palettes),k$1(9),oe(`ngModel`,n.reducedMotion()),qR(),k$1(4),oe(`ngModel`,n.appearance().reducedTransparency),qR(),k$1(4),oe(`ngModel`,n.themingService.highContrast()),qR(),k$1(3),oe(`headingLevel`,2)(`contentTemplate`,c)}},dependencies:[xM,ht,qte,Vte,a2,to,ao,Qn,Z,hM,ih,vn,Yc,Fs,k,V,B],styles:[`
[_nghost-%COMP%] {
  display: block;
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
}`]})};export{Te as Appearance};