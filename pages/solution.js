import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceCard from "../components/Common/ServiceCard";
import InfoCard from "../components/Common/InfoCard";
import Features from "../components/Solutions/Features";
import GetAQuote from "../components/Solutions/GetAQuote";
import Footer from "../components/_App/Footer";

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
