from PIL import Image, ImageEnhance
import os

# Paths
source_dir = "/Users/josefkubinek/Library/CloudStorage/OneDrive-Osobní/AI/Dum Liberec/docs/.temp_resized"
dest_dir = os.path.join(source_dir, "enhanced")
os.makedirs(dest_dir, exist_ok=True)

# Enhancement parameters
contrast_factor = 1.5
sharpness_factor = 2.0

# Enhance images
def enhance_image(image_path, output_path):
    with Image.open(image_path) as img:
        # Increase contrast
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(contrast_factor)

        # Increase sharpness
        enhancer = ImageEnhance.Sharpness(img)
        img = enhancer.enhance(sharpness_factor)

        # Save enhanced image
        img.save(output_path, quality=95)

# Process all images in the source directory
for filename in os.listdir(source_dir):
    if filename.lower().endswith(('.jpeg', '.jpg', '.png')):
        source_path = os.path.join(source_dir, filename)
        output_path = os.path.join(dest_dir, f"enhanced_{filename}")
        enhance_image(source_path, output_path)
        print(f"Enhanced: {filename} -> {output_path}")

print("Image enhancement complete. Enhanced images saved to:", dest_dir)