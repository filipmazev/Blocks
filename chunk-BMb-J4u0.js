import{I as xe$1}from"./chunk-0rSpyq6Z.js";import{R as ct,d as Gi,p as Hs,v as Ki}from"./chunk-D2mL-a4s.js";import{$a as sd,Bi as ik,Co as vo,Fr as ab,J as Fr,Jr as bo,K as FT,Kn as We,Na as pb,Pa as pe,Qr as cb,Ro as xo,Sa as nd,T as Br,Ta as od,Ti as ge$1,Tt as Kn,Vr as b,Wa as rd,X as G,Xn as Wo,Yr as br,Z as GC,_n as Sz,_r as ZC,a as $r,hr as Yy,mi as er,na as lA,nn as RA,oa as le$1,pi as ee,ri as cl,rr as Xl,so as tr,t as $,ta as ke,tt as Go,wn as TT,yi as fb,zr as al}from"./chunk-4Vch4aoV.js";var C=class i{nativeElement=b(ke).nativeElement;bxA11yService=b(Br);destroyRef=b(ge$1);ngZone=b(le$1);previewScrollRepeat=ee(!1);previewScrollPaused=ee(!1);previewScrollDistance=ee(280);previewScrollTarget=ee(null);previewScrollCover=ee(null);previewScrollDwell=ee(0);view=null;observer;resize;stopFrame;timer;visible=!1;interrupted=!1;played=!1;elapsed=0;origin=0;distance=0;constructor(){er(()=>this.ngZone.runOutsideAngular(()=>this.connect())),We(()=>{this.bxA11yService.isReducedMotion(),this.previewScrollPaused(),this.previewScrollRepeat(),this.ngZone.runOutsideAngular(()=>this.sync())}),this.destroyRef.onDestroy(()=>{this.cancel(),this.observer?.disconnect(),this.resize?.disconnect()})}stop(){this.interrupted=!0,this.cancel()}connect(){let t=this.nativeElement.ownerDocument;if(this.view=t.defaultView,!this.view)return;let e=new AbortController;this.observer=new IntersectionObserver(([n])=>{this.visible=n.isIntersecting&&n.intersectionRatio>=.45,this.sync()},{threshold:[0,.45]}),this.observer.observe(this.nativeElement),this.resize=new ResizeObserver(()=>{this.cancel(),this.sync()}),this.resize.observe(this.nativeElement),t.addEventListener(`visibilitychange`,()=>this.sync(),{signal:e.signal}),this.destroyRef.onDestroy(()=>e.abort())}sync(){if(!(this.view&&this.visible&&!this.nativeElement.ownerDocument.hidden&&!this.interrupted&&!this.bxA11yService.isReducedMotion()&&!this.previewScrollPaused())){this.cancel();return}this.timer!==void 0||this.stopFrame||this.played&&!this.previewScrollRepeat()||(this.timer=this.view?.setTimeout(()=>{this.timer=void 0,this.play()},this.played?6500:1200))}play(){let t=this.nativeElement;if(!this.previewScrollRepeat()&&t.scrollTop!==0)return;let e=this.previewScrollTarget(),n=this.previewScrollCover(),o=Math.max(0,t.scrollHeight-t.clientHeight),c=Math.max(0,this.previewScrollDwell())/1e3;if(this.origin=t.scrollTop,this.distance=Math.min(this.previewScrollDistance(),o-this.origin),this.elapsed=0,e&&n){let k=t.getBoundingClientRect(),x=n.getBoundingClientRect(),A=this.view?.getComputedStyle(t).direction===`rtl`?k.right-x.right:x.left-k.left;Kn(t,{"--preview-cover-start":`${A}px`,"--preview-cover-width":`${x.width}px`});let B=e.getBoundingClientRect(),pe=this.origin+B.top-x.top+(B.height-x.height)/2;this.distance=Math.max(0,Math.min(o,pe))-this.origin}if(Math.abs(this.distance)<.5&&c===0)return;let p=this.previewScrollRepeat()?2.8:1.4,ce=p*2+c;this.stopFrame=$r(k=>{this.elapsed+=k;let x=Math.min(1,this.elapsed/p),I=Math.max(0,Math.min(1,(this.elapsed-p-c)/p)),A=this.elapsed<p?(1-Math.cos(x*Math.PI))/2:this.elapsed<p+c?1:(1+Math.cos(I*Math.PI))/2;return t.scrollTop=this.origin+this.distance*A,this.elapsed<ce?!0:(this.stopFrame=void 0,this.played=!0,this.sync(),!1)})}cancel(){this.timer!==void 0&&this.view?.clearTimeout(this.timer),this.timer=void 0,this.stopFrame?.(),this.stopFrame=void 0}static ɵfac=function(e){return new(e||i)};static ɵdir=pe({type:i,selectors:[[``,`appPreviewScroll`,``]],inputs:{previewScrollRepeat:[1,`previewScrollRepeat`],previewScrollPaused:[1,`previewScrollPaused`],previewScrollDistance:[1,`previewScrollDistance`],previewScrollTarget:[1,`previewScrollTarget`],previewScrollCover:[1,`previewScrollCover`],previewScrollDwell:[1,`previewScrollDwell`]},exportAs:[`appPreviewScroll`]})};function T(i,t,e,n){let o=`assets/images/appearance/${i}`;return{src:`${o}.webp`,srcset:`${o}-640.webp 640w, ${o}.webp ${t}w`,width:t,height:e,alt:n}}var se=[{id:`preview-shar-mountain`,title:`Šar Mountain`,shortTitle:`Šar`,subtitle:`High peaks, mountain pastures, and rich forests`,paragraphs:[`Šar Mountain is known for its high peaks, mountain pastures, and rich forests.`,`A variety of vegetation spreads everywhere in the areas of this mountain massif. A large number of these plants are used by the inhabitants of these regions for folk medicine.`],photo:T(`shar-mountain`,1200,730,`Snow-dusted peaks and green slopes reflected in a mountain lake on Šar Mountain`),caption:`The mountain landscapes of Šar Mountain.`,detail:{title:`Bogovinje Lake`,paragraphs:[`One of the mountain lakes that adorns Šar Mountain is Bogovinje Lake, known for its crystal-clear waters and stunning reflections of the surrounding peaks.`,`The lake is a popular destination for hikers and nature enthusiasts, offering a peaceful retreat in the heart of the mountains.`],photo:T(`bogovinje-lake`,1200,679,`Bogovinje Lake beneath snow-streaked mountain slopes`),caption:`The quiet waters of Bogovinje Lake beneath the surrounding peaks.`}},{id:`preview-mavrovo`,title:`Mavrovo National Park`,shortTitle:`Mavrovo`,subtitle:`The Korab massif`,paragraphs:[`Korab is the highest mountain in Macedonia, home to the Golem Korab peak standing at 2,764 meters.`,`The mountain is part of the Mavrovo National Park, known for its diverse landscapes and natural beauty.`],photo:T(`korab`,1200,775,`Rocky peaks and open mountain pastures in the Korab massif`),caption:`The high peaks and open pastures of Korab.`,detail:{title:`A landscape shaped by water`,paragraphs:[`Korab has abundant surface watercourses, with several permanent and glacial-fed rivers and streams.`,`The Macedonian side of Korab is home to eight permanent and many occasional glacial lakes, supporting rich ecosystems.`],photo:T(`korab-valley`,1200,715,`A black-and-white panorama of the Korab ridges with small lakes below`),caption:`A wide view across the ridges and lakes of the Korab massif.`}}];var R=(i,t)=>t.id;function ue(i,t){if(i&1&&(bo(0,`p`),lA(1),Go()),i&2){let e=t.$implicit;Xl(),ik(e)}}function me(i,t){if(i&1&&(bo(0,`p`),lA(1),Go()),i&2){let e=t.$implicit;Xl(),ik(e)}}function he(i,t){if(i&1&&(bo(0,`section`,12)(1,`div`,9)(2,`p`,10),lA(3),Go(),bo(4,`h3`,29),lA(5),Go(),ab(6,ue,2,1,`p`,null,TT),Go(),bo(8,`figure`,30),sd(9,`img`,31),bo(10,`figcaption`),lA(11),Go()(),bo(12,`div`,9)(13,`h4`),lA(14),Go(),ab(15,me,2,1,`p`,null,TT),Go(),bo(17,`figure`,32),sd(18,`img`,31),bo(19,`figcaption`),lA(20),Go()()()),i&2){let e=t.$implicit;xo(`id`,e.id),vo(`aria-labelledby`,e.id+`-title`),Xl(3),ik(e.subtitle),Xl(),xo(`id`,e.id+`-title`),Xl(),ik(e.title),Xl(),cb(e.paragraphs),Xl(3),xo(`src`,e.photo.src)(`alt`,e.photo.alt)(`width`,e.photo.width)(`height`,e.photo.height),vo(`srcset`,e.photo.srcset),Xl(2),ik(e.caption),Xl(3),ik(e.detail.title),Xl(),cb(e.detail.paragraphs),Xl(3),xo(`src`,e.detail.photo.src)(`alt`,e.detail.photo.alt)(`width`,e.detail.photo.width)(`height`,e.detail.photo.height),vo(`srcset`,e.detail.photo.srcset),Xl(2),ik(e.detail.caption)}}function ve(i,t){if(i&1){let e=pb();bo(0,`div`,13)(1,`h3`),lA(2,`No places found`),Go(),bo(3,`p`),lA(4,`Try searching for Šar Mountain, Korab, or lakes.`),Go(),bo(5,`button`,33),br(`click`,function(){al(e);let o=Wo();return cl(o.search.set(``))}),lA(6,`Clear search`),Go()()}}function ge(i,t){i&1&&(bo(0,`span`,21),lA(1,`Find a place`),Go())}function be(i,t){if(i&1){let e=pb();bo(0,`input`,34,4),br(`input`,function(){al(e);let o=FT(1),c=Wo();return cl(c.search.set(o.value))}),Go()}if(i&2){let e=Wo();xo(`value`,e.search())}}function we(i,t){if(i&1){let e=pb();bo(0,`button`,35),br(`click`,function(){al(e);let o=Wo();return cl(o.paused.set(!o.paused()))}),sd(1,`bx-icon`,36),Go()}if(i&2){let e=Wo();vo(`aria-label`,e.paused()?`Play glass preview`:`Pause glass preview`)(`aria-pressed`,e.paused()),Xl(),xo(`name`,e.paused()?`play`:`pause`)}}function ye(i,t){if(i&1){let e=pb();bo(0,`button`,39),br(`click`,function(){let o=al(e).$implicit,c=Wo(2),p=FT(1);return cl(c.scrollTo(p,o.id))}),sd(1,`bx-icon`,40),bo(2,`span`),lA(3),Go()()}if(i&2){let e=t.$implicit;Xl(3),ik(e.shortTitle)}}function fe(i,t){if(i&1&&(bo(0,`nav`,28)(1,`span`,37),lA(2),Go(),ab(3,ye,4,1,`button`,38,R),Go()),i&2){let e=Wo();Xl(2),ik(e.saved()?`Saved to your places`:`Explore Macedonia`),Xl(),cb(e.parks())}}function _e(i,t){if(i&1){let e=pb();bo(0,`bx-menu-item`,43),br(`action`,function(){let o=al(e).$implicit,c=Wo(2),p=FT(1);return cl(c.scrollTo(p,o.id))}),Go()}if(i&2){let e=t.$implicit;xo(`label`,e.title)}}function xe(i,t){if(i&1){let e=pb();bo(0,`bx-menu`)(1,`bx-menu-item`,41),br(`action`,function(){al(e);let o=Wo(),c=FT(1);return cl(o.scrollTo(c))}),Go(),ab(2,_e,1,1,`bx-menu-item`,42,R),Go()}if(i&2){let e=Wo();Xl(2),cb(e.parks())}}var le=class i{bxA11yService=b(Br);scrollHint=Sz.required(C);search=$(``);saved=$(!1);paused=$(!1);parks=G(()=>{let t=n=>n.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase(),e=t(this.search().trim());return se.filter(n=>t([n.title,n.subtitle,...n.paragraphs,n.detail.title,...n.detail.paragraphs].join(` `)).includes(e))});showcase=ee(!1);stopScrollHint(){this.showcase()||this.scrollHint().stop()}scrollTo(t,e){this.stopScrollHint();let n=e?t.querySelector(`#${e}`):void 0;if(e&&!n)return;let o=n?n.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop-96:0;t.scrollTo({top:Math.max(0,o),behavior:this.bxA11yService.isReducedMotion()?`auto`:`smooth`})}static ɵfac=function(e){return new(e||i)};static ɵcmp=Fr({type:i,selectors:[[`app-appearance-preview`]],viewQuery:function(e,n){e&1&&Yy(n.scrollHint,C,5),e&2&&fb()},hostAttrs:[`data-bx-light-scope`,``],hostVars:2,hostBindings:function(e,n){e&1&&br(`pointerdown`,function(){return n.stopScrollHint()})(`wheel`,function(){return n.stopScrollHint()})(`keydown`,function(){return n.stopScrollHint()})(`focusin`,function(){return n.stopScrollHint()}),e&2&&tr(`is-showcase`,n.showcase())},inputs:{showcase:[1,`showcase`]},decls:36,vars:18,consts:[[`reader`,``],[`articleTitle`,``],[`glassBar`,``],[`contents`,``],[`query`,``],[`appPreviewScroll`,``,`role`,`region`,`aria-label`,`Scrollable national parks article`,1,`preview-reader`,3,`previewScrollRepeat`,`previewScrollTarget`,`previewScrollCover`,`previewScrollDwell`,`previewScrollPaused`],[1,`park-article`],[`src`,`assets/images/appearance/mountains-2400.webp`,`srcset`,`
                assets/images/appearance/mountains-640.webp   640w,
                assets/images/appearance/mountains.webp      1200w,
                assets/images/appearance/mountains-2400.webp 2400w
            `,`sizes`,`(max-width: 640px) 150vw, (max-width: 1280px) 90vw, 55vw`,`alt`,`A snow-covered mountain landscape`,`width`,`2400`,`height`,`1643`,`loading`,`eager`,`fetchpriority`,`high`,`decoding`,`async`,1,`article-hero`],[1,`article-copy`,`article-heading`],[1,`article-copy`],[1,`article-eyebrow`],[1,`article-lead`],[1,`park-story`,3,`id`],[`role`,`status`,1,`article-copy`,`empty-search`],[1,`article-copy`,`article-footer`],[`name`,`leaf`,`size`,`16`],[`role`,`group`,`aria-label`,`Nature journal controls`,1,`preview-tools`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Back to the start of the article`,1,`preview-icon-button`,3,`click`],[`name`,`arrow-up`,`size`,`16`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`bxSurfaceInteractive`,``,`bxSurfaceFocusEmission`,`var(--bx-primary)`,1,`preview-search`],[`name`,`search`,`size`,`16`],[1,`preview-query`],[`type`,`search`,`aria-label`,`Search the national parks article`,`placeholder`,`Find a place`,3,`value`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,1,`preview-icon-button`,3,`click`,`color`],[`size`,`16`,3,`name`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Article contents`,`placement`,`bottom`,1,`preview-icon-button`,3,`bxDropdown`],[`name`,`ellipsis`,`size`,`20`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`glassiness`,`auto`,1,`preview-playback`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`aria-label`,`Places in this article`,1,`preview-navigation`],[3,`id`],[1,`article-photo`],[`sizes`,`(max-width: 640px) 100vw, (max-width: 1280px) 85vw, 55vw`,`loading`,`eager`,`decoding`,`async`,3,`src`,`alt`,`width`,`height`],[1,`article-photo`,`article-detail-photo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`type`,`search`,`aria-label`,`Search the national parks article`,`placeholder`,`Find a place`,3,`input`,`value`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`glassiness`,`auto`,1,`preview-playback`,3,`click`],[`size`,`18`,3,`name`],[`bxTruncate`,``,`role`,`status`,1,`preview-saved-status`],[`type`,`button`],[`type`,`button`,3,`click`],[`name`,`mountain`,`size`,`16`],[`label`,`Back to the top`,`icon`,`arrow-up`,3,`action`],[`icon`,`mountain`,3,`label`],[`icon`,`mountain`,3,`action`,`label`]],template:function(e,n){if(e&1){let o=pb();bo(0,`div`,5,0)(2,`article`,6),sd(3,`img`,7),bo(4,`header`,8)(5,`h2`,null,1),lA(7,`National Parks`),Go()(),bo(8,`div`,9)(9,`p`,10),lA(10,`Discover Macedonia`),Go(),bo(11,`p`,11),lA(12,`Explore the natural beauty of Macedonia through the power of photography.`),Go()(),ab(13,he,21,18,`section`,12,R,!1,ve,7,0,`div`,13),bo(16,`footer`,14),sd(17,`bx-icon`,15),bo(18,`span`),lA(19,`Leave the trails as beautiful as you found them.`),Go()()()(),bo(20,`div`,16)(21,`button`,17),br(`click`,function(){al(o);let p=FT(1);return cl(n.scrollTo(p))}),sd(22,`bx-icon`,18),Go(),bo(23,`div`,19,2),sd(25,`bx-icon`,20),od(26,ge,2,0,`span`,21)(27,be,2,1,`input`,22),Go(),bo(28,`button`,23),br(`click`,function(){return n.saved.set(!n.saved())}),sd(29,`bx-icon`,24),Go(),bo(30,`button`,25),sd(31,`bx-icon`,26),Go()(),od(32,we,2,3,`button`,27)(33,fe,5,1,`nav`,28),rd(34,xe,4,0,`ng-template`,null,3,RA)}if(e&2){let o=FT(6),c=FT(24),p=FT(35);xo(`previewScrollRepeat`,n.showcase())(`previewScrollTarget`,n.showcase()?o:null)(`previewScrollCover`,n.showcase()?c:null)(`previewScrollDwell`,n.showcase()?2400:0)(`previewScrollPaused`,n.paused()),vo(`tabindex`,n.showcase()?null:0)(`aria-hidden`,n.showcase()?!0:null)(`inert`,n.showcase()?``:null),Xl(13),cb(n.parks()),Xl(7),vo(`inert`,n.showcase()?``:null)(`aria-hidden`,n.showcase()?!0:null),Xl(6),nd(n.showcase()?26:27),Xl(2),xo(`color`,n.saved()?`primary`:`grayscale`),vo(`aria-pressed`,n.saved())(`aria-label`,n.saved()?`Remove article from saved places`:`Save article to your places`),Xl(),xo(`name`,n.saved()?`bookmark-check`:`bookmark`),Xl(),xo(`bxDropdown`,p),Xl(2),nd(n.showcase()?32:33)}},dependencies:[GC,xe$1,ZC,Hs,Ki,Gi,ct,C],styles:[`
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
  min-block-size: 23rem;
}
.is-showcase[_nghost-%COMP%]   .preview-reader[_ngcontent-%COMP%] {
  pointer-events: none;
  scrollbar-width: none;
}
.is-showcase[_nghost-%COMP%]   .article-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  inline-size: var(--%NS%preview-cover-width, auto);
  white-space: nowrap;
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
}
@media (max-width: 640px) {
  .is-showcase[_nghost-%COMP%]   .preview-tools[_ngcontent-%COMP%]    > .preview-icon-button[_ngcontent-%COMP%] {
    display: none;
  }
}`]})};export{le as t};