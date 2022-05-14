import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceCard from "../components/Common/ServiceCard";
import InfoCard from "../components/Common/InfoCard";
import LaravelIndustries from "../components/Laravel/LaravelIndustries";
import LaravelServices from "../components/Laravel/LaravelServices";
import ProjectInMind from "../components/Laravel/ProjectInMind";
import OurExpertise from "../components/Laravel/OurExpertise";
import Footer from "../components/_App/Footer";

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
