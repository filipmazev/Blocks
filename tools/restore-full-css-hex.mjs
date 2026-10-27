import { decode, encode } from '@jridgewell/sourcemap-codec';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.resolve(process.argv[2] ?? 'dist/blocks');
const cssBundleExtensions = new Set(['.css', '.js', '.mjs']);

function expandColors(line) {
    const replacements = [];
    const content = line.replace(/#(?:fff|000)(?![\da-f])/gi, (color, index) => {
        replacements.push({ end: index + color.length, delta: 3 });
        return color.toLowerCase() === '#fff' ? '#ffffff' : '#000000';
    });

    return { content, replacements };
}

async function updateSourceMap(filePath, replacementsByLine) {
    let mapContent;

    try {
        mapContent = await readFile(`${filePath}.map`, 'utf8');
    } catch (error) {
        if (error.code === 'ENOENT') return;
        throw error;
    }

    const sourceMap = JSON.parse(mapContent);
    if (typeof sourceMap.mappings !== 'string') return;

    const mappings = decode(sourceMap.mappings);
    for (let line = 0; line < mappings.length; line++) {
        const replacements = replacementsByLine[line];
        if (!replacements?.length) continue;

        for (const segment of mappings[line]) {
            const originalColumn = segment[0];
            let columnOffset = 0;

            for (const replacement of replacements) {
                if (originalColumn >= replacement.end) columnOffset += replacement.delta;
            }

            segment[0] = originalColumn + columnOffset;
        }
    }

    sourceMap.mappings = encode(mappings);
    await writeFile(`${filePath}.map`, JSON.stringify(sourceMap));
}

async function restoreColors(directory) {
    let updatedFiles = 0;

    for (const entry of await readdir(directory, { withFileTypes: true })) {
        const entryPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            updatedFiles += await restoreColors(entryPath);
            continue;
        }

        if (!entry.isFile() || !cssBundleExtensions.has(path.extname(entry.name))) continue;

        const content = await readFile(entryPath, 'utf8');
        const lines = content.split('\n');
        const replacementsByLine = [];
        let changed = false;

        for (let line = 0; line < lines.length; line++) {
            const result = expandColors(lines[line]);
            if (result.replacements.length) {
                lines[line] = result.content;
                replacementsByLine[line] = result.replacements;
                changed = true;
            }
        }

        if (!changed) continue;

        await writeFile(entryPath, lines.join('\n'));
        await updateSourceMap(entryPath, replacementsByLine);
        updatedFiles++;
    }

    return updatedFiles;
}

const updatedFiles = await restoreColors(outputDirectory);
console.log(`Restored full white and black hex values in ${updatedFiles} built file(s).`);
