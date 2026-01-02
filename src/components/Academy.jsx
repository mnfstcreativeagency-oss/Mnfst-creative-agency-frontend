import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaCheck, FaArrowRight, FaVideo } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../Store/ThemeContext';

import thumbnail from '../assets/premier-pro-video-thumbnail.jpg';

const Academy = () => {
    const { isDark } = useTheme();
    const [isPlaying, setIsPlaying] = useState(false);

    // Accent Colors
    const accentColor = isDark ? '#EAB308' : '#EF4444'; // Yellow-500 : Red-500
    const accentText = isDark ? 'text-yellow-500' : 'text-red-500';
    const accentBg = isDark ? 'bg-yellow-500' : 'bg-red-500';
    const accentBorder = isDark ? 'border-yellow-500' : 'border-red-500';
    const accentShadow = isDark ? 'shadow-[0_20px_60px_rgba(234,179,8,0.15)]' : 'shadow-[0_20px_60px_rgba(239,68,68,0.15)]';

    // Course Features Data
    const features = {
        group: [
            "Group sessions",
            "Access to additional softwares & resources",
            "Advanced content & special projects",
            "Access to premium subscriptions",
            "Career guidance & Progress tracking",
            "Learn how to find clients",
            "Know how to charge from clients",
            "Technical Support"
        ],
        personal: [
            "One-on-One sessions",
            "Access to additional softwares & resources",
            "Advanced content & special projects",
            "Access to premium subscriptions",
            "Career guidance & Progress tracking",
            "Learn how to find clients",
            "Know how to charge from clients",
            "Technical Support",
            "Job Assistance",
            "Access to personal contact number"
        ]
    };

    return (
        <>
            <div className="min-h-screen pt-34 pb-20 overflow-hidden"
                style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>

                {/* Hero Section */}
                <section className="container mx-auto px-6 mb-20">
                    <div className="text-center max-w-5xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-bold mb-6 tracking-tight uppercase"
                        >
                            Premiere Pro <span className={accentText}>Personal Training</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl font-medium mb-12 opacity-80"
                        >
                            Learn Professional Video Editing From Professionals
                        </motion.p>
                    </div>

                    {/* Video Placeholder Container */}
                    <div
                        className="relative w-full max-w-5xl mx-auto aspect-video bg-black/10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
                        onClick={() => setIsPlaying(true)}
                    >
                        {!isPlaying ? (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

                                {/* Thumbnail Image (Using a placeholder for now, ideally user provided) */}
                                <img
                                    src={thumbnail}
                                    alt="Video Editing Course"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Play Button */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-[0_0_40px_rgba(255,255,255,0.3)] animate-pulse"
                                    >
                                        <FaPlay className="ml-1 text-2xl" />
                                    </motion.div>
                                </div>


                            </>
                        ) : (
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/R3itumGr0xY?autoplay=1"
                                title="Premiere Pro Training"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="container mx-auto px-6 py-20 relative">
                    {/* Background Glow */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] rounded-full blur-[100px] -z-10 pointer-events-none ${isDark ? 'bg-yellow-500/20' : 'bg-red-500/20'}`}></div>

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Plans For This Course</h2>
                        <div className={`h-1 w-24 mx-auto rounded-full ${accentBg}`}></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                        {/* Group Plan */}
                        <PricingCard
                            price="₹5,999"
                            title="Premiere Pro Personal Training"
                            duration="21 Days Online Training"
                            features={features.group}
                            isPopular={false}
                            accentColor={accentColor}
                            accentBg={accentBg}
                            accentBorder={accentBorder}
                            accentShadow={accentShadow}
                            isDark={isDark}
                        />

                        {/* Personal Plan */}
                        <PricingCard
                            price="₹8,999"
                            title="Premiere Pro Personal Training"
                            duration="21 Days Online Training"
                            features={features.personal}
                            isPopular={true}
                            accentColor={accentColor}
                            accentBg={accentBg}
                            accentBorder={accentBorder}
                            accentShadow={accentShadow}
                            isDark={isDark}
                        />

                    </div>
                </section>

                {/* Superprofile Link Placeholder */}
                <section className="container mx-auto px-6 py-20 text-center">
                    <div className="p-12 rounded-3xl border border-dashed border-gray-500/30 bg-gray-500/5 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">More Resources</h3>
                        <p className="mb-6 opacity-70">Check out our Superprofile for exclusive assets and templates.</p>
                        <a href="#" className={`inline-flex items-center gap-2 ${accentText} font-bold text-lg underline underline-offset-4 transition-colors`}>
                            Check out our Superprofile <FaArrowRight />
                        </a>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
};

const PricingCard = ({ price, title, duration, features, isPopular, accentColor, accentBg, accentBorder, accentShadow, isDark }) => {

    const textColor = isPopular ? accentColor : 'var(--text-primary)';

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={`relative p-8 rounded-3xl overflow-hidden border transition-all duration-300 ${isPopular
                ? `${accentShadow} ${accentBorder}`
                : 'border-transparent shadow-xl'
                }`}
            style={{
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                borderColor: isPopular ? accentColor : 'var(--border-color)'
            }}
        >
            {isPopular && (
                <div className={`absolute top-0 right-0 text-white text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider ${accentBg}`}>
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-5xl font-bold mb-2" style={{ color: isDark && isPopular ? '#EAB308' : (isPopular ? '#EF4444' : (isDark ? '#EAB308' : '#EF4444')) }}>{price}</h3>
                <h4 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{title}</h4>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{duration}</p>
            </div>

            <div className="h-[1px] w-full mb-8" style={{ backgroundColor: 'var(--border-color)' }}></div>

            <ul className="flex flex-col gap-4 mb-10">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <div className={`mt-1 min-w-[20px] h-5 rounded-full flex items-center justify-center text-white text-xs ${accentBg}`}>
                            <FaCheck />
                        </div>
                        <span className="font-medium text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>{feature}</span>
                    </li>
                ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform active:scale-95 ${isPopular
                ? `${accentBg} hover:opacity-90 text-white shadow-lg`
                : `bg-transparent border-2 border-[${accentColor}] hover:bg-gray-50/10`
                }`}
                style={{
                    borderColor: !isPopular ? accentColor : undefined,
                    color: !isPopular ? accentColor : 'white',
                }}
            >
                Enroll Now
            </button>
        </motion.div>
    );
};

export default Academy;
