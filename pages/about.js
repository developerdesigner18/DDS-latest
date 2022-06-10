import PageBanner from "../components/Common/PageBanner/PageBanner";
import AboutContent from "../components/About/AboutContent/AboutContent";
import OurHistory from "../components/About/OurHistory/OurHistory";
import WhyDDS from "../components/About/WhyDDS/WhyDDS";
import OurMission from "../components/About/OurMission/OurMission";
import OurVision from "../components/About/OurVision/OurVision";
import GrowWithUs from "../components/About/GrowWithUs/GrowWithUs";

const About = () => {
    return (
        <>
            <PageBanner pageTitle="About Us" />

            <AboutContent />

            <OurHistory />

            <WhyDDS />

            <OurMission />

            <OurVision />

            <GrowWithUs />
        </>
    );
};

export default About;
