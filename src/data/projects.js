/**
 * Hukam Labs - Master Repository & Project Catalog
 * Real data audited directly from https://github.com/hellohukam
 */

export const LAB_PHILOSOPHY = "Useful software should be accessible.";

export const FOUNDER_INFO = {
  name: "Waleed Ahmad",
  role: "Independent Developer & AI Pipeline Specialist",
  credentials: "PSEB Registered Freelancer",
  portfolioUrl: "https://likehukam.com",
  githubUrl: "https://github.com/hellohukam",
  email: "hello@theRedLikeHukum.com"
};

export const CATEGORIES = [
  { id: "all", label: "All Projects", count: 16 },
  { id: "ai-creative", label: "AI & Creative Tools", count: 7 },
  { id: "developer", label: "Developer & Automation", count: 4 },
  { id: "utilities", label: "Creative Utilities", count: 5 }
];

export const PROJECTS = [
  {
    id: "hukam-flow",
    name: "Hukam Flow",
    tagline: "Modern Chrome Manifest V3 batch automation and queue runner for Google Flow.",
    category: "developer",
    categoryLabel: "Developer & Automation",
    status: "Active",
    version: "v6.3.1",
    featured: true,
    badge: "Core Automation Tool",
    iconType: "flow",
    description: "Production-ready Chrome Manifest V3 workflow automation tool for Google Flow (flow.google.com). Features a dedicated dockable Side Panel, MAIN-world page hooks for Angular trusted events, real-time API response interception (batchexecute, asb, trpc), jittered delay anti-bot pacing, smart Auto Mode with auto-download and failure retries, and prompt-indexed media naming.",
    highlights: [
      "Dedicated Chrome Side Panel UI (Alt + Shift + F)",
      "MAIN-world page hook bypassing Angular event restrictions",
      "Network interception of Google Flow internal batchexecute API",
      "Smart Auto Mode: Auto-run, wait, auto-download, and auto-retry",
      "Multi-tab isolation with tab-scoped storage keys",
      "100% local execution with zero tracking or telemetry"
    ],
    tech: ["Chrome MV3", "JavaScript", "Side Panel API", "Alarms", "Google Flow"],
    githubUrl: "https://github.com/hellohukam/hukam-flow",
    releaseUrl: "https://github.com/hellohukam/hukam-flow/releases"
  },
  {
    id: "hukam-ai-upscaler",
    name: "Hukam AI Upscaler Pro",
    tagline: "Hardware-accelerated Vulkan Real-ESRGAN super-resolution desktop application.",
    category: "ai-creative",
    categoryLabel: "AI & Creative Tools",
    status: "Active",
    version: "v1.0.0",
    featured: true,
    badge: "Standalone Executable",
    iconType: "upscaler",
    description: "High-performance desktop AI image and video upscaler for Windows x64 powered by Real-ESRGAN Vulkan NCNN. Hardware-accelerated across NVIDIA, AMD Radeon, and Intel GPUs without requiring proprietary CUDA drivers. Features crash-resilient resume logging, low-VRAM tile splitting, and pre-bundled neural network weights.",
    highlights: [
      "Real-ESRGAN Vulkan NCNN hardware acceleration",
      "Embedded neural models: realesrgan-x4plus, anime, and videov3",
      "Multi-format batch processing (PNG, JPG, WebP, MP4, MKV)",
      "Crash-resilient resume logging (never reprocesses finished items)",
      "Low-VRAM tile splitting preventing OOM on laptop GPUs",
      "100% standalone 55MB executable with zero external model downloads"
    ],
    tech: ["Python", "Real-ESRGAN", "Vulkan NCNN", "C++ Runtime", "PyInstaller"],
    githubUrl: "https://github.com/hellohukam/hukam-ai-upscaler",
    releaseUrl: "https://github.com/hellohukam/hukam-ai-upscaler/releases/download/v1.0.0/HukamUpscaler.exe"
  },
  {
    id: "svg-magic-cleaner",
    name: "SVG Magic Cleaner",
    tagline: "100% private, browser-based AI background remover and raster-to-SVG vectorizer.",
    category: "ai-creative",
    categoryLabel: "AI & Creative Tools",
    status: "Active",
    version: "v1.0.0",
    featured: true,
    badge: "In-Browser WebGPU",
    iconType: "wand",
    description: "Client-side AI background remover and raster-to-SVG vectorizer running entirely in the browser using Hugging Face Transformers.js and WebGPU. Executes briaai/RMBG-1.4 with zero server uploads, provides interactive before/after checkerboard comparisons, and generates clean scalable SVG vectors.",
    highlights: [
      "In-browser RMBG-1.4 neural background removal",
      "WebGPU acceleration with automatic WASM fallback",
      "100% client-side privacy: zero image data leaves the device",
      "Interactive side-by-side comparison slider",
      "Bitmap to clean resolution-independent SVG vector paths",
      "Batch queue processing with individual and ZIP download"
    ],
    tech: ["React 18", "TypeScript", "WebGPU", "Transformers.js", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/hellohukam/svg-magic-cleaner",
    releaseUrl: "https://github.com/hellohukam/svg-magic-cleaner"
  },
  {
    id: "ai-image-forensic-repair",
    name: "AI Image Forensic Repair",
    tagline: "Lossless pixel reconstruction utility for corrupted and truncated AI outputs.",
    category: "ai-creative",
    categoryLabel: "AI & Creative Tools",
    status: "Active",
    version: "v1.0.0",
    featured: true,
    badge: "Digital Forensics",
    iconType: "repair",
    description: "Desktop image restoration utility solving the infamous 'File format cannot be placed' error when importing AI images (Midjourney, Stable Diffusion, ComfyUI) into Adobe Illustrator, Photoshop, or InDesign. Rebuilds missing IEND/EOI markers, strips malformed chunks, and normalizes sRGB/RGBA pixel buffers.",
    highlights: [
      "Resolves Adobe Illustrator file import rejection errors",
      "Lossless pixel buffer container reconstruction",
      "Strips malformed metadata chunks and damaged EOF markers",
      "Normalizes color profiles to standard sRGB / RGBA",
      "Recursive batch subfolder processing",
      "Automatic timestamped safety backups before modification"
    ],
    tech: ["Python", "Pillow", "Binary Forensics", "Tkinter", "Standalone .EXE"],
    githubUrl: "https://github.com/hellohukam/ai-image-forensic-repair",
    releaseUrl: "https://github.com/hellohukam/ai-image-forensic-repair/releases"
  },
  {
    id: "vector-craft-studio",
    name: "Vector Craft Studio",
    tagline: "Interactive multi-layer image vectorizer with Potrace bezier curve tracing.",
    category: "ai-creative",
    categoryLabel: "AI & Creative Tools",
    status: "Active",
    version: "v1.0.0",
    featured: true,
    badge: "Vector Studio",
    iconType: "vector",
    description: "Interactive multi-layer image vectorizer and SVG generator. Employs color quantization and Potrace bezier curve algorithms to trace high-contrast raster bitmaps into clean, scalable SVG paths with real-time layer previews and SVG export.",
    highlights: [
      "Color quantization into distinct vector layers",
      "Potrace bezier curve smoothing algorithms",
      "Real-time interactive canvas preview",
      "Direct SVG path code inspection and export",
      "Precision corner threshold and noise filter controls"
    ],
    tech: ["React 18", "TypeScript", "Potrace", "Canvas API", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/hellohukam/vector-craft-studio",
    releaseUrl: "https://github.com/hellohukam/vector-craft-studio"
  },
  {
    id: "birefnet-bg-remover",
    name: "BiRefNet Pro BG Remover",
    tagline: "Desktop deep learning background remover powered by BiRefNet with DirectML.",
    category: "ai-creative",
    categoryLabel: "AI & Creative Tools",
    status: "Active",
    version: "v1.0.0",
    featured: false,
    badge: "DirectML GPU",
    iconType: "matting",
    description: "Desktop background removal tool powered by the BiRefNet bilateral reference deep learning model. Delivers hair-level precision edge matting with DirectML hardware acceleration and multi-core CPU support.",
    highlights: [
      "BiRefNet bilateral reference neural segmentation",
      "DirectX 12 DirectML GPU acceleration",
      "High-precision edge and fine hair matting",
      "Recursive batch folder queue with resume caching",
      "Direct transparent PNG export"
    ],
    tech: ["Python", "ONNX Runtime", "DirectML", "BiRefNet", "Tkinter"],
    githubUrl: "https://github.com/hellohukam/birefnet-bg-remover",
    releaseUrl: "https://github.com/hellohukam/birefnet-bg-remover/releases"
  },
  {
    id: "hukam-ai-creative-studio",
    name: "Hukam AI Creative Studio",
    tagline: "Full-stack FLUX.1 Schnell image studio with multi-key rotation and gallery.",
    category: "ai-creative",
    categoryLabel: "AI & Creative Tools",
    status: "In Development",
    version: "v1.0.0",
    featured: false,
    badge: "Full-Stack Studio",
    iconType: "studio",
    description: "Full-stack generative AI image studio powered by Together AI's FLUX.1 Schnell engine. Built with an automated 4-key rotation pool with rate-limit cooldown recovery, batch prompt generation, image gallery, CORS proxy, and PostgreSQL persistence.",
    highlights: [
      "FLUX.1 Schnell generative image synthesis",
      "Automated round-robin 4-key rotation pool",
      "Rate-limit cooldown recovery (60s circuit breaker)",
      "Persistent gallery with PostgreSQL and Drizzle ORM",
      "Bulk and single session ZIP downloads"
    ],
    tech: ["React 18", "TypeScript", "Express", "Drizzle ORM", "PostgreSQL", "FLUX.1"],
    githubUrl: "https://github.com/hellohukam/hukam-ai-creative-studio",
    releaseUrl: "https://github.com/hellohukam/hukam-ai-creative-studio"
  },
  {
    id: "ai-prompt-exif-extractor",
    name: "AI Prompt EXIF Extractor Pro",
    tagline: "Inspects PNG/JPG metadata to extract embedded prompts, A1111 tags, and ComfyUI graphs.",
    category: "developer",
    categoryLabel: "Developer & Automation",
    status: "Active",
    version: "v1.0.0",
    featured: false,
    badge: "Prompt Forensics",
    iconType: "terminal",
    description: "Standalone desktop utility to inspect PNG, JPG, and WebP files generated by Midjourney, Stable Diffusion, ComfyUI, and DALL-E. Extracts embedded A1111 parameters, ComfyUI workflow JSON graphs, and EXIF UserComment chunks to text catalogs.",
    highlights: [
      "Batch scans directories of AI-generated images",
      "Parses A1111 generation parameters and negative prompts",
      "Extracts embedded ComfyUI node graph JSON",
      "Reads Midjourney and DALL-E EXIF UserComment chunks",
      "Thread-safe dark GUI with progress tracker"
    ],
    tech: ["Python", "EXIF Parser", "JSON Extraction", "Tkinter", "PyInstaller"],
    githubUrl: "https://github.com/hellohukam/ai-prompt-exif-extractor",
    releaseUrl: "https://github.com/hellohukam/ai-prompt-exif-extractor/releases"
  },
  {
    id: "batch-svg-sanitizer",
    name: "Batch SVG Sanitizer Pro",
    tagline: "Strips proprietary editor namespaces, bloated XML tags, and optimizes vector SVGs.",
    category: "developer",
    categoryLabel: "Developer & Automation",
    status: "Active",
    version: "v1.0.0",
    featured: false,
    badge: "Production Sanitizer",
    iconType: "shield",
    description: "High-performance standalone Windows utility that recursively cleans and optimizes SVG files for web deployment and digital stock marketplaces. Strips proprietary editor namespaces (Illustrator, Inkscape, Figma), removes metadata bloat, and minifies coordinates.",
    highlights: [
      "Strips proprietary tags: Adobe, Inkscape, Sketch, Figma",
      "Removes XML comments, doctype bloat, and editor metadata",
      "Optimizes coordinate precision without distortion",
      "Recursive batch directory processing",
      "Real-time file size savings analytics"
    ],
    tech: ["Python", "XML ElementTree", "Regex Optimizer", "Tkinter", "PyInstaller"],
    githubUrl: "https://github.com/hellohukam/batch-svg-sanitizer",
    releaseUrl: "https://github.com/hellohukam/batch-svg-sanitizer/releases"
  },
  {
    id: "image-color-palette-extractor",
    name: "Color Palette Extractor Pro",
    tagline: "High-speed Octree color quantization tool extracting dominant HEX palettes in bulk.",
    category: "utilities",
    categoryLabel: "Creative Utilities",
    status: "Active",
    version: "v1.0.0",
    featured: false,
    badge: "Color Clustering",
    iconType: "palette",
    description: "High-speed, offline Windows desktop utility for designers, artists, and developers to extract dominant color palettes and HEX codes in bulk from images using Octree quantization with automatic thumbnail downscaling.",
    highlights: [
      "Batch directory image scanning",
      "Optimized Octree color clustering",
      "Custom palette resolution (1 to 256 colors)",
      "Structured HEX triplet text export (#RRGGBB)",
      "Standalone portable binary without Python runtime"
    ],
    tech: ["Python", "Pillow", "Octree Quantization", "Tkinter", "PyInstaller"],
    githubUrl: "https://github.com/hellohukam/image-color-palette-extractor",
    releaseUrl: "https://github.com/hellohukam/image-color-palette-extractor/releases"
  },
  {
    id: "hukam-automation-tools",
    name: "Hukam Automation Tools",
    tagline: "Creator pipeline automation suite for batch asset repair, FLUX, and metadata.",
    category: "developer",
    categoryLabel: "Developer & Automation",
    status: "Complete",
    version: "v1.0.0",
    featured: false,
    badge: "Pipeline Automation",
    iconType: "gears",
    description: "Automation suite tailored for digital asset creators: handles batch file repair, FLUX generation orchestration, and automated metadata tagging for media libraries.",
    highlights: [
      "Digital asset pipeline automation",
      "Batch repair and container verification",
      "Metadata tagging and cataloging tools"
    ],
    tech: ["Python", "CLI Tooling", "Batch Processing"],
    githubUrl: "https://github.com/hellohukam/hukam-automation-tools",
    releaseUrl: "https://github.com/hellohukam/hukam-automation-tools"
  },
  {
    id: "vector-metadata-injector",
    name: "Vector Metadata Injector",
    tagline: "Injects keywords, titles, and copyright metadata into vector files for stock pipelines.",
    category: "utilities",
    categoryLabel: "Creative Utilities",
    status: "Complete",
    version: "v1.0.0",
    featured: false,
    badge: "Stock Workflow",
    iconType: "tag",
    description: "Automated tool to embed keywords, titles, descriptions, and copyright information directly into vector files for stock agency submission pipelines.",
    highlights: [
      "Stock marketplace metadata injection",
      "Embedded XML metadata compliance",
      "Batch processing for digital vector creators"
    ],
    tech: ["Python", "SVG XML Metadata", "Stock Automation"],
    githubUrl: "https://github.com/hellohukam/vector-metadata-injector",
    releaseUrl: "https://github.com/hellohukam/vector-metadata-injector"
  },
  {
    id: "stock-metadata-csv-generator",
    name: "Stock Metadata CSV Generator",
    tagline: "Parses media libraries and generates submission CSVs for Adobe Stock & Shutterstock.",
    category: "utilities",
    categoryLabel: "Creative Utilities",
    status: "Complete",
    version: "v1.0.0",
    featured: false,
    badge: "Marketplace Tool",
    iconType: "csv",
    description: "Scans media folders, parses embedded titles and tags, and generates compliant submission CSV files for Adobe Stock, Freepik, and Shutterstock marketplaces.",
    highlights: [
      "Automated CSV catalog compilation",
      "Adobe Stock & Shutterstock compliance",
      "Extracts titles, descriptions, and keywords"
    ],
    tech: ["Python", "CSV Generator", "Stock Pipeline"],
    githubUrl: "https://github.com/hellohukam/stock-metadata-csv-generator",
    releaseUrl: "https://github.com/hellohukam/stock-metadata-csv-generator"
  },
  {
    id: "smart-asset-organizer",
    name: "Smart Asset Organizer",
    tagline: "Batch file classifier and folder organization utility for media workflows.",
    category: "utilities",
    categoryLabel: "Creative Utilities",
    status: "Complete",
    version: "v1.0.0",
    featured: false,
    badge: "File Management",
    iconType: "folder",
    description: "Lightweight media pipeline file classifier that sorts, categorizes, and organizes large unstructured downloads and design folders into standardized folder hierarchies.",
    highlights: [
      "Automated extension and dimension sorting",
      "Structured output folder creation",
      "Safe non-destructive organization"
    ],
    tech: ["Python", "File System Automation"],
    githubUrl: "https://github.com/hellohukam/smart-asset-organizer",
    releaseUrl: "https://github.com/hellohukam/smart-asset-organizer"
  },
  {
    id: "u2net-bg-remover",
    name: "U2Net BG Remover",
    tagline: "Offline desktop background remover using the classic U2Net salient model.",
    category: "ai-creative",
    categoryLabel: "AI & Creative Tools",
    status: "Complete",
    version: "v1.0.0",
    featured: false,
    badge: "Lightweight ML",
    iconType: "scissors",
    description: "Offline desktop background remover using the classic U2Net salient object detection model for fast, lightweight cutouts on standard CPU hardware.",
    highlights: [
      "Classic U2Net salient object segmentation",
      "CPU-friendly lightweight execution",
      "Offline local processing"
    ],
    tech: ["Python", "PyTorch", "U2Net", "Pillow"],
    githubUrl: "https://github.com/hellohukam/u2net-bg-remover",
    releaseUrl: "https://github.com/hellohukam/u2net-bg-remover"
  },
  {
    id: "yt-audio-extractor-gui",
    name: "YT Audio Extractor GUI",
    tagline: "Desktop GUI utility for extracting high-quality audio with metadata.",
    category: "utilities",
    categoryLabel: "Creative Utilities",
    status: "Complete",
    version: "v1.0.0",
    featured: false,
    badge: "Audio Utility",
    iconType: "audio",
    description: "Simple desktop GUI application for extracting and saving high-quality audio streams with ID3 metadata preservation.",
    highlights: [
      "High-bitrate audio extraction",
      "ID3 metadata tag preservation",
      "Simple desktop interface"
    ],
    tech: ["Python", "Tkinter", "Media Processing"],
    githubUrl: "https://github.com/hellohukam/yt-audio-extractor-gui",
    releaseUrl: "https://github.com/hellohukam/yt-audio-extractor-gui"
  }
];
