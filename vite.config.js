import { resolve } from 'path';
import { defineConfig } from 'vite';

const rootDir = import.meta.dirname;

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        hukamFlow: resolve(rootDir, 'projects/hukam-flow/index.html'),
        hukamUpscaler: resolve(rootDir, 'projects/hukam-ai-upscaler/index.html'),
        svgCleaner: resolve(rootDir, 'projects/svg-magic-cleaner/index.html'),
        forensicRepair: resolve(rootDir, 'projects/ai-image-forensic-repair/index.html'),
        vectorCraft: resolve(rootDir, 'projects/vector-craft-studio/index.html'),
        birefnet: resolve(rootDir, 'projects/birefnet-bg-remover/index.html'),
        promptExif: resolve(rootDir, 'projects/ai-prompt-exif-extractor/index.html'),
        batchSvg: resolve(rootDir, 'projects/batch-svg-sanitizer/index.html')
      }
    }
  }
});
