import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const logos = [
    { name: "The Lazy Learning", image: "https://res.cloudinary.com/dkxtthv23/image/upload/v1766905060/lazylearning_eglrzi.jpg" },
    { name: "Level Up With Kumar", image: "https://res.cloudinary.com/dkxtthv23/image/upload/v1766905060/levelupwithkumar_wclkwl.jpg" },
    { name: "Nihar", image: "https://res.cloudinary.com/dkxtthv23/image/upload/v1766905060/nihar_qqwwfe.jpg" },
    { name: "Sahara Family Vlogs", image: "https://res.cloudinary.com/dkxtthv23/image/upload/v1766905060/sahara_gunegc.jpg" },
    { name: "Likhith Mullapudi", image: "https://res.cloudinary.com/dkxtthv23/image/upload/v1766905059/likith_hizcij.jpg" },
    { name: "AI With Aakash", image: "https://res.cloudinary.com/dkxtthv23/image/upload/v1766905059/akash_a3vlpr.jpg" },
    { name: "Abhi Top Tech", image: "https://res.cloudinary.com/dkxtthv23/image/upload/v1766905059/abhitopintech_iagykh.jpg" },
    { name: "Asian Monk Wall Art", image: "https://res.cloudinary.com/dkxtthv23/image/upload/v1766905059/asain_monk_ezibvo.jpg" },
];

const CIRCLE_RADIUS = 600;
const ITEM_SIZE = 180;
const GAP_ANGLE = 40;

const Clients = () => {
    // Start centered at top (-90 degrees)
    const rotation = useMotionValue(-90);

    // Smooth physics
    const smoothRotation = useSpring(rotation, {
        damping: 50,
        stiffness: 300,
        mass: 2
    });

    const visibleItems = [...logos, ...logos, ...logos, ...logos];

    // Gentle auto-rotation
    useEffect(() => {
        const interval = setInterval(() => {
            const current = rotation.get();
            rotation.set(current + 0.5); // Slow gentle rotation
        }, 50); // Update every 50ms

        return () => clearInterval(interval);
    }, [rotation]);

    const handlePan = (_, info) => {
        const currentRotation = rotation.get();
        rotation.set(currentRotation + info.delta.x * 0.1);
    };

    return (
        <section className="py-24 overflow-hidden relative flex flex-col items-center justify-start min-h-[800px]" style={{ backgroundColor: 'var(--bg-primary)' }}>

            {/* The Rotating Wheel Container */}
            <div
                className="relative flex items-center justify-center flex-shrink-0"
                style={{
                    width: CIRCLE_RADIUS * 2,
                    height: CIRCLE_RADIUS,
                    overflow: 'hidden'
                }}
            >
                {/* Interaction Layer */}
                <motion.div
                    className="absolute inset-x-0 top-0 bottom-0 z-40 cursor-grab active:cursor-grabbing rounded-t-full"
                    onPan={handlePan}
                    whileTap={{ cursor: "grabbing" }}
                />

                {/* The Rotating Anchor */}
                <motion.div
                    className="absolute w-full h-[200%] rounded-full border border-dashed border-gray-100 top-0 pointer-events-none"
                    style={{
                        rotate: smoothRotation,
                        originX: 0.5,
                        originY: 0.5,
                    }}
                >
                    {visibleItems.map((logo, index) => {
                        const angle = index * GAP_ANGLE;

                        return (
                            <ClientItem
                                key={index}
                                logo={logo}
                                angle={angle}
                            />
                        );
                    })}
                </motion.div>

                {/* Edge Fades */}
                <div className="absolute top-0 left-0 w-1/4 h-full  from-transparent via-black/20 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-1/4 h-full from-transparent via-black/20 to-transparent z-20 pointer-events-none"></div>

                {/* TEXT INSIDE THE ARCH */}
                <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-end h-full pb-20 pointer-events-none">
                    <h2 className="text-5xl md:text-6xl font-bold text-primary mb-2 tracking-tight">
                        Trusted by
                    </h2>
                    <h2 className="text-5xl md:text-6xl font-chewy text-accent tracking-wide">
                        Creators
                    </h2>
                </div>
            </div>

            <p className="text-gray-300 text-xs font-medium tracking-[0.3em] uppercase mt-12 opacity-60">
                Auto-rotating • Swipe to control
            </p>

        </section>
    );
};

const ClientItem = ({ logo, angle }) => {
    return (
        <motion.div
            className="absolute top-0 left-1/2 -ml-[90px]"
            style={{
                width: ITEM_SIZE,
                height: ITEM_SIZE,
                originY: `${CIRCLE_RADIUS}px`,
                rotate: angle,
            }}
        >
            <div
                className="w-full h-full rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.2)] border-4 overflow-hidden relative select-none group"
                style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--text-primary)'
                }}
            >
                {/* Background Image */}
                <img
                    src={logo.image}
                    alt={logo.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                {/* Text Overlay */}
                <div className="absolute bottom-10 left-0 right-0 p-3 text-center">
                    <h3 className="text-white font-bold uppercase leading-tight tracking-wider drop-shadow-md text-xs" style={{ color: 'white' }}>
                        {logo.name}
                    </h3>
                </div>
            </div>
        </motion.div>
    );
};

export default Clients;
