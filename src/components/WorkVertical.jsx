import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videos = [
    {
        id: 1,
        title: "Edit 1",
        src: "https://res.cloudinary.com/dkxtthv23/video/upload/abhi_2_tqrqru.mp4",
        poster:
            "https://res.cloudinary.com/dkxtthv23/image/upload/v1767422025/abhi_2tqrqrump4_ayvvpw.png",
    },
    {
        id: 2,
        title: "Edit 2",
        src: "https://res.cloudinary.com/dkxtthv23/video/upload/bharath3_h73nr4.mp4",
        poster:
            "https://res.cloudinary.com/dkxtthv23/image/upload/v1767422025/tolyowd_d3ex9q.png",
    },
    {
        id: 3,
        title: "Edit 3",
        src: "https://res.cloudinary.com/dkxtthv23/video/upload/madhuAnna3_h2vtj3.mp4",
        poster:
            "https://res.cloudinary.com/dkxtthv23/image/upload/v1767422026/madhuAnna3h2vtj3mp4_vflkts.png",
    },
    {
        id: 4,
        title: "Edit 4",
        src: "https://res.cloudinary.com/dkxtthv23/video/upload/kumarAnna3_zs8axr.mp4",
        poster:
            "https://res.cloudinary.com/dkxtthv23/image/upload/v1767422027/kumarAnna3zs8axrmp4_ipnt42.png",
    },
    {
        id: 5,
        title: "Edit 5",
        src: "https://res.cloudinary.com/dkxtthv23/video/upload/sharavan2_gbb1lm.mp4",
        poster:
            "https://res.cloudinary.com/dkxtthv23/image/upload/v1767422027/sharavan2gbb1lmmp4_lulm6h.png",
    },
    {
        id: 6,
        title: "Edit 6",
        src: "https://res.cloudinary.com/dkxtthv23/video/upload/04_nok2na.mp4",
        poster:
            "https://res.cloudinary.com/dkxtthv23/image/upload/v1767422061/04_nok2namp4poster_kuiup9.png",
    },
    {
        id: 7,
        title: "Edit 7",
        src: "https://res.cloudinary.com/dkxtthv23/video/upload/v1767383953/NiharAnna3_ez5qzs.mp4",
        poster:
            "https://res.cloudinary.com/dkxtthv23/image/upload/v1767422026/nihar_t2vbwh.png",
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
        <section className="w-full py-24 overflow-hidden">
            <h2 className="text-center text-5xl font-bold text-white mb-16">
                Our viral <span className="text-accent">short-form</span> edits
            </h2>

            <div className="relative h-[600px] flex items-center justify-center max-w-[1400px] mx-auto">
                {/* arrows */}
                <button
                    onClick={handlePrev}
                    className="absolute left-6 z-50 p-4 rounded-full bg-white/10 text-white"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-6 z-50 p-4 rounded-full bg-white/10 text-white"
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
