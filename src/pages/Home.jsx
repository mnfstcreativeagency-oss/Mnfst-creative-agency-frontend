import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Services from '../components/Services';
import WorkCarousel from '../components/WorkCarousel';
import Testimonials from '../components/Testimonials';
import InquirySection from '../components/InquirySection';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import Preloader from '../components/Preloader';


const Home = () => {
    // Initialize state based on session storage to prevent flash
    const [loading, setLoading] = useState(() => {
        return !sessionStorage.getItem('mnfst_loaded');
    });

    const handlePreloaderFinish = () => {
        sessionStorage.setItem('mnfst_loaded', 'true');
        setLoading(false);
    };

    return (
        <>
            <AnimatePresence>
                {loading && <Preloader finishLoading={handlePreloaderFinish} />}
            </AnimatePresence>

            <div className={`w-full relative min-h-screen transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                <FloatingContact />
                <main>
                    <Hero />
                    <Clients />
                    <Services />
                    <WorkCarousel />
                    <Testimonials />
                    <InquirySection />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Home;
