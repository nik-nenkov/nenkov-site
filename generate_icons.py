from PIL import Image
import os

# Source image
source_path = "/home/nik/Desktop/Git/nenkov-site/public/Nik-123.png"

# Target icon sizes and filenames
targets = [
    "apple-icon-180.png",
    "icon-48x48.png",
    "icon-72x72.png",
    "icon-96x96.png",
    "icon-128x128.png",
    "icon-144x144.png",
    "icon-152x152.png",
    "icon-192x192.png",
    "icon-384x384.png",
    "icon-512x512.png",
    "manifest-icon-192.maskable.png",
    "manifest-icon-512.maskable.png"
]

# Output directory
output_dir = "/home/nik/Desktop/Git/nenkov-site/public/icons"

# Open source image
img = Image.open(source_path).convert("RGBA")

# Generate each target
for filename in targets:
    size_part = filename.split("-")[-1]
    size_part = size_part.replace("maskable.png", "").replace(".png", "").strip(".")
    width, height = map(int, size_part.split("x") if "x" in size_part else [size_part, size_part])
    resized_img = img.resize((width, height), Image.LANCZOS)
    output_path = os.path.join(output_dir, filename)
    resized_img.save(output_path, format="PNG")
    print(f"Created {output_path}")
