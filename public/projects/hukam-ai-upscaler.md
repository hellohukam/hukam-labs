# Hukam AI Upscaler Pro

> Hardware-accelerated Vulkan Real-ESRGAN super-resolution desktop application for Windows x64.

- **Project URL**: https://labs.likehukam.com/projects/hukam-ai-upscaler/
- **Repository**: https://github.com/hellohukam/hukam-ai-upscaler
- **Status**: Active (v1.0.0)
- **License**: MIT
- **Category**: AI & Media
- **Download**: https://github.com/hellohukam/hukam-ai-upscaler/releases/download/v1.0.0/HukamUpscaler.exe (~55 MB Standalone)
- **Author**: Waleed Ahmad (Hukam Labs)

## Overview

Hukam AI Upscaler Pro is a self-contained, high-performance desktop application for 64-bit Windows that upscales images and videos up to 4x resolution using Real-ESRGAN Vulkan NCNN. Unlike standard deep learning toolchains that require complex Python environments, PyTorch wheels, and proprietary NVIDIA CUDA drivers, Hukam Upscaler executes directly on consumer GPUs (NVIDIA, AMD Radeon, Intel Arc/Iris) through the universal Vulkan graphics API.

## The Problem

High-quality super-resolution tools generally suffer from two extremes:
1. **Cloud Upscalers**: Costly monthly subscriptions, rate limits, mandatory internet connectivity, and privacy risks when processing unreleased artwork or client photography.
2. **Open-Source Python Scripts**: Difficult for non-developers to install, requiring 4GB+ of PyTorch/CUDA libraries, specific Python versions, and separate manual model weight downloads.

## The Solution

Hukam AI Upscaler Pro bundles everything into a single 55MB executable:
- **Embedded Neural Models**: Pre-packages `realesrgan-x4plus` (general photography/textures), `realesrgan-x4plus-anime` (digital 2D illustration/manga), and `realesr-animevideov3` (smooth multi-scale temporal video).
- **Universal Vulkan Acceleration**: Runs natively on all modern GPUs without vendor-specific proprietary drivers.
- **Crash-Resilient Resume**: Maintains an append-only transaction log (`upscaler_resume_log.json`). If a long batch processing job is paused or interrupted, relaunching skips already completed files automatically.
- **Low-VRAM Tile Splitting**: Dynamically divides massive 4K/8K images into smaller overlapping tiles (100–200px) during neural inference, eliminating Out-Of-Memory (OOM) errors on entry-level GPUs and laptops.
- **Video Super-Resolution**: Extracts, upscales, and reassembles video frames in `.mp4`, `.mkv`, `.avi`, and `.mov` containers with temporal coherence using system FFmpeg.

## Technical Specifications

- **Runtime**: Real-ESRGAN Vulkan NCNN C++ binary wrapped with Python Tkinter GUI
- **Platform**: Windows 10 / Windows 11 (64-bit)
- **Vulkan Support**: Vulkan 1.1+ (NVIDIA GeForce, AMD Radeon, Intel Arc/Iris)
- **Packaging**: PyInstaller standalone executable (~55 MB)
- **Supported Input**: `.png`, `.jpg`, `.jpeg`, `.webp`, `.bmp`, `.tiff`, `.mp4`, `.mkv`, `.mov`

## Installation & Usage

```powershell
# Quickstart: Download standalone binary directly
# https://github.com/hellohukam/hukam-ai-upscaler/releases/download/v1.0.0/HukamUpscaler.exe

# Or run from source:
git clone https://github.com/hellohukam/hukam-ai-upscaler.git
cd hukam-ai-upscaler
pip install -r requirements.txt
python src/main.py
```
