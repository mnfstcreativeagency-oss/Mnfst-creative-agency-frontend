import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
    {
        question: "What services do you offer?",
        answer: "We offer a full suite of digital growth services including Performance Marketing, SEO Strategy, Web Development, Branding, and Social Media Management. Our approach is integrated, meaning we sync all channels to work together for compounding growth."
    },
    {
        question: "How do you track project success?",
        answer: "We use live growth dashboards and real-time reporting. Success is measured by the metrics that matter most to your business—typically ROAS, qualified lead volume, and customer acquisition cost (CAC)."
    },
    {
        question: "What is your typical project timeline?",
        answer: "Most strategy-led builds or campaigns see initial results within 30-60 days. Major rebranding or complex web developments typically span 8-12 weeks from deep-dive to launch."
    },
    {
        question: "Do you work with startups?",
        answer: "Absolutely. We love helping digital-first brands find their voice and scale. We tailor our 'Marketing Growth Playbook' to suit different stages of growth, from seed to scale."
    },
    {
        question: "Can I customize my marketing package?",
        answer: "Yes, our services are modular. While we recommend an integrated approach for best results, we can definitely build a custom scope that focuses on your most urgent growth levers."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* LEFT: Header Information */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-6">SUPPORT & INFO</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-8 font-space">
                                Common <br />
                                <span className="italic text-muted font-light">Questions.</span>
                            </h2>
                            <p className="text-secondary text-lg leading-relaxed mb-8 max-w-sm">
                                Everything you need to know about our growth process and how we help brands dominate.
                            </p>

                            <div className="hidden lg:block p-8 rounded-2xl border border-dashed border-gray-300 dark:border-gray-800">
                                <p className="text-sm font-medium text-primary mb-2">Still have questions?</p>
                                <p className="text-xs text-muted mb-4">Our strategy team is ready to help you map your next 90 days.</p>
                                <button className="text-accent text-sm font-bold flex items-center gap-2 group">
                                    Book a Call <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: Accordion */}
                    <div className="lg:w-2/3 space-y-4">
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={index}
                                item={item}
                                isOpen={activeIndex === index}
                                onClick={() => toggleAccordion(index)}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ item, isOpen, onClick, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                ? 'shadow-xl'
                : 'border-transparent hover:border-(--border-color)'
                }`}
            style={{
                backdropFilter: 'blur(10px)',
                backgroundColor: isOpen ? 'var(--bg-primary)' : 'var(--bg-secondary)',
                borderColor: isOpen ? 'var(--accent-primary)' : 'transparent'
            }}
        >
            <button
                onClick={onClick}
                className="w-full px-8 py-7 flex items-center justify-between text-left group"
            >
                <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#cf2626]' : 'text-[var(--text-primary)]'}`}>
                    {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#cf2626] text-white rotate-180' : 'text-[var(--text-muted)]'
                    }`}
                    style={{ backgroundColor: isOpen ? 'var(--accent-primary)' : 'var(--bg-primary)' }}
                >
                    {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <div className="px-8 pb-8">
                            <div className="w-full h-px bg-gray-100 dark:bg-zinc-800 mb-6" />
                            <p className="text-secondary leading-relaxed text-base md:text-lg">
                                {item.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FAQ;
