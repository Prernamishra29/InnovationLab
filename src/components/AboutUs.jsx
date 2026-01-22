import React from 'react';
import SectionTitle from './SectionTitle';
import { Award, BookOpen, Users, Lightbulb } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
    const stats = [
        { icon: <Award size={32} />, value: '10+', label: 'Years Experience' },
        { icon: <BookOpen size={32} />, value: '500+', label: 'Publications' },
        { icon: <Lightbulb size={32} />, value: '50+', label: 'Patents Filed' },
        { icon: <Users size={32} />, value: '2k+', label: 'Students Guided' },
    ];

    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <span className="section-tag">Who We Are</span>
                        <h2 className="about-title">Bridging the Gap Between Academia & Industry</h2>
                        <p className="about-text">
                            We are a premier research consultancy and educational support firm dedicated to fostering innovation.
                            Our mission is to empower students, researchers, and institutions by providing world-class guidance
                            in technical research, patent protection, and industrial solutions.
                        </p>
                        <p className="about-text">
                            With a team of expert mentors and industry veterans, we turn ideas into reality through rigorous
                            research support, state-of-the-art equipment solutions, and comprehensive academic assistance.
                        </p>
                        <button className="btn btn-primary">Learn More About Us</button>
                    </div>

                    <div className="about-stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
