import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaQuestionCircle, FaLightbulb, FaHeadset } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import FloatingContact from '../components/FloatingContact';

const FAQPage = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full relative min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            <Navbar />
            <FloatingContact />

            <main className="pt-24">
                {/* Creative Hero Section */}
                <section className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                    {/* Animated shapes */}
                    <motion.div
                        animate={{
                            rotate: 360,
                            x: [0, 50, 0],
                            y: [0, -30, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-10 right-10 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none"
                    />
                    <motion.div
                        animate={{
                            rotate: -360,
                            x: [0, -40, 0],
                            y: [0, 60, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-10 left-10 w-80 h-80 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none"
                    />

                    <div className="container mx-auto max-w-7xl relative z-10 text-center">
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            onClick={() => navigate(-1)}
                            className="inline-flex items-center gap-2 text-sm font-bold text-accent-primary mb-8 hover:gap-3 transition-all"
                        >
                            <FaArrowLeft /> Back to Home
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold font-space text-primary mb-6 tracking-tight">
                                How can we <span className="italic text-gray-400">help?</span>
                            </h1>
                            <p className="text-secondary text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                                Find answers to common questions about our process, pricing, and how we deliver exceptional digital results.
                            </p>
                        </motion.div>

                        {/* Creative Icon Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            {[
                                { icon: <FaQuestionCircle />, title: "General Info", desc: "Basic questions about our agency." },
                                { icon: <FaLightbulb />, title: "Strategies", desc: "How we plan and execute campaigns." },
                                { icon: <FaHeadset />, title: "Support", desc: "Getting in touch with our team." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="p-8 rounded-3xl border shadow-sm hover:shadow-xl transition-all group"
                                    style={{
                                        backgroundColor: 'var(--bg-primary)',
                                        borderColor: 'var(--border-color)'
                                    }}
                                >
                                    <div className="text-3xl text-accent-primary mb-4 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Component Section */}
                <div id="faq-content">
                    <FAQ />
                </div>

                {/* Creative Footer CTA */}
                <section className="py-24 px-6 bg-accent-primary text-white">
                    <div className="container mx-auto max-w-5xl text-center">
                        <h2 className="text-4xl md:text-5xl font-bold font-space mb-8">
                            Still have more questions?
                        </h2>
                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                            Don't hesitate to reach out. Our team is always ready to jump on a call and clarify anything you need.
                        </p>
                        <button
                            onClick={() => navigate('/#contact')}
                            className="bg-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
                            style={{ color: 'var(--accent-primary)' }}
                        >
                            Get in Touch Now
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default FAQPage;
