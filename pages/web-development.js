import PageBanner from "../components/Common/PageBanner/PageBanner";
import ServiceCard from "../components/Common/ServiceCard/ServiceCard";
import InfoCard from "../components/Common/InfoCard/InfoCard";
import WebDevelopmentServices from "../components/WebDevelopment/WebDevelopmentServices/WebDevelopmentServices";
import TechnologyStack from "../components/WebDevelopment/TechnologyStack/TechnologyStack";
import WebDevelopmentProcess from "../components/WebDevelopment/WebDevelopmentProcess/WebDevelopmentProcess";
import WebDevelopmentAreas from "../components/WebDevelopment/WebDevelopmentAreas/WebDevelopmentAreas";

const WebDevelopment = () => {
    return (
        <>
            <PageBanner pageTitle="Web Development" />

            <ServiceCard />

            <InfoCard />

            <WebDevelopmentServices />

            <TechnologyStack />

            <WebDevelopmentProcess />

            <WebDevelopmentAreas />
        </>
    );
};

export default WebDevelopment;
