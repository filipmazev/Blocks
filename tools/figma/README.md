# Blocks Figma Community publishing

The Figma file is the editable working library. Its Community listing is the public, duplicable release. The playground home and component catalog use the same
URL from [figma-library.json](../../projects/playground/src/app/shared/constants/figma-library.json).

## First publication

1. Open [Blocks — Angular Component Library](https://www.figma.com/design/o9twTzD32uOvQ2CaTiLbce/Blocks-Angular-Component-Library).
2. Keep the working file restricted to maintainers. If you also share the source publicly, choose **Anyone → Can view** and leave copying, sharing and export
   enabled for viewers. Do not grant public edit access.
3. Run `npm run figma:prepare`. The release bundle is written to `dist/figma-community/`.
4. In Figma, choose **Share → Publish to Community**. Use the title, description, tags and support URL from the bundle, with `cover.png` as the thumbnail.
5. Register the published Community URL, then include the changed JSON in the next playground deployment:

    ```sh
    npm run figma:prepare -- --community-url https://www.figma.com/community/file/123456789/blocks-angular-ui-kit
    ```

The resource is intended to be free. Publishing a Community snapshot lets visitors copy or duplicate the kit without editing the working library. The script
prepares assets and updates the playground link; publication and sharing permissions are completed in Figma's editor. The connected MCP servers do not expose
Community publishing or file access settings.

## Publish an update

1. Update components, variants, tokens and examples in the **same working file**, checking them against the Angular implementation.
2. Review the cover on **Documentation, Tokens & Atoms**. It presents the Blocks logo, wordmark and the kit's purpose. If the branding or purpose changes,
   export its **Cover · Blocks Angular UI Kit** frame as a 1× PNG at 1920 × 1080.
3. Prepare the release. Omit `--cover` when the existing cover still represents the kit:

    ```sh
    npm run figma:prepare -- --cover /path/to/exported-cover.png --notes "Added a new component and refined form field states."
    ```

4. In the working file, choose **Share → Publish to Community → Publish update**. Use the prepared cover and release notes. Update the existing listing rather
   than creating another resource; its URL stays stable, so the playground link does not need to change for every release.

Community releases are snapshots. Existing duplicated files do not automatically receive updates; designers can duplicate the latest release or copy its updated
components. This workflow publishes the Figma resource; the playground follows its normal build and deployment process.

## Release assets

- `cover.png`: the Figma cover, also used by the playground home page.
- `carousel/`: five supporting images, each at 1920 × 1080.
- `carousel-order.txt`: the recommended order and purpose of each supporting image.
- `description.txt`: copy-ready Community description.
- `release-notes.txt`: the release's change summary.
- `metadata.json` and `publish.txt`: title, tagline, tags, support link and publishing steps.

Edit the source JSON to update the listing text. Run `npm run figma:prepare` again to refresh the bundle.

## Carousel images

Upload these after the cover, in this order:

1. **Components, ready to compose.** Light and dark controls, buttons, selection, chips and sliders.
2. **One system. Light and dark.** Semantic color tokens, typography, radii and spacing.
3. **Design the whole interaction.** Form fields with validation and loading states.
4. **Glass with a purpose.** Theme Studio's glass composition and semantic toast variants.
5. **Layouts for every screen.** Actual Theme Studio examples at desktop, tablet and mobile sizes.

The editable frames live in **Community carousel · Supporting images** on the first Figma page. Their node IDs, filenames and captions are recorded in
[carousel.json](./carousel.json). The source PNGs live in `tools/figma/assets/carousel/`; `figma:prepare` validates their dimensions and copies them to the
release bundle. To import a refreshed set of PNGs exported from those frames, preserve the manifest's filenames and run:

```sh
npm run figma:prepare -- --carousel-dir /path/to/carousel-exports
```

The cover uses `projects/playground/src/app/components/shared/sidenav/blocks-logo.svg` with colors resolved through `blocks-logo.scss` in Carbon / Cobalt dark
mode, using the cobalt accent for the logo's light. The artwork reuses Theme Studio's six overlapping rounded glass panes. Preserve that composition and its
translucency when refreshing the cover artwork.

See Figma's guides to [publishing Community files](https://help.figma.com/hc/en-us/articles/360040035974-Publish-files-to-the-Figma-Community) and
[custom file thumbnails](https://help.figma.com/hc/en-us/articles/360038511413-Set-custom-thumbnails-for-files).
