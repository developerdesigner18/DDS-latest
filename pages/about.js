import Navbar from "../components/_App/Navbar/Navbar";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import AboutContent from "../components/About/AboutContent/AboutContent";
import OurHistory from "../components/About/OurHistory/OurHistory";
import WhyDDS from "../components/About/WhyDDS/WhyDDS";
import OurMission from "../components/About/OurMission/OurMission";
import OurVision from "../components/About/OurVision/OurVision";
import GrowWithUs from "../components/About/GrowWithUs/GrowWithUs";
import Footer from "../components/_App/Footer/Footer";

const About = () => {
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

export default About;
