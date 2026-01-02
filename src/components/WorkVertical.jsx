import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Placeholder data for vertical videos
const videos = [
    { id: 1, title: "Lifestyle", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, title: "Tech", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, title: "Fashion", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" },
    { id: 4, title: "Travel", img: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1000&auto=format&fit=crop" },
    { id: 5, title: "Gaming", img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1000&auto=format&fit=crop" },
    { id: 6, title: "Corporate", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop" },
];

const WorkVertical = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Start in middle
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Circular navigation logic
    const getIndex = (index) => {
        const len = videos.length;
        return ((index % len) + len) % len;
    };

    const handleNext = () => setActiveIndex((prev) => prev + 1);
    const handlePrev = () => setActiveIndex((prev) => prev - 1);

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(handleNext, 3000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, activeIndex]);

    // Visibile items: center-2, center-1, center, center+1, center+2
    const visibleOffsets = [-2, -1, 0, 1, 2];

    const getStyle = (offset) => {
        const styles = {
            0: { scale: 1, opacity: 1, zIndex: 50, blur: 0, x: 0 },
            1: { scale: 0.85, opacity: 0.7, zIndex: 40, blur: '2px', x: '60%' },
            [-1]: { scale: 0.85, opacity: 0.7, zIndex: 40, blur: '2px', x: '-60%' },
            2: { scale: 0.7, opacity: 0.4, zIndex: 30, blur: '4px', x: '110%' },
            [-2]: { scale: 0.7, opacity: 0.4, zIndex: 30, blur: '4px', x: '-110%' },
        };
        return styles[offset] || { scale: 0, opacity: 0, zIndex: 0 };
    };

    return (
        <section className="w-full py-24 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container mx-auto px-4 text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold font-space text-center" style={{ color: 'var(--text-primary)' }}>
                    Our viral <span className="relative inline-block px-2">
                        short-form
                        <span className="absolute bottom-1 left-0 w-full h-3 md:h-4 -z-10 bg-accent/40 rounded-sm transform -rotate-1"></span>
                    </span> edits
                </h2>
            </div>

            <div
                className="relative h-[500px] md:h-[600px] flex items-center justify-center max-w-[1400px] mx-auto select-none"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 md:left-20 z-50 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-3xl hover:bg-white/20 transition-all hover:scale-110"
                    style={{ color: 'var(--text-primary)' }}
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 md:right-20 z-50 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-3xl hover:bg-white/20 transition-all hover:scale-110"
                    style={{ color: 'var(--text-primary)' }}
                >
                    <FaChevronRight />
                </button>

                {/* Carousel Tracks */}
                <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                    {visibleOffsets.map((offset) => {
                        const index = getIndex(activeIndex + offset);
                        const video = videos[index];
                        const style = getStyle(offset);

                        return (
                            <motion.div
                                key={`${video.id}-${offset}`} // Unique key for animation stability
                                layout
                                initial={false}
                                animate={{
                                    scale: style.scale,
                                    opacity: style.opacity,
                                    x: style.x,
                                    zIndex: style.zIndex,
                                    filter: `blur(${style.blur})`
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute w-[280px] md:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/10 cursor-pointer bg-gray-900"
                                onClick={() => {
                                    if (offset === 0) {
                                        window.open('https://drive.google.com/drive/folders/1bn2EPTzHRth7-jx2-0og2_rch5J_BchR?usp=sharing', '_blank');
                                    } else {
                                        setActiveIndex(prev => prev + offset);
                                    }
                                }}
                            >
                                <img
                                    src={video.img}
                                    alt={video.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20"></div>

                                {offset === 0 && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center pl-1 animate-pulse">
                                            <FaPlay className="text-white text-2xl" />
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WorkVertical;
