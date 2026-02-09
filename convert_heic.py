import os

import pillow_heif
from PIL import Image

# Register HEIF opener with Pillow
pillow_heif.register_heif_opener()

PHOTOS_DIR = os.path.join(os.path.dirname(__file__), "photos")

def convert_heic_to_jpg():
    if not os.path.exists(PHOTOS_DIR):
        print(f"Directory not found: {PHOTOS_DIR}")
        return

    converted = 0
    for filename in os.listdir(PHOTOS_DIR):
        if filename.lower().endswith(".heic"):
            heic_path = os.path.join(PHOTOS_DIR, filename)
            jpg_filename = os.path.splitext(filename)[0] + ".jpg"
            jpg_path = os.path.join(PHOTOS_DIR, jpg_filename)

            try:
                img = Image.open(heic_path)
                img.save(jpg_path, "JPEG", quality=90)
                print(f"Converted: {filename} -> {jpg_filename}")
                os.remove(heic_path)
                print(f"Removed:   {filename}")
                converted += 1
            except Exception as e:
                print(f"Error converting {filename}: {e}")

    print(f"\nDone. {converted} file(s) converted.")

if __name__ == "__main__":
    convert_heic_to_jpg()
