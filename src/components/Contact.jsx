import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../Store/ThemeContext';

const Contact = () => {
    const { isDark } = useTheme();
    const [email, setEmail] = useState('');

    const categories = [
        'Campaigns',
        'Branding',
        'Digital Products',
        'Motion'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Email/Brief:', email);
    };

    return (
        <section
            id="contact"
            className="py-24 px-6 relative overflow-hidden"
            style={{
                backgroundColor: 'var(--bg-primary)',
                minHeight: '100vh',
                color: 'var(--text-primary)'
            }}
        >
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        {/* Accent Line */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-0.5" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                            <span
                                className="text-xs font-bold tracking-[0.2em] uppercase"
                                style={{ color: 'var(--accent-primary)' }}
                            >
                                START THE DIALOGUE
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
                            Ready to Ignite<br />
                            Your Brand?
                        </h2>

                        {/* Description */}
                        <p className="text-lg max-w-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            Have a vision? We translate complex ideas into digital masterclasses. Share your requirement and let's shape the future.
                        </p>

                        {/* Categories */}
                        <div className="flex flex-wrap gap-3 pt-4">
                            {categories.map((category, index) => (
                                <span
                                    key={index}
                                    className="px-5 py-2 rounded-full text-sm font-medium border transition-colors duration-300 cursor-default"
                                    style={{
                                        backgroundColor: 'var(--bg-secondary)',
                                        color: 'var(--text-secondary)',
                                        borderColor: 'var(--border-color)'
                                    }}
                                >
                                    {category}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Form Card */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl p-8 md:p-12 space-y-6"
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid var(--border-color)'
                            }}
                        >
                            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                                Start a Project
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email/Brief Input */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Type your email or project brief..."
                                        className="w-full px-6 py-4 pr-16 rounded-2xl outline-none transition-all duration-300"
                                        style={{
                                            backgroundColor: 'var(--bg-primary)',
                                            color: 'var(--text-primary)',
                                            border: '1px solid var(--border-color)'
                                        }}
                                    />

                                    {/* Send Button */}
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                                        style={{ backgroundColor: 'var(--accent-primary)' }}
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* Info Text */}
                                <div className="flex justify-between items-center text-sm" style={{ color: 'var(--text-muted)' }}>
                                    <span>
                                        Typical response: 24h
                                    </span>
                                    <span>
                                        hello@mnfst.agency
                                    </span>
                                </div>
                            </form>
                        </motion.div>

                        {/* Decorative Glow */}
                        <div
                            className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full blur-3xl opacity-20"
                            style={{ backgroundColor: 'var(--accent-secondary)' }}
                        ></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
