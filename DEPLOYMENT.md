# Deploying to GitHub Pages

## Quick Setup

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select your branch (e.g., `main` or `copilot/create-valentines-day-website`)
   - Select "/ (root)" as the folder
   - Click "Save"

2. **Your site will be available at:**
   ```
   https://reeezer.github.io/valentines-day/
   ```

## Adding Your Photos

1. **Add your photos** to the `photos/` folder
   - Use meaningful filenames (e.g., `paris_2024.jpg`, `rome_vacation.jpg`)
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`

2. **Update photos.json** with your photo metadata:
   ```json
   {
     "id": 1,
     "filename": "your-photo.jpg",
     "place": "Paris, France",
     "date": "June 2024",
     "column": 1,
     "gradient": "linear-gradient(135deg, #B02E0C 0%, #7F00FF 100%)",
     "height": "600px"
   }
   ```

3. **Distribute photos** across the three columns (1, 2, 3) for a balanced look

4. **Commit and push** your changes
   ```bash
   git add photos/ photos.json
   git commit -m "Add our couple photos"
   git push
   ```

5. **Wait a few minutes** for GitHub Pages to rebuild and deploy

## Tips

- Keep photo file sizes reasonable (< 2MB each) for faster loading
- The gradient will show as a fallback while photos load
- Test locally first using: `python3 -m http.server 8080`
