import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, ArrowUpRight } from 'lucide-react';

const InquirySection = () => {
    const [email, setEmail] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission logic (e.g., redirect to full contact or API)
        console.log("Inquiry for:", email);
    };

    return (
        <section className="relative w-full py-32 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            {/* --- Background Elements --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-yellow/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-150 contrast-150 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* --- Left Column: Text & Hierarchy --- */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center space-x-2 text-brand-yellow font-medium tracking-[0.2em] uppercase text-sm mb-4">
                            <span className="w-8 h-[2px] bg-brand-yellow"></span>
                            <span>Start The Dialogue</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold font-space leading-none mb-6">
                            Ready to Ignite <br />
                            <span style={{ color: 'var(--text-primary)' }}>
                                Your Brand?
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
                            Have a vision? We translate complex ideas into digital masterclasses.
                            Share your requirement and let's shape the future.
                        </p>
                    </motion.div>

                    {/* Tags / Capabilities */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-wrap gap-3"
                    >
                        {['Campaigns', 'Branding', 'Digital Products', 'Motion'].map((tag, i) => (
                            <span key={i} className="px-4 py-2 rounded-full border border-[var(--border-color)] text-[var(--text-muted)] text-sm hover:bg-[var(--bg-secondary)] hover:border-[var(--text-muted)] transition-all cursor-default">
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* --- Right Column: Interactive Input --- */}
                <div className="w-full relative">
                    {/* Visual Card Backdrop */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative backdrop-blur-xl border rounded-3xl p-8 md:p-12 overflow-hidden group"
                        style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                    >
                        {/* Hover Effect Light */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-medium mb-8 flex items-center" style={{ color: 'var(--text-primary)' }}>
                                Start a Project
                                <ArrowUpRight className="ml-2 w-5 h-5 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" style={{ color: 'var(--accent-primary)' }} />
                            </h3>

                            <form onSubmit={handleSubmit} className="relative">
                                <div className={`relative transition-all duration-300 ${isFocused ? 'scale-[1.02]' : 'scale-100'}`}>
                                    <input
                                        type="text"
                                        placeholder="Type your email or project brief..."
                                        className="w-full border-none placeholder-gray-500 text-lg md:text-xl p-6 pr-20 rounded-2xl outline-none transition-all"
                                        style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />

                                    <button
                                        type="submit"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-3 hover:bg-red-600 rounded-xl text-white transition-all shadow-lg hover:shadow-accent/40 active:scale-95 group/btn"
                                        style={{ backgroundColor: 'var(--accent-primary)' }}
                                    >
                                        <Send size={20} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                    </button>
                                </div>
                            </form>

                            <div className="mt-8 flex items-center justify-between text-sm" style={{ color: 'var(--text-muted)' }}>
                                <span>Typical response: 24h</span>
                                <a href="mailto:hello@mnfst.agency" className="transition-colors border-b border-transparent" style={{ color: 'var(--text-secondary)' }}>
                                    hello@mnfst.agency
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InquirySection;
