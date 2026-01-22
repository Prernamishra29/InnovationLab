import React from 'react';
import SectionTitle from './SectionTitle';
import './Admissions.css';

const Admissions = () => {
    const steps = [
        { number: '01', title: 'Counseling', desc: 'Personalized career guidance sessions.' },
        { number: '02', title: 'University Selection', desc: 'Choosing institutions based on profile.' },
        { number: '03', title: 'Application', desc: 'Assistance with SOPs and documentation.' },
        { number: '04', title: 'Admission', desc: 'Finalizing enrollment and formalities.' },
    ];

    return (
        <section className="admissions-section" id="admissions">
            <div className="container">
                <SectionTitle
                    title="Academic & Admission Support"
                    subtitle="Your Future Starts Here"
                    description="A simplified step-by-step process to get you into your dream university."
                />

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-number">{step.number}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Admissions;
