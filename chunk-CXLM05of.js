import{I as xe}from"./chunk-0rSpyq6Z.js";import{_ as Js,et as qs,n as $s}from"./chunk-D2mL-a4s.js";import{$a as sd,Bi as ik,Fr as ab,J as Fr,Jr as bo,Qr as cb,Ro as xo,Sa as nd,Ta as od,Ti as ge,Vr as b,Xn as Wo,Yr as br,gn as Sw,na as lA,rr as Xl,t as $,tt as Go,za as qK}from"./chunk-4Vch4aoV.js";var g=`blocks-indexed-db-demo`;var l=`records`;var O=(a,e)=>e.id;function k(a,e){if(a&1&&(bo(0,`p`,6),lA(1),Go()),a&2){let n=Wo();Xl(),ik(n.status())}}function R(a,e){if(a&1&&sd(0,`bx-alert`,7),a&2){let n=Wo();xo(`message`,n.error())}}function T(a,e){if(a&1&&(bo(0,`li`)(1,`code`),lA(2),Go(),bo(3,`span`),lA(4),Go()()),a&2){let n=e.$implicit;Xl(2),ik(n.id),Xl(2),ik(n.label)}}function A(a,e){if(a&1&&(bo(0,`ul`,9),ab(1,T,5,2,`li`,null,O),Go()),a&2){let n=Wo();Xl(),cb(n.records())}}function z(a,e){a&1&&(bo(0,`p`),lA(1,`No records yet. Add one above.`),Go())}var E=class a{destroyRef=b(ge);indexedDbService=b(Sw);supported=this.indexedDbService.supported;loading=$(!1);ready=$(!1);records=$([]);status=$(``);error=$(``);database=null;counter=0;constructor(){this.destroyRef.onDestroy(()=>this.indexedDbService.close(g)),this.initialize()}async addRecord(){await this.run(async()=>{let e={id:qK(),label:`Record ${++this.counter}`,createdAt:Date.now()};await this.indexedDbService.put(this.requireDatabase(),l,e),await this.reload(),this.status.set(`Added "${e.label}".`)})}async countRecords(){await this.run(async()=>{let e=await this.indexedDbService.count(this.requireDatabase(),l);this.status.set(`${e} record${e===1?``:`s`} stored.`)})}async clearRecords(){await this.run(async()=>{await this.indexedDbService.clear(this.requireDatabase(),l),this.records.set([]),this.status.set(`Cleared every record.`)})}async initialize(){if(!this.supported){this.error.set(`IndexedDB is unavailable in this browsing context.`);return}await this.run(async()=>{let e=await this.indexedDbService.open(g,1,[{name:l,keyPath:`id`}]);if(this.destroyRef.destroyed){this.indexedDbService.close(g);return}this.database=e,await this.reload(),this.ready.set(!0),this.counter=this.records().length,this.status.set(`Demo database ready. Records persist across refresh.`)})}requireDatabase(){if(!this.database)throw new Error(`The demo database is not open yet.`);return this.database}async reload(){let e=await this.indexedDbService.getAll(this.requireDatabase(),l);this.records.set(e.sort((n,t)=>t.createdAt-n.createdAt))}async run(e){if(!this.loading()){this.loading.set(!0);try{this.error.set(``),await e()}catch(n){this.error.set(n instanceof Error&&n.message?n.message:`The storage operation failed.`)}finally{this.loading.set(!1)}}}static ɵfac=function(n){return new(n||a)};static ɵcmp=Fr({type:a,selectors:[[`app-indexed-db`]],decls:23,vars:11,consts:[[3,`gap`],[`title`,`Typed IndexedDB repository`],[`aria-live`,`polite`],[`direction`,`horizontal`,3,`wrap`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,3,`click`,`disabled`],[`bx-button`,``,`type`,`button`,`variant`,`tonal`,`color`,`grayscale`,3,`click`,`disabled`],[`role`,`status`,1,`status`],[`title`,`Storage error`,3,`message`],[`title`,`Stored records`],[1,`records`]],template:function(n,t){n&1&&(bo(0,`bx-stack`,0)(1,`bx-card`,1)(2,`bx-stack`,0)(3,`p`),lA(4,` IndexedDbService wraps `),bo(5,`code`),lA(6,`open`),Go(),lA(7,`, requests and transactions in promises, owns one connection per database name, and rejects on unavailable, blocked, quota or failed storage. `),Go(),bo(8,`output`,2),lA(9),Go(),bo(10,`bx-stack`,3)(11,`button`,4),br(`click`,function(){return t.addRecord()}),lA(12,`Add a record`),Go(),bo(13,`button`,4),br(`click`,function(){return t.countRecords()}),lA(14,`Count records`),Go(),bo(15,`button`,5),br(`click`,function(){return t.clearRecords()}),lA(16,` Clear records `),Go()(),od(17,k,2,1,`p`,6),od(18,R,1,1,`bx-alert`,7),Go()(),bo(19,`bx-card`,8)(20,`bx-stack`,0),od(21,A,3,0,`ul`,9)(22,z,2,0,`p`),Go()()()),n&2&&(xo(`gap`,5),Xl(2),xo(`gap`,4),Xl(7),ik(t.supported?`IndexedDB is available.`:`IndexedDB is unavailable in this browser.`),Xl(),xo(`wrap`,!0),Xl(),xo(`disabled`,!t.supported||!t.ready()||t.loading()),Xl(2),xo(`disabled`,!t.supported||!t.ready()||t.loading()),Xl(2),xo(`disabled`,!t.supported||!t.ready()||t.loading()),Xl(2),nd(t.status()?17:-1),Xl(),nd(t.error()?18:-1),Xl(2),xo(`gap`,3),Xl(),nd(t.records().length?21:22))},dependencies:[$s,xe,qs,Js],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
bx-card[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: var(--%NS%bx-space-5, 1.25rem);
}
h3[_ngcontent-%COMP%], 
p[_ngcontent-%COMP%], 
dl[_ngcontent-%COMP%] {
  margin: 0;
}
h3[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-heading);
  font-size: 1rem;
}
p[_ngcontent-%COMP%], 
dt[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  line-height: 1.65;
}
dl[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-3, 0.75rem);
}
dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--%NS%bx-space-1, 0.25rem) var(--%NS%bx-space-4, 1rem);
}
dd[_ngcontent-%COMP%] {
  margin: 0;
  font-weight: 600;
  overflow-wrap: anywhere;
}
.metric[_ngcontent-%COMP%] {
  margin-block: var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-text-heading);
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 600;
  line-height: 1.25;
  font-variant-numeric: tabular-nums;
}
.preview-cell[_ngcontent-%COMP%] {
  display: block;
  padding: var(--%NS%bx-space-5, 1.25rem);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background: var(--%NS%bx-bg-element);
  color: var(--%NS%bx-text-brand);
  text-align: center;
  font-weight: 600;
}
.identifier[_ngcontent-%COMP%] {
  display: block;
  font-family:
    ui-monospace,
    SFMono-Regular,
    monospace;
  overflow-wrap: anywhere;
}
.token-swatch[_ngcontent-%COMP%] {
  block-size: calc(var(--%NS%bx-space-8, 2rem) * 2);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  forced-color-adjust: none;
}
.utility-overlay[_ngcontent-%COMP%] {
  display: block;
  inline-size: min(22rem, 100vw - var(--%NS%bx-space-8, 2rem));
  max-inline-size: 100%;
  overflow: clip;
}
.utility-overlay-content[_ngcontent-%COMP%] {
  max-block-size: calc(100dvh - var(--%NS%bx-space-8, 2rem) - var(--%NS%bx-space-5, 1.25rem) * 2 - var(--%NS%bx-border-width, 1px) * 2);
  overflow: hidden auto;
  overscroll-behavior: contain;
}
.overlay-position-controls[_ngcontent-%COMP%] {
  display: grid;
  gap: var(--%NS%bx-space-4, 1rem);
  align-items: stretch;
}
.overlay-position-controls[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {
  min-block-size: var(--%NS%bx-space-10, 2.5rem);
}
@media (min-width: 640px) {
  .overlay-position-controls[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr) auto;
  }
}
.utility-form[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1rem;
}
.utility-results[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding-inline-start: 1.25rem;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.utility-result[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-accent);
  font-size: 0.875rem;
}`]})};export{E as IndexedDb};