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
- **Location**: Images will be loaded from `assets/photos/Home/`
- **Subdirectories**: 
  - `One-Neutral/`
  - `Two-Spice/`
  - `Three-Hot/`
- **Format**: Support common image formats (JPG, PNG, WebP)

### Technical Specifications
- **Framework**: Pure HTML/CSS/JavaScript (no build tools required)
- **UI Library**: Shadcn CSS for styling components
- **Grid System**: CSS Grid or Flexbox for the 3x3 layout
- **Image Handling**: 
  - Responsive images that maintain aspect ratio
  - Hover effects for better user interaction
  - Loading states for better UX

### Features
- [ ] 3x3 image grid layout
- [ ] Black background theme
- [ ] Shadcn CSS styling
- [ ] Responsive design
- [ ] Image hover effects
- [ ] Loading states
- [ ] Error handling for missing images

### File Structure
```
Small-CMS/
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
├── assets/
│   └── photos/
│       └── Home/
│           ├── One-Neutral/
│           ├── Two-Spice/
│           └── Three-Hot/
└── spec.md
```

## Implementation Notes
- Use semantic HTML5 elements
- Implement proper accessibility features
- Ensure cross-browser compatibility
- Optimize images for web performance
- Add proper meta tags for SEO

## Future Enhancements
- Image lightbox/modal on click
- Lazy loading for better performance
- Image filtering by category
- Admin interface for image management