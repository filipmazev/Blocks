/** Resolved parks state used by AppearancePreview. */
export interface IAppearancePreviewParksState {
  /** Resolved id value. */
  readonly id: 'preview-mavrovo';
  /** Resolved title value. */
  readonly title: 'Mavrovo National Park';
  /** Resolved short Title value. */
  readonly shortTitle: 'Mavrovo';
  /** Resolved subtitle value. */
  readonly subtitle: 'The Korab massif';
  /** Resolved paragraphs value. */
  readonly paragraphs: readonly [
    'Korab is the highest mountain in Macedonia, home to the Golem Korab peak standing at 2,764 meters.',
    'The mountain is part of the Mavrovo National Park, known for its diverse landscapes and natural beauty.'
  ];
  /** Resolved photo value. */
  readonly photo: { src: string; srcset: string; width: number; height: number; alt: string };
  /** Resolved caption value. */
  readonly caption: 'The high peaks and open pastures of Korab.';
  /** Resolved detail value. */
  readonly detail: {
    readonly title: 'A landscape shaped by water';
    readonly paragraphs: readonly [
      'Korab has abundant surface watercourses, with several permanent and glacial-fed rivers and streams.',
      'The Macedonian side of Korab is home to eight permanent and many occasional glacial lakes, supporting rich ecosystems.'
    ];
    readonly photo: { src: string; srcset: string; width: number; height: number; alt: string };
    readonly caption: 'A wide view across the ridges and lakes of the Korab massif.';
  };
}
