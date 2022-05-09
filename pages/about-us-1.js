import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/AboutUs/AboutContent';
import OurHistory from '../components/AboutUs/OurHistory';
import OurTeamStyleOne from '../components/Common/OurTeamStyleOne';
import Partner from '../components/Common/Partner';
import TestimonialStyleOne from '../components/Common/TestimonialStyleOne';
import Footer from '../components/_App/Footer';

const AboutUs = () => {
    return (
        <>
			<Navbar />

			<PageBanner 
                pageTitle="About Us" 
            />  
            
            <AboutContent />

            <OurHistory />

            <OurTeamStyleOne />

            <Partner />

            <TestimonialStyleOne />
		  
			<Footer />
		</>
    )
}

export default AboutUs;