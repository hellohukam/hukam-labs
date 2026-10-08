# Hukam Labs

> **"Useful software should be accessible."**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Profile](https://img.shields.io/badge/GitHub-hellohukam-181717.svg?logo=github)](https://github.com/hellohukam)
[![Website](https://img.shields.io/badge/Website-Hukam_Labs-06b6d4.svg)](https://hukamlabs.pages.dev)

Official repository and website source for **Hukam Labs** — an independent open-source technology lab and developer studio founded by **Waleed Ahmad ("Hukam")**.

Hukam Labs engineers practical AI models, desktop toolchains, media utilities, and browser automation systems, making them openly available without paywalls, subscriptions, or telemetry tracking.

---

## 🏛️ Philosophy & Architecture

1. **Practical Utility First**: Tools solve real-world bottlenecks in automated batch pipelines, GPU super-resolution, and vector asset preparation.
2. **Zero Telemetry & Local Execution**: Private-first execution on your local CPU/GPU or browser sandbox. No user telemetry, analytics, or phone-home pings.
3. **Genuine Open Source**: Permissive MIT and GPL licenses with clean source code, transparent git histories, and clear documentation.
4. **Independent Engineering**: Maintained independently without venture capital pressures or artificial paywalls.

---

## 🚀 Showcased Open-Source Projects

Hukam Labs houses 16 open-source projects across three primary domains:

### 1. AI & Creative Tools
* **[Hukam AI Upscaler Pro](https://github.com/hellohukam/hukam-ai-upscaler)**: Standalone desktop super-resolution app powered by Real-ESRGAN Vulkan NCNN across NVIDIA, AMD Radeon, and Intel GPUs without proprietary CUDA drivers.
* **[SVG Magic Cleaner](https://github.com/hellohukam/svg-magic-cleaner)**: Automated SVG cleanup and sanitization engine stripping Illustrator/Inkscape bloat and duplicate IDs while preserving visual layout.
* **[AI Image Forensic Repair](https://github.com/hellohukam/ai-image-forensic-repair)**: Forensic repair toolkit for corrupt headers and malformed JPEG/PNG streams.
* **[Vector Craft Studio](https://github.com/hellohukam/vector-craft-studio)**: Algorithmic SVG generation and parametric vector toolchain.
* **[BiRefNet Background Remover](https://github.com/hellohukam/birefnet-bg-remover)**: High-resolution bilateral reference background matting pipeline.
* **[Hukam AI Creative Studio](https://github.com/hellohukam/hukam-ai-creative-studio)**: Unified desktop UI integrating multi-model diffusion and vector generation pipelines.
* **[U2Net Background Remover](https://github.com/hellohukam/u2net-bg-remover)**: Lightweight neural foreground segmentation tool.

### 2. Developer & Automation Tools
* **[Hukam Flow](https://github.com/hellohukam/hukam-flow)** *(Flagship v6.3.1)*: Chrome Manifest V3 batch automation tool for Google Flow with a dedicated Side Panel, MAIN-world Angular event synthesis, and internal batchexecute network interception.
* **[AI Prompt EXIF Extractor](https://github.com/hellohukam/ai-prompt-exif-extractor)**: Cross-format parser extracting generation parameters and seeds from Midjourney, ComfyUI, Automatic1111, and NovelAI PNG chunks.
* **[Batch SVG Sanitizer](https://github.com/hellohukam/batch-svg-sanitizer)**: Headless CLI batch utility for massive icon libraries and vector sets.
* **[Hukam Automation Tools](https://github.com/hellohukam/hukam-automation-tools)**: Curated repository of reusable browser and OS workflow automations.

### 3. Creative Utilities & Media
* **[Image Color Palette Extractor](https://github.com/hellohukam/image-color-palette-extractor)**: K-means clustering palette extractor with WCAG accessibility contrast scoring.
* **[Vector Metadata Injector](https://github.com/hellohukam/vector-metadata-injector)**: IPTC/XMP/Dublin Core metadata injector for vector assets.
* **[Stock Metadata CSV Generator](https://github.com/hellohukam/stock-metadata-csv-generator)**: Automated CSV generator for Adobe Stock, Shutterstock, and Freepik.
* **[Smart Asset Organizer](https://github.com/hellohukam/smart-asset-organizer)**: Intelligent rule-based directory organizer for high-volume creative assets.
* **[YT Audio Extractor GUI](https://github.com/hellohukam/yt-audio-extractor-gui)**: High-fidelity lossless audio stream extractor with tagging support.

---

## 🛠️ Local Development & Build

The Hukam Labs official website is built using modern vanilla web standards and bundled with **Vite** for instantaneous loading and zero runtime framework overhead.

### Requirements
* **Node.js**: v18+ or v20+
* **npm**: v9+

### Commands

```bash
# Clone the repository
git clone https://github.com/hellohukam/hukam-labs.git
cd hukam-labs

# Install dependencies
npm install

# Start local development server
npm run dev

# Compile production bundle for Cloudflare Pages (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment on Cloudflare Pages

This repository is optimized for deployment on **Cloudflare Pages**:

* **Framework preset**: None / Vite
* **Build command**: `npm run build`
* **Build output directory**: `dist`
* **Node.js version**: 18+ or 20+

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

The code and design of this website are released under the [MIT License](LICENSE). Individual lab tools and repositories maintain their respective open-source licenses (MIT / GPL-3.0) specified within each repository.
