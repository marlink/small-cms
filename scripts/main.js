// Image Gallery JavaScript with Lazy Loading
class ImageGallery {
    constructor() {
        this.imageGrid = document.querySelector('.image-grid');
        this.imageDirectories = ['One-Neutral', 'Two-Spice', 'Three-Hot'];
        this.allImages = [];
        this.currentImageIndex = 0;
        this.observer = null;
        this.init();
    }

    async init() {
        await this.discoverAllImages();
        this.createImageTiles();
        this.setupLazyLoading();
    }

    async discoverAllImages() {
        // Discover all images from all directories
        const imageFiles = {
            'one': [
                '502961832_10162509602498632_47859688165254157_n.jpg',
                '504099332_10162521416963632_8056486556606804070_n.jpg',
                '118155195_308955353858764_2586063926009107898_n.jpg',
                'deepfakemaker_5fe7f1d8f036f26fe66c66ff0648b7c0.jpg',
                'deepfakemaker_0d24a8f1e963e1707b662e152995048a.jpg',
                'deepfakemaker_a42a669ae339a5b976d8072178fd88ed.jpg',
                'julianne-hough_0968_300px.jpg',
                'julianne-hough_0969_300px.jpg',
                'julianne-hough_0970_300px.jpg',
                'julianne-hough_0886_300px.jpg'
            ],
            'two': [
                '476859518_10058539727496169_6215572719481485126_n.jpg',
                '505906751_10162555246293632_4768994724283029650_n.jpg',
                '503387566_23884323127869583_6529341883435473267_n.jpg',
                '466739910_18384227113098850_1737608879930494862_n.jpg',
                'deepfakemaker_e9512de65bf1d0583c5b0b8493f5e3ac.jpg',
                'julianne-hough_0986_300px.jpg'
            ],
            'three': [
                '486866424_18404140879098850_2454495050033332989_n.jpg',
                '487918752_18404140942098850_7657621450650527823_n.jpg',
                'deepfakemaker_78712b0ecc1f5a5d34f0bdaf06052659.jpg'
            ]
        };

        // Flatten all images into a single array with their paths
        this.allImages = [];
        for (const [directory, images] of Object.entries(imageFiles)) {
            for (const image of images) {
                this.allImages.push({
                    path: `assets/photos/Home/${directory}/${image}`,
                    directory: directory,
                    filename: image
                });
            }
        }

        console.log(`Discovered ${this.allImages.length} images across all directories`);
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
        tile.setAttribute('data-image-index', index);
        
        // Add loading text
        tile.textContent = 'Loading...';
        
        // Set up lazy loading placeholder
        this.setupLazyTile(tile, index);
        
        return tile;
    }

    setupLazyTile(tile, index) {
        if (this.allImages.length === 0) {
            this.showError(tile, 'No images available');
            return;
        }

        // Ensure a mix of images from all three folders
        const imageData = this.getMixedImageForPosition(index);
        
        // Create lazy loading image
        const img = document.createElement('img');
        img.alt = `Gallery image ${index + 1} from ${imageData.directory}`;
        img.className = 'lazy-image';
        
        // Set data-src for lazy loading
        img.setAttribute('data-src', imageData.path);
        
        // Add to tile
        tile.appendChild(img);
        
        // Set up intersection observer for this tile
        this.observeTile(tile);
    }

    getMixedImageForPosition(index) {
        // Create a pattern to ensure mix of folders
        // Position 0, 3, 6: One-Neutral
        // Position 1, 4, 7: Two-Spice  
        // Position 2, 5, 8: Three-Hot
        const folderPattern = ['one', 'two', 'three'];
        const folderIndex = index % 3;
        const selectedFolder = folderPattern[folderIndex];
        
        // Get images from the selected folder
        const folderImages = this.allImages.filter(img => img.directory === selectedFolder);
        
        if (folderImages.length === 0) {
            // Fallback to any available image if folder is empty
            return this.allImages[index % this.allImages.length];
        }
        
        // Use the position within the folder to select image
        const imageIndex = Math.floor(index / 3) % folderImages.length;
        return folderImages[imageIndex];
    }

    setupLazyLoading() {
        // Create intersection observer for lazy loading
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                }
            });
        }, {
            rootMargin: '50px', // Start loading 50px before the image comes into view
            threshold: 0.1
        });
    }

    observeTile(tile) {
        if (this.observer) {
            this.observer.observe(tile);
        }
    }

    loadImage(tile) {
        const img = tile.querySelector('img');
        if (!img) return;

        const imagePath = img.getAttribute('data-src');
        if (!imagePath) return;

        // Load the image
        img.src = imagePath;
        
        img.onload = () => {
            tile.classList.remove('loading');
            tile.classList.add('loaded');
        };
        
        img.onerror = () => {
            this.showError(tile, 'Failed to load image');
        };

        // Stop observing this tile
        if (this.observer) {
            this.observer.unobserve(tile);
        }
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