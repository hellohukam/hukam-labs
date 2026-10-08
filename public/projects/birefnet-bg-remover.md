# BiRefNet Pro AI — Background Remover

> High-fidelity AI background removal desktop application powered by BiRefNet with Windows DirectML GPU acceleration.

- **Project URL**: https://labs.likehukam.com/projects/birefnet-bg-remover/
- **Repository**: https://github.com/hellohukam/birefnet-bg-remover
- **Status**: Active (v1.0.0)
- **License**: MIT
- **Category**: AI & Media
- **Download**: https://github.com/hellohukam/birefnet-bg-remover/releases (BiRefNetProRemover.exe)
- **Author**: Waleed Ahmad (Hukam Labs)

## Overview

BiRefNet Pro AI is a standalone desktop background removal utility for Windows x64. It is powered by the state-of-the-art BiRefNet (Bilateral Reference Network) neural segmentation architecture, running via ONNX Runtime with native DirectML GPU acceleration. It excels at fine-detail matting—intricate hair strands, animal fur, transparent glassware, and complex silhouettes—surpassing standard salient object detectors.

## Key Features

- **Sub-Pixel Edge Precision**: Deep bilateral reference network capturing fine hair strands, fur, and glass transparency without jagged halo artifacts.
- **DirectML GPU Acceleration**: Native Windows DirectX 12 DirectML provider supporting NVIDIA RTX, AMD Radeon, and Intel Arc/Iris graphics cards with CPU fallback.
- **Multi-Worker Batch Queuing**: Configurable concurrent processing workers for maximum hardware saturation.
- **Intelligent Resume Caching**: Tracks completed image hashes to allow pausing and resuming batch queues without duplicate inference.
- **Transparent PNG Export**: Outputs clean, full-resolution transparent PNG files directly to an isolated subfolder.

## Technical Specifications

- **Engine**: BiRefNet ONNX via ONNX Runtime DirectML
- **Platform**: Windows 10 / Windows 11 (64-bit)
- **GUI**: Python Tkinter with dark-mode styling
- **Packaging**: Self-contained PyInstaller executable (BiRefNetProRemover.exe)

## Quickstart

```powershell
# Download BiRefNetProRemover.exe from Releases and run.
# Or run from source:
git clone https://github.com/hellohukam/birefnet-bg-remover.git
cd birefnet-bg-remover
pip install -r requirements.txt
python src/main.py
```
