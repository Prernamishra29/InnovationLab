import React from 'react';
import SectionTitle from './SectionTitle';
import {
    BookOpen, FileCheck, PenTool, Globe, Cog, Tractor, Sprout,
    FlaskConical, UserPlus, Users, GraduationCap, School, Scroll
} from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        { icon: <BookOpen />, title: 'Publication', desc: 'Support for high-impact journal publications (Scopus, WoS).' },
        { icon: <FileCheck />, title: 'Patent Assistance', desc: 'Drafting and filing support for Indian and International patents.' },
        { icon: <PenTool />, title: 'Thesis Assistance', desc: 'Guidance for Masters and PhD thesis writing and formatting.' },
        { icon: <Globe />, title: 'International Conference', desc: 'Assistance in presenting papers at global conferences.' },
        { icon: <Cog />, title: 'Automobile Equipment', desc: 'Design and fabrication support for automotive projects.' },
        { icon: <Tractor />, title: 'Agriculture Equipment', desc: 'Innovative tools and machinery for modern agriculture.' },
        { icon: <Sprout />, title: 'Agro Farming', desc: 'Sustainable farming techniques and consultancy.' },
        { icon: <FlaskConical />, title: 'Bio Composite', desc: 'Research in eco-friendly bio-composite materials.' },
        { icon: <UserPlus />, title: 'Admission Assistance', desc: 'General guidance for college and university admissions.' },
        { icon: <Users />, title: 'University Admission', desc: 'Selection and application support for top universities.' },
        { icon: <School />, title: 'UG Admission', desc: 'Career counseling and admission help for Undergraduates.' },
        { icon: <GraduationCap />, title: 'PG Admission', desc: 'Specialized support for Post-Graduate program admissions.' },
        { icon: <Scroll />, title: 'PhD Admission', desc: 'End-to-end assistance for PhD enrollment and topic selection.' },
    ];

    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="section-header-white">
                    <SectionTitle
                        title="Our Premium Services"
                        subtitle="Comprehensive Solutions"
                        description="Tailored support for every stage of your academic and industrial journey."
                    />
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-image-placeholder">
                                <div className="service-icon-bg">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="service-content">
                                <h4 className="service-title">{service.title}</h4>
                                <p className="service-desc">{service.desc}</p>
                                <a href="#contact" className="service-link">Learn more &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
