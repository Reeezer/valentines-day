// Generate floating violet flowers
document.addEventListener('DOMContentLoaded', function() {
    // Load and display photos from JSON
    loadGallery();
    
    // Create floating violets
    createFloatingViolets();
});

// Load gallery from photos.json
async function loadGallery() {
    try {
        const response = await fetch('photos.json');
        const data = await response.json();
        const gallery = document.getElementById('gallery');
        
        // Create columns
        const columns = {
            1: document.createElement('div'),
            2: document.createElement('div'),
            3: document.createElement('div')
        };
        
        columns[1].className = 'column column-1';
        columns[2].className = 'column column-2';
        columns[3].className = 'column column-3';
        
        // Add photos to appropriate columns
        data.photos.forEach(photo => {
            const photoCard = createPhotoCard(photo);
            columns[photo.column].appendChild(photoCard);
        });
        
        // Add columns to gallery
        gallery.appendChild(columns[1]);
        gallery.appendChild(columns[2]);
        gallery.appendChild(columns[3]);
        
    } catch (error) {
        console.error('Error loading gallery:', error);
    }
}

// Create a photo card element
function createPhotoCard(photo) {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.setAttribute('data-place', photo.place);
    card.setAttribute('data-date', photo.date);
    
    // Check if photo file exists, otherwise use gradient placeholder
    const photoPath = `photos/${photo.filename}`;
    
    // Create image element that will try to load the photo
    // If it fails, it will show the gradient placeholder
    const img = document.createElement('img');
    img.src = photoPath;
    img.alt = `${photo.place} - ${photo.date}`;
    img.style.display = 'none'; // Hide until loaded
    
    // Create placeholder with gradient
    const placeholder = document.createElement('div');
    placeholder.className = 'placeholder-img';
    placeholder.style.background = photo.gradient;
    placeholder.style.height = photo.height;
    
    // If image loads successfully, show it instead of placeholder
    img.onload = function() {
        img.style.display = 'block';
        placeholder.style.display = 'none';
    };
    
    // If image fails to load, keep showing placeholder
    img.onerror = function() {
        img.style.display = 'none';
        placeholder.style.display = 'block';
    };
    
    // Create photo info overlay
    const photoInfo = document.createElement('div');
    photoInfo.className = 'photo-info';
    
    const placeSpan = document.createElement('span');
    placeSpan.className = 'photo-place';
    placeSpan.textContent = photo.place;
    
    const dateSpan = document.createElement('span');
    dateSpan.className = 'photo-date';
    dateSpan.textContent = photo.date;
    
    photoInfo.appendChild(placeSpan);
    photoInfo.appendChild(dateSpan);
    
    // Append elements to card
    card.appendChild(img);
    card.appendChild(placeholder);
    card.appendChild(photoInfo);
    
    return card;
}

// Create floating violets
function createFloatingViolets() {
    const violetsContainer = document.getElementById('violets');
    const numberOfViolets = 20;

    // SVG violet flower - simple cartoon style in purple color
    const violetSVG = `
        <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <!-- Center circle -->
            <circle cx="15" cy="15" r="3" fill="#FFD700"/>
            <!-- Petals -->
            <ellipse cx="15" cy="8" rx="4" ry="6" fill="#7F00FF"/>
            <ellipse cx="15" cy="22" rx="4" ry="6" fill="#7F00FF"/>
            <ellipse cx="8" cy="15" rx="6" ry="4" fill="#7F00FF"/>
            <ellipse cx="22" cy="15" rx="6" ry="4" fill="#7F00FF"/>
            <ellipse cx="10" cy="10" rx="4" ry="5" fill="#9D4EDD" transform="rotate(-45 10 10)"/>
            <ellipse cx="20" cy="10" rx="4" ry="5" fill="#9D4EDD" transform="rotate(45 20 10)"/>
            <ellipse cx="10" cy="20" rx="4" ry="5" fill="#9D4EDD" transform="rotate(45 10 20)"/>
            <ellipse cx="20" cy="20" rx="4" ry="5" fill="#9D4EDD" transform="rotate(-45 20 20)"/>
        </svg>
    `;

    function createViolet() {
        const violet = document.createElement('div');
        violet.className = 'violet';
        violet.innerHTML = violetSVG;
        
        // Random horizontal position
        violet.style.left = Math.random() * 100 + '%';
        
        // Random animation duration (10-25 seconds)
        const duration = 10 + Math.random() * 15;
        violet.style.animationDuration = duration + 's';
        
        // Random delay for staggered effect
        const delay = Math.random() * 10;
        violet.style.animationDelay = delay + 's';
        
        // Slightly random size
        const scale = 0.8 + Math.random() * 0.6;
        violet.style.transform = `scale(${scale})`;
        
        violetsContainer.appendChild(violet);
    }

    // Create multiple violets
    for (let i = 0; i < numberOfViolets; i++) {
        createViolet();
    }

    // Add continuous creation of new violets
    setInterval(() => {
        if (violetsContainer.children.length < numberOfViolets) {
            createViolet();
        }
    }, 2000);
}
