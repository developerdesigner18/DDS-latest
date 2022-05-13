import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/AboutUs/AboutContent';
import OurHistory from '../components/AboutUs/OurHistory';
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

            {/* <WhyDDS /> */}

            {/* <OurMission /> */}

            {/* <OurVision /> */}

            {/* <GrowWithUs /> */}
		  
			<Footer />
		</>
    )
}

export default AboutUs;