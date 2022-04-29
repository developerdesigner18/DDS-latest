import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeDemoOne/MainBanner';
import Features from '../components/HomeDemoOne/Features';
import AboutSection from '../components/HomeDemoOne/AboutSection';
import WhatWeDo from '../components/Common/WhatWeDo';
import ServicesCard from '../components/Common/ServicesCard';
import TestimonialStyleOne from '../components/Common/TestimonialStyleOne';
import Partner from '../components/Common/Partner';
import OurTeamStyleOne from '../components/Common/OurTeamStyleOne';
import Pricing from '../components/Common/Pricing';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/_App/Footer';

const Index = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <Features />

            <AboutSection />

            <WhatWeDo />

            <ServicesCard />

            <TestimonialStyleOne />

            <Partner />

            <OurTeamStyleOne />

            <Pricing />

            <SubscribeForm />
            
            <Footer />
        </>
    )
}

export default Index;