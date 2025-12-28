import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGoogle, FaStar, FaCheckCircle, FaChevronRight } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "Aaditya Bhatia",
        date: "1 month ago",
        review: "Their team really took the time to understand our business (a niche manufacturing unit) before suggesting strategy. The design, copy and targeting were spot on.",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100"
    },
    {
        id: 2,
        name: "zoya siddiqi",
        date: "1 month ago",
        review: "We signed up with Digital Mojo about six months ago to manage our Facebook + Google ads. After an initial ramp-up, we saw our lead cost drop by 25%, and the quality improved.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    },
    {
        id: 3,
        name: "Rahul Verma",
        date: "2 months ago",
        review: "The rebranding strategy was a game changer for us. We saw immediate engagement growth on social channels.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <section className="py-24 overflow-hidden relative" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">

                    {/* LEFT COLUMN: Header Text */}
                    <div className="lg:w-1/3 pt-8">
                        <p className="text-accent uppercase tracking-widest text-sm font-semibold mb-6">TESTIMONIALS</p>

                        {/* HEADER: Balanced size matching reference */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-8 font-poppins">
                            Client Stories & <br />
                            <span className="italic text-gray-400">Proven Results.</span>
                        </h2>

                        <button className="px-8 py-3 border-2 border-primary rounded-full font-bold text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                            View All Reviews
                        </button>
                    </div>

                    {/* RIGHT COLUMN: Carousel Grid */}
                    <div className="lg:w-3/5 relative w-full">
                        <div className="flex gap-6 overflow-hidden pb-10 pl-2">
                            <AnimatePresence initial={false} mode="popLayout">
                                {testimonials.slice(currentIndex, currentIndex + 2).map((item) => (
                                    <TestimonialCard key={item.id} item={item} />
                                ))}
                                {currentIndex + 1 >= testimonials.length && (
                                    <TestimonialCard key={testimonials[0].id} item={testimonials[0]} />
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Right Navigation Arrow */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform hidden md:flex border"
                            style={{
                                backgroundColor: 'var(--bg-primary)',
                                color: 'var(--text-primary)',
                                borderColor: 'var(--border-color)'
                            }}
                        >
                            <FaChevronRight />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ item }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="flex-shrink-0 w-full md:w-[400px] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative border"
            style={{
                backgroundColor: 'var(--bg-secondary)',
                borderColor: 'var(--border-color)'
            }}
        >
            {/* Header: Avatar | Name | Google Icon */}
            <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border" style={{ borderColor: 'var(--border-color)' }} />
                    <div>
                        <h4 className="font-bold text-base" style={{ color: 'var(--text-primary)' }}>{item.name}</h4>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.date}</p>
                    </div>
                </div>
                <div className="p-2 rounded-full shadow-sm border" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}>
                    <FaGoogle className="text-lg" style={{ color: '#4285F4' }} />
                </div>
            </div>

            {/* Stars & Tick */}
            <div className="flex items-center gap-2 mb-4">
                <div className="flex text-[#F4B400] text-lg">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <FaCheckCircle className="text-[#1A73E8]" />
            </div>

            {/* Review Text: Reduced to text-sm */}
            <p className="text-sm leading-relaxed mb-6 line-clamp-4" style={{ color: 'var(--text-secondary)' }}>
                {item.review}
            </p>

            {/* Read More */}
            <a href="#" className="font-medium text-sm hover:underline" style={{ color: 'var(--text-muted)' }}>Read more</a>

        </motion.div>
    );
};

export default Testimonials;
