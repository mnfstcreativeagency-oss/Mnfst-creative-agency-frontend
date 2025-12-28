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
import ParticleDrift from '../components/ParticleDrift';

const Home = () => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <AnimatePresence>
                {loading && <Preloader finishLoading={() => setLoading(false)} />}
            </AnimatePresence>

            <div className={`w-full relative min-h-screen transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                {!loading && <ParticleDrift />}
                <Navbar />
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
