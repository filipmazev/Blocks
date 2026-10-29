import{$t as e_,A as Di,An as sl,Dn as rS,G as Hn,Gn as yl,H as HT,Hn as wl,In as uS,K as IO,Kn as ym,Kt as ar,L as Fk,Ln as uY,Lt as Yo,Mn as t_,Mt as Wo,Nn as tk,Pt as Xd,Q as Ln,Rt as Zd,Tn as qo,Tt as TO,Un as x,Ut as _i,W as He$1,Wn as xa,Yt as ce,Z as Lk,Zt as dd,_n as nn,b as B4,c as K,cn as it$1,d as $T,dn as ke,dt as Pw,et as Ma,f as $d,fn as kk,gn as mu,gt as RS,hn as mn,ht as Qw,i as j,in as h,jn as tE,k as De,kt as Ue$1,l as Z,m as $o,mt as Qe$1,n as fe,o as e,on as iS,p as $e$1,pn as mY,qn as zd,qt as bl,r as L$1,s as J,sn as ie,t as Se,u as X,un as jn,ut as PS,w as CE,wn as qe$1,xn as pe,xt as S,yn as ot$1,yt as Rr}from"./main-NYZXUFEE.js";import{a as nn$1,i as fe$1,n as Ze$1,r as en,t as V}from"./chunk-Ce43uLrI.js";import{n as T}from"./chunk-CkXz_dvF.js";import{n as ft$1}from"./chunk-Dq_Gnn8Z.js";function Ne(o,m){if(o&1&&(ce(0,`div`)(1,`strong`),nn(2),pe()()),o&2){let e=ke();ie(2),Rr(e.data.title)}}function Ie(o,m){if(o&1){let e=Ma();ce(0,`div`,4)(1,`button`,5),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.close())}),nn(2,`Cancel`),pe(),ce(3,`button`,6),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.confirm())}),nn(4,`Save changes`),pe()()}}var qe=()=>({required:`Enter a project name.`});var je=()=>({email:`Enter a valid email address.`});var Be=()=>({name:`settings`});var Fe=o=>({text:`Project settings`,icon:o});function Ae(o,m){if(o&1){let e=Ma();ce(0,`div`,14)(1,`div`,25)(2,`button`,26),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.activate(`Primary action`))}),nn(3,`Primary action`),pe(),ce(4,`button`,27),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.activate(`Tonal action`))}),nn(5,`Tonal`),pe(),ce(6,`button`,28),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.activate(`Text action`))}),nn(7,`Text`),pe(),ce(8,`button`,29),nn(9,`Disabled`),pe()(),ce(10,`div`,25)(11,`button`,30),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.activate(`Success`))}),nn(12,`Success`),pe(),ce(13,`button`,31),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.activate(`Warning`))}),nn(14,`Warning`),pe(),ce(15,`button`,32),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.activate(`Delete`))}),nn(16,`Delete`),pe(),ce(17,`button`,33),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.activate(`Add item`))}),ot$1(18,`bx-icon`,34),pe()()()}o&2&&(ie(8),Qe$1(`disabled`,!0))}function Re(o,m){if(o&1&&(ce(0,`div`,14)(1,`bx-checkbox`,35),HT(),pe(),ce(2,`bx-checkbox`,36),HT(),pe(),ce(3,`bx-checkbox`,37),HT(),pe(),ce(4,`output`),nn(5),pe()()),o&2){let e=ke();ie(),Qe$1(`formControl`,e.checked),$T(),ie(),Qe$1(`formControl`,e.secondChecked),$T(),ie(),Qe$1(`formControl`,e.disabledCheck),$T(),ie(2),Qw(`Updates: `,e.checked.value?`on`:`off`,` · Previews: `,e.secondChecked.value?`on`:`off`)}}function ze(o,m){if(o&1){let e=Ma();ce(0,`div`,15)(1,`bx-form-field`,38)(2,`span`,39)(3,`input`,40),qe$1(`input`,function(t){_i(e);let f=ke();return Di(f.updateField(t))})(`blur`,function(){_i(e);let t=ke();return Di(t.showError.set(!0))}),pe()()(),ce(4,`button`,41),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.showError.set(!0))}),nn(5,`Validate name`),pe(),ce(6,`output`),nn(7),pe()()}if(o&2){let e=ke();ie(),Qe$1(`required`,!0)(`error`,e.fieldError()),ie(2),Qe$1(`value`,e.fieldValue()),He$1(`aria-invalid`,!!e.fieldError()),ie(4),ar(`Value: `,e.fieldValue()||`empty`)}}function Le(o,m){if(o&1&&(ce(0,`div`,15)(1,`bx-input-field`,42),HT(),pe(),ce(2,`bx-input-field`,43),HT(),pe(),ce(3,`bx-input-field`,44),HT(),pe(),ce(4,`output`),nn(5),pe()()),o&2){let e=ke();ie(),Qe$1(`errorMessages`,Lk(9,qe))(`formControl`,e.name),$T(),ie(),Qe$1(`errorMessages`,Lk(10,je))(`formControl`,e.email),$T(),ie(),Qe$1(`min`,1)(`max`,20)(`formControl`,e.quantity),$T(),ie(2),Qw(``,e.name.value,` · `,e.quantity.value,` members`)}}function He(o,m){if(o&1){let e=Ma();ce(0,`fieldset`,14)(1,`legend`),nn(2,`Notification frequency`),pe(),ce(3,`bx-radio`,45),HT(),pe(),ce(4,`bx-radio`,46),HT(),pe(),ce(5,`bx-radio`,47),HT(),pe(),ce(6,`output`),nn(7),pe(),ce(8,`button`,28),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.frequency.reset())}),nn(9,`Reset frequency`),pe()()}if(o&2){let e=ke();ie(3),Qe$1(`formControl`,e.frequency),$T(),ie(),Qe$1(`formControl`,e.frequency),$T(),ie(),Qe$1(`formControl`,e.frequency),$T(),ie(2),ar(`Selected: `,e.frequency.value)}}function Ue(o,m){if(o&1&&(ce(0,`li`),nn(1),pe()),o&2){let e=m.$implicit;ie(),Rr(e)}}function We(o,m){o&1&&(ce(0,`li`),nn(1,`No components match your search.`),pe())}function Qe(o,m){if(o&1){let e=Ma();ce(0,`div`,15)(1,`bx-search-input`,48),HT(),qe$1(`search`,function(t){_i(e);let f=ke();return Di(f.searchTerm.set(t))}),pe(),ce(2,`ul`,49),$o(3,Ue,2,1,`li`,null,mu,!1,We,2,0,`li`),pe(),ce(6,`output`),nn(7),pe()()}if(o&2){let e=ke();ie(),Qe$1(`formControl`,e.query),$T(),ie(2),qo(e.searchResults()),ie(4),ar(``,e.searchResults().length,` results`)}}function $e(o,m){if(o&1&&(ce(0,`div`,15)(1,`bx-select`,50),HT(),pe(),ce(2,`output`),nn(3),pe()()),o&2){let e=ke();ie(),Qe$1(`options`,e.options)(`isSearchable`,!0)(`formControl`,e.destination),$T(),ie(2),ar(`Selected: `,e.destination.value)}}function Ke(o,m){if(o&1){let e=Ma();ce(0,`div`,15)(1,`label`,51),nn(2,`Volume`),pe(),ce(3,`input`,52),HT(),pe(),ce(4,`output`),nn(5),pe(),ce(6,`button`,28),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.volume.setValue(50))}),nn(7,`Reset volume`),pe(),ce(8,`label`,53),nn(9,`Unavailable range`),pe(),ot$1(10,`input`,54),pe()}if(o&2){let e=ke();ie(3),Qe$1(`formControl`,e.volume),$T(),ie(2),ar(``,e.volume.value,`%`)}}function Xe(o,m){if(o&1&&(ce(0,`div`,14)(1,`bx-slide-toggle`,55),HT(),pe(),ce(2,`bx-slide-toggle`,37),HT(),pe(),ce(3,`output`),nn(4),pe()()),o&2){let e=ke();ie(),Qe$1(`formControl`,e.enabled),$T(),ie(),Qe$1(`formControl`,e.disabledCheck),$T(),ie(2),ar(`Notifications are `,e.enabled.value?`enabled`:`disabled`,`.`)}}function Ye(o,m){if(o&1&&(ce(0,`bx-error`,58),nn(1),pe()),o&2){let e=ke(2);ie(),Rr(e.fieldError())}}function Ge(o,m){if(o&1){let e=Ma();ce(0,`div`,15)(1,`bx-form-field`,56)(2,`span`,39)(3,`input`,57),qe$1(`input`,function(t){_i(e);let f=ke();return Di(f.updateField(t))})(`blur`,function(){_i(e);let t=ke();return Di(t.showError.set(!0))}),pe()(),Ue$1(4,Ye,2,1,`bx-error`,58),pe(),ce(5,`button`,41),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.showError.set(!0))}),nn(6,`Validate reference`),pe()()}if(o&2){let e=ke();ie(3),Qe$1(`value`,e.fieldValue()),He$1(`aria-invalid`,!!e.fieldError())(`aria-describedby`,e.fieldError()?`custom-error`:null),ie(),$e$1(e.fieldError()?4:-1)}}function Je(o,m){if(o&1&&(ce(0,`p`),nn(1,`Keep related information together while showing one panel at a time.`),pe(),ce(2,`bx-input-field`,65),HT(),pe()),o&2){let e=ke(2);ie(2),Qe$1(`formControl`,e.tabNote),$T()}}function Ze(o,m){o&1&&(ce(0,`p`),nn(1,`Headers support arrow keys, Home and End. Panel content is created only when selected.`),pe())}function et(o,m){o&1&&(ce(0,`bx-tab`,63)(1,`p`),nn(2,`No recent project activity.`),pe()())}function tt(o,m){if(o&1){let e=Ma();ce(0,`div`,14)(1,`bx-tabs`,59),t_(`selectedValueChange`,function(t){_i(e);let f=ke();return kk(f.selectedTab,t)||(f.selectedTab=t),Di(t)}),ce(2,`bx-tab`,60),Pw(3,Je,3,1,`ng-template`,61),pe(),ce(4,`bx-tab`,62),Pw(5,Ze,2,0,`ng-template`,61),pe(),Ue$1(6,et,3,0,`bx-tab`,63),ot$1(7,`bx-tab`,64),pe(),ce(8,`div`,25)(9,`button`,41),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.tabsVariant.set(t.tabsVariant()===`segmented`?`underline`:`segmented`))}),nn(10,`Underline appearance`),pe(),ce(11,`button`,41),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.detailsDisabled.set(!t.detailsDisabled()))}),nn(12,`Disable details`),pe(),ce(13,`button`,41),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.showActivity.set(!t.showActivity()))}),nn(14,`Show activity`),pe()(),ce(15,`output`),nn(16),pe()()}if(o&2){let e=ke();ie(),Qe$1(`variant`,e.tabsVariant()),e_(`selectedValue`,e.selectedTab),ie(3),Qe$1(`disabled`,e.detailsDisabled()),ie(2),$e$1(e.showActivity()?6:-1),ie(),Qe$1(`disabled`,!0),ie(2),He$1(`aria-pressed`,e.tabsVariant()===`underline`),ie(2),He$1(`aria-pressed`,e.detailsDisabled()),ie(2),He$1(`aria-pressed`,e.showActivity()),ie(3),ar(`Selected: `,e.selectedTab())}}function nt(o,m){if(o&1){let e=Ma();ce(0,`bx-menu`,16)(1,`bx-menu-item`,66),qe$1(`action`,function(){_i(e);let t=ke();return Di(t.activate(`Project duplicated`))}),pe(),ce(2,`bx-menu-item`,67),qe$1(`action`,function(){_i(e);let t=ke();return Di(t.activate(`Project archived`))}),pe(),ot$1(3,`bx-menu-item`,68),pe()}o&2&&(ie(3),Qe$1(`disabled`,!0))}function it(o,m){if(o&1){let e=Ma();ce(0,`bx-menu`,16)(1,`bx-menu-item`,69),qe$1(`action`,function(){_i(e);let t=ke();return Di(t.activate(`Copy link`))}),pe(),ce(2,`bx-menu-item`,70),qe$1(`action`,function(){_i(e);let t=ke();return Di(t.activate(`Open settings`))}),pe(),ce(3,`bx-menu-item`,71),qe$1(`action`,function(){_i(e);let t=ke();return Di(t.activate(`Delete requested`))}),pe(),ot$1(4,`bx-menu-item`,68),pe()}o&2&&(ie(3),Qe$1(`danger`,!0),ie(),Qe$1(`disabled`,!0))}function ot(o,m){o&1&&(ce(0,`div`,14),ot$1(1,`bx-tooltip`,72),ce(2,`p`),nn(3,`Standalone tooltip content. Use the trigger directive for positioned help.`),pe(),ce(4,`a`,73),nn(5,`Try the tooltip trigger`),pe()())}function rt(o,m){if(o&1){let e=Ma();ce(0,`div`,14)(1,`div`,25)(2,`button`,74),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.activate(`Saved`))}),nn(3,`Save project`),pe(),ce(4,`button`,75),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.activate(`Normal tap activated`))}),nn(5,`Hold for a hint`),pe(),ce(6,`button`,76),ot$1(7,`bx-icon`,77),pe()(),ce(8,`p`),nn(9,`Hover with a mouse or use keyboard focus for hints. On touch screens, Save project activates immediately, Hold for a hint supports a long press, and the information button opens help on tap.`),pe()()}}function at(o,m){if(o&1){let e=Ma();ce(0,`bx-menu`)(1,`bx-menu-item`,80),qe$1(`action`,function(){_i(e),ke();let t=tk(2);return ke().activate(`Project duplicated`),Di(t.close())}),pe(),ce(2,`bx-menu-item`,81),qe$1(`action`,function(){_i(e),ke();let t=tk(2);return ke().activate(`Project archived`),Di(t.close())}),pe(),ce(3,`bx-menu-item`,82),qe$1(`action`,function(){_i(e),ke();let t=tk(2);return ke().activate(`Delete requested`),Di(t.close())}),pe()()}o&2&&(ie(3),Qe$1(`danger`,!0))}function lt(o,m){if(o&1&&(ce(0,`div`,14)(1,`button`,78,0),nn(3,`Project actions `),ot$1(4,`bx-icon`,79),pe(),Pw(5,at,4,1,`ng-template`,null,1,ym),ce(7,`output`),nn(8),pe(),ce(9,`p`),nn(10,`Open, close, or reopen while the menu fades. Its contents keep their full size throughout.`),pe()()),o&2){let e=tk(2),a=tk(6);ie(),Qe$1(`bxDropdown`,a),ie(7),ar(`Transition: `,e.state())}}function ct(o,m){if(o&1){let e=Ma();ce(0,`bx-menu`)(1,`bx-menu-item`,84),qe$1(`action`,function(){_i(e);let t=ke(2);return Di(t.activate(`Selection copied`))}),pe(),ce(2,`bx-menu-item`,85),qe$1(`action`,function(){_i(e);let t=ke(2);return Di(t.activate(`Selection archived`))}),pe()()}}function mt(o,m){if(o&1){let e=Ma();ce(0,`div`,14)(1,`div`,83),nn(2,`Right-click, touch and hold, or focus here and press Shift + F10.`),pe(),ce(3,`button`,41),qe$1(`click`,function(t){_i(e);let f=ke();return Di(f.openContextMenu(t))}),nn(4,`Open actions`),pe(),Pw(5,ct,3,0,`ng-template`,null,2,ym),pe()}if(o&2){let e=tk(6);ie(),Qe$1(`bxContextMenu`,e)}}function st(o,m){o&1&&(ce(0,`div`,14),ot$1(1,`bx-breadcrumbs`,86),ce(2,`p`),nn(3,`This trail comes from the current route metadata. Select Components to navigate back.`),pe(),ce(4,`a`,87),nn(5,`Navigate to Button`),pe()()),o&2&&(ie(),Qe$1(`minimumBreadcrumbs`,1))}function dt(o,m){o&1&&(ce(0,`div`,14)(1,`div`,88),ot$1(2,`bx-icon`,89)(3,`bx-icon`,90)(4,`bx-icon`,91)(5,`bx-icon`,92)(6,`bx-icon`,93),pe(),ce(7,`a`,94),nn(8,`Browse the searchable icon catalog`),pe()()),o&2&&(ie(2),Qe$1(`decorative`,!1))}function ut(o,m){if(o&1){let e=Ma();ce(0,`bx-modal-banner`,97),qe$1(`close`,function(){_i(e);let t=ke(2);return t.bannerVisible.set(!1),Di(t.activate(`Banner dismissed`))}),pe()}o&2&&Qe$1(`header`,Fk(3,Fe,Lk(2,Be)))(`showCloseButton`,!0)}function pt(o,m){if(o&1){let e=Ma();ce(0,`button`,41),qe$1(`click`,function(){_i(e);let t=ke(2);return Di(t.bannerVisible.set(!0))}),nn(1,`Restore banner`),pe()}}function _t(o,m){if(o&1){let e=Ma();ce(0,`div`,17),Ue$1(1,ut,1,5,`bx-modal-banner`,95)(2,pt,2,0,`button`,96),ce(3,`button`,26),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.openModal())}),nn(4,`See banner in a dialog`),pe()()}if(o&2){let e=ke();ie(),$e$1(e.bannerVisible()?1:2)}}function xt(o,m){if(o&1){let e=Ma();ce(0,`div`,14)(1,`div`,25)(2,`button`,30),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.notify(`success`))}),nn(3,`Success`),pe(),ce(4,`button`,98),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.notify(`info`))}),nn(5,`Information`),pe(),ce(6,`button`,31),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.notify(`warn`))}),nn(7,`Warning`),pe(),ce(8,`button`,32),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.notify(`danger`))}),nn(9,`Error`),pe()(),ce(10,`p`),nn(11,`The toast host manages the progress indicator, dismiss action, pause and cleanup.`),pe(),ce(12,`a`,99),nn(13,`Open the full toast configurator`),pe()()}}function bt(o,m){if(o&1){let e=Ma();ce(0,`div`,14)(1,`div`,25)(2,`button`,30),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.notify(`success`))}),nn(3,`Show success`),pe(),ce(4,`button`,98),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.notify(`info`))}),nn(5,`Show information`),pe(),ce(6,`button`,31),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.notify(`warn`))}),nn(7,`Show warning`),pe(),ce(8,`button`,32),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.notify(`danger`))}),nn(9,`Show error`),pe()(),ce(10,`p`),nn(11,`Semantic colors remain tied to the active Blocks palette.`),pe()()}}function yt(o,m){if(o&1){let e=Ma();ce(0,`section`,18),ot$1(1,`bx-icon`,100),ce(2,`h3`),nn(3,`A custom Blocks surface`),pe(),ce(4,`p`),nn(5,`Material, blur, tint, lighting and motion follow the same global configuration as the controls around it.`),pe(),ce(6,`button`,41),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.activate(`Custom surface action`))}),nn(7,`Try an action`),pe()()}}function Ct(o,m){if(o&1){let e=Ma();ce(0,`button`,41),qe$1(`click`,function(){_i(e);let t=ke(2);return Di(t.openModal(`left`))}),nn(1,`Open on the left`),pe()}}function ft(o,m){if(o&1){let e=Ma();ce(0,`div`,14)(1,`div`,25)(2,`button`,26),qe$1(`click`,function(){_i(e);let t=ke();return Di(t.openModal())}),nn(3),pe(),Ue$1(4,Ct,2,0,`button`,96),pe(),ce(5,`p`),nn(6,`Try editing, saving, pressing Escape, and dismissing through the backdrop. This is the actual service-created component.`),pe(),ce(7,`a`,101),nn(8,`Open the full modal configurator`),pe()()}if(o&2){let e=ke();ie(3),ar(`Open `,e.entry().title.toLowerCase()),ie(),$e$1(e.entry().id===`modal-side`?4:-1)}}var L=class o extends Ze$1{name=new CE(`Blocks workspace`,{nonNullable:!0});confirm(){this.modal.close(`confirm`,this.name.value)}static ɵfac=(()=>{let m;return function(a){return(m||(m=mn(o)))(a||o)}})();static ɵcmp=De({type:o,selectors:[[`app-component-dialog`]],features:[it$1],decls:6,vars:2,consts:[[4,`appModalHeader`],[1,`dialog-body`],[`label`,`Project name`,3,`formControl`],[`class`,`dialog-actions`,4,`appModalFooter`],[1,`dialog-actions`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(e,a){e&1&&(Pw(0,Ne,3,1,`div`,0),ce(1,`div`,1)(2,`p`),nn(3),pe(),ce(4,`bx-input-field`,2),HT(),pe()(),Pw(5,Ie,5,0,`div`,3)),e&2&&(ie(3),Rr(a.data.description),ie(),Qe$1(`formControl`,a.name),$T())},dependencies:[fe,j,mY,uY,TO,en,nn$1],styles:[`
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
}`]})};var Oe=class o{route=h(Ln);routeData=B4(this.route.data,{initialValue:this.route.snapshot.data});modals=h(fe$1);toasts=h(ft$1);entry=x(()=>e.find(m=>m.id===this.routeData().componentId)??e[0]);count=S(0);status=S(`Ready to try.`);fieldValue=S(``);showError=S(!1);fieldError=x(()=>this.showError()&&this.fieldValue().trim().length<3?`Enter at least three characters.`:void 0);name=new CE(`Blocks workspace`,{nonNullable:!0,validators:sl.required});email=new CE(``,{nonNullable:!0,validators:sl.email});volume=new CE(50,{nonNullable:!0});quantity=new CE(3,{nonNullable:!0});checked=new CE(!0,{nonNullable:!0});secondChecked=new CE(!1,{nonNullable:!0});disabledCheck=new CE({value:!1,disabled:!0},{nonNullable:!0});frequency=new CE(`weekly`,{nonNullable:!0});query=new CE(``,{nonNullable:!0});destination=new CE(`skopje`,{nonNullable:!0});enabled=new CE(!0,{nonNullable:!0});bannerVisible=S(!0);selectedTab=S(`overview`);tabsVariant=S(`segmented`);detailsDisabled=S(!1);showActivity=S(!0);tabNote=new CE(``,{nonNullable:!0});options=[{label:`Skopje`,value:`skopje`},{label:`Ohrid`,value:`ohrid`},{label:`Bitola`,value:`bitola`},{label:`Unavailable destination`,value:`unavailable`,disabled:!0}];names=[`Button`,`Checkbox`,`Input field`,`Menu`,`Modal`,`Select`,`Toast`];searchTerm=S(``);searchResults=x(()=>this.names.filter(m=>m.toLowerCase().includes(this.searchTerm().toLowerCase())));contextMenu;activate(m){this.count.update(e=>e+1),this.status.set(`${m} \xB7 action ${this.count()}`)}updateField(m){this.fieldValue.set(m.target.value)}openContextMenu(m){m.preventDefault();let e=m.currentTarget.getBoundingClientRect();this.contextMenu?.open(new MouseEvent(`contextmenu`,{clientX:e.left+16,clientY:e.bottom+4}))}openModal(m){let e=m??(this.entry().id===`modal-side`?`right`:this.entry().id===`modal-bottom-sheet`?`bottom-sheet`:`center`);this.modals.open(L,{data:{title:this.entry().title,description:`Edit the project name. The header, content, footer, backdrop and close behavior use the existing Blocks modal composition.`},header:{text:this.entry().title},style:{layout:e,hasBackdrop:!0,animate:!0,showCloseButton:!0}}).afterClosed().subscribe(t=>this.status.set(t.state===`confirm`?`Saved: ${t.data}`:`Dialog dismissed.`))}notify(m){let e={title:m===`success`?`Settings saved`:m===`warn`?`Review needed`:m===`danger`?`Action failed`:`Workspace update`,message:`This notification follows the application theme and appearance settings.`,durationInMs:4500};switch(m){case`success`:this.toasts.queueSuccess(e);break;case`info`:this.toasts.queueInfo(e);break;case`warn`:this.toasts.queueWarning(e);break;case`danger`:this.toasts.queueDanger(e)}this.status.set(`${m} notification queued.`)}static ɵfac=function(e){return new(e||o)};static ɵcmp=De({type:o,selectors:[[`app-component-demo`]],viewQuery:function(e,a){if(e&1&&xa(zd,5),e&2){let t;Wo(t=Yo())&&(a.contextMenu=t.first)}},decls:57,vars:9,consts:[[`dropdown`,`bxDropdown`],[`dropdownActions`,``],[`contextActions`,``],[1,`component-page`],[1,`component-header`],[`routerLink`,`/components`,1,`back-link`],[1,`eyebrow`],[1,`description`],[1,`component-meta`],[`routerLink`,`/appearance`],[`aria-labelledby`,`preview-heading`,1,`demo-section`],[1,`section-heading`],[`id`,`preview-heading`],[`bxSurface`,``,1,`demo-stage`],[1,`demo-stack`],[1,`demo-stack`,`control-width`],[1,`menu-preview`],[1,`demo-stack`,`banner-preview`],[`bxSurface`,``,1,`custom-surface`],[`role`,`status`,`aria-live`,`polite`,1,`action-status`],[`aria-labelledby`,`usage-heading`,1,`usage-section`],[`id`,`usage-heading`],[3,`textContent`],[`aria-label`,`Component documentation`,1,`documentation-section`],[3,`path`],[1,`demo-row`],[`bx-button`,``,`variant`,`filled`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`accent`,3,`click`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`disabled`],[`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`bx-button`,``,`variant`,`fab`,`aria-label`,`Add item`,3,`click`],[`name`,`plus`],[`label`,`Receive product updates`,3,`formControl`],[`label`,`Include preview features`,3,`formControl`],[`label`,`Unavailable setting`,3,`formControl`],[`label`,`Project name`,`forId`,`field-preview`,3,`required`,`error`],[`bxSurface`,``,1,`native-control-surface`],[`id`,`field-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`bx-button`,``,`variant`,`tonal`,3,`click`],[`label`,`Project name`,3,`errorMessages`,`formControl`],[`label`,`Email address`,`type`,`email`,3,`errorMessages`,`formControl`],[`label`,`Team members`,`type`,`number`,3,`min`,`max`,`formControl`],[`label`,`Daily summary`,`name`,`frequency-demo`,`value`,`daily`,3,`formControl`],[`label`,`Weekly summary`,`name`,`frequency-demo`,`value`,`weekly`,3,`formControl`],[`label`,`Only important updates`,`name`,`frequency-demo`,`value`,`important`,3,`formControl`],[`label`,`Find a component`,`placeholder`,`Try menu`,3,`search`,`formControl`],[1,`search-results`],[`label`,`Destination`,3,`options`,`isSearchable`,`formControl`],[`for`,`volume-demo`],[`bxSlider`,``,`id`,`volume-demo`,`type`,`range`,`min`,`0`,`max`,`100`,3,`formControl`],[`for`,`disabled-volume`],[`bxSlider`,``,`id`,`disabled-volume`,`type`,`range`,`value`,`30`,`disabled`,``],[`label`,`Enable notifications`,3,`formControl`],[`label`,`Reference`,`forId`,`error-preview`],[`id`,`error-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`id`,`custom-error`],[`ariaLabel`,`Project information`,3,`selectedValueChange`,`variant`,`selectedValue`],[`label`,`Overview`,`value`,`overview`,`icon`,`book-open`],[`bxTabContent`,``],[`label`,`Details`,`value`,`details`,`color`,`accent`,`icon`,`badge-check`,`endIcon`,`chevron-right`,3,`disabled`],[`label`,`Activity`,`value`,`activity`,`color`,`info`,`textColor`,`text-warn`,`highlightColor`,`text-warn`,`contentColor`,`text-info`,`icon`,`activity`],[`label`,`Unavailable`,`value`,`unavailable`,3,`disabled`],[`label`,`Project note`,3,`formControl`],[`label`,`Duplicate project`,`icon`,`copy`,3,`action`],[`label`,`Archive project`,`icon`,`archive`,3,`action`],[`label`,`Unavailable action`,3,`disabled`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Open settings`,`icon`,`settings`,`endIcon`,`chevron-right`,3,`action`],[`label`,`Delete project`,`icon`,`trash-2`,3,`action`,`danger`],[`text`,`Your changes are saved automatically.`],[`routerLink`,`/components/tooltip-directive`],[`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`Saves the current project`,`placement`,`top`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`An optional hint revealed by touching and holding`,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`tooltip-hold-target`,3,`click`],[`bx-button`,``,`variant`,`icon`,`aria-label`,`More information`,`bxTooltip`,`Appearance settings apply to all components`,`bxTooltipTouch`,`tap`,`placement`,`bottom`],[`name`,`info`],[`bx-button`,``,`variant`,`filled`,`bxTransition`,`fade`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[`tabindex`,`0`,1,`context-target`,3,`bxContextMenu`],[`label`,`Copy selection`,`icon`,`copy`,3,`action`],[`label`,`Archive selection`,`icon`,`archive`,3,`action`],[3,`minimumBreadcrumbs`],[`routerLink`,`/components/button`],[1,`demo-row`,`icon-row`],[`name`,`sparkles`,`size`,`32`,`color`,`text-accent`,`ariaLabel`,`Highlights`,3,`decorative`],[`name`,`check-circle`,`size`,`32`,`color`,`text-success`],[`name`,`info`,`size`,`32`,`color`,`text-info`,`bgColor`,`auto`],[`name`,`triangle-alert`,`size`,`32`,`color`,`text-warn`],[`name`,`heart`,`size`,`40`,`color`,`text-danger`],[`routerLink`,`/icon-catalog`],[3,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`],[3,`close`,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`routerLink`,`/toastr`],[`name`,`layers`,`size`,`28`],[`routerLink`,`/modal`]],template:function(e,a){if(e&1&&(ce(0,`article`,3)(1,`header`,4)(2,`a`,5),nn(3,`All components`),pe(),ce(4,`p`,6),nn(5),pe(),ce(6,`h1`),nn(7),pe(),ce(8,`p`,7),nn(9),pe(),ce(10,`div`,8)(11,`code`),nn(12),pe(),ce(13,`a`,9),nn(14,`Configure appearance globally`),pe()()(),ce(15,`section`,10)(16,`div`,11)(17,`h2`,12),nn(18,`Interactive example`),pe(),ce(19,`span`),nn(20,`Uses your active palette`),pe()(),ce(21,`div`,13),Ue$1(22,Ae,19,1,`div`,14)(23,Re,6,5,`div`,14)(24,ze,8,5,`div`,15)(25,Le,6,11,`div`,15)(26,He,10,4,`fieldset`,14)(27,Qe,8,3,`div`,15)(28,$e,4,4,`div`,15)(29,Ke,11,2,`div`,15)(30,Xe,5,3,`div`,14)(31,Ge,7,4,`div`,15)(32,tt,17,9,`div`,14)(33,nt,4,1,`bx-menu`,16)(34,it,5,2,`bx-menu`,16)(35,ot,6,0,`div`,14)(36,rt,10,0,`div`,14)(37,lt,11,2,`div`,14)(38,mt,7,1,`div`,14)(39,st,6,1,`div`,14)(40,dt,9,1,`div`,14)(41,_t,5,1,`div`,17)(42,xt,14,0,`div`,14)(43,bt,12,0,`div`,14)(44,yt,8,0,`section`,18)(45,ft,9,2,`div`,14),pe(),ce(46,`p`,19),nn(47),pe()(),ce(48,`section`,20)(49,`h2`,21),nn(50,`Quick usage`),pe(),ce(51,`pre`),ot$1(52,`code`,22),pe(),ce(53,`pre`),ot$1(54,`code`,22),pe()(),ce(55,`section`,23),ot$1(56,`app-readme`,24),pe()()),e&2){let t;ie(5),Rr(a.entry().group),ie(2),Rr(a.entry().title),ie(2),Rr(a.entry().description),ie(3),Rr(a.entry().selector),ie(10),$e$1((t=a.entry().id)===`button`?22:t===`checkbox`?23:t===`form-field`?24:t===`input-field`?25:t===`radio`?26:t===`search-input`?27:t===`select`?28:t===`slider`?29:t===`slide-toggle`?30:t===`error`?31:t===`tabs`?32:t===`menu`?33:t===`menu-item`?34:t===`tooltip`?35:t===`tooltip-directive`?36:t===`dropdown`?37:t===`context-menu`?38:t===`breadcrumbs`?39:t===`icon`?40:t===`modal-banner`?41:t===`toast-core`?42:t===`simple-toast`?43:t===`surface`?44:45),ie(25),Rr(a.status()),ie(5),Qe$1(`textContent`,`import { `+a.entry().symbol+` } from '`+a.entry().package+`';`),ie(2),Qe$1(`textContent`,a.entry().example),ie(2),Qe$1(`path`,a.entry().readme)}},dependencies:[dd,mY,tE,IO,uY,TO,fe,L$1,Xd,j,K,PS,Se,J,Z,yl,rS,iS,$d,RS,zd,Zd,uS,wl,bl,X,jn,Hn,V,T],styles:[`
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