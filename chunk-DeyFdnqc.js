import{D as me$1}from"./chunk-g_MLkDaC.js";import{Ar as bb,Ba as te$1,Cr as ae$1,Dr as b,Ea as re$1,Ft as Le,Hn as Vt,Ii as kr,Ir as ce$1,K as Fa,Q as G,Rt as M,Si as j,To as y,U as F,Xn as Wt,Yt as Nt,Zn as X,Zr as f,cr as Ze,di as hb,en as Pa,er as Xt,fr as _,g as B,gr as _o,gt as Ir,ii as g,j as D,kn as Tt,l as $t,lo as w,mn as R,or as Z,po as wt,ri as ft,sn as Q,ti as fe,wt as K,xn as Rt,xo as xe,y as Be,yi as iT,zn as Ve}from"./chunk-CpeWzSSw.js";var P=class i{nativeElement=f(K).nativeElement;bxA11yService=f(Le);destroyRef=f(Q);ngZone=f(re$1);previewScrollRepeat=b(!1);previewScrollPaused=b(!1);previewScrollDistance=b(280);view=null;observer;stopFrame;timer;visible=!1;interrupted=!1;played=!1;elapsed=0;origin=0;distance=0;constructor(){Ze(()=>this.ngZone.runOutsideAngular(()=>this.connect())),ce$1(()=>{this.bxA11yService.isReducedMotion(),this.previewScrollPaused(),this.previewScrollRepeat(),this.ngZone.runOutsideAngular(()=>this.sync())}),this.destroyRef.onDestroy(()=>{this.cancel(),this.observer?.disconnect()})}stop(){this.interrupted=!0,this.cancel()}connect(){let t=this.nativeElement.ownerDocument;if(this.view=t.defaultView,!this.view)return;let e=new AbortController;this.observer=new IntersectionObserver(([n])=>{this.visible=n.isIntersecting&&n.intersectionRatio>=.45,this.sync()},{threshold:[0,.45]}),this.observer.observe(this.nativeElement),t.addEventListener(`visibilitychange`,()=>this.sync(),{signal:e.signal}),this.destroyRef.onDestroy(()=>e.abort())}sync(){if(!(this.view&&this.visible&&!this.nativeElement.ownerDocument.hidden&&!this.interrupted&&!this.bxA11yService.isReducedMotion()&&!this.previewScrollPaused())){this.cancel();return}this.timer!==void 0||this.stopFrame||this.played&&!this.previewScrollRepeat()||(this.timer=this.view?.setTimeout(()=>{this.timer=void 0,this.play()},this.played?6500:1200))}play(){let t=this.nativeElement;if(!this.previewScrollRepeat()&&t.scrollTop!==0||(this.origin=t.scrollTop,this.distance=Math.min(this.previewScrollDistance(),t.scrollHeight-t.clientHeight-this.origin),this.elapsed=0,this.distance<=0))return;let e=this.previewScrollRepeat()?6.4:2.8;this.stopFrame=Ir(n=>{this.elapsed+=n;let o=Math.min(1,this.elapsed/e);return t.scrollTop=this.origin+this.distance*(1-Math.cos(o*Math.PI*2))/2,o<1?!0:(this.stopFrame=void 0,this.played=!0,this.sync(),!1)})}cancel(){this.timer!==void 0&&this.view?.clearTimeout(this.timer),this.timer=void 0,this.stopFrame?.(),this.stopFrame=void 0}static ɵfac=function(e){return new(e||i)};static ɵdir=Z({type:i,selectors:[[``,`appPreviewScroll`,``]],inputs:{previewScrollRepeat:[1,`previewScrollRepeat`],previewScrollPaused:[1,`previewScrollPaused`],previewScrollDistance:[1,`previewScrollDistance`]},exportAs:[`appPreviewScroll`]})};function N(i,t,e,n){let o=`assets/images/appearance/${i}`;return{src:`${o}.webp`,srcset:`${o}-640.webp 640w, ${o}.webp ${t}w`,width:t,height:e,alt:n}}var ne=[{id:`preview-shar-mountain`,title:`Šar Mountain`,shortTitle:`Šar`,subtitle:`High peaks, mountain pastures, and rich forests`,paragraphs:[`Šar Mountain is known for its high peaks, mountain pastures, and rich forests.`,`A variety of vegetation spreads everywhere in the areas of this mountain massif. A large number of these plants are used by the inhabitants of these regions for folk medicine.`],photo:N(`shar-mountain`,1200,730,`Snow-dusted peaks and green slopes reflected in a mountain lake on Šar Mountain`),caption:`The mountain landscapes of Šar Mountain.`,detail:{title:`Bogovinje Lake`,paragraphs:[`One of the mountain lakes that adorns Šar Mountain is Bogovinje Lake, known for its crystal-clear waters and stunning reflections of the surrounding peaks.`,`The lake is a popular destination for hikers and nature enthusiasts, offering a peaceful retreat in the heart of the mountains.`],photo:N(`bogovinje-lake`,1200,679,`Bogovinje Lake beneath snow-streaked mountain slopes`),caption:`The quiet waters of Bogovinje Lake beneath the surrounding peaks.`}},{id:`preview-mavrovo`,title:`Mavrovo National Park`,shortTitle:`Mavrovo`,subtitle:`The Korab massif`,paragraphs:[`Korab is the highest mountain in Macedonia, home to the Golem Korab peak standing at 2,764 meters.`,`The mountain is part of the Mavrovo National Park, known for its diverse landscapes and natural beauty.`],photo:N(`korab`,1200,775,`Rocky peaks and open mountain pastures in the Korab massif`),caption:`The high peaks and open pastures of Korab.`,detail:{title:`A landscape shaped by water`,paragraphs:[`Korab has abundant surface watercourses, with several permanent and glacial-fed rivers and streams.`,`The Macedonian side of Korab is home to eight permanent and many occasional glacial lakes, supporting rich ecosystems.`],photo:N(`korab-valley`,1200,715,`A black-and-white panorama of the Korab ridges with small lakes below`),caption:`A wide view across the ridges and lakes of the Korab massif.`}}];var E=(i,t)=>t.id;function ae(i,t){if(i&1&&(_(0,`p`),X(1),D()),i&2){let e=t.$implicit;y(),fe(e)}}function re(i,t){if(i&1&&(_(0,`p`),X(1),D()),i&2){let e=t.$implicit;y(),fe(e)}}function oe(i,t){if(i&1&&(_(0,`section`,10)(1,`div`,7)(2,`p`,8),X(3),D(),_(4,`h3`,27),X(5),D(),$t(6,ae,2,1,`p`,null,Fa),D(),_(8,`figure`,28),xe(9,`img`,29),_(10,`figcaption`),X(11),D()(),_(12,`div`,7)(13,`h4`),X(14),D(),$t(15,re,2,1,`p`,null,Fa),D(),_(17,`figure`,30),xe(18,`img`,29),_(19,`figcaption`),X(20),D()()()),i&2){let e=t.$implicit;R(`id`,e.id),B(`aria-labelledby`,e.id+`-title`),y(3),fe(e.subtitle),y(),R(`id`,e.id+`-title`),y(),fe(e.title),y(),Wt(e.paragraphs),y(3),R(`src`,e.photo.src)(`alt`,e.photo.alt)(`width`,e.photo.width)(`height`,e.photo.height),B(`srcset`,e.photo.srcset),y(2),fe(e.caption),y(3),fe(e.detail.title),y(),Wt(e.detail.paragraphs),y(3),R(`src`,e.detail.photo.src)(`alt`,e.detail.photo.alt)(`width`,e.detail.photo.width)(`height`,e.detail.photo.height),B(`srcset`,e.detail.photo.srcset),y(2),fe(e.detail.caption)}}function se(i,t){if(i&1){let e=wt();_(0,`div`,11)(1,`h3`),X(2,`No places found`),D(),_(3,`p`),X(4,`Try searching for Šar Mountain, Korab, or lakes.`),D(),_(5,`button`,31),te$1(`click`,function(){Be(e);let o=w();return Ve(o.search.set(``))}),X(6,`Clear search`),D()()}}function le(i,t){i&1&&(_(0,`span`,19),X(1,`Find a place`),D())}function ce(i,t){if(i&1){let e=wt();_(0,`input`,32,2),te$1(`input`,function(){Be(e);let o=Tt(1),h=w();return Ve(h.search.set(o.value))}),D()}if(i&2){let e=w();R(`value`,e.search())}}function pe(i,t){if(i&1){let e=wt();_(0,`button`,33),te$1(`click`,function(){Be(e);let o=w();return Ve(o.paused.set(!o.paused()))}),xe(1,`bx-icon`,34),D()}if(i&2){let e=w();B(`aria-label`,e.paused()?`Play glass preview`:`Pause glass preview`)(`aria-pressed`,e.paused()),y(),R(`name`,e.paused()?`play`:`pause`)}}function de(i,t){if(i&1){let e=wt();_(0,`button`,37),te$1(`click`,function(){let o=Be(e).$implicit,h=w(2),C=Tt(1);return Ve(h.scrollTo(C,o.id))}),xe(1,`bx-icon`,38),_(2,`span`),X(3),D()()}if(i&2){let e=t.$implicit;y(3),fe(e.shortTitle)}}function ue(i,t){if(i&1&&(_(0,`nav`,26)(1,`span`,35),X(2),D(),$t(3,de,4,1,`button`,36,E),D()),i&2){let e=w();y(2),fe(e.saved()?`Saved to your places`:`Explore Macedonia`),y(),Wt(e.parks())}}function me(i,t){if(i&1){let e=wt();_(0,`bx-menu-item`,41),te$1(`action`,function(){let o=Be(e).$implicit,h=w(2),C=Tt(1);return Ve(h.scrollTo(C,o.id))}),D()}if(i&2){let e=t.$implicit;R(`label`,e.title)}}function he(i,t){if(i&1){let e=wt();_(0,`bx-menu`)(1,`bx-menu-item`,39),te$1(`action`,function(){Be(e);let o=w(),h=Tt(1);return Ve(o.scrollTo(h))}),D(),$t(2,me,1,1,`bx-menu-item`,40,E),D()}if(i&2){let e=w();y(2),Wt(e.parks())}}var te=class i{bxA11yService=f(Le);scrollHint=Nt.required(P);search=M(``);saved=M(!1);paused=M(!1);parks=g(()=>{let t=n=>n.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase(),e=t(this.search().trim());return ne.filter(n=>t([n.title,n.subtitle,...n.paragraphs,n.detail.title,...n.detail.paragraphs].join(` `)).includes(e))});showcase=b(!1);stopScrollHint(){this.showcase()||this.scrollHint().stop()}scrollTo(t,e){this.stopScrollHint();let n=e?t.querySelector(`#${e}`):void 0;if(e&&!n)return;let o=n?n.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop-96:0;t.scrollTo({top:Math.max(0,o),behavior:this.bxA11yService.isReducedMotion()?`auto`:`smooth`})}static ɵfac=function(e){return new(e||i)};static ɵcmp=G({type:i,selectors:[[`app-appearance-preview`]],viewQuery:function(e,n){e&1&&Xt(n.scrollHint,P,5),e&2&&ft()},hostAttrs:[`data-bx-light-scope`,``],hostVars:2,hostBindings:function(e,n){e&1&&te$1(`pointerdown`,function(){return n.stopScrollHint()})(`wheel`,function(){return n.stopScrollHint()})(`keydown`,function(){return n.stopScrollHint()})(`focusin`,function(){return n.stopScrollHint()}),e&2&&ae$1(`is-showcase`,n.showcase())},inputs:{showcase:[1,`showcase`]},decls:34,vars:16,consts:[[`reader`,``],[`contents`,``],[`query`,``],[`appPreviewScroll`,``,`role`,`region`,`aria-label`,`Scrollable national parks article`,1,`preview-reader`,3,`previewScrollRepeat`,`previewScrollDistance`,`previewScrollPaused`],[1,`park-article`],[`src`,`assets/images/appearance/mountains-2400.webp`,`srcset`,`
                assets/images/appearance/mountains-640.webp   640w,
                assets/images/appearance/mountains.webp      1200w,
                assets/images/appearance/mountains-2400.webp 2400w
            `,`sizes`,`(max-width: 640px) 150vw, (max-width: 1280px) 90vw, 55vw`,`alt`,`A snow-covered mountain landscape`,`width`,`2400`,`height`,`1643`,`loading`,`eager`,`fetchpriority`,`high`,`decoding`,`async`,1,`article-hero`],[1,`article-copy`,`article-heading`],[1,`article-copy`],[1,`article-eyebrow`],[1,`article-lead`],[1,`park-story`,3,`id`],[`role`,`status`,1,`article-copy`,`empty-search`],[1,`article-copy`,`article-footer`],[`name`,`leaf`,`size`,`16`],[`role`,`group`,`aria-label`,`Nature journal controls`,1,`preview-tools`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Back to the start of the article`,1,`preview-icon-button`,3,`click`],[`name`,`arrow-up`,`size`,`16`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`bxSurfaceInteractive`,``,`bxSurfaceFocusEmission`,`var(--bx-primary)`,1,`preview-search`],[`name`,`search`,`size`,`16`],[1,`preview-query`],[`type`,`search`,`aria-label`,`Search the national parks article`,`placeholder`,`Find a place`,3,`value`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,1,`preview-icon-button`,3,`click`,`color`],[`size`,`16`,3,`name`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Article contents`,`placement`,`bottom`,1,`preview-icon-button`,3,`bxDropdown`],[`name`,`ellipsis`,`size`,`20`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`glassiness`,`auto`,1,`preview-playback`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`aria-label`,`Places in this article`,1,`preview-navigation`],[3,`id`],[1,`article-photo`],[`sizes`,`(max-width: 640px) 100vw, (max-width: 1280px) 85vw, 55vw`,`loading`,`eager`,`decoding`,`async`,3,`src`,`alt`,`width`,`height`],[1,`article-photo`,`article-detail-photo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`type`,`search`,`aria-label`,`Search the national parks article`,`placeholder`,`Find a place`,3,`input`,`value`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`glassiness`,`auto`,1,`preview-playback`,3,`click`],[`size`,`18`,3,`name`],[`bxTruncate`,``,`role`,`status`,1,`preview-saved-status`],[`type`,`button`],[`type`,`button`,3,`click`],[`name`,`mountain`,`size`,`16`],[`label`,`Back to the top`,`icon`,`arrow-up`,3,`action`],[`icon`,`mountain`,3,`label`],[`icon`,`mountain`,3,`action`,`label`]],template:function(e,n){if(e&1){let o=wt();_(0,`div`,3,0)(2,`article`,4),xe(3,`img`,5),_(4,`header`,6)(5,`h2`),X(6,`National Parks`),D()(),_(7,`div`,7)(8,`p`,8),X(9,`Discover Macedonia`),D(),_(10,`p`,9),X(11,`Explore the natural beauty of Macedonia through the power of photography.`),D()(),$t(12,oe,21,18,`section`,10,E,!1,se,7,0,`div`,11),_(15,`footer`,12),xe(16,`bx-icon`,13),_(17,`span`),X(18,`Leave the trails as beautiful as you found them.`),D()()()(),_(19,`div`,14)(20,`button`,15),te$1(`click`,function(){Be(o);let C=Tt(1);return Ve(n.scrollTo(C))}),xe(21,`bx-icon`,16),D(),_(22,`div`,17),xe(23,`bx-icon`,18),j(24,le,2,0,`span`,19)(25,ce,2,1,`input`,20),D(),_(26,`button`,21),te$1(`click`,function(){return n.saved.set(!n.saved())}),xe(27,`bx-icon`,22),D(),_(28,`button`,23),xe(29,`bx-icon`,24),D()(),j(30,pe,2,3,`button`,25)(31,ue,5,1,`nav`,26),Pa(32,he,4,0,`ng-template`,null,1,kr)}if(e&2){let o=Tt(33);R(`previewScrollRepeat`,n.showcase())(`previewScrollDistance`,n.showcase()?520:280)(`previewScrollPaused`,n.paused()),B(`tabindex`,n.showcase()?null:0)(`aria-hidden`,n.showcase()?!0:null)(`inert`,n.showcase()?``:null),y(12),Wt(n.parks()),y(7),B(`inert`,n.showcase()?``:null)(`aria-hidden`,n.showcase()?!0:null),y(5),F(n.showcase()?24:25),y(2),R(`color`,n.saved()?`primary`:`grayscale`),B(`aria-pressed`,n.saved())(`aria-label`,n.saved()?`Remove article from saved places`:`Save article to your places`),y(),R(`name`,n.saved()?`bookmark-check`:`bookmark`),y(),R(`bxDropdown`,o),y(2),F(n.showcase()?30:31)}},dependencies:[Rt,me$1,Vt,iT,hb,bb,_o,P],styles:[`
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
}
.is-showcase[_nghost-%COMP%] {
  min-block-size: 27rem;
}
.is-showcase[_nghost-%COMP%]   .preview-reader[_ngcontent-%COMP%] {
  pointer-events: none;
  scrollbar-width: none;
}
.preview-query[_ngcontent-%COMP%] {
  min-inline-size: 0;
  overflow: hidden;
  font-size: 0.8125rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.preview-playback[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-end: var(--%NS%bx-space-4, 1rem);
  inset-inline-end: var(--%NS%bx-space-4, 1rem);
  z-index: 2;
}`]})};export{te as t};