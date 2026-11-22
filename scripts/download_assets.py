#!/usr/bin/env python3
import os
import subprocess
import urllib.request

IMAGE_TARGETS = {
    "hero-mist-sunrise": "https://images.unsplash.com/photo-1763477892700-764ca9a3f90a",
    "cadet-group-run": "https://images.unsplash.com/photo-1571008887538-b36bb32f4571",
    "track-running": "https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca",
    "western-ghats-plate": "https://images.unsplash.com/photo-1708547981655-e67e6dada4c3",
    "sahyadri-landscape": "https://images.unsplash.com/photo-1791217929083-26613826caad",
    "cavalry-saddle": "https://images.unsplash.com/photo-1582438936689-2c109222b7f9",
    "riding-boots": "https://images.unsplash.com/photo-1581803362003-00264b4dcc0c",
    "leather-saddle-texture": "https://images.unsplash.com/photo-1536356953159-9043c2260bba",
    "grandfather-beg-field": "https://images.unsplash.com/photo-1613414824045-8af2d5730be2",
    "classroom-students": "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    "nda-blackboard-math": "https://images.unsplash.com/photo-1509228468518-180dd4864904",
    "study-desk": "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    "rope-climbing": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    "obstacle-course-gto": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    "teamwork-ssb-task": "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
    "dormitory-beds": "https://images.unsplash.com/photo-1721299417031-de890ff33b26",
    "cross-country-running": "https://images.unsplash.com/photo-1769714523909-8172462d2664",
    "indian-flag-tricolor": "https://images.unsplash.com/photo-1570058322655-aa954ce2cef1",
}

IMG_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "img")
os.makedirs(IMG_DIR, exist_ok=True)

print(f"Target Directory: {IMG_DIR}")

for slug, base_url in IMAGE_TARGETS.items():
    jpg_path = os.path.join(IMG_DIR, f"{slug}.jpg")
    webp_path = os.path.join(IMG_DIR, f"{slug}.webp")
    webp_800_path = os.path.join(IMG_DIR, f"{slug}-800.webp")
    
    # Download high-res (1600px wide) JPG
    download_url = f"{base_url}?auto=format&fit=crop&w=1600&q=82"
    req = urllib.request.Request(download_url, headers={"User-Agent": "Mozilla/5.0"})
    
    try:
        print(f"Downloading {slug} from {base_url}...")
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(jpg_path, "wb") as f:
                f.write(data)
        
        # Convert to WebP using sips
        subprocess.run(["sips", "-s", "format", "webp", jpg_path, "--out", webp_path], check=True, stdout=subprocess.DEVNULL)
        
        # Create 800w version
        subprocess.run(["sips", "--resampleWidth", "800", "-s", "format", "webp", jpg_path, "--out", webp_800_path], check=True, stdout=subprocess.DEVNULL)
        
        print(f"  ✓ Saved {slug}.jpg ({os.path.getsize(jpg_path)} B), {slug}.webp, {slug}-800.webp")
    except Exception as e:
        print(f"  ✗ Failed {slug}: {e}")

print("Asset download and processing complete!")

