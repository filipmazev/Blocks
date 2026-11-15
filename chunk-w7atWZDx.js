import{t as F}from"./chunk-CXkJNFvp.js";import{t as S}from"./chunk-DQ57v1lq.js";import{a as b,i as W,o as f}from"./chunk-DA2G-894.js";import{t as n}from"./chunk-BDrlE4OR.js";import{d as Vn,f as Wn,k as i,p as at$1,u as Tn,v as it$1,w as e}from"./main-AKVTKJWF.js";import{i as Z,l as j,n as L,o as ee$1,t as J,u as ne}from"./chunk-B9KWZ97F.js";import{A as kn,E as Y,O as fe,P as ya,T as Vt$1,b as Sa,c as Ea,f as Ia,i as Ba,j as va,k as ka,m as Ma,n as Aa,p as La,r as Ae,s as Da,t as $r,u as Ft$1,x as Sn,y as Ra}from"./chunk-BHj6x81D.js";import{$i as kT,$r as bT,$t as Oe,Ai as gb,Bt as Ml,Ca as oE,Ci as fT,Cn as Rt$1,Co as wt$1,Ct as Kd,Dn as ST,E as D,Er as ZO,F as ET,Fa as pl,Fo as yb,Ft as Lt$1,Ga as qt$1,Gi as j$1,Gn as UT,Hn as Tt$1,In as Tb,It as M,Ji as je,Kn as Ui,Mn as St$1,Mo as yE,Na as pT,Nn as T,No as yT,Nr as _,Nt as LT,Oi as g,On as Sb,Or as Zd,Pa as pe,Pn as TT,Pt as Le,Rn as Ti$1,Rr as _e,So as wr,St as KP,T as Ct$1,Tt as Kie,V as FT,Vo as za,Vt as Mo,Wt as NT,Xr as b$1,Yt as Nt$1,Zi as jt$1,Zn as Va,Zr as bB,Zt as OT,_n as RT,_t as Jie,an as Q,br as Yf,bt as Jt$1,c as Ae$1,ca as lJ,cn as Qd,d as At$1,eo as se,et as Gy,f as B,fa as lt$1,fo as vT,gr as Y$1,hn as Qt$1,ho as ve,jo as y,jt as L$1,kr as Ze,l as An,lt as Ie,nr as WL,nt as HT,on as QC,p as BT,pa as mT,pi as dt$1,po as vb,pr as Xt$1,pt as J$1,s as AT,sn as QO,sr as X,st as IT,t as $,ua as lf,uo as ut$1,ut as Il,vo as w,w as Cs,wi as fe$1,x as CT,xi as f$1,xo as wb,yi as eu,zi as ho,zr as _l,zt as MT}from"./chunk-2VndCPnC.js";var tt=[`*`];var ee=class e{nativeElement=f$1(Y$1).nativeElement;destroyRef=f$1(X);availableWidth=M(0);availableHeight=M(0);scale=g(()=>Math.min(1,this.availableWidth()/this.width(),this.availableHeight()/this.height()));viewportWidth=g(()=>this.fill()&&this.scale()>0?this.availableWidth()/this.scale():this.width());viewportHeight=g(()=>this.fill()&&this.scale()>0?this.availableHeight()/this.scale():this.height());fill=b$1(!1);width=b$1(480);height=b$1(320);constructor(){Ze(()=>{let t=()=>{this.availableWidth.set(this.nativeElement.clientWidth),this.availableHeight.set(this.nativeElement.clientHeight)},n=new ResizeObserver(t);n.observe(this.nativeElement),t(),this.destroyRef.onDestroy(()=>n.disconnect())})}static ɵfac=function(n){return new(n||e)};static ɵcmp=$({type:e,selectors:[[`app-preview-frame`]],inputs:{fill:[1,`fill`],width:[1,`width`],height:[1,`height`]},ngContentSelectors:tt,decls:2,vars:6,consts:[[1,`preview-frame-viewport`]],template:function(n,l){n&1&&(Oe(),Ct$1(0,`div`,0),pe(1),St$1()),n&2&&_e(`inline-size`,l.viewportWidth(),`px`)(`block-size`,l.viewportHeight(),`px`)(`transform`,`translate(-50%, -50%) scale(`+l.scale()+`)`)},styles:[`
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
}`]})};var it=[`source`];var ie=class e{nativeElement=f$1(Y$1).nativeElement;destroyRef=f$1(X);themingService=f$1(pl);source=Nt$1.required(`source`);lightingTarget=M(void 0);scene;constructor(){An(()=>{this.themingService.activeTheme(),this.themingService.palette(),this.themingService.appearance(),this.scene?.refresh()}),Ze(()=>{let t=this.nativeElement.closest(`article`)??this.nativeElement;this.lightingTarget.set(t);let n=Gy(this.nativeElement);this.scene=n;let l=()=>{let f=this.source().nativeElement.getBoundingClientRect(),M=t.getBoundingClientRect();n.update({lights:[{element:t,offsetX:M.width?(f.left+f.width/2-M.left)/M.width:.8,offsetY:M.height?(f.top+f.height/2-M.top)/M.height:.2,color:`var(--bx-accent)`,intensity:1.4,radius:320,z:100}]})},s=new ResizeObserver(l);s.observe(this.nativeElement),l(),this.destroyRef.onDestroy(()=>{s.disconnect(),n.destroy()})})}static ɵfac=function(n){return new(n||e)};static ɵcmp=$({type:e,selectors:[[`app-surface-preview`]],viewQuery:function(n,l){n&1&&Xt$1(l.source,it,5),n&2&&lt$1()},decls:6,vars:3,consts:[[`source`,``],[1,`surface-copy`],[1,`surface-light`],[`name`,`sun`,`size`,`20`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,1,`surface-pane`,3,`bxSurfaceLocalRefraction`,`bxSurfaceLightingTarget`,`bxSurfaceInteractive`]],template:function(n,l){n&1&&(_(0,`strong`,1),Q(1,`Glass.`),D(),_(2,`span`,2,0),ve(4,`bx-icon`,3),D(),ve(5,`div`,4)),n&2&&(y(5),T(`bxSurfaceLocalRefraction`,!0)(`bxSurfaceLightingTarget`,l.lightingTarget())(`bxSurfaceInteractive`,!1))},dependencies:[Rt$1,qt$1],styles:[`
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
}`]})};function Qn(){return new b({data:{title:`Saved`,message:`Your changes are ready.`,type:`success`,icon:{name:`circle-check`}},animate:!1,durationInMs:0,swipeToDismiss:!1,showProgressBar:!1,showCloseButton:!0})}var ot=[`content`];var oe=class e{environmentInjector=f$1(wt$1);injector=f$1(Ie);toastRef=f$1(b);content=Nt$1.required(`content`,{read:At$1});core=b$1(!1);data=b$1();duration=b$1(0);progress=b$1(!1);progressColor=b$1(`text-info`);constructor(){Ze(()=>{this.toastRef.patch({data:this.data(),durationInMs:this.duration(),showProgressBar:this.progress(),progressBarColor:this.progressColor()}),this.toastRef.pause();let t=this.content();if(!this.core()){t.createComponent(f);return}let n=lf(f,{environmentInjector:this.environmentInjector,elementInjector:this.injector}),l=t.createComponent(W);l.instance.componentRef=n,l.instance.isVisible.set(!0)})}static ɵfac=function(n){return new(n||e)};static ɵcmp=$({type:e,selectors:[[`app-toast-preview`]],viewQuery:function(n,l){n&1&&Xt$1(l.content,ot,5,At$1),n&2&&lt$1()},inputs:{core:[1,`core`],data:[1,`data`],duration:[1,`duration`],progress:[1,`progress`],progressColor:[1,`progressColor`]},features:[Qt$1([{provide:b,useFactory:Qn}])],decls:2,vars:0,consts:[[`content`,``]],template:function(n,l){n&1&&oE(0,null,0)},styles:[`
[_nghost-%COMP%] {
  display: block;
  inline-size: 24rem;
  max-inline-size: 100%;
  min-inline-size: 0;
}
[_nghost-%COMP%]     bx-toast-core .toast-animator {
  margin-block: 0;
}`]})};var Un={isReducedMotion:M(!0).asReadonly()};function m(e,t={}){return{component:e,inputs:t}}var Xn={alert:m(vT,{tone:`success`,title:`Saved`,message:`Your changes are ready.`,emissive:!0}),autocomplete:m(Aa,{label:`City`,value:`Berlin`,subscriptSizing:`dynamic`,options:[{value:`Berlin`},{value:`Bern`},{value:`Bergen`}]}),breadcrumbs:m(Tn,{items:[{label:`Home`,route:`/`},{label:`Components`,route:`/components`},{label:`Button`,route:`/components/button`}]}),calendar:m(UT,{viewDate:`2026-02-01`,value:`2026-02-21`,locale:`en-GB`,fixedWeeks:!1,showToday:!1,showTodayButton:!1}),"date-picker":m(Ba,{label:`Due date`,value:`2026-04-21`,locale:`en-GB`,subscriptSizing:`dynamic`}),field:m(va,{label:`Project name`,value:`Blocks library`,hint:`Shown in the workspace switcher`}),"field-hint":m(va,{label:`Reference`,value:`PR-1042`,hint:`Your public reference`,hintEnd:`Optional`}),"input-field":m(va,{label:`Project name`,floatLabel:`always`,value:`Blocks library`,hint:`Shown in the workspace switcher`}),loading:m(Il,{size:40,decorative:!0}),"loading-indicator":m(Tb,{label:`Fetching results…`}),multiselect:m(Ma,{label:`Teams`,subscriptSizing:`dynamic`,value:[`design`,`forms`],options:[{label:`Design`,value:`design`},{label:`Forms`,value:`forms`},{label:`Icons`,value:`icons`}]}),"range-slider":m(La,{value:[20,80],min:0,max:100,discrete:!0}),search:m(kn,{ariaLabel:`Search components`,placeholder:`Search components`,subscriptSizing:`dynamic`}),select:m(Vt$1,{label:`Color`,value:`accent`,subscriptSizing:`dynamic`,options:[{label:`Accent`,value:`accent`},{label:`Primary`,value:`primary`},{label:`Success`,value:`success`}]}),time:m(ka,{label:`Meeting time`,value:`10:45`,hourCycle:24,subscriptSizing:`dynamic`}),tooltip:m(gb,{text:`Saves this project`})};var at=()=>[1,2,3,4,5,6];var rt=()=>[`mod`,`shift`,`v`];var lt=()=>({name:`info`});var pt=e=>({text:`Project information`,icon:e});var ct=()=>({layout:`list`,estimatedRowHeight:44,overscan:100});function st(e,t){e&1&&dt$1(0)}function dt(e,t){if(e&1&&(_(0,`div`,13),Ti$1(1,st,1,0,`ng-container`,14),D()),e&2){let n=t,l=w();se(`preview-centered`,l.kind()===`loading`)(`preview-calendar`,l.kind()===`calendar`)(`preview-tooltip`,l.kind()===`tooltip`)(`bx-overlay-pos-top`,l.kind()===`tooltip`),y(),T(`ngComponentOutlet`,n.component)(`ngComponentOutletInputs`,n.inputs)}}function mt(e,t){e&1&&(_(0,`bx-accordion`,15)(1,`bx-accordion-item`,51)(2,`p`),Q(3,`Project settings and shared preferences.`),D()(),ve(4,`bx-accordion-item`,52)(5,`bx-accordion-item`,53),D()),e&2&&(T(`multiple`,!0),y(),T(`expanded`,!0))}function ut(e,t){e&1&&(_(0,`div`,16)(1,`button`,54),Q(2,`Save`),D(),_(3,`button`,55),Q(4,`Cancel`),D(),_(5,`button`,56),ve(6,`bx-icon`,57),D()())}function vt(e,t){e&1&&(_(0,`bx-card`,17)(1,`p`),Q(2,`Shared components for your next workspace.`),D(),_(3,`div`,58)(4,`button`,59),Q(5,`Open`),D()()())}function gt(e,t){e&1&&(_(0,`div`,18),ve(1,`bx-checkbox`,60)(2,`bx-checkbox`,61)(3,`bx-checkbox`,62),D()),e&2&&(y(),T(`checked`,!0),y(),T(`checked`,!0),y(),T(`indeterminate`,!0))}function bt(e,t){e&1&&(_(0,`div`,19)(1,`span`,63),ve(2,`bx-checkbox-indicator`,64),_(3,`span`),Q(4,`On`),D()(),_(5,`span`,63),ve(6,`bx-checkbox-indicator`,65),_(7,`span`),Q(8,`Some`),D()(),_(9,`span`,63),ve(10,`bx-checkbox-indicator`,64),_(11,`span`),Q(12,`Off`),D()()()),e&2&&(y(2),T(`checked`,!0),y(4),T(`indeterminate`,!0),y(4),T(`checked`,!1))}function ft(e,t){e&1&&(_(0,`div`,20),ve(1,`bx-chip`,66)(2,`bx-chip`,67)(3,`bx-chip`,68)(4,`bx-chip`,69),D()),e&2&&(y(),T(`selected`,!0),y(),T(`removable`,!0))}function xt(e,t){e&1&&(_(0,`bx-container`,21)(1,`bx-card`,70)(2,`p`),Q(3,`Responsive page gutters.`),D()()())}function yt(e,t){e&1&&(_(0,`bx-menu`),ve(1,`bx-menu-item`,71)(2,`bx-menu-item`,72),D())}function _t(e,t){if(e&1&&(_(0,`div`,22)(1,`bx-menu`),ve(2,`bx-menu-item`,71)(3,`bx-menu-item`,72)(4,`bx-menu-item`,73),D(),Ti$1(5,yt,3,0,`ng-template`,null,6,wr),D()),e&2){let n=Tt$1(6);T(`bxContextMenu`,n)}}function wt(e,t){e&1&&(_(0,`bx-collapsible`,23)(1,`p`),Q(2,`Shared components for your workspace.`),D()()),e&2&&T(`expanded`,!0)(`headingLevel`,3)}function Ct(e,t){e&1&&(_(0,`div`,24)(1,`span`,74),Q(2,`Contact 1`),D(),ve(3,`bx-divider`,75),_(4,`span`,74),Q(5,`Contact 2`),D(),ve(6,`bx-divider`,75),_(7,`span`,74),Q(8,`Contact 3`),D()()),e&2&&(y(3),T(`decorative`,!0),y(3),T(`decorative`,!0))}function ht(e,t){e&1&&(_(0,`app-preview-frame`,25)(1,`div`,76)(2,`bx-bottom-drawer`,77),ve(3,`bx-checkbox`,78),_(4,`div`,79)(5,`button`,59),Q(6,`Reset`),D(),_(7,`button`,54),Q(8,`Apply`),D()()()()()),e&2&&(T(`width`,480)(`height`,320)(`fill`,!0),y(2),T(`embedded`,!0)(`open`,!0)(`modal`,!1)(`showBackdrop`,!1)(`animationDuration`,0),y(),T(`checked`,!0))}function St(e,t){e&1&&(_(0,`bx-menu`),ve(1,`bx-menu-item`,82)(2,`bx-menu-item`,83),D()),e&2&&(y(2),T(`danger`,!0))}function Pt(e,t){if(e&1&&(_(0,`div`,26)(1,`button`,80),Q(2,`Actions`),ve(3,`bx-icon`,81),D(),_(4,`bx-menu`),ve(5,`bx-menu-item`,82)(6,`bx-menu-item`,83),D(),Ti$1(7,St,3,1,`ng-template`,null,7,wr),D()),e&2){let n=Tt$1(8);y(),T(`bxDropdown`,n),y(5),T(`danger`,!0)}}function Mt(e,t){if(e&1&&(_(0,`bx-form-field`,27),ve(1,`input`,84),D()),e&2){let n=w(2);T(`forId`,n.previewId+`-error`),y(),T(`id`,n.previewId+`-error`)}}function Et(e,t){e&1&&(_(0,`div`,28)(1,`strong`,85),Q(2,`Create workspace`),D(),ve(3,`bx-input-field`,86)(4,`bx-input-field`,87),_(5,`div`,88)(6,`button`,55),Q(7,`Cancel`),D(),_(8,`button`,54),Q(9,`Create`),D()()())}function kt(e,t){if(e&1&&(_(0,`bx-card`,89),Q(1),D()),e&2){let n=t.$implicit;y(),fe$1(n)}}function Tt(e,t){e&1&&(_(0,`bx-grid`,29),Lt$1(1,kt,2,1,`bx-card`,89,Va),D()),e&2&&(T(`columns`,3)(`gap`,2),y(),jt$1(KP(2,at)))}function zt(e,t){e&1&&(_(0,`div`,30),ve(1,`bx-icon`,90),D())}function Ot(e,t){e&1&&(_(0,`app-preview-frame`,31)(1,`bx-page-container`,91),ve(2,`bx-page-header`,92),_(3,`bx-page-content`)(4,`bx-grid`,93)(5,`bx-card`),Q(6,`Design`),D(),_(7,`bx-card`),Q(8,`Engineering`),D()()(),_(9,`bx-page-footer`),Q(10,`Updated today`),D()()()),e&2&&(T(`width`,520)(`height`,320),y(),T(`showBreadcrumbs`,!1)(`autoResolveTitlesFromNavigation`,!1),y(),T(`autoResolveTitlesFromNavigation`,!1),y(2),T(`columns`,2)(`gap`,2))}function Nt(e,t){if(e&1&&(_(0,`div`,94),ve(1,`bx-icon`,95),_(2,`span`),Q(3),D()()),e&2){let n=t.$implicit;y(3),fe$1(n)}}function Dt(e,t){if(e&1&&(_(0,`div`,32),Lt$1(1,Nt,4,1,`div`,94,Va),D()),e&2){let n=w(2);T(`infiniteScrollDisabled`,!0),y(),jt$1(n.sampleRows)}}function It(e,t){if(e&1&&(_(0,`div`,94),ve(1,`bx-icon`,95),_(2,`span`),Q(3),D()()),e&2){let n=t.$implicit;y(3),fe$1(n)}}function Rt(e,t){if(e&1&&(_(0,`div`,33),Lt$1(1,It,4,1,`div`,94,Va),D()),e&2){let n=w(2);T(`loadMoreHasMore`,!0)(`loadMoreRevision`,n.sampleRows),y(),jt$1(n.sampleRows.slice(0,2))}}function Bt(e,t){e&1&&(_(0,`button`,34),ve(1,`bx-icon`,96),Q(2,`Save changes`),D()),e&2&&T(`loading`,!0)}function Ft(e,t){e&1&&(_(0,`bx-menu`),ve(1,`bx-menu-item`,97)(2,`bx-menu-item`,98)(3,`bx-menu-item`,99),D())}function At(e,t){e&1&&(_(0,`bx-menu`),ve(1,`bx-menu-item`,100),D()),e&2&&(y(),T(`shortcut`,KP(1,rt)))}function Lt(e,t){if(e&1&&(_(0,`app-preview-frame`,31)(1,`bx-modal-centered`,101),ve(2,`bx-input-field`,102),D()()),e&2){let n=w(2),l=Tt$1(3);T(`width`,480)(`height`,320),y(),T(`config`,n.modalConfig)(`id`,n.previewId)(`isOpen`,!0)(`isAnimated`,!1)(`animationDuration`,0)(`isBottomSheetModalActive`,!1)(`hasDefaultContentWrapperClass`,!0)(`headerTemplate`,null)(`footerTemplate`,l)(`hasBanner`,!0)}}function Wt(e,t){e&1&&(_(0,`app-preview-frame`,35)(1,`div`,103)(2,`h3`),Q(3,`Workspace`),D(),_(4,`p`),Q(5,`Project overview`),D(),_(6,`bx-grid`,93)(7,`bx-card`),Q(8,`Design`),D(),_(9,`bx-card`),Q(10,`Engineering`),D()()(),ve(11,`bx-modal-backdrop`,104),D()),e&2&&(T(`width`,480)(`height`,320)(`fill`,!0),y(6),T(`columns`,2)(`gap`,3),y(5),T(`isOpen`,!0)(`isAnimated`,!1))}function jt(e,t){e&1&&(_(0,`app-preview-frame`,31)(1,`div`,105),ve(2,`bx-modal-banner`,106),D()()),e&2&&(T(`width`,480)(`height`,220),y(2),T(`header`,Cs(5,pt,KP(4,lt)))(`showCloseButton`,!0))}function Ht(e,t){if(e&1&&(_(0,`app-preview-frame`,31)(1,`bx-modal-centered`,101)(2,`p`),Q(3,`This draft has unsaved changes.`),D()()()),e&2){let n=w(2),l=Tt$1(5);T(`width`,480)(`height`,320),y(),T(`config`,n.confirmConfig)(`id`,n.previewId)(`isOpen`,!0)(`isAnimated`,!1)(`animationDuration`,0)(`isBottomSheetModalActive`,!1)(`hasDefaultContentWrapperClass`,!0)(`headerTemplate`,null)(`footerTemplate`,l)(`hasBanner`,!0)}}function Vt(e,t){if(e&1&&(_(0,`app-preview-frame`,31)(1,`bx-modal-centered`,101)(2,`h3`),Q(3,`Review changes`),D(),_(4,`p`),Q(5,`Your workspace settings are ready.`),D()()()),e&2){let n=w(2),l=Tt$1(7);T(`width`,480)(`height`,240),y(),T(`config`,n.modalConfig)(`id`,n.previewId)(`isOpen`,!0)(`isAnimated`,!1)(`animationDuration`,0)(`isBottomSheetModalActive`,!1)(`hasDefaultContentWrapperClass`,!0)(`headerTemplate`,null)(`footerTemplate`,l)(`hasBanner`,!1)}}function Gt(e,t){if(e&1&&(_(0,`app-preview-frame`,31)(1,`bx-modal-centered`,101)(2,`p`),Q(3,`Choose who can access this workspace.`),D()()()),e&2){let n=w(2),l=Tt$1(9);T(`width`,480)(`height`,260),y(),T(`config`,n.modalConfig)(`id`,n.previewId)(`isOpen`,!0)(`isAnimated`,!1)(`animationDuration`,0)(`isBottomSheetModalActive`,!1)(`hasDefaultContentWrapperClass`,!0)(`headerTemplate`,l)(`footerTemplate`,null)(`hasBanner`,!1)}}function Kt(e,t){if(e&1&&(_(0,`app-preview-frame`,25)(1,`bx-modal-bottom-sheet`,107)(2,`bx-stack`,108)(3,`button`,59),ve(4,`bx-icon`,109),Q(5,`Share`),D(),_(6,`button`,59),ve(7,`bx-icon`,110),Q(8,`Copy link`),D()()()()),e&2){let n=w(2),l=Tt$1(13);T(`width`,480)(`height`,320)(`fill`,!0),y(),T(`config`,n.sheetConfig)(`id`,n.previewId)(`isOpen`,!0)(`isAnimated`,!1)(`animationDuration`,0)(`headerTemplate`,null)(`footerTemplate`,l)(`hasBanner`,!0),y(),T(`gap`,3)}}function $t(e,t){if(e&1&&(_(0,`app-preview-frame`,25)(1,`bx-modal-side`,111)(2,`bx-stack`,112)(3,`strong`),Q(4,`Alex Morgan`),D(),ve(5,`bx-tag`,113),_(6,`p`),Q(7,`Manage this member's access and permissions.`),D()()()()),e&2){let n=w(2),l=Tt$1(11);T(`width`,480)(`height`,320)(`fill`,!0),y(),T(`config`,n.sideConfig)(`id`,n.previewId)(`isOpen`,!0)(`isAnimated`,!1)(`animationDuration`,0)(`isBottomSheetModalActive`,!1)(`hasDefaultContentWrapperClass`,!0)(`headerTemplate`,null)(`footerTemplate`,l)(`hasBanner`,!0),y(),T(`gap`,4)}}function qt(e,t){e&1&&(_(0,`app-preview-frame`,25)(1,`bx-side-panel-layout`,40)(2,`bx-side-panel`,114)(3,`h3`,115),Q(4,`Inspector`),D(),_(5,`bx-stack`,112)(6,`p`),Q(7,`Selected project`),D(),ve(8,`bx-tag`,116),_(9,`p`),Q(10,`Workspace settings and details.`),D()()(),_(11,`div`,103),Q(12,`Workspace`),D()()()),e&2&&(T(`width`,480)(`height`,320)(`fill`,!0),y(2),T(`open`,!0)(`width`,300)(`autoFocus`,!1)(`restoreFocus`,!1)(`closeOnEscape`,!1)(`animationDuration`,0),y(3),T(`gap`,4))}function Yt(e,t){e&1&&(_(0,`bx-popover`,36)(1,`strong`),Q(2,`Project information`),D(),_(3,`p`),Q(4,`Project information and preferences.`),D(),_(5,`div`,88)(6,`button`,59),Q(7,`Open`),D()()())}function Qt(e,t){e&1&&(_(0,`bx-input-field`,37)(1,`span`,117),Q(2,`$`),D()())}function Ut(e,t){e&1&&(_(0,`div`,38),ve(1,`bx-progress-bar`,118)(2,`bx-progress-bar`,119),D()),e&2&&(y(),T(`value`,64),y(),T(`value`,32))}function Xt(e,t){e&1&&(_(0,`div`,39)(1,`bx-radio-group`,120),ve(2,`bx-radio`,121),D()())}function Jt(e,t){e&1&&(_(0,`div`,39)(1,`bx-radio-group`,122),ve(2,`bx-radio`,123)(3,`bx-radio`,124)(4,`bx-radio`,125),D()())}function Zt(e,t){if(e&1&&(_(0,`app-preview-frame`,25)(1,`div`,126,8)(3,`section`,127,9)(5,`h3`),Q(6,`Files`),D(),_(7,`p`),Q(8,`Components`),D(),_(9,`p`),Q(10,`Styles`),D(),_(11,`p`),Q(12,`Assets`),D()(),ve(13,`div`,128),_(14,`section`,129)(15,`h3`),Q(16,`Preview`),D(),ve(17,`bx-icon`,130),_(18,`p`),Q(19,`Shared workspace`),D()()()()),e&2){let n=Tt$1(2),l=Tt$1(4),s=w(2);T(`width`,480)(`height`,320)(`fill`,!0),y(3),_e(`inline-size`,s.resizePreviewWidth,`px`),y(10),_e(`inset-inline-start`,s.resizePreviewWidth,`px`),T(`resizeTarget`,l)(`resizeContainer`,n)(`resizeValue`,s.resizePreviewWidth)(`resizeMinSize`,120)(`resizeMaxSize`,320)(`resizeIdleDelay`,0)(`resizeDisableShrink`,!1)}}function ei(e,t){if(e&1&&(_(0,`div`,40),ve(1,`bx-side-nav`,131),D()),e&2){let n=w(2);y(),T(`config`,n.sideNavConfig)(`groups`,n.navigationGroups)}}function ni(e,t){if(e&1&&(_(0,`app-preview-frame`,31)(1,`div`,132),ve(2,`app-toast-preview`,133),D()()),e&2){let n=w(2);T(`width`,440)(`height`,220),y(2),T(`core`,!0)(`data`,n.savedToast)}}function ti(e,t){e&1&&(_(0,`div`,41)(1,`div`,134),ve(2,`bx-skeleton`,135),D(),ve(3,`bx-skeleton`,136),D()),e&2&&(y(2),T(`animated`,!1),y(),T(`lines`,3)(`animated`,!1))}function ii(e,t){e&1&&(_(0,`div`,42),ve(1,`input`,137),_(2,`span`,138)(3,`span`),Q(4,`Volume`),D(),_(5,`span`),Q(6,`64%`),D()()()),e&2&&(y(),T(`value`,64))}function oi(e,t){e&1&&(_(0,`bx-stack`,43)(1,`bx-card`),Q(2,`Design`),D(),_(3,`bx-card`),Q(4,`Engineering`),D(),_(5,`bx-card`),Q(6,`Research`),D()()),e&2&&T(`gap`,2)}function ai(e,t){if(e&1&&ve(0,`bx-stepper`,44),e&2){let n=w(2);T(`steps`,n.gallerySteps)(`linear`,!1)}}function ri(e,t){e&1&&(_(0,`bx-input-field`,45)(1,`span`,139),Q(2,`kg`),D()())}function li(e,t){e&1&&ve(0,`app-surface-preview`)}function pi(e,t){e&1&&(_(0,`bx-tabs`,46)(1,`bx-tab`,140)(2,`p`),Q(3,`Project overview`),D()(),_(4,`bx-tab`,141)(5,`p`),Q(6,`Recent activity`),D()(),_(7,`bx-tab`,142)(8,`p`),Q(9,`Project settings`),D()()()),e&2&&T(`dragSelection`,!1)}function ci(e,t){e&1&&(_(0,`div`,20),ve(1,`bx-tag`,143)(2,`bx-tag`,144)(3,`bx-tag`,145),D()),e&2&&(y(),T(`focusable`,!1),y(),T(`focusable`,!1),y(),T(`focusable`,!1))}function si(e,t){if(e&1&&(_(0,`bx-form-field`,47)(1,`textarea`,146),Q(2,`Ship the catalog refinements.`),D()()),e&2){let n=w(2);T(`forId`,n.previewId+`-notes`),y(),T(`id`,n.previewId+`-notes`)}}function di(e,t){if(e&1&&(_(0,`app-preview-frame`,31)(1,`div`,132)(2,`bx-stack`,112),ve(3,`app-toast-preview`,147)(4,`app-toast-preview`,133),D()()()),e&2){let n=w(2);T(`width`,440)(`height`,280),y(2),T(`gap`,3),y(),T(`core`,!0)(`data`,n.uploadToast)(`duration`,6e3)(`progress`,!0),y(),T(`core`,!0)(`data`,n.connectionToast)}}function mi(e,t){e&1&&(_(0,`div`,18),ve(1,`bx-slide-toggle`,148)(2,`bx-slide-toggle`,149),D()),e&2&&(y(),T(`checked`,!0),y(),T(`checked`,!1))}function ui(e,t){e&1&&(_(0,`div`,48),ve(1,`bx-tooltip`,150),_(2,`button`,151),Q(3,`Save`),D()())}function vi(e,t){e&1&&ve(0,`bx-icon`,153)}function gi(e,t){if(e&1&&(_(0,`div`,49)(1,`bx-top-nav`,131),Ti$1(2,vi,1,0,`ng-template`,152),D()()),e&2){let n=w(2);y(),T(`config`,n.topNavConfig)(`groups`,n.navigationGroups)}}function bi(e,t){e&1&&(_(0,`div`,18)(1,`p`),Q(2,`Project notes`),D(),_(3,`span`,154),Q(4,`Quarterly planning notes for the design team and engineering review`),D()())}function fi(e,t){if(e&1&&(_(0,`div`,94),ve(1,`bx-icon`,95),_(2,`span`),Q(3),D()()),e&2){let n=t.$implicit;y(3),fe$1(n)}}function xi(e,t){if(e&1&&(_(0,`div`,50,10)(2,`bx-virtual-collection`,155,11),Ti$1(4,fi,4,1,`ng-template`,156),D()()),e&2){let n=Tt$1(1),l=Tt$1(3),s=w(2);y(2),T(`items`,s.sampleRows)(`trackBy`,s.trackRow)(`scrollContainer`,n)(`config`,KP(5,ct)),y(2),T(`bxVirtualItem`,l)}}function yi(e,t){e&1&&(_(0,`div`,30),ve(1,`bx-icon`,157),D())}function _i(e,t){if(e&1&&L$1(0,mt,6,2,`bx-accordion`,15)(1,ut,7,0,`div`,16)(2,vt,6,0,`bx-card`,17)(3,gt,4,3,`div`,18)(4,bt,13,3,`div`,19)(5,ft,5,2,`div`,20)(6,xt,4,0,`bx-container`,21)(7,_t,7,1,`div`,22)(8,wt,3,2,`bx-collapsible`,23)(9,Ct,9,2,`div`,24)(10,ht,9,9,`app-preview-frame`,25)(11,Pt,9,2,`div`,26)(12,Mt,2,2,`bx-form-field`,27)(13,Et,10,0,`div`,28)(14,Tt,3,3,`bx-grid`,29)(15,zt,2,0,`div`,30)(16,Ot,11,7,`app-preview-frame`,31)(17,Dt,3,1,`div`,32)(18,Rt,3,2,`div`,33)(19,Bt,3,1,`button`,34)(20,Ft,4,0,`bx-menu`)(21,At,2,2,`bx-menu`)(22,Lt,3,12,`app-preview-frame`,31)(23,Wt,12,7,`app-preview-frame`,35)(24,jt,3,7,`app-preview-frame`,31)(25,Ht,4,12,`app-preview-frame`,31)(26,Vt,6,12,`app-preview-frame`,31)(27,Gt,4,12,`app-preview-frame`,31)(28,Kt,9,12,`app-preview-frame`,25)(29,$t,8,14,`app-preview-frame`,25)(30,qt,13,10,`app-preview-frame`,25)(31,Yt,8,0,`bx-popover`,36)(32,Qt,3,0,`bx-input-field`,37)(33,Ut,3,2,`div`,38)(34,Xt,3,0,`div`,39)(35,Jt,5,0,`div`,39)(36,Zt,20,14,`app-preview-frame`,25)(37,ei,2,2,`div`,40)(38,ni,3,4,`app-preview-frame`,31)(39,ti,4,3,`div`,41)(40,ii,7,1,`div`,42)(41,oi,7,1,`bx-stack`,43)(42,ai,1,2,`bx-stepper`,44)(43,ri,3,0,`bx-input-field`,45)(44,li,1,0,`app-surface-preview`)(45,pi,10,1,`bx-tabs`,46)(46,ci,4,3,`div`,20)(47,si,3,2,`bx-form-field`,47)(48,di,5,9,`app-preview-frame`,31)(49,mi,3,2,`div`,18)(50,ui,4,0,`div`,48)(51,gi,3,2,`div`,49)(52,bi,5,0,`div`,18)(53,xi,5,6,`div`,50)(54,yi,2,0,`div`,30),e&2){let n,l=w();j$1((n=l.kind())===`accordion`?0:n===`button`?1:n===`card`?2:n===`checkbox`?3:n===`checkbox-indicator`?4:n===`chips`?5:n===`container`?6:n===`context-menu`?7:n===`disclosure`?8:n===`divider`?9:n===`drawer`?10:n===`dropdown`?11:n===`error`?12:n===`form`?13:n===`grid`?14:n===`icon`?15:n===`layout`?16:n===`list`?17:n===`load-more`?18:n===`loading-button`?19:n===`menu`?20:n===`menu-item`?21:n===`modal`?22:n===`modal-backdrop`?23:n===`modal-banner`?24:n===`modal-centered`?25:n===`modal-footer`?26:n===`modal-header`?27:n===`modal-sheet`?28:n===`modal-side`?29:n===`panel`?30:n===`popover`?31:n===`prefix`?32:n===`progress`?33:n===`radio`?34:n===`radio-group`?35:n===`resize`?36:n===`side-nav`?37:n===`simple-toast`?38:n===`skeleton`?39:n===`slider`?40:n===`stack`?41:n===`stepper`?42:n===`suffix`?43:n===`surface`?44:n===`tabs`?45:n===`tags`?46:n===`textarea`?47:n===`toast-core`?48:n===`toggle`?49:n===`tooltip-trigger`?50:n===`top-nav`?51:n===`truncate`?52:n===`virtual-list`?53:54)}}function wi(e,t){e&1&&(_(0,`button`,54),Q(1,`Send invite`),D())}function Ci(e,t){e&1&&(_(0,`div`,88)(1,`button`,59),Q(2,`Keep editing`),D(),_(3,`button`,158),Q(4,`Discard`),D()())}function hi(e,t){e&1&&(_(0,`div`,159)(1,`button`,160),Q(2,`Back`),D(),_(3,`div`,134)(4,`button`,59),Q(5,`Cancel`),D(),_(6,`button`,54),Q(7,`Continue`),D()()())}function Si(e,t){e&1&&(_(0,`div`,161),ve(1,`bx-icon`,162),_(2,`div`)(3,`h3`),Q(4,`New workspace`),D(),_(5,`p`),Q(6,`Custom header content`),D()()())}function Pi(e,t){e&1&&(_(0,`button`,54),Q(1,`Done`),D())}function Mi(e,t){e&1&&(_(0,`button`,59),Q(1,`Close actions`),D())}var ae=class e{resizePreviewWidth=210;edgeToEdge=g(()=>[`drawer`,`modal-backdrop`,`modal-side`,`modal-sheet`,`panel`,`resize`].includes(this.kind()));savedToast={title:`Changes saved`,message:`Your workspace is up to date.`,type:`success`,icon:{name:`circle-check`}};uploadToast={title:`Uploading assets`,message:`Keep working while your files sync.`,type:`info`,loading:!0};connectionToast={title:null,message:`Connection restored`,type:`info`,icon:{name:`wifi`}};gallerySteps=S;previewId=`catalog-${Jt$1()}`;sampleRows=[`Design system`,`Form controls`,`Navigation`,`Overlays`,`Layouts`,`Accessibility`];trackRow=t=>t;sideNavConfig={position:`inline`,mobile:!1,collapsible:!1,searchable:!1,width:`100%`,persistenceKey:``};topNavConfig={position:`inline`,compact:!1,searchable:!1,showItemIcons:!1};navigationGroups=[{id:`preview`,title:``,items:[{id:`home`,route:`/`,label:`Home`,icon:{name:`house`},visible:!0},{id:`library`,route:`/components`,label:`Library`,icon:{name:`layers`},visible:!0},{id:`settings`,route:`/appearance`,label:`Settings`,icon:{name:`settings-2`},visible:!0}]}];modalConfig=new J({header:{text:`Workspace access`,icon:{name:`users`}},style:{animate:!1,hasBackdrop:!1,wrapperStyles:`inline-size: 22rem; max-inline-size: 100%;`}});confirmConfig=new J({header:{text:`Discard draft?`,icon:{name:`triangle-alert`,color:`text-danger`}},style:{animate:!1,hasBackdrop:!1,wrapperStyles:`inline-size: 21rem; max-inline-size: 100%;`}});sideConfig=new J({header:{text:`Member details`,icon:{name:`user`}},style:{animate:!1,hasBackdrop:!1,wrapperStyles:`inline-size: 19rem; max-inline-size: 100%;`}});sheetConfig=new J({header:{text:`Quick actions`,icon:{name:`ellipsis`}},style:{animate:!1,hasBackdrop:!1,wrapperStyles:`--bx-drawer-min-height: 0; --bx-drawer-footer-background: transparent; inline-size: 100%;`}});recipe=g(()=>Xn[this.kind()]);kind=b$1.required();static ɵfac=function(n){return new(n||e)};static ɵcmp=$({type:e,selectors:[[`app-component-preview`]],hostAttrs:[`aria-hidden`,`true`,`inert`,``],hostVars:3,hostBindings:function(n,l){n&2&&(B(`data-preview-kind`,l.kind()),se(`is-edge-preview`,l.edgeToEdge()))},inputs:{kind:[1,`kind`]},features:[Qt$1([{provide:Ae$1,useValue:Un}])],decls:14,vars:1,consts:[[`inviteFooter`,``],[`confirmFooter`,``],[`reviewFooter`,``],[`customHeader`,``],[`doneFooter`,``],[`sheetFooter`,``],[`contextMenu`,``],[`dropdownMenu`,``],[`split`,``],[`resizePane`,``],[`virtualScroll`,``],[`collection`,``],[1,`preview-component`,3,`preview-centered`,`preview-calendar`,`preview-tooltip`,`bx-overlay-pos-top`],[1,`preview-component`],[4,`ngComponentOutlet`,`ngComponentOutletInputs`],[3,`multiple`],[1,`preview-row`,`preview-row-center`],[`title`,`Project`,`subtitle`,`Updated today`,1,`preview-card`],[1,`preview-stack`],[1,`preview-row`,`preview-row-center`,`preview-indicator-row`],[1,`preview-chip-row`],[`size`,`full`,1,`preview-container`],[1,`preview-context`,3,`bxContextMenu`],[`title`,`Project details`,3,`expanded`,`headingLevel`],[1,`preview-list-surface`],[3,`width`,`height`,`fill`],[1,`preview-dropdown`],[`label`,`Reference`,`error`,`Enter at least three characters.`,3,`forId`],[1,`preview-form-preview`],[1,`preview-grid`,3,`columns`,`gap`],[1,`preview-icon-halo`],[3,`width`,`height`],[`bxInfiniteScroll`,``,1,`preview-list`,3,`infiniteScrollDisabled`],[`bxLoadMore`,``,1,`preview-list`,3,`loadMoreHasMore`,`loadMoreRevision`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,3,`loading`],[1,`preview-backdrop-frame`,3,`width`,`height`,`fill`],[1,`preview-popover-panel`],[`label`,`Amount`,`value`,`1,250.00`],[1,`preview-stack`,`preview-progress-preview`],[1,`preview-center-row`],[1,`preview-viewport`],[1,`preview-skeleton-preview`],[1,`preview-stack`,`preview-slider-preview`],[1,`preview-stack`,3,`gap`],[`mode`,`wizard`,`selectionMode`,`internal`,`readOnly`,`true`,3,`steps`,`linear`],[`label`,`Weight`,`value`,`12`],[`selectedValue`,`overview`,3,`dragSelection`],[`label`,`Notes`,`hint`,`Visible to teammates`,3,`forId`],[1,`preview-tooltip-stage`],[1,`preview-navigation`],[1,`preview-list`],[`title`,`Details`,3,`expanded`],[`title`,`Permissions`],[`title`,`Billing`],[`bx-button`,``,`type`,`button`,`variant`,`filled`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`],[`bx-button`,``,`type`,`button`,`variant`,`mini-fab`,`aria-label`,`Add`],[`name`,`plus`,`size`,`20`],[`bxCardFooter`,``,1,`preview-row`,`preview-row-end`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`],[`label`,`Draft`,3,`checked`],[`label`,`In review`,3,`checked`],[`label`,`Published`,3,`indeterminate`],[1,`preview-indicator`],[3,`checked`],[3,`indeterminate`],[`label`,`Design`,3,`selected`],[`label`,`Engineering`,3,`removable`],[`label`,`Research`],[`label`,`Marketing`],[`title`,`Centered content`],[`label`,`Copy`,`icon`,`copy`],[`label`,`Paste`,`icon`,`clipboard`],[`label`,`Quote`,`icon`,`quote`],[1,`preview-item`],[3,`decorative`],[1,`preview-viewport`,`preview-bottom`],[`title`,`Filters`,`maxHeight`,`100%`,`panelStyle`,`--bx-drawer-footer-background: transparent; --bx-glass-min-opacity: 0.72;`,3,`embedded`,`open`,`modal`,`showBackdrop`,`animationDuration`],[`label`,`Active projects`,3,`checked`],[`bxDrawerFooter`,``,1,`preview-row`,`preview-row-end`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`16`],[`label`,`Duplicate`,`icon`,`copy`],[`label`,`Archive`,`icon`,`archive`,3,`danger`],[`bxInput`,``,`value`,`AB`,`aria-invalid`,`true`,3,`id`],[1,`preview-form-title`],[`label`,`Workspace`,`value`,`Blocks library`,`subscriptSizing`,`dynamic`],[`label`,`Owner email`,`placeholder`,`name@company.com`,`subscriptSizing`,`dynamic`],[1,`preview-row`,`preview-row-end`],[1,`preview-cell`],[`name`,`sparkles`,`size`,`40`,`color`,`accent`,`bgColor`,`auto`],[`size`,`full`,1,`preview-page-layout`,3,`showBreadcrumbs`,`autoResolveTitlesFromNavigation`],[`pageTitle`,`Workspace`,3,`autoResolveTitlesFromNavigation`],[3,`columns`,`gap`],[1,`preview-list-row`],[`name`,`file-text`,`size`,`18`],[`name`,`save`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,`endIcon`,`chevron-right`],[`label`,`Share`,`icon`,`share-2`,`endIcon`,`chevron-right`],[`label`,`Archive`,`icon`,`archive`],[`label`,`Open view`,`icon`,`external-link`,3,`shortcut`],[3,`config`,`id`,`isOpen`,`isAnimated`,`animationDuration`,`isBottomSheetModalActive`,`hasDefaultContentWrapperClass`,`headerTemplate`,`footerTemplate`,`hasBanner`],[`label`,`Email address`,`value`,`alex@workspace.dev`,`subscriptSizing`,`dynamic`],[1,`preview-backdrop-content`],[3,`isOpen`,`isAnimated`],[1,`preview-banner-stage`],[3,`header`,`showCloseButton`],[3,`config`,`id`,`isOpen`,`isAnimated`,`animationDuration`,`headerTemplate`,`footerTemplate`,`hasBanner`],[`direction`,`horizontal`,3,`gap`],[`name`,`share-2`,`size`,`18`],[`name`,`copy`,`size`,`18`],[`layout`,`right`,3,`config`,`id`,`isOpen`,`isAnimated`,`animationDuration`,`isBottomSheetModalActive`,`hasDefaultContentWrapperClass`,`headerTemplate`,`footerTemplate`,`hasBanner`],[3,`gap`],[`text`,`Workspace admin`,`color`,`accent`],[`layoutMode`,`push`,3,`open`,`width`,`autoFocus`,`restoreFocus`,`closeOnEscape`,`animationDuration`],[`bxSidePanelHeader`,``],[`text`,`Design system`,`color`,`accent`],[`bxPrefix`,``],[`label`,`Upload progress`,3,`value`],[`label`,`Import progress`,3,`value`],[`label`,`Frequency`,`name`,`preview-radio`,`value`,`daily`],[`label`,`Daily`,`name`,`preview-radio`,`value`,`daily`],[`label`,`Frequency`,`name`,`preview-radio-group`,`value`,`daily`],[`label`,`Daily`,`name`,`preview-radio-group`,`value`,`daily`],[`label`,`Weekly`,`name`,`preview-radio-group`,`value`,`weekly`],[`label`,`Monthly`,`name`,`preview-radio-group`,`value`,`monthly`],[1,`preview-split`],[1,`preview-resize-pane`],[`bxResizeHandle`,``,`resizeLabel`,`Resize file browser`,1,`preview-resize-handle`,3,`resizeTarget`,`resizeContainer`,`resizeValue`,`resizeMinSize`,`resizeMaxSize`,`resizeIdleDelay`,`resizeDisableShrink`],[1,`preview-split-content`],[`name`,`file-code`,`size`,`40`],[3,`config`,`groups`],[1,`preview-toast-stage`],[3,`core`,`data`],[1,`preview-row`],[`shape`,`circle`,`width`,`40px`,`height`,`40px`,3,`animated`],[3,`lines`,`animated`],[`bxSlider`,``,`type`,`range`,`min`,`0`,`max`,`100`,`aria-label`,`Volume`,3,`value`],[1,`preview-row`,`preview-row-between`,`preview-caption`],[`bxSuffix`,``],[`label`,`Overview`,`value`,`overview`],[`label`,`Activity`,`value`,`activity`],[`label`,`Settings`,`value`,`settings`],[`text`,`Skopje`,`leadingIcon`,`map-pin`,`trailingNumber`,`2`,`size`,`small`,3,`focusable`],[`text`,`Design`,`color`,`accent`,`size`,`small`,3,`focusable`],[`text`,`Archived`,`size`,`small`,3,`focusable`],[`bxInput`,``,`rows`,`2`,3,`id`],[3,`core`,`data`,`duration`,`progress`],[`label`,`Notifications`,3,`checked`],[`label`,`Weekly digest`,3,`checked`],[`text`,`Saves this project`,1,`bx-overlay-pos-top`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,`bxTooltip`,`Saves this project`],[`bxTopNavBrand`,``],[`name`,`blocks`,`size`,`20`],[`bxTruncate`,``],[3,`items`,`trackBy`,`scrollContainer`,`config`],[3,`bxVirtualItem`],[`name`,`blocks`,`size`,`32`,`color`,`accent`,`bgColor`,`auto`],[`bx-button`,``,`type`,`button`,`variant`,`filled`,`color`,`danger`],[1,`preview-row`,`preview-row-between`],[`bx-button`,``,`type`,`button`],[1,`preview-custom-header`],[`name`,`folder-plus`,`size`,`24`]],template:function(n,l){if(n&1&&(L$1(0,dt,2,10,`div`,12)(1,_i,55,1),Ti$1(2,wi,2,0,`ng-template`,null,0,wr)(4,Ci,5,0,`ng-template`,null,1,wr)(6,hi,8,0,`ng-template`,null,2,wr)(8,Si,7,0,`ng-template`,null,3,wr)(10,Pi,2,0,`ng-template`,null,4,wr)(12,Mi,2,0,`ng-template`,null,5,wr)),n&2){let s;j$1((s=l.recipe())?0:1,s)}},dependencies:[WL,fe,$r,Sn,Y,va,Ae,Ra,Ia,ya,Da,Ft$1,Sa,Ea,qt$1,Wn,bT,HT,Sb,vb,fT,ST,RT,MT,IT,TT,_l,NT,Qd,OT,BT,ET,AT,eu,yT,kT,Zd,CT,wb,yb,FT,LT,Ml,mT,pT,Kd,gb,Ui,Mo,Z,j,L,ee$1,ne,it$1,at$1,Vn,oe,ee,ie],styles:[`
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
}`]})};var Jn={"page-container":`layout`,container:`container`,stack:`stack`,grid:`grid`,divider:`divider`,icon:`icon`,surface:`surface`,tag:`tags`,chip:`chips`,skeleton:`skeleton`,"loading-spinner":`loading`,"loading-indicator":`loading-indicator`,"progress-bar":`progress`,alert:`alert`,card:`card`,collapsible:`disclosure`,accordion:`accordion`,stepper:`stepper`,tabs:`tabs`,tooltip:`tooltip`,"tooltip-directive":`tooltip-trigger`,truncate:`truncate`,"menu-item":`menu-item`,menu:`menu`,dropdown:`dropdown`,"context-menu":`context-menu`,popover:`popover`,"resize-handle":`resize`,"side-panel":`panel`,"infinite-scroll":`list`,"virtual-collection":`virtual-list`,button:`button`,"button-loading":`loading-button`,"form-field":`field`,"native-control":`textarea`,"input-field":`input-field`,"date-picker":`date-picker`,"time-picker":`time`,"search-input":`search`,"checkbox-indicator":`checkbox-indicator`,checkbox:`checkbox`,radio:`radio`,"radio-group":`radio-group`,"slide-toggle":`toggle`,slider:`slider`,"range-slider":`range-slider`,select:`select`,"multi-select":`multiselect`,autocomplete:`autocomplete`,"signal-forms":`form`,hint:`field-hint`,error:`error`,prefix:`prefix`,suffix:`suffix`,"load-more":`load-more`,breadcrumbs:`breadcrumbs`,"top-nav":`top-nav`,"side-nav":`side-nav`,"modal-backdrop":`modal-backdrop`,"modal-banner":`modal-banner`,"modal-header":`modal-header`,"modal-footer":`modal-footer`,"modal-core":`modal`,"modal-centered":`modal-centered`,"modal-side":`modal-side`,"modal-bottom-sheet":`modal-sheet`,"toast-core":`toast-core`,"simple-toast":`simple-toast`,"bottom-drawer":`drawer`,calendar:`calendar`};function Zn(e){return Jn[e.id]??`surface`}function et(e){return e.layout?[`/components/layout`,e.id]:[`/components`,e.id]}var Ei=[`catalogScroll`];var ki=[`results`];var Ti=(e,t)=>t.title;var zi=(e,t)=>t.id;function Oi(e,t){if(e&1){let n=ut$1();_(0,`bx-multi-select`,17),ZO(),J$1(`ngModelChange`,function(s){Le(n);let f=w();return je(f.updateCategories(s))}),D()}if(e&2){let n=w();T(`clearable`,!0)(`showSelectAll`,!1)(`options`,n.categories())(`ngModel`,n.selectedCategories()),QO()}}function Ni(e,t){if(e&1&&(_(0,`article`,21)(1,`div`,22),ve(2,`app-component-preview`,23),D(),_(3,`div`,24)(4,`h3`)(5,`a`,25),Q(6),D()(),_(7,`p`),Q(8),D(),_(9,`code`,26),Q(10),D()()()),e&2){let n=t.$implicit,l=w(2);y(2),T(`kind`,l.previewKind(n)),y(3),T(`routerLink`,l.componentRoute(n)),y(),fe$1(n.title),y(2),fe$1(n.description),y(2),fe$1(n.selector)}}function Di(e,t){if(e&1&&(_(0,`div`,18)(1,`h2`),Q(2),D(),ve(3,`bx-divider`,19),D(),_(4,`div`,20),Lt$1(5,Ni,11,5,`article`,21,zi),D()),e&2){let n=t.$implicit;y(2),fe$1(n.title),y(),T(`decorative`,!0),y(),B(`aria-label`,n.title),y(),jt$1(n.entries)}}function Ii(e,t){e&1&&(_(0,`bx-card`,14)(1,`h2`),Q(2,`No components found`),D(),_(3,`p`),Q(4,`Try fewer words or clear the category filter to show the whole catalog.`),D()()),e&2&&T(`surfaceEffects`,!1)}function Ri(e,t){if(e&1){let n=ut$1();_(0,`div`,15)(1,`button`,27),J$1(`click`,function(){Le(n);let s=w();return je(s.renderMore())}),Q(2,`Load more components`),D()()}}var nt=class e$1{activatedRoute=f$1(ho);routeData=lJ(this.activatedRoute.data,{initialValue:this.activatedRoute.snapshot.data});groupOrder=i.map(t=>t.section);batchSize=12;baseEntries=g(()=>e.filter(t=>(!this.layoutOnly()||t.layout)&&(!this.category()||t.group===this.category())));catalogScrollRef=Nt$1(`catalogScroll`);resultsRef=Nt$1(`results`);figmaLibraryUrl=n;componentRoute=et;previewKind=Zn;layoutOnly=g(()=>this.routeData().layout===!0);category=g(()=>{let t=this.routeData().category;return typeof t==`string`?t:void 0});categories=g(()=>{let t=new Set(this.baseEntries().map(n=>n.group));return this.groupOrder.filter(n=>t.has(n)).map(n=>({label:n,value:n}))});filtered=g(()=>{let t=this.query().toLowerCase().trim().split(/\s+/).filter(Boolean),n=this.selectedCategories();return this.baseEntries().filter(l=>(!n.length||n.includes(l.group))&&t.every(s=>`${l.title} ${l.group} ${l.description} ${l.selector} ${l.symbol}`.toLowerCase().includes(s))).toSorted((l,s)=>this.groupRank(l)-this.groupRank(s))});visibleEntries=g(()=>this.filtered().slice(0,this.renderedCount()));groups=g(()=>{let t=/* @__PURE__ */ new Map,n=/* @__PURE__ */ new Map;for(let l of this.filtered())t.set(l.group,(t.get(l.group)??0)+1);for(let l of this.visibleEntries()){let s=n.get(l.group)??[];s.push(l),n.set(l.group,s)}return[...n].map(([l,s])=>({title:l,entries:s,total:t.get(l)??s.length}))});hasMore=g(()=>this.visibleEntries().length<this.filtered().length);query=M(``);selectedCategories=M([]);renderedCount=za({source:this.filtered,computation:()=>this.batchSize});updateSearch(t){this.query.set(t),this.resetScroll()}updateCategories(t){this.selectedCategories.set(t??[]),this.resetScroll()}renderMore(){this.hasMore()&&this.renderedCount.update(t=>Math.min(t+this.batchSize,this.filtered().length))}groupRank(t){let n=this.groupOrder.indexOf(t.group);return n<0?this.groupOrder.length:n}resetScroll(){let t=this.catalogScrollRef()?.nativeElement,n=this.resultsRef()?.nativeElement;if(!t||!n)return;let l=t.getBoundingClientRect().top+t.clientTop,s=n.getBoundingClientRect().top-l;s<0&&t.scrollTo({top:Math.max(0,t.scrollTop+s),behavior:`instant`})}static ɵfac=function(n){return new(n||e$1)};static ɵcmp=$({type:e$1,selectors:[[`app-component-index`]],viewQuery:function(n,l){n&1&&Xt$1(l.catalogScrollRef,Ei,5)(l.resultsRef,ki,5),n&2&&lt$1(2)},decls:31,vars:19,consts:[[`catalogRegion`,``],[`catalogScroll`,``],[`results`,``],[`tabindex`,`-1`,1,`catalog-region`],[`tabindex`,`-1`,1,`catalog-scroll`],[3,`sectionTitle`,`pageTitle`,`pageDescription`],[`routerLink`,`/utilities`],[`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[1,`catalog-filters`],[`ariaLabel`,`Search components`,`placeholder`,`Search names, purposes, or selectors…`,`subscriptSizing`,`dynamic`,3,`ngModelChange`,`ngModel`],[`label`,`Categories`,`placeholder`,`All categories`,`floatLabel`,`always`,`subscriptSizing`,`dynamic`,`clearLabel`,`Show all categories`,3,`clearable`,`showSelectAll`,`options`,`ngModel`],[1,`catalog-summary`],[`role`,`status`],[`tabindex`,`-1`,`bxInfiniteScroll`,``,1,`catalog-results`,3,`scrollEnd`,`infiniteScrollContainer`,`infiniteScrollDisabled`,`infiniteScrollRevision`,`infiniteScrollCheckOnRender`,`infiniteScrollThreshold`],[1,`empty-results`,3,`surfaceEffects`],[1,`catalog-more`],[3,`container`,`boundary`],[`label`,`Categories`,`placeholder`,`All categories`,`floatLabel`,`always`,`subscriptSizing`,`dynamic`,`clearLabel`,`Show all categories`,3,`ngModelChange`,`clearable`,`showSelectAll`,`options`,`ngModel`],[1,`catalog-category-heading`],[3,`decorative`],[1,`catalog-grid`],[`bxSurface`,``,1,`component-card`],[`bxSurface`,``,`aria-hidden`,`true`,`inert`,``,1,`component-preview`],[3,`kind`],[1,`component-body`],[1,`component-link`,3,`routerLink`],[1,`component-selector`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`]],template:function(n,l){if(n&1&&(_(0,`div`,3,0)(2,`div`,4,1)(4,`bx-page-container`)(5,`bx-page-header`,5)(6,`p`),Q(7,` For viewport signals, device detection, scroll locking and shared helpers, explore the `),_(8,`a`,6),Q(9,`Utilities playground`),D(),Q(10,`. `),D(),_(11,`p`),Q(12,` Designing a screen? `),_(13,`a`,7),Q(14,`Open the Blocks Figma library`),D(),Q(15,` for components, tokens and responsive examples. `),D()(),_(16,`div`,8)(17,`bx-search-input`,9),ZO(),J$1(`ngModelChange`,function(f){return l.updateSearch(f??``)}),D(),L$1(18,Oi,1,4,`bx-multi-select`,10),D(),_(19,`div`,11)(20,`p`,12),Q(21),D(),_(22,`p`),Q(23),D()(),_(24,`div`,13,2),J$1(`scrollEnd`,function(){return l.renderMore()}),Lt$1(26,Di,7,3,null,null,Ti,!1,Ii,5,1,`bx-card`,14),L$1(29,Ri,3,0,`div`,15),D()()(),ve(30,`app-scroll-to-top`,16),D()),n&2){let s=Tt$1(3),f=Tt$1(25);y(5),T(`sectionTitle`,l.layoutOnly()?`Primitives`:l.category()?`Components`:`Blocks reference`)(`pageTitle`,l.layoutOnly()?`Layout`:l.category()??`Components`)(`pageDescription`,l.layoutOnly()?`Compose consistent pages with containers, sections, responsive stacks, grids, and dividers.`:`Explore the controls, surfaces and interactions that make up Blocks. Every example follows your active theme and global appearance configuration.`),y(8),T(`href`,l.figmaLibraryUrl,QC),y(4),T(`ngModel`,l.query()),QO(),y(),j$1(l.categories().length>1?18:-1),y(3),yE(`Showing `,l.visibleEntries().length,` of `,l.filtered().length,` components and directives`),y(2),yE(``,l.groups().length,` `,l.groups().length===1?`category`:`categories`),y(),T(`infiniteScrollContainer`,s)(`infiniteScrollDisabled`,!l.hasMore())(`infiniteScrollRevision`,l.visibleEntries())(`infiniteScrollCheckOnRender`,!0)(`infiniteScrollThreshold`,600),y(2),jt$1(l.groups()),y(3),j$1(l.hasMore()?29:-1),y(),T(`container`,s)(`boundary`,f)}},dependencies:[MT,_l,Yf,Rt$1,Jie,Kie,bB,kn,Ma,fe,yT,CT,RT,F,ae],styles:[`
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