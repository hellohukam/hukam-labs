# AI Image Forensic Repair Tool

> Forensic image repair utility solving corrupted headers and the Adobe Illustrator 'File format cannot be placed' error.

- **Project URL**: https://labs.likehukam.com/projects/ai-image-forensic-repair/
- **Repository**: https://github.com/hellohukam/ai-image-forensic-repair
- **Status**: Active (v1.1.0)
- **License**: MIT
- **Category**: AI & Media
- **Download**: https://github.com/hellohukam/ai-image-forensic-repair/releases (Standalone ImageRepairTool.exe)
- **Author**: Waleed Ahmad (Hukam Labs)

## Overview

AI Image Forensic Repair Tool is a Windows desktop application that resolves corrupt, truncated, and malformed image files produced by generative AI tools (Midjourney, Stable Diffusion, ComfyUI, DALL-E). While modern web browsers are forgiving of non-standard container formats, vector editors such as Adobe Illustrator, InDesign, and Photoshop strictly reject them with *"The file format cannot be placed"* or *"The file is damaged and could not be opened"*. This utility performs a deep, lossless pixel buffer reconstruction, repairing container headers so files place seamlessly into print and vector workflows.

## The Problem

AI generators often export PNG and JPEG files that violate strict ISO/IEC container specifications:
- Missing `IEND` (PNG) or `EOI` (JPEG) terminal chunks due to sudden generation cutoffs.
- Malformed proprietary EXIF or tEXt metadata containing unescaped characters.
- Non-standard indexed color channel palettes or inconsistent alpha channel depth.

Standard tools either fail to open these files or compress them with lossy re-encoding.

## The Solution

AI Image Forensic Repair reconstructs files at the binary buffer level:
- **Header Reconstruction**: Synthesizes proper PNG/JPEG chunk sequences and appends missing termination markers.
- **Color Space Normalization**: Standardizes erratic color channels into pure, compliant sRGB or RGBA profiles.
- **Lossless Pixel Preservation**: Reads raw image pixel matrices and writes pristine container structures without JPEG artifact re-compression.
- **Safety Modes**:
  - *Export Mode*: Generates clean images into a designated `Repaired_HQ` subfolder, leaving original inputs intact.
  - *In-Place Mode*: Overwrites files in place while generating an automatic timestamped backup archive.
- **Recursive Processing**: Scans deeply nested asset directories, processing hundreds of assets per minute.

## Technical Specifications

- **Engine**: Python, Pillow buffer reconstruction, binary marker repair
- **Platform**: Windows 10 / Windows 11 (64-bit)
- **Packaging**: Self-contained PyInstaller executable (ImageRepairTool.exe)
- **Supported Formats**: `.png`, `.jpg`, `.jpeg`, `.webp`, `.bmp`, `.tiff`

## Usage

```powershell
# Run standalone executable:
# Download ImageRepairTool.exe from Releases and launch.

# Or run from source:
git clone https://github.com/hellohukam/ai-image-forensic-repair.git
cd ai-image-forensic-repair
pip install -r requirements.txt
python src/main.py
```
