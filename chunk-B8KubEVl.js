import{r as t,t as r}from"./chunk-C9yOwMO6.js";import{Dn as mb,F as Jl,Gt as dA,K as Mb,Mt as Zc,Nt as Zn,P as JT,Qn as se,Rt as ab,S as Fl,Wt as cz,Xn as re,b as FA,bn as ke,et as Pt,f as CC,h as De,hn as jh,i as $h,r as $e,rr as te,rt as QT,st as R_,tt as Q,un as hs,v as E_,wn as lr,zn as p}from"./chunk-BTQvnuSt.js";import{t as S}from"./main-UZ7SQ7UX.js";var at=`1.4.3`;function Lt(a,i){let n=parseInt(a,16);return Number.isFinite(n)?[n>>16&255,n>>8&255,n&255]:[...i]}function ct(a){let i=a.padStart(6,`0`),n=parseInt(i.slice(0,2),16)||0,e=parseInt(i.slice(2,4),16)||0,f=parseInt(i.slice(4,6),16)||0;return .3*n+.59*e+.11*f}function ht(a){let i=0,n=-1;return a.forEach((e,f)=>{let u=ct(e.color);u>n&&(n=u,i=f)}),i}function Ft(a){let i=0,n=1/0;return a.forEach((e,f)=>{let u=ct(e.color);u<n&&(n=u,i=f)}),i}var J=`auto`;var Ot={h:`light`,t:`light`,a:`dark`,c:`dark`};function it(a,i){let n=Ot[i]===`light`;return a.length?a[n?ht(a):Ft(a)].color:n?`ffffff`:`000000`}var rt={fxOrder:`G`,hidden:``,shape:4,stops:[{color:`1e1b4b`,pos:0},{color:`4338ca`,pos:25},{color:`7c6ff0`,pos:50},{color:`cbb0f7`,pos:75},{color:`faf9f6`,pos:100}],seed:128,warp:.8,noiseScale:1.2,detail:3,contrast:1,angle:45,centerX:.5,centerY:.5,gradientFollow:0,gradientOpacity:1,gradientBlend:0,oklab:!1,imageSrc:``,imageKind:`img`,imageOpacity:1,imageBlend:0,imageBlur:0,imageFit:0,imageFocalX:.5,imageFocalY:.5,imageZoom:1,patternSource:`l`,patternLayout:`b`,patternCols:6,patternRows:6,patternGap:8,patternRadius:16,patternGapColor:``,patternSeed:1,aberration:0,lensDistort:0,softness:0,lightMode:0,lightAmount:.5,lightSize:.5,lightX:.5,lightY:.5,lightCount:1,lightFollow:0,light2X:.25,light2Y:.7,light3X:.75,light3Y:.7,light4X:.5,light4Y:.85,lightColor:`ffffff`,lightColor2:`ffffff`,lightColor3:`ffffff`,lightColor4:`ffffff`,lightGain:1,lightGain2:1,lightGain3:1,lightGain4:1,lightSpread:1,lightSpread2:1,lightSpread3:1,lightSpread4:1,waveMode:0,waveSide:0,waveAmount:.3,waveFrequency:8,waveFalloff:.5,wavePhase:0,waveX:.5,waveY:.5,glassMode:0,glassAmount:.5,glassCount:24,glassRatio:1,glassAngle:0,glassProfile:3,glassBevel:.04,glassShadow:.3,glassHighlight:.3,pixelate:0,pixelateRatio:1,pixelateGap:0,pixelateGroutColor:``,ditherAlgo:0,ditherMatrix:4,ditherScale:4,ditherLevels:4,ditherStrength:1,ditherColorMode:0,ditherThreshold:.5,ditherGamma:1,ditherInvert:!1,ditherRatio:1,halftoneSize:8,halftoneStyle:0,halftoneStagger:!1,halftoneDotScale:.85,halftoneColor:1,halftonePaper:.2,halftonePaperColor:`ffffff`,halftoneEmboss:0,halftoneWind:0,halftoneWindAngle:0,halftoneWobble:0,halftoneGlint:0,halftoneJitter:0,halftoneJitterSeed:0,halftoneAngle:0,halftoneGamma:1,halftoneInvert:!1,halftoneRatio:1,halftoneInkColor:``,asciiSize:16,asciiRatio:1,asciiStyle:0,asciiColor:1,asciiBackground:.2,asciiExposure:1,asciiFill:1,asciiDensity:64,asciiScatter:0,asciiGap:0,asciiAngle:0,asciiThreshold:.5,asciiGamma:1,asciiInvert:!1,asciiInkColor:``,asciiPaperColor:`000000`,asciiOpacity:1,asciiBlend:0,contourLevels:8,contourWeight:2,contourDash:0,contourGlow:0,contourColor:1,contourPaper:.2,contourInkColor:``,contourPaperColor:``,toneGeoSize:36,toneGeoLow:.4,toneGeoHigh:.6,toneGeoInvert:!1,toneGeoRules:3,toneGeoCross:0,toneGeoAngle:0,toneGeoGrid:0,toneGeoJitter:0,toneGeoJitterSeed:0,toneGeoInkColor:``,toneGeoPaperColor:`ffffff`,toneGeoWeight:.5,toneGeoColor:1,toneGeoPaper:.2,grain:0,grainSize:1,paperAmount:0,paperColor:``,paperFibre:1,paperVignette:1,pointerMode:0,pointerAmount:.5,pointerSize:.4,pointerFade:.5,pointerDamping:-1,pointerFlip:!1,animate:!1,animSpeed:1,aspect:`1x1`,sizeAnchor:1};var Dt=[`b`,`g`,`m`,`c`];var Ut=[`1x1`,`16x9`,`9x16`,`2x1`,`3x4`];var Bt={"1x1":`1080x1080`,"16x9":`1920x1080`,"9x16":`1080x1920`,"2x1":`1920x960`,"3x4":`1080x1440`};Ut.map(a=>{let i=a.replace(`x`,`:`);return a===`1x1`?`${i} \u2014 Square`:a===`16x9`?`${i} \u2014 Landscape`:a===`9x16`?`${i} \u2014 Mobile`:a===`2x1`?`${i} \u2014 Banner`:a===`3x4`?`${i} \u2014 Portrait`:i});var Nt=`img`;function Xt(a,i){if(a===Nt)return nt(i?.height??1080);let n=Bt[a]??a,e=Number(n.split(`x`)[1]);return nt(Number.isFinite(e)&&e>0?e:1080)}function nt(a){return Math.min(8192,Math.max(64,a))}var Wt=`GIPowglpdhasrmct`;function st(a,i){return a.fxOrder.includes(i)&&!a.hidden.includes(i)}function ft(a){let i=[];for(let n of a)Wt.includes(n)&&!i.includes(n)&&i.push(n);return i.join(``)}function $t(a){let i=[...ft(a.fxOrder)].filter(n=>!a.hidden.includes(n));return!i.includes(`G`)&&!i.includes(`I`)?``:i.join(``)}Object.fromEntries([{code:`w`,keys:[`waveMode`,`waveSide`,`waveAmount`,`waveFrequency`,`waveFalloff`,`wavePhase`,`waveX`,`waveY`],name:`Waves`,lock:`waves`,family:`Warp`,onAdd:a=>a.waveAmount>0?{}:{waveAmount:.3}},{code:`g`,keys:[`glassMode`,`glassAmount`,`glassCount`,`glassRatio`,`glassAngle`,`glassProfile`,`glassBevel`,`glassShadow`,`glassHighlight`],name:`Glass`,lock:`glass`,family:`Warp`,onAdd:a=>a.glassMode>0?{}:{glassMode:1}},{code:`l`,keys:[`lightMode`,`lightAmount`,`lightSize`,`lightX`,`lightY`,`lightCount`,`lightFollow`,`light2X`,`light2Y`,`light3X`,`light3Y`,`light4X`,`light4Y`,`lightColor`,`lightColor2`,`lightColor3`,`lightColor4`,`lightGain`,`lightGain2`,`lightGain3`,`lightGain4`,`lightSpread`,`lightSpread2`,`lightSpread3`,`lightSpread4`],name:`Light`,lock:`light`,family:`Light`,onAdd:a=>a.lightMode>0?{}:{lightMode:1}},{code:`p`,keys:[`pixelate`,`pixelateRatio`,`pixelateGap`,`pixelateGroutColor`],name:`Pixelate`,lock:`pixelate`,family:`Raster`,onAdd:a=>a.pixelate>=2?{}:{pixelate:48}},{code:`d`,name:`Dither`,lock:`dither`,family:`Raster`,keys:[`ditherAlgo`,`ditherMatrix`,`ditherScale`,`ditherLevels`,`ditherStrength`,`ditherColorMode`,`ditherThreshold`,`ditherGamma`,`ditherInvert`,`ditherRatio`],onAdd:()=>({})},{code:`h`,name:`Halftone`,lock:`halftone`,family:`Print screens`,keys:[`halftoneSize`,`halftoneStyle`,`halftoneStagger`,`halftoneDotScale`,`halftoneColor`,`halftonePaper`,`halftonePaperColor`,`halftoneEmboss`,`halftoneWind`,`halftoneWindAngle`,`halftoneWobble`,`halftoneGlint`,`halftoneJitter`,`halftoneJitterSeed`,`halftoneAngle`,`halftoneGamma`,`halftoneInvert`,`halftoneRatio`,`halftoneInkColor`],onAdd:()=>({halftonePaperColor:J})},{code:`a`,name:`ASCII`,lock:`ascii`,family:`Print screens`,keys:[`asciiSize`,`asciiRatio`,`asciiStyle`,`asciiColor`,`asciiBackground`,`asciiExposure`,`asciiFill`,`asciiDensity`,`asciiScatter`,`asciiGap`,`asciiAngle`,`asciiThreshold`,`asciiGamma`,`asciiInvert`,`asciiInkColor`,`asciiPaperColor`,`asciiOpacity`,`asciiBlend`],onAdd:()=>({asciiPaperColor:J})},{code:`c`,keys:[`contourLevels`,`contourWeight`,`contourDash`,`contourGlow`,`contourColor`,`contourPaper`],name:`Contours`,lock:`contour`,family:`Print screens`,onAdd:()=>({contourPaperColor:J})},{code:`t`,keys:[`toneGeoSize`,`toneGeoLow`,`toneGeoHigh`,`toneGeoInvert`,`toneGeoRules`,`toneGeoCross`,`toneGeoAngle`,`toneGeoGrid`,`toneGeoJitter`,`toneGeoJitterSeed`,`toneGeoWeight`,`toneGeoColor`,`toneGeoPaper`],name:`Hatch`,lock:`tonegeo`,family:`Print screens`,onAdd:()=>({toneGeoPaperColor:J})},{code:`o`,keys:[`aberration`,`softness`,`lensDistort`],name:`Lens`,lock:`optics`,family:`Finish`,onAdd:a=>a.aberration>0||a.softness>0||a.lensDistort!==0?{}:{aberration:.25}},{code:`r`,keys:[`grain`,`grainSize`],name:`Grain`,lock:`grain`,family:`Finish`,onAdd:a=>a.grain>0?{}:{grain:.075}},{code:`s`,keys:[`paperAmount`,`paperColor`,`paperFibre`,`paperVignette`],name:`Paper`,lock:`paper`,family:`Finish`,onAdd:a=>a.paperAmount>0?{}:{paperAmount:.5}},{code:`m`,keys:[`pointerMode`,`pointerAmount`,`pointerSize`,`pointerFade`,`pointerDamping`,`pointerFlip`],name:`Pointer`,lock:`pointer`,family:`Interact`,onAdd:a=>a.pointerMode>=2?{}:{pointerMode:2}}].map(a=>[a.code,a]));function lt(a){let u=a,{bake3d:i}=u,n=t(u,[`bake3d`]),e={};for(let[S,T]of Object.entries(n))T!==void 0&&(e[S]=T);let f=r(r({},rt),e);return f.stops=(e.stops??rt.stops).map(S=>r({},S)),f.fxOrder=ft(f.fxOrder),f}var Vt=`#version 300 es
void main() {
  // fullscreen triangle, no buffers needed
  vec2 pos = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(pos * 2.0 - 1.0, 0.0, 1.0);
}
`;var dt=`
float hash21(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
`;var Yt=`#version 300 es
precision highp float;

out vec4 outColor;

uniform sampler2D u_scene;    // the pass below (first pass: unused)
uniform vec2  u_resolution;
uniform float u_phase;        // 0..1 position in the seamless animation cycle
uniform float u_seed;

const float TAU = 6.283185307179586;

${dt}

// Seamless drift: a circular orbit through noise space that lands back on
// its start every cycle and vanishes at phase 0, so still frames render
// identically with animation off.
vec2 drift(float k) {
  return vec2(cos(u_phase * TAU) - 1.0, sin(u_phase * TAU)) * k;
}
`;var Jt=`
const int MAX_STOPS = 8;

uniform int   u_shape;        // 0 linear 1 radial 2 conic 3 mesh 4 warped field 5 metaballs 6 voronoi 7 aurora 8 liquid marble
uniform vec3  u_colors[MAX_STOPS];
uniform float u_positions[MAX_STOPS];
uniform int   u_stopCount;
uniform float u_warp;
uniform float u_scale;
uniform int   u_detail;       // fBm octaves
uniform float u_contrast;
uniform float u_angle;        // radians
uniform vec2  u_center;
uniform vec2  u_followCursor;  // pointer follow: eased cursor, canvas uv
uniform float u_followAmount;  // hover strength \u2014 exactly 0 at rest
uniform float u_followPos;     // the riding stop's ramp position (0..1)
uniform int   u_followIndex;   // the riding stop, sorted index (mesh); -1 off
uniform float u_gradientOpacity; // over whatever sits below in the stack
uniform int   u_gradientBlend;   // BLEND_NAMES indices, like the image's
uniform int   u_oklab;           // 1 = blend ramp stops in OKLab (opt-in)

float fbm(vec2 p, int octaves) {
  float value = 0.0;
  float amp = 0.5;
  float norm = 0.0;
  mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
  for (int i = 0; i < 6; i++) {
    if (i > octaves) break;
    value += amp * vnoise(p);
    norm += amp;
    p = rot * p * 2.02;
    amp *= 0.5;
  }
  return norm > 0.0 ? value / norm : 0.0;
}

// \u2500\u2500 5-stop color ramp \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

// sRGB \u2194 OKLab (Bj\xF6rn Ottosson's reference constants) \u2014 used only when
// the OKLab toggle is on. mixStop returns its endpoints verbatim at
// f=0/1 so stop colors never round-trip through the conversion, and
// the toggle-off path is the original mix, so older looks stay
// pixel-identical.
vec3 srgb2lin(vec3 c) {
  return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c));
}

vec3 lin2srgb(vec3 c) {
  c = max(c, vec3(0.0));
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

vec3 lin2oklab(vec3 c) {
  vec3 lms = vec3(
    dot(vec3(0.4122214708, 0.5363325363, 0.0514459929), c),
    dot(vec3(0.2119034982, 0.6806995451, 0.1073969566), c),
    dot(vec3(0.0883024619, 0.2817188376, 0.6299787005), c));
  lms = pow(max(lms, vec3(0.0)), vec3(1.0 / 3.0));
  return vec3(
    dot(vec3(0.2104542553, 0.7936177850, -0.0040720468), lms),
    dot(vec3(1.9779984951, -2.4285922050, 0.4505937099), lms),
    dot(vec3(0.0259040371, 0.7827717662, -0.8086757660), lms));
}

vec3 oklab2lin(vec3 c) {
  vec3 lms = vec3(
    c.x + 0.3963377774 * c.y + 0.2158037573 * c.z,
    c.x - 0.1055613458 * c.y - 0.0638541728 * c.z,
    c.x - 0.0894841775 * c.y - 1.2914855480 * c.z);
  lms = lms * lms * lms;
  return vec3(
    dot(vec3(4.0767416621, -3.3077115913, 0.2309699292), lms),
    dot(vec3(-1.2684380046, 2.6097574011, -0.3413193965), lms),
    dot(vec3(-0.0041960863, -0.7034186147, 1.7076147010), lms));
}

vec3 mixStop(vec3 a, vec3 b, float f) {
  if (u_oklab == 1) {
    if (f <= 0.0) return a;
    if (f >= 1.0) return b;
    vec3 lab = mix(lin2oklab(srgb2lin(a)), lin2oklab(srgb2lin(b)), f);
    return clamp(lin2srgb(oklab2lin(lab)), 0.0, 1.0);
  }
  return mix(a, b, f);
}

vec3 ramp(float t) {
  t = clamp(t, 0.0, 1.0);
  vec3 color = u_colors[0];
  for (int i = 0; i < MAX_STOPS - 1; i++) {
    if (i >= u_stopCount - 1) break;
    float p0 = u_positions[i];
    float p1 = u_positions[i + 1];
    float span = max(p1 - p0, 1e-5);
    float f = clamp((t - p0) / span, 0.0, 1.0);
    f = f * f * (3.0 - 2.0 * f); // smooth the band edges
    color = mixStop(color, u_colors[i + 1], f);
  }
  return color;
}

// \u2500\u2500 shape fields \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

float shapeField(vec2 uv, vec2 st) {
  // the animation cycle glides every noise query along a closed orbit
  vec2 seedOff = vec2(u_seed * 0.013, u_seed * 0.027) + drift(0.3);

  if (u_shape == 0) {
    // linear: project onto angle axis, subtle warp wobble
    vec2 dir = vec2(cos(u_angle), sin(u_angle));
    float t = dot(uv - 0.5, dir) + 0.5;
    if (u_warp > 0.0) {
      t += (fbm(st * u_scale + seedOff, u_detail) - 0.5) * u_warp * 0.35;
    }
    return t;
  }
  if (u_shape == 1) {
    // radial from center
    float t = length(st - (u_center * 2.0 - 1.0) * vec2(u_resolution.x / u_resolution.y, 1.0)) * 0.75;
    if (u_warp > 0.0) {
      t += (fbm(st * u_scale + seedOff, u_detail) - 0.5) * u_warp * 0.4;
    }
    return t;
  }
  if (u_shape == 2) {
    // conic sweep around center
    vec2 d = st - (u_center * 2.0 - 1.0) * vec2(u_resolution.x / u_resolution.y, 1.0);
    float t = fract(atan(d.y, d.x) / TAU + u_angle / TAU);
    // mirror so the ramp wraps seamlessly instead of seaming at 0/1
    t = 1.0 - abs(t * 2.0 - 1.0);
    if (u_warp > 0.0) {
      t += (fbm(st * u_scale + seedOff, u_detail) - 0.5) * u_warp * 0.3;
    }
    return t;
  }
  if (u_shape == 5) {
    // metaballs: summed inverse-square blob energy \u2014 the ramp reads the
    // field, so stops paint rims and cores. Detail deals more blobs,
    // Scale sizes them, Warp melts the rims with drifting noise.
    float aspectX = u_resolution.x / u_resolution.y;
    int blobs = 3 + u_detail;
    float f = 0.0;
    for (int i = 0; i < 9; i++) {
      if (i >= blobs) break;
      float fi = float(i);
      vec2 p = vec2(
        hash21(vec2(u_seed + fi * 23.1, fi * 11.93)),
        hash21(vec2(fi * 29.7, u_seed + fi * 9.21))
      );
      // keep centers inboard so cores stay on the canvas
      p = (p * 1.6 - 0.8) * vec2(aspectX, 1.0);
      // per-blob closed orbit, golden-angle staggered and size-varied;
      // the offset cancels exactly at phase 0 (the mesh trick)
      float a0 = fi * 2.39996;
      p += vec2(cos(u_phase * TAU + a0) - cos(a0),
                sin(u_phase * TAU + a0) - sin(a0)) *
           (0.10 + 0.05 * hash21(vec2(fi, u_seed)));
      float r = (0.30 + 0.25 * hash21(vec2(fi * 3.7, u_seed * 0.7))) / max(u_scale, 0.25);
      vec2 d = st - p;
      f += r * r / (dot(d, d) + 1e-4);
    }
    // soft-threshold the energy into ramp space (cores ~1, voids ~0)
    float t = f / (f + 1.6);
    if (u_warp > 0.0) {
      t += (fbm(st * (u_scale * 2.0) + seedOff, max(u_detail, 2)) - 0.5) * u_warp * 0.35;
    }
    return t;
  }
  if (u_shape == 6) {
    // voronoi: organic cellular field \u2014 F1 distance paints the cell
    // wells through the ramp, Detail mixes in each cell's own flat
    // color (0 = pure wells, 6 = mosaic), and the F2\u2212F1 ridge pulls
    // borders to the ramp's start so the first stop inks the veins.
    // Warp bends the lattice organic; Scale packs more cells. Each
    // feature point rides a closed hash-staggered orbit (the mesh
    // trick \u2014 still at phase 0, seamless at 1).
    vec2 p = st * (u_scale * 2.2) + vec2(u_seed * 0.013, u_seed * 0.027);
    if (u_warp > 0.0) {
      p += (vec2(
        fbm(p * 0.9 + seedOff, 3),
        fbm(p * 0.9 + seedOff + 17.3, 3)
      ) - 0.5) * u_warp * 1.2;
    }
    vec2 cell = floor(p);
    vec2 fr = fract(p);
    float f1 = 8.0;
    float f2 = 8.0;
    float id = 0.0;
    for (int y = -1; y <= 1; y++) {
      for (int x = -1; x <= 1; x++) {
        vec2 g = vec2(float(x), float(y));
        vec2 c = cell + g;
        vec2 o = vec2(hash21(c + u_seed), hash21(c + u_seed + 91.7));
        // base point stays 0.2..0.8 inside its cell and the orbit
        // excursion tops out at 0.1, so points never leave the cell \u2014
        // the 3\xD73 search is exact, no popping seams
        float a0 = o.x * TAU * 3.0;
        o = 0.2 + o * 0.6 +
            vec2(cos(u_phase * TAU + a0) - cos(a0),
                 sin(u_phase * TAU + a0) - sin(a0)) * 0.05;
        vec2 q = g + o - fr;
        float d = dot(q, q);
        if (d < f1) {
          f2 = f1;
          f1 = d;
          id = hash21(c * 1.61 + u_seed * 0.31);
        } else if (d < f2) {
          f2 = d;
        }
      }
    }
    f1 = sqrt(f1);
    f2 = sqrt(f2);
    float cellMix = float(u_detail) / 6.0;
    float t = mix(clamp(f1 * 1.15, 0.0, 1.0), id, cellMix);
    // vein edges \u2014 Contrast washes them out or carves them deeper via
    // the shared post-field mapping, no extra knob needed
    t *= mix(0.15, 1.0, smoothstep(0.0, 0.18, f2 - f1));
    return t;
  }
  if (u_shape == 7) {
    // aurora: light curtains swaying over a dark base \u2014 each curtain
    // is a soft vertical ridge whose center meanders with height, and
    // their light ADDS, so crossings glow hotter. The ramp paints
    // base\u2192glow\u2192core (a dark first stop gives the night-sky read).
    // Detail deals curtains, Scale tightens the meander, Warp swings
    // it wider; sway and rays ride the closed drift orbit \u2014 still at
    // phase 0, seamless at 1.
    float aspectX = u_resolution.x / u_resolution.y;
    int curtains = 2 + u_detail / 2;
    float e = 0.0;
    for (int i = 0; i < 5; i++) {
      if (i >= curtains) break;
      float fi = float(i);
      float baseX = (hash21(vec2(u_seed + fi * 19.3, fi * 7.7)) * 1.7 - 0.85) * aspectX;
      // meander plus a hash-varied lean, so curtains tilt, not just wave
      float sway = (fbm(vec2(st.y * (0.9 * u_scale) + fi * 13.1,
                             u_seed * 0.017 + fi * 5.3) + drift(0.45), 3) - 0.5) *
                   (0.5 + u_warp * 1.1) +
                   (hash21(vec2(fi * 9.1, u_seed * 2.3)) - 0.5) * 0.6 * st.y;
      float w = 0.07 + 0.09 * hash21(vec2(fi * 3.3, u_seed * 1.7));
      float d = (st.x - baseX - sway) / w;
      float body = exp(-d * d);
      // banding: two frequencies of vertical rays striate each curtain
      float rays = (0.6 + 0.4 * vnoise(vec2(st.x * (26.0 * u_scale) + fi * 31.7,
                                            st.y * 2.3 + u_seed) + drift(0.6))) *
                   (0.75 + 0.25 * vnoise(vec2(st.x * (80.0 * u_scale) + fi * 57.3,
                                              st.y * 1.1) + drift(0.6)));
      // curtains thin toward the bottom of the frame like the real thing
      float lift = 0.55 + 0.45 * smoothstep(-1.0, 1.0, st.y);
      e += body * rays * lift * (0.8 + 0.5 * hash21(vec2(fi, u_seed * 0.9)));
    }
    // saturating additive light: a lone curtain glows mid-ramp,
    // crossings burn toward the top stop
    return 1.0 - exp(-e * 1.6);
  }
  if (u_shape == 8) {
    // liquid marble: combed ink \u2014 bands laid across the frame, then
    // dragged through two nested warp layers whose noise is stretched
    // along the comb direction, so features pull into long filaments.
    // The band field folds back through the ramp (triangle wave) and
    // the folds are crease-sharpened: flat pools of each stop's ink
    // with crisp vein boundaries \u2014 pulled filaments, not clouds (the
    // warped-field shape stays soft; this one is all edges).
    vec2 p = st * (u_scale * 0.9) + vec2(u_seed * 0.013, u_seed * 0.027);
    // anisotropic sampling: compress x, stretch y \u2014 combed along x
    vec2 pa = vec2(p.x * 0.45, p.y * 1.5);
    float comb = 1.5 + u_warp * 2.5;
    vec2 q = vec2(fbm(pa + drift(0.4), u_detail),
                  fbm(pa + vec2(4.7, 9.2) + drift(0.4), u_detail));
    vec2 r = vec2(fbm(pa * 1.9 + q * comb + vec2(1.7, 9.2), u_detail),
                  fbm(pa * 1.9 + q * comb + vec2(8.3, 2.8), u_detail));
    float bands = st.y * (u_scale * 1.4) + u_seed * 0.031 +
                  (q.y - 0.5) * comb * 0.9 + (r.x - 0.5) * comb * 1.7;
    float t = 1.0 - abs(fract(bands) * 2.0 - 1.0);
    // crease the folds: steeper band edges, flatter ink pools
    t = t * t * (3.0 - 2.0 * t);
    t = t * t * (3.0 - 2.0 * t);
    return t;
  }
  // 4: warped field \u2014 domain-warped fBm
  vec2 p = st * u_scale + seedOff;
  vec2 q = vec2(
    fbm(p + vec2(0.0, 0.0), u_detail),
    fbm(p + vec2(5.2, 1.3), u_detail)
  );
  return fbm(p + u_warp * 2.5 * (q - 0.5) * 2.0, u_detail);
}

// mesh: one seeded point per color stop, inverse-distance-weighted blend
vec3 meshColor(vec2 st) {
  float aspectX = u_resolution.x / u_resolution.y;
  vec3 sum = vec3(0.0);
  float wsum = 0.0;
  for (int i = 0; i < MAX_STOPS; i++) {
    if (i >= u_stopCount) break;
    float fi = float(i);
    vec2 p = vec2(
      hash21(vec2(u_seed + fi * 13.7, fi * 7.31)),
      hash21(vec2(fi * 17.9, u_seed + fi * 5.7))
    );
    p = (p * 2.0 - 1.0) * vec2(aspectX, 1.0);
    // each point rides its own small orbit (golden-angle stagger keeps them
    // out of sync); the offset cancels at phase 0 so still frames match
    float a0 = fi * 2.39996;
    p += vec2(cos(u_phase * TAU + a0) - cos(a0),
              sin(u_phase * TAU + a0) - sin(a0)) * 0.06;
    if (u_warp > 0.0) {
      p += (vec2(
        vnoise(p * u_scale + u_seed),
        vnoise(p * u_scale + u_seed + 31.7)
      ) - 0.5) * u_warp;
    }
    // pointer follow: the chosen stop's own point swims onto the cursor
    // (and back \u2014 the amount eases to exactly 0 at rest), so its color
    // blob rides the mouse while the other points hold the composition
    if (i == u_followIndex && u_followAmount > 0.0) {
      vec2 c = (u_followCursor * 2.0 - 1.0) * vec2(aspectX, 1.0);
      p = mix(p, c, u_followAmount);
    }
    float d = length(st - p);
    float w = 1.0 / pow(d + 0.08, 3.0);
    sum += u_colors[i] * w;
    wsum += w;
  }
  return sum / wsum;
}

vec3 gradientColor(vec2 uv) {
  // a lone stop is a solid color \u2014 no field math, no contrast shift:
  // the swatch you picked is the pixel you get, on every shape
  if (u_stopCount <= 1) return u_colors[0];
  // st: aspect-corrected, centered coords for distance-based shapes
  vec2 st = (uv * 2.0 - 1.0) * vec2(u_resolution.x / u_resolution.y, 1.0);
  if (u_shape == 3) {
    vec3 color = meshColor(st);
    // contrast still applies to the blended mesh
    return clamp((color - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  }
  float t = shapeField(uv, st);
  t = clamp((t - 0.5) * u_contrast + 0.5, 0.0, 1.0);
  // pointer follow: the chosen stop's color blooms through the field \u2014
  // t bends toward its ramp position under a gaussian around the
  // cursor, so the bands warp around the intrusion, the rim blends out
  // through the neighboring stops, and the core lands exactly on the
  // stop's own color. Applied after contrast so the core stays exact;
  // amount 0 (rest, every export) leaves the field untouched.
  if (u_followAmount > 0.0) {
    vec2 d = st - (u_followCursor * 2.0 - 1.0) * vec2(u_resolution.x / u_resolution.y, 1.0);
    t = mix(t, u_followPos, exp(-dot(d, d) / 0.2) * u_followAmount);
  }
  return ramp(t);
}
`;var Kt=`
float lum(vec3 c) { return dot(c, vec3(0.3, 0.59, 0.11)); }

// clamp a luma-shifted color back into gamut, preserving its luminance
vec3 clipLum(vec3 c) {
  float l = lum(c);
  float mn = min(c.r, min(c.g, c.b));
  float mx = max(c.r, max(c.g, c.b));
  if (mn < 0.0) c = l + (c - l) * l / (l - mn);
  if (mx > 1.0) c = l + (c - l) * (1.0 - l) / (mx - l);
  return c;
}

vec3 blendColors(int mode, vec3 b, vec3 s) {
  if (mode == 1) return b * s;                                // multiply
  if (mode == 2) return 1.0 - (1.0 - b) * (1.0 - s);          // screen
  if (mode == 3) {                                            // overlay
    return mix(2.0 * b * s, 1.0 - 2.0 * (1.0 - b) * (1.0 - s), step(vec3(0.5), b));
  }
  if (mode == 4) {                                            // soft light (W3C)
    vec3 d = mix(sqrt(b), ((16.0 * b - 12.0) * b + 4.0) * b, step(b, vec3(0.25)));
    return mix(
      b - (1.0 - 2.0 * s) * b * (1.0 - b),
      b + (2.0 * s - 1.0) * (d - b),
      step(vec3(0.5), s)
    );
  }
  if (mode == 5) {                                            // hard light
    return mix(2.0 * b * s, 1.0 - 2.0 * (1.0 - b) * (1.0 - s), step(vec3(0.5), s));
  }
  if (mode == 6) return clipLum(s + (lum(b) - lum(s)));       // color: source hue+sat, backdrop luma
  if (mode == 7) return abs(b - s);                           // difference
  if (mode == 8) return b + s - 2.0 * b * s;                  // exclusion
  if (mode == 9) return clipLum(b + (lum(s) - lum(b)));       // luminosity: backdrop hue+sat, source luma
  return s;                                                   // normal
}
`;var jt=`
uniform sampler2D u_image;
uniform int   u_imageOn;      // 0 until the texture is decoded & uploaded
uniform float u_imageAspect;  // width / height
uniform float u_imageOpacity; // the photo's opacity over what's below it
uniform int   u_imageBlend;   // matches BLEND_NAMES in params.ts
// Blur isn't read here anymore. u_image is bound to a properly Gaussian
// blurred copy of the photo when the slider is up (BLUR_FRAG), so this
// samples whatever it's handed \u2014 the old u_imageBlur/u_imageMaxLod pair
// drove a textureLod down the mip chain and went with it.
uniform int   u_imageFit;     // 0 cover \xB7 1 contain
uniform vec2  u_imageFocal;   // source-window center, 0..1 (0.5 = middle)
uniform float u_imageZoom;    // 1..4 magnification of the fit

vec4 imageColor(vec2 uv) {
  // fit the image to the canvas: cover shrinks the sampling window into
  // the source (crop), contain grows it past the source so the whole
  // image fits \u2014 samples outside 0..1 are the letterbox, rendered clear
  float ca = u_resolution.x / u_resolution.y;
  vec2 fit = u_imageFit == 1
    ? vec2(max(1.0, ca / u_imageAspect), max(1.0, u_imageAspect / ca))
    : vec2(min(1.0, ca / u_imageAspect), min(1.0, u_imageAspect / ca));
  fit /= max(u_imageZoom, 1.0);
  // the focal point places the window, clamped so it never detaches
  // from the source: window inside source -> it pans the crop; window
  // larger (letterbox axis) -> it slides the image frame-edge to
  // frame-edge. At 0.5/0.5 this is exactly the old centered fit.
  vec2 half_ = fit * 0.5;
  vec2 c = clamp(u_imageFocal, min(half_, 1.0 - half_), max(half_, 1.0 - half_));
  vec2 iuv = (uv - 0.5) * fit + c;
  // outside the source = clear, with an fwidth edge so the letterbox
  // border doesn't alias. Cover looks never clip (the window stays
  // inside the source), so they keep the exact pre-fit pixels.
  float mask = 1.0;
  if (fit.x > 1.0 || fit.y > 1.0) {
    vec2 aa = fwidth(iuv);
    vec2 m = smoothstep(vec2(0.0), aa, iuv) * (1.0 - smoothstep(1.0 - aa, vec2(1.0), iuv));
    mask = m.x * m.y;
    if (mask <= 0.0) return vec4(0.0);
  }
  vec4 img = texture(u_image, clamp(iuv, 0.0, 1.0));
  // texels are stored premultiplied so bilinear taps \u2014 and the blur's
  // own taps \u2014 never bleed a transparent PNG's (black) RGB into its
  // edges; the blend math wants straight color back. Opaque photos
  // pass through exact.
  img.rgb /= max(img.a, 1e-4);
  img.a *= mask;
  return img;
}
`;var Zt=a=>`
uniform int   u_patternSource;  // 0 layout blocks \xB7 1 tile shapes
uniform int   u_patternLayout;  // 0 bento \xB7 1 grid \xB7 2 mosaic \xB7 3 circles
uniform int   u_patternCols;
uniform int   u_patternRows;
uniform float u_patternGap;     // device px
uniform float u_patternRadius;  // device px
uniform vec3  u_patternGapColor;
uniform float u_patternSeed;

const int MAX_CELLS = 16;

float sdRoundBox(vec2 p, vec2 b, float r) {
  r = min(r, min(b.x, b.y));
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

// Tile shapes live on a near-square grid: Columns sets the cell width, the
// row count snaps to whatever keeps cells closest to square, and each cell
// flexes the remaining few percent so whole rows always meet the frame
// exactly \u2014 no cut-off shapes, no visible stretch.
vec3 tilesColor(vec2 uv) {
  float ca = u_resolution.x / u_resolution.y;
  float cols = float(clamp(u_patternCols, 1, 64));
  float cellW = ca / cols;                       // height units
  float rows = max(1.0, floor(1.0 / cellW + 0.5));
  float cellH = 1.0 / rows;
  vec2 pa = uv * vec2(ca, 1.0);
  float ci = floor(pa.x / cellW);
  float ri = floor(pa.y / cellH);
  vec2 center = vec2((ci + 0.5) * cellW, (ri + 0.5) * cellH);
  vec2 p = pa - center;
  vec2 b = vec2(cellW, cellH) * 0.5;
  float radius = u_patternRadius / u_resolution.y;

  float d;
  float pick = hash21(vec2(ci * 13.1 + u_patternSeed * 0.7, ri * 7.7 + u_patternSeed));
  int shape = int(floor(pick * 6.0));
  if (shape == 0) {
    d = sdRoundBox(p, b, radius);
  } else {
    // normalized cell space [-1,1]\xB2; divide by the SDF gradient so d stays
    // a true px distance in every direction (keeps the gap erosion uniform)
    vec2 q = p / b;
    if (shape == 1) {
      vec2 n = q / max(length(q), 1e-5);
      d = (length(q) - 1.0) / max(length(n / b), 1e-5);
    } else {
      // quarter-circle "leaf" anchored in one of the four corners; intersect
      // with the cell box so the straight sides erode (gap) evenly too
      vec2 corner = vec2(shape == 2 || shape == 4 ? -1.0 : 1.0,
                         shape == 2 || shape == 3 ? -1.0 : 1.0);
      vec2 rel = q - corner;
      vec2 n = rel / max(length(rel), 1e-5);
      d = (length(rel) - 2.0) / max(length(n / b), 1e-5);
      d = max(d, sdRoundBox(p, b, 0.0));
    }
  }
  // the gap erodes each shape by the same true px distance
  d += (u_patternGap * 0.5) / u_resolution.y;

  float aa = 1.5 / u_resolution.y;
  float mask = 1.0 - smoothstep(0.0, aa, d);
  return mix(u_patternGapColor, ${a}(uv), mask);
}

vec3 patternColor(vec2 uv) {
  if (u_patternSource == 1) return tilesColor(uv);

  int cols = clamp(u_patternCols, 1, MAX_CELLS);
  int rows = clamp(u_patternRows, 1, MAX_CELLS);
  bool bento = u_patternLayout == 0;

  // column/row edges \u2014 uniform grid, or seeded irregular sizes for bento
  float xe[MAX_CELLS + 1];
  float ye[MAX_CELLS + 1];
  float total = 0.0;
  for (int k = 0; k < MAX_CELLS; k++) {
    if (k >= cols) break;
    total += bento ? 0.45 + hash21(vec2(float(k) * 3.1, u_patternSeed)) : 1.0;
  }
  xe[0] = 0.0;
  for (int k = 0; k < MAX_CELLS; k++) {
    if (k >= cols) break;
    float w = bento ? 0.45 + hash21(vec2(float(k) * 3.1, u_patternSeed)) : 1.0;
    xe[k + 1] = xe[k] + w / total;
  }
  total = 0.0;
  for (int k = 0; k < MAX_CELLS; k++) {
    if (k >= rows) break;
    total += bento ? 0.45 + hash21(vec2(u_patternSeed, float(k) * 5.3)) : 1.0;
  }
  ye[0] = 0.0;
  for (int k = 0; k < MAX_CELLS; k++) {
    if (k >= rows) break;
    float h = bento ? 0.45 + hash21(vec2(u_patternSeed, float(k) * 5.3)) : 1.0;
    ye[k + 1] = ye[k] + h / total;
  }

  int ci = cols - 1;
  for (int k = 0; k < MAX_CELLS; k++) {
    if (k >= cols) break;
    if (uv.x < xe[k + 1]) { ci = k; break; }
  }
  int ri = rows - 1;
  for (int k = 0; k < MAX_CELLS; k++) {
    if (k >= rows) break;
    if (uv.y < ye[k + 1]) { ri = k; break; }
  }
  float x0 = xe[ci], x1 = xe[ci + 1];
  float y0 = ye[ri], y1 = ye[ri + 1];

  // bento: merge some horizontal pairs into wide cells
  if (bento && cols > 1) {
    int pair = (ci / 2) * 2;
    if (pair + 1 < cols &&
        hash21(vec2(float(pair) * 7.3 + u_patternSeed, float(ri) * 3.7)) < 0.38) {
      ci = pair;
      x0 = xe[pair];
      x1 = xe[pair + 2];
    }
  }

  vec2 center = vec2(x0 + x1, y0 + y1) * 0.5;
  vec2 halfSize = vec2(x1 - x0, y1 - y0) * 0.5;
  // aspect-corrected space so radii and circles stay round
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  vec2 p = (uv - center) * aspect;
  // px radius in this space (1 unit = canvas height); sdRoundBox clamps to the cell
  float radius = u_patternRadius / u_resolution.y;

  // layout cards: inset the cell rect by px gap gutters (equal in x and y)
  vec2 inset = halfSize - (u_patternGap / u_resolution) * 0.5;
  if (inset.x <= 0.0 || inset.y <= 0.0) return u_patternGapColor;
  vec2 b = inset * aspect;
  float d;
  if (u_patternLayout == 3) {
    d = length(p) - min(b.x, b.y);               // circles
  } else {
    d = sdRoundBox(p, b, radius);                // bento / grid / mosaic
  }

  // one-pixel antialias band (p is in units of canvas height), fading only
  // outward from d=0 \u2014 cells stay fully opaque at their own edge, so with
  // gap off, adjacent cells tile seamlessly instead of feathering a seam
  float aa = 1.5 / u_resolution.y;
  float mask = 1.0 - smoothstep(0.0, aa, d);
  if (mask <= 0.0) return u_patternGapColor;

  vec3 inner;
  if (u_patternLayout == 2) {
    // mosaic: each cell shows another cell's slice of the scene
    vec2 local = (uv - vec2(x0, y0)) / vec2(x1 - x0, y1 - y0);
    vec2 src = vec2(
      floor(hash21(vec2(float(ci) + u_patternSeed, float(ri) * 5.1)) * float(cols)),
      floor(hash21(vec2(float(ri) + u_patternSeed * 1.3, float(ci) * 9.2)) * float(rows))
    );
    inner = ${a}((src + local) / vec2(float(cols), float(rows)));
  } else {
    inner = ${a}(uv);
  }
  return mix(u_patternGapColor, inner, mask);
}
`;function Qt(a,i,n){switch(n){case`G`:return`vec3 ${a}(vec2 uv) {
  vec3 b = ${i}(uv);
  vec3 g = clamp(blendColors(u_gradientBlend, b, gradientColor(uv)), 0.0, 1.0);
  return mix(b, g, u_gradientOpacity);
}`;case`I`:return`vec3 ${a}(vec2 uv) {
  vec3 b = ${i}(uv);
  if (u_imageOn == 0) return b;
  vec4 img = imageColor(uv);
  vec3 blended = clamp(blendColors(u_imageBlend, b, img.rgb), 0.0, 1.0);
  return mix(b, blended, img.a * u_imageOpacity);
}`;default:return`vec3 ${a}(vec2 uv) { return patternColor(uv); }`}}function eo(a,i){let n=u=>a.includes(u),e=[Yt];(n(`G`)||n(`I`))&&e.push(Kt),n(`G`)&&e.push(Jt),n(`I`)&&e.push(jt),e.push(i?`vec3 L0(vec2 uv) { return texture(u_scene, clamp(uv, 0.0, 1.0)).rgb; }`:`vec3 L0(vec2 uv) { return vec3(0.051, 0.051, 0.055); }`);let f=`L0`;return[...a].forEach((u,S)=>{let T=`L${S+1}_${u}`;u===`P`&&e.push(Zt(f)),e.push(Qt(T,f,u)),f=T}),e.push(`void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution; // 0..1, y up
  outColor = vec4(clamp(${f}(uv), 0.0, 1.0), 1.0);
}`),e.join(`
`)}var to=`#version 300 es
precision highp float;

out vec4 outColor;

uniform sampler2D u_scene;     // pass-1 result, mipmapped for softness
uniform vec2  u_resolution;
uniform float u_seed;
uniform float u_phase;         // 0..1 position in the seamless animation cycle
// What one px-authored unit measures, in this buffer's device px \u2014 the
// renderer's fxScale. Every px-authored SIZE arrives pre-multiplied by
// it, so a stage only needs this directly when it has a length of its
// own baked in (paper's fibre grid, contour's supersample radius): those
// have to divide the buffer out too, or the stage renders a different
// picture at every output size. It lives in the shared header rather
// than in one stage's chunk because two stages already need it.
uniform float u_pixelScale;

const float TAU = 6.283185307179586;

${dt}

// Seamless drift: a circular orbit through noise space that lands back on
// its start every cycle and vanishes at phase 0 (matches the scene pass).
vec2 drift(float k) {
  return vec2(cos(u_phase * TAU) - 1.0, sin(u_phase * TAU)) * k;
}

// Gentle swell that returns to exactly 1 at phase 0 \u2014 the beat the
// stylize stages breathe on, so they carry motion of their own instead
// of sitting frozen while the scene animates beneath them.
float breath(float k) {
  return 1.0 + k * sin(u_phase * TAU);
}

// Per-cell pulse for gridded stages (halftone marks, ascii glyphs):
// each cell rides its own point on the sine \u2014 hash-staggered so
// neighbours beat out of sync \u2014 and the offset term cancels at phase 0,
// keeping still frames exact. Range \xB12k.
float cellBeat(vec2 id, float k) {
  float a0 = hash21(id) * TAU;
  return (sin(u_phase * TAU + a0) - sin(a0)) * k;
}

/**
 * cellBeat's still counterpart (P6): a per-cell shove that does NOT
 * cancel at phase 0, so it survives into every export, thumbnail and
 * still. Returns \xB10.5 per axis; the caller scales and caps it.
 *
 * The seed scales DIFFERENTLY into each hash input on purpose. Adding a
 * plain seed to the id \u2014 the obvious way, and what a per-cell hash
 * usually does \u2014 only slides the whole pattern by one cell diagonally,
 * so seed 1 is seed 0's grid shifted rather than a new grid. Two
 * unrelated scalings reroll it properly.
 */
vec2 cellJitter(vec2 id, float seed) {
  return vec2(
    hash21(vec2(id.x + seed * 13.7, id.y + seed * 5.3)),
    hash21(vec2(id.x + seed * 29.1, id.y + seed * 41.9))
  ) - 0.5;
}

// A tone curve shared by every stage that reads a tone before deciding
// what to print. gamma > 1 opens the shadows (more ink where the picture
// is dark), gamma < 1 crushes them \u2014 the SAME direction in every stage,
// so one mental model covers halftone, ASCII and dither. The branch is
// on a uniform and keeps gamma 1 bit-exact, which is what lets this ship
// without moving a single existing link.
float toneGamma(float t, float gamma) {
  return gamma == 1.0 ? t : pow(max(t, 0.0), 1.0 / gamma);
}

/**
 * The negative screen: flip the tone that chooses the mark.
 *
 * It sits at the same point gamma does, and for the same reason \u2014 from
 * here it reaches the mark's SIZE and the ink ramp that paints it
 * together, which is what makes it a negative rather than a picture of
 * big marks in the wrong colour. Flipping only the size would print a
 * fat mark in the shadows and then paint it shadow-dark.
 *
 * Hatch is the case that proves it isn't reachable another way: its
 * three marks are welded to their bands (rules in shadow, rings in
 * midtone, bars in highlight), so inverting sends shadows to bars \u2014
 * something no amount of moving the band edges can do.
 */
float toneFlip(float t, int invert) {
  return invert == 1 ? 1.0 - t : t;
}
`;var oo=`
uniform int   u_waveMode;      // 0 circular \xB7 1 linear
uniform vec2  u_waveAxis;      // linear: unit vector the front travels along
uniform float u_waveAmount;
uniform float u_waveFrequency;
uniform float u_waveFalloff;
uniform float u_wavePhase;
uniform vec2  u_waveCenter;    // circular only

vec2 waveMap(vec2 uv) {
  if (u_waveAmount <= 0.0) return uv;
  float ca = u_resolution.x / u_resolution.y;
  float travel;   // distance from where the wave starts
  vec2 dir;       // which way a crest shoves the picture
  if (u_waveMode == 1) {
    // 0 at the entering edge, 1 at the far one \u2014 plain frame fractions,
    // NOT the aspect-corrected space the rings use. Rings have a
    // roundness to protect; a straight front does not, and this is what
    // makes Frequency read as its label promises on any frame: eight
    // crests crossing means eight, wide canvas or tall.
    dir = u_waveAxis;
    travel = dot(uv - 0.5, dir) + 0.5;
  } else {
    vec2 rel = (uv - u_waveCenter) * vec2(ca, 1.0);
    travel = length(rel);
    dir = travel > 1e-4 ? rel / travel : vec2(0.0, 1.0);
  }
  float fall = exp(-travel * u_waveFalloff * 4.0);
  // the cycle advances the ripple phase one whole period, so crests travel
  // outward and the loop closes on itself
  float ripple = sin((travel * u_waveFrequency - u_wavePhase - u_phase) * TAU);
  // the divide un-corrects the aspect, so a given Amount is the same
  // shove on screen whichever way the wave points
  return uv + dir * ripple * u_waveAmount * 0.035 * fall / vec2(ca, 1.0);
}
`;var ao=`
uniform int   u_glassMode;     // 1 fluted \xB7 2 mosaic
uniform float u_glassAmount;
uniform float u_glassCount;
uniform float u_glassRatio;    // pane height / width in Mosaic; 1 = square
uniform float u_glassAngle;    // which way the flutes run, radians; 0 = vertical
uniform float u_glassProfile;  // wedge exponent, the pane's section; 3 = pre-P9
uniform float u_glassBevel;    // polished ridge width in panes; 0.04 = pre-P9
uniform float u_glassShadow;
uniform float u_glassHighlight;

// Local pane coordinate that reads the same from both sides of a seam:
// within a hair of the edge, blend toward the mirrored coordinate.
float paneCoord(float g) {
  float t = fract(g);
  float seam = smoothstep(-0.02, 0.02, abs(t - 0.5) - 0.5);
  return mix(t, 1.0 - t, seam);
}

// Refraction sweep in pane units. The wedge is eased back to its seam
// value across the outer 8% so neighbouring panes meet without a jump.
// The cycle breathes the refraction a few percent, so the content
// behind every pane swims gently instead of holding still.
float paneSweep(float g) {
  float t = fract(g);
  float x = 1.5 * paneCoord(g);
  // The exponent IS the pane's cross-section (P9). At 1 the sweep is a
  // straight ramp across the pane \u2014 a prism. At 5 the pane is flat
  // through its middle and does all its bending at the seam. 3 keeps
  // the pre-P9 cubic, spelled out rather than pow'd: pow(x, 3.0) is
  // exp2(3 * log2(x)) and lands an ulp off the multiply.
  float wedge = 0.5 - (u_glassProfile == 3.0
    ? x * x * x
    : pow(max(x, 1e-6), u_glassProfile));
  float ease = smoothstep(0.0, 0.08, t) * (1.0 - smoothstep(0.92, 1.0, t));
  return mix(0.5, wedge, ease) * 3.0 * u_glassAmount * breath(0.05);
}

// Thin bright ridge where two panes meet \u2014 the polished edge catching
// light. Its width is the bevel (P9); Highlight is how brightly it
// burns, this is how far it reaches. Capped under half a pane, past
// which the two seams would meet and the ridge stop being an edge.
float paneRidge(float g) {
  float t = fract(g);
  float w = clamp(u_glassBevel, 0.002, 0.49);
  return 1.0 - smoothstep(0.0, w, t) * (1.0 - smoothstep(1.0 - w, 1.0, t));
}

// shade = (highlight toward white, multiplicative darkening)
vec2 glassMap(vec2 uv, out vec2 shade) {
  shade = vec2(0.0);
  float dark = u_glassShadow * u_glassShadow;
  if (u_glassMode == 1) {
    // fluted glass: parallel strips, each a one-axis prism
    float n = max(u_glassCount, 1.0);
    float g;
    if (u_glassAngle == 0.0) {
      // vertical \u2014 the pre-P9 expression, verbatim. The general form
      // below agrees with it to within an ulp, and an ulp moves every
      // link ever shared, so 0 keeps its own two lines.
      g = uv.x * n;
      uv.x = (g + paneSweep(g)) / n;
    } else {
      // The flutes turn in a CONFORMAL space: uv with y divided by the
      // aspect is physical space under one uniform scale, so a rotation
      // there is a rotation on the picture \u2014 strips stay parallel and
      // evenly spaced. (Rotating raw uv shears them, the same trap P2
      // avoided on halftone by working in grid space.) The sweep then
      // displaces along the strip normal instead of along x. Spacing
      // is the vertical case's, so turning the flutes doesn't resize
      // them.
      float fa = u_resolution.x / u_resolution.y;
      vec2 dir = vec2(cos(u_glassAngle), sin(u_glassAngle));
      vec2 q = uv * vec2(1.0, 1.0 / fa);
      g = dot(q, dir) * n;
      uv = (q + dir * (paneSweep(g) / n)) * vec2(1.0, fa);
    }
    shade = vec2(paneRidge(g) * u_glassHighlight,
                 pow(paneCoord(g), 1.3) * dark);
  } else if (u_glassMode == 2) {
    // glass mosaic: square panes refract on both axes, then pull toward
    // each pane's centre so every tile reads as its own little lens
    float ca = u_resolution.x / u_resolution.y;
    vec2 grid = max(u_glassCount, 1.0)
              * vec2(ca, 1.0 / max(u_glassRatio, 0.05));
    vec2 g = uv * grid;
    vec2 bent = (g + vec2(paneSweep(g.x), paneSweep(g.y))) / grid;
    vec2 snap = (floor(g) + 0.5) / grid;
    uv = mix(bent, snap, u_glassAmount * 0.25);
    shade = vec2(max(paneRidge(g.x), paneRidge(g.y)) * u_glassHighlight,
                 max(pow(paneCoord(g.x), 1.3), pow(paneCoord(g.y), 1.3)) * dark);
  }
  return uv;
}
`;var io=`
uniform float u_pixelate;      // block rows; <2 = off
uniform float u_pixelateRatio; // block height / width; 1 = square
uniform float u_pixelateGap;   // grout width as a fraction of a block; 0 = off
uniform vec3  u_pixelateGrout; // grout colour; resolved from the '' sentinel on upload
uniform int   u_pixelateGroutAuto; // 1 = shade the block's own colour instead

// The out param comes back as the fragment's position INSIDE its block,
// 0..1 on each axis \u2014 which the stage had no notion of while it was a
// pure uv-remap, and which is the whole of what P8 needed. The returned
// uv is untouched, so a look with no gap snaps blocks edge to edge
// exactly as it always did.
vec2 pixelateMap(vec2 uv, out vec2 cell) {
  if (u_pixelate < 2.0) { cell = vec2(0.5); return uv; }
  float ca = u_resolution.x / u_resolution.y;
  // taller blocks means FEWER rows, so the ratio divides the count
  vec2 blocks = vec2(u_pixelate * ca, u_pixelate / max(u_pixelateRatio, 0.05));
  // The lattice is nailed down, the way ASCII's, Halftone's and Hatch's
  // always were. It used to ride drift(0.35) so the mosaic "re-tiled
  // gently instead of sitting frozen" \u2014 but a wandering grid is the one
  // thing a stage built on hard blocks must not have: it reads as the
  // picture sliding under a loose screen rather than as a mosaic of it.
  // Grout is what made it plain, since mortar turns the drift into lines
  // crawling across the frame.
  //
  // The three grid stages that never drifted show what self-motion is
  // supposed to look like here: breath and cellBeat move the MARK
  // and leave the grid alone. Pixelate's mark is a flat block with
  // nothing to pulse, so it animates the way it should have all along \u2014
  // the cells recolour because the picture beneath them moves.
  //
  // Stills are untouched: drift is exactly zero at phase 0 (that is
  // how the loop closes), so every export, thumbnail and paused frame
  // was already drawing this lattice.
  cell = fract(uv * blocks);
  return (floor(uv * blocks) + 0.5) / blocks;
}

// Mortar between the tiles. The gap is cut from the block's own edge, so
// raising it shrinks every tile toward its centre rather than moving it
// \u2014 the blocks stay on their lattice and the grout opens between them.
vec3 mosaicGrout(vec3 color, vec2 cell) {
  if (u_pixelateGap <= 0.0 || u_pixelate < 2.0) return color;
  float half_ = clamp(u_pixelateGap, 0.0, 0.9) * 0.5;
  vec2 d = abs(cell - 0.5);
  // one block edge is one fragment wide at most, so the seam is drawn
  // hard rather than feathered \u2014 a soft edge on a stage whose entire
  // point is hard blocks reads as a rendering fault
  float tile = step(max(d.x, d.y), 0.5 - half_);
  // auto grout is the tile's own colour driven down, so the mortar reads
  // as recess on ANY content \u2014 a picked colour would have to guess at a
  // palette this stage can't see from where it sits in the stack
  vec3 grout = u_pixelateGroutAuto == 1 ? color * 0.35 : u_pixelateGrout;
  return mix(grout, color, tile);
}
`;var ro=`
const int MAX_LIGHTS = 4;

uniform int   u_lightMode;     // 1 glow \xB7 2 rays \xB7 3 iridescence \xB7 4 caustics
uniform float u_lightAmount;
uniform float u_lightSize;
uniform int   u_lightCount;    // sources shining, 1..4 (clamped at upload)
uniform vec2  u_lightPos[MAX_LIGHTS];
uniform vec3  u_lightColor[MAX_LIGHTS];  // white = identity tint
// Per-source multipliers of the shared Amount and Size (P11); 1 =
// identity, so a link written before they existed lacks both keys and
// renders bit-for-bit as it did. Position and colour were per-light
// from v7 and these weren't, which made four sources one brightness
// and one radius \u2014 no key/fill/rim.
uniform float u_lightGain[MAX_LIGHTS];
uniform float u_lightSpread[MAX_LIGHTS];

vec3 screenBlend(vec3 base, vec3 light) {
  return 1.0 - (1.0 - base) * (1.0 - light);
}

// One source's tinted field for the screen'd modes (glow/rays/caustics).
// The decorrelation shoves (band phase, noise domain) are gated to i>0:
// light 0 must evaluate the pre-v7 expressions untouched, and without a
// shove extra sources at one position would print the same field twice.
// (sharedSize, not shared: the latter is legal in ES 3.00 but reserved
// from 3.10, and a real driver is stricter than the test one.)
vec3 lightField(int i, vec2 rel, float dist, float sharedSize) {
  // this source's own brightness and radius (P11) \u2014 multiplying by 1
  // is exact, so the shared pair alone is the pre-P11 expression
  float amt = u_lightAmount * u_lightGain[i];
  float size = sharedSize * u_lightSpread[i];
  if (u_lightMode == 1) {
    // glow: soft gaussian \u2014 positions alone decorrelate
    float g = exp(-(dist * dist) / (size * size * 0.9));
    return vec3(g * amt) * u_lightColor[i];
  }
  if (u_lightMode == 2) {
    // rays: interleaved angular bands falling off with distance; the two
    // band sets counter-rotate one full step per cycle, so they shimmer
    float ang = atan(rel.y, rel.x);
    float a1 = ang * 6.0 + u_seed * 0.37 + u_phase * TAU;
    float a2 = ang * 13.0 + u_seed * 0.91 - u_phase * TAU;
    if (i > 0) {
      a1 += float(i) * 2.4;
      a2 += float(i) * 2.4;
    }
    float bands = pow(abs(sin(a1)), 4.0) * 0.65
                + pow(abs(sin(a2)), 8.0) * 0.35;
    float g = bands * exp(-dist / (size * 1.5));
    return vec3(g * amt) * u_lightColor[i];
  }
  // caustics: ridged noise shimmer pooling around the light, gliding on
  // the same closed orbit as the scene drift
  vec2 p = rel / size * 2.5 + u_seed + drift(0.5);
  if (i > 0) p += float(i) * 7.7;
  float r1 = 1.0 - abs(vnoise(p * 2.0) * 2.0 - 1.0);
  float r2 = 1.0 - abs(vnoise(p * 4.3 + 7.7) * 2.0 - 1.0);
  float c = pow(r1 * 0.6 + r2 * 0.4, 3.0);
  float fall = exp(-dist / (size * 2.0));
  return vec3(c * amt * fall) * u_lightColor[i];
}

vec3 applyLight(vec3 color, vec2 uv) {
  if (u_lightMode == 0 || u_lightAmount <= 0.0) return color;
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  // the cycle makes the light breathe a little; \xB16% of its size
  float size = max(u_lightSize, 0.02) * (1.0 + 0.06 * sin(u_phase * TAU));
  if (u_lightMode == 3) {
    // iridescence: thin-film rainbow keyed to luminance + distance; the
    // cycle slides the film thickness through one full rainbow period.
    // Structurally single-light \u2014 the film phase reads the running
    // color \u2014 so sources apply in sequence, each film laid over the
    // last (index order fixes the result). The tint scales the rainbow
    // ahead of the 0.6, so white leaves the pre-v7 film exact.
    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= u_lightCount) break;
      vec2 rel = (uv - u_lightPos[i]) * aspect;
      float dist = length(rel);
      // iridescence reads amount and size straight rather than through
      // lightField, so P11's two multipliers land here by hand
      float amt = u_lightAmount * u_lightGain[i];
      float sz = size * u_lightSpread[i];
      float t = dot(color, vec3(0.299, 0.587, 0.114)) + dist / (sz * 2.0) + u_phase;
      vec3 rainbow = 0.5 + 0.5 * cos(TAU * (t + vec3(0.0, 0.33, 0.67)));
      float fall = exp(-dist / (sz * 2.5));
      color = mix(color, screenBlend(color, rainbow * u_lightColor[i] * 0.6), amt * fall);
    }
    return color;
  }
  // glow/rays/caustics: screen-accumulate the sources, then screen the
  // total over the scene. Light 0 seeds the accumulator directly (not
  // through a screen against zero \u2014 1.0-(1.0-x) is not the identity in
  // float), so one light IS the pre-v7 single screenBlend, term for term.
  vec3 acc = vec3(0.0);
  for (int i = 0; i < MAX_LIGHTS; i++) {
    if (i >= u_lightCount) break;
    vec2 rel = (uv - u_lightPos[i]) * aspect;
    vec3 contrib = lightField(i, rel, length(rel), size);
    if (i == 0) acc = contrib;
    else acc = 1.0 - (1.0 - acc) * (1.0 - contrib);
  }
  return screenBlend(color, acc);
}
`;var no=`
uniform int   u_ditherAlgo;    // 0 ordered \xB7 1 white noise \xB7 2 blue noise
uniform int   u_ditherMatrix;  // 2 | 4 | 8 (ordered only)
uniform float u_ditherScale;   // pattern cell in device px
uniform float u_ditherRatio;   // cell height / width; 1 = square
uniform float u_ditherLevels;  // tone steps per channel (2\u201316)
uniform float u_ditherStrength;
uniform int   u_ditherColorMode; // 0 step luminance, keep hue \xB7 1 per-channel RGB
uniform float u_ditherThreshold; // tone bias before quantize; 0.5 = neutral
uniform float u_ditherGamma;     // tone curve before quantize; 1 = neutral
uniform int   u_ditherInvert;

// Canonical Bayer threshold for a 2^n grid (n = 1..3), built two bits per
// halving: each level contributes the 2x2 pattern digit 2*(x^y)+y, finest
// level as the most significant base-4 digit.
float bayerThreshold(vec2 cell, int n) {
  ivec2 p = ivec2(mod(cell, float(1 << n)));
  int t = 0;
  for (int i = 0; i < 3; i++) {
    if (i >= n) break;
    int bx = (p.x >> i) & 1;
    int by = (p.y >> i) & 1;
    t = t * 4 + (((bx ^ by) << 1) | by);
  }
  return float(t) / float(1 << (2 * n));
}

vec3 ditherColor(vec3 color, vec2 fragPx) {
  // Only the two NOISE algorithms ride the orbit. Ordered is a
  // STRUCTURED lattice, and carrying a Bayer weave around the orbit reads
  // as the pattern sliding over the picture \u2014 the same fault the pixel
  // grid had, for the same reason: the eye tracks a grid it can see.
  // White and blue noise have no structure to slide, so their motion
  // reads as boil, which is the whole job of noise. It is also what keeps
  // grain alive one stage down.
  //
  // The test mirrors the branch below rather than asking for algo 0, so a
  // hand-edited index falling through to Bayer is pinned along with it.
  bool noisy = u_ditherAlgo == 1 || u_ditherAlgo == 2;
  vec2 orbit = noisy ? drift(u_ditherScale * 3.0) : vec2(0.0);
  // dividing by a vec2 whose components are equal is the same division
  // the scalar did, bit for bit, so ratio 1 leaves every older link alone
  float dcw = max(u_ditherScale, 1.0);
  vec2 cell = floor((fragPx + orbit)
                    / vec2(dcw, dcw * max(u_ditherRatio, 0.05)));
  float t;
  if (u_ditherAlgo == 1) {
    t = hash21(cell + u_seed);
  } else if (u_ditherAlgo == 2) {
    // interleaved gradient noise: cheap blue-noise-like spectrum
    t = fract(52.9829189 * fract(dot(cell, vec2(0.06711056, 0.00583715))));
  } else {
    t = bayerThreshold(cell, u_ditherMatrix == 2 ? 1 : u_ditherMatrix == 8 ? 3 : 2);
  }
  float levels = max(u_ditherLevels, 2.0);
  float steps = levels - 1.0;
  float push = (t - 0.5) * u_ditherStrength / levels;
  // threshold: an additive tone lift ahead of the level snap, in both
  // color modes \u2014 at 0.5 the lift is an exact 0.0, so pre-threshold
  // links quantize untouched
  float lift = u_ditherThreshold - 0.5;
  if (u_ditherColorMode == 1) {
    // per channel, so an inverted RGB dither is the negative of the
    // picture rather than its luminance flipped and the hue left behind
    vec3 c = vec3(toneFlip(toneGamma(color.r, u_ditherGamma), u_ditherInvert),
                  toneFlip(toneGamma(color.g, u_ditherGamma), u_ditherInvert),
                  toneFlip(toneGamma(color.b, u_ditherGamma), u_ditherInvert));
    return clamp(floor((c + push + lift) * steps + 0.5) / steps, 0.0, 1.0);
  }
  // luminance mode: step the tone but keep the hue
  float l = toneFlip(
    toneGamma(dot(color, vec3(0.2126, 0.7152, 0.0722)), u_ditherGamma),
    u_ditherInvert);
  float lq = floor((l + push + lift) * steps + 0.5) / steps;
  return clamp(color * (l > 1e-3 ? lq / l : 0.0), 0.0, 1.0);
}
`;var so=`
uniform float u_aberration;    // 0..1
// Softness no longer appears in this pass at all: it's a real Gaussian
// blur of the scene buffer now (BLUR_FRAG), which the renderer binds to
// u_scene in place of the sharp one. The old u_softness/u_softnessLod
// pair drove a textureLod here and both are gone with it.
uniform float u_lensDistort;   // -1 pincushion \xB7 0 rectilinear \xB7 1 fisheye

/**
 * The lens' own curvature: a radial remap of the sample point, positive
 * barrelling the centre out like a fisheye and negative pinching it to
 * pincushion. It reads in ASPECT-CORRECTED space, so the bulge is round
 * on any frame \u2014 done in raw uv it would be an ellipse that changes
 * shape with the aspect, which is the same trap the flute angle and the
 * halftone screen both had to avoid.
 *
 * The polynomial is the standard Brown\u2013Conrady radial term, r' = r *
 * (1 + k\xB7r\xB2), normalised so the frame's corner stays put: without that
 * the whole picture swells out of frame as the knob rises and the stage
 * reads as a zoom rather than a lens. k = 0 returns the argument
 * untouched, which is the identity every existing look renders on.
 */
vec2 lensDistort(vec2 uv) {
  if (u_lensDistort == 0.0) return uv;
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  vec2 d = (uv - 0.5) * aspect;
  float r2 = dot(d, d);
  // the corner is the fixed point \u2014 scale the whole polynomial by what
  // it does there, so distortion changes the SHAPE of the mapping and
  // never the framing
  float corner = dot(aspect * 0.5, aspect * 0.5);
  float k = u_lensDistort * 0.6;
  float norm = 1.0 + k * corner;
  return 0.5 + (d * (1.0 + k * r2) / max(norm, 1e-4)) / aspect;
}
`;var lo=a=>`
uniform float u_halftoneSize;    // cell in device px
uniform int   u_halftoneStyle;   // 0 dots \xB7 1 rings \xB7 2 dots+squares \xB7 3 uniform grid
uniform int   u_halftoneStagger;
uniform float u_halftoneDotScale;
uniform int   u_halftoneColor;   // 0 mono \xB7 1 source colors
uniform float u_halftonePaper;   // paper behind the dots (0\u20131)
uniform vec3  u_halftonePaperColor; // the paper stock \u2014 white is print, black is screen glow
uniform float u_halftoneEmboss;
uniform float u_halftoneWind;      // lane streak strength (0\u20131), static
uniform float u_halftoneWindAngle; // radians
uniform float u_halftoneWobble;    // per-mark sway (0\u20131), zero at phase 0
uniform float u_halftoneGlint;     // rare mark pops (0\u20131), zero at phase 0
uniform float u_halftoneJitter;    // per-cell shove (0\u20131), STILL \u2014 survives phase 0
uniform float u_halftoneJitterSeed;
uniform float u_halftoneAngle;     // screen angle, radians \u2014 rotates the LATTICE
uniform float u_halftoneGamma;     // tone curve before the mark is chosen
uniform int   u_halftoneInvert;    // 1 = negative screen
uniform float u_halftoneRatio;     // cell height / width; 1 = square
uniform vec3  u_halftoneInkColor;  // multiplies the mono ink; white = identity

// Ink coverage for one cell: tone drives the mark, area-true so mid
// greys read right (radius grows with sqrt of coverage). No floor \u2014
// a black cell prints nothing, so shadows go clean instead of carrying
// a mesh of specks (the old 0.08 floor stamped every cell).
float halftoneInk(vec2 p, float tone) {
  float aa = 1.0 / max(u_halftoneSize, 4.0);
  float maxR = u_halftoneDotScale * 0.5;
  float radius = maxR * sqrt(clamp(tone, 0.0, 1.0));
  float dist = length(p);

  if (u_halftoneStyle == 1) {
    // rings: an annulus in place of the solid dot
    float inner = max(radius - maxR * 0.22, 0.0);
    return smoothstep(inner - aa, inner + aa, dist)
         * (1.0 - smoothstep(radius - aa, radius + aa, dist));
  }
  if (u_halftoneStyle == 2) {
    // dots + squares: light cells print dots; dark cells flood to a
    // square with a white knockout dot that shrinks as tone deepens
    if (tone >= 0.5) return 1.0 - smoothstep(radius - aa, radius + aa, dist);
    float edge = maxR * 0.92;
    float square = 1.0 - smoothstep(edge - aa, edge + aa, max(abs(p.x), abs(p.y)));
    float knockR = maxR * sqrt(clamp((0.5 - tone) * 2.0, 0.0, 1.0));
    float knock = 1.0 - smoothstep(knockR - aa, knockR + aa, dist);
    return square * (1.0 - knock);
  }
  if (u_halftoneStyle == 3) {
    // uniform grid: fixed-size dots, tone carried by ink color alone
    float r = maxR * 0.92;
    return 1.0 - smoothstep(r - aa, r + aa, dist);
  }
  return 1.0 - smoothstep(radius - aa, radius + aa, dist);
}

vec3 halftoneApply(vec3 base, vec2 uv) {
  float cell = max(u_halftoneSize, 4.0);
  // Everything below works in GRID space \u2014 uv scaled to whole cells \u2014
  // rather than uv. uv is normalised over a frame that isn't square, so
  // rotating it is a shear: cells would turn to rhombi and change size
  // with the angle. Grid space is isotropic by construction, which makes
  // the screen angle a true rotation on any frame.
  //
  // A non-square cell forces the ORDER: the lattice has to be rotated
  // first and scaled per-axis second. Scaling per-axis and then rotating
  // shears \u2014 it turns a rectangle lattice into a parallelogram whose
  // cells change shape with the angle, which is the same trap rotating
  // uv would be. Square cells don't care (a uniform scale commutes with
  // a rotation), so ratio 1 keeps the original expression verbatim and
  // stays bit-identical for every link written before this key existed.
  vec2 cellSize = vec2(cell, cell * max(u_halftoneRatio, 0.05));
  float ca = cos(u_halftoneAngle);
  float sa = sin(u_halftoneAngle);
  mat2 into = mat2(ca, -sa, sa, ca);
  vec2 g = u_halftoneRatio == 1.0
    ? into * (uv * u_resolution / cell)
    : into * (uv * u_resolution) / cellSize;

  // stagger: odd rows shift half a cell, like a printed rosette
  float row = floor(g.y);
  if (u_halftoneStagger == 1 && mod(row, 2.0) == 1.0) g.x += 0.5;

  // wind: whole lanes of cells shove downwind by a per-lane hash, so the
  // screen streaks like print pulled off the press \u2014 a still-frame look,
  // not an animation (the lanes never move once placed)
  if (u_halftoneWind > 0.0) {
    vec2 dir = vec2(cos(u_halftoneWindAngle), sin(u_halftoneWindAngle));
    float lane = floor(dot(g, vec2(-dir.y, dir.x)));
    g += dir * (hash21(vec2(lane, 7.3)) * 2.0 - 1.0) * 1.5 * u_halftoneWind;
  }

  vec2 id = floor(g);
  // The cell centre has to travel BACK out of the rotated frame before
  // it samples the stack below \u2014 otherwise the picture turns with the
  // screen, and you get a tilted photograph under an upright-looking
  // raster instead of a rotated screen over a still photograph.
  mat2 outOf = mat2(ca, sa, -sa, ca);
  vec2 centreUv = u_halftoneRatio == 1.0
    ? (outOf * (id + 0.5)) * cell / u_resolution
    : (outOf * ((id + 0.5) * cellSize)) / u_resolution;
  vec3 cellColor = ${a}(centreUv);
  // every mark swells and settles a few percent on its own staggered
  // beat \u2014 the screen breathes instead of printing dead still
  // gamma sits HERE, not inside halftoneInk: from here it reaches all
  // four styles (style 3 carries tone in the ink colour alone, with a
  // fixed radius) and the mono ink below, which an exponent buried in
  // the radius never would
  float tone = toneFlip(toneGamma(clamp(
    dot(cellColor, vec3(0.2126, 0.7152, 0.0722)) + cellBeat(id + 63.1, 0.03),
    0.0, 1.0), u_halftoneGamma), u_halftoneInvert);
  vec2 p = fract(g) - 0.5;
  // jitter: a STILL shove per cell, so the screen stops being a perfect
  // lattice in exports and thumbnails. Wobble below can only do this
  // while the loop runs \u2014 it cancels at phase 0 by construction, which
  // is why every still this stage has ever produced was dead regular.
  // Same fifth-of-a-cell cap as wobble, and it stacks with it.
  if (u_halftoneJitter > 0.0) {
    p += cellJitter(id, u_halftoneJitterSeed) * u_halftoneJitter * 0.4;
  }
  // wobble: each mark sways inside its cell on its own staggered beat \u2014
  // capped at a fifth of a cell so marks never clip their borders
  p += vec2(cellBeat(id + 3.7, 0.5), cellBeat(id + 9.1, 0.5))
     * u_halftoneWobble * 0.2;
  float ink = halftoneInk(p, tone);

  // mono ink MULTIPLIES the tone ramp \u2014 replacing it with a flat colour
  // would print every mark at one value and kill the modulation the
  // stage exists for. White ink is the exact identity.
  vec3 inkColor = u_halftoneColor == 1 ? cellColor : vec3(tone) * u_halftoneInkColor;
  // emboss: a diagonal bevel across each mark, as if pressed into paper
  if (u_halftoneEmboss > 0.0 && ink > 0.001) {
    float bevel = (p.y - p.x) * 2.2;
    inkColor *= clamp(1.0 + u_halftoneEmboss * bevel * 0.24, 0.58, 1.32);
  }
  // glint: a hash-picked few of the cells flash toward white once per
  // cycle (~12% at full strength) \u2014 the pick hashes on the cell id only,
  // so the chosen cells hold steady across seeds and reloads
  if (u_halftoneGlint > 0.0 && ink > 0.001) {
    float pick = step(1.0 - u_halftoneGlint * 0.12, hash21(id + 91.7));
    float pop = pow(max(cellBeat(id + 17.3, 0.5), 0.0), 3.0);
    inkColor = mix(inkColor, vec3(1.0), pick * pop);
  }
  vec3 paper = mix(base, u_halftonePaperColor, u_halftonePaper);
  return mix(paper, inkColor, clamp(ink, 0.0, 1.0));
}
`;var uo=(a,i=!1)=>`
uniform sampler2D u_asciiAtlas;  // glyph ramp strip, dark -> dense
uniform float u_asciiChars;      // glyphs in the atlas
uniform float u_asciiSize;       // cell width in device px
uniform float u_asciiRatio;      // cell height / width
uniform int   u_asciiStyle;      // 0 chars \xB7 1 blocks \xB7 2 dots \xB7 3 lines \xB7 4 cross \xB7 5 diagonal \xB7 6 symbols
uniform int   u_asciiColor;      // 0 mono \xB7 1 source colors
uniform float u_asciiBackground; // gap fill toward black (0\u20131)
uniform float u_asciiExposure;
uniform float u_asciiFill;       // glyph weight
uniform float u_asciiDensity;    // tonal levels
uniform float u_asciiScatter;    // cell sample jitter
uniform float u_asciiGap;        // grout each side, fraction of a cell
uniform float u_asciiAngle;      // screen angle, radians \u2014 rotates the LATTICE
uniform float u_asciiThreshold;  // tone bias before the glyph is chosen; 0.5 = neutral
uniform float u_asciiGamma;      // tone curve before the glyph is chosen
uniform int   u_asciiInvert;
uniform vec3  u_asciiInkColor;   // multiplies the mono ink; white = identity
uniform vec3  u_asciiPaperColor; // the gap fill \u2014 Normal blend only
uniform float u_asciiOpacity;

// The glyph lattice in its own rotated frame. Rotation happens in PIXEL
// space about the frame centre \u2014 pixels are square, so it stays a true
// rotation even though an ASCII cell deliberately isn't (asciiRatio).
// At angle 0 every one of these reduces to the plain uv/cellSize math.
vec2 asciiGrid(vec2 uv, vec2 cellPx) {
  vec2 h = u_resolution * 0.5;
  float ca = cos(u_asciiAngle);
  float sa = sin(u_asciiAngle);
  return (mat2(ca, -sa, sa, ca) * (uv * u_resolution - h) + h) / cellPx;
}

/** A cell's centre, back out of the rotated frame and into uv. */
vec2 asciiCentre(vec2 id, vec2 cellPx) {
  vec2 h = u_resolution * 0.5;
  float ca = cos(u_asciiAngle);
  float sa = sin(u_asciiAngle);
  return (mat2(ca, sa, -sa, ca) * ((id + 0.5) * cellPx - h) + h) / u_resolution;
}
uniform int   u_asciiBlend;      // 0 normal \xB7 1 screen \xB7 2 add

// Glyph coverage at p (cell space 0..1) for the cell's quantized tone.
float asciiGlyph(vec2 p, float tone) {
  if (u_asciiStyle == 0) {
    // atlas strip: tone picks the glyph, dark -> sparse, bright -> dense
    float idx = clamp(floor(tone * (u_asciiChars - 1.0)), 0.0, u_asciiChars - 1.0);
    return texture(u_asciiAtlas, vec2((idx + p.x) / u_asciiChars, p.y)).r;
  }
  if (u_asciiStyle == 1) {
    // blocks: a centered square grows with the tone \u2014 a speck in the
    // shadows, nearly the whole cell in the highlights, with a grout
    // line keeping the grid legible. (Its first life was
    // step(0.5, tone): whole cells or nothing, which box-averaged
    // bright scenes into near-invisibility and blanked dark ones.)
    float h = tone * 0.48;
    vec2 q = abs(p - 0.5);
    return 1.0 - smoothstep(h - 0.02, h, max(q.x, q.y));
  }
  if (u_asciiStyle == 2) {                                     // dots
    float r = tone * 0.48;
    return 1.0 - smoothstep(r - 0.02, r, length(p - 0.5));
  }
  if (u_asciiStyle == 3) return step(fract(p.y * 4.0), tone); // scanlines
  if (u_asciiStyle == 4) {                                     // cross
    float t = (1.0 - tone) * 0.45;
    return max(step(abs(p.y - 0.5), t), step(abs(p.x - 0.5), t * 0.75));
  }
  if (u_asciiStyle == 6) {
    // symbols: the tone band picks a vector mark \u2014 dot, bar, cross,
    // star \u2014 so the raster reads as notation without depending on a font
    vec2 q = p - 0.5;
    if (tone < 0.25) {
      float r = 0.10 + tone * 0.5;
      return 1.0 - smoothstep(r - 0.03, r, length(q));
    }
    if (tone < 0.5)
      return step(abs(q.y), 0.06 + tone * 0.2) * step(abs(q.x), 0.42);
    float t = 0.04 + tone * 0.1;
    float straight = max(step(abs(q.y), t) * step(abs(q.x), 0.42),
                         step(abs(q.x), t) * step(abs(q.y), 0.42));
    if (tone < 0.75) return straight;
    vec2 d = abs(vec2(q.x + q.y, q.x - q.y)) * 0.7071;
    float diag = max(step(d.y, t) * step(d.x, 0.42),
                     step(d.x, t) * step(d.y, 0.42));
    return max(straight, diag); // eight-point star in the brightest band
  }
  return step(fract((p.x + p.y) * 3.0), tone);                 // diagonal
}

// One cell's ink at cell-space point p: sample the smooth chain at the
// cell's (jittered) centre, quantize tone to the density ladder \u2014 this
// is what picks the glyph. Each cell's tone flutters within about one
// ladder step (staggered per cell), so a sparse scatter of glyphs ticks
// to a neighbour and back \u2014 the raster reads alive without the whole
// picture churning. Only the glyph choice flutters; ink stays on lum.
void asciiCellInk(vec2 id, vec2 p, vec2 cellSize, vec2 centreUv, out float glyph, out vec3 fg) {
  // scatter: jitter each cell's sample point for a looser, organic grid
  vec2 jitter = (vec2(hash21(id + 11.3), hash21(id + 47.7)) - 0.5)
              * u_asciiScatter * cellSize;
  vec3 cellColor = ${a}(centreUv + jitter);
  float lum = toneGamma(
    clamp(dot(cellColor, vec3(0.2126, 0.7152, 0.0722)), 0.0, 1.0), u_asciiGamma);
  lum = toneFlip(lum, u_asciiInvert);
  float levels = max(u_asciiDensity, 2.0);
  // threshold: an additive tone lift riding in alongside the flutter,
  // dither's trick for dither's reason \u2014 at 0.5 the lift is an exact
  // 0.0, so a pre-threshold link picks the same glyph in every cell.
  // It joins the chain HERE, after the gamma and the invert and inside
  // the clamp that already keeps the ladder in range, and deliberately
  // never reaches fg: this stage keeps the tone that chooses a mark
  // apart from the tone that inks it, and exposure owns the second.
  // Note gamma does NOT hold that line \u2014 it bends lum itself, upstream
  // of the split, so in mono mode it re-inks too. Landing the lift on
  // flutter instead of on lum is what keeps this one clean.
  float lift = u_asciiThreshold - 0.5;
  float flutter = clamp(lum + lift + cellBeat(id + 7.3, 0.6 / levels), 0.0, 1.0);
  float tone = clamp(floor(flutter * levels) / (levels - 1.0), 0.0, 1.0);
  // gap: squeeze the whole mark into the middle of its cell and print
  // nothing outside, so neighbours stop touching and the grid reads as
  // tiles. The early-out isn't cosmetic \u2014 style 0 samples a glyph strip,
  // and an out-of-range p would pull in the neighbouring glyph's pixels.
  vec2 pg = p;
  float span = 1.0 - 2.0 * clamp(u_asciiGap, 0.0, 0.45);
  if (span < 1.0) {
    pg = (p - 0.5) / span + 0.5;
    if (pg.x < 0.0 || pg.x > 1.0 || pg.y < 0.0 || pg.y > 1.0) {
      glyph = 0.0;
      fg = vec3(0.0);
      return;
    }
  }
  glyph = clamp(asciiGlyph(pg, tone) * u_asciiFill, 0.0, 1.0);
  // ink follows the source tone; exposure is a real brightness control
  fg = clamp((u_asciiColor == 1 ? cellColor : vec3(lum) * u_asciiInkColor)
             * u_asciiExposure, 0.0, 1.0);
}

vec3 asciiBlendInk(vec3 base, vec3 fg, float glyph) {
  vec3 ink = fg * glyph;
  vec3 blended;
  if (u_asciiBlend == 1) {
    // screen/add composite only the glyph ink, so gaps leave the scene alone
    blended = 1.0 - (1.0 - base) * (1.0 - ink);   // screen: glyphs glow
  } else if (u_asciiBlend == 2) {
    blended = min(base + ink, vec3(1.0));         // add
  } else {
    // normal: gaps sink toward black by the background amount
    blended = mix(mix(base, u_asciiPaperColor, u_asciiBackground), fg, glyph);
  }
  return mix(base, blended, u_asciiOpacity);
}
${i?`
// The spring-scatter raster: every glyph is a particle. For this pixel,
// scan the cell neighbourhood and ask which cell's glyph \u2014 translated
// rigidly by that cell's OWN flight vector \u2014 inks it. Farthest-flung
// wins where flights overlap; pixels no glyph reaches fall through to
// the stage's background, so a repelled crowd leaves a true gap behind.
vec3 asciiApply(vec3 base, vec2 uv) {
  // whole cells only: the grid stretches a hair so rows and columns tile
  float cellW = max(u_asciiSize, 4.0);
  vec2 cells = max(floor(u_resolution / vec2(cellW, cellW * u_asciiRatio)), 4.0);
  vec2 cellSize = 1.0 / cells;
  vec2 cellPx = u_resolution / cells;
  if (u_pointerAmount <= 0.0) {
    // resting look \u2014 identical to the plain raster (exports, stills,
    // and the settled field all land exactly here)
    vec2 g = asciiGrid(uv, cellPx);
    vec2 id = floor(g);
    float glyph; vec3 fg;
    asciiCellInk(id, fract(g), cellSize, asciiCentre(id, cellPx), glyph, fg);
    return asciiBlendInk(base, fg, glyph);
  }
  vec2 id0 = floor(asciiGrid(uv, cellPx));
  float bestPr = -1.0;
  float bestGlyph = 0.0;
  vec3 bestFg = vec3(0.0);
  for (int dy = -SPRING_SCAN; dy <= SPRING_SCAN; dy++) {
    for (int dx = -SPRING_SCAN; dx <= SPRING_SCAN; dx++) {
      vec2 id = id0 + vec2(float(dx), float(dy));
      vec2 centre = asciiCentre(id, cellPx);
      // a cell is in play when its CENTRE lies in the frame. For integer
      // ids at angle 0 that is exactly the old id-in-[0,cells) test, and
      // it keeps meaning the same thing once the lattice turns \u2014 where
      // an id range no longer would.
      if (any(lessThan(centre, vec2(0.0))) || any(greaterThan(centre, vec2(1.0)))) continue;
      vec2 flight = springCellThrow(id, cellSize, centre);
      // does cell id's box, moved by its flight, cover this pixel? The
      // flight is a screen-space shove, so undo it in uv and only then
      // step into the rotated lattice.
      vec2 p = asciiGrid(uv - flight, cellPx) - id;
      if (any(lessThan(p, vec2(0.0))) || any(greaterThanEqual(p, vec2(1.0)))) continue;
      float pr = dot(flight, flight);
      if (pr <= bestPr) continue; // an inked winner already flies higher
      float glyph; vec3 fg;
      asciiCellInk(id, p, cellSize, centre, glyph, fg);
      // only INK occludes \u2014 a flying glyph's empty box must not blank
      // out a resting glyph underneath it
      if (glyph < 0.004) continue;
      bestPr = pr;
      bestGlyph = glyph;
      bestFg = fg;
    }
  }
  // no winner = glyph 0 = the stage's own background: the gap
  return asciiBlendInk(base, bestFg, bestGlyph);
}
`:`
vec3 asciiApply(vec3 base, vec2 uv) {
  // whole cells only: the grid stretches a hair so rows and columns tile
  float cellW = max(u_asciiSize, 4.0);
  vec2 cells = max(floor(u_resolution / vec2(cellW, cellW * u_asciiRatio)), 4.0);
  vec2 cellSize = 1.0 / cells;
  vec2 cellPx = u_resolution / cells;
  vec2 g = asciiGrid(uv, cellPx);
  vec2 id = floor(g);
  float glyph; vec3 fg;
  asciiCellInk(id, fract(g), cellSize, asciiCentre(id, cellPx), glyph, fg);
  return asciiBlendInk(base, fg, glyph);
}
`}`;var co=`
uniform vec2  u_pointer;       // eased cursor, canvas uv (gl orientation)
uniform float u_pointerAmount;
uniform float u_pointerSize;   // reaction radius, fraction of the frame
uniform float u_pointerFlip;   // 1 = run the reaction backwards (P13)

vec2 pointerMap(vec2 uv) {
  if (u_pointerAmount <= 0.0) return uv;
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  vec2 d = (uv - u_pointer) * aspect;
  float r = length(d) / max(u_pointerSize, 0.05);
  // gaussian lens: pull samples toward the cursor, magnifying under it \u2014
  // or shove them away from it, which pinches instead (P13). One sign,
  // and multiplying by 1 is exact, so the bulge is untouched.
  float s = u_pointerFlip == 1.0 ? -1.0 : 1.0;
  return uv - (d / aspect) * exp(-r * r) * u_pointerAmount * 0.35 * s;
}
`;var ho=`
uniform vec2  u_pointer;
uniform float u_pointerAmount;
uniform float u_pointerSize;   // unused in parallax; kept for one upload path
uniform float u_pointerFlip;

vec2 pointerMap(vec2 uv) {
  // slight overscan hides the edge the drift would otherwise smear
  float lean = 0.05 * u_pointerAmount;
  // the flip reverses which way the field leans \u2014 toward the cursor
  // rather than away \u2014 and deliberately leaves the overscan alone,
  // since that's there to hide an edge, not to express a direction
  float s = u_pointerFlip == 1.0 ? -1.0 : 1.0;
  return (uv - 0.5) * (1.0 - lean) + 0.5 - (u_pointer - 0.5) * lean * s;
}
`;var fo=`
uniform vec2  u_pointer;
uniform float u_pointerAmount;
uniform float u_pointerSize;
uniform float u_pointerFlip;

vec2 pointerMap(vec2 uv) {
  if (u_pointerAmount <= 0.0) return uv;
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  vec2 d = (uv - u_pointer) * aspect;
  float r = length(d) / max(u_pointerSize, 0.05);
  // gaussian twist: the print stirs around the cursor like wet ink \u2014
  // ~140\xB0 at the core at full strength, unwinding as the hover eases
  // out. The flip stirs the other way (P13).
  float ang = exp(-r * r) * u_pointerAmount * 2.4
            * (u_pointerFlip == 1.0 ? -1.0 : 1.0);
  float s = sin(ang);
  float c = cos(ang);
  return u_pointer + (mat2(c, -s, s, c) * d) / aspect;
}
`;var po=`
uniform sampler2D u_trail;     // the spring field: disp.x packed 16-bit in RG, disp.y in BA
uniform vec2  u_pointer;       // unused in spring; kept for one upload path
uniform float u_pointerAmount;
uniform float u_pointerSize;   // repel radius \u2014 read by the physics pass, not here

uniform vec2  u_markCell;      // px cell of the raster stage below "m"; 0 = none
uniform float u_markAngle;     // that lattice's SCREEN ANGLE, radians; 0 = upright

// 16-bit fixed-point unpack; linear in both bytes, so the field's
// LINEAR filtering commutes with it and sampling stays smooth
vec2 springUnpack(vec4 t) {
  vec2 v = vec2(t.r * 65280.0 + t.g * 255.0, t.b * 65280.0 + t.a * 255.0) / 65535.0;
  vec2 d = v * 2.0 - 1.0;
  // a settled field reads a hair off exact zero (quantization); a
  // sub-pixel deadband lands the print back on the bit-exact rest frame
  return d * step(1e-4, dot(d, d) * 1e4);
}

// Where a fragment sits on the raster's lattice, in cell units. Mirrors
// halftoneApply's own construction, ORDER INCLUDED: rotate in PIXEL
// space, divide per axis second. Scaling first and rotating second
// shears a non-square cell into a parallelogram \u2014 the same trap
// halftone documents at its own grid, met here for the same reason.
vec2 springGrid(vec2 uv, vec2 cellUv, mat2 into) {
  return u_markAngle == 0.0 ? uv / cellUv : (into * (uv * u_resolution)) / u_markCell;
}

// A cell's home centre, back in uv \u2014 the inverse trip, so the field is
// read where the cell actually sits on screen rather than where the
// rotated lattice indexes it.
vec2 springHome(vec2 id, vec2 cellUv, mat2 outOf) {
  return u_markAngle == 0.0
    ? (id + 0.5) * cellUv
    : (outOf * ((id + 0.5) * u_markCell)) / u_resolution;
}

// One cell's throw: the spring field's displacement at its home centre,
// with a mild per-cell fingerprint so neighbours fan apart instead of
// sliding as one sheet \u2014 mild, because the physics itself already
// differentiates cells by their distance to the cursor. The throw is a
// SCREEN-space vector and stays one: a mark flies where the cursor
// shoved it, not along its lattice's axes.
vec2 springThrow(vec2 id, vec2 cellUv, mat2 outOf) {
  vec2 center = clamp(springHome(id, cellUv, outOf), 0.0, 1.0);
  vec2 v = springUnpack(texture(u_trail, center));
  float h = hash21(id + 3.7);
  vec2 d = v * (0.8 + 0.4 * h) + vec2(-v.y, v.x) * (h - 0.5) * 0.3;
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  return d / aspect;
}

vec2 pointerMap(vec2 uv) {
  if (u_pointerAmount <= 0.0) return uv;
  if (u_markCell.x < 0.5) {
    // nothing gridded below the stage \u2014 the print flexes like a sheet
    // of rubber: pushed aside under the cursor, jiggling back after
    vec2 v = springUnpack(texture(u_trail, clamp(uv, 0.0, 1.0)));
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
    return uv - v / aspect;
  }
  // marks fly whole on the raster's own grid: gather \u2014 find the source
  // cell whose mark lands here, then move by ITS throw
  vec2 cellUv = u_markCell / u_resolution;
  float ca = cos(u_markAngle);
  float sa = sin(u_markAngle);
  mat2 into = mat2(ca, -sa, sa, ca);
  mat2 outOf = mat2(ca, sa, -sa, ca);
  vec2 c0 = floor(springGrid(uv, cellUv, into));
  vec2 c1 = floor(springGrid(uv - springThrow(c0, cellUv, outOf), cellUv, into));
  return uv - springThrow(c1, cellUv, outOf);
}
`;var mo=`
uniform sampler2D u_trail;     // the spring field: disp.x packed 16-bit in RG, disp.y in BA
uniform float u_pointerAmount;

// how far a glyph can fly, in cells \u2014 must stay inside the scan window
const int   SPRING_SCAN  = 4;
const float SPRING_REACH = 3.0;

// 16-bit fixed-point unpack; linear in both bytes, so the field's
// LINEAR filtering commutes with it and sampling stays smooth. The
// sub-pixel deadband lands the settled print back on the bit-exact
// rest frame.
vec2 springUnpack(vec4 t) {
  vec2 v = vec2(t.r * 65280.0 + t.g * 255.0, t.b * 65280.0 + t.a * 255.0) / 65535.0;
  vec2 d = v * 2.0 - 1.0;
  return d * step(1e-4, dot(d, d) * 1e4);
}

// One cell's flight vector in uv units: the field at its home centre
// with a mild per-cell fingerprint, soft-clamped (tanh saturation) to
// the scan reach so a violent shove crowds the rim instead of escaping
// the neighbourhood scan or flattening into a hard ring.
vec2 springCellThrow(vec2 id, vec2 cellSize, vec2 centreUv) {
  vec2 center = clamp(centreUv, 0.0, 1.0);
  vec2 v = springUnpack(texture(u_trail, center));
  float h = hash21(id + 3.7);
  vec2 d = v * (0.85 + 0.3 * h) + vec2(-v.y, v.x) * (h - 0.5) * 0.2;
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  vec2 t = (d / aspect) / cellSize;   // cell units
  float len = max(abs(t.x), abs(t.y));
  if (len > 1e-5) t *= SPRING_REACH * tanh(len / SPRING_REACH) / len;
  return t * cellSize;
}
`;var go=`#version 300 es
precision highp float;

uniform sampler2D u_src;
uniform vec2  u_outRes;   // this pass's own target size
uniform vec2  u_step;     // one tap, in source uv \u2014 (x,0) then (0,y)
uniform float u_sigma;    // in taps, so the weights are spacing-independent

out vec4 outColor;

const int TAPS = 12;

void main() {
  vec2 uv = gl_FragCoord.xy / u_outRes;
  float s2 = 2.0 * u_sigma * u_sigma;
  // RGBA, not RGB. The image layer's texture is stored PREMULTIPLIED so
  // a transparent PNG's black never bleeds into its own edges, and
  // premultiplied is exactly the form you may blur componentwise \u2014 blur
  // straight alpha and the edge pixels darken toward black. The scene
  // buffer is opaque, so carrying alpha costs it nothing.
  vec4 acc = vec4(0.0);
  float wsum = 0.0;
  for (int i = -TAPS; i <= TAPS; i++) {
    float x = float(i);
    float w = exp(-(x * x) / s2);
    // clamped sampling, so a tap reaching past the frame extends the
    // border pixel instead of wrapping the far side of the picture in
    acc += texture(u_src, uv + u_step * x) * w;
    wsum += w;
  }
  outColor = acc / wsum;
}
`;var vo=`#version 300 es
precision highp float;

layout(location = 0) out vec4 outDisp;
layout(location = 1) out vec4 outVel;

uniform sampler2D u_prevDisp;
uniform sampler2D u_prevVel;
uniform vec2  u_fieldRes;   // field buffer px
uniform float u_aspect;     // canvas w/h \u2014 distance math in canvas space
uniform vec2  u_now;        // eased cursor, canvas uv
uniform float u_paint;      // hover activation 0..1 \u2014 gates the repel force
uniform float u_radius;     // influence bubble, fraction of the frame
uniform float u_amount;     // Strength \u2014 how violently marks flee
uniform float u_stiff;      // Stiffness 0 loose/bouncy \xB7 1 snappy
uniform float u_damping;    // Damping 0 rings on \xB7 1 dead stop; <0 = welded to u_stiff
uniform float u_flip;       // 1 = gather instead of scatter (P13)
uniform float u_frames;     // elapsed time in 60fps-frame units

const float DISP_RANGE = 0.5;   // uv, aspect-corrected space
const float VEL_RANGE  = 0.06;  // uv per 60fps frame

vec2 unpack16(vec4 t) {
  vec2 v = vec2(t.r * 65280.0 + t.g * 255.0, t.b * 65280.0 + t.a * 255.0) / 65535.0;
  return v * 2.0 - 1.0;
}

vec4 pack16(vec2 v) {
  vec2 s = floor(clamp(v * 0.5 + 0.5, 0.0, 1.0) * 65535.0 + 0.5);
  vec2 hi = floor(s / 256.0);
  vec2 lo = s - hi * 256.0;
  return vec4(hi.x, lo.x, hi.y, lo.y) / 255.0;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_fieldRes;
  vec2 aspect = vec2(u_aspect, 1.0);
  vec2 home = uv * aspect;
  vec2 m = u_now * aspect;

  vec2 disp = unpack16(texture(u_prevDisp, uv)) * DISP_RANGE;
  vec2 vel  = unpack16(texture(u_prevVel, uv)) * VEL_RANGE;

  // Stiffness sweeps the spring/damping pair together: low = lazy
  // return with a fat overshoot, high = tight snap-back
  float spring = mix(0.02, 0.14, u_stiff);
  // \u2026unless damping has been split out of it (P13). The negative
  // sentinel keeps the pair welded exactly as it always was, rather
  // than a second 0\u20131 knob whose bottom end would be indistinguishable
  // from a link that never asked. Its range is wider than the welded
  // one at both ends \u2014 that's the point of splitting it.
  float damp   = u_damping < 0.0 ? mix(0.93, 0.80, u_stiff)
                                 : mix(0.985, 0.70, u_damping);
  float radius = max(u_radius, 0.05) * 0.6;
  // polarity: positive throws marks off the cursor, negative draws them
  // onto it. Multiplying by 1 is exact, so scatter is untouched.
  float force  = u_amount * u_paint * 0.012 * (u_flip == 1.0 ? -1.0 : 1.0);

  // substep so a dropped frame integrates the same path it would have
  // taken at 60fps instead of one big unstable Euler jump
  float n = clamp(ceil(u_frames), 1.0, 4.0);
  float h = u_frames / n;
  for (float i = 0.0; i < n; i++) {
    vec2 d = home + disp - m;
    float dist = length(d);
    float r = dist / radius;
    if (r < 1.0 && dist > 1e-4) {
      if (u_flip == 1.0) {
        // Gathering, the force is strongest exactly where its direction
        // is least defined \u2014 on the cursor itself \u2014 so a mark that
        // arrives buzzes back and forth across the singularity instead
        // of arriving. Fading it out over the last 15% of the radius
        // lets the pile actually settle. Scatter never takes this
        // branch, and keeps its expression verbatim: the suite pins its
        // exact rest frame.
        vel += (d / dist) * (1.0 - r) * force * smoothstep(0.0, 0.15, r) * h;
      } else {
        vel += (d / dist) * (1.0 - r) * force * h;
      }
    }
    vel += -disp * spring * h;
    vel *= pow(damp, h);
    disp += vel * h;
  }

  // parked and drained: snap to the exact packed zero so the quantized
  // field can't stall a step away from home and shimmer forever
  if (dot(disp, disp) < 2e-8 && dot(vel, vel) < 2e-10) {
    disp = vec2(0.0);
    vel = vec2(0.0);
  }

  outDisp = pack16(clamp(disp / DISP_RANGE, -1.0, 1.0));
  outVel  = pack16(clamp(vel / VEL_RANGE, -1.0, 1.0));
}
`;var _o=`
uniform float u_paperAmount;
uniform vec3  u_paperTint;     // the stock (P10); '' resolves to the pre-P10 warm white
uniform float u_paperFibre;    // stock coarseness; 1 = pre-P10
uniform float u_paperVignette; // corner falloff against the pre-P10 one; 1 = identity

// Paper stock: fiber, stain, and wash octaves multiplied toward the
// stock colour, plus a corner vignette. Sampled in CSS px (fragPx /
// u_pixelScale) so a 2K/4K export carries the same sheet, just sharper.
// No phase or drift term \u2014 fibers must not flicker, and stills stay
// reproducible for free. (Lived inside the Grain stage until
// 2026-07-13; v<=4 links with gp>0 migrate to this stage on decode.)
vec3 paperApply(vec3 color, vec2 fragPx) {
  if (u_paperAmount <= 0.0) return color;
  // Fibre DIVIDES, so a bigger number is a coarser stock \u2014 the three
  // octaves move together, which is the difference between bond and
  // kraft rather than between two textures.
  vec2 p = fragPx / max(u_pixelScale, 1e-3) / max(u_paperFibre, 0.05);
  float tex = vnoise(p * 0.45 + u_seed) * 0.2
            + vnoise(p * 0.12 + u_seed * 1.7 + 31.4) * 0.3
            + vnoise(p * 0.02 + u_seed * 3.1 + 77.7) * 0.5;
  color *= mix(vec3(1.0), u_paperTint * (0.82 + 0.36 * tex), u_paperAmount);
  vec2 uv = fragPx / u_resolution;
  float vig = smoothstep(0.55, 1.45, length((uv - 0.5) * 2.0));
  // The shade stays literal and does NOT follow the stock: it multiplies
  // colour that has already been through the tint above, so it darkens
  // whatever stock you picked instead of replacing it. A second colour
  // picker on a finish stage would be a knob nobody asked for.
  return mix(color, color * vec3(0.42, 0.33, 0.24),
             vig * u_paperAmount * 0.5 * u_paperVignette);
}
`;var bo=`
uniform float u_grain;
uniform float u_grainSize;

// fragPx keeps the speckle screen-locked at this stage's depth; warps
// stacked above it are free to smear it, warps below never touch it
vec3 grainApply(vec3 color, vec2 fragPx) {
  if (u_grain <= 0.0) return color;
  // one fixed speckle field carried around the drift orbit: the grain
  // wanders instead of re-rolling every frame, so it can't flicker, and
  // the orbit closes with the cycle
  vec2 id = floor((fragPx + drift(48.0)) / max(u_grainSize, 0.5));
  // wrap before hashing \u2014 hash21 loses fract precision once its input
  // grows past a few thousand and collapses into scan-line bands
  float g = hash21(mod(id + u_seed, 256.0));
  return color + (g - 0.5) * u_grain;
}
`;var xo=`
uniform float u_contourLevels;
uniform float u_contourWeight;   // line half-width in device px
uniform float u_contourDash;     // 0..1 dash amount
uniform float u_contourGlow;     // 0..1 halo accent
uniform int   u_contourColor;    // 0 mono \xB7 1 source colors
uniform float u_contourPaper;    // dark paper behind the lines (0\u20131)
uniform vec3  u_contourInkColor;   // the mono line colour
uniform vec3  u_contourPaperColor; // the stock behind the lines

// below: the crisp sample (ink and paper read from it) \xB7 smoothBelow:
// a 5-tap average of the same chain. The scene texture is 8-bit, so a
// single sample's tone is a staircase \u2014 iso lines cut along the steps
// and shred; the supersample rebuilds the sub-LSB field they need.
vec3 contourApply(vec3 below, vec3 smoothBelow, vec2 uv) {
  float tone = dot(smoothBelow, vec3(0.2126, 0.7152, 0.0722));
  float f = tone * u_contourLevels;              // iso field in band units
  float g = fract(f);
  float d = min(g, 1.0 - g);                     // distance to the nearest line
  // fwidth turns band units into true screen px; the clamp keeps flat
  // fields (pixelate blocks below) from dividing toward zero \u2014 lines
  // then collapse onto block seams, which is honest stack semantics
  float w = max(fwidth(f), 1e-4);
  float px = d / w;
  float line = 1.0 - smoothstep(u_contourWeight - 0.75, u_contourWeight + 0.75, px);

  if (u_contourDash > 0.0) {
    // dash along the contour's own direction; the crawl advances three
    // whole periods per cycle, so it closes seamlessly and the still at
    // phase 0 is the dashed line at rest
    vec2 grad = vec2(dFdx(f), dFdy(f));
    vec2 tang = normalize(vec2(-grad.y, grad.x) + 1e-6);
    float s = dot(uv * u_resolution, tang) / max(u_contourWeight * 6.0, 4.0)
            + u_phase * 3.0;
    line *= step(0.6 * u_contourDash, fract(s));
  }

  // source ink rides brighter than the field it came from \u2014 the paper
  // dims what's beneath, so raw source lines would sink into their own
  // background
  // contour's mono ink IS a flat constant already, so here the picker
  // genuinely replaces rather than multiplies
  vec3 ink = u_contourColor == 1 ? min(below * 1.35 + 0.08, vec3(1.0)) : u_contourInkColor;
  vec3 paper = mix(below, u_contourPaperColor, u_contourPaper);
  vec3 outc = mix(paper, ink, clamp(line, 0.0, 1.0));
  if (u_contourGlow > 0.0) {
    // a soft halo hugging each line, screen-blended so it never clips
    float halo = exp(-px * px / max(u_contourWeight * u_contourWeight * 24.0, 1.0));
    outc = 1.0 - (1.0 - outc) * (1.0 - ink * halo * u_contourGlow * 0.6);
  }
  return outc;
}
`;var wo=a=>`
uniform float u_toneGeoSize;    // cell in device px
uniform float u_toneGeoLow;
uniform float u_toneGeoHigh;
uniform int   u_toneGeoInvert;  // 1 = shadows take the bars, highlights the rules
uniform float u_toneGeoRules;   // rules per cell in the shadow band
uniform float u_toneGeoCross;   // radians \u2014 second rule set; 0 = none
uniform float u_toneGeoAngle;   // radians \u2014 the MARK's lean inside its cell
uniform float u_toneGeoGrid;    // radians \u2014 the CELL LATTICE's own rotation
uniform float u_toneGeoJitter;  // per-cell shove (0\u20131), STILL \u2014 survives phase 0
uniform float u_toneGeoJitterSeed;
uniform vec3  u_toneGeoInkColor;   // multiplies the mono ink; white = identity
uniform vec3  u_toneGeoPaperColor; // the stock behind the marks
uniform float u_toneGeoWeight;
uniform int   u_toneGeoColor;   // 0 mono \xB7 1 source colors
uniform float u_toneGeoPaper;   // white paper behind the marks (0\u20131)

// One mark per cell by tone band: thin parallel rules carry the
// shadows, hollow rings the midtones, heavy bars the highlights.
float toneGeoMark(vec2 p, float tone) {
  float cs = cos(u_toneGeoAngle);
  float sn = sin(u_toneGeoAngle);
  vec2 q = mat2(cs, -sn, sn, cs) * p;
  float aa = 1.5 / max(u_toneGeoSize, 8.0);
  float lo = min(u_toneGeoLow, u_toneGeoHigh);
  float hi = max(u_toneGeoLow, u_toneGeoHigh);
  if (tone < lo) {
    // shadows: a set of thin rules per cell, and optionally a second set
    // laid across it \u2014 the thing a stage called Hatch could not do
    float n = max(u_toneGeoRules, 1.0);
    float w = 0.02 + 0.05 * u_toneGeoWeight;
    float d = abs(fract(q.y * n + 0.5) - 0.5) / n;
    float ink = 1.0 - smoothstep(w - aa, w + aa, d);
    // 0 is off AND "a second set at no offset", and the two agree: the
    // union of a set of rules with itself is that same set, so the
    // default is a true identity rather than a special case
    if (u_toneGeoCross > 0.0) {
      float cc = cos(u_toneGeoCross);
      float sc = sin(u_toneGeoCross);
      vec2 q2 = mat2(cc, -sc, sc, cc) * q;
      float d2 = abs(fract(q2.y * n + 0.5) - 0.5) / n;
      // union, not sum: where the two sets cross, the ink is ink, not
      // twice as dark a knot
      ink = max(ink, 1.0 - smoothstep(w - aa, w + aa, d2));
    }
    return ink;
  }
  if (tone < hi) {
    // midtones: a hollow ring \u2014 rotation-invariant on purpose, so the
    // angle reads on the rules and bars against steady circles
    float ring = abs(length(p) - 0.30);
    float w = 0.03 + 0.07 * u_toneGeoWeight;
    return 1.0 - smoothstep(w - aa, w + aa, ring);
  }
  // highlights: one heavy bar
  vec2 b = vec2(0.42, 0.10 + 0.18 * u_toneGeoWeight);
  vec2 dd = abs(q) - b;
  return 1.0 - smoothstep(-aa, aa, max(dd.x, dd.y));
}

vec3 toneGeoApply(vec3 base, vec2 uv) {
  float cell = max(u_toneGeoSize, 8.0);
  // grid space \u2014 uv scaled to whole cells, and isotropic because the
  // cell is square in pixels. Rotating uv itself would shear the
  // lattice on any frame that isn't square. (u_toneGeoAngle turns the
  // MARK inside its cell; this turns the cell grid underneath it.)
  vec2 g = uv * u_resolution / cell;
  float ca = cos(u_toneGeoGrid);
  float sa = sin(u_toneGeoGrid);
  g = mat2(ca, -sa, sa, ca) * g;
  vec2 id = floor(g);
  // the cell centre rotates back out before it samples the stack below,
  // so the grid turns over a still picture instead of turning it too
  vec2 centre = mat2(ca, sa, -sa, ca) * (id + 0.5);
  vec3 cellColor = ${a}(centre * cell / u_resolution);
  float tone = toneFlip(
    clamp(dot(cellColor, vec3(0.2126, 0.7152, 0.0722)), 0.0, 1.0),
    u_toneGeoInvert);
  // marks breathe a few percent on a staggered beat \u2014 scale, never
  // tone: the mark TYPE is discontinuous in tone, so a tone beat would
  // pop marks across the band thresholds
  vec2 p = (fract(g) - 0.5) * (1.0 - cellBeat(id + 41.3, 0.04));
  // jitter (P6): a still per-cell shove, so a hatched still stops
  // reading as machine-ruled. Capped at a TENTH of a cell, half what
  // halftone allows itself \u2014 hatch's highlight bar is 0.42 of a cell
  // wide against a dot's small radius, so the same shove that loosens a
  // screen would crop a bar against its own cell edge.
  if (u_toneGeoJitter > 0.0) {
    p += cellJitter(id, u_toneGeoJitterSeed) * u_toneGeoJitter * 0.2;
  }
  float ink = toneGeoMark(p, tone);
  vec3 inkColor = u_toneGeoColor == 1 ? cellColor : vec3(tone) * u_toneGeoInkColor;
  vec3 paper = mix(base, u_toneGeoPaperColor, u_toneGeoPaper);
  return mix(paper, inkColor, clamp(ink, 0.0, 1.0));
}
`;function ut(a,i,n,e,f=!1){switch(n){case`m`:return e===5&&f?`vec3 ${a}(vec2 uv) { return ${i}(uv); }`:e>=2&&e<=5?`vec3 ${a}(vec2 uv) { return ${i}(pointerMap(uv)); }`:`vec3 ${a}(vec2 uv) { return ${i}(uv); }`;case`w`:return`vec3 ${a}(vec2 uv) { return ${i}(waveMap(uv)); }`;case`p`:return`vec3 ${a}(vec2 uv) {
  vec2 cell;
  vec3 color = ${i}(pixelateMap(uv, cell));
  return mosaicGrout(color, cell);
}`;case`g`:return`vec3 ${a}(vec2 uv) {
  vec2 shade;
  vec3 color = ${i}(glassMap(uv, shade));
  color = mix(color, vec3(1.0), shade.x); // seam ridges lift to white
  color *= 1.0 - shade.y;                 // pane shading falls across each cell
  return color;
}`;case`l`:return`vec3 ${a}(vec2 uv) { return applyLight(${i}(uv), clamp(uv, 0.0, 1.0)); }`;case`d`:return`vec3 ${a}(vec2 uv) { return ditherColor(${i}(uv), uv * u_resolution); }`;case`r`:return`vec3 ${a}(vec2 uv) { return grainApply(${i}(uv), uv * u_resolution); }`;case`s`:return`vec3 ${a}(vec2 uv) { return paperApply(${i}(uv), uv * u_resolution); }`;case`c`:return`vec3 ${a}(vec2 uv) {
  // The supersample radius is a LOOK, not an antialias: it decides how
  // much of the picture the iso field is smoothed over, and therefore
  // how many lines resolve and how fat each one reads. Left at a flat
  // 0.75 device px it covered four times less picture at 4K than on a
  // 1080-tall frame, which is why the same contour look exported bold
  // and glowing at one size and thin and wiry at the next. Riding
  // u_pixelScale pins it to a constant fraction of the frame \u2014 and it
  // pins legacy (sizeAnchor=0) looks to a constant fraction of their CSS
  // box, which is the same promise those were authored against.
  vec2 e = (0.75 * max(u_pixelScale, 1e-3)) / u_resolution;
  vec3 c0 = ${i}(uv);
  vec3 s = (c0 + ${i}(uv + e) + ${i}(uv - e)
          + ${i}(uv + vec2(e.x, -e.y)) + ${i}(uv + vec2(-e.x, e.y))) * 0.2;
  return contourApply(c0, s, uv);
}`;case`o`:return`vec3 ${a}(vec2 uv) {
  // the glass curves first, then fringes: distortion bends where the
  // lens LOOKS, and the chromatic split is a property of the ray it
  // ends up taking. Doing it the other way round would fringe along
  // the undistorted radius and the colour edges would lean the wrong
  // way at the corners. lensDistort returns its argument untouched at
  // 0, so a look without it is bit-identical.
  vec2 cuv = clamp(lensDistort(uv), 0.0, 1.0);
  if (u_aberration <= 0.0) return ${i}(cuv);
  // offset R and B radially in opposite directions \u2014 the lens fringes
  // everything rendered beneath it; the cycle breathes the fringe width
  // like a lens easing focus (exactly neutral at phase 0)
  vec2 off = (cuv - 0.5) * u_aberration * 0.03 * breath(0.12);
  return vec3(
    ${i}(clamp(cuv + off, 0.0, 1.0)).r,
    ${i}(cuv).g,
    ${i}(clamp(cuv - off, 0.0, 1.0)).b
  );
}`;case`h`:return`vec3 ${a}(vec2 uv) { return halftoneApply(${i}(uv), uv); }`;case`t`:return`vec3 ${a}(vec2 uv) { return toneGeoApply(${i}(uv), uv); }`;default:return`vec3 ${a}(vec2 uv) { return asciiApply(${i}(uv), uv); }`}}function yo(a,i=0){let n=[...a],e=_=>a.includes(_),f=i===5&&(()=>{for(let _=a.indexOf(`m`)-1;_>=0;_--)if(`ahtpd`.includes(n[_]))return n[_]===`a`;return!1})(),u=[to];e(`w`)&&u.push(oo),e(`g`)&&u.push(ao),e(`p`)&&u.push(io),e(`l`)&&u.push(ro),e(`d`)&&u.push(no),e(`o`)&&u.push(so),e(`r`)&&u.push(bo),e(`s`)&&u.push(_o),e(`c`)&&u.push(xo),e(`m`)&&i===2&&u.push(co),e(`m`)&&i===3&&u.push(ho),e(`m`)&&i===4&&u.push(fo),e(`m`)&&i===5&&u.push(f?mo:po),u.push(`vec3 plainSample(vec2 uv) {
  return texture(u_scene, clamp(uv, 0.0, 1.0)).rgb;
}`);let S=`plainSample`,T=`plainSample`,N=`plainSample`;if(e(`h`)||e(`a`)||e(`t`)){let _=`plainSample`;n.forEach((G,X)=>{if(G===`h`){S=_;return}if(G===`a`){T=_;return}if(G===`t`){N=_;return}let oe=`S${X+1}_${G}`;u.push(ut(oe,_,G,i,f)),_=oe})}e(`h`)&&u.push(lo(S)),e(`a`)&&u.push(uo(T,f)),e(`t`)&&u.push(wo(N));let y=`plainSample`;return n.forEach((_,G)=>{let X=`F${G+1}_${_}`;u.push(ut(X,y,_,i,f)),y=X}),u.push(`void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec3 color = ${y}(uv);
  outColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}`),u.join(`
`)}var ko=12;function Eo(a,i,n){let e=a.getContext(`webgl2`,{antialias:!1,preserveDrawingBuffer:!0});if(!e)return null;let f=(t,o)=>{let l=e.createShader(t);if(e.shaderSource(l,o),e.compileShader(l),!e.getShaderParameter(l,e.COMPILE_STATUS)){let s=e.getShaderInfoLog(l);throw e.deleteShader(l),new Error(`Shader compile failed: ${s}`)}return l},u=t=>{let o=e.createProgram();if(e.attachShader(o,f(e.VERTEX_SHADER,n.vertex)),e.attachShader(o,f(e.FRAGMENT_SHADER,t)),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS))throw new Error(`Program link failed: ${e.getProgramInfoLog(o)}`);return o},S=(t,o)=>{let l={};for(let s of o)l[s]=e.getUniformLocation(t,s);return l},T=t=>t?y(t):[1,1,1],N=(t,o,l)=>t===J?it(o,l):t,y=t=>{let[o,l,s]=Lt(t,[255,255,255]);return[o/255,l/255,s/255]},_=`GIP`,G=`GIPowglpdhasrmct`,X=t=>{let o=[];for(let l of t.fxOrder)G.includes(l)&&!o.includes(l)&&!t.hidden.includes(l)&&o.push(l);return!o.includes(`G`)&&!o.includes(`I`)?``:o.join(``)},oe=[`u_shape`,`u_warp`,`u_scale`,`u_detail`,`u_contrast`,`u_angle`,`u_center`,`u_stopCount`,`u_followCursor`,`u_followAmount`,`u_followPos`,`u_followIndex`,`u_gradientOpacity`,`u_gradientBlend`,`u_oklab`,`u_image`,`u_imageOn`,`u_imageAspect`,`u_imageOpacity`,`u_imageBlend`,`u_imageFit`,`u_imageFocal`,`u_imageZoom`,`u_patternSource`,`u_patternLayout`,`u_patternCols`,`u_patternRows`,`u_patternGap`,`u_patternRadius`,`u_patternGapColor`,`u_patternSeed`,`u_scene`,`u_resolution`,`u_seed`,`u_phase`,`u_aberration`,`u_lensDistort`,`u_lightMode`,`u_lightAmount`,`u_lightSize`,`u_lightCount`,`u_waveMode`,`u_waveAxis`,`u_waveAmount`,`u_waveFrequency`,`u_waveFalloff`,`u_wavePhase`,`u_waveCenter`,`u_glassMode`,`u_glassAmount`,`u_glassCount`,`u_glassShadow`,`u_glassHighlight`,`u_pixelate`,`u_ditherAlgo`,`u_ditherMatrix`,`u_ditherScale`,`u_ditherLevels`,`u_ditherStrength`,`u_ditherColorMode`,`u_ditherThreshold`,`u_ditherGamma`,`u_halftoneSize`,`u_halftoneStyle`,`u_halftoneStagger`,`u_halftoneDotScale`,`u_halftoneColor`,`u_halftonePaper`,`u_halftonePaperColor`,`u_halftoneInkColor`,`u_halftoneEmboss`,`u_halftoneWind`,`u_halftoneWindAngle`,`u_halftoneWobble`,`u_halftoneGlint`,`u_halftoneAngle`,`u_halftoneGamma`,`u_halftoneInvert`,`u_halftoneRatio`,`u_ditherRatio`,`u_pixelateRatio`,`u_glassRatio`,`u_glassAngle`,`u_glassProfile`,`u_glassBevel`,`u_halftoneJitter`,`u_halftoneJitterSeed`,`u_toneGeoJitter`,`u_toneGeoJitterSeed`,`u_pixelateGap`,`u_pixelateGrout`,`u_pixelateGroutAuto`,`u_pointerFlip`,`u_paperTint`,`u_paperFibre`,`u_paperVignette`,`u_asciiInvert`,`u_ditherInvert`,`u_toneGeoInvert`,`u_asciiAtlas`,`u_asciiChars`,`u_asciiSize`,`u_asciiRatio`,`u_asciiStyle`,`u_asciiColor`,`u_asciiBackground`,`u_asciiExposure`,`u_asciiFill`,`u_asciiDensity`,`u_asciiScatter`,`u_asciiGap`,`u_asciiAngle`,`u_asciiThreshold`,`u_asciiGamma`,`u_asciiInkColor`,`u_asciiPaperColor`,`u_asciiOpacity`,`u_asciiBlend`,`u_grain`,`u_grainSize`,`u_paperAmount`,`u_pixelScale`,`u_contourLevels`,`u_contourWeight`,`u_contourDash`,`u_contourGlow`,`u_contourColor`,`u_contourPaper`,`u_contourInkColor`,`u_contourPaperColor`,`u_toneGeoSize`,`u_toneGeoLow`,`u_toneGeoHigh`,`u_toneGeoAngle`,`u_toneGeoGrid`,`u_toneGeoRules`,`u_toneGeoCross`,`u_toneGeoInkColor`,`u_toneGeoPaperColor`,`u_toneGeoWeight`,`u_toneGeoColor`,`u_toneGeoPaper`,`u_pointer`,`u_pointerAmount`,`u_pointerSize`,`u_trail`,`u_markCell`,`u_markAngle`],gt=()=>{let t=` .:-=+*#%@`,l=document.createElement(`canvas`);l.width=640,l.height=64;let s=l.getContext(`2d`);s.fillStyle=`#000`,s.fillRect(0,0,l.width,l.height),s.fillStyle=`#fff`,s.font=`51.2px ui-monospace, Menlo, monospace`,s.textAlign=`center`,s.textBaseline=`middle`;for(let c=0;c<10;c++)s.fillText(t[c],(c+.5)*64,34.56);let r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,l),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),{texture:r,chars:10}},ae=new Map,Ae=(t,o)=>{let l=ae.get(t);if(!l){let s=u(o()),r=S(s,oe);for(let c=0;c<8;c++)r[`u_colors[${c}]`]=e.getUniformLocation(s,`u_colors[${c}]`),r[`u_positions[${c}]`]=e.getUniformLocation(s,`u_positions[${c}]`);for(let c=0;c<4;c++)r[`u_lightPos[${c}]`]=e.getUniformLocation(s,`u_lightPos[${c}]`),r[`u_lightColor[${c}]`]=e.getUniformLocation(s,`u_lightColor[${c}]`),r[`u_lightGain[${c}]`]=e.getUniformLocation(s,`u_lightGain[${c}]`),r[`u_lightSpread[${c}]`]=e.getUniformLocation(s,`u_lightSpread[${c}]`);l={prog:s,u:r},ae.set(t,l)}return l},le=gt(),ie=[e.createTexture(),e.createTexture()],ue=[e.createFramebuffer(),e.createFramebuffer()],ce=0,he=0,Te=1,vt=()=>{if(!(ce===a.width&&he===a.height)){ce=a.width,he=a.height;for(let t=0;t<2;t++)e.bindTexture(e.TEXTURE_2D,ie[t]),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,ce,he,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,ue[t]),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ie[t],0);e.bindFramebuffer(e.FRAMEBUFFER,null)}},fe=t=>Math.max(t,.05),_t=(t,o,l)=>{let s=c=>c*Math.PI/180,r=o.indexOf(`m`);for(let c=r-1;c>=0;c--)switch(o[c]){case`a`:{let p=Math.max(t.asciiSize*l,4),g=Math.max(Math.floor(a.width/p),4),P=Math.max(Math.floor(a.height/(p*t.asciiRatio)),4);return[a.width/g,a.height/P,s(t.asciiAngle)]}case`h`:{let p=Math.max(t.halftoneSize*l,4);return[p,p*fe(t.halftoneRatio),s(t.halftoneAngle)]}case`t`:{let p=Math.max(t.toneGeoSize*l,8);return[p,p,s(t.toneGeoGrid)]}case`p`:{if(t.pixelate<2)break;let p=a.height/t.pixelate;return[p,p*fe(t.pixelateRatio),0]}case`d`:{let p=Math.max(t.ditherScale*l,1);return[p,p*fe(t.ditherRatio),0]}}return[0,0,0]},Ce=()=>({tex:[null,null],fbo:[null,null],w:0,h:0}),Re=Ce(),Ge=Ce(),z=null,bt=[`u_src`,`u_outRes`,`u_step`,`u_sigma`],Pe=12,xt=Pe/3,wt=t=>t<=24?1:t<=48?2:t<=96?4:8,yt=(t,o,l)=>{if(!(t.w===o&&t.h===l&&t.tex[0])){t.w=o,t.h=l;for(let s=0;s<2;s++)t.tex[s]??=e.createTexture(),t.fbo[s]??=e.createFramebuffer(),e.bindTexture(e.TEXTURE_2D,t.tex[s]),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,l,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,t.fbo[s]),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t.tex[s],0);e.bindFramebuffer(e.FRAMEBUFFER,null)}},Me=(t,o,l,s,r)=>{let c=wt(r),p=Math.max(1,Math.floor(l/c)),g=Math.max(1,Math.floor(s/c));if(yt(t,p,g),!z){let M=u(n.blur);z={prog:M,u:S(M,bt)}}let C=3*(Math.max(r,.5)/3/c)/Pe,A=z;return e.useProgram(A.prog),e.viewport(0,0,p,g),e.uniform2f(A.u.u_outRes,p,g),e.uniform1f(A.u.u_sigma,xt),e.activeTexture(e.TEXTURE6),e.bindFramebuffer(e.FRAMEBUFFER,t.fbo[0]),e.bindTexture(e.TEXTURE_2D,o),e.uniform1i(A.u.u_src,6),e.uniform2f(A.u.u_step,C/p,0),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,t.fbo[1]),e.bindTexture(e.TEXTURE_2D,t.tex[0]),e.uniform1i(A.u.u_src,6),e.uniform2f(A.u.u_step,0,C/g),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,null),t.tex[1]},q={key:``,tex:null},Ie=()=>{q.key=``},kt=t=>{if(!(t.imageBlur>0)||!d.ready||!d.width)return null;let o=`${d.width}x${d.height}|${t.imageBlur}|${t.imageSrc}`;if(q.key===o&&q.tex)return q.tex;let l=t.imageBlur*t.imageBlur*.06*Math.max(d.width,d.height),s=Me(Ge,K,d.width,d.height,l);return q.key=o,q.tex=s,s},h={disp:[null,null],vel:[null,null],fbo:[null,null],w:0,h:0,read:0,prog:null,lastTime:0,busyUntil:0},Et=[`u_prevDisp`,`u_prevVel`,`u_fieldRes`,`u_aspect`,`u_now`,`u_paint`,`u_radius`,`u_amount`,`u_stiff`,`u_frames`,`u_damping`,`u_flip`],Le=()=>{e.clearColor(128/255,0,128/255,0);for(let t=0;t<2;t++)e.bindFramebuffer(e.FRAMEBUFFER,h.fbo[t]),e.clear(e.COLOR_BUFFER_BIT);e.bindFramebuffer(e.FRAMEBUFFER,null)},St=()=>{let t=256/Math.max(a.width,a.height,1),o=Math.max(16,Math.round(a.width*t)),l=Math.max(16,Math.round(a.height*t));if(!(h.w===o&&h.h===l&&h.disp[0])){h.w=o,h.h=l;for(let s=0;s<2;s++){h.disp[s]??=e.createTexture(),h.vel[s]??=e.createTexture(),h.fbo[s]??=e.createFramebuffer();for(let r of[h.disp[s],h.vel[s]])e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,o,l,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);e.bindFramebuffer(e.FRAMEBUFFER,h.fbo[s]),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,h.disp[s],0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,h.vel[s],0),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1])}Le()}},At=(t,o)=>{if(St(),!h.prog){let g=u(n.spring);h.prog={prog:g,u:S(g,Et)}}let l=performance.now(),s=l-h.lastTime;h.lastTime=l,s>400&&Le();let r=Math.min(s,100)/(1e3/60);o.strength>.01&&(h.busyUntil=l+2500);let c=1-h.read,p=h.prog;e.bindFramebuffer(e.FRAMEBUFFER,h.fbo[c]),e.viewport(0,0,h.w,h.h),e.useProgram(p.prog),e.activeTexture(e.TEXTURE4),e.bindTexture(e.TEXTURE_2D,h.disp[h.read]),e.uniform1i(p.u.u_prevDisp,4),e.activeTexture(e.TEXTURE5),e.bindTexture(e.TEXTURE_2D,h.vel[h.read]),e.uniform1i(p.u.u_prevVel,5),e.uniform2f(p.u.u_fieldRes,h.w,h.h),e.uniform1f(p.u.u_aspect,a.width/Math.max(a.height,1)),e.uniform2f(p.u.u_now,o.x,o.y),e.uniform1f(p.u.u_paint,o.strength),e.uniform1f(p.u.u_radius,t.pointerSize),e.uniform1f(p.u.u_amount,t.pointerAmount),e.uniform1f(p.u.u_stiff,t.pointerFade),e.uniform1f(p.u.u_damping,t.pointerDamping<0?-1:Math.min(1,t.pointerDamping)),e.uniform1f(p.u.u_flip,t.pointerFlip?1:0),e.uniform1f(p.u.u_frames,r),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,null),h.read=c},K=e.createTexture(),d={src:``,kind:`img`,aspect:1,width:0,height:0,ready:!1},m=null,F=null,de=!1,W=0,re=t=>{t.pause(),t.removeAttribute(`src`),t.load()},pe=()=>{F&&(re(F),F=null),m&&(re(m),m=null,de=!1)},me=()=>{!m||m.readyState<2||(e.bindTexture(e.TEXTURE_2D,K),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),de?e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,m):(e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,m),de=!0),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),Ie())},Tt=t=>new Promise((o,l)=>{let s=++W;pe(),d.src=t,d.kind=`img`,d.ready=!1;let r=new Image;r.onload=()=>{if(s!==W)return o();e.bindTexture(e.TEXTURE_2D,K),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),d.aspect=r.naturalWidth/r.naturalHeight,d.width=r.naturalWidth,d.height=r.naturalHeight,d.ready=!0,Ie(),i.onImageReady?.(),o()},r.onerror=()=>{console.error(`Image failed to load: ${t}`),l(new Error(`Image failed to load: ${t}`))},r.crossOrigin=`anonymous`,r.src=t}),Ct=t=>new Promise((o,l)=>{let s=++W;pe(),d.src=t,d.kind=`vid`,d.ready=!1;let r=document.createElement(`video`);r.muted=!0,r.playsInline=!0,r.loop=!0,r.preload=`auto`,r.crossOrigin=`anonymous`;let c=()=>{if(s!==W)return re(r),o();if(!r.videoWidth||!r.videoHeight)return F=null,re(r),console.error(`File has no video track: ${t}`),l(new Error(`File has no video track: ${t}`));F=null,m=r,d.aspect=r.videoWidth/Math.max(1,r.videoHeight),d.width=r.videoWidth,d.height=r.videoHeight,me(),d.ready=!0,r.addEventListener(`playing`,()=>{s===W&&i.onImageReady?.()}),i.videoAutoplay&&r.play().catch(()=>{}),i.onImageReady?.(),o()};r.onloadeddata=()=>{r.onloadeddata=null,Number.isFinite(r.duration)?c():(r.addEventListener(`seeked`,()=>{r.addEventListener(`seeked`,c,{once:!0}),r.currentTime=0},{once:!0}),r.currentTime=1e6)},r.onerror=()=>{F===r&&(F=null),console.error(`Video failed to load: ${t}`),l(new Error(`Video failed to load: ${t}`))},F=r,r.src=t}),Fe=t=>t.imageKind===`vid`?Ct(t.imageSrc):Tt(t.imageSrc),Rt=(t,o,l,s,r,c,p,g)=>{e.uniform2f(t.u_resolution,a.width,a.height),e.uniform1f(t.u_phase,l),e.uniform1f(t.u_seed,o.seed),e.uniform1i(t.u_scene,1),e.uniform1i(t.u_shape,o.shape),e.uniform1f(t.u_warp,o.warp),e.uniform1f(t.u_scale,o.noiseScale),e.uniform1i(t.u_detail,o.detail),e.uniform1f(t.u_contrast,o.contrast),e.uniform1f(t.u_angle,o.angle*Math.PI/180),e.uniform2f(t.u_center,o.centerX,o.centerY),e.uniform1f(t.u_gradientOpacity,o.gradientOpacity),e.uniform1i(t.u_gradientBlend,o.gradientBlend),e.uniform1i(t.u_oklab,o.oklab?1:0);let P=[...o.stops].sort((k,D)=>k.pos-D.pos),C=Math.min(P.length,8);e.uniform1i(t.u_stopCount,C);for(let k=0;k<8;k++){let D=P[Math.min(k,C-1)],U=y(D.color);e.uniform3f(t[`u_colors[${k}]`],U[0],U[1],U[2]),e.uniform1f(t[`u_positions[${k}]`],D.pos/100)}let A=Math.round(o.gradientFollow),M=A!==0&&C>1?P.indexOf(o.stops[A>0&&A<=C?A-1:ht(o.stops)]):-1;e.uniform2f(t.u_followCursor,r?r.x:.5,r?r.y:.5),e.uniform1f(t.u_followAmount,M>=0&&r?r.strength:0),e.uniform1f(t.u_followPos,M>=0?P[M].pos/100:0),e.uniform1i(t.u_followIndex,M),e.uniform1i(t.u_image,0),e.uniform1i(t.u_imageOn,s?1:0),e.uniform1f(t.u_imageAspect,d.aspect),e.uniform1f(t.u_imageOpacity,o.imageOpacity),e.uniform1i(t.u_imageBlend,o.imageBlend),e.uniform1i(t.u_imageFit,o.imageFit===1?1:0),e.uniform2f(t.u_imageFocal,o.imageFocalX,o.imageFocalY),e.uniform1f(t.u_imageZoom,o.imageZoom),e.uniform1i(t.u_patternSource,o.patternSource===`t`?1:0),e.uniform1i(t.u_patternLayout,Math.max(0,Dt.indexOf(o.patternLayout))),e.uniform1i(t.u_patternCols,o.patternCols),e.uniform1i(t.u_patternRows,o.patternRows),e.uniform1f(t.u_patternGap,o.patternGap*g),e.uniform1f(t.u_patternRadius,o.patternRadius*g);let O=y(o.patternGapColor||P[0].color);e.uniform3f(t.u_patternGapColor,O[0],O[1],O[2]),e.uniform1f(t.u_patternSeed,o.patternSeed),e.uniform1f(t.u_aberration,o.aberration),e.uniform1f(t.u_lensDistort,Math.min(1,Math.max(-1,o.lensDistort))),e.uniform1i(t.u_lightMode,o.lightMode);let E=Math.min(4,Math.max(1,Math.round(o.lightCount)||1)),R=Math.min(E,Math.round(o.lightFollow)||0),b=R>0&&r?r.strength:0,I=R===1&&E===1;e.uniform1f(t.u_lightAmount,I?o.lightAmount*b:o.lightAmount),e.uniform1f(t.u_lightSize,o.lightSize),e.uniform1i(t.u_lightCount,E);let j=[[o.lightX,o.lightY,o.lightColor,o.lightGain,o.lightSpread],[o.light2X,o.light2Y,o.lightColor2,o.lightGain2,o.lightSpread2],[o.light3X,o.light3Y,o.lightColor3,o.lightGain3,o.lightSpread3],[o.light4X,o.light4Y,o.lightColor4,o.lightGain4,o.lightSpread4]];for(let k=0;k<4;k++){let[D,U,Gt,Pt,Mt]=j[k],ye=R===k+1;e.uniform2f(t[`u_lightPos[${k}]`],ye&&r?D+(r.x-D)*b:D,ye&&r?U+(r.y-U)*b:U);let ke=y(Gt),Ee=ye&&!I?b:1;e.uniform3f(t[`u_lightColor[${k}]`],ke[0]*Ee,ke[1]*Ee,ke[2]*Ee),e.uniform1f(t[`u_lightGain[${k}]`],Math.min(2,Math.max(0,Pt))),e.uniform1f(t[`u_lightSpread[${k}]`],Math.min(2,Math.max(.05,Mt)))}let Z=[[1,0],[-1,0],[0,-1],[0,1]],Q=Z[Math.round(o.waveSide)]??Z[0];e.uniform1i(t.u_waveMode,Math.round(o.waveMode)===1?1:0),e.uniform2f(t.u_waveAxis,Q[0],Q[1]),e.uniform1f(t.u_waveAmount,o.waveAmount),e.uniform1f(t.u_waveFrequency,o.waveFrequency),e.uniform1f(t.u_waveFalloff,o.waveFalloff),e.uniform1f(t.u_wavePhase,o.wavePhase),e.uniform2f(t.u_waveCenter,o.waveX,o.waveY),e.uniform1i(t.u_glassMode,o.glassMode),e.uniform1f(t.u_glassAmount,o.glassAmount),e.uniform1f(t.u_glassCount,o.glassCount),e.uniform1f(t.u_glassAngle,o.glassAngle*Math.PI/180),e.uniform1f(t.u_glassProfile,Math.min(5,Math.max(1,o.glassProfile))),e.uniform1f(t.u_glassBevel,Math.min(.4,Math.max(.005,o.glassBevel))),e.uniform1f(t.u_glassShadow,o.glassShadow),e.uniform1f(t.u_glassHighlight,o.glassHighlight),e.uniform1f(t.u_pixelate,o.pixelate),e.uniform1i(t.u_ditherAlgo,o.ditherAlgo),e.uniform1i(t.u_ditherMatrix,o.ditherMatrix),e.uniform1f(t.u_ditherScale,o.ditherScale*g),e.uniform1f(t.u_ditherLevels,o.ditherLevels),e.uniform1f(t.u_ditherStrength,o.ditherStrength),e.uniform1i(t.u_ditherColorMode,o.ditherColorMode),e.uniform1f(t.u_ditherThreshold,o.ditherThreshold),e.uniform1f(t.u_ditherGamma,o.ditherGamma),e.uniform1f(t.u_halftoneSize,o.halftoneSize*g),e.uniform1i(t.u_halftoneStyle,o.halftoneStyle),e.uniform1i(t.u_halftoneStagger,o.halftoneStagger?1:0),e.uniform1f(t.u_halftoneDotScale,o.halftoneDotScale),e.uniform1i(t.u_halftoneColor,o.halftoneColor),e.uniform1f(t.u_halftonePaper,o.halftonePaper);let $=y(N(o.halftonePaperColor,o.stops,`h`));e.uniform3f(t.u_halftonePaperColor,$[0],$[1],$[2]);let H=T(o.halftoneInkColor);e.uniform3f(t.u_halftoneInkColor,H[0],H[1],H[2]),e.uniform1f(t.u_halftoneEmboss,o.halftoneEmboss),e.uniform1f(t.u_halftoneWind,o.halftoneWind),e.uniform1f(t.u_halftoneWindAngle,o.halftoneWindAngle*Math.PI/180),e.uniform1f(t.u_halftoneWobble,o.halftoneWobble),e.uniform1f(t.u_halftoneGlint,o.halftoneGlint),e.uniform1f(t.u_halftoneJitter,Math.min(1,Math.max(0,o.halftoneJitter))),e.uniform1f(t.u_halftoneJitterSeed,Math.min(999,Math.max(0,Math.round(o.halftoneJitterSeed)))),e.uniform1f(t.u_halftoneAngle,o.halftoneAngle*Math.PI/180),e.uniform1f(t.u_halftoneGamma,o.halftoneGamma),e.uniform1i(t.u_halftoneInvert,o.halftoneInvert?1:0),e.uniform1f(t.u_halftoneRatio,o.halftoneRatio),e.uniform1f(t.u_ditherRatio,o.ditherRatio),e.uniform1f(t.u_pixelateRatio,o.pixelateRatio),e.uniform1f(t.u_pixelateGap,Math.min(.9,Math.max(0,o.pixelateGap))),e.uniform1i(t.u_pixelateGroutAuto,o.pixelateGroutColor?0:1);let V=o.pixelateGroutColor?y(o.pixelateGroutColor):[0,0,0];e.uniform3f(t.u_pixelateGrout,V[0],V[1],V[2]),e.uniform1f(t.u_glassRatio,o.glassRatio),e.uniform1i(t.u_asciiInvert,o.asciiInvert?1:0),e.uniform1i(t.u_ditherInvert,o.ditherInvert?1:0),e.uniform1i(t.u_toneGeoInvert,o.toneGeoInvert?1:0),e.uniform1i(t.u_asciiAtlas,2),e.uniform1f(t.u_asciiChars,le.chars),e.uniform1f(t.u_asciiSize,o.asciiSize*g),e.uniform1f(t.u_asciiRatio,o.asciiRatio),e.uniform1i(t.u_asciiStyle,o.asciiStyle),e.uniform1i(t.u_asciiColor,o.asciiColor),e.uniform1f(t.u_asciiBackground,o.asciiBackground),e.uniform1f(t.u_asciiExposure,o.asciiExposure),e.uniform1f(t.u_asciiFill,o.asciiFill),e.uniform1f(t.u_asciiDensity,o.asciiDensity),e.uniform1f(t.u_asciiScatter,o.asciiScatter),e.uniform1f(t.u_asciiGap,o.asciiGap),e.uniform1f(t.u_asciiAngle,o.asciiAngle*Math.PI/180),e.uniform1f(t.u_asciiThreshold,o.asciiThreshold),e.uniform1f(t.u_asciiGamma,o.asciiGamma);let ee=T(o.asciiInkColor);e.uniform3f(t.u_asciiInkColor,ee[0],ee[1],ee[2]);let ge=y(N(o.asciiPaperColor,o.stops,`a`)||`000000`);e.uniform3f(t.u_asciiPaperColor,ge[0],ge[1],ge[2]),e.uniform1f(t.u_asciiOpacity,o.asciiOpacity),e.uniform1i(t.u_asciiBlend,o.asciiBlend),e.uniform1f(t.u_grain,o.grain),e.uniform1f(t.u_grainSize,o.grainSize*g),e.uniform1f(t.u_paperAmount,o.paperAmount);let ve=o.paperColor?y(o.paperColor):[.98,.94,.86];e.uniform3f(t.u_paperTint,ve[0],ve[1],ve[2]),e.uniform1f(t.u_paperFibre,Math.min(4,Math.max(.25,o.paperFibre))),e.uniform1f(t.u_paperVignette,Math.min(2,Math.max(0,o.paperVignette))),e.uniform1f(t.u_pixelScale,g),e.uniform1f(t.u_contourLevels,o.contourLevels),e.uniform1f(t.u_contourWeight,o.contourWeight*g),e.uniform1f(t.u_contourDash,o.contourDash),e.uniform1f(t.u_contourGlow,o.contourGlow),e.uniform1i(t.u_contourColor,o.contourColor),e.uniform1f(t.u_contourPaper,o.contourPaper);let _e=o.contourInkColor?y(o.contourInkColor):[.92,.92,.92];e.uniform3f(t.u_contourInkColor,_e[0],_e[1],_e[2]);let be=o.contourPaperColor===J?y(it(o.stops,`c`)):o.contourPaperColor?y(o.contourPaperColor):[.07,.07,.08];e.uniform3f(t.u_contourPaperColor,be[0],be[1],be[2]),e.uniform1f(t.u_toneGeoSize,o.toneGeoSize*g),e.uniform1f(t.u_toneGeoLow,o.toneGeoLow),e.uniform1f(t.u_toneGeoHigh,o.toneGeoHigh),e.uniform1f(t.u_toneGeoAngle,o.toneGeoAngle*Math.PI/180),e.uniform1f(t.u_toneGeoRules,o.toneGeoRules),e.uniform1f(t.u_toneGeoCross,o.toneGeoCross*Math.PI/180),e.uniform1f(t.u_toneGeoGrid,o.toneGeoGrid*Math.PI/180),e.uniform1f(t.u_toneGeoJitter,Math.min(1,Math.max(0,o.toneGeoJitter))),e.uniform1f(t.u_toneGeoJitterSeed,Math.min(999,Math.max(0,Math.round(o.toneGeoJitterSeed))));let xe=T(o.toneGeoInkColor);e.uniform3f(t.u_toneGeoInkColor,xe[0],xe[1],xe[2]);let we=y(N(o.toneGeoPaperColor,o.stops,`t`)||`ffffff`);e.uniform3f(t.u_toneGeoPaperColor,we[0],we[1],we[2]),e.uniform1f(t.u_toneGeoWeight,o.toneGeoWeight),e.uniform1i(t.u_toneGeoColor,o.toneGeoColor),e.uniform1f(t.u_toneGeoPaper,o.toneGeoPaper),e.uniform2f(t.u_pointer,r?r.x:.5,r?r.y:.5),e.uniform1f(t.u_pointerAmount,c&&r?c===5?o.pointerAmount:o.pointerAmount*r.strength:0),e.uniform1f(t.u_pointerSize,o.pointerSize),e.uniform1f(t.u_pointerFlip,o.pointerFlip?1:0),e.uniform1i(t.u_trail,4),e.uniform2f(t.u_markCell,p[0],p[1]),e.uniform1f(t.u_markAngle,p[2])};return{render:(t,o=0,l,s)=>{vt();let r=X(t);t.fxOrder.includes(`I`)&&t.imageSrc&&t.imageSrc!==d.src&&Fe(t).catch(()=>{});let c=r.includes(`I`)&&d.ready&&d.src===t.imageSrc;i.videoAutoplay&&d.kind===`vid`&&m&&d.ready&&(c&&m.paused&&!m.ended?m.play().catch(()=>{}):!c&&!m.paused&&m.pause()),c&&d.kind===`vid`&&m&&!m.paused&&!m.ended&&me();let p=kt(t)??K;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,p),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,le.texture);let g=r.includes(`m`)&&t.pointerMode||0,C=t.sizeAnchor===1&&!i.forcePixelScale?a.height/Xt(t.aspect,d.ready&&d.width>0?{width:d.width,height:d.height}:null):Te,A=t.softness*t.softness*56*C,M=g===5?_t(t,r,C):[0,0,0];g===5&&l&&(At(t,l),e.activeTexture(e.TEXTURE4),e.bindTexture(e.TEXTURE_2D,h.disp[h.read]));let O=b=>_.includes(b),E=[];for(let b of r){let I=E.length?E[E.length-1]:null;I&&O(I[0])===O(b)?E[E.length-1]+=b:E.push(b)}(!E.length||!O(E[0][0]))&&E.unshift(``);let R=null;E.forEach((b,I)=>{let j=I===E.length-1,Z=b===``||O(b[0]),Q=Z?Ae(`L|${b}|${R?1:0}`,()=>n.layersFor(b,!!R)):Ae(`E|${b}|${g}`,()=>n.effectsFor(b,g)),$=R&&!Z&&b.includes(`o`)&&t.softness>0?Me(Re,R,a.width,a.height,A):R;if(e.bindFramebuffer(e.FRAMEBUFFER,j?null:ue[I%2]),j&&s?.clip){let H=ee=>Math.round(Math.min(1,Math.max(0,ee))*a.width),V=H(s.clip[0]);e.enable(e.SCISSOR_TEST),e.scissor(V,0,Math.max(H(s.clip[1])-V,0),a.height)}e.useProgram(Q.prog),e.viewport(0,0,a.width,a.height),$&&(e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,$),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR)),Rt(Q.u,t,o,c,l,g,M,C),e.drawArrays(e.TRIANGLES,0,3),R=j?null:ie[I%2]}),s?.clip&&e.disable(e.SCISSOR_TEST)},resize(t,o,l){return Te=l,a.width===t&&a.height===o?!1:(a.width=t,a.height=o,!0)},async preload(t){t.fxOrder.includes(`I`)&&t.imageSrc&&t.imageSrc!==d.src&&await Fe(t)},imageDims(){return d.ready&&d.width>0?{width:d.width,height:d.height}:null},videoActive(){return d.ready&&d.kind===`vid`&&!!m&&!m.paused&&!m.ended},pointerBusy(){return performance.now()<h.busyUntil},videoDuration(){return m&&Number.isFinite(m.duration)?m.duration:null},videoTime(){return m?.currentTime??0},seekVideo(t){let o=m;if(!o||o.readyState<1)return Promise.resolve();o.pause();let l=Number.isFinite(o.duration)?t%o.duration:t;return new Promise(s=>{let r=()=>{me(),s()};if(Math.abs(o.currentTime-l)<1e-4&&o.readyState>=2)return r();o.addEventListener(`seeked`,r,{once:!0}),o.currentTime=l})},playVideo(t=0){m&&(m.currentTime=t,m.play().catch(()=>{}))},dispose(){W++,pe(),e.deleteTexture(le.texture),e.deleteTexture(K);for(let t=0;t<2;t++)e.deleteTexture(ie[t]),e.deleteFramebuffer(ue[t]),h.disp[t]&&e.deleteTexture(h.disp[t]),h.vel[t]&&e.deleteTexture(h.vel[t]),h.fbo[t]&&e.deleteFramebuffer(h.fbo[t]);h.prog&&e.deleteProgram(h.prog.prog);for(let t of[Re,Ge]){for(let o=0;o<2;o++)t.tex[o]&&e.deleteTexture(t.tex[o]),t.fbo[o]&&e.deleteFramebuffer(t.fbo[o]),t.tex[o]=null,t.fbo[o]=null;t.w=0,t.h=0}z&&(e.deleteProgram(z.prog),z=null);for(let{prog:t}of ae.values())e.deleteProgram(t);ae.clear(),i.releaseContext&&e.getExtension(`WEBGL_lose_context`)?.loseContext()}}}function So(a,i={}){return Eo(a,i,{vertex:Vt,layersFor:eo,effectsFor:yo,spring:vo,blur:go})}var pt=(()=>{class a{config=re.required();canvasRef=cz.required(`canvas`);host=p(se);destroyRef=p(te);isBrowser=$e(p(De));renderer=null;design=lt({});animateOn=!1;pointerOn=!1;target={x:.5,y:.5,strength:0};eased={x:.5,y:.5,strength:0};phase=0;raf=0;last=0;onscreen=!0;tabVisible=!0;zone=null;playsFootage=!1;constructor(){ke(()=>{let n=this.config();this.renderer&&this.apply(n)}),Pt(()=>{let n=this.canvasRef().nativeElement;if(this.playsFootage=!matchMedia(`(prefers-reduced-motion: reduce)`).matches,this.renderer=So(n,{onImageReady:()=>{this.draw(),this.wake()},videoAutoplay:this.playsFootage}),!this.renderer)return;let e=new ResizeObserver(this.resize);e.observe(this.host.nativeElement);let f=new IntersectionObserver(u=>{this.onscreen=u[u.length-1].isIntersecting,this.syncVideo(),this.wake()});f.observe(this.host.nativeElement),document.addEventListener(`visibilitychange`,this.onVisibility),this.zone=this.host.nativeElement.parentElement,this.zone?.addEventListener(`pointermove`,this.onPointerMove),this.zone?.addEventListener(`pointerleave`,this.onPointerLeave),this.destroyRef.onDestroy(()=>{e.disconnect(),f.disconnect(),document.removeEventListener(`visibilitychange`,this.onVisibility),this.zone?.removeEventListener(`pointermove`,this.onPointerMove),this.zone?.removeEventListener(`pointerleave`,this.onPointerLeave),this.zone=null,cancelAnimationFrame(this.raf),this.renderer?.dispose(),this.renderer=null}),this.apply(this.config())})}apply(n){this.design=lt(n);let e=this.design,f=matchMedia(`(prefers-reduced-motion: reduce)`).matches;this.animateOn=e.animate&&!f;let u=e.pointerMode>0&&$t(e).includes(`m`)||st(e,`G`)&&e.gradientFollow!==0&&e.stops.length>1;this.pointerOn=u&&!f&&matchMedia(`(hover: hover)`).matches;let S=[this.renderer.preload(e).catch(()=>{})];Promise.all(S).then(()=>{this.resize(),this.syncVideo(),this.draw(),this.wake()})}draw=()=>{this.renderer?.render(this.design,this.phase,this.eased),this.syncVideo()};syncVideo(n=this.onscreen&&this.tabVisible){let e=this.renderer;!e||!this.playsFootage||this.design.imageKind!==`vid`||!st(this.design,`I`)||n!==e.videoActive()&&(n?e.playVideo(e.videoTime()):e.seekVideo(e.videoTime()))}needsFrames(){return this.onscreen&&this.tabVisible&&(this.animateOn||this.renderer?.videoActive()===!0||this.pointerOn&&(this.target.strength>0||this.eased.strength>.003||this.renderer?.pointerBusy()===!0))}tick=n=>{if(this.raf=0,!this.needsFrames()){this.target.strength===0&&this.eased.strength>0&&(this.eased.strength=0,this.draw()),this.last=0;return}let e=this.last?(n-this.last)/1e3:0;if(this.last=n,this.animateOn&&e&&(this.phase=(this.phase+e*this.design.animSpeed/ko)%1),this.pointerOn&&e){let f=1-Math.exp(-e*10),u=1-Math.exp(-e*6);this.eased.x+=(this.target.x-this.eased.x)*f,this.eased.y+=(this.target.y-this.eased.y)*f,this.eased.strength+=(this.target.strength-this.eased.strength)*u}this.draw(),this.raf=requestAnimationFrame(this.tick)};wake(){!this.raf&&this.needsFrames()&&(this.last=0,this.raf=requestAnimationFrame(this.tick))}resize=()=>{let n=this.host.nativeElement.getBoundingClientRect(),e=Math.min(devicePixelRatio||1,2);this.renderer?.resize(Math.max(1,Math.round(n.width*e)),Math.max(1,Math.round(n.height*e)),e)&&this.draw()};onPointerMove=n=>{let e=this.host.nativeElement.getBoundingClientRect();this.target.x=(n.clientX-e.left)/Math.max(1,e.width),this.target.y=1-(n.clientY-e.top)/Math.max(1,e.height),this.target.strength=1,this.wake()};onPointerLeave=()=>{this.target.strength=0,this.wake()};onVisibility=()=>{this.tabVisible=!document.hidden,this.syncVideo(),this.wake()};static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let n=[`canvas`];return Zn({type:a,selectors:[[`oddity-canvas`]],viewQuery:function(f,u){f&1&&mb(u.canvasRef,n,5),f&2&&dA()},hostAttrs:[`aria-hidden`,`true`],inputs:{config:[1,`config`]},decls:2,vars:0,consts:[[`canvas`,``]],template:function(f,u){f&1&&hs(0,`canvas`,null,0)},styles:[`[_nghost-%COMP%]{position:absolute;inset:0;display:block;overflow:hidden;pointer-events:none}canvas[_ngcontent-%COMP%]{display:block;width:100%;height:100%}`]})})()}return a})();var Ao=(a,i)=>i.title;function To(a,i){if(a&1&&(Fl(0,`a`,13),Jl(1,`bx-icon`,21),Fl(2,`h3`),FA(3),jh(),Fl(4,`p`),FA(5),jh(),Fl(6,`span`,22),FA(7,`Explore`),Jl(8,`bx-icon`,23),jh()()),a&2){let n=i.$implicit;ab(`routerLink`,n.route),CC(),ab(`name`,n.icon),CC(2),Mb(n.title),CC(2),Mb(n.description)}}var mt=class a{version=at;themingService=p(lr);features=[{title:`One shared material`,description:`Set appearance once. Buttons, fields, menus, dialogs, and notifications share your application settings.`,icon:`layers`,route:`/appearance`},{title:`Your Blocks theme`,description:`Existing semantic colors, spacing, radii, and palettes carry through every surface.`,icon:`palette`,route:`/components/button`},{title:`Familiar interactions`,description:`Keep native controls, keyboard navigation, and reduced motion while adding fluid transitions.`,icon:`accessibility`,route:`/modal`}];look=Q(()=>{this.themingService.palette(),this.themingService.activeTheme();let i=window.getComputedStyle(document.body).getPropertyValue(`--bx-primary`),n=window.getComputedStyle(document.body).getPropertyValue(`--bx-bg-canvas`);return{fxOrder:`Ggr`,stops:[{color:i.replace(`#`,``),pos:0},{color:n.replace(`#`,``),pos:57},{color:n.replace(`#`,``),pos:100}],seed:511,warp:.35,noiseScale:1.36,detail:0,contrast:.82,angle:180,centerX:.713,centerY:.271,lightMode:3,lightAmount:.11,lightSize:.27,lightFollow:1,glassMode:1,glassAmount:.42,glassCount:5,glassAngle:145,glassProfile:2,glassBevel:.01,glassShadow:.16,glassHighlight:.27,pointerMode:2,pointerDamping:1,pointerFlip:!0,animate:!0}});static ɵfac=function(n){return new(n||a)};static ɵcmp=Zn({type:a,selectors:[[`app-home`]],decls:42,vars:3,consts:[[1,`oddity-canvas`,3,`config`],[1,`home-container`],[1,`hero`],[1,`hero-content`],[1,`eyebrow`],[1,`hero-subtitle`],[1,`hero-actions`],[`bx-button`,``,`variant`,`filled`,`color`,`primary`,`routerLink`,`/appearance`],[`name`,`arrow-right`,`size`,`20`],[`bx-button`,``,`variant`,`filled`,`color`,`grayscale`,`routerLink`,`/components`,3,`outlined`],[`aria-labelledby`,`features-title`,1,`features`],[`id`,`features-title`],[1,`feature-grid`],[`bxSurface`,``,1,`feature-card`,3,`routerLink`],[`aria-label`,`Flagship components`,1,`home-links`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/modal`],[`name`,`arrow-right`,`size`,`16`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/toastr`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/icon-catalog`],[1,`home-footer`],[`href`,`https://www.npmjs.com/package/@filip.mazev/blocks`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`size`,`24`,3,`name`],[1,`feature-link`],[`name`,`arrow-up-right`,`size`,`16`]],template:function(n,e){n&1&&(Jl(0,`oddity-canvas`,0),Fl(1,`div`,1)(2,`header`,2)(3,`div`,3)(4,`p`,4),FA(5,`Blocks · Angular components`),jh(),Fl(6,`h1`),FA(7,`Build with clarity.`),Jl(8,`br`),Fl(9,`span`),FA(10,`Give it depth.`),jh()(),Fl(11,`p`,5),FA(12,`A modular UI library with shared theming, accessible controls, and materials that feel at home throughout your application.`),jh(),Fl(13,`div`,6)(14,`a`,7),FA(15,`Configure appearance`),Jl(16,`bx-icon`,8),jh(),Fl(17,`a`,9),FA(18,`Browse components`),jh()()()(),Fl(19,`section`,10)(20,`h2`,11),FA(21,`Built on the Blocks foundations`),jh(),Fl(22,`div`,12),QT(23,To,9,4,`a`,13,Ao),jh()(),Fl(25,`section`,14)(26,`a`,15),FA(27,`Modal playground`),Jl(28,`bx-icon`,16),jh(),Fl(29,`a`,17),FA(30,`Toast playground`),Jl(31,`bx-icon`,16),jh(),Fl(32,`a`,18),FA(33,`Icon catalog`),Jl(34,`bx-icon`,16),jh()(),Fl(35,`footer`,19)(36,`span`),FA(37,`Designed & developed by Filip Mazev`),jh(),Fl(38,`span`),FA(39),jh(),Fl(40,`a`,20),FA(41,`npm package`),jh()()()),n&2&&(ab(`config`,e.look()),CC(17),ab(`outlined`,!0),CC(6),JT(e.features),CC(16),$h(`Blocks `,e.version))},dependencies:[Zc,R_,S,E_,pt],styles:[`
[_nghost-%COMP%] {
  display: block;
}
.home-container[_ngcontent-%COMP%] {
  max-width: 80rem;
  margin-inline: auto;
  z-index: 10;
  position: relative;
}
.hero[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  padding-block: 2.5rem 3rem;
}
.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: clamp(2.5rem, 4.3vw, 4.5rem);
}
.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-brand);
}
.hero-subtitle[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 1.125rem;
  max-width: 35rem;
}
.hero-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}
.features[_ngcontent-%COMP%] {
  padding-block: 2rem;
  border-top: 1px solid var(--%NS%bx-border-default);
}
.features[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {
  margin-bottom: 1.5rem;
}
.feature-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
.feature-card[_ngcontent-%COMP%] {
  display: block;
  padding: 1.5rem;
  border: 1px solid var(--%NS%bx-border-default);
  border-radius: 0.75rem;
  background: color-mix(in srgb, var(--%NS%bx-bg-surface) 80%, transparent);
  text-decoration: none;
  color: var(--%NS%bx-text-primary);
}
.feature-card[_ngcontent-%COMP%]:hover {
  border-color: var(--%NS%bx-border-brand);
}
.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  margin-block: 1rem 0.5rem;
}
.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: var(--%NS%bx-text-secondary);
  font-size: 0.875rem;
}
.feature-link[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.875rem;
  color: var(--%NS%bx-text-brand);
}
.home-links[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}
.home-footer[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding-block: 1.5rem;
  border-top: 1px solid var(--%NS%bx-border-default);
  font-size: 0.8rem;
  color: var(--%NS%bx-text-secondary);
}
@media (max-width: 1280px) {
  .hero[_ngcontent-%COMP%] {
    gap: 1.5rem;
  }
  .hero-preview[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .preview-card[_ngcontent-%COMP%] {
    padding: 1.5rem;
  }
}
@media (max-width: 768px) {
  .hero[_ngcontent-%COMP%], 
   .feature-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .hero[_ngcontent-%COMP%] {
    padding-top: 1rem;
  }
  .hero-preview[_ngcontent-%COMP%] {
    min-height: 20rem;
  }
}
.preview-background[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
}
.oddity-canvas[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  z-index: 0;
  width: 100vw;
  height: 100dvh;
}`]})};export{mt as Home};