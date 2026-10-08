# Vector Craft Studio

> Advanced full-stack raster-to-vector SVG studio with multi-layer color quantization and pure TypeScript Potrace Bézier curve tracing.

- **Project URL**: https://labs.likehukam.com/projects/vector-craft-studio/
- **Repository**: https://github.com/hellohukam/vector-craft-studio
- **Status**: Active (v1.0.0)
- **License**: MIT
- **Category**: AI & Media
- **Author**: Waleed Ahmad (Hukam Labs)

## Overview

Vector Craft Studio is an interactive web studio that transforms raster images (PNG, JPG, WebP) into production-ready, clean, scalable multi-color vector graphics. Unlike traditional monochromatic vectorizers, it decomposes full-color artwork into distinct, layered SVG path stacks using configurable color quantization and a pure TypeScript implementation of the Potrace Bézier curve tracing algorithm.

## Key Features

- **Multi-Layer Vector Tracing**: Decomposes full-color bitmaps into 2 to 32 discrete color layers that maintain visual depth.
- **Pure TypeScript Potrace Engine**: In-memory contour detection and Bézier smoothing running without native C/C++ node-gyp bindings.
- **Interactive Color Palette Inspector**: Live extraction and inspection of dominant hex swatches with layer coverage percentages.
- **Split-Screen Zoom & Pan**: Real-time side-by-side comparison between original bitmap and vectorized SVG output.
- **Precision Parameter Tuning**: Sliders for noise despeckle, corner thresholds, curve optimization, and alpha handling.
- **Direct Code Inspection**: View, copy, or download clean SVG XML markup directly.

## Technical Specifications

- **Frontend**: React 18.3, TypeScript 5.6, Vite 5.4, Tailwind CSS 3.4
- **Backend**: Express 4.21 with in-memory storage (optional PostgreSQL + Drizzle ORM)
- **Vector Core**: Pure TypeScript Potrace port, HTML5 Canvas API

## Quickstart

```bash
git clone https://github.com/hellohukam/vector-craft-studio.git
cd vector-craft-studio
npm install
npm run dev
# Open http://localhost:5000 in your browser
```
