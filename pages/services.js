import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceCard from "../components/Common/ServiceCard";
import WhatWeOffer from "../components/Services/WhatWeOffer";
import Footer from "../components/_App/Footer";

const Services = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Services" />

            <ServiceCard />

            <WhatWeOffer />

            <Footer />
        </>
    );
};

export default Services;
