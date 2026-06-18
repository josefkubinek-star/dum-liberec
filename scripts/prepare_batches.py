#!/usr/bin/env python3
"""
Prepare 53 architectural photos for batch processing (3 images per batch).
Resize images >2000px to fit API constraints.
"""

import os
import json
from PIL import Image
from pathlib import Path

SOURCE_DIR = Path("/Users/josefkubinek/Library/CloudStorage/OneDrive-Osobní/AI/Dum Liberec/assets/archive_raw")
TEMP_DIR = Path("/Users/josefkubinek/Library/CloudStorage/OneDrive-Osobní/AI/Dum Liberec/.temp_processing")
MAX_DIMENSION = 2000
BATCH_SIZE = 3

def resize_image_if_needed(image_path):
    """Resize image if it exceeds MAX_DIMENSION, return processed path."""
    img = Image.open(image_path)
    width, height = img.size
    max_dim = max(width, height)
    
    if max_dim > MAX_DIMENSION:
        scale = MAX_DIMENSION / max_dim
        new_size = (int(width * scale), int(height * scale))
        img_resized = img.resize(new_size, Image.Resampling.LANCZOS)
        
        temp_path = TEMP_DIR / image_path.name
        img_resized.save(temp_path, quality=95)
        return str(temp_path), f"{width}x{height} → {new_size[0]}x{new_size[1]}"
    
    return str(image_path), f"{width}x{height} (OK)"

def main():
    TEMP_DIR.mkdir(exist_ok=True)
    
    # Get all image files
    images = sorted([f for f in SOURCE_DIR.glob("*.jpeg")])
    
    print(f"✓ Found {len(images)} images\n")
    
    # Check dimensions and resize if needed
    processing_log = []
    for i, img_path in enumerate(images, 1):
        processed_path, status = resize_image_if_needed(img_path)
        processing_log.append({
            "number": i,
            "original_name": img_path.name,
            "processed_path": processed_path,
            "status": status
        })
        print(f"  {i:2d}. {img_path.name[:50]:50s} | {status}")
    
    # Create batch assignments
    batches = {}
    for i, log_entry in enumerate(processing_log):
        batch_num = (i // BATCH_SIZE) + 1
        if batch_num not in batches:
            batches[batch_num] = []
        batches[batch_num].append(log_entry)
    
    # Save batch manifest
    manifest = {
        "total_images": len(images),
        "batch_size": BATCH_SIZE,
        "total_batches": len(batches),
        "batches": batches,
        "processing_log": processing_log
    }
    
    manifest_path = Path("/Users/josefkubinek/Library/CloudStorage/OneDrive-Osobní/AI/Dum Liberec/batch_manifest.json")
    with open(manifest_path, 'w') as f:
        json.dump(manifest, f, indent=2)
    
    print(f"\n✓ Manifest saved to batch_manifest.json")
    print(f"\n📋 BATCH PLAN:")
    print(f"   Total images: {len(images)}")
    print(f"   Batch size: {BATCH_SIZE} images/batch")
    print(f"   Total batches: {len(batches)}")
    
    # Show first batch preview
    print(f"\n🔍 BATCH 1 (Preview):")
    for entry in batches[1]:
        print(f"   {entry['number']:2d}. {entry['original_name'][:40]}")

if __name__ == "__main__":
    main()
