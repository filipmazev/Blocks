import{$n as tE,$t as fi,Bn as pk,Bt as bp,Cn as lr,D as F8,Dn as n5,Dt as Zt,E as Eu,En as mt$1,F as It,Jn as rt$1,Mt as a5,Nt as a_,On as nd,Pn as o_,Rn as p,Rt as bk,Sn as l_,T as Ep,Tn as mk,Wt as cr,Y as OT,Zn as s_,_t as Vn,an as hi,ar as uN,at as S,bt as W,cr as vo,dn as iw,er as td,f as Co,gn as jt,i as Ac,it as Rc,j as Hv,l as CE,ln as i_,p as Cp,pn as jC,pr as xT,pt as Uv,q as Mr,rn as gx,sr as ur,u as Ca,un as it$1,vn as kc,vt as Vt,xn as lN,xr as yx,y as DT,yr as yn}from"./chunk-DtVVo_Bz.js";import{c as K,d as h,f as te,i as j,l as Z,n as le,o as e,p as X,r as L$1,s as J,t as S$1,u as O}from"./main-IWM4S6MK.js";import{t as A}from"./chunk-BYTtg_hc.js";import{n as ft}from"./chunk-liLD4K0a.js";import{a as nn,i as fe,n as Ze$1,r as en,t as V}from"./chunk-B2tj-Sxq.js";function De(o,c){if(o&1&&(It(0,`div`)(1,`strong`),Co(2),jt()()),o&2){let e=ur();Vt(2),Rc(e.data.title)}}function Ve(o,c){if(o&1){let e=xT();It(0,`div`,4)(1,`button`,5),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.close())}),Co(2,`Cancel`),jt(),It(3,`button`,6),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.confirm())}),Co(4,`Save changes`),jt()()}}var Me=()=>({required:`Enter a project name.`});var Te=()=>({email:`Enter a valid email address.`});var Pe=()=>({name:`settings`});var Oe=o=>({text:`Project settings`,icon:o});function Ne(o,c){if(o&1){let e=xT();It(0,`div`,14)(1,`div`,17)(2,`button`,26),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.activate(`Primary action`))}),Co(3,`Primary action`),jt(),It(4,`button`,27),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.activate(`Tonal action`))}),Co(5,`Tonal`),jt(),It(6,`button`,28),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.activate(`Text action`))}),Co(7,`Text`),jt(),It(8,`button`,29),Co(9,`Disabled`),jt()(),It(10,`div`,17)(11,`button`,30),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.activate(`Success`))}),Co(12,`Success`),jt(),It(13,`button`,31),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.activate(`Warning`))}),Co(14,`Warning`),jt(),It(15,`button`,32),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.activate(`Delete`))}),Co(16,`Delete`),jt(),It(17,`button`,33),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.activate(`Add item`))}),fi(18,`bx-icon`,34),jt()()()}o&2&&(Vt(8),vo(`disabled`,!0))}function Ie(o,c){if(o&1&&(It(0,`div`,14)(1,`bx-checkbox`,35),gx(),jt(),It(2,`bx-checkbox`,36),gx(),jt(),It(3,`bx-checkbox`,37),gx(),jt(),It(4,`output`),Co(5),jt()()),o&2){let e=ur();Vt(),vo(`formControl`,e.checked),yx(),Vt(),vo(`formControl`,e.secondChecked),yx(),Vt(),vo(`formControl`,e.disabledCheck),yx(),Vt(2),iw(`Updates: `,e.checked.value?`on`:`off`,` · Previews: `,e.secondChecked.value?`on`:`off`)}}function qe(o,c){if(o&1){let e=xT();It(0,`div`,15)(1,`bx-form-field`,38)(2,`span`,39)(3,`input`,40),it$1(`input`,function(t){Hv(e);let C=ur();return Uv(C.updateField(t))})(`blur`,function(){Hv(e);let t=ur();return Uv(t.showError.set(!0))}),jt()()(),It(4,`button`,27),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.showError.set(!0))}),Co(5,`Validate name`),jt(),It(6,`output`),Co(7),jt()()}if(o&2){let e=ur();Vt(),vo(`required`,!0)(`error`,e.fieldError()),Vt(2),vo(`value`,e.fieldValue()),Zt(`aria-invalid`,!!e.fieldError()),Vt(4),hi(`Value: `,e.fieldValue()||`empty`)}}function Be(o,c){if(o&1&&(It(0,`div`,15)(1,`bx-input-field`,41),gx(),jt(),It(2,`bx-input-field`,42),gx(),jt(),It(3,`bx-input-field`,43),gx(),jt(),It(4,`output`),Co(5),jt()()),o&2){let e=ur();Vt(),vo(`errorMessages`,pk(9,Me))(`formControl`,e.name),yx(),Vt(),vo(`errorMessages`,pk(10,Te))(`formControl`,e.email),yx(),Vt(),vo(`min`,1)(`max`,20)(`formControl`,e.quantity),yx(),Vt(2),iw(``,e.name.value,` · `,e.quantity.value,` members`)}}function Fe(o,c){if(o&1){let e=xT();It(0,`fieldset`,14)(1,`legend`),Co(2,`Notification frequency`),jt(),It(3,`bx-radio`,44),gx(),jt(),It(4,`bx-radio`,45),gx(),jt(),It(5,`bx-radio`,46),gx(),jt(),It(6,`output`),Co(7),jt(),It(8,`button`,28),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.frequency.reset())}),Co(9,`Reset frequency`),jt()()}if(o&2){let e=ur();Vt(3),vo(`formControl`,e.frequency),yx(),Vt(),vo(`formControl`,e.frequency),yx(),Vt(),vo(`formControl`,e.frequency),yx(),Vt(2),hi(`Selected: `,e.frequency.value)}}function je(o,c){if(o&1&&(It(0,`li`),Co(1),jt()),o&2){let e=c.$implicit;Vt(),Rc(e)}}function Re(o,c){o&1&&(It(0,`li`),Co(1,`No components match your search.`),jt())}function ze(o,c){if(o&1){let e=xT();It(0,`div`,15)(1,`bx-search-input`,47),gx(),it$1(`search`,function(t){Hv(e);let C=ur();return Uv(C.searchTerm.set(t))}),jt(),It(2,`ul`,48),bp(3,je,2,1,`li`,null,DT,!1,Re,2,0,`li`),jt(),It(6,`output`),Co(7),jt()()}if(o&2){let e=ur();Vt(),vo(`formControl`,e.query),yx(),Vt(2),Cp(e.searchResults()),Vt(4),hi(``,e.searchResults().length,` results`)}}function Ae(o,c){if(o&1&&(It(0,`div`,15)(1,`bx-select`,49),gx(),jt(),It(2,`output`),Co(3),jt()()),o&2){let e=ur();Vt(),vo(`options`,e.options)(`isSearchable`,!0)(`formControl`,e.destination),yx(),Vt(2),hi(`Selected: `,e.destination.value)}}function Le(o,c){if(o&1){let e=xT();It(0,`div`,15)(1,`label`,50),Co(2,`Volume`),jt(),It(3,`input`,51),gx(),jt(),It(4,`output`),Co(5),jt(),It(6,`button`,28),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.volume.setValue(50))}),Co(7,`Reset volume`),jt(),It(8,`label`,52),Co(9,`Unavailable range`),jt(),fi(10,`input`,53),jt()}if(o&2){let e=ur();Vt(3),vo(`formControl`,e.volume),yx(),Vt(2),hi(``,e.volume.value,`%`)}}function Ue(o,c){if(o&1&&(It(0,`div`,14)(1,`bx-slide-toggle`,54),gx(),jt(),It(2,`bx-slide-toggle`,37),gx(),jt(),It(3,`output`),Co(4),jt()()),o&2){let e=ur();Vt(),vo(`formControl`,e.enabled),yx(),Vt(),vo(`formControl`,e.disabledCheck),yx(),Vt(2),hi(`Notifications are `,e.enabled.value?`enabled`:`disabled`,`.`)}}function He(o,c){if(o&1&&(It(0,`bx-error`,57),Co(1),jt()),o&2){let e=ur(2);Vt(),Rc(e.fieldError())}}function We(o,c){if(o&1){let e=xT();It(0,`div`,15)(1,`bx-form-field`,55)(2,`span`,39)(3,`input`,56),it$1(`input`,function(t){Hv(e);let C=ur();return Uv(C.updateField(t))})(`blur`,function(){Hv(e);let t=ur();return Uv(t.showError.set(!0))}),jt()(),lr(4,He,2,1,`bx-error`,57),jt(),It(5,`button`,27),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.showError.set(!0))}),Co(6,`Validate reference`),jt()()}if(o&2){let e=ur();Vt(3),vo(`value`,e.fieldValue()),Zt(`aria-invalid`,!!e.fieldError())(`aria-describedby`,e.fieldError()?`custom-error`:null),Vt(),cr(e.fieldError()?4:-1)}}function Qe(o,c){if(o&1){let e=xT();It(0,`bx-menu`,16)(1,`bx-menu-item`,58),it$1(`action`,function(){Hv(e);let t=ur();return Uv(t.activate(`Project duplicated`))}),jt(),It(2,`bx-menu-item`,59),it$1(`action`,function(){Hv(e);let t=ur();return Uv(t.activate(`Project archived`))}),jt(),fi(3,`bx-menu-item`,60),jt()}o&2&&(Vt(3),vo(`disabled`,!0))}function $e(o,c){if(o&1){let e=xT();It(0,`bx-menu`,16)(1,`bx-menu-item`,61),it$1(`action`,function(){Hv(e);let t=ur();return Uv(t.activate(`Copy link`))}),jt(),It(2,`bx-menu-item`,62),it$1(`action`,function(){Hv(e);let t=ur();return Uv(t.activate(`Open settings`))}),jt(),It(3,`bx-menu-item`,63),it$1(`action`,function(){Hv(e);let t=ur();return Uv(t.activate(`Delete requested`))}),jt(),fi(4,`bx-menu-item`,60),jt()}o&2&&(Vt(3),vo(`danger`,!0),Vt(),vo(`disabled`,!0))}function Xe(o,c){o&1&&(It(0,`div`,14),fi(1,`bx-tooltip`,64),It(2,`p`),Co(3,`Standalone tooltip content. Use the trigger directive for positioned help.`),jt(),It(4,`a`,65),Co(5,`Try the tooltip trigger`),jt()())}function Ye(o,c){if(o&1){let e=xT();It(0,`div`,17)(1,`button`,66),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.activate(`Saved`))}),Co(2,`Hover or focus for help`),jt(),It(3,`button`,67),fi(4,`bx-icon`,68),jt()()}}function Ke(o,c){if(o&1){let e=xT();It(0,`bx-menu`)(1,`bx-menu-item`,71),it$1(`action`,function(){Hv(e),ur();let t=OT(2);return ur().activate(`Project duplicated`),Uv(t.close())}),jt(),It(2,`bx-menu-item`,72),it$1(`action`,function(){Hv(e),ur();let t=OT(2);return ur().activate(`Project archived`),Uv(t.close())}),jt(),It(3,`bx-menu-item`,73),it$1(`action`,function(){Hv(e),ur();let t=OT(2);return ur().activate(`Delete requested`),Uv(t.close())}),jt()()}o&2&&(Vt(3),vo(`danger`,!0))}function Ge(o,c){if(o&1&&(It(0,`div`,14)(1,`button`,69,0),Co(3,`Project actions `),fi(4,`bx-icon`,70),jt(),jC(5,Ke,4,1,`ng-template`,null,1,bk),It(7,`output`),Co(8),jt(),It(9,`p`),Co(10,`Open, close, or reopen while the menu fades. Its contents keep their full size throughout.`),jt()()),o&2){let e=OT(2),a=OT(6);Vt(),vo(`bxDropdown`,a),Vt(7),hi(`Transition: `,e.state())}}function Je(o,c){if(o&1){let e=xT();It(0,`bx-menu`)(1,`bx-menu-item`,75),it$1(`action`,function(){Hv(e);let t=ur(2);return Uv(t.activate(`Selection copied`))}),jt(),It(2,`bx-menu-item`,76),it$1(`action`,function(){Hv(e);let t=ur(2);return Uv(t.activate(`Selection archived`))}),jt()()}}function Ze(o,c){if(o&1){let e=xT();It(0,`div`,14)(1,`div`,74),Co(2,`Right-click here, or press Shift + F10.`),jt(),It(3,`button`,27),it$1(`click`,function(t){Hv(e);let C=ur();return Uv(C.openContextMenu(t))}),Co(4,`Open actions`),jt(),jC(5,Je,3,0,`ng-template`,null,2,bk),jt()}if(o&2){let e=OT(6);Vt(),vo(`bxContextMenu`,e)}}function et(o,c){o&1&&(It(0,`div`,14),fi(1,`bx-breadcrumbs`,77),It(2,`p`),Co(3,`This trail comes from the current route metadata. Select Components to navigate back.`),jt(),It(4,`a`,78),Co(5,`Navigate to Button`),jt()()),o&2&&(Vt(),vo(`minimumBreadcrumbs`,1))}function tt(o,c){o&1&&(It(0,`div`,14)(1,`div`,79),fi(2,`bx-icon`,80)(3,`bx-icon`,81)(4,`bx-icon`,82)(5,`bx-icon`,83)(6,`bx-icon`,84),jt(),It(7,`a`,85),Co(8,`Browse the searchable icon catalog`),jt()()),o&2&&(Vt(2),vo(`decorative`,!1))}function nt(o,c){if(o&1){let e=xT();It(0,`bx-modal-banner`,88),it$1(`close`,function(){Hv(e);let t=ur(2);return t.bannerVisible.set(!1),Uv(t.activate(`Banner dismissed`))}),jt()}o&2&&vo(`header`,mk(3,Oe,pk(2,Pe)))(`showCloseButton`,!0)}function it(o,c){if(o&1){let e=xT();It(0,`button`,27),it$1(`click`,function(){Hv(e);let t=ur(2);return Uv(t.bannerVisible.set(!0))}),Co(1,`Restore banner`),jt()}}function ot(o,c){if(o&1){let e=xT();It(0,`div`,18),lr(1,nt,1,5,`bx-modal-banner`,86)(2,it,2,0,`button`,87),It(3,`button`,26),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.openModal())}),Co(4,`See banner in a dialog`),jt()()}if(o&2){let e=ur();Vt(),cr(e.bannerVisible()?1:2)}}function rt(o,c){if(o&1){let e=xT();It(0,`div`,14)(1,`div`,17)(2,`button`,89),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.notify(`success`))}),Co(3,`Success`),jt(),It(4,`button`,90),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.notify(`info`))}),Co(5,`Information`),jt(),It(6,`button`,31),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.notify(`warn`))}),Co(7,`Warning`),jt(),It(8,`button`,32),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.notify(`danger`))}),Co(9,`Error`),jt()(),It(10,`p`),Co(11,`The toast host manages the progress indicator, dismiss action, pause and cleanup.`),jt(),It(12,`a`,91),Co(13,`Open the full toast configurator`),jt()()}}function at(o,c){if(o&1){let e=xT();It(0,`div`,14)(1,`div`,17)(2,`button`,30),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.notify(`success`))}),Co(3,`Show success`),jt(),It(4,`button`,90),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.notify(`info`))}),Co(5,`Show information`),jt(),It(6,`button`,31),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.notify(`warn`))}),Co(7,`Show warning`),jt(),It(8,`button`,32),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.notify(`danger`))}),Co(9,`Show error`),jt()(),It(10,`p`),Co(11,`Semantic colors remain tied to the active Blocks palette.`),jt()()}}function lt(o,c){if(o&1){let e=xT();It(0,`section`,19),fi(1,`bx-icon`,92),It(2,`h3`),Co(3,`A custom Blocks surface`),jt(),It(4,`p`),Co(5,`Material, blur, tint, lighting and motion follow the same global configuration as the controls around it.`),jt(),It(6,`button`,27),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.activate(`Custom surface action`))}),Co(7,`Try an action`),jt()()}}function ct(o,c){if(o&1){let e=xT();It(0,`button`,27),it$1(`click`,function(){Hv(e);let t=ur(2);return Uv(t.openModal(`left`))}),Co(1,`Open on the left`),jt()}}function mt(o,c){if(o&1){let e=xT();It(0,`div`,14)(1,`div`,17)(2,`button`,26),it$1(`click`,function(){Hv(e);let t=ur();return Uv(t.openModal())}),Co(3),jt(),lr(4,ct,2,0,`button`,87),jt(),It(5,`p`),Co(6,`Try editing, saving, pressing Escape, and dismissing through the backdrop. This is the actual service-created component.`),jt(),It(7,`a`,93),Co(8,`Open the full modal configurator`),jt()()}if(o&2){let e=ur();Vt(3),hi(`Open `,e.entry().title.toLowerCase()),Vt(),cr(e.entry().id===`modal-side`?4:-1)}}var L=class o extends Ze$1{name=new CE(`Blocks workspace`,{nonNullable:!0});confirm(){this.modal.close(`confirm`,this.name.value)}static ɵfac=(()=>{let c;return function(a){return(c||(c=Vn(o)))(a||o)}})();static ɵcmp=mt$1({type:o,selectors:[[`app-component-dialog`]],features:[rt$1],decls:6,vars:2,consts:[[4,`appModalHeader`],[1,`dialog-body`],[`label`,`Project name`,3,`formControl`],[`class`,`dialog-actions`,4,`appModalFooter`],[1,`dialog-actions`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(e,a){e&1&&(jC(0,De,3,1,`div`,0),It(1,`div`,1)(2,`p`),Co(3),jt(),It(4,`bx-input-field`,2),gx(),jt()(),jC(5,Ve,5,0,`div`,3)),e&2&&(Vt(3),Rc(a.data.description),Vt(),vo(`formControl`,a.name),yx())},dependencies:[S$1,j,a5,n5,uN,en,nn],styles:[`
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
}`]})};var ke=class o{route=p(yn);routeData=F8(this.route.data,{initialValue:this.route.snapshot.data});modals=p(fe);toasts=p(ft);entry=W(()=>e.find(c=>c.id===this.routeData().componentId)??e[0]);count=S(0);status=S(`Ready to try.`);fieldValue=S(``);showError=S(!1);fieldError=W(()=>this.showError()&&this.fieldValue().trim().length<3?`Enter at least three characters.`:void 0);name=new CE(`Blocks workspace`,{nonNullable:!0,validators:Ca.required});email=new CE(``,{nonNullable:!0,validators:Ca.email});volume=new CE(50,{nonNullable:!0});quantity=new CE(3,{nonNullable:!0});checked=new CE(!0,{nonNullable:!0});secondChecked=new CE(!1,{nonNullable:!0});disabledCheck=new CE({value:!1,disabled:!0},{nonNullable:!0});frequency=new CE(`weekly`,{nonNullable:!0});query=new CE(``,{nonNullable:!0});destination=new CE(`skopje`,{nonNullable:!0});enabled=new CE(!0,{nonNullable:!0});bannerVisible=S(!0);options=[{label:`Skopje`,value:`skopje`},{label:`Ohrid`,value:`ohrid`},{label:`Bitola`,value:`bitola`},{label:`Unavailable destination`,value:`unavailable`,disabled:!0}];names=[`Button`,`Checkbox`,`Input field`,`Menu`,`Modal`,`Select`,`Toast`];searchTerm=S(``);searchResults=W(()=>this.names.filter(c=>c.toLowerCase().includes(this.searchTerm().toLowerCase())));contextMenu;activate(c){this.count.update(e=>e+1),this.status.set(`${c} \xB7 action ${this.count()}`)}updateField(c){this.fieldValue.set(c.target.value)}openContextMenu(c){c.preventDefault();let e=c.currentTarget.getBoundingClientRect();this.contextMenu?.open(new MouseEvent(`contextmenu`,{clientX:e.left+16,clientY:e.bottom+4}))}openModal(c){let e=c??(this.entry().id===`modal-side`?`right`:this.entry().id===`modal-bottom-sheet`?`bottom-sheet`:`center`);this.modals.open(L,{data:{title:this.entry().title,description:`Edit the project name. The header, content, footer, backdrop and close behavior use the existing Blocks modal composition.`},header:{text:this.entry().title},style:{layout:e,hasBackdrop:!0,animate:!0,showCloseButton:!0}}).afterClosed().subscribe(t=>this.status.set(t.state===`confirm`?`Saved: ${t.data}`:`Dialog dismissed.`))}notify(c){let e={title:c===`success`?`Settings saved`:c===`warn`?`Review needed`:c===`danger`?`Action failed`:`Workspace update`,message:`This notification follows the application theme and appearance settings.`,durationInMs:4500};switch(c){case`success`:this.toasts.queueSuccess(e);break;case`info`:this.toasts.queueInfo(e);break;case`warn`:this.toasts.queueWarning(e);break;case`danger`:this.toasts.queueDanger(e)}this.status.set(`${c} notification queued.`)}static ɵfac=function(e){return new(e||o)};static ɵcmp=mt$1({type:o,selectors:[[`app-component-demo`]],viewQuery:function(e,a){if(e&1&&Ep(l_,5),e&2){let t;kc(t=Ac())&&(a.contextMenu=t.first)}},decls:56,vars:9,consts:[[`dropdown`,`bxDropdown`],[`dropdownActions`,``],[`contextActions`,``],[1,`component-page`],[1,`component-header`],[`routerLink`,`/components`,1,`back-link`],[1,`eyebrow`],[1,`description`],[1,`component-meta`],[`routerLink`,`/appearance`],[`aria-labelledby`,`preview-heading`,1,`demo-section`],[1,`section-heading`],[`id`,`preview-heading`],[`bxSurface`,``,1,`demo-stage`],[1,`demo-stack`],[1,`demo-stack`,`control-width`],[1,`menu-preview`],[1,`demo-row`],[1,`demo-stack`,`banner-preview`],[`bxSurface`,``,1,`custom-surface`],[`role`,`status`,`aria-live`,`polite`,1,`action-status`],[`aria-labelledby`,`usage-heading`,1,`usage-section`],[`id`,`usage-heading`],[3,`textContent`],[`aria-label`,`Component documentation`,1,`documentation-section`],[3,`path`],[`bx-button`,``,`variant`,`filled`,3,`click`],[`bx-button`,``,`variant`,`tonal`,3,`click`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`disabled`],[`bx-button`,``,`variant`,`filled`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`bx-button`,``,`variant`,`fab`,`aria-label`,`Add item`,3,`click`],[`name`,`plus`],[`label`,`Receive product updates`,3,`formControl`],[`label`,`Include preview features`,3,`formControl`],[`label`,`Unavailable setting`,3,`formControl`],[`label`,`Project name`,`forId`,`field-preview`,3,`required`,`error`],[`bxSurface`,``,1,`native-control-surface`],[`id`,`field-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`label`,`Project name`,3,`errorMessages`,`formControl`],[`label`,`Email address`,`type`,`email`,3,`errorMessages`,`formControl`],[`label`,`Team members`,`type`,`number`,3,`min`,`max`,`formControl`],[`label`,`Daily summary`,`name`,`frequency-demo`,`value`,`daily`,3,`formControl`],[`label`,`Weekly summary`,`name`,`frequency-demo`,`value`,`weekly`,3,`formControl`],[`label`,`Only important updates`,`name`,`frequency-demo`,`value`,`important`,3,`formControl`],[`label`,`Find a component`,`placeholder`,`Try menu`,3,`search`,`formControl`],[1,`search-results`],[`label`,`Destination`,3,`options`,`isSearchable`,`formControl`],[`for`,`volume-demo`],[`bxSlider`,``,`id`,`volume-demo`,`type`,`range`,`min`,`0`,`max`,`100`,3,`formControl`],[`for`,`disabled-volume`],[`bxSlider`,``,`id`,`disabled-volume`,`type`,`range`,`value`,`30`,`disabled`,``],[`label`,`Enable notifications`,3,`formControl`],[`label`,`Reference`,`forId`,`error-preview`],[`id`,`error-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`id`,`custom-error`],[`label`,`Duplicate project`,`icon`,`copy`,3,`action`],[`label`,`Archive project`,`icon`,`archive`,3,`action`],[`label`,`Unavailable action`,3,`disabled`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Open settings`,`icon`,`settings`,`endIcon`,`chevron-right`,3,`action`],[`label`,`Delete project`,`icon`,`trash-2`,3,`action`,`danger`],[`text`,`Your changes are saved automatically.`],[`routerLink`,`/components/tooltip-directive`],[`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`Saves the current project`,`placement`,`top`,3,`click`],[`bx-button`,``,`variant`,`icon`,`aria-label`,`More information`,`bxTooltip`,`Appearance settings apply to all components`,`placement`,`bottom`],[`name`,`info`],[`bx-button`,``,`variant`,`filled`,`bxTransition`,`fade`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[`tabindex`,`0`,1,`context-target`,3,`bxContextMenu`],[`label`,`Copy selection`,`icon`,`copy`,3,`action`],[`label`,`Archive selection`,`icon`,`archive`,3,`action`],[3,`minimumBreadcrumbs`],[`routerLink`,`/components/button`],[1,`demo-row`,`icon-row`],[`name`,`sparkles`,`size`,`32`,`color`,`text-primary`,`ariaLabel`,`Highlights`,3,`decorative`],[`name`,`check-circle`,`size`,`32`,`color`,`text-success`],[`name`,`info`,`size`,`32`,`color`,`text-info`,`bgColor`,`auto`],[`name`,`triangle-alert`,`size`,`32`,`color`,`text-warn`],[`name`,`heart`,`size`,`40`,`color`,`text-danger`],[`routerLink`,`/icon-catalog`],[3,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`],[3,`close`,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`routerLink`,`/toastr`],[`name`,`layers`,`size`,`28`],[`routerLink`,`/modal`]],template:function(e,a){if(e&1&&(It(0,`article`,3)(1,`header`,4)(2,`a`,5),Co(3,`All components`),jt(),It(4,`p`,6),Co(5),jt(),It(6,`h1`),Co(7),jt(),It(8,`p`,7),Co(9),jt(),It(10,`div`,8)(11,`code`),Co(12),jt(),It(13,`a`,9),Co(14,`Configure appearance globally`),jt()()(),It(15,`section`,10)(16,`div`,11)(17,`h2`,12),Co(18,`Interactive example`),jt(),It(19,`span`),Co(20,`Uses your active theme`),jt()(),It(21,`div`,13),lr(22,Ne,19,1,`div`,14)(23,Ie,6,5,`div`,14)(24,qe,8,5,`div`,15)(25,Be,6,11,`div`,15)(26,Fe,10,4,`fieldset`,14)(27,ze,8,3,`div`,15)(28,Ae,4,4,`div`,15)(29,Le,11,2,`div`,15)(30,Ue,5,3,`div`,14)(31,We,7,4,`div`,15)(32,Qe,4,1,`bx-menu`,16)(33,$e,5,2,`bx-menu`,16)(34,Xe,6,0,`div`,14)(35,Ye,5,0,`div`,17)(36,Ge,11,2,`div`,14)(37,Ze,7,1,`div`,14)(38,et,6,1,`div`,14)(39,tt,9,1,`div`,14)(40,ot,5,1,`div`,18)(41,rt,14,0,`div`,14)(42,at,12,0,`div`,14)(43,lt,8,0,`section`,19)(44,mt,9,2,`div`,14),jt(),It(45,`p`,20),Co(46),jt()(),It(47,`section`,21)(48,`h2`,22),Co(49,`Quick usage`),jt(),It(50,`pre`),fi(51,`code`,23),jt(),It(52,`pre`),fi(53,`code`,23),jt()(),It(54,`section`,24),fi(55,`app-readme`,25),jt()()),e&2){let t;Vt(5),Rc(a.entry().group),Vt(2),Rc(a.entry().title),Vt(2),Rc(a.entry().description),Vt(3),Rc(a.entry().selector),Vt(10),cr((t=a.entry().id)===`button`?22:t===`checkbox`?23:t===`form-field`?24:t===`input-field`?25:t===`radio`?26:t===`search-input`?27:t===`select`?28:t===`slider`?29:t===`slide-toggle`?30:t===`error`?31:t===`menu`?32:t===`menu-item`?33:t===`tooltip`?34:t===`tooltip-directive`?35:t===`dropdown`?36:t===`context-menu`?37:t===`breadcrumbs`?38:t===`icon`?39:t===`modal-banner`?40:t===`toast-core`?41:t===`simple-toast`?42:t===`surface`?43:44),Vt(24),Rc(a.status()),Vt(5),vo(`textContent`,`import { `+a.entry().symbol+` } from '`+a.entry().package+`';`),Vt(2),vo(`textContent`,a.entry().example),Vt(2),vo(`path`,a.entry().readme)}},dependencies:[Eu,a5,tE,lN,n5,uN,S$1,L$1,O,j,K,te,le,J,Z,h,i_,o_,nd,a_,l_,s_,X,td,Mr,V,A],styles:[`
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