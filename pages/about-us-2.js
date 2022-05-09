import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutContentTwo from '../components/AboutUs/AboutContentTwo';
import OurHistory from '../components/AboutUs/OurHistory';
import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/_App/Footer';

const AboutUs = () => {
    return (
        <>
			<Navbar />
            
			<PageBanner 
                pageTitle="About Us" 
            />  
            
            <AboutContentTwo />

            <OurHistory />

            <OurTeamStyleTwo />

            <TestimonialStyleTwo />

            <Partner />
		  
			<Footer />
		</>
    )
}

export default AboutUs;