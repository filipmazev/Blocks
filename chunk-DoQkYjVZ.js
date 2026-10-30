import{r as t,t as r}from"./chunk-C9yOwMO6.js";import{$t as Ub,Cr as mn,En as _,Hn as fe,It as Qt,Kn as g,Kt as Sr,L as Hb,Nr as pe,Nt as Qe,On as _v,Or as nr,P as Gr,Q as K,Sr as me,Ur as si,Vn as f,Vr as re,Yr as tt,Zt as U,_r as le,an as Wa,ar as j,at as Le,cn as Wr,cr as je,ct as M,en as Un,gi as y,hi as xf,in as W,jn as be,kt as Q,mi as xe,n as $e,oi as ve$1,pi as xE,pn as Xu,vr as lt,w as Ee,y as Dt$1,yn as Yr}from"./chunk-tIcWR06h.js";import"./main-E5XH4K4B.js";var Et=`1.4.18`;function Zt(n,o){let a=parseInt(n,16);return Number.isFinite(a)?[a>>16&255,a>>8&255,a&255]:[...o]}function Gt(n){let o=n.padStart(6,`0`),a=parseInt(o.slice(0,2),16)||0,e=parseInt(o.slice(2,4),16)||0,r=parseInt(o.slice(4,6),16)||0;return .3*a+.59*e+.11*r}function Lt(n){let o=0,a=-1;return n.forEach((e,r)=>{let s=Gt(e.color);s>a&&(a=s,o=r)}),o}function ei(n){let o=0,a=1/0;return n.forEach((e,r)=>{let s=Gt(e.color);s<a&&(a=s,o=r)}),o}var ge=`auto`;var ti={h:`light`,t:`light`,a:`dark`,c:`dark`};function St(n,o){let a=ti[o]===`light`;return n.length?n[a?Lt(n):ei(n)].color:a?`ffffff`:`000000`}var Tt={fxOrder:`G`,hidden:``,shape:4,stops:[{color:`1e1b4b`,pos:0},{color:`4338ca`,pos:25},{color:`7c6ff0`,pos:50},{color:`cbb0f7`,pos:75},{color:`faf9f6`,pos:100}],seed:128,warp:.8,noiseScale:1.2,detail:3,contrast:1,angle:45,centerX:.5,centerY:.5,gradientFollow:0,gradientOpacity:1,gradientBlend:0,oklab:!1,imageSrc:``,imageKind:`img`,imageOpacity:1,imageBlend:0,imageBlur:0,imageFit:0,imageFocalX:.5,imageFocalY:.5,imageZoom:1,patternSource:`l`,patternLayout:`b`,patternCols:6,patternRows:6,patternGap:8,patternRadius:16,patternGapColor:``,patternSeed:1,aberration:0,lensDistort:0,softness:0,lightMode:0,lightAmount:.5,lightSize:.5,lightX:.5,lightY:.5,lightCount:1,lightFollow:0,light2X:.25,light2Y:.7,light3X:.75,light3Y:.7,light4X:.5,light4Y:.85,lightColor:`ffffff`,lightColor2:`ffffff`,lightColor3:`ffffff`,lightColor4:`ffffff`,lightGain:1,lightGain2:1,lightGain3:1,lightGain4:1,lightSpread:1,lightSpread2:1,lightSpread3:1,lightSpread4:1,waveMode:0,waveSide:0,waveAmount:.3,waveFrequency:8,waveFalloff:.5,wavePhase:0,waveX:.5,waveY:.5,glassMode:0,glassAmount:.5,glassCount:24,glassRatio:1,glassAngle:0,glassProfile:3,glassBevel:.04,glassShadow:.3,glassHighlight:.3,pixelate:0,pixelateRatio:1,pixelateGap:0,pixelateGroutColor:``,ditherAlgo:0,ditherMatrix:4,ditherScale:4,ditherLevels:4,ditherStrength:1,ditherColorMode:0,ditherThreshold:.5,ditherGamma:1,ditherInvert:!1,ditherRatio:1,halftoneSize:8,halftoneStyle:0,halftoneStagger:!1,halftoneDotScale:.85,halftoneColor:1,halftonePaper:.2,halftonePaperColor:`ffffff`,halftoneEmboss:0,halftoneWind:0,halftoneWindAngle:0,halftoneWobble:0,halftoneGlint:0,halftoneJitter:0,halftoneJitterSeed:0,halftoneAngle:0,halftoneGamma:1,halftoneInvert:!1,halftoneRatio:1,halftoneInkColor:``,asciiSize:16,asciiRatio:1,asciiStyle:0,asciiColor:1,asciiBackground:.2,asciiExposure:1,asciiFill:1,asciiDensity:64,asciiScatter:0,asciiGap:0,asciiAngle:0,asciiThreshold:.5,asciiGamma:1,asciiInvert:!1,asciiInkColor:``,asciiPaperColor:`000000`,asciiOpacity:1,asciiBlend:0,contourLevels:8,contourWeight:2,contourDash:0,contourGlow:0,contourColor:1,contourPaper:.2,contourInkColor:``,contourPaperColor:``,toneGeoSize:36,toneGeoLow:.4,toneGeoHigh:.6,toneGeoInvert:!1,toneGeoRules:3,toneGeoCross:0,toneGeoAngle:0,toneGeoGrid:0,toneGeoJitter:0,toneGeoJitterSeed:0,toneGeoInkColor:``,toneGeoPaperColor:`ffffff`,toneGeoWeight:.5,toneGeoColor:1,toneGeoPaper:.2,grain:0,grainSize:1,paperAmount:0,paperColor:``,paperFibre:1,paperVignette:1,pointerMode:0,pointerAmount:.5,pointerSize:.4,pointerFade:.5,pointerDamping:-1,pointerFlip:!1,animate:!1,animSpeed:1,aspect:`1x1`,sizeAnchor:1};var ii=[`b`,`g`,`m`,`c`];var oi=[`1x1`,`16x9`,`9x16`,`2x1`,`3x4`];var ai={"1x1":`1080x1080`,"16x9":`1920x1080`,"9x16":`1080x1920`,"2x1":`1920x960`,"3x4":`1080x1440`};oi.map(n=>{let o=n.replace(`x`,`:`);return n===`1x1`?`${o} \u2014 Square`:n===`16x9`?`${o} \u2014 Landscape`:n===`9x16`?`${o} \u2014 Mobile`:n===`2x1`?`${o} \u2014 Banner`:n===`3x4`?`${o} \u2014 Portrait`:o});var ni=`img`;function ri(n,o){if(n===ni)return At(o?.height??1080);let a=ai[n]??n,e=Number(a.split(`x`)[1]);return At(Number.isFinite(e)&&e>0?e:1080)}function At(n){return Math.min(8192,Math.max(64,n))}var ci=`GIPowglpdhasrmct`;function Ct(n,o){return n.fxOrder.includes(o)&&!n.hidden.includes(o)}function Ot(n){let o=[];for(let a of n)ci.includes(a)&&!o.includes(a)&&o.push(a);return o.join(``)}function hi(n){let o=[...Ot(n.fxOrder)].filter(a=>!n.hidden.includes(a));return!o.includes(`G`)&&!o.includes(`I`)?``:o.join(``)}Object.fromEntries([{code:`w`,keys:[`waveMode`,`waveSide`,`waveAmount`,`waveFrequency`,`waveFalloff`,`wavePhase`,`waveX`,`waveY`],name:`Waves`,lock:`waves`,family:`Warp`,onAdd:n=>n.waveAmount>0?{}:{waveAmount:.3}},{code:`g`,keys:[`glassMode`,`glassAmount`,`glassCount`,`glassRatio`,`glassAngle`,`glassProfile`,`glassBevel`,`glassShadow`,`glassHighlight`],name:`Glass`,lock:`glass`,family:`Warp`,onAdd:n=>n.glassMode>0?{}:{glassMode:1}},{code:`l`,keys:[`lightMode`,`lightAmount`,`lightSize`,`lightX`,`lightY`,`lightCount`,`lightFollow`,`light2X`,`light2Y`,`light3X`,`light3Y`,`light4X`,`light4Y`,`lightColor`,`lightColor2`,`lightColor3`,`lightColor4`,`lightGain`,`lightGain2`,`lightGain3`,`lightGain4`,`lightSpread`,`lightSpread2`,`lightSpread3`,`lightSpread4`],name:`Light`,lock:`light`,family:`Light`,onAdd:n=>n.lightMode>0?{}:{lightMode:1}},{code:`p`,keys:[`pixelate`,`pixelateRatio`,`pixelateGap`,`pixelateGroutColor`],name:`Pixelate`,lock:`pixelate`,family:`Raster`,onAdd:n=>n.pixelate>=2?{}:{pixelate:48}},{code:`d`,name:`Dither`,lock:`dither`,family:`Raster`,keys:[`ditherAlgo`,`ditherMatrix`,`ditherScale`,`ditherLevels`,`ditherStrength`,`ditherColorMode`,`ditherThreshold`,`ditherGamma`,`ditherInvert`,`ditherRatio`],onAdd:()=>({})},{code:`h`,name:`Halftone`,lock:`halftone`,family:`Print screens`,keys:[`halftoneSize`,`halftoneStyle`,`halftoneStagger`,`halftoneDotScale`,`halftoneColor`,`halftonePaper`,`halftonePaperColor`,`halftoneEmboss`,`halftoneWind`,`halftoneWindAngle`,`halftoneWobble`,`halftoneGlint`,`halftoneJitter`,`halftoneJitterSeed`,`halftoneAngle`,`halftoneGamma`,`halftoneInvert`,`halftoneRatio`,`halftoneInkColor`],onAdd:()=>({halftonePaperColor:ge})},{code:`a`,name:`ASCII`,lock:`ascii`,family:`Print screens`,keys:[`asciiSize`,`asciiRatio`,`asciiStyle`,`asciiColor`,`asciiBackground`,`asciiExposure`,`asciiFill`,`asciiDensity`,`asciiScatter`,`asciiGap`,`asciiAngle`,`asciiThreshold`,`asciiGamma`,`asciiInvert`,`asciiInkColor`,`asciiPaperColor`,`asciiOpacity`,`asciiBlend`],onAdd:()=>({asciiPaperColor:ge})},{code:`c`,keys:[`contourLevels`,`contourWeight`,`contourDash`,`contourGlow`,`contourColor`,`contourPaper`],name:`Contours`,lock:`contour`,family:`Print screens`,onAdd:()=>({contourPaperColor:ge})},{code:`t`,keys:[`toneGeoSize`,`toneGeoLow`,`toneGeoHigh`,`toneGeoInvert`,`toneGeoRules`,`toneGeoCross`,`toneGeoAngle`,`toneGeoGrid`,`toneGeoJitter`,`toneGeoJitterSeed`,`toneGeoWeight`,`toneGeoColor`,`toneGeoPaper`],name:`Hatch`,lock:`tonegeo`,family:`Print screens`,onAdd:()=>({toneGeoPaperColor:ge})},{code:`o`,keys:[`aberration`,`softness`,`lensDistort`],name:`Lens`,lock:`optics`,family:`Finish`,onAdd:n=>n.aberration>0||n.softness>0||n.lensDistort!==0?{}:{aberration:.25}},{code:`r`,keys:[`grain`,`grainSize`],name:`Grain`,lock:`grain`,family:`Finish`,onAdd:n=>n.grain>0?{}:{grain:.075}},{code:`s`,keys:[`paperAmount`,`paperColor`,`paperFibre`,`paperVignette`],name:`Paper`,lock:`paper`,family:`Finish`,onAdd:n=>n.paperAmount>0?{}:{paperAmount:.5}},{code:`m`,keys:[`pointerMode`,`pointerAmount`,`pointerSize`,`pointerFade`,`pointerDamping`,`pointerFlip`],name:`Pointer`,lock:`pointer`,family:`Interact`,onAdd:n=>n.pointerMode>=2?{}:{pointerMode:2}}].map(n=>[n.code,n]));function Mt(n){let s=n,{bake3d:o}=s,a=t(s,[`bake3d`]),e={};for(let[u,A]of Object.entries(a))A!==void 0&&(e[u]=A);let r$1=r(r({},Tt),e);return r$1.stops=(e.stops??Tt.stops).map(u=>r({},u)),r$1.fxOrder=Ot(r$1.fxOrder),r$1}var di=`#version 300 es
void main() {
  // fullscreen triangle, no buffers needed
  vec2 pos = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  gl_Position = vec4(pos * 2.0 - 1.0, 0.0, 1.0);
}
`;var It=`
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
`;var pi=`#version 300 es
precision highp float;

out vec4 outColor;

uniform sampler2D u_scene;    // the pass below (first pass: unused)
uniform vec2  u_resolution;
uniform float u_phase;        // 0..1 position in the seamless animation cycle
uniform float u_seed;

const float TAU = 6.283185307179586;

${It}

// Seamless drift: a circular orbit through noise space that lands back on
// its start every cycle and vanishes at phase 0, so still frames render
// identically with animation off.
vec2 drift(float k) {
  return vec2(cos(u_phase * TAU) - 1.0, sin(u_phase * TAU)) * k;
}
`;var fi=`
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
`;var mi=`
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
`;var gi=`
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
`;var vi=n=>`
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
  return mix(u_patternGapColor, ${n}(uv), mask);
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
    inner = ${n}((src + local) / vec2(float(cols), float(rows)));
  } else {
    inner = ${n}(uv);
  }
  return mix(u_patternGapColor, inner, mask);
}
`;function bi(n,o,a){switch(a){case`G`:return`vec3 ${n}(vec2 uv) {
  vec3 b = ${o}(uv);
  vec3 g = clamp(blendColors(u_gradientBlend, b, gradientColor(uv)), 0.0, 1.0);
  return mix(b, g, u_gradientOpacity);
}`;case`I`:return`vec3 ${n}(vec2 uv) {
  vec3 b = ${o}(uv);
  if (u_imageOn == 0) return b;
  vec4 img = imageColor(uv);
  vec3 blended = clamp(blendColors(u_imageBlend, b, img.rgb), 0.0, 1.0);
  return mix(b, blended, img.a * u_imageOpacity);
}`;default:return`vec3 ${n}(vec2 uv) { return patternColor(uv); }`}}function _i(n,o){let a=s=>n.includes(s),e=[pi];(a(`G`)||a(`I`))&&e.push(mi),a(`G`)&&e.push(fi),a(`I`)&&e.push(gi),e.push(o?`vec3 L0(vec2 uv) { return texture(u_scene, clamp(uv, 0.0, 1.0)).rgb; }`:`vec3 L0(vec2 uv) { return vec3(0.051, 0.051, 0.055); }`);let r=`L0`;return[...n].forEach((s,u)=>{let A=`L${u+1}_${s}`;s===`P`&&e.push(vi(r)),e.push(bi(A,r,s)),r=A}),e.push(`void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution; // 0..1, y up
  outColor = vec4(clamp(${r}(uv), 0.0, 1.0), 1.0);
}`),e.join(`
`)}var yi=`#version 300 es
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

${It}

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
`;var xi=`
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
`;var wi=`
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
`;var ki=`
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
`;var Ei=`
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
`;var Si=`
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
`;var Ti=`
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
`;var Ai=n=>`
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
  vec3 cellColor = ${n}(centreUv);
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
`;var Ci=(n,o=!1)=>`
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
  vec3 cellColor = ${n}(centreUv + jitter);
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
${o?`
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
`}`;var Mi=`
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
`;var Pi=`
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
`;var Ri=`
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
`;var Gi=`
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
`;var Li=`
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
`;var Oi=`#version 300 es
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
`;var Ii=`#version 300 es
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
`;var Fi=`
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
`;var Di=`
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
`;var Ni=`
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
`;var Bi=n=>`
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
  vec3 cellColor = ${n}(centre * cell / u_resolution);
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
`;function Pt(n,o,a,e,r=!1){switch(a){case`m`:return e===5&&r?`vec3 ${n}(vec2 uv) { return ${o}(uv); }`:e>=2&&e<=5?`vec3 ${n}(vec2 uv) { return ${o}(pointerMap(uv)); }`:`vec3 ${n}(vec2 uv) { return ${o}(uv); }`;case`w`:return`vec3 ${n}(vec2 uv) { return ${o}(waveMap(uv)); }`;case`p`:return`vec3 ${n}(vec2 uv) {
  vec2 cell;
  vec3 color = ${o}(pixelateMap(uv, cell));
  return mosaicGrout(color, cell);
}`;case`g`:return`vec3 ${n}(vec2 uv) {
  vec2 shade;
  vec3 color = ${o}(glassMap(uv, shade));
  color = mix(color, vec3(1.0), shade.x); // seam ridges lift to white
  color *= 1.0 - shade.y;                 // pane shading falls across each cell
  return color;
}`;case`l`:return`vec3 ${n}(vec2 uv) { return applyLight(${o}(uv), clamp(uv, 0.0, 1.0)); }`;case`d`:return`vec3 ${n}(vec2 uv) { return ditherColor(${o}(uv), uv * u_resolution); }`;case`r`:return`vec3 ${n}(vec2 uv) { return grainApply(${o}(uv), uv * u_resolution); }`;case`s`:return`vec3 ${n}(vec2 uv) { return paperApply(${o}(uv), uv * u_resolution); }`;case`c`:return`vec3 ${n}(vec2 uv) {
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
  vec3 c0 = ${o}(uv);
  vec3 s = (c0 + ${o}(uv + e) + ${o}(uv - e)
          + ${o}(uv + vec2(e.x, -e.y)) + ${o}(uv + vec2(-e.x, e.y))) * 0.2;
  return contourApply(c0, s, uv);
}`;case`o`:return`vec3 ${n}(vec2 uv) {
  // the glass curves first, then fringes: distortion bends where the
  // lens LOOKS, and the chromatic split is a property of the ray it
  // ends up taking. Doing it the other way round would fringe along
  // the undistorted radius and the colour edges would lean the wrong
  // way at the corners. lensDistort returns its argument untouched at
  // 0, so a look without it is bit-identical.
  vec2 cuv = clamp(lensDistort(uv), 0.0, 1.0);
  if (u_aberration <= 0.0) return ${o}(cuv);
  // offset R and B radially in opposite directions \u2014 the lens fringes
  // everything rendered beneath it; the cycle breathes the fringe width
  // like a lens easing focus (exactly neutral at phase 0)
  vec2 off = (cuv - 0.5) * u_aberration * 0.03 * breath(0.12);
  return vec3(
    ${o}(clamp(cuv + off, 0.0, 1.0)).r,
    ${o}(cuv).g,
    ${o}(clamp(cuv - off, 0.0, 1.0)).b
  );
}`;case`h`:return`vec3 ${n}(vec2 uv) { return halftoneApply(${o}(uv), uv); }`;case`t`:return`vec3 ${n}(vec2 uv) { return toneGeoApply(${o}(uv), uv); }`;default:return`vec3 ${n}(vec2 uv) { return asciiApply(${o}(uv), uv); }`}}function Xi(n,o=0){let a=[...n],e=f=>n.includes(f),r=o===5&&(()=>{for(let f=n.indexOf(`m`)-1;f>=0;f--)if(`ahtpd`.includes(a[f]))return a[f]===`a`;return!1})(),s=[yi];e(`w`)&&s.push(xi),e(`g`)&&s.push(wi),e(`p`)&&s.push(ki),e(`l`)&&s.push(Ei),e(`d`)&&s.push(Si),e(`o`)&&s.push(Ti),e(`r`)&&s.push(Di),e(`s`)&&s.push(Fi),e(`c`)&&s.push(Ni),e(`m`)&&o===2&&s.push(Mi),e(`m`)&&o===3&&s.push(Pi),e(`m`)&&o===4&&s.push(Ri),e(`m`)&&o===5&&s.push(r?Li:Gi),s.push(`vec3 plainSample(vec2 uv) {
  return texture(u_scene, clamp(uv, 0.0, 1.0)).rgb;
}`);let u=`plainSample`,A=`plainSample`,C=`plainSample`;if(e(`h`)||e(`a`)||e(`t`)){let f=`plainSample`;a.forEach((_,G)=>{if(_===`h`){u=f;return}if(_===`a`){A=f;return}if(_===`t`){C=f;return}let F=`S${G+1}_${_}`;s.push(Pt(F,f,_,o,r)),f=F})}e(`h`)&&s.push(Ai(u)),e(`a`)&&s.push(Ci(A,r)),e(`t`)&&s.push(Bi(C));let x=`plainSample`;return a.forEach((f,_)=>{let G=`F${_+1}_${f}`;s.push(Pt(G,x,f,o,r)),x=G}),s.push(`void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec3 color = ${x}(uv);
  outColor = vec4(clamp(color, 0.0, 1.0), 1.0);
}`),s.join(`
`)}var Ui=12;function zi(n,o,a){let e=n.getContext(`webgl2`,{antialias:!1,preserveDrawingBuffer:!0});if(!e)return null;let r=(t,i)=>{let h=e.createShader(t);if(e.shaderSource(h,i),e.compileShader(h),!e.getShaderParameter(h,e.COMPILE_STATUS)){let c=e.getShaderInfoLog(h);throw e.deleteShader(h),new Error(`Shader compile failed: ${c}`)}return h},s=t=>{let i=e.createProgram();if(e.attachShader(i,r(e.VERTEX_SHADER,a.vertex)),e.attachShader(i,r(e.FRAGMENT_SHADER,t)),e.linkProgram(i),!e.getProgramParameter(i,e.LINK_STATUS))throw new Error(`Program link failed: ${e.getProgramInfoLog(i)}`);return i},u=(t,i)=>{let h={};for(let c of i)h[c]=e.getUniformLocation(t,c);return h},A=t=>t?x(t):[1,1,1],C=(t,i,h)=>t===ge?St(i,h):t,x=t=>{let[i,h,c]=Zt(t,[255,255,255]);return[i/255,h/255,c/255]},f=`GIP`,_=`GIPowglpdhasrmct`,G=t=>{let i=[];for(let h of t.fxOrder)_.includes(h)&&!i.includes(h)&&!t.hidden.includes(h)&&i.push(h);return!i.includes(`G`)&&!i.includes(`I`)?``:i.join(``)},F=[`u_shape`,`u_warp`,`u_scale`,`u_detail`,`u_contrast`,`u_angle`,`u_center`,`u_stopCount`,`u_followCursor`,`u_followAmount`,`u_followPos`,`u_followIndex`,`u_gradientOpacity`,`u_gradientBlend`,`u_oklab`,`u_image`,`u_imageOn`,`u_imageAspect`,`u_imageOpacity`,`u_imageBlend`,`u_imageFit`,`u_imageFocal`,`u_imageZoom`,`u_patternSource`,`u_patternLayout`,`u_patternCols`,`u_patternRows`,`u_patternGap`,`u_patternRadius`,`u_patternGapColor`,`u_patternSeed`,`u_scene`,`u_resolution`,`u_seed`,`u_phase`,`u_aberration`,`u_lensDistort`,`u_lightMode`,`u_lightAmount`,`u_lightSize`,`u_lightCount`,`u_waveMode`,`u_waveAxis`,`u_waveAmount`,`u_waveFrequency`,`u_waveFalloff`,`u_wavePhase`,`u_waveCenter`,`u_glassMode`,`u_glassAmount`,`u_glassCount`,`u_glassShadow`,`u_glassHighlight`,`u_pixelate`,`u_ditherAlgo`,`u_ditherMatrix`,`u_ditherScale`,`u_ditherLevels`,`u_ditherStrength`,`u_ditherColorMode`,`u_ditherThreshold`,`u_ditherGamma`,`u_halftoneSize`,`u_halftoneStyle`,`u_halftoneStagger`,`u_halftoneDotScale`,`u_halftoneColor`,`u_halftonePaper`,`u_halftonePaperColor`,`u_halftoneInkColor`,`u_halftoneEmboss`,`u_halftoneWind`,`u_halftoneWindAngle`,`u_halftoneWobble`,`u_halftoneGlint`,`u_halftoneAngle`,`u_halftoneGamma`,`u_halftoneInvert`,`u_halftoneRatio`,`u_ditherRatio`,`u_pixelateRatio`,`u_glassRatio`,`u_glassAngle`,`u_glassProfile`,`u_glassBevel`,`u_halftoneJitter`,`u_halftoneJitterSeed`,`u_toneGeoJitter`,`u_toneGeoJitterSeed`,`u_pixelateGap`,`u_pixelateGrout`,`u_pixelateGroutAuto`,`u_pointerFlip`,`u_paperTint`,`u_paperFibre`,`u_paperVignette`,`u_asciiInvert`,`u_ditherInvert`,`u_toneGeoInvert`,`u_asciiAtlas`,`u_asciiChars`,`u_asciiSize`,`u_asciiRatio`,`u_asciiStyle`,`u_asciiColor`,`u_asciiBackground`,`u_asciiExposure`,`u_asciiFill`,`u_asciiDensity`,`u_asciiScatter`,`u_asciiGap`,`u_asciiAngle`,`u_asciiThreshold`,`u_asciiGamma`,`u_asciiInkColor`,`u_asciiPaperColor`,`u_asciiOpacity`,`u_asciiBlend`,`u_grain`,`u_grainSize`,`u_paperAmount`,`u_pixelScale`,`u_contourLevels`,`u_contourWeight`,`u_contourDash`,`u_contourGlow`,`u_contourColor`,`u_contourPaper`,`u_contourInkColor`,`u_contourPaperColor`,`u_toneGeoSize`,`u_toneGeoLow`,`u_toneGeoHigh`,`u_toneGeoAngle`,`u_toneGeoGrid`,`u_toneGeoRules`,`u_toneGeoCross`,`u_toneGeoInkColor`,`u_toneGeoPaperColor`,`u_toneGeoWeight`,`u_toneGeoColor`,`u_toneGeoPaper`,`u_pointer`,`u_pointerAmount`,`u_pointerSize`,`u_trail`,`u_markCell`,`u_markAngle`],L=()=>{let t=` .:-=+*#%@`,h=document.createElement(`canvas`);h.width=640,h.height=64;let c=h.getContext(`2d`);c.fillStyle=`#000`,c.fillRect(0,0,h.width,h.height),c.fillStyle=`#fff`,c.font=`51.2px ui-monospace, Menlo, monospace`,c.textAlign=`center`,c.textBaseline=`middle`;for(let d=0;d<10;d++)c.fillText(t[d],(d+.5)*64,34.56);let l=e.createTexture();return e.bindTexture(e.TEXTURE_2D,l),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,h),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),{texture:l,chars:10}},m=new Map,k=(t,i)=>{let h=m.get(t);if(!h){let c=s(i()),l=u(c,F);for(let d=0;d<8;d++)l[`u_colors[${d}]`]=e.getUniformLocation(c,`u_colors[${d}]`),l[`u_positions[${d}]`]=e.getUniformLocation(c,`u_positions[${d}]`);for(let d=0;d<4;d++)l[`u_lightPos[${d}]`]=e.getUniformLocation(c,`u_lightPos[${d}]`),l[`u_lightColor[${d}]`]=e.getUniformLocation(c,`u_lightColor[${d}]`),l[`u_lightGain[${d}]`]=e.getUniformLocation(c,`u_lightGain[${d}]`),l[`u_lightSpread[${d}]`]=e.getUniformLocation(c,`u_lightSpread[${d}]`);h={prog:c,u:l},m.set(t,h)}return h},g=L(),p=[e.createTexture(),e.createTexture()],M=[e.createFramebuffer(),e.createFramebuffer()],$=0,E=0,V=1,z=()=>{if(!($===n.width&&E===n.height)){$=n.width,E=n.height;for(let t=0;t<2;t++)e.bindTexture(e.TEXTURE_2D,p[t]),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,$,E,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,M[t]),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,p[t],0);e.bindFramebuffer(e.FRAMEBUFFER,null)}},be=t=>Math.max(t,.05),Ce=(t,i,h)=>{let c=d=>d*Math.PI/180,l=i.indexOf(`m`);for(let d=l-1;d>=0;d--)switch(i[d]){case`a`:{let y=Math.max(t.asciiSize*h,4),P=Math.max(Math.floor(n.width/y),4),j=Math.max(Math.floor(n.height/(y*t.asciiRatio)),4);return[n.width/P,n.height/j,c(t.asciiAngle)]}case`h`:{let y=Math.max(t.halftoneSize*h,4);return[y,y*be(t.halftoneRatio),c(t.halftoneAngle)]}case`t`:{let y=Math.max(t.toneGeoSize*h,8);return[y,y,c(t.toneGeoGrid)]}case`p`:{if(t.pixelate<2)break;let y=n.height/t.pixelate;return[y,y*be(t.pixelateRatio),0]}case`d`:{let y=Math.max(t.ditherScale*h,1);return[y,y*be(t.ditherRatio),0]}}return[0,0,0]},_e=()=>({tex:[null,null],fbo:[null,null],w:0,h:0}),tt=_e(),it=_e(),re=null,Bt=[`u_src`,`u_outRes`,`u_step`,`u_sigma`],ot=12,Xt=ot/3,Ut=t=>t<=24?1:t<=48?2:t<=96?4:8,zt=(t,i,h)=>{if(!(t.w===i&&t.h===h&&t.tex[0])){t.w=i,t.h=h;for(let c=0;c<2;c++)t.tex[c]??=e.createTexture(),t.fbo[c]??=e.createFramebuffer(),e.bindTexture(e.TEXTURE_2D,t.tex[c]),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,i,h,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,t.fbo[c]),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t.tex[c],0);e.bindFramebuffer(e.FRAMEBUFFER,null)}},at=(t,i,h,c,l)=>{let d=Ut(l),y=Math.max(1,Math.floor(h/d)),P=Math.max(1,Math.floor(c/d));if(zt(t,y,P),!re){let J=s(a.blur);re={prog:J,u:u(J,Bt)}}let Y=3*(Math.max(l,.5)/3/d)/ot,W=re;return e.useProgram(W.prog),e.viewport(0,0,y,P),e.uniform2f(W.u.u_outRes,y,P),e.uniform1f(W.u.u_sigma,Xt),e.activeTexture(e.TEXTURE6),e.bindFramebuffer(e.FRAMEBUFFER,t.fbo[0]),e.bindTexture(e.TEXTURE_2D,i),e.uniform1i(W.u.u_src,6),e.uniform2f(W.u.u_step,Y/y,0),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,t.fbo[1]),e.bindTexture(e.TEXTURE_2D,t.tex[0]),e.uniform1i(W.u.u_src,6),e.uniform2f(W.u.u_step,0,Y/P),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,null),t.tex[1]},se={key:``,tex:null},nt=()=>{se.key=``},Wt=t=>{if(!(t.imageBlur>0)||!b.ready||!b.width)return null;let i=`${b.width}x${b.height}|${t.imageBlur}|${t.imageSrc}`;if(se.key===i&&se.tex)return se.tex;let h=t.imageBlur*t.imageBlur*.06*Math.max(b.width,b.height),c=at(it,ye,b.width,b.height,h);return se.key=i,se.tex=c,c},v={disp:[null,null],vel:[null,null],fbo:[null,null],w:0,h:0,read:0,prog:null,lastTime:0,busyUntil:0},$t=[`u_prevDisp`,`u_prevVel`,`u_fieldRes`,`u_aspect`,`u_now`,`u_paint`,`u_radius`,`u_amount`,`u_stiff`,`u_frames`,`u_damping`,`u_flip`],rt=()=>{e.clearColor(128/255,0,128/255,0);for(let t=0;t<2;t++)e.bindFramebuffer(e.FRAMEBUFFER,v.fbo[t]),e.clear(e.COLOR_BUFFER_BIT);e.bindFramebuffer(e.FRAMEBUFFER,null)},qt=()=>{let t=256/Math.max(n.width,n.height,1),i=Math.max(16,Math.round(n.width*t)),h=Math.max(16,Math.round(n.height*t));if(!(v.w===i&&v.h===h&&v.disp[0])){v.w=i,v.h=h;for(let c=0;c<2;c++){v.disp[c]??=e.createTexture(),v.vel[c]??=e.createTexture(),v.fbo[c]??=e.createFramebuffer();for(let l of[v.disp[c],v.vel[c]])e.bindTexture(e.TEXTURE_2D,l),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,i,h,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);e.bindFramebuffer(e.FRAMEBUFFER,v.fbo[c]),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,v.disp[c],0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,v.vel[c],0),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1])}rt()}},Ht=(t,i)=>{if(qt(),!v.prog){let P=s(a.spring);v.prog={prog:P,u:u(P,$t)}}let h=performance.now(),c=h-v.lastTime;v.lastTime=h,c>400&&rt();let l=Math.min(c,100)/(1e3/60);i.strength>.01&&(v.busyUntil=h+2500);let d=1-v.read,y=v.prog;e.bindFramebuffer(e.FRAMEBUFFER,v.fbo[d]),e.viewport(0,0,v.w,v.h),e.useProgram(y.prog),e.activeTexture(e.TEXTURE4),e.bindTexture(e.TEXTURE_2D,v.disp[v.read]),e.uniform1i(y.u.u_prevDisp,4),e.activeTexture(e.TEXTURE5),e.bindTexture(e.TEXTURE_2D,v.vel[v.read]),e.uniform1i(y.u.u_prevVel,5),e.uniform2f(y.u.u_fieldRes,v.w,v.h),e.uniform1f(y.u.u_aspect,n.width/Math.max(n.height,1)),e.uniform2f(y.u.u_now,i.x,i.y),e.uniform1f(y.u.u_paint,i.strength),e.uniform1f(y.u.u_radius,t.pointerSize),e.uniform1f(y.u.u_amount,t.pointerAmount),e.uniform1f(y.u.u_stiff,t.pointerFade),e.uniform1f(y.u.u_damping,t.pointerDamping<0?-1:Math.min(1,t.pointerDamping)),e.uniform1f(y.u.u_flip,t.pointerFlip?1:0),e.uniform1f(y.u.u_frames,l),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,null),v.read=d},ye=e.createTexture(),b={src:``,kind:`img`,aspect:1,width:0,height:0,ready:!1},S=null,ee=null,Ue=!1,le=0,Me=t=>{t.pause(),t.removeAttribute(`src`),t.load()},ze=()=>{ee&&(Me(ee),ee=null),S&&(Me(S),S=null,Ue=!1)},We=()=>{!S||S.readyState<2||(e.bindTexture(e.TEXTURE_2D,ye),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),Ue?e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,S):(e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,S),Ue=!0),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),nt())},Yt=t=>new Promise((i,h)=>{let c=++le;ze(),b.src=t,b.kind=`img`,b.ready=!1;let l=new Image;l.onload=()=>{if(c!==le)return i();e.bindTexture(e.TEXTURE_2D,ye),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,l),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),b.aspect=l.naturalWidth/l.naturalHeight,b.width=l.naturalWidth,b.height=l.naturalHeight,b.ready=!0,nt(),o.onImageReady?.(),i()},l.onerror=()=>{console.error(`Image failed to load: ${t}`),h(new Error(`Image failed to load: ${t}`))},l.crossOrigin=`anonymous`,l.src=t}),Vt=t=>new Promise((i,h)=>{let c=++le;ze(),b.src=t,b.kind=`vid`,b.ready=!1;let l=document.createElement(`video`);l.muted=!0,l.playsInline=!0,l.loop=!0,l.preload=`auto`,l.crossOrigin=`anonymous`;let d=()=>{if(c!==le)return Me(l),i();if(!l.videoWidth||!l.videoHeight)return ee=null,Me(l),console.error(`File has no video track: ${t}`),h(new Error(`File has no video track: ${t}`));ee=null,S=l,b.aspect=l.videoWidth/Math.max(1,l.videoHeight),b.width=l.videoWidth,b.height=l.videoHeight,We(),b.ready=!0,l.addEventListener(`playing`,()=>{c===le&&o.onImageReady?.()}),o.videoAutoplay&&l.play().catch(()=>{}),o.onImageReady?.(),i()};l.onloadeddata=()=>{l.onloadeddata=null,Number.isFinite(l.duration)?d():(l.addEventListener(`seeked`,()=>{l.addEventListener(`seeked`,d,{once:!0}),l.currentTime=0},{once:!0}),l.currentTime=1e6)},l.onerror=()=>{ee===l&&(ee=null),console.error(`Video failed to load: ${t}`),h(new Error(`Video failed to load: ${t}`))},ee=l,l.src=t}),st=t=>t.imageKind===`vid`?Vt(t.imageSrc):Yt(t.imageSrc),Kt=(t,i,h,c,l,d,y,P)=>{e.uniform2f(t.u_resolution,n.width,n.height),e.uniform1f(t.u_phase,h),e.uniform1f(t.u_seed,i.seed),e.uniform1i(t.u_scene,1),e.uniform1i(t.u_shape,i.shape),e.uniform1f(t.u_warp,i.warp),e.uniform1f(t.u_scale,i.noiseScale),e.uniform1i(t.u_detail,i.detail),e.uniform1f(t.u_contrast,i.contrast),e.uniform1f(t.u_angle,i.angle*Math.PI/180),e.uniform2f(t.u_center,i.centerX,i.centerY),e.uniform1f(t.u_gradientOpacity,i.gradientOpacity),e.uniform1i(t.u_gradientBlend,i.gradientBlend),e.uniform1i(t.u_oklab,i.oklab?1:0);let j=[...i.stops].sort((B,ie)=>B.pos-ie.pos),Y=Math.min(j.length,8);e.uniform1i(t.u_stopCount,Y);for(let B=0;B<8;B++){let ie=j[Math.min(B,Y-1)],oe=x(ie.color);e.uniform3f(t[`u_colors[${B}]`],oe[0],oe[1],oe[2]),e.uniform1f(t[`u_positions[${B}]`],ie.pos/100)}let W=Math.round(i.gradientFollow),J=W!==0&&Y>1?j.indexOf(i.stops[W>0&&W<=Y?W-1:Lt(i.stops)]):-1;e.uniform2f(t.u_followCursor,l?l.x:.5,l?l.y:.5),e.uniform1f(t.u_followAmount,J>=0&&l?l.strength:0),e.uniform1f(t.u_followPos,J>=0?j[J].pos/100:0),e.uniform1i(t.u_followIndex,J),e.uniform1i(t.u_image,0),e.uniform1i(t.u_imageOn,c?1:0),e.uniform1f(t.u_imageAspect,b.aspect),e.uniform1f(t.u_imageOpacity,i.imageOpacity),e.uniform1i(t.u_imageBlend,i.imageBlend),e.uniform1i(t.u_imageFit,i.imageFit===1?1:0),e.uniform2f(t.u_imageFocal,i.imageFocalX,i.imageFocalY),e.uniform1f(t.u_imageZoom,i.imageZoom),e.uniform1i(t.u_patternSource,i.patternSource===`t`?1:0),e.uniform1i(t.u_patternLayout,Math.max(0,ii.indexOf(i.patternLayout))),e.uniform1i(t.u_patternCols,i.patternCols),e.uniform1i(t.u_patternRows,i.patternRows),e.uniform1f(t.u_patternGap,i.patternGap*P),e.uniform1f(t.u_patternRadius,i.patternRadius*P);let te=x(i.patternGapColor||j[0].color);e.uniform3f(t.u_patternGapColor,te[0],te[1],te[2]),e.uniform1f(t.u_patternSeed,i.patternSeed),e.uniform1f(t.u_aberration,i.aberration),e.uniform1f(t.u_lensDistort,Math.min(1,Math.max(-1,i.lensDistort))),e.uniform1i(t.u_lightMode,i.lightMode);let X=Math.min(4,Math.max(1,Math.round(i.lightCount)||1)),K=Math.min(X,Math.round(i.lightFollow)||0),D=K>0&&l?l.strength:0,Q=K===1&&X===1;e.uniform1f(t.u_lightAmount,Q?i.lightAmount*D:i.lightAmount),e.uniform1f(t.u_lightSize,i.lightSize),e.uniform1i(t.u_lightCount,X);let xe=[[i.lightX,i.lightY,i.lightColor,i.lightGain,i.lightSpread],[i.light2X,i.light2Y,i.lightColor2,i.lightGain2,i.lightSpread2],[i.light3X,i.light3Y,i.lightColor3,i.lightGain3,i.lightSpread3],[i.light4X,i.light4Y,i.lightColor4,i.lightGain4,i.lightSpread4]];for(let B=0;B<4;B++){let[ie,oe,jt,Jt,Qt]=xe[B],je=K===B+1;e.uniform2f(t[`u_lightPos[${B}]`],je&&l?ie+(l.x-ie)*D:ie,je&&l?oe+(l.y-oe)*D:oe);let Je=x(jt),Qe=je&&!Q?D:1;e.uniform3f(t[`u_lightColor[${B}]`],Je[0]*Qe,Je[1]*Qe,Je[2]*Qe),e.uniform1f(t[`u_lightGain[${B}]`],Math.min(2,Math.max(0,Jt))),e.uniform1f(t[`u_lightSpread[${B}]`],Math.min(2,Math.max(.05,Qt)))}let we=[[1,0],[-1,0],[0,-1],[0,1]],ke=we[Math.round(i.waveSide)]??we[0];e.uniform1i(t.u_waveMode,Math.round(i.waveMode)===1?1:0),e.uniform2f(t.u_waveAxis,ke[0],ke[1]),e.uniform1f(t.u_waveAmount,i.waveAmount),e.uniform1f(t.u_waveFrequency,i.waveFrequency),e.uniform1f(t.u_waveFalloff,i.waveFalloff),e.uniform1f(t.u_wavePhase,i.wavePhase),e.uniform2f(t.u_waveCenter,i.waveX,i.waveY),e.uniform1i(t.u_glassMode,i.glassMode),e.uniform1f(t.u_glassAmount,i.glassAmount),e.uniform1f(t.u_glassCount,i.glassCount),e.uniform1f(t.u_glassAngle,i.glassAngle*Math.PI/180),e.uniform1f(t.u_glassProfile,Math.min(5,Math.max(1,i.glassProfile))),e.uniform1f(t.u_glassBevel,Math.min(.4,Math.max(.005,i.glassBevel))),e.uniform1f(t.u_glassShadow,i.glassShadow),e.uniform1f(t.u_glassHighlight,i.glassHighlight),e.uniform1f(t.u_pixelate,i.pixelate),e.uniform1i(t.u_ditherAlgo,i.ditherAlgo),e.uniform1i(t.u_ditherMatrix,i.ditherMatrix),e.uniform1f(t.u_ditherScale,i.ditherScale*P),e.uniform1f(t.u_ditherLevels,i.ditherLevels),e.uniform1f(t.u_ditherStrength,i.ditherStrength),e.uniform1i(t.u_ditherColorMode,i.ditherColorMode),e.uniform1f(t.u_ditherThreshold,i.ditherThreshold),e.uniform1f(t.u_ditherGamma,i.ditherGamma),e.uniform1f(t.u_halftoneSize,i.halftoneSize*P),e.uniform1i(t.u_halftoneStyle,i.halftoneStyle),e.uniform1i(t.u_halftoneStagger,i.halftoneStagger?1:0),e.uniform1f(t.u_halftoneDotScale,i.halftoneDotScale),e.uniform1i(t.u_halftoneColor,i.halftoneColor),e.uniform1f(t.u_halftonePaper,i.halftonePaper);let ce=x(C(i.halftonePaperColor,i.stops,`h`));e.uniform3f(t.u_halftonePaperColor,ce[0],ce[1],ce[2]);let he=A(i.halftoneInkColor);e.uniform3f(t.u_halftoneInkColor,he[0],he[1],he[2]),e.uniform1f(t.u_halftoneEmboss,i.halftoneEmboss),e.uniform1f(t.u_halftoneWind,i.halftoneWind),e.uniform1f(t.u_halftoneWindAngle,i.halftoneWindAngle*Math.PI/180),e.uniform1f(t.u_halftoneWobble,i.halftoneWobble),e.uniform1f(t.u_halftoneGlint,i.halftoneGlint),e.uniform1f(t.u_halftoneJitter,Math.min(1,Math.max(0,i.halftoneJitter))),e.uniform1f(t.u_halftoneJitterSeed,Math.min(999,Math.max(0,Math.round(i.halftoneJitterSeed)))),e.uniform1f(t.u_halftoneAngle,i.halftoneAngle*Math.PI/180),e.uniform1f(t.u_halftoneGamma,i.halftoneGamma),e.uniform1i(t.u_halftoneInvert,i.halftoneInvert?1:0),e.uniform1f(t.u_halftoneRatio,i.halftoneRatio),e.uniform1f(t.u_ditherRatio,i.ditherRatio),e.uniform1f(t.u_pixelateRatio,i.pixelateRatio),e.uniform1f(t.u_pixelateGap,Math.min(.9,Math.max(0,i.pixelateGap))),e.uniform1i(t.u_pixelateGroutAuto,i.pixelateGroutColor?0:1);let ue=i.pixelateGroutColor?x(i.pixelateGroutColor):[0,0,0];e.uniform3f(t.u_pixelateGrout,ue[0],ue[1],ue[2]),e.uniform1f(t.u_glassRatio,i.glassRatio),e.uniform1i(t.u_asciiInvert,i.asciiInvert?1:0),e.uniform1i(t.u_ditherInvert,i.ditherInvert?1:0),e.uniform1i(t.u_toneGeoInvert,i.toneGeoInvert?1:0),e.uniform1i(t.u_asciiAtlas,2),e.uniform1f(t.u_asciiChars,g.chars),e.uniform1f(t.u_asciiSize,i.asciiSize*P),e.uniform1f(t.u_asciiRatio,i.asciiRatio),e.uniform1i(t.u_asciiStyle,i.asciiStyle),e.uniform1i(t.u_asciiColor,i.asciiColor),e.uniform1f(t.u_asciiBackground,i.asciiBackground),e.uniform1f(t.u_asciiExposure,i.asciiExposure),e.uniform1f(t.u_asciiFill,i.asciiFill),e.uniform1f(t.u_asciiDensity,i.asciiDensity),e.uniform1f(t.u_asciiScatter,i.asciiScatter),e.uniform1f(t.u_asciiGap,i.asciiGap),e.uniform1f(t.u_asciiAngle,i.asciiAngle*Math.PI/180),e.uniform1f(t.u_asciiThreshold,i.asciiThreshold),e.uniform1f(t.u_asciiGamma,i.asciiGamma);let Ee=A(i.asciiInkColor);e.uniform3f(t.u_asciiInkColor,Ee[0],Ee[1],Ee[2]);let $e=x(C(i.asciiPaperColor,i.stops,`a`)||`000000`);e.uniform3f(t.u_asciiPaperColor,$e[0],$e[1],$e[2]),e.uniform1f(t.u_asciiOpacity,i.asciiOpacity),e.uniform1i(t.u_asciiBlend,i.asciiBlend),e.uniform1f(t.u_grain,i.grain),e.uniform1f(t.u_grainSize,i.grainSize*P),e.uniform1f(t.u_paperAmount,i.paperAmount);let qe=i.paperColor?x(i.paperColor):[.98,.94,.86];e.uniform3f(t.u_paperTint,qe[0],qe[1],qe[2]),e.uniform1f(t.u_paperFibre,Math.min(4,Math.max(.25,i.paperFibre))),e.uniform1f(t.u_paperVignette,Math.min(2,Math.max(0,i.paperVignette))),e.uniform1f(t.u_pixelScale,P),e.uniform1f(t.u_contourLevels,i.contourLevels),e.uniform1f(t.u_contourWeight,i.contourWeight*P),e.uniform1f(t.u_contourDash,i.contourDash),e.uniform1f(t.u_contourGlow,i.contourGlow),e.uniform1i(t.u_contourColor,i.contourColor),e.uniform1f(t.u_contourPaper,i.contourPaper);let He=i.contourInkColor?x(i.contourInkColor):[.92,.92,.92];e.uniform3f(t.u_contourInkColor,He[0],He[1],He[2]);let Ye=i.contourPaperColor===ge?x(St(i.stops,`c`)):i.contourPaperColor?x(i.contourPaperColor):[.07,.07,.08];e.uniform3f(t.u_contourPaperColor,Ye[0],Ye[1],Ye[2]),e.uniform1f(t.u_toneGeoSize,i.toneGeoSize*P),e.uniform1f(t.u_toneGeoLow,i.toneGeoLow),e.uniform1f(t.u_toneGeoHigh,i.toneGeoHigh),e.uniform1f(t.u_toneGeoAngle,i.toneGeoAngle*Math.PI/180),e.uniform1f(t.u_toneGeoRules,i.toneGeoRules),e.uniform1f(t.u_toneGeoCross,i.toneGeoCross*Math.PI/180),e.uniform1f(t.u_toneGeoGrid,i.toneGeoGrid*Math.PI/180),e.uniform1f(t.u_toneGeoJitter,Math.min(1,Math.max(0,i.toneGeoJitter))),e.uniform1f(t.u_toneGeoJitterSeed,Math.min(999,Math.max(0,Math.round(i.toneGeoJitterSeed))));let Ve=A(i.toneGeoInkColor);e.uniform3f(t.u_toneGeoInkColor,Ve[0],Ve[1],Ve[2]);let Ke=x(C(i.toneGeoPaperColor,i.stops,`t`)||`ffffff`);e.uniform3f(t.u_toneGeoPaperColor,Ke[0],Ke[1],Ke[2]),e.uniform1f(t.u_toneGeoWeight,i.toneGeoWeight),e.uniform1i(t.u_toneGeoColor,i.toneGeoColor),e.uniform1f(t.u_toneGeoPaper,i.toneGeoPaper),e.uniform2f(t.u_pointer,l?l.x:.5,l?l.y:.5),e.uniform1f(t.u_pointerAmount,d&&l?d===5?i.pointerAmount:i.pointerAmount*l.strength:0),e.uniform1f(t.u_pointerSize,i.pointerSize),e.uniform1f(t.u_pointerFlip,i.pointerFlip?1:0),e.uniform1i(t.u_trail,4),e.uniform2f(t.u_markCell,y[0],y[1]),e.uniform1f(t.u_markAngle,y[2])};return{render:(t,i=0,h,c)=>{z();let l=G(t);t.fxOrder.includes(`I`)&&t.imageSrc&&t.imageSrc!==b.src&&st(t).catch(()=>{});let d=l.includes(`I`)&&b.ready&&b.src===t.imageSrc;o.videoAutoplay&&b.kind===`vid`&&S&&b.ready&&(d&&S.paused&&!S.ended?S.play().catch(()=>{}):!d&&!S.paused&&S.pause()),d&&b.kind===`vid`&&S&&!S.paused&&!S.ended&&We();let y=Wt(t)??ye;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,y),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,g.texture);let P=l.includes(`m`)&&t.pointerMode||0,Y=t.sizeAnchor===1&&!o.forcePixelScale?n.height/ri(t.aspect,b.ready&&b.width>0?{width:b.width,height:b.height}:null):V,W=t.softness*t.softness*56*Y,J=P===5?Ce(t,l,Y):[0,0,0];P===5&&h&&(Ht(t,h),e.activeTexture(e.TEXTURE4),e.bindTexture(e.TEXTURE_2D,v.disp[v.read]));let te=D=>f.includes(D),X=[];for(let D of l){let Q=X.length?X[X.length-1]:null;Q&&te(Q[0])===te(D)?X[X.length-1]+=D:X.push(D)}(!X.length||!te(X[0][0]))&&X.unshift(``);let K=null;X.forEach((D,Q)=>{let xe=Q===X.length-1,we=D===``||te(D[0]),ke=we?k(`L|${D}|${K?1:0}`,()=>a.layersFor(D,!!K)):k(`E|${D}|${P}`,()=>a.effectsFor(D,P)),ce=K&&!we&&D.includes(`o`)&&t.softness>0?at(tt,K,n.width,n.height,W):K;if(e.bindFramebuffer(e.FRAMEBUFFER,xe?null:M[Q%2]),xe&&c?.clip){let he=Ee=>Math.round(Math.min(1,Math.max(0,Ee))*n.width),ue=he(c.clip[0]);e.enable(e.SCISSOR_TEST),e.scissor(ue,0,Math.max(he(c.clip[1])-ue,0),n.height)}e.useProgram(ke.prog),e.viewport(0,0,n.width,n.height),ce&&(e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ce),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR)),Kt(ke.u,t,i,d,h,P,J,Y),e.drawArrays(e.TRIANGLES,0,3),K=xe?null:p[Q%2]}),c?.clip&&e.disable(e.SCISSOR_TEST)},resize(t,i,h){return V=h,n.width===t&&n.height===i?!1:(n.width=t,n.height=i,!0)},async preload(t){t.fxOrder.includes(`I`)&&t.imageSrc&&t.imageSrc!==b.src&&await st(t)},imageDims(){return b.ready&&b.width>0?{width:b.width,height:b.height}:null},videoActive(){return b.ready&&b.kind===`vid`&&!!S&&!S.paused&&!S.ended},pointerBusy(){return performance.now()<v.busyUntil},videoDuration(){return S&&Number.isFinite(S.duration)?S.duration:null},videoTime(){return S?.currentTime??0},seekVideo(t){let i=S;if(!i||i.readyState<1)return Promise.resolve();i.pause();let h=Number.isFinite(i.duration)?t%i.duration:t;return new Promise(c=>{let l=()=>{We(),c()};if(Math.abs(i.currentTime-h)<1e-4&&i.readyState>=2)return l();i.addEventListener(`seeked`,l,{once:!0}),i.currentTime=h})},playVideo(t=0){S&&(S.currentTime=t,S.play().catch(()=>{}))},dispose(){le++,ze(),e.deleteTexture(g.texture),e.deleteTexture(ye);for(let t=0;t<2;t++)e.deleteTexture(p[t]),e.deleteFramebuffer(M[t]),v.disp[t]&&e.deleteTexture(v.disp[t]),v.vel[t]&&e.deleteTexture(v.vel[t]),v.fbo[t]&&e.deleteFramebuffer(v.fbo[t]);v.prog&&e.deleteProgram(v.prog.prog);for(let t of[tt,it]){for(let i=0;i<2;i++)t.tex[i]&&e.deleteTexture(t.tex[i]),t.fbo[i]&&e.deleteFramebuffer(t.fbo[i]),t.tex[i]=null,t.fbo[i]=null;t.w=0,t.h=0}re&&(e.deleteProgram(re.prog),re=null);for(let{prog:t}of m.values())e.deleteProgram(t);m.clear(),o.releaseContext&&e.getExtension(`WEBGL_lose_context`)?.loseContext()}}}function Wi(n,o={}){return zi(n,o,{vertex:di,layersFor:_i,effectsFor:Xi,spring:Ii,blur:Oi})}var Ft=(()=>{class n{config=g.required();canvasRef=Xu.required(`canvas`);host=f(U);destroyRef=f(K);isBrowser=lt(f($e));renderer=null;design=Mt({});animateOn=!1;pointerOn=!1;target={x:.5,y:.5,strength:0};eased={x:.5,y:.5,strength:0};phase=0;raf=0;last=0;onscreen=!0;tabVisible=!0;zone=null;playsFootage=!1;constructor(){Ee(()=>{let a=this.config();this.renderer&&this.apply(a)}),Qe(()=>{let a=this.canvasRef().nativeElement;if(this.playsFootage=!matchMedia(`(prefers-reduced-motion: reduce)`).matches,this.renderer=Wi(a,{onImageReady:()=>{this.draw(),this.wake()},videoAutoplay:this.playsFootage}),!this.renderer)return;let e=new ResizeObserver(this.resize);e.observe(this.host.nativeElement);let r=new IntersectionObserver(s=>{this.onscreen=s[s.length-1].isIntersecting,this.syncVideo(),this.wake()});r.observe(this.host.nativeElement),document.addEventListener(`visibilitychange`,this.onVisibility),this.zone=this.host.nativeElement.parentElement,this.zone?.addEventListener(`pointermove`,this.onPointerMove),this.zone?.addEventListener(`pointerleave`,this.onPointerLeave),this.destroyRef.onDestroy(()=>{e.disconnect(),r.disconnect(),document.removeEventListener(`visibilitychange`,this.onVisibility),this.zone?.removeEventListener(`pointermove`,this.onPointerMove),this.zone?.removeEventListener(`pointerleave`,this.onPointerLeave),this.zone=null,cancelAnimationFrame(this.raf),this.renderer?.dispose(),this.renderer=null}),this.apply(this.config())})}apply(a){this.design=Mt(a);let e=this.design,r=matchMedia(`(prefers-reduced-motion: reduce)`).matches;this.animateOn=e.animate&&!r;let s=e.pointerMode>0&&hi(e).includes(`m`)||Ct(e,`G`)&&e.gradientFollow!==0&&e.stops.length>1;this.pointerOn=s&&!r&&matchMedia(`(hover: hover)`).matches;let u=[this.renderer.preload(e).catch(()=>{})];Promise.all(u).then(()=>{this.resize(),this.syncVideo(),this.draw(),this.wake()})}draw=()=>{this.renderer?.render(this.design,this.phase,this.eased),this.syncVideo()};syncVideo(a=this.onscreen&&this.tabVisible){let e=this.renderer;!e||!this.playsFootage||this.design.imageKind!==`vid`||!Ct(this.design,`I`)||a!==e.videoActive()&&(a?e.playVideo(e.videoTime()):e.seekVideo(e.videoTime()))}needsFrames(){return this.onscreen&&this.tabVisible&&(this.animateOn||this.renderer?.videoActive()===!0||this.pointerOn&&(this.target.strength>0||this.eased.strength>.003||this.renderer?.pointerBusy()===!0))}tick=a=>{if(this.raf=0,!this.needsFrames()){this.target.strength===0&&this.eased.strength>0&&(this.eased.strength=0,this.draw()),this.last=0;return}let e=this.last?(a-this.last)/1e3:0;if(this.last=a,this.animateOn&&e&&(this.phase=(this.phase+e*this.design.animSpeed/Ui)%1),this.pointerOn&&e){let r=1-Math.exp(-e*10),s=1-Math.exp(-e*6);this.eased.x+=(this.target.x-this.eased.x)*r,this.eased.y+=(this.target.y-this.eased.y)*r,this.eased.strength+=(this.target.strength-this.eased.strength)*s}this.draw(),this.raf=requestAnimationFrame(this.tick)};wake(){!this.raf&&this.needsFrames()&&(this.last=0,this.raf=requestAnimationFrame(this.tick))}resize=()=>{let a=this.host.nativeElement.getBoundingClientRect(),e=Math.min(devicePixelRatio||1,2);this.renderer?.resize(Math.max(1,Math.round(a.width*e)),Math.max(1,Math.round(a.height*e)),e)&&this.draw()};onPointerMove=a=>{let e=this.host.nativeElement.getBoundingClientRect();this.target.x=(a.clientX-e.left)/Math.max(1,e.width),this.target.y=1-(a.clientY-e.top)/Math.max(1,e.height),this.target.strength=1,this.wake()};onPointerLeave=()=>{this.target.strength=0,this.wake()};onVisibility=()=>{this.tabVisible=!document.hidden,this.syncVideo(),this.wake()};static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let a=[`canvas`];return le({type:n,selectors:[[`oddity-canvas`]],viewQuery:function(r,s){r&1&&Yr(s.canvasRef,a,5),r&2&&Qt()},hostAttrs:[`aria-hidden`,`true`],inputs:{config:[1,`config`]},decls:2,vars:0,consts:[[`canvas`,``]],template:function(r,s){r&1&&Un(0,`canvas`,null,0)},styles:[`[_nghost-%COMP%]{position:absolute;inset:0;display:block;overflow:hidden;pointer-events:none}canvas[_ngcontent-%COMP%]{display:block;width:100%;height:100%}`]})})()}return n})();var R=(n,o,a)=>Math.max(o,Math.min(a,n));var Xe=class{x=0;y=0;vx=0;vy=0;angle=0;spin=0;stretchAngle=0;scaleX=.74;scaleY=.74;state=`asleep`;mood=`primary`;impactWall=`bottom`;contact;impactSerial=0;bounds={left:0,right:0,top:0,bottom:0,cruiseY:0};initialized=!1;clock=0;age=0;grounded=0;impact=0;agitation=0;quiet=0;moodTime=0;calmReturn=!1;recoveryAngle=0;courseX=0;courseY=0;steeringFromNudge=!1;resize(o){this.bounds=o,(!this.initialized||this.state===`asleep`)&&(this.x=this.homeX(),this.y=this.homeY(),this.initialized=!0),this.x=R(this.x,o.left,o.right),this.y=R(this.y,o.top,o.bottom)}wake(){this.state===`asleep`&&(this.state=`waking`,this.age=0)}grab(){this.state=`dragging`,this.age=this.vx=this.vy=this.impact=0,this.scaleX=this.scaleY=1,this.stretchAngle=0}drag(o,a){this.x=R(o,this.bounds.left,this.bounds.right),this.y=R(a,this.bounds.top,this.bounds.bottom)}throw(o,a,e=0,r){this.spin=R(e,-25,25);let s=Math.hypot(o,a)>=650&&(r===void 0||r>=28);this.state=s||this.mood===`danger`?`falling`:`coasting`,this.vx=R(o,-2200,2200),this.vy=R(a,-2200,2200),this.age=this.grounded=this.quiet=0;let u=Math.min(1,Math.hypot(this.vx,this.vy)/1200);this.agitation=Math.min(1.5,this.agitation+(u<.25?.04:.18+u*.28)),this.agitation>=.85||this.mood===`danger`?this.setMood(`danger`,6.5):u>=.45?this.setMood(`warn`,2.4):this.mood!==`info`&&this.setMood(`success`,2.6)}nudge(o=0,a=0,e=this.spin){this.state=this.mood===`danger`?`falling`:`coasting`,this.vx=R(o,-650,650),this.vy=R(a,-650,650),this.spin=R(e,-25,25),this.age=0}drop(){this.state=`falling`,this.age=this.grounded=0}fly(){this.steeringFromNudge=!1,this.state=`flying`,this.age=this.grounded=this.impact=0,this.vy=this.mood===`danger`?-600:-220,this.courseX=this.x,this.courseY=this.y}returnHome(o=!1){if(o){this.sleep();return}this.mood!==`danger`&&(this.state=`returning`,this.age=0)}park(){this.vx=this.vy=this.impact=0}step(o){let a=R(o,0,.15);for(;a>1e-8;){let e=Math.min(a,.008333333333333333);this.advance(e),a-=e}}advance(o){if(this.state===`asleep`)return;if(this.clock+=o,this.age+=o,this.quiet+=o,this.updateMood(o),this.state===`dragging`){this.age>1.4&&this.mood===`primary`&&this.setMood(`success`,2);return}this.impact*=Math.exp(-o*12),this.updateDeformation();let a=this.bounds;if(this.state===`waking`){let r=Math.min(1,this.age/.65),s=r*r*(3-2*r);this.x=this.homeX(),this.y=Math.max(a.top,this.homeY()-s*32),this.scaleX=this.scaleY=.74+s*.26,this.angle=Math.sin(r*Math.PI)*-.16,r===1&&this.fly();return}if(this.state===`recovering`){let r=R((this.age-.25)/.6,0,1);this.angle=this.recoveryAngle+Math.sin(r*Math.PI*8)*Math.sin(r*Math.PI)*.24,this.scaleX=1+Math.sin(r*Math.PI*6)*.07,this.scaleY=2-this.scaleX,this.age>=1.05&&(this.calmReturn?this.returnHome():this.fly());return}if(this.state===`returning`){this.vx+=((this.homeX()-this.x)*15-this.vx*7.5)*o,this.vy+=((this.homeY()-this.y)*15-this.vy*7.5)*o;let r=Math.hypot(this.homeX()-this.x,this.homeY()-this.y);if(this.scaleX=this.scaleY=.74+Math.min(1,r/75)*.26,this.angle*=Math.exp(-o*6),r<1.2&&Math.hypot(this.vx,this.vy)<6||this.age>5){this.sleep();return}}else if(this.state===`coasting`)this.vx*=Math.exp(-o*.6),this.vy*=Math.exp(-o*.6),this.age>.9&&(this.courseX=this.x,this.courseY=this.y,this.steeringFromNudge=!0,this.state=`flying`,this.age=0);else if(this.state===`flying`&&this.mood!==`danger`){let r=a.right-a.left,s=a.left+r*(.5+Math.sin(this.clock*.48+.8)*.4),u=R(a.cruiseY+Math.sin(this.clock*.9)*48,a.top,a.bottom-24),A=Math.min(1,this.age/2.2),C=A*A*(3-2*A),x=this.courseX+(s-this.courseX)*C,f=this.courseY+(u-this.courseY)*C;if(this.steeringFromNudge){let _=1-Math.exp(-o*2.2*C);this.vx+=(R((s-this.x)*.7,-200,200)-this.vx)*_,this.vy+=(R((u-this.y)*.7,-150,150)-this.vy)*_}else this.vx+=((x-this.x)*3.6-this.vx*3.2)*o,this.vy+=((f-this.y)*4-this.vy*3)*o;this.age>10&&this.mood===`primary`&&this.returnHome()}else this.vy+=(this.mood===`danger`?2150:1850)*o,this.vx*=Math.exp(-o*.16);this.x+=this.vx*o,this.y+=this.vy*o,this.state!==`returning`&&(this.angle+=this.spin*o,this.spin*=Math.exp(-o*(this.state===`falling`||this.state===`coasting`?.28:1.2)));let e=this.mood===`danger`;(this.x<a.left||this.x>a.right)&&(this.hit(this.x<a.left?`left`:`right`,Math.abs(this.vx)),this.x=R(this.x,a.left,a.right),this.vx*=e?-.97:-.82,this.spin=this.spin*.8+this.vy*(this.impactWall===`left`?.003:-.003)),this.y<a.top&&(this.hit(`top`,Math.abs(this.vy)),this.y=a.top,this.vy=Math.abs(this.vy)*(e?.9:.7),this.spin=this.spin*.8-this.vx*.003),this.y>=a.bottom&&(this.y=a.bottom,this.vy>75&&(this.spin=this.spin*.8+this.vx*.003),this.hit(`bottom`,this.vy),e?(this.vy=-R(Math.abs(this.vy)*.94,680,1100),this.vx=(Math.sign(this.vx)||(this.x>(a.left+a.right)/2?-1:1))*Math.max(850,Math.abs(this.vx)*.97)):this.vy>75?(this.vy*=-.62,this.vx*=.8):(this.vy=0,this.vx*=Math.exp(-o*9),this.grounded+=o),!e&&this.state===`falling`&&this.grounded>.13&&(this.state=`recovering`,this.recoveryAngle=this.angle,this.age=this.vx=this.vy=this.spin=0))}updateMood(o){this.quiet>2&&(this.agitation=Math.max(0,this.agitation-o*.1)),!(this.moodTime<=0)&&(this.moodTime-=o,!(this.moodTime>0)&&(this.mood===`danger`?(this.agitation=.12,this.calmReturn=!0,this.setMood(`info`,3.5),this.state===`flying`&&(this.state=`falling`),this.vx*=.65,this.vy*=.65):(this.setMood(`primary`,0),this.calmReturn&&this.state===`flying`&&this.returnHome())))}hit(o,a){a<120||(this.impact=Math.min(1,a/650),this.impactWall=o,this.impactSerial++,this.updateDeformation())}updateDeformation(){let o=Math.min(1,Math.hypot(this.vx,this.vy)/1300);if(this.contact=this.impact>.03?this.impactWall:void 0,this.impact>.03){let a=this.impactWall===`left`||this.impactWall===`right`;this.stretchAngle=0,this.scaleX=1+this.impact*(a?-.3:.34),this.scaleY=1+this.impact*(a?.3:-.27)}else this.state===`falling`||this.state===`flying`&&this.mood===`danger`?(this.stretchAngle=Math.atan2(this.vy,this.vx)-Math.PI/2,this.scaleX=1-o*.12,this.scaleY=1+o*.2):(this.stretchAngle=0,this.scaleX=this.scaleY=1)}setMood(o,a){this.mood=o,this.moodTime=a}sleep(){this.state=`asleep`,this.x=this.homeX(),this.y=this.homeY(),this.vx=this.vy=this.angle=this.spin=this.stretchAngle=this.agitation=this.moodTime=0,this.mood=`primary`,this.calmReturn=!1,this.scaleX=this.scaleY=.74}homeX(){return R(this.bounds.homeX??this.bounds.left+(this.bounds.right-this.bounds.left)*.76,this.bounds.left,this.bounds.right)}homeY(){return R(this.bounds.homeY??this.bounds.cruiseY,this.bounds.top,this.bounds.bottom)}};function $i(n,o){let a=n[n.length-1];if(!a||o-a.time>120)return[0,0];let e=n.filter(_=>a.time-_.time<=100);if(e.length<2)return[0,0];let r=e[0].time,s=e.reduce((_,G)=>_+(G.time-r)/1e3,0)/e.length,u=e.reduce((_,G)=>_+G.x,0)/e.length,A=e.reduce((_,G)=>_+G.y,0)/e.length,C=0,x=0,f=0;for(let _ of e){let G=(_.time-r)/1e3-s;C+=G*G,x+=G*(_.x-u),f+=G*(_.y-A)}return C>1e-7?[R(x/C,-2200,2200),R(f/C,-2200,2200)]:[R((a.x-e[0].x)/.008,-2200,2200),R((a.y-e[0].y)/.008,-2200,2200)]}function et(n,o){let a=n[n.length-1],[e,r]=$i(n,a?Math.min(o,a.time+120):o);if(!a||o-a.time>180)return{vx:0,vy:0,spin:0,travel:0};let s=n.filter(L=>a.time-L.time<=90),u=(L,m)=>{if(s.length<3)return m;let k=s.map(p=>({t:(p.time-a.time)/1e3,p:p[L]})),g=Array.from({length:3},(p,M)=>Array.from({length:4},($,E)=>E===3?k.reduce((V,z)=>V+z.p*Math.pow(z.t,M),0):k.reduce((V,z)=>V+Math.pow(z.t,M+E),0)));for(let p=0;p<3;p++){let M=p;for(let E=p+1;E<3;E++)Math.abs(g[E][p])>Math.abs(g[M][p])&&(M=E);if(Math.abs(g[M][p])<1e-10)return m;[g[p],g[M]]=[g[M],g[p]];let $=g[p][p];for(let E=p;E<4;E++)g[p][E]/=$;for(let E=0;E<3;E++)if(E!==p){let V=g[E][p];for(let z=p;z<4;z++)g[E][z]-=V*g[p][z]}}return R(g[1][3],-2200,2200)},A=0,C=0,x=0;for(let L=1;L<s.length;L++)x+=Math.hypot(s[L].x-s[L-1].x,s[L].y-s[L-1].y);for(let L=2;L<s.length;L++){let m=s[L-2],k=s[L-1],g=s[L],p=k.x-m.x,M=k.y-m.y,$=g.x-k.x,E=g.y-k.y;Math.hypot(p,M)<.4||Math.hypot($,E)<.4||(A+=Math.atan2(p*E-M*$,p*$+M*E),C+=(g.time-m.time)/2e3)}let f=u(`x`,e),_=u(`y`,r);Math.hypot(f,_)<Math.hypot(e,r)*.65&&(f=e*.8,_=r*.8);let F=Math.hypot(f,_);return x>=4&&F>0&&F<80&&(f=f/F*80,_=_/F*80),{vx:f,vy:_,spin:x>12&&C>.01&&Math.abs(A)>.1?R(A/C,-25,25):0,travel:x}}var Hi=[`orb`];var Yi=[`plane`];var Vi=[`shadow`];var Ki=[`impact`];var ji=[`charge`];var Ji=[`ribbonCore`];var Qi=[`ribbonGlow`];var Zi=[`ribbonTail`];var eo=[`probes`];var H=26;var Dt=[`primary`,`success`,`warn`,`danger`,`info`];var to=Array.from({length:25},(n,o)=>{let a=o/24*Math.PI*2;return{u:a,cos:Math.cos(a),sin:Math.sin(a)}});var ve=class n{theme=f(si);ready=_(!1);state=_(`asleep`);mood=_(`primary`);reducedMotion=f(xe).isReducedMotion;message=y(()=>this.state()===`asleep`?`A little light lives in your ${this.theme.paletteLabel().toLowerCase()} theme.`:this.mood()===`danger`?`Too many throws. Someone is cross.`:this.mood()===`info`?`Taking a breath. Give it a moment.`:this.mood()===`warn`?`Easy now. This little light has feelings.`:this.mood()===`success`?`That was gentle. A happy little light.`:this.state()===`returning`?`Time to curl up in its swatch.`:this.state()===`recovering`?`A little wobble. All better.`:`Curious? Catch it. Be kind.`);showWakeHint=y(()=>this.ready()&&this.state()===`asleep`&&!this.reducedMotion());stage=g.required();cards=g.required();zone=f(j);orb=Xu.required(`orb`);plane=Xu.required(`plane`);shadow=Xu.required(`shadow`);impact=Xu.required(`impact`);charge=Xu.required(`charge`);ribbonCore=Xu.required(`ribbonCore`);ribbonGlow=Xu.required(`ribbonGlow`);ribbonTail=Xu.required(`ribbonTail`);probes=Xu.required(`probes`);physics=new Xe;view;home;scene;pose;colorPose;lastColor=``;lastCharge=-1;lastShadow=``;lastPointerPoint;shadowPose;chargePose;ribbonTime=0;lastRibbon=-1/0;lightLevel=0;lastPose=``;lastScene=``;lastGeometry=``;stayHome=!1;impactAnimation;events;resize;intersection;frame;wakeTimer;lastTime;lastLight=-1/0;lastImpact=0;originX=0;originY=0;floor=0;dirtyGeometry=!0;colorsDirty=!0;visible=!0;homeVisible=!1;motionEnabled=!0;pointer;offsetX=0;offsetY=0;fromHome=!1;dragDistance=0;samples=[];colors=Object.fromEntries(Dt.map(o=>[o,[255,255,255]]));rgb=[255,255,255];color=`rgb(255 255 255)`;invalidateGeometry=()=>{this.dirtyGeometry=!0,this.start(!0)};visibilityChange=()=>{!this.visible||this.stage().ownerDocument.hidden?(this.cancelDrag(),this.stop(),this.clearWake()):(this.dirtyGeometry=!0,this.start(!0))};wake=()=>{!this.motionEnabled||this.physics.state!==`asleep`||(this.stayHome=!1,this.clearWake(),this.physics.wake(),this.start())};grab=o=>{if(this.pointer!==void 0||!o.isPrimary||o.button!==0)return;o.preventDefault(),this.dirtyGeometry&&this.measure(),this.clearWake();let a=this.orb().nativeElement;a.focus({preventScroll:!0}),this.pointer=o.pointerId,this.offsetX=o.clientX-this.originX-this.physics.x,this.offsetY=o.clientY-this.originY-this.physics.y,this.fromHome=this.physics.state===`asleep`||this.physics.state===`waking`,this.dragDistance=0,this.lastPointerPoint={x:o.clientX,y:o.clientY,time:o.timeStamp},this.samples=[this.lastPointerPoint],this.stayHome=!1,this.physics.grab(),this.motionEnabled||(this.lightLevel=1),a.setPointerCapture(o.pointerId),this.paint(performance.now(),!0),this.start()};drag=o=>{if(o.pointerId!==this.pointer)return;this.dirtyGeometry&&this.measure(),this.physics.drag(o.clientX-this.originX-this.offsetX,o.clientY-this.originY-this.offsetY);let a=o.getCoalescedEvents?.()??[];for(let r of a.length?a:[o]){let s=this.samples[this.samples.length-1],u=this.lastPointerPoint??s;this.dragDistance+=Math.hypot(r.clientX-u.x,r.clientY-u.y),this.lastPointerPoint={x:r.clientX,y:r.clientY,time:r.timeStamp},(!s||r.timeStamp-s.time>=3||o.type===`pointerup`)&&(!s||Math.hypot(r.clientX-s.x,r.clientY-s.y)>.1)&&this.samples.push(this.lastPointerPoint)}let e=this.samples[this.samples.length-1];this.samples=this.samples.filter(r=>e.time-r.time<=120).slice(-64),this.motionEnabled||this.paint(performance.now())};release=o=>{if(o.pointerId!==this.pointer)return;this.drag(o);let{vx:a,vy:e,spin:r,travel:s}=et(this.samples,o.timeStamp),u=this.fromHome&&this.dragDistance<6;this.endPointer(),this.motionEnabled?u?this.physics.fly():this.physics.throw(a,e,r,s):this.physics.park(),this.paint(performance.now(),!0),this.start()};cancelDrag=o=>{if(this.pointer===void 0)return;let a=et(this.samples,o?.timeStamp||performance.now());this.endPointer(),this.physics.nudge(a.vx,a.vy,a.spin),this.motionEnabled||this.physics.park(),this.start()};tick=o=>{this.frame=void 0,this.dirtyGeometry&&this.measure(),this.colorsDirty&&this.readColors();let a=this.lastTime===void 0?1/60:Math.min(.15,(o-this.lastTime)/1e3);this.motionEnabled&&(this.physics.step(a),this.ribbonTime+=a);let e=this.physics.state,r=e===`asleep`?0:e===`waking`||e===`returning`?Math.max(0,Math.min(1,(this.physics.scaleX-.74)/.26)):1;this.lightLevel+=(r-this.lightLevel)*(1-Math.exp(-a*(r>this.lightLevel?2.5:4))),r===0&&this.lightLevel<.003&&(this.lightLevel=0),this.lastTime=this.motionEnabled?o:void 0,this.paint(o),e===`asleep`&&this.scheduleWake(),e!==`asleep`||this.lightLevel>0?this.start():this.lastTime=void 0};constructor(){Qe(()=>this.zone.runOutsideAngular(()=>this.initialize())),Ee(()=>{this.theme.palette(),this.theme.activeTheme(),this.colorsDirty=!0,this.zone.runOutsideAngular(()=>this.start(!0))}),Ee(()=>{this.motionEnabled=!this.reducedMotion(),this.zone.runOutsideAngular(()=>{this.view&&(this.motionEnabled||(this.cancelDrag(),this.physics.returnHome(!0),this.lightLevel=0,this.stop(),this.clearWake()),this.start(!0))})}),f(K).onDestroy(()=>{this.stop(),this.clearWake(),this.events?.abort(),this.resize?.disconnect(),this.intersection?.disconnect(),this.pose?.cancel(),this.colorPose?.cancel(),this.shadowPose?.cancel(),this.chargePose?.cancel(),this.impactAnimation?.cancel(),this.scene?.destroy()})}initialize(){let o=this.stage(),a=o.ownerDocument.defaultView;if(!a)return;this.view=a,this.home=this.cards().querySelector(`.orb-nest-well`)??this.cards(),this.events=new AbortController;let e=this.events.signal,r=this.orb().nativeElement;this.pose=r.animate([{transform:`none`}],{duration:1,fill:`both`}),this.colorPose=r.animate([{color:this.color},{color:this.color}],{duration:1,fill:`both`}),this.shadowPose=this.shadow().nativeElement.animate([{opacity:0}],{duration:1,fill:`both`}),this.chargePose=this.charge().nativeElement.animate([{opacity:0},{opacity:0}],{duration:1,fill:`both`});for(let s of[this.pose,this.shadowPose,this.chargePose,this.colorPose])s.pause(),s.currentTime=0;this.scene=_v(o),r.addEventListener(`pointerdown`,this.grab,{signal:e}),r.addEventListener(`pointermove`,this.drag,{signal:e}),r.addEventListener(`pointerup`,this.release,{signal:e}),r.addEventListener(`pointercancel`,this.cancelDrag,{signal:e}),r.addEventListener(`lostpointercapture`,this.cancelDrag,{signal:e}),r.addEventListener(`pointerenter`,this.wake,{signal:e}),r.addEventListener(`focus`,this.wake,{signal:e}),a.addEventListener(`blur`,this.cancelDrag,{signal:e}),a.addEventListener(`resize`,this.invalidateGeometry,{signal:e,passive:!0}),o.ownerDocument.addEventListener(`scroll`,this.invalidateGeometry,{signal:e,capture:!0,passive:!0}),o.ownerDocument.addEventListener(`visibilitychange`,this.visibilityChange,{signal:e}),this.resize=new ResizeObserver(this.invalidateGeometry),this.resize.observe(o),this.resize.observe(this.cards()),this.intersection=new IntersectionObserver(s=>{for(let u of s)u.target===o&&(this.visible=u.isIntersecting),u.target===this.home&&(this.homeVisible=u.isIntersecting);this.visibilityChange()}),this.intersection.observe(o),this.intersection.observe(this.home),this.measure(),this.readColors(),this.paint(performance.now(),!0),this.ready.set(!0),this.scheduleWake()}bringHome(){this.physics.mood!==`danger`&&(this.stayHome=!0,this.clearWake(),this.cancelDrag(),this.physics.returnHome(!this.motionEnabled),this.motionEnabled||(this.lightLevel=0),this.paint(performance.now(),!0),this.start(!0))}toss(o){o.detail!==0||!this.motionEnabled||(this.clearWake(),this.physics.state===`asleep`?this.physics.wake():this.physics.throw(160,-650),this.start())}keydown(o){if(o.key===`Escape`){this.bringHome();return}else if(o.key.startsWith(`Arrow`)){o.preventDefault(),this.clearWake();let a=o.key===`ArrowLeft`?-30:o.key===`ArrowRight`?30:0,e=o.key===`ArrowUp`?-30:o.key===`ArrowDown`?30:0;this.physics.fly(),this.physics.drag(this.physics.x+a,this.physics.y+e),this.motionEnabled?this.physics.throw(a*10,e*10-220):(this.physics.park(),this.lightLevel=1)}else return;this.paint(performance.now(),!0),this.start()}measure(){let o=this.plane().nativeElement.getBoundingClientRect(),a=this.cards().getBoundingClientRect(),e=this.home?.getBoundingClientRect()??a,r=`${o.left}:${o.top}:${o.width}:${o.height}:${a.left}:${a.top}:${a.width}:${a.height}:${e.left}:${e.top}:${e.width}:${e.height}`;if(r===this.lastGeometry){this.dirtyGeometry=!1;return}this.lastGeometry=r,this.originX=o.left,this.originY=o.top,this.floor=o.height-H-2,this.physics.resize({left:H+2,right:Math.max(H+2,o.width-H-2),top:H+2,bottom:Math.max(H+2,this.floor),cruiseY:e.top-o.top+e.height/2,homeX:e.left-o.left+e.width/2,homeY:e.top-o.top+e.height/2}),this.dirtyGeometry=!1,this.scene?.refresh()}readColors(){let o=this.probes().nativeElement.children;Dt.forEach((a,e)=>{let r=this.view?.getComputedStyle(o[e]).color??``,s=r.match(/[\d.]+/g)?.slice(0,3).map(Number);s?.length===3&&(this.colors[a]=s.map(u=>r.startsWith(`color(`)?u*255:u))}),this.rgb=[...this.colors[this.physics.mood]],this.colorsDirty=!1}endPointer(){let o=this.pointer;this.pointer=void 0,this.samples=[],this.lastPointerPoint=void 0;let a=this.orb().nativeElement;o!==void 0&&a.hasPointerCapture(o)&&a.releasePointerCapture(o)}start(o=!1){!this.view||this.frame!==void 0||!this.visible||this.stage().ownerDocument.hidden||!o&&(!this.motionEnabled||this.physics.state===`asleep`&&this.lightLevel===0)||(this.frame=this.view.requestAnimationFrame(this.tick))}stop(){this.frame!==void 0&&this.view?.cancelAnimationFrame(this.frame),this.frame=this.lastTime=void 0}clearWake(){this.wakeTimer!==void 0&&this.view?.clearTimeout(this.wakeTimer),this.wakeTimer=void 0}scheduleWake(){this.stayHome||this.wakeTimer!==void 0||!this.motionEnabled||!this.visible||!this.homeVisible||this.stage().ownerDocument.hidden||(this.wakeTimer=this.view?.setTimeout(()=>{this.wakeTimer=void 0,this.wake()},4500))}paint(o,a=!1){if(!this.pose||!this.shadowPose)return;let e=this.physics,r=a||o-this.lastLight>=(e.state===`dragging`||e.state===`falling`?50:80);if(r){let m=this.colors[e.mood],k=!this.motionEnabled||e.state===`asleep`&&this.lightLevel===0?1:.35;this.rgb=this.rgb.map((g,p)=>g+(m[p]-g)*k),this.color=`rgb(${this.rgb.map(Math.round).join(` `)})`}let s=e.contact,u=e.scaleX<1?H*(1-e.scaleX)*(s===`left`?-1:s===`right`?1:0):0,A=e.scaleY<1?H*(1-e.scaleY)*(s===`top`?-1:s===`bottom`?1:0):0,C={transform:`translate3d(${e.x-H+u}px, ${e.y-H+A}px, 0) rotate(${e.stretchAngle}rad) scale(${e.scaleX}, ${e.scaleY}) rotate(${e.angle-e.stretchAngle}rad)`},x=C.transform;if(x!==this.lastPose&&(this.lastPose=x,this.pose.effect.setKeyframes([C,C])),this.colorPose&&this.color!==this.lastColor){this.lastColor=this.color;let m={color:this.color};this.colorPose.effect.setKeyframes([m,m])}if(this.chargePose&&(Math.abs(this.lightLevel-this.lastCharge)>.002||this.lightLevel===0&&this.lastCharge!==0)){this.lastCharge=this.lightLevel;let m={opacity:this.lightLevel};this.chargePose.effect.setKeyframes([m,m])}if(o-this.lastRibbon>=40&&this.lightLevel>.002){this.lastRibbon=o;let m=e.mood===`danger`?3.4:e.mood===`info`?.65:e.mood===`warn`?1.9:1.1,k=e.mood===`danger`?1.3:e.mood===`info`?.65:1,g=this.liquidPath(this.ribbonTime*m,0,k);this.ribbonCore().nativeElement.setAttribute(`d`,g),this.ribbonGlow().nativeElement.setAttribute(`d`,g),this.ribbonTail().nativeElement.setAttribute(`d`,this.liquidPath(this.ribbonTime*m*.8,2.4,k*.8))}let f=Math.max(0,this.floor-e.y),_={transform:`translate3d(${e.x-26}px, ${this.floor+H-6}px, 0) scale(${1+Math.min(f,180)/150})`,opacity:e.state===`asleep`?0:Math.max(0,.22-f/650)},G=_.opacity<.002?`hidden`:`${_.transform}:${_.opacity.toFixed(2)}`;G!==this.lastShadow&&(this.lastShadow=G,this.shadowPose.effect.setKeyframes([_,_]));let F=e.state;if(this.state()!==F&&this.state.set(F),this.mood()!==e.mood&&this.mood.set(e.mood),e.impactSerial!==this.lastImpact&&(this.lastImpact=e.impactSerial,this.motionEnabled)){let m={left:0,right:1,top:2,bottom:3}[e.impactWall],k=this.impact().nativeElement.children[m];this.impactAnimation?.cancel(),this.impactAnimation=k.animate([{backgroundColor:this.color,opacity:.8},{backgroundColor:this.color,opacity:0}],{duration:420,easing:`ease-out`})}if(!r)return;this.lastLight=o;let L=`${this.originX}:${this.originY}:${e.x.toFixed(1)}:${e.y.toFixed(1)}:${e.angle.toFixed(2)}:${this.color}:${this.lightLevel.toFixed(3)}:${e.mood}`;L!==this.lastScene&&(this.lastScene=L,this.scene?.update({reuseGeometry:!0,lights:this.lightLevel===0?[]:[{x:this.originX+e.x,y:this.originY+e.y+H+9,z:30,color:this.color,intensity:this.lightLevel*(e.mood===`danger`?1.5:1.15),radius:e.state===`asleep`?140:280}]}))}liquidPath(o,a,e){let r=o*.32+a,s=.55+Math.sin(o*.31+a)*.35,u=Math.cos(r),A=Math.sin(r),C=Math.cos(s),x=Math.sin(s),f=to.map(({u:m,cos:k,sin:g})=>{let p=15+Math.sin(m*3-o*.65+a)*1.8,M=k*p,$=Math.sin(m*2+o*.4+a)*(4+e*1.6),E=g*p,V=M*u+E*A,z=E*u-M*A,be=$*C-z*x,Ce=$*x+z*C,_e=55/(55-Ce);return{x:30+V*_e,y:30+be*_e,width:(.75+(Ce+20)/40*1.9)*e}}),_=f.map((m,k)=>{let g=f[Math.max(0,k-1)],p=f[Math.min(f.length-1,k+1)],M=Math.hypot(p.x-g.x,p.y-g.y)||1;return{x:m.x-(p.y-g.y)/M*m.width,y:m.y+(p.x-g.x)/M*m.width}}),G=f.map((m,k)=>{let g=f[Math.max(0,k-1)],p=f[Math.min(f.length-1,k+1)],M=Math.hypot(p.x-g.x,p.y-g.y)||1;return{x:m.x+(p.y-g.y)/M*m.width,y:m.y-(p.x-g.x)/M*m.width}}).reverse(),F=[..._,...G],L=`M${F[0].x.toFixed(2)} ${F[0].y.toFixed(2)}`;for(let m=1;m<F.length;m++){let k=F[m-1],g=F[m];L+=`Q${k.x.toFixed(2)} ${k.y.toFixed(2)} ${((k.x+g.x)/2).toFixed(2)} ${((k.y+g.y)/2).toFixed(2)}`}return L+`Z`}static ɵfac=function(a){return new(a||n)};static ɵcmp=le({type:n,selectors:[[`app-light-orb`]],viewQuery:function(a,e){a&1&&Yr(e.orb,Hi,5)(e.plane,Yi,5)(e.shadow,Vi,5)(e.impact,Ki,5)(e.charge,ji,5)(e.ribbonCore,Ji,5)(e.ribbonGlow,Qi,5)(e.ribbonTail,Zi,5)(e.probes,eo,5),a&2&&Qt(9)},inputs:{stage:[1,`stage`],cards:[1,`cards`]},decls:49,vars:9,consts:[[`plane`,``],[`impact`,``],[`shadow`,``],[`orb`,``],[`charge`,``],[`ribbonGlow`,``],[`ribbonTail`,``],[`ribbonCore`,``],[`probes`,``],[1,`orb-controls`],[`id`,`orb-instructions`,`role`,`status`,1,`orb-message`],[`aria-hidden`,`true`,1,`mood-dot`],[`placement`,`top`,1,`orb-home-action`,3,`bxTooltip`],[`bx-button`,``,`variant`,`tonal`,`color`,`grayscale`,`type`,`button`,`aria-label`,`Bring the light home`,1,`orb-home`,3,`click`,`disabled`],[`name`,`house`,`size`,`16`],[1,`orb-plane`],[`aria-hidden`,`true`,1,`orb-impact-layer`],[1,`orb-impact`,`orb-impact-left`],[1,`orb-impact`,`orb-impact-right`],[1,`orb-impact`,`orb-impact-top`],[1,`orb-impact`,`orb-impact-bottom`],[`aria-hidden`,`true`,1,`orb-shadow`],[`type`,`button`,`aria-label`,`Your theme's little light. Hover to wake, drag to throw, or press Enter to play. Arrow keys move it; Escape sends it home.`,`aria-describedby`,`orb-instructions`,1,`light-orb`,3,`click`,`keydown`],[`aria-hidden`,`true`,1,`orb-body`],[`aria-hidden`,`true`,1,`orb-charge`],[1,`orb-halo`],[1,`orb-volume`],[1,`orb-rim`],[`viewBox`,`0 0 60 60`,1,`orb-ribbons`],[`id`,`orb-liquid-light`,`x1`,`0`,`y1`,`0`,`x2`,`1`,`y2`,`0`],[`offset`,`0`,`stop-color`,`currentColor`,`stop-opacity`,`0`],[`offset`,`0.28`,`stop-color`,`currentColor`,`stop-opacity`,`0.65`],[`offset`,`0.53`,`stop-color`,`currentColor`,`stop-opacity`,`1`],[`offset`,`0.8`,`stop-color`,`currentColor`,`stop-opacity`,`0.55`],[`offset`,`1`,`stop-color`,`currentColor`,`stop-opacity`,`0`],[`fill`,`url(#orb-liquid-light)`,1,`ribbon`,`ribbon-glow`],[`fill`,`url(#orb-liquid-light)`,1,`ribbon`,`ribbon-tail`],[`fill`,`url(#orb-liquid-light)`,1,`ribbon`,`ribbon-core`],[`aria-hidden`,`true`,1,`orb-glint`],[`aria-hidden`,`true`,1,`orb-color-probes`],[2,`color`,`var(--bx-primary)`],[2,`color`,`var(--bx-text-success)`],[2,`color`,`var(--bx-text-warn)`],[2,`color`,`var(--bx-text-danger)`],[2,`color`,`var(--bx-text-info)`]],template:function(a,e){a&1&&(W(0,`div`,9)(1,`p`,10),Le(2,`span`,11),je(3),Q(),W(4,`span`,12)(5,`button`,13),be(`click`,function(){return e.bringHome()}),Le(6,`bx-icon`,14),W(7,`span`),je(8,`Bring home`),Q()()()(),W(9,`div`,15,0)(11,`span`,16,1),Le(13,`span`,17)(14,`span`,18)(15,`span`,19)(16,`span`,20),Q(),Le(17,`span`,21,2),W(19,`button`,22,3),be(`click`,function(s){return e.toss(s)})(`keydown`,function(s){return e.keydown(s)}),Le(21,`span`,23),W(22,`span`,24,4),Le(24,`span`,25)(25,`span`,26)(26,`span`,27),Hb(),W(27,`svg`,28)(28,`defs`)(29,`linearGradient`,29),Le(30,`stop`,30)(31,`stop`,31)(32,`stop`,32)(33,`stop`,33)(34,`stop`,34),Q()(),Le(35,`path`,35,5)(37,`path`,36,6)(39,`path`,37,7),Q()(),Ub(),Le(41,`span`,38),Q()(),W(42,`span`,39,8),Le(44,`i`,40)(45,`i`,41)(46,`i`,42)(47,`i`,43)(48,`i`,44),Q()),a&2&&(ve$1(`data-bx-reduced-motion`,e.reducedMotion()),M(2),ve$1(`data-mood`,e.mood()),M(),tt(e.message()),M(),fe(`bxTooltip`,e.mood()===`danger`?`The orb needs a moment to cool down before returning to its pod in the theme card.`:`Bring the orb back to its pod in the theme card.`),M(),fe(`disabled`,e.mood()===`danger`),M(4),re(`orb-ready`,e.ready()),M(10),ve$1(`data-state`,e.state())(`data-mood`,e.mood()))},dependencies:[nr,xf,Dt$1],styles:[`
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
}`]})};var io=(n,o)=>o.title;function oo(n,o){n&1&&(W(0,`span`,29),Le(1,`span`,32),W(2,`span`,33),je(3,`Primary`),Q()())}function ao(n,o){if(n&1&&(W(0,`a`,20),Le(1,`bx-icon`,28),pe(2,oo,4,0,`span`,29),W(3,`h3`),je(4),Q(),W(5,`p`),je(6),Q(),W(7,`span`,30),je(8,`Explore`),Le(9,`bx-icon`,31),Q()()),n&2){let a=o.$implicit;fe(`routerLink`,a.route),M(),fe(`name`,a.icon),M(),me(a.icon===`palette`?2:-1),M(2),tt(a.title),M(2),tt(a.description)}}var Nt=class n{version=Et;reducedMotion=f(xe).isReducedMotion;lightOrb=Xu(ve);wakeHint=Xu(nr);themingService=f(si);features=[{title:`One shared material`,description:`Set appearance once. Buttons, fields, menus, dialogs, and notifications share your application settings.`,icon:`layers`,route:`/appearance`},{title:`Your Blocks palette`,description:`Paired palettes, semantic colors, spacing, and radii carry through every surface.`,icon:`palette`,route:`/components/button`},{title:`Familiar interactions`,description:`Keep native controls, keyboard navigation, and reduced motion while adding fluid transitions.`,icon:`accessibility`,route:`/modal`}];look=y(()=>{this.themingService.palette();let o=this.themingService.activeTheme(),a=window.getComputedStyle(document.body).getPropertyValue(`--bx-primary`),e=window.getComputedStyle(document.body).getPropertyValue(`--bx-color-accent-500`),r=window.getComputedStyle(document.body).getPropertyValue(`--bx-bg-canvas`);return{fxOrder:`Ggr`,stops:[{color:r.replace(`#`,``),pos:0},{color:a.replace(`#`,``),pos:40},{color:e.replace(`#`,``),pos:43},{color:r.replace(`#`,``),pos:48},{color:r.replace(`#`,``),pos:100}],seed:519,warp:.3,noiseScale:1.36,detail:2,contrast:.275,angle:145,centerX:.713,centerY:.271,lightMode:0,lightAmount:0,lightSize:0,lightFollow:1,glassMode:1,glassAmount:.38,glassCount:13,glassAngle:180,glassProfile:2,glassBevel:.01,glassShadow:o===`dark`?.8:.2,glassHighlight:.05,pointerMode:2,pointerDamping:1,pointerFlip:!0,animate:!this.reducedMotion()}});constructor(){Ee(()=>{this.lightOrb()?.showWakeHint()||this.wakeHint()?.hide()})}static ɵfac=function(a){return new(a||n)};static ɵcmp=le({type:n,selectors:[[`app-home`]],viewQuery:function(a,e){a&1&&Yr(e.lightOrb,ve,5)(e.wakeHint,nr,5),a&2&&Qt(2)},decls:50,vars:10,consts:[[`lightGarden`,``],[`orb`,``],[`featureGrid`,``],[1,`oddity-canvas`,3,`config`],[1,`home-container`,`light-garden`],[1,`hero`],[1,`hero-content`],[1,`eyebrow`],[1,`hero-subtitle`],[1,`hero-actions`],[`bx-button`,``,`variant`,`filled`,`color`,`primary`,`routerLink`,`/appearance`],[`name`,`arrow-right`,`size`,`20`],[`bx-button`,``,`variant`,`tonal`,`color`,`accent`,`routerLink`,`/components`],[`aria-labelledby`,`features-title`,1,`features`],[1,`features-heading`],[1,`features-title`],[`id`,`features-title`],[`bxTooltip`,`Hover over the orb in its pod to wake it up. Once awake, drag it around to see its light fall on nearby surfaces.`,`placement`,`top`,1,`orb-hint`,3,`inert`],[3,`stage`,`cards`],[1,`feature-grid`],[`bxSurface`,``,1,`feature-card`,3,`routerLink`],[`aria-label`,`Flagship components`,1,`home-links`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/modal`],[`name`,`arrow-right`,`size`,`16`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/toastr`],[`bx-button`,``,`variant`,`text`,`routerLink`,`/icon-catalog`],[1,`home-footer`],[`href`,`https://www.npmjs.com/package/@filip.mazev/blocks`,`target`,`_blank`,`rel`,`noopener noreferrer`],[`size`,`24`,`color`,`text-accent`,3,`name`],[`aria-hidden`,`true`,1,`orb-nest`],[1,`feature-link`],[`name`,`arrow-up-right`,`size`,`16`],[1,`orb-nest-well`],[1,`orb-nest-label`]],template:function(a,e){if(a&1&&(Le(0,`oddity-canvas`,3),W(1,`div`,4,0)(3,`header`,5)(4,`div`,6)(5,`p`,7),je(6,`Blocks · Angular components`),Q(),W(7,`h1`),je(8,`Build with clarity.`),Le(9,`br`),W(10,`span`),je(11,`Give it depth.`),Q()(),W(12,`p`,8),je(13,`A modular UI library with shared theming, accessible controls, and materials that feel at home throughout your application.`),Q(),W(14,`div`,9)(15,`a`,10),je(16,`Configure appearance`),Le(17,`bx-icon`,11),Q(),W(18,`a`,12),je(19,`Browse components`),Q()()()(),W(20,`section`,13)(21,`div`,14)(22,`div`,15)(23,`h2`,16),je(24,`Built on the Blocks foundations`),Q(),W(25,`span`,17),je(26,`Hover on the orb to wake it up`),Q()(),Le(27,`app-light-orb`,18,1),Q(),W(29,`div`,19,2),Gr(31,ao,10,5,`a`,20,io),Q()(),W(33,`section`,21)(34,`a`,22),je(35,`Modal playground`),Le(36,`bx-icon`,23),Q(),W(37,`a`,24),je(38,`Toast playground`),Le(39,`bx-icon`,23),Q(),W(40,`a`,25),je(41,`Icon catalog`),Le(42,`bx-icon`,23),Q()(),W(43,`footer`,26)(44,`span`),je(45,`Designed & developed by Filip Mazev`),Q(),W(46,`span`),je(47),Q(),W(48,`a`,27),je(49,`npm package`),Q()()()),a&2){let r=Wa(2),s=Wa(28),u=Wa(30);fe(`config`,e.look()),M(22),ve$1(`data-bx-reduced-motion`,e.reducedMotion()),M(3),re(`is-visible`,s.showWakeHint()),fe(`inert`,!s.showWakeHint()),ve$1(`aria-hidden`,!s.showWakeHint())(`tabindex`,s.showWakeHint()?0:-1),M(2),fe(`stage`,r)(`cards`,u),M(4),Wr(e.features),M(16),Sr(`Blocks `,e.version)}},dependencies:[xE,Dt$1,xf,mn,Ft,ve,nr],styles:[`
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
.features-heading[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.features-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin: 0;
}
.features-title[_ngcontent-%COMP%] {
  display: grid;
  grid-template-rows: auto 1.125rem;
  gap: 0.25rem;
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
}
.light-garden[_ngcontent-%COMP%] {
  --%NS%orb-garden-radius: 1.5rem;
  position: relative;
  max-width: none;
  min-height: calc(100dvh - 7rem);
  padding: 1.5rem;
  border: 1px solid var(--%NS%bx-border-subtle);
  border-bottom-width: 3px;
  border-radius: var(--%NS%orb-garden-radius);
  background: color-mix(in srgb, var(--%NS%bx-bg-canvas) 14%, transparent);
  box-shadow: inset 0 1px 0 color-mix(in srgb, white 15%, transparent), inset 0 -8px 18px -16px var(--%NS%bx-text-primary);
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
}
@media (max-width: 768px) {
  .light-garden[_ngcontent-%COMP%] {
    padding: 0.75rem;
  }
}
.home-container[_ngcontent-%COMP%]    > .hero[_ngcontent-%COMP%], 
.home-container[_ngcontent-%COMP%]    > .features[_ngcontent-%COMP%], 
.home-container[_ngcontent-%COMP%]    > .home-links[_ngcontent-%COMP%], 
.home-container[_ngcontent-%COMP%]    > .home-footer[_ngcontent-%COMP%] {
  max-width: 80rem;
  margin-inline: auto;
}`]})};export{Nt as Home};