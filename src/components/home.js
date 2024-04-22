import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const handleLinkClick = (event, path) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(path);
    };
    return (
        <div>
            <div className="image-slider">
                <div><img src="https://picsum.photos/id/240/800/500" alt="black and white wall" /></div>
                <div><img src="https://picsum.photos/id/250/800/500" alt="camera" /></div>
                <div><img src="https://picsum.photos/id/103/800/500" alt="sunny day" /></div>
                <div><img src="https://picsum.photos/id/200/800/500" alt="brown goat" /></div>
                <div><img src="https://picsum.photos/id/210/800/500" alt="brick wall" /></div>
                <div><img src="https://picsum.photos/id/113/800/500" alt="focus on water vapours" /></div>
            </div>


            <section className="intro">
                <h2>Welcome to Foto Pandit</h2>
                <p>
                    Foto Pandit is a professional photography studio passionate about capturing life's precious moments through the lens of a camera. Our mission is to provide our clients with stunning photographs that preserve memories for a lifetime. We specialize in weddings, portraits, events, and more.
                </p>
            </section>

            <section className="services">
                <h2>Our Services</h2>
                <p>
                    We offer a wide range of photography services tailored to meet your specific needs. From wedding photography to portrait sessions, our experienced photographers will capture your special moments with precision and creativity.
                </p>
                <Link to="/services" onClick={(e) => handleLinkClick(e, '/services')}>
                    Explore Our Services
                </Link>
            </section>

            <section className="gallery-preview">
                <h2>Featured Gallery</h2>
                <p>
                    Our gallery showcases some of our best work across various categories, including weddings, portraits, and events. Get inspired by our stunning photographs and see the quality of our work for yourself.
                </p>
                <Link to="/gallery" onClick={(e) => handleLinkClick(e, '/gallery')}>
                    View Our Gallery
                </Link>
            </section>

            <section className="tips">
                <h2>Photography Tips & Tricks</h2>
                <p>
                    Discover photography tips and tricks from our experienced photographers. Learn about composition, lighting, and post-processing techniques to help you improve your photography skills.
                </p>
                <Link to="/tips" onClick={(e) => handleLinkClick(e, '/tips')}>
                    Tips & Tricks
                </Link>
            </section>
        </div>
    );
}

export default Home;