import React from 'react';
import SectionTitle from './SectionTitle';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Dr. Sarah Mitchell',
            role: 'Research Scholar',
            text: 'Their guidance on my PhD thesis was invaluable. The team helped me structure my research and publish in a top-tier journal.'
        },
        {
            name: 'James Carter',
            role: 'Agri-Tech Entrepreneur',
            text: 'The patent filing support played a crucial role in protecting our new irrigation technology. Highly professional team!'
        },
        {
            name: 'Priya Sharma',
            role: 'Masters Student',
            text: 'Thanks to their admission counseling, I got accepted into my dream university with a scholarship. Truly grateful.'
        }
    ];

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <SectionTitle title="Success Stories" subtitle="Testimonials" />

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <div key={index} className="testimonial-card">
                            <Quote className="quote-icon" size={40} />
                            <p className="testimonial-text">"{item.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{item.name[0]}</div>
                                <div className="author-info">
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
