import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from '../Store/ThemeContext';
const services = [
  {
    id: 1,
    title: "Long‑Form",
    category: "Video Production",
    year: "YOUTUBE & PODCASTS",
    image: "/Images/service_video_editing.png",
    bgImage: "/Images/service_video_editing.png",
    description: "Cinematic, engaging video editing tailored for long-form content, narrative films, and high-quality podcast production.",
    slug: "long-form-video-editing"
  },
  {
    id: 2,
    title: "Podcast",
    category: "Audio-Visual",
    year: "PODCASTS",
    image: "/Images/service_podcast_editing.png",
    bgImage: "/Images/Podcast.png",
    description: "Professional video editing for podcasts, integrating visuals, branding, and dynamic subtitles to enhance listener engagement.",
    slug: "podcast-video-editing"
  },
  {
    id: 3,
    title: "Shorts/Reel",
    category: "Viral Content",
    year: "REELS & TIKTOKS",
    image: "/Images/service_shorts_reel.png",
    bgImage: "/Images/service_short_form.png",
    description: "Dynamic, fast-paced vertical edits featuring subtitles, visual hooks, and animations optimized for maximum social reach.",
    slug: "shorts-reel-video-editing"
  },
  {
    id: 4,
    title: "UGC Video Editing",
    category: "User Generated Content",
    year: "UGC",
    image: "/Images/service_ugc.png",
    bgImage: "/Images/ugc.png",
    description: "Authentic and compelling editing of user-generated footage, enhancing brand storytelling with a personal touch.",
    slug: "ugc-video-editing"
  }
];

const AUTOPLAY_TIME = 6000; // 6 seconds per slide

export default function OurServices() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = down/next, -1 = up/prev
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef(null);
  const touchStartY = useRef(0);
  const lastScrollTime = useRef(0);

  // Restart timer when index changes
  useEffect(() => {
    setProgress(0);
    if (progressInterval.current) clearInterval(progressInterval.current);

    const start = Date.now();
    progressInterval.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / AUTOPLAY_TIME) * 100, 100);
      setProgress(pct);

      if (elapsed >= AUTOPLAY_TIME) {
        clearInterval(progressInterval.current);
        handleNext();
      }
    }, 50);

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [index]);

  const handleNext = () => {
    if (isAnimating) return;
    setDirection(1);
    setIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection(-1);
    setIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleWheel = (e) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 800) return; // Cooldown of 800ms
    lastScrollTime.current = now;

    if (e.deltaY > 30) {
      handleNext();
    } else if (e.deltaY < -30) {
      handlePrev();
    }
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(deltaY) > 50) {
      if (deltaY < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const currentService = services[index];

  // Letter stagger animation for center title
  const titleVariants = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "-100%" }
  };

  return (
    <div
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 w-full h-full bg-black text-white select-none overflow-hidden"
      style={{ zIndex: 40 }}
    >
      {/* Background slide transitions */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/90 z-10" />
<div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${currentService.bgImage || currentService.image})` }} />
        </motion.div>
      </AnimatePresence>

      {/* Top Left: Scroll Indicator */}
      <div className="absolute top-28 left-6 md:left-12 z-30 flex items-center gap-3">
        <div className="flex flex-col items-center gap-1">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="cursor-pointer hover:text-accent"
            onClick={handlePrev}
          >
            <ArrowUp size={16} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="cursor-pointer hover:text-accent"
            onClick={handleNext}
          >
            <ArrowDown size={16} />
          </motion.div>
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-mono">
          Scroll
        </span>
      </div>

      {/* Top Right: Counter */}
      <div className="absolute top-28 right-6 md:right-12 z-30 font-mono text-sm tracking-widest text-gray-400">
        <span className="text-white font-bold">{String(index + 1).padStart(2, "0")}</span>
        <span className="mx-2">/</span>
        <span>{String(services.length).padStart(2, "0")}</span>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full h-full flex flex-col justify-between p-6 md:p-12 z-20 pointer-events-none">
        {/* Spacer for navbar spacing */}
        <div className="h-24" />

        {/* Center Section: Client, Massive Title, Year */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          {/* Category detail */}
          <div className="overflow-hidden mb-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-xs md:text-sm uppercase tracking-[0.4em] text-accent font-semibold"
              >
                {currentService.category}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Huge Main Title with Mask Slide Animation */}
          <h1 className="text-6xl md:text-8xl lg:text-[10vw] font-black tracking-tighter uppercase leading-none select-none flex flex-wrap overflow-hidden py-2 font-poppins" style={{ color: isDark ? '#EAB308' : '#EF4444' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="flex"
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ staggerChildren: 0.03 }}
              >
                {currentService.title.split("").map((char, idx) => (
                  <span key={idx} className="relative inline-block overflow-hidden">
                    <motion.span
                       style={{ color: isDark ? '#EAB308' : '#EF4444' }}
                      variants={titleVariants}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-block" style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                    >
                      {char}
                    </motion.span>
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
          </h1>

          {/* Description Detail below the title */}
          <div className="max-w-xl mx-auto overflow-hidden mt-6">
            <AnimatePresence mode="wait">
              <motion.p
                       style={{ color: isDark ? '#EAB308' : '#EF4444' }}
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-sm md:text-base text-gray-300 leading-relaxed font-light"
              >
                {currentService.description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Detailed View Link */}
          <div className="overflow-hidden mt-8 pointer-events-auto">
              {/* <AnimatePresence mode="wait">
                <motion.button
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  onClick={() => navigate(`/service/${currentService.slug}`)}
                  className="px-8 py-3 border-2 border-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto cursor-pointer"
                >
                  Explore Service
                </motion.button>
              </AnimatePresence> */}
          </div>
        </div>

        {/* Bottom Section: Progress indicators */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-4 gap-4 pointer-events-auto">
          {services.map((item, idx) => {
            const isActive = idx === index;
            return (
              <div
                key={item.id}
                onClick={() => {
                  if (idx !== index) {
                    setDirection(idx > index ? 1 : -1);
                    setIndex(idx);
                  }
                }}
                className="group flex flex-col gap-2 cursor-pointer pb-2"
              >
                {/* Visual Label */}
                                  <span
                    className={`text-[9px] uppercase tracking-[0.2em] font-mono transition-colors duration-300 ${
                      isActive ? "text-white font-bold" : "text-gray-500 group-hover:text-gray-300"
                    }`}
                    style={{ color: isDark ? '#EAB308' : '#EF4444' }}
                  >
                    {item.title}
                  </span>

                {/* Progress bar container */}
                <div className="w-full h-[2px] bg-gray-800 relative rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-accent transition-all duration-300"
                    style={{
                      width: isActive
                        ? `${progress}%`
                        : idx < index
                        ? "100%"
                        : "0%",
                      // Remove transition when resetting to 0% to avoid reverse sliding animation
                      transition: isActive && progress === 0 ? "none" : "width 0.05s linear"
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
