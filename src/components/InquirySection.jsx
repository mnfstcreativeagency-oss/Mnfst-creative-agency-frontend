import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send, ArrowUpRight } from 'lucide-react';

const InquirySection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        // Robsut regex for personal and business emails
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(email)) {
            setEmailError('Please enter a valid email address');
            return false;
        }
        setEmailError('');
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) return;

        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // Using relative path via Vite proxy
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent! We will be in touch shortly.' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus({ type: 'error', message: 'Failed to send message. Is the backend running?' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="relative w-full py-32 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
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

                            <form onSubmit={handleSubmit} className="relative space-y-6">
                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative group/input">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] text-lg p-5 rounded-2xl outline-none focus:border-[var(--accent-primary)] transition-all"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="relative group/input">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className={`w-full bg-[var(--bg-primary)] border text-[var(--text-primary)] text-lg p-5 rounded-2xl outline-none focus:border-[var(--accent-primary)] transition-all ${emailError ? 'border-red-500' : 'border-[var(--border-color)]'}`}
                                            value={formData.email}
                                            onChange={(e) => {
                                                setFormData({ ...formData, email: e.target.value });
                                                if (emailError) validateEmail(e.target.value);
                                            }}
                                            required
                                        />
                                        {emailError && <p className="absolute -bottom-6 left-0 text-xs text-red-500">{emailError}</p>}
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="relative">
                                    <textarea
                                        rows="4"
                                        placeholder="Tell us about your project..."
                                        className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] text-lg p-5 rounded-2xl outline-none focus:border-[var(--accent-primary)] transition-all resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    ></textarea>
                                </div>

                                {/* Status Messages */}
                                {status.message && (
                                    <div className={`p-4 rounded-xl text-sm ${status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                        {status.message}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 shadow-lg hover:shadow-accent/40 text-white"
                                    style={{ backgroundColor: 'var(--accent-primary)' }}
                                >
                                    {loading ? (
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            <span className="text-lg">Send Message</span>
                                            <Send size={20} />
                                        </>
                                    )}
                                </button>
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
