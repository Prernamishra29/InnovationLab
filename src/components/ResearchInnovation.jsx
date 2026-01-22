import React from 'react';
import SectionTitle from './SectionTitle';
import './ResearchInnovation.css';

const ResearchInnovation = () => {
    const innovations = [
        {
            year: 'Focus Area',
            title: 'Bio-Composites',
            desc: 'Developing eco-friendly biodegradable materials for industrial packaging and automotive parts.'
        },
        {
            year: 'Focus Area',
            title: 'Sustainable Agro',
            desc: 'Smart irrigation systems and AI-driven crop monitoring for next-gen farming.'
        },
        {
            year: 'Focus Area',
            title: 'Industrial IoT',
            desc: 'Connecting machinery for predictive maintenance and real-time efficiency tracking.'
        },
        {
            year: 'Focus Area',
            title: 'Green Tech',
            desc: 'Renewable energy solutions and carbon footprint reduction strategies for SMEs.'
        }
    ];

    return (
        <section className="research-section" id="research">
            <div className="container">
                <div className="research-layout">
                    <div className="research-info">
                        <span className="section-tag">Innovation Hub</span>
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                            Pioneering Research & Development
                        </h2>
                        <p className="section-desc" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
                            Our R&D wing focuses on solving real-world challenges through technology.
                            We collaborate with universities and industries to drive innovation.
                        </p>
                        <ul className="research-list">
                            <li>Collaborative Research Projects</li>
                            <li>University-Industry Partnerships</li>
                            <li>Prototype Development & Testing</li>
                            <li>Technology Transfer</li>
                        </ul>
                        <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Explore Research</button>
                    </div>

                    <div className="research-cards">
                        {innovations.map((item, index) => (
                            <div key={index} className="research-card">
                                <span className="research-badge">{item.year}</span>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResearchInnovation;
