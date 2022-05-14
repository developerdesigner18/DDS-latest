import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/AboutUs/AboutContent";
import OurHistory from "../components/AboutUs/OurHistory";
import WhyDDS from "../components/AboutUs/WhyDDS";
import OurMission from "../components/AboutUs/OurMission";
import OurVision from "../components/AboutUs/OurVision";
import GrowWithUs from "../components/AboutUs/GrowWithUs";
import Footer from "../components/_App/Footer";

const AboutUs = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="About Us" />

            <AboutContent />

            <OurHistory />

            <WhyDDS />

            <OurMission />

            <OurVision />

            <GrowWithUs />

            <Footer />
        </>
    );
};

export default AboutUs;
