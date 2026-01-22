import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">
                            Innovation<span>Lab</span>
                        </a>
                        <p className="footer-desc">
                            Empowering research, fostering innovation, and guiding future leaders towards academic and industrial excellence.
                        </p>
                        <div className="social-links">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Publication Support</a></li>
                            <li><a href="#">Patent Filing</a></li>
                            <li><a href="#">Thesis Guidance</a></li>
                            <li><a href="#">Industrial Solutions</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#research">Research</a></li>
                            <li><a href="#admissions">Admissions</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} InnovationLab Research Consultancy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
