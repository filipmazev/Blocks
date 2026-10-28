import{Cn as lr,Dn as nd,En as nE,Fn as p,Ht as c_,It as a_,L as It,Mn as o_,Nt as _u,Pn as ow,Qt as fN,S as Cx,U as LT,Ut as cr,V as Kt,Vn as rd,Vt as c5,Wn as rt$1,Y as Nc,_n as kT,an as gt,ar as vk,b as Co,cn as hi,cr as wE,d as BC,dr as wp,er as uN,fn as it$1,g as Bt,gn as jt,ht as Uv,in as gk,it as S,jt as _p,kt as _T,l as Ac,ln as i5,lr as wa,mn as j8,or as vo,q as Mr,qn as s_,rr as ur,rt as Rc,s as $v,tn as fi,ur as wk,vt as Vn,x as Cp,xn as l_,xr as yx,yr as yn,yt as W}from"./chunk-CNPhXHsc.js";import{c as K,d as h,f as te,i as j,l as Z,n as le,o as e,p as X,r as L$1,s as J,t as S$1,u as O}from"./main-ZPS4CPYA.js";import{a as nn,i as fe,n as Ze$1,r as en,t as V}from"./chunk-DVRkWdW7.js";import{n as ft}from"./chunk-BF-8wDsQ.js";import{t as A}from"./chunk-D7S6Hi50.js";function De(o,c){if(o&1&&(It(0,`div`)(1,`strong`),Co(2),Bt()()),o&2){let e=ur();jt(2),Nc(e.data.title)}}function Ve(o,c){if(o&1){let e=kT();It(0,`div`,4)(1,`button`,5),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.close())}),Co(2,`Cancel`),Bt(),It(3,`button`,6),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.confirm())}),Co(4,`Save changes`),Bt()()}}var Me=()=>({required:`Enter a project name.`});var Te=()=>({email:`Enter a valid email address.`});var Pe=()=>({name:`settings`});var Oe=o=>({text:`Project settings`,icon:o});function Ne(o,c){if(o&1){let e=kT();It(0,`div`,14)(1,`div`,17)(2,`button`,26),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.activate(`Primary action`))}),Co(3,`Primary action`),Bt(),It(4,`button`,27),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.activate(`Tonal action`))}),Co(5,`Tonal`),Bt(),It(6,`button`,28),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.activate(`Text action`))}),Co(7,`Text`),Bt(),It(8,`button`,29),Co(9,`Disabled`),Bt()(),It(10,`div`,17)(11,`button`,30),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.activate(`Success`))}),Co(12,`Success`),Bt(),It(13,`button`,31),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.activate(`Warning`))}),Co(14,`Warning`),Bt(),It(15,`button`,32),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.activate(`Delete`))}),Co(16,`Delete`),Bt(),It(17,`button`,33),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.activate(`Add item`))}),fi(18,`bx-icon`,34),Bt()()()}o&2&&(jt(8),vo(`disabled`,!0))}function Ie(o,c){if(o&1&&(It(0,`div`,14)(1,`bx-checkbox`,35),yx(),Bt(),It(2,`bx-checkbox`,36),yx(),Bt(),It(3,`bx-checkbox`,37),yx(),Bt(),It(4,`output`),Co(5),Bt()()),o&2){let e=ur();jt(),vo(`formControl`,e.checked),Cx(),jt(),vo(`formControl`,e.secondChecked),Cx(),jt(),vo(`formControl`,e.disabledCheck),Cx(),jt(2),ow(`Updates: `,e.checked.value?`on`:`off`,` · Previews: `,e.secondChecked.value?`on`:`off`)}}function qe(o,c){if(o&1){let e=kT();It(0,`div`,15)(1,`bx-form-field`,38)(2,`span`,39)(3,`input`,40),it$1(`input`,function(t){Uv(e);let C=ur();return $v(C.updateField(t))})(`blur`,function(){Uv(e);let t=ur();return $v(t.showError.set(!0))}),Bt()()(),It(4,`button`,27),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.showError.set(!0))}),Co(5,`Validate name`),Bt(),It(6,`output`),Co(7),Bt()()}if(o&2){let e=ur();jt(),vo(`required`,!0)(`error`,e.fieldError()),jt(2),vo(`value`,e.fieldValue()),Kt(`aria-invalid`,!!e.fieldError()),jt(4),hi(`Value: `,e.fieldValue()||`empty`)}}function Be(o,c){if(o&1&&(It(0,`div`,15)(1,`bx-input-field`,41),yx(),Bt(),It(2,`bx-input-field`,42),yx(),Bt(),It(3,`bx-input-field`,43),yx(),Bt(),It(4,`output`),Co(5),Bt()()),o&2){let e=ur();jt(),vo(`errorMessages`,gk(9,Me))(`formControl`,e.name),Cx(),jt(),vo(`errorMessages`,gk(10,Te))(`formControl`,e.email),Cx(),jt(),vo(`min`,1)(`max`,20)(`formControl`,e.quantity),Cx(),jt(2),ow(``,e.name.value,` · `,e.quantity.value,` members`)}}function Fe(o,c){if(o&1){let e=kT();It(0,`fieldset`,14)(1,`legend`),Co(2,`Notification frequency`),Bt(),It(3,`bx-radio`,44),yx(),Bt(),It(4,`bx-radio`,45),yx(),Bt(),It(5,`bx-radio`,46),yx(),Bt(),It(6,`output`),Co(7),Bt(),It(8,`button`,28),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.frequency.reset())}),Co(9,`Reset frequency`),Bt()()}if(o&2){let e=ur();jt(3),vo(`formControl`,e.frequency),Cx(),jt(),vo(`formControl`,e.frequency),Cx(),jt(),vo(`formControl`,e.frequency),Cx(),jt(2),hi(`Selected: `,e.frequency.value)}}function je(o,c){if(o&1&&(It(0,`li`),Co(1),Bt()),o&2){let e=c.$implicit;jt(),Nc(e)}}function Re(o,c){o&1&&(It(0,`li`),Co(1,`No components match your search.`),Bt())}function ze(o,c){if(o&1){let e=kT();It(0,`div`,15)(1,`bx-search-input`,47),yx(),it$1(`search`,function(t){Uv(e);let C=ur();return $v(C.searchTerm.set(t))}),Bt(),It(2,`ul`,48),Cp(3,je,2,1,`li`,null,_T,!1,Re,2,0,`li`),Bt(),It(6,`output`),Co(7),Bt()()}if(o&2){let e=ur();jt(),vo(`formControl`,e.query),Cx(),jt(2),wp(e.searchResults()),jt(4),hi(``,e.searchResults().length,` results`)}}function Ae(o,c){if(o&1&&(It(0,`div`,15)(1,`bx-select`,49),yx(),Bt(),It(2,`output`),Co(3),Bt()()),o&2){let e=ur();jt(),vo(`options`,e.options)(`isSearchable`,!0)(`formControl`,e.destination),Cx(),jt(2),hi(`Selected: `,e.destination.value)}}function Le(o,c){if(o&1){let e=kT();It(0,`div`,15)(1,`label`,50),Co(2,`Volume`),Bt(),It(3,`input`,51),yx(),Bt(),It(4,`output`),Co(5),Bt(),It(6,`button`,28),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.volume.setValue(50))}),Co(7,`Reset volume`),Bt(),It(8,`label`,52),Co(9,`Unavailable range`),Bt(),fi(10,`input`,53),Bt()}if(o&2){let e=ur();jt(3),vo(`formControl`,e.volume),Cx(),jt(2),hi(``,e.volume.value,`%`)}}function Ue(o,c){if(o&1&&(It(0,`div`,14)(1,`bx-slide-toggle`,54),yx(),Bt(),It(2,`bx-slide-toggle`,37),yx(),Bt(),It(3,`output`),Co(4),Bt()()),o&2){let e=ur();jt(),vo(`formControl`,e.enabled),Cx(),jt(),vo(`formControl`,e.disabledCheck),Cx(),jt(2),hi(`Notifications are `,e.enabled.value?`enabled`:`disabled`,`.`)}}function He(o,c){if(o&1&&(It(0,`bx-error`,57),Co(1),Bt()),o&2){let e=ur(2);jt(),Nc(e.fieldError())}}function We(o,c){if(o&1){let e=kT();It(0,`div`,15)(1,`bx-form-field`,55)(2,`span`,39)(3,`input`,56),it$1(`input`,function(t){Uv(e);let C=ur();return $v(C.updateField(t))})(`blur`,function(){Uv(e);let t=ur();return $v(t.showError.set(!0))}),Bt()(),lr(4,He,2,1,`bx-error`,57),Bt(),It(5,`button`,27),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.showError.set(!0))}),Co(6,`Validate reference`),Bt()()}if(o&2){let e=ur();jt(3),vo(`value`,e.fieldValue()),Kt(`aria-invalid`,!!e.fieldError())(`aria-describedby`,e.fieldError()?`custom-error`:null),jt(),cr(e.fieldError()?4:-1)}}function Qe(o,c){if(o&1){let e=kT();It(0,`bx-menu`,16)(1,`bx-menu-item`,58),it$1(`action`,function(){Uv(e);let t=ur();return $v(t.activate(`Project duplicated`))}),Bt(),It(2,`bx-menu-item`,59),it$1(`action`,function(){Uv(e);let t=ur();return $v(t.activate(`Project archived`))}),Bt(),fi(3,`bx-menu-item`,60),Bt()}o&2&&(jt(3),vo(`disabled`,!0))}function $e(o,c){if(o&1){let e=kT();It(0,`bx-menu`,16)(1,`bx-menu-item`,61),it$1(`action`,function(){Uv(e);let t=ur();return $v(t.activate(`Copy link`))}),Bt(),It(2,`bx-menu-item`,62),it$1(`action`,function(){Uv(e);let t=ur();return $v(t.activate(`Open settings`))}),Bt(),It(3,`bx-menu-item`,63),it$1(`action`,function(){Uv(e);let t=ur();return $v(t.activate(`Delete requested`))}),Bt(),fi(4,`bx-menu-item`,60),Bt()}o&2&&(jt(3),vo(`danger`,!0),jt(),vo(`disabled`,!0))}function Xe(o,c){o&1&&(It(0,`div`,14),fi(1,`bx-tooltip`,64),It(2,`p`),Co(3,`Standalone tooltip content. Use the trigger directive for positioned help.`),Bt(),It(4,`a`,65),Co(5,`Try the tooltip trigger`),Bt()())}function Ye(o,c){if(o&1){let e=kT();It(0,`div`,17)(1,`button`,66),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.activate(`Saved`))}),Co(2,`Hover or focus for help`),Bt(),It(3,`button`,67),fi(4,`bx-icon`,68),Bt()()}}function Ke(o,c){if(o&1){let e=kT();It(0,`bx-menu`)(1,`bx-menu-item`,71),it$1(`action`,function(){Uv(e),ur();let t=LT(2);return ur().activate(`Project duplicated`),$v(t.close())}),Bt(),It(2,`bx-menu-item`,72),it$1(`action`,function(){Uv(e),ur();let t=LT(2);return ur().activate(`Project archived`),$v(t.close())}),Bt(),It(3,`bx-menu-item`,73),it$1(`action`,function(){Uv(e),ur();let t=LT(2);return ur().activate(`Delete requested`),$v(t.close())}),Bt()()}o&2&&(jt(3),vo(`danger`,!0))}function Ge(o,c){if(o&1&&(It(0,`div`,14)(1,`button`,69,0),Co(3,`Project actions `),fi(4,`bx-icon`,70),Bt(),BC(5,Ke,4,1,`ng-template`,null,1,wk),It(7,`output`),Co(8),Bt(),It(9,`p`),Co(10,`Open, close, or reopen while the menu fades. Its contents keep their full size throughout.`),Bt()()),o&2){let e=LT(2),a=LT(6);jt(),vo(`bxDropdown`,a),jt(7),hi(`Transition: `,e.state())}}function Je(o,c){if(o&1){let e=kT();It(0,`bx-menu`)(1,`bx-menu-item`,75),it$1(`action`,function(){Uv(e);let t=ur(2);return $v(t.activate(`Selection copied`))}),Bt(),It(2,`bx-menu-item`,76),it$1(`action`,function(){Uv(e);let t=ur(2);return $v(t.activate(`Selection archived`))}),Bt()()}}function Ze(o,c){if(o&1){let e=kT();It(0,`div`,14)(1,`div`,74),Co(2,`Right-click here, or press Shift + F10.`),Bt(),It(3,`button`,27),it$1(`click`,function(t){Uv(e);let C=ur();return $v(C.openContextMenu(t))}),Co(4,`Open actions`),Bt(),BC(5,Je,3,0,`ng-template`,null,2,wk),Bt()}if(o&2){let e=LT(6);jt(),vo(`bxContextMenu`,e)}}function et(o,c){o&1&&(It(0,`div`,14),fi(1,`bx-breadcrumbs`,77),It(2,`p`),Co(3,`This trail comes from the current route metadata. Select Components to navigate back.`),Bt(),It(4,`a`,78),Co(5,`Navigate to Button`),Bt()()),o&2&&(jt(),vo(`minimumBreadcrumbs`,1))}function tt(o,c){o&1&&(It(0,`div`,14)(1,`div`,79),fi(2,`bx-icon`,80)(3,`bx-icon`,81)(4,`bx-icon`,82)(5,`bx-icon`,83)(6,`bx-icon`,84),Bt(),It(7,`a`,85),Co(8,`Browse the searchable icon catalog`),Bt()()),o&2&&(jt(2),vo(`decorative`,!1))}function nt(o,c){if(o&1){let e=kT();It(0,`bx-modal-banner`,88),it$1(`close`,function(){Uv(e);let t=ur(2);return t.bannerVisible.set(!1),$v(t.activate(`Banner dismissed`))}),Bt()}o&2&&vo(`header`,vk(3,Oe,gk(2,Pe)))(`showCloseButton`,!0)}function it(o,c){if(o&1){let e=kT();It(0,`button`,27),it$1(`click`,function(){Uv(e);let t=ur(2);return $v(t.bannerVisible.set(!0))}),Co(1,`Restore banner`),Bt()}}function ot(o,c){if(o&1){let e=kT();It(0,`div`,18),lr(1,nt,1,5,`bx-modal-banner`,86)(2,it,2,0,`button`,87),It(3,`button`,26),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.openModal())}),Co(4,`See banner in a dialog`),Bt()()}if(o&2){let e=ur();jt(),cr(e.bannerVisible()?1:2)}}function rt(o,c){if(o&1){let e=kT();It(0,`div`,14)(1,`div`,17)(2,`button`,89),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.notify(`success`))}),Co(3,`Success`),Bt(),It(4,`button`,90),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.notify(`info`))}),Co(5,`Information`),Bt(),It(6,`button`,31),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.notify(`warn`))}),Co(7,`Warning`),Bt(),It(8,`button`,32),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.notify(`danger`))}),Co(9,`Error`),Bt()(),It(10,`p`),Co(11,`The toast host manages the progress indicator, dismiss action, pause and cleanup.`),Bt(),It(12,`a`,91),Co(13,`Open the full toast configurator`),Bt()()}}function at(o,c){if(o&1){let e=kT();It(0,`div`,14)(1,`div`,17)(2,`button`,30),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.notify(`success`))}),Co(3,`Show success`),Bt(),It(4,`button`,90),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.notify(`info`))}),Co(5,`Show information`),Bt(),It(6,`button`,31),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.notify(`warn`))}),Co(7,`Show warning`),Bt(),It(8,`button`,32),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.notify(`danger`))}),Co(9,`Show error`),Bt()(),It(10,`p`),Co(11,`Semantic colors remain tied to the active Blocks palette.`),Bt()()}}function lt(o,c){if(o&1){let e=kT();It(0,`section`,19),fi(1,`bx-icon`,92),It(2,`h3`),Co(3,`A custom Blocks surface`),Bt(),It(4,`p`),Co(5,`Material, blur, tint, lighting and motion follow the same global configuration as the controls around it.`),Bt(),It(6,`button`,27),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.activate(`Custom surface action`))}),Co(7,`Try an action`),Bt()()}}function ct(o,c){if(o&1){let e=kT();It(0,`button`,27),it$1(`click`,function(){Uv(e);let t=ur(2);return $v(t.openModal(`left`))}),Co(1,`Open on the left`),Bt()}}function mt(o,c){if(o&1){let e=kT();It(0,`div`,14)(1,`div`,17)(2,`button`,26),it$1(`click`,function(){Uv(e);let t=ur();return $v(t.openModal())}),Co(3),Bt(),lr(4,ct,2,0,`button`,87),Bt(),It(5,`p`),Co(6,`Try editing, saving, pressing Escape, and dismissing through the backdrop. This is the actual service-created component.`),Bt(),It(7,`a`,93),Co(8,`Open the full modal configurator`),Bt()()}if(o&2){let e=ur();jt(3),hi(`Open `,e.entry().title.toLowerCase()),jt(),cr(e.entry().id===`modal-side`?4:-1)}}var L=class o extends Ze$1{name=new wE(`Blocks workspace`,{nonNullable:!0});confirm(){this.modal.close(`confirm`,this.name.value)}static ɵfac=(()=>{let c;return function(a){return(c||(c=Vn(o)))(a||o)}})();static ɵcmp=gt({type:o,selectors:[[`app-component-dialog`]],features:[rt$1],decls:6,vars:2,consts:[[4,`appModalHeader`],[1,`dialog-body`],[`label`,`Project name`,3,`formControl`],[`class`,`dialog-actions`,4,`appModalFooter`],[1,`dialog-actions`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(e,a){e&1&&(BC(0,De,3,1,`div`,0),It(1,`div`,1)(2,`p`),Co(3),Bt(),It(4,`bx-input-field`,2),yx(),Bt()(),BC(5,Ve,5,0,`div`,3)),e&2&&(jt(3),Nc(a.data.description),jt(),vo(`formControl`,a.name),Cx())},dependencies:[S$1,j,c5,i5,fN,en,nn],styles:[`
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
}`]})};var ke=class o{route=p(yn);routeData=j8(this.route.data,{initialValue:this.route.snapshot.data});modals=p(fe);toasts=p(ft);entry=W(()=>e.find(c=>c.id===this.routeData().componentId)??e[0]);count=S(0);status=S(`Ready to try.`);fieldValue=S(``);showError=S(!1);fieldError=W(()=>this.showError()&&this.fieldValue().trim().length<3?`Enter at least three characters.`:void 0);name=new wE(`Blocks workspace`,{nonNullable:!0,validators:wa.required});email=new wE(``,{nonNullable:!0,validators:wa.email});volume=new wE(50,{nonNullable:!0});quantity=new wE(3,{nonNullable:!0});checked=new wE(!0,{nonNullable:!0});secondChecked=new wE(!1,{nonNullable:!0});disabledCheck=new wE({value:!1,disabled:!0},{nonNullable:!0});frequency=new wE(`weekly`,{nonNullable:!0});query=new wE(``,{nonNullable:!0});destination=new wE(`skopje`,{nonNullable:!0});enabled=new wE(!0,{nonNullable:!0});bannerVisible=S(!0);options=[{label:`Skopje`,value:`skopje`},{label:`Ohrid`,value:`ohrid`},{label:`Bitola`,value:`bitola`},{label:`Unavailable destination`,value:`unavailable`,disabled:!0}];names=[`Button`,`Checkbox`,`Input field`,`Menu`,`Modal`,`Select`,`Toast`];searchTerm=S(``);searchResults=W(()=>this.names.filter(c=>c.toLowerCase().includes(this.searchTerm().toLowerCase())));contextMenu;activate(c){this.count.update(e=>e+1),this.status.set(`${c} \xB7 action ${this.count()}`)}updateField(c){this.fieldValue.set(c.target.value)}openContextMenu(c){c.preventDefault();let e=c.currentTarget.getBoundingClientRect();this.contextMenu?.open(new MouseEvent(`contextmenu`,{clientX:e.left+16,clientY:e.bottom+4}))}openModal(c){let e=c??(this.entry().id===`modal-side`?`right`:this.entry().id===`modal-bottom-sheet`?`bottom-sheet`:`center`);this.modals.open(L,{data:{title:this.entry().title,description:`Edit the project name. The header, content, footer, backdrop and close behavior use the existing Blocks modal composition.`},header:{text:this.entry().title},style:{layout:e,hasBackdrop:!0,animate:!0,showCloseButton:!0}}).afterClosed().subscribe(t=>this.status.set(t.state===`confirm`?`Saved: ${t.data}`:`Dialog dismissed.`))}notify(c){let e={title:c===`success`?`Settings saved`:c===`warn`?`Review needed`:c===`danger`?`Action failed`:`Workspace update`,message:`This notification follows the application theme and appearance settings.`,durationInMs:4500};switch(c){case`success`:this.toasts.queueSuccess(e);break;case`info`:this.toasts.queueInfo(e);break;case`warn`:this.toasts.queueWarning(e);break;case`danger`:this.toasts.queueDanger(e)}this.status.set(`${c} notification queued.`)}static ɵfac=function(e){return new(e||o)};static ɵcmp=gt({type:o,selectors:[[`app-component-demo`]],viewQuery:function(e,a){if(e&1&&_p(c_,5),e&2){let t;Ac(t=Rc())&&(a.contextMenu=t.first)}},decls:56,vars:9,consts:[[`dropdown`,`bxDropdown`],[`dropdownActions`,``],[`contextActions`,``],[1,`component-page`],[1,`component-header`],[`routerLink`,`/components`,1,`back-link`],[1,`eyebrow`],[1,`description`],[1,`component-meta`],[`routerLink`,`/appearance`],[`aria-labelledby`,`preview-heading`,1,`demo-section`],[1,`section-heading`],[`id`,`preview-heading`],[`bxSurface`,``,1,`demo-stage`],[1,`demo-stack`],[1,`demo-stack`,`control-width`],[1,`menu-preview`],[1,`demo-row`],[1,`demo-stack`,`banner-preview`],[`bxSurface`,``,1,`custom-surface`],[`role`,`status`,`aria-live`,`polite`,1,`action-status`],[`aria-labelledby`,`usage-heading`,1,`usage-section`],[`id`,`usage-heading`],[3,`textContent`],[`aria-label`,`Component documentation`,1,`documentation-section`],[3,`path`],[`bx-button`,``,`variant`,`filled`,3,`click`],[`bx-button`,``,`variant`,`tonal`,3,`click`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`disabled`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`bx-button`,``,`variant`,`fab`,`aria-label`,`Add item`,3,`click`],[`name`,`plus`],[`label`,`Receive product updates`,3,`formControl`],[`label`,`Include preview features`,3,`formControl`],[`label`,`Unavailable setting`,3,`formControl`],[`label`,`Project name`,`forId`,`field-preview`,3,`required`,`error`],[`bxSurface`,``,1,`native-control-surface`],[`id`,`field-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`label`,`Project name`,3,`errorMessages`,`formControl`],[`label`,`Email address`,`type`,`email`,3,`errorMessages`,`formControl`],[`label`,`Team members`,`type`,`number`,3,`min`,`max`,`formControl`],[`label`,`Daily summary`,`name`,`frequency-demo`,`value`,`daily`,3,`formControl`],[`label`,`Weekly summary`,`name`,`frequency-demo`,`value`,`weekly`,3,`formControl`],[`label`,`Only important updates`,`name`,`frequency-demo`,`value`,`important`,3,`formControl`],[`label`,`Find a component`,`placeholder`,`Try menu`,3,`search`,`formControl`],[1,`search-results`],[`label`,`Destination`,3,`options`,`isSearchable`,`formControl`],[`for`,`volume-demo`],[`bxSlider`,``,`id`,`volume-demo`,`type`,`range`,`min`,`0`,`max`,`100`,3,`formControl`],[`for`,`disabled-volume`],[`bxSlider`,``,`id`,`disabled-volume`,`type`,`range`,`value`,`30`,`disabled`,``],[`label`,`Enable notifications`,3,`formControl`],[`label`,`Reference`,`forId`,`error-preview`],[`id`,`error-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`id`,`custom-error`],[`label`,`Duplicate project`,`icon`,`copy`,3,`action`],[`label`,`Archive project`,`icon`,`archive`,3,`action`],[`label`,`Unavailable action`,3,`disabled`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Open settings`,`icon`,`settings`,`endIcon`,`chevron-right`,3,`action`],[`label`,`Delete project`,`icon`,`trash-2`,3,`action`,`danger`],[`text`,`Your changes are saved automatically.`],[`routerLink`,`/components/tooltip-directive`],[`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`Saves the current project`,`placement`,`top`,3,`click`],[`bx-button`,``,`variant`,`icon`,`aria-label`,`More information`,`bxTooltip`,`Appearance settings apply to all components`,`placement`,`bottom`],[`name`,`info`],[`bx-button`,``,`variant`,`filled`,`bxTransition`,`fade`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[`tabindex`,`0`,1,`context-target`,3,`bxContextMenu`],[`label`,`Copy selection`,`icon`,`copy`,3,`action`],[`label`,`Archive selection`,`icon`,`archive`,3,`action`],[3,`minimumBreadcrumbs`],[`routerLink`,`/components/button`],[1,`demo-row`,`icon-row`],[`name`,`sparkles`,`size`,`32`,`color`,`text-primary`,`ariaLabel`,`Highlights`,3,`decorative`],[`name`,`check-circle`,`size`,`32`,`color`,`text-success`],[`name`,`info`,`size`,`32`,`color`,`text-info`,`bgColor`,`auto`],[`name`,`triangle-alert`,`size`,`32`,`color`,`text-warn`],[`name`,`heart`,`size`,`40`,`color`,`text-danger`],[`routerLink`,`/icon-catalog`],[3,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`],[3,`close`,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`routerLink`,`/toastr`],[`name`,`layers`,`size`,`28`],[`routerLink`,`/modal`]],template:function(e,a){if(e&1&&(It(0,`article`,3)(1,`header`,4)(2,`a`,5),Co(3,`All components`),Bt(),It(4,`p`,6),Co(5),Bt(),It(6,`h1`),Co(7),Bt(),It(8,`p`,7),Co(9),Bt(),It(10,`div`,8)(11,`code`),Co(12),Bt(),It(13,`a`,9),Co(14,`Configure appearance globally`),Bt()()(),It(15,`section`,10)(16,`div`,11)(17,`h2`,12),Co(18,`Interactive example`),Bt(),It(19,`span`),Co(20,`Uses your active theme`),Bt()(),It(21,`div`,13),lr(22,Ne,19,1,`div`,14)(23,Ie,6,5,`div`,14)(24,qe,8,5,`div`,15)(25,Be,6,11,`div`,15)(26,Fe,10,4,`fieldset`,14)(27,ze,8,3,`div`,15)(28,Ae,4,4,`div`,15)(29,Le,11,2,`div`,15)(30,Ue,5,3,`div`,14)(31,We,7,4,`div`,15)(32,Qe,4,1,`bx-menu`,16)(33,$e,5,2,`bx-menu`,16)(34,Xe,6,0,`div`,14)(35,Ye,5,0,`div`,17)(36,Ge,11,2,`div`,14)(37,Ze,7,1,`div`,14)(38,et,6,1,`div`,14)(39,tt,9,1,`div`,14)(40,ot,5,1,`div`,18)(41,rt,14,0,`div`,14)(42,at,12,0,`div`,14)(43,lt,8,0,`section`,19)(44,mt,9,2,`div`,14),Bt(),It(45,`p`,20),Co(46),Bt()(),It(47,`section`,21)(48,`h2`,22),Co(49,`Quick usage`),Bt(),It(50,`pre`),fi(51,`code`,23),Bt(),It(52,`pre`),fi(53,`code`,23),Bt()(),It(54,`section`,24),fi(55,`app-readme`,25),Bt()()),e&2){let t;jt(5),Nc(a.entry().group),jt(2),Nc(a.entry().title),jt(2),Nc(a.entry().description),jt(3),Nc(a.entry().selector),jt(10),cr((t=a.entry().id)===`button`?22:t===`checkbox`?23:t===`form-field`?24:t===`input-field`?25:t===`radio`?26:t===`search-input`?27:t===`select`?28:t===`slider`?29:t===`slide-toggle`?30:t===`error`?31:t===`menu`?32:t===`menu-item`?33:t===`tooltip`?34:t===`tooltip-directive`?35:t===`dropdown`?36:t===`context-menu`?37:t===`breadcrumbs`?38:t===`icon`?39:t===`modal-banner`?40:t===`toast-core`?41:t===`simple-toast`?42:t===`surface`?43:44),jt(24),Nc(a.status()),jt(5),vo(`textContent`,`import { `+a.entry().symbol+` } from '`+a.entry().package+`';`),jt(2),vo(`textContent`,a.entry().example),jt(2),vo(`path`,a.entry().readme)}},dependencies:[_u,c5,nE,uN,i5,fN,S$1,L$1,O,j,K,te,le,J,Z,h,o_,s_,rd,l_,c_,a_,X,nd,Mr,V,A],styles:[`
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
}`]})};export{ke as ComponentDemo};