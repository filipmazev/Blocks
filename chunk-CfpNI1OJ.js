import{At as Yd,C as Bn,Cn as pe,Ct as VT,Dn as qo,E as Ct,F as Ei,H as He,Hn as x,K as Jt,Kt as eS,Mn as tS,N as EO,On as re,P as Ea,Qt as gm,Tt as Vn,Ut as ce$1,Vn as wu,Vt as c6,W as Ie,Wn as xe$1,Z as Ke,_t as Te,an as hu,c as K,cn as it,et as Le,gn as kr,gt as S,hn as kn,j as Di,l as Z,m as $r,mn as kS,n as fe$1,nn as h6,ot as Ow,p as $o,s as J,tn as h,un as jT,ut as Q0,wt as Ve,xn as ne,y as Ar,yt as Tr,zn as we$1}from"./main-6SFMKCN2.js";import{n as T}from"./chunk-B1-mucoa.js";function z(l,i,e,n){let s=`assets/images/appearance/${l}`;return{src:`${s}.webp`,srcset:`${s}-640.webp 640w, ${s}.webp ${i}w`,width:i,height:e,alt:n}}var se=[{id:`preview-shar-mountain`,title:`Šar Mountain`,shortTitle:`Šar`,subtitle:`High peaks, mountain pastures, and rich forests`,paragraphs:[`Šar Mountain is known for its high peaks, mountain pastures, and rich forests.`,`A variety of vegetation spreads everywhere in the areas of this mountain massif. A large number of these plants are used by the inhabitants of these regions for folk medicine.`],photo:z(`shar-mountain`,1200,730,`Snow-dusted peaks and green slopes reflected in a mountain lake on Šar Mountain`),caption:`The mountain landscapes of Šar Mountain.`,detail:{title:`Bogovinje Lake`,paragraphs:[`One of the mountain lakes that adorns Šar Mountain is Bogovinje Lake, known for its crystal-clear waters and stunning reflections of the surrounding peaks.`,`The lake is a popular destination for hikers and nature enthusiasts, offering a peaceful retreat in the heart of the mountains.`],photo:z(`bogovinje-lake`,1200,679,`Bogovinje Lake beneath snow-streaked mountain slopes`),caption:`The quiet waters of Bogovinje Lake beneath the surrounding peaks.`}},{id:`preview-mavrovo`,title:`Mavrovo National Park`,shortTitle:`Mavrovo`,subtitle:`The Korab massif`,paragraphs:[`Korab is the highest mountain in Macedonia, home to the Golem Korab peak standing at 2,764 meters.`,`The mountain is part of the Mavrovo National Park, known for its diverse landscapes and natural beauty.`],photo:z(`korab`,1200,775,`Rocky peaks and open mountain pastures in the Korab massif`),caption:`The high peaks and open pastures of Korab.`,detail:{title:`A landscape shaped by water`,paragraphs:[`Korab has abundant surface watercourses, with several permanent and glacial-fed rivers and streams.`,`The Macedonian side of Korab is home to eight permanent and many occasional glacial lakes, supporting rich ecosystems.`],photo:z(`korab-valley`,1200,715,`A black-and-white panorama of the Korab ridges with small lakes below`),caption:`A wide view across the ridges and lakes of the Korab massif.`}}];var ue=[`reader`];var V=(l,i)=>i.id;function he(l,i){if(l&1&&(ce$1(0,`p`),Jt(1),pe()),l&2){let e=i.$implicit;re(),Ar(e)}}function be(l,i){if(l&1&&(ce$1(0,`p`),Jt(1),pe()),l&2){let e=i.$implicit;re(),Ar(e)}}function ye(l,i){if(l&1&&(ce$1(0,`section`,10)(1,`div`,7)(2,`p`,8),Jt(3),pe(),ce$1(4,`h3`,27),Jt(5),pe(),$o(6,he,2,1,`p`,null,hu),pe(),ce$1(8,`figure`,28),it(9,`img`,29),ce$1(10,`figcaption`),Jt(11),pe()(),ce$1(12,`div`,7)(13,`h4`),Jt(14),pe(),$o(15,be,2,1,`p`,null,hu),pe(),ce$1(17,`figure`,30),it(18,`img`,29),ce$1(19,`figcaption`),Jt(20),pe()()()),l&2){let e=i.$implicit;Ke(`id`,e.id),Ve(`aria-labelledby`,e.id+`-title`),re(3),Ar(e.subtitle),re(),Ke(`id`,e.id+`-title`),re(),Ar(e.title),re(),qo(e.paragraphs),re(3),Ke(`src`,e.photo.src)(`alt`,e.photo.alt)(`width`,e.photo.width)(`height`,e.photo.height),Ve(`srcset`,e.photo.srcset),re(2),Ar(e.caption),re(3),Ar(e.detail.title),re(),qo(e.detail.paragraphs),re(3),Ke(`src`,e.detail.photo.src)(`alt`,e.detail.photo.alt)(`width`,e.detail.photo.width)(`height`,e.detail.photo.height),Ve(`srcset`,e.detail.photo.srcset),re(2),Ar(e.detail.caption)}}function _e(l,i){if(l&1){let e=Ea();ce$1(0,`div`,11)(1,`h3`),Jt(2,`No places found`),pe(),ce$1(3,`p`),Jt(4,`Try searching for Šar Mountain, Korab, or lakes.`),pe(),ce$1(5,`button`,31),He(`click`,function(){Di(e);let s=Ie();return Ei(s.search.set(``))}),Jt(6,`Clear search`),pe()()}}function ve(l,i){if(l&1){let e=Ea();ce$1(0,`button`,32),He(`click`,function(){let s=Di(e).$implicit,c=Ie(),g=Q0(1);return Ei(c.scrollTo(g,s.id))}),it(1,`bx-icon`,33),ce$1(2,`span`),Jt(3),pe()()}if(l&2){let e=i.$implicit;re(3),Ar(e.shortTitle)}}function fe(l,i){if(l&1){let e=Ea();ce$1(0,`bx-menu-item`,36),He(`action`,function(){let s=Di(e).$implicit,c=Ie(2),g=Q0(1);return Ei(c.scrollTo(g,s.id))}),pe()}if(l&2){let e=i.$implicit;Ke(`label`,e.title)}}function xe(l,i){if(l&1){let e=Ea();ce$1(0,`bx-menu`)(1,`bx-menu-item`,34),He(`action`,function(){Di(e);let s=Ie(),c=Q0(1);return Ei(s.scrollTo(c))}),pe(),$o(2,fe,1,1,`bx-menu-item`,35,V),pe()}if(l&2){let e=Ie();re(2),qo(e.parks())}}var R=class l{a11y=h(Te);reader=wu.required(`reader`);search=S(``);saved=S(!1);parks=x(()=>{let i=n=>n.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase(),e=i(this.search().trim());return se.filter(n=>i([n.title,n.subtitle,...n.paragraphs,n.detail.title,...n.detail.paragraphs].join(` `)).includes(e))});scrollHintCleanup;constructor(){h(ne).onDestroy(()=>this.stopScrollHint()),Le(()=>{this.a11y.isReducedMotion()&&this.stopScrollHint()}),Ct(()=>{if(this.a11y.isReducedMotion())return;let i=this.reader().nativeElement,e=i.ownerDocument.defaultView;if(!e)return;let n,s,c=new IntersectionObserver(g=>{g.some(M=>M.isIntersecting&&M.intersectionRatio>=.5)&&(c.disconnect(),n=e.setTimeout(()=>{if(i.scrollTop!==0||this.a11y.isReducedMotion())return;let M=Math.min(280,i.scrollHeight-i.clientHeight);if(M<=0)return;let pe=e.performance.now(),I=de=>{let F=Math.min((de-pe)/2800,1);i.scrollTop=M*(1-Math.cos(F*Math.PI*2))/2,F<1?s=e.requestAnimationFrame(I):this.stopScrollHint()};s=e.requestAnimationFrame(I)},900))},{threshold:.5});this.scrollHintCleanup=()=>{c.disconnect(),e.clearTimeout(n),s!==void 0&&e.cancelAnimationFrame(s)},c.observe(i)})}stopScrollHint(){this.scrollHintCleanup?.(),this.scrollHintCleanup=void 0}scrollTo(i,e){this.stopScrollHint();let n=e?i.querySelector(`#${e}`):void 0;if(e&&!n)return;let s=n?n.getBoundingClientRect().top-i.getBoundingClientRect().top+i.scrollTop-96:0;i.scrollTo({top:Math.max(0,s),behavior:this.a11y.isReducedMotion()?`auto`:`smooth`})}static ɵfac=function(e){return new(e||l)};static ɵcmp=we$1({type:l,selectors:[[`app-appearance-preview`]],viewQuery:function(e,n){e&1&&Tr(n.reader,ue,5),e&2&&kn()},hostAttrs:[`data-bx-light-scope`,``],hostBindings:function(e,n){e&1&&He(`pointerdown`,function(){return n.stopScrollHint()})(`wheel`,function(){return n.stopScrollHint()})(`keydown`,function(){return n.stopScrollHint()})(`focusin`,function(){return n.stopScrollHint()})},decls:37,vars:8,consts:[[`reader`,``],[`query`,``],[`contents`,``],[`tabindex`,`0`,`role`,`region`,`aria-label`,`Scrollable national parks article`,1,`preview-reader`],[1,`park-article`],[`src`,`assets/images/appearance/mountains-2400.webp`,`srcset`,`assets/images/appearance/mountains-640.webp 640w, assets/images/appearance/mountains.webp 1200w, assets/images/appearance/mountains-2400.webp 2400w`,`sizes`,`(max-width: 640px) 150vw, (max-width: 1280px) 90vw, 55vw`,`alt`,`A snow-covered mountain landscape`,`width`,`2400`,`height`,`1643`,`loading`,`eager`,`fetchpriority`,`high`,`decoding`,`async`,1,`article-hero`],[1,`article-copy`,`article-heading`],[1,`article-copy`],[1,`article-eyebrow`],[1,`article-lead`],[1,`park-story`,3,`id`],[`role`,`status`,1,`article-copy`,`empty-search`],[1,`article-copy`,`article-footer`],[`name`,`leaf`,`size`,`16`],[`role`,`group`,`aria-label`,`Nature journal controls`,1,`preview-tools`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Back to the start of the article`,1,`preview-icon-button`,3,`click`],[`name`,`arrow-up`,`size`,`16`],[`bxSurface`,``,`bxSurfaceInteractive`,``,`bxSurfaceFocusEmission`,`var(--bx-primary)`,1,`preview-search`],[`name`,`search`,`size`,`16`],[`type`,`search`,`aria-label`,`Search the national parks article`,`placeholder`,`Find a place`,3,`input`,`value`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,1,`preview-icon-button`,3,`click`,`color`],[`size`,`16`,3,`name`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Article contents`,`placement`,`bottom`,1,`preview-icon-button`,3,`bxDropdown`],[`name`,`ellipsis`,`size`,`20`],[`bxSurface`,``,`aria-label`,`Places in this article`,1,`preview-navigation`],[`role`,`status`,1,`preview-saved-status`],[`type`,`button`],[3,`id`],[1,`article-photo`],[`sizes`,`(max-width: 640px) 100vw, (max-width: 1280px) 85vw, 55vw`,`loading`,`eager`,`decoding`,`async`,3,`src`,`alt`,`width`,`height`],[1,`article-photo`,`article-detail-photo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`type`,`button`,3,`click`],[`name`,`mountain`,`size`,`16`],[`label`,`Back to the top`,`icon`,`arrow-up`,3,`action`],[`icon`,`mountain`,3,`label`],[`icon`,`mountain`,3,`action`,`label`]],template:function(e,n){if(e&1){let s=Ea();ce$1(0,`div`,3,0)(2,`article`,4),it(3,`img`,5),ce$1(4,`header`,6)(5,`h2`),Jt(6,`National Parks`),pe()(),ce$1(7,`div`,7)(8,`p`,8),Jt(9,`Discover Macedonia`),pe(),ce$1(10,`p`,9),Jt(11,`Explore the natural beauty of Macedonia through the power of photography.`),pe()(),$o(12,ye,21,18,`section`,10,V,!1,_e,7,0,`div`,11),ce$1(15,`footer`,12),it(16,`bx-icon`,13),ce$1(17,`span`),Jt(18,`Leave the trails as beautiful as you found them.`),pe()()()(),ce$1(19,`div`,14)(20,`button`,15),He(`click`,function(){Di(s);let g=Q0(1);return Ei(n.scrollTo(g))}),it(21,`bx-icon`,16),pe(),ce$1(22,`div`,17),it(23,`bx-icon`,18),ce$1(24,`input`,19,1),He(`input`,function(){Di(s);let g=Q0(25);return Ei(n.search.set(g.value))}),pe()(),ce$1(26,`button`,20),He(`click`,function(){return n.saved.set(!n.saved())}),it(27,`bx-icon`,21),pe(),ce$1(28,`button`,22),it(29,`bx-icon`,23),pe()(),ce$1(30,`nav`,24)(31,`span`,25),Jt(32),pe(),$o(33,ve,4,1,`button`,26,V),pe(),Ow(35,xe,4,0,`ng-template`,null,2,gm)}if(e&2){let s=Q0(36);re(12),qo(n.parks()),re(12),Ke(`value`,n.search()),re(2),Ke(`color`,n.saved()?`primary`:`grayscale`),Ve(`aria-pressed`,n.saved())(`aria-label`,n.saved()?`Remove article from saved places`:`Save article to your places`),re(),Ke(`name`,n.saved()?`bookmark-check`:`bookmark`),re(),Ke(`bxDropdown`,s),re(4),Ar(n.saved()?`Saved to your places`:`Explore Macedonia`),re(),qo(n.parks())}},dependencies:[Bn,fe$1,Vn,kS,eS,tS],styles:[`
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
  opacity: 0.75;
}
.preview-navigation[_ngcontent-%COMP%] {
  position: absolute;
  inset: auto 1rem 1rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  --%NS%bx-glass-radius: 9999px;
}
.preview-saved-status[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  padding-inline: 0.5rem;
  font-size: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
}`]})};var we=(l,i)=>i.id;var Ce=(l,i)=>i.value;function Me(l,i){if(l&1){let e=Ea();ce$1(0,`button`,18),He(`click`,function(){let s=Di(e).$implicit,c=Ie();return Ei(c.theme.setPalette(s.id))}),ce$1(1,`span`,39),it(2,`span`)(3,`span`),pe(),Jt(4),pe()}if(l&2){let e=i.$implicit,n=Ie();Ke(`color`,n.theme.palette()===e.id?`accent`:`grayscale`),Ve(`aria-pressed`,n.theme.palette()===e.id),re(2),kr(`background-color`,e.colors[0]),re(),kr(`background-color`,e.colors[1]),re(),Ar(e.label)}}function Pe(l,i){if(l&1){let e=Ea();ce$1(0,`bx-radio`,40),VT(),He(`ngModelChange`,function(s){Di(e);let c=Ie();return Ei(c.updateAppearance({quality:s}))}),pe()}if(l&2){let e=i.$implicit,n=Ie();Ke(`label`,e.label)(`value`,e.value)(`ngModel`,n.appearance().quality),jT()}}var ce=class l{a11y=h(Te);theme=h($r);appearance=this.theme.appearance;reducedMotion=this.a11y.isReducedMotion;glassinessDescription=x(()=>{let i=this.appearance().glassiness;return i<.25?`Nearly transparent glass`:i<.75?`Balanced glass`:`Richly tinted glass`});qualities=[{value:`auto`,label:`Automatic`},{value:`baseline`,label:`Baseline`}];codeExample=`const theme = inject(ThemingService);

// Balanced glass throughout the application, including open overlays.
theme.setAppearance({ glassiness: 0.5 });

// Opaque surfaces are an accessibility preference.
theme.setAppearance({ reducedTransparency: true });

// Custom surfaces inherit the same appearance.
<article bxSurface>\u2026</article>`;updateAppearance(i){this.theme.setAppearance(i)}setMotion(i){this.a11y.setReducedMotion(i)}reset(){this.theme.resetAppearance(),this.theme.setPalette(`graphite-sky-blue`),this.theme.setHighContrast(!1),this.a11y.setReducedMotion(null)}static ɵfac=function(e){return new(e||l)};static ɵcmp=we$1({type:l,selectors:[[`app-appearance`]],decls:72,vars:18,consts:[[`glassiness`,``],[`aria-labelledby`,`appearance-title`,1,`appearance`],[1,`page-heading`],[1,`eyebrow`],[`id`,`appearance-title`],[1,`lab-layout`],[1,`preview-column`],[`aria-label`,`Glassiness`,`aria-describedby`,`glassiness-note`,1,`glassiness-controls`,3,`bxTooltip`],[1,`glassiness-range`],[`name`,`circle-dashed`,`size`,`20`,`ariaLabel`,`Nearly transparent`,3,`decorative`],[`id`,`appearance-glassiness`,`type`,`range`,`bxSlider`,``,`min`,`0`,`max`,`1`,`step`,`0.01`,`aria-label`,`Glassiness`,`aria-describedby`,`glassiness-note`,3,`input`,`value`,`disabled`],[`name`,`circle`,`size`,`20`,`ariaLabel`,`Richly tinted`,1,`glassiness-tinted-icon`,3,`decorative`],[`id`,`glassiness-note`,1,`glassiness-note`],[`bxSurface`,``,`aria-labelledby`,`global-title`,1,`global-controls`],[1,`panel-heading`],[`id`,`global-title`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`],[1,`mode-picker`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`color`],[`name`,`sun`,`size`,`16`],[`name`,`moon`,`size`,`16`],[1,`palette-picker`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`color`],[1,`rendering-options`],[1,`quality-picker`],[`name`,`appearance-quality`,3,`label`,`value`,`ngModel`],[1,`section-note`,`rendering-note`],[`role`,`group`,`aria-labelledby`,`accessibility-title`,1,`accessibility-controls`],[`id`,`accessibility-title`],[1,`accessibility-options`],[`label`,`Reduce motion`,3,`ngModelChange`,`ngModel`],[`label`,`Reduce transparency`,3,`ngModelChange`,`ngModel`],[`label`,`High contrast`,3,`ngModelChange`,`ngModel`],[`aria-labelledby`,`implementation-title`,1,`implementation`],[`id`,`implementation-title`],[1,`section-note`],[3,`textContent`],[1,`appearance-documentation`],[`path`,`documentation/appearance/README.md`],[`aria-hidden`,`true`,1,`palette-swatches`],[`name`,`appearance-quality`,3,`ngModelChange`,`label`,`value`,`ngModel`]],template:function(e,n){if(e&1){let s=Ea();ce$1(0,`section`,1)(1,`header`,2)(2,`p`,3),Jt(3,`Appearance · application wide`),pe(),ce$1(4,`h1`,4),Jt(5,`Appearance`),pe(),ce$1(6,`p`),Jt(7,`Find your balance of clear and tinted glass, then scroll through a nature journal to see it over photographs and text.`),pe()(),ce$1(8,`div`,5)(9,`div`,6),it(10,`app-appearance-preview`),ce$1(11,`section`,7)(12,`div`,8),it(13,`bx-icon`,9),ce$1(14,`input`,10,0),He(`input`,function(){Di(s);let g=Q0(15);return Ei(n.updateAppearance({glassiness:+g.value}))}),pe(),it(16,`bx-icon`,11),pe()(),ce$1(17,`p`,12),Jt(18),pe()(),ce$1(19,`aside`,13)(20,`div`,14)(21,`h2`,15),Jt(22,`Global appearance`),pe(),ce$1(23,`button`,16),He(`click`,function(){return n.reset()}),Jt(24,`Reset`),pe()(),ce$1(25,`fieldset`)(26,`legend`),Jt(27,`Mode`),pe(),ce$1(28,`div`,17)(29,`button`,18),He(`click`,function(){return n.theme.setApplicationTheme(`light`)}),it(30,`bx-icon`,19),Jt(31,`Light`),pe(),ce$1(32,`button`,18),He(`click`,function(){return n.theme.setApplicationTheme(`dark`)}),it(33,`bx-icon`,20),Jt(34,`Dark`),pe()()(),ce$1(35,`fieldset`)(36,`legend`),Jt(37,`Palettes`),pe(),ce$1(38,`div`,21),$o(39,Me,5,7,`button`,22,we),pe()(),ce$1(41,`fieldset`,23)(42,`legend`),Jt(43,`Rendering`),pe(),ce$1(44,`div`,24),$o(45,Pe,1,3,`bx-radio`,25,Ce),pe()(),ce$1(47,`p`,26),Jt(48,`Baseline uses blur and tint. Automatic adds reflections and highlights when supported.`),pe(),ce$1(49,`div`,27)(50,`h3`,28),Jt(51,`Accessibility`),pe(),ce$1(52,`div`,29)(53,`bx-slide-toggle`,30),VT(),He(`ngModelChange`,function(g){return n.setMotion(g)}),pe(),ce$1(54,`bx-slide-toggle`,31),VT(),He(`ngModelChange`,function(g){return n.updateAppearance({reducedTransparency:g})}),pe(),ce$1(55,`bx-slide-toggle`,32),VT(),He(`ngModelChange`,function(g){return n.theme.setHighContrast(g)}),pe()()()()(),ce$1(56,`section`,33)(57,`div`)(58,`p`,3),Jt(59,`Existing Blocks API`),pe(),ce$1(60,`h2`,34),Jt(61,`One configuration. Every component.`),pe(),ce$1(62,`p`),Jt(63,`Glass follows the existing semantic theme. Use the appearance controls above, or configure the theming service in your application.`),pe(),ce$1(64,`p`,35),Jt(65,`Glassiness adjusts tint and blur together. Reduced transparency provides an opaque backing while keeping your glassiness preference.`),pe()(),ce$1(66,`pre`),it(67,`code`,36),pe()(),ce$1(68,`details`,37)(69,`summary`),Jt(70,`Appearance API, performance, and accessibility`),pe(),it(71,`app-readme`,38),pe()()}e&2&&(re(11),xe$1(`is-disabled`,n.appearance().reducedTransparency),Ke(`bxTooltip`,n.appearance().reducedTransparency?`Turn off Reduce transparency to adjust glassiness.`:``),Ve(`tabindex`,n.appearance().reducedTransparency?0:null),re(2),Ke(`decorative`,!1),re(),Ke(`value`,n.appearance().glassiness)(`disabled`,n.appearance().reducedTransparency),Ve(`aria-valuetext`,n.glassinessDescription()),re(2),Ke(`decorative`,!1),re(2),Ar(n.appearance().reducedTransparency?`Reduced transparency keeps surfaces opaque. Turn it off to adjust glassiness.`:`Slide from nearly clear glass to a richer tint. The middle balances clarity and depth.`),re(11),Ke(`color`,n.theme.activeTheme()===`light`?`primary`:`grayscale`),Ve(`aria-pressed`,n.theme.activeTheme()===`light`),re(3),Ke(`color`,n.theme.activeTheme()===`dark`?`primary`:`grayscale`),Ve(`aria-pressed`,n.theme.activeTheme()===`dark`),re(7),qo(n.theme.palettes),re(6),qo(n.qualities),re(8),Ke(`ngModel`,n.reducedMotion()),jT(),re(),Ke(`ngModel`,n.appearance().reducedTransparency),jT(),re(),Ke(`ngModel`,n.theme.highContrast()),jT(),re(12),Ke(`textContent`,n.codeExample))},dependencies:[h6,c6,EO,K,Z,J,fe$1,Bn,Vn,Yd,T,R],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.appearance[_ngcontent-%COMP%] {
  max-width: 88rem;
  margin-inline: auto;
}
.lab-layout[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(17rem, 1fr);
  gap: 1.5rem;
  align-items: stretch;
}
.preview-column[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
}
.glassiness-controls[_ngcontent-%COMP%] {
  flex: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 9999px;
  background: var(--%NS%bx-bg-surface);
}
.global-controls[_ngcontent-%COMP%] {
  padding: 1.5rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  background: color-mix(in srgb, var(--%NS%bx-bg-surface) 85%, transparent);
}
.panel-heading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
.panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
.glassiness-controls[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin-block: 0.75rem 1.5rem;
  font-size: 1.25rem;
}
.section-note[_ngcontent-%COMP%], 
.glassiness-note[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.glassiness-note[_ngcontent-%COMP%] {
  margin: 0;
  padding-inline: 0.5rem;
}
.global-controls[_ngcontent-%COMP%]    > .rendering-note[_ngcontent-%COMP%] {
  margin: 0 0 1rem;
}
fieldset[_ngcontent-%COMP%] {
  border: 0;
  padding: 0;
  margin: 0 0 1rem;
  min-width: 0;
}
.rendering-options[_ngcontent-%COMP%] {
  margin-bottom: 0.5rem;
}
legend[_ngcontent-%COMP%], 
.accessibility-controls[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}
.mode-picker[_ngcontent-%COMP%], 
.palette-picker[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.palette-picker[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  padding-inline: 0.75rem;
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
.glassiness-range[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 1rem;
  color: var(--%NS%bx-text-secondary);
}
.glassiness-tinted-icon[_ngcontent-%COMP%] {
  background:
    radial-gradient(
      circle,
      currentcolor 48%,
      transparent 52%);
  opacity: 0.8;
}
input[type=range][_ngcontent-%COMP%] {
  display: block;
  width: 100%;
  min-width: 0;
  margin: 0;
  min-height: 1.5rem;
  cursor: pointer;
}
.glassiness-controls.is-disabled[_ngcontent-%COMP%] {
  cursor: not-allowed;
}
input[type=range][_ngcontent-%COMP%]:disabled {
  cursor: not-allowed;
  pointer-events: none;
}
.quality-picker[_ngcontent-%COMP%] {
  display: grid;
  gap: 0.75rem;
  font-size: 0.875rem;
}
.quality-picker[_ngcontent-%COMP%], 
.accessibility-options[_ngcontent-%COMP%] {
  --%NS%bx-field-padding-bottom: 0;
}
.quality-picker[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%], 
.check-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
}
.accessibility-controls[_ngcontent-%COMP%] {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--%NS%bx-border-default);
}
.accessibility-controls[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin-top: 0;
}
.accessibility-options[_ngcontent-%COMP%] {
  display: grid;
  gap: 0.75rem;
  font-size: 0.875rem;
}
.implementation[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 2rem;
  margin-block: 3rem 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--%NS%bx-border-default);
}
.implementation[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {
  margin: 0;
  padding: 1.5rem;
  background: var(--%NS%bx-bg-surface);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  overflow-x: auto;
  font-size: 0.8rem;
  line-height: 1.7;
}
.appearance-documentation[_ngcontent-%COMP%] {
  border-top: 1px solid var(--%NS%bx-border-default);
  padding-block: 1.5rem;
}
.appearance-documentation[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {
  cursor: pointer;
  margin-bottom: 1rem;
}
@media (max-width: 1280px) {
  .lab-layout[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
  .implementation[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (max-width: 640px) {
  .global-controls[_ngcontent-%COMP%], 
   .glassiness-controls[_ngcontent-%COMP%] {
    padding: 1rem;
  }
}
.lab-layout[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], 
.implementation[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  min-width: 0;
}`]})};export{ce as Appearance};