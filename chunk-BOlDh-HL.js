import{An as pr,B as Lu,Bn as st,En as oy,F as K,Ft as b_,H as Mt,Hn as sy,Jn as uY,Ln as rw,Lt as ck,Mn as qc,N as Jt,Nt as at$1,O as I,Ot as ZN,Qt as hr,Rn as rx,S as Fp,St as YE,Tn as ox,Un as tA,Ut as f,V as Mo,Vt as dd,W as Np,Y as Pa,Yt as fr,Zt as hd,_ as EE,_n as nA,_t as XN,ar as wk,cn as ko,fr as yi,ft as WE,g as Dw,hn as mk,hr as z4,i as $t,kt as _E,lt as V_,n as $c,o as Ar,or as wn,ot as Un,pn as mY,q as Op,qt as fd,st as Ut,tr as vi,vr as zc,wn as ot$1,zn as sA}from"./chunk-D44OVyuP.js";import{c as K$1,d as h,f as te,i as j,l as Z,n as ue,o as e,p as X,r as L$1,s as J,t as S,u as O}from"./main-WUOVILFZ.js";import{t as A}from"./chunk-DXG8OZ8F.js";import{n as ft}from"./chunk-D_jtPfcS.js";import{a as nn,i as fe,n as Ze$1,r as en,t as V}from"./chunk-Cb0g5MzA.js";function De(o,c){if(o&1&&(Mt(0,`div`)(1,`strong`),ko(2),$t()()),o&2){let e=pr();Ut(2),zc(e.data.title)}}function Ve(o,c){if(o&1){let e=mk();Mt(0,`div`,4)(1,`button`,5),at$1(`click`,function(){oy(e);let t=pr();return sy(t.close())}),ko(2,`Cancel`),$t(),Mt(3,`button`,6),at$1(`click`,function(){oy(e);let t=pr();return sy(t.confirm())}),ko(4,`Save changes`),$t()()}}var Te=()=>({required:`Enter a project name.`});var Me=()=>({email:`Enter a valid email address.`});var Pe=()=>({name:`settings`});var Oe=o=>({text:`Project settings`,icon:o});function Ne(o,c){if(o&1){let e=mk();Mt(0,`div`,14)(1,`div`,25)(2,`button`,26),at$1(`click`,function(){oy(e);let t=pr();return sy(t.activate(`Primary action`))}),ko(3,`Primary action`),$t(),Mt(4,`button`,27),at$1(`click`,function(){oy(e);let t=pr();return sy(t.activate(`Tonal action`))}),ko(5,`Tonal`),$t(),Mt(6,`button`,28),at$1(`click`,function(){oy(e);let t=pr();return sy(t.activate(`Text action`))}),ko(7,`Text`),$t(),Mt(8,`button`,29),ko(9,`Disabled`),$t()(),Mt(10,`div`,25)(11,`button`,30),at$1(`click`,function(){oy(e);let t=pr();return sy(t.activate(`Success`))}),ko(12,`Success`),$t(),Mt(13,`button`,31),at$1(`click`,function(){oy(e);let t=pr();return sy(t.activate(`Warning`))}),ko(14,`Warning`),$t(),Mt(15,`button`,32),at$1(`click`,function(){oy(e);let t=pr();return sy(t.activate(`Delete`))}),ko(16,`Delete`),$t(),Mt(17,`button`,33),at$1(`click`,function(){oy(e);let t=pr();return sy(t.activate(`Add item`))}),vi(18,`bx-icon`,34),$t()()()}o&2&&(Ut(8),Mo(`disabled`,!0))}function Ie(o,c){if(o&1&&(Mt(0,`div`,14)(1,`bx-checkbox`,35),rx(),$t(),Mt(2,`bx-checkbox`,36),rx(),$t(),Mt(3,`bx-checkbox`,37),rx(),$t(),Mt(4,`output`),ko(5),$t()()),o&2){let e=pr();Ut(),Mo(`formControl`,e.checked),ox(),Ut(),Mo(`formControl`,e.secondChecked),ox(),Ut(),Mo(`formControl`,e.disabledCheck),ox(),Ut(2),Dw(`Updates: `,e.checked.value?`on`:`off`,` · Previews: `,e.secondChecked.value?`on`:`off`)}}function qe(o,c){if(o&1){let e=mk();Mt(0,`div`,15)(1,`bx-form-field`,38)(2,`span`,39)(3,`input`,40),at$1(`input`,function(t){oy(e);let C=pr();return sy(C.updateField(t))})(`blur`,function(){oy(e);let t=pr();return sy(t.showError.set(!0))}),$t()()(),Mt(4,`button`,27),at$1(`click`,function(){oy(e);let t=pr();return sy(t.showError.set(!0))}),ko(5,`Validate name`),$t(),Mt(6,`output`),ko(7),$t()()}if(o&2){let e=pr();Ut(),Mo(`required`,!0)(`error`,e.fieldError()),Ut(2),Mo(`value`,e.fieldValue()),Jt(`aria-invalid`,!!e.fieldError()),Ut(4),yi(`Value: `,e.fieldValue()||`empty`)}}function Be(o,c){if(o&1&&(Mt(0,`div`,15)(1,`bx-input-field`,41),rx(),$t(),Mt(2,`bx-input-field`,42),rx(),$t(),Mt(3,`bx-input-field`,43),rx(),$t(),Mt(4,`output`),ko(5),$t()()),o&2){let e=pr();Ut(),Mo(`errorMessages`,tA(9,Te))(`formControl`,e.name),ox(),Ut(),Mo(`errorMessages`,tA(10,Me))(`formControl`,e.email),ox(),Ut(),Mo(`min`,1)(`max`,20)(`formControl`,e.quantity),ox(),Ut(2),Dw(``,e.name.value,` · `,e.quantity.value,` members`)}}function Fe(o,c){if(o&1){let e=mk();Mt(0,`fieldset`,14)(1,`legend`),ko(2,`Notification frequency`),$t(),Mt(3,`bx-radio`,44),rx(),$t(),Mt(4,`bx-radio`,45),rx(),$t(),Mt(5,`bx-radio`,46),rx(),$t(),Mt(6,`output`),ko(7),$t(),Mt(8,`button`,28),at$1(`click`,function(){oy(e);let t=pr();return sy(t.frequency.reset())}),ko(9,`Reset frequency`),$t()()}if(o&2){let e=pr();Ut(3),Mo(`formControl`,e.frequency),ox(),Ut(),Mo(`formControl`,e.frequency),ox(),Ut(),Mo(`formControl`,e.frequency),ox(),Ut(2),yi(`Selected: `,e.frequency.value)}}function je(o,c){if(o&1&&(Mt(0,`li`),ko(1),$t()),o&2){let e=c.$implicit;Ut(),zc(e)}}function Re(o,c){o&1&&(Mt(0,`li`),ko(1,`No components match your search.`),$t())}function ze(o,c){if(o&1){let e=mk();Mt(0,`div`,15)(1,`bx-search-input`,47),rx(),at$1(`search`,function(t){oy(e);let C=pr();return sy(C.searchTerm.set(t))}),$t(),Mt(2,`ul`,48),Np(3,je,2,1,`li`,null,ck,!1,Re,2,0,`li`),$t(),Mt(6,`output`),ko(7),$t()()}if(o&2){let e=pr();Ut(),Mo(`formControl`,e.query),ox(),Ut(2),Op(e.searchResults()),Ut(4),yi(``,e.searchResults().length,` results`)}}function Ae(o,c){if(o&1&&(Mt(0,`div`,15)(1,`bx-select`,49),rx(),$t(),Mt(2,`output`),ko(3),$t()()),o&2){let e=pr();Ut(),Mo(`options`,e.options)(`isSearchable`,!0)(`formControl`,e.destination),ox(),Ut(2),yi(`Selected: `,e.destination.value)}}function Le(o,c){if(o&1){let e=mk();Mt(0,`div`,15)(1,`label`,50),ko(2,`Volume`),$t(),Mt(3,`input`,51),rx(),$t(),Mt(4,`output`),ko(5),$t(),Mt(6,`button`,28),at$1(`click`,function(){oy(e);let t=pr();return sy(t.volume.setValue(50))}),ko(7,`Reset volume`),$t(),Mt(8,`label`,52),ko(9,`Unavailable range`),$t(),vi(10,`input`,53),$t()}if(o&2){let e=pr();Ut(3),Mo(`formControl`,e.volume),ox(),Ut(2),yi(``,e.volume.value,`%`)}}function He(o,c){if(o&1&&(Mt(0,`div`,14)(1,`bx-slide-toggle`,54),rx(),$t(),Mt(2,`bx-slide-toggle`,37),rx(),$t(),Mt(3,`output`),ko(4),$t()()),o&2){let e=pr();Ut(),Mo(`formControl`,e.enabled),ox(),Ut(),Mo(`formControl`,e.disabledCheck),ox(),Ut(2),yi(`Notifications are `,e.enabled.value?`enabled`:`disabled`,`.`)}}function Ue(o,c){if(o&1&&(Mt(0,`bx-error`,57),ko(1),$t()),o&2){let e=pr(2);Ut(),zc(e.fieldError())}}function We(o,c){if(o&1){let e=mk();Mt(0,`div`,15)(1,`bx-form-field`,55)(2,`span`,39)(3,`input`,56),at$1(`input`,function(t){oy(e);let C=pr();return sy(C.updateField(t))})(`blur`,function(){oy(e);let t=pr();return sy(t.showError.set(!0))}),$t()(),hr(4,Ue,2,1,`bx-error`,57),$t(),Mt(5,`button`,27),at$1(`click`,function(){oy(e);let t=pr();return sy(t.showError.set(!0))}),ko(6,`Validate reference`),$t()()}if(o&2){let e=pr();Ut(3),Mo(`value`,e.fieldValue()),Jt(`aria-invalid`,!!e.fieldError())(`aria-describedby`,e.fieldError()?`custom-error`:null),Ut(),fr(e.fieldError()?4:-1)}}function Qe(o,c){if(o&1){let e=mk();Mt(0,`bx-menu`,16)(1,`bx-menu-item`,58),at$1(`action`,function(){oy(e);let t=pr();return sy(t.activate(`Project duplicated`))}),$t(),Mt(2,`bx-menu-item`,59),at$1(`action`,function(){oy(e);let t=pr();return sy(t.activate(`Project archived`))}),$t(),vi(3,`bx-menu-item`,60),$t()}o&2&&(Ut(3),Mo(`disabled`,!0))}function $e(o,c){if(o&1){let e=mk();Mt(0,`bx-menu`,16)(1,`bx-menu-item`,61),at$1(`action`,function(){oy(e);let t=pr();return sy(t.activate(`Copy link`))}),$t(),Mt(2,`bx-menu-item`,62),at$1(`action`,function(){oy(e);let t=pr();return sy(t.activate(`Open settings`))}),$t(),Mt(3,`bx-menu-item`,63),at$1(`action`,function(){oy(e);let t=pr();return sy(t.activate(`Delete requested`))}),$t(),vi(4,`bx-menu-item`,60),$t()}o&2&&(Ut(3),Mo(`danger`,!0),Ut(),Mo(`disabled`,!0))}function Xe(o,c){o&1&&(Mt(0,`div`,14),vi(1,`bx-tooltip`,64),Mt(2,`p`),ko(3,`Standalone tooltip content. Use the trigger directive for positioned help.`),$t(),Mt(4,`a`,65),ko(5,`Try the tooltip trigger`),$t()())}function Ye(o,c){if(o&1){let e=mk();Mt(0,`div`,14)(1,`div`,25)(2,`button`,66),at$1(`click`,function(){oy(e);let t=pr();return sy(t.activate(`Saved`))}),ko(3,`Save project`),$t(),Mt(4,`button`,67),at$1(`click`,function(){oy(e);let t=pr();return sy(t.activate(`Normal tap activated`))}),ko(5,`Hold for a hint`),$t(),Mt(6,`button`,68),vi(7,`bx-icon`,69),$t()(),Mt(8,`p`),ko(9,`Hover with a mouse or use keyboard focus for hints. On touch screens, Save project activates immediately, Hold for a hint supports a long press, and the information button opens help on tap.`),$t()()}}function Ke(o,c){if(o&1){let e=mk();Mt(0,`bx-menu`)(1,`bx-menu-item`,72),at$1(`action`,function(){oy(e),pr();let t=wk(2);return pr().activate(`Project duplicated`),sy(t.close())}),$t(),Mt(2,`bx-menu-item`,73),at$1(`action`,function(){oy(e),pr();let t=wk(2);return pr().activate(`Project archived`),sy(t.close())}),$t(),Mt(3,`bx-menu-item`,74),at$1(`action`,function(){oy(e),pr();let t=wk(2);return pr().activate(`Delete requested`),sy(t.close())}),$t()()}o&2&&(Ut(3),Mo(`danger`,!0))}function Ge(o,c){if(o&1&&(Mt(0,`div`,14)(1,`button`,70,0),ko(3,`Project actions `),vi(4,`bx-icon`,71),$t(),rw(5,Ke,4,1,`ng-template`,null,1,sA),Mt(7,`output`),ko(8),$t(),Mt(9,`p`),ko(10,`Open, close, or reopen while the menu fades. Its contents keep their full size throughout.`),$t()()),o&2){let e=wk(2),a=wk(6);Ut(),Mo(`bxDropdown`,a),Ut(7),yi(`Transition: `,e.state())}}function Je(o,c){if(o&1){let e=mk();Mt(0,`bx-menu`)(1,`bx-menu-item`,76),at$1(`action`,function(){oy(e);let t=pr(2);return sy(t.activate(`Selection copied`))}),$t(),Mt(2,`bx-menu-item`,77),at$1(`action`,function(){oy(e);let t=pr(2);return sy(t.activate(`Selection archived`))}),$t()()}}function Ze(o,c){if(o&1){let e=mk();Mt(0,`div`,14)(1,`div`,75),ko(2,`Right-click, touch and hold, or focus here and press Shift + F10.`),$t(),Mt(3,`button`,27),at$1(`click`,function(t){oy(e);let C=pr();return sy(C.openContextMenu(t))}),ko(4,`Open actions`),$t(),rw(5,Je,3,0,`ng-template`,null,2,sA),$t()}if(o&2){let e=wk(6);Ut(),Mo(`bxContextMenu`,e)}}function et(o,c){o&1&&(Mt(0,`div`,14),vi(1,`bx-breadcrumbs`,78),Mt(2,`p`),ko(3,`This trail comes from the current route metadata. Select Components to navigate back.`),$t(),Mt(4,`a`,79),ko(5,`Navigate to Button`),$t()()),o&2&&(Ut(),Mo(`minimumBreadcrumbs`,1))}function tt(o,c){o&1&&(Mt(0,`div`,14)(1,`div`,80),vi(2,`bx-icon`,81)(3,`bx-icon`,82)(4,`bx-icon`,83)(5,`bx-icon`,84)(6,`bx-icon`,85),$t(),Mt(7,`a`,86),ko(8,`Browse the searchable icon catalog`),$t()()),o&2&&(Ut(2),Mo(`decorative`,!1))}function nt(o,c){if(o&1){let e=mk();Mt(0,`bx-modal-banner`,89),at$1(`close`,function(){oy(e);let t=pr(2);return t.bannerVisible.set(!1),sy(t.activate(`Banner dismissed`))}),$t()}o&2&&Mo(`header`,nA(3,Oe,tA(2,Pe)))(`showCloseButton`,!0)}function it(o,c){if(o&1){let e=mk();Mt(0,`button`,27),at$1(`click`,function(){oy(e);let t=pr(2);return sy(t.bannerVisible.set(!0))}),ko(1,`Restore banner`),$t()}}function ot(o,c){if(o&1){let e=mk();Mt(0,`div`,17),hr(1,nt,1,5,`bx-modal-banner`,87)(2,it,2,0,`button`,88),Mt(3,`button`,26),at$1(`click`,function(){oy(e);let t=pr();return sy(t.openModal())}),ko(4,`See banner in a dialog`),$t()()}if(o&2){let e=pr();Ut(),fr(e.bannerVisible()?1:2)}}function rt(o,c){if(o&1){let e=mk();Mt(0,`div`,14)(1,`div`,25)(2,`button`,30),at$1(`click`,function(){oy(e);let t=pr();return sy(t.notify(`success`))}),ko(3,`Success`),$t(),Mt(4,`button`,90),at$1(`click`,function(){oy(e);let t=pr();return sy(t.notify(`info`))}),ko(5,`Information`),$t(),Mt(6,`button`,31),at$1(`click`,function(){oy(e);let t=pr();return sy(t.notify(`warn`))}),ko(7,`Warning`),$t(),Mt(8,`button`,32),at$1(`click`,function(){oy(e);let t=pr();return sy(t.notify(`danger`))}),ko(9,`Error`),$t()(),Mt(10,`p`),ko(11,`The toast host manages the progress indicator, dismiss action, pause and cleanup.`),$t(),Mt(12,`a`,91),ko(13,`Open the full toast configurator`),$t()()}}function at(o,c){if(o&1){let e=mk();Mt(0,`div`,14)(1,`div`,25)(2,`button`,30),at$1(`click`,function(){oy(e);let t=pr();return sy(t.notify(`success`))}),ko(3,`Show success`),$t(),Mt(4,`button`,90),at$1(`click`,function(){oy(e);let t=pr();return sy(t.notify(`info`))}),ko(5,`Show information`),$t(),Mt(6,`button`,31),at$1(`click`,function(){oy(e);let t=pr();return sy(t.notify(`warn`))}),ko(7,`Show warning`),$t(),Mt(8,`button`,32),at$1(`click`,function(){oy(e);let t=pr();return sy(t.notify(`danger`))}),ko(9,`Show error`),$t()(),Mt(10,`p`),ko(11,`Semantic colors remain tied to the active Blocks palette.`),$t()()}}function lt(o,c){if(o&1){let e=mk();Mt(0,`section`,18),vi(1,`bx-icon`,92),Mt(2,`h3`),ko(3,`A custom Blocks surface`),$t(),Mt(4,`p`),ko(5,`Material, blur, tint, lighting and motion follow the same global configuration as the controls around it.`),$t(),Mt(6,`button`,27),at$1(`click`,function(){oy(e);let t=pr();return sy(t.activate(`Custom surface action`))}),ko(7,`Try an action`),$t()()}}function ct(o,c){if(o&1){let e=mk();Mt(0,`button`,27),at$1(`click`,function(){oy(e);let t=pr(2);return sy(t.openModal(`left`))}),ko(1,`Open on the left`),$t()}}function mt(o,c){if(o&1){let e=mk();Mt(0,`div`,14)(1,`div`,25)(2,`button`,26),at$1(`click`,function(){oy(e);let t=pr();return sy(t.openModal())}),ko(3),$t(),hr(4,ct,2,0,`button`,88),$t(),Mt(5,`p`),ko(6,`Try editing, saving, pressing Escape, and dismissing through the backdrop. This is the actual service-created component.`),$t(),Mt(7,`a`,93),ko(8,`Open the full modal configurator`),$t()()}if(o&2){let e=pr();Ut(3),yi(`Open `,e.entry().title.toLowerCase()),Ut(),fr(e.entry().id===`modal-side`?4:-1)}}var L=class o extends Ze$1{name=new V_(`Blocks workspace`,{nonNullable:!0});confirm(){this.modal.close(`confirm`,this.name.value)}static ɵfac=(()=>{let c;return function(a){return(c||(c=Un(o)))(a||o)}})();static ɵcmp=ot$1({type:o,selectors:[[`app-component-dialog`]],features:[st],decls:6,vars:2,consts:[[4,`appModalHeader`],[1,`dialog-body`],[`label`,`Project name`,3,`formControl`],[`class`,`dialog-actions`,4,`appModalFooter`],[1,`dialog-actions`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`click`]],template:function(e,a){e&1&&(rw(0,De,3,1,`div`,0),Mt(1,`div`,1)(2,`p`),ko(3),$t(),Mt(4,`bx-input-field`,2),rx(),$t()(),rw(5,Ve,5,0,`div`,3)),e&2&&(Ut(3),zc(a.data.description),Ut(),Mo(`formControl`,a.name),ox())},dependencies:[S,j,mY,uY,XN,en,nn],styles:[`
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
}`]})};var ke=class o{route=f(wn);routeData=z4(this.route.data,{initialValue:this.route.snapshot.data});modals=f(fe);toasts=f(ft);entry=K(()=>e.find(c=>c.id===this.routeData().componentId)??e[0]);count=I(0);status=I(`Ready to try.`);fieldValue=I(``);showError=I(!1);fieldError=K(()=>this.showError()&&this.fieldValue().trim().length<3?`Enter at least three characters.`:void 0);name=new V_(`Blocks workspace`,{nonNullable:!0,validators:Pa.required});email=new V_(``,{nonNullable:!0,validators:Pa.email});volume=new V_(50,{nonNullable:!0});quantity=new V_(3,{nonNullable:!0});checked=new V_(!0,{nonNullable:!0});secondChecked=new V_(!1,{nonNullable:!0});disabledCheck=new V_({value:!1,disabled:!0},{nonNullable:!0});frequency=new V_(`weekly`,{nonNullable:!0});query=new V_(``,{nonNullable:!0});destination=new V_(`skopje`,{nonNullable:!0});enabled=new V_(!0,{nonNullable:!0});bannerVisible=I(!0);options=[{label:`Skopje`,value:`skopje`},{label:`Ohrid`,value:`ohrid`},{label:`Bitola`,value:`bitola`},{label:`Unavailable destination`,value:`unavailable`,disabled:!0}];names=[`Button`,`Checkbox`,`Input field`,`Menu`,`Modal`,`Select`,`Toast`];searchTerm=I(``);searchResults=K(()=>this.names.filter(c=>c.toLowerCase().includes(this.searchTerm().toLowerCase())));contextMenu;activate(c){this.count.update(e=>e+1),this.status.set(`${c} \xB7 action ${this.count()}`)}updateField(c){this.fieldValue.set(c.target.value)}openContextMenu(c){c.preventDefault();let e=c.currentTarget.getBoundingClientRect();this.contextMenu?.open(new MouseEvent(`contextmenu`,{clientX:e.left+16,clientY:e.bottom+4}))}openModal(c){let e=c??(this.entry().id===`modal-side`?`right`:this.entry().id===`modal-bottom-sheet`?`bottom-sheet`:`center`);this.modals.open(L,{data:{title:this.entry().title,description:`Edit the project name. The header, content, footer, backdrop and close behavior use the existing Blocks modal composition.`},header:{text:this.entry().title},style:{layout:e,hasBackdrop:!0,animate:!0,showCloseButton:!0}}).afterClosed().subscribe(t=>this.status.set(t.state===`confirm`?`Saved: ${t.data}`:`Dialog dismissed.`))}notify(c){let e={title:c===`success`?`Settings saved`:c===`warn`?`Review needed`:c===`danger`?`Action failed`:`Workspace update`,message:`This notification follows the application theme and appearance settings.`,durationInMs:4500};switch(c){case`success`:this.toasts.queueSuccess(e);break;case`info`:this.toasts.queueInfo(e);break;case`warn`:this.toasts.queueWarning(e);break;case`danger`:this.toasts.queueDanger(e)}this.status.set(`${c} notification queued.`)}static ɵfac=function(e){return new(e||o)};static ɵcmp=ot$1({type:o,selectors:[[`app-component-demo`]],viewQuery:function(e,a){if(e&1&&Fp(fd,5),e&2){let t;$c(t=qc())&&(a.contextMenu=t.first)}},decls:56,vars:9,consts:[[`dropdown`,`bxDropdown`],[`dropdownActions`,``],[`contextActions`,``],[1,`component-page`],[1,`component-header`],[`routerLink`,`/components`,1,`back-link`],[1,`eyebrow`],[1,`description`],[1,`component-meta`],[`routerLink`,`/appearance`],[`aria-labelledby`,`preview-heading`,1,`demo-section`],[1,`section-heading`],[`id`,`preview-heading`],[`bxSurface`,``,1,`demo-stage`],[1,`demo-stack`],[1,`demo-stack`,`control-width`],[1,`menu-preview`],[1,`demo-stack`,`banner-preview`],[`bxSurface`,``,1,`custom-surface`],[`role`,`status`,`aria-live`,`polite`,1,`action-status`],[`aria-labelledby`,`usage-heading`,1,`usage-section`],[`id`,`usage-heading`],[3,`textContent`],[`aria-label`,`Component documentation`,1,`documentation-section`],[3,`path`],[1,`demo-row`],[`bx-button`,``,`variant`,`filled`,3,`click`],[`bx-button`,``,`variant`,`tonal`,3,`click`],[`bx-button`,``,3,`click`],[`bx-button`,``,`variant`,`filled`,3,`disabled`],[`bx-button`,``,`variant`,`tonal`,`color`,`success`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`warn`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`color`,`danger`,3,`click`],[`bx-button`,``,`variant`,`fab`,`aria-label`,`Add item`,3,`click`],[`name`,`plus`],[`label`,`Receive product updates`,3,`formControl`],[`label`,`Include preview features`,3,`formControl`],[`label`,`Unavailable setting`,3,`formControl`],[`label`,`Project name`,`forId`,`field-preview`,3,`required`,`error`],[`bxSurface`,``,1,`native-control-surface`],[`id`,`field-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`label`,`Project name`,3,`errorMessages`,`formControl`],[`label`,`Email address`,`type`,`email`,3,`errorMessages`,`formControl`],[`label`,`Team members`,`type`,`number`,3,`min`,`max`,`formControl`],[`label`,`Daily summary`,`name`,`frequency-demo`,`value`,`daily`,3,`formControl`],[`label`,`Weekly summary`,`name`,`frequency-demo`,`value`,`weekly`,3,`formControl`],[`label`,`Only important updates`,`name`,`frequency-demo`,`value`,`important`,3,`formControl`],[`label`,`Find a component`,`placeholder`,`Try menu`,3,`search`,`formControl`],[1,`search-results`],[`label`,`Destination`,3,`options`,`isSearchable`,`formControl`],[`for`,`volume-demo`],[`bxSlider`,``,`id`,`volume-demo`,`type`,`range`,`min`,`0`,`max`,`100`,3,`formControl`],[`for`,`disabled-volume`],[`bxSlider`,``,`id`,`disabled-volume`,`type`,`range`,`value`,`30`,`disabled`,``],[`label`,`Enable notifications`,3,`formControl`],[`label`,`Reference`,`forId`,`error-preview`],[`id`,`error-preview`,1,`native-control`,3,`input`,`blur`,`value`],[`id`,`custom-error`],[`label`,`Duplicate project`,`icon`,`copy`,3,`action`],[`label`,`Archive project`,`icon`,`archive`,3,`action`],[`label`,`Unavailable action`,3,`disabled`],[`label`,`Copy link`,`icon`,`link`,3,`action`],[`label`,`Open settings`,`icon`,`settings`,`endIcon`,`chevron-right`,3,`action`],[`label`,`Delete project`,`icon`,`trash-2`,3,`action`,`danger`],[`text`,`Your changes are saved automatically.`],[`routerLink`,`/components/tooltip-directive`],[`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`Saves the current project`,`placement`,`top`,3,`click`],[`bx-button`,``,`variant`,`tonal`,`bxTooltip`,`An optional hint revealed by touching and holding`,`bxTooltipTouch`,`longpress`,`placement`,`top`,1,`tooltip-hold-target`,3,`click`],[`bx-button`,``,`variant`,`icon`,`aria-label`,`More information`,`bxTooltip`,`Appearance settings apply to all components`,`bxTooltipTouch`,`tap`,`placement`,`bottom`],[`name`,`info`],[`bx-button`,``,`variant`,`filled`,`bxTransition`,`fade`,3,`bxDropdown`],[`name`,`chevron-down`,`size`,`20`],[`label`,`Duplicate`,`icon`,`copy`,3,`action`],[`label`,`Archive`,`icon`,`archive`,3,`action`],[`label`,`Delete`,`icon`,`trash-2`,3,`action`,`danger`],[`tabindex`,`0`,1,`context-target`,3,`bxContextMenu`],[`label`,`Copy selection`,`icon`,`copy`,3,`action`],[`label`,`Archive selection`,`icon`,`archive`,3,`action`],[3,`minimumBreadcrumbs`],[`routerLink`,`/components/button`],[1,`demo-row`,`icon-row`],[`name`,`sparkles`,`size`,`32`,`color`,`text-primary`,`ariaLabel`,`Highlights`,3,`decorative`],[`name`,`check-circle`,`size`,`32`,`color`,`text-success`],[`name`,`info`,`size`,`32`,`color`,`text-info`,`bgColor`,`auto`],[`name`,`triangle-alert`,`size`,`32`,`color`,`text-warn`],[`name`,`heart`,`size`,`40`,`color`,`text-danger`],[`routerLink`,`/icon-catalog`],[3,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`],[3,`close`,`header`,`showCloseButton`],[`bx-button`,``,`variant`,`tonal`,`color`,`info`,3,`click`],[`routerLink`,`/toastr`],[`name`,`layers`,`size`,`28`],[`routerLink`,`/modal`]],template:function(e,a){if(e&1&&(Mt(0,`article`,3)(1,`header`,4)(2,`a`,5),ko(3,`All components`),$t(),Mt(4,`p`,6),ko(5),$t(),Mt(6,`h1`),ko(7),$t(),Mt(8,`p`,7),ko(9),$t(),Mt(10,`div`,8)(11,`code`),ko(12),$t(),Mt(13,`a`,9),ko(14,`Configure appearance globally`),$t()()(),Mt(15,`section`,10)(16,`div`,11)(17,`h2`,12),ko(18,`Interactive example`),$t(),Mt(19,`span`),ko(20,`Uses your active theme`),$t()(),Mt(21,`div`,13),hr(22,Ne,19,1,`div`,14)(23,Ie,6,5,`div`,14)(24,qe,8,5,`div`,15)(25,Be,6,11,`div`,15)(26,Fe,10,4,`fieldset`,14)(27,ze,8,3,`div`,15)(28,Ae,4,4,`div`,15)(29,Le,11,2,`div`,15)(30,He,5,3,`div`,14)(31,We,7,4,`div`,15)(32,Qe,4,1,`bx-menu`,16)(33,$e,5,2,`bx-menu`,16)(34,Xe,6,0,`div`,14)(35,Ye,10,0,`div`,14)(36,Ge,11,2,`div`,14)(37,Ze,7,1,`div`,14)(38,et,6,1,`div`,14)(39,tt,9,1,`div`,14)(40,ot,5,1,`div`,17)(41,rt,14,0,`div`,14)(42,at,12,0,`div`,14)(43,lt,8,0,`section`,18)(44,mt,9,2,`div`,14),$t(),Mt(45,`p`,19),ko(46),$t()(),Mt(47,`section`,20)(48,`h2`,21),ko(49,`Quick usage`),$t(),Mt(50,`pre`),vi(51,`code`,22),$t(),Mt(52,`pre`),vi(53,`code`,22),$t()(),Mt(54,`section`,23),vi(55,`app-readme`,24),$t()()),e&2){let t;Ut(5),zc(a.entry().group),Ut(2),zc(a.entry().title),Ut(2),zc(a.entry().description),Ut(3),zc(a.entry().selector),Ut(10),fr((t=a.entry().id)===`button`?22:t===`checkbox`?23:t===`form-field`?24:t===`input-field`?25:t===`radio`?26:t===`search-input`?27:t===`select`?28:t===`slider`?29:t===`slide-toggle`?30:t===`error`?31:t===`menu`?32:t===`menu-item`?33:t===`tooltip`?34:t===`tooltip-directive`?35:t===`dropdown`?36:t===`context-menu`?37:t===`breadcrumbs`?38:t===`icon`?39:t===`modal-banner`?40:t===`toast-core`?41:t===`simple-toast`?42:t===`surface`?43:44),Ut(24),zc(a.status()),Ut(5),Mo(`textContent`,`import { `+a.entry().symbol+` } from '`+a.entry().package+`';`),Ut(2),Mo(`textContent`,a.entry().example),Ut(2),Mo(`path`,a.entry().readme)}},dependencies:[Lu,mY,b_,ZN,uY,XN,S,L$1,O,j,K$1,te,ue,J,Z,h,_E,EE,hd,YE,fd,WE,X,dd,Ar,V,A],styles:[`
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
}`]})};export{ke as ComponentDemo};