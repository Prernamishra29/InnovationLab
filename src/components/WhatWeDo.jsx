import React from 'react';
import SectionTitle from './SectionTitle';
import { FileText, Cpu, GraduationCap, Factory, Leaf } from 'lucide-react';
import './WhatWeDo.css';

const WhatWeDo = () => {
    const activities = [
        {
            icon: <FileText size={32} />,
            title: 'Research & Publication',
            desc: 'Expert assistance in writing, reviewing, and publishing high-impact research papers.'
        },
        {
            icon: <Cpu size={32} />,
            title: 'Patent & IP Support',
            desc: 'End-to-end guidance for patent filing, drafting, and intellectual property protection.'
        },
        {
            icon: <GraduationCap size={32} />,
            title: 'Academic Guidance',
            desc: 'Mentorship for thesis writing, project selection, and academic career planning.'
        },
        {
            icon: <Factory size={32} />,
            title: 'Industrial Solutions',
            desc: 'Bridging the gap between theory and practice with cutting-edge equipment solutions.'
        },
        {
            icon: <Leaf size={32} />,
            title: 'Sustainable Tech',
            desc: 'Focusing on green energy, bio-composites, and eco-friendly innovation.'
        }
    ];

    return (
        <section className="what-we-do" id="what-we-do">
            <div className="container">
                <SectionTitle
                    title="Our Core Expertise"
                    subtitle="What We Do"
                    description="We provide comprehensive support across the research and innovation lifecycle."
                />

                <div className="activities-grid">
                    {activities.map((item, index) => (
                        <div key={index} className="activity-card">
                            <div className="activity-icon-wrapper">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
