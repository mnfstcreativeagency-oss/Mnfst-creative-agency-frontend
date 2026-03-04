import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videos = [
    {
        id: 1,
        title: "Abhi Top Tech",
        src: "/Videos/abhi 2.mp4",
        poster: "/Posters/abhi2poster.png",
    },
    {
        id: 2,
        title: "Bharath",
        src: "/Videos/bharath2.mp4",
        poster: "/Posters/bharath2psoter.png",
    },
    {
        id: 3,
        title: "Madhu",
        src: "/Videos/madhuAnna3.mp4",
        poster: "/Posters/madhuAnna3poster.png",
    },
    {
        id: 4,
        title: "Kumar",
        src: "/Videos/kumarAnna2.mp4",
        poster: "/Posters/kumarAnna2poster.png",
    },
    {
        id: 5,
        title: "Sharavan",
        src: "/Videos/sharavan1.mp4",
        poster: "/Posters/sharavan1poster.png",
    },
    {
        id: 6,
        title: "Edit 05",
        src: "/Videos/05.mp4",
        poster: "/Posters/05poster.png",
    },
    {
        id: 7,
        title: "Nihar",
        src: "/Videos/NiharAnna1.mp4",
        poster: "/Posters/NiharAnna1poster.png",
    },
    {
        id: 8,
        title: "Bhairav",
        src: "/Videos/bhh2 (1).mp4",
        poster: "/Posters/bhh2poster.png",
    },
    {
        id: 9,
        title: "Jan 6",
        src: "/Videos/Jan6.mp4",
        poster: "/Posters/Jan6poster.png",
    },
    {
        id: 10,
        title: "Vaibhav",
        src: "/Videos/vaibhav 20.2.mp4",
        poster: "/Posters/vaibhav 20.2poster.png",
    },
    {
        id: 11,
        title: "MNFST Reel",
        src: "/Videos/mnfst reel 1-.mp4",
        poster: "/Posters/mnfst reel 1-poster.png",
    },
    {
        id: 12,
        title: "Sahara Family",
        src: "/Videos/SAHARAFAM1.mp4",
        poster: "/Posters/SAHARAFAM1.png",
    },
    {
        id: 13,
        title: "Doctor Podcast",
        src: "/Videos/doctor podcast edit 1.mp4",
        poster: "/Posters/doctor podcast edit 1poster.png",
    },
    {
        id: 14,
        title: "Asian Monk",
        src: "/Videos/asian monk reel 1 .mp4",
        poster: "/Posters/asian monk reel 1poster.png",
    },
    {
        id: 15,
        title: "Vaibhav Reel 4",
        src: "/Videos/vaibhav reeeel 4.mp4",
        poster: "/Posters/vaibhav reeeel 4poster.png",
    },
];


export default function WorkVertical() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const videoRefs = useRef([]);

    const getIndex = (i) =>
        ((i % videos.length) + videos.length) % videos.length;

    const handleNext = () => setActiveIndex((p) => p + 1);
    const handlePrev = () => setActiveIndex((p) => p - 1);

    /* autoplay timer */
    useEffect(() => {
        if (!isAutoPlaying) return;
        const t = setInterval(() => setActiveIndex((p) => p + 1), 4000);
        return () => clearInterval(t);
    }, [isAutoPlaying]);

    /* control playback */
    useEffect(() => {
        videoRefs.current.forEach((video, i) => {
            if (!video) return;
            if (i === getIndex(activeIndex)) {
                video.play().catch(() => { });
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    }, [activeIndex]);

    const visibleOffsets = [-2, -1, 0, 1, 2];

    const getStyle = (offset) => ({
        0: { scale: 1, opacity: 1, blur: 0, x: 0, z: 50 },
        1: { scale: 0.85, opacity: 0.7, blur: 2, x: "60%", z: 40 },
        "-1": { scale: 0.85, opacity: 0.7, blur: 2, x: "-60%", z: 40 },
        2: { scale: 0.7, opacity: 0.4, blur: 4, x: "110%", z: 30 },
        "-2": { scale: 0.7, opacity: 0.4, blur: 4, x: "-110%", z: 30 },
    }[offset] || { scale: 0, opacity: 0, blur: 0, x: 0, z: 0 });

    return (
        <section className="w-full py-24 overflow-hidden" style={{ color: 'var(--text-primary)' }}>
            <h2 className="text-center text-5xl font-bold mb-16" style={{ color: 'var(--text-primary)' }}>
                Our viral <span className="text-accent">short-form</span> edits
            </h2>

            <div className="relative h-[600px] flex items-center justify-center max-w-[1400px] mx-auto">
                {/* arrows */}
                <button
                    onClick={handlePrev}
                    className="absolute left-6 z-50 p-4 rounded-full border transition-all hover:scale-110"
                    style={{
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        borderColor: 'var(--border-color)',
                        boxShadow: 'var(--shadow-color)'
                    }}
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-6 z-50 p-4 rounded-full border transition-all hover:scale-110"
                    style={{
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        borderColor: 'var(--border-color)',
                        boxShadow: 'var(--shadow-color)'
                    }}
                >
                    <FaChevronRight />
                </button>

                {/* cards */}
                {visibleOffsets.map((offset) => {
                    const index = getIndex(activeIndex + offset);
                    const video = videos[index];
                    const style = getStyle(offset);
                    const isCenter = offset === 0;

                    return (
                        <motion.div
                            key={`${video.id}-${offset}`}
                            className="absolute w-[280px] md:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl"
                            animate={{
                                scale: style.scale,
                                opacity: isCenter ? 1 : style.opacity,
                                x: style.x,
                                filter: `blur(${style.blur}px)`,
                                zIndex: style.z,
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            onClick={() => !isCenter && setActiveIndex((p) => p + offset)}
                            onMouseEnter={() => isCenter && setIsAutoPlaying(false)}
                            onMouseLeave={() => setIsAutoPlaying(true)}
                        >
                            {/* inner clean layer */}
                            <div className="w-full h-full">
                                <video
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    src={video.src}
                                    poster={video.poster}
                                    className={`w-full h-full object-cover ${!isCenter ? "pointer-events-none" : ""
                                        }`}
                                    muted
                                    loop
                                    playsInline
                                    preload={isCenter ? "auto" : "metadata"}
                                    controls={isCenter}

                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
