import Navbar from "../components/_App/Navbar/Navbar";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import ServiceCard from "../components/Common/ServiceCard/ServiceCard";
import InfoCard from "../components/Common/InfoCard/InfoCard";
import Features from "../components/Solutions/Features/Features";
import GetAQuote from "../components/Solutions/GetAQuote/GetAQuote";
import Footer from "../components/_App/Footer/Footer";

const Solution = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Solution" />

            <ServiceCard />

            <InfoCard />

            <Features />

            <InfoCard />

            <GetAQuote />

            <Footer />
        </>
    );
};

export default Solution;
