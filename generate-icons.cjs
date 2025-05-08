#!/usr/bin/env node
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [48, 72, 96, 128, 144, 152, 192, 384, 512];

const input = process.argv[2];
const outputDir = process.argv[3] || './icons';

if (!input) {
  console.error('Usage: generate-icons <input.png> [output_dir]');
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const manifestIcons = [];

Promise.all(
  sizes.map(size => {
    const outPath = path.join(outputDir, `icon-${size}x${size}.png`);
    manifestIcons.push({
      src: `icons/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: "image/png"
    });
    return sharp(input)
      .resize(size, size)
      .toFile(outPath);
  })
).then(() => {
  const manifest = {
    icons: manifestIcons
  };
  fs.writeFileSync(path.join(outputDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('Icons and manifest.json generated.');
});
