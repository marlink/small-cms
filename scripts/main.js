// Image Gallery JavaScript
class ImageGallery {
    constructor() {
        this.imageGrid = document.querySelector('.image-grid');
        this.imageDirectories = ['One-Neutral', 'Two-Spice', 'Three-Hot'];
        this.availableImages = {
            'One-Neutral': [
                '476859518_10058539727496169_6215572719481485126_n.jpg',
                '502961832_10162509602498632_47859688165254157_n.jpg',
                '504099332_10162521416963632_8056486556606804070_n (1).jpg',
                '504099332_10162521416963632_8056486556606804070_n.jpg',
                '505906751_10162555246293632_4768994724283029650_n.jpg',
                '118155195_308955353858764_2586063926009107898_n.jpg',
                '503387566_23884323127869583_6529341883435473267_n.jpg',
                '466739910_18384227113098850_1737608879930494862_n.jpg',
                '486866424_18404140879098850_2454495050033332989_n.jpg',
                '487918752_18404140942098850_7657621450650527823_n.jpg'
            ],
            'Two-Spice': [],
            'Three-Hot': []
        };
        this.init();
    }

    init() {
        this.createImageTiles();
    }

    createImageTiles() {
        // Create 9 image tiles (3x3 grid)
        for (let i = 0; i < 9; i++) {
            const tile = this.createImageTile(i);
            this.imageGrid.appendChild(tile);
        }
    }

    createImageTile(index) {
        const tile = document.createElement('div');
        tile.className = 'image-tile loading';
        tile.setAttribute('data-index', index);
        
        // Add loading text
        tile.textContent = 'Loading...';
        
        // Try to load an image for this tile
        this.loadImageForTile(tile, index);
        
        return tile;
    }

    loadImageForTile(tile, index) {
        const directoryIndex = index % this.imageDirectories.length;
        const directory = this.imageDirectories[directoryIndex];
        
        // Get available images for this directory
        const availableImages = this.availableImages[directory];
        
        if (availableImages && availableImages.length > 0) {
            // Use modulo to cycle through available images
            const imageIndex = index % availableImages.length;
            const imageName = availableImages[imageIndex];
            const imagePath = `Assets/Photos/Home/${directory}/${imageName}`;
            this.loadImage(tile, imagePath);
        } else {
            this.showError(tile, `No images found in ${directory}`);
        }
    }

    loadImage(tile, imagePath) {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `Gallery image ${tile.getAttribute('data-index') + 1}`;
        
        img.onload = () => {
            tile.classList.remove('loading');
            tile.innerHTML = '';
            tile.appendChild(img);
        };
        
        img.onerror = () => {
            this.showError(tile, 'Failed to load image');
        };
    }

    showError(tile, message) {
        tile.classList.remove('loading');
        tile.classList.add('error');
        tile.innerHTML = `<span>${message}</span>`;
    }
}

// Initialize the gallery when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ImageGallery();
}); 