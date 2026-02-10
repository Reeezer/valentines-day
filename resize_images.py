import os
from PIL import Image

# HD resolution (max 1920x1920)
MAX_WIDTH = 1920
MAX_HEIGHT = 1920

PHOTOS_DIR = os.path.join(os.path.dirname(__file__), "photos")

def resize_image_to_hd(image_path):
    """
    Resize an image to HD resolution (max 1920x1920) while maintaining aspect ratio.
    
    Args:
        image_path: Path to the image file
        
    Returns:
        Tuple of (was_resized, new_size) where was_resized is a boolean and 
        new_size is a tuple of (width, height), or (False, None) if not resized
    """
    try:
        img = Image.open(image_path)
        original_width, original_height = img.size
        
        # Check if image needs resizing
        if original_width <= MAX_WIDTH and original_height <= MAX_HEIGHT:
            return False, None
        
        # Calculate new dimensions while maintaining aspect ratio
        ratio = min(MAX_WIDTH / original_width, MAX_HEIGHT / original_height)
        new_width = int(original_width * ratio)
        new_height = int(original_height * ratio)
        
        # Resize the image
        resized_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Save with good quality (80) and preserve EXIF data if available
        exif_data = img.info.get('exif')
        if exif_data:
            resized_img.save(image_path, quality=80, optimize=True, exif=exif_data)
        else:
            resized_img.save(image_path, quality=80, optimize=True)
        
        img.close()
        resized_img.close()
        
        return True, (new_width, new_height)
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return False, None

def resize_all_images():
    """Resize all images in the photos directory to HD resolution."""
    if not os.path.exists(PHOTOS_DIR):
        print(f"Directory not found: {PHOTOS_DIR}")
        return
    
    # Supported image extensions
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.JPG', '.JPEG', '.PNG', '.GIF')
    
    resized_count = 0
    skipped_count = 0
    total_count = 0
    
    print("Resizing images to HD resolution (max 1920x1920)...")
    print("=" * 70)
    
    for filename in sorted(os.listdir(PHOTOS_DIR)):
        if filename.endswith(image_extensions):
            total_count += 1
            image_path = os.path.join(PHOTOS_DIR, filename)
            
            # Get original size
            try:
                img = Image.open(image_path)
                original_size = img.size
                img.close()
            except Exception as e:
                print(f"Error reading {filename}: {e}")
                continue
            
            # Resize the image
            was_resized, new_size = resize_image_to_hd(image_path)
            
            if was_resized:
                print(f"✓ Resized:  {filename}")
                print(f"            {original_size[0]}x{original_size[1]} -> {new_size[0]}x{new_size[1]}")
                resized_count += 1
            else:
                print(f"○ Skipped:  {filename} ({original_size[0]}x{original_size[1]} - already HD or smaller)")
                skipped_count += 1
    
    print("=" * 70)
    print(f"\nDone!")
    print(f"Total images:   {total_count}")
    print(f"Resized:        {resized_count}")
    print(f"Already HD:     {skipped_count}")

if __name__ == "__main__":
    resize_all_images()
