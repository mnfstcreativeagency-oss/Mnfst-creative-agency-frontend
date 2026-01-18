import { useEffect, useRef, useState } from 'react';

const useSpotlightEffect = ({
    radius = 400,
    brightness = 0.15,
    color = '#ffffff',
    smoothing = 0.1,
    isEnabled = true,
} = {}) => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const spotRef = useRef({ x: -1000, y: -1000 });
    const frameRef = useRef();

    // Helper to convert hex to rgba
    const hexToRgba = (hex, alpha) => {
        let r = 0, g = 0, b = 0;
        // Handle short hex #fff
        let h = hex.replace('#', '');
        if (h.length === 3) {
            h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
        }
        if (h.length === 6) {
            r = parseInt(h.substring(0, 2), 16);
            g = parseInt(h.substring(2, 4), 16);
            b = parseInt(h.substring(4, 6), 16);
        }
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        // Resize logic
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        // Initial setup
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        // Animation Loop
        const render = () => {
            if (!isEnabled) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // If disabled, just clear and wait (or stop loop, but waiting is safer for toggle)
                frameRef.current = requestAnimationFrame(render);
                return;
            }

            // Smoothing (Lerp)
            const targetX = mouseRef.current.x;
            const targetY = mouseRef.current.y;

            const dx = targetX - spotRef.current.x;
            const dy = targetY - spotRef.current.y;

            if (spotRef.current.x === -1000) {
                spotRef.current.x = targetX;
                spotRef.current.y = targetY;
            } else {
                spotRef.current.x += dx * smoothing;
                spotRef.current.y += dy * smoothing;
            }

            const x = spotRef.current.x;
            const y = spotRef.current.y;

            // Clear previous frame
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 1. Draw Ambient "Lighter" Background
            // The user requested the area outside the radius to be lighter.
            // We fill the entire screen with a very faint wash of the color.
            ctx.fillStyle = hexToRgba(color, 0.04); // 4% opacity white wash
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 2. Draw Spotlight
            // We create a radial gradient centered at the cursor
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);

            // Core is brighter, falls off to transparent (blends with ambient)
            gradient.addColorStop(0, hexToRgba(color, brightness));
            gradient.addColorStop(0.5, hexToRgba(color, brightness * 0.5));
            gradient.addColorStop(1, hexToRgba(color, 0));

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            frameRef.current = requestAnimationFrame(render);
        };

        frameRef.current = requestAnimationFrame(render);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(frameRef.current);
        };
    }, [radius, brightness, color, smoothing, isEnabled]);

    return canvasRef;
};

export default useSpotlightEffect;
