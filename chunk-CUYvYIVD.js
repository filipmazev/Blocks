import{t as D}from"./chunk-XDvDrwBB.js";import"./chunk-DYq3yqOz.js";import{v as Ni}from"./main-AN27WKZA.js";import{$r as qr,$t as Ue,Bi as xr,Bt as Re,C as D$1,Ct as Oa,Dt as Pc,Et as P,Fi as x,Gn as de$1,K as Hp,Kr as p,Lt as Qt,Mi as wn,Mn as b,N as Ey,O as Dr,Ot as Pe,Q as J_,Qn as ea,Sn as Zf,Ti as va,Ur as ne,Vi as xy,W as H,Wi as ye$1,Wn as db,X as J,Zt as UE,_r as iE,bi as ue$1,ci as se$1,dn as X0,dt as Ln,er as es,et as Jn,f as B,gi as u0,gt as My,ht as Mr,ir as ft,mn as Xs,ot as L,pi as tr,pr as gx,ti as qv,tt as Jo,u as An,un as X,vn as Z,wt as Oe,xr as jr,xt as Nt}from"./chunk-CoBsbWg5.js";var de=[{label:`Bottom`,value:`bottom`},{label:`Top`,value:`top`},{label:`Left`,value:`left`},{label:`Right`,value:`right`}];var se=[{label:`Primary`,value:`primary`},{label:`Accent`,value:`accent`},{label:`Surface`,value:`bg-surface`},{label:`Primary text`,value:`text-primary`},{label:`Orange 500`,value:`orange-500`},{label:`Blue 100`,value:`blue-100`}];var me=[`overlayTemplate`];var pe=(s,a)=>a[0];function ve(s,a){s&1&&(P(0,`span`),Re(1,`(current)`),L())}function ue(s,a){if(s&1&&(P(0,`li`)(1,`strong`),Re(2),L(),Re(3),ue$1(4,ve,2,0,`span`),L()),s&2){let o=a.$implicit,i=se$1();X(`current`,i.windowDimensionsService.currentBreakpoint()===o[0]),D$1(2),Ue(o[0]),D$1(),An(` `,o[1],` px `),D$1(),de$1(i.windowDimensionsService.currentBreakpoint()===o[0]?4:-1)}}function ge(s,a){if(s&1&&(P(0,`span`),Re(1),L()),s&2){let o=a.$implicit;D$1(),Ue(o)}}function ye(s,a){if(s&1&&(P(0,`bx-container`,45)(1,`div`,46)(2,`strong`),Re(3,`Positioned with Core utilities`),L(),P(4,`p`),Re(5),L()()()),s&2){let o=se$1();D$1(),ne(`id`,o.overlayId),D$1(4),An(`This surface follows its origin and inherits the active Blocks theme. Preferred placement: `,o.placement(),`.`)}}var ce=class s{bxOverlayPositionService=p(Jn);destroyRef=p(Z);deviceTypeService=p(va);document=p(J);overlay=p(wn);viewContainerRef=p(Nt);scrollLockService=p(UE);windowDimensionsService=p(Hp);lockIds={first:tr(),second:tr()};overlayTemplate=ea(`overlayTemplate`);deviceState=x(this.deviceTypeService.getDeviceState());locks=x([]);identifier=x(tr());overlayOpen=x(!1);placement=x(`bottom`);colorToken=x(`primary`);columns=b(()=>this.windowDimensionsService.resolveResponsiveValue({md:2,xl:3},1));deviceCategory=b(()=>{let a=this.deviceState();return a.isTablet?`Tablet`:a.isMobile?`Mobile`:`Desktop`});orientation=b(()=>this.deviceState().isLandscapeOrientation()?`Landscape`:`Portrait`);cssVariable=b(()=>es(this.colorToken()));complementaryToken=b(()=>u0(this.colorToken()));invertedToken=b(()=>My(this.colorToken()));paletteToken=b(()=>Pc(this.colorToken()));themedColor=b(()=>Ey({light:this.colorToken(),dark:this.invertedToken()}));breakpointEntries=Object.entries(this.windowDimensionsService.breakpoints);previewItems=[1,2,3,4,5,6];placements=de;colorTokens=se;overlayId=`utilities-overlay-`+tr();restoredPalette=qv(`carbon-cobalt`)??`Unrecognized palette`;unknownPalette=qv(`unknown-palette`)??`Unrecognized palette`;codeFiles=[{title:`utilities.ts`,path:`assets/code-snippets/utilities/utilities.ts.txt`,language:`typescript`},{title:`utilities.html`,path:`assets/code-snippets/utilities/utilities.html.txt`,language:`html`},{title:`utilities.scss`,path:`assets/code-snippets/utilities/utilities.scss.txt`,language:`scss`},{title:`utilities.constants.ts`,path:`assets/code-snippets/utilities/constants/utilities.constants.ts.txt`,language:`typescript`},{title:`utilities.types.ts`,path:`assets/code-snippets/utilities/types/utilities.types.ts.txt`,language:`typescript`}];overlayRef;disconnectOrigin;disconnectTheme;constructor(){this.destroyRef.onDestroy(()=>{this.releaseLocks(),this.closeOverlay()}),ft(()=>{let a=this.document.defaultView?.screen.orientation;this.refreshDevice(),a&&Oa(a,`change`).pipe(jr(this.destroyRef)).subscribe(()=>this.refreshDevice())})}refreshDevice(){this.deviceState.set(this.deviceTypeService.getDeviceState())}toggleLock(a){this.locks().includes(a)?(this.scrollLockService.enableScroll(this.lockIds[a]),this.locks.update(o=>o.filter(i=>i!==a))):(this.scrollLockService.disableScroll(this.lockIds[a],{handleTouchInput:!1}),this.locks.update(o=>[...o,a]))}releaseLocks(){this.scrollLockService.enableScroll(this.lockIds.first),this.scrollLockService.enableScroll(this.lockIds.second),this.locks.set([])}generateIdentifier(){this.identifier.set(tr())}setColorToken(a){this.colorToken.set(a??`primary`)}setPlacement(a){this.closeOverlay(),this.placement.set(a??`bottom`)}toggleOverlay(a){if(this.overlayOpen()){this.closeOverlay();return}let o=a.currentTarget,i=this.overlayTemplate();if(!(o instanceof HTMLElement)||!i||!this.windowDimensionsService.isBrowser||!xy(o))return;let d=this.overlay.create({positionStrategy:this.bxOverlayPositionService.getElementStrategy(o,this.placement()),scrollStrategy:this.overlay.scrollStrategies.noop()});this.overlayRef=d,this.overlayOpen.set(!0),o.focus({preventScroll:!0}),d.attach(new Ln(i,this.viewContainerRef)).detectChanges(),this.disconnectTheme=qr(o,d.overlayElement),this.disconnectOrigin=Jo(d,o,{onOriginHidden:()=>this.closeOverlay()}),d.outsidePointerEvents().pipe(jr(this.destroyRef)).subscribe(S=>{S.target instanceof Node&&o.contains(S.target)||this.closeOverlay()}),d.keydownEvents().pipe(jr(this.destroyRef)).subscribe(S=>{S.key===`Escape`&&(S.preventDefault(),this.closeOverlay())})}closeOverlay(){this.disconnectOrigin?.(),this.disconnectTheme?.(),this.overlayRef?.dispose(),this.disconnectOrigin=void 0,this.disconnectTheme=void 0,this.overlayRef=void 0,this.overlayOpen.set(!1)}static ɵfac=function(o){return new(o||s)};static ɵcmp=H({type:s,selectors:[[`app-utilities`]],viewQuery:function(o,i){o&1&&Mr(i.overlayTemplate,me,5),o&2&&Qt()},decls:232,vars:45,consts:[[`overlayTemplate`,``],[`aria-labelledby`,`utilities-title`,1,`utilities`],[1,`page-heading`],[1,`eyebrow`],[`id`,`utilities-title`],[`routerLink`,`/appearance`],[`routerLink`,`/components/menu-item`],[`routerLink`,`/components/form-field`],[1,`demo-grid`],[`aria-labelledby`,`viewport-title`],[`size`,`full`,1,`demo-panel`],[`id`,`viewport-title`],[`data-viewport-width`,``],[`data-breakpoint`,``],[`aria-label`,`Shared breakpoint minimums`,1,`breakpoints`],[3,`current`],[1,`responsive-preview`],[`aria-labelledby`,`device-title`],[`id`,`device-title`],[`data-device-category`,``],[`data-orientation`,``],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`],[`aria-labelledby`,`scroll-title`,1,`scroll-demo`],[`id`,`scroll-title`],[`role`,`group`,`aria-label`,`Demo scroll lock owners`,1,`actions`],[`bx-button`,``,`type`,`button`,3,`click`],[`bx-button`,``,`type`,`button`,`variant`,`text`,3,`click`,`disabled`],[`role`,`status`,1,`status`],[`aria-labelledby`,`identifier-title`],[`id`,`identifier-title`],[`aria-label`,`Generated UUID`,`aria-live`,`polite`,1,`identifier`],[`aria-labelledby`,`tokens-title`],[`id`,`tokens-title`],[`label`,`Color token`,3,`valueChange`,`options`,`value`],[`aria-hidden`,`true`,1,`token-swatch`],[`aria-labelledby`,`overlay-title`],[`id`,`overlay-title`],[`label`,`Preferred placement`,3,`valueChange`,`options`,`value`],[1,`overlay-origin`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`blur`],[`routerLink`,`/components/popover`],[`routerLink`,`/components/dropdown`],[`routerLink`,`/components/tooltip-directive`],[`aria-label`,`Utilities documentation and source`,1,`documentation`],[`readmePath`,`projects/playground/src/app/components/screens/utilities/README.md`,3,`codeFiles`],[`size`,`full`,1,`utility-overlay`],[`role`,`tooltip`,3,`id`]],template:function(o,i){o&1&&(P(0,`article`,1)(1,`header`,2)(2,`p`,3),Re(3,`Blocks foundations`),L(),P(4,`h1`,4),Re(5,`Utilities`),L(),P(6,`p`),Re(7,`Explore viewport signals, device detection, shared scroll locks, identifiers, color tokens, and overlay positioning in one place.`),L(),P(8,`p`),Re(9,` Related guides: `),P(10,`a`,5),Re(11,`appearance and reduced motion`),L(),Re(12,`, `),P(13,`a`,6),Re(14,`keyboard shortcuts`),L(),Re(15,`, and `),P(16,`a`,7),Re(17,`form integration`),L(),Re(18,`. `),L()(),P(19,`div`,8)(20,`section`,9)(21,`bx-container`,10)(22,`h2`,11),Re(23,`Viewport and breakpoints`),L(),P(24,`p`),Re(25,`Resize the window or change browser zoom. Values are CSS pixels and describe the viewport.`),L(),P(26,`dl`)(27,`div`)(28,`dt`),Re(29,`Width`),L(),P(30,`dd`,12),Re(31),L()(),P(32,`div`)(33,`dt`),Re(34,`Height`),L(),P(35,`dd`),Re(36),L()(),P(37,`div`)(38,`dt`),Re(39,`Current breakpoint`),L(),P(40,`dd`,13),Re(41),L()(),P(42,`div`)(43,`dt`),Re(44,`Breakpoint minimum`),L(),P(45,`dd`),Re(46),L()(),P(47,`div`)(48,`dt`),Re(49,`Mobile viewport (below md)`),L(),P(50,`dd`),Re(51),L()(),P(52,`div`)(53,`dt`),Re(54,`Between md and xl`),L(),P(55,`dd`),Re(56),L()(),P(57,`div`)(58,`dt`),Re(59,`At least lg`),L(),P(60,`dd`),Re(61),L()()(),P(62,`ul`,14),xr(63,ue,5,5,`li`,15,pe),L(),P(65,`h3`),Re(66,`Responsive value`),L(),P(67,`p`)(68,`code`),Re(69),L(),Re(70),L(),P(71,`div`,16),xr(72,ge,2,1,`span`,null,Xs),L()()(),P(74,`section`,17)(75,`bx-container`,10)(76,`h2`,18),Re(77,`Device detection`),L(),P(78,`p`),Re(79,` Device categories use browser identity and touch hints. Resizing a desktop window changes viewport signals, while its device category stays desktop. `),L(),P(80,`dl`)(81,`div`)(82,`dt`),Re(83,`Device category`),L(),P(84,`dd`,19),Re(85),L()(),P(86,`div`)(87,`dt`),Re(88,`Desktop OS`),L(),P(89,`dd`),Re(90),L()(),P(91,`div`)(92,`dt`),Re(93,`Mobile OS`),L(),P(94,`dd`),Re(95),L()(),P(96,`div`)(97,`dt`),Re(98,`Apple device`),L(),P(99,`dd`),Re(100),L()(),P(101,`div`)(102,`dt`),Re(103,`Android device`),L(),P(104,`dd`),Re(105),L()(),P(106,`div`)(107,`dt`),Re(108,`Windows desktop`),L(),P(109,`dd`),Re(110),L()(),P(111,`div`)(112,`dt`),Re(113,`Linux or Unix desktop`),L(),P(114,`dd`),Re(115),L()(),P(116,`div`)(117,`dt`),Re(118,`Unknown mobile OS`),L(),P(119,`dd`),Re(120),L()(),P(121,`div`)(122,`dt`),Re(123,`Screen orientation`),L(),P(124,`dd`,20),Re(125),L()()(),P(126,`button`,21),ye$1(`click`,function(){return i.refreshDevice()}),Re(127,`Refresh detection`),L(),P(128,`p`),Re(129,` Screen Orientation change events refresh this demo. The service returns snapshots and orientation methods, so OnPush consumers own refresh triggers. `),L()()(),P(130,`section`,22)(131,`bx-container`,10)(132,`h2`,23),Re(133,`Shared scroll locking`),L(),P(134,`p`),Re(135,`Acquire both locks, then release one. Page scrolling stays locked until the final owner releases it.`),L(),P(136,`div`,24)(137,`button`,25),ye$1(`click`,function(){return i.toggleLock(`first`)}),Re(138),L(),P(139,`button`,25),ye$1(`click`,function(){return i.toggleLock(`second`)}),Re(140),L(),P(141,`button`,26),ye$1(`click`,function(){return i.releaseLocks()}),Re(142,`Release demo locks`),L()(),P(143,`p`,27),Re(144),L(),P(145,`p`),Re(146,`Touch input remains enabled for this example. Leaving this page releases its two locks; other overlays keep their own locks.`),L()()(),P(147,`section`,28)(148,`bx-container`,10)(149,`h2`,29),Re(150,`Stable owner identifiers`),L(),P(151,`p`)(152,`code`),Re(153,`uuidv4()`),L(),Re(154,` creates an ID for a control, overlay, or scroll-lock owner. Generate each owner's ID once and reuse it through cleanup. `),L(),P(155,`output`,30),Re(156),L(),P(157,`button`,21),ye$1(`click`,function(){return i.generateIdentifier()}),Re(158,`Generate another UUID`),L(),P(159,`p`),Re(160,`This preview changes independently of the scroll-lock IDs.`),L()()(),P(161,`section`,31)(162,`bx-container`,10)(163,`h2`,32),Re(164,`Color-token helpers`),L(),P(165,`bx-select`,33),ye$1(`valueChange`,function(g){return i.setColorToken(g)}),L(),Oe(166,`div`,34),P(167,`dl`)(168,`div`)(169,`dt`),Re(170,`CSS variable`),L(),P(171,`dd`),Re(172),L()(),P(173,`div`)(174,`dt`),Re(175,`Palette token`),L(),P(176,`dd`),Re(177),L()(),P(178,`div`)(179,`dt`),Re(180,`Complementary token`),L(),P(181,`dd`),Re(182),L()(),P(183,`div`)(184,`dt`),Re(185,`Inverted palette token`),L(),P(186,`dd`),Re(187),L()(),P(188,`div`)(189,`dt`),Re(190,`Recognizes light/dark object`),L(),P(191,`dd`),Re(192),L()(),P(193,`div`)(194,`dt`),Re(195,`Restore carbon-cobalt`),L(),P(196,`dd`),Re(197),L()(),P(198,`div`)(199,`dt`),Re(200,`Restore unknown-palette`),L(),P(201,`dd`),Re(202),L()()(),P(203,`p`),Re(204,`Semantic CSS variables follow the active theme. Helper results are token mappings; check contrast in your application.`),L()()(),P(205,`section`,35)(206,`bx-container`,10)(207,`h2`,36),Re(208,`Overlay infrastructure`),L(),P(209,`p`),Re(210,`Preview a connected position strategy with origin tracking and inherited theme. Available viewport space can change the final placement.`),L(),P(211,`bx-select`,37),ye$1(`valueChange`,function(g){return i.setPlacement(g)}),L(),P(212,`div`,38)(213,`button`,39),ye$1(`click`,function(g){return i.toggleOverlay(g)})(`blur`,function(){return i.closeOverlay()}),Re(214),L()(),P(215,`p`),Re(216,`Focus stays on the trigger. Escape, moving focus away, an outside click, or scrolling the origin out of view closes the preview.`),L(),P(217,`p`),Re(218,` Use `),P(219,`a`,40),Re(220,`Popover`),L(),Re(221,`, `),P(222,`a`,41),Re(223,`Dropdown`),L(),Re(224,`, or `),P(225,`a`,42),Re(226,`Tooltip`),L(),Re(227,` for ready-made interactions. `),L()()()(),P(228,`section`,43),Oe(229,`app-component-info`,44),L()(),J_(230,ye,6,2,`ng-template`,null,0,db)),o&2&&(D$1(31),An(``,i.windowDimensionsService.dimensions().width,` px`),D$1(5),An(``,i.windowDimensionsService.dimensions().height,` px`),D$1(5),Ue(i.windowDimensionsService.currentBreakpoint()??`Unavailable during SSR`),D$1(5),An(``,i.windowDimensionsService.currentBreakpointValue()??`Unavailable`,` px`),D$1(5),Ue(i.windowDimensionsService.isMobile()?`Yes`:`No`),D$1(5),Ue(i.windowDimensionsService.isBetween(`md`,`xl`)?`Yes`:`No`),D$1(5),Ue(i.windowDimensionsService.isAtLeast(`lg`)?`Yes`:`No`),D$1(2),Dr(i.breakpointEntries),D$1(6),An(`resolveResponsiveValue(`,`{ md: 2, xl: 3 }`,`, 1)`),D$1(),An(` selects `,i.columns(),` columns. `),D$1(),Pe(`grid-template-columns`,`repeat(`+i.columns()+`, minmax(0, 1fr))`),D$1(),Dr(i.previewItems),D$1(13),Ue(i.deviceCategory()),D$1(5),Ue(i.deviceState().desktopOS??`Not detected`),D$1(5),Ue(i.deviceState().mobileOS??`Not detected`),D$1(5),Ue(i.deviceState().isAppleDevice?`Yes`:`No`),D$1(5),Ue(i.deviceState().isAndroidDevice?`Yes`:`No`),D$1(5),Ue(i.deviceState().isWindowsDesktop?`Yes`:`No`),D$1(5),Ue(i.deviceState().isLinuxOrUnixDesktop?`Yes`:`No`),D$1(5),Ue(i.deviceState().isUnknownMobileDevice?`Yes`:`No`),D$1(5),Ue(i.orientation()),D$1(12),B(`aria-pressed`,i.locks().includes(`first`)),D$1(),An(` `,i.locks().includes(`first`)?`Release first lock`:`Acquire first lock`,` `),D$1(),B(`aria-pressed`,i.locks().includes(`second`)),D$1(),An(` `,i.locks().includes(`second`)?`Release second lock`:`Acquire second lock`,` `),D$1(),ne(`disabled`,i.locks().length===0),D$1(3),gx(` Demo owners: `,i.locks().length,`. Page scrolling: `,i.scrollLockService.isScrollDisabled()?`locked`:`available`,`. `),D$1(12),Ue(i.identifier()),D$1(9),ne(`options`,i.colorTokens)(`value`,i.colorToken()),D$1(),Pe(`background`,i.cssVariable()),D$1(6),Ue(i.cssVariable()),D$1(5),Ue(i.paletteToken()?`Yes`:`No`),D$1(5),Ue(i.complementaryToken()),D$1(5),Ue(i.invertedToken()),D$1(5),Ue(i.themedColor()?`Yes`:`No`),D$1(5),Ue(i.restoredPalette),D$1(5),Ue(i.unknownPalette),D$1(9),ne(`options`,i.placements)(`value`,i.placement()),D$1(2),B(`aria-expanded`,i.overlayOpen())(`aria-describedby`,i.overlayOpen()?i.overlayId:null),D$1(),An(` `,i.overlayOpen()?`Hide position preview`:`Show position preview`,` `),D$1(15),ne(`codeFiles`,i.codeFiles))},dependencies:[Zf,D,X0,iE,Ni],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.utilities[_ngcontent-%COMP%] {
  max-inline-size: 80rem;
  margin-inline: auto;
  overflow-wrap: anywhere;
}
.demo-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.25rem;
}
.demo-grid[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
.demo-panel[_ngcontent-%COMP%] {
  --%NS%bx-container-padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  block-size: 100%;
  padding: 1.25rem;
  background: var(--%NS%bx-bg-surface);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
}
h2[_ngcontent-%COMP%], 
h3[_ngcontent-%COMP%], 
p[_ngcontent-%COMP%], 
dl[_ngcontent-%COMP%] {
  margin: 0;
}
h2[_ngcontent-%COMP%] {
  font-size: 1.25rem;
}
h3[_ngcontent-%COMP%] {
  font-size: 1rem;
}
p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  line-height: 1.65;
}
a[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-brand);
  text-underline-offset: 0.2em;
}
a[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 3px;
}
dl[_ngcontent-%COMP%] {
  display: grid;
  gap: 0.75rem;
}
dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.25rem 1rem;
}
dt[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
}
dd[_ngcontent-%COMP%] {
  margin: 0;
  font-weight: 600;
}
.actions[_ngcontent-%COMP%], 
.breakpoints[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.breakpoints[_ngcontent-%COMP%] {
  padding: 0;
  margin: 0;
  list-style: none;
}
.breakpoints[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
  font-size: 0.875rem;
}
.breakpoints[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {
  border-color: var(--%NS%bx-border-brand);
}
.responsive-preview[_ngcontent-%COMP%] {
  display: grid;
  gap: 0.5rem;
}
.responsive-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  padding: 0.75rem;
  background: var(--%NS%bx-bg-element);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
  text-align: center;
}
.identifier[_ngcontent-%COMP%] {
  display: block;
  padding: 1rem;
  background: var(--%NS%bx-bg-element);
  border-radius: 0.5rem;
  font-family: monospace;
  overflow-wrap: anywhere;
}
.token-swatch[_ngcontent-%COMP%] {
  block-size: 3rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
}
.overlay-origin[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  padding-block: 1.25rem;
}
.utility-overlay[_ngcontent-%COMP%] {
  --%NS%bx-container-padding: 1rem;
  display: block;
  inline-size: min(20rem, 100vw - 2rem);
  max-block-size: calc(100dvh - 2rem);
  overflow: auto;
  padding: 1rem;
  background: var(--%NS%bx-bg-surface);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
}
.utility-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin-block-start: 0.5rem;
}
.documentation[_ngcontent-%COMP%] {
  margin-block-start: 2rem;
}
@media (min-width: 1280px) {
  .demo-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .scroll-demo[_ngcontent-%COMP%] {
    grid-column: 1/-1;
  }
}`]})};export{ce as Utilities};