import{t as F}from"./chunk-B42Tvkqt.js";import{t as S}from"./chunk-DQ57v1lq.js";import{t as n}from"./chunk-BDrlE4OR.js";import{f as Tn,i,l as $n,m as at$1,r as e,u as Bn,v as it$1}from"./main-B5BGPZDX.js";import{a as b,i as W,o as f}from"./chunk-Cb7n2Fk0.js";import{i as Z,l as j,n as L,o as ee$1,t as J,u as ne}from"./chunk-DMISDq0g.js";import{A as po,C as Zo,D as jo,E as jn,L as xe,M as qo,P as sa,_ as Uo,a as At$1,c as Go,h as Qo,k as na,l as He,n as $n$1,o as Bo,p as Pt$1,r as $o,u as Ho,w as ee$2,x as Yo}from"./chunk-HfEiycvf.js";import{$ as qs,D as Yi,F as cn,G as js,H as il,I as ct$1,J as nl,K as ll,M as Zs,N as al,O as Ys,P as cl,Q as qi,T as Xs,U as ji,W as jn$1,Y as ol,Z as pl,_ as Ls,a as Bn$1,c as Fn,et as rl,f as Hs,h as Ks,i as As,it as zs,j as Zi,l as Gi,n as $s,nt as st$1,o as Bs,q as ln,rt as zn,s as Et$1,t as $i,tt as sl,u as Gs,v as Pt$2,x as Ui}from"./chunk-DyZGtlM9.js";import{$a as tr,$n as YC,C as Br,Ci as ik,Cn as TA,Cr as b$1,Dn as U,Fa as rd,Fo as yA,Gn as Wy,Ha as sd,Hi as lb,Ia as re,It as MZ,K as Fr,Kr as ed,La as rr,Li as ka,Lr as db,Oi as jT,On as UC,Or as bo,Qi as mM,Qr as fd,Ri as ke,Rr as dd,Sa as pb,Sr as al$1,Ua as sk,Va as sb,Vo as z,Xa as td,Ya as tb,Yr as er,ba as pM,c as $o$1,cr as _1,et as Go$1,fa as oZ,fi as he,go as vo,gr as aZ,ha as od,ho as vU,ia as nb,ja as qs$1,jt as M0,kr as br,mi as ht$1,mr as aA,nt as Gy,oa as ni$1,p as $y,pa as ob,pt as IT,ti as fr,u as $s$1,w as By,wi as il$1,x as Bk,xa as pN,xi as ie$1,yn as Sh,zi as kz}from"./chunk-DflWScik.js";var tt=[`*`];var ee=class e{nativeElement=b$1(ke).nativeElement;destroyRef=b$1(he);availableWidth=z(0);availableHeight=z(0);scale=U(()=>Math.min(1,this.availableWidth()/this.width(),this.availableHeight()/this.height()));viewportWidth=U(()=>this.fill()&&this.scale()>0?this.availableWidth()/this.scale():this.width());viewportHeight=U(()=>this.fill()&&this.scale()>0?this.availableHeight()/this.scale():this.height());fill=re(!1);width=re(480);height=re(320);constructor(){er(()=>{let t=()=>{this.availableWidth.set(this.nativeElement.clientWidth),this.availableHeight.set(this.nativeElement.clientHeight)},n=new ResizeObserver(t);n.observe(this.nativeElement),t(),this.destroyRef.onDestroy(()=>n.disconnect())})}static ɵfac=function(n){return new(n||e)};static ɵcmp=Fr({type:e,selectors:[[`app-preview-frame`]],inputs:{fill:[1,`fill`],width:[1,`width`],height:[1,`height`]},ngContentSelectors:tt,decls:2,vars:6,consts:[[1,`preview-frame-viewport`]],template:function(n,l){n&1&&($y(),rd(0,`div`,0),Gy(1),od()),n&2&&ka(`inline-size`,l.viewportWidth(),`px`)(`block-size`,l.viewportHeight(),`px`)(`transform`,`translate(-50%, -50%) scale(`+l.scale()+`)`)},styles:[`
[_nghost-%COMP%] {
  --%NS%bx-modal-side-height: 100%;
  display: block;
  position: absolute;
  inset: 0;
  min-inline-size: 0;
  min-block-size: 0;
  overflow: clip;
}
.preview-frame-viewport[_ngcontent-%COMP%] {
  position: absolute;
  left: 50%;
  inset-block-start: 50%;
  transform-origin: center;
  contain: layout paint;
  isolation: isolate;
  overflow: clip;
  box-sizing: border-box;
}`]})};var it=[`source`];var ie=class e{nativeElement=b$1(ke).nativeElement;destroyRef=b$1(he);themingService=b$1(ni$1);source=kz.required(`source`);lightingTarget=z(void 0);scene;constructor(){Bk(()=>{this.themingService.activeTheme(),this.themingService.palette(),this.themingService.appearance(),this.scene?.refresh()}),er(()=>{let t=this.nativeElement.closest(`article`)??this.nativeElement;this.lightingTarget.set(t);let n=Sh(this.nativeElement);this.scene=n;let l=()=>{let f=this.source().nativeElement.getBoundingClientRect(),M=t.getBoundingClientRect();n.update({lights:[{element:t,offsetX:M.width?(f.left+f.width/2-M.left)/M.width:.8,offsetY:M.height?(f.top+f.height/2-M.top)/M.height:.2,color:`var(--bx-accent)`,intensity:1.4,radius:320,z:100}]})},s=new ResizeObserver(l);s.observe(this.nativeElement),l(),this.destroyRef.onDestroy(()=>{s.disconnect(),n.destroy()})})}static ɵfac=function(n){return new(n||e)};static ɵcmp=Fr({type:e,selectors:[[`app-surface-preview`]],viewQuery:function(n,l){n&1&&Wy(l.source,it,5),n&2&&db()},decls:6,vars:3,consts:[[`source`,``],[1,`surface-copy`],[1,`surface-light`],[`name`,`sun`,`size`,`20`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,1,`surface-pane`,3,`bxSurfaceLocalRefraction`,`bxSurfaceLightingTarget`,`bxSurfaceInteractive`]],template:function(n,l){n&1&&(bo(0,`strong`,1),aA(1,`Glass.`),Go$1(),bo(2,`span`,2,0),td(4,`bx-icon`,3),Go$1(),td(5,`div`,4)),n&2&&(qs$1(5),$o$1(`bxSurfaceLocalRefraction`,!0)(`bxSurfaceLightingTarget`,l.lightingTarget())(`bxSurfaceInteractive`,!1))},dependencies:[UC,YC],styles:[`
[_nghost-%COMP%] {
  display: grid;
  position: absolute;
  inset: 0;
  place-items: center;
  inline-size: 100%;
  block-size: 100%;
  min-inline-size: 0;
  isolation: isolate;
}
.surface-copy[_ngcontent-%COMP%] {
  font-size: clamp(3.5rem, 6vw, 5rem);
  font-weight: 700;
  color: var(--%NS%bx-text-heading);
  letter-spacing: -0.06em;
}
.surface-light[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-start: var(--%NS%bx-space-2, 0.5rem);
  inset-inline-end: var(--%NS%bx-space-4, 1rem);
  color: var(--%NS%bx-accent);
}
.surface-pane[_ngcontent-%COMP%] {
  position: absolute;
  inline-size: min(80%, 15rem);
  block-size: calc(var(--%NS%bx-space-8, 2rem) * 2);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  transform: translateY(var(--%NS%bx-space-2, 0.5rem)) rotate(-8deg);
}`]})};function Qn(){return new b({data:{title:`Saved`,message:`Your changes are ready.`,type:`success`,icon:{name:`circle-check`}},animate:!1,durationInMs:0,swipeToDismiss:!1,showProgressBar:!1,showCloseButton:!0})}var ot=[`content`];var oe=class e{environmentInjector=b$1(ht$1);injector=b$1(ie$1);toastRef=b$1(b);content=kz.required(`content`,{read:fr});core=re(!1);data=re();duration=re(0);progress=re(!1);progressColor=re(`text-info`);constructor(){er(()=>{this.toastRef.patch({data:this.data(),durationInMs:this.duration(),showProgressBar:this.progress(),progressBarColor:this.progressColor()}),this.toastRef.pause();let t=this.content();if(!this.core()){t.createComponent(f);return}let n=fd(f,{environmentInjector:this.environmentInjector,elementInjector:this.injector}),l=t.createComponent(W);l.instance.componentRef=n,l.instance.isVisible.set(!0)})}static ɵfac=function(n){return new(n||e)};static ɵcmp=Fr({type:e,selectors:[[`app-toast-preview`]],viewQuery:function(n,l){n&1&&Wy(l.content,ot,5,fr),n&2&&db()},inputs:{core:[1,`core`],data:[1,`data`],duration:[1,`duration`],progress:[1,`progress`],progressColor:[1,`progressColor`]},features:[rr([{provide:b,useFactory:Qn}])],decls:2,vars:0,consts:[[`content`,``]],template:function(n,l){n&1&&By(0,null,0)},styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 24rem;
  max-inline-size: 100%;
  min-inline-size: 0;
}
[_nghost-%COMP%]     bx-toast-core .toast-animator {
  margin-block: 0;
}`]})};var Un={isReducedMotion:z(!0).asReadonly()};function m(e,t={}){return{component:e,inputs:t}}var Xn={alert:m(js,{tone:`success`,title:`Saved`,message:`Your changes are ready.`,emissive:!0}),autocomplete:m(Qo,{label:`City`,value:`Berlin`,subscriptSizing:`dynamic`,options:[{value:`Berlin`},{value:`Bern`},{value:`Bergen`}]}),breadcrumbs:m(Tn,{items:[{label:`Home`,route:`/`},{label:`Components`,route:`/components`},{label:`Button`,route:`/components/button`}]}),calendar:m(pl,{viewDate:`2026-02-01`,value:`2026-02-21`,locale:`en-GB`,fixedWeeks:!1,showToday:!1,showTodayButton:!1}),"date-picker":m(na,{label:`Due date`,value:`2026-04-21`,locale:`en-GB`,subscriptSizing:`dynamic`}),field:m(Bo,{label:`Project name`,value:`Blocks library`,hint:`Shown in the workspace switcher`}),"field-hint":m(Bo,{label:`Reference`,value:`PR-1042`,hint:`Your public reference`,hintEnd:`Optional`}),"input-field":m(Bo,{label:`Project name`,floatLabel:`always`,value:`Blocks library`,hint:`Shown in the workspace switcher`}),loading:m(Et$1,{size:40,decorative:!0}),"loading-indicator":m(Zi,{label:`Fetching results…`}),multiselect:m(Zo,{label:`Teams`,subscriptSizing:`dynamic`,value:[`design`,`forms`],options:[{label:`Design`,value:`design`},{label:`Forms`,value:`forms`},{label:`Icons`,value:`icons`}]}),"range-slider":m(Yo,{value:[20,80],min:0,max:100,discrete:!0}),search:m(At$1,{ariaLabel:`Search components`,placeholder:`Search components`,subscriptSizing:`dynamic`}),select:m(jn,{label:`Color`,value:`accent`,subscriptSizing:`dynamic`,options:[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Success`,value:`success`}]}),time:m(sa,{label:`Meeting time`,value:`10:45`,hourCycle:24,subscriptSizing:`dynamic`}),tooltip:m(Ui,{text:`Saves this project`})};var at=()=>[1,2,3,4,5,6];var rt=()=>[`mod`,`shift`,`v`];var lt=()=>({name:`info`});var pt=e=>({text:`Project information`,icon:e});var ct=()=>({layout:`list`,estimatedRowHeight:44,overscan:100});function st(e,t){e&1&&sd(0)}function dt(e,t){if(e&1&&(bo(0,`div`,13),ed(1,st,1,0,`ng-container`,14),Go$1()),e&2){let n=t,l=$s$1();tr(`preview-centered`,l.kind()===`loading`)(`preview-calendar`,l.kind()===`calendar`)(`preview-tooltip`,l.kind()===`tooltip`)(`bx-overlay-pos-top`,l.kind()===`tooltip`),qs$1(),$o$1(`ngComponentOutlet`,n.component)(`ngComponentOutletInputs`,n.inputs)}}function mt(e,t){e&1&&(bo(0,`bx-accordion`,15)(1,`bx-accordion-item`,51)(2,`p`),aA(3,`Project settings and shared preferences.`),Go$1()(),td(4,`bx-accordion-item`,52)(5,`bx-accordion-item`,53),Go$1()),e&2&&($o$1(`multiple`,!0),qs$1(),$o$1(`expanded`,!0))}function ut(e,t){e&1&&(bo(0,`div`,16)(1,`button`,54),aA(2,`Save`),Go$1(),bo(3,`button`,55),aA(4,`Cancel`),Go$1(),bo(5,`button`,56),td(6,`bx-icon`,57),Go$1()())}function vt(e,t){e&1&&(bo(0,`bx-card`,17)(1,`p`),aA(2,`Shared components for your next workspace.`),Go$1(),bo(3,`div`,58)(4,`button`,59),aA(5,`Open`),Go$1()()())}function gt(e,t){e&1&&(bo(0,`div`,18),td(1,`bx-checkbox`,60)(2,`bx-checkbox`,61)(3,`bx-checkbox`,62),Go$1()),e&2&&(qs$1(),$o$1(`checked`,!0),qs$1(),$o$1(`checked`,!0),qs$1(),$o$1(`indeterminate`,!0))}function bt(e,t){e&1&&(bo(0,`div`,19)(1,`span`,63),td(2,`bx-checkbox-indicator`,64),bo(3,`span`),aA(4,`On`),Go$1()(),bo(5,`span`,63),td(6,`bx-checkbox-indicator`,65),bo(7,`span`),aA(8,`Some`),Go$1()(),bo(9,`span`,63),td(10,`bx-checkbox-indicator`,64),bo(11,`span`),aA(12,`Off`),Go$1()()()),e&2&&(qs$1(2),$o$1(`checked`,!0),qs$1(4),$o$1(`indeterminate`,!0),qs$1(4),$o$1(`checked`,!1))}function ft(e,t){e&1&&(bo(0,`div`,20),td(1,`bx-chip`,66)(2,`bx-chip`,67)(3,`bx-chip`,68)(4,`bx-chip`,69),Go$1()),e&2&&(qs$1(),$o$1(`selected`,!0),qs$1(),$o$1(`removable`,!0))}function xt(e,t){e&1&&(bo(0,`bx-container`,21)(1,`bx-card`,70)(2,`p`),aA(3,`Responsive page gutters.`),Go$1()()())}function yt(e,t){e&1&&(bo(0,`bx-menu`),td(1,`bx-menu-item`,71)(2,`bx-menu-item`,72),Go$1())}function _t(e,t){if(e&1&&(bo(0,`div`,22)(1,`bx-menu`),td(2,`bx-menu-item`,71)(3,`bx-menu-item`,72)(4,`bx-menu-item`,73),Go$1(),ed(5,yt,3,0,`ng-template`,null,6,TA),Go$1()),e&2){let n=jT(6);$o$1(`bxContextMenu`,n)}}function wt(e,t){e&1&&(bo(0,`bx-collapsible`,23)(1,`p`),aA(2,`Shared components for your workspace.`),Go$1()()),e&2&&$o$1(`expanded`,!0)(`headingLevel`,3)}function Ct(e,t){e&1&&(bo(0,`div`,24)(1,`span`,74),aA(2,`Contact 1`),Go$1(),td(3,`bx-divider`,75),bo(4,`span`,74),aA(5,`Contact 2`),Go$1(),td(6,`bx-divider`,75),bo(7,`span`,74),aA(8,`Contact 3`),Go$1()()),e&2&&(qs$1(3),$o$1(`decorative`,!0),qs$1(3),$o$1(`decorative`,!0))}function ht(e,t){e&1&&(bo(0,`app-preview-frame`,25)(1,`div`,76)(2,`bx-bottom-drawer`,77),td(3,`bx-checkbox`,78),bo(4,`div`,79)(5,`button`,59),aA(6,`Reset`),Go$1(),bo(7,`button`,54),aA(8,`Apply`),Go$1()()()()()),e&2&&($o$1(`width`,480)(`height`,320)(`fill`,!0),qs$1(2),$o$1(`embedded`,!0)(`open`,!0)(`modal`,!1)(`showBackdrop`,!1)(`animationDuration`,0),qs$1(),$o$1(`checked`,!0))}function St(e,t){e&1&&(bo(0,`bx-menu`),td(1,`bx-menu-item`,82)(2,`bx-menu-item`,83),Go$1()),e&2&&(qs$1(2),$o$1(`danger`,!0))}function Pt(e,t){if(e&1&&(bo(0,`div`,26)(1,`button`,80),aA(2,`Actions`),td(3,`bx-icon`,81),Go$1(),bo(4,`bx-menu`),td(5,`bx-menu-item`,82)(6,`bx-menu-item`,83),Go$1(),ed(7,St,3,1,`ng-template`,null,7,TA),Go$1()),e&2){let n=jT(8);qs$1(),$o$1(`bxDropdown`,n),qs$1(5),$o$1(`danger`,!0)}}function Mt(e,t){if(e&1&&(bo(0,`bx-form-field`,27),td(1,`input`,84),Go$1()),e&2){let n=$s$1(2);$o$1(`forId`,n.previewId+`-error`),qs$1(),$o$1(`id`,n.previewId+`-error`)}}function Et(e,t){e&1&&(bo(0,`div`,28)(1,`strong`,85),aA(2,`Create workspace`),Go$1(),td(3,`bx-input-field`,86)(4,`bx-input-field`,87),bo(5,`div`,88)(6,`button`,55),aA(7,`Cancel`),Go$1(),bo(8,`button`,54),aA(9,`Create`),Go$1()()())}function kt(e,t){if(e&1&&(bo(0,`bx-card`,89),aA(1),Go$1()),e&2){let n=t.$implicit;qs$1(),sk(n)}}function Tt(e,t){e&1&&(bo(0,`bx-grid`,29),nb(1,kt,2,1,`bx-card`,89,IT),Go$1()),e&2&&($o$1(`columns`,3)(`gap`,2),qs$1(),sb(yA(2,at)))}function zt(e,t){e&1&&(bo(0,`div`,30),td(1,`bx-icon`,90),Go$1())}function Ot(e,t){e&1&&(bo(0,`app-preview-frame`,31)(1,`bx-page-container`,91),td(2,`bx-page-header`,92),bo(3,`bx-page-content`)(4,`bx-grid`,93)(5,`bx-card`),aA(6,`Design`),Go$1(),bo(7,`bx-card`),aA(8,`Engineering`),Go$1()()(),bo(9,`bx-page-footer`),aA(10,`Updated today`),Go$1()()()),e&2&&($o$1(`width`,520)(`height`,320),qs$1(),$o$1(`showBreadcrumbs`,!1)(`autoResolveTitlesFromNavigation`,!1),qs$1(),$o$1(`autoResolveTitlesFromNavigation`,!1),qs$1(2),$o$1(`columns`,2)(`gap`,2))}function Nt(e,t){if(e&1&&(bo(0,`div`,94),td(1,`bx-icon`,95),bo(2,`span`),aA(3),Go$1()()),e&2){let n=t.$implicit;qs$1(3),sk(n)}}function Dt(e,t){if(e&1&&(bo(0,`div`,32),nb(1,Nt,4,1,`div`,94,IT),Go$1()),e&2){let n=$s$1(2);$o$1(`infiniteScrollDisabled`,!0),qs$1(),sb(n.sampleRows)}}function It(e,t){if(e&1&&(bo(0,`div`,94),td(1,`bx-icon`,95),bo(2,`span`),aA(3),Go$1()()),e&2){let n=t.$implicit;qs$1(3),sk(n)}}function Rt(e,t){if(e&1&&(bo(0,`div`,33),nb(1,It,4,1,`div`,94,IT),Go$1()),e&2){let n=$s$1(2);$o$1(`loadMoreHasMore`,!0)(`loadMoreRevision`,n.sampleRows),qs$1(),sb(n.sampleRows.slice(0,2))}}function Bt(e,t){e&1&&(bo(0,`button`,34),td(1,`bx-icon`,96),aA(2,`Save changes`),Go$1()),e&2&&$o$1(`loading`,!0)}function Ft(e,t){e&1&&(bo(0,`bx-menu`),td(1,`bx-menu-item`,97)(2,`bx-menu-item`,98)(3,`bx-menu-item`,99),Go$1())}function At(e,t){e&1&&(bo(0,`bx-menu`),td(1,`bx-menu-item`,100),Go$1()),e&2&&(qs$1(),$o$1(`shortcut`,yA(1,rt)))}function Lt(e,t){if(e&1&&(bo(0,`app-preview-frame`,31)(1,`bx-modal-centered`,101),td(2,`bx-input-field`,102),Go$1()()),e&2){let n=$s$1(2),l=jT(3);$o$1(`width`,480)(`height`,320),qs$1(),$o$1(`config`,n.modalConfig)(`id`,n.previewId)(`isOpen`,!0)(`isAnimated`,!1)(`animationDuration`,0)(`isBottomSheetModalActive`,!1)(`hasDefaultContentWrapperClass`,!0)(`headerTemplate`,null)(`footerTemplate`,l)(`hasBanner`,!0)}}function Wt(e,t){e&1&&(bo(0,`app-preview-frame`,35)(1,`div`,103)(2,`h3`),aA(3,`Workspace`),Go$1(),bo(4,`p`),aA(5,`Project overview`),Go$1(),bo(6,`bx-grid`,93)(7,`bx-card`),aA(8,`Design`),Go$1(),bo(9,`bx-card`),aA(10,`Engineering`),Go$1()()(),td(11,`bx-modal-backdrop`,104),Go$1()),e&2&&($o$1(`width`,480)(`height`,320)(`fill`,!0),qs$1(6),$o$1(`columns`,2)(`gap`,3),qs$1(5),$o$1(`isOpen`,!0)(`isAnimated`,!1))}function jt(e,t){e&1&&(bo(0,`app-preview-frame`,31)(1,`div`,105),td(2,`bx-modal-banner`,106),Go$1()()),e&2&&($o$1(`width`,480)(`height`,220),qs$1(2),$o$1(`header`,pb(5,pt,yA(4,lt)))(`showCloseButton`,!0))}function Ht(e,t){if(e&1&&(bo(0,`app-preview-frame`,31)(1,`bx-modal-centered`,101)(2,`p`),aA(3,`This draft has unsaved changes.`),Go$1()()()),e&2){let n=$s$1(2),l=jT(5);$o$1(`width`,480)(`height`,320),qs$1(),$o$1(`config`,n.confirmConfig)(`id`,n.previewId)(`isOpen`,!0)(`isAnimated`,!1)(`animationDuration`,0)(`isBottomSheetModalActive`,!1)(`hasDefaultContentWrapperClass`,!0)(`headerTemplate`,null)(`footerTemplate`,l)(`hasBanner`,!0)}}function Vt(e,t){if(e&1&&(bo(0,`app-preview-frame`,31)(1,`bx-modal-centered`,101)(2,`h3`),aA(3,`Review changes`),Go$1(),bo(4,`p`),aA(5,`Your workspace settings are ready.`),Go$1()()()),e&2){let n=$s$1(2),l=jT(7);$o$1(`width`,480)(`height`,240),qs$1(),$o$1(`config`,n.modalConfig)(`id`,n.previewId)(`isOpen`,!0)(`isAnimated`,!1)(`animationDuration`,0)(`isBottomSheetModalActive`,!1)(`hasDefaultContentWrapperClass`,!0)(`headerTemplate`,null)(`footerTemplate`,l)(`hasBanner`,!1)}}function Gt(e,t){if(e&1&&(bo(0,`app-preview-frame`,31)(1,`bx-modal-centered`,101)(2,`p`),aA(3,`Choose who can access this workspace.`),Go$1()()()),e&2){let n=$s$1(2),l=jT(9);$o$1(`width`,480)(`height`,260),qs$1(),$o$1(`config`,n.modalConfig)(`id`,n.previewId)(`isOpen`,!0)(`isAnimated`,!1)(`animationDuration`,0)(`isBottomSheetModalActive`,!1)(`hasDefaultContentWrapperClass`,!0)(`headerTemplate`,l)(`footerTemplate`,null)(`hasBanner`,!1)}}function Kt(e,t){if(e&1&&(bo(0,`app-preview-frame`,25)(1,`bx-modal-bottom-sheet`,107)(2,`bx-stack`,108)(3,`button`,59),td(4,`bx-icon`,109),aA(5,`Share`),Go$1(),bo(6,`button`,59),td(7,`bx-icon`,110),aA(8,`Copy link`),Go$1()()()()),e&2){let n=$s$1(2),l=jT(13);$o$1(`width`,480)(`height`,320)(`fill`,!0),qs$1(),$o$1(`config`,n.sheetConfig)(`id`,n.previewId)(`isOpen`,!0)(`isAnimated`,!1)(`animationDuration`,0)(`headerTemplate`,null)(`footerTemplate`,l)(`hasBanner`,!0),qs$1(),$o$1(`gap`,3)}}function $t(e,t){if(e&1&&(bo(0,`app-preview-frame`,25)(1,`bx-modal-side`,111)(2,`bx-stack`,112)(3,`strong`),aA(4,`Alex Morgan`),Go$1(),td(5,`bx-tag`,113),bo(6,`p`),aA(7,`Manage this member's access and permissions.`),Go$1()()()()),e&2){let n=$s$1(2),l=jT(11);$o$1(`width`,480)(`height`,320)(`fill`,!0),qs$1(),$o$1(`config`,n.sideConfig)(`id`,n.previewId)(`isOpen`,!0)(`isAnimated`,!1)(`animationDuration`,0)(`isBottomSheetModalActive`,!1)(`hasDefaultContentWrapperClass`,!0)(`headerTemplate`,null)(`footerTemplate`,l)(`hasBanner`,!0),qs$1(),$o$1(`gap`,4)}}function qt(e,t){e&1&&(bo(0,`app-preview-frame`,25)(1,`bx-side-panel-layout`,40)(2,`bx-side-panel`,114)(3,`h3`,115),aA(4,`Inspector`),Go$1(),bo(5,`bx-stack`,112)(6,`p`),aA(7,`Selected project`),Go$1(),td(8,`bx-tag`,116),bo(9,`p`),aA(10,`Workspace settings and details.`),Go$1()()(),bo(11,`div`,103),aA(12,`Workspace`),Go$1()()()),e&2&&($o$1(`width`,480)(`height`,320)(`fill`,!0),qs$1(2),$o$1(`open`,!0)(`width`,300)(`autoFocus`,!1)(`restoreFocus`,!1)(`closeOnEscape`,!1)(`animationDuration`,0),qs$1(3),$o$1(`gap`,4))}function Yt(e,t){e&1&&(bo(0,`bx-popover`,36)(1,`strong`),aA(2,`Project information`),Go$1(),bo(3,`p`),aA(4,`Project information and preferences.`),Go$1(),bo(5,`div`,88)(6,`button`,59),aA(7,`Open`),Go$1()()())}function Qt(e,t){e&1&&(bo(0,`bx-input-field`,37)(1,`span`,117),aA(2,`$`),Go$1()())}function Ut(e,t){e&1&&(bo(0,`div`,38),td(1,`bx-progress-bar`,118)(2,`bx-progress-bar`,119),Go$1()),e&2&&(qs$1(),$o$1(`value`,64),qs$1(),$o$1(`value`,32))}function Xt(e,t){e&1&&(bo(0,`div`,39)(1,`bx-radio-group`,120),td(2,`bx-radio`,121),Go$1()())}function Jt(e,t){e&1&&(bo(0,`div`,39)(1,`bx-radio-group`,122),td(2,`bx-radio`,123)(3,`bx-radio`,124)(4,`bx-radio`,125),Go$1()())}function Zt(e,t){if(e&1&&(bo(0,`app-preview-frame`,25)(1,`div`,126,8)(3,`section`,127,9)(5,`h3`),aA(6,`Files`),Go$1(),bo(7,`p`),aA(8,`Components`),Go$1(),bo(9,`p`),aA(10,`Styles`),Go$1(),bo(11,`p`),aA(12,`Assets`),Go$1()(),td(13,`div`,128),bo(14,`section`,129)(15,`h3`),aA(16,`Preview`),Go$1(),td(17,`bx-icon`,130),bo(18,`p`),aA(19,`Shared workspace`),Go$1()()()()),e&2){let n=jT(2),l=jT(4),s=$s$1(2);$o$1(`width`,480)(`height`,320)(`fill`,!0),qs$1(3),ka(`inline-size`,s.resizePreviewWidth,`px`),qs$1(10),ka(`inset-inline-start`,s.resizePreviewWidth,`px`),$o$1(`resizeTarget`,l)(`resizeContainer`,n)(`resizeValue`,s.resizePreviewWidth)(`resizeMinSize`,120)(`resizeMaxSize`,320)(`resizeIdleDelay`,0)(`resizeDisableShrink`,!1)}}function ei(e,t){if(e&1&&(bo(0,`div`,40),td(1,`bx-side-nav`,131),Go$1()),e&2){let n=$s$1(2);qs$1(),$o$1(`config`,n.sideNavConfig)(`groups`,n.navigationGroups)}}function ni(e,t){if(e&1&&(bo(0,`app-preview-frame`,31)(1,`div`,132),td(2,`app-toast-preview`,133),Go$1()()),e&2){let n=$s$1(2);$o$1(`width`,440)(`height`,220),qs$1(2),$o$1(`core`,!0)(`data`,n.savedToast)}}function ti(e,t){e&1&&(bo(0,`div`,41)(1,`div`,134),td(2,`bx-skeleton`,135),Go$1(),td(3,`bx-skeleton`,136),Go$1()),e&2&&(qs$1(2),$o$1(`animated`,!1),qs$1(),$o$1(`lines`,3)(`animated`,!1))}function ii(e,t){e&1&&(bo(0,`div`,42),td(1,`input`,137),bo(2,`span`,138)(3,`span`),aA(4,`Volume`),Go$1(),bo(5,`span`),aA(6,`64%`),Go$1()()()),e&2&&(qs$1(),$o$1(`value`,64))}function oi(e,t){e&1&&(bo(0,`bx-stack`,43)(1,`bx-card`),aA(2,`Design`),Go$1(),bo(3,`bx-card`),aA(4,`Engineering`),Go$1(),bo(5,`bx-card`),aA(6,`Research`),Go$1()()),e&2&&$o$1(`gap`,2)}function ai(e,t){if(e&1&&td(0,`bx-stepper`,44),e&2){let n=$s$1(2);$o$1(`steps`,n.gallerySteps)(`linear`,!1)}}function ri(e,t){e&1&&(bo(0,`bx-input-field`,45)(1,`span`,139),aA(2,`kg`),Go$1()())}function li(e,t){e&1&&td(0,`app-surface-preview`)}function pi(e,t){e&1&&(bo(0,`bx-tabs`,46)(1,`bx-tab`,140)(2,`p`),aA(3,`Project overview`),Go$1()(),bo(4,`bx-tab`,141)(5,`p`),aA(6,`Recent activity`),Go$1()(),bo(7,`bx-tab`,142)(8,`p`),aA(9,`Project settings`),Go$1()()()),e&2&&$o$1(`dragSelection`,!1)}function ci(e,t){e&1&&(bo(0,`div`,20),td(1,`bx-tag`,143)(2,`bx-tag`,144)(3,`bx-tag`,145),Go$1()),e&2&&(qs$1(),$o$1(`focusable`,!1),qs$1(),$o$1(`focusable`,!1),qs$1(),$o$1(`focusable`,!1))}function si(e,t){if(e&1&&(bo(0,`bx-form-field`,47)(1,`textarea`,146),aA(2,`Ship the catalog refinements.`),Go$1()()),e&2){let n=$s$1(2);$o$1(`forId`,n.previewId+`-notes`),qs$1(),$o$1(`id`,n.previewId+`-notes`)}}function di(e,t){if(e&1&&(bo(0,`app-preview-frame`,31)(1,`div`,132)(2,`bx-stack`,112),td(3,`app-toast-preview`,147)(4,`app-toast-preview`,133),Go$1()()()),e&2){let n=$s$1(2);$o$1(`width`,440)(`height`,280),qs$1(2),$o$1(`gap`,3),qs$1(),$o$1(`core`,!0)(`data`,n.uploadToast)(`duration`,6e3)(`progress`,!0),qs$1(),$o$1(`core`,!0)(`data`,n.connectionToast)}}function mi(e,t){e&1&&(bo(0,`div`,18),td(1,`bx-slide-toggle`,148)(2,`bx-slide-toggle`,149),Go$1()),e&2&&(qs$1(),$o$1(`checked`,!0),qs$1(),$o$1(`checked`,!1))}function ui(e,t){e&1&&(bo(0,`div`,48),td(1,`bx-tooltip`,150),bo(2,`button`,151),aA(3,`Save`),Go$1()())}function vi(e,t){e&1&&td(0,`bx-icon`,153)}function gi(e,t){if(e&1&&(bo(0,`div`,49)(1,`bx-top-nav`,131),ed(2,vi,1,0,`ng-template`,152),Go$1()()),e&2){let n=$s$1(2);qs$1(),$o$1(`config`,n.topNavConfig)(`groups`,n.navigationGroups)}}function bi(e,t){e&1&&(bo(0,`div`,18)(1,`p`),aA(2,`Project notes`),Go$1(),bo(3,`span`,154),aA(4,`Quarterly planning notes for the design team and engineering review`),Go$1()())}function fi(e,t){if(e&1&&(bo(0,`div`,94),td(1,`bx-icon`,95),bo(2,`span`),aA(3),Go$1()()),e&2){let n=t.$implicit;qs$1(3),sk(n)}}function xi(e,t){if(e&1&&(bo(0,`div`,50,10)(2,`bx-virtual-collection`,155,11),ed(4,fi,4,1,`ng-template`,156),Go$1()()),e&2){let n=jT(1),l=jT(3),s=$s$1(2);qs$1(2),$o$1(`items`,s.sampleRows)(`trackBy`,s.trackRow)(`scrollContainer`,n)(`config`,yA(5,ct)),qs$1(2),$o$1(`bxVirtualItem`,l)}}function yi(e,t){e&1&&(bo(0,`div`,30),td(1,`bx-icon`,157),Go$1())}function _i(e,t){if(e&1&&tb(0,mt,6,2,`bx-accordion`,15)(1,ut,7,0,`div`,16)(2,vt,6,0,`bx-card`,17)(3,gt,4,3,`div`,18)(4,bt,13,3,`div`,19)(5,ft,5,2,`div`,20)(6,xt,4,0,`bx-container`,21)(7,_t,7,1,`div`,22)(8,wt,3,2,`bx-collapsible`,23)(9,Ct,9,2,`div`,24)(10,ht,9,9,`app-preview-frame`,25)(11,Pt,9,2,`div`,26)(12,Mt,2,2,`bx-form-field`,27)(13,Et,10,0,`div`,28)(14,Tt,3,3,`bx-grid`,29)(15,zt,2,0,`div`,30)(16,Ot,11,7,`app-preview-frame`,31)(17,Dt,3,1,`div`,32)(18,Rt,3,2,`div`,33)(19,Bt,3,1,`button`,34)(20,Ft,4,0,`bx-menu`)(21,At,2,2,`bx-menu`)(22,Lt,3,12,`app-preview-frame`,31)(23,Wt,12,7,`app-preview-frame`,35)(24,jt,3,7,`app-preview-frame`,31)(25,Ht,4,12,`app-preview-frame`,31)(26,Vt,6,12,`app-preview-frame`,31)(27,Gt,4,12,`app-preview-frame`,31)(28,Kt,9,12,`app-preview-frame`,25)(29,$t,8,14,`app-preview-frame`,25)(30,qt,13,10,`app-preview-frame`,25)(31,Yt,8,0,`bx-popover`,36)(32,Qt,3,0,`bx-input-field`,37)(33,Ut,3,2,`div`,38)(34,Xt,3,0,`div`,39)(35,Jt,5,0,`div`,39)(36,Zt,20,14,`app-preview-frame`,25)(37,ei,2,2,`div`,40)(38,ni,3,4,`app-preview-frame`,31)(39,ti,4,3,`div`,41)(40,ii,7,1,`div`,42)(41,oi,7,1,`bx-stack`,43)(42,ai,1,2,`bx-stepper`,44)(43,ri,3,0,`bx-input-field`,45)(44,li,1,0,`app-surface-preview`)(45,pi,10,1,`bx-tabs`,46)(46,ci,4,3,`div`,20)(47,si,3,2,`bx-form-field`,47)(48,di,5,9,`app-preview-frame`,31)(49,mi,3,2,`div`,18)(50,ui,4,0,`div`,48)(51,gi,3,2,`div`,49)(52,bi,5,0,`div`,18)(53,xi,5,6,`div`,50)(54,yi,2,0,`div`,30),e&2){let n,l=$s$1();ob((n=l.kind())===`accordion`?0:n===`button`?1:n===`card`?2:n===`checkbox`?3:n===`checkbox-indicator`?4:n===`chips`?5:n===`container`?6:n===`context-menu`?7:n===`disclosure`?8:n===`divider`?9:n===`drawer`?10:n===`dropdown`?11:n===`error`?12:n===`form`?13:n===`grid`?14:n===`icon`?15:n===`layout`?16:n===`list`?17:n===`load-more`?18:n===`loading-button`?19:n===`menu`?20:n===`menu-item`?21:n===`modal`?22:n===`modal-backdrop`?23:n===`modal-banner`?24:n===`modal-centered`?25:n===`modal-footer`?26:n===`modal-header`?27:n===`modal-sheet`?28:n===`modal-side`?29:n===`panel`?30:n===`popover`?31:n===`prefix`?32:n===`progress`?33:n===`radio`?34:n===`radio-group`?35:n===`resize`?36:n===`side-nav`?37:n===`simple-toast`?38:n===`skeleton`?39:n===`slider`?40:n===`stack`?41:n===`stepper`?42:n===`suffix`?43:n===`surface`?44:n===`tabs`?45:n===`tags`?46:n===`textarea`?47:n===`toast-core`?48:n===`toggle`?49:n===`tooltip-trigger`?50:n===`top-nav`?51:n===`truncate`?52:n===`virtual-list`?53:54)}}function wi(e,t){e&1&&(bo(0,`button`,54),aA(1,`Send invite`),Go$1())}function Ci(e,t){e&1&&(bo(0,`div`,88)(1,`button`,59),aA(2,`Keep editing`),Go$1(),bo(3,`button`,158),aA(4,`Discard`),Go$1()())}function hi(e,t){e&1&&(bo(0,`div`,159)(1,`button`,160),aA(2,`Back`),Go$1(),bo(3,`div`,134)(4,`button`,59),aA(5,`Cancel`),Go$1(),bo(6,`button`,54),aA(7,`Continue`),Go$1()()())}function Si(e,t){e&1&&(bo(0,`div`,161),td(1,`bx-icon`,162),bo(2,`div`)(3,`h3`),aA(4,`New workspace`),Go$1(),bo(5,`p`),aA(6,`Custom header content`),Go$1()()())}function Pi(e,t){e&1&&(bo(0,`button`,54),aA(1,`Done`),Go$1())}function Mi(e,t){e&1&&(bo(0,`button`,59),aA(1,`Close actions`),Go$1())}var ae=class e{resizePreviewWidth=210;edgeToEdge=U(()=>[`drawer`,`modal-backdrop`,`modal-side`,`modal-sheet`,`panel`,`resize`].includes(this.kind()));savedToast={title:`Changes saved`,message:`Your workspace is up to date.`,type:`success`,icon:{name:`circle-check`}};uploadToast={title:`Uploading assets`,message:`Keep working while your files sync.`,type:`info`,loading:!0};connectionToast={title:null,message:`Connection restored`,type:`info`,icon:{name:`wifi`}};gallerySteps=S;previewId=`catalog-${MZ()}`;sampleRows=[`Design system`,`Form controls`,`Navigation`,`Overlays`,`Layouts`,`Accessibility`];trackRow=t=>t;sideNavConfig={position:`inline`,mobile:!1,collapsible:!1,searchable:!1,width:`100%`,persistenceKey:``};topNavConfig={position:`inline`,compact:!1,searchable:!1,showItemIcons:!1};navigationGroups=[{id:`preview`,title:``,items:[{id:`home`,route:`/`,label:`Home`,icon:{name:`house`},visible:!0},{id:`library`,route:`/components`,label:`Library`,icon:{name:`layers`},visible:!0},{id:`settings`,route:`/appearance`,label:`Settings`,icon:{name:`settings-2`},visible:!0}]}];modalConfig=new J({header:{text:`Workspace access`,icon:{name:`users`}},style:{animate:!1,hasBackdrop:!1,wrapperStyles:`inline-size: 22rem; max-inline-size: 100%;`}});confirmConfig=new J({header:{text:`Discard draft?`,icon:{name:`triangle-alert`,color:`text-danger`}},style:{animate:!1,hasBackdrop:!1,wrapperStyles:`inline-size: 21rem; max-inline-size: 100%;`}});sideConfig=new J({header:{text:`Member details`,icon:{name:`user`}},style:{animate:!1,hasBackdrop:!1,wrapperStyles:`inline-size: 19rem; max-inline-size: 100%;`}});sheetConfig=new J({header:{text:`Quick actions`,icon:{name:`ellipsis`}},style:{animate:!1,hasBackdrop:!1,wrapperStyles:`--bx-drawer-min-height: 0; --bx-drawer-footer-background: transparent; inline-size: 100%;`}});recipe=U(()=>Xn[this.kind()]);kind=re.required();static ɵfac=function(n){return new(n||e)};static ɵcmp=Fr({type:e,selectors:[[`app-component-preview`]],hostAttrs:[`aria-hidden`,`true`,`inert`,``],hostVars:3,hostBindings:function(n,l){n&2&&(vo(`data-preview-kind`,l.kind()),tr(`is-edge-preview`,l.edgeToEdge()))},inputs:{kind:[1,`kind`]},features:[rr([{provide:Br,useValue:Un}])],decls:14,vars:1,consts:[[`inviteFooter`,``],[`confirmFooter`,``],[`reviewFooter`,``],[`customHeader`,``],[`doneFooter`,``],[`sheetFooter`,``],[`contextMenu`,``],[`dropdownMenu`,``],[`split`,``],[`resizePane`,``],[`virtualScroll`,``],[`collection`,``],[1,`preview-component`,3,`preview-centered`,`preview-calendar`,`preview-tooltip`,`bx-overlay-pos-top`],[1,`preview-component`],[4,`ngComponentOutlet`,`ngComponentOutletInputs`],[3,`multiple`],[1,`preview-row`,`preview-row-center`],[`title`,`Project`,`subtitle`,`Updated today`,1,`preview-card`],[1,`preview-stack`],[1,`preview-row`,`preview-row-center`,`preview-indicator-row`],[1,`preview-chip-row`],[`size`,`full`,1,`preview-container`],[1,`preview-context`,3,`bxContextMenu`],[`title`,`Project details`,3,`expanded`,`headingLevel`],[1,`preview-list-surface`],[3,`width`,`height`,`fill`],[1,`preview-dropdown`],[`label`,`Reference`,`error`,`Enter at least three characters.`,3,`forId`],[1,`preview-form-preview`],[1,`preview-grid`,3,`columns`,`gap`],[1,`preview-icon-halo`],[3,`width`,`height`],[`bxInfiniteScroll`,``,1,`preview-list`,3,`infiniteScrollDisabled`],[`bxLoadMore`,``,1,`preview-list`,3,`loadMoreHasMore`,`loadMoreRevision`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,3,`loading`],[1,`preview-backdrop-frame`,3,`width`,`height`,`fill`],[1,`preview-popover-panel`],[`label`,`Amount`,`value`,`1,250.00`],[1,`preview-stack`,`preview-progress-preview`],[1,`preview-center-row`],[1,`preview-viewport`],[1,`preview-skeleton-preview`],[1,`preview-stack`,`preview-slider-preview`],[1,`preview-stack`,3,`gap`],[`mode`,`wizard`,`selectionMode`,`internal`,`readOnly`,`true`,3,`steps`,`linear`],[`label`,`Weight`,`value`,`12`],[`selectedValue`,`overview`,3,`dragSelection`],[`label`,`Notes`,`hint`,`Visible to teammates`,3,`forId`],[1,`preview-tooltip-stage`],[1,`preview-navigation`],[1,`preview-list`],[`title`,`Details`,3,`expanded`],[`title`,`Permissions`],[`title`,`Billing`],[`bx-button`,``,`type`,`button`,`variant`,`filled`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`],[`bx-button`,``,`type`,`button`,`variant`,`mini-fab`,`aria-label`,`Add`],[`name`,`plus`,`size`,`20`],[`bxCardFooter`,``,1,`preview-row`,`preview-row-end`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`],[`label`,`Draft`,3,`checked`],[`label`,`In review`,3,`checked`],[`label`,`Published`,3,`indeterminate`],[1,`preview-indicator`],[3,`checked`],[3,`indeterminate`],[`label`,`Design`,3,`selected`],[`label`,`Engineering`,3,`removable`],[`label`,`Research`],[`label`,`Marketing`],[`title`,`Centered content`],[`label`,`Copy`,`icon`,`copy`],[`label`,`Paste`,`icon`,`clipboard`],[`label`,`Quote`,`icon`,`quote`],[1,`preview-item`],[3,`decorative`],[1,`preview-viewport`,`preview-bottom`],[`title`,`Filters`,`maxHeight`,`100%`,`panelStyle`,`--bx-drawer-footer-background: transparent; --bx-glass-min-opacity: 0.72;`,3,`embedded`,`open`,`modal`,`showBackdrop`,`animationDuration`],[`label`,`Active projects`,3,`checked`],[`bxDrawerFooter`,``,1,`preview-row`,`preview-row-end`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`label`,`Duplicate`,`icon`,`copy`],[`label`,`Archive`,`icon`,`archive`,3,`danger`],[`bxInput`,``,`value`,`AB`,`aria-invalid`,`true`,3,`id`],[1,`preview-form-title`],[`label`,`Workspace`,`value`,`Blocks library`,`subscriptSizing`,`dynamic`],[`label`,`Owner email`,`placeholder`,`name@company.com`,`subscriptSizing`,`dynamic`],[1,`preview-row`,`preview-row-end`],[1,`preview-cell`],[`name`,`sparkles`,`size`,`40`,`color`,`accent`,`bgColor`,`auto`],[`size`,`full`,1,`preview-page-layout`,3,`showBreadcrumbs`,`autoResolveTitlesFromNavigation`],[`pageTitle`,`Workspace`,3,`autoResolveTitlesFromNavigation`],[3,`columns`,`gap`],[1,`preview-list-row`],[`name`,`file-text`,`size`,`18`],[`name`,`save`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,`endIcon`,`chevron-right`],[`label`,`Share`,`icon`,`share-2`,`endIcon`,`chevron-right`],[`label`,`Archive`,`icon`,`archive`],[`label`,`Open view`,`icon`,`external-link`,3,`shortcut`],[3,`config`,`id`,`isOpen`,`isAnimated`,`animationDuration`,`isBottomSheetModalActive`,`hasDefaultContentWrapperClass`,`headerTemplate`,`footerTemplate`,`hasBanner`],[`label`,`Email address`,`value`,`alex@workspace.dev`,`subscriptSizing`,`dynamic`],[1,`preview-backdrop-content`],[3,`isOpen`,`isAnimated`],[1,`preview-banner-stage`],[3,`header`,`showCloseButton`],[3,`config`,`id`,`isOpen`,`isAnimated`,`animationDuration`,`headerTemplate`,`footerTemplate`,`hasBanner`],[`direction`,`horizontal`,3,`gap`],[`name`,`share-2`,`size`,`18`],[`name`,`copy`,`size`,`18`],[`layout`,`right`,3,`config`,`id`,`isOpen`,`isAnimated`,`animationDuration`,`isBottomSheetModalActive`,`hasDefaultContentWrapperClass`,`headerTemplate`,`footerTemplate`,`hasBanner`],[3,`gap`],[`text`,`Workspace admin`,`color`,`accent`],[`layoutMode`,`push`,3,`open`,`width`,`autoFocus`,`restoreFocus`,`closeOnEscape`,`animationDuration`],[`bxSidePanelHeader`,``],[`text`,`Design system`,`color`,`accent`],[`bxPrefix`,``],[`label`,`Upload progress`,3,`value`],[`label`,`Import progress`,3,`value`],[`label`,`Frequency`,`name`,`preview-radio`,`value`,`daily`],[`label`,`Daily`,`name`,`preview-radio`,`value`,`daily`],[`label`,`Frequency`,`name`,`preview-radio-group`,`value`,`daily`],[`label`,`Daily`,`name`,`preview-radio-group`,`value`,`daily`],[`label`,`Weekly`,`name`,`preview-radio-group`,`value`,`weekly`],[`label`,`Monthly`,`name`,`preview-radio-group`,`value`,`monthly`],[1,`preview-split`],[1,`preview-resize-pane`],[`bxResizeHandle`,``,`resizeLabel`,`Resize file browser`,1,`preview-resize-handle`,3,`resizeTarget`,`resizeContainer`,`resizeValue`,`resizeMinSize`,`resizeMaxSize`,`resizeIdleDelay`,`resizeDisableShrink`],[1,`preview-split-content`],[`name`,`file-code`,`size`,`40`],[3,`config`,`groups`],[1,`preview-toast-stage`],[3,`core`,`data`],[1,`preview-row`],[`shape`,`circle`,`width`,`40px`,`height`,`40px`,3,`animated`],[3,`lines`,`animated`],[`bxSlider`,``,`type`,`range`,`min`,`0`,`max`,`100`,`aria-label`,`Volume`,3,`value`],[1,`preview-row`,`preview-row-between`,`preview-caption`],[`bxSuffix`,``],[`label`,`Overview`,`value`,`overview`],[`label`,`Activity`,`value`,`activity`],[`label`,`Settings`,`value`,`settings`],[`text`,`Skopje`,`leadingIcon`,`map-pin`,`trailingNumber`,`2`,`size`,`small`,3,`focusable`],[`text`,`Design`,`color`,`accent`,`size`,`small`,3,`focusable`],[`text`,`Archived`,`size`,`small`,3,`focusable`],[`bxInput`,``,`rows`,`2`,3,`id`],[3,`core`,`data`,`duration`,`progress`],[`label`,`Notifications`,3,`checked`],[`label`,`Weekly digest`,3,`checked`],[`text`,`Saves this project`,1,`bx-overlay-pos-top`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,`bxTooltip`,`Saves this project`],[`bxTopNavBrand`,``],[`name`,`blocks`,`size`,`20`],[`bxTruncate`,``],[3,`items`,`trackBy`,`scrollContainer`,`config`],[3,`bxVirtualItem`],[`name`,`blocks`,`size`,`32`,`color`,`accent`,`bgColor`,`auto`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,`color`,`danger`],[1,`preview-row`,`preview-row-between`],[`bx-button`,``,`type`,`button`],[1,`preview-custom-header`],[`name`,`folder-plus`,`size`,`24`]],template:function(n,l){if(n&1&&(tb(0,dt,2,10,`div`,12)(1,_i,55,1),ed(2,wi,2,0,`ng-template`,null,0,TA)(4,Ci,5,0,`ng-template`,null,1,TA)(6,hi,8,0,`ng-template`,null,2,TA)(8,Si,7,0,`ng-template`,null,3,TA)(10,Pi,2,0,`ng-template`,null,4,TA)(12,Mi,2,0,`ng-template`,null,5,TA)),n&2){let s;ob((s=l.recipe())?0:1,s)}},dependencies:[_1,xe,po,Pt$1,ee$2,Bo,He,Uo,$o,Ho,jo,$n$1,qo,Go,YC,Bn,Hs,cl,Yi,$i,zs,Ks,ol,nl,il,rl,ln,al,Fn,sl,Xs,Ys,ll,jn$1,$s,qs,Bn$1,Gs,Gi,qi,Zs,As,cn,Bs,Ls,zn,Ui,Pt$2,ct$1,Z,j,L,ee$1,ne,it$1,at$1,$n,oe,ee,ie],styles:[`
[_nghost-%COMP%] {
  display: grid;
  position: relative;
  place-items: center;
  inline-size: 100%;
  block-size: 100%;
  min-inline-size: 0;
  min-block-size: 0;
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
}
[_nghost-%COMP%]     *, 
[_nghost-%COMP%]     *::before, 
[_nghost-%COMP%]     *::after {
  animation: none !important;
  transition: none !important;
}
.preview-component[_ngcontent-%COMP%], 
.preview-card[_ngcontent-%COMP%], 
.preview-container[_ngcontent-%COMP%], 
.preview-stack[_ngcontent-%COMP%], 
.preview-grid[_ngcontent-%COMP%], 
.preview-navigation[_ngcontent-%COMP%], 
.preview-context[_ngcontent-%COMP%], 
.preview-form-preview[_ngcontent-%COMP%], 
.preview-list-surface[_ngcontent-%COMP%], 
.preview-skeleton-preview[_ngcontent-%COMP%] {
  inline-size: min(100%, 18rem);
  min-inline-size: 0;
}
.preview-tooltip[_ngcontent-%COMP%] {
  inline-size: fit-content;
}
.preview-centered[_ngcontent-%COMP%] {
  display: grid;
  place-items: center;
}
.preview-calendar[_ngcontent-%COMP%] {
  inline-size: min(100%, 18rem);
  zoom: 0.72;
}
.preview-viewport[_ngcontent-%COMP%] {
  --%NS%bx-modal-side-height: 100%;
  display: block;
  position: relative;
  inline-size: 100%;
  block-size: 100%;
  min-inline-size: 0;
  min-block-size: 0;
  overflow: clip;
  isolation: isolate;
  contain: layout paint;
}
.preview-scaled[_ngcontent-%COMP%] {
  zoom: 0.7;
}
.preview-bottom[_ngcontent-%COMP%] {
  display: grid;
  align-items: end;
}
div.preview-stack[_ngcontent-%COMP%], 
.preview-form-preview[_ngcontent-%COMP%], 
.preview-skeleton-preview[_ngcontent-%COMP%], 
.preview-list-surface[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-2, 0.5rem);
}
.preview-row[_ngcontent-%COMP%], 
.preview-chip-row[_ngcontent-%COMP%], 
.preview-center-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  min-inline-size: 0;
}
.preview-row-center[_ngcontent-%COMP%], 
.preview-center-row[_ngcontent-%COMP%], 
.preview-chip-row[_ngcontent-%COMP%] {
  justify-content: center;
}
.preview-row-between[_ngcontent-%COMP%] {
  justify-content: space-between;
}
.preview-row-end[_ngcontent-%COMP%] {
  justify-content: flex-end;
}
.preview-chip-row[_ngcontent-%COMP%] {
  flex-wrap: wrap;
  max-inline-size: 18rem;
}
.preview-indicator-row[_ngcontent-%COMP%] {
  gap: var(--%NS%bx-space-5, 1.25rem);
}
.preview-indicator[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--%NS%bx-space-2, 0.5rem);
  font-size: 0.75rem;
}
.preview-dropdown[_ngcontent-%COMP%], 
.preview-tooltip-stage[_ngcontent-%COMP%], 
.preview-popover-panel[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: var(--%NS%bx-space-2, 0.5rem);
  min-inline-size: 0;
}
.preview-dropdown[_ngcontent-%COMP%], 
.preview-tooltip-stage[_ngcontent-%COMP%] {
  align-items: center;
}
.preview-dropdown[_ngcontent-%COMP%]   bx-menu[_ngcontent-%COMP%] {
  inline-size: 12rem;
}
.preview-popover-panel[_ngcontent-%COMP%] {
  inline-size: min(100%, 16rem);
}
.preview-list[_ngcontent-%COMP%] {
  inline-size: min(100%, 18rem);
  max-block-size: 11rem;
  min-inline-size: 0;
  overflow: auto;
}
.preview-list-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  min-block-size: 2.75rem;
}
.preview-surface[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: var(--%NS%bx-space-2, 0.5rem);
  inline-size: min(100%, 16rem);
  padding: var(--%NS%bx-space-5, 1.25rem);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.preview-grid[_ngcontent-%COMP%]   .preview-cell[_ngcontent-%COMP%] {
  text-align: center;
}
.preview-caption[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
}
.preview-progress-preview[_ngcontent-%COMP%] {
  gap: var(--%NS%bx-space-4, 1rem);
}
.preview-slider-preview[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  inline-size: 100%;
}
.preview-list-surface[_ngcontent-%COMP%]   bx-divider[_ngcontent-%COMP%] {
  --%NS%bx-divider-margin: 0;
}
.preview-form-title[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-heading);
  font-size: 1rem;
}
p[_ngcontent-%COMP%], 
h3[_ngcontent-%COMP%] {
  margin-block: 0 var(--%NS%bx-space-2, 0.5rem);
}
.preview-page-layout[_ngcontent-%COMP%] {
  --%NS%bx-page-title-size: 2rem;
  --%NS%bx-page-padding-inline: var(--%NS%bx-space-6, 1.5rem);
  --%NS%bx-page-padding-block: var(--%NS%bx-space-6, 1.5rem);
  --%NS%bx-page-gap: var(--%NS%bx-space-6, 1.5rem);
}
.preview-backdrop-content[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-8, 2rem);
}
.preview-backdrop-frame[_ngcontent-%COMP%] {
  --%NS%bx-modal-backdrop-blur: 2px;
}
bx-side-panel-layout.preview-viewport[_ngcontent-%COMP%] {
  display: flex;
}
.preview-toast-stage[_ngcontent-%COMP%] {
  display: grid;
  place-items: center;
  inline-size: 100%;
  block-size: 100%;
}
.preview-banner-stage[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-8, 2rem);
}
.preview-custom-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
}
.preview-split[_ngcontent-%COMP%] {
  display: flex;
  position: relative;
  inline-size: 100%;
  block-size: 100%;
}
.preview-resize-pane[_ngcontent-%COMP%], 
.preview-split-content[_ngcontent-%COMP%] {
  box-sizing: border-box;
  min-inline-size: 0;
  padding: var(--%NS%bx-space-6, 1.5rem);
}
.preview-resize-pane[_ngcontent-%COMP%] {
  flex: none;
  border-inline-end: var(--%NS%bx-border-width, 1px) solid var(--%NS%bx-border-default);
}
.preview-split-content[_ngcontent-%COMP%] {
  flex: 1;
}
.preview-resize-handle[_ngcontent-%COMP%] {
  outline: none;
}
.preview-resize-handle[_ngcontent-%COMP%]::before, 
.preview-resize-handle[_ngcontent-%COMP%]::after {
  transition-property:
    opacity,
    background-color,
    color;
  transition-duration: calc(var(--%NS%bx-resize-grip-duration, 150ms) * (1 - var(--%NS%bx-reduced-motion, 0)));
  transition-timing-function: ease;
  content: "";
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
}
.preview-resize-handle[_ngcontent-%COMP%]::before {
  background: var(--%NS%bx-resize-rail-color, var(--%NS%bx-resize-grip-background, var(--%NS%bx-bg-element)));
}
.preview-resize-handle[_ngcontent-%COMP%]::after {
  left: 50%;
  top: 50%;
  inline-size: var(--%NS%bx-space-2, 0.5rem);
  block-size: var(--%NS%bx-space-6, 1.5rem);
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  border: var(--%NS%bx-border-width, 1px) var(--%NS%bx-border-style, solid) var(--%NS%bx-resize-grip-border, var(--%NS%bx-border-default));
  color: var(--%NS%bx-resize-grip-color, var(--%NS%bx-text-secondary));
  background-color: var(--%NS%bx-resize-grip-background, var(--%NS%bx-bg-element));
  background-image:
    radial-gradient(
      circle,
      currentcolor 1px,
      transparent 1.25px),
    radial-gradient(
      circle,
      currentcolor 1px,
      transparent 1.25px),
    radial-gradient(
      circle,
      currentcolor 1px,
      transparent 1.25px);
  background-size: 3px 3px;
  background-position:
    center calc(50% - 4px),
    center,
    center calc(50% + 4px);
  background-repeat: no-repeat;
}
.preview-resize-handle[data-bx-resize-axis=horizontal][_ngcontent-%COMP%]::before {
  inset-block: var(--%NS%bx-space-2, 0.5rem);
  left: 50%;
  inline-size: var(--%NS%bx-space-1, 0.25rem);
  transform: translateX(-50%);
}
.preview-resize-handle[data-bx-resize-axis=vertical][_ngcontent-%COMP%]::before {
  inset-inline: var(--%NS%bx-space-2, 0.5rem);
  top: 50%;
  block-size: var(--%NS%bx-space-1, 0.25rem);
  transform: translateY(-50%);
}
.preview-resize-handle[data-bx-resize-axis=vertical][_ngcontent-%COMP%]::after {
  transform: translate(-50%, -50%) rotate(90deg);
}
.preview-resize-handle.bx-resize-visible[_ngcontent-%COMP%]::after, 
.preview-resize-handle[_ngcontent-%COMP%]:focus-visible::before, 
.preview-resize-handle[_ngcontent-%COMP%]:focus-visible::after {
  opacity: 1;
}
.preview-resize-handle[_ngcontent-%COMP%]:hover::before, 
.preview-resize-handle.bx-resizing[_ngcontent-%COMP%]::before {
  opacity: 1;
}
.preview-resize-handle[_ngcontent-%COMP%]:hover::after, 
.preview-resize-handle.bx-resizing[_ngcontent-%COMP%]::after {
  opacity: 0;
}
.preview-resize-handle[_ngcontent-%COMP%]:focus-visible::before {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: var(--%NS%bx-space-1, 0.25rem);
}
.preview-resize-handle.bx-resize-reduced-motion[_ngcontent-%COMP%]::before, 
.preview-resize-handle.bx-resize-reduced-motion[_ngcontent-%COMP%]::after {
  transition-duration: 0s;
}
@media (hover: none), (pointer: coarse), (forced-colors: active) {
  .preview-resize-handle[_ngcontent-%COMP%]::after {
    opacity: 1;
  }
}
@media (prefers-reduced-motion: reduce) {
  .preview-resize-handle[_ngcontent-%COMP%]::before, 
   .preview-resize-handle[_ngcontent-%COMP%]::after {
    transition-duration: 0s;
  }
}
@media (forced-colors: active) {
  .preview-resize-handle[_ngcontent-%COMP%]::before {
    background: CanvasText;
  }
  .preview-resize-handle[_ngcontent-%COMP%]::after {
    forced-color-adjust: none;
    background-color: Canvas;
    border-color: CanvasText;
    color: CanvasText;
  }
  .preview-resize-handle[_ngcontent-%COMP%]:focus-visible::before {
    outline-color: Highlight;
  }
}
.preview-resize-handle[_ngcontent-%COMP%] {
  position: absolute;
  inset-block: 0;
  margin-inline-start: calc(var(--%NS%bx-space-6, 1.5rem) / -2 - var(--%NS%bx-border-width, 1px) / 2);
  inline-size: var(--%NS%bx-space-6, 1.5rem);
  block-size: 100%;
}`]})};var Jn={"page-container":`layout`,container:`container`,stack:`stack`,grid:`grid`,divider:`divider`,icon:`icon`,surface:`surface`,tag:`tags`,chip:`chips`,skeleton:`skeleton`,"loading-spinner":`loading`,"loading-indicator":`loading-indicator`,"progress-bar":`progress`,alert:`alert`,card:`card`,collapsible:`disclosure`,accordion:`accordion`,stepper:`stepper`,tabs:`tabs`,tooltip:`tooltip`,"tooltip-directive":`tooltip-trigger`,truncate:`truncate`,"swipe-actions":`menu-item`,"menu-item":`menu-item`,menu:`menu`,dropdown:`dropdown`,"context-menu":`context-menu`,popover:`popover`,"resize-handle":`resize`,"side-panel":`panel`,"infinite-scroll":`list`,"virtual-collection":`virtual-list`,button:`button`,"button-loading":`loading-button`,"form-field":`field`,"native-control":`textarea`,"input-field":`input-field`,"date-picker":`date-picker`,"time-picker":`time`,"search-input":`search`,"checkbox-indicator":`checkbox-indicator`,checkbox:`checkbox`,radio:`radio`,"radio-group":`radio-group`,"slide-toggle":`toggle`,slider:`slider`,"range-slider":`range-slider`,select:`select`,"multi-select":`multiselect`,autocomplete:`autocomplete`,"signal-forms":`form`,hint:`field-hint`,error:`error`,prefix:`prefix`,suffix:`suffix`,"load-more":`load-more`,breadcrumbs:`breadcrumbs`,"top-nav":`top-nav`,"side-nav":`side-nav`,"modal-backdrop":`modal-backdrop`,"modal-banner":`modal-banner`,"modal-header":`modal-header`,"modal-footer":`modal-footer`,"modal-core":`modal`,"modal-centered":`modal-centered`,"modal-side":`modal-side`,"modal-bottom-sheet":`modal-sheet`,"toast-core":`toast-core`,"simple-toast":`simple-toast`,"bottom-drawer":`drawer`,calendar:`calendar`};function Zn(e){return Jn[e.id]??`surface`}function et(e){return e.layout?[`/components/layout`,e.id]:[`/components`,e.id]}var Ei=[`catalogScroll`];var ki=[`results`];var Ti=(e,t)=>t.title;var zi=(e,t)=>t.id;function Oi(e,t){if(e&1){let n=lb();bo(0,`bx-multi-select`,17),pM(),br(`ngModelChange`,function(s){il$1(n);let f=$s$1();return al$1(f.updateCategories(s))}),Go$1()}if(e&2){let n=$s$1();$o$1(`clearable`,!0)(`showSelectAll`,!1)(`options`,n.categories())(`ngModel`,n.selectedCategories()),mM()}}function Ni(e,t){if(e&1&&(bo(0,`article`,21)(1,`div`,22),td(2,`app-component-preview`,23),Go$1(),bo(3,`div`,24)(4,`h3`)(5,`a`,25),aA(6),Go$1()(),bo(7,`p`),aA(8),Go$1(),bo(9,`code`,26),aA(10),Go$1()()()),e&2){let n=t.$implicit,l=$s$1(2);qs$1(2),$o$1(`kind`,l.previewKind(n)),qs$1(3),$o$1(`routerLink`,l.componentRoute(n)),qs$1(),sk(n.title),qs$1(2),sk(n.description),qs$1(2),sk(n.selector)}}function Di(e,t){if(e&1&&(bo(0,`div`,18)(1,`h2`),aA(2),Go$1(),td(3,`bx-divider`,19),Go$1(),bo(4,`div`,20),nb(5,Ni,11,5,`article`,21,zi),Go$1()),e&2){let n=t.$implicit;qs$1(2),sk(n.title),qs$1(),$o$1(`decorative`,!0),qs$1(),vo(`aria-label`,n.title),qs$1(),sb(n.entries)}}function Ii(e,t){e&1&&(bo(0,`bx-card`,14)(1,`h2`),aA(2,`No components found`),Go$1(),bo(3,`p`),aA(4,`Try fewer words or clear the category filter to show the whole catalog.`),Go$1()()),e&2&&$o$1(`surfaceEffects`,!1)}function Ri(e,t){if(e&1){let n=lb();bo(0,`div`,15)(1,`button`,27),br(`click`,function(){il$1(n);let s=$s$1();return al$1(s.renderMore())}),aA(2,`Load more components`),Go$1()()}}var nt=class e$1{activatedRoute=b$1(st$1);routeData=vU(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});groupOrder=i.map(t=>t.section);batchSize=12;baseEntries=U(()=>e.filter(t=>(!this.layoutOnly()||t.layout)&&(!this.category()||t.group===this.category())));catalogScrollRef=kz(`catalogScroll`);resultsRef=kz(`results`);figmaLibraryUrl=n;componentRoute=et;previewKind=Zn;layoutOnly=U(()=>this.routeData().layout===!0);category=U(()=>{let t=this.routeData().category;return typeof t==`string`?t:void 0});categories=U(()=>{let t=new Set(this.baseEntries().map(n=>n.group));return this.groupOrder.filter(n=>t.has(n)).map(n=>({label:n,value:n}))});filtered=U(()=>{let t=this.query().toLowerCase().trim().split(/\s+/).filter(Boolean),n=this.selectedCategories();return this.baseEntries().filter(l=>(!n.length||n.includes(l.group))&&t.every(s=>`${l.title} ${l.group} ${l.description} ${l.selector} ${l.symbol}`.toLowerCase().includes(s))).toSorted((l,s)=>this.groupRank(l)-this.groupRank(s))});visibleEntries=U(()=>this.filtered().slice(0,this.renderedCount()));groups=U(()=>{let t=/* @__PURE__ */ new Map,n=/* @__PURE__ */ new Map;for(let l of this.filtered())t.set(l.group,(t.get(l.group)??0)+1);for(let l of this.visibleEntries()){let s=n.get(l.group)??[];s.push(l),n.set(l.group,s)}return[...n].map(([l,s])=>({title:l,entries:s,total:t.get(l)??s.length}))});hasMore=U(()=>this.visibleEntries().length<this.filtered().length);query=z(``);selectedCategories=z([]);renderedCount=dd({source:this.filtered,computation:()=>this.batchSize});updateSearch(t){this.query.set(t),this.resetScroll()}updateCategories(t){this.selectedCategories.set(t??[]),this.resetScroll()}renderMore(){this.hasMore()&&this.renderedCount.update(t=>Math.min(t+this.batchSize,this.filtered().length))}groupRank(t){let n=this.groupOrder.indexOf(t.group);return n<0?this.groupOrder.length:n}resetScroll(){let t=this.catalogScrollRef()?.nativeElement,n=this.resultsRef()?.nativeElement;if(!t||!n)return;let l=t.getBoundingClientRect().top+t.clientTop,s=n.getBoundingClientRect().top-l;s<0&&t.scrollTo({top:Math.max(0,t.scrollTop+s),behavior:`instant`})}static ɵfac=function(n){return new(n||e$1)};static ɵcmp=Fr({type:e$1,selectors:[[`app-component-index`]],viewQuery:function(n,l){n&1&&Wy(l.catalogScrollRef,Ei,5)(l.resultsRef,ki,5),n&2&&db(2)},decls:31,vars:19,consts:[[`catalogRegion`,``],[`catalogScroll`,``],[`results`,``],[`tabindex`,`-1`,1,`catalog-region`],[`tabindex`,`-1`,1,`catalog-scroll`],[3,`sectionTitle`,`pageTitle`,`pageDescription`],[`routerLink`,`/utilities`],[`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[1,`catalog-filters`],[`ariaLabel`,`Search components`,`placeholder`,`Search names, purposes, or selectors…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Categories`,`placeholder`,`All categories`,`floatLabel`,`always`,`subscriptSizing`,`dynamic`,`clearLabel`,`Show all categories`,3,`clearable`,`showSelectAll`,`options`,`ngModel`],[1,`catalog-summary`],[`role`,`status`],[`tabindex`,`-1`,`bxInfiniteScroll`,``,1,`catalog-results`,3,`scrollEnd`,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[1,`empty-results`,3,`surfaceEffects`],[1,`catalog-more`],[3,`container`,`boundary`],[`label`,`Categories`,`placeholder`,`All categories`,`floatLabel`,`always`,`subscriptSizing`,`dynamic`,`clearLabel`,`Show all categories`,3,`ngModelChange`,`clearable`,`showSelectAll`,`options`,`ngModel`],[1,`catalog-category-heading`],[3,`decorative`],[1,`catalog-grid`],[`bxSurface`,``,1,`component-card`],[`bxSurface`,``,`aria-hidden`,`true`,`inert`,``,1,`component-preview`],[3,`kind`],[1,`component-body`],[1,`component-link`,3,`routerLink`],[1,`component-selector`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(n,l){if(n&1&&(bo(0,`div`,3,0)(2,`div`,4,1)(4,`bx-page-container`)(5,`bx-page-header`,5)(6,`p`),aA(7,` For viewport signals, device detection, scroll locking and shared helpers, explore the `),bo(8,`a`,6),aA(9,`Utilities playground`),Go$1(),aA(10,`. `),Go$1(),bo(11,`p`),aA(12,` Designing a screen? `),bo(13,`a`,7),aA(14,`Open the Blocks Figma library`),Go$1(),aA(15,` for components, tokens and responsive examples. `),Go$1()(),bo(16,`div`,8)(17,`bx-search-input`,9),pM(),br(`ngModelChange`,function(f){return l.updateSearch(f??``)}),Go$1(),tb(18,Oi,1,4,`bx-multi-select`,10),Go$1(),bo(19,`div`,11)(20,`p`,12),aA(21),Go$1(),bo(22,`p`),aA(23),Go$1()(),bo(24,`div`,13,2),br(`scrollEnd`,function(){return l.renderMore()}),nb(26,Di,7,3,null,null,Ti,!1,Ii,5,1,`bx-card`,14),tb(29,Ri,3,0,`div`,15),Go$1()()(),td(30,`app-scroll-to-top`,16),Go$1()),n&2){let s=jT(3),f=jT(25);qs$1(5),$o$1(`sectionTitle`,l.layoutOnly()?`Primitives`:l.category()?`Components`:`Blocks reference`)(`pageTitle`,l.layoutOnly()?`Layout`:l.category()??`Components`)(`pageDescription`,l.layoutOnly()?`Compose consistent pages with containers, sections, responsive stacks, grids, and dividers.`:`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),qs$1(8),$o$1(`href`,l.figmaLibraryUrl,M0),qs$1(4),$o$1(`ngModel`,l.query()),mM(),qs$1(),ob(l.categories().length>1?18:-1),qs$1(3),ik(`Showing `,l.visibleEntries().length,` of `,l.filtered().length,` components and directives`),qs$1(2),ik(``,l.groups().length,` `,l.groups().length===1?`category`:`categories`),qs$1(),$o$1(`infiniteScrollContainer`,s)(`infiniteScrollDisabled`,!l.hasMore())(`infiniteScrollRevision`,l.visibleEntries())(`infiniteScrollCheckOnRender`,!0)(`infiniteScrollThreshold`,600),qs$1(2),sb(l.groups()),qs$1(3),ob(l.hasMore()?29:-1),qs$1(),$o$1(`container`,s)(`boundary`,f)}},dependencies:[nl,ln,ji,UC,aZ,oZ,pN,At$1,Zo,xe,$s,Gs,ol,F,ae],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
  min-block-size: 0;
  block-size: 100%;
}
.catalog-region[_ngcontent-%COMP%], 
.catalog-scroll[_ngcontent-%COMP%] {
  block-size: 100%;
  min-inline-size: 0;
  min-block-size: 0;
}
.catalog-region[_ngcontent-%COMP%] {
  position: relative;
  outline: none;
}
.catalog-scroll[_ngcontent-%COMP%] {
  overflow: auto;
  overflow-anchor: none;
  overscroll-behavior: contain;
  outline: none;
}
.catalog-filters[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--%NS%bx-space-3, 0.75rem);
  align-items: end;
  margin-block-start: var(--%NS%bx-space-4, 1rem);
}
.catalog-filters[_ngcontent-%COMP%]   bx-search-input[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
.catalog-summary[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--%NS%bx-space-2, 0.5rem) var(--%NS%bx-space-4, 1rem);
  margin-block: var(--%NS%bx-space-4, 1rem);
}
.catalog-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.catalog-results[_ngcontent-%COMP%] {
  outline: none;
}
.catalog-category-heading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  min-inline-size: 0;
  margin-block: var(--%NS%bx-space-6, 1.5rem) var(--%NS%bx-space-3, 0.75rem);
}
.catalog-category-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  flex: 0 1 auto;
  min-inline-size: 0;
  margin: 0;
  color: var(--%NS%bx-text-heading);
  font-size: 1.125rem;
  overflow-wrap: anywhere;
}
.catalog-category-heading[_ngcontent-%COMP%]   bx-divider[_ngcontent-%COMP%] {
  --%NS%bx-divider-margin: 0;
  flex: 1 1 0;
}
.catalog-heading-count[_ngcontent-%COMP%] {
  flex: none;
  padding-inline: var(--%NS%bx-space-2, 0.5rem);
  border: 1px solid var(--%NS%bx-border-subtle);
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
  line-height: 1.6;
}
.catalog-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 16.5rem), 1fr));
  gap: var(--%NS%bx-space-4, 1rem);
  margin-block-end: var(--%NS%bx-space-6, 1.5rem);
}
.component-card[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  flex-direction: column;
  min-inline-size: 0;
  overflow: hidden;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  color: inherit;
  text-decoration: none;
}
.component-card[_ngcontent-%COMP%]:hover {
  border-color: var(--%NS%bx-border-strong);
}
.component-card[_ngcontent-%COMP%]:focus-within {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 3px;
}
.component-preview[_ngcontent-%COMP%] {
  position: relative;
  display: grid;
  place-items: center;
  block-size: 15rem;
  padding: var(--%NS%bx-space-4, 1rem);
  overflow: hidden;
  border-block-end: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem) var(--%NS%bx-rounded-lg, 0.75rem) 0 0;
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
}
.component-preview[_ngcontent-%COMP%]:has(app-component-preview.is-edge-preview) {
  padding: 0;
}
.component-body[_ngcontent-%COMP%] {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--%NS%bx-space-2, 0.5rem);
  min-inline-size: 0;
  padding: var(--%NS%bx-space-4, 1rem);
}
.component-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--%NS%bx-text-heading);
  font-size: 0.9375rem;
  line-height: 1.4;
}
.component-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  flex: 1;
  margin: 0;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.8125rem;
  line-height: 1.6;
  overflow-wrap: anywhere;
}
.component-selector[_ngcontent-%COMP%] {
  align-self: flex-start;
  max-inline-size: 100%;
  padding: var(--%NS%bx-space-1, 0.25rem) var(--%NS%bx-space-2, 0.5rem);
  overflow: hidden;
  border: 1px solid var(--%NS%bx-border-subtle);
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  background: var(--%NS%bx-bg-surface-alt);
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.catalog-more[_ngcontent-%COMP%] {
  padding-block: var(--%NS%bx-space-4, 1rem) var(--%NS%bx-space-8, 2rem);
}
.empty-results[_ngcontent-%COMP%] {
  padding: var(--%NS%bx-space-6, 1.5rem);
  text-align: center;
}
.empty-results[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0 0 var(--%NS%bx-space-3, 0.75rem);
  font-size: 1.125rem;
}
.empty-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--%NS%bx-text-secondary);
}
@media (prefers-reduced-motion: no-preference) {
  .component-card[_ngcontent-%COMP%] {
    transition:
      border-color 160ms ease,
      transform 160ms ease,
      box-shadow 160ms ease;
  }
  .component-card[_ngcontent-%COMP%]:hover {
    transform: translateY(-2px);
    box-shadow: var(--%NS%bx-shadow-md, 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12));
  }
}
@media (min-width: 640px) {
  .catalog-filters[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr) minmax(12rem, 20rem);
  }
}
.component-link[_ngcontent-%COMP%] {
  color: inherit;
  text-decoration: none;
}
.component-link[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  z-index: 1;
  inset: 0;
}
.component-link[_ngcontent-%COMP%]:focus-visible {
  outline: none;
}`]})};export{nt as ComponentIndex};