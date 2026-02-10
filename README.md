# valentines-day

A romantic Valentine's Day website featuring a dynamic photo gallery with floating violet animations, countdown timer, love letter, and personalized romantic content.

## Features

- 💜 Beautiful purple and red color scheme
- 🌸 Floating violet cartoon animations
- ⏱️ Live countdown timer to Valentine's Day 2026
- 💌 Personalized love letter section
- 💝 "Reasons I Love You" cards with beautiful animations
- 🎨 Interactive heart animations on click
- 📸 Three-column photo gallery with smooth animations
- ✨ Hover effects that blur photos and reveal location/date
- 📱 Fully responsive design for all devices

## How to Update Photos

### 1. Add Your Photos
Place your couple photos in the `photos/` folder. Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`

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

## Personalization Features

### Countdown Timer
The website includes a live countdown to Valentine's Day 2026, displaying days, hours, minutes, and seconds. The timer updates in real-time and creates anticipation for the special day.

### Love Letter
A beautifully styled personal message section where you can express your feelings. Edit the text in `index.html` under the `.love-letter-section` to customize your message.

### Reasons I Love You
Six interactive cards showcasing reasons for your love. Each card features:
- An emoji representing the reason
- A heartfelt message
- Smooth hover animations with elevation and glow effects

Customize these in `index.html` by editing the `.reason-card` elements.

### Interactive Hearts
Click anywhere on the page to create floating purple hearts that animate upward and fade away. This adds a playful, romantic interaction to the website.

## Customization

### Personalizing the Content
1. **Update the Love Letter**: Edit the message in `index.html` under the `.love-letter` class
2. **Customize Reasons**: Modify the reason cards in the `.reasons-grid` section
3. **Change Names**: Update "Léon + Lalie" in the header to your names
4. **Adjust Countdown Date**: Change the target date in `script.js` (search for "Valentine's Day 2026")

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
