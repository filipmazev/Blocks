import{t as le$1}from"./chunk-Ct26bFN_.js";import{t as n}from"./chunk-BDrlE4OR.js";import{n as g,t as c}from"./chunk-LR0wdyTV.js";import{t as o}from"./chunk-DfE9UpOf.js";import{S as e,g as _e}from"./main-QG7H2MDR.js";import{l as Jr,v as _e$1}from"./chunk-BaHVKixO.js";import{D as Ws,F as al,J as js,b as Pt,d as Gs,et as ol,h as Ji,rt as sl,t as $i}from"./chunk-C1xhQ_ri.js";import{$a as sd,$i as ka,Bi as ik,Ca as ni,Co as vo,Fr as ab,Gr as bb,Ir as ad,It as Mh,J as Fr,Jr as bo,K as FT,Kn as We,Li as id,Qr as cb,Ro as xo,T as Br,Ti as ge$1,Tn as Ta,Tt as Kn,Vr as b,Wa as rd,X as G,Xn as Wo,Yo as zr,Yr as br,Z as GC,_n as Sz,_r as ZC,a as $r,br as Zn,en as R0,er as Wv,ha as mb,hr as Yy,ia as lb,mi as er,mr as Yv,na as lA,nn as RA,nr as XT,o as $s,oa as le$2,pi as ee,rr as Xl,so as tr,t as $,ta as ke,tt as Go,wo as vr,yi as fb}from"./chunk-zTlCv55u.js";import{n as s,t as r}from"./chunk-C9yOwMO6.js";var se=class{points=[];destination;target;dwell=0;direction=1;elapsed=0;following=!1;update(t){this.points=t}reset(){this.target=void 0,this.destination=void 0,this.dwell=this.elapsed=0,this.following=!1}focus(t){this.destination=t,this.target=void 0,this.dwell=0,this.following=!0}step(t,n,e){if(!this.points.length)return;this.elapsed+=t;let i=this.points.findIndex(b=>b.id===this.destination);i<0&&(i=this.points.reduce((b,v,P)=>Math.hypot(v.x-n,v.y-e)<Math.hypot(this.points[b].x-n,this.points[b].y-e)?P:b,0),this.destination=this.points[i].id,this.dwell=0);let o=this.points[i],p=this.target??{id:o.id,x:n,y:e},x=Math.hypot(o.x-p.x,o.y-p.y),C=this.following?190:46,_=Math.min(1,t*C/Math.max(1,x));return this.target={id:o.id,x:p.x+(o.x-p.x)*_,y:p.y+(o.y-p.y)*_},x<2&&Math.hypot(o.x-n,o.y-e)<8&&(this.following=!1,this.dwell+=t,this.dwell>4&&this.points.length>1&&((i+this.direction>=this.points.length||i+this.direction<0)&&(this.direction*=-1),this.destination=this.points[i+this.direction].id,this.dwell=0)),s(r({},this.target),{x:this.target.x+Math.sin(this.elapsed*.7)*5,y:this.target.y+Math.sin(this.elapsed*.9)*4})}};var M=(h,t,n)=>Math.max(t,Math.min(n,h));var le=class{guideX=new zr(0,vr.soft);guideY=new zr(0,vr.soft);guideTarget;x=0;y=0;vx=0;vy=0;angle=0;spin=0;stretchAngle=0;scaleX=.74;scaleY=.74;state=`asleep`;mood=`primary`;impactWall=`bottom`;contact;impactSerial=0;bounds={left:0,right:0,top:0,bottom:0,cruiseY:0};initialized=!1;clock=0;age=0;grounded=0;impact=0;agitation=0;quiet=0;moodTime=0;calmReturn=!1;recoveryAngle=0;courseX=0;courseY=0;steeringFromNudge=!1;resize(t){this.bounds=t,(!this.initialized||this.state===`asleep`)&&(this.x=this.homeX(),this.y=this.homeY(),this.initialized=!0),this.x=M(this.x,t.left,t.right),this.y=M(this.y,t.top,t.bottom)}wake(){this.state===`asleep`&&(this.state=`waking`,this.age=0)}grab(){this.state=`dragging`,this.age=this.vx=this.vy=this.impact=0,this.scaleX=this.scaleY=1,this.stretchAngle=0}drag(t,n){this.x=M(t,this.bounds.left,this.bounds.right),this.y=M(n,this.bounds.top,this.bounds.bottom)}throw(t,n,e=0,i){this.spin=M(e,-25,25);let o=Math.hypot(t,n)>=650&&(i===void 0||i>=28);this.state=o||this.mood===`danger`?`falling`:`coasting`,this.vx=M(t,-2200,2200),this.vy=M(n,-2200,2200),this.age=this.grounded=this.quiet=0;let p=Math.min(1,Math.hypot(this.vx,this.vy)/1200);this.agitation=Math.min(1.5,this.agitation+(p<.25?.04:.18+p*.28)),this.agitation>=.85||this.mood===`danger`?this.setMood(`danger`,6.5):p>=.45?this.setMood(`warn`,2.4):this.mood!==`info`&&this.setMood(`success`,2.6)}nudge(t=0,n=0,e=this.spin){this.state=this.mood===`danger`?`falling`:`coasting`,this.vx=M(t,-650,650),this.vy=M(n,-650,650),this.spin=M(e,-25,25),this.age=0}drop(){this.state=`falling`,this.age=this.grounded=0}fly(){this.steeringFromNudge=!1,this.state=`flying`,this.age=this.grounded=this.impact=0,this.vy=this.mood===`danger`?-600:-220,this.courseX=this.x,this.courseY=this.y}returnHome(t=!1){if(t){this.sleep();return}this.mood!==`danger`&&(this.state=`returning`,this.age=0)}park(){this.vx=this.vy=this.impact=0}step(t){let n=M(t,0,.15);for(;n>1e-8;){let e=Math.min(n,.008333333333333333);this.advance(e),n-=e}}advance(t){if(this.state===`asleep`)return;if(this.clock+=t,this.age+=t,this.quiet+=t,this.updateMood(t),this.state===`dragging`){this.age>1.4&&this.mood===`primary`&&this.setMood(`success`,2);return}this.impact*=Math.exp(-t*12),this.updateDeformation();let n=this.bounds;if(this.state===`waking`){let i=Math.min(1,this.age/.65),o=i*i*(3-2*i);this.x=this.homeX(),this.y=Math.max(n.top,this.homeY()-o*32),this.scaleX=this.scaleY=.74+o*.26,this.angle=Math.sin(i*Math.PI)*-.16,i===1&&this.fly();return}if(this.state===`recovering`){let i=M((this.age-.25)/.6,0,1);this.angle=this.recoveryAngle+Math.sin(i*Math.PI*8)*Math.sin(i*Math.PI)*.24,this.scaleX=1+Math.sin(i*Math.PI*6)*.07,this.scaleY=2-this.scaleX,this.age>=1.05&&(this.calmReturn?this.returnHome():this.fly());return}if(this.state===`returning`){this.vx+=((this.homeX()-this.x)*15-this.vx*7.5)*t,this.vy+=((this.homeY()-this.y)*15-this.vy*7.5)*t;let i=Math.hypot(this.homeX()-this.x,this.homeY()-this.y);if(this.scaleX=this.scaleY=.74+Math.min(1,i/75)*.26,this.angle*=Math.exp(-t*6),i<1.2&&Math.hypot(this.vx,this.vy)<6||this.age>5){this.sleep();return}}else if(this.state===`coasting`)this.vx*=Math.exp(-t*.6),this.vy*=Math.exp(-t*.6),this.age>.9&&(this.courseX=this.x,this.courseY=this.y,this.steeringFromNudge=!0,this.state=`flying`,this.age=0);else if(this.state===`flying`&&this.mood!==`danger`){if(this.guideTarget){this.guideX.value=this.x,this.guideY.value=this.y,this.guideX.velocity=this.vx,this.guideY.velocity=this.vy,this.guideX.target=M(this.guideTarget.x,n.left,n.right),this.guideY.target=M(this.guideTarget.y,n.top,n.bottom),this.guideX.step(t),this.guideY.step(t),this.x=this.guideX.value,this.y=this.guideY.value,this.vx=this.guideX.velocity,this.vy=this.guideY.velocity;return}let i=n.right-n.left,o=n.left+i*(.5+Math.sin(this.clock*.48+.8)*.4),p=M(n.cruiseY+Math.sin(this.clock*.9)*48,n.top,n.bottom-24),x=Math.min(1,this.age/2.2),C=x*x*(3-2*x),_=this.courseX+(o-this.courseX)*C,b=this.courseY+(p-this.courseY)*C;if(this.steeringFromNudge){let v=1-Math.exp(-t*2.2*C);this.vx+=(M((o-this.x)*.7,-200,200)-this.vx)*v,this.vy+=(M((p-this.y)*.7,-150,150)-this.vy)*v}else this.vx+=((_-this.x)*3.6-this.vx*3.2)*t,this.vy+=((b-this.y)*4-this.vy*3)*t;this.age>10&&this.mood===`primary`&&this.returnHome()}else this.vy+=(this.mood===`danger`?2150:1850)*t,this.vx*=Math.exp(-t*.16);this.x+=this.vx*t,this.y+=this.vy*t,this.state!==`returning`&&(this.angle+=this.spin*t,this.spin*=Math.exp(-t*(this.state===`falling`||this.state===`coasting`?.28:1.2)));let e=this.mood===`danger`;(this.x<n.left||this.x>n.right)&&(this.hit(this.x<n.left?`left`:`right`,Math.abs(this.vx)),this.x=M(this.x,n.left,n.right),this.vx*=e?-.97:-.82,this.spin=this.spin*.8+this.vy*(this.impactWall===`left`?.003:-.003)),this.y<n.top&&(this.hit(`top`,Math.abs(this.vy)),this.y=n.top,this.vy=Math.abs(this.vy)*(e?.9:.7),this.spin=this.spin*.8-this.vx*.003),this.y>=n.bottom&&(this.y=n.bottom,this.vy>75&&(this.spin=this.spin*.8+this.vx*.003),this.hit(`bottom`,this.vy),e?(this.vy=-M(Math.abs(this.vy)*.94,680,1100),this.vx=(Math.sign(this.vx)||(this.x>(n.left+n.right)/2?-1:1))*Math.max(850,Math.abs(this.vx)*.97)):this.vy>75?(this.vy*=-.62,this.vx*=.8):(this.vy=0,this.vx*=Math.exp(-t*9),this.grounded+=t),!e&&this.state===`falling`&&this.grounded>.13&&(this.state=`recovering`,this.recoveryAngle=this.angle,this.age=this.vx=this.vy=this.spin=0))}updateMood(t){this.quiet>2&&(this.agitation=Math.max(0,this.agitation-t*.1)),!(this.moodTime<=0)&&(this.moodTime-=t,!(this.moodTime>0)&&(this.mood===`danger`?(this.agitation=.12,this.calmReturn=!0,this.setMood(`info`,3.5),this.state===`flying`&&(this.state=`falling`),this.vx*=.65,this.vy*=.65):(this.setMood(`primary`,0),this.calmReturn&&this.state===`flying`&&this.returnHome())))}hit(t,n){n<120||(this.impact=Math.min(1,n/650),this.impactWall=t,this.impactSerial++,this.updateDeformation())}updateDeformation(){let t=Math.min(1,Math.hypot(this.vx,this.vy)/1300);if(this.contact=this.impact>.03?this.impactWall:void 0,this.impact>.03){let n=this.impactWall===`left`||this.impactWall===`right`;this.stretchAngle=0,this.scaleX=1+this.impact*(n?-.3:.34),this.scaleY=1+this.impact*(n?.3:-.27)}else this.state===`falling`||this.state===`flying`&&this.mood===`danger`?(this.stretchAngle=Math.atan2(this.vy,this.vx)-Math.PI/2,this.scaleX=1-t*.12,this.scaleY=1+t*.2):(this.stretchAngle=0,this.scaleX=this.scaleY=1)}setMood(t,n){this.mood=t,this.moodTime=n}sleep(){this.state=`asleep`,this.x=this.homeX(),this.y=this.homeY(),this.vx=this.vy=this.angle=this.spin=this.stretchAngle=this.agitation=this.moodTime=0,this.mood=`primary`,this.calmReturn=!1,this.scaleX=this.scaleY=.74}homeX(){return M(this.bounds.homeX??this.bounds.left+(this.bounds.right-this.bounds.left)*.76,this.bounds.left,this.bounds.right)}homeY(){return M(this.bounds.homeY??this.bounds.cruiseY,this.bounds.top,this.bounds.bottom)}};function rt(h,t){let n=h[h.length-1];if(!n||t-n.time>120)return[0,0];let e=h.filter(v=>n.time-v.time<=100);if(e.length<2)return[0,0];let i=e[0].time,o=e.reduce((v,P)=>v+(P.time-i)/1e3,0)/e.length,p=e.reduce((v,P)=>v+P.x,0)/e.length,x=e.reduce((v,P)=>v+P.y,0)/e.length,C=0,_=0,b=0;for(let v of e){let P=(v.time-i)/1e3-o;C+=P*P,_+=P*(v.x-p),b+=P*(v.y-x)}return C>1e-7?[M(_/C,-2200,2200),M(b/C,-2200,2200)]:[M((n.x-e[0].x)/.008,-2200,2200),M((n.y-e[0].y)/.008,-2200,2200)]}function Me(h,t){let n=h[h.length-1],[e,i]=rt(h,n?Math.min(t,n.time+120):t);if(!n||t-n.time>180)return{vx:0,vy:0,spin:0,travel:0};let o=h.filter(k=>n.time-k.time<=90),p=(k,u)=>{if(o.length<3)return u;let S=o.map(g=>({t:(g.time-n.time)/1e3,p:g[k]})),f=Array.from({length:3},(g,O)=>Array.from({length:4},(B,w)=>w===3?S.reduce((A,G)=>A+G.p*Math.pow(G.t,O),0):S.reduce((A,G)=>A+Math.pow(G.t,O+w),0)));for(let g=0;g<3;g++){let O=g;for(let w=g+1;w<3;w++)Math.abs(f[w][g])>Math.abs(f[O][g])&&(O=w);if(Math.abs(f[O][g])<1e-10)return u;[f[g],f[O]]=[f[O],f[g]];let B=f[g][g];for(let w=g;w<4;w++)f[g][w]/=B;for(let w=0;w<3;w++)if(w!==g){let A=f[w][g];for(let G=g;G<4;G++)f[w][G]-=A*f[g][G]}}return M(f[1][3],-2200,2200)},x=0,C=0,_=0;for(let k=1;k<o.length;k++)_+=Math.hypot(o[k].x-o[k-1].x,o[k].y-o[k-1].y);for(let k=2;k<o.length;k++){let u=o[k-2],S=o[k-1],f=o[k],g=S.x-u.x,O=S.y-u.y,B=f.x-S.x,w=f.y-S.y;Math.hypot(g,O)<.4||Math.hypot(B,w)<.4||(x+=Math.atan2(g*w-O*B,g*B+O*w),C+=(f.time-u.time)/2e3)}let b=p(`x`,e),v=p(`y`,i);Math.hypot(b,v)<Math.hypot(e,i)*.65&&(b=e*.8,v=i*.8);let H=Math.hypot(b,v);return _>=4&&H>0&&H<80&&(b=b/H*80,v=v/H*80),{vx:b,vy:v,spin:_>12&&C>.01&&Math.abs(x)>.1?M(x/C,-25,25):0,travel:_}}var at=[`orb`];var st=[`plane`];var lt=[`shadow`];var ct=[`impact`];var dt=[`charge`];var pt=[`ribbonCore`];var mt=[`ribbonGlow`];var ht=[`ribbonTail`];var gt=[`probes`];var T=26;var et=[`primary`,`success`,`warn`,`danger`,`info`];var ft=Array.from({length:25},(h,t)=>{let n=t/24*Math.PI*2;return{u:n,cos:Math.cos(n),sin:Math.sin(n)}});var ce=class h{ngZone=b(le$2);themingService=b(ni);isReducedMotion=b(Br).isReducedMotion;physics=new le;guide=new se;orb=Sz.required(`orb`);plane=Sz.required(`plane`);shadow=Sz.required(`shadow`);impact=Sz.required(`impact`);charge=Sz.required(`charge`);ribbonCore=Sz.required(`ribbonCore`);ribbonGlow=Sz.required(`ribbonGlow`);ribbonTail=Sz.required(`ribbonTail`);probes=Sz.required(`probes`);controlsWidth=$(null);ready=$(!1);message=G(()=>this.isOrbHome()?`Hover on the orb to wake it up`:this.state()===`asleep`?`A little light lives in your ${this.themingService.paletteLabel().toLowerCase()} theme.`:this.mood()===`danger`?`Too many throws. Someone is cross.`:this.mood()===`info`?`Taking a breath. Give it a moment.`:this.mood()===`warn`?`Easy now. This little light has feelings.`:this.mood()===`success`?`That was gentle. A happy little light.`:this.state()===`returning`?`Time to curl up in its swatch.`:this.state()===`recovering`?`A little wobble. All better.`:`Curious? Catch it. Be kind.`);isOrbHome=G(()=>this.ready()&&this.state()===`asleep`&&!this.isReducedMotion());state=$(`asleep`);mood=$(`primary`);stage=ee.required();cards=ee.required();view;home;scene;pose;colorPose;lastColor=``;lastCharge=-1;lastShadow=``;lastPointerPoint;shadowPose;chargePose;ribbonTime=0;lastRibbon=-1/0;lightLevel=0;lastPose=``;lastScene=``;lastGeometry=``;stayHome=!1;impactAnimation;events;resize;intersection;stopFrame;guideInterrupted=!1;followTimer;followPending=!1;followTarget;lastInteraction=-1/0;wakeTimer;lastTime;lastLight=-1/0;lastImpact=0;originX=0;originY=0;floor=0;dirtyGeometry=!0;colorsDirty=!0;visible=!0;homeVisible=!1;motionEnabled=!0;pointer;offsetX=0;offsetY=0;fromHome=!1;dragDistance=0;samples=[];colors=Object.fromEntries(et.map(t=>[t,[255,255,255]]));rgb=[255,255,255];color=`rgb(255 255 255)`;invalidateGeometry=()=>{this.dirtyGeometry=!0,this.start(!0)};pageScrolled=t=>{let n=t.target,e=this.stage();n!==e.ownerDocument&&!(n instanceof HTMLElement&&n.contains(e))||(this.invalidateGeometry(),this.view&&this.motionEnabled&&!this.stayHome&&(this.clearFollow(),this.followTimer=this.view.setTimeout(()=>{this.followTimer=void 0,this.measure(),this.followPending=!0,this.resumeFollowing()},Math.max(1500,3500-(performance.now()-this.lastInteraction)))))};visibilityChange=()=>{!this.visible||this.stage().ownerDocument.hidden?(this.cancelDrag(),this.stop(),this.clearWake(),this.clearFollow()):(this.dirtyGeometry=!0,this.start(!0))};wake=()=>{!this.motionEnabled||this.physics.state!==`asleep`||(this.stayHome=!1,this.clearWake(),this.guide.reset(),this.physics.wake(),this.start())};grab=t=>{if(this.pointer!==void 0||!t.isPrimary||t.button!==0)return;t.preventDefault(),this.interruptGuide(),this.dirtyGeometry&&this.measure(),this.clearWake();let n=this.orb().nativeElement;n.focus({preventScroll:!0}),this.pointer=t.pointerId,this.offsetX=t.clientX-this.originX-this.physics.x,this.offsetY=t.clientY-this.originY-this.physics.y,this.fromHome=this.physics.state===`asleep`||this.physics.state===`waking`,this.dragDistance=0,this.lastPointerPoint={x:t.clientX,y:t.clientY,time:t.timeStamp},this.samples=[this.lastPointerPoint],this.stayHome=!1,this.physics.grab(),this.motionEnabled||(this.lightLevel=1),n.setPointerCapture(t.pointerId),this.paint(performance.now(),!0),this.start()};drag=t=>{if(t.pointerId!==this.pointer)return;this.dirtyGeometry&&this.measure(),this.physics.drag(t.clientX-this.originX-this.offsetX,t.clientY-this.originY-this.offsetY);let n=t.getCoalescedEvents?.()??[];for(let i of n.length?n:[t]){let o=this.samples[this.samples.length-1],p=this.lastPointerPoint??o;this.dragDistance+=Math.hypot(i.clientX-p.x,i.clientY-p.y),this.lastPointerPoint={x:i.clientX,y:i.clientY,time:i.timeStamp},(!o||i.timeStamp-o.time>=3||t.type===`pointerup`)&&(!o||Math.hypot(i.clientX-o.x,i.clientY-o.y)>.1)&&this.samples.push(this.lastPointerPoint)}let e=this.samples[this.samples.length-1];this.samples=this.samples.filter(i=>e.time-i.time<=120).slice(-64),this.motionEnabled||this.paint(performance.now())};release=t=>{if(t.pointerId!==this.pointer)return;this.drag(t);let{vx:n,vy:e,spin:i,travel:o}=Me(this.samples,t.timeStamp),p=this.fromHome&&this.dragDistance<6;this.endPointer(),this.motionEnabled?p?this.physics.fly():this.physics.throw(n,e,i,o):this.physics.park(),this.paint(performance.now(),!0),this.start()};cancelDrag=t=>{if(this.pointer===void 0)return;let n=Me(this.samples,t?.timeStamp||performance.now());this.endPointer(),this.physics.nudge(n.vx,n.vy,n.spin),this.motionEnabled||this.physics.park(),this.start()};tick=t=>{this.dirtyGeometry&&this.measure(),this.colorsDirty&&this.readColors();let n=this.lastTime===void 0?1/60:Math.min(.15,(t-this.lastTime)/1e3);this.motionEnabled&&(this.physics.guideTarget=this.guideInterrupted||this.physics.state!==`flying`?void 0:this.guide.step(n,this.physics.x,this.physics.y),this.physics.step(n),this.resumeFollowing(),this.ribbonTime+=n);let e=this.physics.state,i=e===`asleep`?0:e===`waking`||e===`returning`?Math.max(0,Math.min(1,(this.physics.scaleX-.74)/.26)):1;this.lightLevel+=(i-this.lightLevel)*(1-Math.exp(-n*(i>this.lightLevel?2.5:4))),i===0&&this.lightLevel<.003&&(this.lightLevel=0),this.lastTime=this.motionEnabled?t:void 0,this.paint(t),e===`asleep`&&this.scheduleWake(),e!==`asleep`||this.lightLevel>0?this.start():this.stop()};constructor(){er(()=>this.ngZone.runOutsideAngular(()=>this.initialize())),We(()=>{this.themingService.palette(),this.themingService.activeTheme(),this.colorsDirty=!0,this.ngZone.runOutsideAngular(()=>this.start(!0))}),We(()=>{this.motionEnabled=!this.isReducedMotion(),this.ngZone.runOutsideAngular(()=>{this.view&&(this.motionEnabled||(this.cancelDrag(),this.physics.returnHome(!0),this.lightLevel=0,this.stop(),this.clearWake(),this.clearFollow()),this.start(!0))})}),b(ge$1).onDestroy(()=>{this.stop(),this.clearWake(),this.clearFollow(),this.events?.abort(),this.resize?.disconnect(),this.intersection?.disconnect(),this.pose?.cancel(),this.colorPose?.cancel(),this.shadowPose?.cancel(),this.chargePose?.cancel(),this.impactAnimation?.cancel(),this.scene?.destroy()})}bringHome(){this.physics.mood!==`danger`&&(this.interruptGuide(),this.stayHome=!0,this.clearWake(),this.cancelDrag(),this.physics.returnHome(!this.motionEnabled),this.motionEnabled||(this.lightLevel=0),this.paint(performance.now(),!0),this.start(!0))}toss(t){t.detail!==0||!this.motionEnabled||(this.interruptGuide(),this.clearWake(),this.physics.state===`asleep`?this.physics.wake():this.physics.throw(160,-650),this.start())}keydown(t){if(t.key===`Escape`){this.bringHome();return}else if(t.key.startsWith(`Arrow`)){t.preventDefault(),this.interruptGuide(),this.clearWake();let n=t.key===`ArrowLeft`?-30:t.key===`ArrowRight`?30:0,e=t.key===`ArrowUp`?-30:t.key===`ArrowDown`?30:0;this.physics.fly(),this.physics.drag(this.physics.x+n,this.physics.y+e),this.motionEnabled?this.physics.throw(n*10,e*10-220):(this.physics.park(),this.lightLevel=1)}else return;this.paint(performance.now(),!0),this.start()}initialize(){let t=this.stage(),n=t.ownerDocument.defaultView;if(!n)return;this.view=n,this.home=this.cards().querySelector(`.orb-nest-well`)??this.cards(),this.events=new AbortController;let e=this.events.signal,i=this.orb().nativeElement;this.pose=i.animate([{transform:`none`}],{duration:1,fill:`both`}),this.colorPose=i.animate([{color:this.color},{color:this.color}],{duration:1,fill:`both`}),this.shadowPose=this.shadow().nativeElement.animate([{opacity:0}],{duration:1,fill:`both`}),this.chargePose=this.charge().nativeElement.animate([{opacity:0},{opacity:0}],{duration:1,fill:`both`});for(let o of[this.pose,this.shadowPose,this.chargePose,this.colorPose])o.pause(),o.currentTime=0;this.scene=Mh(t),i.addEventListener(`pointerdown`,this.grab,{signal:e}),i.addEventListener(`pointermove`,this.drag,{signal:e}),i.addEventListener(`pointerup`,this.release,{signal:e}),i.addEventListener(`pointercancel`,this.cancelDrag,{signal:e}),i.addEventListener(`lostpointercapture`,this.cancelDrag,{signal:e}),i.addEventListener(`pointerenter`,()=>{this.interruptGuide(),this.wake()},{signal:e}),i.addEventListener(`focus`,()=>{this.interruptGuide(),this.wake()},{signal:e}),n.addEventListener(`blur`,this.cancelDrag,{signal:e}),n.addEventListener(`resize`,this.invalidateGeometry,{signal:e,passive:!0}),n.visualViewport?.addEventListener(`resize`,this.invalidateGeometry,{signal:e,passive:!0}),n.visualViewport?.addEventListener(`scroll`,this.invalidateGeometry,{signal:e,passive:!0}),t.ownerDocument.addEventListener(`scroll`,this.pageScrolled,{signal:e,capture:!0,passive:!0}),t.ownerDocument.addEventListener(`visibilitychange`,this.visibilityChange,{signal:e}),this.resize=new ResizeObserver(this.invalidateGeometry),this.resize.observe(t),this.resize.observe(this.cards()),this.stage().querySelectorAll(`[data-orb-stop]`).forEach(o=>this.resize?.observe(o)),this.intersection=new IntersectionObserver(o=>{for(let p of o)p.target===t&&(this.visible=p.isIntersecting),p.target===this.home&&(this.homeVisible=p.isIntersecting);this.visibilityChange()}),this.intersection.observe(t),this.intersection.observe(this.home),this.measure(),this.readColors(),this.paint(performance.now(),!0),this.ready.set(!0),this.scheduleWake()}measure(){this.controlsWidth.set(this.stage().clientWidth);let t=this.plane().nativeElement.getBoundingClientRect(),n=this.cards().getBoundingClientRect(),e=this.home?.getBoundingClientRect()??n;this.measureGuide(t);let i=`${t.left}:${t.top}:${t.width}:${t.height}:${n.left}:${n.top}:${n.width}:${n.height}:${e.left}:${e.top}:${e.width}:${e.height}`;if(i===this.lastGeometry){this.dirtyGeometry=!1;return}this.lastGeometry=i,this.originX=t.left,this.originY=t.top,this.floor=t.height-T-2,this.physics.resize({left:T+2,right:Math.max(T+2,t.width-T-2),top:T+2,bottom:Math.max(T+2,this.floor),cruiseY:e.top-t.top+e.height/2,homeX:e.left-t.left+e.width/2,homeY:e.top-t.top+e.height/2}),this.dirtyGeometry=!1,this.scene?.refresh()}readColors(){let t=this.probes().nativeElement.children;et.forEach((n,e)=>{let i=this.view?.getComputedStyle(t[e]).color??``,o=i.match(/[\d.]+/g)?.slice(0,3).map(Number);o?.length===3&&(this.colors[n]=o.map(p=>i.startsWith(`color(`)?p*255:p))}),this.rgb=[...this.colors[this.physics.mood]],this.colorsDirty=!1}endPointer(){let t=this.pointer;this.pointer=void 0,this.samples=[],this.lastPointerPoint=void 0;let n=this.orb().nativeElement;t!==void 0&&n.hasPointerCapture(t)&&n.releasePointerCapture(t)}interruptGuide(){if(this.lastInteraction=performance.now(),this.clearFollow(),this.guideInterrupted)return;this.guideInterrupted=!0;let t=this.physics.guideTarget!==void 0;this.physics.guideTarget=void 0,t&&this.physics.state===`flying`&&this.physics.nudge(this.physics.vx,this.physics.vy,this.physics.spin)}measureGuide(t){let n=this.view?.visualViewport,e=Math.max(0,n?.offsetTop??0),i=e+(n?.height??this.view?.innerHeight??0),o=[],p=0;this.followTarget=void 0,this.stage().querySelectorAll(`[data-orb-stop]`).forEach((x,C)=>{let _=x.getBoundingClientRect();if(_.bottom<e+64||_.top>i-64)return;let b=x.closest(`section`)?.getAttribute(`aria-labelledby`)??String(C),v=Math.min(i,_.bottom)-Math.max(e+64,_.top);v>p&&(p=v,this.followTarget=b),o.push({id:b,x:Math.max(T+2,Math.min(t.width-T-2,_.left-t.left+_.width*(C%2===0?.8:.2))),y:Math.max(e+100,Math.min(i-64,_.top+12))-t.top})}),this.guide.update(o)}resumeFollowing(){!this.followPending||!this.motionEnabled||!this.followTarget||this.stayHome||this.stage().ownerDocument.hidden||this.pointer!==void 0||[`dragging`,`falling`,`recovering`,`returning`].includes(this.physics.state)||[`danger`,`warn`,`info`].includes(this.physics.mood)||this.orb().nativeElement.matches(`:focus-visible`)||(this.followPending=!1,this.guideInterrupted=!1,this.guide.focus(this.followTarget),this.physics.guideTarget=void 0,(this.physics.state===`asleep`||this.physics.state===`coasting`)&&this.physics.fly(),this.start())}clearFollow(){this.followTimer!==void 0&&this.view?.clearTimeout(this.followTimer),this.followTimer=void 0,this.followPending=!1}start(t=!1){!this.view||this.stopFrame||!this.visible||this.stage().ownerDocument.hidden||!t&&(!this.motionEnabled||this.physics.state===`asleep`&&this.lightLevel===0)||(this.stopFrame=$r((n,e)=>(this.tick(e),this.motionEnabled||this.stop(),!!this.stopFrame)))}stop(){this.stopFrame?.(),this.stopFrame=void 0,this.lastTime=void 0}clearWake(){this.wakeTimer!==void 0&&this.view?.clearTimeout(this.wakeTimer),this.wakeTimer=void 0}scheduleWake(){this.stayHome||this.wakeTimer!==void 0||!this.motionEnabled||!this.visible||!this.homeVisible||this.stage().ownerDocument.hidden||(this.wakeTimer=this.view?.setTimeout(()=>{this.wakeTimer=void 0,this.wake()},4500))}paint(t,n=!1){if(!this.pose||!this.shadowPose)return;let e=this.physics,i=n||t-this.lastLight>=(e.state===`dragging`||e.state===`falling`?50:80);if(i){let u=this.colors[e.mood],S=!this.motionEnabled||e.state===`asleep`&&this.lightLevel===0?1:.35;this.rgb=this.rgb.map((f,g)=>f+(u[g]-f)*S),this.color=`rgb(${this.rgb.map(Math.round).join(` `)})`}let o=e.contact,p=e.scaleX<1?T*(1-e.scaleX)*(o===`left`?-1:o===`right`?1:0):0,x=e.scaleY<1?T*(1-e.scaleY)*(o===`top`?-1:o===`bottom`?1:0):0,C={transform:`translate3d(${e.x-T+p}px, ${e.y-T+x}px, 0) rotate(${e.stretchAngle}rad) scale(${e.scaleX}, ${e.scaleY}) rotate(${e.angle-e.stretchAngle}rad)`},_=C.transform;if(_!==this.lastPose&&(this.lastPose=_,this.pose.effect.setKeyframes([C,C])),this.colorPose&&this.color!==this.lastColor){this.lastColor=this.color;let u={color:this.color};this.colorPose.effect.setKeyframes([u,u])}if(this.chargePose&&(Math.abs(this.lightLevel-this.lastCharge)>.002||this.lightLevel===0&&this.lastCharge!==0)){this.lastCharge=this.lightLevel;let u={opacity:this.lightLevel};this.chargePose.effect.setKeyframes([u,u])}if(t-this.lastRibbon>=40&&this.lightLevel>.002){this.lastRibbon=t;let u=e.mood===`danger`?3.4:e.mood===`info`?.65:e.mood===`warn`?1.9:1.1,S=e.mood===`danger`?1.3:e.mood===`info`?.65:1,f=this.ribbonPath(this.ribbonTime*u,0,S);this.ribbonCore().nativeElement.setAttribute(`d`,f),this.ribbonGlow().nativeElement.setAttribute(`d`,f),this.ribbonTail().nativeElement.setAttribute(`d`,this.ribbonPath(this.ribbonTime*u*.8,2.4,S*.8))}let b=Math.max(0,this.floor-e.y),v={transform:`translate3d(${e.x-26}px, ${this.floor+T-6}px, 0) scale(${1+Math.min(b,180)/150})`,opacity:e.state===`asleep`?0:Math.max(0,.22-b/650)},P=v.opacity<.002?`hidden`:`${v.transform}:${v.opacity.toFixed(2)}`;P!==this.lastShadow&&(this.lastShadow=P,this.shadowPose.effect.setKeyframes([v,v]));let H=e.state;if(this.state()!==H&&this.state.set(H),this.mood()!==e.mood&&this.mood.set(e.mood),e.impactSerial!==this.lastImpact&&(this.lastImpact=e.impactSerial,this.motionEnabled)){let u={left:0,right:1,top:2,bottom:3}[e.impactWall],S=this.impact().nativeElement.children[u];this.impactAnimation?.cancel(),this.impactAnimation=S.animate([{backgroundColor:this.color,opacity:.8},{backgroundColor:this.color,opacity:0}],{duration:420,easing:`ease-out`})}if(!i)return;this.lastLight=t;let k=`${this.originX}:${this.originY}:${e.x.toFixed(1)}:${e.y.toFixed(1)}:${e.angle.toFixed(2)}:${this.color}:${this.lightLevel.toFixed(3)}:${e.mood}`;k!==this.lastScene&&(this.lastScene=k,this.scene?.update({reuseGeometry:!0,lights:this.lightLevel===0?[]:[{x:this.originX+e.x,y:this.originY+e.y+T+9,z:30,color:this.color,intensity:this.lightLevel*(e.mood===`danger`?1.5:1.15),radius:e.state===`asleep`?140:280}]}))}ribbonPath(t,n,e){let i=t*.32+n,o=.55+Math.sin(t*.31+n)*.35,p=Math.cos(i),x=Math.sin(i),C=Math.cos(o),_=Math.sin(o),b=ft.map(({u,cos:S,sin:f})=>{let g=15+Math.sin(u*3-t*.65+n)*1.8,O=S*g,B=Math.sin(u*2+t*.4+n)*(4+e*1.6),w=f*g,A=O*p+w*x,G=w*p-O*x,ot=B*C-G*_,Ee=B*_+G*C,we=55/(55-Ee);return{x:30+A*we,y:30+ot*we,width:(.75+(Ee+20)/40*1.9)*e}}),v=b.map((u,S)=>{let f=b[Math.max(0,S-1)],g=b[Math.min(b.length-1,S+1)],O=Math.hypot(g.x-f.x,g.y-f.y)||1;return{x:u.x-(g.y-f.y)/O*u.width,y:u.y+(g.x-f.x)/O*u.width}}),P=b.map((u,S)=>{let f=b[Math.max(0,S-1)],g=b[Math.min(b.length-1,S+1)],O=Math.hypot(g.x-f.x,g.y-f.y)||1;return{x:u.x+(g.y-f.y)/O*u.width,y:u.y-(g.x-f.x)/O*u.width}}).reverse(),H=[...v,...P],k=`M${H[0].x.toFixed(2)} ${H[0].y.toFixed(2)}`;for(let u=1;u<H.length;u++){let S=H[u-1],f=H[u];k+=`Q${S.x.toFixed(2)} ${S.y.toFixed(2)} ${((S.x+f.x)/2).toFixed(2)} ${((S.y+f.y)/2).toFixed(2)}`}return k+`Z`}static ɵfac=function(n){return new(n||h)};static ɵcmp=Fr({type:h,selectors:[[`app-light-orb`]],viewQuery:function(n,e){n&1&&Yy(e.orb,at,5)(e.plane,st,5)(e.shadow,lt,5)(e.impact,ct,5)(e.charge,dt,5)(e.ribbonCore,pt,5)(e.ribbonGlow,mt,5)(e.ribbonTail,ht,5)(e.probes,gt,5),n&2&&fb(9)},inputs:{stage:[1,`stage`],cards:[1,`cards`]},decls:47,vars:13,consts:[[`plane`,``],[`impact`,``],[`shadow`,``],[`orb`,``],[`charge`,``],[`ribbonGlow`,``],[`ribbonTail`,``],[`ribbonCore`,``],[`probes`,``],[1,`orb-controls`],[`size`,`xl`,1,`orb-controls-content`],[`placement`,`top`,1,`orb-home-action`,3,`bxTooltip`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`type`,`button`,`aria-label`,`Bring Orby home`,1,`orb-home`,3,`click`,`disabled`],[`name`,`house`,`size`,`16`],[1,`orb-plane`],[`aria-hidden`,`true`,1,`orb-impact-layer`],[1,`orb-impact`,`orb-impact-left`],[1,`orb-impact`,`orb-impact-right`],[1,`orb-impact`,`orb-impact-top`],[1,`orb-impact`,`orb-impact-bottom`],[`aria-hidden`,`true`,1,`orb-shadow`],[`type`,`button`,`aria-label`,`Your theme's little light. Hover to wake, drag to throw, or press Enter to play. Arrow keys move it; Escape sends it home.`,`aria-describedby`,`orb-instructions`,1,`light-orb`,3,`click`,`keydown`],[`aria-hidden`,`true`,1,`orb-body`],[`aria-hidden`,`true`,1,`orb-charge`],[1,`orb-halo`],[1,`orb-volume`],[1,`orb-rim`],[`viewBox`,`0 0 60 60`,1,`orb-ribbons`],[`id`,`orb-liquid-light`,`x1`,`0`,`y1`,`0`,`x2`,`1`,`y2`,`0`],[`offset`,`0`,`stop-color`,`currentColor`,`stop-opacity`,`0`],[`offset`,`0.28`,`stop-color`,`currentColor`,`stop-opacity`,`0.65`],[`offset`,`0.53`,`stop-color`,`currentColor`,`stop-opacity`,`1`],[`offset`,`0.8`,`stop-color`,`currentColor`,`stop-opacity`,`0.55`],[`offset`,`1`,`stop-color`,`currentColor`,`stop-opacity`,`0`],[`fill`,`url(#orb-liquid-light)`,1,`ribbon`,`ribbon-glow`],[`fill`,`url(#orb-liquid-light)`,1,`ribbon`,`ribbon-tail`],[`fill`,`url(#orb-liquid-light)`,1,`ribbon`,`ribbon-core`],[`aria-hidden`,`true`,1,`orb-glint`],[`aria-hidden`,`true`,1,`orb-color-probes`],[2,`color`,`var(--bx-primary)`],[2,`color`,`var(--bx-text-success)`],[2,`color`,`var(--bx-text-warn)`],[2,`color`,`var(--bx-text-danger)`],[2,`color`,`var(--bx-text-info)`]],template:function(n,e){n&1&&(bo(0,`div`,9)(1,`bx-container`,10)(2,`span`,11)(3,`button`,12),br(`click`,function(){return e.bringHome()}),sd(4,`bx-icon`,13),bo(5,`span`),lA(6,`Bring Orby home`),Go()()()()(),bo(7,`div`,14,0)(9,`span`,15,1),sd(11,`span`,16)(12,`span`,17)(13,`span`,18)(14,`span`,19),Go(),sd(15,`span`,20,2),bo(17,`button`,21,3),br(`click`,function(o){return e.toss(o)})(`keydown`,function(o){return e.keydown(o)}),sd(19,`span`,22),bo(20,`span`,23,4),sd(22,`span`,24)(23,`span`,25)(24,`span`,26),Wv(),bo(25,`svg`,27)(26,`defs`)(27,`linearGradient`,28),sd(28,`stop`,29)(29,`stop`,30)(30,`stop`,31)(31,`stop`,32)(32,`stop`,33),Go()(),sd(33,`path`,34,5)(35,`path`,35,6)(37,`path`,36,7),Go()(),Yv(),sd(39,`span`,37),Go()(),bo(40,`span`,38,8),sd(42,`i`,39)(43,`i`,40)(44,`i`,41)(45,`i`,42)(46,`i`,43),Go()),n&2&&(ka(`inline-size`,e.controlsWidth(),`px`),vo(`data-bx-reduced-motion`,e.isReducedMotion()),Xl(2),tr(`is-visible`,!e.isOrbHome()),xo(`bxTooltip`,e.mood()===`danger`?`The orb needs a moment to cool down before returning to its pod.`:`Bring the orb back to its pod.`),vo(`inert`,e.isOrbHome()?``:null)(`aria-hidden`,e.isOrbHome()),Xl(),xo(`disabled`,e.isOrbHome()||e.mood()===`danger`),Xl(4),tr(`orb-ready`,e.ready()),Xl(10),vo(`data-state`,e.state())(`data-mood`,e.mood()))},dependencies:[Ji,Pt,_e$1,ZC],styles:[`
[_nghost-%COMP%] {
  display: contents;
}
.orb-controls[_ngcontent-%COMP%] {
  max-inline-size: 100%;
  position: absolute;
  inset-block-start: calc(var(--%NS%bx-page-padding-block, clamp(var(--%NS%bx-space-4, 1rem), 3vw, var(--%NS%bx-space-10, 2.5rem))) + var(--%NS%bx-space-4, 1rem));
  inset-inline: 0;
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: var(--%NS%bx-space-3, 0.75rem);
  min-height: var(--%NS%bx-space-8, 2rem);
  margin-top: 0;
  flex: 1 1 auto;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
}
.orb-controls-content[_ngcontent-%COMP%] {
  --%NS%bx-container-padding: var(--%NS%bx-page-padding-inline, clamp(var(--%NS%bx-space-4, 1rem), 3vw, var(--%NS%bx-space-10, 2.5rem)));
  display: flex;
  justify-content: flex-end;
}
.mood-dot[_ngcontent-%COMP%] {
  flex: none;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--%NS%bx-primary);
}
.mood-dot[data-mood=success][_ngcontent-%COMP%] {
  background: var(--%NS%bx-text-success);
}
.mood-dot[data-mood=warn][_ngcontent-%COMP%] {
  background: var(--%NS%bx-text-warn);
}
.mood-dot[data-mood=danger][_ngcontent-%COMP%] {
  background: var(--%NS%bx-text-danger);
}
.mood-dot[data-mood=info][_ngcontent-%COMP%] {
  background: var(--%NS%bx-text-info);
}
.orb-home-action[_ngcontent-%COMP%] {
  display: inline-flex;
  flex: none;
  margin-left: auto;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(4px);
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    visibility 0s linear 180ms;
}
.orb-home-action.is-visible[_ngcontent-%COMP%] {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
  transition-delay: 0s;
}
.orb-controls[data-bx-reduced-motion=true][_ngcontent-%COMP%]   .orb-home-action[_ngcontent-%COMP%] {
  transition: none;
  transform: none;
}
.orb-plane[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: clip;
  border-radius: var(--%NS%orb-garden-radius, 1.5rem);
  pointer-events: none;
  visibility: hidden;
}
.orb-plane.orb-ready[_ngcontent-%COMP%] {
  visibility: visible;
}
.light-orb[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 52px;
  height: 52px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--%NS%bx-primary);
  cursor: grab;
  pointer-events: auto;
  touch-action: none;
  -webkit-user-select: none;
  user-select: none;
  will-change: transform;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1019607843);
}
.light-orb[data-state=dragging][_ngcontent-%COMP%] {
  cursor: grabbing;
}
.light-orb[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-text-primary);
  outline-offset: 5px;
}
.orb-charge[_ngcontent-%COMP%], 
.orb-body[_ngcontent-%COMP%], 
.orb-halo[_ngcontent-%COMP%], 
.orb-rim[_ngcontent-%COMP%], 
.orb-glint[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
}
.orb-body[_ngcontent-%COMP%] {
  background:
    radial-gradient(
      ellipse at 28% 20%,
      rgba(255, 255, 255, 0.3333333333),
      rgba(255, 255, 255, 0) 48%),
    radial-gradient(
      ellipse at 65% 90%,
      rgba(0, 0, 0, 0.0784313725),
      rgba(0, 0, 0, 0) 62%),
    color-mix(in srgb, var(--%NS%bx-bg-surface) 15%, transparent);
  box-shadow: inset 1px 1px 2px rgba(255, 255, 255, 0.4), inset -2px -2px 5px rgba(0, 0, 0, 0.0941176471);
  -webkit-backdrop-filter: blur(5px) saturate(1.2);
  backdrop-filter: blur(5px) saturate(1.2);
}
.orb-rim[_ngcontent-%COMP%] {
  box-sizing: border-box;
  border: 1px solid color-mix(in srgb, currentcolor 35%, transparent);
  box-shadow:
    inset 0 1px 2px rgba(255, 255, 255, 0.2),
    inset 0 -1px 2px color-mix(in srgb, currentcolor 20%, transparent),
    inset 0 0 0 0.5px rgba(255, 255, 255, 0.1019607843);
}
.orb-halo[_ngcontent-%COMP%] {
  inset: -9px;
  background:
    radial-gradient(
      circle,
      color-mix(in srgb, currentcolor 34%, transparent) 0%,
      color-mix(in srgb, currentcolor 22%, transparent) 32%,
      transparent 72%);
  opacity: 0.55;
}
.light-orb[data-mood=danger][_ngcontent-%COMP%]   .orb-halo[_ngcontent-%COMP%] {
  opacity: 0.8;
}
.orb-glint[_ngcontent-%COMP%] {
  inset: 6px 15px 33px 11px;
  background:
    radial-gradient(
      ellipse,
      rgba(255, 255, 255, 0.5333333333) 0%,
      rgba(255, 255, 255, 0.2666666667) 38%,
      transparent 76%);
  transform: rotate(-30deg);
}
.orb-ribbons[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: inherit;
  pointer-events: none;
}
.ribbon[_ngcontent-%COMP%] {
  stroke-linejoin: round;
}
.ribbon-core[_ngcontent-%COMP%] {
  opacity: 0.8;
}
.ribbon-glow[_ngcontent-%COMP%] {
  opacity: 0.22;
  stroke: currentcolor;
  stroke-width: 3px;
  stroke-opacity: 0.3;
}
.ribbon-tail[_ngcontent-%COMP%] {
  opacity: 0.25;
}
.orb-shadow[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  width: 52px;
  height: 8px;
  border-radius: 50%;
  background:
    radial-gradient(
      ellipse,
      #000000,
      rgba(0, 0, 0, 0) 70%);
  pointer-events: none;
}
.orb-impact-layer[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  overflow: hidden;
  pointer-events: none;
}
.orb-impact[_ngcontent-%COMP%] {
  position: absolute;
  pointer-events: none;
  opacity: 0;
}
.orb-impact-left[_ngcontent-%COMP%] {
  inset: 0 auto 0 0;
  width: 10px;
  -webkit-mask-image:
    linear-gradient(
      to right,
      black,
      transparent);
  mask-image:
    linear-gradient(
      to right,
      black,
      transparent);
}
.orb-impact-right[_ngcontent-%COMP%] {
  inset: 0 0 0 auto;
  width: 10px;
  -webkit-mask-image:
    linear-gradient(
      to left,
      black,
      transparent);
  mask-image:
    linear-gradient(
      to left,
      black,
      transparent);
}
.orb-impact-top[_ngcontent-%COMP%] {
  inset: 0 0 auto;
  height: 10px;
  -webkit-mask-image:
    linear-gradient(
      to bottom,
      black,
      transparent);
  mask-image:
    linear-gradient(
      to bottom,
      black,
      transparent);
}
.orb-impact-bottom[_ngcontent-%COMP%] {
  inset: auto 0 0;
  height: 10px;
  -webkit-mask-image:
    linear-gradient(
      to top,
      black,
      transparent);
  mask-image:
    linear-gradient(
      to top,
      black,
      transparent);
}
.orb-color-probes[_ngcontent-%COMP%] {
  display: none;
}
@media (prefers-reduced-transparency: reduce), (forced-colors: active) {
  .orb-body[_ngcontent-%COMP%] {
    background: var(--%NS%bx-bg-surface);
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
}
.orb-volume[_ngcontent-%COMP%] {
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background:
    radial-gradient(
      ellipse at 40% 58%,
      color-mix(in srgb, currentcolor 32%, transparent),
      transparent 68%),
    radial-gradient(
      ellipse at 62% 40%,
      color-mix(in srgb, currentcolor 24%, transparent),
      transparent 62%);
}
@media (max-width: 768px) {
  .orb-controls[_ngcontent-%COMP%] {
    position: fixed;
    inset-block: auto var(--%NS%bx-space-4, 1rem);
    inset-inline: 0;
  }
}`]})};var me=class h{nativeElement=b(ke).nativeElement;bxA11yService=b(Br);destroyRef=b(ge$1);ngZone=b(le$2);poses=[];motion;hovered=!1;focused=!1;visible=!1;constructor(){er(()=>this.ngZone.runOutsideAngular(()=>this.connect())),We(()=>{this.bxA11yService.isReducedMotion(),this.ngZone.runOutsideAngular(()=>this.sync())}),this.destroyRef.onDestroy(()=>{this.motion?.destroy(),this.poses.forEach(t=>t.cancel())})}connect(){let t=this.nativeElement.ownerDocument,n=this.nativeElement.closest(`a`)??this.nativeElement,e=this.nativeElement.querySelector(`.cover-panel-ring`);if(!e)return;let i=new AbortController;[e,...e.querySelectorAll(`.cover-panel`)].forEach(x=>{let C=x.animate([{transform:`none`}],{duration:1,fill:`both`});C.pause(),C.currentTime=0,this.poses.push(C)}),this.motion=Zn([0],([x])=>{this.poses.forEach((C,_)=>{let b=_===0?`rotate(${x*18}deg) scale(${1-x*.12})`:`rotate(${-x*8}deg) scale(${1-x*.05})`;C.effect.setKeyframes([{transform:b},{transform:b}])})},vr.soft),n.addEventListener(`pointerenter`,x=>{x.pointerType!==`touch`&&(this.hovered=!0,this.sync())},{signal:i.signal}),n.addEventListener(`pointerleave`,()=>{this.hovered=!1,this.sync()},{signal:i.signal}),n.addEventListener(`focus`,()=>{this.focused=!0,this.sync()},{signal:i.signal}),n.addEventListener(`blur`,()=>{this.focused=!1,this.sync()},{signal:i.signal}),t.addEventListener(`visibilitychange`,()=>this.sync(),{signal:i.signal});let p=new IntersectionObserver(([x])=>{this.visible=x.isIntersecting,this.sync()});p.observe(this.nativeElement),this.destroyRef.onDestroy(()=>{p.disconnect(),i.abort()})}sync(){let t=this.bxA11yService.isReducedMotion(),n=!this.visible||this.nativeElement.ownerDocument.hidden;this.motion?.retarget([!t&&!n&&(this.hovered||this.focused)?1:0],t||n)}static ɵfac=function(n){return new(n||h)};static ɵcmp=Fr({type:h,selectors:[[`app-figma-library-preview`]],hostAttrs:[`aria-hidden`,`true`],decls:281,vars:0,consts:[[`xmlns`,`http://www.w3.org/2000/svg`,`width`,`1920`,`height`,`1080`,`viewBox`,`0 0 1920 1080`,`fill`,`none`],[`clip-path`,`url(#clip0_49_2015)`],[`width`,`1920`,`height`,`1080`,`fill`,`url(#paint0_linear_49_2015)`],[`clip-path`,`url(#clip1_49_2015)`,1,`cover-panel-ring`],[`filter`,`url(#filter0_dd_49_2015)`,1,`cover-panel`],[`x`,`1765.62`,`y`,`294.989`,`width`,`453.595`,`height`,`323.985`,`rx`,`49.6216`,`transform`,`rotate(31.1876 1765.62 294.989)`,`fill`,`url(#paint1_linear_49_2015)`,`shape-rendering`,`crispEdges`],[`x`,`1765.62`,`y`,`294.989`,`width`,`453.595`,`height`,`323.985`,`rx`,`49.6216`,`transform`,`rotate(31.1876 1765.62 294.989)`,`fill`,`#E2E2E0`,`fill-opacity`,`0.38`,`shape-rendering`,`crispEdges`],[`x`,`1765.94`,`y`,`296.292`,`width`,`451.698`,`height`,`322.088`,`rx`,`48.673`,`transform`,`rotate(31.1876 1765.94 296.292)`,`stroke`,`url(#paint2_linear_49_2015)`,`stroke-width`,`1.8973`,`shape-rendering`,`crispEdges`],[`filter`,`url(#filter1_dd_49_2015)`,1,`cover-panel`],[`x`,`2117.01`,`y`,`609.562`,`width`,`453.595`,`height`,`323.985`,`rx`,`49.6216`,`transform`,`rotate(91.1875 2117.01 609.562)`,`fill`,`url(#paint3_linear_49_2015)`,`shape-rendering`,`crispEdges`],[`x`,`2117.01`,`y`,`609.562`,`width`,`453.595`,`height`,`323.985`,`rx`,`49.6216`,`transform`,`rotate(91.1875 2117.01 609.562)`,`fill`,`#64ADD4`,`fill-opacity`,`0.38`,`shape-rendering`,`crispEdges`],[`x`,`2116.04`,`y`,`610.491`,`width`,`451.698`,`height`,`322.088`,`rx`,`48.673`,`transform`,`rotate(91.1875 2116.04 610.491)`,`stroke`,`url(#paint4_linear_49_2015)`,`stroke-width`,`1.8973`,`shape-rendering`,`crispEdges`],[`filter`,`url(#filter2_dd_49_2015)`,1,`cover-panel`],[`x`,`2020.27`,`y`,`1071.16`,`width`,`453.595`,`height`,`323.985`,`rx`,`49.6216`,`transform`,`rotate(151.188 2020.27 1071.16)`,`fill`,`url(#paint5_linear_49_2015)`,`shape-rendering`,`crispEdges`],[`x`,`2020.27`,`y`,`1071.16`,`width`,`453.595`,`height`,`323.985`,`rx`,`49.6216`,`transform`,`rotate(151.188 2020.27 1071.16)`,`fill`,`#78CA87`,`fill-opacity`,`0.38`,`shape-rendering`,`crispEdges`],[`x`,`2018.98`,`y`,`1070.79`,`width`,`451.698`,`height`,`322.088`,`rx`,`48.673`,`transform`,`rotate(151.188 2018.98 1070.79)`,`stroke`,`url(#paint6_linear_49_2015)`,`stroke-width`,`1.8973`,`shape-rendering`,`crispEdges`],[`filter`,`url(#filter3_dd_49_2015)`,1,`cover-panel`],[`x`,`1572.15`,`y`,`1218.19`,`width`,`453.595`,`height`,`323.985`,`rx`,`49.6216`,`transform`,`rotate(-148.812 1572.15 1218.19)`,`fill`,`url(#paint7_linear_49_2015)`,`shape-rendering`,`crispEdges`],[`x`,`1572.15`,`y`,`1218.19`,`width`,`453.595`,`height`,`323.985`,`rx`,`49.6216`,`transform`,`rotate(-148.812 1572.15 1218.19)`,`fill`,`#6C99FF`,`fill-opacity`,`0.38`,`shape-rendering`,`crispEdges`],[`x`,`1571.83`,`y`,`1216.88`,`width`,`451.698`,`height`,`322.088`,`rx`,`48.673`,`transform`,`rotate(-148.812 1571.83 1216.88)`,`stroke`,`url(#paint8_linear_49_2015)`,`stroke-width`,`1.8973`,`shape-rendering`,`crispEdges`],[`filter`,`url(#filter4_dd_49_2015)`,1,`cover-panel`],[`x`,`1220.76`,`y`,`903.612`,`width`,`453.595`,`height`,`323.985`,`rx`,`49.6216`,`transform`,`rotate(-88.8125 1220.76 903.612)`,`fill`,`url(#paint9_linear_49_2015)`,`shape-rendering`,`crispEdges`],[`x`,`1220.76`,`y`,`903.612`,`width`,`453.595`,`height`,`323.985`,`rx`,`49.6216`,`transform`,`rotate(-88.8125 1220.76 903.612)`,`fill`,`#E4B870`,`fill-opacity`,`0.38`,`shape-rendering`,`crispEdges`],[`x`,`1221.73`,`y`,`902.684`,`width`,`451.698`,`height`,`322.088`,`rx`,`48.673`,`transform`,`rotate(-88.8125 1221.73 902.684)`,`stroke`,`url(#paint10_linear_49_2015)`,`stroke-width`,`1.8973`,`shape-rendering`,`crispEdges`],[`filter`,`url(#filter5_dd_49_2015)`,1,`cover-panel`],[`x`,`1317.49`,`y`,`442.014`,`width`,`453.595`,`height`,`323.985`,`rx`,`49.6216`,`transform`,`rotate(-28.8125 1317.49 442.014)`,`fill`,`url(#paint11_linear_49_2015)`,`shape-rendering`,`crispEdges`],[`x`,`1317.49`,`y`,`442.014`,`width`,`453.595`,`height`,`323.985`,`rx`,`49.6216`,`transform`,`rotate(-28.8125 1317.49 442.014)`,`fill`,`#D47891`,`fill-opacity`,`0.38`,`shape-rendering`,`crispEdges`],[`x`,`1318.78`,`y`,`442.388`,`width`,`451.698`,`height`,`322.088`,`rx`,`48.673`,`transform`,`rotate(-28.8125 1318.78 442.388)`,`stroke`,`url(#paint12_linear_49_2015)`,`stroke-width`,`1.8973`,`shape-rendering`,`crispEdges`],[`d`,`M191.743 375.033H544.378V727.333H191.743V375.033Z`,`fill`,`url(#paint13_radial_49_2015)`],[`filter`,`url(#filter6_f_49_2015)`],[`d`,`M484.045 391.703L221.837 419.236C209.425 420.539 200.42 431.649 201.724 444.049L227.709 691.04C229.013 703.44 240.133 712.436 252.546 711.133L514.754 683.6C527.166 682.296 536.171 671.188 534.866 658.786L508.882 411.796C507.577 399.396 496.457 390.399 484.045 391.703Z`,`fill`,`var(--blocks-logo-shadow)`,`fill-opacity`,`0.48`],[`d`,`M484.045 391.703L221.837 419.236C209.425 420.539 200.42 431.649 201.724 444.049L227.709 691.04C229.013 703.44 240.133 712.436 252.546 711.133L514.754 683.6C527.166 682.296 536.171 671.188 534.866 658.786L508.882 411.796C507.577 399.396 496.457 390.399 484.045 391.703Z`,`fill`,`url(#paint14_linear_49_2015)`,`stroke-width`,`0.968944`,`stroke`,`url(#paint15_linear_49_2015)`],[`id`,`mask0_49_2015`,`maskUnits`,`userSpaceOnUse`,`x`,`201`,`y`,`391`,`width`,`334`,`height`,`321`,2,`mask-type`,`luminance`],[`d`,`M484.045 391.703L221.837 419.236C209.425 420.539 200.42 431.649 201.724 444.049L227.709 691.04C229.013 703.44 240.133 712.436 252.546 711.133L514.754 683.6C527.166 682.296 536.171 671.188 534.866 658.786L508.882 411.796C507.577 399.396 496.457 390.399 484.045 391.703Z`,`fill`,`white`],[`mask`,`url(#mask0_49_2015)`],[`d`,`M506.52 389.343L199.362 421.596L230.071 713.493L537.229 681.24L506.52 389.343Z`,`fill`,`url(#paint16_radial_49_2015)`],[`filter`,`url(#filter7_f_49_2015)`],[`d`,`M364.433 510.204C381.658 516.435 406.991 514.248 427.915 501.646`,`stroke-width`,`20.6708`,`stroke-linecap`,`round`,`stroke`,`var(--blocks-logo-color)`,`stroke-opacity`,`0.1`],[`d`,`M364.433 510.204C381.658 516.435 406.991 514.248 427.915 501.646`,`stroke-width`,`4.19876`,`stroke-linecap`,`round`,`stroke`,`url(#paint17_linear_49_2015)`],[`d`,`M367.884 507.004C384.541 512.349 406.499 509.57 424.712 498.199`,`stroke-width`,`0.807453`,`stroke-linecap`,`round`,`stroke`,`color-mix(in srgb, var(--blocks-logo-color) 8%, var(--blocks-logo-specular))`,`stroke-opacity`,`0.72`],[`d`,`M220.278 462.911C294.484 425.796 397.939 410.203 483.917 421.985`,`stroke-width`,`0.807453`,`stroke`,`url(#paint18_linear_49_2015)`],[`d`,`M226.536 468.402C292.757 436.382 381.697 422.314 453.358 428.504`,`stroke-width`,`0.387578`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.12`],[`d`,`M266.845 676.052C340.206 684.902 437.721 671.352 504.608 641.154`,`stroke-width`,`0.452174`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.1`],[`d`,`M222.65 422.461L483.921 395.026C494.782 393.886 504.512 401.758 505.654 412.608L531.54 658.663C532.681 669.513 524.802 679.234 513.941 680.375L252.67 707.809C241.809 708.95 232.079 701.078 230.937 690.228L205.051 444.173C203.91 433.322 211.789 423.602 222.65 422.461Z`,`stroke-width`,`0.387578`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.18`],[`id`,`mask1_49_2015`,`maskUnits`,`userSpaceOnUse`,`x`,`204`,`y`,`394`,`width`,`328`,`height`,`314`,2,`mask-type`,`alpha`],[`d`,`M483.921 395.027L222.65 422.461C211.789 423.602 203.91 433.322 205.051 444.173L230.937 690.228C232.079 701.078 241.809 708.95 252.67 707.809L513.941 680.375C524.802 679.234 532.681 669.514 531.54 658.663L505.654 412.608C504.512 401.758 494.782 393.886 483.921 395.027Z`,`fill`,`#D9D9D9`],[`mask`,`url(#mask1_49_2015)`],[`filter`,`url(#filter8_f_49_2015)`],[`d`,`M429.501 521.785C469.023 521.785 501.063 489.776 501.063 450.29C501.063 410.805 469.023 378.795 429.501 378.795C389.977 378.795 357.938 410.805 357.938 450.29C357.938 489.776 389.977 521.785 429.501 521.785Z`,`fill`,`var(--blocks-logo-color)`,`fill-opacity`,`0.1`],[`d`,`M429.501 506.263C460.443 506.263 485.527 481.204 485.527 450.291C485.527 419.378 460.443 394.317 429.501 394.317C398.558 394.317 373.475 419.378 373.475 450.291C373.475 481.204 398.558 506.263 429.501 506.263Z`,`fill`,`url(#paint19_radial_49_2015)`,`stroke-width`,`1.13043`,`stroke`,`url(#paint20_linear_49_2015)`],[`d`,`M480.348 450.291C480.348 478.346 457.582 501.09 429.501 501.09C401.418 501.09 378.653 478.346 378.653 450.291C378.653 422.235 401.418 399.491 429.501 399.491C457.582 399.491 480.348 422.235 480.348 450.291Z`,`stroke-width`,`0.387578`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.22`],[`d`,`M424.793 489.331C446.374 489.331 463.87 473.536 463.87 454.054C463.87 434.57 446.374 418.776 424.793 418.776C403.211 418.776 385.716 434.57 385.716 454.054C385.716 473.536 403.211 489.331 424.793 489.331Z`,`fill`,`url(#paint21_radial_49_2015)`],[`filter`,`url(#filter9_f_49_2015)`],[`d`,`M389.482 457.816C400.781 435.239 417.26 424.421 432.325 432.417C445.037 439.472 452.099 455.935 469.048 448.409`,`stroke-width`,`10.9814`,`stroke-linecap`,`round`,`stroke`,`var(--blocks-logo-color)`,`stroke-opacity`,`0.74`],[`d`,`M389.482 457.816C400.781 435.239 417.26 424.421 432.325 432.417C445.037 439.472 452.099 455.935 469.048 448.409`,`stroke-width`,`3.87578`,`stroke-linecap`,`round`,`stroke`,`url(#paint22_linear_49_2015)`],[`d`,`M393.719 455.465C403.606 438.061 417.73 430.065 429.501 436.65C440.8 442.765 447.862 455.935 461.516 450.291`,`stroke-width`,`0.775155`,`stroke-linecap`,`round`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.86`],[`d`,`M395.602 427.243C404.077 416.895 416.789 410.78 429.501 409.369`,`stroke-width`,`1.61491`,`stroke-linecap`,`round`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.7`],[`d`,`M397.957 430.535C404.077 424.421 411.139 420.187 418.201 417.836`,`stroke-width`,`0.645963`,`stroke-linecap`,`round`,`stroke`,`var(--blocks-logo-specular)`,`stroke-opacity`,`0.52`],[`d`,`M405.96 421.363C407.13 421.363 408.079 420.416 408.079 419.247C408.079 418.077 407.13 417.13 405.96 417.13C404.79 417.13 403.842 418.077 403.842 419.247C403.842 420.416 404.79 421.363 405.96 421.363Z`,`fill`,`var(--blocks-logo-specular)`,`fill-opacity`,`0.86`],[`d`,`M697.276 489.114H655.499L655.274 467.327H691.1C697.239 467.327 702.368 466.466 706.485 464.744C710.603 463.022 713.71 460.514 715.807 457.22C717.978 453.925 719.063 449.92 719.063 445.203C719.063 439.962 718.053 435.695 716.031 432.4C714.085 429.106 711.015 426.71 706.822 425.213C702.63 423.641 697.314 422.854 690.875 422.854H665.494V562H634.61V398.484H690.875C700.159 398.484 708.432 399.383 715.694 401.18C723.032 402.902 729.246 405.597 734.337 409.266C739.428 412.934 743.284 417.539 745.904 423.079C748.6 428.619 749.947 435.208 749.947 442.845C749.947 449.583 748.375 455.797 745.23 461.487C742.161 467.103 737.407 471.67 730.968 475.188C724.604 478.707 716.518 480.729 706.71 481.253L697.276 489.114ZM695.929 562H646.402L659.317 537.742H695.929C702.068 537.742 707.122 536.731 711.09 534.71C715.133 532.688 718.128 529.918 720.074 526.399C722.096 522.806 723.106 518.688 723.106 514.046C723.106 508.955 722.208 504.537 720.411 500.794C718.689 497.05 715.919 494.168 712.101 492.146C708.357 490.125 703.416 489.114 697.276 489.114H665.157L665.382 467.327H706.261L713.336 475.75C722.77 475.825 730.444 477.697 736.358 481.365C742.348 485.034 746.765 489.751 749.61 495.516C752.455 501.281 753.878 507.495 753.878 514.158C753.878 524.64 751.594 533.437 747.027 540.55C742.535 547.662 735.947 553.016 727.262 556.609C718.652 560.203 708.207 562 695.929 562ZM809.806 389.5V562H780.045V389.5H809.806ZM832.828 502.479V500.12C832.828 491.211 834.101 483.012 836.646 475.525C839.192 467.964 842.898 461.412 847.765 455.872C852.631 450.332 858.583 446.027 865.621 442.957C872.659 439.812 880.67 438.24 889.654 438.24C898.788 438.24 906.874 439.812 913.912 442.957C921.025 446.027 927.014 450.332 931.881 455.872C936.747 461.412 940.453 467.964 942.999 475.525C945.545 483.012 946.817 491.211 946.817 500.12V502.479C946.817 511.313 945.545 519.511 942.999 527.073C940.453 534.56 936.747 541.111 931.881 546.727C927.014 552.267 921.062 556.572 914.024 559.642C906.987 562.711 898.938 564.246 889.879 564.246C880.895 564.246 872.846 562.711 865.733 559.642C858.621 556.572 852.631 552.267 847.765 546.727C842.898 541.111 839.192 534.56 836.646 527.073C834.101 519.511 832.828 511.313 832.828 502.479ZM862.477 500.12V502.479C862.477 507.794 863.001 512.773 864.049 517.415C865.097 522.057 866.707 526.137 868.878 529.656C871.049 533.175 873.857 535.945 877.301 537.967C880.82 539.913 885.012 540.887 889.879 540.887C894.671 540.887 898.788 539.913 902.232 537.967C905.676 535.945 908.484 533.175 910.655 529.656C912.901 526.137 914.548 522.057 915.597 517.415C916.645 512.773 917.169 507.794 917.169 502.479V500.12C917.169 494.879 916.645 489.975 915.597 485.408C914.548 480.766 912.901 476.686 910.655 473.167C908.484 469.573 905.639 466.766 902.12 464.744C898.676 462.648 894.521 461.6 889.654 461.6C884.863 461.6 880.745 462.648 877.301 464.744C873.857 466.766 871.049 469.573 868.878 473.167C866.707 476.686 865.097 480.766 864.049 485.408C863.001 489.975 862.477 494.879 862.477 500.12ZM1018.24 540.887C1022.44 540.887 1026.18 540.063 1029.47 538.416C1032.77 536.769 1035.39 534.448 1037.33 531.453C1039.36 528.458 1040.44 524.977 1040.59 521.009H1068.56C1068.41 529.244 1066.08 536.619 1061.59 543.133C1057.1 549.646 1051.11 554.812 1043.62 558.631C1036.21 562.374 1027.9 564.246 1018.69 564.246C1009.33 564.246 1001.17 562.674 994.21 559.529C987.247 556.385 981.445 552.005 976.803 546.39C972.236 540.774 968.792 534.261 966.471 526.849C964.225 519.437 963.102 511.5 963.102 503.04V499.446C963.102 490.986 964.225 483.05 966.471 475.638C968.792 468.226 972.236 461.712 976.803 456.097C981.445 450.481 987.247 446.102 994.21 442.957C1001.17 439.812 1009.3 438.24 1018.58 438.24C1028.39 438.24 1037 440.149 1044.41 443.968C1051.9 447.786 1057.74 453.177 1061.93 460.14C1066.2 467.103 1068.41 475.301 1068.56 484.734H1040.59C1040.44 480.392 1039.47 476.499 1037.67 473.055C1035.88 469.611 1033.33 466.84 1030.04 464.744C1026.74 462.648 1022.74 461.6 1018.02 461.6C1013 461.6 1008.81 462.648 1005.44 464.744C1002.15 466.84 999.563 469.723 997.691 473.392C995.895 476.985 994.622 481.028 993.873 485.521C993.199 489.938 992.862 494.58 992.862 499.446V503.04C992.862 507.981 993.199 512.698 993.873 517.19C994.622 521.683 995.895 525.726 997.691 529.319C999.563 532.838 1002.15 535.646 1005.44 537.742C1008.81 539.839 1013.08 540.887 1018.24 540.887ZM1117.97 389.388V562H1088.32V389.388H1117.97ZM1194.11 440.486L1141.22 499.896L1112.58 528.982L1103.15 505.96L1125.27 478.108L1158.29 440.486H1194.11ZM1163.79 562L1126.17 505.398L1145.93 486.194L1198.16 562H1163.79ZM1276.66 528.758C1276.66 526.212 1275.98 523.929 1274.63 521.907C1273.29 519.886 1270.74 518.051 1267 516.404C1263.33 514.682 1257.94 513.073 1250.83 511.575C1244.54 510.228 1238.73 508.543 1233.42 506.521C1228.1 504.5 1223.54 502.067 1219.72 499.222C1215.9 496.302 1212.9 492.895 1210.73 489.002C1208.64 485.034 1207.59 480.467 1207.59 475.301C1207.59 470.285 1208.67 465.568 1210.85 461.15C1213.02 456.658 1216.16 452.728 1220.28 449.358C1224.4 445.914 1229.41 443.219 1235.33 441.272C1241.24 439.251 1247.91 438.24 1255.32 438.24C1265.65 438.24 1274.52 439.925 1281.93 443.294C1289.42 446.663 1295.15 451.305 1299.12 457.22C1303.09 463.06 1305.07 469.648 1305.07 476.985H1275.42C1275.42 473.766 1274.67 470.846 1273.17 468.226C1271.75 465.605 1269.54 463.509 1266.55 461.937C1263.55 460.289 1259.77 459.466 1255.21 459.466C1251.09 459.466 1247.61 460.14 1244.76 461.487C1241.99 462.835 1239.9 464.594 1238.47 466.766C1237.05 468.937 1236.34 471.333 1236.34 473.953C1236.34 475.9 1236.71 477.659 1237.46 479.231C1238.29 480.729 1239.6 482.114 1241.39 483.387C1243.19 484.66 1245.62 485.82 1248.69 486.868C1251.84 487.916 1255.69 488.927 1260.26 489.9C1269.32 491.697 1277.22 494.093 1283.96 497.088C1290.77 500.008 1296.08 503.901 1299.9 508.768C1303.72 513.634 1305.63 519.848 1305.63 527.41C1305.63 532.801 1304.47 537.742 1302.15 542.234C1299.83 546.652 1296.46 550.507 1292.04 553.802C1287.62 557.096 1282.35 559.679 1276.21 561.551C1270.07 563.348 1263.14 564.246 1255.43 564.246C1244.28 564.246 1234.84 562.262 1227.13 558.294C1219.42 554.251 1213.58 549.16 1209.61 543.021C1205.64 536.806 1203.66 530.368 1203.66 523.704H1232.07C1232.3 528.421 1233.57 532.202 1235.89 535.047C1238.21 537.892 1241.13 539.951 1244.65 541.224C1248.24 542.422 1252.02 543.021 1255.99 543.021C1260.48 543.021 1264.27 542.422 1267.33 541.224C1270.4 539.951 1272.73 538.266 1274.3 536.17C1275.87 533.999 1276.66 531.528 1276.66 528.758Z`,`fill`,`var(--bx-text-heading)`],[`d`,`M641.125 632.531L626.062 674H619.906L637.25 628.5H641.219L641.125 632.531ZM653.75 674L638.656 632.531L638.562 628.5H642.531L659.938 674H653.75ZM652.969 657.156V662.094H627.406V657.156H652.969ZM670.938 647.406V674H665.156V640.188H670.625L670.938 647.406ZM669.562 655.812L667.156 655.719C667.177 653.406 667.521 651.271 668.188 649.312C668.854 647.333 669.792 645.615 671 644.156C672.208 642.698 673.646 641.573 675.312 640.781C677 639.969 678.865 639.562 680.906 639.562C682.573 639.562 684.073 639.792 685.406 640.25C686.74 640.688 687.875 641.396 688.812 642.375C689.771 643.354 690.5 644.625 691 646.188C691.5 647.729 691.75 649.615 691.75 651.844V674H685.938V651.781C685.938 650.01 685.677 648.594 685.156 647.531C684.635 646.448 683.875 645.667 682.875 645.188C681.875 644.688 680.646 644.438 679.188 644.438C677.75 644.438 676.438 644.74 675.25 645.344C674.083 645.948 673.073 646.781 672.219 647.844C671.385 648.906 670.729 650.125 670.25 651.5C669.792 652.854 669.562 654.292 669.562 655.812ZM722.438 640.188H727.688V673.281C727.688 676.26 727.083 678.802 725.875 680.906C724.667 683.01 722.979 684.604 720.812 685.688C718.667 686.792 716.188 687.344 713.375 687.344C712.208 687.344 710.833 687.156 709.25 686.781C707.688 686.427 706.146 685.812 704.625 684.938C703.125 684.083 701.865 682.927 700.844 681.469L703.875 678.031C705.292 679.74 706.771 680.927 708.312 681.594C709.875 682.26 711.417 682.594 712.938 682.594C714.771 682.594 716.354 682.25 717.688 681.562C719.021 680.875 720.052 679.854 720.781 678.5C721.531 677.167 721.906 675.521 721.906 673.562V647.625L722.438 640.188ZM699.156 657.469V656.812C699.156 654.229 699.458 651.885 700.062 649.781C700.688 647.656 701.573 645.833 702.719 644.312C703.885 642.792 705.292 641.625 706.938 640.812C708.583 639.979 710.438 639.562 712.5 639.562C714.625 639.562 716.479 639.938 718.062 640.688C719.667 641.417 721.021 642.49 722.125 643.906C723.25 645.302 724.135 646.99 724.781 648.969C725.427 650.948 725.875 653.188 726.125 655.688V658.562C725.896 661.042 725.448 663.271 724.781 665.25C724.135 667.229 723.25 668.917 722.125 670.312C721.021 671.708 719.667 672.781 718.062 673.531C716.458 674.26 714.583 674.625 712.438 674.625C710.417 674.625 708.583 674.198 706.938 673.344C705.312 672.49 703.917 671.292 702.75 669.75C701.583 668.208 700.688 666.396 700.062 664.312C699.458 662.208 699.156 659.927 699.156 657.469ZM704.938 656.812V657.469C704.938 659.156 705.104 660.74 705.438 662.219C705.792 663.698 706.323 665 707.031 666.125C707.76 667.25 708.688 668.135 709.812 668.781C710.938 669.406 712.281 669.719 713.844 669.719C715.76 669.719 717.344 669.312 718.594 668.5C719.844 667.688 720.833 666.615 721.562 665.281C722.312 663.948 722.896 662.5 723.312 660.938V653.406C723.083 652.26 722.729 651.156 722.25 650.094C721.792 649.01 721.188 648.052 720.438 647.219C719.708 646.365 718.802 645.688 717.719 645.188C716.635 644.688 715.365 644.438 713.906 644.438C712.323 644.438 710.958 644.771 709.812 645.438C708.688 646.083 707.76 646.979 707.031 648.125C706.323 649.25 705.792 650.562 705.438 652.062C705.104 653.542 704.938 655.125 704.938 656.812ZM757.156 666.188V640.188H762.969V674H757.438L757.156 666.188ZM758.25 659.062L760.656 659C760.656 661.25 760.417 663.333 759.938 665.25C759.479 667.146 758.729 668.792 757.688 670.188C756.646 671.583 755.281 672.677 753.594 673.469C751.906 674.24 749.854 674.625 747.438 674.625C745.792 674.625 744.281 674.385 742.906 673.906C741.552 673.427 740.385 672.688 739.406 671.688C738.427 670.688 737.667 669.385 737.125 667.781C736.604 666.177 736.344 664.25 736.344 662V640.188H742.125V662.062C742.125 663.583 742.292 664.844 742.625 665.844C742.979 666.823 743.448 667.604 744.031 668.188C744.635 668.75 745.302 669.146 746.031 669.375C746.781 669.604 747.552 669.719 748.344 669.719C750.802 669.719 752.75 669.25 754.188 668.312C755.625 667.354 756.656 666.073 757.281 664.469C757.927 662.844 758.25 661.042 758.25 659.062ZM778.062 626V674H772.25V626H778.062ZM807.281 668.219V650.812C807.281 649.479 807.01 648.323 806.469 647.344C805.948 646.344 805.156 645.573 804.094 645.031C803.031 644.49 801.719 644.219 800.156 644.219C798.698 644.219 797.417 644.469 796.312 644.969C795.229 645.469 794.375 646.125 793.75 646.938C793.146 647.75 792.844 648.625 792.844 649.562H787.062C787.062 648.354 787.375 647.156 788 645.969C788.625 644.781 789.521 643.708 790.688 642.75C791.875 641.771 793.292 641 794.938 640.438C796.604 639.854 798.458 639.562 800.5 639.562C802.958 639.562 805.125 639.979 807 640.812C808.896 641.646 810.375 642.906 811.438 644.594C812.521 646.26 813.062 648.354 813.062 650.875V666.625C813.062 667.75 813.156 668.948 813.344 670.219C813.552 671.49 813.854 672.583 814.25 673.5V674H808.219C807.927 673.333 807.698 672.448 807.531 671.344C807.365 670.219 807.281 669.177 807.281 668.219ZM808.281 653.5L808.344 657.562H802.5C800.854 657.562 799.385 657.698 798.094 657.969C796.802 658.219 795.719 658.604 794.844 659.125C793.969 659.646 793.302 660.302 792.844 661.094C792.385 661.865 792.156 662.771 792.156 663.812C792.156 664.875 792.396 665.844 792.875 666.719C793.354 667.594 794.073 668.292 795.031 668.812C796.01 669.312 797.208 669.562 798.625 669.562C800.396 669.562 801.958 669.188 803.312 668.438C804.667 667.688 805.74 666.771 806.531 665.688C807.344 664.604 807.781 663.552 807.844 662.531L810.312 665.312C810.167 666.188 809.771 667.156 809.125 668.219C808.479 669.281 807.615 670.302 806.531 671.281C805.469 672.24 804.198 673.042 802.719 673.688C801.26 674.312 799.615 674.625 797.781 674.625C795.49 674.625 793.479 674.177 791.75 673.281C790.042 672.385 788.708 671.188 787.75 669.688C786.812 668.167 786.344 666.469 786.344 664.594C786.344 662.781 786.698 661.188 787.406 659.812C788.115 658.417 789.135 657.26 790.469 656.344C791.802 655.406 793.406 654.698 795.281 654.219C797.156 653.74 799.25 653.5 801.562 653.5H808.281ZM827.938 645.5V674H822.156V640.188H827.781L827.938 645.5ZM838.5 640L838.469 645.375C837.99 645.271 837.531 645.208 837.094 645.188C836.677 645.146 836.198 645.125 835.656 645.125C834.323 645.125 833.146 645.333 832.125 645.75C831.104 646.167 830.24 646.75 829.531 647.5C828.823 648.25 828.26 649.146 827.844 650.188C827.448 651.208 827.188 652.333 827.062 653.562L825.438 654.5C825.438 652.458 825.635 650.542 826.031 648.75C826.448 646.958 827.083 645.375 827.938 644C828.792 642.604 829.875 641.521 831.188 640.75C832.521 639.958 834.104 639.562 835.938 639.562C836.354 639.562 836.833 639.615 837.375 639.719C837.917 639.802 838.292 639.896 838.5 640ZM886.625 628.5H892.625V659.281C892.625 662.698 891.865 665.542 890.344 667.812C888.823 670.083 886.802 671.792 884.281 672.938C881.781 674.062 879.062 674.625 876.125 674.625C873.042 674.625 870.25 674.062 867.75 672.938C865.271 671.792 863.302 670.083 861.844 667.812C860.406 665.542 859.688 662.698 859.688 659.281V628.5H865.656V659.281C865.656 661.656 866.094 663.615 866.969 665.156C867.844 666.698 869.062 667.844 870.625 668.594C872.208 669.344 874.042 669.719 876.125 669.719C878.229 669.719 880.062 669.344 881.625 668.594C883.208 667.844 884.438 666.698 885.312 665.156C886.188 663.615 886.625 661.656 886.625 659.281V628.5ZM908.562 628.5V674H902.531V628.5H908.562ZM940.344 626V674H934.531V626H940.344ZM961 640.188L946.25 655.969L938 664.531L937.531 658.375L943.438 651.312L953.938 640.188H961ZM955.719 674L943.656 657.875L946.656 652.719L962.531 674H955.719ZM973.25 640.188V674H967.438V640.188H973.25ZM967 631.219C967 630.281 967.281 629.49 967.844 628.844C968.427 628.198 969.281 627.875 970.406 627.875C971.51 627.875 972.354 628.198 972.938 628.844C973.542 629.49 973.844 630.281 973.844 631.219C973.844 632.115 973.542 632.885 972.938 633.531C972.354 634.156 971.51 634.469 970.406 634.469C969.281 634.469 968.427 634.156 967.844 633.531C967.281 632.885 967 632.115 967 631.219ZM996.688 640.188V644.625H978.406V640.188H996.688ZM984.594 631.969H990.375V665.625C990.375 666.771 990.552 667.635 990.906 668.219C991.26 668.802 991.719 669.188 992.281 669.375C992.844 669.562 993.448 669.656 994.094 669.656C994.573 669.656 995.073 669.615 995.594 669.531C996.135 669.427 996.542 669.344 996.812 669.281L996.844 674C996.385 674.146 995.781 674.281 995.031 674.406C994.302 674.552 993.417 674.625 992.375 674.625C990.958 674.625 989.656 674.344 988.469 673.781C987.281 673.219 986.333 672.281 985.625 670.969C984.938 669.635 984.594 667.844 984.594 665.594V631.969ZM1027.97 674H1022.19V636.625C1022.19 634.188 1022.62 632.135 1023.5 630.469C1024.4 628.781 1025.68 627.51 1027.34 626.656C1029.01 625.781 1030.99 625.344 1033.28 625.344C1033.95 625.344 1034.61 625.385 1035.28 625.469C1035.97 625.552 1036.64 625.677 1037.28 625.844L1036.97 630.562C1036.53 630.458 1036.03 630.385 1035.47 630.344C1034.93 630.302 1034.39 630.281 1033.84 630.281C1032.61 630.281 1031.55 630.531 1030.66 631.031C1029.78 631.51 1029.11 632.219 1028.66 633.156C1028.2 634.094 1027.97 635.25 1027.97 636.625V674ZM1035.16 640.188V644.625H1016.84V640.188H1035.16ZM1040.06 657.469V656.75C1040.06 654.312 1040.42 652.052 1041.12 649.969C1041.83 647.865 1042.85 646.042 1044.19 644.5C1045.52 642.938 1047.14 641.729 1049.03 640.875C1050.93 640 1053.05 639.562 1055.41 639.562C1057.78 639.562 1059.92 640 1061.81 640.875C1063.73 641.729 1065.35 642.938 1066.69 644.5C1068.04 646.042 1069.07 647.865 1069.78 649.969C1070.49 652.052 1070.84 654.312 1070.84 656.75V657.469C1070.84 659.906 1070.49 662.167 1069.78 664.25C1069.07 666.333 1068.04 668.156 1066.69 669.719C1065.35 671.26 1063.74 672.469 1061.84 673.344C1059.97 674.198 1057.84 674.625 1055.47 674.625C1053.09 674.625 1050.96 674.198 1049.06 673.344C1047.17 672.469 1045.54 671.26 1044.19 669.719C1042.85 668.156 1041.83 666.333 1041.12 664.25C1040.42 662.167 1040.06 659.906 1040.06 657.469ZM1045.84 656.75V657.469C1045.84 659.156 1046.04 660.75 1046.44 662.25C1046.83 663.729 1047.43 665.042 1048.22 666.188C1049.03 667.333 1050.04 668.24 1051.25 668.906C1052.46 669.552 1053.86 669.875 1055.47 669.875C1057.05 669.875 1058.44 669.552 1059.62 668.906C1060.83 668.24 1061.83 667.333 1062.62 666.188C1063.42 665.042 1064.01 663.729 1064.41 662.25C1064.82 660.75 1065.03 659.156 1065.03 657.469V656.75C1065.03 655.083 1064.82 653.51 1064.41 652.031C1064.01 650.531 1063.41 649.208 1062.59 648.062C1061.8 646.896 1060.8 645.979 1059.59 645.312C1058.41 644.646 1057.01 644.312 1055.41 644.312C1053.82 644.312 1052.43 644.646 1051.22 645.312C1050.03 645.979 1049.03 646.896 1048.22 648.062C1047.43 649.208 1046.83 650.531 1046.44 652.031C1046.04 653.51 1045.84 655.083 1045.84 656.75ZM1083.88 645.5V674H1078.09V640.188H1083.72L1083.88 645.5ZM1094.44 640L1094.41 645.375C1093.93 645.271 1093.47 645.208 1093.03 645.188C1092.61 645.146 1092.14 645.125 1091.59 645.125C1090.26 645.125 1089.08 645.333 1088.06 645.75C1087.04 646.167 1086.18 646.75 1085.47 647.5C1084.76 648.25 1084.2 649.146 1083.78 650.188C1083.39 651.208 1083.12 652.333 1083 653.562L1081.38 654.5C1081.38 652.458 1081.57 650.542 1081.97 648.75C1082.39 646.958 1083.02 645.375 1083.88 644C1084.73 642.604 1085.81 641.521 1087.12 640.75C1088.46 639.958 1090.04 639.562 1091.88 639.562C1092.29 639.562 1092.77 639.615 1093.31 639.719C1093.85 639.802 1094.23 639.896 1094.44 640ZM1122.56 628.5V674H1116.53V628.5H1122.56ZM1141.62 648.969V653.906H1121.25V648.969H1141.62ZM1144.72 628.5V633.438H1121.25V628.5H1144.72ZM1157.31 640.188V674H1151.5V640.188H1157.31ZM1151.06 631.219C1151.06 630.281 1151.34 629.49 1151.91 628.844C1152.49 628.198 1153.34 627.875 1154.47 627.875C1155.57 627.875 1156.42 628.198 1157 628.844C1157.6 629.49 1157.91 630.281 1157.91 631.219C1157.91 632.115 1157.6 632.885 1157 633.531C1156.42 634.156 1155.57 634.469 1154.47 634.469C1153.34 634.469 1152.49 634.156 1151.91 633.531C1151.34 632.885 1151.06 632.115 1151.06 631.219ZM1188.5 640.188H1193.75V673.281C1193.75 676.26 1193.15 678.802 1191.94 680.906C1190.73 683.01 1189.04 684.604 1186.88 685.688C1184.73 686.792 1182.25 687.344 1179.44 687.344C1178.27 687.344 1176.9 687.156 1175.31 686.781C1173.75 686.427 1172.21 685.812 1170.69 684.938C1169.19 684.083 1167.93 682.927 1166.91 681.469L1169.94 678.031C1171.35 679.74 1172.83 680.927 1174.38 681.594C1175.94 682.26 1177.48 682.594 1179 682.594C1180.83 682.594 1182.42 682.25 1183.75 681.562C1185.08 680.875 1186.11 679.854 1186.84 678.5C1187.59 677.167 1187.97 675.521 1187.97 673.562V647.625L1188.5 640.188ZM1165.22 657.469V656.812C1165.22 654.229 1165.52 651.885 1166.12 649.781C1166.75 647.656 1167.64 645.833 1168.78 644.312C1169.95 642.792 1171.35 641.625 1173 640.812C1174.65 639.979 1176.5 639.562 1178.56 639.562C1180.69 639.562 1182.54 639.938 1184.12 640.688C1185.73 641.417 1187.08 642.49 1188.19 643.906C1189.31 645.302 1190.2 646.99 1190.84 648.969C1191.49 650.948 1191.94 653.188 1192.19 655.688V658.562C1191.96 661.042 1191.51 663.271 1190.84 665.25C1190.2 667.229 1189.31 668.917 1188.19 670.312C1187.08 671.708 1185.73 672.781 1184.12 673.531C1182.52 674.26 1180.65 674.625 1178.5 674.625C1176.48 674.625 1174.65 674.198 1173 673.344C1171.38 672.49 1169.98 671.292 1168.81 669.75C1167.65 668.208 1166.75 666.396 1166.12 664.312C1165.52 662.208 1165.22 659.927 1165.22 657.469ZM1171 656.812V657.469C1171 659.156 1171.17 660.74 1171.5 662.219C1171.85 663.698 1172.39 665 1173.09 666.125C1173.82 667.25 1174.75 668.135 1175.88 668.781C1177 669.406 1178.34 669.719 1179.91 669.719C1181.82 669.719 1183.41 669.312 1184.66 668.5C1185.91 667.688 1186.9 666.615 1187.62 665.281C1188.38 663.948 1188.96 662.5 1189.38 660.938V653.406C1189.15 652.26 1188.79 651.156 1188.31 650.094C1187.85 649.01 1187.25 648.052 1186.5 647.219C1185.77 646.365 1184.86 645.688 1183.78 645.188C1182.7 644.688 1181.43 644.438 1179.97 644.438C1178.39 644.438 1177.02 644.771 1175.88 645.438C1174.75 646.083 1173.82 646.979 1173.09 648.125C1172.39 649.25 1171.85 650.562 1171.5 652.062C1171.17 653.542 1171 655.125 1171 656.812ZM1208.28 646.906V674H1202.47V640.188H1207.97L1208.28 646.906ZM1207.09 655.812L1204.41 655.719C1204.43 653.406 1204.73 651.271 1205.31 649.312C1205.9 647.333 1206.76 645.615 1207.91 644.156C1209.05 642.698 1210.48 641.573 1212.19 640.781C1213.9 639.969 1215.88 639.562 1218.12 639.562C1219.71 639.562 1221.17 639.792 1222.5 640.25C1223.83 640.688 1224.99 641.385 1225.97 642.344C1226.95 643.302 1227.71 644.531 1228.25 646.031C1228.79 647.531 1229.06 649.344 1229.06 651.469V674H1223.28V651.75C1223.28 649.979 1222.98 648.562 1222.38 647.5C1221.79 646.438 1220.96 645.667 1219.88 645.188C1218.79 644.688 1217.52 644.438 1216.06 644.438C1214.35 644.438 1212.93 644.74 1211.78 645.344C1210.64 645.948 1209.72 646.781 1209.03 647.844C1208.34 648.906 1207.84 650.125 1207.53 651.5C1207.24 652.854 1207.09 654.292 1207.09 655.812ZM1229 652.625L1225.12 653.812C1225.15 651.958 1225.45 650.177 1226.03 648.469C1226.64 646.76 1227.5 645.24 1228.62 643.906C1229.77 642.573 1231.18 641.521 1232.84 640.75C1234.51 639.958 1236.42 639.562 1238.56 639.562C1240.38 639.562 1241.98 639.802 1243.38 640.281C1244.79 640.76 1245.98 641.5 1246.94 642.5C1247.92 643.479 1248.66 644.74 1249.16 646.281C1249.66 647.823 1249.91 649.656 1249.91 651.781V674H1244.09V651.719C1244.09 649.823 1243.79 648.354 1243.19 647.312C1242.6 646.25 1241.77 645.51 1240.69 645.094C1239.62 644.656 1238.35 644.438 1236.88 644.438C1235.6 644.438 1234.48 644.656 1233.5 645.094C1232.52 645.531 1231.7 646.135 1231.03 646.906C1230.36 647.656 1229.85 648.521 1229.5 649.5C1229.17 650.479 1229 651.521 1229 652.625ZM1278.59 668.219V650.812C1278.59 649.479 1278.32 648.323 1277.78 647.344C1277.26 646.344 1276.47 645.573 1275.41 645.031C1274.34 644.49 1273.03 644.219 1271.47 644.219C1270.01 644.219 1268.73 644.469 1267.62 644.969C1266.54 645.469 1265.69 646.125 1265.06 646.938C1264.46 647.75 1264.16 648.625 1264.16 649.562H1258.38C1258.38 648.354 1258.69 647.156 1259.31 645.969C1259.94 644.781 1260.83 643.708 1262 642.75C1263.19 641.771 1264.6 641 1266.25 640.438C1267.92 639.854 1269.77 639.562 1271.81 639.562C1274.27 639.562 1276.44 639.979 1278.31 640.812C1280.21 641.646 1281.69 642.906 1282.75 644.594C1283.83 646.26 1284.38 648.354 1284.38 650.875V666.625C1284.38 667.75 1284.47 668.948 1284.66 670.219C1284.86 671.49 1285.17 672.583 1285.56 673.5V674H1279.53C1279.24 673.333 1279.01 672.448 1278.84 671.344C1278.68 670.219 1278.59 669.177 1278.59 668.219ZM1279.59 653.5L1279.66 657.562H1273.81C1272.17 657.562 1270.7 657.698 1269.41 657.969C1268.11 658.219 1267.03 658.604 1266.16 659.125C1265.28 659.646 1264.61 660.302 1264.16 661.094C1263.7 661.865 1263.47 662.771 1263.47 663.812C1263.47 664.875 1263.71 665.844 1264.19 666.719C1264.67 667.594 1265.39 668.292 1266.34 668.812C1267.32 669.312 1268.52 669.562 1269.94 669.562C1271.71 669.562 1273.27 669.188 1274.62 668.438C1275.98 667.688 1277.05 666.771 1277.84 665.688C1278.66 664.604 1279.09 663.552 1279.16 662.531L1281.62 665.312C1281.48 666.188 1281.08 667.156 1280.44 668.219C1279.79 669.281 1278.93 670.302 1277.84 671.281C1276.78 672.24 1275.51 673.042 1274.03 673.688C1272.57 674.312 1270.93 674.625 1269.09 674.625C1266.8 674.625 1264.79 674.177 1263.06 673.281C1261.35 672.385 1260.02 671.188 1259.06 669.688C1258.12 668.167 1257.66 666.469 1257.66 664.594C1257.66 662.781 1258.01 661.188 1258.72 659.812C1259.43 658.417 1260.45 657.26 1261.78 656.344C1263.11 655.406 1264.72 654.698 1266.59 654.219C1268.47 653.74 1270.56 653.5 1272.88 653.5H1279.59Z`,`fill`,`url(#paint23_linear_49_2015)`],[`id`,`filter0_dd_49_2015`,`x`,`1586.08`,`y`,`288.224`,`width`,`579.342`,`height`,`535.581`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`flood-opacity`,`0`,`result`,`BackgroundImageFix`],[`in`,`SourceAlpha`,`type`,`matrix`,`values`,`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0`,`result`,`hardAlpha`],[`dy`,`5`],[`stdDeviation`,`5.88235`],[`in2`,`hardAlpha`,`operator`,`out`],[`type`,`matrix`,`values`,`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0`],[`mode`,`normal`,`in2`,`BackgroundImageFix`,`result`,`effect1_dropShadow_49_2015`],[`radius`,`2.5`,`operator`,`erode`,`in`,`SourceAlpha`,`result`,`effect2_dropShadow_49_2015`],[`dy`,`2.5`],[`stdDeviation`,`2.94118`],[`mode`,`normal`,`in2`,`effect1_dropShadow_49_2015`,`result`,`effect2_dropShadow_49_2015`],[`mode`,`normal`,`in`,`BackgroundImageFix`,`in2`,`effect2_dropShadow_49_2015`,`result`,`BackgroundImageFix`],[`mode`,`normal`,`in`,`SourceGraphic`,`in2`,`BackgroundImageFix`,`result`,`shape`],[`id`,`filter1_dd_49_2015`,`x`,`1771.92`,`y`,`596.083`,`width`,`356.846`,`height`,`483.742`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`id`,`filter2_dd_49_2015`,`x`,`1454.92`,`y`,`780.52`,`width`,`577.113`,`height`,`526.013`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`id`,`filter3_dd_49_2015`,`x`,`1172.34`,`y`,`699.369`,`width`,`579.342`,`height`,`535.581`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`id`,`filter4_dd_49_2015`,`x`,`1209`,`y`,`443.35`,`width`,`356.846`,`height`,`483.742`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`id`,`filter5_dd_49_2015`,`x`,`1305.73`,`y`,`216.642`,`width`,`577.113`,`height`,`526.013`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`id`,`filter6_f_49_2015`,`x`,`186.096`,`y`,`376.074`,`width`,`364.399`,`height`,`350.687`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`stdDeviation`,`7.75155`,`result`,`effect1_foregroundBlur_49_2015`],[`id`,`filter7_f_49_2015`,`x`,`328.256`,`y`,`465.47`,`width`,`135.834`,`height`,`84.2734`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`stdDeviation`,`12.9193`,`result`,`effect1_foregroundBlur_49_2015`],[`id`,`filter8_f_49_2015`,`x`,`332.099`,`y`,`352.957`,`width`,`194.802`,`height`,`194.667`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`id`,`filter9_f_49_2015`,`x`,`376.239`,`y`,`416.553`,`width`,`106.053`,`height`,`54.5072`,`filterUnits`,`userSpaceOnUse`,`color-interpolation-filters`,`sRGB`],[`stdDeviation`,`3.87578`,`result`,`effect1_foregroundBlur_49_2015`],[`id`,`paint0_linear_49_2015`,`x1`,`-180.073`,`y1`,`359.123`,`x2`,`1786.91`,`y2`,`1345.42`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--bx-bg-surface)`],[`offset`,`1`,`stop-color`,`var(--bx-bg-canvas)`],[`id`,`paint1_linear_49_2015`,`x1`,`1718.69`,`y1`,`373.192`,`x2`,`2195.15`,`y2`,`659.076`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`white`,`stop-opacity`,`0.1`],[`offset`,`1`,`stop-color`,`white`,`stop-opacity`,`0`],[`id`,`paint2_linear_49_2015`,`x1`,`1718.69`,`y1`,`373.192`,`x2`,`2195.15`,`y2`,`659.076`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`#E6F2FF`,`stop-opacity`,`0.42`],[`offset`,`0.4`,`stop-color`,`#E2E2E0`,`stop-opacity`,`0.3`],[`offset`,`1`,`stop-color`,`#CCE6FF`,`stop-opacity`,`0.09`],[`id`,`paint3_linear_49_2015`,`x1`,`2070.08`,`y1`,`687.765`,`x2`,`2546.54`,`y2`,`973.649`,`gradientUnits`,`userSpaceOnUse`],[`id`,`paint4_linear_49_2015`,`x1`,`2070.08`,`y1`,`687.765`,`x2`,`2546.54`,`y2`,`973.649`,`gradientUnits`,`userSpaceOnUse`],[`offset`,`0.4`,`stop-color`,`#64ADD4`,`stop-opacity`,`0.3`],[`id`,`paint5_linear_49_2015`,`x1`,`1973.35`,`y1`,`1149.36`,`x2`,`2449.8`,`y2`,`1435.25`,`gradientUnits`,`userSpaceOnUse`],[`id`,`paint6_linear_49_2015`,`x1`,`1973.35`,`y1`,`1149.36`,`x2`,`2449.8`,`y2`,`1435.25`,`gradientUnits`,`userSpaceOnUse`],[`offset`,`0.4`,`stop-color`,`#78CA87`,`stop-opacity`,`0.3`],[`id`,`paint7_linear_49_2015`,`x1`,`1525.23`,`y1`,`1296.39`,`x2`,`2001.68`,`y2`,`1582.27`,`gradientUnits`,`userSpaceOnUse`],[`id`,`paint8_linear_49_2015`,`x1`,`1525.23`,`y1`,`1296.39`,`x2`,`2001.68`,`y2`,`1582.27`,`gradientUnits`,`userSpaceOnUse`],[`offset`,`0.4`,`stop-color`,`#6C99FF`,`stop-opacity`,`0.3`],[`id`,`paint9_linear_49_2015`,`x1`,`1173.84`,`y1`,`981.816`,`x2`,`1650.29`,`y2`,`1267.7`,`gradientUnits`,`userSpaceOnUse`],[`id`,`paint10_linear_49_2015`,`x1`,`1173.84`,`y1`,`981.816`,`x2`,`1650.29`,`y2`,`1267.7`,`gradientUnits`,`userSpaceOnUse`],[`offset`,`0.4`,`stop-color`,`#E4B870`,`stop-opacity`,`0.3`],[`id`,`paint11_linear_49_2015`,`x1`,`1270.57`,`y1`,`520.217`,`x2`,`1747.03`,`y2`,`806.101`,`gradientUnits`,`userSpaceOnUse`],[`id`,`paint12_linear_49_2015`,`x1`,`1270.57`,`y1`,`520.217`,`x2`,`1747.03`,`y2`,`806.101`,`gradientUnits`,`userSpaceOnUse`],[`offset`,`0.4`,`stop-color`,`#D47891`,`stop-opacity`,`0.3`],[`id`,`paint13_radial_49_2015`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(368.06 533.568) scale(204.528 204.334)`],[`stop-color`,`var(--blocks-logo-color)`,`stop-opacity`,`0.105`],[`offset`,`0.56`,`stop-color`,`var(--blocks-logo-color)`,`stop-opacity`,`0.025`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-color)`,`stop-opacity`,`0`],[`id`,`paint14_linear_49_2015`,`x1`,`225.163`,`y1`,`430.692`,`x2`,`493.052`,`y2`,`697.958`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-surface)`,`stop-opacity`,`0.34`],[`offset`,`0.42`,`stop-color`,`var(--blocks-logo-surface)`,`stop-opacity`,`0.15`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-surface)`,`stop-opacity`,`0.07`],[`id`,`paint15_linear_49_2015`,`x1`,`199.362`,`y1`,`421.596`,`x2`,`523.156`,`y2`,`697.741`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.82`],[`offset`,`0.25`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.3`],[`offset`,`0.55`,`stop-color`,`var(--blocks-logo-color)`,`stop-opacity`,`0.52`],[`offset`,`0.8`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.18`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.58`],[`id`,`paint16_radial_49_2015`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientTransform`,`matrix(205.796 -21.6095 20.5749 195.571 432.186 479.782)`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-color)`,`stop-opacity`,`0.4`],[`offset`,`0.3`,`stop-color`,`var(--blocks-logo-color)`,`stop-opacity`,`0.2`],[`offset`,`0.7`,`stop-color`,`var(--blocks-logo-color)`,`stop-opacity`,`0.055`],[`id`,`paint17_linear_49_2015`,`x1`,`364.236`,`y1`,`508.333`,`x2`,`385.356`,`y2`,`535.916`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-color)`,`stop-opacity`,`0`],[`offset`,`0.4`,`stop-color`,`var(--blocks-logo-color)`,`stop-opacity`,`0.44`],[`offset`,`0.68`,`stop-color`,`color-mix(in srgb, var(--blocks-logo-color) 44%, var(--blocks-logo-specular))`,`stop-opacity`,`0.8`],[`id`,`paint18_linear_49_2015`,`x1`,`217.57`,`y1`,`437.171`,`x2`,`281.55`,`y2`,`539.961`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.78`],[`offset`,`0.48`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.2`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0`],[`id`,`paint19_radial_49_2015`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(408.211 422.304) scale(91.8828 91.7956)`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.54`],[`offset`,`0.28`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.24`],[`offset`,`0.7`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.075`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-color)`,`stop-opacity`,`0.16`],[`id`,`paint20_linear_49_2015`,`x1`,`381.318`,`y1`,`398.795`,`x2`,`479.822`,`y2`,`506.357`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.94`],[`offset`,`0.3`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.36`],[`offset`,`0.66`,`stop-color`,`var(--blocks-logo-color)`,`stop-opacity`,`0.56`],[`offset`,`1`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.82`],[`id`,`paint21_radial_49_2015`,`cx`,`0`,`cy`,`0`,`r`,`1`,`gradientUnits`,`userSpaceOnUse`,`gradientTransform`,`translate(418.54 446.998) scale(53.1447 47.9768)`],[`stop-color`,`color-mix(in srgb, var(--blocks-logo-color) 10%, var(--blocks-logo-specular))`,`stop-opacity`,`0.96`],[`offset`,`0.18`,`stop-color`,`color-mix(in srgb, var(--blocks-logo-color) 52%, var(--blocks-logo-specular))`,`stop-opacity`,`0.9`],[`offset`,`0.48`,`stop-color`,`var(--blocks-logo-color)`,`stop-opacity`,`0.66`],[`id`,`paint22_linear_49_2015`,`x1`,`389.482`,`y1`,`432.598`,`x2`,`413.427`,`y2`,`480.195`,`gradientUnits`,`userSpaceOnUse`],[`offset`,`0.34`,`stop-color`,`color-mix(in srgb, var(--blocks-logo-color) 68%, var(--blocks-logo-specular))`,`stop-opacity`,`0.88`],[`offset`,`0.58`,`stop-color`,`var(--blocks-logo-specular)`,`stop-opacity`,`0.98`],[`offset`,`0.84`,`stop-color`,`var(--blocks-logo-color)`,`stop-opacity`,`0.86`],[`id`,`paint23_linear_49_2015`,`x1`,`619`,`y1`,`620`,`x2`,`1405`,`y2`,`761`,`gradientUnits`,`userSpaceOnUse`],[`stop-color`,`var(--bx-text-accent)`],[`offset`,`0.85176`,`stop-color`,`var(--bx-text-primary)`],[`id`,`clip0_49_2015`],[`width`,`1920`,`height`,`1080`,`fill`,`white`],[`id`,`clip1_49_2015`],[`width`,`1260.83`,`height`,`1260.83`,`fill`,`white`,`transform`,`translate(1565.08) rotate(37.1876)`]],template:function(n,e){n&1&&(Wv(),id(0,`svg`,0)(1,`g`,1),lb(2,`rect`,2),id(3,`g`,3)(4,`g`,4),lb(5,`rect`,5)(6,`rect`,6)(7,`rect`,7),ad(),id(8,`g`,8),lb(9,`rect`,9)(10,`rect`,10)(11,`rect`,11),ad(),id(12,`g`,12),lb(13,`rect`,13)(14,`rect`,14)(15,`rect`,15),ad(),id(16,`g`,16),lb(17,`rect`,17)(18,`rect`,18)(19,`rect`,19),ad(),id(20,`g`,20),lb(21,`rect`,21)(22,`rect`,22)(23,`rect`,23),ad(),id(24,`g`,24),lb(25,`rect`,25)(26,`rect`,26)(27,`rect`,27),ad()(),lb(28,`path`,28),id(29,`g`,29),lb(30,`path`,30),ad(),lb(31,`path`,31),id(32,`mask`,32),lb(33,`path`,33),ad(),id(34,`g`,34),lb(35,`path`,35),id(36,`g`,36),lb(37,`path`,37),ad(),lb(38,`path`,38)(39,`path`,39)(40,`path`,40)(41,`path`,41)(42,`path`,42),ad(),lb(43,`path`,43),id(44,`mask`,44),lb(45,`path`,45),ad(),id(46,`g`,46)(47,`g`,47),lb(48,`path`,48),ad()(),lb(49,`path`,49)(50,`path`,50)(51,`path`,51),id(52,`g`,52),lb(53,`path`,53),ad(),lb(54,`path`,54)(55,`path`,55)(56,`path`,56)(57,`path`,57)(58,`path`,58)(59,`path`,59)(60,`path`,60),ad(),id(61,`defs`)(62,`filter`,61),lb(63,`feFlood`,62)(64,`feColorMatrix`,63)(65,`feOffset`,64)(66,`feGaussianBlur`,65)(67,`feComposite`,66)(68,`feColorMatrix`,67)(69,`feBlend`,68)(70,`feColorMatrix`,63)(71,`feMorphology`,69)(72,`feOffset`,70)(73,`feGaussianBlur`,71)(74,`feComposite`,66)(75,`feColorMatrix`,67)(76,`feBlend`,72)(77,`feBlend`,73)(78,`feBlend`,74),ad(),id(79,`filter`,75),lb(80,`feFlood`,62)(81,`feColorMatrix`,63)(82,`feOffset`,64)(83,`feGaussianBlur`,65)(84,`feComposite`,66)(85,`feColorMatrix`,67)(86,`feBlend`,68)(87,`feColorMatrix`,63)(88,`feMorphology`,69)(89,`feOffset`,70)(90,`feGaussianBlur`,71)(91,`feComposite`,66)(92,`feColorMatrix`,67)(93,`feBlend`,72)(94,`feBlend`,73)(95,`feBlend`,74),ad(),id(96,`filter`,76),lb(97,`feFlood`,62)(98,`feColorMatrix`,63)(99,`feOffset`,64)(100,`feGaussianBlur`,65)(101,`feComposite`,66)(102,`feColorMatrix`,67)(103,`feBlend`,68)(104,`feColorMatrix`,63)(105,`feMorphology`,69)(106,`feOffset`,70)(107,`feGaussianBlur`,71)(108,`feComposite`,66)(109,`feColorMatrix`,67)(110,`feBlend`,72)(111,`feBlend`,73)(112,`feBlend`,74),ad(),id(113,`filter`,77),lb(114,`feFlood`,62)(115,`feColorMatrix`,63)(116,`feOffset`,64)(117,`feGaussianBlur`,65)(118,`feComposite`,66)(119,`feColorMatrix`,67)(120,`feBlend`,68)(121,`feColorMatrix`,63)(122,`feMorphology`,69)(123,`feOffset`,70)(124,`feGaussianBlur`,71)(125,`feComposite`,66)(126,`feColorMatrix`,67)(127,`feBlend`,72)(128,`feBlend`,73)(129,`feBlend`,74),ad(),id(130,`filter`,78),lb(131,`feFlood`,62)(132,`feColorMatrix`,63)(133,`feOffset`,64)(134,`feGaussianBlur`,65)(135,`feComposite`,66)(136,`feColorMatrix`,67)(137,`feBlend`,68)(138,`feColorMatrix`,63)(139,`feMorphology`,69)(140,`feOffset`,70)(141,`feGaussianBlur`,71)(142,`feComposite`,66)(143,`feColorMatrix`,67)(144,`feBlend`,72)(145,`feBlend`,73)(146,`feBlend`,74),ad(),id(147,`filter`,79),lb(148,`feFlood`,62)(149,`feColorMatrix`,63)(150,`feOffset`,64)(151,`feGaussianBlur`,65)(152,`feComposite`,66)(153,`feColorMatrix`,67)(154,`feBlend`,68)(155,`feColorMatrix`,63)(156,`feMorphology`,69)(157,`feOffset`,70)(158,`feGaussianBlur`,71)(159,`feComposite`,66)(160,`feColorMatrix`,67)(161,`feBlend`,72)(162,`feBlend`,73)(163,`feBlend`,74),ad(),id(164,`filter`,80),lb(165,`feFlood`,62)(166,`feBlend`,74)(167,`feGaussianBlur`,81),ad(),id(168,`filter`,82),lb(169,`feFlood`,62)(170,`feBlend`,74)(171,`feGaussianBlur`,83),ad(),id(172,`filter`,84),lb(173,`feFlood`,62)(174,`feBlend`,74)(175,`feGaussianBlur`,83),ad(),id(176,`filter`,85),lb(177,`feFlood`,62)(178,`feBlend`,74)(179,`feGaussianBlur`,86),ad(),id(180,`linearGradient`,87),lb(181,`stop`,88)(182,`stop`,89),ad(),id(183,`linearGradient`,90),lb(184,`stop`,91)(185,`stop`,92),ad(),id(186,`linearGradient`,93),lb(187,`stop`,94)(188,`stop`,95)(189,`stop`,96),ad(),id(190,`linearGradient`,97),lb(191,`stop`,91)(192,`stop`,92),ad(),id(193,`linearGradient`,98),lb(194,`stop`,94)(195,`stop`,99)(196,`stop`,96),ad(),id(197,`linearGradient`,100),lb(198,`stop`,91)(199,`stop`,92),ad(),id(200,`linearGradient`,101),lb(201,`stop`,94)(202,`stop`,102)(203,`stop`,96),ad(),id(204,`linearGradient`,103),lb(205,`stop`,91)(206,`stop`,92),ad(),id(207,`linearGradient`,104),lb(208,`stop`,94)(209,`stop`,105)(210,`stop`,96),ad(),id(211,`linearGradient`,106),lb(212,`stop`,91)(213,`stop`,92),ad(),id(214,`linearGradient`,107),lb(215,`stop`,94)(216,`stop`,108)(217,`stop`,96),ad(),id(218,`linearGradient`,109),lb(219,`stop`,91)(220,`stop`,92),ad(),id(221,`linearGradient`,110),lb(222,`stop`,94)(223,`stop`,111)(224,`stop`,96),ad(),id(225,`radialGradient`,112),lb(226,`stop`,113)(227,`stop`,114)(228,`stop`,115),ad(),id(229,`linearGradient`,116),lb(230,`stop`,117)(231,`stop`,118)(232,`stop`,119),ad(),id(233,`linearGradient`,120),lb(234,`stop`,121)(235,`stop`,122)(236,`stop`,123)(237,`stop`,124)(238,`stop`,125),ad(),id(239,`radialGradient`,126),lb(240,`stop`,127)(241,`stop`,128)(242,`stop`,129)(243,`stop`,115),ad(),id(244,`linearGradient`,130),lb(245,`stop`,131)(246,`stop`,132)(247,`stop`,133)(248,`stop`,115),ad(),id(249,`linearGradient`,134),lb(250,`stop`,135)(251,`stop`,136)(252,`stop`,137),ad(),id(253,`radialGradient`,138),lb(254,`stop`,139)(255,`stop`,140)(256,`stop`,141)(257,`stop`,142),ad(),id(258,`linearGradient`,143),lb(259,`stop`,144)(260,`stop`,145)(261,`stop`,146)(262,`stop`,147),ad(),id(263,`radialGradient`,148),lb(264,`stop`,149)(265,`stop`,150)(266,`stop`,151)(267,`stop`,115),ad(),id(268,`linearGradient`,152),lb(269,`stop`,131)(270,`stop`,153)(271,`stop`,154)(272,`stop`,155)(273,`stop`,115),ad(),id(274,`linearGradient`,156),lb(275,`stop`,157)(276,`stop`,158),ad(),id(277,`clipPath`,159),lb(278,`rect`,160),ad(),id(279,`clipPath`,161),lb(280,`rect`,162),ad()()())},styles:[`
[_nghost-%COMP%] {
  --%NS%blocks-logo-color: var(--%NS%bx-accent);
  --%NS%blocks-logo-surface: var(--%NS%bx-bg-element, #f5f5f5);
  --%NS%blocks-logo-specular: color-mix(in srgb, var(--%NS%bx-bg-surface, #ffffff) 88%, var(--%NS%bx-text-primary, #171717) 12%);
  --%NS%blocks-logo-shadow: color-mix(in srgb, var(--%NS%bx-bg-canvas, #ffffff) 75%, var(--%NS%bx-text-heading, #171717) 25%);
}
[data-theme=dark][_nghost-%COMP%][_nghost-%COMP%], [data-theme=dark]   [_nghost-%COMP%] {
  --%NS%blocks-logo-specular: color-mix(in srgb, var(--%NS%bx-bg-element, #262626) 25%, var(--%NS%bx-text-primary, #e5e5e5) 75%);
}
[_nghost-%COMP%] {
  display: block;
  inline-size: 100%;
  aspect-ratio: 16/9;
  overflow: clip;
}
svg[_ngcontent-%COMP%] {
  display: block;
  inline-size: 100%;
  block-size: auto;
}
.cover-panel-ring[_ngcontent-%COMP%], 
.cover-panel[_ngcontent-%COMP%] {
  transform-box: fill-box;
  transform-origin: center;
}
.cover-panel[_ngcontent-%COMP%]:nth-child(1) {
  --%NS%panel-color: var(--%NS%bx-primary);
}
.cover-panel[_ngcontent-%COMP%]:nth-child(2) {
  --%NS%panel-color: color-mix(in srgb, var(--%NS%bx-text-info) 70%, var(--%NS%bx-accent));
}
.cover-panel[_ngcontent-%COMP%]:nth-child(3) {
  --%NS%panel-color: color-mix(in srgb, var(--%NS%bx-text-success) 80%, var(--%NS%bx-primary));
}
.cover-panel[_ngcontent-%COMP%]:nth-child(4) {
  --%NS%panel-color: var(--%NS%bx-accent);
}
.cover-panel[_ngcontent-%COMP%]:nth-child(5) {
  --%NS%panel-color: color-mix(in srgb, var(--%NS%bx-text-warn) 80%, var(--%NS%bx-primary));
}
.cover-panel[_ngcontent-%COMP%]:nth-child(6) {
  --%NS%panel-color: color-mix(in srgb, var(--%NS%bx-text-danger) 75%, var(--%NS%bx-accent));
}
.cover-panel[_ngcontent-%COMP%]    > rect[_ngcontent-%COMP%]:first-child {
  fill: var(--%NS%panel-color);
  fill-opacity: 0.18;
}
.cover-panel[_ngcontent-%COMP%]    > rect[_ngcontent-%COMP%]:nth-child(2) {
  fill: var(--%NS%panel-color);
}`]})};var he=class h{nativeElement=b(ke).nativeElement;destroyRef=b(ge$1);ngZone=b(le$2);isReducedMotion=b(Br).isReducedMotion;visible=$(!1);documentVisible=$(!1);floating=G(()=>this.visible()&&this.documentVisible()&&!this.isReducedMotion());constructor(){er(()=>this.ngZone.runOutsideAngular(()=>this.observeVisibility()))}observeVisibility(){let t=this.nativeElement.ownerDocument,n=()=>this.documentVisible.set(!t.hidden),e=new IntersectionObserver(([i])=>this.visible.set(i.isIntersecting));n(),e.observe(this.nativeElement),t.addEventListener(`visibilitychange`,n),this.destroyRef.onDestroy(()=>{e.disconnect(),t.removeEventListener(`visibilitychange`,n)})}static ɵfac=function(n){return new(n||h)};static ɵcmp=Fr({type:h,selectors:[[`app-theme-material-preview`]],hostAttrs:[`aria-hidden`,`true`],hostVars:2,hostBindings:function(n,e){n&2&&vo(`data-floating`,e.floating())(`data-reduced-motion`,e.isReducedMotion())},decls:63,vars:6,consts:[[1,`material-stage`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,1,`mini-site`,`portfolio-site`,3,`bxSurfaceInteractive`,`surfaceEffects`],[`inert`,``,1,`mini-page`],[1,`mini-nav`],[1,`portfolio-hero`],[`viewBox`,`0 0 3840 2160`,`preserveAspectRatio`,`none`,`aria-hidden`,`true`,1,`portfolio-wave`],[`id`,`home-portfolio-wave`,`x1`,`0%`,`y1`,`100%`,`x2`,`100%`,`y2`,`0%`],[`offset`,`0%`,1,`wave-start`],[`offset`,`100%`,1,`wave-end`],[`fill`,`url(#home-portfolio-wave)`,`d`,`M3070 756.5C2409 1027.04 2679.5 1794 1548 1536.46C612.118 1323.45 568.5 1189 0 1536.46V2160H3840V0C3840 0 3704.5 496.811 3070 756.5Z`],[1,`mini-intro`],[1,`portfolio-note`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,1,`mini-site`,`project-site`,3,`bxSurfaceInteractive`,`surfaceEffects`],[1,`project-art`],[1,`art-caption`],[1,`art-orbit`],[1,`art-plane`],[1,`art-title`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`variant`,`elevated`,1,`glass-sample`,3,`bxSurfaceInteractive`,`surfaceEffects`],[`inert`,``,1,`glass-content`],[1,`glass-heading`],[`name`,`blocks`,`size`,`24`],[1,`glass-title`],[1,`orb-nest`],[1,`orb-nest-well`],[1,`glass-caption`],[1,`glass-spectrum`]],template:function(n,e){n&1&&(bo(0,`div`,0)(1,`bx-card`,1)(2,`div`,2)(3,`div`,3)(4,`strong`),lA(5,`Portfolio`),Go(),bo(6,`span`),lA(7,`Work · About`),Go()(),bo(8,`div`,4)(9,`h3`),lA(10,`Design`),sd(11,`br`),lA(12,`& code.`),Go(),Wv(),bo(13,`svg`,5)(14,`defs`)(15,`linearGradient`,6),sd(16,`stop`,7)(17,`stop`,8),Go()(),sd(18,`path`,9),Go()(),Yv(),bo(19,`div`,10)(20,`p`),lA(21,`Freelance coding and web design.`),Go()(),bo(22,`div`,11),lA(23,`Independent design & development`),Go()()(),bo(24,`bx-card`,12)(25,`div`,2)(26,`div`,3)(27,`strong`),lA(28,`Selected work`),Go(),bo(29,`span`),lA(30,`Web design`),Go()(),bo(31,`div`,10)(32,`h3`),lA(33,`Portfolio page`),Go()(),bo(34,`div`,13)(35,`span`,14),lA(36,`Visual studies / 01`),Go(),sd(37,`span`,15)(38,`span`,16),bo(39,`strong`,17),lA(40,`Form`),sd(41,`br`),lA(42,`& color`),Go()()()(),bo(43,`bx-card`,18)(44,`div`,19)(45,`div`,20),sd(46,`bx-icon`,21),bo(47,`div`)(48,`strong`,22),lA(49,`Blocks`),Go(),bo(50,`span`),lA(51,`Components for Angular`),Go()(),bo(52,`span`,23),sd(53,`span`,24),Go()(),bo(54,`div`,25)(55,`span`),lA(56,`Shared themes`),Go(),bo(57,`span`),lA(58,`Accessible components`),Go()(),bo(59,`div`,26),sd(60,`span`)(61,`span`)(62,`span`),Go()()()()),n&2&&(Xl(),xo(`bxSurfaceInteractive`,!0)(`surfaceEffects`,!1),Xl(23),xo(`bxSurfaceInteractive`,!0)(`surfaceEffects`,!1),Xl(19),xo(`bxSurfaceInteractive`,!0)(`surfaceEffects`,!1))},dependencies:[Gs,GC,ZC],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.material-stage[_ngcontent-%COMP%] {
  position: relative;
  isolation: isolate;
  inline-size: min(100%, 32rem);
  aspect-ratio: 6/5;
  margin-inline: auto;
}
.mini-site[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: 0;
  --%NS%bx-card-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  --%NS%bx-card-shadow: var(--%NS%bx-shadow-md, 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12));
  position: absolute;
  container-type: inline-size;
  overflow: clip;
  animation-play-state: paused;
}
.portfolio-site[_ngcontent-%COMP%] {
  --%NS%bx-card-background: color-mix(in srgb, var(--%NS%bx-accent) 9%, var(--%NS%bx-bg-surface));
  inset-block-start: 3%;
  inset-inline-start: 5%;
  inline-size: 60%;
  block-size: 80%;
  transform: rotate(-6deg);
  animation: _ngcontent-%COMP%_portfolio-float 8s ease-in-out infinite paused;
}
.project-site[_ngcontent-%COMP%] {
  --%NS%bx-card-background: color-mix(in srgb, var(--%NS%bx-text-accent) 7%, var(--%NS%bx-bg-surface));
  inset-block-start: 15%;
  inset-inline-start: 35%;
  inline-size: 60%;
  block-size: 80%;
  transform: rotate(6deg);
  animation: _ngcontent-%COMP%_project-float 9.5s ease-in-out -2s infinite paused;
}
.mini-page[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 3cqi;
  padding: 6cqi;
  font-size: 3.2cqi;
  line-height: 1.4;
}
.mini-nav[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2cqi;
  font-size: 2.6cqi;
}
.mini-nav[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  font-size: 3.5cqi;
}
.mini-intro[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 3cqi;
}
.mini-intro[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.mini-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
}
.mini-intro[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 10cqi;
  line-height: 1.05;
  letter-spacing: -0.035em;
  color: var(--%NS%bx-text-heading);
}
.mini-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
}
.portfolio-hero[_ngcontent-%COMP%] {
  position: relative;
  padding-block: 9cqi 10cqi;
  isolation: isolate;
}
.portfolio-hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  color: var(--%NS%bx-text-heading);
  font-size: 11cqi;
  line-height: 1;
  letter-spacing: -0.045em;
}
.portfolio-wave[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  z-index: -1;
  inline-size: 100%;
  block-size: 100%;
}
.wave-start[_ngcontent-%COMP%] {
  stop-color: color-mix(in srgb, var(--%NS%bx-accent) 24%, var(--%NS%bx-bg-surface));
}
.wave-end[_ngcontent-%COMP%] {
  stop-color: color-mix(in srgb, var(--%NS%bx-primary) 12%, var(--%NS%bx-bg-surface));
}
.project-art[_ngcontent-%COMP%] {
  position: relative;
  isolation: isolate;
  block-size: 68cqi;
  overflow: clip;
  border-radius: var(--%NS%bx-rounded-md, 0.5rem);
  background:
    linear-gradient(
      145deg,
      color-mix(in srgb, var(--%NS%bx-primary) 8%, var(--%NS%bx-bg-surface)),
      color-mix(in srgb, var(--%NS%bx-accent) 12%, var(--%NS%bx-bg-surface)));
}
.art-caption[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-start: 5cqi;
  inset-inline-start: 5cqi;
  color: var(--%NS%bx-text-secondary);
  font-size: 3cqi;
}
.art-orbit[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-start: 12cqi;
  inset-inline-end: -8cqi;
  inline-size: 48cqi;
  aspect-ratio: 1;
  border: 7cqi solid color-mix(in srgb, var(--%NS%bx-accent) 65%, var(--%NS%bx-primary));
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
}
.art-plane[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-end: -10cqi;
  inset-inline-start: -7cqi;
  inline-size: 48cqi;
  block-size: 30cqi;
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  background:
    linear-gradient(
      135deg,
      var(--%NS%bx-accent),
      var(--%NS%bx-primary));
  transform: rotate(-25deg);
}
.art-title[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-start: 18cqi;
  inset-inline-start: 5cqi;
  color: var(--%NS%bx-text-heading);
  font-size: 10cqi;
  line-height: 1.05;
  letter-spacing: -0.035em;
}
.portfolio-note[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-accent);
  font-size: 3cqi;
}
.glass-sample[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: 0;
  --%NS%bx-card-radius: var(--%NS%bx-rounded-2xl, 1.5rem);
  position: absolute;
  inset-block-start: 29%;
  inset-inline-start: 10%;
  inline-size: 82%;
  block-size: 56%;
  container-type: inline-size;
}
.glass-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 5cqi;
  padding: 8cqi 6cqi;
}
.glass-heading[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 3cqi;
}
.glass-heading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1cqi;
}
.glass-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 3cqi;
}
.glass-title[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-heading);
  font-size: 6cqi;
  line-height: 1.2;
}
.glass-caption[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 2cqi 4cqi;
  color: var(--%NS%bx-text-secondary);
  font-size: 3cqi;
}
.glass-heading[_ngcontent-%COMP%]    > bx-icon[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-accent);
}
.orb-nest[_ngcontent-%COMP%] {
  display: block;
  flex: none;
  margin-inline-start: auto;
}
.orb-nest-well[_ngcontent-%COMP%] {
  display: block;
  box-sizing: border-box;
  inline-size: 56px;
  block-size: 56px;
  border: 1px solid color-mix(in srgb, var(--%NS%bx-primary) 25%, var(--%NS%bx-border-default));
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  background: color-mix(in srgb, var(--%NS%bx-bg-canvas) 70%, transparent);
  box-shadow: inset 0 2px 6px color-mix(in srgb, var(--%NS%bx-text-primary) 8%, transparent);
}
.glass-spectrum[_ngcontent-%COMP%] {
  display: flex;
  gap: 2cqi;
  block-size: 3cqi;
}
.glass-spectrum[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  flex: 2;
  border-radius: var(--%NS%bx-rounded-sm, 0.25rem);
  background: var(--%NS%bx-accent);
}
.glass-spectrum[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {
  flex: 1;
  background: color-mix(in srgb, var(--%NS%bx-accent) 50%, var(--%NS%bx-primary));
}
.glass-spectrum[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {
  flex: 1;
  background: var(--%NS%bx-primary);
}
[data-floating=true][_nghost-%COMP%]   .mini-site[_ngcontent-%COMP%] {
  animation-play-state: running;
}
[data-reduced-motion=true][_nghost-%COMP%]   .mini-site[_ngcontent-%COMP%] {
  animation: none;
}
@keyframes _ngcontent-%COMP%_portfolio-float {
  0%, 100% {
    translate: 0 0;
    rotate: 0deg;
  }
  50% {
    translate: 0.7% -1.5%;
    rotate: 0.6deg;
  }
}
@keyframes _ngcontent-%COMP%_project-float {
  0%, 100% {
    translate: 0 0;
    rotate: 0deg;
  }
  50% {
    translate: -0.7% 1.5%;
    rotate: -0.6deg;
  }
}
@media (prefers-reduced-motion: reduce) {
  .mini-site[_ngcontent-%COMP%] {
    animation: none;
  }
}`]})};var ut=[`gallery`];var nt=h=>({role:h});var tt=(h,t)=>t.token;function bt(h,t){if(h&1&&(bo(0,`div`,11),$s(1,12),Go()),h&2){let n=t.$implicit;Wo();let e=FT(16);ka(`--%NS%bx-glass-surface`,`var(`+n.token+`)`)(`--%NS%bx-glass-text`,`var(`+n.textColorToken+`)`),xo(`bxSurfaceEmission`,!1),Xl(),xo(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,bb(7,nt,n))}}function vt(h,t){if(h&1&&(bo(0,`div`,13),$s(1,12),Go()),h&2){let n=t.$implicit;Wo();let e=FT(16);ka(`background`,`var(`+n.token+`)`)(`color`,`var(`+n.textColorToken+`)`),Xl(),xo(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,bb(6,nt,n))}}function yt(h,t){if(h&1&&(bo(0,`strong`),lA(1,`Aa`),Go(),bo(2,`span`),lA(3),Go()),h&2){let n=t.role;Xl(3),ik(n.label)}}var ge=class h{themeStudioService=b(_e);gallery=Sz.required(`gallery`,{read:ke});roles=[...o].reverse();active=$(!1);pinned=$(!1);opposite=G(()=>this.themeStudioService.oppositeMode());label=G(()=>`Peek at the ${this.opposite()} theme`);oppositeStyles=G(()=>{let t=this.opposite(),n=[`--bx-bg-canvas`,`--bx-border-default`,`--bx-text-primary`,...this.roles.flatMap(e=>[e.token,e.textColorToken])];return Object.fromEntries(n.map(e=>[e,this.themeStudioService.effective(e,t)]).filter(([,e])=>!!e))});x=0;y=0;move(t){if(t.pointerType===`touch`&&!this.pinned())return;let e=this.gallery().nativeElement.getBoundingClientRect();this.setPoint(t.clientX-e.left,t.clientY-e.top),this.active.set(!0)}leave(){this.pinned()||this.active.set(!1)}toggle(){let t=!this.pinned(),n=this.gallery().nativeElement;this.pinned.set(t),this.active.set(t),this.setPoint(n.clientWidth/2,n.clientHeight/2)}keydown(t){if(t.key===`Escape`){this.pinned.set(!1),this.active.set(!1);return}if(!t.key.startsWith(`Arrow`))return;t.preventDefault(),this.pinned()||this.toggle();let n=t.key===`ArrowLeft`?-24:t.key===`ArrowRight`?24:0,e=t.key===`ArrowUp`?-24:t.key===`ArrowDown`?24:0;this.setPoint(this.x+n,this.y+e)}setPoint(t,n){let e=this.gallery().nativeElement;this.x=Math.max(0,Math.min(e.clientWidth,t)),this.y=Math.max(0,Math.min(e.clientHeight,n)),Kn(e,{"--loupe-x":`${this.x}px`,"--loupe-y":`${this.y}px`})}static ɵfac=function(n){return new(n||h)};static ɵcmp=Fr({type:h,selectors:[[`app-theme-swatch-preview`]],viewQuery:function(n,e){n&1&&Yy(e.gallery,ut,5,ke),n&2&&fb()},decls:17,vars:8,consts:[[`gallery`,``],[`sample`,``],[1,`swatch-gallery`,3,`pointermove`,`pointerdown`,`pointerleave`,`pointercancel`],[1,`theme-swatches`],[`bxSurface`,``,1,`theme-swatch`,3,`bxSurfaceEmission`,`--%NS%bx-glass-surface`,`--%NS%bx-glass-text`],[`aria-hidden`,`true`,`inert`,``,1,`theme-peek`],[1,`theme-swatch`,3,`background`,`color`],[`aria-hidden`,`true`,1,`peek-ring`],[1,`theme-study-footer`],[`bx-button`,``,`variant`,`icon`,`color`,`grayscale`,`type`,`button`,3,`click`,`keydown`,`bxTooltip`],[`name`,`search`,`size`,`16`],[`bxSurface`,``,1,`theme-swatch`,3,`bxSurfaceEmission`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`theme-swatch`]],template:function(n,e){n&1&&(bo(0,`div`,2,0),br(`pointermove`,function(o){return e.move(o)})(`pointerdown`,function(o){return e.move(o)})(`pointerleave`,function(){return e.leave()})(`pointercancel`,function(){return e.leave()}),bo(2,`div`,3),ab(3,bt,2,9,`div`,4,tt),Go(),bo(5,`div`,5)(6,`div`,3),ab(7,vt,2,8,`div`,6,tt),Go()(),sd(9,`span`,7),Go(),bo(10,`div`,8)(11,`span`),lA(12,`Theme preview`),Go(),bo(13,`button`,9),br(`click`,function(){return e.toggle()})(`keydown`,function(o){return e.keydown(o)}),sd(14,`bx-icon`,10),Go()(),rd(15,yt,4,1,`ng-template`,null,1,RA)),n&2&&(tr(`is-peeking`,e.active()),Xl(3),cb(e.roles),Xl(2),XT(e.oppositeStyles()),vo(`data-theme`,e.opposite()),Xl(2),cb(e.roles),Xl(6),xo(`bxTooltip`,e.label()),vo(`aria-label`,e.label())(`aria-pressed`,e.pinned()))},dependencies:[Ta,GC,_e$1,ZC,Pt],styles:[`
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.swatch-gallery[_ngcontent-%COMP%] {
  --%NS%loupe-x: 50%;
  --%NS%loupe-y: 50%;
  --%NS%loupe-radius: 4.5rem;
  position: relative;
  isolation: isolate;
  overflow: clip;
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.theme-swatches[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 6rem), 1fr));
  gap: var(--%NS%bx-space-3, 0.75rem);
}
.theme-swatch[_ngcontent-%COMP%] {
  --%NS%bx-glass-opacity: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--%NS%bx-space-8, 2rem);
  min-inline-size: 0;
  padding: var(--%NS%bx-space-4, 1rem);
  border: var(--%NS%bx-border-width) var(--%NS%bx-border-style) var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.theme-swatch[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  padding-block-start: var(--%NS%bx-space-10, 2.5rem);
  font-size: clamp(1.5rem, 3.5vw, 2.75rem);
  line-height: 1;
  letter-spacing: -0.05em;
}
.theme-swatch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  overflow-wrap: anywhere;
}
.theme-peek[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  visibility: hidden;
  pointer-events: none;
  clip-path: circle(var(--%NS%loupe-radius) at var(--%NS%loupe-x) var(--%NS%loupe-y));
  background: var(--%NS%bx-bg-canvas);
}
.peek-ring[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-start: var(--%NS%loupe-y);
  left: var(--%NS%loupe-x);
  inline-size: calc(var(--%NS%loupe-radius) * 2);
  block-size: calc(var(--%NS%loupe-radius) * 2);
  box-sizing: border-box;
  border: 2px solid var(--%NS%bx-border-brand);
  border-radius: var(--%NS%bx-rounded-pill, 9999px);
  box-shadow: var(--%NS%bx-shadow-md, 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12));
  transform: translate(-50%, -50%);
  visibility: hidden;
  pointer-events: none;
}
.is-peeking[_ngcontent-%COMP%]   .theme-peek[_ngcontent-%COMP%], 
.is-peeking[_ngcontent-%COMP%]   .peek-ring[_ngcontent-%COMP%] {
  visibility: visible;
}
.theme-study-footer[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  margin-block-start: var(--%NS%bx-space-5, 1.25rem);
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
}
@media (hover: hover) and (pointer: fine) {
  .swatch-gallery.is-peeking[_ngcontent-%COMP%] {
    cursor: none;
  }
}
@media (forced-colors: active) {
  .peek-ring[_ngcontent-%COMP%] {
    border-color: Highlight;
  }
}
@media (max-width: 768px) {
  .theme-swatch[_ngcontent-%COMP%] {
    padding: var(--%NS%bx-space-3, 0.75rem);
  }
}`]})};var xt=[`lightGarden`];var it=class h{packageReleaseService=b(g);version=`v${c}`;figmaLibraryUrl=n;componentCount=e.length;exampleTime=`09:30`;lightGardenElement=Sz.required(`lightGarden`,{read:ke});static ɵfac=function(n){return new(n||h)};static ɵcmp=Fr({type:h,selectors:[[`app-home`]],viewQuery:function(n,e){n&1&&Yy(e.lightGardenElement,xt,5,ke),n&2&&fb()},decls:101,vars:22,consts:[[`lightGarden`,``],[1,`light-garden`],[1,`home-container`,3,`showBreadcrumbs`,`autoResolveTitlesFromNavigation`],[1,`hero`],[1,`hero-content`],[1,`hero-subtitle`],[1,`hero-actions`],[`bx-button`,``,`variant`,`filled`,`color`,`primary`,`routerLink`,`/installation`],[`name`,`arrow-right`,`size`,`20`],[`bx-button`,``,`variant`,`tonal`,`color`,`primary`,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`name`,`arrow-up-right`,`size`,`20`],[`id`,`orb-instructions`,1,`cdk-visually-hidden`],[1,`home-sections`,`showcase-sections`],[`aria-labelledby`,`components-title`,1,`showcase-section`,`split-section`],[1,`section-copy`],[1,`eyebrow`],[`id`,`components-title`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/components`],[`name`,`arrow-right`,`size`,`18`],[`data-orb-stop`,``,`aria-hidden`,`true`,1,`component-study`],[`title`,`Design review`,`subtitle`,`Meeting`,`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,1,`meeting-study`,3,`surfaceEffects`,`bxSurfaceInteractive`],[`inert`,``,1,`meeting-tags`],[`text`,`Design`,`color`,`accent`,`variant`,`tonal`,3,`tooltipOnTruncate`],[`text`,`30 min`,`color`,`neutral`,`variant`,`tonal`,3,`tooltipOnTruncate`],[`tone`,`success`,`message`,`Changes saved`,1,`meeting-notice`,3,`emissive`],[`variant`,`elevated`,1,`meeting-guests`],[`name`,`users`,`size`,`20`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,1,`time-study`,3,`surfaceEffects`,`bxSurfaceInteractive`],[`inert`,``],[`label`,`Meeting time`,`subscriptSizing`,`dynamic`,3,`hourCycle`,`minuteStep`,`clearable`,`value`],[`aria-labelledby`,`theming-title`,1,`showcase-section`,`split-section`],[`id`,`theming-title`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/studio`],[`data-orb-stop`,``],[`aria-labelledby`,`appearance-title`,1,`showcase-section`,`split-section`],[`id`,`appearance-title`],[`bx-button`,``,`variant`,`tonal`,`routerLink`,`/appearance`],[`data-orb-stop`,``,3,`showcase`],[`aria-labelledby`,`design-library-title`,1,`showcase-section`,`split-section`],[`id`,`design-library-title`],[`name`,`arrow-up-right`,`size`,`18`],[`data-orb-stop`,``,`target`,`_blank`,`rel`,`noopener noreferrer`,`aria-label`,`Preview the Blocks Angular UI kit in Figma`,`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,1,`design-library-preview`,3,`href`],[1,`home-footer`],[1,`footer-links`],[`bx-button`,``,`variant`,`text`,`color`,`primary`,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`name`,`arrow-up-right`,`size`,`16`],[`bx-button`,``,`variant`,`text`,`color`,`primary`,`href`,`https://github.com/filipmazev/Blocks/tree/main/projects/blocks`,`target`,`_blank`,`rel`,`noopener noreferrer`],[3,`stage`,`cards`]],template:function(n,e){n&1&&(bo(0,`div`,1,0)(2,`bx-page-container`,2)(3,`bx-page-content`)(4,`header`,3)(5,`div`,4)(6,`h1`),lA(7,`Build with `),bo(8,`span`),lA(9,`Blocks.`),Go()(),bo(10,`p`,5),lA(11,`Angular components with shared theming and accessible controls.`),Go(),bo(12,`div`,6)(13,`a`,7),lA(14,`Get started`),sd(15,`bx-icon`,8),Go(),bo(16,`a`,9),lA(17,`Figma library`),sd(18,`bx-icon`,10),Go()()(),sd(19,`app-theme-material-preview`),Go(),bo(20,`span`,11),lA(21,`Drag Orby to play, use arrow keys to move, or Escape to return home.`),Go(),bo(22,`div`,12)(23,`section`,13)(24,`div`,14)(25,`span`,15),lA(26,`01 / Components`),Go(),bo(27,`h2`,16),lA(28,`Find the components you need.`),Go(),bo(29,`p`),lA(30),Go(),bo(31,`a`,17),lA(32,`Explore components`),sd(33,`bx-icon`,18),Go()(),bo(34,`div`,19)(35,`bx-card`,20)(36,`div`,21),sd(37,`bx-tag`,22)(38,`bx-tag`,23),Go()(),sd(39,`bx-alert`,24),bo(40,`bx-card`,25),sd(41,`bx-icon`,26),bo(42,`strong`),lA(43,`3`),Go(),bo(44,`span`),lA(45,`Guests`),Go()(),bo(46,`bx-card`,27)(47,`div`,28),sd(48,`bx-time-picker`,29),Go()()()(),bo(49,`section`,30)(50,`div`,14)(51,`span`,15),lA(52,`02 / Theme Studio`),Go(),bo(53,`h2`,31),lA(54,`Customize a shared theme.`),Go(),bo(55,`p`),lA(56,` Set colors, corners, spacing, and shadows in Theme Studio. Preview your changes across components, then export the theme for your application. `),Go(),bo(57,`a`,32),lA(58,`Explore Theme Studio`),sd(59,`bx-icon`,18),Go()(),sd(60,`app-theme-swatch-preview`,33),Go(),bo(61,`section`,34)(62,`div`,14)(63,`span`,15),lA(64,`03 / Appearance`),Go(),bo(65,`h2`,35),lA(66,`Glass, light, and motion.`),Go(),bo(67,`p`),lA(68,` Adjust translucency, lighting, and motion from one place. Surfaces respond to your theme and accessibility preferences, including reduced motion and opaque materials. `),Go(),bo(69,`a`,36),lA(70,`Explore appearance`),sd(71,`bx-icon`,18),Go()(),sd(72,`app-appearance-preview`,37),Go(),bo(73,`section`,38)(74,`div`,14)(75,`span`,15),lA(76,`04 / Design in Figma`),Go(),bo(77,`h2`,39),lA(78,`Design with the`),sd(79,`br`),lA(80,`components you build.`),Go(),bo(81,`p`),lA(82,` Use the Blocks UI kit to work with components, shared tokens, and page layouts in Figma. Copy what you need or duplicate the kit into your own workspace. `),Go(),bo(83,`a`,9),lA(84,`Open the Figma library`),sd(85,`bx-icon`,40),Go()(),bo(86,`a`,41),sd(87,`app-figma-library-preview`),Go()()()(),bo(88,`bx-page-footer`,42)(89,`span`),lA(90,`Designed & developed by Filip Mazev`),Go(),bo(91,`span`),lA(92),Go(),bo(93,`div`,43)(94,`a`,44),lA(95,`npm package `),sd(96,`bx-icon`,45),Go(),bo(97,`a`,46),lA(98,`GitHub `),sd(99,`bx-icon`,45),Go()()()(),sd(100,`app-light-orb`,47),Go()),n&2&&(Xl(2),xo(`showBreadcrumbs`,!1)(`autoResolveTitlesFromNavigation`,!1),Xl(14),xo(`href`,e.figmaLibraryUrl,R0),Xl(14),mb(` `,e.componentCount,` components and directives for forms, navigation, overlays, and more. Browse working examples and see how they fit into your application. `),Xl(5),xo(`surfaceEffects`,!1)(`bxSurfaceInteractive`,!1),Xl(2),xo(`tooltipOnTruncate`,!1),Xl(),xo(`tooltipOnTruncate`,!1),Xl(),xo(`emissive`,!1),Xl(7),xo(`surfaceEffects`,!1)(`bxSurfaceInteractive`,!1),Xl(2),xo(`hourCycle`,24)(`minuteStep`,15)(`clearable`,!1)(`value`,e.exampleTime),Xl(24),xo(`showcase`,!0),Xl(11),xo(`href`,e.figmaLibraryUrl,R0),Xl(3),xo(`href`,e.figmaLibraryUrl,R0),Xl(6),mb(`Blocks `,e.version),Xl(2),xo(`href`,e.packageReleaseService.npmPackageUrl(),R0),Xl(6),xo(`stage`,e.lightGardenElement().nativeElement)(`cards`,e.lightGardenElement().nativeElement))},dependencies:[$i,al,ol,sl,ZC,_e$1,GC,he,ce,Ws,js,Gs,Jr,le$1,ge,me],styles:[`
.hero[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 23rem), 1fr));
  gap: var(--%NS%bx-space-12, 3rem);
  align-items: center;
  padding-block: var(--%NS%bx-space-12, 3rem);
}
.hero-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--%NS%bx-space-6, 1.5rem);
}
.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  max-inline-size: 12ch;
  margin: 0;
  font-size: clamp(2.5rem, 4.3vw, 4.5rem);
  line-height: 1.08;
}
.hero-subtitle[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 1.125rem;
  max-inline-size: 30ch;
  margin: 0;
  line-height: 1.6;
}
.hero-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-3, 0.75rem);
  margin-block-start: var(--%NS%bx-space-2, 0.5rem);
}
.showcase-sections[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 10rem;
  min-inline-size: 0;
  margin-block-start: 4rem;
}
@media (max-width: 1024px) {
  .showcase-sections[_ngcontent-%COMP%] {
    gap: 7rem;
  }
}
@media (max-width: 768px) {
  .showcase-sections[_ngcontent-%COMP%] {
    gap: var(--%NS%bx-space-12, 3rem);
  }
}
.showcase-section[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--%NS%bx-space-6, 1.5rem);
  min-inline-size: 0;
}
.showcase-section[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {
  align-self: flex-start;
}
.showcase-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
.showcase-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], 
.showcase-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
}
.showcase-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
.showcase-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-heading);
}
.showcase-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  line-height: 1.2;
  letter-spacing: -0.025em;
}
.showcase-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  line-height: 1.65;
}
.intro-copy[_ngcontent-%COMP%], 
.section-copy[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--%NS%bx-space-4, 1rem);
  min-inline-size: 0;
}
.split-section[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: center;
  gap: var(--%NS%bx-space-12, 3rem);
  inline-size: 100%;
  min-inline-size: 0;
}
.split-section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  min-inline-size: 0;
}
.split-section[_ngcontent-%COMP%]:nth-of-type(even)    > [_ngcontent-%COMP%]:first-child {
  grid-column: 2;
  grid-row: 1;
}
.split-section[_ngcontent-%COMP%]:nth-of-type(even)    > [_ngcontent-%COMP%]:last-child {
  grid-column: 1;
  grid-row: 1;
}
@media (min-width: 1536px) {
  .split-section[_ngcontent-%COMP%] {
    column-gap: 5rem;
  }
}
@media (max-width: 1024px) {
  .split-section[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
  }
  .split-section[_ngcontent-%COMP%]:nth-of-type(even)    > [_ngcontent-%COMP%]:first-child, 
   .split-section[_ngcontent-%COMP%]:nth-of-type(even)    > [_ngcontent-%COMP%]:last-child {
    grid-column: auto;
    grid-row: auto;
  }
}
[_nghost-%COMP%] {
  display: block;
  min-inline-size: 0;
}
.light-garden[_ngcontent-%COMP%] {
  position: relative;
  isolation: isolate;
  min-inline-size: 0;
}
.hero[_ngcontent-%COMP%] {
  isolation: isolate;
}
.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-accent);
}
.home-sections[_ngcontent-%COMP%] {
  position: relative;
  z-index: 0;
  padding-block-end: var(--%NS%bx-space-12, 3rem);
}
.component-study[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: var(--%NS%bx-space-8, 2rem) auto var(--%NS%bx-space-6, 1.5rem) auto;
  min-inline-size: 0;
  padding: var(--%NS%bx-space-3, 0.75rem);
  isolation: isolate;
}
.meeting-study[_ngcontent-%COMP%], 
.time-study[_ngcontent-%COMP%], 
.meeting-guests[_ngcontent-%COMP%] {
  --%NS%bx-card-radius: var(--%NS%bx-rounded-xl, 1rem);
  --%NS%bx-card-shadow: var(--%NS%bx-shadow-md, 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12));
  min-inline-size: 0;
}
.meeting-study[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: var(--%NS%bx-space-4, 1rem);
  grid-column: 2/-1;
  grid-row: 2/4;
}
.meeting-tags[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-2, 0.5rem);
}
.meeting-notice[_ngcontent-%COMP%] {
  --%NS%bx-alert-padding: var(--%NS%bx-space-3, 0.75rem) var(--%NS%bx-space-4, 1rem);
  --%NS%bx-alert-radius: var(--%NS%bx-rounded-xl, 1rem);
  --%NS%bx-alert-shadow: var(--%NS%bx-shadow-md, 0 4px 8px -1px rgba(0, 0, 0, 0.15), 0 2px 4px -2px rgba(0, 0, 0, 0.12));
  z-index: 1;
  grid-column: 6/12;
  grid-row: 1/3;
  align-self: start;
  font-size: 0.8125rem;
}
.meeting-guests[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: var(--%NS%bx-space-4, 1rem);
  z-index: 1;
  grid-column: 1/6;
  grid-row: 3/5;
  align-self: end;
  transform: rotate(-4deg);
}
.meeting-guests[_ngcontent-%COMP%]   bx-icon[_ngcontent-%COMP%] {
  position: absolute;
  inset-block-start: var(--%NS%bx-space-4, 1rem);
  inset-inline-end: var(--%NS%bx-space-4, 1rem);
  color: var(--%NS%bx-text-accent);
}
.meeting-guests[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  display: block;
  padding-inline-end: var(--%NS%bx-space-6, 1.5rem);
  color: var(--%NS%bx-text-heading);
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.06em;
}
.meeting-guests[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  display: block;
  margin-block-start: var(--%NS%bx-space-2, 0.5rem);
  color: var(--%NS%bx-text-secondary);
  font-size: 0.6875rem;
}
.time-study[_ngcontent-%COMP%] {
  --%NS%bx-card-padding: var(--%NS%bx-space-3, 0.75rem);
  z-index: 1;
  grid-column: 7/-1;
  grid-row: 4;
  align-self: end;
  transform: rotate(3deg);
}
.design-library-preview[_ngcontent-%COMP%] {
  display: block;
  min-inline-size: 0;
  overflow: clip;
  border: var(--%NS%bx-border-width) var(--%NS%bx-border-style) var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
}
.design-library-preview[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: var(--%NS%bx-space-1, 0.25rem);
}
.home-footer[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--%NS%bx-space-4, 1rem);
  padding-block: var(--%NS%bx-space-6, 1.5rem);
  color: var(--%NS%bx-text-secondary);
  font-size: 0.8rem;
}
.footer-links[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-4, 1rem);
}
@media (max-width: 768px) {
  .hero[_ngcontent-%COMP%] {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--%NS%bx-space-6, 1.5rem);
    padding-block: var(--%NS%bx-space-4, 1rem) var(--%NS%bx-space-6, 1.5rem);
  }
}
@media (max-width: 640px) {
  .meeting-notice[_ngcontent-%COMP%] {
    grid-column: 5/-1;
  }
}`]})};export{it as Home};