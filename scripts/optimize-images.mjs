// Converts the PNGs in src/assets/img to resized WebP files next to them.
// Run with: npm run images
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const dir = path.resolve('src/assets/img');
const files = (await readdir(dir)).filter((f) => f.toLowerCase().endsWith('.png'));

for (const file of files) {
  const input = path.join(dir, file);
  const output = path.join(dir, file.replace(/\.png$/i, '.webp'));
  const width = file.startsWith('my-picture') ? 900 : 1600;
  const info = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(output);
  console.log(`${file} -> ${path.basename(output)} (${Math.round(info.size / 1024)} KB)`);
}
