import{D as fe$1}from"./chunk-BEm-ihzG.js";import{L as ct,X as qi,r as As,w as Wi}from"./chunk-DE1qZ0OS.js";import{t as U}from"./chunk-1rrlZ2Ss.js";import{$r as fa,Ao as y1,Ar as ce,En as W,Eo as xT,Gr as el,Ho as zr,I as Fr,In as XT,Jr as er,Kr as em,Lt as Os,Nr as d4,Po as ye$1,Sr as ba,St as Ly,W as Go,Xt as Ql,ai as gT,ar as Zy,b as Cy,ct as K,en as RD,i as $n,ia as me$1,it as Jc,k as Ey,nn as Ro,no as tt,nr as Zb,oo as ue$1,qi as m,qn as Yb,rt as Jb,v as CT,wr as br,xn as Ul,xr as bT,xt as Lr,zi as ke}from"./chunk-CVY9_LoB.js";var C=class i{nativeElement=m(ye$1).nativeElement;bxA11yService=m(Fr);destroyRef=m(me$1);ngZone=m(ce);previewScrollRepeat=ke(!1);previewScrollPaused=ke(!1);previewScrollDistance=ke(280);previewScrollTarget=ke(null);previewScrollCover=ke(null);previewScrollDwell=ke(0);view=null;observer;resize;stopFrame;timer;visible=!1;interrupted=!1;played=!1;elapsed=0;origin=0;distance=0;constructor(){er(()=>this.ngZone.runOutsideAngular(()=>this.connect())),tt(()=>{this.bxA11yService.isReducedMotion(),this.previewScrollPaused(),this.previewScrollRepeat(),this.ngZone.runOutsideAngular(()=>this.sync())}),this.destroyRef.onDestroy(()=>{this.cancel(),this.observer?.disconnect(),this.resize?.disconnect()})}stop(){this.interrupted=!0,this.cancel()}connect(){let t=this.nativeElement.ownerDocument;if(this.view=t.defaultView,!this.view)return;let e=new AbortController;this.observer=new IntersectionObserver(([n])=>{this.visible=n.isIntersecting&&n.intersectionRatio>=.45,this.sync()},{threshold:[0,.45]}),this.observer.observe(this.nativeElement),this.resize=new ResizeObserver(()=>{this.cancel(),this.sync()}),this.resize.observe(this.nativeElement),t.addEventListener(`visibilitychange`,()=>this.sync(),{signal:e.signal}),this.destroyRef.onDestroy(()=>e.abort())}sync(){if(!(this.view&&this.visible&&!this.nativeElement.ownerDocument.hidden&&!this.interrupted&&!this.bxA11yService.isReducedMotion()&&!this.previewScrollPaused())){this.cancel();return}this.timer!==void 0||this.stopFrame||this.played&&!this.previewScrollRepeat()||(this.timer=this.view?.setTimeout(()=>{this.timer=void 0,this.play()},this.played?6500:1200))}play(){let t=this.nativeElement;if(!this.previewScrollRepeat()&&t.scrollTop!==0)return;let e=this.previewScrollTarget(),n=this.previewScrollCover(),o=Math.max(0,t.scrollHeight-t.clientHeight),c=Math.max(0,this.previewScrollDwell())/1e3;if(this.origin=t.scrollTop,this.distance=Math.min(this.previewScrollDistance(),o-this.origin),this.elapsed=0,e&&n){let k=t.getBoundingClientRect(),x=n.getBoundingClientRect(),A=this.view?.getComputedStyle(t).direction===`rtl`?k.right-x.right:x.left-k.left;Go(t,{"--preview-cover-start":`${A}px`,"--preview-cover-width":`${x.width}px`});let B=e.getBoundingClientRect(),pe=this.origin+B.top-x.top+(B.height-x.height)/2;this.distance=Math.max(0,Math.min(o,pe))-this.origin}if(Math.abs(this.distance)<.5&&c===0)return;let p=this.previewScrollRepeat()?2.8:1.4,ce=p*2+c;this.stopFrame=zr(k=>{this.elapsed+=k;let x=Math.min(1,this.elapsed/p),I=Math.max(0,Math.min(1,(this.elapsed-p-c)/p)),A=this.elapsed<p?(1-Math.cos(x*Math.PI))/2:this.elapsed<p+c?1:(1+Math.cos(I*Math.PI))/2;return t.scrollTop=this.origin+this.distance*A,this.elapsed<ce?!0:(this.stopFrame=void 0,this.played=!0,this.sync(),!1)})}cancel(){this.timer!==void 0&&this.view?.clearTimeout(this.timer),this.timer=void 0,this.stopFrame?.(),this.stopFrame=void 0}static ɵfac=function(e){return new(e||i)};static ɵdir=ue$1({type:i,selectors:[[``,`appPreviewScroll`,``]],inputs:{previewScrollRepeat:[1,`previewScrollRepeat`],previewScrollPaused:[1,`previewScrollPaused`],previewScrollDistance:[1,`previewScrollDistance`],previewScrollTarget:[1,`previewScrollTarget`],previewScrollCover:[1,`previewScrollCover`],previewScrollDwell:[1,`previewScrollDwell`]},exportAs:[`appPreviewScroll`]})};function T(i,t,e,n){let o=`assets/images/appearance/${i}`;return{src:`${o}.webp`,srcset:`${o}-640.webp 640w, ${o}.webp ${t}w`,width:t,height:e,alt:n}}var se=[{id:`preview-shar-mountain`,title:`Šar Mountain`,shortTitle:`Šar`,subtitle:`High peaks, mountain pastures, and rich forests`,paragraphs:[`Šar Mountain is known for its high peaks, mountain pastures, and rich forests.`,`A variety of vegetation spreads everywhere in the areas of this mountain massif. A large number of these plants are used by the inhabitants of these regions for folk medicine.`],photo:T(`shar-mountain`,1200,730,`Snow-dusted peaks and green slopes reflected in a mountain lake on Šar Mountain`),caption:`The mountain landscapes of Šar Mountain.`,detail:{title:`Bogovinje Lake`,paragraphs:[`One of the mountain lakes that adorns Šar Mountain is Bogovinje Lake, known for its crystal-clear waters and stunning reflections of the surrounding peaks.`,`The lake is a popular destination for hikers and nature enthusiasts, offering a peaceful retreat in the heart of the mountains.`],photo:T(`bogovinje-lake`,1200,679,`Bogovinje Lake beneath snow-streaked mountain slopes`),caption:`The quiet waters of Bogovinje Lake beneath the surrounding peaks.`}},{id:`preview-mavrovo`,title:`Mavrovo National Park`,shortTitle:`Mavrovo`,subtitle:`The Korab massif`,paragraphs:[`Korab is the highest mountain in Macedonia, home to the Golem Korab peak standing at 2,764 meters.`,`The mountain is part of the Mavrovo National Park, known for its diverse landscapes and natural beauty.`],photo:T(`korab`,1200,775,`Rocky peaks and open mountain pastures in the Korab massif`),caption:`The high peaks and open pastures of Korab.`,detail:{title:`A landscape shaped by water`,paragraphs:[`Korab has abundant surface watercourses, with several permanent and glacial-fed rivers and streams.`,`The Macedonian side of Korab is home to eight permanent and many occasional glacial lakes, supporting rich ecosystems.`],photo:T(`korab-valley`,1200,715,`A black-and-white panorama of the Korab ridges with small lakes below`),caption:`A wide view across the ridges and lakes of the Korab massif.`}}];var R=(i,t)=>t.id;function ue(i,t){if(i&1&&(Os(0,`p`),XT(1),ba()),i&2){let e=t.$implicit;Ul(),Zy(e)}}function me(i,t){if(i&1&&(Os(0,`p`),XT(1),ba()),i&2){let e=t.$implicit;Ul(),Zy(e)}}function he(i,t){if(i&1&&(Os(0,`section`,12)(1,`div`,9)(2,`p`,10),XT(3),ba(),Os(4,`h3`,29),XT(5),ba(),Yb(6,ue,2,1,`p`,null,xT),ba(),Os(8,`figure`,30),Cy(9,`img`,31),Os(10,`figcaption`),XT(11),ba()(),Os(12,`div`,9)(13,`h4`),XT(14),ba(),Yb(15,me,2,1,`p`,null,xT),ba(),Os(17,`figure`,32),Cy(18,`img`,31),Os(19,`figcaption`),XT(20),ba()()()),i&2){let e=t.$implicit;fa(`id`,e.id),Ro(`aria-labelledby`,e.id+`-title`),Ul(3),Zy(e.subtitle),Ul(),fa(`id`,e.id+`-title`),Ul(),Zy(e.title),Ul(),Zb(e.paragraphs),Ul(3),fa(`src`,e.photo.src)(`alt`,e.photo.alt)(`width`,e.photo.width)(`height`,e.photo.height),Ro(`srcset`,e.photo.srcset),Ul(2),Zy(e.caption),Ul(3),Zy(e.detail.title),Ul(),Zb(e.detail.paragraphs),Ul(3),fa(`src`,e.detail.photo.src)(`alt`,e.detail.photo.alt)(`width`,e.detail.photo.width)(`height`,e.detail.photo.height),Ro(`srcset`,e.detail.photo.srcset),Ul(2),Zy(e.detail.caption)}}function ve(i,t){if(i&1){let e=Jb();Os(0,`div`,13)(1,`h3`),XT(2,`No places found`),ba(),Os(3,`p`),XT(4,`Try searching for Šar Mountain, Korab, or lakes.`),ba(),Os(5,`button`,33),br(`click`,function(){Jc(e);let o=Ql();return el(o.search.set(``))}),XT(6,`Clear search`),ba()()}}function ge(i,t){i&1&&(Os(0,`span`,21),XT(1,`Find a place`),ba())}function be(i,t){if(i&1){let e=Jb();Os(0,`input`,34,4),br(`input`,function(){Jc(e);let o=CT(1),c=Ql();return el(c.search.set(o.value))}),ba()}if(i&2){let e=Ql();fa(`value`,e.search())}}function we(i,t){if(i&1){let e=Jb();Os(0,`button`,35),br(`click`,function(){Jc(e);let o=Ql();return el(o.paused.set(!o.paused()))}),Cy(1,`bx-icon`,36),ba()}if(i&2){let e=Ql();Ro(`aria-label`,e.paused()?`Play glass preview`:`Pause glass preview`)(`aria-pressed`,e.paused()),Ul(),fa(`name`,e.paused()?`play`:`pause`)}}function ye(i,t){if(i&1){let e=Jb();Os(0,`button`,39),br(`click`,function(){let o=Jc(e).$implicit,c=Ql(2),p=CT(1);return el(c.scrollTo(p,o.id))}),Cy(1,`bx-icon`,40),Os(2,`span`),XT(3),ba()()}if(i&2){let e=t.$implicit;Ul(3),Zy(e.shortTitle)}}function fe(i,t){if(i&1&&(Os(0,`nav`,28)(1,`span`,37),XT(2),ba(),Yb(3,ye,4,1,`button`,38,R),ba()),i&2){let e=Ql();Ul(2),Zy(e.saved()?`Saved to your places`:`Explore Macedonia`),Ul(),Zb(e.parks())}}function _e(i,t){if(i&1){let e=Jb();Os(0,`bx-menu-item`,43),br(`action`,function(){let o=Jc(e).$implicit,c=Ql(2),p=CT(1);return el(c.scrollTo(p,o.id))}),ba()}if(i&2){let e=t.$implicit;fa(`label`,e.title)}}function xe(i,t){if(i&1){let e=Jb();Os(0,`bx-menu`)(1,`bx-menu-item`,41),br(`action`,function(){Jc(e);let o=Ql(),c=CT(1);return el(o.scrollTo(c))}),ba(),Yb(2,_e,1,1,`bx-menu-item`,42,R),ba()}if(i&2){let e=Ql();Ul(2),Zb(e.parks())}}var le=class i{bxA11yService=m(Fr);scrollHint=d4.required(C);search=W(``);saved=W(!1);paused=W(!1);parks=K(()=>{let t=n=>n.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase(),e=t(this.search().trim());return se.filter(n=>t([n.title,n.subtitle,...n.paragraphs,n.detail.title,...n.detail.paragraphs].join(` `)).includes(e))});showcase=ke(!1);stopScrollHint(){this.showcase()||this.scrollHint().stop()}scrollTo(t,e){this.stopScrollHint();let n=e?t.querySelector(`#${e}`):void 0;if(e&&!n)return;let o=n?n.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop-96:0;t.scrollTo({top:Math.max(0,o),behavior:this.bxA11yService.isReducedMotion()?`auto`:`smooth`})}static ɵfac=function(e){return new(e||i)};static ɵcmp=$n({type:i,selectors:[[`app-appearance-preview`]],viewQuery:function(e,n){e&1&&Ly(n.scrollHint,C,5),e&2&&em()},hostAttrs:[`data-bx-light-scope`,``],hostVars:2,hostBindings:function(e,n){e&1&&br(`pointerdown`,function(){return n.stopScrollHint()})(`wheel`,function(){return n.stopScrollHint()})(`keydown`,function(){return n.stopScrollHint()})(`focusin`,function(){return n.stopScrollHint()}),e&2&&Lr(`is-showcase`,n.showcase())},inputs:{showcase:[1,`showcase`]},decls:36,vars:18,consts:[[`reader`,``],[`articleTitle`,``],[`glassBar`,``],[`contents`,``],[`query`,``],[`appPreviewScroll`,``,`role`,`region`,`aria-label`,`Scrollable national parks article`,1,`preview-reader`,3,`previewScrollRepeat`,`previewScrollTarget`,`previewScrollCover`,`previewScrollDwell`,`previewScrollPaused`],[1,`park-article`],[`src`,`assets/images/appearance/mountains-2400.webp`,`srcset`,`
                assets/images/appearance/mountains-640.webp   640w,
                assets/images/appearance/mountains.webp      1200w,
                assets/images/appearance/mountains-2400.webp 2400w
            `,`sizes`,`(max-width: 640px) 150vw, (max-width: 1280px) 90vw, 55vw`,`alt`,`A snow-covered mountain landscape`,`width`,`2400`,`height`,`1643`,`loading`,`eager`,`fetchpriority`,`high`,`decoding`,`async`,1,`article-hero`],[1,`article-copy`,`article-heading`],[1,`article-copy`],[1,`article-eyebrow`],[1,`article-lead`],[1,`park-story`,3,`id`],[`role`,`status`,1,`article-copy`,`empty-search`],[1,`article-copy`,`article-footer`],[`name`,`leaf`,`size`,`16`],[`role`,`group`,`aria-label`,`Nature journal controls`,1,`preview-tools`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Back to the start of the article`,1,`preview-icon-button`,3,`click`],[`name`,`arrow-up`,`size`,`16`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`bxSurfaceInteractive`,``,`bxSurfaceFocusEmission`,`var(--bx-primary)`,1,`preview-search`],[`name`,`search`,`size`,`16`],[1,`preview-query`],[`type`,`search`,`aria-label`,`Search the national parks article`,`placeholder`,`Find a place`,3,`value`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,1,`preview-icon-button`,3,`click`,`color`],[`size`,`16`,3,`name`],[`bx-button`,``,`glassiness`,`auto`,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`aria-label`,`Article contents`,`placement`,`bottom`,1,`preview-icon-button`,3,`bxDropdown`],[`name`,`ellipsis`,`size`,`20`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`glassiness`,`auto`,1,`preview-playback`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`aria-label`,`Places in this article`,1,`preview-navigation`],[3,`id`],[1,`article-photo`],[`sizes`,`(max-width: 640px) 100vw, (max-width: 1280px) 85vw, 55vw`,`loading`,`eager`,`decoding`,`async`,3,`src`,`alt`,`width`,`height`],[1,`article-photo`,`article-detail-photo`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`type`,`search`,`aria-label`,`Search the national parks article`,`placeholder`,`Find a place`,3,`input`,`value`],[`bx-button`,``,`type`,`button`,`variant`,`icon`,`color`,`grayscale`,`glassiness`,`auto`,1,`preview-playback`,3,`click`],[`size`,`18`,3,`name`],[`bxTruncate`,``,`role`,`status`,1,`preview-saved-status`],[`type`,`button`],[`type`,`button`,3,`click`],[`name`,`mountain`,`size`,`16`],[`label`,`Back to the top`,`icon`,`arrow-up`,3,`action`],[`icon`,`mountain`,3,`label`],[`icon`,`mountain`,3,`action`,`label`]],template:function(e,n){if(e&1){let o=Jb();Os(0,`div`,5,0)(2,`article`,6),Cy(3,`img`,7),Os(4,`header`,8)(5,`h2`,null,1),XT(7,`National Parks`),ba()(),Os(8,`div`,9)(9,`p`,10),XT(10,`Discover Macedonia`),ba(),Os(11,`p`,11),XT(12,`Explore the natural beauty of Macedonia through the power of photography.`),ba()(),Yb(13,he,21,18,`section`,12,R,!1,ve,7,0,`div`,13),Os(16,`footer`,14),Cy(17,`bx-icon`,15),Os(18,`span`),XT(19,`Leave the trails as beautiful as you found them.`),ba()()()(),Os(20,`div`,16)(21,`button`,17),br(`click`,function(){Jc(o);let p=CT(1);return el(n.scrollTo(p))}),Cy(22,`bx-icon`,18),ba(),Os(23,`div`,19,2),Cy(25,`bx-icon`,20),bT(26,ge,2,0,`span`,21)(27,be,2,1,`input`,22),ba(),Os(28,`button`,23),br(`click`,function(){return n.saved.set(!n.saved())}),Cy(29,`bx-icon`,24),ba(),Os(30,`button`,25),Cy(31,`bx-icon`,26),ba()(),bT(32,we,2,3,`button`,27)(33,fe,5,1,`nav`,28),Ey(34,xe,4,0,`ng-template`,null,3,y1)}if(e&2){let o=CT(6),c=CT(24),p=CT(35);fa(`previewScrollRepeat`,n.showcase())(`previewScrollTarget`,n.showcase()?o:null)(`previewScrollCover`,n.showcase()?c:null)(`previewScrollDwell`,n.showcase()?2400:0)(`previewScrollPaused`,n.paused()),Ro(`tabindex`,n.showcase()?null:0)(`aria-hidden`,n.showcase()?!0:null)(`inert`,n.showcase()?``:null),Ul(13),Zb(n.parks()),Ul(7),Ro(`inert`,n.showcase()?``:null)(`aria-hidden`,n.showcase()?!0:null),Ul(6),gT(n.showcase()?26:27),Ul(2),fa(`color`,n.saved()?`primary`:`grayscale`),Ro(`aria-pressed`,n.saved())(`aria-label`,n.saved()?`Remove article from saved places`:`Save article to your places`),Ul(),fa(`name`,n.saved()?`bookmark-check`:`bookmark`),Ul(),fa(`bxDropdown`,p),Ul(2),gT(n.showcase()?32:33)}},dependencies:[RD,fe$1,U,As,qi,Wi,ct,C],styles:[`
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