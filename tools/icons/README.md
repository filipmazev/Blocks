# Lucide icon and category generation

Generate Blocks' lazy icon definitions and category metadata from `lucide-static` plus a committed official Lucide metadata snapshot. Normal builds and runtime
need no metadata network requests. No name-matching classification or additional package dependency is used.

## Generate

```bash
npm run tools:generate:icons:lucide
```

This reads installed SVGs, writes deterministic names, lazy loaders, and icon definitions, and emits `icons/constants/lucide-categories.constants.ts`.
`LUCIDE_CATEGORIES` contains stable IDs and official labels; `LUCIDE_ICON_CATEGORIES` covers exactly the generated icon names, with multiple categories per
icon. `LucideCategoryId` derives from the generated definitions. Inheritance is resolved during synchronization, upstream aliases share their canonical
categories, and missing or empty assignments use `uncategorized`. Categories are ordered by stable identifier, and each icon's assignments are sorted and
deduplicated.

To regenerate metadata against the currently committed icon set without rewriting the SVG definitions:

```bash
npm run tools:generate:icons:lucide -- --metadata-only
```

## Synchronize official metadata

The installed package ships SVGs, nodes, and search tags, but no category assignments. The committed snapshot comes from
[Lucide 1.69.0, commit 91a1359](https://github.com/lucide-icons/lucide/tree/91a1359b5ea235f620ba3a9682015ab8d6ada3af). It retains official category labels, icon
assignments, aliases, release version, source URL, and full revision. `data/LUCIDE-LICENSE` retains upstream attribution.

When updating `lucide-static`, obtain the matching official checkout and resolve its release tag to an exact commit, then run:

```bash
npm run tools:sync:icons:lucide-categories -- \
    --source /path/to/lucide \
    --version 1.69.0 \
    --revision 91a1359b5ea235f620ba3a9682015ab8d6ada3af
npm run tools:generate:icons:lucide
```

The source must contain upstream `icons/*.json`, `categories/*.json`, and `LICENSE` from that release. The synchronizer resolves `$extends:` category
references, rejects missing/circular inheritance and unknown category IDs, and preserves canonical alias definitions. Commit the snapshot, attribution,
lockfile, and generated output together. Generation fails clearly if the snapshot release differs from the installed package, preventing silently stale metadata
after a dependency update. No sync command runs during normal builds.

## Consumers

```typescript
import { LUCIDE_CATEGORIES, LUCIDE_ICON_CATEGORIES, type LucideCategoryId } from '@filip.mazev/blocks/icons';
```

The playground imports these precomputed records directly. Applications can use the same typed categories without loading every icon definition or fetching
upstream metadata.
