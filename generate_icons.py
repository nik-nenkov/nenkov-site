from PIL import Image
import os

# Source image
source_path = "/home/nik/Desktop/Git/nenkov-site/public/images/avatar.png"

# Target icon sizes and filenames
targets = [
    "apple-icon-180.png",
    "icon-32x32.png",
    "icon-48x48.png",
    "icon-64x64.png",
    "icon-72x72.png",
    "icon-96x96.png",
    "icon-128x128.png",
    "icon-144x144.png",
    "icon-152x152.png",
    "icon-192x192.png",
    "icon-256x256.png",
    "icon-384x384.png",
    "icon-512x512.png",
    "manifest-icon-192.maskable.png",
    "manifest-icon-512.maskable.png"
]

# Output directory
output_dir = "/home/nik/Desktop/Git/nenkov-site/public/icons"

# Open source image
img = Image.open(source_path).convert("RGBA")

# Generate each target PNG
for filename in targets:
    size_part = filename.split("-")[-1]
    size_part = size_part.replace("maskable.png", "").replace(".png", "").strip(".")
    width, height = map(int, size_part.split("x") if "x" in size_part else [size_part, size_part])
    resized_img = img.resize((width, height), Image.LANCZOS)
    output_path = os.path.join(output_dir, filename)
    resized_img.save(output_path, format="PNG")
    print(f"Created {output_path}")

# --- Generate favicon.ico with multiple sizes ---
ico_sizes = [(32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
# Resize the image for each size
ico_imgs = [img.resize(size, Image.LANCZOS) for size in ico_sizes]
ico_path = os.path.join("/home/nik/Desktop/Git/nenkov-site/public", "favicon.ico")
ico_imgs[0].save(ico_path, format="ICO", sizes=ico_sizes)
print(f"Created {ico_path}")
