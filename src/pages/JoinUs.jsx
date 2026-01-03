import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JoinUsCanvas from '../components/JoinUsCanvas';
import { FaVideo, FaPenNib, FaPaintBrush, FaCode, FaBullhorn, FaTimes, FaBriefcase } from 'react-icons/fa';
import { useTheme } from '../Store/ThemeContext';
import { apiPath } from '../utils/api';

const roles = [
    {
        id: 'video-editing',
        title: 'Video Editing',
        icon: <FaVideo className="text-4xl mb-4" />,
        desc: "Craft compelling stories through visual rhythm."
    },
    {
        id: 'content-writing',
        title: 'Content Writing',
        icon: <FaPenNib className="text-4xl mb-4" />,
        desc: "Shape the voice of brands with words."
    },
    {
        id: 'graphic-design',
        title: 'Graphic/Brand Design',
        icon: <FaPaintBrush className="text-4xl mb-4" />,
        desc: "Visualize identities that leave a mark."
    },
    {
        id: 'web-app',
        title: 'Web & App Design',
        icon: <FaCode className="text-4xl mb-4" />,
        desc: "Build digital experiences that matter."
    },
    {
        id: 'marketing',
        title: 'Digital Marketing',
        icon: <FaBullhorn className="text-4xl mb-4" />,
        desc: "Amplify reach and drive impact."
    }
];

const JoinUs = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', portfolio: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const { isDark } = useTheme();

    const openModal = (role) => {
        setSelectedRole(role);
        setStatus({ type: '', message: '' });
        setFormData({ name: '', email: '', portfolio: '', message: '' });
    };

    const closeModal = () => {
        setSelectedRole(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // Using logic from contact form + extra fields
                const response = await fetch(apiPath('/api/joinus'), {
                body: JSON.stringify({ ...formData, role: selectedRole.title }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Application sent! Good luck 🍀' });
                setTimeout(closeModal, 2000);
            } else {
                setStatus({ type: 'error', message: data.message || 'Something went wrong :(' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Network error. Try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
            <JoinUsCanvas />

            <div className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center">

                {/* Hero Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-space">
                        Join the <span className="text-[var(--accent-primary)]">Revolution</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-70 max-w-2xl mx-auto font-light">
                        We are looking for visionaries, creators, and rebels. Find your role and let's build the future together.
                    </p>
                </motion.div>

                {/* Roles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {roles.map((role, i) => (
                        <motion.div
                            key={role.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="p-8 rounded-3xl border cursor-pointer group relative overflow-hidden backdrop-blur-sm transition-colors"
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                borderColor: 'var(--border-color)'
                            }}
                            onClick={() => openModal(role)}
                        >
                            <div className="text-[var(--accent-primary)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 origin-left">
                                {role.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
                            <p className="opacity-60 text-sm leading-relaxed">{role.desc}</p>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/0 via-[var(--accent-primary)]/5 to-[var(--accent-primary)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            <Footer />

            {/* Application Modal */}
            <AnimatePresence>
                {selectedRole && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                            onClick={closeModal}
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-lg rounded-3xl p-8 lg:p-10 shadow-2xl overflow-hidden"
                            style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-500/10 transition-colors"
                            >
                                <FaTimes size={20} />
                            </button>

                            <h2 className="text-3xl font-bold mb-2 font-space">Apply for <span style={{ color: 'var(--accent-primary)' }}>{selectedRole.title}</span></h2>
                            <p className="text-sm opacity-60 mb-8">Show us what you've got. Impress us.</p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider opacity-50 ml-1">Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl p-4 outline-none focus:border-[var(--accent-primary)] transition-colors"
                                        placeholder="Your Full Name"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider opacity-50 ml-1">Email</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl p-4 outline-none focus:border-[var(--accent-primary)] transition-colors"
                                        placeholder="email@example.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider opacity-50 ml-1">Portfolio / Resume Link</label>
                                    <input
                                        type="url"
                                        required
                                        className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl p-4 outline-none focus:border-[var(--accent-primary)] transition-colors"
                                        placeholder="https://..."
                                        value={formData.portfolio}
                                        onChange={e => setFormData({ ...formData, portfolio: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider opacity-50 ml-1">Why you?</label>
                                    <textarea
                                        required
                                        rows={3}
                                        className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl p-4 outline-none focus:border-[var(--accent-primary)] transition-colors resize-none"
                                        placeholder="Briefly tell us why you're a good fit..."
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                {status.message && (
                                    <div className={`p-3 rounded-lg text-center text-sm font-bold ${status.type === 'success' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 rounded-xl font-bold text-white shadow-lg transform active:scale-95 transition-all mt-4"
                                    style={{ backgroundColor: 'var(--accent-primary)' }}
                                >
                                    {loading ? 'Sending...' : 'Submit Application'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default JoinUs;
