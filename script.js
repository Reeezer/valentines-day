// Generate floating violet flowers
document.addEventListener('DOMContentLoaded', function() {
    // Load and display photos from JSON
    loadGallery();
    
    // Create floating violets
    createFloatingViolets();
    
    // Start countdown timer
    startCountdown();
    
    // Add interactive heart animations
    addHeartAnimations();
});

// Load gallery from inline data (fetch doesn't work with file:// protocol)
async function loadGallery() {
    try {
        const data = {
            "photos": [
                { "filename": "0f6c2cb95fb290f3ef73fe859ca55223.JPEG", "place": "Paris, France", "date": "June 2024" },
                { "filename": "91c6daa534383cecf685120fe75846fd.JPEG", "place": "Paris, France", "date": "June 2024" },
                { "filename": "E87B1F0B-ADDF-43B3-B80A-BFDA17B5B505.JPG", "place": "Rome, Italy", "date": "August 2024" },
                { "filename": "IMG_1143.jpg", "place": "Barcelona, Spain", "date": "September 2024" },
                { "filename": "IMG_1517.jpg", "place": "Barcelona, Spain", "date": "September 2024" },
                { "filename": "IMG_1534.jpg", "place": "London, UK", "date": "July 2024" },
                { "filename": "IMG_1547.jpg", "place": "Barcelona, Spain", "date": "September 2024" },
                { "filename": "IMG_1573.jpg", "place": "Amsterdam, Netherlands", "date": "October 2024" },
                { "filename": "IMG_1642.jpg", "place": "Barcelona, Spain", "date": "September 2024" },
                { "filename": "IMG_1680.jpg", "place": "Prague, Czech Republic", "date": "November 2024" },
                { "filename": "IMG_1747.jpg", "place": "Vienna, Austria", "date": "December 2024" },
                { "filename": "IMG_1790.jpg", "place": "Barcelona, Spain", "date": "September 2024" },
                { "filename": "IMG_1796.jpg", "place": "Berlin, Germany", "date": "January 2025" },
                { "filename": "IMG_1857.jpg", "place": "Berlin, Germany", "date": "January 2025" },
                { "filename": "IMG_2027.jpg", "place": "Berlin, Germany", "date": "January 2025" },
                { "filename": "IMG_2114.jpg", "place": "Barcelona, Spain", "date": "September 2024" },
                { "filename": "IMG_2134.jpg", "place": "Barcelona, Spain", "date": "September 2024" },
                { "filename": "IMG_2138.jpg", "place": "Berlin, Germany", "date": "January 2025" },
                { "filename": "IMG_2154.jpg", "place": "Berlin, Germany", "date": "January 2025" },
                { "filename": "IMG_2164.jpg", "place": "Barcelona, Spain", "date": "September 2024" },
                { "filename": "IMG_2170.jpg", "place": "Berlin, Germany", "date": "January 2025" },
                { "filename": "IMG_2177.jpg", "place": "Berlin, Germany", "date": "January 2025" },
                { "filename": "IMG_2190.jpg", "place": "Berlin, Germany", "date": "January 2025" },
                { "filename": "IMG_2196.jpg", "place": "Barcelona, Spain", "date": "September 2024" },
                { "filename": "IMG_2225.jpg", "place": "Barcelona, Spain", "date": "September 2024" },
                { "filename": "IMG_2231.jpg", "place": "Berlin, Germany", "date": "January 2025" },
                { "filename": "IMG_2240.jpg", "place": "Barcelona, Spain", "date": "September 2024" },
                { "filename": "IMG_2285.jpg", "place": "Barcelona, Spain", "date": "September 2024" },
                { "filename": "IMG_2377.jpg", "place": "Berlin, Germany", "date": "January 2025" },
                { "filename": "IMG_8233.jpg", "place": "Berlin, Germany", "date": "January 2025" },
                { "filename": "IMG_8408.jpg", "place": "Berlin, Germany", "date": "January 2025" },
                { "filename": "IMG_8473.jpeg", "place": "Barcelona, Spain", "date": "September 2024" },
            ]
        };
        const gallery = document.getElementById('gallery');
        
        // Shuffle photos randomly
        const photos = data.photos.sort(() => Math.random() - 0.5);

        // Create columns
        const columns = {
            1: document.createElement('div'),
            2: document.createElement('div'),
            3: document.createElement('div')
        };
        
        columns[1].className = 'column column-1';
        columns[2].className = 'column column-2';
        columns[3].className = 'column column-3';
        
        // Distribute photos across columns (round-robin)
        photos.forEach((photo, index) => {
            const col = (index % 3) + 1;
            const photoCard = createPhotoCard(photo);
            columns[col].appendChild(photoCard);
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
    
    const img = document.createElement('img');
    img.src = `photos/${photo.filename}`;
    img.alt = `${photo.place} - ${photo.date}`;
    
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
    
    card.appendChild(img);
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
        
        // Negative delay so they start mid-animation (already floating)
        const delay = -(Math.random() * duration);
        violet.style.animationDelay = delay + 's';
        
        // Slightly random size using CSS scale (won't override animation transform)
        const scale = 0.8 + Math.random() * 0.6;
        violet.style.setProperty('--scale', scale);
        
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

// Countdown to Valentine's Day 2026
function startCountdown() {
    const valentinesDay = new Date('February 14, 2026 00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = valentinesDay - now;
        
        if (distance < 0) {
            // If Valentine's Day has passed, show a special message
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
    
    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Add interactive heart animations on click
function addHeartAnimations() {
    document.body.addEventListener('click', function(e) {
        // Create a floating heart at click position
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = '💜';
        heart.style.left = e.pageX + 'px';
        heart.style.top = e.pageY + 'px';
        
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    });
}
