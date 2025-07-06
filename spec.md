# Small CMS - Image Gallery Project

## Project Overview
Create a simple HTML page that displays images in a 3x3 grid layout as tiles with a modern, clean design.

## Requirements

### Visual Design
- **Background**: Black background for a modern, sleek appearance
- **Layout**: 3x3 grid of image tiles
- **Styling**: Use Shadcn CSS UI components for consistent, modern styling
- **Responsive**: Ensure the layout works on different screen sizes

### Image Source
- **Location**: Images are loaded from three folders inside `assets/photos/home/`:
  - `one/`
  - `two/`
  - `three/`
- **Folder Names**: All folder names are lowercase
- **Mixing**: The gallery always displays a mix of images from all three folders, distributed evenly across the grid
- **Format**: Support common image formats (JPG, PNG, WebP)

### Technical Specifications
- **Framework**: Pure HTML/CSS/JavaScript (no build tools required)
- **UI Library**: Shadcn CSS for styling components
- **Grid System**: CSS Grid or Flexbox for the 3x3 layout
- **Image Handling**: 
  - Responsive images that maintain aspect ratio
  - Hover effects for better user interaction
  - Loading states for better UX
  - **Lazy Loading**: Images are loaded only as they come into view for better performance

### Features
- [x] 3x3 image grid layout
- [x] Black background theme
- [x] Shadcn CSS styling
- [x] Responsive design
- [x] Image hover effects
- [x] Loading states
- [x] Error handling for missing images
- [x] **Lazy loading** for images
- [x] Always a mix of images from all three folders

### File Structure
```
Small-CMS/
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
└── assets/
    └── photos/
        └── home/
            ├── one/
            ├── two/
            └── three/
```

## Implementation Notes
- Use semantic HTML5 elements
- Implement proper accessibility features
- Ensure cross-browser compatibility
- Optimize images for web performance
- Add proper meta tags for SEO

## Future Enhancements
- Image lightbox/modal on click
- Lazy loading for better performance (implemented)
- Image filtering by category
- Admin interface for image management