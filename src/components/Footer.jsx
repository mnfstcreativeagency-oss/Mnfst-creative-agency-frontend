import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo-new.png';
import logoDark from '../assets/logo-dark.png';
import { useTheme } from '../Store/ThemeContext';

const Footer = () => {
    const { isDark } = useTheme();
    return (
        <footer className="py-12 text-center md:text-right" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-end items-center gap-6">
                <div>
                    <Link to="/" className="inline-block">
                        <img src={isDark ? logoDark : logo} alt="Mnfst" className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
                    </Link>
                    <p className="text-gray-400 text-sm mt-2">© 2024 Mnfst. All rights reserved.</p>
                </div>

                {/* <div className="flex gap-6">
                    {[ FaInstagram, FaWhatsapp].map((Icon, i) => (
                        <a
                            key={i}
                            href="#"
                            className="hover:text-accent text-xl transition-colors"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            <Icon />
                        </a>
                    ))}
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
