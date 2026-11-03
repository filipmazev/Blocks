// Adapted from Nordify refraction (MIT). See effects/THIRD_PARTY_NOTICES.md.

/* Displacement maps for refraction and reflection, built as a nine-slice.

   Both maps only depend on the distance to the edge and the outward normal.
   On a rounded rectangle the normal is constant along a straight edge and
   radial in a corner, so each map splits into four corner tiles, four edge
   tiles and a neutral centre. The tiles are normalised, so a size change is
   just re-laying them (x/y/width/height), never rebaking.

   Every tile is a tiny greyscale PNG data URL. Grey on purpose: on Display-P3
   screens Chrome converts coloured filter inputs into the display profile,
   which leaks green into red and twists the image. Grey and alpha survive. */

export const SLOTS = ['tl', 'tr', 'br', 'bl', 'top', 'right', 'bottom', 'left'] as const;

export const CORNERS = ['tl', 'tr', 'br', 'bl'] as const;

export const EDGES = ['top', 'right', 'bottom', 'left'] as const;

export const CORNER_TEX = 32;

export const LINE_TEX = 128;

/* --- A minimal synchronous PNG encoder (zlib "stored", no compression) --- */

export const CRC_TABLE = (() => {
  const t = new Uint32Array(256);

  for (let n = 0; n < 256; n++) {
    let c = n;

    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;

    t[n] = c >>> 0;
  }

  return t;
})();

/* --- Refraction ----------------------------------------------------------

   The profile was measured from Apple's play button over a grid. Everything
   is in units of the corner radius R; q is the distance from the arc centre
   over R. P(q) is how far the glass samples INWARDS at that point.

     centre  1:1 up to q = 0.61, no magnification
     bulge   a soft S-step to 0.49 R: the image folds, lines turn into loops
     lip     the last few percent pull nearly the centre out to the rim,
             softly capped so lines do not snap into stubs */

export const REFR_BAND = 0.39;

export const REFR_DEPTH = 0.49;

export const REFR_LIP_BAND = 0.3;

export const REFR_LIP = 10;

export const REFR_LIP_POW = 5;

/** Stretches the whole profile; 1 is the measured width. */
export const REFR_WIDTH = 1;

export const REFR_REACH = 1.5;

/** Extra pull towards the long axis' centre, so straight pill edges bend
 *  visibly. Not measured: a circle has no straight edge. 0 turns it off. */
export const REFR_TILT = 0.2;

export const REFR_HEAD = 1 + REFR_TILT;

/** Depth of the folding band in R. The `.lg-fold` layer covers exactly it. */
export const REFR_FOLD_DEPTH = REFR_BAND * REFR_WIDTH;

export const REFR_PEAK = 1.4998432596219913;

export const REFR_MAG_PEAK = 1.4998432596219913;

/** Multiplies two values encoded around 0.5: 0.5 + 2(a - 0.5)(b - 0.5). */
export const TILT_MULTIPLY = { k1: 2, k2: -1, k3: -1, k4: 1 } as const;

/** y field into alpha (a = 0.5 + 0.5y), so x can be masked by it with "in". */
export const PACK_Y = '0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.5 0 0 0 0.5';

/** R = x, G = 2a - 1 = y, B = 0, A = 1. Goes straight into feDisplacementMap. */
export const UNPACK = '1 0 0 0 0  0 0 0 2 -1  0 0 0 0 0  0 0 0 0 1';

/* --- Reflection ----------------------------------------------------------

   The part of the light that never enters the glass: it pulls in what sits
   NEXT TO the element. A backdrop-filter only sees its own border box, so the
   reflection layer overhangs the element by `pad` and a mask cuts it back to
   the shape. The overhang only feeds the filter, it never shows. */

export const IOR = 1.5;

export const R0 = ((1 - IOR) / (1 + IOR)) ** 2;

export const SIN_CRIT = 1 / IOR;

export const EYE_DIST = 2.6;

/** How far the edge reaches out, times the short side. Also the overhang. */
export const REFL_REACH = 2.6;

/** Absolute cap on that reach in px. The maps have 8 bits, so the step size
 *  is scale / 255: on a big element an unbounded reach turns the reflection
 *  into stairs and squeezes far-away content into the rim. */
export const REFL_REACH_MAX = 64;

export const RIM_SPAN = 2;

/** Curvature of the mirrored image: compressed towards the rim like a
 *  curved surface would. 0 is a flat mirror. */
export const REFL_CURVE = 1.3;

export const REFL_FLOOR = 0.3;

export const REFL_INNER = 0.35;

export const REFL_FADE = 0.22;

/** Softening of the mirrored image, at least REFL_BLUR px. The maps have 8
 *  bits, so the reflection moves in steps of scale / 255 px; a hard edge in
 *  the reflected content shows them as stairs unless the blur covers them. */
export const REFL_BLUR = 1;

export const REFL_BLUR_PER_STEP = 1.4;

/** Mask corner sampling: wedges sit on the fan's EDGES so the corner meets
 *  the edge tile without a jump. Radial stops are denser near the rim. */
export const WEDGES = 24;

export const CSTOPS = 28;

export const RSTOPS = 48;

/* --- Edge lighting --------------------------------------------------------

   Two complementary conic gradients (glint + rim = 1 everywhere) that pick
   which part of the edge is lit. Lighting follows the surface NORMAL, so the
   angles are warped by the aspect ratio: on a wide pill the long edges take a
   wider angular range. 0.4 is a compromise between following the shape (2)
   and keeping all four transitions equally soft (0). */

export const ARC_PEAK = 45;

export const ARC_SHAPE = 0.4;

export const ARC_STEP = 3;

export const ARC_CACHE = new Map<string, { glint: string; rim: string }>();
