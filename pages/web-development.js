import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceCard from "../components/Common/ServiceCard";
import InfoCard from "../components/Common/InfoCard";
import WebDevelopmentServices from "../components/WebDevelopment/WebDevelopmentServices";
import TechnologyStack from "../components/WebDevelopment/TechnologyStack";
import WebDevelopmentProcess from "../components/WebDevelopment/WebDevelopmentProcess";
import WebDevelopmentAreas from "../components/WebDevelopment/WebDevelopmentAreas";
import Footer from "../components/_App/Footer";

const WebDevelopment = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Web Development" />

            <ServiceCard />

            <InfoCard />

            <WebDevelopmentServices />

            <TechnologyStack />

            <WebDevelopmentProcess />

            <WebDevelopmentAreas />

            <Footer />
        </>
    );
};

export default WebDevelopment;
