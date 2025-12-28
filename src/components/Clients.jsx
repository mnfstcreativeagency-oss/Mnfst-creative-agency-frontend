import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const logos = [
    { name: "BADD MEDICINE", color: "#FF0055" },
    { name: "TBR SCHMITT", color: "#00CC88" },
    { name: "FAN POPS", color: "#22CC88" },
    { name: "REEL REJECTS", color: "#0099FF" },
    { name: "KANG VAR", color: "#FFAA00" },
    { name: "MR BEAST", color: "#E60023" },
    { name: "SIDEMEN", color: "#111111" },
    { name: "LOGITECH", color: "#2E3192" },
    { name: "AIRRACK", color: "#0099FF" },
    { name: "JIDION", color: "#000000" },
    { name: "DUDE PERFECT", color: "#22CC88" },
    { name: "LOGAN PAUL", color: "#E60023" },
];

const CIRCLE_RADIUS = 600;
const ITEM_SIZE = 180; // Reduced to 180 for better separation
const GAP_ANGLE = 40; // Increased to 40 for guaranteed no overlap

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
                Swipe to Rotate
            </p>

        </section>
    );
};

const ClientItem = ({ logo, angle }) => {
    return (
        <motion.div
            className="absolute top-0 left-1/2 -ml-[90px]" // Center: half of 180
            style={{
                width: ITEM_SIZE,
                height: ITEM_SIZE,
                originY: `${CIRCLE_RADIUS}px`,
                rotate: angle,
            }}
        >
            <div
                className="w-full h-full rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.06)] border flex flex-col items-center justify-center p-5 relative select-none"
                style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-color)'
                }}
            >
                <div
                    className="w-16 h-16 mx-auto rounded-full mb-3 flex items-center justify-center text-white font-bold text-xl shadow-md"
                    style={{ backgroundColor: logo.color }}
                >
                    {logo.name.charAt(0)}
                </div>

                <h3 className="text-xs font-bold uppercase leading-tight tracking-wider text-center" style={{ color: 'var(--text-primary)' }}>
                    {logo.name}
                </h3>
            </div>
        </motion.div>
    );
};

export default Clients;
