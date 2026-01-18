import React, { useEffect, useState } from 'react';
import useSpotlightEffect from '../hooks/use-spotlight';

const SpotlightCursor = ({
    config = {},
    className = '',
    ...rest
}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Observer to detect dark mode changes on the html element
    useEffect(() => {
        const checkTheme = () => {
            const theme = document.documentElement.getAttribute('data-theme');
            setIsDarkMode(theme === 'dark');
        };

        // Check initially
        checkTheme();

        // Create an observer instance
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    checkTheme();
                }
            });
        });

        // Start observing the target node for configured mutations
        observer.observe(document.documentElement, { attributes: true });

        // Cleanup
        return () => observer.disconnect();
    }, []);

    const spotlightConfig = {
        radius: 300, // Reduced radius as requested
        brightness: 0.15, // Subtle brightness
        color: '#ffffff',
        smoothing: 0.15, // Slightly more lag for fluid feel
        isEnabled: isDarkMode, // Only enabled in dark mode
        ...config,
    };

    const canvasRef = useSpotlightEffect(spotlightConfig);

    // If not dark mode, we can either return null or render hidden canvas. 
    // Rendering hidden canvas keeps hook active but clearing. 
    // Returning null unmounts hook. simpler to return null to save resources.
    if (!isDarkMode) return null;

    return (
        <canvas
            ref={canvasRef}
            className={`fixed top-0 left-0 pointer-events-none z-[9999] w-full h-full ${className}`}
            {...rest}
        />
    );
};

export default SpotlightCursor;
