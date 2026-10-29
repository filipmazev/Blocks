import{An as rt$1,At as Yd,Bt as bl,C as Bn,Cn as pe,Ct as VT,Dn as qo,Dt as Wo,F as Ei,Fn as vE,G as Ik,H as He$1,Hn as x,Ht as cd,In as vl,K as Jt,Kt as eS,Lt as aS,Mn as tS,On as re,P as Ea,Qt as gm,S as Be$1,Sn as p6,St as V4,Tt as Vn,Un as xO,Ut as ce,V as Hd,Vt as c6,W as Ie$1,X as Kd,Xt as fn,Z as Ke$1,Zt as gl,an as hu,at as On,c as K,cn as it$1,dt as QD,f as $d,fn as je$1,gt as S,ht as Rk,i as j,it as Ok,j as Di,jt as Yo,kt as Xw,l as Z,mn as kS,n as fe,nt as Ma,o as e,on as il,ot as Ow,p as $o,q as Jw,qt as e_,r as L$1,rt as NS,s as J,sn as ir,t as Se,tn as h,tt as MO,u as X,un as jT,ut as Q0,wt as Ve,y as Ar,zn as we}from"./main-6SFMKCN2.js";import{n as T}from"./chunk-B1-mucoa.js";import{a as nn,i as fe$1,n as Ze$1,r as en,t as V}from"./chunk-BsFJEm4K.js";import{n as ft$1}from"./chunk-BwFOzC2k.js";function Ne(o,m){if(o&1&&(ce(0,`div`)(1,`strong`),Jt(2),pe()()),o&2){let e=Ie$1();re(2),Ar(e.data.title)}}function Ie(o,m){if(o&1){let e=Ea();ce(0,`div`,4)(1,`button`,5),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.close())}),Jt(2,`Cancel`),pe(),ce(3,`button`,6),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.confirm())}),Jt(4,`Save changes`),pe()()}}var qe=()=>({required:`Enter a project name.`});var je=()=>({email:`Enter a valid email address.`});var Be=()=>({name:`settings`});var Fe=o=>({text:`Project settings`,icon:o});function Ae(o,m){if(o&1){let e=Ea();ce(0,`div`,14)(1,`div`,25)(2,`button`,26),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.activate(`Primary action`))}),Jt(3,`Primary action`),pe(),ce(4,`button`,27),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.activate(`Tonal action`))}),Jt(5,`Tonal`),pe(),ce(6,`button`,28),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.activate(`Text action`))}),Jt(7,`Text`),pe(),ce(8,`button`,29),Jt(9,`Disabled`),pe()(),ce(10,`div`,25)(11,`button`,30),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.activate(`Success`))}),Jt(12,`Success`),pe(),ce(13,`button`,31),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.activate(`Warning`))}),Jt(14,`Warning`),pe(),ce(15,`button`,32),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.activate(`Delete`))}),Jt(16,`Delete`),pe(),ce(17,`button`,33),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.activate(`Add item`))}),it$1(18,`bx-icon`,34),pe()()()}o&2&&(re(8),Ke$1(`disabled`,!0))}function Re(o,m){if(o&1&&(ce(0,`div`,14)(1,`bx-checkbox`,35),VT(),pe(),ce(2,`bx-checkbox`,36),VT(),pe(),ce(3,`bx-checkbox`,37),VT(),pe(),ce(4,`output`),Jt(5),pe()()),o&2){let e=Ie$1();re(),Ke$1(`formControl`,e.checked),jT(),re(),Ke$1(`formControl`,e.secondChecked),jT(),re(),Ke$1(`formControl`,e.disabledCheck),jT(),re(2),Xw(`Updates: `,e.checked.value?`on`:`off`,` · Previews: `,e.secondChecked.value?`on`:`off`)}}function ze(o,m){if(o&1){let e=Ea();ce(0,`div`,15)(1,`bx-form-field`,38)(2,`span`,39)(3,`input`,40),He$1(`input`,function(t){Di(e);let f=Ie$1();return Ei(f.updateField(t))})(`blur`,function(){Di(e);let t=Ie$1();return Ei(t.showError.set(!0))}),pe()()(),ce(4,`button`,41),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.showError.set(!0))}),Jt(5,`Validate name`),pe(),ce(6,`output`),Jt(7),pe()()}if(o&2){let e=Ie$1();re(),Ke$1(`required`,!0)(`error`,e.fieldError()),re(2),Ke$1(`value`,e.fieldValue()),Ve(`aria-invalid`,!!e.fieldError()),re(4),ir(`Value: `,e.fieldValue()||`empty`)}}function Le(o,m){if(o&1&&(ce(0,`div`,15)(1,`bx-input-field`,42),VT(),pe(),ce(2,`bx-input-field`,43),VT(),pe(),ce(3,`bx-input-field`,44),VT(),pe(),ce(4,`output`),Jt(5),pe()()),o&2){let e=Ie$1();re(),Ke$1(`errorMessages`,Rk(9,qe))(`formControl`,e.name),jT(),re(),Ke$1(`errorMessages`,Rk(10,je))(`formControl`,e.email),jT(),re(),Ke$1(`min`,1)(`max`,20)(`formControl`,e.quantity),jT(),re(2),Xw(``,e.name.value,` · `,e.quantity.value,` members`)}}function He(o,m){if(o&1){let e=Ea();ce(0,`fieldset`,14)(1,`legend`),Jt(2,`Notification frequency`),pe(),ce(3,`bx-radio`,45),VT(),pe(),ce(4,`bx-radio`,46),VT(),pe(),ce(5,`bx-radio`,47),VT(),pe(),ce(6,`output`),Jt(7),pe(),ce(8,`button`,28),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.frequency.reset())}),Jt(9,`Reset frequency`),pe()()}if(o&2){let e=Ie$1();re(3),Ke$1(`formControl`,e.frequency),jT(),re(),Ke$1(`formControl`,e.frequency),jT(),re(),Ke$1(`formControl`,e.frequency),jT(),re(2),ir(`Selected: `,e.frequency.value)}}function Ue(o,m){if(o&1&&(ce(0,`li`),Jt(1),pe()),o&2){let e=m.$implicit;re(),Ar(e)}}function We(o,m){o&1&&(ce(0,`li`),Jt(1,`No components match your search.`),pe())}function Qe(o,m){if(o&1){let e=Ea();ce(0,`div`,15)(1,`bx-search-input`,48),VT(),He$1(`search`,function(t){Di(e);let f=Ie$1();return Ei(f.searchTerm.set(t))}),pe(),ce(2,`ul`,49),$o(3,Ue,2,1,`li`,null,hu,!1,We,2,0,`li`),pe(),ce(6,`output`),Jt(7),pe()()}if(o&2){let e=Ie$1();re(),Ke$1(`formControl`,e.query),jT(),re(2),qo(e.searchResults()),re(4),ir(``,e.searchResults().length,` results`)}}function $e(o,m){if(o&1&&(ce(0,`div`,15)(1,`bx-select`,50),VT(),pe(),ce(2,`output`),Jt(3),pe()()),o&2){let e=Ie$1();re(),Ke$1(`options`,e.options)(`isSearchable`,!0)(`formControl`,e.destination),jT(),re(2),ir(`Selected: `,e.destination.value)}}function Ke(o,m){if(o&1){let e=Ea();ce(0,`div`,15)(1,`label`,51),Jt(2,`Volume`),pe(),ce(3,`input`,52),VT(),pe(),ce(4,`output`),Jt(5),pe(),ce(6,`button`,28),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.volume.setValue(50))}),Jt(7,`Reset volume`),pe(),ce(8,`label`,53),Jt(9,`Unavailable range`),pe(),it$1(10,`input`,54),pe()}if(o&2){let e=Ie$1();re(3),Ke$1(`formControl`,e.volume),jT(),re(2),ir(``,e.volume.value,`%`)}}function Xe(o,m){if(o&1&&(ce(0,`div`,14)(1,`bx-slide-toggle`,55),VT(),pe(),ce(2,`bx-slide-toggle`,37),VT(),pe(),ce(3,`output`),Jt(4),pe()()),o&2){let e=Ie$1();re(),Ke$1(`formControl`,e.enabled),jT(),re(),Ke$1(`formControl`,e.disabledCheck),jT(),re(2),ir(`Notifications are `,e.enabled.value?`enabled`:`disabled`,`.`)}}function Ye(o,m){if(o&1&&(ce(0,`bx-error`,58),Jt(1),pe()),o&2){let e=Ie$1(2);re(),Ar(e.fieldError())}}function Ge(o,m){if(o&1){let e=Ea();ce(0,`div`,15)(1,`bx-form-field`,56)(2,`span`,39)(3,`input`,57),He$1(`input`,function(t){Di(e);let f=Ie$1();return Ei(f.updateField(t))})(`blur`,function(){Di(e);let t=Ie$1();return Ei(t.showError.set(!0))}),pe()(),Be$1(4,Ye,2,1,`bx-error`,58),pe(),ce(5,`button`,41),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.showError.set(!0))}),Jt(6,`Validate reference`),pe()()}if(o&2){let e=Ie$1();re(3),Ke$1(`value`,e.fieldValue()),Ve(`aria-invalid`,!!e.fieldError())(`aria-describedby`,e.fieldError()?`custom-error`:null),re(),je$1(e.fieldError()?4:-1)}}function Je(o,m){if(o&1&&(ce(0,`p`),Jt(1,`Keep related information together while showing one panel at a time.`),pe(),ce(2,`bx-input-field`,65),VT(),pe()),o&2){let e=Ie$1(2);re(2),Ke$1(`formControl`,e.tabNote),jT()}}function Ze(o,m){o&1&&(ce(0,`p`),Jt(1,`Headers support arrow keys, Home and End. Panel content is created only when selected.`),pe())}function et(o,m){o&1&&(ce(0,`bx-tab`,63)(1,`p`),Jt(2,`No recent project activity.`),pe()())}function tt(o,m){if(o&1){let e=Ea();ce(0,`div`,14)(1,`bx-tabs`,59),e_(`selectedValueChange`,function(t){Di(e);let f=Ie$1();return Ik(f.selectedTab,t)||(f.selectedTab=t),Ei(t)}),ce(2,`bx-tab`,60),Ow(3,Je,3,1,`ng-template`,61),pe(),ce(4,`bx-tab`,62),Ow(5,Ze,2,0,`ng-template`,61),pe(),Be$1(6,et,3,0,`bx-tab`,63),it$1(7,`bx-tab`,64),pe(),ce(8,`div`,25)(9,`button`,41),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.tabsVariant.set(t.tabsVariant()===`segmented`?`underline`:`segmented`))}),Jt(10,`Underline appearance`),pe(),ce(11,`button`,41),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.detailsDisabled.set(!t.detailsDisabled()))}),Jt(12,`Disable details`),pe(),ce(13,`button`,41),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.showActivity.set(!t.showActivity()))}),Jt(14,`Show activity`),pe()(),ce(15,`output`),Jt(16),pe()()}if(o&2){let e=Ie$1();re(),Ke$1(`variant`,e.tabsVariant()),Jw(`selectedValue`,e.selectedTab),re(3),Ke$1(`disabled`,e.detailsDisabled()),re(2),je$1(e.showActivity()?6:-1),re(),Ke$1(`disabled`,!0),re(2),Ve(`aria-pressed`,e.tabsVariant()===`underline`),re(2),Ve(`aria-pressed`,e.detailsDisabled()),re(2),Ve(`aria-pressed`,e.showActivity()),re(3),ir(`Selected: `,e.selectedTab())}}function nt(o,m){if(o&1){let e=Ea();ce(0,`bx-menu`,16)(1,`bx-menu-item`,66),He$1(`action`,function(){Di(e);let t=Ie$1();return Ei(t.activate(`Project duplicated`))}),pe(),ce(2,`bx-menu-item`,67),He$1(`action`,function(){Di(e);let t=Ie$1();return Ei(t.activate(`Project archived`))}),pe(),it$1(3,`bx-menu-item`,68),pe()}o&2&&(re(3),Ke$1(`disabled`,!0))}function it(o,m){if(o&1){let e=Ea();ce(0,`bx-menu`,16)(1,`bx-menu-item`,69),He$1(`action`,function(){Di(e);let t=Ie$1();return Ei(t.activate(`Copy link`))}),pe(),ce(2,`bx-menu-item`,70),He$1(`action`,function(){Di(e);let t=Ie$1();return Ei(t.activate(`Open settings`))}),pe(),ce(3,`bx-menu-item`,71),He$1(`action`,function(){Di(e);let t=Ie$1();return Ei(t.activate(`Delete requested`))}),pe(),it$1(4,`bx-menu-item`,68),pe()}o&2&&(re(3),Ke$1(`danger`,!0),re(),Ke$1(`disabled`,!0))}function ot(o,m){o&1&&(ce(0,`div`,14),it$1(1,`bx-tooltip`,72),ce(2,`p`),Jt(3,`Standalone tooltip content. Use the trigger directive for positioned help.`),pe(),ce(4,`a`,73),Jt(5,`Try the tooltip trigger`),pe()())}function rt(o,m){if(o&1){let e=Ea();ce(0,`div`,14)(1,`div`,25)(2,`button`,74),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.activate(`Saved`))}),Jt(3,`Save project`),pe(),ce(4,`button`,75),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.activate(`Normal tap activated`))}),Jt(5,`Hold for a hint`),pe(),ce(6,`button`,76),it$1(7,`bx-icon`,77),pe()(),ce(8,`p`),Jt(9,`Hover with a mouse or use keyboard focus for hints. On touch screens, Save project activates immediately, Hold for a hint supports a long press, and the information button opens help on tap.`),pe()()}}function at(o,m){if(o&1){let e=Ea();ce(0,`bx-menu`)(1,`bx-menu-item`,80),He$1(`action`,function(){Di(e),Ie$1();let t=Q0(2);return Ie$1().activate(`Project duplicated`),Ei(t.close())}),pe(),ce(2,`bx-menu-item`,81),He$1(`action`,function(){Di(e),Ie$1();let t=Q0(2);return Ie$1().activate(`Project archived`),Ei(t.close())}),pe(),ce(3,`bx-menu-item`,82),He$1(`action`,function(){Di(e),Ie$1();let t=Q0(2);return Ie$1().activate(`Delete requested`),Ei(t.close())}),pe()()}o&2&&(re(3),Ke$1(`danger`,!0))}function lt(o,m){if(o&1&&(ce(0,`div`,14)(1,`button`,78,0),Jt(3,`Project actions `),it$1(4,`bx-icon`,79),pe(),Ow(5,at,4,1,`ng-template`,null,1,gm),ce(7,`output`),Jt(8),pe(),ce(9,`p`),Jt(10,`Open, close, or reopen while the menu fades. Its contents keep their full size throughout.`),pe()()),o&2){let e=Q0(2),a=Q0(6);re(),Ke$1(`bxDropdown`,a),re(7),ir(`Transition: `,e.state())}}function ct(o,m){if(o&1){let e=Ea();ce(0,`bx-menu`)(1,`bx-menu-item`,84),He$1(`action`,function(){Di(e);let t=Ie$1(2);return Ei(t.activate(`Selection copied`))}),pe(),ce(2,`bx-menu-item`,85),He$1(`action`,function(){Di(e);let t=Ie$1(2);return Ei(t.activate(`Selection archived`))}),pe()()}}function mt(o,m){if(o&1){let e=Ea();ce(0,`div`,14)(1,`div`,83),Jt(2,`Right-click, touch and hold, or focus here and press Shift + F10.`),pe(),ce(3,`button`,41),He$1(`click`,function(t){Di(e);let f=Ie$1();return Ei(f.openContextMenu(t))}),Jt(4,`Open actions`),pe(),Ow(5,ct,3,0,`ng-template`,null,2,gm),pe()}if(o&2){let e=Q0(6);re(),Ke$1(`bxContextMenu`,e)}}function st(o,m){o&1&&(ce(0,`div`,14),it$1(1,`bx-breadcrumbs`,86),ce(2,`p`),Jt(3,`This trail comes from the current route metadata. Select Components to navigate back.`),pe(),ce(4,`a`,87),Jt(5,`Navigate to Button`),pe()()),o&2&&(re(),Ke$1(`minimumBreadcrumbs`,1))}function dt(o,m){o&1&&(ce(0,`div`,14)(1,`div`,88),it$1(2,`bx-icon`,89)(3,`bx-icon`,90)(4,`bx-icon`,91)(5,`bx-icon`,92)(6,`bx-icon`,93),pe(),ce(7,`a`,94),Jt(8,`Browse the searchable icon catalog`),pe()()),o&2&&(re(2),Ke$1(`decorative`,!1))}function ut(o,m){if(o&1){let e=Ea();ce(0,`bx-modal-banner`,97),He$1(`close`,function(){Di(e);let t=Ie$1(2);return t.bannerVisible.set(!1),Ei(t.activate(`Banner dismissed`))}),pe()}o&2&&Ke$1(`header`,Ok(3,Fe,Rk(2,Be)))(`showCloseButton`,!0)}function pt(o,m){if(o&1){let e=Ea();ce(0,`button`,41),He$1(`click`,function(){Di(e);let t=Ie$1(2);return Ei(t.bannerVisible.set(!0))}),Jt(1,`Restore banner`),pe()}}function _t(o,m){if(o&1){let e=Ea();ce(0,`div`,17),Be$1(1,ut,1,5,`bx-modal-banner`,95)(2,pt,2,0,`button`,96),ce(3,`button`,26),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.openModal())}),Jt(4,`See banner in a dialog`),pe()()}if(o&2){let e=Ie$1();re(),je$1(e.bannerVisible()?1:2)}}function xt(o,m){if(o&1){let e=Ea();ce(0,`div`,14)(1,`div`,25)(2,`button`,30),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.notify(`success`))}),Jt(3,`Success`),pe(),ce(4,`button`,98),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.notify(`info`))}),Jt(5,`Information`),pe(),ce(6,`button`,31),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.notify(`warn`))}),Jt(7,`Warning`),pe(),ce(8,`button`,32),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.notify(`danger`))}),Jt(9,`Error`),pe()(),ce(10,`p`),Jt(11,`The toast host manages the progress indicator, dismiss action, pause and cleanup.`),pe(),ce(12,`a`,99),Jt(13,`Open the full toast configurator`),pe()()}}function bt(o,m){if(o&1){let e=Ea();ce(0,`div`,14)(1,`div`,25)(2,`button`,30),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.notify(`success`))}),Jt(3,`Show success`),pe(),ce(4,`button`,98),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.notify(`info`))}),Jt(5,`Show information`),pe(),ce(6,`button`,31),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.notify(`warn`))}),Jt(7,`Show warning`),pe(),ce(8,`button`,32),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.notify(`danger`))}),Jt(9,`Show error`),pe()(),ce(10,`p`),Jt(11,`Semantic colors remain tied to the active Blocks palette.`),pe()()}}function yt(o,m){if(o&1){let e=Ea();ce(0,`section`,18),it$1(1,`bx-icon`,100),ce(2,`h3`),Jt(3,`A custom Blocks surface`),pe(),ce(4,`p`),Jt(5,`Material, blur, tint, lighting and motion follow the same global configuration as the controls around it.`),pe(),ce(6,`button`,41),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.activate(`Custom surface action`))}),Jt(7,`Try an action`),pe()()}}function Ct(o,m){if(o&1){let e=Ea();ce(0,`button`,41),He$1(`click`,function(){Di(e);let t=Ie$1(2);return Ei(t.openModal(`left`))}),Jt(1,`Open on the left`),pe()}}function ft(o,m){if(o&1){let e=Ea();ce(0,`div`,14)(1,`div`,25)(2,`button`,26),He$1(`click`,function(){Di(e);let t=Ie$1();return Ei(t.openModal())}),Jt(3),pe(),Be$1(4,Ct,2,0,`button`,96),pe(),ce(5,`p`),Jt(6,`Try editing, saving, pressing Escape, and dismissing through the backdrop. This is the actual service-created component.`),pe(),ce(7,`a`,101),Jt(8,`Open the full modal configurator`),pe()()}if(o&2){let e=Ie$1();re(3),ir(`Open `,e.entry().title.toLowerCase()),re(),je$1(e.entry().id===`modal-side`?4:-1)}}var L=class o extends Ze$1{name=new vE(`Blocks workspace`,{nonNullable:!0});confirm(){this.modal.close(`confirm`,this.name.value)}static ɵfac=(()=>{let m;return function(a){return(m||(m=fn(o)))(a||o)}})();static ɵcmp=we({type:o,selectors:[[`app-component-dialog`]],features:[rt$1],decls:6,vars:2,consts:[[4,`appModalHeader`],[1,`dialog-body`],[`label`,`Project name`,3,`formControl`],[`class`,`dialog-actions`,4,`appModalFooter`],[1,`dialog-actions`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(e,a){e&1&&(Ow(0,Ne,3,1,`div`,0),ce(1,`div`,1)(2,`p`),Jt(3),pe(),ce(4,`bx-input-field`,2),VT(),pe()(),Ow(5,Ie,5,0,`div`,3)),e&2&&(re(3),Ar(a.data.description),re(),Ke$1(`formControl`,a.name),jT())},dependencies:[fe,j,p6,c6,xO,en,nn],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-width: 0;
}
.dialog-body[_ngcontent-%COMP%] {
  width: 28rem;
  max-width: 100%;
  min-width: 0;
}
p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  line-height: 1.6;
}
.dialog-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1rem;
}`]})};var Oe=class o{route=h(On);routeData=V4(this.route.data,{initialValue:this.route.snapshot.data});modals=h(fe$1);toasts=h(ft$1);entry=x(()=>e.find(m=>m.id===this.routeData().componentId)??e[0]);count=S(0);status=S(`Ready to try.`);fieldValue=S(``);showError=S(!1);fieldError=x(()=>this.showError()&&this.fieldValue().trim().length<3?`Enter at least three characters.`:void 0);name=new vE(`Blocks workspace`,{nonNullable:!0,validators:il.required});email=new vE(``,{nonNullable:!0,validators:il.email});volume=new vE(50,{nonNullable:!0});quantity=new vE(3,{nonNullable:!0});checked=new vE(!0,{nonNullable:!0});secondChecked=new vE(!1,{nonNullable:!0});disabledCheck=new vE({value:!1,disabled:!0},{nonNullable:!0});frequency=new vE(`weekly`,{nonNullable:!0});query=new vE(``,{nonNullable:!0});destination=new vE(`skopje`,{nonNullable:!0});enabled=new vE(!0,{nonNullable:!0});bannerVisible=S(!0);selectedTab=S(`overview`);tabsVariant=S(`segmented`);detailsDisabled=S(!1);showActivity=S(!0);tabNote=new vE(``,{nonNullable:!0});options=[{label:`Skopje`,value:`skopje`},{label:`Ohrid`,value:`ohrid`},{label:`Bitola`,value:`bitola`},{label:`Unavailable destination`,value:`unavailable`,disabled:!0}];names=[`Button`,`Checkbox`,`Input field`,`Menu`,`Modal`,`Select`,`Toast`];searchTerm=S(``);searchResults=x(()=>this.names.filter(m=>m.toLowerCase().includes(this.searchTerm().toLowerCase())));contextMenu;activate(m){this.count.update(e=>e+1),this.status.set(`${m} \xB7 action ${this.count()}`)}updateField(m){this.fieldValue.set(m.target.value)}openContextMenu(m){m.preventDefault();let e=m.currentTarget.getBoundingClientRect();this.contextMenu?.open(new MouseEvent(`contextmenu`,{clientX:e.left+16,clientY:e.bottom+4}))}openModal(m){let e=m??(this.entry().id===`modal-side`?`right`:this.entry().id===`modal-bottom-sheet`?`bottom-sheet`:`center`);this.modals.open(L,{data:{title:this.entry().title,description:`Edit the project name. The header, content, footer, backdrop and close behavior use the existing Blocks modal composition.`},header:{text:this.entry().title},style:{layout:e,hasBackdrop:!0,animate:!0,showCloseButton:!0}}).afterClosed().subscribe(t=>this.status.set(t.state===`confirm`?`Saved: ${t.data}`:`Dialog dismissed.`))}notify(m){let e={title:m===`success`?`Settings saved`:m===`warn`?`Review needed`:m===`danger`?`Action failed`:`Workspace update`,message:`This notification follows the application theme and appearance settings.`,durationInMs:4500};switch(m){case`success`:this.toasts.queueSuccess(e);break;case`info`:this.toasts.queueInfo(e);break;case`warn`:this.toasts.queueWarning(e);break;case`danger`:this.toasts.queueDanger(e)}this.status.set(`${m} notification queued.`)}static ɵfac=function(e){return new(e||o)};static ɵcmp=we({type:o,selectors:[[`app-component-demo`]],viewQuery:function(e,a){if(e&1&&Ma($d,5),e&2){let t;Wo(t=Yo())&&(a.contextMenu=t.first)}},decls:57,vars:9,consts:[[`dropdown`,`bxDropdown`],[`dropdownActions`,``],[`contextActions`,``],[1,`component-page`],[1,`component-header`],[`routerLink`,`/components`,1,`back-link`],[1,`eyebrow`],[1,`description`],[1,`component-meta`],[`routerLink`,`/appearance`],[`aria-labelledby`,`preview-heading`,1,`demo-section`],[1,`section-heading`],[`id`,`preview-heading`],[`bxSurface`,``,1,`demo-stage`],[1,`demo-stack`],[1,`demo-stack`,`control-width`],[1,`menu-preview`],[1,`demo-stack`,`banner-preview`],[`bxSurface`,``,1,`custom-surface`],[`role`,`status`,`aria-live`,`polite`,1,`action-status`],[`aria-labelledby`,`usage-heading`,1,`usage-section`],[`id`,`usage-heading`],[3,`textContent`],[`aria-label`,`Component documentation`,1,`documentation-section`],[3,`path`],[1,`demo-row`],[`bx-button`,``,`variant`,`filled`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`accent`,3,`click`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`disabled`],[`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`bx-button`,``,`variant`,`fab`,`aria-label`,`Add item`,3,`click`],[`name`,`plus`],[`label`,`Receive product updates`,3,`formControl`],[`label`,`Include preview features`,3,`formControl`],[`label`,`Unavailable setting`,3,`formControl`],[`label`,`Project name`,`forId`,`field-preview`,3,`required`,`error`],[`bxSurface`,``,1,`native-control-surface`],[`id`,`field-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`bx-button`,``,`variant`,`tonal`,3,`click`],[`label`,`Project name`,3,`errorMessages`,`formControl`],[`label`,`Email address`,`type`,`email`,3,`errorMessages`,`formControl`],[`label`,`Team members`,`type`,`number`,3,`min`,`max`,`formControl`],[`label`,`Daily summary`,`name`,`frequency-demo`,`value`,`daily`,3,`formControl`],[`label`,`Weekly summary`,`name`,`frequency-demo`,`value`,`weekly`,3,`formControl`],[`label`,`Only important updates`,`name`,`frequency-demo`,`value`,`important`,3,`formControl`],[`label`,`Find a component`,`placeholder`,`Try menu`,3,`search`,`formControl`],[1,`search-results`],[`label`,`Destination`,3,`options`,`isSearchable`,`formControl`],[`for`,`volume-demo`],[`bxSlider`,``,`id`,`volume-demo`,`type`,`range`,`min`,`0`,`max`,`100`,3,`formControl`],[`for`,`disabled-volume`],[`bxSlider`,``,`id`,`disabled-volume`,`type`,`range`,`value`,`30`,`disabled`,``],[`label`,`Enable notifications`,3,`formControl`],[`label`,`Reference`,`forId`,`error-preview`],[`id`,`error-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`id`,`custom-error`],[`ariaLabel`,`Project information`,3,`selectedValueChange`,`variant`,`selectedValue`],[`label`,`Overview`,`value`,`overview`,`icon`,`book-open`],[`bxTabContent`,``],[`label`,`Details`,`value`,`details`,`color`,`accent`,`icon`,`badge-check`,`endIcon`,`chevron-right`,3,`disabled`],[`label`,`Activity`,`value`,`activity`,`color`,`info`,`textColor`,`text-warn`,`highlightColor`,`text-warn`,`contentColor`,`text-info`,`icon`,`activity`],[`label`,`Unavailable`,`value`,`unavailable`,3,`disabled`],[`label`,`Project note`,3,`formControl`],[`label`,`Duplicate project`,`icon`,`copy`,3,`action`],[`label`,`Archive project`,`icon`,`archive`,3,`action`],[`label`,`Unavailable action`,3,`disabled`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Open settings`,`icon`,`settings`,`endIcon`,`chevron-right`,3,`action`],[`label`,`Delete project`,`icon`,`trash-2`,3,`action`,`danger`],[`text`,`Your changes are saved automatically.`],[`routerLink`,`/components/tooltip-directive`],[`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`Saves the current project`,`placement`,`top`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`An optional hint revealed by touching and holding`,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`tooltip-hold-target`,3,`click`],[`bx-button`,``,`variant`,`icon`,`aria-label`,`More information`,`bxTooltip`,`Appearance settings apply to all components`,`bxTooltipTouch`,`tap`,`placement`,`bottom`],[`name`,`info`],[`bx-button`,``,`variant`,`filled`,`bxTransition`,`fade`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[`tabindex`,`0`,1,`context-target`,3,`bxContextMenu`],[`label`,`Copy selection`,`icon`,`copy`,3,`action`],[`label`,`Archive selection`,`icon`,`archive`,3,`action`],[3,`minimumBreadcrumbs`],[`routerLink`,`/components/button`],[1,`demo-row`,`icon-row`],[`name`,`sparkles`,`size`,`32`,`color`,`text-accent`,`ariaLabel`,`Highlights`,3,`decorative`],[`name`,`check-circle`,`size`,`32`,`color`,`text-success`],[`name`,`info`,`size`,`32`,`color`,`text-info`,`bgColor`,`auto`],[`name`,`triangle-alert`,`size`,`32`,`color`,`text-warn`],[`name`,`heart`,`size`,`40`,`color`,`text-danger`],[`routerLink`,`/icon-catalog`],[3,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`],[3,`close`,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`routerLink`,`/toastr`],[`name`,`layers`,`size`,`28`],[`routerLink`,`/modal`]],template:function(e,a){if(e&1&&(ce(0,`article`,3)(1,`header`,4)(2,`a`,5),Jt(3,`All components`),pe(),ce(4,`p`,6),Jt(5),pe(),ce(6,`h1`),Jt(7),pe(),ce(8,`p`,7),Jt(9),pe(),ce(10,`div`,8)(11,`code`),Jt(12),pe(),ce(13,`a`,9),Jt(14,`Configure appearance globally`),pe()()(),ce(15,`section`,10)(16,`div`,11)(17,`h2`,12),Jt(18,`Interactive example`),pe(),ce(19,`span`),Jt(20,`Uses your active palette`),pe()(),ce(21,`div`,13),Be$1(22,Ae,19,1,`div`,14)(23,Re,6,5,`div`,14)(24,ze,8,5,`div`,15)(25,Le,6,11,`div`,15)(26,He,10,4,`fieldset`,14)(27,Qe,8,3,`div`,15)(28,$e,4,4,`div`,15)(29,Ke,11,2,`div`,15)(30,Xe,5,3,`div`,14)(31,Ge,7,4,`div`,15)(32,tt,17,9,`div`,14)(33,nt,4,1,`bx-menu`,16)(34,it,5,2,`bx-menu`,16)(35,ot,6,0,`div`,14)(36,rt,10,0,`div`,14)(37,lt,11,2,`div`,14)(38,mt,7,1,`div`,14)(39,st,6,1,`div`,14)(40,dt,9,1,`div`,14)(41,_t,5,1,`div`,17)(42,xt,14,0,`div`,14)(43,bt,12,0,`div`,14)(44,yt,8,0,`section`,18)(45,ft,9,2,`div`,14),pe(),ce(46,`p`,19),Jt(47),pe()(),ce(48,`section`,20)(49,`h2`,21),Jt(50,`Quick usage`),pe(),ce(51,`pre`),it$1(52,`code`,22),pe(),ce(53,`pre`),it$1(54,`code`,22),pe()(),ce(55,`section`,23),it$1(56,`app-readme`,24),pe()()),e&2){let t;re(5),Ar(a.entry().group),re(2),Ar(a.entry().title),re(2),Ar(a.entry().description),re(3),Ar(a.entry().selector),re(10),je$1((t=a.entry().id)===`button`?22:t===`checkbox`?23:t===`form-field`?24:t===`input-field`?25:t===`radio`?26:t===`search-input`?27:t===`select`?28:t===`slider`?29:t===`slide-toggle`?30:t===`error`?31:t===`tabs`?32:t===`menu`?33:t===`menu-item`?34:t===`tooltip`?35:t===`tooltip-directive`?36:t===`dropdown`?37:t===`context-menu`?38:t===`breadcrumbs`?39:t===`icon`?40:t===`modal-banner`?41:t===`toast-core`?42:t===`simple-toast`?43:t===`surface`?44:45),re(25),Ar(a.status()),re(5),Ke$1(`textContent`,`import { `+a.entry().symbol+` } from '`+a.entry().package+`';`),re(2),Ke$1(`textContent`,a.entry().example),re(2),Ke$1(`path`,a.entry().readme)}},dependencies:[cd,p6,QD,MO,c6,xO,fe,L$1,Kd,j,K,NS,Se,J,Z,gl,eS,tS,Hd,kS,$d,Yd,aS,bl,vl,X,Vn,Bn,V,T],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.component-page[_ngcontent-%COMP%] {
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem;
  color: var(--%NS%bx-text-primary);
}
.component-header[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
}
.back-link[_ngcontent-%COMP%] {
  display: inline-flex;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}
.eyebrow[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  margin: 0 0 0.5rem;
}
h1[_ngcontent-%COMP%] {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin: 0 0 0.75rem;
  line-height: 1.2;
}
h2[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  margin: 0;
}
h3[_ngcontent-%COMP%] {
  margin: 0;
}
.description[_ngcontent-%COMP%] {
  max-width: 48rem;
  color: var(--%NS%bx-text-secondary);
  line-height: 1.65;
  margin: 0 0 1rem;
}
.component-meta[_ngcontent-%COMP%], 
.demo-row[_ngcontent-%COMP%], 
.section-heading[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}
.component-meta[_ngcontent-%COMP%] {
  font-size: 0.875rem;
}
code[_ngcontent-%COMP%] {
  font-family:
    ui-monospace,
    SFMono-Regular,
    monospace;
}
.demo-section[_ngcontent-%COMP%], 
.usage-section[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
}
.section-heading[_ngcontent-%COMP%] {
  justify-content: space-between;
  margin-bottom: 1rem;
}
.section-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.8125rem;
}
.demo-stage[_ngcontent-%COMP%] {
  padding: 2rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  background:
    linear-gradient(
      135deg,
      var(--%NS%bx-bg-surface),
      var(--%NS%bx-bg-surface-alt));
  min-height: 12rem;
  display: flex;
  align-items: center;
}
.demo-stack[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  max-width: 100%;
  min-width: 0;
}
.control-width[_ngcontent-%COMP%] {
  width: min(100%, 26rem);
}
.control-width[_ngcontent-%COMP%]    > bx-input-field[_ngcontent-%COMP%], 
.control-width[_ngcontent-%COMP%]    > bx-select[_ngcontent-%COMP%], 
.control-width[_ngcontent-%COMP%]    > bx-search-input[_ngcontent-%COMP%], 
.control-width[_ngcontent-%COMP%]    > bx-form-field[_ngcontent-%COMP%] {
  width: 100%;
}
fieldset[_ngcontent-%COMP%] {
  border: 0;
  padding: 0;
  margin: 0;
}
legend[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
  font-weight: 600;
}
output[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.native-control[_ngcontent-%COMP%] {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
  background: var(--%NS%bx-bg-surface);
  color: var(--%NS%bx-text-primary);
  padding: 0.75rem;
  font: inherit;
}
.native-control[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 2px;
}
.menu-preview[_ngcontent-%COMP%] {
  min-width: 15rem;
}
.context-target[_ngcontent-%COMP%] {
  padding: 2rem;
  border: 1px dashed var(--%NS%bx-border-default);
  border-radius: 0.75rem;
}
.context-target[_ngcontent-%COMP%], 
.tooltip-hold-target[_ngcontent-%COMP%] {
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}
.banner-preview[_ngcontent-%COMP%] {
  width: 100%;
}
.banner-preview[_ngcontent-%COMP%]    > bx-modal-banner[_ngcontent-%COMP%] {
  width: 100%;
}
.custom-surface[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 0.75rem;
  max-width: 28rem;
}
.demo-stage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  line-height: 1.6;
  color: var(--%NS%bx-text-secondary);
}
.action-status[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
  min-height: 1.5em;
  margin: 0.75rem 0 0;
}
.usage-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}
pre[_ngcontent-%COMP%] {
  padding: 1rem;
  background: var(--%NS%bx-bg-surface);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.5rem;
  overflow: auto;
  white-space: pre;
  font-size: 0.8125rem;
  line-height: 1.7;
}
.search-results[_ngcontent-%COMP%] {
  margin: 0;
  padding-left: 1.25rem;
  line-height: 1.8;
}
a[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-brand);
  text-underline-offset: 3px;
}
@media (max-width: 640px) {
  .component-page[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .demo-stage[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .component-meta[_ngcontent-%COMP%] {
    align-items: flex-start;
    flex-direction: column;
  }
}
.native-control-surface[_ngcontent-%COMP%] {
  display: block;
  width: 100%;
}
.native-control-surface[_ngcontent-%COMP%]   .native-control[_ngcontent-%COMP%] {
  background: transparent;
  border: 0;
}
.native-control-surface[_ngcontent-%COMP%]    > .native-control[_ngcontent-%COMP%] {
  border: 0;
  outline: none;
}`]})};export{Oe as ComponentDemo};