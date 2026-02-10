# valentines-day

A romantic Valentine's Day website featuring a dynamic photo gallery with floating violet animations.

## Features

- 💜 Beautiful purple and red color scheme
- 🌸 Floating violet cartoon animations
- 📸 Three-column photo gallery with smooth animations
- ✨ Hover effects that blur photos and reveal location/date
- 📱 Responsive design for all devices

## How to Update Photos

### 1. Add Your Photos
Place your couple photos in the `photos/` folder. Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`

**Optional: Resize Images to HD**
If your photos are very large, you can reduce their file size by running:
```bash
python3 resize_images.py
```
This will resize images to HD resolution (max 1920x1920 pixels) while maintaining aspect ratio and quality.

### 2. Update the JSON Configuration
Edit `photos.json` to add or modify photo metadata:

```json
{
  "photos": [
    {
      "id": 1,
      "filename": "your-photo.jpg",
      "place": "Location Name",
      "date": "Month Year",
      "column": 1,
      "gradient": "linear-gradient(135deg, #B02E0C 0%, #7F00FF 100%)",
      "height": "600px"
    }
  ]
}
```

**Properties:**
- `id`: Unique identifier for the photo
- `filename`: Name of the photo file in the `photos/` folder
- `place`: Location where the photo was taken (shown on hover)
- `date`: Date when the photo was taken (shown on hover)
- `column`: Which column to display the photo (1, 2, or 3)
- `gradient`: Fallback gradient if photo doesn't load
- `height`: Height of the photo card

### 3. Column Animations
- **Column 1**: Moves up
- **Column 2**: Moves down
- **Column 3**: Moves up

Distribute your photos across columns for a balanced look.

## Color Palette

- `#7F00FF` - Purple (primary)
- `#000022` - Dark blue/black (background)
- `#F0F4EF` - Off-white (text)
- `#B02E0C` - Red (accent)

## Local Development

Simply open `index.html` in a web browser, or use a local server:

```bash
python3 -m http.server 8080
# Then visit http://localhost:8080
```

## Deploying to GitHub Pages

1. Push your changes to the repository
2. Go to repository Settings > Pages
3. Select the branch and folder to deploy
4. Your site will be available at `https://yourusername.github.io/valentines-day/`
