import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

const ContactPage = () => {
    const contactMethods = [
        {
            name: "WhatsApp",
            value: "+91 95021 83045",
            icon: <FaWhatsapp />,
            link: "https://wa.me/919502183045",
            color: "#25D366",
            desc: "Instant chat for quick queries"
        },
        {
            name: "Instagram",
            value: "@mnfst.ca",
            icon: <FaInstagram />,
            link: "https://www.instagram.com/mnfst.ca",
            color: "#E1306C",
            desc: "Follow our creative journey"
        },
        {
            name: "Email",
            value: "mnfst.creativeagency@gmail.com",
            icon: <FaEnvelope />,
            link: "mailto:mnfst.creativeagency@gmail.com",
            color: "#EA4335",
            desc: "For formal inquiries & collaborations"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6 relative overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px]" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
                    <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full blur-[120px]" style={{ backgroundColor: 'var(--accent-secondary)' }}></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-space mb-6 tracking-tight">
                            Let's <span style={{ color: 'var(--accent-primary)' }}>Connect</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-dm max-w-2xl mx-auto opacity-70" style={{ color: 'var(--text-secondary)' }}>
                            Have a vision you want to manifest? Reach out through any of these channels and let's start the dialogue.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
                                style={{
                                    backgroundColor: 'var(--bg-secondary)',
                                    borderColor: 'var(--border-color)'
                                }}
                            >
                                {/* Hover Glow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                                    style={{ backgroundColor: method.color }}
                                />

                                <div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-8 transition-transform duration-500 group-hover:scale-110 shadow-lg"
                                    style={{ backgroundColor: 'var(--bg-primary)', color: method.color }}
                                >
                                    {method.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{method.name}</h3>
                                <p className="text-sm opacity-60 mb-6 font-dm">{method.desc}</p>

                                <span className="text-lg font-medium break-all mb-8 group-hover:opacity-100 opacity-80 transition-opacity">
                                    {method.value}
                                </span>

                                <div
                                    className="mt-auto flex items-center gap-2 font-bold text-sm tracking-widest uppercase transition-all duration-300"
                                    style={{ color: method.color }}
                                >
                                    Get in touch <FaArrowRight className="transition-transform group-hover:translate-x-2" />
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-32 text-center"
                    >
                        <div className="inline-block p-[1px] rounded-full" style={{ background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)' }}>
                            <div className="bg-[var(--bg-primary)] px-8 py-4 rounded-full">
                                <p className="text-sm font-medium tracking-widest uppercase opacity-60">
                                    Typical response time: Under 24 hours
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
            <FloatingContact />
        </div>
    );
};

export default ContactPage;
