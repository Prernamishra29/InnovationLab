import React from 'react';
import { CheckCircle } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const reasons = [
        'Expert Mentors with 10+ Years Experience',
        'Bridge between Academia & Industry',
        '360° Research & Patent Support',
        'Global Network of Universities',
        'State-of-the-Art Innovation Labs',
        'Personalized Career Guidance'
    ];

    return (
        <section className="why-us-section" id="why-us">
            <div className="container">
                <div className="why-us-content">
                    <h2 className="why-us-title">Why Leading Researchers Choose Us</h2>
                    <div className="why-us-grid">
                        {reasons.map((reason, index) => (
                            <div key={index} className="reason-item">
                                <CheckCircle className="reason-icon" size={24} />
                                <span>{reason}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
