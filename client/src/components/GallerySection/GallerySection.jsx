import React from 'react';
import './GallerySection.css';

const GallerySection = () => {
  // Sample data for gallery images
  const galleryImages = [
    { id: 1, src: 'https://junotoys.themerex.net/wp-content/uploads/2021/09/product1-copyright.jpg', alt: 'Image 1' },
    { id: 2, src: 'https://junotoys.themerex.net/wp-content/uploads/2021/09/product1-copyright.jpg', alt: 'Image 1' },
    { id: 3, src: 'https://junotoys.themerex.net/wp-content/uploads/2021/09/product1-copyright.jpg', alt: 'Image 1' },
    { id: 4, src: 'https://junotoys.themerex.net/wp-content/uploads/2021/09/product1-copyright.jpg', alt: 'Image 1' },
    { id: 5, src: 'https://junotoys.themerex.net/wp-content/uploads/2021/09/product1-copyright.jpg', alt: 'Image 1' },
    { id: 6, src: 'https://junotoys.themerex.net/wp-content/uploads/2021/09/product1-copyright.jpg', alt: 'Image 1' },
    { id: 7, src: 'https://junotoys.themerex.net/wp-content/uploads/2021/09/product1-copyright.jpg', alt: 'Image 1' },
    { id: 8, src: 'https://junotoys.themerex.net/wp-content/uploads/2021/09/product1-copyright.jpg', alt: 'Image 1' },
    // Add more images as needed
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <div className="gallery-overlay">
              <div className="gallery-overlay-content">
                <h3>{image.alt}</h3>
                {/* Additional information or buttons */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
