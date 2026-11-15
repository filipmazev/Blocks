import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

const { values } = parseArgs({
  options: {
    'community-url': { type: 'string' },
    'carousel-dir': { type: 'string' },
    cover: { type: 'string' },
    notes: { type: 'string', default: 'Updated components, tokens and examples.' }
  }
});
const metadataPath = new URL('../../projects/playground/src/app/shared/constants/figma-library.json', import.meta.url);
const coverPath = new URL('../../projects/playground/src/assets/images/figma/blocks-ui-kit.png', import.meta.url);
const output = new URL('../../dist/figma-community/', import.meta.url);
const metadata = JSON.parse(readFileSync(metadataPath, 'utf8'));
const carousel = JSON.parse(readFileSync(new URL('./carousel.json', import.meta.url), 'utf8'));
const carouselAssets = new URL('./assets/carousel/', import.meta.url);
const carouselSource = values['carousel-dir'] ? resolve(values['carousel-dir']) : fileURLToPath(carouselAssets);

if (values['community-url']) {
  const url = new URL(values['community-url']);

  if (url.protocol !== 'https:' || !['figma.com', 'www.figma.com'].includes(url.hostname) || !/^\/community\/file\/\d+(?:\/|$)/u.test(url.pathname)) {
    throw new Error('Use the published https://www.figma.com/community/file/... URL.');
  }

  url.search = '';
  url.hash = '';
  metadata.communityUrl = url.toString();
}

const coverSource = values.cover ? resolve(values.cover) : coverPath;
const images = [{ source: coverSource, name: 'cover.png' }, ...carousel.map((image) => ({ source: resolve(carouselSource, image.file), name: image.file }))];

for (const image of images) {
  const png = readFileSync(image.source);

  if (png.length < 24 || png.toString('hex', 0, 8) !== '89504e470d0a1a0a' || png.readUInt32BE(16) !== 1920 || png.readUInt32BE(20) !== 1080) {
    throw new Error(`Export ${image.name} as a 1920 × 1080 PNG at 1× from Figma.`);
  }
}

if (values.cover && resolve(values.cover) !== fileURLToPath(coverPath)) {
  copyFileSync(coverSource, coverPath);
}

mkdirSync(output, { recursive: true });
copyFileSync(coverPath, new URL('cover.png', output));
mkdirSync(new URL('carousel/', output), { recursive: true });

for (const image of carousel) {
  const source = resolve(carouselSource, image.file);
  const asset = new URL(image.file, carouselAssets);

  if (values['carousel-dir'] && source !== fileURLToPath(asset)) {
    copyFileSync(source, asset);
  }

  copyFileSync(asset, new URL(`carousel/${image.file}`, output));
}

writeFileSync(
  new URL('carousel-order.txt', output),
  ['Cover: cover.png', '', ...carousel.map((image, index) => `${index + 1}. carousel/${image.file} — ${image.title}\n   ${image.description}`)].join('\n') +
    '\n'
);
writeFileSync(new URL('description.txt', output), metadata.description.join('\n\n') + '\n');
writeFileSync(new URL('release-notes.txt', output), values.notes + '\n');
writeFileSync(new URL('metadata.json', output), JSON.stringify({ ...metadata, carousel }, null, 4) + '\n');
writeFileSync(
  new URL('publish.txt', output),
  [
    `Title: ${metadata.title}`,
    `Tagline: ${metadata.tagline}`,
    `Tags: ${metadata.tags.join(', ')}`,
    `Support: ${metadata.supportUrl}`,
    `Working file: ${metadata.fileUrl}`,
    `Community listing: ${metadata.communityUrl ?? 'Not registered yet'}`,
    '',
    'In Figma: Share > Publish to Community. For later releases, use Publish update on this same working file.',
    'Use cover.png, description.txt and release-notes.txt from this folder.',
    'Add the five supporting images from carousel/ in the order listed in carousel-order.txt.',
    'Keep the working file restricted, or share it as Can view with copying allowed. Never grant public edit access.',
    'Community visitors duplicate the published snapshot; existing personal copies do not automatically update.',
    '',
    'After the first publication, register its stable URL:',
    'npm run figma:prepare -- --community-url https://www.figma.com/community/file/RESOURCE_ID'
  ].join('\n') + '\n'
);

if (values['community-url']) {
  writeFileSync(metadataPath, JSON.stringify(metadata, null, 4) + '\n');
}

console.log(`Figma Community release prepared in ${fileURLToPath(output)}`);

if (!metadata.communityUrl) {
  console.log('The playground currently links to the working file. Register the Community URL after publishing.');
}
