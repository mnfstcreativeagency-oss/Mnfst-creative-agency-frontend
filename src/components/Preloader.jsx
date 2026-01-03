import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ finishLoading }) => {
    const [progress, setProgress] = useState(0);
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Smooth progress counter
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Varying speed for realistic feel
                const increment = prev < 30 ? 1 : prev < 70 ? 2 : 1;
                return Math.min(prev + increment, 100);
            });
        }, 30);

        const timer1 = setTimeout(() => setStep(1), 1000); // M...T -> MNFST
        const timer2 = setTimeout(() => setStep(2), 2500); // Subtitle
        const timer3 = setTimeout(() => finishLoading(), 4000);

        return () => {
            clearInterval(interval);
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [finishLoading]);

    const containerVariants = {
        exit: {
            y: "-100%",
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.2
            }
        }
    };

    const letterVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: (target) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1],
                delay: target * 0.1
            }
        })
    };

    return (
        <motion.div
            variants={containerVariants}
            exit="exit"
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
            style={{ backgroundColor: 'var(--bg-primary)' }}
        >
            <div className="relative flex flex-col items-center w-full max-w-4xl px-6">

                {/* Percentage Counter - Top Right */}
                {/* <div className="absolute top-[-100px] right-0 flex items-baseline gap-1">
                    <motion.span
                        className="font-space font-medium text-4xl md:text-6xl"
                        style={{ color: 'var(--text-primary)' }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        {progress}
                    </motion.span>
                    <span className="text-[#cf2626] font-space text-lg md:text-xl">%</span>
                </div> */}

                {/* Main Logo */}
                <div className="flex items-center justify-center font-space font-bold overflow-hidden">
                    <div className="text-7xl md:text-[12rem] flex items-baseline tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        <motion.span variants={letterVariants} initial="hidden" animate="visible" custom={0}>M</motion.span>

                        <div className="flex overflow-hidden">
                            <AnimatePresence>
                                {step >= 1 && (
                                    <>
                                        <motion.span
                                            initial={{ width: 0, opacity: 0, x: -20 }}
                                            animate={{ width: "auto", opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className="text-[#fbb657]"
                                        >n</motion.span>
                                        <motion.span
                                            initial={{ width: 0, opacity: 0, x: -20 }}
                                            animate={{ width: "auto", opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                        >f</motion.span>
                                        <motion.span
                                            initial={{ width: 0, opacity: 0, x: -20 }}
                                            animate={{ width: "auto", opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                        >s</motion.span>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        <motion.span variants={letterVariants} initial="hidden" animate="visible" custom={4}>t</motion.span>
                    </div>
                </div>

                {/* Subtitle & Progress Bar */}
                <div className="w-full max-w-xs mt-8 md:mt-4 flex flex-col items-center">
                    <div className="h-4 overflow-hidden mb-4">
                        <AnimatePresence>
                            {step >= 2 && (
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-[10px] tracking-[0.8em] md:tracking-[1.2em] uppercase font-dm"
                                    style={{ color: 'var(--text-muted)' }}
                                >
                                    Creative Agency
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Minimal Progress Bar */}
                    <div className="w-full h-[1px] relative overflow-hidden" style={{ backgroundColor: 'var(--border-color)' }}>
                        <motion.div
                            className="absolute inset-y-0 left-0"
                            style={{ backgroundColor: 'var(--accent-primary)' }}
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>
                </div>
            </div>

            {/* Background Polish */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] mix-blend-screen animate-pulse"
                    style={{ backgroundColor: 'var(--accent-primary)' }} />
            </div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
    );
};

export default Preloader;
