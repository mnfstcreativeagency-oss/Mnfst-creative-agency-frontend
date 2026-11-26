import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videos = [
    {
        id: 1,
        title: "Real Estate 1",
        src: "/Videos/realestate1.mp4",
    },
    {
        id: 2,
        title: "Real Estate 2",
        src: "/Videos/realestate2.mp4",
    },
    {
        id: 3,
        title: "Real Estate 3",
        src: "/Videos/realestate3.mp4",
    },
    {
        id: 4,
        title: "Real Estate 4",
        src: "/Videos/realestate4.mp4",
    },
    {
        id: 5,
        title: "Sharvan 1",
        src: "/Videos/sharvan1.mp4",
    },
    {
        id: 6,
        title: "Sharvan 2",
        src: "/Videos/sharvan2.mp4",
    },
    {
        id: 7,
        title: "Jan 6",
        src: "/Videos/Jan6.mp4",
        poster: "/Posters/Jan6poster.png",
    },
    {
        id: 8,
        title: "Asian Monk",
        src: "/Videos/asian monk reel 1 .mp4",
        poster: "/Posters/asian monk reel 1poster.png",
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

    /* autoplay when video ends or when autoplay becomes active and the current video is already ended */
    useEffect(() => {
        if (!isAutoPlaying) return;
        const activeVideo = videoRefs.current[getIndex(activeIndex)];
        if (activeVideo && activeVideo.ended) {
            handleNext();
        }
    }, [isAutoPlaying, activeIndex]);

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
                                    loop={false}
                                    playsInline
                                    preload={isCenter ? "auto" : "metadata"}
                                    controls={isCenter}
                                    onEnded={() => {
                                        if (isCenter && isAutoPlaying) {
                                            handleNext();
                                        }
                                    }}
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
