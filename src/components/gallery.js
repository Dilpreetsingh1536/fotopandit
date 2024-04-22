// components/Gallery.js
import React from 'react';

function Gallery() {


    return (
       
        <section className="gallery" >
            <div className="div-mt">
            <h2>Gallery</h2>
            <p>
                Browse through some of our favorite shots from recent events and sessions. We're proud of our work and love sharing our passion for photography with you.
            </p>
            <div className="gallery-grid">
                <img src="https://picsum.photos/id/240/800/500" data-lightbox="gallery" alt="black and white wall" />
                <img src="https://picsum.photos/id/220/800/500" data-lightbox="gallery" alt="train track" />
                <img src="https://picsum.photos/id/213/800/500" data-lightbox="gallery" alt="snow desert" />
                <img src="https://picsum.photos/id/140/800/500" data-lightbox="gallery" alt="white tree" />
                <img src="https://picsum.photos/id/47/800/500" data-lightbox="gallery" alt="wood bridge" />
                <img src="https://picsum.photos/id/100/800/500" data-lightbox="gallery" alt="people on beach" />
                <img src="https://picsum.photos/id/30/800/500" data-lightbox="gallery" alt="printed cup" />
                <img src="https://picsum.photos/id/33/800/500" data-lightbox="gallery" alt="sunny day" />
                <img src="https://picsum.photos/id/32/800/500" data-lightbox="gallery" alt="old table and wall" />
            </div>
            </div>
        </section>
   
    );
}

export default Gallery;