# Hukam Labs

> **"Useful software. Open by default."**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Profile](https://img.shields.io/badge/GitHub-hellohukam-181717.svg?logo=github)](https://github.com/hellohukam)
[![LLMs Specification](https://img.shields.io/badge/LLMs-llms.txt-38bdf8.svg)](public/llms.txt)

Official website source and open-source software index for **Hukam Labs** — an independent technology lab and developer studio founded and engineered by **Waleed Ahmad ("Hukam")**.

Hukam Labs engineers practical desktop applications, browser automation extensions, and local AI pipelines that run directly on consumer hardware — without forced subscriptions, telemetry tracking, or artificial paywalls.

---

## 🏛️ Core Principles & Architecture

1. **Local & Private Execution**: Processing runs locally on the user's GPU, CPU, or browser sandbox. Your prompts, images, vectors, and credentials never touch a 3rd-party tracking server.
2. **Accessible by Default**: Useful software is distributed freely under permissive open-source licenses without artificial feature gating or subscription locks.
3. **Genuine Open Source**: Permissive MIT and GPL licenses with clean source code, transparent git histories, and clear documentation.
4. **Engineering over Hype**: Built to solve concrete workflow bottlenecks, not to market speculative AI buzzwords.

---

## 🚀 Showcased Open-Source Projects

Hukam Labs houses 16 open-source projects across three primary domains:

### 1. Flagship Systems & AI Media
* **[Hukam Flow](https://github.com/hellohukam/hukam-flow)** *(v6.3.1 · Active)*: Chrome Manifest V3 batch automation tool and queue manager for Google Flow (flow.google.com). Features a dedicated dockable Side Panel (`Alt + Shift + F`), MAIN-world Angular event synthesis, and internal `batchexecute` network API interception.
  * *Dedicated Project Page*: [`/projects/hukam-flow/`](projects/hukam-flow/index.html) · [`Raw Markdown`](public/projects/hukam-flow.md)
* **[Hukam AI Upscaler Pro](https://github.com/hellohukam/hukam-ai-upscaler)** *(v1.0.0 · Active)*: Hardware-accelerated Vulkan Real-ESRGAN super-resolution desktop application for Windows x64. Pre-bundles neural weights (`realesrgan-x4plus`, anime, videov3) in a standalone 55MB executable without requiring Python or CUDA drivers. Supports crash-resilient resume logging and low-VRAM tile splitting.
  * *Dedicated Project Page*: [`/projects/hukam-ai-upscaler/`](projects/hukam-ai-upscaler/index.html) · [`Raw Markdown`](public/projects/hukam-ai-upscaler.md)
* **[SVG Magic Cleaner](https://github.com/hellohukam/svg-magic-cleaner)** *(v1.0.0 · Active)*: 100% private in-browser AI background remover and raster-to-SVG vectorizer using Hugging Face Transformers.js and WebGPU with WASM fallback. Runs `briaai/RMBG-1.4` locally with zero cloud uploads.
  * *Dedicated Project Page*: [`/projects/svg-magic-cleaner/`](projects/svg-magic-cleaner/index.html) · [`Raw Markdown`](public/projects/svg-magic-cleaner.md)
* **[AI Image Forensic Repair](https://github.com/hellohukam/ai-image-forensic-repair)** *(v1.1.0 · Active)*: Standalone Windows desktop restoration utility solving the Adobe Illustrator *"File format cannot be placed"* error on AI images (Midjourney, ComfyUI, Automatic1111). Rebuilds missing IEND/EOI markers and normalizes sRGB/RGBA buffers.
  * *Dedicated Project Page*: [`/projects/ai-image-forensic-repair/`](projects/ai-image-forensic-repair/index.html) · [`Raw Markdown`](public/projects/ai-image-forensic-repair.md)
* **[Vector Craft Studio](https://github.com/hellohukam/vector-craft-studio)** *(v1.0.0 · Active)*: Full-stack raster-to-vector studio with multi-layer color quantization (2–32 discrete layers) and pure TypeScript Potrace Bézier curve tracing with real-time split-screen previews.
  * *Dedicated Project Page*: [`/projects/vector-craft-studio/`](projects/vector-craft-studio/index.html) · [`Raw Markdown`](public/projects/vector-craft-studio.md)
* **[BiRefNet Pro BG Remover](https://github.com/hellohukam/birefnet-bg-remover)** *(v1.0.0 · Active)*: High-resolution desktop background removal tool powered by the BiRefNet bilateral reference network with Windows DirectML GPU acceleration.
  * *Dedicated Project Page*: [`/projects/birefnet-bg-remover/`](projects/birefnet-bg-remover/index.html) · [`Raw Markdown`](public/projects/birefnet-bg-remover.md)
* **[Hukam AI Creative Studio](https://github.com/hellohukam/hukam-ai-creative-studio)** *(v0.9.0 · In Development)*: Full-stack image studio powered by Together AI (FLUX.1 Schnell) with a 4-key rotation pool and PostgreSQL gallery.
* **[U2Net BG Remover](https://github.com/hellohukam/u2net-bg-remover)** *(v1.0.0 · Complete)*: Lightweight CPU-optimized salient background removal desktop tool.

### 2. Developer & Automation Tools
* **[AI Prompt EXIF Extractor Pro](https://github.com/hellohukam/ai-prompt-exif-extractor)** *(v1.0.0 · Active)*: Batch desktop utility parsing PNG and JPG chunks to extract embedded generation prompts, A1111 parameters, seeds, and ComfyUI workflow JSON graphs.
  * *Dedicated Project Page*: [`/projects/ai-prompt-exif-extractor/`](projects/ai-prompt-exif-extractor/index.html) · [`Raw Markdown`](public/projects/ai-prompt-exif-extractor.md)
* **[Batch SVG Sanitizer Pro](https://github.com/hellohukam/batch-svg-sanitizer)** *(v1.0.0 · Active)*: Headless Windows batch tool stripping proprietary editor namespaces (Illustrator, Inkscape, Figma) and orphaned clipPaths to optimize SVGs for stock marketplaces and web deployment.
  * *Dedicated Project Page*: [`/projects/batch-svg-sanitizer/`](projects/batch-svg-sanitizer/index.html) · [`Raw Markdown`](public/projects/batch-svg-sanitizer.md)
* **[Hukam Automation Tools](https://github.com/hellohukam/hukam-automation-tools)** *(v1.0.0 · Complete)*: Digital creator CLI automation suite for batch asset repair, FLUX generation orchestration, and metadata tagging.

### 3. Creative Utilities & Media
* **[Color Palette Extractor Pro](https://github.com/hellohukam/image-color-palette-extractor)** *(v1.0.0 · Active)*: High-speed Octree color quantization tool extracting dominant HEX palettes in bulk.
* **[Vector Metadata Injector](https://github.com/hellohukam/vector-metadata-injector)** *(v1.0.0 · Complete)*: Embeds stock marketplace compliant IPTC/XMP/Dublin Core metadata directly into vector files.
* **[Stock Metadata CSV Generator](https://github.com/hellohukam/stock-metadata-csv-generator)** *(v1.0.0 · Complete)*: Scans media directories and compiles pre-formatted submission CSVs for Adobe Stock, Freepik, and Shutterstock.
* **[Smart Asset Organizer](https://github.com/hellohukam/smart-asset-organizer)** *(v1.0.0 · Complete)*: Rule-based directory classifier organizing large unstructured creative asset downloads.
* **[YT Audio Extractor GUI](https://github.com/hellohukam/yt-audio-extractor-gui)** *(v1.0.0 · Complete)*: Desktop GUI extracting lossless audio streams with ID3 metadata preservation.

---

## 🤖 AI & Machine Discoverability (LLMs.txt)

Hukam Labs implements full machine-readability specifications:
* **`/llms.txt`**: Factual, structured summary following the llms.txt standard for AI search engines, agents, and LLMs.
* **`/sitemap.xml`**: XML sitemap enumerating the homepage and all project routes.
* **`/robots.txt`**: Standard robots exclusion configuration referencing the sitemap.
* **Raw Markdown Alternates**: Every major project route has a linked `<link rel="alternate" type="text/markdown">` endpoint (e.g. `/projects/hukam-flow.md`).

---

## 🛠️ Local Development & Build

The website is statically compiled with **Vite** with multi-page Rollup routing:

### Commands

```bash
# Clone the repository
git clone https://github.com/hellohukam/hukam-labs.git
cd hukam-labs

# Install dependencies
npm install

# Start local development server
npm run dev

# Compile multi-page production bundle for Cloudflare Pages (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment on Cloudflare Pages

This repository is optimized for zero-runtime static hosting on **Cloudflare Pages**:

* **Framework preset**: `None` / `Vite`
* **Build command**: `npm run build`
* **Build output directory**: `dist`
* **Node.js version**: `18+` or `20+`

Security and immutable asset caching headers are pre-configured in [`public/_headers`](public/_headers).

---

## 👤 About the Founder

**Waleed Ahmad ("Hukam")**  
*Independent Software Developer & AI Pipeline Specialist*  
*PSEB Registered Freelancer*

* **GitHub**: [@hellohukam](https://github.com/hellohukam)
* **Personal Portfolio**: [likehukam.com](https://likehukam.com)
* **Contact Email**: [hello@theRedLikeHukum.com](mailto:hello@theRedLikeHukum.com)

---

## 📄 License

The website source code is licensed under the [MIT License](LICENSE). Individual lab tools and repositories maintain their respective open-source licenses (MIT / GPL-3.0) specified within each repository.
