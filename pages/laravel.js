import PageBanner from "../components/Common/PageBanner/PageBanner";
import ServiceCard from "../components/Common/ServiceCard/ServiceCard";
import InfoCard from "../components/Common/InfoCard/InfoCard";
import LaravelIndustries from "../components/Laravel/LaravelIndustries/LaravelIndustries";
import LaravelServices from "../components/Laravel/LaravelServices/LaravelServices";
import ProjectInMind from "../components/Laravel/ProjectInMind/ProjectInMind";
import OurExpertise from "../components/Laravel/OurExpertise/OurExpertise";

const Laravel = () => {
    return (
        <>
            <PageBanner pageTitle="Laravel" />

            <ServiceCard />

            <InfoCard />

            <LaravelIndustries />

            <LaravelServices />

            <ServiceCard />

            <ProjectInMind />

            <OurExpertise />
        </>
    );
};

export default Laravel;
