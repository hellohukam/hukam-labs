# Hukam Flow

> Modern Chrome Manifest V3 batch automation and queue runner for Google Flow (flow.google.com).

- **Project URL**: https://labs.likehukam.com/projects/hukam-flow/
- **Repository**: https://github.com/hellohukam/hukam-flow
- **Status**: Active (v6.3.1)
- **License**: MIT
- **Category**: Developer & Automation
- **Author**: Waleed Ahmad (Hukam Labs)

## Overview

Hukam Flow is a production-grade Chrome extension built on Manifest V3. It solves the operational challenge of orchestrating multi-prompt image and video generation queues on Google Flow (flow.google.com). It provides a dockable Chrome Side Panel interface, injects trusted event synthesis hooks in the page's MAIN execution world to overcome Angular form guards, intercepts internal batchexecute network payloads, and manages multi-tab isolated batch generation queues with anti-bot jitter pacing and automated media downloads.

## The Problem

Automating Google Flow via standard script injectors or UI recorders triggers multiple barriers:
1. Angular form bindings ignore simulated input events unless dispatched with trusted browser event lifecycles.
2. Long multi-prompt generation batches suffer from server timeouts, requiring manual retries and continuous active tab focus.
3. Media assets must be manually located and downloaded individually, losing prompt correlation.

## The Solution

Hukam Flow resolves these bottlenecks through an architectural stack:
- **Dedicated Side Panel**: Runs in Chrome's dockable Side Panel (`Alt + Shift + F`), leaving the main browsing viewport unobstructed.
- **MAIN-World Injection**: Injects page hooks into the primary execution context to synthesize authentic Angular events that reliably trigger generation requests.
- **Network Interception**: Intercepts internal `batchexecute` and `asb` API payloads via `chrome.webRequest` to detect generation completion independently of fragile DOM mutations.
- **Smart Auto Mode**: Orchestrates generation, wait polling, failure retries, and prompt-indexed auto-downloading with randomized jitter delays (2500ms–5500ms) to prevent throttling.
- **Tab-Scoped State Isolation**: Multi-tab operation maintains isolated storage keys per tab ID, preventing race conditions.
- **Zero Telemetry**: Operates 100% locally with zero external network pings, phone-home metrics, or remote analytics.

## Technical Specifications

- **Manifest**: Chrome Manifest V3
- **APIs**: Chrome Side Panel, chrome.storage.local, chrome.webRequest, chrome.alarms, chrome.downloads
- **Permissions**: activeTab, sidePanel, storage, alarms, downloads
- **Language**: Pure Vanilla JavaScript (ES2022) with zero runtime bundler bloat
- **Host Permissions**: `*://flow.google.com/*`

## Installation

```bash
# Clone the repository
git clone https://github.com/hellohukam/hukam-flow.git

# Load into Chrome:
# 1. Navigate to chrome://extensions/
# 2. Toggle 'Developer mode' (top right)
# 3. Click 'Load unpacked' and select the hukam-flow folder
# 4. Open https://flow.google.com and press Alt + Shift + F
```
