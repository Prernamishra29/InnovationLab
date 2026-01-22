import React from 'react';
import SectionTitle from './SectionTitle';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <span className="section-tag">Get In Touch</span>
                        <h2 className="contact-title">Let's Start a Conservation</h2>
                        <p className="contact-desc">
                            Have a question about research, admissions, or industrial solutions?
                            Reach out to our expert team today.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon-box"><Phone size={20} /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon-box"><Mail size={20} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>contact@innovationlab.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon-box"><MapPin size={20} /></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>New York, NY 10012, US</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <h3>Request Consultation</h3>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="John Doe" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label>Service Interested In</label>
                                <select className="form-input">
                                    <option>Research Support</option>
                                    <option>Admissions</option>
                                    <option>Patent Filing</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="4" placeholder="How can we help you?" className="form-input"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
