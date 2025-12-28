import React from 'react';
import { motion } from 'framer-motion';

const articles = [
    {
        title: "How to Go Viral on TikTok in 2025",
        date: "Dec 8, 2024",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "The Future of Creator Economy",
        date: "Nov 24, 2024",
        category: "Industry",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Why Thumbnails Matter More Than You Think",
        date: "Nov 15, 2024",
        category: "Design",
        image: "https://images.unsplash.com/photo-1626785774573-4b7993143a4d?q=80&w=1000&auto=format&fit=crop"
    }
];

const Insights = () => {
    return (
        <section id="insights" className="py-24 relative" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl mb-16 text-center text-white"
                >
                    LATEST <span className="text-accent">INSIGHTS</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="overflow-hidden rounded-2xl mb-6 relative aspect-[4/3]">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase border border-white/20">
                                    {article.category}
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mb-2 text-white/40 text-sm font-mono">
                                <span>{article.date}</span>
                            </div>
                            <h3 className="text-2xl font-bold leading-tight group-hover:text-accent transition-colors duration-300">
                                {article.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Insights;
