import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const INPUT_DIR = join(__dirname, '../public/images');
const OUTPUT_DIR = join(__dirname, '../public/images-optimized');

async function optimizeImages() {
  try {
    const files = await readdir(INPUT_DIR);
    const imageFiles = files.filter(file =>
      file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')
    );

    console.log(`Found ${imageFiles.length} images to optimize...`);

    for (const file of imageFiles) {
      const inputPath = join(INPUT_DIR, file);
      const outputPath = join(OUTPUT_DIR, file.replace(/\.(png|jpg|jpeg)$/, '.webp'));

      console.log(`Optimizing ${file}...`);

      // Convert to WebP for better compression
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);

      // Also create a compressed PNG/JPEG as fallback
      const fallbackPath = join(OUTPUT_DIR, file);
      if (file.endsWith('.png')) {
        await sharp(inputPath)
          .png({ quality: 80, compressionLevel: 9 })
          .toFile(fallbackPath);
      } else {
        await sharp(inputPath)
          .jpeg({ quality: 80, progressive: true })
          .toFile(fallbackPath);
      }

      console.log(`✓ Optimized ${file}`);
    }

    console.log('\nImage optimization complete!');
    console.log(`Optimized images saved to: ${OUTPUT_DIR}`);
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();
