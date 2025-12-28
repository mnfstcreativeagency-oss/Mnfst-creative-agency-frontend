import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const projects = [
    { id: 1, title: "MrBeast Gaming", sub: "Thumbnail Design", color: "#FF0055", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Logitech", sub: "Ad Campaign", color: "#00CC88", img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Sidemen", sub: "Video Editing", color: "#22CC88", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Airrack", sub: "Strategy", color: "#0099FF", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "Ryan Trahan", sub: "Branding", color: "#FFAA00", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" },
];

const WorkCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    return (
        <section ref={targetRef} id="work" className="relative h-[300vh] transition-colors duration-500" style={{ background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))' }}>
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 w-full text-center z-10">
                    <h2 className="text-4xl md:text-5xl font-bold transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                        Check out our <span className="relative z-10 border-b-8 pr-2 transition-colors duration-300" style={{ color: 'var(--accent-primary)', borderColor: 'rgba(251, 182, 87, 0.3)' }}>work</span>
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-8 px-12 pt-20">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative h-[50vh] w-[350px] md:w-[500px] flex-shrink-0 overflow-hidden rounded-2xl shadow-lg cursor-pointer border"
                            style={{
                                backgroundColor: 'var(--bg-secondary)',
                                borderColor: 'var(--border-color)'
                            }}
                        >
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                                <h3 className="text-2xl font-bold text-white mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-accent text-sm font-semibold uppercase tracking-wider">
                                    {project.sub}
                                </p>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-1">
                                        <path d="M8 5V19L19 12L8 5Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="h-[50vh] w-[200px] flex-shrink-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-accent transition-colors">
                            <FaChevronRight className="text-2xl" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkCarousel;
