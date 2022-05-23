import Navbar from "../components/_App/Navbar/Navbar";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import ServiceCard from "../components/Common/ServiceCard/ServiceCard";
import InfoCard from "../components/Common/InfoCard";
import LaravelIndustries from "../components/Laravel/LaravelIndustries/LaravelIndustries";
import LaravelServices from "../components/Laravel/LaravelServices/LaravelServices";
import ProjectInMind from "../components/Laravel/ProjectInMind/ProjectInMind";
import OurExpertise from "../components/Laravel/OurExpertise/OurExpertise";
import Footer from "../components/_App/Footer/Footer";

const Laravel = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Laravel" />

            <ServiceCard />

            <InfoCard />

            <LaravelIndustries />

            <LaravelServices />

            <ServiceCard />

            <ProjectInMind />

            <OurExpertise />

            <Footer />
        </>
    );
};

export default Laravel;
