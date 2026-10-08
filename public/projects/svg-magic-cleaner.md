# SVG Magic Cleaner

> 100% private, browser-based AI background remover and raster-to-SVG vectorizer using Hugging Face Transformers & WebGPU.

- **Project URL**: https://labs.likehukam.com/projects/svg-magic-cleaner/
- **Repository**: https://github.com/hellohukam/svg-magic-cleaner
- **Status**: Active (v1.0.0)
- **License**: MIT
- **Category**: AI & Media
- **Author**: Waleed Ahmad (Hukam Labs)

## Overview

SVG Magic Cleaner is a client-side web application that performs neural background removal and bitmap-to-SVG vectorization directly inside the user's browser. Built with React 18, TypeScript, and Hugging Face Transformers.js, it executes the `briaai/RMBG-1.4` background matting model via WebGPU hardware acceleration (falling back to WebAssembly when WebGPU is unavailable). Not a single pixel is uploaded to a remote server.

## The Problem

Designers and creators frequently need to remove backgrounds from raster logos, icons, and illustrations and convert them into scalable vectors. Existing solutions either require paid cloud API subscriptions that expose private client assets, or heavyweight desktop software that consumes gigabytes of storage.

## The Solution

SVG Magic Cleaner runs the complete AI and vectorization pipeline in the browser runtime:
- **In-Browser Neural Matting**: Employs ONNX Runtime Web via `@huggingface/transformers` to run RMBG-1.4 locally.
- **Hardware Acceleration**: Takes advantage of modern browser WebGPU compute pipelines for fast local inference with seamless WebAssembly fallback.
- **Pure Client-Side Privacy**: 100% zero server network traffic for image data.
- **Bitmap-to-SVG Conversion**: Traces segmented alpha masks into clean, scalable SVG `<path>` elements.
- **Visual Inspection**: Real-time before-and-after split-screen comparison over an alpha transparency checkerboard.
- **Batch Processing**: Drag-and-drop batch queue supporting multiple images with individual and ZIP archive downloads.

## Technical Specifications

- **Frontend**: React 18.3, TypeScript 5.5, Vite 5.4, Tailwind CSS 3.4
- **Inference Runtime**: Hugging Face Transformers.js v3, ONNX Runtime Web (WebGPU / WASM execution)
- **Model**: `briaai/RMBG-1.4` ONNX
- **Vector Engine**: Canvas alpha threshold tracing to SVG XML
- **Packaging**: JSZip, FileSaver

## Quickstart

```bash
git clone https://github.com/hellohukam/svg-magic-cleaner.git
cd svg-magic-cleaner
npm install
npm run dev
# Open http://localhost:8080 in a WebGPU-enabled browser
```
