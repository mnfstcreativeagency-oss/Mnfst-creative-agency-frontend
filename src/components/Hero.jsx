import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import p1 from '../assets/hero-person-1.png';
import p2 from '../assets/hero-person-2.png';
import p3 from '../assets/hero-person-3.png';

const CreatorCard = ({ name, subs }) => (
    <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.9 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 backdrop-blur-md px-4 py-3 rounded-xl shadow-2xl border min-w-[180px] z-50 text-center"
        style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-color)',
            opacity: 0.95
        }}
    >
        <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{name}</h3>
        <div className="flex items-center justify-center gap-2 py-1 px-2 rounded-lg" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <FaInstagram className="text-[#E1306C] text-lg" />
            <span className="font-bold text-xs" style={{ color: 'var(--text-secondary)' }}>{subs}</span>
        </div>
    </motion.div>
);

const Hero = () => {
    const [hoveredCreator, setHoveredCreator] = useState(null);

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden" style={{ backgroundColor: 'transparent', color: 'var(--text-primary)' }}>
            <div className="container mx-auto px-6 z-20 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl flex flex-col items-center"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-bold font-space mb-6 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        Empowering the <br />
                        <span style={{ color: 'var(--accent-primary)' }}>
                            planet's most iconic
                        </span> <br />
                        creators.
                    </h1>

                    <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-dm" style={{ color: 'var(--text-secondary)' }}>
                        You thrive in the spotlight. We dominate the details. Let us handle the heavy lifting, while your audience rockets to the stars!
                    </p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-all duration-300"
                        style={{ backgroundColor: 'var(--accent-primary)' }}
                    >
                        Get in Touch
                        <BsArrowRight className="text-xl" />
                    </motion.a>
                </motion.div>

                {/* Subtle Background Decoration (Centered) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                    <div className="absolute w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[120px]" />
                    <div className="absolute w-[300px] h-[300px] bg-accent-secondary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

