import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-badge">Pioneering The Future</span>
                    <h1 className="hero-title">
                        Innovating Research, Education & <br />
                        <span className="text-gradient">Technology Solutions</span>
                    </h1>
                    <p className="hero-text">
                        Empowering students, researchers, and industries with cutting-edge support in publication, patent filing, and sustainable technology development.
                    </p>
                    <div className="hero-btns">
                        <a href="#services" className="btn btn-primary">
                            Explore Services
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            <PlayCircle size={20} style={{ marginRight: '8px' }} />
                            Talk to Experts
                        </a>
                    </div>

                    {/* <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Publications</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Patents</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">2000+</span>
                            <span className="stat-label">Students Mentored</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
