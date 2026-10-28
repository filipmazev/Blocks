// English article copy adapted from EcoProject24/src/assets/i18n/en.json:
// gallery.shar_mountain and gallery.korab. Photos are optimized local copies.
// Detail photos: Shar_Mountain/shar_mountain_3.webp and Korab/korab_6.webp.
function photo(name: string, width: number, height: number, alt: string) {
  const base = `assets/images/appearance/${name}`;
  return { src: `${base}.webp`, srcset: `${base}-640.webp 640w, ${base}.webp ${width}w`, width, height, alt };
}

export const PARK_ARTICLES = [
  {
    id: 'preview-shar-mountain',
    title: 'Šar Mountain',
    shortTitle: 'Šar',
    subtitle: 'High peaks, mountain pastures, and rich forests',
    paragraphs: [
      'Šar Mountain is known for its high peaks, mountain pastures, and rich forests.',
      'A variety of vegetation spreads everywhere in the areas of this mountain massif. A large number of these plants are used by the inhabitants of these regions for folk medicine.'
    ],
    photo: photo('shar-mountain', 1200, 730, 'Snow-dusted peaks and green slopes reflected in a mountain lake on Šar Mountain'),
    caption: 'The mountain landscapes of Šar Mountain.',
    detail: {
      title: 'Bogovinje Lake',
      paragraphs: [
        'One of the mountain lakes that adorns Šar Mountain is Bogovinje Lake, known for its crystal-clear waters and stunning reflections of the surrounding peaks.',
        'The lake is a popular destination for hikers and nature enthusiasts, offering a peaceful retreat in the heart of the mountains.'
      ],
      photo: photo('bogovinje-lake', 1200, 679, 'Bogovinje Lake beneath snow-streaked mountain slopes'),
      caption: 'The quiet waters of Bogovinje Lake beneath the surrounding peaks.'
    }
  },
  {
    id: 'preview-mavrovo',
    title: 'Mavrovo National Park',
    shortTitle: 'Mavrovo',
    subtitle: 'The Korab massif',
    paragraphs: [
      'Korab is the highest mountain in Macedonia, home to the Golem Korab peak standing at 2,764 meters.',
      'The mountain is part of the Mavrovo National Park, known for its diverse landscapes and natural beauty.'
    ],
    photo: photo('korab', 1200, 775, 'Rocky peaks and open mountain pastures in the Korab massif'),
    caption: 'The high peaks and open pastures of Korab.',
    detail: {
      title: 'A landscape shaped by water',
      paragraphs: [
        'Korab has abundant surface watercourses, with several permanent and glacial-fed rivers and streams.',
        'The Macedonian side of Korab is home to eight permanent and many occasional glacial lakes, supporting rich ecosystems.'
      ],
      photo: photo('korab-valley', 1200, 715, 'A black-and-white panorama of the Korab ridges with small lakes below'),
      caption: 'A wide view across the ridges and lakes of the Korab massif.'
    }
  }
] as const;
