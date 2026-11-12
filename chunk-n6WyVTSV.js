import{n as g,t as c}from"./chunk-BiA026zf.js";import{w as e}from"./main-UXQC7EJC.js";import{D as me}from"./chunk-g_MLkDaC.js";import{$ as GC,Ba as te$1,Cr as ae$1,Dr as b,Ea as re,Ft as Le$1,Hn as Vt,Ir as ce,Lr as ck,Q as G,Qa as un,Rt as M,Si as j,Sn as ST,T as CT,To as y,U as F,Vi as lk,Xn as Wt,Yt as Nt,Za as ul,Zn as X,Zr as f,ba as qy,cr as Ze,er as Xt,fr as _,g as B,i as $f,ii as g$1,j as D,ji as kT,kn as Tt,l as $t,mn as R,ri as ft,sn as Q,ti as fe,ua as pT,va as qi,wt as K,xn as Rt,xo as xe}from"./chunk-CpeWzSSw.js";var u=(g,e,n)=>Math.max(e,Math.min(n,g));var te=class{x=0;y=0;vx=0;vy=0;angle=0;spin=0;stretchAngle=0;scaleX=.74;scaleY=.74;state=`asleep`;mood=`primary`;impactWall=`bottom`;contact;impactSerial=0;bounds={left:0,right:0,top:0,bottom:0,cruiseY:0};initialized=!1;clock=0;age=0;grounded=0;impact=0;agitation=0;quiet=0;moodTime=0;calmReturn=!1;recoveryAngle=0;courseX=0;courseY=0;steeringFromNudge=!1;resize(e){this.bounds=e,(!this.initialized||this.state===`asleep`)&&(this.x=this.homeX(),this.y=this.homeY(),this.initialized=!0),this.x=u(this.x,e.left,e.right),this.y=u(this.y,e.top,e.bottom)}wake(){this.state===`asleep`&&(this.state=`waking`,this.age=0)}grab(){this.state=`dragging`,this.age=this.vx=this.vy=this.impact=0,this.scaleX=this.scaleY=1,this.stretchAngle=0}drag(e,n){this.x=u(e,this.bounds.left,this.bounds.right),this.y=u(n,this.bounds.top,this.bounds.bottom)}throw(e,n,t=0,i){this.spin=u(t,-25,25);let r=Math.hypot(e,n)>=650&&(i===void 0||i>=28);this.state=r||this.mood===`danger`?`falling`:`coasting`,this.vx=u(e,-2200,2200),this.vy=u(n,-2200,2200),this.age=this.grounded=this.quiet=0;let d=Math.min(1,Math.hypot(this.vx,this.vy)/1200);this.agitation=Math.min(1.5,this.agitation+(d<.25?.04:.18+d*.28)),this.agitation>=.85||this.mood===`danger`?this.setMood(`danger`,6.5):d>=.45?this.setMood(`warn`,2.4):this.mood!==`info`&&this.setMood(`success`,2.6)}nudge(e=0,n=0,t=this.spin){this.state=this.mood===`danger`?`falling`:`coasting`,this.vx=u(e,-650,650),this.vy=u(n,-650,650),this.spin=u(t,-25,25),this.age=0}drop(){this.state=`falling`,this.age=this.grounded=0}fly(){this.steeringFromNudge=!1,this.state=`flying`,this.age=this.grounded=this.impact=0,this.vy=this.mood===`danger`?-600:-220,this.courseX=this.x,this.courseY=this.y}returnHome(e=!1){if(e){this.sleep();return}this.mood!==`danger`&&(this.state=`returning`,this.age=0)}park(){this.vx=this.vy=this.impact=0}step(e){let n=u(e,0,.15);for(;n>1e-8;){let t=Math.min(n,.008333333333333333);this.advance(t),n-=t}}advance(e){if(this.state===`asleep`)return;if(this.clock+=e,this.age+=e,this.quiet+=e,this.updateMood(e),this.state===`dragging`){this.age>1.4&&this.mood===`primary`&&this.setMood(`success`,2);return}this.impact*=Math.exp(-e*12),this.updateDeformation();let n=this.bounds;if(this.state===`waking`){let i=Math.min(1,this.age/.65),r=i*i*(3-2*i);this.x=this.homeX(),this.y=Math.max(n.top,this.homeY()-r*32),this.scaleX=this.scaleY=.74+r*.26,this.angle=Math.sin(i*Math.PI)*-.16,i===1&&this.fly();return}if(this.state===`recovering`){let i=u((this.age-.25)/.6,0,1);this.angle=this.recoveryAngle+Math.sin(i*Math.PI*8)*Math.sin(i*Math.PI)*.24,this.scaleX=1+Math.sin(i*Math.PI*6)*.07,this.scaleY=2-this.scaleX,this.age>=1.05&&(this.calmReturn?this.returnHome():this.fly());return}if(this.state===`returning`){this.vx+=((this.homeX()-this.x)*15-this.vx*7.5)*e,this.vy+=((this.homeY()-this.y)*15-this.vy*7.5)*e;let i=Math.hypot(this.homeX()-this.x,this.homeY()-this.y);if(this.scaleX=this.scaleY=.74+Math.min(1,i/75)*.26,this.angle*=Math.exp(-e*6),i<1.2&&Math.hypot(this.vx,this.vy)<6||this.age>5){this.sleep();return}}else if(this.state===`coasting`)this.vx*=Math.exp(-e*.6),this.vy*=Math.exp(-e*.6),this.age>.9&&(this.courseX=this.x,this.courseY=this.y,this.steeringFromNudge=!0,this.state=`flying`,this.age=0);else if(this.state===`flying`&&this.mood!==`danger`){let i=n.right-n.left,r=n.left+i*(.5+Math.sin(this.clock*.48+.8)*.4),d=u(n.cruiseY+Math.sin(this.clock*.9)*48,n.top,n.bottom-24),C=Math.min(1,this.age/2.2),S=C*C*(3-2*C),w=this.courseX+(r-this.courseX)*S,v=this.courseY+(d-this.courseY)*S;if(this.steeringFromNudge){let p=1-Math.exp(-e*2.2*S);this.vx+=(u((r-this.x)*.7,-200,200)-this.vx)*p,this.vy+=(u((d-this.y)*.7,-150,150)-this.vy)*p}else this.vx+=((w-this.x)*3.6-this.vx*3.2)*e,this.vy+=((v-this.y)*4-this.vy*3)*e;this.age>10&&this.mood===`primary`&&this.returnHome()}else this.vy+=(this.mood===`danger`?2150:1850)*e,this.vx*=Math.exp(-e*.16);this.x+=this.vx*e,this.y+=this.vy*e,this.state!==`returning`&&(this.angle+=this.spin*e,this.spin*=Math.exp(-e*(this.state===`falling`||this.state===`coasting`?.28:1.2)));let t=this.mood===`danger`;(this.x<n.left||this.x>n.right)&&(this.hit(this.x<n.left?`left`:`right`,Math.abs(this.vx)),this.x=u(this.x,n.left,n.right),this.vx*=t?-.97:-.82,this.spin=this.spin*.8+this.vy*(this.impactWall===`left`?.003:-.003)),this.y<n.top&&(this.hit(`top`,Math.abs(this.vy)),this.y=n.top,this.vy=Math.abs(this.vy)*(t?.9:.7),this.spin=this.spin*.8-this.vx*.003),this.y>=n.bottom&&(this.y=n.bottom,this.vy>75&&(this.spin=this.spin*.8+this.vx*.003),this.hit(`bottom`,this.vy),t?(this.vy=-u(Math.abs(this.vy)*.94,680,1100),this.vx=(Math.sign(this.vx)||(this.x>(n.left+n.right)/2?-1:1))*Math.max(850,Math.abs(this.vx)*.97)):this.vy>75?(this.vy*=-.62,this.vx*=.8):(this.vy=0,this.vx*=Math.exp(-e*9),this.grounded+=e),!t&&this.state===`falling`&&this.grounded>.13&&(this.state=`recovering`,this.recoveryAngle=this.angle,this.age=this.vx=this.vy=this.spin=0))}updateMood(e){this.quiet>2&&(this.agitation=Math.max(0,this.agitation-e*.1)),!(this.moodTime<=0)&&(this.moodTime-=e,!(this.moodTime>0)&&(this.mood===`danger`?(this.agitation=.12,this.calmReturn=!0,this.setMood(`info`,3.5),this.state===`flying`&&(this.state=`falling`),this.vx*=.65,this.vy*=.65):(this.setMood(`primary`,0),this.calmReturn&&this.state===`flying`&&this.returnHome())))}hit(e,n){n<120||(this.impact=Math.min(1,n/650),this.impactWall=e,this.impactSerial++,this.updateDeformation())}updateDeformation(){let e=Math.min(1,Math.hypot(this.vx,this.vy)/1300);if(this.contact=this.impact>.03?this.impactWall:void 0,this.impact>.03){let n=this.impactWall===`left`||this.impactWall===`right`;this.stretchAngle=0,this.scaleX=1+this.impact*(n?-.3:.34),this.scaleY=1+this.impact*(n?.3:-.27)}else this.state===`falling`||this.state===`flying`&&this.mood===`danger`?(this.stretchAngle=Math.atan2(this.vy,this.vx)-Math.PI/2,this.scaleX=1-e*.12,this.scaleY=1+e*.2):(this.stretchAngle=0,this.scaleX=this.scaleY=1)}setMood(e,n){this.mood=e,this.moodTime=n}sleep(){this.state=`asleep`,this.x=this.homeX(),this.y=this.homeY(),this.vx=this.vy=this.angle=this.spin=this.stretchAngle=this.agitation=this.moodTime=0,this.mood=`primary`,this.calmReturn=!1,this.scaleX=this.scaleY=.74}homeX(){return u(this.bounds.homeX??this.bounds.left+(this.bounds.right-this.bounds.left)*.76,this.bounds.left,this.bounds.right)}homeY(){return u(this.bounds.homeY??this.bounds.cruiseY,this.bounds.top,this.bounds.bottom)}};function Ne(g,e){let n=g[g.length-1];if(!n||e-n.time>120)return[0,0];let t=g.filter(p=>n.time-p.time<=100);if(t.length<2)return[0,0];let i=t[0].time,r=t.reduce((p,P)=>p+(P.time-i)/1e3,0)/t.length,d=t.reduce((p,P)=>p+P.x,0)/t.length,C=t.reduce((p,P)=>p+P.y,0)/t.length,S=0,w=0,v=0;for(let p of t){let P=(p.time-i)/1e3-r;S+=P*P,w+=P*(p.x-d),v+=P*(p.y-C)}return S>1e-7?[u(w/S,-2200,2200),u(v/S,-2200,2200)]:[u((n.x-t[0].x)/.008,-2200,2200),u((n.y-t[0].y)/.008,-2200,2200)]}function ae(g,e){let n=g[g.length-1],[t,i]=Ne(g,n?Math.min(e,n.time+120):e);if(!n||e-n.time>180)return{vx:0,vy:0,spin:0,travel:0};let r=g.filter(y=>n.time-y.time<=90),d=(y,c)=>{if(r.length<3)return c;let b=r.map(s=>({t:(s.time-n.time)/1e3,p:s[y]})),l=Array.from({length:3},(s,M)=>Array.from({length:4},(L,f)=>f===3?b.reduce((R,N)=>R+N.p*Math.pow(N.t,M),0):b.reduce((R,N)=>R+Math.pow(N.t,M+f),0)));for(let s=0;s<3;s++){let M=s;for(let f=s+1;f<3;f++)Math.abs(l[f][s])>Math.abs(l[M][s])&&(M=f);if(Math.abs(l[M][s])<1e-10)return c;[l[s],l[M]]=[l[M],l[s]];let L=l[s][s];for(let f=s;f<4;f++)l[s][f]/=L;for(let f=0;f<3;f++)if(f!==s){let R=l[f][s];for(let N=s;N<4;N++)l[f][N]-=R*l[s][N]}}return u(l[1][3],-2200,2200)},C=0,S=0,w=0;for(let y=1;y<r.length;y++)w+=Math.hypot(r[y].x-r[y-1].x,r[y].y-r[y-1].y);for(let y=2;y<r.length;y++){let c=r[y-2],b=r[y-1],l=r[y],s=b.x-c.x,M=b.y-c.y,L=l.x-b.x,f=l.y-b.y;Math.hypot(s,M)<.4||Math.hypot(L,f)<.4||(C+=Math.atan2(s*f-M*L,s*L+M*f),S+=(l.time-c.time)/2e3)}let v=d(`x`,t),p=d(`y`,i);Math.hypot(v,p)<Math.hypot(t,i)*.65&&(v=t*.8,p=i*.8);let _=Math.hypot(v,p);return w>=4&&_>0&&_<80&&(v=v/_*80,p=p/_*80),{vx:v,vy:p,spin:w>12&&S>.01&&Math.abs(C)>.1?u(C/S,-25,25):0,travel:w}}var Te=[`orb`];var Le=[`plane`];var De=[`shadow`];var Re=[`impact`];var ze=[`charge`];var He=[`ribbonCore`];var qe=[`ribbonGlow`];var Ge=[`ribbonTail`];var Ie=[`probes`];var T=26;var Ce=[`primary`,`success`,`warn`,`danger`,`info`];var Ae=Array.from({length:25},(g,e)=>{let n=e/24*Math.PI*2;return{u:n,cos:Math.cos(n),sin:Math.sin(n)}});var A=class g{ngZone=f(re);themingService=f(ul);isReducedMotion=f(Le$1).isReducedMotion;physics=new te;orb=Nt.required(`orb`);plane=Nt.required(`plane`);shadow=Nt.required(`shadow`);impact=Nt.required(`impact`);charge=Nt.required(`charge`);ribbonCore=Nt.required(`ribbonCore`);ribbonGlow=Nt.required(`ribbonGlow`);ribbonTail=Nt.required(`ribbonTail`);probes=Nt.required(`probes`);ready=M(!1);state=M(`asleep`);mood=M(`primary`);message=g$1(()=>this.state()===`asleep`?`A little light lives in your ${this.themingService.paletteLabel().toLowerCase()} theme.`:this.mood()===`danger`?`Too many throws. Someone is cross.`:this.mood()===`info`?`Taking a breath. Give it a moment.`:this.mood()===`warn`?`Easy now. This little light has feelings.`:this.mood()===`success`?`That was gentle. A happy little light.`:this.state()===`returning`?`Time to curl up in its swatch.`:this.state()===`recovering`?`A little wobble. All better.`:`Curious? Catch it. Be kind.`);showWakeHint=g$1(()=>this.ready()&&this.state()===`asleep`&&!this.isReducedMotion());stage=b.required();cards=b.required();view;home;scene;pose;colorPose;lastColor=``;lastCharge=-1;lastShadow=``;lastPointerPoint;shadowPose;chargePose;ribbonTime=0;lastRibbon=-1/0;lightLevel=0;lastPose=``;lastScene=``;lastGeometry=``;stayHome=!1;impactAnimation;events;resize;intersection;frame;wakeTimer;lastTime;lastLight=-1/0;lastImpact=0;originX=0;originY=0;floor=0;dirtyGeometry=!0;colorsDirty=!0;visible=!0;homeVisible=!1;motionEnabled=!0;pointer;offsetX=0;offsetY=0;fromHome=!1;dragDistance=0;samples=[];colors=Object.fromEntries(Ce.map(e=>[e,[255,255,255]]));rgb=[255,255,255];color=`rgb(255 255 255)`;invalidateGeometry=()=>{this.dirtyGeometry=!0,this.start(!0)};visibilityChange=()=>{!this.visible||this.stage().ownerDocument.hidden?(this.cancelDrag(),this.stop(),this.clearWake()):(this.dirtyGeometry=!0,this.start(!0))};wake=()=>{!this.motionEnabled||this.physics.state!==`asleep`||(this.stayHome=!1,this.clearWake(),this.physics.wake(),this.start())};grab=e=>{if(this.pointer!==void 0||!e.isPrimary||e.button!==0)return;e.preventDefault(),this.dirtyGeometry&&this.measure(),this.clearWake();let n=this.orb().nativeElement;n.focus({preventScroll:!0}),this.pointer=e.pointerId,this.offsetX=e.clientX-this.originX-this.physics.x,this.offsetY=e.clientY-this.originY-this.physics.y,this.fromHome=this.physics.state===`asleep`||this.physics.state===`waking`,this.dragDistance=0,this.lastPointerPoint={x:e.clientX,y:e.clientY,time:e.timeStamp},this.samples=[this.lastPointerPoint],this.stayHome=!1,this.physics.grab(),this.motionEnabled||(this.lightLevel=1),n.setPointerCapture(e.pointerId),this.paint(performance.now(),!0),this.start()};drag=e=>{if(e.pointerId!==this.pointer)return;this.dirtyGeometry&&this.measure(),this.physics.drag(e.clientX-this.originX-this.offsetX,e.clientY-this.originY-this.offsetY);let n=e.getCoalescedEvents?.()??[];for(let i of n.length?n:[e]){let r=this.samples[this.samples.length-1],d=this.lastPointerPoint??r;this.dragDistance+=Math.hypot(i.clientX-d.x,i.clientY-d.y),this.lastPointerPoint={x:i.clientX,y:i.clientY,time:i.timeStamp},(!r||i.timeStamp-r.time>=3||e.type===`pointerup`)&&(!r||Math.hypot(i.clientX-r.x,i.clientY-r.y)>.1)&&this.samples.push(this.lastPointerPoint)}let t=this.samples[this.samples.length-1];this.samples=this.samples.filter(i=>t.time-i.time<=120).slice(-64),this.motionEnabled||this.paint(performance.now())};release=e=>{if(e.pointerId!==this.pointer)return;this.drag(e);let{vx:n,vy:t,spin:i,travel:r}=ae(this.samples,e.timeStamp),d=this.fromHome&&this.dragDistance<6;this.endPointer(),this.motionEnabled?d?this.physics.fly():this.physics.throw(n,t,i,r):this.physics.park(),this.paint(performance.now(),!0),this.start()};cancelDrag=e=>{if(this.pointer===void 0)return;let n=ae(this.samples,e?.timeStamp||performance.now());this.endPointer(),this.physics.nudge(n.vx,n.vy,n.spin),this.motionEnabled||this.physics.park(),this.start()};tick=e=>{this.frame=void 0,this.dirtyGeometry&&this.measure(),this.colorsDirty&&this.readColors();let n=this.lastTime===void 0?1/60:Math.min(.15,(e-this.lastTime)/1e3);this.motionEnabled&&(this.physics.step(n),this.ribbonTime+=n);let t=this.physics.state,i=t===`asleep`?0:t===`waking`||t===`returning`?Math.max(0,Math.min(1,(this.physics.scaleX-.74)/.26)):1;this.lightLevel+=(i-this.lightLevel)*(1-Math.exp(-n*(i>this.lightLevel?2.5:4))),i===0&&this.lightLevel<.003&&(this.lightLevel=0),this.lastTime=this.motionEnabled?e:void 0,this.paint(e),t===`asleep`&&this.scheduleWake(),t!==`asleep`||this.lightLevel>0?this.start():this.lastTime=void 0};constructor(){Ze(()=>this.ngZone.runOutsideAngular(()=>this.initialize())),ce(()=>{this.themingService.palette(),this.themingService.activeTheme(),this.colorsDirty=!0,this.ngZone.runOutsideAngular(()=>this.start(!0))}),ce(()=>{this.motionEnabled=!this.isReducedMotion(),this.ngZone.runOutsideAngular(()=>{this.view&&(this.motionEnabled||(this.cancelDrag(),this.physics.returnHome(!0),this.lightLevel=0,this.stop(),this.clearWake()),this.start(!0))})}),f(Q).onDestroy(()=>{this.stop(),this.clearWake(),this.events?.abort(),this.resize?.disconnect(),this.intersection?.disconnect(),this.pose?.cancel(),this.colorPose?.cancel(),this.shadowPose?.cancel(),this.chargePose?.cancel(),this.impactAnimation?.cancel(),this.scene?.destroy()})}bringHome(){this.physics.mood!==`danger`&&(this.stayHome=!0,this.clearWake(),this.cancelDrag(),this.physics.returnHome(!this.motionEnabled),this.motionEnabled||(this.lightLevel=0),this.paint(performance.now(),!0),this.start(!0))}toss(e){e.detail!==0||!this.motionEnabled||(this.clearWake(),this.physics.state===`asleep`?this.physics.wake():this.physics.throw(160,-650),this.start())}keydown(e){if(e.key===`Escape`){this.bringHome();return}else if(e.key.startsWith(`Arrow`)){e.preventDefault(),this.clearWake();let n=e.key===`ArrowLeft`?-30:e.key===`ArrowRight`?30:0,t=e.key===`ArrowUp`?-30:e.key===`ArrowDown`?30:0;this.physics.fly(),this.physics.drag(this.physics.x+n,this.physics.y+t),this.motionEnabled?this.physics.throw(n*10,t*10-220):(this.physics.park(),this.lightLevel=1)}else return;this.paint(performance.now(),!0),this.start()}initialize(){let e=this.stage(),n=e.ownerDocument.defaultView;if(!n)return;this.view=n,this.home=this.cards().querySelector(`.orb-nest-well`)??this.cards(),this.events=new AbortController;let t=this.events.signal,i=this.orb().nativeElement;this.pose=i.animate([{transform:`none`}],{duration:1,fill:`both`}),this.colorPose=i.animate([{color:this.color},{color:this.color}],{duration:1,fill:`both`}),this.shadowPose=this.shadow().nativeElement.animate([{opacity:0}],{duration:1,fill:`both`}),this.chargePose=this.charge().nativeElement.animate([{opacity:0},{opacity:0}],{duration:1,fill:`both`});for(let r of[this.pose,this.shadowPose,this.chargePose,this.colorPose])r.pause(),r.currentTime=0;this.scene=qy(e),i.addEventListener(`pointerdown`,this.grab,{signal:t}),i.addEventListener(`pointermove`,this.drag,{signal:t}),i.addEventListener(`pointerup`,this.release,{signal:t}),i.addEventListener(`pointercancel`,this.cancelDrag,{signal:t}),i.addEventListener(`lostpointercapture`,this.cancelDrag,{signal:t}),i.addEventListener(`pointerenter`,this.wake,{signal:t}),i.addEventListener(`focus`,this.wake,{signal:t}),n.addEventListener(`blur`,this.cancelDrag,{signal:t}),n.addEventListener(`resize`,this.invalidateGeometry,{signal:t,passive:!0}),e.ownerDocument.addEventListener(`scroll`,this.invalidateGeometry,{signal:t,capture:!0,passive:!0}),e.ownerDocument.addEventListener(`visibilitychange`,this.visibilityChange,{signal:t}),this.resize=new ResizeObserver(this.invalidateGeometry),this.resize.observe(e),this.resize.observe(this.cards()),this.intersection=new IntersectionObserver(r=>{for(let d of r)d.target===e&&(this.visible=d.isIntersecting),d.target===this.home&&(this.homeVisible=d.isIntersecting);this.visibilityChange()}),this.intersection.observe(e),this.intersection.observe(this.home),this.measure(),this.readColors(),this.paint(performance.now(),!0),this.ready.set(!0),this.scheduleWake()}measure(){let e=this.plane().nativeElement.getBoundingClientRect(),n=this.cards().getBoundingClientRect(),t=this.home?.getBoundingClientRect()??n,i=`${e.left}:${e.top}:${e.width}:${e.height}:${n.left}:${n.top}:${n.width}:${n.height}:${t.left}:${t.top}:${t.width}:${t.height}`;if(i===this.lastGeometry){this.dirtyGeometry=!1;return}this.lastGeometry=i,this.originX=e.left,this.originY=e.top,this.floor=e.height-T-2,this.physics.resize({left:T+2,right:Math.max(T+2,e.width-T-2),top:T+2,bottom:Math.max(T+2,this.floor),cruiseY:t.top-e.top+t.height/2,homeX:t.left-e.left+t.width/2,homeY:t.top-e.top+t.height/2}),this.dirtyGeometry=!1,this.scene?.refresh()}readColors(){let e=this.probes().nativeElement.children;Ce.forEach((n,t)=>{let i=this.view?.getComputedStyle(e[t]).color??``,r=i.match(/[\d.]+/g)?.slice(0,3).map(Number);r?.length===3&&(this.colors[n]=r.map(d=>i.startsWith(`color(`)?d*255:d))}),this.rgb=[...this.colors[this.physics.mood]],this.colorsDirty=!1}endPointer(){let e=this.pointer;this.pointer=void 0,this.samples=[],this.lastPointerPoint=void 0;let n=this.orb().nativeElement;e!==void 0&&n.hasPointerCapture(e)&&n.releasePointerCapture(e)}start(e=!1){!this.view||this.frame!==void 0||!this.visible||this.stage().ownerDocument.hidden||!e&&(!this.motionEnabled||this.physics.state===`asleep`&&this.lightLevel===0)||(this.frame=this.view.requestAnimationFrame(this.tick))}stop(){this.frame!==void 0&&this.view?.cancelAnimationFrame(this.frame),this.frame=this.lastTime=void 0}clearWake(){this.wakeTimer!==void 0&&this.view?.clearTimeout(this.wakeTimer),this.wakeTimer=void 0}scheduleWake(){this.stayHome||this.wakeTimer!==void 0||!this.motionEnabled||!this.visible||!this.homeVisible||this.stage().ownerDocument.hidden||(this.wakeTimer=this.view?.setTimeout(()=>{this.wakeTimer=void 0,this.wake()},4500))}paint(e,n=!1){if(!this.pose||!this.shadowPose)return;let t=this.physics,i=n||e-this.lastLight>=(t.state===`dragging`||t.state===`falling`?50:80);if(i){let c=this.colors[t.mood],b=!this.motionEnabled||t.state===`asleep`&&this.lightLevel===0?1:.35;this.rgb=this.rgb.map((l,s)=>l+(c[s]-l)*b),this.color=`rgb(${this.rgb.map(Math.round).join(` `)})`}let r=t.contact,d=t.scaleX<1?T*(1-t.scaleX)*(r===`left`?-1:r===`right`?1:0):0,C=t.scaleY<1?T*(1-t.scaleY)*(r===`top`?-1:r===`bottom`?1:0):0,S={transform:`translate3d(${t.x-T+d}px, ${t.y-T+C}px, 0) rotate(${t.stretchAngle}rad) scale(${t.scaleX}, ${t.scaleY}) rotate(${t.angle-t.stretchAngle}rad)`},w=S.transform;if(w!==this.lastPose&&(this.lastPose=w,this.pose.effect.setKeyframes([S,S])),this.colorPose&&this.color!==this.lastColor){this.lastColor=this.color;let c={color:this.color};this.colorPose.effect.setKeyframes([c,c])}if(this.chargePose&&(Math.abs(this.lightLevel-this.lastCharge)>.002||this.lightLevel===0&&this.lastCharge!==0)){this.lastCharge=this.lightLevel;let c={opacity:this.lightLevel};this.chargePose.effect.setKeyframes([c,c])}if(e-this.lastRibbon>=40&&this.lightLevel>.002){this.lastRibbon=e;let c=t.mood===`danger`?3.4:t.mood===`info`?.65:t.mood===`warn`?1.9:1.1,b=t.mood===`danger`?1.3:t.mood===`info`?.65:1,l=this.ribbonPath(this.ribbonTime*c,0,b);this.ribbonCore().nativeElement.setAttribute(`d`,l),this.ribbonGlow().nativeElement.setAttribute(`d`,l),this.ribbonTail().nativeElement.setAttribute(`d`,this.ribbonPath(this.ribbonTime*c*.8,2.4,b*.8))}let v=Math.max(0,this.floor-t.y),p={transform:`translate3d(${t.x-26}px, ${this.floor+T-6}px, 0) scale(${1+Math.min(v,180)/150})`,opacity:t.state===`asleep`?0:Math.max(0,.22-v/650)},P=p.opacity<.002?`hidden`:`${p.transform}:${p.opacity.toFixed(2)}`;P!==this.lastShadow&&(this.lastShadow=P,this.shadowPose.effect.setKeyframes([p,p]));let _=t.state;if(this.state()!==_&&this.state.set(_),this.mood()!==t.mood&&this.mood.set(t.mood),t.impactSerial!==this.lastImpact&&(this.lastImpact=t.impactSerial,this.motionEnabled)){let c={left:0,right:1,top:2,bottom:3}[t.impactWall],b=this.impact().nativeElement.children[c];this.impactAnimation?.cancel(),this.impactAnimation=b.animate([{backgroundColor:this.color,opacity:.8},{backgroundColor:this.color,opacity:0}],{duration:420,easing:`ease-out`})}if(!i)return;this.lastLight=e;let y=`${this.originX}:${this.originY}:${t.x.toFixed(1)}:${t.y.toFixed(1)}:${t.angle.toFixed(2)}:${this.color}:${this.lightLevel.toFixed(3)}:${t.mood}`;y!==this.lastScene&&(this.lastScene=y,this.scene?.update({reuseGeometry:!0,lights:this.lightLevel===0?[]:[{x:this.originX+t.x,y:this.originY+t.y+T+9,z:30,color:this.color,intensity:this.lightLevel*(t.mood===`danger`?1.5:1.15),radius:t.state===`asleep`?140:280}]}))}ribbonPath(e,n,t){let i=e*.32+n,r=.55+Math.sin(e*.31+n)*.35,d=Math.cos(i),C=Math.sin(i),S=Math.cos(r),w=Math.sin(r),v=Ae.map(({u:c,cos:b,sin:l})=>{let s=15+Math.sin(c*3-e*.65+n)*1.8,M=b*s,L=Math.sin(c*2+e*.4+n)*(4+t*1.6),f=l*s,R=M*d+f*C,N=f*d-M*C,Ee=L*S-N*w,se=L*w+N*S,le=55/(55-se);return{x:30+R*le,y:30+Ee*le,width:(.75+(se+20)/40*1.9)*t}}),p=v.map((c,b)=>{let l=v[Math.max(0,b-1)],s=v[Math.min(v.length-1,b+1)],M=Math.hypot(s.x-l.x,s.y-l.y)||1;return{x:c.x-(s.y-l.y)/M*c.width,y:c.y+(s.x-l.x)/M*c.width}}),P=v.map((c,b)=>{let l=v[Math.max(0,b-1)],s=v[Math.min(v.length-1,b+1)],M=Math.hypot(s.x-l.x,s.y-l.y)||1;return{x:c.x+(s.y-l.y)/M*c.width,y:c.y-(s.x-l.x)/M*c.width}}).reverse(),_=[...p,...P],y=`M${_[0].x.toFixed(2)} ${_[0].y.toFixed(2)}`;for(let c=1;c<_.length;c++){let b=_[c-1],l=_[c];y+=`Q${b.x.toFixed(2)} ${b.y.toFixed(2)} ${((b.x+l.x)/2).toFixed(2)} ${((b.y+l.y)/2).toFixed(2)}`}return y+`Z`}static ɵfac=function(n){return new(n||g)};static ɵcmp=G({type:g,selectors:[[`app-light-orb`]],viewQuery:function(n,t){n&1&&Xt(t.orb,Te,5)(t.plane,Le,5)(t.shadow,De,5)(t.impact,Re,5)(t.charge,ze,5)(t.ribbonCore,He,5)(t.ribbonGlow,qe,5)(t.ribbonTail,Ge,5)(t.probes,Ie,5),n&2&&ft(9)},inputs:{stage:[1,`stage`],cards:[1,`cards`]},decls:49,vars:9,consts:[[`plane`,``],[`impact`,``],[`shadow`,``],[`orb`,``],[`charge`,``],[`ribbonGlow`,``],[`ribbonTail`,``],[`ribbonCore`,``],[`probes`,``],[1,`orb-controls`],[`id`,`orb-instructions`,`role`,`status`,1,`orb-message`],[`aria-hidden`,`true`,1,`mood-dot`],[`placement`,`top`,1,`orb-home-action`,3,`bxTooltip`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`type`,`button`,`aria-label`,`Bring the light home`,1,`orb-home`,3,`click`,`disabled`],[`name`,`house`,`size`,`16`],[1,`orb-plane`],[`aria-hidden`,`true`,1,`orb-impact-layer`],[1,`orb-impact`,`orb-impact-left`],[1,`orb-impact`,`orb-impact-right`],[1,`orb-impact`,`orb-impact-top`],[1,`orb-impact`,`orb-impact-bottom`],[`aria-hidden`,`true`,1,`orb-shadow`],[`type`,`button`,`aria-label`,`Your theme's little light. Hover to wake, drag to throw, or press Enter to play. Arrow keys move it; Escape sends it home.`,`aria-describedby`,`orb-instructions`,1,`light-orb`,3,`click`,`keydown`],[`aria-hidden`,`true`,1,`orb-body`],[`aria-hidden`,`true`,1,`orb-charge`],[1,`orb-halo`],[1,`orb-volume`],[1,`orb-rim`],[`viewBox`,`0 0 60 60`,1,`orb-ribbons`],[`id`,`orb-liquid-light`,`x1`,`0`,`y1`,`0`,`x2`,`1`,`y2`,`0`],[`offset`,`0`,`stop-color`,`currentColor`,`stop-opacity`,`0`],[`offset`,`0.28`,`stop-color`,`currentColor`,`stop-opacity`,`0.65`],[`offset`,`0.53`,`stop-color`,`currentColor`,`stop-opacity`,`1`],[`offset`,`0.8`,`stop-color`,`currentColor`,`stop-opacity`,`0.55`],[`offset`,`1`,`stop-color`,`currentColor`,`stop-opacity`,`0`],[`fill`,`url(#orb-liquid-light)`,1,`ribbon`,`ribbon-glow`],[`fill`,`url(#orb-liquid-light)`,1,`ribbon`,`ribbon-tail`],[`fill`,`url(#orb-liquid-light)`,1,`ribbon`,`ribbon-core`],[`aria-hidden`,`true`,1,`orb-glint`],[`aria-hidden`,`true`,1,`orb-color-probes`],[2,`color`,`var(--bx-primary)`],[2,`color`,`var(--bx-text-success)`],[2,`color`,`var(--bx-text-warn)`],[2,`color`,`var(--bx-text-danger)`],[2,`color`,`var(--bx-text-info)`]],template:function(n,t){n&1&&(_(0,`div`,9)(1,`p`,10),xe(2,`span`,11),X(3),D(),_(4,`span`,12)(5,`button`,13),te$1(`click`,function(){return t.bringHome()}),xe(6,`bx-icon`,14),_(7,`span`),X(8,`Bring home`),D()()()(),_(9,`div`,15,0)(11,`span`,16,1),xe(13,`span`,17)(14,`span`,18)(15,`span`,19)(16,`span`,20),D(),xe(17,`span`,21,2),_(19,`button`,22,3),te$1(`click`,function(r){return t.toss(r)})(`keydown`,function(r){return t.keydown(r)}),xe(21,`span`,23),_(22,`span`,24,4),xe(24,`span`,25)(25,`span`,26)(26,`span`,27),lk(),_(27,`svg`,28)(28,`defs`)(29,`linearGradient`,29),xe(30,`stop`,30)(31,`stop`,31)(32,`stop`,32)(33,`stop`,33)(34,`stop`,34),D()(),xe(35,`path`,35,5)(37,`path`,36,6)(39,`path`,37,7),D()(),ck(),xe(41,`span`,38),D()(),_(42,`span`,39,8),xe(44,`i`,40)(45,`i`,41)(46,`i`,42)(47,`i`,43)(48,`i`,44),D()),n&2&&(B(`data-bx-reduced-motion`,t.isReducedMotion()),y(2),B(`data-mood`,t.mood()),y(),fe(t.message()),y(),R(`bxTooltip`,t.mood()===`danger`?`The orb needs a moment to cool down before returning to its pod in the theme card.`:`Bring the orb back to its pod in the theme card.`),y(),R(`disabled`,t.mood()===`danger`),y(4),ae$1(`orb-ready`,t.ready()),y(10),B(`data-state`,t.state())(`data-mood`,t.mood()))},dependencies:[qi,me,Vt],styles:[`
[_nghost-%COMP%] {
  display: contents;
}
.orb-controls[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  min-height: 2rem;
  margin-top: 0;
  flex: 0 1 28rem;
  color: var(--%NS%bx-text-secondary);
  font-size: 0.75rem;
}
.orb-message[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex: 1 1 14rem;
  gap: 0.55rem;
  margin: 0;
  min-height: 2.5em;
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
}`]})};var ne=class g{nativeElement=f(K).nativeElement;destroyRef=f(Q);ngZone=f(re);isReducedMotion=f(Le$1).isReducedMotion;visible=M(!1);documentVisible=M(!1);floating=g$1(()=>this.visible()&&this.documentVisible()&&!this.isReducedMotion());constructor(){Ze(()=>this.ngZone.runOutsideAngular(()=>this.observeVisibility()))}observeVisibility(){let e=this.nativeElement.ownerDocument,n=()=>this.documentVisible.set(!e.hidden),t=new IntersectionObserver(([i])=>this.visible.set(i.isIntersecting));n(),t.observe(this.nativeElement),e.addEventListener(`visibilitychange`,n),this.destroyRef.onDestroy(()=>{t.disconnect(),e.removeEventListener(`visibilitychange`,n)})}static ɵfac=function(n){return new(n||g)};static ɵcmp=G({type:g,selectors:[[`app-theme-material-preview`]],hostAttrs:[`aria-hidden`,`true`],hostVars:2,hostBindings:function(n,t){n&2&&B(`data-floating`,t.floating())(`data-reduced-motion`,t.isReducedMotion())},decls:61,vars:6,consts:[[1,`material-stage`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,1,`mini-site`,`portfolio-site`,3,`bxSurfaceInteractive`,`surfaceEffects`],[`inert`,``,1,`mini-page`],[1,`mini-nav`],[1,`portfolio-hero`],[`viewBox`,`0 0 3840 2160`,`preserveAspectRatio`,`none`,`aria-hidden`,`true`,1,`portfolio-wave`],[`id`,`home-portfolio-wave`,`x1`,`0%`,`y1`,`100%`,`x2`,`100%`,`y2`,`0%`],[`offset`,`0%`,1,`wave-start`],[`offset`,`100%`,1,`wave-end`],[`fill`,`url(#home-portfolio-wave)`,`d`,`M3070 756.5C2409 1027.04 2679.5 1794 1548 1536.46C612.118 1323.45 568.5 1189 0 1536.46V2160H3840V0C3840 0 3704.5 496.811 3070 756.5Z`],[1,`mini-intro`],[1,`portfolio-note`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,1,`mini-site`,`project-site`,3,`bxSurfaceInteractive`,`surfaceEffects`],[1,`project-art`],[1,`art-caption`],[1,`art-orbit`],[1,`art-plane`],[1,`art-title`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`variant`,`elevated`,1,`glass-sample`,3,`bxSurfaceInteractive`,`surfaceEffects`],[`inert`,``,1,`glass-content`],[1,`glass-heading`],[`name`,`blocks`,`size`,`24`],[1,`glass-title`],[1,`glass-caption`],[1,`glass-spectrum`]],template:function(n,t){n&1&&(_(0,`div`,0)(1,`bx-card`,1)(2,`div`,2)(3,`div`,3)(4,`strong`),X(5,`Portfolio`),D(),_(6,`span`),X(7,`Work · About`),D()(),_(8,`div`,4)(9,`h3`),X(10,`Design`),xe(11,`br`),X(12,`& code.`),D(),lk(),_(13,`svg`,5)(14,`defs`)(15,`linearGradient`,6),xe(16,`stop`,7)(17,`stop`,8),D()(),xe(18,`path`,9),D()(),ck(),_(19,`div`,10)(20,`p`),X(21,`Freelance coding and web design.`),D()(),_(22,`div`,11),X(23,`Independent design & development`),D()()(),_(24,`bx-card`,12)(25,`div`,2)(26,`div`,3)(27,`strong`),X(28,`Selected work`),D(),_(29,`span`),X(30,`Web design`),D()(),_(31,`div`,10)(32,`h3`),X(33,`Portfolio page`),D()(),_(34,`div`,13)(35,`span`,14),X(36,`Visual studies / 01`),D(),xe(37,`span`,15)(38,`span`,16),_(39,`strong`,17),X(40,`Form`),xe(41,`br`),X(42,`& color`),D()()()(),_(43,`bx-card`,18)(44,`div`,19)(45,`div`,20),xe(46,`bx-icon`,21),_(47,`div`)(48,`strong`,22),X(49,`Blocks`),D(),_(50,`span`),X(51,`Components for Angular`),D()()(),_(52,`div`,23)(53,`span`),X(54,`Shared themes`),D(),_(55,`span`),X(56,`Accessible components`),D()(),_(57,`div`,24),xe(58,`span`)(59,`span`)(60,`span`),D()()()()),n&2&&(y(),R(`bxSurfaceInteractive`,!0)(`surfaceEffects`,!1),y(23),R(`bxSurfaceInteractive`,!0)(`surfaceEffects`,!1),y(19),R(`bxSurfaceInteractive`,!0)(`surfaceEffects`,!1))},dependencies:[pT,Rt,Vt],styles:[`
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
}`]})};var Ye=[`lightGarden`];var Xe=(g,e)=>e.title;function We(g,e){g&1&&(_(0,`span`,24),xe(1,`span`,26),_(2,`span`,27),X(3,`Primary`),D()())}function $e(g,e){if(g&1&&(_(0,`a`,17),xe(1,`bx-icon`,23),j(2,We,4,0,`span`,24),_(3,`h3`),X(4),D(),_(5,`p`),X(6),D(),_(7,`span`,25),X(8,`Explore`),xe(9,`bx-icon`,21),D()()),g&2){let n=e.$implicit;R(`routerLink`,n.route),y(),R(`name`,n.icon),y(),F(n.icon===`palette`?2:-1),y(2),fe(n.title),y(2),fe(n.description)}}var _e=class g$2{packageReleaseService=f(g);isReducedMotion=f(Le$1).isReducedMotion;lightOrb=Nt(A);wakeHint=Nt(qi);version=`v${c}`;features=[{title:`Components`,description:e.length+` components and directives.`,icon:`blocks`,route:`/components`},{title:`Theming`,description:`Colors and shared tokens across your app.`,icon:`palette`,route:`/studio`},{title:`Appearance`,description:`Glass, light and motion, configured once.`,icon:`layers`,route:`/appearance`}];lightGardenElement=Nt.required(`lightGarden`,{read:K});constructor(){ce(()=>{this.lightOrb()?.showWakeHint()||this.wakeHint()?.hide()})}static ɵfac=function(n){return new(n||g$2)};static ɵcmp=G({type:g$2,selectors:[[`app-home`]],viewQuery:function(n,t){n&1&&Xt(t.lightOrb,A,5)(t.wakeHint,qi,5)(t.lightGardenElement,Ye,5,K),n&2&&ft(3)},decls:42,vars:12,consts:[[`lightGarden`,``],[`orb`,``],[`featureGrid`,``],[1,`home-container`,3,`showBreadcrumbs`,`autoResolveTitlesFromNavigation`],[1,`hero`],[1,`hero-content`],[1,`hero-subtitle`],[1,`hero-actions`],[`bx-button`,``,`variant`,`filled`,`color`,`primary`,`routerLink`,`/installation`],[`name`,`arrow-right`,`size`,`20`],[`aria-labelledby`,`features-title`,1,`features`],[1,`features-heading`],[1,`features-title`],[`id`,`features-title`],[`bxTooltip`,`Hover over the orb in its pod to wake it up. Once awake, drag it around to see its light fall on nearby surfaces.`,`placement`,`top`,1,`orb-hint`,3,`inert`],[3,`stage`,`cards`],[1,`feature-grid`],[`bxSurface`,``,`bxSurfaceGlassiness`,`auto`,`bxSurfaceQuality`,`auto`,1,`feature-card`,3,`routerLink`],[1,`home-footer`],[1,`footer-links`],[`bx-button`,``,`variant`,`text`,`color`,`primary`,`target`,`_blank`,`rel`,`noopener noreferrer`,3,`href`],[`name`,`arrow-up-right`,`size`,`16`],[`bx-button`,``,`variant`,`text`,`color`,`primary`,`href`,`https://github.com/filipmazev/Blocks/tree/main/projects/blocks`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`size`,`24`,`color`,`text-accent`,3,`name`],[`aria-hidden`,`true`,1,`orb-nest`],[1,`feature-link`],[1,`orb-nest-well`],[1,`orb-nest-label`]],template:function(n,t){if(n&1&&(_(0,`bx-page-container`,3)(1,`bx-page-content`)(2,`div`,null,0)(4,`header`,4)(5,`div`,5)(6,`h1`),X(7,`Build with `),_(8,`span`),X(9,`Blocks.`),D()(),_(10,`p`,6),X(11,`Angular components with shared theming and accessible controls.`),D(),_(12,`div`,7)(13,`a`,8),X(14,`Get started`),xe(15,`bx-icon`,9),D()()(),xe(16,`app-theme-material-preview`),D(),_(17,`section`,10)(18,`div`,11)(19,`div`,12)(20,`h2`,13),X(21,`Explore Blocks`),D(),_(22,`span`,14),X(23,`Hover on the orb to wake it up`),D()(),xe(24,`app-light-orb`,15,1),D(),_(26,`div`,16,2),$t(28,$e,10,5,`a`,17,Xe),D()()()(),_(30,`bx-page-footer`,18)(31,`span`),X(32,`Designed & developed by Filip Mazev`),D(),_(33,`span`),X(34),D(),_(35,`div`,19)(36,`a`,20),X(37,`npm package `),xe(38,`bx-icon`,21),D(),_(39,`a`,22),X(40,`GitHub `),xe(41,`bx-icon`,21),D()()()()),n&2){let i=Tt(25),r=Tt(27);R(`showBreadcrumbs`,!1)(`autoResolveTitlesFromNavigation`,!1),y(19),B(`data-bx-reduced-motion`,t.isReducedMotion()),y(3),ae$1(`is-visible`,i.showWakeHint()),R(`inert`,!i.showWakeHint()),B(`aria-hidden`,!i.showWakeHint())(`tabindex`,i.showWakeHint()?0:-1),y(2),R(`stage`,t.lightGardenElement().nativeElement)(`cards`,r),y(4),Wt(t.features),y(6),un(`Blocks `,t.version),y(2),R(`href`,t.packageReleaseService.npmPackageUrl(),GC)}},dependencies:[$f,kT,CT,ST,Vt,me,Rt,ne,A,qi],styles:[`
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
[_nghost-%COMP%] {
  display: block;
}
.home-container[_ngcontent-%COMP%] {
  position: relative;
}
.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-accent);
}
.features[_ngcontent-%COMP%] {
  padding-block: var(--%NS%bx-space-12, 3rem);
}
.features-heading[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: var(--%NS%bx-space-3, 0.75rem);
  margin-bottom: var(--%NS%bx-space-6, 1.5rem);
}
.features-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0;
}
.features-title[_ngcontent-%COMP%] {
  display: grid;
  grid-template-rows: auto 1.125rem;
  gap: var(--%NS%bx-space-1, 0.25rem);
}
.orb-hint[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-tertiary, var(--%NS%bx-text-secondary));
  font-size: 0.6875rem;
  cursor: help;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 180ms ease, visibility 0s linear 180ms;
}
.orb-hint.is-visible[_ngcontent-%COMP%] {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition-delay: 0s;
}
.orb-hint[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--%NS%bx-border-brand);
  outline-offset: 3px;
}
.features-title[data-bx-reduced-motion=true][_ngcontent-%COMP%]   .orb-hint[_ngcontent-%COMP%] {
  transition: none;
}
.feature-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--%NS%bx-space-6, 1.5rem);
}
.feature-card[_ngcontent-%COMP%] {
  display: block;
  padding: var(--%NS%bx-space-8, 2rem);
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: var(--%NS%bx-rounded-lg, 0.75rem);
  background: color-mix(in srgb, var(--%NS%bx-bg-surface) 80%, transparent);
  text-decoration: none;
  color: var(--%NS%bx-text-primary);
}
.feature-card[_ngcontent-%COMP%]:hover {
  border-color: var(--%NS%bx-border-brand);
}
.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  margin-block: var(--%NS%bx-space-4, 1rem) var(--%NS%bx-space-2, 0.5rem);
}
.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: inherit;
  font-size: 0.875rem;
}
.feature-link[_ngcontent-%COMP%] {
  display: flex;
  gap: var(--%NS%bx-space-2, 0.5rem);
  align-items: center;
  font-size: 0.875rem;
  color: var(--%NS%bx-text-brand);
}
.home-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: center;
  flex-wrap: wrap;
  gap: var(--%NS%bx-space-4, 1rem);
  padding-block: var(--%NS%bx-space-6, 1.5rem);
  font-size: 0.8rem;
  color: var(--%NS%bx-text-secondary);
}
.home-footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {
  display: flex;
  gap: var(--%NS%bx-space-4, 1rem);
}
@media (max-width: 1280px) {
  .hero[_ngcontent-%COMP%] {
    gap: var(--%NS%bx-space-10, 2.5rem);
  }
}
@media (max-width: 768px) {
  .hero[_ngcontent-%COMP%], 
   .feature-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .hero[_ngcontent-%COMP%] {
    padding-top: var(--%NS%bx-space-4, 1rem);
  }
}
.orb-nest[_ngcontent-%COMP%] {
  position: absolute;
  top: 12px;
  right: 16px;
  display: grid;
  justify-items: center;
  gap: 4px;
  pointer-events: none;
}
.orb-nest-well[_ngcontent-%COMP%] {
  display: block;
  width: 56px;
  height: 56px;
  border: 1px solid color-mix(in srgb, var(--%NS%bx-primary) 35%, var(--%NS%bx-border-default));
  border-radius: 50%;
  background: color-mix(in srgb, var(--%NS%bx-bg-canvas) 70%, transparent);
  box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.1333333333), 0 1px 0 rgba(255, 255, 255, 0.1333333333);
}
.orb-nest-label[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.55rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}`]})};export{_e as Home};