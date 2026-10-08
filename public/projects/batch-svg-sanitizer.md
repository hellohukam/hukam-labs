# Batch SVG Sanitizer Pro

> High-performance standalone utility to recursively clean, optimize, and sanitize SVG files for production and stock marketplaces.

- **Project URL**: https://labs.likehukam.com/projects/batch-svg-sanitizer/
- **Repository**: https://github.com/hellohukam/batch-svg-sanitizer
- **Status**: Active (v1.0.0)
- **License**: MIT
- **Category**: Developer & Automation
- **Download**: https://github.com/hellohukam/batch-svg-sanitizer/releases (BatchSVGSanitizer.exe)
- **Author**: Waleed Ahmad (Hukam Labs)

## Overview

Batch SVG Sanitizer Pro is a desktop utility for Windows designed to strip bloated editor metadata, proprietary namespaces, and redundant tags from SVG vectors created in Adobe Illustrator, Inkscape, Sketch, and Figma. It ensures SVG files comply with marketplace standards (Freepik, Adobe Stock, Shutterstock) while reducing file sizes without visual layout shifts.

## Key Features

- **Editor Namespace Stripping**: Cleans out Adobe Illustrator `i:pgf`, Inkscape `sodipodi`, and Sketch proprietary XML namespaces.
- **Redundancy Pruning**: Removes XML comments, doctype bloat, hidden editor layers, and orphaned `clipPath` definitions.
- **Coordinate Optimization**: Adjusts path coordinate decimal precision to compress file size without introducing visual angularity.
- **Batch Recursive Processing**: Recursively processes nested folder hierarchies with hundreds of SVG icons or vector illustrations.
- **Safety Backups**: Generates automated timestamped backup archives before applying in-place modifications.
- **File Size Savings Telemetry**: Computes exact byte and percentage savings across the entire processed library.

## Technical Specifications

- **Engine**: Python, XML ElementTree, regular expression optimization engine
- **Platform**: Windows 10 / Windows 11 (64-bit)
- **Packaging**: Standalone PyInstaller executable (BatchSVGSanitizer.exe)
