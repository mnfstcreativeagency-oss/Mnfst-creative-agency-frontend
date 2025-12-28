import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const services = [
    {
        id: 'videography',
        title: "VIDEOGRAPHY",
        description: "Strategy-driven content designed to connect."
    },
    {
        id: 'website-design',
        title: "WEB DESIGN & DEVELOPMENT",
        description: "Intuitive experiences built for real user behavior."
    },
    {
        id: 'cgi-animation',
        title: "GRAPHIC DESIGN",
        description: "Sharp visual content standing out across brand."
    }
];

const HorizontalZipperCard = ({ service }) => {
    const navigate = useNavigate();
    const x = useMotionValue(0);
    const controls = useAnimation();
    const containerRef = useRef(null);
    const [dragLimit, setDragLimit] = useState(1000);

    useEffect(() => {
        if (containerRef.current) {
            // Set drag limit to full width minus puller width
            setDragLimit(containerRef.current.offsetWidth);
        }

        const handleResize = () => {
            if (containerRef.current) {
                setDragLimit(containerRef.current.offsetWidth);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleDragEnd = (_, info) => {
        if (x.get() > dragLimit * 0.9) {
            controls.start({ x: dragLimit });
            setTimeout(() => {
                navigate(`/service/${service.id}`);
            }, 600);
        } else {
            controls.start({ x: 0 });
        }
    };

    // SILVER TEETH PATTERN
    const teethPattern = `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='silver' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23eeeeee'/%3E%3Cstop offset='50%25' stop-color='%23999999'/%3E%3Cstop offset='100%25' stop-color='%23cccccc'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M5 0 L15 0 L15 20 L5 20 Z' fill='url(%23silver)' stroke='%23666' stroke-width='1'/%3E%3C/svg%3E")`;

    return (
        <div className="w-full mb-4 " ref={containerRef}>
            {/* 1. Title ABOVE the zipper - Adjusted Font Size and Family */}
            <h3 className="text-3xl md:text-4xl font-bold font-playfair text-primary uppercase mb-2 pl-0 tracking-tight italic">
                {service.title}
            </h3>

            {/* 2. Zipper Container - Adjusted Height */}
            <div className="relative w-full h-[120px] md:h-[130px] rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: 'var(--bg-secondary)' }}>

                {/* A. Background (Revealed Content) */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
                    <span className="text-xl md:text-2xl text-gray-400 font-bold tracking-[0.2em] animate-pulse">
                        OPENING...
                    </span>
                </div>

                {/* B. The "Opened" Fabric (Left Side) - Teeth Separated */}
                {/* Top Flap */}
                <motion.div
                    className="absolute top-0 left-0 right-0 h-1/2 z-10 border-b border-black/10 origin-top"
                    style={{
                        backgroundColor: 'var(--accent-primary)',
                        clipPath: useTransform(x, (val) => `inset(0px ${dragLimit - val + 80}px 0px 0px)`),
                        y: useTransform(x, [0, dragLimit], [0, -15]),
                        rotateX: useTransform(x, [0, dragLimit], [0, 20]),
                    }}
                >
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-repeat-x" style={{ backgroundImage: teethPattern, backgroundSize: '18px 100%' }}></div>
                </motion.div>

                {/* Bottom Flap */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1/2 z-10 border-t border-black/10 origin-bottom"
                    style={{
                        backgroundColor: 'var(--accent-primary)',
                        clipPath: useTransform(x, (val) => `inset(0px ${dragLimit - val + 80}px 0px 0px)`),
                        y: useTransform(x, [0, dragLimit], [0, 15]),
                        rotateX: useTransform(x, [0, dragLimit], [0, -20]),
                    }}
                >
                    <div className="absolute top-0 left-0 right-0 h-6 bg-repeat-x" style={{ backgroundImage: teethPattern, backgroundSize: '18px 100%' }}></div>
                </motion.div>


                {/* C. The "Closed" Fabric (Right Side) - Teeth Interlocked */}
                <motion.div
                    className="absolute inset-0 z-20"
                    style={{
                        clipPath: useTransform(x, (val) => `inset(0px 0px 0px ${val}px)`)
                    }}
                >
                    <div className="absolute inset-0" style={{ backgroundColor: 'var(--accent-primary)' }}></div>

                    {/* Interlocked Teeth Track (Center) */}
                    <div className="absolute top-1/2 left-0 right-0 h-8 -mt-4 flex items-center bg-black/10">
                        <div className="w-full h-full bg-repeat-x" style={{
                            backgroundImage: teethPattern,
                            backgroundSize: '16px 100%',
                            opacity: 0.95
                        }}></div>
                        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/30"></div>
                    </div>
                </motion.div>


                {/* D. The Puller (Draggable) - Adjusted Size */}
                <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: dragLimit }}
                    dragElastic={0.05}
                    dragMomentum={false}
                    onDragEnd={handleDragEnd}
                    animate={controls}
                    style={{ x }}
                    className="absolute top-0 bottom-0 w-16 z-30 cursor-grab active:cursor-grabbing flex items-center justify-center -ml-8 group"
                >
                    {/* Visual Hint: Pulsing Arrow (Non-textual) */}
                    <motion.div
                        className="absolute right-[-40px] text-white/80 pointer-events-none drop-shadow-md z-40"
                        animate={{ x: [0, 5, 0], opacity: [0.6, 1, 0.6] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 7L18 12L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 7L11 12L6 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                        </svg>
                    </motion.div>

                    {/* Realistic Silver Puller UI - Standard Size */}
                    <div className="relative flex flex-col items-center drop-shadow-xl scale-100">
                        {/* Shimmer Effect on Puller Body */}
                        <div className="w-10 h-14 rounded-lg bg-gradient-to-b from-gray-300 via-white to-gray-400 border border-gray-400 shadow-inner flex flex-col items-center justify-center relative z-10 overflow-hidden">
                            {/* Shimmer Animation */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/80 to-transparent"
                                animate={{ x: ['-200%', '200%'] }}
                                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 1 }}
                            />
                            <div className="absolute inset-x-2 top-2 h-1/2 bg-gradient-to-b from-white to-transparent opacity-60 rounded-t"></div>
                            <div className="w-2 h-8 bg-black/20 rounded-full z-10"></div>
                        </div>

                        {/* Pull Tab */}
                        <motion.div
                            className="w-8 h-12 -mt-2 bg-gradient-to-b from-gray-200 to-gray-400 rounded-b-xl border border-gray-500 shadow-lg flex items-center justify-center origin-top transform-gpu"
                            style={{ rotate: useTransform(x, (v) => v * 0.05) }}
                        >
                            <div className="w-4 h-6 border-2 border-gray-500/30 rounded-full"></div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
            {/* Contained Width to match reference layout */}
            <div className="w-full px-6 max-w-7xl mx-auto">
                {/* Heading matching reference */}
                <h2 className="text-5xl md:text-6xl font-bold font-playfair text-primary text-center mb-10 uppercase tracking-tight italic">
                    OUR EXPERTISE
                </h2>
                <div className="flex flex-col">
                    {services.map((service) => (
                        <HorizontalZipperCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
